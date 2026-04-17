"use strict";
(self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || []).push([
    [489], {
        6617: function(e, t, r) {
            r.d(t, {
                D7: function() {
                    return P
                },
                E2: function() {
                    return je
                },
                GW: function() {
                    return Qe
                },
                KP: function() {
                    return Ye
                },
                R4: function() {
                    return ye
                },
                RO: function() {
                    return Ke
                },
                SR: function() {
                    return m
                },
                f: function() {
                    return te
                },
                gg: function() {
                    return Te
                },
                jc: function() {
                    return L
                }
            });
            r(7378);
            var n = r(7847),
                i = r.n(n),
                a = r(7205),
                o = r.n(a),
                u = function() {
                    function e() {
                        this.daspInstance = null, this.daspInstance = i()({
                            noInitialRun: !0
                        })
                    }
                    return e.prototype.getInstance = function() {
                        return this.daspInstance
                    }, e
                }();

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function c() {
                return c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function l(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, h(e, t)
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }
            var f = function() {
                    function e(e, t) {
                        this._real = e, this._imag = t
                    }
                    var t, r, n, i = e.prototype;
                    return i.conj = function() {
                        return new e(this.real, -this.imag)
                    }, i.mul = function(t) {
                        return new e(this.real * t.real - this.imag * t.imag, this.real * t.imag + this.imag * t.real)
                    }, i.mulWithRealNumber = function(t) {
                        return new e(this.real * t, this.imag * t)
                    }, i.negative = function() {
                        return new e(-this.real, -this.imag)
                    }, i.div = function(t) {
                        var r = t.real * t.real + t.imag * t.imag;
                        return new e((this.real * t.real + this.imag * t.imag) / r, (this.imag * t.real - this.real * t.imag) / r)
                    }, i.add = function(t) {
                        return new e(this.real + t.real, this.imag + t.imag)
                    }, i.sub = function(t) {
                        return new e(this.real - t.real, this.imag - t.imag)
                    }, t = e, (r = [{
                        key: "real",
                        get: function() {
                            return this._real
                        }
                    }, {
                        key: "imag",
                        get: function() {
                            return this._imag
                        }
                    }]) && s(t.prototype, r), n && s(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                d = function() {
                    function e(e) {
                        this.daspService = e, this.BPE = Float32Array.BYTES_PER_ELEMENT, this.MAX_SIZE = 81920 * this.BPE, this.realHeap = this.daspService.getInstance()._malloc(this.MAX_SIZE * this.BPE), this.complexHeap = this.daspService.getInstance()._malloc(2 * this.MAX_SIZE * this.BPE), this.realArray = this.daspService.getInstance().HEAPF32.subarray(this.realHeap / this.BPE, this.realHeap / this.BPE + this.MAX_SIZE), this.complexFlatArray = this.daspService.getInstance().HEAPF32.subarray(this.complexHeap / this.BPE, this.complexHeap / this.BPE + this.MAX_SIZE)
                    }
                    var t = e.prototype;
                    return t.getRealHeap = function() {
                        return this.realHeap
                    }, t.getRealArray = function(e, t) {
                        for (var r = [], n = e; n < e + t; n++) r.push(this.realArray[n]);
                        return r
                    }, t.setRealArray = function(e) {
                        for (var t = e.length, r = 0; r < t; r++) this.realArray[r] = e[r]
                    }, t.getComplexHeap = function() {
                        return this.complexHeap
                    }, t.getComplexArray = function(e) {
                        for (var t = [], r = 0; r < e; r++) {
                            var n = new f(this.complexFlatArray[2 * r + 0], this.complexFlatArray[2 * r + 1]);
                            t.push(n)
                        }
                        return t
                    }, t.setComplexArray = function(e) {
                        for (var t = e.length, r = 0; r < t; r++) this.complexFlatArray[2 * r + 0] = e[r].real, this.complexFlatArray[2 * r + 1] = e[r].imag
                    }, e
                }(),
                p = function() {
                    function e(e, t) {
                        this.daspService = e, this.memoryService = t, this.fftProcessor = new(this.daspService.getInstance().FftProcessor)
                    }
                    var t = e.prototype;
                    return t.forward = function(e) {
                        return this.memoryService.setRealArray(e), this.fftProcessor.forward(this.memoryService.getRealHeap(), this.memoryService.getComplexHeap(), e.length), this.memoryService.getComplexArray(e.length)
                    }, t.inverse = function(e) {
                        this.memoryService.setComplexArray(e), this.fftProcessor.inverse(this.memoryService.getRealHeap(), this.memoryService.getComplexHeap(), e.length);
                        return this.memoryService.getRealArray(0, e.length)
                    }, e
                }(),
                m = function() {
                    function e() {
                        null === e.daspService && (e.daspService = new u, e.memoryService = new d(e.daspService), e.fftService = new p(e.daspService, e.memoryService))
                    }
                    e.getInstance = function() {
                        return e.instance || (e.instance = new e), e.instance
                    };
                    var t = e.prototype;
                    return t.getDaspService = function() {
                        return e.daspService
                    }, t.getMemoryService = function() {
                        return e.memoryService
                    }, t.getFftService = function() {
                        return e.fftService
                    }, e
                }();
            m.instance = null, m.daspService = null, m.memoryService = null, m.fftService = null;
            var g = function() {
                    function e(e, t, r, n) {
                        this.c_l_l = e, this.c_r_l = t, this.c_l_r = r, this.c_r_r = n
                    }
                    return e.prototype.createAudioBuffers = function(e) {
                        var t = this.c_l_l.length;
                        this.buffer_c_l_l = e.createBuffer(1, t, e.sampleRate), this.buffer_c_r_l = e.createBuffer(1, t, e.sampleRate), this.buffer_c_l_r = e.createBuffer(1, t, e.sampleRate), this.buffer_c_r_r = e.createBuffer(1, t, e.sampleRate), this.buffer_c_l_l_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_r_l_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_l_r_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_r_r_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_ll_rl = e.createBuffer(2, t, e.sampleRate), this.buffer_lr_rr = e.createBuffer(2, t, e.sampleRate), this.buffer_ll_rr = e.createBuffer(2, t, e.sampleRate);
                        var r = this.buffer_ll_rr.getChannelData(0),
                            n = this.buffer_ll_rr.getChannelData(1);
                        this.buffer_lr_rl = e.createBuffer(2, t, e.sampleRate);
                        for (var i = this.buffer_lr_rl.getChannelData(0), a = this.buffer_lr_rl.getChannelData(1), o = 0; o < t; o++) this.buffer_c_l_l[o] = this.c_l_l[o], this.buffer_c_r_l[o] = this.c_r_l[o], this.buffer_c_l_r[o] = this.c_l_r[o], this.buffer_c_r_r[o] = this.c_r_r[o], this.buffer_c_l_l_stereo.getChannelData(0)[o] = this.c_l_l[o], this.buffer_c_r_l_stereo.getChannelData(0)[o] = this.c_r_l[o], this.buffer_c_l_r_stereo.getChannelData(0)[o] = this.c_l_r[o], this.buffer_c_r_r_stereo.getChannelData(0)[o] = this.c_r_r[o], this.buffer_c_l_l_stereo.getChannelData(1)[o] = this.c_l_l[o], this.buffer_c_r_l_stereo.getChannelData(1)[o] = this.c_r_l[o], this.buffer_c_l_r_stereo.getChannelData(1)[o] = this.c_l_r[o], this.buffer_c_r_r_stereo.getChannelData(1)[o] = this.c_r_r[o], r[o] = this.c_l_l[o], n[o] = this.c_r_r[o], i[o] = this.c_l_r[o], a[o] = this.c_r_l[o], this.buffer_ll_rl.getChannelData(0)[o] = this.c_l_l[o], this.buffer_ll_rl.getChannelData(1)[o] = this.c_r_l[o], this.buffer_lr_rr.getChannelData(0)[o] = this.c_l_r[o], this.buffer_lr_rr.getChannelData(1)[o] = this.c_r_r[o]
                    }, e
                }(),
                _ = function() {
                    function e() {
                        this.daspXtcArccParameters = new(m.getInstance().getDaspService().getInstance().XtcArccParameters), this.daspXtcArcc = new(m.getInstance().getDaspService().getInstance().XtcArcc)
                    }
                    var t = e.prototype;
                    return t.calculate = function(e, t) {
                        var r = this;
                        return new Promise((function(n, i) {
                            t ? r.calculateFromDasp(e, t).then((function(e) {
                                n(e)
                            }), (function(e) {
                                console.error("calculateFromDasp failed:"), i(e)
                            })) : i(new Error("No args provided"))
                        }))
                    }, t.calculateFromDasp = function(e, t) {
                        var r = this;
                        return new Promise((function(n, i) {
                            if (t) {
                                var a = m.getInstance().getMemoryService().BPE,
                                    o = [];
                                r.calculateFeed(e, t).then((function(i) {
                                    var u = 0,
                                        s = i[0].length;
                                    for (u = 0; u < s; u++) o.push(i[0].left[u]);
                                    for (u = 0; u < s; u++) o.push(i[0].right[u]);
                                    var c = t.numberOfBands,
                                        l = t.frequencies,
                                        h = t.attenuations;
                                    for (u = 0; u < c; u++) o.push(l[u]);
                                    for (u = 0; u < c; u++) o.push(h[u]);
                                    m.getInstance().getMemoryService().setRealArray(o);
                                    var f = 1 * s;
                                    r.daspXtcArccParameters.setForFilterBank(t.angle, t.distance, e.sampleRate, m.getInstance().getMemoryService().getRealHeap() + 0, m.getInstance().getMemoryService().getRealHeap() + 1 * a * s, s, m.getInstance().getMemoryService().getRealHeap() + 2 * a * s + 0, m.getInstance().getMemoryService().getRealHeap() + 2 * a * s + 1 * a * c, c), r.daspXtcArcc.calculate(m.getInstance().getMemoryService().getRealHeap() + 2 * a * s + 0, m.getInstance().getMemoryService().getRealHeap() + 2 * a * s + 1 * a * f, m.getInstance().getMemoryService().getRealHeap() + 2 * a * s + 2 * a * f, m.getInstance().getMemoryService().getRealHeap() + 2 * a * s + 3 * a * f, f, r.daspXtcArccParameters);
                                    var d = 2 * s + 0,
                                        p = m.getInstance().getMemoryService().getRealArray(d, f);
                                    d += f;
                                    var _ = m.getInstance().getMemoryService().getRealArray(d, f);
                                    d += f;
                                    var A = m.getInstance().getMemoryService().getRealArray(d, f);
                                    d += f;
                                    var v = m.getInstance().getMemoryService().getRealArray(d, f),
                                        E = 1;
                                    11 === t.numberOfBands ? E = .09 : 21 === t.numberOfBands && (E = .047);
                                    for (var P = 0; P < p.length; P++) p[P] = E * p[P], _[P] = E * _[P], A[P] = E * A[P], v[P] = E * v[P];
                                    var S = new g(p, _, A, v);
                                    S.createAudioBuffers(e), n(S)
                                }), (function(e) {
                                    console.error("calculateFeed failed:"), i(e)
                                }))
                            } else i(new Error("No args provided"))
                        }))
                    }, t.calculateFeed = function(e, t) {
                        return this.calculateDeltaFeed(t)
                    }, t.calculateDeltaFeed = function(e) {
                        return new Promise((function(t, r) {
                            var n = [],
                                i = [],
                                a = [],
                                o = 0,
                                u = e.filterLength;
                            for (o = 0; o < u; o++) 0 === o ? i.push(1) : i.push(0);
                            for (o = 0; o < u; o++) a.push(0);
                            n.push({
                                left: i,
                                right: a,
                                length: u
                            }), t(n)
                        }))
                    }, e
                }(),
                A = function(e, t, r, n, i) {
                    this.audioContext = e, this.audioNode = t, this.pluginService = r, this.pluginInstance = n, this.browser = i
                },
                v = function() {
                    function e(e, t, r, n, i, a, o, u, s, c) {
                        this.arccPluginService = e, this.areiPluginService = t, this.capturePluginService = r, this.dynamicsCompressorPluginService = n, this.eqBiquadPluginService = i, this.gainPluginService = a, this.racePluginService = o, this.convolverPluginService = u, this.reverbPluginService = s, this.stereoWideningPluginService = c
                    }
                    var t = e.prototype;
                    return t.createPluginGraphNode = function(e, t, r) {
                        switch (t.pluginId) {
                            case "ARCC":
                                return this.createPluginGraphNodeActual(e, t, this.arccPluginService, r);
                            case "AREI":
                                return this.createPluginGraphNodeActual(e, t, this.areiPluginService, r);
                            case "CAPTURE":
                                return this.createPluginGraphNodeActual(e, t, this.capturePluginService, r);
                            case "DYNAMICS_COMPRESSOR":
                                return this.createPluginGraphNodeActual(e, t, this.dynamicsCompressorPluginService, r);
                            case "EQ_BIQUAD":
                                return this.createPluginGraphNodeActual(e, t, this.eqBiquadPluginService, r);
                            case "SIMPLE_GAIN":
                                return this.createPluginGraphNodeActual(e, t, this.gainPluginService, r);
                            case "RACE_TWO_CHANNELS":
                                return this.createPluginGraphNodeActual(e, t, this.racePluginService, r);
                            case "CONVOLVER":
                                return this.createPluginGraphNodeActual(e, t, this.convolverPluginService, r);
                            case "REVERB":
                                return this.createPluginGraphNodeActual(e, t, this.reverbPluginService, r);
                            case "STEREO_WIDENING":
                                return this.createPluginGraphNodeActual(e, t, this.stereoWideningPluginService, r);
                            default:
                                console.error("Cannot create " + t.pluginId)
                        }
                        return new Promise((function(e, t) {
                            t()
                        }))
                    }, t.createPluginGraphNodeActual = function(e, t, r, n) {
                        return new Promise((function(i, a) {
                            r.createAudioNode(e, t, n).then((function(a) {
                                i(new A(e, a, r, t, n))
                            }), (function(e) {
                                return a(e)
                            }))
                        }))
                    }, e
                }(),
                E = function() {
                    function e() {
                        this.parameters = [], this.presets = [], this.parameters.push({
                            key: e.ENABLED,
                            value: e.DEFAULT_ENABLED
                        }), this.parameters.push({
                            key: e.PRESET,
                            value: e.DEFAULT_PRESET
                        })
                    }
                    var t = e.prototype;
                    return t.getPresets = function(e) {
                        return this.presets
                    }, t.getPluginInstanceParameterKeyValues = function(e, t) {
                        return this.parameters.map((function(r) {
                            return {
                                pluginId: e,
                                instanceId: t,
                                parameter: r
                            }
                        }))
                    }, t.ensureLocalStorage = function() {
                        var e = this;
                        if (this.parameters) {
                            var t = "activePreset",
                                r = localStorage.getItem(t),
                                n = null;
                            r && (n = JSON.parse(r)).pluginInstances && n.pluginInstances.forEach((function(r) {
                                r.pluginId === e.getPluginId() && (e.parameters.forEach((function(e) {
                                    var i;
                                    !(null === (i = r.parameters) || void 0 === i ? void 0 : i.find((function(t) {
                                        return t.parameter.key === e.key
                                    }))) && r.parameters && (r.parameters.push({
                                        pluginId: r.pluginId,
                                        instanceId: r.instanceId,
                                        parameter: e
                                    }), localStorage.setItem(t, JSON.stringify(n)))
                                })), r.presets = e.ensurePresets(r.presets), localStorage.setItem(t, JSON.stringify(n)))
                            }))
                        } else console.error("Default Parameters are not defined!")
                    }, t.ensurePresets = function(e) {
                        var t = this;
                        e || (e = []), this.presets.forEach((function(t) {
                            var r, n = null === (r = e) || void 0 === r ? void 0 : r.find((function(e) {
                                return e.presetId === t.presetId
                            }));
                            n ? n.parameters = t.parameters : e && e.push(t)
                        }));
                        var r = [];
                        return e.forEach((function(e) {
                            t.presets.find((function(t) {
                                return t.presetId === e.presetId
                            })) && r.push(e)
                        })), r
                    }, t.ensurePluginInstanceParameterKeyValues = function(e) {
                        if (this.parameters) return e.parameters ? this.parameters.forEach((function(t) {
                            var r;
                            (null === (r = e.parameters) || void 0 === r ? void 0 : r.find((function(e) {
                                return e.parameter.key === t.key
                            }))) || e.parameters && e.parameters.push({
                                pluginId: e.pluginId,
                                instanceId: e.instanceId,
                                parameter: t
                            })
                        })) : e.parameters = this.getPluginInstanceParameterKeyValues(e.pluginId, e.instanceId), e;
                        console.error("Default Parameters are not defined!")
                    }, t.getParameterKeyValues = function(e) {
                        return e && e.parameters ? e.parameters.map((function(e) {
                            return {
                                key: e.parameter.key,
                                value: e.parameter.value
                            }
                        })) : []
                    }, t.getParameterValue = function(e, t) {
                        var r, n = null === (r = e.parameters) || void 0 === r ? void 0 : r.find((function(e) {
                            return e.parameter.key === t
                        }));
                        return n || console.error("Could not find parameter in instance with key: " + t), n ? n.parameter.value : void 0
                    }, t.getDefaultParameterValue = function(e) {
                        this.parameters || console.error("Parameters are not defined!");
                        var t = this.parameters.find((function(t) {
                            return t.key === e
                        }));
                        return t || console.error("Could not find parameter with key: " + e), t ? t.value : ""
                    }, e
                }();
            E.ENABLED = "enabled", E.PRESET = "preset", E.DEFAULT_ENABLED = !0, E.DEFAULT_PRESET = "default";
            var P = function(e) {
                function t() {
                    var r;
                    return (r = e.call(this) || this).parameters.push({
                        key: t.FILTER_LENGTH,
                        value: t.DEFAULT_FILTER_LENGTH
                    }), r.parameters.push({
                        key: t.ANGLE,
                        value: t.DEFAULT_ANGLE
                    }), r.parameters.push({
                        key: t.DELAY,
                        value: t.DEFAULT_DELAY
                    }), r.parameters.push({
                        key: t.USE_ANGLE_OR_DELAY,
                        value: t.DEFAULT_USE_ANGLE_OR_DELAY
                    }), r.parameters.push({
                        key: t.DISTANCE,
                        value: t.DEFAULT_DISTANCE
                    }), r.parameters.push({
                        key: t.NUMBER_OF_BANDS,
                        value: t.DEFAULT_NUMBER_OF_BANDS
                    }), r.parameters.push({
                        key: t.FREQUENCIES_1,
                        value: t.DEFAULT_FREQUENCIES_1
                    }), r.parameters.push({
                        key: t.ATTENUATIONS_1,
                        value: t.DEFAULT_ATTENUATIONS_1
                    }), r.parameters.push({
                        key: t.FREQUENCIES_3,
                        value: t.DEFAULT_FREQUENCIES_3
                    }), r.parameters.push({
                        key: t.ATTENUATIONS_3,
                        value: t.DEFAULT_ATTENUATIONS_3
                    }), r.parameters.push({
                        key: t.FREQUENCIES_11,
                        value: t.DEFAULT_FREQUENCIES_11
                    }), r.parameters.push({
                        key: t.ATTENUATIONS_11,
                        value: t.DEFAULT_ATTENUATIONS_11
                    }), r.parameters.push({
                        key: t.FREQUENCIES_21,
                        value: t.DEFAULT_FREQUENCIES_21
                    }), r.parameters.push({
                        key: t.ATTENUATIONS_21,
                        value: t.DEFAULT_ATTENUATIONS_21
                    }), r.initializePresets(), r
                }
                l(t, e);
                var r = t.prototype;
                return r.getPluginId = function() {
                    return "ARCC"
                }, r.getPresetDiscriminator = function() {
                    return t.DEFAULT_NUMBER_OF_BANDS.toString()
                }, t.getDefaultAttenuations1 = function() {
                    return t.DEFAULT_ATTENUATIONS_1.slice(0)
                }, t.getDefaultAttenuations3 = function() {
                    return t.DEFAULT_ATTENUATIONS_3.slice(0)
                }, t.getDefaultAttenuations11 = function() {
                    return t.DEFAULT_ATTENUATIONS_11.slice(0)
                }, t.getDefaultAttenuations21 = function() {
                    return t.DEFAULT_ATTENUATIONS_21.slice(0)
                }, r.initializePresets = function() {
                    this.presets = [], this.initializePresets3()
                }, r.initializePresets3 = function() {
                    var e = {
                        moderate: [-10, -4, -13],
                        low: [-15, -9, -15],
                        high: [-6, -2.5, -5]
                    };
                    for (var r in e) 3 !== e[r].length && console.error("eqPreset3[key].length != 3"), this.presets.push({
                        pluginId: this.getPluginId(),
                        presetId: r + "3",
                        type: "system",
                        name: this.makePresetLabel(r),
                        discriminator: "3",
                        parameters: [{
                            key: "frequencies",
                            value: t.DEFAULT_FREQUENCIES_3
                        }, {
                            key: "attenuations",
                            value: e[r]
                        }]
                    })
                }, r.makePresetLabel = function(e) {
                    var t = e.replace(/([A-Z])/g, " $1");
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }, t
            }(E);
            P.VERSION = 2, P.FILTER_LENGTH = "filterLength", P.ANGLE = "angle", P.DELAY = "delay", P.USE_ANGLE_OR_DELAY = "useAngleOrDelay", P.DISTANCE = "distance", P.NUMBER_OF_BANDS = "numberOfBands", P.FREQUENCIES_1 = "frequencies1", P.ATTENUATIONS_1 = "attenuations1", P.FREQUENCIES_3 = "frequencies3", P.ATTENUATIONS_3 = "attenuations3", P.FREQUENCIES_11 = "frequencies11", P.ATTENUATIONS_11 = "attenuations11", P.FREQUENCIES_21 = "frequencies21", P.ATTENUATIONS_21 = "attenuations21", P.DEFAULT_FILTER_LENGTH = 2048, P.DEFAULT_ANGLE = 6, P.DEFAULT_DELAY = 3, P.DEFAULT_USE_ANGLE_OR_DELAY = "angle", P.DEFAULT_DISTANCE = 1, P.DEFAULT_NUMBER_OF_BANDS = 3, P.DEFAULT_FREQUENCIES_1 = [1e3], P.DEFAULT_ATTENUATIONS_1 = [-4], P.DEFAULT_FREQUENCIES_3 = [250, 2e3, 8e3], P.DEFAULT_ATTENUATIONS_3 = [-20, -5, -20], P.DEFAULT_FREQUENCIES_11 = [16, 31.5, 63, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3], P.DEFAULT_ATTENUATIONS_11 = [-10.5, -10.5, -10.5, -10.5, -10.5, -3.5, -3.5, -3.5, -3.5, -13, -13], P.DEFAULT_FREQUENCIES_21 = [16, 22, 31.5, 44, 63, 88, 125, 177, 250, 354, 500, 707, 1e3, 1414, 2e3, 2828, 4e3, 5656, 8e3, 11314, 16e3], P.DEFAULT_ATTENUATIONS_21 = [-10.5, -10.5, -10.5, -10.5, -10.5, -10.5, -10.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -13, -13, -13, -13];
            var S = function() {
                    function e(e, t) {
                        this.audioContext = e, this.enabled = !0, this.parameters = t
                    }
                    var t = e.prototype;
                    return t.enable = function() {
                        this.enabled = !0
                    }, t.disable = function() {
                        this.enabled = !1
                    }, t.isEnabled = function() {
                        return this.enabled
                    }, t.getParameters = function() {
                        return this.parameters || console.error("Parameters are not defined!"), this.parameters
                    }, t.getParameter = function(e) {
                        this.parameters || console.error("Parameters are not defined!");
                        var t = this.parameters.find((function(t) {
                            return t.key === e
                        }));
                        return t || console.error("Could not find parameter with key: " + e), t
                    }, t.getParameterValue = function(e) {
                        var t;
                        return this.getParameter(e) ? null === (t = this.getParameter(e)) || void 0 === t ? void 0 : t.value : ""
                    }, t.setParameter = function(e) {
                        var t = this.getParameter(e.key);
                        t ? t.value = e.value : console.error("No ParameterKeyValue found in audioNode with parameter name: " + e.key)
                    }, e
                }(),
                I = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).xtcFilters = n, i.input = i.audioContext.createGain(), i.output = i.audioContext.createGain(), i.splitter_ll_rl = i.audioContext.createChannelSplitter(2), i.splitter_lr_rr = i.audioContext.createChannelSplitter(2), i.merger = i.audioContext.createChannelMerger(2), i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return this.convolverNode_ll_rl = this.audioContext.createConvolver(), this.convolverNode_ll_rl.normalize = !1, this.convolverNode_ll_rl.buffer = this.xtcFilters.buffer_ll_rl, this.convolverNode_ll_rl.channelInterpretation = "discrete", this.convolverNode_lr_rr = this.audioContext.createConvolver(), this.convolverNode_lr_rr.normalize = !1, this.convolverNode_lr_rr.buffer = this.xtcFilters.buffer_lr_rr, this.convolverNode_lr_rr.channelInterpretation = "discrete", this.input.connect(this.convolverNode_ll_rl), this.input.connect(this.convolverNode_lr_rr), this.convolverNode_ll_rl.connect(this.splitter_ll_rl), this.convolverNode_lr_rr.connect(this.splitter_lr_rr), this.splitter_ll_rl.connect(this.merger, 0, 0), this.splitter_ll_rl.connect(this.merger, 1, 0), this.splitter_lr_rr.connect(this.merger, 0, 1), this.splitter_lr_rr.connect(this.merger, 1, 1), this.merger.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.updateXtcFilters = function(e) {
                        this.xtcFilters = e, this.convolverNode_ll_rl.disconnect(), this.convolverNode_lr_rr.disconnect(), this.wire()
                    }, t
                }(S),
                N = function() {
                    function e(e, t) {
                        this.arccPluginParametersService = e, this.arccDspService = t
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.arccPluginParametersService.ensurePluginInstanceParameterKeyValues(t);
                            var a = n.arccPluginParametersService.getParameterValue(t, P.NUMBER_OF_BANDS),
                                o = null,
                                u = null;
                            1 === a ? (o = n.arccPluginParametersService.getParameterValue(t, P.FREQUENCIES_1), u = n.arccPluginParametersService.getParameterValue(t, P.ATTENUATIONS_1)) : 3 === a ? (o = n.arccPluginParametersService.getParameterValue(t, P.FREQUENCIES_3), u = n.arccPluginParametersService.getParameterValue(t, P.ATTENUATIONS_3)) : 11 === a ? (o = n.arccPluginParametersService.getParameterValue(t, P.FREQUENCIES_11), u = n.arccPluginParametersService.getParameterValue(t, P.ATTENUATIONS_11)) : 21 === a && (o = n.arccPluginParametersService.getParameterValue(t, P.FREQUENCIES_21), u = n.arccPluginParametersService.getParameterValue(t, P.ATTENUATIONS_21)), n.arccDspService.calculate(e, {
                                filterLength: n.arccPluginParametersService.getParameterValue(t, P.FILTER_LENGTH),
                                angle: n.arccPluginParametersService.getParameterValue(t, P.ANGLE),
                                distance: n.arccPluginParametersService.getParameterValue(t, P.DISTANCE),
                                numberOfBands: a,
                                frequencies: o,
                                attenuations: u
                            }).then((function(i) {
                                var a = i,
                                    o = new I(e, n.arccPluginParametersService.getParameterKeyValues(t), a);
                                r(o)
                            }), (function(e) {
                                i(e)
                            }))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        try {
                            var i = this;
                            return Promise.resolve(t.setParameter(r)).then((function() {
                                return new Promise((function(r, n) {
                                    var a = t.getParameter(P.NUMBER_OF_BANDS).value,
                                        o = null,
                                        u = null;
                                    1 === a ? (o = t.getParameter(P.FREQUENCIES_1).value, u = t.getParameter(P.ATTENUATIONS_1).value) : 3 === a ? (o = t.getParameter(P.FREQUENCIES_3).value, u = t.getParameter(P.ATTENUATIONS_3).value) : 11 === a ? (o = t.getParameter(P.FREQUENCIES_11).value, u = t.getParameter(P.ATTENUATIONS_11).value) : 21 === a && (o = t.getParameter(P.FREQUENCIES_21).value, u = t.getParameter(P.ATTENUATIONS_21).value), i.arccDspService.calculate(e, {
                                        filterLength: t.getParameter(P.FILTER_LENGTH).value,
                                        angle: t.getParameter(P.ANGLE).value,
                                        distance: t.getParameter(P.DISTANCE).value,
                                        numberOfBands: a,
                                        frequencies: o,
                                        attenuations: u
                                    }).then((function(e) {
                                        var n = e;
                                        t.updateXtcFilters(n), r(t)
                                    }), (function(e) {
                                        n(e)
                                    }))
                                }))
                            }))
                        } catch (a) {
                            return Promise.reject(a)
                        }
                    }, e
                }(),
                y = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).impulseResponse = n, i.convolverNode = i.audioContext.createConvolver(), i.convolverNode.normalize = !1, i.convolverNode.buffer = i.impulseResponse, i.convolverNode.channelInterpretation = "discrete", i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.convolverNode
                    }, r.getOutput = function() {
                        return this.convolverNode
                    }, r.connect = function(e, t, r) {
                        this.convolverNode.connect(e)
                    }, r.disconnect = function(e) {
                        this.convolverNode.disconnect(e)
                    }, r.updateImpulseResponse = function(e) {
                        this.impulseResponse = e, this.convolverNode = this.audioContext.createConvolver(), this.convolverNode.normalize = !1, this.convolverNode.buffer = this.impulseResponse, this.convolverNode.channelInterpretation = "discrete"
                    }, t
                }(S),
                T = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).binauralImpulseResponse = n, i.useCrossOver = !0, i.crossOverFrequency = 200, i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            e.binauralConvolver = new y(e.audioContext, null, e.binauralImpulseResponse), e.useCrossOver && (e.input = e.audioContext.createGain(), e.input.gain.setValueAtTime(1, e.audioContext.currentTime), e.output = e.audioContext.createGain(), e.output.gain.setValueAtTime(1, e.audioContext.currentTime), e.lowPass = e.audioContext.createBiquadFilter(), e.lowPass.type = "lowpass", e.lowPass.frequency.setValueAtTime(e.crossOverFrequency, e.audioContext.currentTime), e.highPass = e.audioContext.createBiquadFilter(), e.highPass.type = "highpass", e.highPass.frequency.setValueAtTime(e.crossOverFrequency, e.audioContext.currentTime), e.input.connect(e.lowPass), e.input.connect(e.highPass), e.lowPass.connect(e.output), e.highPass.connect(e.binauralConvolver.getInput()), e.binauralConvolver.getOutput().connect(e.output)), t()
                        }))
                    }, r.getInput = function() {
                        return this.useCrossOver ? this.input : this.binauralConvolver.getInput()
                    }, r.getOutput = function() {
                        return this.useCrossOver ? this.output : this.binauralConvolver.getOutput()
                    }, r.connect = function(e, t, r) {
                        this.useCrossOver ? this.output.connect(e) : this.binauralConvolver.getOutput().connect(e)
                    }, r.disconnect = function(e) {
                        this.useCrossOver ? this.output.disconnect(e) : this.binauralConvolver.getOutput().disconnect(e)
                    }, r.updateBinauralImpulseResponse = function(e) {
                        this.binauralImpulseResponse = e, this.binauralConvolver.updateImpulseResponse(e)
                    }, t
                }(S),
                R = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).virtualStereoFilters = n, i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            e.channelSplitter = e.audioContext.createChannelSplitter(2), e.virtualSourceLeft = new T(e.audioContext, null, e.virtualStereoFilters.getBinauralImpulseResponseForLeftVirtualSource()), e.virtualSourceRight = new T(e.audioContext, null, e.virtualStereoFilters.getBinauralImpulseResponseForRightVirtualSource()), e.output = e.audioContext.createGain(), e.channelSplitter.connect(e.virtualSourceLeft.getInput(), 0), e.channelSplitter.connect(e.virtualSourceRight.getInput(), 1), e.virtualSourceLeft.connect(e.output), e.virtualSourceRight.connect(e.output), t()
                        }))
                    }, r.getInput = function() {
                        return this.channelSplitter
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.applyVirtualStereoFilters = function(e) {
                        this.virtualStereoFilters = e, this.virtualSourceLeft.updateBinauralImpulseResponse(this.virtualStereoFilters.getBinauralImpulseResponseForLeftVirtualSource()), this.virtualSourceRight.updateBinauralImpulseResponse(this.virtualStereoFilters.getBinauralImpulseResponseForRightVirtualSource())
                    }, t
                }(S),
                F = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).xtcFilters = n, i.input = i.audioContext.createGain(), i.output = i.audioContext.createGain(), i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        this.convolverNode_ll_rl = this.audioContext.createConvolver(), this.convolverNode_ll_rl.normalize = !1, this.convolverNode_ll_rl.buffer = this.xtcFilters.buffer_ll_rl, this.convolverNode_ll_rl.channelInterpretation = "discrete", this.convolverNode_lr_rr = this.audioContext.createConvolver(), this.convolverNode_lr_rr.normalize = !1, this.convolverNode_lr_rr.buffer = this.xtcFilters.buffer_lr_rr, this.convolverNode_lr_rr.channelInterpretation = "discrete";
                        var e = this.audioContext.createGain();
                        e.gain.value = 1;
                        var t = this.audioContext.createGain();
                        t.gain.value = 1;
                        var r = this.audioContext.createChannelSplitter(2),
                            n = this.audioContext.createChannelSplitter(2),
                            i = this.audioContext.createChannelMerger(2);
                        return this.input.connect(this.convolverNode_ll_rl), this.input.connect(this.convolverNode_lr_rr), this.convolverNode_ll_rl.connect(e), this.convolverNode_lr_rr.connect(t), e.connect(r), t.connect(n), r.connect(i, 0, 0), r.connect(i, 1, 0), n.connect(i, 0, 1), n.connect(i, 1, 1), i.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.updateXtcFilters = function(e) {
                        this.xtcFilters = e, this.convolverNode_ll_rl.buffer = this.xtcFilters.buffer_ll_rl, this.convolverNode_lr_rr.buffer = this.xtcFilters.buffer_lr_rr
                    }, t
                }(S),
                L = function(e) {
                    function t() {
                        var r;
                        return (r = e.call(this) || this).parameters.push({
                            key: t.METHOD,
                            value: t.DEFAULT_METHOD
                        }), r.parameters.push({
                            key: t.FRONT_HRTF,
                            value: t.DEFAULT_FRONT_HRTF
                        }), r.parameters.push({
                            key: t.SIDE_HRTF,
                            value: t.DEFAULT_SIDE_HRTF
                        }), r.parameters.push({
                            key: t.REAR_HRTF,
                            value: t.DEFAULT_REAR_HRTF
                        }), r.parameters.push({
                            key: t.FRONT_ANGLE,
                            value: t.DEFAULT_FRONT_ANGLE
                        }), r.parameters.push({
                            key: t.SIDE_ANGLE,
                            value: t.DEFAULT_SIDE_ANGLE
                        }), r.parameters.push({
                            key: t.REAR_ANGLE,
                            value: t.DEFAULT_REAR_ANGLE
                        }), r.parameters.push({
                            key: t.FRONT_ELEVATION,
                            value: t.DEFAULT_FRONT_ELEVATION
                        }), r.parameters.push({
                            key: t.SIDE_ELEVATION,
                            value: t.DEFAULT_SIDE_ELEVATION
                        }), r.parameters.push({
                            key: t.REAR_ELEVATION,
                            value: t.DEFAULT_REAR_ELEVATION
                        }), r.parameters.push({
                            key: t.FRONT_GAIN,
                            value: t.DEFAULT_FRONT_GAIN
                        }), r.parameters.push({
                            key: t.SIDE_GAIN,
                            value: t.DEFAULT_SIDE_GAIN
                        }), r.parameters.push({
                            key: t.REAR_GAIN,
                            value: t.DEFAULT_REAR_GAIN
                        }), r.parameters.push({
                            key: t.XTC_FILTER_LENGTH,
                            value: t.DEFAULT_XTC_FILTER_LENGTH
                        }), r.parameters.push({
                            key: t.XTC_FREQUENCIES_IN_HZ,
                            value: t.DEFAULT_XTC_FREQUENCIES_IN_HZ
                        }), r.parameters.push({
                            key: t.XTC_ATTENUATIONS_IN_DB,
                            value: t.DEFAULT_XTC_ATTENUATIONS_IN_DB
                        }), r.parameters.push({
                            key: t.XTC_ANGLE,
                            value: t.DEFAULT_XTC_ANGLE
                        }), r.parameters.push({
                            key: t.XTC_DELAY_IN_SAMPLES,
                            value: t.DEFAULT_XTC_DELAY_IN_SAMPLES
                        }), r
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "AREI"
                    }, r.getPresetDiscriminator = function() {
                        return null
                    }, t.getDefaultVirtualSpace = function() {
                        return t.DEFAULT_SIDE_HRTF
                    }, t.getDefaultFrontAngle = function() {
                        return t.DEFAULT_FRONT_ANGLE
                    }, t.getDefaultSideAngle = function() {
                        return t.DEFAULT_SIDE_ANGLE
                    }, t.getDefaultRearAngle = function() {
                        return t.DEFAULT_REAR_ANGLE
                    }, t.getDefaultFrontGain = function() {
                        return t.DEFAULT_FRONT_GAIN
                    }, t.getDefaultSideGain = function() {
                        return t.DEFAULT_SIDE_GAIN
                    }, t.getDefaultRearGain = function() {
                        return t.DEFAULT_REAR_GAIN
                    }, t
                }(E);
            L.METHOD = "method", L.FRONT_HRTF = "frontHrtf", L.SIDE_HRTF = "sideHrtf", L.REAR_HRTF = "rearHrtf", L.FRONT_ANGLE = "frontAngle", L.SIDE_ANGLE = "sideAngle", L.REAR_ANGLE = "rearAngle", L.FRONT_ELEVATION = "frontElevation", L.SIDE_ELEVATION = "sideElevation", L.REAR_ELEVATION = "rearElevation", L.FRONT_GAIN = "frontGain", L.SIDE_GAIN = "sideGain", L.REAR_GAIN = "rearGain", L.XTC_FILTER_LENGTH = "xtcFilterLength", L.XTC_FREQUENCIES_IN_HZ = "xtcFrequencies", L.XTC_ATTENUATIONS_IN_DB = "xtcAttenuations", L.XTC_ANGLE = "xtcAngle", L.XTC_DELAY_IN_SAMPLES = "xtcDelayInSamples", L.DEFAULT_METHOD = "resonanceAudio", L.DEFAULT_FRONT_HRTF = "HRIR_CIRC360.aria3d.hrtf", L.DEFAULT_SIDE_HRTF = "dry.aria3d.hrtf", L.DEFAULT_REAR_HRTF = "HRIR_CIRC360.aria3d.hrtf", L.DEFAULT_FRONT_ANGLE = 10, L.DEFAULT_SIDE_ANGLE = 60, L.DEFAULT_REAR_ANGLE = 170, L.DEFAULT_FRONT_ELEVATION = 0, L.DEFAULT_SIDE_ELEVATION = 0, L.DEFAULT_REAR_ELEVATION = 0, L.DEFAULT_FRONT_GAIN = 1, L.DEFAULT_SIDE_GAIN = 1, L.DEFAULT_REAR_GAIN = 1, L.DEFAULT_XTC_FILTER_LENGTH = 512, L.DEFAULT_XTC_FREQUENCIES_IN_HZ = [1e3], L.DEFAULT_XTC_ATTENUATIONS_IN_DB = [-3], L.DEFAULT_XTC_ANGLE = 9, L.DEFAULT_XTC_DELAY_IN_SAMPLES = 3;
            var C = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).virtualAmbioFilters = n, i.input = i.audioContext.createGain(), i.output = i.audioContext.createGain(), i.gainFront = i.audioContext.createGain(), i.gainRear = i.audioContext.createGain(), i.gainSide = i.audioContext.createGain(), i.applyFrontGain(), i.applySideGain(), i.applyRearGain(), i.raceAudioNodeFront = new F(i.audioContext, null, i.virtualAmbioFilters.xtcFilters), i.virtualSourceFrontLeft = new T(i.audioContext, null, i.virtualAmbioFilters.binauralIRFrontLeft), i.virtualSourceFrontRight = new T(i.audioContext, null, i.virtualAmbioFilters.binauralIRFrontRight), i.channelSplitterFront = i.audioContext.createChannelSplitter(2), i.raceAudioNodeRear = new F(i.audioContext, null, i.virtualAmbioFilters.xtcFilters), i.virtualSourceRearLeft = new T(i.audioContext, null, i.virtualAmbioFilters.binauralIRRearLeft), i.virtualSourceRearRight = new T(i.audioContext, null, i.virtualAmbioFilters.binauralIRRearRight), i.channelSplitterRear = i.audioContext.createChannelSplitter(2), i.virtualSourceSideLeft = new T(i.audioContext, null, i.virtualAmbioFilters.binauralIRSideLeft), i.virtualSourceSideRight = new T(i.audioContext, null, i.virtualAmbioFilters.binauralIRSideRight), i.channelSplitterSide = i.audioContext.createChannelSplitter(2), i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            e.input.connect(e.gainFront), e.gainFront.connect(e.raceAudioNodeFront.getInput()), e.input.connect(e.gainRear), e.gainRear.connect(e.raceAudioNodeRear.getInput()), e.input.connect(e.gainSide), e.gainSide.connect(e.channelSplitterSide), e.raceAudioNodeFront.getOutput().connect(e.channelSplitterFront), e.channelSplitterFront.connect(e.virtualSourceFrontLeft.getInput(), 0), e.channelSplitterFront.connect(e.virtualSourceFrontRight.getInput(), 1), e.virtualSourceFrontLeft.connect(e.getOutput()), e.virtualSourceFrontRight.connect(e.getOutput()), e.raceAudioNodeRear.getOutput().connect(e.channelSplitterRear), e.channelSplitterRear.connect(e.virtualSourceRearLeft.getInput(), 0), e.channelSplitterRear.connect(e.virtualSourceRearRight.getInput(), 1), e.virtualSourceRearLeft.connect(e.output), e.virtualSourceRearRight.connect(e.output), e.channelSplitterSide.connect(e.virtualSourceSideLeft.getInput(), 0), e.channelSplitterSide.connect(e.virtualSourceSideRight.getInput(), 1), e.virtualSourceSideLeft.connect(e.output), e.virtualSourceSideRight.connect(e.output), t()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.applyVirtualAmbioFilters = function(e) {
                        this.virtualAmbioFilters = e, this.virtualSourceFrontLeft.updateBinauralImpulseResponse(this.virtualAmbioFilters.binauralIRFrontLeft), this.virtualSourceFrontRight.updateBinauralImpulseResponse(this.virtualAmbioFilters.binauralIRFrontRight), this.virtualSourceRearLeft.updateBinauralImpulseResponse(this.virtualAmbioFilters.binauralIRRearLeft), this.virtualSourceRearRight.updateBinauralImpulseResponse(this.virtualAmbioFilters.binauralIRRearRight), this.virtualSourceSideLeft.updateBinauralImpulseResponse(this.virtualAmbioFilters.binauralIRSideLeft), this.virtualSourceSideRight.updateBinauralImpulseResponse(this.virtualAmbioFilters.binauralIRSideRight), this.raceAudioNodeFront.updateXtcFilters(this.virtualAmbioFilters.xtcFilters), this.raceAudioNodeRear.updateXtcFilters(this.virtualAmbioFilters.xtcFilters), this.applyFrontGain(), this.applySideGain(), this.applyRearGain()
                    }, r.applyFrontGain = function() {
                        this.gainFront.gain.setTargetAtTime(this.getParameter(L.FRONT_GAIN).value, this.audioContext.currentTime, .015)
                    }, r.applyRearGain = function() {
                        this.gainRear.gain.setTargetAtTime(this.getParameter(L.REAR_GAIN).value, this.audioContext.currentTime, .015)
                    }, r.applySideGain = function() {
                        this.gainSide.gain.setTargetAtTime(this.getParameter(L.SIDE_GAIN).value, this.audioContext.currentTime, .015)
                    }, t
                }(S),
                D = function(e) {
                    function t(t, r, n, i) {
                        var a;
                        return (a = e.call(this, t, r) || this).input = t.createGain(), a.output = t.createGain(), null != n && (a.virtualStereoAudioNode = new R(t, r, n)), null != i && (a.virtualAmbioAudioNode = new C(t, r, i)), a.wire(), a
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return null != this.virtualStereoAudioNode ? (this.input.connect(this.virtualStereoAudioNode.getInput()), this.virtualStereoAudioNode.getOutput().connect(this.output)) : (this.input.connect(this.virtualAmbioAudioNode.getInput()), this.virtualAmbioAudioNode.getOutput().connect(this.output)), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.applyVirtualStereoFilters = function(e) {
                        null != this.virtualStereoAudioNode ? this.virtualStereoAudioNode.applyVirtualStereoFilters(e) : (this.input.disconnect(), this.virtualAmbioAudioNode = null, this.virtualStereoAudioNode = new R(this.audioContext, this.getParameters(), e), this.wire())
                    }, r.applyVirtualAmbioFilters = function(e) {
                        null != this.virtualAmbioAudioNode ? this.virtualAmbioAudioNode.applyVirtualAmbioFilters(e) : (this.input.disconnect(), this.virtualStereoAudioNode = null, this.virtualAmbioAudioNode = new C(this.audioContext, this.getParameters(), e), this.wire())
                    }, t
                }(S),
                b = function() {
                    function e(e, t) {
                        this.binauralImpulseResponseForLeftVirtualSource = e, this.binauralImpulseResponseForRightVirtualSource = t
                    }
                    var t = e.prototype;
                    return t.getBinauralImpulseResponseForLeftVirtualSource = function() {
                        return this.binauralImpulseResponseForLeftVirtualSource
                    }, t.getBinauralImpulseResponseForRightVirtualSource = function() {
                        return this.binauralImpulseResponseForRightVirtualSource
                    }, e
                }(),
                w = function() {
                    function e(e) {
                        this.hrtfLoader = e
                    }
                    return e.prototype.calculate = function(e, t, r, n) {
                        var i = this;
                        return new Promise((function(a, o) {
                            r ? i.hrtfLoader.getHrtf(e, r.hrtf, "full", n).then((function(e) {
                                var n = e;
                                n.createAudioBuffers(t);
                                var i = r.frontAngle,
                                    o = 360 - i,
                                    u = n.getHrtfRecord(t, i, 0).buffer,
                                    s = n.getHrtfRecord(t, o, 0).buffer,
                                    c = new b(u, s);
                                a(c)
                            }), (function(e) {
                                o(e)
                            })) : o()
                        }))
                    }, e
                }(),
                O = function(e, t, r, n, i, a, o) {
                    this.binauralIRFrontLeft = e, this.binauralIRFrontRight = t, this.binauralIRRearLeft = r, this.binauralIRRearRight = n, this.binauralIRSideLeft = i, this.binauralIRSideRight = a, this.xtcFilters = o
                },
                U = function() {
                    function e(e, t, r, n) {
                        this.c_l_l = e, this.c_r_l = t, this.c_l_r = r, this.c_r_r = n
                    }
                    return e.prototype.createAudioBuffers = function(e) {
                        var t = this.c_l_l.length;
                        this.buffer_c_l_l = e.createBuffer(1, t, e.sampleRate), this.buffer_c_r_l = e.createBuffer(1, t, e.sampleRate), this.buffer_c_l_r = e.createBuffer(1, t, e.sampleRate), this.buffer_c_r_r = e.createBuffer(1, t, e.sampleRate), this.buffer_c_l_l_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_r_l_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_l_r_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_r_r_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_ll_rl = e.createBuffer(2, t, e.sampleRate), this.buffer_lr_rr = e.createBuffer(2, t, e.sampleRate), this.buffer_ll_rr = e.createBuffer(2, t, e.sampleRate);
                        var r = this.buffer_ll_rr.getChannelData(0),
                            n = this.buffer_ll_rr.getChannelData(1);
                        this.buffer_lr_rl = e.createBuffer(2, t, e.sampleRate);
                        for (var i = this.buffer_lr_rl.getChannelData(0), a = this.buffer_lr_rl.getChannelData(1), o = 0; o < t; o++) this.buffer_c_l_l[o] = this.c_l_l[o], this.buffer_c_r_l[o] = this.c_r_l[o], this.buffer_c_l_r[o] = this.c_l_r[o], this.buffer_c_r_r[o] = this.c_r_r[o], this.buffer_c_l_l_stereo.getChannelData(0)[o] = this.c_l_l[o], this.buffer_c_r_l_stereo.getChannelData(0)[o] = this.c_r_l[o], this.buffer_c_l_r_stereo.getChannelData(0)[o] = this.c_l_r[o], this.buffer_c_r_r_stereo.getChannelData(0)[o] = this.c_r_r[o], this.buffer_c_l_l_stereo.getChannelData(1)[o] = this.c_l_l[o], this.buffer_c_r_l_stereo.getChannelData(1)[o] = this.c_r_l[o], this.buffer_c_l_r_stereo.getChannelData(1)[o] = this.c_l_r[o], this.buffer_c_r_r_stereo.getChannelData(1)[o] = this.c_r_r[o], r[o] = this.c_l_l[o], n[o] = this.c_r_r[o], i[o] = this.c_l_r[o], a[o] = this.c_r_l[o], this.buffer_ll_rl.getChannelData(0)[o] = this.c_l_l[o], this.buffer_ll_rl.getChannelData(1)[o] = this.c_r_l[o], this.buffer_lr_rr.getChannelData(0)[o] = this.c_l_r[o], this.buffer_lr_rr.getChannelData(1)[o] = this.c_r_r[o]
                    }, e
                }(),
                G = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.calculate = function(e) {
                        var t = new Float32Array(e.filterLength).fill(0),
                            r = new Float32Array(e.filterLength).fill(0);
                        t[0] = 1, r[0] = 0;
                        for (var n = 0; n < e.filterLength; n++) t[n] = t[n] - e.attenuation * (n - e.delay < 0 ? 0 : r[n - e.delay]), r[n] = r[n] - e.attenuation * (n - e.delay < 0 ? 0 : t[n - e.delay]);
                        return {
                            left: t,
                            right: r
                        }
                    }, t.calculateWithPromise = function(e) {
                        var t = this;
                        return new Promise((function(r, n) {
                            r(t.calculate(e))
                        }))
                    }, e
                }(),
                M = function() {
                    function e(e) {
                        this.hrtfLoader = e, this.raceDspService = new G
                    }
                    return e.prototype.calculate = function(e, t, r, n) {
                        var i = this;
                        return new Promise((function(a, o) {
                            r ? i.raceDspService.calculateWithPromise({
                                filterLength: r.xtcFilterLength,
                                attenuation: Math.pow(10, r.xtcAttenuations[0] / 20),
                                delay: r.xtcDelay
                            }).then((function(u) {
                                var s = new U(Array.from(u.left), Array.from(u.right), Array.from(u.right), Array.from(u.left));
                                s.createAudioBuffers(t), i.hrtfLoader.getHrtf(e, r.sideHrtf, "full", n).then((function(u) {
                                    var c = u;
                                    c.createAudioBuffers(t);
                                    var l = r.sideAnglePerSpeaker,
                                        h = 360 - l,
                                        f = c.getHrtfRecord(t, l, 0).buffer,
                                        d = c.getHrtfRecord(t, h, 0).buffer;
                                    i.hrtfLoader.getHrtf(e, r.frontBackHrtf, "full", n).then((function(e) {
                                        var n = e;
                                        n.createAudioBuffers(t);
                                        var i = r.frontAnglePerSpeaker,
                                            o = 360 - i,
                                            u = n.getHrtfRecord(t, i, 0).buffer,
                                            c = n.getHrtfRecord(t, o, 0).buffer,
                                            l = r.backAnglePerSpeaker,
                                            h = 360 - l,
                                            p = n.getHrtfRecord(t, l, 0).buffer,
                                            m = n.getHrtfRecord(t, h, 0).buffer,
                                            g = new O(u, c, p, m, f, d, s);
                                        a(g)
                                    }), (function(e) {
                                        o(e)
                                    }))
                                }), (function(e) {
                                    o(e)
                                }))
                            }), (function(e) {
                                o(e)
                            })) : o()
                        }))
                    }, e
                }(),
                B = function() {
                    function e(e, t, r, n, i) {
                        this.azimuth = e, this.elevation = t, this.distance = r, this.fir_coeffs_left = n, this.fir_coeffs_right = i
                    }
                    return e.prototype.reverse = function() {
                        return new e(360 - this.azimuth, this.elevation, this.distance, this.fir_coeffs_right, this.fir_coeffs_left)
                    }, e
                }(),
                k = function() {
                    function e(e, t, r, n) {
                        if (this.fromSampleRate = +e, this.toSampleRate = +t, this.channels = r, "object" != typeof n) throw new Error("inputBuffer is not an object.");
                        this.inputBuffer = n, this.initialize()
                    }
                    var t = e.prototype;
                    return t.initialize = function() {
                        if (!(this.fromSampleRate > 0 && this.toSampleRate > 0 && this.channels > 0)) throw new Error("Invalid settings specified for the resampler.");
                        this.fromSampleRate === this.toSampleRate ? (this.resamplerFunc = this.bypassResampler, this.ratioWeight = 1, this.outputBuffer = this.inputBuffer) : (this.ratioWeight = this.fromSampleRate / this.toSampleRate, this.fromSampleRate < this.toSampleRate ? (this.compileLinearInterpolationFunction(), this.lastWeight = 1) : (this.compileMultiTapFunction(), this.tailExists = !1, this.lastWeight = 0), this.initializeBuffers())
                    }, t.compileLinearInterpolationFunction = function() {
                        for (var e = "var outputOffset = 0;    if (bufferLength > 0) {        var buffer = this.inputBuffer;        var weight = this.lastWeight;        var firstWeight = 0;        var secondWeight = 0;        var sourceOffset = 0;        var outputOffset = 0;        var outputBuffer = this.outputBuffer;        for (; weight < 1; weight += " + this.ratioWeight + ") {            secondWeight = weight % 1;            firstWeight = 1 - secondWeight;", t = 0; t < this.channels; ++t) e += "outputBuffer[outputOffset++] = (this.lastOutput[" + t + "] * firstWeight) + (buffer[" + t + "] * secondWeight);";
                        e += "}        weight -= 1;        for (bufferLength -= " + this.channels + ", sourceOffset = Math.floor(weight) * " + this.channels + "; sourceOffset < bufferLength;) {            secondWeight = weight % 1;            firstWeight = 1 - secondWeight;";
                        for (t = 0; t < this.channels; ++t) e += "outputBuffer[outputOffset++] = (buffer[sourceOffset" + (t > 0 ? " + " + t : "") + "] * firstWeight) + (buffer[sourceOffset + " + (this.channels + t) + "] * secondWeight);";
                        e += "weight += " + this.ratioWeight + ";            sourceOffset = Math.floor(weight) * " + this.channels + ";        }";
                        for (t = 0; t < this.channels; ++t) e += "this.lastOutput[" + t + "] = buffer[sourceOffset++];";
                        e += "this.lastWeight = weight % 1;    }    return outputOffset;", this.resamplerFunc = Function("bufferLength", e)
                    }, t.compileMultiTapFunction = function() {
                        for (var e = "var outputOffset = 0;    if (bufferLength > 0) {        var buffer = this.inputBuffer;        var weight = 0;", t = 0; t < this.channels; ++t) e += "var output" + t + " = 0;";
                        for (e += "var actualPosition = 0;        var amountToNext = 0;        var alreadyProcessedTail = !this.tailExists;        this.tailExists = false;        var outputBuffer = this.outputBuffer;        var currentPosition = 0;        do {            if (alreadyProcessedTail) {                weight = " + this.ratioWeight + ";", t = 0; t < this.channels; ++t) e += "output" + t + " = 0;";
                        for (e += "}            else {                weight = this.lastWeight;", t = 0; t < this.channels; ++t) e += "output" + t + " = this.lastOutput[" + t + "];";
                        for (e += "alreadyProcessedTail = true;            }            while (weight > 0 && actualPosition < bufferLength) {                amountToNext = 1 + actualPosition - currentPosition;                if (weight >= amountToNext) {", t = 0; t < this.channels; ++t) e += "output" + t + " += buffer[actualPosition++] * amountToNext;";
                        for (e += "currentPosition = actualPosition;                    weight -= amountToNext;                }                else {", t = 0; t < this.channels; ++t) e += "output" + t + " += buffer[actualPosition" + (t > 0 ? " + " + t : "") + "] * weight;";
                        for (e += "currentPosition += weight;                    weight = 0;                    break;                }            }            if (weight <= 0) {", t = 0; t < this.channels; ++t) e += "outputBuffer[outputOffset++] = output" + t + " / " + this.ratioWeight + ";";
                        for (e += "}            else {                this.lastWeight = weight;", t = 0; t < this.channels; ++t) e += "this.lastOutput[" + t + "] = output" + t + ";";
                        e += "this.tailExists = true;                break;            }        } while (actualPosition < bufferLength);    }    return outputOffset;", this.resamplerFunc = Function("bufferLength", e)
                    }, t.bypassResampler = function(e) {
                        return e
                    }, t.initializeBuffers = function() {
                        var e = Math.ceil(this.inputBuffer.length * this.toSampleRate / this.fromSampleRate / this.channels * 1.0000004768371582) * this.channels + this.channels;
                        try {
                            this.outputBuffer = new Float32Array(e), this.lastOutput = new Float32Array(this.channels)
                        } catch (t) {
                            this.outputBuffer = [], this.lastOutput = []
                        }
                    }, e
                }(),
                V = function() {
                    function e() {
                        this.hrtfRecordArray = [], this.resampledNumberOfTaps = this.numberOfTaps
                    }
                    var t = e.prototype;
                    return t.addHrtfRecord = function(e) {
                        this.hrtfRecordArray.push(e)
                    }, t.getHrtfRecord = function(e, t, r) {
                        t = parseInt(t.toFixed(0)), r = parseInt(r.toFixed(0));
                        var n = null;
                        return "LEFT" === this.measuredChannels ? n = this.getHrtfForLeftMeasured(this.mapArrayClosest, t, r, this.ir, this.numberOfTaps) : "RIGHT" === this.measuredChannels ? n = this.getHrtfForRightMeasured(this.mapArrayClosest, t, r, this.ir, this.numberOfTaps) : "BOTH" === this.measuredChannels ? n = this.getHrtfForBothMeasured(this.mapArrayClosest, t, r, this.ir, this.numberOfTaps) : console.error("Unknown this.measuredChannels: " + this.measuredChannels), this.createAudioBuffersForHrtfRecord(e, n), n
                    }, t.getAvailableAzimuthElevations = function() {
                        for (var e = [], t = 0; t < this.hrtfRecordArray.length; t++) {
                            var r = this.hrtfRecordArray[t].azimuth,
                                n = this.hrtfRecordArray[t].elevation;
                            e.push({
                                id: r + "," + n,
                                name: "Azimuth: " + r + ", Elevation: " + n
                            })
                        }
                        return e
                    }, t.createAudioBuffers = function(e) {
                        for (var t = e.sampleRate, r = 0; r < this.hrtfRecordArray.length; r++) {
                            var n, i = this.hrtfRecordArray[r];
                            if (this.sampleRate !== t) {
                                for (var a = e.createBuffer(2, this.numberOfTaps, this.sampleRate), o = a.getChannelData(0), u = a.getChannelData(1), s = 0; s < i.fir_coeffs_left.length; s++) o[s] = i.fir_coeffs_left[s], u[s] = i.fir_coeffs_right[s];
                                var c = new k(this.sampleRate, t, 1, a.getChannelData(0)),
                                    l = new k(this.sampleRate, t, 1, a.getChannelData(1)),
                                    h = c.resamplerFunc(this.numberOfTaps);
                                this.resampledNumberOfTaps = h;
                                var f = (n = e.createBuffer(2, this.resampledNumberOfTaps, t)).getChannelData(0),
                                    d = n.getChannelData(1);
                                for (s = 0; s < h; s++) f[s] = c.outputBuffer[s], d[s] = l.outputBuffer[s]
                            } else
                                for (f = (n = e.createBuffer(2, this.numberOfTaps, t)).getChannelData(0), d = n.getChannelData(1), s = 0; s < i.fir_coeffs_left.length; s++) f[s] = i.fir_coeffs_left[s], d[s] = i.fir_coeffs_right[s];
                            i.buffer = n
                        }
                    }, t.getHrtfForLeftMeasured = function(e, t, r, n, i) {
                        var a = e[181 * t + (r + 90)],
                            o = e[181 * (359 - t) + (r + 90)],
                            u = this.getFilter(n, a * i, a * i + i),
                            s = this.getFilter(n, o * i, o * i + i);
                        return new B(t, r, 1, u, s)
                    }, t.getHrtfForRightMeasured = function(e, t, r, n, i) {
                        var a = e[181 * t + (r + 90)],
                            o = e[181 * (359 - t) + (r + 90)],
                            u = this.getFilter(n, a * i, a * i + i),
                            s = this.getFilter(n, o * i, o * i + i);
                        return new B(t, r, 1, s, u)
                    }, t.getHrtfForBothMeasured = function(e, t, r, n, i) {
                        var a = !1,
                            o = t;
                        t > 180 && (a = !0, t = 360 - t);
                        var u = e[181 * t + (r + 90)],
                            s = this.getFilter(n, 2 * u * i, 2 * u * i + i),
                            c = this.getFilter(n, (2 * u + 1) * i, (2 * u + 1) * i + i);
                        return a ? new B(o, r, 1, c, s) : new B(t, r, 1, s, c)
                    }, t.getFilter = function(e, t, r) {
                        for (var n = new Array(r - t), i = 0, a = t; a < r; a++) n[i] = e[a], i++;
                        return n
                    }, t.createAudioBuffersForHrtfRecord = function(e, t) {
                        var r, n = e.sampleRate;
                        if (this.sampleRate !== n) {
                            for (var i = e.createBuffer(2, this.numberOfTaps, this.sampleRate), a = i.getChannelData(0), o = i.getChannelData(1), u = 0; u < t.fir_coeffs_left.length; u++) a[u] = t.fir_coeffs_left[u], o[u] = t.fir_coeffs_right[u];
                            var s = new k(this.sampleRate, n, 1, i.getChannelData(0)),
                                c = new k(this.sampleRate, n, 1, i.getChannelData(1)),
                                l = s.resamplerFunc(this.numberOfTaps);
                            this.resampledNumberOfTaps = l;
                            var h = (r = e.createBuffer(2, this.resampledNumberOfTaps, n)).getChannelData(0),
                                f = r.getChannelData(1);
                            for (u = 0; u < l; u++) h[u] = s.outputBuffer[u], f[u] = c.outputBuffer[u]
                        } else
                            for (h = (r = e.createBuffer(2, this.numberOfTaps, n)).getChannelData(0), f = r.getChannelData(1), u = 0; u < t.fir_coeffs_left.length; u++) h[u] = t.fir_coeffs_left[u], f[u] = t.fir_coeffs_right[u];
                        t.buffer = r
                    }, e
                }(),
                x = function() {
                    function e() {
                        this.DEBUG_ON = !1
                    }
                    var t = e.prototype;
                    return t.DEBUG = function(e) {
                        this.DEBUG_ON && console.log(e)
                    }, t.getHrtf = function(e, t, r, n) {
                        var i = this;
                        this.DEBUG("calling getHrtf: " + t + ", usagePath: " + r);
                        var a = null;
                        return a = void 0 === n ? "/" + e + "/hrtf/" + r + "/" + t : n.runtime.getURL(e + "/hrtf/" + r + "/" + t), new Promise((function(e, t) {
                            fetch(a).then((function(e) {
                                return e.blob()
                            })).then((function(r) {
                                i.readBlob(r).then((function(t) {
                                    var r = t,
                                        n = i.decodeAtHrtf(r);
                                    e(n)
                                }), (function(e) {
                                    t(e)
                                }))
                            })).catch((function(e) {
                                console.log(e), t(new Error("Request failed.  Error: " + e))
                            }))
                        }))
                    }, t.readBlob = function(e) {
                        return new Promise((function(t, r) {
                            var n = new FileReader;
                            n.onload = function() {
                                t(n.result)
                            }, n.onerror = function(e) {
                                console.error("Cannot read Blob (1), error:", e), r(new Error("Cannot read Blob"))
                            };
                            try {
                                n.readAsArrayBuffer(e)
                            } catch (i) {
                                console.error("Cannot read Blob (2), error:", i), r(i)
                            }
                        }))
                    }, t.decodeAtHrtf = function(e) {
                        var t = new V,
                            r = this,
                            n = new DataView(e),
                            i = 0,
                            a = 15;
                        t.name = r.getStringFromDataView(n, i, a), i = a, a += 4, t.version = n.getFloat32(i, !0), i = a, a += 200, t.description = r.getStringFromDataView(n, i, a), i = a, a += 4, t.gain = n.getFloat32(i, !0), i = a, a += 4, t.filterType = r.getStringFromDataView(n, i, a), i = a, a += 6, t.measuredChannels = r.getStringFromDataView(n, i, a), i = a, a += 4, t.numberOfChannels = n.getInt32(i, !0), i = a, a += 4, t.sampleRate = n.getInt32(i, !0), i = a, a += 4, t.numberOfTaps = n.getInt32(i, !0), i = a, a += 4, t.dataType = r.getStringFromDataView(n, i, a), i = a, a += 4, t.numberOfDirections = n.getInt32(i, !0), t.mapArray = new Array(65160);
                        for (var o = 0; o < 65160; o++) {
                            i = a, a += 4;
                            var u = n.getInt32(i, !0);
                            t.mapArray[o] = u
                        }
                        this.printAvailableAzimuths(t.mapArray), t.mapArrayClosest = new Array(65160);
                        for (o = 0; o < 65160; o++) {
                            i = a, a += 4;
                            u = n.getInt32(i, !0);
                            t.mapArrayClosest[o] = u
                        }
                        var s = t.numberOfDirections * t.numberOfChannels * t.numberOfTaps;
                        if (t.ir = new Float32Array(s), t.shortIr = new Int16Array(s), "32f" === t.dataType)
                            for (o = 0; o < s; o++) {
                                i = a, a += 4;
                                var c = n.getFloat32(i, !0);
                                t.ir[o] = c;
                                var l = c * Math.pow(2, 15);
                                t.shortIr[o] = l
                            } else if ("16s" === t.dataType)
                                for (o = 0; o < s; o++) {
                                    i = a, a += 2;
                                    l = n.getInt16(i, !0);
                                    t.shortIr[o] = l;
                                    c = l / Math.pow(2, 15);
                                    t.ir[o] = c
                                } else console.log("NO! unknown dataType:" + t.dataType);
                        var h = 0;
                        for (o = 0; o < 360; o++)
                            for (var f = -90; f <= 90; f++) {
                                if (-1 !== t.mapArray[h])
                                    if ("LEFT" === t.measuredChannels) {
                                        var d = r.getHrtfForLeftMeasured(t.mapArrayClosest, o, f, t.ir, t.numberOfTaps);
                                        t.addHrtfRecord(d)
                                    } else if ("RIGHT" === t.measuredChannels) {
                                    d = r.getHrtfForRightMeasured(t.mapArrayClosest, o, f, t.ir, t.numberOfTaps);
                                    t.addHrtfRecord(d)
                                } else if ("BOTH" === t.measuredChannels) {
                                    d = r.getHrtfForBothMeasured(t.mapArrayClosest, o, f, t.ir, t.numberOfTaps);
                                    t.addHrtfRecord(d)
                                }
                                h++
                            }
                        return t
                    }, t.createMapArray = function() {
                        for (var e = new Array(360), t = 0; t < 360; t++) e[t] = new Array(181);
                        return e
                    }, t.getStringFromDataView = function(e, t, r) {
                        for (var n = "", i = t; i < r; ++i) {
                            var a = e.getInt8(i);
                            a >= 32 && a <= 126 && (n += String.fromCharCode(a))
                        }
                        return n = n.trim()
                    }, t.getHrtfForLeftMeasured = function(e, t, r, n, i) {
                        var a = e[181 * t + (r + 90)],
                            o = e[181 * (359 - t) + (r + 90)],
                            u = this.getFilter(n, a * i, a * i + i),
                            s = this.getFilter(n, o * i, o * i + i);
                        return new B(t, r, 1, u, s)
                    }, t.getHrtfForRightMeasured = function(e, t, r, n, i) {
                        var a = e[181 * t + (r + 90)],
                            o = e[181 * (359 - t) + (r + 90)],
                            u = this.getFilter(n, a * i, a * i + i),
                            s = this.getFilter(n, o * i, o * i + i);
                        return new B(t, r, 1, s, u)
                    }, t.getHrtfForBothMeasured = function(e, t, r, n, i) {
                        var a = !1,
                            o = t;
                        t > 180 && (a = !0, t = 360 - t);
                        var u = e[181 * t + (r + 90)],
                            s = this.getFilter(n, 2 * u * i, 2 * u * i + i),
                            c = this.getFilter(n, (2 * u + 1) * i, (2 * u + 1) * i + i);
                        return a ? new B(o, r, 1, c, s) : new B(t, r, 1, s, c)
                    }, t.getFilter = function(e, t, r) {
                        for (var n = new Array(r - t), i = 0, a = t; a < r; a++) n[i] = e[a], i++;
                        return n
                    }, t.printAvailableAzimuths = function(e) {}, e
                }(),
                H = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).channelSplitter = n.audioContext.createChannelSplitter(2), n.output = t.createGain(), n.resonanceAudioScene = new(o())(t, {
                            ambisonicOrder: 3
                        }), n.resonanceSourceLeft = n.resonanceAudioScene.createSource(), n.resonanceSourceLeft.setPosition(1, .5, 0), n.resonanceSourceRight = n.resonanceAudioScene.createSource(), n.resonanceSourceRight.setPosition(-1, .5, 0), n.wire(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return this.channelSplitter.connect(this.resonanceSourceLeft.input, 0), this.channelSplitter.connect(this.resonanceSourceRight.input, 1), this.resonanceAudioScene.output.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.channelSplitter
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, t
                }(S),
                q = function() {
                    function e(e) {
                        this.areiPluginParametersService = e, this.baseUrl = "assets", this.hrtfLoader = new x, this.virtualStereoFilterCalculatorService = new w(this.hrtfLoader), this.virtualAmbioFilterCalculatorService = new M(this.hrtfLoader)
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(i, a) {
                            t = n.areiPluginParametersService.ensurePluginInstanceParameterKeyValues(t);
                            var o = n.areiPluginParametersService.getParameterValue(t, L.METHOD);
                            if ("resonanceAudio" === o) {
                                var u = new H(e, n.areiPluginParametersService.getParameterKeyValues(t));
                                i(u)
                            } else "virtualCtc" === o ? n.virtualStereoFilterCalculatorService.calculate(n.baseUrl, e, {
                                hrtf: "dry.aria3d.hrtf",
                                frontAngle: 60
                            }, r).then((function(r) {
                                var a = r,
                                    o = new D(e, n.areiPluginParametersService.getParameterKeyValues(t), a, null);
                                i(o)
                            }), (function(e) {
                                console.error("Cannot create AREI node"), a(e)
                            })) : "virtualStereo" === o ? n.virtualStereoFilterCalculatorService.calculate(n.baseUrl, e, {
                                hrtf: n.areiPluginParametersService.getParameterValue(t, L.SIDE_HRTF),
                                frontAngle: n.areiPluginParametersService.getParameterValue(t, L.SIDE_ANGLE)
                            }, r).then((function(r) {
                                var a = r,
                                    o = new D(e, n.areiPluginParametersService.getParameterKeyValues(t), a, null);
                                i(o)
                            }), (function(e) {
                                console.error("Cannot create AREI node"), a(e)
                            })) : "virtualAmbio" === o ? n.virtualAmbioFilterCalculatorService.calculate(n.baseUrl, e, {
                                frontAnglePerSpeaker: n.areiPluginParametersService.getParameterValue(t, L.FRONT_ANGLE),
                                backAnglePerSpeaker: n.areiPluginParametersService.getParameterValue(t, L.REAR_ANGLE),
                                frontBackHrtf: n.areiPluginParametersService.getParameterValue(t, L.FRONT_HRTF),
                                sideAnglePerSpeaker: n.areiPluginParametersService.getParameterValue(t, L.SIDE_ANGLE),
                                sideHrtf: n.areiPluginParametersService.getParameterValue(t, L.SIDE_HRTF),
                                xtcFilterLength: n.areiPluginParametersService.getParameterValue(t, L.XTC_FILTER_LENGTH),
                                xtcAttenuations: n.areiPluginParametersService.getParameterValue(t, L.XTC_ATTENUATIONS_IN_DB),
                                xtcDelay: n.areiPluginParametersService.getParameterValue(t, L.XTC_DELAY_IN_SAMPLES)
                            }, r).then((function(r) {
                                var a = r,
                                    o = new D(e, n.areiPluginParametersService.getParameterKeyValues(t), null, a);
                                i(o)
                            }), (function(e) {
                                console.error("Cannot create AREI node"), a(e)
                            })) : console.error("Invalid AREI method: " + o)
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        var i = this;
                        return new Promise((function(a, o) {
                            t.setParameter(r);
                            var u = t.getParameter(L.METHOD).value;
                            if ("virtualStereo" === u) switch (r.key) {
                                case L.METHOD:
                                case L.SIDE_HRTF:
                                case L.SIDE_ANGLE:
                                    i.virtualStereoFilterCalculatorService.calculate(i.baseUrl, e, {
                                        hrtf: t.getParameter(L.SIDE_HRTF).value,
                                        frontAngle: t.getParameter(L.SIDE_ANGLE).value
                                    }, n).then((function(e) {
                                        var r = e;
                                        t.applyVirtualStereoFilters(r), a()
                                    }), (function(e) {
                                        console.error("Cannot calculate AREI filters for VIRTUAL_STEREO"), o(e)
                                    }));
                                    break;
                                default:
                                    console.error("No switch case for parameter with name: " + r.key), o()
                            } else if ("virtualAmbio" === u) switch (r.key) {
                                case L.METHOD:
                                case L.FRONT_HRTF:
                                case L.FRONT_ANGLE:
                                case L.REAR_HRTF:
                                case L.REAR_ANGLE:
                                case L.SIDE_HRTF:
                                case L.SIDE_ANGLE:
                                    i.virtualAmbioFilterCalculatorService.calculate(i.baseUrl, e, {
                                        frontAnglePerSpeaker: t.getParameter(L.FRONT_ANGLE).value,
                                        backAnglePerSpeaker: t.getParameter(L.REAR_ANGLE).value,
                                        frontBackHrtf: t.getParameter(L.FRONT_HRTF).value,
                                        sideAnglePerSpeaker: t.getParameter(L.SIDE_ANGLE).value,
                                        sideHrtf: t.getParameter(L.SIDE_HRTF).value,
                                        xtcFilterLength: t.getParameter(L.XTC_FILTER_LENGTH).value,
                                        xtcAttenuations: t.getParameter(L.XTC_ATTENUATIONS_IN_DB).value,
                                        xtcDelay: t.getParameter(L.XTC_DELAY_IN_SAMPLES).value
                                    }, n).then((function(e) {
                                        var r = e;
                                        t.applyVirtualAmbioFilters(r), a()
                                    }), (function(e) {
                                        console.error("Cannot calculate AREI filters for VIRTUAL_AMBIO"), o(e)
                                    }));
                                    break;
                                case L.FRONT_GAIN:
                                    t.virtualAmbioAudioNode.applyFrontGain();
                                    break;
                                case L.REAR_GAIN:
                                    t.virtualAmbioAudioNode.applyRearGain();
                                    break;
                                case L.SIDE_GAIN:
                                    t.virtualAmbioAudioNode.applySideGain();
                                    break;
                                default:
                                    console.error("No switch case for parameter with name: " + r.key), o()
                            } else console.error("Invalid AREI method: " + u)
                        }))
                    }, e
                }(),
                Q = function(e) {
                    function t() {
                        var r;
                        return (r = e.call(this) || this).parameters.push({
                            key: t.GAIN,
                            value: t.DEFAULT_GAIN_VALUE
                        }), r.parameters.push({
                            key: t.RECORDING_ENABLED,
                            value: t.DEFAULT_RECORDING_ENABLED
                        }), r
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "CAPTURE"
                    }, r.getPresetDiscriminator = function() {
                        return null
                    }, t
                }(E);
            Q.RECORDING_ENABLED = "recordingEnabled", Q.GAIN = "gain", Q.DEFAULT_GAIN_VALUE = 1, Q.DEFAULT_RECORDING_ENABLED = !1;
            var W = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).gain = t.createGain(), n.gain.gain.setValueAtTime(n.getParameter(Q.GAIN).value, t.currentTime), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.gain
                    }, r.getOutput = function() {
                        return this.gain
                    }, r.connect = function(e, t, r) {
                        this.gain.connect(e)
                    }, r.disconnect = function(e) {
                        this.gain.disconnect(e)
                    }, r.applyRecordingEnabled = function() {
                        this.getParameter(Q.RECORDING_ENABLED).value
                    }, r.startRecording = function() {}, r.stopRecording = function() {}, t
                }(S),
                K = function() {
                    function e(e) {
                        this.capturePluginParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.capturePluginParametersService.ensurePluginInstanceParameterKeyValues(t), r(new W(e, n.capturePluginParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(e, n) {
                            if (t.setParameter(r), r.key === Q.GAIN) t.applyRecordingEnabled(), e();
                            else console.error("No available parameter with name: " + r.key), n()
                        }))
                    }, e
                }(),
                Y = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).input = n.audioContext.createGain(), n.output = n.audioContext.createGain(), n.wire(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return this.input.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, t
                }(S),
                j = function() {
                    function e(e) {
                        this.convolverPluginParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.convolverPluginParametersService.ensurePluginInstanceParameterKeyValues(t), r(new Y(e, n.convolverPluginParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(e, n) {
                            t.setParameter(r), r.key, console.error("No available parameter with name: " + r.key), n()
                        }))
                    }, e
                }(),
                X = function(e) {
                    function t() {
                        var r;
                        return (r = e.call(this) || this).parameters.push({
                            key: t.THRESHOLD,
                            value: t.DEFAULT_THRESHOLD_VALUE
                        }), r.parameters.push({
                            key: t.KNEE,
                            value: t.DEFAULT_KNEE_VALUE
                        }), r.parameters.push({
                            key: t.RATIO,
                            value: t.DEFAULT_RATIO_VALUE
                        }), r.parameters.push({
                            key: t.ATTACK,
                            value: t.DEFAULT_ATTACK_VALUE
                        }), r.parameters.push({
                            key: t.RELEASE,
                            value: t.DEFAULT_RELEASE_VALUE
                        }), r.parameters.push({
                            key: t.REDUCTION,
                            value: t.DEFAULT_REDUCTION_VALUE
                        }), r
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "DYNAMICS_COMPRESSOR"
                    }, r.getPresetDiscriminator = function() {
                        return null
                    }, t.getDefaultThresholdValue = function() {
                        return t.DEFAULT_THRESHOLD_VALUE
                    }, t.getDefaultKneeValue = function() {
                        return t.DEFAULT_KNEE_VALUE
                    }, t.getDefaultRatioValue = function() {
                        return t.DEFAULT_RATIO_VALUE
                    }, t.getDefaultAttackValue = function() {
                        return t.DEFAULT_ATTACK_VALUE
                    }, t.getDefaultReleaseValue = function() {
                        return t.DEFAULT_RELEASE_VALUE
                    }, t
                }(E);
            X.THRESHOLD = "threshold", X.KNEE = "knee", X.RATIO = "ratio", X.ATTACK = "attack", X.RELEASE = "release", X.REDUCTION = "reduction", X.DEFAULT_THRESHOLD_VALUE = -24, X.DEFAULT_KNEE_VALUE = 30, X.DEFAULT_RATIO_VALUE = 12, X.DEFAULT_ATTACK_VALUE = .003, X.DEFAULT_RELEASE_VALUE = .25, X.DEFAULT_REDUCTION_VALUE = 0;
            var z = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).dynamicsCompressorNode = n.audioContext.createDynamicsCompressor(), n.applyThreshold(), n.applyKnee(), n.applyRatio(), n.applyAttack(), n.applyRelease(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.dynamicsCompressorNode
                    }, r.getOutput = function() {
                        return this.dynamicsCompressorNode
                    }, r.connect = function(e, t, r) {
                        this.dynamicsCompressorNode.connect(e)
                    }, r.disconnect = function(e) {
                        this.dynamicsCompressorNode.disconnect(e)
                    }, r.applyThreshold = function() {
                        this.dynamicsCompressorNode.threshold.setTargetAtTime(this.getParameter(X.THRESHOLD).value, this.audioContext.currentTime, .015)
                    }, r.applyKnee = function() {
                        this.dynamicsCompressorNode.knee.setTargetAtTime(this.getParameter(X.KNEE).value, this.audioContext.currentTime, .015)
                    }, r.applyRatio = function() {
                        this.dynamicsCompressorNode.ratio.setTargetAtTime(this.getParameter(X.RATIO).value, this.audioContext.currentTime, .015)
                    }, r.applyAttack = function() {
                        this.dynamicsCompressorNode.attack.setTargetAtTime(this.getParameter(X.ATTACK).value, this.audioContext.currentTime, .015)
                    }, r.applyRelease = function() {
                        this.dynamicsCompressorNode.release.setTargetAtTime(this.getParameter(X.RELEASE).value, this.audioContext.currentTime, .015)
                    }, t
                }(S),
                Z = function() {
                    function e(e) {
                        this.dynamicsCompressorPluginParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.dynamicsCompressorPluginParametersService.ensurePluginInstanceParameterKeyValues(t), r(new z(e, n.dynamicsCompressorPluginParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(e, n) {
                            switch (t.setParameter(r), r.key) {
                                case X.THRESHOLD:
                                    t.applyThreshold(), e();
                                    break;
                                case X.KNEE:
                                    t.applyKnee(), e();
                                    break;
                                case X.RATIO:
                                    t.applyRatio(), e();
                                    break;
                                case X.ATTACK:
                                    t.applyAttack(), e();
                                    break;
                                case X.RELEASE:
                                    t.applyRelease(), e();
                                    break;
                                default:
                                    console.error("No available parameter with name: " + r.key), n()
                            }
                        }))
                    }, e
                }(),
                J = function(e) {
                    function t() {
                        var r;
                        return (r = e.call(this) || this).parameters.push({
                            key: t.FILTER_LENGTH,
                            value: t.DEFAULT_FILTER_LENGTH
                        }), r.parameters.push({
                            key: t.NUMBER_OF_BANDS,
                            value: t.DEFAULT_NUMBER_OF_BANDS
                        }), r.parameters.push({
                            key: t.PREAMP_GAIN,
                            value: t.DEFAULT_PREAMP_GAIN
                        }), r.parameters.push({
                            key: t.FREQUENCIES_3,
                            value: t.DEFAULT_FREQUENCIES_3
                        }), r.parameters.push({
                            key: t.GAIN_RATIOS_3,
                            value: t.DEFAULT_GAIN_RATIOS_3
                        }), r.parameters.push({
                            key: t.QS_3,
                            value: t.DEFAULT_QS_3
                        }), r.parameters.push({
                            key: t.FREQUENCIES_11,
                            value: t.DEFAULT_FREQUENCIES_11
                        }), r.parameters.push({
                            key: t.GAIN_RATIOS_11,
                            value: t.DEFAULT_GAIN_RATIOS_11
                        }), r.parameters.push({
                            key: t.QS_11,
                            value: t.DEFAULT_QS_11
                        }), r.parameters.push({
                            key: t.FREQUENCIES_21,
                            value: t.DEFAULT_FREQUENCIES_21
                        }), r.parameters.push({
                            key: t.GAIN_RATIOS_21,
                            value: t.DEFAULT_GAIN_RATIOS_21
                        }), r.parameters.push({
                            key: t.QS_21,
                            value: t.DEFAULT_QS_21
                        }), r.initializePresets(), r
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "EQ_BIQUAD"
                    }, r.getPresetDiscriminator = function() {
                        return t.DEFAULT_NUMBER_OF_BANDS.toString()
                    }, t.getDefaultGainRatios3 = function() {
                        return t.DEFAULT_GAIN_RATIOS_3.slice(0)
                    }, t.getDefaultGainRatios11 = function() {
                        return t.DEFAULT_GAIN_RATIOS_11.slice(0)
                    }, t.getDefaultGainRatios21 = function() {
                        return t.DEFAULT_GAIN_RATIOS_21.slice(0)
                    }, r.initializePresets = function() {
                        this.presets = [], this.initializePresets21(), this.initializePresets11()
                    }, r.initializePresets21 = function() {
                        var e = {
                            acoustic: [5, 5, 5, 4.75, 4.5, 4.25, 4, 2.5, 1, 1.5, 2, 2, 2, 2.75, 3.5, 3.75, 4, 3.75, 3.5, 2.75, 2],
                            bassBooster: [5, 5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            bassReducer: [-5, -5, -5, -4.5, -4, -3.5, -3, -2.5, -2, -1.5, 1, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            classical: [4.5, 4.5, 4.5, 4.25, 4, 3.5, 3, 2.5, 2, .5, -1, -1, -1, -.5, 0, 1, 2, 2.5, 3, 3.5, 4],
                            dance: [4, 4, 4, 5.5, 7, 6, 5, 2.5, 0, 1, 2, 2.5, 3, 4, 5, 4.5, 4, 3.5, 3, 1.5, 0],
                            deep: [5, 5, 5, 4, 3, 2.5, 2, 1.5, 1, 2, 3, 2.5, 2, 1.5, 1, -.5, -2, -3, -4, -4.5, -5],
                            electronic: [4.5, 4.5, 4.5, 4, 3.5, 2.25, 1, .5, 0, -1, -2, 0, 2, 1.25, .5, .75, 1, 2.5, 4, 4.5, 5],
                            flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            hipHop: [5, 5, 5, 4.5, 4, 2.5, 1, 2, 3, 1, -1, -1, -1, 0, 1, 0, -1, .5, 2, 2.5, 3],
                            jazz: [4, 4, 4, 3.5, 3, 2, 1, 1.5, 2, 0, -2, -2, -2, -1, 0, .5, 1, 2, 3, 3.5, 4],
                            latin: [4.5, 4.5, 4.5, 3.75, 3, 1.5, 0, 0, 0, -.75, -1.5, -1.5, -1.5, -1.5, -1.5, -.75, 0, 1.5, 3, 3.75, 4.5],
                            loudness: [6, 6, 6, 5, 4, 2, 0, 0, 0, -1, -2, -1, 0, -.5, -1, -3, -5, 0, 5, 3, 1],
                            lounge: [-3, -3, -3, -2.25, -1.5, -1, -.5, .75, 1.5, 2.75, 4, 3, 2, 1, 0, -.75, -1.5, 1.75, 2, 1.5, 1],
                            piano: [3, 3, 3, 2.5, 2, 1, 0, 1.25, 2.5, 2.75, 3, 2, 1, 2.25, 3.5, 3.75, 4, 3.5, 3, 3.75, 3.5],
                            pop: [-2, -2, -2, -1.5, -1, -.5, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0, -.5, -1, -1.5, -2],
                            rnb: [3, 3, 3, 5, 7, 6.5, 6, 4, 2, -.5, -3, -2.5, -2, 0, 2, 2.5, 3, 3, 3, 3.5, 4],
                            rock: [5, 5, 5, 4.5, 4, 3.5, 3, 2.5, 2, .5, -1, -1, -1, 0, 1, 2, 3, 3.5, 4, 4.5, 5],
                            smallSpeakers: [5, 5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, .5, 0, -.5, -1, -1.5, -2, -2.5, -3, -3.5, -4],
                            spokenWord: [-4, -4, -4, -2.5, -1, -.5, 0, .5, 1, 2.4, 4, 4.5, 5, 5, 5, 4.5, 4, 3, 2, 1, 0],
                            trebleBooster: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                            trebleReducer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -.5, -1, -1.5, -2, -2.5, -3, -3.5, -4, -4.5, -5],
                            vocalBooster: [-2, -2, -2, -2.5, -3, -3, -3, -1, 1, 2.5, 4, 4, 4, 3.5, 3, 2, 1, .5, 0, -1, -2]
                        };
                        for (var r in e) 21 != e[r].length && (console.error("eqPreset21[key].length != 21"), console.log(r)), this.presets.push({
                            pluginId: this.getPluginId(),
                            presetId: r + "21",
                            type: "system",
                            name: this.makePresetLabel(r),
                            discriminator: "21",
                            parameters: [{
                                key: "frequencies",
                                value: t.DEFAULT_FREQUENCIES_21
                            }, {
                                key: "q",
                                value: t.DEFAULT_QS_21
                            }, {
                                key: "gain",
                                value: e[r]
                            }]
                        })
                    }, r.initializePresets11 = function() {
                        var e = {
                            acoustic: [5, 5, 4.5, 4, 1, 2, 2, 3.5, 4, 3.5, 2],
                            bassBooster: [5, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0],
                            bassReducer: [-5, -5, -4, -3, -2, 1, 0, 0, 0, 0, 0],
                            classical: [4.5, 4.5, 4, 3, 2, -1, -1, 0, 2, 3, 4],
                            dance: [4, 4, 7, 5, 0, 2, 3, 5, 4, 3, 0],
                            deep: [5, 5, 3, 2, 1, 3, 2, 1, -2, -4, -5],
                            electronic: [4.5, 4.5, 3.5, 1, 0, -2, 2, .5, 1, 4, 5],
                            flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            hipHop: [5, 5, 4, 1, 3, -1, -1, 1, -1, 2, 3],
                            jazz: [4, 4, 3, 1, 2, -2, -2, 0, 1, 3, 4],
                            latin: [4.5, 4.5, 3, 0, 0, -1.5, -1.5, -1.5, 0, 3, 4.5],
                            loudness: [6, 6, 4, 0, 0, -2, 0, -1, -5, 5, 1],
                            lounge: [-3, -3, -1.5, -.5, 1.5, 4, 2, 0, -1.5, 2, 1],
                            piano: [3, 3, 2, 0, 2.5, 3, 1, 3.5, 4, 3, 3.5],
                            pop: [-2, -2, -1, 0, 2, 4, 4, 2, 0, -1, -2],
                            rnb: [3, 3, 7, 6, 2, -3, -2, 2, 3, 3, 4],
                            rock: [5, 5, 4, 3, 2, -1, -1, 1, 3, 4, 5],
                            smallSpeakers: [5, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4],
                            spokenWord: [-4, -4, -1, 0, 1, 4, 5, 5, 4, 2, 0],
                            trebleBooster: [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5],
                            trebleReducer: [0, 0, 0, 0, 0, 0, -1, -2, -3, -4, -5],
                            vocalBooster: [-2, -2, -3, -3, 1, 4, 4, 3, 1, 0, -2]
                        };
                        for (var r in e) 11 != e[r].length && console.error("eqPreset11[key].length != 11"), this.presets.push({
                            pluginId: this.getPluginId(),
                            presetId: r + "11",
                            type: "system",
                            name: this.makePresetLabel(r),
                            discriminator: "11",
                            parameters: [{
                                key: "frequencies",
                                value: t.DEFAULT_FREQUENCIES_11
                            }, {
                                key: "q",
                                value: t.DEFAULT_QS_11
                            }, {
                                key: "gain",
                                value: e[r]
                            }]
                        })
                    }, r.makePresetLabel = function(e) {
                        var t = e.replace(/([A-Z])/g, " $1");
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    }, t
                }(E);
            J.FILTER_LENGTH = "filterLength", J.NUMBER_OF_BANDS = "numberOfBands", J.PREAMP_GAIN = "preampGain", J.FREQUENCIES_3 = "frequencies3", J.GAIN_RATIOS_3 = "gainRatios3", J.QS_3 = "qs3", J.FREQUENCIES_11 = "frequencies11", J.GAIN_RATIOS_11 = "gainRatios11", J.QS_11 = "qs11", J.FREQUENCIES_21 = "frequencies21", J.GAIN_RATIOS_21 = "gainRatios21", J.QS_21 = "qs21", J.DEFAULT_FILTER_LENGTH = 2048, J.DEFAULT_NUMBER_OF_BANDS = 11, J.DEFAULT_PREAMP_GAIN = 1, J.DEFAULT_FREQUENCIES_3 = new Array(250, 2e3, 8e3), J.DEFAULT_GAIN_RATIOS_3 = new Array(0, 0, 0), J.DEFAULT_QS_3 = new Array(.7071, .7071, .7071), J.DEFAULT_FREQUENCIES_11 = new Array(16, 31.5, 63, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3), J.DEFAULT_GAIN_RATIOS_11 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), J.DEFAULT_QS_11 = new Array(.7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071), J.DEFAULT_FREQUENCIES_21 = new Array(16, 22, 31.5, 44, 63, 88, 125, 177, 250, 354, 500, 707, 1e3, 1414, 2e3, 2828, 4e3, 5656, 8e3, 11314, 16e3), J.DEFAULT_GAIN_RATIOS_21 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), J.DEFAULT_QS_21 = new Array(.7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071, .7071);
            var $ = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).input = n.audioContext.createGain(), n.output = n.audioContext.createGain(), n.output.gain.setValueAtTime(1, n.audioContext.currentTime), n.createBiquadFilters(), n.applyPreampGain(), n.wire(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            e.input.connect(e.biquadFilterNodeList[0]);
                            for (var n = 1; n < e.biquadFilterNodeList.length; n++) e.biquadFilterNodeList[n - 1].connect(e.biquadFilterNodeList[n]);
                            e.biquadFilterNodeList[e.biquadFilterNodeList.length - 1].connect(e.output), t()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.disconnectAll = function() {
                        this.input.disconnect();
                        for (var e = 1; e < this.biquadFilterNodeList.length; e++) this.biquadFilterNodeList[e - 1].disconnect();
                        this.biquadFilterNodeList[this.biquadFilterNodeList.length - 1].disconnect()
                    }, r.createBiquadFilters = function() {
                        this.biquadFilterNodeList = [];
                        for (var e = this.getParameter(J.NUMBER_OF_BANDS).value, t = 0; t < e; t++) {
                            var r = this.audioContext.createBiquadFilter();
                            0 == t ? r.type = "lowshelf" : t == this.getParameter(J.NUMBER_OF_BANDS).value - 1 ? r.type = "highshelf" : r.type = "peaking", 3 === e ? (r.frequency.setTargetAtTime(this.getParameter(J.FREQUENCIES_3).value[t], this.audioContext.currentTime, .015), r.gain.setTargetAtTime(this.getParameter(J.GAIN_RATIOS_3).value[t], this.audioContext.currentTime, .015), r.Q.setTargetAtTime(this.getParameter(J.QS_3).value[t], this.audioContext.currentTime, .015)) : 11 === e ? (r.frequency.setTargetAtTime(this.getParameter(J.FREQUENCIES_11).value[t], this.audioContext.currentTime, .015), r.gain.setTargetAtTime(this.getParameter(J.GAIN_RATIOS_11).value[t], this.audioContext.currentTime, .015), r.Q.setTargetAtTime(this.getParameter(J.QS_11).value[t], this.audioContext.currentTime, .015)) : 21 === e && (r.frequency.setTargetAtTime(this.getParameter(J.FREQUENCIES_21).value[t], this.audioContext.currentTime, .015), r.gain.setTargetAtTime(this.getParameter(J.GAIN_RATIOS_21).value[t], this.audioContext.currentTime, .015), r.Q.setTargetAtTime(this.getParameter(J.QS_21).value[t], this.audioContext.currentTime, .015)), this.biquadFilterNodeList.push(r)
                        }
                    }, r.applyNewFilters = function() {
                        return this.disconnectAll(), this.createBiquadFilters(), this.wire()
                    }, r.applyPreampGain = function() {
                        this.input.gain.setValueAtTime(this.getParameterValue(J.PREAMP_GAIN), this.audioContext.currentTime)
                    }, t
                }(S),
                ee = function() {
                    function e(e) {
                        this.eqBiquadPluginParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.eqBiquadPluginParametersService.ensurePluginInstanceParameterKeyValues(t), r(new $(e, n.eqBiquadPluginParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(n, i) {
                            switch (t.setParameter(r), r.key) {
                                case J.GAIN_RATIOS_3:
                                    for (var a = 0; a < t.getParameter(J.NUMBER_OF_BANDS).value; a++) t.biquadFilterNodeList[a].gain.setTargetAtTime(t.getParameter(J.GAIN_RATIOS_3).value[a], e.currentTime, .015);
                                    n();
                                    break;
                                case J.GAIN_RATIOS_11:
                                    for (a = 0; a < t.getParameter(J.NUMBER_OF_BANDS).value; a++) t.biquadFilterNodeList[a].gain.setTargetAtTime(t.getParameter(J.GAIN_RATIOS_11).value[a], e.currentTime, .015);
                                    n();
                                    break;
                                case J.GAIN_RATIOS_21:
                                    for (a = 0; a < t.getParameter(J.NUMBER_OF_BANDS).value; a++) t.biquadFilterNodeList[a].gain.setTargetAtTime(t.getParameter(J.GAIN_RATIOS_21).value[a], e.currentTime, .015);
                                    n();
                                    break;
                                case J.QS_3:
                                    for (a = 0; a < t.getParameter(J.NUMBER_OF_BANDS).value; a++) t.biquadFilterNodeList[a].Q.setTargetAtTime(t.getParameter(J.QS_3).value[a], e.currentTime, .015);
                                    n();
                                    break;
                                case J.QS_11:
                                    for (a = 0; a < t.getParameter(J.NUMBER_OF_BANDS).value; a++) t.biquadFilterNodeList[a].Q.setTargetAtTime(t.getParameter(J.QS_11).value[a], e.currentTime, .015);
                                    n();
                                    break;
                                case J.QS_21:
                                    for (a = 0; a < t.getParameter(J.NUMBER_OF_BANDS).value; a++) t.biquadFilterNodeList[a].Q.setTargetAtTime(t.getParameter(J.QS_21).value[a], e.currentTime, .015);
                                    n();
                                    break;
                                case J.NUMBER_OF_BANDS:
                                    t.applyNewFilters().then((function(e) {
                                        n()
                                    }));
                                    break;
                                case J.PREAMP_GAIN:
                                    t.applyPreampGain();
                                    break;
                                default:
                                    console.error("No available parameter with name: " + r.key), i()
                            }
                        }))
                    }, e
                }(),
                te = function(e) {
                    function t() {
                        var r;
                        return (r = e.call(this) || this).parameters.push({
                            key: t.GAIN,
                            value: t.DEFAULT_GAIN_VALUE
                        }), r
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "SIMPLE_GAIN"
                    }, r.getPresetDiscriminator = function() {
                        return null
                    }, t
                }(E);
            te.GAIN = "gain", te.DEFAULT_GAIN_VALUE = 1.375;
            var re = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).gain = t.createGain(), n.gain.gain.setValueAtTime(n.getParameter(te.GAIN).value, n.audioContext.currentTime), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.gain
                    }, r.getOutput = function() {
                        return this.gain
                    }, r.connect = function(e, t, r) {
                        this.gain.connect(e)
                    }, r.disconnect = function(e) {
                        this.gain.disconnect(e)
                    }, t
                }(S),
                ne = function() {
                    function e(e) {
                        this.pluginGainParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.pluginGainParametersService.ensurePluginInstanceParameterKeyValues(t), r(new re(e, n.pluginGainParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(n, i) {
                            if (t.setParameter(r), r.key === te.GAIN) t.gain.gain.setValueAtTime(r.value, e.currentTime), n();
                            else console.error("No available parameter with name: " + r.key), i()
                        }))
                    }, e
                }(),
                ie = function(e) {
                    function t() {
                        var r;
                        return (r = e.call(this) || this).parameters.push({
                            key: t.FILTER_LENGTH,
                            value: t.DEFAULT_FILTER_LENGTH
                        }), r.parameters.push({
                            key: t.ATTENUATION,
                            value: t.DEFAULT_ATTENUATION_VALUE
                        }), r.parameters.push({
                            key: t.DELAY,
                            value: t.DEFAULT_DELAY_VALUE
                        }), r
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "RACE_TWO_CHANNELS"
                    }, r.getPresetDiscriminator = function() {
                        return null
                    }, t
                }(E);
            ie.FILTER_LENGTH = "filterLength", ie.ATTENUATION = "attenuation", ie.DELAY = "delay", ie.DEFAULT_FILTER_LENGTH = 2048, ie.DEFAULT_ATTENUATION_VALUE = .794328212, ie.DEFAULT_DELAY_VALUE = 3;
            var ae = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r) || this).xtcFilters = n, i.xtcFilters.createAudioBuffers(i.audioContext), i.input = i.audioContext.createGain(), i.input.gain.value = 1, i.output = i.audioContext.createGain(), i.output.gain.value = 1, i.wire(), i
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        this.convolverNode_ll_rl = this.audioContext.createConvolver(), this.convolverNode_ll_rl.normalize = !1, this.convolverNode_ll_rl.buffer = this.xtcFilters.buffer_ll_rl, this.convolverNode_ll_rl.channelInterpretation = "discrete", this.convolverNode_lr_rr = this.audioContext.createConvolver(), this.convolverNode_lr_rr.normalize = !1, this.convolverNode_lr_rr.buffer = this.xtcFilters.buffer_lr_rr, this.convolverNode_lr_rr.channelInterpretation = "discrete";
                        var e = this.audioContext.createGain();
                        e.gain.value = 1;
                        var t = this.audioContext.createGain();
                        t.gain.value = 1;
                        var r = this.audioContext.createChannelSplitter(2),
                            n = this.audioContext.createChannelSplitter(2),
                            i = this.audioContext.createChannelMerger(2);
                        return this.input.connect(this.convolverNode_ll_rl), this.input.connect(this.convolverNode_lr_rr), this.convolverNode_ll_rl.connect(e), this.convolverNode_lr_rr.connect(t), e.connect(r), t.connect(n), r.connect(i, 0, 0), r.connect(i, 1, 0), n.connect(i, 0, 1), n.connect(i, 1, 1), i.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.updateXtcFilters = function(e) {
                        this.xtcFilters = e, this.xtcFilters.createAudioBuffers(this.audioContext), this.convolverNode_ll_rl.buffer = this.xtcFilters.buffer_ll_rl, this.convolverNode_lr_rr.buffer = this.xtcFilters.buffer_lr_rr
                    }, t
                }(S),
                oe = function() {
                    function e(e, t, r, n) {
                        this.c_l_l = e, this.c_r_l = t, this.c_l_r = r, this.c_r_r = n
                    }
                    return e.prototype.createAudioBuffers = function(e) {
                        var t = this.c_l_l.length;
                        this.buffer_c_l_l = e.createBuffer(1, t, e.sampleRate), this.buffer_c_r_l = e.createBuffer(1, t, e.sampleRate), this.buffer_c_l_r = e.createBuffer(1, t, e.sampleRate), this.buffer_c_r_r = e.createBuffer(1, t, e.sampleRate), this.buffer_c_l_l_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_r_l_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_l_r_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_c_r_r_stereo = e.createBuffer(2, t, e.sampleRate), this.buffer_ll_rl = e.createBuffer(2, t, e.sampleRate), this.buffer_lr_rr = e.createBuffer(2, t, e.sampleRate), this.buffer_ll_rr = e.createBuffer(2, t, e.sampleRate);
                        var r = this.buffer_ll_rr.getChannelData(0),
                            n = this.buffer_ll_rr.getChannelData(1);
                        this.buffer_lr_rl = e.createBuffer(2, t, e.sampleRate);
                        for (var i = this.buffer_lr_rl.getChannelData(0), a = this.buffer_lr_rl.getChannelData(1), o = 0; o < t; o++) this.buffer_c_l_l[o] = this.c_l_l[o], this.buffer_c_r_l[o] = this.c_r_l[o], this.buffer_c_l_r[o] = this.c_l_r[o], this.buffer_c_r_r[o] = this.c_r_r[o], this.buffer_c_l_l_stereo.getChannelData(0)[o] = this.c_l_l[o], this.buffer_c_r_l_stereo.getChannelData(0)[o] = this.c_r_l[o], this.buffer_c_l_r_stereo.getChannelData(0)[o] = this.c_l_r[o], this.buffer_c_r_r_stereo.getChannelData(0)[o] = this.c_r_r[o], this.buffer_c_l_l_stereo.getChannelData(1)[o] = this.c_l_l[o], this.buffer_c_r_l_stereo.getChannelData(1)[o] = this.c_r_l[o], this.buffer_c_l_r_stereo.getChannelData(1)[o] = this.c_l_r[o], this.buffer_c_r_r_stereo.getChannelData(1)[o] = this.c_r_r[o], r[o] = this.c_l_l[o], n[o] = this.c_r_r[o], i[o] = this.c_l_r[o], a[o] = this.c_r_l[o], this.buffer_ll_rl.getChannelData(0)[o] = this.c_l_l[o], this.buffer_ll_rl.getChannelData(1)[o] = this.c_r_l[o], this.buffer_lr_rr.getChannelData(0)[o] = this.c_l_r[o], this.buffer_lr_rr.getChannelData(1)[o] = this.c_r_r[o]
                    }, e
                }(),
                ue = function() {
                    function e(e, t, r) {
                        this.pluginRaceParametersService = e, this.webWorkerService = t, this.raceDspService = r
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.pluginRaceParametersService.ensurePluginInstanceParameterKeyValues(t), n.webWorkerService.run(n.raceDspService.calculate, {
                                filterLength: n.pluginRaceParametersService.getParameterValue(t, ie.FILTER_LENGTH),
                                attenuation: n.pluginRaceParametersService.getParameterValue(t, ie.ATTENUATION),
                                delay: n.pluginRaceParametersService.getParameterValue(t, ie.DELAY)
                            }).then((function(i) {
                                var a = new oe(Array.from(i.left), Array.from(i.right), Array.from(i.right), Array.from(i.left)),
                                    o = new ae(e, n.pluginRaceParametersService.getParameterKeyValues(t), a);
                                r(o)
                            }), (function(e) {
                                i()
                            }))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        var i = this;
                        return new Promise((function(e, n) {
                            t.setParameter(r), i.webWorkerService.run(i.raceDspService.calculate, {
                                filterLength: t.getParameter(ie.FILTER_LENGTH).value,
                                attenuation: t.getParameter(ie.ATTENUATION).value,
                                delay: t.getParameter(ie.DELAY).value
                            }).then((function(r) {
                                console.log(r);
                                var n = new oe(Array.from(r.left), Array.from(r.right), Array.from(r.right), Array.from(r.left));
                                t.updateXtcFilters(n), e(t)
                            }), (function(e) {
                                n()
                            }))
                        }))
                    }, t.race = function(e) {
                        var t = new Float32Array(e.filterLength).fill(0),
                            r = new Float32Array(e.filterLength).fill(0);
                        t[0] = 1, r[0] = 0;
                        for (var n = 0; n < e.filterLength; n++) t[n] = t[n] - e.attenuation * (n - e.delay < 0 ? 0 : r[n - e.delay]), r[n] = r[n] - e.attenuation * (n - e.delay < 0 ? 0 : t[n - e.delay]);
                        return {
                            left: t,
                            right: r
                        }
                    }, e
                }(),
                se = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).input = n.audioContext.createGain(), n.output = n.audioContext.createGain(), n.wire(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return this.input.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, t
                }(S),
                ce = function() {
                    function e(e) {
                        this.reverbPluginParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.reverbPluginParametersService.ensurePluginInstanceParameterKeyValues(t), r(new se(e, n.reverbPluginParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(e, n) {
                            t.setParameter(r), r.key, console.error("No available parameter with name: " + r.key), n()
                        }))
                    }, e
                }(),
                le = function() {};
            le.DELAY = "delay";
            var he = function(e) {
                function t() {
                    var r;
                    return (r = e.call(this) || this).parameters.push({
                        key: t.METHOD,
                        value: t.DEFAULT_METHOD
                    }), r.parameters.push({
                        key: t.DELAY_LEFT,
                        value: t.DEFAULT_DELAY_LEFT_VALUE
                    }), r.parameters.push({
                        key: t.DELAY_RIGHT,
                        value: t.DEFAULT_DELAY_RIGHT_VALUE
                    }), r
                }
                l(t, e);
                var r = t.prototype;
                return r.getPluginId = function() {
                    return "STEREO_WIDENING"
                }, r.getPresetDiscriminator = function() {
                    return null
                }, t
            }(E);
            he.METHOD = "method", he.DELAY_LEFT = "delayLeft", he.DELAY_RIGHT = "delayRight", he.DEFAULT_METHOD = le.DELAY, he.DEFAULT_DELAY_LEFT_VALUE = 0, he.DEFAULT_DELAY_RIGHT_VALUE = 0;
            var fe = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, r) || this).input = n.audioContext.createGain(), n.output = n.audioContext.createGain(), n.wire(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        return this.input.connect(this.output), new Promise((function(e, t) {
                            e()
                        }))
                    }, r.getInput = function() {
                        return this.input
                    }, r.getOutput = function() {
                        return this.output
                    }, r.connect = function(e, t, r) {
                        this.output.connect(e)
                    }, r.disconnect = function(e) {
                        this.output.disconnect(e)
                    }, r.processAudio = function(e) {
                        for (var t, r, n = e.inputBuffer, i = e.outputBuffer, a = n.getChannelData(0), o = n.getChannelData(1), u = i.getChannelData(0), s = i.getChannelData(1), c = 0; c < n.length; c++) t = .4 * (a[c] + o[c]), r = 1 * (a[c] - o[c]), u[c] = t + r, s[c] = t - r
                    }, r.applyDelayLeft = function() {
                        this.getParameterValue(he.METHOD) === le.DELAY && this.stereoWideningDelay.applyDelayLeft()
                    }, r.applyDelayRight = function() {
                        this.getParameterValue(he.METHOD) === le.DELAY && this.stereoWideningDelay.applyDelayRight()
                    }, t
                }(S),
                de = function() {
                    function e(e) {
                        this.stereoWideningPluginParametersService = e
                    }
                    var t = e.prototype;
                    return t.createAudioNode = function(e, t, r) {
                        var n = this;
                        return new Promise((function(r, i) {
                            t = n.stereoWideningPluginParametersService.ensurePluginInstanceParameterKeyValues(t), r(new fe(e, n.stereoWideningPluginParametersService.getParameterKeyValues(t)))
                        }))
                    }, t.setParameterValue = function(e, t, r, n) {
                        return new Promise((function(e, n) {
                            switch (t.setParameter(r), r.key) {
                                case he.DELAY_LEFT:
                                    t.applyDelayLeft(), e();
                                    break;
                                case he.DELAY_RIGHT:
                                    t.applyDelayRight(), e();
                                    break;
                                default:
                                    console.error("No available parameter with name: " + r.key), n()
                            }
                        }))
                    }, e
                }(),
                pe = function() {
                    function e() {
                        this.workerFunctionToUrlMap = new WeakMap, this.promiseToWorkerMap = new WeakMap
                    }
                    var t = e.prototype;
                    return t.run = function(e, t) {
                        var r = this.getOrCreateWorkerUrl(e);
                        return this.runUrl(r, t)
                    }, t.runUrl = function(e, t) {
                        var r = new Worker(e),
                            n = this.createPromiseForWorker(r, t),
                            i = this.createPromiseCleaner(n);
                        return this.promiseToWorkerMap.set(n, r), n.then(i).catch(i), n
                    }, t.terminate = function(e) {
                        return this.removePromise(e)
                    }, t.getWorker = function(e) {
                        return this.promiseToWorkerMap.get(e)
                    }, t.createPromiseForWorker = function(e, t) {
                        return new Promise((function(r, n) {
                            e.addEventListener("message", (function(e) {
                                return r(e.data)
                            })), e.addEventListener("error", n), e.postMessage(t)
                        }))
                    }, t.getOrCreateWorkerUrl = function(e) {
                        if (!this.workerFunctionToUrlMap.has(e)) {
                            var t = this.createWorkerUrl(e);
                            return this.workerFunctionToUrlMap.set(e, t), t
                        }
                        return this.workerFunctionToUrlMap.get(e)
                    }, t.createWorkerUrl = function(e) {
                        var t = e.toString(),
                            r = new Blob(["\n            self.addEventListener('message', function(e) {\n                postMessage((" + t + ")(e.data));\n            });\n        "], {
                                type: "text/javascript"
                            });
                        return URL.createObjectURL(r)
                    }, t.createPromiseCleaner = function(e) {
                        var t = this;
                        return function(r) {
                            return t.removePromise(e), r
                        }
                    }, t.removePromise = function(e) {
                        var t = this.promiseToWorkerMap.get(e);
                        return t && t.terminate(), this.promiseToWorkerMap.delete(e), e
                    }, e
                }(),
                me = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.getPluginId = function() {
                        return "CONVOLVER"
                    }, r.getPresetDiscriminator = function() {
                        return null
                    }, t
                }(E),
                ge = function() {};
            ge.NONE = "none", ge.SIMULATION = "simulation", ge.CONVOLUTION = "convolution";
            var _e = function(e) {
                function t() {
                    var r;
                    return (r = e.call(this) || this).parameters.push({
                        key: t.METHOD,
                        value: t.DEFAULT_METHOD
                    }), r
                }
                l(t, e);
                var r = t.prototype;
                return r.getPluginId = function() {
                    return "REVERB"
                }, r.getPresetDiscriminator = function() {
                    return null
                }, t
            }(E);
            _e.METHOD = "method", _e.DEFAULT_METHOD = ge.SIMULATION;
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var Ae = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this, t, []) || this).audioContext = t, n.pluginGraph = r, n.input = n.audioContext.createGain(), n.output = n.audioContext.createGain(), n
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.wire = function() {
                        if (this.disconnectAll(), this.isEnabled() && this.pluginGraph.hasNodes()) return this.pluginGraph.wire();
                        var e = this;
                        return new Promise((function(t) {
                            e.input.connect(e.output), t()
                        }))
                    }, r.getInput = function() {
                        var e, t;
                        return this.isEnabled() && this.pluginGraph.hasNodes() ? null === (e = this.pluginGraph.getFirstGraphNode()) || void 0 === e || null === (t = e.audioNode) || void 0 === t ? void 0 : t.getInput() : this.input
                    }, r.getOutput = function() {
                        var e, t;
                        return this.isEnabled() && this.pluginGraph.hasNodes() ? null === (e = this.pluginGraph.getLastGraphNode()) || void 0 === e || null === (t = e.audioNode) || void 0 === t ? void 0 : t.getOutput() : this.output
                    }, r.connect = function(e, t, r) {
                        var n = this.getOutput();
                        n && n.connect(e)
                    }, r.disconnect = function(e) {
                        var t = this.getOutput();
                        t && (e ? t.disconnect(e) : t.disconnect())
                    }, r.disconnectAll = function() {
                        this.input.disconnect(), this.output.disconnect()
                    }, t
                }(S),
                ve = function() {
                    function e(e) {
                        this.audioContext = e, this.nodes = []
                    }
                    var t = e.prototype;
                    return t.addNode = function(e) {
                        if (this.nodes.filter((function(t) {
                                return t.pluginInstance.order === e.pluginInstance.order
                            })).length) {
                            var t = "Order must be unique for the pluginGraphNodes. Problem with order: " + e.pluginInstance.order;
                            throw new Error(t)
                        }
                        this.nodes.push(e), this.sorted = this.nodes.map((function(e) {
                            return e.pluginInstance.order
                        })).sort(), this.calculateSortedAndEnabledOrder()
                    }, t.removeNode = function(e) {}, t.removeAllNodes = function() {
                        this.nodes = [], this.sorted = [], this.sortedAndEnabledOrder = []
                    }, t.hasNodes = function() {
                        return this.calculateSortedAndEnabledOrder(), this.sortedAndEnabledOrder.length > 0
                    }, t.wire = function() {
                        var e = this;
                        return new Promise((function(t) {
                            if (e.calculateSortedAndEnabledOrder(), e.disconnectAll(), 1 === e.sortedAndEnabledOrder.length);
                            else if (e.sortedAndEnabledOrder.length > 1)
                                for (var r = 1; r < e.sortedAndEnabledOrder.length; r++) {
                                    var n = e.getPluginGraphNodeWithOrder(e.sortedAndEnabledOrder[r - 1]),
                                        i = e.getPluginGraphNodeWithOrder(e.sortedAndEnabledOrder[r]);
                                    if (n && i && i.audioNode && i.audioNode.getInput()) {
                                        var a = i.audioNode.getInput();
                                        a && n.audioNode.connect(a)
                                    }
                                }
                            t()
                        }))
                    }, t.disconnectAll = function() {
                        for (var e = 0; e < this.nodes.length; e++) this.nodes[e].audioNode.disconnect()
                    }, t.calculateSortedAndEnabledOrder = function() {
                        this.sortedAndEnabledOrder = [], this.sorted = this.nodes.map((function(e) {
                            return e.pluginInstance.order
                        })).sort();
                        for (var e = 0; e < this.sorted.length; e++) {
                            var t = this.getPluginGraphNodeWithOrder(this.sorted[e]);
                            t && t.pluginInstance.enabled && this.sortedAndEnabledOrder.push(t.pluginInstance.order)
                        }
                    }, t.getPluginGraphNodeWithOrder = function(e) {
                        return this.nodes.find((function(t) {
                            return t.pluginInstance.order === e
                        }))
                    }, t.getFirstGraphNode = function() {
                        return this.hasNodes() ? this.getPluginGraphNodeWithOrder(this.sortedAndEnabledOrder[0]) : void 0
                    }, t.getLastGraphNode = function() {
                        return this.hasNodes() ? this.getPluginGraphNodeWithOrder(this.sortedAndEnabledOrder[this.sortedAndEnabledOrder.length - 1]) : void 0
                    }, t.setPluginGraphNodeParameter = function(e, t, r) {
                        var n = this;
                        return new Promise((function(i, a) {
                            var o = n.nodes.find((function(e) {
                                return e.pluginInstance.pluginId === t.pluginId && e.pluginInstance.instanceId === t.instanceId
                            }));
                            o ? o.pluginService.setParameterValue(e, o.audioNode, t.parameter, r).then((function(e) {
                                var r, n, a = null == o || null === (r = o.pluginInstance) || void 0 === r || null === (n = r.parameters) || void 0 === n ? void 0 : n.find((function(e) {
                                    return e.parameter.key === t.parameter.key
                                }));
                                if (a) {
                                    var u = {
                                        pluginId: a.pluginId,
                                        instanceId: a.instanceId,
                                        parameter: {
                                            key: a.parameter.key,
                                            value: t.parameter.value
                                        },
                                        debounceTime: a.debounceTime
                                    };
                                    o.pluginInstance = c({}, o.pluginInstance, {
                                        parameters: [].concat(o.pluginInstance.parameters.filter((function(e) {
                                            return e.parameter.key !== u.parameter.key
                                        })), [u])
                                    })
                                }
                                i(null == o ? void 0 : o.pluginInstance)
                            }), (function(e) {
                                a(e)
                            })) : a(new Error("No pluginGraphNode"))
                        }))
                    }, e
                }(),
                Ee = function() {
                    function e(e, t, r, n) {
                        this.audioContext = e, this.pluginInstanceFactoryService = t, this.audioInputNodeFactory = r, this.callbackOnFinish = n, this.useAnalyserNode = !0, this.isPaused = !1, this.selectedIndex = -1, this.mySpecialAudioInputNode = null, this.currentMediaContent = null, this.audioInputNodeArray = [], this.pluginGraph = new ve(e), this.pluginProcessorAudioNode = new Ae(e, this.pluginGraph), this.createAnalyserNode()
                    }
                    var t = e.prototype;
                    return t.appendInputMediaContent = function(e) {
                        try {
                            var t = this;
                            return Promise.resolve(function(e, t) {
                                try {
                                    var r = e()
                                } catch (n) {
                                    return t(n)
                                }
                                return r && r.then ? r.then(void 0, t) : r
                            }((function() {
                                return Promise.resolve(t.audioInputNodeFactory.createAudioNode(e, t.audioContext, t.audioInputNodeArray.length + 1)).then((function(e) {
                                    return t.audioInputNodeArray.push(e), Promise.resolve(t.wireForAudioInputNodeArray()).then((function() {
                                        return Promise.resolve(e)
                                    }))
                                }))
                            }), (function(e) {
                                return console.error(new Error(e)), Promise.reject(e)
                            })))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.pauseCurrentMediaContent = function(e) {
                        this.isPaused = !0, this.selectedIndex = e;
                        var t = this;
                        return new Promise((function(e, r) {
                            if (null != t.mySpecialAudioInputNode.htmlMediaElement) try {
                                t.mySpecialAudioInputNode.htmlMediaElement.pause(), e(t.mySpecialAudioInputNode)
                            } catch (n) {
                                console.error("self.mySpecialAudioInputNode.htmlMediaElement.pause(); FAILED!"), console.error(n), r(new Error("self.mySpecialAudioInputNode.htmlMediaElement.pause(); FAILED!"))
                            } else null != t.mySpecialAudioInputNode.audioBufferSourceNode ? (t.mySpecialAudioInputNode.getAudioNode().start(0), e(t.mySpecialAudioInputNode)) : null != t.mySpecialAudioInputNode.mediaStreamAudioSourceNode ? e(t.mySpecialAudioInputNode) : (console.error("BOTH htmlMediaElement AND audioNode are NULL"), r(new Error("BOTH htmlMediaElement AND audioNode are NULL")))
                        }))
                    }, t.playCurrentMediaContent = function(e) {
                        var t = this,
                            r = this;
                        return this.selectedIndex === e && !0 === this.isPaused ? new Promise((function(e, n) {
                            if (t.isPaused = !1, null != r.mySpecialAudioInputNode.htmlMediaElement) try {
                                r.mySpecialAudioInputNode.htmlMediaElement.play(), e(r.mySpecialAudioInputNode)
                            } catch (i) {
                                console.error("self.mySpecialAudioInputNode.htmlMediaElement.pause(); FAILED!"), console.error(i), n(new Error("self.mySpecialAudioInputNode.htmlMediaElement.pause(); FAILED!"))
                            }
                        })) : (this.isPaused = !1, this.selectedIndex = e, new Promise((function(e, t) {
                            r.resetMySpecialAudioInputNode(), r.audioInputNodeFactory.createAudioNode(r.currentMediaContent, r.audioContext, 0).then((function(n) {
                                r.mySpecialAudioInputNode = n, null != r.mySpecialAudioInputNode.htmlMediaElement && (r.mySpecialAudioInputNode.htmlMediaElement.onended = function(e) {
                                    r.callbackOnFinish && r.callbackOnFinish(e)
                                }), r.wire().then((function(n) {
                                    if (null != r.mySpecialAudioInputNode.htmlMediaElement) try {
                                        r.mySpecialAudioInputNode.htmlMediaElement.play(), e(r.mySpecialAudioInputNode)
                                    } catch (i) {
                                        console.error("self.mySpecialAudioInputNode.htmlMediaElement.play(); FAILED!"), console.error(i), t(new Error("self.mySpecialAudioInputNode.htmlMediaElement.play(); FAILED!"))
                                    } else null != r.mySpecialAudioInputNode.audioBufferSourceNode ? (r.mySpecialAudioInputNode.getAudioNode().start(0), e(r.mySpecialAudioInputNode)) : null != r.mySpecialAudioInputNode.mediaStreamAudioSourceNode ? e(r.mySpecialAudioInputNode) : (console.error("BOTH htmlMediaElement AND audioNode are NULL"), t(new Error("BOTH htmlMediaElement AND audioNode are NULL")))
                                }), (function(e) {
                                    console.error(e), t(new Error(e))
                                }))
                            }), (function(e) {
                                console.error(e), t(new Error(e))
                            }))
                        })))
                    }, t.resetMySpecialAudioInputNode = function() {
                        null != this.mySpecialAudioInputNode && (this.mySpecialAudioInputNode.disconnectAudioBufferSourceNode(), this.mySpecialAudioInputNode.disconnectMediaElementAudioSourceNode(), this.mySpecialAudioInputNode.disconnectMediaStreamSourceNode(), this.mySpecialAudioInputNode = null)
                    }, t.disconnectMySpecialAudioInputNode = function() {
                        this.mySpecialAudioInputNode && this.mySpecialAudioInputNode.getAudioNode() && this.mySpecialAudioInputNode.getAudioNode().disconnect()
                    }, t.wire = function() {
                        if (null === this.mySpecialAudioInputNode) return this.wireForAudioInputNodeArray();
                        var e = this;
                        return new Promise((function(t, r) {
                            return null === e.mySpecialAudioInputNode ? (console.warn("self.mySpecialAudioInputNode === null"), void t()) : null === e.mySpecialAudioInputNode.getAudioNode() && null === e.mySpecialAudioInputNode.htmlMediaElement ? (console.warn("self.mySpecialAudioInputNode.getAudioNode() === null && self.mySpecialAudioInputNode.htmlMediaElement === null"), void t()) : (e.disconnectAll(), void e.pluginProcessorAudioNode.wire().then((function(r) {
                                e.mySpecialAudioInputNode.getAudioNode().connect(e.pluginProcessorAudioNode.getInput()), e.pluginProcessorAudioNode.getOutput().connect(e.audioContext.destination), e.useAnalyserNode && e.pluginProcessorAudioNode.getOutput().connect(e.analyserNode), t()
                            }), (function(e) {
                                console.error("pluginProcessorAudioNode.wire() failed! Reason:"), console.error(e)
                            })))
                        }))
                    }, t.wireForAudioInputNodeArray = function() {
                        try {
                            var e = this;
                            return e.disconnectAll(), Promise.resolve(e.pluginProcessorAudioNode.wire()).then((function() {
                                e.audioInputNodeArray.forEach((function(t) {
                                    t && t.getAudioNode().connect(e.pluginProcessorAudioNode.getInput())
                                })), e.pluginProcessorAudioNode.getOutput().connect(e.audioContext.destination), e.useAnalyserNode && e.pluginProcessorAudioNode.getOutput().connect(e.analyserNode), Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.disconnectAll = function() {
                        this.pluginProcessorAudioNode.getOutput().disconnect(), this.disconnectMySpecialAudioInputNode(), this.audioInputNodeArray.forEach((function(e) {
                            e && e.getAudioNode().disconnect()
                        }))
                    }, t.createAnalyserNode = function() {
                        this.useAnalyserNode && (this.analyserNode = this.audioContext.createAnalyser(), this.analyserNode.fftSize = e.ANALYZER_FFT_SIZE, this.analyserData = {
                            bufferSize: this.analyserNode.frequencyBinCount,
                            frequencyData: new Uint8Array(this.analyserNode.frequencyBinCount),
                            timeData: new Uint8Array(this.analyserNode.frequencyBinCount)
                        })
                    }, t.getAnalyserData = function() {
                        return this.useAnalyserNode ? (this.analyserNode.getByteFrequencyData(this.analyserData.frequencyData), this.analyserNode.getByteTimeDomainData(this.analyserData.timeData), this.analyserData.frequencyBinCount = this.analyserNode.frequencyBinCount, this.analyserData) : void 0
                    }, t.removeAllPluginInstances = function() {
                        var e = this;
                        return new Promise((function(t) {
                            e.pluginGraph.removeAllNodes(), t()
                        }))
                    }, t.addNewPluginInstanceInGraph = function(e, t, r) {
                        var n = this;
                        return new Promise((function(i, a) {
                            -1 === t.order && (t.order = n.calculateNewPluginInstanceOrder()), n.pluginInstanceFactoryService.createPluginGraphNode(e, t, r).then((function(e) {
                                n.pluginGraph.addNode(e), n.wire(), i(t)
                            }), (function(e) {
                                console.error("BasePlayer - addNewPluginInstanceInGraph - Could not add pluginInstance in PluginGraphNodes:", t), a(e)
                            }))
                        }))
                    }, t.removePluginInstanceFromGraph = function(e) {
                        var t = this;
                        return new Promise((function(e, r) {
                            t.pluginGraph.removeNode(null), t.wire(), e()
                        }))
                    }, t.removeAllPluginInstancesFromGraph = function() {
                        var e = this;
                        return new Promise((function(t) {
                            e.pluginGraph.removeAllNodes(), e.wire(), t()
                        }))
                    }, t.setPluginInstanceParameterKeyValue = function(e, t, r) {
                        return "enabled" === t.parameter.key ? !0 === t.parameter.value ? this.enablePluginInstance(t.instanceId) : this.disablePluginInstance(t.instanceId) : this.pluginGraph.setPluginGraphNodeParameter(e, t, r)
                    }, t.getAllPluginInstances = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            t(e.pluginGraph.nodes.map((function(e) {
                                return e.pluginInstance
                            })))
                        }))
                    }, t.setProcessingOn = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            e.pluginProcessorAudioNode.enable(), e.wire(), t()
                        }))
                    }, t.setProcessingOff = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            e.pluginProcessorAudioNode.disable(), e.wire(), t()
                        }))
                    }, t.queryProcessingState = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            t(e.pluginProcessorAudioNode.isEnabled())
                        }))
                    }, t.setListeningThroughSpeakers = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            var n = e.getSpeakersPluginGraphNode();
                            n ? (n.pluginInstance.enabled = !0, n.audioNode.enable()) : console.error("Cannot get speakersNode");
                            var i = e.getHeadphonesPluginGraphNode();
                            i ? (i.pluginInstance.enabled = !1, i.audioNode.disable()) : console.error("Cannot get headphonesNode"), e.wire(), t()
                        }))
                    }, t.setListeningThroughHeadphones = function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            var n = e.getSpeakersPluginGraphNode();
                            n ? (n.pluginInstance.enabled = !1, n.audioNode.disable()) : console.error("Cannot get speakersNode");
                            var i = e.getHeadphonesPluginGraphNode();
                            i ? (i.pluginInstance.enabled = !0, i.audioNode.enable()) : console.error("Cannot get headphonesNode"), e.wire(), t()
                        }))
                    }, t.queryListeningDevice = function() {
                        var e = this.getHeadphonesPluginGraphNode();
                        return e && e.pluginInstance.enabled ? new Promise((function(e, t) {
                            e("HEADPHONES")
                        })) : new Promise((function(e, t) {
                            e("SPEAKERS")
                        }))
                    }, t.calculateNewPluginInstanceOrder = function() {
                        var e = 1;
                        return this.pluginGraph.nodes.length > 0 && (e = this.pluginGraph.nodes.map((function(e) {
                            return e.pluginInstance.order
                        })).reduce((function(e, t) {
                            return Math.max(e, t)
                        })), e += 1), e
                    }, t.enablePluginInstance = function(e) {
                        var t = this;
                        return new Promise((function(r, n) {
                            var i = t.pluginGraph.nodes.find((function(t) {
                                return t.pluginInstance.instanceId === e
                            }));
                            i ? (i.pluginInstance = c({}, i.pluginInstance, {
                                enabled: !0
                            }), i.audioNode.enable(), t.wire(), r(i.pluginInstance)) : n(new Error("No plugin instance found with id: " + e))
                        }))
                    }, t.disablePluginInstance = function(e) {
                        var t = this;
                        return new Promise((function(r, n) {
                            var i = t.pluginGraph.nodes.find((function(t) {
                                return t.pluginInstance.instanceId === e
                            }));
                            i ? (i.pluginInstance = c({}, i.pluginInstance, {
                                enabled: !1
                            }), i.audioNode.disable(), t.wire(), r(i.pluginInstance)) : n(new Error("No plugin instance found with id: " + e))
                        }))
                    }, t.getSpeakersPluginGraphNode = function() {
                        return this.pluginGraph.nodes.find((function(e) {
                            return "ARCC" === e.pluginInstance.pluginId
                        }))
                    }, t.getHeadphonesPluginGraphNode = function() {
                        return this.pluginGraph.nodes.find((function(e) {
                            return "AREI" === e.pluginInstance.pluginId
                        }))
                    }, e
                }();
            Ee.ANALYZER_FFT_SIZE = 2048;
            var Pe = function(e) {
                    function t(t, r, n, i) {
                        var a;
                        return (a = e.call(this, t, r, n, i) || this).audioContext = t, a.pluginInstanceFactoryService = r, a.audioInputNodeFactory = n, a.callbackOnFinish = i, a
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.play = function(e, t) {
                        return this.currentMediaContent = e, this.playCurrentMediaContent(t)
                    }, r.pause = function(e) {
                        return this.pauseCurrentMediaContent(e)
                    }, t
                }(Ee),
                Se = function() {
                    function e(e, t) {
                        this.mediaPlayerArray = {}, this.pluginInstanceFactoryService = e, this.audioInputNodeFactory = t
                    }
                    var t = e.prototype;
                    return t.createPluginInstance = function(e, t, r, n) {
                        return this.addNewPluginInstanceInGraph(e, t, r, n)
                    }, t.removePluginInstance = function(e, t) {
                        return new Promise((function(e, t) {
                            e()
                        }))
                    }, t.removeAllPluginInstances = function(e) {
                        return this.getMediaPlayer(e).removeAllPluginInstances()
                    }, t.play = function(e, t, r) {
                        return this.getMediaPlayer(e).play(t, r)
                    }, t.pause = function(e, t) {
                        return this.getMediaPlayer(e).pause(t)
                    }, t.appendInputMediaContent = function(e, t) {
                        try {
                            return Promise.resolve(this.getMediaPlayer(e).appendInputMediaContent(t))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.createMediaPlayer = function(e, t, r) {
                        if (!this.mediaPlayerArray[e]) {
                            var n = new Pe(t, this.pluginInstanceFactoryService, this.audioInputNodeFactory, r);
                            this.mediaPlayerArray[e] = n
                        }
                        return this.mediaPlayerArray[e]
                    }, t.getMediaPlayer = function(e) {
                        if (this.mediaPlayerArray[e]) return this.mediaPlayerArray[e];
                        throw console.error("No player found for id=" + e), new Error("No player found for id=" + e)
                    }, t.getAnalyserData = function(e, t) {
                        var r = this.getMediaPlayer(t);
                        return r ? Promise.resolve(r.getAnalyserData()) : Promise.reject(new Error("mediaPlayer does not exist for id=" + t))
                    }, t.addNewPluginInstanceInGraph = function(e, t, r, n) {
                        return this.getMediaPlayer(e).addNewPluginInstanceInGraph(t, r, n)
                    }, t.setPluginInstanceParameterKeyValue = function(e, t, r, n) {
                        return this.getMediaPlayer(e).setPluginInstanceParameterKeyValue(t, r, n)
                    }, t.getAllPluginInstances = function(e) {
                        return this.getMediaPlayer(e).getAllPluginInstances()
                    }, t.getSampleRate = function(e) {
                        return new Promise((function(t, r) {
                            t(e.sampleRate)
                        }))
                    }, t.setProcessingOn = function(e) {
                        return this.getMediaPlayer(e).setProcessingOn()
                    }, t.setProcessingOff = function(e) {
                        return this.getMediaPlayer(e).setProcessingOff()
                    }, t.queryProcessingState = function(e) {
                        return this.getMediaPlayer(e).queryProcessingState()
                    }, t.setListeningThroughSpeakers = function(e) {
                        return this.getMediaPlayer(e).setListeningThroughSpeakers()
                    }, t.setListeningThroughHeadphones = function(e) {
                        return this.getMediaPlayer(e).setListeningThroughHeadphones()
                    }, t.queryListeningDevice = function(e) {
                        return this.getMediaPlayer(e).queryListeningDevice()
                    }, t.enablePluginInstance = function(e, t) {
                        return this.getMediaPlayer(e).enablePluginInstance(t)
                    }, t.disablePluginInstance = function(e, t) {
                        return this.getMediaPlayer(e).disablePluginInstance(t)
                    }, e
                }(),
                Ie = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, t, r, n) || this).audioContext = t, i.pluginInstanceFactoryService = r, i.audioInputNodeFactory = n, i
                    }
                    return l(t, e), t.prototype.play = function(e, t) {
                        return this.currentMediaContent = e, this.playCurrentMediaContent(t)
                    }, t
                }(Ee),
                Ne = function() {
                    function e(e, t) {
                        this.streamPlayerArray = {}, this.pluginInstanceFactoryService = e, this.audioInputNodeFactory = t
                    }
                    var t = e.prototype;
                    return t.createPluginInstance = function(e, t, r, n) {
                        return this.addNewPluginInstanceInGraph(e, t, r, n)
                    }, t.removePluginInstance = function(e, t) {
                        return this.removePluginInstanceFromGraph(e, t)
                    }, t.removeAllPluginInstances = function(e) {
                        return this.getStreamPlayer(e).removeAllPluginInstances()
                    }, t.createStreamPlayer = function(e, t, r) {
                        if (!this.streamPlayerArray[e]) {
                            var n = new Ie(t, this.pluginInstanceFactoryService, this.audioInputNodeFactory);
                            r && n.play(r, 1), this.streamPlayerArray[e] = n
                        }
                    }, t.getStreamPlayer = function(e) {
                        return this.streamPlayerArray[e] ? this.streamPlayerArray[e] : void 0
                    }, t.getAnalyserData = function(e, t) {
                        var r = this;
                        return new Promise((function(e, n) {
                            var i = r.getStreamPlayer(t);
                            e(i ? i.getAnalyserData() : {})
                        }))
                    }, t.addNewPluginInstanceInGraph = function(e, t, r, n) {
                        return this.getStreamPlayer(e).addNewPluginInstanceInGraph(t, r, n)
                    }, t.removePluginInstanceFromGraph = function(e, t) {
                        return this.getStreamPlayer(e).removePluginInstanceFromGraph(t)
                    }, t.removeAllPluginInstancesFromGraph = function(e) {
                        return this.getStreamPlayer(e).removeAllPluginInstances()
                    }, t.setPluginInstanceParameterKeyValue = function(e, t, r, n) {
                        return this.getStreamPlayer(e).setPluginInstanceParameterKeyValue(t, r, n)
                    }, t.getAllPluginInstances = function(e) {
                        return this.getStreamPlayer(e).getAllPluginInstances()
                    }, t.getSampleRate = function(e) {
                        return new Promise((function(t, r) {
                            t(e.sampleRate)
                        }))
                    }, t.setProcessingOn = function(e) {
                        return this.getStreamPlayer(e).setProcessingOn()
                    }, t.setProcessingOff = function(e) {
                        return this.getStreamPlayer(e).setProcessingOff()
                    }, t.queryProcessingState = function(e) {
                        return this.getStreamPlayer(e).queryProcessingState()
                    }, t.setListeningThroughSpeakers = function(e) {
                        return this.getStreamPlayer(e).setListeningThroughSpeakers()
                    }, t.setListeningThroughHeadphones = function(e) {
                        return this.getStreamPlayer(e).setListeningThroughHeadphones()
                    }, t.queryListeningDevice = function(e) {
                        return this.getStreamPlayer(e).queryListeningDevice()
                    }, t.enablePluginInstance = function(e, t) {
                        return this.getStreamPlayer(e).enablePluginInstance(t)
                    }, t.disablePluginInstance = function(e, t) {
                        return this.getStreamPlayer(e).disablePluginInstance(t)
                    }, e
                }(),
                ye = function() {
                    function e(e, t, r, n, i, a, o, u, s, c) {
                        this.arccPluginParametersService = e, this.areiPluginParametersService = t, this.capturePluginParametersService = r, this.dynamicsCompressorPluginParametersService = n, this.eqBiquadPluginParametersService = i, this.pluginGainParametersService = a, this.pluginRaceParametersService = o, this.convolverPluginParametersService = u, this.reverbPluginParametersService = s, this.stereoWideningPluginParametersService = c, this.initializeInternalOrderValues()
                    }
                    var t = e.prototype;
                    return t.initializeInternalOrderValues = function() {
                        if ("undefined" != typeof window) {
                            var t = localStorage.getItem("activePreset"),
                                r = null;
                            if (t && (r = JSON.parse(t)).pluginInstances)
                                for (var n = r.pluginInstances, i = 0; i < n.length; i++) {
                                    var a = n[i];
                                    a.order >= 2e3 && a.order < 3e3 && a.order >= e.coreOrder && (e.coreOrder = a.order)
                                }
                        }
                    }, t.resetOrder = function() {
                        e.preOrder = 1e3, e.coreOrder = 2e3, e.postOrder = 3e3
                    }, t.createPluginInstance = function(e) {
                        return this.createPluginInstanceDirectly(e)
                    }, t.createPluginInstanceDirectly = function(e) {
                        var t = this.getInstanceId(e),
                            r = [],
                            n = [],
                            i = "";
                        switch (e.pluginId) {
                            case "ARCC":
                                r = this.arccPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.arccPluginParametersService.getPresets(), i = this.arccPluginParametersService.getPresetDiscriminator();
                                break;
                            case "AREI":
                                r = this.areiPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.areiPluginParametersService.getPresets(), i = this.areiPluginParametersService.getPresetDiscriminator();
                                break;
                            case "CAPTURE":
                                r = this.capturePluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.capturePluginParametersService.getPresets(), i = this.capturePluginParametersService.getPresetDiscriminator();
                                break;
                            case "DYNAMICS_COMPRESSOR":
                                r = this.dynamicsCompressorPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.dynamicsCompressorPluginParametersService.getPresets(), i = this.dynamicsCompressorPluginParametersService.getPresetDiscriminator();
                                break;
                            case "EQ_BIQUAD":
                                r = this.eqBiquadPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.eqBiquadPluginParametersService.getPresets(), i = this.eqBiquadPluginParametersService.getPresetDiscriminator();
                                break;
                            case "SIMPLE_GAIN":
                                r = this.pluginGainParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.pluginGainParametersService.getPresets(), i = this.pluginGainParametersService.getPresetDiscriminator();
                                break;
                            case "RACE_TWO_CHANNELS":
                                r = this.pluginRaceParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.pluginRaceParametersService.getPresets(), i = this.pluginRaceParametersService.getPresetDiscriminator();
                                break;
                            case "CONVOLVER":
                                r = this.convolverPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.convolverPluginParametersService.getPresets(), i = this.convolverPluginParametersService.getPresetDiscriminator();
                                break;
                            case "REVERB":
                                r = this.reverbPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.reverbPluginParametersService.getPresets(), i = this.reverbPluginParametersService.getPresetDiscriminator();
                                break;
                            case "STEREO_WIDENING":
                                r = this.stereoWideningPluginParametersService.getPluginInstanceParameterKeyValues(e.pluginId, t), n = this.stereoWideningPluginParametersService.getPresets(), i = this.stereoWideningPluginParametersService.getPresetDiscriminator();
                                break;
                            default:
                                console.error("No creator defined for: " + e.pluginId)
                        }
                        return {
                            pluginId: e.pluginId,
                            instanceId: t,
                            order: this.getNextOrder(e),
                            name: e.name,
                            enabled: this.getEnabled(e),
                            description: e.description,
                            color: e.color,
                            icon: e.icon,
                            parameters: r,
                            presets: n,
                            presetDiscriminator: i
                        }
                    }, t.getNextOrder = function(t) {
                        return t.stage ? "pre" === t.stage ? (e.preOrder = e.preOrder + 1, e.preOrder) : "post" === t.stage ? (e.postOrder = e.postOrder + 1, e.postOrder) : (e.coreOrder = e.coreOrder + 1, e.coreOrder) : (e.coreOrder = e.coreOrder + 1, e.coreOrder)
                    }, t.getEnabled = function(e) {
                        return void 0 === e.enabled || null === e.enabled || e.enabled
                    }, t.getInstanceId = function(e) {
                        return e.instanceId ? e.instanceId : this.getRandomInstanceId()
                    }, t.getRandomInstanceId = function() {
                        return Math.random().toString(36).substring(7)
                    }, e
                }();
            ye.preOrder = 1e3, ye.coreOrder = 2e3, ye.postOrder = 3e3;
            var Te = function() {};
            Te.CAPTURE_STREAM = "captureStream", Te.GET_ANALYZER_DATA = "getAnalyzerData", Te.START_VISUALIZER = "startVisualizer", Te.CREATE_PLUGIN_INSTANCE = "createPluginInstance", Te.REMOVE_PLUGIN_INSTANCE = "removePluginInstance", Te.REMOVE_ALL_PLUGIN_INSTANCES = "removeAllPluginInstances", Te.SET_PLUGIN_INSTANCE_PARAMETER_VALUE = "setPluginInstanceParameterKeyValue", Te.GET_ALL_PLUGIN_INSTANCES = "getAllPluginInstances", Te.PROCESSING_ON = "processingOn", Te.PROCESSING_OFF = "processingOff", Te.QUERY_PROCESSING_STATE = "queryProcessingState", Te.LISTENING_THROUGH_SPEAKERS = "listeningThroughSpeakers", Te.LISTENING_THROUGH_HEADPHONES = "listeningThroughHeadphones", Te.QUERY_LISTENING_DEVICE = "queryListeningDevice", Te.GET_SAMPLE_RATE = "getSampleRate", Te.ENABLE_PLUGIN_INSTANCE = "enablePluginInstance", Te.DISABLE_PLUGIN_INSTANCE = "disablePluginInstance", Te.SET_IS_CONTINUE_AS_GUEST = "setIsContinueAsGuest", Te.QUERY_IS_CONTINUE_AS_GUEST = "queryIsContinueAsGuest", Te.QUERY_IS_CONTINUE_AS_GUEST_EXPIRED = "queryIsContinueAsGuestExpired", Te.QUERY_SETTINGS = "querySettings", Te.NOTIFY_GUEST_SESSION_EXPIRED = "notifyGuestSessionExpired", Te.NOTIFY_NO_AUDIOVISUAL_CONTENT_FOUND = "notifyNoAudioVisualContentFound";
            var Re, Fe = function() {
                    function e(e) {
                        this.browser = e
                    }
                    var t = e.prototype;
                    return t.createPluginInstance = function(e, t, r, n) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.CREATE_PLUGIN_INSTANCE,
                                payload: r,
                                tabId: e,
                                browser: null
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (i) {
                            return Promise.reject(i)
                        }
                    }, t.removePluginInstance = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.REMOVE_PLUGIN_INSTANCE,
                                payload: t,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.removeAllPluginInstances = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.REMOVE_ALL_PLUGIN_INSTANCES,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setPluginInstanceParameterKeyValue = function(e, t, r) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.SET_PLUGIN_INSTANCE_PARAMETER_VALUE,
                                payload: r,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }, t.getAllPluginInstances = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.GET_ALL_PLUGIN_INSTANCES,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setProcessingOn = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.PROCESSING_ON,
                                tabId: e
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setProcessingOff = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.PROCESSING_OFF,
                                tabId: e
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.queryProcessingState = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.QUERY_PROCESSING_STATE,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setListeningThroughSpeakers = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.LISTENING_THROUGH_SPEAKERS,
                                tabId: e
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setListeningThroughHeadphones = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.LISTENING_THROUGH_HEADPHONES,
                                tabId: e
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.queryListeningDevice = function(e) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.QUERY_LISTENING_DEVICE,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.enablePluginInstance = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.ENABLE_PLUGIN_INSTANCE,
                                payload: t,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.disablePluginInstance = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.DISABLE_PLUGIN_INSTANCE,
                                payload: t,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.getAnalyserData = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.runtime.sendMessage({
                                action: Te.GET_ANALYZER_DATA,
                                payload: t,
                                tabId: e
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, e
                }(),
                Le = function() {
                    function e() {}
                    return e.prototype.getValue = function(e, t) {
                        var r, n;
                        return e ? null == e || null === (r = e.parameters) || void 0 === r || null === (n = r.find((function(e) {
                            return e.parameter.key === t
                        }))) || void 0 === n ? void 0 : n.parameter.value : null
                    }, e
                }(),
                Ce = function() {
                    function e() {
                        this.htmlMediaElement = null, this.mediaElementAudioSourceNode = null, this.audioBuffer = null, this.audioBufferSourceNode = null, this.mediaStream = null, this.mediaStreamAudioSourceNode = null, this.videoPlaceholder = null
                    }
                    var t = e.prototype;
                    return t.setAudioBuffer = function(e, t) {
                        this.audioBuffer = e, this.createAudioBufferSourceNode(t)
                    }, t.createAudioBufferSourceNode = function(e) {
                        this.audioBufferSourceNode = e.createBufferSource(), this.audioBufferSourceNode.buffer = this.audioBuffer, this.audioBufferSourceNode.onended = function(e) {}
                    }, t.getAudioNode = function() {
                        return null != this.htmlMediaElement && null != this.mediaElementAudioSourceNode ? this.mediaElementAudioSourceNode : null != this.audioBuffer && null != this.audioBufferSourceNode ? this.audioBufferSourceNode : null != this.mediaStream && null != this.mediaStreamAudioSourceNode ? this.mediaStreamAudioSourceNode : (console.error("SEVERE: Cannot getAudioNode - Both mediaElementAudioSourceNode and audioBufferSourceNode are null"), alert("SEVERE: Cannot getAudioNode - Both mediaElementAudioSourceNode and audioBufferSourceNode are null"), null)
                    }, t.getDuration = function() {
                        return null != this.htmlMediaElement ? this.htmlMediaElement.duration : null != this.audioBuffer ? this.audioBuffer.duration : -1
                    }, t.disconnectMediaElementAudioSourceNode = function() {
                        null != this.mediaElementAudioSourceNode && (this.mediaElementAudioSourceNode.disconnect(0), this.mediaElementAudioSourceNode = null), null != this.htmlMediaElement && (this.htmlMediaElement.pause(), this.htmlMediaElement = null)
                    }, t.disconnectAudioBufferSourceNode = function() {
                        null != this.audioBufferSourceNode && (this.audioBufferSourceNode.disconnect(0), this.audioBufferSourceNode = null)
                    }, t.disconnectMediaStreamSourceNode = function() {
                        null != this.mediaStream && (this.mediaStream.getAudioTracks()[0].stop(), this.mediaStream = null), null != this.mediaStreamAudioSourceNode && (this.mediaStreamAudioSourceNode.disconnect(0), this.mediaStreamAudioSourceNode = null)
                    }, e
                }(),
                De = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.readFileAsArrayBuffer = function(e) {
                        var t = new FileReader;
                        return new Promise((function(r, n) {
                            t.onload = function() {
                                r(t.result)
                            }, t.onerror = function() {
                                n()
                            };
                            try {
                                t.readAsArrayBuffer(e)
                            } catch (i) {
                                console.error(i), n(i)
                            }
                        }))
                    }, t.createAudioStream = function(e, t) {
                        var r = new Ce;
                        r.htmlMediaElement = new Audio, r.htmlMediaElement.setAttribute("eq-attached", "true"), r.htmlMediaElement.setAttribute("aria3d-attached", "true"), r.htmlMediaElement.crossOrigin = "anonymous", r.htmlMediaElement.src = e, r.htmlMediaElement.autoplay = !1, r.htmlMediaElement.controls = !0, r.htmlMediaElement.loop = !1;
                        try {
                            r.htmlMediaElement.load()
                        } catch (n) {
                            console.error("mySpecialAudioInputNode.htmlMediaElement.load(); FAILED!"), console.error(n)
                        }
                        return new Promise((function(e, i) {
                            r.htmlMediaElement.addEventListener("error", (function(e) {
                                console.error(e), i()
                            })), r.htmlMediaElement.addEventListener("canplay", (function() {
                                if (null === r.mediaElementAudioSourceNode) try {
                                    r.mediaElementAudioSourceNode = t.createMediaElementSource(r.htmlMediaElement)
                                } catch (n) {
                                    console.error(n), i(new Error(n))
                                }
                                e(r)
                            }))
                        }))
                    }, t.createVideoStream = function(e, t, r) {
                        var n = new Ce;
                        for (n.videoPlaceholder = document.getElementById("videoPlaceholder-" + r); n.videoPlaceholder.firstChild;) n.videoPlaceholder.removeChild(n.videoPlaceholder.firstChild);
                        n.htmlMediaElement = document.createElement("video"), n.htmlMediaElement.setAttribute("eq-attached", "true"), n.htmlMediaElement.setAttribute("aria3d-attached", "true"), n.videoPlaceholder.appendChild(n.htmlMediaElement), n.htmlMediaElement.crossOrigin = "anonymous", n.htmlMediaElement.src = e, n.htmlMediaElement.autoplay = !1, n.htmlMediaElement.controls = !1, n.htmlMediaElement.loop = !1;
                        var i = n.htmlMediaElement;
                        return i.width = n.videoPlaceholder.clientWidth, i.height = n.videoPlaceholder.clientHeight, n.htmlMediaElement.load(), new Promise((function(e, r) {
                            n.htmlMediaElement.addEventListener("canplay", (function() {
                                if (null === n.mediaElementAudioSourceNode) try {
                                    n.mediaElementAudioSourceNode = t.createMediaElementSource(n.htmlMediaElement)
                                } catch (i) {
                                    console.error(i), r(new Error(i))
                                }
                                e(n)
                            }))
                        }))
                    }, e
                }(),
                be = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.createNode = function(e, t, r) {
                        return r ? this.createAudioStream(URL.createObjectURL(e.getSource()), t) : this.createAudioLocalFileWithFileApi(e.getSource(), t)
                    }, r.createAudioLocalFileWithFileApi = function(e, t) {
                        var r = this,
                            n = new Ce;
                        return new Promise((function(i, a) {
                            r.readFileAsArrayBuffer(e).then((function(e) {
                                t.decodeAudioData(e, (function(e) {
                                    n.setAudioBuffer(e, t), i(n)
                                }), (function() {
                                    console.error("Cannot decodeAudioData"), a()
                                }))
                            }), (function(e) {
                                a(e)
                            }))
                        }))
                    }, t
                }(De),
                we = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.createNode = function(e, t, r) {
                        return r ? this.createAudioStream(e.getSource(), t) : this.createAudioRemoteFileWithAjax(e.getSource(), t)
                    }, r.createAudioRemoteFileWithAjax = function(e, t) {
                        var r = new Ce;
                        return new Promise((function(n, i) {
                            var a = new XMLHttpRequest;
                            a.open("GET", e, !0), a.responseType = "arraybuffer", a.onload = function() {
                                200 === a.status ? t.decodeAudioData(a.response, (function(e) {
                                    r.setAudioBuffer(e, t), n(r)
                                }), (function() {
                                    console.error("Cannot audioContext.decodeAudioData"), i()
                                })) : (console.error("Request failed.  Returned status of " + a.status), i())
                            }, a.send()
                        }))
                    }, t
                }(De),
                Oe = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t) {
                        return this.createAudioStream(e.getSource(), t)
                    }, t
                }(De),
                Ue = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t, r) {
                        return this.createVideoStream(e.getSource(), t, r)
                    }, t
                }(De),
                Ge = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t, r, n) {
                        return this.createVideoStream(URL.createObjectURL(e.getSource()), t, r)
                    }, t
                }(De),
                Me = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t, r, n) {
                        return this.createVideoStream(e.getSource(), t, r)
                    }, t
                }(De),
                Be = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t) {
                        var r = new Ce;
                        return r.htmlMediaElement = e.getSource(), new Promise((function(e, n) {
                            if (null === r.mediaElementAudioSourceNode) try {
                                r.mediaElementAudioSourceNode = t.createMediaElementSource(r.htmlMediaElement)
                            } catch (i) {
                                console.error(i), n(new Error(i))
                            }
                            e(r)
                        }))
                    }, t
                }(De),
                ke = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t, r) {
                        var n = new Ce;
                        return n.htmlMediaElement = e.getSource(), new Promise((function(e, r) {
                            if (null === n.mediaElementAudioSourceNode) try {
                                n.mediaElementAudioSourceNode = t.createMediaElementSource(n.htmlMediaElement)
                            } catch (i) {
                                console.error(i), r(new Error(i))
                            }
                            e(n)
                        }))
                    }, t
                }(De),
                Ve = function(e) {
                    function t() {
                        return e.call(this) || this
                    }
                    return l(t, e), t.prototype.createNode = function(e, t) {
                        var r = new Ce;
                        return r.mediaStream = e.getSource(), new Promise((function(e, n) {
                            if (null === r.mediaStreamAudioSourceNode) try {
                                r.mediaStreamAudioSourceNode = t.createMediaStreamSource(r.mediaStream)
                            } catch (i) {
                                console.error(i), n(i)
                            }
                            e(r)
                        }))
                    }, t
                }(De),
                xe = function() {
                    function e() {
                        this.inputAudioLocalFile = new be, this.inputAudioRemoteFile = new we, this.inputAudioStream = new Oe, this.inputAudioDom = new Be, this.inputVideoLocalFile = new Ge, this.inputVideoRemoteFile = new Me, this.inputVideoStream = new Ue, this.inputVideoDom = new ke, this.inputMediaStream = new Ve, this.setMediaElementSourceSupported(!0)
                    }
                    var t = e.prototype;
                    return t.setMediaElementSourceSupported = function(e) {
                        this.mediaElementSourceSupported = e, this.setUseStream(e)
                    }, t.setUseStream = function(e) {
                        this.useStreamForLocal = e, this.useStreamForRemote = e
                    }, t.createAudioNode = function(e, t, r) {
                        return e.isAudioLocalFile() ? this.inputAudioLocalFile.createNode(e, t, this.useStreamForLocal) : e.isAudioRemoteFile() ? this.inputAudioRemoteFile.createNode(e, t, this.useStreamForRemote) : e.isAudioStream() ? this.inputAudioStream.createNode(e, t) : e.isAudioDom() ? this.inputAudioDom.createNode(e, t) : e.isVideoLocalFile() ? this.inputVideoLocalFile.createNode(e, t, r, this.useStreamForLocal) : e.isVideoRemoteFile() ? this.inputVideoRemoteFile.createNode(e, t, r, this.useStreamForRemote) : e.isVideoStream() ? this.inputVideoStream.createNode(e, t, r) : e.isVideoDom() ? this.inputVideoDom.createNode(e, t, r) : e.isMediaStream() ? this.inputMediaStream.createNode(e, t) : new Promise((function(e, t) {
                            console.error("Unknown content type!"), alert("Unknown content type!"), t(new Error("Unknown content type!"))
                        }))
                    }, e
                }(),
                He = function() {
                    function e(e) {
                        this.browser = e
                    }
                    var t = e.prototype;
                    return t.createPluginInstance = function(e, t, r, n) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.CREATE_PLUGIN_INSTANCE,
                                payload: r,
                                browser: null
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (i) {
                            return Promise.reject(i)
                        }
                    }, t.removePluginInstance = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.REMOVE_PLUGIN_INSTANCE,
                                payload: t
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.removeAllPluginInstances = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.REMOVE_ALL_PLUGIN_INSTANCES
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setPluginInstanceParameterKeyValue = function(e, t, r) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.SET_PLUGIN_INSTANCE_PARAMETER_VALUE,
                                payload: r
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }, t.getAllPluginInstances = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.GET_ALL_PLUGIN_INSTANCES,
                                tabId: e,
                                tabUrl: void 0
                            })).then((function(e) {
                                return new Promise((function(t, r) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setProcessingOn = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.PROCESSING_ON
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setProcessingOff = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.PROCESSING_OFF
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.queryProcessingState = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.QUERY_PROCESSING_STATE
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setListeningThroughSpeakers = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.LISTENING_THROUGH_SPEAKERS
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.setListeningThroughHeadphones = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.LISTENING_THROUGH_HEADPHONES
                            })).then((function() {
                                return new Promise((function(e) {
                                    e()
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.queryListeningDevice = function(e) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.QUERY_LISTENING_DEVICE
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, t.enablePluginInstance = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.ENABLE_PLUGIN_INSTANCE,
                                payload: t
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.disablePluginInstance = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.DISABLE_PLUGIN_INSTANCE,
                                payload: t
                            })).then((function(e) {
                                return new Promise((function(t) {
                                    t(e)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, t.getAnalyserData = function(e, t) {
                        try {
                            return Promise.resolve(this.browser.tabs.sendMessage(e, {
                                action: Te.GET_ANALYZER_DATA,
                                payload: t
                            })).then((function(e) {
                                for (var t = {
                                        bufferSize: e.frequencyBinCount,
                                        frequencyData: new Uint8Array(e.frequencyBinCount),
                                        timeData: new Uint8Array(e.frequencyBinCount)
                                    }, r = 0; r < e.frequencyBinCount; r++) t.frequencyData[r] = e.frequencyData[r], t.timeData[r] = e.timeData[r];
                                return new Promise((function(e) {
                                    e(t)
                                }))
                            }))
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }, e
                }(),
                qe = function() {
                    function e() {}
                    return e.prototype.getDefaultSettings = function() {
                        var e = {
                            audioOutputDevice: "SPEAKERS",
                            processingEnabled: !0
                        };
                        return e
                    }, e
                }(),
                Qe = function() {
                    function e() {
                        this.arccPluginParametersService = new P, this.areiPluginParametersService = new L, this.capturePluginParametersService = new Q, this.dynamicsCompressorPluginParametersService = new X, this.eqBiquadPluginParametersService = new J, this.pluginGainParametersService = new te, this.pluginRaceParametersService = new ie, this.convolverPluginParametersService = new me, this.reverbPluginParametersService = new _e, this.stereoWideningPluginParametersService = new he, this.arccDspService = new _, this.arccPluginService = new N(this.arccPluginParametersService, this.arccDspService), this.areiPluginService = new q(this.areiPluginParametersService), this.capturePluginService = new K(this.capturePluginParametersService), this.dynamicsCompressorPluginService = new Z(this.dynamicsCompressorPluginParametersService), this.eqBiquadPluginService = new ee(this.eqBiquadPluginParametersService), this.gainPluginService = new ne(this.pluginGainParametersService), this.racePluginService = new ue(this.pluginRaceParametersService, new pe, new G), this.convolverPluginService = new j(this.convolverPluginParametersService), this.reverbPluginService = new ce(this.reverbPluginParametersService), this.stereoWideningPluginService = new de(this.stereoWideningPluginParametersService), this.pluginInstanceFactoryService = new v(this.arccPluginService, this.areiPluginService, this.capturePluginService, this.dynamicsCompressorPluginService, this.eqBiquadPluginService, this.gainPluginService, this.racePluginService, this.convolverPluginService, this.reverbPluginService, this.stereoWideningPluginService), this.pluginGraphUiService = new ye(this.arccPluginParametersService, this.areiPluginParametersService, this.capturePluginParametersService, this.dynamicsCompressorPluginParametersService, this.eqBiquadPluginParametersService, this.pluginGainParametersService, this.pluginRaceParametersService, this.convolverPluginParametersService, this.reverbPluginParametersService, this.stereoWideningPluginParametersService), this.pluginInstanceService = new Le, this.audioInputNodeFactory = new xe, this.backgroundMediaPlayerService = new Se(this.pluginInstanceFactoryService, this.audioInputNodeFactory), this.backgroundStreamPlayerService = new Ne(this.pluginInstanceFactoryService, this.audioInputNodeFactory), this.defaultSettingsService = new qe
                    }
                    e.getInstance = function() {
                        return e.instance || (e.instance = new e, this.isLoggingEnabled = "true" === {}.IS_LOGGING_ENABLED), e.instance
                    };
                    var t = e.prototype;
                    return t.getExtensionPluginBackgroundController = function(e) {
                        return void 0 === this.extensionPluginBackgroundController && (this.extensionPluginBackgroundController = new Fe(e)), this.extensionPluginBackgroundController
                    }, t.getExtensionContentPluginBackgroundControllerImpl = function(e) {
                        return void 0 === this.extensionContentPluginBackgroundControllerImpl && (this.extensionContentPluginBackgroundControllerImpl = new He(e)), this.extensionContentPluginBackgroundControllerImpl
                    }, t.getBackgroundController = function(t) {
                        if ("undefined" != typeof window) {
                            if (void 0 !== t) {
                                return e.getInstance().getExtensionContentPluginBackgroundControllerImpl(t)
                            }
                            return e.getInstance().backgroundMediaPlayerService
                        }
                        return null
                    }, e
                }();
            ! function(e) {
                e[e.NONE = 0] = "NONE", e[e.AUDIO_STREAM = 1] = "AUDIO_STREAM", e[e.AUDIO_LOCAL_FILE = 2] = "AUDIO_LOCAL_FILE", e[e.AUDIO_REMOTE_FILE = 3] = "AUDIO_REMOTE_FILE", e[e.AUDIO_DOM = 4] = "AUDIO_DOM", e[e.VIDEO_STREAM = 5] = "VIDEO_STREAM", e[e.VIDEO_LOCAL_FILE = 6] = "VIDEO_LOCAL_FILE", e[e.VIDEO_REMOTE_FILE = 7] = "VIDEO_REMOTE_FILE", e[e.VIDEO_DOM = 8] = "VIDEO_DOM", e[e.MEDIA_STREAM = 9] = "MEDIA_STREAM"
            }(Re || (Re = {}));
            var We = function() {
                    function e(e, t, r) {
                        this._mediaContentType = e, this._title = t, this._thumbnail = r
                    }
                    var t = e.prototype;
                    return t.getThumbnail = function() {
                        return this._thumbnail
                    }, t.getTitle = function() {
                        return this._title
                    }, t.isStream = function() {
                        return this._mediaContentType === Re.AUDIO_STREAM || this._mediaContentType === Re.VIDEO_STREAM
                    }, t.isLocalFile = function() {
                        return this._mediaContentType === Re.AUDIO_LOCAL_FILE || this._mediaContentType === Re.VIDEO_LOCAL_FILE
                    }, t.isRemoteFile = function() {
                        return this._mediaContentType === Re.AUDIO_REMOTE_FILE || this._mediaContentType === Re.VIDEO_REMOTE_FILE
                    }, t.isAudio = function() {
                        return this._mediaContentType === Re.AUDIO_STREAM || this._mediaContentType === Re.AUDIO_LOCAL_FILE || this._mediaContentType === Re.AUDIO_REMOTE_FILE
                    }, t.isAudioStream = function() {
                        return this._mediaContentType === Re.AUDIO_STREAM
                    }, t.isAudioLocalFile = function() {
                        return this._mediaContentType === Re.AUDIO_LOCAL_FILE
                    }, t.isAudioRemoteFile = function() {
                        return this._mediaContentType === Re.AUDIO_REMOTE_FILE
                    }, t.isAudioDom = function() {
                        return this._mediaContentType === Re.AUDIO_DOM
                    }, t.isVideo = function() {
                        return this._mediaContentType === Re.VIDEO_STREAM || this._mediaContentType === Re.VIDEO_LOCAL_FILE || this._mediaContentType === Re.VIDEO_REMOTE_FILE
                    }, t.isVideoStream = function() {
                        return this._mediaContentType === Re.VIDEO_STREAM
                    }, t.isVideoLocalFile = function() {
                        return this._mediaContentType === Re.VIDEO_LOCAL_FILE
                    }, t.isVideoRemoteFile = function() {
                        return this._mediaContentType === Re.VIDEO_REMOTE_FILE
                    }, t.isVideoDom = function() {
                        return this._mediaContentType === Re.VIDEO_DOM
                    }, t.isMediaStream = function() {
                        return this._mediaContentType === Re.MEDIA_STREAM
                    }, e
                }(),
                Ke = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, Re.AUDIO_REMOTE_FILE, r, n) || this)._url = t, i
                    }
                    return l(t, e), t.prototype.getSource = function() {
                        return this._url
                    }, t
                }(We),
                Ye = function(e) {
                    function t(t, r, n) {
                        var i;
                        return (i = e.call(this, Re.VIDEO_REMOTE_FILE, r, n) || this)._url = t, i
                    }
                    return l(t, e), t.prototype.getSource = function() {
                        return this._url
                    }, t
                }(We),
                je = function() {
                    function e() {
                        e.audioContext = null
                    }
                    return e.getAudioContext = function() {
                        return e.createAudioContext(), e.audioContext
                    }, e.getOfflineAudioContext = function() {
                        return e.createGraphAudioContext(), e.graphAudioContext
                    }, e.createAudioContext = function() {
                        if ("undefined" != typeof window) {
                            if (null == e.audioContext) {
                                var t = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.mozAudioContext || window.oAudioContext;
                                if (t) {
                                    e.audioContext = new t;
                                    var r = e.audioContext.createBuffer(1, 1, 44100),
                                        n = e.audioContext.createBufferSource();
                                    n.buffer = r, n.connect(e.audioContext.destination), "function" == typeof n.start ? n.start(0) : console.warn("start(0) is not a function for dummy AudioBufferSourceNode."), n.disconnect(), "function" == typeof e.audioContext.close ? e.audioContext.close() : console.warn("close() is not a function for audioContext."), e.audioContext = null, e.audioContext = new t
                                } else console.error("Could not find a class for AudioContext construction."), e.audioContext = null
                            }
                            null != e.audioContext ? "suspended" === e.audioContext.state && ("function" == typeof e.audioContext.resume ? e.audioContext.resume() : console.warn("resume() is not a function for audioContext.")) : (console.error("Sorry. WebAudio API is not supported on your browser. Try using Google Chrome."), alert("Sorry. WebAudio API is not supported on your browser. Try using Google Chrome."))
                        }
                    }, e.createGraphAudioContext = function() {
                        if ("undefined" != typeof window) {
                            if (null == e.graphAudioContext) {
                                var t = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.mozAudioContext || window.oAudioContext;
                                e.graphAudioContext = t ? new t : null
                            }
                            null == e.graphAudioContext && (console.error("Sorry. WebAudio API not supported on your browser. Try using the Google Chrome."), alert("Sorry. WebAudio API not supported on your browser. Try using the Google Chrome."))
                        }
                    }, e
                }();
            je.audioContext = null, je.graphAudioContext = null
        }
    }
]);
//# sourceMappingURL=feb90782-521e91423966c599ed44.js.map