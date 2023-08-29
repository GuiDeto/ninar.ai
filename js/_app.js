! function () {
    var e = "WxKQtS",
        n = window.klaviyoModulesObject;
    if (n) {
        var a = n,
            o = a.companyId,
            r = a.serverSideRendered;
        if (o != e || !r) return void console.warn("Already loaded for account ".concat(o, ". Skipping account ").concat(e, "."))
    }
    window._learnq = window._learnq || [], window.__klKey = window.__klKey || e, n || (window._learnq.push(["account", e]), n = {
        companyId: e,
        loadTime: new Date,
        loadedModules: {},
        loadedCss: {},
        serverSideRendered: !0,
        assetSource: ""
    }, Object.defineProperty(window, "klaviyoModulesObject", {
        value: n,
        enumerable: !1
    }));
    var t = {},
        s = document,
        d = s.head;

    function c(e) {
        if (!t[e]) {
            var n = s.createElement("script");
            n.type = "text/javascript", n.async = !0, n.src = e, n.crossOrigin = "anonymous", d.appendChild(n), t[e] = !0
        }
    }
    var i, l, u, p = JSON.parse("noModule" in s.createElement("script") || function () {
        try {
            return new Function('import("")'), !0
        } catch (e) {
            return !1
        }
    }() ? "{}" : ''),
        w = n,
        v = w.loadedCss,
        y = w.loadedModules;
    for (i in p)
        if (p.hasOwnProperty(i)) {
            var f = p[i];
            f.js.forEach((function (e) {
                y[e] || (c(e), y[e] = (new Date).toISOString())
            }));
            var m = f.css;
            m && !v[m] && (l = m, u = void 0, (u = s.createElement("link")).rel = "stylesheet", u.href = l, d.appendChild(u), v[m] = (new Date).toISOString())
        }
}();

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('#grid').addEventListener('click', () => {
//         window.open('https://detonix.com.br/sites/ninar.ai_v4/', 'ninar.ai')
//     })
// });

