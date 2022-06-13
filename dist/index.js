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


var $6a99616f268f5a38$exports = {};
$6a99616f268f5a38$exports = JSON.parse("{\"categories\":[{\"id\":\"people\",\"emojis\":[\"grinning\",\"smiley\",\"smile\",\"grin\",\"laughing\",\"sweat_smile\",\"rolling_on_the_floor_laughing\",\"joy\",\"slightly_smiling_face\",\"upside_down_face\",\"wink\",\"blush\",\"innocent\",\"heart_eyes\",\"kissing_heart\",\"kissing\",\"relaxed\",\"kissing_closed_eyes\",\"kissing_smiling_eyes\",\"yum\",\"stuck_out_tongue\",\"stuck_out_tongue_winking_eye\",\"stuck_out_tongue_closed_eyes\",\"money_mouth_face\",\"hugging_face\",\"thinking_face\",\"zipper_mouth_face\",\"neutral_face\",\"expressionless\",\"no_mouth\",\"smirk\",\"unamused\",\"face_with_rolling_eyes\",\"grimacing\",\"lying_face\",\"relieved\",\"pensive\",\"sleepy\",\"drooling_face\",\"sleeping\",\"mask\",\"face_with_thermometer\",\"face_with_head_bandage\",\"nauseated_face\",\"sneezing_face\",\"dizzy_face\",\"face_with_cowboy_hat\",\"sunglasses\",\"nerd_face\",\"confused\",\"worried\",\"slightly_frowning_face\",\"white_frowning_face\",\"open_mouth\",\"hushed\",\"astonished\",\"flushed\",\"frowning\",\"anguished\",\"fearful\",\"cold_sweat\",\"disappointed_relieved\",\"cry\",\"sob\",\"scream\",\"confounded\",\"persevere\",\"disappointed\",\"sweat\",\"weary\",\"tired_face\",\"triumph\",\"rage\",\"angry\",\"smiling_imp\",\"imp\",\"skull\",\"skull_and_crossbones\",\"hankey\",\"clown_face\",\"japanese_ogre\",\"japanese_goblin\",\"ghost\",\"alien\",\"space_invader\",\"robot_face\",\"smiley_cat\",\"smile_cat\",\"joy_cat\",\"heart_eyes_cat\",\"smirk_cat\",\"kissing_cat\",\"scream_cat\",\"crying_cat_face\",\"pouting_cat\",\"see_no_evil\",\"hear_no_evil\",\"speak_no_evil\",\"kiss\",\"love_letter\",\"cupid\",\"gift_heart\",\"sparkling_heart\",\"heartpulse\",\"heartbeat\",\"revolving_hearts\",\"two_hearts\",\"heart_decoration\",\"heavy_heart_exclamation_mark_ornament\",\"broken_heart\",\"heart\",\"yellow_heart\",\"green_heart\",\"blue_heart\",\"wave\",\"raised_back_of_hand\",\"raised_hand_with_fingers_splayed\",\"hand\",\"spock-hand\",\"ok_hand\",\"v\",\"crossed_fingers\",\"the_horns\",\"call_me_hand\",\"point_left\",\"point_right\",\"point_up_2\",\"middle_finger\",\"point_down\",\"point_up\",\"+1\",\"-1\",\"fist\",\"facepunch\",\"left-facing_fist\",\"right-facing_fist\",\"clap\",\"raised_hands\",\"open_hands\",\"handshake\",\"pray\",\"writing_hand\",\"nail_care\",\"selfie\",\"muscle\",\"ear\",\"nose\",\"eyes\",\"eye\",\"tongue\",\"lips\",\"baby\",\"boy\",\"girl\",\"person_with_blond_hair\",\"man\",\"woman\",\"blond-haired-woman\",\"blond-haired-man\",\"older_man\",\"older_woman\",\"person_frowning\",\"man-frowning\",\"woman-frowning\",\"person_with_pouting_face\",\"man-pouting\",\"woman-pouting\",\"no_good\",\"man-gesturing-no\",\"woman-gesturing-no\",\"ok_woman\",\"man-gesturing-ok\",\"woman-gesturing-ok\",\"information_desk_person\",\"man-tipping-hand\",\"woman-tipping-hand\",\"raising_hand\",\"man-raising-hand\",\"woman-raising-hand\",\"bow\",\"man-bowing\",\"woman-bowing\",\"face_palm\",\"man-facepalming\",\"woman-facepalming\",\"shrug\",\"man-shrugging\",\"woman-shrugging\",\"male-doctor\",\"female-doctor\",\"male-student\",\"female-student\",\"male-teacher\",\"female-teacher\",\"male-judge\",\"female-judge\",\"male-farmer\",\"female-farmer\",\"male-cook\",\"female-cook\",\"male-mechanic\",\"female-mechanic\",\"male-factory-worker\",\"female-factory-worker\",\"male-office-worker\",\"female-office-worker\",\"male-scientist\",\"female-scientist\",\"male-technologist\",\"female-technologist\",\"male-singer\",\"female-singer\",\"male-artist\",\"female-artist\",\"male-pilot\",\"female-pilot\",\"male-astronaut\",\"female-astronaut\",\"male-firefighter\",\"female-firefighter\",\"cop\",\"male-police-officer\",\"female-police-officer\",\"sleuth_or_spy\",\"male-detective\",\"female-detective\",\"guardsman\",\"male-guard\",\"female-guard\",\"construction_worker\",\"male-construction-worker\",\"female-construction-worker\",\"prince\",\"princess\",\"man_with_turban\",\"man-wearing-turban\",\"woman-wearing-turban\",\"man_with_gua_pi_mao\",\"person_in_tuxedo\",\"bride_with_veil\",\"pregnant_woman\",\"angel\",\"santa\",\"mrs_claus\",\"massage\",\"man-getting-massage\",\"woman-getting-massage\",\"haircut\",\"man-getting-haircut\",\"woman-getting-haircut\",\"walking\",\"man-walking\",\"woman-walking\",\"runner\",\"man-running\",\"woman-running\",\"dancer\",\"man_dancing\",\"man_in_business_suit_levitating\",\"dancers\",\"men-with-bunny-ears-partying\",\"women-with-bunny-ears-partying\",\"fencer\",\"horse_racing\",\"skier\",\"snowboarder\",\"golfer\",\"man-golfing\",\"woman-golfing\",\"surfer\",\"man-surfing\",\"woman-surfing\",\"rowboat\",\"man-rowing-boat\",\"woman-rowing-boat\",\"swimmer\",\"man-swimming\",\"woman-swimming\",\"person_with_ball\",\"man-bouncing-ball\",\"woman-bouncing-ball\",\"weight_lifter\",\"man-lifting-weights\",\"woman-lifting-weights\",\"bicyclist\",\"man-biking\",\"woman-biking\",\"mountain_bicyclist\",\"man-mountain-biking\",\"woman-mountain-biking\",\"person_doing_cartwheel\",\"man-cartwheeling\",\"woman-cartwheeling\",\"wrestlers\",\"man-wrestling\",\"woman-wrestling\",\"water_polo\",\"man-playing-water-polo\",\"woman-playing-water-polo\",\"handball\",\"man-playing-handball\",\"woman-playing-handball\",\"juggling\",\"man-juggling\",\"woman-juggling\",\"bath\",\"sleeping_accommodation\",\"two_women_holding_hands\",\"man_and_woman_holding_hands\",\"two_men_holding_hands\",\"couplekiss\",\"woman-kiss-man\",\"man-kiss-man\",\"woman-kiss-woman\",\"couple_with_heart\",\"woman-heart-man\",\"man-heart-man\",\"woman-heart-woman\",\"family\",\"man-woman-boy\",\"man-woman-girl\",\"man-woman-girl-boy\",\"man-woman-boy-boy\",\"man-woman-girl-girl\",\"man-man-boy\",\"man-man-girl\",\"man-man-girl-boy\",\"man-man-boy-boy\",\"man-man-girl-girl\",\"woman-woman-boy\",\"woman-woman-girl\",\"woman-woman-girl-boy\",\"woman-woman-boy-boy\",\"woman-woman-girl-girl\",\"man-boy\",\"man-boy-boy\",\"man-girl\",\"man-girl-boy\",\"man-girl-girl\",\"woman-boy\",\"woman-boy-boy\",\"woman-girl\",\"woman-girl-boy\",\"woman-girl-girl\",\"speaking_head_in_silhouette\",\"bust_in_silhouette\",\"busts_in_silhouette\",\"footprints\",\"purple_heart\",\"black_heart\",\"100\",\"anger\",\"boom\",\"dizzy\",\"sweat_drops\",\"dash\",\"hole\",\"bomb\",\"speech_balloon\",\"eye-in-speech-bubble\",\"left_speech_bubble\",\"right_anger_bubble\",\"thought_balloon\",\"zzz\"]},{\"id\":\"nature\",\"emojis\":[\"monkey_face\",\"monkey\",\"gorilla\",\"dog\",\"dog2\",\"poodle\",\"wolf\",\"fox_face\",\"cat\",\"cat2\",\"lion_face\",\"tiger\",\"tiger2\",\"leopard\",\"horse\",\"racehorse\",\"unicorn_face\",\"deer\",\"cow\",\"ox\",\"water_buffalo\",\"cow2\",\"pig\",\"pig2\",\"boar\",\"pig_nose\",\"ram\",\"sheep\",\"goat\",\"dromedary_camel\",\"camel\",\"elephant\",\"rhinoceros\",\"mouse\",\"mouse2\",\"rat\",\"hamster\",\"rabbit\",\"rabbit2\",\"chipmunk\",\"bat\",\"bear\",\"koala\",\"panda_face\",\"feet\",\"turkey\",\"chicken\",\"rooster\",\"hatching_chick\",\"baby_chick\",\"hatched_chick\",\"bird\",\"penguin\",\"dove_of_peace\",\"eagle\",\"duck\",\"owl\",\"frog\",\"crocodile\",\"turtle\",\"lizard\",\"snake\",\"dragon_face\",\"dragon\",\"whale\",\"whale2\",\"dolphin\",\"fish\",\"tropical_fish\",\"blowfish\",\"shark\",\"octopus\",\"shell\",\"snail\",\"butterfly\",\"bug\",\"ant\",\"bee\",\"ladybug\",\"spider\",\"spider_web\",\"scorpion\",\"bouquet\",\"cherry_blossom\",\"white_flower\",\"rosette\",\"rose\",\"wilted_flower\",\"hibiscus\",\"sunflower\",\"blossom\",\"tulip\",\"seedling\",\"evergreen_tree\",\"deciduous_tree\",\"palm_tree\",\"cactus\",\"ear_of_rice\",\"herb\",\"shamrock\",\"four_leaf_clover\",\"maple_leaf\",\"fallen_leaf\",\"leaves\"]},{\"id\":\"foods\",\"emojis\":[\"grapes\",\"melon\",\"watermelon\",\"tangerine\",\"lemon\",\"banana\",\"pineapple\",\"apple\",\"green_apple\",\"pear\",\"peach\",\"cherries\",\"strawberry\",\"kiwifruit\",\"tomato\",\"avocado\",\"eggplant\",\"potato\",\"carrot\",\"corn\",\"hot_pepper\",\"cucumber\",\"mushroom\",\"peanuts\",\"chestnut\",\"bread\",\"croissant\",\"baguette_bread\",\"pancakes\",\"cheese_wedge\",\"meat_on_bone\",\"poultry_leg\",\"bacon\",\"hamburger\",\"fries\",\"pizza\",\"hotdog\",\"taco\",\"burrito\",\"stuffed_flatbread\",\"egg\",\"fried_egg\",\"shallow_pan_of_food\",\"stew\",\"green_salad\",\"popcorn\",\"bento\",\"rice_cracker\",\"rice_ball\",\"rice\",\"curry\",\"ramen\",\"spaghetti\",\"sweet_potato\",\"oden\",\"sushi\",\"fried_shrimp\",\"fish_cake\",\"dango\",\"crab\",\"shrimp\",\"squid\",\"icecream\",\"shaved_ice\",\"ice_cream\",\"doughnut\",\"cookie\",\"birthday\",\"cake\",\"chocolate_bar\",\"candy\",\"lollipop\",\"custard\",\"honey_pot\",\"baby_bottle\",\"glass_of_milk\",\"coffee\",\"tea\",\"sake\",\"champagne\",\"wine_glass\",\"cocktail\",\"tropical_drink\",\"beer\",\"beers\",\"clinking_glasses\",\"tumbler_glass\",\"knife_fork_plate\",\"fork_and_knife\",\"spoon\",\"hocho\",\"amphora\"]},{\"id\":\"activity\",\"emojis\":[\"jack_o_lantern\",\"christmas_tree\",\"fireworks\",\"sparkler\",\"sparkles\",\"balloon\",\"tada\",\"confetti_ball\",\"tanabata_tree\",\"bamboo\",\"dolls\",\"flags\",\"wind_chime\",\"rice_scene\",\"ribbon\",\"gift\",\"reminder_ribbon\",\"admission_tickets\",\"ticket\",\"medal\",\"trophy\",\"sports_medal\",\"first_place_medal\",\"second_place_medal\",\"third_place_medal\",\"soccer\",\"baseball\",\"basketball\",\"volleyball\",\"football\",\"rugby_football\",\"tennis\",\"bowling\",\"cricket_bat_and_ball\",\"field_hockey_stick_and_ball\",\"ice_hockey_stick_and_puck\",\"table_tennis_paddle_and_ball\",\"badminton_racquet_and_shuttlecock\",\"boxing_glove\",\"martial_arts_uniform\",\"goal_net\",\"golf\",\"ice_skate\",\"fishing_pole_and_fish\",\"running_shirt_with_sash\",\"ski\",\"dart\",\"8ball\",\"crystal_ball\",\"video_game\",\"joystick\",\"slot_machine\",\"game_die\",\"spades\",\"hearts\",\"diamonds\",\"clubs\",\"black_joker\",\"mahjong\",\"flower_playing_cards\",\"performing_arts\",\"frame_with_picture\",\"art\"]},{\"id\":\"places\",\"emojis\":[\"earth_africa\",\"earth_americas\",\"earth_asia\",\"globe_with_meridians\",\"world_map\",\"japan\",\"snow_capped_mountain\",\"mountain\",\"volcano\",\"mount_fuji\",\"camping\",\"beach_with_umbrella\",\"desert\",\"desert_island\",\"national_park\",\"stadium\",\"classical_building\",\"building_construction\",\"house_buildings\",\"derelict_house_building\",\"house\",\"house_with_garden\",\"office\",\"post_office\",\"european_post_office\",\"hospital\",\"bank\",\"hotel\",\"love_hotel\",\"convenience_store\",\"school\",\"department_store\",\"factory\",\"japanese_castle\",\"european_castle\",\"wedding\",\"tokyo_tower\",\"statue_of_liberty\",\"church\",\"mosque\",\"synagogue\",\"shinto_shrine\",\"kaaba\",\"fountain\",\"tent\",\"foggy\",\"night_with_stars\",\"cityscape\",\"sunrise_over_mountains\",\"sunrise\",\"city_sunset\",\"city_sunrise\",\"bridge_at_night\",\"hotsprings\",\"carousel_horse\",\"ferris_wheel\",\"roller_coaster\",\"barber\",\"circus_tent\",\"steam_locomotive\",\"railway_car\",\"bullettrain_side\",\"bullettrain_front\",\"train2\",\"metro\",\"light_rail\",\"station\",\"tram\",\"monorail\",\"mountain_railway\",\"train\",\"bus\",\"oncoming_bus\",\"trolleybus\",\"minibus\",\"ambulance\",\"fire_engine\",\"police_car\",\"oncoming_police_car\",\"taxi\",\"oncoming_taxi\",\"car\",\"oncoming_automobile\",\"blue_car\",\"truck\",\"articulated_lorry\",\"tractor\",\"racing_car\",\"racing_motorcycle\",\"motor_scooter\",\"bike\",\"scooter\",\"busstop\",\"motorway\",\"railway_track\",\"oil_drum\",\"fuelpump\",\"rotating_light\",\"traffic_light\",\"vertical_traffic_light\",\"octagonal_sign\",\"construction\",\"anchor\",\"boat\",\"canoe\",\"speedboat\",\"passenger_ship\",\"ferry\",\"motor_boat\",\"ship\",\"airplane\",\"small_airplane\",\"airplane_departure\",\"airplane_arriving\",\"seat\",\"helicopter\",\"suspension_railway\",\"mountain_cableway\",\"aerial_tramway\",\"satellite\",\"rocket\",\"bellhop_bell\",\"hourglass\",\"hourglass_flowing_sand\",\"watch\",\"alarm_clock\",\"stopwatch\",\"timer_clock\",\"mantelpiece_clock\",\"clock12\",\"clock1230\",\"clock1\",\"clock130\",\"clock2\",\"clock230\",\"clock3\",\"clock330\",\"clock4\",\"clock430\",\"clock5\",\"clock530\",\"clock6\",\"clock630\",\"clock7\",\"clock730\",\"clock8\",\"clock830\",\"clock9\",\"clock930\",\"clock10\",\"clock1030\",\"clock11\",\"clock1130\",\"new_moon\",\"waxing_crescent_moon\",\"first_quarter_moon\",\"moon\",\"full_moon\",\"waning_gibbous_moon\",\"last_quarter_moon\",\"waning_crescent_moon\",\"crescent_moon\",\"new_moon_with_face\",\"first_quarter_moon_with_face\",\"last_quarter_moon_with_face\",\"thermometer\",\"sunny\",\"full_moon_with_face\",\"sun_with_face\",\"star\",\"star2\",\"stars\",\"milky_way\",\"cloud\",\"partly_sunny\",\"thunder_cloud_and_rain\",\"mostly_sunny\",\"barely_sunny\",\"partly_sunny_rain\",\"rain_cloud\",\"snow_cloud\",\"lightning\",\"tornado\",\"fog\",\"wind_blowing_face\",\"cyclone\",\"rainbow\",\"closed_umbrella\",\"umbrella\",\"umbrella_with_rain_drops\",\"umbrella_on_ground\",\"zap\",\"snowflake\",\"snowman\",\"snowman_without_snow\",\"comet\",\"fire\",\"droplet\",\"ocean\"]},{\"id\":\"objects\",\"emojis\":[\"eyeglasses\",\"dark_sunglasses\",\"necktie\",\"shirt\",\"jeans\",\"dress\",\"kimono\",\"bikini\",\"womans_clothes\",\"purse\",\"handbag\",\"pouch\",\"shopping_bags\",\"school_satchel\",\"mans_shoe\",\"athletic_shoe\",\"high_heel\",\"sandal\",\"boot\",\"crown\",\"womans_hat\",\"tophat\",\"mortar_board\",\"helmet_with_white_cross\",\"prayer_beads\",\"lipstick\",\"ring\",\"gem\",\"mute\",\"speaker\",\"sound\",\"loud_sound\",\"loudspeaker\",\"mega\",\"postal_horn\",\"bell\",\"no_bell\",\"musical_score\",\"musical_note\",\"notes\",\"studio_microphone\",\"level_slider\",\"control_knobs\",\"microphone\",\"headphones\",\"radio\",\"saxophone\",\"guitar\",\"musical_keyboard\",\"trumpet\",\"violin\",\"drum_with_drumsticks\",\"iphone\",\"calling\",\"phone\",\"telephone_receiver\",\"pager\",\"fax\",\"battery\",\"electric_plug\",\"computer\",\"desktop_computer\",\"printer\",\"keyboard\",\"three_button_mouse\",\"trackball\",\"minidisc\",\"floppy_disk\",\"cd\",\"dvd\",\"movie_camera\",\"film_frames\",\"film_projector\",\"clapper\",\"tv\",\"camera\",\"camera_with_flash\",\"video_camera\",\"vhs\",\"mag\",\"mag_right\",\"candle\",\"bulb\",\"flashlight\",\"izakaya_lantern\",\"notebook_with_decorative_cover\",\"closed_book\",\"book\",\"green_book\",\"blue_book\",\"orange_book\",\"books\",\"notebook\",\"ledger\",\"page_with_curl\",\"scroll\",\"page_facing_up\",\"newspaper\",\"rolled_up_newspaper\",\"bookmark_tabs\",\"bookmark\",\"label\",\"moneybag\",\"yen\",\"dollar\",\"euro\",\"pound\",\"money_with_wings\",\"credit_card\",\"chart\",\"email\",\"e-mail\",\"incoming_envelope\",\"envelope_with_arrow\",\"outbox_tray\",\"inbox_tray\",\"package\",\"mailbox\",\"mailbox_closed\",\"mailbox_with_mail\",\"mailbox_with_no_mail\",\"postbox\",\"ballot_box_with_ballot\",\"pencil2\",\"black_nib\",\"lower_left_fountain_pen\",\"lower_left_ballpoint_pen\",\"lower_left_paintbrush\",\"lower_left_crayon\",\"memo\",\"briefcase\",\"file_folder\",\"open_file_folder\",\"card_index_dividers\",\"date\",\"calendar\",\"spiral_note_pad\",\"spiral_calendar_pad\",\"card_index\",\"chart_with_upwards_trend\",\"chart_with_downwards_trend\",\"bar_chart\",\"clipboard\",\"pushpin\",\"round_pushpin\",\"paperclip\",\"linked_paperclips\",\"straight_ruler\",\"triangular_ruler\",\"scissors\",\"card_file_box\",\"file_cabinet\",\"wastebasket\",\"lock\",\"unlock\",\"lock_with_ink_pen\",\"closed_lock_with_key\",\"key\",\"old_key\",\"hammer\",\"pick\",\"hammer_and_pick\",\"hammer_and_wrench\",\"dagger_knife\",\"crossed_swords\",\"gun\",\"bow_and_arrow\",\"shield\",\"wrench\",\"nut_and_bolt\",\"gear\",\"compression\",\"scales\",\"link\",\"chains\",\"alembic\",\"microscope\",\"telescope\",\"satellite_antenna\",\"syringe\",\"pill\",\"door\",\"bed\",\"couch_and_lamp\",\"toilet\",\"shower\",\"bathtub\",\"shopping_trolley\",\"smoking\",\"coffin\",\"funeral_urn\",\"moyai\"]},{\"id\":\"symbols\",\"emojis\":[\"atm\",\"put_litter_in_its_place\",\"potable_water\",\"wheelchair\",\"mens\",\"womens\",\"restroom\",\"baby_symbol\",\"wc\",\"passport_control\",\"customs\",\"baggage_claim\",\"left_luggage\",\"warning\",\"children_crossing\",\"no_entry\",\"no_entry_sign\",\"no_bicycles\",\"no_smoking\",\"do_not_litter\",\"non-potable_water\",\"no_pedestrians\",\"no_mobile_phones\",\"underage\",\"radioactive_sign\",\"biohazard_sign\",\"arrow_up\",\"arrow_upper_right\",\"arrow_right\",\"arrow_lower_right\",\"arrow_down\",\"arrow_lower_left\",\"arrow_left\",\"arrow_upper_left\",\"arrow_up_down\",\"left_right_arrow\",\"leftwards_arrow_with_hook\",\"arrow_right_hook\",\"arrow_heading_up\",\"arrow_heading_down\",\"arrows_clockwise\",\"arrows_counterclockwise\",\"back\",\"end\",\"on\",\"soon\",\"top\",\"place_of_worship\",\"atom_symbol\",\"om_symbol\",\"star_of_david\",\"wheel_of_dharma\",\"yin_yang\",\"latin_cross\",\"orthodox_cross\",\"star_and_crescent\",\"peace_symbol\",\"menorah_with_nine_branches\",\"six_pointed_star\",\"aries\",\"taurus\",\"gemini\",\"cancer\",\"leo\",\"virgo\",\"libra\",\"scorpius\",\"sagittarius\",\"capricorn\",\"aquarius\",\"pisces\",\"ophiuchus\",\"twisted_rightwards_arrows\",\"repeat\",\"repeat_one\",\"arrow_forward\",\"fast_forward\",\"black_right_pointing_double_triangle_with_vertical_bar\",\"black_right_pointing_triangle_with_double_vertical_bar\",\"arrow_backward\",\"rewind\",\"black_left_pointing_double_triangle_with_vertical_bar\",\"arrow_up_small\",\"arrow_double_up\",\"arrow_down_small\",\"arrow_double_down\",\"double_vertical_bar\",\"black_square_for_stop\",\"black_circle_for_record\",\"eject\",\"cinema\",\"low_brightness\",\"high_brightness\",\"signal_strength\",\"vibration_mode\",\"mobile_phone_off\",\"female_sign\",\"male_sign\",\"heavy_multiplication_x\",\"heavy_plus_sign\",\"heavy_minus_sign\",\"heavy_division_sign\",\"bangbang\",\"interrobang\",\"question\",\"grey_question\",\"grey_exclamation\",\"exclamation\",\"wavy_dash\",\"currency_exchange\",\"heavy_dollar_sign\",\"medical_symbol\",\"recycle\",\"fleur_de_lis\",\"trident\",\"name_badge\",\"beginner\",\"o\",\"white_check_mark\",\"ballot_box_with_check\",\"heavy_check_mark\",\"x\",\"negative_squared_cross_mark\",\"curly_loop\",\"loop\",\"part_alternation_mark\",\"eight_spoked_asterisk\",\"eight_pointed_black_star\",\"sparkle\",\"copyright\",\"registered\",\"tm\",\"hash\",\"keycap_star\",\"zero\",\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"keycap_ten\",\"capital_abcd\",\"abcd\",\"1234\",\"symbols\",\"abc\",\"a\",\"ab\",\"b\",\"cl\",\"cool\",\"free\",\"information_source\",\"id\",\"m\",\"new\",\"ng\",\"o2\",\"ok\",\"parking\",\"sos\",\"up\",\"vs\",\"koko\",\"sa\",\"u6708\",\"u6709\",\"u6307\",\"ideograph_advantage\",\"u5272\",\"u7121\",\"u7981\",\"accept\",\"u7533\",\"u5408\",\"u7a7a\",\"congratulations\",\"secret\",\"u55b6\",\"u6e80\",\"red_circle\",\"large_blue_circle\",\"black_circle\",\"white_circle\",\"black_large_square\",\"white_large_square\",\"black_medium_square\",\"white_medium_square\",\"black_medium_small_square\",\"white_medium_small_square\",\"black_small_square\",\"white_small_square\",\"large_orange_diamond\",\"large_blue_diamond\",\"small_orange_diamond\",\"small_blue_diamond\",\"small_red_triangle\",\"small_red_triangle_down\",\"diamond_shape_with_a_dot_inside\",\"radio_button\",\"white_square_button\",\"black_square_button\"]},{\"id\":\"flags\",\"emojis\":[\"checkered_flag\",\"cn\",\"crossed_flags\",\"de\",\"es\",\"flag-ac\",\"flag-ad\",\"flag-ae\",\"flag-af\",\"flag-ag\",\"flag-ai\",\"flag-al\",\"flag-am\",\"flag-ao\",\"flag-aq\",\"flag-ar\",\"flag-as\",\"flag-at\",\"flag-au\",\"flag-aw\",\"flag-ax\",\"flag-az\",\"flag-ba\",\"flag-bb\",\"flag-bd\",\"flag-be\",\"flag-bf\",\"flag-bg\",\"flag-bh\",\"flag-bi\",\"flag-bj\",\"flag-bl\",\"flag-bm\",\"flag-bn\",\"flag-bo\",\"flag-bq\",\"flag-br\",\"flag-bs\",\"flag-bt\",\"flag-bv\",\"flag-bw\",\"flag-by\",\"flag-bz\",\"flag-ca\",\"flag-cc\",\"flag-cd\",\"flag-cf\",\"flag-cg\",\"flag-ch\",\"flag-ci\",\"flag-ck\",\"flag-cl\",\"flag-cm\",\"flag-co\",\"flag-cp\",\"flag-cr\",\"flag-cu\",\"flag-cv\",\"flag-cw\",\"flag-cx\",\"flag-cy\",\"flag-cz\",\"flag-dg\",\"flag-dj\",\"flag-dk\",\"flag-dm\",\"flag-do\",\"flag-dz\",\"flag-ea\",\"flag-ec\",\"flag-ee\",\"flag-eg\",\"flag-eh\",\"flag-er\",\"flag-et\",\"flag-eu\",\"flag-fi\",\"flag-fj\",\"flag-fk\",\"flag-fm\",\"flag-fo\",\"flag-ga\",\"flag-gd\",\"flag-ge\",\"flag-gf\",\"flag-gg\",\"flag-gh\",\"flag-gi\",\"flag-gl\",\"flag-gm\",\"flag-gn\",\"flag-gp\",\"flag-gq\",\"flag-gr\",\"flag-gs\",\"flag-gt\",\"flag-gu\",\"flag-gw\",\"flag-gy\",\"flag-hk\",\"flag-hm\",\"flag-hn\",\"flag-hr\",\"flag-ht\",\"flag-hu\",\"flag-ic\",\"flag-id\",\"flag-ie\",\"flag-il\",\"flag-im\",\"flag-in\",\"flag-io\",\"flag-iq\",\"flag-ir\",\"flag-is\",\"flag-je\",\"flag-jm\",\"flag-jo\",\"flag-ke\",\"flag-kg\",\"flag-kh\",\"flag-ki\",\"flag-km\",\"flag-kn\",\"flag-kp\",\"flag-kw\",\"flag-ky\",\"flag-kz\",\"flag-la\",\"flag-lb\",\"flag-lc\",\"flag-li\",\"flag-lk\",\"flag-lr\",\"flag-ls\",\"flag-lt\",\"flag-lu\",\"flag-lv\",\"flag-ly\",\"flag-ma\",\"flag-mc\",\"flag-md\",\"flag-me\",\"flag-mf\",\"flag-mg\",\"flag-mh\",\"flag-mk\",\"flag-ml\",\"flag-mm\",\"flag-mn\",\"flag-mo\",\"flag-mp\",\"flag-mq\",\"flag-mr\",\"flag-ms\",\"flag-mt\",\"flag-mu\",\"flag-mv\",\"flag-mw\",\"flag-mx\",\"flag-my\",\"flag-mz\",\"flag-na\",\"flag-nc\",\"flag-ne\",\"flag-nf\",\"flag-ng\",\"flag-ni\",\"flag-nl\",\"flag-no\",\"flag-np\",\"flag-nr\",\"flag-nu\",\"flag-nz\",\"flag-om\",\"flag-pa\",\"flag-pe\",\"flag-pf\",\"flag-pg\",\"flag-ph\",\"flag-pk\",\"flag-pl\",\"flag-pm\",\"flag-pn\",\"flag-pr\",\"flag-ps\",\"flag-pt\",\"flag-pw\",\"flag-py\",\"flag-qa\",\"flag-re\",\"flag-ro\",\"flag-rs\",\"flag-rw\",\"flag-sa\",\"flag-sb\",\"flag-sc\",\"flag-sd\",\"flag-se\",\"flag-sg\",\"flag-sh\",\"flag-si\",\"flag-sj\",\"flag-sk\",\"flag-sl\",\"flag-sm\",\"flag-sn\",\"flag-so\",\"flag-sr\",\"flag-ss\",\"flag-st\",\"flag-sv\",\"flag-sx\",\"flag-sy\",\"flag-sz\",\"flag-ta\",\"flag-tc\",\"flag-td\",\"flag-tf\",\"flag-tg\",\"flag-th\",\"flag-tj\",\"flag-tk\",\"flag-tl\",\"flag-tm\",\"flag-tn\",\"flag-to\",\"flag-tr\",\"flag-tt\",\"flag-tv\",\"flag-tw\",\"flag-tz\",\"flag-ua\",\"flag-ug\",\"flag-um\",\"flag-un\",\"flag-uy\",\"flag-uz\",\"flag-va\",\"flag-vc\",\"flag-ve\",\"flag-vg\",\"flag-vi\",\"flag-vn\",\"flag-vu\",\"flag-wf\",\"flag-ws\",\"flag-xk\",\"flag-ye\",\"flag-yt\",\"flag-za\",\"flag-zm\",\"flag-zw\",\"fr\",\"gb\",\"it\",\"jp\",\"kr\",\"rainbow-flag\",\"ru\",\"triangular_flag_on_post\",\"us\",\"waving_black_flag\",\"waving_white_flag\"]}],\"emojis\":{\"100\":{\"id\":\"100\",\"name\":\"Hundred Points\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4af\",\"native\":\"💯\",\"x\":28,\"y\":6}],\"version\":1},\"1234\":{\"id\":\"1234\",\"name\":\"Input Numbers\",\"keywords\":[],\"skins\":[{\"unified\":\"1f522\",\"native\":\"🔢\",\"x\":29,\"y\":59}],\"version\":1},\"grinning\":{\"id\":\"grinning\",\"name\":\"Grinning Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f600\",\"native\":\"😀\",\"x\":32,\"y\":20}],\"version\":1},\"smiley\":{\"id\":\"smiley\",\"name\":\"Grinning Face with Big Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f603\",\"native\":\"😃\",\"x\":32,\"y\":23}],\"version\":1},\"smile\":{\"id\":\"smile\",\"name\":\"Grinning Face with Smiling Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f604\",\"native\":\"😄\",\"x\":32,\"y\":24}],\"version\":1},\"grin\":{\"id\":\"grin\",\"name\":\"Beaming Face with Smiling Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f601\",\"native\":\"😁\",\"x\":32,\"y\":21}],\"version\":1},\"laughing\":{\"id\":\"laughing\",\"name\":\"Grinning Squinting Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f606\",\"native\":\"😆\",\"x\":32,\"y\":26}],\"version\":1},\"sweat_smile\":{\"id\":\"sweat_smile\",\"name\":\"Grinning Face with Sweat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f605\",\"native\":\"😅\",\"x\":32,\"y\":25}],\"version\":1},\"rolling_on_the_floor_laughing\":{\"id\":\"rolling_on_the_floor_laughing\",\"name\":\"Rolling on the Floor Laughing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f923\",\"native\":\"🤣\",\"x\":40,\"y\":15}],\"version\":3},\"joy\":{\"id\":\"joy\",\"name\":\"Face with Tears of Joy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f602\",\"native\":\"😂\",\"x\":32,\"y\":22}],\"version\":1},\"slightly_smiling_face\":{\"id\":\"slightly_smiling_face\",\"name\":\"Slightly Smiling Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f642\",\"native\":\"🙂\",\"x\":33,\"y\":28}],\"version\":1},\"upside_down_face\":{\"id\":\"upside_down_face\",\"name\":\"Upside-Down Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f643\",\"native\":\"🙃\",\"x\":33,\"y\":29}],\"version\":1},\"wink\":{\"id\":\"wink\",\"name\":\"Winking Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f609\",\"native\":\"😉\",\"x\":32,\"y\":29}],\"version\":1},\"blush\":{\"id\":\"blush\",\"name\":\"Smiling Face with Smiling Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f60a\",\"native\":\"😊\",\"x\":32,\"y\":30}],\"version\":1},\"innocent\":{\"id\":\"innocent\",\"name\":\"Smiling Face with Halo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f607\",\"native\":\"😇\",\"x\":32,\"y\":27}],\"version\":1},\"heart_eyes\":{\"id\":\"heart_eyes\",\"name\":\"Smiling Face with Heart-Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f60d\",\"native\":\"😍\",\"x\":32,\"y\":33}],\"version\":1},\"kissing_heart\":{\"id\":\"kissing_heart\",\"name\":\"Face Blowing a Kiss\",\"keywords\":[],\"skins\":[{\"unified\":\"1f618\",\"native\":\"😘\",\"x\":32,\"y\":44}],\"version\":1},\"kissing\":{\"id\":\"kissing\",\"name\":\"Kissing Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f617\",\"native\":\"😗\",\"x\":32,\"y\":43}],\"version\":1},\"relaxed\":{\"id\":\"relaxed\",\"name\":\"Smiling Face\",\"keywords\":[],\"skins\":[{\"unified\":\"263a-fe0f\",\"native\":\"☺️\",\"x\":57,\"y\":4}],\"version\":1},\"kissing_closed_eyes\":{\"id\":\"kissing_closed_eyes\",\"name\":\"Kissing Face with Closed Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f61a\",\"native\":\"😚\",\"x\":32,\"y\":46}],\"version\":1},\"kissing_smiling_eyes\":{\"id\":\"kissing_smiling_eyes\",\"name\":\"Kissing Face with Smiling Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f619\",\"native\":\"😙\",\"x\":32,\"y\":45}],\"version\":1},\"yum\":{\"id\":\"yum\",\"name\":\"Face Savoring Food\",\"keywords\":[],\"skins\":[{\"unified\":\"1f60b\",\"native\":\"😋\",\"x\":32,\"y\":31}],\"version\":1},\"stuck_out_tongue\":{\"id\":\"stuck_out_tongue\",\"name\":\"Face with Tongue\",\"keywords\":[],\"skins\":[{\"unified\":\"1f61b\",\"native\":\"😛\",\"x\":32,\"y\":47}],\"version\":1},\"stuck_out_tongue_winking_eye\":{\"id\":\"stuck_out_tongue_winking_eye\",\"name\":\"Winking Face with Tongue\",\"keywords\":[],\"skins\":[{\"unified\":\"1f61c\",\"native\":\"😜\",\"x\":32,\"y\":48}],\"version\":1},\"stuck_out_tongue_closed_eyes\":{\"id\":\"stuck_out_tongue_closed_eyes\",\"name\":\"Squinting Face with Tongue\",\"keywords\":[],\"skins\":[{\"unified\":\"1f61d\",\"native\":\"😝\",\"x\":32,\"y\":49}],\"version\":1},\"money_mouth_face\":{\"id\":\"money_mouth_face\",\"name\":\"Money-Mouth Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f911\",\"native\":\"🤑\",\"x\":38,\"y\":59}],\"version\":1},\"hugging_face\":{\"id\":\"hugging_face\",\"name\":\"Hugging Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f917\",\"native\":\"🤗\",\"x\":39,\"y\":4}],\"version\":1},\"thinking_face\":{\"id\":\"thinking_face\",\"name\":\"Thinking Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f914\",\"native\":\"🤔\",\"x\":39,\"y\":1}],\"version\":1},\"zipper_mouth_face\":{\"id\":\"zipper_mouth_face\",\"name\":\"Zipper-Mouth Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f910\",\"native\":\"🤐\",\"x\":38,\"y\":58}],\"version\":1},\"neutral_face\":{\"id\":\"neutral_face\",\"name\":\"Neutral Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f610\",\"native\":\"😐\",\"x\":32,\"y\":36}],\"version\":1},\"expressionless\":{\"id\":\"expressionless\",\"name\":\"Expressionless Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f611\",\"native\":\"😑\",\"x\":32,\"y\":37}],\"version\":1},\"no_mouth\":{\"id\":\"no_mouth\",\"name\":\"Face Without Mouth\",\"keywords\":[],\"skins\":[{\"unified\":\"1f636\",\"native\":\"😶\",\"x\":33,\"y\":16}],\"version\":1},\"smirk\":{\"id\":\"smirk\",\"name\":\"Smirking Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f60f\",\"native\":\"😏\",\"x\":32,\"y\":35}],\"version\":1},\"unamused\":{\"id\":\"unamused\",\"name\":\"Unamused Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f612\",\"native\":\"😒\",\"x\":32,\"y\":38}],\"version\":1},\"face_with_rolling_eyes\":{\"id\":\"face_with_rolling_eyes\",\"name\":\"Face with Rolling Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f644\",\"native\":\"🙄\",\"x\":33,\"y\":30}],\"version\":1},\"grimacing\":{\"id\":\"grimacing\",\"name\":\"Grimacing Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f62c\",\"native\":\"😬\",\"x\":33,\"y\":3}],\"version\":1},\"lying_face\":{\"id\":\"lying_face\",\"name\":\"Lying Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f925\",\"native\":\"🤥\",\"x\":40,\"y\":17}],\"version\":3},\"relieved\":{\"id\":\"relieved\",\"name\":\"Relieved Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f60c\",\"native\":\"😌\",\"x\":32,\"y\":32}],\"version\":1},\"pensive\":{\"id\":\"pensive\",\"name\":\"Pensive Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f614\",\"native\":\"😔\",\"x\":32,\"y\":40}],\"version\":1},\"sleepy\":{\"id\":\"sleepy\",\"name\":\"Sleepy Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f62a\",\"native\":\"😪\",\"x\":33,\"y\":1}],\"version\":1},\"drooling_face\":{\"id\":\"drooling_face\",\"name\":\"Drooling Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f924\",\"native\":\"🤤\",\"x\":40,\"y\":16}],\"version\":3},\"sleeping\":{\"id\":\"sleeping\",\"name\":\"Sleeping Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f634\",\"native\":\"😴\",\"x\":33,\"y\":12}],\"version\":1},\"mask\":{\"id\":\"mask\",\"name\":\"Face with Medical Mask\",\"keywords\":[],\"skins\":[{\"unified\":\"1f637\",\"native\":\"😷\",\"x\":33,\"y\":17}],\"version\":1},\"face_with_thermometer\":{\"id\":\"face_with_thermometer\",\"name\":\"Face with Thermometer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f912\",\"native\":\"🤒\",\"x\":38,\"y\":60}],\"version\":1},\"face_with_head_bandage\":{\"id\":\"face_with_head_bandage\",\"name\":\"Face with Head-Bandage\",\"keywords\":[],\"skins\":[{\"unified\":\"1f915\",\"native\":\"🤕\",\"x\":39,\"y\":2}],\"version\":1},\"nauseated_face\":{\"id\":\"nauseated_face\",\"name\":\"Nauseated Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f922\",\"native\":\"🤢\",\"x\":40,\"y\":14}],\"version\":3},\"sneezing_face\":{\"id\":\"sneezing_face\",\"name\":\"Sneezing Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f927\",\"native\":\"🤧\",\"x\":40,\"y\":36}],\"version\":3},\"dizzy_face\":{\"id\":\"dizzy_face\",\"name\":\"Dizzy Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f635\",\"native\":\"😵\",\"x\":33,\"y\":14}],\"version\":1},\"face_with_cowboy_hat\":{\"id\":\"face_with_cowboy_hat\",\"name\":\"Cowboy Hat Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f920\",\"native\":\"🤠\",\"x\":40,\"y\":12}],\"version\":3},\"sunglasses\":{\"id\":\"sunglasses\",\"name\":\"Smiling Face with Sunglasses\",\"keywords\":[],\"skins\":[{\"unified\":\"1f60e\",\"native\":\"😎\",\"x\":32,\"y\":34}],\"version\":1},\"nerd_face\":{\"id\":\"nerd_face\",\"name\":\"Nerd Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f913\",\"native\":\"🤓\",\"x\":39,\"y\":0}],\"version\":1},\"confused\":{\"id\":\"confused\",\"name\":\"Confused Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f615\",\"native\":\"😕\",\"x\":32,\"y\":41}],\"version\":1},\"worried\":{\"id\":\"worried\",\"name\":\"Worried Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f61f\",\"native\":\"😟\",\"x\":32,\"y\":51}],\"version\":1},\"slightly_frowning_face\":{\"id\":\"slightly_frowning_face\",\"name\":\"Slightly Frowning Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f641\",\"native\":\"🙁\",\"x\":33,\"y\":27}],\"version\":1},\"white_frowning_face\":{\"id\":\"white_frowning_face\",\"name\":\"Frowning Face\",\"keywords\":[],\"skins\":[{\"unified\":\"2639-fe0f\",\"native\":\"☹️\",\"x\":57,\"y\":3}],\"version\":1},\"open_mouth\":{\"id\":\"open_mouth\",\"name\":\"Face with Open Mouth\",\"keywords\":[],\"skins\":[{\"unified\":\"1f62e\",\"native\":\"😮\",\"x\":33,\"y\":6}],\"version\":1},\"hushed\":{\"id\":\"hushed\",\"name\":\"Hushed Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f62f\",\"native\":\"😯\",\"x\":33,\"y\":7}],\"version\":1},\"astonished\":{\"id\":\"astonished\",\"name\":\"Astonished Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f632\",\"native\":\"😲\",\"x\":33,\"y\":10}],\"version\":1},\"flushed\":{\"id\":\"flushed\",\"name\":\"Flushed Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f633\",\"native\":\"😳\",\"x\":33,\"y\":11}],\"version\":1},\"frowning\":{\"id\":\"frowning\",\"name\":\"Frowning Face with Open Mouth\",\"keywords\":[],\"skins\":[{\"unified\":\"1f626\",\"native\":\"😦\",\"x\":32,\"y\":58}],\"version\":1},\"anguished\":{\"id\":\"anguished\",\"name\":\"Anguished Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f627\",\"native\":\"😧\",\"x\":32,\"y\":59}],\"version\":1},\"fearful\":{\"id\":\"fearful\",\"name\":\"Fearful Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f628\",\"native\":\"😨\",\"x\":32,\"y\":60}],\"version\":1},\"cold_sweat\":{\"id\":\"cold_sweat\",\"name\":\"Anxious Face with Sweat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f630\",\"native\":\"😰\",\"x\":33,\"y\":8}],\"version\":1},\"disappointed_relieved\":{\"id\":\"disappointed_relieved\",\"name\":\"Sad but Relieved Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f625\",\"native\":\"😥\",\"x\":32,\"y\":57}],\"version\":1},\"cry\":{\"id\":\"cry\",\"name\":\"Crying Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f622\",\"native\":\"😢\",\"x\":32,\"y\":54}],\"version\":1},\"sob\":{\"id\":\"sob\",\"name\":\"Loudly Crying Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f62d\",\"native\":\"😭\",\"x\":33,\"y\":4}],\"version\":1},\"scream\":{\"id\":\"scream\",\"name\":\"Face Screaming in Fear\",\"keywords\":[],\"skins\":[{\"unified\":\"1f631\",\"native\":\"😱\",\"x\":33,\"y\":9}],\"version\":1},\"confounded\":{\"id\":\"confounded\",\"name\":\"Confounded Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f616\",\"native\":\"😖\",\"x\":32,\"y\":42}],\"version\":1},\"persevere\":{\"id\":\"persevere\",\"name\":\"Persevering Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f623\",\"native\":\"😣\",\"x\":32,\"y\":55}],\"version\":1},\"disappointed\":{\"id\":\"disappointed\",\"name\":\"Disappointed Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f61e\",\"native\":\"😞\",\"x\":32,\"y\":50}],\"version\":1},\"sweat\":{\"id\":\"sweat\",\"name\":\"Face with Cold Sweat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f613\",\"native\":\"😓\",\"x\":32,\"y\":39}],\"version\":1},\"weary\":{\"id\":\"weary\",\"name\":\"Weary Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f629\",\"native\":\"😩\",\"x\":33,\"y\":0}],\"version\":1},\"tired_face\":{\"id\":\"tired_face\",\"name\":\"Tired Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f62b\",\"native\":\"😫\",\"x\":33,\"y\":2}],\"version\":1},\"triumph\":{\"id\":\"triumph\",\"name\":\"Face with Look of Triumph\",\"keywords\":[],\"skins\":[{\"unified\":\"1f624\",\"native\":\"😤\",\"x\":32,\"y\":56}],\"version\":1},\"rage\":{\"id\":\"rage\",\"name\":\"Pouting Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f621\",\"native\":\"😡\",\"x\":32,\"y\":53}],\"version\":1},\"angry\":{\"id\":\"angry\",\"name\":\"Angry Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f620\",\"native\":\"😠\",\"x\":32,\"y\":52}],\"version\":1},\"smiling_imp\":{\"id\":\"smiling_imp\",\"name\":\"Smiling Face with Horns\",\"keywords\":[],\"skins\":[{\"unified\":\"1f608\",\"native\":\"😈\",\"x\":32,\"y\":28}],\"version\":1},\"imp\":{\"id\":\"imp\",\"name\":\"Imp\",\"keywords\":[],\"skins\":[{\"unified\":\"1f47f\",\"native\":\"👿\",\"x\":25,\"y\":8}],\"version\":1},\"skull\":{\"id\":\"skull\",\"name\":\"Skull\",\"keywords\":[],\"skins\":[{\"unified\":\"1f480\",\"native\":\"💀\",\"x\":25,\"y\":9}],\"version\":1},\"skull_and_crossbones\":{\"id\":\"skull_and_crossbones\",\"name\":\"Skull and Crossbones\",\"keywords\":[],\"skins\":[{\"unified\":\"2620-fe0f\",\"native\":\"☠️\",\"x\":56,\"y\":56}],\"version\":1},\"hankey\":{\"id\":\"hankey\",\"name\":\"Pile of Poo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a9\",\"native\":\"💩\",\"x\":27,\"y\":56}],\"version\":1},\"clown_face\":{\"id\":\"clown_face\",\"name\":\"Clown Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f921\",\"native\":\"🤡\",\"x\":40,\"y\":13}],\"version\":3},\"japanese_ogre\":{\"id\":\"japanese_ogre\",\"name\":\"Ogre\",\"keywords\":[],\"skins\":[{\"unified\":\"1f479\",\"native\":\"👹\",\"x\":24,\"y\":58}],\"version\":1},\"japanese_goblin\":{\"id\":\"japanese_goblin\",\"name\":\"Goblin\",\"keywords\":[],\"skins\":[{\"unified\":\"1f47a\",\"native\":\"👺\",\"x\":24,\"y\":59}],\"version\":1},\"ghost\":{\"id\":\"ghost\",\"name\":\"Ghost\",\"keywords\":[],\"skins\":[{\"unified\":\"1f47b\",\"native\":\"👻\",\"x\":24,\"y\":60}],\"version\":1},\"alien\":{\"id\":\"alien\",\"name\":\"Alien\",\"keywords\":[],\"skins\":[{\"unified\":\"1f47d\",\"native\":\"👽\",\"x\":25,\"y\":6}],\"version\":1},\"space_invader\":{\"id\":\"space_invader\",\"name\":\"Alien Monster\",\"keywords\":[],\"skins\":[{\"unified\":\"1f47e\",\"native\":\"👾\",\"x\":25,\"y\":7}],\"version\":1},\"robot_face\":{\"id\":\"robot_face\",\"name\":\"Robot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f916\",\"native\":\"🤖\",\"x\":39,\"y\":3}],\"version\":1},\"smiley_cat\":{\"id\":\"smiley_cat\",\"name\":\"Grinning Cat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f63a\",\"native\":\"😺\",\"x\":33,\"y\":20}],\"version\":1},\"smile_cat\":{\"id\":\"smile_cat\",\"name\":\"Grinning Cat with Smiling Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f638\",\"native\":\"😸\",\"x\":33,\"y\":18}],\"version\":1},\"joy_cat\":{\"id\":\"joy_cat\",\"name\":\"Cat with Tears of Joy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f639\",\"native\":\"😹\",\"x\":33,\"y\":19}],\"version\":1},\"heart_eyes_cat\":{\"id\":\"heart_eyes_cat\",\"name\":\"Smiling Cat with Heart-Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f63b\",\"native\":\"😻\",\"x\":33,\"y\":21}],\"version\":1},\"smirk_cat\":{\"id\":\"smirk_cat\",\"name\":\"Cat with Wry Smile\",\"keywords\":[],\"skins\":[{\"unified\":\"1f63c\",\"native\":\"😼\",\"x\":33,\"y\":22}],\"version\":1},\"kissing_cat\":{\"id\":\"kissing_cat\",\"name\":\"Kissing Cat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f63d\",\"native\":\"😽\",\"x\":33,\"y\":23}],\"version\":1},\"scream_cat\":{\"id\":\"scream_cat\",\"name\":\"Weary Cat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f640\",\"native\":\"🙀\",\"x\":33,\"y\":26}],\"version\":1},\"crying_cat_face\":{\"id\":\"crying_cat_face\",\"name\":\"Crying Cat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f63f\",\"native\":\"😿\",\"x\":33,\"y\":25}],\"version\":1},\"pouting_cat\":{\"id\":\"pouting_cat\",\"name\":\"Pouting Cat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f63e\",\"native\":\"😾\",\"x\":33,\"y\":24}],\"version\":1},\"see_no_evil\":{\"id\":\"see_no_evil\",\"name\":\"See-No-Evil Monkey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f648\",\"native\":\"🙈\",\"x\":34,\"y\":24}],\"version\":1},\"hear_no_evil\":{\"id\":\"hear_no_evil\",\"name\":\"Hear-No-Evil Monkey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f649\",\"native\":\"🙉\",\"x\":34,\"y\":25}],\"version\":1},\"speak_no_evil\":{\"id\":\"speak_no_evil\",\"name\":\"Speak-No-Evil Monkey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64a\",\"native\":\"🙊\",\"x\":34,\"y\":26}],\"version\":1},\"kiss\":{\"id\":\"kiss\",\"name\":\"Kiss Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"1f48b\",\"native\":\"💋\",\"x\":26,\"y\":37}],\"version\":1},\"love_letter\":{\"id\":\"love_letter\",\"name\":\"Love Letter\",\"keywords\":[],\"skins\":[{\"unified\":\"1f48c\",\"native\":\"💌\",\"x\":26,\"y\":38}],\"version\":1},\"cupid\":{\"id\":\"cupid\",\"name\":\"Heart with Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f498\",\"native\":\"💘\",\"x\":27,\"y\":39}],\"version\":1},\"gift_heart\":{\"id\":\"gift_heart\",\"name\":\"Heart with Ribbon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f49d\",\"native\":\"💝\",\"x\":27,\"y\":44}],\"version\":1},\"sparkling_heart\":{\"id\":\"sparkling_heart\",\"name\":\"Sparkling Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f496\",\"native\":\"💖\",\"x\":27,\"y\":37}],\"version\":1},\"heartpulse\":{\"id\":\"heartpulse\",\"name\":\"Growing Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f497\",\"native\":\"💗\",\"x\":27,\"y\":38}],\"version\":1},\"heartbeat\":{\"id\":\"heartbeat\",\"name\":\"Beating Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f493\",\"native\":\"💓\",\"x\":27,\"y\":34}],\"version\":1},\"revolving_hearts\":{\"id\":\"revolving_hearts\",\"name\":\"Revolving Hearts\",\"keywords\":[],\"skins\":[{\"unified\":\"1f49e\",\"native\":\"💞\",\"x\":27,\"y\":45}],\"version\":1},\"two_hearts\":{\"id\":\"two_hearts\",\"name\":\"Two Hearts\",\"keywords\":[],\"skins\":[{\"unified\":\"1f495\",\"native\":\"💕\",\"x\":27,\"y\":36}],\"version\":1},\"heart_decoration\":{\"id\":\"heart_decoration\",\"name\":\"Heart Decoration\",\"keywords\":[],\"skins\":[{\"unified\":\"1f49f\",\"native\":\"💟\",\"x\":27,\"y\":46}],\"version\":1},\"heavy_heart_exclamation_mark_ornament\":{\"id\":\"heavy_heart_exclamation_mark_ornament\",\"name\":\"Heart Exclamation\",\"keywords\":[],\"skins\":[{\"unified\":\"2763-fe0f\",\"native\":\"❣️\",\"x\":59,\"y\":7}],\"version\":1},\"broken_heart\":{\"id\":\"broken_heart\",\"name\":\"Broken Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f494\",\"native\":\"💔\",\"x\":27,\"y\":35}],\"version\":1},\"heart\":{\"id\":\"heart\",\"name\":\"Red Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"2764-fe0f\",\"native\":\"❤️\",\"x\":59,\"y\":10}],\"version\":1},\"yellow_heart\":{\"id\":\"yellow_heart\",\"name\":\"Yellow Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f49b\",\"native\":\"💛\",\"x\":27,\"y\":42}],\"version\":1},\"green_heart\":{\"id\":\"green_heart\",\"name\":\"Green Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f49a\",\"native\":\"💚\",\"x\":27,\"y\":41}],\"version\":1},\"blue_heart\":{\"id\":\"blue_heart\",\"name\":\"Blue Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f499\",\"native\":\"💙\",\"x\":27,\"y\":40}],\"version\":1},\"purple_heart\":{\"id\":\"purple_heart\",\"name\":\"Purple Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f49c\",\"native\":\"💜\",\"x\":27,\"y\":43}],\"version\":1},\"black_heart\":{\"id\":\"black_heart\",\"name\":\"Black Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5a4\",\"native\":\"🖤\",\"x\":31,\"y\":55}],\"version\":3},\"anger\":{\"id\":\"anger\",\"name\":\"Anger Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a2\",\"native\":\"💢\",\"x\":27,\"y\":49}],\"version\":1},\"boom\":{\"id\":\"boom\",\"name\":\"Collision\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a5\",\"native\":\"💥\",\"x\":27,\"y\":52}],\"version\":1},\"dizzy\":{\"id\":\"dizzy\",\"name\":\"Dizzy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ab\",\"native\":\"💫\",\"x\":28,\"y\":2}],\"version\":1},\"sweat_drops\":{\"id\":\"sweat_drops\",\"name\":\"Sweat Droplets\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a6\",\"native\":\"💦\",\"x\":27,\"y\":53}],\"version\":1},\"dash\":{\"id\":\"dash\",\"name\":\"Dash Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a8\",\"native\":\"💨\",\"x\":27,\"y\":55}],\"version\":1},\"hole\":{\"id\":\"hole\",\"name\":\"Hole\",\"keywords\":[],\"skins\":[{\"unified\":\"1f573-fe0f\",\"native\":\"🕳️\",\"x\":30,\"y\":58}],\"version\":1},\"bomb\":{\"id\":\"bomb\",\"name\":\"Bomb\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a3\",\"native\":\"💣\",\"x\":27,\"y\":50}],\"version\":1},\"speech_balloon\":{\"id\":\"speech_balloon\",\"name\":\"Speech Balloon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ac\",\"native\":\"💬\",\"x\":28,\"y\":3}],\"version\":1},\"eye-in-speech-bubble\":{\"id\":\"eye-in-speech-bubble\",\"name\":\"Eye in Speech Bubble\",\"keywords\":[],\"skins\":[{\"unified\":\"1f441-fe0f-200d-1f5e8-fe0f\",\"native\":\"👁️‍🗨️\",\"x\":11,\"y\":53}],\"version\":2},\"left_speech_bubble\":{\"id\":\"left_speech_bubble\",\"name\":\"Left Speech Bubble\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5e8-fe0f\",\"native\":\"🗨️\",\"x\":32,\"y\":11}],\"version\":2},\"right_anger_bubble\":{\"id\":\"right_anger_bubble\",\"name\":\"Right Anger Bubble\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5ef-fe0f\",\"native\":\"🗯️\",\"x\":32,\"y\":12}],\"version\":1},\"thought_balloon\":{\"id\":\"thought_balloon\",\"name\":\"Thought Balloon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ad\",\"native\":\"💭\",\"x\":28,\"y\":4}],\"version\":1},\"zzz\":{\"id\":\"zzz\",\"name\":\"Zzz\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a4\",\"native\":\"💤\",\"x\":27,\"y\":51}],\"version\":1},\"wave\":{\"id\":\"wave\",\"name\":\"Waving Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f44b\",\"native\":\"👋\",\"x\":12,\"y\":38},{\"unified\":\"1f44b-1f3fb\",\"native\":\"👋🏻\",\"x\":12,\"y\":39},{\"unified\":\"1f44b-1f3fc\",\"native\":\"👋🏼\",\"x\":12,\"y\":40},{\"unified\":\"1f44b-1f3fd\",\"native\":\"👋🏽\",\"x\":12,\"y\":41},{\"unified\":\"1f44b-1f3fe\",\"native\":\"👋🏾\",\"x\":12,\"y\":42},{\"unified\":\"1f44b-1f3ff\",\"native\":\"👋🏿\",\"x\":12,\"y\":43}],\"version\":1},\"raised_back_of_hand\":{\"id\":\"raised_back_of_hand\",\"name\":\"Raised Back of Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f91a\",\"native\":\"🤚\",\"x\":39,\"y\":17},{\"unified\":\"1f91a-1f3fb\",\"native\":\"🤚🏻\",\"x\":39,\"y\":18},{\"unified\":\"1f91a-1f3fc\",\"native\":\"🤚🏼\",\"x\":39,\"y\":19},{\"unified\":\"1f91a-1f3fd\",\"native\":\"🤚🏽\",\"x\":39,\"y\":20},{\"unified\":\"1f91a-1f3fe\",\"native\":\"🤚🏾\",\"x\":39,\"y\":21},{\"unified\":\"1f91a-1f3ff\",\"native\":\"🤚🏿\",\"x\":39,\"y\":22}],\"version\":3},\"raised_hand_with_fingers_splayed\":{\"id\":\"raised_hand_with_fingers_splayed\",\"name\":\"Hand with Fingers Splayed\",\"keywords\":[],\"skins\":[{\"unified\":\"1f590-fe0f\",\"native\":\"🖐️\",\"x\":31,\"y\":37},{\"unified\":\"1f590-1f3fb\",\"native\":\"🖐🏻\",\"x\":31,\"y\":38},{\"unified\":\"1f590-1f3fc\",\"native\":\"🖐🏼\",\"x\":31,\"y\":39},{\"unified\":\"1f590-1f3fd\",\"native\":\"🖐🏽\",\"x\":31,\"y\":40},{\"unified\":\"1f590-1f3fe\",\"native\":\"🖐🏾\",\"x\":31,\"y\":41},{\"unified\":\"1f590-1f3ff\",\"native\":\"🖐🏿\",\"x\":31,\"y\":42}],\"version\":1},\"hand\":{\"id\":\"hand\",\"name\":\"Raised Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"270b\",\"native\":\"✋\",\"x\":58,\"y\":33},{\"unified\":\"270b-1f3fb\",\"native\":\"✋🏻\",\"x\":58,\"y\":34},{\"unified\":\"270b-1f3fc\",\"native\":\"✋🏼\",\"x\":58,\"y\":35},{\"unified\":\"270b-1f3fd\",\"native\":\"✋🏽\",\"x\":58,\"y\":36},{\"unified\":\"270b-1f3fe\",\"native\":\"✋🏾\",\"x\":58,\"y\":37},{\"unified\":\"270b-1f3ff\",\"native\":\"✋🏿\",\"x\":58,\"y\":38}],\"version\":1},\"spock-hand\":{\"id\":\"spock-hand\",\"name\":\"Vulcan Salute\",\"keywords\":[],\"skins\":[{\"unified\":\"1f596\",\"native\":\"🖖\",\"x\":31,\"y\":49},{\"unified\":\"1f596-1f3fb\",\"native\":\"🖖🏻\",\"x\":31,\"y\":50},{\"unified\":\"1f596-1f3fc\",\"native\":\"🖖🏼\",\"x\":31,\"y\":51},{\"unified\":\"1f596-1f3fd\",\"native\":\"🖖🏽\",\"x\":31,\"y\":52},{\"unified\":\"1f596-1f3fe\",\"native\":\"🖖🏾\",\"x\":31,\"y\":53},{\"unified\":\"1f596-1f3ff\",\"native\":\"🖖🏿\",\"x\":31,\"y\":54}],\"version\":1},\"ok_hand\":{\"id\":\"ok_hand\",\"name\":\"Ok Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f44c\",\"native\":\"👌\",\"x\":12,\"y\":44},{\"unified\":\"1f44c-1f3fb\",\"native\":\"👌🏻\",\"x\":12,\"y\":45},{\"unified\":\"1f44c-1f3fc\",\"native\":\"👌🏼\",\"x\":12,\"y\":46},{\"unified\":\"1f44c-1f3fd\",\"native\":\"👌🏽\",\"x\":12,\"y\":47},{\"unified\":\"1f44c-1f3fe\",\"native\":\"👌🏾\",\"x\":12,\"y\":48},{\"unified\":\"1f44c-1f3ff\",\"native\":\"👌🏿\",\"x\":12,\"y\":49}],\"version\":1},\"v\":{\"id\":\"v\",\"name\":\"Victory Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"270c-fe0f\",\"native\":\"✌️\",\"x\":58,\"y\":39},{\"unified\":\"270c-1f3fb\",\"native\":\"✌🏻\",\"x\":58,\"y\":40},{\"unified\":\"270c-1f3fc\",\"native\":\"✌🏼\",\"x\":58,\"y\":41},{\"unified\":\"270c-1f3fd\",\"native\":\"✌🏽\",\"x\":58,\"y\":42},{\"unified\":\"270c-1f3fe\",\"native\":\"✌🏾\",\"x\":58,\"y\":43},{\"unified\":\"270c-1f3ff\",\"native\":\"✌🏿\",\"x\":58,\"y\":44}],\"version\":1},\"crossed_fingers\":{\"id\":\"crossed_fingers\",\"name\":\"Crossed Fingers\",\"keywords\":[],\"skins\":[{\"unified\":\"1f91e\",\"native\":\"🤞\",\"x\":40,\"y\":0},{\"unified\":\"1f91e-1f3fb\",\"native\":\"🤞🏻\",\"x\":40,\"y\":1},{\"unified\":\"1f91e-1f3fc\",\"native\":\"🤞🏼\",\"x\":40,\"y\":2},{\"unified\":\"1f91e-1f3fd\",\"native\":\"🤞🏽\",\"x\":40,\"y\":3},{\"unified\":\"1f91e-1f3fe\",\"native\":\"🤞🏾\",\"x\":40,\"y\":4},{\"unified\":\"1f91e-1f3ff\",\"native\":\"🤞🏿\",\"x\":40,\"y\":5}],\"version\":3},\"the_horns\":{\"id\":\"the_horns\",\"name\":\"Sign of the Horns\",\"keywords\":[],\"skins\":[{\"unified\":\"1f918\",\"native\":\"🤘\",\"x\":39,\"y\":5},{\"unified\":\"1f918-1f3fb\",\"native\":\"🤘🏻\",\"x\":39,\"y\":6},{\"unified\":\"1f918-1f3fc\",\"native\":\"🤘🏼\",\"x\":39,\"y\":7},{\"unified\":\"1f918-1f3fd\",\"native\":\"🤘🏽\",\"x\":39,\"y\":8},{\"unified\":\"1f918-1f3fe\",\"native\":\"🤘🏾\",\"x\":39,\"y\":9},{\"unified\":\"1f918-1f3ff\",\"native\":\"🤘🏿\",\"x\":39,\"y\":10}],\"version\":1},\"call_me_hand\":{\"id\":\"call_me_hand\",\"name\":\"Call Me Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f919\",\"native\":\"🤙\",\"x\":39,\"y\":11},{\"unified\":\"1f919-1f3fb\",\"native\":\"🤙🏻\",\"x\":39,\"y\":12},{\"unified\":\"1f919-1f3fc\",\"native\":\"🤙🏼\",\"x\":39,\"y\":13},{\"unified\":\"1f919-1f3fd\",\"native\":\"🤙🏽\",\"x\":39,\"y\":14},{\"unified\":\"1f919-1f3fe\",\"native\":\"🤙🏾\",\"x\":39,\"y\":15},{\"unified\":\"1f919-1f3ff\",\"native\":\"🤙🏿\",\"x\":39,\"y\":16}],\"version\":3},\"point_left\":{\"id\":\"point_left\",\"name\":\"Backhand Index Pointing Left\",\"keywords\":[],\"skins\":[{\"unified\":\"1f448\",\"native\":\"👈\",\"x\":12,\"y\":20},{\"unified\":\"1f448-1f3fb\",\"native\":\"👈🏻\",\"x\":12,\"y\":21},{\"unified\":\"1f448-1f3fc\",\"native\":\"👈🏼\",\"x\":12,\"y\":22},{\"unified\":\"1f448-1f3fd\",\"native\":\"👈🏽\",\"x\":12,\"y\":23},{\"unified\":\"1f448-1f3fe\",\"native\":\"👈🏾\",\"x\":12,\"y\":24},{\"unified\":\"1f448-1f3ff\",\"native\":\"👈🏿\",\"x\":12,\"y\":25}],\"version\":1},\"point_right\":{\"id\":\"point_right\",\"name\":\"Backhand Index Pointing Right\",\"keywords\":[],\"skins\":[{\"unified\":\"1f449\",\"native\":\"👉\",\"x\":12,\"y\":26},{\"unified\":\"1f449-1f3fb\",\"native\":\"👉🏻\",\"x\":12,\"y\":27},{\"unified\":\"1f449-1f3fc\",\"native\":\"👉🏼\",\"x\":12,\"y\":28},{\"unified\":\"1f449-1f3fd\",\"native\":\"👉🏽\",\"x\":12,\"y\":29},{\"unified\":\"1f449-1f3fe\",\"native\":\"👉🏾\",\"x\":12,\"y\":30},{\"unified\":\"1f449-1f3ff\",\"native\":\"👉🏿\",\"x\":12,\"y\":31}],\"version\":1},\"point_up_2\":{\"id\":\"point_up_2\",\"name\":\"Backhand Index Pointing Up\",\"keywords\":[],\"skins\":[{\"unified\":\"1f446\",\"native\":\"👆\",\"x\":12,\"y\":8},{\"unified\":\"1f446-1f3fb\",\"native\":\"👆🏻\",\"x\":12,\"y\":9},{\"unified\":\"1f446-1f3fc\",\"native\":\"👆🏼\",\"x\":12,\"y\":10},{\"unified\":\"1f446-1f3fd\",\"native\":\"👆🏽\",\"x\":12,\"y\":11},{\"unified\":\"1f446-1f3fe\",\"native\":\"👆🏾\",\"x\":12,\"y\":12},{\"unified\":\"1f446-1f3ff\",\"native\":\"👆🏿\",\"x\":12,\"y\":13}],\"version\":1},\"middle_finger\":{\"id\":\"middle_finger\",\"name\":\"Middle Finger\",\"keywords\":[],\"skins\":[{\"unified\":\"1f595\",\"native\":\"🖕\",\"x\":31,\"y\":43},{\"unified\":\"1f595-1f3fb\",\"native\":\"🖕🏻\",\"x\":31,\"y\":44},{\"unified\":\"1f595-1f3fc\",\"native\":\"🖕🏼\",\"x\":31,\"y\":45},{\"unified\":\"1f595-1f3fd\",\"native\":\"🖕🏽\",\"x\":31,\"y\":46},{\"unified\":\"1f595-1f3fe\",\"native\":\"🖕🏾\",\"x\":31,\"y\":47},{\"unified\":\"1f595-1f3ff\",\"native\":\"🖕🏿\",\"x\":31,\"y\":48}],\"version\":1},\"point_down\":{\"id\":\"point_down\",\"name\":\"Backhand Index Pointing Down\",\"keywords\":[],\"skins\":[{\"unified\":\"1f447\",\"native\":\"👇\",\"x\":12,\"y\":14},{\"unified\":\"1f447-1f3fb\",\"native\":\"👇🏻\",\"x\":12,\"y\":15},{\"unified\":\"1f447-1f3fc\",\"native\":\"👇🏼\",\"x\":12,\"y\":16},{\"unified\":\"1f447-1f3fd\",\"native\":\"👇🏽\",\"x\":12,\"y\":17},{\"unified\":\"1f447-1f3fe\",\"native\":\"👇🏾\",\"x\":12,\"y\":18},{\"unified\":\"1f447-1f3ff\",\"native\":\"👇🏿\",\"x\":12,\"y\":19}],\"version\":1},\"point_up\":{\"id\":\"point_up\",\"name\":\"Index Pointing Up\",\"keywords\":[],\"skins\":[{\"unified\":\"261d-fe0f\",\"native\":\"☝️\",\"x\":56,\"y\":50},{\"unified\":\"261d-1f3fb\",\"native\":\"☝🏻\",\"x\":56,\"y\":51},{\"unified\":\"261d-1f3fc\",\"native\":\"☝🏼\",\"x\":56,\"y\":52},{\"unified\":\"261d-1f3fd\",\"native\":\"☝🏽\",\"x\":56,\"y\":53},{\"unified\":\"261d-1f3fe\",\"native\":\"☝🏾\",\"x\":56,\"y\":54},{\"unified\":\"261d-1f3ff\",\"native\":\"☝🏿\",\"x\":56,\"y\":55}],\"version\":1},\"+1\":{\"id\":\"+1\",\"name\":\"Thumbs Up\",\"keywords\":[],\"skins\":[{\"unified\":\"1f44d\",\"native\":\"👍\",\"x\":12,\"y\":50},{\"unified\":\"1f44d-1f3fb\",\"native\":\"👍🏻\",\"x\":12,\"y\":51},{\"unified\":\"1f44d-1f3fc\",\"native\":\"👍🏼\",\"x\":12,\"y\":52},{\"unified\":\"1f44d-1f3fd\",\"native\":\"👍🏽\",\"x\":12,\"y\":53},{\"unified\":\"1f44d-1f3fe\",\"native\":\"👍🏾\",\"x\":12,\"y\":54},{\"unified\":\"1f44d-1f3ff\",\"native\":\"👍🏿\",\"x\":12,\"y\":55}],\"version\":1},\"-1\":{\"id\":\"-1\",\"name\":\"Thumbs Down\",\"keywords\":[],\"skins\":[{\"unified\":\"1f44e\",\"native\":\"👎\",\"x\":12,\"y\":56},{\"unified\":\"1f44e-1f3fb\",\"native\":\"👎🏻\",\"x\":12,\"y\":57},{\"unified\":\"1f44e-1f3fc\",\"native\":\"👎🏼\",\"x\":12,\"y\":58},{\"unified\":\"1f44e-1f3fd\",\"native\":\"👎🏽\",\"x\":12,\"y\":59},{\"unified\":\"1f44e-1f3fe\",\"native\":\"👎🏾\",\"x\":12,\"y\":60},{\"unified\":\"1f44e-1f3ff\",\"native\":\"👎🏿\",\"x\":13,\"y\":0}],\"version\":1},\"fist\":{\"id\":\"fist\",\"name\":\"Raised Fist\",\"keywords\":[],\"skins\":[{\"unified\":\"270a\",\"native\":\"✊\",\"x\":58,\"y\":27},{\"unified\":\"270a-1f3fb\",\"native\":\"✊🏻\",\"x\":58,\"y\":28},{\"unified\":\"270a-1f3fc\",\"native\":\"✊🏼\",\"x\":58,\"y\":29},{\"unified\":\"270a-1f3fd\",\"native\":\"✊🏽\",\"x\":58,\"y\":30},{\"unified\":\"270a-1f3fe\",\"native\":\"✊🏾\",\"x\":58,\"y\":31},{\"unified\":\"270a-1f3ff\",\"native\":\"✊🏿\",\"x\":58,\"y\":32}],\"version\":1},\"facepunch\":{\"id\":\"facepunch\",\"name\":\"Oncoming Fist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f44a\",\"native\":\"👊\",\"x\":12,\"y\":32},{\"unified\":\"1f44a-1f3fb\",\"native\":\"👊🏻\",\"x\":12,\"y\":33},{\"unified\":\"1f44a-1f3fc\",\"native\":\"👊🏼\",\"x\":12,\"y\":34},{\"unified\":\"1f44a-1f3fd\",\"native\":\"👊🏽\",\"x\":12,\"y\":35},{\"unified\":\"1f44a-1f3fe\",\"native\":\"👊🏾\",\"x\":12,\"y\":36},{\"unified\":\"1f44a-1f3ff\",\"native\":\"👊🏿\",\"x\":12,\"y\":37}],\"version\":1},\"left-facing_fist\":{\"id\":\"left-facing_fist\",\"name\":\"Left-Facing Fist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f91b\",\"native\":\"🤛\",\"x\":39,\"y\":23},{\"unified\":\"1f91b-1f3fb\",\"native\":\"🤛🏻\",\"x\":39,\"y\":24},{\"unified\":\"1f91b-1f3fc\",\"native\":\"🤛🏼\",\"x\":39,\"y\":25},{\"unified\":\"1f91b-1f3fd\",\"native\":\"🤛🏽\",\"x\":39,\"y\":26},{\"unified\":\"1f91b-1f3fe\",\"native\":\"🤛🏾\",\"x\":39,\"y\":27},{\"unified\":\"1f91b-1f3ff\",\"native\":\"🤛🏿\",\"x\":39,\"y\":28}],\"version\":3},\"right-facing_fist\":{\"id\":\"right-facing_fist\",\"name\":\"Right-Facing Fist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f91c\",\"native\":\"🤜\",\"x\":39,\"y\":29},{\"unified\":\"1f91c-1f3fb\",\"native\":\"🤜🏻\",\"x\":39,\"y\":30},{\"unified\":\"1f91c-1f3fc\",\"native\":\"🤜🏼\",\"x\":39,\"y\":31},{\"unified\":\"1f91c-1f3fd\",\"native\":\"🤜🏽\",\"x\":39,\"y\":32},{\"unified\":\"1f91c-1f3fe\",\"native\":\"🤜🏾\",\"x\":39,\"y\":33},{\"unified\":\"1f91c-1f3ff\",\"native\":\"🤜🏿\",\"x\":39,\"y\":34}],\"version\":3},\"clap\":{\"id\":\"clap\",\"name\":\"Clapping Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f44f\",\"native\":\"👏\",\"x\":13,\"y\":1},{\"unified\":\"1f44f-1f3fb\",\"native\":\"👏🏻\",\"x\":13,\"y\":2},{\"unified\":\"1f44f-1f3fc\",\"native\":\"👏🏼\",\"x\":13,\"y\":3},{\"unified\":\"1f44f-1f3fd\",\"native\":\"👏🏽\",\"x\":13,\"y\":4},{\"unified\":\"1f44f-1f3fe\",\"native\":\"👏🏾\",\"x\":13,\"y\":5},{\"unified\":\"1f44f-1f3ff\",\"native\":\"👏🏿\",\"x\":13,\"y\":6}],\"version\":1},\"raised_hands\":{\"id\":\"raised_hands\",\"name\":\"Raising Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64c\",\"native\":\"🙌\",\"x\":34,\"y\":45},{\"unified\":\"1f64c-1f3fb\",\"native\":\"🙌🏻\",\"x\":34,\"y\":46},{\"unified\":\"1f64c-1f3fc\",\"native\":\"🙌🏼\",\"x\":34,\"y\":47},{\"unified\":\"1f64c-1f3fd\",\"native\":\"🙌🏽\",\"x\":34,\"y\":48},{\"unified\":\"1f64c-1f3fe\",\"native\":\"🙌🏾\",\"x\":34,\"y\":49},{\"unified\":\"1f64c-1f3ff\",\"native\":\"🙌🏿\",\"x\":34,\"y\":50}],\"version\":1},\"open_hands\":{\"id\":\"open_hands\",\"name\":\"Open Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f450\",\"native\":\"👐\",\"x\":13,\"y\":7},{\"unified\":\"1f450-1f3fb\",\"native\":\"👐🏻\",\"x\":13,\"y\":8},{\"unified\":\"1f450-1f3fc\",\"native\":\"👐🏼\",\"x\":13,\"y\":9},{\"unified\":\"1f450-1f3fd\",\"native\":\"👐🏽\",\"x\":13,\"y\":10},{\"unified\":\"1f450-1f3fe\",\"native\":\"👐🏾\",\"x\":13,\"y\":11},{\"unified\":\"1f450-1f3ff\",\"native\":\"👐🏿\",\"x\":13,\"y\":12}],\"version\":1},\"handshake\":{\"id\":\"handshake\",\"name\":\"Handshake\",\"keywords\":[],\"skins\":[{\"unified\":\"1f91d\",\"native\":\"🤝\",\"x\":39,\"y\":35},{\"unified\":\"1f91d-1f3fb\",\"native\":\"🤝🏻\",\"x\":39,\"y\":36},{\"unified\":\"1f91d-1f3fc\",\"native\":\"🤝🏼\",\"x\":39,\"y\":37},{\"unified\":\"1f91d-1f3fd\",\"native\":\"🤝🏽\",\"x\":39,\"y\":38},{\"unified\":\"1f91d-1f3fe\",\"native\":\"🤝🏾\",\"x\":39,\"y\":39},{\"unified\":\"1f91d-1f3ff\",\"native\":\"🤝🏿\",\"x\":39,\"y\":40}],\"version\":3},\"pray\":{\"id\":\"pray\",\"name\":\"Folded Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64f\",\"native\":\"🙏\",\"x\":35,\"y\":26},{\"unified\":\"1f64f-1f3fb\",\"native\":\"🙏🏻\",\"x\":35,\"y\":27},{\"unified\":\"1f64f-1f3fc\",\"native\":\"🙏🏼\",\"x\":35,\"y\":28},{\"unified\":\"1f64f-1f3fd\",\"native\":\"🙏🏽\",\"x\":35,\"y\":29},{\"unified\":\"1f64f-1f3fe\",\"native\":\"🙏🏾\",\"x\":35,\"y\":30},{\"unified\":\"1f64f-1f3ff\",\"native\":\"🙏🏿\",\"x\":35,\"y\":31}],\"version\":1},\"writing_hand\":{\"id\":\"writing_hand\",\"name\":\"Writing Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"270d-fe0f\",\"native\":\"✍️\",\"x\":58,\"y\":45},{\"unified\":\"270d-1f3fb\",\"native\":\"✍🏻\",\"x\":58,\"y\":46},{\"unified\":\"270d-1f3fc\",\"native\":\"✍🏼\",\"x\":58,\"y\":47},{\"unified\":\"270d-1f3fd\",\"native\":\"✍🏽\",\"x\":58,\"y\":48},{\"unified\":\"270d-1f3fe\",\"native\":\"✍🏾\",\"x\":58,\"y\":49},{\"unified\":\"270d-1f3ff\",\"native\":\"✍🏿\",\"x\":58,\"y\":50}],\"version\":1},\"nail_care\":{\"id\":\"nail_care\",\"name\":\"Nail Polish\",\"keywords\":[],\"skins\":[{\"unified\":\"1f485\",\"native\":\"💅\",\"x\":25,\"y\":53},{\"unified\":\"1f485-1f3fb\",\"native\":\"💅🏻\",\"x\":25,\"y\":54},{\"unified\":\"1f485-1f3fc\",\"native\":\"💅🏼\",\"x\":25,\"y\":55},{\"unified\":\"1f485-1f3fd\",\"native\":\"💅🏽\",\"x\":25,\"y\":56},{\"unified\":\"1f485-1f3fe\",\"native\":\"💅🏾\",\"x\":25,\"y\":57},{\"unified\":\"1f485-1f3ff\",\"native\":\"💅🏿\",\"x\":25,\"y\":58}],\"version\":1},\"selfie\":{\"id\":\"selfie\",\"name\":\"Selfie\",\"keywords\":[],\"skins\":[{\"unified\":\"1f933\",\"native\":\"🤳\",\"x\":41,\"y\":2},{\"unified\":\"1f933-1f3fb\",\"native\":\"🤳🏻\",\"x\":41,\"y\":3},{\"unified\":\"1f933-1f3fc\",\"native\":\"🤳🏼\",\"x\":41,\"y\":4},{\"unified\":\"1f933-1f3fd\",\"native\":\"🤳🏽\",\"x\":41,\"y\":5},{\"unified\":\"1f933-1f3fe\",\"native\":\"🤳🏾\",\"x\":41,\"y\":6},{\"unified\":\"1f933-1f3ff\",\"native\":\"🤳🏿\",\"x\":41,\"y\":7}],\"version\":3},\"muscle\":{\"id\":\"muscle\",\"name\":\"Flexed Biceps\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4aa\",\"native\":\"💪\",\"x\":27,\"y\":57},{\"unified\":\"1f4aa-1f3fb\",\"native\":\"💪🏻\",\"x\":27,\"y\":58},{\"unified\":\"1f4aa-1f3fc\",\"native\":\"💪🏼\",\"x\":27,\"y\":59},{\"unified\":\"1f4aa-1f3fd\",\"native\":\"💪🏽\",\"x\":27,\"y\":60},{\"unified\":\"1f4aa-1f3fe\",\"native\":\"💪🏾\",\"x\":28,\"y\":0},{\"unified\":\"1f4aa-1f3ff\",\"native\":\"💪🏿\",\"x\":28,\"y\":1}],\"version\":1},\"ear\":{\"id\":\"ear\",\"name\":\"Ear\",\"keywords\":[],\"skins\":[{\"unified\":\"1f442\",\"native\":\"👂\",\"x\":11,\"y\":55},{\"unified\":\"1f442-1f3fb\",\"native\":\"👂🏻\",\"x\":11,\"y\":56},{\"unified\":\"1f442-1f3fc\",\"native\":\"👂🏼\",\"x\":11,\"y\":57},{\"unified\":\"1f442-1f3fd\",\"native\":\"👂🏽\",\"x\":11,\"y\":58},{\"unified\":\"1f442-1f3fe\",\"native\":\"👂🏾\",\"x\":11,\"y\":59},{\"unified\":\"1f442-1f3ff\",\"native\":\"👂🏿\",\"x\":11,\"y\":60}],\"version\":1},\"nose\":{\"id\":\"nose\",\"name\":\"Nose\",\"keywords\":[],\"skins\":[{\"unified\":\"1f443\",\"native\":\"👃\",\"x\":12,\"y\":0},{\"unified\":\"1f443-1f3fb\",\"native\":\"👃🏻\",\"x\":12,\"y\":1},{\"unified\":\"1f443-1f3fc\",\"native\":\"👃🏼\",\"x\":12,\"y\":2},{\"unified\":\"1f443-1f3fd\",\"native\":\"👃🏽\",\"x\":12,\"y\":3},{\"unified\":\"1f443-1f3fe\",\"native\":\"👃🏾\",\"x\":12,\"y\":4},{\"unified\":\"1f443-1f3ff\",\"native\":\"👃🏿\",\"x\":12,\"y\":5}],\"version\":1},\"eyes\":{\"id\":\"eyes\",\"name\":\"Eyes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f440\",\"native\":\"👀\",\"x\":11,\"y\":52}],\"version\":1},\"eye\":{\"id\":\"eye\",\"name\":\"Eye\",\"keywords\":[],\"skins\":[{\"unified\":\"1f441-fe0f\",\"native\":\"👁️\",\"x\":11,\"y\":54}],\"version\":1},\"tongue\":{\"id\":\"tongue\",\"name\":\"Tongue\",\"keywords\":[],\"skins\":[{\"unified\":\"1f445\",\"native\":\"👅\",\"x\":12,\"y\":7}],\"version\":1},\"lips\":{\"id\":\"lips\",\"name\":\"Mouth\",\"keywords\":[],\"skins\":[{\"unified\":\"1f444\",\"native\":\"👄\",\"x\":12,\"y\":6}],\"version\":1},\"baby\":{\"id\":\"baby\",\"name\":\"Baby\",\"keywords\":[],\"skins\":[{\"unified\":\"1f476\",\"native\":\"👶\",\"x\":24,\"y\":28},{\"unified\":\"1f476-1f3fb\",\"native\":\"👶🏻\",\"x\":24,\"y\":29},{\"unified\":\"1f476-1f3fc\",\"native\":\"👶🏼\",\"x\":24,\"y\":30},{\"unified\":\"1f476-1f3fd\",\"native\":\"👶🏽\",\"x\":24,\"y\":31},{\"unified\":\"1f476-1f3fe\",\"native\":\"👶🏾\",\"x\":24,\"y\":32},{\"unified\":\"1f476-1f3ff\",\"native\":\"👶🏿\",\"x\":24,\"y\":33}],\"version\":1},\"boy\":{\"id\":\"boy\",\"name\":\"Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f466\",\"native\":\"👦\",\"x\":13,\"y\":34},{\"unified\":\"1f466-1f3fb\",\"native\":\"👦🏻\",\"x\":13,\"y\":35},{\"unified\":\"1f466-1f3fc\",\"native\":\"👦🏼\",\"x\":13,\"y\":36},{\"unified\":\"1f466-1f3fd\",\"native\":\"👦🏽\",\"x\":13,\"y\":37},{\"unified\":\"1f466-1f3fe\",\"native\":\"👦🏾\",\"x\":13,\"y\":38},{\"unified\":\"1f466-1f3ff\",\"native\":\"👦🏿\",\"x\":13,\"y\":39}],\"version\":1},\"girl\":{\"id\":\"girl\",\"name\":\"Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f467\",\"native\":\"👧\",\"x\":13,\"y\":40},{\"unified\":\"1f467-1f3fb\",\"native\":\"👧🏻\",\"x\":13,\"y\":41},{\"unified\":\"1f467-1f3fc\",\"native\":\"👧🏼\",\"x\":13,\"y\":42},{\"unified\":\"1f467-1f3fd\",\"native\":\"👧🏽\",\"x\":13,\"y\":43},{\"unified\":\"1f467-1f3fe\",\"native\":\"👧🏾\",\"x\":13,\"y\":44},{\"unified\":\"1f467-1f3ff\",\"native\":\"👧🏿\",\"x\":13,\"y\":45}],\"version\":1},\"person_with_blond_hair\":{\"id\":\"person_with_blond_hair\",\"name\":\"Person Blond Hair\",\"keywords\":[],\"skins\":[{\"unified\":\"1f471\",\"native\":\"👱\",\"x\":23,\"y\":47},{\"unified\":\"1f471-1f3fb\",\"native\":\"👱🏻\",\"x\":23,\"y\":48},{\"unified\":\"1f471-1f3fc\",\"native\":\"👱🏼\",\"x\":23,\"y\":49},{\"unified\":\"1f471-1f3fd\",\"native\":\"👱🏽\",\"x\":23,\"y\":50},{\"unified\":\"1f471-1f3fe\",\"native\":\"👱🏾\",\"x\":23,\"y\":51},{\"unified\":\"1f471-1f3ff\",\"native\":\"👱🏿\",\"x\":23,\"y\":52}],\"version\":1},\"man\":{\"id\":\"man\",\"name\":\"Man\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468\",\"native\":\"👨\",\"x\":17,\"y\":13},{\"unified\":\"1f468-1f3fb\",\"native\":\"👨🏻\",\"x\":17,\"y\":14},{\"unified\":\"1f468-1f3fc\",\"native\":\"👨🏼\",\"x\":17,\"y\":15},{\"unified\":\"1f468-1f3fd\",\"native\":\"👨🏽\",\"x\":17,\"y\":16},{\"unified\":\"1f468-1f3fe\",\"native\":\"👨🏾\",\"x\":17,\"y\":17},{\"unified\":\"1f468-1f3ff\",\"native\":\"👨🏿\",\"x\":17,\"y\":18}],\"version\":1},\"woman\":{\"id\":\"woman\",\"name\":\"Woman\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469\",\"native\":\"👩\",\"x\":21,\"y\":33},{\"unified\":\"1f469-1f3fb\",\"native\":\"👩🏻\",\"x\":21,\"y\":34},{\"unified\":\"1f469-1f3fc\",\"native\":\"👩🏼\",\"x\":21,\"y\":35},{\"unified\":\"1f469-1f3fd\",\"native\":\"👩🏽\",\"x\":21,\"y\":36},{\"unified\":\"1f469-1f3fe\",\"native\":\"👩🏾\",\"x\":21,\"y\":37},{\"unified\":\"1f469-1f3ff\",\"native\":\"👩🏿\",\"x\":21,\"y\":38}],\"version\":1},\"blond-haired-woman\":{\"id\":\"blond-haired-woman\",\"name\":\"Woman: Blond Hair\",\"keywords\":[],\"skins\":[{\"unified\":\"1f471-200d-2640-fe0f\",\"native\":\"👱‍♀️\",\"x\":23,\"y\":35},{\"unified\":\"1f471-1f3fb-200d-2640-fe0f\",\"native\":\"👱🏻‍♀️\",\"x\":23,\"y\":36},{\"unified\":\"1f471-1f3fc-200d-2640-fe0f\",\"native\":\"👱🏼‍♀️\",\"x\":23,\"y\":37},{\"unified\":\"1f471-1f3fd-200d-2640-fe0f\",\"native\":\"👱🏽‍♀️\",\"x\":23,\"y\":38},{\"unified\":\"1f471-1f3fe-200d-2640-fe0f\",\"native\":\"👱🏾‍♀️\",\"x\":23,\"y\":39},{\"unified\":\"1f471-1f3ff-200d-2640-fe0f\",\"native\":\"👱🏿‍♀️\",\"x\":23,\"y\":40}],\"version\":4},\"blond-haired-man\":{\"id\":\"blond-haired-man\",\"name\":\"Man: Blond Hair\",\"keywords\":[],\"skins\":[{\"unified\":\"1f471-200d-2642-fe0f\",\"native\":\"👱‍♂️\",\"x\":23,\"y\":41},{\"unified\":\"1f471-1f3fb-200d-2642-fe0f\",\"native\":\"👱🏻‍♂️\",\"x\":23,\"y\":42},{\"unified\":\"1f471-1f3fc-200d-2642-fe0f\",\"native\":\"👱🏼‍♂️\",\"x\":23,\"y\":43},{\"unified\":\"1f471-1f3fd-200d-2642-fe0f\",\"native\":\"👱🏽‍♂️\",\"x\":23,\"y\":44},{\"unified\":\"1f471-1f3fe-200d-2642-fe0f\",\"native\":\"👱🏾‍♂️\",\"x\":23,\"y\":45},{\"unified\":\"1f471-1f3ff-200d-2642-fe0f\",\"native\":\"👱🏿‍♂️\",\"x\":23,\"y\":46}],\"version\":4},\"older_man\":{\"id\":\"older_man\",\"name\":\"Old Man\",\"keywords\":[],\"skins\":[{\"unified\":\"1f474\",\"native\":\"👴\",\"x\":24,\"y\":16},{\"unified\":\"1f474-1f3fb\",\"native\":\"👴🏻\",\"x\":24,\"y\":17},{\"unified\":\"1f474-1f3fc\",\"native\":\"👴🏼\",\"x\":24,\"y\":18},{\"unified\":\"1f474-1f3fd\",\"native\":\"👴🏽\",\"x\":24,\"y\":19},{\"unified\":\"1f474-1f3fe\",\"native\":\"👴🏾\",\"x\":24,\"y\":20},{\"unified\":\"1f474-1f3ff\",\"native\":\"👴🏿\",\"x\":24,\"y\":21}],\"version\":1},\"older_woman\":{\"id\":\"older_woman\",\"name\":\"Old Woman\",\"keywords\":[],\"skins\":[{\"unified\":\"1f475\",\"native\":\"👵\",\"x\":24,\"y\":22},{\"unified\":\"1f475-1f3fb\",\"native\":\"👵🏻\",\"x\":24,\"y\":23},{\"unified\":\"1f475-1f3fc\",\"native\":\"👵🏼\",\"x\":24,\"y\":24},{\"unified\":\"1f475-1f3fd\",\"native\":\"👵🏽\",\"x\":24,\"y\":25},{\"unified\":\"1f475-1f3fe\",\"native\":\"👵🏾\",\"x\":24,\"y\":26},{\"unified\":\"1f475-1f3ff\",\"native\":\"👵🏿\",\"x\":24,\"y\":27}],\"version\":1},\"person_frowning\":{\"id\":\"person_frowning\",\"name\":\"Person Frowning\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64d\",\"native\":\"🙍\",\"x\":35,\"y\":2},{\"unified\":\"1f64d-1f3fb\",\"native\":\"🙍🏻\",\"x\":35,\"y\":3},{\"unified\":\"1f64d-1f3fc\",\"native\":\"🙍🏼\",\"x\":35,\"y\":4},{\"unified\":\"1f64d-1f3fd\",\"native\":\"🙍🏽\",\"x\":35,\"y\":5},{\"unified\":\"1f64d-1f3fe\",\"native\":\"🙍🏾\",\"x\":35,\"y\":6},{\"unified\":\"1f64d-1f3ff\",\"native\":\"🙍🏿\",\"x\":35,\"y\":7}],\"version\":1},\"man-frowning\":{\"id\":\"man-frowning\",\"name\":\"Man Frowning\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64d-200d-2642-fe0f\",\"native\":\"🙍‍♂️\",\"x\":34,\"y\":57},{\"unified\":\"1f64d-1f3fb-200d-2642-fe0f\",\"native\":\"🙍🏻‍♂️\",\"x\":34,\"y\":58},{\"unified\":\"1f64d-1f3fc-200d-2642-fe0f\",\"native\":\"🙍🏼‍♂️\",\"x\":34,\"y\":59},{\"unified\":\"1f64d-1f3fd-200d-2642-fe0f\",\"native\":\"🙍🏽‍♂️\",\"x\":34,\"y\":60},{\"unified\":\"1f64d-1f3fe-200d-2642-fe0f\",\"native\":\"🙍🏾‍♂️\",\"x\":35,\"y\":0},{\"unified\":\"1f64d-1f3ff-200d-2642-fe0f\",\"native\":\"🙍🏿‍♂️\",\"x\":35,\"y\":1}],\"version\":4},\"woman-frowning\":{\"id\":\"woman-frowning\",\"name\":\"Woman Frowning\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64d-200d-2640-fe0f\",\"native\":\"🙍‍♀️\",\"x\":34,\"y\":51},{\"unified\":\"1f64d-1f3fb-200d-2640-fe0f\",\"native\":\"🙍🏻‍♀️\",\"x\":34,\"y\":52},{\"unified\":\"1f64d-1f3fc-200d-2640-fe0f\",\"native\":\"🙍🏼‍♀️\",\"x\":34,\"y\":53},{\"unified\":\"1f64d-1f3fd-200d-2640-fe0f\",\"native\":\"🙍🏽‍♀️\",\"x\":34,\"y\":54},{\"unified\":\"1f64d-1f3fe-200d-2640-fe0f\",\"native\":\"🙍🏾‍♀️\",\"x\":34,\"y\":55},{\"unified\":\"1f64d-1f3ff-200d-2640-fe0f\",\"native\":\"🙍🏿‍♀️\",\"x\":34,\"y\":56}],\"version\":4},\"person_with_pouting_face\":{\"id\":\"person_with_pouting_face\",\"name\":\"Person Pouting\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64e\",\"native\":\"🙎\",\"x\":35,\"y\":20},{\"unified\":\"1f64e-1f3fb\",\"native\":\"🙎🏻\",\"x\":35,\"y\":21},{\"unified\":\"1f64e-1f3fc\",\"native\":\"🙎🏼\",\"x\":35,\"y\":22},{\"unified\":\"1f64e-1f3fd\",\"native\":\"🙎🏽\",\"x\":35,\"y\":23},{\"unified\":\"1f64e-1f3fe\",\"native\":\"🙎🏾\",\"x\":35,\"y\":24},{\"unified\":\"1f64e-1f3ff\",\"native\":\"🙎🏿\",\"x\":35,\"y\":25}],\"version\":1},\"man-pouting\":{\"id\":\"man-pouting\",\"name\":\"Man Pouting\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64e-200d-2642-fe0f\",\"native\":\"🙎‍♂️\",\"x\":35,\"y\":14},{\"unified\":\"1f64e-1f3fb-200d-2642-fe0f\",\"native\":\"🙎🏻‍♂️\",\"x\":35,\"y\":15},{\"unified\":\"1f64e-1f3fc-200d-2642-fe0f\",\"native\":\"🙎🏼‍♂️\",\"x\":35,\"y\":16},{\"unified\":\"1f64e-1f3fd-200d-2642-fe0f\",\"native\":\"🙎🏽‍♂️\",\"x\":35,\"y\":17},{\"unified\":\"1f64e-1f3fe-200d-2642-fe0f\",\"native\":\"🙎🏾‍♂️\",\"x\":35,\"y\":18},{\"unified\":\"1f64e-1f3ff-200d-2642-fe0f\",\"native\":\"🙎🏿‍♂️\",\"x\":35,\"y\":19}],\"version\":4},\"woman-pouting\":{\"id\":\"woman-pouting\",\"name\":\"Woman Pouting\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64e-200d-2640-fe0f\",\"native\":\"🙎‍♀️\",\"x\":35,\"y\":8},{\"unified\":\"1f64e-1f3fb-200d-2640-fe0f\",\"native\":\"🙎🏻‍♀️\",\"x\":35,\"y\":9},{\"unified\":\"1f64e-1f3fc-200d-2640-fe0f\",\"native\":\"🙎🏼‍♀️\",\"x\":35,\"y\":10},{\"unified\":\"1f64e-1f3fd-200d-2640-fe0f\",\"native\":\"🙎🏽‍♀️\",\"x\":35,\"y\":11},{\"unified\":\"1f64e-1f3fe-200d-2640-fe0f\",\"native\":\"🙎🏾‍♀️\",\"x\":35,\"y\":12},{\"unified\":\"1f64e-1f3ff-200d-2640-fe0f\",\"native\":\"🙎🏿‍♀️\",\"x\":35,\"y\":13}],\"version\":4},\"no_good\":{\"id\":\"no_good\",\"name\":\"Person Gesturing No\",\"keywords\":[],\"skins\":[{\"unified\":\"1f645\",\"native\":\"🙅\",\"x\":33,\"y\":43},{\"unified\":\"1f645-1f3fb\",\"native\":\"🙅🏻\",\"x\":33,\"y\":44},{\"unified\":\"1f645-1f3fc\",\"native\":\"🙅🏼\",\"x\":33,\"y\":45},{\"unified\":\"1f645-1f3fd\",\"native\":\"🙅🏽\",\"x\":33,\"y\":46},{\"unified\":\"1f645-1f3fe\",\"native\":\"🙅🏾\",\"x\":33,\"y\":47},{\"unified\":\"1f645-1f3ff\",\"native\":\"🙅🏿\",\"x\":33,\"y\":48}],\"version\":1},\"man-gesturing-no\":{\"id\":\"man-gesturing-no\",\"name\":\"Man Gesturing No\",\"keywords\":[],\"skins\":[{\"unified\":\"1f645-200d-2642-fe0f\",\"native\":\"🙅‍♂️\",\"x\":33,\"y\":37},{\"unified\":\"1f645-1f3fb-200d-2642-fe0f\",\"native\":\"🙅🏻‍♂️\",\"x\":33,\"y\":38},{\"unified\":\"1f645-1f3fc-200d-2642-fe0f\",\"native\":\"🙅🏼‍♂️\",\"x\":33,\"y\":39},{\"unified\":\"1f645-1f3fd-200d-2642-fe0f\",\"native\":\"🙅🏽‍♂️\",\"x\":33,\"y\":40},{\"unified\":\"1f645-1f3fe-200d-2642-fe0f\",\"native\":\"🙅🏾‍♂️\",\"x\":33,\"y\":41},{\"unified\":\"1f645-1f3ff-200d-2642-fe0f\",\"native\":\"🙅🏿‍♂️\",\"x\":33,\"y\":42}],\"version\":4},\"woman-gesturing-no\":{\"id\":\"woman-gesturing-no\",\"name\":\"Woman Gesturing No\",\"keywords\":[],\"skins\":[{\"unified\":\"1f645-200d-2640-fe0f\",\"native\":\"🙅‍♀️\",\"x\":33,\"y\":31},{\"unified\":\"1f645-1f3fb-200d-2640-fe0f\",\"native\":\"🙅🏻‍♀️\",\"x\":33,\"y\":32},{\"unified\":\"1f645-1f3fc-200d-2640-fe0f\",\"native\":\"🙅🏼‍♀️\",\"x\":33,\"y\":33},{\"unified\":\"1f645-1f3fd-200d-2640-fe0f\",\"native\":\"🙅🏽‍♀️\",\"x\":33,\"y\":34},{\"unified\":\"1f645-1f3fe-200d-2640-fe0f\",\"native\":\"🙅🏾‍♀️\",\"x\":33,\"y\":35},{\"unified\":\"1f645-1f3ff-200d-2640-fe0f\",\"native\":\"🙅🏿‍♀️\",\"x\":33,\"y\":36}],\"version\":4},\"ok_woman\":{\"id\":\"ok_woman\",\"name\":\"Person Gesturing Ok\",\"keywords\":[],\"skins\":[{\"unified\":\"1f646\",\"native\":\"🙆\",\"x\":34,\"y\":0},{\"unified\":\"1f646-1f3fb\",\"native\":\"🙆🏻\",\"x\":34,\"y\":1},{\"unified\":\"1f646-1f3fc\",\"native\":\"🙆🏼\",\"x\":34,\"y\":2},{\"unified\":\"1f646-1f3fd\",\"native\":\"🙆🏽\",\"x\":34,\"y\":3},{\"unified\":\"1f646-1f3fe\",\"native\":\"🙆🏾\",\"x\":34,\"y\":4},{\"unified\":\"1f646-1f3ff\",\"native\":\"🙆🏿\",\"x\":34,\"y\":5}],\"version\":1},\"man-gesturing-ok\":{\"id\":\"man-gesturing-ok\",\"name\":\"Man Gesturing Ok\",\"keywords\":[],\"skins\":[{\"unified\":\"1f646-200d-2642-fe0f\",\"native\":\"🙆‍♂️\",\"x\":33,\"y\":55},{\"unified\":\"1f646-1f3fb-200d-2642-fe0f\",\"native\":\"🙆🏻‍♂️\",\"x\":33,\"y\":56},{\"unified\":\"1f646-1f3fc-200d-2642-fe0f\",\"native\":\"🙆🏼‍♂️\",\"x\":33,\"y\":57},{\"unified\":\"1f646-1f3fd-200d-2642-fe0f\",\"native\":\"🙆🏽‍♂️\",\"x\":33,\"y\":58},{\"unified\":\"1f646-1f3fe-200d-2642-fe0f\",\"native\":\"🙆🏾‍♂️\",\"x\":33,\"y\":59},{\"unified\":\"1f646-1f3ff-200d-2642-fe0f\",\"native\":\"🙆🏿‍♂️\",\"x\":33,\"y\":60}],\"version\":4},\"woman-gesturing-ok\":{\"id\":\"woman-gesturing-ok\",\"name\":\"Woman Gesturing Ok\",\"keywords\":[],\"skins\":[{\"unified\":\"1f646-200d-2640-fe0f\",\"native\":\"🙆‍♀️\",\"x\":33,\"y\":49},{\"unified\":\"1f646-1f3fb-200d-2640-fe0f\",\"native\":\"🙆🏻‍♀️\",\"x\":33,\"y\":50},{\"unified\":\"1f646-1f3fc-200d-2640-fe0f\",\"native\":\"🙆🏼‍♀️\",\"x\":33,\"y\":51},{\"unified\":\"1f646-1f3fd-200d-2640-fe0f\",\"native\":\"🙆🏽‍♀️\",\"x\":33,\"y\":52},{\"unified\":\"1f646-1f3fe-200d-2640-fe0f\",\"native\":\"🙆🏾‍♀️\",\"x\":33,\"y\":53},{\"unified\":\"1f646-1f3ff-200d-2640-fe0f\",\"native\":\"🙆🏿‍♀️\",\"x\":33,\"y\":54}],\"version\":4},\"information_desk_person\":{\"id\":\"information_desk_person\",\"name\":\"Person Tipping Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f481\",\"native\":\"💁\",\"x\":25,\"y\":22},{\"unified\":\"1f481-1f3fb\",\"native\":\"💁🏻\",\"x\":25,\"y\":23},{\"unified\":\"1f481-1f3fc\",\"native\":\"💁🏼\",\"x\":25,\"y\":24},{\"unified\":\"1f481-1f3fd\",\"native\":\"💁🏽\",\"x\":25,\"y\":25},{\"unified\":\"1f481-1f3fe\",\"native\":\"💁🏾\",\"x\":25,\"y\":26},{\"unified\":\"1f481-1f3ff\",\"native\":\"💁🏿\",\"x\":25,\"y\":27}],\"version\":1},\"man-tipping-hand\":{\"id\":\"man-tipping-hand\",\"name\":\"Man Tipping Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f481-200d-2642-fe0f\",\"native\":\"💁‍♂️\",\"x\":25,\"y\":16},{\"unified\":\"1f481-1f3fb-200d-2642-fe0f\",\"native\":\"💁🏻‍♂️\",\"x\":25,\"y\":17},{\"unified\":\"1f481-1f3fc-200d-2642-fe0f\",\"native\":\"💁🏼‍♂️\",\"x\":25,\"y\":18},{\"unified\":\"1f481-1f3fd-200d-2642-fe0f\",\"native\":\"💁🏽‍♂️\",\"x\":25,\"y\":19},{\"unified\":\"1f481-1f3fe-200d-2642-fe0f\",\"native\":\"💁🏾‍♂️\",\"x\":25,\"y\":20},{\"unified\":\"1f481-1f3ff-200d-2642-fe0f\",\"native\":\"💁🏿‍♂️\",\"x\":25,\"y\":21}],\"version\":4},\"woman-tipping-hand\":{\"id\":\"woman-tipping-hand\",\"name\":\"Woman Tipping Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f481-200d-2640-fe0f\",\"native\":\"💁‍♀️\",\"x\":25,\"y\":10},{\"unified\":\"1f481-1f3fb-200d-2640-fe0f\",\"native\":\"💁🏻‍♀️\",\"x\":25,\"y\":11},{\"unified\":\"1f481-1f3fc-200d-2640-fe0f\",\"native\":\"💁🏼‍♀️\",\"x\":25,\"y\":12},{\"unified\":\"1f481-1f3fd-200d-2640-fe0f\",\"native\":\"💁🏽‍♀️\",\"x\":25,\"y\":13},{\"unified\":\"1f481-1f3fe-200d-2640-fe0f\",\"native\":\"💁🏾‍♀️\",\"x\":25,\"y\":14},{\"unified\":\"1f481-1f3ff-200d-2640-fe0f\",\"native\":\"💁🏿‍♀️\",\"x\":25,\"y\":15}],\"version\":4},\"raising_hand\":{\"id\":\"raising_hand\",\"name\":\"Person Raising Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64b\",\"native\":\"🙋\",\"x\":34,\"y\":39},{\"unified\":\"1f64b-1f3fb\",\"native\":\"🙋🏻\",\"x\":34,\"y\":40},{\"unified\":\"1f64b-1f3fc\",\"native\":\"🙋🏼\",\"x\":34,\"y\":41},{\"unified\":\"1f64b-1f3fd\",\"native\":\"🙋🏽\",\"x\":34,\"y\":42},{\"unified\":\"1f64b-1f3fe\",\"native\":\"🙋🏾\",\"x\":34,\"y\":43},{\"unified\":\"1f64b-1f3ff\",\"native\":\"🙋🏿\",\"x\":34,\"y\":44}],\"version\":1},\"man-raising-hand\":{\"id\":\"man-raising-hand\",\"name\":\"Man Raising Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64b-200d-2642-fe0f\",\"native\":\"🙋‍♂️\",\"x\":34,\"y\":33},{\"unified\":\"1f64b-1f3fb-200d-2642-fe0f\",\"native\":\"🙋🏻‍♂️\",\"x\":34,\"y\":34},{\"unified\":\"1f64b-1f3fc-200d-2642-fe0f\",\"native\":\"🙋🏼‍♂️\",\"x\":34,\"y\":35},{\"unified\":\"1f64b-1f3fd-200d-2642-fe0f\",\"native\":\"🙋🏽‍♂️\",\"x\":34,\"y\":36},{\"unified\":\"1f64b-1f3fe-200d-2642-fe0f\",\"native\":\"🙋🏾‍♂️\",\"x\":34,\"y\":37},{\"unified\":\"1f64b-1f3ff-200d-2642-fe0f\",\"native\":\"🙋🏿‍♂️\",\"x\":34,\"y\":38}],\"version\":4},\"woman-raising-hand\":{\"id\":\"woman-raising-hand\",\"name\":\"Woman Raising Hand\",\"keywords\":[],\"skins\":[{\"unified\":\"1f64b-200d-2640-fe0f\",\"native\":\"🙋‍♀️\",\"x\":34,\"y\":27},{\"unified\":\"1f64b-1f3fb-200d-2640-fe0f\",\"native\":\"🙋🏻‍♀️\",\"x\":34,\"y\":28},{\"unified\":\"1f64b-1f3fc-200d-2640-fe0f\",\"native\":\"🙋🏼‍♀️\",\"x\":34,\"y\":29},{\"unified\":\"1f64b-1f3fd-200d-2640-fe0f\",\"native\":\"🙋🏽‍♀️\",\"x\":34,\"y\":30},{\"unified\":\"1f64b-1f3fe-200d-2640-fe0f\",\"native\":\"🙋🏾‍♀️\",\"x\":34,\"y\":31},{\"unified\":\"1f64b-1f3ff-200d-2640-fe0f\",\"native\":\"🙋🏿‍♀️\",\"x\":34,\"y\":32}],\"version\":4},\"bow\":{\"id\":\"bow\",\"name\":\"Person Bowing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f647\",\"native\":\"🙇\",\"x\":34,\"y\":18},{\"unified\":\"1f647-1f3fb\",\"native\":\"🙇🏻\",\"x\":34,\"y\":19},{\"unified\":\"1f647-1f3fc\",\"native\":\"🙇🏼\",\"x\":34,\"y\":20},{\"unified\":\"1f647-1f3fd\",\"native\":\"🙇🏽\",\"x\":34,\"y\":21},{\"unified\":\"1f647-1f3fe\",\"native\":\"🙇🏾\",\"x\":34,\"y\":22},{\"unified\":\"1f647-1f3ff\",\"native\":\"🙇🏿\",\"x\":34,\"y\":23}],\"version\":1},\"man-bowing\":{\"id\":\"man-bowing\",\"name\":\"Man Bowing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f647-200d-2642-fe0f\",\"native\":\"🙇‍♂️\",\"x\":34,\"y\":12},{\"unified\":\"1f647-1f3fb-200d-2642-fe0f\",\"native\":\"🙇🏻‍♂️\",\"x\":34,\"y\":13},{\"unified\":\"1f647-1f3fc-200d-2642-fe0f\",\"native\":\"🙇🏼‍♂️\",\"x\":34,\"y\":14},{\"unified\":\"1f647-1f3fd-200d-2642-fe0f\",\"native\":\"🙇🏽‍♂️\",\"x\":34,\"y\":15},{\"unified\":\"1f647-1f3fe-200d-2642-fe0f\",\"native\":\"🙇🏾‍♂️\",\"x\":34,\"y\":16},{\"unified\":\"1f647-1f3ff-200d-2642-fe0f\",\"native\":\"🙇🏿‍♂️\",\"x\":34,\"y\":17}],\"version\":4},\"woman-bowing\":{\"id\":\"woman-bowing\",\"name\":\"Woman Bowing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f647-200d-2640-fe0f\",\"native\":\"🙇‍♀️\",\"x\":34,\"y\":6},{\"unified\":\"1f647-1f3fb-200d-2640-fe0f\",\"native\":\"🙇🏻‍♀️\",\"x\":34,\"y\":7},{\"unified\":\"1f647-1f3fc-200d-2640-fe0f\",\"native\":\"🙇🏼‍♀️\",\"x\":34,\"y\":8},{\"unified\":\"1f647-1f3fd-200d-2640-fe0f\",\"native\":\"🙇🏽‍♀️\",\"x\":34,\"y\":9},{\"unified\":\"1f647-1f3fe-200d-2640-fe0f\",\"native\":\"🙇🏾‍♀️\",\"x\":34,\"y\":10},{\"unified\":\"1f647-1f3ff-200d-2640-fe0f\",\"native\":\"🙇🏿‍♀️\",\"x\":34,\"y\":11}],\"version\":4},\"face_palm\":{\"id\":\"face_palm\",\"name\":\"Face Palm\",\"keywords\":[],\"skins\":[{\"unified\":\"1f926\",\"native\":\"🤦\",\"x\":40,\"y\":30},{\"unified\":\"1f926-1f3fb\",\"native\":\"🤦🏻\",\"x\":40,\"y\":31},{\"unified\":\"1f926-1f3fc\",\"native\":\"🤦🏼\",\"x\":40,\"y\":32},{\"unified\":\"1f926-1f3fd\",\"native\":\"🤦🏽\",\"x\":40,\"y\":33},{\"unified\":\"1f926-1f3fe\",\"native\":\"🤦🏾\",\"x\":40,\"y\":34},{\"unified\":\"1f926-1f3ff\",\"native\":\"🤦🏿\",\"x\":40,\"y\":35}],\"version\":3},\"man-facepalming\":{\"id\":\"man-facepalming\",\"name\":\"Man Facepalming\",\"keywords\":[],\"skins\":[{\"unified\":\"1f926-200d-2642-fe0f\",\"native\":\"🤦‍♂️\",\"x\":40,\"y\":24},{\"unified\":\"1f926-1f3fb-200d-2642-fe0f\",\"native\":\"🤦🏻‍♂️\",\"x\":40,\"y\":25},{\"unified\":\"1f926-1f3fc-200d-2642-fe0f\",\"native\":\"🤦🏼‍♂️\",\"x\":40,\"y\":26},{\"unified\":\"1f926-1f3fd-200d-2642-fe0f\",\"native\":\"🤦🏽‍♂️\",\"x\":40,\"y\":27},{\"unified\":\"1f926-1f3fe-200d-2642-fe0f\",\"native\":\"🤦🏾‍♂️\",\"x\":40,\"y\":28},{\"unified\":\"1f926-1f3ff-200d-2642-fe0f\",\"native\":\"🤦🏿‍♂️\",\"x\":40,\"y\":29}],\"version\":4},\"woman-facepalming\":{\"id\":\"woman-facepalming\",\"name\":\"Woman Facepalming\",\"keywords\":[],\"skins\":[{\"unified\":\"1f926-200d-2640-fe0f\",\"native\":\"🤦‍♀️\",\"x\":40,\"y\":18},{\"unified\":\"1f926-1f3fb-200d-2640-fe0f\",\"native\":\"🤦🏻‍♀️\",\"x\":40,\"y\":19},{\"unified\":\"1f926-1f3fc-200d-2640-fe0f\",\"native\":\"🤦🏼‍♀️\",\"x\":40,\"y\":20},{\"unified\":\"1f926-1f3fd-200d-2640-fe0f\",\"native\":\"🤦🏽‍♀️\",\"x\":40,\"y\":21},{\"unified\":\"1f926-1f3fe-200d-2640-fe0f\",\"native\":\"🤦🏾‍♀️\",\"x\":40,\"y\":22},{\"unified\":\"1f926-1f3ff-200d-2640-fe0f\",\"native\":\"🤦🏿‍♀️\",\"x\":40,\"y\":23}],\"version\":4},\"shrug\":{\"id\":\"shrug\",\"name\":\"Shrug\",\"keywords\":[],\"skins\":[{\"unified\":\"1f937\",\"native\":\"🤷\",\"x\":41,\"y\":50},{\"unified\":\"1f937-1f3fb\",\"native\":\"🤷🏻\",\"x\":41,\"y\":51},{\"unified\":\"1f937-1f3fc\",\"native\":\"🤷🏼\",\"x\":41,\"y\":52},{\"unified\":\"1f937-1f3fd\",\"native\":\"🤷🏽\",\"x\":41,\"y\":53},{\"unified\":\"1f937-1f3fe\",\"native\":\"🤷🏾\",\"x\":41,\"y\":54},{\"unified\":\"1f937-1f3ff\",\"native\":\"🤷🏿\",\"x\":41,\"y\":55}],\"version\":3},\"man-shrugging\":{\"id\":\"man-shrugging\",\"name\":\"Man Shrugging\",\"keywords\":[],\"skins\":[{\"unified\":\"1f937-200d-2642-fe0f\",\"native\":\"🤷‍♂️\",\"x\":41,\"y\":44},{\"unified\":\"1f937-1f3fb-200d-2642-fe0f\",\"native\":\"🤷🏻‍♂️\",\"x\":41,\"y\":45},{\"unified\":\"1f937-1f3fc-200d-2642-fe0f\",\"native\":\"🤷🏼‍♂️\",\"x\":41,\"y\":46},{\"unified\":\"1f937-1f3fd-200d-2642-fe0f\",\"native\":\"🤷🏽‍♂️\",\"x\":41,\"y\":47},{\"unified\":\"1f937-1f3fe-200d-2642-fe0f\",\"native\":\"🤷🏾‍♂️\",\"x\":41,\"y\":48},{\"unified\":\"1f937-1f3ff-200d-2642-fe0f\",\"native\":\"🤷🏿‍♂️\",\"x\":41,\"y\":49}],\"version\":4},\"woman-shrugging\":{\"id\":\"woman-shrugging\",\"name\":\"Woman Shrugging\",\"keywords\":[],\"skins\":[{\"unified\":\"1f937-200d-2640-fe0f\",\"native\":\"🤷‍♀️\",\"x\":41,\"y\":38},{\"unified\":\"1f937-1f3fb-200d-2640-fe0f\",\"native\":\"🤷🏻‍♀️\",\"x\":41,\"y\":39},{\"unified\":\"1f937-1f3fc-200d-2640-fe0f\",\"native\":\"🤷🏼‍♀️\",\"x\":41,\"y\":40},{\"unified\":\"1f937-1f3fd-200d-2640-fe0f\",\"native\":\"🤷🏽‍♀️\",\"x\":41,\"y\":41},{\"unified\":\"1f937-1f3fe-200d-2640-fe0f\",\"native\":\"🤷🏾‍♀️\",\"x\":41,\"y\":42},{\"unified\":\"1f937-1f3ff-200d-2640-fe0f\",\"native\":\"🤷🏿‍♀️\",\"x\":41,\"y\":43}],\"version\":4},\"male-doctor\":{\"id\":\"male-doctor\",\"name\":\"Man Health Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-2695-fe0f\",\"native\":\"👨‍⚕️\",\"x\":16,\"y\":4},{\"unified\":\"1f468-1f3fb-200d-2695-fe0f\",\"native\":\"👨🏻‍⚕️\",\"x\":16,\"y\":5},{\"unified\":\"1f468-1f3fc-200d-2695-fe0f\",\"native\":\"👨🏼‍⚕️\",\"x\":16,\"y\":6},{\"unified\":\"1f468-1f3fd-200d-2695-fe0f\",\"native\":\"👨🏽‍⚕️\",\"x\":16,\"y\":7},{\"unified\":\"1f468-1f3fe-200d-2695-fe0f\",\"native\":\"👨🏾‍⚕️\",\"x\":16,\"y\":8},{\"unified\":\"1f468-1f3ff-200d-2695-fe0f\",\"native\":\"👨🏿‍⚕️\",\"x\":16,\"y\":9}],\"version\":4},\"female-doctor\":{\"id\":\"female-doctor\",\"name\":\"Woman Health Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2695-fe0f\",\"native\":\"👩‍⚕️\",\"x\":19,\"y\":33},{\"unified\":\"1f469-1f3fb-200d-2695-fe0f\",\"native\":\"👩🏻‍⚕️\",\"x\":19,\"y\":34},{\"unified\":\"1f469-1f3fc-200d-2695-fe0f\",\"native\":\"👩🏼‍⚕️\",\"x\":19,\"y\":35},{\"unified\":\"1f469-1f3fd-200d-2695-fe0f\",\"native\":\"👩🏽‍⚕️\",\"x\":19,\"y\":36},{\"unified\":\"1f469-1f3fe-200d-2695-fe0f\",\"native\":\"👩🏾‍⚕️\",\"x\":19,\"y\":37},{\"unified\":\"1f469-1f3ff-200d-2695-fe0f\",\"native\":\"👩🏿‍⚕️\",\"x\":19,\"y\":38}],\"version\":4},\"male-student\":{\"id\":\"male-student\",\"name\":\"Man Student\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f393\",\"native\":\"👨‍🎓\",\"x\":14,\"y\":3},{\"unified\":\"1f468-1f3fb-200d-1f393\",\"native\":\"👨🏻‍🎓\",\"x\":14,\"y\":4},{\"unified\":\"1f468-1f3fc-200d-1f393\",\"native\":\"👨🏼‍🎓\",\"x\":14,\"y\":5},{\"unified\":\"1f468-1f3fd-200d-1f393\",\"native\":\"👨🏽‍🎓\",\"x\":14,\"y\":6},{\"unified\":\"1f468-1f3fe-200d-1f393\",\"native\":\"👨🏾‍🎓\",\"x\":14,\"y\":7},{\"unified\":\"1f468-1f3ff-200d-1f393\",\"native\":\"👨🏿‍🎓\",\"x\":14,\"y\":8}],\"version\":4},\"female-student\":{\"id\":\"female-student\",\"name\":\"Woman Student\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f393\",\"native\":\"👩‍🎓\",\"x\":17,\"y\":37},{\"unified\":\"1f469-1f3fb-200d-1f393\",\"native\":\"👩🏻‍🎓\",\"x\":17,\"y\":38},{\"unified\":\"1f469-1f3fc-200d-1f393\",\"native\":\"👩🏼‍🎓\",\"x\":17,\"y\":39},{\"unified\":\"1f469-1f3fd-200d-1f393\",\"native\":\"👩🏽‍🎓\",\"x\":17,\"y\":40},{\"unified\":\"1f469-1f3fe-200d-1f393\",\"native\":\"👩🏾‍🎓\",\"x\":17,\"y\":41},{\"unified\":\"1f469-1f3ff-200d-1f393\",\"native\":\"👩🏿‍🎓\",\"x\":17,\"y\":42}],\"version\":4},\"male-teacher\":{\"id\":\"male-teacher\",\"name\":\"Man Teacher\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f3eb\",\"native\":\"👨‍🏫\",\"x\":14,\"y\":21},{\"unified\":\"1f468-1f3fb-200d-1f3eb\",\"native\":\"👨🏻‍🏫\",\"x\":14,\"y\":22},{\"unified\":\"1f468-1f3fc-200d-1f3eb\",\"native\":\"👨🏼‍🏫\",\"x\":14,\"y\":23},{\"unified\":\"1f468-1f3fd-200d-1f3eb\",\"native\":\"👨🏽‍🏫\",\"x\":14,\"y\":24},{\"unified\":\"1f468-1f3fe-200d-1f3eb\",\"native\":\"👨🏾‍🏫\",\"x\":14,\"y\":25},{\"unified\":\"1f468-1f3ff-200d-1f3eb\",\"native\":\"👨🏿‍🏫\",\"x\":14,\"y\":26}],\"version\":4},\"female-teacher\":{\"id\":\"female-teacher\",\"name\":\"Woman Teacher\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f3eb\",\"native\":\"👩‍🏫\",\"x\":17,\"y\":55},{\"unified\":\"1f469-1f3fb-200d-1f3eb\",\"native\":\"👩🏻‍🏫\",\"x\":17,\"y\":56},{\"unified\":\"1f469-1f3fc-200d-1f3eb\",\"native\":\"👩🏼‍🏫\",\"x\":17,\"y\":57},{\"unified\":\"1f469-1f3fd-200d-1f3eb\",\"native\":\"👩🏽‍🏫\",\"x\":17,\"y\":58},{\"unified\":\"1f469-1f3fe-200d-1f3eb\",\"native\":\"👩🏾‍🏫\",\"x\":17,\"y\":59},{\"unified\":\"1f469-1f3ff-200d-1f3eb\",\"native\":\"👩🏿‍🏫\",\"x\":17,\"y\":60}],\"version\":4},\"male-judge\":{\"id\":\"male-judge\",\"name\":\"Man Judge\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-2696-fe0f\",\"native\":\"👨‍⚖️\",\"x\":16,\"y\":10},{\"unified\":\"1f468-1f3fb-200d-2696-fe0f\",\"native\":\"👨🏻‍⚖️\",\"x\":16,\"y\":11},{\"unified\":\"1f468-1f3fc-200d-2696-fe0f\",\"native\":\"👨🏼‍⚖️\",\"x\":16,\"y\":12},{\"unified\":\"1f468-1f3fd-200d-2696-fe0f\",\"native\":\"👨🏽‍⚖️\",\"x\":16,\"y\":13},{\"unified\":\"1f468-1f3fe-200d-2696-fe0f\",\"native\":\"👨🏾‍⚖️\",\"x\":16,\"y\":14},{\"unified\":\"1f468-1f3ff-200d-2696-fe0f\",\"native\":\"👨🏿‍⚖️\",\"x\":16,\"y\":15}],\"version\":4},\"female-judge\":{\"id\":\"female-judge\",\"name\":\"Woman Judge\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2696-fe0f\",\"native\":\"👩‍⚖️\",\"x\":19,\"y\":39},{\"unified\":\"1f469-1f3fb-200d-2696-fe0f\",\"native\":\"👩🏻‍⚖️\",\"x\":19,\"y\":40},{\"unified\":\"1f469-1f3fc-200d-2696-fe0f\",\"native\":\"👩🏼‍⚖️\",\"x\":19,\"y\":41},{\"unified\":\"1f469-1f3fd-200d-2696-fe0f\",\"native\":\"👩🏽‍⚖️\",\"x\":19,\"y\":42},{\"unified\":\"1f469-1f3fe-200d-2696-fe0f\",\"native\":\"👩🏾‍⚖️\",\"x\":19,\"y\":43},{\"unified\":\"1f469-1f3ff-200d-2696-fe0f\",\"native\":\"👩🏿‍⚖️\",\"x\":19,\"y\":44}],\"version\":4},\"male-farmer\":{\"id\":\"male-farmer\",\"name\":\"Man Farmer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f33e\",\"native\":\"👨‍🌾\",\"x\":13,\"y\":46},{\"unified\":\"1f468-1f3fb-200d-1f33e\",\"native\":\"👨🏻‍🌾\",\"x\":13,\"y\":47},{\"unified\":\"1f468-1f3fc-200d-1f33e\",\"native\":\"👨🏼‍🌾\",\"x\":13,\"y\":48},{\"unified\":\"1f468-1f3fd-200d-1f33e\",\"native\":\"👨🏽‍🌾\",\"x\":13,\"y\":49},{\"unified\":\"1f468-1f3fe-200d-1f33e\",\"native\":\"👨🏾‍🌾\",\"x\":13,\"y\":50},{\"unified\":\"1f468-1f3ff-200d-1f33e\",\"native\":\"👨🏿‍🌾\",\"x\":13,\"y\":51}],\"version\":4},\"female-farmer\":{\"id\":\"female-farmer\",\"name\":\"Woman Farmer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f33e\",\"native\":\"👩‍🌾\",\"x\":17,\"y\":19},{\"unified\":\"1f469-1f3fb-200d-1f33e\",\"native\":\"👩🏻‍🌾\",\"x\":17,\"y\":20},{\"unified\":\"1f469-1f3fc-200d-1f33e\",\"native\":\"👩🏼‍🌾\",\"x\":17,\"y\":21},{\"unified\":\"1f469-1f3fd-200d-1f33e\",\"native\":\"👩🏽‍🌾\",\"x\":17,\"y\":22},{\"unified\":\"1f469-1f3fe-200d-1f33e\",\"native\":\"👩🏾‍🌾\",\"x\":17,\"y\":23},{\"unified\":\"1f469-1f3ff-200d-1f33e\",\"native\":\"👩🏿‍🌾\",\"x\":17,\"y\":24}],\"version\":4},\"male-cook\":{\"id\":\"male-cook\",\"name\":\"Man Cook\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f373\",\"native\":\"👨‍🍳\",\"x\":13,\"y\":52},{\"unified\":\"1f468-1f3fb-200d-1f373\",\"native\":\"👨🏻‍🍳\",\"x\":13,\"y\":53},{\"unified\":\"1f468-1f3fc-200d-1f373\",\"native\":\"👨🏼‍🍳\",\"x\":13,\"y\":54},{\"unified\":\"1f468-1f3fd-200d-1f373\",\"native\":\"👨🏽‍🍳\",\"x\":13,\"y\":55},{\"unified\":\"1f468-1f3fe-200d-1f373\",\"native\":\"👨🏾‍🍳\",\"x\":13,\"y\":56},{\"unified\":\"1f468-1f3ff-200d-1f373\",\"native\":\"👨🏿‍🍳\",\"x\":13,\"y\":57}],\"version\":4},\"female-cook\":{\"id\":\"female-cook\",\"name\":\"Woman Cook\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f373\",\"native\":\"👩‍🍳\",\"x\":17,\"y\":25},{\"unified\":\"1f469-1f3fb-200d-1f373\",\"native\":\"👩🏻‍🍳\",\"x\":17,\"y\":26},{\"unified\":\"1f469-1f3fc-200d-1f373\",\"native\":\"👩🏼‍🍳\",\"x\":17,\"y\":27},{\"unified\":\"1f469-1f3fd-200d-1f373\",\"native\":\"👩🏽‍🍳\",\"x\":17,\"y\":28},{\"unified\":\"1f469-1f3fe-200d-1f373\",\"native\":\"👩🏾‍🍳\",\"x\":17,\"y\":29},{\"unified\":\"1f469-1f3ff-200d-1f373\",\"native\":\"👩🏿‍🍳\",\"x\":17,\"y\":30}],\"version\":4},\"male-mechanic\":{\"id\":\"male-mechanic\",\"name\":\"Man Mechanic\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f527\",\"native\":\"👨‍🔧\",\"x\":14,\"y\":60},{\"unified\":\"1f468-1f3fb-200d-1f527\",\"native\":\"👨🏻‍🔧\",\"x\":15,\"y\":0},{\"unified\":\"1f468-1f3fc-200d-1f527\",\"native\":\"👨🏼‍🔧\",\"x\":15,\"y\":1},{\"unified\":\"1f468-1f3fd-200d-1f527\",\"native\":\"👨🏽‍🔧\",\"x\":15,\"y\":2},{\"unified\":\"1f468-1f3fe-200d-1f527\",\"native\":\"👨🏾‍🔧\",\"x\":15,\"y\":3},{\"unified\":\"1f468-1f3ff-200d-1f527\",\"native\":\"👨🏿‍🔧\",\"x\":15,\"y\":4}],\"version\":4},\"female-mechanic\":{\"id\":\"female-mechanic\",\"name\":\"Woman Mechanic\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f527\",\"native\":\"👩‍🔧\",\"x\":18,\"y\":28},{\"unified\":\"1f469-1f3fb-200d-1f527\",\"native\":\"👩🏻‍🔧\",\"x\":18,\"y\":29},{\"unified\":\"1f469-1f3fc-200d-1f527\",\"native\":\"👩🏼‍🔧\",\"x\":18,\"y\":30},{\"unified\":\"1f469-1f3fd-200d-1f527\",\"native\":\"👩🏽‍🔧\",\"x\":18,\"y\":31},{\"unified\":\"1f469-1f3fe-200d-1f527\",\"native\":\"👩🏾‍🔧\",\"x\":18,\"y\":32},{\"unified\":\"1f469-1f3ff-200d-1f527\",\"native\":\"👩🏿‍🔧\",\"x\":18,\"y\":33}],\"version\":4},\"male-factory-worker\":{\"id\":\"male-factory-worker\",\"name\":\"Man Factory Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f3ed\",\"native\":\"👨‍🏭\",\"x\":14,\"y\":27},{\"unified\":\"1f468-1f3fb-200d-1f3ed\",\"native\":\"👨🏻‍🏭\",\"x\":14,\"y\":28},{\"unified\":\"1f468-1f3fc-200d-1f3ed\",\"native\":\"👨🏼‍🏭\",\"x\":14,\"y\":29},{\"unified\":\"1f468-1f3fd-200d-1f3ed\",\"native\":\"👨🏽‍🏭\",\"x\":14,\"y\":30},{\"unified\":\"1f468-1f3fe-200d-1f3ed\",\"native\":\"👨🏾‍🏭\",\"x\":14,\"y\":31},{\"unified\":\"1f468-1f3ff-200d-1f3ed\",\"native\":\"👨🏿‍🏭\",\"x\":14,\"y\":32}],\"version\":4},\"female-factory-worker\":{\"id\":\"female-factory-worker\",\"name\":\"Woman Factory Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f3ed\",\"native\":\"👩‍🏭\",\"x\":18,\"y\":0},{\"unified\":\"1f469-1f3fb-200d-1f3ed\",\"native\":\"👩🏻‍🏭\",\"x\":18,\"y\":1},{\"unified\":\"1f469-1f3fc-200d-1f3ed\",\"native\":\"👩🏼‍🏭\",\"x\":18,\"y\":2},{\"unified\":\"1f469-1f3fd-200d-1f3ed\",\"native\":\"👩🏽‍🏭\",\"x\":18,\"y\":3},{\"unified\":\"1f469-1f3fe-200d-1f3ed\",\"native\":\"👩🏾‍🏭\",\"x\":18,\"y\":4},{\"unified\":\"1f469-1f3ff-200d-1f3ed\",\"native\":\"👩🏿‍🏭\",\"x\":18,\"y\":5}],\"version\":4},\"male-office-worker\":{\"id\":\"male-office-worker\",\"name\":\"Man Office Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f4bc\",\"native\":\"👨‍💼\",\"x\":14,\"y\":54},{\"unified\":\"1f468-1f3fb-200d-1f4bc\",\"native\":\"👨🏻‍💼\",\"x\":14,\"y\":55},{\"unified\":\"1f468-1f3fc-200d-1f4bc\",\"native\":\"👨🏼‍💼\",\"x\":14,\"y\":56},{\"unified\":\"1f468-1f3fd-200d-1f4bc\",\"native\":\"👨🏽‍💼\",\"x\":14,\"y\":57},{\"unified\":\"1f468-1f3fe-200d-1f4bc\",\"native\":\"👨🏾‍💼\",\"x\":14,\"y\":58},{\"unified\":\"1f468-1f3ff-200d-1f4bc\",\"native\":\"👨🏿‍💼\",\"x\":14,\"y\":59}],\"version\":4},\"female-office-worker\":{\"id\":\"female-office-worker\",\"name\":\"Woman Office Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f4bc\",\"native\":\"👩‍💼\",\"x\":18,\"y\":22},{\"unified\":\"1f469-1f3fb-200d-1f4bc\",\"native\":\"👩🏻‍💼\",\"x\":18,\"y\":23},{\"unified\":\"1f469-1f3fc-200d-1f4bc\",\"native\":\"👩🏼‍💼\",\"x\":18,\"y\":24},{\"unified\":\"1f469-1f3fd-200d-1f4bc\",\"native\":\"👩🏽‍💼\",\"x\":18,\"y\":25},{\"unified\":\"1f469-1f3fe-200d-1f4bc\",\"native\":\"👩🏾‍💼\",\"x\":18,\"y\":26},{\"unified\":\"1f469-1f3ff-200d-1f4bc\",\"native\":\"👩🏿‍💼\",\"x\":18,\"y\":27}],\"version\":4},\"male-scientist\":{\"id\":\"male-scientist\",\"name\":\"Man Scientist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f52c\",\"native\":\"👨‍🔬\",\"x\":15,\"y\":5},{\"unified\":\"1f468-1f3fb-200d-1f52c\",\"native\":\"👨🏻‍🔬\",\"x\":15,\"y\":6},{\"unified\":\"1f468-1f3fc-200d-1f52c\",\"native\":\"👨🏼‍🔬\",\"x\":15,\"y\":7},{\"unified\":\"1f468-1f3fd-200d-1f52c\",\"native\":\"👨🏽‍🔬\",\"x\":15,\"y\":8},{\"unified\":\"1f468-1f3fe-200d-1f52c\",\"native\":\"👨🏾‍🔬\",\"x\":15,\"y\":9},{\"unified\":\"1f468-1f3ff-200d-1f52c\",\"native\":\"👨🏿‍🔬\",\"x\":15,\"y\":10}],\"version\":4},\"female-scientist\":{\"id\":\"female-scientist\",\"name\":\"Woman Scientist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f52c\",\"native\":\"👩‍🔬\",\"x\":18,\"y\":34},{\"unified\":\"1f469-1f3fb-200d-1f52c\",\"native\":\"👩🏻‍🔬\",\"x\":18,\"y\":35},{\"unified\":\"1f469-1f3fc-200d-1f52c\",\"native\":\"👩🏼‍🔬\",\"x\":18,\"y\":36},{\"unified\":\"1f469-1f3fd-200d-1f52c\",\"native\":\"👩🏽‍🔬\",\"x\":18,\"y\":37},{\"unified\":\"1f469-1f3fe-200d-1f52c\",\"native\":\"👩🏾‍🔬\",\"x\":18,\"y\":38},{\"unified\":\"1f469-1f3ff-200d-1f52c\",\"native\":\"👩🏿‍🔬\",\"x\":18,\"y\":39}],\"version\":4},\"male-technologist\":{\"id\":\"male-technologist\",\"name\":\"Man Technologist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f4bb\",\"native\":\"👨‍💻\",\"x\":14,\"y\":48},{\"unified\":\"1f468-1f3fb-200d-1f4bb\",\"native\":\"👨🏻‍💻\",\"x\":14,\"y\":49},{\"unified\":\"1f468-1f3fc-200d-1f4bb\",\"native\":\"👨🏼‍💻\",\"x\":14,\"y\":50},{\"unified\":\"1f468-1f3fd-200d-1f4bb\",\"native\":\"👨🏽‍💻\",\"x\":14,\"y\":51},{\"unified\":\"1f468-1f3fe-200d-1f4bb\",\"native\":\"👨🏾‍💻\",\"x\":14,\"y\":52},{\"unified\":\"1f468-1f3ff-200d-1f4bb\",\"native\":\"👨🏿‍💻\",\"x\":14,\"y\":53}],\"version\":4},\"female-technologist\":{\"id\":\"female-technologist\",\"name\":\"Woman Technologist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f4bb\",\"native\":\"👩‍💻\",\"x\":18,\"y\":16},{\"unified\":\"1f469-1f3fb-200d-1f4bb\",\"native\":\"👩🏻‍💻\",\"x\":18,\"y\":17},{\"unified\":\"1f469-1f3fc-200d-1f4bb\",\"native\":\"👩🏼‍💻\",\"x\":18,\"y\":18},{\"unified\":\"1f469-1f3fd-200d-1f4bb\",\"native\":\"👩🏽‍💻\",\"x\":18,\"y\":19},{\"unified\":\"1f469-1f3fe-200d-1f4bb\",\"native\":\"👩🏾‍💻\",\"x\":18,\"y\":20},{\"unified\":\"1f469-1f3ff-200d-1f4bb\",\"native\":\"👩🏿‍💻\",\"x\":18,\"y\":21}],\"version\":4},\"male-singer\":{\"id\":\"male-singer\",\"name\":\"Man Singer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f3a4\",\"native\":\"👨‍🎤\",\"x\":14,\"y\":9},{\"unified\":\"1f468-1f3fb-200d-1f3a4\",\"native\":\"👨🏻‍🎤\",\"x\":14,\"y\":10},{\"unified\":\"1f468-1f3fc-200d-1f3a4\",\"native\":\"👨🏼‍🎤\",\"x\":14,\"y\":11},{\"unified\":\"1f468-1f3fd-200d-1f3a4\",\"native\":\"👨🏽‍🎤\",\"x\":14,\"y\":12},{\"unified\":\"1f468-1f3fe-200d-1f3a4\",\"native\":\"👨🏾‍🎤\",\"x\":14,\"y\":13},{\"unified\":\"1f468-1f3ff-200d-1f3a4\",\"native\":\"👨🏿‍🎤\",\"x\":14,\"y\":14}],\"version\":4},\"female-singer\":{\"id\":\"female-singer\",\"name\":\"Woman Singer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f3a4\",\"native\":\"👩‍🎤\",\"x\":17,\"y\":43},{\"unified\":\"1f469-1f3fb-200d-1f3a4\",\"native\":\"👩🏻‍🎤\",\"x\":17,\"y\":44},{\"unified\":\"1f469-1f3fc-200d-1f3a4\",\"native\":\"👩🏼‍🎤\",\"x\":17,\"y\":45},{\"unified\":\"1f469-1f3fd-200d-1f3a4\",\"native\":\"👩🏽‍🎤\",\"x\":17,\"y\":46},{\"unified\":\"1f469-1f3fe-200d-1f3a4\",\"native\":\"👩🏾‍🎤\",\"x\":17,\"y\":47},{\"unified\":\"1f469-1f3ff-200d-1f3a4\",\"native\":\"👩🏿‍🎤\",\"x\":17,\"y\":48}],\"version\":4},\"male-artist\":{\"id\":\"male-artist\",\"name\":\"Man Artist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f3a8\",\"native\":\"👨‍🎨\",\"x\":14,\"y\":15},{\"unified\":\"1f468-1f3fb-200d-1f3a8\",\"native\":\"👨🏻‍🎨\",\"x\":14,\"y\":16},{\"unified\":\"1f468-1f3fc-200d-1f3a8\",\"native\":\"👨🏼‍🎨\",\"x\":14,\"y\":17},{\"unified\":\"1f468-1f3fd-200d-1f3a8\",\"native\":\"👨🏽‍🎨\",\"x\":14,\"y\":18},{\"unified\":\"1f468-1f3fe-200d-1f3a8\",\"native\":\"👨🏾‍🎨\",\"x\":14,\"y\":19},{\"unified\":\"1f468-1f3ff-200d-1f3a8\",\"native\":\"👨🏿‍🎨\",\"x\":14,\"y\":20}],\"version\":4},\"female-artist\":{\"id\":\"female-artist\",\"name\":\"Woman Artist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f3a8\",\"native\":\"👩‍🎨\",\"x\":17,\"y\":49},{\"unified\":\"1f469-1f3fb-200d-1f3a8\",\"native\":\"👩🏻‍🎨\",\"x\":17,\"y\":50},{\"unified\":\"1f469-1f3fc-200d-1f3a8\",\"native\":\"👩🏼‍🎨\",\"x\":17,\"y\":51},{\"unified\":\"1f469-1f3fd-200d-1f3a8\",\"native\":\"👩🏽‍🎨\",\"x\":17,\"y\":52},{\"unified\":\"1f469-1f3fe-200d-1f3a8\",\"native\":\"👩🏾‍🎨\",\"x\":17,\"y\":53},{\"unified\":\"1f469-1f3ff-200d-1f3a8\",\"native\":\"👩🏿‍🎨\",\"x\":17,\"y\":54}],\"version\":4},\"male-pilot\":{\"id\":\"male-pilot\",\"name\":\"Man Pilot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-2708-fe0f\",\"native\":\"👨‍✈️\",\"x\":16,\"y\":16},{\"unified\":\"1f468-1f3fb-200d-2708-fe0f\",\"native\":\"👨🏻‍✈️\",\"x\":16,\"y\":17},{\"unified\":\"1f468-1f3fc-200d-2708-fe0f\",\"native\":\"👨🏼‍✈️\",\"x\":16,\"y\":18},{\"unified\":\"1f468-1f3fd-200d-2708-fe0f\",\"native\":\"👨🏽‍✈️\",\"x\":16,\"y\":19},{\"unified\":\"1f468-1f3fe-200d-2708-fe0f\",\"native\":\"👨🏾‍✈️\",\"x\":16,\"y\":20},{\"unified\":\"1f468-1f3ff-200d-2708-fe0f\",\"native\":\"👨🏿‍✈️\",\"x\":16,\"y\":21}],\"version\":4},\"female-pilot\":{\"id\":\"female-pilot\",\"name\":\"Woman Pilot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2708-fe0f\",\"native\":\"👩‍✈️\",\"x\":19,\"y\":45},{\"unified\":\"1f469-1f3fb-200d-2708-fe0f\",\"native\":\"👩🏻‍✈️\",\"x\":19,\"y\":46},{\"unified\":\"1f469-1f3fc-200d-2708-fe0f\",\"native\":\"👩🏼‍✈️\",\"x\":19,\"y\":47},{\"unified\":\"1f469-1f3fd-200d-2708-fe0f\",\"native\":\"👩🏽‍✈️\",\"x\":19,\"y\":48},{\"unified\":\"1f469-1f3fe-200d-2708-fe0f\",\"native\":\"👩🏾‍✈️\",\"x\":19,\"y\":49},{\"unified\":\"1f469-1f3ff-200d-2708-fe0f\",\"native\":\"👩🏿‍✈️\",\"x\":19,\"y\":50}],\"version\":4},\"male-astronaut\":{\"id\":\"male-astronaut\",\"name\":\"Man Astronaut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f680\",\"native\":\"👨‍🚀\",\"x\":15,\"y\":11},{\"unified\":\"1f468-1f3fb-200d-1f680\",\"native\":\"👨🏻‍🚀\",\"x\":15,\"y\":12},{\"unified\":\"1f468-1f3fc-200d-1f680\",\"native\":\"👨🏼‍🚀\",\"x\":15,\"y\":13},{\"unified\":\"1f468-1f3fd-200d-1f680\",\"native\":\"👨🏽‍🚀\",\"x\":15,\"y\":14},{\"unified\":\"1f468-1f3fe-200d-1f680\",\"native\":\"👨🏾‍🚀\",\"x\":15,\"y\":15},{\"unified\":\"1f468-1f3ff-200d-1f680\",\"native\":\"👨🏿‍🚀\",\"x\":15,\"y\":16}],\"version\":4},\"female-astronaut\":{\"id\":\"female-astronaut\",\"name\":\"Woman Astronaut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f680\",\"native\":\"👩‍🚀\",\"x\":18,\"y\":40},{\"unified\":\"1f469-1f3fb-200d-1f680\",\"native\":\"👩🏻‍🚀\",\"x\":18,\"y\":41},{\"unified\":\"1f469-1f3fc-200d-1f680\",\"native\":\"👩🏼‍🚀\",\"x\":18,\"y\":42},{\"unified\":\"1f469-1f3fd-200d-1f680\",\"native\":\"👩🏽‍🚀\",\"x\":18,\"y\":43},{\"unified\":\"1f469-1f3fe-200d-1f680\",\"native\":\"👩🏾‍🚀\",\"x\":18,\"y\":44},{\"unified\":\"1f469-1f3ff-200d-1f680\",\"native\":\"👩🏿‍🚀\",\"x\":18,\"y\":45}],\"version\":4},\"male-firefighter\":{\"id\":\"male-firefighter\",\"name\":\"Man Firefighter\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f692\",\"native\":\"👨‍🚒\",\"x\":15,\"y\":17},{\"unified\":\"1f468-1f3fb-200d-1f692\",\"native\":\"👨🏻‍🚒\",\"x\":15,\"y\":18},{\"unified\":\"1f468-1f3fc-200d-1f692\",\"native\":\"👨🏼‍🚒\",\"x\":15,\"y\":19},{\"unified\":\"1f468-1f3fd-200d-1f692\",\"native\":\"👨🏽‍🚒\",\"x\":15,\"y\":20},{\"unified\":\"1f468-1f3fe-200d-1f692\",\"native\":\"👨🏾‍🚒\",\"x\":15,\"y\":21},{\"unified\":\"1f468-1f3ff-200d-1f692\",\"native\":\"👨🏿‍🚒\",\"x\":15,\"y\":22}],\"version\":4},\"female-firefighter\":{\"id\":\"female-firefighter\",\"name\":\"Woman Firefighter\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f692\",\"native\":\"👩‍🚒\",\"x\":18,\"y\":46},{\"unified\":\"1f469-1f3fb-200d-1f692\",\"native\":\"👩🏻‍🚒\",\"x\":18,\"y\":47},{\"unified\":\"1f469-1f3fc-200d-1f692\",\"native\":\"👩🏼‍🚒\",\"x\":18,\"y\":48},{\"unified\":\"1f469-1f3fd-200d-1f692\",\"native\":\"👩🏽‍🚒\",\"x\":18,\"y\":49},{\"unified\":\"1f469-1f3fe-200d-1f692\",\"native\":\"👩🏾‍🚒\",\"x\":18,\"y\":50},{\"unified\":\"1f469-1f3ff-200d-1f692\",\"native\":\"👩🏿‍🚒\",\"x\":18,\"y\":51}],\"version\":4},\"cop\":{\"id\":\"cop\",\"name\":\"Police Officer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46e\",\"native\":\"👮\",\"x\":23,\"y\":8},{\"unified\":\"1f46e-1f3fb\",\"native\":\"👮🏻\",\"x\":23,\"y\":9},{\"unified\":\"1f46e-1f3fc\",\"native\":\"👮🏼\",\"x\":23,\"y\":10},{\"unified\":\"1f46e-1f3fd\",\"native\":\"👮🏽\",\"x\":23,\"y\":11},{\"unified\":\"1f46e-1f3fe\",\"native\":\"👮🏾\",\"x\":23,\"y\":12},{\"unified\":\"1f46e-1f3ff\",\"native\":\"👮🏿\",\"x\":23,\"y\":13}],\"version\":1},\"male-police-officer\":{\"id\":\"male-police-officer\",\"name\":\"Man Police Officer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46e-200d-2642-fe0f\",\"native\":\"👮‍♂️\",\"x\":23,\"y\":2},{\"unified\":\"1f46e-1f3fb-200d-2642-fe0f\",\"native\":\"👮🏻‍♂️\",\"x\":23,\"y\":3},{\"unified\":\"1f46e-1f3fc-200d-2642-fe0f\",\"native\":\"👮🏼‍♂️\",\"x\":23,\"y\":4},{\"unified\":\"1f46e-1f3fd-200d-2642-fe0f\",\"native\":\"👮🏽‍♂️\",\"x\":23,\"y\":5},{\"unified\":\"1f46e-1f3fe-200d-2642-fe0f\",\"native\":\"👮🏾‍♂️\",\"x\":23,\"y\":6},{\"unified\":\"1f46e-1f3ff-200d-2642-fe0f\",\"native\":\"👮🏿‍♂️\",\"x\":23,\"y\":7}],\"version\":4},\"female-police-officer\":{\"id\":\"female-police-officer\",\"name\":\"Woman Police Officer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46e-200d-2640-fe0f\",\"native\":\"👮‍♀️\",\"x\":22,\"y\":57},{\"unified\":\"1f46e-1f3fb-200d-2640-fe0f\",\"native\":\"👮🏻‍♀️\",\"x\":22,\"y\":58},{\"unified\":\"1f46e-1f3fc-200d-2640-fe0f\",\"native\":\"👮🏼‍♀️\",\"x\":22,\"y\":59},{\"unified\":\"1f46e-1f3fd-200d-2640-fe0f\",\"native\":\"👮🏽‍♀️\",\"x\":22,\"y\":60},{\"unified\":\"1f46e-1f3fe-200d-2640-fe0f\",\"native\":\"👮🏾‍♀️\",\"x\":23,\"y\":0},{\"unified\":\"1f46e-1f3ff-200d-2640-fe0f\",\"native\":\"👮🏿‍♀️\",\"x\":23,\"y\":1}],\"version\":4},\"sleuth_or_spy\":{\"id\":\"sleuth_or_spy\",\"name\":\"Detective\",\"keywords\":[],\"skins\":[{\"unified\":\"1f575-fe0f\",\"native\":\"🕵️\",\"x\":31,\"y\":16},{\"unified\":\"1f575-1f3fb\",\"native\":\"🕵🏻\",\"x\":31,\"y\":17},{\"unified\":\"1f575-1f3fc\",\"native\":\"🕵🏼\",\"x\":31,\"y\":18},{\"unified\":\"1f575-1f3fd\",\"native\":\"🕵🏽\",\"x\":31,\"y\":19},{\"unified\":\"1f575-1f3fe\",\"native\":\"🕵🏾\",\"x\":31,\"y\":20},{\"unified\":\"1f575-1f3ff\",\"native\":\"🕵🏿\",\"x\":31,\"y\":21}],\"version\":1},\"male-detective\":{\"id\":\"male-detective\",\"name\":\"Man Detective\",\"keywords\":[],\"skins\":[{\"unified\":\"1f575-fe0f-200d-2642-fe0f\",\"native\":\"🕵️‍♂️\",\"x\":31,\"y\":10},{\"unified\":\"1f575-1f3fb-200d-2642-fe0f\",\"native\":\"🕵🏻‍♂️\",\"x\":31,\"y\":11},{\"unified\":\"1f575-1f3fc-200d-2642-fe0f\",\"native\":\"🕵🏼‍♂️\",\"x\":31,\"y\":12},{\"unified\":\"1f575-1f3fd-200d-2642-fe0f\",\"native\":\"🕵🏽‍♂️\",\"x\":31,\"y\":13},{\"unified\":\"1f575-1f3fe-200d-2642-fe0f\",\"native\":\"🕵🏾‍♂️\",\"x\":31,\"y\":14},{\"unified\":\"1f575-1f3ff-200d-2642-fe0f\",\"native\":\"🕵🏿‍♂️\",\"x\":31,\"y\":15}],\"version\":4},\"female-detective\":{\"id\":\"female-detective\",\"name\":\"Woman Detective\",\"keywords\":[],\"skins\":[{\"unified\":\"1f575-fe0f-200d-2640-fe0f\",\"native\":\"🕵️‍♀️\",\"x\":31,\"y\":4},{\"unified\":\"1f575-1f3fb-200d-2640-fe0f\",\"native\":\"🕵🏻‍♀️\",\"x\":31,\"y\":5},{\"unified\":\"1f575-1f3fc-200d-2640-fe0f\",\"native\":\"🕵🏼‍♀️\",\"x\":31,\"y\":6},{\"unified\":\"1f575-1f3fd-200d-2640-fe0f\",\"native\":\"🕵🏽‍♀️\",\"x\":31,\"y\":7},{\"unified\":\"1f575-1f3fe-200d-2640-fe0f\",\"native\":\"🕵🏾‍♀️\",\"x\":31,\"y\":8},{\"unified\":\"1f575-1f3ff-200d-2640-fe0f\",\"native\":\"🕵🏿‍♀️\",\"x\":31,\"y\":9}],\"version\":4},\"guardsman\":{\"id\":\"guardsman\",\"name\":\"Guard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f482\",\"native\":\"💂\",\"x\":25,\"y\":40},{\"unified\":\"1f482-1f3fb\",\"native\":\"💂🏻\",\"x\":25,\"y\":41},{\"unified\":\"1f482-1f3fc\",\"native\":\"💂🏼\",\"x\":25,\"y\":42},{\"unified\":\"1f482-1f3fd\",\"native\":\"💂🏽\",\"x\":25,\"y\":43},{\"unified\":\"1f482-1f3fe\",\"native\":\"💂🏾\",\"x\":25,\"y\":44},{\"unified\":\"1f482-1f3ff\",\"native\":\"💂🏿\",\"x\":25,\"y\":45}],\"version\":1},\"male-guard\":{\"id\":\"male-guard\",\"name\":\"Man Guard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f482-200d-2642-fe0f\",\"native\":\"💂‍♂️\",\"x\":25,\"y\":34},{\"unified\":\"1f482-1f3fb-200d-2642-fe0f\",\"native\":\"💂🏻‍♂️\",\"x\":25,\"y\":35},{\"unified\":\"1f482-1f3fc-200d-2642-fe0f\",\"native\":\"💂🏼‍♂️\",\"x\":25,\"y\":36},{\"unified\":\"1f482-1f3fd-200d-2642-fe0f\",\"native\":\"💂🏽‍♂️\",\"x\":25,\"y\":37},{\"unified\":\"1f482-1f3fe-200d-2642-fe0f\",\"native\":\"💂🏾‍♂️\",\"x\":25,\"y\":38},{\"unified\":\"1f482-1f3ff-200d-2642-fe0f\",\"native\":\"💂🏿‍♂️\",\"x\":25,\"y\":39}],\"version\":4},\"female-guard\":{\"id\":\"female-guard\",\"name\":\"Woman Guard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f482-200d-2640-fe0f\",\"native\":\"💂‍♀️\",\"x\":25,\"y\":28},{\"unified\":\"1f482-1f3fb-200d-2640-fe0f\",\"native\":\"💂🏻‍♀️\",\"x\":25,\"y\":29},{\"unified\":\"1f482-1f3fc-200d-2640-fe0f\",\"native\":\"💂🏼‍♀️\",\"x\":25,\"y\":30},{\"unified\":\"1f482-1f3fd-200d-2640-fe0f\",\"native\":\"💂🏽‍♀️\",\"x\":25,\"y\":31},{\"unified\":\"1f482-1f3fe-200d-2640-fe0f\",\"native\":\"💂🏾‍♀️\",\"x\":25,\"y\":32},{\"unified\":\"1f482-1f3ff-200d-2640-fe0f\",\"native\":\"💂🏿‍♀️\",\"x\":25,\"y\":33}],\"version\":4},\"construction_worker\":{\"id\":\"construction_worker\",\"name\":\"Construction Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f477\",\"native\":\"👷\",\"x\":24,\"y\":46},{\"unified\":\"1f477-1f3fb\",\"native\":\"👷🏻\",\"x\":24,\"y\":47},{\"unified\":\"1f477-1f3fc\",\"native\":\"👷🏼\",\"x\":24,\"y\":48},{\"unified\":\"1f477-1f3fd\",\"native\":\"👷🏽\",\"x\":24,\"y\":49},{\"unified\":\"1f477-1f3fe\",\"native\":\"👷🏾\",\"x\":24,\"y\":50},{\"unified\":\"1f477-1f3ff\",\"native\":\"👷🏿\",\"x\":24,\"y\":51}],\"version\":1},\"male-construction-worker\":{\"id\":\"male-construction-worker\",\"name\":\"Man Construction Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f477-200d-2642-fe0f\",\"native\":\"👷‍♂️\",\"x\":24,\"y\":40},{\"unified\":\"1f477-1f3fb-200d-2642-fe0f\",\"native\":\"👷🏻‍♂️\",\"x\":24,\"y\":41},{\"unified\":\"1f477-1f3fc-200d-2642-fe0f\",\"native\":\"👷🏼‍♂️\",\"x\":24,\"y\":42},{\"unified\":\"1f477-1f3fd-200d-2642-fe0f\",\"native\":\"👷🏽‍♂️\",\"x\":24,\"y\":43},{\"unified\":\"1f477-1f3fe-200d-2642-fe0f\",\"native\":\"👷🏾‍♂️\",\"x\":24,\"y\":44},{\"unified\":\"1f477-1f3ff-200d-2642-fe0f\",\"native\":\"👷🏿‍♂️\",\"x\":24,\"y\":45}],\"version\":4},\"female-construction-worker\":{\"id\":\"female-construction-worker\",\"name\":\"Woman Construction Worker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f477-200d-2640-fe0f\",\"native\":\"👷‍♀️\",\"x\":24,\"y\":34},{\"unified\":\"1f477-1f3fb-200d-2640-fe0f\",\"native\":\"👷🏻‍♀️\",\"x\":24,\"y\":35},{\"unified\":\"1f477-1f3fc-200d-2640-fe0f\",\"native\":\"👷🏼‍♀️\",\"x\":24,\"y\":36},{\"unified\":\"1f477-1f3fd-200d-2640-fe0f\",\"native\":\"👷🏽‍♀️\",\"x\":24,\"y\":37},{\"unified\":\"1f477-1f3fe-200d-2640-fe0f\",\"native\":\"👷🏾‍♀️\",\"x\":24,\"y\":38},{\"unified\":\"1f477-1f3ff-200d-2640-fe0f\",\"native\":\"👷🏿‍♀️\",\"x\":24,\"y\":39}],\"version\":4},\"prince\":{\"id\":\"prince\",\"name\":\"Prince\",\"keywords\":[],\"skins\":[{\"unified\":\"1f934\",\"native\":\"🤴\",\"x\":41,\"y\":8},{\"unified\":\"1f934-1f3fb\",\"native\":\"🤴🏻\",\"x\":41,\"y\":9},{\"unified\":\"1f934-1f3fc\",\"native\":\"🤴🏼\",\"x\":41,\"y\":10},{\"unified\":\"1f934-1f3fd\",\"native\":\"🤴🏽\",\"x\":41,\"y\":11},{\"unified\":\"1f934-1f3fe\",\"native\":\"🤴🏾\",\"x\":41,\"y\":12},{\"unified\":\"1f934-1f3ff\",\"native\":\"🤴🏿\",\"x\":41,\"y\":13}],\"version\":3},\"princess\":{\"id\":\"princess\",\"name\":\"Princess\",\"keywords\":[],\"skins\":[{\"unified\":\"1f478\",\"native\":\"👸\",\"x\":24,\"y\":52},{\"unified\":\"1f478-1f3fb\",\"native\":\"👸🏻\",\"x\":24,\"y\":53},{\"unified\":\"1f478-1f3fc\",\"native\":\"👸🏼\",\"x\":24,\"y\":54},{\"unified\":\"1f478-1f3fd\",\"native\":\"👸🏽\",\"x\":24,\"y\":55},{\"unified\":\"1f478-1f3fe\",\"native\":\"👸🏾\",\"x\":24,\"y\":56},{\"unified\":\"1f478-1f3ff\",\"native\":\"👸🏿\",\"x\":24,\"y\":57}],\"version\":1},\"man_with_turban\":{\"id\":\"man_with_turban\",\"name\":\"Man with Turban\",\"keywords\":[],\"skins\":[{\"unified\":\"1f473\",\"native\":\"👳\",\"x\":24,\"y\":10},{\"unified\":\"1f473-1f3fb\",\"native\":\"👳🏻\",\"x\":24,\"y\":11},{\"unified\":\"1f473-1f3fc\",\"native\":\"👳🏼\",\"x\":24,\"y\":12},{\"unified\":\"1f473-1f3fd\",\"native\":\"👳🏽\",\"x\":24,\"y\":13},{\"unified\":\"1f473-1f3fe\",\"native\":\"👳🏾\",\"x\":24,\"y\":14},{\"unified\":\"1f473-1f3ff\",\"native\":\"👳🏿\",\"x\":24,\"y\":15}],\"version\":1},\"man-wearing-turban\":{\"id\":\"man-wearing-turban\",\"name\":\"Man Wearing Turban\",\"keywords\":[],\"skins\":[{\"unified\":\"1f473-200d-2642-fe0f\",\"native\":\"👳‍♂️\",\"x\":24,\"y\":4},{\"unified\":\"1f473-1f3fb-200d-2642-fe0f\",\"native\":\"👳🏻‍♂️\",\"x\":24,\"y\":5},{\"unified\":\"1f473-1f3fc-200d-2642-fe0f\",\"native\":\"👳🏼‍♂️\",\"x\":24,\"y\":6},{\"unified\":\"1f473-1f3fd-200d-2642-fe0f\",\"native\":\"👳🏽‍♂️\",\"x\":24,\"y\":7},{\"unified\":\"1f473-1f3fe-200d-2642-fe0f\",\"native\":\"👳🏾‍♂️\",\"x\":24,\"y\":8},{\"unified\":\"1f473-1f3ff-200d-2642-fe0f\",\"native\":\"👳🏿‍♂️\",\"x\":24,\"y\":9}],\"version\":4},\"woman-wearing-turban\":{\"id\":\"woman-wearing-turban\",\"name\":\"Woman Wearing Turban\",\"keywords\":[],\"skins\":[{\"unified\":\"1f473-200d-2640-fe0f\",\"native\":\"👳‍♀️\",\"x\":23,\"y\":59},{\"unified\":\"1f473-1f3fb-200d-2640-fe0f\",\"native\":\"👳🏻‍♀️\",\"x\":23,\"y\":60},{\"unified\":\"1f473-1f3fc-200d-2640-fe0f\",\"native\":\"👳🏼‍♀️\",\"x\":24,\"y\":0},{\"unified\":\"1f473-1f3fd-200d-2640-fe0f\",\"native\":\"👳🏽‍♀️\",\"x\":24,\"y\":1},{\"unified\":\"1f473-1f3fe-200d-2640-fe0f\",\"native\":\"👳🏾‍♀️\",\"x\":24,\"y\":2},{\"unified\":\"1f473-1f3ff-200d-2640-fe0f\",\"native\":\"👳🏿‍♀️\",\"x\":24,\"y\":3}],\"version\":4},\"man_with_gua_pi_mao\":{\"id\":\"man_with_gua_pi_mao\",\"name\":\"Man with Gua Pi Mao\",\"keywords\":[],\"skins\":[{\"unified\":\"1f472\",\"native\":\"👲\",\"x\":23,\"y\":53},{\"unified\":\"1f472-1f3fb\",\"native\":\"👲🏻\",\"x\":23,\"y\":54},{\"unified\":\"1f472-1f3fc\",\"native\":\"👲🏼\",\"x\":23,\"y\":55},{\"unified\":\"1f472-1f3fd\",\"native\":\"👲🏽\",\"x\":23,\"y\":56},{\"unified\":\"1f472-1f3fe\",\"native\":\"👲🏾\",\"x\":23,\"y\":57},{\"unified\":\"1f472-1f3ff\",\"native\":\"👲🏿\",\"x\":23,\"y\":58}],\"version\":1},\"person_in_tuxedo\":{\"id\":\"person_in_tuxedo\",\"name\":\"Man in Tuxedo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f935\",\"native\":\"🤵\",\"x\":41,\"y\":26},{\"unified\":\"1f935-1f3fb\",\"native\":\"🤵🏻\",\"x\":41,\"y\":27},{\"unified\":\"1f935-1f3fc\",\"native\":\"🤵🏼\",\"x\":41,\"y\":28},{\"unified\":\"1f935-1f3fd\",\"native\":\"🤵🏽\",\"x\":41,\"y\":29},{\"unified\":\"1f935-1f3fe\",\"native\":\"🤵🏾\",\"x\":41,\"y\":30},{\"unified\":\"1f935-1f3ff\",\"native\":\"🤵🏿\",\"x\":41,\"y\":31}],\"version\":3},\"bride_with_veil\":{\"id\":\"bride_with_veil\",\"name\":\"Bride with Veil\",\"keywords\":[],\"skins\":[{\"unified\":\"1f470\",\"native\":\"👰\",\"x\":23,\"y\":29},{\"unified\":\"1f470-1f3fb\",\"native\":\"👰🏻\",\"x\":23,\"y\":30},{\"unified\":\"1f470-1f3fc\",\"native\":\"👰🏼\",\"x\":23,\"y\":31},{\"unified\":\"1f470-1f3fd\",\"native\":\"👰🏽\",\"x\":23,\"y\":32},{\"unified\":\"1f470-1f3fe\",\"native\":\"👰🏾\",\"x\":23,\"y\":33},{\"unified\":\"1f470-1f3ff\",\"native\":\"👰🏿\",\"x\":23,\"y\":34}],\"version\":1},\"pregnant_woman\":{\"id\":\"pregnant_woman\",\"name\":\"Pregnant Woman\",\"keywords\":[],\"skins\":[{\"unified\":\"1f930\",\"native\":\"🤰\",\"x\":40,\"y\":45},{\"unified\":\"1f930-1f3fb\",\"native\":\"🤰🏻\",\"x\":40,\"y\":46},{\"unified\":\"1f930-1f3fc\",\"native\":\"🤰🏼\",\"x\":40,\"y\":47},{\"unified\":\"1f930-1f3fd\",\"native\":\"🤰🏽\",\"x\":40,\"y\":48},{\"unified\":\"1f930-1f3fe\",\"native\":\"🤰🏾\",\"x\":40,\"y\":49},{\"unified\":\"1f930-1f3ff\",\"native\":\"🤰🏿\",\"x\":40,\"y\":50}],\"version\":3},\"angel\":{\"id\":\"angel\",\"name\":\"Baby Angel\",\"keywords\":[],\"skins\":[{\"unified\":\"1f47c\",\"native\":\"👼\",\"x\":25,\"y\":0},{\"unified\":\"1f47c-1f3fb\",\"native\":\"👼🏻\",\"x\":25,\"y\":1},{\"unified\":\"1f47c-1f3fc\",\"native\":\"👼🏼\",\"x\":25,\"y\":2},{\"unified\":\"1f47c-1f3fd\",\"native\":\"👼🏽\",\"x\":25,\"y\":3},{\"unified\":\"1f47c-1f3fe\",\"native\":\"👼🏾\",\"x\":25,\"y\":4},{\"unified\":\"1f47c-1f3ff\",\"native\":\"👼🏿\",\"x\":25,\"y\":5}],\"version\":1},\"santa\":{\"id\":\"santa\",\"name\":\"Santa Claus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f385\",\"native\":\"🎅\",\"x\":7,\"y\":8},{\"unified\":\"1f385-1f3fb\",\"native\":\"🎅🏻\",\"x\":7,\"y\":9},{\"unified\":\"1f385-1f3fc\",\"native\":\"🎅🏼\",\"x\":7,\"y\":10},{\"unified\":\"1f385-1f3fd\",\"native\":\"🎅🏽\",\"x\":7,\"y\":11},{\"unified\":\"1f385-1f3fe\",\"native\":\"🎅🏾\",\"x\":7,\"y\":12},{\"unified\":\"1f385-1f3ff\",\"native\":\"🎅🏿\",\"x\":7,\"y\":13}],\"version\":1},\"mrs_claus\":{\"id\":\"mrs_claus\",\"name\":\"Mrs. Claus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f936\",\"native\":\"🤶\",\"x\":41,\"y\":32},{\"unified\":\"1f936-1f3fb\",\"native\":\"🤶🏻\",\"x\":41,\"y\":33},{\"unified\":\"1f936-1f3fc\",\"native\":\"🤶🏼\",\"x\":41,\"y\":34},{\"unified\":\"1f936-1f3fd\",\"native\":\"🤶🏽\",\"x\":41,\"y\":35},{\"unified\":\"1f936-1f3fe\",\"native\":\"🤶🏾\",\"x\":41,\"y\":36},{\"unified\":\"1f936-1f3ff\",\"native\":\"🤶🏿\",\"x\":41,\"y\":37}],\"version\":3},\"massage\":{\"id\":\"massage\",\"name\":\"Face Massage\",\"keywords\":[],\"skins\":[{\"unified\":\"1f486\",\"native\":\"💆\",\"x\":26,\"y\":10},{\"unified\":\"1f486-1f3fb\",\"native\":\"💆🏻\",\"x\":26,\"y\":11},{\"unified\":\"1f486-1f3fc\",\"native\":\"💆🏼\",\"x\":26,\"y\":12},{\"unified\":\"1f486-1f3fd\",\"native\":\"💆🏽\",\"x\":26,\"y\":13},{\"unified\":\"1f486-1f3fe\",\"native\":\"💆🏾\",\"x\":26,\"y\":14},{\"unified\":\"1f486-1f3ff\",\"native\":\"💆🏿\",\"x\":26,\"y\":15}],\"version\":1},\"man-getting-massage\":{\"id\":\"man-getting-massage\",\"name\":\"Man Getting Massage\",\"keywords\":[],\"skins\":[{\"unified\":\"1f486-200d-2642-fe0f\",\"native\":\"💆‍♂️\",\"x\":26,\"y\":4},{\"unified\":\"1f486-1f3fb-200d-2642-fe0f\",\"native\":\"💆🏻‍♂️\",\"x\":26,\"y\":5},{\"unified\":\"1f486-1f3fc-200d-2642-fe0f\",\"native\":\"💆🏼‍♂️\",\"x\":26,\"y\":6},{\"unified\":\"1f486-1f3fd-200d-2642-fe0f\",\"native\":\"💆🏽‍♂️\",\"x\":26,\"y\":7},{\"unified\":\"1f486-1f3fe-200d-2642-fe0f\",\"native\":\"💆🏾‍♂️\",\"x\":26,\"y\":8},{\"unified\":\"1f486-1f3ff-200d-2642-fe0f\",\"native\":\"💆🏿‍♂️\",\"x\":26,\"y\":9}],\"version\":4},\"woman-getting-massage\":{\"id\":\"woman-getting-massage\",\"name\":\"Woman Getting Massage\",\"keywords\":[],\"skins\":[{\"unified\":\"1f486-200d-2640-fe0f\",\"native\":\"💆‍♀️\",\"x\":25,\"y\":59},{\"unified\":\"1f486-1f3fb-200d-2640-fe0f\",\"native\":\"💆🏻‍♀️\",\"x\":25,\"y\":60},{\"unified\":\"1f486-1f3fc-200d-2640-fe0f\",\"native\":\"💆🏼‍♀️\",\"x\":26,\"y\":0},{\"unified\":\"1f486-1f3fd-200d-2640-fe0f\",\"native\":\"💆🏽‍♀️\",\"x\":26,\"y\":1},{\"unified\":\"1f486-1f3fe-200d-2640-fe0f\",\"native\":\"💆🏾‍♀️\",\"x\":26,\"y\":2},{\"unified\":\"1f486-1f3ff-200d-2640-fe0f\",\"native\":\"💆🏿‍♀️\",\"x\":26,\"y\":3}],\"version\":4},\"haircut\":{\"id\":\"haircut\",\"name\":\"Haircut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f487\",\"native\":\"💇\",\"x\":26,\"y\":28},{\"unified\":\"1f487-1f3fb\",\"native\":\"💇🏻\",\"x\":26,\"y\":29},{\"unified\":\"1f487-1f3fc\",\"native\":\"💇🏼\",\"x\":26,\"y\":30},{\"unified\":\"1f487-1f3fd\",\"native\":\"💇🏽\",\"x\":26,\"y\":31},{\"unified\":\"1f487-1f3fe\",\"native\":\"💇🏾\",\"x\":26,\"y\":32},{\"unified\":\"1f487-1f3ff\",\"native\":\"💇🏿\",\"x\":26,\"y\":33}],\"version\":1},\"man-getting-haircut\":{\"id\":\"man-getting-haircut\",\"name\":\"Man Getting Haircut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f487-200d-2642-fe0f\",\"native\":\"💇‍♂️\",\"x\":26,\"y\":22},{\"unified\":\"1f487-1f3fb-200d-2642-fe0f\",\"native\":\"💇🏻‍♂️\",\"x\":26,\"y\":23},{\"unified\":\"1f487-1f3fc-200d-2642-fe0f\",\"native\":\"💇🏼‍♂️\",\"x\":26,\"y\":24},{\"unified\":\"1f487-1f3fd-200d-2642-fe0f\",\"native\":\"💇🏽‍♂️\",\"x\":26,\"y\":25},{\"unified\":\"1f487-1f3fe-200d-2642-fe0f\",\"native\":\"💇🏾‍♂️\",\"x\":26,\"y\":26},{\"unified\":\"1f487-1f3ff-200d-2642-fe0f\",\"native\":\"💇🏿‍♂️\",\"x\":26,\"y\":27}],\"version\":4},\"woman-getting-haircut\":{\"id\":\"woman-getting-haircut\",\"name\":\"Woman Getting Haircut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f487-200d-2640-fe0f\",\"native\":\"💇‍♀️\",\"x\":26,\"y\":16},{\"unified\":\"1f487-1f3fb-200d-2640-fe0f\",\"native\":\"💇🏻‍♀️\",\"x\":26,\"y\":17},{\"unified\":\"1f487-1f3fc-200d-2640-fe0f\",\"native\":\"💇🏼‍♀️\",\"x\":26,\"y\":18},{\"unified\":\"1f487-1f3fd-200d-2640-fe0f\",\"native\":\"💇🏽‍♀️\",\"x\":26,\"y\":19},{\"unified\":\"1f487-1f3fe-200d-2640-fe0f\",\"native\":\"💇🏾‍♀️\",\"x\":26,\"y\":20},{\"unified\":\"1f487-1f3ff-200d-2640-fe0f\",\"native\":\"💇🏿‍♀️\",\"x\":26,\"y\":21}],\"version\":4},\"walking\":{\"id\":\"walking\",\"name\":\"Pedestrian\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b6\",\"native\":\"🚶\",\"x\":37,\"y\":27},{\"unified\":\"1f6b6-1f3fb\",\"native\":\"🚶🏻\",\"x\":37,\"y\":28},{\"unified\":\"1f6b6-1f3fc\",\"native\":\"🚶🏼\",\"x\":37,\"y\":29},{\"unified\":\"1f6b6-1f3fd\",\"native\":\"🚶🏽\",\"x\":37,\"y\":30},{\"unified\":\"1f6b6-1f3fe\",\"native\":\"🚶🏾\",\"x\":37,\"y\":31},{\"unified\":\"1f6b6-1f3ff\",\"native\":\"🚶🏿\",\"x\":37,\"y\":32}],\"version\":1},\"man-walking\":{\"id\":\"man-walking\",\"name\":\"Man Walking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b6-200d-2642-fe0f\",\"native\":\"🚶‍♂️\",\"x\":37,\"y\":21},{\"unified\":\"1f6b6-1f3fb-200d-2642-fe0f\",\"native\":\"🚶🏻‍♂️\",\"x\":37,\"y\":22},{\"unified\":\"1f6b6-1f3fc-200d-2642-fe0f\",\"native\":\"🚶🏼‍♂️\",\"x\":37,\"y\":23},{\"unified\":\"1f6b6-1f3fd-200d-2642-fe0f\",\"native\":\"🚶🏽‍♂️\",\"x\":37,\"y\":24},{\"unified\":\"1f6b6-1f3fe-200d-2642-fe0f\",\"native\":\"🚶🏾‍♂️\",\"x\":37,\"y\":25},{\"unified\":\"1f6b6-1f3ff-200d-2642-fe0f\",\"native\":\"🚶🏿‍♂️\",\"x\":37,\"y\":26}],\"version\":4},\"woman-walking\":{\"id\":\"woman-walking\",\"name\":\"Woman Walking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b6-200d-2640-fe0f\",\"native\":\"🚶‍♀️\",\"x\":37,\"y\":15},{\"unified\":\"1f6b6-1f3fb-200d-2640-fe0f\",\"native\":\"🚶🏻‍♀️\",\"x\":37,\"y\":16},{\"unified\":\"1f6b6-1f3fc-200d-2640-fe0f\",\"native\":\"🚶🏼‍♀️\",\"x\":37,\"y\":17},{\"unified\":\"1f6b6-1f3fd-200d-2640-fe0f\",\"native\":\"🚶🏽‍♀️\",\"x\":37,\"y\":18},{\"unified\":\"1f6b6-1f3fe-200d-2640-fe0f\",\"native\":\"🚶🏾‍♀️\",\"x\":37,\"y\":19},{\"unified\":\"1f6b6-1f3ff-200d-2640-fe0f\",\"native\":\"🚶🏿‍♀️\",\"x\":37,\"y\":20}],\"version\":4},\"runner\":{\"id\":\"runner\",\"name\":\"Runner\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c3\",\"native\":\"🏃\",\"x\":8,\"y\":26},{\"unified\":\"1f3c3-1f3fb\",\"native\":\"🏃🏻\",\"x\":8,\"y\":27},{\"unified\":\"1f3c3-1f3fc\",\"native\":\"🏃🏼\",\"x\":8,\"y\":28},{\"unified\":\"1f3c3-1f3fd\",\"native\":\"🏃🏽\",\"x\":8,\"y\":29},{\"unified\":\"1f3c3-1f3fe\",\"native\":\"🏃🏾\",\"x\":8,\"y\":30},{\"unified\":\"1f3c3-1f3ff\",\"native\":\"🏃🏿\",\"x\":8,\"y\":31}],\"version\":1},\"man-running\":{\"id\":\"man-running\",\"name\":\"Man Running\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c3-200d-2642-fe0f\",\"native\":\"🏃‍♂️\",\"x\":8,\"y\":20},{\"unified\":\"1f3c3-1f3fb-200d-2642-fe0f\",\"native\":\"🏃🏻‍♂️\",\"x\":8,\"y\":21},{\"unified\":\"1f3c3-1f3fc-200d-2642-fe0f\",\"native\":\"🏃🏼‍♂️\",\"x\":8,\"y\":22},{\"unified\":\"1f3c3-1f3fd-200d-2642-fe0f\",\"native\":\"🏃🏽‍♂️\",\"x\":8,\"y\":23},{\"unified\":\"1f3c3-1f3fe-200d-2642-fe0f\",\"native\":\"🏃🏾‍♂️\",\"x\":8,\"y\":24},{\"unified\":\"1f3c3-1f3ff-200d-2642-fe0f\",\"native\":\"🏃🏿‍♂️\",\"x\":8,\"y\":25}],\"version\":4},\"woman-running\":{\"id\":\"woman-running\",\"name\":\"Woman Running\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c3-200d-2640-fe0f\",\"native\":\"🏃‍♀️\",\"x\":8,\"y\":14},{\"unified\":\"1f3c3-1f3fb-200d-2640-fe0f\",\"native\":\"🏃🏻‍♀️\",\"x\":8,\"y\":15},{\"unified\":\"1f3c3-1f3fc-200d-2640-fe0f\",\"native\":\"🏃🏼‍♀️\",\"x\":8,\"y\":16},{\"unified\":\"1f3c3-1f3fd-200d-2640-fe0f\",\"native\":\"🏃🏽‍♀️\",\"x\":8,\"y\":17},{\"unified\":\"1f3c3-1f3fe-200d-2640-fe0f\",\"native\":\"🏃🏾‍♀️\",\"x\":8,\"y\":18},{\"unified\":\"1f3c3-1f3ff-200d-2640-fe0f\",\"native\":\"🏃🏿‍♀️\",\"x\":8,\"y\":19}],\"version\":4},\"dancer\":{\"id\":\"dancer\",\"name\":\"Dancer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f483\",\"native\":\"💃\",\"x\":25,\"y\":46},{\"unified\":\"1f483-1f3fb\",\"native\":\"💃🏻\",\"x\":25,\"y\":47},{\"unified\":\"1f483-1f3fc\",\"native\":\"💃🏼\",\"x\":25,\"y\":48},{\"unified\":\"1f483-1f3fd\",\"native\":\"💃🏽\",\"x\":25,\"y\":49},{\"unified\":\"1f483-1f3fe\",\"native\":\"💃🏾\",\"x\":25,\"y\":50},{\"unified\":\"1f483-1f3ff\",\"native\":\"💃🏿\",\"x\":25,\"y\":51}],\"version\":1},\"man_dancing\":{\"id\":\"man_dancing\",\"name\":\"Man Dancing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f57a\",\"native\":\"🕺\",\"x\":31,\"y\":26},{\"unified\":\"1f57a-1f3fb\",\"native\":\"🕺🏻\",\"x\":31,\"y\":27},{\"unified\":\"1f57a-1f3fc\",\"native\":\"🕺🏼\",\"x\":31,\"y\":28},{\"unified\":\"1f57a-1f3fd\",\"native\":\"🕺🏽\",\"x\":31,\"y\":29},{\"unified\":\"1f57a-1f3fe\",\"native\":\"🕺🏾\",\"x\":31,\"y\":30},{\"unified\":\"1f57a-1f3ff\",\"native\":\"🕺🏿\",\"x\":31,\"y\":31}],\"version\":3},\"man_in_business_suit_levitating\":{\"id\":\"man_in_business_suit_levitating\",\"name\":\"Person in Suit Levitating\",\"keywords\":[],\"skins\":[{\"unified\":\"1f574-fe0f\",\"native\":\"🕴️\",\"x\":30,\"y\":59},{\"unified\":\"1f574-1f3fb\",\"native\":\"🕴🏻\",\"x\":30,\"y\":60},{\"unified\":\"1f574-1f3fc\",\"native\":\"🕴🏼\",\"x\":31,\"y\":0},{\"unified\":\"1f574-1f3fd\",\"native\":\"🕴🏽\",\"x\":31,\"y\":1},{\"unified\":\"1f574-1f3fe\",\"native\":\"🕴🏾\",\"x\":31,\"y\":2},{\"unified\":\"1f574-1f3ff\",\"native\":\"🕴🏿\",\"x\":31,\"y\":3}],\"version\":1},\"dancers\":{\"id\":\"dancers\",\"name\":\"Woman with Bunny Ears\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46f\",\"native\":\"👯\",\"x\":23,\"y\":16}],\"version\":1},\"men-with-bunny-ears-partying\":{\"id\":\"men-with-bunny-ears-partying\",\"name\":\"Men with Bunny Ears\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46f-200d-2642-fe0f\",\"native\":\"👯‍♂️\",\"x\":23,\"y\":15}],\"version\":4},\"women-with-bunny-ears-partying\":{\"id\":\"women-with-bunny-ears-partying\",\"name\":\"Women with Bunny Ears\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46f-200d-2640-fe0f\",\"native\":\"👯‍♀️\",\"x\":23,\"y\":14}],\"version\":4},\"fencer\":{\"id\":\"fencer\",\"name\":\"Fencer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93a\",\"native\":\"🤺\",\"x\":42,\"y\":31}],\"version\":3},\"horse_racing\":{\"id\":\"horse_racing\",\"name\":\"Horse Racing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c7\",\"native\":\"🏇\",\"x\":8,\"y\":52},{\"unified\":\"1f3c7-1f3fb\",\"native\":\"🏇🏻\",\"x\":8,\"y\":53},{\"unified\":\"1f3c7-1f3fc\",\"native\":\"🏇🏼\",\"x\":8,\"y\":54},{\"unified\":\"1f3c7-1f3fd\",\"native\":\"🏇🏽\",\"x\":8,\"y\":55},{\"unified\":\"1f3c7-1f3fe\",\"native\":\"🏇🏾\",\"x\":8,\"y\":56},{\"unified\":\"1f3c7-1f3ff\",\"native\":\"🏇🏿\",\"x\":8,\"y\":57}],\"version\":1},\"skier\":{\"id\":\"skier\",\"name\":\"Skier\",\"keywords\":[],\"skins\":[{\"unified\":\"26f7-fe0f\",\"native\":\"⛷️\",\"x\":58,\"y\":1}],\"version\":1},\"snowboarder\":{\"id\":\"snowboarder\",\"name\":\"Snowboarder\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c2\",\"native\":\"🏂\",\"x\":8,\"y\":8},{\"unified\":\"1f3c2-1f3fb\",\"native\":\"🏂🏻\",\"x\":8,\"y\":9},{\"unified\":\"1f3c2-1f3fc\",\"native\":\"🏂🏼\",\"x\":8,\"y\":10},{\"unified\":\"1f3c2-1f3fd\",\"native\":\"🏂🏽\",\"x\":8,\"y\":11},{\"unified\":\"1f3c2-1f3fe\",\"native\":\"🏂🏾\",\"x\":8,\"y\":12},{\"unified\":\"1f3c2-1f3ff\",\"native\":\"🏂🏿\",\"x\":8,\"y\":13}],\"version\":1},\"golfer\":{\"id\":\"golfer\",\"name\":\"Person Golfing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cc-fe0f\",\"native\":\"🏌️\",\"x\":9,\"y\":47},{\"unified\":\"1f3cc-1f3fb\",\"native\":\"🏌🏻\",\"x\":9,\"y\":48},{\"unified\":\"1f3cc-1f3fc\",\"native\":\"🏌🏼\",\"x\":9,\"y\":49},{\"unified\":\"1f3cc-1f3fd\",\"native\":\"🏌🏽\",\"x\":9,\"y\":50},{\"unified\":\"1f3cc-1f3fe\",\"native\":\"🏌🏾\",\"x\":9,\"y\":51},{\"unified\":\"1f3cc-1f3ff\",\"native\":\"🏌🏿\",\"x\":9,\"y\":52}],\"version\":1},\"man-golfing\":{\"id\":\"man-golfing\",\"name\":\"Man Golfing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cc-fe0f-200d-2642-fe0f\",\"native\":\"🏌️‍♂️\",\"x\":9,\"y\":41},{\"unified\":\"1f3cc-1f3fb-200d-2642-fe0f\",\"native\":\"🏌🏻‍♂️\",\"x\":9,\"y\":42},{\"unified\":\"1f3cc-1f3fc-200d-2642-fe0f\",\"native\":\"🏌🏼‍♂️\",\"x\":9,\"y\":43},{\"unified\":\"1f3cc-1f3fd-200d-2642-fe0f\",\"native\":\"🏌🏽‍♂️\",\"x\":9,\"y\":44},{\"unified\":\"1f3cc-1f3fe-200d-2642-fe0f\",\"native\":\"🏌🏾‍♂️\",\"x\":9,\"y\":45},{\"unified\":\"1f3cc-1f3ff-200d-2642-fe0f\",\"native\":\"🏌🏿‍♂️\",\"x\":9,\"y\":46}],\"version\":4},\"woman-golfing\":{\"id\":\"woman-golfing\",\"name\":\"Woman Golfing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cc-fe0f-200d-2640-fe0f\",\"native\":\"🏌️‍♀️\",\"x\":9,\"y\":35},{\"unified\":\"1f3cc-1f3fb-200d-2640-fe0f\",\"native\":\"🏌🏻‍♀️\",\"x\":9,\"y\":36},{\"unified\":\"1f3cc-1f3fc-200d-2640-fe0f\",\"native\":\"🏌🏼‍♀️\",\"x\":9,\"y\":37},{\"unified\":\"1f3cc-1f3fd-200d-2640-fe0f\",\"native\":\"🏌🏽‍♀️\",\"x\":9,\"y\":38},{\"unified\":\"1f3cc-1f3fe-200d-2640-fe0f\",\"native\":\"🏌🏾‍♀️\",\"x\":9,\"y\":39},{\"unified\":\"1f3cc-1f3ff-200d-2640-fe0f\",\"native\":\"🏌🏿‍♀️\",\"x\":9,\"y\":40}],\"version\":4},\"surfer\":{\"id\":\"surfer\",\"name\":\"Surfer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c4\",\"native\":\"🏄\",\"x\":8,\"y\":44},{\"unified\":\"1f3c4-1f3fb\",\"native\":\"🏄🏻\",\"x\":8,\"y\":45},{\"unified\":\"1f3c4-1f3fc\",\"native\":\"🏄🏼\",\"x\":8,\"y\":46},{\"unified\":\"1f3c4-1f3fd\",\"native\":\"🏄🏽\",\"x\":8,\"y\":47},{\"unified\":\"1f3c4-1f3fe\",\"native\":\"🏄🏾\",\"x\":8,\"y\":48},{\"unified\":\"1f3c4-1f3ff\",\"native\":\"🏄🏿\",\"x\":8,\"y\":49}],\"version\":1},\"man-surfing\":{\"id\":\"man-surfing\",\"name\":\"Man Surfing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c4-200d-2642-fe0f\",\"native\":\"🏄‍♂️\",\"x\":8,\"y\":38},{\"unified\":\"1f3c4-1f3fb-200d-2642-fe0f\",\"native\":\"🏄🏻‍♂️\",\"x\":8,\"y\":39},{\"unified\":\"1f3c4-1f3fc-200d-2642-fe0f\",\"native\":\"🏄🏼‍♂️\",\"x\":8,\"y\":40},{\"unified\":\"1f3c4-1f3fd-200d-2642-fe0f\",\"native\":\"🏄🏽‍♂️\",\"x\":8,\"y\":41},{\"unified\":\"1f3c4-1f3fe-200d-2642-fe0f\",\"native\":\"🏄🏾‍♂️\",\"x\":8,\"y\":42},{\"unified\":\"1f3c4-1f3ff-200d-2642-fe0f\",\"native\":\"🏄🏿‍♂️\",\"x\":8,\"y\":43}],\"version\":4},\"woman-surfing\":{\"id\":\"woman-surfing\",\"name\":\"Woman Surfing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c4-200d-2640-fe0f\",\"native\":\"🏄‍♀️\",\"x\":8,\"y\":32},{\"unified\":\"1f3c4-1f3fb-200d-2640-fe0f\",\"native\":\"🏄🏻‍♀️\",\"x\":8,\"y\":33},{\"unified\":\"1f3c4-1f3fc-200d-2640-fe0f\",\"native\":\"🏄🏼‍♀️\",\"x\":8,\"y\":34},{\"unified\":\"1f3c4-1f3fd-200d-2640-fe0f\",\"native\":\"🏄🏽‍♀️\",\"x\":8,\"y\":35},{\"unified\":\"1f3c4-1f3fe-200d-2640-fe0f\",\"native\":\"🏄🏾‍♀️\",\"x\":8,\"y\":36},{\"unified\":\"1f3c4-1f3ff-200d-2640-fe0f\",\"native\":\"🏄🏿‍♀️\",\"x\":8,\"y\":37}],\"version\":4},\"rowboat\":{\"id\":\"rowboat\",\"name\":\"Rowboat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a3\",\"native\":\"🚣\",\"x\":36,\"y\":18},{\"unified\":\"1f6a3-1f3fb\",\"native\":\"🚣🏻\",\"x\":36,\"y\":19},{\"unified\":\"1f6a3-1f3fc\",\"native\":\"🚣🏼\",\"x\":36,\"y\":20},{\"unified\":\"1f6a3-1f3fd\",\"native\":\"🚣🏽\",\"x\":36,\"y\":21},{\"unified\":\"1f6a3-1f3fe\",\"native\":\"🚣🏾\",\"x\":36,\"y\":22},{\"unified\":\"1f6a3-1f3ff\",\"native\":\"🚣🏿\",\"x\":36,\"y\":23}],\"version\":1},\"man-rowing-boat\":{\"id\":\"man-rowing-boat\",\"name\":\"Man Rowing Boat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a3-200d-2642-fe0f\",\"native\":\"🚣‍♂️\",\"x\":36,\"y\":12},{\"unified\":\"1f6a3-1f3fb-200d-2642-fe0f\",\"native\":\"🚣🏻‍♂️\",\"x\":36,\"y\":13},{\"unified\":\"1f6a3-1f3fc-200d-2642-fe0f\",\"native\":\"🚣🏼‍♂️\",\"x\":36,\"y\":14},{\"unified\":\"1f6a3-1f3fd-200d-2642-fe0f\",\"native\":\"🚣🏽‍♂️\",\"x\":36,\"y\":15},{\"unified\":\"1f6a3-1f3fe-200d-2642-fe0f\",\"native\":\"🚣🏾‍♂️\",\"x\":36,\"y\":16},{\"unified\":\"1f6a3-1f3ff-200d-2642-fe0f\",\"native\":\"🚣🏿‍♂️\",\"x\":36,\"y\":17}],\"version\":4},\"woman-rowing-boat\":{\"id\":\"woman-rowing-boat\",\"name\":\"Woman Rowing Boat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a3-200d-2640-fe0f\",\"native\":\"🚣‍♀️\",\"x\":36,\"y\":6},{\"unified\":\"1f6a3-1f3fb-200d-2640-fe0f\",\"native\":\"🚣🏻‍♀️\",\"x\":36,\"y\":7},{\"unified\":\"1f6a3-1f3fc-200d-2640-fe0f\",\"native\":\"🚣🏼‍♀️\",\"x\":36,\"y\":8},{\"unified\":\"1f6a3-1f3fd-200d-2640-fe0f\",\"native\":\"🚣🏽‍♀️\",\"x\":36,\"y\":9},{\"unified\":\"1f6a3-1f3fe-200d-2640-fe0f\",\"native\":\"🚣🏾‍♀️\",\"x\":36,\"y\":10},{\"unified\":\"1f6a3-1f3ff-200d-2640-fe0f\",\"native\":\"🚣🏿‍♀️\",\"x\":36,\"y\":11}],\"version\":4},\"swimmer\":{\"id\":\"swimmer\",\"name\":\"Swimmer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ca\",\"native\":\"🏊\",\"x\":9,\"y\":11},{\"unified\":\"1f3ca-1f3fb\",\"native\":\"🏊🏻\",\"x\":9,\"y\":12},{\"unified\":\"1f3ca-1f3fc\",\"native\":\"🏊🏼\",\"x\":9,\"y\":13},{\"unified\":\"1f3ca-1f3fd\",\"native\":\"🏊🏽\",\"x\":9,\"y\":14},{\"unified\":\"1f3ca-1f3fe\",\"native\":\"🏊🏾\",\"x\":9,\"y\":15},{\"unified\":\"1f3ca-1f3ff\",\"native\":\"🏊🏿\",\"x\":9,\"y\":16}],\"version\":1},\"man-swimming\":{\"id\":\"man-swimming\",\"name\":\"Man Swimming\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ca-200d-2642-fe0f\",\"native\":\"🏊‍♂️\",\"x\":9,\"y\":5},{\"unified\":\"1f3ca-1f3fb-200d-2642-fe0f\",\"native\":\"🏊🏻‍♂️\",\"x\":9,\"y\":6},{\"unified\":\"1f3ca-1f3fc-200d-2642-fe0f\",\"native\":\"🏊🏼‍♂️\",\"x\":9,\"y\":7},{\"unified\":\"1f3ca-1f3fd-200d-2642-fe0f\",\"native\":\"🏊🏽‍♂️\",\"x\":9,\"y\":8},{\"unified\":\"1f3ca-1f3fe-200d-2642-fe0f\",\"native\":\"🏊🏾‍♂️\",\"x\":9,\"y\":9},{\"unified\":\"1f3ca-1f3ff-200d-2642-fe0f\",\"native\":\"🏊🏿‍♂️\",\"x\":9,\"y\":10}],\"version\":4},\"woman-swimming\":{\"id\":\"woman-swimming\",\"name\":\"Woman Swimming\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ca-200d-2640-fe0f\",\"native\":\"🏊‍♀️\",\"x\":8,\"y\":60},{\"unified\":\"1f3ca-1f3fb-200d-2640-fe0f\",\"native\":\"🏊🏻‍♀️\",\"x\":9,\"y\":0},{\"unified\":\"1f3ca-1f3fc-200d-2640-fe0f\",\"native\":\"🏊🏼‍♀️\",\"x\":9,\"y\":1},{\"unified\":\"1f3ca-1f3fd-200d-2640-fe0f\",\"native\":\"🏊🏽‍♀️\",\"x\":9,\"y\":2},{\"unified\":\"1f3ca-1f3fe-200d-2640-fe0f\",\"native\":\"🏊🏾‍♀️\",\"x\":9,\"y\":3},{\"unified\":\"1f3ca-1f3ff-200d-2640-fe0f\",\"native\":\"🏊🏿‍♀️\",\"x\":9,\"y\":4}],\"version\":4},\"person_with_ball\":{\"id\":\"person_with_ball\",\"name\":\"Person Bouncing Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"26f9-fe0f\",\"native\":\"⛹️\",\"x\":58,\"y\":15},{\"unified\":\"26f9-1f3fb\",\"native\":\"⛹🏻\",\"x\":58,\"y\":16},{\"unified\":\"26f9-1f3fc\",\"native\":\"⛹🏼\",\"x\":58,\"y\":17},{\"unified\":\"26f9-1f3fd\",\"native\":\"⛹🏽\",\"x\":58,\"y\":18},{\"unified\":\"26f9-1f3fe\",\"native\":\"⛹🏾\",\"x\":58,\"y\":19},{\"unified\":\"26f9-1f3ff\",\"native\":\"⛹🏿\",\"x\":58,\"y\":20}],\"version\":1},\"man-bouncing-ball\":{\"id\":\"man-bouncing-ball\",\"name\":\"Man Bouncing Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"26f9-fe0f-200d-2642-fe0f\",\"native\":\"⛹️‍♂️\",\"x\":58,\"y\":9},{\"unified\":\"26f9-1f3fb-200d-2642-fe0f\",\"native\":\"⛹🏻‍♂️\",\"x\":58,\"y\":10},{\"unified\":\"26f9-1f3fc-200d-2642-fe0f\",\"native\":\"⛹🏼‍♂️\",\"x\":58,\"y\":11},{\"unified\":\"26f9-1f3fd-200d-2642-fe0f\",\"native\":\"⛹🏽‍♂️\",\"x\":58,\"y\":12},{\"unified\":\"26f9-1f3fe-200d-2642-fe0f\",\"native\":\"⛹🏾‍♂️\",\"x\":58,\"y\":13},{\"unified\":\"26f9-1f3ff-200d-2642-fe0f\",\"native\":\"⛹🏿‍♂️\",\"x\":58,\"y\":14}],\"version\":4},\"woman-bouncing-ball\":{\"id\":\"woman-bouncing-ball\",\"name\":\"Woman Bouncing Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"26f9-fe0f-200d-2640-fe0f\",\"native\":\"⛹️‍♀️\",\"x\":58,\"y\":3},{\"unified\":\"26f9-1f3fb-200d-2640-fe0f\",\"native\":\"⛹🏻‍♀️\",\"x\":58,\"y\":4},{\"unified\":\"26f9-1f3fc-200d-2640-fe0f\",\"native\":\"⛹🏼‍♀️\",\"x\":58,\"y\":5},{\"unified\":\"26f9-1f3fd-200d-2640-fe0f\",\"native\":\"⛹🏽‍♀️\",\"x\":58,\"y\":6},{\"unified\":\"26f9-1f3fe-200d-2640-fe0f\",\"native\":\"⛹🏾‍♀️\",\"x\":58,\"y\":7},{\"unified\":\"26f9-1f3ff-200d-2640-fe0f\",\"native\":\"⛹🏿‍♀️\",\"x\":58,\"y\":8}],\"version\":4},\"weight_lifter\":{\"id\":\"weight_lifter\",\"name\":\"Person Lifting Weights\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cb-fe0f\",\"native\":\"🏋️\",\"x\":9,\"y\":29},{\"unified\":\"1f3cb-1f3fb\",\"native\":\"🏋🏻\",\"x\":9,\"y\":30},{\"unified\":\"1f3cb-1f3fc\",\"native\":\"🏋🏼\",\"x\":9,\"y\":31},{\"unified\":\"1f3cb-1f3fd\",\"native\":\"🏋🏽\",\"x\":9,\"y\":32},{\"unified\":\"1f3cb-1f3fe\",\"native\":\"🏋🏾\",\"x\":9,\"y\":33},{\"unified\":\"1f3cb-1f3ff\",\"native\":\"🏋🏿\",\"x\":9,\"y\":34}],\"version\":1},\"man-lifting-weights\":{\"id\":\"man-lifting-weights\",\"name\":\"Man Lifting Weights\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cb-fe0f-200d-2642-fe0f\",\"native\":\"🏋️‍♂️\",\"x\":9,\"y\":23},{\"unified\":\"1f3cb-1f3fb-200d-2642-fe0f\",\"native\":\"🏋🏻‍♂️\",\"x\":9,\"y\":24},{\"unified\":\"1f3cb-1f3fc-200d-2642-fe0f\",\"native\":\"🏋🏼‍♂️\",\"x\":9,\"y\":25},{\"unified\":\"1f3cb-1f3fd-200d-2642-fe0f\",\"native\":\"🏋🏽‍♂️\",\"x\":9,\"y\":26},{\"unified\":\"1f3cb-1f3fe-200d-2642-fe0f\",\"native\":\"🏋🏾‍♂️\",\"x\":9,\"y\":27},{\"unified\":\"1f3cb-1f3ff-200d-2642-fe0f\",\"native\":\"🏋🏿‍♂️\",\"x\":9,\"y\":28}],\"version\":4},\"woman-lifting-weights\":{\"id\":\"woman-lifting-weights\",\"name\":\"Woman Lifting Weights\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cb-fe0f-200d-2640-fe0f\",\"native\":\"🏋️‍♀️\",\"x\":9,\"y\":17},{\"unified\":\"1f3cb-1f3fb-200d-2640-fe0f\",\"native\":\"🏋🏻‍♀️\",\"x\":9,\"y\":18},{\"unified\":\"1f3cb-1f3fc-200d-2640-fe0f\",\"native\":\"🏋🏼‍♀️\",\"x\":9,\"y\":19},{\"unified\":\"1f3cb-1f3fd-200d-2640-fe0f\",\"native\":\"🏋🏽‍♀️\",\"x\":9,\"y\":20},{\"unified\":\"1f3cb-1f3fe-200d-2640-fe0f\",\"native\":\"🏋🏾‍♀️\",\"x\":9,\"y\":21},{\"unified\":\"1f3cb-1f3ff-200d-2640-fe0f\",\"native\":\"🏋🏿‍♀️\",\"x\":9,\"y\":22}],\"version\":4},\"bicyclist\":{\"id\":\"bicyclist\",\"name\":\"Bicyclist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b4\",\"native\":\"🚴\",\"x\":36,\"y\":52},{\"unified\":\"1f6b4-1f3fb\",\"native\":\"🚴🏻\",\"x\":36,\"y\":53},{\"unified\":\"1f6b4-1f3fc\",\"native\":\"🚴🏼\",\"x\":36,\"y\":54},{\"unified\":\"1f6b4-1f3fd\",\"native\":\"🚴🏽\",\"x\":36,\"y\":55},{\"unified\":\"1f6b4-1f3fe\",\"native\":\"🚴🏾\",\"x\":36,\"y\":56},{\"unified\":\"1f6b4-1f3ff\",\"native\":\"🚴🏿\",\"x\":36,\"y\":57}],\"version\":1},\"man-biking\":{\"id\":\"man-biking\",\"name\":\"Man Biking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b4-200d-2642-fe0f\",\"native\":\"🚴‍♂️\",\"x\":36,\"y\":46},{\"unified\":\"1f6b4-1f3fb-200d-2642-fe0f\",\"native\":\"🚴🏻‍♂️\",\"x\":36,\"y\":47},{\"unified\":\"1f6b4-1f3fc-200d-2642-fe0f\",\"native\":\"🚴🏼‍♂️\",\"x\":36,\"y\":48},{\"unified\":\"1f6b4-1f3fd-200d-2642-fe0f\",\"native\":\"🚴🏽‍♂️\",\"x\":36,\"y\":49},{\"unified\":\"1f6b4-1f3fe-200d-2642-fe0f\",\"native\":\"🚴🏾‍♂️\",\"x\":36,\"y\":50},{\"unified\":\"1f6b4-1f3ff-200d-2642-fe0f\",\"native\":\"🚴🏿‍♂️\",\"x\":36,\"y\":51}],\"version\":4},\"woman-biking\":{\"id\":\"woman-biking\",\"name\":\"Woman Biking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b4-200d-2640-fe0f\",\"native\":\"🚴‍♀️\",\"x\":36,\"y\":40},{\"unified\":\"1f6b4-1f3fb-200d-2640-fe0f\",\"native\":\"🚴🏻‍♀️\",\"x\":36,\"y\":41},{\"unified\":\"1f6b4-1f3fc-200d-2640-fe0f\",\"native\":\"🚴🏼‍♀️\",\"x\":36,\"y\":42},{\"unified\":\"1f6b4-1f3fd-200d-2640-fe0f\",\"native\":\"🚴🏽‍♀️\",\"x\":36,\"y\":43},{\"unified\":\"1f6b4-1f3fe-200d-2640-fe0f\",\"native\":\"🚴🏾‍♀️\",\"x\":36,\"y\":44},{\"unified\":\"1f6b4-1f3ff-200d-2640-fe0f\",\"native\":\"🚴🏿‍♀️\",\"x\":36,\"y\":45}],\"version\":4},\"mountain_bicyclist\":{\"id\":\"mountain_bicyclist\",\"name\":\"Mountain Bicyclist\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b5\",\"native\":\"🚵\",\"x\":37,\"y\":9},{\"unified\":\"1f6b5-1f3fb\",\"native\":\"🚵🏻\",\"x\":37,\"y\":10},{\"unified\":\"1f6b5-1f3fc\",\"native\":\"🚵🏼\",\"x\":37,\"y\":11},{\"unified\":\"1f6b5-1f3fd\",\"native\":\"🚵🏽\",\"x\":37,\"y\":12},{\"unified\":\"1f6b5-1f3fe\",\"native\":\"🚵🏾\",\"x\":37,\"y\":13},{\"unified\":\"1f6b5-1f3ff\",\"native\":\"🚵🏿\",\"x\":37,\"y\":14}],\"version\":1},\"man-mountain-biking\":{\"id\":\"man-mountain-biking\",\"name\":\"Man Mountain Biking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b5-200d-2642-fe0f\",\"native\":\"🚵‍♂️\",\"x\":37,\"y\":3},{\"unified\":\"1f6b5-1f3fb-200d-2642-fe0f\",\"native\":\"🚵🏻‍♂️\",\"x\":37,\"y\":4},{\"unified\":\"1f6b5-1f3fc-200d-2642-fe0f\",\"native\":\"🚵🏼‍♂️\",\"x\":37,\"y\":5},{\"unified\":\"1f6b5-1f3fd-200d-2642-fe0f\",\"native\":\"🚵🏽‍♂️\",\"x\":37,\"y\":6},{\"unified\":\"1f6b5-1f3fe-200d-2642-fe0f\",\"native\":\"🚵🏾‍♂️\",\"x\":37,\"y\":7},{\"unified\":\"1f6b5-1f3ff-200d-2642-fe0f\",\"native\":\"🚵🏿‍♂️\",\"x\":37,\"y\":8}],\"version\":4},\"woman-mountain-biking\":{\"id\":\"woman-mountain-biking\",\"name\":\"Woman Mountain Biking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b5-200d-2640-fe0f\",\"native\":\"🚵‍♀️\",\"x\":36,\"y\":58},{\"unified\":\"1f6b5-1f3fb-200d-2640-fe0f\",\"native\":\"🚵🏻‍♀️\",\"x\":36,\"y\":59},{\"unified\":\"1f6b5-1f3fc-200d-2640-fe0f\",\"native\":\"🚵🏼‍♀️\",\"x\":36,\"y\":60},{\"unified\":\"1f6b5-1f3fd-200d-2640-fe0f\",\"native\":\"🚵🏽‍♀️\",\"x\":37,\"y\":0},{\"unified\":\"1f6b5-1f3fe-200d-2640-fe0f\",\"native\":\"🚵🏾‍♀️\",\"x\":37,\"y\":1},{\"unified\":\"1f6b5-1f3ff-200d-2640-fe0f\",\"native\":\"🚵🏿‍♀️\",\"x\":37,\"y\":2}],\"version\":4},\"person_doing_cartwheel\":{\"id\":\"person_doing_cartwheel\",\"name\":\"Person Cartwheeling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f938\",\"native\":\"🤸\",\"x\":42,\"y\":7},{\"unified\":\"1f938-1f3fb\",\"native\":\"🤸🏻\",\"x\":42,\"y\":8},{\"unified\":\"1f938-1f3fc\",\"native\":\"🤸🏼\",\"x\":42,\"y\":9},{\"unified\":\"1f938-1f3fd\",\"native\":\"🤸🏽\",\"x\":42,\"y\":10},{\"unified\":\"1f938-1f3fe\",\"native\":\"🤸🏾\",\"x\":42,\"y\":11},{\"unified\":\"1f938-1f3ff\",\"native\":\"🤸🏿\",\"x\":42,\"y\":12}],\"version\":3},\"man-cartwheeling\":{\"id\":\"man-cartwheeling\",\"name\":\"Man Cartwheeling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f938-200d-2642-fe0f\",\"native\":\"🤸‍♂️\",\"x\":42,\"y\":1},{\"unified\":\"1f938-1f3fb-200d-2642-fe0f\",\"native\":\"🤸🏻‍♂️\",\"x\":42,\"y\":2},{\"unified\":\"1f938-1f3fc-200d-2642-fe0f\",\"native\":\"🤸🏼‍♂️\",\"x\":42,\"y\":3},{\"unified\":\"1f938-1f3fd-200d-2642-fe0f\",\"native\":\"🤸🏽‍♂️\",\"x\":42,\"y\":4},{\"unified\":\"1f938-1f3fe-200d-2642-fe0f\",\"native\":\"🤸🏾‍♂️\",\"x\":42,\"y\":5},{\"unified\":\"1f938-1f3ff-200d-2642-fe0f\",\"native\":\"🤸🏿‍♂️\",\"x\":42,\"y\":6}],\"version\":4},\"woman-cartwheeling\":{\"id\":\"woman-cartwheeling\",\"name\":\"Woman Cartwheeling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f938-200d-2640-fe0f\",\"native\":\"🤸‍♀️\",\"x\":41,\"y\":56},{\"unified\":\"1f938-1f3fb-200d-2640-fe0f\",\"native\":\"🤸🏻‍♀️\",\"x\":41,\"y\":57},{\"unified\":\"1f938-1f3fc-200d-2640-fe0f\",\"native\":\"🤸🏼‍♀️\",\"x\":41,\"y\":58},{\"unified\":\"1f938-1f3fd-200d-2640-fe0f\",\"native\":\"🤸🏽‍♀️\",\"x\":41,\"y\":59},{\"unified\":\"1f938-1f3fe-200d-2640-fe0f\",\"native\":\"🤸🏾‍♀️\",\"x\":41,\"y\":60},{\"unified\":\"1f938-1f3ff-200d-2640-fe0f\",\"native\":\"🤸🏿‍♀️\",\"x\":42,\"y\":0}],\"version\":4},\"wrestlers\":{\"id\":\"wrestlers\",\"name\":\"Wrestlers\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93c\",\"native\":\"🤼\",\"x\":42,\"y\":34}],\"version\":3},\"man-wrestling\":{\"id\":\"man-wrestling\",\"name\":\"Men Wrestling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93c-200d-2642-fe0f\",\"native\":\"🤼‍♂️\",\"x\":42,\"y\":33}],\"version\":4},\"woman-wrestling\":{\"id\":\"woman-wrestling\",\"name\":\"Women Wrestling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93c-200d-2640-fe0f\",\"native\":\"🤼‍♀️\",\"x\":42,\"y\":32}],\"version\":4},\"water_polo\":{\"id\":\"water_polo\",\"name\":\"Water Polo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93d\",\"native\":\"🤽\",\"x\":42,\"y\":47},{\"unified\":\"1f93d-1f3fb\",\"native\":\"🤽🏻\",\"x\":42,\"y\":48},{\"unified\":\"1f93d-1f3fc\",\"native\":\"🤽🏼\",\"x\":42,\"y\":49},{\"unified\":\"1f93d-1f3fd\",\"native\":\"🤽🏽\",\"x\":42,\"y\":50},{\"unified\":\"1f93d-1f3fe\",\"native\":\"🤽🏾\",\"x\":42,\"y\":51},{\"unified\":\"1f93d-1f3ff\",\"native\":\"🤽🏿\",\"x\":42,\"y\":52}],\"version\":3},\"man-playing-water-polo\":{\"id\":\"man-playing-water-polo\",\"name\":\"Man Playing Water Polo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93d-200d-2642-fe0f\",\"native\":\"🤽‍♂️\",\"x\":42,\"y\":41},{\"unified\":\"1f93d-1f3fb-200d-2642-fe0f\",\"native\":\"🤽🏻‍♂️\",\"x\":42,\"y\":42},{\"unified\":\"1f93d-1f3fc-200d-2642-fe0f\",\"native\":\"🤽🏼‍♂️\",\"x\":42,\"y\":43},{\"unified\":\"1f93d-1f3fd-200d-2642-fe0f\",\"native\":\"🤽🏽‍♂️\",\"x\":42,\"y\":44},{\"unified\":\"1f93d-1f3fe-200d-2642-fe0f\",\"native\":\"🤽🏾‍♂️\",\"x\":42,\"y\":45},{\"unified\":\"1f93d-1f3ff-200d-2642-fe0f\",\"native\":\"🤽🏿‍♂️\",\"x\":42,\"y\":46}],\"version\":4},\"woman-playing-water-polo\":{\"id\":\"woman-playing-water-polo\",\"name\":\"Woman Playing Water Polo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93d-200d-2640-fe0f\",\"native\":\"🤽‍♀️\",\"x\":42,\"y\":35},{\"unified\":\"1f93d-1f3fb-200d-2640-fe0f\",\"native\":\"🤽🏻‍♀️\",\"x\":42,\"y\":36},{\"unified\":\"1f93d-1f3fc-200d-2640-fe0f\",\"native\":\"🤽🏼‍♀️\",\"x\":42,\"y\":37},{\"unified\":\"1f93d-1f3fd-200d-2640-fe0f\",\"native\":\"🤽🏽‍♀️\",\"x\":42,\"y\":38},{\"unified\":\"1f93d-1f3fe-200d-2640-fe0f\",\"native\":\"🤽🏾‍♀️\",\"x\":42,\"y\":39},{\"unified\":\"1f93d-1f3ff-200d-2640-fe0f\",\"native\":\"🤽🏿‍♀️\",\"x\":42,\"y\":40}],\"version\":4},\"handball\":{\"id\":\"handball\",\"name\":\"Handball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93e\",\"native\":\"🤾\",\"x\":43,\"y\":4},{\"unified\":\"1f93e-1f3fb\",\"native\":\"🤾🏻\",\"x\":43,\"y\":5},{\"unified\":\"1f93e-1f3fc\",\"native\":\"🤾🏼\",\"x\":43,\"y\":6},{\"unified\":\"1f93e-1f3fd\",\"native\":\"🤾🏽\",\"x\":43,\"y\":7},{\"unified\":\"1f93e-1f3fe\",\"native\":\"🤾🏾\",\"x\":43,\"y\":8},{\"unified\":\"1f93e-1f3ff\",\"native\":\"🤾🏿\",\"x\":43,\"y\":9}],\"version\":3},\"man-playing-handball\":{\"id\":\"man-playing-handball\",\"name\":\"Man Playing Handball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93e-200d-2642-fe0f\",\"native\":\"🤾‍♂️\",\"x\":42,\"y\":59},{\"unified\":\"1f93e-1f3fb-200d-2642-fe0f\",\"native\":\"🤾🏻‍♂️\",\"x\":42,\"y\":60},{\"unified\":\"1f93e-1f3fc-200d-2642-fe0f\",\"native\":\"🤾🏼‍♂️\",\"x\":43,\"y\":0},{\"unified\":\"1f93e-1f3fd-200d-2642-fe0f\",\"native\":\"🤾🏽‍♂️\",\"x\":43,\"y\":1},{\"unified\":\"1f93e-1f3fe-200d-2642-fe0f\",\"native\":\"🤾🏾‍♂️\",\"x\":43,\"y\":2},{\"unified\":\"1f93e-1f3ff-200d-2642-fe0f\",\"native\":\"🤾🏿‍♂️\",\"x\":43,\"y\":3}],\"version\":4},\"woman-playing-handball\":{\"id\":\"woman-playing-handball\",\"name\":\"Woman Playing Handball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f93e-200d-2640-fe0f\",\"native\":\"🤾‍♀️\",\"x\":42,\"y\":53},{\"unified\":\"1f93e-1f3fb-200d-2640-fe0f\",\"native\":\"🤾🏻‍♀️\",\"x\":42,\"y\":54},{\"unified\":\"1f93e-1f3fc-200d-2640-fe0f\",\"native\":\"🤾🏼‍♀️\",\"x\":42,\"y\":55},{\"unified\":\"1f93e-1f3fd-200d-2640-fe0f\",\"native\":\"🤾🏽‍♀️\",\"x\":42,\"y\":56},{\"unified\":\"1f93e-1f3fe-200d-2640-fe0f\",\"native\":\"🤾🏾‍♀️\",\"x\":42,\"y\":57},{\"unified\":\"1f93e-1f3ff-200d-2640-fe0f\",\"native\":\"🤾🏿‍♀️\",\"x\":42,\"y\":58}],\"version\":4},\"juggling\":{\"id\":\"juggling\",\"name\":\"Juggling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f939\",\"native\":\"🤹\",\"x\":42,\"y\":25},{\"unified\":\"1f939-1f3fb\",\"native\":\"🤹🏻\",\"x\":42,\"y\":26},{\"unified\":\"1f939-1f3fc\",\"native\":\"🤹🏼\",\"x\":42,\"y\":27},{\"unified\":\"1f939-1f3fd\",\"native\":\"🤹🏽\",\"x\":42,\"y\":28},{\"unified\":\"1f939-1f3fe\",\"native\":\"🤹🏾\",\"x\":42,\"y\":29},{\"unified\":\"1f939-1f3ff\",\"native\":\"🤹🏿\",\"x\":42,\"y\":30}],\"version\":3},\"man-juggling\":{\"id\":\"man-juggling\",\"name\":\"Man Juggling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f939-200d-2642-fe0f\",\"native\":\"🤹‍♂️\",\"x\":42,\"y\":19},{\"unified\":\"1f939-1f3fb-200d-2642-fe0f\",\"native\":\"🤹🏻‍♂️\",\"x\":42,\"y\":20},{\"unified\":\"1f939-1f3fc-200d-2642-fe0f\",\"native\":\"🤹🏼‍♂️\",\"x\":42,\"y\":21},{\"unified\":\"1f939-1f3fd-200d-2642-fe0f\",\"native\":\"🤹🏽‍♂️\",\"x\":42,\"y\":22},{\"unified\":\"1f939-1f3fe-200d-2642-fe0f\",\"native\":\"🤹🏾‍♂️\",\"x\":42,\"y\":23},{\"unified\":\"1f939-1f3ff-200d-2642-fe0f\",\"native\":\"🤹🏿‍♂️\",\"x\":42,\"y\":24}],\"version\":4},\"woman-juggling\":{\"id\":\"woman-juggling\",\"name\":\"Woman Juggling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f939-200d-2640-fe0f\",\"native\":\"🤹‍♀️\",\"x\":42,\"y\":13},{\"unified\":\"1f939-1f3fb-200d-2640-fe0f\",\"native\":\"🤹🏻‍♀️\",\"x\":42,\"y\":14},{\"unified\":\"1f939-1f3fc-200d-2640-fe0f\",\"native\":\"🤹🏼‍♀️\",\"x\":42,\"y\":15},{\"unified\":\"1f939-1f3fd-200d-2640-fe0f\",\"native\":\"🤹🏽‍♀️\",\"x\":42,\"y\":16},{\"unified\":\"1f939-1f3fe-200d-2640-fe0f\",\"native\":\"🤹🏾‍♀️\",\"x\":42,\"y\":17},{\"unified\":\"1f939-1f3ff-200d-2640-fe0f\",\"native\":\"🤹🏿‍♀️\",\"x\":42,\"y\":18}],\"version\":4},\"bath\":{\"id\":\"bath\",\"name\":\"Bath\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6c0\",\"native\":\"🛀\",\"x\":37,\"y\":42},{\"unified\":\"1f6c0-1f3fb\",\"native\":\"🛀🏻\",\"x\":37,\"y\":43},{\"unified\":\"1f6c0-1f3fc\",\"native\":\"🛀🏼\",\"x\":37,\"y\":44},{\"unified\":\"1f6c0-1f3fd\",\"native\":\"🛀🏽\",\"x\":37,\"y\":45},{\"unified\":\"1f6c0-1f3fe\",\"native\":\"🛀🏾\",\"x\":37,\"y\":46},{\"unified\":\"1f6c0-1f3ff\",\"native\":\"🛀🏿\",\"x\":37,\"y\":47}],\"version\":1},\"sleeping_accommodation\":{\"id\":\"sleeping_accommodation\",\"name\":\"Person in Bed\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6cc\",\"native\":\"🛌\",\"x\":37,\"y\":54},{\"unified\":\"1f6cc-1f3fb\",\"native\":\"🛌🏻\",\"x\":37,\"y\":55},{\"unified\":\"1f6cc-1f3fc\",\"native\":\"🛌🏼\",\"x\":37,\"y\":56},{\"unified\":\"1f6cc-1f3fd\",\"native\":\"🛌🏽\",\"x\":37,\"y\":57},{\"unified\":\"1f6cc-1f3fe\",\"native\":\"🛌🏾\",\"x\":37,\"y\":58},{\"unified\":\"1f6cc-1f3ff\",\"native\":\"🛌🏿\",\"x\":37,\"y\":59}],\"version\":1},\"two_women_holding_hands\":{\"id\":\"two_women_holding_hands\",\"name\":\"Women Holding Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46d\",\"native\":\"👭\",\"x\":22,\"y\":31},{\"unified\":\"1f46d-1f3fb\",\"native\":\"👭🏻\",\"x\":22,\"y\":32},{\"unified\":\"1f46d-1f3fc\",\"native\":\"👭🏼\",\"x\":22,\"y\":33},{\"unified\":\"1f46d-1f3fd\",\"native\":\"👭🏽\",\"x\":22,\"y\":34},{\"unified\":\"1f46d-1f3fe\",\"native\":\"👭🏾\",\"x\":22,\"y\":35},{\"unified\":\"1f46d-1f3ff\",\"native\":\"👭🏿\",\"x\":22,\"y\":36}],\"version\":1},\"man_and_woman_holding_hands\":{\"id\":\"man_and_woman_holding_hands\",\"name\":\"Man and Woman Holding Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46b\",\"native\":\"👫\",\"x\":21,\"y\":40},{\"unified\":\"1f46b-1f3fb\",\"native\":\"👫🏻\",\"x\":21,\"y\":41},{\"unified\":\"1f46b-1f3fc\",\"native\":\"👫🏼\",\"x\":21,\"y\":42},{\"unified\":\"1f46b-1f3fd\",\"native\":\"👫🏽\",\"x\":21,\"y\":43},{\"unified\":\"1f46b-1f3fe\",\"native\":\"👫🏾\",\"x\":21,\"y\":44},{\"unified\":\"1f46b-1f3ff\",\"native\":\"👫🏿\",\"x\":21,\"y\":45}],\"version\":1},\"two_men_holding_hands\":{\"id\":\"two_men_holding_hands\",\"name\":\"Men Holding Hands\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46c\",\"native\":\"👬\",\"x\":22,\"y\":5},{\"unified\":\"1f46c-1f3fb\",\"native\":\"👬🏻\",\"x\":22,\"y\":6},{\"unified\":\"1f46c-1f3fc\",\"native\":\"👬🏼\",\"x\":22,\"y\":7},{\"unified\":\"1f46c-1f3fd\",\"native\":\"👬🏽\",\"x\":22,\"y\":8},{\"unified\":\"1f46c-1f3fe\",\"native\":\"👬🏾\",\"x\":22,\"y\":9},{\"unified\":\"1f46c-1f3ff\",\"native\":\"👬🏿\",\"x\":22,\"y\":10}],\"version\":1},\"couplekiss\":{\"id\":\"couplekiss\",\"name\":\"Kiss\",\"keywords\":[],\"skins\":[{\"unified\":\"1f48f\",\"native\":\"💏\",\"x\":26,\"y\":41},{\"unified\":\"1f48f-1f3fb\",\"native\":\"💏🏻\",\"x\":26,\"y\":42},{\"unified\":\"1f48f-1f3fc\",\"native\":\"💏🏼\",\"x\":26,\"y\":43},{\"unified\":\"1f48f-1f3fd\",\"native\":\"💏🏽\",\"x\":26,\"y\":44},{\"unified\":\"1f48f-1f3fe\",\"native\":\"💏🏾\",\"x\":26,\"y\":45},{\"unified\":\"1f48f-1f3ff\",\"native\":\"💏🏿\",\"x\":26,\"y\":46}],\"version\":1},\"woman-kiss-man\":{\"id\":\"woman-kiss-man\",\"name\":\"Kiss: Woman, Man\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468\",\"native\":\"👩‍❤️‍💋‍👨\",\"x\":20,\"y\":42},{\"unified\":\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"native\":\"👩🏻‍❤️‍💋‍👨🏻\",\"x\":20,\"y\":43},{\"unified\":\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"native\":\"👩🏼‍❤️‍💋‍👨🏼\",\"x\":20,\"y\":49},{\"unified\":\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"native\":\"👩🏽‍❤️‍💋‍👨🏽\",\"x\":20,\"y\":55},{\"unified\":\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"native\":\"👩🏾‍❤️‍💋‍👨🏾\",\"x\":21,\"y\":0},{\"unified\":\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"native\":\"👩🏿‍❤️‍💋‍👨🏿\",\"x\":21,\"y\":6}],\"version\":2},\"man-kiss-man\":{\"id\":\"man-kiss-man\",\"name\":\"Kiss: Man, Man\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468\",\"native\":\"👨‍❤️‍💋‍👨\",\"x\":16,\"y\":48},{\"unified\":\"1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb\",\"native\":\"👨🏻‍❤️‍💋‍👨🏻\",\"x\":16,\"y\":49},{\"unified\":\"1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc\",\"native\":\"👨🏼‍❤️‍💋‍👨🏼\",\"x\":16,\"y\":55},{\"unified\":\"1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd\",\"native\":\"👨🏽‍❤️‍💋‍👨🏽\",\"x\":17,\"y\":0},{\"unified\":\"1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe\",\"native\":\"👨🏾‍❤️‍💋‍👨🏾\",\"x\":17,\"y\":6},{\"unified\":\"1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff\",\"native\":\"👨🏿‍❤️‍💋‍👨🏿\",\"x\":17,\"y\":12}],\"version\":2},\"woman-kiss-woman\":{\"id\":\"woman-kiss-woman\",\"name\":\"Kiss: Woman, Woman\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469\",\"native\":\"👩‍❤️‍💋‍👩\",\"x\":21,\"y\":7},{\"unified\":\"1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb\",\"native\":\"👩🏻‍❤️‍💋‍👩🏻\",\"x\":21,\"y\":8},{\"unified\":\"1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc\",\"native\":\"👩🏼‍❤️‍💋‍👩🏼\",\"x\":21,\"y\":14},{\"unified\":\"1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd\",\"native\":\"👩🏽‍❤️‍💋‍👩🏽\",\"x\":21,\"y\":20},{\"unified\":\"1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe\",\"native\":\"👩🏾‍❤️‍💋‍👩🏾\",\"x\":21,\"y\":26},{\"unified\":\"1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff\",\"native\":\"👩🏿‍❤️‍💋‍👩🏿\",\"x\":21,\"y\":32}],\"version\":2},\"couple_with_heart\":{\"id\":\"couple_with_heart\",\"name\":\"Couple with Heart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f491\",\"native\":\"💑\",\"x\":27,\"y\":7},{\"unified\":\"1f491-1f3fb\",\"native\":\"💑🏻\",\"x\":27,\"y\":8},{\"unified\":\"1f491-1f3fc\",\"native\":\"💑🏼\",\"x\":27,\"y\":9},{\"unified\":\"1f491-1f3fd\",\"native\":\"💑🏽\",\"x\":27,\"y\":10},{\"unified\":\"1f491-1f3fe\",\"native\":\"💑🏾\",\"x\":27,\"y\":11},{\"unified\":\"1f491-1f3ff\",\"native\":\"💑🏿\",\"x\":27,\"y\":12}],\"version\":1},\"woman-heart-man\":{\"id\":\"woman-heart-man\",\"name\":\"Couple with Heart: Woman, Man\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2764-fe0f-200d-1f468\",\"native\":\"👩‍❤️‍👨\",\"x\":19,\"y\":51},{\"unified\":\"1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb\",\"native\":\"👩🏻‍❤️‍👨🏻\",\"x\":19,\"y\":52},{\"unified\":\"1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc\",\"native\":\"👩🏼‍❤️‍👨🏼\",\"x\":19,\"y\":58},{\"unified\":\"1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd\",\"native\":\"👩🏽‍❤️‍👨🏽\",\"x\":20,\"y\":3},{\"unified\":\"1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe\",\"native\":\"👩🏾‍❤️‍👨🏾\",\"x\":20,\"y\":9},{\"unified\":\"1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff\",\"native\":\"👩🏿‍❤️‍👨🏿\",\"x\":20,\"y\":15}],\"version\":2},\"man-heart-man\":{\"id\":\"man-heart-man\",\"name\":\"Couple with Heart: Man, Man\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-2764-fe0f-200d-1f468\",\"native\":\"👨‍❤️‍👨\",\"x\":16,\"y\":22},{\"unified\":\"1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb\",\"native\":\"👨🏻‍❤️‍👨🏻\",\"x\":16,\"y\":23},{\"unified\":\"1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc\",\"native\":\"👨🏼‍❤️‍👨🏼\",\"x\":16,\"y\":29},{\"unified\":\"1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd\",\"native\":\"👨🏽‍❤️‍👨🏽\",\"x\":16,\"y\":35},{\"unified\":\"1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe\",\"native\":\"👨🏾‍❤️‍👨🏾\",\"x\":16,\"y\":41},{\"unified\":\"1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff\",\"native\":\"👨🏿‍❤️‍👨🏿\",\"x\":16,\"y\":47}],\"version\":2},\"woman-heart-woman\":{\"id\":\"woman-heart-woman\",\"name\":\"Couple with Heart: Woman, Woman\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-2764-fe0f-200d-1f469\",\"native\":\"👩‍❤️‍👩\",\"x\":20,\"y\":16},{\"unified\":\"1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb\",\"native\":\"👩🏻‍❤️‍👩🏻\",\"x\":20,\"y\":17},{\"unified\":\"1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc\",\"native\":\"👩🏼‍❤️‍👩🏼\",\"x\":20,\"y\":23},{\"unified\":\"1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd\",\"native\":\"👩🏽‍❤️‍👩🏽\",\"x\":20,\"y\":29},{\"unified\":\"1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe\",\"native\":\"👩🏾‍❤️‍👩🏾\",\"x\":20,\"y\":35},{\"unified\":\"1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff\",\"native\":\"👩🏿‍❤️‍👩🏿\",\"x\":20,\"y\":41}],\"version\":2},\"family\":{\"id\":\"family\",\"name\":\"Family\",\"keywords\":[],\"skins\":[{\"unified\":\"1f46a\",\"native\":\"👪\",\"x\":21,\"y\":39}],\"version\":1},\"man-woman-boy\":{\"id\":\"man-woman-boy\",\"name\":\"Family: Man, Woman, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f469-200d-1f466\",\"native\":\"👨‍👩‍👦\",\"x\":14,\"y\":43}],\"version\":2},\"man-woman-girl\":{\"id\":\"man-woman-girl\",\"name\":\"Family: Man, Woman, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f469-200d-1f467\",\"native\":\"👨‍👩‍👧\",\"x\":14,\"y\":45}],\"version\":2},\"man-woman-girl-boy\":{\"id\":\"man-woman-girl-boy\",\"name\":\"Family: Man, Woman, Girl, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f469-200d-1f467-200d-1f466\",\"native\":\"👨‍👩‍👧‍👦\",\"x\":14,\"y\":46}],\"version\":2},\"man-woman-boy-boy\":{\"id\":\"man-woman-boy-boy\",\"name\":\"Family: Man, Woman, Boy, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f469-200d-1f466-200d-1f466\",\"native\":\"👨‍👩‍👦‍👦\",\"x\":14,\"y\":44}],\"version\":2},\"man-woman-girl-girl\":{\"id\":\"man-woman-girl-girl\",\"name\":\"Family: Man, Woman, Girl, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f469-200d-1f467-200d-1f467\",\"native\":\"👨‍👩‍👧‍👧\",\"x\":14,\"y\":47}],\"version\":2},\"man-man-boy\":{\"id\":\"man-man-boy\",\"name\":\"Family: Man, Man, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f468-200d-1f466\",\"native\":\"👨‍👨‍👦\",\"x\":14,\"y\":38}],\"version\":2},\"man-man-girl\":{\"id\":\"man-man-girl\",\"name\":\"Family: Man, Man, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f468-200d-1f467\",\"native\":\"👨‍👨‍👧\",\"x\":14,\"y\":40}],\"version\":2},\"man-man-girl-boy\":{\"id\":\"man-man-girl-boy\",\"name\":\"Family: Man, Man, Girl, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f468-200d-1f467-200d-1f466\",\"native\":\"👨‍👨‍👧‍👦\",\"x\":14,\"y\":41}],\"version\":2},\"man-man-boy-boy\":{\"id\":\"man-man-boy-boy\",\"name\":\"Family: Man, Man, Boy, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f468-200d-1f466-200d-1f466\",\"native\":\"👨‍👨‍👦‍👦\",\"x\":14,\"y\":39}],\"version\":2},\"man-man-girl-girl\":{\"id\":\"man-man-girl-girl\",\"name\":\"Family: Man, Man, Girl, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f468-200d-1f467-200d-1f467\",\"native\":\"👨‍👨‍👧‍👧\",\"x\":14,\"y\":42}],\"version\":2},\"woman-woman-boy\":{\"id\":\"woman-woman-boy\",\"name\":\"Family: Woman, Woman, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f469-200d-1f466\",\"native\":\"👩‍👩‍👦\",\"x\":18,\"y\":11}],\"version\":2},\"woman-woman-girl\":{\"id\":\"woman-woman-girl\",\"name\":\"Family: Woman, Woman, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f469-200d-1f467\",\"native\":\"👩‍👩‍👧\",\"x\":18,\"y\":13}],\"version\":2},\"woman-woman-girl-boy\":{\"id\":\"woman-woman-girl-boy\",\"name\":\"Family: Woman, Woman, Girl, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f469-200d-1f467-200d-1f466\",\"native\":\"👩‍👩‍👧‍👦\",\"x\":18,\"y\":14}],\"version\":2},\"woman-woman-boy-boy\":{\"id\":\"woman-woman-boy-boy\",\"name\":\"Family: Woman, Woman, Boy, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f469-200d-1f466-200d-1f466\",\"native\":\"👩‍👩‍👦‍👦\",\"x\":18,\"y\":12}],\"version\":2},\"woman-woman-girl-girl\":{\"id\":\"woman-woman-girl-girl\",\"name\":\"Family: Woman, Woman, Girl, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f469-200d-1f467-200d-1f467\",\"native\":\"👩‍👩‍👧‍👧\",\"x\":18,\"y\":15}],\"version\":2},\"man-boy\":{\"id\":\"man-boy\",\"name\":\"Family: Man, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f466\",\"native\":\"👨‍👦\",\"x\":14,\"y\":34}],\"version\":4},\"man-boy-boy\":{\"id\":\"man-boy-boy\",\"name\":\"Family: Man, Boy, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f466-200d-1f466\",\"native\":\"👨‍👦‍👦\",\"x\":14,\"y\":33}],\"version\":4},\"man-girl\":{\"id\":\"man-girl\",\"name\":\"Family: Man, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f467\",\"native\":\"👨‍👧\",\"x\":14,\"y\":37}],\"version\":4},\"man-girl-boy\":{\"id\":\"man-girl-boy\",\"name\":\"Family: Man, Girl, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f467-200d-1f466\",\"native\":\"👨‍👧‍👦\",\"x\":14,\"y\":35}],\"version\":4},\"man-girl-girl\":{\"id\":\"man-girl-girl\",\"name\":\"Family: Man, Girl, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f468-200d-1f467-200d-1f467\",\"native\":\"👨‍👧‍👧\",\"x\":14,\"y\":36}],\"version\":4},\"woman-boy\":{\"id\":\"woman-boy\",\"name\":\"Family: Woman, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f466\",\"native\":\"👩‍👦\",\"x\":18,\"y\":7}],\"version\":4},\"woman-boy-boy\":{\"id\":\"woman-boy-boy\",\"name\":\"Family: Woman, Boy, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f466-200d-1f466\",\"native\":\"👩‍👦‍👦\",\"x\":18,\"y\":6}],\"version\":4},\"woman-girl\":{\"id\":\"woman-girl\",\"name\":\"Family: Woman, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f467\",\"native\":\"👩‍👧\",\"x\":18,\"y\":10}],\"version\":4},\"woman-girl-boy\":{\"id\":\"woman-girl-boy\",\"name\":\"Family: Woman, Girl, Boy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f467-200d-1f466\",\"native\":\"👩‍👧‍👦\",\"x\":18,\"y\":8}],\"version\":4},\"woman-girl-girl\":{\"id\":\"woman-girl-girl\",\"name\":\"Family: Woman, Girl, Girl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f469-200d-1f467-200d-1f467\",\"native\":\"👩‍👧‍👧\",\"x\":18,\"y\":9}],\"version\":4},\"speaking_head_in_silhouette\":{\"id\":\"speaking_head_in_silhouette\",\"name\":\"Speaking Head\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5e3-fe0f\",\"native\":\"🗣️\",\"x\":32,\"y\":10}],\"version\":1},\"bust_in_silhouette\":{\"id\":\"bust_in_silhouette\",\"name\":\"Bust in Silhouette\",\"keywords\":[],\"skins\":[{\"unified\":\"1f464\",\"native\":\"👤\",\"x\":13,\"y\":32}],\"version\":1},\"busts_in_silhouette\":{\"id\":\"busts_in_silhouette\",\"name\":\"Busts in Silhouette\",\"keywords\":[],\"skins\":[{\"unified\":\"1f465\",\"native\":\"👥\",\"x\":13,\"y\":33}],\"version\":1},\"footprints\":{\"id\":\"footprints\",\"name\":\"Footprints\",\"keywords\":[],\"skins\":[{\"unified\":\"1f463\",\"native\":\"👣\",\"x\":13,\"y\":31}],\"version\":1},\"monkey_face\":{\"id\":\"monkey_face\",\"name\":\"Monkey Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f435\",\"native\":\"🐵\",\"x\":11,\"y\":40}],\"version\":1},\"monkey\":{\"id\":\"monkey\",\"name\":\"Monkey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f412\",\"native\":\"🐒\",\"x\":11,\"y\":4}],\"version\":1},\"gorilla\":{\"id\":\"gorilla\",\"name\":\"Gorilla\",\"keywords\":[],\"skins\":[{\"unified\":\"1f98d\",\"native\":\"🦍\",\"x\":44,\"y\":31}],\"version\":3},\"dog\":{\"id\":\"dog\",\"name\":\"Dog Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f436\",\"native\":\"🐶\",\"x\":11,\"y\":41}],\"version\":1},\"dog2\":{\"id\":\"dog2\",\"name\":\"Dog\",\"keywords\":[],\"skins\":[{\"unified\":\"1f415\",\"native\":\"🐕\",\"x\":11,\"y\":8}],\"version\":1},\"poodle\":{\"id\":\"poodle\",\"name\":\"Poodle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f429\",\"native\":\"🐩\",\"x\":11,\"y\":28}],\"version\":1},\"wolf\":{\"id\":\"wolf\",\"name\":\"Wolf\",\"keywords\":[],\"skins\":[{\"unified\":\"1f43a\",\"native\":\"🐺\",\"x\":11,\"y\":45}],\"version\":1},\"fox_face\":{\"id\":\"fox_face\",\"name\":\"Fox\",\"keywords\":[],\"skins\":[{\"unified\":\"1f98a\",\"native\":\"🦊\",\"x\":44,\"y\":28}],\"version\":3},\"cat\":{\"id\":\"cat\",\"name\":\"Cat Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f431\",\"native\":\"🐱\",\"x\":11,\"y\":36}],\"version\":1},\"cat2\":{\"id\":\"cat2\",\"name\":\"Cat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f408\",\"native\":\"🐈\",\"x\":10,\"y\":55}],\"version\":1},\"lion_face\":{\"id\":\"lion_face\",\"name\":\"Lion\",\"keywords\":[],\"skins\":[{\"unified\":\"1f981\",\"native\":\"🦁\",\"x\":44,\"y\":19}],\"version\":1},\"tiger\":{\"id\":\"tiger\",\"name\":\"Tiger Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f42f\",\"native\":\"🐯\",\"x\":11,\"y\":34}],\"version\":1},\"tiger2\":{\"id\":\"tiger2\",\"name\":\"Tiger\",\"keywords\":[],\"skins\":[{\"unified\":\"1f405\",\"native\":\"🐅\",\"x\":10,\"y\":51}],\"version\":1},\"leopard\":{\"id\":\"leopard\",\"name\":\"Leopard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f406\",\"native\":\"🐆\",\"x\":10,\"y\":52}],\"version\":1},\"horse\":{\"id\":\"horse\",\"name\":\"Horse Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f434\",\"native\":\"🐴\",\"x\":11,\"y\":39}],\"version\":1},\"racehorse\":{\"id\":\"racehorse\",\"name\":\"Horse\",\"keywords\":[],\"skins\":[{\"unified\":\"1f40e\",\"native\":\"🐎\",\"x\":11,\"y\":0}],\"version\":1},\"unicorn_face\":{\"id\":\"unicorn_face\",\"name\":\"Unicorn\",\"keywords\":[],\"skins\":[{\"unified\":\"1f984\",\"native\":\"🦄\",\"x\":44,\"y\":22}],\"version\":1},\"deer\":{\"id\":\"deer\",\"name\":\"Deer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f98c\",\"native\":\"🦌\",\"x\":44,\"y\":30}],\"version\":3},\"cow\":{\"id\":\"cow\",\"name\":\"Cow Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f42e\",\"native\":\"🐮\",\"x\":11,\"y\":33}],\"version\":1},\"ox\":{\"id\":\"ox\",\"name\":\"Ox\",\"keywords\":[],\"skins\":[{\"unified\":\"1f402\",\"native\":\"🐂\",\"x\":10,\"y\":48}],\"version\":1},\"water_buffalo\":{\"id\":\"water_buffalo\",\"name\":\"Water Buffalo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f403\",\"native\":\"🐃\",\"x\":10,\"y\":49}],\"version\":1},\"cow2\":{\"id\":\"cow2\",\"name\":\"Cow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f404\",\"native\":\"🐄\",\"x\":10,\"y\":50}],\"version\":1},\"pig\":{\"id\":\"pig\",\"name\":\"Pig Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f437\",\"native\":\"🐷\",\"x\":11,\"y\":42}],\"version\":1},\"pig2\":{\"id\":\"pig2\",\"name\":\"Pig\",\"keywords\":[],\"skins\":[{\"unified\":\"1f416\",\"native\":\"🐖\",\"x\":11,\"y\":9}],\"version\":1},\"boar\":{\"id\":\"boar\",\"name\":\"Boar\",\"keywords\":[],\"skins\":[{\"unified\":\"1f417\",\"native\":\"🐗\",\"x\":11,\"y\":10}],\"version\":1},\"pig_nose\":{\"id\":\"pig_nose\",\"name\":\"Pig Nose\",\"keywords\":[],\"skins\":[{\"unified\":\"1f43d\",\"native\":\"🐽\",\"x\":11,\"y\":49}],\"version\":1},\"ram\":{\"id\":\"ram\",\"name\":\"Ram\",\"keywords\":[],\"skins\":[{\"unified\":\"1f40f\",\"native\":\"🐏\",\"x\":11,\"y\":1}],\"version\":1},\"sheep\":{\"id\":\"sheep\",\"name\":\"Ewe\",\"keywords\":[],\"skins\":[{\"unified\":\"1f411\",\"native\":\"🐑\",\"x\":11,\"y\":3}],\"version\":1},\"goat\":{\"id\":\"goat\",\"name\":\"Goat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f410\",\"native\":\"🐐\",\"x\":11,\"y\":2}],\"version\":1},\"dromedary_camel\":{\"id\":\"dromedary_camel\",\"name\":\"Camel\",\"keywords\":[],\"skins\":[{\"unified\":\"1f42a\",\"native\":\"🐪\",\"x\":11,\"y\":29}],\"version\":1},\"camel\":{\"id\":\"camel\",\"name\":\"Bactrian Camel\",\"keywords\":[],\"skins\":[{\"unified\":\"1f42b\",\"native\":\"🐫\",\"x\":11,\"y\":30}],\"version\":1},\"elephant\":{\"id\":\"elephant\",\"name\":\"Elephant\",\"keywords\":[],\"skins\":[{\"unified\":\"1f418\",\"native\":\"🐘\",\"x\":11,\"y\":11}],\"version\":1},\"rhinoceros\":{\"id\":\"rhinoceros\",\"name\":\"Rhinoceros\",\"keywords\":[],\"skins\":[{\"unified\":\"1f98f\",\"native\":\"🦏\",\"x\":44,\"y\":33}],\"version\":3},\"mouse\":{\"id\":\"mouse\",\"name\":\"Mouse Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f42d\",\"native\":\"🐭\",\"x\":11,\"y\":32}],\"version\":1},\"mouse2\":{\"id\":\"mouse2\",\"name\":\"Mouse\",\"keywords\":[],\"skins\":[{\"unified\":\"1f401\",\"native\":\"🐁\",\"x\":10,\"y\":47}],\"version\":1},\"rat\":{\"id\":\"rat\",\"name\":\"Rat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f400\",\"native\":\"🐀\",\"x\":10,\"y\":46}],\"version\":1},\"hamster\":{\"id\":\"hamster\",\"name\":\"Hamster\",\"keywords\":[],\"skins\":[{\"unified\":\"1f439\",\"native\":\"🐹\",\"x\":11,\"y\":44}],\"version\":1},\"rabbit\":{\"id\":\"rabbit\",\"name\":\"Rabbit Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f430\",\"native\":\"🐰\",\"x\":11,\"y\":35}],\"version\":1},\"rabbit2\":{\"id\":\"rabbit2\",\"name\":\"Rabbit\",\"keywords\":[],\"skins\":[{\"unified\":\"1f407\",\"native\":\"🐇\",\"x\":10,\"y\":53}],\"version\":1},\"chipmunk\":{\"id\":\"chipmunk\",\"name\":\"Chipmunk\",\"keywords\":[],\"skins\":[{\"unified\":\"1f43f-fe0f\",\"native\":\"🐿️\",\"x\":11,\"y\":51}],\"version\":1},\"bat\":{\"id\":\"bat\",\"name\":\"Bat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f987\",\"native\":\"🦇\",\"x\":44,\"y\":25}],\"version\":3},\"bear\":{\"id\":\"bear\",\"name\":\"Bear\",\"keywords\":[],\"skins\":[{\"unified\":\"1f43b\",\"native\":\"🐻\",\"x\":11,\"y\":47}],\"version\":1},\"koala\":{\"id\":\"koala\",\"name\":\"Koala\",\"keywords\":[],\"skins\":[{\"unified\":\"1f428\",\"native\":\"🐨\",\"x\":11,\"y\":27}],\"version\":1},\"panda_face\":{\"id\":\"panda_face\",\"name\":\"Panda\",\"keywords\":[],\"skins\":[{\"unified\":\"1f43c\",\"native\":\"🐼\",\"x\":11,\"y\":48}],\"version\":1},\"feet\":{\"id\":\"feet\",\"name\":\"Paw Prints\",\"keywords\":[],\"skins\":[{\"unified\":\"1f43e\",\"native\":\"🐾\",\"x\":11,\"y\":50}],\"version\":1},\"turkey\":{\"id\":\"turkey\",\"name\":\"Turkey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f983\",\"native\":\"🦃\",\"x\":44,\"y\":21}],\"version\":1},\"chicken\":{\"id\":\"chicken\",\"name\":\"Chicken\",\"keywords\":[],\"skins\":[{\"unified\":\"1f414\",\"native\":\"🐔\",\"x\":11,\"y\":6}],\"version\":1},\"rooster\":{\"id\":\"rooster\",\"name\":\"Rooster\",\"keywords\":[],\"skins\":[{\"unified\":\"1f413\",\"native\":\"🐓\",\"x\":11,\"y\":5}],\"version\":1},\"hatching_chick\":{\"id\":\"hatching_chick\",\"name\":\"Hatching Chick\",\"keywords\":[],\"skins\":[{\"unified\":\"1f423\",\"native\":\"🐣\",\"x\":11,\"y\":22}],\"version\":1},\"baby_chick\":{\"id\":\"baby_chick\",\"name\":\"Baby Chick\",\"keywords\":[],\"skins\":[{\"unified\":\"1f424\",\"native\":\"🐤\",\"x\":11,\"y\":23}],\"version\":1},\"hatched_chick\":{\"id\":\"hatched_chick\",\"name\":\"Front-Facing Baby Chick\",\"keywords\":[],\"skins\":[{\"unified\":\"1f425\",\"native\":\"🐥\",\"x\":11,\"y\":24}],\"version\":1},\"bird\":{\"id\":\"bird\",\"name\":\"Bird\",\"keywords\":[],\"skins\":[{\"unified\":\"1f426\",\"native\":\"🐦\",\"x\":11,\"y\":25}],\"version\":1},\"penguin\":{\"id\":\"penguin\",\"name\":\"Penguin\",\"keywords\":[],\"skins\":[{\"unified\":\"1f427\",\"native\":\"🐧\",\"x\":11,\"y\":26}],\"version\":1},\"dove_of_peace\":{\"id\":\"dove_of_peace\",\"name\":\"Dove\",\"keywords\":[],\"skins\":[{\"unified\":\"1f54a-fe0f\",\"native\":\"🕊️\",\"x\":30,\"y\":27}],\"version\":1},\"eagle\":{\"id\":\"eagle\",\"name\":\"Eagle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f985\",\"native\":\"🦅\",\"x\":44,\"y\":23}],\"version\":3},\"duck\":{\"id\":\"duck\",\"name\":\"Duck\",\"keywords\":[],\"skins\":[{\"unified\":\"1f986\",\"native\":\"🦆\",\"x\":44,\"y\":24}],\"version\":3},\"owl\":{\"id\":\"owl\",\"name\":\"Owl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f989\",\"native\":\"🦉\",\"x\":44,\"y\":27}],\"version\":3},\"frog\":{\"id\":\"frog\",\"name\":\"Frog\",\"keywords\":[],\"skins\":[{\"unified\":\"1f438\",\"native\":\"🐸\",\"x\":11,\"y\":43}],\"version\":1},\"crocodile\":{\"id\":\"crocodile\",\"name\":\"Crocodile\",\"keywords\":[],\"skins\":[{\"unified\":\"1f40a\",\"native\":\"🐊\",\"x\":10,\"y\":57}],\"version\":1},\"turtle\":{\"id\":\"turtle\",\"name\":\"Turtle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f422\",\"native\":\"🐢\",\"x\":11,\"y\":21}],\"version\":1},\"lizard\":{\"id\":\"lizard\",\"name\":\"Lizard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f98e\",\"native\":\"🦎\",\"x\":44,\"y\":32}],\"version\":3},\"snake\":{\"id\":\"snake\",\"name\":\"Snake\",\"keywords\":[],\"skins\":[{\"unified\":\"1f40d\",\"native\":\"🐍\",\"x\":10,\"y\":60}],\"version\":1},\"dragon_face\":{\"id\":\"dragon_face\",\"name\":\"Dragon Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f432\",\"native\":\"🐲\",\"x\":11,\"y\":37}],\"version\":1},\"dragon\":{\"id\":\"dragon\",\"name\":\"Dragon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f409\",\"native\":\"🐉\",\"x\":10,\"y\":56}],\"version\":1},\"whale\":{\"id\":\"whale\",\"name\":\"Spouting Whale\",\"keywords\":[],\"skins\":[{\"unified\":\"1f433\",\"native\":\"🐳\",\"x\":11,\"y\":38}],\"version\":1},\"whale2\":{\"id\":\"whale2\",\"name\":\"Whale\",\"keywords\":[],\"skins\":[{\"unified\":\"1f40b\",\"native\":\"🐋\",\"x\":10,\"y\":58}],\"version\":1},\"dolphin\":{\"id\":\"dolphin\",\"name\":\"Dolphin\",\"keywords\":[],\"skins\":[{\"unified\":\"1f42c\",\"native\":\"🐬\",\"x\":11,\"y\":31}],\"version\":1},\"fish\":{\"id\":\"fish\",\"name\":\"Fish\",\"keywords\":[],\"skins\":[{\"unified\":\"1f41f\",\"native\":\"🐟\",\"x\":11,\"y\":18}],\"version\":1},\"tropical_fish\":{\"id\":\"tropical_fish\",\"name\":\"Tropical Fish\",\"keywords\":[],\"skins\":[{\"unified\":\"1f420\",\"native\":\"🐠\",\"x\":11,\"y\":19}],\"version\":1},\"blowfish\":{\"id\":\"blowfish\",\"name\":\"Blowfish\",\"keywords\":[],\"skins\":[{\"unified\":\"1f421\",\"native\":\"🐡\",\"x\":11,\"y\":20}],\"version\":1},\"shark\":{\"id\":\"shark\",\"name\":\"Shark\",\"keywords\":[],\"skins\":[{\"unified\":\"1f988\",\"native\":\"🦈\",\"x\":44,\"y\":26}],\"version\":3},\"octopus\":{\"id\":\"octopus\",\"name\":\"Octopus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f419\",\"native\":\"🐙\",\"x\":11,\"y\":12}],\"version\":1},\"shell\":{\"id\":\"shell\",\"name\":\"Spiral Shell\",\"keywords\":[],\"skins\":[{\"unified\":\"1f41a\",\"native\":\"🐚\",\"x\":11,\"y\":13}],\"version\":1},\"snail\":{\"id\":\"snail\",\"name\":\"Snail\",\"keywords\":[],\"skins\":[{\"unified\":\"1f40c\",\"native\":\"🐌\",\"x\":10,\"y\":59}],\"version\":1},\"butterfly\":{\"id\":\"butterfly\",\"name\":\"Butterfly\",\"keywords\":[],\"skins\":[{\"unified\":\"1f98b\",\"native\":\"🦋\",\"x\":44,\"y\":29}],\"version\":3},\"bug\":{\"id\":\"bug\",\"name\":\"Bug\",\"keywords\":[],\"skins\":[{\"unified\":\"1f41b\",\"native\":\"🐛\",\"x\":11,\"y\":14}],\"version\":1},\"ant\":{\"id\":\"ant\",\"name\":\"Ant\",\"keywords\":[],\"skins\":[{\"unified\":\"1f41c\",\"native\":\"🐜\",\"x\":11,\"y\":15}],\"version\":1},\"bee\":{\"id\":\"bee\",\"name\":\"Honeybee\",\"keywords\":[],\"skins\":[{\"unified\":\"1f41d\",\"native\":\"🐝\",\"x\":11,\"y\":16}],\"version\":1},\"ladybug\":{\"id\":\"ladybug\",\"name\":\"Lady Beetle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f41e\",\"native\":\"🐞\",\"x\":11,\"y\":17}],\"version\":1},\"spider\":{\"id\":\"spider\",\"name\":\"Spider\",\"keywords\":[],\"skins\":[{\"unified\":\"1f577-fe0f\",\"native\":\"🕷️\",\"x\":31,\"y\":23}],\"version\":1},\"spider_web\":{\"id\":\"spider_web\",\"name\":\"Spider Web\",\"keywords\":[],\"skins\":[{\"unified\":\"1f578-fe0f\",\"native\":\"🕸️\",\"x\":31,\"y\":24}],\"version\":1},\"scorpion\":{\"id\":\"scorpion\",\"name\":\"Scorpion\",\"keywords\":[],\"skins\":[{\"unified\":\"1f982\",\"native\":\"🦂\",\"x\":44,\"y\":20}],\"version\":1},\"bouquet\":{\"id\":\"bouquet\",\"name\":\"Bouquet\",\"keywords\":[],\"skins\":[{\"unified\":\"1f490\",\"native\":\"💐\",\"x\":27,\"y\":6}],\"version\":1},\"cherry_blossom\":{\"id\":\"cherry_blossom\",\"name\":\"Cherry Blossom\",\"keywords\":[],\"skins\":[{\"unified\":\"1f338\",\"native\":\"🌸\",\"x\":5,\"y\":53}],\"version\":1},\"white_flower\":{\"id\":\"white_flower\",\"name\":\"White Flower\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ae\",\"native\":\"💮\",\"x\":28,\"y\":5}],\"version\":1},\"rosette\":{\"id\":\"rosette\",\"name\":\"Rosette\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f5-fe0f\",\"native\":\"🏵️\",\"x\":10,\"y\":36}],\"version\":1},\"rose\":{\"id\":\"rose\",\"name\":\"Rose\",\"keywords\":[],\"skins\":[{\"unified\":\"1f339\",\"native\":\"🌹\",\"x\":5,\"y\":54}],\"version\":1},\"wilted_flower\":{\"id\":\"wilted_flower\",\"name\":\"Wilted Flower\",\"keywords\":[],\"skins\":[{\"unified\":\"1f940\",\"native\":\"🥀\",\"x\":43,\"y\":11}],\"version\":3},\"hibiscus\":{\"id\":\"hibiscus\",\"name\":\"Hibiscus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f33a\",\"native\":\"🌺\",\"x\":5,\"y\":55}],\"version\":1},\"sunflower\":{\"id\":\"sunflower\",\"name\":\"Sunflower\",\"keywords\":[],\"skins\":[{\"unified\":\"1f33b\",\"native\":\"🌻\",\"x\":5,\"y\":56}],\"version\":1},\"blossom\":{\"id\":\"blossom\",\"name\":\"Blossom\",\"keywords\":[],\"skins\":[{\"unified\":\"1f33c\",\"native\":\"🌼\",\"x\":5,\"y\":57}],\"version\":1},\"tulip\":{\"id\":\"tulip\",\"name\":\"Tulip\",\"keywords\":[],\"skins\":[{\"unified\":\"1f337\",\"native\":\"🌷\",\"x\":5,\"y\":52}],\"version\":1},\"seedling\":{\"id\":\"seedling\",\"name\":\"Seedling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f331\",\"native\":\"🌱\",\"x\":5,\"y\":46}],\"version\":1},\"evergreen_tree\":{\"id\":\"evergreen_tree\",\"name\":\"Evergreen Tree\",\"keywords\":[],\"skins\":[{\"unified\":\"1f332\",\"native\":\"🌲\",\"x\":5,\"y\":47}],\"version\":1},\"deciduous_tree\":{\"id\":\"deciduous_tree\",\"name\":\"Deciduous Tree\",\"keywords\":[],\"skins\":[{\"unified\":\"1f333\",\"native\":\"🌳\",\"x\":5,\"y\":48}],\"version\":1},\"palm_tree\":{\"id\":\"palm_tree\",\"name\":\"Palm Tree\",\"keywords\":[],\"skins\":[{\"unified\":\"1f334\",\"native\":\"🌴\",\"x\":5,\"y\":49}],\"version\":1},\"cactus\":{\"id\":\"cactus\",\"name\":\"Cactus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f335\",\"native\":\"🌵\",\"x\":5,\"y\":50}],\"version\":1},\"ear_of_rice\":{\"id\":\"ear_of_rice\",\"name\":\"Ear of Rice\",\"keywords\":[],\"skins\":[{\"unified\":\"1f33e\",\"native\":\"🌾\",\"x\":5,\"y\":59}],\"version\":1},\"herb\":{\"id\":\"herb\",\"name\":\"Herb\",\"keywords\":[],\"skins\":[{\"unified\":\"1f33f\",\"native\":\"🌿\",\"x\":5,\"y\":60}],\"version\":1},\"shamrock\":{\"id\":\"shamrock\",\"name\":\"Shamrock\",\"keywords\":[],\"skins\":[{\"unified\":\"2618-fe0f\",\"native\":\"☘️\",\"x\":56,\"y\":49}],\"version\":1},\"four_leaf_clover\":{\"id\":\"four_leaf_clover\",\"name\":\"Four Leaf Clover\",\"keywords\":[],\"skins\":[{\"unified\":\"1f340\",\"native\":\"🍀\",\"x\":6,\"y\":0}],\"version\":1},\"maple_leaf\":{\"id\":\"maple_leaf\",\"name\":\"Maple Leaf\",\"keywords\":[],\"skins\":[{\"unified\":\"1f341\",\"native\":\"🍁\",\"x\":6,\"y\":1}],\"version\":1},\"fallen_leaf\":{\"id\":\"fallen_leaf\",\"name\":\"Fallen Leaf\",\"keywords\":[],\"skins\":[{\"unified\":\"1f342\",\"native\":\"🍂\",\"x\":6,\"y\":2}],\"version\":1},\"leaves\":{\"id\":\"leaves\",\"name\":\"Leaf Fluttering in Wind\",\"keywords\":[],\"skins\":[{\"unified\":\"1f343\",\"native\":\"🍃\",\"x\":6,\"y\":3}],\"version\":1},\"grapes\":{\"id\":\"grapes\",\"name\":\"Grapes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f347\",\"native\":\"🍇\",\"x\":6,\"y\":7}],\"version\":1},\"melon\":{\"id\":\"melon\",\"name\":\"Melon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f348\",\"native\":\"🍈\",\"x\":6,\"y\":8}],\"version\":1},\"watermelon\":{\"id\":\"watermelon\",\"name\":\"Watermelon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f349\",\"native\":\"🍉\",\"x\":6,\"y\":9}],\"version\":1},\"tangerine\":{\"id\":\"tangerine\",\"name\":\"Tangerine\",\"keywords\":[],\"skins\":[{\"unified\":\"1f34a\",\"native\":\"🍊\",\"x\":6,\"y\":10}],\"version\":1},\"lemon\":{\"id\":\"lemon\",\"name\":\"Lemon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f34b\",\"native\":\"🍋\",\"x\":6,\"y\":11}],\"version\":1},\"banana\":{\"id\":\"banana\",\"name\":\"Banana\",\"keywords\":[],\"skins\":[{\"unified\":\"1f34c\",\"native\":\"🍌\",\"x\":6,\"y\":12}],\"version\":1},\"pineapple\":{\"id\":\"pineapple\",\"name\":\"Pineapple\",\"keywords\":[],\"skins\":[{\"unified\":\"1f34d\",\"native\":\"🍍\",\"x\":6,\"y\":13}],\"version\":1},\"apple\":{\"id\":\"apple\",\"name\":\"Red Apple\",\"keywords\":[],\"skins\":[{\"unified\":\"1f34e\",\"native\":\"🍎\",\"x\":6,\"y\":14}],\"version\":1},\"green_apple\":{\"id\":\"green_apple\",\"name\":\"Green Apple\",\"keywords\":[],\"skins\":[{\"unified\":\"1f34f\",\"native\":\"🍏\",\"x\":6,\"y\":15}],\"version\":1},\"pear\":{\"id\":\"pear\",\"name\":\"Pear\",\"keywords\":[],\"skins\":[{\"unified\":\"1f350\",\"native\":\"🍐\",\"x\":6,\"y\":16}],\"version\":1},\"peach\":{\"id\":\"peach\",\"name\":\"Peach\",\"keywords\":[],\"skins\":[{\"unified\":\"1f351\",\"native\":\"🍑\",\"x\":6,\"y\":17}],\"version\":1},\"cherries\":{\"id\":\"cherries\",\"name\":\"Cherries\",\"keywords\":[],\"skins\":[{\"unified\":\"1f352\",\"native\":\"🍒\",\"x\":6,\"y\":18}],\"version\":1},\"strawberry\":{\"id\":\"strawberry\",\"name\":\"Strawberry\",\"keywords\":[],\"skins\":[{\"unified\":\"1f353\",\"native\":\"🍓\",\"x\":6,\"y\":19}],\"version\":1},\"kiwifruit\":{\"id\":\"kiwifruit\",\"name\":\"Kiwifruit\",\"keywords\":[],\"skins\":[{\"unified\":\"1f95d\",\"native\":\"🥝\",\"x\":43,\"y\":39}],\"version\":3},\"tomato\":{\"id\":\"tomato\",\"name\":\"Tomato\",\"keywords\":[],\"skins\":[{\"unified\":\"1f345\",\"native\":\"🍅\",\"x\":6,\"y\":5}],\"version\":1},\"avocado\":{\"id\":\"avocado\",\"name\":\"Avocado\",\"keywords\":[],\"skins\":[{\"unified\":\"1f951\",\"native\":\"🥑\",\"x\":43,\"y\":27}],\"version\":3},\"eggplant\":{\"id\":\"eggplant\",\"name\":\"Eggplant\",\"keywords\":[],\"skins\":[{\"unified\":\"1f346\",\"native\":\"🍆\",\"x\":6,\"y\":6}],\"version\":1},\"potato\":{\"id\":\"potato\",\"name\":\"Potato\",\"keywords\":[],\"skins\":[{\"unified\":\"1f954\",\"native\":\"🥔\",\"x\":43,\"y\":30}],\"version\":3},\"carrot\":{\"id\":\"carrot\",\"name\":\"Carrot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f955\",\"native\":\"🥕\",\"x\":43,\"y\":31}],\"version\":3},\"corn\":{\"id\":\"corn\",\"name\":\"Ear of Corn\",\"keywords\":[],\"skins\":[{\"unified\":\"1f33d\",\"native\":\"🌽\",\"x\":5,\"y\":58}],\"version\":1},\"hot_pepper\":{\"id\":\"hot_pepper\",\"name\":\"Hot Pepper\",\"keywords\":[],\"skins\":[{\"unified\":\"1f336-fe0f\",\"native\":\"🌶️\",\"x\":5,\"y\":51}],\"version\":1},\"cucumber\":{\"id\":\"cucumber\",\"name\":\"Cucumber\",\"keywords\":[],\"skins\":[{\"unified\":\"1f952\",\"native\":\"🥒\",\"x\":43,\"y\":28}],\"version\":3},\"mushroom\":{\"id\":\"mushroom\",\"name\":\"Mushroom\",\"keywords\":[],\"skins\":[{\"unified\":\"1f344\",\"native\":\"🍄\",\"x\":6,\"y\":4}],\"version\":1},\"peanuts\":{\"id\":\"peanuts\",\"name\":\"Peanuts\",\"keywords\":[],\"skins\":[{\"unified\":\"1f95c\",\"native\":\"🥜\",\"x\":43,\"y\":38}],\"version\":3},\"chestnut\":{\"id\":\"chestnut\",\"name\":\"Chestnut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f330\",\"native\":\"🌰\",\"x\":5,\"y\":45}],\"version\":1},\"bread\":{\"id\":\"bread\",\"name\":\"Bread\",\"keywords\":[],\"skins\":[{\"unified\":\"1f35e\",\"native\":\"🍞\",\"x\":6,\"y\":30}],\"version\":1},\"croissant\":{\"id\":\"croissant\",\"name\":\"Croissant\",\"keywords\":[],\"skins\":[{\"unified\":\"1f950\",\"native\":\"🥐\",\"x\":43,\"y\":26}],\"version\":3},\"baguette_bread\":{\"id\":\"baguette_bread\",\"name\":\"Baguette Bread\",\"keywords\":[],\"skins\":[{\"unified\":\"1f956\",\"native\":\"🥖\",\"x\":43,\"y\":32}],\"version\":3},\"pancakes\":{\"id\":\"pancakes\",\"name\":\"Pancakes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f95e\",\"native\":\"🥞\",\"x\":43,\"y\":40}],\"version\":3},\"cheese_wedge\":{\"id\":\"cheese_wedge\",\"name\":\"Cheese Wedge\",\"keywords\":[],\"skins\":[{\"unified\":\"1f9c0\",\"native\":\"🧀\",\"x\":46,\"y\":5}],\"version\":1},\"meat_on_bone\":{\"id\":\"meat_on_bone\",\"name\":\"Meat on Bone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f356\",\"native\":\"🍖\",\"x\":6,\"y\":22}],\"version\":1},\"poultry_leg\":{\"id\":\"poultry_leg\",\"name\":\"Poultry Leg\",\"keywords\":[],\"skins\":[{\"unified\":\"1f357\",\"native\":\"🍗\",\"x\":6,\"y\":23}],\"version\":1},\"bacon\":{\"id\":\"bacon\",\"name\":\"Bacon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f953\",\"native\":\"🥓\",\"x\":43,\"y\":29}],\"version\":3},\"hamburger\":{\"id\":\"hamburger\",\"name\":\"Hamburger\",\"keywords\":[],\"skins\":[{\"unified\":\"1f354\",\"native\":\"🍔\",\"x\":6,\"y\":20}],\"version\":1},\"fries\":{\"id\":\"fries\",\"name\":\"French Fries\",\"keywords\":[],\"skins\":[{\"unified\":\"1f35f\",\"native\":\"🍟\",\"x\":6,\"y\":31}],\"version\":1},\"pizza\":{\"id\":\"pizza\",\"name\":\"Pizza\",\"keywords\":[],\"skins\":[{\"unified\":\"1f355\",\"native\":\"🍕\",\"x\":6,\"y\":21}],\"version\":1},\"hotdog\":{\"id\":\"hotdog\",\"name\":\"Hot Dog\",\"keywords\":[],\"skins\":[{\"unified\":\"1f32d\",\"native\":\"🌭\",\"x\":5,\"y\":42}],\"version\":1},\"taco\":{\"id\":\"taco\",\"name\":\"Taco\",\"keywords\":[],\"skins\":[{\"unified\":\"1f32e\",\"native\":\"🌮\",\"x\":5,\"y\":43}],\"version\":1},\"burrito\":{\"id\":\"burrito\",\"name\":\"Burrito\",\"keywords\":[],\"skins\":[{\"unified\":\"1f32f\",\"native\":\"🌯\",\"x\":5,\"y\":44}],\"version\":1},\"stuffed_flatbread\":{\"id\":\"stuffed_flatbread\",\"name\":\"Stuffed Flatbread\",\"keywords\":[],\"skins\":[{\"unified\":\"1f959\",\"native\":\"🥙\",\"x\":43,\"y\":35}],\"version\":3},\"egg\":{\"id\":\"egg\",\"name\":\"Egg\",\"keywords\":[],\"skins\":[{\"unified\":\"1f95a\",\"native\":\"🥚\",\"x\":43,\"y\":36}],\"version\":3},\"fried_egg\":{\"id\":\"fried_egg\",\"name\":\"Cooking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f373\",\"native\":\"🍳\",\"x\":6,\"y\":51}],\"version\":1},\"shallow_pan_of_food\":{\"id\":\"shallow_pan_of_food\",\"name\":\"Shallow Pan of Food\",\"keywords\":[],\"skins\":[{\"unified\":\"1f958\",\"native\":\"🥘\",\"x\":43,\"y\":34}],\"version\":3},\"stew\":{\"id\":\"stew\",\"name\":\"Pot of Food\",\"keywords\":[],\"skins\":[{\"unified\":\"1f372\",\"native\":\"🍲\",\"x\":6,\"y\":50}],\"version\":1},\"green_salad\":{\"id\":\"green_salad\",\"name\":\"Green Salad\",\"keywords\":[],\"skins\":[{\"unified\":\"1f957\",\"native\":\"🥗\",\"x\":43,\"y\":33}],\"version\":3},\"popcorn\":{\"id\":\"popcorn\",\"name\":\"Popcorn\",\"keywords\":[],\"skins\":[{\"unified\":\"1f37f\",\"native\":\"🍿\",\"x\":7,\"y\":2}],\"version\":1},\"bento\":{\"id\":\"bento\",\"name\":\"Bento Box\",\"keywords\":[],\"skins\":[{\"unified\":\"1f371\",\"native\":\"🍱\",\"x\":6,\"y\":49}],\"version\":1},\"rice_cracker\":{\"id\":\"rice_cracker\",\"name\":\"Rice Cracker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f358\",\"native\":\"🍘\",\"x\":6,\"y\":24}],\"version\":1},\"rice_ball\":{\"id\":\"rice_ball\",\"name\":\"Rice Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f359\",\"native\":\"🍙\",\"x\":6,\"y\":25}],\"version\":1},\"rice\":{\"id\":\"rice\",\"name\":\"Cooked Rice\",\"keywords\":[],\"skins\":[{\"unified\":\"1f35a\",\"native\":\"🍚\",\"x\":6,\"y\":26}],\"version\":1},\"curry\":{\"id\":\"curry\",\"name\":\"Curry Rice\",\"keywords\":[],\"skins\":[{\"unified\":\"1f35b\",\"native\":\"🍛\",\"x\":6,\"y\":27}],\"version\":1},\"ramen\":{\"id\":\"ramen\",\"name\":\"Steaming Bowl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f35c\",\"native\":\"🍜\",\"x\":6,\"y\":28}],\"version\":1},\"spaghetti\":{\"id\":\"spaghetti\",\"name\":\"Spaghetti\",\"keywords\":[],\"skins\":[{\"unified\":\"1f35d\",\"native\":\"🍝\",\"x\":6,\"y\":29}],\"version\":1},\"sweet_potato\":{\"id\":\"sweet_potato\",\"name\":\"Roasted Sweet Potato\",\"keywords\":[],\"skins\":[{\"unified\":\"1f360\",\"native\":\"🍠\",\"x\":6,\"y\":32}],\"version\":1},\"oden\":{\"id\":\"oden\",\"name\":\"Oden\",\"keywords\":[],\"skins\":[{\"unified\":\"1f362\",\"native\":\"🍢\",\"x\":6,\"y\":34}],\"version\":1},\"sushi\":{\"id\":\"sushi\",\"name\":\"Sushi\",\"keywords\":[],\"skins\":[{\"unified\":\"1f363\",\"native\":\"🍣\",\"x\":6,\"y\":35}],\"version\":1},\"fried_shrimp\":{\"id\":\"fried_shrimp\",\"name\":\"Fried Shrimp\",\"keywords\":[],\"skins\":[{\"unified\":\"1f364\",\"native\":\"🍤\",\"x\":6,\"y\":36}],\"version\":1},\"fish_cake\":{\"id\":\"fish_cake\",\"name\":\"Fish Cake with Swirl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f365\",\"native\":\"🍥\",\"x\":6,\"y\":37}],\"version\":1},\"dango\":{\"id\":\"dango\",\"name\":\"Dango\",\"keywords\":[],\"skins\":[{\"unified\":\"1f361\",\"native\":\"🍡\",\"x\":6,\"y\":33}],\"version\":1},\"crab\":{\"id\":\"crab\",\"name\":\"Crab\",\"keywords\":[],\"skins\":[{\"unified\":\"1f980\",\"native\":\"🦀\",\"x\":44,\"y\":18}],\"version\":1},\"shrimp\":{\"id\":\"shrimp\",\"name\":\"Shrimp\",\"keywords\":[],\"skins\":[{\"unified\":\"1f990\",\"native\":\"🦐\",\"x\":44,\"y\":34}],\"version\":3},\"squid\":{\"id\":\"squid\",\"name\":\"Squid\",\"keywords\":[],\"skins\":[{\"unified\":\"1f991\",\"native\":\"🦑\",\"x\":44,\"y\":35}],\"version\":3},\"icecream\":{\"id\":\"icecream\",\"name\":\"Soft Ice Cream\",\"keywords\":[],\"skins\":[{\"unified\":\"1f366\",\"native\":\"🍦\",\"x\":6,\"y\":38}],\"version\":1},\"shaved_ice\":{\"id\":\"shaved_ice\",\"name\":\"Shaved Ice\",\"keywords\":[],\"skins\":[{\"unified\":\"1f367\",\"native\":\"🍧\",\"x\":6,\"y\":39}],\"version\":1},\"ice_cream\":{\"id\":\"ice_cream\",\"name\":\"Ice Cream\",\"keywords\":[],\"skins\":[{\"unified\":\"1f368\",\"native\":\"🍨\",\"x\":6,\"y\":40}],\"version\":1},\"doughnut\":{\"id\":\"doughnut\",\"name\":\"Doughnut\",\"keywords\":[],\"skins\":[{\"unified\":\"1f369\",\"native\":\"🍩\",\"x\":6,\"y\":41}],\"version\":1},\"cookie\":{\"id\":\"cookie\",\"name\":\"Cookie\",\"keywords\":[],\"skins\":[{\"unified\":\"1f36a\",\"native\":\"🍪\",\"x\":6,\"y\":42}],\"version\":1},\"birthday\":{\"id\":\"birthday\",\"name\":\"Birthday Cake\",\"keywords\":[],\"skins\":[{\"unified\":\"1f382\",\"native\":\"🎂\",\"x\":7,\"y\":5}],\"version\":1},\"cake\":{\"id\":\"cake\",\"name\":\"Shortcake\",\"keywords\":[],\"skins\":[{\"unified\":\"1f370\",\"native\":\"🍰\",\"x\":6,\"y\":48}],\"version\":1},\"chocolate_bar\":{\"id\":\"chocolate_bar\",\"name\":\"Chocolate Bar\",\"keywords\":[],\"skins\":[{\"unified\":\"1f36b\",\"native\":\"🍫\",\"x\":6,\"y\":43}],\"version\":1},\"candy\":{\"id\":\"candy\",\"name\":\"Candy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f36c\",\"native\":\"🍬\",\"x\":6,\"y\":44}],\"version\":1},\"lollipop\":{\"id\":\"lollipop\",\"name\":\"Lollipop\",\"keywords\":[],\"skins\":[{\"unified\":\"1f36d\",\"native\":\"🍭\",\"x\":6,\"y\":45}],\"version\":1},\"custard\":{\"id\":\"custard\",\"name\":\"Custard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f36e\",\"native\":\"🍮\",\"x\":6,\"y\":46}],\"version\":1},\"honey_pot\":{\"id\":\"honey_pot\",\"name\":\"Honey Pot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f36f\",\"native\":\"🍯\",\"x\":6,\"y\":47}],\"version\":1},\"baby_bottle\":{\"id\":\"baby_bottle\",\"name\":\"Baby Bottle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f37c\",\"native\":\"🍼\",\"x\":6,\"y\":60}],\"version\":1},\"glass_of_milk\":{\"id\":\"glass_of_milk\",\"name\":\"Glass of Milk\",\"keywords\":[],\"skins\":[{\"unified\":\"1f95b\",\"native\":\"🥛\",\"x\":43,\"y\":37}],\"version\":3},\"coffee\":{\"id\":\"coffee\",\"name\":\"Hot Beverage\",\"keywords\":[],\"skins\":[{\"unified\":\"2615\",\"native\":\"☕\",\"x\":56,\"y\":48}],\"version\":1},\"tea\":{\"id\":\"tea\",\"name\":\"Teacup Without Handle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f375\",\"native\":\"🍵\",\"x\":6,\"y\":53}],\"version\":1},\"sake\":{\"id\":\"sake\",\"name\":\"Sake\",\"keywords\":[],\"skins\":[{\"unified\":\"1f376\",\"native\":\"🍶\",\"x\":6,\"y\":54}],\"version\":1},\"champagne\":{\"id\":\"champagne\",\"name\":\"Bottle with Popping Cork\",\"keywords\":[],\"skins\":[{\"unified\":\"1f37e\",\"native\":\"🍾\",\"x\":7,\"y\":1}],\"version\":1},\"wine_glass\":{\"id\":\"wine_glass\",\"name\":\"Wine Glass\",\"keywords\":[],\"skins\":[{\"unified\":\"1f377\",\"native\":\"🍷\",\"x\":6,\"y\":55}],\"version\":1},\"cocktail\":{\"id\":\"cocktail\",\"name\":\"Cocktail Glass\",\"keywords\":[],\"skins\":[{\"unified\":\"1f378\",\"native\":\"🍸\",\"x\":6,\"y\":56}],\"version\":1},\"tropical_drink\":{\"id\":\"tropical_drink\",\"name\":\"Tropical Drink\",\"keywords\":[],\"skins\":[{\"unified\":\"1f379\",\"native\":\"🍹\",\"x\":6,\"y\":57}],\"version\":1},\"beer\":{\"id\":\"beer\",\"name\":\"Beer Mug\",\"keywords\":[],\"skins\":[{\"unified\":\"1f37a\",\"native\":\"🍺\",\"x\":6,\"y\":58}],\"version\":1},\"beers\":{\"id\":\"beers\",\"name\":\"Clinking Beer Mugs\",\"keywords\":[],\"skins\":[{\"unified\":\"1f37b\",\"native\":\"🍻\",\"x\":6,\"y\":59}],\"version\":1},\"clinking_glasses\":{\"id\":\"clinking_glasses\",\"name\":\"Clinking Glasses\",\"keywords\":[],\"skins\":[{\"unified\":\"1f942\",\"native\":\"🥂\",\"x\":43,\"y\":13}],\"version\":3},\"tumbler_glass\":{\"id\":\"tumbler_glass\",\"name\":\"Tumbler Glass\",\"keywords\":[],\"skins\":[{\"unified\":\"1f943\",\"native\":\"🥃\",\"x\":43,\"y\":14}],\"version\":3},\"knife_fork_plate\":{\"id\":\"knife_fork_plate\",\"name\":\"Fork and Knife with Plate\",\"keywords\":[],\"skins\":[{\"unified\":\"1f37d-fe0f\",\"native\":\"🍽️\",\"x\":7,\"y\":0}],\"version\":1},\"fork_and_knife\":{\"id\":\"fork_and_knife\",\"name\":\"Fork and Knife\",\"keywords\":[],\"skins\":[{\"unified\":\"1f374\",\"native\":\"🍴\",\"x\":6,\"y\":52}],\"version\":1},\"spoon\":{\"id\":\"spoon\",\"name\":\"Spoon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f944\",\"native\":\"🥄\",\"x\":43,\"y\":15}],\"version\":3},\"hocho\":{\"id\":\"hocho\",\"name\":\"Hocho\",\"keywords\":[],\"skins\":[{\"unified\":\"1f52a\",\"native\":\"🔪\",\"x\":30,\"y\":6}],\"version\":1},\"amphora\":{\"id\":\"amphora\",\"name\":\"Amphora\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3fa\",\"native\":\"🏺\",\"x\":10,\"y\":40}],\"version\":1},\"earth_africa\":{\"id\":\"earth_africa\",\"name\":\"Earth Globe Europe-Africa\",\"keywords\":[],\"skins\":[{\"unified\":\"1f30d\",\"native\":\"🌍\",\"x\":5,\"y\":12}],\"version\":1},\"earth_americas\":{\"id\":\"earth_americas\",\"name\":\"Earth Globe Americas\",\"keywords\":[],\"skins\":[{\"unified\":\"1f30e\",\"native\":\"🌎\",\"x\":5,\"y\":13}],\"version\":1},\"earth_asia\":{\"id\":\"earth_asia\",\"name\":\"Earth Globe Asia-Australia\",\"keywords\":[],\"skins\":[{\"unified\":\"1f30f\",\"native\":\"🌏\",\"x\":5,\"y\":14}],\"version\":1},\"globe_with_meridians\":{\"id\":\"globe_with_meridians\",\"name\":\"Globe with Meridians\",\"keywords\":[],\"skins\":[{\"unified\":\"1f310\",\"native\":\"🌐\",\"x\":5,\"y\":15}],\"version\":1},\"world_map\":{\"id\":\"world_map\",\"name\":\"World Map\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5fa-fe0f\",\"native\":\"🗺️\",\"x\":32,\"y\":14}],\"version\":1},\"japan\":{\"id\":\"japan\",\"name\":\"Map of Japan\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5fe\",\"native\":\"🗾\",\"x\":32,\"y\":18}],\"version\":1},\"snow_capped_mountain\":{\"id\":\"snow_capped_mountain\",\"name\":\"Snow-Capped Mountain\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d4-fe0f\",\"native\":\"🏔️\",\"x\":9,\"y\":60}],\"version\":1},\"mountain\":{\"id\":\"mountain\",\"name\":\"Mountain\",\"keywords\":[],\"skins\":[{\"unified\":\"26f0-fe0f\",\"native\":\"⛰️\",\"x\":57,\"y\":56}],\"version\":1},\"volcano\":{\"id\":\"volcano\",\"name\":\"Volcano\",\"keywords\":[],\"skins\":[{\"unified\":\"1f30b\",\"native\":\"🌋\",\"x\":5,\"y\":10}],\"version\":1},\"mount_fuji\":{\"id\":\"mount_fuji\",\"name\":\"Mount Fuji\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5fb\",\"native\":\"🗻\",\"x\":32,\"y\":15}],\"version\":1},\"camping\":{\"id\":\"camping\",\"name\":\"Camping\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d5-fe0f\",\"native\":\"🏕️\",\"x\":10,\"y\":0}],\"version\":1},\"beach_with_umbrella\":{\"id\":\"beach_with_umbrella\",\"name\":\"Beach with Umbrella\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d6-fe0f\",\"native\":\"🏖️\",\"x\":10,\"y\":1}],\"version\":1},\"desert\":{\"id\":\"desert\",\"name\":\"Desert\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3dc-fe0f\",\"native\":\"🏜️\",\"x\":10,\"y\":7}],\"version\":1},\"desert_island\":{\"id\":\"desert_island\",\"name\":\"Desert Island\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3dd-fe0f\",\"native\":\"🏝️\",\"x\":10,\"y\":8}],\"version\":1},\"national_park\":{\"id\":\"national_park\",\"name\":\"National Park\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3de-fe0f\",\"native\":\"🏞️\",\"x\":10,\"y\":9}],\"version\":1},\"stadium\":{\"id\":\"stadium\",\"name\":\"Stadium\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3df-fe0f\",\"native\":\"🏟️\",\"x\":10,\"y\":10}],\"version\":1},\"classical_building\":{\"id\":\"classical_building\",\"name\":\"Classical Building\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3db-fe0f\",\"native\":\"🏛️\",\"x\":10,\"y\":6}],\"version\":1},\"building_construction\":{\"id\":\"building_construction\",\"name\":\"Building Construction\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d7-fe0f\",\"native\":\"🏗️\",\"x\":10,\"y\":2}],\"version\":1},\"house_buildings\":{\"id\":\"house_buildings\",\"name\":\"Houses\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d8-fe0f\",\"native\":\"🏘️\",\"x\":10,\"y\":3}],\"version\":1},\"derelict_house_building\":{\"id\":\"derelict_house_building\",\"name\":\"Derelict House\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3da-fe0f\",\"native\":\"🏚️\",\"x\":10,\"y\":5}],\"version\":1},\"house\":{\"id\":\"house\",\"name\":\"House\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e0\",\"native\":\"🏠\",\"x\":10,\"y\":11}],\"version\":1},\"house_with_garden\":{\"id\":\"house_with_garden\",\"name\":\"House with Garden\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e1\",\"native\":\"🏡\",\"x\":10,\"y\":12}],\"version\":1},\"office\":{\"id\":\"office\",\"name\":\"Office Building\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e2\",\"native\":\"🏢\",\"x\":10,\"y\":13}],\"version\":1},\"post_office\":{\"id\":\"post_office\",\"name\":\"Japanese Post Office\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e3\",\"native\":\"🏣\",\"x\":10,\"y\":14}],\"version\":1},\"european_post_office\":{\"id\":\"european_post_office\",\"name\":\"Post Office\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e4\",\"native\":\"🏤\",\"x\":10,\"y\":15}],\"version\":1},\"hospital\":{\"id\":\"hospital\",\"name\":\"Hospital\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e5\",\"native\":\"🏥\",\"x\":10,\"y\":16}],\"version\":1},\"bank\":{\"id\":\"bank\",\"name\":\"Bank\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e6\",\"native\":\"🏦\",\"x\":10,\"y\":17}],\"version\":1},\"hotel\":{\"id\":\"hotel\",\"name\":\"Hotel\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e8\",\"native\":\"🏨\",\"x\":10,\"y\":19}],\"version\":1},\"love_hotel\":{\"id\":\"love_hotel\",\"name\":\"Love Hotel\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e9\",\"native\":\"🏩\",\"x\":10,\"y\":20}],\"version\":1},\"convenience_store\":{\"id\":\"convenience_store\",\"name\":\"Convenience Store\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ea\",\"native\":\"🏪\",\"x\":10,\"y\":21}],\"version\":1},\"school\":{\"id\":\"school\",\"name\":\"School\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3eb\",\"native\":\"🏫\",\"x\":10,\"y\":22}],\"version\":1},\"department_store\":{\"id\":\"department_store\",\"name\":\"Department Store\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ec\",\"native\":\"🏬\",\"x\":10,\"y\":23}],\"version\":1},\"factory\":{\"id\":\"factory\",\"name\":\"Factory\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ed\",\"native\":\"🏭\",\"x\":10,\"y\":24}],\"version\":1},\"japanese_castle\":{\"id\":\"japanese_castle\",\"name\":\"Japanese Castle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ef\",\"native\":\"🏯\",\"x\":10,\"y\":26}],\"version\":1},\"european_castle\":{\"id\":\"european_castle\",\"name\":\"Castle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f0\",\"native\":\"🏰\",\"x\":10,\"y\":27}],\"version\":1},\"wedding\":{\"id\":\"wedding\",\"name\":\"Wedding\",\"keywords\":[],\"skins\":[{\"unified\":\"1f492\",\"native\":\"💒\",\"x\":27,\"y\":33}],\"version\":1},\"tokyo_tower\":{\"id\":\"tokyo_tower\",\"name\":\"Tokyo Tower\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5fc\",\"native\":\"🗼\",\"x\":32,\"y\":16}],\"version\":1},\"statue_of_liberty\":{\"id\":\"statue_of_liberty\",\"name\":\"Statue of Liberty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5fd\",\"native\":\"🗽\",\"x\":32,\"y\":17}],\"version\":1},\"church\":{\"id\":\"church\",\"name\":\"Church\",\"keywords\":[],\"skins\":[{\"unified\":\"26ea\",\"native\":\"⛪\",\"x\":57,\"y\":55}],\"version\":1},\"mosque\":{\"id\":\"mosque\",\"name\":\"Mosque\",\"keywords\":[],\"skins\":[{\"unified\":\"1f54c\",\"native\":\"🕌\",\"x\":30,\"y\":29}],\"version\":1},\"synagogue\":{\"id\":\"synagogue\",\"name\":\"Synagogue\",\"keywords\":[],\"skins\":[{\"unified\":\"1f54d\",\"native\":\"🕍\",\"x\":30,\"y\":30}],\"version\":1},\"shinto_shrine\":{\"id\":\"shinto_shrine\",\"name\":\"Shinto Shrine\",\"keywords\":[],\"skins\":[{\"unified\":\"26e9-fe0f\",\"native\":\"⛩️\",\"x\":57,\"y\":54}],\"version\":1},\"kaaba\":{\"id\":\"kaaba\",\"name\":\"Kaaba\",\"keywords\":[],\"skins\":[{\"unified\":\"1f54b\",\"native\":\"🕋\",\"x\":30,\"y\":28}],\"version\":1},\"fountain\":{\"id\":\"fountain\",\"name\":\"Fountain\",\"keywords\":[],\"skins\":[{\"unified\":\"26f2\",\"native\":\"⛲\",\"x\":57,\"y\":58}],\"version\":1},\"tent\":{\"id\":\"tent\",\"name\":\"Tent\",\"keywords\":[],\"skins\":[{\"unified\":\"26fa\",\"native\":\"⛺\",\"x\":58,\"y\":21}],\"version\":1},\"foggy\":{\"id\":\"foggy\",\"name\":\"Foggy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f301\",\"native\":\"🌁\",\"x\":5,\"y\":0}],\"version\":1},\"night_with_stars\":{\"id\":\"night_with_stars\",\"name\":\"Night with Stars\",\"keywords\":[],\"skins\":[{\"unified\":\"1f303\",\"native\":\"🌃\",\"x\":5,\"y\":2}],\"version\":1},\"cityscape\":{\"id\":\"cityscape\",\"name\":\"Cityscape\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d9-fe0f\",\"native\":\"🏙️\",\"x\":10,\"y\":4}],\"version\":1},\"sunrise_over_mountains\":{\"id\":\"sunrise_over_mountains\",\"name\":\"Sunrise over Mountains\",\"keywords\":[],\"skins\":[{\"unified\":\"1f304\",\"native\":\"🌄\",\"x\":5,\"y\":3}],\"version\":1},\"sunrise\":{\"id\":\"sunrise\",\"name\":\"Sunrise\",\"keywords\":[],\"skins\":[{\"unified\":\"1f305\",\"native\":\"🌅\",\"x\":5,\"y\":4}],\"version\":1},\"city_sunset\":{\"id\":\"city_sunset\",\"name\":\"Cityscape at Dusk\",\"keywords\":[],\"skins\":[{\"unified\":\"1f306\",\"native\":\"🌆\",\"x\":5,\"y\":5}],\"version\":1},\"city_sunrise\":{\"id\":\"city_sunrise\",\"name\":\"Sunset\",\"keywords\":[],\"skins\":[{\"unified\":\"1f307\",\"native\":\"🌇\",\"x\":5,\"y\":6}],\"version\":1},\"bridge_at_night\":{\"id\":\"bridge_at_night\",\"name\":\"Bridge at Night\",\"keywords\":[],\"skins\":[{\"unified\":\"1f309\",\"native\":\"🌉\",\"x\":5,\"y\":8}],\"version\":1},\"hotsprings\":{\"id\":\"hotsprings\",\"name\":\"Hot Springs\",\"keywords\":[],\"skins\":[{\"unified\":\"2668-fe0f\",\"native\":\"♨️\",\"x\":57,\"y\":24}],\"version\":1},\"carousel_horse\":{\"id\":\"carousel_horse\",\"name\":\"Carousel Horse\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a0\",\"native\":\"🎠\",\"x\":7,\"y\":35}],\"version\":1},\"ferris_wheel\":{\"id\":\"ferris_wheel\",\"name\":\"Ferris Wheel\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a1\",\"native\":\"🎡\",\"x\":7,\"y\":36}],\"version\":1},\"roller_coaster\":{\"id\":\"roller_coaster\",\"name\":\"Roller Coaster\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a2\",\"native\":\"🎢\",\"x\":7,\"y\":37}],\"version\":1},\"barber\":{\"id\":\"barber\",\"name\":\"Barber Pole\",\"keywords\":[],\"skins\":[{\"unified\":\"1f488\",\"native\":\"💈\",\"x\":26,\"y\":34}],\"version\":1},\"circus_tent\":{\"id\":\"circus_tent\",\"name\":\"Circus Tent\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3aa\",\"native\":\"🎪\",\"x\":7,\"y\":45}],\"version\":1},\"steam_locomotive\":{\"id\":\"steam_locomotive\",\"name\":\"Locomotive\",\"keywords\":[],\"skins\":[{\"unified\":\"1f682\",\"native\":\"🚂\",\"x\":35,\"y\":34}],\"version\":1},\"railway_car\":{\"id\":\"railway_car\",\"name\":\"Railway Car\",\"keywords\":[],\"skins\":[{\"unified\":\"1f683\",\"native\":\"🚃\",\"x\":35,\"y\":35}],\"version\":1},\"bullettrain_side\":{\"id\":\"bullettrain_side\",\"name\":\"High-Speed Train\",\"keywords\":[],\"skins\":[{\"unified\":\"1f684\",\"native\":\"🚄\",\"x\":35,\"y\":36}],\"version\":1},\"bullettrain_front\":{\"id\":\"bullettrain_front\",\"name\":\"Bullet Train\",\"keywords\":[],\"skins\":[{\"unified\":\"1f685\",\"native\":\"🚅\",\"x\":35,\"y\":37}],\"version\":1},\"train2\":{\"id\":\"train2\",\"name\":\"Train\",\"keywords\":[],\"skins\":[{\"unified\":\"1f686\",\"native\":\"🚆\",\"x\":35,\"y\":38}],\"version\":1},\"metro\":{\"id\":\"metro\",\"name\":\"Metro\",\"keywords\":[],\"skins\":[{\"unified\":\"1f687\",\"native\":\"🚇\",\"x\":35,\"y\":39}],\"version\":1},\"light_rail\":{\"id\":\"light_rail\",\"name\":\"Light Rail\",\"keywords\":[],\"skins\":[{\"unified\":\"1f688\",\"native\":\"🚈\",\"x\":35,\"y\":40}],\"version\":1},\"station\":{\"id\":\"station\",\"name\":\"Station\",\"keywords\":[],\"skins\":[{\"unified\":\"1f689\",\"native\":\"🚉\",\"x\":35,\"y\":41}],\"version\":1},\"tram\":{\"id\":\"tram\",\"name\":\"Tram\",\"keywords\":[],\"skins\":[{\"unified\":\"1f68a\",\"native\":\"🚊\",\"x\":35,\"y\":42}],\"version\":1},\"monorail\":{\"id\":\"monorail\",\"name\":\"Monorail\",\"keywords\":[],\"skins\":[{\"unified\":\"1f69d\",\"native\":\"🚝\",\"x\":36,\"y\":0}],\"version\":1},\"mountain_railway\":{\"id\":\"mountain_railway\",\"name\":\"Mountain Railway\",\"keywords\":[],\"skins\":[{\"unified\":\"1f69e\",\"native\":\"🚞\",\"x\":36,\"y\":1}],\"version\":1},\"train\":{\"id\":\"train\",\"name\":\"Tram Car\",\"keywords\":[],\"skins\":[{\"unified\":\"1f68b\",\"native\":\"🚋\",\"x\":35,\"y\":43}],\"version\":1},\"bus\":{\"id\":\"bus\",\"name\":\"Bus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f68c\",\"native\":\"🚌\",\"x\":35,\"y\":44}],\"version\":1},\"oncoming_bus\":{\"id\":\"oncoming_bus\",\"name\":\"Oncoming Bus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f68d\",\"native\":\"🚍\",\"x\":35,\"y\":45}],\"version\":1},\"trolleybus\":{\"id\":\"trolleybus\",\"name\":\"Trolleybus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f68e\",\"native\":\"🚎\",\"x\":35,\"y\":46}],\"version\":1},\"minibus\":{\"id\":\"minibus\",\"name\":\"Minibus\",\"keywords\":[],\"skins\":[{\"unified\":\"1f690\",\"native\":\"🚐\",\"x\":35,\"y\":48}],\"version\":1},\"ambulance\":{\"id\":\"ambulance\",\"name\":\"Ambulance\",\"keywords\":[],\"skins\":[{\"unified\":\"1f691\",\"native\":\"🚑\",\"x\":35,\"y\":49}],\"version\":1},\"fire_engine\":{\"id\":\"fire_engine\",\"name\":\"Fire Engine\",\"keywords\":[],\"skins\":[{\"unified\":\"1f692\",\"native\":\"🚒\",\"x\":35,\"y\":50}],\"version\":1},\"police_car\":{\"id\":\"police_car\",\"name\":\"Police Car\",\"keywords\":[],\"skins\":[{\"unified\":\"1f693\",\"native\":\"🚓\",\"x\":35,\"y\":51}],\"version\":1},\"oncoming_police_car\":{\"id\":\"oncoming_police_car\",\"name\":\"Oncoming Police Car\",\"keywords\":[],\"skins\":[{\"unified\":\"1f694\",\"native\":\"🚔\",\"x\":35,\"y\":52}],\"version\":1},\"taxi\":{\"id\":\"taxi\",\"name\":\"Taxi\",\"keywords\":[],\"skins\":[{\"unified\":\"1f695\",\"native\":\"🚕\",\"x\":35,\"y\":53}],\"version\":1},\"oncoming_taxi\":{\"id\":\"oncoming_taxi\",\"name\":\"Oncoming Taxi\",\"keywords\":[],\"skins\":[{\"unified\":\"1f696\",\"native\":\"🚖\",\"x\":35,\"y\":54}],\"version\":1},\"car\":{\"id\":\"car\",\"name\":\"Automobile\",\"keywords\":[],\"skins\":[{\"unified\":\"1f697\",\"native\":\"🚗\",\"x\":35,\"y\":55}],\"version\":1},\"oncoming_automobile\":{\"id\":\"oncoming_automobile\",\"name\":\"Oncoming Automobile\",\"keywords\":[],\"skins\":[{\"unified\":\"1f698\",\"native\":\"🚘\",\"x\":35,\"y\":56}],\"version\":1},\"blue_car\":{\"id\":\"blue_car\",\"name\":\"Recreational Vehicle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f699\",\"native\":\"🚙\",\"x\":35,\"y\":57}],\"version\":1},\"truck\":{\"id\":\"truck\",\"name\":\"Delivery Truck\",\"keywords\":[],\"skins\":[{\"unified\":\"1f69a\",\"native\":\"🚚\",\"x\":35,\"y\":58}],\"version\":1},\"articulated_lorry\":{\"id\":\"articulated_lorry\",\"name\":\"Articulated Lorry\",\"keywords\":[],\"skins\":[{\"unified\":\"1f69b\",\"native\":\"🚛\",\"x\":35,\"y\":59}],\"version\":1},\"tractor\":{\"id\":\"tractor\",\"name\":\"Tractor\",\"keywords\":[],\"skins\":[{\"unified\":\"1f69c\",\"native\":\"🚜\",\"x\":35,\"y\":60}],\"version\":1},\"racing_car\":{\"id\":\"racing_car\",\"name\":\"Racing Car\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ce-fe0f\",\"native\":\"🏎️\",\"x\":9,\"y\":54}],\"version\":1},\"racing_motorcycle\":{\"id\":\"racing_motorcycle\",\"name\":\"Motorcycle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cd-fe0f\",\"native\":\"🏍️\",\"x\":9,\"y\":53}],\"version\":1},\"motor_scooter\":{\"id\":\"motor_scooter\",\"name\":\"Motor Scooter\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6f5\",\"native\":\"🛵\",\"x\":38,\"y\":23}],\"version\":3},\"bike\":{\"id\":\"bike\",\"name\":\"Bicycle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b2\",\"native\":\"🚲\",\"x\":36,\"y\":38}],\"version\":1},\"scooter\":{\"id\":\"scooter\",\"name\":\"Scooter\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6f4\",\"native\":\"🛴\",\"x\":38,\"y\":22}],\"version\":3},\"busstop\":{\"id\":\"busstop\",\"name\":\"Bus Stop\",\"keywords\":[],\"skins\":[{\"unified\":\"1f68f\",\"native\":\"🚏\",\"x\":35,\"y\":47}],\"version\":1},\"motorway\":{\"id\":\"motorway\",\"name\":\"Motorway\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e3-fe0f\",\"native\":\"🛣️\",\"x\":38,\"y\":14}],\"version\":1},\"railway_track\":{\"id\":\"railway_track\",\"name\":\"Railway Track\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e4-fe0f\",\"native\":\"🛤️\",\"x\":38,\"y\":15}],\"version\":1},\"oil_drum\":{\"id\":\"oil_drum\",\"name\":\"Oil Drum\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e2-fe0f\",\"native\":\"🛢️\",\"x\":38,\"y\":13}],\"version\":1},\"fuelpump\":{\"id\":\"fuelpump\",\"name\":\"Fuel Pump\",\"keywords\":[],\"skins\":[{\"unified\":\"26fd\",\"native\":\"⛽\",\"x\":58,\"y\":22}],\"version\":1},\"rotating_light\":{\"id\":\"rotating_light\",\"name\":\"Police Car Light\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a8\",\"native\":\"🚨\",\"x\":36,\"y\":28}],\"version\":1},\"traffic_light\":{\"id\":\"traffic_light\",\"name\":\"Horizontal Traffic Light\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a5\",\"native\":\"🚥\",\"x\":36,\"y\":25}],\"version\":1},\"vertical_traffic_light\":{\"id\":\"vertical_traffic_light\",\"name\":\"Vertical Traffic Light\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a6\",\"native\":\"🚦\",\"x\":36,\"y\":26}],\"version\":1},\"octagonal_sign\":{\"id\":\"octagonal_sign\",\"name\":\"Stop Sign\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6d1\",\"native\":\"🛑\",\"x\":38,\"y\":3}],\"version\":3},\"construction\":{\"id\":\"construction\",\"name\":\"Construction\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a7\",\"native\":\"🚧\",\"x\":36,\"y\":27}],\"version\":1},\"anchor\":{\"id\":\"anchor\",\"name\":\"Anchor\",\"keywords\":[],\"skins\":[{\"unified\":\"2693\",\"native\":\"⚓\",\"x\":57,\"y\":29}],\"version\":1},\"boat\":{\"id\":\"boat\",\"name\":\"Sailboat\",\"keywords\":[],\"skins\":[{\"unified\":\"26f5\",\"native\":\"⛵\",\"x\":58,\"y\":0}],\"version\":1},\"canoe\":{\"id\":\"canoe\",\"name\":\"Canoe\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6f6\",\"native\":\"🛶\",\"x\":38,\"y\":24}],\"version\":3},\"speedboat\":{\"id\":\"speedboat\",\"name\":\"Speedboat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a4\",\"native\":\"🚤\",\"x\":36,\"y\":24}],\"version\":1},\"passenger_ship\":{\"id\":\"passenger_ship\",\"name\":\"Passenger Ship\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6f3-fe0f\",\"native\":\"🛳️\",\"x\":38,\"y\":21}],\"version\":1},\"ferry\":{\"id\":\"ferry\",\"name\":\"Ferry\",\"keywords\":[],\"skins\":[{\"unified\":\"26f4-fe0f\",\"native\":\"⛴️\",\"x\":57,\"y\":60}],\"version\":1},\"motor_boat\":{\"id\":\"motor_boat\",\"name\":\"Motor Boat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e5-fe0f\",\"native\":\"🛥️\",\"x\":38,\"y\":16}],\"version\":1},\"ship\":{\"id\":\"ship\",\"name\":\"Ship\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a2\",\"native\":\"🚢\",\"x\":36,\"y\":5}],\"version\":1},\"airplane\":{\"id\":\"airplane\",\"name\":\"Airplane\",\"keywords\":[],\"skins\":[{\"unified\":\"2708-fe0f\",\"native\":\"✈️\",\"x\":58,\"y\":25}],\"version\":1},\"small_airplane\":{\"id\":\"small_airplane\",\"name\":\"Small Airplane\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e9-fe0f\",\"native\":\"🛩️\",\"x\":38,\"y\":17}],\"version\":1},\"airplane_departure\":{\"id\":\"airplane_departure\",\"name\":\"Airplane Departure\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6eb\",\"native\":\"🛫\",\"x\":38,\"y\":18}],\"version\":1},\"airplane_arriving\":{\"id\":\"airplane_arriving\",\"name\":\"Airplane Arrival\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ec\",\"native\":\"🛬\",\"x\":38,\"y\":19}],\"version\":1},\"seat\":{\"id\":\"seat\",\"name\":\"Seat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ba\",\"native\":\"💺\",\"x\":28,\"y\":17}],\"version\":1},\"helicopter\":{\"id\":\"helicopter\",\"name\":\"Helicopter\",\"keywords\":[],\"skins\":[{\"unified\":\"1f681\",\"native\":\"🚁\",\"x\":35,\"y\":33}],\"version\":1},\"suspension_railway\":{\"id\":\"suspension_railway\",\"name\":\"Suspension Railway\",\"keywords\":[],\"skins\":[{\"unified\":\"1f69f\",\"native\":\"🚟\",\"x\":36,\"y\":2}],\"version\":1},\"mountain_cableway\":{\"id\":\"mountain_cableway\",\"name\":\"Mountain Cableway\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a0\",\"native\":\"🚠\",\"x\":36,\"y\":3}],\"version\":1},\"aerial_tramway\":{\"id\":\"aerial_tramway\",\"name\":\"Aerial Tramway\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a1\",\"native\":\"🚡\",\"x\":36,\"y\":4}],\"version\":1},\"satellite\":{\"id\":\"satellite\",\"name\":\"Satellite\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6f0-fe0f\",\"native\":\"🛰️\",\"x\":38,\"y\":20}],\"version\":1},\"rocket\":{\"id\":\"rocket\",\"name\":\"Rocket\",\"keywords\":[],\"skins\":[{\"unified\":\"1f680\",\"native\":\"🚀\",\"x\":35,\"y\":32}],\"version\":1},\"bellhop_bell\":{\"id\":\"bellhop_bell\",\"name\":\"Bellhop Bell\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ce-fe0f\",\"native\":\"🛎️\",\"x\":38,\"y\":0}],\"version\":1},\"hourglass\":{\"id\":\"hourglass\",\"name\":\"Hourglass\",\"keywords\":[],\"skins\":[{\"unified\":\"231b\",\"native\":\"⌛\",\"x\":56,\"y\":14}],\"version\":1},\"hourglass_flowing_sand\":{\"id\":\"hourglass_flowing_sand\",\"name\":\"Hourglass Not Done\",\"keywords\":[],\"skins\":[{\"unified\":\"23f3\",\"native\":\"⏳\",\"x\":56,\"y\":27}],\"version\":1},\"watch\":{\"id\":\"watch\",\"name\":\"Watch\",\"keywords\":[],\"skins\":[{\"unified\":\"231a\",\"native\":\"⌚\",\"x\":56,\"y\":13}],\"version\":1},\"alarm_clock\":{\"id\":\"alarm_clock\",\"name\":\"Alarm Clock\",\"keywords\":[],\"skins\":[{\"unified\":\"23f0\",\"native\":\"⏰\",\"x\":56,\"y\":24}],\"version\":1},\"stopwatch\":{\"id\":\"stopwatch\",\"name\":\"Stopwatch\",\"keywords\":[],\"skins\":[{\"unified\":\"23f1-fe0f\",\"native\":\"⏱️\",\"x\":56,\"y\":25}],\"version\":1},\"timer_clock\":{\"id\":\"timer_clock\",\"name\":\"Timer Clock\",\"keywords\":[],\"skins\":[{\"unified\":\"23f2-fe0f\",\"native\":\"⏲️\",\"x\":56,\"y\":26}],\"version\":1},\"mantelpiece_clock\":{\"id\":\"mantelpiece_clock\",\"name\":\"Mantelpiece Clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f570-fe0f\",\"native\":\"🕰️\",\"x\":30,\"y\":57}],\"version\":1},\"clock12\":{\"id\":\"clock12\",\"name\":\"Twelve O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f55b\",\"native\":\"🕛\",\"x\":30,\"y\":43}],\"version\":1},\"clock1230\":{\"id\":\"clock1230\",\"name\":\"Twelve-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f567\",\"native\":\"🕧\",\"x\":30,\"y\":55}],\"version\":1},\"clock1\":{\"id\":\"clock1\",\"name\":\"One O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f550\",\"native\":\"🕐\",\"x\":30,\"y\":32}],\"version\":1},\"clock130\":{\"id\":\"clock130\",\"name\":\"One-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f55c\",\"native\":\"🕜\",\"x\":30,\"y\":44}],\"version\":1},\"clock2\":{\"id\":\"clock2\",\"name\":\"Two O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f551\",\"native\":\"🕑\",\"x\":30,\"y\":33}],\"version\":1},\"clock230\":{\"id\":\"clock230\",\"name\":\"Two-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f55d\",\"native\":\"🕝\",\"x\":30,\"y\":45}],\"version\":1},\"clock3\":{\"id\":\"clock3\",\"name\":\"Three O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f552\",\"native\":\"🕒\",\"x\":30,\"y\":34}],\"version\":1},\"clock330\":{\"id\":\"clock330\",\"name\":\"Three-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f55e\",\"native\":\"🕞\",\"x\":30,\"y\":46}],\"version\":1},\"clock4\":{\"id\":\"clock4\",\"name\":\"Four O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f553\",\"native\":\"🕓\",\"x\":30,\"y\":35}],\"version\":1},\"clock430\":{\"id\":\"clock430\",\"name\":\"Four-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f55f\",\"native\":\"🕟\",\"x\":30,\"y\":47}],\"version\":1},\"clock5\":{\"id\":\"clock5\",\"name\":\"Five O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f554\",\"native\":\"🕔\",\"x\":30,\"y\":36}],\"version\":1},\"clock530\":{\"id\":\"clock530\",\"name\":\"Five-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f560\",\"native\":\"🕠\",\"x\":30,\"y\":48}],\"version\":1},\"clock6\":{\"id\":\"clock6\",\"name\":\"Six O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f555\",\"native\":\"🕕\",\"x\":30,\"y\":37}],\"version\":1},\"clock630\":{\"id\":\"clock630\",\"name\":\"Six-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f561\",\"native\":\"🕡\",\"x\":30,\"y\":49}],\"version\":1},\"clock7\":{\"id\":\"clock7\",\"name\":\"Seven O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f556\",\"native\":\"🕖\",\"x\":30,\"y\":38}],\"version\":1},\"clock730\":{\"id\":\"clock730\",\"name\":\"Seven-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f562\",\"native\":\"🕢\",\"x\":30,\"y\":50}],\"version\":1},\"clock8\":{\"id\":\"clock8\",\"name\":\"Eight O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f557\",\"native\":\"🕗\",\"x\":30,\"y\":39}],\"version\":1},\"clock830\":{\"id\":\"clock830\",\"name\":\"Eight-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f563\",\"native\":\"🕣\",\"x\":30,\"y\":51}],\"version\":1},\"clock9\":{\"id\":\"clock9\",\"name\":\"Nine O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f558\",\"native\":\"🕘\",\"x\":30,\"y\":40}],\"version\":1},\"clock930\":{\"id\":\"clock930\",\"name\":\"Nine-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f564\",\"native\":\"🕤\",\"x\":30,\"y\":52}],\"version\":1},\"clock10\":{\"id\":\"clock10\",\"name\":\"Ten O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f559\",\"native\":\"🕙\",\"x\":30,\"y\":41}],\"version\":1},\"clock1030\":{\"id\":\"clock1030\",\"name\":\"Ten-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f565\",\"native\":\"🕥\",\"x\":30,\"y\":53}],\"version\":1},\"clock11\":{\"id\":\"clock11\",\"name\":\"Eleven O’clock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f55a\",\"native\":\"🕚\",\"x\":30,\"y\":42}],\"version\":1},\"clock1130\":{\"id\":\"clock1130\",\"name\":\"Eleven-Thirty\",\"keywords\":[],\"skins\":[{\"unified\":\"1f566\",\"native\":\"🕦\",\"x\":30,\"y\":54}],\"version\":1},\"new_moon\":{\"id\":\"new_moon\",\"name\":\"New Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f311\",\"native\":\"🌑\",\"x\":5,\"y\":16}],\"version\":1},\"waxing_crescent_moon\":{\"id\":\"waxing_crescent_moon\",\"name\":\"Waxing Crescent Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f312\",\"native\":\"🌒\",\"x\":5,\"y\":17}],\"version\":1},\"first_quarter_moon\":{\"id\":\"first_quarter_moon\",\"name\":\"First Quarter Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f313\",\"native\":\"🌓\",\"x\":5,\"y\":18}],\"version\":1},\"moon\":{\"id\":\"moon\",\"name\":\"Waxing Gibbous Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f314\",\"native\":\"🌔\",\"x\":5,\"y\":19}],\"version\":1},\"full_moon\":{\"id\":\"full_moon\",\"name\":\"Full Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f315\",\"native\":\"🌕\",\"x\":5,\"y\":20}],\"version\":1},\"waning_gibbous_moon\":{\"id\":\"waning_gibbous_moon\",\"name\":\"Waning Gibbous Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f316\",\"native\":\"🌖\",\"x\":5,\"y\":21}],\"version\":1},\"last_quarter_moon\":{\"id\":\"last_quarter_moon\",\"name\":\"Last Quarter Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f317\",\"native\":\"🌗\",\"x\":5,\"y\":22}],\"version\":1},\"waning_crescent_moon\":{\"id\":\"waning_crescent_moon\",\"name\":\"Waning Crescent Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f318\",\"native\":\"🌘\",\"x\":5,\"y\":23}],\"version\":1},\"crescent_moon\":{\"id\":\"crescent_moon\",\"name\":\"Crescent Moon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f319\",\"native\":\"🌙\",\"x\":5,\"y\":24}],\"version\":1},\"new_moon_with_face\":{\"id\":\"new_moon_with_face\",\"name\":\"New Moon Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f31a\",\"native\":\"🌚\",\"x\":5,\"y\":25}],\"version\":1},\"first_quarter_moon_with_face\":{\"id\":\"first_quarter_moon_with_face\",\"name\":\"First Quarter Moon Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f31b\",\"native\":\"🌛\",\"x\":5,\"y\":26}],\"version\":1},\"last_quarter_moon_with_face\":{\"id\":\"last_quarter_moon_with_face\",\"name\":\"Last Quarter Moon Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f31c\",\"native\":\"🌜\",\"x\":5,\"y\":27}],\"version\":1},\"thermometer\":{\"id\":\"thermometer\",\"name\":\"Thermometer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f321-fe0f\",\"native\":\"🌡️\",\"x\":5,\"y\":32}],\"version\":1},\"sunny\":{\"id\":\"sunny\",\"name\":\"Sun\",\"keywords\":[],\"skins\":[{\"unified\":\"2600-fe0f\",\"native\":\"☀️\",\"x\":56,\"y\":40}],\"version\":1},\"full_moon_with_face\":{\"id\":\"full_moon_with_face\",\"name\":\"Full Moon Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f31d\",\"native\":\"🌝\",\"x\":5,\"y\":28}],\"version\":1},\"sun_with_face\":{\"id\":\"sun_with_face\",\"name\":\"Sun with Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f31e\",\"native\":\"🌞\",\"x\":5,\"y\":29}],\"version\":1},\"star\":{\"id\":\"star\",\"name\":\"Star\",\"keywords\":[],\"skins\":[{\"unified\":\"2b50\",\"native\":\"⭐\",\"x\":59,\"y\":24}],\"version\":1},\"star2\":{\"id\":\"star2\",\"name\":\"Glowing Star\",\"keywords\":[],\"skins\":[{\"unified\":\"1f31f\",\"native\":\"🌟\",\"x\":5,\"y\":30}],\"version\":1},\"stars\":{\"id\":\"stars\",\"name\":\"Shooting Star\",\"keywords\":[],\"skins\":[{\"unified\":\"1f320\",\"native\":\"🌠\",\"x\":5,\"y\":31}],\"version\":1},\"milky_way\":{\"id\":\"milky_way\",\"name\":\"Milky Way\",\"keywords\":[],\"skins\":[{\"unified\":\"1f30c\",\"native\":\"🌌\",\"x\":5,\"y\":11}],\"version\":1},\"cloud\":{\"id\":\"cloud\",\"name\":\"Cloud\",\"keywords\":[],\"skins\":[{\"unified\":\"2601-fe0f\",\"native\":\"☁️\",\"x\":56,\"y\":41}],\"version\":1},\"partly_sunny\":{\"id\":\"partly_sunny\",\"name\":\"Sun Behind Cloud\",\"keywords\":[],\"skins\":[{\"unified\":\"26c5\",\"native\":\"⛅\",\"x\":57,\"y\":47}],\"version\":1},\"thunder_cloud_and_rain\":{\"id\":\"thunder_cloud_and_rain\",\"name\":\"Cloud with Lightning and Rain\",\"keywords\":[],\"skins\":[{\"unified\":\"26c8-fe0f\",\"native\":\"⛈️\",\"x\":57,\"y\":48}],\"version\":1},\"mostly_sunny\":{\"id\":\"mostly_sunny\",\"name\":\"Sun Behind Small Cloud\",\"keywords\":[],\"skins\":[{\"unified\":\"1f324-fe0f\",\"native\":\"🌤️\",\"x\":5,\"y\":33}],\"version\":1},\"barely_sunny\":{\"id\":\"barely_sunny\",\"name\":\"Sun Behind Large Cloud\",\"keywords\":[],\"skins\":[{\"unified\":\"1f325-fe0f\",\"native\":\"🌥️\",\"x\":5,\"y\":34}],\"version\":1},\"partly_sunny_rain\":{\"id\":\"partly_sunny_rain\",\"name\":\"Sun Behind Rain Cloud\",\"keywords\":[],\"skins\":[{\"unified\":\"1f326-fe0f\",\"native\":\"🌦️\",\"x\":5,\"y\":35}],\"version\":1},\"rain_cloud\":{\"id\":\"rain_cloud\",\"name\":\"Cloud with Rain\",\"keywords\":[],\"skins\":[{\"unified\":\"1f327-fe0f\",\"native\":\"🌧️\",\"x\":5,\"y\":36}],\"version\":1},\"snow_cloud\":{\"id\":\"snow_cloud\",\"name\":\"Cloud with Snow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f328-fe0f\",\"native\":\"🌨️\",\"x\":5,\"y\":37}],\"version\":1},\"lightning\":{\"id\":\"lightning\",\"name\":\"Cloud with Lightning\",\"keywords\":[],\"skins\":[{\"unified\":\"1f329-fe0f\",\"native\":\"🌩️\",\"x\":5,\"y\":38}],\"version\":1},\"tornado\":{\"id\":\"tornado\",\"name\":\"Tornado\",\"keywords\":[],\"skins\":[{\"unified\":\"1f32a-fe0f\",\"native\":\"🌪️\",\"x\":5,\"y\":39}],\"version\":1},\"fog\":{\"id\":\"fog\",\"name\":\"Fog\",\"keywords\":[],\"skins\":[{\"unified\":\"1f32b-fe0f\",\"native\":\"🌫️\",\"x\":5,\"y\":40}],\"version\":1},\"wind_blowing_face\":{\"id\":\"wind_blowing_face\",\"name\":\"Wind Face\",\"keywords\":[],\"skins\":[{\"unified\":\"1f32c-fe0f\",\"native\":\"🌬️\",\"x\":5,\"y\":41}],\"version\":1},\"cyclone\":{\"id\":\"cyclone\",\"name\":\"Cyclone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f300\",\"native\":\"🌀\",\"x\":4,\"y\":60}],\"version\":1},\"rainbow\":{\"id\":\"rainbow\",\"name\":\"Rainbow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f308\",\"native\":\"🌈\",\"x\":5,\"y\":7}],\"version\":1},\"closed_umbrella\":{\"id\":\"closed_umbrella\",\"name\":\"Closed Umbrella\",\"keywords\":[],\"skins\":[{\"unified\":\"1f302\",\"native\":\"🌂\",\"x\":5,\"y\":1}],\"version\":1},\"umbrella\":{\"id\":\"umbrella\",\"name\":\"Umbrella\",\"keywords\":[],\"skins\":[{\"unified\":\"2602-fe0f\",\"native\":\"☂️\",\"x\":56,\"y\":42}],\"version\":1},\"umbrella_with_rain_drops\":{\"id\":\"umbrella_with_rain_drops\",\"name\":\"Umbrella with Rain Drops\",\"keywords\":[],\"skins\":[{\"unified\":\"2614\",\"native\":\"☔\",\"x\":56,\"y\":47}],\"version\":1},\"umbrella_on_ground\":{\"id\":\"umbrella_on_ground\",\"name\":\"Umbrella on Ground\",\"keywords\":[],\"skins\":[{\"unified\":\"26f1-fe0f\",\"native\":\"⛱️\",\"x\":57,\"y\":57}],\"version\":1},\"zap\":{\"id\":\"zap\",\"name\":\"High Voltage\",\"keywords\":[],\"skins\":[{\"unified\":\"26a1\",\"native\":\"⚡\",\"x\":57,\"y\":38}],\"version\":1},\"snowflake\":{\"id\":\"snowflake\",\"name\":\"Snowflake\",\"keywords\":[],\"skins\":[{\"unified\":\"2744-fe0f\",\"native\":\"❄️\",\"x\":58,\"y\":60}],\"version\":1},\"snowman\":{\"id\":\"snowman\",\"name\":\"Snowman\",\"keywords\":[],\"skins\":[{\"unified\":\"2603-fe0f\",\"native\":\"☃️\",\"x\":56,\"y\":43}],\"version\":1},\"snowman_without_snow\":{\"id\":\"snowman_without_snow\",\"name\":\"Snowman Without Snow\",\"keywords\":[],\"skins\":[{\"unified\":\"26c4\",\"native\":\"⛄\",\"x\":57,\"y\":46}],\"version\":1},\"comet\":{\"id\":\"comet\",\"name\":\"Comet\",\"keywords\":[],\"skins\":[{\"unified\":\"2604-fe0f\",\"native\":\"☄️\",\"x\":56,\"y\":44}],\"version\":1},\"fire\":{\"id\":\"fire\",\"name\":\"Fire\",\"keywords\":[],\"skins\":[{\"unified\":\"1f525\",\"native\":\"🔥\",\"x\":30,\"y\":1}],\"version\":1},\"droplet\":{\"id\":\"droplet\",\"name\":\"Droplet\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a7\",\"native\":\"💧\",\"x\":27,\"y\":54}],\"version\":1},\"ocean\":{\"id\":\"ocean\",\"name\":\"Water Wave\",\"keywords\":[],\"skins\":[{\"unified\":\"1f30a\",\"native\":\"🌊\",\"x\":5,\"y\":9}],\"version\":1},\"jack_o_lantern\":{\"id\":\"jack_o_lantern\",\"name\":\"Jack-O-Lantern\",\"keywords\":[],\"skins\":[{\"unified\":\"1f383\",\"native\":\"🎃\",\"x\":7,\"y\":6}],\"version\":1},\"christmas_tree\":{\"id\":\"christmas_tree\",\"name\":\"Christmas Tree\",\"keywords\":[],\"skins\":[{\"unified\":\"1f384\",\"native\":\"🎄\",\"x\":7,\"y\":7}],\"version\":1},\"fireworks\":{\"id\":\"fireworks\",\"name\":\"Fireworks\",\"keywords\":[],\"skins\":[{\"unified\":\"1f386\",\"native\":\"🎆\",\"x\":7,\"y\":14}],\"version\":1},\"sparkler\":{\"id\":\"sparkler\",\"name\":\"Sparkler\",\"keywords\":[],\"skins\":[{\"unified\":\"1f387\",\"native\":\"🎇\",\"x\":7,\"y\":15}],\"version\":1},\"sparkles\":{\"id\":\"sparkles\",\"name\":\"Sparkles\",\"keywords\":[],\"skins\":[{\"unified\":\"2728\",\"native\":\"✨\",\"x\":58,\"y\":57}],\"version\":1},\"balloon\":{\"id\":\"balloon\",\"name\":\"Balloon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f388\",\"native\":\"🎈\",\"x\":7,\"y\":16}],\"version\":1},\"tada\":{\"id\":\"tada\",\"name\":\"Party Popper\",\"keywords\":[],\"skins\":[{\"unified\":\"1f389\",\"native\":\"🎉\",\"x\":7,\"y\":17}],\"version\":1},\"confetti_ball\":{\"id\":\"confetti_ball\",\"name\":\"Confetti Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f38a\",\"native\":\"🎊\",\"x\":7,\"y\":18}],\"version\":1},\"tanabata_tree\":{\"id\":\"tanabata_tree\",\"name\":\"Tanabata Tree\",\"keywords\":[],\"skins\":[{\"unified\":\"1f38b\",\"native\":\"🎋\",\"x\":7,\"y\":19}],\"version\":1},\"bamboo\":{\"id\":\"bamboo\",\"name\":\"Pine Decoration\",\"keywords\":[],\"skins\":[{\"unified\":\"1f38d\",\"native\":\"🎍\",\"x\":7,\"y\":21}],\"version\":1},\"dolls\":{\"id\":\"dolls\",\"name\":\"Japanese Dolls\",\"keywords\":[],\"skins\":[{\"unified\":\"1f38e\",\"native\":\"🎎\",\"x\":7,\"y\":22}],\"version\":1},\"flags\":{\"id\":\"flags\",\"name\":\"Carp Streamer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f38f\",\"native\":\"🎏\",\"x\":7,\"y\":23}],\"version\":1},\"wind_chime\":{\"id\":\"wind_chime\",\"name\":\"Wind Chime\",\"keywords\":[],\"skins\":[{\"unified\":\"1f390\",\"native\":\"🎐\",\"x\":7,\"y\":24}],\"version\":1},\"rice_scene\":{\"id\":\"rice_scene\",\"name\":\"Moon Viewing Ceremony\",\"keywords\":[],\"skins\":[{\"unified\":\"1f391\",\"native\":\"🎑\",\"x\":7,\"y\":25}],\"version\":1},\"ribbon\":{\"id\":\"ribbon\",\"name\":\"Ribbon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f380\",\"native\":\"🎀\",\"x\":7,\"y\":3}],\"version\":1},\"gift\":{\"id\":\"gift\",\"name\":\"Wrapped Gift\",\"keywords\":[],\"skins\":[{\"unified\":\"1f381\",\"native\":\"🎁\",\"x\":7,\"y\":4}],\"version\":1},\"reminder_ribbon\":{\"id\":\"reminder_ribbon\",\"name\":\"Reminder Ribbon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f397-fe0f\",\"native\":\"🎗️\",\"x\":7,\"y\":29}],\"version\":1},\"admission_tickets\":{\"id\":\"admission_tickets\",\"name\":\"Admission Tickets\",\"keywords\":[],\"skins\":[{\"unified\":\"1f39f-fe0f\",\"native\":\"🎟️\",\"x\":7,\"y\":34}],\"version\":1},\"ticket\":{\"id\":\"ticket\",\"name\":\"Ticket\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ab\",\"native\":\"🎫\",\"x\":7,\"y\":46}],\"version\":1},\"medal\":{\"id\":\"medal\",\"name\":\"Military Medal\",\"keywords\":[],\"skins\":[{\"unified\":\"1f396-fe0f\",\"native\":\"🎖️\",\"x\":7,\"y\":28}],\"version\":1},\"trophy\":{\"id\":\"trophy\",\"name\":\"Trophy\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c6\",\"native\":\"🏆\",\"x\":8,\"y\":51}],\"version\":1},\"sports_medal\":{\"id\":\"sports_medal\",\"name\":\"Sports Medal\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c5\",\"native\":\"🏅\",\"x\":8,\"y\":50}],\"version\":1},\"first_place_medal\":{\"id\":\"first_place_medal\",\"name\":\"1st Place Medal\",\"keywords\":[],\"skins\":[{\"unified\":\"1f947\",\"native\":\"🥇\",\"x\":43,\"y\":17}],\"version\":3},\"second_place_medal\":{\"id\":\"second_place_medal\",\"name\":\"2nd Place Medal\",\"keywords\":[],\"skins\":[{\"unified\":\"1f948\",\"native\":\"🥈\",\"x\":43,\"y\":18}],\"version\":3},\"third_place_medal\":{\"id\":\"third_place_medal\",\"name\":\"3rd Place Medal\",\"keywords\":[],\"skins\":[{\"unified\":\"1f949\",\"native\":\"🥉\",\"x\":43,\"y\":19}],\"version\":3},\"soccer\":{\"id\":\"soccer\",\"name\":\"Soccer Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"26bd\",\"native\":\"⚽\",\"x\":57,\"y\":44}],\"version\":1},\"baseball\":{\"id\":\"baseball\",\"name\":\"Baseball\",\"keywords\":[],\"skins\":[{\"unified\":\"26be\",\"native\":\"⚾\",\"x\":57,\"y\":45}],\"version\":1},\"basketball\":{\"id\":\"basketball\",\"name\":\"Basketball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c0\",\"native\":\"🏀\",\"x\":8,\"y\":6}],\"version\":1},\"volleyball\":{\"id\":\"volleyball\",\"name\":\"Volleyball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d0\",\"native\":\"🏐\",\"x\":9,\"y\":56}],\"version\":1},\"football\":{\"id\":\"football\",\"name\":\"American Football\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c8\",\"native\":\"🏈\",\"x\":8,\"y\":58}],\"version\":1},\"rugby_football\":{\"id\":\"rugby_football\",\"name\":\"Rugby Football\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c9\",\"native\":\"🏉\",\"x\":8,\"y\":59}],\"version\":1},\"tennis\":{\"id\":\"tennis\",\"name\":\"Tennis\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3be\",\"native\":\"🎾\",\"x\":8,\"y\":4}],\"version\":1},\"bowling\":{\"id\":\"bowling\",\"name\":\"Bowling\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b3\",\"native\":\"🎳\",\"x\":7,\"y\":54}],\"version\":1},\"cricket_bat_and_ball\":{\"id\":\"cricket_bat_and_ball\",\"name\":\"Cricket Game\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3cf\",\"native\":\"🏏\",\"x\":9,\"y\":55}],\"version\":1},\"field_hockey_stick_and_ball\":{\"id\":\"field_hockey_stick_and_ball\",\"name\":\"Field Hockey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d1\",\"native\":\"🏑\",\"x\":9,\"y\":57}],\"version\":1},\"ice_hockey_stick_and_puck\":{\"id\":\"ice_hockey_stick_and_puck\",\"name\":\"Ice Hockey\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d2\",\"native\":\"🏒\",\"x\":9,\"y\":58}],\"version\":1},\"table_tennis_paddle_and_ball\":{\"id\":\"table_tennis_paddle_and_ball\",\"name\":\"Ping Pong\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3d3\",\"native\":\"🏓\",\"x\":9,\"y\":59}],\"version\":1},\"badminton_racquet_and_shuttlecock\":{\"id\":\"badminton_racquet_and_shuttlecock\",\"name\":\"Badminton\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f8\",\"native\":\"🏸\",\"x\":10,\"y\":38}],\"version\":1},\"boxing_glove\":{\"id\":\"boxing_glove\",\"name\":\"Boxing Glove\",\"keywords\":[],\"skins\":[{\"unified\":\"1f94a\",\"native\":\"🥊\",\"x\":43,\"y\":20}],\"version\":3},\"martial_arts_uniform\":{\"id\":\"martial_arts_uniform\",\"name\":\"Martial Arts Uniform\",\"keywords\":[],\"skins\":[{\"unified\":\"1f94b\",\"native\":\"🥋\",\"x\":43,\"y\":21}],\"version\":3},\"goal_net\":{\"id\":\"goal_net\",\"name\":\"Goal Net\",\"keywords\":[],\"skins\":[{\"unified\":\"1f945\",\"native\":\"🥅\",\"x\":43,\"y\":16}],\"version\":3},\"golf\":{\"id\":\"golf\",\"name\":\"Flag in Hole\",\"keywords\":[],\"skins\":[{\"unified\":\"26f3\",\"native\":\"⛳\",\"x\":57,\"y\":59}],\"version\":1},\"ice_skate\":{\"id\":\"ice_skate\",\"name\":\"Ice Skate\",\"keywords\":[],\"skins\":[{\"unified\":\"26f8-fe0f\",\"native\":\"⛸️\",\"x\":58,\"y\":2}],\"version\":1},\"fishing_pole_and_fish\":{\"id\":\"fishing_pole_and_fish\",\"name\":\"Fishing Pole\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a3\",\"native\":\"🎣\",\"x\":7,\"y\":38}],\"version\":1},\"running_shirt_with_sash\":{\"id\":\"running_shirt_with_sash\",\"name\":\"Running Shirt\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3bd\",\"native\":\"🎽\",\"x\":8,\"y\":3}],\"version\":1},\"ski\":{\"id\":\"ski\",\"name\":\"Skis\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3bf\",\"native\":\"🎿\",\"x\":8,\"y\":5}],\"version\":1},\"dart\":{\"id\":\"dart\",\"name\":\"Bullseye\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3af\",\"native\":\"🎯\",\"x\":7,\"y\":50}],\"version\":1},\"8ball\":{\"id\":\"8ball\",\"name\":\"Billiards\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b1\",\"native\":\"🎱\",\"x\":7,\"y\":52}],\"version\":1},\"crystal_ball\":{\"id\":\"crystal_ball\",\"name\":\"Crystal Ball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f52e\",\"native\":\"🔮\",\"x\":30,\"y\":10}],\"version\":1},\"video_game\":{\"id\":\"video_game\",\"name\":\"Video Game\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ae\",\"native\":\"🎮\",\"x\":7,\"y\":49}],\"version\":1},\"joystick\":{\"id\":\"joystick\",\"name\":\"Joystick\",\"keywords\":[],\"skins\":[{\"unified\":\"1f579-fe0f\",\"native\":\"🕹️\",\"x\":31,\"y\":25}],\"version\":1},\"slot_machine\":{\"id\":\"slot_machine\",\"name\":\"Slot Machine\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b0\",\"native\":\"🎰\",\"x\":7,\"y\":51}],\"version\":1},\"game_die\":{\"id\":\"game_die\",\"name\":\"Game Die\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b2\",\"native\":\"🎲\",\"x\":7,\"y\":53}],\"version\":1},\"spades\":{\"id\":\"spades\",\"name\":\"Spade Suit\",\"keywords\":[],\"skins\":[{\"unified\":\"2660-fe0f\",\"native\":\"♠️\",\"x\":57,\"y\":20}],\"version\":1},\"hearts\":{\"id\":\"hearts\",\"name\":\"Heart Suit\",\"keywords\":[],\"skins\":[{\"unified\":\"2665-fe0f\",\"native\":\"♥️\",\"x\":57,\"y\":22}],\"version\":1},\"diamonds\":{\"id\":\"diamonds\",\"name\":\"Diamond Suit\",\"keywords\":[],\"skins\":[{\"unified\":\"2666-fe0f\",\"native\":\"♦️\",\"x\":57,\"y\":23}],\"version\":1},\"clubs\":{\"id\":\"clubs\",\"name\":\"Club Suit\",\"keywords\":[],\"skins\":[{\"unified\":\"2663-fe0f\",\"native\":\"♣️\",\"x\":57,\"y\":21}],\"version\":1},\"black_joker\":{\"id\":\"black_joker\",\"name\":\"Joker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f0cf\",\"native\":\"🃏\",\"x\":0,\"y\":15}],\"version\":1},\"mahjong\":{\"id\":\"mahjong\",\"name\":\"Mahjong Red Dragon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f004\",\"native\":\"🀄\",\"x\":0,\"y\":14}],\"version\":1},\"flower_playing_cards\":{\"id\":\"flower_playing_cards\",\"name\":\"Flower Playing Cards\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b4\",\"native\":\"🎴\",\"x\":7,\"y\":55}],\"version\":1},\"performing_arts\":{\"id\":\"performing_arts\",\"name\":\"Performing Arts\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ad\",\"native\":\"🎭\",\"x\":7,\"y\":48}],\"version\":1},\"frame_with_picture\":{\"id\":\"frame_with_picture\",\"name\":\"Framed Picture\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5bc-fe0f\",\"native\":\"🖼️\",\"x\":31,\"y\":60}],\"version\":1},\"art\":{\"id\":\"art\",\"name\":\"Artist Palette\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a8\",\"native\":\"🎨\",\"x\":7,\"y\":43}],\"version\":1},\"eyeglasses\":{\"id\":\"eyeglasses\",\"name\":\"Glasses\",\"keywords\":[],\"skins\":[{\"unified\":\"1f453\",\"native\":\"👓\",\"x\":13,\"y\":15}],\"version\":1},\"dark_sunglasses\":{\"id\":\"dark_sunglasses\",\"name\":\"Sunglasses\",\"keywords\":[],\"skins\":[{\"unified\":\"1f576-fe0f\",\"native\":\"🕶️\",\"x\":31,\"y\":22}],\"version\":1},\"necktie\":{\"id\":\"necktie\",\"name\":\"Necktie\",\"keywords\":[],\"skins\":[{\"unified\":\"1f454\",\"native\":\"👔\",\"x\":13,\"y\":16}],\"version\":1},\"shirt\":{\"id\":\"shirt\",\"name\":\"T-Shirt\",\"keywords\":[],\"skins\":[{\"unified\":\"1f455\",\"native\":\"👕\",\"x\":13,\"y\":17}],\"version\":1},\"jeans\":{\"id\":\"jeans\",\"name\":\"Jeans\",\"keywords\":[],\"skins\":[{\"unified\":\"1f456\",\"native\":\"👖\",\"x\":13,\"y\":18}],\"version\":1},\"dress\":{\"id\":\"dress\",\"name\":\"Dress\",\"keywords\":[],\"skins\":[{\"unified\":\"1f457\",\"native\":\"👗\",\"x\":13,\"y\":19}],\"version\":1},\"kimono\":{\"id\":\"kimono\",\"name\":\"Kimono\",\"keywords\":[],\"skins\":[{\"unified\":\"1f458\",\"native\":\"👘\",\"x\":13,\"y\":20}],\"version\":1},\"bikini\":{\"id\":\"bikini\",\"name\":\"Bikini\",\"keywords\":[],\"skins\":[{\"unified\":\"1f459\",\"native\":\"👙\",\"x\":13,\"y\":21}],\"version\":1},\"womans_clothes\":{\"id\":\"womans_clothes\",\"name\":\"Womans Clothes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f45a\",\"native\":\"👚\",\"x\":13,\"y\":22}],\"version\":1},\"purse\":{\"id\":\"purse\",\"name\":\"Purse\",\"keywords\":[],\"skins\":[{\"unified\":\"1f45b\",\"native\":\"👛\",\"x\":13,\"y\":23}],\"version\":1},\"handbag\":{\"id\":\"handbag\",\"name\":\"Handbag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f45c\",\"native\":\"👜\",\"x\":13,\"y\":24}],\"version\":1},\"pouch\":{\"id\":\"pouch\",\"name\":\"Pouch\",\"keywords\":[],\"skins\":[{\"unified\":\"1f45d\",\"native\":\"👝\",\"x\":13,\"y\":25}],\"version\":1},\"shopping_bags\":{\"id\":\"shopping_bags\",\"name\":\"Shopping Bags\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6cd-fe0f\",\"native\":\"🛍️\",\"x\":37,\"y\":60}],\"version\":1},\"school_satchel\":{\"id\":\"school_satchel\",\"name\":\"Backpack\",\"keywords\":[],\"skins\":[{\"unified\":\"1f392\",\"native\":\"🎒\",\"x\":7,\"y\":26}],\"version\":1},\"mans_shoe\":{\"id\":\"mans_shoe\",\"name\":\"Mans Shoe\",\"keywords\":[],\"skins\":[{\"unified\":\"1f45e\",\"native\":\"👞\",\"x\":13,\"y\":26}],\"version\":1},\"athletic_shoe\":{\"id\":\"athletic_shoe\",\"name\":\"Running Shoe\",\"keywords\":[],\"skins\":[{\"unified\":\"1f45f\",\"native\":\"👟\",\"x\":13,\"y\":27}],\"version\":1},\"high_heel\":{\"id\":\"high_heel\",\"name\":\"High-Heeled Shoe\",\"keywords\":[],\"skins\":[{\"unified\":\"1f460\",\"native\":\"👠\",\"x\":13,\"y\":28}],\"version\":1},\"sandal\":{\"id\":\"sandal\",\"name\":\"Womans Sandal\",\"keywords\":[],\"skins\":[{\"unified\":\"1f461\",\"native\":\"👡\",\"x\":13,\"y\":29}],\"version\":1},\"boot\":{\"id\":\"boot\",\"name\":\"Womans Boots\",\"keywords\":[],\"skins\":[{\"unified\":\"1f462\",\"native\":\"👢\",\"x\":13,\"y\":30}],\"version\":1},\"crown\":{\"id\":\"crown\",\"name\":\"Crown\",\"keywords\":[],\"skins\":[{\"unified\":\"1f451\",\"native\":\"👑\",\"x\":13,\"y\":13}],\"version\":1},\"womans_hat\":{\"id\":\"womans_hat\",\"name\":\"Womans Hat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f452\",\"native\":\"👒\",\"x\":13,\"y\":14}],\"version\":1},\"tophat\":{\"id\":\"tophat\",\"name\":\"Top Hat\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a9\",\"native\":\"🎩\",\"x\":7,\"y\":44}],\"version\":1},\"mortar_board\":{\"id\":\"mortar_board\",\"name\":\"Graduation Cap\",\"keywords\":[],\"skins\":[{\"unified\":\"1f393\",\"native\":\"🎓\",\"x\":7,\"y\":27}],\"version\":1},\"helmet_with_white_cross\":{\"id\":\"helmet_with_white_cross\",\"name\":\"Rescue Worker’s Helmet\",\"keywords\":[],\"skins\":[{\"unified\":\"26d1-fe0f\",\"native\":\"⛑️\",\"x\":57,\"y\":51}],\"version\":1},\"prayer_beads\":{\"id\":\"prayer_beads\",\"name\":\"Prayer Beads\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ff\",\"native\":\"📿\",\"x\":29,\"y\":24}],\"version\":1},\"lipstick\":{\"id\":\"lipstick\",\"name\":\"Lipstick\",\"keywords\":[],\"skins\":[{\"unified\":\"1f484\",\"native\":\"💄\",\"x\":25,\"y\":52}],\"version\":1},\"ring\":{\"id\":\"ring\",\"name\":\"Ring\",\"keywords\":[],\"skins\":[{\"unified\":\"1f48d\",\"native\":\"💍\",\"x\":26,\"y\":39}],\"version\":1},\"gem\":{\"id\":\"gem\",\"name\":\"Gem Stone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f48e\",\"native\":\"💎\",\"x\":26,\"y\":40}],\"version\":1},\"mute\":{\"id\":\"mute\",\"name\":\"Muted Speaker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f507\",\"native\":\"🔇\",\"x\":29,\"y\":32}],\"version\":1},\"speaker\":{\"id\":\"speaker\",\"name\":\"Speaker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f508\",\"native\":\"🔈\",\"x\":29,\"y\":33}],\"version\":1},\"sound\":{\"id\":\"sound\",\"name\":\"Speaker Medium Volume\",\"keywords\":[],\"skins\":[{\"unified\":\"1f509\",\"native\":\"🔉\",\"x\":29,\"y\":34}],\"version\":1},\"loud_sound\":{\"id\":\"loud_sound\",\"name\":\"Speaker High Volume\",\"keywords\":[],\"skins\":[{\"unified\":\"1f50a\",\"native\":\"🔊\",\"x\":29,\"y\":35}],\"version\":1},\"loudspeaker\":{\"id\":\"loudspeaker\",\"name\":\"Loudspeaker\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e2\",\"native\":\"📢\",\"x\":28,\"y\":57}],\"version\":1},\"mega\":{\"id\":\"mega\",\"name\":\"Megaphone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e3\",\"native\":\"📣\",\"x\":28,\"y\":58}],\"version\":1},\"postal_horn\":{\"id\":\"postal_horn\",\"name\":\"Postal Horn\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ef\",\"native\":\"📯\",\"x\":29,\"y\":9}],\"version\":1},\"bell\":{\"id\":\"bell\",\"name\":\"Bell\",\"keywords\":[],\"skins\":[{\"unified\":\"1f514\",\"native\":\"🔔\",\"x\":29,\"y\":45}],\"version\":1},\"no_bell\":{\"id\":\"no_bell\",\"name\":\"Bell with Slash\",\"keywords\":[],\"skins\":[{\"unified\":\"1f515\",\"native\":\"🔕\",\"x\":29,\"y\":46}],\"version\":1},\"musical_score\":{\"id\":\"musical_score\",\"name\":\"Musical Score\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3bc\",\"native\":\"🎼\",\"x\":8,\"y\":2}],\"version\":1},\"musical_note\":{\"id\":\"musical_note\",\"name\":\"Musical Note\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b5\",\"native\":\"🎵\",\"x\":7,\"y\":56}],\"version\":1},\"notes\":{\"id\":\"notes\",\"name\":\"Musical Notes\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b6\",\"native\":\"🎶\",\"x\":7,\"y\":57}],\"version\":1},\"studio_microphone\":{\"id\":\"studio_microphone\",\"name\":\"Studio Microphone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f399-fe0f\",\"native\":\"🎙️\",\"x\":7,\"y\":30}],\"version\":1},\"level_slider\":{\"id\":\"level_slider\",\"name\":\"Level Slider\",\"keywords\":[],\"skins\":[{\"unified\":\"1f39a-fe0f\",\"native\":\"🎚️\",\"x\":7,\"y\":31}],\"version\":1},\"control_knobs\":{\"id\":\"control_knobs\",\"name\":\"Control Knobs\",\"keywords\":[],\"skins\":[{\"unified\":\"1f39b-fe0f\",\"native\":\"🎛️\",\"x\":7,\"y\":32}],\"version\":1},\"microphone\":{\"id\":\"microphone\",\"name\":\"Microphone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a4\",\"native\":\"🎤\",\"x\":7,\"y\":39}],\"version\":1},\"headphones\":{\"id\":\"headphones\",\"name\":\"Headphone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a7\",\"native\":\"🎧\",\"x\":7,\"y\":42}],\"version\":1},\"radio\":{\"id\":\"radio\",\"name\":\"Radio\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4fb\",\"native\":\"📻\",\"x\":29,\"y\":21}],\"version\":1},\"saxophone\":{\"id\":\"saxophone\",\"name\":\"Saxophone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b7\",\"native\":\"🎷\",\"x\":7,\"y\":58}],\"version\":1},\"guitar\":{\"id\":\"guitar\",\"name\":\"Guitar\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b8\",\"native\":\"🎸\",\"x\":7,\"y\":59}],\"version\":1},\"musical_keyboard\":{\"id\":\"musical_keyboard\",\"name\":\"Musical Keyboard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3b9\",\"native\":\"🎹\",\"x\":7,\"y\":60}],\"version\":1},\"trumpet\":{\"id\":\"trumpet\",\"name\":\"Trumpet\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ba\",\"native\":\"🎺\",\"x\":8,\"y\":0}],\"version\":1},\"violin\":{\"id\":\"violin\",\"name\":\"Violin\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3bb\",\"native\":\"🎻\",\"x\":8,\"y\":1}],\"version\":1},\"drum_with_drumsticks\":{\"id\":\"drum_with_drumsticks\",\"name\":\"Drum\",\"keywords\":[],\"skins\":[{\"unified\":\"1f941\",\"native\":\"🥁\",\"x\":43,\"y\":12}],\"version\":3},\"iphone\":{\"id\":\"iphone\",\"name\":\"Mobile Phone\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f1\",\"native\":\"📱\",\"x\":29,\"y\":11}],\"version\":1},\"calling\":{\"id\":\"calling\",\"name\":\"Mobile Phone with Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f2\",\"native\":\"📲\",\"x\":29,\"y\":12}],\"version\":1},\"phone\":{\"id\":\"phone\",\"name\":\"Telephone\",\"keywords\":[],\"skins\":[{\"unified\":\"260e-fe0f\",\"native\":\"☎️\",\"x\":56,\"y\":45}],\"version\":1},\"telephone_receiver\":{\"id\":\"telephone_receiver\",\"name\":\"Telephone Receiver\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4de\",\"native\":\"📞\",\"x\":28,\"y\":53}],\"version\":1},\"pager\":{\"id\":\"pager\",\"name\":\"Pager\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4df\",\"native\":\"📟\",\"x\":28,\"y\":54}],\"version\":1},\"fax\":{\"id\":\"fax\",\"name\":\"Fax Machine\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e0\",\"native\":\"📠\",\"x\":28,\"y\":55}],\"version\":1},\"battery\":{\"id\":\"battery\",\"name\":\"Battery\",\"keywords\":[],\"skins\":[{\"unified\":\"1f50b\",\"native\":\"🔋\",\"x\":29,\"y\":36}],\"version\":1},\"electric_plug\":{\"id\":\"electric_plug\",\"name\":\"Electric Plug\",\"keywords\":[],\"skins\":[{\"unified\":\"1f50c\",\"native\":\"🔌\",\"x\":29,\"y\":37}],\"version\":1},\"computer\":{\"id\":\"computer\",\"name\":\"Laptop\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4bb\",\"native\":\"💻\",\"x\":28,\"y\":18}],\"version\":1},\"desktop_computer\":{\"id\":\"desktop_computer\",\"name\":\"Desktop Computer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5a5-fe0f\",\"native\":\"🖥️\",\"x\":31,\"y\":56}],\"version\":1},\"printer\":{\"id\":\"printer\",\"name\":\"Printer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5a8-fe0f\",\"native\":\"🖨️\",\"x\":31,\"y\":57}],\"version\":1},\"keyboard\":{\"id\":\"keyboard\",\"name\":\"Keyboard\",\"keywords\":[],\"skins\":[{\"unified\":\"2328-fe0f\",\"native\":\"⌨️\",\"x\":56,\"y\":15}],\"version\":1},\"three_button_mouse\":{\"id\":\"three_button_mouse\",\"name\":\"Computer Mouse\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5b1-fe0f\",\"native\":\"🖱️\",\"x\":31,\"y\":58}],\"version\":1},\"trackball\":{\"id\":\"trackball\",\"name\":\"Trackball\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5b2-fe0f\",\"native\":\"🖲️\",\"x\":31,\"y\":59}],\"version\":1},\"minidisc\":{\"id\":\"minidisc\",\"name\":\"Minidisc\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4bd\",\"native\":\"💽\",\"x\":28,\"y\":20}],\"version\":1},\"floppy_disk\":{\"id\":\"floppy_disk\",\"name\":\"Floppy Disk\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4be\",\"native\":\"💾\",\"x\":28,\"y\":21}],\"version\":1},\"cd\":{\"id\":\"cd\",\"name\":\"Optical Disc\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4bf\",\"native\":\"💿\",\"x\":28,\"y\":22}],\"version\":1},\"dvd\":{\"id\":\"dvd\",\"name\":\"Dvd\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c0\",\"native\":\"📀\",\"x\":28,\"y\":23}],\"version\":1},\"movie_camera\":{\"id\":\"movie_camera\",\"name\":\"Movie Camera\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a5\",\"native\":\"🎥\",\"x\":7,\"y\":40}],\"version\":1},\"film_frames\":{\"id\":\"film_frames\",\"name\":\"Film Frames\",\"keywords\":[],\"skins\":[{\"unified\":\"1f39e-fe0f\",\"native\":\"🎞️\",\"x\":7,\"y\":33}],\"version\":1},\"film_projector\":{\"id\":\"film_projector\",\"name\":\"Film Projector\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4fd-fe0f\",\"native\":\"📽️\",\"x\":29,\"y\":23}],\"version\":1},\"clapper\":{\"id\":\"clapper\",\"name\":\"Clapper Board\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ac\",\"native\":\"🎬\",\"x\":7,\"y\":47}],\"version\":1},\"tv\":{\"id\":\"tv\",\"name\":\"Television\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4fa\",\"native\":\"📺\",\"x\":29,\"y\":20}],\"version\":1},\"camera\":{\"id\":\"camera\",\"name\":\"Camera\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f7\",\"native\":\"📷\",\"x\":29,\"y\":17}],\"version\":1},\"camera_with_flash\":{\"id\":\"camera_with_flash\",\"name\":\"Camera with Flash\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f8\",\"native\":\"📸\",\"x\":29,\"y\":18}],\"version\":1},\"video_camera\":{\"id\":\"video_camera\",\"name\":\"Video Camera\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f9\",\"native\":\"📹\",\"x\":29,\"y\":19}],\"version\":1},\"vhs\":{\"id\":\"vhs\",\"name\":\"Videocassette\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4fc\",\"native\":\"📼\",\"x\":29,\"y\":22}],\"version\":1},\"mag\":{\"id\":\"mag\",\"name\":\"Magnifying Glass Tilted Left\",\"keywords\":[],\"skins\":[{\"unified\":\"1f50d\",\"native\":\"🔍\",\"x\":29,\"y\":38}],\"version\":1},\"mag_right\":{\"id\":\"mag_right\",\"name\":\"Magnifying Glass Tilted Right\",\"keywords\":[],\"skins\":[{\"unified\":\"1f50e\",\"native\":\"🔎\",\"x\":29,\"y\":39}],\"version\":1},\"candle\":{\"id\":\"candle\",\"name\":\"Candle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f56f-fe0f\",\"native\":\"🕯️\",\"x\":30,\"y\":56}],\"version\":1},\"bulb\":{\"id\":\"bulb\",\"name\":\"Light Bulb\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a1\",\"native\":\"💡\",\"x\":27,\"y\":48}],\"version\":1},\"flashlight\":{\"id\":\"flashlight\",\"name\":\"Flashlight\",\"keywords\":[],\"skins\":[{\"unified\":\"1f526\",\"native\":\"🔦\",\"x\":30,\"y\":2}],\"version\":1},\"izakaya_lantern\":{\"id\":\"izakaya_lantern\",\"name\":\"Izakaya Lantern\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3ee\",\"native\":\"🏮\",\"x\":10,\"y\":25}],\"version\":1},\"notebook_with_decorative_cover\":{\"id\":\"notebook_with_decorative_cover\",\"name\":\"Notebook with Decorative Cover\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d4\",\"native\":\"📔\",\"x\":28,\"y\":43}],\"version\":1},\"closed_book\":{\"id\":\"closed_book\",\"name\":\"Closed Book\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d5\",\"native\":\"📕\",\"x\":28,\"y\":44}],\"version\":1},\"book\":{\"id\":\"book\",\"name\":\"Open Book\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d6\",\"native\":\"📖\",\"x\":28,\"y\":45}],\"version\":1},\"green_book\":{\"id\":\"green_book\",\"name\":\"Green Book\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d7\",\"native\":\"📗\",\"x\":28,\"y\":46}],\"version\":1},\"blue_book\":{\"id\":\"blue_book\",\"name\":\"Blue Book\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d8\",\"native\":\"📘\",\"x\":28,\"y\":47}],\"version\":1},\"orange_book\":{\"id\":\"orange_book\",\"name\":\"Orange Book\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d9\",\"native\":\"📙\",\"x\":28,\"y\":48}],\"version\":1},\"books\":{\"id\":\"books\",\"name\":\"Books\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4da\",\"native\":\"📚\",\"x\":28,\"y\":49}],\"version\":1},\"notebook\":{\"id\":\"notebook\",\"name\":\"Notebook\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d3\",\"native\":\"📓\",\"x\":28,\"y\":42}],\"version\":1},\"ledger\":{\"id\":\"ledger\",\"name\":\"Ledger\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d2\",\"native\":\"📒\",\"x\":28,\"y\":41}],\"version\":1},\"page_with_curl\":{\"id\":\"page_with_curl\",\"name\":\"Page with Curl\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c3\",\"native\":\"📃\",\"x\":28,\"y\":26}],\"version\":1},\"scroll\":{\"id\":\"scroll\",\"name\":\"Scroll\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4dc\",\"native\":\"📜\",\"x\":28,\"y\":51}],\"version\":1},\"page_facing_up\":{\"id\":\"page_facing_up\",\"name\":\"Page Facing Up\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c4\",\"native\":\"📄\",\"x\":28,\"y\":27}],\"version\":1},\"newspaper\":{\"id\":\"newspaper\",\"name\":\"Newspaper\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f0\",\"native\":\"📰\",\"x\":29,\"y\":10}],\"version\":1},\"rolled_up_newspaper\":{\"id\":\"rolled_up_newspaper\",\"name\":\"Rolled-Up Newspaper\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5de-fe0f\",\"native\":\"🗞️\",\"x\":32,\"y\":8}],\"version\":1},\"bookmark_tabs\":{\"id\":\"bookmark_tabs\",\"name\":\"Bookmark Tabs\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d1\",\"native\":\"📑\",\"x\":28,\"y\":40}],\"version\":1},\"bookmark\":{\"id\":\"bookmark\",\"name\":\"Bookmark\",\"keywords\":[],\"skins\":[{\"unified\":\"1f516\",\"native\":\"🔖\",\"x\":29,\"y\":47}],\"version\":1},\"label\":{\"id\":\"label\",\"name\":\"Label\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f7-fe0f\",\"native\":\"🏷️\",\"x\":10,\"y\":37}],\"version\":1},\"moneybag\":{\"id\":\"moneybag\",\"name\":\"Money Bag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b0\",\"native\":\"💰\",\"x\":28,\"y\":7}],\"version\":1},\"yen\":{\"id\":\"yen\",\"name\":\"Yen Banknote\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b4\",\"native\":\"💴\",\"x\":28,\"y\":11}],\"version\":1},\"dollar\":{\"id\":\"dollar\",\"name\":\"Dollar Banknote\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b5\",\"native\":\"💵\",\"x\":28,\"y\":12}],\"version\":1},\"euro\":{\"id\":\"euro\",\"name\":\"Euro Banknote\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b6\",\"native\":\"💶\",\"x\":28,\"y\":13}],\"version\":1},\"pound\":{\"id\":\"pound\",\"name\":\"Pound Banknote\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b7\",\"native\":\"💷\",\"x\":28,\"y\":14}],\"version\":1},\"money_with_wings\":{\"id\":\"money_with_wings\",\"name\":\"Money with Wings\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b8\",\"native\":\"💸\",\"x\":28,\"y\":15}],\"version\":1},\"credit_card\":{\"id\":\"credit_card\",\"name\":\"Credit Card\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b3\",\"native\":\"💳\",\"x\":28,\"y\":10}],\"version\":1},\"chart\":{\"id\":\"chart\",\"name\":\"Chart Increasing with Yen\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b9\",\"native\":\"💹\",\"x\":28,\"y\":16}],\"version\":1},\"email\":{\"id\":\"email\",\"name\":\"Envelope\",\"keywords\":[],\"skins\":[{\"unified\":\"2709-fe0f\",\"native\":\"✉️\",\"x\":58,\"y\":26}],\"version\":1},\"e-mail\":{\"id\":\"e-mail\",\"name\":\"E-Mail\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e7\",\"native\":\"📧\",\"x\":29,\"y\":1}],\"version\":1},\"incoming_envelope\":{\"id\":\"incoming_envelope\",\"name\":\"Incoming Envelope\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e8\",\"native\":\"📨\",\"x\":29,\"y\":2}],\"version\":1},\"envelope_with_arrow\":{\"id\":\"envelope_with_arrow\",\"name\":\"Envelope with Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e9\",\"native\":\"📩\",\"x\":29,\"y\":3}],\"version\":1},\"outbox_tray\":{\"id\":\"outbox_tray\",\"name\":\"Outbox Tray\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e4\",\"native\":\"📤\",\"x\":28,\"y\":59}],\"version\":1},\"inbox_tray\":{\"id\":\"inbox_tray\",\"name\":\"Inbox Tray\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e5\",\"native\":\"📥\",\"x\":28,\"y\":60}],\"version\":1},\"package\":{\"id\":\"package\",\"name\":\"Package\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e6\",\"native\":\"📦\",\"x\":29,\"y\":0}],\"version\":1},\"mailbox\":{\"id\":\"mailbox\",\"name\":\"Closed Mailbox with Raised Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4eb\",\"native\":\"📫\",\"x\":29,\"y\":5}],\"version\":1},\"mailbox_closed\":{\"id\":\"mailbox_closed\",\"name\":\"Closed Mailbox with Lowered Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ea\",\"native\":\"📪\",\"x\":29,\"y\":4}],\"version\":1},\"mailbox_with_mail\":{\"id\":\"mailbox_with_mail\",\"name\":\"Open Mailbox with Raised Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ec\",\"native\":\"📬\",\"x\":29,\"y\":6}],\"version\":1},\"mailbox_with_no_mail\":{\"id\":\"mailbox_with_no_mail\",\"name\":\"Open Mailbox with Lowered Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ed\",\"native\":\"📭\",\"x\":29,\"y\":7}],\"version\":1},\"postbox\":{\"id\":\"postbox\",\"name\":\"Postbox\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ee\",\"native\":\"📮\",\"x\":29,\"y\":8}],\"version\":1},\"ballot_box_with_ballot\":{\"id\":\"ballot_box_with_ballot\",\"name\":\"Ballot Box with Ballot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5f3-fe0f\",\"native\":\"🗳️\",\"x\":32,\"y\":13}],\"version\":1},\"pencil2\":{\"id\":\"pencil2\",\"name\":\"Pencil\",\"keywords\":[],\"skins\":[{\"unified\":\"270f-fe0f\",\"native\":\"✏️\",\"x\":58,\"y\":51}],\"version\":1},\"black_nib\":{\"id\":\"black_nib\",\"name\":\"Black Nib\",\"keywords\":[],\"skins\":[{\"unified\":\"2712-fe0f\",\"native\":\"✒️\",\"x\":58,\"y\":52}],\"version\":1},\"lower_left_fountain_pen\":{\"id\":\"lower_left_fountain_pen\",\"name\":\"Fountain Pen\",\"keywords\":[],\"skins\":[{\"unified\":\"1f58b-fe0f\",\"native\":\"🖋️\",\"x\":31,\"y\":34}],\"version\":1},\"lower_left_ballpoint_pen\":{\"id\":\"lower_left_ballpoint_pen\",\"name\":\"Pen\",\"keywords\":[],\"skins\":[{\"unified\":\"1f58a-fe0f\",\"native\":\"🖊️\",\"x\":31,\"y\":33}],\"version\":1},\"lower_left_paintbrush\":{\"id\":\"lower_left_paintbrush\",\"name\":\"Paintbrush\",\"keywords\":[],\"skins\":[{\"unified\":\"1f58c-fe0f\",\"native\":\"🖌️\",\"x\":31,\"y\":35}],\"version\":1},\"lower_left_crayon\":{\"id\":\"lower_left_crayon\",\"name\":\"Crayon\",\"keywords\":[],\"skins\":[{\"unified\":\"1f58d-fe0f\",\"native\":\"🖍️\",\"x\":31,\"y\":36}],\"version\":1},\"memo\":{\"id\":\"memo\",\"name\":\"Memo\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4dd\",\"native\":\"📝\",\"x\":28,\"y\":52}],\"version\":1},\"briefcase\":{\"id\":\"briefcase\",\"name\":\"Briefcase\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4bc\",\"native\":\"💼\",\"x\":28,\"y\":19}],\"version\":1},\"file_folder\":{\"id\":\"file_folder\",\"name\":\"File Folder\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c1\",\"native\":\"📁\",\"x\":28,\"y\":24}],\"version\":1},\"open_file_folder\":{\"id\":\"open_file_folder\",\"name\":\"Open File Folder\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c2\",\"native\":\"📂\",\"x\":28,\"y\":25}],\"version\":1},\"card_index_dividers\":{\"id\":\"card_index_dividers\",\"name\":\"Card Index Dividers\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5c2-fe0f\",\"native\":\"🗂️\",\"x\":32,\"y\":0}],\"version\":1},\"date\":{\"id\":\"date\",\"name\":\"Calendar\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c5\",\"native\":\"📅\",\"x\":28,\"y\":28}],\"version\":1},\"calendar\":{\"id\":\"calendar\",\"name\":\"Tear-off Calendar\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c6\",\"native\":\"📆\",\"x\":28,\"y\":29}],\"version\":1},\"spiral_note_pad\":{\"id\":\"spiral_note_pad\",\"name\":\"Spiral Notepad\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5d2-fe0f\",\"native\":\"🗒️\",\"x\":32,\"y\":4}],\"version\":1},\"spiral_calendar_pad\":{\"id\":\"spiral_calendar_pad\",\"name\":\"Spiral Calendar\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5d3-fe0f\",\"native\":\"🗓️\",\"x\":32,\"y\":5}],\"version\":1},\"card_index\":{\"id\":\"card_index\",\"name\":\"Card Index\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c7\",\"native\":\"📇\",\"x\":28,\"y\":30}],\"version\":1},\"chart_with_upwards_trend\":{\"id\":\"chart_with_upwards_trend\",\"name\":\"Chart Increasing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c8\",\"native\":\"📈\",\"x\":28,\"y\":31}],\"version\":1},\"chart_with_downwards_trend\":{\"id\":\"chart_with_downwards_trend\",\"name\":\"Chart Decreasing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4c9\",\"native\":\"📉\",\"x\":28,\"y\":32}],\"version\":1},\"bar_chart\":{\"id\":\"bar_chart\",\"name\":\"Bar Chart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ca\",\"native\":\"📊\",\"x\":28,\"y\":33}],\"version\":1},\"clipboard\":{\"id\":\"clipboard\",\"name\":\"Clipboard\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4cb\",\"native\":\"📋\",\"x\":28,\"y\":34}],\"version\":1},\"pushpin\":{\"id\":\"pushpin\",\"name\":\"Pushpin\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4cc\",\"native\":\"📌\",\"x\":28,\"y\":35}],\"version\":1},\"round_pushpin\":{\"id\":\"round_pushpin\",\"name\":\"Round Pushpin\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4cd\",\"native\":\"📍\",\"x\":28,\"y\":36}],\"version\":1},\"paperclip\":{\"id\":\"paperclip\",\"name\":\"Paperclip\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4ce\",\"native\":\"📎\",\"x\":28,\"y\":37}],\"version\":1},\"linked_paperclips\":{\"id\":\"linked_paperclips\",\"name\":\"Linked Paperclips\",\"keywords\":[],\"skins\":[{\"unified\":\"1f587-fe0f\",\"native\":\"🖇️\",\"x\":31,\"y\":32}],\"version\":1},\"straight_ruler\":{\"id\":\"straight_ruler\",\"name\":\"Straight Ruler\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4cf\",\"native\":\"📏\",\"x\":28,\"y\":38}],\"version\":1},\"triangular_ruler\":{\"id\":\"triangular_ruler\",\"name\":\"Triangular Ruler\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4d0\",\"native\":\"📐\",\"x\":28,\"y\":39}],\"version\":1},\"scissors\":{\"id\":\"scissors\",\"name\":\"Scissors\",\"keywords\":[],\"skins\":[{\"unified\":\"2702-fe0f\",\"native\":\"✂️\",\"x\":58,\"y\":23}],\"version\":1},\"card_file_box\":{\"id\":\"card_file_box\",\"name\":\"Card File Box\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5c3-fe0f\",\"native\":\"🗃️\",\"x\":32,\"y\":1}],\"version\":1},\"file_cabinet\":{\"id\":\"file_cabinet\",\"name\":\"File Cabinet\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5c4-fe0f\",\"native\":\"🗄️\",\"x\":32,\"y\":2}],\"version\":1},\"wastebasket\":{\"id\":\"wastebasket\",\"name\":\"Wastebasket\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5d1-fe0f\",\"native\":\"🗑️\",\"x\":32,\"y\":3}],\"version\":1},\"lock\":{\"id\":\"lock\",\"name\":\"Lock\",\"keywords\":[],\"skins\":[{\"unified\":\"1f512\",\"native\":\"🔒\",\"x\":29,\"y\":43}],\"version\":1},\"unlock\":{\"id\":\"unlock\",\"name\":\"Unlocked\",\"keywords\":[],\"skins\":[{\"unified\":\"1f513\",\"native\":\"🔓\",\"x\":29,\"y\":44}],\"version\":1},\"lock_with_ink_pen\":{\"id\":\"lock_with_ink_pen\",\"name\":\"Locked with Pen\",\"keywords\":[],\"skins\":[{\"unified\":\"1f50f\",\"native\":\"🔏\",\"x\":29,\"y\":40}],\"version\":1},\"closed_lock_with_key\":{\"id\":\"closed_lock_with_key\",\"name\":\"Locked with Key\",\"keywords\":[],\"skins\":[{\"unified\":\"1f510\",\"native\":\"🔐\",\"x\":29,\"y\":41}],\"version\":1},\"key\":{\"id\":\"key\",\"name\":\"Key\",\"keywords\":[],\"skins\":[{\"unified\":\"1f511\",\"native\":\"🔑\",\"x\":29,\"y\":42}],\"version\":1},\"old_key\":{\"id\":\"old_key\",\"name\":\"Old Key\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5dd-fe0f\",\"native\":\"🗝️\",\"x\":32,\"y\":7}],\"version\":1},\"hammer\":{\"id\":\"hammer\",\"name\":\"Hammer\",\"keywords\":[],\"skins\":[{\"unified\":\"1f528\",\"native\":\"🔨\",\"x\":30,\"y\":4}],\"version\":1},\"pick\":{\"id\":\"pick\",\"name\":\"Pick\",\"keywords\":[],\"skins\":[{\"unified\":\"26cf-fe0f\",\"native\":\"⛏️\",\"x\":57,\"y\":50}],\"version\":1},\"hammer_and_pick\":{\"id\":\"hammer_and_pick\",\"name\":\"Hammer and Pick\",\"keywords\":[],\"skins\":[{\"unified\":\"2692-fe0f\",\"native\":\"⚒️\",\"x\":57,\"y\":28}],\"version\":1},\"hammer_and_wrench\":{\"id\":\"hammer_and_wrench\",\"name\":\"Hammer and Wrench\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e0-fe0f\",\"native\":\"🛠️\",\"x\":38,\"y\":11}],\"version\":1},\"dagger_knife\":{\"id\":\"dagger_knife\",\"name\":\"Dagger\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5e1-fe0f\",\"native\":\"🗡️\",\"x\":32,\"y\":9}],\"version\":1},\"crossed_swords\":{\"id\":\"crossed_swords\",\"name\":\"Crossed Swords\",\"keywords\":[],\"skins\":[{\"unified\":\"2694-fe0f\",\"native\":\"⚔️\",\"x\":57,\"y\":30}],\"version\":1},\"gun\":{\"id\":\"gun\",\"name\":\"Pistol\",\"keywords\":[],\"skins\":[{\"unified\":\"1f52b\",\"native\":\"🔫\",\"x\":30,\"y\":7}],\"version\":1},\"bow_and_arrow\":{\"id\":\"bow_and_arrow\",\"name\":\"Bow and Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f9\",\"native\":\"🏹\",\"x\":10,\"y\":39}],\"version\":1},\"shield\":{\"id\":\"shield\",\"name\":\"Shield\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6e1-fe0f\",\"native\":\"🛡️\",\"x\":38,\"y\":12}],\"version\":1},\"wrench\":{\"id\":\"wrench\",\"name\":\"Wrench\",\"keywords\":[],\"skins\":[{\"unified\":\"1f527\",\"native\":\"🔧\",\"x\":30,\"y\":3}],\"version\":1},\"nut_and_bolt\":{\"id\":\"nut_and_bolt\",\"name\":\"Nut and Bolt\",\"keywords\":[],\"skins\":[{\"unified\":\"1f529\",\"native\":\"🔩\",\"x\":30,\"y\":5}],\"version\":1},\"gear\":{\"id\":\"gear\",\"name\":\"Gear\",\"keywords\":[],\"skins\":[{\"unified\":\"2699-fe0f\",\"native\":\"⚙️\",\"x\":57,\"y\":34}],\"version\":1},\"compression\":{\"id\":\"compression\",\"name\":\"Clamp\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5dc-fe0f\",\"native\":\"🗜️\",\"x\":32,\"y\":6}],\"version\":1},\"scales\":{\"id\":\"scales\",\"name\":\"Balance Scale\",\"keywords\":[],\"skins\":[{\"unified\":\"2696-fe0f\",\"native\":\"⚖️\",\"x\":57,\"y\":32}],\"version\":1},\"link\":{\"id\":\"link\",\"name\":\"Link\",\"keywords\":[],\"skins\":[{\"unified\":\"1f517\",\"native\":\"🔗\",\"x\":29,\"y\":48}],\"version\":1},\"chains\":{\"id\":\"chains\",\"name\":\"Chains\",\"keywords\":[],\"skins\":[{\"unified\":\"26d3-fe0f\",\"native\":\"⛓️\",\"x\":57,\"y\":52}],\"version\":1},\"alembic\":{\"id\":\"alembic\",\"name\":\"Alembic\",\"keywords\":[],\"skins\":[{\"unified\":\"2697-fe0f\",\"native\":\"⚗️\",\"x\":57,\"y\":33}],\"version\":1},\"microscope\":{\"id\":\"microscope\",\"name\":\"Microscope\",\"keywords\":[],\"skins\":[{\"unified\":\"1f52c\",\"native\":\"🔬\",\"x\":30,\"y\":8}],\"version\":1},\"telescope\":{\"id\":\"telescope\",\"name\":\"Telescope\",\"keywords\":[],\"skins\":[{\"unified\":\"1f52d\",\"native\":\"🔭\",\"x\":30,\"y\":9}],\"version\":1},\"satellite_antenna\":{\"id\":\"satellite_antenna\",\"name\":\"Satellite Antenna\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4e1\",\"native\":\"📡\",\"x\":28,\"y\":56}],\"version\":1},\"syringe\":{\"id\":\"syringe\",\"name\":\"Syringe\",\"keywords\":[],\"skins\":[{\"unified\":\"1f489\",\"native\":\"💉\",\"x\":26,\"y\":35}],\"version\":1},\"pill\":{\"id\":\"pill\",\"name\":\"Pill\",\"keywords\":[],\"skins\":[{\"unified\":\"1f48a\",\"native\":\"💊\",\"x\":26,\"y\":36}],\"version\":1},\"door\":{\"id\":\"door\",\"name\":\"Door\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6aa\",\"native\":\"🚪\",\"x\":36,\"y\":30}],\"version\":1},\"bed\":{\"id\":\"bed\",\"name\":\"Bed\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6cf-fe0f\",\"native\":\"🛏️\",\"x\":38,\"y\":1}],\"version\":1},\"couch_and_lamp\":{\"id\":\"couch_and_lamp\",\"name\":\"Couch and Lamp\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6cb-fe0f\",\"native\":\"🛋️\",\"x\":37,\"y\":53}],\"version\":1},\"toilet\":{\"id\":\"toilet\",\"name\":\"Toilet\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6bd\",\"native\":\"🚽\",\"x\":37,\"y\":39}],\"version\":1},\"shower\":{\"id\":\"shower\",\"name\":\"Shower\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6bf\",\"native\":\"🚿\",\"x\":37,\"y\":41}],\"version\":1},\"bathtub\":{\"id\":\"bathtub\",\"name\":\"Bathtub\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6c1\",\"native\":\"🛁\",\"x\":37,\"y\":48}],\"version\":1},\"shopping_trolley\":{\"id\":\"shopping_trolley\",\"name\":\"Shopping Cart\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6d2\",\"native\":\"🛒\",\"x\":38,\"y\":4}],\"version\":3},\"smoking\":{\"id\":\"smoking\",\"name\":\"Cigarette\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ac\",\"native\":\"🚬\",\"x\":36,\"y\":32}],\"version\":1},\"coffin\":{\"id\":\"coffin\",\"name\":\"Coffin\",\"keywords\":[],\"skins\":[{\"unified\":\"26b0-fe0f\",\"native\":\"⚰️\",\"x\":57,\"y\":42}],\"version\":1},\"funeral_urn\":{\"id\":\"funeral_urn\",\"name\":\"Funeral Urn\",\"keywords\":[],\"skins\":[{\"unified\":\"26b1-fe0f\",\"native\":\"⚱️\",\"x\":57,\"y\":43}],\"version\":1},\"moyai\":{\"id\":\"moyai\",\"name\":\"Moai\",\"keywords\":[],\"skins\":[{\"unified\":\"1f5ff\",\"native\":\"🗿\",\"x\":32,\"y\":19}],\"version\":1},\"atm\":{\"id\":\"atm\",\"name\":\"Atm Sign\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3e7\",\"native\":\"🏧\",\"x\":10,\"y\":18}],\"version\":1},\"put_litter_in_its_place\":{\"id\":\"put_litter_in_its_place\",\"name\":\"Litter in Bin Sign\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ae\",\"native\":\"🚮\",\"x\":36,\"y\":34}],\"version\":1},\"potable_water\":{\"id\":\"potable_water\",\"name\":\"Potable Water\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b0\",\"native\":\"🚰\",\"x\":36,\"y\":36}],\"version\":1},\"wheelchair\":{\"id\":\"wheelchair\",\"name\":\"Wheelchair Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"267f\",\"native\":\"♿\",\"x\":57,\"y\":27}],\"version\":1},\"mens\":{\"id\":\"mens\",\"name\":\"Men’s Room\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b9\",\"native\":\"🚹\",\"x\":37,\"y\":35}],\"version\":1},\"womens\":{\"id\":\"womens\",\"name\":\"Women’s Room\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ba\",\"native\":\"🚺\",\"x\":37,\"y\":36}],\"version\":1},\"restroom\":{\"id\":\"restroom\",\"name\":\"Restroom\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6bb\",\"native\":\"🚻\",\"x\":37,\"y\":37}],\"version\":1},\"baby_symbol\":{\"id\":\"baby_symbol\",\"name\":\"Baby Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6bc\",\"native\":\"🚼\",\"x\":37,\"y\":38}],\"version\":1},\"wc\":{\"id\":\"wc\",\"name\":\"Water Closet\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6be\",\"native\":\"🚾\",\"x\":37,\"y\":40}],\"version\":1},\"passport_control\":{\"id\":\"passport_control\",\"name\":\"Passport Control\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6c2\",\"native\":\"🛂\",\"x\":37,\"y\":49}],\"version\":1},\"customs\":{\"id\":\"customs\",\"name\":\"Customs\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6c3\",\"native\":\"🛃\",\"x\":37,\"y\":50}],\"version\":1},\"baggage_claim\":{\"id\":\"baggage_claim\",\"name\":\"Baggage Claim\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6c4\",\"native\":\"🛄\",\"x\":37,\"y\":51}],\"version\":1},\"left_luggage\":{\"id\":\"left_luggage\",\"name\":\"Left Luggage\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6c5\",\"native\":\"🛅\",\"x\":37,\"y\":52}],\"version\":1},\"warning\":{\"id\":\"warning\",\"name\":\"Warning\",\"keywords\":[],\"skins\":[{\"unified\":\"26a0-fe0f\",\"native\":\"⚠️\",\"x\":57,\"y\":37}],\"version\":1},\"children_crossing\":{\"id\":\"children_crossing\",\"name\":\"Children Crossing\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b8\",\"native\":\"🚸\",\"x\":37,\"y\":34}],\"version\":1},\"no_entry\":{\"id\":\"no_entry\",\"name\":\"No Entry\",\"keywords\":[],\"skins\":[{\"unified\":\"26d4\",\"native\":\"⛔\",\"x\":57,\"y\":53}],\"version\":1},\"no_entry_sign\":{\"id\":\"no_entry_sign\",\"name\":\"Prohibited\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ab\",\"native\":\"🚫\",\"x\":36,\"y\":31}],\"version\":1},\"no_bicycles\":{\"id\":\"no_bicycles\",\"name\":\"No Bicycles\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b3\",\"native\":\"🚳\",\"x\":36,\"y\":39}],\"version\":1},\"no_smoking\":{\"id\":\"no_smoking\",\"name\":\"No Smoking\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6ad\",\"native\":\"🚭\",\"x\":36,\"y\":33}],\"version\":1},\"do_not_litter\":{\"id\":\"do_not_litter\",\"name\":\"No Littering\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6af\",\"native\":\"🚯\",\"x\":36,\"y\":35}],\"version\":1},\"non-potable_water\":{\"id\":\"non-potable_water\",\"name\":\"Non-Potable Water\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b1\",\"native\":\"🚱\",\"x\":36,\"y\":37}],\"version\":1},\"no_pedestrians\":{\"id\":\"no_pedestrians\",\"name\":\"No Pedestrians\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6b7\",\"native\":\"🚷\",\"x\":37,\"y\":33}],\"version\":1},\"no_mobile_phones\":{\"id\":\"no_mobile_phones\",\"name\":\"No Mobile Phones\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f5\",\"native\":\"📵\",\"x\":29,\"y\":15}],\"version\":1},\"underage\":{\"id\":\"underage\",\"name\":\"No One Under Eighteen\",\"keywords\":[],\"skins\":[{\"unified\":\"1f51e\",\"native\":\"🔞\",\"x\":29,\"y\":55}],\"version\":1},\"radioactive_sign\":{\"id\":\"radioactive_sign\",\"name\":\"Radioactive\",\"keywords\":[],\"skins\":[{\"unified\":\"2622-fe0f\",\"native\":\"☢️\",\"x\":56,\"y\":57}],\"version\":1},\"biohazard_sign\":{\"id\":\"biohazard_sign\",\"name\":\"Biohazard\",\"keywords\":[],\"skins\":[{\"unified\":\"2623-fe0f\",\"native\":\"☣️\",\"x\":56,\"y\":58}],\"version\":1},\"arrow_up\":{\"id\":\"arrow_up\",\"name\":\"Up Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2b06-fe0f\",\"native\":\"⬆️\",\"x\":59,\"y\":20}],\"version\":1},\"arrow_upper_right\":{\"id\":\"arrow_upper_right\",\"name\":\"Up-Right Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2197-fe0f\",\"native\":\"↗️\",\"x\":56,\"y\":8}],\"version\":1},\"arrow_right\":{\"id\":\"arrow_right\",\"name\":\"Right Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"27a1-fe0f\",\"native\":\"➡️\",\"x\":59,\"y\":14}],\"version\":1},\"arrow_lower_right\":{\"id\":\"arrow_lower_right\",\"name\":\"South East Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2198-fe0f\",\"native\":\"↘️\",\"x\":56,\"y\":9}],\"version\":1},\"arrow_down\":{\"id\":\"arrow_down\",\"name\":\"Down Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2b07-fe0f\",\"native\":\"⬇️\",\"x\":59,\"y\":21}],\"version\":1},\"arrow_lower_left\":{\"id\":\"arrow_lower_left\",\"name\":\"Down-Left Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2199-fe0f\",\"native\":\"↙️\",\"x\":56,\"y\":10}],\"version\":1},\"arrow_left\":{\"id\":\"arrow_left\",\"name\":\"Left Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2b05-fe0f\",\"native\":\"⬅️\",\"x\":59,\"y\":19}],\"version\":1},\"arrow_upper_left\":{\"id\":\"arrow_upper_left\",\"name\":\"Up-Left Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2196-fe0f\",\"native\":\"↖️\",\"x\":56,\"y\":7}],\"version\":1},\"arrow_up_down\":{\"id\":\"arrow_up_down\",\"name\":\"Up Down Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2195-fe0f\",\"native\":\"↕️\",\"x\":56,\"y\":6}],\"version\":1},\"left_right_arrow\":{\"id\":\"left_right_arrow\",\"name\":\"Left Right Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"2194-fe0f\",\"native\":\"↔️\",\"x\":56,\"y\":5}],\"version\":1},\"leftwards_arrow_with_hook\":{\"id\":\"leftwards_arrow_with_hook\",\"name\":\"Right Arrow Curving Left\",\"keywords\":[],\"skins\":[{\"unified\":\"21a9-fe0f\",\"native\":\"↩️\",\"x\":56,\"y\":11}],\"version\":1},\"arrow_right_hook\":{\"id\":\"arrow_right_hook\",\"name\":\"Left Arrow Curving Right\",\"keywords\":[],\"skins\":[{\"unified\":\"21aa-fe0f\",\"native\":\"↪️\",\"x\":56,\"y\":12}],\"version\":1},\"arrow_heading_up\":{\"id\":\"arrow_heading_up\",\"name\":\"Right Arrow Curving Up\",\"keywords\":[],\"skins\":[{\"unified\":\"2934-fe0f\",\"native\":\"⤴️\",\"x\":59,\"y\":17}],\"version\":1},\"arrow_heading_down\":{\"id\":\"arrow_heading_down\",\"name\":\"Right Arrow Curving Down\",\"keywords\":[],\"skins\":[{\"unified\":\"2935-fe0f\",\"native\":\"⤵️\",\"x\":59,\"y\":18}],\"version\":1},\"arrows_clockwise\":{\"id\":\"arrows_clockwise\",\"name\":\"Clockwise Vertical Arrows\",\"keywords\":[],\"skins\":[{\"unified\":\"1f503\",\"native\":\"🔃\",\"x\":29,\"y\":28}],\"version\":1},\"arrows_counterclockwise\":{\"id\":\"arrows_counterclockwise\",\"name\":\"Counterclockwise Arrows Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f504\",\"native\":\"🔄\",\"x\":29,\"y\":29}],\"version\":1},\"back\":{\"id\":\"back\",\"name\":\"Back Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f519\",\"native\":\"🔙\",\"x\":29,\"y\":50}],\"version\":1},\"end\":{\"id\":\"end\",\"name\":\"End Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f51a\",\"native\":\"🔚\",\"x\":29,\"y\":51}],\"version\":1},\"on\":{\"id\":\"on\",\"name\":\"On! Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f51b\",\"native\":\"🔛\",\"x\":29,\"y\":52}],\"version\":1},\"soon\":{\"id\":\"soon\",\"name\":\"Soon Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f51c\",\"native\":\"🔜\",\"x\":29,\"y\":53}],\"version\":1},\"top\":{\"id\":\"top\",\"name\":\"Top Arrow\",\"keywords\":[],\"skins\":[{\"unified\":\"1f51d\",\"native\":\"🔝\",\"x\":29,\"y\":54}],\"version\":1},\"place_of_worship\":{\"id\":\"place_of_worship\",\"name\":\"Place of Worship\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6d0\",\"native\":\"🛐\",\"x\":38,\"y\":2}],\"version\":1},\"atom_symbol\":{\"id\":\"atom_symbol\",\"name\":\"Atom Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"269b-fe0f\",\"native\":\"⚛️\",\"x\":57,\"y\":35}],\"version\":1},\"om_symbol\":{\"id\":\"om_symbol\",\"name\":\"Om\",\"keywords\":[],\"skins\":[{\"unified\":\"1f549-fe0f\",\"native\":\"🕉️\",\"x\":30,\"y\":26}],\"version\":1},\"star_of_david\":{\"id\":\"star_of_david\",\"name\":\"Star of David\",\"keywords\":[],\"skins\":[{\"unified\":\"2721-fe0f\",\"native\":\"✡️\",\"x\":58,\"y\":56}],\"version\":1},\"wheel_of_dharma\":{\"id\":\"wheel_of_dharma\",\"name\":\"Wheel of Dharma\",\"keywords\":[],\"skins\":[{\"unified\":\"2638-fe0f\",\"native\":\"☸️\",\"x\":57,\"y\":2}],\"version\":1},\"yin_yang\":{\"id\":\"yin_yang\",\"name\":\"Yin Yang\",\"keywords\":[],\"skins\":[{\"unified\":\"262f-fe0f\",\"native\":\"☯️\",\"x\":57,\"y\":1}],\"version\":1},\"latin_cross\":{\"id\":\"latin_cross\",\"name\":\"Latin Cross\",\"keywords\":[],\"skins\":[{\"unified\":\"271d-fe0f\",\"native\":\"✝️\",\"x\":58,\"y\":55}],\"version\":1},\"orthodox_cross\":{\"id\":\"orthodox_cross\",\"name\":\"Orthodox Cross\",\"keywords\":[],\"skins\":[{\"unified\":\"2626-fe0f\",\"native\":\"☦️\",\"x\":56,\"y\":59}],\"version\":1},\"star_and_crescent\":{\"id\":\"star_and_crescent\",\"name\":\"Star and Crescent\",\"keywords\":[],\"skins\":[{\"unified\":\"262a-fe0f\",\"native\":\"☪️\",\"x\":56,\"y\":60}],\"version\":1},\"peace_symbol\":{\"id\":\"peace_symbol\",\"name\":\"Peace Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"262e-fe0f\",\"native\":\"☮️\",\"x\":57,\"y\":0}],\"version\":1},\"menorah_with_nine_branches\":{\"id\":\"menorah_with_nine_branches\",\"name\":\"Menorah\",\"keywords\":[],\"skins\":[{\"unified\":\"1f54e\",\"native\":\"🕎\",\"x\":30,\"y\":31}],\"version\":1},\"six_pointed_star\":{\"id\":\"six_pointed_star\",\"name\":\"Dotted Six-Pointed Star\",\"keywords\":[],\"skins\":[{\"unified\":\"1f52f\",\"native\":\"🔯\",\"x\":30,\"y\":11}],\"version\":1},\"aries\":{\"id\":\"aries\",\"name\":\"Aries\",\"keywords\":[],\"skins\":[{\"unified\":\"2648\",\"native\":\"♈\",\"x\":57,\"y\":7}],\"version\":1},\"taurus\":{\"id\":\"taurus\",\"name\":\"Taurus\",\"keywords\":[],\"skins\":[{\"unified\":\"2649\",\"native\":\"♉\",\"x\":57,\"y\":8}],\"version\":1},\"gemini\":{\"id\":\"gemini\",\"name\":\"Gemini\",\"keywords\":[],\"skins\":[{\"unified\":\"264a\",\"native\":\"♊\",\"x\":57,\"y\":9}],\"version\":1},\"cancer\":{\"id\":\"cancer\",\"name\":\"Cancer\",\"keywords\":[],\"skins\":[{\"unified\":\"264b\",\"native\":\"♋\",\"x\":57,\"y\":10}],\"version\":1},\"leo\":{\"id\":\"leo\",\"name\":\"Leo\",\"keywords\":[],\"skins\":[{\"unified\":\"264c\",\"native\":\"♌\",\"x\":57,\"y\":11}],\"version\":1},\"virgo\":{\"id\":\"virgo\",\"name\":\"Virgo\",\"keywords\":[],\"skins\":[{\"unified\":\"264d\",\"native\":\"♍\",\"x\":57,\"y\":12}],\"version\":1},\"libra\":{\"id\":\"libra\",\"name\":\"Libra\",\"keywords\":[],\"skins\":[{\"unified\":\"264e\",\"native\":\"♎\",\"x\":57,\"y\":13}],\"version\":1},\"scorpius\":{\"id\":\"scorpius\",\"name\":\"Scorpio\",\"keywords\":[],\"skins\":[{\"unified\":\"264f\",\"native\":\"♏\",\"x\":57,\"y\":14}],\"version\":1},\"sagittarius\":{\"id\":\"sagittarius\",\"name\":\"Sagittarius\",\"keywords\":[],\"skins\":[{\"unified\":\"2650\",\"native\":\"♐\",\"x\":57,\"y\":15}],\"version\":1},\"capricorn\":{\"id\":\"capricorn\",\"name\":\"Capricorn\",\"keywords\":[],\"skins\":[{\"unified\":\"2651\",\"native\":\"♑\",\"x\":57,\"y\":16}],\"version\":1},\"aquarius\":{\"id\":\"aquarius\",\"name\":\"Aquarius\",\"keywords\":[],\"skins\":[{\"unified\":\"2652\",\"native\":\"♒\",\"x\":57,\"y\":17}],\"version\":1},\"pisces\":{\"id\":\"pisces\",\"name\":\"Pisces\",\"keywords\":[],\"skins\":[{\"unified\":\"2653\",\"native\":\"♓\",\"x\":57,\"y\":18}],\"version\":1},\"ophiuchus\":{\"id\":\"ophiuchus\",\"name\":\"Ophiuchus\",\"keywords\":[],\"skins\":[{\"unified\":\"26ce\",\"native\":\"⛎\",\"x\":57,\"y\":49}],\"version\":1},\"twisted_rightwards_arrows\":{\"id\":\"twisted_rightwards_arrows\",\"name\":\"Shuffle Tracks Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f500\",\"native\":\"🔀\",\"x\":29,\"y\":25}],\"version\":1},\"repeat\":{\"id\":\"repeat\",\"name\":\"Repeat Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f501\",\"native\":\"🔁\",\"x\":29,\"y\":26}],\"version\":1},\"repeat_one\":{\"id\":\"repeat_one\",\"name\":\"Repeat Single Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f502\",\"native\":\"🔂\",\"x\":29,\"y\":27}],\"version\":1},\"arrow_forward\":{\"id\":\"arrow_forward\",\"name\":\"Play Button\",\"keywords\":[],\"skins\":[{\"unified\":\"25b6-fe0f\",\"native\":\"▶️\",\"x\":56,\"y\":34}],\"version\":1},\"fast_forward\":{\"id\":\"fast_forward\",\"name\":\"Fast-Forward Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23e9\",\"native\":\"⏩\",\"x\":56,\"y\":17}],\"version\":1},\"black_right_pointing_double_triangle_with_vertical_bar\":{\"id\":\"black_right_pointing_double_triangle_with_vertical_bar\",\"name\":\"Next Track Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23ed-fe0f\",\"native\":\"⏭️\",\"x\":56,\"y\":21}],\"version\":1},\"black_right_pointing_triangle_with_double_vertical_bar\":{\"id\":\"black_right_pointing_triangle_with_double_vertical_bar\",\"name\":\"Play or Pause Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23ef-fe0f\",\"native\":\"⏯️\",\"x\":56,\"y\":23}],\"version\":1},\"arrow_backward\":{\"id\":\"arrow_backward\",\"name\":\"Reverse Button\",\"keywords\":[],\"skins\":[{\"unified\":\"25c0-fe0f\",\"native\":\"◀️\",\"x\":56,\"y\":35}],\"version\":1},\"rewind\":{\"id\":\"rewind\",\"name\":\"Fast Reverse Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23ea\",\"native\":\"⏪\",\"x\":56,\"y\":18}],\"version\":1},\"black_left_pointing_double_triangle_with_vertical_bar\":{\"id\":\"black_left_pointing_double_triangle_with_vertical_bar\",\"name\":\"Last Track Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23ee-fe0f\",\"native\":\"⏮️\",\"x\":56,\"y\":22}],\"version\":1},\"arrow_up_small\":{\"id\":\"arrow_up_small\",\"name\":\"Upwards Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f53c\",\"native\":\"🔼\",\"x\":30,\"y\":24}],\"version\":1},\"arrow_double_up\":{\"id\":\"arrow_double_up\",\"name\":\"Fast Up Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23eb\",\"native\":\"⏫\",\"x\":56,\"y\":19}],\"version\":1},\"arrow_down_small\":{\"id\":\"arrow_down_small\",\"name\":\"Downwards Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f53d\",\"native\":\"🔽\",\"x\":30,\"y\":25}],\"version\":1},\"arrow_double_down\":{\"id\":\"arrow_double_down\",\"name\":\"Fast Down Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23ec\",\"native\":\"⏬\",\"x\":56,\"y\":20}],\"version\":1},\"double_vertical_bar\":{\"id\":\"double_vertical_bar\",\"name\":\"Pause Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23f8-fe0f\",\"native\":\"⏸️\",\"x\":56,\"y\":28}],\"version\":1},\"black_square_for_stop\":{\"id\":\"black_square_for_stop\",\"name\":\"Stop Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23f9-fe0f\",\"native\":\"⏹️\",\"x\":56,\"y\":29}],\"version\":1},\"black_circle_for_record\":{\"id\":\"black_circle_for_record\",\"name\":\"Record Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23fa-fe0f\",\"native\":\"⏺️\",\"x\":56,\"y\":30}],\"version\":1},\"eject\":{\"id\":\"eject\",\"name\":\"Eject Button\",\"keywords\":[],\"skins\":[{\"unified\":\"23cf-fe0f\",\"native\":\"⏏️\",\"x\":56,\"y\":16}],\"version\":1},\"cinema\":{\"id\":\"cinema\",\"name\":\"Cinema\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3a6\",\"native\":\"🎦\",\"x\":7,\"y\":41}],\"version\":1},\"low_brightness\":{\"id\":\"low_brightness\",\"name\":\"Dim Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f505\",\"native\":\"🔅\",\"x\":29,\"y\":30}],\"version\":1},\"high_brightness\":{\"id\":\"high_brightness\",\"name\":\"Bright Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f506\",\"native\":\"🔆\",\"x\":29,\"y\":31}],\"version\":1},\"signal_strength\":{\"id\":\"signal_strength\",\"name\":\"Antenna Bars\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f6\",\"native\":\"📶\",\"x\":29,\"y\":16}],\"version\":1},\"vibration_mode\":{\"id\":\"vibration_mode\",\"name\":\"Vibration Mode\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f3\",\"native\":\"📳\",\"x\":29,\"y\":13}],\"version\":1},\"mobile_phone_off\":{\"id\":\"mobile_phone_off\",\"name\":\"Mobile Phone off\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4f4\",\"native\":\"📴\",\"x\":29,\"y\":14}],\"version\":1},\"female_sign\":{\"id\":\"female_sign\",\"name\":\"Female Sign\",\"keywords\":[],\"skins\":[{\"unified\":\"2640-fe0f\",\"native\":\"♀️\",\"x\":57,\"y\":5}],\"version\":4},\"male_sign\":{\"id\":\"male_sign\",\"name\":\"Male Sign\",\"keywords\":[],\"skins\":[{\"unified\":\"2642-fe0f\",\"native\":\"♂️\",\"x\":57,\"y\":6}],\"version\":4},\"heavy_multiplication_x\":{\"id\":\"heavy_multiplication_x\",\"name\":\"Multiply\",\"keywords\":[],\"skins\":[{\"unified\":\"2716-fe0f\",\"native\":\"✖️\",\"x\":58,\"y\":54}],\"version\":1},\"heavy_plus_sign\":{\"id\":\"heavy_plus_sign\",\"name\":\"Plus\",\"keywords\":[],\"skins\":[{\"unified\":\"2795\",\"native\":\"➕\",\"x\":59,\"y\":11}],\"version\":1},\"heavy_minus_sign\":{\"id\":\"heavy_minus_sign\",\"name\":\"Minus\",\"keywords\":[],\"skins\":[{\"unified\":\"2796\",\"native\":\"➖\",\"x\":59,\"y\":12}],\"version\":1},\"heavy_division_sign\":{\"id\":\"heavy_division_sign\",\"name\":\"Divide\",\"keywords\":[],\"skins\":[{\"unified\":\"2797\",\"native\":\"➗\",\"x\":59,\"y\":13}],\"version\":1},\"bangbang\":{\"id\":\"bangbang\",\"name\":\"Double Exclamation Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"203c-fe0f\",\"native\":\"‼️\",\"x\":56,\"y\":1}],\"version\":1},\"interrobang\":{\"id\":\"interrobang\",\"name\":\"Exclamation Question Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2049-fe0f\",\"native\":\"⁉️\",\"x\":56,\"y\":2}],\"version\":1},\"question\":{\"id\":\"question\",\"name\":\"Red Question Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2753\",\"native\":\"❓\",\"x\":59,\"y\":3}],\"version\":1},\"grey_question\":{\"id\":\"grey_question\",\"name\":\"White Question Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2754\",\"native\":\"❔\",\"x\":59,\"y\":4}],\"version\":1},\"grey_exclamation\":{\"id\":\"grey_exclamation\",\"name\":\"White Exclamation Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2755\",\"native\":\"❕\",\"x\":59,\"y\":5}],\"version\":1},\"exclamation\":{\"id\":\"exclamation\",\"name\":\"Red Exclamation Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2757\",\"native\":\"❗\",\"x\":59,\"y\":6}],\"version\":1},\"wavy_dash\":{\"id\":\"wavy_dash\",\"name\":\"Wavy Dash\",\"keywords\":[],\"skins\":[{\"unified\":\"3030-fe0f\",\"native\":\"〰️\",\"x\":59,\"y\":26}],\"version\":1},\"currency_exchange\":{\"id\":\"currency_exchange\",\"name\":\"Currency Exchange\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b1\",\"native\":\"💱\",\"x\":28,\"y\":8}],\"version\":1},\"heavy_dollar_sign\":{\"id\":\"heavy_dollar_sign\",\"name\":\"Heavy Dollar Sign\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4b2\",\"native\":\"💲\",\"x\":28,\"y\":9}],\"version\":1},\"medical_symbol\":{\"id\":\"medical_symbol\",\"name\":\"Medical Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"2695-fe0f\",\"native\":\"⚕️\",\"x\":57,\"y\":31}],\"version\":4},\"recycle\":{\"id\":\"recycle\",\"name\":\"Recycling Symbol\",\"keywords\":[],\"skins\":[{\"unified\":\"267b-fe0f\",\"native\":\"♻️\",\"x\":57,\"y\":25}],\"version\":1},\"fleur_de_lis\":{\"id\":\"fleur_de_lis\",\"name\":\"Fleur-De-Lis\",\"keywords\":[],\"skins\":[{\"unified\":\"269c-fe0f\",\"native\":\"⚜️\",\"x\":57,\"y\":36}],\"version\":1},\"trident\":{\"id\":\"trident\",\"name\":\"Trident Emblem\",\"keywords\":[],\"skins\":[{\"unified\":\"1f531\",\"native\":\"🔱\",\"x\":30,\"y\":13}],\"version\":1},\"name_badge\":{\"id\":\"name_badge\",\"name\":\"Name Badge\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4db\",\"native\":\"📛\",\"x\":28,\"y\":50}],\"version\":1},\"beginner\":{\"id\":\"beginner\",\"name\":\"Japanese Symbol for Beginner\",\"keywords\":[],\"skins\":[{\"unified\":\"1f530\",\"native\":\"🔰\",\"x\":30,\"y\":12}],\"version\":1},\"o\":{\"id\":\"o\",\"name\":\"Hollow Red Circle\",\"keywords\":[],\"skins\":[{\"unified\":\"2b55\",\"native\":\"⭕\",\"x\":59,\"y\":25}],\"version\":1},\"white_check_mark\":{\"id\":\"white_check_mark\",\"name\":\"Check Mark Button\",\"keywords\":[],\"skins\":[{\"unified\":\"2705\",\"native\":\"✅\",\"x\":58,\"y\":24}],\"version\":1},\"ballot_box_with_check\":{\"id\":\"ballot_box_with_check\",\"name\":\"Check Box with Check\",\"keywords\":[],\"skins\":[{\"unified\":\"2611-fe0f\",\"native\":\"☑️\",\"x\":56,\"y\":46}],\"version\":1},\"heavy_check_mark\":{\"id\":\"heavy_check_mark\",\"name\":\"Check Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2714-fe0f\",\"native\":\"✔️\",\"x\":58,\"y\":53}],\"version\":1},\"x\":{\"id\":\"x\",\"name\":\"Cross Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"274c\",\"native\":\"❌\",\"x\":59,\"y\":1}],\"version\":1},\"negative_squared_cross_mark\":{\"id\":\"negative_squared_cross_mark\",\"name\":\"Cross Mark Button\",\"keywords\":[],\"skins\":[{\"unified\":\"274e\",\"native\":\"❎\",\"x\":59,\"y\":2}],\"version\":1},\"curly_loop\":{\"id\":\"curly_loop\",\"name\":\"Curly Loop\",\"keywords\":[],\"skins\":[{\"unified\":\"27b0\",\"native\":\"➰\",\"x\":59,\"y\":15}],\"version\":1},\"loop\":{\"id\":\"loop\",\"name\":\"Double Curly Loop\",\"keywords\":[],\"skins\":[{\"unified\":\"27bf\",\"native\":\"➿\",\"x\":59,\"y\":16}],\"version\":1},\"part_alternation_mark\":{\"id\":\"part_alternation_mark\",\"name\":\"Part Alternation Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"303d-fe0f\",\"native\":\"〽️\",\"x\":59,\"y\":27}],\"version\":1},\"eight_spoked_asterisk\":{\"id\":\"eight_spoked_asterisk\",\"name\":\"Eight Spoked Asterisk\",\"keywords\":[],\"skins\":[{\"unified\":\"2733-fe0f\",\"native\":\"✳️\",\"x\":58,\"y\":58}],\"version\":1},\"eight_pointed_black_star\":{\"id\":\"eight_pointed_black_star\",\"name\":\"Eight-Pointed Star\",\"keywords\":[],\"skins\":[{\"unified\":\"2734-fe0f\",\"native\":\"✴️\",\"x\":58,\"y\":59}],\"version\":1},\"sparkle\":{\"id\":\"sparkle\",\"name\":\"Sparkle\",\"keywords\":[],\"skins\":[{\"unified\":\"2747-fe0f\",\"native\":\"❇️\",\"x\":59,\"y\":0}],\"version\":1},\"copyright\":{\"id\":\"copyright\",\"name\":\"Copyright\",\"keywords\":[],\"skins\":[{\"unified\":\"00a9-fe0f\",\"native\":\"©️\",\"x\":0,\"y\":12}],\"version\":1},\"registered\":{\"id\":\"registered\",\"name\":\"Registered\",\"keywords\":[],\"skins\":[{\"unified\":\"00ae-fe0f\",\"native\":\"®️\",\"x\":0,\"y\":13}],\"version\":1},\"tm\":{\"id\":\"tm\",\"name\":\"Trade Mark\",\"keywords\":[],\"skins\":[{\"unified\":\"2122-fe0f\",\"native\":\"™️\",\"x\":56,\"y\":3}],\"version\":1},\"hash\":{\"id\":\"hash\",\"name\":\"Hash Key\",\"keywords\":[],\"skins\":[{\"unified\":\"0023-fe0f-20e3\",\"native\":\"#️⃣\",\"x\":0,\"y\":0}],\"version\":1},\"keycap_star\":{\"id\":\"keycap_star\",\"name\":\"Keycap: *\",\"keywords\":[],\"skins\":[{\"unified\":\"002a-fe0f-20e3\",\"native\":\"*️⃣\",\"x\":0,\"y\":1}],\"version\":2},\"zero\":{\"id\":\"zero\",\"name\":\"Keycap 0\",\"keywords\":[],\"skins\":[{\"unified\":\"0030-fe0f-20e3\",\"native\":\"0️⃣\",\"x\":0,\"y\":2}],\"version\":1},\"one\":{\"id\":\"one\",\"name\":\"Keycap 1\",\"keywords\":[],\"skins\":[{\"unified\":\"0031-fe0f-20e3\",\"native\":\"1️⃣\",\"x\":0,\"y\":3}],\"version\":1},\"two\":{\"id\":\"two\",\"name\":\"Keycap 2\",\"keywords\":[],\"skins\":[{\"unified\":\"0032-fe0f-20e3\",\"native\":\"2️⃣\",\"x\":0,\"y\":4}],\"version\":1},\"three\":{\"id\":\"three\",\"name\":\"Keycap 3\",\"keywords\":[],\"skins\":[{\"unified\":\"0033-fe0f-20e3\",\"native\":\"3️⃣\",\"x\":0,\"y\":5}],\"version\":1},\"four\":{\"id\":\"four\",\"name\":\"Keycap 4\",\"keywords\":[],\"skins\":[{\"unified\":\"0034-fe0f-20e3\",\"native\":\"4️⃣\",\"x\":0,\"y\":6}],\"version\":1},\"five\":{\"id\":\"five\",\"name\":\"Keycap 5\",\"keywords\":[],\"skins\":[{\"unified\":\"0035-fe0f-20e3\",\"native\":\"5️⃣\",\"x\":0,\"y\":7}],\"version\":1},\"six\":{\"id\":\"six\",\"name\":\"Keycap 6\",\"keywords\":[],\"skins\":[{\"unified\":\"0036-fe0f-20e3\",\"native\":\"6️⃣\",\"x\":0,\"y\":8}],\"version\":1},\"seven\":{\"id\":\"seven\",\"name\":\"Keycap 7\",\"keywords\":[],\"skins\":[{\"unified\":\"0037-fe0f-20e3\",\"native\":\"7️⃣\",\"x\":0,\"y\":9}],\"version\":1},\"eight\":{\"id\":\"eight\",\"name\":\"Keycap 8\",\"keywords\":[],\"skins\":[{\"unified\":\"0038-fe0f-20e3\",\"native\":\"8️⃣\",\"x\":0,\"y\":10}],\"version\":1},\"nine\":{\"id\":\"nine\",\"name\":\"Keycap 9\",\"keywords\":[],\"skins\":[{\"unified\":\"0039-fe0f-20e3\",\"native\":\"9️⃣\",\"x\":0,\"y\":11}],\"version\":1},\"keycap_ten\":{\"id\":\"keycap_ten\",\"name\":\"Keycap 10\",\"keywords\":[],\"skins\":[{\"unified\":\"1f51f\",\"native\":\"🔟\",\"x\":29,\"y\":56}],\"version\":1},\"capital_abcd\":{\"id\":\"capital_abcd\",\"name\":\"Input Latin Uppercase\",\"keywords\":[],\"skins\":[{\"unified\":\"1f520\",\"native\":\"🔠\",\"x\":29,\"y\":57}],\"version\":1},\"abcd\":{\"id\":\"abcd\",\"name\":\"Input Latin Lowercase\",\"keywords\":[],\"skins\":[{\"unified\":\"1f521\",\"native\":\"🔡\",\"x\":29,\"y\":58}],\"version\":1},\"symbols\":{\"id\":\"symbols\",\"name\":\"Input Symbols\",\"keywords\":[],\"skins\":[{\"unified\":\"1f523\",\"native\":\"🔣\",\"x\":29,\"y\":60}],\"version\":1},\"abc\":{\"id\":\"abc\",\"name\":\"Input Latin Letters\",\"keywords\":[],\"skins\":[{\"unified\":\"1f524\",\"native\":\"🔤\",\"x\":30,\"y\":0}],\"version\":1},\"a\":{\"id\":\"a\",\"name\":\"A Button (blood Type)\",\"keywords\":[],\"skins\":[{\"unified\":\"1f170-fe0f\",\"native\":\"🅰️\",\"x\":0,\"y\":16}],\"version\":1},\"ab\":{\"id\":\"ab\",\"name\":\"Negative Squared Ab\",\"keywords\":[],\"skins\":[{\"unified\":\"1f18e\",\"native\":\"🆎\",\"x\":0,\"y\":20}],\"version\":1},\"b\":{\"id\":\"b\",\"name\":\"B Button (blood Type)\",\"keywords\":[],\"skins\":[{\"unified\":\"1f171-fe0f\",\"native\":\"🅱️\",\"x\":0,\"y\":17}],\"version\":1},\"cl\":{\"id\":\"cl\",\"name\":\"Cl Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f191\",\"native\":\"🆑\",\"x\":0,\"y\":21}],\"version\":1},\"cool\":{\"id\":\"cool\",\"name\":\"Cool Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f192\",\"native\":\"🆒\",\"x\":0,\"y\":22}],\"version\":1},\"free\":{\"id\":\"free\",\"name\":\"Free Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f193\",\"native\":\"🆓\",\"x\":0,\"y\":23}],\"version\":1},\"information_source\":{\"id\":\"information_source\",\"name\":\"Information\",\"keywords\":[],\"skins\":[{\"unified\":\"2139-fe0f\",\"native\":\"ℹ️\",\"x\":56,\"y\":4}],\"version\":1},\"id\":{\"id\":\"id\",\"name\":\"Id Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f194\",\"native\":\"🆔\",\"x\":0,\"y\":24}],\"version\":1},\"m\":{\"id\":\"m\",\"name\":\"Circled M\",\"keywords\":[],\"skins\":[{\"unified\":\"24c2-fe0f\",\"native\":\"Ⓜ️\",\"x\":56,\"y\":31}],\"version\":1},\"new\":{\"id\":\"new\",\"name\":\"New Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f195\",\"native\":\"🆕\",\"x\":0,\"y\":25}],\"version\":1},\"ng\":{\"id\":\"ng\",\"name\":\"Ng Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f196\",\"native\":\"🆖\",\"x\":0,\"y\":26}],\"version\":1},\"o2\":{\"id\":\"o2\",\"name\":\"O Button (blood Type)\",\"keywords\":[],\"skins\":[{\"unified\":\"1f17e-fe0f\",\"native\":\"🅾️\",\"x\":0,\"y\":18}],\"version\":1},\"ok\":{\"id\":\"ok\",\"name\":\"Ok Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f197\",\"native\":\"🆗\",\"x\":0,\"y\":27}],\"version\":1},\"parking\":{\"id\":\"parking\",\"name\":\"P Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f17f-fe0f\",\"native\":\"🅿️\",\"x\":0,\"y\":19}],\"version\":1},\"sos\":{\"id\":\"sos\",\"name\":\"Sos Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f198\",\"native\":\"🆘\",\"x\":0,\"y\":28}],\"version\":1},\"up\":{\"id\":\"up\",\"name\":\"Up! Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f199\",\"native\":\"🆙\",\"x\":0,\"y\":29}],\"version\":1},\"vs\":{\"id\":\"vs\",\"name\":\"Vs Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f19a\",\"native\":\"🆚\",\"x\":0,\"y\":30}],\"version\":1},\"koko\":{\"id\":\"koko\",\"name\":\"Squared Katakana Koko\",\"keywords\":[],\"skins\":[{\"unified\":\"1f201\",\"native\":\"🈁\",\"x\":4,\"y\":45}],\"version\":1},\"sa\":{\"id\":\"sa\",\"name\":\"Squared Katakana Sa\",\"keywords\":[],\"skins\":[{\"unified\":\"1f202-fe0f\",\"native\":\"🈂️\",\"x\":4,\"y\":46}],\"version\":1},\"u6708\":{\"id\":\"u6708\",\"name\":\"Japanese “monthly Amount” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f237-fe0f\",\"native\":\"🈷️\",\"x\":4,\"y\":54}],\"version\":1},\"u6709\":{\"id\":\"u6709\",\"name\":\"Squared Cjk Unified Ideograph-6709\",\"keywords\":[],\"skins\":[{\"unified\":\"1f236\",\"native\":\"🈶\",\"x\":4,\"y\":53}],\"version\":1},\"u6307\":{\"id\":\"u6307\",\"name\":\"Japanese “reserved” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f22f\",\"native\":\"🈯\",\"x\":4,\"y\":48}],\"version\":1},\"ideograph_advantage\":{\"id\":\"ideograph_advantage\",\"name\":\"Japanese “bargain” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f250\",\"native\":\"🉐\",\"x\":4,\"y\":58}],\"version\":1},\"u5272\":{\"id\":\"u5272\",\"name\":\"Japanese “discount” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f239\",\"native\":\"🈹\",\"x\":4,\"y\":56}],\"version\":1},\"u7121\":{\"id\":\"u7121\",\"name\":\"Japanese “free of Charge” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f21a\",\"native\":\"🈚\",\"x\":4,\"y\":47}],\"version\":1},\"u7981\":{\"id\":\"u7981\",\"name\":\"Japanese “prohibited” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f232\",\"native\":\"🈲\",\"x\":4,\"y\":49}],\"version\":1},\"accept\":{\"id\":\"accept\",\"name\":\"Circled Ideograph Accept\",\"keywords\":[],\"skins\":[{\"unified\":\"1f251\",\"native\":\"🉑\",\"x\":4,\"y\":59}],\"version\":1},\"u7533\":{\"id\":\"u7533\",\"name\":\"Japanese “application” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f238\",\"native\":\"🈸\",\"x\":4,\"y\":55}],\"version\":1},\"u5408\":{\"id\":\"u5408\",\"name\":\"Japanese “passing Grade” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f234\",\"native\":\"🈴\",\"x\":4,\"y\":51}],\"version\":1},\"u7a7a\":{\"id\":\"u7a7a\",\"name\":\"Japanese “vacancy” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f233\",\"native\":\"🈳\",\"x\":4,\"y\":50}],\"version\":1},\"congratulations\":{\"id\":\"congratulations\",\"name\":\"Circled Ideograph Congratulation\",\"keywords\":[],\"skins\":[{\"unified\":\"3297-fe0f\",\"native\":\"㊗️\",\"x\":59,\"y\":28}],\"version\":1},\"secret\":{\"id\":\"secret\",\"name\":\"Circled Ideograph Secret\",\"keywords\":[],\"skins\":[{\"unified\":\"3299-fe0f\",\"native\":\"㊙️\",\"x\":59,\"y\":29}],\"version\":1},\"u55b6\":{\"id\":\"u55b6\",\"name\":\"Squared Cjk Unified Ideograph-55b6\",\"keywords\":[],\"skins\":[{\"unified\":\"1f23a\",\"native\":\"🈺\",\"x\":4,\"y\":57}],\"version\":1},\"u6e80\":{\"id\":\"u6e80\",\"name\":\"Japanese “no Vacancy” Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f235\",\"native\":\"🈵\",\"x\":4,\"y\":52}],\"version\":1},\"red_circle\":{\"id\":\"red_circle\",\"name\":\"Red Circle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f534\",\"native\":\"🔴\",\"x\":30,\"y\":16}],\"version\":1},\"large_blue_circle\":{\"id\":\"large_blue_circle\",\"name\":\"Blue Circle\",\"keywords\":[],\"skins\":[{\"unified\":\"1f535\",\"native\":\"🔵\",\"x\":30,\"y\":17}],\"version\":1},\"black_circle\":{\"id\":\"black_circle\",\"name\":\"Black Circle\",\"keywords\":[],\"skins\":[{\"unified\":\"26ab\",\"native\":\"⚫\",\"x\":57,\"y\":41}],\"version\":1},\"white_circle\":{\"id\":\"white_circle\",\"name\":\"White Circle\",\"keywords\":[],\"skins\":[{\"unified\":\"26aa\",\"native\":\"⚪\",\"x\":57,\"y\":40}],\"version\":1},\"black_large_square\":{\"id\":\"black_large_square\",\"name\":\"Black Large Square\",\"keywords\":[],\"skins\":[{\"unified\":\"2b1b\",\"native\":\"⬛\",\"x\":59,\"y\":22}],\"version\":1},\"white_large_square\":{\"id\":\"white_large_square\",\"name\":\"White Large Square\",\"keywords\":[],\"skins\":[{\"unified\":\"2b1c\",\"native\":\"⬜\",\"x\":59,\"y\":23}],\"version\":1},\"black_medium_square\":{\"id\":\"black_medium_square\",\"name\":\"Black Medium Square\",\"keywords\":[],\"skins\":[{\"unified\":\"25fc-fe0f\",\"native\":\"◼️\",\"x\":56,\"y\":37}],\"version\":1},\"white_medium_square\":{\"id\":\"white_medium_square\",\"name\":\"White Medium Square\",\"keywords\":[],\"skins\":[{\"unified\":\"25fb-fe0f\",\"native\":\"◻️\",\"x\":56,\"y\":36}],\"version\":1},\"black_medium_small_square\":{\"id\":\"black_medium_small_square\",\"name\":\"Black Medium Small Square\",\"keywords\":[],\"skins\":[{\"unified\":\"25fe\",\"native\":\"◾\",\"x\":56,\"y\":39}],\"version\":1},\"white_medium_small_square\":{\"id\":\"white_medium_small_square\",\"name\":\"White Medium Small Square\",\"keywords\":[],\"skins\":[{\"unified\":\"25fd\",\"native\":\"◽\",\"x\":56,\"y\":38}],\"version\":1},\"black_small_square\":{\"id\":\"black_small_square\",\"name\":\"Black Small Square\",\"keywords\":[],\"skins\":[{\"unified\":\"25aa-fe0f\",\"native\":\"▪️\",\"x\":56,\"y\":32}],\"version\":1},\"white_small_square\":{\"id\":\"white_small_square\",\"name\":\"White Small Square\",\"keywords\":[],\"skins\":[{\"unified\":\"25ab-fe0f\",\"native\":\"▫️\",\"x\":56,\"y\":33}],\"version\":1},\"large_orange_diamond\":{\"id\":\"large_orange_diamond\",\"name\":\"Large Orange Diamond\",\"keywords\":[],\"skins\":[{\"unified\":\"1f536\",\"native\":\"🔶\",\"x\":30,\"y\":18}],\"version\":1},\"large_blue_diamond\":{\"id\":\"large_blue_diamond\",\"name\":\"Large Blue Diamond\",\"keywords\":[],\"skins\":[{\"unified\":\"1f537\",\"native\":\"🔷\",\"x\":30,\"y\":19}],\"version\":1},\"small_orange_diamond\":{\"id\":\"small_orange_diamond\",\"name\":\"Small Orange Diamond\",\"keywords\":[],\"skins\":[{\"unified\":\"1f538\",\"native\":\"🔸\",\"x\":30,\"y\":20}],\"version\":1},\"small_blue_diamond\":{\"id\":\"small_blue_diamond\",\"name\":\"Small Blue Diamond\",\"keywords\":[],\"skins\":[{\"unified\":\"1f539\",\"native\":\"🔹\",\"x\":30,\"y\":21}],\"version\":1},\"small_red_triangle\":{\"id\":\"small_red_triangle\",\"name\":\"Red Triangle Pointed Up\",\"keywords\":[],\"skins\":[{\"unified\":\"1f53a\",\"native\":\"🔺\",\"x\":30,\"y\":22}],\"version\":1},\"small_red_triangle_down\":{\"id\":\"small_red_triangle_down\",\"name\":\"Red Triangle Pointed Down\",\"keywords\":[],\"skins\":[{\"unified\":\"1f53b\",\"native\":\"🔻\",\"x\":30,\"y\":23}],\"version\":1},\"diamond_shape_with_a_dot_inside\":{\"id\":\"diamond_shape_with_a_dot_inside\",\"name\":\"Diamond with a Dot\",\"keywords\":[],\"skins\":[{\"unified\":\"1f4a0\",\"native\":\"💠\",\"x\":27,\"y\":47}],\"version\":1},\"radio_button\":{\"id\":\"radio_button\",\"name\":\"Radio Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f518\",\"native\":\"🔘\",\"x\":29,\"y\":49}],\"version\":1},\"white_square_button\":{\"id\":\"white_square_button\",\"name\":\"White Square Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f533\",\"native\":\"🔳\",\"x\":30,\"y\":15}],\"version\":1},\"black_square_button\":{\"id\":\"black_square_button\",\"name\":\"Black Square Button\",\"keywords\":[],\"skins\":[{\"unified\":\"1f532\",\"native\":\"🔲\",\"x\":30,\"y\":14}],\"version\":1},\"checkered_flag\":{\"id\":\"checkered_flag\",\"name\":\"Chequered Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3c1\",\"native\":\"🏁\",\"x\":8,\"y\":7}],\"version\":1},\"triangular_flag_on_post\":{\"id\":\"triangular_flag_on_post\",\"name\":\"Triangular Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f6a9\",\"native\":\"🚩\",\"x\":36,\"y\":29}],\"version\":1},\"crossed_flags\":{\"id\":\"crossed_flags\",\"name\":\"Crossed Flags\",\"keywords\":[],\"skins\":[{\"unified\":\"1f38c\",\"native\":\"🎌\",\"x\":7,\"y\":20}],\"version\":1},\"waving_black_flag\":{\"id\":\"waving_black_flag\",\"name\":\"Black Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f4\",\"native\":\"🏴\",\"x\":10,\"y\":35}],\"version\":1},\"waving_white_flag\":{\"id\":\"waving_white_flag\",\"name\":\"White Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f3-fe0f\",\"native\":\"🏳️\",\"x\":10,\"y\":30}],\"version\":1},\"rainbow-flag\":{\"id\":\"rainbow-flag\",\"name\":\"Rainbow Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f3f3-fe0f-200d-1f308\",\"native\":\"🏳️‍🌈\",\"x\":10,\"y\":28}],\"version\":4},\"flag-ac\":{\"id\":\"flag-ac\",\"name\":\"Ascension Island Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1e8\",\"native\":\"🇦🇨\",\"x\":0,\"y\":31}],\"version\":2},\"flag-ad\":{\"id\":\"flag-ad\",\"name\":\"Andorra Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1e9\",\"native\":\"🇦🇩\",\"x\":0,\"y\":32}],\"version\":2},\"flag-ae\":{\"id\":\"flag-ae\",\"name\":\"United Arab Emirates Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1ea\",\"native\":\"🇦🇪\",\"x\":0,\"y\":33}],\"version\":2},\"flag-af\":{\"id\":\"flag-af\",\"name\":\"Afghanistan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1eb\",\"native\":\"🇦🇫\",\"x\":0,\"y\":34}],\"version\":2},\"flag-ag\":{\"id\":\"flag-ag\",\"name\":\"Antigua & Barbuda Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1ec\",\"native\":\"🇦🇬\",\"x\":0,\"y\":35}],\"version\":2},\"flag-ai\":{\"id\":\"flag-ai\",\"name\":\"Anguilla Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1ee\",\"native\":\"🇦🇮\",\"x\":0,\"y\":36}],\"version\":2},\"flag-al\":{\"id\":\"flag-al\",\"name\":\"Albania Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f1\",\"native\":\"🇦🇱\",\"x\":0,\"y\":37}],\"version\":2},\"flag-am\":{\"id\":\"flag-am\",\"name\":\"Armenia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f2\",\"native\":\"🇦🇲\",\"x\":0,\"y\":38}],\"version\":2},\"flag-ao\":{\"id\":\"flag-ao\",\"name\":\"Angola Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f4\",\"native\":\"🇦🇴\",\"x\":0,\"y\":39}],\"version\":2},\"flag-aq\":{\"id\":\"flag-aq\",\"name\":\"Antarctica Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f6\",\"native\":\"🇦🇶\",\"x\":0,\"y\":40}],\"version\":2},\"flag-ar\":{\"id\":\"flag-ar\",\"name\":\"Argentina Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f7\",\"native\":\"🇦🇷\",\"x\":0,\"y\":41}],\"version\":2},\"flag-as\":{\"id\":\"flag-as\",\"name\":\"American Samoa Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f8\",\"native\":\"🇦🇸\",\"x\":0,\"y\":42}],\"version\":2},\"flag-at\":{\"id\":\"flag-at\",\"name\":\"Austria Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1f9\",\"native\":\"🇦🇹\",\"x\":0,\"y\":43}],\"version\":2},\"flag-au\":{\"id\":\"flag-au\",\"name\":\"Australia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1fa\",\"native\":\"🇦🇺\",\"x\":0,\"y\":44}],\"version\":2},\"flag-aw\":{\"id\":\"flag-aw\",\"name\":\"Aruba Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1fc\",\"native\":\"🇦🇼\",\"x\":0,\"y\":45}],\"version\":2},\"flag-ax\":{\"id\":\"flag-ax\",\"name\":\"Åland Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1fd\",\"native\":\"🇦🇽\",\"x\":0,\"y\":46}],\"version\":2},\"flag-az\":{\"id\":\"flag-az\",\"name\":\"Azerbaijan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e6-1f1ff\",\"native\":\"🇦🇿\",\"x\":0,\"y\":47}],\"version\":2},\"flag-ba\":{\"id\":\"flag-ba\",\"name\":\"Bosnia & Herzegovina Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1e6\",\"native\":\"🇧🇦\",\"x\":0,\"y\":48}],\"version\":2},\"flag-bb\":{\"id\":\"flag-bb\",\"name\":\"Barbados Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1e7\",\"native\":\"🇧🇧\",\"x\":0,\"y\":49}],\"version\":2},\"flag-bd\":{\"id\":\"flag-bd\",\"name\":\"Bangladesh Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1e9\",\"native\":\"🇧🇩\",\"x\":0,\"y\":50}],\"version\":2},\"flag-be\":{\"id\":\"flag-be\",\"name\":\"Belgium Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1ea\",\"native\":\"🇧🇪\",\"x\":0,\"y\":51}],\"version\":2},\"flag-bf\":{\"id\":\"flag-bf\",\"name\":\"Burkina Faso Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1eb\",\"native\":\"🇧🇫\",\"x\":0,\"y\":52}],\"version\":2},\"flag-bg\":{\"id\":\"flag-bg\",\"name\":\"Bulgaria Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1ec\",\"native\":\"🇧🇬\",\"x\":0,\"y\":53}],\"version\":2},\"flag-bh\":{\"id\":\"flag-bh\",\"name\":\"Bahrain Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1ed\",\"native\":\"🇧🇭\",\"x\":0,\"y\":54}],\"version\":2},\"flag-bi\":{\"id\":\"flag-bi\",\"name\":\"Burundi Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1ee\",\"native\":\"🇧🇮\",\"x\":0,\"y\":55}],\"version\":2},\"flag-bj\":{\"id\":\"flag-bj\",\"name\":\"Benin Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1ef\",\"native\":\"🇧🇯\",\"x\":0,\"y\":56}],\"version\":2},\"flag-bl\":{\"id\":\"flag-bl\",\"name\":\"St. Barthélemy Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f1\",\"native\":\"🇧🇱\",\"x\":0,\"y\":57}],\"version\":2},\"flag-bm\":{\"id\":\"flag-bm\",\"name\":\"Bermuda Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f2\",\"native\":\"🇧🇲\",\"x\":0,\"y\":58}],\"version\":2},\"flag-bn\":{\"id\":\"flag-bn\",\"name\":\"Brunei Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f3\",\"native\":\"🇧🇳\",\"x\":0,\"y\":59}],\"version\":2},\"flag-bo\":{\"id\":\"flag-bo\",\"name\":\"Bolivia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f4\",\"native\":\"🇧🇴\",\"x\":0,\"y\":60}],\"version\":2},\"flag-bq\":{\"id\":\"flag-bq\",\"name\":\"Caribbean Netherlands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f6\",\"native\":\"🇧🇶\",\"x\":1,\"y\":0}],\"version\":2},\"flag-br\":{\"id\":\"flag-br\",\"name\":\"Brazil Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f7\",\"native\":\"🇧🇷\",\"x\":1,\"y\":1}],\"version\":2},\"flag-bs\":{\"id\":\"flag-bs\",\"name\":\"Bahamas Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f8\",\"native\":\"🇧🇸\",\"x\":1,\"y\":2}],\"version\":2},\"flag-bt\":{\"id\":\"flag-bt\",\"name\":\"Bhutan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1f9\",\"native\":\"🇧🇹\",\"x\":1,\"y\":3}],\"version\":2},\"flag-bv\":{\"id\":\"flag-bv\",\"name\":\"Bouvet Island Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1fb\",\"native\":\"🇧🇻\",\"x\":1,\"y\":4}],\"version\":2},\"flag-bw\":{\"id\":\"flag-bw\",\"name\":\"Botswana Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1fc\",\"native\":\"🇧🇼\",\"x\":1,\"y\":5}],\"version\":2},\"flag-by\":{\"id\":\"flag-by\",\"name\":\"Belarus Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1fe\",\"native\":\"🇧🇾\",\"x\":1,\"y\":6}],\"version\":2},\"flag-bz\":{\"id\":\"flag-bz\",\"name\":\"Belize Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e7-1f1ff\",\"native\":\"🇧🇿\",\"x\":1,\"y\":7}],\"version\":2},\"flag-ca\":{\"id\":\"flag-ca\",\"name\":\"Canada Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1e6\",\"native\":\"🇨🇦\",\"x\":1,\"y\":8}],\"version\":2},\"flag-cc\":{\"id\":\"flag-cc\",\"name\":\"Cocos (keeling) Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1e8\",\"native\":\"🇨🇨\",\"x\":1,\"y\":9}],\"version\":2},\"flag-cd\":{\"id\":\"flag-cd\",\"name\":\"Congo - Kinshasa Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1e9\",\"native\":\"🇨🇩\",\"x\":1,\"y\":10}],\"version\":2},\"flag-cf\":{\"id\":\"flag-cf\",\"name\":\"Central African Republic Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1eb\",\"native\":\"🇨🇫\",\"x\":1,\"y\":11}],\"version\":2},\"flag-cg\":{\"id\":\"flag-cg\",\"name\":\"Congo - Brazzaville Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1ec\",\"native\":\"🇨🇬\",\"x\":1,\"y\":12}],\"version\":2},\"flag-ch\":{\"id\":\"flag-ch\",\"name\":\"Switzerland Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1ed\",\"native\":\"🇨🇭\",\"x\":1,\"y\":13}],\"version\":2},\"flag-ci\":{\"id\":\"flag-ci\",\"name\":\"Côte D’ivoire Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1ee\",\"native\":\"🇨🇮\",\"x\":1,\"y\":14}],\"version\":2},\"flag-ck\":{\"id\":\"flag-ck\",\"name\":\"Cook Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f0\",\"native\":\"🇨🇰\",\"x\":1,\"y\":15}],\"version\":2},\"flag-cl\":{\"id\":\"flag-cl\",\"name\":\"Chile Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f1\",\"native\":\"🇨🇱\",\"x\":1,\"y\":16}],\"version\":2},\"flag-cm\":{\"id\":\"flag-cm\",\"name\":\"Cameroon Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f2\",\"native\":\"🇨🇲\",\"x\":1,\"y\":17}],\"version\":2},\"cn\":{\"id\":\"cn\",\"name\":\"China Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f3\",\"native\":\"🇨🇳\",\"x\":1,\"y\":18}],\"version\":1},\"flag-co\":{\"id\":\"flag-co\",\"name\":\"Colombia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f4\",\"native\":\"🇨🇴\",\"x\":1,\"y\":19}],\"version\":2},\"flag-cp\":{\"id\":\"flag-cp\",\"name\":\"Clipperton Island Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f5\",\"native\":\"🇨🇵\",\"x\":1,\"y\":20}],\"version\":2},\"flag-cr\":{\"id\":\"flag-cr\",\"name\":\"Costa Rica Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1f7\",\"native\":\"🇨🇷\",\"x\":1,\"y\":21}],\"version\":2},\"flag-cu\":{\"id\":\"flag-cu\",\"name\":\"Cuba Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1fa\",\"native\":\"🇨🇺\",\"x\":1,\"y\":22}],\"version\":2},\"flag-cv\":{\"id\":\"flag-cv\",\"name\":\"Cape Verde Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1fb\",\"native\":\"🇨🇻\",\"x\":1,\"y\":23}],\"version\":2},\"flag-cw\":{\"id\":\"flag-cw\",\"name\":\"Curaçao Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1fc\",\"native\":\"🇨🇼\",\"x\":1,\"y\":24}],\"version\":2},\"flag-cx\":{\"id\":\"flag-cx\",\"name\":\"Christmas Island Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1fd\",\"native\":\"🇨🇽\",\"x\":1,\"y\":25}],\"version\":2},\"flag-cy\":{\"id\":\"flag-cy\",\"name\":\"Cyprus Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1fe\",\"native\":\"🇨🇾\",\"x\":1,\"y\":26}],\"version\":2},\"flag-cz\":{\"id\":\"flag-cz\",\"name\":\"Czechia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e8-1f1ff\",\"native\":\"🇨🇿\",\"x\":1,\"y\":27}],\"version\":2},\"de\":{\"id\":\"de\",\"name\":\"Germany Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1ea\",\"native\":\"🇩🇪\",\"x\":1,\"y\":28}],\"version\":1},\"flag-dg\":{\"id\":\"flag-dg\",\"name\":\"Diego Garcia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1ec\",\"native\":\"🇩🇬\",\"x\":1,\"y\":29}],\"version\":2},\"flag-dj\":{\"id\":\"flag-dj\",\"name\":\"Djibouti Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1ef\",\"native\":\"🇩🇯\",\"x\":1,\"y\":30}],\"version\":2},\"flag-dk\":{\"id\":\"flag-dk\",\"name\":\"Denmark Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1f0\",\"native\":\"🇩🇰\",\"x\":1,\"y\":31}],\"version\":2},\"flag-dm\":{\"id\":\"flag-dm\",\"name\":\"Dominica Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1f2\",\"native\":\"🇩🇲\",\"x\":1,\"y\":32}],\"version\":2},\"flag-do\":{\"id\":\"flag-do\",\"name\":\"Dominican Republic Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1f4\",\"native\":\"🇩🇴\",\"x\":1,\"y\":33}],\"version\":2},\"flag-dz\":{\"id\":\"flag-dz\",\"name\":\"Algeria Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1e9-1f1ff\",\"native\":\"🇩🇿\",\"x\":1,\"y\":34}],\"version\":2},\"flag-ea\":{\"id\":\"flag-ea\",\"name\":\"Ceuta & Melilla Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1e6\",\"native\":\"🇪🇦\",\"x\":1,\"y\":35}],\"version\":2},\"flag-ec\":{\"id\":\"flag-ec\",\"name\":\"Ecuador Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1e8\",\"native\":\"🇪🇨\",\"x\":1,\"y\":36}],\"version\":2},\"flag-ee\":{\"id\":\"flag-ee\",\"name\":\"Estonia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1ea\",\"native\":\"🇪🇪\",\"x\":1,\"y\":37}],\"version\":2},\"flag-eg\":{\"id\":\"flag-eg\",\"name\":\"Egypt Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1ec\",\"native\":\"🇪🇬\",\"x\":1,\"y\":38}],\"version\":2},\"flag-eh\":{\"id\":\"flag-eh\",\"name\":\"Western Sahara Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1ed\",\"native\":\"🇪🇭\",\"x\":1,\"y\":39}],\"version\":2},\"flag-er\":{\"id\":\"flag-er\",\"name\":\"Eritrea Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1f7\",\"native\":\"🇪🇷\",\"x\":1,\"y\":40}],\"version\":2},\"es\":{\"id\":\"es\",\"name\":\"Spain Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1f8\",\"native\":\"🇪🇸\",\"x\":1,\"y\":41}],\"version\":1},\"flag-et\":{\"id\":\"flag-et\",\"name\":\"Ethiopia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1f9\",\"native\":\"🇪🇹\",\"x\":1,\"y\":42}],\"version\":2},\"flag-eu\":{\"id\":\"flag-eu\",\"name\":\"European Union Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ea-1f1fa\",\"native\":\"🇪🇺\",\"x\":1,\"y\":43}],\"version\":2},\"flag-fi\":{\"id\":\"flag-fi\",\"name\":\"Finland Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1eb-1f1ee\",\"native\":\"🇫🇮\",\"x\":1,\"y\":44}],\"version\":2},\"flag-fj\":{\"id\":\"flag-fj\",\"name\":\"Fiji Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1eb-1f1ef\",\"native\":\"🇫🇯\",\"x\":1,\"y\":45}],\"version\":2},\"flag-fk\":{\"id\":\"flag-fk\",\"name\":\"Falkland Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1eb-1f1f0\",\"native\":\"🇫🇰\",\"x\":1,\"y\":46}],\"version\":2},\"flag-fm\":{\"id\":\"flag-fm\",\"name\":\"Micronesia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1eb-1f1f2\",\"native\":\"🇫🇲\",\"x\":1,\"y\":47}],\"version\":2},\"flag-fo\":{\"id\":\"flag-fo\",\"name\":\"Faroe Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1eb-1f1f4\",\"native\":\"🇫🇴\",\"x\":1,\"y\":48}],\"version\":2},\"fr\":{\"id\":\"fr\",\"name\":\"France Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1eb-1f1f7\",\"native\":\"🇫🇷\",\"x\":1,\"y\":49}],\"version\":1},\"flag-ga\":{\"id\":\"flag-ga\",\"name\":\"Gabon Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1e6\",\"native\":\"🇬🇦\",\"x\":1,\"y\":50}],\"version\":2},\"gb\":{\"id\":\"gb\",\"name\":\"United Kingdom Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1e7\",\"native\":\"🇬🇧\",\"x\":1,\"y\":51}],\"version\":1},\"flag-gd\":{\"id\":\"flag-gd\",\"name\":\"Grenada Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1e9\",\"native\":\"🇬🇩\",\"x\":1,\"y\":52}],\"version\":2},\"flag-ge\":{\"id\":\"flag-ge\",\"name\":\"Georgia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1ea\",\"native\":\"🇬🇪\",\"x\":1,\"y\":53}],\"version\":2},\"flag-gf\":{\"id\":\"flag-gf\",\"name\":\"French Guiana Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1eb\",\"native\":\"🇬🇫\",\"x\":1,\"y\":54}],\"version\":2},\"flag-gg\":{\"id\":\"flag-gg\",\"name\":\"Guernsey Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1ec\",\"native\":\"🇬🇬\",\"x\":1,\"y\":55}],\"version\":2},\"flag-gh\":{\"id\":\"flag-gh\",\"name\":\"Ghana Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1ed\",\"native\":\"🇬🇭\",\"x\":1,\"y\":56}],\"version\":2},\"flag-gi\":{\"id\":\"flag-gi\",\"name\":\"Gibraltar Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1ee\",\"native\":\"🇬🇮\",\"x\":1,\"y\":57}],\"version\":2},\"flag-gl\":{\"id\":\"flag-gl\",\"name\":\"Greenland Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f1\",\"native\":\"🇬🇱\",\"x\":1,\"y\":58}],\"version\":2},\"flag-gm\":{\"id\":\"flag-gm\",\"name\":\"Gambia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f2\",\"native\":\"🇬🇲\",\"x\":1,\"y\":59}],\"version\":2},\"flag-gn\":{\"id\":\"flag-gn\",\"name\":\"Guinea Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f3\",\"native\":\"🇬🇳\",\"x\":1,\"y\":60}],\"version\":2},\"flag-gp\":{\"id\":\"flag-gp\",\"name\":\"Guadeloupe Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f5\",\"native\":\"🇬🇵\",\"x\":2,\"y\":0}],\"version\":2},\"flag-gq\":{\"id\":\"flag-gq\",\"name\":\"Equatorial Guinea Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f6\",\"native\":\"🇬🇶\",\"x\":2,\"y\":1}],\"version\":2},\"flag-gr\":{\"id\":\"flag-gr\",\"name\":\"Greece Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f7\",\"native\":\"🇬🇷\",\"x\":2,\"y\":2}],\"version\":2},\"flag-gs\":{\"id\":\"flag-gs\",\"name\":\"South Georgia & South Sandwich Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f8\",\"native\":\"🇬🇸\",\"x\":2,\"y\":3}],\"version\":2},\"flag-gt\":{\"id\":\"flag-gt\",\"name\":\"Guatemala Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1f9\",\"native\":\"🇬🇹\",\"x\":2,\"y\":4}],\"version\":2},\"flag-gu\":{\"id\":\"flag-gu\",\"name\":\"Guam Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1fa\",\"native\":\"🇬🇺\",\"x\":2,\"y\":5}],\"version\":2},\"flag-gw\":{\"id\":\"flag-gw\",\"name\":\"Guinea-Bissau Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1fc\",\"native\":\"🇬🇼\",\"x\":2,\"y\":6}],\"version\":2},\"flag-gy\":{\"id\":\"flag-gy\",\"name\":\"Guyana Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ec-1f1fe\",\"native\":\"🇬🇾\",\"x\":2,\"y\":7}],\"version\":2},\"flag-hk\":{\"id\":\"flag-hk\",\"name\":\"Hong Kong Sar China Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ed-1f1f0\",\"native\":\"🇭🇰\",\"x\":2,\"y\":8}],\"version\":2},\"flag-hm\":{\"id\":\"flag-hm\",\"name\":\"Heard & Mcdonald Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ed-1f1f2\",\"native\":\"🇭🇲\",\"x\":2,\"y\":9}],\"version\":2},\"flag-hn\":{\"id\":\"flag-hn\",\"name\":\"Honduras Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ed-1f1f3\",\"native\":\"🇭🇳\",\"x\":2,\"y\":10}],\"version\":2},\"flag-hr\":{\"id\":\"flag-hr\",\"name\":\"Croatia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ed-1f1f7\",\"native\":\"🇭🇷\",\"x\":2,\"y\":11}],\"version\":2},\"flag-ht\":{\"id\":\"flag-ht\",\"name\":\"Haiti Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ed-1f1f9\",\"native\":\"🇭🇹\",\"x\":2,\"y\":12}],\"version\":2},\"flag-hu\":{\"id\":\"flag-hu\",\"name\":\"Hungary Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ed-1f1fa\",\"native\":\"🇭🇺\",\"x\":2,\"y\":13}],\"version\":2},\"flag-ic\":{\"id\":\"flag-ic\",\"name\":\"Canary Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1e8\",\"native\":\"🇮🇨\",\"x\":2,\"y\":14}],\"version\":2},\"flag-id\":{\"id\":\"flag-id\",\"name\":\"Indonesia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1e9\",\"native\":\"🇮🇩\",\"x\":2,\"y\":15}],\"version\":2},\"flag-ie\":{\"id\":\"flag-ie\",\"name\":\"Ireland Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1ea\",\"native\":\"🇮🇪\",\"x\":2,\"y\":16}],\"version\":2},\"flag-il\":{\"id\":\"flag-il\",\"name\":\"Israel Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f1\",\"native\":\"🇮🇱\",\"x\":2,\"y\":17}],\"version\":2},\"flag-im\":{\"id\":\"flag-im\",\"name\":\"Isle of Man Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f2\",\"native\":\"🇮🇲\",\"x\":2,\"y\":18}],\"version\":2},\"flag-in\":{\"id\":\"flag-in\",\"name\":\"India Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f3\",\"native\":\"🇮🇳\",\"x\":2,\"y\":19}],\"version\":2},\"flag-io\":{\"id\":\"flag-io\",\"name\":\"British Indian Ocean Territory Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f4\",\"native\":\"🇮🇴\",\"x\":2,\"y\":20}],\"version\":2},\"flag-iq\":{\"id\":\"flag-iq\",\"name\":\"Iraq Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f6\",\"native\":\"🇮🇶\",\"x\":2,\"y\":21}],\"version\":2},\"flag-ir\":{\"id\":\"flag-ir\",\"name\":\"Iran Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f7\",\"native\":\"🇮🇷\",\"x\":2,\"y\":22}],\"version\":2},\"flag-is\":{\"id\":\"flag-is\",\"name\":\"Iceland Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f8\",\"native\":\"🇮🇸\",\"x\":2,\"y\":23}],\"version\":2},\"it\":{\"id\":\"it\",\"name\":\"Italy Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ee-1f1f9\",\"native\":\"🇮🇹\",\"x\":2,\"y\":24}],\"version\":1},\"flag-je\":{\"id\":\"flag-je\",\"name\":\"Jersey Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ef-1f1ea\",\"native\":\"🇯🇪\",\"x\":2,\"y\":25}],\"version\":2},\"flag-jm\":{\"id\":\"flag-jm\",\"name\":\"Jamaica Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ef-1f1f2\",\"native\":\"🇯🇲\",\"x\":2,\"y\":26}],\"version\":2},\"flag-jo\":{\"id\":\"flag-jo\",\"name\":\"Jordan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ef-1f1f4\",\"native\":\"🇯🇴\",\"x\":2,\"y\":27}],\"version\":2},\"jp\":{\"id\":\"jp\",\"name\":\"Japan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ef-1f1f5\",\"native\":\"🇯🇵\",\"x\":2,\"y\":28}],\"version\":1},\"flag-ke\":{\"id\":\"flag-ke\",\"name\":\"Kenya Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1ea\",\"native\":\"🇰🇪\",\"x\":2,\"y\":29}],\"version\":2},\"flag-kg\":{\"id\":\"flag-kg\",\"name\":\"Kyrgyzstan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1ec\",\"native\":\"🇰🇬\",\"x\":2,\"y\":30}],\"version\":2},\"flag-kh\":{\"id\":\"flag-kh\",\"name\":\"Cambodia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1ed\",\"native\":\"🇰🇭\",\"x\":2,\"y\":31}],\"version\":2},\"flag-ki\":{\"id\":\"flag-ki\",\"name\":\"Kiribati Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1ee\",\"native\":\"🇰🇮\",\"x\":2,\"y\":32}],\"version\":2},\"flag-km\":{\"id\":\"flag-km\",\"name\":\"Comoros Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1f2\",\"native\":\"🇰🇲\",\"x\":2,\"y\":33}],\"version\":2},\"flag-kn\":{\"id\":\"flag-kn\",\"name\":\"St. Kitts & Nevis Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1f3\",\"native\":\"🇰🇳\",\"x\":2,\"y\":34}],\"version\":2},\"flag-kp\":{\"id\":\"flag-kp\",\"name\":\"North Korea Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1f5\",\"native\":\"🇰🇵\",\"x\":2,\"y\":35}],\"version\":2},\"kr\":{\"id\":\"kr\",\"name\":\"South Korea Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1f7\",\"native\":\"🇰🇷\",\"x\":2,\"y\":36}],\"version\":1},\"flag-kw\":{\"id\":\"flag-kw\",\"name\":\"Kuwait Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1fc\",\"native\":\"🇰🇼\",\"x\":2,\"y\":37}],\"version\":2},\"flag-ky\":{\"id\":\"flag-ky\",\"name\":\"Cayman Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1fe\",\"native\":\"🇰🇾\",\"x\":2,\"y\":38}],\"version\":2},\"flag-kz\":{\"id\":\"flag-kz\",\"name\":\"Kazakhstan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f0-1f1ff\",\"native\":\"🇰🇿\",\"x\":2,\"y\":39}],\"version\":2},\"flag-la\":{\"id\":\"flag-la\",\"name\":\"Laos Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1e6\",\"native\":\"🇱🇦\",\"x\":2,\"y\":40}],\"version\":2},\"flag-lb\":{\"id\":\"flag-lb\",\"name\":\"Lebanon Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1e7\",\"native\":\"🇱🇧\",\"x\":2,\"y\":41}],\"version\":2},\"flag-lc\":{\"id\":\"flag-lc\",\"name\":\"St. Lucia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1e8\",\"native\":\"🇱🇨\",\"x\":2,\"y\":42}],\"version\":2},\"flag-li\":{\"id\":\"flag-li\",\"name\":\"Liechtenstein Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1ee\",\"native\":\"🇱🇮\",\"x\":2,\"y\":43}],\"version\":2},\"flag-lk\":{\"id\":\"flag-lk\",\"name\":\"Sri Lanka Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1f0\",\"native\":\"🇱🇰\",\"x\":2,\"y\":44}],\"version\":2},\"flag-lr\":{\"id\":\"flag-lr\",\"name\":\"Liberia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1f7\",\"native\":\"🇱🇷\",\"x\":2,\"y\":45}],\"version\":2},\"flag-ls\":{\"id\":\"flag-ls\",\"name\":\"Lesotho Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1f8\",\"native\":\"🇱🇸\",\"x\":2,\"y\":46}],\"version\":2},\"flag-lt\":{\"id\":\"flag-lt\",\"name\":\"Lithuania Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1f9\",\"native\":\"🇱🇹\",\"x\":2,\"y\":47}],\"version\":2},\"flag-lu\":{\"id\":\"flag-lu\",\"name\":\"Luxembourg Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1fa\",\"native\":\"🇱🇺\",\"x\":2,\"y\":48}],\"version\":2},\"flag-lv\":{\"id\":\"flag-lv\",\"name\":\"Latvia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1fb\",\"native\":\"🇱🇻\",\"x\":2,\"y\":49}],\"version\":2},\"flag-ly\":{\"id\":\"flag-ly\",\"name\":\"Libya Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f1-1f1fe\",\"native\":\"🇱🇾\",\"x\":2,\"y\":50}],\"version\":2},\"flag-ma\":{\"id\":\"flag-ma\",\"name\":\"Morocco Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1e6\",\"native\":\"🇲🇦\",\"x\":2,\"y\":51}],\"version\":2},\"flag-mc\":{\"id\":\"flag-mc\",\"name\":\"Monaco Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1e8\",\"native\":\"🇲🇨\",\"x\":2,\"y\":52}],\"version\":2},\"flag-md\":{\"id\":\"flag-md\",\"name\":\"Moldova Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1e9\",\"native\":\"🇲🇩\",\"x\":2,\"y\":53}],\"version\":2},\"flag-me\":{\"id\":\"flag-me\",\"name\":\"Montenegro Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1ea\",\"native\":\"🇲🇪\",\"x\":2,\"y\":54}],\"version\":2},\"flag-mf\":{\"id\":\"flag-mf\",\"name\":\"St. Martin Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1eb\",\"native\":\"🇲🇫\",\"x\":2,\"y\":55}],\"version\":2},\"flag-mg\":{\"id\":\"flag-mg\",\"name\":\"Madagascar Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1ec\",\"native\":\"🇲🇬\",\"x\":2,\"y\":56}],\"version\":2},\"flag-mh\":{\"id\":\"flag-mh\",\"name\":\"Marshall Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1ed\",\"native\":\"🇲🇭\",\"x\":2,\"y\":57}],\"version\":2},\"flag-mk\":{\"id\":\"flag-mk\",\"name\":\"North Macedonia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f0\",\"native\":\"🇲🇰\",\"x\":2,\"y\":58}],\"version\":2},\"flag-ml\":{\"id\":\"flag-ml\",\"name\":\"Mali Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f1\",\"native\":\"🇲🇱\",\"x\":2,\"y\":59}],\"version\":2},\"flag-mm\":{\"id\":\"flag-mm\",\"name\":\"Myanmar (burma) Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f2\",\"native\":\"🇲🇲\",\"x\":2,\"y\":60}],\"version\":2},\"flag-mn\":{\"id\":\"flag-mn\",\"name\":\"Mongolia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f3\",\"native\":\"🇲🇳\",\"x\":3,\"y\":0}],\"version\":2},\"flag-mo\":{\"id\":\"flag-mo\",\"name\":\"Macao Sar China Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f4\",\"native\":\"🇲🇴\",\"x\":3,\"y\":1}],\"version\":2},\"flag-mp\":{\"id\":\"flag-mp\",\"name\":\"Northern Mariana Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f5\",\"native\":\"🇲🇵\",\"x\":3,\"y\":2}],\"version\":2},\"flag-mq\":{\"id\":\"flag-mq\",\"name\":\"Martinique Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f6\",\"native\":\"🇲🇶\",\"x\":3,\"y\":3}],\"version\":2},\"flag-mr\":{\"id\":\"flag-mr\",\"name\":\"Mauritania Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f7\",\"native\":\"🇲🇷\",\"x\":3,\"y\":4}],\"version\":2},\"flag-ms\":{\"id\":\"flag-ms\",\"name\":\"Montserrat Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f8\",\"native\":\"🇲🇸\",\"x\":3,\"y\":5}],\"version\":2},\"flag-mt\":{\"id\":\"flag-mt\",\"name\":\"Malta Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1f9\",\"native\":\"🇲🇹\",\"x\":3,\"y\":6}],\"version\":2},\"flag-mu\":{\"id\":\"flag-mu\",\"name\":\"Mauritius Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1fa\",\"native\":\"🇲🇺\",\"x\":3,\"y\":7}],\"version\":2},\"flag-mv\":{\"id\":\"flag-mv\",\"name\":\"Maldives Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1fb\",\"native\":\"🇲🇻\",\"x\":3,\"y\":8}],\"version\":2},\"flag-mw\":{\"id\":\"flag-mw\",\"name\":\"Malawi Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1fc\",\"native\":\"🇲🇼\",\"x\":3,\"y\":9}],\"version\":2},\"flag-mx\":{\"id\":\"flag-mx\",\"name\":\"Mexico Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1fd\",\"native\":\"🇲🇽\",\"x\":3,\"y\":10}],\"version\":2},\"flag-my\":{\"id\":\"flag-my\",\"name\":\"Malaysia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1fe\",\"native\":\"🇲🇾\",\"x\":3,\"y\":11}],\"version\":2},\"flag-mz\":{\"id\":\"flag-mz\",\"name\":\"Mozambique Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f2-1f1ff\",\"native\":\"🇲🇿\",\"x\":3,\"y\":12}],\"version\":2},\"flag-na\":{\"id\":\"flag-na\",\"name\":\"Namibia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1e6\",\"native\":\"🇳🇦\",\"x\":3,\"y\":13}],\"version\":2},\"flag-nc\":{\"id\":\"flag-nc\",\"name\":\"New Caledonia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1e8\",\"native\":\"🇳🇨\",\"x\":3,\"y\":14}],\"version\":2},\"flag-ne\":{\"id\":\"flag-ne\",\"name\":\"Niger Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1ea\",\"native\":\"🇳🇪\",\"x\":3,\"y\":15}],\"version\":2},\"flag-nf\":{\"id\":\"flag-nf\",\"name\":\"Norfolk Island Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1eb\",\"native\":\"🇳🇫\",\"x\":3,\"y\":16}],\"version\":2},\"flag-ng\":{\"id\":\"flag-ng\",\"name\":\"Nigeria Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1ec\",\"native\":\"🇳🇬\",\"x\":3,\"y\":17}],\"version\":2},\"flag-ni\":{\"id\":\"flag-ni\",\"name\":\"Nicaragua Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1ee\",\"native\":\"🇳🇮\",\"x\":3,\"y\":18}],\"version\":2},\"flag-nl\":{\"id\":\"flag-nl\",\"name\":\"Netherlands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1f1\",\"native\":\"🇳🇱\",\"x\":3,\"y\":19}],\"version\":2},\"flag-no\":{\"id\":\"flag-no\",\"name\":\"Norway Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1f4\",\"native\":\"🇳🇴\",\"x\":3,\"y\":20}],\"version\":2},\"flag-np\":{\"id\":\"flag-np\",\"name\":\"Nepal Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1f5\",\"native\":\"🇳🇵\",\"x\":3,\"y\":21}],\"version\":2},\"flag-nr\":{\"id\":\"flag-nr\",\"name\":\"Nauru Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1f7\",\"native\":\"🇳🇷\",\"x\":3,\"y\":22}],\"version\":2},\"flag-nu\":{\"id\":\"flag-nu\",\"name\":\"Niue Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1fa\",\"native\":\"🇳🇺\",\"x\":3,\"y\":23}],\"version\":2},\"flag-nz\":{\"id\":\"flag-nz\",\"name\":\"New Zealand Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f3-1f1ff\",\"native\":\"🇳🇿\",\"x\":3,\"y\":24}],\"version\":2},\"flag-om\":{\"id\":\"flag-om\",\"name\":\"Oman Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f4-1f1f2\",\"native\":\"🇴🇲\",\"x\":3,\"y\":25}],\"version\":2},\"flag-pa\":{\"id\":\"flag-pa\",\"name\":\"Panama Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1e6\",\"native\":\"🇵🇦\",\"x\":3,\"y\":26}],\"version\":2},\"flag-pe\":{\"id\":\"flag-pe\",\"name\":\"Peru Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1ea\",\"native\":\"🇵🇪\",\"x\":3,\"y\":27}],\"version\":2},\"flag-pf\":{\"id\":\"flag-pf\",\"name\":\"French Polynesia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1eb\",\"native\":\"🇵🇫\",\"x\":3,\"y\":28}],\"version\":2},\"flag-pg\":{\"id\":\"flag-pg\",\"name\":\"Papua New Guinea Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1ec\",\"native\":\"🇵🇬\",\"x\":3,\"y\":29}],\"version\":2},\"flag-ph\":{\"id\":\"flag-ph\",\"name\":\"Philippines Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1ed\",\"native\":\"🇵🇭\",\"x\":3,\"y\":30}],\"version\":2},\"flag-pk\":{\"id\":\"flag-pk\",\"name\":\"Pakistan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f0\",\"native\":\"🇵🇰\",\"x\":3,\"y\":31}],\"version\":2},\"flag-pl\":{\"id\":\"flag-pl\",\"name\":\"Poland Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f1\",\"native\":\"🇵🇱\",\"x\":3,\"y\":32}],\"version\":2},\"flag-pm\":{\"id\":\"flag-pm\",\"name\":\"St. Pierre & Miquelon Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f2\",\"native\":\"🇵🇲\",\"x\":3,\"y\":33}],\"version\":2},\"flag-pn\":{\"id\":\"flag-pn\",\"name\":\"Pitcairn Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f3\",\"native\":\"🇵🇳\",\"x\":3,\"y\":34}],\"version\":2},\"flag-pr\":{\"id\":\"flag-pr\",\"name\":\"Puerto Rico Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f7\",\"native\":\"🇵🇷\",\"x\":3,\"y\":35}],\"version\":2},\"flag-ps\":{\"id\":\"flag-ps\",\"name\":\"Palestinian Territories Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f8\",\"native\":\"🇵🇸\",\"x\":3,\"y\":36}],\"version\":2},\"flag-pt\":{\"id\":\"flag-pt\",\"name\":\"Portugal Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1f9\",\"native\":\"🇵🇹\",\"x\":3,\"y\":37}],\"version\":2},\"flag-pw\":{\"id\":\"flag-pw\",\"name\":\"Palau Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1fc\",\"native\":\"🇵🇼\",\"x\":3,\"y\":38}],\"version\":2},\"flag-py\":{\"id\":\"flag-py\",\"name\":\"Paraguay Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f5-1f1fe\",\"native\":\"🇵🇾\",\"x\":3,\"y\":39}],\"version\":2},\"flag-qa\":{\"id\":\"flag-qa\",\"name\":\"Qatar Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f6-1f1e6\",\"native\":\"🇶🇦\",\"x\":3,\"y\":40}],\"version\":2},\"flag-re\":{\"id\":\"flag-re\",\"name\":\"Réunion Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f7-1f1ea\",\"native\":\"🇷🇪\",\"x\":3,\"y\":41}],\"version\":2},\"flag-ro\":{\"id\":\"flag-ro\",\"name\":\"Romania Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f7-1f1f4\",\"native\":\"🇷🇴\",\"x\":3,\"y\":42}],\"version\":2},\"flag-rs\":{\"id\":\"flag-rs\",\"name\":\"Serbia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f7-1f1f8\",\"native\":\"🇷🇸\",\"x\":3,\"y\":43}],\"version\":2},\"ru\":{\"id\":\"ru\",\"name\":\"Russia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f7-1f1fa\",\"native\":\"🇷🇺\",\"x\":3,\"y\":44}],\"version\":1},\"flag-rw\":{\"id\":\"flag-rw\",\"name\":\"Rwanda Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f7-1f1fc\",\"native\":\"🇷🇼\",\"x\":3,\"y\":45}],\"version\":2},\"flag-sa\":{\"id\":\"flag-sa\",\"name\":\"Saudi Arabia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1e6\",\"native\":\"🇸🇦\",\"x\":3,\"y\":46}],\"version\":2},\"flag-sb\":{\"id\":\"flag-sb\",\"name\":\"Solomon Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1e7\",\"native\":\"🇸🇧\",\"x\":3,\"y\":47}],\"version\":2},\"flag-sc\":{\"id\":\"flag-sc\",\"name\":\"Seychelles Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1e8\",\"native\":\"🇸🇨\",\"x\":3,\"y\":48}],\"version\":2},\"flag-sd\":{\"id\":\"flag-sd\",\"name\":\"Sudan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1e9\",\"native\":\"🇸🇩\",\"x\":3,\"y\":49}],\"version\":2},\"flag-se\":{\"id\":\"flag-se\",\"name\":\"Sweden Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1ea\",\"native\":\"🇸🇪\",\"x\":3,\"y\":50}],\"version\":2},\"flag-sg\":{\"id\":\"flag-sg\",\"name\":\"Singapore Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1ec\",\"native\":\"🇸🇬\",\"x\":3,\"y\":51}],\"version\":2},\"flag-sh\":{\"id\":\"flag-sh\",\"name\":\"St. Helena Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1ed\",\"native\":\"🇸🇭\",\"x\":3,\"y\":52}],\"version\":2},\"flag-si\":{\"id\":\"flag-si\",\"name\":\"Slovenia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1ee\",\"native\":\"🇸🇮\",\"x\":3,\"y\":53}],\"version\":2},\"flag-sj\":{\"id\":\"flag-sj\",\"name\":\"Svalbard & Jan Mayen Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1ef\",\"native\":\"🇸🇯\",\"x\":3,\"y\":54}],\"version\":2},\"flag-sk\":{\"id\":\"flag-sk\",\"name\":\"Slovakia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f0\",\"native\":\"🇸🇰\",\"x\":3,\"y\":55}],\"version\":2},\"flag-sl\":{\"id\":\"flag-sl\",\"name\":\"Sierra Leone Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f1\",\"native\":\"🇸🇱\",\"x\":3,\"y\":56}],\"version\":2},\"flag-sm\":{\"id\":\"flag-sm\",\"name\":\"San Marino Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f2\",\"native\":\"🇸🇲\",\"x\":3,\"y\":57}],\"version\":2},\"flag-sn\":{\"id\":\"flag-sn\",\"name\":\"Senegal Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f3\",\"native\":\"🇸🇳\",\"x\":3,\"y\":58}],\"version\":2},\"flag-so\":{\"id\":\"flag-so\",\"name\":\"Somalia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f4\",\"native\":\"🇸🇴\",\"x\":3,\"y\":59}],\"version\":2},\"flag-sr\":{\"id\":\"flag-sr\",\"name\":\"Suriname Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f7\",\"native\":\"🇸🇷\",\"x\":3,\"y\":60}],\"version\":2},\"flag-ss\":{\"id\":\"flag-ss\",\"name\":\"South Sudan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f8\",\"native\":\"🇸🇸\",\"x\":4,\"y\":0}],\"version\":2},\"flag-st\":{\"id\":\"flag-st\",\"name\":\"São Tomé & Príncipe Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1f9\",\"native\":\"🇸🇹\",\"x\":4,\"y\":1}],\"version\":2},\"flag-sv\":{\"id\":\"flag-sv\",\"name\":\"El Salvador Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1fb\",\"native\":\"🇸🇻\",\"x\":4,\"y\":2}],\"version\":2},\"flag-sx\":{\"id\":\"flag-sx\",\"name\":\"Sint Maarten Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1fd\",\"native\":\"🇸🇽\",\"x\":4,\"y\":3}],\"version\":2},\"flag-sy\":{\"id\":\"flag-sy\",\"name\":\"Syria Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1fe\",\"native\":\"🇸🇾\",\"x\":4,\"y\":4}],\"version\":2},\"flag-sz\":{\"id\":\"flag-sz\",\"name\":\"Eswatini Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f8-1f1ff\",\"native\":\"🇸🇿\",\"x\":4,\"y\":5}],\"version\":2},\"flag-ta\":{\"id\":\"flag-ta\",\"name\":\"Tristan Da Cunha Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1e6\",\"native\":\"🇹🇦\",\"x\":4,\"y\":6}],\"version\":2},\"flag-tc\":{\"id\":\"flag-tc\",\"name\":\"Turks & Caicos Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1e8\",\"native\":\"🇹🇨\",\"x\":4,\"y\":7}],\"version\":2},\"flag-td\":{\"id\":\"flag-td\",\"name\":\"Chad Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1e9\",\"native\":\"🇹🇩\",\"x\":4,\"y\":8}],\"version\":2},\"flag-tf\":{\"id\":\"flag-tf\",\"name\":\"French Southern Territories Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1eb\",\"native\":\"🇹🇫\",\"x\":4,\"y\":9}],\"version\":2},\"flag-tg\":{\"id\":\"flag-tg\",\"name\":\"Togo Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1ec\",\"native\":\"🇹🇬\",\"x\":4,\"y\":10}],\"version\":2},\"flag-th\":{\"id\":\"flag-th\",\"name\":\"Thailand Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1ed\",\"native\":\"🇹🇭\",\"x\":4,\"y\":11}],\"version\":2},\"flag-tj\":{\"id\":\"flag-tj\",\"name\":\"Tajikistan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1ef\",\"native\":\"🇹🇯\",\"x\":4,\"y\":12}],\"version\":2},\"flag-tk\":{\"id\":\"flag-tk\",\"name\":\"Tokelau Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f0\",\"native\":\"🇹🇰\",\"x\":4,\"y\":13}],\"version\":2},\"flag-tl\":{\"id\":\"flag-tl\",\"name\":\"Timor-Leste Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f1\",\"native\":\"🇹🇱\",\"x\":4,\"y\":14}],\"version\":2},\"flag-tm\":{\"id\":\"flag-tm\",\"name\":\"Turkmenistan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f2\",\"native\":\"🇹🇲\",\"x\":4,\"y\":15}],\"version\":2},\"flag-tn\":{\"id\":\"flag-tn\",\"name\":\"Tunisia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f3\",\"native\":\"🇹🇳\",\"x\":4,\"y\":16}],\"version\":2},\"flag-to\":{\"id\":\"flag-to\",\"name\":\"Tonga Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f4\",\"native\":\"🇹🇴\",\"x\":4,\"y\":17}],\"version\":2},\"flag-tr\":{\"id\":\"flag-tr\",\"name\":\"Turkey Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f7\",\"native\":\"🇹🇷\",\"x\":4,\"y\":18}],\"version\":2},\"flag-tt\":{\"id\":\"flag-tt\",\"name\":\"Trinidad & Tobago Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1f9\",\"native\":\"🇹🇹\",\"x\":4,\"y\":19}],\"version\":2},\"flag-tv\":{\"id\":\"flag-tv\",\"name\":\"Tuvalu Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1fb\",\"native\":\"🇹🇻\",\"x\":4,\"y\":20}],\"version\":2},\"flag-tw\":{\"id\":\"flag-tw\",\"name\":\"Taiwan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1fc\",\"native\":\"🇹🇼\",\"x\":4,\"y\":21}],\"version\":2},\"flag-tz\":{\"id\":\"flag-tz\",\"name\":\"Tanzania Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1f9-1f1ff\",\"native\":\"🇹🇿\",\"x\":4,\"y\":22}],\"version\":2},\"flag-ua\":{\"id\":\"flag-ua\",\"name\":\"Ukraine Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1e6\",\"native\":\"🇺🇦\",\"x\":4,\"y\":23}],\"version\":2},\"flag-ug\":{\"id\":\"flag-ug\",\"name\":\"Uganda Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1ec\",\"native\":\"🇺🇬\",\"x\":4,\"y\":24}],\"version\":2},\"flag-um\":{\"id\":\"flag-um\",\"name\":\"U.s. Outlying Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1f2\",\"native\":\"🇺🇲\",\"x\":4,\"y\":25}],\"version\":2},\"flag-un\":{\"id\":\"flag-un\",\"name\":\"United Nations Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1f3\",\"native\":\"🇺🇳\",\"x\":4,\"y\":26}],\"version\":4},\"us\":{\"id\":\"us\",\"name\":\"United States Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1f8\",\"native\":\"🇺🇸\",\"x\":4,\"y\":27}],\"version\":1},\"flag-uy\":{\"id\":\"flag-uy\",\"name\":\"Uruguay Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1fe\",\"native\":\"🇺🇾\",\"x\":4,\"y\":28}],\"version\":2},\"flag-uz\":{\"id\":\"flag-uz\",\"name\":\"Uzbekistan Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fa-1f1ff\",\"native\":\"🇺🇿\",\"x\":4,\"y\":29}],\"version\":2},\"flag-va\":{\"id\":\"flag-va\",\"name\":\"Vatican City Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1e6\",\"native\":\"🇻🇦\",\"x\":4,\"y\":30}],\"version\":2},\"flag-vc\":{\"id\":\"flag-vc\",\"name\":\"St. Vincent & Grenadines Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1e8\",\"native\":\"🇻🇨\",\"x\":4,\"y\":31}],\"version\":2},\"flag-ve\":{\"id\":\"flag-ve\",\"name\":\"Venezuela Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1ea\",\"native\":\"🇻🇪\",\"x\":4,\"y\":32}],\"version\":2},\"flag-vg\":{\"id\":\"flag-vg\",\"name\":\"British Virgin Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1ec\",\"native\":\"🇻🇬\",\"x\":4,\"y\":33}],\"version\":2},\"flag-vi\":{\"id\":\"flag-vi\",\"name\":\"U.s. Virgin Islands Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1ee\",\"native\":\"🇻🇮\",\"x\":4,\"y\":34}],\"version\":2},\"flag-vn\":{\"id\":\"flag-vn\",\"name\":\"Vietnam Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1f3\",\"native\":\"🇻🇳\",\"x\":4,\"y\":35}],\"version\":2},\"flag-vu\":{\"id\":\"flag-vu\",\"name\":\"Vanuatu Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fb-1f1fa\",\"native\":\"🇻🇺\",\"x\":4,\"y\":36}],\"version\":2},\"flag-wf\":{\"id\":\"flag-wf\",\"name\":\"Wallis & Futuna Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fc-1f1eb\",\"native\":\"🇼🇫\",\"x\":4,\"y\":37}],\"version\":2},\"flag-ws\":{\"id\":\"flag-ws\",\"name\":\"Samoa Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fc-1f1f8\",\"native\":\"🇼🇸\",\"x\":4,\"y\":38}],\"version\":2},\"flag-xk\":{\"id\":\"flag-xk\",\"name\":\"Kosovo Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fd-1f1f0\",\"native\":\"🇽🇰\",\"x\":4,\"y\":39}],\"version\":2},\"flag-ye\":{\"id\":\"flag-ye\",\"name\":\"Yemen Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fe-1f1ea\",\"native\":\"🇾🇪\",\"x\":4,\"y\":40}],\"version\":2},\"flag-yt\":{\"id\":\"flag-yt\",\"name\":\"Mayotte Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1fe-1f1f9\",\"native\":\"🇾🇹\",\"x\":4,\"y\":41}],\"version\":2},\"flag-za\":{\"id\":\"flag-za\",\"name\":\"South Africa Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ff-1f1e6\",\"native\":\"🇿🇦\",\"x\":4,\"y\":42}],\"version\":2},\"flag-zm\":{\"id\":\"flag-zm\",\"name\":\"Zambia Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ff-1f1f2\",\"native\":\"🇿🇲\",\"x\":4,\"y\":43}],\"version\":2},\"flag-zw\":{\"id\":\"flag-zw\",\"name\":\"Zimbabwe Flag\",\"keywords\":[],\"skins\":[{\"unified\":\"1f1ff-1f1fc\",\"native\":\"🇿🇼\",\"x\":4,\"y\":44}],\"version\":2}},\"aliases\":{\"satisfied\":\"laughing\",\"grinning_face_with_star_eyes\":\"star-struck\",\"grinning_face_with_one_large_and_one_small_eye\":\"zany_face\",\"smiling_face_with_smiling_eyes_and_hand_covering_mouth\":\"face_with_hand_over_mouth\",\"face_with_finger_covering_closed_lips\":\"shushing_face\",\"face_with_one_eyebrow_raised\":\"face_with_raised_eyebrow\",\"face_with_open_mouth_vomiting\":\"face_vomiting\",\"shocked_face_with_exploding_head\":\"exploding_head\",\"serious_face_with_symbols_covering_mouth\":\"face_with_symbols_on_mouth\",\"poop\":\"hankey\",\"shit\":\"hankey\",\"collision\":\"boom\",\"raised_hand\":\"hand\",\"hand_with_index_and_middle_fingers_crossed\":\"crossed_fingers\",\"sign_of_the_horns\":\"the_horns\",\"reversed_hand_with_middle_finger_extended\":\"middle_finger\",\"thumbsup\":\"+1\",\"thumbsdown\":\"-1\",\"punch\":\"facepunch\",\"mother_christmas\":\"mrs_claus\",\"running\":\"runner\",\"man-with-bunny-ears-partying\":\"men-with-bunny-ears-partying\",\"woman-with-bunny-ears-partying\":\"women-with-bunny-ears-partying\",\"women_holding_hands\":\"two_women_holding_hands\",\"woman_and_man_holding_hands\":\"man_and_woman_holding_hands\",\"couple\":\"man_and_woman_holding_hands\",\"men_holding_hands\":\"two_men_holding_hands\",\"paw_prints\":\"feet\",\"flipper\":\"dolphin\",\"honeybee\":\"bee\",\"lady_beetle\":\"ladybug\",\"cooking\":\"fried_egg\",\"knife\":\"hocho\",\"red_car\":\"car\",\"sailboat\":\"boat\",\"waxing_gibbous_moon\":\"moon\",\"sun_small_cloud\":\"mostly_sunny\",\"sun_behind_cloud\":\"barely_sunny\",\"sun_behind_rain_cloud\":\"partly_sunny_rain\",\"lightning_cloud\":\"lightning\",\"tornado_cloud\":\"tornado\",\"tshirt\":\"shirt\",\"shoe\":\"mans_shoe\",\"telephone\":\"phone\",\"lantern\":\"izakaya_lantern\",\"open_book\":\"book\",\"envelope\":\"email\",\"pencil\":\"memo\",\"heavy_exclamation_mark\":\"exclamation\",\"staff_of_aesculapius\":\"medical_symbol\",\"flag-cn\":\"cn\",\"flag-de\":\"de\",\"flag-es\":\"es\",\"flag-fr\":\"fr\",\"uk\":\"gb\",\"flag-gb\":\"gb\",\"flag-it\":\"it\",\"flag-jp\":\"jp\",\"flag-kr\":\"kr\",\"flag-ru\":\"ru\",\"flag-us\":\"us\",\"beetle\":\"ladybug\",\"man_in_tuxedo\":\"person_in_tuxedo\"},\"sheet\":{\"cols\":61,\"rows\":61}}");


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


let $c1e62b87224e1434$export$dbe3113d60765c1a = (/*@__PURE__*/$parcel$interopDefault($8cb849075d80bb41$exports));
let $c1e62b87224e1434$export$2d0294657ab35f1b = JSON.parse((/*@__PURE__*/$parcel$interopDefault($6a99616f268f5a38$exports)));
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
