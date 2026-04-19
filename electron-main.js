const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const { fork, execFile, exec } = require('child_process');
const fs = require('fs');

let mainWindow;
let serverProcess;
const PORT = 3000;

function startServer() {
  return new Promise((resolve) => {
    serverProcess = fork(path.join(__dirname, 'server.js'), [], { silent: true });
    serverProcess.stdout.on('data', (data) => {
      if (data.toString().includes('running at')) resolve();
    });
    serverProcess.stderr.on('data', (data) => console.error('[server error]', data.toString()));
    setTimeout(resolve, 1500);
  });
}

function isVBCableInstalled() {
  return new Promise((resolve) => {
    exec('powershell -Command "Get-WmiObject Win32_SoundDevice | Where-Object {$_.Name -like \'*CABLE*\'}"',
      (err, stdout) => resolve(!!(stdout && stdout.includes('CABLE')))
    );
  });
}

function installVBCable() {
  return new Promise((resolve, reject) => {
    const installerPath = path.join(__dirname, 'drivers', 'VBCABLE_Setup_x64.exe');
    if (!fs.existsSync(installerPath)) {
      reject(new Error('VBCABLE_Setup_x64.exe not found in drivers/ folder'));
      return;
    }
    execFile(installerPath, ['-i', '-h'], { windowsHide: false }, (err) => {
      if (err && err.code !== 0) reject(err);
      else resolve();
    });
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 700,
    title: 'Banana Moon Audio',
    icon: path.join(__dirname, 'icons', 'icon-512x512.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    backgroundColor: '#070809',
    show: false,
  });

  mainWindow.webContents.session.setPermissionRequestHandler((wc, permission, cb) => cb(true));
  ipcMain.handle('check-vbcable', async () => ({ installed: await isVBCableInstalled() }));
  ipcMain.handle('install-vbcable', async () => {
    try {
      if (await isVBCableInstalled()) return { success: true, alreadyInstalled: true };
      await installVBCable();
      return { success: true };
    } catch(e) { return { success: false, error: e.message }; }
  });

  mainWindow.loadURL('http://localhost:' + PORT);
  mainWindow.once('ready-to-show', () => mainWindow.show());

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.executeJavaScript(`
(function() {
  if (document.getElementById('bma-injected')) return;
  document.head.insertAdjacentHTML('beforeend', '<meta id="bma-injected">');

  var hideStyle = document.createElement('style');
  hideStyle.textContent = '.MuiGrid-grid-md-4 .MuiPaper-root,.MuiGrid-grid-md-4 .MuiList-root{display:none!important}.css-2tgrqm{display:none!important}body{padding-bottom:60px!important}';
  document.head.appendChild(hideStyle);

  var bar = document.createElement('div');
  bar.id = 'bma-bar';
  bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#0d1117;border-top:2px solid #1f6feb;padding:10px 20px;display:flex;align-items:center;gap:14px;font-family:Segoe UI,sans-serif;box-shadow:0 -4px 24px rgba(0,0,0,0.7)';
  bar.innerHTML = '<span style="color:#fff;font-weight:700;font-size:13px;letter-spacing:1px;white-space:nowrap">🍌 BANANA MOON</span>'
    + '<span style="color:#8b949e;font-size:10px;text-transform:uppercase;letter-spacing:1px">Input</span>'
    + '<select id="bma-in" style="background:#161b22;color:#e6edf3;border:1px solid #30363d;border-radius:6px;padding:5px 10px;font-size:12px;outline:none;cursor:pointer;flex:1;max-width:260px;min-width:120px"><option value="">Loading...</option></select>'
    + '<span style="color:#8b949e;font-size:10px;text-transform:uppercase;letter-spacing:1px">Output</span>'
    + '<select id="bma-out" style="background:#161b22;color:#e6edf3;border:1px solid #30363d;border-radius:6px;padding:5px 10px;font-size:12px;outline:none;cursor:pointer;flex:1;max-width:260px;min-width:120px"><option value="">Loading...</option></select>'
    /* Start Boost button removed — boost auto-starts when toggle is ON */
    + '<div id="bma-status" style="font-size:11px;color:#8b949e;margin-left:auto;white-space:nowrap">Ready</div>';
  document.body.appendChild(bar);
  function setStatus(msg, color) {
    var el = document.getElementById('bma-status');
    if (el) { el.textContent = msg; el.style.color = color || '#3fb950'; }
  }

  var cableStream = null;
  var srcNode = null;
  var gainNode = null;
  var appCtx = null;
  var isStarted = false;

  // Get app webpack module
  function getAppMod() {
    try {
      var req = null;
      self.webpackChunkmagic_audio.push([['bma-r'], {}, function(r) { req = r; }]);
      return req ? req('6617') : null;
    } catch(e) { return null; }
  }

  // Find the active media/stream player with analyserNode and pluginProcessorAudioNode
  function findAppPlayer() {
    try {
      var mod = getAppMod();
      if (!mod || !mod.GW) return null;
      var ctrl = mod.GW.getInstance();
      if (!ctrl) return null;

      // Check stream players first
      var svc = ctrl.backgroundStreamPlayerService;
      if (svc && svc.streamPlayerArray) {
        var keys = Object.keys(svc.streamPlayerArray);
        for (var i = 0; i < keys.length; i++) {
          var sp = svc.streamPlayerArray[keys[i]];
          if (sp && sp.pluginProcessorAudioNode) return sp;
        }
      }

      // Check media players
      var msvc = ctrl.backgroundMediaPlayerService;
      if (msvc && msvc.mediaPlayerArray) {
        var mkeys = Object.keys(msvc.mediaPlayerArray);
        for (var j = 0; j < mkeys.length; j++) {
          var mp = msvc.mediaPlayerArray[mkeys[j]];
          if (mp && mp.pluginProcessorAudioNode) return mp;
        }
      }
    } catch(e) {}
    return null;
  }

  async function bmaToggle() {
    if (isStarted) {
      await bmaStop();
    } else {
      await bmaStart();
    }
  }

  async function bmaStart() {
    setStatus('Capturing system audio...', '#d29922');

    try {
      // Find CABLE Output device
      var devices = await navigator.mediaDevices.enumerateDevices();
      var cableOut = null;
      for (var i = 0; i < devices.length; i++) {
        if (devices[i].kind === 'audioinput' && devices[i].label.toLowerCase().indexOf('cable output') !== -1) {
          cableOut = devices[i];
          break;
        }
      }
      if (!cableOut) throw new Error('CABLE Output not found — check VB-Cable installation');

      // Capture system audio from VB-Cable
      cableStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: { exact: cableOut.deviceId },
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
          channelCount: 2
        }
      });

      // Resume app AudioContext (requires user gesture — this click IS the gesture)
      var mod = getAppMod();
      if (mod && mod.E2) {
        appCtx = mod.E2.getAudioContext();
        if (appCtx && appCtx.state === 'suspended') {
          await appCtx.resume();
          console.log('BMA: App AudioContext resumed:', appCtx.state);
        }
      }

      if (!appCtx || appCtx.state !== 'running') {
        appCtx = new AudioContext({ sampleRate: 48000 });
        console.log('BMA: Created own AudioContext');
      }

      // Create source from VB-Cable stream
      srcNode = appCtx.createMediaStreamSource(cableStream);

      // Gain node for boost
      gainNode = appCtx.createGain();
      gainNode.gain.value = 2.0;

      // Compressor
      var comp = appCtx.createDynamicsCompressor();
      comp.threshold.value = -24;
      comp.knee.value = 30;
      comp.ratio.value = 12;
      comp.attack.value = 0.003;
      comp.release.value = 0.25;

      // Wire: source -> gain -> compressor
      srcNode.connect(gainNode);
      gainNode.connect(comp);

      // Try to connect into app's pipeline so ON/OFF toggle + LED work
      var player = findAppPlayer();
      var connectedToApp = false;

      if (player) {
        try {
          // Connect to pluginProcessorAudioNode input — this makes ON/OFF toggle work
          comp.connect(player.pluginProcessorAudioNode.getInput());
          console.log('BMA: Connected to pluginProcessorAudioNode');

          // Connect to analyserNode — this makes LED bars react
          if (player.analyserNode) {
            comp.connect(player.analyserNode);
            console.log('BMA: Connected to analyserNode — LED will work!');
          }

          // Connect output to destination
          player.pluginProcessorAudioNode.getOutput().connect(appCtx.destination);
          connectedToApp = true;
        } catch(e) {
          console.warn('BMA: App pipeline connect failed:', e.message);
        }
      }

      if (!connectedToApp) {
        // Fallback: connect directly to destination
        comp.connect(appCtx.destination);
        console.log('BMA: Connected to destination (fallback)');

        // Still try to drive the LED by connecting to any analyser we can find
        if (player && player.analyserNode) {
          try { comp.connect(player.analyserNode); } catch(e) {}
        }
      }

      // Apply output device
      var outId = document.getElementById('bma-out').value;
      if (outId && appCtx.destination.setSinkId) {
        try { await appCtx.destination.setSinkId(outId); } catch(e) {}
      }

      // Watch the app ON/OFF toggle and mirror it to our gain node
      // This makes the toggle actually mute/unmute our system audio too
      watchAppToggle(gainNode);

      isStarted = true;
      setStatus(connectedToApp ? 'Boosting — LED + toggle active ✓' : 'Boosting (own engine) ✓', '#3fb950');

    } catch(e) {
      console.error('BMA start error:', e);
      setStatus('Error: ' + e.message, '#f85149');
    }
  }

  async function bmaStop() {
    if (cableStream) { cableStream.getTracks().forEach(function(t) { t.stop(); }); cableStream = null; }
    if (srcNode) { try { srcNode.disconnect(); } catch(e) {} srcNode = null; }
    if (gainNode) { try { gainNode.disconnect(); } catch(e) {} gainNode = null; }
    isStarted = false;
    setStatus('Stopped', '#8b949e');
  }

  // Watch the app ON/OFF toggle switch and mirror its state to our gain
  var toggleObserver = null;
  function watchAppToggle(gain) {
    if (toggleObserver) { toggleObserver.disconnect(); toggleObserver = null; }

    // The toggle is a MUI switch — watch for aria-checked changes
    function applyToggleState() {
      var toggle = document.querySelector('input[type="checkbox"]');
      if (!toggle || !gain) return;
      var isOn = toggle.checked;
      gain.gain.value = isOn ? 2.0 : 1.0;
      console.log('BMA: Toggle state:', isOn ? 'ON' : 'OFF');
    }

    toggleObserver = new MutationObserver(function() {
      applyToggleState();
    });

    var toggleEl = document.querySelector('input[type="checkbox"]');
    if (toggleEl) {
      toggleObserver.observe(toggleEl, { attributes: true, attributeFilter: ['checked'] });
      toggleEl.addEventListener('change', applyToggleState);
      applyToggleState();
    }
  }

  // Auto-start: watch the boost toggle and automatically start/stop capture
  // No button needed — turning toggle ON starts boost, OFF drops to normal volume
  (function autoStartWatcher() {
    function checkToggle() {
      var toggle = document.querySelector('input[type="checkbox"]');
      if (!toggle) { setTimeout(checkToggle, 500); return; }
      var autoObs = new MutationObserver(function() {
        if (toggle.checked && !isStarted) {
          console.log('BMA: Toggle ON — auto-starting boost');
          bmaStart();
        }
        // Toggle OFF is handled inside watchAppToggle (sets gain to 1.0)
      });
      autoObs.observe(toggle, { attributes: true, attributeFilter: ['checked'] });
      toggle.addEventListener('change', function() {
        if (toggle.checked && !isStarted) bmaStart();
      });
      // Fire once at load in case already ON
      if (toggle.checked && !isStarted) bmaStart();
    }
    checkToggle();
  })();

  async function loadDevices() {
    try {
      var s = await navigator.mediaDevices.getUserMedia({ audio: true });
      s.getTracks().forEach(function(t) { t.stop(); });
      var devices = await navigator.mediaDevices.enumerateDevices();
      var inSel = document.getElementById('bma-in');
      var outSel = document.getElementById('bma-out');
      inSel.innerHTML = '<option value="">System Default</option>';
      outSel.innerHTML = '<option value="">System Default</option>';
      var hasCable = false;
      devices.forEach(function(d) {
        var o = document.createElement('option');
        o.value = d.deviceId;
        if (d.kind === 'audioinput') {
          o.text = d.label || ('Mic ' + inSel.length);
          if (d.label.toLowerCase().indexOf('cable output') !== -1) {
            hasCable = true;
            inSel.insertBefore(o, inSel.options[1]);
            inSel.value = d.deviceId;
          } else {
            inSel.appendChild(o);
          }
        } else if (d.kind === 'audiooutput') {
          o.text = d.label || ('Speaker ' + outSel.length);
          // Auto-skip CABLE as output — we want real speakers
          if (d.label.toLowerCase().indexOf('cable') === -1 && outSel.length === 1) {
            outSel.insertBefore(o, outSel.options[1]);
            outSel.value = d.deviceId;
          } else {
            outSel.appendChild(o);
          }
        }
      });

      outSel.addEventListener('change', async function() {
        var id = outSel.value;
        if (appCtx && appCtx.destination.setSinkId && id) {
          try { await appCtx.destination.setSinkId(id); } catch(e) {}
        }
        document.querySelectorAll('audio,video').forEach(async function(el) {
          if (el.setSinkId) try { await el.setSinkId(id); } catch(e) {}
        });
        setStatus('Output changed ✓');
      });

      return hasCable;
    } catch(e) {
      setStatus('Permission needed', '#f85149');
      return false;
    }
  }

  new MutationObserver(function() {
    document.querySelectorAll('.MuiGrid-grid-md-4 .MuiList-root').forEach(function(l) {
      if (l.children.length > 0) {
        var col = l.closest('.MuiGrid-grid-md-4');
        if (col) col.style.display = 'none';
      }
    });
  }).observe(document.body, { childList: true, subtree: true });

  loadDevices().then(function(hasCable) {
    if (hasCable) setStatus('VB-Cable ready — toggle ON to boost', '#3fb950');
    else setStatus('No VB-Cable found', '#d29922');
  });

})();
    `);
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith('http://localhost:' + PORT)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(async () => {
  await startServer();
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (serverProcess) { serverProcess.kill(); serverProcess = null; }
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (serverProcess) { serverProcess.kill(); serverProcess = null; }
});
