const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/page-BCL0Q32G.js", "assets/Card-CH0hIbPs.js", "assets/Button-BwOLboJ4.js", "assets/page-1voL5Y-x.js", "assets/page-Dp8kkk1H.js", "assets/page-iClMR-88.js"]))) => i.map(i => d[i]);
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function o(c) {
        if (c.ep) return;
        c.ep = !0;
        const f = s(c);
        fetch(c.href, f)
    }
})();
const pu = [];
let hg = !0;
const gg = console.error;

function mh(r) {
    pu.length > 5 || !hg || pu.push(r)
}

function mg(r) {
    pu.push({
        type: "runtime",
        args: r
    })
}

function pg(r) {
    r.preventDefault()
}

function vy(r) {
    try {
        const i = r.find(s => s instanceof Error);
        if (i && i.stack) mh({
            type: "console.error",
            args: i
        });
        else if (r.length > 0) {
            const s = r.map(c => typeof c == "object" ? JSON.stringify(c) : String(c)).join(" "),
                o = new Error(s);
            mh({
                type: "console.error",
                args: o
            })
        }
    } catch (i) {
        console.warn(i)
    }
}
window.addEventListener("error", mg);
window.addEventListener("unhandledrejection", pg);
console.error = function(...i) {
    vy(i), gg.apply(this, i)
};

function Sy() {
    return window.removeEventListener("error", mg), window.removeEventListener("unhandledrejection", pg), console.error = gg, hg = !1, pu
}
const by = 1e3,
    ph = Symbol("postMessageResponseTimeout");
let ou = 0;
const Vs = "*";
class Eu {
    client;
    baseTimeout;
    waitRes = new Map;
    removeListeners = new Set;
    clear;
    constructor(i, s) {
        this.client = i, this.baseTimeout = s ? .timeout || by;
        const o = this.emitResponse.bind(this);
        this.clear = () => {
            window.removeEventListener("message", o)
        }, window.addEventListener("message", o)
    }
    destroy() {
        this.clear(), this.removeListeners.forEach(i => i())
    }
    isTimeout(i) {
        return i === ph
    }
    post(i, s, o) {
        ou++;
        const {
            timeout: c,
            origin: f = Vs
        } = o || {};
        return this.client.postMessage({
            data: s,
            id: ou,
            type: i
        }, f), new Promise(d => {
            this.waitRes.set(ou, m => {
                d(m)
            }), setTimeout(() => {
                this.waitRes.delete(ou), d(ph)
            }, c || this.baseTimeout)
        })
    }
    on(i, s, o) {
        const {
            once: c,
            origin: f = Vs
        } = o || {}, d = async p => {
            const {
                id: g,
                type: v,
                data: S
            } = p.data;
            let b;
            v === i && (b = await s(S), console.log(i, c, b, S), (g && f === p.origin || f === Vs) && p.source ? .postMessage({
                fromType: i,
                id: g,
                data: b
            }, p.origin), c && m())
        };
        window.addEventListener("message", d);
        const m = () => {
            window.removeEventListener("message", d), this.removeListeners.delete(m)
        };
        return this.removeListeners.add(m), m
    }
    emitResponse(i) {
        const s = i.data,
            {
                id: o,
                data: c
            } = s,
            f = this.waitRes.get(o);
        f && f(c)
    }
}

function Ey(r) {
    if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
    var i = r.default;
    if (typeof i == "function") {
        var s = function o() {
            var c = !1;
            try {
                c = this instanceof o
            } catch {}
            return c ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments)
        };
        s.prototype = i.prototype
    } else s = {};
    return Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.keys(r).forEach(function(o) {
        var c = Object.getOwnPropertyDescriptor(r, o);
        Object.defineProperty(s, o, c.get ? c : {
            enumerable: !0,
            get: function() {
                return r[o]
            }
        })
    }), s
}
var Na = {},
    Qs = {},
    Xs = {},
    Zs = {},
    yh;

function _y() {
    if (yh) return Zs;
    yh = 1;
    const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    return Zs.encode = function(i) {
        if (0 <= i && i < r.length) return r[i];
        throw new TypeError("Must be between 0 and 63: " + i)
    }, Zs
}
var vh;

function yg() {
    if (vh) return Xs;
    vh = 1;
    const r = _y(),
        i = 5,
        s = 1 << i,
        o = s - 1,
        c = s;

    function f(d) {
        return d < 0 ? (-d << 1) + 1 : (d << 1) + 0
    }
    return Xs.encode = function(m) {
        let p = "",
            g, v = f(m);
        do g = v & o, v >>>= i, v > 0 && (g |= c), p += r.encode(g); while (v > 0);
        return p
    }, Xs
}
var At = {};
const Oy = {},
    xy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Oy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ry = Ey(xy);
var Ks, Sh;

function Ay() {
    return Sh || (Sh = 1, Ks = typeof URL == "function" ? URL : Ry.URL), Ks
}
var bh;

function _u() {
    if (bh) return At;
    bh = 1;
    const r = Ay();

    function i(Y, Z, J) {
        if (Z in Y) return Y[Z];
        if (arguments.length === 3) return J;
        throw new Error('"' + Z + '" is a required argument.')
    }
    At.getArg = i;
    const s = (function() {
        return !("__proto__" in Object.create(null))
    })();

    function o(Y) {
        return Y
    }

    function c(Y) {
        return d(Y) ? "$" + Y : Y
    }
    At.toSetString = s ? o : c;

    function f(Y) {
        return d(Y) ? Y.slice(1) : Y
    }
    At.fromSetString = s ? o : f;

    function d(Y) {
        if (!Y) return !1;
        const Z = Y.length;
        if (Z < 9 || Y.charCodeAt(Z - 1) !== 95 || Y.charCodeAt(Z - 2) !== 95 || Y.charCodeAt(Z - 3) !== 111 || Y.charCodeAt(Z - 4) !== 116 || Y.charCodeAt(Z - 5) !== 111 || Y.charCodeAt(Z - 6) !== 114 || Y.charCodeAt(Z - 7) !== 112 || Y.charCodeAt(Z - 8) !== 95 || Y.charCodeAt(Z - 9) !== 95) return !1;
        for (let J = Z - 10; J >= 0; J--)
            if (Y.charCodeAt(J) !== 36) return !1;
        return !0
    }

    function m(Y, Z) {
        return Y === Z ? 0 : Y === null ? 1 : Z === null ? -1 : Y > Z ? 1 : -1
    }

    function p(Y, Z) {
        let J = Y.generatedLine - Z.generatedLine;
        return J !== 0 || (J = Y.generatedColumn - Z.generatedColumn, J !== 0) || (J = m(Y.source, Z.source), J !== 0) || (J = Y.originalLine - Z.originalLine, J !== 0) || (J = Y.originalColumn - Z.originalColumn, J !== 0) ? J : m(Y.name, Z.name)
    }
    At.compareByGeneratedPositionsInflated = p;

    function g(Y) {
        return JSON.parse(Y.replace(/^\)]}'[^\n]*\n/, ""))
    }
    At.parseSourceMapInput = g;
    const v = "http:",
        S = `${v}//host`;

    function b(Y) {
        return Z => {
            const J = z(Z),
                ne = M(Z),
                de = new r(Z, ne);
            Y(de);
            const he = de.toString();
            return J === "absolute" ? he : J === "scheme-relative" ? he.slice(v.length) : J === "path-absolute" ? he.slice(S.length) : N(ne, he)
        }
    }

    function _(Y, Z) {
        return new r(Y, Z).toString()
    }

    function O(Y, Z) {
        let J = 0;
        do {
            const ne = Y + J++;
            if (Z.indexOf(ne) === -1) return ne
        } while (!0)
    }

    function M(Y) {
        const Z = Y.split("..").length - 1,
            J = O("p", Y);
        let ne = `${S}/`;
        for (let de = 0; de < Z; de++) ne += `${J}/`;
        return ne
    }
    const R = /^[A-Za-z0-9\+\-\.]+:/;

    function z(Y) {
        return Y[0] === "/" ? Y[1] === "/" ? "scheme-relative" : "path-absolute" : R.test(Y) ? "absolute" : "path-relative"
    }

    function N(Y, Z) {
        typeof Y == "string" && (Y = new r(Y)), typeof Z == "string" && (Z = new r(Z));
        const J = Z.pathname.split("/"),
            ne = Y.pathname.split("/");
        for (ne.length > 0 && !ne[ne.length - 1] && ne.pop(); J.length > 0 && ne.length > 0 && J[0] === ne[0];) J.shift(), ne.shift();
        return ne.map(() => "..").concat(J).join("/") + Z.search + Z.hash
    }
    const V = b(Y => {
            Y.pathname = Y.pathname.replace(/\/?$/, "/")
        }),
        F = b(Y => {
            Y.href = new r(".", Y.toString()).toString()
        }),
        Q = b(Y => {});
    At.normalize = Q;

    function ue(Y, Z) {
        const J = z(Z),
            ne = z(Y);
        if (Y = V(Y), J === "absolute") return _(Z, void 0);
        if (ne === "absolute") return _(Z, Y);
        if (J === "scheme-relative") return Q(Z);
        if (ne === "scheme-relative") return _(Z, _(Y, S)).slice(v.length);
        if (J === "path-absolute") return Q(Z);
        if (ne === "path-absolute") return _(Z, _(Y, S)).slice(S.length);
        const de = M(Z + Y),
            he = _(Z, _(Y, de));
        return N(de, he)
    }
    At.join = ue;

    function me(Y, Z) {
        const J = Ee(Y, Z);
        return typeof J == "string" ? J : Q(Z)
    }
    At.relative = me;

    function Ee(Y, Z) {
        if (z(Y) !== z(Z)) return null;
        const ne = M(Y + Z),
            de = new r(Y, ne),
            he = new r(Z, ne);
        try {
            new r("", he.toString())
        } catch {
            return null
        }
        return he.protocol !== de.protocol || he.user !== de.user || he.password !== de.password || he.hostname !== de.hostname || he.port !== de.port ? null : N(de, he)
    }

    function pe(Y, Z, J) {
        Y && z(Z) === "path-absolute" && (Z = Z.replace(/^\//, ""));
        let ne = Q(Z || "");
        return Y && (ne = ue(Y, ne)), J && (ne = ue(F(J), ne)), ne
    }
    return At.computeSourceURL = pe, At
}
var ks = {},
    Eh;

function vg() {
    if (Eh) return ks;
    Eh = 1;
    class r {
        constructor() {
            this._array = [], this._set = new Map
        }
        static fromArray(s, o) {
            const c = new r;
            for (let f = 0, d = s.length; f < d; f++) c.add(s[f], o);
            return c
        }
        size() {
            return this._set.size
        }
        add(s, o) {
            const c = this.has(s),
                f = this._array.length;
            (!c || o) && this._array.push(s), c || this._set.set(s, f)
        }
        has(s) {
            return this._set.has(s)
        }
        indexOf(s) {
            const o = this._set.get(s);
            if (o >= 0) return o;
            throw new Error('"' + s + '" is not in the set.')
        }
        at(s) {
            if (s >= 0 && s < this._array.length) return this._array[s];
            throw new Error("No element indexed by " + s)
        }
        toArray() {
            return this._array.slice()
        }
    }
    return ks.ArraySet = r, ks
}
var $s = {},
    _h;

function Ty() {
    if (_h) return $s;
    _h = 1;
    const r = _u();

    function i(o, c) {
        const f = o.generatedLine,
            d = c.generatedLine,
            m = o.generatedColumn,
            p = c.generatedColumn;
        return d > f || d == f && p >= m || r.compareByGeneratedPositionsInflated(o, c) <= 0
    }
    class s {
        constructor() {
            this._array = [], this._sorted = !0, this._last = {
                generatedLine: -1,
                generatedColumn: 0
            }
        }
        unsortedForEach(c, f) {
            this._array.forEach(c, f)
        }
        add(c) {
            i(this._last, c) ? (this._last = c, this._array.push(c)) : (this._sorted = !1, this._array.push(c))
        }
        toArray() {
            return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
        }
    }
    return $s.MappingList = s, $s
}
var Oh;

function Sg() {
    if (Oh) return Qs;
    Oh = 1;
    const r = yg(),
        i = _u(),
        s = vg().ArraySet,
        o = Ty().MappingList;
    class c {
        constructor(d) {
            d || (d = {}), this._file = i.getArg(d, "file", null), this._sourceRoot = i.getArg(d, "sourceRoot", null), this._skipValidation = i.getArg(d, "skipValidation", !1), this._sources = new s, this._names = new s, this._mappings = new o, this._sourcesContents = null
        }
        static fromSourceMap(d) {
            const m = d.sourceRoot,
                p = new c({
                    file: d.file,
                    sourceRoot: m
                });
            return d.eachMapping(function(g) {
                const v = {
                    generated: {
                        line: g.generatedLine,
                        column: g.generatedColumn
                    }
                };
                g.source != null && (v.source = g.source, m != null && (v.source = i.relative(m, v.source)), v.original = {
                    line: g.originalLine,
                    column: g.originalColumn
                }, g.name != null && (v.name = g.name)), p.addMapping(v)
            }), d.sources.forEach(function(g) {
                let v = g;
                m != null && (v = i.relative(m, g)), p._sources.has(v) || p._sources.add(v);
                const S = d.sourceContentFor(g);
                S != null && p.setSourceContent(g, S)
            }), p
        }
        addMapping(d) {
            const m = i.getArg(d, "generated"),
                p = i.getArg(d, "original", null);
            let g = i.getArg(d, "source", null),
                v = i.getArg(d, "name", null);
            this._skipValidation || this._validateMapping(m, p, g, v), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
                generatedLine: m.line,
                generatedColumn: m.column,
                originalLine: p && p.line,
                originalColumn: p && p.column,
                source: g,
                name: v
            })
        }
        setSourceContent(d, m) {
            let p = d;
            this._sourceRoot != null && (p = i.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
        }
        applySourceMap(d, m, p) {
            let g = m;
            if (m == null) {
                if (d.file == null) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
                g = d.file
            }
            const v = this._sourceRoot;
            v != null && (g = i.relative(v, g));
            const S = this._mappings.toArray().length > 0 ? new s : this._sources,
                b = new s;
            this._mappings.unsortedForEach(function(_) {
                if (_.source === g && _.originalLine != null) {
                    const R = d.originalPositionFor({
                        line: _.originalLine,
                        column: _.originalColumn
                    });
                    R.source != null && (_.source = R.source, p != null && (_.source = i.join(p, _.source)), v != null && (_.source = i.relative(v, _.source)), _.originalLine = R.line, _.originalColumn = R.column, R.name != null && (_.name = R.name))
                }
                const O = _.source;
                O != null && !S.has(O) && S.add(O);
                const M = _.name;
                M != null && !b.has(M) && b.add(M)
            }, this), this._sources = S, this._names = b, d.sources.forEach(function(_) {
                const O = d.sourceContentFor(_);
                O != null && (p != null && (_ = i.join(p, _)), v != null && (_ = i.relative(v, _)), this.setSourceContent(_, O))
            }, this)
        }
        _validateMapping(d, m, p, g) {
            if (m && typeof m.line != "number" && typeof m.column != "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
            if (!(d && "line" in d && "column" in d && d.line > 0 && d.column >= 0 && !m && !p && !g)) {
                if (!(d && "line" in d && "column" in d && m && "line" in m && "column" in m && d.line > 0 && d.column >= 0 && m.line > 0 && m.column >= 0 && p)) throw new Error("Invalid mapping: " + JSON.stringify({
                    generated: d,
                    source: p,
                    original: m,
                    name: g
                }))
            }
        }
        _serializeMappings() {
            let d = 0,
                m = 1,
                p = 0,
                g = 0,
                v = 0,
                S = 0,
                b = "",
                _, O, M, R;
            const z = this._mappings.toArray();
            for (let N = 0, V = z.length; N < V; N++) {
                if (O = z[N], _ = "", O.generatedLine !== m)
                    for (d = 0; O.generatedLine !== m;) _ += ";", m++;
                else if (N > 0) {
                    if (!i.compareByGeneratedPositionsInflated(O, z[N - 1])) continue;
                    _ += ","
                }
                _ += r.encode(O.generatedColumn - d), d = O.generatedColumn, O.source != null && (R = this._sources.indexOf(O.source), _ += r.encode(R - S), S = R, _ += r.encode(O.originalLine - 1 - g), g = O.originalLine - 1, _ += r.encode(O.originalColumn - p), p = O.originalColumn, O.name != null && (M = this._names.indexOf(O.name), _ += r.encode(M - v), v = M)), b += _
            }
            return b
        }
        _generateSourcesContent(d, m) {
            return d.map(function(p) {
                if (!this._sourcesContents) return null;
                m != null && (p = i.relative(m, p));
                const g = i.toSetString(p);
                return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null
            }, this)
        }
        toJSON() {
            const d = {
                version: this._version,
                sources: this._sources.toArray(),
                names: this._names.toArray(),
                mappings: this._serializeMappings()
            };
            return this._file != null && (d.file = this._file), this._sourceRoot != null && (d.sourceRoot = this._sourceRoot), this._sourcesContents && (d.sourcesContent = this._generateSourcesContent(d.sources, d.sourceRoot)), d
        }
        toString() {
            return JSON.stringify(this.toJSON())
        }
    }
    return c.prototype._version = 3, Qs.SourceMapGenerator = c, Qs
}
var Ua = {},
    Js = {},
    xh;

function Cy() {
    return xh || (xh = 1, (function(r) {
        r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2;

        function i(s, o, c, f, d, m) {
            const p = Math.floor((o - s) / 2) + s,
                g = d(c, f[p], !0);
            return g === 0 ? p : g > 0 ? o - p > 1 ? i(p, o, c, f, d, m) : m === r.LEAST_UPPER_BOUND ? o < f.length ? o : -1 : p : p - s > 1 ? i(s, p, c, f, d, m) : m == r.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s
        }
        r.search = function(o, c, f, d) {
            if (c.length === 0) return -1;
            let m = i(-1, c.length, o, c, f, d || r.GREATEST_LOWER_BOUND);
            if (m < 0) return -1;
            for (; m - 1 >= 0 && f(c[m], c[m - 1], !0) === 0;) --m;
            return m
        }
    })(Js)), Js
}
var cu = {
        exports: {}
    },
    Rh;

function bg() {
    if (Rh) return cu.exports;
    Rh = 1;
    let r = null;
    return cu.exports = function() {
        if (typeof r == "string") return fetch(r).then(s => s.arrayBuffer());
        if (r instanceof ArrayBuffer) return Promise.resolve(r);
        throw new Error("You must provide the string URL or ArrayBuffer contents of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer")
    }, cu.exports.initialize = i => {
        r = i
    }, cu.exports
}
var Fs, Ah;

function wy() {
    if (Ah) return Fs;
    Ah = 1;
    const r = bg();

    function i() {
        this.generatedLine = 0, this.generatedColumn = 0, this.lastGeneratedColumn = null, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
    }
    let s = null;
    return Fs = function() {
        if (s) return s;
        const c = [];
        return s = r().then(f => WebAssembly.instantiate(f, {
            env: {
                mapping_callback(d, m, p, g, v, S, b, _, O, M) {
                    const R = new i;
                    R.generatedLine = d + 1, R.generatedColumn = m, p && (R.lastGeneratedColumn = g - 1), v && (R.source = S, R.originalLine = b + 1, R.originalColumn = _, O && (R.name = M)), c[c.length - 1](R)
                },
                start_all_generated_locations_for() {
                    console.time("all_generated_locations_for")
                },
                end_all_generated_locations_for() {
                    console.timeEnd("all_generated_locations_for")
                },
                start_compute_column_spans() {
                    console.time("compute_column_spans")
                },
                end_compute_column_spans() {
                    console.timeEnd("compute_column_spans")
                },
                start_generated_location_for() {
                    console.time("generated_location_for")
                },
                end_generated_location_for() {
                    console.timeEnd("generated_location_for")
                },
                start_original_location_for() {
                    console.time("original_location_for")
                },
                end_original_location_for() {
                    console.timeEnd("original_location_for")
                },
                start_parse_mappings() {
                    console.time("parse_mappings")
                },
                end_parse_mappings() {
                    console.timeEnd("parse_mappings")
                },
                start_sort_by_generated_location() {
                    console.time("sort_by_generated_location")
                },
                end_sort_by_generated_location() {
                    console.timeEnd("sort_by_generated_location")
                },
                start_sort_by_original_location() {
                    console.time("sort_by_original_location")
                },
                end_sort_by_original_location() {
                    console.timeEnd("sort_by_original_location")
                }
            }
        })).then(f => ({
            exports: f.instance.exports,
            withMappingCallback: (d, m) => {
                c.push(d);
                try {
                    m()
                } finally {
                    c.pop()
                }
            }
        })).then(null, f => {
            throw s = null, f
        }), s
    }, Fs
}
var Th;

function My() {
    if (Th) return Ua;
    Th = 1;
    const r = _u(),
        i = Cy(),
        s = vg().ArraySet;
    yg();
    const o = bg(),
        c = wy(),
        f = Symbol("smcInternal");
    class d {
        constructor(b, _) {
            return b == f ? Promise.resolve(this) : g(b, _)
        }
        static initialize(b) {
            o.initialize(b["lib/mappings.wasm"])
        }
        static fromSourceMap(b, _) {
            return v(b, _)
        }
        static async with(b, _, O) {
            const M = await new d(b, _);
            try {
                return await O(M)
            } finally {
                M.destroy()
            }
        }
        eachMapping(b, _, O) {
            throw new Error("Subclasses must implement eachMapping")
        }
        allGeneratedPositionsFor(b) {
            throw new Error("Subclasses must implement allGeneratedPositionsFor")
        }
        destroy() {
            throw new Error("Subclasses must implement destroy")
        }
    }
    d.prototype._version = 3, d.GENERATED_ORDER = 1, d.ORIGINAL_ORDER = 2, d.GREATEST_LOWER_BOUND = 1, d.LEAST_UPPER_BOUND = 2, Ua.SourceMapConsumer = d;
    class m extends d {
        constructor(b, _) {
            return super(f).then(O => {
                let M = b;
                typeof b == "string" && (M = r.parseSourceMapInput(b));
                const R = r.getArg(M, "version"),
                    z = r.getArg(M, "sources").map(String),
                    N = r.getArg(M, "names", []),
                    V = r.getArg(M, "sourceRoot", null),
                    F = r.getArg(M, "sourcesContent", null),
                    Q = r.getArg(M, "mappings"),
                    ue = r.getArg(M, "file", null),
                    me = r.getArg(M, "x_google_ignoreList", null);
                if (R != O._version) throw new Error("Unsupported version: " + R);
                return O._sourceLookupCache = new Map, O._names = s.fromArray(N.map(String), !0), O._sources = s.fromArray(z, !0), O._absoluteSources = s.fromArray(O._sources.toArray().map(function(Ee) {
                    return r.computeSourceURL(V, Ee, _)
                }), !0), O.sourceRoot = V, O.sourcesContent = F, O._mappings = Q, O._sourceMapURL = _, O.file = ue, O.x_google_ignoreList = me, O._computedColumnSpans = !1, O._mappingsPtr = 0, O._wasm = null, c().then(Ee => (O._wasm = Ee, O))
            })
        }
        _findSourceIndex(b) {
            const _ = this._sourceLookupCache.get(b);
            if (typeof _ == "number") return _;
            const O = r.computeSourceURL(null, b, this._sourceMapURL);
            if (this._absoluteSources.has(O)) {
                const R = this._absoluteSources.indexOf(O);
                return this._sourceLookupCache.set(b, R), R
            }
            const M = r.computeSourceURL(this.sourceRoot, b, this._sourceMapURL);
            if (this._absoluteSources.has(M)) {
                const R = this._absoluteSources.indexOf(M);
                return this._sourceLookupCache.set(b, R), R
            }
            return -1
        }
        static fromSourceMap(b, _) {
            return new m(b.toString())
        }
        get sources() {
            return this._absoluteSources.toArray()
        }
        _getMappingsPtr() {
            return this._mappingsPtr === 0 && this._parseMappings(), this._mappingsPtr
        }
        _parseMappings() {
            const b = this._mappings,
                _ = b.length,
                O = this._wasm.exports.allocate_mappings(_) >>> 0,
                M = new Uint8Array(this._wasm.exports.memory.buffer, O, _);
            for (let z = 0; z < _; z++) M[z] = b.charCodeAt(z);
            const R = this._wasm.exports.parse_mappings(O);
            if (!R) {
                const z = this._wasm.exports.get_last_error();
                let N = `Error parsing mappings (code ${z}): `;
                switch (z) {
                    case 1:
                        N += "the mappings contained a negative line, column, source index, or name index";
                        break;
                    case 2:
                        N += "the mappings contained a number larger than 2**32";
                        break;
                    case 3:
                        N += "reached EOF while in the middle of parsing a VLQ";
                        break;
                    case 4:
                        N += "invalid base 64 character while parsing a VLQ";
                        break;
                    default:
                        N += "unknown error code";
                        break
                }
                throw new Error(N)
            }
            this._mappingsPtr = R
        }
        eachMapping(b, _, O) {
            const M = _ || null,
                R = O || d.GENERATED_ORDER;
            this._wasm.withMappingCallback(z => {
                z.source !== null && (z.source = this._absoluteSources.at(z.source), z.name !== null && (z.name = this._names.at(z.name))), this._computedColumnSpans && z.lastGeneratedColumn === null && (z.lastGeneratedColumn = 1 / 0), b.call(M, z)
            }, () => {
                switch (R) {
                    case d.GENERATED_ORDER:
                        this._wasm.exports.by_generated_location(this._getMappingsPtr());
                        break;
                    case d.ORIGINAL_ORDER:
                        this._wasm.exports.by_original_location(this._getMappingsPtr());
                        break;
                    default:
                        throw new Error("Unknown order of iteration.")
                }
            })
        }
        allGeneratedPositionsFor(b) {
            let _ = r.getArg(b, "source");
            const O = r.getArg(b, "line"),
                M = b.column || 0;
            if (_ = this._findSourceIndex(_), _ < 0) return [];
            if (O < 1) throw new Error("Line numbers must be >= 1");
            if (M < 0) throw new Error("Column numbers must be >= 0");
            const R = [];
            return this._wasm.withMappingCallback(z => {
                let N = z.lastGeneratedColumn;
                this._computedColumnSpans && N === null && (N = 1 / 0), R.push({
                    line: z.generatedLine,
                    column: z.generatedColumn,
                    lastColumn: N
                })
            }, () => {
                this._wasm.exports.all_generated_locations_for(this._getMappingsPtr(), _, O - 1, "column" in b, M)
            }), R
        }
        destroy() {
            this._mappingsPtr !== 0 && (this._wasm.exports.free_mappings(this._mappingsPtr), this._mappingsPtr = 0)
        }
        computeColumnSpans() {
            this._computedColumnSpans || (this._wasm.exports.compute_column_spans(this._getMappingsPtr()), this._computedColumnSpans = !0)
        }
        originalPositionFor(b) {
            const _ = {
                generatedLine: r.getArg(b, "line"),
                generatedColumn: r.getArg(b, "column")
            };
            if (_.generatedLine < 1) throw new Error("Line numbers must be >= 1");
            if (_.generatedColumn < 0) throw new Error("Column numbers must be >= 0");
            let O = r.getArg(b, "bias", d.GREATEST_LOWER_BOUND);
            O == null && (O = d.GREATEST_LOWER_BOUND);
            let M;
            if (this._wasm.withMappingCallback(R => M = R, () => {
                    this._wasm.exports.original_location_for(this._getMappingsPtr(), _.generatedLine - 1, _.generatedColumn, O)
                }), M && M.generatedLine === _.generatedLine) {
                let R = r.getArg(M, "source", null);
                R !== null && (R = this._absoluteSources.at(R));
                let z = r.getArg(M, "name", null);
                return z !== null && (z = this._names.at(z)), {
                    source: R,
                    line: r.getArg(M, "originalLine", null),
                    column: r.getArg(M, "originalColumn", null),
                    name: z
                }
            }
            return {
                source: null,
                line: null,
                column: null,
                name: null
            }
        }
        hasContentsOfAllSources() {
            return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(b) {
                return b == null
            }) : !1
        }
        sourceContentFor(b, _) {
            if (!this.sourcesContent) return null;
            const O = this._findSourceIndex(b);
            if (O >= 0) return this.sourcesContent[O];
            if (_) return null;
            throw new Error('"' + b + '" is not in the SourceMap.')
        }
        generatedPositionFor(b) {
            let _ = r.getArg(b, "source");
            if (_ = this._findSourceIndex(_), _ < 0) return {
                line: null,
                column: null,
                lastColumn: null
            };
            const O = {
                source: _,
                originalLine: r.getArg(b, "line"),
                originalColumn: r.getArg(b, "column")
            };
            if (O.originalLine < 1) throw new Error("Line numbers must be >= 1");
            if (O.originalColumn < 0) throw new Error("Column numbers must be >= 0");
            let M = r.getArg(b, "bias", d.GREATEST_LOWER_BOUND);
            M == null && (M = d.GREATEST_LOWER_BOUND);
            let R;
            if (this._wasm.withMappingCallback(z => R = z, () => {
                    this._wasm.exports.generated_location_for(this._getMappingsPtr(), O.source, O.originalLine - 1, O.originalColumn, M)
                }), R && R.source === O.source) {
                let z = R.lastGeneratedColumn;
                return this._computedColumnSpans && z === null && (z = 1 / 0), {
                    line: r.getArg(R, "generatedLine", null),
                    column: r.getArg(R, "generatedColumn", null),
                    lastColumn: z
                }
            }
            return {
                line: null,
                column: null,
                lastColumn: null
            }
        }
    }
    m.prototype.consumer = d, Ua.BasicSourceMapConsumer = m;
    class p extends d {
        constructor(b, _) {
            return super(f).then(O => {
                let M = b;
                typeof b == "string" && (M = r.parseSourceMapInput(b));
                const R = r.getArg(M, "version"),
                    z = r.getArg(M, "sections");
                if (R != O._version) throw new Error("Unsupported version: " + R);
                let N = {
                    line: -1,
                    column: 0
                };
                return Promise.all(z.map(V => {
                    if (V.url) throw new Error("Support for url field in sections not implemented.");
                    const F = r.getArg(V, "offset"),
                        Q = r.getArg(F, "line"),
                        ue = r.getArg(F, "column");
                    if (Q < N.line || Q === N.line && ue < N.column) throw new Error("Section offsets must be ordered and non-overlapping.");
                    return N = F, new d(r.getArg(V, "map"), _).then(Ee => ({
                        generatedOffset: {
                            generatedLine: Q + 1,
                            generatedColumn: ue + 1
                        },
                        consumer: Ee
                    }))
                })).then(V => (O._sections = V, O))
            })
        }
        get sources() {
            const b = [];
            for (let _ = 0; _ < this._sections.length; _++)
                for (let O = 0; O < this._sections[_].consumer.sources.length; O++) b.push(this._sections[_].consumer.sources[O]);
            return b
        }
        originalPositionFor(b) {
            const _ = {
                    generatedLine: r.getArg(b, "line"),
                    generatedColumn: r.getArg(b, "column")
                },
                O = i.search(_, this._sections, function(R, z) {
                    const N = R.generatedLine - z.generatedOffset.generatedLine;
                    return N || R.generatedColumn - (z.generatedOffset.generatedColumn - 1)
                }),
                M = this._sections[O];
            return M ? M.consumer.originalPositionFor({
                line: _.generatedLine - (M.generatedOffset.generatedLine - 1),
                column: _.generatedColumn - (M.generatedOffset.generatedLine === _.generatedLine ? M.generatedOffset.generatedColumn - 1 : 0),
                bias: b.bias
            }) : {
                source: null,
                line: null,
                column: null,
                name: null
            }
        }
        hasContentsOfAllSources() {
            return this._sections.every(function(b) {
                return b.consumer.hasContentsOfAllSources()
            })
        }
        sourceContentFor(b, _) {
            for (let O = 0; O < this._sections.length; O++) {
                const R = this._sections[O].consumer.sourceContentFor(b, !0);
                if (R) return R
            }
            if (_) return null;
            throw new Error('"' + b + '" is not in the SourceMap.')
        }
        _findSectionIndex(b) {
            for (let _ = 0; _ < this._sections.length; _++) {
                const {
                    consumer: O
                } = this._sections[_];
                if (O._findSourceIndex(b) !== -1) return _
            }
            return -1
        }
        generatedPositionFor(b) {
            const _ = this._findSectionIndex(r.getArg(b, "source")),
                O = _ >= 0 ? this._sections[_] : null,
                M = _ >= 0 && _ + 1 < this._sections.length ? this._sections[_ + 1] : null,
                R = O && O.consumer.generatedPositionFor(b);
            if (R && R.line !== null) {
                const z = O.generatedOffset.generatedLine - 1,
                    N = O.generatedOffset.generatedColumn - 1;
                return R.line === 1 && (R.column += N, typeof R.lastColumn == "number" && (R.lastColumn += N)), R.lastColumn === 1 / 0 && M && R.line === M.generatedOffset.generatedLine && (R.lastColumn = M.generatedOffset.generatedColumn - 2), R.line += z, R
            }
            return {
                line: null,
                column: null,
                lastColumn: null
            }
        }
        allGeneratedPositionsFor(b) {
            const _ = this._findSectionIndex(r.getArg(b, "source")),
                O = _ >= 0 ? this._sections[_] : null,
                M = _ >= 0 && _ + 1 < this._sections.length ? this._sections[_ + 1] : null;
            return O ? O.consumer.allGeneratedPositionsFor(b).map(R => {
                const z = O.generatedOffset.generatedLine - 1,
                    N = O.generatedOffset.generatedColumn - 1;
                return R.line === 1 && (R.column += N, typeof R.lastColumn == "number" && (R.lastColumn += N)), R.lastColumn === 1 / 0 && M && R.line === M.generatedOffset.generatedLine && (R.lastColumn = M.generatedOffset.generatedColumn - 2), R.line += z, R
            }) : []
        }
        eachMapping(b, _, O) {
            this._sections.forEach((M, R) => {
                const z = R + 1 < this._sections.length ? this._sections[R + 1] : null,
                    {
                        generatedOffset: N
                    } = M,
                    V = N.generatedLine - 1,
                    F = N.generatedColumn - 1;
                M.consumer.eachMapping(function(Q) {
                    Q.generatedLine === 1 && (Q.generatedColumn += F, typeof Q.lastGeneratedColumn == "number" && (Q.lastGeneratedColumn += F)), Q.lastGeneratedColumn === 1 / 0 && z && Q.generatedLine === z.generatedOffset.generatedLine && (Q.lastGeneratedColumn = z.generatedOffset.generatedColumn - 2), Q.generatedLine += V, b.call(this, Q)
                }, _, O)
            })
        }
        computeColumnSpans() {
            for (let b = 0; b < this._sections.length; b++) this._sections[b].consumer.computeColumnSpans()
        }
        destroy() {
            for (let b = 0; b < this._sections.length; b++) this._sections[b].consumer.destroy()
        }
    }
    Ua.IndexedSourceMapConsumer = p;

    function g(S, b) {
        let _ = S;
        typeof S == "string" && (_ = r.parseSourceMapInput(S));
        const O = _.sections != null ? new p(_, b) : new m(_, b);
        return Promise.resolve(O)
    }

    function v(S, b) {
        return m.fromSourceMap(S, b)
    }
    return Ua
}
var Ws = {},
    Ch;

function Ly() {
    if (Ch) return Ws;
    Ch = 1;
    const r = Sg().SourceMapGenerator,
        i = _u(),
        s = /(\r?\n)/,
        o = 10,
        c = "$$$isSourceNode$$$";
    class f {
        constructor(m, p, g, v, S) {
            this.children = [], this.sourceContents = {}, this.line = m ? ? null, this.column = p ? ? null, this.source = g ? ? null, this.name = S ? ? null, this[c] = !0, v != null && this.add(v)
        }
        static fromStringWithSourceMap(m, p, g) {
            const v = new f,
                S = m.split(s);
            let b = 0;
            const _ = function() {
                const V = Q(),
                    F = Q() || "";
                return V + F;

                function Q() {
                    return b < S.length ? S[b++] : void 0
                }
            };
            let O = 1,
                M = 0,
                R = null,
                z;
            return p.eachMapping(function(V) {
                if (R !== null)
                    if (O < V.generatedLine) N(R, _()), O++, M = 0;
                    else {
                        z = S[b] || "";
                        const F = z.substr(0, V.generatedColumn - M);
                        S[b] = z.substr(V.generatedColumn - M), M = V.generatedColumn, N(R, F), R = V;
                        return
                    }
                for (; O < V.generatedLine;) v.add(_()), O++;
                M < V.generatedColumn && (z = S[b] || "", v.add(z.substr(0, V.generatedColumn)), S[b] = z.substr(V.generatedColumn), M = V.generatedColumn), R = V
            }, this), b < S.length && (R && N(R, _()), v.add(S.splice(b).join(""))), p.sources.forEach(function(V) {
                const F = p.sourceContentFor(V);
                F != null && (g != null && (V = i.join(g, V)), v.setSourceContent(V, F))
            }), v;

            function N(V, F) {
                if (V === null || V.source === void 0) v.add(F);
                else {
                    const Q = g ? i.join(g, V.source) : V.source;
                    v.add(new f(V.originalLine, V.originalColumn, Q, F, V.name))
                }
            }
        }
        add(m) {
            if (Array.isArray(m)) m.forEach(function(p) {
                this.add(p)
            }, this);
            else if (m[c] || typeof m == "string") m && this.children.push(m);
            else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m);
            return this
        }
        prepend(m) {
            if (Array.isArray(m))
                for (let p = m.length - 1; p >= 0; p--) this.prepend(m[p]);
            else if (m[c] || typeof m == "string") this.children.unshift(m);
            else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m);
            return this
        }
        walk(m) {
            let p;
            for (let g = 0, v = this.children.length; g < v; g++) p = this.children[g], p[c] ? p.walk(m) : p !== "" && m(p, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
            })
        }
        join(m) {
            let p, g;
            const v = this.children.length;
            if (v > 0) {
                for (p = [], g = 0; g < v - 1; g++) p.push(this.children[g]), p.push(m);
                p.push(this.children[g]), this.children = p
            }
            return this
        }
        replaceRight(m, p) {
            const g = this.children[this.children.length - 1];
            return g[c] ? g.replaceRight(m, p) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(m, p) : this.children.push("".replace(m, p)), this
        }
        setSourceContent(m, p) {
            this.sourceContents[i.toSetString(m)] = p
        }
        walkSourceContents(m) {
            for (let g = 0, v = this.children.length; g < v; g++) this.children[g][c] && this.children[g].walkSourceContents(m);
            const p = Object.keys(this.sourceContents);
            for (let g = 0, v = p.length; g < v; g++) m(i.fromSetString(p[g]), this.sourceContents[p[g]])
        }
        toString() {
            let m = "";
            return this.walk(function(p) {
                m += p
            }), m
        }
        toStringWithSourceMap(m) {
            const p = {
                    code: "",
                    line: 1,
                    column: 0
                },
                g = new r(m);
            let v = !1,
                S = null,
                b = null,
                _ = null,
                O = null;
            return this.walk(function(M, R) {
                p.code += M, R.source !== null && R.line !== null && R.column !== null ? ((S !== R.source || b !== R.line || _ !== R.column || O !== R.name) && g.addMapping({
                    source: R.source,
                    original: {
                        line: R.line,
                        column: R.column
                    },
                    generated: {
                        line: p.line,
                        column: p.column
                    },
                    name: R.name
                }), S = R.source, b = R.line, _ = R.column, O = R.name, v = !0) : v && (g.addMapping({
                    generated: {
                        line: p.line,
                        column: p.column
                    }
                }), S = null, v = !1);
                for (let z = 0, N = M.length; z < N; z++) M.charCodeAt(z) === o ? (p.line++, p.column = 0, z + 1 === N ? (S = null, v = !1) : v && g.addMapping({
                    source: R.source,
                    original: {
                        line: R.line,
                        column: R.column
                    },
                    generated: {
                        line: p.line,
                        column: p.column
                    },
                    name: R.name
                })) : p.column++
            }), this.walkSourceContents(function(M, R) {
                g.setSourceContent(M, R)
            }), {
                code: p.code,
                map: g
            }
        }
    }
    return Ws.SourceNode = f, Ws
}
var wh;

function Dy() {
    return wh || (wh = 1, Na.SourceMapGenerator = Sg().SourceMapGenerator, Na.SourceMapConsumer = My().SourceMapConsumer, Na.SourceNode = Ly().SourceNode), Na
}
var so = Dy();
let Ps = !1;
const Ul = new Map,
    zy = 300 * 1e3,
    Ny = 1e3;
setInterval(() => {
    const r = Date.now();
    for (const [i, s] of Ul.entries()) r - s.timestamp > zy && Ul.delete(i)
}, 6e4);
async function Uy() {
    if (!Ps) try {
        await so.SourceMapConsumer.initialize({
            "lib/mappings.wasm": "https://unpkg.com/source-map@0.7.6/lib/mappings.wasm"
        }), Ps = !0
    } catch (r) {
        console.warn("Failed to initialize SourceMapConsumer:", r);
        try {
            await so.SourceMapConsumer.initialize({}), Ps = !0
        } catch (i) {
            throw console.error("SourceMapConsumer initialization failed completely:", i), i
        }
    }
}

function Hy(r) {
    if (!r || !r.stack) return `no-stack-${r?.message||"unknown"}`;
    const o = r.stack.split(`
`).slice(0, 3).map(c => c.replace(/\?t=\d+/g, "").replace(/\?v=[\w\d]+/g, "").replace(/\d{13,}/g, "TIMESTAMP"));
    return `${r.name||"Error"}-${r.message}-${o.join("|")}`
}
const By = "preview-inject/";
async function fu(r, i = 5) {
    if (!r || !r.stack) return {
        errorMessage: r ? .message || "",
        mappedStack: r ? .stack || "",
        sourceContext: []
    };
    const s = Hy(r);
    if (Ul.has(s)) {
        const v = Ul.get(s);
        return console.log("Using cached error mapping for:", s), v
    }
    if (Ul.size >= Ny) return null;
    await Uy();
    const o = r.stack.split(`
`),
        c = [],
        f = [],
        d = new Map,
        m = new Map;
    let p = 0;
    for (const v of o) {
        const S = v.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)|at\s+(.+?):(\d+):(\d+)/);
        if (!S) {
            c.push(v);
            continue
        }
        let b, _, O, M;
        S[1] ? (b = S[1], _ = S[2], O = parseInt(S[3]), M = parseInt(S[4])) : (b = "<anonymous>", _ = S[5], O = parseInt(S[6]), M = parseInt(S[7]));
        try {
            const R = `${_}.map`;
            let z = d.get(R);
            if (!z) {
                const V = await Gy(R);
                z = await new so.SourceMapConsumer(V), d.set(R, z)
            }
            const N = z.originalPositionFor({
                line: O,
                column: M
            });
            if (N.source) {
                if (N.source.includes(By)) continue;
                const V = N.source.split("/").filter(ue => ue !== "..").join("/"),
                    Q = `    at ${N.name||b} (${V}:${N.line}:${N.column})`;
                if (c.push(Q), N.line && N.column && p < i) {
                    p++;
                    try {
                        const ue = await jy(z, N.source, m);
                        if (ue) {
                            const me = qy(ue, N.line, 10);
                            f.push({
                                file: V,
                                line: N.line,
                                column: N.column,
                                context: me
                            })
                        }
                    } catch (ue) {
                        console.warn("Failed to extract source context:", ue)
                    }
                }
            } else c.push(v)
        } catch (R) {
            console.warn("Failed to map stack line:", v, R), c.push(v)
        }
    }
    for (const v of d.values()) v.destroy();
    const g = {
        errorMessage: r ? .message || "",
        mappedStack: c.join(`
`),
        sourceContext: f
    };
    return g.timestamp = Date.now(), Ul.set(s, g), g
}
async function jy(r, i, s) {
    if (s.has(i)) return s.get(i) || null;
    const o = r.sourceContentFor(i);
    return o ? (s.set(i, o), o) : null
}

function qy(r, i, s = 10) {
    const o = r.split(`
`),
        c = Math.max(0, i - s - 1),
        f = Math.min(o.length - 1, i + s - 1),
        d = [];
    for (let m = c; m <= f; m++) {
        const p = m + 1,
            S = `${p===i?">>>":"   "} ${p.toString().padStart(4," ")} | ${o[m]||""}`;
        d.push(S)
    }
    return d.join(`
`)
}
async function Gy(r) {
    try {
        const i = await fetch(r);
        if (!i.ok) throw new Error(`Failed to load source map: ${i.status}`);
        return await i.json()
    } catch (i) {
        const s = i instanceof Error ? i.message : String(i);
        throw new Error(`Error loading source map from ${r}: ${s}`)
    }
}
class Yy {
    client;
    originalConsoleError;
    constructor() {
        const i = Sy();
        i.length > 0 && i.forEach(s => {
            s.type === "console.error" ? this.handleConsoleError(s.args) : s.type === "runtime" && this.handleError(s.args)
        }), this.client = new Eu(window.parent), this.originalConsoleError = console.error, this.initErrorHandlers()
    }
    initErrorHandlers() {
        window.addEventListener("error", this.handleError.bind(this)), window.addEventListener("unhandledrejection", this.handlePromiseRejection.bind(this)), this.interceptConsoleError()
    }
    async handleError(i) {
        const s = i.target;
        if (!(s && s instanceof HTMLElement && s.tagName && ["IMG", "SCRIPT", "LINK", "VIDEO", "AUDIO", "SOURCE", "IFRAME"].includes(s.tagName)) && i.error && i.error.stack) try {
            const o = await fu(i.error);
            this.sendError(o)
        } catch (o) {
            console.warn("Failed to map error stack:", o)
        }
    }
    async handlePromiseRejection(i) {
        const s = i.reason instanceof Error ? i.reason : new Error(String(i.reason));
        if (s.stack) try {
            const o = await fu(s);
            this.sendError(o)
        } catch (o) {
            console.warn("Failed to map promise rejection stack:", o)
        }
    }
    interceptConsoleError() {
        console.error = (...i) => {
            this.originalConsoleError.apply(console, i);
            const s = i.find(o => o instanceof Error);
            if (s && s.stack) this.handleConsoleError(s);
            else if (i.length > 0) {
                const o = i.map(f => typeof f == "object" ? JSON.stringify(f) : String(f)).join(" "),
                    c = new Error(o);
                this.handleConsoleError(c)
            }
        }
    }
    async handleConsoleError(i) {
        try {
            const s = await fu(i);
            this.sendError(s)
        } catch (s) {
            console.warn("Failed to map console error stack:", s)
        }
    }
    reportError(i) {
        this.handleReactError(i)
    }
    async handleReactError(i) {
        try {
            const s = await fu(i);
            this.sendError(s)
        } catch (s) {
            console.warn("Failed to map React error stack:", s)
        }
    }
    async sendError(i) {
        if (!i) {
            console.warn("error is too many");
            return
        }
        if (i.sourceContext.length !== 0) try {
            await this.client.post("runtime-error", i)
        } catch (s) {
            console.warn("Failed to send error to parent:", s)
        }
    }
    destroy() {
        console.error = this.originalConsoleError, this.client.destroy()
    }
}

function Vy() {
    const r = new Yy;
    return window.runtimeErrorCollector = r, r
}
class Qy {
    _client;
    constructor() {
        this._client = new Eu(window.parent), this._domContentLoadedListener()
    }
    _domContentLoadedListener() {
        const i = () => {
            console.log("DOMContentLoaded"), this._client.post("DOMContentLoaded"), document.removeEventListener("DOMContentLoaded", i)
        };
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i) : (console.log("DOMContentLoaded"), this._client.post("DOMContentLoaded"))
    }
}

function Xy() {
    return new Qy
}
const go = r => {
        const i = "/preview/80c515c6-38fa-48df-b87d-8d6ccf8ee854/2499240";
        return r.startsWith(i) ? r.replaceAll(i, "") || "/" : r || "/"
    },
    Zy = "modulepreload",
    Ky = function(r) {
        return "/preview/80c515c6-38fa-48df-b87d-8d6ccf8ee854/2499240/" + r
    },
    Mh = {},
    Zn = function(i, s, o) {
        let c = Promise.resolve();
        if (s && s.length > 0) {
            let p = function(g) {
                return Promise.all(g.map(v => Promise.resolve(v).then(S => ({
                    status: "fulfilled",
                    value: S
                }), S => ({
                    status: "rejected",
                    reason: S
                }))))
            };
            document.getElementsByTagName("link");
            const d = document.querySelector("meta[property=csp-nonce]"),
                m = d ? .nonce || d ? .getAttribute("nonce");
            c = p(s.map(g => {
                if (g = Ky(g), g in Mh) return;
                Mh[g] = !0;
                const v = g.endsWith(".css"),
                    S = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${g}"]${S}`)) return;
                const b = document.createElement("link");
                if (b.rel = v ? "stylesheet" : Zy, v || (b.as = "script"), b.crossOrigin = "", b.href = g, m && b.setAttribute("nonce", m), document.head.appendChild(b), v) return new Promise((_, O) => {
                    b.addEventListener("load", _), b.addEventListener("error", () => O(new Error(`Unable to preload CSS for ${g}`)))
                })
            }))
        }

        function f(d) {
            const m = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (m.payload = d, window.dispatchEvent(m), !m.defaultPrevented) throw d
        }
        return c.then(d => {
            for (const m of d || []) m.status === "rejected" && f(m.reason);
            return i().catch(f)
        })
    };
async function ky() {
    const i = await await Zn(() => Promise.resolve().then(() => C1), void 0).then(s => s.navigatePromise).catch(s => (console.error(s), Promise.resolve(() => {})));
    window.REACT_APP_ROUTER = {
        push: (s, o) => {
            i(s, o)
        },
        replace: (s, o, c) => {
            i(s, {
                replace: !0,
                ...c
            })
        },
        forward: () => {
            i(1)
        },
        back: () => {
            i(-1)
        },
        refresh: () => {
            i(0)
        },
        prefetch: (s, o) => {
            i(s, o)
        }
    }
}
const Eg = new Promise(r => {
        ky().then(() => {
            r(window.REACT_APP_ROUTER)
        })
    }),
    mo = () => window.REACT_APP_ROUTER,
    _g = new Eu(window.parent),
    oo = async (r, i) => {
        await _g.post("routeWillChange", {
            next: go(r)
        }, i)
    };

function $y(r) {
    const i = document.querySelector(r);
    i && i.scrollIntoView({
        behavior: "smooth"
    })
}

function Jy() {
    const r = window.open;
    return window.open = function(i, s, o) {
        return i && typeof i == "string" && i.startsWith("#") ? ($y(i), null) : (r(i, "_blank", o), null)
    }, () => {
        window.open = r
    }
}

function Fy() {
    const r = async i => {
        const o = i.target.closest("a");
        if (!o || o.tagName !== "A") return;
        const c = o.getAttribute("href");
        if (c && !["#", "javascript:void(0)", ""].includes(c) && !c.startsWith("#")) {
            if (i.preventDefault(), c.startsWith("/")) {
                const f = mo();
                await oo(c, {
                    timeout: 500
                });
                const d = go(c);
                f.push(d);
                return
            }
            window.open(o.href, "_blank")
        }
    };
    return window.addEventListener("click", r, !0), () => {
        window.removeEventListener("click", r, !0)
    }
}
const Lh = r => r.startsWith("http://") || r.startsWith("https://");

function Wy() {
    const r = () => {
        const i = mo(),
            s = i.push;
        i.push = async function(c, f, d) {
            return Lh(c) ? (window.open(c, "_blank"), Promise.resolve(!1)) : (await oo(c, {
                timeout: 500
            }), s.call(this, c, f, d))
        };
        const o = i.replace;
        i.replace = async function(c, f, d) {
            return Lh(c) ? (window.open(c, "_blank"), Promise.resolve(!1)) : (await oo(c, {
                timeout: 500
            }), o.call(this, c, f, d))
        }
    };
    return window.addEventListener("load", r), () => {
        window.removeEventListener("load", r)
    }
}
async function Py() {
    await Eg;
    const r = Jy(),
        i = Fy(),
        s = Wy();
    return () => {
        _g.destroy(), r(), i(), s()
    }
}
async function Iy() {
    const r = await Zn(() => Promise.resolve().then(() => A1), void 0).then(c => c.default).catch(c => []);
    let i = [],
        s = 0;

    function o(c, f) {
        const {
            path: d = "",
            children: m,
            index: p
        } = c;
        s++;
        const g = p === !0 || d === "",
            v = d && d[0] === "/",
            S = d.slice(-1) === "/" ? d.slice(0, -1) : d,
            b = g ? f.path : `${f.path}/${S}`,
            _ = v && !g ? d : b,
            O = {
                id: s,
                parentId: f.id,
                path: _
            };
        /\*/.test(O.path) || i.push(O), m && m.forEach(M => o(M, O))
    }
    return r.forEach(c => o(c, {
        id: 0,
        path: ""
    })), i
}
async function ev() {
    const r = new Eu(window.parent),
        i = await Iy();
    window.REACT_APP_ROUTES = i, r.post("routes", {
        routes: i
    }), r.on("getRouteInfo", async p => i), await Eg, r.on("routeAction", async p => {
        const g = mo(),
            {
                action: v,
                route: S
            } = p;
        switch (v) {
            case "goForward":
                g.forward();
                break;
            case "goBack":
                g.back();
                break;
            case "refresh":
                g.refresh();
                break;
            case "goTo":
                S && g.push(S);
                break;
            default:
                console.warn("Unknown action:", v)
        }
    });

    function s() {
        const p = window.history.state ? .index ? ? 0,
            g = window.history.length > p + 1,
            v = p > 0,
            S = window.location.pathname;
        r.post("updateNavigationState", {
            canGoForward: g,
            canGoBack: v,
            currentRoute: go(S)
        })
    }

    function o() {
        const p = new MutationObserver(v => {
                v.forEach(S => {
                    (S.type === "childList" || S.type === "characterData") && r.post("titleChanged", {
                        title: document.title
                    })
                })
            }),
            g = document.querySelector("title");
        return r.post("titleChanged", {
            title: document.title
        }), g && p.observe(g, {
            childList: !0,
            characterData: !0,
            subtree: !0
        }), p
    }
    let c = o();

    function f() {
        c.disconnect(), setTimeout(() => {
            c = o()
        }, 100)
    }
    const d = window.history.pushState,
        m = window.history.replaceState;
    return window.history.pushState = function(p, g, v) {
        d.apply(this, arguments), s(), f()
    }, window.history.replaceState = function(p, g, v) {
        m.apply(this, arguments), s(), f()
    }, {
        destroy: () => {
            r.destroy(), c.disconnect()
        }
    }
}
const tv = !0;
console.log("Is preview build:", tv);
async function nv() {
    Vy(), Py(), Xy(), ev()
}
nv();
var Is = {
        exports: {}
    },
    Ha = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;

function lv() {
    if (Dh) return Ha;
    Dh = 1;
    var r = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function s(o, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f), c.key !== void 0 && (d = "" + c.key), "key" in c) {
            f = {};
            for (var m in c) m !== "key" && (f[m] = c[m])
        } else f = c;
        return c = f.ref, {
            $$typeof: r,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return Ha.Fragment = i, Ha.jsx = s, Ha.jsxs = s, Ha
}
var zh;

function av() {
    return zh || (zh = 1, Is.exports = lv()), Is.exports
}
var Wt = av(),
    eo = {
        exports: {}
    },
    re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;

function iv() {
    if (Nh) return re;
    Nh = 1;
    var r = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        S = Symbol.iterator;

    function b(x) {
        return x === null || typeof x != "object" ? null : (x = S && x[S] || x["@@iterator"], typeof x == "function" ? x : null)
    }
    var _ = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        O = Object.assign,
        M = {};

    function R(x, j, k) {
        this.props = x, this.context = j, this.refs = M, this.updater = k || _
    }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(x, j) {
        if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, x, j, "setState")
    }, R.prototype.forceUpdate = function(x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate")
    };

    function z() {}
    z.prototype = R.prototype;

    function N(x, j, k) {
        this.props = x, this.context = j, this.refs = M, this.updater = k || _
    }
    var V = N.prototype = new z;
    V.constructor = N, O(V, R.prototype), V.isPureReactComponent = !0;
    var F = Array.isArray,
        Q = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        ue = Object.prototype.hasOwnProperty;

    function me(x, j, k, K, I, ve) {
        return k = ve.ref, {
            $$typeof: r,
            type: x,
            key: j,
            ref: k !== void 0 ? k : null,
            props: ve
        }
    }

    function Ee(x, j) {
        return me(x.type, j, void 0, void 0, void 0, x.props)
    }

    function pe(x) {
        return typeof x == "object" && x !== null && x.$$typeof === r
    }

    function Y(x) {
        var j = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + x.replace(/[=:]/g, function(k) {
            return j[k]
        })
    }
    var Z = /\/+/g;

    function J(x, j) {
        return typeof x == "object" && x !== null && x.key != null ? Y("" + x.key) : j.toString(36)
    }

    function ne() {}

    function de(x) {
        switch (x.status) {
            case "fulfilled":
                return x.value;
            case "rejected":
                throw x.reason;
            default:
                switch (typeof x.status == "string" ? x.then(ne, ne) : (x.status = "pending", x.then(function(j) {
                    x.status === "pending" && (x.status = "fulfilled", x.value = j)
                }, function(j) {
                    x.status === "pending" && (x.status = "rejected", x.reason = j)
                })), x.status) {
                    case "fulfilled":
                        return x.value;
                    case "rejected":
                        throw x.reason
                }
        }
        throw x
    }

    function he(x, j, k, K, I) {
        var ve = typeof x;
        (ve === "undefined" || ve === "boolean") && (x = null);
        var ie = !1;
        if (x === null) ie = !0;
        else switch (ve) {
            case "bigint":
            case "string":
            case "number":
                ie = !0;
                break;
            case "object":
                switch (x.$$typeof) {
                    case r:
                    case i:
                        ie = !0;
                        break;
                    case v:
                        return ie = x._init, he(ie(x._payload), j, k, K, I)
                }
        }
        if (ie) return I = I(x), ie = K === "" ? "." + J(x, 0) : K, F(I) ? (k = "", ie != null && (k = ie.replace(Z, "$&/") + "/"), he(I, j, k, "", function(tn) {
            return tn
        })) : I != null && (pe(I) && (I = Ee(I, k + (I.key == null || x && x.key === I.key ? "" : ("" + I.key).replace(Z, "$&/") + "/") + ie)), j.push(I)), 1;
        ie = 0;
        var at = K === "" ? "." : K + ":";
        if (F(x))
            for (var we = 0; we < x.length; we++) K = x[we], ve = at + J(K, we), ie += he(K, j, k, ve, I);
        else if (we = b(x), typeof we == "function")
            for (x = we.call(x), we = 0; !(K = x.next()).done;) K = K.value, ve = at + J(K, we++), ie += he(K, j, k, ve, I);
        else if (ve === "object") {
            if (typeof x.then == "function") return he(de(x), j, k, K, I);
            throw j = String(x), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ie
    }

    function U(x, j, k) {
        if (x == null) return x;
        var K = [],
            I = 0;
        return he(x, K, "", "", function(ve) {
            return j.call(k, ve, I++)
        }), K
    }

    function X(x) {
        if (x._status === -1) {
            var j = x._result;
            j = j(), j.then(function(k) {
                (x._status === 0 || x._status === -1) && (x._status = 1, x._result = k)
            }, function(k) {
                (x._status === 0 || x._status === -1) && (x._status = 2, x._result = k)
            }), x._status === -1 && (x._status = 0, x._result = j)
        }
        if (x._status === 1) return x._result.default;
        throw x._result
    }
    var P = typeof reportError == "function" ? reportError : function(x) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
                error: x
            });
            if (!window.dispatchEvent(j)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", x);
            return
        }
        console.error(x)
    };

    function ye() {}
    return re.Children = {
        map: U,
        forEach: function(x, j, k) {
            U(x, function() {
                j.apply(this, arguments)
            }, k)
        },
        count: function(x) {
            var j = 0;
            return U(x, function() {
                j++
            }), j
        },
        toArray: function(x) {
            return U(x, function(j) {
                return j
            }) || []
        },
        only: function(x) {
            if (!pe(x)) throw Error("React.Children.only expected to receive a single React element child.");
            return x
        }
    }, re.Component = R, re.Fragment = s, re.Profiler = c, re.PureComponent = N, re.StrictMode = o, re.Suspense = p, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, re.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(x) {
            return Q.H.useMemoCache(x)
        }
    }, re.cache = function(x) {
        return function() {
            return x.apply(null, arguments)
        }
    }, re.cloneElement = function(x, j, k) {
        if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
        var K = O({}, x.props),
            I = x.key,
            ve = void 0;
        if (j != null)
            for (ie in j.ref !== void 0 && (ve = void 0), j.key !== void 0 && (I = "" + j.key), j) !ue.call(j, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && j.ref === void 0 || (K[ie] = j[ie]);
        var ie = arguments.length - 2;
        if (ie === 1) K.children = k;
        else if (1 < ie) {
            for (var at = Array(ie), we = 0; we < ie; we++) at[we] = arguments[we + 2];
            K.children = at
        }
        return me(x.type, I, void 0, void 0, ve, K)
    }, re.createContext = function(x) {
        return x = {
            $$typeof: d,
            _currentValue: x,
            _currentValue2: x,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, x.Provider = x, x.Consumer = {
            $$typeof: f,
            _context: x
        }, x
    }, re.createElement = function(x, j, k) {
        var K, I = {},
            ve = null;
        if (j != null)
            for (K in j.key !== void 0 && (ve = "" + j.key), j) ue.call(j, K) && K !== "key" && K !== "__self" && K !== "__source" && (I[K] = j[K]);
        var ie = arguments.length - 2;
        if (ie === 1) I.children = k;
        else if (1 < ie) {
            for (var at = Array(ie), we = 0; we < ie; we++) at[we] = arguments[we + 2];
            I.children = at
        }
        if (x && x.defaultProps)
            for (K in ie = x.defaultProps, ie) I[K] === void 0 && (I[K] = ie[K]);
        return me(x, ve, void 0, void 0, null, I)
    }, re.createRef = function() {
        return {
            current: null
        }
    }, re.forwardRef = function(x) {
        return {
            $$typeof: m,
            render: x
        }
    }, re.isValidElement = pe, re.lazy = function(x) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: x
            },
            _init: X
        }
    }, re.memo = function(x, j) {
        return {
            $$typeof: g,
            type: x,
            compare: j === void 0 ? null : j
        }
    }, re.startTransition = function(x) {
        var j = Q.T,
            k = {};
        Q.T = k;
        try {
            var K = x(),
                I = Q.S;
            I !== null && I(k, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(ye, P)
        } catch (ve) {
            P(ve)
        } finally {
            Q.T = j
        }
    }, re.unstable_useCacheRefresh = function() {
        return Q.H.useCacheRefresh()
    }, re.use = function(x) {
        return Q.H.use(x)
    }, re.useActionState = function(x, j, k) {
        return Q.H.useActionState(x, j, k)
    }, re.useCallback = function(x, j) {
        return Q.H.useCallback(x, j)
    }, re.useContext = function(x) {
        return Q.H.useContext(x)
    }, re.useDebugValue = function() {}, re.useDeferredValue = function(x, j) {
        return Q.H.useDeferredValue(x, j)
    }, re.useEffect = function(x, j, k) {
        var K = Q.H;
        if (typeof k == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return K.useEffect(x, j)
    }, re.useId = function() {
        return Q.H.useId()
    }, re.useImperativeHandle = function(x, j, k) {
        return Q.H.useImperativeHandle(x, j, k)
    }, re.useInsertionEffect = function(x, j) {
        return Q.H.useInsertionEffect(x, j)
    }, re.useLayoutEffect = function(x, j) {
        return Q.H.useLayoutEffect(x, j)
    }, re.useMemo = function(x, j) {
        return Q.H.useMemo(x, j)
    }, re.useOptimistic = function(x, j) {
        return Q.H.useOptimistic(x, j)
    }, re.useReducer = function(x, j, k) {
        return Q.H.useReducer(x, j, k)
    }, re.useRef = function(x) {
        return Q.H.useRef(x)
    }, re.useState = function(x) {
        return Q.H.useState(x)
    }, re.useSyncExternalStore = function(x, j, k) {
        return Q.H.useSyncExternalStore(x, j, k)
    }, re.useTransition = function() {
        return Q.H.useTransition()
    }, re.version = "19.1.1", re
}
var Uh;

function po() {
    return Uh || (Uh = 1, eo.exports = iv()), eo.exports
}
var G = po();
const ae = r => typeof r == "string",
    Ba = () => {
        let r, i;
        const s = new Promise((o, c) => {
            r = o, i = c
        });
        return s.resolve = r, s.reject = i, s
    },
    Hh = r => r == null ? "" : "" + r,
    uv = (r, i, s) => {
        r.forEach(o => {
            i[o] && (s[o] = i[o])
        })
    },
    rv = /###/g,
    Bh = r => r && r.indexOf("###") > -1 ? r.replace(rv, ".") : r,
    jh = r => !r || ae(r),
    Ya = (r, i, s) => {
        const o = ae(i) ? i.split(".") : i;
        let c = 0;
        for (; c < o.length - 1;) {
            if (jh(r)) return {};
            const f = Bh(o[c]);
            !r[f] && s && (r[f] = new s), Object.prototype.hasOwnProperty.call(r, f) ? r = r[f] : r = {}, ++c
        }
        return jh(r) ? {} : {
            obj: r,
            k: Bh(o[c])
        }
    },
    qh = (r, i, s) => {
        const {
            obj: o,
            k: c
        } = Ya(r, i, Object);
        if (o !== void 0 || i.length === 1) {
            o[c] = s;
            return
        }
        let f = i[i.length - 1],
            d = i.slice(0, i.length - 1),
            m = Ya(r, d, Object);
        for (; m.obj === void 0 && d.length;) f = `${d[d.length-1]}.${f}`, d = d.slice(0, d.length - 1), m = Ya(r, d, Object), m ? .obj && typeof m.obj[`${m.k}.${f}`] < "u" && (m.obj = void 0);
        m.obj[`${m.k}.${f}`] = s
    },
    sv = (r, i, s, o) => {
        const {
            obj: c,
            k: f
        } = Ya(r, i, Object);
        c[f] = c[f] || [], c[f].push(s)
    },
    yu = (r, i) => {
        const {
            obj: s,
            k: o
        } = Ya(r, i);
        if (s && Object.prototype.hasOwnProperty.call(s, o)) return s[o]
    },
    ov = (r, i, s) => {
        const o = yu(r, s);
        return o !== void 0 ? o : yu(i, s)
    },
    Og = (r, i, s) => {
        for (const o in i) o !== "__proto__" && o !== "constructor" && (o in r ? ae(r[o]) || r[o] instanceof String || ae(i[o]) || i[o] instanceof String ? s && (r[o] = i[o]) : Og(r[o], i[o], s) : r[o] = i[o]);
        return r
    },
    Dl = r => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var cv = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const fv = r => ae(r) ? r.replace(/[&<>"'\/]/g, i => cv[i]) : r;
class dv {
    constructor(i) {
        this.capacity = i, this.regExpMap = new Map, this.regExpQueue = []
    }
    getRegExp(i) {
        const s = this.regExpMap.get(i);
        if (s !== void 0) return s;
        const o = new RegExp(i);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(i, o), this.regExpQueue.push(i), o
    }
}
const hv = [" ", ",", "?", "!", ";"],
    gv = new dv(20),
    mv = (r, i, s) => {
        i = i || "", s = s || "";
        const o = hv.filter(d => i.indexOf(d) < 0 && s.indexOf(d) < 0);
        if (o.length === 0) return !0;
        const c = gv.getRegExp(`(${o.map(d=>d==="?"?"\\?":d).join("|")})`);
        let f = !c.test(r);
        if (!f) {
            const d = r.indexOf(s);
            d > 0 && !c.test(r.substring(0, d)) && (f = !0)
        }
        return f
    },
    co = (r, i, s = ".") => {
        if (!r) return;
        if (r[i]) return Object.prototype.hasOwnProperty.call(r, i) ? r[i] : void 0;
        const o = i.split(s);
        let c = r;
        for (let f = 0; f < o.length;) {
            if (!c || typeof c != "object") return;
            let d, m = "";
            for (let p = f; p < o.length; ++p)
                if (p !== f && (m += s), m += o[p], d = c[m], d !== void 0) {
                    if (["string", "number", "boolean"].indexOf(typeof d) > -1 && p < o.length - 1) continue;
                    f += p - f + 1;
                    break
                }
            c = d
        }
        return c
    },
    Va = r => r ? .replace("_", "-"),
    pv = {
        type: "logger",
        log(r) {
            this.output("log", r)
        },
        warn(r) {
            this.output("warn", r)
        },
        error(r) {
            this.output("error", r)
        },
        output(r, i) {
            console ? .[r] ? .apply ? .(console, i)
        }
    };
class vu {
    constructor(i, s = {}) {
        this.init(i, s)
    }
    init(i, s = {}) {
        this.prefix = s.prefix || "i18next:", this.logger = i || pv, this.options = s, this.debug = s.debug
    }
    log(...i) {
        return this.forward(i, "log", "", !0)
    }
    warn(...i) {
        return this.forward(i, "warn", "", !0)
    }
    error(...i) {
        return this.forward(i, "error", "")
    }
    deprecate(...i) {
        return this.forward(i, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(i, s, o, c) {
        return c && !this.debug ? null : (ae(i[0]) && (i[0] = `${o}${this.prefix} ${i[0]}`), this.logger[s](i))
    }
    create(i) {
        return new vu(this.logger, {
            prefix: `${this.prefix}:${i}:`,
            ...this.options
        })
    }
    clone(i) {
        return i = i || this.options, i.prefix = i.prefix || this.prefix, new vu(this.logger, i)
    }
}
var zt = new vu;
class Ou {
    constructor() {
        this.observers = {}
    }
    on(i, s) {
        return i.split(" ").forEach(o => {
            this.observers[o] || (this.observers[o] = new Map);
            const c = this.observers[o].get(s) || 0;
            this.observers[o].set(s, c + 1)
        }), this
    }
    off(i, s) {
        if (this.observers[i]) {
            if (!s) {
                delete this.observers[i];
                return
            }
            this.observers[i].delete(s)
        }
    }
    emit(i, ...s) {
        this.observers[i] && Array.from(this.observers[i].entries()).forEach(([c, f]) => {
            for (let d = 0; d < f; d++) c(...s)
        }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([c, f]) => {
            for (let d = 0; d < f; d++) c.apply(c, [i, ...s])
        })
    }
}
class Gh extends Ou {
    constructor(i, s = {
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(), this.data = i || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(i) {
        this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
    }
    removeNamespaces(i) {
        const s = this.options.ns.indexOf(i);
        s > -1 && this.options.ns.splice(s, 1)
    }
    getResource(i, s, o, c = {}) {
        const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
            d = c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let m;
        i.indexOf(".") > -1 ? m = i.split(".") : (m = [i, s], o && (Array.isArray(o) ? m.push(...o) : ae(o) && f ? m.push(...o.split(f)) : m.push(o)));
        const p = yu(this.data, m);
        return !p && !s && !o && i.indexOf(".") > -1 && (i = m[0], s = m[1], o = m.slice(2).join(".")), p || !d || !ae(o) ? p : co(this.data ? .[i] ? .[s], o, f)
    }
    addResource(i, s, o, c, f = {
        silent: !1
    }) {
        const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
        let m = [i, s];
        o && (m = m.concat(d ? o.split(d) : o)), i.indexOf(".") > -1 && (m = i.split("."), c = s, s = m[1]), this.addNamespaces(s), qh(this.data, m, c), f.silent || this.emit("added", i, s, o, c)
    }
    addResources(i, s, o, c = {
        silent: !1
    }) {
        for (const f in o)(ae(o[f]) || Array.isArray(o[f])) && this.addResource(i, s, f, o[f], {
            silent: !0
        });
        c.silent || this.emit("added", i, s, o)
    }
    addResourceBundle(i, s, o, c, f, d = {
        silent: !1,
        skipCopy: !1
    }) {
        let m = [i, s];
        i.indexOf(".") > -1 && (m = i.split("."), c = o, o = s, s = m[1]), this.addNamespaces(s);
        let p = yu(this.data, m) || {};
        d.skipCopy || (o = JSON.parse(JSON.stringify(o))), c ? Og(p, o, f) : p = { ...p,
            ...o
        }, qh(this.data, m, p), d.silent || this.emit("added", i, s, o)
    }
    removeResourceBundle(i, s) {
        this.hasResourceBundle(i, s) && delete this.data[i][s], this.removeNamespaces(s), this.emit("removed", i, s)
    }
    hasResourceBundle(i, s) {
        return this.getResource(i, s) !== void 0
    }
    getResourceBundle(i, s) {
        return s || (s = this.options.defaultNS), this.getResource(i, s)
    }
    getDataByLanguage(i) {
        return this.data[i]
    }
    hasLanguageSomeTranslations(i) {
        const s = this.getDataByLanguage(i);
        return !!(s && Object.keys(s) || []).find(c => s[c] && Object.keys(s[c]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var xg = {
    processors: {},
    addPostProcessor(r) {
        this.processors[r.name] = r
    },
    handle(r, i, s, o, c) {
        return r.forEach(f => {
            i = this.processors[f] ? .process(i, s, o, c) ? ? i
        }), i
    }
};
const Rg = Symbol("i18next/PATH_KEY");

function yv() {
    const r = [],
        i = Object.create(null);
    let s;
    return i.get = (o, c) => (s ? .revoke ? .(), c === Rg ? r : (r.push(c), s = Proxy.revocable(o, i), s.proxy)), Proxy.revocable(Object.create(null), i).proxy
}

function fo(r, i) {
    const {
        [Rg]: s
    } = r(yv());
    return s.join(i ? .keySeparator ? ? ".")
}
const Yh = {},
    Vh = r => !ae(r) && typeof r != "boolean" && typeof r != "number";
class Su extends Ou {
    constructor(i, s = {}) {
        super(), uv(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], i, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = zt.create("translator")
    }
    changeLanguage(i) {
        i && (this.language = i)
    }
    exists(i, s = {
        interpolation: {}
    }) {
        const o = { ...s
        };
        return i == null ? !1 : this.resolve(i, o) ? .res !== void 0
    }
    extractFromKey(i, s) {
        let o = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
        o === void 0 && (o = ":");
        const c = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
        let f = s.ns || this.options.defaultNS || [];
        const d = o && i.indexOf(o) > -1,
            m = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !mv(i, o, c);
        if (d && !m) {
            const p = i.match(this.interpolator.nestingRegexp);
            if (p && p.length > 0) return {
                key: i,
                namespaces: ae(f) ? [f] : f
            };
            const g = i.split(o);
            (o !== c || o === c && this.options.ns.indexOf(g[0]) > -1) && (f = g.shift()), i = g.join(c)
        }
        return {
            key: i,
            namespaces: ae(f) ? [f] : f
        }
    }
    translate(i, s, o) {
        let c = typeof s == "object" ? { ...s
        } : s;
        if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (c = { ...c
            }), c || (c = {}), i == null) return "";
        typeof i == "function" && (i = fo(i, c)), Array.isArray(i) || (i = [String(i)]);
        const f = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails,
            d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator,
            {
                key: m,
                namespaces: p
            } = this.extractFromKey(i[i.length - 1], c),
            g = p[p.length - 1];
        let v = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
        v === void 0 && (v = ":");
        const S = c.lng || this.language,
            b = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (S ? .toLowerCase() === "cimode") return b ? f ? {
            res: `${g}${v}${m}`,
            usedKey: m,
            exactUsedKey: m,
            usedLng: S,
            usedNS: g,
            usedParams: this.getUsedParamsDetails(c)
        } : `${g}${v}${m}` : f ? {
            res: m,
            usedKey: m,
            exactUsedKey: m,
            usedLng: S,
            usedNS: g,
            usedParams: this.getUsedParamsDetails(c)
        } : m;
        const _ = this.resolve(i, c);
        let O = _ ? .res;
        const M = _ ? .usedKey || m,
            R = _ ? .exactUsedKey || m,
            z = ["[object Number]", "[object Function]", "[object RegExp]"],
            N = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays,
            V = !this.i18nFormat || this.i18nFormat.handleAsObject,
            F = c.count !== void 0 && !ae(c.count),
            Q = Su.hasDefaultValue(c),
            ue = F ? this.pluralResolver.getSuffix(S, c.count, c) : "",
            me = c.ordinal && F ? this.pluralResolver.getSuffix(S, c.count, {
                ordinal: !1
            }) : "",
            Ee = F && !c.ordinal && c.count === 0,
            pe = Ee && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${ue}`] || c[`defaultValue${me}`] || c.defaultValue;
        let Y = O;
        V && !O && Q && (Y = pe);
        const Z = Vh(Y),
            J = Object.prototype.toString.apply(Y);
        if (V && Y && Z && z.indexOf(J) < 0 && !(ae(N) && Array.isArray(Y))) {
            if (!c.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const ne = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(M, Y, { ...c,
                    ns: p
                }) : `key '${m} (${this.language})' returned an object instead of string.`;
                return f ? (_.res = ne, _.usedParams = this.getUsedParamsDetails(c), _) : ne
            }
            if (d) {
                const ne = Array.isArray(Y),
                    de = ne ? [] : {},
                    he = ne ? R : M;
                for (const U in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, U)) {
                        const X = `${he}${d}${U}`;
                        Q && !O ? de[U] = this.translate(X, { ...c,
                            defaultValue: Vh(pe) ? pe[U] : void 0,
                            joinArrays: !1,
                            ns: p
                        }) : de[U] = this.translate(X, { ...c,
                            joinArrays: !1,
                            ns: p
                        }), de[U] === X && (de[U] = Y[U])
                    }
                O = de
            }
        } else if (V && ae(N) && Array.isArray(O)) O = O.join(N), O && (O = this.extendTranslation(O, i, c, o));
        else {
            let ne = !1,
                de = !1;
            !this.isValidLookup(O) && Q && (ne = !0, O = pe), this.isValidLookup(O) || (de = !0, O = m);
            const U = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && de ? void 0 : O,
                X = Q && pe !== O && this.options.updateMissing;
            if (de || ne || X) {
                if (this.logger.log(X ? "updateKey" : "missingKey", S, g, m, X ? pe : O), d) {
                    const j = this.resolve(m, { ...c,
                        keySeparator: !1
                    });
                    j && j.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let P = [];
                const ye = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && ye && ye[0])
                    for (let j = 0; j < ye.length; j++) P.push(ye[j]);
                else this.options.saveMissingTo === "all" ? P = this.languageUtils.toResolveHierarchy(c.lng || this.language) : P.push(c.lng || this.language);
                const x = (j, k, K) => {
                    const I = Q && K !== O ? K : U;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(j, g, k, I, X, c) : this.backendConnector ? .saveMissing && this.backendConnector.saveMissing(j, g, k, I, X, c), this.emit("missingKey", j, g, k, O)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && F ? P.forEach(j => {
                    const k = this.pluralResolver.getSuffixes(j, c);
                    Ee && c[`defaultValue${this.options.pluralSeparator}zero`] && k.indexOf(`${this.options.pluralSeparator}zero`) < 0 && k.push(`${this.options.pluralSeparator}zero`), k.forEach(K => {
                        x([j], m + K, c[`defaultValue${K}`] || pe)
                    })
                }) : x(P, m, pe))
            }
            O = this.extendTranslation(O, i, c, _, o), de && O === m && this.options.appendNamespaceToMissingKey && (O = `${g}${v}${m}`), (de || ne) && this.options.parseMissingKeyHandler && (O = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${g}${v}${m}` : m, ne ? O : void 0, c))
        }
        return f ? (_.res = O, _.usedParams = this.getUsedParamsDetails(c), _) : O
    }
    extendTranslation(i, s, o, c, f) {
        if (this.i18nFormat ? .parse) i = this.i18nFormat.parse(i, { ...this.options.interpolation.defaultVariables,
            ...o
        }, o.lng || this.language || c.usedLng, c.usedNS, c.usedKey, {
            resolved: c
        });
        else if (!o.skipInterpolation) {
            o.interpolation && this.interpolator.init({ ...o,
                interpolation: { ...this.options.interpolation,
                    ...o.interpolation
                }
            });
            const p = ae(i) && (o ? .interpolation ? .skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let g;
            if (p) {
                const S = i.match(this.interpolator.nestingRegexp);
                g = S && S.length
            }
            let v = o.replace && !ae(o.replace) ? o.replace : o;
            if (this.options.interpolation.defaultVariables && (v = { ...this.options.interpolation.defaultVariables,
                    ...v
                }), i = this.interpolator.interpolate(i, v, o.lng || this.language || c.usedLng, o), p) {
                const S = i.match(this.interpolator.nestingRegexp),
                    b = S && S.length;
                g < b && (o.nest = !1)
            }!o.lng && c && c.res && (o.lng = this.language || c.usedLng), o.nest !== !1 && (i = this.interpolator.nest(i, (...S) => f ? .[0] === S[0] && !o.context ? (this.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${s[0]}`), null) : this.translate(...S, s), o)), o.interpolation && this.interpolator.reset()
        }
        const d = o.postProcess || this.options.postProcess,
            m = ae(d) ? [d] : d;
        return i != null && m ? .length && o.applyPostProcessor !== !1 && (i = xg.handle(m, i, s, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: { ...c,
                usedParams: this.getUsedParamsDetails(o)
            },
            ...o
        } : o, this)), i
    }
    resolve(i, s = {}) {
        let o, c, f, d, m;
        return ae(i) && (i = [i]), i.forEach(p => {
            if (this.isValidLookup(o)) return;
            const g = this.extractFromKey(p, s),
                v = g.key;
            c = v;
            let S = g.namespaces;
            this.options.fallbackNS && (S = S.concat(this.options.fallbackNS));
            const b = s.count !== void 0 && !ae(s.count),
                _ = b && !s.ordinal && s.count === 0,
                O = s.context !== void 0 && (ae(s.context) || typeof s.context == "number") && s.context !== "",
                M = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
            S.forEach(R => {
                this.isValidLookup(o) || (m = R, !Yh[`${M[0]}-${R}`] && this.utils ? .hasLoadedNamespace && !this.utils ? .hasLoadedNamespace(m) && (Yh[`${M[0]}-${R}`] = !0, this.logger.warn(`key "${c}" for languages "${M.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), M.forEach(z => {
                    if (this.isValidLookup(o)) return;
                    d = z;
                    const N = [v];
                    if (this.i18nFormat ? .addLookupKeys) this.i18nFormat.addLookupKeys(N, v, z, R, s);
                    else {
                        let F;
                        b && (F = this.pluralResolver.getSuffix(z, s.count, s));
                        const Q = `${this.options.pluralSeparator}zero`,
                            ue = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (b && (s.ordinal && F.indexOf(ue) === 0 && N.push(v + F.replace(ue, this.options.pluralSeparator)), N.push(v + F), _ && N.push(v + Q)), O) {
                            const me = `${v}${this.options.contextSeparator||"_"}${s.context}`;
                            N.push(me), b && (s.ordinal && F.indexOf(ue) === 0 && N.push(me + F.replace(ue, this.options.pluralSeparator)), N.push(me + F), _ && N.push(me + Q))
                        }
                    }
                    let V;
                    for (; V = N.pop();) this.isValidLookup(o) || (f = V, o = this.getResource(z, R, V, s))
                }))
            })
        }), {
            res: o,
            usedKey: c,
            exactUsedKey: f,
            usedLng: d,
            usedNS: m
        }
    }
    isValidLookup(i) {
        return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "")
    }
    getResource(i, s, o, c = {}) {
        return this.i18nFormat ? .getResource ? this.i18nFormat.getResource(i, s, o, c) : this.resourceStore.getResource(i, s, o, c)
    }
    getUsedParamsDetails(i = {}) {
        const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            o = i.replace && !ae(i.replace);
        let c = o ? i.replace : i;
        if (o && typeof i.count < "u" && (c.count = i.count), this.options.interpolation.defaultVariables && (c = { ...this.options.interpolation.defaultVariables,
                ...c
            }), !o) {
            c = { ...c
            };
            for (const f of s) delete c[f]
        }
        return c
    }
    static hasDefaultValue(i) {
        const s = "defaultValue";
        for (const o in i)
            if (Object.prototype.hasOwnProperty.call(i, o) && s === o.substring(0, s.length) && i[o] !== void 0) return !0;
        return !1
    }
}
class Qh {
    constructor(i) {
        this.options = i, this.supportedLngs = this.options.supportedLngs || !1, this.logger = zt.create("languageUtils")
    }
    getScriptPartFromCode(i) {
        if (i = Va(i), !i || i.indexOf("-") < 0) return null;
        const s = i.split("-");
        return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"))
    }
    getLanguagePartFromCode(i) {
        if (i = Va(i), !i || i.indexOf("-") < 0) return i;
        const s = i.split("-");
        return this.formatLanguageCode(s[0])
    }
    formatLanguageCode(i) {
        if (ae(i) && i.indexOf("-") > -1) {
            let s;
            try {
                s = Intl.getCanonicalLocales(i)[0]
            } catch {}
            return s && this.options.lowerCaseLng && (s = s.toLowerCase()), s || (this.options.lowerCaseLng ? i.toLowerCase() : i)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? i.toLowerCase() : i
    }
    isSupportedCode(i) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (i = this.getLanguagePartFromCode(i)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(i) > -1
    }
    getBestMatchFromCodes(i) {
        if (!i) return null;
        let s;
        return i.forEach(o => {
            if (s) return;
            const c = this.formatLanguageCode(o);
            (!this.options.supportedLngs || this.isSupportedCode(c)) && (s = c)
        }), !s && this.options.supportedLngs && i.forEach(o => {
            if (s) return;
            const c = this.getScriptPartFromCode(o);
            if (this.isSupportedCode(c)) return s = c;
            const f = this.getLanguagePartFromCode(o);
            if (this.isSupportedCode(f)) return s = f;
            s = this.options.supportedLngs.find(d => {
                if (d === f) return d;
                if (!(d.indexOf("-") < 0 && f.indexOf("-") < 0) && (d.indexOf("-") > 0 && f.indexOf("-") < 0 && d.substring(0, d.indexOf("-")) === f || d.indexOf(f) === 0 && f.length > 1)) return d
            })
        }), s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]), s
    }
    getFallbackCodes(i, s) {
        if (!i) return [];
        if (typeof i == "function" && (i = i(s)), ae(i) && (i = [i]), Array.isArray(i)) return i;
        if (!s) return i.default || [];
        let o = i[s];
        return o || (o = i[this.getScriptPartFromCode(s)]), o || (o = i[this.formatLanguageCode(s)]), o || (o = i[this.getLanguagePartFromCode(s)]), o || (o = i.default), o || []
    }
    toResolveHierarchy(i, s) {
        const o = this.getFallbackCodes((s === !1 ? [] : s) || this.options.fallbackLng || [], i),
            c = [],
            f = d => {
                d && (this.isSupportedCode(d) ? c.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))
            };
        return ae(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(i)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(i)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(i))) : ae(i) && f(this.formatLanguageCode(i)), o.forEach(d => {
            c.indexOf(d) < 0 && f(this.formatLanguageCode(d))
        }), c
    }
}
const Xh = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    },
    Zh = {
        select: r => r === 1 ? "one" : "other",
        resolvedOptions: () => ({
            pluralCategories: ["one", "other"]
        })
    };
class vv {
    constructor(i, s = {}) {
        this.languageUtils = i, this.options = s, this.logger = zt.create("pluralResolver"), this.pluralRulesCache = {}
    }
    addRule(i, s) {
        this.rules[i] = s
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(i, s = {}) {
        const o = Va(i === "dev" ? "en" : i),
            c = s.ordinal ? "ordinal" : "cardinal",
            f = JSON.stringify({
                cleanedCode: o,
                type: c
            });
        if (f in this.pluralRulesCache) return this.pluralRulesCache[f];
        let d;
        try {
            d = new Intl.PluralRules(o, {
                type: c
            })
        } catch {
            if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Zh;
            if (!i.match(/-|_/)) return Zh;
            const p = this.languageUtils.getLanguagePartFromCode(i);
            d = this.getRule(p, s)
        }
        return this.pluralRulesCache[f] = d, d
    }
    needsPlural(i, s = {}) {
        let o = this.getRule(i, s);
        return o || (o = this.getRule("dev", s)), o ? .resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(i, s, o = {}) {
        return this.getSuffixes(i, o).map(c => `${s}${c}`)
    }
    getSuffixes(i, s = {}) {
        let o = this.getRule(i, s);
        return o || (o = this.getRule("dev", s)), o ? o.resolvedOptions().pluralCategories.sort((c, f) => Xh[c] - Xh[f]).map(c => `${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${c}`) : []
    }
    getSuffix(i, s, o = {}) {
        const c = this.getRule(i, o);
        return c ? `${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${c.select(s)}` : (this.logger.warn(`no plural rule found for: ${i}`), this.getSuffix("dev", s, o))
    }
}
const Kh = (r, i, s, o = ".", c = !0) => {
        let f = ov(r, i, s);
        return !f && c && ae(s) && (f = co(r, s, o), f === void 0 && (f = co(i, s, o))), f
    },
    to = r => r.replace(/\$/g, "$$$$");
class Sv {
    constructor(i = {}) {
        this.logger = zt.create("interpolator"), this.options = i, this.format = i ? .interpolation ? .format || (s => s), this.init(i)
    }
    init(i = {}) {
        i.interpolation || (i.interpolation = {
            escapeValue: !0
        });
        const {
            escape: s,
            escapeValue: o,
            useRawValueToEscape: c,
            prefix: f,
            prefixEscaped: d,
            suffix: m,
            suffixEscaped: p,
            formatSeparator: g,
            unescapeSuffix: v,
            unescapePrefix: S,
            nestingPrefix: b,
            nestingPrefixEscaped: _,
            nestingSuffix: O,
            nestingSuffixEscaped: M,
            nestingOptionsSeparator: R,
            maxReplaces: z,
            alwaysFormat: N
        } = i.interpolation;
        this.escape = s !== void 0 ? s : fv, this.escapeValue = o !== void 0 ? o : !0, this.useRawValueToEscape = c !== void 0 ? c : !1, this.prefix = f ? Dl(f) : d || "{{", this.suffix = m ? Dl(m) : p || "}}", this.formatSeparator = g || ",", this.unescapePrefix = v ? "" : S || "-", this.unescapeSuffix = this.unescapePrefix ? "" : v || "", this.nestingPrefix = b ? Dl(b) : _ || Dl("$t("), this.nestingSuffix = O ? Dl(O) : M || Dl(")"), this.nestingOptionsSeparator = R || ",", this.maxReplaces = z || 1e3, this.alwaysFormat = N !== void 0 ? N : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const i = (s, o) => s ? .source === o ? (s.lastIndex = 0, s) : new RegExp(o, "g");
        this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = i(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = i(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(i, s, o, c) {
        let f, d, m;
        const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
            g = _ => {
                if (_.indexOf(this.formatSeparator) < 0) {
                    const z = Kh(s, p, _, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(z, void 0, o, { ...c,
                        ...s,
                        interpolationkey: _
                    }) : z
                }
                const O = _.split(this.formatSeparator),
                    M = O.shift().trim(),
                    R = O.join(this.formatSeparator).trim();
                return this.format(Kh(s, p, M, this.options.keySeparator, this.options.ignoreJSONStructure), R, o, { ...c,
                    ...s,
                    interpolationkey: M
                })
            };
        this.resetRegExp();
        const v = c ? .missingInterpolationHandler || this.options.missingInterpolationHandler,
            S = c ? .interpolation ? .skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: _ => to(_)
        }, {
            regex: this.regexp,
            safeValue: _ => this.escapeValue ? to(this.escape(_)) : to(_)
        }].forEach(_ => {
            for (m = 0; f = _.regex.exec(i);) {
                const O = f[1].trim();
                if (d = g(O), d === void 0)
                    if (typeof v == "function") {
                        const R = v(i, f, c);
                        d = ae(R) ? R : ""
                    } else if (c && Object.prototype.hasOwnProperty.call(c, O)) d = "";
                else if (S) {
                    d = f[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${O} for interpolating ${i}`), d = "";
                else !ae(d) && !this.useRawValueToEscape && (d = Hh(d));
                const M = _.safeValue(d);
                if (i = i.replace(f[0], M), S ? (_.regex.lastIndex += d.length, _.regex.lastIndex -= f[0].length) : _.regex.lastIndex = 0, m++, m >= this.maxReplaces) break
            }
        }), i
    }
    nest(i, s, o = {}) {
        let c, f, d;
        const m = (p, g) => {
            const v = this.nestingOptionsSeparator;
            if (p.indexOf(v) < 0) return p;
            const S = p.split(new RegExp(`${v}[ ]*{`));
            let b = `{${S[1]}`;
            p = S[0], b = this.interpolate(b, d);
            const _ = b.match(/'/g),
                O = b.match(/"/g);
            ((_ ? .length ? ? 0) % 2 === 0 && !O || O.length % 2 !== 0) && (b = b.replace(/'/g, '"'));
            try {
                d = JSON.parse(b), g && (d = { ...g,
                    ...d
                })
            } catch (M) {
                return this.logger.warn(`failed parsing options string in nesting for key ${p}`, M), `${p}${v}${b}`
            }
            return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, p
        };
        for (; c = this.nestingRegexp.exec(i);) {
            let p = [];
            d = { ...o
            }, d = d.replace && !ae(d.replace) ? d.replace : d, d.applyPostProcessor = !1, delete d.defaultValue;
            const g = /{.*}/.test(c[1]) ? c[1].lastIndexOf("}") + 1 : c[1].indexOf(this.formatSeparator);
            if (g !== -1 && (p = c[1].slice(g).split(this.formatSeparator).map(v => v.trim()).filter(Boolean), c[1] = c[1].slice(0, g)), f = s(m.call(this, c[1].trim(), d), d), f && c[0] === i && !ae(f)) return f;
            ae(f) || (f = Hh(f)), f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${i}`), f = ""), p.length && (f = p.reduce((v, S) => this.format(v, S, o.lng, { ...o,
                interpolationkey: c[1].trim()
            }), f.trim())), i = i.replace(c[0], f), this.regexp.lastIndex = 0
        }
        return i
    }
}
const bv = r => {
        let i = r.toLowerCase().trim();
        const s = {};
        if (r.indexOf("(") > -1) {
            const o = r.split("(");
            i = o[0].toLowerCase().trim();
            const c = o[1].substring(0, o[1].length - 1);
            i === "currency" && c.indexOf(":") < 0 ? s.currency || (s.currency = c.trim()) : i === "relativetime" && c.indexOf(":") < 0 ? s.range || (s.range = c.trim()) : c.split(";").forEach(d => {
                if (d) {
                    const [m, ...p] = d.split(":"), g = p.join(":").trim().replace(/^'+|'+$/g, ""), v = m.trim();
                    s[v] || (s[v] = g), g === "false" && (s[v] = !1), g === "true" && (s[v] = !0), isNaN(g) || (s[v] = parseInt(g, 10))
                }
            })
        }
        return {
            formatName: i,
            formatOptions: s
        }
    },
    kh = r => {
        const i = {};
        return (s, o, c) => {
            let f = c;
            c && c.interpolationkey && c.formatParams && c.formatParams[c.interpolationkey] && c[c.interpolationkey] && (f = { ...f,
                [c.interpolationkey]: void 0
            });
            const d = o + JSON.stringify(f);
            let m = i[d];
            return m || (m = r(Va(o), c), i[d] = m), m(s)
        }
    },
    Ev = r => (i, s, o) => r(Va(s), o)(i);
class _v {
    constructor(i = {}) {
        this.logger = zt.create("formatter"), this.options = i, this.init(i)
    }
    init(i, s = {
        interpolation: {}
    }) {
        this.formatSeparator = s.interpolation.formatSeparator || ",";
        const o = s.cacheInBuiltFormats ? kh : Ev;
        this.formats = {
            number: o((c, f) => {
                const d = new Intl.NumberFormat(c, { ...f
                });
                return m => d.format(m)
            }),
            currency: o((c, f) => {
                const d = new Intl.NumberFormat(c, { ...f,
                    style: "currency"
                });
                return m => d.format(m)
            }),
            datetime: o((c, f) => {
                const d = new Intl.DateTimeFormat(c, { ...f
                });
                return m => d.format(m)
            }),
            relativetime: o((c, f) => {
                const d = new Intl.RelativeTimeFormat(c, { ...f
                });
                return m => d.format(m, f.range || "day")
            }),
            list: o((c, f) => {
                const d = new Intl.ListFormat(c, { ...f
                });
                return m => d.format(m)
            })
        }
    }
    add(i, s) {
        this.formats[i.toLowerCase().trim()] = s
    }
    addCached(i, s) {
        this.formats[i.toLowerCase().trim()] = kh(s)
    }
    format(i, s, o, c = {}) {
        const f = s.split(this.formatSeparator);
        if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find(m => m.indexOf(")") > -1)) {
            const m = f.findIndex(p => p.indexOf(")") > -1);
            f[0] = [f[0], ...f.splice(1, m)].join(this.formatSeparator)
        }
        return f.reduce((m, p) => {
            const {
                formatName: g,
                formatOptions: v
            } = bv(p);
            if (this.formats[g]) {
                let S = m;
                try {
                    const b = c ? .formatParams ? .[c.interpolationkey] || {},
                        _ = b.locale || b.lng || c.locale || c.lng || o;
                    S = this.formats[g](m, _, { ...v,
                        ...c,
                        ...b
                    })
                } catch (b) {
                    this.logger.warn(b)
                }
                return S
            } else this.logger.warn(`there was no format function for ${g}`);
            return m
        }, i)
    }
}
const Ov = (r, i) => {
    r.pending[i] !== void 0 && (delete r.pending[i], r.pendingCount--)
};
class xv extends Ou {
    constructor(i, s, o, c = {}) {
        super(), this.backend = i, this.store = s, this.services = o, this.languageUtils = o.languageUtils, this.options = c, this.logger = zt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = c.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5, this.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350, this.state = {}, this.queue = [], this.backend ? .init ? .(o, c.backend, c)
    }
    queueLoad(i, s, o, c) {
        const f = {},
            d = {},
            m = {},
            p = {};
        return i.forEach(g => {
            let v = !0;
            s.forEach(S => {
                const b = `${g}|${S}`;
                !o.reload && this.store.hasResourceBundle(g, S) ? this.state[b] = 2 : this.state[b] < 0 || (this.state[b] === 1 ? d[b] === void 0 && (d[b] = !0) : (this.state[b] = 1, v = !1, d[b] === void 0 && (d[b] = !0), f[b] === void 0 && (f[b] = !0), p[S] === void 0 && (p[S] = !0)))
            }), v || (m[g] = !0)
        }), (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: c
        }), {
            toLoad: Object.keys(f),
            pending: Object.keys(d),
            toLoadLanguages: Object.keys(m),
            toLoadNamespaces: Object.keys(p)
        }
    }
    loaded(i, s, o) {
        const c = i.split("|"),
            f = c[0],
            d = c[1];
        s && this.emit("failedLoading", f, d, s), !s && o && this.store.addResourceBundle(f, d, o, void 0, void 0, {
            skipCopy: !0
        }), this.state[i] = s ? -1 : 2, s && o && (this.state[i] = 0);
        const m = {};
        this.queue.forEach(p => {
            sv(p.loaded, [f], d), Ov(p, i), s && p.errors.push(s), p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach(g => {
                m[g] || (m[g] = {});
                const v = p.loaded[g];
                v.length && v.forEach(S => {
                    m[g][S] === void 0 && (m[g][S] = !0)
                })
            }), p.done = !0, p.errors.length ? p.callback(p.errors) : p.callback())
        }), this.emit("loaded", m), this.queue = this.queue.filter(p => !p.done)
    }
    read(i, s, o, c = 0, f = this.retryTimeout, d) {
        if (!i.length) return d(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: i,
                ns: s,
                fcName: o,
                tried: c,
                wait: f,
                callback: d
            });
            return
        }
        this.readingCalls++;
        const m = (g, v) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const S = this.waitingReads.shift();
                    this.read(S.lng, S.ns, S.fcName, S.tried, S.wait, S.callback)
                }
                if (g && v && c < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, i, s, o, c + 1, f * 2, d)
                    }, f);
                    return
                }
                d(g, v)
            },
            p = this.backend[o].bind(this.backend);
        if (p.length === 2) {
            try {
                const g = p(i, s);
                g && typeof g.then == "function" ? g.then(v => m(null, v)).catch(m) : m(null, g)
            } catch (g) {
                m(g)
            }
            return
        }
        return p(i, s, m)
    }
    prepareLoading(i, s, o = {}, c) {
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), c && c();
        ae(i) && (i = this.languageUtils.toResolveHierarchy(i)), ae(s) && (s = [s]);
        const f = this.queueLoad(i, s, o, c);
        if (!f.toLoad.length) return f.pending.length || c(), null;
        f.toLoad.forEach(d => {
            this.loadOne(d)
        })
    }
    load(i, s, o) {
        this.prepareLoading(i, s, {}, o)
    }
    reload(i, s, o) {
        this.prepareLoading(i, s, {
            reload: !0
        }, o)
    }
    loadOne(i, s = "") {
        const o = i.split("|"),
            c = o[0],
            f = o[1];
        this.read(c, f, "read", void 0, void 0, (d, m) => {
            d && this.logger.warn(`${s}loading namespace ${f} for language ${c} failed`, d), !d && m && this.logger.log(`${s}loaded namespace ${f} for language ${c}`, m), this.loaded(i, d, m)
        })
    }
    saveMissing(i, s, o, c, f, d = {}, m = () => {}) {
        if (this.services ? .utils ? .hasLoadedNamespace && !this.services ? .utils ? .hasLoadedNamespace(s)) {
            this.logger.warn(`did not save key "${o}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(o == null || o === "")) {
            if (this.backend ? .create) {
                const p = { ...d,
                        isUpdate: f
                    },
                    g = this.backend.create.bind(this.backend);
                if (g.length < 6) try {
                    let v;
                    g.length === 5 ? v = g(i, s, o, c, p) : v = g(i, s, o, c), v && typeof v.then == "function" ? v.then(S => m(null, S)).catch(m) : m(null, v)
                } catch (v) {
                    m(v)
                } else g(i, s, o, c, m, p)
            }!i || !i[0] || this.store.addResource(i[0], s, o, c)
        }
    }
}
const $h = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: r => {
            let i = {};
            if (typeof r[1] == "object" && (i = r[1]), ae(r[1]) && (i.defaultValue = r[1]), ae(r[2]) && (i.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
                const s = r[3] || r[2];
                Object.keys(s).forEach(o => {
                    i[o] = s[o]
                })
            }
            return i
        },
        interpolation: {
            escapeValue: !0,
            format: r => r,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        },
        cacheInBuiltFormats: !0
    }),
    Jh = r => (ae(r.ns) && (r.ns = [r.ns]), ae(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), ae(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs ? .indexOf ? .("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate), r),
    du = () => {},
    Rv = r => {
        Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(s => {
            typeof r[s] == "function" && (r[s] = r[s].bind(r))
        })
    };
class Qa extends Ou {
    constructor(i = {}, s) {
        if (super(), this.options = Jh(i), this.services = {}, this.logger = zt, this.modules = {
                external: []
            }, Rv(this), s && !this.isInitialized && !i.isClone) {
            if (!this.options.initAsync) return this.init(i, s), this;
            setTimeout(() => {
                this.init(i, s)
            }, 0)
        }
    }
    init(i = {}, s) {
        this.isInitializing = !0, typeof i == "function" && (s = i, i = {}), i.defaultNS == null && i.ns && (ae(i.ns) ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
        const o = $h();
        this.options = { ...o,
            ...this.options,
            ...Jh(i)
        }, this.options.interpolation = { ...o.interpolation,
            ...this.options.interpolation
        }, i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
        const c = g => g ? typeof g == "function" ? new g : g : null;
        if (!this.options.isClone) {
            this.modules.logger ? zt.init(c(this.modules.logger), this.options) : zt.init(null, this.options);
            let g;
            this.modules.formatter ? g = this.modules.formatter : g = _v;
            const v = new Qh(this.options);
            this.store = new Gh(this.options.resources, this.options);
            const S = this.services;
            S.logger = zt, S.resourceStore = this.store, S.languageUtils = v, S.pluralResolver = new vv(v, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), g && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (S.formatter = c(g), S.formatter.init && S.formatter.init(S, this.options), this.options.interpolation.format = S.formatter.format.bind(S.formatter)), S.interpolator = new Sv(this.options), S.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, S.backendConnector = new xv(c(this.modules.backend), S.resourceStore, S, this.options), S.backendConnector.on("*", (_, ...O) => {
                this.emit(_, ...O)
            }), this.modules.languageDetector && (S.languageDetector = c(this.modules.languageDetector), S.languageDetector.init && S.languageDetector.init(S, this.options.detection, this.options)), this.modules.i18nFormat && (S.i18nFormat = c(this.modules.i18nFormat), S.i18nFormat.init && S.i18nFormat.init(this)), this.translator = new Su(this.services, this.options), this.translator.on("*", (_, ...O) => {
                this.emit(_, ...O)
            }), this.modules.external.forEach(_ => {
                _.init && _.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, s || (s = du), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(g => {
            this[g] = (...v) => this.store[g](...v)
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(g => {
            this[g] = (...v) => (this.store[g](...v), this)
        });
        const m = Ba(),
            p = () => {
                const g = (v, S) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), m.resolve(S), s(v, S)
                };
                if (this.languages && !this.isInitialized) return g(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, g)
            };
        return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0), m
    }
    loadResources(i, s = du) {
        let o = s;
        const c = ae(i) ? i : this.language;
        if (typeof i == "function" && (o = i), !this.options.resources || this.options.partialBundledLanguages) {
            if (c ? .toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return o();
            const f = [],
                d = m => {
                    if (!m || m === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(m).forEach(g => {
                        g !== "cimode" && f.indexOf(g) < 0 && f.push(g)
                    })
                };
            c ? d(c) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p => d(p)), this.options.preload ? .forEach ? .(m => d(m)), this.services.backendConnector.load(f, this.options.ns, m => {
                !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(m)
            })
        } else o(null)
    }
    reloadResources(i, s, o) {
        const c = Ba();
        return typeof i == "function" && (o = i, i = void 0), typeof s == "function" && (o = s, s = void 0), i || (i = this.languages), s || (s = this.options.ns), o || (o = du), this.services.backendConnector.reload(i, s, f => {
            c.resolve(), o(f)
        }), c
    }
    use(i) {
        if (!i) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!i.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && xg.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this
    }
    setResolvedLanguage(i) {
        if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1)) {
            for (let s = 0; s < this.languages.length; s++) {
                const o = this.languages[s];
                if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
                    this.resolvedLanguage = o;
                    break
                }
            }!this.resolvedLanguage && this.languages.indexOf(i) < 0 && this.store.hasLanguageSomeTranslations(i) && (this.resolvedLanguage = i, this.languages.unshift(i))
        }
    }
    changeLanguage(i, s) {
        this.isLanguageChangingTo = i;
        const o = Ba();
        this.emit("languageChanging", i);
        const c = m => {
                this.language = m, this.languages = this.services.languageUtils.toResolveHierarchy(m), this.resolvedLanguage = void 0, this.setResolvedLanguage(m)
            },
            f = (m, p) => {
                p ? this.isLanguageChangingTo === i && (c(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, o.resolve((...g) => this.t(...g)), s && s(m, (...g) => this.t(...g))
            },
            d = m => {
                !i && !m && this.services.languageDetector && (m = []);
                const p = ae(m) ? m : m && m[0],
                    g = this.store.hasLanguageSomeTranslations(p) ? p : this.services.languageUtils.getBestMatchFromCodes(ae(m) ? [m] : m);
                g && (this.language || c(g), this.translator.language || this.translator.changeLanguage(g), this.services.languageDetector ? .cacheUserLanguage ? .(g)), this.loadResources(g, v => {
                    f(v, g)
                })
            };
        return !i && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(i), o
    }
    getFixedT(i, s, o) {
        const c = (f, d, ...m) => {
            let p;
            typeof d != "object" ? p = this.options.overloadTranslationOptionHandler([f, d].concat(m)) : p = { ...d
            }, p.lng = p.lng || c.lng, p.lngs = p.lngs || c.lngs, p.ns = p.ns || c.ns, p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || o || c.keyPrefix);
            const g = this.options.keySeparator || ".";
            let v;
            return p.keyPrefix && Array.isArray(f) ? v = f.map(S => (typeof S == "function" && (S = fo(S, d)), `${p.keyPrefix}${g}${S}`)) : (typeof f == "function" && (f = fo(f, d)), v = p.keyPrefix ? `${p.keyPrefix}${g}${f}` : f), this.t(v, p)
        };
        return ae(i) ? c.lng = i : c.lngs = i, c.ns = s, c.keyPrefix = o, c
    }
    t(...i) {
        return this.translator ? .translate(...i)
    }
    exists(...i) {
        return this.translator ? .exists(...i)
    }
    setDefaultNamespace(i) {
        this.options.defaultNS = i
    }
    hasLoadedNamespace(i, s = {}) {
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const o = s.lng || this.resolvedLanguage || this.languages[0],
            c = this.options ? this.options.fallbackLng : !1,
            f = this.languages[this.languages.length - 1];
        if (o.toLowerCase() === "cimode") return !0;
        const d = (m, p) => {
            const g = this.services.backendConnector.state[`${m}|${p}`];
            return g === -1 || g === 0 || g === 2
        };
        if (s.precheck) {
            const m = s.precheck(this, d);
            if (m !== void 0) return m
        }
        return !!(this.hasResourceBundle(o, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(o, i) && (!c || d(f, i)))
    }
    loadNamespaces(i, s) {
        const o = Ba();
        return this.options.ns ? (ae(i) && (i = [i]), i.forEach(c => {
            this.options.ns.indexOf(c) < 0 && this.options.ns.push(c)
        }), this.loadResources(c => {
            o.resolve(), s && s(c)
        }), o) : (s && s(), Promise.resolve())
    }
    loadLanguages(i, s) {
        const o = Ba();
        ae(i) && (i = [i]);
        const c = this.options.preload || [],
            f = i.filter(d => c.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
        return f.length ? (this.options.preload = c.concat(f), this.loadResources(d => {
            o.resolve(), s && s(d)
        }), o) : (s && s(), Promise.resolve())
    }
    dir(i) {
        if (i || (i = this.resolvedLanguage || (this.languages ? .length > 0 ? this.languages[0] : this.language)), !i) return "rtl";
        try {
            const c = new Intl.Locale(i);
            if (c && c.getTextInfo) {
                const f = c.getTextInfo();
                if (f && f.direction) return f.direction
            }
        } catch {}
        const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            o = this.services ? .languageUtils || new Qh($h());
        return i.toLowerCase().indexOf("-latn") > 1 ? "ltr" : s.indexOf(o.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(i = {}, s) {
        return new Qa(i, s)
    }
    cloneInstance(i = {}, s = du) {
        const o = i.forkResourceStore;
        o && delete i.forkResourceStore;
        const c = { ...this.options,
                ...i,
                isClone: !0
            },
            f = new Qa(c);
        if ((i.debug !== void 0 || i.prefix !== void 0) && (f.logger = f.logger.clone(i)), ["store", "services", "language"].forEach(m => {
                f[m] = this[m]
            }), f.services = { ...this.services
            }, f.services.utils = {
                hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
            }, o) {
            const m = Object.keys(this.store.data).reduce((p, g) => (p[g] = { ...this.store.data[g]
            }, p[g] = Object.keys(p[g]).reduce((v, S) => (v[S] = { ...p[g][S]
            }, v), p[g]), p), {});
            f.store = new Gh(m, c), f.services.resourceStore = f.store
        }
        return f.translator = new Su(f.services, c), f.translator.on("*", (m, ...p) => {
            f.emit(m, ...p)
        }), f.init(c, s), f.translator.options = c, f.translator.backendConnector.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        }, f
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const We = Qa.createInstance();
We.createInstance = Qa.createInstance;
We.createInstance;
We.dir;
We.init;
We.loadResources;
We.reloadResources;
We.use;
We.changeLanguage;
We.getFixedT;
We.t;
We.exists;
We.setDefaultNamespace;
We.hasLoadedNamespace;
We.loadNamespaces;
We.loadLanguages;
const Av = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    Tv = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    Cv = r => Tv[r],
    wv = r => r.replace(Av, Cv);
let Fh = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: wv
};
const Mv = (r = {}) => {
        Fh = { ...Fh,
            ...r
        }
    },
    Lv = {
        type: "3rdParty",
        init(r) {
            Mv(r.options.react)
        }
    },
    {
        slice: Dv,
        forEach: zv
    } = [];

function Nv(r) {
    return zv.call(Dv.call(arguments, 1), i => {
        if (i)
            for (const s in i) r[s] === void 0 && (r[s] = i[s])
    }), r
}

function Uv(r) {
    return typeof r != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(s => s.test(r))
}
const Wh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    Hv = function(r, i) {
        const o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                path: "/"
            },
            c = encodeURIComponent(i);
        let f = `${r}=${c}`;
        if (o.maxAge > 0) {
            const d = o.maxAge - 0;
            if (Number.isNaN(d)) throw new Error("maxAge should be a Number");
            f += `; Max-Age=${Math.floor(d)}`
        }
        if (o.domain) {
            if (!Wh.test(o.domain)) throw new TypeError("option domain is invalid");
            f += `; Domain=${o.domain}`
        }
        if (o.path) {
            if (!Wh.test(o.path)) throw new TypeError("option path is invalid");
            f += `; Path=${o.path}`
        }
        if (o.expires) {
            if (typeof o.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
            f += `; Expires=${o.expires.toUTCString()}`
        }
        if (o.httpOnly && (f += "; HttpOnly"), o.secure && (f += "; Secure"), o.sameSite) switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
            case !0:
                f += "; SameSite=Strict";
                break;
            case "lax":
                f += "; SameSite=Lax";
                break;
            case "strict":
                f += "; SameSite=Strict";
                break;
            case "none":
                f += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
        return o.partitioned && (f += "; Partitioned"), f
    },
    Ph = {
        create(r, i, s, o) {
            let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            s && (c.expires = new Date, c.expires.setTime(c.expires.getTime() + s * 60 * 1e3)), o && (c.domain = o), document.cookie = Hv(r, i, c)
        },
        read(r) {
            const i = `${r}=`,
                s = document.cookie.split(";");
            for (let o = 0; o < s.length; o++) {
                let c = s[o];
                for (; c.charAt(0) === " ";) c = c.substring(1, c.length);
                if (c.indexOf(i) === 0) return c.substring(i.length, c.length)
            }
            return null
        },
        remove(r, i) {
            this.create(r, "", -1, i)
        }
    };
var Bv = {
        name: "cookie",
        lookup(r) {
            let {
                lookupCookie: i
            } = r;
            if (i && typeof document < "u") return Ph.read(i) || void 0
        },
        cacheUserLanguage(r, i) {
            let {
                lookupCookie: s,
                cookieMinutes: o,
                cookieDomain: c,
                cookieOptions: f
            } = i;
            s && typeof document < "u" && Ph.create(s, r, o, c, f)
        }
    },
    jv = {
        name: "querystring",
        lookup(r) {
            let {
                lookupQuerystring: i
            } = r, s;
            if (typeof window < "u") {
                let {
                    search: o
                } = window.location;
                !window.location.search && window.location.hash ? .indexOf("?") > -1 && (o = window.location.hash.substring(window.location.hash.indexOf("?")));
                const f = o.substring(1).split("&");
                for (let d = 0; d < f.length; d++) {
                    const m = f[d].indexOf("=");
                    m > 0 && f[d].substring(0, m) === i && (s = f[d].substring(m + 1))
                }
            }
            return s
        }
    },
    qv = {
        name: "hash",
        lookup(r) {
            let {
                lookupHash: i,
                lookupFromHashIndex: s
            } = r, o;
            if (typeof window < "u") {
                const {
                    hash: c
                } = window.location;
                if (c && c.length > 2) {
                    const f = c.substring(1);
                    if (i) {
                        const d = f.split("&");
                        for (let m = 0; m < d.length; m++) {
                            const p = d[m].indexOf("=");
                            p > 0 && d[m].substring(0, p) === i && (o = d[m].substring(p + 1))
                        }
                    }
                    if (o) return o;
                    if (!o && s > -1) {
                        const d = c.match(/\/([a-zA-Z-]*)/g);
                        return Array.isArray(d) ? d[typeof s == "number" ? s : 0] ? .replace("/", "") : void 0
                    }
                }
            }
            return o
        }
    };
let zl = null;
const Ih = () => {
    if (zl !== null) return zl;
    try {
        if (zl = typeof window < "u" && window.localStorage !== null, !zl) return !1;
        const r = "i18next.translate.boo";
        window.localStorage.setItem(r, "foo"), window.localStorage.removeItem(r)
    } catch {
        zl = !1
    }
    return zl
};
var Gv = {
    name: "localStorage",
    lookup(r) {
        let {
            lookupLocalStorage: i
        } = r;
        if (i && Ih()) return window.localStorage.getItem(i) || void 0
    },
    cacheUserLanguage(r, i) {
        let {
            lookupLocalStorage: s
        } = i;
        s && Ih() && window.localStorage.setItem(s, r)
    }
};
let Nl = null;
const eg = () => {
    if (Nl !== null) return Nl;
    try {
        if (Nl = typeof window < "u" && window.sessionStorage !== null, !Nl) return !1;
        const r = "i18next.translate.boo";
        window.sessionStorage.setItem(r, "foo"), window.sessionStorage.removeItem(r)
    } catch {
        Nl = !1
    }
    return Nl
};
var Yv = {
        name: "sessionStorage",
        lookup(r) {
            let {
                lookupSessionStorage: i
            } = r;
            if (i && eg()) return window.sessionStorage.getItem(i) || void 0
        },
        cacheUserLanguage(r, i) {
            let {
                lookupSessionStorage: s
            } = i;
            s && eg() && window.sessionStorage.setItem(s, r)
        }
    },
    Vv = {
        name: "navigator",
        lookup(r) {
            const i = [];
            if (typeof navigator < "u") {
                const {
                    languages: s,
                    userLanguage: o,
                    language: c
                } = navigator;
                if (s)
                    for (let f = 0; f < s.length; f++) i.push(s[f]);
                o && i.push(o), c && i.push(c)
            }
            return i.length > 0 ? i : void 0
        }
    },
    Qv = {
        name: "htmlTag",
        lookup(r) {
            let {
                htmlTag: i
            } = r, s;
            const o = i || (typeof document < "u" ? document.documentElement : null);
            return o && typeof o.getAttribute == "function" && (s = o.getAttribute("lang")), s
        }
    },
    Xv = {
        name: "path",
        lookup(r) {
            let {
                lookupFromPathIndex: i
            } = r;
            if (typeof window > "u") return;
            const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(s) ? s[typeof i == "number" ? i : 0] ? .replace("/", "") : void 0
        }
    },
    Zv = {
        name: "subdomain",
        lookup(r) {
            let {
                lookupFromSubdomainIndex: i
            } = r;
            const s = typeof i == "number" ? i + 1 : 1,
                o = typeof window < "u" && window.location ? .hostname ? .match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (o) return o[s]
        }
    };
let Ag = !1;
try {
    document.cookie, Ag = !0
} catch {}
const Tg = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Ag || Tg.splice(1, 1);
const Kv = () => ({
    order: Tg,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: r => r
});
class Cg {
    constructor(i) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector", this.detectors = {}, this.init(i, s)
    }
    init() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                languageUtils: {}
            },
            s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = i, this.options = Nv(s, this.options || {}, Kv()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = c => c.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(Bv), this.addDetector(jv), this.addDetector(Gv), this.addDetector(Yv), this.addDetector(Vv), this.addDetector(Qv), this.addDetector(Xv), this.addDetector(Zv), this.addDetector(qv)
    }
    addDetector(i) {
        return this.detectors[i.name] = i, this
    }
    detect() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order,
            s = [];
        return i.forEach(o => {
            if (this.detectors[o]) {
                let c = this.detectors[o].lookup(this.options);
                c && typeof c == "string" && (c = [c]), c && (s = s.concat(c))
            }
        }), s = s.filter(o => o != null && !Uv(o)).map(o => this.options.convertDetectedLanguage(o)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null
    }
    cacheUserLanguage(i) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(i) > -1 || s.forEach(o => {
            this.detectors[o] && this.detectors[o].cacheUserLanguage(i, this.options)
        }))
    }
}
Cg.type = "languageDetector";
const tg = Object.assign({}),
    Ga = {};
Object.keys(tg).forEach(r => {
    const i = r.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
    if (i) {
        const [, s] = i, o = tg[r];
        Ga[s] || (Ga[s] = {
            translation: {}
        }), o.default && (Ga[s].translation = { ...Ga[s].translation,
            ...o.default
        })
    }
});
We.use(Cg).use(Lv).init({
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    resources: Ga,
    interpolation: {
        escapeValue: !1
    }
});
var no = {
        exports: {}
    },
    ja = {},
    lo = {
        exports: {}
    },
    ao = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;

function kv() {
    return ng || (ng = 1, (function(r) {
        function i(U, X) {
            var P = U.length;
            U.push(X);
            e: for (; 0 < P;) {
                var ye = P - 1 >>> 1,
                    x = U[ye];
                if (0 < c(x, X)) U[ye] = X, U[P] = x, P = ye;
                else break e
            }
        }

        function s(U) {
            return U.length === 0 ? null : U[0]
        }

        function o(U) {
            if (U.length === 0) return null;
            var X = U[0],
                P = U.pop();
            if (P !== X) {
                U[0] = P;
                e: for (var ye = 0, x = U.length, j = x >>> 1; ye < j;) {
                    var k = 2 * (ye + 1) - 1,
                        K = U[k],
                        I = k + 1,
                        ve = U[I];
                    if (0 > c(K, P)) I < x && 0 > c(ve, K) ? (U[ye] = ve, U[I] = P, ye = I) : (U[ye] = K, U[k] = P, ye = k);
                    else if (I < x && 0 > c(ve, P)) U[ye] = ve, U[I] = P, ye = I;
                    else break e
                }
            }
            return X
        }

        function c(U, X) {
            var P = U.sortIndex - X.sortIndex;
            return P !== 0 ? P : U.id - X.id
        }
        if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            r.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date,
                m = d.now();
            r.unstable_now = function() {
                return d.now() - m
            }
        }
        var p = [],
            g = [],
            v = 1,
            S = null,
            b = 3,
            _ = !1,
            O = !1,
            M = !1,
            R = !1,
            z = typeof setTimeout == "function" ? setTimeout : null,
            N = typeof clearTimeout == "function" ? clearTimeout : null,
            V = typeof setImmediate < "u" ? setImmediate : null;

        function F(U) {
            for (var X = s(g); X !== null;) {
                if (X.callback === null) o(g);
                else if (X.startTime <= U) o(g), X.sortIndex = X.expirationTime, i(p, X);
                else break;
                X = s(g)
            }
        }

        function Q(U) {
            if (M = !1, F(U), !O)
                if (s(p) !== null) O = !0, ue || (ue = !0, J());
                else {
                    var X = s(g);
                    X !== null && he(Q, X.startTime - U)
                }
        }
        var ue = !1,
            me = -1,
            Ee = 5,
            pe = -1;

        function Y() {
            return R ? !0 : !(r.unstable_now() - pe < Ee)
        }

        function Z() {
            if (R = !1, ue) {
                var U = r.unstable_now();
                pe = U;
                var X = !0;
                try {
                    e: {
                        O = !1,
                        M && (M = !1, N(me), me = -1),
                        _ = !0;
                        var P = b;
                        try {
                            t: {
                                for (F(U), S = s(p); S !== null && !(S.expirationTime > U && Y());) {
                                    var ye = S.callback;
                                    if (typeof ye == "function") {
                                        S.callback = null, b = S.priorityLevel;
                                        var x = ye(S.expirationTime <= U);
                                        if (U = r.unstable_now(), typeof x == "function") {
                                            S.callback = x, F(U), X = !0;
                                            break t
                                        }
                                        S === s(p) && o(p), F(U)
                                    } else o(p);
                                    S = s(p)
                                }
                                if (S !== null) X = !0;
                                else {
                                    var j = s(g);
                                    j !== null && he(Q, j.startTime - U), X = !1
                                }
                            }
                            break e
                        }
                        finally {
                            S = null, b = P, _ = !1
                        }
                        X = void 0
                    }
                }
                finally {
                    X ? J() : ue = !1
                }
            }
        }
        var J;
        if (typeof V == "function") J = function() {
            V(Z)
        };
        else if (typeof MessageChannel < "u") {
            var ne = new MessageChannel,
                de = ne.port2;
            ne.port1.onmessage = Z, J = function() {
                de.postMessage(null)
            }
        } else J = function() {
            z(Z, 0)
        };

        function he(U, X) {
            me = z(function() {
                U(r.unstable_now())
            }, X)
        }
        r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
            U.callback = null
        }, r.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ee = 0 < U ? Math.floor(1e3 / U) : 5
        }, r.unstable_getCurrentPriorityLevel = function() {
            return b
        }, r.unstable_next = function(U) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = b
            }
            var P = b;
            b = X;
            try {
                return U()
            } finally {
                b = P
            }
        }, r.unstable_requestPaint = function() {
            R = !0
        }, r.unstable_runWithPriority = function(U, X) {
            switch (U) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    U = 3
            }
            var P = b;
            b = U;
            try {
                return X()
            } finally {
                b = P
            }
        }, r.unstable_scheduleCallback = function(U, X, P) {
            var ye = r.unstable_now();
            switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ye + P : ye) : P = ye, U) {
                case 1:
                    var x = -1;
                    break;
                case 2:
                    x = 250;
                    break;
                case 5:
                    x = 1073741823;
                    break;
                case 4:
                    x = 1e4;
                    break;
                default:
                    x = 5e3
            }
            return x = P + x, U = {
                id: v++,
                callback: X,
                priorityLevel: U,
                startTime: P,
                expirationTime: x,
                sortIndex: -1
            }, P > ye ? (U.sortIndex = P, i(g, U), s(p) === null && U === s(g) && (M ? (N(me), me = -1) : M = !0, he(Q, P - ye))) : (U.sortIndex = x, i(p, U), O || _ || (O = !0, ue || (ue = !0, J()))), U
        }, r.unstable_shouldYield = Y, r.unstable_wrapCallback = function(U) {
            var X = b;
            return function() {
                var P = b;
                b = X;
                try {
                    return U.apply(this, arguments)
                } finally {
                    b = P
                }
            }
        }
    })(ao)), ao
}
var lg;

function $v() {
    return lg || (lg = 1, lo.exports = kv()), lo.exports
}
var io = {
        exports: {}
    },
    Fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag;

function Jv() {
    if (ag) return Fe;
    ag = 1;
    var r = po();

    function i(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++) g += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var o = {
            d: {
                f: s,
                r: function() {
                    throw Error(i(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal");

    function f(p, g, v) {
        var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: S == null ? null : "" + S,
            children: p,
            containerInfo: g,
            implementation: v
        }
    }
    var d = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function m(p, g) {
        if (p === "font") return "";
        if (typeof g == "string") return g === "use-credentials" ? g : ""
    }
    return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Fe.createPortal = function(p, g) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(i(299));
        return f(p, g, null, v)
    }, Fe.flushSync = function(p) {
        var g = d.T,
            v = o.p;
        try {
            if (d.T = null, o.p = 2, p) return p()
        } finally {
            d.T = g, o.p = v, o.d.f()
        }
    }, Fe.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(p, g))
    }, Fe.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }, Fe.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var v = g.as,
                S = m(v, g.crossOrigin),
                b = typeof g.integrity == "string" ? g.integrity : void 0,
                _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            v === "style" ? o.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: S,
                integrity: b,
                fetchPriority: _
            }) : v === "script" && o.d.X(p, {
                crossOrigin: S,
                integrity: b,
                fetchPriority: _,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }, Fe.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var v = m(g.as, g.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: v,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else g == null && o.d.M(p)
    }, Fe.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var v = g.as,
                S = m(v, g.crossOrigin);
            o.d.L(p, v, {
                crossOrigin: S,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }, Fe.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var v = m(g.as, g.crossOrigin);
                o.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else o.d.m(p)
    }, Fe.requestFormReset = function(p) {
        o.d.r(p)
    }, Fe.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }, Fe.useFormState = function(p, g, v) {
        return d.H.useFormState(p, g, v)
    }, Fe.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, Fe.version = "19.1.1", Fe
}
var ig;

function Fv() {
    if (ig) return io.exports;
    ig = 1;

    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (i) {
            console.error(i)
        }
    }
    return r(), io.exports = Jv(), io.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug;

function Wv() {
    if (ug) return ja;
    ug = 1;
    var r = $v(),
        i = po(),
        s = Fv();

    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function f(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function m(e) {
        if (f(e) !== e) throw Error(o(188))
    }

    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e), t === null) throw Error(o(188));
            return t !== e ? null : e
        }
        for (var n = e, l = t;;) {
            var a = n.return;
            if (a === null) break;
            var u = a.alternate;
            if (u === null) {
                if (l = a.return, l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (a.child === u.child) {
                for (u = a.child; u;) {
                    if (u === n) return m(a), e;
                    if (u === l) return m(a), t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== l.return) n = a, l = u;
            else {
                for (var h = !1, y = a.child; y;) {
                    if (y === n) {
                        h = !0, n = a, l = u;
                        break
                    }
                    if (y === l) {
                        h = !0, l = a, n = u;
                        break
                    }
                    y = y.sibling
                }
                if (!h) {
                    for (y = u.child; y;) {
                        if (y === n) {
                            h = !0, n = u, l = a;
                            break
                        }
                        if (y === l) {
                            h = !0, l = u, n = a;
                            break
                        }
                        y = y.sibling
                    }
                    if (!h) throw Error(o(189))
                }
            }
            if (n.alternate !== l) throw Error(o(190))
        }
        if (n.tag !== 3) throw Error(o(188));
        return n.stateNode.current === n ? e : t
    }

    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = g(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign,
        S = Symbol.for("react.element"),
        b = Symbol.for("react.transitional.element"),
        _ = Symbol.for("react.portal"),
        O = Symbol.for("react.fragment"),
        M = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        z = Symbol.for("react.provider"),
        N = Symbol.for("react.consumer"),
        V = Symbol.for("react.context"),
        F = Symbol.for("react.forward_ref"),
        Q = Symbol.for("react.suspense"),
        ue = Symbol.for("react.suspense_list"),
        me = Symbol.for("react.memo"),
        Ee = Symbol.for("react.lazy"),
        pe = Symbol.for("react.activity"),
        Y = Symbol.for("react.memo_cache_sentinel"),
        Z = Symbol.iterator;

    function J(e) {
        return e === null || typeof e != "object" ? null : (e = Z && e[Z] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var ne = Symbol.for("react.client.reference");

    function de(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === ne ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case O:
                return "Fragment";
            case R:
                return "Profiler";
            case M:
                return "StrictMode";
            case Q:
                return "Suspense";
            case ue:
                return "SuspenseList";
            case pe:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case _:
                return "Portal";
            case V:
                return (e.displayName || "Context") + ".Provider";
            case N:
                return (e._context.displayName || "Context") + ".Consumer";
            case F:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case me:
                return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
            case Ee:
                t = e._payload, e = e._init;
                try {
                    return de(e(t))
                } catch {}
        }
        return null
    }
    var he = Array.isArray,
        U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        P = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ye = [],
        x = -1;

    function j(e) {
        return {
            current: e
        }
    }

    function k(e) {
        0 > x || (e.current = ye[x], ye[x] = null, x--)
    }

    function K(e, t) {
        x++, ye[x] = e.current, e.current = t
    }
    var I = j(null),
        ve = j(null),
        ie = j(null),
        at = j(null);

    function we(e, t) {
        switch (K(ie, t), K(ve, e), K(I, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Qd(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Qd(t), e = Xd(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        k(I), K(I, e)
    }

    function tn() {
        k(I), k(ve), k(ie)
    }

    function Tu(e) {
        e.memoizedState !== null && K(at, e);
        var t = I.current,
            n = Xd(t, e.type);
        t !== n && (K(ve, e), K(I, n))
    }

    function $a(e) {
        ve.current === e && (k(I), k(ve)), at.current === e && (k(at), wa._currentValue = P)
    }
    var Cu = Object.prototype.hasOwnProperty,
        wu = r.unstable_scheduleCallback,
        Mu = r.unstable_cancelCallback,
        Fg = r.unstable_shouldYield,
        Wg = r.unstable_requestPaint,
        Tt = r.unstable_now,
        Pg = r.unstable_getCurrentPriorityLevel,
        _o = r.unstable_ImmediatePriority,
        Oo = r.unstable_UserBlockingPriority,
        Ja = r.unstable_NormalPriority,
        Ig = r.unstable_LowPriority,
        xo = r.unstable_IdlePriority,
        em = r.log,
        tm = r.unstable_setDisableYieldValue,
        Bl = null,
        it = null;

    function nn(e) {
        if (typeof em == "function" && tm(e), it && typeof it.setStrictMode == "function") try {
            it.setStrictMode(Bl, e)
        } catch {}
    }
    var ut = Math.clz32 ? Math.clz32 : am,
        nm = Math.log,
        lm = Math.LN2;

    function am(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (nm(e) / lm | 0) | 0
    }
    var Fa = 256,
        Wa = 4194304;

    function Tn(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function Pa(e, t, n) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var a = 0,
            u = e.suspendedLanes,
            h = e.pingedLanes;
        e = e.warmLanes;
        var y = l & 134217727;
        return y !== 0 ? (l = y & ~u, l !== 0 ? a = Tn(l) : (h &= y, h !== 0 ? a = Tn(h) : n || (n = y & ~e, n !== 0 && (a = Tn(n))))) : (y = l & ~u, y !== 0 ? a = Tn(y) : h !== 0 ? a = Tn(h) : n || (n = l & ~e, n !== 0 && (a = Tn(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a
    }

    function jl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function im(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Ro() {
        var e = Fa;
        return Fa <<= 1, (Fa & 4194048) === 0 && (Fa = 256), e
    }

    function Ao() {
        var e = Wa;
        return Wa <<= 1, (Wa & 62914560) === 0 && (Wa = 4194304), e
    }

    function Lu(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function ql(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function um(e, t, n, l, a, u) {
        var h = e.pendingLanes;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
        var y = e.entanglements,
            E = e.expirationTimes,
            w = e.hiddenUpdates;
        for (n = h & ~n; 0 < n;) {
            var H = 31 - ut(n),
                q = 1 << H;
            y[H] = 0, E[H] = -1;
            var L = w[H];
            if (L !== null)
                for (w[H] = null, H = 0; H < L.length; H++) {
                    var D = L[H];
                    D !== null && (D.lane &= -536870913)
                }
            n &= ~q
        }
        l !== 0 && To(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(h & ~t))
    }

    function To(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var l = 31 - ut(t);
        e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090
    }

    function Co(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var l = 31 - ut(n),
                a = 1 << l;
            a & t | e[l] & t && (e[l] |= t), n &= ~a
        }
    }

    function Du(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function zu(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function wo() {
        var e = X.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : oh(e.type))
    }

    function rm(e, t) {
        var n = X.p;
        try {
            return X.p = e, t()
        } finally {
            X.p = n
        }
    }
    var ln = Math.random().toString(36).slice(2),
        $e = "__reactFiber$" + ln,
        Ie = "__reactProps$" + ln,
        kn = "__reactContainer$" + ln,
        Nu = "__reactEvents$" + ln,
        sm = "__reactListeners$" + ln,
        om = "__reactHandles$" + ln,
        Mo = "__reactResources$" + ln,
        Gl = "__reactMarker$" + ln;

    function Uu(e) {
        delete e[$e], delete e[Ie], delete e[Nu], delete e[sm], delete e[om]
    }

    function $n(e) {
        var t = e[$e];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[kn] || n[$e]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = $d(e); e !== null;) {
                        if (n = e[$e]) return n;
                        e = $d(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Jn(e) {
        if (e = e[$e] || e[kn]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function Yl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(o(33))
    }

    function Fn(e) {
        var t = e[Mo];
        return t || (t = e[Mo] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Ye(e) {
        e[Gl] = !0
    }
    var Lo = new Set,
        Do = {};

    function Cn(e, t) {
        Wn(e, t), Wn(e + "Capture", t)
    }

    function Wn(e, t) {
        for (Do[e] = t, e = 0; e < t.length; e++) Lo.add(t[e])
    }
    var cm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        zo = {},
        No = {};

    function fm(e) {
        return Cu.call(No, e) ? !0 : Cu.call(zo, e) ? !1 : cm.test(e) ? No[e] = !0 : (zo[e] = !0, !1)
    }

    function Ia(e, t, n) {
        if (fm(t))
            if (n === null) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var l = t.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + n)
            }
    }

    function ei(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + n)
        }
    }

    function Ht(e, t, n, l) {
        if (l === null) e.removeAttribute(n);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, "" + l)
        }
    }
    var Hu, Uo;

    function Pn(e) {
        if (Hu === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Hu = t && t[1] || "", Uo = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Hu + e + Uo
    }
    var Bu = !1;

    function ju(e, t) {
        if (!e || Bu) return "";
        Bu = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var q = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(q.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(q, [])
                                } catch (D) {
                                    var L = D
                                }
                                Reflect.construct(e, [], q)
                            } else {
                                try {
                                    q.call()
                                } catch (D) {
                                    L = D
                                }
                                e.call(q.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (D) {
                                L = D
                            }(q = e()) && typeof q.catch == "function" && q.catch(function() {})
                        }
                    } catch (D) {
                        if (D && L && typeof D.stack == "string") return [D.stack, L.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = l.DetermineComponentFrameRoot(),
                h = u[0],
                y = u[1];
            if (h && y) {
                var E = h.split(`
`),
                    w = y.split(`
`);
                for (a = l = 0; l < E.length && !E[l].includes("DetermineComponentFrameRoot");) l++;
                for (; a < w.length && !w[a].includes("DetermineComponentFrameRoot");) a++;
                if (l === E.length || a === w.length)
                    for (l = E.length - 1, a = w.length - 1; 1 <= l && 0 <= a && E[l] !== w[a];) a--;
                for (; 1 <= l && 0 <= a; l--, a--)
                    if (E[l] !== w[a]) {
                        if (l !== 1 || a !== 1)
                            do
                                if (l--, a--, 0 > a || E[l] !== w[a]) {
                                    var H = `
` + E[l].replace(" at new ", " at ");
                                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H
                                }
                        while (1 <= l && 0 <= a);
                        break
                    }
            }
        } finally {
            Bu = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? Pn(n) : ""
    }

    function dm(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Pn(e.type);
            case 16:
                return Pn("Lazy");
            case 13:
                return Pn("Suspense");
            case 19:
                return Pn("SuspenseList");
            case 0:
            case 15:
                return ju(e.type, !1);
            case 11:
                return ju(e.type.render, !1);
            case 1:
                return ju(e.type, !0);
            case 31:
                return Pn("Activity");
            default:
                return ""
        }
    }

    function Ho(e) {
        try {
            var t = "";
            do t += dm(e), e = e.return; while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }

    function gt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Bo(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function hm(e) {
        var t = Bo(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var a = n.get,
                u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(h) {
                    l = "" + h, u.call(this, h)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(h) {
                    l = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function ti(e) {
        e._valueTracker || (e._valueTracker = hm(e))
    }

    function jo(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            l = "";
        return e && (l = Bo(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1
    }

    function ni(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var gm = /[\n"\\]/g;

    function mt(e) {
        return e.replace(gm, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function qu(e, t, n, l, a, u, h, y) {
        e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + gt(t)) : e.value !== "" + gt(t) && (e.value = "" + gt(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), t != null ? Gu(e, h, gt(t)) : n != null ? Gu(e, h, gt(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + gt(y) : e.removeAttribute("name")
    }

    function qo(e, t, n, l, a, u, h, y) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) return;
            n = n != null ? "" + gt(n) : "", t = t != null ? "" + gt(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t
        }
        l = l ? ? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = y ? e.checked : !!l, e.defaultChecked = !!l, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h)
    }

    function Gu(e, t, n) {
        t === "number" && ni(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function In(e, t, n, l) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + gt(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) {
                    e[a].selected = !0, l && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Go(e, t, n) {
        if (t != null && (t = "" + gt(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + gt(n) : ""
    }

    function Yo(e, t, n, l) {
        if (t == null) {
            if (l != null) {
                if (n != null) throw Error(o(92));
                if (he(l)) {
                    if (1 < l.length) throw Error(o(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""), t = n
        }
        n = gt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l)
    }

    function el(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var mm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Vo(e, t, n) {
        var l = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || mm.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function Qo(e, t, n) {
        if (t != null && typeof t != "object") throw Error(o(62));
        if (e = e.style, n != null) {
            for (var l in n) !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var a in t) l = t[a], t.hasOwnProperty(a) && n[a] !== l && Vo(e, a, l)
        } else
            for (var u in t) t.hasOwnProperty(u) && Vo(e, u, t[u])
    }

    function Yu(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var pm = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        ym = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function li(e) {
        return ym.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Vu = null;

    function Qu(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var tl = null,
        nl = null;

    function Xo(e) {
        var t = Jn(e);
        if (t && (e = t.stateNode)) {
            var n = e[Ie] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (qu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var l = n[t];
                            if (l !== e && l.form === e.form) {
                                var a = l[Ie] || null;
                                if (!a) throw Error(o(90));
                                qu(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                            }
                        }
                        for (t = 0; t < n.length; t++) l = n[t], l.form === e.form && jo(l)
                    }
                    break e;
                case "textarea":
                    Go(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    t = n.value, t != null && In(e, !!n.multiple, t, !1)
            }
        }
    }
    var Xu = !1;

    function Zo(e, t, n) {
        if (Xu) return e(t, n);
        Xu = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (Xu = !1, (tl !== null || nl !== null) && (Vi(), tl && (t = tl, e = nl, nl = tl = null, Xo(t), e)))
                for (t = 0; t < e.length; t++) Xo(e[t])
        }
    }

    function Vl(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var l = n[Ie] || null;
        if (l === null) return null;
        n = l[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(o(231, t, typeof n));
        return n
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Zu = !1;
    if (Bt) try {
        var Ql = {};
        Object.defineProperty(Ql, "passive", {
            get: function() {
                Zu = !0
            }
        }), window.addEventListener("test", Ql, Ql), window.removeEventListener("test", Ql, Ql)
    } catch {
        Zu = !1
    }
    var an = null,
        Ku = null,
        ai = null;

    function Ko() {
        if (ai) return ai;
        var e, t = Ku,
            n = t.length,
            l, a = "value" in an ? an.value : an.textContent,
            u = a.length;
        for (e = 0; e < n && t[e] === a[e]; e++);
        var h = n - e;
        for (l = 1; l <= h && t[n - l] === a[u - l]; l++);
        return ai = a.slice(e, 1 < l ? 1 - l : void 0)
    }

    function ii(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function ui() {
        return !0
    }

    function ko() {
        return !1
    }

    function et(e) {
        function t(n, l, a, u, h) {
            this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = h, this.currentTarget = null;
            for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ui : ko, this.isPropagationStopped = ko, this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ui)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ui)
            },
            persist: function() {},
            isPersistent: ui
        }), t
    }
    var wn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        ri = et(wn),
        Xl = v({}, wn, {
            view: 0,
            detail: 0
        }),
        vm = et(Xl),
        ku, $u, Zl, si = v({}, Xl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Fu,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Zl && (Zl && e.type === "mousemove" ? (ku = e.screenX - Zl.screenX, $u = e.screenY - Zl.screenY) : $u = ku = 0, Zl = e), ku)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : $u
            }
        }),
        $o = et(si),
        Sm = v({}, si, {
            dataTransfer: 0
        }),
        bm = et(Sm),
        Em = v({}, Xl, {
            relatedTarget: 0
        }),
        Ju = et(Em),
        _m = v({}, wn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Om = et(_m),
        xm = v({}, wn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Rm = et(xm),
        Am = v({}, wn, {
            data: 0
        }),
        Jo = et(Am),
        Tm = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Cm = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        wm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Mm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = wm[e]) ? !!t[e] : !1
    }

    function Fu() {
        return Mm
    }
    var Lm = v({}, Xl, {
            key: function(e) {
                if (e.key) {
                    var t = Tm[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = ii(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cm[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Fu,
            charCode: function(e) {
                return e.type === "keypress" ? ii(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Dm = et(Lm),
        zm = v({}, si, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Fo = et(zm),
        Nm = v({}, Xl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Fu
        }),
        Um = et(Nm),
        Hm = v({}, wn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Bm = et(Hm),
        jm = v({}, si, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        qm = et(jm),
        Gm = v({}, wn, {
            newState: 0,
            oldState: 0
        }),
        Ym = et(Gm),
        Vm = [9, 13, 27, 32],
        Wu = Bt && "CompositionEvent" in window,
        Kl = null;
    Bt && "documentMode" in document && (Kl = document.documentMode);
    var Qm = Bt && "TextEvent" in window && !Kl,
        Wo = Bt && (!Wu || Kl && 8 < Kl && 11 >= Kl),
        Po = " ",
        Io = !1;

    function ec(e, t) {
        switch (e) {
            case "keyup":
                return Vm.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function tc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var ll = !1;

    function Xm(e, t) {
        switch (e) {
            case "compositionend":
                return tc(t);
            case "keypress":
                return t.which !== 32 ? null : (Io = !0, Po);
            case "textInput":
                return e = t.data, e === Po && Io ? null : e;
            default:
                return null
        }
    }

    function Zm(e, t) {
        if (ll) return e === "compositionend" || !Wu && ec(e, t) ? (e = Ko(), ai = Ku = an = null, ll = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Wo && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Km = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function nc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Km[e.type] : t === "textarea"
    }

    function lc(e, t, n, l) {
        tl ? nl ? nl.push(l) : nl = [l] : tl = l, t = $i(t, "onChange"), 0 < t.length && (n = new ri("onChange", "change", null, n, l), e.push({
            event: n,
            listeners: t
        }))
    }
    var kl = null,
        $l = null;

    function km(e) {
        jd(e, 0)
    }

    function oi(e) {
        var t = Yl(e);
        if (jo(t)) return e
    }

    function ac(e, t) {
        if (e === "change") return t
    }
    var ic = !1;
    if (Bt) {
        var Pu;
        if (Bt) {
            var Iu = "oninput" in document;
            if (!Iu) {
                var uc = document.createElement("div");
                uc.setAttribute("oninput", "return;"), Iu = typeof uc.oninput == "function"
            }
            Pu = Iu
        } else Pu = !1;
        ic = Pu && (!document.documentMode || 9 < document.documentMode)
    }

    function rc() {
        kl && (kl.detachEvent("onpropertychange", sc), $l = kl = null)
    }

    function sc(e) {
        if (e.propertyName === "value" && oi($l)) {
            var t = [];
            lc(t, $l, e, Qu(e)), Zo(km, t)
        }
    }

    function $m(e, t, n) {
        e === "focusin" ? (rc(), kl = t, $l = n, kl.attachEvent("onpropertychange", sc)) : e === "focusout" && rc()
    }

    function Jm(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return oi($l)
    }

    function Fm(e, t) {
        if (e === "click") return oi(t)
    }

    function Wm(e, t) {
        if (e === "input" || e === "change") return oi(t)
    }

    function Pm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var rt = typeof Object.is == "function" ? Object.is : Pm;

    function Jl(e, t) {
        if (rt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            l = Object.keys(t);
        if (n.length !== l.length) return !1;
        for (l = 0; l < n.length; l++) {
            var a = n[l];
            if (!Cu.call(t, a) || !rt(e[a], t[a])) return !1
        }
        return !0
    }

    function oc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function cc(e, t) {
        var n = oc(e);
        e = 0;
        for (var l; n;) {
            if (n.nodeType === 3) {
                if (l = e + n.textContent.length, e <= t && l >= t) return {
                    node: n,
                    offset: t - e
                };
                e = l
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = oc(n)
        }
    }

    function fc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function dc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ni(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = ni(e.document)
        }
        return t
    }

    function er(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Im = Bt && "documentMode" in document && 11 >= document.documentMode,
        al = null,
        tr = null,
        Fl = null,
        nr = !1;

    function hc(e, t, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        nr || al == null || al !== ni(l) || (l = al, "selectionStart" in l && er(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), Fl && Jl(Fl, l) || (Fl = l, l = $i(tr, "onSelect"), 0 < l.length && (t = new ri("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: l
        }), t.target = al)))
    }

    function Mn(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var il = {
            animationend: Mn("Animation", "AnimationEnd"),
            animationiteration: Mn("Animation", "AnimationIteration"),
            animationstart: Mn("Animation", "AnimationStart"),
            transitionrun: Mn("Transition", "TransitionRun"),
            transitionstart: Mn("Transition", "TransitionStart"),
            transitioncancel: Mn("Transition", "TransitionCancel"),
            transitionend: Mn("Transition", "TransitionEnd")
        },
        lr = {},
        gc = {};
    Bt && (gc = document.createElement("div").style, "AnimationEvent" in window || (delete il.animationend.animation, delete il.animationiteration.animation, delete il.animationstart.animation), "TransitionEvent" in window || delete il.transitionend.transition);

    function Ln(e) {
        if (lr[e]) return lr[e];
        if (!il[e]) return e;
        var t = il[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in gc) return lr[e] = t[n];
        return e
    }
    var mc = Ln("animationend"),
        pc = Ln("animationiteration"),
        yc = Ln("animationstart"),
        ep = Ln("transitionrun"),
        tp = Ln("transitionstart"),
        np = Ln("transitioncancel"),
        vc = Ln("transitionend"),
        Sc = new Map,
        ar = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ar.push("scrollEnd");

    function Ot(e, t) {
        Sc.set(e, t), Cn(t, [e])
    }
    var bc = new WeakMap;

    function pt(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = bc.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: Ho(t)
            }, bc.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: Ho(t)
        }
    }
    var yt = [],
        ul = 0,
        ir = 0;

    function ci() {
        for (var e = ul, t = ir = ul = 0; t < e;) {
            var n = yt[t];
            yt[t++] = null;
            var l = yt[t];
            yt[t++] = null;
            var a = yt[t];
            yt[t++] = null;
            var u = yt[t];
            if (yt[t++] = null, l !== null && a !== null) {
                var h = l.pending;
                h === null ? a.next = a : (a.next = h.next, h.next = a), l.pending = a
            }
            u !== 0 && Ec(n, a, u)
        }
    }

    function fi(e, t, n, l) {
        yt[ul++] = e, yt[ul++] = t, yt[ul++] = n, yt[ul++] = l, ir |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l)
    }

    function ur(e, t, n, l) {
        return fi(e, t, n, l), di(e)
    }

    function rl(e, t) {
        return fi(e, null, null, t), di(e)
    }

    function Ec(e, t, n) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n);
        for (var a = !1, u = e.return; u !== null;) u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
        return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - ut(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null
    }

    function di(e) {
        if (50 < Ea) throw Ea = 0, ds = null, Error(o(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var sl = {};

    function lp(e, t, n, l) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function st(e, t, n, l) {
        return new lp(e, t, n, l)
    }

    function rr(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function jt(e, t) {
        var n = e.alternate;
        return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function _c(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function hi(e, t, n, l, a, u) {
        var h = 0;
        if (l = e, typeof e == "function") rr(e) && (h = 1);
        else if (typeof e == "string") h = iy(e, n, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case pe:
                return e = st(31, n, t, a), e.elementType = pe, e.lanes = u, e;
            case O:
                return Dn(n.children, a, u, t);
            case M:
                h = 8, a |= 24;
                break;
            case R:
                return e = st(12, n, t, a | 2), e.elementType = R, e.lanes = u, e;
            case Q:
                return e = st(13, n, t, a), e.elementType = Q, e.lanes = u, e;
            case ue:
                return e = st(19, n, t, a), e.elementType = ue, e.lanes = u, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case z:
                    case V:
                        h = 10;
                        break e;
                    case N:
                        h = 9;
                        break e;
                    case F:
                        h = 11;
                        break e;
                    case me:
                        h = 14;
                        break e;
                    case Ee:
                        h = 16, l = null;
                        break e
                }
                h = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), l = null
        }
        return t = st(h, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t
    }

    function Dn(e, t, n, l) {
        return e = st(7, e, l, t), e.lanes = n, e
    }

    function sr(e, t, n) {
        return e = st(6, e, null, t), e.lanes = n, e
    }

    function or(e, t, n) {
        return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var ol = [],
        cl = 0,
        gi = null,
        mi = 0,
        vt = [],
        St = 0,
        zn = null,
        qt = 1,
        Gt = "";

    function Nn(e, t) {
        ol[cl++] = mi, ol[cl++] = gi, gi = e, mi = t
    }

    function Oc(e, t, n) {
        vt[St++] = qt, vt[St++] = Gt, vt[St++] = zn, zn = e;
        var l = qt;
        e = Gt;
        var a = 32 - ut(l) - 1;
        l &= ~(1 << a), n += 1;
        var u = 32 - ut(t) + a;
        if (30 < u) {
            var h = a - a % 5;
            u = (l & (1 << h) - 1).toString(32), l >>= h, a -= h, qt = 1 << 32 - ut(t) + a | n << a | l, Gt = u + e
        } else qt = 1 << u | n << a | l, Gt = e
    }

    function cr(e) {
        e.return !== null && (Nn(e, 1), Oc(e, 1, 0))
    }

    function fr(e) {
        for (; e === gi;) gi = ol[--cl], ol[cl] = null, mi = ol[--cl], ol[cl] = null;
        for (; e === zn;) zn = vt[--St], vt[St] = null, Gt = vt[--St], vt[St] = null, qt = vt[--St], vt[St] = null
    }
    var Pe = null,
        De = null,
        be = !1,
        Un = null,
        Ct = !1,
        dr = Error(o(519));

    function Hn(e) {
        var t = Error(o(418, ""));
        throw Il(pt(t, e)), dr
    }

    function xc(e) {
        var t = e.stateNode,
            n = e.type,
            l = e.memoizedProps;
        switch (t[$e] = e, t[Ie] = l, n) {
            case "dialog":
                fe("cancel", t), fe("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                fe("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Oa.length; n++) fe(Oa[n], t);
                break;
            case "source":
                fe("error", t);
                break;
            case "img":
            case "image":
            case "link":
                fe("error", t), fe("load", t);
                break;
            case "details":
                fe("toggle", t);
                break;
            case "input":
                fe("invalid", t), qo(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), ti(t);
                break;
            case "select":
                fe("invalid", t);
                break;
            case "textarea":
                fe("invalid", t), Yo(t, l.value, l.defaultValue, l.children), ti(t)
        }
        n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Vd(t.textContent, n) ? (l.popover != null && (fe("beforetoggle", t), fe("toggle", t)), l.onScroll != null && fe("scroll", t), l.onScrollEnd != null && fe("scrollend", t), l.onClick != null && (t.onclick = Ji), t = !0) : t = !1, t || Hn(e)
    }

    function Rc(e) {
        for (Pe = e.return; Pe;) switch (Pe.tag) {
            case 5:
            case 13:
                Ct = !1;
                return;
            case 27:
            case 3:
                Ct = !0;
                return;
            default:
                Pe = Pe.return
        }
    }

    function Wl(e) {
        if (e !== Pe) return !1;
        if (!be) return Rc(e), be = !0, !1;
        var t = e.tag,
            n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Cs(e.type, e.memoizedProps)), n = !n), n && De && Hn(e), Rc(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (n = e.data, n === "/$") {
                            if (t === 0) {
                                De = Rt(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                De = null
            }
        } else t === 27 ? (t = De, En(e.type) ? (e = Ds, Ds = null, De = e) : De = t) : De = Pe ? Rt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Pl() {
        De = Pe = null, be = !1
    }

    function Ac() {
        var e = Un;
        return e !== null && (lt === null ? lt = e : lt.push.apply(lt, e), Un = null), e
    }

    function Il(e) {
        Un === null ? Un = [e] : Un.push(e)
    }
    var hr = j(null),
        Bn = null,
        Yt = null;

    function un(e, t, n) {
        K(hr, t._currentValue), t._currentValue = n
    }

    function Vt(e) {
        e._currentValue = hr.current, k(hr)
    }

    function gr(e, t, n) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function mr(e, t, n, l) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null;) {
            var u = a.dependencies;
            if (u !== null) {
                var h = a.child;
                u = u.firstContext;
                e: for (; u !== null;) {
                    var y = u;
                    u = a;
                    for (var E = 0; E < t.length; E++)
                        if (y.context === t[E]) {
                            u.lanes |= n, y = u.alternate, y !== null && (y.lanes |= n), gr(u.return, n, e), l || (h = null);
                            break e
                        }
                    u = y.next
                }
            } else if (a.tag === 18) {
                if (h = a.return, h === null) throw Error(o(341));
                h.lanes |= n, u = h.alternate, u !== null && (u.lanes |= n), gr(h, n, e), h = null
            } else h = a.child;
            if (h !== null) h.return = a;
            else
                for (h = a; h !== null;) {
                    if (h === e) {
                        h = null;
                        break
                    }
                    if (a = h.sibling, a !== null) {
                        a.return = h.return, h = a;
                        break
                    }
                    h = h.return
                }
            a = h
        }
    }

    function ea(e, t, n, l) {
        e = null;
        for (var a = t, u = !1; a !== null;) {
            if (!u) {
                if ((a.flags & 524288) !== 0) u = !0;
                else if ((a.flags & 262144) !== 0) break
            }
            if (a.tag === 10) {
                var h = a.alternate;
                if (h === null) throw Error(o(387));
                if (h = h.memoizedProps, h !== null) {
                    var y = a.type;
                    rt(a.pendingProps.value, h.value) || (e !== null ? e.push(y) : e = [y])
                }
            } else if (a === at.current) {
                if (h = a.alternate, h === null) throw Error(o(387));
                h.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(wa) : e = [wa])
            }
            a = a.return
        }
        e !== null && mr(t, e, n, l), t.flags |= 262144
    }

    function pi(e) {
        for (e = e.firstContext; e !== null;) {
            if (!rt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function jn(e) {
        Bn = e, Yt = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function Je(e) {
        return Tc(Bn, e)
    }

    function yi(e, t) {
        return Bn === null && jn(e), Tc(e, t)
    }

    function Tc(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, Yt === null) {
            if (e === null) throw Error(o(308));
            Yt = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else Yt = Yt.next = t;
        return n
    }
    var ap = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(n, l) {
                        e.push(l)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(n) {
                    return n()
                })
            }
        },
        ip = r.unstable_scheduleCallback,
        up = r.unstable_NormalPriority,
        je = {
            $$typeof: V,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function pr() {
        return {
            controller: new ap,
            data: new Map,
            refCount: 0
        }
    }

    function ta(e) {
        e.refCount--, e.refCount === 0 && ip(up, function() {
            e.controller.abort()
        })
    }
    var na = null,
        yr = 0,
        fl = 0,
        dl = null;

    function rp(e, t) {
        if (na === null) {
            var n = na = [];
            yr = 0, fl = Ss(), dl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return yr++, t.then(Cc, Cc), t
    }

    function Cc() {
        if (--yr === 0 && na !== null) {
            dl !== null && (dl.status = "fulfilled");
            var e = na;
            na = null, fl = 0, dl = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function sp(e, t) {
        var n = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(a) {
                    n.push(a)
                }
            };
        return e.then(function() {
            l.status = "fulfilled", l.value = t;
            for (var a = 0; a < n.length; a++)(0, n[a])(t)
        }, function(a) {
            for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)(0, n[a])(void 0)
        }), l
    }
    var wc = U.S;
    U.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && rp(e, t), wc !== null && wc(e, t)
    };
    var qn = j(null);

    function vr() {
        var e = qn.current;
        return e !== null ? e : Ce.pooledCache
    }

    function vi(e, t) {
        t === null ? K(qn, qn.current) : K(qn, t.pool)
    }

    function Mc() {
        var e = vr();
        return e === null ? null : {
            parent: je._currentValue,
            pool: e
        }
    }
    var la = Error(o(460)),
        Lc = Error(o(474)),
        Si = Error(o(542)),
        Sr = {
            then: function() {}
        };

    function Dc(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function bi() {}

    function zc(e, t, n) {
        switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(bi, bi), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, Uc(e), e;
            default:
                if (typeof t.status == "string") t.then(bi, bi);
                else {
                    if (e = Ce, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
                    e = t, e.status = "pending", e.then(function(l) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "fulfilled", a.value = l
                        }
                    }, function(l) {
                        if (t.status === "pending") {
                            var a = t;
                            a.status = "rejected", a.reason = l
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, Uc(e), e
                }
                throw aa = t, la
        }
    }
    var aa = null;

    function Nc() {
        if (aa === null) throw Error(o(459));
        var e = aa;
        return aa = null, e
    }

    function Uc(e) {
        if (e === la || e === Si) throw Error(o(483))
    }
    var rn = !1;

    function br(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Er(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function sn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function on(e, t, n) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (_e & 2) !== 0) {
            var a = l.pending;
            return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = di(e), Ec(e, null, n), t
        }
        return fi(e, l, t, n), di(e)
    }

    function ia(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes, n |= l, t.lanes = n, Co(e, n)
        }
    }

    function _r(e, t) {
        var n = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, n === l)) {
            var a = null,
                u = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var h = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? a = u = h : u = u.next = h, n = n.next
                } while (n !== null);
                u === null ? a = u = t : u = u.next = t
            } else a = u = t;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: u,
                shared: l.shared,
                callbacks: l.callbacks
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var Or = !1;

    function ua() {
        if (Or) {
            var e = dl;
            if (e !== null) throw e
        }
    }

    function ra(e, t, n, l) {
        Or = !1;
        var a = e.updateQueue;
        rn = !1;
        var u = a.firstBaseUpdate,
            h = a.lastBaseUpdate,
            y = a.shared.pending;
        if (y !== null) {
            a.shared.pending = null;
            var E = y,
                w = E.next;
            E.next = null, h === null ? u = w : h.next = w, h = E;
            var H = e.alternate;
            H !== null && (H = H.updateQueue, y = H.lastBaseUpdate, y !== h && (y === null ? H.firstBaseUpdate = w : y.next = w, H.lastBaseUpdate = E))
        }
        if (u !== null) {
            var q = a.baseState;
            h = 0, H = w = E = null, y = u;
            do {
                var L = y.lane & -536870913,
                    D = L !== y.lane;
                if (D ? (ge & L) === L : (l & L) === L) {
                    L !== 0 && L === fl && (Or = !0), H !== null && (H = H.next = {
                        lane: 0,
                        tag: y.tag,
                        payload: y.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var le = e,
                            ee = y;L = t;
                        var Ae = n;
                        switch (ee.tag) {
                            case 1:
                                if (le = ee.payload, typeof le == "function") {
                                    q = le.call(Ae, q, L);
                                    break e
                                }
                                q = le;
                                break e;
                            case 3:
                                le.flags = le.flags & -65537 | 128;
                            case 0:
                                if (le = ee.payload, L = typeof le == "function" ? le.call(Ae, q, L) : le, L == null) break e;
                                q = v({}, q, L);
                                break e;
                            case 2:
                                rn = !0
                        }
                    }
                    L = y.callback, L !== null && (e.flags |= 64, D && (e.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [L] : D.push(L))
                } else D = {
                    lane: L,
                    tag: y.tag,
                    payload: y.payload,
                    callback: y.callback,
                    next: null
                }, H === null ? (w = H = D, E = q) : H = H.next = D, h |= L;
                if (y = y.next, y === null) {
                    if (y = a.shared.pending, y === null) break;
                    D = y, y = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null
                }
            } while (!0);
            H === null && (E = q), a.baseState = E, a.firstBaseUpdate = w, a.lastBaseUpdate = H, u === null && (a.shared.lanes = 0), yn |= h, e.lanes = h, e.memoizedState = q
        }
    }

    function Hc(e, t) {
        if (typeof e != "function") throw Error(o(191, e));
        e.call(t)
    }

    function Bc(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++) Hc(n[e], t)
    }
    var hl = j(null),
        Ei = j(0);

    function jc(e, t) {
        e = Jt, K(Ei, e), K(hl, t), Jt = e | t.baseLanes
    }

    function xr() {
        K(Ei, Jt), K(hl, hl.current)
    }

    function Rr() {
        Jt = Ei.current, k(hl), k(Ei)
    }
    var cn = 0,
        se = null,
        xe = null,
        He = null,
        _i = !1,
        gl = !1,
        Gn = !1,
        Oi = 0,
        sa = 0,
        ml = null,
        op = 0;

    function Ne() {
        throw Error(o(321))
    }

    function Ar(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!rt(e[n], t[n])) return !1;
        return !0
    }

    function Tr(e, t, n, l, a, u) {
        return cn = u, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? _f : Of, Gn = !1, u = n(l, a), Gn = !1, gl && (u = Gc(t, n, l, a)), qc(e), u
    }

    function qc(e) {
        U.H = wi;
        var t = xe !== null && xe.next !== null;
        if (cn = 0, He = xe = se = null, _i = !1, sa = 0, ml = null, t) throw Error(o(300));
        e === null || Ve || (e = e.dependencies, e !== null && pi(e) && (Ve = !0))
    }

    function Gc(e, t, n, l) {
        se = e;
        var a = 0;
        do {
            if (gl && (ml = null), sa = 0, gl = !1, 25 <= a) throw Error(o(301));
            if (a += 1, He = xe = null, e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            U.H = pp, u = t(n, l)
        } while (gl);
        return u
    }

    function cp() {
        var e = U.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? oa(t) : t, e = e.useState()[0], (xe !== null ? xe.memoizedState : null) !== e && (se.flags |= 1024), t
    }

    function Cr() {
        var e = Oi !== 0;
        return Oi = 0, e
    }

    function wr(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function Mr(e) {
        if (_i) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            _i = !1
        }
        cn = 0, He = xe = se = null, gl = !1, sa = Oi = 0, ml = null
    }

    function tt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return He === null ? se.memoizedState = He = e : He = He.next = e, He
    }

    function Be() {
        if (xe === null) {
            var e = se.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = xe.next;
        var t = He === null ? se.memoizedState : He.next;
        if (t !== null) He = t, xe = e;
        else {
            if (e === null) throw se.alternate === null ? Error(o(467)) : Error(o(310));
            xe = e, e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null
            }, He === null ? se.memoizedState = He = e : He = He.next = e
        }
        return He
    }

    function Lr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function oa(e) {
        var t = sa;
        return sa += 1, ml === null && (ml = []), e = zc(ml, e, t), t = se, (He === null ? t.memoizedState : He.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? _f : Of), e
    }

    function xi(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return oa(e);
            if (e.$$typeof === V) return Je(e)
        }
        throw Error(o(438, String(e)))
    }

    function Dr(e) {
        var t = null,
            n = se.updateQueue;
        if (n !== null && (t = n.memoCache), t == null) {
            var l = se.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
                data: l.data.map(function(a) {
                    return a.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), n === null && (n = Lr(), se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = Y;
        return t.index++, n
    }

    function Qt(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Ri(e) {
        var t = Be();
        return zr(t, xe, e)
    }

    function zr(e, t, n) {
        var l = e.queue;
        if (l === null) throw Error(o(311));
        l.lastRenderedReducer = n;
        var a = e.baseQueue,
            u = l.pending;
        if (u !== null) {
            if (a !== null) {
                var h = a.next;
                a.next = u.next, u.next = h
            }
            t.baseQueue = a = u, l.pending = null
        }
        if (u = e.baseState, a === null) e.memoizedState = u;
        else {
            t = a.next;
            var y = h = null,
                E = null,
                w = t,
                H = !1;
            do {
                var q = w.lane & -536870913;
                if (q !== w.lane ? (ge & q) === q : (cn & q) === q) {
                    var L = w.revertLane;
                    if (L === 0) E !== null && (E = E.next = {
                        lane: 0,
                        revertLane: 0,
                        action: w.action,
                        hasEagerState: w.hasEagerState,
                        eagerState: w.eagerState,
                        next: null
                    }), q === fl && (H = !0);
                    else if ((cn & L) === L) {
                        w = w.next, L === fl && (H = !0);
                        continue
                    } else q = {
                        lane: 0,
                        revertLane: w.revertLane,
                        action: w.action,
                        hasEagerState: w.hasEagerState,
                        eagerState: w.eagerState,
                        next: null
                    }, E === null ? (y = E = q, h = u) : E = E.next = q, se.lanes |= L, yn |= L;
                    q = w.action, Gn && n(u, q), u = w.hasEagerState ? w.eagerState : n(u, q)
                } else L = {
                    lane: q,
                    revertLane: w.revertLane,
                    action: w.action,
                    hasEagerState: w.hasEagerState,
                    eagerState: w.eagerState,
                    next: null
                }, E === null ? (y = E = L, h = u) : E = E.next = L, se.lanes |= q, yn |= q;
                w = w.next
            } while (w !== null && w !== t);
            if (E === null ? h = u : E.next = y, !rt(u, e.memoizedState) && (Ve = !0, H && (n = dl, n !== null))) throw n;
            e.memoizedState = u, e.baseState = h, e.baseQueue = E, l.lastRenderedState = u
        }
        return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch]
    }

    function Nr(e) {
        var t = Be(),
            n = t.queue;
        if (n === null) throw Error(o(311));
        n.lastRenderedReducer = e;
        var l = n.dispatch,
            a = n.pending,
            u = t.memoizedState;
        if (a !== null) {
            n.pending = null;
            var h = a = a.next;
            do u = e(u, h.action), h = h.next; while (h !== a);
            rt(u, t.memoizedState) || (Ve = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u
        }
        return [u, l]
    }

    function Yc(e, t, n) {
        var l = se,
            a = Be(),
            u = be;
        if (u) {
            if (n === void 0) throw Error(o(407));
            n = n()
        } else n = t();
        var h = !rt((xe || a).memoizedState, n);
        h && (a.memoizedState = n, Ve = !0), a = a.queue;
        var y = Xc.bind(null, l, a, e);
        if (ca(2048, 8, y, [e]), a.getSnapshot !== t || h || He !== null && He.memoizedState.tag & 1) {
            if (l.flags |= 2048, pl(9, Ai(), Qc.bind(null, l, a, n, t), null), Ce === null) throw Error(o(349));
            u || (cn & 124) !== 0 || Vc(l, t, n)
        }
        return n
    }

    function Vc(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = se.updateQueue, t === null ? (t = Lr(), se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function Qc(e, t, n, l) {
        t.value = n, t.getSnapshot = l, Zc(t) && Kc(e)
    }

    function Xc(e, t, n) {
        return n(function() {
            Zc(t) && Kc(e)
        })
    }

    function Zc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !rt(e, n)
        } catch {
            return !0
        }
    }

    function Kc(e) {
        var t = rl(e, 2);
        t !== null && ht(t, e, 2)
    }

    function Ur(e) {
        var t = tt();
        if (typeof e == "function") {
            var n = e;
            if (e = n(), Gn) {
                nn(!0);
                try {
                    n()
                } finally {
                    nn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qt,
            lastRenderedState: e
        }, t
    }

    function kc(e, t, n, l) {
        return e.baseState = n, zr(e, xe, typeof l == "function" ? l : Qt)
    }

    function fp(e, t, n, l, a) {
        if (Ci(e)) throw Error(o(485));
        if (e = t.action, e !== null) {
            var u = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(h) {
                    u.listeners.push(h)
                }
            };
            U.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, $c(t, u)) : (u.next = n.next, t.pending = n.next = u)
        }
    }

    function $c(e, t) {
        var n = t.action,
            l = t.payload,
            a = e.state;
        if (t.isTransition) {
            var u = U.T,
                h = {};
            U.T = h;
            try {
                var y = n(a, l),
                    E = U.S;
                E !== null && E(h, y), Jc(e, t, y)
            } catch (w) {
                Hr(e, t, w)
            } finally {
                U.T = u
            }
        } else try {
            u = n(a, l), Jc(e, t, u)
        } catch (w) {
            Hr(e, t, w)
        }
    }

    function Jc(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            Fc(e, t, l)
        }, function(l) {
            return Hr(e, t, l)
        }) : Fc(e, t, n)
    }

    function Fc(e, t, n) {
        t.status = "fulfilled", t.value = n, Wc(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, $c(e, n)))
    }

    function Hr(e, t, n) {
        var l = e.pending;
        if (e.pending = null, l !== null) {
            l = l.next;
            do t.status = "rejected", t.reason = n, Wc(t), t = t.next; while (t !== l)
        }
        e.action = null
    }

    function Wc(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Pc(e, t) {
        return t
    }

    function Ic(e, t) {
        if (be) {
            var n = Ce.formState;
            if (n !== null) {
                e: {
                    var l = se;
                    if (be) {
                        if (De) {
                            t: {
                                for (var a = De, u = Ct; a.nodeType !== 8;) {
                                    if (!u) {
                                        a = null;
                                        break t
                                    }
                                    if (a = Rt(a.nextSibling), a === null) {
                                        a = null;
                                        break t
                                    }
                                }
                                u = a.data,
                                a = u === "F!" || u === "F" ? a : null
                            }
                            if (a) {
                                De = Rt(a.nextSibling), l = a.data === "F!";
                                break e
                            }
                        }
                        Hn(l)
                    }
                    l = !1
                }
                l && (t = n[0])
            }
        }
        return n = tt(), n.memoizedState = n.baseState = t, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Pc,
            lastRenderedState: t
        }, n.queue = l, n = Sf.bind(null, se, l), l.dispatch = n, l = Ur(!1), u = Yr.bind(null, se, !1, l.queue), l = tt(), a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, l.queue = a, n = fp.bind(null, se, a, u, n), a.dispatch = n, l.memoizedState = e, [t, n, !1]
    }

    function ef(e) {
        var t = Be();
        return tf(t, xe, e)
    }

    function tf(e, t, n) {
        if (t = zr(e, t, Pc)[0], e = Ri(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var l = oa(t)
        } catch (h) {
            throw h === la ? Si : h
        } else l = t;
        t = Be();
        var a = t.queue,
            u = a.dispatch;
        return n !== t.memoizedState && (se.flags |= 2048, pl(9, Ai(), dp.bind(null, a, n), null)), [l, u, e]
    }

    function dp(e, t) {
        e.action = t
    }

    function nf(e) {
        var t = Be(),
            n = xe;
        if (n !== null) return tf(t, n, e);
        Be(), t = t.memoizedState, n = Be();
        var l = n.queue.dispatch;
        return n.memoizedState = e, [t, l, !1]
    }

    function pl(e, t, n, l) {
        return e = {
            tag: e,
            create: n,
            deps: l,
            inst: t,
            next: null
        }, t = se.updateQueue, t === null && (t = Lr(), se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e
    }

    function Ai() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function lf() {
        return Be().memoizedState
    }

    function Ti(e, t, n, l) {
        var a = tt();
        l = l === void 0 ? null : l, se.flags |= e, a.memoizedState = pl(1 | t, Ai(), n, l)
    }

    function ca(e, t, n, l) {
        var a = Be();
        l = l === void 0 ? null : l;
        var u = a.memoizedState.inst;
        xe !== null && l !== null && Ar(l, xe.memoizedState.deps) ? a.memoizedState = pl(t, u, n, l) : (se.flags |= e, a.memoizedState = pl(1 | t, u, n, l))
    }

    function af(e, t) {
        Ti(8390656, 8, e, t)
    }

    function uf(e, t) {
        ca(2048, 8, e, t)
    }

    function rf(e, t) {
        return ca(4, 2, e, t)
    }

    function sf(e, t) {
        return ca(4, 4, e, t)
    }

    function of (e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function cf(e, t, n) {
        n = n != null ? n.concat([e]) : null, ca(4, 4, of .bind(null, t, e), n)
    }

    function Br() {}

    function ff(e, t) {
        var n = Be();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return t !== null && Ar(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e)
    }

    function df(e, t) {
        var n = Be();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        if (t !== null && Ar(t, l[1])) return l[0];
        if (l = e(), Gn) {
            nn(!0);
            try {
                e()
            } finally {
                nn(!1)
            }
        }
        return n.memoizedState = [l, t], l
    }

    function jr(e, t, n) {
        return n === void 0 || (cn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = md(), se.lanes |= e, yn |= e, n)
    }

    function hf(e, t, n, l) {
        return rt(n, t) ? n : hl.current !== null ? (e = jr(e, n, l), rt(e, t) || (Ve = !0), e) : (cn & 42) === 0 ? (Ve = !0, e.memoizedState = n) : (e = md(), se.lanes |= e, yn |= e, t)
    }

    function gf(e, t, n, l, a) {
        var u = X.p;
        X.p = u !== 0 && 8 > u ? u : 8;
        var h = U.T,
            y = {};
        U.T = y, Yr(e, !1, t, n);
        try {
            var E = a(),
                w = U.S;
            if (w !== null && w(y, E), E !== null && typeof E == "object" && typeof E.then == "function") {
                var H = sp(E, l);
                fa(e, t, H, dt(e))
            } else fa(e, t, l, dt(e))
        } catch (q) {
            fa(e, t, {
                then: function() {},
                status: "rejected",
                reason: q
            }, dt())
        } finally {
            X.p = u, U.T = h
        }
    }

    function hp() {}

    function qr(e, t, n, l) {
        if (e.tag !== 5) throw Error(o(476));
        var a = mf(e).queue;
        gf(e, a, t, P, n === null ? hp : function() {
            return pf(e), n(l)
        })
    }

    function mf(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: P,
            baseState: P,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: P
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function pf(e) {
        var t = mf(e).next.queue;
        fa(e, t, {}, dt())
    }

    function Gr() {
        return Je(wa)
    }

    function yf() {
        return Be().memoizedState
    }

    function vf() {
        return Be().memoizedState
    }

    function gp(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = dt();
                    e = sn(n);
                    var l = on(t, e, n);
                    l !== null && (ht(l, t, n), ia(l, t, n)), t = {
                        cache: pr()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function mp(e, t, n) {
        var l = dt();
        n = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ci(e) ? bf(t, n) : (n = ur(e, t, n, l), n !== null && (ht(n, e, l), Ef(n, t, l)))
    }

    function Sf(e, t, n) {
        var l = dt();
        fa(e, t, n, l)
    }

    function fa(e, t, n, l) {
        var a = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ci(e)) bf(t, a);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                var h = t.lastRenderedState,
                    y = u(h, n);
                if (a.hasEagerState = !0, a.eagerState = y, rt(y, h)) return fi(e, t, a, 0), Ce === null && ci(), !1
            } catch {} finally {}
            if (n = ur(e, t, a, l), n !== null) return ht(n, e, l), Ef(n, t, l), !0
        }
        return !1
    }

    function Yr(e, t, n, l) {
        if (l = {
                lane: 2,
                revertLane: Ss(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ci(e)) {
            if (t) throw Error(o(479))
        } else t = ur(e, n, l, 2), t !== null && ht(t, e, 2)
    }

    function Ci(e) {
        var t = e.alternate;
        return e === se || t !== null && t === se
    }

    function bf(e, t) {
        gl = _i = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Ef(e, t, n) {
        if ((n & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes, n |= l, t.lanes = n, Co(e, n)
        }
    }
    var wi = {
            readContext: Je,
            use: xi,
            useCallback: Ne,
            useContext: Ne,
            useEffect: Ne,
            useImperativeHandle: Ne,
            useLayoutEffect: Ne,
            useInsertionEffect: Ne,
            useMemo: Ne,
            useReducer: Ne,
            useRef: Ne,
            useState: Ne,
            useDebugValue: Ne,
            useDeferredValue: Ne,
            useTransition: Ne,
            useSyncExternalStore: Ne,
            useId: Ne,
            useHostTransitionStatus: Ne,
            useFormState: Ne,
            useActionState: Ne,
            useOptimistic: Ne,
            useMemoCache: Ne,
            useCacheRefresh: Ne
        },
        _f = {
            readContext: Je,
            use: xi,
            useCallback: function(e, t) {
                return tt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Je,
            useEffect: af,
            useImperativeHandle: function(e, t, n) {
                n = n != null ? n.concat([e]) : null, Ti(4194308, 4, of .bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Ti(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                Ti(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = tt();
                t = t === void 0 ? null : t;
                var l = e();
                if (Gn) {
                    nn(!0);
                    try {
                        e()
                    } finally {
                        nn(!1)
                    }
                }
                return n.memoizedState = [l, t], l
            },
            useReducer: function(e, t, n) {
                var l = tt();
                if (n !== void 0) {
                    var a = n(t);
                    if (Gn) {
                        nn(!0);
                        try {
                            n(t)
                        } finally {
                            nn(!1)
                        }
                    }
                } else a = t;
                return l.memoizedState = l.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, l.queue = e, e = e.dispatch = mp.bind(null, se, e), [l.memoizedState, e]
            },
            useRef: function(e) {
                var t = tt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = Ur(e);
                var t = e.queue,
                    n = Sf.bind(null, se, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: Br,
            useDeferredValue: function(e, t) {
                var n = tt();
                return jr(n, e, t)
            },
            useTransition: function() {
                var e = Ur(!1);
                return e = gf.bind(null, se, e.queue, !0, !1), tt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var l = se,
                    a = tt();
                if (be) {
                    if (n === void 0) throw Error(o(407));
                    n = n()
                } else {
                    if (n = t(), Ce === null) throw Error(o(349));
                    (ge & 124) !== 0 || Vc(l, t, n)
                }
                a.memoizedState = n;
                var u = {
                    value: n,
                    getSnapshot: t
                };
                return a.queue = u, af(Xc.bind(null, l, u, e), [e]), l.flags |= 2048, pl(9, Ai(), Qc.bind(null, l, u, n, t), null), n
            },
            useId: function() {
                var e = tt(),
                    t = Ce.identifierPrefix;
                if (be) {
                    var n = Gt,
                        l = qt;
                    n = (l & ~(1 << 32 - ut(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Oi++, 0 < n && (t += "H" + n.toString(32)), t += "»"
                } else n = op++, t = "«" + t + "r" + n.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: Gr,
            useFormState: Ic,
            useActionState: Ic,
            useOptimistic: function(e) {
                var t = tt();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = Yr.bind(null, se, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: Dr,
            useCacheRefresh: function() {
                return tt().memoizedState = gp.bind(null, se)
            }
        },
        Of = {
            readContext: Je,
            use: xi,
            useCallback: ff,
            useContext: Je,
            useEffect: uf,
            useImperativeHandle: cf,
            useInsertionEffect: rf,
            useLayoutEffect: sf,
            useMemo: df,
            useReducer: Ri,
            useRef: lf,
            useState: function() {
                return Ri(Qt)
            },
            useDebugValue: Br,
            useDeferredValue: function(e, t) {
                var n = Be();
                return hf(n, xe.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Ri(Qt)[0],
                    t = Be().memoizedState;
                return [typeof e == "boolean" ? e : oa(e), t]
            },
            useSyncExternalStore: Yc,
            useId: yf,
            useHostTransitionStatus: Gr,
            useFormState: ef,
            useActionState: ef,
            useOptimistic: function(e, t) {
                var n = Be();
                return kc(n, xe, e, t)
            },
            useMemoCache: Dr,
            useCacheRefresh: vf
        },
        pp = {
            readContext: Je,
            use: xi,
            useCallback: ff,
            useContext: Je,
            useEffect: uf,
            useImperativeHandle: cf,
            useInsertionEffect: rf,
            useLayoutEffect: sf,
            useMemo: df,
            useReducer: Nr,
            useRef: lf,
            useState: function() {
                return Nr(Qt)
            },
            useDebugValue: Br,
            useDeferredValue: function(e, t) {
                var n = Be();
                return xe === null ? jr(n, e, t) : hf(n, xe.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Nr(Qt)[0],
                    t = Be().memoizedState;
                return [typeof e == "boolean" ? e : oa(e), t]
            },
            useSyncExternalStore: Yc,
            useId: yf,
            useHostTransitionStatus: Gr,
            useFormState: nf,
            useActionState: nf,
            useOptimistic: function(e, t) {
                var n = Be();
                return xe !== null ? kc(n, xe, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            },
            useMemoCache: Dr,
            useCacheRefresh: vf
        },
        yl = null,
        da = 0;

    function Mi(e) {
        var t = da;
        return da += 1, yl === null && (yl = []), zc(yl, e, t)
    }

    function ha(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function Li(e, t) {
        throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function xf(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Rf(e) {
        function t(T, A) {
            if (e) {
                var C = T.deletions;
                C === null ? (T.deletions = [A], T.flags |= 16) : C.push(A)
            }
        }

        function n(T, A) {
            if (!e) return null;
            for (; A !== null;) t(T, A), A = A.sibling;
            return null
        }

        function l(T) {
            for (var A = new Map; T !== null;) T.key !== null ? A.set(T.key, T) : A.set(T.index, T), T = T.sibling;
            return A
        }

        function a(T, A) {
            return T = jt(T, A), T.index = 0, T.sibling = null, T
        }

        function u(T, A, C) {
            return T.index = C, e ? (C = T.alternate, C !== null ? (C = C.index, C < A ? (T.flags |= 67108866, A) : C) : (T.flags |= 67108866, A)) : (T.flags |= 1048576, A)
        }

        function h(T) {
            return e && T.alternate === null && (T.flags |= 67108866), T
        }

        function y(T, A, C, B) {
            return A === null || A.tag !== 6 ? (A = sr(C, T.mode, B), A.return = T, A) : (A = a(A, C), A.return = T, A)
        }

        function E(T, A, C, B) {
            var $ = C.type;
            return $ === O ? H(T, A, C.props.children, B, C.key) : A !== null && (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Ee && xf($) === A.type) ? (A = a(A, C.props), ha(A, C), A.return = T, A) : (A = hi(C.type, C.key, C.props, null, T.mode, B), ha(A, C), A.return = T, A)
        }

        function w(T, A, C, B) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== C.containerInfo || A.stateNode.implementation !== C.implementation ? (A = or(C, T.mode, B), A.return = T, A) : (A = a(A, C.children || []), A.return = T, A)
        }

        function H(T, A, C, B, $) {
            return A === null || A.tag !== 7 ? (A = Dn(C, T.mode, B, $), A.return = T, A) : (A = a(A, C), A.return = T, A)
        }

        function q(T, A, C) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = sr("" + A, T.mode, C), A.return = T, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case b:
                        return C = hi(A.type, A.key, A.props, null, T.mode, C), ha(C, A), C.return = T, C;
                    case _:
                        return A = or(A, T.mode, C), A.return = T, A;
                    case Ee:
                        var B = A._init;
                        return A = B(A._payload), q(T, A, C)
                }
                if (he(A) || J(A)) return A = Dn(A, T.mode, C, null), A.return = T, A;
                if (typeof A.then == "function") return q(T, Mi(A), C);
                if (A.$$typeof === V) return q(T, yi(T, A), C);
                Li(T, A)
            }
            return null
        }

        function L(T, A, C, B) {
            var $ = A !== null ? A.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return $ !== null ? null : y(T, A, "" + C, B);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case b:
                        return C.key === $ ? E(T, A, C, B) : null;
                    case _:
                        return C.key === $ ? w(T, A, C, B) : null;
                    case Ee:
                        return $ = C._init, C = $(C._payload), L(T, A, C, B)
                }
                if (he(C) || J(C)) return $ !== null ? null : H(T, A, C, B, null);
                if (typeof C.then == "function") return L(T, A, Mi(C), B);
                if (C.$$typeof === V) return L(T, A, yi(T, C), B);
                Li(T, C)
            }
            return null
        }

        function D(T, A, C, B, $) {
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return T = T.get(C) || null, y(A, T, "" + B, $);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case b:
                        return T = T.get(B.key === null ? C : B.key) || null, E(A, T, B, $);
                    case _:
                        return T = T.get(B.key === null ? C : B.key) || null, w(A, T, B, $);
                    case Ee:
                        var oe = B._init;
                        return B = oe(B._payload), D(T, A, C, B, $)
                }
                if (he(B) || J(B)) return T = T.get(C) || null, H(A, T, B, $, null);
                if (typeof B.then == "function") return D(T, A, C, Mi(B), $);
                if (B.$$typeof === V) return D(T, A, C, yi(A, B), $);
                Li(A, B)
            }
            return null
        }

        function le(T, A, C, B) {
            for (var $ = null, oe = null, W = A, te = A = 0, Xe = null; W !== null && te < C.length; te++) {
                W.index > te ? (Xe = W, W = null) : Xe = W.sibling;
                var Se = L(T, W, C[te], B);
                if (Se === null) {
                    W === null && (W = Xe);
                    break
                }
                e && W && Se.alternate === null && t(T, W), A = u(Se, A, te), oe === null ? $ = Se : oe.sibling = Se, oe = Se, W = Xe
            }
            if (te === C.length) return n(T, W), be && Nn(T, te), $;
            if (W === null) {
                for (; te < C.length; te++) W = q(T, C[te], B), W !== null && (A = u(W, A, te), oe === null ? $ = W : oe.sibling = W, oe = W);
                return be && Nn(T, te), $
            }
            for (W = l(W); te < C.length; te++) Xe = D(W, T, te, C[te], B), Xe !== null && (e && Xe.alternate !== null && W.delete(Xe.key === null ? te : Xe.key), A = u(Xe, A, te), oe === null ? $ = Xe : oe.sibling = Xe, oe = Xe);
            return e && W.forEach(function(An) {
                return t(T, An)
            }), be && Nn(T, te), $
        }

        function ee(T, A, C, B) {
            if (C == null) throw Error(o(151));
            for (var $ = null, oe = null, W = A, te = A = 0, Xe = null, Se = C.next(); W !== null && !Se.done; te++, Se = C.next()) {
                W.index > te ? (Xe = W, W = null) : Xe = W.sibling;
                var An = L(T, W, Se.value, B);
                if (An === null) {
                    W === null && (W = Xe);
                    break
                }
                e && W && An.alternate === null && t(T, W), A = u(An, A, te), oe === null ? $ = An : oe.sibling = An, oe = An, W = Xe
            }
            if (Se.done) return n(T, W), be && Nn(T, te), $;
            if (W === null) {
                for (; !Se.done; te++, Se = C.next()) Se = q(T, Se.value, B), Se !== null && (A = u(Se, A, te), oe === null ? $ = Se : oe.sibling = Se, oe = Se);
                return be && Nn(T, te), $
            }
            for (W = l(W); !Se.done; te++, Se = C.next()) Se = D(W, T, te, Se.value, B), Se !== null && (e && Se.alternate !== null && W.delete(Se.key === null ? te : Se.key), A = u(Se, A, te), oe === null ? $ = Se : oe.sibling = Se, oe = Se);
            return e && W.forEach(function(yy) {
                return t(T, yy)
            }), be && Nn(T, te), $
        }

        function Ae(T, A, C, B) {
            if (typeof C == "object" && C !== null && C.type === O && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case b:
                        e: {
                            for (var $ = C.key; A !== null;) {
                                if (A.key === $) {
                                    if ($ = C.type, $ === O) {
                                        if (A.tag === 7) {
                                            n(T, A.sibling), B = a(A, C.props.children), B.return = T, T = B;
                                            break e
                                        }
                                    } else if (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Ee && xf($) === A.type) {
                                        n(T, A.sibling), B = a(A, C.props), ha(B, C), B.return = T, T = B;
                                        break e
                                    }
                                    n(T, A);
                                    break
                                } else t(T, A);
                                A = A.sibling
                            }
                            C.type === O ? (B = Dn(C.props.children, T.mode, B, C.key), B.return = T, T = B) : (B = hi(C.type, C.key, C.props, null, T.mode, B), ha(B, C), B.return = T, T = B)
                        }
                        return h(T);
                    case _:
                        e: {
                            for ($ = C.key; A !== null;) {
                                if (A.key === $)
                                    if (A.tag === 4 && A.stateNode.containerInfo === C.containerInfo && A.stateNode.implementation === C.implementation) {
                                        n(T, A.sibling), B = a(A, C.children || []), B.return = T, T = B;
                                        break e
                                    } else {
                                        n(T, A);
                                        break
                                    }
                                else t(T, A);
                                A = A.sibling
                            }
                            B = or(C, T.mode, B),
                            B.return = T,
                            T = B
                        }
                        return h(T);
                    case Ee:
                        return $ = C._init, C = $(C._payload), Ae(T, A, C, B)
                }
                if (he(C)) return le(T, A, C, B);
                if (J(C)) {
                    if ($ = J(C), typeof $ != "function") throw Error(o(150));
                    return C = $.call(C), ee(T, A, C, B)
                }
                if (typeof C.then == "function") return Ae(T, A, Mi(C), B);
                if (C.$$typeof === V) return Ae(T, A, yi(T, C), B);
                Li(T, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, A !== null && A.tag === 6 ? (n(T, A.sibling), B = a(A, C), B.return = T, T = B) : (n(T, A), B = sr(C, T.mode, B), B.return = T, T = B), h(T)) : n(T, A)
        }
        return function(T, A, C, B) {
            try {
                da = 0;
                var $ = Ae(T, A, C, B);
                return yl = null, $
            } catch (W) {
                if (W === la || W === Si) throw W;
                var oe = st(29, W, null, T.mode);
                return oe.lanes = B, oe.return = T, oe
            } finally {}
        }
    }
    var vl = Rf(!0),
        Af = Rf(!1),
        bt = j(null),
        wt = null;

    function fn(e) {
        var t = e.alternate;
        K(qe, qe.current & 1), K(bt, e), wt === null && (t === null || hl.current !== null || t.memoizedState !== null) && (wt = e)
    }

    function Tf(e) {
        if (e.tag === 22) {
            if (K(qe, qe.current), K(bt, e), wt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (wt = e)
            }
        } else dn()
    }

    function dn() {
        K(qe, qe.current), K(bt, bt.current)
    }

    function Xt(e) {
        k(bt), wt === e && (wt = null), k(qe)
    }
    var qe = j(0);

    function Di(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Ls(n))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Vr(e, t, n, l) {
        t = e.memoizedState, n = n(l, t), n = n == null ? t : v({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Qr = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var l = dt(),
                a = sn(l);
            a.payload = t, n != null && (a.callback = n), t = on(e, a, l), t !== null && (ht(t, e, l), ia(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var l = dt(),
                a = sn(l);
            a.tag = 1, a.payload = t, n != null && (a.callback = n), t = on(e, a, l), t !== null && (ht(t, e, l), ia(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = dt(),
                l = sn(n);
            l.tag = 2, t != null && (l.callback = t), t = on(e, l, n), t !== null && (ht(t, e, n), ia(t, e, n))
        }
    };

    function Cf(e, t, n, l, a, u, h) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Jl(n, l) || !Jl(a, u) : !0
    }

    function wf(e, t, n, l) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Qr.enqueueReplaceState(t, t.state, null)
    }

    function Yn(e, t) {
        var n = t;
        if ("ref" in t) {
            n = {};
            for (var l in t) l !== "ref" && (n[l] = t[l])
        }
        if (e = e.defaultProps) {
            n === t && (n = v({}, n));
            for (var a in e) n[a] === void 0 && (n[a] = e[a])
        }
        return n
    }
    var zi = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function Mf(e) {
        zi(e)
    }

    function Lf(e) {
        console.error(e)
    }

    function Df(e) {
        zi(e)
    }

    function Ni(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function zf(e, t, n) {
        try {
            var l = e.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function Xr(e, t, n) {
        return n = sn(n), n.tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            Ni(e, t)
        }, n
    }

    function Nf(e) {
        return e = sn(e), e.tag = 3, e
    }

    function Uf(e, t, n, l) {
        var a = n.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var u = l.value;
            e.payload = function() {
                return a(u)
            }, e.callback = function() {
                zf(t, n, l)
            }
        }
        var h = n.stateNode;
        h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
            zf(t, n, l), typeof a != "function" && (vn === null ? vn = new Set([this]) : vn.add(this));
            var y = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: y !== null ? y : ""
            })
        })
    }

    function yp(e, t, n, l, a) {
        if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = n.alternate, t !== null && ea(t, n, a, !0), n = bt.current, n !== null) {
                switch (n.tag) {
                    case 13:
                        return wt === null ? gs() : n.alternate === null && ze === 0 && (ze = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Sr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([l]) : t.add(l), ps(e, l, a)), !1;
                    case 22:
                        return n.flags |= 65536, l === Sr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([l]) : n.add(l)), ps(e, l, a)), !1
                }
                throw Error(o(435, n.tag))
            }
            return ps(e, l, a), gs(), !1
        }
        if (be) return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== dr && (e = Error(o(422), {
            cause: l
        }), Il(pt(e, n)))) : (l !== dr && (t = Error(o(423), {
            cause: l
        }), Il(pt(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = pt(l, n), a = Xr(e.stateNode, l, a), _r(e, a), ze !== 4 && (ze = 2)), !1;
        var u = Error(o(520), {
            cause: l
        });
        if (u = pt(u, n), ba === null ? ba = [u] : ba.push(u), ze !== 4 && (ze = 2), t === null) return !0;
        l = pt(l, n), n = t;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Xr(n.stateNode, l, e), _r(n, e), !1;
                case 1:
                    if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (vn === null || !vn.has(u)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Nf(a), Uf(a, e, n, l), _r(n, a), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Hf = Error(o(461)),
        Ve = !1;

    function Ze(e, t, n, l) {
        t.child = e === null ? Af(t, null, n, l) : vl(t, e.child, n, l)
    }

    function Bf(e, t, n, l, a) {
        n = n.render;
        var u = t.ref;
        if ("ref" in l) {
            var h = {};
            for (var y in l) y !== "ref" && (h[y] = l[y])
        } else h = l;
        return jn(t), l = Tr(e, t, n, h, u, a), y = Cr(), e !== null && !Ve ? (wr(e, t, a), Zt(e, t, a)) : (be && y && cr(t), t.flags |= 1, Ze(e, t, l, a), t.child)
    }

    function jf(e, t, n, l, a) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !rr(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, qf(e, t, u, l, a)) : (e = hi(n.type, null, l, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (u = e.child, !Pr(e, a)) {
            var h = u.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Jl, n(h, l) && e.ref === t.ref) return Zt(e, t, a)
        }
        return t.flags |= 1, e = jt(u, l), e.ref = t.ref, e.return = t, t.child = e
    }

    function qf(e, t, n, l, a) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Jl(u, l) && e.ref === t.ref)
                if (Ve = !1, t.pendingProps = l = u, Pr(e, a))(e.flags & 131072) !== 0 && (Ve = !0);
                else return t.lanes = e.lanes, Zt(e, t, a)
        }
        return Zr(e, t, n, l, a)
    }

    function Gf(e, t, n) {
        var l = t.pendingProps,
            a = l.children,
            u = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (l = u !== null ? u.baseLanes | n : n, e !== null) {
                    for (a = t.child = e.child, u = 0; a !== null;) u = u | a.lanes | a.childLanes, a = a.sibling;
                    t.childLanes = u & ~l
                } else t.childLanes = 0, t.child = null;
                return Yf(e, t, l, n)
            }
            if ((n & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && vi(t, u !== null ? u.cachePool : null), u !== null ? jc(t, u) : xr(), Tf(t);
            else return t.lanes = t.childLanes = 536870912, Yf(e, t, u !== null ? u.baseLanes | n : n, n)
        } else u !== null ? (vi(t, u.cachePool), jc(t, u), dn(), t.memoizedState = null) : (e !== null && vi(t, null), xr(), dn());
        return Ze(e, t, a, n), t.child
    }

    function Yf(e, t, n, l) {
        var a = vr();
        return a = a === null ? null : {
            parent: je._currentValue,
            pool: a
        }, t.memoizedState = {
            baseLanes: n,
            cachePool: a
        }, e !== null && vi(t, null), xr(), Tf(t), e !== null && ea(e, t, l, !0), null
    }

    function Ui(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object") throw Error(o(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }

    function Zr(e, t, n, l, a) {
        return jn(t), n = Tr(e, t, n, l, void 0, a), l = Cr(), e !== null && !Ve ? (wr(e, t, a), Zt(e, t, a)) : (be && l && cr(t), t.flags |= 1, Ze(e, t, n, a), t.child)
    }

    function Vf(e, t, n, l, a, u) {
        return jn(t), t.updateQueue = null, n = Gc(t, l, n, a), qc(e), l = Cr(), e !== null && !Ve ? (wr(e, t, u), Zt(e, t, u)) : (be && l && cr(t), t.flags |= 1, Ze(e, t, n, u), t.child)
    }

    function Qf(e, t, n, l, a) {
        if (jn(t), t.stateNode === null) {
            var u = sl,
                h = n.contextType;
            typeof h == "object" && h !== null && (u = Je(h)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Qr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, br(t), h = n.contextType, u.context = typeof h == "object" && h !== null ? Je(h) : sl, u.state = t.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Vr(t, n, h, l), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && Qr.enqueueReplaceState(u, u.state, null), ra(t, l, u, a), ua(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0
        } else if (e === null) {
            u = t.stateNode;
            var y = t.memoizedProps,
                E = Yn(n, y);
            u.props = E;
            var w = u.context,
                H = n.contextType;
            h = sl, typeof H == "object" && H !== null && (h = Je(H));
            var q = n.getDerivedStateFromProps;
            H = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, H || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y || w !== h) && wf(t, u, l, h), rn = !1;
            var L = t.memoizedState;
            u.state = L, ra(t, l, u, a), ua(), w = t.memoizedState, y || L !== w || rn ? (typeof q == "function" && (Vr(t, n, q, l), w = t.memoizedState), (E = rn || Cf(t, n, E, l, L, w, h)) ? (H || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = w), u.props = l, u.state = w, u.context = h, l = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
        } else {
            u = t.stateNode, Er(e, t), h = t.memoizedProps, H = Yn(n, h), u.props = H, q = t.pendingProps, L = u.context, w = n.contextType, E = sl, typeof w == "object" && w !== null && (E = Je(w)), y = n.getDerivedStateFromProps, (w = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== q || L !== E) && wf(t, u, l, E), rn = !1, L = t.memoizedState, u.state = L, ra(t, l, u, a), ua();
            var D = t.memoizedState;
            h !== q || L !== D || rn || e !== null && e.dependencies !== null && pi(e.dependencies) ? (typeof y == "function" && (Vr(t, n, y, l), D = t.memoizedState), (H = rn || Cf(t, n, H, l, L, D, E) || e !== null && e.dependencies !== null && pi(e.dependencies)) ? (w || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, D, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, D, E)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = D), u.props = l, u.state = D, u.context = E, l = H) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), l = !1)
        }
        return u = l, Ui(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = vl(t, e.child, null, a), t.child = vl(t, null, n, a)) : Ze(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = Zt(e, t, a), e
    }

    function Xf(e, t, n, l) {
        return Pl(), t.flags |= 256, Ze(e, t, n, l), t.child
    }
    var Kr = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function kr(e) {
        return {
            baseLanes: e,
            cachePool: Mc()
        }
    }

    function $r(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Et), e
    }

    function Zf(e, t, n) {
        var l = t.pendingProps,
            a = !1,
            u = (t.flags & 128) !== 0,
            h;
        if ((h = u) || (h = e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0), h && (a = !0, t.flags &= -129), h = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (be) {
                if (a ? fn(t) : dn(), be) {
                    var y = De,
                        E;
                    if (E = y) {
                        e: {
                            for (E = y, y = Ct; E.nodeType !== 8;) {
                                if (!y) {
                                    y = null;
                                    break e
                                }
                                if (E = Rt(E.nextSibling), E === null) {
                                    y = null;
                                    break e
                                }
                            }
                            y = E
                        }
                        y !== null ? (t.memoizedState = {
                            dehydrated: y,
                            treeContext: zn !== null ? {
                                id: qt,
                                overflow: Gt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, E = st(18, null, null, 0), E.stateNode = y, E.return = t, t.child = E, Pe = t, De = null, E = !0) : E = !1
                    }
                    E || Hn(t)
                }
                if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return Ls(y) ? t.lanes = 32 : t.lanes = 536870912, null;
                Xt(t)
            }
            return y = l.children, l = l.fallback, a ? (dn(), a = t.mode, y = Hi({
                mode: "hidden",
                children: y
            }, a), l = Dn(l, a, n, null), y.return = t, l.return = t, y.sibling = l, t.child = y, a = t.child, a.memoizedState = kr(n), a.childLanes = $r(e, h, n), t.memoizedState = Kr, l) : (fn(t), Jr(t, y))
        }
        if (E = e.memoizedState, E !== null && (y = E.dehydrated, y !== null)) {
            if (u) t.flags & 256 ? (fn(t), t.flags &= -257, t = Fr(e, t, n)) : t.memoizedState !== null ? (dn(), t.child = e.child, t.flags |= 128, t = null) : (dn(), a = l.fallback, y = t.mode, l = Hi({
                mode: "visible",
                children: l.children
            }, y), a = Dn(a, y, n, null), a.flags |= 2, l.return = t, a.return = t, l.sibling = a, t.child = l, vl(t, e.child, null, n), l = t.child, l.memoizedState = kr(n), l.childLanes = $r(e, h, n), t.memoizedState = Kr, t = a);
            else if (fn(t), Ls(y)) {
                if (h = y.nextSibling && y.nextSibling.dataset, h) var w = h.dgst;
                h = w, l = Error(o(419)), l.stack = "", l.digest = h, Il({
                    value: l,
                    source: null,
                    stack: null
                }), t = Fr(e, t, n)
            } else if (Ve || ea(e, t, n, !1), h = (n & e.childLanes) !== 0, Ve || h) {
                if (h = Ce, h !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : Du(l), l = (l & (h.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== E.retryLane)) throw E.retryLane = l, rl(e, l), ht(h, e, l), Hf;
                y.data === "$?" || gs(), t = Fr(e, t, n)
            } else y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, De = Rt(y.nextSibling), Pe = t, be = !0, Un = null, Ct = !1, e !== null && (vt[St++] = qt, vt[St++] = Gt, vt[St++] = zn, qt = e.id, Gt = e.overflow, zn = t), t = Jr(t, l.children), t.flags |= 4096);
            return t
        }
        return a ? (dn(), a = l.fallback, y = t.mode, E = e.child, w = E.sibling, l = jt(E, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = E.subtreeFlags & 65011712, w !== null ? a = jt(w, a) : (a = Dn(a, y, n, null), a.flags |= 2), a.return = t, l.return = t, l.sibling = a, t.child = l, l = a, a = t.child, y = e.child.memoizedState, y === null ? y = kr(n) : (E = y.cachePool, E !== null ? (w = je._currentValue, E = E.parent !== w ? {
            parent: w,
            pool: w
        } : E) : E = Mc(), y = {
            baseLanes: y.baseLanes | n,
            cachePool: E
        }), a.memoizedState = y, a.childLanes = $r(e, h, n), t.memoizedState = Kr, l) : (fn(t), n = e.child, e = n.sibling, n = jt(n, {
            mode: "visible",
            children: l.children
        }), n.return = t, n.sibling = null, e !== null && (h = t.deletions, h === null ? (t.deletions = [e], t.flags |= 16) : h.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function Jr(e, t) {
        return t = Hi({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function Hi(e, t) {
        return e = st(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function Fr(e, t, n) {
        return vl(t, e.child, null, n), e = Jr(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Kf(e, t, n) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t), gr(e.return, t, n)
    }

    function Wr(e, t, n, l, a) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: a
        } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = n, u.tailMode = a)
    }

    function kf(e, t, n) {
        var l = t.pendingProps,
            a = l.revealOrder,
            u = l.tail;
        if (Ze(e, t, l.children, n), l = qe.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Kf(e, n, t);
                else if (e.tag === 19) Kf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            l &= 1
        }
        switch (K(qe, l), a) {
            case "forwards":
                for (n = t.child, a = null; n !== null;) e = n.alternate, e !== null && Di(e) === null && (a = n), n = n.sibling;
                n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Wr(t, !1, a, n, u);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; a !== null;) {
                    if (e = a.alternate, e !== null && Di(e) === null) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                Wr(t, !0, n, null, u);
                break;
            case "together":
                Wr(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Zt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
                if (ea(e, t, n, !1), (n & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = jt(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Pr(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && pi(e)))
    }

    function vp(e, t, n) {
        switch (t.tag) {
            case 3:
                we(t, t.stateNode.containerInfo), un(t, je, e.memoizedState.cache), Pl();
                break;
            case 27:
            case 5:
                Tu(t);
                break;
            case 4:
                we(t, t.stateNode.containerInfo);
                break;
            case 10:
                un(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var l = t.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (fn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zf(e, t, n) : (fn(t), e = Zt(e, t, n), e !== null ? e.sibling : null);
                fn(t);
                break;
            case 19:
                var a = (e.flags & 128) !== 0;
                if (l = (n & t.childLanes) !== 0, l || (ea(e, t, n, !1), l = (n & t.childLanes) !== 0), a) {
                    if (l) return kf(e, t, n);
                    t.flags |= 128
                }
                if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), K(qe, qe.current), l) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Gf(e, t, n);
            case 24:
                un(t, je, e.memoizedState.cache)
        }
        return Zt(e, t, n)
    }

    function $f(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Ve = !0;
            else {
                if (!Pr(e, n) && (t.flags & 128) === 0) return Ve = !1, vp(e, t, n);
                Ve = (e.flags & 131072) !== 0
            }
        else Ve = !1, be && (t.flags & 1048576) !== 0 && Oc(t, mi, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var l = t.elementType,
                        a = l._init;
                    if (l = a(l._payload), t.type = l, typeof l == "function") rr(l) ? (e = Yn(l, e), t.tag = 1, t = Qf(null, t, l, e, n)) : (t.tag = 0, t = Zr(null, t, l, e, n));
                    else {
                        if (l != null) {
                            if (a = l.$$typeof, a === F) {
                                t.tag = 11, t = Bf(null, t, l, e, n);
                                break e
                            } else if (a === me) {
                                t.tag = 14, t = jf(null, t, l, e, n);
                                break e
                            }
                        }
                        throw t = de(l) || l, Error(o(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Zr(e, t, t.type, t.pendingProps, n);
            case 1:
                return l = t.type, a = Yn(l, t.pendingProps), Qf(e, t, l, a, n);
            case 3:
                e: {
                    if (we(t, t.stateNode.containerInfo), e === null) throw Error(o(387));l = t.pendingProps;
                    var u = t.memoizedState;a = u.element,
                    Er(e, t),
                    ra(t, l, null, n);
                    var h = t.memoizedState;
                    if (l = h.cache, un(t, je, l), l !== u.cache && mr(t, [je], n, !0), ua(), l = h.element, u.isDehydrated)
                        if (u = {
                                element: l,
                                isDehydrated: !1,
                                cache: h.cache
                            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                            t = Xf(e, t, l, n);
                            break e
                        } else if (l !== a) {
                        a = pt(Error(o(424)), t), Il(a), t = Xf(e, t, l, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (De = Rt(e.firstChild), Pe = t, be = !0, Un = null, Ct = !0, n = Af(t, null, l, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (Pl(), l === a) {
                            t = Zt(e, t, n);
                            break e
                        }
                        Ze(e, t, l, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Ui(e, t), e === null ? (n = Pd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : be || (n = t.type, e = t.pendingProps, l = Fi(ie.current).createElement(n), l[$e] = t, l[Ie] = e, ke(l, n, e), Ye(l), t.stateNode = l) : t.memoizedState = Pd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Tu(t), e === null && be && (l = t.stateNode = Jd(t.type, t.pendingProps, ie.current), Pe = t, Ct = !0, a = De, En(t.type) ? (Ds = a, De = Rt(l.firstChild)) : De = a), Ze(e, t, t.pendingProps.children, n), Ui(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && be && ((a = l = De) && (l = Kp(l, t.type, t.pendingProps, Ct), l !== null ? (t.stateNode = l, Pe = t, De = Rt(l.firstChild), Ct = !1, a = !0) : a = !1), a || Hn(t)), Tu(t), a = t.type, u = t.pendingProps, h = e !== null ? e.memoizedProps : null, l = u.children, Cs(a, u) ? l = null : h !== null && Cs(a, h) && (t.flags |= 32), t.memoizedState !== null && (a = Tr(e, t, cp, null, null, n), wa._currentValue = a), Ui(e, t), Ze(e, t, l, n), t.child;
            case 6:
                return e === null && be && ((e = n = De) && (n = kp(n, t.pendingProps, Ct), n !== null ? (t.stateNode = n, Pe = t, De = null, e = !0) : e = !1), e || Hn(t)), null;
            case 13:
                return Zf(e, t, n);
            case 4:
                return we(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = vl(t, null, l, n) : Ze(e, t, l, n), t.child;
            case 11:
                return Bf(e, t, t.type, t.pendingProps, n);
            case 7:
                return Ze(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ze(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ze(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return l = t.pendingProps, un(t, t.type, l.value), Ze(e, t, l.children, n), t.child;
            case 9:
                return a = t.type._context, l = t.pendingProps.children, jn(t), a = Je(a), l = l(a), t.flags |= 1, Ze(e, t, l, n), t.child;
            case 14:
                return jf(e, t, t.type, t.pendingProps, n);
            case 15:
                return qf(e, t, t.type, t.pendingProps, n);
            case 19:
                return kf(e, t, n);
            case 31:
                return l = t.pendingProps, n = t.mode, l = {
                    mode: l.mode,
                    children: l.children
                }, e === null ? (n = Hi(l, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = jt(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22:
                return Gf(e, t, n);
            case 24:
                return jn(t), l = Je(je), e === null ? (a = vr(), a === null && (a = Ce, u = pr(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = {
                    parent: l,
                    cache: a
                }, br(t), un(t, je, a)) : ((e.lanes & n) !== 0 && (Er(e, t), ra(t, null, null, n), ua()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = {
                    parent: l,
                    cache: l
                }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), un(t, je, l)) : (l = u.cache, un(t, je, l), l !== a.cache && mr(t, [je], n, !0))), Ze(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }

    function Kt(e) {
        e.flags |= 4
    }

    function Jf(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !lh(t)) {
            if (t = bt.current, t !== null && ((ge & 4194048) === ge ? wt !== null : (ge & 62914560) !== ge && (ge & 536870912) === 0 || t !== wt)) throw aa = Sr, Lc;
            e.flags |= 8192
        }
    }

    function Bi(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ao() : 536870912, e.lanes |= t, _l |= t)
    }

    function ga(e, t) {
        if (!be) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var l = null; n !== null;) n.alternate !== null && (l = n), n = n.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function Le(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            l = 0;
        if (t)
            for (var a = e.child; a !== null;) n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 65011712, l |= a.flags & 65011712, a.return = e, a = a.sibling;
        else
            for (a = e.child; a !== null;) n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= l, e.childLanes = n, t
    }

    function Sp(e, t, n) {
        var l = t.pendingProps;
        switch (fr(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Le(t), null;
            case 1:
                return Le(t), null;
            case 3:
                return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Vt(je), tn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Wl(t) ? Kt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ac())), Le(t), null;
            case 26:
                return n = t.memoizedState, e === null ? (Kt(t), n !== null ? (Le(t), Jf(t, n)) : (Le(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Kt(t), Le(t), Jf(t, n)) : (Le(t), t.flags &= -16777217) : (e.memoizedProps !== l && Kt(t), Le(t), t.flags &= -16777217), null;
            case 27:
                $a(t), n = ie.current;
                var a = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== l && Kt(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(o(166));
                        return Le(t), null
                    }
                    e = I.current, Wl(t) ? xc(t) : (e = Jd(a, l, n), t.stateNode = e, Kt(t))
                }
                return Le(t), null;
            case 5:
                if ($a(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Kt(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(o(166));
                        return Le(t), null
                    }
                    if (e = I.current, Wl(t)) xc(t);
                    else {
                        switch (a = Fi(ie.current), e) {
                            case 1:
                                e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        e = a.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        e = a.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof l.is == "string" ? a.createElement("select", {
                                            is: l.is
                                        }) : a.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                                        break;
                                    default:
                                        e = typeof l.is == "string" ? a.createElement(n, {
                                            is: l.is
                                        }) : a.createElement(n)
                                }
                        }
                        e[$e] = t, e[Ie] = l;
                        e: for (a = t.child; a !== null;) {
                            if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
                            else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                                a.child.return = a, a = a.child;
                                continue
                            }
                            if (a === t) break e;
                            for (; a.sibling === null;) {
                                if (a.return === null || a.return === t) break e;
                                a = a.return
                            }
                            a.sibling.return = a.return, a = a.sibling
                        }
                        t.stateNode = e;
                        e: switch (ke(e, n, l), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!l.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && Kt(t)
                    }
                }
                return Le(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== l && Kt(t);
                else {
                    if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
                    if (e = ie.current, Wl(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, l = null, a = Pe, a !== null) switch (a.tag) {
                            case 27:
                            case 5:
                                l = a.memoizedProps
                        }
                        e[$e] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Vd(e.nodeValue, n)), e || Hn(t)
                    } else e = Fi(e).createTextNode(l), e[$e] = t, t.stateNode = e
                }
                return Le(t), null;
            case 13:
                if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (a = Wl(t), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!a) throw Error(o(318));
                            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
                            a[$e] = t
                        } else Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Le(t), a = !1
                    } else a = Ac(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                    if (!a) return t.flags & 256 ? (Xt(t), t) : (Xt(t), null)
                }
                if (Xt(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
                    l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool);
                    var u = null;
                    l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192), Bi(t, t.updateQueue), Le(t), null;
            case 4:
                return tn(), e === null && Os(t.stateNode.containerInfo), Le(t), null;
            case 10:
                return Vt(t.type), Le(t), null;
            case 19:
                if (k(qe), a = t.memoizedState, a === null) return Le(t), null;
                if (l = (t.flags & 128) !== 0, u = a.rendering, u === null)
                    if (l) ga(a, !1);
                    else {
                        if (ze !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (u = Di(e), u !== null) {
                                    for (t.flags |= 128, ga(a, !1), e = u.updateQueue, t.updateQueue = e, Bi(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) _c(n, e), n = n.sibling;
                                    return K(qe, qe.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        a.tail !== null && Tt() > Gi && (t.flags |= 128, l = !0, ga(a, !1), t.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (e = Di(u), e !== null) {
                            if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Bi(t, e), ga(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !be) return Le(t), null
                        } else 2 * Tt() - a.renderingStartTime > Gi && n !== 536870912 && (t.flags |= 128, l = !0, ga(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u)
                }
                return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Tt(), t.sibling = null, e = qe.current, K(qe, l ? e & 1 | 2 : e & 1), t) : (Le(t), null);
            case 22:
            case 23:
                return Xt(t), Rr(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), n = t.updateQueue, n !== null && Bi(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && k(qn), null;
            case 24:
                return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Vt(je), Le(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, t.tag))
    }

    function bp(e, t) {
        switch (fr(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Vt(je), tn(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return $a(t), null;
            case 13:
                if (Xt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(o(340));
                    Pl()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return k(qe), null;
            case 4:
                return tn(), null;
            case 10:
                return Vt(t.type), null;
            case 22:
            case 23:
                return Xt(t), Rr(), e !== null && k(qn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return Vt(je), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Ff(e, t) {
        switch (fr(t), t.tag) {
            case 3:
                Vt(je), tn();
                break;
            case 26:
            case 27:
            case 5:
                $a(t);
                break;
            case 4:
                tn();
                break;
            case 13:
                Xt(t);
                break;
            case 19:
                k(qe);
                break;
            case 10:
                Vt(t.type);
                break;
            case 22:
            case 23:
                Xt(t), Rr(), e !== null && k(qn);
                break;
            case 24:
                Vt(je)
        }
    }

    function ma(e, t) {
        try {
            var n = t.updateQueue,
                l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var a = l.next;
                n = a;
                do {
                    if ((n.tag & e) === e) {
                        l = void 0;
                        var u = n.create,
                            h = n.inst;
                        l = u(), h.destroy = l
                    }
                    n = n.next
                } while (n !== a)
            }
        } catch (y) {
            Te(t, t.return, y)
        }
    }

    function hn(e, t, n) {
        try {
            var l = t.updateQueue,
                a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                l = u;
                do {
                    if ((l.tag & e) === e) {
                        var h = l.inst,
                            y = h.destroy;
                        if (y !== void 0) {
                            h.destroy = void 0, a = t;
                            var E = n,
                                w = y;
                            try {
                                w()
                            } catch (H) {
                                Te(a, E, H)
                            }
                        }
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (H) {
            Te(t, t.return, H)
        }
    }

    function Wf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Bc(t, n)
            } catch (l) {
                Te(e, e.return, l)
            }
        }
    }

    function Pf(e, t, n) {
        n.props = Yn(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            Te(e, t, l)
        }
    }

    function pa(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = e.stateNode;
                        break;
                    case 30:
                        l = e.stateNode;
                        break;
                    default:
                        l = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(l) : n.current = l
            }
        } catch (a) {
            Te(e, t, a)
        }
    }

    function Mt(e, t) {
        var n = e.ref,
            l = e.refCleanup;
        if (n !== null)
            if (typeof l == "function") try {
                l()
            } catch (a) {
                Te(e, t, a)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof n == "function") try {
                n(null)
            } catch (a) {
                Te(e, t, a)
            } else n.current = null
    }

    function If(e) {
        var t = e.type,
            n = e.memoizedProps,
            l = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && l.focus();
                    break e;
                case "img":
                    n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        }
        catch (a) {
            Te(e, e.return, a)
        }
    }

    function Ir(e, t, n) {
        try {
            var l = e.stateNode;
            Yp(l, e.type, n, t), l[Ie] = t
        } catch (a) {
            Te(e, e.return, a)
        }
    }

    function ed(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && En(e.type) || e.tag === 4
    }

    function es(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || ed(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && En(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ts(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ji));
        else if (l !== 4 && (l === 27 && En(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (ts(e, t, n), e = e.sibling; e !== null;) ts(e, t, n), e = e.sibling
    }

    function ji(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (l !== 4 && (l === 27 && En(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (ji(e, t, n), e = e.sibling; e !== null;) ji(e, t, n), e = e.sibling
    }

    function td(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var l = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
            ke(t, l, n), t[$e] = e, t[Ie] = n
        } catch (u) {
            Te(e, e.return, u)
        }
    }
    var kt = !1,
        Ue = !1,
        ns = !1,
        nd = typeof WeakSet == "function" ? WeakSet : Set,
        Qe = null;

    function Ep(e, t) {
        if (e = e.containerInfo, As = nu, e = dc(e), er(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var l = n.getSelection && n.getSelection();
                if (l && l.rangeCount !== 0) {
                    n = l.anchorNode;
                    var a = l.anchorOffset,
                        u = l.focusNode;
                    l = l.focusOffset;
                    try {
                        n.nodeType, u.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var h = 0,
                        y = -1,
                        E = -1,
                        w = 0,
                        H = 0,
                        q = e,
                        L = null;
                    t: for (;;) {
                        for (var D; q !== n || a !== 0 && q.nodeType !== 3 || (y = h + a), q !== u || l !== 0 && q.nodeType !== 3 || (E = h + l), q.nodeType === 3 && (h += q.nodeValue.length), (D = q.firstChild) !== null;) L = q, q = D;
                        for (;;) {
                            if (q === e) break t;
                            if (L === n && ++w === a && (y = h), L === u && ++H === l && (E = h), (D = q.nextSibling) !== null) break;
                            q = L, L = q.parentNode
                        }
                        q = D
                    }
                    n = y === -1 || E === -1 ? null : {
                        start: y,
                        end: E
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (Ts = {
                focusedElem: e,
                selectionRange: n
            }, nu = !1, Qe = t; Qe !== null;)
            if (t = Qe, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Qe = e;
            else
                for (; Qe !== null;) {
                    switch (t = Qe, u = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && u !== null) {
                                e = void 0, n = t, a = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                                try {
                                    var le = Yn(n.type, a, n.elementType === n.type);
                                    e = l.getSnapshotBeforeUpdate(le, u), l.__reactInternalSnapshotBeforeUpdate = e
                                } catch (ee) {
                                    Te(n, n.return, ee)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Ms(e);
                                else if (n === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Ms(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(o(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Qe = e;
                        break
                    }
                    Qe = t.return
                }
    }

    function ld(e, t, n) {
        var l = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                gn(e, n), l & 4 && ma(5, n);
                break;
            case 1:
                if (gn(e, n), l & 4)
                    if (e = n.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (h) {
                        Te(n, n.return, h)
                    } else {
                        var a = Yn(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (h) {
                            Te(n, n.return, h)
                        }
                    }
                l & 64 && Wf(n), l & 512 && pa(n, n.return);
                break;
            case 3:
                if (gn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
                    if (t = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        Bc(e, t)
                    } catch (h) {
                        Te(n, n.return, h)
                    }
                }
                break;
            case 27:
                t === null && l & 4 && td(n);
            case 26:
            case 5:
                gn(e, n), t === null && l & 4 && If(n), l & 512 && pa(n, n.return);
                break;
            case 12:
                gn(e, n);
                break;
            case 13:
                gn(e, n), l & 4 && ud(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Mp.bind(null, n), $p(e, n))));
                break;
            case 22:
                if (l = n.memoizedState !== null || kt, !l) {
                    t = t !== null && t.memoizedState !== null || Ue, a = kt;
                    var u = Ue;
                    kt = l, (Ue = t) && !u ? mn(e, n, (n.subtreeFlags & 8772) !== 0) : gn(e, n), kt = a, Ue = u
                }
                break;
            case 30:
                break;
            default:
                gn(e, n)
        }
    }

    function ad(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, ad(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Uu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Me = null,
        nt = !1;

    function $t(e, t, n) {
        for (n = n.child; n !== null;) id(e, t, n), n = n.sibling
    }

    function id(e, t, n) {
        if (it && typeof it.onCommitFiberUnmount == "function") try {
            it.onCommitFiberUnmount(Bl, n)
        } catch {}
        switch (n.tag) {
            case 26:
                Ue || Mt(n, t), $t(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                Ue || Mt(n, t);
                var l = Me,
                    a = nt;
                En(n.type) && (Me = n.stateNode, nt = !1), $t(e, t, n), Ra(n.stateNode), Me = l, nt = a;
                break;
            case 5:
                Ue || Mt(n, t);
            case 6:
                if (l = Me, a = nt, Me = null, $t(e, t, n), Me = l, nt = a, Me !== null)
                    if (nt) try {
                        (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(n.stateNode)
                    } catch (u) {
                        Te(n, t, u)
                    } else try {
                        Me.removeChild(n.stateNode)
                    } catch (u) {
                        Te(n, t, u)
                    }
                break;
            case 18:
                Me !== null && (nt ? (e = Me, kd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), za(e)) : kd(Me, n.stateNode));
                break;
            case 4:
                l = Me, a = nt, Me = n.stateNode.containerInfo, nt = !0, $t(e, t, n), Me = l, nt = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ue || hn(2, n, t), Ue || hn(4, n, t), $t(e, t, n);
                break;
            case 1:
                Ue || (Mt(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && Pf(n, t, l)), $t(e, t, n);
                break;
            case 21:
                $t(e, t, n);
                break;
            case 22:
                Ue = (l = Ue) || n.memoizedState !== null, $t(e, t, n), Ue = l;
                break;
            default:
                $t(e, t, n)
        }
    }

    function ud(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            za(e)
        } catch (n) {
            Te(t, t.return, n)
        }
    }

    function _p(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new nd), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new nd), t;
            default:
                throw Error(o(435, e.tag))
        }
    }

    function ls(e, t) {
        var n = _p(e);
        t.forEach(function(l) {
            var a = Lp.bind(null, e, l);
            n.has(l) || (n.add(l), l.then(a, a))
        })
    }

    function ot(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var a = n[l],
                    u = e,
                    h = t,
                    y = h;
                e: for (; y !== null;) {
                    switch (y.tag) {
                        case 27:
                            if (En(y.type)) {
                                Me = y.stateNode, nt = !1;
                                break e
                            }
                            break;
                        case 5:
                            Me = y.stateNode, nt = !1;
                            break e;
                        case 3:
                        case 4:
                            Me = y.stateNode.containerInfo, nt = !0;
                            break e
                    }
                    y = y.return
                }
                if (Me === null) throw Error(o(160));
                id(u, h, a), Me = null, nt = !1, u = a.alternate, u !== null && (u.return = null), a.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) rd(t, e), t = t.sibling
    }
    var xt = null;

    function rd(e, t) {
        var n = e.alternate,
            l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ot(t, e), ct(e), l & 4 && (hn(3, e, e.return), ma(3, e), hn(5, e, e.return));
                break;
            case 1:
                ot(t, e), ct(e), l & 512 && (Ue || n === null || Mt(n, n.return)), l & 64 && kt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
                break;
            case 26:
                var a = xt;
                if (ot(t, e), ct(e), l & 512 && (Ue || n === null || Mt(n, n.return)), l & 4) {
                    var u = n !== null ? n.memoizedState : null;
                    if (l = e.memoizedState, n === null)
                        if (l === null)
                            if (e.stateNode === null) {
                                e: {
                                    l = e.type,
                                    n = e.memoizedProps,
                                    a = a.ownerDocument || a;t: switch (l) {
                                        case "title":
                                            u = a.getElementsByTagName("title")[0], (!u || u[Gl] || u[$e] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(u, a.querySelector("head > title"))), ke(u, l, n), u[$e] = e, Ye(u), l = u;
                                            break e;
                                        case "link":
                                            var h = th("link", "href", a).get(l + (n.href || ""));
                                            if (h) {
                                                for (var y = 0; y < h.length; y++)
                                                    if (u = h[y], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        h.splice(y, 1);
                                                        break t
                                                    }
                                            }
                                            u = a.createElement(l), ke(u, l, n), a.head.appendChild(u);
                                            break;
                                        case "meta":
                                            if (h = th("meta", "content", a).get(l + (n.content || ""))) {
                                                for (y = 0; y < h.length; y++)
                                                    if (u = h[y], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        h.splice(y, 1);
                                                        break t
                                                    }
                                            }
                                            u = a.createElement(l), ke(u, l, n), a.head.appendChild(u);
                                            break;
                                        default:
                                            throw Error(o(468, l))
                                    }
                                    u[$e] = e,
                                    Ye(u),
                                    l = u
                                }
                                e.stateNode = l
                            }
                    else nh(a, e.type, e.stateNode);
                    else e.stateNode = eh(a, l, e.memoizedProps);
                    else u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? nh(a, e.type, e.stateNode) : eh(a, l, e.memoizedProps)) : l === null && e.stateNode !== null && Ir(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                ot(t, e), ct(e), l & 512 && (Ue || n === null || Mt(n, n.return)), n !== null && l & 4 && Ir(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (ot(t, e), ct(e), l & 512 && (Ue || n === null || Mt(n, n.return)), e.flags & 32) {
                    a = e.stateNode;
                    try {
                        el(a, "")
                    } catch (D) {
                        Te(e, e.return, D)
                    }
                }
                l & 4 && e.stateNode != null && (a = e.memoizedProps, Ir(e, a, n !== null ? n.memoizedProps : a)), l & 1024 && (ns = !0);
                break;
            case 6:
                if (ot(t, e), ct(e), l & 4) {
                    if (e.stateNode === null) throw Error(o(162));
                    l = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = l
                    } catch (D) {
                        Te(e, e.return, D)
                    }
                }
                break;
            case 3:
                if (Ii = null, a = xt, xt = Wi(t.containerInfo), ot(t, e), xt = a, ct(e), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    za(t.containerInfo)
                } catch (D) {
                    Te(e, e.return, D)
                }
                ns && (ns = !1, sd(e));
                break;
            case 4:
                l = xt, xt = Wi(e.stateNode.containerInfo), ot(t, e), ct(e), xt = l;
                break;
            case 12:
                ot(t, e), ct(e);
                break;
            case 13:
                ot(t, e), ct(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (os = Tt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ls(e, l)));
                break;
            case 22:
                a = e.memoizedState !== null;
                var E = n !== null && n.memoizedState !== null,
                    w = kt,
                    H = Ue;
                if (kt = w || a, Ue = H || E, ot(t, e), Ue = H, kt = w, ct(e), l & 8192) e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || E || kt || Ue || Vn(e)), n = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            E = n = t;
                            try {
                                if (u = E.stateNode, a) h = u.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none";
                                else {
                                    y = E.stateNode;
                                    var q = E.memoizedProps.style,
                                        L = q != null && q.hasOwnProperty("display") ? q.display : null;
                                    y.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim()
                                }
                            } catch (D) {
                                Te(E, E.return, D)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            E = t;
                            try {
                                E.stateNode.nodeValue = a ? "" : E.memoizedProps
                            } catch (D) {
                                Te(E, E.return, D)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, ls(e, n))));
                break;
            case 19:
                ot(t, e), ct(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ls(e, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ot(t, e), ct(e)
        }
    }

    function ct(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, l = e.return; l !== null;) {
                    if (ed(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null) throw Error(o(160));
                switch (n.tag) {
                    case 27:
                        var a = n.stateNode,
                            u = es(e);
                        ji(e, u, a);
                        break;
                    case 5:
                        var h = n.stateNode;
                        n.flags & 32 && (el(h, ""), n.flags &= -33);
                        var y = es(e);
                        ji(e, y, h);
                        break;
                    case 3:
                    case 4:
                        var E = n.stateNode.containerInfo,
                            w = es(e);
                        ts(e, w, E);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (H) {
                Te(e, e.return, H)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function sd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                sd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function gn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) ld(e, t.alternate, t), t = t.sibling
    }

    function Vn(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    hn(4, t, t.return), Vn(t);
                    break;
                case 1:
                    Mt(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == "function" && Pf(t, t.return, n), Vn(t);
                    break;
                case 27:
                    Ra(t.stateNode);
                case 26:
                case 5:
                    Mt(t, t.return), Vn(t);
                    break;
                case 22:
                    t.memoizedState === null && Vn(t);
                    break;
                case 30:
                    Vn(t);
                    break;
                default:
                    Vn(t)
            }
            e = e.sibling
        }
    }

    function mn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var l = t.alternate,
                a = e,
                u = t,
                h = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    mn(a, u, n), ma(4, u);
                    break;
                case 1:
                    if (mn(a, u, n), l = u, a = l.stateNode, typeof a.componentDidMount == "function") try {
                        a.componentDidMount()
                    } catch (w) {
                        Te(l, l.return, w)
                    }
                    if (l = u, a = l.updateQueue, a !== null) {
                        var y = l.stateNode;
                        try {
                            var E = a.shared.hiddenCallbacks;
                            if (E !== null)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < E.length; a++) Hc(E[a], y)
                        } catch (w) {
                            Te(l, l.return, w)
                        }
                    }
                    n && h & 64 && Wf(u), pa(u, u.return);
                    break;
                case 27:
                    td(u);
                case 26:
                case 5:
                    mn(a, u, n), n && l === null && h & 4 && If(u), pa(u, u.return);
                    break;
                case 12:
                    mn(a, u, n);
                    break;
                case 13:
                    mn(a, u, n), n && h & 4 && ud(a, u);
                    break;
                case 22:
                    u.memoizedState === null && mn(a, u, n), pa(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    mn(a, u, n)
            }
            t = t.sibling
        }
    }

    function as(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ta(n))
    }

    function is(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ta(e))
    }

    function Lt(e, t, n, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) od(e, t, n, l), t = t.sibling
    }

    function od(e, t, n, l) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Lt(e, t, n, l), a & 2048 && ma(9, t);
                break;
            case 1:
                Lt(e, t, n, l);
                break;
            case 3:
                Lt(e, t, n, l), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ta(e)));
                break;
            case 12:
                if (a & 2048) {
                    Lt(e, t, n, l), e = t.stateNode;
                    try {
                        var u = t.memoizedProps,
                            h = u.id,
                            y = u.onPostCommit;
                        typeof y == "function" && y(h, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (E) {
                        Te(t, t.return, E)
                    }
                } else Lt(e, t, n, l);
                break;
            case 13:
                Lt(e, t, n, l);
                break;
            case 23:
                break;
            case 22:
                u = t.stateNode, h = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Lt(e, t, n, l) : ya(e, t) : u._visibility & 2 ? Lt(e, t, n, l) : (u._visibility |= 2, Sl(e, t, n, l, (t.subtreeFlags & 10256) !== 0)), a & 2048 && as(h, t);
                break;
            case 24:
                Lt(e, t, n, l), a & 2048 && is(t.alternate, t);
                break;
            default:
                Lt(e, t, n, l)
        }
    }

    function Sl(e, t, n, l, a) {
        for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var u = e,
                h = t,
                y = n,
                E = l,
                w = h.flags;
            switch (h.tag) {
                case 0:
                case 11:
                case 15:
                    Sl(u, h, y, E, a), ma(8, h);
                    break;
                case 23:
                    break;
                case 22:
                    var H = h.stateNode;
                    h.memoizedState !== null ? H._visibility & 2 ? Sl(u, h, y, E, a) : ya(u, h) : (H._visibility |= 2, Sl(u, h, y, E, a)), a && w & 2048 && as(h.alternate, h);
                    break;
                case 24:
                    Sl(u, h, y, E, a), a && w & 2048 && is(h.alternate, h);
                    break;
                default:
                    Sl(u, h, y, E, a)
            }
            t = t.sibling
        }
    }

    function ya(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var n = e,
                    l = t,
                    a = l.flags;
                switch (l.tag) {
                    case 22:
                        ya(n, l), a & 2048 && as(l.alternate, l);
                        break;
                    case 24:
                        ya(n, l), a & 2048 && is(l.alternate, l);
                        break;
                    default:
                        ya(n, l)
                }
                t = t.sibling
            }
    }
    var va = 8192;

    function bl(e) {
        if (e.subtreeFlags & va)
            for (e = e.child; e !== null;) cd(e), e = e.sibling
    }

    function cd(e) {
        switch (e.tag) {
            case 26:
                bl(e), e.flags & va && e.memoizedState !== null && ry(xt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                bl(e);
                break;
            case 3:
            case 4:
                var t = xt;
                xt = Wi(e.stateNode.containerInfo), bl(e), xt = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = va, va = 16777216, bl(e), va = t) : bl(e));
                break;
            default:
                bl(e)
        }
    }

    function fd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function Sa(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    Qe = l, hd(l, e)
                }
            fd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) dd(e), e = e.sibling
    }

    function dd(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Sa(e), e.flags & 2048 && hn(9, e, e.return);
                break;
            case 3:
                Sa(e);
                break;
            case 12:
                Sa(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qi(e)) : Sa(e);
                break;
            default:
                Sa(e)
        }
    }

    function qi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    Qe = l, hd(l, e)
                }
            fd(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    hn(8, t, t.return), qi(t);
                    break;
                case 22:
                    n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, qi(t));
                    break;
                default:
                    qi(t)
            }
            e = e.sibling
        }
    }

    function hd(e, t) {
        for (; Qe !== null;) {
            var n = Qe;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    hn(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var l = n.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    ta(n.memoizedState.cache)
            }
            if (l = n.child, l !== null) l.return = n, Qe = l;
            else e: for (n = e; Qe !== null;) {
                l = Qe;
                var a = l.sibling,
                    u = l.return;
                if (ad(l), l === n) {
                    Qe = null;
                    break e
                }
                if (a !== null) {
                    a.return = u, Qe = a;
                    break e
                }
                Qe = u
            }
        }
    }
    var Op = {
            getCacheForType: function(e) {
                var t = Je(je),
                    n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n
            }
        },
        xp = typeof WeakMap == "function" ? WeakMap : Map,
        _e = 0,
        Ce = null,
        ce = null,
        ge = 0,
        Oe = 0,
        ft = null,
        pn = !1,
        El = !1,
        us = !1,
        Jt = 0,
        ze = 0,
        yn = 0,
        Qn = 0,
        rs = 0,
        Et = 0,
        _l = 0,
        ba = null,
        lt = null,
        ss = !1,
        os = 0,
        Gi = 1 / 0,
        Yi = null,
        vn = null,
        Ke = 0,
        Sn = null,
        Ol = null,
        xl = 0,
        cs = 0,
        fs = null,
        gd = null,
        Ea = 0,
        ds = null;

    function dt() {
        if ((_e & 2) !== 0 && ge !== 0) return ge & -ge;
        if (U.T !== null) {
            var e = fl;
            return e !== 0 ? e : Ss()
        }
        return wo()
    }

    function md() {
        Et === 0 && (Et = (ge & 536870912) === 0 || be ? Ro() : 536870912);
        var e = bt.current;
        return e !== null && (e.flags |= 32), Et
    }

    function ht(e, t, n) {
        (e === Ce && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (Rl(e, 0), bn(e, ge, Et, !1)), ql(e, n), ((_e & 2) === 0 || e !== Ce) && (e === Ce && ((_e & 2) === 0 && (Qn |= n), ze === 4 && bn(e, ge, Et, !1)), Dt(e))
    }

    function pd(e, t, n) {
        if ((_e & 6) !== 0) throw Error(o(327));
        var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || jl(e, t),
            a = l ? Tp(e, t) : ms(e, t, !0),
            u = l;
        do {
            if (a === 0) {
                El && !l && bn(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate, u && !Rp(n)) {
                    a = ms(e, t, !1), u = !1;
                    continue
                }
                if (a === 2) {
                    if (u = t, e.errorRecoveryDisabledLanes & u) var h = 0;
                    else h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
                    if (h !== 0) {
                        t = h;
                        e: {
                            var y = e;a = ba;
                            var E = y.current.memoizedState.isDehydrated;
                            if (E && (Rl(y, h).flags |= 256), h = ms(y, h, !1), h !== 2) {
                                if (us && !E) {
                                    y.errorRecoveryDisabledLanes |= u, Qn |= u, a = 4;
                                    break e
                                }
                                u = lt, lt = a, u !== null && (lt === null ? lt = u : lt.push.apply(lt, u))
                            }
                            a = h
                        }
                        if (u = !1, a !== 2) continue
                    }
                }
                if (a === 1) {
                    Rl(e, 0), bn(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e, u = a, u) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            bn(l, t, Et, !pn);
                            break e;
                        case 2:
                            lt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (a = os + 300 - Tt(), 10 < a)) {
                        if (bn(l, t, Et, !pn), Pa(l, 0, !0) !== 0) break e;
                        l.timeoutHandle = Zd(yd.bind(null, l, n, lt, Yi, ss, t, Et, Qn, _l, pn, u, 2, -0, 0), a);
                        break e
                    }
                    yd(l, n, lt, Yi, ss, t, Et, Qn, _l, pn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Dt(e)
    }

    function yd(e, t, n, l, a, u, h, y, E, w, H, q, L, D) {
        if (e.timeoutHandle = -1, q = t.subtreeFlags, (q & 8192 || (q & 16785408) === 16785408) && (Ca = {
                stylesheets: null,
                count: 0,
                unsuspend: uy
            }, cd(t), q = sy(), q !== null)) {
            e.cancelPendingCommit = q(xd.bind(null, e, t, u, n, l, a, h, y, E, H, 1, L, D)), bn(e, u, h, !w);
            return
        }
        xd(e, t, u, n, l, a, h, y, E)
    }

    function Rp(e) {
        for (var t = e;;) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var a = n[l],
                        u = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!rt(u(), a)) return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function bn(e, t, n, l) {
        t &= ~rs, t &= ~Qn, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
        for (var a = t; 0 < a;) {
            var u = 31 - ut(a),
                h = 1 << u;
            l[u] = -1, a &= ~h
        }
        n !== 0 && To(e, n, t)
    }

    function Vi() {
        return (_e & 6) === 0 ? (_a(0), !1) : !0
    }

    function hs() {
        if (ce !== null) {
            if (Oe === 0) var e = ce.return;
            else e = ce, Yt = Bn = null, Mr(e), yl = null, da = 0, e = ce;
            for (; e !== null;) Ff(e.alternate, e), e = e.return;
            ce = null
        }
    }

    function Rl(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1, Qp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), hs(), Ce = e, ce = n = jt(e.current, null), ge = t, Oe = 0, ft = null, pn = !1, El = jl(e, t), us = !1, _l = Et = rs = Qn = yn = ze = 0, lt = ba = null, ss = !1, (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements, l &= t; 0 < l;) {
                var a = 31 - ut(l),
                    u = 1 << a;
                t |= e[a], l &= ~u
            }
        return Jt = t, ci(), n
    }

    function vd(e, t) {
        se = null, U.H = wi, t === la || t === Si ? (t = Nc(), Oe = 3) : t === Lc ? (t = Nc(), Oe = 4) : Oe = t === Hf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, ce === null && (ze = 1, Ni(e, pt(t, e.current)))
    }

    function Sd() {
        var e = U.H;
        return U.H = wi, e === null ? wi : e
    }

    function bd() {
        var e = U.A;
        return U.A = Op, e
    }

    function gs() {
        ze = 4, pn || (ge & 4194048) !== ge && bt.current !== null || (El = !0), (yn & 134217727) === 0 && (Qn & 134217727) === 0 || Ce === null || bn(Ce, ge, Et, !1)
    }

    function ms(e, t, n) {
        var l = _e;
        _e |= 2;
        var a = Sd(),
            u = bd();
        (Ce !== e || ge !== t) && (Yi = null, Rl(e, t)), t = !1;
        var h = ze;
        e: do try {
                if (Oe !== 0 && ce !== null) {
                    var y = ce,
                        E = ft;
                    switch (Oe) {
                        case 8:
                            hs(), h = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            bt.current === null && (t = !0);
                            var w = Oe;
                            if (Oe = 0, ft = null, Al(e, y, E, w), n && El) {
                                h = 0;
                                break e
                            }
                            break;
                        default:
                            w = Oe, Oe = 0, ft = null, Al(e, y, E, w)
                    }
                }
                Ap(), h = ze;
                break
            } catch (H) {
                vd(e, H)
            }
            while (!0);
            return t && e.shellSuspendCounter++, Yt = Bn = null, _e = l, U.H = a, U.A = u, ce === null && (Ce = null, ge = 0, ci()), h
    }

    function Ap() {
        for (; ce !== null;) Ed(ce)
    }

    function Tp(e, t) {
        var n = _e;
        _e |= 2;
        var l = Sd(),
            a = bd();
        Ce !== e || ge !== t ? (Yi = null, Gi = Tt() + 500, Rl(e, t)) : El = jl(e, t);
        e: do try {
                if (Oe !== 0 && ce !== null) {
                    t = ce;
                    var u = ft;
                    t: switch (Oe) {
                        case 1:
                            Oe = 0, ft = null, Al(e, t, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (Dc(u)) {
                                Oe = 0, ft = null, _d(t);
                                break
                            }
                            t = function() {
                                Oe !== 2 && Oe !== 9 || Ce !== e || (Oe = 7), Dt(e)
                            }, u.then(t, t);
                            break e;
                        case 3:
                            Oe = 7;
                            break e;
                        case 4:
                            Oe = 5;
                            break e;
                        case 7:
                            Dc(u) ? (Oe = 0, ft = null, _d(t)) : (Oe = 0, ft = null, Al(e, t, u, 7));
                            break;
                        case 5:
                            var h = null;
                            switch (ce.tag) {
                                case 26:
                                    h = ce.memoizedState;
                                case 5:
                                case 27:
                                    var y = ce;
                                    if (!h || lh(h)) {
                                        Oe = 0, ft = null;
                                        var E = y.sibling;
                                        if (E !== null) ce = E;
                                        else {
                                            var w = y.return;
                                            w !== null ? (ce = w, Qi(w)) : ce = null
                                        }
                                        break t
                                    }
                            }
                            Oe = 0, ft = null, Al(e, t, u, 5);
                            break;
                        case 6:
                            Oe = 0, ft = null, Al(e, t, u, 6);
                            break;
                        case 8:
                            hs(), ze = 6;
                            break e;
                        default:
                            throw Error(o(462))
                    }
                }
                Cp();
                break
            } catch (H) {
                vd(e, H)
            }
            while (!0);
            return Yt = Bn = null, U.H = l, U.A = a, _e = n, ce !== null ? 0 : (Ce = null, ge = 0, ci(), ze)
    }

    function Cp() {
        for (; ce !== null && !Fg();) Ed(ce)
    }

    function Ed(e) {
        var t = $f(e.alternate, e, Jt);
        e.memoizedProps = e.pendingProps, t === null ? Qi(e) : ce = t
    }

    function _d(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Vf(n, t, t.pendingProps, t.type, void 0, ge);
                break;
            case 11:
                t = Vf(n, t, t.pendingProps, t.type.render, t.ref, ge);
                break;
            case 5:
                Mr(t);
            default:
                Ff(n, t), t = ce = _c(t, Jt), t = $f(n, t, Jt)
        }
        e.memoizedProps = e.pendingProps, t === null ? Qi(e) : ce = t
    }

    function Al(e, t, n, l) {
        Yt = Bn = null, Mr(t), yl = null, da = 0;
        var a = t.return;
        try {
            if (yp(e, a, t, n, ge)) {
                ze = 1, Ni(e, pt(n, e.current)), ce = null;
                return
            }
        } catch (u) {
            if (a !== null) throw ce = a, u;
            ze = 1, Ni(e, pt(n, e.current)), ce = null;
            return
        }
        t.flags & 32768 ? (be || l === 1 ? e = !0 : El || (ge & 536870912) !== 0 ? e = !1 : (pn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = bt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Od(t, e)) : Qi(t)
    }

    function Qi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Od(t, pn);
                return
            }
            e = t.return;
            var n = Sp(t.alternate, t, Jt);
            if (n !== null) {
                ce = n;
                return
            }
            if (t = t.sibling, t !== null) {
                ce = t;
                return
            }
            ce = t = e
        } while (t !== null);
        ze === 0 && (ze = 5)
    }

    function Od(e, t) {
        do {
            var n = bp(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767, ce = n;
                return
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                ce = e;
                return
            }
            ce = e = n
        } while (e !== null);
        ze = 6, ce = null
    }

    function xd(e, t, n, l, a, u, h, y, E) {
        e.cancelPendingCommit = null;
        do Xi(); while (Ke !== 0);
        if ((_e & 6) !== 0) throw Error(o(327));
        if (t !== null) {
            if (t === e.current) throw Error(o(177));
            if (u = t.lanes | t.childLanes, u |= ir, um(e, n, u, h, y, E), e === Ce && (ce = Ce = null, ge = 0), Ol = t, Sn = e, xl = n, cs = u, fs = a, gd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Dp(Ja, function() {
                    return wd(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
                l = U.T, U.T = null, a = X.p, X.p = 2, h = _e, _e |= 4;
                try {
                    Ep(e, t, n)
                } finally {
                    _e = h, X.p = a, U.T = l
                }
            }
            Ke = 1, Rd(), Ad(), Td()
        }
    }

    function Rd() {
        if (Ke === 1) {
            Ke = 0;
            var e = Sn,
                t = Ol,
                n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = U.T, U.T = null;
                var l = X.p;
                X.p = 2;
                var a = _e;
                _e |= 4;
                try {
                    rd(t, e);
                    var u = Ts,
                        h = dc(e.containerInfo),
                        y = u.focusedElem,
                        E = u.selectionRange;
                    if (h !== y && y && y.ownerDocument && fc(y.ownerDocument.documentElement, y)) {
                        if (E !== null && er(y)) {
                            var w = E.start,
                                H = E.end;
                            if (H === void 0 && (H = w), "selectionStart" in y) y.selectionStart = w, y.selectionEnd = Math.min(H, y.value.length);
                            else {
                                var q = y.ownerDocument || document,
                                    L = q && q.defaultView || window;
                                if (L.getSelection) {
                                    var D = L.getSelection(),
                                        le = y.textContent.length,
                                        ee = Math.min(E.start, le),
                                        Ae = E.end === void 0 ? ee : Math.min(E.end, le);
                                    !D.extend && ee > Ae && (h = Ae, Ae = ee, ee = h);
                                    var T = cc(y, ee),
                                        A = cc(y, Ae);
                                    if (T && A && (D.rangeCount !== 1 || D.anchorNode !== T.node || D.anchorOffset !== T.offset || D.focusNode !== A.node || D.focusOffset !== A.offset)) {
                                        var C = q.createRange();
                                        C.setStart(T.node, T.offset), D.removeAllRanges(), ee > Ae ? (D.addRange(C), D.extend(A.node, A.offset)) : (C.setEnd(A.node, A.offset), D.addRange(C))
                                    }
                                }
                            }
                        }
                        for (q = [], D = y; D = D.parentNode;) D.nodeType === 1 && q.push({
                            element: D,
                            left: D.scrollLeft,
                            top: D.scrollTop
                        });
                        for (typeof y.focus == "function" && y.focus(), y = 0; y < q.length; y++) {
                            var B = q[y];
                            B.element.scrollLeft = B.left, B.element.scrollTop = B.top
                        }
                    }
                    nu = !!As, Ts = As = null
                } finally {
                    _e = a, X.p = l, U.T = n
                }
            }
            e.current = t, Ke = 2
        }
    }

    function Ad() {
        if (Ke === 2) {
            Ke = 0;
            var e = Sn,
                t = Ol,
                n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = U.T, U.T = null;
                var l = X.p;
                X.p = 2;
                var a = _e;
                _e |= 4;
                try {
                    ld(e, t.alternate, t)
                } finally {
                    _e = a, X.p = l, U.T = n
                }
            }
            Ke = 3
        }
    }

    function Td() {
        if (Ke === 4 || Ke === 3) {
            Ke = 0, Wg();
            var e = Sn,
                t = Ol,
                n = xl,
                l = gd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Ol = Sn = null, Cd(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (a === 0 && (vn = null), zu(n), t = t.stateNode, it && typeof it.onCommitFiberRoot == "function") try {
                it.onCommitFiberRoot(Bl, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                t = U.T, a = X.p, X.p = 2, U.T = null;
                try {
                    for (var u = e.onRecoverableError, h = 0; h < l.length; h++) {
                        var y = l[h];
                        u(y.value, {
                            componentStack: y.stack
                        })
                    }
                } finally {
                    U.T = t, X.p = a
                }
            }(xl & 3) !== 0 && Xi(), Dt(e), a = e.pendingLanes, (n & 4194090) !== 0 && (a & 42) !== 0 ? e === ds ? Ea++ : (Ea = 0, ds = e) : Ea = 0, _a(0)
        }
    }

    function Cd(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ta(t)))
    }

    function Xi(e) {
        return Rd(), Ad(), Td(), wd()
    }

    function wd() {
        if (Ke !== 5) return !1;
        var e = Sn,
            t = cs;
        cs = 0;
        var n = zu(xl),
            l = U.T,
            a = X.p;
        try {
            X.p = 32 > n ? 32 : n, U.T = null, n = fs, fs = null;
            var u = Sn,
                h = xl;
            if (Ke = 0, Ol = Sn = null, xl = 0, (_e & 6) !== 0) throw Error(o(331));
            var y = _e;
            if (_e |= 4, dd(u.current), od(u, u.current, h, n), _e = y, _a(0, !1), it && typeof it.onPostCommitFiberRoot == "function") try {
                it.onPostCommitFiberRoot(Bl, u)
            } catch {}
            return !0
        } finally {
            X.p = a, U.T = l, Cd(e, t)
        }
    }

    function Md(e, t, n) {
        t = pt(n, t), t = Xr(e.stateNode, t, 2), e = on(e, t, 2), e !== null && (ql(e, 2), Dt(e))
    }

    function Te(e, t, n) {
        if (e.tag === 3) Md(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Md(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vn === null || !vn.has(l))) {
                        e = pt(n, e), n = Nf(2), l = on(t, n, 2), l !== null && (Uf(n, l, t, e), ql(l, 2), Dt(l));
                        break
                    }
                }
                t = t.return
            }
    }

    function ps(e, t, n) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new xp;
            var a = new Set;
            l.set(t, a)
        } else a = l.get(t), a === void 0 && (a = new Set, l.set(t, a));
        a.has(n) || (us = !0, a.add(n), e = wp.bind(null, e, t, n), t.then(e, e))
    }

    function wp(e, t, n) {
        var l = e.pingCache;
        l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ce === e && (ge & n) === n && (ze === 4 || ze === 3 && (ge & 62914560) === ge && 300 > Tt() - os ? (_e & 2) === 0 && Rl(e, 0) : rs |= n, _l === ge && (_l = 0)), Dt(e)
    }

    function Ld(e, t) {
        t === 0 && (t = Ao()), e = rl(e, t), e !== null && (ql(e, t), Dt(e))
    }

    function Mp(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Ld(e, n)
    }

    function Lp(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var l = e.stateNode,
                    a = e.memoizedState;
                a !== null && (n = a.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        l !== null && l.delete(t), Ld(e, n)
    }

    function Dp(e, t) {
        return wu(e, t)
    }
    var Zi = null,
        Tl = null,
        ys = !1,
        Ki = !1,
        vs = !1,
        Xn = 0;

    function Dt(e) {
        e !== Tl && e.next === null && (Tl === null ? Zi = Tl = e : Tl = Tl.next = e), Ki = !0, ys || (ys = !0, Np())
    }

    function _a(e, t) {
        if (!vs && Ki) {
            vs = !0;
            do
                for (var n = !1, l = Zi; l !== null;) {
                    if (e !== 0) {
                        var a = l.pendingLanes;
                        if (a === 0) var u = 0;
                        else {
                            var h = l.suspendedLanes,
                                y = l.pingedLanes;
                            u = (1 << 31 - ut(42 | e) + 1) - 1, u &= a & ~(h & ~y), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0, Ud(l, u))
                    } else u = ge, u = Pa(l, l === Ce ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (u & 3) === 0 || jl(l, u) || (n = !0, Ud(l, u));
                    l = l.next
                }
            while (n);
            vs = !1
        }
    }

    function zp() {
        Dd()
    }

    function Dd() {
        Ki = ys = !1;
        var e = 0;
        Xn !== 0 && (Vp() && (e = Xn), Xn = 0);
        for (var t = Tt(), n = null, l = Zi; l !== null;) {
            var a = l.next,
                u = zd(l, t);
            u === 0 ? (l.next = null, n === null ? Zi = a : n.next = a, a === null && (Tl = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (Ki = !0)), l = a
        }
        _a(e)
    }

    function zd(e, t) {
        for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u;) {
            var h = 31 - ut(u),
                y = 1 << h,
                E = a[h];
            E === -1 ? ((y & n) === 0 || (y & l) !== 0) && (a[h] = im(y, t)) : E <= t && (e.expiredLanes |= y), u &= ~y
        }
        if (t = Ce, n = ge, n = Pa(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, n === 0 || e === t && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Mu(l), e.callbackNode = null, e.callbackPriority = 0;
        if ((n & 3) === 0 || jl(e, n)) {
            if (t = n & -n, t === e.callbackPriority) return t;
            switch (l !== null && Mu(l), zu(n)) {
                case 2:
                case 8:
                    n = Oo;
                    break;
                case 32:
                    n = Ja;
                    break;
                case 268435456:
                    n = xo;
                    break;
                default:
                    n = Ja
            }
            return l = Nd.bind(null, e), n = wu(n, l), e.callbackPriority = t, e.callbackNode = n, t
        }
        return l !== null && l !== null && Mu(l), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Nd(e, t) {
        if (Ke !== 0 && Ke !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (Xi() && e.callbackNode !== n) return null;
        var l = ge;
        return l = Pa(e, e === Ce ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (pd(e, l, t), zd(e, Tt()), e.callbackNode != null && e.callbackNode === n ? Nd.bind(null, e) : null)
    }

    function Ud(e, t) {
        if (Xi()) return null;
        pd(e, t, !0)
    }

    function Np() {
        Xp(function() {
            (_e & 6) !== 0 ? wu(_o, zp) : Dd()
        })
    }

    function Ss() {
        return Xn === 0 && (Xn = Ro()), Xn
    }

    function Hd(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : li("" + e)
    }

    function Bd(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }

    function Up(e, t, n, l, a) {
        if (t === "submit" && n && n.stateNode === a) {
            var u = Hd((a[Ie] || null).action),
                h = l.submitter;
            h && (t = (t = h[Ie] || null) ? Hd(t.formAction) : h.getAttribute("formAction"), t !== null && (u = t, h = null));
            var y = new ri("action", "action", null, l, a);
            e.push({
                event: y,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Xn !== 0) {
                                var E = h ? Bd(a, h) : new FormData(a);
                                qr(n, {
                                    pending: !0,
                                    data: E,
                                    method: a.method,
                                    action: u
                                }, null, E)
                            }
                        } else typeof u == "function" && (y.preventDefault(), E = h ? Bd(a, h) : new FormData(a), qr(n, {
                            pending: !0,
                            data: E,
                            method: a.method,
                            action: u
                        }, u, E))
                    },
                    currentTarget: a
                }]
            })
        }
    }
    for (var bs = 0; bs < ar.length; bs++) {
        var Es = ar[bs],
            Hp = Es.toLowerCase(),
            Bp = Es[0].toUpperCase() + Es.slice(1);
        Ot(Hp, "on" + Bp)
    }
    Ot(mc, "onAnimationEnd"), Ot(pc, "onAnimationIteration"), Ot(yc, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(ep, "onTransitionRun"), Ot(tp, "onTransitionStart"), Ot(np, "onTransitionCancel"), Ot(vc, "onTransitionEnd"), Wn("onMouseEnter", ["mouseout", "mouseover"]), Wn("onMouseLeave", ["mouseout", "mouseover"]), Wn("onPointerEnter", ["pointerout", "pointerover"]), Wn("onPointerLeave", ["pointerout", "pointerover"]), Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Oa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        jp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oa));

    function jd(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var l = e[n],
                a = l.event;
            l = l.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var h = l.length - 1; 0 <= h; h--) {
                        var y = l[h],
                            E = y.instance,
                            w = y.currentTarget;
                        if (y = y.listener, E !== u && a.isPropagationStopped()) break e;
                        u = y, a.currentTarget = w;
                        try {
                            u(a)
                        } catch (H) {
                            zi(H)
                        }
                        a.currentTarget = null, u = E
                    } else
                        for (h = 0; h < l.length; h++) {
                            if (y = l[h], E = y.instance, w = y.currentTarget, y = y.listener, E !== u && a.isPropagationStopped()) break e;
                            u = y, a.currentTarget = w;
                            try {
                                u(a)
                            } catch (H) {
                                zi(H)
                            }
                            a.currentTarget = null, u = E
                        }
            }
        }
    }

    function fe(e, t) {
        var n = t[Nu];
        n === void 0 && (n = t[Nu] = new Set);
        var l = e + "__bubble";
        n.has(l) || (qd(t, e, 2, !1), n.add(l))
    }

    function _s(e, t, n) {
        var l = 0;
        t && (l |= 4), qd(n, e, l, t)
    }
    var ki = "_reactListening" + Math.random().toString(36).slice(2);

    function Os(e) {
        if (!e[ki]) {
            e[ki] = !0, Lo.forEach(function(n) {
                n !== "selectionchange" && (jp.has(n) || _s(n, !1, e), _s(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ki] || (t[ki] = !0, _s("selectionchange", !1, t))
        }
    }

    function qd(e, t, n, l) {
        switch (oh(t)) {
            case 2:
                var a = fy;
                break;
            case 8:
                a = dy;
                break;
            default:
                a = Bs
        }
        n = a.bind(null, t, n, e), a = void 0, !Zu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function xs(e, t, n, l, a) {
        var u = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var h = l.tag;
            if (h === 3 || h === 4) {
                var y = l.stateNode.containerInfo;
                if (y === a) break;
                if (h === 4)
                    for (h = l.return; h !== null;) {
                        var E = h.tag;
                        if ((E === 3 || E === 4) && h.stateNode.containerInfo === a) return;
                        h = h.return
                    }
                for (; y !== null;) {
                    if (h = $n(y), h === null) return;
                    if (E = h.tag, E === 5 || E === 6 || E === 26 || E === 27) {
                        l = u = h;
                        continue e
                    }
                    y = y.parentNode
                }
            }
            l = l.return
        }
        Zo(function() {
            var w = u,
                H = Qu(n),
                q = [];
            e: {
                var L = Sc.get(e);
                if (L !== void 0) {
                    var D = ri,
                        le = e;
                    switch (e) {
                        case "keypress":
                            if (ii(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            D = Dm;
                            break;
                        case "focusin":
                            le = "focus", D = Ju;
                            break;
                        case "focusout":
                            le = "blur", D = Ju;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            D = Ju;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            D = $o;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            D = bm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            D = Um;
                            break;
                        case mc:
                        case pc:
                        case yc:
                            D = Om;
                            break;
                        case vc:
                            D = Bm;
                            break;
                        case "scroll":
                        case "scrollend":
                            D = vm;
                            break;
                        case "wheel":
                            D = qm;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            D = Rm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            D = Fo;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            D = Ym
                    }
                    var ee = (t & 4) !== 0,
                        Ae = !ee && (e === "scroll" || e === "scrollend"),
                        T = ee ? L !== null ? L + "Capture" : null : L;
                    ee = [];
                    for (var A = w, C; A !== null;) {
                        var B = A;
                        if (C = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || C === null || T === null || (B = Vl(A, T), B != null && ee.push(xa(A, B, C))), Ae) break;
                        A = A.return
                    }
                    0 < ee.length && (L = new D(L, le, null, n, H), q.push({
                        event: L,
                        listeners: ee
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (L = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", L && n !== Vu && (le = n.relatedTarget || n.fromElement) && ($n(le) || le[kn])) break e;
                    if ((D || L) && (L = H.window === H ? H : (L = H.ownerDocument) ? L.defaultView || L.parentWindow : window, D ? (le = n.relatedTarget || n.toElement, D = w, le = le ? $n(le) : null, le !== null && (Ae = f(le), ee = le.tag, le !== Ae || ee !== 5 && ee !== 27 && ee !== 6) && (le = null)) : (D = null, le = w), D !== le)) {
                        if (ee = $o, B = "onMouseLeave", T = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Fo, B = "onPointerLeave", T = "onPointerEnter", A = "pointer"), Ae = D == null ? L : Yl(D), C = le == null ? L : Yl(le), L = new ee(B, A + "leave", D, n, H), L.target = Ae, L.relatedTarget = C, B = null, $n(H) === w && (ee = new ee(T, A + "enter", le, n, H), ee.target = C, ee.relatedTarget = Ae, B = ee), Ae = B, D && le) t: {
                            for (ee = D, T = le, A = 0, C = ee; C; C = Cl(C)) A++;
                            for (C = 0, B = T; B; B = Cl(B)) C++;
                            for (; 0 < A - C;) ee = Cl(ee),
                            A--;
                            for (; 0 < C - A;) T = Cl(T),
                            C--;
                            for (; A--;) {
                                if (ee === T || T !== null && ee === T.alternate) break t;
                                ee = Cl(ee), T = Cl(T)
                            }
                            ee = null
                        }
                        else ee = null;
                        D !== null && Gd(q, L, D, ee, !1), le !== null && Ae !== null && Gd(q, Ae, le, ee, !0)
                    }
                }
                e: {
                    if (L = w ? Yl(w) : window, D = L.nodeName && L.nodeName.toLowerCase(), D === "select" || D === "input" && L.type === "file") var $ = ac;
                    else if (nc(L))
                        if (ic) $ = Wm;
                        else {
                            $ = Jm;
                            var oe = $m
                        }
                    else D = L.nodeName,
                    !D || D.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? w && Yu(w.elementType) && ($ = ac) : $ = Fm;
                    if ($ && ($ = $(e, w))) {
                        lc(q, $, n, H);
                        break e
                    }
                    oe && oe(e, L, w),
                    e === "focusout" && w && L.type === "number" && w.memoizedProps.value != null && Gu(L, "number", L.value)
                }
                switch (oe = w ? Yl(w) : window, e) {
                    case "focusin":
                        (nc(oe) || oe.contentEditable === "true") && (al = oe, tr = w, Fl = null);
                        break;
                    case "focusout":
                        Fl = tr = al = null;
                        break;
                    case "mousedown":
                        nr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        nr = !1, hc(q, n, H);
                        break;
                    case "selectionchange":
                        if (Im) break;
                    case "keydown":
                    case "keyup":
                        hc(q, n, H)
                }
                var W;
                if (Wu) e: {
                    switch (e) {
                        case "compositionstart":
                            var te = "onCompositionStart";
                            break e;
                        case "compositionend":
                            te = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            te = "onCompositionUpdate";
                            break e
                    }
                    te = void 0
                }
                else ll ? ec(e, n) && (te = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (te = "onCompositionStart");te && (Wo && n.locale !== "ko" && (ll || te !== "onCompositionStart" ? te === "onCompositionEnd" && ll && (W = Ko()) : (an = H, Ku = "value" in an ? an.value : an.textContent, ll = !0)), oe = $i(w, te), 0 < oe.length && (te = new Jo(te, e, null, n, H), q.push({
                    event: te,
                    listeners: oe
                }), W ? te.data = W : (W = tc(n), W !== null && (te.data = W)))),
                (W = Qm ? Xm(e, n) : Zm(e, n)) && (te = $i(w, "onBeforeInput"), 0 < te.length && (oe = new Jo("onBeforeInput", "beforeinput", null, n, H), q.push({
                    event: oe,
                    listeners: te
                }), oe.data = W)),
                Up(q, e, w, n, H)
            }
            jd(q, t)
        })
    }

    function xa(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function $i(e, t) {
        for (var n = t + "Capture", l = []; e !== null;) {
            var a = e,
                u = a.stateNode;
            if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = Vl(e, n), a != null && l.unshift(xa(e, a, u)), a = Vl(e, t), a != null && l.push(xa(e, a, u))), e.tag === 3) return l;
            e = e.return
        }
        return []
    }

    function Cl(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Gd(e, t, n, l, a) {
        for (var u = t._reactName, h = []; n !== null && n !== l;) {
            var y = n,
                E = y.alternate,
                w = y.stateNode;
            if (y = y.tag, E !== null && E === l) break;
            y !== 5 && y !== 26 && y !== 27 || w === null || (E = w, a ? (w = Vl(n, u), w != null && h.unshift(xa(n, w, E))) : a || (w = Vl(n, u), w != null && h.push(xa(n, w, E)))), n = n.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var qp = /\r\n?/g,
        Gp = /\u0000|\uFFFD/g;

    function Yd(e) {
        return (typeof e == "string" ? e : "" + e).replace(qp, `
`).replace(Gp, "")
    }

    function Vd(e, t) {
        return t = Yd(t), Yd(e) === t
    }

    function Ji() {}

    function Re(e, t, n, l, a, u) {
        switch (n) {
            case "children":
                typeof l == "string" ? t === "body" || t === "textarea" && l === "" || el(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && el(e, "" + l);
                break;
            case "className":
                ei(e, "class", l);
                break;
            case "tabIndex":
                ei(e, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                ei(e, n, l);
                break;
            case "style":
                Qo(e, l, u);
                break;
            case "data":
                if (t !== "object") {
                    ei(e, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (t !== "a" || n !== "href")) {
                    e.removeAttribute(n);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                l = li("" + l), e.setAttribute(n, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (n === "formAction" ? (t !== "input" && Re(e, t, "name", a.name, a, null), Re(e, t, "formEncType", a.formEncType, a, null), Re(e, t, "formMethod", a.formMethod, a, null), Re(e, t, "formTarget", a.formTarget, a, null)) : (Re(e, t, "encType", a.encType, a, null), Re(e, t, "method", a.method, a, null), Re(e, t, "target", a.target, a, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                l = li("" + l), e.setAttribute(n, l);
                break;
            case "onClick":
                l != null && (e.onclick = Ji);
                break;
            case "onScroll":
                l != null && fe("scroll", e);
                break;
            case "onScrollEnd":
                l != null && fe("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
                    if (n = l.__html, n != null) {
                        if (a.children != null) throw Error(o(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                e.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = li("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
                break;
            case "popover":
                fe("beforetoggle", e), fe("toggle", e), Ia(e, "popover", l);
                break;
            case "xlinkActuate":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                Ia(e, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = pm.get(n) || n, Ia(e, n, l))
        }
    }

    function Rs(e, t, n, l, a, u) {
        switch (n) {
            case "style":
                Qo(e, l, u);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
                    if (n = l.__html, n != null) {
                        if (a.children != null) throw Error(o(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof l == "string" ? el(e, l) : (typeof l == "number" || typeof l == "bigint") && el(e, "" + l);
                break;
            case "onScroll":
                l != null && fe("scroll", e);
                break;
            case "onScrollEnd":
                l != null && fe("scrollend", e);
                break;
            case "onClick":
                l != null && (e.onclick = Ji);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Do.hasOwnProperty(n)) e: {
                    if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), u = e[Ie] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, a), typeof l == "function")) {
                        typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
                        break e
                    }
                    n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Ia(e, n, l)
                }
        }
    }

    function ke(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                fe("error", e), fe("load", e);
                var l = !1,
                    a = !1,
                    u;
                for (u in n)
                    if (n.hasOwnProperty(u)) {
                        var h = n[u];
                        if (h != null) switch (u) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                Re(e, t, u, h, n, null)
                        }
                    }
                a && Re(e, t, "srcSet", n.srcSet, n, null), l && Re(e, t, "src", n.src, n, null);
                return;
            case "input":
                fe("invalid", e);
                var y = u = h = a = null,
                    E = null,
                    w = null;
                for (l in n)
                    if (n.hasOwnProperty(l)) {
                        var H = n[l];
                        if (H != null) switch (l) {
                            case "name":
                                a = H;
                                break;
                            case "type":
                                h = H;
                                break;
                            case "checked":
                                E = H;
                                break;
                            case "defaultChecked":
                                w = H;
                                break;
                            case "value":
                                u = H;
                                break;
                            case "defaultValue":
                                y = H;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (H != null) throw Error(o(137, t));
                                break;
                            default:
                                Re(e, t, l, H, n, null)
                        }
                    }
                qo(e, u, y, E, w, h, a, !1), ti(e);
                return;
            case "select":
                fe("invalid", e), l = h = u = null;
                for (a in n)
                    if (n.hasOwnProperty(a) && (y = n[a], y != null)) switch (a) {
                        case "value":
                            u = y;
                            break;
                        case "defaultValue":
                            h = y;
                            break;
                        case "multiple":
                            l = y;
                        default:
                            Re(e, t, a, y, n, null)
                    }
                t = u, n = h, e.multiple = !!l, t != null ? In(e, !!l, t, !1) : n != null && In(e, !!l, n, !0);
                return;
            case "textarea":
                fe("invalid", e), u = a = l = null;
                for (h in n)
                    if (n.hasOwnProperty(h) && (y = n[h], y != null)) switch (h) {
                        case "value":
                            l = y;
                            break;
                        case "defaultValue":
                            a = y;
                            break;
                        case "children":
                            u = y;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (y != null) throw Error(o(91));
                            break;
                        default:
                            Re(e, t, h, y, n, null)
                    }
                Yo(e, l, a, u), ti(e);
                return;
            case "option":
                for (E in n)
                    if (n.hasOwnProperty(E) && (l = n[E], l != null)) switch (E) {
                        case "selected":
                            e.selected = l && typeof l != "function" && typeof l != "symbol";
                            break;
                        default:
                            Re(e, t, E, l, n, null)
                    }
                return;
            case "dialog":
                fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
                break;
            case "iframe":
            case "object":
                fe("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < Oa.length; l++) fe(Oa[l], e);
                break;
            case "image":
                fe("error", e), fe("load", e);
                break;
            case "details":
                fe("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                fe("error", e), fe("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (w in n)
                    if (n.hasOwnProperty(w) && (l = n[w], l != null)) switch (w) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Re(e, t, w, l, n, null)
                    }
                return;
            default:
                if (Yu(t)) {
                    for (H in n) n.hasOwnProperty(H) && (l = n[H], l !== void 0 && Rs(e, t, H, l, n, void 0));
                    return
                }
        }
        for (y in n) n.hasOwnProperty(y) && (l = n[y], l != null && Re(e, t, y, l, n, null))
    }

    function Yp(e, t, n, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var a = null,
                    u = null,
                    h = null,
                    y = null,
                    E = null,
                    w = null,
                    H = null;
                for (D in n) {
                    var q = n[D];
                    if (n.hasOwnProperty(D) && q != null) switch (D) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            E = q;
                        default:
                            l.hasOwnProperty(D) || Re(e, t, D, null, l, q)
                    }
                }
                for (var L in l) {
                    var D = l[L];
                    if (q = n[L], l.hasOwnProperty(L) && (D != null || q != null)) switch (L) {
                        case "type":
                            u = D;
                            break;
                        case "name":
                            a = D;
                            break;
                        case "checked":
                            w = D;
                            break;
                        case "defaultChecked":
                            H = D;
                            break;
                        case "value":
                            h = D;
                            break;
                        case "defaultValue":
                            y = D;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null) throw Error(o(137, t));
                            break;
                        default:
                            D !== q && Re(e, t, L, D, l, q)
                    }
                }
                qu(e, h, y, E, w, H, u, a);
                return;
            case "select":
                D = h = y = L = null;
                for (u in n)
                    if (E = n[u], n.hasOwnProperty(u) && E != null) switch (u) {
                        case "value":
                            break;
                        case "multiple":
                            D = E;
                        default:
                            l.hasOwnProperty(u) || Re(e, t, u, null, l, E)
                    }
                for (a in l)
                    if (u = l[a], E = n[a], l.hasOwnProperty(a) && (u != null || E != null)) switch (a) {
                        case "value":
                            L = u;
                            break;
                        case "defaultValue":
                            y = u;
                            break;
                        case "multiple":
                            h = u;
                        default:
                            u !== E && Re(e, t, a, u, l, E)
                    }
                t = y, n = h, l = D, L != null ? In(e, !!n, L, !1) : !!l != !!n && (t != null ? In(e, !!n, t, !0) : In(e, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                D = L = null;
                for (y in n)
                    if (a = n[y], n.hasOwnProperty(y) && a != null && !l.hasOwnProperty(y)) switch (y) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Re(e, t, y, null, l, a)
                    }
                for (h in l)
                    if (a = l[h], u = n[h], l.hasOwnProperty(h) && (a != null || u != null)) switch (h) {
                        case "value":
                            L = a;
                            break;
                        case "defaultValue":
                            D = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(o(91));
                            break;
                        default:
                            a !== u && Re(e, t, h, a, l, u)
                    }
                Go(e, L, D);
                return;
            case "option":
                for (var le in n)
                    if (L = n[le], n.hasOwnProperty(le) && L != null && !l.hasOwnProperty(le)) switch (le) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Re(e, t, le, null, l, L)
                    }
                for (E in l)
                    if (L = l[E], D = n[E], l.hasOwnProperty(E) && L !== D && (L != null || D != null)) switch (E) {
                        case "selected":
                            e.selected = L && typeof L != "function" && typeof L != "symbol";
                            break;
                        default:
                            Re(e, t, E, L, l, D)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ee in n) L = n[ee], n.hasOwnProperty(ee) && L != null && !l.hasOwnProperty(ee) && Re(e, t, ee, null, l, L);
                for (w in l)
                    if (L = l[w], D = n[w], l.hasOwnProperty(w) && L !== D && (L != null || D != null)) switch (w) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (L != null) throw Error(o(137, t));
                            break;
                        default:
                            Re(e, t, w, L, l, D)
                    }
                return;
            default:
                if (Yu(t)) {
                    for (var Ae in n) L = n[Ae], n.hasOwnProperty(Ae) && L !== void 0 && !l.hasOwnProperty(Ae) && Rs(e, t, Ae, void 0, l, L);
                    for (H in l) L = l[H], D = n[H], !l.hasOwnProperty(H) || L === D || L === void 0 && D === void 0 || Rs(e, t, H, L, l, D);
                    return
                }
        }
        for (var T in n) L = n[T], n.hasOwnProperty(T) && L != null && !l.hasOwnProperty(T) && Re(e, t, T, null, l, L);
        for (q in l) L = l[q], D = n[q], !l.hasOwnProperty(q) || L === D || L == null && D == null || Re(e, t, q, L, l, D)
    }
    var As = null,
        Ts = null;

    function Fi(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Qd(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Xd(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function Cs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var ws = null;

    function Vp() {
        var e = window.event;
        return e && e.type === "popstate" ? e === ws ? !1 : (ws = e, !0) : (ws = null, !1)
    }
    var Zd = typeof setTimeout == "function" ? setTimeout : void 0,
        Qp = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Kd = typeof Promise == "function" ? Promise : void 0,
        Xp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kd < "u" ? function(e) {
            return Kd.resolve(null).then(e).catch(Zp)
        } : Zd;

    function Zp(e) {
        setTimeout(function() {
            throw e
        })
    }

    function En(e) {
        return e === "head"
    }

    function kd(e, t) {
        var n = t,
            l = 0,
            a = 0;
        do {
            var u = n.nextSibling;
            if (e.removeChild(n), u && u.nodeType === 8)
                if (n = u.data, n === "/$") {
                    if (0 < l && 8 > l) {
                        n = l;
                        var h = e.ownerDocument;
                        if (n & 1 && Ra(h.documentElement), n & 2 && Ra(h.body), n & 4)
                            for (n = h.head, Ra(n), h = n.firstChild; h;) {
                                var y = h.nextSibling,
                                    E = h.nodeName;
                                h[Gl] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && h.rel.toLowerCase() === "stylesheet" || n.removeChild(h), h = y
                            }
                    }
                    if (a === 0) {
                        e.removeChild(u), za(t);
                        return
                    }
                    a--
                } else n === "$" || n === "$?" || n === "$!" ? a++ : l = n.charCodeAt(0) - 48;
            else l = 0;
            n = u
        } while (n);
        za(t)
    }

    function Ms(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Ms(n), Uu(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(n)
        }
    }

    function Kp(e, t, n, l) {
        for (; e.nodeType === 1;) {
            var a = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (l) {
                if (!e[Gl]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (u !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"), (u !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var u = a.name == null ? null : "" + a.name;
                if (a.type === "hidden" && e.getAttribute("name") === u) return e
            } else return e;
            if (e = Rt(e.nextSibling), e === null) break
        }
        return null
    }

    function kp(e, t, n) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Rt(e.nextSibling), e === null)) return null;
        return e
    }

    function Ls(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function $p(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete") t();
        else {
            var l = function() {
                t(), n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l), e._reactRetry = l
        }
    }

    function Rt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var Ds = null;

    function $d(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Jd(e, t, n) {
        switch (t = Fi(n), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(o(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(o(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(o(454));
                return e;
            default:
                throw Error(o(451))
        }
    }

    function Ra(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        Uu(e)
    }
    var _t = new Map,
        Fd = new Set;

    function Wi(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Ft = X.d;
    X.d = {
        f: Jp,
        r: Fp,
        D: Wp,
        C: Pp,
        L: Ip,
        m: ey,
        X: ny,
        S: ty,
        M: ly
    };

    function Jp() {
        var e = Ft.f(),
            t = Vi();
        return e || t
    }

    function Fp(e) {
        var t = Jn(e);
        t !== null && t.tag === 5 && t.type === "form" ? pf(t) : Ft.r(e)
    }
    var wl = typeof document > "u" ? null : document;

    function Wd(e, t, n) {
        var l = wl;
        if (l && typeof t == "string" && t) {
            var a = mt(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Fd.has(a) || (Fd.add(a), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, l.querySelector(a) === null && (t = l.createElement("link"), ke(t, "link", e), Ye(t), l.head.appendChild(t)))
        }
    }

    function Wp(e) {
        Ft.D(e), Wd("dns-prefetch", e, null)
    }

    function Pp(e, t) {
        Ft.C(e, t), Wd("preconnect", e, t)
    }

    function Ip(e, t, n) {
        Ft.L(e, t, n);
        var l = wl;
        if (l && e && t) {
            var a = 'link[rel="preload"][as="' + mt(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + mt(n.imageSizes) + '"]')) : a += '[href="' + mt(e) + '"]';
            var u = a;
            switch (t) {
                case "style":
                    u = Ml(e);
                    break;
                case "script":
                    u = Ll(e)
            }
            _t.has(u) || (e = v({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n), _t.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(Aa(u)) || t === "script" && l.querySelector(Ta(u)) || (t = l.createElement("link"), ke(t, "link", e), Ye(t), l.head.appendChild(t)))
        }
    }

    function ey(e, t) {
        Ft.m(e, t);
        var n = wl;
        if (n && e) {
            var l = t && typeof t.as == "string" ? t.as : "script",
                a = 'link[rel="modulepreload"][as="' + mt(l) + '"][href="' + mt(e) + '"]',
                u = a;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    u = Ll(e)
            }
            if (!_t.has(u) && (e = v({
                    rel: "modulepreload",
                    href: e
                }, t), _t.set(u, e), n.querySelector(a) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(Ta(u))) return
                }
                l = n.createElement("link"), ke(l, "link", e), Ye(l), n.head.appendChild(l)
            }
        }
    }

    function ty(e, t, n) {
        Ft.S(e, t, n);
        var l = wl;
        if (l && e) {
            var a = Fn(l).hoistableStyles,
                u = Ml(e);
            t = t || "default";
            var h = a.get(u);
            if (!h) {
                var y = {
                    loading: 0,
                    preload: null
                };
                if (h = l.querySelector(Aa(u))) y.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n), (n = _t.get(u)) && zs(e, n);
                    var E = h = l.createElement("link");
                    Ye(E), ke(E, "link", e), E._p = new Promise(function(w, H) {
                        E.onload = w, E.onerror = H
                    }), E.addEventListener("load", function() {
                        y.loading |= 1
                    }), E.addEventListener("error", function() {
                        y.loading |= 2
                    }), y.loading |= 4, Pi(h, t, l)
                }
                h = {
                    type: "stylesheet",
                    instance: h,
                    count: 1,
                    state: y
                }, a.set(u, h)
            }
        }
    }

    function ny(e, t) {
        Ft.X(e, t);
        var n = wl;
        if (n && e) {
            var l = Fn(n).hoistableScripts,
                a = Ll(e),
                u = l.get(a);
            u || (u = n.querySelector(Ta(a)), u || (e = v({
                src: e,
                async: !0
            }, t), (t = _t.get(a)) && Ns(e, t), u = n.createElement("script"), Ye(u), ke(u, "link", e), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, l.set(a, u))
        }
    }

    function ly(e, t) {
        Ft.M(e, t);
        var n = wl;
        if (n && e) {
            var l = Fn(n).hoistableScripts,
                a = Ll(e),
                u = l.get(a);
            u || (u = n.querySelector(Ta(a)), u || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = _t.get(a)) && Ns(e, t), u = n.createElement("script"), Ye(u), ke(u, "link", e), n.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, l.set(a, u))
        }
    }

    function Pd(e, t, n, l) {
        var a = (a = ie.current) ? Wi(a) : null;
        if (!a) throw Error(o(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ml(n.href), n = Fn(a).hoistableStyles, l = n.get(t), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    e = Ml(n.href);
                    var u = Fn(a).hoistableStyles,
                        h = u.get(e);
                    if (h || (a = a.ownerDocument || a, h = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(e, h), (u = a.querySelector(Aa(e))) && !u._p && (h.instance = u, h.state.loading = 5), _t.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, _t.set(e, n), u || ay(a, e, n, h.state))), t && l === null) throw Error(o(528, ""));
                    return h
                }
                if (t && l !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ll(n), n = Fn(a).hoistableScripts, l = n.get(t), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, e))
        }
    }

    function Ml(e) {
        return 'href="' + mt(e) + '"'
    }

    function Aa(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Id(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function ay(e, t, n, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
            return l.loading |= 1
        }), t.addEventListener("error", function() {
            return l.loading |= 2
        }), ke(t, "link", n), Ye(t), e.head.appendChild(t))
    }

    function Ll(e) {
        return '[src="' + mt(e) + '"]'
    }

    function Ta(e) {
        return "script[async]" + e
    }

    function eh(e, t, n) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
                if (l) return t.instance = l, Ye(l), l;
                var a = v({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"), Ye(l), ke(l, "style", a), Pi(l, n.precedence, e), t.instance = l;
            case "stylesheet":
                a = Ml(n.href);
                var u = e.querySelector(Aa(a));
                if (u) return t.state.loading |= 4, t.instance = u, Ye(u), u;
                l = Id(n), (a = _t.get(a)) && zs(l, a), u = (e.ownerDocument || e).createElement("link"), Ye(u);
                var h = u;
                return h._p = new Promise(function(y, E) {
                    h.onload = y, h.onerror = E
                }), ke(u, "link", l), t.state.loading |= 4, Pi(u, n.precedence, e), t.instance = u;
            case "script":
                return u = Ll(n.src), (a = e.querySelector(Ta(u))) ? (t.instance = a, Ye(a), a) : (l = n, (a = _t.get(u)) && (l = v({}, n), Ns(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ye(a), ke(a, "link", l), e.head.appendChild(a), t.instance = a);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Pi(l, n.precedence, e));
        return t.instance
    }

    function Pi(e, t, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = l.length ? l[l.length - 1] : null, u = a, h = 0; h < l.length; h++) {
            var y = l[h];
            if (y.dataset.precedence === t) u = y;
            else if (u !== a) break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
    }

    function zs(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Ns(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Ii = null;

    function th(e, t, n) {
        if (Ii === null) {
            var l = new Map,
                a = Ii = new Map;
            a.set(n, l)
        } else a = Ii, l = a.get(n), l || (l = new Map, a.set(n, l));
        if (l.has(e)) return l;
        for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var u = n[a];
            if (!(u[Gl] || u[$e] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var h = u.getAttribute(t) || "";
                h = e + h;
                var y = l.get(h);
                y ? y.push(u) : l.set(h, [u])
            }
        }
        return l
    }

    function nh(e, t, n) {
        e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }

    function iy(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function lh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Ca = null;

    function uy() {}

    function ry(e, t, n) {
        if (Ca === null) throw Error(o(475));
        var l = Ca;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var a = Ml(n.href),
                    u = e.querySelector(Aa(a));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = eu.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = u, Ye(u);
                    return
                }
                u = e.ownerDocument || e, n = Id(n), (a = _t.get(a)) && zs(n, a), u = u.createElement("link"), Ye(u);
                var h = u;
                h._p = new Promise(function(y, E) {
                    h.onload = y, h.onerror = E
                }), ke(u, "link", n), t.instance = u
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = eu.bind(l), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function sy() {
        if (Ca === null) throw Error(o(475));
        var e = Ca;
        return e.stylesheets && e.count === 0 && Us(e, e.stylesheets), 0 < e.count ? function(t) {
            var n = setTimeout(function() {
                if (e.stylesheets && Us(e, e.stylesheets), e.unsuspend) {
                    var l = e.unsuspend;
                    e.unsuspend = null, l()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(n)
                }
        } : null
    }

    function eu() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Us(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var tu = null;

    function Us(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, tu = new Map, t.forEach(oy, e), tu = null, eu.call(e))
    }

    function oy(e, t) {
        if (!(t.state.loading & 4)) {
            var n = tu.get(e);
            if (n) var l = n.get(null);
            else {
                n = new Map, tu.set(e, n);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < a.length; u++) {
                    var h = a[u];
                    (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), l = h)
                }
                l && n.set(null, l)
            }
            a = t.instance, h = a.getAttribute("data-precedence"), u = n.get(h) || l, u === l && n.set(null, a), n.set(h, a), this.count++, l = eu.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4
        }
    }
    var wa = {
        $$typeof: V,
        Provider: null,
        Consumer: null,
        _currentValue: P,
        _currentValue2: P,
        _threadCount: 0
    };

    function cy(e, t, n, l, a, u, h, y) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lu(0), this.hiddenUpdates = Lu(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map
    }

    function ah(e, t, n, l, a, u, h, y, E, w, H, q) {
        return e = new cy(e, t, n, h, y, E, w, q), t = 1, u === !0 && (t |= 24), u = st(3, null, null, t), e.current = u, u.stateNode = e, t = pr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: t
        }, br(u), e
    }

    function ih(e) {
        return e ? (e = sl, e) : sl
    }

    function uh(e, t, n, l, a, u) {
        a = ih(a), l.context === null ? l.context = a : l.pendingContext = a, l = sn(t), l.payload = {
            element: n
        }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = on(e, l, t), n !== null && (ht(n, e, t), ia(n, e, t))
    }

    function rh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Hs(e, t) {
        rh(e, t), (e = e.alternate) && rh(e, t)
    }

    function sh(e) {
        if (e.tag === 13) {
            var t = rl(e, 67108864);
            t !== null && ht(t, e, 67108864), Hs(e, 67108864)
        }
    }
    var nu = !0;

    function fy(e, t, n, l) {
        var a = U.T;
        U.T = null;
        var u = X.p;
        try {
            X.p = 2, Bs(e, t, n, l)
        } finally {
            X.p = u, U.T = a
        }
    }

    function dy(e, t, n, l) {
        var a = U.T;
        U.T = null;
        var u = X.p;
        try {
            X.p = 8, Bs(e, t, n, l)
        } finally {
            X.p = u, U.T = a
        }
    }

    function Bs(e, t, n, l) {
        if (nu) {
            var a = js(l);
            if (a === null) xs(e, t, l, lu, n), ch(e, l);
            else if (gy(a, e, t, n, l)) l.stopPropagation();
            else if (ch(e, l), t & 4 && -1 < hy.indexOf(e)) {
                for (; a !== null;) {
                    var u = Jn(a);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var h = Tn(u.pendingLanes);
                                if (h !== 0) {
                                    var y = u;
                                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; h;) {
                                        var E = 1 << 31 - ut(h);
                                        y.entanglements[1] |= E, h &= ~E
                                    }
                                    Dt(u), (_e & 6) === 0 && (Gi = Tt() + 500, _a(0))
                                }
                            }
                            break;
                        case 13:
                            y = rl(u, 2), y !== null && ht(y, u, 2), Vi(), Hs(u, 2)
                    }
                    if (u = js(l), u === null && xs(e, t, l, lu, n), u === a) break;
                    a = u
                }
                a !== null && l.stopPropagation()
            } else xs(e, t, l, null, n)
        }
    }

    function js(e) {
        return e = Qu(e), qs(e)
    }
    var lu = null;

    function qs(e) {
        if (lu = null, e = $n(e), e !== null) {
            var t = f(e);
            if (t === null) e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = d(t), e !== null) return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return lu = e, null
    }

    function oh(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Pg()) {
                    case _o:
                        return 2;
                    case Oo:
                        return 8;
                    case Ja:
                    case Ig:
                        return 32;
                    case xo:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Gs = !1,
        _n = null,
        On = null,
        xn = null,
        Ma = new Map,
        La = new Map,
        Rn = [],
        hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function ch(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                _n = null;
                break;
            case "dragenter":
            case "dragleave":
                On = null;
                break;
            case "mouseover":
            case "mouseout":
                xn = null;
                break;
            case "pointerover":
            case "pointerout":
                Ma.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                La.delete(t.pointerId)
        }
    }

    function Da(e, t, n, l, a, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [a]
        }, t !== null && (t = Jn(t), t !== null && sh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e)
    }

    function gy(e, t, n, l, a) {
        switch (t) {
            case "focusin":
                return _n = Da(_n, e, t, n, l, a), !0;
            case "dragenter":
                return On = Da(On, e, t, n, l, a), !0;
            case "mouseover":
                return xn = Da(xn, e, t, n, l, a), !0;
            case "pointerover":
                var u = a.pointerId;
                return Ma.set(u, Da(Ma.get(u) || null, e, t, n, l, a)), !0;
            case "gotpointercapture":
                return u = a.pointerId, La.set(u, Da(La.get(u) || null, e, t, n, l, a)), !0
        }
        return !1
    }

    function fh(e) {
        var t = $n(e.target);
        if (t !== null) {
            var n = f(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = d(n), t !== null) {
                        e.blockedOn = t, rm(e.priority, function() {
                            if (n.tag === 13) {
                                var l = dt();
                                l = Du(l);
                                var a = rl(n, l);
                                a !== null && ht(a, n, l), Hs(n, l)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function au(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = js(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var l = new n.constructor(n.type, n);
                Vu = l, n.target.dispatchEvent(l), Vu = null
            } else return t = Jn(n), t !== null && sh(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function dh(e, t, n) {
        au(e) && n.delete(t)
    }

    function my() {
        Gs = !1, _n !== null && au(_n) && (_n = null), On !== null && au(On) && (On = null), xn !== null && au(xn) && (xn = null), Ma.forEach(dh), La.forEach(dh)
    }

    function iu(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Gs || (Gs = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, my)))
    }
    var uu = null;

    function hh(e) {
        uu !== e && (uu = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
            uu === e && (uu = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    l = e[t + 1],
                    a = e[t + 2];
                if (typeof l != "function") {
                    if (qs(l || n) === null) continue;
                    break
                }
                var u = Jn(n);
                u !== null && (e.splice(t, 3), t -= 3, qr(u, {
                    pending: !0,
                    data: a,
                    method: n.method,
                    action: l
                }, l, a))
            }
        }))
    }

    function za(e) {
        function t(E) {
            return iu(E, e)
        }
        _n !== null && iu(_n, e), On !== null && iu(On, e), xn !== null && iu(xn, e), Ma.forEach(t), La.forEach(t);
        for (var n = 0; n < Rn.length; n++) {
            var l = Rn[n];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < Rn.length && (n = Rn[0], n.blockedOn === null);) fh(n), n.blockedOn === null && Rn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (l = 0; l < n.length; l += 3) {
                var a = n[l],
                    u = n[l + 1],
                    h = a[Ie] || null;
                if (typeof u == "function") h || hh(n);
                else if (h) {
                    var y = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (a = u, h = u[Ie] || null) y = h.formAction;
                        else if (qs(a) !== null) continue
                    } else y = h.action;
                    typeof y == "function" ? n[l + 1] = y : (n.splice(l, 3), l -= 3), hh(n)
                }
            }
    }

    function Ys(e) {
        this._internalRoot = e
    }
    ru.prototype.render = Ys.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(o(409));
        var n = t.current,
            l = dt();
        uh(n, l, e, t, null, null)
    }, ru.prototype.unmount = Ys.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            uh(e.current, 2, null, e, null, null), Vi(), t[kn] = null
        }
    };

    function ru(e) {
        this._internalRoot = e
    }
    ru.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = wo();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Rn.length && t !== 0 && t < Rn[n].priority; n++);
            Rn.splice(n, 0, e), n === 0 && fh(e)
        }
    };
    var gh = i.version;
    if (gh !== "19.1.1") throw Error(o(527, gh, "19.1.1"));
    X.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
        return e = p(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e
    };
    var py = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: U,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!su.isDisabled && su.supportsFiber) try {
            Bl = su.inject(py), it = su
        } catch {}
    }
    return ja.createRoot = function(e, t) {
        if (!c(e)) throw Error(o(299));
        var n = !1,
            l = "",
            a = Mf,
            u = Lf,
            h = Df,
            y = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (h = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = ah(e, 1, !1, null, null, n, l, a, u, h, y, null), e[kn] = t.current, Os(e), new Ys(t)
    }, ja.hydrateRoot = function(e, t, n) {
        if (!c(e)) throw Error(o(299));
        var l = !1,
            a = "",
            u = Mf,
            h = Lf,
            y = Df,
            E = null,
            w = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (E = n.unstable_transitionCallbacks), n.formState !== void 0 && (w = n.formState)), t = ah(e, 1, !0, t, n ? ? null, l, a, u, h, y, E, w), t.context = ih(null), n = t.current, l = dt(), l = Du(l), a = sn(l), a.callback = null, on(n, a, l), n = l, t.current.lanes = n, ql(t, n), Dt(t), e[kn] = t.current, Os(e), new ru(t)
    }, ja.version = "19.1.1", ja
}
var rg;

function Pv() {
    if (rg) return no.exports;
    rg = 1;

    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (i) {
            console.error(i)
        }
    }
    return r(), no.exports = Wv(), no.exports
}
var Iv = Pv();
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var sg = "popstate";

function e0(r = {}) {
    function i(o, c) {
        let {
            pathname: f,
            search: d,
            hash: m
        } = o.location;
        return ho("", {
            pathname: f,
            search: d,
            hash: m
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }

    function s(o, c) {
        return typeof c == "string" ? c : Xa(c)
    }
    return n0(i, s, null, r)
}

function Ge(r, i) {
    if (r === !1 || r === null || typeof r > "u") throw new Error(i)
}

function Nt(r, i) {
    if (!r) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}

function t0() {
    return Math.random().toString(36).substring(2, 10)
}

function og(r, i) {
    return {
        usr: r.state,
        key: r.key,
        idx: i
    }
}

function ho(r, i, s = null, o) {
    return {
        pathname: typeof r == "string" ? r : r.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? Za(i) : i,
        state: s,
        key: i && i.key || o || t0()
    }
}

function Xa({
    pathname: r = "/",
    search: i = "",
    hash: s = ""
}) {
    return i && i !== "?" && (r += i.charAt(0) === "?" ? i : "?" + i), s && s !== "#" && (r += s.charAt(0) === "#" ? s : "#" + s), r
}

function Za(r) {
    let i = {};
    if (r) {
        let s = r.indexOf("#");
        s >= 0 && (i.hash = r.substring(s), r = r.substring(0, s));
        let o = r.indexOf("?");
        o >= 0 && (i.search = r.substring(o), r = r.substring(0, o)), r && (i.pathname = r)
    }
    return i
}

function n0(r, i, s, o = {}) {
    let {
        window: c = document.defaultView,
        v5Compat: f = !1
    } = o, d = c.history, m = "POP", p = null, g = v();
    g == null && (g = 0, d.replaceState({ ...d.state,
        idx: g
    }, ""));

    function v() {
        return (d.state || {
            idx: null
        }).idx
    }

    function S() {
        m = "POP";
        let R = v(),
            z = R == null ? null : R - g;
        g = R, p && p({
            action: m,
            location: M.location,
            delta: z
        })
    }

    function b(R, z) {
        m = "PUSH";
        let N = ho(M.location, R, z);
        g = v() + 1;
        let V = og(N, g),
            F = M.createHref(N);
        try {
            d.pushState(V, "", F)
        } catch (Q) {
            if (Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
            c.location.assign(F)
        }
        f && p && p({
            action: m,
            location: M.location,
            delta: 1
        })
    }

    function _(R, z) {
        m = "REPLACE";
        let N = ho(M.location, R, z);
        g = v();
        let V = og(N, g),
            F = M.createHref(N);
        d.replaceState(V, "", F), f && p && p({
            action: m,
            location: M.location,
            delta: 0
        })
    }

    function O(R) {
        return l0(R)
    }
    let M = {
        get action() {
            return m
        },
        get location() {
            return r(c, d)
        },
        listen(R) {
            if (p) throw new Error("A history only accepts one active listener");
            return c.addEventListener(sg, S), p = R, () => {
                c.removeEventListener(sg, S), p = null
            }
        },
        createHref(R) {
            return i(c, R)
        },
        createURL: O,
        encodeLocation(R) {
            let z = O(R);
            return {
                pathname: z.pathname,
                search: z.search,
                hash: z.hash
            }
        },
        push: b,
        replace: _,
        go(R) {
            return d.go(R)
        }
    };
    return M
}

function l0(r, i = !1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Ge(s, "No window.location.(origin|href) available to create URL");
    let o = typeof r == "string" ? r : Xa(r);
    return o = o.replace(/ $/, "%20"), !i && o.startsWith("//") && (o = s + o), new URL(o, s)
}

function wg(r, i, s = "/") {
    return a0(r, i, s, !1)
}

function a0(r, i, s, o) {
    let c = typeof i == "string" ? Za(i) : i,
        f = It(c.pathname || "/", s);
    if (f == null) return null;
    let d = Mg(r);
    i0(d);
    let m = null;
    for (let p = 0; m == null && p < d.length; ++p) {
        let g = p0(f);
        m = g0(d[p], g, o)
    }
    return m
}

function Mg(r, i = [], s = [], o = "", c = !1) {
    let f = (d, m, p = c, g) => {
        let v = {
            relativePath: g === void 0 ? d.path || "" : g,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: m,
            route: d
        };
        if (v.relativePath.startsWith("/")) {
            if (!v.relativePath.startsWith(o) && p) return;
            Ge(v.relativePath.startsWith(o), `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), v.relativePath = v.relativePath.slice(o.length)
        }
        let S = Pt([o, v.relativePath]),
            b = s.concat(v);
        d.children && d.children.length > 0 && (Ge(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${S}".`), Mg(d.children, i, b, S, p)), !(d.path == null && !d.index) && i.push({
            path: S,
            score: d0(S, d.index),
            routesMeta: b
        })
    };
    return r.forEach((d, m) => {
        if (d.path === "" || !d.path ? .includes("?")) f(d, m);
        else
            for (let p of Lg(d.path)) f(d, m, !0, p)
    }), i
}

function Lg(r) {
    let i = r.split("/");
    if (i.length === 0) return [];
    let [s, ...o] = i, c = s.endsWith("?"), f = s.replace(/\?$/, "");
    if (o.length === 0) return c ? [f, ""] : [f];
    let d = Lg(o.join("/")),
        m = [];
    return m.push(...d.map(p => p === "" ? f : [f, p].join("/"))), c && m.push(...d), m.map(p => r.startsWith("/") && p === "" ? "/" : p)
}

function i0(r) {
    r.sort((i, s) => i.score !== s.score ? s.score - i.score : h0(i.routesMeta.map(o => o.childrenIndex), s.routesMeta.map(o => o.childrenIndex)))
}
var u0 = /^:[\w-]+$/,
    r0 = 3,
    s0 = 2,
    o0 = 1,
    c0 = 10,
    f0 = -2,
    cg = r => r === "*";

function d0(r, i) {
    let s = r.split("/"),
        o = s.length;
    return s.some(cg) && (o += f0), i && (o += s0), s.filter(c => !cg(c)).reduce((c, f) => c + (u0.test(f) ? r0 : f === "" ? o0 : c0), o)
}

function h0(r, i) {
    return r.length === i.length && r.slice(0, -1).every((o, c) => o === i[c]) ? r[r.length - 1] - i[i.length - 1] : 0
}

function g0(r, i, s = !1) {
    let {
        routesMeta: o
    } = r, c = {}, f = "/", d = [];
    for (let m = 0; m < o.length; ++m) {
        let p = o[m],
            g = m === o.length - 1,
            v = f === "/" ? i : i.slice(f.length) || "/",
            S = bu({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: g
            }, v),
            b = p.route;
        if (!S && g && s && !o[o.length - 1].route.index && (S = bu({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, v)), !S) return null;
        Object.assign(c, S.params), d.push({
            params: c,
            pathname: Pt([f, S.pathname]),
            pathnameBase: b0(Pt([f, S.pathnameBase])),
            route: b
        }), S.pathnameBase !== "/" && (f = Pt([f, S.pathnameBase]))
    }
    return d
}

function bu(r, i) {
    typeof r == "string" && (r = {
        path: r,
        caseSensitive: !1,
        end: !0
    });
    let [s, o] = m0(r.path, r.caseSensitive, r.end), c = i.match(s);
    if (!c) return null;
    let f = c[0],
        d = f.replace(/(.)\/+$/, "$1"),
        m = c.slice(1);
    return {
        params: o.reduce((g, {
            paramName: v,
            isOptional: S
        }, b) => {
            if (v === "*") {
                let O = m[b] || "";
                d = f.slice(0, f.length - O.length).replace(/(.)\/+$/, "$1")
            }
            const _ = m[b];
            return S && !_ ? g[v] = void 0 : g[v] = (_ || "").replace(/%2F/g, "/"), g
        }, {}),
        pathname: f,
        pathnameBase: d,
        pattern: r
    }
}

function m0(r, i = !1, s = !0) {
    Nt(r === "*" || !r.endsWith("*") || r.endsWith("/*"), `Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);
    let o = [],
        c = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, p) => (o.push({
            paramName: m,
            isOptional: p != null
        }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return r.endsWith("*") ? (o.push({
        paramName: "*"
    }), c += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : r !== "" && r !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, i ? void 0 : "i"), o]
}

function p0(r) {
    try {
        return r.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return Nt(!1, `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), r
    }
}

function It(r, i) {
    if (i === "/") return r;
    if (!r.toLowerCase().startsWith(i.toLowerCase())) return null;
    let s = i.endsWith("/") ? i.length - 1 : i.length,
        o = r.charAt(s);
    return o && o !== "/" ? null : r.slice(s) || "/"
}

function y0(r, i = "/") {
    let {
        pathname: s,
        search: o = "",
        hash: c = ""
    } = typeof r == "string" ? Za(r) : r;
    return {
        pathname: s ? s.startsWith("/") ? s : v0(s, i) : i,
        search: E0(o),
        hash: _0(c)
    }
}

function v0(r, i) {
    let s = i.replace(/\/+$/, "").split("/");
    return r.split("/").forEach(c => {
        c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c)
    }), s.length > 1 ? s.join("/") : "/"
}

function uo(r, i, s, o) {
    return `Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function S0(r) {
    return r.filter((i, s) => s === 0 || i.route.path && i.route.path.length > 0)
}

function Dg(r) {
    let i = S0(r);
    return i.map((s, o) => o === i.length - 1 ? s.pathname : s.pathnameBase)
}

function zg(r, i, s, o = !1) {
    let c;
    typeof r == "string" ? c = Za(r) : (c = { ...r
    }, Ge(!c.pathname || !c.pathname.includes("?"), uo("?", "pathname", "search", c)), Ge(!c.pathname || !c.pathname.includes("#"), uo("#", "pathname", "hash", c)), Ge(!c.search || !c.search.includes("#"), uo("#", "search", "hash", c)));
    let f = r === "" || c.pathname === "",
        d = f ? "/" : c.pathname,
        m;
    if (d == null) m = s;
    else {
        let S = i.length - 1;
        if (!o && d.startsWith("..")) {
            let b = d.split("/");
            for (; b[0] === "..";) b.shift(), S -= 1;
            c.pathname = b.join("/")
        }
        m = S >= 0 ? i[S] : "/"
    }
    let p = y0(c, m),
        g = d && d !== "/" && d.endsWith("/"),
        v = (f || d === ".") && s.endsWith("/");
    return !p.pathname.endsWith("/") && (g || v) && (p.pathname += "/"), p
}
var Pt = r => r.join("/").replace(/\/\/+/g, "/"),
    b0 = r => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
    E0 = r => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r,
    _0 = r => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r;

function O0(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r
}
var Ng = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ng);
var x0 = ["GET", ...Ng];
new Set(x0);
var Hl = G.createContext(null);
Hl.displayName = "DataRouter";
var xu = G.createContext(null);
xu.displayName = "DataRouterState";
G.createContext(!1);
var Ug = G.createContext({
    isTransitioning: !1
});
Ug.displayName = "ViewTransition";
var R0 = G.createContext(new Map);
R0.displayName = "Fetchers";
var A0 = G.createContext(null);
A0.displayName = "Await";
var Ut = G.createContext(null);
Ut.displayName = "Navigation";
var Ru = G.createContext(null);
Ru.displayName = "Location";
var en = G.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
en.displayName = "Route";
var yo = G.createContext(null);
yo.displayName = "RouteError";

function T0(r, {
    relative: i
} = {}) {
    Ge(Ka(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: s,
        navigator: o
    } = G.useContext(Ut), {
        hash: c,
        pathname: f,
        search: d
    } = ka(r, {
        relative: i
    }), m = f;
    return s !== "/" && (m = f === "/" ? s : Pt([s, f])), o.createHref({
        pathname: m,
        search: d,
        hash: c
    })
}

function Ka() {
    return G.useContext(Ru) != null
}

function Kn() {
    return Ge(Ka(), "useLocation() may be used only in the context of a <Router> component."), G.useContext(Ru).location
}
var Hg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Bg(r) {
    G.useContext(Ut).static || G.useLayoutEffect(r)
}

function jg() {
    let {
        isDataRoute: r
    } = G.useContext(en);
    return r ? G0() : C0()
}

function C0() {
    Ge(Ka(), "useNavigate() may be used only in the context of a <Router> component.");
    let r = G.useContext(Hl),
        {
            basename: i,
            navigator: s
        } = G.useContext(Ut),
        {
            matches: o
        } = G.useContext(en),
        {
            pathname: c
        } = Kn(),
        f = JSON.stringify(Dg(o)),
        d = G.useRef(!1);
    return Bg(() => {
        d.current = !0
    }), G.useCallback((p, g = {}) => {
        if (Nt(d.current, Hg), !d.current) return;
        if (typeof p == "number") {
            s.go(p);
            return
        }
        let v = zg(p, JSON.parse(f), c, g.relative === "path");
        r == null && i !== "/" && (v.pathname = v.pathname === "/" ? i : Pt([i, v.pathname])), (g.replace ? s.replace : s.push)(v, g.state, g)
    }, [i, s, f, c, r])
}
G.createContext(null);

function ka(r, {
    relative: i
} = {}) {
    let {
        matches: s
    } = G.useContext(en), {
        pathname: o
    } = Kn(), c = JSON.stringify(Dg(s));
    return G.useMemo(() => zg(r, JSON.parse(c), o, i === "path"), [r, c, o, i])
}

function w0(r, i) {
    return qg(r)
}

function qg(r, i, s, o, c) {
    Ge(Ka(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: f
    } = G.useContext(Ut), {
        matches: d
    } = G.useContext(en), m = d[d.length - 1], p = m ? m.params : {}, g = m ? m.pathname : "/", v = m ? m.pathnameBase : "/", S = m && m.route; {
        let N = S && S.path || "";
        Gg(g, !S || N.endsWith("*") || N.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)
    }
    let b = Kn(),
        _;
    _ = b;
    let O = _.pathname || "/",
        M = O;
    if (v !== "/") {
        let N = v.replace(/^\//, "").split("/");
        M = "/" + O.replace(/^\//, "").split("/").slice(N.length).join("/")
    }
    let R = wg(r, {
        pathname: M
    });
    return Nt(S || R != null, `No routes matched location "${_.pathname}${_.search}${_.hash}" `), Nt(R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0, `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`), N0(R && R.map(N => Object.assign({}, N, {
        params: Object.assign({}, p, N.params),
        pathname: Pt([v, f.encodeLocation ? f.encodeLocation(N.pathname).pathname : N.pathname]),
        pathnameBase: N.pathnameBase === "/" ? v : Pt([v, f.encodeLocation ? f.encodeLocation(N.pathnameBase).pathname : N.pathnameBase])
    })), d, s, o, c)
}

function M0() {
    let r = q0(),
        i = O0(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r),
        s = r instanceof Error ? r.stack : null,
        o = "rgba(200,200,200, 0.5)",
        c = {
            padding: "0.5rem",
            backgroundColor: o
        },
        f = {
            padding: "2px 4px",
            backgroundColor: o
        },
        d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", r), d = G.createElement(G.Fragment, null, G.createElement("p", null, "💿 Hey developer 👋"), G.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", G.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", G.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")), G.createElement(G.Fragment, null, G.createElement("h2", null, "Unexpected Application Error!"), G.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), s ? G.createElement("pre", {
        style: c
    }, s) : null, d)
}
var L0 = G.createElement(M0, null),
    D0 = class extends G.Component {
        constructor(r) {
            super(r), this.state = {
                location: r.location,
                revalidation: r.revalidation,
                error: r.error
            }
        }
        static getDerivedStateFromError(r) {
            return {
                error: r
            }
        }
        static getDerivedStateFromProps(r, i) {
            return i.location !== r.location || i.revalidation !== "idle" && r.revalidation === "idle" ? {
                error: r.error,
                location: r.location,
                revalidation: r.revalidation
            } : {
                error: r.error !== void 0 ? r.error : i.error,
                location: i.location,
                revalidation: r.revalidation || i.revalidation
            }
        }
        componentDidCatch(r, i) {
            this.props.unstable_onError ? this.props.unstable_onError(r, i) : console.error("React Router caught the following error during render", r)
        }
        render() {
            return this.state.error !== void 0 ? G.createElement(en.Provider, {
                value: this.props.routeContext
            }, G.createElement(yo.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function z0({
    routeContext: r,
    match: i,
    children: s
}) {
    let o = G.useContext(Hl);
    return o && o.static && o.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = i.route.id), G.createElement(en.Provider, {
        value: r
    }, s)
}

function N0(r, i = [], s = null, o = null, c = null) {
    if (r == null) {
        if (!s) return null;
        if (s.errors) r = s.matches;
        else if (i.length === 0 && !s.initialized && s.matches.length > 0) r = s.matches;
        else return null
    }
    let f = r,
        d = s ? .errors;
    if (d != null) {
        let g = f.findIndex(v => v.route.id && d ? .[v.route.id] !== void 0);
        Ge(g >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`), f = f.slice(0, Math.min(f.length, g + 1))
    }
    let m = !1,
        p = -1;
    if (s)
        for (let g = 0; g < f.length; g++) {
            let v = f[g];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = g), v.route.id) {
                let {
                    loaderData: S,
                    errors: b
                } = s, _ = v.route.loader && !S.hasOwnProperty(v.route.id) && (!b || b[v.route.id] === void 0);
                if (v.route.lazy || _) {
                    m = !0, p >= 0 ? f = f.slice(0, p + 1) : f = [f[0]];
                    break
                }
            }
        }
    return f.reduceRight((g, v, S) => {
        let b, _ = !1,
            O = null,
            M = null;
        s && (b = d && v.route.id ? d[v.route.id] : void 0, O = v.route.errorElement || L0, m && (p < 0 && S === 0 ? (Gg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), _ = !0, M = null) : p === S && (_ = !0, M = v.route.hydrateFallbackElement || null)));
        let R = i.concat(f.slice(0, S + 1)),
            z = () => {
                let N;
                return b ? N = O : _ ? N = M : v.route.Component ? N = G.createElement(v.route.Component, null) : v.route.element ? N = v.route.element : N = g, G.createElement(z0, {
                    match: v,
                    routeContext: {
                        outlet: g,
                        matches: R,
                        isDataRoute: s != null
                    },
                    children: N
                })
            };
        return s && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? G.createElement(D0, {
            location: s.location,
            revalidation: s.revalidation,
            component: O,
            error: b,
            children: z(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            },
            unstable_onError: o
        }) : z()
    }, null)
}

function vo(r) {
    return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function U0(r) {
    let i = G.useContext(Hl);
    return Ge(i, vo(r)), i
}

function H0(r) {
    let i = G.useContext(xu);
    return Ge(i, vo(r)), i
}

function B0(r) {
    let i = G.useContext(en);
    return Ge(i, vo(r)), i
}

function So(r) {
    let i = B0(r),
        s = i.matches[i.matches.length - 1];
    return Ge(s.route.id, `${r} can only be used on routes that contain a unique "id"`), s.route.id
}

function j0() {
    return So("useRouteId")
}

function q0() {
    let r = G.useContext(yo),
        i = H0("useRouteError"),
        s = So("useRouteError");
    return r !== void 0 ? r : i.errors ? .[s]
}

function G0() {
    let {
        router: r
    } = U0("useNavigate"), i = So("useNavigate"), s = G.useRef(!1);
    return Bg(() => {
        s.current = !0
    }), G.useCallback(async (c, f = {}) => {
        Nt(s.current, Hg), s.current && (typeof c == "number" ? r.navigate(c) : await r.navigate(c, {
            fromRouteId: i,
            ...f
        }))
    }, [r, i])
}
var fg = {};

function Gg(r, i, s) {
    !i && !fg[r] && (fg[r] = !0, Nt(!1, s))
}
G.memo(Y0);

function Y0({
    routes: r,
    future: i,
    state: s,
    unstable_onError: o
}) {
    return qg(r, void 0, s, o, i)
}

function V0({
    basename: r = "/",
    children: i = null,
    location: s,
    navigationType: o = "POP",
    navigator: c,
    static: f = !1
}) {
    Ge(!Ka(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = r.replace(/^\/*/, "/"),
        m = G.useMemo(() => ({
            basename: d,
            navigator: c,
            static: f,
            future: {}
        }), [d, c, f]);
    typeof s == "string" && (s = Za(s));
    let {
        pathname: p = "/",
        search: g = "",
        hash: v = "",
        state: S = null,
        key: b = "default"
    } = s, _ = G.useMemo(() => {
        let O = It(p, d);
        return O == null ? null : {
            location: {
                pathname: O,
                search: g,
                hash: v,
                state: S,
                key: b
            },
            navigationType: o
        }
    }, [d, p, g, v, S, b, o]);
    return Nt(_ != null, `<Router basename="${d}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`), _ == null ? null : G.createElement(Ut.Provider, {
        value: m
    }, G.createElement(Ru.Provider, {
        children: i,
        value: _
    }))
}
var gu = "get",
    mu = "application/x-www-form-urlencoded";

function Au(r) {
    return r != null && typeof r.tagName == "string"
}

function Q0(r) {
    return Au(r) && r.tagName.toLowerCase() === "button"
}

function X0(r) {
    return Au(r) && r.tagName.toLowerCase() === "form"
}

function Z0(r) {
    return Au(r) && r.tagName.toLowerCase() === "input"
}

function K0(r) {
    return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)
}

function k0(r, i) {
    return r.button === 0 && (!i || i === "_self") && !K0(r)
}
var hu = null;

function $0() {
    if (hu === null) try {
        new FormData(document.createElement("form"), 0), hu = !1
    } catch {
        hu = !0
    }
    return hu
}
var J0 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function ro(r) {
    return r != null && !J0.has(r) ? (Nt(!1, `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`), null) : r
}

function F0(r, i) {
    let s, o, c, f, d;
    if (X0(r)) {
        let m = r.getAttribute("action");
        o = m ? It(m, i) : null, s = r.getAttribute("method") || gu, c = ro(r.getAttribute("enctype")) || mu, f = new FormData(r)
    } else if (Q0(r) || Z0(r) && (r.type === "submit" || r.type === "image")) {
        let m = r.form;
        if (m == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = r.getAttribute("formaction") || m.getAttribute("action");
        if (o = p ? It(p, i) : null, s = r.getAttribute("formmethod") || m.getAttribute("method") || gu, c = ro(r.getAttribute("formenctype")) || ro(m.getAttribute("enctype")) || mu, f = new FormData(m, r), !$0()) {
            let {
                name: g,
                type: v,
                value: S
            } = r;
            if (v === "image") {
                let b = g ? `${g}.` : "";
                f.append(`${b}x`, "0"), f.append(`${b}y`, "0")
            } else g && f.append(g, S)
        }
    } else {
        if (Au(r)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = gu, o = null, c = mu, d = r
    }
    return f && c === "text/plain" && (d = f, f = void 0), {
        action: o,
        method: s.toLowerCase(),
        encType: c,
        formData: f,
        body: d
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function bo(r, i) {
    if (r === !1 || r === null || typeof r > "u") throw new Error(i)
}

function W0(r, i, s) {
    let o = typeof r == "string" ? new URL(r, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : r;
    return o.pathname === "/" ? o.pathname = `_root.${s}` : i && It(o.pathname, i) === "/" ? o.pathname = `${i.replace(/\/$/,"")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/,"")}.${s}`, o
}
async function P0(r, i) {
    if (r.id in i) return i[r.id];
    try {
        let s = await
        import (r.module);
        return i[r.id] = s, s
    } catch (s) {
        return console.error(`Error loading route module \`${r.module}\`, reloading page...`), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function I0(r) {
    return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string"
}
async function e1(r, i, s) {
    let o = await Promise.all(r.map(async c => {
        let f = i.routes[c.route.id];
        if (f) {
            let d = await P0(f, s);
            return d.links ? d.links() : []
        }
        return []
    }));
    return a1(o.flat(1).filter(I0).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? { ...c,
        rel: "prefetch",
        as: "style"
    } : { ...c,
        rel: "prefetch"
    }))
}

function dg(r, i, s, o, c, f) {
    let d = (p, g) => s[g] ? p.route.id !== s[g].route.id : !0,
        m = (p, g) => s[g].pathname !== p.pathname || s[g].route.path ? .endsWith("*") && s[g].params["*"] !== p.params["*"];
    return f === "assets" ? i.filter((p, g) => d(p, g) || m(p, g)) : f === "data" ? i.filter((p, g) => {
        let v = o.routes[p.route.id];
        if (!v || !v.hasLoader) return !1;
        if (d(p, g) || m(p, g)) return !0;
        if (p.route.shouldRevalidate) {
            let S = p.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
                currentParams: s[0] ? .params || {},
                nextUrl: new URL(r, window.origin),
                nextParams: p.params,
                defaultShouldRevalidate: !0
            });
            if (typeof S == "boolean") return S
        }
        return !0
    }) : []
}

function t1(r, i, {
    includeHydrateFallback: s
} = {}) {
    return n1(r.map(o => {
        let c = i.routes[o.route.id];
        if (!c) return [];
        let f = [c.module];
        return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f
    }).flat(1))
}

function n1(r) {
    return [...new Set(r)]
}

function l1(r) {
    let i = {},
        s = Object.keys(r).sort();
    for (let o of s) i[o] = r[o];
    return i
}

function a1(r, i) {
    let s = new Set;
    return new Set(i), r.reduce((o, c) => {
        let f = JSON.stringify(l1(c));
        return s.has(f) || (s.add(f), o.push({
            key: f,
            link: c
        })), o
    }, [])
}

function Yg() {
    let r = G.useContext(Hl);
    return bo(r, "You must render this element inside a <DataRouterContext.Provider> element"), r
}

function i1() {
    let r = G.useContext(xu);
    return bo(r, "You must render this element inside a <DataRouterStateContext.Provider> element"), r
}
var Eo = G.createContext(void 0);
Eo.displayName = "FrameworkContext";

function Vg() {
    let r = G.useContext(Eo);
    return bo(r, "You must render this element inside a <HydratedRouter> element"), r
}

function u1(r, i) {
    let s = G.useContext(Eo),
        [o, c] = G.useState(!1),
        [f, d] = G.useState(!1),
        {
            onFocus: m,
            onBlur: p,
            onMouseEnter: g,
            onMouseLeave: v,
            onTouchStart: S
        } = i,
        b = G.useRef(null);
    G.useEffect(() => {
        if (r === "render" && d(!0), r === "viewport") {
            let M = z => {
                    z.forEach(N => {
                        d(N.isIntersecting)
                    })
                },
                R = new IntersectionObserver(M, {
                    threshold: .5
                });
            return b.current && R.observe(b.current), () => {
                R.disconnect()
            }
        }
    }, [r]), G.useEffect(() => {
        if (o) {
            let M = setTimeout(() => {
                d(!0)
            }, 100);
            return () => {
                clearTimeout(M)
            }
        }
    }, [o]);
    let _ = () => {
            c(!0)
        },
        O = () => {
            c(!1), d(!1)
        };
    return s ? r !== "intent" ? [f, b, {}] : [f, b, {
        onFocus: qa(m, _),
        onBlur: qa(p, O),
        onMouseEnter: qa(g, _),
        onMouseLeave: qa(v, O),
        onTouchStart: qa(S, _)
    }] : [!1, b, {}]
}

function qa(r, i) {
    return s => {
        r && r(s), s.defaultPrevented || i(s)
    }
}

function r1({
    page: r,
    ...i
}) {
    let {
        router: s
    } = Yg(), o = G.useMemo(() => wg(s.routes, r, s.basename), [s.routes, r, s.basename]);
    return o ? G.createElement(o1, {
        page: r,
        matches: o,
        ...i
    }) : null
}

function s1(r) {
    let {
        manifest: i,
        routeModules: s
    } = Vg(), [o, c] = G.useState([]);
    return G.useEffect(() => {
        let f = !1;
        return e1(r, i, s).then(d => {
            f || c(d)
        }), () => {
            f = !0
        }
    }, [r, i, s]), o
}

function o1({
    page: r,
    matches: i,
    ...s
}) {
    let o = Kn(),
        {
            manifest: c,
            routeModules: f
        } = Vg(),
        {
            basename: d
        } = Yg(),
        {
            loaderData: m,
            matches: p
        } = i1(),
        g = G.useMemo(() => dg(r, i, p, c, o, "data"), [r, i, p, c, o]),
        v = G.useMemo(() => dg(r, i, p, c, o, "assets"), [r, i, p, c, o]),
        S = G.useMemo(() => {
            if (r === o.pathname + o.search + o.hash) return [];
            let O = new Set,
                M = !1;
            if (i.forEach(z => {
                    let N = c.routes[z.route.id];
                    !N || !N.hasLoader || (!g.some(V => V.route.id === z.route.id) && z.route.id in m && f[z.route.id] ? .shouldRevalidate || N.hasClientLoader ? M = !0 : O.add(z.route.id))
                }), O.size === 0) return [];
            let R = W0(r, d, "data");
            return M && O.size > 0 && R.searchParams.set("_routes", i.filter(z => O.has(z.route.id)).map(z => z.route.id).join(",")), [R.pathname + R.search]
        }, [d, m, o, c, g, i, r, f]),
        b = G.useMemo(() => t1(v, c), [v, c]),
        _ = s1(v);
    return G.createElement(G.Fragment, null, S.map(O => G.createElement("link", {
        key: O,
        rel: "prefetch",
        as: "fetch",
        href: O,
        ...s
    })), b.map(O => G.createElement("link", {
        key: O,
        rel: "modulepreload",
        href: O,
        ...s
    })), _.map(({
        key: O,
        link: M
    }) => G.createElement("link", {
        key: O,
        nonce: s.nonce,
        ...M
    })))
}

function c1(...r) {
    return i => {
        r.forEach(s => {
            typeof s == "function" ? s(i) : s != null && (s.current = i)
        })
    }
}
var Qg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Qg && (window.__reactRouterVersion = "7.9.1")
} catch {}

function f1({
    basename: r,
    children: i,
    window: s
}) {
    let o = G.useRef();
    o.current == null && (o.current = e0({
        window: s,
        v5Compat: !0
    }));
    let c = o.current,
        [f, d] = G.useState({
            action: c.action,
            location: c.location
        }),
        m = G.useCallback(p => {
            G.startTransition(() => d(p))
        }, [d]);
    return G.useLayoutEffect(() => c.listen(m), [c, m]), G.createElement(V0, {
        basename: r,
        children: i,
        location: f.location,
        navigationType: f.action,
        navigator: c
    })
}
var Xg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Zg = G.forwardRef(function({
        onClick: i,
        discover: s = "render",
        prefetch: o = "none",
        relative: c,
        reloadDocument: f,
        replace: d,
        state: m,
        target: p,
        to: g,
        preventScrollReset: v,
        viewTransition: S,
        ...b
    }, _) {
        let {
            basename: O
        } = G.useContext(Ut), M = typeof g == "string" && Xg.test(g), R, z = !1;
        if (typeof g == "string" && M && (R = g, Qg)) try {
            let pe = new URL(window.location.href),
                Y = g.startsWith("//") ? new URL(pe.protocol + g) : new URL(g),
                Z = It(Y.pathname, O);
            Y.origin === pe.origin && Z != null ? g = Z + Y.search + Y.hash : z = !0
        } catch {
            Nt(!1, `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let N = T0(g, {
                relative: c
            }),
            [V, F, Q] = u1(o, b),
            ue = m1(g, {
                replace: d,
                state: m,
                target: p,
                preventScrollReset: v,
                relative: c,
                viewTransition: S
            });

        function me(pe) {
            i && i(pe), pe.defaultPrevented || ue(pe)
        }
        let Ee = G.createElement("a", { ...b,
            ...Q,
            href: R || N,
            onClick: z || f ? i : me,
            ref: c1(_, F),
            target: p,
            "data-discover": !M && s === "render" ? "true" : void 0
        });
        return V && !M ? G.createElement(G.Fragment, null, Ee, G.createElement(r1, {
            page: N
        })) : Ee
    });
Zg.displayName = "Link";
var d1 = G.forwardRef(function({
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: c = !1,
    style: f,
    to: d,
    viewTransition: m,
    children: p,
    ...g
}, v) {
    let S = ka(d, {
            relative: g.relative
        }),
        b = Kn(),
        _ = G.useContext(xu),
        {
            navigator: O,
            basename: M
        } = G.useContext(Ut),
        R = _ != null && b1(S) && m === !0,
        z = O.encodeLocation ? O.encodeLocation(S).pathname : S.pathname,
        N = b.pathname,
        V = _ && _.navigation && _.navigation.location ? _.navigation.location.pathname : null;
    s || (N = N.toLowerCase(), V = V ? V.toLowerCase() : null, z = z.toLowerCase()), V && M && (V = It(V, M) || V);
    const F = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
    let Q = N === z || !c && N.startsWith(z) && N.charAt(F) === "/",
        ue = V != null && (V === z || !c && V.startsWith(z) && V.charAt(z.length) === "/"),
        me = {
            isActive: Q,
            isPending: ue,
            isTransitioning: R
        },
        Ee = Q ? i : void 0,
        pe;
    typeof o == "function" ? pe = o(me) : pe = [o, Q ? "active" : null, ue ? "pending" : null, R ? "transitioning" : null].filter(Boolean).join(" ");
    let Y = typeof f == "function" ? f(me) : f;
    return G.createElement(Zg, { ...g,
        "aria-current": Ee,
        className: pe,
        ref: v,
        style: Y,
        to: d,
        viewTransition: m
    }, typeof p == "function" ? p(me) : p)
});
d1.displayName = "NavLink";
var h1 = G.forwardRef(({
    discover: r = "render",
    fetcherKey: i,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: f,
    method: d = gu,
    action: m,
    onSubmit: p,
    relative: g,
    preventScrollReset: v,
    viewTransition: S,
    ...b
}, _) => {
    let O = v1(),
        M = S1(m, {
            relative: g
        }),
        R = d.toLowerCase() === "get" ? "get" : "post",
        z = typeof m == "string" && Xg.test(m),
        N = V => {
            if (p && p(V), V.defaultPrevented) return;
            V.preventDefault();
            let F = V.nativeEvent.submitter,
                Q = F ? .getAttribute("formmethod") || d;
            O(F || V.currentTarget, {
                fetcherKey: i,
                method: Q,
                navigate: s,
                replace: c,
                state: f,
                relative: g,
                preventScrollReset: v,
                viewTransition: S
            })
        };
    return G.createElement("form", {
        ref: _,
        method: R,
        action: M,
        onSubmit: o ? p : N,
        ...b,
        "data-discover": !z && r === "render" ? "true" : void 0
    })
});
h1.displayName = "Form";

function g1(r) {
    return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Kg(r) {
    let i = G.useContext(Hl);
    return Ge(i, g1(r)), i
}

function m1(r, {
    target: i,
    replace: s,
    state: o,
    preventScrollReset: c,
    relative: f,
    viewTransition: d
} = {}) {
    let m = jg(),
        p = Kn(),
        g = ka(r, {
            relative: f
        });
    return G.useCallback(v => {
        if (k0(v, i)) {
            v.preventDefault();
            let S = s !== void 0 ? s : Xa(p) === Xa(g);
            m(r, {
                replace: S,
                state: o,
                preventScrollReset: c,
                relative: f,
                viewTransition: d
            })
        }
    }, [p, m, g, s, o, i, r, c, f, d])
}
var p1 = 0,
    y1 = () => `__${String(++p1)}__`;

function v1() {
    let {
        router: r
    } = Kg("useSubmit"), {
        basename: i
    } = G.useContext(Ut), s = j0();
    return G.useCallback(async (o, c = {}) => {
        let {
            action: f,
            method: d,
            encType: m,
            formData: p,
            body: g
        } = F0(o, i);
        if (c.navigate === !1) {
            let v = c.fetcherKey || y1();
            await r.fetch(v, s, c.action || f, {
                preventScrollReset: c.preventScrollReset,
                formData: p,
                body: g,
                formMethod: c.method || d,
                formEncType: c.encType || m,
                flushSync: c.flushSync
            })
        } else await r.navigate(c.action || f, {
            preventScrollReset: c.preventScrollReset,
            formData: p,
            body: g,
            formMethod: c.method || d,
            formEncType: c.encType || m,
            replace: c.replace,
            state: c.state,
            fromRouteId: s,
            flushSync: c.flushSync,
            viewTransition: c.viewTransition
        })
    }, [r, i, s])
}

function S1(r, {
    relative: i
} = {}) {
    let {
        basename: s
    } = G.useContext(Ut), o = G.useContext(en);
    Ge(o, "useFormAction must be used inside a RouteContext");
    let [c] = o.matches.slice(-1), f = { ...ka(r || ".", {
            relative: i
        })
    }, d = Kn();
    if (r == null) {
        f.search = d.search;
        let m = new URLSearchParams(f.search),
            p = m.getAll("index");
        if (p.some(v => v === "")) {
            m.delete("index"), p.filter(S => S).forEach(S => m.append("index", S));
            let v = m.toString();
            f.search = v ? `?${v}` : ""
        }
    }
    return (!r || r === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (f.pathname = f.pathname === "/" ? s : Pt([s, f.pathname])), Xa(f)
}

function b1(r, {
    relative: i
} = {}) {
    let s = G.useContext(Ug);
    Ge(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: o
    } = Kg("useViewTransitionState"), c = ka(r, {
        relative: i
    });
    if (!s.isTransitioning) return !1;
    let f = It(s.currentLocation.pathname, o) || s.currentLocation.pathname,
        d = It(s.nextLocation.pathname, o) || s.nextLocation.pathname;
    return bu(c.pathname, d) != null || bu(c.pathname, f) != null
}
const E1 = G.lazy(() => Zn(() =>
        import ("./page-BCL0Q32G.js"), __vite__mapDeps([0, 1, 2]))),
    _1 = G.lazy(() => Zn(() =>
        import ("./page-1voL5Y-x.js"), __vite__mapDeps([3, 1]))),
    O1 = G.lazy(() => Zn(() =>
        import ("./page-Dp8kkk1H.js"), __vite__mapDeps([4, 1, 2]))),
    x1 = G.lazy(() => Zn(() =>
        import ("./page-iClMR-88.js"), __vite__mapDeps([5, 1, 2]))),
    R1 = G.lazy(() => Zn(() =>
        import ("./NotFound-CibXR188.js"), [])),
    kg = [{
        path: "/",
        element: Wt.jsx(E1, {})
    }, {
        path: "/records",
        element: Wt.jsx(_1, {})
    }, {
        path: "/social",
        element: Wt.jsx(O1, {})
    }, {
        path: "/ranking",
        element: Wt.jsx(x1, {})
    }, {
        path: "*",
        element: Wt.jsx(R1, {})
    }],
    A1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: kg
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let $g;
const T1 = new Promise(r => {
    $g = r
});

function Jg() {
    const r = w0(kg);
    if (!window.REACT_APP_NAVIGATE) {
        const i = jg();
        G.useEffect(() => {
            window.REACT_APP_NAVIGATE = i, $g(window.REACT_APP_NAVIGATE)
        })
    }
    return r
}
const C1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppRoutes: Jg,
    navigatePromise: T1
}, Symbol.toStringTag, {
    value: "Module"
}));

function w1() {
    return Wt.jsx(f1, {
        basename: "/preview/80c515c6-38fa-48df-b87d-8d6ccf8ee854/2499240",
        children: Wt.jsx(Jg, {})
    })
}
Iv.createRoot(document.getElementById("root")).render(Wt.jsx(G.StrictMode, {
    children: Wt.jsx(w1, {})
}));
export {
    jg as a, Wt as j, G as r, Kn as u
};
//# sourceMappingURL=index-C-0La4hL.js.map