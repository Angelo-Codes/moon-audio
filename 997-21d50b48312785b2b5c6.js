"use strict";
(self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || []).push([
    [997], {
        4997: function(e, r, t) {
            t.r(r), t.d(r, {
                lazyHydrate: function() {
                    return c
                }
            });
            var o = t(3493),
                a = t(7378),
                n = t(1542),
                i = (t(6980), t(1484), ["image", "loading", "isLoading", "isLoaded", "toggleIsLoaded", "ref", "imgClassName", "imgStyle", "objectPosition", "backgroundColor", "objectFit"]);

            function c(e, r, t, c) {
                var u = e.image,
                    d = e.loading,
                    l = e.isLoading,
                    g = e.isLoaded,
                    s = e.toggleIsLoaded,
                    m = e.ref,
                    h = e.imgClassName,
                    b = e.imgStyle,
                    f = void 0 === b ? {} : b,
                    k = e.objectPosition,
                    y = e.backgroundColor,
                    C = e.objectFit,
                    L = void 0 === C ? "cover" : C,
                    j = (0, o._)(e, i),
                    v = u.width,
                    w = u.height,
                    p = u.layout,
                    N = u.images,
                    P = u.placeholder,
                    E = u.backgroundColor,
                    F = JSON.stringify(N);
                f = (0, o.a)({
                    objectFit: L,
                    objectPosition: k,
                    backgroundColor: y
                }, f);
                var R = a.createElement(o.L, {
                    layout: p,
                    width: v,
                    height: w
                }, a.createElement(o.P, (0, o.a)({}, (0, o.g)(P, g, p, v, w, E, L, k))), a.createElement(o.M, (0, o.a)({}, j, {
                    width: v,
                    height: w,
                    className: h
                }, (0, o.b)(l, g, N, d, s, F, m, f))));
                return r.current && (n.createRoot ? (t.current || (t.current = n.createRoot(r.current)), t.current.render(R)) : ((t.current || c.current ? n.render : n.hydrate)(R, r.current), t.current = !0)),
                    function() {
                        r.current && (n.createRoot ? t.current.render(null) : n.render(null, r.current))
                    }
            }
        }
    }
]);
//# sourceMappingURL=997-21d50b48312785b2b5c6.js.map