"use strict";
(self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || []).push([
    [375], {
        1887: function(t, e, n) {
            n.d(e, {
                Y$: function() {
                    return bn
                }
            });
            var a = n(7378),
                i = n(1348),
                o = n(2666),
                r = n(7556),
                s = n(9384),
                l = n(2222),
                c = n(4855),
                u = n(5025),
                d = n(7640),
                h = n(9581),
                f = n(967),
                g = n(3810),
                p = n(4799),
                v = n(6014),
                m = n(2019),
                b = n(1354),
                _ = n(2424),
                y = n(3298),
                E = n(2937),
                I = n(7227),
                w = n(2662),
                x = n(4475),
                C = n(6617),
                P = n(1805),
                M = n(6717),
                S = n(182),
                k = n(5304),
                D = n(3969),
                A = n(9217),
                B = n(9828),
                T = n(7932),
                Z = n(3467),
                O = n(2762),
                F = n(2649),
                R = n(4957),
                q = n(8370),
                W = n(241),
                G = n(6810),
                H = n(1533),
                N = n(9992),
                j = n(4184),
                V = n(4202),
                L = n(781),
                z = n(1613),
                U = n(7070),
                K = n(1430),
                Q = n(2447),
                Y = n(5793),
                X = function(t) {
                    var e = t.children;
                    return a.createElement(i.Z, {
                        align: "center",
                        variant: "subtitle1",
                        sx: {
                            border: "0px solid #808080"
                        }
                    }, e)
                },
                $ = a.createContext({
                    settings: null,
                    setSettings: null
                }),
                J = function(t) {
                    var e = t.children,
                        n = (0, a.useState)(null),
                        i = n[0],
                        o = n[1];
                    return a.createElement($.Provider, {
                        value: {
                            settings: i,
                            setSettings: o
                        }
                    }, e)
                },
                tt = (0, x.oM)({
                    name: "globals",
                    initialState: {
                        loading: !1,
                        error: !1
                    },
                    reducers: {}
                }),
                et = (0, x.hg)("processingEnablement/setProcessingOnAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).setProcessingOn(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                nt = (0, x.hg)("processingEnablement/setProcessingOffAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).setProcessingOff(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                at = (0, x.hg)("processingEnablement/queryProcessingStateAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).queryProcessingState(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                it = (0, x.oM)({
                    name: "processingEnablement",
                    initialState: {
                        enabled: !0
                    },
                    reducers: {
                        toggleProcessingEnablement: function(t) {
                            t.enabled = !t.enabled
                        }
                    },
                    extraReducers: function(t) {
                        t.addCase(et.pending, (function(t, e) {})).addCase(et.fulfilled, (function(t, e) {
                            t.enabled = !0;
                            var n = e.meta.arg.browser,
                                a = e.meta.arg.tabId;
                            if (n) {
                                var i = n.browserAction ? n.browserAction : n.action;
                                i && (i.setBadgeBackgroundColor({
                                    tabId: a,
                                    color: "#388E3D"
                                }), i.setBadgeText({
                                    tabId: a,
                                    text: "on"
                                }))
                            }
                        })).addCase(et.rejected, (function(t, e) {})), t.addCase(nt.pending, (function(t, e) {})).addCase(nt.fulfilled, (function(t, e) {
                            t.enabled = !1;
                            var n = e.meta.arg.browser,
                                a = e.meta.arg.tabId;
                            if (n) {
                                var i = n.browserAction ? n.browserAction : n.action;
                                i && (i.setBadgeBackgroundColor({
                                    tabId: a,
                                    color: "#F67C00"
                                }), i.setBadgeText({
                                    tabId: a,
                                    text: "off"
                                }))
                            }
                        })).addCase(nt.rejected, (function(t, e) {})), t.addCase(at.pending, (function(t, e) {})).addCase(at.fulfilled, (function(t, e) {
                            t.enabled = e.payload
                        })).addCase(at.rejected, (function(t, e) {}))
                    }
                }),
                ot = function(t) {
                    return t.processingEnablement.enabled
                },
                rt = C.E2.getAudioContext(),
                st = (0, x.hg)("preset/createPluginInstanceAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).createPluginInstance(t.tabId, rt, t.pluginInstance, t.browser)).then((function(e) {
                            return void 0 === e && console.log("createPluginInstanceAsync failed for payload:", t), e
                        }))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                lt = (0, x.hg)("preset/getAllPluginInstancesAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).getAllPluginInstances(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                ct = (0, x.hg)("preset/setPluginInstanceParameterKeyValueAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).setPluginInstanceParameterKeyValue(t.tabId, C.E2.getAudioContext(), t.pluginInstanceParameterKeyValue, t.browser))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                ut = (0, x.oM)({
                    name: "preset",
                    initialState: {
                        error: null,
                        pending: !1,
                        pluginInstances: [],
                        isGetAllPluginInstancesFulfilled: !1
                    },
                    reducers: {
                        resetIsGetAllPluginInstancesFulfilled: function(t) {
                            t.isGetAllPluginInstancesFulfilled = !1
                        }
                    },
                    extraReducers: function(t) {
                        t.addCase(st.pending, (function(t, e) {
                            t.pending = !0
                        })).addCase(st.fulfilled, (function(t, e) {
                            t.pending = !1, void 0 !== e.payload && (t.pluginInstances = [].concat(t.pluginInstances, [e.payload]))
                        })).addCase(st.rejected, (function(t, e) {
                            t.pending = !1
                        })).addCase(lt.pending, (function(t, e) {
                            t.pending = !0
                        })).addCase(lt.fulfilled, (function(t, e) {
                            t.pending = !1, t.pluginInstances = [].concat(e.payload), t.isGetAllPluginInstancesFulfilled = !0, e.payload.length && (C.R4.coreOrder = C.R4.coreOrder + e.payload.length)
                        })).addCase(lt.rejected, (function(t, e) {
                            t.pending = !1
                        })).addCase(ct.pending, (function(t, e) {
                            t.pending = !0
                        })).addCase(ct.fulfilled, (function(t, e) {
                            t.pluginInstances = [].concat(t.pluginInstances.filter((function(t) {
                                return t.instanceId !== e.payload.instanceId
                            })), [e.payload]), t.pending = !1
                        })).addCase(ct.rejected, (function(t) {
                            t.pending = !1
                        }))
                    }
                }),
                dt = ut.actions.resetIsGetAllPluginInstancesFulfilled,
                ht = function(t) {
                    return t.preset.isGetAllPluginInstancesFulfilled
                },
                ft = function(t) {
                    return [].concat(t.preset.pluginInstances).sort((function(t, e) {
                        return function(t, e) {
                            return t.order < e.order ? -1 : t.order > e.order ? 1 : 0
                        }(t, e)
                    }))
                },
                gt = (0, x.hg)("audioOutputDevice/setToSpeakersAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).setProcessingOn(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                pt = (0, x.hg)("audioOutputDevice/setToHeadphonesAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).setProcessingOff(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                vt = (0, x.hg)("audioOutputDevice/queryAudioOutputDeviceAsync", (function(t) {
                    try {
                        return Promise.resolve(C.GW.getInstance().getBackgroundController(t.browser).queryListeningDevice(t.tabId))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                })),
                mt = (0, x.oM)({
                    name: "audioOutputDevice",
                    initialState: {
                        deviceType: "SPEAKERS"
                    },
                    reducers: {
                        toggleAudioOutputDevice: function(t) {}
                    },
                    extraReducers: function(t) {
                        t.addCase(gt.pending, (function(t, e) {})).addCase(gt.fulfilled, (function(t, e) {})).addCase(gt.rejected, (function(t, e) {})), t.addCase(pt.pending, (function(t, e) {})).addCase(pt.fulfilled, (function(t, e) {})).addCase(pt.rejected, (function(t, e) {})), t.addCase(vt.pending, (function(t, e) {})).addCase(vt.fulfilled, (function(t, e) {
                            t.deviceType = e.payload
                        })).addCase(vt.rejected, (function(t, e) {}))
                    }
                }),
                bt = function(t) {
                    return t.audioOutputDevice.deviceType
                },
                _t = (0, x.xC)({
                    reducer: {
                        globals: tt.reducer,
                        processingEnablement: it.reducer,
                        preset: ut.reducer,
                        audioOutputDevice: mt.reducer
                    },
                    devTools: !1
                }),
                yt = (0, k.Z)({
                    typography: {
                        fontFamily: "Roboto Condensed"
                    },
                    palette: {
                        mode: "dark",
                        background: {
                            default: "#111213",
                            paper: "#111213"
                        },
                        primary: {
                            main: "#9EF3B5"
                        },
                        secondary: {
                            main: "#DE1B34"
                        },
                        error: {
                            main: B.Z.A400
                        }
                    }
                }),
                Et = yt = (0, D.Z)(yt),
                It = function() {
                    var t = a.useState(null),
                        e = t[0],
                        n = t[1],
                        i = Boolean(e);
                    return a.createElement("div", null, a.createElement(u.Z, {
                        color: "inherit",
                        "aria-label": "header-menu-icon-button",
                        edge: "start",
                        id: "header-menu-icon-button",
                        "aria-controls": i ? "fade-menu" : void 0,
                        "aria-haspopup": "true",
                        "aria-expanded": i ? "true" : void 0,
                        onClick: function(t) {
                            n(t.currentTarget)
                        }
                    }, a.createElement(F.Z, null)), a.createElement(T.Z, {
                        id: "fade-menu",
                        MenuListProps: {
                            "aria-labelledby": "fade-button"
                        },
                        anchorEl: e,
                        open: i,
                        onClose: function() {
                            n(null)
                        },
                        TransitionComponent: O.Z
                    }, a.createElement(Z.Z, {
                        onClick: function() {
                            n(null), window.open("https://magic.audio/", "_blank")
                        }
                    }, "Website")))
                },
                wt = function(t) {
                    var e = t.processingEnabled,
                        n = t.handleProcessingEnabledChanged;
                    return a.createElement(R.Z, {
                        direction: "row",
                        spacing: 0
                    }, a.createElement(i.Z, {
                        variant: "h6",
                        noWrap: !0,
                        component: "div",
                        sx: {
                            marginTop: "0.2rem",
                            color: function(t) {
                                return e ? t.palette.grey[500] : "inherit"
                            }
                        }
                    }, "OFF"), a.createElement(q.Z, {
                        checked: e,
                        color: "secondary",
                        onChange: n,
                        inputProps: {
                            "aria-label": "processing enabled"
                        }
                    }), a.createElement(i.Z, {
                        variant: "h6",
                        noWrap: !0,
                        component: "div",
                        sx: {
                            marginTop: "0.2rem",
                            color: function(t) {
                                return e ? "inherit" : t.palette.grey[500]
                            }
                        }
                    }, "ON"))
                },
                xt = function(t) {
                    return a.createElement(o.Z, t, a.createElement("svg", {
                        version: "1.1",
                        id: "Layer_1",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 469.333 469.333",
                        style: {
                            enableBackground: "new 0 0 469.333 469.333"
                        }
                    }, a.createElement("g", null, a.createElement("g", null, a.createElement("path", {
                        d: "M234.667,0C105.271,0,0,114.844,0,256v117.333C0,379.224,4.776,384,10.667,384h32v42.667 c0,23.531,19.135,42.667,42.667,42.667h32c5.896,0,10.667-4.771,10.667-10.667v-192c0-5.896-4.771-10.667-10.667-10.667h-32 c-23.531,0-42.667,19.135-42.667,42.667V256c0-117.635,86.135-213.333,192-213.333s192,95.698,192,213.333v42.667 C426.667,275.135,407.531,256,384,256h-32c-5.896,0-10.667,4.771-10.667,10.667v192c0,5.896,4.771,10.667,10.667,10.667h32 c23.531,0,42.667-19.135,42.667-42.667V384h32c5.891,0,10.667-4.776,10.667-10.667V256C469.333,114.844,364.063,0,234.667,0z"
                    }))), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null)))
                },
                Ct = function(t) {
                    return a.createElement(o.Z, t, a.createElement("svg", {
                        version: "1.1",
                        id: "Layer_1",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 210 210",
                        style: {
                            enableBackground: "new 0 0 210 210"
                        }
                    }, a.createElement("path", {
                        d: "M86.049,0H17.455c-2.305,0-4.171,1.866-4.171,4.169v5.527H9.976c-2.454,0-4.443,1.99-4.443,4.444v185.476 c0,2.457,1.989,4.446,4.443,4.446h7.898V210h15.928v-5.938h35.901V210h15.928v-5.938h7.897c2.454,0,4.443-1.989,4.443-4.446V14.141 c0-2.454-1.989-4.444-4.443-4.444h-3.309V4.169C90.219,1.866,88.354,0,86.049,0z M51.752,42.612 c13.418,0,24.296,10.879,24.296,24.295c0,13.42-10.878,24.298-24.296,24.298c-13.418,0-24.297-10.878-24.297-24.298 C27.455,53.491,38.334,42.612,51.752,42.612z M51.752,172.07c-17.294,0-31.314-14.02-31.314-31.314 c0-17.294,14.02-31.316,31.314-31.316c17.294,0,31.314,14.021,31.314,31.316C83.066,158.051,69.046,172.07,51.752,172.07z M39.186,66.907c0-6.938,5.627-12.566,12.567-12.566c6.94,0,12.565,5.628,12.565,12.566c0,6.941-5.625,12.569-12.565,12.569 C44.813,79.477,39.186,73.849,39.186,66.907z M67.948,140.756c0,8.943-7.25,16.198-16.196,16.198 c-8.945,0-16.196-7.255-16.196-16.198c0-8.944,7.251-16.198,16.196-16.198C60.698,124.558,67.948,131.811,67.948,140.756z M192.544,0H123.95c-2.304,0-4.17,1.866-4.17,4.169v5.527h-3.31c-2.453,0-4.443,1.99-4.443,4.444v185.476 c0,2.457,1.99,4.446,4.443,4.446h7.898V210h15.928v-5.938h35.901V210h15.928v-5.938h7.897c2.455,0,4.444-1.989,4.444-4.446V14.141 c0-2.454-1.989-4.444-4.444-4.444h-3.308V4.169C196.716,1.866,194.85,0,192.544,0z M158.247,42.612 c13.419,0,24.297,10.879,24.297,24.295c0,13.42-10.878,24.298-24.297,24.298c-13.417,0-24.295-10.878-24.295-24.298 C133.952,53.491,144.83,42.612,158.247,42.612z M158.247,172.07c-17.293,0-31.313-14.02-31.313-31.314 c0-17.294,14.021-31.316,31.313-31.316c17.295,0,31.314,14.021,31.314,31.316C189.561,158.051,175.542,172.07,158.247,172.07z M145.682,66.907c0-6.938,5.626-12.566,12.566-12.566c6.94,0,12.567,5.628,12.567,12.566c0,6.941-5.627,12.569-12.567,12.569 C151.308,79.477,145.682,73.849,145.682,66.907z M174.444,140.756c0,8.943-7.251,16.198-16.197,16.198 c-8.945,0-16.195-7.255-16.195-16.198c0-8.944,7.25-16.198,16.195-16.198C167.193,124.558,174.444,131.811,174.444,140.756z"
                    }), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null), a.createElement("g", null)))
                },
                Pt = function(t) {
                    var e = t.handleOnSpeakers,
                        n = t.handleOnHeadphones,
                        i = t.audioOutputDevice;
                    return a.createElement(r.Z, null, a.createElement(u.Z, {
                        "aria-label": "speakers icon",
                        color: "SPEAKERS" === i ? "primary" : "inherit",
                        onClick: e
                    }, a.createElement(Ct, null)), a.createElement(u.Z, {
                        "aria-label": "headphones icon",
                        color: "HEADPHONES" === i ? "primary" : "inherit",
                        onClick: n
                    }, a.createElement(xt, null)))
                };

            function Mt(t) {
                var e = t.children,
                    n = t.tabId,
                    i = t.browser,
                    o = t.handleChangeOutputDeviceTo,
                    s = t.audioOutputDevice,
                    l = (0, w.I0)(),
                    c = (0, w.v9)(ot);
                return a.useEffect((function() {
                    return l(at({
                            tabId: n,
                            browser: i
                        })),
                        function() {}
                }), [l]), a.createElement(A.Z, {
                    theme: Et
                }, a.createElement(P.Z, null, a.createElement(r.Z, {
                    sx: {
                        display: "flex",
                        width: "100%",
                        border: "0px solid blue"
                    }
                }, a.createElement(M.Z, {
                    position: "absolute",
                    sx: {
                        maxHeight: "100px",
                        zIndex: 1099
                    }
                }, a.createElement(S.Z, null, a.createElement(r.Z, {
                    sx: {
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%, 0)"
                    }
                }, a.createElement(wt, {
                    processingEnabled: c,
                    handleProcessingEnabledChanged: function(t) {
                        t.target.checked ? l(et({
                            tabId: n,
                            browser: i
                        })) : l(nt({
                            tabId: n,
                            browser: i
                        }))
                    }
                })), i && a.createElement(r.Z, {
                    sx: {
                        visibility: "hidden"
                    }
                }, a.createElement(It, null)), a.createElement(r.Z, {
                    sx: {
                        flexGrow: 1
                    }
                }), c && a.createElement(Pt, {
                    audioOutputDevice: s,
                    handleOnSpeakers: function() {
                        return o("SPEAKERS")
                    },
                    handleOnHeadphones: function() {
                        return o("HEADPHONES")
                    }
                }))), a.createElement(r.Z, {
                    component: "section",
                    sx: {
                        flexGrow: 1,
                        p: 3,
                        padding: 0,
                        width: "100%",
                        border: "0px solid red"
                    }
                }, a.createElement(S.Z, null), e))))
            }

            function St() {
                return St = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
                    }
                    return t
                }, St.apply(this, arguments)
            }
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

            function kt(t, e) {
                try {
                    var n = t()
                } catch (a) {
                    return e(a)
                }
                return n && n.then ? n.then(void 0, e) : n
            }
            var Dt = function() {
                    function t(t) {
                        this._canvasContext = t
                    }
                    var e = t.prototype;
                    return e.toRadians = function(t) {
                        return t * Math.PI / 180
                    }, e.toDegrees = function(t) {
                        return 180 * t / Math.PI
                    }, e._rotatePoint = function(t, e, n, a, i) {
                        var o = this.toRadians(i);
                        return {
                            x: Math.cos(o) * (n - t) - Math.sin(o) * (a - e) + t,
                            y: Math.sin(o) * (n - t) + Math.cos(o) * (a - e) + e
                        }
                    }, e._makeGradient = function(t, e) {
                        var n = 0,
                            a = this._canvasContext.canvas.height / 2,
                            i = this._canvasContext.canvas.width,
                            o = this._canvasContext.canvas.height / 2;
                        if (e) {
                            var r = this._canvasContext.canvas.width / 2,
                                s = this._canvasContext.canvas.height / 2,
                                l = this._rotatePoint(r, s, n, a, e);
                            n = l.x, a = l.y;
                            var c = this._rotatePoint(r, s, i, o, e);
                            i = c.x, o = c.y
                        }
                        var u = this._canvasContext.createLinearGradient(n, a, i, o);
                        return t.forEach((function(e, n) {
                            u.addColorStop(1 / t.length * n, e)
                        })), u
                    }, e._makeImage = function(t) {
                        try {
                            var e = this,
                                n = new Image;
                            return n.src = t, Promise.resolve(new Promise((function(t, a) {
                                n.onload = function() {
                                    var a = e._canvasContext.createPattern(n, "repeat");
                                    t(a)
                                }
                            })))
                        } catch (a) {
                            return Promise.reject(a)
                        }
                    }, e._implementOptions = function(t, e) {
                        var n, a, i, o, r, s, l, c, u, d, h = this;
                        if (void 0 === e && (e = !0), "string" == typeof(null == t ? void 0 : t.lineColor)) this._canvasContext.strokeStyle = t.lineColor;
                        else if (null != t && null !== (n = t.lineColor) && void 0 !== n && n.gradient) this._canvasContext.strokeStyle = this._makeGradient(t.lineColor.gradient, t.lineColor.rotate);
                        else if (null != t && null !== (a = t.lineColor) && void 0 !== a && a.image) {
                            var f;
                            this._makeImage(null == t || null === (f = t.lineColor) || void 0 === f ? void 0 : f.image).then((function(t) {
                                return h._canvasContext.strokeStyle = t
                            }))
                        } else this._canvasContext.strokeStyle = "#000";
                        if ("string" == typeof(null == t ? void 0 : t.fillColor)) this._canvasContext.fillStyle = t.fillColor;
                        else if (null != t && null !== (i = t.fillColor) && void 0 !== i && i.gradient) this._canvasContext.fillStyle = this._makeGradient(t.fillColor.gradient, t.fillColor.rotate);
                        else if (null != t && null !== (o = t.fillColor) && void 0 !== o && o.image) {
                            var g;
                            this._makeImage(null == t || null === (g = t.fillColor) || void 0 === g ? void 0 : g.image).then((function(t) {
                                return h._canvasContext.fillStyle = t
                            }))
                        } else this._canvasContext.fillStyle = "#000";
                        this._canvasContext.lineCap = null != (r = null != t && t.rounded ? "round" : "butt") ? r : "butt", this._canvasContext.lineWidth = null != (s = null == t ? void 0 : t.lineWidth) ? s : 1, this._canvasContext.shadowColor = null != (l = null == t || null === (c = t.glow) || void 0 === c ? void 0 : c.color) ? l : "rgba(0,0,0,0)", this._canvasContext.shadowBlur = null != (u = null == t || null === (d = t.glow) || void 0 === d ? void 0 : d.strength) ? u : 0, this._canvasContext.shadowOffsetX = 0, this._canvasContext.shadowOffsetY = 0, e && this._canvasContext.closePath(), this._canvasContext.stroke(), e && this._canvasContext.fill()
                    }, e.arc = function(t, e, n, a, i, o) {
                        return this._canvasContext.beginPath(), this._canvasContext.arc(t, e, n / 2, this.toRadians(a), this.toRadians(i)), this._implementOptions(o, !1), this
                    }, e.circle = function(t, e, n, a) {
                        return this._canvasContext.beginPath(), this._canvasContext.arc(t, e, n / 2, 0, 2 * Math.PI), this._implementOptions(a), this
                    }, e.line = function(t, e, n, a, i) {
                        return this._canvasContext.beginPath(), this._canvasContext.moveTo(t, e), this._canvasContext.lineTo(n, a), this._implementOptions(i), this
                    }, e.polygon = function(t, e) {
                        this._canvasContext.beginPath(), this._canvasContext.moveTo(t[0].x, t[0].y);
                        for (var n = 0; n < t.length; n++) {
                            var a, i = t[n],
                                o = null != (a = t[n + 1]) ? a : i,
                                r = (i.x + o.x) / 2,
                                s = (i.y + o.y) / 2;
                            null != e && e.rounded ? this._canvasContext.quadraticCurveTo(t[n].x, t[n].y, r, s) : this._canvasContext.lineTo(t[n].x, t[n].y)
                        }
                        return this._implementOptions(e), this
                    }, e.rectangle = function(t, e, n, a, i) {
                        var o, r = null != (o = null == i ? void 0 : i.radius) ? o : 0;
                        return n < 2 * r && (r = n / 2), a < 2 * r && (r = a / 2), this._canvasContext.beginPath(), this._canvasContext.moveTo(t + r, e), this._canvasContext.arcTo(t + n, e, t + n, e + a, r), this._canvasContext.arcTo(t + n, e + a, t, e + a, r), this._canvasContext.arcTo(t, e + a, t, e, r), this._canvasContext.arcTo(t, e, t + n, e, r), this._implementOptions(i), this
                    }, t
                }(),
                At = function() {
                    function t(t) {
                        this.data = t
                    }
                    var e = t.prototype;
                    return e.setFrequencyBand = function(t) {
                        var e = Math.floor(.0625 * this.data.length),
                            n = Math.floor(.0625 * this.data.length),
                            a = Math.floor(.375 * this.data.length),
                            i = {
                                base: this.data.slice(0, e),
                                lows: this.data.slice(e + 1, e + n),
                                mids: this.data.slice(e + n + 1, e + n + a),
                                highs: this.data.slice(e + n + a + 1)
                            };
                        this.data = i[t]
                    }, e.scaleData = function(t) {
                        t < 255 && (this.data = this.data.map((function(e) {
                            var n = Math.round(e / 255 * 100) / 100;
                            return t * n
                        })))
                    }, t
                }(),
                Bt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t),
                            s = a / 2,
                            l = i / 2;
                        this._options = St({
                            count: 30,
                            diameter: a / 3,
                            lineWidth: 3,
                            frequencyBand: "mids",
                            rounded: !0
                        }, this._options), this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var c = 0; c <= this._options.count / 2; c++) {
                            var u = Math.floor(r.data.length / this._options.count) * c,
                                d = r.data[u],
                                h = (i - this._options.diameter) / this._options.count * c,
                                f = 180 - 45 / (255 / d / 2),
                                g = 180 + 45 / (255 / d / 2),
                                p = 2 * d;
                            o.arc(h + p / 2, s, p, f, g, this._options)
                        }
                        var v = Math.floor(r.data.length / 2),
                            m = r.data[v];
                        o.circle(l, s, this._options.diameter * (m / 255), this._options);
                        for (var b = this._options.count / 2; b <= this._options.count; b++) {
                            var _ = Math.floor(r.data.length / this._options.count) * b,
                                y = r.data[_],
                                E = (i - this._options.diameter) / this._options.count * b + this._options.diameter,
                                I = 180 - 45 / (255 / y / 2),
                                w = 180 + 45 / (255 / y / 2),
                                x = 2 * y;
                            o.arc(E - x / 2, s, x, I + 180, w + 180, this._options)
                        }
                    }, t
                }(),
                Tt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t),
                            s = a / 2,
                            l = i / 2;
                        this._options = St({
                            count: 20,
                            diameterDivisor: 2,
                            diameter: a / 2,
                            lineWidth: 3,
                            frequencyBand: "base",
                            rounded: !0,
                            playAngle: 35,
                            circleStrokeColor: "#808080"
                        }, this._options), this._options.diameter = a / this._options.diameterDivisor;
                        var c = 180,
                            u = this._options.playAngle,
                            d = 1.9;
                        this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var h = 0; h <= this._options.count / 2; h++) {
                            var f = Math.floor(r.data.length / this._options.count) * h,
                                g = r.data[f],
                                p = (i - this._options.diameter) / this._options.count * h,
                                v = c - u / (255 / g / 2),
                                m = c + u / (255 / g / 2),
                                b = g * d;
                            o.arc(p + b / d, s, b, v, m, this._options)
                        }
                        var _ = Math.floor(r.data.length / 2),
                            y = r.data[_];
                        o.circle(l, s, this._options.diameter * (y / 255), this._options);
                        for (var E = this._options.count / 2; E <= this._options.count; E++) {
                            var I = Math.floor(r.data.length / this._options.count) * E,
                                w = r.data[I],
                                x = (i - this._options.diameter) / this._options.count * E + this._options.diameter,
                                C = c - u / (255 / w / 2),
                                P = c + u / (255 / w / 2),
                                M = w * d;
                            o.arc(x - M / d, s, M, C + c, P + c, this._options)
                        }
                    }, t
                }(),
                Zt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t),
                            s = i / 2,
                            l = a / 2;
                        this._options = St({
                            count: 40,
                            diameter: 0,
                            fillColor: "rgba(0,0,0,0)",
                            frequencyBand: "mids"
                        }, this._options), this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var c = 0; c < this._options.count; c++) {
                            var u = Math.floor(r.data.length / this._options.count) * c,
                                d = r.data[u];
                            o.circle(s, l, this._options.diameter + d, this._options)
                        }
                    }, t
                }(),
                Ot = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n, a, i, o, r, s, l, c, u, d, h, f = e.canvas,
                            g = f.height,
                            p = f.width,
                            v = new Dt(e),
                            m = new At(t);
                        this._options = St({
                            count: 20,
                            frequencyBand: "mids",
                            gap: 5
                        }, this._options);
                        var b = Math.floor((p - this._options.gap * this._options.count) / this._options.count);
                        if (null !== (n = this._options) && void 0 !== n && n.cubeHeight || (this._options.cubeHeight = b), this._options.frequencyBand && m.setFrequencyBand(this._options.frequencyBand), m.scaleData(Math.min(p, g)), null !== (a = this._options) && void 0 !== a && a.mirroredX)
                            for (var _ = 1, y = Math.ceil(m.data.length / 2); y < m.data.length; y++) m.data[y] = m.data[Math.ceil(m.data.length / 2) - _], _++;
                        if (null !== (i = this._options) && void 0 !== i && i.top)
                            for (var E = 0; E < this._options.count; E++)
                                for (var I = Math.floor(m.data.length / this._options.count) * E, w = m.data[I], x = (this._options.gap + b) * E, C = Math.ceil(w / b), P = 0; P < C; P++) {
                                    var M = P * (this._options.cubeHeight + this._options.gap);
                                    v.rectangle(x, M, b, this._options.cubeHeight, this._options)
                                }
                        if (null !== (o = this._options) && void 0 !== o && o.right)
                            for (var S = 0; S < this._options.count; S++)
                                for (var k = Math.floor(m.data.length / this._options.count) * S, D = m.data[k], A = S * (this._options.cubeHeight + this._options.gap), B = Math.ceil(D / b), T = 0; T < B; T++) {
                                    var Z = p - (this._options.gap + b) * T;
                                    v.rectangle(Z, A, b, this._options.cubeHeight, this._options)
                                }
                        if (null !== (r = this._options) && void 0 !== r && r.bottom || (null === (s = this._options) || void 0 === s || !s.top) && (null === (l = this._options) || void 0 === l || !l.right) && (null === (c = this._options) || void 0 === c || !c.left) && (null === (u = this._options) || void 0 === u || !u.center))
                            for (var O = 0; O < this._options.count; O++)
                                for (var F = Math.floor(m.data.length / this._options.count) * O, R = m.data[F], q = (this._options.gap + b) * O, W = Math.ceil(R / b), G = 0; G < W; G++) {
                                    var H = g - G * (this._options.cubeHeight + this._options.gap);
                                    v.rectangle(q, H, b, this._options.cubeHeight, this._options)
                                }
                        if (null !== (d = this._options) && void 0 !== d && d.left)
                            for (var N = 0; N < this._options.count; N++)
                                for (var j = Math.floor(m.data.length / this._options.count) * N, V = m.data[j], L = N * (this._options.cubeHeight + this._options.gap), z = Math.ceil(V / b), U = 0; U < z; U++) {
                                    var K = (this._options.gap + b) * U;
                                    v.rectangle(K, L, b, this._options.cubeHeight, this._options)
                                }
                        if (null !== (h = this._options) && void 0 !== h && h.center) {
                            for (var Q, Y = 0; Y < this._options.count; Y++)
                                for (var X = Math.floor(m.data.length / this._options.count) * Y, $ = m.data[X], J = (this._options.gap + b) * Y, tt = Math.ceil($ / b), et = 0; et < tt; et++) {
                                    var nt = g / 2 - et * (this._options.cubeHeight + this._options.gap);
                                    v.rectangle(J, nt, b, this._options.cubeHeight, this._options)
                                }
                            if (null !== (Q = this._options) && void 0 !== Q && Q.mirroredY)
                                for (var at = 0; at < this._options.count; at++)
                                    for (var it = Math.floor(m.data.length / this._options.count) * at, ot = m.data[it], rt = (this._options.gap + b) * at, st = Math.ceil(ot / b), lt = 0; lt < st; lt++) {
                                        var ct = g / 2 + lt * (this._options.cubeHeight + this._options.gap);
                                        v.rectangle(rt, ct, b, this._options.cubeHeight, this._options)
                                    }
                        }
                    }, t
                }(),
                Ft = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t);
                        this._options = St({
                            count: 20,
                            diameter: a / 3,
                            frequencyBand: "mids",
                            rotate: 0
                        }, this._options);
                        var s = i / 2,
                            l = a / 2,
                            c = 360 / this._options.count;
                        this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var u = 0; u < this._options.count; u++) {
                            var d = Math.floor(r.data.length / this._options.count) * u,
                                h = r.data[d],
                                f = o.toRadians(c * u + this._options.rotate),
                                g = o.toRadians(c * (u + 1) + this._options.rotate),
                                p = this._options.diameter / 2 * Math.cos(f) + s,
                                v = this._options.diameter / 2 * Math.sin(f) + l,
                                m = this._options.diameter / 2 * Math.cos(g) + s,
                                b = this._options.diameter / 2 * Math.sin(g) + l,
                                _ = this._options.diameter + h,
                                y = _ / 2 * Math.cos(f) + s,
                                E = _ / 2 * Math.sin(f) + l,
                                I = _ / 2 * Math.cos(g) + s,
                                w = _ / 2 * Math.sin(g) + l;
                            o.polygon([{
                                x: p,
                                y: v
                            }, {
                                x: y,
                                y: E
                            }, {
                                x: I,
                                y: w
                            }, {
                                x: m,
                                y: b
                            }], this._options)
                        }
                    }, t
                }(),
                Rt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n, a = e.canvas,
                            i = a.height,
                            o = a.width,
                            r = new Dt(e),
                            s = new At(t),
                            l = o / 2,
                            c = i / 2;
                        if (this._options = St({
                                count: 100,
                                diameter: i / 3,
                                frequencyBand: "mids",
                                rounded: !0
                            }, this._options), this._options.frequencyBand && s.setFrequencyBand(this._options.frequencyBand), s.scaleData(Math.min(o, i)), null !== (n = this._options) && void 0 !== n && n.mirroredX)
                            for (var u = 1, d = Math.ceil(s.data.length / 2); d < s.data.length; d++) s.data[d] = s.data[Math.ceil(s.data.length / 2) - u], u++;
                        for (var h = [], f = 0; f < this._options.count; f++) {
                            var g = Math.floor(s.data.length / this._options.count) * f,
                                p = s.data[g],
                                v = 360 / this._options.count,
                                m = this._options.diameter + p,
                                b = l + m / 2 * Math.cos(r.toRadians(v * f)),
                                _ = c + m / 2 * Math.sin(r.toRadians(v * f));
                            h.push({
                                x: b,
                                y: _
                            })
                        }
                        h.push(h[0]), r.polygon(h, this._options)
                    }, t
                }(),
                qt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n, a, i, o, r, s, l, c, u, d, h = e.canvas,
                            f = h.height,
                            g = h.width,
                            p = new Dt(e),
                            v = new At(t);
                        if (this._options = St({
                                count: 64,
                                frequencyBand: "mids"
                            }, this._options), this._options.frequencyBand && v.setFrequencyBand(this._options.frequencyBand), v.scaleData(Math.min(g, f)), null !== (n = this._options) && void 0 !== n && n.mirroredX)
                            for (var m = 1, b = Math.ceil(v.data.length / 2); b < v.data.length; b++) v.data[b] = v.data[Math.ceil(v.data.length / 2) - m], m++;
                        if (null !== (a = this._options) && void 0 !== a && a.top)
                            for (var _ = 1; _ <= this._options.count; _++) {
                                var y = Math.floor(v.data.length / this._options.count) * _,
                                    E = v.data[y],
                                    I = g / this._options.count * _,
                                    w = I,
                                    x = E;
                                p.line(I, 0, w, x, this._options)
                            }
                        if (null !== (i = this._options) && void 0 !== i && i.right)
                            for (var C = 1; C <= this._options.count; C++) {
                                var P = Math.floor(v.data.length / this._options.count) * C,
                                    M = v.data[P],
                                    S = g,
                                    k = f / this._options.count * C,
                                    D = g - M,
                                    A = k;
                                p.line(S, k, D, A, this._options)
                            }
                        if (null !== (o = this._options) && void 0 !== o && o.bottom || (null === (r = this._options) || void 0 === r || !r.top) && (null === (s = this._options) || void 0 === s || !s.right) && (null === (l = this._options) || void 0 === l || !l.left) && (null === (c = this._options) || void 0 === c || !c.center))
                            for (var B = 1; B <= this._options.count; B++) {
                                var T = Math.floor(v.data.length / this._options.count) * B,
                                    Z = v.data[T],
                                    O = g / this._options.count * B,
                                    F = f,
                                    R = O,
                                    q = F - Z;
                                p.line(O, F, R, q, this._options)
                            }
                        if (null !== (u = this._options) && void 0 !== u && u.left)
                            for (var W = 1; W <= this._options.count; W++) {
                                var G = Math.floor(v.data.length / this._options.count) * W,
                                    H = v.data[G],
                                    N = f / this._options.count * W,
                                    j = H,
                                    V = N;
                                p.line(0, N, j, V, this._options)
                            }
                        if (null !== (d = this._options) && void 0 !== d && d.center)
                            for (var L = 1; L <= this._options.count; L++) {
                                var z, U = Math.floor(v.data.length / this._options.count) * L,
                                    K = v.data[U],
                                    Q = g / this._options.count * L,
                                    Y = f / 2,
                                    X = Q,
                                    $ = Y - K;
                                p.line(Q, Y, X, $, this._options), null !== (z = this._options) && void 0 !== z && z.mirroredY && (X = Q = g / this._options.count * L, $ = (Y = f / 2) + K, p.line(Q, Y, X, $, this._options))
                            }
                    }, t
                }(),
                Wt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t);
                        this._options = St({
                            count: 30,
                            rotate: 0,
                            diameter: a / 3,
                            frequencyBand: "mids"
                        }, this._options);
                        var s = i / 2,
                            l = a / 2,
                            c = 360 / this._options.count;
                        this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var u = 0; u < this._options.count; u++) {
                            var d, h = Math.floor(r.data.length / this._options.count) * u,
                                f = r.data[h],
                                g = o.toRadians(c * u + this._options.rotate),
                                p = null !== (d = this._options) && void 0 !== d && d.offset ? this._options.diameter - f / 2 : this._options.diameter,
                                v = this._options.diameter + f,
                                m = p / 2 * Math.cos(g) + s,
                                b = p / 2 * Math.sin(g) + l,
                                _ = v / 2 * Math.cos(g) + s,
                                y = v / 2 * Math.sin(g) + l;
                            o.line(m, b, _, y, this._options)
                        }
                    }, t
                }(),
                Gt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t);
                        this._options = St({
                            count: 40,
                            diameter: a / 3,
                            frequencyBand: "mids"
                        }, this._options);
                        var s = this._options.count / 4,
                            l = i / 2,
                            c = a / 2;
                        this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var u = 0; u < s; u++) {
                            var d = Math.floor(r.data.length / this._options.count) * u,
                                h = r.data[d],
                                f = this._options.diameter / s,
                                g = l - this._options.diameter / 2 + f * u,
                                p = c - this._options.diameter / 2;
                            o.line(g, p, g, p - h, this._options)
                        }
                        for (var v = 0; v < s; v++) {
                            var m = Math.floor(r.data.length / this._options.count) * (2 * v),
                                b = r.data[m],
                                _ = this._options.diameter / s,
                                y = l + this._options.diameter / 2,
                                E = c - this._options.diameter / 2 + _ * v;
                            o.line(y, E, y + b, E, this._options)
                        }
                        for (var I = 0; I < s; I++) {
                            var w = Math.floor(r.data.length / this._options.count) * (3 * I),
                                x = r.data[w],
                                C = this._options.diameter / s,
                                P = l - this._options.diameter / 2 + C * I,
                                M = c + this._options.diameter / 2;
                            o.line(P, M, P, M + x, this._options)
                        }
                        for (var S = 0; S < s; S++) {
                            var k = Math.floor(r.data.length / this._options.count) * (4 * S),
                                D = r.data[k],
                                A = this._options.diameter / s,
                                B = l - this._options.diameter / 2,
                                T = c - this._options.diameter / 2 + A * S;
                            o.line(B, T, B - D, T, this._options)
                        }
                    }, t
                }(),
                Ht = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new Dt(e),
                            r = new At(t);
                        this._options = St({
                            count: 20,
                            rotate: 0,
                            diameter: a / 3,
                            cubeHeight: 20,
                            frequencyBand: "mids",
                            gap: 5
                        }, this._options);
                        var s = i / 2,
                            l = a / 2,
                            c = 360 / this._options.count;
                        this._options.frequencyBand && r.setFrequencyBand(this._options.frequencyBand), r.scaleData(Math.min(i, a));
                        for (var u = 0; u < this._options.count; u++)
                            for (var d = Math.floor(r.data.length / this._options.count) * u, h = r.data[d], f = 0; f < h / this._options.cubeHeight; f++) {
                                var g = this._options.diameter + this._options.cubeHeight * f + this._options.gap,
                                    p = this._options.diameter + this._options.cubeHeight * (f + 1),
                                    v = o.toRadians(c * u + this._options.rotate + this._options.gap / 4),
                                    m = o.toRadians(c * (u + 1) + this._options.rotate),
                                    b = g / 2 * Math.cos(v) + s,
                                    _ = g / 2 * Math.sin(v) + l,
                                    y = g / 2 * Math.cos(m) + s,
                                    E = g / 2 * Math.sin(m) + l,
                                    I = p / 2 * Math.cos(v) + s,
                                    w = p / 2 * Math.sin(v) + l,
                                    x = p / 2 * Math.cos(m) + s,
                                    C = p / 2 * Math.sin(m) + l;
                                o.polygon([{
                                    x: b,
                                    y: _
                                }, {
                                    x: I,
                                    y: w
                                }, {
                                    x: x,
                                    y: C
                                }, {
                                    x: y,
                                    y: E
                                }], this._options)
                            }
                    }, t
                }(),
                Nt = function() {
                    function t(t) {
                        this._options = null != t ? t : {}
                    }
                    return t.prototype.draw = function(t, e) {
                        var n = e.canvas,
                            a = n.height,
                            i = n.width,
                            o = new At(t),
                            r = new Dt(e);
                        if (this._options = St({
                                count: 64,
                                frequencyBand: "mids"
                            }, this._options), this._options.frequencyBand && o.setFrequencyBand(this._options.frequencyBand), o.scaleData(Math.min(i, a)), this._options.mirroredX)
                            for (var s = 1, l = Math.ceil(o.data.length / 2); l < o.data.length; l++) o.data[l] = o.data[Math.ceil(o.data.length / 2) - s], s++;
                        if (this._options.top) {
                            for (var c = [{
                                    x: 0,
                                    y: 0
                                }], u = 0; u <= this._options.count; u++) {
                                var d = Math.floor(o.data.length / this._options.count) * u,
                                    h = o.data[d];
                                c.push({
                                    x: Math.floor(i / this._options.count) * u,
                                    y: h
                                })
                            }
                            c.push({
                                x: i,
                                y: 0
                            }), r.polygon(c, this._options)
                        }
                        if (this._options.right) {
                            for (var f = [{
                                    x: i,
                                    y: 0
                                }], g = 0; g <= this._options.count; g++) {
                                var p = Math.floor(o.data.length / this._options.count) * g,
                                    v = o.data[p];
                                f.push({
                                    x: i - v,
                                    y: Math.floor(i / this._options.count) * g
                                })
                            }
                            f.push({
                                x: i,
                                y: a
                            }), r.polygon(f, this._options)
                        }
                        if (this._options.bottom || !this._options.top && !this._options.right && !this._options.left && !this._options.center) {
                            for (var m = [{
                                    x: 0,
                                    y: a
                                }], b = 0; b <= this._options.count; b++) {
                                var _ = Math.floor(o.data.length / this._options.count) * b,
                                    y = o.data[_];
                                m.push({
                                    x: Math.floor(i / this._options.count) * b,
                                    y: a - y
                                })
                            }
                            m.push({
                                x: i,
                                y: a
                            }), r.polygon(m, this._options)
                        }
                        if (this._options.left) {
                            for (var E = [{
                                    x: 0,
                                    y: 0
                                }], I = 0; I <= this._options.count; I++) {
                                var w = Math.floor(o.data.length / this._options.count) * I,
                                    x = o.data[w];
                                E.push({
                                    x: x,
                                    y: Math.floor(i / this._options.count) * I
                                })
                            }
                            E.push({
                                x: 0,
                                y: a
                            }), r.polygon(E, this._options)
                        }
                        if (this._options.center) {
                            for (var C = [{
                                    x: 0,
                                    y: a / 2
                                }], P = 0; P <= this._options.count; P++) {
                                var M = Math.floor(o.data.length / this._options.count) * P,
                                    S = o.data[M];
                                C.push({
                                    x: Math.floor(i / this._options.count) * P,
                                    y: a / 2 - S
                                })
                            }
                            if (C.push({
                                    x: i,
                                    y: a / 2
                                }), r.polygon(C, this._options), this._options.mirroredY) {
                                C = [{
                                    x: 0,
                                    y: a / 2
                                }];
                                for (var k = 0; k <= this._options.count; k++) {
                                    var D = Math.floor(o.data.length / this._options.count) * k,
                                        A = o.data[D];
                                    C.push({
                                        x: Math.floor(i / this._options.count) * k,
                                        y: a / 2 + A
                                    })
                                }
                                C.push({
                                    x: i,
                                    y: a / 2
                                }), r.polygon(C, this._options)
                            }
                        }
                    }, t
                }(),
                jt = function() {
                    function t(t) {
                        this.animations = {
                            Arcs: Bt,
                            MagicArcs: Tt,
                            Circles: Zt,
                            Cubes: Ot,
                            Flower: Ft,
                            Glob: Rt,
                            Lines: qt,
                            Shine: Wt,
                            Square: Gt,
                            Turntable: Ht,
                            Wave: Nt
                        }, this._activeAnimations = [], this._canvasElement = t, this._canvasContext = this._canvasElement.getContext("2d"), this.setPreset(3);
                        this._canvasContext.scale(1, 1)
                    }
                    var e = t.prototype;
                    return e.drawFrame = function(t) {
                        var e = this;
                        this._canvasContext.clearRect(0, 0, this._canvasContext.canvas.width, this._canvasContext.canvas.height), this._activeAnimations.forEach((function(n) {
                            n.draw(t.frequencyData, e._canvasContext)
                        }))
                    }, e.addAnimation = function(t) {
                        this._activeAnimations.push(t)
                    }, e.clearAnimations = function() {
                        this._activeAnimations = []
                    }, e.setPreset = function(t) {
                        this.clearAnimations(), 0 === t && (this.addAnimation(new this.animations.Wave({
                            lineColor: "white",
                            lineWidth: 10,
                            fillColor: {
                                gradient: ["#FF9A8B", "#FF6A88", "#FF99AC"]
                            },
                            mirroredX: !0,
                            count: 5,
                            rounded: !0,
                            frequencyBand: "base"
                        })), this.addAnimation(new this.animations.Wave({
                            lineColor: "white",
                            lineWidth: 10,
                            fillColor: {
                                gradient: ["#FA8BFF", "#2BD2FF", "#2BFF88"]
                            },
                            mirroredX: !0,
                            count: 60,
                            rounded: !0
                        })), this.addAnimation(new this.animations.Wave({
                            lineColor: "white",
                            lineWidth: 10,
                            fillColor: {
                                gradient: ["#FBDA61", "#FF5ACD"]
                            },
                            mirroredX: !0,
                            count: 25,
                            rounded: !0,
                            frequencyBand: "highs"
                        }))), 1 === t && (this.addAnimation(new this.animations.Cubes({
                            bottom: !0,
                            count: 60,
                            cubeHeight: 5,
                            fillColor: {
                                gradient: ["#FAD961", "#F76B1C"]
                            },
                            lineColor: "rgba(0,0,0,0)",
                            radius: 10
                        })), this.addAnimation(new this.animations.Cubes({
                            top: !0,
                            count: 60,
                            cubeHeight: 5,
                            fillColor: {
                                gradient: ["#FAD961", "#F76B1C"]
                            },
                            lineColor: "rgba(0,0,0,0)",
                            radius: 10
                        })), this.addAnimation(new this.animations.Circles({
                            lineColor: {
                                gradient: ["#FAD961", "#FAD961", "#F76B1C"],
                                rotate: 90
                            },
                            lineWidth: 4,
                            diameter: 20,
                            count: 10,
                            frequencyBand: "base"
                        }))), 2 === t && (this.addAnimation(new this.animations.Glob({
                            fillColor: {
                                gradient: ["#FAD961", "#FAD961", "#F76B1C"],
                                rotate: 45
                            },
                            lineColor: "white",
                            glow: {
                                strength: 15,
                                color: "#FAD961"
                            },
                            lineWidth: 5,
                            count: 25
                        })), this.addAnimation(new this.animations.Shine({
                            lineColor: "#FAD961",
                            glow: {
                                strength: 15,
                                color: "#FAD961"
                            },
                            diameter: 100,
                            lineWidth: 5
                        }))), 3 === t && this.addAnimation(new this.animations.MagicArcs({
                            lineColor: {
                                gradient: ["#9EF3B5", "#9EF3B5", "#31C2FD", "#31C2FD", "#9EF3B5"]
                            },
                            fillColor: {
                                gradient: ["#882130", "#DE1B34", "#882130", "#882130", "#DE1B34", "#882130"],
                                rotate: 45
                            },
                            circleStrokeColor: "#808080"
                        })), 4 === t && this.addAnimation(new this.animations.MagicArcs({
                            lineColor: {
                                gradient: ["#F1F2F3", "#F1F2F3"]
                            },
                            fillColor: {
                                gradient: ["#B1B2B3", "#B1B2B3", "#B1B2B3"],
                                rotate: 45
                            },
                            count: 6,
                            lineWidth: 1,
                            diameterDivisor: 4,
                            playAngle: 20,
                            frequencyBand: "mids"
                        }))
                    }, t
                }(),
                Vt = function(t) {
                    var e = t.browser,
                        n = t.playerOrTabId,
                        i = t.maxHeight,
                        o = t.processingEnabled,
                        r = (0, a.useRef)(null),
                        s = (0, a.useRef)((new Date).getTime()),
                        l = ((0, a.useRef)(null), 50),
                        c = (0, a.useRef)(null),
                        u = function(t) {
                            c ? t ? 0 !== Object.keys(t).length ? c.current.drawFrame(t) : console.log("drawFrame analyserData length is 0") : console.log("drawFrame analyserData is undefined") : console.log("drawFrame waveRef is undefined")
                        },
                        d = function t() {
                            try {
                                var a = function(e) {
                                        if (i) return e;
                                        window.requestAnimationFrame(t)
                                    },
                                    i = !1,
                                    o = (new Date).getTime(),
                                    r = o - s.current,
                                    c = function() {
                                        if (r > l) {
                                            if (s.current = o - r % l, !n) return void(i = !0);
                                            var t = kt((function() {
                                                return Promise.resolve(C.GW.getInstance().getBackgroundController(e).getAnalyserData(n, n)).then((function(t) {
                                                    u(t)
                                                }))
                                            }), (function() {}));
                                            if (t && t.then) return t.then((function() {}))
                                        }
                                    }();
                                return Promise.resolve(c && c.then ? c.then(a) : a(c))
                            } catch (d) {
                                return Promise.reject(d)
                            }
                        },
                        h = function t() {
                            try {
                                var a = function(e) {
                                        if (i) return e;
                                        window.requestAnimationFrame(t)
                                    },
                                    i = !1,
                                    o = (new Date).getTime(),
                                    r = o - s.current,
                                    c = function() {
                                        if (r > l) return s.current = o - r % l,
                                            function() {
                                                if (void 0 !== e) {
                                                    if (!n) return void(i = !0);
                                                    var t = kt((function() {
                                                        return Promise.resolve(C.GW.getInstance().getBackgroundController(e).getAnalyserData(n, n)).then((function(t) {
                                                            u(t)
                                                        }))
                                                    }), (function() {}));
                                                    if (t && t.then) return t.then((function() {}))
                                                } else {
                                                    var a = kt((function() {
                                                        return Promise.resolve(C.GW.getInstance().getBackgroundController(e).getAnalyserData(-1, n)).then((function(t) {
                                                            u(t)
                                                        }))
                                                    }), (function() {}));
                                                    if (a && a.then) return a.then((function() {}))
                                                }
                                            }()
                                    }();
                                return Promise.resolve(c && c.then ? c.then(a) : a(c))
                            } catch (d) {
                                return Promise.reject(d)
                            }
                        };
                    return (0, a.useEffect)((function() {
                        return c && c.current && (o ? c.current.setPreset(3) : c.current.setPreset(4)),
                            function() {}
                    }), [o]), (0, a.useEffect)((function() {
                        return c.current = new jt(r.current),
                            function() {
                                try {
                                    var t = function() {
                                        if (void 0 !== e) {
                                            var t = void d();
                                            if (t && t.then) return t.then((function() {}))
                                        } else h()
                                    }();
                                    Promise.resolve(t && t.then ? t.then((function() {})) : void 0)
                                } catch (n) {
                                    return Promise.reject(n)
                                }
                            }(),
                            function() {}
                    }), []), a.createElement("canvas", {
                        ref: r,
                        width: "1000",
                        height: "500",
                        style: {
                            backgroundColor: "#212223",
                            width: "100%",
                            height: "100%",
                            maxHeight: i
                        }
                    })
                },
                Lt = function(t) {
                    var e = t.browser,
                        n = t.playerOrTabId,
                        i = t.processingEnabled;
                    return a.createElement(Vt, {
                        browser: e,
                        playerOrTabId: n,
                        type: "bars",
                        maxHeight: "300px",
                        processingEnabled: i
                    })
                };

            function zt(t) {
                this.ctx = t, this.mainColor = "black"
            }
            zt.prototype = {
                __toRadians__: function(t) {
                    return t * Math.PI / 180
                },
                __rotatePoint__: function(t, e, n) {
                    var a = t[0],
                        i = t[1],
                        o = e[0],
                        r = e[1],
                        s = this.__toRadians__(n);
                    return [Math.cos(s) * (a - o) - Math.sin(s) * (i - r) + o, Math.sin(s) * (a - o) + Math.cos(s) * (i - r) + r]
                },
                mutateData: function(t, e, n) {
                    if (void 0 === n && (n = null), "mirror" === e) {
                        for (var a = [], i = 0; i < t.length; i += 2) a.push(t[i]);
                        return a = [].concat(a, a.reverse())
                    }
                    if ("shrink" === e) {
                        n < 1 && (n = t.length * n);
                        for (var o = [], r = Math.floor(t.length / n), s = 1; s <= n; s++) {
                            var l = t.slice(s * r, s * r + r),
                                c = l[Math.floor(l.length / 2)];
                            o.push(c)
                        }
                        return o
                    }
                    if ("split" === e) {
                        for (var u = Math.floor(t.length / n), d = [], h = [], f = 0, g = 0; g <= u * n; g++) f === u && (d.push(h), h = [], f = 0), h.push(t[g]), f++;
                        return d
                    }
                    if ("scale" === e) {
                        var p = n / 255;
                        return n <= 3 && n >= 0 && (p = n), t.map((function(t) {
                            return t * p
                        }))
                    }
                    if ("organize" === e) {
                        var v = {};
                        return v.base = t.slice(60, 120), v.vocals = t.slice(120, 255), v.mids = t.slice(255, 2e3), v
                    }
                    if ("reverb" === e) {
                        var m = [];
                        return t.forEach((function(e, n) {
                            m.push(e - (t[n + 1] || 0))
                        })), m
                    }
                    if ("amp" === e) {
                        var b = [];
                        return t.forEach((function(t) {
                            b.push(t * (n + 1))
                        })), b
                    }
                    if ("min" === e) {
                        var _ = [];
                        return t.forEach((function(t) {
                            t < n && (t = n), _.push(t)
                        })), _
                    }
                },
                getPoints: function(t, e, n, a, i, o) {
                    var r = n[0],
                        s = n[1];
                    void 0 === o && (o = {});
                    var l = o,
                        c = l.offset,
                        u = void 0 === c ? 0 : c,
                        d = l.rotate,
                        h = void 0 === d ? 0 : d,
                        f = l.customOrigin,
                        g = void 0 === f ? [] : f,
                        p = {
                            start: [],
                            end: []
                        };
                    if ("circle" === t) {
                        for (var v = 360 / a, m = this.__toRadians__(v), b = e / 2, _ = 1; _ <= a; _++) {
                            var y = m * _,
                                E = i[_ - 1],
                                I = i[_ - 1] * (u / 100),
                                w = r + (b - I) * Math.cos(y),
                                x = s + (b - I) * Math.sin(y),
                                C = this.__rotatePoint__([w, x], [r, s], h);
                            p.start.push(C), w = r + (b - I + E) * Math.cos(y), x = s + (b - I + E) * Math.sin(y);
                            var P = this.__rotatePoint__([w, x], [r, s], h);
                            p.end.push(P)
                        }
                        return p
                    }
                    if ("line" === t) {
                        var M = e / a;
                        r = g[0] || r, s = g[1] || s;
                        for (var S = 0; S <= a; S++) {
                            var k = h,
                                D = i[S] * (u / 100),
                                A = this.__rotatePoint__([r + S * M, s - D], [r, s], k);
                            p.start.push(A);
                            var B = this.__rotatePoint__([r + S * M, s + i[S] - D], [r, s], k);
                            p.end.push(B)
                        }
                        return p
                    }
                },
                drawCircle: function(t, e, n) {
                    var a = t[0],
                        i = t[1];
                    void 0 === n && (n = {});
                    var o = n,
                        r = o.color,
                        s = o.lineColor,
                        l = void 0 === s ? this.ctx.strokeStyle : s;
                    this.ctx.beginPath(), this.ctx.arc(a, i, e / 2, 0, 2 * Math.PI), this.ctx.strokeStyle = l, this.ctx.stroke(), this.ctx.fillStyle = r, r && this.ctx.fill()
                },
                drawOval: function(t, e, n, a) {
                    var i = t[0],
                        o = t[1];
                    void 0 === a && (a = {});
                    var r = a,
                        s = r.rotation,
                        l = void 0 === s ? 0 : s,
                        c = r.color,
                        u = r.lineColor,
                        d = void 0 === u ? this.ctx.strokeStyle : u;
                    l && (l = this.__toRadians__(l)), this.ctx.beginPath(), this.ctx.ellipse(i, o, n, e, l, 0, 2 * Math.PI), this.ctx.strokeStyle = d, this.ctx.stroke(), this.ctx.fillStyle = c, c && this.ctx.fill()
                },
                drawSquare: function(t, e, n) {
                    var a = t[0],
                        i = t[1];
                    void 0 === n && (n = {}), this.drawRectangle([a, i], e, e, n)
                },
                drawRectangle: function(t, e, n, a) {
                    var i = t[0],
                        o = t[1];
                    void 0 === a && (a = {});
                    var r = a,
                        s = r.color,
                        l = r.lineColor,
                        c = void 0 === l ? this.ctx.strokeStyle : l,
                        u = r.radius,
                        d = void 0 === u ? 0 : u,
                        h = r.rotate,
                        f = void 0 === h ? 0 : h;
                    this.ctx.beginPath(), this.ctx.moveTo(i + d, o);
                    var g = this.__rotatePoint__([i + n, o], [i, o], f),
                        p = this.__rotatePoint__([i + n, o + e], [i, o], f);
                    this.ctx.arcTo(g[0], g[1], p[0], p[1], d);
                    var v = this.__rotatePoint__([i + n, o + e], [i, o], f),
                        m = this.__rotatePoint__([i, o + e], [i, o], f);
                    this.ctx.arcTo(v[0], v[1], m[0], m[1], d);
                    var b = this.__rotatePoint__([i, o + e], [i, o], f),
                        _ = this.__rotatePoint__([i, o], [i, o], f);
                    this.ctx.arcTo(b[0], b[1], _[0], _[1], d);
                    var y = this.__rotatePoint__([i, o], [i, o], f),
                        E = this.__rotatePoint__([i + n, o], [i, o], f);
                    this.ctx.arcTo(y[0], y[1], E[0], E[1], d), this.ctx.closePath(), this.ctx.strokeStyle = c, this.ctx.stroke(), this.ctx.fillStyle = s, s && this.ctx.fill()
                },
                drawLine: function(t, e, n) {
                    var a = t[0],
                        i = t[1],
                        o = e[0],
                        r = e[1];
                    void 0 === n && (n = {});
                    var s = n.lineColor,
                        l = void 0 === s ? this.ctx.strokeStyle : s;
                    this.ctx.beginPath(), this.ctx.moveTo(a, i), this.ctx.lineTo(o, r), this.ctx.strokeStyle = l, this.ctx.stroke()
                },
                drawPolygon: function(t, e) {
                    void 0 === e && (e = {});
                    var n = e,
                        a = n.color,
                        i = n.lineColor,
                        o = void 0 === i ? this.ctx.strokeStyle : i,
                        r = n.radius,
                        s = void 0 === r ? 0 : r,
                        l = n.close,
                        c = void 0 !== l && l;

                    function u(t, e, n, a, i, o) {
                        var r = Math.sqrt(Math.pow(n - t, 2) + Math.pow(a - e, 2)),
                            s = o ? i / r : (r - i) / r;
                        return [t + s * (n - t), e + s * (a - e)]
                    }
                    s > 0 && (t = function(t, e) {
                        for (var n = t.length, a = new Array(n), i = 0; i < n; i++) {
                            var o = i - 1,
                                r = i + 1;
                            o < 0 && (o = n - 1), r === n && (r = 0);
                            var s = t[o],
                                l = t[i],
                                c = t[r],
                                d = u(s[0], s[1], l[0], l[1], e, !1),
                                h = u(l[0], l[1], c[0], c[1], e, !0);
                            a[i] = [d[0], d[1], l[0], l[1], h[0], h[1]]
                        }
                        return a
                    }(t, s));
                    var d, h, f = t.length;
                    for (d = 0; d < f; d++) h = t[d], 0 === d ? (this.ctx.beginPath(), this.ctx.moveTo(h[0], h[1])) : this.ctx.lineTo(h[0], h[1]), s > 0 && this.ctx.quadraticCurveTo(h[2], h[3], h[4], h[5]);
                    c && this.ctx.closePath(), this.ctx.strokeStyle = o, this.ctx.stroke(), this.ctx.fillStyle = a, a && this.ctx.fill()
                }
            };
            var Ut = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a);
                    e = l.mutateData(e, "split", 4)[0], e = l.mutateData(e, "scale", i);
                    var c = l.getPoints("line", o, [0, i], e.length, e, {
                        offset: 100
                    });
                    c.start = c.start.slice(0, c.end.length - 1), c.start.push([o, i]), c.start.push([0, i]), l.drawPolygon(c.start, {
                        lineColor: s[0],
                        color: s[1],
                        radius: .008 * i
                    })
                },
                Kt = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = t.w / 2, r = i / 2, s = i / 4, l = (i / 2 - s) / 255, c = 360 / 512 * Math.PI / 180, u = 1; u <= 512; u++) {
                        var d = e[600 % u];
                        d *= l;
                        var h = ++u * c,
                            f = o + s * Math.cos(h),
                            g = r + s * Math.sin(h);
                        a.moveTo(f, g);
                        var p = o + (s + d) * Math.cos(h),
                            v = r + (s + d) * Math.sin(h);
                        a.lineTo(p, v)
                    }
                    a.stroke(), n.colors[1] && (a.arc(o, r, .9 * s, 0, 2 * Math.PI), a.fillStyle = n.colors[1], a.fill())
                },
                Qt = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w / 2,
                        r = i / 2,
                        s = (i - 10) / 2,
                        l = (s - s / 5) / 255,
                        c = 2.4 * Math.PI / 180;
                    a.arc(o, r, s, 0, 2 * Math.PI, !0);
                    var u = o + (s - e[0] * l) * Math.cos(0),
                        d = r + (s - e[0] * l) * Math.sin(0);
                    a.moveTo(u, d);
                    for (var h = 0, f = 0; f < 150; f++) {
                        h += 1, f >= 75 && (h -= 2);
                        var g = e[h],
                            p = f * c,
                            v = o + (s - (g *= l)) * Math.cos(p),
                            m = r + (s - g) * Math.sin(p);
                        a.lineTo(v, m), a.arc(v, m, 2, 0, 2 * Math.PI)
                    }
                    a.lineTo(u, d), a.stroke(), a.fillStyle = n.colors[1] || "#fff0", a.fill()
                },
                Yt = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 255, r = t.w / 64, s = Math.floor(64 / n.colors.length), l = 1; l <= 64; l++) {
                        var c = e[l];
                        c *= o;
                        var u = r * l;
                        if (a.moveTo(u, i), a.lineTo(u, i - c), l % s == 0) {
                            var d = l / s - 1;
                            a.strokeStyle = n.colors[d], a.stroke(), a.beginPath()
                        }
                    }
                },
                Xt = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 255, r = t.w / 128, s = Math.floor(128 / n.colors.length), l = 1; l <= 128; l++) {
                        var c = e[l];
                        c += 5;
                        var u = r * l,
                            d = i / 2 + (c *= o) / 2;
                        if (a.moveTo(u, d), a.lineTo(u, d - c), l % s == 0) {
                            var h = l / s - 1;
                            a.strokeStyle = n.colors[h], a.stroke(), a.beginPath()
                        }
                    }
                },
                $t = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a);
                    e = l.mutateData(e, "organize").mids, e = l.mutateData(e, "split", 2)[0], e = l.mutateData(e, "shrink", 100), e = l.mutateData(e, "mirror"), e = l.mutateData(e, "scale", i), e = l.mutateData(e, "amp", .75);
                    var c = l.getPoints("line", o, [0, i / 2], e.length, e, {
                        offset: 50
                    });
                    c.start.forEach((function(t, e) {
                        l.drawLine(t, c.end[e], {
                            lineColor: s[0]
                        }), l.drawCircle(t, .01 * i, {
                            color: s[1] || s[0]
                        }), l.drawCircle(c.end[e], .01 * i, {
                            color: s[1] || s[0]
                        })
                    }))
                },
                Jt = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 4, r = o / 2, s = t.w / 2, l = i / 2, c = (o - r) / 255, u = 2.8125 * Math.PI / 180, d = Math.floor(128 / n.colors.length), h = 1; h <= 128; h++) {
                        var f = (e[h] + 5) * c,
                            g = h * u,
                            p = s + (o - (f - r)) * Math.cos(g),
                            v = l + (o - (f - r)) * Math.sin(g);
                        a.moveTo(p, v);
                        var m = s + (o + f) * Math.cos(g),
                            b = l + (o + f) * Math.sin(g);
                        if (a.lineTo(m, b), h % d == 0) {
                            var _ = h / d - 1;
                            a.strokeStyle = n.colors[_], a.stroke(), a.beginPath()
                        }
                    }
                    a.stroke()
                },
                te = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 4, r = t.w / 2, s = i / 2, l = o / 255, c = 360 / 56 * Math.PI / 180, u = 1; u <= 56; u++) {
                        var d = e[u] * l,
                            h = u * c,
                            f = r + (o - d / 2) * Math.cos(h),
                            g = s + (o - d / 2) * Math.sin(h);
                        a.moveTo(f, g);
                        var p = r + (o + d) * Math.cos(h),
                            v = s + (o + d) * Math.sin(h);
                        a.lineTo(p, v);
                        var m = r + (o + d) * Math.cos(h + c),
                            b = s + (o + d) * Math.sin(h + c);
                        a.lineTo(m, b);
                        var _ = r + (o - d / 2) * Math.cos(h + c),
                            y = s + (o - d / 2) * Math.sin(h + c);
                        a.lineTo(_, y), a.lineTo(f, g)
                    }
                    n.colors[1] && (a.fillStyle = n.colors[1], a.fill()), a.stroke()
                },
                ee = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 255, r = t.w / 64, s = 0; s < 64; s++) {
                        var l = e[s];
                        l *= o;
                        var c = r * s;
                        a.rect(c, i, r, -l)
                    }
                    a.fillStyle = n.colors[1] || n.colors[0], a.stroke(), a.fill()
                },
                ne = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 255, r = t.w / 50, s = 0; s <= 50; s++) {
                        var l = e[s];
                        l *= o;
                        var c = r * s;
                        a.rect(c, i / 2 + l / 2, r, -l)
                    }
                    n.colors[1] && (a.fillStyle = n.colors[1], a.fill()), a.stroke()
                },
                ae = function(t) {
                    for (var e = t.data, n = t.options, a = t.ctx, i = t.h, o = i / 4, r = o / 4, s = t.w / 2, l = i / 2, c = (o - r - 35) / 255, u = 3 * Math.PI / 180, d = [], h = [], f = 1; f <= 120; f++) {
                        var g = e[200 % f] * c,
                            p = f * u,
                            v = s + (o - g + r) * Math.cos(p),
                            m = l + (o - g + r) * Math.sin(p);
                        a.moveTo(v, m), h.push({
                            x: v,
                            y: m
                        });
                        var b = s + (o + g + r) * Math.cos(p),
                            _ = l + (o + g + r) * Math.sin(p);
                        a.lineTo(b, _), d.push({
                            x: b,
                            y: _
                        })
                    }
                    for (var y in a.moveTo(d[0].x, d[0].y), d) y = d[y], a.lineTo(y.x, y.y);
                    a.closePath(), a.moveTo(h[0].x, h[0].y);
                    for (var E = h.length - 1; E >= 0; E++) E = h[E], a.lineTo(E.x, E.y);
                    for (var I in a.closePath(), n.colors[1] && (a.fillStyle = n.colors[1], a.fill()), a.stroke(), a.beginPath(), a.moveTo(h[0].x, h[0].y), h) I = h[I], a.lineTo(I.x, I.y);
                    a.closePath(), n.colors[2] && (a.fillStyle = n.colors[2], a.fill()), a.stroke()
                },
                ie = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = i / 4,
                        r = t.w / 2,
                        s = i / 2,
                        l = o / 255,
                        c = 3.6 * Math.PI / 180,
                        u = r + (o + 0) * Math.cos(0),
                        d = s + (o + 0) * Math.sin(0);
                    a.moveTo(u, d);
                    for (var h = 1; h <= 100; h++) {
                        var f = e[350 % h] * l,
                            g = h * c,
                            p = r + (o + f) * Math.cos(g),
                            v = s + (o + f) * Math.sin(g);
                        a.lineTo(p, v)
                    }
                    a.closePath(), a.stroke(), n.colors[1] && (a.fillStyle = n.colors[1], a.fill())
                },
                oe = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a),
                        c = i < o ? i : o;
                    (e = [(e = l.mutateData(e, "organize")).mids, e.vocals])[0] = l.mutateData(e[0], "scale", c / 4), e[1] = l.mutateData(e[1], "scale", c / 8), e[0] = l.mutateData(e[0], "shrink", .2), e[0] = l.mutateData(e[0], "split", 2)[0], e[0] = l.mutateData(e[0], "reverb"), e[1] = l.mutateData(e[1], "reverb");
                    var u = l.getPoints("circle", c / 2, [o / 2, i / 2], e[0].length, e[0]),
                        d = l.getPoints("circle", c / 4, [o / 2, i / 2], e[1].length, e[1]);
                    l.drawPolygon(u.end, {
                        close: !0,
                        radius: 4,
                        lineColor: s[0],
                        color: s[1]
                    }), l.drawPolygon(d.end, {
                        close: !0,
                        radius: 4,
                        lineColor: s[2],
                        color: s[3]
                    });
                    var h = (c / 4 + c / 2) / 2,
                        f = e[1] = l.mutateData(e[1], "scale", c / 4 - c / 2),
                        g = l.getPoints("circle", h, [o / 2, i / 2], e[1].length, f);
                    g.start.forEach((function(t, e) {
                        l.drawLine(t, g.end[e], {
                            lineColor: s[4] || s[2]
                        })
                    }))
                },
                re = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a),
                        c = i < o ? i : o;
                    (e = l.mutateData(e, "organize")).vocals = l.mutateData(e.vocals, "scale", c / 2 / 2), e.base = l.mutateData(e.base, "scale", c / 2 / 2);
                    var u = l.getPoints("circle", c / 2, [o / 2, i / 2], e.vocals.length, e.vocals),
                        d = l.getPoints("circle", c / 2, [o / 2, i / 2], e.vocals.length, e.vocals, {
                            offset: 100
                        }),
                        h = l.getPoints("circle", c / 2, [o / 2, i / 2], e.base.length, e.base, {
                            offset: 100
                        });
                    u.start.forEach((function(t, e) {
                        l.drawLine(t, u.end[e], {
                            lineColor: s[0]
                        })
                    })), l.drawPolygon(d.start, {
                        close: !0,
                        lineColor: s[1],
                        color: s[3],
                        radius: 5
                    }), l.drawPolygon(h.start, {
                        close: !0,
                        lineColor: s[2],
                        color: s[4],
                        radius: 5
                    })
                },
                se = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a);
                    e = l.mutateData(e, "organize").base, e = l.mutateData(e, "shrink", 20).slice(0, 19), e = l.mutateData(e, "scale", i);
                    var c = l.getPoints("line", o, [0, i], e.length, e),
                        u = o / 20 - 5,
                        d = 0;
                    c.start.forEach((function(t, n) {
                        for (var a = Math.ceil(e[n] / u), o = (i - i / u * 5) / u, r = Math.ceil(o / s.length), c = 1; c <= a; c++) {
                            var h = [t[0], t[1] - u * c - 5 * c];
                            l.drawSquare(h, u, {
                                color: s[d],
                                lineColor: "black"
                            }), c % r == 0 && ++d >= s.length && (d = s.length - 1)
                        }
                        d = 0
                    }))
                },
                le = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a);
                    e = l.mutateData(e, "organize").vocals, e = l.mutateData(e, "shrink", 10), e = l.mutateData(e, "scale", i), e = l.mutateData(e, "amp", 1);
                    var c = l.getPoints("line", o, [0, i / 2], e.length, e, {
                            offset: 50
                        }),
                        u = 0,
                        d = Math.ceil(e.length / s.length);
                    c.start.forEach((function(t, n) {
                        (n + 1) % d == 0 && u++, l.drawRectangle(t, e[n], o / e.length, {
                            color: s[u]
                        })
                    }))
                },
                ce = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a);
                    e = l.mutateData(e, "shrink", 300), e = l.mutateData(e, "scale", i / 2), e = l.mutateData(e, "split", 4).slice(0, 3);
                    var c = 0;
                    e.forEach((function(t) {
                        var e = l.getPoints("line", o, [0, i / 2], t.length, t);
                        l.drawPolygon(e.end, {
                            lineColor: s[c],
                            radius: .015 * i
                        });
                        var n = l.getPoints("line", o, [0, i / 2], t.length, t, {
                            offset: 100
                        });
                        l.drawPolygon(n.start, {
                            lineColor: s[c],
                            radius: .015 * i
                        }), c++
                    }))
                },
                ue = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a);
                    e = l.mutateData(e, "shrink", 200).slice(0, 120), e = l.mutateData(e, "mirror"), e = l.mutateData(e, "scale", i / 4 + i / 4 * .35);
                    var c = l.getPoints("circle", i / 2, [o / 2, i / 2], e.length, e, {
                        offset: 35,
                        rotate: 270
                    });
                    c.start.forEach((function(t, e) {
                        l.drawLine(t, c.end[e])
                    })), l.drawPolygon(c.start, {
                        close: !0
                    }), c.end.forEach((function(t, e) {
                        l.drawCircle(t, .01 * i, {
                            color: s[0]
                        })
                    }))
                },
                de = function(t) {
                    var e = t.data,
                        n = t.ctx,
                        a = t.h,
                        i = t.w,
                        o = new(0, t.Helper)(n);
                    e = o.mutateData(e, "shrink", 1 / 8), e = o.mutateData(e, "split", 2)[0], e = o.mutateData(e, "scale", a);
                    var r = o.getPoints("line", i, [0, a / 2], e.length, e, {
                            offset: 50
                        }),
                        s = null;
                    r.start.forEach((function(t, e) {
                        s && o.drawLine(s, t), o.drawLine(t, r.end[e]), s = r.end[e]
                    }))
                },
                he = function(t) {
                    var e = t.data,
                        n = t.options,
                        a = t.ctx,
                        i = t.h,
                        o = t.w,
                        r = t.Helper,
                        s = n.colors,
                        l = new r(a),
                        c = i < o ? i : o;
                    e = l.mutateData(e, "shrink", 100), e = l.mutateData(e, "split", 2)[0];
                    var u = e = l.mutateData(e, "scale", i / 4),
                        d = l.getPoints("circle", c / 2, [o / 2, i / 2], e.length, e);
                    l.drawPolygon(d.end, {
                        close: !0
                    }), d.start.forEach((function(t, e) {
                        l.drawLine(t, d.end[e])
                    })), e = l.mutateData(e, "scale", .7), d = l.getPoints("circle", c / 2, [o / 2, i / 2], e.length, e), l.drawPolygon(d.end, {
                        close: !0
                    }), e = l.mutateData(e, "scale", .3), d = l.getPoints("circle", c / 2, [o / 2, i / 2], e.length, e), l.drawPolygon(d.end, {
                        close: !0
                    }), l.drawCircle([o / 2, i / 2], c / 2, {
                        color: s[2]
                    }), u = l.mutateData(u, "scale", 1.4), (d = l.getPoints("circle", c / 2, [o / 2, i / 2], u.length, u)).end.forEach((function(t, e) {
                        l.drawCircle(t, .01 * c, {
                            color: s[1],
                            lineColor: s[1] || s[0]
                        })
                    }))
                },
                fe = function(t) {
                    var e = t.data,
                        n = t.ctx,
                        a = t.h,
                        i = t.w,
                        o = new(0, t.Helper)(n),
                        r = a < i ? a : i;
                    e = o.mutateData(e, "shrink", 200), e = o.mutateData(e, "split", 2)[0], e = o.mutateData(e, "scale", a / 2);
                    var s = o.getPoints("circle", r / 2, [i / 2, a / 2], e.length, e, {
                        offset: 50
                    });
                    o.drawPolygon(s.end, {
                        close: !0
                    }), o.drawPolygon(s.start, {
                        close: !0
                    });
                    for (var l = 0; l < s.start.length; l += 1) {
                        var c = s.start[l];
                        l++;
                        var u = s.end[l] || s.end[0];
                        o.drawLine(c, u), o.drawLine(u, s.start[l + 1] || s.start[0])
                    }
                },
                ge = function(t) {
                    for (var e = t.data, n = t.ctx, a = e.length, i = 0; i < a; i++) {
                        var o = e[i] / 256,
                            r = n.canvas.height * o,
                            s = n.canvas.height - r - 1,
                            l = n.canvas.width / a,
                            c = i / a * 360;
                        n.fillStyle = "hsl(" + c + ", 100%, 50%)", n.fillRect(i * l, s, l, r)
                    }
                };
            var pe = function(t) {
                    var e = t.browser,
                        n = t.type,
                        i = t.playerOrTabId,
                        o = t.maxHeight,
                        r = (0, a.useRef)(null),
                        s = (0, a.useRef)(0),
                        l = (0, a.useRef)((new Date).getTime()),
                        c = ((0, a.useRef)(null), 1e3 / 22),
                        u = function(t) {
                            r || r.current ? t ? 0 !== Object.keys(t).length ? (s.current = s.current + 1, function(t, e, n, a) {
                                if (void 0 === n && (n = {}), (n = St({}, n)).stroke || (n.stroke = 1), n.colors || (n.colors = ["#d92027", "#ff9234", "#ffcd3c", "#35d0ba"]), e) {
                                    var i = e.getContext("2d"),
                                        o = e.height,
                                        r = e.width;
                                    i.strokeStyle = n.colors[0], i.lineWidth = n.stroke;
                                    var s = {
                                            bars: Yt,
                                            "bars blocks": ee,
                                            "big bars": le,
                                            classic: ge,
                                            cubes: se,
                                            dualbars: Xt,
                                            "dualbars blocks": ne,
                                            fireworks: ue,
                                            flower: Jt,
                                            "flower blocks": te,
                                            orbs: $t,
                                            ring: Qt,
                                            rings: oe,
                                            "round wave": ie,
                                            shine: Kt,
                                            "shine rings": re,
                                            shockwave: ce,
                                            star: ae,
                                            static: de,
                                            stitches: fe,
                                            wave: Ut,
                                            web: he
                                        },
                                        l = {
                                            bars: 1,
                                            "bars blocks": 1,
                                            "big bars": 1,
                                            classic: 1,
                                            cubes: 1,
                                            dualbars: 1,
                                            "dualbars blocks": 1,
                                            fireworks: 1,
                                            flower: 1,
                                            "flower blocks": 1,
                                            ring: 1,
                                            rings: 1,
                                            "round layers": 1,
                                            "round wave": 1,
                                            orbs: 1,
                                            shine: 1,
                                            "shine rings": 1,
                                            shockwave: 1,
                                            star: 1,
                                            static: 1,
                                            stitches: 1,
                                            wave: 1,
                                            web: 1
                                        },
                                        c = {
                                            data: t,
                                            options: n,
                                            ctx: i,
                                            h: o,
                                            w: r,
                                            Helper: zt,
                                            canvasId: null
                                        };
                                    "string" == typeof n.type && (n.type = [n.type]), n.type.forEach((function(t) {
                                        a % l[t] == 0 && (i.clearRect(0, 0, r, o), i.fillStyle = "#212223", i.fillRect(0, 0, i.canvas.width, i.canvas.height), i.beginPath(), s[t](c))
                                    }))
                                } else console.log("canvas is undefined")
                            }(t.frequencyData, r.current, {
                                type: n
                            }, s.current)) : console.log("drawFrame analyserData length is 0") : console.log("drawFrame analyserData is undefined") : console.log("drawFrame canvasRef is undefined")
                        },
                        d = function t() {
                            try {
                                var n = function(e) {
                                        if (a) return e;
                                        window.requestAnimationFrame(t)
                                    },
                                    a = !1,
                                    o = (new Date).getTime(),
                                    r = o - l.current,
                                    s = function() {
                                        if (r > c) {
                                            if (l.current = o - r % c, !i) return void(a = !0);
                                            var t = kt((function() {
                                                return Promise.resolve(C.GW.getInstance().getBackgroundController(e).getAnalyserData(i, i)).then((function(t) {
                                                    u(t)
                                                }))
                                            }), (function() {}));
                                            if (t && t.then) return t.then((function() {}))
                                        }
                                    }();
                                return Promise.resolve(s && s.then ? s.then(n) : n(s))
                            } catch (d) {
                                return Promise.reject(d)
                            }
                        },
                        h = function t() {
                            try {
                                var n = function(e) {
                                        if (a) return e;
                                        window.requestAnimationFrame(t)
                                    },
                                    a = !1,
                                    o = (new Date).getTime(),
                                    r = o - l.current,
                                    s = function() {
                                        if (r > c) return l.current = o - r % c,
                                            function() {
                                                if (void 0 !== e) {
                                                    if (!i) return void(a = !0);
                                                    var t = kt((function() {
                                                        return Promise.resolve(C.GW.getInstance().getBackgroundController(e).getAnalyserData(i, i)).then((function(t) {
                                                            u(t)
                                                        }))
                                                    }), (function() {}));
                                                    if (t && t.then) return t.then((function() {}))
                                                } else {
                                                    var n = kt((function() {
                                                        return Promise.resolve(C.GW.getInstance().getBackgroundController(e).getAnalyserData(-1, i)).then((function(t) {
                                                            u(t)
                                                        }))
                                                    }), (function() {}));
                                                    if (n && n.then) return n.then((function() {}))
                                                }
                                            }()
                                    }();
                                return Promise.resolve(s && s.then ? s.then(n) : n(s))
                            } catch (d) {
                                return Promise.reject(d)
                            }
                        };
                    return (0, a.useEffect)((function() {
                        return function() {
                                try {
                                    var t = function() {
                                        if (void 0 !== e) {
                                            var t = void d();
                                            if (t && t.then) return t.then((function() {}))
                                        } else h()
                                    }();
                                    Promise.resolve(t && t.then ? t.then((function() {})) : void 0)
                                } catch (n) {
                                    return Promise.reject(n)
                                }
                            }(),
                            function() {}
                    }), []), a.createElement("canvas", {
                        ref: r,
                        style: {
                            backgroundColor: "#212223",
                            width: "100%",
                            height: "100%",
                            maxHeight: o
                        }
                    })
                },
                ve = function(t) {
                    var e = t.browser,
                        n = t.playerOrTabId;
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(pe, {
                        browser: e,
                        playerOrTabId: n
                    })
                },
                me = {
                    knobX: 84,
                    knobY: 84.5,
                    svg: '\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 200 200" version="1.1">\n  \x3c!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch --\x3e\n  <desc>Created with Sketch.</desc>\n  <defs>\n      <linearGradient x1="50%" y1="50%" x2="50%" y2="100%" id="aef09add-5e78-f6d8-fa5d-05a5a7a5952a">\n          <stop stop-color="#696363" offset="0%"/>\n          <stop stop-color="#353131" offset="100%"/>\n      </linearGradient>\n      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="21a20885-4bb2-1cc0-f500-9d034ea44cdb">\n          <stop stop-color="#747171" offset="0%"/>\n          <stop stop-color="#858383" offset="0%"/>\n          <stop stop-color="#939191" offset="6.74580791%"/>\n          <stop stop-color="#939191" offset="6.74580791%"/>\n          <stop stop-color="#EDEDED" offset="50.0553592%"/>\n          <stop stop-color="#676565" offset="100%"/>\n      </linearGradient>\n      \n      <filter x="-14.6%" y="-20.7%" width="129.3%" height="141.4%" filterUnits="objectBoundingBox" id="90b677ed-e5c3-914d-925f-adea9122bdbe">\n          <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"/>\n          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>\n          <feColorMatrix values="0 0 0 0 0.639215686   0 0 0 0 0.784313725   0 0 0 0 0.956862745  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"/>\n      </filter>\n  </defs>\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="s5">\n          <g id="s5outer" fill-rule="nonzero" fill="url(#aef09add-5e78-f6d8-fa5d-05a5a7a5952a)">\n              <g id="path-2-link">\n                  <circle id="path-2" cx="100" cy="100" r="100"/>\n              </g>\n          </g>\n          <g id="knob" transform="translate(16.000000, 15.000000)">\n              <g id="s5inneroutercircle" transform="translate(0.000000, 1.000000)" stroke-width="6" stroke="#3D3D3D" fill="url(#21a20885-4bb2-1cc0-f500-9d034ea44cdb)">\n                  <g id="path-5-link">\n                      <circle id="path-5" cx="84" cy="84" r="84"/>\n                  </g>\n              </g>\n              <g id="s5innercircle" transform="translate(44.000000, 45.000000)" fill-rule="nonzero" fill="#3D3D3D">\n                  <g id="path-7-link">\n                      <circle id="path-7" cx="40" cy="40" r="40"/>\n                  </g>\n              </g>\n              <path d="M84.5,-6.28031714e-07 L101,61.0983616 C95.7956227,62.6405898 90.2956227,63.4029374 84.5,63.3854044 C78.7043773,63.3678715 73.2043773,62.6055239 68,61.0983616 L84.5,-6.28031714e-07 Z" id="s5marker" fill="#3D3D3D" fill-rule="nonzero" transform="translate(84.500000, 31.692850) scale(-1, 1) rotate(-180.000000) translate(-84.500000, -31.692850) "/>\n          </g>\n          <g id="s5label" transform="translate(80.000000, 84.000000)" fill="#A3C8F4">\n              <g id="s5labeltext">\n                  <g id="100">\n                      <text id="b1560b49-9d56-9a7f-a123-317732728a3e" font-family="Helvetica" font-size="24" font-weight="normal" class="text-3" filter="url(#90b677ed-e5c3-914d-925f-adea9122bdbe)">\n          <tspan x="0.72851562" y="23">100</tspan>\n      </text>\n                      <text id="03696ac6-c13b-7a28-b5ff-91dcbe4859fd" font-family="Helvetica" font-size="24" font-weight="normal" class="text-3">\n          <tspan x="0.72851562" y="23">100</tspan>\n      </text>\n                      <text id="158c5fa5-ac26-6dda-8a27-0ee1ae843905" font-family="Helvetica" font-size="24" font-weight="normal" class="text-3">\n          <tspan x="0.72851562" y="23">100</tspan>\n      </text>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </g>\n</svg>\n    ',
                    updateAttributes: [{
                        element: "#s5labeltext text tspan",
                        content: function(t, e) {
                            return e.toFixed(0)
                        },
                        attrs: [{
                            name: "text-anchor",
                            value: function(t, e) {
                                return "middle"
                            }
                        }, {
                            name: "x",
                            value: function(t, e) {
                                return "21"
                            }
                        }]
                    }]
                },
                be = function(t) {
                    var e = t.title,
                        n = t.min,
                        o = t.max,
                        l = t.defaultValue,
                        c = t.value,
                        u = t.handleChange,
                        d = t.sizeInPixels,
                        h = {
                            width: d + "px",
                            height: d + "px"
                        };
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(r.Z, {
                        sx: {
                            border: "0px dashed #808080",
                            p: 1
                        }
                    }, a.createElement(s.ZP, {
                        container: !0,
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 0,
                        sx: {
                            border: "1 px solid red"
                        }
                    }, a.createElement(s.ZP, {
                        item: !0,
                        sx: {
                            border: "0px solid #808080",
                            width: "100%"
                        }
                    }, a.createElement(i.Z, {
                        align: "center",
                        variant: "subtitle1",
                        gutterBottom: !0,
                        sx: {
                            border: "0px solid #808080",
                            width: "100%",
                            textTransform: "uppercase"
                        }
                    }, e)), a.createElement(s.ZP, {
                        item: !0
                    }, a.createElement(N.Knob, {
                        style: h,
                        skin: me,
                        preciseMode: !1,
                        value: c,
                        defaultValue: l,
                        min: n,
                        max: o,
                        onChange: function(t) {
                            u(t)
                        },
                        clampMin: 50,
                        clampMax: 310,
                        rotateDegrees: 180
                    }))))
                },
                _e = function() {
                    var t = (0, a.useState)(3),
                        e = t[0],
                        n = t[1];
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(be, {
                        sizeInPixels: 140,
                        title: "Volume",
                        min: -20,
                        max: 20,
                        defaultValue: 3,
                        value: e,
                        handleChange: function(t) {
                            n(t)
                        }
                    })
                },
                ye = function() {
                    var t = (0, a.useState)(75),
                        e = t[0],
                        n = t[1];
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(be, {
                        title: "Virtual Surround",
                        sizeInPixels: 190,
                        min: 0,
                        max: 100,
                        defaultValue: 75,
                        value: e,
                        handleChange: function(t) {
                            n(t)
                        }
                    })
                },
                Ee = function() {
                    var t = (0, a.useState)(50),
                        e = t[0],
                        n = t[1];
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(be, {
                        sizeInPixels: 140,
                        title: "Reverb",
                        min: 0,
                        max: 100,
                        defaultValue: 50,
                        value: e,
                        handleChange: function(t) {
                            n(t)
                        }
                    })
                },
                Ie = function(t) {
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(s.ZP, {
                        container: !0,
                        direction: "row",
                        justifyContent: "space-around",
                        alignItems: "flex-end",
                        spacing: 0,
                        sx: {
                            backgroundColor: "inherit",
                            border: "0px solid red",
                            width: "100%"
                        }
                    }, a.createElement(s.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 4,
                        sx: {
                            backgroundColor: "inherit",
                            border: "0px solid red"
                        }
                    }, a.createElement(_e, null)), a.createElement(s.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 4,
                        sx: {
                            backgroundColor: "inherit",
                            border: "0px solid red"
                        }
                    }, a.createElement(ye, null)), a.createElement(s.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 4,
                        sx: {
                            backgroundColor: "inherit",
                            border: "0px solid red"
                        }
                    }, a.createElement(Ee, null)))
                },
                we = (new Date).getTime(),
                xe = 1e3 / 22,
                Ce = null,
                Pe = null,
                Me = null,
                Se = function t() {
                    try {
                        var e = function(e) {
                                if (n) return e;
                                window.requestAnimationFrame(t)
                            },
                            n = !1,
                            a = (new Date).getTime(),
                            i = a - we,
                            o = function() {
                                if (i > xe) {
                                    if (we = a - i % xe, !Pe) return void(n = !0);
                                    var t = kt((function() {
                                        return Promise.resolve(C.GW.getInstance().getBackgroundController(Me).getAnalyserData(Pe, Pe)).then((function(t) {
                                            De(Ce, t)
                                        }))
                                    }), (function() {}));
                                    if (t && t.then) return t.then((function() {}))
                                }
                            }();
                        return Promise.resolve(o && o.then ? o.then(e) : e(o))
                    } catch (r) {
                        return Promise.reject(r)
                    }
                },
                ke = function t() {
                    try {
                        var e = function(e) {
                                if (n) return e;
                                window.requestAnimationFrame(t)
                            },
                            n = !1,
                            a = (new Date).getTime(),
                            i = a - we,
                            o = function() {
                                if (i > xe) return we = a - i % xe,
                                    function() {
                                        if (void 0 !== Me) {
                                            if (!Pe) return void(n = !0);
                                            var t = kt((function() {
                                                return Promise.resolve(C.GW.getInstance().getBackgroundController(Me).getAnalyserData(Pe, null !== Pe ? Pe : "website")).then((function(t) {
                                                    De(Ce, t)
                                                }))
                                            }), (function() {}));
                                            if (t && t.then) return t.then((function() {}))
                                        } else {
                                            var e = kt((function() {
                                                return Promise.resolve(C.GW.getInstance().getBackgroundController(Me).getAnalyserData(-1, "website")).then((function(t) {
                                                    De(Ce, t)
                                                }))
                                            }), (function() {}));
                                            if (e && e.then) return e.then((function() {}))
                                        }
                                    }()
                            }();
                        return Promise.resolve(o && o.then ? o.then(e) : e(o))
                    } catch (r) {
                        return Promise.reject(r)
                    }
                },
                De = function(t, e) {
                    if (t && e && 0 !== Object.keys(e).length) {
                        t.clearRect(0, 0, t.canvas.width, t.canvas.height), t.fillStyle = "#212223", t.fillRect(0, 0, t.canvas.width, t.canvas.height);
                        for (var n = e.frequencyBinCount, a = 0; a < n; a++) {
                            var i = e.frequencyData[a] / 256,
                                o = t.canvas.height * i,
                                r = t.canvas.height - o - 1,
                                s = t.canvas.width / n,
                                l = a / n * 360;
                            t.fillStyle = "hsl(" + l + ", 100%, 50%)", t.fillRect(a * s, r, s, o)
                        }
                        for (var c = 0; c < n; c++) {
                            var u = e.timeData[c] / 256,
                                d = t.canvas.height * u,
                                h = t.canvas.height - d - 1,
                                f = t.canvas.width / n;
                            t.fillStyle = "white", t.fillRect(c * f, h, 1, 2)
                        }
                    }
                },
                Ae = function(t) {
                    var e = (0, a.useRef)(null);
                    return Me = t.browser, (0, a.useEffect)((function() {
                        return function() {
                                try {
                                    var t = function() {
                                            var t = function() {
                                                if (void 0 !== Me) {
                                                    var t = void Se();
                                                    if (t && t.then) return t.then((function() {}))
                                                } else ke()
                                            }();
                                            if (t && t.then) return t.then((function() {}))
                                        },
                                        n = e.current;
                                    Ce = n.getContext("2d");
                                    var a = function() {
                                        if (void 0 !== Me) return Promise.resolve(Me.tabs.query({
                                            currentWindow: !0,
                                            active: !0
                                        })).then((function(t) {
                                            Pe = t[0].id
                                        }))
                                    }();
                                    Promise.resolve(a && a.then ? a.then(t) : t())
                                } catch (i) {
                                    return Promise.reject(i)
                                }
                            }(),
                            function() {}
                    }), []), a.createElement("canvas", Object.assign({
                        ref: e
                    }, t, {
                        style: {
                            backgroundColor: "#212223",
                            width: "100%",
                            height: "100%"
                        }
                    }))
                },
                Be = function(t) {
                    var e = t.browser,
                        n = t.tabId,
                        i = (0, a.useState)("1"),
                        o = i[0],
                        c = i[1];
                    return a.createElement(r.Z, null, a.createElement(W.ZP, {
                        value: o
                    }, a.createElement(r.Z, {
                        sx: {
                            borderBottom: 1,
                            borderColor: "divider"
                        }
                    }, a.createElement(G.Z, {
                        onChange: function(t, e) {
                            c(e)
                        },
                        "aria-label": "Magic Audio Tabs",
                        centered: !0,
                        variant: "fullWidth"
                    }, a.createElement(l.Z, {
                        label: "Magic Mode",
                        value: "1"
                    }), a.createElement(l.Z, {
                        label: "Simple Mode",
                        value: "2"
                    }))), a.createElement(H.Z, {
                        value: "1",
                        sx: {
                            height: "250px",
                            padding: 0,
                            overflow: "scroll"
                        }
                    }, a.createElement(ve, {
                        browser: e,
                        playerOrTabId: n
                    })), a.createElement(H.Z, {
                        value: "2",
                        sx: {
                            padding: 0,
                            minHeight: "250px"
                        }
                    }, a.createElement(s.ZP, {
                        container: !0,
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 0,
                        sx: {
                            border: "0px solid gray",
                            margin: "auto"
                        }
                    }, a.createElement(s.ZP, {
                        item: !0,
                        sx: {
                            backgroundColor: "inherit",
                            border: "0px solid red",
                            width: "100%"
                        }
                    }, a.createElement(Ie, null))))), a.createElement(r.Z, {
                        sx: {
                            border: "0px solid blue",
                            width: "100%",
                            height: "100px"
                        }
                    }, a.createElement(Ae, {
                        browser: e
                    })))
                },
                Te = function(t) {
                    var e = t.item,
                        n = t.index,
                        i = t.handlePluginInstanceSettings;
                    return a.createElement(j._l, {
                        draggableId: e.instanceId,
                        index: n
                    }, (function(t, n) {
                        return a.createElement(c.ZP, Object.assign({
                            ref: t.innerRef
                        }, t.draggableProps, t.dragHandleProps, {
                            secondaryAction: a.createElement(u.Z, {
                                edge: "end",
                                "aria-label": "delete",
                                onClick: function() {
                                    return i(e)
                                }
                            }, a.createElement(V.Z, null))
                        }), a.createElement(d.Z, null, a.createElement(h.Z, null, a.createElement(L.Z, null))), a.createElement(f.Z, {
                            primary: e.name
                        }), a.createElement(r.Z, {
                            sx: {
                                color: "white"
                            }
                        }, e.enabled ? "true" : "false"))
                    }))
                },
                Ze = function(t) {
                    var e = t.pluginInstances,
                        n = t.handlePluginInstanceSettings;
                    return a.createElement(j.bK, {
                        droppableId: "droppable-list-of-active-plugins"
                    }, (function(t) {
                        return a.createElement("div", Object.assign({
                            ref: t.innerRef
                        }, t.droppableProps), null != e ? e.map((function(t, e) {
                            return a.createElement(Te, {
                                key: t.instanceId,
                                item: t,
                                index: e,
                                handlePluginInstanceSettings: n
                            })
                        })) : "", t.placeholder)
                    }))
                },
                Oe = function(t) {
                    var e = t.pluginInstances,
                        n = t.handlePluginInstanceSettings;
                    return a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(j.Z5, {
                        onDragEnd: function() {}
                    }, a.createElement(Ze, {
                        pluginInstances: e,
                        handlePluginInstanceSettings: n
                    }))
                },
                Fe = function(t, e, n) {
                    this.magnitude = t, this.curveColor = e, this.lineWidth = n
                },
                Re = function() {
                    function t() {}
                    return t.prototype.updateMagnitudes = function(t, e) {
                        return new Promise((function(n, a) {
                            C.GW.getInstance().arccDspService.calculate(t, e).then((function(t) {
                                for (var e = t, a = e.c_l_l.length, i = new Float32Array(a), o = new Float32Array(a), r = 0; r < a; r++) i[r] = e.c_l_l[r], o[r] = e.c_l_r[r];
                                var s = C.SR.getInstance().getFftService().forward(e.c_l_l),
                                    l = C.SR.getInstance().getFftService().forward(e.c_l_r),
                                    c = s.length / 2 + 1,
                                    u = new Float32Array(c),
                                    d = new Float32Array(c);
                                for (r = 0; r < c; r++) u[r] = 20 * Math.log10(Math.sqrt(Math.pow(s[r].real, 2) + Math.pow(s[r].imag, 2))), d[r] = 20 * Math.log10(Math.sqrt(Math.pow(l[r].real, 2) + Math.pow(l[r].imag, 2)));
                                var h = new Array;
                                h.push(new Fe(u, "#399dff", 2)), h.push(new Fe(d, "#ff1434", 2)), n(h)
                            }), (function(t) {
                                a(new Error("Cannot get magnitudes: " + t))
                            }))
                        }))
                    }, t
                }();

            function qe(t) {
                return t + "dB"
            }
            var We = function(t) {
                    var e = t.attenuations,
                        n = t.handleChangeAttenuation;
                    return a.createElement("div", null, a.createElement(X, null, "3D (%) / BAND"), a.createElement(s.ZP, {
                        container: !0,
                        direction: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 4
                    }, null == e ? void 0 : e.map((function(t, e) {
                        return a.createElement(s.ZP, {
                            item: !0,
                            key: e
                        }, a.createElement(s.ZP, {
                            container: !0,
                            direction: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }, a.createElement(s.ZP, {
                            item: !0
                        }, a.createElement(i.Z, {
                            variant: "subtitle1",
                            gutterBottom: !0,
                            component: "div"
                        }, "" + t)), a.createElement(s.ZP, {
                            item: !0
                        }, a.createElement(g.ZP, {
                            track: "normal",
                            orientation: "vertical",
                            "aria-labelledby": "simple-gain-slider",
                            getAriaValueText: qe,
                            value: t,
                            min: -20,
                            max: -2,
                            onChange: function(t) {
                                return n(t, e)
                            },
                            sx: {
                                height: "100px",
                                padding: "0px",
                                margin: "0px 10px 10px 10px"
                            }
                        }))))
                    }))))
                },
                Ge = function(t) {
                    var e = t.handleChangeNumberOfBands;
                    return a.createElement("div", null, a.createElement(X, null, "BANDS"), a.createElement(p.Z, {
                        orientation: "vertical",
                        color: "primary",
                        "aria-label": "vertical contained primary button group",
                        variant: "text"
                    }, a.createElement(v.Z, {
                        onClick: function() {
                            return e(1)
                        }
                    }, "Full Spectrum"), a.createElement(v.Z, {
                        onClick: function() {
                            return e(3)
                        }
                    }, "3-Band"), a.createElement(v.Z, {
                        onClick: function() {
                            return e(11)
                        }
                    }, "11-Band")))
                },
                He = "#505050",
                Ne = "#D0D0D0",
                je = 400,
                Ve = 200,
                Le = 400,
                ze = 200,
                Ue = 40,
                Ke = 10,
                Qe = function(t) {
                    var e = t.magnitudes,
                        n = void 0 === e ? [] : e,
                        i = t.minDb,
                        o = void 0 === i ? -15 : i,
                        r = t.maxDb,
                        s = void 0 === r ? -15 : r,
                        l = t.dBScaleStep,
                        c = void 0 === l ? 5 : l,
                        u = t.title,
                        d = void 0 === u ? "" : u,
                        h = t.manualWidth,
                        f = void 0 === h ? 20 : h,
                        g = t.manualHeight,
                        p = void 0 === g ? 100 : g,
                        v = (0, a.useRef)(null),
                        m = function(t, e) {
                            t && (e.clearRect(0, 0, t.width, t.height), b(t, e), I(t, e))
                        },
                        b = function(t, e) {
                            _(t, e), y(e), E(e)
                        },
                        _ = function(t, e) {
                            t && (e.strokeStyle = He, e.lineWidth = 1, e.beginPath(), e.moveTo(Ue, Ke), e.lineTo(Ue + je, Ke), e.lineTo(Ue + je, Ke + Ve), e.lineTo(Ue, Ke + Ve), e.lineTo(Ue, Ke), e.stroke())
                        },
                        y = function(t) {
                            for (var e, n, a = 22050, i = 1, o = 20; o <= a; o++) {
                                if (e = Math.log10(o), n = Ue + (e - Math.log10(20)) / (Math.log10(a) - Math.log10(20)) * je, Number.isInteger(Math.log10(o)) || e === Math.log10(20) || e === Math.log10(a)) {
                                    var r = "",
                                        s = "";
                                    o < 1e3 ? (r = "" + o, s = "") : (r = "" + (o / 1e3).toFixed(0), s = "K"), t.beginPath(), t.textAlign = "center", t.strokeStyle = Ne, t.font = "10px Arial", t.strokeText(r + s, n, Ke + Ve + 10)
                                }(Number.isInteger(Math.log10(o)) || e === Math.log10(20) || e === Math.log10(a) || i > 0 && o % Math.pow(10, i) == 0) && (Number.isInteger(Math.log10(o)) && (i = Math.log10(o)), t.beginPath(), t.strokeStyle = He, t.moveTo(n, Ke), t.lineTo(n, Ve + Ke), t.stroke())
                            }
                            var l = w(0);
                            t.beginPath(), t.strokeStyle = "#F1F2F3", t.moveTo(Ue, l), t.lineTo(Ue + je, l), t.stroke(), t.beginPath(), t.textAlign = "center", t.strokeStyle = Ne, t.font = "12px Arial", t.strokeText(d, Ue + je / 2, 25), t.beginPath(), t.textAlign = "center", t.strokeStyle = Ne, t.font = "12px Arial", t.strokeText("FREQUENCY (Hz)", Ue + je / 2, Ke + Ve + 25)
                        },
                        E = function(t) {
                            for (var e = o; e <= s; e += c) {
                                var n = w(e);
                                t.beginPath(), t.textAlign = "center", t.strokeStyle = Ne, t.font = "10px Arial", t.strokeText(e.toFixed(0) + " dB", Ue - 20, n + 3)
                            }
                        },
                        I = function(t, e) {
                            if (t && n)
                                for (var a, i, o, r, s = [], l = 0, c = 22050, u = 0; u < n.length; u++) {
                                    if (s = [], n[u].magnitude)
                                        for (var d = 1; d < n[u].magnitude.length; d++)(l = d / (n[u].magnitude.length - 1) * c) >= 20 && l <= c && (a = Math.log10(l), i = n[u].magnitude[d], o = Ue + (a - Math.log10(20)) / (Math.log10(c) - Math.log10(20)) * je, r = w(i), 1 === d && (o = Ue), s.push({
                                            x: o,
                                            y: r
                                        }));
                                    if (s.length) {
                                        e.beginPath(), e.strokeStyle = n[u].curveColor, e.lineWidth = n[u].lineWidth ? n[u].lineWidth : 2, e.moveTo(s[0].x, s[0].y);
                                        for (var h = 1; h < s.length; h++) e.lineTo(s[h].x, s[h].y);
                                        e.stroke();
                                        var f = e.createLinearGradient(1 * Ue, 1 * Ke, 1 * Ue, 1 * Ke + Ve);
                                        f.addColorStop(0, "rgba(54, 128, 182, 0)"), f.addColorStop(.5, "rgba(54, 128, 182, 0.2)"), f.addColorStop(1, "rgba(54, 128, 182, 0)"), e.beginPath(), e.strokeStyle = n[u].curveColor, e.lineWidth = n[u].lineWidth ? n[u].lineWidth : 2, e.moveTo(s[0].x, s[0].y);
                                        for (h = 1; h < s.length; h++) e.lineTo(s[h].x, s[h].y);
                                        e.lineTo(Ue + je, Ke + Ve), e.lineTo(Ue, Ke + Ve), e.closePath(), e.fillStyle = f, e.fill()
                                    }
                                }
                        },
                        w = function(t) {
                            return t > s ? t = s : t < o && (t = o), Ve * (1 - (t - o) / (s - o)) + Ke
                        };
                    return (0, a.useEffect)((function() {
                        var t = v.current,
                            e = null != t ? t.getContext("2d") : null;
                        m(t, e)
                    }), [m]), (0, a.useEffect)((function() {
                        var t = v.current,
                            e = null != t ? t.getContext("2d") : null;
                        ! function(t, e) {
                            v && v.current && e && (v.current && 0 == v.current.clientWidth ? (t.width = 2 * f, t.height = 2 * p, Le = f, ze = p) : (t.width = 2 * v.current.clientWidth, t.height = 2 * v.current.clientHeight, Le = v.current.clientWidth, ze = v.current.clientHeight), e.scale(2, 2), je = Le - (Ue = 40) - 15, Ve = ze - (Ke = 10) - 30)
                        }(t, e)
                    }), []), a.createElement("canvas", {
                        ref: v,
                        style: {
                            backgroundColor: "rgb(38, 38, 42)",
                            width: "500px",
                            height: "150px"
                        }
                    })
                },
                Ye = function(t) {
                    var e = t.magnitudes;
                    return a.createElement("div", null, a.createElement(X, null, "CROSSTALK CANCELLATION FILTERS"), a.createElement(Qe, {
                        magnitudes: e,
                        manualWidth: 500,
                        manualHeight: 150,
                        minDb: -15,
                        maxDb: 15,
                        dBScaleStep: 5
                    }), " ")
                },
                Xe = function(t) {
                    var e = t.angle,
                        n = t.handleChangeOfAngle;
                    return a.createElement("div", null, a.createElement(X, null, "Your Angle to Each Speaker"), a.createElement(s.ZP, {
                        container: !0,
                        direction: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 4
                    }, a.createElement(s.ZP, {
                        item: !0
                    }, a.createElement(m.Z, {
                        component: "fieldset"
                    }, a.createElement(b.Z, {
                        row: !0,
                        "aria-label": "angle",
                        name: "row-radio-buttons-group",
                        value: e,
                        onChange: n
                    }, a.createElement(_.Z, {
                        value: 3,
                        control: a.createElement(y.Z, null),
                        label: "3°"
                    }), a.createElement(_.Z, {
                        value: 6,
                        control: a.createElement(y.Z, null),
                        label: "6°"
                    }), a.createElement(_.Z, {
                        value: 9,
                        control: a.createElement(y.Z, null),
                        label: "9°"
                    }), a.createElement(_.Z, {
                        value: 12,
                        control: a.createElement(y.Z, null),
                        label: "12°"
                    }), a.createElement(_.Z, {
                        value: 15,
                        control: a.createElement(y.Z, null),
                        label: "15°"
                    }), a.createElement(_.Z, {
                        value: 30,
                        control: a.createElement(y.Z, null),
                        label: "30°"
                    }))))))
                },
                $e = function(t) {
                    switch (t) {
                        case 1:
                            return C.D7.FREQUENCIES_1;
                        case 3:
                            return C.D7.FREQUENCIES_3;
                        case 11:
                            return C.D7.FREQUENCIES_11;
                        case 21:
                            return C.D7.FREQUENCIES_21;
                        default:
                            return console.error("numberOfBands", t), ""
                    }
                },
                Je = function(t) {
                    switch (t) {
                        case 1:
                            return C.D7.ATTENUATIONS_1;
                        case 3:
                            return C.D7.ATTENUATIONS_3;
                        case 11:
                            return C.D7.ATTENUATIONS_11;
                        case 21:
                            return C.D7.ATTENUATIONS_21;
                        default:
                            return console.error("numberOfBands", t), ""
                    }
                },
                tn = new Re,
                en = function(t) {
                    var e = t.pluginInstance,
                        n = t.tabId,
                        i = t.browser,
                        o = (0, a.useState)([]),
                        r = o[0],
                        l = o[1],
                        c = (0, a.useState)(0),
                        u = c[0],
                        d = c[1],
                        h = (0, a.useState)([]),
                        f = h[0],
                        g = h[1],
                        p = (0, a.useState)([]),
                        v = p[0],
                        m = p[1],
                        b = (0, a.useState)(0),
                        _ = b[0],
                        y = b[1],
                        E = function(t) {
                            var e = null,
                                n = null,
                                a = C.GW.getInstance().pluginInstanceService.getValue(t, C.D7.ANGLE),
                                i = C.GW.getInstance().pluginInstanceService.getValue(t, C.D7.NUMBER_OF_BANDS),
                                o = C.GW.getInstance().pluginInstanceService.getValue(t, $e(1)),
                                r = C.GW.getInstance().pluginInstanceService.getValue(t, Je(1)),
                                s = C.GW.getInstance().pluginInstanceService.getValue(t, $e(3)),
                                l = C.GW.getInstance().pluginInstanceService.getValue(t, Je(3)),
                                c = C.GW.getInstance().pluginInstanceService.getValue(t, $e(11)),
                                u = C.GW.getInstance().pluginInstanceService.getValue(t, Je(11)),
                                d = C.GW.getInstance().pluginInstanceService.getValue(t, $e(21)),
                                h = C.GW.getInstance().pluginInstanceService.getValue(t, Je(21));
                            switch (i) {
                                case 1:
                                    e = o, n = r;
                                    break;
                                case 3:
                                    e = s, n = l;
                                    break;
                                case 11:
                                    e = c, n = u;
                                    break;
                                case 21:
                                    e = d, n = h
                            }
                            return {
                                anglePluginInstance: a,
                                numberOfBandsPluginInstance: i,
                                frequenciesPluginInstance: e,
                                attenuationsPluginInstance: n,
                                frequenciesBands1PluginInstance: o,
                                attenuationsBands1PluginInstance: r,
                                frequenciesBands3PluginInstance: s,
                                attenuationsBands3PluginInstance: l,
                                frequenciesBands11PluginInstance: c,
                                attenuationsBands11PluginInstance: u,
                                frequenciesBands21PluginInstance: d,
                                attenuationsBands21PluginInstance: h
                            }
                        }(e),
                        I = E.anglePluginInstance,
                        x = E.numberOfBandsPluginInstance,
                        P = E.frequenciesPluginInstance,
                        M = E.attenuationsPluginInstance,
                        S = E.frequenciesBands1PluginInstance,
                        k = E.attenuationsBands1PluginInstance,
                        D = E.frequenciesBands3PluginInstance,
                        A = E.attenuationsBands3PluginInstance,
                        B = E.frequenciesBands11PluginInstance,
                        T = E.attenuationsBands11PluginInstance,
                        Z = E.frequenciesBands21PluginInstance,
                        O = E.attenuationsBands21PluginInstance,
                        F = (0, a.useState)([]),
                        R = F[0],
                        q = F[1],
                        W = (0, a.useState)([]),
                        G = W[0],
                        H = W[1],
                        N = (0, a.useState)([]),
                        j = N[0],
                        V = N[1],
                        L = (0, a.useState)([]),
                        z = L[0],
                        U = L[1],
                        K = (0, a.useState)([]),
                        Q = K[0],
                        Y = K[1],
                        X = (0, a.useState)([]),
                        $ = X[0],
                        J = X[1],
                        tt = (0, a.useState)([]),
                        et = tt[0],
                        nt = tt[1],
                        at = (0, a.useState)([]),
                        it = at[0],
                        ot = at[1],
                        rt = (0, w.I0)();
                    return (0, a.useEffect)((function() {
                        return Promise.resolve(function() {
                                try {
                                    return e ? Promise.resolve(tn.updateMagnitudes(C.E2.getAudioContext(), {
                                        filterLength: C.GW.getInstance().pluginInstanceService.getValue(e, C.D7.FILTER_LENGTH),
                                        angle: _,
                                        distance: C.GW.getInstance().pluginInstanceService.getValue(e, C.D7.DISTANCE),
                                        numberOfBands: u,
                                        frequencies: f,
                                        attenuations: v
                                    })).then((function(t) {
                                        l(t)
                                    })) : Promise.resolve()
                                } catch (t) {
                                    return Promise.reject(t)
                                }
                            }()).then((function() {})),
                            function() {}
                    }), [u, f, v, _]), (0, a.useEffect)((function() {
                        if (u) {
                            var t = null,
                                a = null;
                            switch (u) {
                                case 1:
                                    t = R, a = G;
                                    break;
                                case 3:
                                    t = j, a = z;
                                    break;
                                case 11:
                                    t = Q, a = $;
                                    break;
                                case 21:
                                    t = et, a = it
                            }
                            g(t), m(a), rt(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: e.pluginId,
                                    instanceId: e.instanceId,
                                    parameter: {
                                        key: $e(u),
                                        value: t
                                    }
                                }
                            })), rt(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: e.pluginId,
                                    instanceId: e.instanceId,
                                    parameter: {
                                        key: Je(u),
                                        value: a
                                    }
                                }
                            }))
                        }
                        return function() {}
                    }), [u]), (0, a.useEffect)((function() {
                        return y(I), d(x), g(P), m(M), q(S), H(k), V(D), U(A), Y(B), J(T), nt(Z), ot(O),
                            function() {}
                    }), []), a.createElement("div", null, a.createElement(s.ZP, {
                        container: !0,
                        direction: "row",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        spacing: 3
                    }, a.createElement(s.ZP, {
                        item: !0
                    }, a.createElement(Ye, {
                        magnitudes: r
                    })), a.createElement(s.ZP, {
                        item: !0
                    }, a.createElement(Ge, {
                        numberOfBands: u,
                        handleChangeNumberOfBands: function(t) {
                            switch (d(t), t) {
                                case 1:
                                    g(R), m(G);
                                    break;
                                case 3:
                                    g(j), m(z);
                                    break;
                                case 11:
                                    g(Q), m($);
                                    break;
                                case 21:
                                    g(et), m(it)
                            }
                            rt(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: e.pluginId,
                                    instanceId: e.instanceId,
                                    parameter: {
                                        key: C.D7.NUMBER_OF_BANDS,
                                        value: t
                                    }
                                }
                            }))
                        }
                    }))), a.createElement(Xe, {
                        angle: _,
                        handleChangeOfAngle: function(t) {
                            var a = parseInt(t.target.value);
                            y(a), rt(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: e.pluginId,
                                    instanceId: e.instanceId,
                                    parameter: {
                                        key: C.D7.ANGLE,
                                        value: a
                                    }
                                }
                            }))
                        }
                    }), a.createElement(We, {
                        attenuations: v,
                        handleChangeAttenuation: function(t, a) {
                            if (v) {
                                var o = t.target.value,
                                    r = [].concat(v);
                                switch (r[a] = o, m(r), u) {
                                    case 1:
                                        H(r);
                                        break;
                                    case 3:
                                        U(r);
                                        break;
                                    case 11:
                                        J(r);
                                        break;
                                    case 21:
                                        ot(r)
                                }
                                rt(ct({
                                    browser: i,
                                    tabId: n,
                                    pluginInstanceParameterKeyValue: {
                                        pluginId: e.pluginId,
                                        instanceId: e.instanceId,
                                        parameter: {
                                            key: Je(u),
                                            value: r
                                        }
                                    }
                                }))
                            }
                        }
                    }))
                },
                nn = function(t) {
                    var e = t.pluginInstance;
                    return a.createElement("h1", null, "PluginArei - ", e.instanceId)
                },
                an = function(t) {
                    var e = t.pluginInstance;
                    return a.createElement("h1", null, "PluginDynamicsCompressor - ", e.instanceId)
                },
                on = function(t) {
                    var e = t.pluginInstance;
                    return a.createElement("h1", null, "PluginEqBiquad - ", e.instanceId)
                },
                rn = [{
                    value: -20,
                    label: "-20dB"
                }, {
                    value: 0,
                    label: "0dB"
                }, {
                    value: 20,
                    label: "20dB"
                }];

            function sn(t) {
                return t + "dB"
            }
            var ln = function(t) {
                    var e = t.pluginInstance,
                        n = t.tabId,
                        o = t.browser,
                        r = (0, a.useState)(0),
                        l = r[0],
                        c = r[1],
                        u = (0, w.I0)();
                    return (0, a.useEffect)((function() {
                        return c(C.GW.getInstance().pluginInstanceService.getValue(e, C.f.GAIN)),
                            function() {}
                    }), []), a.createElement("div", null, a.createElement(X, null, "Change Gain"), a.createElement(s.ZP, {
                        container: !0,
                        width: "500px",
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }, a.createElement(s.ZP, {
                        item: !0
                    }, a.createElement(i.Z, {
                        variant: "subtitle1",
                        gutterBottom: !0,
                        component: "div"
                    }, 20 * Math.log10(l) + "dB")), a.createElement(s.ZP, {
                        item: !0
                    }, a.createElement(g.ZP, {
                        track: "normal",
                        "aria-labelledby": "simple-gain-slider",
                        getAriaValueText: sn,
                        value: 20 * Math.log10(l),
                        marks: rn,
                        min: -20,
                        max: 20,
                        onChange: function(t) {
                            var a = Math.pow(10, t.target.value / 20);
                            c(a), u(ct({
                                browser: o,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: e.pluginId,
                                    instanceId: e.instanceId,
                                    parameter: {
                                        key: C.f.GAIN,
                                        value: a
                                    }
                                }
                            }))
                        },
                        sx: {
                            width: "300px",
                            padding: "0px",
                            margin: "20px 10px 50px 10px"
                        }
                    }))))
                },
                cn = function(t) {
                    var e = t.pluginInstance,
                        n = t.tabId,
                        i = t.browser;
                    switch (e.pluginId) {
                        case "ARCC":
                            return a.createElement(en, {
                                pluginInstance: e,
                                tabId: n,
                                browser: i
                            });
                        case "AREI":
                            return a.createElement(nn, {
                                pluginInstance: e,
                                tabId: n,
                                browser: i
                            });
                        case "EQ_BIQUAD":
                            return a.createElement(on, {
                                pluginInstance: e,
                                tabId: n,
                                browser: i
                            });
                        case "SIMPLE_GAIN":
                            return a.createElement(ln, {
                                pluginInstance: e,
                                tabId: n,
                                browser: i
                            });
                        case "DYNAMICS_COMPRESSOR":
                            return a.createElement(an, {
                                pluginInstance: e,
                                tabId: n,
                                browser: i
                            });
                        default:
                            return a.createElement("h1", null, "No UI for Plugin: ", e.pluginId)
                    }
                },
                un = ["children", "onClose"],
                dn = function(t) {
                    var e = t.children,
                        n = t.onClose,
                        i = function(t, e) {
                            if (null == t) return {};
                            var n, a, i = {},
                                o = Object.keys(t);
                            for (a = 0; a < o.length; a++) n = o[a], e.indexOf(n) >= 0 || (i[n] = t[n]);
                            return i
                        }(t, un);
                    return a.createElement(E.Z, Object.assign({
                        sx: {
                            m: 0,
                            p: 2
                        }
                    }, i), e, n ? a.createElement(u.Z, {
                        "aria-label": "close",
                        onClick: n,
                        sx: {
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: function(t) {
                                return t.palette.grey[500]
                            }
                        }
                    }, a.createElement(z.Z, null)) : null)
                },
                hn = function(t) {
                    var e = t.onClose,
                        n = t.open,
                        i = t.pluginInstance,
                        o = t.browser,
                        r = function() {
                            e()
                        };
                    return a.createElement(I.Z, {
                        onClose: r,
                        open: n,
                        fullWidth: !0,
                        maxWidth: "md"
                    }, a.createElement(dn, {
                        id: "customized-dialog-title-for-facade",
                        onClose: r
                    }, i ? i.name : ""), i ? a.createElement(cn, {
                        pluginInstance: i,
                        tabId: t.tabId,
                        browser: o
                    }) : "")
                },
                fn = function(t) {
                    var e = t.browser,
                        n = t.pluginInstances,
                        i = t.tabId,
                        o = (0, a.useState)("1"),
                        c = o[0],
                        u = o[1],
                        d = (0, a.useState)(!1),
                        h = d[0],
                        f = d[1],
                        g = (0, a.useState)({}),
                        p = g[0],
                        v = g[1];
                    return a.createElement(r.Z, null, a.createElement(W.ZP, {
                        value: c
                    }, a.createElement(r.Z, {
                        sx: {
                            borderBottom: 1,
                            borderColor: "divider"
                        }
                    }, a.createElement(G.Z, {
                        onChange: function(t, e) {
                            u(e)
                        },
                        "aria-label": "lab API tabs example",
                        centered: !0,
                        variant: "fullWidth"
                    }, a.createElement(l.Z, {
                        label: "Magic Mode",
                        value: "1"
                    }), a.createElement(l.Z, {
                        label: "Simple Mode",
                        value: "2"
                    }), a.createElement(l.Z, {
                        label: "Advanced Mode",
                        value: "3"
                    }))), a.createElement(H.Z, {
                        value: "1",
                        sx: {
                            height: "250px",
                            padding: 0,
                            overflow: "scroll"
                        }
                    }, a.createElement(ve, {
                        browser: e,
                        playerOrTabId: i
                    })), a.createElement(H.Z, {
                        value: "2",
                        sx: {
                            padding: 0,
                            minHeight: "250px"
                        }
                    }, a.createElement(s.ZP, {
                        container: !0,
                        direction: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        spacing: 0,
                        sx: {
                            border: "0px solid gray",
                            margin: "auto"
                        }
                    }, a.createElement(s.ZP, {
                        item: !0,
                        sx: {
                            backgroundColor: "inherit",
                            border: "0px solid red",
                            width: "100%"
                        }
                    }, a.createElement(Ie, null)))), a.createElement(H.Z, {
                        value: "3",
                        sx: {
                            height: "250px",
                            padding: 0,
                            overflow: "scroll"
                        }
                    }, a.createElement(Oe, {
                        pluginInstances: n,
                        handlePluginInstanceSettings: function(t) {
                            v(t), f(!0)
                        }
                    }))), a.createElement(r.Z, {
                        sx: {
                            border: "0px solid blue",
                            width: "100%",
                            height: "100px"
                        }
                    }), a.createElement(hn, {
                        open: h,
                        onClose: function() {
                            f(!1)
                        },
                        pluginInstance: p,
                        tabId: i,
                        browser: e
                    }))
                };

            function gn(t) {
                return a.createElement(Q.Z, Object.assign({}, t, {
                    direction: "up"
                }))
            }
            var pn = function(t) {
                    var e = t.processingEnabled,
                        n = t.audioOutputDevice,
                        i = (0, a.useState)(!1),
                        o = i[0],
                        r = i[1],
                        s = (0, a.useState)(!1),
                        l = s[0],
                        c = s[1],
                        u = (0, a.useState)(""),
                        d = u[0],
                        h = u[1],
                        f = (0, a.useState)(null),
                        g = f[0],
                        p = f[1],
                        v = "bottom",
                        m = "center",
                        b = function(t, e) {
                            "clickaway" !== e && r(!1)
                        },
                        _ = function(t, e) {
                            "clickaway" !== e && c(!1)
                        };
                    (0, a.useEffect)((function() {
                        return void 0 !== e && void 0 !== n && (e ? ("SPEAKERS" === n ? (h("Magic Audio for Speakers"), p(a.createElement(Ct, {
                                fontSize: "inherit"
                            }))) : "HEADPHONES" === n ? (h("Magic Audio for Headphones"), p(a.createElement(xt, {
                                fontSize: "inherit"
                            }))) : (h("Magic Audio is ON"), p(null)), r(!0)) : c(!0)),
                            function() {}
                    }), [e, n]);
                    return void 0 !== e ? e ? a.createElement(K.Z, {
                        open: o,
                        autoHideDuration: 1500,
                        onClose: b,
                        message: "ProcessingEnabled",
                        anchorOrigin: {
                            vertical: v,
                            horizontal: m
                        },
                        TransitionComponent: gn,
                        sx: {
                            maxWidth: "550px",
                            width: "100%"
                        }
                    }, a.createElement(U.Z, {
                        variant: "filled",
                        severity: "success",
                        icon: g
                    }, d)) : a.createElement(K.Z, {
                        open: l,
                        autoHideDuration: 1500,
                        onClose: _,
                        message: "ProcessingDisabled",
                        anchorOrigin: {
                            vertical: v,
                            horizontal: m
                        },
                        TransitionComponent: gn,
                        sx: {
                            maxWidth: "500px",
                            width: "100%"
                        }
                    }, a.createElement(U.Z, {
                        variant: "filled",
                        severity: "warning",
                        icon: a.createElement(Y.Z, {
                            fontSize: "inherit"
                        })
                    }, "Typical Stereo")) : a.createElement("span", null)
                },
                vn = function(t, e) {
                    var n = (0, w.I0)(),
                        i = (0, w.v9)(ht),
                        o = (0, w.v9)(ft),
                        r = (0, a.useState)(!1),
                        s = r[0],
                        l = r[1];
                    a.useEffect((function() {
                        if (i && !s && (l(!0), o && 0 === o.length)) {
                            var a = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "STEREO_WIDENING",
                                    name: "STEREO WIDENING"
                                }),
                                r = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "AREI",
                                    name: "VIRTUAL SURROUND FOR HEADPHONES",
                                    enabled: !1
                                }),
                                c = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "ARCC",
                                    name: "VIRTUAL SURROUND FOR SPEAKERS"
                                }),
                                u = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "REVERB",
                                    name: "REVERB"
                                }),
                                d = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "SIMPLE_GAIN",
                                    name: "VOLUME"
                                }),
                                h = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "EQ_BIQUAD",
                                    name: "EQUALIZER"
                                }),
                                f = C.GW.getInstance().pluginGraphUiService.createPluginInstance({
                                    pluginId: "DYNAMICS_COMPRESSOR",
                                    name: "DYNAMICS COMPRESSOR"
                                });
                            n(st({
                                tabId: t,
                                pluginInstance: a,
                                browser: e
                            })), n(st({
                                tabId: t,
                                pluginInstance: r,
                                browser: e
                            })), n(st({
                                tabId: t,
                                pluginInstance: c,
                                browser: e
                            })), n(st({
                                tabId: t,
                                pluginInstance: u,
                                browser: e
                            })), n(st({
                                tabId: t,
                                pluginInstance: d,
                                browser: e
                            })), n(st({
                                tabId: t,
                                pluginInstance: h,
                                browser: e
                            })), n(st({
                                tabId: t,
                                pluginInstance: f,
                                browser: e
                            }))
                        }
                        return function() {}
                    }), [t, i]), a.useEffect((function() {
                        return n(dt()), n(lt({
                                tabId: t,
                                browser: e
                            })),
                            function() {}
                    }), [])
                },
                mn = function(t) {
                    var e = t.day,
                        n = t.playerOrTabId,
                        i = t.browser,
                        o = t.settings,
                        r = (0, a.useContext)($).setSettings;
                    (0, a.useEffect)((function() {
                        return r(o),
                            function() {}
                    }), [o]);
                    var s = (0, w.I0)(),
                        l = (0, w.v9)(ot),
                        c = (0, w.v9)(bt),
                        u = (0, a.useState)()[1],
                        d = (0, a.useState)(),
                        h = d[0],
                        f = d[1],
                        g = (0, a.useState)(),
                        p = g[0],
                        v = g[1],
                        m = (0, a.useState)()[1],
                        b = (0, a.useState)()[1],
                        _ = (0, a.useState)()[1],
                        y = (0, a.useState)()[1],
                        E = (0, a.useState)(!0),
                        I = E[0],
                        x = E[1],
                        M = (0, w.v9)(ft);
                    vn(n, i);
                    var S = function(t) {
                            t !== c && ("SPEAKERS" === t ? k() : D(), s(lt({
                                tabId: n,
                                browser: i
                            })), s(vt({
                                tabId: n,
                                browser: i
                            })))
                        },
                        k = function() {
                            s(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: h.pluginId,
                                    instanceId: h.instanceId,
                                    parameter: {
                                        key: C.D7.ENABLED,
                                        value: !0
                                    }
                                }
                            })), s(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: p.pluginId,
                                    instanceId: p.instanceId,
                                    parameter: {
                                        key: C.jc.ENABLED,
                                        value: !1
                                    }
                                }
                            }))
                        },
                        D = function() {
                            s(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: h.pluginId,
                                    instanceId: h.instanceId,
                                    parameter: {
                                        key: C.D7.ENABLED,
                                        value: !1
                                    }
                                }
                            })), s(ct({
                                browser: i,
                                tabId: n,
                                pluginInstanceParameterKeyValue: {
                                    pluginId: p.pluginId,
                                    instanceId: p.instanceId,
                                    parameter: {
                                        key: C.jc.ENABLED,
                                        value: !0
                                    }
                                }
                            }))
                        };
                    return a.useEffect((function() {
                        return M && M.length > 0 && (u(M.find((function(t) {
                                return "STEREO_WIDENING" === t.pluginId
                            }))), v(M.find((function(t) {
                                return "AREI" === t.pluginId
                            }))), f(M.find((function(t) {
                                return "ARCC" === t.pluginId
                            }))), m(M.find((function(t) {
                                return "REVERB" === t.pluginId
                            }))), b(M.find((function(t) {
                                return "SIMPLE_GAIN" === t.pluginId
                            }))), _(M.find((function(t) {
                                return "EQ_BIQUAD" === t.pluginId
                            }))), y(M.find((function(t) {
                                return "DYNAMICS_COMPRESSOR" === t.pluginId
                            })))),
                            function() {}
                    }), [M]), a.useEffect((function() {
                        return s(lt({
                                tabId: n,
                                browser: i
                            })), s(at({
                                tabId: n,
                                browser: i
                            })), s(vt({
                                tabId: n,
                                browser: i
                            })),
                            function() {}
                    }), [s]), a.useEffect((function() {
                        return o && h && p && h.pluginId && p.pluginId && I && (S(o.audioOutputDevice), x(!1)),
                            function() {}
                    }), [o, h, p]), a.useEffect((function() {
                        return function() {}
                    }), []), a.createElement(P.Z, {
                        sx: {
                            border: "0px solid #6f00ff",
                            width: "100%",
                            margin: "auto"
                        }
                    }, a.createElement(Mt, {
                        tabId: n,
                        title: "Magic Audio",
                        browser: i,
                        handleChangeOutputDeviceTo: S,
                        audioOutputDevice: c
                    }, "day1" === e && a.createElement(Lt, {
                        browser: i,
                        playerOrTabId: n,
                        processingEnabled: l
                    }), "day2" === e && a.createElement(Be, {
                        browser: i,
                        tabId: n
                    }), "day3" === e && a.createElement(fn, {
                        browser: i,
                        pluginInstances: M,
                        tabId: n
                    })), a.createElement(pn, {
                        processingEnabled: l,
                        audioOutputDevice: c
                    }))
                },
                bn = function(t) {
                    var e = t.day,
                        n = void 0 === e ? "day1" : e,
                        i = t.browser,
                        o = t.tabId,
                        r = void 0 === o ? "website" : o,
                        s = t.settings;
                    return a.createElement(J, null, a.createElement(w.zt, {
                        store: _t
                    }, a.createElement(mn, {
                        day: n,
                        playerOrTabId: r,
                        browser: i,
                        settings: s
                    })))
                }
        }
    }
]);
//# sourceMappingURL=5933f3ba-c983d9efc6236f7c8ef8.js.map