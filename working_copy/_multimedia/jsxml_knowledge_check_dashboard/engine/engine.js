! function() {
    "use strict";

    function t() {
        yt("---------------------------"), $.ajax({
            type: "GET",
            url: "data.xml",
            dataType: "xml",
            success: function(t) {
                a(t)
            },
            error: function(t, a, e) {
                kt(1), yt("Failed to load data.xml file."), "Error: Invalid XML" == ("" + e).substring(0, 18) && (e = "Error: Invalid XML"), yt('Text Status: "' + a + '". Error Thrown: "' + e + '"')
            }
        })
    }

    function a(t) {
        yt("Processing data.xml file");
        var a = $(t).children("data");
        e(a), null != a.attr("dev_mode") && (Pt = !0, wt());
        var n = a.attr("version").split("."),
            o = n[0],
            i = n[1],
            l = n[2],
            s = Ut.split("."),
            u = s[0],
            c = s[1],
            d = s[2];
        return u > o || c > i || d > l ? (kt(2), void yt("XML Version: " + a.attr("version"))) : (At = parseInt(a.attr("frame_rate")), a.children("master").each(function() {
            zt["*master*" + $(this).attr("name")] = $(this)
        }), Ct.data("parentData", a), void r(a.attr("file")))
    }

    function e(t) {
        (null == t.attr("version") || "" == t.attr("version")) && t.attr("version", "0.0"), (null == t.attr("file") || "" == t.attr("file")) && t.attr("file", "scenedata.xml"), (null == t.attr("w") || "" == t.attr("w")) && t.attr("w", "1000"), (null == t.attr("h") || "" == t.attr("h")) && t.attr("h", "640"), (null == t.attr("frame_rate") || "" == t.attr("frame_rate")) && t.attr("frame_rate", "30"), (null == t.attr("background_color") || "" == t.attr("background_color")) && t.attr("background_color", "transparent"), null == t.attr("css_style") && t.attr("css_style", ""), t.children("master").each(function() {
            (null == $(this).attr("name") || "" == $(this).attr("name")) && $(this).remove()
        }), Ct.data("parentData", t)
    }

    function r(t) {
        ".xml" == t.slice(t.length - 4) && (t = t.slice(0, t.length - 4)), $.ajax({
            type: "GET",
            url: t + ".xml",
            dataType: "xml",
            success: function(a) {
                n(a, t)
            },
            error: function(a, e, r) {
                kt(3), yt("Failed to load " + t + ".xml file."), "Error: Invalid XML" == ("" + r).substring(0, 18) && (r = "Error: Invalid XML"), yt('Text Status: "' + e + '". Error Thrown: "' + r + '"'), yt("Engine stopped.")
            }
        })
    }

    function n(t, a) {
        yt("Processing " + a + ".xml");
        var e = Ct.data("parentData"),
            r = $(t).children("data");
        o(r);
        var n = r.find("image"),
            i = n.length,
            l = 0;
        dt("Loading...<br/>Image"), r.find("image").each(function(t) {
            $("<img/>").attr("src", $(this).attr("file")), dt("Loading...<br/>Image (" + (t + 1) + " of " + i + " )"), l++
        }), $("#loadingDiv").remove(), Ct.height(it(r.attr("h"))), Ct.width(it(r.attr("w"))), Ct.css("background-color", r.attr(it("background_color"))), Ct.addClass(it(r.attr("css_style"))), (parseInt(it(r.attr("h"))) > parseInt(it(e.attr("h"))) || parseInt(it(r.attr("w"))) > parseInt(it(e.attr("w")))) && _t("The interaction size for this file is larger than the data.xml size."), At = parseInt(r.attr("frame_rate")), Ct.data("data", r), Ct.data("file", a), Bt["*current_slide*"] = 1, O(1)
    }

    function o(t) {
        var a = Ct.data("parentData");
        (null == t.attr("w") || "" == t.attr("w")) && t.attr("w", a.attr("w")), (null == t.attr("h") || "" == t.attr("h")) && t.attr("h", a.attr("h")), (null == t.attr("frame_rate") || "" == t.attr("frame_rate")) && t.attr("frame_rate", a.attr("frame_rate")), (null == t.attr("background_color") || "" == t.attr("background_color")) && t.attr("background_color", a.attr("background_color")), null == t.attr("css_style") && t.attr("css_style", a.attr("css_style")), t.children("slide").each(function(t) {
            $(this).attr("number", t + 1), i($(this))
        })
    }

    function i(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), null == t.attr("variables") && t.attr("variables", ""), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase()), M(t);
        var a = t.children("layer");
        0 == a.length && (t.append($("<layer/>").append(t.children())), a = t.children("layer")), a.each(function() {
            l($(this))
        })
    }

    function l(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"), (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"), (null == t.attr("w") || "" == t.attr("w")) && t.attr("w", "100%"), (null == t.attr("h") || "" == t.attr("h")) && t.attr("h", "100%"), (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"), null == t.attr("css_style") && t.attr("css_style", ""), null == t.attr("background_color") && t.attr("background_color", "transparent"), (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"), (null == t.attr("scrollable") || "" == t.attr("scrollable")) && t.attr("scrollable", "false"), (null == t.attr("scroll_w") || "" == t.attr("scroll_w")) && t.attr("scroll_w", t.attr("w")), (null == t.attr("scroll_h") || "" == t.attr("scroll_h")) && t.attr("scroll_h", t.attr("h")), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase()), M(t), t.children().each(function() {
            s(this)
        })
    }

    function s(t) {
        var a = $(t);
        switch (t.tagName.toLowerCase()) {
            case "html":
                u(a), M(a), C(a);
                break;
            case "image":
                c($(t)), M(a), C(a);
                break;
            case "video":
                d($(t)), M(a), C(a);
                break;
            case "audio":
                p($(t)), M(a), C(a);
                break;
            case "drop_target":
                m($(t)), M(a), C(a);
                break;
            case "variable":
                h($(t));
                break;
            case "array":
                g($(t));
                break;
            case "timed_event":
                v($(t));
                break;
            case "action_set":
                b($(t));
                break;
            case "spinner":
                x($(t)), M(a);
                break;
            case "radio_button":
                y($(t)), M(a), C(a);
                break;
            case "check_box":
                _($(t)), M(a), C(a);
                break;
            case "text_input":
                w($(t)), M(a), C(a);
                break;
            case "master":
                k($(t))
        }
    }

    function u(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"),
        (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"),
        null == t.attr("w") && t.attr("w", ""),
        null == t.attr("h") && t.attr("h", ""),
        (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"),
        null == t.attr("css_style") && t.attr("css_style", ""),
        (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"),
        f(t),
        t.attr("name", t.attr("name").replace(" ", "_")),
        t.attr("name", t.attr("name").toLowerCase())
    }

    function c(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"),
        (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"),
        null == t.attr("w") && t.attr("w", ""),
        null == t.attr("h") && t.attr("h", ""),
        (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"),
        null == t.attr("css_style") && t.attr("css_style", ""),
        null == t.attr("file") && t.attr("file", ""),
        (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"),
        f(t),
        t.attr("name", t.attr("name").replace(" ", "_")),
        t.attr("name", t.attr("name").toLowerCase())
    }

    function d(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"),
        (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"),
        null == t.attr("w") && t.attr("w", ""),
        null == t.attr("h") && t.attr("h", ""),
        (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"),
        null == t.attr("css_style") && t.attr("css_style", ""),
        (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"), null == t.attr("file") && t.attr("file", ""), (null == t.attr("controls") || "" == t.attr("controls")) && t.attr("controls", "true"), (null == t.attr("autoplay") || "" == t.attr("autoplay")) && t.attr("autoplay", "false"), (null == t.attr("loop") || "" == t.attr("loop")) && t.attr("loop", "false"), null == t.attr("image") && t.attr("image", ""), f(t), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function p(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"),
        (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"),
        null == t.attr("w") && t.attr("w", ""), null == t.attr("h") && t.attr("h", ""),
        (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"),
        null == t.attr("css_style") && t.attr("css_style", ""),
        (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"),
        null == t.attr("file") && t.attr("file", ""),
        (null == t.attr("controls") || "" == t.attr("controls")) && t.attr("controls", "true"),
        (null == t.attr("autoplay") || "" == t.attr("autoplay")) && t.attr("autoplay", "false"),
        (null == t.attr("loop") || "" == t.attr("loop")) && t.attr("loop", "false"), f(t), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function f(t) {
        (null == t.attr("draggable") || "" == t.attr("draggable")) && t.attr("draggable", "false"), (null == t.attr("droppable") || "" == t.attr("droppable")) && t.attr("droppable", "false"), (null == t.attr("drag_scope") || "" == t.attr("drag_scope")) && t.attr("drag_scope", "default"), null == t.attr("drag_distance_x") && t.attr("drag_distance_x", ""), null == t.attr("drag_distance_y") && t.attr("drag_distance_y", "")
    }

    function m(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"),
        (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"),
        null == t.attr("w") && t.attr("w", ""),
        null == t.attr("h") && t.attr("h", ""),
        (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"),
        null == t.attr("css_style") && t.attr("css_style", ""),
        (null == t.attr("drag_scope") || "" == t.attr("drag_scope")) && t.attr("drag_scope", "default"),
        null == t.attr("activated_css_style") && t.attr("activated_css_style", ""),
        null == t.attr("drag_over_css_style") && t.attr("drag_over_css_style", ""),
        (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"),
        t.children("pattern_match").each(function() {
            null == $(this).attr("match") && $(this).attr("match", ""),
            null == $(this).attr("type") && $(this).attr("type", "all"),
            null == $(this).attr("action") && $(this).attr("action", "")
        }),
        t.children("drop_match").each(function() {
            null == $(this).attr("match") && $(this).remove(),
            null == $(this).attr("action") && $(this).attr("action", "")
        }),
        t.attr("name", t.attr("name").replace(" ", "_")),
        t.attr("name", t.attr("name").toLowerCase())
    }

    function h(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("value") || "" == t.attr("value")) && t.attr("value", t.text())
    }

    function g(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt());
        var a = "";
        t.children("value").each(function() {
            "" != a && (a += "::"), a += $(this).text().trim()
        }), (null == t.attr("values") || "" == t.attr("values")) && t.attr("values", a)
    }

    function v(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), (null == t.attr("frame") || "" == t.attr("frame")) && t.attr("frame", "0"), (null == t.attr("repeat") || "" == t.attr("repeat")) && t.attr("repeat", ""), null == t.attr("action") && t.attr("action", ""), (null == t.attr("enabled") || "" == t.attr("enabled")) && t.attr("enabled", "true"), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function b(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), null == t.attr("action") && t.attr("action", ""), (null == t.attr("global") || "" == t.attr("global")) && t.attr("global", "false");
        var a = "",
            e = t.children("action");
        e.each(function(t) {
            a = a + e.eq(t).attr("do") + "::"
        }), a.replace(" ", "_"), "::" == a.substring(a.length - 2) && (a = a.substring(0, a.length - 2)), "" == t.attr("action") && t.attr("action", a), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function x(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()),
        (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"),
        (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"),
        null == t.attr("w") && t.attr("w", ""),
        null == t.attr("h") && t.attr("h", ""),
        (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"),
        null == t.attr("css_style") && t.attr("css_style", ""),
        (null == t.attr("start_at") || "" == t.attr("start_at")) && t.attr("start_at", "1"),
        (null == t.attr("sensitivity") || "" == t.attr("sensitivity")) && t.attr("sensitivity", "10"),
        (null == t.attr("auto") || "" == t.attr("auto")) && t.attr("auto", "false"),
        (null == t.attr("loop") || "" == t.attr("loop")) && t.attr("loop", "false"), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function y(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"), (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"), null == t.attr("w") && t.attr("w", ""), null == t.attr("h") && t.attr("h", ""), (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"), null == t.attr("css_style") && t.attr("css_style", ""), (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"), (null == t.attr("group") || "" == t.attr("group")) && t.attr("group", "default"), (null == t.attr("selected") || "" == t.attr("selected")) && t.attr("selected", "false"), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function _(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"), (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"), null == t.attr("w") && t.attr("w", ""), null == t.attr("h") && t.attr("h", ""), (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"), null == t.attr("css_style") && t.attr("css_style", ""), (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"), (null == t.attr("selected") || "" == t.attr("selected")) && t.attr("selected", "false"), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function w(t) {
        (null == t.attr("name") || "" == t.attr("name")) && t.attr("name", mt()), (null == t.attr("x") || "" == t.attr("x")) && t.attr("x", "0"), (null == t.attr("y") || "" == t.attr("y")) && t.attr("y", "0"), null == t.attr("w") && t.attr("w", ""), null == t.attr("h") && t.attr("h", ""), (null == t.attr("a") || "" == t.attr("a")) && t.attr("a", "100"), null == t.attr("css_style") && t.attr("css_style", ""), (null == t.attr("permeable") || "" == t.attr("permeable")) && t.attr("permeable", "false"), t.attr("name", t.attr("name").replace(" ", "_")), t.attr("name", t.attr("name").toLowerCase())
    }

    function k(t) {
        if (null == t.attr("name") || "" == t.attr("name")) return void t.remove();
        var a = zt["*master*" + t.attr("name")];
        a.children().each(function() {
            s(this)
        }), t.replaceWith(a.contents())
    }

    function M(t) {
        for (var a = ["onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseMove", "onMouseEnter", "onMouseLeave", "onBlur", "onFocus", "onKeyDown", "onKeyUp", "onChange", "onLoad", "onUnload", "onScroll", "onDrag", "onDragStart", "onDragStop", "onActivateDrag", "onDeactivateDrag", "onDragOver", "onDragOut", "onDrop", "onPlay", "onPause", "onEnded", "onCanPlay", "onSpin", "onSpinStart", "onSpinStop"], e = 0; e < a.length; e++) null == t.attr(a[e]) && t.attr(a[e], "");
        var r = t.children("event");
        r.each(function(a) {
            var e = "",
                n = r.eq(a).children("action"),
                o = r.eq(a).attr("trigger");
            n.each(function(t) {
                e = e + n.eq(t).attr("do") + "::"
            }), e.replace(" ", "_"), "::" == e.substring(e.length - 2) && (e = e.substring(0, e.length - 2)), (null == t.attr(o) || "" == t.attr(o)) && t.attr(o, e)
        })
    }

    function C(t) {
        null == t.attr("animation") && t.attr("animation", "");
        var a = t.children("animation");
        a.each(function(e) {
            var r = "",
                n = a.eq(e).children("action");
            n.each(function(t) {
                r = r + n.eq(t).attr("do") + "::"
            }), r.replace(" ", "_"), "::" == r.substring(r.length - 2) && (r = r.substring(0, r.length - 2)), "" == t.attr("animation") && t.attr("animation", r)
        })
    }

    function O(t) {
        t -= 1;
        var a = Ct.data("data").children("slide"),
            e = a.eq(t);
        if (0 == e.length || 0 > t) return void _t("Slide not found, action cancelled");
        Y(), yt("Drawing slide " + (t + 1) + " - " + e.attr("name")), Ct.empty(), Ct.off(), Bt["*current_slide*"] = t + 1, Bt["*current_slide_name*"] = e.attr("name"), Bt["*number_of_slides*"] = a.length, $t(), "" != e.attr("onClick") ? Ct.click(function(t) {
            t.stopPropagation(), H(it(e.attr("onClick")))
        }) : null, "" != e.attr("onDoubleClick") ? Ct.dblclick(function(t) {
            t.stopPropagation(), H(it(e.attr("onDoubleClick")))
        }) : null, "" != e.attr("onMouseDown") ? Ct.mousedown(function(t) {
            t.stopPropagation(), H(it(e.attr("onMouseDown")))
        }) : null, "" != e.attr("onMouseUp") ? Ct.mouseup(function(t) {
            t.stopPropagation(), H(it(e.attr("onMouseUp")))
        }) : null, "" != e.attr("onMouseMove") ? Ct.mousemove(function(t) {
            t.stopPropagation(), H(it(e.attr("onMouseMove")))
        }) : null, "" != e.attr("onMouseEnter") ? Ct.mouseenter(function(t) {
            t.stopPropagation(), H(it(e.attr("onMouseEnter")))
        }) : null, "" != e.attr("onMouseLeave") ? Ct.mouseleave(function(t) {
            t.stopPropagation(), H(it(e.attr("onMouseLeave")))
        }) : null;
        for (var r = bt(e.attr("variables"), ":"), n = 0; n < r.length; n++) {
            var o = r[n].indexOf("="),
                i = it(r[n].substring(0, o)),
                l = it(r[n].substring(o + 1));
            Bt[i] = l
        }
        e.children("layer").each(function() {
            return e.attr("number") != Bt["*current_slide*"] ? !1 : void P($(this))
        }), e.attr("number") == Bt["*current_slide*"] && "" != e.attr("onLoad") && H(it(e.attr("onLoad")))
    }

    function P(t) {
        // console.log(t, "t in P");
        var a = $("<div/>").addClass(it(t.attr("name"))).addClass(it(t.attr("css_style"))).css({
            position: "absolute",
            left: it(t.attr("x")) + "px",
            top: it(t.attr("y")) + "px",
            width: it(t.attr("w")),
            height: it(t.attr("h")),
            opacity: parseFloat(it(t.attr("a")) / 100).toFixed(2),
            "background-color": it(t.attr("background_color")),
            "pointer-events": function() {
                return "true" == it(t.attr("permeable")) ? "none" : "auto"
            },
            overflow: function() {
                return "true" == it(t.attr("scrollable")) ? "auto" : "hidden"
            }
        }).appendTo(Ct);



        a.data("element_type", t.attr("layer")),
        a.data("name", t.attr("name")),
        a.data("x", t.attr("x")),
        a.data("y", t.attr("y")),
        a.data("w", t.attr("w")),
        a.data("h", t.attr("h")),
        a.data("a", t.attr("a")),
//        a.prop("tabindex", t.attr("tabindex")),


        a.data("css_style", t.attr("css_style")),
        a.data("background_color", t.attr("background_color")),
        a.data("permeable", t.attr("permeable")),
        a.data("scrollable", t.attr("scrollable")),
        a.data("scroll_w", t.attr("scroll_w")),
        a.data("scroll_h", t.attr("scroll_h")), "" != t.attr("onClick") ? a.click(function(a) {
            a.stopPropagation(), H(it(t.attr("onClick")))
        }) : null, "" != t.attr("onDoubleClick") ? a.dblclick(function(a) {
            a.stopPropagation(), H(it(t.attr("onDoubleClick")))
        }) : null, "" != t.attr("onMouseDown") ? a.mousedown(function(a) {
            a.stopPropagation(), H(it(t.attr("onMouseDown")))
        }) : null, "" != t.attr("onFocus") ? a.onfoucs(function(a) {
            a.stopPropagation(), H(it(t.attr("onFocus")))
        }) : null, "" != t.attr("onKeyDown") ? a.onkeydown(function(a) {
            a.stopPropagation(), H(it(t.attr("onKeyDown")))
        }) : null, "" != t.attr("onMouseUp") ? a.mouseup(function(a) {
            a.stopPropagation(), H(it(t.attr("onMouseUp")))
        }) : null, "" != t.attr("onMouseMove") ? a.mousemove(function(a) {
            a.stopPropagation(), H(it(t.attr("onMouseMove")))
        }) : null, "" != t.attr("onMouseEnter") ? a.mouseenter(function(a) {
            a.stopPropagation(), H(it(t.attr("onMouseEnter")))
        }) : null, "" != t.attr("onMouseLeave") ? a.mouseleave(function(a) {
            a.stopPropagation(), H(it(t.attr("onMouseLeave")))
        }) : null, "" != t.attr("onScroll") ? a.scroll(function(a) {
            a.stopPropagation(), H(it(t.attr("onScroll")))
        }) : null;
        var e = t.parent();
        t.children().each(function() {
            if (e.attr("number") != Bt["*current_slide*"]) return !1;
            switch (this.tagName.toLowerCase()) {
                case "html":
                    D(a, $(this));
                    break;
                case "image":
                    L(a, $(this));
                    break;
                case "video":
                    F(a, $(this));
                    break;
                case "audio":
                    E(a, $(this));
                    break;
                case "drop_target":
                    I(a, $(this));
                    break;
                case "variable":
                    A($(this));
                    break;
                case "array":
                    T($(this));
                    break;
                case "timed_event":
                    q($(this));
                    break;
                case "action_set":
                    U($(this));
                    break;
                case "spinner":
                    B(a, $(this));
                    break;
                case "radio_button":
                    j(a, $(this));
                    break;
                case "check_box":
                    z(a, $(this));
                    break;
                case "text_input":
                    N(a, $(this))
            }
        }), e.attr("number") == Bt["*current_slide*"] && "" != t.attr("onLoad") && H(it(t.attr("onLoad")))
    }

    function D(t, a) {
        var e = $("<div/>")
            .addClass(it(a.attr("name")))
            .addClass(it(a.attr("css_style")))
 //           .prop("tabindex", a.attr("tabindex"))
            .css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        }).html(it(a.text()));



//        e.find("label").attr("tabindex", a.attr("tabindex"));

//        alert(e.find("notrans").text())

//        alert(a.attr("tabindex"));

        e.data("element_type", "html"),
        e.data("name", a.attr("name")),
        e.data("x", a.attr("x")),
        e.data("y", a.attr("y")),
        e.data("w", a.attr("w")),
        e.data("h", a.attr("h")),
        e.data("a", a.attr("a")),
        e.data("css_style", a.attr("css_style")),
        e.data("permeable", a.attr("permeable")),
        e.data("html_text", a.text()),

        console.log(e.find("label").text());

//        e.find("> span").prop("tabindex", a.attr("tabindex"))
//        e.data("tabindex", a.attr("tabindex")),
        t.append(e),
//        t.find("label").prop("tabindex", a.attr("tabindex"))
  //      console.log(t, "T");
        "true" == it(a.attr("draggable")) && S(a, e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        // }) : null, "" != a.attr("onKeyDown") ? e.onkeydown(function(t) {
        //     t.stopPropagation(), H(it(a.attr("onKeyDown")))
        // }) : null, "" != a.attr("onFocus") ? e.onfoucs(function(t) {
        //     t.stopPropagation(), H(it(a.attr("onFocus")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("animation") && H(it(a.attr("animation"))), "" != a.attr("onLoad") && H(it(a.attr("onLoad")))
    }

    function L(t, a) {
        var e = $("<img/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).attr("src", it(a.attr("file"))).css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        });
        e.data("element_type", "image"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), e.data("a", a.attr("a")), e.data("css_style", a.attr("css_style")), e.data("permeable", a.attr("permeable")), e.data("file", a.attr("file")), t.append(e), "true" == it(a.attr("draggable")) && S(a, e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("animation") && H(it(a.attr("animation"))), H(it(a.attr("onLoad")))
    }

    function F(t, a) {
        var e = $("<video/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).attr("src", it(a.attr("file"))).attr("preload", "auto").css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            outline: "none",
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        });
        "true" == it(a.attr("controls")) && e.attr("controls", "true"), "true" == it(a.attr("autoplay")) && e.attr("autoplay", "true"), "true" == it(a.attr("loop")) && e.attr("loop", "true"), "" != it(a.attr("image")) && e.attr("poster", it(a.attr("image"))), e.data("element_type", "video"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), e.data("a", a.attr("a")), e.data("css_style", a.attr("css_style")), e.data("file", a.attr("file")), e.data("permeable", a.attr("permeable")), t.append(e), "true" == it(a.attr("draggable")) && S(a, e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("onPlay") ? e.on("play", function(t) {
            t.stopPropagation(), H(it(a.attr("onPlay")))
        }) : null, "" != a.attr("onPause") ? e.on("pause", function(t) {
            t.stopPropagation(), H(it(a.attr("onPause")))
        }) : null, "" != a.attr("onEnded") ? e.on("ended", function(t) {
            t.stopPropagation(), H(it(a.attr("onEnded")))
        }) : null, "" != a.attr("onCanPlay") ? e.on("canplaythrough", function(t) {
            t.stopPropagation(), H(it(a.attr("onCanPlay")))
        }) : null, "" != a.attr("animation") && H(it(a.attr("animation"))), H(it(a.attr("onLoad")))
    }

    function E(t, a) {
        var e = $("<audio/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).attr("src", it(a.attr("file"))).attr("preload", "auto").css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            outline: "none",
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        });
        "true" == it(a.attr("controls")) && e.attr("controls", "true"), "true" == it(a.attr("autoplay")) && e.attr("autoplay", "true"), "true" == it(a.attr("loop")) && e.attr("loop", "true"), e.data("element_type", "audio"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), t.append(e), "true" == it(a.attr("draggable")) && S(a, e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("onPlay") ? e.on("play", function(t) {
            t.stopPropagation(), H(it(a.attr("onPlay")))
        }) : null, "" != a.attr("onPause") ? e.on("pause", function(t) {
            t.stopPropagation(), H(it(a.attr("onPause")))
        }) : null, "" != a.attr("onEnded") ? e.on("ended", function(t) {
            t.stopPropagation(), H(it(a.attr("onEnded")))
        }) : null, "" != a.attr("onCanPlay") ? e.on("canplaythrough", function(t) {
            t.stopPropagation(), H(it(a.attr("onCanPlay")))
        }) : null, "" != a.attr("animation") && H(it(a.attr("animation"))), H(it(a.attr("onLoad")))
    }

    function S(t, a) {
        a.css("z-index", 99);
        var e = !1,
            r = "parent",
            n = it(t.attr("drag_scope"));
        if ("true" == it(t.attr("droppable")) && (e = "invalid"), "true" != it(t.attr("droppable")) && ("" != it(t.attr("drag_distance_x")) || "" != it(t.attr("drag_distance_y")))) {
            var o = a.parent().offset().left + a.position().left,
                i = a.parent().offset().top + a.position().top,
                l = o,
                s = i;
            "" != it(t.attr("drag_distance_x")) ? (o -= parseInt(it(t.attr("drag_distance_x"))), l += parseInt(it(t.attr("drag_distance_x")))) : (o = 0, l = a.parent().outerWidth()), "" != it(t.attr("drag_distance_y")) ? (i -= parseInt(it(t.attr("drag_distance_y"))), s += parseInt(it(t.attr("drag_distance_y")))) : (i = 0, s = a.parent().outerHeight()), r = [o, i, l, s];
            var u = [o - a.parent().offset().left, i - a.parent().offset().top, l - a.parent().offset().left, s - a.parent().offset().top];
            a.data("relativeContainment", u), St.push(t.attr("name"))
        }
        "true" != it(t.attr("droppable")) && (n = ""), a.draggable({
            addClasses: !1,
            zIndex: 100,
            containment: r,
            revert: e,
            revertDuration: 50,
            scope: n,
            start: function(a, e) {
                H(it(t.attr("onDragStart")))
            },
            drag: function(a, e) {
                H(it(t.attr("onDrag")))
            },
            stop: function(a, e) {
                H(it(t.attr("onDragStop")))
            }
        })
    }

    function I(t, a) {
        var e = $("<div/>").addClass("_drop_target").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        }).html(it(a.text()));
        e.data("name", it(a.attr("name"))), e.data("x", it(a.attr("x"))), e.data("y", it(a.attr("y"))), e.data("w", it(a.attr("w"))), e.data("h", it(a.attr("h"))), t.append(e), e.data("elementsDropped", new Array), e.data("lastElementDropped", ""), e.droppable({
            addClasses: !1,
            activeClass: it(a.attr("activated_css_style")),
            hoverClass: it(a.attr("drag_over_css_style")),
            tolerance: "pointer",
            scope: it(a.attr("drag_scope")),
            activate: function(t, e) {
                H(it(a.attr("onActivateDrag")))
            },
            deactivate: function(t, r) {
                H(it(a.attr("onDeactivateDrag"))), a.children("pattern_match").each(function() {
                    var t = $(this);
                    if ("any" == it(t.attr("type"))) {
                        for (var a = !0, r = e.data("elementsDropped"), n = t.attr("match").split("::"), o = 0; o < r.length; o++) - 1 == n.indexOf(r[o]) && (a = !1);
                        a && H(it(t.attr("action")))
                    } else {
                        for (var a = !0, r = e.data("elementsDropped"), n = t.attr("match").split("::"), o = 0; o < r.length; o++) - 1 == n.indexOf(r[o]) && (a = !1);
                        for (var o = 0; o < n.length; o++) - 1 == r.indexOf(n[o]) && (a = !1);
                        a && H(it(t.attr("action")))
                    }
                })
            },
            over: function(t, e) {
                H(it(a.attr("onDragOver")))
            },
            out: function(t, e) {
                H(it(a.attr("onDragOut")))
            },
            drop: function(r, n) {
                n.draggable.data("name") != e.data("lastElementDropped") && (e.data("lastElementDropped", n.draggable.data("name")), t.children("._drop_target").each(function() {
                    var t = $(this).data("elementsDropped").indexOf(n.draggable.data("name"));
                    t > -1 && ($(this).data("elementsDropped").splice(t, 1), $(this).data("lastElementDropped", ""))
                }), e.data("elementsDropped").push(n.draggable.data("name")), H(it(a.attr("onDrop"))), a.children("drop_match").each(function() {
                    $(this).attr("match") == n.draggable.data("name") && H(it($(this).attr("action")))
                }))
            }
        }), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("animation") && H(it(a.attr("animation"))), "" != a.attr("onLoad") && H(it(a.attr("onLoad")))
    }

    function A(t) {
        Bt[t.attr("name")] = it(t.attr("value"))
    }

    function T(t) {
        var a = it(t.attr("values")).split("::");
        jt[t.attr("name")] = a
    }

    function q(t) {
        var a = parseFloat(1e3 * it(t.attr("frame"))) / At,
            e = parseFloat(1e3 * it(t.attr("repeat"))) / At;
        Dt.push(pt(e) && e > 0 ? setTimeout(function() {
            Dt.push(setInterval(function() {
                H(t.attr("action"))
            }, e))
        }, a) : setTimeout(function() {
            H(t.attr("action"))
        }, a))
    }

    function U(t) {
        "true" != t.attr("global") ? Ft[t.attr("name")] = t.attr("action") : Et[t.attr("name")] = t.attr("action")
    }

    function B(t, a) {
        var e = $("<div/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).css({
                position: "absolute",
                left: it(a.attr("x")) + "px",
                top: it(a.attr("y")) + "px",
                opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2)
            }),
            r = $("<img/>").addClass("rollerblade-img").css({
                width: it(a.attr("w")),
                height: it(a.attr("h"))
            }),
            n = a.children("image"),
            o = "",
            i = [];
        n.each(function(t) {
            0 == t && (o = n.eq(t).attr("file")), i[t] = n.eq(t).attr("file")
        }), r.attr("src", o), e.append(r);
        var l = !1,
            s = !1;
        "true" == it(a.attr("auto")) && (l = !0), "false" == it(a.attr("loop")) && (s = !0), e.rollerblade({
            imageArray: i,
            sensitivity: it(a.attr("sensitivity")),
            auto: l,
            edgeStop: s,
            onSpin: function(t, e) {
                H(it(a.attr("onSpin")))
            },
            onSpinStart: function(t, e) {
                H(it(a.attr("onSpinStart")))
            },
            onSpinStop: function(t, e) {
                H(it(a.attr("onSpinStop")))
            }
        }), e.data("element_type", "spinner"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), e.data("a", a.attr("a")), e.data("start_at", a.attr("start_at")), e.data("image_number", a.attr("start_at")), e.data("permeable", a.attr("permeable")), e.data("sensitivity", a.attr("sensitivity")), e.data("auto", a.attr("auto")), e.data("loop", a.attr("loop")), t.append(e)
    }

    function j(t, a) {
        var e = $("<input/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).attr("type", "radio").attr("name", it(a.attr("group"))).attr("value", it(a.attr("name"))).css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        });
        "true" == it(a.attr("selected")) && e.attr("selected", "true"), e.data("element_type", "radio_button"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), e.data("a", a.attr("a")), e.data("css_style", a.attr("css_style")), e.data("permeable", a.attr("permeable")), e.data("selected", a.attr("selected")), t.append(e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")));
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("onChange") ? e.change(function(t) {
            t.stopPropagation(), H(it(a.attr("onChange")))
        }) : null, H(it(a.attr("onLoad")))
    }

    function z(t, a) {
        var e = $("<input/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).attr("type", "checkbox").attr("value", it(a.attr("name"))).css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        });
        "true" == it(a.attr("checked")) && e.attr("checked", "true"), e.data("element_type", "checkbox"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), e.data("a", a.attr("a")), e.data("css_style", a.attr("css_style")), e.data("permeable", a.attr("permeable")), e.data("selected", a.attr("selected")), t.append(e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("onChange") ? e.change(function(t) {
            t.stopPropagation(), H(it(a.attr("onChange")))
        }) : null, H(it(a.attr("onLoad")))
    }

    function N(t, a) {
        var e = $("<input/>").addClass(it(a.attr("name"))).addClass(it(a.attr("css_style"))).attr("type", "text").attr("value", it(a.text())).css({
            position: "absolute",
            left: it(a.attr("x")) + "px",
            top: it(a.attr("y")) + "px",
            width: it(a.attr("w")),
            height: it(a.attr("h")),
            opacity: parseFloat(it(a.attr("a")) / 100).toFixed(2),
            "pointer-events": function() {
                return "true" == it(a.attr("permeable")) ? "none" : "auto"
            }
        });
        e.data("element_type", "text_input"), e.data("name", a.attr("name")), e.data("x", a.attr("x")), e.data("y", a.attr("y")), e.data("w", a.attr("w")), e.data("h", a.attr("h")), e.data("a", a.attr("a")), e.data("css_style", a.attr("css_style")), e.data("permeable", a.attr("permeable")), e.data("selected", a.attr("selected")), t.append(e), "" != a.attr("onClick") ? e.click(function(t) {
            t.stopPropagation(), H(it(a.attr("onClick")))
        }) : null, "" != a.attr("onDoubleClick") ? e.dblclick(function(t) {
            t.stopPropagation(), H(it(a.attr("onDoubleClick")))
        }) : null, "" != a.attr("onMouseDown") ? e.mousedown(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseDown")))
        }) : null, "" != a.attr("onMouseUp") ? e.mouseup(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseUp")))
        }) : null, "" != a.attr("onMouseMove") ? e.mousemove(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseMove")))
        }) : null, "" != a.attr("onMouseEnter") ? e.mouseenter(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseEnter")))
        }) : null, "" != a.attr("onMouseLeave") ? e.mouseleave(function(t) {
            t.stopPropagation(), H(it(a.attr("onMouseLeave")))
        }) : null, "" != a.attr("onChange") ? e.change(function(t) {
            t.stopPropagation(), H(it(a.attr("onChange")))
        }) : null, H(it(a.attr("onLoad")))
    }

    function H(t) {
        if (null != t && "" != t) {
            var a = vt(t, "::");
            if (-1 == a) V(t, null);
            else {
                var e = t.substring(0, a),
                    r = t.substring(a + 2);
                V(e, r)
            }
        }
    }

    function V(t, a) {
        var e = bt(t, ":"),
            r = null;
        if (null != a) {
            r = ft();
            var n = new Object;
            n.id = r, n.toComplete = e.length, n.completed = 0, n.actionString = a
        }
        Lt[r] = n;
        for (var o = 0; o < e.length; o++) e[o] = W(e[o]);
        for (var i = new Array, o = 0; o < e.length; o++) i = i.concat(bt(e[o], ":"));
        e = new Array, e = e.concat(i);
        for (var o = 0; o < e.length; o++) {
            var l = e[o]; - 1 != l.indexOf("=") && (-1 == l.indexOf("(") || l.indexOf("(") > l.indexOf("=")) ? J("" + l, r) : -1 != l.indexOf(".") && (-1 == l.indexOf("(") || l.indexOf("(") > l.indexOf(".")) ? G("" + l, r) : K("" + l, r)
        }
    }

    function W(t) {
        if (0 != t.indexOf("if(")) return t;
        var a = Z(t),
            e = tt(t),
            r = at(t),
            n = X(a);
        return n === !0 ? e : r
    }

    function X(t) {
        if (-1 != t.indexOf("AND")) {
            var a = X(t.substring(0, t.indexOf("AND"))),
                e = X(t.substring(t.indexOf("AND") + 3));
            return a && e
        }
        if (-1 != t.indexOf("OR")) {
            var a = X(t.substring(0, t.indexOf("OR"))),
                e = X(t.substring(t.indexOf("OR") + 2));
            return a || e
        }
        if ("true" == t || t === !0) return !0;
        if ("false" == t || t === !1) return !1;
        if (-1 != t.indexOf("==")) {
            var a = it(t.substring(0, t.indexOf("==")).trim()),
                e = it(t.substring(t.indexOf("==") + 2).trim());
            return a == e
        }
        if (-1 != t.indexOf("!=")) {
            var a = it(t.substring(0, t.indexOf("!=")).trim()),
                e = it(t.substring(t.indexOf("!=") + 2).trim());
            return a != e
        }
        if (-1 != t.indexOf(">=")) {
            var a = it(t.substring(0, t.indexOf(">=")).trim()),
                e = it(t.substring(t.indexOf(">=") + 2).trim());
            return pt(a) && pt(e) ? parseFloat(a) >= parseFloat(e) : !1
        }
        if (-1 != t.indexOf(">")) {
            var a = it(t.substring(0, t.indexOf(">")).trim()),
                e = it(t.substring(t.indexOf(">") + 1).trim());
            return pt(a) && pt(e) ? (yt("L" + parseFloat(a)), yt("R" + parseFloat(e)), parseFloat(a) > parseFloat(e)) : !1
        }
        if (-1 != t.indexOf("<=")) {
            var a = it(t.substring(0, t.indexOf("<=")).trim()),
                e = it(t.substring(t.indexOf("<=") + 2).trim());
            return pt(a) && pt(e) ? parseFloat(a) <= parseFloat(e) : !1
        }
        if (-1 != t.indexOf("<")) {
            var a = it(t.substring(0, t.indexOf("<")).trim()),
                e = it(t.substring(t.indexOf("<") + 1).trim());
            return pt(a) && pt(e) ? parseFloat(a) < parseFloat(e) : !1
        }
        return _t("Conditional syntax problem:" + t), !1
    }

    function R(t) {
        if (null != t) {
            var a = Lt[t];
            null != a && (a.completed += 1, a.toComplete == a.completed && H(a.actionString))
        }
    }

    function J(t, a) {
        var e = t.indexOf("="),
            r = it(t.substring(0, e)),
            n = it(t.substring(e + 1));
        if (-1 == r.indexOf("[")) Bt[r] = n;
        else {
            var o = r.substring(0, r.indexOf("[")),
                i = parseInt(it(r.substring(r.indexOf("[") + 1, r.indexOf("]")))),
                l = n;
            null != jt[o] && jt[o].length > i ? jt[o][i] = l : (kt(7), yt("Array name: " + o + ". Index: " + i))
        }
        R(a)
    }

    function G(t, a) {
        var e = vt(t, "."),
            r = it(t.substring(0, e)),
            n = $("." + r);
        if (0 == n.length && null == jt[r]) return kt(6), void yt('Element "' + r + '" not found');
        var o = it(t.substring(e + 1));
        n.each(function() {
            var t = $(this).data("element_type");
            if (0 == o.indexOf("setX(")) {
                var e = Z(o),
                    n = tt(o),
                    i = at(o);
                "" === e && (e = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    left: e
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setY(")) {
                var e = Z(o),
                    n = tt(o),
                    i = at(o);
                "" === e && (e = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    top: e
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setPosition(")) {
                var l = Z(o),
                    s = tt(o),
                    n = at(o),
                    i = et(o);
                "" === l && (l = "+=0"), "" === s && (s = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    top: s,
                    left: l
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setWidth(")) {
                var e = Z(o),
                    n = tt(o),
                    i = at(o);
                "" === e && (e = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    width: e
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setHeight(")) {
                var e = Z(o),
                    n = tt(o),
                    i = at(o);
                "" === e && (e = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    height: e
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setSize(")) {
                var u = Z(o),
                    c = tt(o),
                    n = at(o),
                    i = et(o);
                "" === u && (u = "+=0"), "" === c && (c = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    width: u,
                    height: c
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setOpacity(")) {
                var e = Z(o),
                    n = tt(o),
                    i = at(o);
                "" === e && (e = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, "=" == e.substring(1, 2) ? e = e.substring(0, 2) + parseInt(e.substring(2)) / 100 : e /= 100, $(this).animate({
                    opacity: e
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("show(")) {
                var n = Z(o),
                    i = tt(o);
                "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).show({
                    effect: "fade",
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("hide(")) {
                var n = Z(o),
                    i = tt(o);
                "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).hide({
                    effect: "fade",
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("toggleVisibility(")) {
                var n = Z(o),
                    i = tt(o);
                "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).toggle({
                    effect: "fade",
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setAttributes(")) {
                var l = Z(o),
                    s = tt(o),
                    d = at(o),
                    p = et(o),
                    f = rt(o),
                    n = nt(o),
                    i = ot(o);
                "" === l && (l = "+=0"), "" === s && (s = "+=0"), "" === d && (d = "+=0"), "" === p && (p = "+=0"), "" === f && (f = "+=0"), "" === n && (n = "0"), "" === i && (i = "linear"), n = parseFloat(1e3 * n) / At, $(this).animate({
                    left: l,
                    top: s,
                    width: d,
                    height: p,
                    opacity: f
                }, {
                    duration: parseInt(n),
                    easing: i,
                    queue: !1,
                    complete: function() {
                        R(a)
                    }
                })
            } else if (0 == o.indexOf("setText(")) {
                var e = Q(o);
                "html" == t && $(this).html(it(e)), R(a)
            } else if (0 == o.indexOf("setFile(")) {
                var e = Z(o);
                ("image" == t || "video" == t || "audio" == t) && $(this).attr("src", it(e)), R(a)
            } else if (0 == o.indexOf("setCssStyle(")) {
                for (var m = Z(o), h = $(this).attr("class").split(" "), g = 0; g < h.length; g++) {
                    var v = h[g];
                    (v == $(this).data("name") || "ui-" == v.substring(0, 3)) && (m = m + " " + v)
                }
                $(this).attr("class", m), R(a)
            } else if (0 == o.indexOf("addCssStyle(")) {
                var m = Z(o);
                $(this).attr("class", $(this).attr("class") + " " + m), R(a)
            } else if (0 == o.indexOf("removeCssStyle(")) {
                for (var m = Z(o), h = $(this).attr("class").split(" "), b = "", g = 0; g < h.length; g++) {
                    var v = h[g];
                    v != m && (b = b + " " + v)
                }
                $(this).attr("class", b), R(a)
            } else if (0 == o.indexOf("reset(")) $(this).attr("class", ""), $(this).show(), $(this).addClass(it($(this).data("name"))), $(this).addClass(it($(this).data("css_style"))), $(this).css({
                position: "absolute",
                left: it($(this).data("x")) + "px",
                top: it($(this).data("y")) + "px",
                width: it($(this).data("w")),
                height: it($(this).data("h")),
                opacity: parseFloat(it($(this).data("a")) / 100).toFixed(2),
                "pointer-events": function() {
                    return "true" == it($(this).data("permeable")) ? "none" : "auto"
                }
            }), "layer" == t ? $(this).css({
                "background-color": it($(this).data("background_color")),
                overflow: function() {
                    return "true" == it($(this).data("scrollable")) ? "auto" : "hidden"
                }
            }) : "html" == t ? $(this).html(it($(this).data("html_text"))) : "image" == t ? $(this).attr("src", it($(this).data("file"))) : "video" == t ? $(this).attr("src", it($(this).data("file"))) : "audio" == t && $(this).attr("src", it($(this).data("file"))), R(a);
            else if (0 == o.indexOf("push(")) {
                var e = Q(o);
                jt[r].push(e), R(a)
            } else if (0 == o.indexOf("pop(")) jt[r].pop(), R(a);
            else if (0 == o.indexOf("queue(")) {
                var e = Q(o);
                jt[r].unshift(e), R(a)
            } else 0 == o.indexOf("dequeue(") ? (jt[r].shift(), R(a)) : 0 == o.indexOf("empty(") ? (jt[r] = [], R(a)) : 0 == o.indexOf("play()") ? (("video" == t || "audio" == t) && $(this).play(), R(a)) : 0 == o.indexOf("pause()") ? (("video" == t || "audio" == t) && $(this).pause(), R(a)) : 0 == o.indexOf("replay()") ? (("video" == t || "audio" == t) && $(this).replay(), R(a)) : 0 == o.indexOf("submit()") ? (("radio_button" == t || "checkbox" == t || "text_input" == t) && H($(this).attr("onSubmit")), R(a)) : (kt(5), yt("Action not recognized: " + o))
        })
    }

    function K(t, a) {
        if ("next_slide" == t) O(Bt["*current_slide*"] + 1);
        else if ("previous_slide" == t) O(Bt["*current_slide*"] - 1);
        else if (0 == t.indexOf("jump(")) {
            var e = it(Z(t));
            if (pt(e)) O(e);
            else {
                var n = Ct.data("data").children("slide[name='" + e + "']");
                if (0 == n.length) return void _t("Slide not found, action cancelled");
                O(n.attr("number"))
            }
        } else if (0 == t.indexOf("wait(")) {
            var o = Z(t);
            o = parseFloat(1e3 * o) / At, setTimeout(function() {
                R(a)
            }, parseInt(o))
        } else if (0 == t.indexOf("load(")) {
            var i = Z(t);
            r(i)
        } else if (0 == t.indexOf("debug(")) {
            var l = Z(t);
            _t("Action fired: " + l), R(a)
        } else 0 == t.indexOf("mark_complete") ? (qt === !1 && (doMarkComplete(), qt = !0), R(a)) : "" == t ? R(a) : null != Ft[t] ? (H(Ft[t]), R(a)) : null != Et[t] ? (H(Et[t]), R(a)) : (kt(5), yt("Action not recognized: " + t))
    }

    function Y() {
        for (var t = 0; t < Dt.length; t++) clearTimeout(Dt[t]);
        Lt = {}, Ft = {}, St = [], It = 0
    }

    function Q(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1);
        return a = it(e), "" + a
    }

    function Z(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e);
        return a = it(-1 == r ? e : e.substring(0, r)), "" + a
    }

    function tt(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e),
            n = 1 + r + ht(e.substring(r + 1));
        return n == r && (n = -1), a = -1 == r ? "" : it(-1 == n ? e.substring(r + 1) : e.substring(r + 1, n)), "" + a
    }

    function at(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e),
            n = 1 + r + ht(e.substring(r + 1)),
            o = 1 + n + ht(e.substring(n + 1));
        return o == n && (o = -1), n == r && (n = -1), a = -1 == n ? "" : it(-1 == o ? e.substring(n + 1) : e.substring(n + 1, o)), "" + a
    }

    function et(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e),
            n = 1 + r + ht(e.substring(r + 1)),
            o = 1 + n + ht(e.substring(n + 1)),
            i = 1 + o + ht(e.substring(o + 1));
        return i == o && (i = -1), o == n && (o = -1), n == r && (n = -1), a = -1 == o ? "" : it(-1 == i ? e.substring(o + 1) : e.substring(o + 1, i)), "" + a
    }

    function rt(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e),
            n = 1 + r + ht(e.substring(r + 1)),
            o = 1 + n + ht(e.substring(n + 1)),
            i = 1 + o + ht(e.substring(o + 1)),
            l = 1 + i + ht(e.substring(i + 1));
        return l == i && (l = -1), i == o && (i = -1), o == n && (o = -1), n == r && (n = -1), a = -1 == i ? "" : it(-1 == l ? e.substring(i + 1) : e.substring(i + 1, l)), "" + a
    }

    function nt(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e),
            n = 1 + r + ht(e.substring(r + 1)),
            o = 1 + n + ht(e.substring(n + 1)),
            i = 1 + o + ht(e.substring(o + 1)),
            l = 1 + i + ht(e.substring(i + 1)),
            s = 1 + l + ht(e.substring(l + 1));
        return s == l && (s = -1), l == i && (l = -1), i == o && (i = -1), o == n && (o = -1), n == r && (n = -1), a = -1 == l ? "" : it(-1 == s ? e.substring(l + 1) : e.substring(l + 1, s)), "" + a
    }

    function ot(t) {
        var a = "",
            e = t.substring(t.indexOf("(") + 1, t.length - 1),
            r = ht(e),
            n = 1 + r + ht(e.substring(r + 1)),
            o = 1 + n + ht(e.substring(n + 1)),
            i = 1 + o + ht(e.substring(o + 1)),
            l = 1 + i + ht(e.substring(i + 1)),
            s = 1 + l + ht(e.substring(l + 1)),
            u = 1 + s + ht(e.substring(s + 1));
        return u == s && (u = -1), s == l && (s = -1), l == i && (l = -1), i == o && (i = -1), o == n && (o = -1), n == r && (n = -1), a = -1 == s ? "" : it(-1 == u ? e.substring(s + 1) : e.substring(s + 1, u)), "" + a
    }

    function it(t) {
        null == t && (t = "", _t("getValue is receiving an undefined parameter. Missing attribute?")), t === !1 && (t = "false"), t === !0 && (t = "true"), t = t.trim(), t = t.replace("(lte)", "<="), t = t.replace("(lt)", "<"), t = t.replace("(gte)", ">="), t = t.replace("(gt)", ">");
        for (var a = t.indexOf("#!"), e = t.indexOf("!#"); - 1 != a && -1 != e;) {
            var r = t.substring(a + 2, e),
                n = "";
            if ("current_slide" == r) n = Bt["*current_slide*"];
            else if ("current_slide_name" == r) n = Bt["*current_slide_name*"];
            else if ("number_of_slides" == r) n = Bt["*number_of_slides*"];
            else if (-1 != r.indexOf("[") && -1 != r.indexOf("]")) {
                var o = r.indexOf("["),
                    i = r.indexOf("]"),
                    l = r.substring(0, o),
                    s = r.substring(o + 1, i);
                if ("" == s)
                    if ("." == r.charAt(i + 1)) {
                        var u = r.substring(i + 2);
                        switch (u) {
                            case "length":
                                n = jt[l].length;
                                break;
                            case "pop()":
                                n = jt[l].pop();
                                break;
                            case "dequeue()":
                                n = jt[l].shift()
                        }
                    } else n = jt[l].join(", ");
                else n = pt(s) ? jt[l][s] : jt[l][it("#!" + s + "!#")]
            } else n = -1 != r.indexOf(".") ? st(r) : Bt[t.substring(a + 2, e)];
            void 0 == n && (n = ""), n = ("" + n).trim(), n = n.replace("<notrans>", ""), n = n.replace("</notrans>", ""), t = t.replace("#!" + r + "!#", n), a = t.indexOf("#!"), e = t.indexOf("!#")
        }
        return (null == t || "undefined" == t) && (t = ""), "E" != t && "e" != t && "i" != t && "version" != t && "uninitialized" != t && (t = lt(t)), "" + t
    }

    function lt(t) {
        if (-1 != t.indexOf("<nomath>")) return t = t.replace("<nomath>", ""), t = t.replace("</nomath>", "");
        if ("+=" == t.substring(0, 2) || "-=" == t.substring(0, 2)) return t.substring(0, 2) + lt(t.substring(2));
        var a = t;
        try {
            a = math.eval(t)
        } catch (e) {
            a = t
        }
        return (null == a || "undefined" == a) && (a = ""), a
    }

    function st(t) {
        var a = t.substring(0, t.indexOf(".")),
            e = t.substring(t.indexOf(".") + 1).toLowerCase(),
            r = "",
            n = $("." + a);
        if (0 == n.length) return kt(6), void yt('Element "' + elementName + '" not found');
        switch (e) {
            case "x":
                r = n.position().left;
                break;
            case "y":
                r = n.position().top;
                break;
            case "w":
                r = n.width();
                break;
            case "width":
                r = n.width();
                break;
            case "innerWidth":
                r = n.innerWidth();
                break;
            case "outerWidth":
                r = n.outerWidth();
                break;
            case "h":
                r = n.height();
                break;
            case "height":
                r = n.height();
                break;
            case "innerHeight":
                r = n.innerHeight();
                break;
            case "outerHeight":
                r = n.outerHeight();
                break;
            case "css_style":
                for (var o = n.attr("class").split(" "), i = 0; i < o.length; i++) {
                    var l = o[i];
                    l != n.data("name") && "ui-" != l.substring(0, 3) && (r = r + " " + l), r.trim()
                }
                break;
            case "image_number":
                if ("spinner" == n.data("element_type")) return n.data("image_number");
            case "value":
                var s = n.data("element_type");
                return "radio_button" == s ? $('input:radio[name="' + n.data("name") + '"]:checked').val() : ""
        }
        return r
    }

    function ut(t) {
        $.ajax({
            url: t,
            dataType: "script",
            async: !1
        })
    }

    function ct(t) {
        var a = $('<link rel="stylesheet" type="text/css" />').attr("href", t);
        $("head").append(a)
    }

    function dt(t) {
        $("#loadingText").html(t)
    }

    function pt(t) {
        return null == t || "" == t || t === !1 || isNaN(t - 0) ? !1 : !0
    }

    function ft() {
        return It += 1
    }

    function mt() {
        return Tt += 1, "noname" + Tt
    }

    function ht(t) {
        if (-1 == t.indexOf(",")) return -1;
        if (-1 == t.indexOf("(") || t.indexOf("(") > t.indexOf(",")) return t.indexOf(",");
        var a = gt(t),
            e = t.substring(a + 1);
        return a + 1 + ht(e)
    }

    function gt(t) {
        var a = t.indexOf("("),
            e = t.indexOf(")");
        if (-1 == e) return kt(4), yt("Closing Parenthesis not found for: " + t), -1;
        if (-1 == a || a > e) return e;
        for (; - 1 != a && e > a && -1 != e;) {
            var r = a + t.substring(a + 1).indexOf("(");
            if (r == a - 1) return e + 1;
            if (!(-1 != r && e > r)) return e + 1;
            a += r + 1;
            var n = t.substring(e + 1).indexOf(")"); - 1 == n ? e = -1 : e += n + 1
        }
        return -1 == e ? (kt(4), yt("Closing Parenthesis not found for: " + t), -1) : e
    }

    function vt(t, a) {
        if (-1 == t.indexOf(a)) return -1;
        if (-1 == t.indexOf("(") || t.indexOf("(") > t.indexOf(a)) return t.indexOf(a);
        var e = gt(t),
            r = vt(t.substring(e), a);
        return -1 == r ? -1 : e + vt(t.substring(e), a)
    }

    function bt(t, a) {
        var e = new Array;
        if (-1 == vt(t, a)) return e.push(t), e;
        for (; - 1 != vt(t, a);) {
            var r = vt(t, a);
            e.push(t.substring(0, r)), t = t.substring(r + 1)
        }
        return e.push(t), e
    }

    function xt() {}

    function yt(t) {
        (Ot || Pt) && console.log(t)
    }

    function _t(t) {
        console.warn(t)
    }

    function wt() {
        if (Pt) {
            var t = $("<div>Dev Mode</div>").attr("id", "devTools").css({
                position: "absolute",
                color: "red",
                border: "1px solid black",
                "background-color": "white",
                padding: "5px",
                width: 170,
                height: 285,
                "z-index": 99
            }).draggable({
                addClasses: !1,
                zIndex: 100,
                revert: !1
            }).appendTo("body");
            t.append($("<div>X</div>").attr("id", "devCloseButton").css({
                position: "absolute",
                top: 5,
                left: t.width() - 5
            }).click(function() {
                $("#devTools").remove()
            }).hover(function() {
                $(this).css("cursor", "pointer")
            })), t.append($("<div/>").attr("id", "devCurrentFile").css({
                position: "absolute",
                top: 20,
                left: 5
            })), t.append($("<div/>").attr("id", "devCurrentSlide").css({
                position: "absolute",
                top: 35,
                left: 5
            }).appendTo(t)), t.append($("<div/>").attr("id", "devBack").addClass("dtButton").css({
                position: "absolute",
                top: 55,
                left: 5,
                width: 52,
                height: 17
            }).html("Back")), t.append($("<div/>").attr("id", "devNext").addClass("dtButton").css({
                position: "absolute",
                top: 55,
                left: 70,
                width: 52,
                height: 17
            }).html("Next").appendTo(t)), t.append($("<div/>").attr("id", "devRefresh").addClass("dtButton").css({
                position: "absolute",
                top: 55,
                left: 135,
                width: 32,
                height: 17
            }).html("↻").on("click", function() {
                H("jump(" + Bt["*current_slide*"] + ")")
            })), t.append($("<input/>").attr("id", "devJumpToBox").css({
                position: "absolute",
                top: 85,
                left: 5,
                width: 119
            }).val("[Slide]").on("click", function() {
                "[Slide]" == $(this).val() && $(this).val("")
            }).on("blur", function() {
                "" == $(this).val() && $(this).val("[Slide]")
            })), t.append($("<div/>").attr("id", "devJumpToBtn").addClass("dtButton").css({
                position: "absolute",
                top: 85,
                left: 135,
                width: 32,
                height: 17
            }).html("Go").on("click", function() {
                "[Slide]" != $("#devJumpToBox").val() && "" != $("#devJumpToBox").val() && H("jump(" + $("#devJumpToBox").val() + ")")
            })), t.append($("<textarea/>").attr("id", "devActionsBox").attr("rows", "5").css({
                position: "absolute",
                top: 129,
                left: 5,
                width: 164,
                resize: "none"
            }).val("[Actions]").on("click", function() {
                "[Actions]" == $(this).val() && $(this).val("")
            }).on("blur", function() {
                "" == $(this).val() && $(this).val("[Actions]")
            }).on("keydown", function(t) {
                13 == t.keyCode && t.preventDefault()
            })), t.append($("<div/>").attr("id", "devActionsBtn").addClass("dtButton").css({
                position: "absolute",
                top: 220,
                left: 5,
                width: 162,
                height: 17
            }).html("Run Actions").on("click", function() {
                "[Actions]" != $("#devActionsBox").val() && "" != $("#devActionsBox").val() && H($("#devActionsBox").val())
            })), t.append($("<div/>").attr("id", "devVariables").addClass("dtButton").css({
                position: "absolute",
                top: 265,
                left: 5,
                width: 162,
                height: 17
            }).html("Log Variables").on("click", function() {
                console.group("Variables");
                var t = !1;
                for (var a in Bt) "*" != a.substring(0, 1) && "" != a && (yt(a + " - " + Bt[a]), t = !0);
                t === !1 && yt("No Variables"), console.groupEnd(), console.group("Arrays");
                var e = !1;
                for (var r in jt) yt(r + " - " + jt[r]), e = !0;
                e === !1 && yt("No Arrays"), console.groupEnd()
            }))
        }
    }

    function $t() {
        Pt && ($("#devCurrentFile").html("File: " + Ct.data("file") + ".xml"), $("#devCurrentSlide").html("Slide: " + Bt["*current_slide*"] + " - " + Bt["*current_slide_name*"]), 1 == Bt["*current_slide*"] ? $("#devBack").off("click") : $("#devBack").off("click").on("click", function() {
            H("previous_slide")
        }), Bt["*current_slide*"] == Bt["*number_of_slides*"] ? $("#devNext").off("click") : $("#devNext").off("click").on("click", function() {
            H("next_slide")
        }))
    }

    function kt(t) {
        var a = [];
        a[0] = "Unknown error code",
        a[1] = "Failed to load data.xml",
        a[2] = "Incompatible xml version",
        a[3] = "Failed to load xml file",
        a[4] = "Action parameters syntax error",
        a[5] = "Action not recognized",
        a[6] = "Action element not found",
        a[7] = "Array not initialized at index", (null == t || !pt(t) || t > a.length) && (t = 0), Pt || Ot || alert("This interaction has encountered an error. Please try refreshing this page and starting the interaction again. \n\nIf this occurs again please report this issue. (" + t + ")"), (Pt || Ot) && alert("This interaction has encountered an error: " + a[t])
    }

    function Mt() {
        return kt(0), Ot || Pt ? !1 : !0
    }
    var Ct, Ot = !1,
        Pt = !1,
        Dt = new Array,
        Lt = {},
        Ft = {},
        Et = {},
        St = new Array,
        It = 0,
        At = 60,
        Tt = 0,
        qt = !1,
        Ut = "3.1.0",
        Bt = {},
        jt = {},
        zt = {};
    $(document).ready(function() {
        window.onerror = function(t, a, e) {
            return Mt()
        };
        try {
            ut("engine/math.js"), ut("engine/jquery-ui/jquery-ui.min.js"), ut("engine/rollerblade/rollerblade_custom.js"), ct("engine/engine.css"), ct("engine/standard.css"), ct("engine/jquery-ui/jquery-ui.min.css"), ct("interaction.css"), ut("file" == window.location.href.substring(0, 4) ? "http://localhost/_common/js/scormHooks.js" : "https://idesk.corp.apple.com/training/ce/_common/js/scormHooks.js"), Ct = $("#interaction"), xt(), $(document.body).append('<div id="loadingDiv"><img id ="loadingImage" src="engine/loading_image.gif"/><p id="loadingText">Loading...</p></div>'), setTimeout(t, 1e3);
            var a;
            $(window).resize(function() {
                clearTimeout(a), a = setTimeout(function() {
                    for (var t = 0; t < St.length; t++) {
                        var a = $("." + St[t]),
                            e = a.data("relativeContainment")[0] + a.parent().offset().left,
                            r = a.data("relativeContainment")[1] + a.parent().offset().top,
                            n = a.data("relativeContainment")[2] + a.parent().offset().left,
                            o = a.data("relativeContainment")[3] + a.parent().offset().top;
                        a.draggable({
                            containment: [e, r, n, o]
                        })
                    }
                }, 500)
            })
        } catch (e) {
            kt(0), yt(e.message)
        }
    })
}();
