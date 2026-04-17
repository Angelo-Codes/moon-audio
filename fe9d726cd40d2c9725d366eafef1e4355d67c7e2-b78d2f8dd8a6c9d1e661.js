"use strict";
(self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || []).push([
    [470], {
        8873: function(e, t, n) {
            var a = n(7914);
            t.Z = void 0;
            var o = a(n(4801)),
                r = n(4246),
                i = (0, o.default)((0, r.jsx)("path", {
                    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                }), "Mail");
            t.Z = i
        },
        3573: function(e, t, n) {
            var a = n(7914);
            t.Z = void 0;
            var o = a(n(4801)),
                r = n(4246),
                i = (0, o.default)((0, r.jsx)("path", {
                    d: "M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"
                }), "MoveToInbox");
            t.Z = i
        },
        4855: function(e, t, n) {
            n.d(t, {
                ZP: function() {
                    return T
                }
            });
            var a = n(4649),
                o = n(808),
                r = n(5773),
                i = n(7378),
                s = n(8037),
                c = n(1599),
                l = n(7774),
                d = n(7111),
                m = n(7511),
                u = n(5643),
                p = n(2974),
                Z = n(8463),
                v = n(4883),
                g = n(3897),
                f = n(1536),
                y = n(9119),
                b = n(6260);

            function h(e) {
                return (0, y.Z)("MuiListItem", e)
            }
            var x = (0, b.Z)("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]),
                I = n(6162);

            function S(e) {
                return (0, y.Z)("MuiListItemSecondaryAction", e)
            }(0, b.Z)("MuiListItemSecondaryAction", ["root", "disableGutters"]);
            var w = n(4246),
                C = ["className"],
                E = (0, m.ZP)("div", {
                    name: "MuiListItemSecondaryAction",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [t.root, n.disableGutters && t.disableGutters]
                    }
                })((function(e) {
                    var t = e.ownerState;
                    return (0, r.Z)({
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)"
                    }, t.disableGutters && {
                        right: 0
                    })
                })),
                M = i.forwardRef((function(e, t) {
                    var n = (0, u.Z)({
                            props: e,
                            name: "MuiListItemSecondaryAction"
                        }),
                        a = n.className,
                        l = (0, o.Z)(n, C),
                        d = i.useContext(f.Z),
                        m = (0, r.Z)({}, n, {
                            disableGutters: d.disableGutters
                        }),
                        p = function(e) {
                            var t = e.disableGutters,
                                n = e.classes,
                                a = {
                                    root: ["root", t && "disableGutters"]
                                };
                            return (0, c.Z)(a, S, n)
                        }(m);
                    return (0, w.jsx)(E, (0, r.Z)({
                        className: (0, s.Z)(p.root, a),
                        ownerState: m,
                        ref: t
                    }, l))
                }));
            M.muiName = "ListItemSecondaryAction";
            var k = M,
                P = ["className"],
                L = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected"],
                N = (0, m.ZP)("div", {
                    name: "MuiListItem",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [t.root, n.dense && t.dense, "flex-start" === n.alignItems && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction]
                    }
                })((function(e) {
                    var t, n = e.theme,
                        o = e.ownerState;
                    return (0, r.Z)({
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        position: "relative",
                        textDecoration: "none",
                        width: "100%",
                        boxSizing: "border-box",
                        textAlign: "left"
                    }, !o.disablePadding && (0, r.Z)({
                        paddingTop: 8,
                        paddingBottom: 8
                    }, o.dense && {
                        paddingTop: 4,
                        paddingBottom: 4
                    }, !o.disableGutters && {
                        paddingLeft: 16,
                        paddingRight: 16
                    }, !!o.secondaryAction && {
                        paddingRight: 48
                    }), !!o.secondaryAction && (0, a.Z)({}, "& > .".concat(I.Z.root), {
                        paddingRight: 48
                    }), (t = {}, (0, a.Z)(t, "&.".concat(x.focusVisible), {
                        backgroundColor: n.palette.action.focus
                    }), (0, a.Z)(t, "&.".concat(x.selected), (0, a.Z)({
                        backgroundColor: (0, d.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity)
                    }, "&.".concat(x.focusVisible), {
                        backgroundColor: (0, d.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity + n.palette.action.focusOpacity)
                    })), (0, a.Z)(t, "&.".concat(x.disabled), {
                        opacity: n.palette.action.disabledOpacity
                    }), t), "flex-start" === o.alignItems && {
                        alignItems: "flex-start"
                    }, o.divider && {
                        borderBottom: "1px solid ".concat(n.palette.divider),
                        backgroundClip: "padding-box"
                    }, o.button && (0, a.Z)({
                        transition: n.transitions.create("background-color", {
                            duration: n.transitions.duration.shortest
                        }),
                        "&:hover": {
                            textDecoration: "none",
                            backgroundColor: n.palette.action.hover,
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }
                    }, "&.".concat(x.selected, ":hover"), {
                        backgroundColor: (0, d.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity + n.palette.action.hoverOpacity),
                        "@media (hover: none)": {
                            backgroundColor: (0, d.Fq)(n.palette.primary.main, n.palette.action.selectedOpacity)
                        }
                    }), o.hasSecondaryAction && {
                        paddingRight: 48
                    })
                })),
                A = (0, m.ZP)("li", {
                    name: "MuiListItem",
                    slot: "Container",
                    overridesResolver: function(e, t) {
                        return t.container
                    }
                })({
                    position: "relative"
                }),
                T = i.forwardRef((function(e, t) {
                    var n = (0, u.Z)({
                            props: e,
                            name: "MuiListItem"
                        }),
                        a = n.alignItems,
                        d = void 0 === a ? "center" : a,
                        m = n.autoFocus,
                        y = void 0 !== m && m,
                        b = n.button,
                        I = void 0 !== b && b,
                        S = n.children,
                        C = n.className,
                        E = n.component,
                        M = n.components,
                        T = void 0 === M ? {} : M,
                        R = n.componentsProps,
                        G = void 0 === R ? {} : R,
                        j = n.ContainerComponent,
                        F = void 0 === j ? "li" : j,
                        V = n.ContainerProps,
                        B = (V = void 0 === V ? {} : V).className,
                        H = n.dense,
                        O = void 0 !== H && H,
                        z = n.disabled,
                        q = void 0 !== z && z,
                        D = n.disableGutters,
                        U = void 0 !== D && D,
                        W = n.disablePadding,
                        _ = void 0 !== W && W,
                        Q = n.divider,
                        Y = void 0 !== Q && Q,
                        J = n.focusVisibleClassName,
                        K = n.secondaryAction,
                        X = n.selected,
                        $ = void 0 !== X && X,
                        ee = (0, o.Z)(n.ContainerProps, P),
                        te = (0, o.Z)(n, L),
                        ne = i.useContext(f.Z),
                        ae = {
                            dense: O || ne.dense || !1,
                            alignItems: d,
                            disableGutters: U
                        },
                        oe = i.useRef(null);
                    (0, v.Z)((function() {
                        y && oe.current && oe.current.focus()
                    }), [y]);
                    var re = i.Children.toArray(S),
                        ie = re.length && (0, Z.Z)(re[re.length - 1], ["ListItemSecondaryAction"]),
                        se = (0, r.Z)({}, n, {
                            alignItems: d,
                            autoFocus: y,
                            button: I,
                            dense: ae.dense,
                            disabled: q,
                            disableGutters: U,
                            disablePadding: _,
                            divider: Y,
                            hasSecondaryAction: ie,
                            selected: $
                        }),
                        ce = function(e) {
                            var t = e.alignItems,
                                n = e.button,
                                a = e.classes,
                                o = e.dense,
                                r = e.disabled,
                                i = {
                                    root: ["root", o && "dense", !e.disableGutters && "gutters", !e.disablePadding && "padding", e.divider && "divider", r && "disabled", n && "button", "flex-start" === t && "alignItemsFlexStart", e.hasSecondaryAction && "secondaryAction", e.selected && "selected"],
                                    container: ["container"]
                                };
                            return (0, c.Z)(i, h, a)
                        }(se),
                        le = (0, g.Z)(oe, t),
                        de = T.Root || N,
                        me = G.root || {},
                        ue = (0, r.Z)({
                            className: (0, s.Z)(ce.root, me.className, C),
                            disabled: q
                        }, te),
                        pe = E || "li";
                    return I && (ue.component = E || "div", ue.focusVisibleClassName = (0, s.Z)(x.focusVisible, J), pe = p.Z), ie ? (pe = ue.component || E ? pe : "div", "li" === F && ("li" === pe ? pe = "div" : "li" === ue.component && (ue.component = "div")), (0, w.jsx)(f.Z.Provider, {
                        value: ae,
                        children: (0, w.jsxs)(A, (0, r.Z)({
                            as: F,
                            className: (0, s.Z)(ce.container, B),
                            ref: le,
                            ownerState: se
                        }, ee, {
                            children: [(0, w.jsx)(de, (0, r.Z)({}, me, !(0, l.Z)(de) && {
                                as: pe,
                                ownerState: (0, r.Z)({}, se, me.ownerState)
                            }, ue, {
                                children: re
                            })), re.pop()]
                        }))
                    })) : (0, w.jsx)(f.Z.Provider, {
                        value: ae,
                        children: (0, w.jsxs)(de, (0, r.Z)({}, me, {
                            as: pe,
                            ref: le,
                            ownerState: se
                        }, !(0, l.Z)(de) && {
                            ownerState: (0, r.Z)({}, se, me.ownerState)
                        }, ue, {
                            children: [re, K && (0, w.jsx)(k, {
                                children: K
                            })]
                        }))
                    })
                }))
        },
        6162: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return o
                }
            });
            var a = n(9119);

            function o(e) {
                return (0, a.Z)("MuiListItemButton", e)
            }
            var r = (0, n(6260).Z)("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
            t.Z = r
        },
        8518: function(e, t, n) {
            var a = n(808),
                o = n(5773),
                r = n(7378),
                i = n(8037),
                s = n(1599),
                c = n(7511),
                l = n(5643),
                d = n(7426),
                m = n(1536),
                u = n(4246),
                p = ["className"],
                Z = (0, c.ZP)("div", {
                    name: "MuiListItemIcon",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [t.root, "flex-start" === n.alignItems && t.alignItemsFlexStart]
                    }
                })((function(e) {
                    var t = e.theme,
                        n = e.ownerState;
                    return (0, o.Z)({
                        minWidth: 56,
                        color: t.palette.action.active,
                        flexShrink: 0,
                        display: "inline-flex"
                    }, "flex-start" === n.alignItems && {
                        marginTop: 8
                    })
                })),
                v = r.forwardRef((function(e, t) {
                    var n = (0, l.Z)({
                            props: e,
                            name: "MuiListItemIcon"
                        }),
                        c = n.className,
                        v = (0, a.Z)(n, p),
                        g = r.useContext(m.Z),
                        f = (0, o.Z)({}, n, {
                            alignItems: g.alignItems
                        }),
                        y = function(e) {
                            var t = e.alignItems,
                                n = e.classes,
                                a = {
                                    root: ["root", "flex-start" === t && "alignItemsFlexStart"]
                                };
                            return (0, s.Z)(a, d.f, n)
                        }(f);
                    return (0, u.jsx)(Z, (0, o.Z)({
                        className: (0, i.Z)(y.root, c),
                        ownerState: f,
                        ref: t
                    }, v))
                }));
            t.Z = v
        },
        967: function(e, t, n) {
            var a = n(4649),
                o = n(808),
                r = n(5773),
                i = n(7378),
                s = n(8037),
                c = n(1599),
                l = n(1348),
                d = n(1536),
                m = n(5643),
                u = n(7511),
                p = n(7310),
                Z = n(4246),
                v = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"],
                g = (0, u.ZP)("div", {
                    name: "MuiListItemText",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [(0, a.Z)({}, "& .".concat(p.Z.primary), t.primary), (0, a.Z)({}, "& .".concat(p.Z.secondary), t.secondary), t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense]
                    }
                })((function(e) {
                    var t = e.ownerState;
                    return (0, r.Z)({
                        flex: "1 1 auto",
                        minWidth: 0,
                        marginTop: 4,
                        marginBottom: 4
                    }, t.primary && t.secondary && {
                        marginTop: 6,
                        marginBottom: 6
                    }, t.inset && {
                        paddingLeft: 56
                    })
                })),
                f = i.forwardRef((function(e, t) {
                    var n = (0, m.Z)({
                            props: e,
                            name: "MuiListItemText"
                        }),
                        a = n.children,
                        u = n.className,
                        f = n.disableTypography,
                        y = void 0 !== f && f,
                        b = n.inset,
                        h = void 0 !== b && b,
                        x = n.primary,
                        I = n.primaryTypographyProps,
                        S = n.secondary,
                        w = n.secondaryTypographyProps,
                        C = (0, o.Z)(n, v),
                        E = i.useContext(d.Z).dense,
                        M = null != x ? x : a,
                        k = S,
                        P = (0, r.Z)({}, n, {
                            disableTypography: y,
                            inset: h,
                            primary: !!M,
                            secondary: !!k,
                            dense: E
                        }),
                        L = function(e) {
                            var t = e.classes,
                                n = e.inset,
                                a = e.primary,
                                o = e.secondary,
                                r = {
                                    root: ["root", n && "inset", e.dense && "dense", a && o && "multiline"],
                                    primary: ["primary"],
                                    secondary: ["secondary"]
                                };
                            return (0, c.Z)(r, p.L, t)
                        }(P);
                    return null == M || M.type === l.Z || y || (M = (0, Z.jsx)(l.Z, (0, r.Z)({
                        variant: E ? "body2" : "body1",
                        className: L.primary,
                        component: "span",
                        display: "block"
                    }, I, {
                        children: M
                    }))), null == k || k.type === l.Z || y || (k = (0, Z.jsx)(l.Z, (0, r.Z)({
                        variant: "body2",
                        className: L.secondary,
                        color: "text.secondary",
                        display: "block"
                    }, w, {
                        children: k
                    }))), (0, Z.jsxs)(g, (0, r.Z)({
                        className: (0, s.Z)(L.root, u),
                        ownerState: P,
                        ref: t
                    }, C, {
                        children: [M, k]
                    }))
                }));
            t.Z = f
        },
        8970: function(e, t, n) {
            var a = n(7378),
                o = n(7296),
                r = n(7326);
            t.Z = function(e) {
                var t = e.title,
                    n = e.description,
                    i = (e.meta, (0, o.useStaticQuery)("2856485179").site),
                    s = t || i.siteMetadata.title,
                    c = n || i.siteMetadata.description,
                    l = "https://magic.audio/assets/website-social/website.jpg?" + (new Date).getTime();
                return a.createElement(r.q, {
                    defer: !1,
                    titleTemplate: "%s | Magic.Audio"
                }, a.createElement("html", {
                    lang: "en"
                }), a.createElement("title", null, s), a.createElement("meta", {
                    name: "description",
                    content: c
                }), a.createElement("meta", {
                    name: "keywords",
                    content: i.siteMetadata.keywords
                }), a.createElement("meta", {
                    name: "author",
                    content: i.siteMetadata.author
                }), a.createElement("meta", {
                    name: "og:url",
                    content: i.siteMetadata.siteUrl
                }), a.createElement("meta", {
                    name: "og:title",
                    content: s
                }), a.createElement("meta", {
                    name: "og:description",
                    content: c
                }), a.createElement("meta", {
                    name: "og:type",
                    content: "website"
                }), a.createElement("meta", {
                    name: "og:image",
                    content: l
                }), a.createElement("meta", {
                    name: "og:url",
                    content: i.siteMetadata.siteUrl
                }), a.createElement("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), a.createElement("meta", {
                    name: "twitter:creator",
                    content: i.siteMetadata.author
                }), a.createElement("meta", {
                    name: "twitter:image",
                    content: l
                }), a.createElement("meta", {
                    name: "twitter:title",
                    content: s
                }), a.createElement("meta", {
                    name: "twitter:description",
                    content: c
                }))
            }
        },
        9677: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = n(7378),
                o = n(182),
                r = n(1212),
                i = n(3899),
                s = n(4855),
                c = n(8518),
                l = n(967),
                d = n(7556),
                m = n(8873),
                u = n(3573),
                p = n(7754),
                Z = "user-consented-to-cookies",
                v = "user-consented-to-facebook-pixel",
                g = "user-consented-to-google-tagmanager",
                f = function() {
                    var e = (0, p.Z)([Z, v, g]),
                        t = e[0],
                        n = e[1],
                        o = (e[2], void 0 !== t[Z] && t[Z]);
                    return (0, a.useEffect)((function() {
                        return function() {}
                    }), []), {
                        hasUserConsentedToCookies: o,
                        setCookiesConsented: function() {
                            n(Z, !0, {
                                path: "/"
                            })
                        },
                        setFacebookConsented: function() {
                            n(v, !0, {
                                path: "/"
                            })
                        },
                        setGoogleTagManagerConsented: function() {
                            n(g, !0, {
                                path: "/"
                            })
                        }
                    }
                },
                y = n(8035),
                b = n(3791);
            var h = function(e) {
                var t = e.children,
                    n = (e.window, a.useState(!1)),
                    p = (n[0], n[1], a.useState(!1));
                return p[0], p[1], f().hasUserConsentedToCookies, o.Z, r.Z, i.Z, ["Inbox", "Starred", "Send email", "Drafts"].map((function(e, t) {
                    return a.createElement(s.ZP, {
                        button: !0,
                        key: e
                    }, a.createElement(c.Z, null, t % 2 == 0 ? a.createElement(u.Z, null) : a.createElement(m.Z, null)), a.createElement(l.Z, {
                        primary: e
                    }))
                })), r.Z, i.Z, ["All mail", "Trash", "Spam"].map((function(e, t) {
                    return a.createElement(s.ZP, {
                        button: !0,
                        key: e
                    }, a.createElement(c.Z, null, t % 2 == 0 ? a.createElement(u.Z, null) : a.createElement(m.Z, null)), a.createElement(l.Z, {
                        primary: e
                    }))
                })), a.createElement(d.Z, {
                    component: "div",
                    sx: {
                        display: "flex",
                        minHeight: "100vh",
                        flexDirection: "column"
                    }
                }, a.createElement(y.Z, null), a.createElement(d.Z, {
                    component: "main",
                    sx: {
                        flexGrow: 1
                    }
                }, a.createElement(o.Z, null), t), a.createElement(b.Z, null))
            }
        }
    }
]);
//# sourceMappingURL=fe9d726cd40d2c9725d366eafef1e4355d67c7e2-b78d2f8dd8a6c9d1e661.js.map