/**
 * visualizer-fix.js  (revised)
 *
 * Changes vs previous version:
 *  • NO "Capture Playing Audio" button — visualizer auto-starts when the
 *    booster toggle is turned ON.
 *  • NO separate "Start Boost" button — boost is automatic when toggle is ON.
 *  • Toggle OFF → audio keeps playing at normal volume (gain = 1.0), NOT muted.
 *  • Speaker / Headset output selector properly switches the AudioContext sink.
 *  • VB-Cable capture is used when available; falls back to getDisplayMedia.
 */
(function () {
  'use strict';

  var FFT_SIZE = 2048;

  // ── Audio state ──────────────────────────────────────────────────────────
  var audioCtx      = null;
  var analyserNode  = null;
  var gainNode      = null;
  var srcNode       = null;
  var captureStream = null;
  var frequencyData = null;
  var timeData      = null;
  var audioReady    = false;
  var animStarted   = false;
  var waveController = null;
  var fallbackCtx    = null;
  var fallbackCanvas = null;

  // Boost level when toggle is ON
  var BOOST_GAIN  = 2.0;
  // Normal (unity) gain when toggle is OFF — audio still plays, just not boosted
  var NORMAL_GAIN = 1.0;

  // ── Toggle detection ─────────────────────────────────────────────────────
  function getBoostToggle() {
    return document.querySelector('input[type="checkbox"]');
  }

  function isBoostOn() {
    var toggle = getBoostToggle();
    return toggle ? toggle.checked : false;
  }

  // ── Apply gain based on toggle state ────────────────────────────────────
  function applyGain() {
    if (!gainNode) return;
    gainNode.gain.value = isBoostOn() ? BOOST_GAIN : NORMAL_GAIN;
  }

  // ── Output device (speaker / headset) ───────────────────────────────────
  async function applyOutputDevice(deviceId) {
    if (!deviceId) return;
    if (audioCtx && typeof audioCtx.setSinkId === 'function') {
      try { await audioCtx.setSinkId(deviceId); } catch (e) {}
    } else if (audioCtx && audioCtx.destination && typeof audioCtx.destination.setSinkId === 'function') {
      try { await audioCtx.destination.setSinkId(deviceId); } catch (e) {}
    }
    document.querySelectorAll('audio, video').forEach(async function (el) {
      if (typeof el.setSinkId === 'function') {
        try { await el.setSinkId(deviceId); } catch (e) {}
      }
    });
  }

  // ── Start audio capture & visualizer ────────────────────────────────────
  async function startCapture() {
    if (audioReady) return;

    try {
      // 1. Try VB-Cable Output first
      var devices = [];
      try {
        var tempStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        tempStream.getTracks().forEach(function (t) { t.stop(); });
        devices = await navigator.mediaDevices.enumerateDevices();
      } catch (e) {}

      var cableOut = null;
      for (var i = 0; i < devices.length; i++) {
        var d = devices[i];
        if (d.kind === 'audioinput' && d.label.toLowerCase().indexOf('cable output') !== -1) {
          cableOut = d;
          break;
        }
      }

      if (cableOut) {
        captureStream = await navigator.mediaDevices.getUserMedia({
          audio: {
            deviceId: { exact: cableOut.deviceId },
            echoCancellation:  false,
            noiseSuppression:  false,
            autoGainControl:   false,
            channelCount: 2,
          }
        });
        console.log('[VisualizerFix] Using VB-Cable Output');
      } else {
        // Fallback: getDisplayMedia
        var displayStream = await navigator.mediaDevices.getDisplayMedia({
          video: { frameRate: 1 },
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            sampleRate: 48000,
            channelCount: 2,
          },
        });
        displayStream.getVideoTracks().forEach(function (t) { t.stop(); });
        var audioTracks = displayStream.getAudioTracks();
        if (audioTracks.length === 0) {
          throw new Error('No audio track — tick "Share audio" in the picker.');
        }
        captureStream = displayStream;
        audioTracks[0].addEventListener('ended', function () { stopCapture(); });
        console.log('[VisualizerFix] Using getDisplayMedia fallback');
      }

      // 2. Build pipeline: source → gain → compressor → analyser → destination
      audioCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 48000 });
      srcNode  = audioCtx.createMediaStreamSource(captureStream);

      gainNode = audioCtx.createGain();
      applyGain();

      var comp = audioCtx.createDynamicsCompressor();
      comp.threshold.value = -24;
      comp.knee.value       = 30;
      comp.ratio.value      = 12;
      comp.attack.value     = 0.003;
      comp.release.value    = 0.25;

      analyserNode = audioCtx.createAnalyser();
      analyserNode.fftSize               = FFT_SIZE;
      analyserNode.smoothingTimeConstant = 0.8;

      srcNode.connect(gainNode);
      gainNode.connect(comp);
      comp.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);

      frequencyData = new Uint8Array(analyserNode.frequencyBinCount);
      timeData      = new Uint8Array(analyserNode.frequencyBinCount);
      audioReady    = true;

      // 3. Apply currently-selected output device
      var outSel = document.getElementById('bma-out');
      if (outSel && outSel.value) await applyOutputDevice(outSel.value);

      // 4. Try to wire into app's internal pipeline (drives LED bars)
      tryConnectToAppPipeline(comp);

      console.log('[VisualizerFix] Capture active. Boost:', isBoostOn() ? 'ON (x' + BOOST_GAIN + ')' : 'OFF (x' + NORMAL_GAIN + ')');
      startDrawLoop();

    } catch (err) {
      console.warn('[VisualizerFix] Capture error:', err);
      audioReady = false;
    }
  }

  function stopCapture() {
    audioReady  = false;
    animStarted = false;
    waveController = null;
    fallbackCtx    = null;

    if (captureStream) { captureStream.getTracks().forEach(function (t) { t.stop(); }); captureStream = null; }
    if (srcNode)  { try { srcNode.disconnect();  } catch (e) {} srcNode  = null; }
    if (gainNode) { try { gainNode.disconnect();  } catch (e) {} gainNode = null; }
    if (audioCtx) { try { audioCtx.close();       } catch (e) {} audioCtx = null; }
    console.log('[VisualizerFix] Capture stopped');
  }

  // ── App pipeline (for LED bars in the app UI) ────────────────────────────
  function getAppMod() {
    try {
      var req = null;
      self.webpackChunkmagic_audio.push([['bma-r'], {}, function (r) { req = r; }]);
      return req ? req('6617') : null;
    } catch (e) { return null; }
  }

  function findAppPlayer() {
    try {
      var mod = getAppMod();
      if (!mod || !mod.GW) return null;
      var ctrl = mod.GW.getInstance();
      if (!ctrl) return null;
      var svc = ctrl.backgroundStreamPlayerService;
      if (svc && svc.streamPlayerArray) {
        var keys = Object.keys(svc.streamPlayerArray);
        for (var i = 0; i < keys.length; i++) {
          var sp = svc.streamPlayerArray[keys[i]];
          if (sp && sp.pluginProcessorAudioNode) return sp;
        }
      }
      var msvc = ctrl.backgroundMediaPlayerService;
      if (msvc && msvc.mediaPlayerArray) {
        var mkeys = Object.keys(msvc.mediaPlayerArray);
        for (var j = 0; j < mkeys.length; j++) {
          var mp = msvc.mediaPlayerArray[mkeys[j]];
          if (mp && mp.pluginProcessorAudioNode) return mp;
        }
      }
    } catch (e) {}
    return null;
  }

  function tryConnectToAppPipeline(sourceNode) {
    var player = findAppPlayer();
    if (!player) return;
    try {
      sourceNode.connect(player.pluginProcessorAudioNode.getInput());
      if (player.analyserNode) sourceNode.connect(player.analyserNode);
      player.pluginProcessorAudioNode.getOutput().connect(audioCtx.destination);
      console.log('[VisualizerFix] Connected to app pipeline');
    } catch (e) {
      console.warn('[VisualizerFix] App pipeline connect failed:', e.message);
    }
  }

  // ── React fiber walk for waveController ──────────────────────────────────
  function getHookSlot(fiber, n) {
    var node = fiber && fiber.memoizedState;
    for (var i = 0; i < n && node; i++) node = node.next;
    return node ? node.memoizedState : null;
  }

  function findWaveController(canvas) {
    var fiberKey = Object.keys(canvas).find(function (k) {
      return k.startsWith('__reactFiber') || k.startsWith('__reactInternalInstance');
    });
    if (!fiberKey) return null;
    var fiber = canvas[fiberKey];
    var limit = 60;
    while (fiber && limit-- > 0) {
      var slot = getHookSlot(fiber, 3);
      if (slot && slot.current && typeof slot.current.drawFrame === 'function') {
        console.log('[VisualizerFix] waveController found');
        return slot.current;
      }
      fiber = fiber.return;
    }
    return null;
  }

  // ── Draw loop ────────────────────────────────────────────────────────────
  function startDrawLoop() {
    if (animStarted) return;
    animStarted = true;
    var canvas = findVisCanvas();
    if (canvas) initCanvas(canvas);
    else waitForCanvas(initCanvas);
  }

  function initCanvas(canvas) {
    fallbackCanvas = canvas;
    setTimeout(function () {
      waveController = findWaveController(canvas);
      if (!waveController) {
        fallbackCtx = canvas.getContext('2d');
        console.warn('[VisualizerFix] Fallback bar renderer active');
      }
      rafLoop();
    }, 200);
  }

  function rafLoop() {
    requestAnimationFrame(function loop() {
      requestAnimationFrame(loop);
      if (!audioReady || !analyserNode) return;
      analyserNode.getByteFrequencyData(frequencyData);
      analyserNode.getByteTimeDomainData(timeData);
      var data = {
        frequencyData:     frequencyData,
        timeData:          timeData,
        frequencyBinCount: analyserNode.frequencyBinCount,
        bufferSize:        analyserNode.frequencyBinCount,
      };
      if (waveController) {
        waveController.drawFrame(data);
      } else if (fallbackCtx) {
        drawFallbackBars(fallbackCtx, fallbackCanvas, frequencyData);
      }
    });
  }

  function findVisCanvas() {
    var all = document.querySelectorAll('canvas');
    for (var i = 0; i < all.length; i++) {
      if (all[i].width === 1000 && all[i].height === 500) return all[i];
    }
    return null;
  }

  function waitForCanvas(cb) {
    var obs = new MutationObserver(function () {
      var c = findVisCanvas();
      if (c) { obs.disconnect(); cb(c); }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    var c = findVisCanvas();
    if (c) { obs.disconnect(); cb(c); }
  }

  // ── Fallback bar visualizer ───────────────────────────────────────────────
  function drawFallbackBars(ctx, canvas, freqData) {
    var w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var count = 90, gap = 2;
    var bw = (w - gap * count) / count;
    var step = Math.floor(freqData.length / count);
    for (var i = 0; i < count; i++) {
      var v = freqData[i * step] / 255;
      var bh = v * h;
      var hue = 220 - v * 180;
      ctx.fillStyle = 'hsl(' + hue + ',100%,' + (40 + v * 30) + '%)';
      ctx.fillRect(i * (bw + gap), h - bh, bw, bh);
    }
  }

  // ── Toggle watcher ───────────────────────────────────────────────────────
  var toggleObserver = null;

  function watchToggle() {
    var toggle = getBoostToggle();
    if (!toggle) {
      setTimeout(watchToggle, 500);
      return;
    }

    function onToggleChange() {
      if (isBoostOn()) {
        // Auto-start capture + visualizer when toggle flips ON
        if (!audioReady) startCapture();
        else applyGain(); // already running — just update gain
        console.log('[VisualizerFix] Toggle ON → boost x' + BOOST_GAIN);
      } else {
        // Toggle OFF: keep audio playing at normal volume, just remove boost
        applyGain();
        console.log('[VisualizerFix] Toggle OFF → normal volume x' + NORMAL_GAIN + ' (audio continues)');
      }
    }

    if (toggleObserver) toggleObserver.disconnect();
    toggleObserver = new MutationObserver(onToggleChange);
    toggleObserver.observe(toggle, { attributes: true, attributeFilter: ['checked'] });
    toggle.addEventListener('change', onToggleChange);

    // Fire immediately in case toggle is already ON at boot
    onToggleChange();
  }

  // ── Output device selector wiring (speaker / headset) ────────────────────
  function wireOutputSelector() {
    var outSel = document.getElementById('bma-out');
    if (!outSel) { setTimeout(wireOutputSelector, 500); return; }

    outSel.addEventListener('change', async function () {
      var deviceId = outSel.value;
      await applyOutputDevice(deviceId);
      var label = outSel.options[outSel.selectedIndex] ? outSel.options[outSel.selectedIndex].text : deviceId;
      console.log('[VisualizerFix] Output → ' + label);
    });
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  function boot() {
    // Remove any leftover UI from old version
    var old = document.getElementById('vf-wrap');
    if (old) old.remove();

    watchToggle();
    wireOutputSelector();
    console.log('[VisualizerFix] Ready — visualizer auto-starts when boost toggle is ON.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
