/*! For license information please see a9400ff7-57f174cb0f5f28fcf320.js.LICENSE.txt */
"use strict";
(self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || []).push([
    [501], {
        8914: function(e, t, n) {
            n.d(t, {
                $q: function() {
                    return Ol
                },
                AK: function() {
                    return Zf
                },
                Ab: function() {
                    return Vf
                },
                B$: function() {
                    return Fc
                },
                Bt: function() {
                    return Mf
                },
                Cf: function() {
                    return Ac
                },
                EK: function() {
                    return ee
                },
                ET: function() {
                    return Tf
                },
                Eo: function() {
                    return Oc
                },
                F8: function() {
                    return ol
                },
                Fc: function() {
                    return Jc
                },
                GL: function() {
                    return Af
                },
                IO: function() {
                    return jl
                },
                IX: function() {
                    return Gc
                },
                Ix: function() {
                    return Xc
                },
                JU: function() {
                    return Pc
                },
                Jj: function() {
                    return al
                },
                K9: function() {
                    return V
                },
                Ky: function() {
                    return Ee
                },
                L$: function() {
                    return nl
                },
                Lx: function() {
                    return rf
                },
                Lz: function() {
                    return il
                },
                Me: function() {
                    return le
                },
                Mx: function() {
                    return $c
                },
                PL: function() {
                    return kf
                },
                PU: function() {
                    return df
                },
                Pb: function() {
                    return tl
                },
                QT: function() {
                    return yf
                },
                ST: function() {
                    return Wc
                },
                TF: function() {
                    return el
                },
                TQ: function() {
                    return tf
                },
                UQ: function() {
                    return wf
                },
                Ub: function() {
                    return A
                },
                W: function() {
                    return ql
                },
                WA: function() {
                    return P
                },
                Wi: function() {
                    return Ec
                },
                Wu: function() {
                    return af
                },
                Xb: function() {
                    return se
                },
                Xk: function() {
                    return gf
                },
                Xo: function() {
                    return Hl
                },
                ar: function() {
                    return Ql
                },
                at: function() {
                    return Zc
                },
                b9: function() {
                    return Jl
                },
                cf: function() {
                    return Sf
                },
                e0: function() {
                    return ef
                },
                fH: function() {
                    return Hc
                },
                hJ: function() {
                    return Lc
                },
                i3: function() {
                    return Cf
                },
                iE: function() {
                    return qc
                },
                kl: function() {
                    return mf
                },
                l7: function() {
                    return we
                },
                my: function() {
                    return Mc
                },
                nP: function() {
                    return Lf
                },
                oe: function() {
                    return Ef
                },
                pl: function() {
                    return xf
                },
                qK: function() {
                    return Bl
                },
                qY: function() {
                    return zc
                },
                r7: function() {
                    return If
                },
                sc: function() {
                    return _f
                },
                u7: function() {
                    return lf
                },
                vh: function() {
                    return $l
                },
                vr: function() {
                    return Rf
                },
                xU: function() {
                    return Pl
                },
                yq: function() {
                    return C
                },
                zN: function() {
                    return bf
                }
            });
            var r = n(4150),
                i = n(3243),
                a = n(1026),
                u = n(7791),
                o = n(7591),
                s = n(8513),
                c = n(7597),
                l = n(649),
                f = n(2951),
                h = n(1976),
                d = n(7135),
                v = n.n(d),
                y = n(8386),
                p = n(4323),
                m = n(7581),
                g = n(3163),
                k = n(4991);

            function w(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return b(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0,
                    o = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        o = !0, a = e
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function x(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var i = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var I = "@firebase/firestore",
                E = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.uid = t
                    }
                    return (0, h.Z)(e, [{
                        key: "isAuthenticated",
                        value: function() {
                            return null != this.uid
                        }
                    }, {
                        key: "toKey",
                        value: function() {
                            return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return e.uid === this.uid
                        }
                    }]), e
                }();
            E.UNAUTHENTICATED = new E(null), E.GOOGLE_CREDENTIALS = new E("google-credentials-uid"), E.FIRST_PARTY = new E("first-party-uid"), E.MOCK_USER = new E("mock-user");
            var T = "9.6.10",
                S = new m.Yd("@firebase/firestore");

            function _() {
                return S.logLevel
            }

            function A(e) {
                S.setLogLevel(e)
            }

            function N(e) {
                if (S.logLevel <= m.in.DEBUG) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = n.map(Z);
                    S.debug.apply(S, ["Firestore (".concat(T, "): ").concat(e)].concat((0, l.Z)(i)))
                }
            }

            function D(e) {
                if (S.logLevel <= m.in.ERROR) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = n.map(Z);
                    S.error.apply(S, ["Firestore (".concat(T, "): ").concat(e)].concat((0, l.Z)(i)))
                }
            }

            function C(e) {
                if (S.logLevel <= m.in.WARN) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = n.map(Z);
                    S.warn.apply(S, ["Firestore (".concat(T, "): ").concat(e)].concat((0, l.Z)(i)))
                }
            }

            function Z(e) {
                if ("string" == typeof e) return e;
                try {
                    return t = e, JSON.stringify(t)
                } catch (t) {
                    return e
                }
                var t
            }

            function M() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unexpected state",
                    t = "FIRESTORE (".concat(T, ") INTERNAL ASSERTION FAILED: ") + e;
                throw D(t), new Error(t)
            }

            function R(e, t) {
                e || M()
            }

            function V(e, t) {
                e || M()
            }

            function L(e, t) {
                return e
            }
            var F = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                P = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, e, r)).code = e, i.message = r, i.toString = function() {
                            return "".concat(i.name, ": [code=").concat(i.code, "]: ").concat(i.message)
                        }, i
                    }
                    return (0, h.Z)(n)
                }(g.ZR),
                O = (0, h.Z)((function e() {
                    var t = this;
                    (0, f.Z)(this, e), this.promise = new Promise((function(e, n) {
                        t.resolve = e, t.reject = n
                    }))
                })),
                q = (0, h.Z)((function e(t, n) {
                    (0, f.Z)(this, e), this.user = n, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", "Bearer ".concat(t))
                })),
                U = function() {
                    function e() {
                        (0, f.Z)(this, e)
                    }
                    return (0, h.Z)(e, [{
                        key: "getToken",
                        value: function() {
                            return Promise.resolve(null)
                        }
                    }, {
                        key: "invalidateToken",
                        value: function() {}
                    }, {
                        key: "start",
                        value: function(e, t) {
                            e.enqueueRetryable((function() {
                                return t(E.UNAUTHENTICATED)
                            }))
                        }
                    }, {
                        key: "shutdown",
                        value: function() {}
                    }]), e
                }(),
                B = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.token = t, this.changeListener = null
                    }
                    return (0, h.Z)(e, [{
                        key: "getToken",
                        value: function() {
                            return Promise.resolve(this.token)
                        }
                    }, {
                        key: "invalidateToken",
                        value: function() {}
                    }, {
                        key: "start",
                        value: function(e, t) {
                            var n = this;
                            this.changeListener = t, e.enqueueRetryable((function() {
                                return t(n.token.user)
                            }))
                        }
                    }, {
                        key: "shutdown",
                        value: function() {
                            this.changeListener = null
                        }
                    }]), e
                }(),
                K = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.t = t, this.currentUser = E.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null
                    }
                    return (0, h.Z)(e, [{
                        key: "start",
                        value: function(e, t) {
                            var n = this,
                                r = this.i,
                                i = function(e) {
                                    return n.i !== r ? (r = n.i, t(e)) : Promise.resolve()
                                },
                                a = new O;
                            this.o = function() {
                                n.i++, n.currentUser = n.u(), a.resolve(), a = new O, e.enqueueRetryable((function() {
                                    return i(n.currentUser)
                                }))
                            };
                            var o = function() {
                                    var t = a;
                                    e.enqueueRetryable((0, u.Z)(v().mark((function e() {
                                        return v().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.promise;
                                                case 2:
                                                    return e.next = 4, i(n.currentUser);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))))
                                },
                                s = function(e) {
                                    N("FirebaseAuthCredentialsProvider", "Auth detected"), n.auth = e, n.auth.addAuthTokenListener(n.o), o()
                                };
                            this.t.onInit((function(e) {
                                return s(e)
                            })), setTimeout((function() {
                                if (!n.auth) {
                                    var e = n.t.getImmediate({
                                        optional: !0
                                    });
                                    e ? s(e) : (N("FirebaseAuthCredentialsProvider", "Auth not yet detected"), a.resolve(), a = new O)
                                }
                            }), 0), o()
                        }
                    }, {
                        key: "getToken",
                        value: function() {
                            var e = this,
                                t = this.i,
                                n = this.forceRefresh;
                            return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
                                return e.i !== t ? (N("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), e.getToken()) : n ? (R("string" == typeof n.accessToken), new q(n.accessToken, e.currentUser)) : null
                            })) : Promise.resolve(null)
                        }
                    }, {
                        key: "invalidateToken",
                        value: function() {
                            this.forceRefresh = !0
                        }
                    }, {
                        key: "shutdown",
                        value: function() {
                            this.auth && this.auth.removeAuthTokenListener(this.o)
                        }
                    }, {
                        key: "u",
                        value: function() {
                            var e = this.auth && this.auth.getUid();
                            return R(null === e || "string" == typeof e), new E(e)
                        }
                    }]), e
                }(),
                G = (0, h.Z)((function e(t, n, r) {
                    (0, f.Z)(this, e), this.type = "FirstParty", this.user = E.FIRST_PARTY, this.headers = new Map, this.headers.set("X-Goog-AuthUser", n);
                    var i = t.auth.getAuthHeaderValueForFirstParty([]);
                    i && this.headers.set("Authorization", i), r && this.headers.set("X-Goog-Iam-Authorization-Token", r)
                })),
                j = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.h = t, this.l = n, this.m = r
                    }
                    return (0, h.Z)(e, [{
                        key: "getToken",
                        value: function() {
                            return Promise.resolve(new G(this.h, this.l, this.m))
                        }
                    }, {
                        key: "start",
                        value: function(e, t) {
                            e.enqueueRetryable((function() {
                                return t(E.FIRST_PARTY)
                            }))
                        }
                    }, {
                        key: "shutdown",
                        value: function() {}
                    }, {
                        key: "invalidateToken",
                        value: function() {}
                    }]), e
                }(),
                z = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this.value = t, this.type = "AppCheck", this.headers = new Map, t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
                })),
                Q = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.g = t, this.forceRefresh = !1, this.appCheck = null, this.p = null
                    }
                    return (0, h.Z)(e, [{
                        key: "start",
                        value: function(e, t) {
                            var n = this,
                                r = function(e) {
                                    null != e.error && N("FirebaseAppCheckTokenProvider", "Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));
                                    var r = e.token !== n.p;
                                    return n.p = e.token, N("FirebaseAppCheckTokenProvider", "Received ".concat(r ? "new" : "existing", " token.")), r ? t(e.token) : Promise.resolve()
                                };
                            this.o = function(t) {
                                e.enqueueRetryable((function() {
                                    return r(t)
                                }))
                            };
                            var i = function(e) {
                                N("FirebaseAppCheckTokenProvider", "AppCheck detected"), n.appCheck = e, n.appCheck.addTokenListener(n.o)
                            };
                            this.g.onInit((function(e) {
                                return i(e)
                            })), setTimeout((function() {
                                if (!n.appCheck) {
                                    var e = n.g.getImmediate({
                                        optional: !0
                                    });
                                    e ? i(e) : N("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
                                }
                            }), 0)
                        }
                    }, {
                        key: "getToken",
                        value: function() {
                            var e = this,
                                t = this.forceRefresh;
                            return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then((function(t) {
                                return t ? (R("string" == typeof t.token), e.p = t.token, new z(t.token)) : null
                            })) : Promise.resolve(null)
                        }
                    }, {
                        key: "invalidateToken",
                        value: function() {
                            this.forceRefresh = !0
                        }
                    }, {
                        key: "shutdown",
                        value: function() {
                            this.appCheck && this.appCheck.removeTokenListener(this.o)
                        }
                    }]), e
                }(),
                W = function() {
                    function e(t, n) {
                        var r = this;
                        (0, f.Z)(this, e), this.previousValue = t, n && (n.sequenceNumberHandler = function(e) {
                            return r.I(e)
                        }, this.T = function(e) {
                            return n.writeSequenceNumber(e)
                        })
                    }
                    return (0, h.Z)(e, [{
                        key: "I",
                        value: function(e) {
                            return this.previousValue = Math.max(e, this.previousValue), this.previousValue
                        }
                    }, {
                        key: "next",
                        value: function() {
                            var e = ++this.previousValue;
                            return this.T && this.T(e), e
                        }
                    }]), e
                }();

            function H(e) {
                var t = "undefined" != typeof self && (self.crypto || self.msCrypto),
                    n = new Uint8Array(e);
                if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
                else
                    for (var r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
                return n
            }
            W.A = -1;
            var Y = function() {
                function e() {
                    (0, f.Z)(this, e)
                }
                return (0, h.Z)(e, null, [{
                    key: "R",
                    value: function() {
                        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / e.length) * e.length, n = ""; n.length < 20;)
                            for (var r = H(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < t && (n += e.charAt(r[i] % e.length));
                        return n
                    }
                }]), e
            }();

            function J(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function $(e, t, n) {
                return e.length === t.length && e.every((function(e, r) {
                    return n(e, t[r])
                }))
            }

            function X(e) {
                return e + "\0"
            }
            var ee = function() {
                    function e(t, n) {
                        if ((0, f.Z)(this, e), this.seconds = t, this.nanoseconds = n, n < 0) throw new P(F.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
                        if (n >= 1e9) throw new P(F.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
                        if (t < -62135596800) throw new P(F.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                        if (t >= 253402300800) throw new P(F.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
                    }
                    return (0, h.Z)(e, [{
                        key: "toDate",
                        value: function() {
                            return new Date(this.toMillis())
                        }
                    }, {
                        key: "toMillis",
                        value: function() {
                            return 1e3 * this.seconds + this.nanoseconds / 1e6
                        }
                    }, {
                        key: "_compareTo",
                        value: function(e) {
                            return this.seconds === e.seconds ? J(this.nanoseconds, e.nanoseconds) : J(this.seconds, e.seconds)
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                seconds: this.seconds,
                                nanoseconds: this.nanoseconds
                            }
                        }
                    }, {
                        key: "valueOf",
                        value: function() {
                            var e = this.seconds - -62135596800;
                            return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                        }
                    }], [{
                        key: "now",
                        value: function() {
                            return e.fromMillis(Date.now())
                        }
                    }, {
                        key: "fromDate",
                        value: function(t) {
                            return e.fromMillis(t.getTime())
                        }
                    }, {
                        key: "fromMillis",
                        value: function(t) {
                            var n = Math.floor(t / 1e3);
                            return new e(n, Math.floor(1e6 * (t - 1e3 * n)))
                        }
                    }]), e
                }(),
                te = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.timestamp = t
                    }
                    return (0, h.Z)(e, [{
                        key: "compareTo",
                        value: function(e) {
                            return this.timestamp._compareTo(e.timestamp)
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this.timestamp.isEqual(e.timestamp)
                        }
                    }, {
                        key: "toMicroseconds",
                        value: function() {
                            return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "SnapshotVersion(" + this.timestamp.toString() + ")"
                        }
                    }, {
                        key: "toTimestamp",
                        value: function() {
                            return this.timestamp
                        }
                    }], [{
                        key: "fromTimestamp",
                        value: function(t) {
                            return new e(t)
                        }
                    }, {
                        key: "min",
                        value: function() {
                            return new e(new ee(0, 0))
                        }
                    }, {
                        key: "max",
                        value: function() {
                            return new e(new ee(253402300799, 999999999))
                        }
                    }]), e
                }();

            function ne(e) {
                var t = 0;
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
                return t
            }

            function re(e, t) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
            }

            function ie(e) {
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }
            var ae = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), void 0 === n ? n = 0 : n > t.length && M(), void 0 === r ? r = t.length - n : r > t.length - n && M(), this.segments = t, this.offset = n, this.len = r
                    }
                    return (0, h.Z)(e, [{
                        key: "length",
                        get: function() {
                            return this.len
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            return 0 === e.comparator(this, t)
                        }
                    }, {
                        key: "child",
                        value: function(t) {
                            var n = this.segments.slice(this.offset, this.limit());
                            return t instanceof e ? t.forEach((function(e) {
                                n.push(e)
                            })) : n.push(t), this.construct(n)
                        }
                    }, {
                        key: "limit",
                        value: function() {
                            return this.offset + this.length
                        }
                    }, {
                        key: "popFirst",
                        value: function(e) {
                            return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e)
                        }
                    }, {
                        key: "popLast",
                        value: function() {
                            return this.construct(this.segments, this.offset, this.length - 1)
                        }
                    }, {
                        key: "firstSegment",
                        value: function() {
                            return this.segments[this.offset]
                        }
                    }, {
                        key: "lastSegment",
                        value: function() {
                            return this.get(this.length - 1)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return this.segments[this.offset + e]
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return 0 === this.length
                        }
                    }, {
                        key: "isPrefixOf",
                        value: function(e) {
                            if (e.length < this.length) return !1;
                            for (var t = 0; t < this.length; t++)
                                if (this.get(t) !== e.get(t)) return !1;
                            return !0
                        }
                    }, {
                        key: "isImmediateParentOf",
                        value: function(e) {
                            if (this.length + 1 !== e.length) return !1;
                            for (var t = 0; t < this.length; t++)
                                if (this.get(t) !== e.get(t)) return !1;
                            return !0
                        }
                    }, {
                        key: "forEach",
                        value: function(e) {
                            for (var t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t])
                        }
                    }, {
                        key: "toArray",
                        value: function() {
                            return this.segments.slice(this.offset, this.limit())
                        }
                    }], [{
                        key: "comparator",
                        value: function(e, t) {
                            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                                var i = e.get(r),
                                    a = t.get(r);
                                if (i < a) return -1;
                                if (i > a) return 1
                            }
                            return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
                        }
                    }]), e
                }(),
                ue = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n() {
                        return (0, f.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, h.Z)(n, [{
                        key: "construct",
                        value: function(e, t, r) {
                            return new n(e, t, r)
                        }
                    }, {
                        key: "canonicalString",
                        value: function() {
                            return this.toArray().join("/")
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.canonicalString()
                        }
                    }], [{
                        key: "fromString",
                        value: function() {
                            for (var e = [], t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            for (var a = 0, u = r; a < u.length; a++) {
                                var o = u[a];
                                if (o.indexOf("//") >= 0) throw new P(F.INVALID_ARGUMENT, "Invalid segment (".concat(o, "). Paths must not contain // in them."));
                                e.push.apply(e, (0, l.Z)(o.split("/").filter((function(e) {
                                    return e.length > 0
                                }))))
                            }
                            return new n(e)
                        }
                    }, {
                        key: "emptyPath",
                        value: function() {
                            return new n([])
                        }
                    }]), n
                }(ae),
                oe = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                se = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n() {
                        return (0, f.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, h.Z)(n, [{
                        key: "construct",
                        value: function(e, t, r) {
                            return new n(e, t, r)
                        }
                    }, {
                        key: "canonicalString",
                        value: function() {
                            return this.toArray().map((function(e) {
                                return e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), n.isValidIdentifier(e) || (e = "`" + e + "`"), e
                            })).join(".")
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.canonicalString()
                        }
                    }, {
                        key: "isKeyField",
                        value: function() {
                            return 1 === this.length && "__name__" === this.get(0)
                        }
                    }], [{
                        key: "isValidIdentifier",
                        value: function(e) {
                            return oe.test(e)
                        }
                    }, {
                        key: "keyField",
                        value: function() {
                            return new n(["__name__"])
                        }
                    }, {
                        key: "fromServerFormat",
                        value: function(e) {
                            for (var t = [], r = "", i = 0, a = function() {
                                    if (0 === r.length) throw new P(F.INVALID_ARGUMENT, "Invalid field path (".concat(e, "). Paths must not be empty, begin with '.', end with '.', or contain '..'"));
                                    t.push(r), r = ""
                                }, u = !1; i < e.length;) {
                                var o = e[i];
                                if ("\\" === o) {
                                    if (i + 1 === e.length) throw new P(F.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
                                    var s = e[i + 1];
                                    if ("\\" !== s && "." !== s && "`" !== s) throw new P(F.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
                                    r += s, i += 2
                                } else "`" === o ? (u = !u, i++) : "." !== o || u ? (r += o, i++) : (a(), i++)
                            }
                            if (a(), u) throw new P(F.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
                            return new n(t)
                        }
                    }, {
                        key: "emptyPath",
                        value: function() {
                            return new n([])
                        }
                    }]), n
                }(ae),
                ce = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.fields = t, t.sort(se.comparator)
                    }
                    return (0, h.Z)(e, [{
                        key: "covers",
                        value: function(e) {
                            var t, n = w(this.fields);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    if (t.value.isPrefixOf(e)) return !0
                                }
                            } catch (r) {
                                n.e(r)
                            } finally {
                                n.f()
                            }
                            return !1
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return $(this.fields, e.fields, (function(e, t) {
                                return e.isEqual(t)
                            }))
                        }
                    }]), e
                }();

            function le() {
                return "undefined" != typeof atob
            }
            var fe = function(e) {
                function t(e) {
                    (0, f.Z)(this, t), this.binaryString = e
                }
                return (0, h.Z)(t, [{
                    key: e,
                    value: function() {
                        var e = this,
                            t = 0;
                        return {
                            next: function() {
                                return t < e.binaryString.length ? {
                                    value: e.binaryString.charCodeAt(t++),
                                    done: !1
                                } : {
                                    value: void 0,
                                    done: !0
                                }
                            }
                        }
                    }
                }, {
                    key: "toBase64",
                    value: function() {
                        return e = this.binaryString, btoa(e);
                        var e
                    }
                }, {
                    key: "toUint8Array",
                    value: function() {
                        return function(e) {
                            for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                            return t
                        }(this.binaryString)
                    }
                }, {
                    key: "approximateByteSize",
                    value: function() {
                        return 2 * this.binaryString.length
                    }
                }, {
                    key: "compareTo",
                    value: function(e) {
                        return J(this.binaryString, e.binaryString)
                    }
                }, {
                    key: "isEqual",
                    value: function(e) {
                        return this.binaryString === e.binaryString
                    }
                }], [{
                    key: "fromBase64String",
                    value: function(e) {
                        return new t(atob(e))
                    }
                }, {
                    key: "fromUint8Array",
                    value: function(e) {
                        var n = function(e) {
                            for (var t = "", n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
                            return t
                        }(e);
                        return new t(n)
                    }
                }]), t
            }(Symbol.iterator);
            fe.EMPTY_BYTE_STRING = new fe("");
            var he = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function de(e) {
                if (R(!!e), "string" == typeof e) {
                    var t = 0,
                        n = he.exec(e);
                    if (R(!!n), n[1]) {
                        var r = n[1];
                        r = (r + "000000000").substr(0, 9), t = Number(r)
                    }
                    var i = new Date(e);
                    return {
                        seconds: Math.floor(i.getTime() / 1e3),
                        nanos: t
                    }
                }
                return {
                    seconds: ve(e.seconds),
                    nanos: ve(e.nanos)
                }
            }

            function ve(e) {
                return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0
            }

            function ye(e) {
                return "string" == typeof e ? fe.fromBase64String(e) : fe.fromUint8Array(e)
            }

            function pe(e) {
                var t, n;
                return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
            }

            function me(e) {
                var t = e.mapValue.fields.__previous_value__;
                return pe(t) ? me(t) : t
            }

            function ge(e) {
                var t = de(e.mapValue.fields.__local_write_time__.timestampValue);
                return new ee(t.seconds, t.nanos)
            }
            var ke = (0, h.Z)((function e(t, n, r, i, a, u, o, s) {
                    (0, f.Z)(this, e), this.databaseId = t, this.appId = n, this.persistenceKey = r, this.host = i, this.ssl = a, this.forceLongPolling = u, this.autoDetectLongPolling = o, this.useFetchStreams = s
                })),
                we = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.projectId = t, this.database = n || "(default)"
                    }
                    return (0, h.Z)(e, [{
                        key: "isDefaultDatabase",
                        get: function() {
                            return "(default)" === this.database
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            return t instanceof e && t.projectId === this.projectId && t.database === this.database
                        }
                    }], [{
                        key: "empty",
                        value: function() {
                            return new e("", "")
                        }
                    }]), e
                }();

            function be(e) {
                return null == e
            }

            function xe(e) {
                return 0 === e && 1 / e == -1 / 0
            }

            function Ie(e) {
                return "number" == typeof e && Number.isInteger(e) && !xe(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER
            }
            var Ee = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.path = t
                    }
                    return (0, h.Z)(e, [{
                        key: "collectionGroup",
                        get: function() {
                            return this.path.popLast().lastSegment()
                        }
                    }, {
                        key: "hasCollectionId",
                        value: function(e) {
                            return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
                        }
                    }, {
                        key: "getCollectionGroup",
                        value: function() {
                            return this.path.get(this.path.length - 2)
                        }
                    }, {
                        key: "getCollectionPath",
                        value: function() {
                            return this.path.popLast()
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return null !== e && 0 === ue.comparator(this.path, e.path)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.path.toString()
                        }
                    }], [{
                        key: "fromPath",
                        value: function(t) {
                            return new e(ue.fromString(t))
                        }
                    }, {
                        key: "fromName",
                        value: function(t) {
                            return new e(ue.fromString(t).popFirst(5))
                        }
                    }, {
                        key: "empty",
                        value: function() {
                            return new e(ue.emptyPath())
                        }
                    }, {
                        key: "comparator",
                        value: function(e, t) {
                            return ue.comparator(e.path, t.path)
                        }
                    }, {
                        key: "isDocumentKey",
                        value: function(e) {
                            return e.length % 2 == 0
                        }
                    }, {
                        key: "fromSegments",
                        value: function(t) {
                            return new e(new ue(t.slice()))
                        }
                    }]), e
                }(),
                Te = {
                    mapValue: {
                        fields: {
                            __type__: {
                                stringValue: "__max__"
                            }
                        }
                    }
                },
                Se = {
                    nullValue: "NULL_VALUE"
                };

            function _e(e) {
                return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? pe(e) ? 4 : Ue(e) ? 9 : 10 : M()
            }

            function Ae(e, t) {
                if (e === t) return !0;
                var n = _e(e);
                if (n !== _e(t)) return !1;
                switch (n) {
                    case 0:
                    case 9007199254740991:
                        return !0;
                    case 1:
                        return e.booleanValue === t.booleanValue;
                    case 4:
                        return ge(e).isEqual(ge(t));
                    case 3:
                        return function(e, t) {
                            if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length) return e.timestampValue === t.timestampValue;
                            var n = de(e.timestampValue),
                                r = de(t.timestampValue);
                            return n.seconds === r.seconds && n.nanos === r.nanos
                        }(e, t);
                    case 5:
                        return e.stringValue === t.stringValue;
                    case 6:
                        return function(e, t) {
                            return ye(e.bytesValue).isEqual(ye(t.bytesValue))
                        }(e, t);
                    case 7:
                        return e.referenceValue === t.referenceValue;
                    case 8:
                        return function(e, t) {
                            return ve(e.geoPointValue.latitude) === ve(t.geoPointValue.latitude) && ve(e.geoPointValue.longitude) === ve(t.geoPointValue.longitude)
                        }(e, t);
                    case 2:
                        return function(e, t) {
                            if ("integerValue" in e && "integerValue" in t) return ve(e.integerValue) === ve(t.integerValue);
                            if ("doubleValue" in e && "doubleValue" in t) {
                                var n = ve(e.doubleValue),
                                    r = ve(t.doubleValue);
                                return n === r ? xe(n) === xe(r) : isNaN(n) && isNaN(r)
                            }
                            return !1
                        }(e, t);
                    case 9:
                        return $(e.arrayValue.values || [], t.arrayValue.values || [], Ae);
                    case 10:
                        return function(e, t) {
                            var n = e.mapValue.fields || {},
                                r = t.mapValue.fields || {};
                            if (ne(n) !== ne(r)) return !1;
                            for (var i in n)
                                if (n.hasOwnProperty(i) && (void 0 === r[i] || !Ae(n[i], r[i]))) return !1;
                            return !0
                        }(e, t);
                    default:
                        return M()
                }
            }

            function Ne(e, t) {
                return void 0 !== (e.values || []).find((function(e) {
                    return Ae(e, t)
                }))
            }

            function De(e, t) {
                if (e === t) return 0;
                var n = _e(e),
                    r = _e(t);
                if (n !== r) return J(n, r);
                switch (n) {
                    case 0:
                    case 9007199254740991:
                        return 0;
                    case 1:
                        return J(e.booleanValue, t.booleanValue);
                    case 2:
                        return function(e, t) {
                            var n = ve(e.integerValue || e.doubleValue),
                                r = ve(t.integerValue || t.doubleValue);
                            return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
                        }(e, t);
                    case 3:
                        return Ce(e.timestampValue, t.timestampValue);
                    case 4:
                        return Ce(ge(e), ge(t));
                    case 5:
                        return J(e.stringValue, t.stringValue);
                    case 6:
                        return function(e, t) {
                            var n = ye(e),
                                r = ye(t);
                            return n.compareTo(r)
                        }(e.bytesValue, t.bytesValue);
                    case 7:
                        return function(e, t) {
                            for (var n = e.split("/"), r = t.split("/"), i = 0; i < n.length && i < r.length; i++) {
                                var a = J(n[i], r[i]);
                                if (0 !== a) return a
                            }
                            return J(n.length, r.length)
                        }(e.referenceValue, t.referenceValue);
                    case 8:
                        return function(e, t) {
                            var n = J(ve(e.latitude), ve(t.latitude));
                            return 0 !== n ? n : J(ve(e.longitude), ve(t.longitude))
                        }(e.geoPointValue, t.geoPointValue);
                    case 9:
                        return function(e, t) {
                            for (var n = e.values || [], r = t.values || [], i = 0; i < n.length && i < r.length; ++i) {
                                var a = De(n[i], r[i]);
                                if (a) return a
                            }
                            return J(n.length, r.length)
                        }(e.arrayValue, t.arrayValue);
                    case 10:
                        return function(e, t) {
                            var n = e.fields || {},
                                r = Object.keys(n),
                                i = t.fields || {},
                                a = Object.keys(i);
                            r.sort(), a.sort();
                            for (var u = 0; u < r.length && u < a.length; ++u) {
                                var o = J(r[u], a[u]);
                                if (0 !== o) return o;
                                var s = De(n[r[u]], i[a[u]]);
                                if (0 !== s) return s
                            }
                            return J(r.length, a.length)
                        }(e.mapValue, t.mapValue);
                    default:
                        throw M()
                }
            }

            function Ce(e, t) {
                if ("string" == typeof e && "string" == typeof t && e.length === t.length) return J(e, t);
                var n = de(e),
                    r = de(t),
                    i = J(n.seconds, r.seconds);
                return 0 !== i ? i : J(n.nanos, r.nanos)
            }

            function Ze(e) {
                return Me(e)
            }

            function Me(e) {
                return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(e) {
                    var t = de(e);
                    return "time(".concat(t.seconds, ",").concat(t.nanos, ")")
                }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? ye(e.bytesValue).toBase64() : "referenceValue" in e ? (n = e.referenceValue, Ee.fromName(n).toString()) : "geoPointValue" in e ? "geo(".concat((t = e.geoPointValue).latitude, ",").concat(t.longitude, ")") : "arrayValue" in e ? function(e) {
                    var t, n = "[",
                        r = !0,
                        i = w(e.values || []);
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var a = t.value;
                            r ? r = !1 : n += ",", n += Me(a)
                        }
                    } catch (u) {
                        i.e(u)
                    } finally {
                        i.f()
                    }
                    return n + "]"
                }(e.arrayValue) : "mapValue" in e ? function(e) {
                    var t, n = "{",
                        r = !0,
                        i = w(Object.keys(e.fields || {}).sort());
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var a = t.value;
                            r ? r = !1 : n += ",", n += "".concat(a, ":").concat(Me(e.fields[a]))
                        }
                    } catch (u) {
                        i.e(u)
                    } finally {
                        i.f()
                    }
                    return n + "}"
                }(e.mapValue) : M();
                var t, n
            }

            function Re(e, t) {
                return {
                    referenceValue: "projects/".concat(e.projectId, "/databases/").concat(e.database, "/documents/").concat(t.path.canonicalString())
                }
            }

            function Ve(e) {
                return !!e && "integerValue" in e
            }

            function Le(e) {
                return !!e && "arrayValue" in e
            }

            function Fe(e) {
                return !!e && "nullValue" in e
            }

            function Pe(e) {
                return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue))
            }

            function Oe(e) {
                return !!e && "mapValue" in e
            }

            function qe(e) {
                if (e.geoPointValue) return {
                    geoPointValue: Object.assign({}, e.geoPointValue)
                };
                if (e.timestampValue && "object" == typeof e.timestampValue) return {
                    timestampValue: Object.assign({}, e.timestampValue)
                };
                if (e.mapValue) {
                    var t = {
                        mapValue: {
                            fields: {}
                        }
                    };
                    return re(e.mapValue.fields, (function(e, n) {
                        return t.mapValue.fields[e] = qe(n)
                    })), t
                }
                if (e.arrayValue) {
                    for (var n = {
                            arrayValue: {
                                values: []
                            }
                        }, r = 0; r < (e.arrayValue.values || []).length; ++r) n.arrayValue.values[r] = qe(e.arrayValue.values[r]);
                    return n
                }
                return Object.assign({}, e)
            }

            function Ue(e) {
                return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
            }

            function Be(e, t) {
                return void 0 === e ? t : void 0 === t || De(e, t) > 0 ? e : t
            }

            function Ke(e, t) {
                return void 0 === e ? t : void 0 === t || De(e, t) < 0 ? e : t
            }
            var Ge = function() {
                function e(t) {
                    (0, f.Z)(this, e), this.value = t
                }
                return (0, h.Z)(e, [{
                    key: "field",
                    value: function(e) {
                        if (e.isEmpty()) return this.value;
                        for (var t = this.value, n = 0; n < e.length - 1; ++n)
                            if (!Oe(t = (t.mapValue.fields || {})[e.get(n)])) return null;
                        return (t = (t.mapValue.fields || {})[e.lastSegment()]) || null
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        this.getFieldsMap(e.popLast())[e.lastSegment()] = qe(t)
                    }
                }, {
                    key: "setAll",
                    value: function(e) {
                        var t = this,
                            n = se.emptyPath(),
                            r = {},
                            i = [];
                        e.forEach((function(e, a) {
                            if (!n.isImmediateParentOf(a)) {
                                var u = t.getFieldsMap(n);
                                t.applyChanges(u, r, i), r = {}, i = [], n = a.popLast()
                            }
                            e ? r[a.lastSegment()] = qe(e) : i.push(a.lastSegment())
                        }));
                        var a = this.getFieldsMap(n);
                        this.applyChanges(a, r, i)
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        var t = this.field(e.popLast());
                        Oe(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()]
                    }
                }, {
                    key: "isEqual",
                    value: function(e) {
                        return Ae(this.value, e.value)
                    }
                }, {
                    key: "getFieldsMap",
                    value: function(e) {
                        var t = this.value;
                        t.mapValue.fields || (t.mapValue = {
                            fields: {}
                        });
                        for (var n = 0; n < e.length; ++n) {
                            var r = t.mapValue.fields[e.get(n)];
                            Oe(r) && r.mapValue.fields || (r = {
                                mapValue: {
                                    fields: {}
                                }
                            }, t.mapValue.fields[e.get(n)] = r), t = r
                        }
                        return t.mapValue.fields
                    }
                }, {
                    key: "applyChanges",
                    value: function(e, t, n) {
                        re(t, (function(t, n) {
                            return e[t] = n
                        }));
                        var r, i = w(n);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var a = r.value;
                                delete e[a]
                            }
                        } catch (u) {
                            i.e(u)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new e(qe(this.value))
                    }
                }], [{
                    key: "empty",
                    value: function() {
                        return new e({
                            mapValue: {}
                        })
                    }
                }]), e
            }();

            function je(e) {
                var t = [];
                return re(e.fields, (function(e, n) {
                    var r = new se([e]);
                    if (Oe(n)) {
                        var i = je(n.mapValue).fields;
                        if (0 === i.length) t.push(r);
                        else {
                            var a, u = w(i);
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var o = a.value;
                                    t.push(r.child(o))
                                }
                            } catch (s) {
                                u.e(s)
                            } finally {
                                u.f()
                            }
                        }
                    } else t.push(r)
                })), new ce(t)
            }
            var ze = function() {
                    function e(t, n, r, i, a, u) {
                        (0, f.Z)(this, e), this.key = t, this.documentType = n, this.version = r, this.readTime = i, this.data = a, this.documentState = u
                    }
                    return (0, h.Z)(e, [{
                        key: "convertToFoundDocument",
                        value: function(e, t) {
                            return this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this
                        }
                    }, {
                        key: "convertToNoDocument",
                        value: function(e) {
                            return this.version = e, this.documentType = 2, this.data = Ge.empty(), this.documentState = 0, this
                        }
                    }, {
                        key: "convertToUnknownDocument",
                        value: function(e) {
                            return this.version = e, this.documentType = 3, this.data = Ge.empty(), this.documentState = 2, this
                        }
                    }, {
                        key: "setHasCommittedMutations",
                        value: function() {
                            return this.documentState = 2, this
                        }
                    }, {
                        key: "setHasLocalMutations",
                        value: function() {
                            return this.documentState = 1, this
                        }
                    }, {
                        key: "setReadTime",
                        value: function(e) {
                            return this.readTime = e, this
                        }
                    }, {
                        key: "hasLocalMutations",
                        get: function() {
                            return 1 === this.documentState
                        }
                    }, {
                        key: "hasCommittedMutations",
                        get: function() {
                            return 2 === this.documentState
                        }
                    }, {
                        key: "hasPendingWrites",
                        get: function() {
                            return this.hasLocalMutations || this.hasCommittedMutations
                        }
                    }, {
                        key: "isValidDocument",
                        value: function() {
                            return 0 !== this.documentType
                        }
                    }, {
                        key: "isFoundDocument",
                        value: function() {
                            return 1 === this.documentType
                        }
                    }, {
                        key: "isNoDocument",
                        value: function() {
                            return 2 === this.documentType
                        }
                    }, {
                        key: "isUnknownDocument",
                        value: function() {
                            return 3 === this.documentType
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data)
                        }
                    }, {
                        key: "mutableCopy",
                        value: function() {
                            return new e(this.key, this.documentType, this.version, this.readTime, this.data.clone(), this.documentState)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "Document(".concat(this.key, ", ").concat(this.version, ", ").concat(JSON.stringify(this.data.value), ", {documentType: ").concat(this.documentType, "}), {documentState: ").concat(this.documentState, "})")
                        }
                    }], [{
                        key: "newInvalidDocument",
                        value: function(t) {
                            return new e(t, 0, te.min(), te.min(), Ge.empty(), 0)
                        }
                    }, {
                        key: "newFoundDocument",
                        value: function(t, n, r) {
                            return new e(t, 1, n, te.min(), r, 0)
                        }
                    }, {
                        key: "newNoDocument",
                        value: function(t, n) {
                            return new e(t, 2, n, te.min(), Ge.empty(), 0)
                        }
                    }, {
                        key: "newUnknownDocument",
                        value: function(t, n) {
                            return new e(t, 3, n, te.min(), Ge.empty(), 2)
                        }
                    }]), e
                }(),
                Qe = (0, h.Z)((function e(t, n, r, i) {
                    (0, f.Z)(this, e), this.indexId = t, this.collectionGroup = n, this.fields = r, this.indexState = i
                }));

            function We(e) {
                return e.fields.find((function(e) {
                    return 2 === e.kind
                }))
            }

            function He(e) {
                return e.fields.filter((function(e) {
                    return 2 !== e.kind
                }))
            }
            Qe.UNKNOWN_ID = -1;
            var Ye = (0, h.Z)((function e(t, n) {
                    (0, f.Z)(this, e), this.fieldPath = t, this.kind = n
                })),
                Je = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.sequenceNumber = t, this.offset = n
                    }
                    return (0, h.Z)(e, null, [{
                        key: "empty",
                        value: function() {
                            return new e(0, et.min())
                        }
                    }]), e
                }();

            function $e(e, t) {
                var n = e.toTimestamp().seconds,
                    r = e.toTimestamp().nanoseconds + 1,
                    i = te.fromTimestamp(1e9 === r ? new ee(n + 1, 0) : new ee(n, r));
                return new et(i, Ee.empty(), t)
            }

            function Xe(e) {
                return new et(e.readTime, e.key, -1)
            }
            var et = function() {
                function e(t, n, r) {
                    (0, f.Z)(this, e), this.readTime = t, this.documentKey = n, this.largestBatchId = r
                }
                return (0, h.Z)(e, null, [{
                    key: "min",
                    value: function() {
                        return new e(te.min(), Ee.empty(), -1)
                    }
                }, {
                    key: "max",
                    value: function() {
                        return new e(te.max(), Ee.empty(), -1)
                    }
                }]), e
            }();

            function tt(e, t) {
                var n = e.readTime.compareTo(t.readTime);
                return 0 !== n ? n : 0 !== (n = Ee.comparator(e.documentKey, t.documentKey)) ? n : J(e.largestBatchId, t.largestBatchId)
            }
            var nt = (0, h.Z)((function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                (0, f.Z)(this, e), this.path = t, this.collectionGroup = n, this.orderBy = r, this.filters = i, this.limit = a, this.startAt = u, this.endAt = o, this.P = null
            }));

            function rt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                    u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                return new nt(e, t, n, r, i, a, u)
            }

            function it(e) {
                var t = L(e);
                if (null === t.P) {
                    var n = t.path.canonicalString();
                    null !== t.collectionGroup && (n += "|cg:" + t.collectionGroup), n += "|f:", n += t.filters.map((function(e) {
                        return (t = e).field.canonicalString() + t.op.toString() + Ze(t.value);
                        var t
                    })).join(","), n += "|ob:", n += t.orderBy.map((function(e) {
                        return function(e) {
                            return e.field.canonicalString() + e.dir
                        }(e)
                    })).join(","), be(t.limit) || (n += "|l:", n += t.limit), t.startAt && (n += "|lb:", n += t.startAt.inclusive ? "b:" : "a:", n += t.startAt.position.map((function(e) {
                        return Ze(e)
                    })).join(",")), t.endAt && (n += "|ub:", n += t.endAt.inclusive ? "a:" : "b:", n += t.endAt.position.map((function(e) {
                        return Ze(e)
                    })).join(",")), t.P = n
                }
                return t.P
            }

            function at(e, t) {
                if (e.limit !== t.limit) return !1;
                if (e.orderBy.length !== t.orderBy.length) return !1;
                for (var n = 0; n < e.orderBy.length; n++)
                    if (!kt(e.orderBy[n], t.orderBy[n])) return !1;
                if (e.filters.length !== t.filters.length) return !1;
                for (var r = 0; r < e.filters.length; r++)
                    if (i = e.filters[r], a = t.filters[r], i.op !== a.op || !i.field.isEqual(a.field) || !Ae(i.value, a.value)) return !1;
                var i, a;
                return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!bt(e.startAt, t.startAt) && bt(e.endAt, t.endAt)
            }

            function ut(e) {
                return Ee.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
            }

            function ot(e, t) {
                return e.filters.filter((function(e) {
                    return e instanceof st && e.field.isEqual(t)
                }))
            }
            var st = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i) {
                        var a;
                        return (0, f.Z)(this, n), (a = t.call(this)).field = e, a.op = r, a.value = i, a
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            var t = e.data.field(this.field);
                            return "!=" === this.op ? null !== t && this.v(De(t, this.value)) : null !== t && _e(this.value) === _e(t) && this.v(De(t, this.value))
                        }
                    }, {
                        key: "v",
                        value: function(e) {
                            switch (this.op) {
                                case "<":
                                    return e < 0;
                                case "<=":
                                    return e <= 0;
                                case "==":
                                    return 0 === e;
                                case "!=":
                                    return 0 !== e;
                                case ">":
                                    return e > 0;
                                case ">=":
                                    return e >= 0;
                                default:
                                    return M()
                            }
                        }
                    }, {
                        key: "S",
                        value: function() {
                            return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
                        }
                    }], [{
                        key: "create",
                        value: function(e, t, r) {
                            return e.isKeyField() ? "in" === t || "not-in" === t ? this.V(e, t, r) : new ct(e, t, r) : "array-contains" === t ? new dt(e, r) : "in" === t ? new vt(e, r) : "not-in" === t ? new yt(e, r) : "array-contains-any" === t ? new pt(e, r) : new n(e, t, r)
                        }
                    }, {
                        key: "V",
                        value: function(e, t, n) {
                            return "in" === t ? new lt(e, n) : new ft(e, n)
                        }
                    }]), n
                }(function() {
                    return (0, h.Z)((function e() {
                        (0, f.Z)(this, e)
                    }))
                }()),
                ct = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i) {
                        var a;
                        return (0, f.Z)(this, n), (a = t.call(this, e, r, i)).key = Ee.fromName(i.referenceValue), a
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            var t = Ee.comparator(e.key, this.key);
                            return this.v(t)
                        }
                    }]), n
                }(st),
                lt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, e, "in", r)).keys = ht("in", r), i
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            return this.keys.some((function(t) {
                                return t.isEqual(e.key)
                            }))
                        }
                    }]), n
                }(st),
                ft = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, e, "not-in", r)).keys = ht("not-in", r), i
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            return !this.keys.some((function(t) {
                                return t.isEqual(e.key)
                            }))
                        }
                    }]), n
                }(st);

            function ht(e, t) {
                var n;
                return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(e) {
                    return Ee.fromName(e.referenceValue)
                }))
            }
            var dt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        return (0, f.Z)(this, n), t.call(this, e, "array-contains", r)
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            var t = e.data.field(this.field);
                            return Le(t) && Ne(t.arrayValue, this.value)
                        }
                    }]), n
                }(st),
                vt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        return (0, f.Z)(this, n), t.call(this, e, "in", r)
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            var t = e.data.field(this.field);
                            return null !== t && Ne(this.value.arrayValue, t)
                        }
                    }]), n
                }(st),
                yt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        return (0, f.Z)(this, n), t.call(this, e, "not-in", r)
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            if (Ne(this.value.arrayValue, {
                                    nullValue: "NULL_VALUE"
                                })) return !1;
                            var t = e.data.field(this.field);
                            return null !== t && !Ne(this.value.arrayValue, t)
                        }
                    }]), n
                }(st),
                pt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        return (0, f.Z)(this, n), t.call(this, e, "array-contains-any", r)
                    }
                    return (0, h.Z)(n, [{
                        key: "matches",
                        value: function(e) {
                            var t = this,
                                n = e.data.field(this.field);
                            return !(!Le(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(e) {
                                return Ne(t.value.arrayValue, e)
                            }))
                        }
                    }]), n
                }(st),
                mt = (0, h.Z)((function e(t, n) {
                    (0, f.Z)(this, e), this.position = t, this.inclusive = n
                })),
                gt = (0, h.Z)((function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "asc";
                    (0, f.Z)(this, e), this.field = t, this.dir = n
                }));

            function kt(e, t) {
                return e.dir === t.dir && e.field.isEqual(t.field)
            }

            function wt(e, t, n) {
                for (var r = 0, i = 0; i < e.position.length; i++) {
                    var a = t[i],
                        u = e.position[i];
                    if (r = a.field.isKeyField() ? Ee.comparator(Ee.fromName(u.referenceValue), n.key) : De(u, n.data.field(a.field)), "desc" === a.dir && (r *= -1), 0 !== r) break
                }
                return r
            }

            function bt(e, t) {
                if (null === e) return null === t;
                if (null === t) return !1;
                if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return !1;
                for (var n = 0; n < e.position.length; n++)
                    if (!Ae(e.position[n], t.position[n])) return !1;
                return !0
            }
            var xt = (0, h.Z)((function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "F",
                    o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
                (0, f.Z)(this, e), this.path = t, this.collectionGroup = n, this.explicitOrderBy = r, this.filters = i, this.limit = a, this.limitType = u, this.startAt = o, this.endAt = s, this.D = null, this.C = null, this.startAt, this.endAt
            }));

            function It(e, t, n, r, i, a, u, o) {
                return new xt(e, t, n, r, i, a, u, o)
            }

            function Et(e) {
                return new xt(e)
            }

            function Tt(e) {
                return !be(e.limit) && "F" === e.limitType
            }

            function St(e) {
                return !be(e.limit) && "L" === e.limitType
            }

            function _t(e) {
                return e.explicitOrderBy.length > 0 ? e.explicitOrderBy[0].field : null
            }

            function At(e) {
                var t, n = w(e.filters);
                try {
                    for (n.s(); !(t = n.n()).done;) {
                        var r = t.value;
                        if (r.S()) return r.field
                    }
                } catch (i) {
                    n.e(i)
                } finally {
                    n.f()
                }
                return null
            }

            function Nt(e) {
                return null !== e.collectionGroup
            }

            function Dt(e) {
                var t = L(e);
                if (null === t.D) {
                    t.D = [];
                    var n = At(t),
                        r = _t(t);
                    if (null !== n && null === r) n.isKeyField() || t.D.push(new gt(n)), t.D.push(new gt(se.keyField(), "asc"));
                    else {
                        var i, a = !1,
                            u = w(t.explicitOrderBy);
                        try {
                            for (u.s(); !(i = u.n()).done;) {
                                var o = i.value;
                                t.D.push(o), o.field.isKeyField() && (a = !0)
                            }
                        } catch (c) {
                            u.e(c)
                        } finally {
                            u.f()
                        }
                        if (!a) {
                            var s = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
                            t.D.push(new gt(se.keyField(), s))
                        }
                    }
                }
                return t.D
            }

            function Ct(e) {
                var t = L(e);
                if (!t.C)
                    if ("F" === t.limitType) t.C = rt(t.path, t.collectionGroup, Dt(t), t.filters, t.limit, t.startAt, t.endAt);
                    else {
                        var n, r = [],
                            i = w(Dt(t));
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var a = n.value,
                                    u = "desc" === a.dir ? "asc" : "desc";
                                r.push(new gt(a.field, u))
                            }
                        } catch (c) {
                            i.e(c)
                        } finally {
                            i.f()
                        }
                        var o = t.endAt ? new mt(t.endAt.position, !t.endAt.inclusive) : null,
                            s = t.startAt ? new mt(t.startAt.position, !t.startAt.inclusive) : null;
                        t.C = rt(t.path, t.collectionGroup, r, t.filters, t.limit, o, s)
                    }
                return t.C
            }

            function Zt(e, t, n) {
                return new xt(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt)
            }

            function Mt(e, t) {
                return at(Ct(e), Ct(t)) && e.limitType === t.limitType
            }

            function Rt(e) {
                return "".concat(it(Ct(e)), "|lt:").concat(e.limitType)
            }

            function Vt(e) {
                return "Query(target=".concat(function(e) {
                    var t = e.path.canonicalString();
                    return null !== e.collectionGroup && (t += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (t += ", filters: [".concat(e.filters.map((function(e) {
                        return "".concat((t = e).field.canonicalString(), " ").concat(t.op, " ").concat(Ze(t.value));
                        var t
                    })).join(", "), "]")), be(e.limit) || (t += ", limit: " + e.limit), e.orderBy.length > 0 && (t += ", orderBy: [".concat(e.orderBy.map((function(e) {
                        return function(e) {
                            return "".concat(e.field.canonicalString(), " (").concat(e.dir, ")")
                        }(e)
                    })).join(", "), "]")), e.startAt && (t += ", startAt: ", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map((function(e) {
                        return Ze(e)
                    })).join(",")), e.endAt && (t += ", endAt: ", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map((function(e) {
                        return Ze(e)
                    })).join(",")), "Target(".concat(t, ")")
                }(Ct(e)), "; limitType=").concat(e.limitType, ")")
            }

            function Lt(e, t) {
                return t.isFoundDocument() && function(e, t) {
                    var n = t.key.path;
                    return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : Ee.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)
                }(e, t) && function(e, t) {
                    var n, r = w(e.explicitOrderBy);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var i = n.value;
                            if (!i.field.isKeyField() && null === t.data.field(i.field)) return !1
                        }
                    } catch (a) {
                        r.e(a)
                    } finally {
                        r.f()
                    }
                    return !0
                }(e, t) && function(e, t) {
                    var n, r = w(e.filters);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            if (!n.value.matches(t)) return !1
                        }
                    } catch (i) {
                        r.e(i)
                    } finally {
                        r.f()
                    }
                    return !0
                }(e, t) && function(e, t) {
                    return !(e.startAt && ! function(e, t, n) {
                        var r = wt(e, t, n);
                        return e.inclusive ? r <= 0 : r < 0
                    }(e.startAt, Dt(e), t)) && !(e.endAt && ! function(e, t, n) {
                        var r = wt(e, t, n);
                        return e.inclusive ? r >= 0 : r > 0
                    }(e.endAt, Dt(e), t))
                }(e, t)
            }

            function Ft(e) {
                return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2))
            }

            function Pt(e) {
                return function(t, n) {
                    var r, i = !1,
                        a = w(Dt(e));
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            var u = r.value,
                                o = Ot(u, t, n);
                            if (0 !== o) return o;
                            i = i || u.field.isKeyField()
                        }
                    } catch (s) {
                        a.e(s)
                    } finally {
                        a.f()
                    }
                    return 0
                }
            }

            function Ot(e, t, n) {
                var r = e.field.isKeyField() ? Ee.comparator(t.key, n.key) : function(e, t, n) {
                    var r = t.data.field(e),
                        i = n.data.field(e);
                    return null !== r && null !== i ? De(r, i) : M()
                }(e.field, t, n);
                switch (e.dir) {
                    case "asc":
                        return r;
                    case "desc":
                        return -1 * r;
                    default:
                        return M()
                }
            }

            function qt(e, t) {
                if (e.N) {
                    if (isNaN(t)) return {
                        doubleValue: "NaN"
                    };
                    if (t === 1 / 0) return {
                        doubleValue: "Infinity"
                    };
                    if (t === -1 / 0) return {
                        doubleValue: "-Infinity"
                    }
                }
                return {
                    doubleValue: xe(t) ? "-0" : t
                }
            }

            function Ut(e) {
                return {
                    integerValue: "" + e
                }
            }

            function Bt(e, t) {
                return Ie(t) ? Ut(t) : qt(e, t)
            }
            var Kt = (0, h.Z)((function e() {
                (0, f.Z)(this, e), this._ = void 0
            }));

            function Gt(e, t, n) {
                return e instanceof Qt ? function(e, t) {
                    var n = {
                        fields: {
                            __type__: {
                                stringValue: "server_timestamp"
                            },
                            __local_write_time__: {
                                timestampValue: {
                                    seconds: e.seconds,
                                    nanos: e.nanoseconds
                                }
                            }
                        }
                    };
                    return t && (n.fields.__previous_value__ = t), {
                        mapValue: n
                    }
                }(n, t) : e instanceof Wt ? Ht(e, t) : e instanceof Yt ? Jt(e, t) : function(e, t) {
                    var n = zt(e, t),
                        r = Xt(n) + Xt(e.k);
                    return Ve(n) && Ve(e.k) ? Ut(r) : qt(e.M, r)
                }(e, t)
            }

            function jt(e, t, n) {
                return e instanceof Wt ? Ht(e, t) : e instanceof Yt ? Jt(e, t) : n
            }

            function zt(e, t) {
                return e instanceof $t ? Ve(n = t) || function(e) {
                    return !!e && "doubleValue" in e
                }(n) ? t : {
                    integerValue: 0
                } : null;
                var n
            }
            var Qt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n() {
                        return (0, f.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, h.Z)(n)
                }(Kt),
                Wt = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e) {
                        var r;
                        return (0, f.Z)(this, n), (r = t.call(this)).elements = e, r
                    }
                    return (0, h.Z)(n)
                }(Kt);

            function Ht(e, t) {
                var n, r = en(t),
                    i = w(e.elements);
                try {
                    var a = function() {
                        var e = n.value;
                        r.some((function(t) {
                            return Ae(t, e)
                        })) || r.push(e)
                    };
                    for (i.s(); !(n = i.n()).done;) a()
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
                return {
                    arrayValue: {
                        values: r
                    }
                }
            }
            var Yt = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e) {
                    var r;
                    return (0, f.Z)(this, n), (r = t.call(this)).elements = e, r
                }
                return (0, h.Z)(n)
            }(Kt);

            function Jt(e, t) {
                var n, r = en(t),
                    i = w(e.elements);
                try {
                    var a = function() {
                        var e = n.value;
                        r = r.filter((function(t) {
                            return !Ae(t, e)
                        }))
                    };
                    for (i.s(); !(n = i.n()).done;) a()
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
                return {
                    arrayValue: {
                        values: r
                    }
                }
            }
            var $t = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r) {
                    var i;
                    return (0, f.Z)(this, n), (i = t.call(this)).M = e, i.k = r, i
                }
                return (0, h.Z)(n)
            }(Kt);

            function Xt(e) {
                return ve(e.integerValue || e.doubleValue)
            }

            function en(e) {
                return Le(e) && e.arrayValue.values ? e.arrayValue.values.slice() : []
            }
            var tn = (0, h.Z)((function e(t, n) {
                (0, f.Z)(this, e), this.field = t, this.transform = n
            }));
            var nn = (0, h.Z)((function e(t, n) {
                    (0, f.Z)(this, e), this.version = t, this.transformResults = n
                })),
                rn = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.updateTime = t, this.exists = n
                    }
                    return (0, h.Z)(e, [{
                        key: "isNone",
                        get: function() {
                            return void 0 === this.updateTime && void 0 === this.exists
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
                        }
                    }], [{
                        key: "none",
                        value: function() {
                            return new e
                        }
                    }, {
                        key: "exists",
                        value: function(t) {
                            return new e(void 0, t)
                        }
                    }, {
                        key: "updateTime",
                        value: function(t) {
                            return new e(t)
                        }
                    }]), e
                }();

            function an(e, t) {
                return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument()
            }
            var un = (0, h.Z)((function e() {
                (0, f.Z)(this, e)
            }));

            function on(e, t, n) {
                e instanceof hn ? function(e, t, n) {
                    var r = e.value.clone(),
                        i = yn(e.fieldTransforms, t, n.transformResults);
                    r.setAll(i), t.convertToFoundDocument(n.version, r).setHasCommittedMutations()
                }(e, t, n) : e instanceof dn ? function(e, t, n) {
                    if (an(e.precondition, t)) {
                        var r = yn(e.fieldTransforms, t, n.transformResults),
                            i = t.data;
                        i.setAll(vn(e)), i.setAll(r), t.convertToFoundDocument(n.version, i).setHasCommittedMutations()
                    } else t.convertToUnknownDocument(n.version)
                }(e, t, n) : function(e, t, n) {
                    t.convertToNoDocument(n.version).setHasCommittedMutations()
                }(0, t, n)
            }

            function sn(e, t, n) {
                e instanceof hn ? function(e, t, n) {
                    if (an(e.precondition, t)) {
                        var r = e.value.clone(),
                            i = pn(e.fieldTransforms, n, t);
                        r.setAll(i), t.convertToFoundDocument(fn(t), r).setHasLocalMutations()
                    }
                }(e, t, n) : e instanceof dn ? function(e, t, n) {
                    if (an(e.precondition, t)) {
                        var r = pn(e.fieldTransforms, n, t),
                            i = t.data;
                        i.setAll(vn(e)), i.setAll(r), t.convertToFoundDocument(fn(t), i).setHasLocalMutations()
                    }
                }(e, t, n) : function(e, t) {
                    an(e.precondition, t) && t.convertToNoDocument(te.min())
                }(e, t)
            }

            function cn(e, t) {
                var n, r = null,
                    i = w(e.fieldTransforms);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var a = n.value,
                            u = t.data.field(a.field),
                            o = zt(a.transform, u || null);
                        null != o && (null == r && (r = Ge.empty()), r.set(a.field, o))
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
                return r || null
            }

            function ln(e, t) {
                return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !! function(e, t) {
                    return void 0 === e && void 0 === t || !(!e || !t) && $(e, t, (function(e, t) {
                        return function(e, t) {
                            return e.field.isEqual(t.field) && function(e, t) {
                                return e instanceof Wt && t instanceof Wt || e instanceof Yt && t instanceof Yt ? $(e.elements, t.elements, Ae) : e instanceof $t && t instanceof $t ? Ae(e.k, t.k) : e instanceof Qt && t instanceof Qt
                            }(e.transform, t.transform)
                        }(e, t)
                    }))
                }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask))
            }

            function fn(e) {
                return e.isFoundDocument() ? e.version : te.min()
            }
            var hn = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i) {
                        var a, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                        return (0, f.Z)(this, n), (a = t.call(this)).key = e, a.value = r, a.precondition = i, a.fieldTransforms = u, a.type = 0, a
                    }
                    return (0, h.Z)(n)
                }(un),
                dn = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i, a) {
                        var u, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                        return (0, f.Z)(this, n), (u = t.call(this)).key = e, u.data = r, u.fieldMask = i, u.precondition = a, u.fieldTransforms = o, u.type = 1, u
                    }
                    return (0, h.Z)(n)
                }(un);

            function vn(e) {
                var t = new Map;
                return e.fieldMask.fields.forEach((function(n) {
                    if (!n.isEmpty()) {
                        var r = e.data.field(n);
                        t.set(n, r)
                    }
                })), t
            }

            function yn(e, t, n) {
                var r = new Map;
                R(e.length === n.length);
                for (var i = 0; i < n.length; i++) {
                    var a = e[i],
                        u = a.transform,
                        o = t.data.field(a.field);
                    r.set(a.field, jt(u, o, n[i]))
                }
                return r
            }

            function pn(e, t, n) {
                var r, i = new Map,
                    a = w(e);
                try {
                    for (a.s(); !(r = a.n()).done;) {
                        var u = r.value,
                            o = u.transform,
                            s = n.data.field(u.field);
                        i.set(u.field, Gt(o, s, t))
                    }
                } catch (c) {
                    a.e(c)
                } finally {
                    a.f()
                }
                return i
            }
            var mn, gn, kn = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this)).key = e, i.precondition = r, i.type = 2, i.fieldTransforms = [], i
                    }
                    return (0, h.Z)(n)
                }(un),
                wn = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this)).key = e, i.precondition = r, i.type = 3, i.fieldTransforms = [], i
                    }
                    return (0, h.Z)(n)
                }(un),
                bn = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this.count = t
                }));

            function xn(e) {
                switch (e) {
                    default: return M();
                    case F.CANCELLED:
                            case F.UNKNOWN:
                            case F.DEADLINE_EXCEEDED:
                            case F.RESOURCE_EXHAUSTED:
                            case F.INTERNAL:
                            case F.UNAVAILABLE:
                            case F.UNAUTHENTICATED:
                            return !1;
                    case F.INVALID_ARGUMENT:
                            case F.NOT_FOUND:
                            case F.ALREADY_EXISTS:
                            case F.PERMISSION_DENIED:
                            case F.FAILED_PRECONDITION:
                            case F.ABORTED:
                            case F.OUT_OF_RANGE:
                            case F.UNIMPLEMENTED:
                            case F.DATA_LOSS:
                            return !0
                }
            }

            function In(e) {
                if (void 0 === e) return D("GRPC error has no .code"), F.UNKNOWN;
                switch (e) {
                    case mn.OK:
                        return F.OK;
                    case mn.CANCELLED:
                        return F.CANCELLED;
                    case mn.UNKNOWN:
                        return F.UNKNOWN;
                    case mn.DEADLINE_EXCEEDED:
                        return F.DEADLINE_EXCEEDED;
                    case mn.RESOURCE_EXHAUSTED:
                        return F.RESOURCE_EXHAUSTED;
                    case mn.INTERNAL:
                        return F.INTERNAL;
                    case mn.UNAVAILABLE:
                        return F.UNAVAILABLE;
                    case mn.UNAUTHENTICATED:
                        return F.UNAUTHENTICATED;
                    case mn.INVALID_ARGUMENT:
                        return F.INVALID_ARGUMENT;
                    case mn.NOT_FOUND:
                        return F.NOT_FOUND;
                    case mn.ALREADY_EXISTS:
                        return F.ALREADY_EXISTS;
                    case mn.PERMISSION_DENIED:
                        return F.PERMISSION_DENIED;
                    case mn.FAILED_PRECONDITION:
                        return F.FAILED_PRECONDITION;
                    case mn.ABORTED:
                        return F.ABORTED;
                    case mn.OUT_OF_RANGE:
                        return F.OUT_OF_RANGE;
                    case mn.UNIMPLEMENTED:
                        return F.UNIMPLEMENTED;
                    case mn.DATA_LOSS:
                        return F.DATA_LOSS;
                    default:
                        return M()
                }
            }(gn = mn || (mn = {}))[gn.OK = 0] = "OK", gn[gn.CANCELLED = 1] = "CANCELLED", gn[gn.UNKNOWN = 2] = "UNKNOWN", gn[gn.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", gn[gn.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", gn[gn.NOT_FOUND = 5] = "NOT_FOUND", gn[gn.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", gn[gn.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", gn[gn.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", gn[gn.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", gn[gn.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", gn[gn.ABORTED = 10] = "ABORTED", gn[gn.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", gn[gn.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", gn[gn.INTERNAL = 13] = "INTERNAL", gn[gn.UNAVAILABLE = 14] = "UNAVAILABLE", gn[gn.DATA_LOSS = 15] = "DATA_LOSS";
            var En = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.mapKeyFn = t, this.equalsFn = n, this.inner = {}, this.innerSize = 0
                    }
                    return (0, h.Z)(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.mapKeyFn(e),
                                n = this.inner[t];
                            if (void 0 !== n) {
                                var r, i = w(n);
                                try {
                                    for (i.s(); !(r = i.n()).done;) {
                                        var u = (0, a.Z)(r.value, 2),
                                            o = u[0],
                                            s = u[1];
                                        if (this.equalsFn(o, e)) return s
                                    }
                                } catch (c) {
                                    i.e(c)
                                } finally {
                                    i.f()
                                }
                            }
                        }
                    }, {
                        key: "has",
                        value: function(e) {
                            return void 0 !== this.get(e)
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            var n = this.mapKeyFn(e),
                                r = this.inner[n];
                            if (void 0 === r) return this.inner[n] = [
                                [e, t]
                            ], void this.innerSize++;
                            for (var i = 0; i < r.length; i++)
                                if (this.equalsFn(r[i][0], e)) return void(r[i] = [e, t]);
                            r.push([e, t]), this.innerSize++
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            var t = this.mapKeyFn(e),
                                n = this.inner[t];
                            if (void 0 === n) return !1;
                            for (var r = 0; r < n.length; r++)
                                if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, !0;
                            return !1
                        }
                    }, {
                        key: "forEach",
                        value: function(e) {
                            re(this.inner, (function(t, n) {
                                var r, i = w(n);
                                try {
                                    for (i.s(); !(r = i.n()).done;) {
                                        var u = (0, a.Z)(r.value, 2),
                                            o = u[0],
                                            s = u[1];
                                        e(o, s)
                                    }
                                } catch (c) {
                                    i.e(c)
                                } finally {
                                    i.f()
                                }
                            }))
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return ie(this.inner)
                        }
                    }, {
                        key: "size",
                        value: function() {
                            return this.innerSize
                        }
                    }]), e
                }(),
                Tn = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.comparator = t, this.root = n || _n.EMPTY
                    }
                    return (0, h.Z)(e, [{
                        key: "insert",
                        value: function(t, n) {
                            return new e(this.comparator, this.root.insert(t, n, this.comparator).copy(null, null, _n.BLACK, null, null))
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            return new e(this.comparator, this.root.remove(t, this.comparator).copy(null, null, _n.BLACK, null, null))
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            for (var t = this.root; !t.isEmpty();) {
                                var n = this.comparator(e, t.key);
                                if (0 === n) return t.value;
                                n < 0 ? t = t.left : n > 0 && (t = t.right)
                            }
                            return null
                        }
                    }, {
                        key: "indexOf",
                        value: function(e) {
                            for (var t = 0, n = this.root; !n.isEmpty();) {
                                var r = this.comparator(e, n.key);
                                if (0 === r) return t + n.left.size;
                                r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right)
                            }
                            return -1
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return this.root.isEmpty()
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.root.size
                        }
                    }, {
                        key: "minKey",
                        value: function() {
                            return this.root.minKey()
                        }
                    }, {
                        key: "maxKey",
                        value: function() {
                            return this.root.maxKey()
                        }
                    }, {
                        key: "inorderTraversal",
                        value: function(e) {
                            return this.root.inorderTraversal(e)
                        }
                    }, {
                        key: "forEach",
                        value: function(e) {
                            this.inorderTraversal((function(t, n) {
                                return e(t, n), !1
                            }))
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e = [];
                            return this.inorderTraversal((function(t, n) {
                                return e.push("".concat(t, ":").concat(n)), !1
                            })), "{".concat(e.join(", "), "}")
                        }
                    }, {
                        key: "reverseTraversal",
                        value: function(e) {
                            return this.root.reverseTraversal(e)
                        }
                    }, {
                        key: "getIterator",
                        value: function() {
                            return new Sn(this.root, null, this.comparator, !1)
                        }
                    }, {
                        key: "getIteratorFrom",
                        value: function(e) {
                            return new Sn(this.root, e, this.comparator, !1)
                        }
                    }, {
                        key: "getReverseIterator",
                        value: function() {
                            return new Sn(this.root, null, this.comparator, !0)
                        }
                    }, {
                        key: "getReverseIteratorFrom",
                        value: function(e) {
                            return new Sn(this.root, e, this.comparator, !0)
                        }
                    }]), e
                }(),
                Sn = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.isReverse = i, this.nodeStack = [];
                        for (var a = 1; !t.isEmpty();)
                            if (a = n ? r(t.key, n) : 1, n && i && (a *= -1), a < 0) t = this.isReverse ? t.left : t.right;
                            else {
                                if (0 === a) {
                                    this.nodeStack.push(t);
                                    break
                                }
                                this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                            }
                    }
                    return (0, h.Z)(e, [{
                        key: "getNext",
                        value: function() {
                            var e = this.nodeStack.pop(),
                                t = {
                                    key: e.key,
                                    value: e.value
                                };
                            if (this.isReverse)
                                for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
                            else
                                for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
                            return t
                        }
                    }, {
                        key: "hasNext",
                        value: function() {
                            return this.nodeStack.length > 0
                        }
                    }, {
                        key: "peek",
                        value: function() {
                            if (0 === this.nodeStack.length) return null;
                            var e = this.nodeStack[this.nodeStack.length - 1];
                            return {
                                key: e.key,
                                value: e.value
                            }
                        }
                    }]), e
                }(),
                _n = function() {
                    function e(t, n, r, i, a) {
                        (0, f.Z)(this, e), this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : e.EMPTY, this.right = null != a ? a : e.EMPTY, this.size = this.left.size + 1 + this.right.size
                    }
                    return (0, h.Z)(e, [{
                        key: "copy",
                        value: function(t, n, r, i, a) {
                            return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != a ? a : this.right)
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "inorderTraversal",
                        value: function(e) {
                            return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
                        }
                    }, {
                        key: "reverseTraversal",
                        value: function(e) {
                            return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                        }
                    }, {
                        key: "min",
                        value: function() {
                            return this.left.isEmpty() ? this : this.left.min()
                        }
                    }, {
                        key: "minKey",
                        value: function() {
                            return this.min().key
                        }
                    }, {
                        key: "maxKey",
                        value: function() {
                            return this.right.isEmpty() ? this.key : this.right.maxKey()
                        }
                    }, {
                        key: "insert",
                        value: function(e, t, n) {
                            var r = this,
                                i = n(e, r.key);
                            return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp()
                        }
                    }, {
                        key: "removeMin",
                        value: function() {
                            if (this.left.isEmpty()) return e.EMPTY;
                            var t = this;
                            return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp()
                        }
                    }, {
                        key: "remove",
                        value: function(t, n) {
                            var r, i = this;
                            if (n(t, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(t, n), null);
                            else {
                                if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 0 === n(t, i.key)) {
                                    if (i.right.isEmpty()) return e.EMPTY;
                                    r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin())
                                }
                                i = i.copy(null, null, null, null, i.right.remove(t, n))
                            }
                            return i.fixUp()
                        }
                    }, {
                        key: "isRed",
                        value: function() {
                            return this.color
                        }
                    }, {
                        key: "fixUp",
                        value: function() {
                            var e = this;
                            return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e
                        }
                    }, {
                        key: "moveRedLeft",
                        value: function() {
                            var e = this.colorFlip();
                            return e.right.left.isRed() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight())).rotateLeft()).colorFlip()), e
                        }
                    }, {
                        key: "moveRedRight",
                        value: function() {
                            var e = this.colorFlip();
                            return e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()), e
                        }
                    }, {
                        key: "rotateLeft",
                        value: function() {
                            var t = this.copy(null, null, e.RED, null, this.right.left);
                            return this.right.copy(null, null, this.color, t, null)
                        }
                    }, {
                        key: "rotateRight",
                        value: function() {
                            var t = this.copy(null, null, e.RED, this.left.right, null);
                            return this.left.copy(null, null, this.color, null, t)
                        }
                    }, {
                        key: "colorFlip",
                        value: function() {
                            var e = this.left.copy(null, null, !this.left.color, null, null),
                                t = this.right.copy(null, null, !this.right.color, null, null);
                            return this.copy(null, null, !this.color, e, t)
                        }
                    }, {
                        key: "checkMaxDepth",
                        value: function() {
                            var e = this.check();
                            return Math.pow(2, e) <= this.size + 1
                        }
                    }, {
                        key: "check",
                        value: function() {
                            if (this.isRed() && this.left.isRed()) throw M();
                            if (this.right.isRed()) throw M();
                            var e = this.left.check();
                            if (e !== this.right.check()) throw M();
                            return e + (this.isRed() ? 0 : 1)
                        }
                    }]), e
                }();
            _n.EMPTY = null, _n.RED = !0, _n.BLACK = !1, _n.EMPTY = new(function() {
                function e() {
                    (0, f.Z)(this, e), this.size = 0
                }
                return (0, h.Z)(e, [{
                    key: "key",
                    get: function() {
                        throw M()
                    }
                }, {
                    key: "value",
                    get: function() {
                        throw M()
                    }
                }, {
                    key: "color",
                    get: function() {
                        throw M()
                    }
                }, {
                    key: "left",
                    get: function() {
                        throw M()
                    }
                }, {
                    key: "right",
                    get: function() {
                        throw M()
                    }
                }, {
                    key: "copy",
                    value: function(e, t, n, r, i) {
                        return this
                    }
                }, {
                    key: "insert",
                    value: function(e, t, n) {
                        return new _n(e, t)
                    }
                }, {
                    key: "remove",
                    value: function(e, t) {
                        return this
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "inorderTraversal",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "reverseTraversal",
                    value: function(e) {
                        return !1
                    }
                }, {
                    key: "minKey",
                    value: function() {
                        return null
                    }
                }, {
                    key: "maxKey",
                    value: function() {
                        return null
                    }
                }, {
                    key: "isRed",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "checkMaxDepth",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "check",
                    value: function() {
                        return 0
                    }
                }]), e
            }());
            var An = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.comparator = t, this.data = new Tn(this.comparator)
                    }
                    return (0, h.Z)(e, [{
                        key: "has",
                        value: function(e) {
                            return null !== this.data.get(e)
                        }
                    }, {
                        key: "first",
                        value: function() {
                            return this.data.minKey()
                        }
                    }, {
                        key: "last",
                        value: function() {
                            return this.data.maxKey()
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.data.size
                        }
                    }, {
                        key: "indexOf",
                        value: function(e) {
                            return this.data.indexOf(e)
                        }
                    }, {
                        key: "forEach",
                        value: function(e) {
                            this.data.inorderTraversal((function(t, n) {
                                return e(t), !1
                            }))
                        }
                    }, {
                        key: "forEachInRange",
                        value: function(e, t) {
                            for (var n = this.data.getIteratorFrom(e[0]); n.hasNext();) {
                                var r = n.getNext();
                                if (this.comparator(r.key, e[1]) >= 0) return;
                                t(r.key)
                            }
                        }
                    }, {
                        key: "forEachWhile",
                        value: function(e, t) {
                            var n;
                            for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();)
                                if (!e(n.getNext().key)) return
                        }
                    }, {
                        key: "firstAfterOrEqual",
                        value: function(e) {
                            var t = this.data.getIteratorFrom(e);
                            return t.hasNext() ? t.getNext().key : null
                        }
                    }, {
                        key: "getIterator",
                        value: function() {
                            return new Nn(this.data.getIterator())
                        }
                    }, {
                        key: "getIteratorFrom",
                        value: function(e) {
                            return new Nn(this.data.getIteratorFrom(e))
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            return this.copy(this.data.remove(e).insert(e, !0))
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            return this.has(e) ? this.copy(this.data.remove(e)) : this
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return this.data.isEmpty()
                        }
                    }, {
                        key: "unionWith",
                        value: function(e) {
                            var t = this;
                            return t.size < e.size && (t = e, e = this), e.forEach((function(e) {
                                t = t.add(e)
                            })), t
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            if (!(t instanceof e)) return !1;
                            if (this.size !== t.size) return !1;
                            for (var n = this.data.getIterator(), r = t.data.getIterator(); n.hasNext();) {
                                var i = n.getNext().key,
                                    a = r.getNext().key;
                                if (0 !== this.comparator(i, a)) return !1
                            }
                            return !0
                        }
                    }, {
                        key: "toArray",
                        value: function() {
                            var e = [];
                            return this.forEach((function(t) {
                                e.push(t)
                            })), e
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e = [];
                            return this.forEach((function(t) {
                                return e.push(t)
                            })), "SortedSet(" + e.toString() + ")"
                        }
                    }, {
                        key: "copy",
                        value: function(t) {
                            var n = new e(this.comparator);
                            return n.data = t, n
                        }
                    }]), e
                }(),
                Nn = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.iter = t
                    }
                    return (0, h.Z)(e, [{
                        key: "getNext",
                        value: function() {
                            return this.iter.getNext().key
                        }
                    }, {
                        key: "hasNext",
                        value: function() {
                            return this.iter.hasNext()
                        }
                    }]), e
                }();

            function Dn(e) {
                return e.hasNext() ? e.getNext() : void 0
            }
            var Cn = new Tn(Ee.comparator);

            function Zn() {
                return Cn
            }
            var Mn = new Tn(Ee.comparator);

            function Rn() {
                return Mn
            }

            function Vn() {
                return new En((function(e) {
                    return e.toString()
                }), (function(e, t) {
                    return e.isEqual(t)
                }))
            }
            var Ln = new Tn(Ee.comparator),
                Fn = new An(Ee.comparator);

            function Pn() {
                for (var e = Fn, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                for (var i = 0, a = n; i < a.length; i++) {
                    var u = a[i];
                    e = e.add(u)
                }
                return e
            }
            var On = new An(J);

            function qn() {
                return On
            }
            var Un = function() {
                    function e(t, n, r, i, a) {
                        (0, f.Z)(this, e), this.snapshotVersion = t, this.targetChanges = n, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = a
                    }
                    return (0, h.Z)(e, null, [{
                        key: "createSynthesizedRemoteEventForCurrentChange",
                        value: function(t, n) {
                            var r = new Map;
                            return r.set(t, Bn.createSynthesizedTargetChangeForCurrentChange(t, n)), new e(te.min(), r, qn(), Zn(), Pn())
                        }
                    }]), e
                }(),
                Bn = function() {
                    function e(t, n, r, i, a) {
                        (0, f.Z)(this, e), this.resumeToken = t, this.current = n, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = a
                    }
                    return (0, h.Z)(e, null, [{
                        key: "createSynthesizedTargetChangeForCurrentChange",
                        value: function(t, n) {
                            return new e(fe.EMPTY_BYTE_STRING, n, Pn(), Pn(), Pn())
                        }
                    }]), e
                }(),
                Kn = (0, h.Z)((function e(t, n, r, i) {
                    (0, f.Z)(this, e), this.O = t, this.removedTargetIds = n, this.key = r, this.F = i
                })),
                Gn = (0, h.Z)((function e(t, n) {
                    (0, f.Z)(this, e), this.targetId = t, this.$ = n
                })),
                jn = (0, h.Z)((function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fe.EMPTY_BYTE_STRING,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    (0, f.Z)(this, e), this.state = t, this.targetIds = n, this.resumeToken = r, this.cause = i
                })),
                zn = function() {
                    function e() {
                        (0, f.Z)(this, e), this.B = 0, this.L = Hn(), this.U = fe.EMPTY_BYTE_STRING, this.q = !1, this.G = !0
                    }
                    return (0, h.Z)(e, [{
                        key: "current",
                        get: function() {
                            return this.q
                        }
                    }, {
                        key: "resumeToken",
                        get: function() {
                            return this.U
                        }
                    }, {
                        key: "K",
                        get: function() {
                            return 0 !== this.B
                        }
                    }, {
                        key: "j",
                        get: function() {
                            return this.G
                        }
                    }, {
                        key: "W",
                        value: function(e) {
                            e.approximateByteSize() > 0 && (this.G = !0, this.U = e)
                        }
                    }, {
                        key: "H",
                        value: function() {
                            var e = Pn(),
                                t = Pn(),
                                n = Pn();
                            return this.L.forEach((function(r, i) {
                                switch (i) {
                                    case 0:
                                        e = e.add(r);
                                        break;
                                    case 2:
                                        t = t.add(r);
                                        break;
                                    case 1:
                                        n = n.add(r);
                                        break;
                                    default:
                                        M()
                                }
                            })), new Bn(this.U, this.q, e, t, n)
                        }
                    }, {
                        key: "J",
                        value: function() {
                            this.G = !1, this.L = Hn()
                        }
                    }, {
                        key: "Y",
                        value: function(e, t) {
                            this.G = !0, this.L = this.L.insert(e, t)
                        }
                    }, {
                        key: "X",
                        value: function(e) {
                            this.G = !0, this.L = this.L.remove(e)
                        }
                    }, {
                        key: "Z",
                        value: function() {
                            this.B += 1
                        }
                    }, {
                        key: "tt",
                        value: function() {
                            this.B -= 1
                        }
                    }, {
                        key: "et",
                        value: function() {
                            this.G = !0, this.q = !0
                        }
                    }]), e
                }(),
                Qn = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.nt = t, this.st = new Map, this.it = Zn(), this.rt = Wn(), this.ot = new An(J)
                    }
                    return (0, h.Z)(e, [{
                        key: "ut",
                        value: function(e) {
                            var t, n = w(e.O);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    e.F && e.F.isFoundDocument() ? this.at(r, e.F) : this.ct(r, e.key, e.F)
                                }
                            } catch (o) {
                                n.e(o)
                            } finally {
                                n.f()
                            }
                            var i, a = w(e.removedTargetIds);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    var u = i.value;
                                    this.ct(u, e.key, e.F)
                                }
                            } catch (o) {
                                a.e(o)
                            } finally {
                                a.f()
                            }
                        }
                    }, {
                        key: "ht",
                        value: function(e) {
                            var t = this;
                            this.forEachTarget(e, (function(n) {
                                var r = t.lt(n);
                                switch (e.state) {
                                    case 0:
                                        t.ft(n) && r.W(e.resumeToken);
                                        break;
                                    case 1:
                                        r.tt(), r.K || r.J(), r.W(e.resumeToken);
                                        break;
                                    case 2:
                                        r.tt(), r.K || t.removeTarget(n);
                                        break;
                                    case 3:
                                        t.ft(n) && (r.et(), r.W(e.resumeToken));
                                        break;
                                    case 4:
                                        t.ft(n) && (t.dt(n), r.W(e.resumeToken));
                                        break;
                                    default:
                                        M()
                                }
                            }))
                        }
                    }, {
                        key: "forEachTarget",
                        value: function(e, t) {
                            var n = this;
                            e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.st.forEach((function(e, r) {
                                n.ft(r) && t(r)
                            }))
                        }
                    }, {
                        key: "_t",
                        value: function(e) {
                            var t = e.targetId,
                                n = e.$.count,
                                r = this.wt(t);
                            if (r) {
                                var i = r.target;
                                if (ut(i))
                                    if (0 === n) {
                                        var a = new Ee(i.path);
                                        this.ct(t, a, ze.newNoDocument(a, te.min()))
                                    } else R(1 === n);
                                else this.gt(t) !== n && (this.dt(t), this.ot = this.ot.add(t))
                            }
                        }
                    }, {
                        key: "yt",
                        value: function(e) {
                            var t = this,
                                n = new Map;
                            this.st.forEach((function(r, i) {
                                var a = t.wt(i);
                                if (a) {
                                    if (r.current && ut(a.target)) {
                                        var u = new Ee(a.target.path);
                                        null !== t.it.get(u) || t.It(i, u) || t.ct(i, u, ze.newNoDocument(u, e))
                                    }
                                    r.j && (n.set(i, r.H()), r.J())
                                }
                            }));
                            var r = Pn();
                            this.rt.forEach((function(e, n) {
                                var i = !0;
                                n.forEachWhile((function(e) {
                                    var n = t.wt(e);
                                    return !n || 2 === n.purpose || (i = !1, !1)
                                })), i && (r = r.add(e))
                            })), this.it.forEach((function(t, n) {
                                return n.setReadTime(e)
                            }));
                            var i = new Un(e, n, this.ot, this.it, r);
                            return this.it = Zn(), this.rt = Wn(), this.ot = new An(J), i
                        }
                    }, {
                        key: "at",
                        value: function(e, t) {
                            if (this.ft(e)) {
                                var n = this.It(e, t.key) ? 2 : 0;
                                this.lt(e).Y(t.key, n), this.it = this.it.insert(t.key, t), this.rt = this.rt.insert(t.key, this.Tt(t.key).add(e))
                            }
                        }
                    }, {
                        key: "ct",
                        value: function(e, t, n) {
                            if (this.ft(e)) {
                                var r = this.lt(e);
                                this.It(e, t) ? r.Y(t, 1) : r.X(t), this.rt = this.rt.insert(t, this.Tt(t).delete(e)), n && (this.it = this.it.insert(t, n))
                            }
                        }
                    }, {
                        key: "removeTarget",
                        value: function(e) {
                            this.st.delete(e)
                        }
                    }, {
                        key: "gt",
                        value: function(e) {
                            var t = this.lt(e).H();
                            return this.nt.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size
                        }
                    }, {
                        key: "Z",
                        value: function(e) {
                            this.lt(e).Z()
                        }
                    }, {
                        key: "lt",
                        value: function(e) {
                            var t = this.st.get(e);
                            return t || (t = new zn, this.st.set(e, t)), t
                        }
                    }, {
                        key: "Tt",
                        value: function(e) {
                            var t = this.rt.get(e);
                            return t || (t = new An(J), this.rt = this.rt.insert(e, t)), t
                        }
                    }, {
                        key: "ft",
                        value: function(e) {
                            var t = null !== this.wt(e);
                            return t || N("WatchChangeAggregator", "Detected inactive target", e), t
                        }
                    }, {
                        key: "wt",
                        value: function(e) {
                            var t = this.st.get(e);
                            return t && t.K ? null : this.nt.Et(e)
                        }
                    }, {
                        key: "dt",
                        value: function(e) {
                            var t = this;
                            this.st.set(e, new zn), this.nt.getRemoteKeysForTarget(e).forEach((function(n) {
                                t.ct(e, n, null)
                            }))
                        }
                    }, {
                        key: "It",
                        value: function(e, t) {
                            return this.nt.getRemoteKeysForTarget(e).has(t)
                        }
                    }]), e
                }();

            function Wn() {
                return new Tn(Ee.comparator)
            }

            function Hn() {
                return new Tn(Ee.comparator)
            }
            var Yn = {
                    asc: "ASCENDING",
                    desc: "DESCENDING"
                },
                Jn = {
                    "<": "LESS_THAN",
                    "<=": "LESS_THAN_OR_EQUAL",
                    ">": "GREATER_THAN",
                    ">=": "GREATER_THAN_OR_EQUAL",
                    "==": "EQUAL",
                    "!=": "NOT_EQUAL",
                    "array-contains": "ARRAY_CONTAINS",
                    in: "IN",
                    "not-in": "NOT_IN",
                    "array-contains-any": "ARRAY_CONTAINS_ANY"
                },
                $n = (0, h.Z)((function e(t, n) {
                    (0, f.Z)(this, e), this.databaseId = t, this.N = n
                }));

            function Xn(e, t) {
                return e.N ? "".concat(new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", ""), ".").concat(("000000000" + t.nanoseconds).slice(-9), "Z") : {
                    seconds: "" + t.seconds,
                    nanos: t.nanoseconds
                }
            }

            function er(e, t) {
                return e.N ? t.toBase64() : t.toUint8Array()
            }

            function tr(e, t) {
                return Xn(e, t.toTimestamp())
            }

            function nr(e) {
                return R(!!e), te.fromTimestamp(function(e) {
                    var t = de(e);
                    return new ee(t.seconds, t.nanos)
                }(e))
            }

            function rr(e, t) {
                return function(e) {
                    return new ue(["projects", e.projectId, "databases", e.database])
                }(e).child("documents").child(t).canonicalString()
            }

            function ir(e) {
                var t = ue.fromString(e);
                return R(_r(t)), t
            }

            function ar(e, t) {
                return rr(e.databaseId, t.path)
            }

            function ur(e, t) {
                var n = ir(t);
                if (n.get(1) !== e.databaseId.projectId) throw new P(F.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
                if (n.get(3) !== e.databaseId.database) throw new P(F.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
                return new Ee(lr(n))
            }

            function or(e, t) {
                return rr(e.databaseId, t)
            }

            function sr(e) {
                var t = ir(e);
                return 4 === t.length ? ue.emptyPath() : lr(t)
            }

            function cr(e) {
                return new ue(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString()
            }

            function lr(e) {
                return R(e.length > 4 && "documents" === e.get(4)), e.popFirst(5)
            }

            function fr(e, t, n) {
                return {
                    name: ar(e, t),
                    fields: n.value.mapValue.fields
                }
            }

            function hr(e, t, n) {
                var r = ur(e, t.name),
                    i = nr(t.updateTime),
                    a = new Ge({
                        mapValue: {
                            fields: t.fields
                        }
                    }),
                    u = ze.newFoundDocument(r, i, a);
                return n && u.setHasCommittedMutations(), n ? u.setHasCommittedMutations() : u
            }

            function dr(e, t) {
                return "found" in t ? function(e, t) {
                    R(!!t.found), t.found.name, t.found.updateTime;
                    var n = ur(e, t.found.name),
                        r = nr(t.found.updateTime),
                        i = new Ge({
                            mapValue: {
                                fields: t.found.fields
                            }
                        });
                    return ze.newFoundDocument(n, r, i)
                }(e, t) : "missing" in t ? function(e, t) {
                    R(!!t.missing), R(!!t.readTime);
                    var n = ur(e, t.missing),
                        r = nr(t.readTime);
                    return ze.newNoDocument(n, r)
                }(e, t) : M()
            }

            function vr(e, t) {
                var n;
                if (t instanceof hn) n = {
                    update: fr(e, t.key, t.value)
                };
                else if (t instanceof kn) n = {
                    delete: ar(e, t.key)
                };
                else if (t instanceof dn) n = {
                    update: fr(e, t.key, t.data),
                    updateMask: Sr(t.fieldMask)
                };
                else {
                    if (!(t instanceof wn)) return M();
                    n = {
                        verify: ar(e, t.key)
                    }
                }
                return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((function(e) {
                    return function(e, t) {
                        var n = t.transform;
                        if (n instanceof Qt) return {
                            fieldPath: t.field.canonicalString(),
                            setToServerValue: "REQUEST_TIME"
                        };
                        if (n instanceof Wt) return {
                            fieldPath: t.field.canonicalString(),
                            appendMissingElements: {
                                values: n.elements
                            }
                        };
                        if (n instanceof Yt) return {
                            fieldPath: t.field.canonicalString(),
                            removeAllFromArray: {
                                values: n.elements
                            }
                        };
                        if (n instanceof $t) return {
                            fieldPath: t.field.canonicalString(),
                            increment: n.k
                        };
                        throw M()
                    }(0, e)
                }))), t.precondition.isNone || (n.currentDocument = function(e, t) {
                    return void 0 !== t.updateTime ? {
                        updateTime: tr(e, t.updateTime)
                    } : void 0 !== t.exists ? {
                        exists: t.exists
                    } : M()
                }(e, t.precondition)), n
            }

            function yr(e, t) {
                var n = t.currentDocument ? function(e) {
                        return void 0 !== e.updateTime ? rn.updateTime(nr(e.updateTime)) : void 0 !== e.exists ? rn.exists(e.exists) : rn.none()
                    }(t.currentDocument) : rn.none(),
                    r = t.updateTransforms ? t.updateTransforms.map((function(t) {
                        return function(e, t) {
                            var n = null;
                            if ("setToServerValue" in t) R("REQUEST_TIME" === t.setToServerValue), n = new Qt;
                            else if ("appendMissingElements" in t) {
                                var r = t.appendMissingElements.values || [];
                                n = new Wt(r)
                            } else if ("removeAllFromArray" in t) {
                                var i = t.removeAllFromArray.values || [];
                                n = new Yt(i)
                            } else "increment" in t ? n = new $t(e, t.increment) : M();
                            var a = se.fromServerFormat(t.fieldPath);
                            return new tn(a, n)
                        }(e, t)
                    })) : [];
                if (t.update) {
                    t.update.name;
                    var i = ur(e, t.update.name),
                        a = new Ge({
                            mapValue: {
                                fields: t.update.fields
                            }
                        });
                    if (t.updateMask) {
                        var u = function(e) {
                            var t = e.fieldPaths || [];
                            return new ce(t.map((function(e) {
                                return se.fromServerFormat(e)
                            })))
                        }(t.updateMask);
                        return new dn(i, a, u, n, r)
                    }
                    return new hn(i, a, n, r)
                }
                if (t.delete) {
                    var o = ur(e, t.delete);
                    return new kn(o, n)
                }
                if (t.verify) {
                    var s = ur(e, t.verify);
                    return new wn(s, n)
                }
                return M()
            }

            function pr(e, t) {
                return {
                    documents: [or(e, t.path)]
                }
            }

            function mr(e, t) {
                var n = {
                        structuredQuery: {}
                    },
                    r = t.path;
                null !== t.collectionGroup ? (n.parent = or(e, r), n.structuredQuery.from = [{
                    collectionId: t.collectionGroup,
                    allDescendants: !0
                }]) : (n.parent = or(e, r.popLast()), n.structuredQuery.from = [{
                    collectionId: r.lastSegment()
                }]);
                var i = function(e) {
                    if (0 !== e.length) {
                        var t = e.map((function(e) {
                            return function(e) {
                                if ("==" === e.op) {
                                    if (Pe(e.value)) return {
                                        unaryFilter: {
                                            field: xr(e.field),
                                            op: "IS_NAN"
                                        }
                                    };
                                    if (Fe(e.value)) return {
                                        unaryFilter: {
                                            field: xr(e.field),
                                            op: "IS_NULL"
                                        }
                                    }
                                } else if ("!=" === e.op) {
                                    if (Pe(e.value)) return {
                                        unaryFilter: {
                                            field: xr(e.field),
                                            op: "IS_NOT_NAN"
                                        }
                                    };
                                    if (Fe(e.value)) return {
                                        unaryFilter: {
                                            field: xr(e.field),
                                            op: "IS_NOT_NULL"
                                        }
                                    }
                                }
                                return {
                                    fieldFilter: {
                                        field: xr(e.field),
                                        op: br(e.op),
                                        value: e.value
                                    }
                                }
                            }(e)
                        }));
                        return 1 === t.length ? t[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: t
                            }
                        }
                    }
                }(t.filters);
                i && (n.structuredQuery.where = i);
                var a = function(e) {
                    if (0 !== e.length) return e.map((function(e) {
                        return function(e) {
                            return {
                                field: xr(e.field),
                                direction: wr(e.dir)
                            }
                        }(e)
                    }))
                }(t.orderBy);
                a && (n.structuredQuery.orderBy = a);
                var u, o = function(e, t) {
                    return e.N || be(t) ? t : {
                        value: t
                    }
                }(e, t.limit);
                return null !== o && (n.structuredQuery.limit = o), t.startAt && (n.structuredQuery.startAt = {
                    before: (u = t.startAt).inclusive,
                    values: u.position
                }), t.endAt && (n.structuredQuery.endAt = function(e) {
                    return {
                        before: !e.inclusive,
                        values: e.position
                    }
                }(t.endAt)), n
            }

            function gr(e) {
                var t = sr(e.parent),
                    n = e.structuredQuery,
                    r = n.from ? n.from.length : 0,
                    i = null;
                if (r > 0) {
                    R(1 === r);
                    var a = n.from[0];
                    a.allDescendants ? i = a.collectionId : t = t.child(a.collectionId)
                }
                var u = [];
                n.where && (u = kr(n.where));
                var o = [];
                n.orderBy && (o = n.orderBy.map((function(e) {
                    return function(e) {
                        return new gt(Ir(e.field), function(e) {
                            switch (e) {
                                case "ASCENDING":
                                    return "asc";
                                case "DESCENDING":
                                    return "desc";
                                default:
                                    return
                            }
                        }(e.direction))
                    }(e)
                })));
                var s = null;
                n.limit && (s = function(e) {
                    var t;
                    return be(t = "object" == typeof e ? e.value : e) ? null : t
                }(n.limit));
                var c = null;
                n.startAt && (c = function(e) {
                    var t = !!e.before,
                        n = e.values || [];
                    return new mt(n, t)
                }(n.startAt));
                var l = null;
                return n.endAt && (l = function(e) {
                    var t = !e.before,
                        n = e.values || [];
                    return new mt(n, t)
                }(n.endAt)), It(t, i, o, u, s, "F", c, l)
            }

            function kr(e) {
                return e ? void 0 !== e.unaryFilter ? [Tr(e)] : void 0 !== e.fieldFilter ? [Er(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
                    return kr(e)
                })).reduce((function(e, t) {
                    return e.concat(t)
                })) : M() : []
            }

            function wr(e) {
                return Yn[e]
            }

            function br(e) {
                return Jn[e]
            }

            function xr(e) {
                return {
                    fieldPath: e.canonicalString()
                }
            }

            function Ir(e) {
                return se.fromServerFormat(e.fieldPath)
            }

            function Er(e) {
                return st.create(Ir(e.fieldFilter.field), function(e) {
                    switch (e) {
                        case "EQUAL":
                            return "==";
                        case "NOT_EQUAL":
                            return "!=";
                        case "GREATER_THAN":
                            return ">";
                        case "GREATER_THAN_OR_EQUAL":
                            return ">=";
                        case "LESS_THAN":
                            return "<";
                        case "LESS_THAN_OR_EQUAL":
                            return "<=";
                        case "ARRAY_CONTAINS":
                            return "array-contains";
                        case "IN":
                            return "in";
                        case "NOT_IN":
                            return "not-in";
                        case "ARRAY_CONTAINS_ANY":
                            return "array-contains-any";
                        default:
                            return M()
                    }
                }(e.fieldFilter.op), e.fieldFilter.value)
            }

            function Tr(e) {
                switch (e.unaryFilter.op) {
                    case "IS_NAN":
                        var t = Ir(e.unaryFilter.field);
                        return st.create(t, "==", {
                            doubleValue: NaN
                        });
                    case "IS_NULL":
                        var n = Ir(e.unaryFilter.field);
                        return st.create(n, "==", {
                            nullValue: "NULL_VALUE"
                        });
                    case "IS_NOT_NAN":
                        var r = Ir(e.unaryFilter.field);
                        return st.create(r, "!=", {
                            doubleValue: NaN
                        });
                    case "IS_NOT_NULL":
                        var i = Ir(e.unaryFilter.field);
                        return st.create(i, "!=", {
                            nullValue: "NULL_VALUE"
                        });
                    default:
                        return M()
                }
            }

            function Sr(e) {
                var t = [];
                return e.fields.forEach((function(e) {
                    return t.push(e.canonicalString())
                })), {
                    fieldPaths: t
                }
            }

            function _r(e) {
                return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
            }

            function Ar(e) {
                for (var t = "", n = 0; n < e.length; n++) t.length > 0 && (t = Dr(t)), t = Nr(e.get(n), t);
                return Dr(t)
            }

            function Nr(e, t) {
                for (var n = t, r = e.length, i = 0; i < r; i++) {
                    var a = e.charAt(i);
                    switch (a) {
                        case "\0":
                            n += "";
                            break;
                        case "":
                            n += "";
                            break;
                        default:
                            n += a
                    }
                }
                return n
            }

            function Dr(e) {
                return e + ""
            }

            function Cr(e) {
                var t = e.length;
                if (R(t >= 2), 2 === t) return R("" === e.charAt(0) && "" === e.charAt(1)), ue.emptyPath();
                for (var n = t - 2, r = [], i = "", a = 0; a < t;) {
                    var u = e.indexOf("", a);
                    switch ((u < 0 || u > n) && M(), e.charAt(u + 1)) {
                        case "":
                            var o = e.substring(a, u),
                                s = void 0;
                            0 === i.length ? s = o : (s = i += o, i = ""), r.push(s);
                            break;
                        case "":
                            i += e.substring(a, u), i += "\0";
                            break;
                        case "":
                            i += e.substring(a, u + 1);
                            break;
                        default:
                            M()
                    }
                    a = u + 2
                }
                return new ue(r)
            }
            var Zr = ["userId", "batchId"];

            function Mr(e, t) {
                return [e, Ar(t)]
            }

            function Rr(e, t, n) {
                return [e, Ar(t), n]
            }
            var Vr = {},
                Lr = ["prefixPath", "collectionGroup", "readTime", "documentId"],
                Fr = ["prefixPath", "collectionGroup", "documentId"],
                Pr = ["collectionGroup", "readTime", "prefixPath", "documentId"],
                Or = ["canonicalId", "targetId"],
                qr = ["targetId", "path"],
                Ur = ["path", "targetId"],
                Br = ["collectionId", "parent"],
                Kr = ["indexId", "uid"],
                Gr = ["uid", "sequenceNumber"],
                jr = ["indexId", "uid", "arrayValue", "directionalValue", "documentKey"],
                zr = ["indexId", "uid", "documentKey"],
                Qr = ["userId", "collectionPath", "documentId"],
                Wr = ["userId", "collectionPath", "largestBatchId"],
                Hr = ["userId", "collectionGroup", "largestBatchId"],
                Yr = ["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"].concat(["clientMetadata"]).concat(["remoteDocumentGlobal"]).concat(["collectionParents"]).concat(["bundles", "namedQueries"]),
                Jr = [].concat((0, l.Z)(Yr), ["documentOverlays"]),
                $r = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"],
                Xr = [].concat($r, ["indexConfiguration", "indexState", "indexEntries"]),
                ei = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                ti = function() {
                    function e() {
                        (0, f.Z)(this, e), this.onCommittedListeners = []
                    }
                    return (0, h.Z)(e, [{
                        key: "addOnCommittedListener",
                        value: function(e) {
                            this.onCommittedListeners.push(e)
                        }
                    }, {
                        key: "raiseOnCommittedEvent",
                        value: function() {
                            this.onCommittedListeners.forEach((function(e) {
                                return e()
                            }))
                        }
                    }]), e
                }(),
                ni = function() {
                    function e(t) {
                        var n = this;
                        (0, f.Z)(this, e), this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t((function(e) {
                            n.isDone = !0, n.result = e, n.nextCallback && n.nextCallback(e)
                        }), (function(e) {
                            n.isDone = !0, n.error = e, n.catchCallback && n.catchCallback(e)
                        }))
                    }
                    return (0, h.Z)(e, [{
                        key: "catch",
                        value: function(e) {
                            return this.next(void 0, e)
                        }
                    }, {
                        key: "next",
                        value: function(t, n) {
                            var r = this;
                            return this.callbackAttached && M(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(t, this.result) : new e((function(e, i) {
                                r.nextCallback = function(n) {
                                    r.wrapSuccess(t, n).next(e, i)
                                }, r.catchCallback = function(t) {
                                    r.wrapFailure(n, t).next(e, i)
                                }
                            }))
                        }
                    }, {
                        key: "toPromise",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, n) {
                                e.next(t, n)
                            }))
                        }
                    }, {
                        key: "wrapUserFunction",
                        value: function(t) {
                            try {
                                var n = t();
                                return n instanceof e ? n : e.resolve(n)
                            } catch (t) {
                                return e.reject(t)
                            }
                        }
                    }, {
                        key: "wrapSuccess",
                        value: function(t, n) {
                            return t ? this.wrapUserFunction((function() {
                                return t(n)
                            })) : e.resolve(n)
                        }
                    }, {
                        key: "wrapFailure",
                        value: function(t, n) {
                            return t ? this.wrapUserFunction((function() {
                                return t(n)
                            })) : e.reject(n)
                        }
                    }], [{
                        key: "resolve",
                        value: function(t) {
                            return new e((function(e, n) {
                                e(t)
                            }))
                        }
                    }, {
                        key: "reject",
                        value: function(t) {
                            return new e((function(e, n) {
                                n(t)
                            }))
                        }
                    }, {
                        key: "waitFor",
                        value: function(t) {
                            return new e((function(e, n) {
                                var r = 0,
                                    i = 0,
                                    a = !1;
                                t.forEach((function(t) {
                                    ++r, t.next((function() {
                                        ++i, a && i === r && e()
                                    }), (function(e) {
                                        return n(e)
                                    }))
                                })), a = !0, i === r && e()
                            }))
                        }
                    }, {
                        key: "or",
                        value: function(t) {
                            var n, r = e.resolve(!1),
                                i = w(t);
                            try {
                                var a = function() {
                                    var t = n.value;
                                    r = r.next((function(n) {
                                        return n ? e.resolve(n) : t()
                                    }))
                                };
                                for (i.s(); !(n = i.n()).done;) a()
                            } catch (u) {
                                i.e(u)
                            } finally {
                                i.f()
                            }
                            return r
                        }
                    }, {
                        key: "forEach",
                        value: function(e, t) {
                            var n = this,
                                r = [];
                            return e.forEach((function(e, i) {
                                r.push(t.call(n, e, i))
                            })), this.waitFor(r)
                        }
                    }]), e
                }(),
                ri = function() {
                    function e(t, n) {
                        var r = this;
                        (0, f.Z)(this, e), this.action = t, this.transaction = n, this.aborted = !1, this.At = new O, this.transaction.oncomplete = function() {
                            r.At.resolve()
                        }, this.transaction.onabort = function() {
                            n.error ? r.At.reject(new ui(t, n.error)) : r.At.resolve()
                        }, this.transaction.onerror = function(e) {
                            var n = fi(e.target.error);
                            r.At.reject(new ui(t, n))
                        }
                    }
                    return (0, h.Z)(e, [{
                        key: "Rt",
                        get: function() {
                            return this.At.promise
                        }
                    }, {
                        key: "abort",
                        value: function(e) {
                            e && this.At.reject(e), this.aborted || (N("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                        }
                    }, {
                        key: "bt",
                        value: function() {
                            var e = this.transaction;
                            this.aborted || "function" != typeof e.commit || e.commit()
                        }
                    }, {
                        key: "store",
                        value: function(e) {
                            var t = this.transaction.objectStore(e);
                            return new si(t)
                        }
                    }], [{
                        key: "open",
                        value: function(t, n, r, i) {
                            try {
                                return new e(n, t.transaction(i, r))
                            } catch (t) {
                                throw new ui(n, t)
                            }
                        }
                    }]), e
                }(),
                ii = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.name = t, this.version = n, this.Pt = r, 12.2 === e.Vt((0, g.z$)()) && D("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
                    }
                    var t, n;
                    return (0, h.Z)(e, [{
                        key: "Nt",
                        value: (n = (0, u.Z)(v().mark((function e(t) {
                            var n = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = this.db, e.t0) {
                                            e.next = 6;
                                            break
                                        }
                                        return N("SimpleDb", "Opening database:", this.name), e.next = 5, new Promise((function(e, r) {
                                            var i = indexedDB.open(n.name, n.version);
                                            i.onsuccess = function(t) {
                                                var n = t.target.result;
                                                e(n)
                                            }, i.onblocked = function() {
                                                r(new ui(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                                            }, i.onerror = function(e) {
                                                var n = e.target.error;
                                                "VersionError" === n.name ? r(new P(F.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === n.name ? r(new P(F.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + n)) : r(new ui(t, n))
                                            }, i.onupgradeneeded = function(e) {
                                                N("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', e.oldVersion);
                                                var t = e.target.result;
                                                n.Pt.kt(t, i.transaction, e.oldVersion, n.version).next((function() {
                                                    N("SimpleDb", "Database upgrade to version " + n.version + " complete")
                                                }))
                                            }
                                        }));
                                    case 5:
                                        this.db = e.sent;
                                    case 6:
                                        return this.Mt && (this.db.onversionchange = function(e) {
                                            return n.Mt(e)
                                        }), e.abrupt("return", this.db);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "Ot",
                        value: function(e) {
                            this.Mt = e, this.db && (this.db.onversionchange = function(t) {
                                return e(t)
                            })
                        }
                    }, {
                        key: "runTransaction",
                        value: (t = (0, u.Z)(v().mark((function e(t, n, r, i) {
                            var a, u, o, s, c = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = "readonly" === n, u = 0;
                                    case 2:
                                        return ++u, e.prev = 3, e.delegateYield(v().mark((function e() {
                                            var n, u;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, c.Nt(t);
                                                    case 2:
                                                        return c.db = e.sent, n = ri.open(c.db, t, a ? "readonly" : "readwrite", r), u = i(n).next((function(e) {
                                                            return n.bt(), e
                                                        })).catch((function(e) {
                                                            return n.abort(e), ni.reject(e)
                                                        })).toPromise(), u.catch((function() {})), e.next = 7, n.Rt;
                                                    case 7:
                                                        return e.t0 = u, e.abrupt("return", {
                                                            v: e.t0
                                                        });
                                                    case 9:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))(), "t0", 5);
                                    case 5:
                                        if ("object" != typeof(o = e.t0)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", o.v);
                                    case 8:
                                        e.next = 15;
                                        break;
                                    case 10:
                                        if (e.prev = 10, e.t1 = e.catch(3), s = "FirebaseError" !== e.t1.name && u < 3, N("SimpleDb", "Transaction failed with error:", e.t1.message, "Retrying:", s), this.close(), s) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject(e.t1));
                                    case 15:
                                        e.next = 2;
                                        break;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 10]
                            ])
                        }))), function(e, n, r, i) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "close",
                        value: function() {
                            this.db && this.db.close(), this.db = void 0
                        }
                    }], [{
                        key: "delete",
                        value: function(e) {
                            return N("SimpleDb", "Removing database:", e), ci(window.indexedDB.deleteDatabase(e)).toPromise()
                        }
                    }, {
                        key: "vt",
                        value: function() {
                            if (!(0, g.hl)()) return !1;
                            if (e.St()) return !0;
                            var t = (0, g.z$)(),
                                n = e.Vt(t),
                                r = 0 < n && n < 10,
                                i = e.Dt(t),
                                a = 0 < i && i < 4.5;
                            return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || r || a)
                        }
                    }, {
                        key: "St",
                        value: function() {
                            var e;
                            return "undefined" != typeof process && "YES" === (null === (e = {}) || void 0 === e ? void 0 : e.Ct)
                        }
                    }, {
                        key: "xt",
                        value: function(e, t) {
                            return e.store(t)
                        }
                    }, {
                        key: "Vt",
                        value: function(e) {
                            var t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                                n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
                            return Number(n)
                        }
                    }, {
                        key: "Dt",
                        value: function(e) {
                            var t = e.match(/Android ([\d.]+)/i),
                                n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
                            return Number(n)
                        }
                    }]), e
                }(),
                ai = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.Ft = t, this.$t = !1, this.Bt = null
                    }
                    return (0, h.Z)(e, [{
                        key: "isDone",
                        get: function() {
                            return this.$t
                        }
                    }, {
                        key: "Lt",
                        get: function() {
                            return this.Bt
                        }
                    }, {
                        key: "cursor",
                        set: function(e) {
                            this.Ft = e
                        }
                    }, {
                        key: "done",
                        value: function() {
                            this.$t = !0
                        }
                    }, {
                        key: "Ut",
                        value: function(e) {
                            this.Bt = e
                        }
                    }, {
                        key: "delete",
                        value: function() {
                            return ci(this.Ft.delete())
                        }
                    }]), e
                }(),
                ui = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, F.UNAVAILABLE, "IndexedDB transaction '".concat(e, "' failed: ").concat(r))).name = "IndexedDbTransactionError", i
                    }
                    return (0, h.Z)(n)
                }(P);

            function oi(e) {
                return "IndexedDbTransactionError" === e.name
            }
            var si = function() {
                function e(t) {
                    (0, f.Z)(this, e), this.store = t
                }
                return (0, h.Z)(e, [{
                    key: "put",
                    value: function(e, t) {
                        var n;
                        return void 0 !== t ? (N("SimpleDb", "PUT", this.store.name, e, t), n = this.store.put(t, e)) : (N("SimpleDb", "PUT", this.store.name, "<auto-key>", e), n = this.store.put(e)), ci(n)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return N("SimpleDb", "ADD", this.store.name, e, e), ci(this.store.add(e))
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this;
                        return ci(this.store.get(e)).next((function(n) {
                            return void 0 === n && (n = null), N("SimpleDb", "GET", t.store.name, e, n), n
                        }))
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        return N("SimpleDb", "DELETE", this.store.name, e), ci(this.store.delete(e))
                    }
                }, {
                    key: "count",
                    value: function() {
                        return N("SimpleDb", "COUNT", this.store.name), ci(this.store.count())
                    }
                }, {
                    key: "qt",
                    value: function(e, t) {
                        var n = this.options(e, t);
                        if (n.index || "function" != typeof this.store.getAll) {
                            var r = this.cursor(n),
                                i = [];
                            return this.Gt(r, (function(e, t) {
                                i.push(t)
                            })).next((function() {
                                return i
                            }))
                        }
                        var a = this.store.getAll(n.range);
                        return new ni((function(e, t) {
                            a.onerror = function(e) {
                                t(e.target.error)
                            }, a.onsuccess = function(t) {
                                e(t.target.result)
                            }
                        }))
                    }
                }, {
                    key: "Kt",
                    value: function(e, t) {
                        var n = this.store.getAll(e, null === t ? void 0 : t);
                        return new ni((function(e, t) {
                            n.onerror = function(e) {
                                t(e.target.error)
                            }, n.onsuccess = function(t) {
                                e(t.target.result)
                            }
                        }))
                    }
                }, {
                    key: "Qt",
                    value: function(e, t) {
                        N("SimpleDb", "DELETE ALL", this.store.name);
                        var n = this.options(e, t);
                        n.jt = !1;
                        var r = this.cursor(n);
                        return this.Gt(r, (function(e, t, n) {
                            return n.delete()
                        }))
                    }
                }, {
                    key: "Wt",
                    value: function(e, t) {
                        var n;
                        t ? n = e : (n = {}, t = e);
                        var r = this.cursor(n);
                        return this.Gt(r, t)
                    }
                }, {
                    key: "zt",
                    value: function(e) {
                        var t = this.cursor({});
                        return new ni((function(n, r) {
                            t.onerror = function(e) {
                                var t = fi(e.target.error);
                                r(t)
                            }, t.onsuccess = function(t) {
                                var r = t.target.result;
                                r ? e(r.primaryKey, r.value).next((function(e) {
                                    e ? r.continue() : n()
                                })) : n()
                            }
                        }))
                    }
                }, {
                    key: "Gt",
                    value: function(e, t) {
                        var n = [];
                        return new ni((function(r, i) {
                            e.onerror = function(e) {
                                i(e.target.error)
                            }, e.onsuccess = function(e) {
                                var i = e.target.result;
                                if (i) {
                                    var a = new ai(i),
                                        u = t(i.primaryKey, i.value, a);
                                    if (u instanceof ni) {
                                        var o = u.catch((function(e) {
                                            return a.done(), ni.reject(e)
                                        }));
                                        n.push(o)
                                    }
                                    a.isDone ? r() : null === a.Lt ? i.continue() : i.continue(a.Lt)
                                } else r()
                            }
                        })).next((function() {
                            return ni.waitFor(n)
                        }))
                    }
                }, {
                    key: "options",
                    value: function(e, t) {
                        var n;
                        return void 0 !== e && ("string" == typeof e ? n = e : t = e), {
                            index: n,
                            range: t
                        }
                    }
                }, {
                    key: "cursor",
                    value: function(e) {
                        var t = "next";
                        if (e.reverse && (t = "prev"), e.index) {
                            var n = this.store.index(e.index);
                            return e.jt ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t)
                        }
                        return this.store.openCursor(e.range, t)
                    }
                }]), e
            }();

            function ci(e) {
                return new ni((function(t, n) {
                    e.onsuccess = function(e) {
                        var n = e.target.result;
                        t(n)
                    }, e.onerror = function(e) {
                        var t = fi(e.target.error);
                        n(t)
                    }
                }))
            }
            var li = !1;

            function fi(e) {
                var t = ii.Vt((0, g.z$)());
                if (t >= 12.2 && t < 13) {
                    var n = "An internal error was encountered in the Indexed Database server";
                    if (e.message.indexOf(n) >= 0) {
                        var r = new P("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '".concat(n, "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."));
                        return li || (li = !0, setTimeout((function() {
                            throw r
                        }), 0)), r
                    }
                }
                return e
            }
            var hi = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r) {
                    var i;
                    return (0, f.Z)(this, n), (i = t.call(this)).Ht = e, i.currentSequenceNumber = r, i
                }
                return (0, h.Z)(n)
            }(ti);

            function di(e, t) {
                var n = L(e);
                return ii.xt(n.Ht, t)
            }
            var vi = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.batchId = t, this.localWriteTime = n, this.baseMutations = r, this.mutations = i
                    }
                    return (0, h.Z)(e, [{
                        key: "applyToRemoteDocument",
                        value: function(e, t) {
                            for (var n = t.mutationResults, r = 0; r < this.mutations.length; r++) {
                                var i = this.mutations[r];
                                i.key.isEqual(e.key) && on(i, e, n[r])
                            }
                        }
                    }, {
                        key: "applyToLocalView",
                        value: function(e) {
                            var t, n = w(this.baseMutations);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    r.key.isEqual(e.key) && sn(r, e, this.localWriteTime)
                                }
                            } catch (o) {
                                n.e(o)
                            } finally {
                                n.f()
                            }
                            var i, a = w(this.mutations);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    var u = i.value;
                                    u.key.isEqual(e.key) && sn(u, e, this.localWriteTime)
                                }
                            } catch (o) {
                                a.e(o)
                            } finally {
                                a.f()
                            }
                        }
                    }, {
                        key: "applyToLocalDocumentSet",
                        value: function(e) {
                            var t = this;
                            this.mutations.forEach((function(n) {
                                var r = e.get(n.key),
                                    i = r;
                                t.applyToLocalView(i), r.isValidDocument() || i.convertToNoDocument(te.min())
                            }))
                        }
                    }, {
                        key: "keys",
                        value: function() {
                            return this.mutations.reduce((function(e, t) {
                                return e.add(t.key)
                            }), Pn())
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this.batchId === e.batchId && $(this.mutations, e.mutations, (function(e, t) {
                                return ln(e, t)
                            })) && $(this.baseMutations, e.baseMutations, (function(e, t) {
                                return ln(e, t)
                            }))
                        }
                    }]), e
                }(),
                yi = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.batch = t, this.commitVersion = n, this.mutationResults = r, this.docVersions = i
                    }
                    return (0, h.Z)(e, null, [{
                        key: "from",
                        value: function(t, n, r) {
                            R(t.mutations.length === r.length);
                            for (var i = Ln, a = t.mutations, u = 0; u < a.length; u++) i = i.insert(a[u].key, r[u].version);
                            return new e(t, n, r, i)
                        }
                    }]), e
                }(),
                pi = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.largestBatchId = t, this.mutation = n
                    }
                    return (0, h.Z)(e, [{
                        key: "getKey",
                        value: function() {
                            return this.mutation.key
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return null !== e && this.mutation === e.mutation
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "Overlay{\n      largestBatchId: ".concat(this.largestBatchId, ",\n      mutation: ").concat(this.mutation.toString(), "\n    }")
                        }
                    }]), e
                }(),
                mi = function() {
                    function e(t, n, r, i) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : te.min(),
                            u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : te.min(),
                            o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : fe.EMPTY_BYTE_STRING;
                        (0, f.Z)(this, e), this.target = t, this.targetId = n, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = a, this.lastLimboFreeSnapshotVersion = u, this.resumeToken = o
                    }
                    return (0, h.Z)(e, [{
                        key: "withSequenceNumber",
                        value: function(t) {
                            return new e(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken)
                        }
                    }, {
                        key: "withResumeToken",
                        value: function(t, n) {
                            return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, t)
                        }
                    }, {
                        key: "withLastLimboFreeSnapshotVersion",
                        value: function(t) {
                            return new e(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken)
                        }
                    }]), e
                }(),
                gi = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this.Jt = t
                }));

            function ki(e, t) {
                var n = t.key,
                    r = {
                        prefixPath: n.getCollectionPath().popLast().toArray(),
                        collectionGroup: n.collectionGroup,
                        documentId: n.path.lastSegment(),
                        readTime: wi(t.readTime),
                        hasCommittedMutations: t.hasCommittedMutations
                    };
                if (t.isFoundDocument()) r.document = function(e, t) {
                    return {
                        name: ar(e, t.key),
                        fields: t.data.value.mapValue.fields,
                        updateTime: Xn(e, t.version.toTimestamp())
                    }
                }(e.Jt, t);
                else if (t.isNoDocument()) r.noDocument = {
                    path: n.path.toArray(),
                    readTime: bi(t.version)
                };
                else {
                    if (!t.isUnknownDocument()) return M();
                    r.unknownDocument = {
                        path: n.path.toArray(),
                        version: bi(t.version)
                    }
                }
                return r
            }

            function wi(e) {
                var t = e.toTimestamp();
                return [t.seconds, t.nanoseconds]
            }

            function bi(e) {
                var t = e.toTimestamp();
                return {
                    seconds: t.seconds,
                    nanoseconds: t.nanoseconds
                }
            }

            function xi(e) {
                var t = new ee(e.seconds, e.nanoseconds);
                return te.fromTimestamp(t)
            }

            function Ii(e, t) {
                for (var n = (t.baseMutations || []).map((function(t) {
                        return yr(e.Jt, t)
                    })), r = 0; r < t.mutations.length - 1; ++r) {
                    var i = t.mutations[r];
                    if (r + 1 < t.mutations.length && void 0 !== t.mutations[r + 1].transform) {
                        var a = t.mutations[r + 1];
                        i.updateTransforms = a.transform.fieldTransforms, t.mutations.splice(r + 1, 1), ++r
                    }
                }
                var u = t.mutations.map((function(t) {
                        return yr(e.Jt, t)
                    })),
                    o = ee.fromMillis(t.localWriteTimeMs);
                return new vi(t.batchId, o, n, u)
            }

            function Ei(e) {
                var t, n, r = xi(e.readTime),
                    i = void 0 !== e.lastLimboFreeSnapshotVersion ? xi(e.lastLimboFreeSnapshotVersion) : te.min();
                return void 0 !== e.query.documents ? (R(1 === (n = e.query).documents.length), t = Ct(Et(sr(n.documents[0])))) : t = function(e) {
                    return Ct(gr(e))
                }(e.query), new mi(t, e.targetId, 0, e.lastListenSequenceNumber, r, i, fe.fromBase64String(e.resumeToken))
            }

            function Ti(e, t) {
                var n, r = bi(t.snapshotVersion),
                    i = bi(t.lastLimboFreeSnapshotVersion);
                n = ut(t.target) ? pr(e.Jt, t.target) : mr(e.Jt, t.target);
                var a = t.resumeToken.toBase64();
                return {
                    targetId: t.targetId,
                    canonicalId: it(t.target),
                    readTime: r,
                    resumeToken: a,
                    lastListenSequenceNumber: t.sequenceNumber,
                    lastLimboFreeSnapshotVersion: i,
                    query: n
                }
            }

            function Si(e) {
                var t = gr({
                    parent: e.parent,
                    structuredQuery: e.structuredQuery
                });
                return "LAST" === e.limitType ? Zt(t, t.limit, "L") : t
            }

            function _i(e, t) {
                return new pi(t.largestBatchId, yr(e.Jt, t.overlayMutation))
            }

            function Ai(e, t) {
                var n = t.path.lastSegment();
                return [e, Ar(t.path.popLast()), n]
            }
            var Ni = function() {
                function e() {
                    (0, f.Z)(this, e)
                }
                return (0, h.Z)(e, [{
                    key: "getBundleMetadata",
                    value: function(e, t) {
                        return Di(e).get(t).next((function(e) {
                            if (e) return {
                                id: (t = e).bundleId,
                                createTime: xi(t.createTime),
                                version: t.version
                            };
                            var t
                        }))
                    }
                }, {
                    key: "saveBundleMetadata",
                    value: function(e, t) {
                        return Di(e).put({
                            bundleId: (n = t).id,
                            createTime: bi(nr(n.createTime)),
                            version: n.version
                        });
                        var n
                    }
                }, {
                    key: "getNamedQuery",
                    value: function(e, t) {
                        return Ci(e).get(t).next((function(e) {
                            if (e) return {
                                name: (t = e).name,
                                query: Si(t.bundledQuery),
                                readTime: xi(t.readTime)
                            };
                            var t
                        }))
                    }
                }, {
                    key: "saveNamedQuery",
                    value: function(e, t) {
                        return Ci(e).put(function(e) {
                            return {
                                name: e.name,
                                readTime: bi(nr(e.readTime)),
                                bundledQuery: e.bundledQuery
                            }
                        }(t))
                    }
                }]), e
            }();

            function Di(e) {
                return di(e, "bundles")
            }

            function Ci(e) {
                return di(e, "namedQueries")
            }
            var Zi = function() {
                function e(t, n) {
                    (0, f.Z)(this, e), this.M = t, this.userId = n
                }
                return (0, h.Z)(e, [{
                    key: "getOverlay",
                    value: function(e, t) {
                        var n = this;
                        return Mi(e).get(Ai(this.userId, t)).next((function(e) {
                            return e ? _i(n.M, e) : null
                        }))
                    }
                }, {
                    key: "saveOverlays",
                    value: function(e, t, n) {
                        var r = this,
                            i = [];
                        return n.forEach((function(n, a) {
                            var u = new pi(t, a);
                            i.push(r.Xt(e, u))
                        })), ni.waitFor(i)
                    }
                }, {
                    key: "removeOverlaysForBatchId",
                    value: function(e, t, n) {
                        var r = this,
                            i = new Set;
                        t.forEach((function(e) {
                            return i.add(Ar(e.getCollectionPath()))
                        }));
                        var a = [];
                        return i.forEach((function(t) {
                            var i = IDBKeyRange.bound([r.userId, t, n], [r.userId, t, n + 1], !1, !0);
                            a.push(Mi(e).Qt("collectionPathOverlayIndex", i))
                        })), ni.waitFor(a)
                    }
                }, {
                    key: "getOverlaysForCollection",
                    value: function(e, t, n) {
                        var r = this,
                            i = Vn(),
                            a = Ar(t),
                            u = IDBKeyRange.bound([this.userId, a, n], [this.userId, a, Number.POSITIVE_INFINITY], !0);
                        return Mi(e).qt("collectionPathOverlayIndex", u).next((function(e) {
                            var t, n = w(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var a = t.value,
                                        u = _i(r.M, a);
                                    i.set(u.getKey(), u)
                                }
                            } catch (o) {
                                n.e(o)
                            } finally {
                                n.f()
                            }
                            return i
                        }))
                    }
                }, {
                    key: "getOverlaysForCollectionGroup",
                    value: function(e, t, n, r) {
                        var i, a = this,
                            u = Vn(),
                            o = IDBKeyRange.bound([this.userId, t, n], [this.userId, t, Number.POSITIVE_INFINITY], !0);
                        return Mi(e).Wt({
                            index: "collectionGroupOverlayIndex",
                            range: o
                        }, (function(e, t, n) {
                            var o = _i(a.M, t);
                            u.size() < r || o.largestBatchId === i ? (u.set(o.getKey(), o), i = o.largestBatchId) : n.done()
                        })).next((function() {
                            return u
                        }))
                    }
                }, {
                    key: "Xt",
                    value: function(e, t) {
                        return Mi(e).put(function(e, t, n) {
                            var r = Ai(t, n.mutation.key),
                                i = (0, a.Z)(r, 3);
                            i[0];
                            return {
                                userId: t,
                                collectionPath: i[1],
                                documentId: i[2],
                                collectionGroup: n.mutation.key.getCollectionGroup(),
                                largestBatchId: n.largestBatchId,
                                overlayMutation: vr(e.Jt, n.mutation)
                            }
                        }(this.M, this.userId, t))
                    }
                }], [{
                    key: "Yt",
                    value: function(t, n) {
                        return new e(t, n.uid || "")
                    }
                }]), e
            }();

            function Mi(e) {
                return di(e, "documentOverlays")
            }
            var Ri = function() {
                function e() {
                    (0, f.Z)(this, e)
                }
                return (0, h.Z)(e, [{
                    key: "Zt",
                    value: function(e, t) {
                        this.te(e, t), t.ee()
                    }
                }, {
                    key: "te",
                    value: function(e, t) {
                        if ("nullValue" in e) this.ne(t, 5);
                        else if ("booleanValue" in e) this.ne(t, 10), t.se(e.booleanValue ? 1 : 0);
                        else if ("integerValue" in e) this.ne(t, 15), t.se(ve(e.integerValue));
                        else if ("doubleValue" in e) {
                            var n = ve(e.doubleValue);
                            isNaN(n) ? this.ne(t, 13) : (this.ne(t, 15), xe(n) ? t.se(0) : t.se(n))
                        } else if ("timestampValue" in e) {
                            var r = e.timestampValue;
                            this.ne(t, 20), "string" == typeof r ? t.ie(r) : (t.ie("".concat(r.seconds || "")), t.se(r.nanos || 0))
                        } else if ("stringValue" in e) this.re(e.stringValue, t), this.oe(t);
                        else if ("bytesValue" in e) this.ne(t, 30), t.ue(ye(e.bytesValue)), this.oe(t);
                        else if ("referenceValue" in e) this.ae(e.referenceValue, t);
                        else if ("geoPointValue" in e) {
                            var i = e.geoPointValue;
                            this.ne(t, 45), t.se(i.latitude || 0), t.se(i.longitude || 0)
                        } else "mapValue" in e ? Ue(e) ? this.ne(t, Number.MAX_SAFE_INTEGER) : (this.ce(e.mapValue, t), this.oe(t)) : "arrayValue" in e ? (this.he(e.arrayValue, t), this.oe(t)) : M()
                    }
                }, {
                    key: "re",
                    value: function(e, t) {
                        this.ne(t, 25), this.le(e, t)
                    }
                }, {
                    key: "le",
                    value: function(e, t) {
                        t.ie(e)
                    }
                }, {
                    key: "ce",
                    value: function(e, t) {
                        var n = e.fields || {};
                        this.ne(t, 55);
                        for (var r = 0, i = Object.keys(n); r < i.length; r++) {
                            var a = i[r];
                            this.re(a, t), this.te(n[a], t)
                        }
                    }
                }, {
                    key: "he",
                    value: function(e, t) {
                        var n = e.values || [];
                        this.ne(t, 50);
                        var r, i = w(n);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var a = r.value;
                                this.te(a, t)
                            }
                        } catch (u) {
                            i.e(u)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "ae",
                    value: function(e, t) {
                        var n = this;
                        this.ne(t, 37), Ee.fromName(e).path.forEach((function(e) {
                            n.ne(t, 60), n.le(e, t)
                        }))
                    }
                }, {
                    key: "ne",
                    value: function(e, t) {
                        e.se(t)
                    }
                }, {
                    key: "oe",
                    value: function(e) {
                        e.se(2)
                    }
                }]), e
            }();

            function Vi(e) {
                if (0 === e) return 8;
                var t = 0;
                return e >> 4 == 0 && (t += 4, e <<= 4), e >> 6 == 0 && (t += 2, e <<= 2), e >> 7 == 0 && (t += 1), t
            }

            function Li(e) {
                var t = 64 - function(e) {
                    for (var t = 0, n = 0; n < 8; ++n) {
                        var r = Vi(255 & e[n]);
                        if (t += r, 8 !== r) break
                    }
                    return t
                }(e);
                return Math.ceil(t / 8)
            }
            Ri.fe = new Ri;
            var Fi = function() {
                    function e() {
                        (0, f.Z)(this, e), this.buffer = new Uint8Array(1024), this.position = 0
                    }
                    return (0, h.Z)(e, [{
                        key: "de",
                        value: function(e) {
                            for (var t = e[Symbol.iterator](), n = t.next(); !n.done;) this._e(n.value), n = t.next();
                            this.we()
                        }
                    }, {
                        key: "me",
                        value: function(e) {
                            for (var t = e[Symbol.iterator](), n = t.next(); !n.done;) this.ge(n.value), n = t.next();
                            this.ye()
                        }
                    }, {
                        key: "pe",
                        value: function(e) {
                            var t, n = w(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value,
                                        i = r.charCodeAt(0);
                                    if (i < 128) this._e(i);
                                    else if (i < 2048) this._e(960 | i >>> 6), this._e(128 | 63 & i);
                                    else if (r < "\ud800" || "\udbff" < r) this._e(480 | i >>> 12), this._e(128 | 63 & i >>> 6), this._e(128 | 63 & i);
                                    else {
                                        var a = r.codePointAt(0);
                                        this._e(240 | a >>> 18), this._e(128 | 63 & a >>> 12), this._e(128 | 63 & a >>> 6), this._e(128 | 63 & a)
                                    }
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                            this.we()
                        }
                    }, {
                        key: "Ie",
                        value: function(e) {
                            var t, n = w(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value,
                                        i = r.charCodeAt(0);
                                    if (i < 128) this.ge(i);
                                    else if (i < 2048) this.ge(960 | i >>> 6), this.ge(128 | 63 & i);
                                    else if (r < "\ud800" || "\udbff" < r) this.ge(480 | i >>> 12), this.ge(128 | 63 & i >>> 6), this.ge(128 | 63 & i);
                                    else {
                                        var a = r.codePointAt(0);
                                        this.ge(240 | a >>> 18), this.ge(128 | 63 & a >>> 12), this.ge(128 | 63 & a >>> 6), this.ge(128 | 63 & a)
                                    }
                                }
                            } catch (u) {
                                n.e(u)
                            } finally {
                                n.f()
                            }
                            this.ye()
                        }
                    }, {
                        key: "Te",
                        value: function(e) {
                            var t = this.Ee(e),
                                n = Li(t);
                            this.Ae(1 + n), this.buffer[this.position++] = 255 & n;
                            for (var r = t.length - n; r < t.length; ++r) this.buffer[this.position++] = 255 & t[r]
                        }
                    }, {
                        key: "Re",
                        value: function(e) {
                            var t = this.Ee(e),
                                n = Li(t);
                            this.Ae(1 + n), this.buffer[this.position++] = ~(255 & n);
                            for (var r = t.length - n; r < t.length; ++r) this.buffer[this.position++] = ~(255 & t[r])
                        }
                    }, {
                        key: "be",
                        value: function() {
                            this.Pe(255), this.Pe(255)
                        }
                    }, {
                        key: "Ve",
                        value: function() {
                            this.ve(255), this.ve(255)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.position = 0
                        }
                    }, {
                        key: "seed",
                        value: function(e) {
                            this.Ae(e.length), this.buffer.set(e, this.position), this.position += e.length
                        }
                    }, {
                        key: "Se",
                        value: function() {
                            return this.buffer.slice(0, this.position)
                        }
                    }, {
                        key: "Ee",
                        value: function(e) {
                            var t = function(e) {
                                    var t = new DataView(new ArrayBuffer(8));
                                    return t.setFloat64(0, e, !1), new Uint8Array(t.buffer)
                                }(e),
                                n = 0 != (128 & t[0]);
                            t[0] ^= n ? 255 : 128;
                            for (var r = 1; r < t.length; ++r) t[r] ^= n ? 255 : 0;
                            return t
                        }
                    }, {
                        key: "_e",
                        value: function(e) {
                            var t = 255 & e;
                            0 === t ? (this.Pe(0), this.Pe(255)) : 255 === t ? (this.Pe(255), this.Pe(0)) : this.Pe(t)
                        }
                    }, {
                        key: "ge",
                        value: function(e) {
                            var t = 255 & e;
                            0 === t ? (this.ve(0), this.ve(255)) : 255 === t ? (this.ve(255), this.ve(0)) : this.ve(e)
                        }
                    }, {
                        key: "we",
                        value: function() {
                            this.Pe(0), this.Pe(1)
                        }
                    }, {
                        key: "ye",
                        value: function() {
                            this.ve(0), this.ve(1)
                        }
                    }, {
                        key: "Pe",
                        value: function(e) {
                            this.Ae(1), this.buffer[this.position++] = e
                        }
                    }, {
                        key: "ve",
                        value: function(e) {
                            this.Ae(1), this.buffer[this.position++] = ~e
                        }
                    }, {
                        key: "Ae",
                        value: function(e) {
                            var t = e + this.position;
                            if (!(t <= this.buffer.length)) {
                                var n = 2 * this.buffer.length;
                                n < t && (n = t);
                                var r = new Uint8Array(n);
                                r.set(this.buffer), this.buffer = r
                            }
                        }
                    }]), e
                }(),
                Pi = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.De = t
                    }
                    return (0, h.Z)(e, [{
                        key: "ue",
                        value: function(e) {
                            this.De.de(e)
                        }
                    }, {
                        key: "ie",
                        value: function(e) {
                            this.De.pe(e)
                        }
                    }, {
                        key: "se",
                        value: function(e) {
                            this.De.Te(e)
                        }
                    }, {
                        key: "ee",
                        value: function() {
                            this.De.be()
                        }
                    }]), e
                }(),
                Oi = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.De = t
                    }
                    return (0, h.Z)(e, [{
                        key: "ue",
                        value: function(e) {
                            this.De.me(e)
                        }
                    }, {
                        key: "ie",
                        value: function(e) {
                            this.De.Ie(e)
                        }
                    }, {
                        key: "se",
                        value: function(e) {
                            this.De.Re(e)
                        }
                    }, {
                        key: "ee",
                        value: function() {
                            this.De.Ve()
                        }
                    }]), e
                }(),
                qi = function() {
                    function e() {
                        (0, f.Z)(this, e), this.De = new Fi, this.Ce = new Pi(this.De), this.xe = new Oi(this.De)
                    }
                    return (0, h.Z)(e, [{
                        key: "seed",
                        value: function(e) {
                            this.De.seed(e)
                        }
                    }, {
                        key: "Ne",
                        value: function(e) {
                            return 0 === e ? this.Ce : this.xe
                        }
                    }, {
                        key: "Se",
                        value: function() {
                            return this.De.Se()
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.De.reset()
                        }
                    }]), e
                }(),
                Ui = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.indexId = t, this.documentKey = n, this.arrayValue = r, this.directionalValue = i
                    }
                    return (0, h.Z)(e, [{
                        key: "ke",
                        value: function() {
                            var t = this.directionalValue.length,
                                n = 0 === t || 255 === this.directionalValue[t - 1] ? t + 1 : t,
                                r = new Uint8Array(n);
                            return r.set(this.directionalValue, 0), n !== t ? r.set([0], this.directionalValue.length) : ++r[r.length - 1], new e(this.indexId, this.documentKey, this.arrayValue, r)
                        }
                    }]), e
                }();

            function Bi(e, t) {
                var n = e.indexId - t.indexId;
                return 0 !== n ? n : 0 !== (n = Ki(e.arrayValue, t.arrayValue)) ? n : 0 !== (n = Ki(e.directionalValue, t.directionalValue)) ? n : Ee.comparator(e.documentKey, t.documentKey)
            }

            function Ki(e, t) {
                for (var n = 0; n < e.length && n < t.length; ++n) {
                    var r = e[n] - t[n];
                    if (0 !== r) return r
                }
                return e.length - t.length
            }
            var Gi = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.collectionId = null != t.collectionGroup ? t.collectionGroup : t.path.lastSegment(), this.Me = t.orderBy, this.Oe = [];
                        var n, r = w(t.filters);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                i.S() ? this.Fe = i : this.Oe.push(i)
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                    }
                    return (0, h.Z)(e, [{
                        key: "$e",
                        value: function(e) {
                            var t = We(e);
                            if (void 0 !== t && !this.Be(t)) return !1;
                            for (var n = He(e), r = 0, i = 0; r < n.length && this.Be(n[r]); ++r);
                            if (r === n.length) return !0;
                            if (void 0 !== this.Fe) {
                                var a = n[r];
                                if (!this.Le(this.Fe, a) || !this.Ue(this.Me[i++], a)) return !1;
                                ++r
                            }
                            for (; r < n.length; ++r) {
                                var u = n[r];
                                if (i >= this.Me.length || !this.Ue(this.Me[i++], u)) return !1
                            }
                            return !0
                        }
                    }, {
                        key: "Be",
                        value: function(e) {
                            var t, n = w(this.Oe);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    if (this.Le(r, e)) return !0
                                }
                            } catch (i) {
                                n.e(i)
                            } finally {
                                n.f()
                            }
                            return !1
                        }
                    }, {
                        key: "Le",
                        value: function(e, t) {
                            if (void 0 === e || !e.field.isEqual(t.fieldPath)) return !1;
                            var n = "array-contains" === e.op || "array-contains-any" === e.op;
                            return 2 === t.kind === n
                        }
                    }, {
                        key: "Ue",
                        value: function(e, t) {
                            return !!e.field.isEqual(t.fieldPath) && (0 === t.kind && "asc" === e.dir || 1 === t.kind && "desc" === e.dir)
                        }
                    }]), e
                }(),
                ji = function() {
                    function e() {
                        (0, f.Z)(this, e), this.qe = new zi
                    }
                    return (0, h.Z)(e, [{
                        key: "addToCollectionParentIndex",
                        value: function(e, t) {
                            return this.qe.add(t), ni.resolve()
                        }
                    }, {
                        key: "getCollectionParents",
                        value: function(e, t) {
                            return ni.resolve(this.qe.getEntries(t))
                        }
                    }, {
                        key: "addFieldIndex",
                        value: function(e, t) {
                            return ni.resolve()
                        }
                    }, {
                        key: "deleteFieldIndex",
                        value: function(e, t) {
                            return ni.resolve()
                        }
                    }, {
                        key: "getDocumentsMatchingTarget",
                        value: function(e, t) {
                            return ni.resolve(null)
                        }
                    }, {
                        key: "getFieldIndex",
                        value: function(e, t) {
                            return ni.resolve(null)
                        }
                    }, {
                        key: "getFieldIndexes",
                        value: function(e, t) {
                            return ni.resolve([])
                        }
                    }, {
                        key: "getNextCollectionGroupToUpdate",
                        value: function(e) {
                            return ni.resolve(null)
                        }
                    }, {
                        key: "updateCollectionGroup",
                        value: function(e, t, n) {
                            return ni.resolve()
                        }
                    }, {
                        key: "updateIndexEntries",
                        value: function(e, t) {
                            return ni.resolve()
                        }
                    }]), e
                }(),
                zi = function() {
                    function e() {
                        (0, f.Z)(this, e), this.index = {}
                    }
                    return (0, h.Z)(e, [{
                        key: "add",
                        value: function(e) {
                            var t = e.lastSegment(),
                                n = e.popLast(),
                                r = this.index[t] || new An(ue.comparator),
                                i = !r.has(n);
                            return this.index[t] = r.add(n), i
                        }
                    }, {
                        key: "has",
                        value: function(e) {
                            var t = e.lastSegment(),
                                n = e.popLast(),
                                r = this.index[t];
                            return r && r.has(n)
                        }
                    }, {
                        key: "getEntries",
                        value: function(e) {
                            return (this.index[e] || new An(ue.comparator)).toArray()
                        }
                    }]), e
                }(),
                Qi = new Uint8Array(0),
                Wi = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.user = t, this.Ge = new zi, this.Ke = new En((function(e) {
                            return it(e)
                        }), (function(e, t) {
                            return at(e, t)
                        })), this.uid = t.uid || ""
                    }
                    return (0, h.Z)(e, [{
                        key: "addToCollectionParentIndex",
                        value: function(e, t) {
                            var n = this;
                            if (!this.Ge.has(t)) {
                                var r = t.lastSegment(),
                                    i = t.popLast();
                                e.addOnCommittedListener((function() {
                                    n.Ge.add(t)
                                }));
                                var a = {
                                    collectionId: r,
                                    parent: Ar(i)
                                };
                                return Hi(e).put(a)
                            }
                            return ni.resolve()
                        }
                    }, {
                        key: "getCollectionParents",
                        value: function(e, t) {
                            var n = [],
                                r = IDBKeyRange.bound([t, ""], [X(t), ""], !1, !0);
                            return Hi(e).qt(r).next((function(e) {
                                var r, i = w(e);
                                try {
                                    for (i.s(); !(r = i.n()).done;) {
                                        var a = r.value;
                                        if (a.collectionId !== t) break;
                                        n.push(Cr(a.parent))
                                    }
                                } catch (u) {
                                    i.e(u)
                                } finally {
                                    i.f()
                                }
                                return n
                            }))
                        }
                    }, {
                        key: "addFieldIndex",
                        value: function(e, t) {
                            var n = Ji(e),
                                r = function(e) {
                                    return {
                                        indexId: e.indexId,
                                        collectionGroup: e.collectionGroup,
                                        fields: e.fields.map((function(e) {
                                            return [e.fieldPath.canonicalString(), e.kind]
                                        }))
                                    }
                                }(t);
                            return delete r.indexId, n.add(r).next()
                        }
                    }, {
                        key: "deleteFieldIndex",
                        value: function(e, t) {
                            var n = Ji(e),
                                r = $i(e),
                                i = Yi(e);
                            return n.delete(t.indexId).next((function() {
                                return r.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0))
                            })).next((function() {
                                return i.delete(IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0))
                            }))
                        }
                    }, {
                        key: "getDocumentsMatchingTarget",
                        value: function(e, t) {
                            var n = this,
                                r = Yi(e),
                                i = !0,
                                a = new Map;
                            return ni.forEach(this.Qe(t), (function(t) {
                                return n.getFieldIndex(e, t).next((function(e) {
                                    i && (i = !!e), a.set(t, e)
                                }))
                            })).next((function() {
                                if (i) {
                                    var e = Pn();
                                    return ni.forEach(a, (function(i, a) {
                                        var u;
                                        N("IndexedDbIndexManager", "Using index ".concat((u = i, "id=".concat(u.indexId, "|cg=").concat(u.collectionGroup, "|f=").concat(u.fields.map((function(e) {
                                            return "".concat(e.fieldPath, ":").concat(e.kind)
                                        })).join(","))), " to execute ").concat(it(t)));
                                        var o = function(e, t) {
                                                var n = We(t);
                                                if (void 0 === n) return null;
                                                var r, i = w(ot(e, n.fieldPath));
                                                try {
                                                    for (i.s(); !(r = i.n()).done;) {
                                                        var a = r.value;
                                                        switch (a.op) {
                                                            case "array-contains-any":
                                                                return a.value.arrayValue.values || [];
                                                            case "array-contains":
                                                                return [a.value]
                                                        }
                                                    }
                                                } catch (u) {
                                                    i.e(u)
                                                } finally {
                                                    i.f()
                                                }
                                                return null
                                            }(a, i),
                                            s = function(e, t) {
                                                var n, r = new Map,
                                                    i = w(He(t));
                                                try {
                                                    for (i.s(); !(n = i.n()).done;) {
                                                        var a, u = n.value,
                                                            o = w(ot(e, u.fieldPath));
                                                        try {
                                                            for (o.s(); !(a = o.n()).done;) {
                                                                var s = a.value;
                                                                switch (s.op) {
                                                                    case "==":
                                                                    case "in":
                                                                        r.set(u.fieldPath.canonicalString(), s.value);
                                                                        break;
                                                                    case "not-in":
                                                                    case "!=":
                                                                        return r.set(u.fieldPath.canonicalString(), s.value), Array.from(r.values())
                                                                }
                                                            }
                                                        } catch (c) {
                                                            o.e(c)
                                                        } finally {
                                                            o.f()
                                                        }
                                                    }
                                                } catch (c) {
                                                    i.e(c)
                                                } finally {
                                                    i.f()
                                                }
                                                return null
                                            }(a, i),
                                            c = function(e, t) {
                                                var n, r, i = [],
                                                    a = !0,
                                                    u = w(He(t));
                                                try {
                                                    for (u.s(); !(n = u.n()).done;) {
                                                        var o, s = n.value,
                                                            c = void 0,
                                                            l = !0,
                                                            f = w(ot(e, s.fieldPath));
                                                        try {
                                                            for (f.s(); !(o = f.n()).done;) {
                                                                var h = o.value,
                                                                    d = void 0,
                                                                    v = !0;
                                                                switch (h.op) {
                                                                    case "<":
                                                                    case "<=":
                                                                        d = "nullValue" in (r = h.value) ? Se : "booleanValue" in r ? {
                                                                            booleanValue: !1
                                                                        } : "integerValue" in r || "doubleValue" in r ? {
                                                                            doubleValue: NaN
                                                                        } : "timestampValue" in r ? {
                                                                            timestampValue: {
                                                                                seconds: Number.MIN_SAFE_INTEGER
                                                                            }
                                                                        } : "stringValue" in r ? {
                                                                            stringValue: ""
                                                                        } : "bytesValue" in r ? {
                                                                            bytesValue: ""
                                                                        } : "referenceValue" in r ? Re(we.empty(), Ee.empty()) : "geoPointValue" in r ? {
                                                                            geoPointValue: {
                                                                                latitude: -90,
                                                                                longitude: -180
                                                                            }
                                                                        } : "arrayValue" in r ? {
                                                                            arrayValue: {}
                                                                        } : "mapValue" in r ? {
                                                                            mapValue: {}
                                                                        } : M();
                                                                        break;
                                                                    case "==":
                                                                    case "in":
                                                                    case ">=":
                                                                        d = h.value;
                                                                        break;
                                                                    case ">":
                                                                        d = h.value, v = !1;
                                                                        break;
                                                                    case "!=":
                                                                    case "not-in":
                                                                        d = Se
                                                                }
                                                                Be(c, d) === d && (c = d, l = v)
                                                            }
                                                        } catch (m) {
                                                            f.e(m)
                                                        } finally {
                                                            f.f()
                                                        }
                                                        if (null !== e.startAt)
                                                            for (var y = 0; y < e.orderBy.length; ++y)
                                                                if (e.orderBy[y].field.isEqual(s.fieldPath)) {
                                                                    var p = e.startAt.position[y];
                                                                    Be(c, p) === p && (c = p, l = e.startAt.inclusive);
                                                                    break
                                                                }
                                                        if (void 0 === c) return null;
                                                        i.push(c), a && (a = l)
                                                    }
                                                } catch (m) {
                                                    u.e(m)
                                                } finally {
                                                    u.f()
                                                }
                                                return new mt(i, a)
                                            }(a, i),
                                            l = function(e, t) {
                                                var n, r, i = [],
                                                    a = !0,
                                                    u = w(He(t));
                                                try {
                                                    for (u.s(); !(n = u.n()).done;) {
                                                        var o, s = n.value,
                                                            c = void 0,
                                                            l = !0,
                                                            f = w(ot(e, s.fieldPath));
                                                        try {
                                                            for (f.s(); !(o = f.n()).done;) {
                                                                var h = o.value,
                                                                    d = void 0,
                                                                    v = !0;
                                                                switch (h.op) {
                                                                    case ">=":
                                                                    case ">":
                                                                        d = "nullValue" in (r = h.value) ? {
                                                                            booleanValue: !1
                                                                        } : "booleanValue" in r ? {
                                                                            doubleValue: NaN
                                                                        } : "integerValue" in r || "doubleValue" in r ? {
                                                                            timestampValue: {
                                                                                seconds: Number.MIN_SAFE_INTEGER
                                                                            }
                                                                        } : "timestampValue" in r ? {
                                                                            stringValue: ""
                                                                        } : "stringValue" in r ? {
                                                                            bytesValue: ""
                                                                        } : "bytesValue" in r ? Re(we.empty(), Ee.empty()) : "referenceValue" in r ? {
                                                                            geoPointValue: {
                                                                                latitude: -90,
                                                                                longitude: -180
                                                                            }
                                                                        } : "geoPointValue" in r ? {
                                                                            arrayValue: {}
                                                                        } : "arrayValue" in r ? {
                                                                            mapValue: {}
                                                                        } : "mapValue" in r ? Te : M(), v = !1;
                                                                        break;
                                                                    case "==":
                                                                    case "in":
                                                                    case "<=":
                                                                        d = h.value;
                                                                        break;
                                                                    case "<":
                                                                        d = h.value, v = !1;
                                                                        break;
                                                                    case "!=":
                                                                    case "not-in":
                                                                        d = Te
                                                                }
                                                                Ke(c, d) === d && (c = d, l = v)
                                                            }
                                                        } catch (m) {
                                                            f.e(m)
                                                        } finally {
                                                            f.f()
                                                        }
                                                        if (null !== e.endAt)
                                                            for (var y = 0; y < e.orderBy.length; ++y)
                                                                if (e.orderBy[y].field.isEqual(s.fieldPath)) {
                                                                    var p = e.endAt.position[y];
                                                                    Ke(c, p) === p && (c = p, l = e.endAt.inclusive);
                                                                    break
                                                                }
                                                        if (void 0 === c) return null;
                                                        i.push(c), a && (a = l)
                                                    }
                                                } catch (m) {
                                                    u.e(m)
                                                } finally {
                                                    u.f()
                                                }
                                                return new mt(i, a)
                                            }(a, i),
                                            f = n.je(i, a, c),
                                            h = n.je(i, a, l),
                                            d = n.We(i, a, s),
                                            v = n.ze(i.indexId, o, f, !!c && c.inclusive, h, !!l && l.inclusive, d);
                                        return ni.forEach(v, (function(n) {
                                            return r.Kt(n, t.limit).next((function(t) {
                                                t.forEach((function(t) {
                                                    e = e.add(new Ee(Cr(t.documentKey)))
                                                }))
                                            }))
                                        }))
                                    })).next((function() {
                                        return e
                                    }))
                                }
                                return ni.resolve(null)
                            }))
                        }
                    }, {
                        key: "Qe",
                        value: function(e) {
                            var t = this.Ke.get(e);
                            return t || (t = [e], this.Ke.set(e, t), t)
                        }
                    }, {
                        key: "ze",
                        value: function(e, t, n, r, i, a, u) {
                            for (var o = this, s = (null != t ? t.length : 1) * Math.max(null != n ? n.length : 1, null != i ? i.length : 1), c = s / (null != t ? t.length : 1), f = [], h = function(s) {
                                    var h = t ? o.He(t[s / c]) : Qi,
                                        d = n ? o.Je(e, h, n[s % c], r) : o.Ye(e),
                                        v = i ? o.Xe(e, h, i[s % c], a) : o.Ye(e + 1);
                                    f.push.apply(f, (0, l.Z)(o.createRange(d, v, u.map((function(t) {
                                        return o.Je(e, h, t, !0)
                                    })))))
                                }, d = 0; d < s; ++d) h(d);
                            return f
                        }
                    }, {
                        key: "Je",
                        value: function(e, t, n, r) {
                            var i = new Ui(e, Ee.empty(), t, n);
                            return r ? i : i.ke()
                        }
                    }, {
                        key: "Xe",
                        value: function(e, t, n, r) {
                            var i = new Ui(e, Ee.empty(), t, n);
                            return r ? i.ke() : i
                        }
                    }, {
                        key: "Ye",
                        value: function(e) {
                            return new Ui(e, Ee.empty(), Qi, Qi)
                        }
                    }, {
                        key: "getFieldIndex",
                        value: function(e, t) {
                            var n = new Gi(t),
                                r = null != t.collectionGroup ? t.collectionGroup : t.path.lastSegment();
                            return this.getFieldIndexes(e, r).next((function(e) {
                                var t = e.filter((function(e) {
                                    return n.$e(e)
                                }));
                                return t.sort((function(e, t) {
                                    return t.fields.length - e.fields.length
                                })), t.length > 0 ? t[0] : null
                            }))
                        }
                    }, {
                        key: "Ze",
                        value: function(e, t) {
                            var n, r = new qi,
                                i = w(He(e));
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var a = n.value,
                                        u = t.data.field(a.fieldPath);
                                    if (null == u) return null;
                                    var o = r.Ne(a.kind);
                                    Ri.fe.Zt(u, o)
                                }
                            } catch (s) {
                                i.e(s)
                            } finally {
                                i.f()
                            }
                            return r.Se()
                        }
                    }, {
                        key: "He",
                        value: function(e) {
                            var t = new qi;
                            return Ri.fe.Zt(e, t.Ne(0)), t.Se()
                        }
                    }, {
                        key: "We",
                        value: function(e, t, n) {
                            if (null === n) return [];
                            var r = [];
                            r.push(new qi);
                            var i, a = 0,
                                u = w(He(e));
                            try {
                                for (u.s(); !(i = u.n()).done;) {
                                    var o, s = i.value,
                                        c = n[a++],
                                        l = w(r);
                                    try {
                                        for (l.s(); !(o = l.n()).done;) {
                                            var f = o.value;
                                            if (this.tn(t, s.fieldPath) && Le(c)) r = this.en(r, s, c);
                                            else {
                                                var h = f.Ne(s.kind);
                                                Ri.fe.Zt(c, h)
                                            }
                                        }
                                    } catch (d) {
                                        l.e(d)
                                    } finally {
                                        l.f()
                                    }
                                }
                            } catch (d) {
                                u.e(d)
                            } finally {
                                u.f()
                            }
                            return this.nn(r)
                        }
                    }, {
                        key: "je",
                        value: function(e, t, n) {
                            return null == n ? null : this.We(e, t, n.position)
                        }
                    }, {
                        key: "nn",
                        value: function(e) {
                            for (var t = [], n = 0; n < e.length; ++n) t[n] = e[n].Se();
                            return t
                        }
                    }, {
                        key: "en",
                        value: function(e, t, n) {
                            var r, i = (0, l.Z)(e),
                                a = [],
                                u = w(n.arrayValue.values || []);
                            try {
                                for (u.s(); !(r = u.n()).done;) {
                                    var o, s = r.value,
                                        c = w(i);
                                    try {
                                        for (c.s(); !(o = c.n()).done;) {
                                            var f = o.value,
                                                h = new qi;
                                            h.seed(f.Se()), Ri.fe.Zt(s, h.Ne(t.kind)), a.push(h)
                                        }
                                    } catch (d) {
                                        c.e(d)
                                    } finally {
                                        c.f()
                                    }
                                }
                            } catch (d) {
                                u.e(d)
                            } finally {
                                u.f()
                            }
                            return a
                        }
                    }, {
                        key: "tn",
                        value: function(e, t) {
                            return !!e.filters.find((function(e) {
                                return e instanceof st && e.field.isEqual(t) && ("in" === e.op || "not-in" === e.op)
                            }))
                        }
                    }, {
                        key: "getFieldIndexes",
                        value: function(e, t) {
                            var n = this,
                                r = Ji(e),
                                i = $i(e);
                            return (t ? r.qt("collectionGroupIndex", IDBKeyRange.bound(t, t)) : r.qt()).next((function(e) {
                                var t = [];
                                return ni.forEach(e, (function(e) {
                                    return i.get([e.indexId, n.uid]).next((function(n) {
                                        t.push(function(e, t) {
                                            var n = t ? new Je(t.sequenceNumber, new et(xi(t.readTime), new Ee(Cr(t.documentKey)), t.largestBatchId)) : Je.empty(),
                                                r = e.fields.map((function(e) {
                                                    var t = (0, a.Z)(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return new Ye(se.fromServerFormat(n), r)
                                                }));
                                            return new Qe(e.indexId, e.collectionGroup, r, n)
                                        }(e, n))
                                    }))
                                })).next((function() {
                                    return t
                                }))
                            }))
                        }
                    }, {
                        key: "getNextCollectionGroupToUpdate",
                        value: function(e) {
                            return this.getFieldIndexes(e).next((function(e) {
                                return 0 === e.length ? null : (e.sort((function(e, t) {
                                    var n = e.indexState.sequenceNumber - t.indexState.sequenceNumber;
                                    return 0 !== n ? n : J(e.collectionGroup, t.collectionGroup)
                                })), e[0].collectionGroup)
                            }))
                        }
                    }, {
                        key: "updateCollectionGroup",
                        value: function(e, t, n) {
                            var r = this,
                                i = Ji(e),
                                a = $i(e);
                            return this.sn(e).next((function(e) {
                                return i.qt("collectionGroupIndex", IDBKeyRange.bound(t, t)).next((function(t) {
                                    return ni.forEach(t, (function(t) {
                                        return a.put(function(e, t, n, r) {
                                            return {
                                                indexId: e,
                                                uid: t.uid || "",
                                                sequenceNumber: n,
                                                readTime: bi(r.readTime),
                                                documentKey: Ar(r.documentKey.path),
                                                largestBatchId: r.largestBatchId
                                            }
                                        }(t.indexId, r.user, e, n))
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "updateIndexEntries",
                        value: function(e, t) {
                            var n = this,
                                r = new Map;
                            return ni.forEach(t, (function(t, i) {
                                var a = r.get(t.collectionGroup);
                                return (a ? ni.resolve(a) : n.getFieldIndexes(e, t.collectionGroup)).next((function(a) {
                                    return r.set(t.collectionGroup, a), ni.forEach(a, (function(r) {
                                        return n.rn(e, t, r).next((function(t) {
                                            var a = n.on(i, r);
                                            return t.isEqual(a) ? ni.resolve() : n.un(e, i, t, a)
                                        }))
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "an",
                        value: function(e, t, n) {
                            return Yi(e).put({
                                indexId: n.indexId,
                                uid: this.uid,
                                arrayValue: n.arrayValue,
                                directionalValue: n.directionalValue,
                                documentKey: Ar(t.key.path)
                            })
                        }
                    }, {
                        key: "cn",
                        value: function(e, t, n) {
                            return Yi(e).delete([n.indexId, this.uid, n.arrayValue, n.directionalValue, Ar(t.key.path)])
                        }
                    }, {
                        key: "rn",
                        value: function(e, t, n) {
                            var r = Yi(e),
                                i = new An(Bi);
                            return r.Wt({
                                index: "documentKeyIndex",
                                range: IDBKeyRange.only([n.indexId, this.uid, Ar(t.path)])
                            }, (function(e, r) {
                                i = i.add(new Ui(n.indexId, t, r.arrayValue, r.directionalValue))
                            })).next((function() {
                                return i
                            }))
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            var n = new An(Bi),
                                r = this.Ze(t, e);
                            if (null == r) return n;
                            var i = We(t);
                            if (null != i) {
                                var a = e.data.field(i.fieldPath);
                                if (Le(a)) {
                                    var u, o = w(a.arrayValue.values || []);
                                    try {
                                        for (o.s(); !(u = o.n()).done;) {
                                            var s = u.value;
                                            n = n.add(new Ui(t.indexId, e.key, this.He(s), r))
                                        }
                                    } catch (c) {
                                        o.e(c)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } else n = n.add(new Ui(t.indexId, e.key, Qi, r));
                            return n
                        }
                    }, {
                        key: "un",
                        value: function(e, t, n, r) {
                            var i = this;
                            N("IndexedDbIndexManager", "Updating index entries for document '%s'", t.key);
                            var a = [];
                            return function(e, t, n, r, i) {
                                for (var a = e.getIterator(), u = t.getIterator(), o = Dn(a), s = Dn(u); o || s;) {
                                    var c = !1,
                                        l = !1;
                                    if (o && s) {
                                        var f = n(o, s);
                                        f < 0 ? l = !0 : f > 0 && (c = !0)
                                    } else null != o ? l = !0 : c = !0;
                                    c ? (r(s), s = Dn(u)) : l ? (i(o), o = Dn(a)) : (o = Dn(a), s = Dn(u))
                                }
                            }(n, r, Bi, (function(n) {
                                a.push(i.an(e, t, n))
                            }), (function(n) {
                                a.push(i.cn(e, t, n))
                            })), ni.waitFor(a)
                        }
                    }, {
                        key: "sn",
                        value: function(e) {
                            var t = 1;
                            return $i(e).Wt({
                                index: "sequenceNumberIndex",
                                reverse: !0,
                                range: IDBKeyRange.upperBound([this.uid, Number.MAX_SAFE_INTEGER])
                            }, (function(e, n, r) {
                                r.done(), t = n.sequenceNumber + 1
                            })).next((function() {
                                return t
                            }))
                        }
                    }, {
                        key: "createRange",
                        value: function(e, t, n) {
                            n = n.sort((function(e, t) {
                                return Bi(e, t)
                            })).filter((function(e, t, n) {
                                return !t || 0 !== Bi(e, n[t - 1])
                            }));
                            var r = [];
                            r.push(e);
                            var i, a = w(n);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    var u = i.value,
                                        o = Bi(u, e),
                                        s = Bi(u, t);
                                    if (0 === o) r[0] = e.ke();
                                    else if (o > 0 && s < 0) r.push(u), r.push(u.ke());
                                    else if (s > 0) break
                                }
                            } catch (f) {
                                a.e(f)
                            } finally {
                                a.f()
                            }
                            r.push(t);
                            for (var c = [], l = 0; l < r.length; l += 2) c.push(IDBKeyRange.bound([r[l].indexId, this.uid, r[l].arrayValue, r[l].directionalValue, ""], [r[l + 1].indexId, this.uid, r[l + 1].arrayValue, r[l + 1].directionalValue, ""]));
                            return c
                        }
                    }]), e
                }();

            function Hi(e) {
                return di(e, "collectionParents")
            }

            function Yi(e) {
                return di(e, "indexEntries")
            }

            function Ji(e) {
                return di(e, "indexConfiguration")
            }

            function $i(e) {
                return di(e, "indexState")
            }
            var Xi = {
                    didRun: !1,
                    sequenceNumbersCollected: 0,
                    targetsRemoved: 0,
                    documentsRemoved: 0
                },
                ea = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.cacheSizeCollectionThreshold = t, this.percentileToCollect = n, this.maximumSequenceNumbersToCollect = r
                    }
                    return (0, h.Z)(e, null, [{
                        key: "withCacheSize",
                        value: function(t) {
                            return new e(t, e.DEFAULT_COLLECTION_PERCENTILE, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                        }
                    }]), e
                }();

            function ta(e, t, n) {
                var r = e.store("mutations"),
                    i = e.store("documentMutations"),
                    a = [],
                    u = IDBKeyRange.only(n.batchId),
                    o = 0,
                    s = r.Wt({
                        range: u
                    }, (function(e, t, n) {
                        return o++, n.delete()
                    }));
                a.push(s.next((function() {
                    R(1 === o)
                })));
                var c, l = [],
                    f = w(n.mutations);
                try {
                    for (f.s(); !(c = f.n()).done;) {
                        var h = c.value,
                            d = Rr(t, h.key.path, n.batchId);
                        a.push(i.delete(d)), l.push(h.key)
                    }
                } catch (v) {
                    f.e(v)
                } finally {
                    f.f()
                }
                return ni.waitFor(a).next((function() {
                    return l
                }))
            }

            function na(e) {
                if (!e) return 0;
                var t;
                if (e.document) t = e.document;
                else if (e.unknownDocument) t = e.unknownDocument;
                else {
                    if (!e.noDocument) throw M();
                    t = e.noDocument
                }
                return JSON.stringify(t).length
            }
            ea.DEFAULT_COLLECTION_PERCENTILE = 10, ea.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, ea.DEFAULT = new ea(41943040, ea.DEFAULT_COLLECTION_PERCENTILE, ea.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), ea.DISABLED = new ea(-1, 0, 0);
            var ra = function() {
                function e(t, n, r, i) {
                    (0, f.Z)(this, e), this.userId = t, this.M = n, this.indexManager = r, this.referenceDelegate = i, this.hn = {}
                }
                return (0, h.Z)(e, [{
                    key: "checkEmpty",
                    value: function(e) {
                        var t = !0,
                            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                        return aa(e).Wt({
                            index: "userMutationsIndex",
                            range: n
                        }, (function(e, n, r) {
                            t = !1, r.done()
                        })).next((function() {
                            return t
                        }))
                    }
                }, {
                    key: "addMutationBatch",
                    value: function(e, t, n, r) {
                        var i = this,
                            a = ua(e),
                            u = aa(e);
                        return u.add({}).next((function(o) {
                            R("number" == typeof o);
                            var s, c = new vi(o, t, n, r),
                                l = function(e, t, n) {
                                    var r = n.baseMutations.map((function(t) {
                                            return vr(e.Jt, t)
                                        })),
                                        i = n.mutations.map((function(t) {
                                            return vr(e.Jt, t)
                                        }));
                                    return {
                                        userId: t,
                                        batchId: n.batchId,
                                        localWriteTimeMs: n.localWriteTime.toMillis(),
                                        baseMutations: r,
                                        mutations: i
                                    }
                                }(i.M, i.userId, c),
                                f = [],
                                h = new An((function(e, t) {
                                    return J(e.canonicalString(), t.canonicalString())
                                })),
                                d = w(r);
                            try {
                                for (d.s(); !(s = d.n()).done;) {
                                    var v = s.value,
                                        y = Rr(i.userId, v.key.path, o);
                                    h = h.add(v.key.path.popLast()), f.push(u.put(l)), f.push(a.put(y, Vr))
                                }
                            } catch (p) {
                                d.e(p)
                            } finally {
                                d.f()
                            }
                            return h.forEach((function(t) {
                                f.push(i.indexManager.addToCollectionParentIndex(e, t))
                            })), e.addOnCommittedListener((function() {
                                i.hn[o] = c.keys()
                            })), ni.waitFor(f).next((function() {
                                return c
                            }))
                        }))
                    }
                }, {
                    key: "lookupMutationBatch",
                    value: function(e, t) {
                        var n = this;
                        return aa(e).get(t).next((function(e) {
                            return e ? (R(e.userId === n.userId), Ii(n.M, e)) : null
                        }))
                    }
                }, {
                    key: "ln",
                    value: function(e, t) {
                        var n = this;
                        return this.hn[t] ? ni.resolve(this.hn[t]) : this.lookupMutationBatch(e, t).next((function(e) {
                            if (e) {
                                var r = e.keys();
                                return n.hn[t] = r, r
                            }
                            return null
                        }))
                    }
                }, {
                    key: "getNextMutationBatchAfterBatchId",
                    value: function(e, t) {
                        var n = this,
                            r = t + 1,
                            i = IDBKeyRange.lowerBound([this.userId, r]),
                            a = null;
                        return aa(e).Wt({
                            index: "userMutationsIndex",
                            range: i
                        }, (function(e, t, i) {
                            t.userId === n.userId && (R(t.batchId >= r), a = Ii(n.M, t)), i.done()
                        })).next((function() {
                            return a
                        }))
                    }
                }, {
                    key: "getHighestUnacknowledgedBatchId",
                    value: function(e) {
                        var t = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                            n = -1;
                        return aa(e).Wt({
                            index: "userMutationsIndex",
                            range: t,
                            reverse: !0
                        }, (function(e, t, r) {
                            n = t.batchId, r.done()
                        })).next((function() {
                            return n
                        }))
                    }
                }, {
                    key: "getAllMutationBatches",
                    value: function(e) {
                        var t = this,
                            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                        return aa(e).qt("userMutationsIndex", n).next((function(e) {
                            return e.map((function(e) {
                                return Ii(t.M, e)
                            }))
                        }))
                    }
                }, {
                    key: "getAllMutationBatchesAffectingDocumentKey",
                    value: function(e, t) {
                        var n = this,
                            r = Mr(this.userId, t.path),
                            i = IDBKeyRange.lowerBound(r),
                            u = [];
                        return ua(e).Wt({
                            range: i
                        }, (function(r, i, o) {
                            var s = (0, a.Z)(r, 3),
                                c = s[0],
                                l = s[1],
                                f = s[2],
                                h = Cr(l);
                            if (c === n.userId && t.path.isEqual(h)) return aa(e).get(f).next((function(e) {
                                if (!e) throw M();
                                R(e.userId === n.userId), u.push(Ii(n.M, e))
                            }));
                            o.done()
                        })).next((function() {
                            return u
                        }))
                    }
                }, {
                    key: "getAllMutationBatchesAffectingDocumentKeys",
                    value: function(e, t) {
                        var n = this,
                            r = new An(J),
                            i = [];
                        return t.forEach((function(t) {
                            var u = Mr(n.userId, t.path),
                                o = IDBKeyRange.lowerBound(u),
                                s = ua(e).Wt({
                                    range: o
                                }, (function(e, i, u) {
                                    var o = (0, a.Z)(e, 3),
                                        s = o[0],
                                        c = o[1],
                                        l = o[2],
                                        f = Cr(c);
                                    s === n.userId && t.path.isEqual(f) ? r = r.add(l) : u.done()
                                }));
                            i.push(s)
                        })), ni.waitFor(i).next((function() {
                            return n.fn(e, r)
                        }))
                    }
                }, {
                    key: "getAllMutationBatchesAffectingQuery",
                    value: function(e, t) {
                        var n = this,
                            r = t.path,
                            i = r.length + 1,
                            u = Mr(this.userId, r),
                            o = IDBKeyRange.lowerBound(u),
                            s = new An(J);
                        return ua(e).Wt({
                            range: o
                        }, (function(e, t, u) {
                            var o = (0, a.Z)(e, 3),
                                c = o[0],
                                l = o[1],
                                f = o[2],
                                h = Cr(l);
                            c === n.userId && r.isPrefixOf(h) ? h.length === i && (s = s.add(f)) : u.done()
                        })).next((function() {
                            return n.fn(e, s)
                        }))
                    }
                }, {
                    key: "fn",
                    value: function(e, t) {
                        var n = this,
                            r = [],
                            i = [];
                        return t.forEach((function(t) {
                            i.push(aa(e).get(t).next((function(e) {
                                if (null === e) throw M();
                                R(e.userId === n.userId), r.push(Ii(n.M, e))
                            })))
                        })), ni.waitFor(i).next((function() {
                            return r
                        }))
                    }
                }, {
                    key: "removeMutationBatch",
                    value: function(e, t) {
                        var n = this;
                        return ta(e.Ht, this.userId, t).next((function(r) {
                            return e.addOnCommittedListener((function() {
                                n.dn(t.batchId)
                            })), ni.forEach(r, (function(t) {
                                return n.referenceDelegate.markPotentiallyOrphaned(e, t)
                            }))
                        }))
                    }
                }, {
                    key: "dn",
                    value: function(e) {
                        delete this.hn[e]
                    }
                }, {
                    key: "performConsistencyCheck",
                    value: function(e) {
                        var t = this;
                        return this.checkEmpty(e).next((function(n) {
                            if (!n) return ni.resolve();
                            var r = IDBKeyRange.lowerBound([t.userId]),
                                i = [];
                            return ua(e).Wt({
                                range: r
                            }, (function(e, n, r) {
                                if (e[0] === t.userId) {
                                    var a = Cr(e[1]);
                                    i.push(a)
                                } else r.done()
                            })).next((function() {
                                R(0 === i.length)
                            }))
                        }))
                    }
                }, {
                    key: "containsKey",
                    value: function(e, t) {
                        return ia(e, this.userId, t)
                    }
                }, {
                    key: "_n",
                    value: function(e) {
                        var t = this;
                        return oa(e).get(this.userId).next((function(e) {
                            return e || {
                                userId: t.userId,
                                lastAcknowledgedBatchId: -1,
                                lastStreamToken: ""
                            }
                        }))
                    }
                }], [{
                    key: "Yt",
                    value: function(t, n, r, i) {
                        return R("" !== t.uid), new e(t.isAuthenticated() ? t.uid : "", n, r, i)
                    }
                }]), e
            }();

            function ia(e, t, n) {
                var r = Mr(t, n.path),
                    i = r[1],
                    u = IDBKeyRange.lowerBound(r),
                    o = !1;
                return ua(e).Wt({
                    range: u,
                    jt: !0
                }, (function(e, n, r) {
                    var u = (0, a.Z)(e, 3),
                        s = u[0],
                        c = u[1];
                    u[2];
                    s === t && c === i && (o = !0), r.done()
                })).next((function() {
                    return o
                }))
            }

            function aa(e) {
                return di(e, "mutations")
            }

            function ua(e) {
                return di(e, "documentMutations")
            }

            function oa(e) {
                return di(e, "mutationQueues")
            }
            var sa = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.wn = t
                    }
                    return (0, h.Z)(e, [{
                        key: "next",
                        value: function() {
                            return this.wn += 2, this.wn
                        }
                    }], [{
                        key: "mn",
                        value: function() {
                            return new e(0)
                        }
                    }, {
                        key: "gn",
                        value: function() {
                            return new e(-1)
                        }
                    }]), e
                }(),
                ca = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.referenceDelegate = t, this.M = n
                    }
                    return (0, h.Z)(e, [{
                        key: "allocateTargetId",
                        value: function(e) {
                            var t = this;
                            return this.yn(e).next((function(n) {
                                var r = new sa(n.highestTargetId);
                                return n.highestTargetId = r.next(), t.pn(e, n).next((function() {
                                    return n.highestTargetId
                                }))
                            }))
                        }
                    }, {
                        key: "getLastRemoteSnapshotVersion",
                        value: function(e) {
                            return this.yn(e).next((function(e) {
                                return te.fromTimestamp(new ee(e.lastRemoteSnapshotVersion.seconds, e.lastRemoteSnapshotVersion.nanoseconds))
                            }))
                        }
                    }, {
                        key: "getHighestSequenceNumber",
                        value: function(e) {
                            return this.yn(e).next((function(e) {
                                return e.highestListenSequenceNumber
                            }))
                        }
                    }, {
                        key: "setTargetsMetadata",
                        value: function(e, t, n) {
                            var r = this;
                            return this.yn(e).next((function(i) {
                                return i.highestListenSequenceNumber = t, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), t > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = t), r.pn(e, i)
                            }))
                        }
                    }, {
                        key: "addTargetData",
                        value: function(e, t) {
                            var n = this;
                            return this.In(e, t).next((function() {
                                return n.yn(e).next((function(r) {
                                    return r.targetCount += 1, n.Tn(t, r), n.pn(e, r)
                                }))
                            }))
                        }
                    }, {
                        key: "updateTargetData",
                        value: function(e, t) {
                            return this.In(e, t)
                        }
                    }, {
                        key: "removeTargetData",
                        value: function(e, t) {
                            var n = this;
                            return this.removeMatchingKeysForTargetId(e, t.targetId).next((function() {
                                return la(e).delete(t.targetId)
                            })).next((function() {
                                return n.yn(e)
                            })).next((function(t) {
                                return R(t.targetCount > 0), t.targetCount -= 1, n.pn(e, t)
                            }))
                        }
                    }, {
                        key: "removeTargets",
                        value: function(e, t, n) {
                            var r = this,
                                i = 0,
                                a = [];
                            return la(e).Wt((function(u, o) {
                                var s = Ei(o);
                                s.sequenceNumber <= t && null === n.get(s.targetId) && (i++, a.push(r.removeTargetData(e, s)))
                            })).next((function() {
                                return ni.waitFor(a)
                            })).next((function() {
                                return i
                            }))
                        }
                    }, {
                        key: "forEachTarget",
                        value: function(e, t) {
                            return la(e).Wt((function(e, n) {
                                var r = Ei(n);
                                t(r)
                            }))
                        }
                    }, {
                        key: "yn",
                        value: function(e) {
                            return fa(e).get("targetGlobalKey").next((function(e) {
                                return R(null !== e), e
                            }))
                        }
                    }, {
                        key: "pn",
                        value: function(e, t) {
                            return fa(e).put("targetGlobalKey", t)
                        }
                    }, {
                        key: "In",
                        value: function(e, t) {
                            return la(e).put(Ti(this.M, t))
                        }
                    }, {
                        key: "Tn",
                        value: function(e, t) {
                            var n = !1;
                            return e.targetId > t.highestTargetId && (t.highestTargetId = e.targetId, n = !0), e.sequenceNumber > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = e.sequenceNumber, n = !0), n
                        }
                    }, {
                        key: "getTargetCount",
                        value: function(e) {
                            return this.yn(e).next((function(e) {
                                return e.targetCount
                            }))
                        }
                    }, {
                        key: "getTargetData",
                        value: function(e, t) {
                            var n = it(t),
                                r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
                                i = null;
                            return la(e).Wt({
                                range: r,
                                index: "queryTargetsIndex"
                            }, (function(e, n, r) {
                                var a = Ei(n);
                                at(t, a.target) && (i = a, r.done())
                            })).next((function() {
                                return i
                            }))
                        }
                    }, {
                        key: "addMatchingKeys",
                        value: function(e, t, n) {
                            var r = this,
                                i = [],
                                a = ha(e);
                            return t.forEach((function(t) {
                                var u = Ar(t.path);
                                i.push(a.put({
                                    targetId: n,
                                    path: u
                                })), i.push(r.referenceDelegate.addReference(e, n, t))
                            })), ni.waitFor(i)
                        }
                    }, {
                        key: "removeMatchingKeys",
                        value: function(e, t, n) {
                            var r = this,
                                i = ha(e);
                            return ni.forEach(t, (function(t) {
                                var a = Ar(t.path);
                                return ni.waitFor([i.delete([n, a]), r.referenceDelegate.removeReference(e, n, t)])
                            }))
                        }
                    }, {
                        key: "removeMatchingKeysForTargetId",
                        value: function(e, t) {
                            var n = ha(e),
                                r = IDBKeyRange.bound([t], [t + 1], !1, !0);
                            return n.delete(r)
                        }
                    }, {
                        key: "getMatchingKeysForTargetId",
                        value: function(e, t) {
                            var n = IDBKeyRange.bound([t], [t + 1], !1, !0),
                                r = ha(e),
                                i = Pn();
                            return r.Wt({
                                range: n,
                                jt: !0
                            }, (function(e, t, n) {
                                var r = Cr(e[1]),
                                    a = new Ee(r);
                                i = i.add(a)
                            })).next((function() {
                                return i
                            }))
                        }
                    }, {
                        key: "containsKey",
                        value: function(e, t) {
                            var n = Ar(t.path),
                                r = IDBKeyRange.bound([n], [X(n)], !1, !0),
                                i = 0;
                            return ha(e).Wt({
                                index: "documentTargetsIndex",
                                jt: !0,
                                range: r
                            }, (function(e, t, n) {
                                var r = (0, a.Z)(e, 2),
                                    u = r[0];
                                r[1];
                                0 !== u && (i++, n.done())
                            })).next((function() {
                                return i > 0
                            }))
                        }
                    }, {
                        key: "Et",
                        value: function(e, t) {
                            return la(e).get(t).next((function(e) {
                                return e ? Ei(e) : null
                            }))
                        }
                    }]), e
                }();

            function la(e) {
                return di(e, "targets")
            }

            function fa(e) {
                return di(e, "targetGlobal")
            }

            function ha(e) {
                return di(e, "targetDocuments")
            }

            function da(e) {
                return va.apply(this, arguments)
            }

            function va() {
                return (va = (0, u.Z)(v().mark((function e(t) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.code === F.FAILED_PRECONDITION && t.message === ei) {
                                    e.next = 2;
                                    break
                                }
                                throw t;
                            case 2:
                                N("LocalStore", "Unexpectedly lost primary lease");
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ya(e, t) {
                var n = (0, a.Z)(e, 2),
                    r = n[0],
                    i = n[1],
                    u = (0, a.Z)(t, 2),
                    o = u[0],
                    s = u[1],
                    c = J(r, o);
                return 0 === c ? J(i, s) : c
            }
            var pa = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.En = t, this.buffer = new An(ya), this.An = 0
                    }
                    return (0, h.Z)(e, [{
                        key: "Rn",
                        value: function() {
                            return ++this.An
                        }
                    }, {
                        key: "bn",
                        value: function(e) {
                            var t = [e, this.Rn()];
                            if (this.buffer.size < this.En) this.buffer = this.buffer.add(t);
                            else {
                                var n = this.buffer.last();
                                ya(t, n) < 0 && (this.buffer = this.buffer.delete(n).add(t))
                            }
                        }
                    }, {
                        key: "maxValue",
                        get: function() {
                            return this.buffer.last()[0]
                        }
                    }]), e
                }(),
                ma = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.garbageCollector = t, this.asyncQueue = n, this.Pn = !1, this.Vn = null
                    }
                    return (0, h.Z)(e, [{
                        key: "start",
                        value: function(e) {
                            -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.vn(e)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.Vn && (this.Vn.cancel(), this.Vn = null)
                        }
                    }, {
                        key: "started",
                        get: function() {
                            return null !== this.Vn
                        }
                    }, {
                        key: "vn",
                        value: function(e) {
                            var t = this,
                                n = this.Pn ? 3e5 : 6e4;
                            N("LruGarbageCollector", "Garbage collection scheduled in ".concat(n, "ms")), this.Vn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", n, (0, u.Z)(v().mark((function n() {
                                return v().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return t.Vn = null, t.Pn = !0, n.prev = 1, n.next = 4, e.collectGarbage(t.garbageCollector);
                                        case 4:
                                            n.next = 14;
                                            break;
                                        case 6:
                                            if (n.prev = 6, n.t0 = n.catch(1), !oi(n.t0)) {
                                                n.next = 12;
                                                break
                                            }
                                            N("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n.t0), n.next = 14;
                                            break;
                                        case 12:
                                            return n.next = 14, da(n.t0);
                                        case 14:
                                            return n.next = 16, t.vn(e);
                                        case 16:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [1, 6]
                                ])
                            }))))
                        }
                    }]), e
                }(),
                ga = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.Sn = t, this.params = n
                    }
                    return (0, h.Z)(e, [{
                        key: "calculateTargetCount",
                        value: function(e, t) {
                            return this.Sn.Dn(e).next((function(e) {
                                return Math.floor(t / 100 * e)
                            }))
                        }
                    }, {
                        key: "nthSequenceNumber",
                        value: function(e, t) {
                            var n = this;
                            if (0 === t) return ni.resolve(W.A);
                            var r = new pa(t);
                            return this.Sn.forEachTarget(e, (function(e) {
                                return r.bn(e.sequenceNumber)
                            })).next((function() {
                                return n.Sn.Cn(e, (function(e) {
                                    return r.bn(e)
                                }))
                            })).next((function() {
                                return r.maxValue
                            }))
                        }
                    }, {
                        key: "removeTargets",
                        value: function(e, t, n) {
                            return this.Sn.removeTargets(e, t, n)
                        }
                    }, {
                        key: "removeOrphanedDocuments",
                        value: function(e, t) {
                            return this.Sn.removeOrphanedDocuments(e, t)
                        }
                    }, {
                        key: "collect",
                        value: function(e, t) {
                            var n = this;
                            return -1 === this.params.cacheSizeCollectionThreshold ? (N("LruGarbageCollector", "Garbage collection skipped; disabled"), ni.resolve(Xi)) : this.getCacheSize(e).next((function(r) {
                                return r < n.params.cacheSizeCollectionThreshold ? (N("LruGarbageCollector", "Garbage collection skipped; Cache size ".concat(r, " is lower than threshold ").concat(n.params.cacheSizeCollectionThreshold)), Xi) : n.xn(e, t)
                            }))
                        }
                    }, {
                        key: "getCacheSize",
                        value: function(e) {
                            return this.Sn.getCacheSize(e)
                        }
                    }, {
                        key: "xn",
                        value: function(e, t) {
                            var n, r, i, a, u, o, s, c = this,
                                l = Date.now();
                            return this.calculateTargetCount(e, this.params.percentileToCollect).next((function(t) {
                                return t > c.params.maximumSequenceNumbersToCollect ? (N("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of ".concat(c.params.maximumSequenceNumbersToCollect, " from ").concat(t)), r = c.params.maximumSequenceNumbersToCollect) : r = t, a = Date.now(), c.nthSequenceNumber(e, r)
                            })).next((function(r) {
                                return n = r, u = Date.now(), c.removeTargets(e, n, t)
                            })).next((function(t) {
                                return i = t, o = Date.now(), c.removeOrphanedDocuments(e, n)
                            })).next((function(e) {
                                return s = Date.now(), _() <= m.in.DEBUG && N("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in ".concat(a - l, "ms\n\tDetermined least recently used ").concat(r, " in ") + (u - a) + "ms\n" + "\tRemoved ".concat(i, " targets in ") + (o - u) + "ms\n" + "\tRemoved ".concat(e, " documents in ") + (s - o) + "ms\n" + "Total Duration: ".concat(s - l, "ms")), ni.resolve({
                                    didRun: !0,
                                    sequenceNumbersCollected: r,
                                    targetsRemoved: i,
                                    documentsRemoved: e
                                })
                            }))
                        }
                    }]), e
                }(),
                ka = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.db = t, this.garbageCollector = function(e, t) {
                            return new ga(e, t)
                        }(this, n)
                    }
                    return (0, h.Z)(e, [{
                        key: "Dn",
                        value: function(e) {
                            var t = this.Nn(e);
                            return this.db.getTargetCache().getTargetCount(e).next((function(e) {
                                return t.next((function(t) {
                                    return e + t
                                }))
                            }))
                        }
                    }, {
                        key: "Nn",
                        value: function(e) {
                            var t = 0;
                            return this.Cn(e, (function(e) {
                                t++
                            })).next((function() {
                                return t
                            }))
                        }
                    }, {
                        key: "forEachTarget",
                        value: function(e, t) {
                            return this.db.getTargetCache().forEachTarget(e, t)
                        }
                    }, {
                        key: "Cn",
                        value: function(e, t) {
                            return this.kn(e, (function(e, n) {
                                return t(n)
                            }))
                        }
                    }, {
                        key: "addReference",
                        value: function(e, t, n) {
                            return wa(e, n)
                        }
                    }, {
                        key: "removeReference",
                        value: function(e, t, n) {
                            return wa(e, n)
                        }
                    }, {
                        key: "removeTargets",
                        value: function(e, t, n) {
                            return this.db.getTargetCache().removeTargets(e, t, n)
                        }
                    }, {
                        key: "markPotentiallyOrphaned",
                        value: function(e, t) {
                            return wa(e, t)
                        }
                    }, {
                        key: "Mn",
                        value: function(e, t) {
                            return function(e, t) {
                                var n = !1;
                                return oa(e).zt((function(r) {
                                    return ia(e, r, t).next((function(e) {
                                        return e && (n = !0), ni.resolve(!e)
                                    }))
                                })).next((function() {
                                    return n
                                }))
                            }(e, t)
                        }
                    }, {
                        key: "removeOrphanedDocuments",
                        value: function(e, t) {
                            var n = this,
                                r = this.db.getRemoteDocumentCache().newChangeBuffer(),
                                i = [],
                                a = 0;
                            return this.kn(e, (function(u, o) {
                                if (o <= t) {
                                    var s = n.Mn(e, u).next((function(t) {
                                        if (!t) return a++, r.getEntry(e, u).next((function() {
                                            return r.removeEntry(u, te.min()), ha(e).delete([0, Ar(u.path)])
                                        }))
                                    }));
                                    i.push(s)
                                }
                            })).next((function() {
                                return ni.waitFor(i)
                            })).next((function() {
                                return r.apply(e)
                            })).next((function() {
                                return a
                            }))
                        }
                    }, {
                        key: "removeTarget",
                        value: function(e, t) {
                            var n = t.withSequenceNumber(e.currentSequenceNumber);
                            return this.db.getTargetCache().updateTargetData(e, n)
                        }
                    }, {
                        key: "updateLimboDocument",
                        value: function(e, t) {
                            return wa(e, t)
                        }
                    }, {
                        key: "kn",
                        value: function(e, t) {
                            var n, r = ha(e),
                                i = W.A;
                            return r.Wt({
                                index: "documentTargetsIndex"
                            }, (function(e, r) {
                                var u = (0, a.Z)(e, 2),
                                    o = u[0],
                                    s = (u[1], r.path),
                                    c = r.sequenceNumber;
                                0 === o ? (i !== W.A && t(new Ee(Cr(n)), i), i = c, n = s) : i = W.A
                            })).next((function() {
                                i !== W.A && t(new Ee(Cr(n)), i)
                            }))
                        }
                    }, {
                        key: "getCacheSize",
                        value: function(e) {
                            return this.db.getRemoteDocumentCache().getSize(e)
                        }
                    }]), e
                }();

            function wa(e, t) {
                return ha(e).put(function(e, t) {
                    return {
                        targetId: 0,
                        path: Ar(e.path),
                        sequenceNumber: t
                    }
                }(t, e.currentSequenceNumber))
            }
            var ba = function() {
                    function e() {
                        (0, f.Z)(this, e), this.changes = new En((function(e) {
                            return e.toString()
                        }), (function(e, t) {
                            return e.isEqual(t)
                        })), this.changesApplied = !1
                    }
                    return (0, h.Z)(e, [{
                        key: "addEntry",
                        value: function(e) {
                            this.assertNotApplied(), this.changes.set(e.key, e)
                        }
                    }, {
                        key: "removeEntry",
                        value: function(e, t) {
                            this.assertNotApplied(), this.changes.set(e, ze.newInvalidDocument(e).setReadTime(t))
                        }
                    }, {
                        key: "getEntry",
                        value: function(e, t) {
                            this.assertNotApplied();
                            var n = this.changes.get(t);
                            return void 0 !== n ? ni.resolve(n) : this.getFromCache(e, t)
                        }
                    }, {
                        key: "getEntries",
                        value: function(e, t) {
                            return this.getAllFromCache(e, t)
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e)
                        }
                    }, {
                        key: "assertNotApplied",
                        value: function() {}
                    }]), e
                }(),
                xa = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.M = t
                    }
                    return (0, h.Z)(e, [{
                        key: "setIndexManager",
                        value: function(e) {
                            this.indexManager = e
                        }
                    }, {
                        key: "addEntry",
                        value: function(e, t, n) {
                            return Ta(e).put(n)
                        }
                    }, {
                        key: "removeEntry",
                        value: function(e, t, n) {
                            return Ta(e).delete(function(e, t) {
                                var n = e.path.toArray();
                                return [n.slice(0, n.length - 2), n[n.length - 2], wi(t), n[n.length - 1]]
                            }(t, n))
                        }
                    }, {
                        key: "updateMetadata",
                        value: function(e, t) {
                            var n = this;
                            return this.getMetadata(e).next((function(r) {
                                return r.byteSize += t, n.On(e, r)
                            }))
                        }
                    }, {
                        key: "getEntry",
                        value: function(e, t) {
                            var n = this,
                                r = ze.newInvalidDocument(t);
                            return Ta(e).Wt({
                                index: "documentKeyIndex",
                                range: IDBKeyRange.only(Sa(t))
                            }, (function(e, i) {
                                r = n.Fn(t, i)
                            })).next((function() {
                                return r
                            }))
                        }
                    }, {
                        key: "$n",
                        value: function(e, t) {
                            var n = this,
                                r = {
                                    size: 0,
                                    document: ze.newInvalidDocument(t)
                                };
                            return Ta(e).Wt({
                                index: "documentKeyIndex",
                                range: IDBKeyRange.only(Sa(t))
                            }, (function(e, i) {
                                r = {
                                    document: n.Fn(t, i),
                                    size: na(i)
                                }
                            })).next((function() {
                                return r
                            }))
                        }
                    }, {
                        key: "getEntries",
                        value: function(e, t) {
                            var n = this,
                                r = Zn();
                            return this.Bn(e, t, (function(e, t) {
                                var i = n.Fn(e, t);
                                r = r.insert(e, i)
                            })).next((function() {
                                return r
                            }))
                        }
                    }, {
                        key: "Ln",
                        value: function(e, t) {
                            var n = this,
                                r = Zn(),
                                i = new Tn(Ee.comparator);
                            return this.Bn(e, t, (function(e, t) {
                                var a = n.Fn(e, t);
                                r = r.insert(e, a), i = i.insert(e, na(t))
                            })).next((function() {
                                return {
                                    documents: r,
                                    Un: i
                                }
                            }))
                        }
                    }, {
                        key: "Bn",
                        value: function(e, t, n) {
                            if (t.isEmpty()) return ni.resolve();
                            var r = new An(Aa);
                            t.forEach((function(e) {
                                return r = r.add(e)
                            }));
                            var i = IDBKeyRange.bound(Sa(r.first()), Sa(r.last())),
                                a = r.getIterator(),
                                u = a.getNext();
                            return Ta(e).Wt({
                                index: "documentKeyIndex",
                                range: i
                            }, (function(e, t, r) {
                                for (var i = Ee.fromSegments([].concat((0, l.Z)(t.prefixPath), [t.collectionGroup, t.documentId])); u && Aa(u, i) < 0;) n(u, null), u = a.getNext();
                                u && u.isEqual(i) && (n(u, t), u = a.hasNext() ? a.getNext() : null), u ? r.Ut(Sa(u)) : r.done()
                            })).next((function() {
                                for (; u;) n(u, null), u = a.hasNext() ? a.getNext() : null
                            }))
                        }
                    }, {
                        key: "getAllFromCollection",
                        value: function(e, t, n) {
                            var r = this,
                                i = [t.popLast().toArray(), t.lastSegment(), wi(n.readTime), n.documentKey.path.isEmpty() ? "" : n.documentKey.path.lastSegment()],
                                a = [t.popLast().toArray(), t.lastSegment(), [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], ""];
                            return Ta(e).qt(IDBKeyRange.bound(i, a, !0)).next((function(e) {
                                var t, n = Zn(),
                                    i = w(e);
                                try {
                                    for (i.s(); !(t = i.n()).done;) {
                                        var a = t.value,
                                            u = r.Fn(Ee.fromSegments(a.prefixPath.concat(a.collectionGroup, a.documentId)), a);
                                        n = n.insert(u.key, u)
                                    }
                                } catch (o) {
                                    i.e(o)
                                } finally {
                                    i.f()
                                }
                                return n
                            }))
                        }
                    }, {
                        key: "getAllFromCollectionGroup",
                        value: function(e, t, n, r) {
                            var i = this,
                                a = Zn(),
                                u = _a(t, n),
                                o = _a(t, et.max());
                            return Ta(e).Wt({
                                index: "collectionGroupIndex",
                                range: IDBKeyRange.bound(u, o, !0)
                            }, (function(e, t, n) {
                                var u = i.Fn(Ee.fromSegments(t.prefixPath.concat(t.collectionGroup, t.documentId)), t);
                                (a = a.insert(u.key, u)).size === r && n.done()
                            })).next((function() {
                                return a
                            }))
                        }
                    }, {
                        key: "newChangeBuffer",
                        value: function(e) {
                            return new Ia(this, !!e && e.trackRemovals)
                        }
                    }, {
                        key: "getSize",
                        value: function(e) {
                            return this.getMetadata(e).next((function(e) {
                                return e.byteSize
                            }))
                        }
                    }, {
                        key: "getMetadata",
                        value: function(e) {
                            return Ea(e).get("remoteDocumentGlobalKey").next((function(e) {
                                return R(!!e), e
                            }))
                        }
                    }, {
                        key: "On",
                        value: function(e, t) {
                            return Ea(e).put("remoteDocumentGlobalKey", t)
                        }
                    }, {
                        key: "Fn",
                        value: function(e, t) {
                            if (t) {
                                var n = function(e, t) {
                                    var n;
                                    if (t.document) n = hr(e.Jt, t.document, !!t.hasCommittedMutations);
                                    else if (t.noDocument) {
                                        var r = Ee.fromSegments(t.noDocument.path),
                                            i = xi(t.noDocument.readTime);
                                        n = ze.newNoDocument(r, i), t.hasCommittedMutations && n.setHasCommittedMutations()
                                    } else {
                                        if (!t.unknownDocument) return M();
                                        var a = Ee.fromSegments(t.unknownDocument.path),
                                            u = xi(t.unknownDocument.version);
                                        n = ze.newUnknownDocument(a, u)
                                    }
                                    return t.readTime && n.setReadTime(function(e) {
                                        var t = new ee(e[0], e[1]);
                                        return te.fromTimestamp(t)
                                    }(t.readTime)), n
                                }(this.M, t);
                                if (!n.isNoDocument() || !n.version.isEqual(te.min())) return n
                            }
                            return ze.newInvalidDocument(e)
                        }
                    }]), e
                }(),
                Ia = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this)).qn = e, i.trackRemovals = r, i.Gn = new En((function(e) {
                            return e.toString()
                        }), (function(e, t) {
                            return e.isEqual(t)
                        })), i
                    }
                    return (0, h.Z)(n, [{
                        key: "applyChanges",
                        value: function(e) {
                            var t = this,
                                n = [],
                                r = 0,
                                i = new An((function(e, t) {
                                    return J(e.canonicalString(), t.canonicalString())
                                }));
                            return this.changes.forEach((function(a, u) {
                                var o = t.Gn.get(a);
                                if (n.push(t.qn.removeEntry(e, a, o.readTime)), u.isValidDocument()) {
                                    var s = ki(t.qn.M, u);
                                    i = i.add(a.path.popLast());
                                    var c = na(s);
                                    r += c - o.size, n.push(t.qn.addEntry(e, a, s))
                                } else if (r -= o.size, t.trackRemovals) {
                                    var l = ki(t.qn.M, u.convertToNoDocument(te.min()));
                                    n.push(t.qn.addEntry(e, a, l))
                                }
                            })), i.forEach((function(r) {
                                n.push(t.qn.indexManager.addToCollectionParentIndex(e, r))
                            })), n.push(this.qn.updateMetadata(e, r)), ni.waitFor(n)
                        }
                    }, {
                        key: "getFromCache",
                        value: function(e, t) {
                            var n = this;
                            return this.qn.$n(e, t).next((function(e) {
                                return n.Gn.set(t, {
                                    size: e.size,
                                    readTime: e.document.readTime
                                }), e.document
                            }))
                        }
                    }, {
                        key: "getAllFromCache",
                        value: function(e, t) {
                            var n = this;
                            return this.qn.Ln(e, t).next((function(e) {
                                var t = e.documents;
                                return e.Un.forEach((function(e, r) {
                                    n.Gn.set(e, {
                                        size: r,
                                        readTime: t.get(e).readTime
                                    })
                                })), t
                            }))
                        }
                    }]), n
                }(ba);

            function Ea(e) {
                return di(e, "remoteDocumentGlobal")
            }

            function Ta(e) {
                return di(e, "remoteDocumentsV14")
            }

            function Sa(e) {
                var t = e.path.toArray();
                return [t.slice(0, t.length - 2), t[t.length - 2], t[t.length - 1]]
            }

            function _a(e, t) {
                var n = t.documentKey.path.toArray();
                return [e, wi(t.readTime), n.slice(0, n.length - 2), n.length > 0 ? n[n.length - 1] : ""]
            }

            function Aa(e, t) {
                var n = e.path.length - t.path.length;
                return 0 !== n ? n : Ee.comparator(e, t)
            }
            var Na = function() {
                function e(t) {
                    (0, f.Z)(this, e), this.M = t
                }
                return (0, h.Z)(e, [{
                    key: "kt",
                    value: function(e, t, n, r) {
                        var i = this,
                            a = new ri("createOrUpgrade", t);
                        n < 1 && r >= 1 && (function(e) {
                            e.createObjectStore("owner")
                        }(e), function(e) {
                            e.createObjectStore("mutationQueues", {
                                keyPath: "userId"
                            }), e.createObjectStore("mutations", {
                                keyPath: "batchId",
                                autoIncrement: !0
                            }).createIndex("userMutationsIndex", Zr, {
                                unique: !0
                            }), e.createObjectStore("documentMutations")
                        }(e), Da(e), function(e) {
                            e.createObjectStore("remoteDocuments")
                        }(e));
                        var u = ni.resolve();
                        return n < 3 && r >= 3 && (0 !== n && (function(e) {
                            e.deleteObjectStore("targetDocuments"), e.deleteObjectStore("targets"), e.deleteObjectStore("targetGlobal")
                        }(e), Da(e)), u = u.next((function() {
                            return function(e) {
                                var t = e.store("targetGlobal"),
                                    n = {
                                        highestTargetId: 0,
                                        highestListenSequenceNumber: 0,
                                        lastRemoteSnapshotVersion: te.min().toTimestamp(),
                                        targetCount: 0
                                    };
                                return t.put("targetGlobalKey", n)
                            }(a)
                        }))), n < 4 && r >= 4 && (0 !== n && (u = u.next((function() {
                            return function(e, t) {
                                return t.store("mutations").qt().next((function(n) {
                                    e.deleteObjectStore("mutations"), e.createObjectStore("mutations", {
                                        keyPath: "batchId",
                                        autoIncrement: !0
                                    }).createIndex("userMutationsIndex", Zr, {
                                        unique: !0
                                    });
                                    var r = t.store("mutations"),
                                        i = n.map((function(e) {
                                            return r.put(e)
                                        }));
                                    return ni.waitFor(i)
                                }))
                            }(e, a)
                        }))), u = u.next((function() {
                            ! function(e) {
                                e.createObjectStore("clientMetadata", {
                                    keyPath: "clientId"
                                })
                            }(e)
                        }))), n < 5 && r >= 5 && (u = u.next((function() {
                            return i.Kn(a)
                        }))), n < 6 && r >= 6 && (u = u.next((function() {
                            return function(e) {
                                e.createObjectStore("remoteDocumentGlobal")
                            }(e), i.Qn(a)
                        }))), n < 7 && r >= 7 && (u = u.next((function() {
                            return i.jn(a)
                        }))), n < 8 && r >= 8 && (u = u.next((function() {
                            return i.Wn(e, a)
                        }))), n < 9 && r >= 9 && (u = u.next((function() {
                            ! function(e) {
                                e.objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges")
                            }(e)
                        }))), n < 10 && r >= 10 && (u = u.next((function() {
                            return i.zn(a)
                        }))), n < 11 && r >= 11 && (u = u.next((function() {
                            ! function(e) {
                                e.createObjectStore("bundles", {
                                    keyPath: "bundleId"
                                })
                            }(e),
                            function(e) {
                                e.createObjectStore("namedQueries", {
                                    keyPath: "name"
                                })
                            }(e)
                        }))), n < 12 && r >= 12 && (u = u.next((function() {
                            ! function(e) {
                                var t = e.createObjectStore("documentOverlays", {
                                    keyPath: Qr
                                });
                                t.createIndex("collectionPathOverlayIndex", Wr, {
                                    unique: !1
                                }), t.createIndex("collectionGroupOverlayIndex", Hr, {
                                    unique: !1
                                })
                            }(e)
                        }))), n < 13 && r >= 13 && (u = u.next((function() {
                            return function(e) {
                                var t = e.createObjectStore("remoteDocumentsV14", {
                                    keyPath: Lr
                                });
                                t.createIndex("documentKeyIndex", Fr), t.createIndex("collectionGroupIndex", Pr)
                            }(e)
                        })).next((function() {
                            return i.Hn(e, a)
                        })).next((function() {
                            return e.deleteObjectStore("remoteDocuments")
                        }))), n < 14 && r >= 14 && (u = u.next((function() {
                            ! function(e) {
                                e.createObjectStore("indexConfiguration", {
                                    keyPath: "indexId",
                                    autoIncrement: !0
                                }).createIndex("collectionGroupIndex", "collectionGroup", {
                                    unique: !1
                                }), e.createObjectStore("indexState", {
                                    keyPath: Kr
                                }).createIndex("sequenceNumberIndex", Gr, {
                                    unique: !1
                                }), e.createObjectStore("indexEntries", {
                                    keyPath: jr
                                }).createIndex("documentKeyIndex", zr, {
                                    unique: !1
                                })
                            }(e)
                        }))), u
                    }
                }, {
                    key: "Qn",
                    value: function(e) {
                        var t = 0;
                        return e.store("remoteDocuments").Wt((function(e, n) {
                            t += na(n)
                        })).next((function() {
                            var n = {
                                byteSize: t
                            };
                            return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey", n)
                        }))
                    }
                }, {
                    key: "Kn",
                    value: function(e) {
                        var t = this,
                            n = e.store("mutationQueues"),
                            r = e.store("mutations");
                        return n.qt().next((function(n) {
                            return ni.forEach(n, (function(n) {
                                var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                                return r.qt("userMutationsIndex", i).next((function(r) {
                                    return ni.forEach(r, (function(r) {
                                        R(r.userId === n.userId);
                                        var i = Ii(t.M, r);
                                        return ta(e, n.userId, i).next((function() {}))
                                    }))
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "jn",
                    value: function(e) {
                        var t = e.store("targetDocuments"),
                            n = e.store("remoteDocuments");
                        return e.store("targetGlobal").get("targetGlobalKey").next((function(e) {
                            var r = [];
                            return n.Wt((function(n, i) {
                                var a = new ue(n),
                                    u = function(e) {
                                        return [0, Ar(e)]
                                    }(a);
                                r.push(t.get(u).next((function(n) {
                                    return n ? ni.resolve() : function(n) {
                                        return t.put({
                                            targetId: 0,
                                            path: Ar(n),
                                            sequenceNumber: e.highestListenSequenceNumber
                                        })
                                    }(a)
                                })))
                            })).next((function() {
                                return ni.waitFor(r)
                            }))
                        }))
                    }
                }, {
                    key: "Wn",
                    value: function(e, t) {
                        e.createObjectStore("collectionParents", {
                            keyPath: Br
                        });
                        var n = t.store("collectionParents"),
                            r = new zi,
                            i = function(e) {
                                if (r.add(e)) {
                                    var t = e.lastSegment(),
                                        i = e.popLast();
                                    return n.put({
                                        collectionId: t,
                                        parent: Ar(i)
                                    })
                                }
                            };
                        return t.store("remoteDocuments").Wt({
                            jt: !0
                        }, (function(e, t) {
                            var n = new ue(e);
                            return i(n.popLast())
                        })).next((function() {
                            return t.store("documentMutations").Wt({
                                jt: !0
                            }, (function(e, t) {
                                var n = (0, a.Z)(e, 3),
                                    r = (n[0], n[1]),
                                    u = (n[2], Cr(r));
                                return i(u.popLast())
                            }))
                        }))
                    }
                }, {
                    key: "zn",
                    value: function(e) {
                        var t = this,
                            n = e.store("targets");
                        return n.Wt((function(e, r) {
                            var i = Ei(r),
                                a = Ti(t.M, i);
                            return n.put(a)
                        }))
                    }
                }, {
                    key: "Hn",
                    value: function(e, t) {
                        var n = t.store("remoteDocuments"),
                            r = [];
                        return n.Wt((function(e, n) {
                            var i, a = t.store("remoteDocumentsV14"),
                                u = (i = n, i.document ? new Ee(ue.fromString(i.document.name).popFirst(5)) : i.noDocument ? Ee.fromSegments(i.noDocument.path) : i.unknownDocument ? Ee.fromSegments(i.unknownDocument.path) : M()).path.toArray(),
                                o = {
                                    prefixPath: u.slice(0, u.length - 2),
                                    collectionGroup: u[u.length - 2],
                                    documentId: u[u.length - 1],
                                    readTime: n.readTime || [0, 0],
                                    unknownDocument: n.unknownDocument,
                                    noDocument: n.noDocument,
                                    document: n.document,
                                    hasCommittedMutations: !!n.hasCommittedMutations
                                };
                            r.push(a.put(o))
                        })).next((function() {
                            return ni.waitFor(r)
                        }))
                    }
                }]), e
            }();

            function Da(e) {
                e.createObjectStore("targetDocuments", {
                    keyPath: qr
                }).createIndex("documentTargetsIndex", Ur, {
                    unique: !0
                }), e.createObjectStore("targets", {
                    keyPath: "targetId"
                }).createIndex("queryTargetsIndex", Or, {
                    unique: !0
                }), e.createObjectStore("targetGlobal")
            }
            var Ca = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
                Za = function() {
                    function e(t, n, r, i, a, u, o, s, c, l) {
                        var h = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 13;
                        if ((0, f.Z)(this, e), this.allowTabSynchronization = t, this.persistenceKey = n, this.clientId = r, this.Jn = a, this.window = u, this.document = o, this.Yn = c, this.Xn = l, this.Zn = h, this.ts = null, this.es = !1, this.isPrimary = !1, this.networkEnabled = !0, this.ns = null, this.inForeground = !1, this.ss = null, this.rs = null, this.os = Number.NEGATIVE_INFINITY, this.us = function(e) {
                                return Promise.resolve()
                            }, !e.vt()) throw new P(F.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                        this.referenceDelegate = new ka(this, i), this.cs = n + "main", this.M = new gi(s), this.hs = new ii(this.cs, this.Zn, new Na(this.M)), this.ls = new ca(this.referenceDelegate, this.M), this.fs = function(e) {
                            return new xa(e)
                        }(this.M), this.ds = new Ni, this.window && this.window.localStorage ? this._s = this.window.localStorage : (this._s = null, !1 === l && D("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
                    }
                    var t, n;
                    return (0, h.Z)(e, [{
                        key: "start",
                        value: function() {
                            var e = this;
                            return this.ws().then((function() {
                                if (!e.isPrimary && !e.allowTabSynchronization) throw new P(F.FAILED_PRECONDITION, Ca);
                                return e.gs(), e.ys(), e.ps(), e.runTransaction("getHighestListenSequenceNumber", "readonly", (function(t) {
                                    return e.ls.getHighestSequenceNumber(t)
                                }))
                            })).then((function(t) {
                                e.ts = new W(t, e.Yn)
                            })).then((function() {
                                e.es = !0
                            })).catch((function(t) {
                                return e.hs && e.hs.close(), Promise.reject(t)
                            }))
                        }
                    }, {
                        key: "Is",
                        value: function(e) {
                            var t = this;
                            return this.us = function() {
                                var n = (0, u.Z)(v().mark((function n(r) {
                                    return v().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (!t.started) {
                                                    n.next = 2;
                                                    break
                                                }
                                                return n.abrupt("return", e(r));
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }(), e(this.isPrimary)
                        }
                    }, {
                        key: "setDatabaseDeletedListener",
                        value: function(e) {
                            this.hs.Ot(function() {
                                var t = (0, u.Z)(v().mark((function t(n) {
                                    return v().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (t.t0 = null === n.newVersion, !t.t0) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.next = 4, e();
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }, {
                        key: "setNetworkEnabled",
                        value: function(e) {
                            var t = this;
                            this.networkEnabled !== e && (this.networkEnabled = e, this.Jn.enqueueAndForget((0, u.Z)(v().mark((function e() {
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = t.started, !e.t0) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, t.ws();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))))
                        }
                    }, {
                        key: "ws",
                        value: function() {
                            var e = this;
                            return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(t) {
                                return Ra(t).put({
                                    clientId: e.clientId,
                                    updateTimeMs: Date.now(),
                                    networkEnabled: e.networkEnabled,
                                    inForeground: e.inForeground
                                }).next((function() {
                                    if (e.isPrimary) return e.Ts(t).next((function(t) {
                                        t || (e.isPrimary = !1, e.Jn.enqueueRetryable((function() {
                                            return e.us(!1)
                                        })))
                                    }))
                                })).next((function() {
                                    return e.Es(t)
                                })).next((function(n) {
                                    return e.isPrimary && !n ? e.As(t).next((function() {
                                        return !1
                                    })) : !!n && e.Rs(t).next((function() {
                                        return !0
                                    }))
                                }))
                            })).catch((function(t) {
                                if (oi(t)) return N("IndexedDbPersistence", "Failed to extend owner lease: ", t), e.isPrimary;
                                if (!e.allowTabSynchronization) throw t;
                                return N("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), !1
                            })).then((function(t) {
                                e.isPrimary !== t && e.Jn.enqueueRetryable((function() {
                                    return e.us(t)
                                })), e.isPrimary = t
                            }))
                        }
                    }, {
                        key: "Ts",
                        value: function(e) {
                            var t = this;
                            return Ma(e).get("owner").next((function(e) {
                                return ni.resolve(t.bs(e))
                            }))
                        }
                    }, {
                        key: "Ps",
                        value: function(e) {
                            return Ra(e).delete(this.clientId)
                        }
                    }, {
                        key: "Vs",
                        value: (n = (0, u.Z)(v().mark((function e() {
                            var t, n, r, i, a = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isPrimary || this.vs(this.os, 18e5)) {
                                            e.next = 6;
                                            break
                                        }
                                        return this.os = Date.now(), e.next = 4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
                                            var t = di(e, "clientMetadata");
                                            return t.qt().next((function(e) {
                                                var n = a.Ss(e, 18e5),
                                                    r = e.filter((function(e) {
                                                        return -1 === n.indexOf(e)
                                                    }));
                                                return ni.forEach(r, (function(e) {
                                                    return t.delete(e.clientId)
                                                })).next((function() {
                                                    return r
                                                }))
                                            }))
                                        })).catch((function() {
                                            return []
                                        }));
                                    case 4:
                                        if (t = e.sent, this._s) {
                                            n = w(t);
                                            try {
                                                for (n.s(); !(r = n.n()).done;) i = r.value, this._s.removeItem(this.Ds(i.clientId))
                                            } catch (u) {
                                                n.e(u)
                                            } finally {
                                                n.f()
                                            }
                                        }
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "ps",
                        value: function() {
                            var e = this;
                            this.rs = this.Jn.enqueueAfterDelay("client_metadata_refresh", 4e3, (function() {
                                return e.ws().then((function() {
                                    return e.Vs()
                                })).then((function() {
                                    return e.ps()
                                }))
                            }))
                        }
                    }, {
                        key: "bs",
                        value: function(e) {
                            return !!e && e.ownerId === this.clientId
                        }
                    }, {
                        key: "Es",
                        value: function(e) {
                            var t = this;
                            return this.Xn ? ni.resolve(!0) : Ma(e).get("owner").next((function(n) {
                                if (null !== n && t.vs(n.leaseTimestampMs, 5e3) && !t.Cs(n.ownerId)) {
                                    if (t.bs(n) && t.networkEnabled) return !0;
                                    if (!t.bs(n)) {
                                        if (!n.allowTabSynchronization) throw new P(F.FAILED_PRECONDITION, Ca);
                                        return !1
                                    }
                                }
                                return !(!t.networkEnabled || !t.inForeground) || Ra(e).qt().next((function(e) {
                                    return void 0 === t.Ss(e, 5e3).find((function(e) {
                                        if (t.clientId !== e.clientId) {
                                            var n = !t.networkEnabled && e.networkEnabled,
                                                r = !t.inForeground && e.inForeground,
                                                i = t.networkEnabled === e.networkEnabled;
                                            if (n || r && i) return !0
                                        }
                                        return !1
                                    }))
                                }))
                            })).next((function(e) {
                                return t.isPrimary !== e && N("IndexedDbPersistence", "Client ".concat(e ? "is" : "is not", " eligible for a primary lease.")), e
                            }))
                        }
                    }, {
                        key: "shutdown",
                        value: (t = (0, u.Z)(v().mark((function e() {
                            var t = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.es = !1, this.xs(), this.rs && (this.rs.cancel(), this.rs = null), this.Ns(), this.ks(), e.next = 7, this.hs.runTransaction("shutdown", "readwrite", ["owner", "clientMetadata"], (function(e) {
                                            var n = new hi(e, W.A);
                                            return t.As(n).next((function() {
                                                return t.Ps(n)
                                            }))
                                        }));
                                    case 7:
                                        this.hs.close(), this.Ms();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "Ss",
                        value: function(e, t) {
                            var n = this;
                            return e.filter((function(e) {
                                return n.vs(e.updateTimeMs, t) && !n.Cs(e.clientId)
                            }))
                        }
                    }, {
                        key: "Os",
                        value: function() {
                            var e = this;
                            return this.runTransaction("getActiveClients", "readonly", (function(t) {
                                return Ra(t).qt().next((function(t) {
                                    return e.Ss(t, 18e5).map((function(e) {
                                        return e.clientId
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "started",
                        get: function() {
                            return this.es
                        }
                    }, {
                        key: "getMutationQueue",
                        value: function(e, t) {
                            return ra.Yt(e, this.M, t, this.referenceDelegate)
                        }
                    }, {
                        key: "getTargetCache",
                        value: function() {
                            return this.ls
                        }
                    }, {
                        key: "getRemoteDocumentCache",
                        value: function() {
                            return this.fs
                        }
                    }, {
                        key: "getIndexManager",
                        value: function(e) {
                            return new Wi(e)
                        }
                    }, {
                        key: "getDocumentOverlayCache",
                        value: function(e) {
                            return Zi.Yt(this.M, e)
                        }
                    }, {
                        key: "getBundleCache",
                        value: function() {
                            return this.ds
                        }
                    }, {
                        key: "runTransaction",
                        value: function(e, t, n) {
                            var r = this;
                            N("IndexedDbPersistence", "Starting transaction:", e);
                            var i, a, u = "readonly" === t ? "readonly" : "readwrite",
                                o = 14 === (i = this.Zn) ? Xr : 13 === i ? $r : 12 === i ? Jr : 11 === i ? Yr : void M();
                            return this.hs.runTransaction(e, u, o, (function(i) {
                                return a = new hi(i, r.ts ? r.ts.next() : W.A), "readwrite-primary" === t ? r.Ts(a).next((function(e) {
                                    return !!e || r.Es(a)
                                })).next((function(t) {
                                    if (!t) throw D("Failed to obtain primary lease for action '".concat(e, "'.")), r.isPrimary = !1, r.Jn.enqueueRetryable((function() {
                                        return r.us(!1)
                                    })), new P(F.FAILED_PRECONDITION, ei);
                                    return n(a)
                                })).next((function(e) {
                                    return r.Rs(a).next((function() {
                                        return e
                                    }))
                                })) : r.Fs(a).next((function() {
                                    return n(a)
                                }))
                            })).then((function(e) {
                                return a.raiseOnCommittedEvent(), e
                            }))
                        }
                    }, {
                        key: "Fs",
                        value: function(e) {
                            var t = this;
                            return Ma(e).get("owner").next((function(e) {
                                if (null !== e && t.vs(e.leaseTimestampMs, 5e3) && !t.Cs(e.ownerId) && !t.bs(e) && !(t.Xn || t.allowTabSynchronization && e.allowTabSynchronization)) throw new P(F.FAILED_PRECONDITION, Ca)
                            }))
                        }
                    }, {
                        key: "Rs",
                        value: function(e) {
                            var t = {
                                ownerId: this.clientId,
                                allowTabSynchronization: this.allowTabSynchronization,
                                leaseTimestampMs: Date.now()
                            };
                            return Ma(e).put("owner", t)
                        }
                    }, {
                        key: "As",
                        value: function(e) {
                            var t = this,
                                n = Ma(e);
                            return n.get("owner").next((function(e) {
                                return t.bs(e) ? (N("IndexedDbPersistence", "Releasing primary lease."), n.delete("owner")) : ni.resolve()
                            }))
                        }
                    }, {
                        key: "vs",
                        value: function(e, t) {
                            var n = Date.now();
                            return !(e < n - t || e > n && (D("Detected an update time that is in the future: ".concat(e, " > ").concat(n)), 1))
                        }
                    }, {
                        key: "gs",
                        value: function() {
                            var e = this;
                            null !== this.document && "function" == typeof this.document.addEventListener && (this.ss = function() {
                                e.Jn.enqueueAndForget((function() {
                                    return e.inForeground = "visible" === e.document.visibilityState, e.ws()
                                }))
                            }, this.document.addEventListener("visibilitychange", this.ss), this.inForeground = "visible" === this.document.visibilityState)
                        }
                    }, {
                        key: "Ns",
                        value: function() {
                            this.ss && (this.document.removeEventListener("visibilitychange", this.ss), this.ss = null)
                        }
                    }, {
                        key: "ys",
                        value: function() {
                            var e, t = this;
                            "function" == typeof(null === (e = this.window) || void 0 === e ? void 0 : e.addEventListener) && (this.ns = function() {
                                t.xs(), (0, g.G6)() && navigator.appVersion.match(/Version\/1[45]/) && t.Jn.enterRestrictedMode(!0), t.Jn.enqueueAndForget((function() {
                                    return t.shutdown()
                                }))
                            }, this.window.addEventListener("pagehide", this.ns))
                        }
                    }, {
                        key: "ks",
                        value: function() {
                            this.ns && (this.window.removeEventListener("pagehide", this.ns), this.ns = null)
                        }
                    }, {
                        key: "Cs",
                        value: function(e) {
                            var t;
                            try {
                                var n = null !== (null === (t = this._s) || void 0 === t ? void 0 : t.getItem(this.Ds(e)));
                                return N("IndexedDbPersistence", "Client '".concat(e, "' ").concat(n ? "is" : "is not", " zombied in LocalStorage")), n
                            } catch (e) {
                                return D("IndexedDbPersistence", "Failed to get zombied client id.", e), !1
                            }
                        }
                    }, {
                        key: "xs",
                        value: function() {
                            if (this._s) try {
                                this._s.setItem(this.Ds(this.clientId), String(Date.now()))
                            } catch (e) {
                                D("Failed to set zombie client id.", e)
                            }
                        }
                    }, {
                        key: "Ms",
                        value: function() {
                            if (this._s) try {
                                this._s.removeItem(this.Ds(this.clientId))
                            } catch (e) {}
                        }
                    }, {
                        key: "Ds",
                        value: function(e) {
                            return "firestore_zombie_".concat(this.persistenceKey, "_").concat(e)
                        }
                    }], [{
                        key: "vt",
                        value: function() {
                            return ii.vt()
                        }
                    }]), e
                }();

            function Ma(e) {
                return di(e, "owner")
            }

            function Ra(e) {
                return di(e, "clientMetadata")
            }

            function Va(e, t) {
                var n = e.projectId;
                return e.isDefaultDatabase || (n += "." + e.database), "firestore/" + t + "/" + n + "/"
            }
            var La = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.fs = t, this.$s = n, this.indexManager = r
                    }
                    return (0, h.Z)(e, [{
                        key: "Bs",
                        value: function(e, t) {
                            var n = this;
                            return this.$s.getAllMutationBatchesAffectingDocumentKey(e, t).next((function(r) {
                                return n.Ls(e, t, r)
                            }))
                        }
                    }, {
                        key: "Ls",
                        value: function(e, t, n) {
                            return this.fs.getEntry(e, t).next((function(e) {
                                var t, r = w(n);
                                try {
                                    for (r.s(); !(t = r.n()).done;) {
                                        t.value.applyToLocalView(e)
                                    }
                                } catch (i) {
                                    r.e(i)
                                } finally {
                                    r.f()
                                }
                                return e
                            }))
                        }
                    }, {
                        key: "Us",
                        value: function(e, t) {
                            e.forEach((function(e, n) {
                                var r, i = w(t);
                                try {
                                    for (i.s(); !(r = i.n()).done;) {
                                        r.value.applyToLocalView(n)
                                    }
                                } catch (a) {
                                    i.e(a)
                                } finally {
                                    i.f()
                                }
                            }))
                        }
                    }, {
                        key: "qs",
                        value: function(e, t) {
                            var n = this;
                            return this.fs.getEntries(e, t).next((function(t) {
                                return n.Gs(e, t).next((function() {
                                    return t
                                }))
                            }))
                        }
                    }, {
                        key: "Gs",
                        value: function(e, t) {
                            var n = this;
                            return this.$s.getAllMutationBatchesAffectingDocumentKeys(e, t).next((function(e) {
                                return n.Us(t, e)
                            }))
                        }
                    }, {
                        key: "Ks",
                        value: function(e, t, n) {
                            return function(e) {
                                return Ee.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
                            }(t) ? this.Qs(e, t.path) : Nt(t) ? this.js(e, t, n) : this.Ws(e, t, n)
                        }
                    }, {
                        key: "Qs",
                        value: function(e, t) {
                            return this.Bs(e, new Ee(t)).next((function(e) {
                                var t = Rn();
                                return e.isFoundDocument() && (t = t.insert(e.key, e)), t
                            }))
                        }
                    }, {
                        key: "js",
                        value: function(e, t, n) {
                            var r = this,
                                i = t.collectionGroup,
                                a = Rn();
                            return this.indexManager.getCollectionParents(e, i).next((function(u) {
                                return ni.forEach(u, (function(u) {
                                    var o = function(e, t) {
                                        return new xt(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt)
                                    }(t, u.child(i));
                                    return r.Ws(e, o, n).next((function(e) {
                                        e.forEach((function(e, t) {
                                            a = a.insert(e, t)
                                        }))
                                    }))
                                })).next((function() {
                                    return a
                                }))
                            }))
                        }
                    }, {
                        key: "Ws",
                        value: function(e, t, n) {
                            var r, i = this;
                            return this.fs.getAllFromCollection(e, t.path, n).next((function(n) {
                                return r = n, i.$s.getAllMutationBatchesAffectingQuery(e, t)
                            })).next((function(e) {
                                var t, n = w(e);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var i, a = t.value,
                                            u = w(a.mutations);
                                        try {
                                            for (u.s(); !(i = u.n()).done;) {
                                                var o = i.value,
                                                    s = o.key,
                                                    c = r.get(s);
                                                null == c && (c = ze.newInvalidDocument(s), r = r.insert(s, c)), sn(o, c, a.localWriteTime), c.isFoundDocument() || (r = r.remove(s))
                                            }
                                        } catch (l) {
                                            u.e(l)
                                        } finally {
                                            u.f()
                                        }
                                    }
                                } catch (l) {
                                    n.e(l)
                                } finally {
                                    n.f()
                                }
                            })).next((function() {
                                return r.forEach((function(e, n) {
                                    Lt(t, n) || (r = r.remove(e))
                                })), r
                            }))
                        }
                    }]), e
                }(),
                Fa = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.targetId = t, this.fromCache = n, this.zs = r, this.Hs = i
                    }
                    return (0, h.Z)(e, null, [{
                        key: "Js",
                        value: function(t, n) {
                            var r, i = Pn(),
                                a = Pn(),
                                u = w(n.docChanges);
                            try {
                                for (u.s(); !(r = u.n()).done;) {
                                    var o = r.value;
                                    switch (o.type) {
                                        case 0:
                                            i = i.add(o.doc.key);
                                            break;
                                        case 1:
                                            a = a.add(o.doc.key)
                                    }
                                }
                            } catch (s) {
                                u.e(s)
                            } finally {
                                u.f()
                            }
                            return new e(t, n.fromCache, i, a)
                        }
                    }]), e
                }(),
                Pa = function() {
                    function e() {
                        (0, f.Z)(this, e)
                    }
                    return (0, h.Z)(e, [{
                        key: "Ys",
                        value: function(e) {
                            this.Xs = e
                        }
                    }, {
                        key: "Ks",
                        value: function(e, t, n, r) {
                            var i = this;
                            return function(e) {
                                return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField())
                            }(t) || n.isEqual(te.min()) ? this.Zs(e, t) : this.Xs.qs(e, r).next((function(a) {
                                var u = i.ti(t, a);
                                return (Tt(t) || St(t)) && i.ei(t.limitType, u, r, n) ? i.Zs(e, t) : (_() <= m.in.DEBUG && N("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), Vt(t)), i.Xs.Ks(e, t, $e(n, -1)).next((function(e) {
                                    return u.forEach((function(t) {
                                        e = e.insert(t.key, t)
                                    })), e
                                })))
                            }))
                        }
                    }, {
                        key: "ti",
                        value: function(e, t) {
                            var n = new An(Pt(e));
                            return t.forEach((function(t, r) {
                                Lt(e, r) && (n = n.add(r))
                            })), n
                        }
                    }, {
                        key: "ei",
                        value: function(e, t, n, r) {
                            if (n.size !== t.size) return !0;
                            var i = "F" === e ? t.last() : t.first();
                            return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0)
                        }
                    }, {
                        key: "Zs",
                        value: function(e, t) {
                            return _() <= m.in.DEBUG && N("QueryEngine", "Using full collection scan to execute query:", Vt(t)), this.Xs.Ks(e, t, et.min())
                        }
                    }]), e
                }(),
                Oa = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.persistence = t, this.ni = n, this.M = i, this.si = new Tn(J), this.ii = new En((function(e) {
                            return it(e)
                        }), at), this.ri = new Map, this.oi = t.getRemoteDocumentCache(), this.ls = t.getTargetCache(), this.ds = t.getBundleCache(), this.ui(r)
                    }
                    return (0, h.Z)(e, [{
                        key: "ui",
                        value: function(e) {
                            this.indexManager = this.persistence.getIndexManager(e), this.$s = this.persistence.getMutationQueue(e, this.indexManager), this.ai = new La(this.oi, this.$s, this.indexManager), this.oi.setIndexManager(this.indexManager), this.ni.Ys(this.ai)
                        }
                    }, {
                        key: "collectGarbage",
                        value: function(e) {
                            var t = this;
                            return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
                                return e.collect(n, t.si)
                            }))
                        }
                    }]), e
                }();

            function qa(e, t, n, r) {
                return new Oa(e, t, n, r)
            }

            function Ua(e, t) {
                return Ba.apply(this, arguments)
            }

            function Ba() {
                return (Ba = (0, u.Z)(v().mark((function e(t, n) {
                    var r;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = L(t), e.next = 3, r.persistence.runTransaction("Handle user change", "readonly", (function(e) {
                                    var t;
                                    return r.$s.getAllMutationBatches(e).next((function(i) {
                                        return t = i, r.ui(n), r.$s.getAllMutationBatches(e)
                                    })).next((function(n) {
                                        var i, a = [],
                                            u = [],
                                            o = Pn(),
                                            s = w(t);
                                        try {
                                            for (s.s(); !(i = s.n()).done;) {
                                                var c = i.value;
                                                a.push(c.batchId);
                                                var l, f = w(c.mutations);
                                                try {
                                                    for (f.s(); !(l = f.n()).done;) {
                                                        var h = l.value;
                                                        o = o.add(h.key)
                                                    }
                                                } catch (k) {
                                                    f.e(k)
                                                } finally {
                                                    f.f()
                                                }
                                            }
                                        } catch (k) {
                                            s.e(k)
                                        } finally {
                                            s.f()
                                        }
                                        var d, v = w(n);
                                        try {
                                            for (v.s(); !(d = v.n()).done;) {
                                                var y = d.value;
                                                u.push(y.batchId);
                                                var p, m = w(y.mutations);
                                                try {
                                                    for (m.s(); !(p = m.n()).done;) {
                                                        var g = p.value;
                                                        o = o.add(g.key)
                                                    }
                                                } catch (k) {
                                                    m.e(k)
                                                } finally {
                                                    m.f()
                                                }
                                            }
                                        } catch (k) {
                                            v.e(k)
                                        } finally {
                                            v.f()
                                        }
                                        return r.ai.qs(e, o).next((function(e) {
                                            return {
                                                ci: e,
                                                removedBatchIds: a,
                                                addedBatchIds: u
                                            }
                                        }))
                                    }))
                                }));
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ka(e, t) {
                var n = L(e);
                return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(e) {
                    var r = t.batch.keys(),
                        i = n.oi.newChangeBuffer({
                            trackRemovals: !0
                        });
                    return function(e, t, n, r) {
                        var i = n.batch,
                            a = i.keys(),
                            u = ni.resolve();
                        return a.forEach((function(e) {
                            u = u.next((function() {
                                return r.getEntry(t, e)
                            })).next((function(t) {
                                var a = n.docVersions.get(e);
                                R(null !== a), t.version.compareTo(a) < 0 && (i.applyToRemoteDocument(t, n), t.isValidDocument() && (t.setReadTime(n.commitVersion), r.addEntry(t)))
                            }))
                        })), u.next((function() {
                            return e.$s.removeMutationBatch(t, i)
                        }))
                    }(n, e, t, i).next((function() {
                        return i.apply(e)
                    })).next((function() {
                        return n.$s.performConsistencyCheck(e)
                    })).next((function() {
                        return n.ai.qs(e, r)
                    }))
                }))
            }

            function Ga(e) {
                var t = L(e);
                return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
                    return t.ls.getLastRemoteSnapshotVersion(e)
                }))
            }

            function ja(e, t) {
                var n = L(e),
                    r = t.snapshotVersion,
                    i = n.si;
                return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(e) {
                    var a = n.oi.newChangeBuffer({
                        trackRemovals: !0
                    });
                    i = n.si;
                    var u = [];
                    t.targetChanges.forEach((function(a, o) {
                        var s = i.get(o);
                        if (s) {
                            u.push(n.ls.removeMatchingKeys(e, a.removedDocuments, o).next((function() {
                                return n.ls.addMatchingKeys(e, a.addedDocuments, o)
                            })));
                            var c = s.withSequenceNumber(e.currentSequenceNumber);
                            t.targetMismatches.has(o) ? c = c.withResumeToken(fe.EMPTY_BYTE_STRING, te.min()).withLastLimboFreeSnapshotVersion(te.min()) : a.resumeToken.approximateByteSize() > 0 && (c = c.withResumeToken(a.resumeToken, r)), i = i.insert(o, c),
                                function(e, t, n) {
                                    return 0 === e.resumeToken.approximateByteSize() || (t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0)
                                }(s, c, a) && u.push(n.ls.updateTargetData(e, c))
                        }
                    }));
                    var o = Zn();
                    if (t.documentUpdates.forEach((function(r) {
                            t.resolvedLimboDocuments.has(r) && u.push(n.persistence.referenceDelegate.updateLimboDocument(e, r))
                        })), u.push(za(e, a, t.documentUpdates).next((function(e) {
                            o = e
                        }))), !r.isEqual(te.min())) {
                        var s = n.ls.getLastRemoteSnapshotVersion(e).next((function(t) {
                            return n.ls.setTargetsMetadata(e, e.currentSequenceNumber, r)
                        }));
                        u.push(s)
                    }
                    return ni.waitFor(u).next((function() {
                        return a.apply(e)
                    })).next((function() {
                        return n.ai.Gs(e, o)
                    })).next((function() {
                        return o
                    }))
                })).then((function(e) {
                    return n.si = i, e
                }))
            }

            function za(e, t, n) {
                var r = Pn();
                return n.forEach((function(e) {
                    return r = r.add(e)
                })), t.getEntries(e, r).next((function(e) {
                    var r = Zn();
                    return n.forEach((function(n, i) {
                        var a = e.get(n);
                        i.isNoDocument() && i.version.isEqual(te.min()) ? (t.removeEntry(n, i.readTime), r = r.insert(n, i)) : !a.isValidDocument() || i.version.compareTo(a.version) > 0 || 0 === i.version.compareTo(a.version) && a.hasPendingWrites ? (t.addEntry(i), r = r.insert(n, i)) : N("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", a.version, " Watch version:", i.version)
                    })), r
                }))
            }

            function Qa(e, t) {
                var n = L(e);
                return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(e) {
                    return void 0 === t && (t = -1), n.$s.getNextMutationBatchAfterBatchId(e, t)
                }))
            }

            function Wa(e, t) {
                var n = L(e);
                return n.persistence.runTransaction("Allocate target", "readwrite", (function(e) {
                    var r;
                    return n.ls.getTargetData(e, t).next((function(i) {
                        return i ? (r = i, ni.resolve(r)) : n.ls.allocateTargetId(e).next((function(i) {
                            return r = new mi(t, i, 0, e.currentSequenceNumber), n.ls.addTargetData(e, r).next((function() {
                                return r
                            }))
                        }))
                    }))
                })).then((function(e) {
                    var r = n.si.get(e.targetId);
                    return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.si = n.si.insert(e.targetId, e), n.ii.set(t, e.targetId)), e
                }))
            }

            function Ha(e, t, n) {
                return Ya.apply(this, arguments)
            }

            function Ya() {
                return (Ya = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, u;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = L(t), a = i.si.get(n), u = r ? "readwrite" : "readwrite-primary", e.prev = 1, e.t0 = r, e.t0) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 6, i.persistence.runTransaction("Release target", u, (function(e) {
                                    return i.persistence.referenceDelegate.removeTarget(e, a)
                                }));
                            case 6:
                                e.next = 13;
                                break;
                            case 8:
                                if (e.prev = 8, e.t1 = e.catch(1), oi(e.t1)) {
                                    e.next = 12;
                                    break
                                }
                                throw e.t1;
                            case 12:
                                N("LocalStore", "Failed to update sequence numbers for target ".concat(n, ": ").concat(e.t1));
                            case 13:
                                i.si = i.si.remove(n), i.ii.delete(a.target);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))).apply(this, arguments)
            }

            function Ja(e, t, n) {
                var r = L(e),
                    i = te.min(),
                    a = Pn();
                return r.persistence.runTransaction("Execute query", "readonly", (function(e) {
                    return function(e, t, n) {
                        var r = L(e),
                            i = r.ii.get(n);
                        return void 0 !== i ? ni.resolve(r.si.get(i)) : r.ls.getTargetData(t, n)
                    }(r, e, Ct(t)).next((function(t) {
                        if (t) return i = t.lastLimboFreeSnapshotVersion, r.ls.getMatchingKeysForTargetId(e, t.targetId).next((function(e) {
                            a = e
                        }))
                    })).next((function() {
                        return r.ni.Ks(e, t, n ? i : te.min(), n ? a : Pn())
                    })).next((function(e) {
                        return eu(r, Ft(t), e), {
                            documents: e,
                            hi: a
                        }
                    }))
                }))
            }

            function $a(e, t) {
                var n = L(e),
                    r = L(n.ls),
                    i = n.si.get(t);
                return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(e) {
                    return r.Et(e, t).next((function(e) {
                        return e ? e.target : null
                    }))
                }))
            }

            function Xa(e, t) {
                var n = L(e),
                    r = n.ri.get(t) || te.min();
                return n.persistence.runTransaction("Get new document changes", "readonly", (function(e) {
                    return n.oi.getAllFromCollectionGroup(e, t, $e(r, -1), Number.MAX_SAFE_INTEGER)
                })).then((function(e) {
                    return eu(n, t, e), e
                }))
            }

            function eu(e, t, n) {
                var r = te.min();
                n.forEach((function(e, t) {
                    t.readTime.compareTo(r) > 0 && (r = t.readTime)
                })), e.ri.set(t, r)
            }

            function tu(e, t, n, r) {
                return nu.apply(this, arguments)
            }

            function nu() {
                return (nu = (0, u.Z)(v().mark((function e(t, n, r, i) {
                    var a, u, o, s, c, l, f, h, d, y;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                a = L(t), u = Pn(), o = Zn(), s = w(r);
                                try {
                                    for (s.s(); !(c = s.n()).done;) l = c.value, f = n.li(l.metadata.name), l.document && (u = u.add(f)), (h = n.fi(l)).setReadTime(n.di(l.metadata.readTime)), o = o.insert(f, h)
                                } catch (v) {
                                    s.e(v)
                                } finally {
                                    s.f()
                                }
                                return d = a.oi.newChangeBuffer({
                                    trackRemovals: !0
                                }), e.next = 7, Wa(a, function(e) {
                                    return Ct(Et(ue.fromString("__bundle__/docs/".concat(e))))
                                }(i));
                            case 7:
                                return y = e.sent, e.abrupt("return", a.persistence.runTransaction("Apply bundle documents", "readwrite", (function(e) {
                                    return za(e, d, o).next((function(t) {
                                        return d.apply(e), t
                                    })).next((function(t) {
                                        return a.ls.removeMatchingKeysForTargetId(e, y.targetId).next((function() {
                                            return a.ls.addMatchingKeys(e, u, y.targetId)
                                        })).next((function() {
                                            return a.ai.Gs(e, t)
                                        })).next((function() {
                                            return t
                                        }))
                                    }))
                                })));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ru(e, t) {
                return iu.apply(this, arguments)
            }

            function iu() {
                return iu = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a, u = arguments;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = u.length > 2 && void 0 !== u[2] ? u[2] : Pn(), e.next = 3, Wa(t, Ct(Si(n.bundledQuery)));
                            case 3:
                                return i = e.sent, a = L(t), e.abrupt("return", a.persistence.runTransaction("Save named query", "readwrite", (function(e) {
                                    var t = nr(n.readTime);
                                    if (i.snapshotVersion.compareTo(t) >= 0) return a.ds.saveNamedQuery(e, n);
                                    var u = i.withResumeToken(fe.EMPTY_BYTE_STRING, t);
                                    return a.si = a.si.insert(u.targetId, u), a.ls.updateTargetData(e, u).next((function() {
                                        return a.ls.removeMatchingKeysForTargetId(e, i.targetId)
                                    })).next((function() {
                                        return a.ls.addMatchingKeys(e, r, i.targetId)
                                    })).next((function() {
                                        return a.ds.saveNamedQuery(e, n)
                                    }))
                                })));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), iu.apply(this, arguments)
            }
            var au = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.M = t, this._i = new Map, this.wi = new Map
                    }
                    return (0, h.Z)(e, [{
                        key: "getBundleMetadata",
                        value: function(e, t) {
                            return ni.resolve(this._i.get(t))
                        }
                    }, {
                        key: "saveBundleMetadata",
                        value: function(e, t) {
                            var n;
                            return this._i.set(t.id, {
                                id: (n = t).id,
                                version: n.version,
                                createTime: nr(n.createTime)
                            }), ni.resolve()
                        }
                    }, {
                        key: "getNamedQuery",
                        value: function(e, t) {
                            return ni.resolve(this.wi.get(t))
                        }
                    }, {
                        key: "saveNamedQuery",
                        value: function(e, t) {
                            return this.wi.set(t.name, function(e) {
                                return {
                                    name: e.name,
                                    query: Si(e.bundledQuery),
                                    readTime: nr(e.readTime)
                                }
                            }(t)), ni.resolve()
                        }
                    }]), e
                }(),
                uu = function() {
                    function e() {
                        (0, f.Z)(this, e), this.overlays = new Tn(Ee.comparator), this.mi = new Map
                    }
                    return (0, h.Z)(e, [{
                        key: "getOverlay",
                        value: function(e, t) {
                            return ni.resolve(this.overlays.get(t))
                        }
                    }, {
                        key: "saveOverlays",
                        value: function(e, t, n) {
                            var r = this;
                            return n.forEach((function(n, i) {
                                r.Xt(e, t, i)
                            })), ni.resolve()
                        }
                    }, {
                        key: "removeOverlaysForBatchId",
                        value: function(e, t, n) {
                            var r = this,
                                i = this.mi.get(n);
                            return void 0 !== i && (i.forEach((function(e) {
                                return r.overlays = r.overlays.remove(e)
                            })), this.mi.delete(n)), ni.resolve()
                        }
                    }, {
                        key: "getOverlaysForCollection",
                        value: function(e, t, n) {
                            for (var r = Vn(), i = t.length + 1, a = new Ee(t.child("")), u = this.overlays.getIteratorFrom(a); u.hasNext();) {
                                var o = u.getNext().value,
                                    s = o.getKey();
                                if (!t.isPrefixOf(s.path)) break;
                                s.path.length === i && o.largestBatchId > n && r.set(o.getKey(), o)
                            }
                            return ni.resolve(r)
                        }
                    }, {
                        key: "getOverlaysForCollectionGroup",
                        value: function(e, t, n, r) {
                            for (var i = new Tn((function(e, t) {
                                    return e - t
                                })), a = this.overlays.getIterator(); a.hasNext();) {
                                var u = a.getNext().value;
                                if (u.getKey().getCollectionGroup() === t && u.largestBatchId > n) {
                                    var o = i.get(u.largestBatchId);
                                    null === o && (o = Vn(), i = i.insert(u.largestBatchId, o)), o.set(u.getKey(), u)
                                }
                            }
                            for (var s = Vn(), c = i.getIterator(); c.hasNext() && (c.getNext().value.forEach((function(e, t) {
                                    return s.set(e, t)
                                })), !(s.size() >= r)););
                            return ni.resolve(s)
                        }
                    }, {
                        key: "Xt",
                        value: function(e, t, n) {
                            if (null !== n) {
                                var r = this.overlays.get(n.key);
                                if (null !== r) {
                                    var i = this.mi.get(r.largestBatchId).delete(n.key);
                                    this.mi.set(r.largestBatchId, i)
                                }
                                this.overlays = this.overlays.insert(n.key, new pi(t, n));
                                var a = this.mi.get(t);
                                void 0 === a && (a = Pn(), this.mi.set(t, a)), this.mi.set(t, a.add(n.key))
                            }
                        }
                    }]), e
                }(),
                ou = function() {
                    function e() {
                        (0, f.Z)(this, e), this.gi = new An(su.yi), this.pi = new An(su.Ii)
                    }
                    return (0, h.Z)(e, [{
                        key: "isEmpty",
                        value: function() {
                            return this.gi.isEmpty()
                        }
                    }, {
                        key: "addReference",
                        value: function(e, t) {
                            var n = new su(e, t);
                            this.gi = this.gi.add(n), this.pi = this.pi.add(n)
                        }
                    }, {
                        key: "Ti",
                        value: function(e, t) {
                            var n = this;
                            e.forEach((function(e) {
                                return n.addReference(e, t)
                            }))
                        }
                    }, {
                        key: "removeReference",
                        value: function(e, t) {
                            this.Ei(new su(e, t))
                        }
                    }, {
                        key: "Ai",
                        value: function(e, t) {
                            var n = this;
                            e.forEach((function(e) {
                                return n.removeReference(e, t)
                            }))
                        }
                    }, {
                        key: "Ri",
                        value: function(e) {
                            var t = this,
                                n = new Ee(new ue([])),
                                r = new su(n, e),
                                i = new su(n, e + 1),
                                a = [];
                            return this.pi.forEachInRange([r, i], (function(e) {
                                t.Ei(e), a.push(e.key)
                            })), a
                        }
                    }, {
                        key: "bi",
                        value: function() {
                            var e = this;
                            this.gi.forEach((function(t) {
                                return e.Ei(t)
                            }))
                        }
                    }, {
                        key: "Ei",
                        value: function(e) {
                            this.gi = this.gi.delete(e), this.pi = this.pi.delete(e)
                        }
                    }, {
                        key: "Pi",
                        value: function(e) {
                            var t = new Ee(new ue([])),
                                n = new su(t, e),
                                r = new su(t, e + 1),
                                i = Pn();
                            return this.pi.forEachInRange([n, r], (function(e) {
                                i = i.add(e.key)
                            })), i
                        }
                    }, {
                        key: "containsKey",
                        value: function(e) {
                            var t = new su(e, 0),
                                n = this.gi.firstAfterOrEqual(t);
                            return null !== n && e.isEqual(n.key)
                        }
                    }]), e
                }(),
                su = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.key = t, this.Vi = n
                    }
                    return (0, h.Z)(e, null, [{
                        key: "yi",
                        value: function(e, t) {
                            return Ee.comparator(e.key, t.key) || J(e.Vi, t.Vi)
                        }
                    }, {
                        key: "Ii",
                        value: function(e, t) {
                            return J(e.Vi, t.Vi) || Ee.comparator(e.key, t.key)
                        }
                    }]), e
                }(),
                cu = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.indexManager = t, this.referenceDelegate = n, this.$s = [], this.vi = 1, this.Si = new An(su.yi)
                    }
                    return (0, h.Z)(e, [{
                        key: "checkEmpty",
                        value: function(e) {
                            return ni.resolve(0 === this.$s.length)
                        }
                    }, {
                        key: "addMutationBatch",
                        value: function(e, t, n, r) {
                            var i = this.vi;
                            this.vi++, this.$s.length > 0 && this.$s[this.$s.length - 1];
                            var a = new vi(i, t, n, r);
                            this.$s.push(a);
                            var u, o = w(r);
                            try {
                                for (o.s(); !(u = o.n()).done;) {
                                    var s = u.value;
                                    this.Si = this.Si.add(new su(s.key, i)), this.indexManager.addToCollectionParentIndex(e, s.key.path.popLast())
                                }
                            } catch (c) {
                                o.e(c)
                            } finally {
                                o.f()
                            }
                            return ni.resolve(a)
                        }
                    }, {
                        key: "lookupMutationBatch",
                        value: function(e, t) {
                            return ni.resolve(this.Di(t))
                        }
                    }, {
                        key: "getNextMutationBatchAfterBatchId",
                        value: function(e, t) {
                            var n = t + 1,
                                r = this.Ci(n),
                                i = r < 0 ? 0 : r;
                            return ni.resolve(this.$s.length > i ? this.$s[i] : null)
                        }
                    }, {
                        key: "getHighestUnacknowledgedBatchId",
                        value: function() {
                            return ni.resolve(0 === this.$s.length ? -1 : this.vi - 1)
                        }
                    }, {
                        key: "getAllMutationBatches",
                        value: function(e) {
                            return ni.resolve(this.$s.slice())
                        }
                    }, {
                        key: "getAllMutationBatchesAffectingDocumentKey",
                        value: function(e, t) {
                            var n = this,
                                r = new su(t, 0),
                                i = new su(t, Number.POSITIVE_INFINITY),
                                a = [];
                            return this.Si.forEachInRange([r, i], (function(e) {
                                var t = n.Di(e.Vi);
                                a.push(t)
                            })), ni.resolve(a)
                        }
                    }, {
                        key: "getAllMutationBatchesAffectingDocumentKeys",
                        value: function(e, t) {
                            var n = this,
                                r = new An(J);
                            return t.forEach((function(e) {
                                var t = new su(e, 0),
                                    i = new su(e, Number.POSITIVE_INFINITY);
                                n.Si.forEachInRange([t, i], (function(e) {
                                    r = r.add(e.Vi)
                                }))
                            })), ni.resolve(this.xi(r))
                        }
                    }, {
                        key: "getAllMutationBatchesAffectingQuery",
                        value: function(e, t) {
                            var n = t.path,
                                r = n.length + 1,
                                i = n;
                            Ee.isDocumentKey(i) || (i = i.child(""));
                            var a = new su(new Ee(i), 0),
                                u = new An(J);
                            return this.Si.forEachWhile((function(e) {
                                var t = e.key.path;
                                return !!n.isPrefixOf(t) && (t.length === r && (u = u.add(e.Vi)), !0)
                            }), a), ni.resolve(this.xi(u))
                        }
                    }, {
                        key: "xi",
                        value: function(e) {
                            var t = this,
                                n = [];
                            return e.forEach((function(e) {
                                var r = t.Di(e);
                                null !== r && n.push(r)
                            })), n
                        }
                    }, {
                        key: "removeMutationBatch",
                        value: function(e, t) {
                            var n = this;
                            R(0 === this.Ni(t.batchId, "removed")), this.$s.shift();
                            var r = this.Si;
                            return ni.forEach(t.mutations, (function(i) {
                                var a = new su(i.key, t.batchId);
                                return r = r.delete(a), n.referenceDelegate.markPotentiallyOrphaned(e, i.key)
                            })).next((function() {
                                n.Si = r
                            }))
                        }
                    }, {
                        key: "dn",
                        value: function(e) {}
                    }, {
                        key: "containsKey",
                        value: function(e, t) {
                            var n = new su(t, 0),
                                r = this.Si.firstAfterOrEqual(n);
                            return ni.resolve(t.isEqual(r && r.key))
                        }
                    }, {
                        key: "performConsistencyCheck",
                        value: function(e) {
                            return this.$s.length, ni.resolve()
                        }
                    }, {
                        key: "Ni",
                        value: function(e, t) {
                            return this.Ci(e)
                        }
                    }, {
                        key: "Ci",
                        value: function(e) {
                            return 0 === this.$s.length ? 0 : e - this.$s[0].batchId
                        }
                    }, {
                        key: "Di",
                        value: function(e) {
                            var t = this.Ci(e);
                            return t < 0 || t >= this.$s.length ? null : this.$s[t]
                        }
                    }]), e
                }(),
                lu = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.ki = t, this.docs = new Tn(Ee.comparator), this.size = 0
                    }
                    return (0, h.Z)(e, [{
                        key: "setIndexManager",
                        value: function(e) {
                            this.indexManager = e
                        }
                    }, {
                        key: "addEntry",
                        value: function(e, t) {
                            var n = t.key,
                                r = this.docs.get(n),
                                i = r ? r.size : 0,
                                a = this.ki(t);
                            return this.docs = this.docs.insert(n, {
                                document: t.mutableCopy(),
                                size: a
                            }), this.size += a - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
                        }
                    }, {
                        key: "removeEntry",
                        value: function(e) {
                            var t = this.docs.get(e);
                            t && (this.docs = this.docs.remove(e), this.size -= t.size)
                        }
                    }, {
                        key: "getEntry",
                        value: function(e, t) {
                            var n = this.docs.get(t);
                            return ni.resolve(n ? n.document.mutableCopy() : ze.newInvalidDocument(t))
                        }
                    }, {
                        key: "getEntries",
                        value: function(e, t) {
                            var n = this,
                                r = Zn();
                            return t.forEach((function(e) {
                                var t = n.docs.get(e);
                                r = r.insert(e, t ? t.document.mutableCopy() : ze.newInvalidDocument(e))
                            })), ni.resolve(r)
                        }
                    }, {
                        key: "getAllFromCollection",
                        value: function(e, t, n) {
                            for (var r = Zn(), i = new Ee(t.child("")), a = this.docs.getIteratorFrom(i); a.hasNext();) {
                                var u = a.getNext(),
                                    o = u.key,
                                    s = u.value.document;
                                if (!t.isPrefixOf(o.path)) break;
                                o.path.length > t.length + 1 || tt(Xe(s), n) <= 0 || (r = r.insert(s.key, s.mutableCopy()))
                            }
                            return ni.resolve(r)
                        }
                    }, {
                        key: "getAllFromCollectionGroup",
                        value: function(e, t, n, r) {
                            M()
                        }
                    }, {
                        key: "Mi",
                        value: function(e, t) {
                            return ni.forEach(this.docs, (function(e) {
                                return t(e)
                            }))
                        }
                    }, {
                        key: "newChangeBuffer",
                        value: function(e) {
                            return new fu(this)
                        }
                    }, {
                        key: "getSize",
                        value: function(e) {
                            return ni.resolve(this.size)
                        }
                    }]), e
                }(),
                fu = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e) {
                        var r;
                        return (0, f.Z)(this, n), (r = t.call(this)).qn = e, r
                    }
                    return (0, h.Z)(n, [{
                        key: "applyChanges",
                        value: function(e) {
                            var t = this,
                                n = [];
                            return this.changes.forEach((function(r, i) {
                                i.isValidDocument() ? n.push(t.qn.addEntry(e, i)) : t.qn.removeEntry(r)
                            })), ni.waitFor(n)
                        }
                    }, {
                        key: "getFromCache",
                        value: function(e, t) {
                            return this.qn.getEntry(e, t)
                        }
                    }, {
                        key: "getAllFromCache",
                        value: function(e, t) {
                            return this.qn.getEntries(e, t)
                        }
                    }]), n
                }(ba),
                hu = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.persistence = t, this.Oi = new En((function(e) {
                            return it(e)
                        }), at), this.lastRemoteSnapshotVersion = te.min(), this.highestTargetId = 0, this.Fi = 0, this.$i = new ou, this.targetCount = 0, this.Bi = sa.mn()
                    }
                    return (0, h.Z)(e, [{
                        key: "forEachTarget",
                        value: function(e, t) {
                            return this.Oi.forEach((function(e, n) {
                                return t(n)
                            })), ni.resolve()
                        }
                    }, {
                        key: "getLastRemoteSnapshotVersion",
                        value: function(e) {
                            return ni.resolve(this.lastRemoteSnapshotVersion)
                        }
                    }, {
                        key: "getHighestSequenceNumber",
                        value: function(e) {
                            return ni.resolve(this.Fi)
                        }
                    }, {
                        key: "allocateTargetId",
                        value: function(e) {
                            return this.highestTargetId = this.Bi.next(), ni.resolve(this.highestTargetId)
                        }
                    }, {
                        key: "setTargetsMetadata",
                        value: function(e, t, n) {
                            return n && (this.lastRemoteSnapshotVersion = n), t > this.Fi && (this.Fi = t), ni.resolve()
                        }
                    }, {
                        key: "In",
                        value: function(e) {
                            this.Oi.set(e.target, e);
                            var t = e.targetId;
                            t > this.highestTargetId && (this.Bi = new sa(t), this.highestTargetId = t), e.sequenceNumber > this.Fi && (this.Fi = e.sequenceNumber)
                        }
                    }, {
                        key: "addTargetData",
                        value: function(e, t) {
                            return this.In(t), this.targetCount += 1, ni.resolve()
                        }
                    }, {
                        key: "updateTargetData",
                        value: function(e, t) {
                            return this.In(t), ni.resolve()
                        }
                    }, {
                        key: "removeTargetData",
                        value: function(e, t) {
                            return this.Oi.delete(t.target), this.$i.Ri(t.targetId), this.targetCount -= 1, ni.resolve()
                        }
                    }, {
                        key: "removeTargets",
                        value: function(e, t, n) {
                            var r = this,
                                i = 0,
                                a = [];
                            return this.Oi.forEach((function(u, o) {
                                o.sequenceNumber <= t && null === n.get(o.targetId) && (r.Oi.delete(u), a.push(r.removeMatchingKeysForTargetId(e, o.targetId)), i++)
                            })), ni.waitFor(a).next((function() {
                                return i
                            }))
                        }
                    }, {
                        key: "getTargetCount",
                        value: function(e) {
                            return ni.resolve(this.targetCount)
                        }
                    }, {
                        key: "getTargetData",
                        value: function(e, t) {
                            var n = this.Oi.get(t) || null;
                            return ni.resolve(n)
                        }
                    }, {
                        key: "addMatchingKeys",
                        value: function(e, t, n) {
                            return this.$i.Ti(t, n), ni.resolve()
                        }
                    }, {
                        key: "removeMatchingKeys",
                        value: function(e, t, n) {
                            this.$i.Ai(t, n);
                            var r = this.persistence.referenceDelegate,
                                i = [];
                            return r && t.forEach((function(t) {
                                i.push(r.markPotentiallyOrphaned(e, t))
                            })), ni.waitFor(i)
                        }
                    }, {
                        key: "removeMatchingKeysForTargetId",
                        value: function(e, t) {
                            return this.$i.Ri(t), ni.resolve()
                        }
                    }, {
                        key: "getMatchingKeysForTargetId",
                        value: function(e, t) {
                            var n = this.$i.Pi(t);
                            return ni.resolve(n)
                        }
                    }, {
                        key: "containsKey",
                        value: function(e, t) {
                            return ni.resolve(this.$i.containsKey(t))
                        }
                    }]), e
                }(),
                du = function() {
                    function e(t, n) {
                        var r = this;
                        (0, f.Z)(this, e), this.Li = {}, this.overlays = {}, this.ts = new W(0), this.es = !1, this.es = !0, this.referenceDelegate = t(this), this.ls = new hu(this), this.indexManager = new ji, this.fs = new lu((function(e) {
                            return r.referenceDelegate.Ui(e)
                        })), this.M = new gi(n), this.ds = new au(this.M)
                    }
                    return (0, h.Z)(e, [{
                        key: "start",
                        value: function() {
                            return Promise.resolve()
                        }
                    }, {
                        key: "shutdown",
                        value: function() {
                            return this.es = !1, Promise.resolve()
                        }
                    }, {
                        key: "started",
                        get: function() {
                            return this.es
                        }
                    }, {
                        key: "setDatabaseDeletedListener",
                        value: function() {}
                    }, {
                        key: "setNetworkEnabled",
                        value: function() {}
                    }, {
                        key: "getIndexManager",
                        value: function(e) {
                            return this.indexManager
                        }
                    }, {
                        key: "getDocumentOverlayCache",
                        value: function(e) {
                            var t = this.overlays[e.toKey()];
                            return t || (t = new uu, this.overlays[e.toKey()] = t), t
                        }
                    }, {
                        key: "getMutationQueue",
                        value: function(e, t) {
                            var n = this.Li[e.toKey()];
                            return n || (n = new cu(t, this.referenceDelegate), this.Li[e.toKey()] = n), n
                        }
                    }, {
                        key: "getTargetCache",
                        value: function() {
                            return this.ls
                        }
                    }, {
                        key: "getRemoteDocumentCache",
                        value: function() {
                            return this.fs
                        }
                    }, {
                        key: "getBundleCache",
                        value: function() {
                            return this.ds
                        }
                    }, {
                        key: "runTransaction",
                        value: function(e, t, n) {
                            var r = this;
                            N("MemoryPersistence", "Starting transaction:", e);
                            var i = new vu(this.ts.next());
                            return this.referenceDelegate.qi(), n(i).next((function(e) {
                                return r.referenceDelegate.Gi(i).next((function() {
                                    return e
                                }))
                            })).toPromise().then((function(e) {
                                return i.raiseOnCommittedEvent(), e
                            }))
                        }
                    }, {
                        key: "Ki",
                        value: function(e, t) {
                            return ni.or(Object.values(this.Li).map((function(n) {
                                return function() {
                                    return n.containsKey(e, t)
                                }
                            })))
                        }
                    }]), e
                }(),
                vu = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e) {
                        var r;
                        return (0, f.Z)(this, n), (r = t.call(this)).currentSequenceNumber = e, r
                    }
                    return (0, h.Z)(n)
                }(ti),
                yu = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.persistence = t, this.Qi = new ou, this.ji = null
                    }
                    return (0, h.Z)(e, [{
                        key: "zi",
                        get: function() {
                            if (this.ji) return this.ji;
                            throw M()
                        }
                    }, {
                        key: "addReference",
                        value: function(e, t, n) {
                            return this.Qi.addReference(n, t), this.zi.delete(n.toString()), ni.resolve()
                        }
                    }, {
                        key: "removeReference",
                        value: function(e, t, n) {
                            return this.Qi.removeReference(n, t), this.zi.add(n.toString()), ni.resolve()
                        }
                    }, {
                        key: "markPotentiallyOrphaned",
                        value: function(e, t) {
                            return this.zi.add(t.toString()), ni.resolve()
                        }
                    }, {
                        key: "removeTarget",
                        value: function(e, t) {
                            var n = this;
                            this.Qi.Ri(t.targetId).forEach((function(e) {
                                return n.zi.add(e.toString())
                            }));
                            var r = this.persistence.getTargetCache();
                            return r.getMatchingKeysForTargetId(e, t.targetId).next((function(e) {
                                e.forEach((function(e) {
                                    return n.zi.add(e.toString())
                                }))
                            })).next((function() {
                                return r.removeTargetData(e, t)
                            }))
                        }
                    }, {
                        key: "qi",
                        value: function() {
                            this.ji = new Set
                        }
                    }, {
                        key: "Gi",
                        value: function(e) {
                            var t = this,
                                n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
                            return ni.forEach(this.zi, (function(r) {
                                var i = Ee.fromPath(r);
                                return t.Hi(e, i).next((function(e) {
                                    e || n.removeEntry(i, te.min())
                                }))
                            })).next((function() {
                                return t.ji = null, n.apply(e)
                            }))
                        }
                    }, {
                        key: "updateLimboDocument",
                        value: function(e, t) {
                            var n = this;
                            return this.Hi(e, t).next((function(e) {
                                e ? n.zi.delete(t.toString()) : n.zi.add(t.toString())
                            }))
                        }
                    }, {
                        key: "Ui",
                        value: function(e) {
                            return 0
                        }
                    }, {
                        key: "Hi",
                        value: function(e, t) {
                            var n = this;
                            return ni.or([function() {
                                return ni.resolve(n.Qi.containsKey(t))
                            }, function() {
                                return n.persistence.getTargetCache().containsKey(e, t)
                            }, function() {
                                return n.persistence.Ki(e, t)
                            }])
                        }
                    }], [{
                        key: "Wi",
                        value: function(t) {
                            return new e(t)
                        }
                    }]), e
                }();

            function pu(e, t) {
                return "firestore_clients_".concat(e, "_").concat(t)
            }

            function mu(e, t, n) {
                var r = "firestore_mutations_".concat(e, "_").concat(n);
                return t.isAuthenticated() && (r += "_".concat(t.uid)), r
            }

            function gu(e, t) {
                return "firestore_targets_".concat(e, "_").concat(t)
            }
            var ku = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.user = t, this.batchId = n, this.state = r, this.error = i
                    }
                    return (0, h.Z)(e, [{
                        key: "Yi",
                        value: function() {
                            var e = {
                                state: this.state,
                                updateTimeMs: Date.now()
                            };
                            return this.error && (e.error = {
                                code: this.error.code,
                                message: this.error.message
                            }), JSON.stringify(e)
                        }
                    }], [{
                        key: "Ji",
                        value: function(t, n, r) {
                            var i, a = JSON.parse(r),
                                u = "object" == typeof a && -1 !== ["pending", "acknowledged", "rejected"].indexOf(a.state) && (void 0 === a.error || "object" == typeof a.error);
                            return u && a.error && ((u = "string" == typeof a.error.message && "string" == typeof a.error.code) && (i = new P(a.error.code, a.error.message))), u ? new e(t, n, a.state, i) : (D("SharedClientState", "Failed to parse mutation state for ID '".concat(n, "': ").concat(r)), null)
                        }
                    }]), e
                }(),
                wu = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.targetId = t, this.state = n, this.error = r
                    }
                    return (0, h.Z)(e, [{
                        key: "Yi",
                        value: function() {
                            var e = {
                                state: this.state,
                                updateTimeMs: Date.now()
                            };
                            return this.error && (e.error = {
                                code: this.error.code,
                                message: this.error.message
                            }), JSON.stringify(e)
                        }
                    }], [{
                        key: "Ji",
                        value: function(t, n) {
                            var r, i = JSON.parse(n),
                                a = "object" == typeof i && -1 !== ["not-current", "current", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
                            return a && i.error && ((a = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new P(i.error.code, i.error.message))), a ? new e(t, i.state, r) : (D("SharedClientState", "Failed to parse target state for ID '".concat(t, "': ").concat(n)), null)
                        }
                    }]), e
                }(),
                bu = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.clientId = t, this.activeTargetIds = n
                    }
                    return (0, h.Z)(e, null, [{
                        key: "Ji",
                        value: function(t, n) {
                            for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, a = qn(), u = 0; i && u < r.activeTargetIds.length; ++u) i = Ie(r.activeTargetIds[u]), a = a.add(r.activeTargetIds[u]);
                            return i ? new e(t, a) : (D("SharedClientState", "Failed to parse client data for instance '".concat(t, "': ").concat(n)), null)
                        }
                    }]), e
                }(),
                xu = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.clientId = t, this.onlineState = n
                    }
                    return (0, h.Z)(e, null, [{
                        key: "Ji",
                        value: function(t) {
                            var n = JSON.parse(t);
                            return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new e(n.clientId, n.onlineState) : (D("SharedClientState", "Failed to parse online state: ".concat(t)), null)
                        }
                    }]), e
                }(),
                Iu = function() {
                    function e() {
                        (0, f.Z)(this, e), this.activeTargetIds = qn()
                    }
                    return (0, h.Z)(e, [{
                        key: "Xi",
                        value: function(e) {
                            this.activeTargetIds = this.activeTargetIds.add(e)
                        }
                    }, {
                        key: "Zi",
                        value: function(e) {
                            this.activeTargetIds = this.activeTargetIds.delete(e)
                        }
                    }, {
                        key: "Yi",
                        value: function() {
                            var e = {
                                activeTargetIds: this.activeTargetIds.toArray(),
                                updateTimeMs: Date.now()
                            };
                            return JSON.stringify(e)
                        }
                    }]), e
                }(),
                Eu = function() {
                    function e(t, n, r, i, a) {
                        (0, f.Z)(this, e), this.window = t, this.Jn = n, this.persistenceKey = r, this.tr = i, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.er = this.nr.bind(this), this.sr = new Tn(J), this.started = !1, this.ir = [];
                        var u = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        this.storage = this.window.localStorage, this.currentUser = a, this.rr = pu(this.persistenceKey, this.tr), this.ur = function(e) {
                            return "firestore_sequence_number_".concat(e)
                        }(this.persistenceKey), this.sr = this.sr.insert(this.tr, new Iu), this.ar = new RegExp("^firestore_clients_".concat(u, "_([^_]*)$")), this.cr = new RegExp("^firestore_mutations_".concat(u, "_(\\d+)(?:_(.*))?$")), this.hr = new RegExp("^firestore_targets_".concat(u, "_(\\d+)$")), this.lr = function(e) {
                            return "firestore_online_state_".concat(e)
                        }(this.persistenceKey), this.dr = function(e) {
                            return "firestore_bundle_loaded_v2_".concat(e)
                        }(this.persistenceKey), this.window.addEventListener("storage", this.er)
                    }
                    var t, n;
                    return (0, h.Z)(e, [{
                        key: "start",
                        value: (n = (0, u.Z)(v().mark((function e() {
                            var t, n, r, i, a, u, o, s, c, l, f, h = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.syncEngine.Os();
                                    case 2:
                                        t = e.sent, n = w(t), e.prev = 4, n.s();
                                    case 6:
                                        if ((r = n.n()).done) {
                                            e.next = 14;
                                            break
                                        }
                                        if ((i = r.value) !== this.tr) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("continue", 12);
                                    case 10:
                                        (a = this.getItem(pu(this.persistenceKey, i))) && (u = bu.Ji(i, a)) && (this.sr = this.sr.insert(u.clientId, u));
                                    case 12:
                                        e.next = 6;
                                        break;
                                    case 14:
                                        e.next = 19;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(4), n.e(e.t0);
                                    case 19:
                                        return e.prev = 19, n.f(), e.finish(19);
                                    case 22:
                                        this._r(), (o = this.storage.getItem(this.lr)) && (s = this.wr(o)) && this.mr(s), c = w(this.ir);
                                        try {
                                            for (c.s(); !(l = c.n()).done;) f = l.value, this.nr(f)
                                        } catch (d) {
                                            c.e(d)
                                        } finally {
                                            c.f()
                                        }
                                        this.ir = [], this.window.addEventListener("pagehide", (function() {
                                            return h.shutdown()
                                        })), this.started = !0;
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [4, 16, 19, 22]
                            ])
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "writeSequenceNumber",
                        value: function(e) {
                            this.setItem(this.ur, JSON.stringify(e))
                        }
                    }, {
                        key: "getAllActiveQueryTargets",
                        value: function() {
                            return this.gr(this.sr)
                        }
                    }, {
                        key: "isActiveQueryTarget",
                        value: function(e) {
                            var t = !1;
                            return this.sr.forEach((function(n, r) {
                                r.activeTargetIds.has(e) && (t = !0)
                            })), t
                        }
                    }, {
                        key: "addPendingMutation",
                        value: function(e) {
                            this.yr(e, "pending")
                        }
                    }, {
                        key: "updateMutationState",
                        value: function(e, t, n) {
                            this.yr(e, t, n), this.pr(e)
                        }
                    }, {
                        key: "addLocalQueryTarget",
                        value: function(e) {
                            var t = "not-current";
                            if (this.isActiveQueryTarget(e)) {
                                var n = this.storage.getItem(gu(this.persistenceKey, e));
                                if (n) {
                                    var r = wu.Ji(e, n);
                                    r && (t = r.state)
                                }
                            }
                            return this.Ir.Xi(e), this._r(), t
                        }
                    }, {
                        key: "removeLocalQueryTarget",
                        value: function(e) {
                            this.Ir.Zi(e), this._r()
                        }
                    }, {
                        key: "isLocalQueryTarget",
                        value: function(e) {
                            return this.Ir.activeTargetIds.has(e)
                        }
                    }, {
                        key: "clearQueryState",
                        value: function(e) {
                            this.removeItem(gu(this.persistenceKey, e))
                        }
                    }, {
                        key: "updateQueryState",
                        value: function(e, t, n) {
                            this.Tr(e, t, n)
                        }
                    }, {
                        key: "handleUserChange",
                        value: function(e, t, n) {
                            var r = this;
                            t.forEach((function(e) {
                                r.pr(e)
                            })), this.currentUser = e, n.forEach((function(e) {
                                r.addPendingMutation(e)
                            }))
                        }
                    }, {
                        key: "setOnlineState",
                        value: function(e) {
                            this.Er(e)
                        }
                    }, {
                        key: "notifyBundleLoaded",
                        value: function(e) {
                            this.Ar(e)
                        }
                    }, {
                        key: "shutdown",
                        value: function() {
                            this.started && (this.window.removeEventListener("storage", this.er), this.removeItem(this.rr), this.started = !1)
                        }
                    }, {
                        key: "getItem",
                        value: function(e) {
                            var t = this.storage.getItem(e);
                            return N("SharedClientState", "READ", e, t), t
                        }
                    }, {
                        key: "setItem",
                        value: function(e, t) {
                            N("SharedClientState", "SET", e, t), this.storage.setItem(e, t)
                        }
                    }, {
                        key: "removeItem",
                        value: function(e) {
                            N("SharedClientState", "REMOVE", e), this.storage.removeItem(e)
                        }
                    }, {
                        key: "nr",
                        value: function(e) {
                            var t = this,
                                n = e;
                            if (n.storageArea === this.storage) {
                                if (N("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.rr) return void D("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                                this.Jn.enqueueRetryable((0, u.Z)(v().mark((function e() {
                                    var r, i, a, u, o, s, c;
                                    return v().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!t.started) {
                                                    e.next = 43;
                                                    break
                                                }
                                                if (null === n.key) {
                                                    e.next = 41;
                                                    break
                                                }
                                                if (!t.ar.test(n.key)) {
                                                    e.next = 11;
                                                    break
                                                }
                                                if (null != n.newValue) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return r = t.Rr(n.key), e.abrupt("return", t.br(r, null));
                                            case 6:
                                                if (!(i = t.Pr(n.key, n.newValue))) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.abrupt("return", t.br(i.clientId, i));
                                            case 9:
                                                e.next = 41;
                                                break;
                                            case 11:
                                                if (!t.cr.test(n.key)) {
                                                    e.next = 18;
                                                    break
                                                }
                                                if (null === n.newValue) {
                                                    e.next = 16;
                                                    break
                                                }
                                                if (!(a = t.Vr(n.key, n.newValue))) {
                                                    e.next = 16;
                                                    break
                                                }
                                                return e.abrupt("return", t.vr(a));
                                            case 16:
                                                e.next = 41;
                                                break;
                                            case 18:
                                                if (!t.hr.test(n.key)) {
                                                    e.next = 25;
                                                    break
                                                }
                                                if (null === n.newValue) {
                                                    e.next = 23;
                                                    break
                                                }
                                                if (!(u = t.Sr(n.key, n.newValue))) {
                                                    e.next = 23;
                                                    break
                                                }
                                                return e.abrupt("return", t.Dr(u));
                                            case 23:
                                                e.next = 41;
                                                break;
                                            case 25:
                                                if (n.key !== t.lr) {
                                                    e.next = 32;
                                                    break
                                                }
                                                if (null === n.newValue) {
                                                    e.next = 30;
                                                    break
                                                }
                                                if (!(o = t.wr(n.newValue))) {
                                                    e.next = 30;
                                                    break
                                                }
                                                return e.abrupt("return", t.mr(o));
                                            case 30:
                                                e.next = 41;
                                                break;
                                            case 32:
                                                if (n.key !== t.ur) {
                                                    e.next = 37;
                                                    break
                                                }
                                                s = function(e) {
                                                    var t = W.A;
                                                    if (null != e) try {
                                                        var n = JSON.parse(e);
                                                        R("number" == typeof n), t = n
                                                    } catch (e) {
                                                        D("SharedClientState", "Failed to read sequence number from WebStorage", e)
                                                    }
                                                    return t
                                                }(n.newValue), s !== W.A && t.sequenceNumberHandler(s), e.next = 41;
                                                break;
                                            case 37:
                                                if (n.key !== t.dr) {
                                                    e.next = 41;
                                                    break
                                                }
                                                return c = t.Cr(n.newValue), e.next = 41, Promise.all(c.map((function(e) {
                                                    return t.syncEngine.Nr(e)
                                                })));
                                            case 41:
                                                e.next = 44;
                                                break;
                                            case 43:
                                                t.ir.push(n);
                                            case 44:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))))
                            }
                        }
                    }, {
                        key: "Ir",
                        get: function() {
                            return this.sr.get(this.tr)
                        }
                    }, {
                        key: "_r",
                        value: function() {
                            this.setItem(this.rr, this.Ir.Yi())
                        }
                    }, {
                        key: "yr",
                        value: function(e, t, n) {
                            var r = new ku(this.currentUser, e, t, n),
                                i = mu(this.persistenceKey, this.currentUser, e);
                            this.setItem(i, r.Yi())
                        }
                    }, {
                        key: "pr",
                        value: function(e) {
                            var t = mu(this.persistenceKey, this.currentUser, e);
                            this.removeItem(t)
                        }
                    }, {
                        key: "Er",
                        value: function(e) {
                            var t = {
                                clientId: this.tr,
                                onlineState: e
                            };
                            this.storage.setItem(this.lr, JSON.stringify(t))
                        }
                    }, {
                        key: "Tr",
                        value: function(e, t, n) {
                            var r = gu(this.persistenceKey, e),
                                i = new wu(e, t, n);
                            this.setItem(r, i.Yi())
                        }
                    }, {
                        key: "Ar",
                        value: function(e) {
                            var t = JSON.stringify(Array.from(e));
                            this.setItem(this.dr, t)
                        }
                    }, {
                        key: "Rr",
                        value: function(e) {
                            var t = this.ar.exec(e);
                            return t ? t[1] : null
                        }
                    }, {
                        key: "Pr",
                        value: function(e, t) {
                            var n = this.Rr(e);
                            return bu.Ji(n, t)
                        }
                    }, {
                        key: "Vr",
                        value: function(e, t) {
                            var n = this.cr.exec(e),
                                r = Number(n[1]),
                                i = void 0 !== n[2] ? n[2] : null;
                            return ku.Ji(new E(i), r, t)
                        }
                    }, {
                        key: "Sr",
                        value: function(e, t) {
                            var n = this.hr.exec(e),
                                r = Number(n[1]);
                            return wu.Ji(r, t)
                        }
                    }, {
                        key: "wr",
                        value: function(e) {
                            return xu.Ji(e)
                        }
                    }, {
                        key: "Cr",
                        value: function(e) {
                            return JSON.parse(e)
                        }
                    }, {
                        key: "vr",
                        value: (t = (0, u.Z)(v().mark((function e(t) {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.user.uid !== this.currentUser.uid) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", this.syncEngine.kr(t.batchId, t.state, t.error));
                                    case 2:
                                        N("SharedClientState", "Ignoring mutation for non-active user ".concat(t.user.uid));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "Dr",
                        value: function(e) {
                            return this.syncEngine.Mr(e.targetId, e.state, e.error)
                        }
                    }, {
                        key: "br",
                        value: function(e, t) {
                            var n = this,
                                r = t ? this.sr.insert(e, t) : this.sr.remove(e),
                                i = this.gr(this.sr),
                                a = this.gr(r),
                                u = [],
                                o = [];
                            return a.forEach((function(e) {
                                i.has(e) || u.push(e)
                            })), i.forEach((function(e) {
                                a.has(e) || o.push(e)
                            })), this.syncEngine.Or(u, o).then((function() {
                                n.sr = r
                            }))
                        }
                    }, {
                        key: "mr",
                        value: function(e) {
                            this.sr.get(e.clientId) && this.onlineStateHandler(e.onlineState)
                        }
                    }, {
                        key: "gr",
                        value: function(e) {
                            var t = qn();
                            return e.forEach((function(e, n) {
                                t = t.unionWith(n.activeTargetIds)
                            })), t
                        }
                    }], [{
                        key: "vt",
                        value: function(e) {
                            return !(!e || !e.localStorage)
                        }
                    }]), e
                }(),
                Tu = function() {
                    function e() {
                        (0, f.Z)(this, e), this.Fr = new Iu, this.$r = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null
                    }
                    return (0, h.Z)(e, [{
                        key: "addPendingMutation",
                        value: function(e) {}
                    }, {
                        key: "updateMutationState",
                        value: function(e, t, n) {}
                    }, {
                        key: "addLocalQueryTarget",
                        value: function(e) {
                            return this.Fr.Xi(e), this.$r[e] || "not-current"
                        }
                    }, {
                        key: "updateQueryState",
                        value: function(e, t, n) {
                            this.$r[e] = t
                        }
                    }, {
                        key: "removeLocalQueryTarget",
                        value: function(e) {
                            this.Fr.Zi(e)
                        }
                    }, {
                        key: "isLocalQueryTarget",
                        value: function(e) {
                            return this.Fr.activeTargetIds.has(e)
                        }
                    }, {
                        key: "clearQueryState",
                        value: function(e) {
                            delete this.$r[e]
                        }
                    }, {
                        key: "getAllActiveQueryTargets",
                        value: function() {
                            return this.Fr.activeTargetIds
                        }
                    }, {
                        key: "isActiveQueryTarget",
                        value: function(e) {
                            return this.Fr.activeTargetIds.has(e)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            return this.Fr = new Iu, Promise.resolve()
                        }
                    }, {
                        key: "handleUserChange",
                        value: function(e, t, n) {}
                    }, {
                        key: "setOnlineState",
                        value: function(e) {}
                    }, {
                        key: "shutdown",
                        value: function() {}
                    }, {
                        key: "writeSequenceNumber",
                        value: function(e) {}
                    }, {
                        key: "notifyBundleLoaded",
                        value: function(e) {}
                    }]), e
                }(),
                Su = function() {
                    function e() {
                        (0, f.Z)(this, e)
                    }
                    return (0, h.Z)(e, [{
                        key: "Br",
                        value: function(e) {}
                    }, {
                        key: "shutdown",
                        value: function() {}
                    }]), e
                }(),
                _u = function() {
                    function e() {
                        var t = this;
                        (0, f.Z)(this, e), this.Lr = function() {
                            return t.Ur()
                        }, this.qr = function() {
                            return t.Gr()
                        }, this.Kr = [], this.Qr()
                    }
                    return (0, h.Z)(e, [{
                        key: "Br",
                        value: function(e) {
                            this.Kr.push(e)
                        }
                    }, {
                        key: "shutdown",
                        value: function() {
                            window.removeEventListener("online", this.Lr), window.removeEventListener("offline", this.qr)
                        }
                    }, {
                        key: "Qr",
                        value: function() {
                            window.addEventListener("online", this.Lr), window.addEventListener("offline", this.qr)
                        }
                    }, {
                        key: "Ur",
                        value: function() {
                            N("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                            var e, t = w(this.Kr);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    (0, e.value)(0)
                                }
                            } catch (n) {
                                t.e(n)
                            } finally {
                                t.f()
                            }
                        }
                    }, {
                        key: "Gr",
                        value: function() {
                            N("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                            var e, t = w(this.Kr);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    (0, e.value)(1)
                                }
                            } catch (n) {
                                t.e(n)
                            } finally {
                                t.f()
                            }
                        }
                    }], [{
                        key: "vt",
                        value: function() {
                            return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                        }
                    }]), e
                }(),
                Au = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit",
                    RunQuery: "runQuery"
                },
                Nu = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.jr = t.jr, this.Wr = t.Wr
                    }
                    return (0, h.Z)(e, [{
                        key: "zr",
                        value: function(e) {
                            this.Hr = e
                        }
                    }, {
                        key: "Jr",
                        value: function(e) {
                            this.Yr = e
                        }
                    }, {
                        key: "onMessage",
                        value: function(e) {
                            this.Xr = e
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this.Wr()
                        }
                    }, {
                        key: "send",
                        value: function(e) {
                            this.jr(e)
                        }
                    }, {
                        key: "Zr",
                        value: function() {
                            this.Hr()
                        }
                    }, {
                        key: "eo",
                        value: function(e) {
                            this.Yr(e)
                        }
                    }, {
                        key: "no",
                        value: function(e) {
                            this.Xr(e)
                        }
                    }]), e
                }(),
                Du = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e) {
                        var r;
                        return (0, f.Z)(this, n), (r = t.call(this, e)).forceLongPolling = e.forceLongPolling, r.autoDetectLongPolling = e.autoDetectLongPolling, r.useFetchStreams = e.useFetchStreams, r
                    }
                    return (0, h.Z)(n, [{
                        key: "ao",
                        value: function(e, t, n, r) {
                            return new Promise((function(i, a) {
                                var u = new k.JJ;
                                u.listenOnce(k.tw.COMPLETE, (function() {
                                    try {
                                        switch (u.getLastErrorCode()) {
                                            case k.jK.NO_ERROR:
                                                var t = u.getResponseJson();
                                                N("Connection", "XHR received:", JSON.stringify(t)), i(t);
                                                break;
                                            case k.jK.TIMEOUT:
                                                N("Connection", 'RPC "' + e + '" timed out'), a(new P(F.DEADLINE_EXCEEDED, "Request time out"));
                                                break;
                                            case k.jK.HTTP_ERROR:
                                                var n = u.getStatus();
                                                if (N("Connection", 'RPC "' + e + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                                                    var r = u.getResponseJson().error;
                                                    if (r && r.status && r.message) {
                                                        var o = function(e) {
                                                            var t = e.toLowerCase().replace(/_/g, "-");
                                                            return Object.values(F).indexOf(t) >= 0 ? t : F.UNKNOWN
                                                        }(r.status);
                                                        a(new P(o, r.message))
                                                    } else a(new P(F.UNKNOWN, "Server responded with status " + u.getStatus()))
                                                } else a(new P(F.UNAVAILABLE, "Connection failed."));
                                                break;
                                            default:
                                                M()
                                        }
                                    } finally {
                                        N("Connection", 'RPC "' + e + '" completed.')
                                    }
                                }));
                                var o = JSON.stringify(r);
                                u.send(t, "POST", o, n, 15)
                            }))
                        }
                    }, {
                        key: "ho",
                        value: function(e, t, n) {
                            var r = [this.so, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
                                i = (0, k.UE)(),
                                a = (0, k.FJ)(),
                                u = {
                                    httpSessionIdParam: "gsessionid",
                                    initMessageHeaders: {},
                                    messageUrlParams: {
                                        database: "projects/".concat(this.databaseId.projectId, "/databases/").concat(this.databaseId.database)
                                    },
                                    sendRawJson: !0,
                                    supportsCrossDomainXhr: !0,
                                    internalChannelParams: {
                                        forwardChannelRequestTimeoutMs: 6e5
                                    },
                                    forceLongPolling: this.forceLongPolling,
                                    detectBufferingProxy: this.autoDetectLongPolling
                                };
                            this.useFetchStreams && (u.xmlHttpFactory = new k.zI({})), this.uo(u.initMessageHeaders, t, n), (0, g.uI)() || (0, g.b$)() || (0, g.d)() || (0, g.w1)() || (0, g.Mn)() || (0, g.ru)() || (u.httpHeadersOverwriteParam = "$httpHeaders");
                            var o = r.join("");
                            N("Connection", "Creating WebChannel: " + o, u);
                            var s = i.createWebChannel(o, u),
                                c = !1,
                                l = !1,
                                f = new Nu({
                                    jr: function(e) {
                                        l ? N("Connection", "Not sending because WebChannel is closed:", e) : (c || (N("Connection", "Opening WebChannel transport."), s.open(), c = !0), N("Connection", "WebChannel sending:", e), s.send(e))
                                    },
                                    Wr: function() {
                                        return s.close()
                                    }
                                }),
                                h = function(e, t, n) {
                                    e.listen(t, (function(e) {
                                        try {
                                            n(e)
                                        } catch (e) {
                                            setTimeout((function() {
                                                throw e
                                            }), 0)
                                        }
                                    }))
                                };
                            return h(s, k.ii.EventType.OPEN, (function() {
                                l || N("Connection", "WebChannel transport opened.")
                            })), h(s, k.ii.EventType.CLOSE, (function() {
                                l || (l = !0, N("Connection", "WebChannel transport closed"), f.eo())
                            })), h(s, k.ii.EventType.ERROR, (function(e) {
                                l || (l = !0, C("Connection", "WebChannel transport errored:", e), f.eo(new P(F.UNAVAILABLE, "The operation could not be completed")))
                            })), h(s, k.ii.EventType.MESSAGE, (function(e) {
                                var t;
                                if (!l) {
                                    var n = e.data[0];
                                    R(!!n);
                                    var r = n,
                                        i = r.error || (null === (t = r[0]) || void 0 === t ? void 0 : t.error);
                                    if (i) {
                                        N("Connection", "WebChannel received error:", i);
                                        var a = i.status,
                                            u = function(e) {
                                                var t = mn[e];
                                                if (void 0 !== t) return In(t)
                                            }(a),
                                            o = i.message;
                                        void 0 === u && (u = F.INTERNAL, o = "Unknown error status: " + a + " with message " + i.message), l = !0, f.eo(new P(u, o)), s.close()
                                    } else N("Connection", "WebChannel received:", n), f.no(n)
                                }
                            })), h(a, k.ju.STAT_EVENT, (function(e) {
                                e.stat === k.kN.PROXY ? N("Connection", "Detected buffering proxy") : e.stat === k.kN.NOPROXY && N("Connection", "Detected no buffering proxy")
                            })), setTimeout((function() {
                                f.Zr()
                            }), 0), f
                        }
                    }]), n
                }(function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.databaseInfo = t, this.databaseId = t.databaseId;
                        var n = t.ssl ? "https" : "http";
                        this.so = n + "://" + t.host, this.io = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents"
                    }
                    return (0, h.Z)(e, [{
                        key: "ro",
                        value: function(e, t, n, r, i) {
                            var a = this.oo(e, t);
                            N("RestConnection", "Sending: ", a, n);
                            var u = {};
                            return this.uo(u, r, i), this.ao(e, a, u, n).then((function(e) {
                                return N("RestConnection", "Received: ", e), e
                            }), (function(t) {
                                throw C("RestConnection", "".concat(e, " failed with error: "), t, "url: ", a, "request:", n), t
                            }))
                        }
                    }, {
                        key: "co",
                        value: function(e, t, n, r, i) {
                            return this.ro(e, t, n, r, i)
                        }
                    }, {
                        key: "uo",
                        value: function(e, t, n) {
                            e["X-Goog-Api-Client"] = "gl-js/ fire/" + T, e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach((function(t, n) {
                                return e[n] = t
                            })), n && n.headers.forEach((function(t, n) {
                                return e[n] = t
                            }))
                        }
                    }, {
                        key: "oo",
                        value: function(e, t) {
                            var n = Au[e];
                            return "".concat(this.so, "/v1/").concat(t, ":").concat(n)
                        }
                    }]), e
                }());

            function Cu() {
                return "undefined" != typeof window ? window : null
            }

            function Zu() {
                return "undefined" != typeof document ? document : null
            }

            function Mu(e) {
                return new $n(e, !0)
            }
            var Ru = function() {
                    function e(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1.5,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 6e4;
                        (0, f.Z)(this, e), this.Jn = t, this.timerId = n, this.lo = r, this.fo = i, this._o = a, this.wo = 0, this.mo = null, this.yo = Date.now(), this.reset()
                    }
                    return (0, h.Z)(e, [{
                        key: "reset",
                        value: function() {
                            this.wo = 0
                        }
                    }, {
                        key: "po",
                        value: function() {
                            this.wo = this._o
                        }
                    }, {
                        key: "Io",
                        value: function(e) {
                            var t = this;
                            this.cancel();
                            var n = Math.floor(this.wo + this.To()),
                                r = Math.max(0, Date.now() - this.yo),
                                i = Math.max(0, n - r);
                            i > 0 && N("ExponentialBackoff", "Backing off for ".concat(i, " ms (base delay: ").concat(this.wo, " ms, delay with jitter: ").concat(n, " ms, last attempt: ").concat(r, " ms ago)")), this.mo = this.Jn.enqueueAfterDelay(this.timerId, i, (function() {
                                return t.yo = Date.now(), e()
                            })), this.wo *= this.fo, this.wo < this.lo && (this.wo = this.lo), this.wo > this._o && (this.wo = this._o)
                        }
                    }, {
                        key: "Eo",
                        value: function() {
                            null !== this.mo && (this.mo.skipDelay(), this.mo = null)
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            null !== this.mo && (this.mo.cancel(), this.mo = null)
                        }
                    }, {
                        key: "To",
                        value: function() {
                            return (Math.random() - .5) * this.wo
                        }
                    }]), e
                }(),
                Vu = function() {
                    function e(t, n, r, i, a, u, o, s) {
                        (0, f.Z)(this, e), this.Jn = t, this.Ao = r, this.Ro = i, this.bo = a, this.authCredentialsProvider = u, this.appCheckCredentialsProvider = o, this.listener = s, this.state = 0, this.Po = 0, this.Vo = null, this.vo = null, this.stream = null, this.So = new Ru(t, n)
                    }
                    var t, n, r;
                    return (0, h.Z)(e, [{
                        key: "Do",
                        value: function() {
                            return 1 === this.state || 5 === this.state || this.Co()
                        }
                    }, {
                        key: "Co",
                        value: function() {
                            return 2 === this.state || 3 === this.state
                        }
                    }, {
                        key: "start",
                        value: function() {
                            4 !== this.state ? this.auth() : this.xo()
                        }
                    }, {
                        key: "stop",
                        value: (r = (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = this.Do(), !e.t0) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, this.close(0);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "No",
                        value: function() {
                            this.state = 0, this.So.reset()
                        }
                    }, {
                        key: "ko",
                        value: function() {
                            var e = this;
                            this.Co() && null === this.Vo && (this.Vo = this.Jn.enqueueAfterDelay(this.Ao, 6e4, (function() {
                                return e.Mo()
                            })))
                        }
                    }, {
                        key: "Oo",
                        value: function(e) {
                            this.Fo(), this.stream.send(e)
                        }
                    }, {
                        key: "Mo",
                        value: (n = (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.Co()) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", this.close(0));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "Fo",
                        value: function() {
                            this.Vo && (this.Vo.cancel(), this.Vo = null)
                        }
                    }, {
                        key: "$o",
                        value: function() {
                            this.vo && (this.vo.cancel(), this.vo = null)
                        }
                    }, {
                        key: "close",
                        value: (t = (0, u.Z)(v().mark((function e(t, n) {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.Fo(), this.$o(), this.So.cancel(), this.Po++, 4 !== t ? this.So.reset() : n && n.code === F.RESOURCE_EXHAUSTED ? (D(n.toString()), D("Using maximum backoff delay to prevent overloading the backend."), this.So.po()) : n && n.code === F.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.Bo(), this.stream.close(), this.stream = null), this.state = t, e.next = 9, this.listener.Jr(n);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, n) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "Bo",
                        value: function() {}
                    }, {
                        key: "auth",
                        value: function() {
                            var e = this;
                            this.state = 1;
                            var t = this.Lo(this.Po),
                                n = this.Po;
                            Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((function(t) {
                                var r = (0, a.Z)(t, 2),
                                    i = r[0],
                                    u = r[1];
                                e.Po === n && e.Uo(i, u)
                            }), (function(n) {
                                t((function() {
                                    var t = new P(F.UNKNOWN, "Fetching auth token failed: " + n.message);
                                    return e.qo(t)
                                }))
                            }))
                        }
                    }, {
                        key: "Uo",
                        value: function(e, t) {
                            var n = this,
                                r = this.Lo(this.Po);
                            this.stream = this.Go(e, t), this.stream.zr((function() {
                                r((function() {
                                    return n.state = 2, n.vo = n.Jn.enqueueAfterDelay(n.Ro, 1e4, (function() {
                                        return n.Co() && (n.state = 3), Promise.resolve()
                                    })), n.listener.zr()
                                }))
                            })), this.stream.Jr((function(e) {
                                r((function() {
                                    return n.qo(e)
                                }))
                            })), this.stream.onMessage((function(e) {
                                r((function() {
                                    return n.onMessage(e)
                                }))
                            }))
                        }
                    }, {
                        key: "xo",
                        value: function() {
                            var e = this;
                            this.state = 5, this.So.Io((0, u.Z)(v().mark((function t() {
                                return v().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.state = 0, e.start();
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))))
                        }
                    }, {
                        key: "qo",
                        value: function(e) {
                            return N("PersistentStream", "close with error: ".concat(e)), this.stream = null, this.close(4, e)
                        }
                    }, {
                        key: "Lo",
                        value: function(e) {
                            var t = this;
                            return function(n) {
                                t.Jn.enqueueAndForget((function() {
                                    return t.Po === e ? n() : (N("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                                }))
                            }
                        }
                    }]), e
                }(),
                Lu = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i, a, u, o) {
                        var s;
                        return (0, f.Z)(this, n), (s = t.call(this, e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", r, i, a, o)).M = u, s
                    }
                    return (0, h.Z)(n, [{
                        key: "Go",
                        value: function(e, t) {
                            return this.bo.ho("Listen", e, t)
                        }
                    }, {
                        key: "onMessage",
                        value: function(e) {
                            this.So.reset();
                            var t = function(e, t) {
                                    var n;
                                    if ("targetChange" in t) {
                                        t.targetChange;
                                        var r = function(e) {
                                                return "NO_CHANGE" === e ? 0 : "ADD" === e ? 1 : "REMOVE" === e ? 2 : "CURRENT" === e ? 3 : "RESET" === e ? 4 : M()
                                            }(t.targetChange.targetChangeType || "NO_CHANGE"),
                                            i = t.targetChange.targetIds || [],
                                            a = function(e, t) {
                                                return e.N ? (R(void 0 === t || "string" == typeof t), fe.fromBase64String(t || "")) : (R(void 0 === t || t instanceof Uint8Array), fe.fromUint8Array(t || new Uint8Array))
                                            }(e, t.targetChange.resumeToken),
                                            u = t.targetChange.cause,
                                            o = u && function(e) {
                                                var t = void 0 === e.code ? F.UNKNOWN : In(e.code);
                                                return new P(t, e.message || "")
                                            }(u);
                                        n = new jn(r, i, a, o || null)
                                    } else if ("documentChange" in t) {
                                        t.documentChange;
                                        var s = t.documentChange;
                                        s.document, s.document.name, s.document.updateTime;
                                        var c = ur(e, s.document.name),
                                            l = nr(s.document.updateTime),
                                            f = new Ge({
                                                mapValue: {
                                                    fields: s.document.fields
                                                }
                                            }),
                                            h = ze.newFoundDocument(c, l, f),
                                            d = s.targetIds || [],
                                            v = s.removedTargetIds || [];
                                        n = new Kn(d, v, h.key, h)
                                    } else if ("documentDelete" in t) {
                                        t.documentDelete;
                                        var y = t.documentDelete;
                                        y.document;
                                        var p = ur(e, y.document),
                                            m = y.readTime ? nr(y.readTime) : te.min(),
                                            g = ze.newNoDocument(p, m),
                                            k = y.removedTargetIds || [];
                                        n = new Kn([], k, g.key, g)
                                    } else if ("documentRemove" in t) {
                                        t.documentRemove;
                                        var w = t.documentRemove;
                                        w.document;
                                        var b = ur(e, w.document),
                                            x = w.removedTargetIds || [];
                                        n = new Kn([], x, b, null)
                                    } else {
                                        if (!("filter" in t)) return M();
                                        t.filter;
                                        var I = t.filter;
                                        I.targetId;
                                        var E = I.count || 0,
                                            T = new bn(E),
                                            S = I.targetId;
                                        n = new Gn(S, T)
                                    }
                                    return n
                                }(this.M, e),
                                n = function(e) {
                                    if (!("targetChange" in e)) return te.min();
                                    var t = e.targetChange;
                                    return t.targetIds && t.targetIds.length ? te.min() : t.readTime ? nr(t.readTime) : te.min()
                                }(e);
                            return this.listener.Ko(t, n)
                        }
                    }, {
                        key: "Qo",
                        value: function(e) {
                            var t = {};
                            t.database = cr(this.M), t.addTarget = function(e, t) {
                                var n, r = t.target;
                                return (n = ut(r) ? {
                                    documents: pr(e, r)
                                } : {
                                    query: mr(e, r)
                                }).targetId = t.targetId, t.resumeToken.approximateByteSize() > 0 ? n.resumeToken = er(e, t.resumeToken) : t.snapshotVersion.compareTo(te.min()) > 0 && (n.readTime = Xn(e, t.snapshotVersion.toTimestamp())), n
                            }(this.M, e);
                            var n = function(e, t) {
                                var n = function(e, t) {
                                    switch (t) {
                                        case 0:
                                            return null;
                                        case 1:
                                            return "existence-filter-mismatch";
                                        case 2:
                                            return "limbo-document";
                                        default:
                                            return M()
                                    }
                                }(0, t.purpose);
                                return null == n ? null : {
                                    "goog-listen-tags": n
                                }
                            }(this.M, e);
                            n && (t.labels = n), this.Oo(t)
                        }
                    }, {
                        key: "jo",
                        value: function(e) {
                            var t = {};
                            t.database = cr(this.M), t.removeTarget = e, this.Oo(t)
                        }
                    }]), n
                }(Vu),
                Fu = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i, a, u, o) {
                        var s;
                        return (0, f.Z)(this, n), (s = t.call(this, e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", r, i, a, o)).M = u, s.Wo = !1, s
                    }
                    return (0, h.Z)(n, [{
                        key: "zo",
                        get: function() {
                            return this.Wo
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.Wo = !1, this.lastStreamToken = void 0, (0, i.Z)((0, c.Z)(n.prototype), "start", this).call(this)
                        }
                    }, {
                        key: "Bo",
                        value: function() {
                            this.Wo && this.Ho([])
                        }
                    }, {
                        key: "Go",
                        value: function(e, t) {
                            return this.bo.ho("Write", e, t)
                        }
                    }, {
                        key: "onMessage",
                        value: function(e) {
                            if (R(!!e.streamToken), this.lastStreamToken = e.streamToken, this.Wo) {
                                this.So.reset();
                                var t = function(e, t) {
                                        return e && e.length > 0 ? (R(void 0 !== t), e.map((function(e) {
                                            return function(e, t) {
                                                var n = e.updateTime ? nr(e.updateTime) : nr(t);
                                                return n.isEqual(te.min()) && (n = nr(t)), new nn(n, e.transformResults || [])
                                            }(e, t)
                                        }))) : []
                                    }(e.writeResults, e.commitTime),
                                    n = nr(e.commitTime);
                                return this.listener.Jo(n, t)
                            }
                            return R(!e.writeResults || 0 === e.writeResults.length), this.Wo = !0, this.listener.Yo()
                        }
                    }, {
                        key: "Xo",
                        value: function() {
                            var e = {};
                            e.database = cr(this.M), this.Oo(e)
                        }
                    }, {
                        key: "Ho",
                        value: function(e) {
                            var t = this,
                                n = {
                                    streamToken: this.lastStreamToken,
                                    writes: e.map((function(e) {
                                        return vr(t.M, e)
                                    }))
                                };
                            this.Oo(n)
                        }
                    }]), n
                }(Vu),
                Pu = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i, a) {
                        var u;
                        return (0, f.Z)(this, n), (u = t.call(this)).authCredentials = e, u.appCheckCredentials = r, u.bo = i, u.M = a, u.Zo = !1, u
                    }
                    return (0, h.Z)(n, [{
                        key: "tu",
                        value: function() {
                            if (this.Zo) throw new P(F.FAILED_PRECONDITION, "The client has already been terminated.")
                        }
                    }, {
                        key: "ro",
                        value: function(e, t, n) {
                            var r = this;
                            return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((function(i) {
                                var u = (0, a.Z)(i, 2),
                                    o = u[0],
                                    s = u[1];
                                return r.bo.ro(e, t, n, o, s)
                            })).catch((function(e) {
                                throw "FirebaseError" === e.name ? (e.code === F.UNAUTHENTICATED && (r.authCredentials.invalidateToken(), r.appCheckCredentials.invalidateToken()), e) : new P(F.UNKNOWN, e.toString())
                            }))
                        }
                    }, {
                        key: "co",
                        value: function(e, t, n) {
                            var r = this;
                            return this.tu(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((function(i) {
                                var u = (0, a.Z)(i, 2),
                                    o = u[0],
                                    s = u[1];
                                return r.bo.co(e, t, n, o, s)
                            })).catch((function(e) {
                                throw "FirebaseError" === e.name ? (e.code === F.UNAUTHENTICATED && (r.authCredentials.invalidateToken(), r.appCheckCredentials.invalidateToken()), e) : new P(F.UNKNOWN, e.toString())
                            }))
                        }
                    }, {
                        key: "terminate",
                        value: function() {
                            this.Zo = !0
                        }
                    }]), n
                }(function() {
                    return (0, h.Z)((function e() {
                        (0, f.Z)(this, e)
                    }))
                }()),
                Ou = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.asyncQueue = t, this.onlineStateHandler = n, this.state = "Unknown", this.eu = 0, this.nu = null, this.su = !0
                    }
                    return (0, h.Z)(e, [{
                        key: "iu",
                        value: function() {
                            var e = this;
                            0 === this.eu && (this.ru("Unknown"), this.nu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (function() {
                                return e.nu = null, e.ou("Backend didn't respond within 10 seconds."), e.ru("Offline"), Promise.resolve()
                            })))
                        }
                    }, {
                        key: "uu",
                        value: function(e) {
                            "Online" === this.state ? this.ru("Unknown") : (this.eu++, this.eu >= 1 && (this.au(), this.ou("Connection failed 1 times. Most recent error: ".concat(e.toString())), this.ru("Offline")))
                        }
                    }, {
                        key: "set",
                        value: function(e) {
                            this.au(), this.eu = 0, "Online" === e && (this.su = !1), this.ru(e)
                        }
                    }, {
                        key: "ru",
                        value: function(e) {
                            e !== this.state && (this.state = e, this.onlineStateHandler(e))
                        }
                    }, {
                        key: "ou",
                        value: function(e) {
                            var t = "Could not reach Cloud Firestore backend. ".concat(e, "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");
                            this.su ? (D(t), this.su = !1) : N("OnlineStateTracker", t)
                        }
                    }, {
                        key: "au",
                        value: function() {
                            null !== this.nu && (this.nu.cancel(), this.nu = null)
                        }
                    }]), e
                }(),
                qu = (0, h.Z)((function e(t, n, r, i, a) {
                    var o = this;
                    (0, f.Z)(this, e), this.localStore = t, this.datastore = n, this.asyncQueue = r, this.remoteSyncer = {}, this.cu = [], this.hu = new Map, this.lu = new Set, this.fu = [], this.du = a, this.du.Br((function(e) {
                        r.enqueueAndForget((0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = Ju(o), !e.t0) {
                                            e.next = 5;
                                            break
                                        }
                                        return N("RemoteStore", "Restarting streams for network reachability change."), e.next = 5,
                                            function() {
                                                var e = (0, u.Z)(v().mark((function e(t) {
                                                    var n;
                                                    return v().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return (n = L(t)).lu.add(4), e.next = 4, Ku(n);
                                                            case 4:
                                                                return n._u.set("Unknown"), n.lu.delete(4), e.next = 8, Uu(n);
                                                            case 8:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()(o);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    })), this._u = new Ou(r, i)
                }));

            function Uu(e) {
                return Bu.apply(this, arguments)
            }

            function Bu() {
                return (Bu = (0, u.Z)(v().mark((function e(t) {
                    var n, r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!Ju(t)) {
                                    e.next = 18;
                                    break
                                }
                                n = w(t.fu), e.prev = 2, n.s();
                            case 4:
                                if ((r = n.n()).done) {
                                    e.next = 10;
                                    break
                                }
                                return i = r.value, e.next = 8, i(!0);
                            case 8:
                                e.next = 4;
                                break;
                            case 10:
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), n.e(e.t0);
                            case 15:
                                return e.prev = 15, n.f(), e.finish(15);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12, 15, 18]
                    ])
                })))).apply(this, arguments)
            }

            function Ku(e) {
                return Gu.apply(this, arguments)
            }

            function Gu() {
                return (Gu = (0, u.Z)(v().mark((function e(t) {
                    var n, r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = w(t.fu), e.prev = 1, n.s();
                            case 3:
                                if ((r = n.n()).done) {
                                    e.next = 9;
                                    break
                                }
                                return i = r.value, e.next = 7, i(!1);
                            case 7:
                                e.next = 3;
                                break;
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1), n.e(e.t0);
                            case 14:
                                return e.prev = 14, n.f(), e.finish(14);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11, 14, 17]
                    ])
                })))).apply(this, arguments)
            }

            function ju(e, t) {
                var n = L(e);
                n.hu.has(t.targetId) || (n.hu.set(t.targetId, t), Yu(n) ? Hu(n) : _o(n).Co() && Qu(n, t))
            }

            function zu(e, t) {
                var n = L(e),
                    r = _o(n);
                n.hu.delete(t), r.Co() && Wu(n, t), 0 === n.hu.size && (r.Co() ? r.ko() : Ju(n) && n._u.set("Unknown"))
            }

            function Qu(e, t) {
                e.wu.Z(t.targetId), _o(e).Qo(t)
            }

            function Wu(e, t) {
                e.wu.Z(t), _o(e).jo(t)
            }

            function Hu(e) {
                e.wu = new Qn({
                    getRemoteKeysForTarget: function(t) {
                        return e.remoteSyncer.getRemoteKeysForTarget(t)
                    },
                    Et: function(t) {
                        return e.hu.get(t) || null
                    }
                }), _o(e).start(), e._u.iu()
            }

            function Yu(e) {
                return Ju(e) && !_o(e).Do() && e.hu.size > 0
            }

            function Ju(e) {
                return 0 === L(e).lu.size
            }

            function $u(e) {
                e.wu = void 0
            }

            function Xu(e) {
                return eo.apply(this, arguments)
            }

            function eo() {
                return (eo = (0, u.Z)(v().mark((function e(t) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t.hu.forEach((function(e, n) {
                                    Qu(t, e)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function to(e, t) {
                return no.apply(this, arguments)
            }

            function no() {
                return (no = (0, u.Z)(v().mark((function e(t, n) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                $u(t), Yu(t) ? (t._u.uu(n), Hu(t)) : t._u.set("Unknown");
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ro(e, t, n) {
                return io.apply(this, arguments)
            }

            function io() {
                return io = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t._u.set("Online"), !(n instanceof jn && 2 === n.state && n.cause)) {
                                    e.next = 13;
                                    break
                                }
                                return e.prev = 1, e.next = 4,
                                    function() {
                                        var e = (0, u.Z)(v().mark((function e(t, n) {
                                            var r, i, a, u;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        r = n.cause, i = w(n.targetIds), e.prev = 2, i.s();
                                                    case 4:
                                                        if ((a = i.n()).done) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        if (u = a.value, e.t0 = t.hu.has(u), !e.t0) {
                                                            e.next = 12;
                                                            break
                                                        }
                                                        return e.next = 10, t.remoteSyncer.rejectListen(u, r);
                                                    case 10:
                                                        t.hu.delete(u), t.wu.removeTarget(u);
                                                    case 12:
                                                        e.next = 4;
                                                        break;
                                                    case 14:
                                                        e.next = 19;
                                                        break;
                                                    case 16:
                                                        e.prev = 16, e.t1 = e.catch(2), i.e(e.t1);
                                                    case 19:
                                                        return e.prev = 19, i.f(), e.finish(19);
                                                    case 22:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [2, 16, 19, 22]
                                            ])
                                        })));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()(t, n);
                            case 4:
                                e.next = 11;
                                break;
                            case 6:
                                return e.prev = 6, e.t0 = e.catch(1), N("RemoteStore", "Failed to remove targets %s: %s ", n.targetIds.join(","), e.t0), e.next = 11, ao(t, e.t0);
                            case 11:
                            case 22:
                                e.next = 29;
                                break;
                            case 13:
                                if (n instanceof Kn ? t.wu.ut(n) : n instanceof Gn ? t.wu._t(n) : t.wu.ht(n), r.isEqual(te.min())) {
                                    e.next = 29;
                                    break
                                }
                                return e.prev = 14, e.next = 17, Ga(t.localStore);
                            case 17:
                                if (i = e.sent, e.t1 = r.compareTo(i) >= 0, !e.t1) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 22,
                                    function(e, t) {
                                        var n = e.wu.yt(t);
                                        return n.targetChanges.forEach((function(n, r) {
                                            if (n.resumeToken.approximateByteSize() > 0) {
                                                var i = e.hu.get(r);
                                                i && e.hu.set(r, i.withResumeToken(n.resumeToken, t))
                                            }
                                        })), n.targetMismatches.forEach((function(t) {
                                            var n = e.hu.get(t);
                                            if (n) {
                                                e.hu.set(t, n.withResumeToken(fe.EMPTY_BYTE_STRING, n.snapshotVersion)), Wu(e, t);
                                                var r = new mi(n.target, t, 1, n.sequenceNumber);
                                                Qu(e, r)
                                            }
                                        })), e.remoteSyncer.applyRemoteEvent(n)
                                    }(t, r);
                            case 24:
                                return e.prev = 24, e.t2 = e.catch(14), N("RemoteStore", "Failed to raise snapshot:", e.t2), e.next = 29, ao(t, e.t2);
                            case 29:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 6],
                        [14, 24]
                    ])
                }))), io.apply(this, arguments)
            }

            function ao(e, t, n) {
                return uo.apply(this, arguments)
            }

            function uo() {
                return (uo = (0, u.Z)(v().mark((function e(t, n, r) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (oi(n)) {
                                    e.next = 2;
                                    break
                                }
                                throw n;
                            case 2:
                                return t.lu.add(1), e.next = 5, Ku(t);
                            case 5:
                                t._u.set("Offline"), r || (r = function() {
                                    return Ga(t.localStore)
                                }), t.asyncQueue.enqueueRetryable((0, u.Z)(v().mark((function e() {
                                    return v().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return N("RemoteStore", "Retrying IndexedDB access"), e.next = 3, r();
                                            case 3:
                                                return t.lu.delete(1), e.next = 6, Uu(t);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function oo(e, t) {
                return t().catch((function(n) {
                    return ao(e, n, t)
                }))
            }

            function so(e) {
                return co.apply(this, arguments)
            }

            function co() {
                return (co = (0, u.Z)(v().mark((function e(t) {
                    var n, r, i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = L(t), r = Ao(n), i = n.cu.length > 0 ? n.cu[n.cu.length - 1].batchId : -1;
                            case 2:
                                if (!lo(n)) {
                                    e.next = 19;
                                    break
                                }
                                return e.prev = 3, e.next = 6, Qa(n.localStore, i);
                            case 6:
                                if (null !== (a = e.sent)) {
                                    e.next = 10;
                                    break
                                }
                                return 0 === n.cu.length && r.ko(), e.abrupt("break", 19);
                            case 10:
                                i = a.batchId, fo(n, a), e.next = 17;
                                break;
                            case 13:
                                return e.prev = 13, e.t0 = e.catch(3), e.next = 17, ao(n, e.t0);
                            case 17:
                                e.next = 2;
                                break;
                            case 19:
                                ho(n) && vo(n);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 13]
                    ])
                })))).apply(this, arguments)
            }

            function lo(e) {
                return Ju(e) && e.cu.length < 10
            }

            function fo(e, t) {
                e.cu.push(t);
                var n = Ao(e);
                n.Co() && n.zo && n.Ho(t.mutations)
            }

            function ho(e) {
                return Ju(e) && !Ao(e).Do() && e.cu.length > 0
            }

            function vo(e) {
                Ao(e).start()
            }

            function yo(e) {
                return po.apply(this, arguments)
            }

            function po() {
                return (po = (0, u.Z)(v().mark((function e(t) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                Ao(t).Xo();
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function mo(e) {
                return go.apply(this, arguments)
            }

            function go() {
                return (go = (0, u.Z)(v().mark((function e(t) {
                    var n, r, i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = Ao(t), r = w(t.cu);
                                try {
                                    for (r.s(); !(i = r.n()).done;) a = i.value, n.Ho(a.mutations)
                                } catch (u) {
                                    r.e(u)
                                } finally {
                                    r.f()
                                }
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ko(e, t, n) {
                return wo.apply(this, arguments)
            }

            function wo() {
                return (wo = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = t.cu.shift(), a = yi.from(i, n, r), e.next = 3, oo(t, (function() {
                                    return t.remoteSyncer.applySuccessfulWrite(a)
                                }));
                            case 3:
                                return e.next = 5, so(t);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function bo(e, t) {
                return xo.apply(this, arguments)
            }

            function xo() {
                return xo = (0, u.Z)(v().mark((function e(t, n) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = n && Ao(t).zo, !e.t0) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4,
                                    function() {
                                        var e = (0, u.Z)(v().mark((function e(t, n) {
                                            var r, i;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!xn(i = n.code) || i === F.ABORTED) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return r = t.cu.shift(), Ao(t).No(), e.next = 5, oo(t, (function() {
                                                            return t.remoteSyncer.rejectFailedWrite(r.batchId, n)
                                                        }));
                                                    case 5:
                                                        return e.next = 7, so(t);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()(t, n);
                            case 4:
                                ho(t) && vo(t);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), xo.apply(this, arguments)
            }

            function Io(e, t) {
                return Eo.apply(this, arguments)
            }

            function Eo() {
                return (Eo = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return (r = L(t)).asyncQueue.verifyOperationInProgress(), N("RemoteStore", "RemoteStore received new credentials"), i = Ju(r), r.lu.add(3), e.next = 6, Ku(r);
                            case 6:
                                return i && r._u.set("Unknown"), e.next = 9, r.remoteSyncer.handleCredentialChange(n);
                            case 9:
                                return r.lu.delete(3), e.next = 12, Uu(r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function To(e, t) {
                return So.apply(this, arguments)
            }

            function So() {
                return (So = (0, u.Z)(v().mark((function e(t, n) {
                    var r;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = L(t), !n) {
                                    e.next = 7;
                                    break
                                }
                                return r.lu.delete(2), e.next = 5, Uu(r);
                            case 5:
                                e.next = 13;
                                break;
                            case 7:
                                if (e.t0 = n, e.t0) {
                                    e.next = 13;
                                    break
                                }
                                return r.lu.add(2), e.next = 12, Ku(r);
                            case 12:
                                r._u.set("Unknown");
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _o(e) {
                return e.mu || (e.mu = function(e, t, n) {
                    var r = L(e);
                    return r.tu(), new Lu(t, r.bo, r.authCredentials, r.appCheckCredentials, r.M, n)
                }(e.datastore, e.asyncQueue, {
                    zr: Xu.bind(null, e),
                    Jr: to.bind(null, e),
                    Ko: ro.bind(null, e)
                }), e.fu.push(function() {
                    var t = (0, u.Z)(v().mark((function t(n) {
                        return v().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!n) {
                                        t.next = 4;
                                        break
                                    }
                                    e.mu.No(), Yu(e) ? Hu(e) : e._u.set("Unknown"), t.next = 7;
                                    break;
                                case 4:
                                    return t.next = 6, e.mu.stop();
                                case 6:
                                    $u(e);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())), e.mu
            }

            function Ao(e) {
                return e.gu || (e.gu = function(e, t, n) {
                    var r = L(e);
                    return r.tu(), new Fu(t, r.bo, r.authCredentials, r.appCheckCredentials, r.M, n)
                }(e.datastore, e.asyncQueue, {
                    zr: yo.bind(null, e),
                    Jr: bo.bind(null, e),
                    Yo: mo.bind(null, e),
                    Jo: ko.bind(null, e)
                }), e.fu.push(function() {
                    var t = (0, u.Z)(v().mark((function t(n) {
                        return v().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!n) {
                                        t.next = 6;
                                        break
                                    }
                                    return e.gu.No(), t.next = 4, so(e);
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    return t.next = 8, e.gu.stop();
                                case 8:
                                    e.cu.length > 0 && (N("RemoteStore", "Stopping write stream with ".concat(e.cu.length, " pending writes")), e.cu = []);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())), e.gu
            }
            var No = function() {
                function e(t, n, r, i, a) {
                    (0, f.Z)(this, e), this.asyncQueue = t, this.timerId = n, this.targetTimeMs = r, this.op = i, this.removalCallback = a, this.deferred = new O, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((function(e) {}))
                }
                return (0, h.Z)(e, [{
                    key: "start",
                    value: function(e) {
                        var t = this;
                        this.timerHandle = setTimeout((function() {
                            return t.handleDelayElapsed()
                        }), e)
                    }
                }, {
                    key: "skipDelay",
                    value: function() {
                        return this.handleDelayElapsed()
                    }
                }, {
                    key: "cancel",
                    value: function(e) {
                        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new P(F.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))))
                    }
                }, {
                    key: "handleDelayElapsed",
                    value: function() {
                        var e = this;
                        this.asyncQueue.enqueueAndForget((function() {
                            return null !== e.timerHandle ? (e.clearTimeout(), e.op().then((function(t) {
                                return e.deferred.resolve(t)
                            }))) : Promise.resolve()
                        }))
                    }
                }, {
                    key: "clearTimeout",
                    value: function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        }, t
                    }((function() {
                        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null)
                    }))
                }], [{
                    key: "createAndSchedule",
                    value: function(t, n, r, i, a) {
                        var u = new e(t, n, Date.now() + r, i, a);
                        return u.start(r), u
                    }
                }]), e
            }();

            function Do(e, t) {
                if (D("AsyncQueue", "".concat(t, ": ").concat(e)), oi(e)) return new P(F.UNAVAILABLE, "".concat(t, ": ").concat(e));
                throw e
            }
            var Co = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.comparator = t ? function(e, n) {
                            return t(e, n) || Ee.comparator(e.key, n.key)
                        } : function(e, t) {
                            return Ee.comparator(e.key, t.key)
                        }, this.keyedMap = Rn(), this.sortedSet = new Tn(this.comparator)
                    }
                    return (0, h.Z)(e, [{
                        key: "has",
                        value: function(e) {
                            return null != this.keyedMap.get(e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return this.keyedMap.get(e)
                        }
                    }, {
                        key: "first",
                        value: function() {
                            return this.sortedSet.minKey()
                        }
                    }, {
                        key: "last",
                        value: function() {
                            return this.sortedSet.maxKey()
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return this.sortedSet.isEmpty()
                        }
                    }, {
                        key: "indexOf",
                        value: function(e) {
                            var t = this.keyedMap.get(e);
                            return t ? this.sortedSet.indexOf(t) : -1
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.sortedSet.size
                        }
                    }, {
                        key: "forEach",
                        value: function(e) {
                            this.sortedSet.inorderTraversal((function(t, n) {
                                return e(t), !1
                            }))
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            var t = this.delete(e.key);
                            return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null))
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            var t = this.get(e);
                            return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            if (!(t instanceof e)) return !1;
                            if (this.size !== t.size) return !1;
                            for (var n = this.sortedSet.getIterator(), r = t.sortedSet.getIterator(); n.hasNext();) {
                                var i = n.getNext().key,
                                    a = r.getNext().key;
                                if (!i.isEqual(a)) return !1
                            }
                            return !0
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e = [];
                            return this.forEach((function(t) {
                                e.push(t.toString())
                            })), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                        }
                    }, {
                        key: "copy",
                        value: function(t, n) {
                            var r = new e;
                            return r.comparator = this.comparator, r.keyedMap = t, r.sortedSet = n, r
                        }
                    }], [{
                        key: "emptySet",
                        value: function(t) {
                            return new e(t.comparator)
                        }
                    }]), e
                }(),
                Zo = function() {
                    function e() {
                        (0, f.Z)(this, e), this.yu = new Tn(Ee.comparator)
                    }
                    return (0, h.Z)(e, [{
                        key: "track",
                        value: function(e) {
                            var t = e.doc.key,
                                n = this.yu.get(t);
                            n ? 0 !== e.type && 3 === n.type ? this.yu = this.yu.insert(t, e) : 3 === e.type && 1 !== n.type ? this.yu = this.yu.insert(t, {
                                type: n.type,
                                doc: e.doc
                            }) : 2 === e.type && 2 === n.type ? this.yu = this.yu.insert(t, {
                                type: 2,
                                doc: e.doc
                            }) : 2 === e.type && 0 === n.type ? this.yu = this.yu.insert(t, {
                                type: 0,
                                doc: e.doc
                            }) : 1 === e.type && 0 === n.type ? this.yu = this.yu.remove(t) : 1 === e.type && 2 === n.type ? this.yu = this.yu.insert(t, {
                                type: 1,
                                doc: n.doc
                            }) : 0 === e.type && 1 === n.type ? this.yu = this.yu.insert(t, {
                                type: 2,
                                doc: e.doc
                            }) : M() : this.yu = this.yu.insert(t, e)
                        }
                    }, {
                        key: "pu",
                        value: function() {
                            var e = [];
                            return this.yu.inorderTraversal((function(t, n) {
                                e.push(n)
                            })), e
                        }
                    }]), e
                }(),
                Mo = function() {
                    function e(t, n, r, i, a, u, o, s) {
                        (0, f.Z)(this, e), this.query = t, this.docs = n, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = a, this.fromCache = u, this.syncStateChanged = o, this.excludesMetadataChanges = s
                    }
                    return (0, h.Z)(e, [{
                        key: "hasPendingWrites",
                        get: function() {
                            return !this.mutatedKeys.isEmpty()
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            if (!(this.fromCache === e.fromCache && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && Mt(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return !1;
                            var t = this.docChanges,
                                n = e.docChanges;
                            if (t.length !== n.length) return !1;
                            for (var r = 0; r < t.length; r++)
                                if (t[r].type !== n[r].type || !t[r].doc.isEqual(n[r].doc)) return !1;
                            return !0
                        }
                    }], [{
                        key: "fromInitialDocuments",
                        value: function(t, n, r, i) {
                            var a = [];
                            return n.forEach((function(e) {
                                a.push({
                                    type: 0,
                                    doc: e
                                })
                            })), new e(t, n, Co.emptySet(n), a, r, i, !0, !1)
                        }
                    }]), e
                }(),
                Ro = (0, h.Z)((function e() {
                    (0, f.Z)(this, e), this.Iu = void 0, this.listeners = []
                })),
                Vo = (0, h.Z)((function e() {
                    (0, f.Z)(this, e), this.queries = new En((function(e) {
                        return Rt(e)
                    }), Mt), this.onlineState = "Unknown", this.Tu = new Set
                }));

            function Lo(e, t) {
                return Fo.apply(this, arguments)
            }

            function Fo() {
                return (Fo = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a, u, o;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = L(t), i = n.query, a = !1, (u = r.queries.get(i)) || (a = !0, u = new Ro), !a) {
                                    e.next = 13;
                                    break
                                }
                                return e.prev = 3, e.next = 6, r.onListen(i);
                            case 6:
                                u.Iu = e.sent, e.next = 13;
                                break;
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(3), o = Do(e.t0, "Initialization of query '".concat(Vt(n.query), "' failed")), e.abrupt("return", void n.onError(o));
                            case 13:
                                r.queries.set(i, u), u.listeners.push(n), n.Eu(r.onlineState), u.Iu && n.Au(u.Iu) && Bo(r);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 9]
                    ])
                })))).apply(this, arguments)
            }

            function Po(e, t) {
                return Oo.apply(this, arguments)
            }

            function Oo() {
                return (Oo = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a, u, o;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = L(t), i = n.query, a = !1, (u = r.queries.get(i)) && (o = u.listeners.indexOf(n)) >= 0 && (u.listeners.splice(o, 1), a = 0 === u.listeners.length), !a) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", (r.queries.delete(i), r.onUnlisten(i)));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function qo(e, t) {
                var n, r = L(e),
                    i = !1,
                    a = w(t);
                try {
                    for (a.s(); !(n = a.n()).done;) {
                        var u = n.value,
                            o = u.query,
                            s = r.queries.get(o);
                        if (s) {
                            var c, l = w(s.listeners);
                            try {
                                for (l.s(); !(c = l.n()).done;) {
                                    c.value.Au(u) && (i = !0)
                                }
                            } catch (f) {
                                l.e(f)
                            } finally {
                                l.f()
                            }
                            s.Iu = u
                        }
                    }
                } catch (f) {
                    a.e(f)
                } finally {
                    a.f()
                }
                i && Bo(r)
            }

            function Uo(e, t, n) {
                var r = L(e),
                    i = r.queries.get(t);
                if (i) {
                    var a, u = w(i.listeners);
                    try {
                        for (u.s(); !(a = u.n()).done;) {
                            a.value.onError(n)
                        }
                    } catch (o) {
                        u.e(o)
                    } finally {
                        u.f()
                    }
                }
                r.queries.delete(t)
            }

            function Bo(e) {
                e.Tu.forEach((function(e) {
                    e.next()
                }))
            }
            var Ko = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.query = t, this.Ru = n, this.bu = !1, this.Pu = null, this.onlineState = "Unknown", this.options = r || {}
                    }
                    return (0, h.Z)(e, [{
                        key: "Au",
                        value: function(e) {
                            if (!this.options.includeMetadataChanges) {
                                var t, n = [],
                                    r = w(e.docChanges);
                                try {
                                    for (r.s(); !(t = r.n()).done;) {
                                        var i = t.value;
                                        3 !== i.type && n.push(i)
                                    }
                                } catch (u) {
                                    r.e(u)
                                } finally {
                                    r.f()
                                }
                                e = new Mo(e.query, e.docs, e.oldDocs, n, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0)
                            }
                            var a = !1;
                            return this.bu ? this.Vu(e) && (this.Ru.next(e), a = !0) : this.vu(e, this.onlineState) && (this.Su(e), a = !0), this.Pu = e, a
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            this.Ru.error(e)
                        }
                    }, {
                        key: "Eu",
                        value: function(e) {
                            this.onlineState = e;
                            var t = !1;
                            return this.Pu && !this.bu && this.vu(this.Pu, e) && (this.Su(this.Pu), t = !0), t
                        }
                    }, {
                        key: "vu",
                        value: function(e, t) {
                            if (!e.fromCache) return !0;
                            var n = "Offline" !== t;
                            return !(this.options.Du && n || e.docs.isEmpty() && "Offline" !== t)
                        }
                    }, {
                        key: "Vu",
                        value: function(e) {
                            if (e.docChanges.length > 0) return !0;
                            var t = this.Pu && this.Pu.hasPendingWrites !== e.hasPendingWrites;
                            return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges
                        }
                    }, {
                        key: "Su",
                        value: function(e) {
                            e = Mo.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache), this.bu = !0, this.Ru.next(e)
                        }
                    }]), e
                }(),
                Go = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.payload = t, this.byteLength = n
                    }
                    return (0, h.Z)(e, [{
                        key: "Cu",
                        value: function() {
                            return "metadata" in this.payload
                        }
                    }]), e
                }(),
                jo = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.M = t
                    }
                    return (0, h.Z)(e, [{
                        key: "li",
                        value: function(e) {
                            return ur(this.M, e)
                        }
                    }, {
                        key: "fi",
                        value: function(e) {
                            return e.metadata.exists ? hr(this.M, e.document, !1) : ze.newNoDocument(this.li(e.metadata.name), this.di(e.metadata.readTime))
                        }
                    }, {
                        key: "di",
                        value: function(e) {
                            return nr(e)
                        }
                    }]), e
                }(),
                zo = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.xu = t, this.localStore = n, this.M = r, this.queries = [], this.documents = [], this.collectionGroups = new Set, this.progress = Qo(t)
                    }
                    var t;
                    return (0, h.Z)(e, [{
                        key: "Nu",
                        value: function(e) {
                            this.progress.bytesLoaded += e.byteLength;
                            var t = this.progress.documentsLoaded;
                            if (e.payload.namedQuery) this.queries.push(e.payload.namedQuery);
                            else if (e.payload.documentMetadata) {
                                this.documents.push({
                                    metadata: e.payload.documentMetadata
                                }), e.payload.documentMetadata.exists || ++t;
                                var n = ue.fromString(e.payload.documentMetadata.name);
                                this.collectionGroups.add(n.get(n.length - 2))
                            } else e.payload.document && (this.documents[this.documents.length - 1].document = e.payload.document, ++t);
                            return t !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = t, Object.assign({}, this.progress)) : null
                        }
                    }, {
                        key: "ku",
                        value: function(e) {
                            var t, n = new Map,
                                r = new jo(this.M),
                                i = w(e);
                            try {
                                for (i.s(); !(t = i.n()).done;) {
                                    var a = t.value;
                                    if (a.metadata.queries) {
                                        var u, o = r.li(a.metadata.name),
                                            s = w(a.metadata.queries);
                                        try {
                                            for (s.s(); !(u = s.n()).done;) {
                                                var c = u.value,
                                                    l = (n.get(c) || Pn()).add(o);
                                                n.set(c, l)
                                            }
                                        } catch (f) {
                                            s.e(f)
                                        } finally {
                                            s.f()
                                        }
                                    }
                                }
                            } catch (f) {
                                i.e(f)
                            } finally {
                                i.f()
                            }
                            return n
                        }
                    }, {
                        key: "complete",
                        value: (t = (0, u.Z)(v().mark((function e() {
                            var t, n, r, i, a;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, tu(this.localStore, new jo(this.M), this.documents, this.xu.id);
                                    case 2:
                                        t = e.sent, n = this.ku(this.documents), r = w(this.queries), e.prev = 5, r.s();
                                    case 7:
                                        if ((i = r.n()).done) {
                                            e.next = 13;
                                            break
                                        }
                                        return a = i.value, e.next = 11, ru(this.localStore, a, n.get(a.name));
                                    case 11:
                                        e.next = 7;
                                        break;
                                    case 13:
                                        e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(5), r.e(e.t0);
                                    case 18:
                                        return e.prev = 18, r.f(), e.finish(18);
                                    case 21:
                                        return e.abrupt("return", (this.progress.taskState = "Success", {
                                            progress: this.progress,
                                            Mu: this.collectionGroups,
                                            Ou: t
                                        }));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [5, 15, 18, 21]
                            ])
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }();

            function Qo(e) {
                return {
                    taskState: "Running",
                    documentsLoaded: 0,
                    bytesLoaded: 0,
                    totalDocuments: e.totalDocuments,
                    totalBytes: e.totalBytes
                }
            }
            var Wo = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this.key = t
                })),
                Ho = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this.key = t
                })),
                Yo = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.query = t, this.Fu = n, this.$u = null, this.current = !1, this.Bu = Pn(), this.mutatedKeys = Pn(), this.Lu = Pt(t), this.Uu = new Co(this.Lu)
                    }
                    return (0, h.Z)(e, [{
                        key: "qu",
                        get: function() {
                            return this.Fu
                        }
                    }, {
                        key: "Gu",
                        value: function(e, t) {
                            var n = this,
                                r = t ? t.Ku : new Zo,
                                i = t ? t.Uu : this.Uu,
                                a = t ? t.mutatedKeys : this.mutatedKeys,
                                u = i,
                                o = !1,
                                s = Tt(this.query) && i.size === this.query.limit ? i.last() : null,
                                c = St(this.query) && i.size === this.query.limit ? i.first() : null;
                            if (e.inorderTraversal((function(e, t) {
                                    var l = i.get(e),
                                        f = Lt(n.query, t) ? t : null,
                                        h = !!l && n.mutatedKeys.has(l.key),
                                        d = !!f && (f.hasLocalMutations || n.mutatedKeys.has(f.key) && f.hasCommittedMutations),
                                        v = !1;
                                    l && f ? l.data.isEqual(f.data) ? h !== d && (r.track({
                                        type: 3,
                                        doc: f
                                    }), v = !0) : n.Qu(l, f) || (r.track({
                                        type: 2,
                                        doc: f
                                    }), v = !0, (s && n.Lu(f, s) > 0 || c && n.Lu(f, c) < 0) && (o = !0)) : !l && f ? (r.track({
                                        type: 0,
                                        doc: f
                                    }), v = !0) : l && !f && (r.track({
                                        type: 1,
                                        doc: l
                                    }), v = !0, (s || c) && (o = !0)), v && (f ? (u = u.add(f), a = d ? a.add(e) : a.delete(e)) : (u = u.delete(e), a = a.delete(e)))
                                })), Tt(this.query) || St(this.query))
                                for (; u.size > this.query.limit;) {
                                    var l = Tt(this.query) ? u.last() : u.first();
                                    u = u.delete(l.key), a = a.delete(l.key), r.track({
                                        type: 1,
                                        doc: l
                                    })
                                }
                            return {
                                Uu: u,
                                Ku: r,
                                ei: o,
                                mutatedKeys: a
                            }
                        }
                    }, {
                        key: "Qu",
                        value: function(e, t) {
                            return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
                        }
                    }, {
                        key: "applyChanges",
                        value: function(e, t, n) {
                            var r = this,
                                i = this.Uu;
                            this.Uu = e.Uu, this.mutatedKeys = e.mutatedKeys;
                            var a = e.Ku.pu();
                            a.sort((function(e, t) {
                                return function(e, t) {
                                    var n = function(e) {
                                        switch (e) {
                                            case 0:
                                                return 1;
                                            case 2:
                                            case 3:
                                                return 2;
                                            case 1:
                                                return 0;
                                            default:
                                                return M()
                                        }
                                    };
                                    return n(e) - n(t)
                                }(e.type, t.type) || r.Lu(e.doc, t.doc)
                            })), this.ju(n);
                            var u = t ? this.Wu() : [],
                                o = 0 === this.Bu.size && this.current ? 1 : 0,
                                s = o !== this.$u;
                            return this.$u = o, 0 !== a.length || s ? {
                                snapshot: new Mo(this.query, e.Uu, i, a, e.mutatedKeys, 0 === o, s, !1),
                                zu: u
                            } : {
                                zu: u
                            }
                        }
                    }, {
                        key: "Eu",
                        value: function(e) {
                            return this.current && "Offline" === e ? (this.current = !1, this.applyChanges({
                                Uu: this.Uu,
                                Ku: new Zo,
                                mutatedKeys: this.mutatedKeys,
                                ei: !1
                            }, !1)) : {
                                zu: []
                            }
                        }
                    }, {
                        key: "Hu",
                        value: function(e) {
                            return !this.Fu.has(e) && !!this.Uu.has(e) && !this.Uu.get(e).hasLocalMutations
                        }
                    }, {
                        key: "ju",
                        value: function(e) {
                            var t = this;
                            e && (e.addedDocuments.forEach((function(e) {
                                return t.Fu = t.Fu.add(e)
                            })), e.modifiedDocuments.forEach((function(e) {})), e.removedDocuments.forEach((function(e) {
                                return t.Fu = t.Fu.delete(e)
                            })), this.current = e.current)
                        }
                    }, {
                        key: "Wu",
                        value: function() {
                            var e = this;
                            if (!this.current) return [];
                            var t = this.Bu;
                            this.Bu = Pn(), this.Uu.forEach((function(t) {
                                e.Hu(t.key) && (e.Bu = e.Bu.add(t.key))
                            }));
                            var n = [];
                            return t.forEach((function(t) {
                                e.Bu.has(t) || n.push(new Ho(t))
                            })), this.Bu.forEach((function(e) {
                                t.has(e) || n.push(new Wo(e))
                            })), n
                        }
                    }, {
                        key: "Ju",
                        value: function(e) {
                            this.Fu = e.hi, this.Bu = Pn();
                            var t = this.Gu(e.documents);
                            return this.applyChanges(t, !0)
                        }
                    }, {
                        key: "Yu",
                        value: function() {
                            return Mo.fromInitialDocuments(this.query, this.Uu, this.mutatedKeys, 0 === this.$u)
                        }
                    }]), e
                }(),
                Jo = (0, h.Z)((function e(t, n, r) {
                    (0, f.Z)(this, e), this.query = t, this.targetId = n, this.view = r
                })),
                $o = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this.key = t, this.Xu = !1
                })),
                Xo = function() {
                    function e(t, n, r, i, a, u) {
                        (0, f.Z)(this, e), this.localStore = t, this.remoteStore = n, this.eventManager = r, this.sharedClientState = i, this.currentUser = a, this.maxConcurrentLimboResolutions = u, this.Zu = {}, this.ta = new En((function(e) {
                            return Rt(e)
                        }), Mt), this.ea = new Map, this.na = new Set, this.sa = new Tn(Ee.comparator), this.ia = new Map, this.ra = new ou, this.oa = {}, this.ua = new Map, this.aa = sa.gn(), this.onlineState = "Unknown", this.ca = void 0
                    }
                    return (0, h.Z)(e, [{
                        key: "isPrimaryClient",
                        get: function() {
                            return !0 === this.ca
                        }
                    }]), e
                }();

            function es(e, t) {
                return ts.apply(this, arguments)
            }

            function ts() {
                return (ts = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a, u, o, s;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = Qs(t), !(u = r.ta.get(n))) {
                                    e.next = 6;
                                    break
                                }
                                i = u.targetId, r.sharedClientState.addLocalQueryTarget(i), a = u.view.Yu(), e.next = 15;
                                break;
                            case 6:
                                return e.next = 8, Wa(r.localStore, Ct(n));
                            case 8:
                                return o = e.sent, r.isPrimaryClient && ju(r.remoteStore, o), s = r.sharedClientState.addLocalQueryTarget(o.targetId), i = o.targetId, e.next = 14, ns(r, n, i, "current" === s);
                            case 14:
                                a = e.sent;
                            case 15:
                                return e.abrupt("return", a);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ns(e, t, n, r) {
                return rs.apply(this, arguments)
            }

            function rs() {
                return rs = (0, u.Z)(v().mark((function e(t, n, r, i) {
                    var a, o, s, c, l, f;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.ha = function(e, n, r) {
                                    return (i = (0, u.Z)(v().mark((function e(t, n, r, i) {
                                        var a, u, o;
                                        return v().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a = n.view.Gu(r), e.t0 = a.ei, !e.t0) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.next = 5, Ja(t.localStore, n.query, !1).then((function(e) {
                                                        var t = e.documents;
                                                        return n.view.Gu(t, a)
                                                    }));
                                                case 5:
                                                    a = e.sent;
                                                case 6:
                                                    return u = i && i.targetChanges.get(n.targetId), o = n.view.applyChanges(a, t.isPrimaryClient, u), e.abrupt("return", (Is(t, n.targetId, o.zu), o.snapshot));
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), function(e, t, n, r) {
                                        return i.apply(this, arguments)
                                    })(t, e, n, r);
                                    var i
                                }, e.next = 3, Ja(t.localStore, n, !0);
                            case 3:
                                return a = e.sent, o = new Yo(n, a.hi), s = o.Gu(a.documents), c = Bn.createSynthesizedTargetChangeForCurrentChange(r, i && "Offline" !== t.onlineState), l = o.applyChanges(s, t.isPrimaryClient, c), Is(t, r, l.zu), f = new Jo(n, r, o), e.abrupt("return", (t.ta.set(n, f), t.ea.has(r) ? t.ea.get(r).push(n) : t.ea.set(r, [n]), l.snapshot));
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), rs.apply(this, arguments)
            }

            function is(e, t) {
                return as.apply(this, arguments)
            }

            function as() {
                return (as = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = L(t), i = r.ta.get(n), !((a = r.ea.get(i.targetId)).length > 1)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", (r.ea.set(i.targetId, a.filter((function(e) {
                                    return !Mt(e, n)
                                }))), void r.ta.delete(n)));
                            case 3:
                                if (!r.isPrimaryClient) {
                                    e.next = 11;
                                    break
                                }
                                if (r.sharedClientState.removeLocalQueryTarget(i.targetId), e.t0 = r.sharedClientState.isActiveQueryTarget(i.targetId), e.t0) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 9, Ha(r.localStore, i.targetId, !1).then((function() {
                                    r.sharedClientState.clearQueryState(i.targetId), zu(r.remoteStore, i.targetId), bs(r, i.targetId)
                                })).catch(da);
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                return bs(r, i.targetId), e.next = 14, Ha(r.localStore, i.targetId, !0);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function us(e, t, n) {
                return os.apply(this, arguments)
            }

            function os() {
                return (os = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, u;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = Ws(t), e.prev = 1, e.next = 4,
                                    function(e, t) {
                                        var n, r = L(e),
                                            i = ee.now(),
                                            a = t.reduce((function(e, t) {
                                                return e.add(t.key)
                                            }), Pn());
                                        return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(e) {
                                            return r.ai.qs(e, a).next((function(a) {
                                                n = a;
                                                var u, o = [],
                                                    s = w(t);
                                                try {
                                                    for (s.s(); !(u = s.n()).done;) {
                                                        var c = u.value,
                                                            l = cn(c, n.get(c.key));
                                                        null != l && o.push(new dn(c.key, l, je(l.value.mapValue), rn.exists(!0)))
                                                    }
                                                } catch (f) {
                                                    s.e(f)
                                                } finally {
                                                    s.f()
                                                }
                                                return r.$s.addMutationBatch(e, i, o, t)
                                            }))
                                        })).then((function(e) {
                                            return e.applyToLocalDocumentSet(n), {
                                                batchId: e.batchId,
                                                changes: n
                                            }
                                        }))
                                    }(i.localStore, n);
                            case 4:
                                return a = e.sent, i.sharedClientState.addPendingMutation(a.batchId),
                                    function(e, t, n) {
                                        var r = e.oa[e.currentUser.toKey()];
                                        r || (r = new Tn(J)), r = r.insert(t, n), e.oa[e.currentUser.toKey()] = r
                                    }(i, a.batchId, r), e.next = 9, Ss(i, a.changes);
                            case 9:
                                return e.next = 11, so(i.remoteStore);
                            case 11:
                                e.next = 17;
                                break;
                            case 13:
                                e.prev = 13, e.t0 = e.catch(1), u = Do(e.t0, "Failed to persist write"), r.reject(u);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 13]
                    ])
                })))).apply(this, arguments)
            }

            function ss(e, t) {
                return cs.apply(this, arguments)
            }

            function cs() {
                return (cs = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = L(t), e.prev = 1, e.next = 4, ja(r.localStore, n);
                            case 4:
                                return i = e.sent, n.targetChanges.forEach((function(e, t) {
                                    var n = r.ia.get(t);
                                    n && (R(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1), e.addedDocuments.size > 0 ? n.Xu = !0 : e.modifiedDocuments.size > 0 ? R(n.Xu) : e.removedDocuments.size > 0 && (R(n.Xu), n.Xu = !1))
                                })), e.next = 8, Ss(r, i, n);
                            case 8:
                                e.next = 14;
                                break;
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(1), e.next = 14, da(e.t0);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))).apply(this, arguments)
            }

            function ls(e, t, n) {
                var r = L(e);
                if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
                    var i = [];
                    r.ta.forEach((function(e, n) {
                            var r = n.view.Eu(t);
                            r.snapshot && i.push(r.snapshot)
                        })),
                        function(e, t) {
                            var n = L(e);
                            n.onlineState = t;
                            var r = !1;
                            n.queries.forEach((function(e, n) {
                                var i, a = w(n.listeners);
                                try {
                                    for (a.s(); !(i = a.n()).done;) {
                                        i.value.Eu(t) && (r = !0)
                                    }
                                } catch (u) {
                                    a.e(u)
                                } finally {
                                    a.f()
                                }
                            })), r && Bo(n)
                        }(r.eventManager, t), i.length && r.Zu.Ko(i), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t)
                }
            }

            function fs(e, t, n) {
                return hs.apply(this, arguments)
            }

            function hs() {
                return (hs = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, u, o, s, c;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((i = L(t)).sharedClientState.updateQueryState(n, "rejected", r), a = i.ia.get(n), !(u = a && a.key)) {
                                    e.next = 14;
                                    break
                                }
                                return o = (o = new Tn(Ee.comparator)).insert(u, ze.newNoDocument(u, te.min())), s = Pn().add(u), c = new Un(te.min(), new Map, new An(J), o, s), e.next = 9, ss(i, c);
                            case 9:
                                i.sa = i.sa.remove(u), i.ia.delete(n), Ts(i), e.next = 16;
                                break;
                            case 14:
                                return e.next = 16, Ha(i.localStore, n, !1).then((function() {
                                    return bs(i, n, r)
                                })).catch(da);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ds(e, t) {
                return vs.apply(this, arguments)
            }

            function vs() {
                return (vs = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = L(t), i = n.batch.batchId, e.prev = 1, e.next = 4, Ka(r.localStore, n);
                            case 4:
                                return a = e.sent, ws(r, i, null), ks(r, i), r.sharedClientState.updateMutationState(i, "acknowledged"), e.next = 10, Ss(r, a);
                            case 10:
                                e.next = 16;
                                break;
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(1), e.next = 16, da(e.t0);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 12]
                    ])
                })))).apply(this, arguments)
            }

            function ys(e, t, n) {
                return ps.apply(this, arguments)
            }

            function ps() {
                return (ps = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = L(t), e.prev = 1, e.next = 4,
                                    function(e, t) {
                                        var n = L(e);
                                        return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(e) {
                                            var r;
                                            return n.$s.lookupMutationBatch(e, t).next((function(t) {
                                                return R(null !== t), r = t.keys(), n.$s.removeMutationBatch(e, t)
                                            })).next((function() {
                                                return n.$s.performConsistencyCheck(e)
                                            })).next((function() {
                                                return n.ai.qs(e, r)
                                            }))
                                        }))
                                    }(i.localStore, n);
                            case 4:
                                return a = e.sent, ws(i, n, r), ks(i, n), i.sharedClientState.updateMutationState(n, "rejected", r), e.next = 10, Ss(i, a);
                            case 10:
                                e.next = 16;
                                break;
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(1), e.next = 16, da(e.t0);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 12]
                    ])
                })))).apply(this, arguments)
            }

            function ms(e, t) {
                return gs.apply(this, arguments)
            }

            function gs() {
                return (gs = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a, u;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return Ju((r = L(t)).remoteStore) || N("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), e.prev = 2, e.next = 5,
                                    function(e) {
                                        var t = L(e);
                                        return t.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
                                            return t.$s.getHighestUnacknowledgedBatchId(e)
                                        }))
                                    }(r.localStore);
                            case 5:
                                if (-1 !== (i = e.sent)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", void n.resolve());
                            case 8:
                                (a = r.ua.get(i) || []).push(n), r.ua.set(i, a), e.next = 16;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), u = Do(e.t0, "Initialization of waitForPendingWrites() operation failed"), n.reject(u);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))).apply(this, arguments)
            }

            function ks(e, t) {
                (e.ua.get(t) || []).forEach((function(e) {
                    e.resolve()
                })), e.ua.delete(t)
            }

            function ws(e, t, n) {
                var r = L(e),
                    i = r.oa[r.currentUser.toKey()];
                if (i) {
                    var a = i.get(t);
                    a && (n ? a.reject(n) : a.resolve(), i = i.remove(t)), r.oa[r.currentUser.toKey()] = i
                }
            }

            function bs(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                e.sharedClientState.removeLocalQueryTarget(t);
                var r, i = w(e.ea.get(t));
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        var a = r.value;
                        e.ta.delete(a), n && e.Zu.la(a, n)
                    }
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
                e.ea.delete(t), e.isPrimaryClient && e.ra.Ri(t).forEach((function(t) {
                    e.ra.containsKey(t) || xs(e, t)
                }))
            }

            function xs(e, t) {
                e.na.delete(t.path.canonicalString());
                var n = e.sa.get(t);
                null !== n && (zu(e.remoteStore, n), e.sa = e.sa.remove(t), e.ia.delete(n), Ts(e))
            }

            function Is(e, t, n) {
                var r, i = w(n);
                try {
                    for (i.s(); !(r = i.n()).done;) {
                        var a = r.value;
                        a instanceof Wo ? (e.ra.addReference(a.key, t), Es(e, a)) : a instanceof Ho ? (N("SyncEngine", "Document no longer in limbo: " + a.key), e.ra.removeReference(a.key, t), e.ra.containsKey(a.key) || xs(e, a.key)) : M()
                    }
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
            }

            function Es(e, t) {
                var n = t.key,
                    r = n.path.canonicalString();
                e.sa.get(n) || e.na.has(r) || (N("SyncEngine", "New document in limbo: " + n), e.na.add(r), Ts(e))
            }

            function Ts(e) {
                for (; e.na.size > 0 && e.sa.size < e.maxConcurrentLimboResolutions;) {
                    var t = e.na.values().next().value;
                    e.na.delete(t);
                    var n = new Ee(ue.fromString(t)),
                        r = e.aa.next();
                    e.ia.set(r, new $o(n)), e.sa = e.sa.insert(n, r), ju(e.remoteStore, new mi(Ct(Et(n.path)), r, 2, W.A))
                }
            }

            function Ss(e, t, n) {
                return _s.apply(this, arguments)
            }

            function _s() {
                return _s = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, o, s;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = L(t), a = [], o = [], s = [], e.t0 = i.ta.isEmpty(), e.t0) {
                                    e.next = 9;
                                    break
                                }
                                return i.ta.forEach((function(e, t) {
                                    s.push(i.ha(t, n, r).then((function(e) {
                                        if (e) {
                                            i.isPrimaryClient && i.sharedClientState.updateQueryState(t.targetId, e.fromCache ? "not-current" : "current"), a.push(e);
                                            var n = Fa.Js(t.targetId, e);
                                            o.push(n)
                                        }
                                    })))
                                })), e.next = 6, Promise.all(s);
                            case 6:
                                return i.Zu.Ko(a), e.next = 9,
                                    function() {
                                        var e = (0, u.Z)(v().mark((function e(t, n) {
                                            var r, i, a, u, o, s, c, l;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return r = L(t), e.prev = 1, e.next = 4, r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(e) {
                                                            return ni.forEach(n, (function(t) {
                                                                return ni.forEach(t.zs, (function(n) {
                                                                    return r.persistence.referenceDelegate.addReference(e, t.targetId, n)
                                                                })).next((function() {
                                                                    return ni.forEach(t.Hs, (function(n) {
                                                                        return r.persistence.referenceDelegate.removeReference(e, t.targetId, n)
                                                                    }))
                                                                }))
                                                            }))
                                                        }));
                                                    case 4:
                                                        e.next = 11;
                                                        break;
                                                    case 6:
                                                        if (e.prev = 6, e.t0 = e.catch(1), oi(e.t0)) {
                                                            e.next = 10;
                                                            break
                                                        }
                                                        throw e.t0;
                                                    case 10:
                                                        N("LocalStore", "Failed to update sequence numbers: " + e.t0);
                                                    case 11:
                                                        i = w(n);
                                                        try {
                                                            for (i.s(); !(a = i.n()).done;) u = a.value, o = u.targetId, u.fromCache || (s = r.si.get(o), c = s.snapshotVersion, l = s.withLastLimboFreeSnapshotVersion(c), r.si = r.si.insert(o, l))
                                                        } catch (f) {
                                                            i.e(f)
                                                        } finally {
                                                            i.f()
                                                        }
                                                    case 13:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [1, 6]
                                            ])
                                        })));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()(i.localStore, o);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), _s.apply(this, arguments)
            }

            function As(e, t) {
                return Ns.apply(this, arguments)
            }

            function Ns() {
                return (Ns = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((r = L(t)).currentUser.isEqual(n)) {
                                    e.next = 11;
                                    break
                                }
                                return N("SyncEngine", "User change. New user:", n.toKey()), e.next = 5, Ua(r.localStore, n);
                            case 5:
                                return i = e.sent, r.currentUser = n,
                                    function(e, t) {
                                        e.ua.forEach((function(e) {
                                            e.forEach((function(e) {
                                                e.reject(new P(F.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."))
                                            }))
                                        })), e.ua.clear()
                                    }(r), r.sharedClientState.handleUserChange(n, i.removedBatchIds, i.addedBatchIds), e.next = 11, Ss(r, i.ci);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ds(e, t) {
                var n = L(e),
                    r = n.ia.get(t);
                if (r && r.Xu) return Pn().add(r.key);
                var i = Pn(),
                    a = n.ea.get(t);
                if (!a) return i;
                var u, o = w(a);
                try {
                    for (o.s(); !(u = o.n()).done;) {
                        var s = u.value,
                            c = n.ta.get(s);
                        i = i.unionWith(c.view.qu)
                    }
                } catch (l) {
                    o.e(l)
                } finally {
                    o.f()
                }
                return i
            }

            function Cs(e, t) {
                return Zs.apply(this, arguments)
            }

            function Zs() {
                return (Zs = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = L(t), e.next = 3, Ja(r.localStore, n.query, !0);
                            case 3:
                                return i = e.sent, a = n.view.Ju(i), e.abrupt("return", (r.isPrimaryClient && Is(r, n.targetId, a.zu), a));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ms(e, t) {
                return Rs.apply(this, arguments)
            }

            function Rs() {
                return (Rs = (0, u.Z)(v().mark((function e(t, n) {
                    var r;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = L(t), e.abrupt("return", Xa(r.localStore, n).then((function(e) {
                                    return Ss(r, e)
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Vs(e, t, n, r) {
                return Ls.apply(this, arguments)
            }

            function Ls() {
                return (Ls = (0, u.Z)(v().mark((function e(t, n, r, i) {
                    var a, u;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = L(t), e.next = 3,
                                    function(e, t) {
                                        var n = L(e),
                                            r = L(n.$s);
                                        return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(e) {
                                            return r.ln(e, t).next((function(t) {
                                                return t ? n.ai.qs(e, t) : ni.resolve(null)
                                            }))
                                        }))
                                    }(a.localStore, n);
                            case 3:
                                if (null === (u = e.sent)) {
                                    e.next = 15;
                                    break
                                }
                                if ("pending" !== r) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 8, so(a.remoteStore);
                            case 8:
                                e.next = 11;
                                break;
                            case 10:
                                "acknowledged" === r || "rejected" === r ? (ws(a, n, i || null), ks(a, n), function(e, t) {
                                    L(L(e).$s).dn(t)
                                }(a.localStore, n)) : M();
                            case 11:
                                return e.next = 13, Ss(a, u);
                            case 13:
                                e.next = 16;
                                break;
                            case 15:
                                N("SyncEngine", "Cannot apply mutation batch with id: " + n);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Fs(e, t) {
                return Ps.apply(this, arguments)
            }

            function Ps() {
                return (Ps = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i, a, u, o, s, c, l;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (Qs(r = L(t)), Ws(r), !0 !== n || !0 === r.ca) {
                                    e.next = 13;
                                    break
                                }
                                return i = r.sharedClientState.getAllActiveQueryTargets(), e.next = 5, Os(r, i.toArray());
                            case 5:
                                return a = e.sent, r.ca = !0, e.next = 9, To(r.remoteStore, !0);
                            case 9:
                                u = w(a);
                                try {
                                    for (u.s(); !(o = u.n()).done;) s = o.value, ju(r.remoteStore, s)
                                } catch (f) {
                                    u.e(f)
                                } finally {
                                    u.f()
                                }
                                e.next = 25;
                                break;
                            case 13:
                                if (!1 !== n || !1 === r.ca) {
                                    e.next = 25;
                                    break
                                }
                                return c = [], l = Promise.resolve(), r.ea.forEach((function(e, t) {
                                    r.sharedClientState.isLocalQueryTarget(t) ? c.push(t) : l = l.then((function() {
                                        return bs(r, t), Ha(r.localStore, t, !0)
                                    })), zu(r.remoteStore, t)
                                })), e.next = 19, l;
                            case 19:
                                return e.next = 21, Os(r, c);
                            case 21:
                                return function(e) {
                                    var t = L(e);
                                    t.ia.forEach((function(e, n) {
                                        zu(t.remoteStore, n)
                                    })), t.ra.bi(), t.ia = new Map, t.sa = new Tn(Ee.comparator)
                                }(r), r.ca = !1, e.next = 25, To(r.remoteStore, !1);
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Os(e, t, n) {
                return qs.apply(this, arguments)
            }

            function qs() {
                return (qs = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, u, o, s, c, l, f, h, d, y, p, m, g;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                i = L(t), a = [], u = [], o = w(n), e.prev = 2, o.s();
                            case 4:
                                if ((s = o.n()).done) {
                                    e.next = 45;
                                    break
                                }
                                if (c = s.value, l = void 0, !(f = i.ea.get(c)) || 0 === f.length) {
                                    e.next = 34;
                                    break
                                }
                                return e.next = 11, Wa(i.localStore, Ct(f[0]));
                            case 11:
                                l = e.sent, h = w(f), e.prev = 13, h.s();
                            case 15:
                                if ((d = h.n()).done) {
                                    e.next = 24;
                                    break
                                }
                                return y = d.value, p = i.ta.get(y), e.next = 20, Cs(i, p);
                            case 20:
                                (m = e.sent).snapshot && u.push(m.snapshot);
                            case 22:
                                e.next = 15;
                                break;
                            case 24:
                                e.next = 29;
                                break;
                            case 26:
                                e.prev = 26, e.t0 = e.catch(13), h.e(e.t0);
                            case 29:
                                return e.prev = 29, h.f(), e.finish(29);
                            case 32:
                                e.next = 42;
                                break;
                            case 34:
                                return e.next = 36, $a(i.localStore, c);
                            case 36:
                                return g = e.sent, e.next = 39, Wa(i.localStore, g);
                            case 39:
                                return l = e.sent, e.next = 42, ns(i, Us(g), c, !1);
                            case 42:
                                a.push(l);
                            case 43:
                                e.next = 4;
                                break;
                            case 45:
                                e.next = 50;
                                break;
                            case 47:
                                e.prev = 47, e.t1 = e.catch(2), o.e(e.t1);
                            case 50:
                                return e.prev = 50, o.f(), e.finish(50);
                            case 53:
                                return e.abrupt("return", (i.Zu.Ko(u), a));
                            case 54:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 47, 50, 53],
                        [13, 26, 29, 32]
                    ])
                })))).apply(this, arguments)
            }

            function Us(e) {
                return It(e.path, e.collectionGroup, e.orderBy, e.filters, e.limit, "F", e.startAt, e.endAt)
            }

            function Bs(e) {
                var t = L(e);
                return L(L(t.localStore).persistence).Os()
            }

            function Ks(e, t, n, r) {
                return Gs.apply(this, arguments)
            }

            function Gs() {
                return (Gs = (0, u.Z)(v().mark((function e(t, n, r, i) {
                    var a, u, o, s;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(a = L(t)).ca) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", void N("SyncEngine", "Ignoring unexpected query state notification."));
                            case 3:
                                if (!((u = a.ea.get(n)) && u.length > 0)) {
                                    e.next = 20;
                                    break
                                }
                                e.t0 = r, e.next = "current" === e.t0 || "not-current" === e.t0 ? 8 : "rejected" === e.t0 ? 15 : 19;
                                break;
                            case 8:
                                return e.next = 10, Xa(a.localStore, Ft(u[0]));
                            case 10:
                                return o = e.sent, s = Un.createSynthesizedRemoteEventForCurrentChange(n, "current" === r), e.next = 14, Ss(a, o, s);
                            case 14:
                                return e.abrupt("break", 20);
                            case 15:
                                return e.next = 17, Ha(a.localStore, n, !0);
                            case 17:
                                return bs(a, n, i), e.abrupt("break", 20);
                            case 19:
                                M();
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function js(e, t, n) {
                return zs.apply(this, arguments)
            }

            function zs() {
                return (zs = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, u, o, s, c, l, f, h;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(i = Qs(t)).ca) {
                                    e.next = 45;
                                    break
                                }
                                a = w(n), e.prev = 3, a.s();
                            case 5:
                                if ((u = a.n()).done) {
                                    e.next = 21;
                                    break
                                }
                                if (o = u.value, !i.ea.has(o)) {
                                    e.next = 10;
                                    break
                                }
                                return N("SyncEngine", "Adding an already active target " + o), e.abrupt("continue", 19);
                            case 10:
                                return e.next = 12, $a(i.localStore, o);
                            case 12:
                                return s = e.sent, e.next = 15, Wa(i.localStore, s);
                            case 15:
                                return c = e.sent, e.next = 18, ns(i, Us(s), c.targetId, !1);
                            case 18:
                                ju(i.remoteStore, c);
                            case 19:
                                e.next = 5;
                                break;
                            case 21:
                                e.next = 26;
                                break;
                            case 23:
                                e.prev = 23, e.t0 = e.catch(3), a.e(e.t0);
                            case 26:
                                return e.prev = 26, a.f(), e.finish(26);
                            case 29:
                                l = w(r), e.prev = 30, h = v().mark((function e() {
                                    var t;
                                    return v().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = f.value, e.t0 = i.ea.has(t), !e.t0) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 5, Ha(i.localStore, t, !1).then((function() {
                                                    zu(i.remoteStore, t), bs(i, t)
                                                })).catch(da);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })), l.s();
                            case 33:
                                if ((f = l.n()).done) {
                                    e.next = 37;
                                    break
                                }
                                return e.delegateYield(h(), "t1", 35);
                            case 35:
                                e.next = 33;
                                break;
                            case 37:
                                e.next = 42;
                                break;
                            case 39:
                                e.prev = 39, e.t2 = e.catch(30), l.e(e.t2);
                            case 42:
                                return e.prev = 42, l.f(), e.finish(42);
                            case 45:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 23, 26, 29],
                        [30, 39, 42, 45]
                    ])
                })))).apply(this, arguments)
            }

            function Qs(e) {
                var t = L(e);
                return t.remoteStore.remoteSyncer.applyRemoteEvent = ss.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Ds.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = fs.bind(null, t), t.Zu.Ko = qo.bind(null, t.eventManager), t.Zu.la = Uo.bind(null, t.eventManager), t
            }

            function Ws(e) {
                var t = L(e);
                return t.remoteStore.remoteSyncer.applySuccessfulWrite = ds.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = ys.bind(null, t), t
            }

            function Hs(e, t, n) {
                var r, i = L(e);
                (r = (0, u.Z)(v().mark((function e(t, n, r) {
                    var i, a, u, o, s;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, n.getMetadata();
                            case 3:
                                return i = e.sent, e.next = 6,
                                    function(e, t) {
                                        var n = L(e),
                                            r = nr(t.createTime);
                                        return n.persistence.runTransaction("hasNewerBundle", "readonly", (function(e) {
                                            return n.ds.getBundleMetadata(e, t.id)
                                        })).then((function(e) {
                                            return !!e && e.createTime.compareTo(r) >= 0
                                        }))
                                    }(t.localStore, i);
                            case 6:
                                if (!e.sent) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 9, n.close();
                            case 9:
                                return r._completeWith(function(e) {
                                    return {
                                        taskState: "Success",
                                        documentsLoaded: e.totalDocuments,
                                        bytesLoaded: e.totalBytes,
                                        totalDocuments: e.totalDocuments,
                                        totalBytes: e.totalBytes
                                    }
                                }(i)), e.abrupt("return", Promise.resolve(new Set));
                            case 11:
                                return r._updateProgress(Qo(i)), a = new zo(i, t.localStore, n.M), e.next = 15, n.fa();
                            case 15:
                                u = e.sent;
                            case 16:
                                if (!u) {
                                    e.next = 26;
                                    break
                                }
                                return e.next = 19, a.Nu(u);
                            case 19:
                                return (o = e.sent) && r._updateProgress(o), e.next = 23, n.fa();
                            case 23:
                                u = e.sent;
                            case 24:
                                e.next = 16;
                                break;
                            case 26:
                                return e.next = 28, a.complete();
                            case 28:
                                return s = e.sent, e.next = 31, Ss(t, s.Ou, void 0);
                            case 31:
                                return e.next = 33,
                                    function(e, t) {
                                        var n = L(e);
                                        return n.persistence.runTransaction("Save bundle", "readwrite", (function(e) {
                                            return n.ds.saveBundleMetadata(e, t)
                                        }))
                                    }(t.localStore, i);
                            case 33:
                                return r._completeWith(s.progress), e.abrupt("return", Promise.resolve(s.Mu));
                            case 37:
                                return e.prev = 37, e.t0 = e.catch(0), e.abrupt("return", (C("SyncEngine", "Loading bundle failed with ".concat(e.t0)), r._failWith(e.t0), Promise.resolve(new Set)));
                            case 40:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 37]
                    ])
                }))), function(e, t, n) {
                    return r.apply(this, arguments)
                })(i, t, n).then((function(e) {
                    i.sharedClientState.notifyBundleLoaded(e)
                }))
            }
            var Ys = function() {
                    function e() {
                        (0, f.Z)(this, e), this.synchronizeTabs = !1
                    }
                    var t, n;
                    return (0, h.Z)(e, [{
                        key: "initialize",
                        value: (n = (0, u.Z)(v().mark((function e(t) {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.M = Mu(t.databaseInfo.databaseId), this.sharedClientState = this.da(t), this.persistence = this._a(t), e.next = 5, this.persistence.start();
                                    case 5:
                                        this.gcScheduler = this.wa(t), this.localStore = this.ma(t);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "wa",
                        value: function(e) {
                            return null
                        }
                    }, {
                        key: "ma",
                        value: function(e) {
                            return qa(this.persistence, new Pa, e.initialUser, this.M)
                        }
                    }, {
                        key: "_a",
                        value: function(e) {
                            return new du(yu.Wi, this.M)
                        }
                    }, {
                        key: "da",
                        value: function(e) {
                            return new Tu
                        }
                    }, {
                        key: "terminate",
                        value: (t = (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.gcScheduler && this.gcScheduler.stop(), e.next = 3, this.sharedClientState.shutdown();
                                    case 3:
                                        return e.next = 5, this.persistence.shutdown();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }(),
                Js = function(e) {
                    (0, o.Z)(r, e);
                    var t, n = x(r);

                    function r(e, t, i) {
                        var a;
                        return (0, f.Z)(this, r), (a = n.call(this)).ga = e, a.cacheSizeBytes = t, a.forceOwnership = i, a.synchronizeTabs = !1, a
                    }
                    return (0, h.Z)(r, [{
                        key: "initialize",
                        value: (t = (0, u.Z)(v().mark((function e(t) {
                            var n = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, i.Z)((0, c.Z)(r.prototype), "initialize", this).call(this, t);
                                    case 2:
                                        return e.next = 4, this.ga.initialize(this, t);
                                    case 4:
                                        return e.next = 6, Ws(this.ga.syncEngine);
                                    case 6:
                                        return e.next = 8, so(this.ga.remoteStore);
                                    case 8:
                                        return e.next = 10, this.persistence.Is((function() {
                                            return n.gcScheduler && !n.gcScheduler.started && n.gcScheduler.start(n.localStore), Promise.resolve()
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "ma",
                        value: function(e) {
                            return qa(this.persistence, new Pa, e.initialUser, this.M)
                        }
                    }, {
                        key: "wa",
                        value: function(e) {
                            var t = this.persistence.referenceDelegate.garbageCollector;
                            return new ma(t, e.asyncQueue)
                        }
                    }, {
                        key: "_a",
                        value: function(e) {
                            var t = Va(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey),
                                n = void 0 !== this.cacheSizeBytes ? ea.withCacheSize(this.cacheSizeBytes) : ea.DEFAULT;
                            return new Za(this.synchronizeTabs, t, e.clientId, n, e.asyncQueue, Cu(), Zu(), this.M, this.sharedClientState, !!this.forceOwnership)
                        }
                    }, {
                        key: "da",
                        value: function(e) {
                            return new Tu
                        }
                    }]), r
                }(Ys),
                $s = function(e) {
                    (0, o.Z)(r, e);
                    var t, n = x(r);

                    function r(e, t) {
                        var i;
                        return (0, f.Z)(this, r), (i = n.call(this, e, t, !1)).ga = e, i.cacheSizeBytes = t, i.synchronizeTabs = !0, i
                    }
                    return (0, h.Z)(r, [{
                        key: "initialize",
                        value: (t = (0, u.Z)(v().mark((function e(t) {
                            var n, a = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, i.Z)((0, c.Z)(r.prototype), "initialize", this).call(this, t);
                                    case 2:
                                        if (n = this.ga.syncEngine, e.t0 = this.sharedClientState instanceof Eu, !e.t0) {
                                            e.next = 8;
                                            break
                                        }
                                        return this.sharedClientState.syncEngine = {
                                            kr: Vs.bind(null, n),
                                            Mr: Ks.bind(null, n),
                                            Or: js.bind(null, n),
                                            Os: Bs.bind(null, n),
                                            Nr: Ms.bind(null, n)
                                        }, e.next = 8, this.sharedClientState.start();
                                    case 8:
                                        return e.next = 10, this.persistence.Is(function() {
                                            var e = (0, u.Z)(v().mark((function e(t) {
                                                return v().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Fs(a.ga.syncEngine, t);
                                                        case 2:
                                                            a.gcScheduler && (t && !a.gcScheduler.started ? a.gcScheduler.start(a.localStore) : t || a.gcScheduler.stop());
                                                        case 3:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "da",
                        value: function(e) {
                            var t = Cu();
                            if (!Eu.vt(t)) throw new P(F.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                            var n = Va(e.databaseInfo.databaseId, e.databaseInfo.persistenceKey);
                            return new Eu(t, e.asyncQueue, n, e.clientId, e.initialUser)
                        }
                    }]), r
                }(Js),
                Xs = function() {
                    function e() {
                        (0, f.Z)(this, e)
                    }
                    var t;
                    return (0, h.Z)(e, [{
                        key: "initialize",
                        value: (t = (0, u.Z)(v().mark((function e(t, n) {
                            var r = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = this.localStore, e.t0) {
                                            e.next = 12;
                                            break
                                        }
                                        return this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(n), this.remoteStore = this.createRemoteStore(n), this.eventManager = this.createEventManager(n), this.syncEngine = this.createSyncEngine(n, !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = function(e) {
                                            return ls(r.syncEngine, e, 1)
                                        }, this.remoteStore.remoteSyncer.handleCredentialChange = As.bind(null, this.syncEngine), e.next = 12, To(this.remoteStore, this.syncEngine.isPrimaryClient);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, n) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "createEventManager",
                        value: function(e) {
                            return new Vo
                        }
                    }, {
                        key: "createDatastore",
                        value: function(e) {
                            var t, n = Mu(e.databaseInfo.databaseId),
                                r = (t = e.databaseInfo, new Du(t));
                            return function(e, t, n, r) {
                                return new Pu(e, t, n, r)
                            }(e.authCredentials, e.appCheckCredentials, r, n)
                        }
                    }, {
                        key: "createRemoteStore",
                        value: function(e) {
                            var t, n, r, i, a, u = this;
                            return t = this.localStore, n = this.datastore, r = e.asyncQueue, i = function(e) {
                                return ls(u.syncEngine, e, 0)
                            }, a = _u.vt() ? new _u : new Su, new qu(t, n, r, i, a)
                        }
                    }, {
                        key: "createSyncEngine",
                        value: function(e, t) {
                            return function(e, t, n, r, i, a, u) {
                                var o = new Xo(e, t, n, r, i, a);
                                return u && (o.ca = !0), o
                            }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t)
                        }
                    }, {
                        key: "terminate",
                        value: function() {
                            return (e = (0, u.Z)(v().mark((function e(t) {
                                var n;
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = L(t), N("RemoteStore", "RemoteStore shutting down."), n.lu.add(5), e.next = 5, Ku(n);
                                        case 5:
                                            n.du.shutdown(), n._u.set("Unknown");
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), function(t) {
                                return e.apply(this, arguments)
                            })(this.remoteStore);
                            var e
                        }
                    }]), e
                }();

            function ec(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10240,
                    n = 0;
                return {
                    read: function() {
                        return (0, u.Z)(v().mark((function r() {
                            var i;
                            return v().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!(n < e.byteLength)) {
                                            r.next = 3;
                                            break
                                        }
                                        return i = {
                                            value: e.slice(n, n + t),
                                            done: !1
                                        }, r.abrupt("return", (n += t, i));
                                    case 3:
                                        return r.abrupt("return", {
                                            done: !0
                                        });
                                    case 4:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    cancel: function() {
                        return (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    releaseLock: function() {},
                    closed: Promise.reject("unimplemented")
                }
            }
            var tc = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.observer = t, this.muted = !1
                    }
                    return (0, h.Z)(e, [{
                        key: "next",
                        value: function(e) {
                            this.observer.next && this.ya(this.observer.next, e)
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            this.observer.error ? this.ya(this.observer.error, e) : console.error("Uncaught Error in snapshot listener:", e)
                        }
                    }, {
                        key: "pa",
                        value: function() {
                            this.muted = !0
                        }
                    }, {
                        key: "ya",
                        value: function(e, t) {
                            var n = this;
                            this.muted || setTimeout((function() {
                                n.muted || e(t)
                            }), 0)
                        }
                    }]), e
                }(),
                nc = function() {
                    function e(t, n) {
                        var r = this;
                        (0, f.Z)(this, e), this.Ia = t, this.M = n, this.metadata = new O, this.buffer = new Uint8Array, this.Ta = new TextDecoder("utf-8"), this.Ea().then((function(e) {
                            e && e.Cu() ? r.metadata.resolve(e.payload.metadata) : r.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             ".concat(JSON.stringify(null == e ? void 0 : e.payload))))
                        }), (function(e) {
                            return r.metadata.reject(e)
                        }))
                    }
                    var t, n, r, i, a, o;
                    return (0, h.Z)(e, [{
                        key: "close",
                        value: function() {
                            return this.Ia.cancel()
                        }
                    }, {
                        key: "getMetadata",
                        value: (o = (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.metadata.promise);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "fa",
                        value: (a = (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getMetadata();
                                    case 2:
                                        return e.abrupt("return", this.Ea());
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "Ea",
                        value: (i = (0, u.Z)(v().mark((function e() {
                            var t, n, r, i;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.Aa();
                                    case 2:
                                        if (null !== (t = e.sent)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 5:
                                        return n = this.Ta.decode(t), r = Number(n), isNaN(r) && this.Ra("length string (".concat(n, ") is not valid number")), e.next = 9, this.ba(r);
                                    case 9:
                                        return i = e.sent, e.abrupt("return", new Go(JSON.parse(i), t.length + r));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "Pa",
                        value: function() {
                            return this.buffer.findIndex((function(e) {
                                return e === "{".charCodeAt(0)
                            }))
                        }
                    }, {
                        key: "Aa",
                        value: (r = (0, u.Z)(v().mark((function e() {
                            var t, n;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(this.Pa() < 0)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 3, this.Va();
                                    case 3:
                                        if (!e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("break", 7);
                                    case 5:
                                        e.next = 0;
                                        break;
                                    case 7:
                                        if (0 !== this.buffer.length) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 9:
                                        return (t = this.Pa()) < 0 && this.Ra("Reached the end of bundle when a length string is expected."), n = this.buffer.slice(0, t), e.abrupt("return", (this.buffer = this.buffer.slice(t), n));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "ba",
                        value: (n = (0, u.Z)(v().mark((function e(t) {
                            var n;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(this.buffer.length < t)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 3, this.Va();
                                    case 3:
                                        if (e.t0 = e.sent, !e.t0) {
                                            e.next = 6;
                                            break
                                        }
                                        this.Ra("Reached the end of bundle when more is expected.");
                                    case 6:
                                        e.next = 0;
                                        break;
                                    case 8:
                                        return n = this.Ta.decode(this.buffer.slice(0, t)), e.abrupt("return", (this.buffer = this.buffer.slice(t), n));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "Ra",
                        value: function(e) {
                            throw this.Ia.cancel(), new Error("Invalid bundle format: ".concat(e))
                        }
                    }, {
                        key: "Va",
                        value: (t = (0, u.Z)(v().mark((function e() {
                            var t, n;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.Ia.read();
                                    case 2:
                                        return (t = e.sent).done || ((n = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), n.set(t.value, this.buffer.length), this.buffer = n), e.abrupt("return", t.done);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }]), e
                }(),
                rc = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this.datastore = t, this.readVersions = new Map, this.mutations = [], this.committed = !1, this.lastWriteError = null, this.writtenDocs = new Set
                    }
                    var t, n;
                    return (0, h.Z)(e, [{
                        key: "lookup",
                        value: (n = (0, u.Z)(v().mark((function e(t) {
                            var n, r = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.ensureCommitNotCalled(), !(this.mutations.length > 0)) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new P(F.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                    case 2:
                                        return e.next = 4,
                                            function() {
                                                var e = (0, u.Z)(v().mark((function e(t, n) {
                                                    var r, i, a, u, o, s;
                                                    return v().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return r = L(t), i = cr(r.M) + "/documents", a = {
                                                                    documents: n.map((function(e) {
                                                                        return ar(r.M, e)
                                                                    }))
                                                                }, e.next = 5, r.co("BatchGetDocuments", i, a);
                                                            case 5:
                                                                return u = e.sent, o = new Map, u.forEach((function(e) {
                                                                    var t = dr(r.M, e);
                                                                    o.set(t.key.toString(), t)
                                                                })), s = [], e.abrupt("return", (n.forEach((function(e) {
                                                                    var t = o.get(e.toString());
                                                                    R(!!t), s.push(t)
                                                                })), s));
                                                            case 10:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()(this.datastore, t);
                                    case 4:
                                        return n = e.sent, e.abrupt("return", (n.forEach((function(e) {
                                            return r.recordVersion(e)
                                        })), n));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "set",
                        value: function(e, t) {
                            this.write(t.toMutation(e, this.precondition(e))), this.writtenDocs.add(e.toString())
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            try {
                                this.write(t.toMutation(e, this.preconditionForUpdate(e)))
                            } catch (e) {
                                this.lastWriteError = e
                            }
                            this.writtenDocs.add(e.toString())
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            this.write(new kn(e, this.precondition(e))), this.writtenDocs.add(e.toString())
                        }
                    }, {
                        key: "commit",
                        value: (t = (0, u.Z)(v().mark((function e() {
                            var t, n = this;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.ensureCommitNotCalled(), !this.lastWriteError) {
                                            e.next = 2;
                                            break
                                        }
                                        throw this.lastWriteError;
                                    case 2:
                                        return t = this.readVersions, this.mutations.forEach((function(e) {
                                                t.delete(e.key.toString())
                                            })), t.forEach((function(e, t) {
                                                var r = Ee.fromPath(t);
                                                n.mutations.push(new wn(r, n.precondition(r)))
                                            })), e.next = 7,
                                            function() {
                                                var e = (0, u.Z)(v().mark((function e(t, n) {
                                                    var r, i, a;
                                                    return v().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return r = L(t), i = cr(r.M) + "/documents", a = {
                                                                    writes: n.map((function(e) {
                                                                        return vr(r.M, e)
                                                                    }))
                                                                }, e.next = 3, r.ro("Commit", i, a);
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()(this.datastore, this.mutations);
                                    case 7:
                                        this.committed = !0;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "recordVersion",
                        value: function(e) {
                            var t;
                            if (e.isFoundDocument()) t = e.version;
                            else {
                                if (!e.isNoDocument()) throw M();
                                t = te.min()
                            }
                            var n = this.readVersions.get(e.key.toString());
                            if (n) {
                                if (!t.isEqual(n)) throw new P(F.ABORTED, "Document version changed between two reads.")
                            } else this.readVersions.set(e.key.toString(), t)
                        }
                    }, {
                        key: "precondition",
                        value: function(e) {
                            var t = this.readVersions.get(e.toString());
                            return !this.writtenDocs.has(e.toString()) && t ? rn.updateTime(t) : rn.none()
                        }
                    }, {
                        key: "preconditionForUpdate",
                        value: function(e) {
                            var t = this.readVersions.get(e.toString());
                            if (!this.writtenDocs.has(e.toString()) && t) {
                                if (t.isEqual(te.min())) throw new P(F.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                                return rn.updateTime(t)
                            }
                            return rn.exists(!0)
                        }
                    }, {
                        key: "write",
                        value: function(e) {
                            this.ensureCommitNotCalled(), this.mutations.push(e)
                        }
                    }, {
                        key: "ensureCommitNotCalled",
                        value: function() {}
                    }]), e
                }(),
                ic = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this.asyncQueue = t, this.datastore = n, this.updateFunction = r, this.deferred = i, this.va = 5, this.So = new Ru(this.asyncQueue, "transaction_retry")
                    }
                    return (0, h.Z)(e, [{
                        key: "run",
                        value: function() {
                            this.va -= 1, this.Sa()
                        }
                    }, {
                        key: "Sa",
                        value: function() {
                            var e = this;
                            this.So.Io((0, u.Z)(v().mark((function t() {
                                var n, r;
                                return v().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            n = new rc(e.datastore), (r = e.Da(n)) && r.then((function(t) {
                                                e.asyncQueue.enqueueAndForget((function() {
                                                    return n.commit().then((function() {
                                                        e.deferred.resolve(t)
                                                    })).catch((function(t) {
                                                        e.Ca(t)
                                                    }))
                                                }))
                                            })).catch((function(t) {
                                                e.Ca(t)
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))))
                        }
                    }, {
                        key: "Da",
                        value: function(e) {
                            try {
                                var t = this.updateFunction(e);
                                return !be(t) && t.catch && t.then ? t : (this.deferred.reject(Error("Transaction callback must return a Promise")), null)
                            } catch (e) {
                                return this.deferred.reject(e), null
                            }
                        }
                    }, {
                        key: "Ca",
                        value: function(e) {
                            var t = this;
                            this.va > 0 && this.xa(e) ? (this.va -= 1, this.asyncQueue.enqueueAndForget((function() {
                                return t.Sa(), Promise.resolve()
                            }))) : this.deferred.reject(e)
                        }
                    }, {
                        key: "xa",
                        value: function(e) {
                            if ("FirebaseError" === e.name) {
                                var t = e.code;
                                return "aborted" === t || "failed-precondition" === t || !xn(t)
                            }
                            return !1
                        }
                    }]), e
                }(),
                ac = function() {
                    function e(t, n, r, i) {
                        var a = this;
                        (0, f.Z)(this, e), this.authCredentials = t, this.appCheckCredentials = n, this.asyncQueue = r, this.databaseInfo = i, this.user = E.UNAUTHENTICATED, this.clientId = Y.R(), this.authCredentialListener = function() {
                            return Promise.resolve()
                        }, this.appCheckCredentialListener = function() {
                            return Promise.resolve()
                        }, this.authCredentials.start(r, function() {
                            var e = (0, u.Z)(v().mark((function e(t) {
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return N("FirestoreClient", "Received user=", t.uid), e.next = 3, a.authCredentialListener(t);
                                        case 3:
                                            a.user = t;
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), this.appCheckCredentials.start(r, (function(e) {
                            return N("FirestoreClient", "Received new app check token=", e), a.appCheckCredentialListener(e, a.user)
                        }))
                    }
                    var t;
                    return (0, h.Z)(e, [{
                        key: "getConfiguration",
                        value: (t = (0, u.Z)(v().mark((function e() {
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", {
                                            asyncQueue: this.asyncQueue,
                                            databaseInfo: this.databaseInfo,
                                            clientId: this.clientId,
                                            authCredentials: this.authCredentials,
                                            appCheckCredentials: this.appCheckCredentials,
                                            initialUser: this.user,
                                            maxConcurrentLimboResolutions: 100
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "setCredentialChangeListener",
                        value: function(e) {
                            this.authCredentialListener = e
                        }
                    }, {
                        key: "setAppCheckTokenChangeListener",
                        value: function(e) {
                            this.appCheckCredentialListener = e
                        }
                    }, {
                        key: "verifyNotTerminated",
                        value: function() {
                            if (this.asyncQueue.isShuttingDown) throw new P(F.FAILED_PRECONDITION, "The client has already been terminated.")
                        }
                    }, {
                        key: "terminate",
                        value: function() {
                            var e = this;
                            this.asyncQueue.enterRestrictedMode();
                            var t = new O;
                            return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((0, u.Z)(v().mark((function n() {
                                var r;
                                return v().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (n.prev = 0, n.t0 = e.onlineComponents, !n.t0) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.next = 5, e.onlineComponents.terminate();
                                        case 5:
                                            if (n.t1 = e.offlineComponents, !n.t1) {
                                                n.next = 9;
                                                break
                                            }
                                            return n.next = 9, e.offlineComponents.terminate();
                                        case 9:
                                            e.authCredentials.shutdown(), e.appCheckCredentials.shutdown(), t.resolve(), n.next = 18;
                                            break;
                                        case 14:
                                            n.prev = 14, n.t2 = n.catch(0), r = Do(n.t2, "Failed to shutdown persistence"), t.reject(r);
                                        case 18:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 14]
                                ])
                            })))), t.promise
                        }
                    }]), e
                }();

            function uc(e, t) {
                return oc.apply(this, arguments)
            }

            function oc() {
                return oc = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.asyncQueue.verifyOperationInProgress(), N("FirestoreClient", "Initializing OfflineComponentProvider"), e.next = 3, t.getConfiguration();
                            case 3:
                                return r = e.sent, e.next = 6, n.initialize(r);
                            case 6:
                                i = r.initialUser, t.setCredentialChangeListener(function() {
                                    var e = (0, u.Z)(v().mark((function e(t) {
                                        return v().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.t0 = i.isEqual(t), e.t0) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    return e.next = 4, Ua(n.localStore, t);
                                                case 4:
                                                    i = t;
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()), n.persistence.setDatabaseDeletedListener((function() {
                                    return t.terminate()
                                })), t.offlineComponents = n;
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), oc.apply(this, arguments)
            }

            function sc(e, t) {
                return cc.apply(this, arguments)
            }

            function cc() {
                return (cc = (0, u.Z)(v().mark((function e(t, n) {
                    var r, i;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.asyncQueue.verifyOperationInProgress(), e.next = 3, lc(t);
                            case 3:
                                return r = e.sent, N("FirestoreClient", "Initializing OnlineComponentProvider"), e.next = 7, t.getConfiguration();
                            case 7:
                                return i = e.sent, e.next = 10, n.initialize(r, i);
                            case 10:
                                t.setCredentialChangeListener((function(e) {
                                    return Io(n.remoteStore, e)
                                })), t.setAppCheckTokenChangeListener((function(e, t) {
                                    return Io(n.remoteStore, t)
                                })), t.onlineComponents = n;
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function lc(e) {
                return fc.apply(this, arguments)
            }

            function fc() {
                return (fc = (0, u.Z)(v().mark((function e(t) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = t.offlineComponents, e.t0) {
                                    e.next = 5;
                                    break
                                }
                                return N("FirestoreClient", "Using default OfflineComponentProvider"), e.next = 5, uc(t, new Ys);
                            case 5:
                                return e.abrupt("return", t.offlineComponents);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function hc(e) {
                return dc.apply(this, arguments)
            }

            function dc() {
                return (dc = (0, u.Z)(v().mark((function e(t) {
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = t.onlineComponents, e.t0) {
                                    e.next = 5;
                                    break
                                }
                                return N("FirestoreClient", "Using default OnlineComponentProvider"), e.next = 5, sc(t, new Xs);
                            case 5:
                                return e.abrupt("return", t.onlineComponents);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function vc(e) {
                return lc(e).then((function(e) {
                    return e.persistence
                }))
            }

            function yc(e) {
                return lc(e).then((function(e) {
                    return e.localStore
                }))
            }

            function pc(e) {
                return hc(e).then((function(e) {
                    return e.remoteStore
                }))
            }

            function mc(e) {
                return hc(e).then((function(e) {
                    return e.syncEngine
                }))
            }

            function gc(e) {
                return kc.apply(this, arguments)
            }

            function kc() {
                return (kc = (0, u.Z)(v().mark((function e(t) {
                    var n, r;
                    return v().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, hc(t);
                            case 2:
                                return n = e.sent, r = n.eventManager, e.abrupt("return", (r.onListen = es.bind(null, n.syncEngine), r.onUnlisten = is.bind(null, n.syncEngine), r));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function wc(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = new O;
                return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function i() {
                    return v().wrap((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return i.t0 = function(e, t, n, r, i) {
                                    var a = new tc({
                                            next: function(a) {
                                                t.enqueueAndForget((function() {
                                                    return Po(e, u)
                                                }));
                                                var o = a.docs.has(n);
                                                !o && a.fromCache ? i.reject(new P(F.UNAVAILABLE, "Failed to get document because the client is offline.")) : o && a.fromCache && r && "server" === r.source ? i.reject(new P(F.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(a)
                                            },
                                            error: function(e) {
                                                return i.reject(e)
                                            }
                                        }),
                                        u = new Ko(Et(n.path), a, {
                                            includeMetadataChanges: !0,
                                            Du: !0
                                        });
                                    return Lo(e, u)
                                }, i.next = 3, gc(e);
                            case 3:
                                return i.t1 = i.sent, i.t2 = e.asyncQueue, i.t3 = t, i.t4 = n, i.t5 = r, i.abrupt("return", (0, i.t0)(i.t1, i.t2, i.t3, i.t4, i.t5));
                            case 9:
                            case "end":
                                return i.stop()
                        }
                    }), i)
                })))), r.promise
            }

            function bc(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = new O;
                return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function i() {
                    return v().wrap((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return i.t0 = function(e, t, n, r, i) {
                                    var a = new tc({
                                            next: function(n) {
                                                t.enqueueAndForget((function() {
                                                    return Po(e, u)
                                                })), n.fromCache && "server" === r.source ? i.reject(new P(F.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n)
                                            },
                                            error: function(e) {
                                                return i.reject(e)
                                            }
                                        }),
                                        u = new Ko(n, a, {
                                            includeMetadataChanges: !0,
                                            Du: !0
                                        });
                                    return Lo(e, u)
                                }, i.next = 3, gc(e);
                            case 3:
                                return i.t1 = i.sent, i.t2 = e.asyncQueue, i.t3 = t, i.t4 = n, i.t5 = r, i.abrupt("return", (0, i.t0)(i.t1, i.t2, i.t3, i.t4, i.t5));
                            case 9:
                            case "end":
                                return i.stop()
                        }
                    }), i)
                })))), r.promise
            }
            var xc = new Map;

            function Ic(e, t, n) {
                if (!n) throw new P(F.INVALID_ARGUMENT, "Function ".concat(e, "() cannot be called with an empty ").concat(t, "."))
            }

            function Ec(e, t, n, r) {
                if (!0 === t && !0 === r) throw new P(F.INVALID_ARGUMENT, "".concat(e, " and ").concat(n, " cannot be used together."))
            }

            function Tc(e) {
                if (!Ee.isDocumentKey(e)) throw new P(F.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but ".concat(e, " has ").concat(e.length, "."))
            }

            function Sc(e) {
                if (Ee.isDocumentKey(e)) throw new P(F.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e, " has ").concat(e.length, "."))
            }

            function _c(e) {
                if (void 0 === e) return "undefined";
                if (null === e) return "null";
                if ("string" == typeof e) return e.length > 20 && (e = "".concat(e.substring(0, 20), "...")), JSON.stringify(e);
                if ("number" == typeof e || "boolean" == typeof e) return "" + e;
                if ("object" == typeof e) {
                    if (e instanceof Array) return "an array";
                    var t = function(e) {
                        return e.constructor ? e.constructor.name : null
                    }(e);
                    return t ? "a custom ".concat(t, " object") : "an object"
                }
                return "function" == typeof e ? "a function" : M()
            }

            function Ac(e, t) {
                if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
                    if (t.name === e.constructor.name) throw new P(F.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
                    var n = _c(e);
                    throw new P(F.INVALID_ARGUMENT, "Expected type '".concat(t.name, "', but it was: ").concat(n))
                }
                return e
            }

            function Nc(e, t) {
                if (t <= 0) throw new P(F.INVALID_ARGUMENT, "Function ".concat(e, "() requires a positive number, but it was: ").concat(t, "."))
            }
            var Dc = function() {
                    function e(t) {
                        var n;
                        if ((0, f.Z)(this, e), void 0 === t.host) {
                            if (void 0 !== t.ssl) throw new P(F.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                            this.host = "firestore.googleapis.com", this.ssl = !0
                        } else this.host = t.host, this.ssl = null === (n = t.ssl) || void 0 === n || n;
                        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
                        else {
                            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new P(F.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
                            this.cacheSizeBytes = t.cacheSizeBytes
                        }
                        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, this.useFetchStreams = !!t.useFetchStreams, Ec("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling)
                    }
                    return (0, h.Z)(e, [{
                        key: "isEqual",
                        value: function(e) {
                            return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
                        }
                    }]), e
                }(),
                Cc = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this._authCredentials = n, this._appCheckCredentials = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Dc({}), this._settingsFrozen = !1, t instanceof we ? this._databaseId = t : (this._app = t, this._databaseId = function(e) {
                            if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new P(F.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                            return new we(e.options.projectId)
                        }(t))
                    }
                    return (0, h.Z)(e, [{
                        key: "app",
                        get: function() {
                            if (!this._app) throw new P(F.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                            return this._app
                        }
                    }, {
                        key: "_initialized",
                        get: function() {
                            return this._settingsFrozen
                        }
                    }, {
                        key: "_terminated",
                        get: function() {
                            return void 0 !== this._terminateTask
                        }
                    }, {
                        key: "_setSettings",
                        value: function(e) {
                            if (this._settingsFrozen) throw new P(F.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                            this._settings = new Dc(e), void 0 !== e.credentials && (this._authCredentials = function(e) {
                                if (!e) return new U;
                                switch (e.type) {
                                    case "gapi":
                                        var t = e.client;
                                        return R(!("object" != typeof t || null === t || !t.auth || !t.auth.getAuthHeaderValueForFirstParty)), new j(t, e.sessionIndex || "0", e.iamToken || null);
                                    case "provider":
                                        return e.client;
                                    default:
                                        throw new P(F.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type")
                                }
                            }(e.credentials))
                        }
                    }, {
                        key: "_getSettings",
                        value: function() {
                            return this._settings
                        }
                    }, {
                        key: "_freezeSettings",
                        value: function() {
                            return this._settingsFrozen = !0, this._settings
                        }
                    }, {
                        key: "_delete",
                        value: function() {
                            return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                app: this._app,
                                databaseId: this._databaseId,
                                settings: this._settings
                            }
                        }
                    }, {
                        key: "_terminate",
                        value: function() {
                            return e = this, (t = xc.get(e)) && (N("ComponentProvider", "Removing Datastore"), xc.delete(e), t.terminate()), Promise.resolve();
                            var e, t
                        }
                    }]), e
                }();

            function Zc(e, t, n) {
                var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = (e = Ac(e, Cc))._getSettings();
                if ("firestore.googleapis.com" !== a.host && a.host !== t && C("Host has been set in both settings() and useEmulator(), emulator host will be used"), e._setSettings(Object.assign(Object.assign({}, a), {
                        host: "".concat(t, ":").concat(n),
                        ssl: !1
                    })), i.mockUserToken) {
                    var u, o;
                    if ("string" == typeof i.mockUserToken) u = i.mockUserToken, o = E.MOCK_USER;
                    else {
                        u = (0, g.Sg)(i.mockUserToken, null === (r = e._app) || void 0 === r ? void 0 : r.options.projectId);
                        var s = i.mockUserToken.sub || i.mockUserToken.user_id;
                        if (!s) throw new P(F.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
                        o = new E(s)
                    }
                    e._authCredentials = new B(new q(u, o))
                }
            }
            var Mc = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.converter = n, this._key = r, this.type = "document", this.firestore = t
                    }
                    return (0, h.Z)(e, [{
                        key: "_path",
                        get: function() {
                            return this._key.path
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._key.path.lastSegment()
                        }
                    }, {
                        key: "path",
                        get: function() {
                            return this._key.path.canonicalString()
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            return new Vc(this.firestore, this.converter, this._key.path.popLast())
                        }
                    }, {
                        key: "withConverter",
                        value: function(t) {
                            return new e(this.firestore, t, this._key)
                        }
                    }]), e
                }(),
                Rc = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.converter = n, this._query = r, this.type = "query", this.firestore = t
                    }
                    return (0, h.Z)(e, [{
                        key: "withConverter",
                        value: function(t) {
                            return new e(this.firestore, t, this._query)
                        }
                    }]), e
                }(),
                Vc = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i) {
                        var a;
                        return (0, f.Z)(this, n), (a = t.call(this, e, r, Et(i)))._path = i, a.type = "collection", a
                    }
                    return (0, h.Z)(n, [{
                        key: "id",
                        get: function() {
                            return this._query.path.lastSegment()
                        }
                    }, {
                        key: "path",
                        get: function() {
                            return this._query.path.canonicalString()
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            var e = this._path.popLast();
                            return e.isEmpty() ? null : new Mc(this.firestore, null, new Ee(e))
                        }
                    }, {
                        key: "withConverter",
                        value: function(e) {
                            return new n(this.firestore, e, this._path)
                        }
                    }]), n
                }(Rc);

            function Lc(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                if (e = (0, g.m9)(e), Ic("collection", "path", t), e instanceof Cc) {
                    var a = ue.fromString.apply(ue, [t].concat(r));
                    return Sc(a), new Vc(e, null, a)
                }
                if (!(e instanceof Mc || e instanceof Vc)) throw new P(F.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                var u = e._path.child(ue.fromString.apply(ue, [t].concat(r)));
                return Sc(u), new Vc(e.firestore, null, u)
            }

            function Fc(e, t) {
                if (e = Ac(e, Cc), Ic("collectionGroup", "collection id", t), t.indexOf("/") >= 0) throw new P(F.INVALID_ARGUMENT, "Invalid collection ID '".concat(t, "' passed to function collectionGroup(). Collection IDs must not contain '/'."));
                return new Rc(e, null, function(e) {
                    return new xt(ue.emptyPath(), e)
                }(t))
            }

            function Pc(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                if (e = (0, g.m9)(e), 1 === arguments.length && (t = Y.R()), Ic("doc", "path", t), e instanceof Cc) {
                    var a = ue.fromString.apply(ue, [t].concat(r));
                    return Tc(a), new Mc(e, null, new Ee(a))
                }
                if (!(e instanceof Mc || e instanceof Vc)) throw new P(F.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                var u = e._path.child(ue.fromString.apply(ue, [t].concat(r)));
                return Tc(u), new Mc(e.firestore, e instanceof Vc ? e.converter : null, new Ee(u))
            }

            function Oc(e, t) {
                return e = (0, g.m9)(e), t = (0, g.m9)(t), (e instanceof Mc || e instanceof Vc) && (t instanceof Mc || t instanceof Vc) && e.firestore === t.firestore && e.path === t.path && e.converter === t.converter
            }

            function qc(e, t) {
                return e = (0, g.m9)(e), t = (0, g.m9)(t), e instanceof Rc && t instanceof Rc && e.firestore === t.firestore && Mt(e._query, t._query) && e.converter === t.converter
            }
            var Uc = function() {
                function e() {
                    var t = this;
                    (0, f.Z)(this, e), this.Na = Promise.resolve(), this.ka = [], this.Ma = !1, this.Oa = [], this.Fa = null, this.$a = !1, this.Ba = !1, this.La = [], this.So = new Ru(this, "async_queue_retry"), this.Ua = function() {
                        var e = Zu();
                        e && N("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.So.Eo()
                    };
                    var n = Zu();
                    n && "function" == typeof n.addEventListener && n.addEventListener("visibilitychange", this.Ua)
                }
                var t, n;
                return (0, h.Z)(e, [{
                    key: "isShuttingDown",
                    get: function() {
                        return this.Ma
                    }
                }, {
                    key: "enqueueAndForget",
                    value: function(e) {
                        this.enqueue(e)
                    }
                }, {
                    key: "enqueueAndForgetEvenWhileRestricted",
                    value: function(e) {
                        this.qa(), this.Ga(e)
                    }
                }, {
                    key: "enterRestrictedMode",
                    value: function(e) {
                        if (!this.Ma) {
                            this.Ma = !0, this.Ba = e || !1;
                            var t = Zu();
                            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Ua)
                        }
                    }
                }, {
                    key: "enqueue",
                    value: function(e) {
                        var t = this;
                        if (this.qa(), this.Ma) return new Promise((function() {}));
                        var n = new O;
                        return this.Ga((function() {
                            return t.Ma && t.Ba ? Promise.resolve() : (e().then(n.resolve, n.reject), n.promise)
                        })).then((function() {
                            return n.promise
                        }))
                    }
                }, {
                    key: "enqueueRetryable",
                    value: function(e) {
                        var t = this;
                        this.enqueueAndForget((function() {
                            return t.ka.push(e), t.Ka()
                        }))
                    }
                }, {
                    key: "Ka",
                    value: (n = (0, u.Z)(v().mark((function e() {
                        var t = this;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 === this.ka.length) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, this.ka[0]();
                                case 4:
                                    this.ka.shift(), this.So.reset(), e.next = 13;
                                    break;
                                case 8:
                                    if (e.prev = 8, e.t0 = e.catch(1), oi(e.t0)) {
                                        e.next = 12;
                                        break
                                    }
                                    throw e.t0;
                                case 12:
                                    N("AsyncQueue", "Operation failed with retryable error: " + e.t0);
                                case 13:
                                    this.ka.length > 0 && this.So.Io((function() {
                                        return t.Ka()
                                    }));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [1, 8]
                        ])
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "Ga",
                    value: function(e) {
                        var t = this,
                            n = this.Na.then((function() {
                                return t.$a = !0, e().catch((function(e) {
                                    t.Fa = e, t.$a = !1;
                                    var n = function(e) {
                                        var t = e.message || "";
                                        return e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), t
                                    }(e);
                                    throw D("INTERNAL UNHANDLED ERROR: ", n), e
                                })).then((function(e) {
                                    return t.$a = !1, e
                                }))
                            }));
                        return this.Na = n, n
                    }
                }, {
                    key: "enqueueAfterDelay",
                    value: function(e, t, n) {
                        var r = this;
                        this.qa(), this.La.indexOf(e) > -1 && (t = 0);
                        var i = No.createAndSchedule(this, e, t, n, (function(e) {
                            return r.Qa(e)
                        }));
                        return this.Oa.push(i), i
                    }
                }, {
                    key: "qa",
                    value: function() {
                        this.Fa && M()
                    }
                }, {
                    key: "verifyOperationInProgress",
                    value: function() {}
                }, {
                    key: "ja",
                    value: (t = (0, u.Z)(v().mark((function e() {
                        var t;
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = this.Na, e.next = 3, t;
                                case 3:
                                    if (t !== this.Na) {
                                        e.next = 0;
                                        break
                                    }
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "Wa",
                    value: function(e) {
                        var t, n = w(this.Oa);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                if (t.value.timerId === e) return !0
                            }
                        } catch (r) {
                            n.e(r)
                        } finally {
                            n.f()
                        }
                        return !1
                    }
                }, {
                    key: "za",
                    value: function(e) {
                        var t = this;
                        return this.ja().then((function() {
                            t.Oa.sort((function(e, t) {
                                return e.targetTimeMs - t.targetTimeMs
                            }));
                            var n, r = w(t.Oa);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    if (i.skipDelay(), "all" !== e && i.timerId === e) break
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                            return t.ja()
                        }))
                    }
                }, {
                    key: "Ha",
                    value: function(e) {
                        this.La.push(e)
                    }
                }, {
                    key: "Qa",
                    value: function(e) {
                        var t = this.Oa.indexOf(e);
                        this.Oa.splice(t, 1)
                    }
                }]), e
            }();

            function Bc(e) {
                return function(e, t) {
                    if ("object" != typeof e || null === e) return !1;
                    var n, r = e,
                        i = w(["next", "error", "complete"]);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var a = n.value;
                            if (a in r && "function" == typeof r[a]) return !0
                        }
                    } catch (u) {
                        i.e(u)
                    } finally {
                        i.f()
                    }
                    return !1
                }(e)
            }
            var Kc = function() {
                    function e() {
                        (0, f.Z)(this, e), this._progressObserver = {}, this._taskCompletionResolver = new O, this._lastProgress = {
                            taskState: "Running",
                            totalBytes: 0,
                            totalDocuments: 0,
                            bytesLoaded: 0,
                            documentsLoaded: 0
                        }
                    }
                    return (0, h.Z)(e, [{
                        key: "onProgress",
                        value: function(e, t, n) {
                            this._progressObserver = {
                                next: e,
                                error: t,
                                complete: n
                            }
                        }
                    }, {
                        key: "catch",
                        value: function(e) {
                            return this._taskCompletionResolver.promise.catch(e)
                        }
                    }, {
                        key: "then",
                        value: function(e, t) {
                            return this._taskCompletionResolver.promise.then(e, t)
                        }
                    }, {
                        key: "_completeWith",
                        value: function(e) {
                            this._updateProgress(e), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(e)
                        }
                    }, {
                        key: "_failWith",
                        value: function(e) {
                            this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(e), this._taskCompletionResolver.reject(e)
                        }
                    }, {
                        key: "_updateProgress",
                        value: function(e) {
                            this._lastProgress = e, this._progressObserver.next && this._progressObserver.next(e)
                        }
                    }]), e
                }(),
                Gc = -1,
                jc = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i) {
                        var a;
                        return (0, f.Z)(this, n), (a = t.call(this, e, r, i)).type = "firestore", a._queue = new Uc, a._persistenceKey = "name" in e ? e.name : "[DEFAULT]", a
                    }
                    return (0, h.Z)(n, [{
                        key: "_terminate",
                        value: function() {
                            return this._firestoreClient || Qc(this), this._firestoreClient.terminate()
                        }
                    }]), n
                }(Cc);

            function zc(e) {
                return e._firestoreClient || Qc(e), e._firestoreClient.verifyNotTerminated(), e._firestoreClient
            }

            function Qc(e) {
                var t, n = e._freezeSettings(),
                    r = function(e, t, n, r) {
                        return new ke(e, t, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, r.useFetchStreams)
                    }(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, n);
                e._firestoreClient = new ac(e._authCredentials, e._appCheckCredentials, e._queue, r)
            }

            function Wc(e, t) {
                rl(e = Ac(e, jc));
                var n = zc(e),
                    r = e._freezeSettings(),
                    i = new Xs;
                return Yc(n, i, new Js(i, r.cacheSizeBytes, null == t ? void 0 : t.forceOwnership))
            }

            function Hc(e) {
                rl(e = Ac(e, jc));
                var t = zc(e),
                    n = e._freezeSettings(),
                    r = new Xs;
                return Yc(t, r, new $s(r, n.cacheSizeBytes))
            }

            function Yc(e, t, n) {
                var r = new O;
                return e.asyncQueue.enqueue((0, u.Z)(v().mark((function i() {
                    return v().wrap((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return i.prev = 0, i.next = 3, uc(e, n);
                            case 3:
                                return i.next = 5, sc(e, t);
                            case 5:
                                r.resolve(), i.next = 13;
                                break;
                            case 8:
                                if (i.prev = 8, i.t0 = i.catch(0), function(e) {
                                        return "FirebaseError" === e.name ? e.code === F.FAILED_PRECONDITION || e.code === F.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || (22 === e.code || 20 === e.code || 11 === e.code)
                                    }(i.t0)) {
                                    i.next = 12;
                                    break
                                }
                                throw i.t0;
                            case 12:
                                console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + i.t0), r.reject(i.t0);
                            case 13:
                            case "end":
                                return i.stop()
                        }
                    }), i, null, [
                        [0, 8]
                    ])
                })))).then((function() {
                    return r.promise
                }))
            }

            function Jc(e) {
                if (e._initialized && !e._terminated) throw new P(F.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                var t = new O;
                return e._queue.enqueueAndForgetEvenWhileRestricted((0, u.Z)(v().mark((function n() {
                    return v().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0, n.next = 3,
                                    function() {
                                        var e = (0, u.Z)(v().mark((function e(t) {
                                            var n;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (ii.vt()) {
                                                            e.next = 2;
                                                            break
                                                        }
                                                        return e.abrupt("return", Promise.resolve());
                                                    case 2:
                                                        return n = t + "main", e.next = 5, ii.delete(n);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()(Va(e._databaseId, e._persistenceKey));
                            case 3:
                                t.resolve(), n.next = 9;
                                break;
                            case 6:
                                n.prev = 6, n.t0 = n.catch(0), t.reject(n.t0);
                            case 9:
                            case "end":
                                return n.stop()
                        }
                    }), n, null, [
                        [0, 6]
                    ])
                })))), t.promise
            }

            function $c(e) {
                return function(e) {
                    var t = new O;
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function n() {
                        return v().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.t0 = ms, n.next = 3, mc(e);
                                case 3:
                                    return n.t1 = n.sent, n.t2 = t, n.abrupt("return", (0, n.t0)(n.t1, n.t2));
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))), t.promise
                }(zc(e = Ac(e, jc)))
            }

            function Xc(e) {
                return function(e) {
                    return e.asyncQueue.enqueue((0, u.Z)(v().mark((function t() {
                        var n, r;
                        return v().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, vc(e);
                                case 2:
                                    return n = t.sent, t.next = 5, pc(e);
                                case 5:
                                    return r = t.sent, t.abrupt("return", (n.setNetworkEnabled(!0), function(e) {
                                        var t = L(e);
                                        return t.lu.delete(0), Uu(t)
                                    }(r)));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))))
                }(zc(e = Ac(e, jc)))
            }

            function el(e) {
                return function(e) {
                    return e.asyncQueue.enqueue((0, u.Z)(v().mark((function t() {
                        var n, r;
                        return v().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, vc(e);
                                case 2:
                                    return n = t.sent, t.next = 5, pc(e);
                                case 5:
                                    return r = t.sent, t.abrupt("return", (n.setNetworkEnabled(!1), function() {
                                        var e = (0, u.Z)(v().mark((function e(t) {
                                            var n;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return (n = L(t)).lu.add(0), e.next = 4, Ku(n);
                                                    case 4:
                                                        n._u.set("Offline");
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()(r)));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))))
                }(zc(e = Ac(e, jc)))
            }

            function tl(e, t) {
                var n = zc(e = Ac(e, jc)),
                    r = new Kc;
                return function(e, t, n, r) {
                    var i = function(e, t) {
                        return function(e, t) {
                            return new nc(e, t)
                        }(function(e, t) {
                            if (e instanceof Uint8Array) return ec(e, t);
                            if (e instanceof ArrayBuffer) return ec(new Uint8Array(e), t);
                            if (e instanceof ReadableStream) return e.getReader();
                            throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")
                        }("string" == typeof e ? (new TextEncoder).encode(e) : e), t)
                    }(n, Mu(t));
                    e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function t() {
                        return v().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.t0 = Hs, t.next = 3, mc(e);
                                case 3:
                                    t.t1 = t.sent, t.t2 = i, t.t3 = r, (0, t.t0)(t.t1, t.t2, t.t3);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))))
                }(n, e._databaseId, t, r), r
            }

            function nl(e, t) {
                return function(e, t) {
                    return e.asyncQueue.enqueue((0, u.Z)(v().mark((function n() {
                        return v().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.t0 = function(e, t) {
                                        var n = L(e);
                                        return n.persistence.runTransaction("Get named query", "readonly", (function(e) {
                                            return n.ds.getNamedQuery(e, t)
                                        }))
                                    }, n.next = 3, yc(e);
                                case 3:
                                    return n.t1 = n.sent, n.t2 = t, n.abrupt("return", (0, n.t0)(n.t1, n.t2));
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))))
                }(zc(e = Ac(e, jc)), t).then((function(t) {
                    return t ? new Rc(e, null, t.query) : null
                }))
            }

            function rl(e) {
                if (e._initialized || e._terminated) throw new P(F.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")
            }
            var il = function() {
                function e() {
                    (0, f.Z)(this, e);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    for (var i = 0; i < n.length; ++i)
                        if (0 === n[i].length) throw new P(F.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                    this._internalPath = new se(n)
                }
                return (0, h.Z)(e, [{
                    key: "isEqual",
                    value: function(e) {
                        return this._internalPath.isEqual(e._internalPath)
                    }
                }]), e
            }();
            var al = function() {
                    function e(t) {
                        (0, f.Z)(this, e), this._byteString = t
                    }
                    return (0, h.Z)(e, [{
                        key: "toBase64",
                        value: function() {
                            return this._byteString.toBase64()
                        }
                    }, {
                        key: "toUint8Array",
                        value: function() {
                            return this._byteString.toUint8Array()
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "Bytes(base64: " + this.toBase64() + ")"
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this._byteString.isEqual(e._byteString)
                        }
                    }], [{
                        key: "fromBase64String",
                        value: function(t) {
                            try {
                                return new e(fe.fromBase64String(t))
                            } catch (t) {
                                throw new P(F.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t)
                            }
                        }
                    }, {
                        key: "fromUint8Array",
                        value: function(t) {
                            return new e(fe.fromUint8Array(t))
                        }
                    }]), e
                }(),
                ul = (0, h.Z)((function e(t) {
                    (0, f.Z)(this, e), this._methodName = t
                })),
                ol = function() {
                    function e(t, n) {
                        if ((0, f.Z)(this, e), !isFinite(t) || t < -90 || t > 90) throw new P(F.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                        if (!isFinite(n) || n < -180 || n > 180) throw new P(F.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
                        this._lat = t, this._long = n
                    }
                    return (0, h.Z)(e, [{
                        key: "latitude",
                        get: function() {
                            return this._lat
                        }
                    }, {
                        key: "longitude",
                        get: function() {
                            return this._long
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this._lat === e._lat && this._long === e._long
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                latitude: this._lat,
                                longitude: this._long
                            }
                        }
                    }, {
                        key: "_compareTo",
                        value: function(e) {
                            return J(this._lat, e._lat) || J(this._long, e._long)
                        }
                    }]), e
                }(),
                sl = /^__.*__$/,
                cl = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.data = t, this.fieldMask = n, this.fieldTransforms = r
                    }
                    return (0, h.Z)(e, [{
                        key: "toMutation",
                        value: function(e, t) {
                            return null !== this.fieldMask ? new dn(e, this.data, this.fieldMask, t, this.fieldTransforms) : new hn(e, this.data, t, this.fieldTransforms)
                        }
                    }]), e
                }(),
                ll = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.data = t, this.fieldMask = n, this.fieldTransforms = r
                    }
                    return (0, h.Z)(e, [{
                        key: "toMutation",
                        value: function(e, t) {
                            return new dn(e, this.data, this.fieldMask, t, this.fieldTransforms)
                        }
                    }]), e
                }();

            function fl(e) {
                switch (e) {
                    case 0:
                    case 2:
                    case 1:
                        return !0;
                    case 3:
                    case 4:
                        return !1;
                    default:
                        throw M()
                }
            }
            var hl = function() {
                    function e(t, n, r, i, a, u) {
                        (0, f.Z)(this, e), this.settings = t, this.databaseId = n, this.M = r, this.ignoreUndefinedProperties = i, void 0 === a && this.Ja(), this.fieldTransforms = a || [], this.fieldMask = u || []
                    }
                    return (0, h.Z)(e, [{
                        key: "path",
                        get: function() {
                            return this.settings.path
                        }
                    }, {
                        key: "Ya",
                        get: function() {
                            return this.settings.Ya
                        }
                    }, {
                        key: "Xa",
                        value: function(t) {
                            return new e(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.M, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask)
                        }
                    }, {
                        key: "Za",
                        value: function(e) {
                            var t, n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
                                r = this.Xa({
                                    path: n,
                                    tc: !1
                                });
                            return r.ec(e), r
                        }
                    }, {
                        key: "nc",
                        value: function(e) {
                            var t, n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
                                r = this.Xa({
                                    path: n,
                                    tc: !1
                                });
                            return r.Ja(), r
                        }
                    }, {
                        key: "sc",
                        value: function(e) {
                            return this.Xa({
                                path: void 0,
                                tc: !0
                            })
                        }
                    }, {
                        key: "ic",
                        value: function(e) {
                            return Zl(e, this.settings.methodName, this.settings.rc || !1, this.path, this.settings.oc)
                        }
                    }, {
                        key: "contains",
                        value: function(e) {
                            return void 0 !== this.fieldMask.find((function(t) {
                                return e.isPrefixOf(t)
                            })) || void 0 !== this.fieldTransforms.find((function(t) {
                                return e.isPrefixOf(t.field)
                            }))
                        }
                    }, {
                        key: "Ja",
                        value: function() {
                            if (this.path)
                                for (var e = 0; e < this.path.length; e++) this.ec(this.path.get(e))
                        }
                    }, {
                        key: "ec",
                        value: function(e) {
                            if (0 === e.length) throw this.ic("Document fields must not be empty");
                            if (fl(this.Ya) && sl.test(e)) throw this.ic('Document fields cannot begin and end with "__"')
                        }
                    }]), e
                }(),
                dl = function() {
                    function e(t, n, r) {
                        (0, f.Z)(this, e), this.databaseId = t, this.ignoreUndefinedProperties = n, this.M = r || Mu(t)
                    }
                    return (0, h.Z)(e, [{
                        key: "uc",
                        value: function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            return new hl({
                                Ya: e,
                                methodName: t,
                                oc: n,
                                path: se.emptyPath(),
                                tc: !1,
                                rc: r
                            }, this.databaseId, this.M, this.ignoreUndefinedProperties)
                        }
                    }]), e
                }();

            function vl(e) {
                var t = e._freezeSettings(),
                    n = Mu(e._databaseId);
                return new dl(e._databaseId, !!t.ignoreUndefinedProperties, n)
            }

            function yl(e, t, n, r, i) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    u = e.uc(a.merge || a.mergeFields ? 2 : 0, t, n, i);
                Al("Data must be an object, but it was:", u, r);
                var o, s, c = Sl(r, u);
                if (a.merge) o = new ce(u.fieldMask), s = u.fieldTransforms;
                else if (a.mergeFields) {
                    var l, f = [],
                        h = w(a.mergeFields);
                    try {
                        for (h.s(); !(l = h.n()).done;) {
                            var d = l.value,
                                v = Nl(t, d, n);
                            if (!u.contains(v)) throw new P(F.INVALID_ARGUMENT, "Field '".concat(v, "' is specified in your field mask but missing from your input data."));
                            Ml(f, v) || f.push(v)
                        }
                    } catch (y) {
                        h.e(y)
                    } finally {
                        h.f()
                    }
                    o = new ce(f), s = u.fieldTransforms.filter((function(e) {
                        return o.covers(e.field)
                    }))
                } else o = null, s = u.fieldTransforms;
                return new cl(new Ge(c), o, s)
            }
            var pl = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n() {
                    return (0, f.Z)(this, n), t.apply(this, arguments)
                }
                return (0, h.Z)(n, [{
                    key: "_toFieldTransform",
                    value: function(e) {
                        if (2 !== e.Ya) throw 1 === e.Ya ? e.ic("".concat(this._methodName, "() can only appear at the top level of your update data")) : e.ic("".concat(this._methodName, "() cannot be used with set() unless you pass {merge:true}"));
                        return e.fieldMask.push(e.path), null
                    }
                }, {
                    key: "isEqual",
                    value: function(e) {
                        return e instanceof n
                    }
                }]), n
            }(ul);

            function ml(e, t, n) {
                return new hl({
                    Ya: 3,
                    oc: t.settings.oc,
                    methodName: e._methodName,
                    tc: n
                }, t.databaseId, t.M, t.ignoreUndefinedProperties)
            }
            var gl = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n() {
                        return (0, f.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, h.Z)(n, [{
                        key: "_toFieldTransform",
                        value: function(e) {
                            return new tn(e.path, new Qt)
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return e instanceof n
                        }
                    }]), n
                }(ul),
                kl = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, e)).ac = r, i
                    }
                    return (0, h.Z)(n, [{
                        key: "_toFieldTransform",
                        value: function(e) {
                            var t = ml(this, e, !0),
                                n = this.ac.map((function(e) {
                                    return Tl(e, t)
                                })),
                                r = new Wt(n);
                            return new tn(e.path, r)
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this === e
                        }
                    }]), n
                }(ul),
                wl = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, e)).ac = r, i
                    }
                    return (0, h.Z)(n, [{
                        key: "_toFieldTransform",
                        value: function(e) {
                            var t = ml(this, e, !0),
                                n = this.ac.map((function(e) {
                                    return Tl(e, t)
                                })),
                                r = new Yt(n);
                            return new tn(e.path, r)
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this === e
                        }
                    }]), n
                }(ul),
                bl = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r) {
                        var i;
                        return (0, f.Z)(this, n), (i = t.call(this, e)).cc = r, i
                    }
                    return (0, h.Z)(n, [{
                        key: "_toFieldTransform",
                        value: function(e) {
                            var t = new $t(e.M, Bt(e.M, this.cc));
                            return new tn(e.path, t)
                        }
                    }, {
                        key: "isEqual",
                        value: function(e) {
                            return this === e
                        }
                    }]), n
                }(ul);

            function xl(e, t, n, r) {
                var i = e.uc(1, t, n);
                Al("Data must be an object, but it was:", i, r);
                var a = [],
                    u = Ge.empty();
                re(r, (function(e, r) {
                    var o = Cl(t, e, n);
                    r = (0, g.m9)(r);
                    var s = i.nc(o);
                    if (r instanceof pl) a.push(o);
                    else {
                        var c = Tl(r, s);
                        null != c && (a.push(o), u.set(o, c))
                    }
                }));
                var o = new ce(a);
                return new ll(u, o, i.fieldTransforms)
            }

            function Il(e, t, n, r, i, a) {
                var u = e.uc(1, t, n),
                    o = [Nl(t, r, n)],
                    s = [i];
                if (a.length % 2 != 0) throw new P(F.INVALID_ARGUMENT, "Function ".concat(t, "() needs to be called with an even number of arguments that alternate between field names and values."));
                for (var c = 0; c < a.length; c += 2) o.push(Nl(t, a[c])), s.push(a[c + 1]);
                for (var l = [], f = Ge.empty(), h = o.length - 1; h >= 0; --h)
                    if (!Ml(l, o[h])) {
                        var d = o[h],
                            v = s[h];
                        v = (0, g.m9)(v);
                        var y = u.nc(d);
                        if (v instanceof pl) l.push(d);
                        else {
                            var p = Tl(v, y);
                            null != p && (l.push(d), f.set(d, p))
                        }
                    }
                var m = new ce(l);
                return new ll(f, m, u.fieldTransforms)
            }

            function El(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return Tl(n, e.uc(r ? 4 : 3, t))
            }

            function Tl(e, t) {
                if (_l(e = (0, g.m9)(e))) return Al("Unsupported field value:", t, e), Sl(e, t);
                if (e instanceof ul) return function(e, t) {
                    if (!fl(t.Ya)) throw t.ic("".concat(e._methodName, "() can only be used with update() and set()"));
                    if (!t.path) throw t.ic("".concat(e._methodName, "() is not currently supported inside arrays"));
                    var n = e._toFieldTransform(t);
                    n && t.fieldTransforms.push(n)
                }(e, t), null;
                if (void 0 === e && t.ignoreUndefinedProperties) return null;
                if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
                    if (t.settings.tc && 4 !== t.Ya) throw t.ic("Nested arrays are not supported");
                    return function(e, t) {
                        var n, r = [],
                            i = 0,
                            a = w(e);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var u = Tl(n.value, t.sc(i));
                                null == u && (u = {
                                    nullValue: "NULL_VALUE"
                                }), r.push(u), i++
                            }
                        } catch (o) {
                            a.e(o)
                        } finally {
                            a.f()
                        }
                        return {
                            arrayValue: {
                                values: r
                            }
                        }
                    }(e, t)
                }
                return function(e, t) {
                    if (null === (e = (0, g.m9)(e))) return {
                        nullValue: "NULL_VALUE"
                    };
                    if ("number" == typeof e) return Bt(t.M, e);
                    if ("boolean" == typeof e) return {
                        booleanValue: e
                    };
                    if ("string" == typeof e) return {
                        stringValue: e
                    };
                    if (e instanceof Date) {
                        var n = ee.fromDate(e);
                        return {
                            timestampValue: Xn(t.M, n)
                        }
                    }
                    if (e instanceof ee) {
                        var r = new ee(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
                        return {
                            timestampValue: Xn(t.M, r)
                        }
                    }
                    if (e instanceof ol) return {
                        geoPointValue: {
                            latitude: e.latitude,
                            longitude: e.longitude
                        }
                    };
                    if (e instanceof al) return {
                        bytesValue: er(t.M, e._byteString)
                    };
                    if (e instanceof Mc) {
                        var i = t.databaseId,
                            a = e.firestore._databaseId;
                        if (!a.isEqual(i)) throw t.ic("Document reference is for database ".concat(a.projectId, "/").concat(a.database, " but should be for database ").concat(i.projectId, "/").concat(i.database));
                        return {
                            referenceValue: rr(e.firestore._databaseId || t.databaseId, e._key.path)
                        }
                    }
                    throw t.ic("Unsupported field value: ".concat(_c(e)))
                }(e, t)
            }

            function Sl(e, t) {
                var n = {};
                return ie(e) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : re(e, (function(e, r) {
                    var i = Tl(r, t.Za(e));
                    null != i && (n[e] = i)
                })), {
                    mapValue: {
                        fields: n
                    }
                }
            }

            function _l(e) {
                return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof ee || e instanceof ol || e instanceof al || e instanceof Mc || e instanceof ul)
            }

            function Al(e, t, n) {
                if (!_l(n) || ! function(e) {
                        return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e))
                    }(n)) {
                    var r = _c(n);
                    throw "an object" === r ? t.ic(e + " a custom object") : t.ic(e + " " + r)
                }
            }

            function Nl(e, t, n) {
                if ((t = (0, g.m9)(t)) instanceof il) return t._internalPath;
                if ("string" == typeof t) return Cl(e, t);
                throw Zl("Field path arguments must be of type string or ", e, !1, void 0, n)
            }
            var Dl = new RegExp("[~\\*/\\[\\]]");

            function Cl(e, t, n) {
                if (t.search(Dl) >= 0) throw Zl("Invalid field path (".concat(t, "). Paths must not contain '~', '*', '/', '[', or ']'"), e, !1, void 0, n);
                try {
                    return (0, r.Z)(il, (0, l.Z)(t.split(".")))._internalPath
                } catch (i) {
                    throw Zl("Invalid field path (".concat(t, "). Paths must not be empty, begin with '.', end with '.', or contain '..'"), e, !1, void 0, n)
                }
            }

            function Zl(e, t, n, r, i) {
                var a = r && !r.isEmpty(),
                    u = void 0 !== i,
                    o = "Function ".concat(t, "() called with invalid data");
                n && (o += " (via `toFirestore()`)"), o += ". ";
                var s = "";
                return (a || u) && (s += " (found", a && (s += " in field ".concat(r)), u && (s += " in document ".concat(i)), s += ")"), new P(F.INVALID_ARGUMENT, o + e + s)
            }

            function Ml(e, t) {
                return e.some((function(e) {
                    return e.isEqual(t)
                }))
            }
            var Rl = function() {
                    function e(t, n, r, i, a) {
                        (0, f.Z)(this, e), this._firestore = t, this._userDataWriter = n, this._key = r, this._document = i, this._converter = a
                    }
                    return (0, h.Z)(e, [{
                        key: "id",
                        get: function() {
                            return this._key.path.lastSegment()
                        }
                    }, {
                        key: "ref",
                        get: function() {
                            return new Mc(this._firestore, this._converter, this._key)
                        }
                    }, {
                        key: "exists",
                        value: function() {
                            return null !== this._document
                        }
                    }, {
                        key: "data",
                        value: function() {
                            if (this._document) {
                                if (this._converter) {
                                    var e = new Vl(this._firestore, this._userDataWriter, this._key, this._document, null);
                                    return this._converter.fromFirestore(e)
                                }
                                return this._userDataWriter.convertValue(this._document.data.value)
                            }
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            if (this._document) {
                                var t = this._document.data.field(Ll("DocumentSnapshot.get", e));
                                if (null !== t) return this._userDataWriter.convertValue(t)
                            }
                        }
                    }]), e
                }(),
                Vl = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n() {
                        return (0, f.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, h.Z)(n, [{
                        key: "data",
                        value: function() {
                            return (0, i.Z)((0, c.Z)(n.prototype), "data", this).call(this)
                        }
                    }]), n
                }(Rl);

            function Ll(e, t) {
                return "string" == typeof t ? Cl(e, t) : t instanceof il ? t._internalPath : t._delegate._internalPath
            }
            var Fl = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this.hasPendingWrites = t, this.fromCache = n
                    }
                    return (0, h.Z)(e, [{
                        key: "isEqual",
                        value: function(e) {
                            return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
                        }
                    }]), e
                }(),
                Pl = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e, r, i, a, u, o) {
                        var s;
                        return (0, f.Z)(this, n), (s = t.call(this, e, r, i, a, o))._firestore = e, s._firestoreImpl = e, s.metadata = u, s
                    }
                    return (0, h.Z)(n, [{
                        key: "exists",
                        value: function() {
                            return (0, i.Z)((0, c.Z)(n.prototype), "exists", this).call(this)
                        }
                    }, {
                        key: "data",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (this._document) {
                                if (this._converter) {
                                    var t = new Ol(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                                    return this._converter.fromFirestore(t, e)
                                }
                                return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
                            }
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this._document) {
                                var n = this._document.data.field(Ll("DocumentSnapshot.get", e));
                                if (null !== n) return this._userDataWriter.convertValue(n, t.serverTimestamps)
                            }
                        }
                    }]), n
                }(Rl),
                Ol = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n() {
                        return (0, f.Z)(this, n), t.apply(this, arguments)
                    }
                    return (0, h.Z)(n, [{
                        key: "data",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (0, i.Z)((0, c.Z)(n.prototype), "data", this).call(this, e)
                        }
                    }]), n
                }(Pl),
                ql = function() {
                    function e(t, n, r, i) {
                        (0, f.Z)(this, e), this._firestore = t, this._userDataWriter = n, this._snapshot = i, this.metadata = new Fl(i.hasPendingWrites, i.fromCache), this.query = r
                    }
                    return (0, h.Z)(e, [{
                        key: "docs",
                        get: function() {
                            var e = [];
                            return this.forEach((function(t) {
                                return e.push(t)
                            })), e
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this._snapshot.docs.size
                        }
                    }, {
                        key: "empty",
                        get: function() {
                            return 0 === this.size
                        }
                    }, {
                        key: "forEach",
                        value: function(e, t) {
                            var n = this;
                            this._snapshot.docs.forEach((function(r) {
                                e.call(t, new Ol(n._firestore, n._userDataWriter, r.key, r, new Fl(n._snapshot.mutatedKeys.has(r.key), n._snapshot.fromCache), n.query.converter))
                            }))
                        }
                    }, {
                        key: "docChanges",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = !!e.includeMetadataChanges;
                            if (t && this._snapshot.excludesMetadataChanges) throw new P(F.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                            return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function(e, t) {
                                if (e._snapshot.oldDocs.isEmpty()) {
                                    var n = 0;
                                    return e._snapshot.docChanges.map((function(t) {
                                        return {
                                            type: "added",
                                            doc: new Ol(e._firestore, e._userDataWriter, t.doc.key, t.doc, new Fl(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter),
                                            oldIndex: -1,
                                            newIndex: n++
                                        }
                                    }))
                                }
                                var r = e._snapshot.oldDocs;
                                return e._snapshot.docChanges.filter((function(e) {
                                    return t || 3 !== e.type
                                })).map((function(t) {
                                    var n = new Ol(e._firestore, e._userDataWriter, t.doc.key, t.doc, new Fl(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter),
                                        i = -1,
                                        a = -1;
                                    return 0 !== t.type && (i = r.indexOf(t.doc.key), r = r.delete(t.doc.key)), 1 !== t.type && (a = (r = r.add(t.doc)).indexOf(t.doc.key)), {
                                        type: Ul(t.type),
                                        doc: n,
                                        oldIndex: i,
                                        newIndex: a
                                    }
                                }))
                            }(this, t), this._cachedChangesIncludeMetadataChanges = t), this._cachedChanges
                        }
                    }]), e
                }();

            function Ul(e) {
                switch (e) {
                    case 0:
                        return "added";
                    case 2:
                    case 3:
                        return "modified";
                    case 1:
                        return "removed";
                    default:
                        return M()
                }
            }

            function Bl(e, t) {
                return e instanceof Pl && t instanceof Pl ? e._firestore === t._firestore && e._key.isEqual(t._key) && (null === e._document ? null === t._document : e._document.isEqual(t._document)) && e._converter === t._converter : e instanceof ql && t instanceof ql && e._firestore === t._firestore && qc(e.query, t.query) && e.metadata.isEqual(t.metadata) && e._snapshot.isEqual(t._snapshot)
            }

            function Kl(e) {
                if (St(e) && 0 === e.explicitOrderBy.length) throw new P(F.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
            }
            var Gl = (0, h.Z)((function e() {
                (0, f.Z)(this, e)
            }));

            function jl(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (var i = 0, a = n; i < a.length; i++) {
                    var u = a[i];
                    e = u._apply(e)
                }
                return e
            }
            var zl = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r, i) {
                    var a;
                    return (0, f.Z)(this, n), (a = t.call(this)).hc = e, a.lc = r, a.fc = i, a.type = "where", a
                }
                return (0, h.Z)(n, [{
                    key: "_apply",
                    value: function(e) {
                        var t = vl(e.firestore),
                            n = function(e, t, n, r, i, a, u) {
                                var o;
                                if (i.isKeyField()) {
                                    if ("array-contains" === a || "array-contains-any" === a) throw new P(F.INVALID_ARGUMENT, "Invalid Query. You can't perform '".concat(a, "' queries on documentId()."));
                                    if ("in" === a || "not-in" === a) {
                                        sf(u, a);
                                        var s, c = [],
                                            l = w(u);
                                        try {
                                            for (l.s(); !(s = l.n()).done;) {
                                                var f = s.value;
                                                c.push( of (r, e, f))
                                            }
                                        } catch (d) {
                                            l.e(d)
                                        } finally {
                                            l.f()
                                        }
                                        o = {
                                            arrayValue: {
                                                values: c
                                            }
                                        }
                                    } else o = of (r, e, u)
                                } else "in" !== a && "not-in" !== a && "array-contains-any" !== a || sf(u, a), o = El(n, "where", u, "in" === a || "not-in" === a);
                                var h = st.create(i, a, o);
                                return function(e, t) {
                                    if (t.S()) {
                                        var n = At(e);
                                        if (null !== n && !n.isEqual(t.field)) throw new P(F.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '".concat(n.toString(), "' and '").concat(t.field.toString(), "'"));
                                        var r = _t(e);
                                        null !== r && cf(e, t.field, r)
                                    }
                                    var i = function(e, t) {
                                        var n, r = w(e.filters);
                                        try {
                                            for (r.s(); !(n = r.n()).done;) {
                                                var i = n.value;
                                                if (t.indexOf(i.op) >= 0) return i.op
                                            }
                                        } catch (d) {
                                            r.e(d)
                                        } finally {
                                            r.f()
                                        }
                                        return null
                                    }(e, function(e) {
                                        switch (e) {
                                            case "!=":
                                                return ["!=", "not-in"];
                                            case "array-contains":
                                                return ["array-contains", "array-contains-any", "not-in"];
                                            case "in":
                                                return ["array-contains-any", "in", "not-in"];
                                            case "array-contains-any":
                                                return ["array-contains", "array-contains-any", "in", "not-in"];
                                            case "not-in":
                                                return ["array-contains", "array-contains-any", "in", "not-in", "!="];
                                            default:
                                                return []
                                        }
                                    }(t.op));
                                    if (null !== i) throw i === t.op ? new P(F.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '".concat(t.op.toString(), "' filter.")) : new P(F.INVALID_ARGUMENT, "Invalid query. You cannot use '".concat(t.op.toString(), "' filters with '").concat(i.toString(), "' filters."))
                                }(e, h), h
                            }(e._query, 0, t, e.firestore._databaseId, this.hc, this.lc, this.fc);
                        return new Rc(e.firestore, e.converter, function(e, t) {
                            var n = e.filters.concat([t]);
                            return new xt(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt)
                        }(e._query, n))
                    }
                }]), n
            }(Gl);

            function Ql(e, t, n) {
                var r = t,
                    i = Ll("where", e);
                return new zl(i, r, n)
            }
            var Wl = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r) {
                    var i;
                    return (0, f.Z)(this, n), (i = t.call(this)).hc = e, i.dc = r, i.type = "orderBy", i
                }
                return (0, h.Z)(n, [{
                    key: "_apply",
                    value: function(e) {
                        var t = function(e, t, n) {
                            if (null !== e.startAt) throw new P(F.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
                            if (null !== e.endAt) throw new P(F.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
                            var r = new gt(t, n);
                            return function(e, t) {
                                if (null === _t(e)) {
                                    var n = At(e);
                                    null !== n && cf(e, n, t.field)
                                }
                            }(e, r), r
                        }(e._query, this.hc, this.dc);
                        return new Rc(e.firestore, e.converter, function(e, t) {
                            var n = e.explicitOrderBy.concat([t]);
                            return new xt(e.path, e.collectionGroup, n, e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt)
                        }(e._query, t))
                    }
                }]), n
            }(Gl);

            function Hl(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "asc",
                    n = t,
                    r = Ll("orderBy", e);
                return new Wl(r, n)
            }
            var Yl = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r, i) {
                    var a;
                    return (0, f.Z)(this, n), (a = t.call(this)).type = e, a._c = r, a.wc = i, a
                }
                return (0, h.Z)(n, [{
                    key: "_apply",
                    value: function(e) {
                        return new Rc(e.firestore, e.converter, Zt(e._query, this._c, this.wc))
                    }
                }]), n
            }(Gl);

            function Jl(e) {
                return Nc("limit", e), new Yl("limit", e, "F")
            }

            function $l(e) {
                return Nc("limitToLast", e), new Yl("limitToLast", e, "L")
            }
            var Xl = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r, i) {
                    var a;
                    return (0, f.Z)(this, n), (a = t.call(this)).type = e, a.mc = r, a.gc = i, a
                }
                return (0, h.Z)(n, [{
                    key: "_apply",
                    value: function(e) {
                        var t = uf(e, this.type, this.mc, this.gc);
                        return new Rc(e.firestore, e.converter, function(e, t) {
                            return new xt(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, t, e.endAt)
                        }(e._query, t))
                    }
                }]), n
            }(Gl);

            function ef() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new Xl("startAt", t, !0)
            }

            function tf() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new Xl("startAfter", t, !1)
            }
            var nf = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r, i) {
                    var a;
                    return (0, f.Z)(this, n), (a = t.call(this)).type = e, a.mc = r, a.gc = i, a
                }
                return (0, h.Z)(n, [{
                    key: "_apply",
                    value: function(e) {
                        var t = uf(e, this.type, this.mc, this.gc);
                        return new Rc(e.firestore, e.converter, function(e, t) {
                            return new xt(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, t)
                        }(e._query, t))
                    }
                }]), n
            }(Gl);

            function rf() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new nf("endBefore", t, !1)
            }

            function af() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new nf("endAt", t, !0)
            }

            function uf(e, t, n, r) {
                if (n[0] = (0, g.m9)(n[0]), n[0] instanceof Rl) return function(e, t, n, r, i) {
                    if (!r) throw new P(F.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for ".concat(n, "()."));
                    var a, u = [],
                        o = w(Dt(e));
                    try {
                        for (o.s(); !(a = o.n()).done;) {
                            var s = a.value;
                            if (s.field.isKeyField()) u.push(Re(t, r.key));
                            else {
                                var c = r.data.field(s.field);
                                if (pe(c)) throw new P(F.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                                if (null === c) {
                                    var l = s.field.canonicalString();
                                    throw new P(F.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '".concat(l, "' (used as the orderBy) does not exist."))
                                }
                                u.push(c)
                            }
                        }
                    } catch (f) {
                        o.e(f)
                    } finally {
                        o.f()
                    }
                    return new mt(u, i)
                }(e._query, e.firestore._databaseId, t, n[0]._document, r);
                var i = vl(e.firestore);
                return function(e, t, n, r, i, a) {
                    var u = e.explicitOrderBy;
                    if (i.length > u.length) throw new P(F.INVALID_ARGUMENT, "Too many arguments provided to ".concat(r, "(). The number of arguments must be less than or equal to the number of orderBy() clauses"));
                    for (var o = [], s = 0; s < i.length; s++) {
                        var c = i[s];
                        if (u[s].field.isKeyField()) {
                            if ("string" != typeof c) throw new P(F.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in ".concat(r, "(), but got a ").concat(typeof c));
                            if (!Nt(e) && -1 !== c.indexOf("/")) throw new P(F.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by documentId(), the value passed to ".concat(r, "() must be a plain document ID, but '").concat(c, "' contains a slash."));
                            var l = e.path.child(ue.fromString(c));
                            if (!Ee.isDocumentKey(l)) throw new P(F.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by documentId(), the value passed to ".concat(r, "() must result in a valid document path, but '").concat(l, "' is not because it contains an odd number of segments."));
                            var f = new Ee(l);
                            o.push(Re(t, f))
                        } else {
                            var h = El(n, r, c);
                            o.push(h)
                        }
                    }
                    return new mt(o, a)
                }(e._query, e.firestore._databaseId, i, t, n, r)
            }

            function of (e, t, n) {
                if ("string" == typeof(n = (0, g.m9)(n))) {
                    if ("" === n) throw new P(F.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
                    if (!Nt(t) && -1 !== n.indexOf("/")) throw new P(F.INVALID_ARGUMENT, "Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(n, "' contains a '/' character."));
                    var r = t.path.child(ue.fromString(n));
                    if (!Ee.isDocumentKey(r)) throw new P(F.INVALID_ARGUMENT, "Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r, "' is not because it has an odd number of segments (").concat(r.length, ")."));
                    return Re(e, new Ee(r))
                }
                if (n instanceof Mc) return Re(e, n._key);
                throw new P(F.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(_c(n), "."))
            }

            function sf(e, t) {
                if (!Array.isArray(e) || 0 === e.length) throw new P(F.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '".concat(t.toString(), "' filters."));
                if (e.length > 10) throw new P(F.INVALID_ARGUMENT, "Invalid Query. '".concat(t.toString(), "' filters support a maximum of 10 elements in the value array."))
            }

            function cf(e, t, n) {
                if (!n.isEqual(t)) throw new P(F.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '".concat(t.toString(), "' and so you must also use '").concat(t.toString(), "' as your first argument to orderBy(), but your first orderBy() is on field '").concat(n.toString(), "' instead."))
            }
            var lf = function() {
                function e() {
                    (0, f.Z)(this, e)
                }
                return (0, h.Z)(e, [{
                    key: "convertValue",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                        switch (_e(e)) {
                            case 0:
                                return null;
                            case 1:
                                return e.booleanValue;
                            case 2:
                                return ve(e.integerValue || e.doubleValue);
                            case 3:
                                return this.convertTimestamp(e.timestampValue);
                            case 4:
                                return this.convertServerTimestamp(e, t);
                            case 5:
                                return e.stringValue;
                            case 6:
                                return this.convertBytes(ye(e.bytesValue));
                            case 7:
                                return this.convertReference(e.referenceValue);
                            case 8:
                                return this.convertGeoPoint(e.geoPointValue);
                            case 9:
                                return this.convertArray(e.arrayValue, t);
                            case 10:
                                return this.convertObject(e.mapValue, t);
                            default:
                                throw M()
                        }
                    }
                }, {
                    key: "convertObject",
                    value: function(e, t) {
                        var n = this,
                            r = {};
                        return re(e.fields, (function(e, i) {
                            r[e] = n.convertValue(i, t)
                        })), r
                    }
                }, {
                    key: "convertGeoPoint",
                    value: function(e) {
                        return new ol(ve(e.latitude), ve(e.longitude))
                    }
                }, {
                    key: "convertArray",
                    value: function(e, t) {
                        var n = this;
                        return (e.values || []).map((function(e) {
                            return n.convertValue(e, t)
                        }))
                    }
                }, {
                    key: "convertServerTimestamp",
                    value: function(e, t) {
                        switch (t) {
                            case "previous":
                                var n = me(e);
                                return null == n ? null : this.convertValue(n, t);
                            case "estimate":
                                return this.convertTimestamp(ge(e));
                            default:
                                return null
                        }
                    }
                }, {
                    key: "convertTimestamp",
                    value: function(e) {
                        var t = de(e);
                        return new ee(t.seconds, t.nanos)
                    }
                }, {
                    key: "convertDocumentKey",
                    value: function(e, t) {
                        var n = ue.fromString(e);
                        R(_r(n));
                        var r = new we(n.get(1), n.get(3)),
                            i = new Ee(n.popFirst(5));
                        return r.isEqual(t) || D("Document ".concat(i, " contains a document reference within a different database (").concat(r.projectId, "/").concat(r.database, ") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId, "/").concat(t.database, ") instead.")), i
                    }
                }]), e
            }();

            function ff(e, t, n) {
                return e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t
            }
            var hf = function(e) {
                    (0, o.Z)(n, e);
                    var t = x(n);

                    function n(e) {
                        var r;
                        return (0, f.Z)(this, n), (r = t.call(this)).firestore = e, r
                    }
                    return (0, h.Z)(n, [{
                        key: "convertBytes",
                        value: function(e) {
                            return new al(e)
                        }
                    }, {
                        key: "convertReference",
                        value: function(e) {
                            var t = this.convertDocumentKey(e, this.firestore._databaseId);
                            return new Mc(this.firestore, null, t)
                        }
                    }]), n
                }(lf),
                df = function() {
                    function e(t, n) {
                        (0, f.Z)(this, e), this._firestore = t, this._commitHandler = n, this._mutations = [], this._committed = !1, this._dataReader = vl(t)
                    }
                    return (0, h.Z)(e, [{
                        key: "set",
                        value: function(e, t, n) {
                            this._verifyNotCommitted();
                            var r = vf(e, this._firestore),
                                i = ff(r.converter, t, n),
                                a = yl(this._dataReader, "WriteBatch.set", r._key, i, null !== r.converter, n);
                            return this._mutations.push(a.toMutation(r._key, rn.none())), this
                        }
                    }, {
                        key: "update",
                        value: function(e, t, n) {
                            this._verifyNotCommitted();
                            for (var r, i = vf(e, this._firestore), a = arguments.length, u = new Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) u[o - 3] = arguments[o];
                            return r = "string" == typeof(t = (0, g.m9)(t)) || t instanceof il ? Il(this._dataReader, "WriteBatch.update", i._key, t, n, u) : xl(this._dataReader, "WriteBatch.update", i._key, t), this._mutations.push(r.toMutation(i._key, rn.exists(!0))), this
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            this._verifyNotCommitted();
                            var t = vf(e, this._firestore);
                            return this._mutations = this._mutations.concat(new kn(t._key, rn.none())), this
                        }
                    }, {
                        key: "commit",
                        value: function() {
                            return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve()
                        }
                    }, {
                        key: "_verifyNotCommitted",
                        value: function() {
                            if (this._committed) throw new P(F.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                        }
                    }]), e
                }();

            function vf(e, t) {
                if ((e = (0, g.m9)(e)).firestore !== t) throw new P(F.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                return e
            }

            function yf(e) {
                e = Ac(e, Mc);
                var t = Ac(e.firestore, jc);
                return wc(zc(t), e._key).then((function(n) {
                    return Nf(t, e, n)
                }))
            }
            var pf = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e) {
                    var r;
                    return (0, f.Z)(this, n), (r = t.call(this)).firestore = e, r
                }
                return (0, h.Z)(n, [{
                    key: "convertBytes",
                    value: function(e) {
                        return new al(e)
                    }
                }, {
                    key: "convertReference",
                    value: function(e) {
                        var t = this.convertDocumentKey(e, this.firestore._databaseId);
                        return new Mc(this.firestore, null, t)
                    }
                }]), n
            }(lf);

            function mf(e) {
                e = Ac(e, Mc);
                var t = Ac(e.firestore, jc),
                    n = zc(t),
                    r = new pf(t);
                return function(e, t) {
                    var n = new O;
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function r() {
                        return v().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.t0 = function() {
                                        var e = (0, u.Z)(v().mark((function e(t, n, r) {
                                            var i, a;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3,
                                                            function(e, t) {
                                                                var n = L(e);
                                                                return n.persistence.runTransaction("read document", "readonly", (function(e) {
                                                                    return n.ai.Bs(e, t)
                                                                }))
                                                            }(t, n);
                                                    case 3:
                                                        (i = e.sent).isFoundDocument() ? r.resolve(i) : i.isNoDocument() ? r.resolve(null) : r.reject(new P(F.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), e.next = 11;
                                                        break;
                                                    case 7:
                                                        e.prev = 7, e.t0 = e.catch(0), a = Do(e.t0, "Failed to get document '".concat(n, " from cache")), r.reject(a);
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 7]
                                            ])
                                        })));
                                        return function(t, n, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), r.next = 3, yc(e);
                                case 3:
                                    return r.t1 = r.sent, r.t2 = t, r.t3 = n, r.abrupt("return", (0, r.t0)(r.t1, r.t2, r.t3));
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))), n.promise
                }(n, e._key).then((function(n) {
                    return new Pl(t, r, e._key, n, new Fl(null !== n && n.hasLocalMutations, !0), e.converter)
                }))
            }

            function gf(e) {
                e = Ac(e, Mc);
                var t = Ac(e.firestore, jc);
                return wc(zc(t), e._key, {
                    source: "server"
                }).then((function(n) {
                    return Nf(t, e, n)
                }))
            }

            function kf(e) {
                e = Ac(e, Rc);
                var t = Ac(e.firestore, jc),
                    n = zc(t),
                    r = new pf(t);
                return Kl(e._query), bc(n, e._query).then((function(n) {
                    return new ql(t, r, e, n)
                }))
            }

            function wf(e) {
                e = Ac(e, Rc);
                var t = Ac(e.firestore, jc),
                    n = zc(t),
                    r = new pf(t);
                return function(e, t) {
                    var n = new O;
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function r() {
                        return v().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.t0 = function() {
                                        var e = (0, u.Z)(v().mark((function e(t, n, r) {
                                            var i, a, u, o, s;
                                            return v().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, Ja(t, n, !0);
                                                    case 3:
                                                        i = e.sent, a = new Yo(n, i.hi), u = a.Gu(i.documents), o = a.applyChanges(u, !1), r.resolve(o.snapshot), e.next = 14;
                                                        break;
                                                    case 10:
                                                        e.prev = 10, e.t0 = e.catch(0), s = Do(e.t0, "Failed to execute query '".concat(n, " against cache")), r.reject(s);
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 10]
                                            ])
                                        })));
                                        return function(t, n, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), r.next = 3, yc(e);
                                case 3:
                                    return r.t1 = r.sent, r.t2 = t, r.t3 = n, r.abrupt("return", (0, r.t0)(r.t1, r.t2, r.t3));
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))), n.promise
                }(n, e._query).then((function(n) {
                    return new ql(t, r, e, n)
                }))
            }

            function bf(e) {
                e = Ac(e, Rc);
                var t = Ac(e.firestore, jc),
                    n = zc(t),
                    r = new pf(t);
                return bc(n, e._query, {
                    source: "server"
                }).then((function(n) {
                    return new ql(t, r, e, n)
                }))
            }

            function xf(e, t, n) {
                e = Ac(e, Mc);
                var r = Ac(e.firestore, jc),
                    i = ff(e.converter, t, n);
                return Af(r, [yl(vl(r), "setDoc", e._key, i, null !== e.converter, n).toMutation(e._key, rn.none())])
            }

            function If(e, t, n) {
                e = Ac(e, Mc);
                for (var r = Ac(e.firestore, jc), i = vl(r), a = arguments.length, u = new Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) u[o - 3] = arguments[o];
                return Af(r, [("string" == typeof(t = (0, g.m9)(t)) || t instanceof il ? Il(i, "updateDoc", e._key, t, n, u) : xl(i, "updateDoc", e._key, t)).toMutation(e._key, rn.exists(!0))])
            }

            function Ef(e) {
                return Af(Ac(e.firestore, jc), [new kn(e._key, rn.none())])
            }

            function Tf(e, t) {
                var n = Ac(e.firestore, jc),
                    r = Pc(e),
                    i = ff(e.converter, t);
                return Af(n, [yl(vl(e.firestore), "addDoc", r._key, i, null !== e.converter, {}).toMutation(r._key, rn.exists(!1))]).then((function() {
                    return r
                }))
            }

            function Sf(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var i, a, o;
                e = (0, g.m9)(e);
                var s = {
                        includeMetadataChanges: !1
                    },
                    c = 0;
                "object" != typeof n[c] || Bc(n[c]) || (s = n[c], c++);
                var l, f, h, d = {
                    includeMetadataChanges: s.includeMetadataChanges
                };
                if (Bc(n[c])) {
                    var y = n[c];
                    n[c] = null === (i = y.next) || void 0 === i ? void 0 : i.bind(y), n[c + 1] = null === (a = y.error) || void 0 === a ? void 0 : a.bind(y), n[c + 2] = null === (o = y.complete) || void 0 === o ? void 0 : o.bind(y)
                }
                if (e instanceof Mc) f = Ac(e.firestore, jc), h = Et(e._key.path), l = {
                    next: function(t) {
                        n[c] && n[c](Nf(f, e, t))
                    },
                    error: n[c + 1],
                    complete: n[c + 2]
                };
                else {
                    var p = Ac(e, Rc);
                    f = Ac(p.firestore, jc), h = p._query;
                    var m = new pf(f);
                    l = {
                        next: function(e) {
                            n[c] && n[c](new ql(f, m, p, e))
                        },
                        error: n[c + 1],
                        complete: n[c + 2]
                    }, Kl(e._query)
                }
                return function(e, t, n, r) {
                    var i = new tc(r),
                        a = new Ko(t, i, n);
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function t() {
                            return v().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.t0 = Lo, t.next = 3, gc(e);
                                    case 3:
                                        return t.t1 = t.sent, t.t2 = a, t.abrupt("return", (0, t.t0)(t.t1, t.t2));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))),
                        function() {
                            i.pa(), e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function t() {
                                return v().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.t0 = Po, t.next = 3, gc(e);
                                        case 3:
                                            return t.t1 = t.sent, t.t2 = a, t.abrupt("return", (0, t.t0)(t.t1, t.t2));
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))))
                        }
                }(zc(f), h, d, l)
            }

            function _f(e, t) {
                return function(e, t) {
                    var n = new tc(t);
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function t() {
                            return v().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.t0 = function(e, t) {
                                            L(e).Tu.add(t), t.next()
                                        }, t.next = 3, gc(e);
                                    case 3:
                                        return t.t1 = t.sent, t.t2 = n, t.abrupt("return", (0, t.t0)(t.t1, t.t2));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))),
                        function() {
                            n.pa(), e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function t() {
                                return v().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.t0 = function(e, t) {
                                                L(e).Tu.delete(t)
                                            }, t.next = 3, gc(e);
                                        case 3:
                                            return t.t1 = t.sent, t.t2 = n, t.abrupt("return", (0, t.t0)(t.t1, t.t2));
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))))
                        }
                }(zc(e = Ac(e, jc)), Bc(t) ? t : {
                    next: t
                })
            }

            function Af(e, t) {
                return function(e, t) {
                    var n = new O;
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function r() {
                        return v().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.t0 = us, r.next = 3, mc(e);
                                case 3:
                                    return r.t1 = r.sent, r.t2 = t, r.t3 = n, r.abrupt("return", (0, r.t0)(r.t1, r.t2, r.t3));
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))), n.promise
                }(zc(e), t)
            }

            function Nf(e, t, n) {
                var r = n.docs.get(t._key),
                    i = new pf(e);
                return new Pl(e, i, t._key, r, new Fl(n.hasPendingWrites, n.fromCache), t.converter)
            }
            var Df = function(e) {
                (0, o.Z)(n, e);
                var t = x(n);

                function n(e, r) {
                    var i;
                    return (0, f.Z)(this, n), (i = t.call(this, e, r))._firestore = e, i
                }
                return (0, h.Z)(n, [{
                    key: "get",
                    value: function(e) {
                        var t = this,
                            r = vf(e, this._firestore),
                            a = new pf(this._firestore);
                        return (0, i.Z)((0, c.Z)(n.prototype), "get", this).call(this, e).then((function(e) {
                            return new Pl(t._firestore, a, r._key, e._document, new Fl(!1, !1), r.converter)
                        }))
                    }
                }]), n
            }(function() {
                function e(t, n) {
                    (0, f.Z)(this, e), this._firestore = t, this._transaction = n, this._dataReader = vl(t)
                }
                return (0, h.Z)(e, [{
                    key: "get",
                    value: function(e) {
                        var t = this,
                            n = vf(e, this._firestore),
                            r = new hf(this._firestore);
                        return this._transaction.lookup([n._key]).then((function(e) {
                            if (!e || 1 !== e.length) return M();
                            var i = e[0];
                            if (i.isFoundDocument()) return new Rl(t._firestore, r, i.key, i, n.converter);
                            if (i.isNoDocument()) return new Rl(t._firestore, r, n._key, null, n.converter);
                            throw M()
                        }))
                    }
                }, {
                    key: "set",
                    value: function(e, t, n) {
                        var r = vf(e, this._firestore),
                            i = ff(r.converter, t, n),
                            a = yl(this._dataReader, "Transaction.set", r._key, i, null !== r.converter, n);
                        return this._transaction.set(r._key, a), this
                    }
                }, {
                    key: "update",
                    value: function(e, t, n) {
                        for (var r, i = vf(e, this._firestore), a = arguments.length, u = new Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) u[o - 3] = arguments[o];
                        return r = "string" == typeof(t = (0, g.m9)(t)) || t instanceof il ? Il(this._dataReader, "Transaction.update", i._key, t, n, u) : xl(this._dataReader, "Transaction.update", i._key, t), this._transaction.update(i._key, r), this
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        var t = vf(e, this._firestore);
                        return this._transaction.delete(t._key), this
                    }
                }]), e
            }());

            function Cf(e, t) {
                return function(e, t) {
                    var n = new O;
                    return e.asyncQueue.enqueueAndForget((0, u.Z)(v().mark((function r() {
                        var i;
                        return v().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                        function(e) {
                                            return hc(e).then((function(e) {
                                                return e.datastore
                                            }))
                                        }(e);
                                case 2:
                                    i = r.sent, new ic(e.asyncQueue, i, t, n).run();
                                case 4:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))), n.promise
                }(zc(e = Ac(e, jc)), (function(n) {
                    return t(new Df(e, n))
                }))
            }

            function Zf() {
                return new pl("deleteField")
            }

            function Mf() {
                return new gl("serverTimestamp")
            }

            function Rf() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new kl("arrayUnion", t)
            }

            function Vf() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new wl("arrayRemove", t)
            }

            function Lf(e) {
                return new bl("increment", e)
            }! function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                ! function(e) {
                    T = e
                }(y.SDK_VERSION), (0, y._registerComponent)(new p.wA("firestore", (function(e, n) {
                    var r = n.options,
                        i = e.getProvider("app").getImmediate(),
                        a = new jc(i, new K(e.getProvider("auth-internal")), new Q(e.getProvider("app-check-internal")));
                    return r = Object.assign({
                        useFetchStreams: t
                    }, r), a._setSettings(r), a
                }), "PUBLIC")), (0, y.registerVersion)(I, "3.4.7", e), (0, y.registerVersion)(I, "3.4.7", "esm2017")
            }()
        }
    }
]);
//# sourceMappingURL=a9400ff7-57f174cb0f5f28fcf320.js.map