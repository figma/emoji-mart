function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $37bf4dbb901cf968$var$n, $37bf4dbb901cf968$export$41c562ebe57d11e2, $37bf4dbb901cf968$var$u, $37bf4dbb901cf968$export$a8257692ac88316c, $37bf4dbb901cf968$var$t, $37bf4dbb901cf968$var$r, $37bf4dbb901cf968$var$o, $37bf4dbb901cf968$var$f, $37bf4dbb901cf968$var$e = {
}, $37bf4dbb901cf968$var$c = [], $37bf4dbb901cf968$var$s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function $37bf4dbb901cf968$var$a(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    for(var u in $37bf4dbb901cf968$export$41c562ebe57d11e2)n[u] = $37bf4dbb901cf968$export$41c562ebe57d11e2[u];
    return n;
}
function $37bf4dbb901cf968$var$h(n) {
    var $37bf4dbb901cf968$export$41c562ebe57d11e2 = n.parentNode;
    $37bf4dbb901cf968$export$41c562ebe57d11e2 && $37bf4dbb901cf968$export$41c562ebe57d11e2.removeChild(n);
}
function $37bf4dbb901cf968$export$c8a8987d4410bf2d($37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c) {
    var t, r, o, f = {
    };
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? $37bf4dbb901cf968$var$n.call(arguments, 2) : $37bf4dbb901cf968$export$a8257692ac88316c), "function" == typeof $37bf4dbb901cf968$export$41c562ebe57d11e2 && null != $37bf4dbb901cf968$export$41c562ebe57d11e2.defaultProps) for(o in $37bf4dbb901cf968$export$41c562ebe57d11e2.defaultProps)void 0 === f[o] && (f[o] = $37bf4dbb901cf968$export$41c562ebe57d11e2.defaultProps[o]);
    return $37bf4dbb901cf968$var$y($37bf4dbb901cf968$export$41c562ebe57d11e2, f, t, r, null);
}
function $37bf4dbb901cf968$var$y(n, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o) {
    var f = {
        type: n,
        props: $37bf4dbb901cf968$export$a8257692ac88316c,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++$37bf4dbb901cf968$var$u : o
    };
    return null == o && null != $37bf4dbb901cf968$export$41c562ebe57d11e2.vnode && $37bf4dbb901cf968$export$41c562ebe57d11e2.vnode(f), f;
}
function $37bf4dbb901cf968$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $37bf4dbb901cf968$export$ffb0004e005737fa(n) {
    return n.children;
}
function $37bf4dbb901cf968$export$16fa2f45be04daa8(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    this.props = n, this.context = $37bf4dbb901cf968$export$41c562ebe57d11e2;
}
function $37bf4dbb901cf968$var$k(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    if (null == $37bf4dbb901cf968$export$41c562ebe57d11e2) return n.__ ? $37bf4dbb901cf968$var$k(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; $37bf4dbb901cf968$export$41c562ebe57d11e2 < n.__k.length; $37bf4dbb901cf968$export$41c562ebe57d11e2++)if (null != (u = n.__k[$37bf4dbb901cf968$export$41c562ebe57d11e2]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $37bf4dbb901cf968$var$k(n) : null;
}
function $37bf4dbb901cf968$var$b(n) {
    var $37bf4dbb901cf968$export$41c562ebe57d11e2, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, $37bf4dbb901cf968$export$41c562ebe57d11e2 = 0; $37bf4dbb901cf968$export$41c562ebe57d11e2 < n.__k.length; $37bf4dbb901cf968$export$41c562ebe57d11e2++)if (null != (u = n.__k[$37bf4dbb901cf968$export$41c562ebe57d11e2]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $37bf4dbb901cf968$var$b(n);
    }
}
function $37bf4dbb901cf968$var$m(n) {
    (!n.__d && (n.__d = !0) && $37bf4dbb901cf968$var$t.push(n) && !$37bf4dbb901cf968$var$g.__r++ || $37bf4dbb901cf968$var$o !== $37bf4dbb901cf968$export$41c562ebe57d11e2.debounceRendering) && (($37bf4dbb901cf968$var$o = $37bf4dbb901cf968$export$41c562ebe57d11e2.debounceRendering) || $37bf4dbb901cf968$var$r)($37bf4dbb901cf968$var$g);
}
function $37bf4dbb901cf968$var$g() {
    for(var n1; $37bf4dbb901cf968$var$g.__r = $37bf4dbb901cf968$var$t.length;)n1 = $37bf4dbb901cf968$var$t.sort(function(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
        return n.__v.__b - $37bf4dbb901cf968$export$41c562ebe57d11e2.__v.__b;
    }), $37bf4dbb901cf968$var$t = [], n1.some(function(n) {
        var $37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o;
        n.__d && (r = (t = ($37bf4dbb901cf968$export$41c562ebe57d11e2 = n).__v).__e, (o = $37bf4dbb901cf968$export$41c562ebe57d11e2.__P) && (u = [], ($37bf4dbb901cf968$export$a8257692ac88316c = $37bf4dbb901cf968$var$a({
        }, t)).__v = t.__v + 1, $37bf4dbb901cf968$var$j(o, t, $37bf4dbb901cf968$export$a8257692ac88316c, $37bf4dbb901cf968$export$41c562ebe57d11e2.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [
            r
        ] : null, u, null == r ? $37bf4dbb901cf968$var$k(t) : r, t.__h), $37bf4dbb901cf968$var$z(u, t), t.__e != r && $37bf4dbb901cf968$var$b(t)));
    });
}
function $37bf4dbb901cf968$var$w(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o, f, s, a) {
    var h, $37bf4dbb901cf968$export$c8a8987d4410bf2d, $37bf4dbb901cf968$export$7d1e3a5e95ceca43, $37bf4dbb901cf968$export$16fa2f45be04daa8, b, m, g, w = $37bf4dbb901cf968$export$a8257692ac88316c && $37bf4dbb901cf968$export$a8257692ac88316c.__k || $37bf4dbb901cf968$var$c, $37bf4dbb901cf968$export$47e4c5b300681277 = w.length;
    for(u.__k = [], h = 0; h < $37bf4dbb901cf968$export$41c562ebe57d11e2.length; h++)if (null != ($37bf4dbb901cf968$export$16fa2f45be04daa8 = u.__k[h] = null == ($37bf4dbb901cf968$export$16fa2f45be04daa8 = $37bf4dbb901cf968$export$41c562ebe57d11e2[h]) || "boolean" == typeof $37bf4dbb901cf968$export$16fa2f45be04daa8 ? null : "string" == typeof $37bf4dbb901cf968$export$16fa2f45be04daa8 || "number" == typeof $37bf4dbb901cf968$export$16fa2f45be04daa8 || "bigint" == typeof $37bf4dbb901cf968$export$16fa2f45be04daa8 ? $37bf4dbb901cf968$var$y(null, $37bf4dbb901cf968$export$16fa2f45be04daa8, null, null, $37bf4dbb901cf968$export$16fa2f45be04daa8) : Array.isArray($37bf4dbb901cf968$export$16fa2f45be04daa8) ? $37bf4dbb901cf968$var$y($37bf4dbb901cf968$export$ffb0004e005737fa, {
        children: $37bf4dbb901cf968$export$16fa2f45be04daa8
    }, null, null, null) : $37bf4dbb901cf968$export$16fa2f45be04daa8.__b > 0 ? $37bf4dbb901cf968$var$y($37bf4dbb901cf968$export$16fa2f45be04daa8.type, $37bf4dbb901cf968$export$16fa2f45be04daa8.props, $37bf4dbb901cf968$export$16fa2f45be04daa8.key, null, $37bf4dbb901cf968$export$16fa2f45be04daa8.__v) : $37bf4dbb901cf968$export$16fa2f45be04daa8)) {
        if ($37bf4dbb901cf968$export$16fa2f45be04daa8.__ = u, $37bf4dbb901cf968$export$16fa2f45be04daa8.__b = u.__b + 1, null === ($37bf4dbb901cf968$export$7d1e3a5e95ceca43 = w[h]) || $37bf4dbb901cf968$export$7d1e3a5e95ceca43 && $37bf4dbb901cf968$export$16fa2f45be04daa8.key == $37bf4dbb901cf968$export$7d1e3a5e95ceca43.key && $37bf4dbb901cf968$export$16fa2f45be04daa8.type === $37bf4dbb901cf968$export$7d1e3a5e95ceca43.type) w[h] = void 0;
        else for($37bf4dbb901cf968$export$c8a8987d4410bf2d = 0; $37bf4dbb901cf968$export$c8a8987d4410bf2d < $37bf4dbb901cf968$export$47e4c5b300681277; $37bf4dbb901cf968$export$c8a8987d4410bf2d++){
            if (($37bf4dbb901cf968$export$7d1e3a5e95ceca43 = w[$37bf4dbb901cf968$export$c8a8987d4410bf2d]) && $37bf4dbb901cf968$export$16fa2f45be04daa8.key == $37bf4dbb901cf968$export$7d1e3a5e95ceca43.key && $37bf4dbb901cf968$export$16fa2f45be04daa8.type === $37bf4dbb901cf968$export$7d1e3a5e95ceca43.type) {
                w[$37bf4dbb901cf968$export$c8a8987d4410bf2d] = void 0;
                break;
            }
            $37bf4dbb901cf968$export$7d1e3a5e95ceca43 = null;
        }
        $37bf4dbb901cf968$var$j(n, $37bf4dbb901cf968$export$16fa2f45be04daa8, $37bf4dbb901cf968$export$7d1e3a5e95ceca43 = $37bf4dbb901cf968$export$7d1e3a5e95ceca43 || $37bf4dbb901cf968$var$e, t, r, o, f, s, a), b = $37bf4dbb901cf968$export$16fa2f45be04daa8.__e, ($37bf4dbb901cf968$export$c8a8987d4410bf2d = $37bf4dbb901cf968$export$16fa2f45be04daa8.ref) && $37bf4dbb901cf968$export$7d1e3a5e95ceca43.ref != $37bf4dbb901cf968$export$c8a8987d4410bf2d && (g || (g = []), $37bf4dbb901cf968$export$7d1e3a5e95ceca43.ref && g.push($37bf4dbb901cf968$export$7d1e3a5e95ceca43.ref, null, $37bf4dbb901cf968$export$16fa2f45be04daa8), g.push($37bf4dbb901cf968$export$c8a8987d4410bf2d, $37bf4dbb901cf968$export$16fa2f45be04daa8.__c || b, $37bf4dbb901cf968$export$16fa2f45be04daa8)), null != b ? (null == m && (m = b), "function" == typeof $37bf4dbb901cf968$export$16fa2f45be04daa8.type && $37bf4dbb901cf968$export$16fa2f45be04daa8.__k === $37bf4dbb901cf968$export$7d1e3a5e95ceca43.__k ? $37bf4dbb901cf968$export$16fa2f45be04daa8.__d = s = $37bf4dbb901cf968$var$x($37bf4dbb901cf968$export$16fa2f45be04daa8, s, n) : s = $37bf4dbb901cf968$var$P(n, $37bf4dbb901cf968$export$16fa2f45be04daa8, $37bf4dbb901cf968$export$7d1e3a5e95ceca43, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && $37bf4dbb901cf968$export$7d1e3a5e95ceca43.__e == s && s.parentNode != n && (s = $37bf4dbb901cf968$var$k($37bf4dbb901cf968$export$7d1e3a5e95ceca43));
    }
    for(u.__e = m, h = $37bf4dbb901cf968$export$47e4c5b300681277; h--;)null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = $37bf4dbb901cf968$var$k($37bf4dbb901cf968$export$a8257692ac88316c, h + 1)), $37bf4dbb901cf968$var$N(w[h], w[h]));
    if (g) for(h = 0; h < g.length; h++)$37bf4dbb901cf968$var$M(g[h], g[++h], g[++h]);
}
function $37bf4dbb901cf968$var$x(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u) {
    for(var $37bf4dbb901cf968$export$a8257692ac88316c, t = n.__k, r = 0; t && r < t.length; r++)($37bf4dbb901cf968$export$a8257692ac88316c = t[r]) && ($37bf4dbb901cf968$export$a8257692ac88316c.__ = n, $37bf4dbb901cf968$export$41c562ebe57d11e2 = "function" == typeof $37bf4dbb901cf968$export$a8257692ac88316c.type ? $37bf4dbb901cf968$var$x($37bf4dbb901cf968$export$a8257692ac88316c, $37bf4dbb901cf968$export$41c562ebe57d11e2, u) : $37bf4dbb901cf968$var$P(u, $37bf4dbb901cf968$export$a8257692ac88316c, $37bf4dbb901cf968$export$a8257692ac88316c, t, $37bf4dbb901cf968$export$a8257692ac88316c.__e, $37bf4dbb901cf968$export$41c562ebe57d11e2));
    return $37bf4dbb901cf968$export$41c562ebe57d11e2;
}
function $37bf4dbb901cf968$export$47e4c5b300681277(n2, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    return $37bf4dbb901cf968$export$41c562ebe57d11e2 = $37bf4dbb901cf968$export$41c562ebe57d11e2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n) {
        $37bf4dbb901cf968$export$47e4c5b300681277(n, $37bf4dbb901cf968$export$41c562ebe57d11e2);
    }) : $37bf4dbb901cf968$export$41c562ebe57d11e2.push(n2)), $37bf4dbb901cf968$export$41c562ebe57d11e2;
}
function $37bf4dbb901cf968$var$P(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r) {
    var o, f, e;
    if (void 0 !== $37bf4dbb901cf968$export$41c562ebe57d11e2.__d) o = $37bf4dbb901cf968$export$41c562ebe57d11e2.__d, $37bf4dbb901cf968$export$41c562ebe57d11e2.__d = void 0;
    else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;
    else {
        for(f = r, e = 0; (f = f.nextSibling) && e < $37bf4dbb901cf968$export$a8257692ac88316c.length; e += 2)if (f == t) break n;
        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}
function $37bf4dbb901cf968$var$C(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c, t) {
    var r;
    for(r in u)"children" === r || "key" === r || r in $37bf4dbb901cf968$export$41c562ebe57d11e2 || $37bf4dbb901cf968$var$H(n, r, null, u[r], $37bf4dbb901cf968$export$a8257692ac88316c);
    for(r in $37bf4dbb901cf968$export$41c562ebe57d11e2)t && "function" != typeof $37bf4dbb901cf968$export$41c562ebe57d11e2[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === $37bf4dbb901cf968$export$41c562ebe57d11e2[r] || $37bf4dbb901cf968$var$H(n, r, $37bf4dbb901cf968$export$41c562ebe57d11e2[r], u[r], $37bf4dbb901cf968$export$a8257692ac88316c);
}
function $37bf4dbb901cf968$var$$(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u) {
    "-" === $37bf4dbb901cf968$export$41c562ebe57d11e2[0] ? n.setProperty($37bf4dbb901cf968$export$41c562ebe57d11e2, u) : n[$37bf4dbb901cf968$export$41c562ebe57d11e2] = null == u ? "" : "number" != typeof u || $37bf4dbb901cf968$var$s.test($37bf4dbb901cf968$export$41c562ebe57d11e2) ? u : u + "px";
}
function $37bf4dbb901cf968$var$H(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c, t) {
    var r;
    n: if ("style" === $37bf4dbb901cf968$export$41c562ebe57d11e2) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof $37bf4dbb901cf968$export$a8257692ac88316c && (n.style.cssText = $37bf4dbb901cf968$export$a8257692ac88316c = ""), $37bf4dbb901cf968$export$a8257692ac88316c) for($37bf4dbb901cf968$export$41c562ebe57d11e2 in $37bf4dbb901cf968$export$a8257692ac88316c)u && $37bf4dbb901cf968$export$41c562ebe57d11e2 in u || $37bf4dbb901cf968$var$$(n.style, $37bf4dbb901cf968$export$41c562ebe57d11e2, "");
            if (u) for($37bf4dbb901cf968$export$41c562ebe57d11e2 in u)$37bf4dbb901cf968$export$a8257692ac88316c && u[$37bf4dbb901cf968$export$41c562ebe57d11e2] === $37bf4dbb901cf968$export$a8257692ac88316c[$37bf4dbb901cf968$export$41c562ebe57d11e2] || $37bf4dbb901cf968$var$$(n.style, $37bf4dbb901cf968$export$41c562ebe57d11e2, u[$37bf4dbb901cf968$export$41c562ebe57d11e2]);
        }
    } else if ("o" === $37bf4dbb901cf968$export$41c562ebe57d11e2[0] && "n" === $37bf4dbb901cf968$export$41c562ebe57d11e2[1]) r = $37bf4dbb901cf968$export$41c562ebe57d11e2 !== ($37bf4dbb901cf968$export$41c562ebe57d11e2 = $37bf4dbb901cf968$export$41c562ebe57d11e2.replace(/Capture$/, "")), $37bf4dbb901cf968$export$41c562ebe57d11e2 = $37bf4dbb901cf968$export$41c562ebe57d11e2.toLowerCase() in n ? $37bf4dbb901cf968$export$41c562ebe57d11e2.toLowerCase().slice(2) : $37bf4dbb901cf968$export$41c562ebe57d11e2.slice(2), n.l || (n.l = {
    }), n.l[$37bf4dbb901cf968$export$41c562ebe57d11e2 + r] = u, u ? $37bf4dbb901cf968$export$a8257692ac88316c || n.addEventListener($37bf4dbb901cf968$export$41c562ebe57d11e2, r ? $37bf4dbb901cf968$var$T : $37bf4dbb901cf968$var$I, r) : n.removeEventListener($37bf4dbb901cf968$export$41c562ebe57d11e2, r ? $37bf4dbb901cf968$var$T : $37bf4dbb901cf968$var$I, r);
    else if ("dangerouslySetInnerHTML" !== $37bf4dbb901cf968$export$41c562ebe57d11e2) {
        if (t) $37bf4dbb901cf968$export$41c562ebe57d11e2 = $37bf4dbb901cf968$export$41c562ebe57d11e2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== $37bf4dbb901cf968$export$41c562ebe57d11e2 && "list" !== $37bf4dbb901cf968$export$41c562ebe57d11e2 && "form" !== $37bf4dbb901cf968$export$41c562ebe57d11e2 && "tabIndex" !== $37bf4dbb901cf968$export$41c562ebe57d11e2 && "download" !== $37bf4dbb901cf968$export$41c562ebe57d11e2 && $37bf4dbb901cf968$export$41c562ebe57d11e2 in n) try {
            n[$37bf4dbb901cf968$export$41c562ebe57d11e2] = null == u ? "" : u;
            break n;
        } catch (n3) {
        }
        "function" == typeof u || (null != u && (!1 !== u || "a" === $37bf4dbb901cf968$export$41c562ebe57d11e2[0] && "r" === $37bf4dbb901cf968$export$41c562ebe57d11e2[1]) ? n.setAttribute($37bf4dbb901cf968$export$41c562ebe57d11e2, u) : n.removeAttribute($37bf4dbb901cf968$export$41c562ebe57d11e2));
    }
}
function $37bf4dbb901cf968$var$I(n) {
    this.l[n.type + !1]($37bf4dbb901cf968$export$41c562ebe57d11e2.event ? $37bf4dbb901cf968$export$41c562ebe57d11e2.event(n) : n);
}
function $37bf4dbb901cf968$var$T(n) {
    this.l[n.type + !0]($37bf4dbb901cf968$export$41c562ebe57d11e2.event ? $37bf4dbb901cf968$export$41c562ebe57d11e2.event(n) : n);
}
function $37bf4dbb901cf968$var$j(n4, u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o, f, e, c) {
    var s, h, $37bf4dbb901cf968$export$c8a8987d4410bf2d, y, $37bf4dbb901cf968$export$7d1e3a5e95ceca43, k, b, m, g, x, $37bf4dbb901cf968$export$47e4c5b300681277, P = u.type;
    if (void 0 !== u.constructor) return null;
    null != $37bf4dbb901cf968$export$a8257692ac88316c.__h && (c = $37bf4dbb901cf968$export$a8257692ac88316c.__h, e = u.__e = $37bf4dbb901cf968$export$a8257692ac88316c.__e, u.__h = null, o = [
        e
    ]), (s = $37bf4dbb901cf968$export$41c562ebe57d11e2.__b) && s(u);
    try {
        n: if ("function" == typeof P) {
            if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, $37bf4dbb901cf968$export$a8257692ac88316c.__c ? b = (h = u.__c = $37bf4dbb901cf968$export$a8257692ac88316c.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new $37bf4dbb901cf968$export$16fa2f45be04daa8(m, x), h.constructor = P, h.render = $37bf4dbb901cf968$var$O), g && g.sub(h), h.props = m, h.state || (h.state = {
            }), h.context = x, h.__n = t, $37bf4dbb901cf968$export$c8a8987d4410bf2d = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $37bf4dbb901cf968$var$a({
            }, h.__s)), $37bf4dbb901cf968$var$a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, $37bf4dbb901cf968$export$7d1e3a5e95ceca43 = h.state, $37bf4dbb901cf968$export$c8a8987d4410bf2d) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === $37bf4dbb901cf968$export$a8257692ac88316c.__v) {
                    h.props = m, h.state = h.__s, u.__v !== $37bf4dbb901cf968$export$a8257692ac88316c.__v && (h.__d = !1), h.__v = u, u.__e = $37bf4dbb901cf968$export$a8257692ac88316c.__e, u.__k = $37bf4dbb901cf968$export$a8257692ac88316c.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), h.__h.length && f.push(h);
                    break n;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(y, $37bf4dbb901cf968$export$7d1e3a5e95ceca43, k);
                });
            }
            h.context = x, h.props = m, h.state = h.__s, (s = $37bf4dbb901cf968$export$41c562ebe57d11e2.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n4, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = $37bf4dbb901cf968$var$a($37bf4dbb901cf968$var$a({
            }, t), h.getChildContext())), $37bf4dbb901cf968$export$c8a8987d4410bf2d || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, $37bf4dbb901cf968$export$7d1e3a5e95ceca43)), $37bf4dbb901cf968$export$47e4c5b300681277 = null != s && s.type === $37bf4dbb901cf968$export$ffb0004e005737fa && null == s.key ? s.props.children : s, $37bf4dbb901cf968$var$w(n4, Array.isArray($37bf4dbb901cf968$export$47e4c5b300681277) ? $37bf4dbb901cf968$export$47e4c5b300681277 : [
                $37bf4dbb901cf968$export$47e4c5b300681277
            ], u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == o && u.__v === $37bf4dbb901cf968$export$a8257692ac88316c.__v ? (u.__k = $37bf4dbb901cf968$export$a8257692ac88316c.__k, u.__e = $37bf4dbb901cf968$export$a8257692ac88316c.__e) : u.__e = $37bf4dbb901cf968$var$L($37bf4dbb901cf968$export$a8257692ac88316c.__e, u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o, f, c);
        (s = $37bf4dbb901cf968$export$41c562ebe57d11e2.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(n, u, $37bf4dbb901cf968$export$a8257692ac88316c);
    }
}
function $37bf4dbb901cf968$var$z(n5, u1) {
    $37bf4dbb901cf968$export$41c562ebe57d11e2.__c && $37bf4dbb901cf968$export$41c562ebe57d11e2.__c(u1, n5), n5.some(function(u) {
        try {
            n5 = u.__h, u.__h = [], n5.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $37bf4dbb901cf968$var$L($37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r, o, f, c) {
    var s, a, $37bf4dbb901cf968$export$c8a8987d4410bf2d, y = $37bf4dbb901cf968$export$a8257692ac88316c.props, $37bf4dbb901cf968$export$7d1e3a5e95ceca43 = u.props, $37bf4dbb901cf968$export$ffb0004e005737fa = u.type, $37bf4dbb901cf968$export$16fa2f45be04daa8 = 0;
    if ("svg" === $37bf4dbb901cf968$export$ffb0004e005737fa && (r = !0), null != o) {
        for(; $37bf4dbb901cf968$export$16fa2f45be04daa8 < o.length; $37bf4dbb901cf968$export$16fa2f45be04daa8++)if ((s = o[$37bf4dbb901cf968$export$16fa2f45be04daa8]) && "setAttribute" in s == !!$37bf4dbb901cf968$export$ffb0004e005737fa && ($37bf4dbb901cf968$export$ffb0004e005737fa ? s.localName === $37bf4dbb901cf968$export$ffb0004e005737fa : 3 === s.nodeType)) {
            $37bf4dbb901cf968$export$41c562ebe57d11e2 = s, o[$37bf4dbb901cf968$export$16fa2f45be04daa8] = null;
            break;
        }
    }
    if (null == $37bf4dbb901cf968$export$41c562ebe57d11e2) {
        if (null === $37bf4dbb901cf968$export$ffb0004e005737fa) return document.createTextNode($37bf4dbb901cf968$export$7d1e3a5e95ceca43);
        $37bf4dbb901cf968$export$41c562ebe57d11e2 = r ? document.createElementNS("http://www.w3.org/2000/svg", $37bf4dbb901cf968$export$ffb0004e005737fa) : document.createElement($37bf4dbb901cf968$export$ffb0004e005737fa, $37bf4dbb901cf968$export$7d1e3a5e95ceca43.is && $37bf4dbb901cf968$export$7d1e3a5e95ceca43), o = null, c = !1;
    }
    if (null === $37bf4dbb901cf968$export$ffb0004e005737fa) y === $37bf4dbb901cf968$export$7d1e3a5e95ceca43 || c && $37bf4dbb901cf968$export$41c562ebe57d11e2.data === $37bf4dbb901cf968$export$7d1e3a5e95ceca43 || ($37bf4dbb901cf968$export$41c562ebe57d11e2.data = $37bf4dbb901cf968$export$7d1e3a5e95ceca43);
    else {
        if (o = o && $37bf4dbb901cf968$var$n.call($37bf4dbb901cf968$export$41c562ebe57d11e2.childNodes), a = (y = $37bf4dbb901cf968$export$a8257692ac88316c.props || $37bf4dbb901cf968$var$e).dangerouslySetInnerHTML, $37bf4dbb901cf968$export$c8a8987d4410bf2d = $37bf4dbb901cf968$export$7d1e3a5e95ceca43.dangerouslySetInnerHTML, !c) {
            if (null != o) for(y = {
            }, $37bf4dbb901cf968$export$16fa2f45be04daa8 = 0; $37bf4dbb901cf968$export$16fa2f45be04daa8 < $37bf4dbb901cf968$export$41c562ebe57d11e2.attributes.length; $37bf4dbb901cf968$export$16fa2f45be04daa8++)y[$37bf4dbb901cf968$export$41c562ebe57d11e2.attributes[$37bf4dbb901cf968$export$16fa2f45be04daa8].name] = $37bf4dbb901cf968$export$41c562ebe57d11e2.attributes[$37bf4dbb901cf968$export$16fa2f45be04daa8].value;
            ($37bf4dbb901cf968$export$c8a8987d4410bf2d || a) && ($37bf4dbb901cf968$export$c8a8987d4410bf2d && (a && $37bf4dbb901cf968$export$c8a8987d4410bf2d.__html == a.__html || $37bf4dbb901cf968$export$c8a8987d4410bf2d.__html === $37bf4dbb901cf968$export$41c562ebe57d11e2.innerHTML) || ($37bf4dbb901cf968$export$41c562ebe57d11e2.innerHTML = $37bf4dbb901cf968$export$c8a8987d4410bf2d && $37bf4dbb901cf968$export$c8a8987d4410bf2d.__html || ""));
        }
        if ($37bf4dbb901cf968$var$C($37bf4dbb901cf968$export$41c562ebe57d11e2, $37bf4dbb901cf968$export$7d1e3a5e95ceca43, y, r, c), $37bf4dbb901cf968$export$c8a8987d4410bf2d) u.__k = [];
        else if ($37bf4dbb901cf968$export$16fa2f45be04daa8 = u.props.children, $37bf4dbb901cf968$var$w($37bf4dbb901cf968$export$41c562ebe57d11e2, Array.isArray($37bf4dbb901cf968$export$16fa2f45be04daa8) ? $37bf4dbb901cf968$export$16fa2f45be04daa8 : [
            $37bf4dbb901cf968$export$16fa2f45be04daa8
        ], u, $37bf4dbb901cf968$export$a8257692ac88316c, t, r && "foreignObject" !== $37bf4dbb901cf968$export$ffb0004e005737fa, o, f, o ? o[0] : $37bf4dbb901cf968$export$a8257692ac88316c.__k && $37bf4dbb901cf968$var$k($37bf4dbb901cf968$export$a8257692ac88316c, 0), c), null != o) for($37bf4dbb901cf968$export$16fa2f45be04daa8 = o.length; $37bf4dbb901cf968$export$16fa2f45be04daa8--;)null != o[$37bf4dbb901cf968$export$16fa2f45be04daa8] && $37bf4dbb901cf968$var$h(o[$37bf4dbb901cf968$export$16fa2f45be04daa8]);
        c || ("value" in $37bf4dbb901cf968$export$7d1e3a5e95ceca43 && void 0 !== ($37bf4dbb901cf968$export$16fa2f45be04daa8 = $37bf4dbb901cf968$export$7d1e3a5e95ceca43.value) && ($37bf4dbb901cf968$export$16fa2f45be04daa8 !== y.value || $37bf4dbb901cf968$export$16fa2f45be04daa8 !== $37bf4dbb901cf968$export$41c562ebe57d11e2.value || "progress" === $37bf4dbb901cf968$export$ffb0004e005737fa && !$37bf4dbb901cf968$export$16fa2f45be04daa8) && $37bf4dbb901cf968$var$H($37bf4dbb901cf968$export$41c562ebe57d11e2, "value", $37bf4dbb901cf968$export$16fa2f45be04daa8, y.value, !1), "checked" in $37bf4dbb901cf968$export$7d1e3a5e95ceca43 && void 0 !== ($37bf4dbb901cf968$export$16fa2f45be04daa8 = $37bf4dbb901cf968$export$7d1e3a5e95ceca43.checked) && $37bf4dbb901cf968$export$16fa2f45be04daa8 !== $37bf4dbb901cf968$export$41c562ebe57d11e2.checked && $37bf4dbb901cf968$var$H($37bf4dbb901cf968$export$41c562ebe57d11e2, "checked", $37bf4dbb901cf968$export$16fa2f45be04daa8, y.checked, !1));
    }
    return $37bf4dbb901cf968$export$41c562ebe57d11e2;
}
function $37bf4dbb901cf968$var$M(n, u, $37bf4dbb901cf968$export$a8257692ac88316c) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n6) {
        $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(n6, $37bf4dbb901cf968$export$a8257692ac88316c);
    }
}
function $37bf4dbb901cf968$var$N(n, u, $37bf4dbb901cf968$export$a8257692ac88316c) {
    var t, r;
    if ($37bf4dbb901cf968$export$41c562ebe57d11e2.unmount && $37bf4dbb901cf968$export$41c562ebe57d11e2.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || $37bf4dbb901cf968$var$M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(n, u);
        }
        t.base = t.__P = null;
    }
    if (t = n.__k) for(r = 0; r < t.length; r++)t[r] && $37bf4dbb901cf968$var$N(t[r], u, "function" != typeof n.type);
    $37bf4dbb901cf968$export$a8257692ac88316c || null == n.__e || $37bf4dbb901cf968$var$h(n.__e), n.__e = n.__d = void 0;
}
function $37bf4dbb901cf968$var$O(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, u) {
    return this.constructor(n, u);
}
function $37bf4dbb901cf968$export$b3890eb0ae9dca99(u, $37bf4dbb901cf968$export$a8257692ac88316c, t) {
    var r, o, f;
    $37bf4dbb901cf968$export$41c562ebe57d11e2.__ && $37bf4dbb901cf968$export$41c562ebe57d11e2.__(u, $37bf4dbb901cf968$export$a8257692ac88316c), o = (r = "function" == typeof t) ? null : t && t.__k || $37bf4dbb901cf968$export$a8257692ac88316c.__k, f = [], $37bf4dbb901cf968$var$j($37bf4dbb901cf968$export$a8257692ac88316c, u = (!r && t || $37bf4dbb901cf968$export$a8257692ac88316c).__k = $37bf4dbb901cf968$export$c8a8987d4410bf2d($37bf4dbb901cf968$export$ffb0004e005737fa, null, [
        u
    ]), o || $37bf4dbb901cf968$var$e, $37bf4dbb901cf968$var$e, void 0 !== $37bf4dbb901cf968$export$a8257692ac88316c.ownerSVGElement, !r && t ? [
        t
    ] : o ? null : $37bf4dbb901cf968$export$a8257692ac88316c.firstChild ? $37bf4dbb901cf968$var$n.call($37bf4dbb901cf968$export$a8257692ac88316c.childNodes) : null, f, !r && t ? t : o ? o.__e : $37bf4dbb901cf968$export$a8257692ac88316c.firstChild, r), $37bf4dbb901cf968$var$z(f, u);
}
function $37bf4dbb901cf968$export$fa8d919ba61d84db(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    $37bf4dbb901cf968$export$b3890eb0ae9dca99(n, $37bf4dbb901cf968$export$41c562ebe57d11e2, $37bf4dbb901cf968$export$fa8d919ba61d84db);
}
function $37bf4dbb901cf968$export$e530037191fcd5d7($37bf4dbb901cf968$export$41c562ebe57d11e2, u, $37bf4dbb901cf968$export$a8257692ac88316c) {
    var t, r, o, f = $37bf4dbb901cf968$var$a({
    }, $37bf4dbb901cf968$export$41c562ebe57d11e2.props);
    for(o in u)"key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $37bf4dbb901cf968$var$n.call(arguments, 2) : $37bf4dbb901cf968$export$a8257692ac88316c), $37bf4dbb901cf968$var$y($37bf4dbb901cf968$export$41c562ebe57d11e2.type, f, t || $37bf4dbb901cf968$export$41c562ebe57d11e2.key, r || $37bf4dbb901cf968$export$41c562ebe57d11e2.ref, null);
}
function $37bf4dbb901cf968$export$fd42f52fd3ae1109(n7, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    var u2 = {
        __c: $37bf4dbb901cf968$export$41c562ebe57d11e2 = "__cC" + $37bf4dbb901cf968$var$f++,
        __: n7,
        Consumer: function(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
            return n.children($37bf4dbb901cf968$export$41c562ebe57d11e2);
        },
        Provider: function(n8) {
            var u, $37bf4dbb901cf968$export$a8257692ac88316c;
            return this.getChildContext || (u = [], ($37bf4dbb901cf968$export$a8257692ac88316c = {
            })[$37bf4dbb901cf968$export$41c562ebe57d11e2] = this, this.getChildContext = function() {
                return $37bf4dbb901cf968$export$a8257692ac88316c;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some($37bf4dbb901cf968$var$m);
            }, this.sub = function(n) {
                u.push(n);
                var $37bf4dbb901cf968$export$41c562ebe57d11e2 = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), $37bf4dbb901cf968$export$41c562ebe57d11e2 && $37bf4dbb901cf968$export$41c562ebe57d11e2.call(n);
                };
            }), n8.children;
        }
    };
    return u2.Provider.__ = u2.Consumer.contextType = u2;
}
$37bf4dbb901cf968$var$n = $37bf4dbb901cf968$var$c.slice, $37bf4dbb901cf968$export$41c562ebe57d11e2 = {
    __e: function(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
        for(var u, $37bf4dbb901cf968$export$a8257692ac88316c, t; $37bf4dbb901cf968$export$41c562ebe57d11e2 = $37bf4dbb901cf968$export$41c562ebe57d11e2.__;)if ((u = $37bf4dbb901cf968$export$41c562ebe57d11e2.__c) && !u.__) try {
            if (($37bf4dbb901cf968$export$a8257692ac88316c = u.constructor) && null != $37bf4dbb901cf968$export$a8257692ac88316c.getDerivedStateFromError && (u.setState($37bf4dbb901cf968$export$a8257692ac88316c.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
        } catch ($37bf4dbb901cf968$export$41c562ebe57d11e2) {
            n = $37bf4dbb901cf968$export$41c562ebe57d11e2;
        }
        throw n;
    }
}, $37bf4dbb901cf968$var$u = 0, $37bf4dbb901cf968$export$a8257692ac88316c = function(n) {
    return null != n && void 0 === n.constructor;
}, $37bf4dbb901cf968$export$16fa2f45be04daa8.prototype.setState = function(n, $37bf4dbb901cf968$export$41c562ebe57d11e2) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = $37bf4dbb901cf968$var$a({
    }, this.state), "function" == typeof n && (n = n($37bf4dbb901cf968$var$a({
    }, u), this.props)), n && $37bf4dbb901cf968$var$a(u, n), null != n && this.__v && ($37bf4dbb901cf968$export$41c562ebe57d11e2 && this.__h.push($37bf4dbb901cf968$export$41c562ebe57d11e2), $37bf4dbb901cf968$var$m(this));
}, $37bf4dbb901cf968$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $37bf4dbb901cf968$var$m(this));
}, $37bf4dbb901cf968$export$16fa2f45be04daa8.prototype.render = $37bf4dbb901cf968$export$ffb0004e005737fa, $37bf4dbb901cf968$var$t = [], $37bf4dbb901cf968$var$r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $37bf4dbb901cf968$var$g.__r = 0, $37bf4dbb901cf968$var$f = 0;



var $80ee491bbcca91f4$var$o = 0;
function $80ee491bbcca91f4$export$34b9dba7ce09269b(_, $80ee491bbcca91f4$export$34b9dba7ce09269b, n, t, f) {
    var l, s, u = {
    };
    for(s in $80ee491bbcca91f4$export$34b9dba7ce09269b)"ref" == s ? l = $80ee491bbcca91f4$export$34b9dba7ce09269b[s] : u[s] = $80ee491bbcca91f4$export$34b9dba7ce09269b[s];
    var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --$80ee491bbcca91f4$var$o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps)) for(s in l)void 0 === u[s] && (u[s] = l[s]);
    return $37bf4dbb901cf968$export$41c562ebe57d11e2.vnode && $37bf4dbb901cf968$export$41c562ebe57d11e2.vnode(a), a;
}



function $6ada31a5f156f75f$export$9cb4719e2e525b7a(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index)=>val == b[index]
    );
}
async function $6ada31a5f156f75f$export$e772c8ff12451969(frames = 1) {
    for(let _ in [
        ...Array(frames).keys()
    ])await new Promise(requestAnimationFrame);
}


var $8cb849075d80bb41$exports = {};
$8cb849075d80bb41$exports = JSON.parse("{\"search\":\"Search\",\"search_no_results_1\":\"Oh no!\",\"search_no_results_2\":\"That emoji couldn’t be found\",\"pick\":\"Pick an emoji…\",\"add_custom\":\"Add custom emoji\",\"categories\":{\"activity\":\"Activity\",\"custom\":\"Custom\",\"flags\":\"Flags\",\"foods\":\"Food & Drink\",\"frequent\":\"Frequently used\",\"nature\":\"Animals & Nature\",\"objects\":\"Objects\",\"people\":\"Smileys & People\",\"places\":\"Travel & Places\",\"search\":\"Search Results\",\"symbols\":\"Symbols\"},\"skins\":{\"1\":\"Default\",\"2\":\"Light\",\"3\":\"Medium-Light\",\"4\":\"Medium\",\"5\":\"Medium-Dark\",\"6\":\"Dark\",\"choose\":\"Choose default skin tone\"}}");


function $f0491e8c6c78eca1$var$set(key, value) {
    try {
        window.localStorage[`emoji-mart.${key}`] = JSON.stringify(value);
    } catch (error) {
    }
}
function $f0491e8c6c78eca1$var$get(key) {
    try {
        const value = window.localStorage[`emoji-mart.${key}`];
        if (value) return JSON.parse(value);
    } catch (error) {
    }
}
function $f0491e8c6c78eca1$var$getDefaultSkin() {
    return $f0491e8c6c78eca1$var$get('skin');
}
var $f0491e8c6c78eca1$export$2e2bcd8739ae039 = {
    set: $f0491e8c6c78eca1$var$set,
    get: $f0491e8c6c78eca1$var$get,
    getDefaultSkin: $f0491e8c6c78eca1$var$getDefaultSkin
};


const $69ce249528074d56$var$VERSIONS = [
    {
        v: 14,
        emoji: '🫠'
    },
    {
        v: 13.1,
        emoji: '😶‍🌫️'
    },
    {
        v: 13,
        emoji: '🥸'
    },
    {
        v: 12.1,
        emoji: '🧑‍🦰'
    },
    {
        v: 12,
        emoji: '🥱'
    },
    {
        v: 11,
        emoji: '🥰'
    },
    {
        v: 5,
        emoji: '🤩'
    },
    {
        v: 4,
        emoji: '👱‍♀️'
    },
    {
        v: 3,
        emoji: '🤣'
    },
    {
        v: 2,
        emoji: '👋🏻'
    },
    {
        v: 1,
        emoji: '🙃'
    }, 
];
function $69ce249528074d56$var$latestVersion() {
    for (const { v: v , emoji: emoji  } of $69ce249528074d56$var$VERSIONS){
        if ($69ce249528074d56$var$testEmoji(emoji)) return v;
    }
}
function $69ce249528074d56$var$noCountryFlags() {
    if ($69ce249528074d56$var$testEmoji('🇨🇦')) return false;
    return true;
}
function $69ce249528074d56$var$testEmoji(emoji) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 25;
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = `50px "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"`;
    ctx.fillStyle = '#0f0';
    ctx.fillText(emoji, 0, 0);
    const rgba = ctx.getImageData(0, 0, 1, 1).data.join(',');
    if (rgba != '0,0,0,0') return true;
}
var $69ce249528074d56$export$2e2bcd8739ae039 = {
    latestVersion: $69ce249528074d56$var$latestVersion,
    noCountryFlags: $69ce249528074d56$var$noCountryFlags
};



const $801ea98b88209a78$var$DEFAULTS = [
    '+1',
    'grinning',
    'kissing_heart',
    'heart_eyes',
    'laughing',
    'stuck_out_tongue_winking_eye',
    'sweat_smile',
    'joy',
    'scream',
    'disappointed',
    'unamused',
    'weary',
    'sob',
    'sunglasses',
    'heart', 
];
let $801ea98b88209a78$var$Index = null;
function $801ea98b88209a78$var$add(emoji) {
    $801ea98b88209a78$var$Index || ($801ea98b88209a78$var$Index = $f0491e8c6c78eca1$export$2e2bcd8739ae039.get('frequently') || {
    });
    const emojiId = emoji.id || emoji;
    if (!emojiId) return;
    $801ea98b88209a78$var$Index[emojiId] || ($801ea98b88209a78$var$Index[emojiId] = 0);
    $801ea98b88209a78$var$Index[emojiId] += 1;
    $f0491e8c6c78eca1$export$2e2bcd8739ae039.set('last', emojiId);
    $f0491e8c6c78eca1$export$2e2bcd8739ae039.set('frequently', $801ea98b88209a78$var$Index);
}
function $801ea98b88209a78$var$get({ maxFrequentRows: maxFrequentRows , perLine: perLine  }) {
    $801ea98b88209a78$var$Index || ($801ea98b88209a78$var$Index = $f0491e8c6c78eca1$export$2e2bcd8739ae039.get('frequently'));
    let emojiIds = [];
    if (!$801ea98b88209a78$var$Index) {
        $801ea98b88209a78$var$Index = {
        };
        for(let i in $801ea98b88209a78$var$DEFAULTS.slice(0, perLine)){
            const emojiId = $801ea98b88209a78$var$DEFAULTS[i];
            $801ea98b88209a78$var$Index[emojiId] = perLine - i;
            emojiIds.push(emojiId);
        }
        return emojiIds;
    }
    const max = maxFrequentRows * perLine;
    const last = $f0491e8c6c78eca1$export$2e2bcd8739ae039.get('last');
    for(let emojiId in $801ea98b88209a78$var$Index)emojiIds.push(emojiId);
    emojiIds.sort((a, b)=>{
        const aScore = $801ea98b88209a78$var$Index[b];
        const bScore = $801ea98b88209a78$var$Index[a];
        if (aScore == bScore) return a.localeCompare(b);
        return aScore - bScore;
    });
    if (emojiIds.length > max) {
        const removedIds = emojiIds.slice(max);
        emojiIds = emojiIds.slice(0, max);
        for (let removedId of removedIds){
            if (removedId == last) continue;
            delete $801ea98b88209a78$var$Index[removedId];
        }
        if (last && emojiIds.indexOf(last) == -1) {
            delete $801ea98b88209a78$var$Index[emojiIds[emojiIds.length - 1]];
            emojiIds.splice(-1, 1, last);
        }
        $f0491e8c6c78eca1$export$2e2bcd8739ae039.set('frequently', $801ea98b88209a78$var$Index);
    }
    return emojiIds;
}
var $801ea98b88209a78$export$2e2bcd8739ae039 = {
    add: $801ea98b88209a78$var$add,
    get: $801ea98b88209a78$var$get
};



const $e5b3eca3857ee771$var$SHORTCODES_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
function $e5b3eca3857ee771$var$get(emojiId) {
    if (emojiId.id) return emojiId;
    return $c1e62b87224e1434$export$2d0294657ab35f1b.emojis[emojiId] || $c1e62b87224e1434$export$2d0294657ab35f1b.emojis[$c1e62b87224e1434$export$2d0294657ab35f1b.aliases[emojiId]] || $c1e62b87224e1434$export$2d0294657ab35f1b.emojis[$c1e62b87224e1434$export$2d0294657ab35f1b.natives[emojiId]];
}
let $e5b3eca3857ee771$var$Pool = null;
async function $e5b3eca3857ee771$var$search(value, { maxResults: maxResults  } = {
}) {
    if (!value || !value.trim().length) return null;
    maxResults || (maxResults = 90);
    await $c1e62b87224e1434$export$2cd8252107eb640b();
    return $e5b3eca3857ee771$var$_search(value, {
        maxResults: maxResults
    });
}
function $e5b3eca3857ee771$var$searchSynchronized(value, { maxResults: maxResults  } = {
}) {
    if (!value || !value.trim().length) return null;
    maxResults || (maxResults = 90);
    return $e5b3eca3857ee771$var$_search(value, {
        maxResults: maxResults
    });
}
function $e5b3eca3857ee771$var$_search(value, { maxResults: maxResults  } = {
}) {
    const values = value.toLowerCase().replace(/(\w)-/, '$1 ').split(/[\s|,]+/).filter((word, i, words)=>{
        return word.trim() && words.indexOf(word) == i;
    });
    if (!values.length) return;
    let pool = $e5b3eca3857ee771$var$Pool || ($e5b3eca3857ee771$var$Pool = Object.values($c1e62b87224e1434$export$2d0294657ab35f1b.emojis));
    let results, scores;
    for (const value1 of values){
        if (!pool.length) break;
        results = [];
        scores = {
        };
        for (const emoji of pool){
            if (!emoji.search) continue;
            const score = emoji.search.indexOf(`,${value1}`);
            if (score == -1) continue;
            results.push(emoji);
            scores[emoji.id] || (scores[emoji.id] = 0);
            scores[emoji.id] += emoji.id == value1 ? 0 : score + 1;
        }
        pool = results;
    }
    if (results.length < 2) return results;
    results.sort((a, b)=>{
        const aScore = scores[a.id];
        const bScore = scores[b.id];
        if (aScore == bScore) return a.id.localeCompare(b.id);
        return aScore - bScore;
    });
    if (results.length > maxResults) results = results.slice(0, maxResults);
    return results;
}
var $e5b3eca3857ee771$export$2e2bcd8739ae039 = {
    search: $e5b3eca3857ee771$var$search,
    searchSynchronized: $e5b3eca3857ee771$var$searchSynchronized,
    get: $e5b3eca3857ee771$var$get,
    SHORTCODES_REGEX: $e5b3eca3857ee771$var$SHORTCODES_REGEX
};


const $f587198225234c2a$export$bcb25aa587e9cb13 = [
    'checkered_flag',
    'crossed_flags',
    'pirate_flag',
    'rainbow-flag',
    'transgender_flag',
    'triangular_flag_on_post',
    'waving_black_flag',
    'waving_white_flag', 
];


let $c1e62b87224e1434$export$dbe3113d60765c1a = null;
let $c1e62b87224e1434$export$2d0294657ab35f1b = null;
const $c1e62b87224e1434$var$DEFAULT_PROPS = {
    autoFocus: {
        value: false
    },
    emojiButtonColors: {
        value: null
    },
    emojiButtonRadius: {
        value: '100%'
    },
    emojiButtonSize: {
        value: 36
    },
    emojiSize: {
        value: 24
    },
    emojiVersion: {
        value: 14,
        choices: [
            1,
            2,
            3,
            4,
            5,
            11,
            12,
            12.1,
            13,
            13.1,
            14
        ]
    },
    icons: {
        value: 'auto',
        choices: [
            'auto',
            'outline',
            'solid'
        ]
    },
    locale: {
        value: 'en',
        choices: [
            'en',
            'fr'
        ]
    },
    maxFrequentRows: {
        value: 4
    },
    navPosition: {
        value: 'top',
        choices: [
            'top',
            'bottom',
            'none'
        ]
    },
    noCountryFlags: {
        value: false
    },
    noResultsEmoji: {
        value: null
    },
    perLine: {
        value: 9
    },
    previewEmoji: {
        value: null
    },
    previewPosition: {
        value: 'bottom',
        choices: [
            'top',
            'bottom',
            'none'
        ]
    },
    set: {
        value: 'native',
        choices: [
            'native',
            'apple',
            'facebook',
            'google',
            'twitter'
        ]
    },
    skin: {
        value: 1,
        choices: [
            1,
            2,
            3,
            4,
            5,
            6
        ]
    },
    stickySearch: {
        value: true
    },
    theme: {
        value: 'auto',
        choices: [
            'auto',
            'light',
            'dark'
        ]
    }
};
async function $c1e62b87224e1434$var$fetchJSON(src) {
    const response = await fetch(src);
    return await response.json();
}
let $c1e62b87224e1434$var$promise = null;
let $c1e62b87224e1434$var$initiated = false;
let $c1e62b87224e1434$var$initCallback = null;
function $c1e62b87224e1434$export$2cd8252107eb640b(options) {
    $c1e62b87224e1434$var$promise || ($c1e62b87224e1434$var$promise = new Promise((resolve)=>{
        $c1e62b87224e1434$var$initCallback = resolve;
    }));
    if (options && !$c1e62b87224e1434$var$initiated) {
        $c1e62b87224e1434$var$initiated = true;
        $c1e62b87224e1434$var$_init(options);
    }
    return $c1e62b87224e1434$var$promise;
}
async function $c1e62b87224e1434$var$_init(props, element) {
    const { data: data , i18n: i18n  } = props;
    const pickerProps = $c1e62b87224e1434$var$getProps(props, element);
    const { emojiVersion: emojiVersion , set: set , locale: locale  } = pickerProps;
    $c1e62b87224e1434$export$2d0294657ab35f1b = (typeof data === 'function' ? await data() : data) || await $c1e62b87224e1434$var$fetchJSON(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${emojiVersion}/${set}.json`);
    $c1e62b87224e1434$export$dbe3113d60765c1a = (typeof i18n === 'function' ? await i18n() : i18n) || (locale == 'en' ? (/*@__PURE__*/$parcel$interopDefault($8cb849075d80bb41$exports)) : await $c1e62b87224e1434$var$fetchJSON(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${locale}.json`));
    if (pickerProps.maxFrequentRows) {
        const emojis = $801ea98b88209a78$export$2e2bcd8739ae039.get(pickerProps);
        if (emojis.length) $c1e62b87224e1434$export$2d0294657ab35f1b.categories.unshift({
            id: 'frequent',
            emojis: emojis
        });
    }
    if (props.custom) for(let i in props.custom){
        i = parseInt(i);
        const category = props.custom[i];
        const prevCategory = props.custom[i - 1];
        if (!category.emojis || !category.emojis.length) continue;
        category.id = `custom_${i + 1}`;
        category.name || (category.name = $c1e62b87224e1434$export$dbe3113d60765c1a.categories.custom);
        if (prevCategory && !category.icon) category.target = prevCategory.target || prevCategory;
        $c1e62b87224e1434$export$2d0294657ab35f1b.categories.push(category);
        const ids = [];
        for (const emoji of category.emojis){
            if ($c1e62b87224e1434$export$2d0294657ab35f1b.emojis[emoji.id]) continue;
            $c1e62b87224e1434$export$2d0294657ab35f1b.emojis[emoji.id] = emoji;
            ids.push(emoji.id);
        }
        category.emojis = ids;
    }
    if (props.categories) $c1e62b87224e1434$export$2d0294657ab35f1b.categories = $c1e62b87224e1434$export$2d0294657ab35f1b.categories.filter((c)=>{
        return props.categories.indexOf(c.id) != -1;
    }).sort((c1, c2)=>{
        const i1 = props.categories.indexOf(c1.id);
        const i2 = props.categories.indexOf(c2.id);
        return i1 - i2;
    });
    let latestVersionSupport = null;
    let noCountryFlags = null;
    if (set == 'native') {
        latestVersionSupport = $69ce249528074d56$export$2e2bcd8739ae039.latestVersion();
        noCountryFlags = pickerProps.noCountryFlags || $69ce249528074d56$export$2e2bcd8739ae039.noCountryFlags();
    }
    $c1e62b87224e1434$export$2d0294657ab35f1b.emoticons = {
    };
    $c1e62b87224e1434$export$2d0294657ab35f1b.natives = {
    };
    for (const category of $c1e62b87224e1434$export$2d0294657ab35f1b.categories){
        let i = category.emojis.length;
        const { categoryIcons: categoryIcons  } = props;
        if (categoryIcons) {
            const icon = categoryIcons[category.id];
            if (icon && !category.icon) category.icon = icon;
        }
        while(i--){
            const emoji = $c1e62b87224e1434$export$2d0294657ab35f1b.emojis[category.emojis[i]];
            if (!emoji) continue;
            let ignore = false;
            if (latestVersionSupport && emoji.version > latestVersionSupport) ignore = true;
            if (noCountryFlags && category.id == 'flags') {
                if (!$f587198225234c2a$export$bcb25aa587e9cb13.includes(emoji.id)) ignore = true;
            }
            if (ignore) {
                category.emojis.splice(i, 1);
                continue;
            }
            emoji.search = ',' + [
                [
                    emoji.id,
                    false
                ],
                [
                    emoji.name,
                    true
                ],
                [
                    emoji.keywords,
                    false
                ],
                [
                    emoji.emoticons,
                    false
                ], 
            ].map(([strings, split])=>{
                if (!strings) return;
                return (Array.isArray(strings) ? strings : [
                    strings
                ]).map((string)=>{
                    return (split ? string.split(/[-|_|\s]+/) : [
                        string
                    ]).map((s)=>s.toLowerCase()
                    );
                }).flat();
            }).flat().filter((a)=>a && a.trim()
            ).join(',');
            if (emoji.emoticons) for (const emoticon of emoji.emoticons){
                if ($c1e62b87224e1434$export$2d0294657ab35f1b.emoticons[emoticon]) continue;
                $c1e62b87224e1434$export$2d0294657ab35f1b.emoticons[emoticon] = emoji.id;
            }
            let skinIndex = 0;
            for (const skin of emoji.skins){
                if (!skin) continue;
                skinIndex++;
                const { native: native  } = skin;
                if (native) {
                    $c1e62b87224e1434$export$2d0294657ab35f1b.natives[native] = emoji.id;
                    emoji.search += `,${native}`;
                }
                const skinShortcodes = skinIndex == 1 ? '' : `:skin-tone-${skinIndex}:`;
                skin.shortcodes = `:${emoji.id}:${skinShortcodes}`;
            }
        }
    }
    for(const alias in $c1e62b87224e1434$export$2d0294657ab35f1b.aliases){
        const emojiId = $c1e62b87224e1434$export$2d0294657ab35f1b.aliases[alias];
        const emoji = $c1e62b87224e1434$export$2d0294657ab35f1b.emojis[emojiId];
        if (!emoji) continue;
        emoji.aliases || (emoji.aliases = []);
        emoji.aliases.push(alias);
    }
    $c1e62b87224e1434$var$initCallback(pickerProps);
}
function $c1e62b87224e1434$var$getProps(props, element) {
    props || (props = {
    });
    function get(propName) {
        const defaults = $c1e62b87224e1434$var$DEFAULT_PROPS[propName];
        let value = element && element.getAttribute(propName) || props[propName];
        if (value != null && defaults.value && typeof defaults.value != typeof value) {
            if (typeof defaults.value == 'boolean') value = value == 'false' ? false : true;
            else value = defaults.value.constructor(value);
        }
        if (value == null || defaults.choices && defaults.choices.indexOf(value) == -1) value = defaults.value;
        return value;
    }
    const _props = {
    };
    for(let k in $c1e62b87224e1434$var$DEFAULT_PROPS)_props[k] = get(k);
    return _props;
}




const $3fd138be9fa32d17$var$categories = {
    activity: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 2.83936 4.21875C 3.89404 5.54712 4.55981 7.19824 4.66431 9L 5.66577 9C 5.55701 6.90271 4.76794 4.98523 3.51514 3.46411C 4.9408 2.05042 6.86462 1.13831 9 1.0144L 9.5 0C 4.2533 0 0 4.2533 0 9.5L 1.0144 9C 1.1189 7.19824 1.78467 5.54712 2.83936 4.21875Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 10 10L 13.5485 10L 14.5499 10L 14.5499 9L 13.5485 9L 10 9L 10 1.0144L 9.5 0L 9 1.0144L 9 9L 5.66577 9L 4.66431 9L 4.66431 10L 5.66577 10L 9 10L 9 17.9856L 9.5 19L 10 17.9856L 10 10Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 16.2678 4.35657C 17.2604 5.66052 17.8846 7.26001 17.9856 9L 19 9.5C 19 4.2533 14.7467 0 9.5 0L 10 1.0144C 12.1947 1.14172 14.1659 2.10168 15.6025 3.58313C 14.4058 5.08472 13.6544 6.95703 13.5485 9L 14.5499 9C 14.6509 7.26001 15.2753 5.66064 16.2678 4.35657Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 1.0144 10L 4.66431 10L 4.66431 9L 1.0144 9L 0 9.5L 1.0144 10Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 3.51514 15.5359C 4.76794 14.0148 5.55701 12.0973 5.66577 10L 4.66431 10C 4.55981 11.8018 3.89404 13.4529 2.83936 14.7812C 1.78467 13.4529 1.1189 11.8018 1.0144 10L 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9 17.9856C 6.86462 17.8617 4.9408 16.9496 3.51514 15.5359Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 15.6025 15.4169C 14.1659 16.8983 12.1947 17.8583 10 17.9856L 9.5 19C 14.7467 19 19 14.7467 19 9.5L 17.9856 10C 17.8846 11.74 17.2604 13.3395 16.2678 14.6434C 15.2753 13.3394 14.6509 11.74 14.5499 10L 13.5485 10C 13.6544 12.043 14.4058 13.9153 15.6025 15.4169Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 14.5499 10L 17.9856 10L 19 9.5L 17.9856 9L 14.5499 9L 14.5499 10Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
            })
        })
    },
    custom: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
        })
    }),
    flags: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "12",
            height: "18",
            viewBox: "0 -1 12 18",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 1 0L 0 0L 0 1L 0 8L 0 9L 0 17L 1 17L 1 9L 1 8L 1 1L 1 0Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 1 9L 11 9L 12 9L 12 8L 12 1L 12 0L 11 0L 1 0L 1 1L 11 1L 11 8L 1 8L 1 9Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
            })
        })
    },
    foods: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "17",
            height: "19",
            viewBox: "0 0 17 19",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 12.1183 6.48747C 11.4751 6.23515 10.7572 6.10832 10 6.10832C 9.88623 6.10832 9.77332 6.11296 9.66138 6.12187C 9.07397 6.16911 8.5144 6.33805 8 6.60771L 8 1.6082L 7.5 8.12834L 8.07019 7.73258C 8.68677 7.29289 9.25342 7.09477 10 7.10832C 11.1823 7.10832 12.1726 7.46806 12.8571 8.10026C 13.5286 8.72062 14 9.68937 14 11.1083C 14 12.462 13.3236 13.9887 12.2791 15.1969C 11.2169 16.4257 9.96875 17.1083 9 17.1083C 8.54712 17.1144 8.26135 17.0506 7.92432 16.886L 7.5 16.6873L 7.5 17.7915C 7.93848 17.997 8.43762 18.1083 9 18.1083C 11.7615 18.1083 15 14.422 15 11.1083C 15 8.70329 13.8208 7.15556 12.1183 6.48747Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 6 18.1083C 6.56238 18.1083 7.06152 17.997 7.5 17.7915L 7.5 16.6873L 7.07568 16.886C 6.73865 17.0506 6.45288 17.1144 6 17.1083C 5.03125 17.1083 3.78308 16.4257 2.72095 15.1969C 1.67639 13.9887 1 12.462 1 11.1083C 1 9.68937 1.47144 8.72062 2.14294 8.10026C 2.82739 7.46806 3.81775 7.10832 5 7.10832C 5.74658 7.09477 6.31323 7.29289 6.92981 7.73258L 7.5 8.12834L 8 1.6082L 7 1.6082L 7 6.60758C 6.38757 6.28642 5.71118 6.10832 5 6.10832C 2.23853 6.10832 0 7.7946 0 11.1083C 0 14.422 3.23853 18.1083 6 18.1083Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 11.4785 0.600017C 9.95911 1.47721 9.13403 3.11283 9.20801 4.76139L 10.2225 4.18717C 10.3368 3.08537 10.9589 2.05473 11.9785 1.46611C 12.9932 0.88029 14.1703 0.864665 15.1501 1.31889L 16.1647 0.74467C 14.8052 -0.16158 12.9978 -0.27718 11.4785 0.600017Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 13.8942 4.90605C 15.4136 4.02885 16.2386 2.39323 16.1647 0.74467L 15.1501 1.31889C 15.0359 2.42082 14.4138 3.45133 13.3942 4.04008C 12.3795 4.6259 11.2024 4.64152 10.2225 4.18717L 9.20801 4.76139C 9.4104 4.8964 9.6228 5.01371 9.84253 5.11296C 9.89465 5.13652 9.94714 5.15898 10 5.18034C 10.7045 5.46611 11.4779 5.56913 12.244 5.46842C 12.8082 5.39433 13.3684 5.20964 13.8942 4.90605Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
            })
        })
    },
    frequent: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 9 4L 10 4L 10 10L 16 10L 16 11L 10 11L 9 11L 9 10L 9 4Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 10 20C 4.47717 20 0 15.5228 0 10C 0 4.47717 4.47717 0 10 0L 10 1C 5.02942 1 1 5.02942 1 10C 1 14.9706 5.02942 19 10 19L 10 20Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 20 10C 20 15.5228 15.5228 20 10 20L 10 19C 14.9706 19 19 14.9706 19 10C 19 5.02942 14.9706 1 10 1L 10 0C 15.5228 0 20 4.47717 20 10Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
            })
        })
    },
    nature: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 4.77954 12.2311L 0 17.0106L 0.707153 17.7177L 5.39307 13.0318L 4.77954 12.2311Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 6.16248 12.2624L 5.56335 11.4472L 4.77954 12.2311L 5.39307 13.0318L 6.16248 12.2624Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 5.39307 13.0318C 8.67566 14.4375 12.6239 13.8008 15.3032 11.1214C 18.0741 8.35044 18.6605 4.22227 17.0624 0.876806L 16.4442 1.98069C 17.4929 4.82078 16.8754 8.13498 14.5961 10.4143C 12.3169 12.6936 9.00244 13.3111 6.16248 12.2624L 5.39307 13.0318Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 15.6292 1.38144L 5.56335 11.4472L 6.16248 12.2624L 16.4442 1.98069L 15.6292 1.38144Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 7.52515 3.34299C 9.7168 1.15134 12.8655 0.496191 15.6292 1.38144L 17.0624 0.876806C 13.717 -0.721216 9.58887 -0.134912 6.81799 2.63596C 4.22388 5.23008 3.54431 9.01377 4.77954 12.2311L 5.56335 11.4472C 4.6781 8.68345 5.33337 5.53477 7.52515 3.34299Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 17.0624 0.876806L 15.6292 1.38144L 16.4442 1.98069L 17.0624 0.876806Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
            })
        })
    },
    objects: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "18",
            height: "17",
            viewBox: "0 0 18 17",
            version: "1.1",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M 15.6673 1.61096C 13.5194 -0.536987 10.037 -0.536987 7.88901 1.61096L 1.1716 8.32849C -0.390533 9.8905 -0.390533 12.4232 1.1716 13.9854C 2.73361 15.5472 5.26572 15.5481 6.82785 13.9858L 9.30331 11.5105L 9.65683 11.1569L 12.1318 8.68213C 13.108 7.70581 13.108 6.12292 12.1318 5.14661C 11.1555 4.17029 9.57248 4.17029 8.59616 5.14661L 3.29294 10.45L 3.99997 11.157L 9.30331 5.85376C 9.88913 5.26794 10.8388 5.26794 11.4247 5.85376C 12.0105 6.43945 12.0105 7.38928 11.4247 7.97498L 8.9498 10.4498L 8.59616 10.8035L 6.12082 13.2787C 4.94931 14.4502 3.05038 14.4498 1.87863 13.2782C 0.707123 12.1066 0.707123 10.2072 1.87863 9.03552L 8.59616 2.31812C 10.3535 0.560669 13.2029 0.560669 14.9602 2.31812C 16.7176 4.07544 16.7176 6.9248 14.9602 8.68213L 8.24277 15.3997L 8.9498 16.1067L 15.6673 9.38928C 17.8152 7.24133 17.8152 3.75891 15.6673 1.61096Z"
            })
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
            })
        })
    },
    people: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 9.5 15C 7.08093 15 5.06323 13.2822 4.59998 11L 5.62598 11C 6.07007 12.7252 7.63623 14 9.5 14C 11.3638 14 12.9299 12.7252 13.374 11L 14.4 11C 13.9368 13.2822 11.9191 15 9.5 15Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 7 7.5C 7 8.05225 6.55225 8.5 6 8.5C 5.44775 8.5 5 8.05225 5 7.5C 5 6.94775 5.44775 6.5 6 6.5C 6.55225 6.5 7 6.94775 7 7.5Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 13 8.5C 13.5522 8.5 14 8.05225 14 7.5C 14 6.94775 13.5522 6.5 13 6.5C 12.4478 6.5 12 6.94775 12 7.5C 12 8.05225 12.4478 8.5 13 8.5Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 9.5 18C 4.80554 18 1 14.1945 1 9.5C 1 4.80554 4.80554 1 9.5 1L 9.5 0C 4.2533 0 0 4.2533 0 9.5C 0 14.7467 4.2533 19 9.5 19L 9.5 18Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 18 9.5C 18 14.1945 14.1945 18 9.5 18L 9.5 19C 14.7467 19 19 14.7467 19 9.5C 19 4.2533 14.7467 0 9.5 0L 9.5 1C 14.1945 1 18 4.80554 18 9.5Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
            })
        })
    },
    places: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 11.9747 1.55383C 12.5566 1.17468 13.1697 0.994873 13.8641 1L 17.861 1L 17.861 0L 13.8641 0C 13.0276 0.00512695 12.1419 0.264648 11.4349 0.712036L 2.07887 6.71204C -1.70385 9.13794 0.0142913 15 4.50807 15L 9.39637 15L 10.411 15L 12.6918 15L 15.3109 15L 16.3256 15L 17.861 15L 17.861 14L 12.6918 14L 4.50807 14C 1.26454 14 -0.119864 10.0732 2.0492 8L 3.48231 7L 7.38062 4.5L 8.93995 3.5L 11.9747 1.55383Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 13.111 3.5L 8.93995 3.5L 7.38062 4.5L 13.111 4.5C 13.8013 4.5 14.361 5.05969 14.361 5.75C 14.361 6.44031 13.8013 7 13.111 7L 3.48231 7L 2.0492 8L 13.111 8C 14.3536 8 15.361 6.99268 15.361 5.75C 15.361 4.50732 14.3536 3.5 13.111 3.5Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 12.861 18C 14.6242 18 16.0829 16.6962 16.3256 15L 15.3109 15C 15.0794 16.1411 14.0704 17 12.861 17C 11.6515 17 10.6426 16.1411 10.411 15L 9.39637 15C 9.63905 16.6962 11.0978 18 12.861 18Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
            })
        })
    },
    symbols: {
        outline: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            width: "19",
            height: "16",
            viewBox: "0 0 19 16",
            version: "1.1",
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 1 5C 1 2.79091 2.79091 1 5 1C 6.54723 1 7.89015 1.8784 8.55585 3.16603L 9 4.02513L 9 1.99968C 8.08821 0.786061 6.63622 0 5 0C 2.23863 0 0 2.23863 0 5C 0 6.63571 0.786056 8.08793 1.99875 8.99938L 8.65451 15.3614L 9 15.6917L 9 14.3083L 2.66775 8.2555L 2.64519 8.23393L 2.62011 8.21534C 1.63619 7.48562 1 6.31713 1 5Z"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                    d: "M 15.3322 8.2555L 9 14.3083L 9 15.6917L 9.34549 15.3614L 16.0013 8.99938C 17.2139 8.08793 18 6.63571 18 5C 18 2.23863 15.7614 0 13 0C 11.3638 0 9.91179 0.786061 9 1.99968L 9 4.02513L 9.44415 3.16603C 10.1099 1.8784 11.4528 1 13 1C 15.2091 1 17 2.79091 17 5C 17 6.31713 16.3638 7.48562 15.3799 8.21534L 15.3548 8.23393L 15.3322 8.2555Z"
                })
            ]
        }),
        solid: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
            })
        })
    }
};
const $3fd138be9fa32d17$var$search = {
    loupe: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        })
    }),
    delete: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        })
    })
};
var $3fd138be9fa32d17$export$2e2bcd8739ae039 = {
    categories: $3fd138be9fa32d17$var$categories,
    search: $3fd138be9fa32d17$var$search
};




function $f10978095cbef290$export$2e2bcd8739ae039(props) {
    let { id: id , skin: skin , shortcodes: shortcodes , emoji: emoji  } = props;
    if (!emoji && !id && shortcodes) {
        const matches = shortcodes.match($e5b3eca3857ee771$export$2e2bcd8739ae039.SHORTCODES_REGEX);
        if (matches) {
            id = matches[1];
            if (matches[2]) skin = matches[2];
        }
    }
    emoji || (emoji = $e5b3eca3857ee771$export$2e2bcd8739ae039.get(id));
    if (!emoji) return props.fallback;
    const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
    const src = 'https://static.figma.com/emoji/3/64/' + emojiSkin.unified?.toLowerCase() + '.png';
    return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("span", {
        class: "emoji-mart-emoji",
        "data-emoji-set": props.set,
        children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("img", {
            style: {
                height: props.size || '1em',
                width: 'auto',
                display: 'inline-block',
                position: 'relative',
                top: '.1em'
            },
            alt: emojiSkin.native || emojiSkin.shortcodes,
            src: src
        })
    }));
}






class $90aef8283f908144$export$2e2bcd8739ae039 extends window.HTMLElement {
    constructor(props = {
    }){
        super();
        this.props = props;
        if (props.parent || props.ref) {
            const parent = props.parent || props.ref && props.ref.current;
            if (parent) parent.appendChild(this);
        }
    }
}



class $45a2c0f5a7f6356f$export$2e2bcd8739ae039 extends $90aef8283f908144$export$2e2bcd8739ae039 {
    constructor(props, { styles: styles  } = {
    }){
        super(props);
        this.setShadow();
        this.injectStyles(styles);
    }
    setShadow() {
        this.attachShadow({
            mode: 'open'
        });
    }
    injectStyles(styles) {
        if (!styles) return;
        const style = document.createElement('style');
        style.textContent = styles;
        this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
    }
}





class $a21ae9abcdd88763$export$2e2bcd8739ae039 extends $90aef8283f908144$export$2e2bcd8739ae039 {
    async connectedCallback() {
        const pickerProps = await $c1e62b87224e1434$export$2cd8252107eb640b();
        const native = this.getAttribute('native');
        let emoji = null;
        if (native) emoji = $e5b3eca3857ee771$export$2e2bcd8739ae039.get(native);
        const props = {
            ...pickerProps,
            emoji: emoji,
            id: this.getAttribute('id'),
            set: this.getAttribute('set') || pickerProps.set,
            size: this.getAttribute('size'),
            fallback: this.getAttribute('fallback'),
            shortcodes: this.getAttribute('shortcodes')
        };
        $37bf4dbb901cf968$export$b3890eb0ae9dca99(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b($f10978095cbef290$export$2e2bcd8739ae039, {
            ...props
        }), this);
    }
}
if (!customElements.get('em-emoji')) customElements.define('em-emoji', $a21ae9abcdd88763$export$2e2bcd8739ae039);






var $58b7878b49ba566c$var$t, $58b7878b49ba566c$var$u, $58b7878b49ba566c$var$r, $58b7878b49ba566c$var$o = 0, $58b7878b49ba566c$var$i = [], $58b7878b49ba566c$var$c = $37bf4dbb901cf968$export$41c562ebe57d11e2.__b, $58b7878b49ba566c$var$f = $37bf4dbb901cf968$export$41c562ebe57d11e2.__r, $58b7878b49ba566c$var$e = $37bf4dbb901cf968$export$41c562ebe57d11e2.diffed, $58b7878b49ba566c$var$a = $37bf4dbb901cf968$export$41c562ebe57d11e2.__c, $58b7878b49ba566c$var$v = $37bf4dbb901cf968$export$41c562ebe57d11e2.unmount;
function $58b7878b49ba566c$var$m(t, r) {
    $37bf4dbb901cf968$export$41c562ebe57d11e2.__h && $37bf4dbb901cf968$export$41c562ebe57d11e2.__h($58b7878b49ba566c$var$u, t, $58b7878b49ba566c$var$o || r), $58b7878b49ba566c$var$o = 0;
    var i = $58b7878b49ba566c$var$u.__H || ($58b7878b49ba566c$var$u.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({
    }), i.__[t];
}
function $58b7878b49ba566c$export$60241385465d0a34(n) {
    return $58b7878b49ba566c$var$o = 1, $58b7878b49ba566c$export$13e3392192263954($58b7878b49ba566c$var$w, n);
}
function $58b7878b49ba566c$export$13e3392192263954(n1, r, o) {
    var i = $58b7878b49ba566c$var$m($58b7878b49ba566c$var$t++, 2);
    return i.t = n1, i.__c || (i.__ = [
        o ? o(r) : $58b7878b49ba566c$var$w(void 0, r),
        function(n) {
            var t = i.t(i.__[0], n);
            i.__[0] !== t && (i.__ = [
                t,
                i.__[1]
            ], i.__c.setState({
            }));
        }
    ], i.__c = $58b7878b49ba566c$var$u), i.__;
}
function $58b7878b49ba566c$export$6d9c69b0de29b591(r, o) {
    var i = $58b7878b49ba566c$var$m($58b7878b49ba566c$var$t++, 3);
    !$37bf4dbb901cf968$export$41c562ebe57d11e2.__s && $58b7878b49ba566c$var$k(i.__H, o) && (i.__ = r, i.__H = o, $58b7878b49ba566c$var$u.__H.__h.push(i));
}
function $58b7878b49ba566c$export$e5c5a5f917a5871c(r, o) {
    var i = $58b7878b49ba566c$var$m($58b7878b49ba566c$var$t++, 4);
    !$37bf4dbb901cf968$export$41c562ebe57d11e2.__s && $58b7878b49ba566c$var$k(i.__H, o) && (i.__ = r, i.__H = o, $58b7878b49ba566c$var$u.__h.push(i));
}
function $58b7878b49ba566c$export$b8f5890fc79d6aca(n) {
    return $58b7878b49ba566c$var$o = 5, $58b7878b49ba566c$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $58b7878b49ba566c$export$d5a552a76deda3c2(n, t, u) {
    $58b7878b49ba566c$var$o = 6, $58b7878b49ba566c$export$e5c5a5f917a5871c(function() {
        "function" == typeof n ? n(t()) : n && (n.current = t());
    }, null == u ? u : u.concat(n));
}
function $58b7878b49ba566c$export$1538c33de8887b59(n, u) {
    var r = $58b7878b49ba566c$var$m($58b7878b49ba566c$var$t++, 7);
    return $58b7878b49ba566c$var$k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}
function $58b7878b49ba566c$export$35808ee640e87ca7(n, t) {
    return $58b7878b49ba566c$var$o = 8, $58b7878b49ba566c$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $58b7878b49ba566c$export$fae74005e78b1a27(n) {
    var r = $58b7878b49ba566c$var$u.context[n.__c], o = $58b7878b49ba566c$var$m($58b7878b49ba566c$var$t++, 9);
    return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub($58b7878b49ba566c$var$u)), r.props.value) : n.__;
}
function $58b7878b49ba566c$export$dc8fbce3eb94dc1e(t, u) {
    $37bf4dbb901cf968$export$41c562ebe57d11e2.useDebugValue && $37bf4dbb901cf968$export$41c562ebe57d11e2.useDebugValue(u ? u(t) : t);
}
function $58b7878b49ba566c$export$c052f6604b7d51fe(n2) {
    var r = $58b7878b49ba566c$var$m($58b7878b49ba566c$var$t++, 10), o = $58b7878b49ba566c$export$60241385465d0a34();
    return r.__ = n2, $58b7878b49ba566c$var$u.componentDidCatch || ($58b7878b49ba566c$var$u.componentDidCatch = function(n) {
        r.__ && r.__(n), o[1](n);
    }), [
        o[0],
        function() {
            o[1](void 0);
        }
    ];
}
function $58b7878b49ba566c$var$x() {
    var t1;
    for($58b7878b49ba566c$var$i.sort(function(n, t) {
        return n.__v.__b - t.__v.__b;
    }); t1 = $58b7878b49ba566c$var$i.pop();)if (t1.__P) try {
        t1.__H.__h.forEach($58b7878b49ba566c$var$g), t1.__H.__h.forEach($58b7878b49ba566c$var$j), t1.__H.__h = [];
    } catch (u) {
        t1.__H.__h = [], $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(u, t1.__v);
    }
}
$37bf4dbb901cf968$export$41c562ebe57d11e2.__b = function(n) {
    $58b7878b49ba566c$var$u = null, $58b7878b49ba566c$var$c && $58b7878b49ba566c$var$c(n);
}, $37bf4dbb901cf968$export$41c562ebe57d11e2.__r = function(n) {
    $58b7878b49ba566c$var$f && $58b7878b49ba566c$var$f(n), $58b7878b49ba566c$var$t = 0;
    var r = ($58b7878b49ba566c$var$u = n.__c).__H;
    r && (r.__h.forEach($58b7878b49ba566c$var$g), r.__h.forEach($58b7878b49ba566c$var$j), r.__h = []);
}, $37bf4dbb901cf968$export$41c562ebe57d11e2.diffed = function(t2) {
    $58b7878b49ba566c$var$e && $58b7878b49ba566c$var$e(t2);
    var o = t2.__c;
    o && o.__H && o.__H.__h.length && (1 !== $58b7878b49ba566c$var$i.push(o) && $58b7878b49ba566c$var$r === $37bf4dbb901cf968$export$41c562ebe57d11e2.requestAnimationFrame || (($58b7878b49ba566c$var$r = $37bf4dbb901cf968$export$41c562ebe57d11e2.requestAnimationFrame) || function(n) {
        var t, u = function() {
            clearTimeout(r), $58b7878b49ba566c$var$b && cancelAnimationFrame(t), setTimeout(n);
        }, r = setTimeout(u, 100);
        $58b7878b49ba566c$var$b && (t = requestAnimationFrame(u));
    })($58b7878b49ba566c$var$x)), $58b7878b49ba566c$var$u = null;
}, $37bf4dbb901cf968$export$41c562ebe57d11e2.__c = function(t3, u) {
    u.some(function(t) {
        try {
            t.__h.forEach($58b7878b49ba566c$var$g), t.__h = t.__h.filter(function(n) {
                return !n.__ || $58b7878b49ba566c$var$j(n);
            });
        } catch (r) {
            u.some(function(n) {
                n.__h && (n.__h = []);
            }), u = [], $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(r, t.__v);
        }
    }), $58b7878b49ba566c$var$a && $58b7878b49ba566c$var$a(t3, u);
}, $37bf4dbb901cf968$export$41c562ebe57d11e2.unmount = function(t) {
    $58b7878b49ba566c$var$v && $58b7878b49ba566c$var$v(t);
    var u, r = t.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $58b7878b49ba566c$var$g(n);
        } catch (n3) {
            u = n3;
        }
    }), u && $37bf4dbb901cf968$export$41c562ebe57d11e2.__e(u, r.__v));
};
var $58b7878b49ba566c$var$b = "function" == typeof requestAnimationFrame;
function $58b7878b49ba566c$var$g(n) {
    var t = $58b7878b49ba566c$var$u, r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), $58b7878b49ba566c$var$u = t;
}
function $58b7878b49ba566c$var$j(n) {
    var t = $58b7878b49ba566c$var$u;
    n.__c = n.__(), $58b7878b49ba566c$var$u = t;
}
function $58b7878b49ba566c$var$k(n, t4) {
    return !n || n.length !== t4.length || t4.some(function(t, u) {
        return t !== n[u];
    });
}
function $58b7878b49ba566c$var$w(n, t) {
    return "function" == typeof t ? t(n) : t;
}





function $6e79363961f7953d$var$S(n, t) {
    for(var e in t)n[e] = t[e];
    return n;
}
function $6e79363961f7953d$var$C(n, t) {
    for(var e in n)if ("__source" !== e && !(e in t)) return !0;
    for(var r in t)if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
}
function $6e79363961f7953d$export$221d75b3f55bb0bd(n) {
    this.props = n;
}
function $6e79363961f7953d$export$7c73462e0d25e514(n1, t1) {
    function e1(n) {
        var e = this.props.ref, r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t1 ? !t1(this.props, n) || !r : $6e79363961f7953d$var$C(this.props, n);
    }
    function r1(t) {
        return this.shouldComponentUpdate = e1, $37bf4dbb901cf968$export$c8a8987d4410bf2d(n1, t);
    }
    return r1.displayName = "Memo(" + (n1.displayName || n1.name) + ")", r1.prototype.isReactComponent = !0, r1.__f = !0, r1;
}
($6e79363961f7953d$export$221d75b3f55bb0bd.prototype = new $37bf4dbb901cf968$export$16fa2f45be04daa8).isPureReactComponent = !0, $6e79363961f7953d$export$221d75b3f55bb0bd.prototype.shouldComponentUpdate = function(n, t) {
    return $6e79363961f7953d$var$C(this.props, n) || $6e79363961f7953d$var$C(this.state, t);
};
var $6e79363961f7953d$var$w = $37bf4dbb901cf968$export$41c562ebe57d11e2.__b;
$37bf4dbb901cf968$export$41c562ebe57d11e2.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), $6e79363961f7953d$var$w && $6e79363961f7953d$var$w(n);
};
var $6e79363961f7953d$var$R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function $6e79363961f7953d$export$257a8862b851cb5b(n) {
    function t2(t, e) {
        var r = $6e79363961f7953d$var$S({
        }, t);
        return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
    }
    return t2.$$typeof = $6e79363961f7953d$var$R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = !0, t2.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t2;
}
var $6e79363961f7953d$var$N = function(n, t) {
    return null == n ? null : $37bf4dbb901cf968$export$47e4c5b300681277($37bf4dbb901cf968$export$47e4c5b300681277(n).map(t));
}, $6e79363961f7953d$export$dca3b0875bd9a954 = {
    map: $6e79363961f7953d$var$N,
    forEach: $6e79363961f7953d$var$N,
    count: function(n) {
        return n ? $37bf4dbb901cf968$export$47e4c5b300681277(n).length : 0;
    },
    only: function(n) {
        var t = $37bf4dbb901cf968$export$47e4c5b300681277(n);
        if (1 !== t.length) throw "Children.only";
        return t[0];
    },
    toArray: $37bf4dbb901cf968$export$47e4c5b300681277
}, $6e79363961f7953d$var$A = $37bf4dbb901cf968$export$41c562ebe57d11e2.__e;
$37bf4dbb901cf968$export$41c562ebe57d11e2.__e = function(n, t, e) {
    if (n.then) {
        for(var r, u = t; u = u.__;)if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
    }
    $6e79363961f7953d$var$A(n, t, e);
};
var $6e79363961f7953d$var$O = $37bf4dbb901cf968$export$41c562ebe57d11e2.unmount;
function $6e79363961f7953d$export$74bf444e3cd11ea5() {
    this.__u = 0, this.t = null, this.__b = null;
}
function $6e79363961f7953d$var$U(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
}
function $6e79363961f7953d$export$488013bae63b21da(n2) {
    var t, e, r;
    function u1(u) {
        if (t || (t = n2()).then(function(n) {
            e = n.default || n;
        }, function(n) {
            r = n;
        }), r) throw r;
        if (!e) throw t;
        return $37bf4dbb901cf968$export$c8a8987d4410bf2d(e, u);
    }
    return u1.displayName = "Lazy", u1.__f = !0, u1;
}
function $6e79363961f7953d$export$998bcd577473dd93() {
    this.u = null, this.o = null;
}
$37bf4dbb901cf968$export$41c562ebe57d11e2.unmount = function(n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), $6e79363961f7953d$var$O && $6e79363961f7953d$var$O(n);
}, ($6e79363961f7953d$export$74bf444e3cd11ea5.prototype = new $37bf4dbb901cf968$export$16fa2f45be04daa8).__c = function(n3, t3) {
    var e2 = t3.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u = $6e79363961f7953d$var$U(r2.__v), o = !1, i = function() {
        o || (o = !0, e2.__R = null, u ? u(l) : l());
    };
    e2.__R = i;
    var l = function() {
        if (!--r2.__u) {
            if (r2.state.__e) {
                var n4 = r2.state.__e;
                r2.__v.__k[0] = (function n(t6, e, r) {
                    return t6 && (t6.__v = null, t6.__k = t6.__k && t6.__k.map(function(t) {
                        return n(t, e, r);
                    }), t6.__c && t6.__c.__P === e && (t6.__e && r.insertBefore(t6.__e, t6.__d), t6.__c.__e = !0, t6.__c.__P = r)), t6;
                })(n4, n4.__c.__P, n4.__c.__O);
            }
            var t4;
            for(r2.setState({
                __e: r2.__b = null
            }); t4 = r2.t.pop();)t4.forceUpdate();
        }
    }, c = !0 === t3.__h;
    (r2.__u++) || c || r2.setState({
        __e: r2.__b = r2.__v.__k[0]
    }), n3.then(i, i);
}, $6e79363961f7953d$export$74bf444e3cd11ea5.prototype.componentWillUnmount = function() {
    this.t = [];
}, $6e79363961f7953d$export$74bf444e3cd11ea5.prototype.render = function(n7, t7) {
    if (this.__b) {
        if (this.__v.__k) {
            var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
            this.__v.__k[0] = (function n8(t8, e, r) {
                return t8 && (t8.__c && t8.__c.__H && (t8.__c.__H.__.forEach(function(n) {
                    "function" == typeof n.__c && n.__c();
                }), t8.__c.__H = null), null != (t8 = $6e79363961f7953d$var$S({
                }, t8)).__c && (t8.__c.__P === r && (t8.__c.__P = e), t8.__c = null), t8.__k = t8.__k && t8.__k.map(function(t) {
                    return n8(t, e, r);
                })), t8;
            })(this.__b, e3, r3.__O = r3.__P);
        }
        this.__b = null;
    }
    var u = t7.__e && $37bf4dbb901cf968$export$c8a8987d4410bf2d($37bf4dbb901cf968$export$ffb0004e005737fa, null, n7.fallback);
    return u && (u.__h = null), [
        $37bf4dbb901cf968$export$c8a8987d4410bf2d($37bf4dbb901cf968$export$ffb0004e005737fa, null, t7.__e ? null : n7.children),
        u
    ];
};
var $6e79363961f7953d$var$T = function(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for(e = n.u; e;){
        for(; e.length > 3;)e.pop()();
        if (e[1] < e[0]) break;
        n.u = e = e[2];
    }
};
function $6e79363961f7953d$var$D(n) {
    return this.getChildContext = function() {
        return n.context;
    }, n.children;
}
function $6e79363961f7953d$var$I(n9) {
    var t = this, e = n9.i;
    t.componentWillUnmount = function() {
        $37bf4dbb901cf968$export$b3890eb0ae9dca99(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== e && t.componentWillUnmount(), n9.__v ? (t.l || (t.i = e, t.l = {
        nodeType: 1,
        parentNode: e,
        childNodes: [],
        appendChild: function(n) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        insertBefore: function(n, e) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
        }
    }), $37bf4dbb901cf968$export$b3890eb0ae9dca99($37bf4dbb901cf968$export$c8a8987d4410bf2d($6e79363961f7953d$var$D, {
        context: t.context
    }, n9.__v), t.l)) : t.l && t.componentWillUnmount();
}
function $6e79363961f7953d$export$d39a5bbd09211389(n, t) {
    return $37bf4dbb901cf968$export$c8a8987d4410bf2d($6e79363961f7953d$var$I, {
        __v: n,
        i: t
    });
}
($6e79363961f7953d$export$998bcd577473dd93.prototype = new $37bf4dbb901cf968$export$16fa2f45be04daa8).__e = function(n) {
    var t = this, e = $6e79363961f7953d$var$U(t.__v), r = t.o.get(n);
    return r[0]++, function(u) {
        var o = function() {
            t.props.revealOrder ? (r.push(u), $6e79363961f7953d$var$T(t, n, r)) : u();
        };
        e ? e(o) : o();
    };
}, $6e79363961f7953d$export$998bcd577473dd93.prototype.render = function(n) {
    this.u = null, this.o = new Map;
    var t = $37bf4dbb901cf968$export$47e4c5b300681277(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for(var e = t.length; e--;)this.o.set(t[e], this.u = [
        1,
        0,
        this.u
    ]);
    return n.children;
}, $6e79363961f7953d$export$998bcd577473dd93.prototype.componentDidUpdate = $6e79363961f7953d$export$998bcd577473dd93.prototype.componentDidMount = function() {
    var n = this;
    this.o.forEach(function(t, e) {
        $6e79363961f7953d$var$T(n, e, t);
    });
};
var $6e79363961f7953d$var$j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, $6e79363961f7953d$var$P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, $6e79363961f7953d$var$V = "undefined" != typeof document, $6e79363961f7953d$var$z = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};
function $6e79363961f7953d$export$b3890eb0ae9dca99(n, t, e) {
    return null == t.__k && (t.textContent = ""), $37bf4dbb901cf968$export$b3890eb0ae9dca99(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function $6e79363961f7953d$export$fa8d919ba61d84db(n, t, e) {
    return $37bf4dbb901cf968$export$fa8d919ba61d84db(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
$37bf4dbb901cf968$export$16fa2f45be04daa8.prototype.isReactComponent = {
}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
].forEach(function(n) {
    Object.defineProperty($37bf4dbb901cf968$export$16fa2f45be04daa8.prototype, n, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + n];
        },
        set: function(t) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: t
            });
        }
    });
});
var $6e79363961f7953d$var$H = $37bf4dbb901cf968$export$41c562ebe57d11e2.event;
function $6e79363961f7953d$var$Z() {
}
function $6e79363961f7953d$var$Y() {
    return this.cancelBubble;
}
function $6e79363961f7953d$var$q() {
    return this.defaultPrevented;
}
$37bf4dbb901cf968$export$41c562ebe57d11e2.event = function(n) {
    return $6e79363961f7953d$var$H && (n = $6e79363961f7953d$var$H(n)), n.persist = $6e79363961f7953d$var$Z, n.isPropagationStopped = $6e79363961f7953d$var$Y, n.isDefaultPrevented = $6e79363961f7953d$var$q, n.nativeEvent = n;
};
var $6e79363961f7953d$var$G, $6e79363961f7953d$var$J = {
    configurable: !0,
    get: function() {
        return this.class;
    }
}, $6e79363961f7953d$var$K = $37bf4dbb901cf968$export$41c562ebe57d11e2.vnode;
$37bf4dbb901cf968$export$41c562ebe57d11e2.vnode = function(n10) {
    var t = n10.type, e = n10.props, r = e;
    if ("string" == typeof t) {
        var u = -1 === t.indexOf("-");
        for(var o in r = {
        }, e){
            var i = e[o];
            $6e79363961f7953d$var$V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !$6e79363961f7953d$var$z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && $6e79363961f7953d$var$P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = $37bf4dbb901cf968$export$47e4c5b300681277(e.children).forEach(function(n) {
            n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = $37bf4dbb901cf968$export$47e4c5b300681277(e.children).forEach(function(n) {
            n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n10.props = r, e.class != e.className && ($6e79363961f7953d$var$J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", $6e79363961f7953d$var$J));
    }
    n10.$$typeof = $6e79363961f7953d$var$j, $6e79363961f7953d$var$K && $6e79363961f7953d$var$K(n10);
};
var $6e79363961f7953d$var$Q = $37bf4dbb901cf968$export$41c562ebe57d11e2.__r;
$37bf4dbb901cf968$export$41c562ebe57d11e2.__r = function(n) {
    $6e79363961f7953d$var$Q && $6e79363961f7953d$var$Q(n), $6e79363961f7953d$var$G = n.__c;
};
var $6e79363961f7953d$export$ae55be85d98224ed = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(n) {
                return $6e79363961f7953d$var$G.__n[n.__c].props.value;
            }
        }
    }
}, $6e79363961f7953d$export$83d89fbfd8236492 = "17.0.2";
function $6e79363961f7953d$export$d38cd72104c1f0e9(n) {
    return $37bf4dbb901cf968$export$c8a8987d4410bf2d.bind(null, n);
}
function $6e79363961f7953d$export$a8257692ac88316c(n) {
    return !!n && n.$$typeof === $6e79363961f7953d$var$j;
}
function $6e79363961f7953d$export$e530037191fcd5d7(n) {
    return $6e79363961f7953d$export$a8257692ac88316c(n) ? $37bf4dbb901cf968$export$e530037191fcd5d7.apply(null, arguments) : n;
}
function $6e79363961f7953d$export$502457920280e6be(n) {
    return !!n.__k && ($37bf4dbb901cf968$export$b3890eb0ae9dca99(null, n), !0);
}
function $6e79363961f7953d$export$466bfc07425424d5(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}
var $6e79363961f7953d$export$c78a37762a8d58e1 = function(n, t) {
    return n(t);
}, $6e79363961f7953d$export$cd75ccfd720a3cd4 = function(n, t) {
    return n(t);
}, $6e79363961f7953d$export$5f8d39834fd61797 = $37bf4dbb901cf968$export$ffb0004e005737fa;
var $6e79363961f7953d$export$2e2bcd8739ae039 = {
    useState: $58b7878b49ba566c$export$60241385465d0a34,
    useReducer: $58b7878b49ba566c$export$13e3392192263954,
    useEffect: $58b7878b49ba566c$export$6d9c69b0de29b591,
    useLayoutEffect: $58b7878b49ba566c$export$e5c5a5f917a5871c,
    useRef: $58b7878b49ba566c$export$b8f5890fc79d6aca,
    useImperativeHandle: $58b7878b49ba566c$export$d5a552a76deda3c2,
    useMemo: $58b7878b49ba566c$export$1538c33de8887b59,
    useCallback: $58b7878b49ba566c$export$35808ee640e87ca7,
    useContext: $58b7878b49ba566c$export$fae74005e78b1a27,
    useDebugValue: $58b7878b49ba566c$export$dc8fbce3eb94dc1e,
    version: "17.0.2",
    Children: $6e79363961f7953d$export$dca3b0875bd9a954,
    render: $6e79363961f7953d$export$b3890eb0ae9dca99,
    hydrate: $6e79363961f7953d$export$fa8d919ba61d84db,
    unmountComponentAtNode: $6e79363961f7953d$export$502457920280e6be,
    createPortal: $6e79363961f7953d$export$d39a5bbd09211389,
    createElement: $37bf4dbb901cf968$export$c8a8987d4410bf2d,
    createContext: $37bf4dbb901cf968$export$fd42f52fd3ae1109,
    createFactory: $6e79363961f7953d$export$d38cd72104c1f0e9,
    cloneElement: $6e79363961f7953d$export$e530037191fcd5d7,
    createRef: $37bf4dbb901cf968$export$7d1e3a5e95ceca43,
    Fragment: $37bf4dbb901cf968$export$ffb0004e005737fa,
    isValidElement: $6e79363961f7953d$export$a8257692ac88316c,
    findDOMNode: $6e79363961f7953d$export$466bfc07425424d5,
    Component: $37bf4dbb901cf968$export$16fa2f45be04daa8,
    PureComponent: $6e79363961f7953d$export$221d75b3f55bb0bd,
    memo: $6e79363961f7953d$export$7c73462e0d25e514,
    forwardRef: $6e79363961f7953d$export$257a8862b851cb5b,
    flushSync: $6e79363961f7953d$export$cd75ccfd720a3cd4,
    unstable_batchedUpdates: $6e79363961f7953d$export$c78a37762a8d58e1,
    StrictMode: $37bf4dbb901cf968$export$ffb0004e005737fa,
    Suspense: $6e79363961f7953d$export$74bf444e3cd11ea5,
    SuspenseList: $6e79363961f7953d$export$998bcd577473dd93,
    lazy: $6e79363961f7953d$export$488013bae63b21da,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $6e79363961f7953d$export$ae55be85d98224ed
};




const $a1f824355e2c872c$var$THEME_ICONS = {
    light: 'outline',
    dark: 'solid'
};
class $a1f824355e2c872c$export$2e2bcd8739ae039 extends $6e79363961f7953d$export$221d75b3f55bb0bd {
    constructor(){
        super();
        this.categories = $c1e62b87224e1434$export$2d0294657ab35f1b.categories.filter((category)=>{
            return !category.target;
        });
        this.state = {
            categoryId: this.categories[0].id
        };
    }
    renderIcon(category) {
        const { icon: icon  } = category;
        if (icon) {
            if (icon.svg) return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("span", {
                class: "flex",
                dangerouslySetInnerHTML: {
                    __html: icon.svg
                }
            }));
            if (icon.src) return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("img", {
                src: icon.src
            }));
        }
        const categoryIcons = $3fd138be9fa32d17$export$2e2bcd8739ae039.categories[category.id] || $3fd138be9fa32d17$export$2e2bcd8739ae039.categories.custom;
        const style = this.props.icons == 'auto' ? $a1f824355e2c872c$var$THEME_ICONS[this.props.theme] : this.props.icons;
        return categoryIcons[style] || categoryIcons;
    }
    render() {
        let selectedCategoryIndex = null;
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("nav", {
            id: "nav",
            class: "padding",
            "data-position": this.props.position,
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                class: "flex relative",
                children: [
                    this.categories.map((category, i)=>{
                        const title = category.name || $c1e62b87224e1434$export$dbe3113d60765c1a.categories[category.id];
                        const selected = !this.props.unfocused && category.id == this.state.categoryId;
                        if (selected) selectedCategoryIndex = i;
                        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("button", {
                            "aria-label": title,
                            "aria-selected": selected || undefined,
                            title: title,
                            type: "button",
                            class: "flex flex-grow flex-center",
                            onClick: ()=>{
                                this.props.onClick({
                                    category: category,
                                    i: i
                                });
                            },
                            children: this.renderIcon(category)
                        }));
                    }),
                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                        class: "bar",
                        style: {
                            width: `${100 / this.categories.length}%`,
                            opacity: selectedCategoryIndex == null ? 0 : 1,
                            transform: `translateX(${selectedCategoryIndex * 100}%)`
                        }
                    })
                ]
            })
        }));
    }
}





class $b3371907fa078e83$export$2e2bcd8739ae039 extends $6e79363961f7953d$export$221d75b3f55bb0bd {
    shouldComponentUpdate(nextProps) {
        for(let k in nextProps){
            if (k == 'children') continue;
            if (nextProps[k] != this.props[k]) return true;
        }
        return false;
    }
    render() {
        return this.props.children;
    }
}




const $d3aee0f1cd051b25$var$Performance = {
    rowsPerRender: 10
};
class $d3aee0f1cd051b25$export$2e2bcd8739ae039 extends $37bf4dbb901cf968$export$16fa2f45be04daa8 {
    constructor(props){
        super();
        this.state = {
            pos: [
                -1,
                -1
            ],
            skin: $f0491e8c6c78eca1$export$2e2bcd8739ae039.get('skin') || props.skin,
            theme: this.initTheme(props.theme),
            visibleRows: {
                0: true
            }
        };
    }
    componentWillMount() {
        const { categories: categories  } = $c1e62b87224e1434$export$2d0294657ab35f1b;
        this.refs = {
            categories: new Map(),
            menu: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
            navigation: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
            scroll: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
            search: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
            searchInput: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
            skinToneButton: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
            skinToneRadio: $37bf4dbb901cf968$export$7d1e3a5e95ceca43()
        };
        this.grid = [];
        this.grid.setsize = 0;
        const addRow = (rows, category)=>{
            const row = [];
            row.__categoryId = category.id;
            row.__index = rows.length;
            this.grid.push(row);
            const rowIndex = this.grid.length - 1;
            const rowRef = rowIndex % $d3aee0f1cd051b25$var$Performance.rowsPerRender ? {
            } : $37bf4dbb901cf968$export$7d1e3a5e95ceca43();
            rowRef.index = rowIndex;
            rowRef.posinset = this.grid.setsize + 1;
            rows.push(rowRef);
            return row;
        };
        for (let category1 of categories){
            const rows = [];
            let row = addRow(rows, category1);
            for (let emoji of category1.emojis){
                if (row.length == this.props.perLine) row = addRow(rows, category1);
                this.grid.setsize += 1;
                row.push(emoji);
            }
            this.refs.categories.set(category1.id, {
                root: $37bf4dbb901cf968$export$7d1e3a5e95ceca43(),
                rows: rows
            });
        }
    }
    componentDidMount() {
        this.observeCategories();
        this.observeRows();
        this.shadowRoot = this.base.parentNode;
        document.addEventListener('click', this.handleClickOutside);
    }
    initTheme(theme) {
        if (theme != 'auto') return theme;
        const darkMedia = matchMedia('(prefers-color-scheme: dark)');
        if (darkMedia.media.match(/^not/)) return 'light';
        darkMedia.addListener(()=>{
            this.setState({
                theme: darkMedia.matches ? 'dark' : 'light'
            });
        });
        return darkMedia.matches ? 'dark' : 'light';
    }
    handleClickOutside = (e)=>{
        const { element: element  } = this.props;
        if (e.target != element) {
            if (this.state.showSkins) this.closeSkins();
            if (this.props.onClickOutside) this.props.onClickOutside();
        }
    };
    handleBaseClick = (e)=>{
        if (!this.state.showSkins) return;
        if (!e.target.closest('.menu')) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.closeSkins();
        }
    };
    handleBaseKeydown = (e)=>{
        if (!this.state.showSkins) return;
        if (e.key == 'Escape') {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.closeSkins();
        }
    };
    getEmojiByPos([p1, p2]) {
        const grid = this.state.searchResults || this.grid;
        const emoji = grid[p1] && grid[p1][p2];
        if (!emoji) return;
        return $e5b3eca3857ee771$export$2e2bcd8739ae039.get(emoji);
    }
    observeCategories() {
        const navigation = this.refs.navigation.current;
        if (!navigation) return;
        const visibleCategories = new Map();
        const setFocusedCategory = (categoryId)=>{
            if (categoryId != navigation.state.categoryId) navigation.setState({
                categoryId: categoryId
            });
        };
        const observerOptions = {
            root: this.refs.scroll.current,
            threshold: [
                0,
                1
            ]
        };
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const id = entry.target.dataset.id;
                visibleCategories.set(id, entry.intersectionRatio);
            }
            const ratios = [
                ...visibleCategories
            ];
            const lastCategory = ratios[ratios.length - 1];
            if (lastCategory[1] == 1) return setFocusedCategory(lastCategory[0]);
            for (const [id, ratio] of ratios)if (ratio) {
                setFocusedCategory(id);
                break;
            }
        }, observerOptions);
        for (const { root: root  } of this.refs.categories.values())observer.observe(root.current);
    }
    observeRows() {
        const visibleRows = {
            ...this.state.visibleRows
        };
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const index = parseInt(entry.target.dataset.index);
                if (entry.isIntersecting) visibleRows[index] = true;
                else delete visibleRows[index];
            }
            this.setState({
                visibleRows: visibleRows
            });
        }, {
            root: this.refs.scroll.current,
            rootMargin: `${this.props.emojiButtonSize * ($d3aee0f1cd051b25$var$Performance.rowsPerRender + 5)}px 0px ${this.props.emojiButtonSize * $d3aee0f1cd051b25$var$Performance.rowsPerRender}px`
        });
        for (const { rows: rows  } of this.refs.categories.values()){
            for (const row of rows)if (row.current) observer.observe(row.current);
        }
    }
    preventDefault(e) {
        e.preventDefault();
    }
    handleSearchClick = ()=>{
        const emoji = this.getEmojiByPos(this.state.pos);
        if (!emoji) return;
        this.setState({
            pos: [
                -1,
                -1
            ]
        });
    };
    handleSearchInput = async ()=>{
        const input = this.refs.searchInput.current;
        if (!input) return;
        const { value: value  } = input;
        const searchResults = await $e5b3eca3857ee771$export$2e2bcd8739ae039.search(value);
        const afterRender = ()=>{
            if (!this.refs.scroll.current) return;
            this.refs.scroll.current.scrollTop = 0;
        };
        if (!searchResults) return this.setState({
            searchResults: searchResults,
            pos: [
                -1,
                -1
            ]
        }, afterRender);
        const pos = input.selectionStart == input.value.length ? [
            0,
            0
        ] : [
            -1,
            -1
        ];
        const grid = [];
        grid.setsize = searchResults.length;
        let row = null;
        for (let emoji of searchResults){
            if (!grid.length || row.length == this.props.perLine) {
                row = [];
                row.__categoryId = 'search';
                row.__index = grid.length;
                grid.push(row);
            }
            row.push(emoji);
        }
        this.ignoreMouse();
        this.setState({
            searchResults: grid,
            pos: pos
        }, afterRender);
    };
    handleSearchKeyDown = (e)=>{
        // const specialKey = e.altKey || e.ctrlKey || e.metaKey
        const input = e.currentTarget;
        e.stopImmediatePropagation();
        switch(e.key){
            case 'ArrowLeft':
                // if (specialKey) return
                // e.preventDefault()
                this.navigate({
                    e: e,
                    input: input,
                    left: true
                });
                break;
            case 'ArrowRight':
                // if (specialKey) return
                // e.preventDefault()
                this.navigate({
                    e: e,
                    input: input,
                    right: true
                });
                break;
            case 'ArrowUp':
                // if (specialKey) return
                // e.preventDefault()
                this.navigate({
                    e: e,
                    input: input,
                    up: true
                });
                break;
            case 'ArrowDown':
                // if (specialKey) return
                // e.preventDefault()
                this.navigate({
                    e: e,
                    input: input,
                    down: true
                });
                break;
            case 'Enter':
                e.preventDefault();
                this.handleEmojiClick({
                    pos: this.state.pos
                });
                break;
            case 'Escape':
                e.preventDefault();
                if (this.state.searchResults) this.clearSearch();
                else this.unfocusSearch();
                break;
            default:
                break;
        }
    };
    clearSearch = ()=>{
        const input = this.refs.searchInput.current;
        if (!input) return;
        input.value = '';
        input.focus();
        this.handleSearchInput();
    };
    unfocusSearch() {
        const input = this.refs.searchInput.current;
        if (!input) return;
        input.blur();
    }
    navigate({ e: e , input: input , left: left , right: right , up: up , down: down  }) {
        const grid = this.state.searchResults || this.grid;
        if (!grid.length) return;
        let [p1, p2] = this.state.pos;
        const pos = (()=>{
            if (p1 == 0) {
                if (p2 == 0 && !e.repeat && (left || up)) return null;
            }
            if (p1 == -1) {
                if (!e.repeat && (right || down) && input.selectionStart == input.value.length) return [
                    0,
                    0
                ];
                return null;
            }
            if (left || right) {
                let row = grid[p1];
                const increment = left ? -1 : 1;
                p2 += increment;
                if (!row[p2]) {
                    p1 += increment;
                    row = grid[p1];
                    if (!row) {
                        p1 = left ? 0 : grid.length - 1;
                        p2 = left ? 0 : grid[p1].length - 1;
                        return [
                            p1,
                            p2
                        ];
                    }
                    p2 = left ? row.length - 1 : 0;
                }
                return [
                    p1,
                    p2
                ];
            }
            if (up || down) {
                p1 += up ? -1 : 1;
                const row = grid[p1];
                if (!row) {
                    p1 = up ? 0 : grid.length - 1;
                    p2 = up ? 0 : grid[p1].length - 1;
                    return [
                        p1,
                        p2
                    ];
                }
                if (!row[p2]) p2 = row.length - 1;
                return [
                    p1,
                    p2
                ];
            }
        })();
        if (pos) e.preventDefault();
        else {
            if (this.state.pos[0] > -1) this.setState({
                pos: [
                    -1,
                    -1
                ]
            });
            return;
        }
        this.setState({
            pos: pos,
            keyboard: true
        }, ()=>{
            this.scrollTo({
                row: pos[0]
            });
        });
    }
    scrollTo({ categoryId: categoryId , row: row  }) {
        const grid = this.state.searchResults || this.grid;
        if (!grid.length) return;
        const scroll = this.refs.scroll.current;
        const scrollRect = scroll.getBoundingClientRect();
        let scrollTop = 0;
        if (row >= 0) categoryId = grid[row].__categoryId;
        if (categoryId) {
            const ref = this.refs[categoryId] || this.refs.categories.get(categoryId).root;
            const categoryRect = ref.current.getBoundingClientRect();
            scrollTop = categoryRect.top - (scrollRect.top - scroll.scrollTop) + 1;
        }
        if (row >= 0) {
            if (!row) scrollTop = 0;
            else {
                const rowIndex = grid[row].__index;
                const rowTop = scrollTop + rowIndex * this.props.emojiButtonSize;
                const rowBot = rowTop + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
                if (rowTop < scroll.scrollTop) scrollTop = rowTop;
                else if (rowBot > scroll.scrollTop + scrollRect.height) scrollTop = rowBot - scrollRect.height;
                else return;
            }
        }
        this.ignoreMouse();
        scroll.scrollTop = scrollTop;
    }
    ignoreMouse() {
        this.mouseIsIgnored = true;
        clearTimeout(this.ignoreMouseTimer);
        this.ignoreMouseTimer = setTimeout(()=>{
            delete this.mouseIsIgnored;
        }, 100);
    }
    handleCategoryClick = ({ category: category , i: i  })=>{
        this.scrollTo(i == 0 ? {
            row: -1
        } : {
            categoryId: category.id
        });
    };
    handleEmojiOver(pos) {
        if (this.mouseIsIgnored || this.state.showSkins) return;
        this.setState({
            pos: pos || [
                -1,
                -1
            ],
            keyboard: false
        });
    }
    handleEmojiClick({ emoji: emoji , pos: pos  }) {
        if (!this.props.onEmojiSelect) return;
        if (!emoji && pos) emoji = this.getEmojiByPos(pos);
        if (emoji) {
            const skin = emoji.skins[this.state.skin - 1] || emoji.skins[0];
            const emojiData = {
                id: emoji.id,
                name: emoji.name,
                native: skin.native,
                unified: skin.unified,
                keywords: emoji.keywords,
                shortcodes: skin.shortcodes || emoji.shortcodes
            };
            if (skin.src) emojiData.src = skin.src;
            if (emoji.aliases && emoji.aliases.length) emojiData.aliases = emoji.aliases;
            if (emoji.emoticons && emoji.emoticons.length) emojiData.emoticons = emoji.emoticons;
            if (this.props.maxFrequentRows) $801ea98b88209a78$export$2e2bcd8739ae039.add(emojiData, this.props);
            this.props.onEmojiSelect(emojiData);
        }
    }
    openSkins = (e)=>{
        const { currentTarget: currentTarget  } = e;
        const rect = currentTarget.getBoundingClientRect();
        this.setState({
            showSkins: rect
        }, async ()=>{
            // Firefox requires 2 frames for the transition to consistenly work
            await $6ada31a5f156f75f$export$e772c8ff12451969(2);
            const menu = this.refs.menu.current;
            if (!menu) return;
            menu.classList.remove('hidden');
            this.refs.skinToneRadio.current.focus();
            this.base.addEventListener('click', this.handleBaseClick, true);
            this.base.addEventListener('keydown', this.handleBaseKeydown, true);
        });
    };
    closeSkins() {
        if (!this.state.showSkins) return;
        this.setState({
            showSkins: null,
            tempSkin: null
        });
        this.base.removeEventListener('click', this.handleBaseClick);
        this.base.removeEventListener('keydown', this.handleBaseKeydown);
    }
    handleSkinMouseOver(tempSkin) {
        this.setState({
            tempSkin: tempSkin
        });
    }
    handleSkinClick(skin) {
        this.ignoreMouse();
        this.closeSkins();
        this.setState({
            skin: skin,
            tempSkin: null
        });
        $f0491e8c6c78eca1$export$2e2bcd8739ae039.set('skin', skin);
    }
    renderNav() {
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b($a1f824355e2c872c$export$2e2bcd8739ae039, {
            ref: this.refs.navigation,
            icons: this.props.icons,
            theme: this.state.theme,
            unfocused: !!this.state.searchResults,
            position: this.props.navPosition,
            onClick: this.handleCategoryClick
        }));
    }
    renderPreview() {
        const emoji = this.getEmojiByPos(this.state.pos);
        const noSearchResults = this.state.searchResults && !this.state.searchResults.length;
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
            id: "preview",
            class: "flex flex-middle",
            "data-position": this.props.previewPosition,
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    class: "flex flex-middle flex-grow",
                    children: [
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                            class: "flex flex-auto flex-middle flex-center",
                            style: {
                                height: this.props.emojiButtonSize,
                                fontSize: this.props.emojiButtonSize
                            },
                            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b($f10978095cbef290$export$2e2bcd8739ae039, {
                                emoji: emoji,
                                id: noSearchResults ? this.props.noResultsEmoji || 'cry' : this.props.previewEmoji || (this.props.previewPosition == 'top' ? 'point_down' : 'point_up'),
                                set: this.props.set,
                                size: this.props.emojiButtonSize,
                                skin: this.state.tempSkin || this.state.skin,
                                spritesheet: true
                            })
                        }),
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                            class: "margin-l",
                            children: emoji ? /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                class: "padding-r",
                                children: [
                                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis",
                                        style: {
                                            fontSize: '1.1em'
                                        },
                                        children: emoji.name
                                    }),
                                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis color-c",
                                        style: {
                                            fontSize: '.9em'
                                        },
                                        children: emoji.skins[0].shortcodes
                                    })
                                ]
                            }) : noSearchResults ? /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                class: "padding-r",
                                children: [
                                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis",
                                        style: {
                                            fontSize: '1.1em'
                                        },
                                        children: $c1e62b87224e1434$export$dbe3113d60765c1a.search_no_results_1
                                    }),
                                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                        class: "ellipsis color-c",
                                        style: {
                                            fontSize: '.9em'
                                        },
                                        children: $c1e62b87224e1434$export$dbe3113d60765c1a.search_no_results_2
                                    })
                                ]
                            }) : /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                class: "color-c",
                                style: {
                                    fontSize: 21
                                },
                                children: $c1e62b87224e1434$export$dbe3113d60765c1a.pick
                            })
                        })
                    ]
                }),
                !emoji && this.renderSkinToneButton()
            ]
        }));
    }
    renderEmojiButton(emoji, { pos: pos , posinset: posinset , grid: grid  }) {
        const size = this.props.emojiButtonSize;
        const skin = this.state.tempSkin || this.state.skin;
        const emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
        const native = emojiSkin.native;
        const selected = $6ada31a5f156f75f$export$9cb4719e2e525b7a(this.state.pos, pos);
        const key = pos.concat(emoji.id).join('');
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b($b3371907fa078e83$export$2e2bcd8739ae039, {
            selected: selected,
            skin: skin,
            size: size,
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("button", {
                "aria-label": native,
                "aria-selected": selected || undefined,
                "aria-posinset": posinset,
                "aria-setsize": grid.setsize,
                "data-keyboard": this.state.keyboard,
                title: this.props.previewPosition == 'none' ? emoji.name : undefined,
                type: "button",
                class: "flex flex-center flex-middle",
                tabindex: "-1",
                onClick: ()=>this.handleEmojiClick({
                        emoji: emoji
                    })
                ,
                onMouseEnter: ()=>this.handleEmojiOver(pos)
                ,
                onMouseLeave: ()=>this.handleEmojiOver()
                ,
                style: {
                    width: this.props.emojiButtonSize,
                    height: this.props.emojiButtonSize,
                    fontSize: this.props.emojiSize,
                    lineHeight: 0
                },
                children: [
                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                        "aria-hidden": "true",
                        class: "background",
                        style: {
                            borderRadius: this.props.emojiButtonRadius,
                            backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(posinset - 1) % this.props.emojiButtonColors.length] : undefined
                        }
                    }),
                    /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b($f10978095cbef290$export$2e2bcd8739ae039, {
                        emoji: emoji,
                        set: this.props.set,
                        size: this.props.emojiSize,
                        skin: skin,
                        spritesheet: true
                    })
                ]
            })
        }, key));
    }
    renderSearch() {
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    class: "spacer"
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    class: "flex flex-middle",
                    children: [
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                            class: "search relative flex-grow",
                            children: [
                                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("input", {
                                    type: "search",
                                    autoFocus: this.props.autoFocus,
                                    ref: this.refs.searchInput,
                                    placeholder: $c1e62b87224e1434$export$dbe3113d60765c1a.search,
                                    onClick: this.handleSearchClick,
                                    onInput: this.handleSearchInput,
                                    onKeyDown: this.handleSearchKeyDown
                                }),
                                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("span", {
                                    class: "icon loupe flex",
                                    children: $3fd138be9fa32d17$export$2e2bcd8739ae039.search.loupe
                                }),
                                this.state.searchResults && /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("button", {
                                    title: "Clear",
                                    "aria-label": "Clear",
                                    type: "button",
                                    class: "icon delete flex",
                                    onClick: this.clearSearch,
                                    onMouseDown: this.preventDefault,
                                    children: $3fd138be9fa32d17$export$2e2bcd8739ae039.search.delete
                                })
                            ]
                        }),
                        this.props.previewPosition == 'none' && this.renderSkinToneButton()
                    ]
                })
            ]
        }));
    }
    renderSearchResults() {
        const { searchResults: searchResults  } = this.state;
        if (!searchResults) return null;
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
            class: "category",
            ref: this.refs.search,
            children: [
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    class: "sticky padding-small",
                    children: $c1e62b87224e1434$export$dbe3113d60765c1a.categories.search
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    children: !searchResults.length ? /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                        class: "padding-small",
                        children: this.props.onAddCustomEmoji && /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("a", {
                            onClick: this.props.onAddCustomEmoji,
                            children: $c1e62b87224e1434$export$dbe3113d60765c1a.add_custom
                        })
                    }) : searchResults.map((row, i)=>{
                        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                            class: "flex",
                            children: row.map((emoji, ii)=>{
                                return this.renderEmojiButton(emoji, {
                                    pos: [
                                        i,
                                        ii
                                    ],
                                    posinset: i * this.props.perLine + ii + 1,
                                    grid: searchResults
                                });
                            })
                        }));
                    })
                })
            ]
        }));
    }
    renderCategories() {
        const { categories: categories  } = $c1e62b87224e1434$export$2d0294657ab35f1b;
        const hidden = !!this.state.searchResults;
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
            style: {
                visibility: hidden ? 'hidden' : undefined,
                display: hidden ? 'none' : undefined
            },
            children: categories.map((category)=>{
                const { root: root , rows: rows  } = this.refs.categories.get(category.id);
                return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    "data-id": category.target ? category.target.id : category.id,
                    class: "category",
                    ref: root,
                    children: [
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                            class: "sticky padding-small",
                            children: category.name || $c1e62b87224e1434$export$dbe3113d60765c1a.categories[category.id]
                        }),
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                            class: "relative",
                            style: {
                                height: rows.length * this.props.emojiButtonSize
                            },
                            children: rows.map((row, i)=>{
                                const targetRow = row.index - row.index % $d3aee0f1cd051b25$var$Performance.rowsPerRender;
                                const visible = this.state.visibleRows[targetRow];
                                const ref = 'current' in row ? row : undefined;
                                if (!visible && !ref) return null;
                                const start = i * this.props.perLine;
                                const end = start + this.props.perLine;
                                const emojiIds = category.emojis.slice(start, end);
                                return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                    "data-index": row.index,
                                    ref: ref,
                                    class: "flex row",
                                    style: {
                                        top: i * this.props.emojiButtonSize
                                    },
                                    children: visible && emojiIds.map((emojiId, ii)=>{
                                        const emoji = $e5b3eca3857ee771$export$2e2bcd8739ae039.get(emojiId);
                                        return this.renderEmojiButton(emoji, {
                                            pos: [
                                                row.index,
                                                ii
                                            ],
                                            posinset: row.posinset + ii,
                                            grid: this.grid
                                        });
                                    })
                                }, row.index));
                            })
                        })
                    ]
                }));
            })
        }));
    }
    renderSkinToneButton() {
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
            class: "flex flex-auto flex-center flex-middle",
            style: {
                position: 'relative',
                width: this.props.emojiButtonSize,
                height: this.props.emojiButtonSize
            },
            children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("button", {
                type: "button",
                ref: this.refs.skinToneButton,
                class: "skin-tone-button flex flex-auto flex-center flex-middle",
                "aria-selected": this.state.showSkins ? '' : undefined,
                "aria-label": $c1e62b87224e1434$export$dbe3113d60765c1a.skins.choose,
                title: $c1e62b87224e1434$export$dbe3113d60765c1a.skins.choose,
                onClick: this.openSkins,
                style: {
                    width: this.props.emojiSize,
                    height: this.props.emojiSize
                },
                children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("span", {
                    class: `skin-tone skin-tone-${this.state.skin}`
                })
            })
        }));
    }
    renderSkins() {
        const skinToneButton = this.refs.skinToneButton.current;
        const skinToneButtonRect = skinToneButton.getBoundingClientRect();
        const baseRect = this.base.getBoundingClientRect();
        const position = {
            right: baseRect.right - skinToneButtonRect.right - 3
        };
        if (this.props.previewPosition == 'bottom') position.bottom = baseRect.bottom - skinToneButtonRect.top + 6;
        else {
            position.top = skinToneButtonRect.bottom - baseRect.top + 3;
            position.bottom = 'auto';
        }
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
            ref: this.refs.menu,
            role: "radiogroup",
            "aria-label": $c1e62b87224e1434$export$dbe3113d60765c1a.skins.choose,
            class: "menu hidden",
            "data-position": position.top ? 'top' : 'bottom',
            style: position,
            children: [
                ...Array(6).keys()
            ].map((i)=>{
                const skin = i + 1;
                const checked = this.state.skin == skin;
                return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    children: [
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("input", {
                            type: "radio",
                            name: "skin-tone",
                            value: skin,
                            "aria-label": $c1e62b87224e1434$export$dbe3113d60765c1a.skins[skin],
                            ref: checked ? this.refs.skinToneRadio : null,
                            defaultChecked: checked,
                            onChange: ()=>this.handleSkinMouseOver(skin)
                            ,
                            onKeyDown: (e)=>{
                                if (e.code == 'Enter' || e.code == 'Space' || e.code == 'Tab') {
                                    e.preventDefault();
                                    this.handleSkinClick(skin);
                                }
                            }
                        }),
                        /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("button", {
                            "aria-hidden": "true",
                            tabindex: "-1",
                            onClick: ()=>this.handleSkinClick(skin)
                            ,
                            onMouseEnter: ()=>this.handleSkinMouseOver(skin)
                            ,
                            onMouseLeave: ()=>this.handleSkinMouseOver()
                            ,
                            class: "option flex flex-grow flex-middle",
                            children: [
                                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("span", {
                                    class: `skin-tone skin-tone-${skin}`
                                }),
                                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("span", {
                                    class: "margin-small-lr",
                                    children: $c1e62b87224e1434$export$dbe3113d60765c1a.skins[skin]
                                })
                            ]
                        })
                    ]
                }));
            })
        }));
    }
    render() {
        return(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("section", {
            id: "root",
            class: "flex flex-column",
            style: {
                width: this.props.perLine * this.props.emojiButtonSize + 28
            },
            "data-emoji-set": this.props.set,
            "data-theme": this.state.theme,
            "data-menu": this.state.showSkins ? '' : undefined,
            children: [
                this.props.previewPosition == 'top' && this.renderPreview(),
                this.props.navPosition == 'top' && this.renderNav(),
                this.props.stickySearch && /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    class: "padding-lr",
                    children: this.renderSearch()
                }),
                /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                    ref: this.refs.scroll,
                    class: "scroll flex-grow padding-lr",
                    children: /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                        style: {
                            width: this.props.perLine * this.props.emojiButtonSize
                        },
                        children: [
                            !this.props.stickySearch && this.renderSearch(),
                            this.renderSearchResults(),
                            this.renderCategories(),
                            /*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b("div", {
                                class: "spacer"
                            })
                        ]
                    })
                }),
                this.props.navPosition == 'bottom' && this.renderNav(),
                this.props.previewPosition == 'bottom' && this.renderPreview(),
                this.state.showSkins && this.renderSkins()
            ]
        }));
    }
}







class $804b2fddf439a899$export$2e2bcd8739ae039 extends $45a2c0f5a7f6356f$export$2e2bcd8739ae039 {
    constructor(props){
        super(props, {
            styles: (/*@__PURE__*/$parcel$interopDefault($7261a5009abd3d66$exports))
        });
    }
    async connectedCallback() {
        const pickerProps = await $c1e62b87224e1434$export$2cd8252107eb640b(this.props, this);
        const { onEmojiSelect: onEmojiSelect , onClickOutside: onClickOutside , onAddCustomEmoji: onAddCustomEmoji  } = this.props;
        const props = {
            ...pickerProps,
            element: this,
            onEmojiSelect: onEmojiSelect,
            onClickOutside: onClickOutside,
            onAddCustomEmoji: onAddCustomEmoji
        };
        $37bf4dbb901cf968$export$b3890eb0ae9dca99(/*#__PURE__*/ $80ee491bbcca91f4$export$34b9dba7ce09269b($d3aee0f1cd051b25$export$2e2bcd8739ae039, {
            ...props
        }), this.shadowRoot);
    }
}
if (!customElements.get('em-emoji-picker')) customElements.define('em-emoji-picker', $804b2fddf439a899$export$2e2bcd8739ae039);


var $7261a5009abd3d66$exports = {};
$7261a5009abd3d66$exports = ":host {\n  display: flex;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  --font-size: 15px;\n  --shadow-color: 0deg 0% 0%;\n  --shadow:\n    0.3px 0.5px 2.7px hsl(var(--shadow-color) / 0.14),\n    0.4px 0.8px 1px -3.2px hsl(var(--shadow-color) / 0.14),\n    1px 2px 2.5px -4.5px hsl(var(--shadow-color) / 0.14);\n}\n\n[data-theme=light] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=dark] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, .0, .2, 1);\n  position: relative;\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: 0 0 auto;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: 1 1 auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n.scroll {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-right: 0;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: -1px;\n  font-weight: 500;\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size) - 1px);\n}\n\n.search input[type=search] {\n  display: block;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 10px 2em 10px 2.2em;\n  border-radius: 10px;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n}\n\n.search input[type=search]::-moz-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]::placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search], .search input[type=search]::-webkit-search-decoration, .search input[type=search]::-webkit-search-cancel-button, .search input[type=search]::-webkit-search-results-button, .search input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n          appearance: none;\n}\n\n.search input[type=search]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, 0.2);\n}\n\n.search .icon {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  color: rgba(var(--em-rgb-color), 0.7);\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  left: 0.7em;\n  pointer-events: none;\n}\n\n.search .delete {\n  right: 0.7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  border: 0;\n  background-color: transparent;\n}\n\n#nav {\n  z-index: 2;\n  position: relative;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav .bar {\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  border-radius: 3px 3px 0 0;\n  transition: transform var(--duration) var(--easing);\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  position: relative;\n  padding: calc(var(--padding) + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n}\n\n#nav:before, #preview:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n\n#nav[data-position=top]:before, #preview[data-position=top]:before {\n  top: 100%;\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n}\n\n#nav[data-position=bottom]:before, #preview[data-position=bottom]:before {\n  bottom: 100%;\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n}\n\n.category button {\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0ms;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.skin-tone-button {\n  border-radius: 100%;\n  border: 1px solid transparent;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(0.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  border-left-width: 0;\n  border-right-width: 0;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  border-bottom-color: transparent;\n  background-color: var(--em-color-border);\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(0.9);\n}\n\n.menu {\n  z-index: 2;\n  position: absolute;\n  white-space: nowrap;\n  padding: 4px;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=bottom] {\n  transform-origin: bottom right;\n}\n\n.menu[data-position=bottom].hidden {\n  transform: scale(0.9) rotate(-3deg) translateY(5%);\n}\n\n.menu[data-position=top] {\n  transform-origin: top right;\n}\n\n.menu[data-position=top].hidden {\n  transform: scale(0.9) rotate(3deg) translateY(-5%);\n}\n\n.menu input[type=radio] {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.menu input[type=radio]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  padding: 4px 6px;\n  border-radius: 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  mix-blend-mode: overlay;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-emoji-set=twitter] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.5);\n  box-shadow: none;\n}\n\n[data-emoji-set=twitter] .skin-tone-1 {\n  background-color: #FADE72;\n}\n\n[data-emoji-set=twitter] .skin-tone-2 {\n  background-color: #F3DFD0;\n}\n\n[data-emoji-set=twitter] .skin-tone-3 {\n  background-color: #EED3A8;\n}\n\n[data-emoji-set=twitter] .skin-tone-4 {\n  background-color: #CFAD8D;\n}\n\n[data-emoji-set=twitter] .skin-tone-5 {\n  background-color: #A8805D;\n}\n\n[data-emoji-set=twitter] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=google] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.4);\n}\n\n[data-emoji-set=google] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=google] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=google] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=google] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=google] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=google] .skin-tone-6 {\n  background-color: #61493F;\n}\n\n[data-emoji-set=facebook] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=facebook] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=facebook] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=facebook] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=facebook] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=facebook] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=facebook] .skin-tone-6 {\n  background-color: #61493F;\n}\n";









export {$804b2fddf439a899$export$2e2bcd8739ae039 as Picker, $a21ae9abcdd88763$export$2e2bcd8739ae039 as Emoji, $e5b3eca3857ee771$export$2e2bcd8739ae039 as SearchIndex, $f0491e8c6c78eca1$export$2e2bcd8739ae039 as Store, $c1e62b87224e1434$export$2cd8252107eb640b as init, $c1e62b87224e1434$export$2d0294657ab35f1b as Data, $c1e62b87224e1434$export$dbe3113d60765c1a as I18n};
//# sourceMappingURL=index.js.map
