"use strict";
(self.webpackChunkmagic_audio = self.webpackChunkmagic_audio || []).push([
    [517], {
        7556: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return v
                }
            });
            var o = t(5773),
                i = t(808),
                r = t(7378),
                a = t(8037),
                l = t(9694),
                c = t(2012),
                u = t(1229),
                s = t(2150),
                d = t(4246),
                p = ["className", "component"];
            var f = t(6237),
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.defaultTheme,
                        t = e.defaultClassName,
                        f = void 0 === t ? "MuiBox-root" : t,
                        h = e.generateClassName,
                        v = e.styleFunctionSx,
                        m = void 0 === v ? c.Z : v,
                        b = (0, l.ZP)("div")(m),
                        g = r.forwardRef((function(e, t) {
                            var r = (0, s.Z)(n),
                                l = (0, u.Z)(e),
                                c = l.className,
                                v = l.component,
                                m = void 0 === v ? "div" : v,
                                g = (0, i.Z)(l, p);
                            return (0, d.jsx)(b, (0, o.Z)({
                                as: m,
                                ref: t,
                                className: (0, a.Z)(c, h ? h(f) : f),
                                theme: r
                            }, g))
                        }));
                    return g
                }({
                    defaultTheme: (0, t(5304).Z)(),
                    defaultClassName: "MuiBox-root",
                    generateClassName: f.Z.generate
                }),
                v = h
        },
        6014: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return z
                }
            });
            var o = t(4649),
                i = t(808),
                r = t(5773),
                a = t(7378),
                l = t(8037),
                c = t(5148),
                u = t(1599),
                s = t(7111),
                d = t(7511),
                p = t(5643),
                f = t(2974),
                h = t(8941),
                v = t(9119);

            function m(e) {
                return (0, v.Z)("MuiButton", e)
            }
            var b = (0, t(6260).Z)("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "contained", "containedInherit", "containedPrimary", "containedSecondary", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
                g = t(7805),
                x = t(4246),
                Z = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
                y = function(e) {
                    return (0, r.Z)({}, "small" === e.size && {
                        "& > *:nth-of-type(1)": {
                            fontSize: 18
                        }
                    }, "medium" === e.size && {
                        "& > *:nth-of-type(1)": {
                            fontSize: 20
                        }
                    }, "large" === e.size && {
                        "& > *:nth-of-type(1)": {
                            fontSize: 22
                        }
                    })
                },
                S = (0, d.ZP)(f.Z, {
                    shouldForwardProp: function(e) {
                        return (0, d.FO)(e) || "classes" === e
                    },
                    name: "MuiButton",
                    slot: "Root",
                    overridesResolver: function(e, n) {
                        var t = e.ownerState;
                        return [n.root, n[t.variant], n["".concat(t.variant).concat((0, h.Z)(t.color))], n["size".concat((0, h.Z)(t.size))], n["".concat(t.variant, "Size").concat((0, h.Z)(t.size))], "inherit" === t.color && n.colorInherit, t.disableElevation && n.disableElevation, t.fullWidth && n.fullWidth]
                    }
                })((function(e) {
                    var n, t = e.theme,
                        i = e.ownerState;
                    return (0, r.Z)({}, t.typography.button, (n = {
                        minWidth: 64,
                        padding: "6px 16px",
                        borderRadius: t.shape.borderRadius,
                        transition: t.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
                            duration: t.transitions.duration.short
                        }),
                        "&:hover": (0, r.Z)({
                            textDecoration: "none",
                            backgroundColor: (0, s.Fq)(t.palette.text.primary, t.palette.action.hoverOpacity),
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }, "text" === i.variant && "inherit" !== i.color && {
                            backgroundColor: (0, s.Fq)(t.palette[i.color].main, t.palette.action.hoverOpacity),
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }, "outlined" === i.variant && "inherit" !== i.color && {
                            border: "1px solid ".concat(t.palette[i.color].main),
                            backgroundColor: (0, s.Fq)(t.palette[i.color].main, t.palette.action.hoverOpacity),
                            "@media (hover: none)": {
                                backgroundColor: "transparent"
                            }
                        }, "contained" === i.variant && {
                            backgroundColor: t.palette.grey.A100,
                            boxShadow: t.shadows[4],
                            "@media (hover: none)": {
                                boxShadow: t.shadows[2],
                                backgroundColor: t.palette.grey[300]
                            }
                        }, "contained" === i.variant && "inherit" !== i.color && {
                            backgroundColor: t.palette[i.color].dark,
                            "@media (hover: none)": {
                                backgroundColor: t.palette[i.color].main
                            }
                        }),
                        "&:active": (0, r.Z)({}, "contained" === i.variant && {
                            boxShadow: t.shadows[8]
                        })
                    }, (0, o.Z)(n, "&.".concat(b.focusVisible), (0, r.Z)({}, "contained" === i.variant && {
                        boxShadow: t.shadows[6]
                    })), (0, o.Z)(n, "&.".concat(b.disabled), (0, r.Z)({
                        color: t.palette.action.disabled
                    }, "outlined" === i.variant && {
                        border: "1px solid ".concat(t.palette.action.disabledBackground)
                    }, "outlined" === i.variant && "secondary" === i.color && {
                        border: "1px solid ".concat(t.palette.action.disabled)
                    }, "contained" === i.variant && {
                        color: t.palette.action.disabled,
                        boxShadow: t.shadows[0],
                        backgroundColor: t.palette.action.disabledBackground
                    })), n), "text" === i.variant && {
                        padding: "6px 8px"
                    }, "text" === i.variant && "inherit" !== i.color && {
                        color: t.palette[i.color].main
                    }, "outlined" === i.variant && {
                        padding: "5px 15px",
                        border: "1px solid ".concat("light" === t.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)")
                    }, "outlined" === i.variant && "inherit" !== i.color && {
                        color: t.palette[i.color].main,
                        border: "1px solid ".concat((0, s.Fq)(t.palette[i.color].main, .5))
                    }, "contained" === i.variant && {
                        color: t.palette.getContrastText(t.palette.grey[300]),
                        backgroundColor: t.palette.grey[300],
                        boxShadow: t.shadows[2]
                    }, "contained" === i.variant && "inherit" !== i.color && {
                        color: t.palette[i.color].contrastText,
                        backgroundColor: t.palette[i.color].main
                    }, "inherit" === i.color && {
                        color: "inherit",
                        borderColor: "currentColor"
                    }, "small" === i.size && "text" === i.variant && {
                        padding: "4px 5px",
                        fontSize: t.typography.pxToRem(13)
                    }, "large" === i.size && "text" === i.variant && {
                        padding: "8px 11px",
                        fontSize: t.typography.pxToRem(15)
                    }, "small" === i.size && "outlined" === i.variant && {
                        padding: "3px 9px",
                        fontSize: t.typography.pxToRem(13)
                    }, "large" === i.size && "outlined" === i.variant && {
                        padding: "7px 21px",
                        fontSize: t.typography.pxToRem(15)
                    }, "small" === i.size && "contained" === i.variant && {
                        padding: "4px 10px",
                        fontSize: t.typography.pxToRem(13)
                    }, "large" === i.size && "contained" === i.variant && {
                        padding: "8px 22px",
                        fontSize: t.typography.pxToRem(15)
                    }, i.fullWidth && {
                        width: "100%"
                    })
                }), (function(e) {
                    var n;
                    return e.ownerState.disableElevation && (n = {
                        boxShadow: "none",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }, (0, o.Z)(n, "&.".concat(b.focusVisible), {
                        boxShadow: "none"
                    }), (0, o.Z)(n, "&:active", {
                        boxShadow: "none"
                    }), (0, o.Z)(n, "&.".concat(b.disabled), {
                        boxShadow: "none"
                    }), n)
                })),
                R = (0, d.ZP)("span", {
                    name: "MuiButton",
                    slot: "StartIcon",
                    overridesResolver: function(e, n) {
                        var t = e.ownerState;
                        return [n.startIcon, n["iconSize".concat((0, h.Z)(t.size))]]
                    }
                })((function(e) {
                    var n = e.ownerState;
                    return (0, r.Z)({
                        display: "inherit",
                        marginRight: 8,
                        marginLeft: -4
                    }, "small" === n.size && {
                        marginLeft: -2
                    }, y(n))
                })),
                w = (0, d.ZP)("span", {
                    name: "MuiButton",
                    slot: "EndIcon",
                    overridesResolver: function(e, n) {
                        var t = e.ownerState;
                        return [n.endIcon, n["iconSize".concat((0, h.Z)(t.size))]]
                    }
                })((function(e) {
                    var n = e.ownerState;
                    return (0, r.Z)({
                        display: "inherit",
                        marginRight: -4,
                        marginLeft: 8
                    }, "small" === n.size && {
                        marginRight: -2
                    }, y(n))
                })),
                z = a.forwardRef((function(e, n) {
                    var t = a.useContext(g.Z),
                        o = (0, c.Z)(t, e),
                        s = (0, p.Z)({
                            props: o,
                            name: "MuiButton"
                        }),
                        d = s.children,
                        f = s.color,
                        v = void 0 === f ? "primary" : f,
                        b = s.component,
                        y = void 0 === b ? "button" : b,
                        z = s.className,
                        E = s.disabled,
                        M = void 0 !== E && E,
                        C = s.disableElevation,
                        k = void 0 !== C && C,
                        T = s.disableFocusRipple,
                        I = void 0 !== T && T,
                        P = s.endIcon,
                        V = s.focusVisibleClassName,
                        N = s.fullWidth,
                        L = void 0 !== N && N,
                        F = s.size,
                        B = void 0 === F ? "medium" : F,
                        j = s.startIcon,
                        D = s.type,
                        O = s.variant,
                        W = void 0 === O ? "text" : O,
                        K = (0, i.Z)(s, Z),
                        X = (0, r.Z)({}, s, {
                            color: v,
                            component: y,
                            disabled: M,
                            disableElevation: k,
                            disableFocusRipple: I,
                            fullWidth: L,
                            size: B,
                            type: D,
                            variant: W
                        }),
                        A = function(e) {
                            var n = e.color,
                                t = e.disableElevation,
                                o = e.fullWidth,
                                i = e.size,
                                a = e.variant,
                                l = e.classes,
                                c = {
                                    root: ["root", a, "".concat(a).concat((0, h.Z)(n)), "size".concat((0, h.Z)(i)), "".concat(a, "Size").concat((0, h.Z)(i)), "inherit" === n && "colorInherit", t && "disableElevation", o && "fullWidth"],
                                    label: ["label"],
                                    startIcon: ["startIcon", "iconSize".concat((0, h.Z)(i))],
                                    endIcon: ["endIcon", "iconSize".concat((0, h.Z)(i))]
                                },
                                s = (0, u.Z)(c, m, l);
                            return (0, r.Z)({}, l, s)
                        }(X),
                        U = j && (0, x.jsx)(R, {
                            className: A.startIcon,
                            ownerState: X,
                            children: j
                        }),
                        Y = P && (0, x.jsx)(w, {
                            className: A.endIcon,
                            ownerState: X,
                            children: P
                        });
                    return (0, x.jsxs)(S, (0, r.Z)({
                        ownerState: X,
                        className: (0, l.Z)(z, t.className),
                        component: y,
                        disabled: M,
                        focusRipple: !I,
                        focusVisibleClassName: (0, l.Z)(A.focusVisible, V),
                        ref: n,
                        type: D
                    }, K, {
                        classes: A,
                        children: [U, d, Y]
                    }))
                }))
        },
        2974: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return ee
                }
            });
            var o = t(1026),
                i = t(4649),
                r = t(5773),
                a = t(808),
                l = t(7378),
                c = t(8037),
                u = t(1599),
                s = t(7511),
                d = t(5643),
                p = t(3897),
                f = t(2902),
                h = t(9647),
                v = t(649);

            function m(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }
            var b = t(7169),
                g = t(3219),
                x = t(2291);

            function Z(e, n) {
                var t = Object.create(null);
                return e && l.Children.map(e, (function(e) {
                    return e
                })).forEach((function(e) {
                    t[e.key] = function(e) {
                        return n && (0, l.isValidElement)(e) ? n(e) : e
                    }(e)
                })), t
            }

            function y(e, n, t) {
                return null != t[n] ? t[n] : e.props[n]
            }

            function S(e, n, t) {
                var o = Z(e.children),
                    i = function(e, n) {
                        function t(t) {
                            return t in n ? n[t] : e[t]
                        }
                        e = e || {}, n = n || {};
                        var o, i = Object.create(null),
                            r = [];
                        for (var a in e) a in n ? r.length && (i[a] = r, r = []) : r.push(a);
                        var l = {};
                        for (var c in n) {
                            if (i[c])
                                for (o = 0; o < i[c].length; o++) {
                                    var u = i[c][o];
                                    l[i[c][o]] = t(u)
                                }
                            l[c] = t(c)
                        }
                        for (o = 0; o < r.length; o++) l[r[o]] = t(r[o]);
                        return l
                    }(n, o);
                return Object.keys(i).forEach((function(r) {
                    var a = i[r];
                    if ((0, l.isValidElement)(a)) {
                        var c = r in n,
                            u = r in o,
                            s = n[r],
                            d = (0, l.isValidElement)(s) && !s.props.in;
                        !u || c && !d ? u || !c || d ? u && c && (0, l.isValidElement)(s) && (i[r] = (0, l.cloneElement)(a, {
                            onExited: t.bind(null, a),
                            in: s.props.in,
                            exit: y(a, "exit", e),
                            enter: y(a, "enter", e)
                        })) : i[r] = (0, l.cloneElement)(a, { in: !1
                        }) : i[r] = (0, l.cloneElement)(a, {
                            onExited: t.bind(null, a),
                            in: !0,
                            exit: y(a, "exit", e),
                            enter: y(a, "enter", e)
                        })
                    }
                })), i
            }
            var R = Object.values || function(e) {
                    return Object.keys(e).map((function(n) {
                        return e[n]
                    }))
                },
                w = function(e) {
                    function n(n, t) {
                        var o, i = (o = e.call(this, n, t) || this).handleExited.bind((0, b.Z)(o));
                        return o.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: i,
                            firstRender: !0
                        }, o
                    }(0, g.Z)(n, e);
                    var t = n.prototype;
                    return t.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, t.componentWillUnmount = function() {
                        this.mounted = !1
                    }, n.getDerivedStateFromProps = function(e, n) {
                        var t, o, i = n.children,
                            r = n.handleExited;
                        return {
                            children: n.firstRender ? (t = e, o = r, Z(t.children, (function(e) {
                                return (0, l.cloneElement)(e, {
                                    onExited: o.bind(null, e),
                                    in: !0,
                                    appear: y(e, "appear", t),
                                    enter: y(e, "enter", t),
                                    exit: y(e, "exit", t)
                                })
                            }))) : S(e, i, r),
                            firstRender: !1
                        }
                    }, t.handleExited = function(e, n) {
                        var t = Z(this.props.children);
                        e.key in t || (e.props.onExited && e.props.onExited(n), this.mounted && this.setState((function(n) {
                            var t = (0, r.Z)({}, n.children);
                            return delete t[e.key], {
                                children: t
                            }
                        })))
                    }, t.render = function() {
                        var e = this.props,
                            n = e.component,
                            t = e.childFactory,
                            o = (0, a.Z)(e, ["component", "childFactory"]),
                            i = this.state.contextValue,
                            r = R(this.state.children).map(t);
                        return delete o.appear, delete o.enter, delete o.exit, null === n ? l.createElement(x.Z.Provider, {
                            value: i
                        }, r) : l.createElement(x.Z.Provider, {
                            value: i
                        }, l.createElement(n, o, r))
                    }, n
                }(l.Component);
            w.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var z = w,
                E = t(2861),
                M = t(4246);
            var C = function(e) {
                    var n = e.className,
                        t = e.classes,
                        i = e.pulsate,
                        r = void 0 !== i && i,
                        a = e.rippleX,
                        u = e.rippleY,
                        s = e.rippleSize,
                        d = e.in,
                        p = e.onExited,
                        f = e.timeout,
                        h = l.useState(!1),
                        v = (0, o.Z)(h, 2),
                        m = v[0],
                        b = v[1],
                        g = (0, c.Z)(n, t.ripple, t.rippleVisible, r && t.ripplePulsate),
                        x = {
                            width: s,
                            height: s,
                            top: -s / 2 + u,
                            left: -s / 2 + a
                        },
                        Z = (0, c.Z)(t.child, m && t.childLeaving, r && t.childPulsate);
                    return d || m || b(!0), l.useEffect((function() {
                        if (!d && null != p) {
                            var e = setTimeout(p, f);
                            return function() {
                                clearTimeout(e)
                            }
                        }
                    }), [p, d, f]), (0, M.jsx)("span", {
                        className: g,
                        style: x,
                        children: (0, M.jsx)("span", {
                            className: Z
                        })
                    })
                },
                k = t(6260);
            var T, I, P, V, N, L, F, B, j = (0, k.Z)("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
                D = ["center", "classes", "className"],
                O = (0, E.F4)(N || (N = T || (T = m(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),
                W = (0, E.F4)(L || (L = I || (I = m(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),
                K = (0, E.F4)(F || (F = P || (P = m(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),
                X = (0, s.ZP)("span", {
                    name: "MuiTouchRipple",
                    slot: "Root"
                })({
                    overflow: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: "inherit"
                }),
                A = (0, s.ZP)(C, {
                    name: "MuiTouchRipple",
                    slot: "Ripple"
                })(B || (B = V || (V = m(["\n  opacity: 0;\n  position: absolute;\n\n  &.", " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  &.", " {\n    animation-duration: ", "ms;\n  }\n\n  & .", " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .", " {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  & .", " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ", ";\n    animation-duration: 2500ms;\n    animation-timing-function: ", ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))), j.rippleVisible, O, 550, (function(e) {
                    return e.theme.transitions.easing.easeInOut
                }), j.ripplePulsate, (function(e) {
                    return e.theme.transitions.duration.shorter
                }), j.child, j.childLeaving, W, 550, (function(e) {
                    return e.theme.transitions.easing.easeInOut
                }), j.childPulsate, K, (function(e) {
                    return e.theme.transitions.easing.easeInOut
                })),
                U = l.forwardRef((function(e, n) {
                    var t = (0, d.Z)({
                            props: e,
                            name: "MuiTouchRipple"
                        }),
                        i = t.center,
                        u = void 0 !== i && i,
                        s = t.classes,
                        p = void 0 === s ? {} : s,
                        f = t.className,
                        h = (0, a.Z)(t, D),
                        m = l.useState([]),
                        b = (0, o.Z)(m, 2),
                        g = b[0],
                        x = b[1],
                        Z = l.useRef(0),
                        y = l.useRef(null);
                    l.useEffect((function() {
                        y.current && (y.current(), y.current = null)
                    }), [g]);
                    var S = l.useRef(!1),
                        R = l.useRef(null),
                        w = l.useRef(null),
                        E = l.useRef(null);
                    l.useEffect((function() {
                        return function() {
                            clearTimeout(R.current)
                        }
                    }), []);
                    var C = l.useCallback((function(e) {
                            var n = e.pulsate,
                                t = e.rippleX,
                                o = e.rippleY,
                                i = e.rippleSize,
                                r = e.cb;
                            x((function(e) {
                                return [].concat((0, v.Z)(e), [(0, M.jsx)(A, {
                                    classes: {
                                        ripple: (0, c.Z)(p.ripple, j.ripple),
                                        rippleVisible: (0, c.Z)(p.rippleVisible, j.rippleVisible),
                                        ripplePulsate: (0, c.Z)(p.ripplePulsate, j.ripplePulsate),
                                        child: (0, c.Z)(p.child, j.child),
                                        childLeaving: (0, c.Z)(p.childLeaving, j.childLeaving),
                                        childPulsate: (0, c.Z)(p.childPulsate, j.childPulsate)
                                    },
                                    timeout: 550,
                                    pulsate: n,
                                    rippleX: t,
                                    rippleY: o,
                                    rippleSize: i
                                }, Z.current)])
                            })), Z.current += 1, y.current = r
                        }), [p]),
                        k = l.useCallback((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = arguments.length > 2 ? arguments[2] : void 0,
                                o = n.pulsate,
                                i = void 0 !== o && o,
                                r = n.center,
                                a = void 0 === r ? u || n.pulsate : r,
                                l = n.fakeElement,
                                c = void 0 !== l && l;
                            if ("mousedown" === e.type && S.current) S.current = !1;
                            else {
                                "touchstart" === e.type && (S.current = !0);
                                var s, d, p, f = c ? null : E.current,
                                    h = f ? f.getBoundingClientRect() : {
                                        width: 0,
                                        height: 0,
                                        left: 0,
                                        top: 0
                                    };
                                if (a || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) s = Math.round(h.width / 2), d = Math.round(h.height / 2);
                                else {
                                    var v = e.touches ? e.touches[0] : e,
                                        m = v.clientX,
                                        b = v.clientY;
                                    s = Math.round(m - h.left), d = Math.round(b - h.top)
                                }
                                if (a)(p = Math.sqrt((2 * Math.pow(h.width, 2) + Math.pow(h.height, 2)) / 3)) % 2 == 0 && (p += 1);
                                else {
                                    var g = 2 * Math.max(Math.abs((f ? f.clientWidth : 0) - s), s) + 2,
                                        x = 2 * Math.max(Math.abs((f ? f.clientHeight : 0) - d), d) + 2;
                                    p = Math.sqrt(Math.pow(g, 2) + Math.pow(x, 2))
                                }
                                e.touches ? null === w.current && (w.current = function() {
                                    C({
                                        pulsate: i,
                                        rippleX: s,
                                        rippleY: d,
                                        rippleSize: p,
                                        cb: t
                                    })
                                }, R.current = setTimeout((function() {
                                    w.current && (w.current(), w.current = null)
                                }), 80)) : C({
                                    pulsate: i,
                                    rippleX: s,
                                    rippleY: d,
                                    rippleSize: p,
                                    cb: t
                                })
                            }
                        }), [u, C]),
                        T = l.useCallback((function() {
                            k({}, {
                                pulsate: !0
                            })
                        }), [k]),
                        I = l.useCallback((function(e, n) {
                            if (clearTimeout(R.current), "touchend" === e.type && w.current) return w.current(), w.current = null, void(R.current = setTimeout((function() {
                                I(e, n)
                            })));
                            w.current = null, x((function(e) {
                                return e.length > 0 ? e.slice(1) : e
                            })), y.current = n
                        }), []);
                    return l.useImperativeHandle(n, (function() {
                        return {
                            pulsate: T,
                            start: k,
                            stop: I
                        }
                    }), [T, k, I]), (0, M.jsx)(X, (0, r.Z)({
                        className: (0, c.Z)(p.root, j.root, f),
                        ref: E
                    }, h, {
                        children: (0, M.jsx)(z, {
                            component: null,
                            exit: !0,
                            children: g
                        })
                    }))
                })),
                Y = U,
                q = t(9119);

            function H(e) {
                return (0, q.Z)("MuiButtonBase", e)
            }
            var _, G = (0, k.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]),
                J = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
                Q = (0, s.ZP)("button", {
                    name: "MuiButtonBase",
                    slot: "Root",
                    overridesResolver: function(e, n) {
                        return n.root
                    }
                })((_ = {
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxSizing: "border-box",
                    WebkitTapHighlightColor: "transparent",
                    backgroundColor: "transparent",
                    outline: 0,
                    border: 0,
                    margin: 0,
                    borderRadius: 0,
                    padding: 0,
                    cursor: "pointer",
                    userSelect: "none",
                    verticalAlign: "middle",
                    MozAppearance: "none",
                    WebkitAppearance: "none",
                    textDecoration: "none",
                    color: "inherit",
                    "&::-moz-focus-inner": {
                        borderStyle: "none"
                    }
                }, (0, i.Z)(_, "&.".concat(G.disabled), {
                    pointerEvents: "none",
                    cursor: "default"
                }), (0, i.Z)(_, "@media print", {
                    colorAdjust: "exact"
                }), _)),
                $ = l.forwardRef((function(e, n) {
                    var t = (0, d.Z)({
                            props: e,
                            name: "MuiButtonBase"
                        }),
                        i = t.action,
                        s = t.centerRipple,
                        v = void 0 !== s && s,
                        m = t.children,
                        b = t.className,
                        g = t.component,
                        x = void 0 === g ? "button" : g,
                        Z = t.disabled,
                        y = void 0 !== Z && Z,
                        S = t.disableRipple,
                        R = void 0 !== S && S,
                        w = t.disableTouchRipple,
                        z = void 0 !== w && w,
                        E = t.focusRipple,
                        C = void 0 !== E && E,
                        k = t.LinkComponent,
                        T = void 0 === k ? "a" : k,
                        I = t.onBlur,
                        P = t.onClick,
                        V = t.onContextMenu,
                        N = t.onDragLeave,
                        L = t.onFocus,
                        F = t.onFocusVisible,
                        B = t.onKeyDown,
                        j = t.onKeyUp,
                        D = t.onMouseDown,
                        O = t.onMouseLeave,
                        W = t.onMouseUp,
                        K = t.onTouchEnd,
                        X = t.onTouchMove,
                        A = t.onTouchStart,
                        U = t.tabIndex,
                        q = void 0 === U ? 0 : U,
                        _ = t.TouchRippleProps,
                        G = t.touchRippleRef,
                        $ = t.type,
                        ee = (0, a.Z)(t, J),
                        ne = l.useRef(null),
                        te = l.useRef(null),
                        oe = (0, p.Z)(te, G),
                        ie = (0, h.Z)(),
                        re = ie.isFocusVisibleRef,
                        ae = ie.onFocus,
                        le = ie.onBlur,
                        ce = ie.ref,
                        ue = l.useState(!1),
                        se = (0, o.Z)(ue, 2),
                        de = se[0],
                        pe = se[1];

                    function fe(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z;
                        return (0, f.Z)((function(o) {
                            return n && n(o), !t && te.current && te.current[e](o), !0
                        }))
                    }
                    y && de && pe(!1), l.useImperativeHandle(i, (function() {
                        return {
                            focusVisible: function() {
                                pe(!0), ne.current.focus()
                            }
                        }
                    }), []), l.useEffect((function() {
                        de && C && !R && te.current.pulsate()
                    }), [R, C, de]);
                    var he = fe("start", D),
                        ve = fe("stop", V),
                        me = fe("stop", N),
                        be = fe("stop", W),
                        ge = fe("stop", (function(e) {
                            de && e.preventDefault(), O && O(e)
                        })),
                        xe = fe("start", A),
                        Ze = fe("stop", K),
                        ye = fe("stop", X),
                        Se = fe("stop", (function(e) {
                            le(e), !1 === re.current && pe(!1), I && I(e)
                        }), !1),
                        Re = (0, f.Z)((function(e) {
                            ne.current || (ne.current = e.currentTarget), ae(e), !0 === re.current && (pe(!0), F && F(e)), L && L(e)
                        })),
                        we = function() {
                            var e = ne.current;
                            return x && "button" !== x && !("A" === e.tagName && e.href)
                        },
                        ze = l.useRef(!1),
                        Ee = (0, f.Z)((function(e) {
                            C && !ze.current && de && te.current && " " === e.key && (ze.current = !0, te.current.stop(e, (function() {
                                te.current.start(e)
                            }))), e.target === e.currentTarget && we() && " " === e.key && e.preventDefault(), B && B(e), e.target === e.currentTarget && we() && "Enter" === e.key && !y && (e.preventDefault(), P && P(e))
                        })),
                        Me = (0, f.Z)((function(e) {
                            C && " " === e.key && te.current && de && !e.defaultPrevented && (ze.current = !1, te.current.stop(e, (function() {
                                te.current.pulsate(e)
                            }))), j && j(e), P && e.target === e.currentTarget && we() && " " === e.key && !e.defaultPrevented && P(e)
                        })),
                        Ce = x;
                    "button" === Ce && (ee.href || ee.to) && (Ce = T);
                    var ke = {};
                    "button" === Ce ? (ke.type = void 0 === $ ? "button" : $, ke.disabled = y) : (ee.href || ee.to || (ke.role = "button"), y && (ke["aria-disabled"] = y));
                    var Te = (0, p.Z)(ce, ne),
                        Ie = (0, p.Z)(n, Te),
                        Pe = l.useState(!1),
                        Ve = (0, o.Z)(Pe, 2),
                        Ne = Ve[0],
                        Le = Ve[1];
                    l.useEffect((function() {
                        Le(!0)
                    }), []);
                    var Fe = Ne && !R && !y;
                    var Be = (0, r.Z)({}, t, {
                            centerRipple: v,
                            component: x,
                            disabled: y,
                            disableRipple: R,
                            disableTouchRipple: z,
                            focusRipple: C,
                            tabIndex: q,
                            focusVisible: de
                        }),
                        je = function(e) {
                            var n = e.disabled,
                                t = e.focusVisible,
                                o = e.focusVisibleClassName,
                                i = e.classes,
                                r = {
                                    root: ["root", n && "disabled", t && "focusVisible"]
                                },
                                a = (0, u.Z)(r, H, i);
                            return t && o && (a.root += " ".concat(o)), a
                        }(Be);
                    return (0, M.jsxs)(Q, (0, r.Z)({
                        as: Ce,
                        className: (0, c.Z)(je.root, b),
                        ownerState: Be,
                        onBlur: Se,
                        onClick: P,
                        onContextMenu: ve,
                        onFocus: Re,
                        onKeyDown: Ee,
                        onKeyUp: Me,
                        onMouseDown: he,
                        onMouseLeave: ge,
                        onMouseUp: be,
                        onDragLeave: me,
                        onTouchEnd: Ze,
                        onTouchMove: ye,
                        onTouchStart: xe,
                        ref: Ie,
                        tabIndex: y ? -1 : q,
                        type: $
                    }, ke, ee, {
                        children: [m, Fe ? (0, M.jsx)(Y, (0, r.Z)({
                            ref: oe,
                            center: v
                        }, _)) : null]
                    }))
                })),
                ee = $
        },
        7805: function(e, n, t) {
            var o = t(7378).createContext({});
            n.Z = o
        },
        2902: function(e, n, t) {
            var o = t(6129);
            n.Z = o.Z
        },
        3897: function(e, n, t) {
            var o = t(9270);
            n.Z = o.Z
        },
        9647: function(e, n, t) {
            var o = t(7695);
            n.Z = o.Z
        },
        2302: function(e, n, t) {
            function o(e, n) {
                "function" == typeof e ? e(n) : e && (e.current = n)
            }
            t.d(n, {
                Z: function() {
                    return o
                }
            })
        },
        8617: function(e, n, t) {
            var o = t(7378),
                i = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
            n.Z = i
        },
        6129: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            var o = t(7378),
                i = t(8617);

            function r(e) {
                var n = o.useRef(e);
                return (0, i.Z)((function() {
                    n.current = e
                })), o.useCallback((function() {
                    return n.current.apply(void 0, arguments)
                }), [])
            }
        },
        9270: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            var o = t(7378),
                i = t(2302);

            function r(e, n) {
                return o.useMemo((function() {
                    return null == e && null == n ? null : function(t) {
                        (0, i.Z)(e, t), (0, i.Z)(n, t)
                    }
                }), [e, n])
            }
        },
        7695: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return p
                }
            });
            var o, i = t(7378),
                r = !0,
                a = !1,
                l = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function c(e) {
                e.metaKey || e.altKey || e.ctrlKey || (r = !0)
            }

            function u() {
                r = !1
            }

            function s() {
                "hidden" === this.visibilityState && a && (r = !0)
            }

            function d(e) {
                var n, t, o, i = e.target;
                try {
                    return i.matches(":focus-visible")
                } catch (a) {}
                return r || (t = (n = i).type, !("INPUT" !== (o = n.tagName) || !l[t] || n.readOnly) || "TEXTAREA" === o && !n.readOnly || !!n.isContentEditable)
            }

            function p() {
                var e = i.useCallback((function(e) {
                        var n;
                        null != e && ((n = e.ownerDocument).addEventListener("keydown", c, !0), n.addEventListener("mousedown", u, !0), n.addEventListener("pointerdown", u, !0), n.addEventListener("touchstart", u, !0), n.addEventListener("visibilitychange", s, !0))
                    }), []),
                    n = i.useRef(!1);
                return {
                    isFocusVisibleRef: n,
                    onFocus: function(e) {
                        return !!d(e) && (n.current = !0, !0)
                    },
                    onBlur: function() {
                        return !!n.current && (a = !0, window.clearTimeout(o), o = window.setTimeout((function() {
                            a = !1
                        }), 100), n.current = !1, !0)
                    },
                    ref: e
                }
            }
        },
        2291: function(e, n, t) {
            var o = t(7378);
            n.Z = o.createContext(null)
        }
    }
]);
//# sourceMappingURL=04a7fa58d64f06524587a97b4ba966c5f3ed8bf9-f5e93b8e614be5c51734.js.map