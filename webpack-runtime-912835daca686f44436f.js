! function() {
    "use strict";
    var e, n, t, o, r, c = {},
        a = {};

    function f(e) {
        var n = a[e];
        if (void 0 !== n) return n.exports;
        var t = a[e] = {
            exports: {}
        };
        return c[e].call(t.exports, t, t.exports, f), t.exports
    }
    f.m = c, f.amdD = function() {
            throw new Error("define cannot be used indirect")
        }, e = [], f.O = function(n, t, o, r) {
            if (!t) {
                var c = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    t = e[s][0], o = e[s][1], r = e[s][2];
                    for (var a = !0, i = 0; i < t.length; i++)(!1 & r || c >= r) && Object.keys(f.O).every((function(e) {
                        return f.O[e](t[i])
                    })) ? t.splice(i--, 1) : (a = !1, r < c && (c = r));
                    if (a) {
                        e.splice(s--, 1);
                        var d = o();
                        void 0 !== d && (n = d)
                    }
                }
                return n
            }
            r = r || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > r; s--) e[s] = e[s - 1];
            e[s] = [t, o, r]
        }, f.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return f.d(n, {
                a: n
            }), n
        }, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        }, f.t = function(e, o) {
            if (1 & o && (e = this(e)), 8 & o) return e;
            if ("object" == typeof e && e) {
                if (4 & o && e.__esModule) return e;
                if (16 & o && "function" == typeof e.then) return e
            }
            var r = Object.create(null);
            f.r(r);
            var c = {};
            n = n || [null, t({}), t([]), t(t)];
            for (var a = 2 & o && e;
                "object" == typeof a && !~n.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach((function(n) {
                c[n] = function() {
                    return e[n]
                }
            }));
            return c.default = function() {
                return e
            }, f.d(r, c), r
        }, f.d = function(e, n) {
            for (var t in n) f.o(n, t) && !f.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: n[t]
            })
        }, f.f = {}, f.e = function(e) {
            return Promise.all(Object.keys(f.f).reduce((function(n, t) {
                return f.f[t](e, n), n
            }), []))
        }, f.u = function(e) {
            return ({
                81: "component---src-pages-legal-disclaimer-js",
                106: "6726d5e6a595a96f7c6686e36b9bd1364195b138",
                172: "component---src-pages-authorization-js",
                181: "component---src-pages-company-contact-js",
                191: "5db82c97fd2a7584079fddedfffc830f247a44dc",
                212: "ebec3a01",
                317: "component---src-pages-web-extension-addon-real-time-demo-js",
                375: "5933f3ba",
                436: "component---src-pages-partners-glaxf-voice-activity-detection-js",
                470: "fe9d726cd40d2c9725d366eafef1e4355d67c7e2",
                517: "04a7fa58d64f06524587a97b4ba966c5f3ed8bf9",
                519: "component---src-pages-legal-privacy-policy-js",
                596: "component---src-pages-web-extension-addon-js",
                603: "component---src-pages-plans-and-pricing-js",
                617: "component---src-pages-account-sign-in-js",
                637: "component---src-pages-labs-js",
                678: "component---src-pages-index-js",
                684: "component---src-pages-web-extension-addon-roadmap-js",
                688: "component---src-pages-company-about-js",
                689: "component---src-pages-legal-user-data-deletion-mdx",
                700: "06045bc7",
                773: "67530449",
                883: "component---src-pages-404-js",
                925: "component---src-pages-legal-terms-of-service-mdx",
                928: "component---src-pages-awesome-mdx",
                978: "component---src-pages-legal-terms-and-conditions-js",
                980: "component---src-pages-legal-cookie-policy-js"
            }[e] || e) + "-" + {
                19: "cb48602dc1251d6e9436",
                81: "daf18ecc4ae1e6fe1508",
                106: "cd518e89eee132503b97",
                172: "94c651d01ef37c8e9719",
                181: "18ff3f66940023893d3e",
                191: "0379b4c95b5167adb1ae",
                212: "bbc373b9558eda22b20c",
                317: "37d5d89402036090ceca",
                320: "7b3878e135abb5702615",
                375: "c983d9efc6236f7c8ef8",
                436: "7194a599b7172896d2e7",
                470: "b78d2f8dd8a6c9d1e661",
                517: "f5e93b8e614be5c51734",
                519: "397902d2c6a343374d5e",
                596: "b3e85d5d73e0b3c675ac",
                603: "5712803473b59679a575",
                617: "7127f71da22bc873db26",
                637: "04e0f047f15dd54a5279",
                678: "5ecb41e27d8a0ac26a11",
                684: "d659dee43df75abef69e",
                688: "e4bdfc7129e5c52fe760",
                689: "30813b43d7ffdabe0bc1",
                700: "df7598c05d9e1694a9ae",
                712: "12027a29f082e6e7edfa",
                773: "261a8f29cbe6b54fdd6d",
                883: "d44be6b8d45f2651ec38",
                925: "ed2fca38fab1d4024ff9",
                928: "c3fb9e0acd668243677c",
                978: "a9c26d000d3b3a48d239",
                980: "a3904c6593e1bcb34c1a",
                997: "21d50b48312785b2b5c6"
            }[e] + ".js"
        }, f.miniCssF = function(e) {}, f.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), f.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, o = {}, r = "magic-audio:", f.l = function(e, n, t, c) {
            if (o[e]) o[e].push(n);
            else {
                var a, i;
                if (void 0 !== t)
                    for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
                        var u = d[s];
                        if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == r + t) {
                            a = u;
                            break
                        }
                    }
                a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, f.nc && a.setAttribute("nonce", f.nc), a.setAttribute("data-webpack", r + t), a.src = e), o[e] = [n];
                var p = function(n, t) {
                        a.onerror = a.onload = null, clearTimeout(l);
                        var r = o[e];
                        if (delete o[e], a.parentNode && a.parentNode.removeChild(a), r && r.forEach((function(e) {
                                return e(t)
                            })), n) return n(t)
                    },
                    l = setTimeout(p.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = p.bind(null, a.onerror), a.onload = p.bind(null, a.onload), i && document.head.appendChild(a)
            }
        }, f.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, f.p = "/",
        function() {
            var e = {
                658: 0
            };
            f.f.j = function(n, t) {
                var o = f.o(e, n) ? e[n] : void 0;
                if (0 !== o)
                    if (o) t.push(o[2]);
                    else if (658 != n) {
                    var r = new Promise((function(t, r) {
                        o = e[n] = [t, r]
                    }));
                    t.push(o[2] = r);
                    var c = f.p + f.u(n),
                        a = new Error;
                    f.l(c, (function(t) {
                        if (f.o(e, n) && (0 !== (o = e[n]) && (e[n] = void 0), o)) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                c = t && t.target && t.target.src;
                            a.message = "Loading chunk " + n + " failed.\n(" + r + ": " + c + ")", a.name = "ChunkLoadError", a.type = r, a.request = c, o[1](a)
                        }
                    }), "chunk-" + n, n)
                } else e[n] = 0
            }, f.O.j = function(n) {
                return 0 === e[n]
            };
            var n = function(n, t) {
                    var o, r, c = t[0],
                        a = t[1],
                        i = t[2],
                        d = 0;
                    if (c.some((function(n) {
                            return 0 !== e[n]
                        }))) {
                        for (o in a) f.o(a, o) && (f.m[o] = a[o]);
                        if (i) var s = i(f)
                    }
                    for (n && n(t); d < c.length; d++) r = c[d], f.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                    return f.O(s)
                },
                t = self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || [];
            t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
        }()
}();
//# sourceMappingURL=webpack-runtime-912835daca686f44436f.js.map