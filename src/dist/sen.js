var rp = (e) => {
  throw TypeError(e);
};
var op = (e, t, n) => t.has(e) || rp("Cannot " + n);
var We = (e, t, n) => (op(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ip = (e, t, n) => t.has(e) ? rp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nl = (e, t, n, r) => (op(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
function yb(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function bb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sh = { exports: {} }, re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi = Symbol.for("react.element"), Cb = Symbol.for("react.portal"), Sb = Symbol.for("react.fragment"), kb = Symbol.for("react.strict_mode"), Pb = Symbol.for("react.profiler"), Eb = Symbol.for("react.provider"), jb = Symbol.for("react.context"), Nb = Symbol.for("react.forward_ref"), Tb = Symbol.for("react.suspense"), Rb = Symbol.for("react.memo"), Mb = Symbol.for("react.lazy"), ap = Symbol.iterator;
function _b(e) {
  return e === null || typeof e != "object" ? null : (e = ap && e[ap] || e["@@iterator"], typeof e == "function" ? e : null);
}
var kh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ph = Object.assign, Eh = {};
function ko(e, t, n) {
  this.props = e, this.context = t, this.refs = Eh, this.updater = n || kh;
}
ko.prototype.isReactComponent = {};
ko.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ko.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jh() {
}
jh.prototype = ko.prototype;
function Yu(e, t, n) {
  this.props = e, this.context = t, this.refs = Eh, this.updater = n || kh;
}
var Xu = Yu.prototype = new jh();
Xu.constructor = Yu;
Ph(Xu, ko.prototype);
Xu.isPureReactComponent = !0;
var sp = Array.isArray, Nh = Object.prototype.hasOwnProperty, qu = { current: null }, Th = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rh(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null) for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) Nh.call(t, r) && !Th.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Vi, type: e, key: i, ref: a, props: o, _owner: qu.current };
}
function Ib(e, t) {
  return { $$typeof: Vi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vi;
}
function Ab(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var lp = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ab("" + e.key) : t.toString(36);
}
function Fa(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else switch (i) {
    case "string":
    case "number":
      a = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Vi:
        case Cb:
          a = !0;
      }
  }
  if (a) return a = e, o = o(a), e = r === "" ? "." + Tl(a, 0) : r, sp(o) ? (n = "", e != null && (n = e.replace(lp, "$&/") + "/"), Fa(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Qu(o) && (o = Ib(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(lp, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", sp(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var c = r + Tl(i, s);
    a += Fa(i, t, n, c, o);
  }
  else if (c = _b(e), typeof c == "function") for (e = c.call(e), s = 0; !(i = e.next()).done; ) i = i.value, c = r + Tl(i, s++), a += Fa(i, t, n, c, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function pa(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Fa(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Db(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var et = { current: null }, La = { transition: null }, Ob = { ReactCurrentDispatcher: et, ReactCurrentBatchConfig: La, ReactCurrentOwner: qu };
function Mh() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = { map: pa, forEach: function(e, t, n) {
  pa(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pa(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pa(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
re.Component = ko;
re.Fragment = Sb;
re.Profiler = Pb;
re.PureComponent = Yu;
re.StrictMode = kb;
re.Suspense = Tb;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ob;
re.act = Mh;
re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ph({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = qu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (c in t) Nh.call(t, c) && !Th.hasOwnProperty(c) && (r[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    s = Array(c);
    for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Vi, type: e.type, key: o, ref: i, props: r, _owner: a };
};
re.createContext = function(e) {
  return e = { $$typeof: jb, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Eb, _context: e }, e.Consumer = e;
};
re.createElement = Rh;
re.createFactory = function(e) {
  var t = Rh.bind(null, e);
  return t.type = e, t;
};
re.createRef = function() {
  return { current: null };
};
re.forwardRef = function(e) {
  return { $$typeof: Nb, render: e };
};
re.isValidElement = Qu;
re.lazy = function(e) {
  return { $$typeof: Mb, _payload: { _status: -1, _result: e }, _init: Db };
};
re.memo = function(e, t) {
  return { $$typeof: Rb, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function(e) {
  var t = La.transition;
  La.transition = {};
  try {
    e();
  } finally {
    La.transition = t;
  }
};
re.unstable_act = Mh;
re.useCallback = function(e, t) {
  return et.current.useCallback(e, t);
};
re.useContext = function(e) {
  return et.current.useContext(e);
};
re.useDebugValue = function() {
};
re.useDeferredValue = function(e) {
  return et.current.useDeferredValue(e);
};
re.useEffect = function(e, t) {
  return et.current.useEffect(e, t);
};
re.useId = function() {
  return et.current.useId();
};
re.useImperativeHandle = function(e, t, n) {
  return et.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function(e, t) {
  return et.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function(e, t) {
  return et.current.useLayoutEffect(e, t);
};
re.useMemo = function(e, t) {
  return et.current.useMemo(e, t);
};
re.useReducer = function(e, t, n) {
  return et.current.useReducer(e, t, n);
};
re.useRef = function(e) {
  return et.current.useRef(e);
};
re.useState = function(e) {
  return et.current.useState(e);
};
re.useSyncExternalStore = function(e, t, n) {
  return et.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function() {
  return et.current.useTransition();
};
re.version = "18.3.1";
Sh.exports = re;
var d = Sh.exports;
const $b = /* @__PURE__ */ bb(d), Po = /* @__PURE__ */ yb({
  __proto__: null,
  default: $b
}, [d]), At = /* @__PURE__ */ new Map();
function zb(e, t) {
  const n = At.get(e);
  n && n !== t && !n.node.destroyed && console.warn(`[Sen] Flag "${e}" is already in use. The newest element now owns it.`), At.set(e, t);
}
function Fb(e, t) {
  At.get(e) === t && At.delete(e);
}
const Lb = new Proxy({}, {
  get(e, t) {
    var n;
    if (typeof t == "string")
      return (n = At.get(t)) == null ? void 0 : n.Get();
  },
  set(e, t, n) {
    if (typeof t != "string") return !1;
    const r = At.get(t);
    return r ? (r.Set(n), !0) : (console.warn(`[Sen] No element has the flag "${t}".`), !0);
  },
  has: (e, t) => typeof t == "string" && At.has(t),
  ownKeys: () => [...At.keys()],
  getOwnPropertyDescriptor: (e, t) => typeof t == "string" && At.has(t) ? { enumerable: !0, configurable: !0 } : void 0
});
function Vb() {
  const e = {};
  for (const [t, n] of At) e[t] = n.Get();
  return e;
}
function Bb(e) {
  for (const [t, n] of Object.entries(e)) {
    const r = At.get(t);
    r && r.Set(n);
  }
}
function hi(e) {
  if (typeof e != "object" || e === null || Array.isArray(e)) return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
function Hb() {
  const e = /* @__PURE__ */ new Map();
  return {
    get(t) {
      var n;
      try {
        const r = (n = globalThis.localStorage) == null ? void 0 : n.getItem(t);
        if (typeof r == "string") return r;
      } catch {
      }
      return e.get(t) ?? null;
    },
    set(t, n) {
      var r;
      e.set(t, n);
      try {
        (r = globalThis.localStorage) == null || r.setItem(t, n);
      } catch {
      }
    }
  };
}
let Zu = Hb();
function Ub(e) {
  Zu = e;
}
const _h = (e) => `sen:config:${e}`;
async function Gb(e = "default") {
  const t = JSON.stringify(Vb());
  return await Zu.set(_h(e), t), t;
}
async function Wb(e = "default") {
  let t;
  if (hi(e))
    t = e;
  else {
    const n = e.trim().startsWith("{") ? e : await Zu.get(_h(e));
    if (!n) return !1;
    try {
      t = JSON.parse(n);
    } catch {
      return console.warn("[Sen] LoadConfig: saved config is not valid JSON."), !1;
    }
  }
  return hi(t) ? (Bb(t), !0) : !1;
}
const Kb = {
  dark: {
    background: "#09090b",
    foreground: "#fafafa",
    card: "#0c0c0f",
    popover: "#0c0c0f",
    secondary: "#27272a",
    secondaryForeground: "#fafafa",
    muted: "#27272a",
    mutedForeground: "#a1a1aa",
    accent: "#27272a",
    accentForeground: "#fafafa",
    border: "#27272a",
    input: "#27272a",
    destructive: "#ef4444",
    destructiveForeground: "#fafafa"
  },
  light: {
    background: "#ffffff",
    foreground: "#09090b",
    card: "#ffffff",
    popover: "#ffffff",
    secondary: "#f4f4f5",
    secondaryForeground: "#09090b",
    muted: "#f4f4f5",
    mutedForeground: "#71717a",
    accent: "#f4f4f5",
    accentForeground: "#09090b",
    border: "#e4e4e7",
    input: "#e4e4e7",
    destructive: "#ef4444",
    destructiveForeground: "#fafafa"
  }
}, ns = {
  zinc: { primary: { dark: "#fafafa", light: "#18181b" } },
  slate: {
    primary: { dark: "#f8fafc", light: "#0f172a" },
    neutral: {
      dark: { background: "#020617", card: "#0a1122", popover: "#0a1122", secondary: "#1e293b", muted: "#1e293b", accent: "#1e293b", border: "#1e293b", input: "#1e293b", mutedForeground: "#94a3b8" },
      light: { foreground: "#020617", secondary: "#f1f5f9", muted: "#f1f5f9", accent: "#f1f5f9", border: "#e2e8f0", input: "#e2e8f0", mutedForeground: "#64748b" }
    }
  },
  rose: { primary: "#e11d48" },
  violet: { primary: "#7c3aed" },
  blue: { primary: "#2563eb" },
  green: { primary: "#16a34a" },
  orange: { primary: "#ea580c" }
}, Yb = { none: 0, sm: 4, md: 8, lg: 12, full: 9999 }, Xb = {
  sm: { h: 32, px: 12, fs: 0.9 },
  md: { h: 36, px: 16, fs: 1 },
  lg: { h: 44, px: 20, fs: 1.15 }
}, qb = { xs: -1.5, sm: -0.75, md: 0, lg: 1, xl: 2, "2xl": 3 }, Qb = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', Zb = 'ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace';
function Ih(e) {
  const t = e.trim().toLowerCase(), n = (o) => Math.max(0, Math.min(255, o));
  let r = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(t);
  return r ? [r[1], r[2], r[3]].map((o) => parseInt(o + o, 16)) : (r = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(t), r ? [r[1], r[2], r[3]].map((o) => parseInt(o, 16)) : (r = /^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/.exec(t) ?? /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})$/.exec(t), r ? [n(+r[1]), n(+r[2]), n(+r[3])] : null));
}
function Jb(e) {
  const t = Ih(e);
  if (!t) return "#fafafa";
  const [n, r, o] = t.map((a) => {
    const s = a / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * n + 0.7152 * r + 0.0722 * o > 0.35 ? "#09090b" : "#fafafa";
}
const e0 = (e) => e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), cp = (e) => Math.round(e * 10) / 10, up = /* @__PURE__ */ new Set();
function t0(e) {
  up.has(e) || (up.add(e), console.warn(`[Sen] ${e}`));
}
const n0 = () => ({
  preset: "zinc",
  mode: "dark",
  radius: "md",
  size: "md",
  spacing: 4,
  font: { base: 14, scale: 1.2 },
  colors: {}
});
let Xe = n0();
function Ah(e) {
  if (e !== "auto") return e;
  const t = typeof matchMedia == "function" ? matchMedia("(prefers-color-scheme: dark)") : null;
  return t && !t.matches ? "light" : "dark";
}
function r0(e, t) {
  var i;
  const n = ns[e.preset] ?? ns.zinc, r = { ...Kb[t], ...(i = n.neutral) == null ? void 0 : i[t] };
  for (const [a, s] of Object.entries(e.colors)) s && (r[a] = s);
  r.primary ?? (r.primary = typeof n.primary == "string" ? n.primary : n.primary[t]), r.primaryForeground ?? (r.primaryForeground = Jb(r.primary)), r.ring ?? (r.ring = r.primary);
  const o = {};
  for (const [a, s] of Object.entries(r)) {
    const c = Ih(s);
    if (!c) {
      t0(`Theme color "${a}" ("${s}") isn't hex, rgb() or "r g b". Ignored.`);
      continue;
    }
    o[`--${e0(a)}`] = c.join(" ");
  }
  o["--radius"] = `${typeof e.radius == "number" ? e.radius : Yb[e.radius] ?? 8}px`, o["--sen-space"] = `${e.spacing}px`, o["--sen-font-sans"] = dp(e.font.sans, Qb), o["--sen-font-mono"] = dp(e.font.mono, Zb), o["--sen-font-base"] = `${e.font.base}px`;
  for (const [a, s] of Object.entries(qb))
    o[`--sen-text-${a}`] = `${cp(e.font.base * Math.pow(e.font.scale, s))}px`;
  for (const [a, s] of Object.entries(Xb))
    o[`--sen-h-${a}`] = `${s.h}px`, o[`--sen-px-${a}`] = `${s.px}px`, o[`--sen-fs-${a}`] = `${cp(e.font.base * s.fs)}px`;
  return typeof e.size == "number" ? (o["--sen-control-h"] = `${e.size}px`, o["--sen-control-px"] = "var(--sen-px-md)", o["--sen-control-fs"] = "var(--sen-fs-md)") : (o["--sen-control-h"] = `var(--sen-h-${e.size})`, o["--sen-control-px"] = `var(--sen-px-${e.size})`, o["--sen-control-fs"] = `var(--sen-fs-${e.size})`), o;
}
function dp(e, t) {
  return e ? e.includes(",") ? e : `"${e}", ${t}` : t;
}
const bc = /* @__PURE__ */ new Set();
let fp = !1;
function Dh(e) {
  const t = Ah(Xe.mode);
  for (const [n, r] of Object.entries(r0(Xe, t))) e.style.setProperty(n, r);
  e.style.colorScheme = t, e.setAttribute("data-sen-mode", t);
}
function o0(e) {
  var t, n;
  return bc.add(e), Dh(e), !fp && typeof matchMedia == "function" && (fp = !0, (n = (t = matchMedia("(prefers-color-scheme: dark)")).addEventListener) == null || n.call(t, "change", Oh)), () => {
    bc.delete(e);
  };
}
function Oh() {
  bc.forEach(Dh);
}
function pp() {
  return {
    ...Xe,
    resolvedMode: Ah(Xe.mode),
    font: { ...Xe.font },
    colors: { ...Xe.colors }
  };
}
function i0(e) {
  if (e === void 0) return pp();
  const t = typeof e == "string" ? { preset: e } : e;
  if (t.preset !== void 0 && (ns[t.preset] ? (Xe.preset = t.preset, Xe.colors = {}) : console.warn(`[Sen] Unknown theme preset "${t.preset}". Available: ${Object.keys(ns).join(", ")}.`)), t.mode && (Xe.mode = t.mode), t.radius !== void 0 && (Xe.radius = t.radius), t.size !== void 0 && (typeof t.size == "number" && Number.isFinite(t.size) && t.size > 0 || t.size === "sm" || t.size === "md" || t.size === "lg" ? Xe.size = t.size : console.warn("[Sen] size must be a positive number of px or one of: sm, md, lg.")), t.spacing !== void 0 && (t.spacing > 0 && Number.isFinite(t.spacing) ? Xe.spacing = t.spacing : console.warn("[Sen] spacing must be a positive number of px.")), t.font) {
    const { sans: n, mono: r, base: o, scale: i } = t.font;
    Xe.font = {
      ...Xe.font,
      ...n !== void 0 && { sans: n },
      ...r !== void 0 && { mono: r },
      ...o !== void 0 && o > 0 && { base: o },
      ...i !== void 0 && i > 0 && { scale: i }
    };
  }
  return t.colors && (Xe.colors = { ...Xe.colors, ...t.colors }), Oh(), pp();
}
let a0 = 1, Hr = [];
const Cc = /* @__PURE__ */ new Set(), $h = () => Cc.forEach((e) => e()), Ur = {
  subscribe(e) {
    return Cc.add(e), () => {
      Cc.delete(e);
    };
  },
  /** Stable between changes, as useSyncExternalStore requires. */
  getSnapshot: () => Hr,
  dismiss(e) {
    Hr.some((t) => t.id === e) && (Hr = Hr.filter((t) => t.id !== e), $h());
  }
};
function s0(e) {
  const t = {
    id: a0++,
    title: e.title ?? "",
    content: e.content ?? "",
    variant: e.variant ?? "default"
  };
  Hr = [...Hr, t].slice(-5), $h();
  const n = e.duration ?? 4;
  return n > 0 && setTimeout(() => Ur.dismiss(t.id), n * 1e3), { Dismiss: () => Ur.dismiss(t.id) };
}
class Bi {
  constructor(t) {
    this.node = t;
  }
  get id() {
    return this.node.id;
  }
  get type() {
    return this.node.type;
  }
  Then(t, n) {
    return n ? (this.node.signals.add(t, n), this) : (r) => (this.node.signals.add(t, r), this);
  }
  Get(t) {
    if (t !== void 0) return this.node.props[t];
    const n = this.node.spec;
    if (!n) throw new Error(`[Sen] ${this.type} has no main value. Use Get("propName").`);
    return this.node.props[n.prop];
  }
  Set(t, n = !1) {
    if (hi(t)) {
      const r = this.node.spec, o = { ...t };
      if (r && r.prop in o) {
        const i = o[r.prop];
        delete o[r.prop], Object.keys(o).length && this.node.patch(o), this.node.setValue(i, n);
      } else
        this.node.patch(o);
      return this;
    }
    return this.node.setValue(t, n), this;
  }
  /** Append children to a container (Stack, Grid, Card). */
  Add(...t) {
    const n = this.node.props.children;
    if (!Array.isArray(n)) throw new Error(`[Sen] ${this.type} cannot hold children.`);
    return this.node.patch({ children: [...n, ...t] }), this;
  }
  SetVisible(t) {
    return this.node.visible = t, this.node.bump(), this;
  }
  /** Removes the element, its flag, its listeners, and everything nested inside it. */
  Destroy() {
    if (this.node.destroyed) return;
    this.node.destroyed = !0;
    const t = this.node.props.flag;
    typeof t == "string" && t && Fb(t, this);
    const n = /* @__PURE__ */ new Set(), r = (o) => {
      if (o instanceof Bi) {
        o.Destroy();
        return;
      }
      typeof o != "object" || o === null || n.has(o) || (n.add(o), Array.isArray(o) ? o.forEach(r) : hi(o) && !("$$typeof" in o) && Object.values(o).forEach(r));
    };
    Object.values(this.node.props).forEach(r), this.node.signals.clear(), this.node.bump();
  }
}
class l0 {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /** Adds a listener. Returns a function that removes it. */
  add(t, n) {
    let r = this.map.get(t);
    return r || this.map.set(t, r = /* @__PURE__ */ new Set()), r.add(n), () => {
      r.delete(n);
    };
  }
  /** Calls every listener. A throwing listener never stops the others. */
  emit(t, ...n) {
    const r = this.map.get(t);
    if (!(!r || r.size === 0))
      for (const o of [...r])
        try {
          o(...n);
        } catch (i) {
          console.error(`[Sen] error in "${String(t)}" listener`, i);
        }
  }
  clear() {
    this.map.clear();
  }
}
let c0 = 0;
class u0 {
  constructor(t, n, r) {
    this.type = t, this.spec = r, this.id = `sen-${++c0}`, this.visible = !0, this.destroyed = !1, this.version = 0, this.signals = new l0(), this.subs = /* @__PURE__ */ new Set(), this.subscribe = (o) => (this.subs.add(o), () => {
      this.subs.delete(o);
    }), this.getVersion = () => this.version, this.props = n;
  }
  bump() {
    this.version++;
    for (const t of [...this.subs]) t();
  }
  patch(t) {
    this.props = { ...this.props, ...t }, this.bump();
  }
  emit(t, ...n) {
    this.signals.emit(t, ...n);
  }
  /**
   * Sets the main value, then fires the component's change events.
   * Called both by Handle.Set() and by the renderer when the user interacts.
   * Does nothing if the value did not change, which also stops Set-inside-Changed loops.
   */
  setValue(t, n = !1) {
    const r = this.spec;
    if (!r) throw new Error(`[Sen] ${this.type} has no main value. Use Set({ prop: value }) instead.`);
    const o = r.normalize ? r.normalize(t, this.props) : t;
    if (!Object.is(this.props[r.prop], o) && (this.patch({ [r.prop]: o }), !(n || !r.events)))
      for (const i of r.events) this.emit(i, o);
  }
}
const Sc = /* @__PURE__ */ new Map(), d0 = () => [...Sc.keys()];
function V(e) {
  if (Sc.has(e.name)) throw new Error(`[Sen] Component "${e.name}" is already defined.`);
  return Sc.set(e.name, e), Object.assign((n) => {
    let r = {};
    if (n != null)
      if (hi(n))
        r = n;
      else if (e.value)
        r = { [e.value.prop]: n };
      else
        throw new Error(`[Sen] Sen.${e.name}() expects a config object, e.g. Sen.${e.name}({ ... }).`);
    const i = {
      ...{
        className: "",
        style: {},
        attributes: {},
        animation: !1
      },
      ...e.defaults
    };
    for (const [m, p] of Object.entries(r))
      if (p !== void 0) {
        if (m === "size" && typeof p == "number" && (!Number.isFinite(p) || p <= 0)) {
          console.warn(`[Sen] Sen.${e.name}() size must be a positive number of px.`);
          continue;
        }
        if (!(m in i)) {
          console.warn(`[Sen] Sen.${e.name}() has no "${m}" option. Ignored. Options: ${Object.keys(i).join(", ")}.`);
          continue;
        }
        i[m] = p;
      }
    const a = e.value;
    a != null && a.normalize && (i[a.prop] = a.normalize(i[a.prop], i));
    const s = new u0(
      e.name,
      i,
      a
    ), c = new Bi(s), u = i.flag;
    return typeof u == "string" && u && zb(u, c), c;
  }, { def: e });
}
function f0(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const o of t.items) {
    if (!o.value || n.has(o.value))
      throw new Error("[Sen] Accordion item values must be non-empty and unique.");
    n.add(o.value);
  }
  if (t.type === "single") {
    const o = Array.isArray(e) ? e[0] : String(e ?? "");
    return n.has(o) ? o : "";
  }
  const r = Array.isArray(e) ? e : e ? [e] : [];
  return [...new Set(r.map(String).filter((o) => n.has(o)))];
}
const p0 = V({
  name: "Accordion",
  defaults: {
    items: [],
    type: "single",
    value: "",
    collapsible: !1,
    orientation: "vertical",
    dir: "ltr"
  },
  value: { prop: "value", events: ["Changed"], normalize: f0 }
}), m0 = V({
  name: "Alert",
  defaults: { title: "", description: "", content: [], variant: "default" }
});
function zt(e) {
  const t = V(e);
  return Object.assign((r) => {
    const o = t(r), a = Object.assign(o, {
      Open() {
        return o.Set(!0), a;
      },
      Close() {
        return o.Set(!1), a;
      },
      Wait() {
        return !o.Get() || o.node.destroyed ? Promise.resolve() : new Promise((s) => {
          const c = o.node.subscribe(() => {
            (!o.Get() || o.node.destroyed) && (c(), s());
          });
        });
      }
    });
    return a;
  }, { def: t.def });
}
const h0 = zt({
  name: "AlertDialog",
  defaults: {
    open: !1,
    title: "Are you sure?",
    description: "",
    content: [],
    actionText: "Continue",
    cancelText: "Cancel"
  },
  value: { prop: "open", events: ["Changed"] }
}), g0 = V({
  name: "AnimatedList",
  defaults: { children: [], stagger: 80, duration: 320, startDelay: 0, ordered: !1 }
}), v0 = V({
  name: "AnimatedText",
  defaults: { text: "", as: "span", split: "words", duration: 420, stagger: 35, delay: 0, label: "" }
}), x0 = V({
  name: "Animation",
  defaults: { front: [], back: [], label: "Flip card", flipped: !1, disabled: !1 },
  value: { prop: "flipped", events: ["Changed"], normalize: (e) => !!e }
}), w0 = V({
  name: "AppleDock",
  defaults: { items: [], value: "", orientation: "horizontal", label: "Quick navigation" },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e, t) => {
      const n = String(e ?? "");
      return t.items.some((r) => r.value === n) ? n : "";
    }
  }
}), y0 = V({
  name: "AspectRatio",
  defaults: { ratio: 16 / 9, children: [] }
}), b0 = V({
  name: "Attachment",
  defaults: {
    name: "Attachment",
    fileSize: "",
    mediaType: "",
    previewUrl: "",
    status: "ready",
    progress: 0,
    removable: !1
  }
}), C0 = V({
  name: "Autocomplete",
  defaults: { value: "", label: "", description: "", placeholder: "Start typing...", options: [], emptyText: "No matches found.", disabled: !1, required: !1 },
  value: { prop: "value", events: ["Changed"] }
}), S0 = V({
  name: "Avatar",
  defaults: { src: "", alt: "", fallback: "" }
}), k0 = V({
  name: "Badge",
  defaults: { text: "", variant: "primary" },
  value: { prop: "text" }
}), P0 = V({
  name: "Breadcrumb",
  defaults: { items: [], separator: "/" }
}), E0 = V({
  name: "Bubble",
  defaults: { children: [], align: "start", variant: "default", grouped: !1, reactions: [] }
}), j0 = V({
  name: "Button",
  defaults: { text: "Button", variant: "primary", size: "inherit", disabled: !1, fullWidth: !1 },
  value: { prop: "text" }
}), N0 = V({
  name: "ButtonGroup",
  defaults: { children: [], orientation: "horizontal" }
}), T0 = V({
  name: "Calendar",
  defaults: { value: "", month: "", minDate: "", maxDate: "", weekStartsOn: 0 },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e) => {
      const t = String(e ?? "");
      return /^\d{4}-\d{2}-\d{2}$/.test(t) ? t : "";
    }
  }
}), R0 = V({
  name: "Card",
  defaults: { title: "", description: "", children: [], footer: null, padding: 6 }
}), M0 = V({
  name: "Carousel",
  defaults: { items: [], index: 0, label: "Carousel", orientation: "horizontal", loop: !0 },
  value: {
    prop: "index",
    events: ["Changed"],
    normalize: (e, t) => Math.min(Math.max(0, Math.floor(Number(e) || 0)), Math.max(0, t.items.length - 1))
  }
}), _0 = V({
  name: "Chart",
  defaults: { title: "Chart", data: [], type: "line", height: 220 }
}), I0 = V({
  name: "Checkbox",
  defaults: { label: "", description: "", value: !1, disabled: !1, flag: "" },
  value: { prop: "value", events: ["Changed", "Toggled"], normalize: (e) => !!e }
}), A0 = V({
  name: "CodeBlock",
  defaults: { code: "", language: "text", filename: "", showLineNumbers: !1, copyText: "Copy code" }
}), D0 = zt({
  name: "Collapsible",
  defaults: { open: !1, disabled: !1, trigger: "Show more", content: [] },
  value: { prop: "open", events: ["Changed"] }
});
function O0(e) {
  const t = String(e ?? "").trim();
  if (/^#[\da-f]{6}$/i.test(t)) return t.toLowerCase();
  const n = /^#([\da-f])([\da-f])([\da-f])$/i.exec(t);
  return n ? `#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`.toLowerCase() : (console.warn(`[Sen] ColorPicker value "${t}" must be a 3- or 6-digit hex color.`), "#000000");
}
const $0 = V({
  name: "ColorPicker",
  defaults: { label: "", description: "", value: "#000000", disabled: !1, showValue: !0, flag: "", placeholder: "#000000" },
  value: { prop: "value", events: ["Changed"], normalize: O0 }
}), z0 = V({
  name: "Combobox",
  defaults: {
    label: "",
    description: "",
    options: [],
    value: "",
    placeholder: "Select an option",
    searchPlaceholder: "Search…",
    emptyText: "No results found.",
    disabled: !1,
    required: !1
  },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e, t) => {
      const n = String(e ?? "");
      return t.options.some((r) => (typeof r == "string" ? r : r.value) === n) ? n : "";
    }
  }
}), F0 = V({
  name: "Command",
  defaults: { label: "Commands", placeholder: "Search commands…", emptyText: "No results found.", items: [] }
}), L0 = zt({
  name: "ContextMenu",
  defaults: { open: !1, children: [], items: [] },
  value: { prop: "open", events: ["Changed"] }
}), V0 = V({
  name: "DataTable",
  defaults: { columns: [], rows: [], pageSize: 5, searchable: !0, caption: "" }
}), B0 = V({
  name: "DatePicker",
  defaults: {
    value: "",
    label: "",
    description: "",
    placeholder: "Pick a date",
    minDate: "",
    maxDate: "",
    disabled: !1,
    required: !1,
    weekStartsOn: 0
  },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e) => {
      const t = String(e ?? "");
      return /^\d{4}-\d{2}-\d{2}$/.test(t) ? t : "";
    }
  }
}), H0 = zt({
  name: "Dialog",
  defaults: { open: !1, title: "Dialog", description: "", content: [], closeText: "Close" },
  value: { prop: "open", events: ["Changed"] }
}), U0 = V({
  name: "Direction",
  defaults: { dir: "ltr", children: [] }
}), G0 = V({
  name: "Dots",
  defaults: { size: 48, color: "rgb(var(--primary))", shape: "circle", label: "Animated dot", followCursor: !1 }
}), W0 = zt({
  name: "Drawer",
  defaults: { open: !1, title: "Details", description: "", content: [], closeText: "Close" },
  value: { prop: "open", events: ["Changed"] }
}), K0 = zt({
  name: "DropdownMenu",
  defaults: { open: !1, trigger: "Open menu", items: [], side: "bottom" },
  value: { prop: "open", events: ["Changed"] }
}), Y0 = V({
  name: "Empty",
  defaults: { title: "No results", description: "", children: [], icon: null, action: null }
}), X0 = V({
  name: "Field",
  defaults: { label: "", htmlFor: "", description: "", error: "", required: !1, children: [] }
}), q0 = V({
  name: "FileUpload",
  defaults: { label: "Upload files", description: "Drag files here or browse to choose files.", accept: "", multiple: !1, maxFiles: 5, maxSize: 0, disabled: !1 }
}), Q0 = V({
  name: "Grid",
  defaults: { columns: 2, gap: 2, padding: 0, children: [] }
}), Z0 = zt({
  name: "HoverCard",
  defaults: { open: !1, trigger: "Preview", content: [], side: "bottom", openDelay: 300, closeDelay: 150 },
  value: { prop: "open", events: ["Changed"] }
}), J0 = V({
  name: "Input",
  defaults: { label: "", description: "", placeholder: "", value: "", type: "text", disabled: !1, size: "inherit", flag: "" },
  value: { prop: "value", events: ["Changed"] }
}), e1 = V({
  name: "InputGroup",
  defaults: { children: [], prefix: "", suffix: "" }
}), t1 = V({
  name: "InputMask",
  defaults: { value: "", label: "", description: "", mask: "", placeholder: "", kind: "numeric", disabled: !1, required: !1 },
  value: { prop: "value", events: ["Changed"] }
}), n1 = V({
  name: "InputOTP",
  defaults: { value: "", length: 6, label: "One-time password", disabled: !1, numeric: !0, autoFocus: !1, invalid: !1, groupSize: 3 },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e, t) => {
      const n = String(e ?? "");
      return (t.numeric ? n.replace(/\D/g, "") : n.replace(/[^a-z\d]/gi, "")).slice(0, Math.max(1, Math.min(12, t.length)));
    }
  }
}), r1 = V({
  name: "Item",
  defaults: { title: "", description: "", media: "", children: [], variant: "default" }
}), o1 = V({
  name: "Kbd",
  defaults: { value: "", keys: [] }
});
function i1(e) {
  return String(e ?? "").trim();
}
const a1 = V({
  name: "Keybind",
  defaults: {
    label: "",
    description: "",
    value: "",
    disabled: !1,
    preventDefault: !0,
    flag: ""
  },
  value: { prop: "value", events: ["Changed"], normalize: i1 }
}), s1 = V({
  name: "Label",
  defaults: { text: "", htmlFor: "", required: !1 }
}), l1 = V({
  name: "Marker",
  defaults: { text: "", variant: "default", align: "left" }
}), c1 = V({
  name: "Marquee",
  defaults: { children: [], direction: "left", duration: 28, gap: 6, pauseOnHover: !0, label: "Scrolling content" }
}), u1 = V({
  name: "Menubar",
  defaults: { groups: [] }
}), d1 = V({
  name: "Message",
  defaults: { author: "", avatar: "", timestamp: "", children: [], align: "start" }
}), f1 = V({
  name: "MessageScroller",
  defaults: { children: [], maxHeight: 420, autoScroll: !0, label: "Conversation" }
}), p1 = V({
  name: "NativeSelect",
  defaults: {
    label: "",
    description: "",
    options: [],
    value: "",
    placeholder: "Select an option",
    disabled: !1,
    required: !1,
    size: "inherit"
  },
  value: { prop: "value", events: ["Changed"], normalize: (e) => String(e ?? "") }
}), m1 = V({
  name: "NavigationMenu",
  defaults: { items: [] }
}), h1 = V({
  name: "NumberTicker",
  defaults: { value: 0, from: 0, duration: 1200, decimals: 0, locale: "en-US", prefix: "", suffix: "", animateOnView: !0 }
}), g1 = V({
  name: "OrbitingCircles",
  defaults: { children: [], center: [], radius: 64, size: 32, duration: 18, reverse: !1, pauseOnHover: !0, label: "Orbiting items" }
}), v1 = V({
  name: "Pagination",
  defaults: { page: 1, pageCount: 1, siblingCount: 1 },
  value: {
    prop: "page",
    events: ["Changed"],
    normalize: (e, t) => Math.min(Math.max(1, Math.floor(Number(e) || 1)), Math.max(1, t.pageCount))
  }
}), x1 = zt({
  name: "Popover",
  defaults: {
    open: !1,
    trigger: "Open",
    content: [],
    side: "bottom",
    align: "center",
    sideOffset: 4,
    alignOffset: 0,
    modal: !1
  },
  value: { prop: "open", events: ["Changed"] }
}), w1 = V({
  name: "Progress",
  defaults: { label: "", value: 0, showValue: !1 },
  value: { prop: "value", normalize: (e) => Math.min(100, Math.max(0, Number(e) || 0)) }
}), y1 = V({
  name: "Questionnaire",
  defaults: { title: "A few questions", questions: [], step: 0, submitText: "Finish" },
  value: {
    prop: "step",
    events: ["Changed"],
    normalize: (e, t) => Math.min(Math.max(0, Math.floor(Number(e) || 0)), Math.max(0, t.questions.length - 1))
  }
}), b1 = V({
  name: "RadioGroup",
  defaults: {
    items: [],
    value: "",
    label: "",
    description: "",
    disabled: !1,
    orientation: "vertical",
    required: !1
  },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e, t) => {
      const n = String(e ?? "");
      return t.items.some((r) => r.value === n) ? n : "";
    }
  }
}), C1 = V({
  name: "Rating",
  defaults: { value: 0, max: 5, step: 1, label: "Rating", disabled: !1, readOnly: !1, allowClear: !1 },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e, t) => {
      const n = Math.max(1, Math.min(20, Math.floor(Number(t.max) || 5))), r = t.step === 0.5 ? 0.5 : 1, o = Math.round((Number(e) || 0) / r) * r;
      return Math.min(n, Math.max(0, o));
    }
  }
}), S1 = V({
  name: "Resizable",
  defaults: { children: [], direction: "horizontal", defaultSizes: [], minSize: 15 }
}), k1 = V({
  name: "ScrollArea",
  defaults: { children: [], maxHeight: 320, axis: "vertical", label: "Scrollable content" }
}), P1 = V({
  name: "Select",
  defaults: { label: "", description: "", options: [], value: "", placeholder: "Select...", disabled: !1, size: "inherit", flag: "" },
  value: { prop: "value", events: ["Changed"], normalize: (e) => String(e ?? "") }
}), E1 = V({
  name: "Separator",
  defaults: { orientation: "horizontal", decorative: !0 }
}), j1 = zt({
  name: "Sheet",
  defaults: { open: !1, title: "Details", description: "", content: [], side: "right", closeText: "Close" },
  value: { prop: "open", events: ["Changed"] }
}), N1 = V({
  name: "ShineBorder",
  defaults: { children: [], color: "rgb(var(--primary))", duration: 5, borderWidth: 1 }
}), T1 = V({
  name: "Sidebar",
  defaults: { children: [], collapsed: !1, collapsible: !0, label: "Sidebar" },
  value: { prop: "collapsed", events: ["Changed"] }
}), R1 = V({
  name: "Skeleton",
  defaults: { width: "100%", height: "1rem", circle: !1 }
});
function M1(e, t) {
  const n = Number(e);
  if (!Number.isFinite(n)) return t.min;
  const r = t.step > 0 ? t.step : 1, o = (String(r).split(".")[1] ?? "").length, i = Math.round((n - t.min) / r) * r + t.min;
  return Math.min(t.max, Math.max(t.min, Number(i.toFixed(o))));
}
const _1 = V({
  name: "Slider",
  defaults: { label: "", description: "", min: 0, max: 100, step: 1, value: 0, showValue: !0, disabled: !1, flag: "" },
  value: { prop: "value", events: ["Changed"], normalize: M1 }
}), I1 = V({
  name: "Sortable",
  defaults: { items: [], label: "Sortable list", orientation: "vertical" }
}), A1 = V({
  name: "Spinner",
  defaults: { label: "Loading", size: 18 }
}), D1 = V({
  name: "SpinningText",
  defaults: { text: "", radius: 42, duration: 12, reverse: !1, pauseOnHover: !0, label: "Rotating text" }
}), O1 = V({
  name: "Stack",
  defaults: { direction: "column", gap: 2, align: "stretch", justify: "start", wrap: !1, padding: 0, children: [] }
}), $1 = V({
  name: "Stepper",
  defaults: { steps: [], value: 0, orientation: "horizontal", allowJump: !1, nextText: "Continue", backText: "Back", finishText: "Finish" },
  value: {
    prop: "value",
    events: ["Changed"],
    normalize: (e, t) => Math.min(Math.max(0, Math.floor(Number(e) || 0)), Math.max(0, t.steps.length - 1))
  }
}), z1 = V({
  name: "Switch",
  defaults: { label: "", description: "", value: !1, disabled: !1, flag: "" },
  value: { prop: "value", events: ["Changed", "Toggled"], normalize: (e) => !!e }
}), F1 = V({
  name: "Table",
  defaults: { headers: [], rows: [], caption: "" }
});
function L1(e, t) {
  var o, i;
  const n = /* @__PURE__ */ new Set();
  for (const a of t.items) {
    if (!a.value || n.has(a.value))
      throw new Error("[Sen] Tabs item values must be non-empty and unique.");
    n.add(a.value);
  }
  const r = String(e ?? "");
  return ((o = t.items.find((a) => a.value === r && !a.disabled)) == null ? void 0 : o.value) ?? ((i = t.items.find((a) => !a.disabled)) == null ? void 0 : i.value) ?? "";
}
const V1 = V({
  name: "Tabs",
  defaults: { items: [], value: "", label: "", orientation: "horizontal", activationMode: "automatic", dir: "ltr" },
  value: { prop: "value", events: ["Changed"], normalize: L1 }
}), B1 = V({
  name: "Text",
  defaults: { text: "", size: "md", weight: "normal", color: "default", font: "sans", align: "left" },
  value: { prop: "text" }
}), H1 = V({
  name: "Textarea",
  defaults: { label: "", description: "", value: "", placeholder: "", rows: 3, disabled: !1, required: !1 },
  value: { prop: "value", events: ["Changed"] }
}), U1 = zt({
  name: "Toast",
  defaults: { open: !0, title: "", description: "", variant: "default", duration: 4e3 },
  value: { prop: "open", events: ["Changed"] }
}), G1 = V({
  name: "Toggle",
  defaults: { text: "", pressed: !1, variant: "default", size: "default", disabled: !1 },
  value: { prop: "pressed", events: ["Changed"], normalize: Boolean }
});
function W1(e, t) {
  const n = new Set(t.items.map((o) => o.value));
  if (t.type === "single") {
    const o = String(e ?? "");
    return n.has(o) ? o : "";
  }
  const r = Array.isArray(e) ? e : e ? [e] : [];
  return [...new Set(r.map(String).filter((o) => n.has(o)))];
}
const K1 = V({
  name: "ToggleGroup",
  defaults: {
    items: [],
    type: "single",
    value: "",
    variant: "default",
    size: "default",
    disabled: !1,
    orientation: "horizontal",
    rovingFocus: !0
  },
  value: { prop: "value", events: ["Changed"], normalize: W1 }
}), Y1 = zt({
  name: "Tooltip",
  defaults: {
    open: !1,
    trigger: "Hover or focus",
    content: "",
    side: "top",
    align: "center",
    sideOffset: 4,
    delayDuration: 700
  },
  value: { prop: "open", events: ["Changed"] }
}), X1 = V({
  name: "Typography",
  defaults: { text: "", variant: "p" }
});
var zh = { exports: {} }, _s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1 = d, Q1 = Symbol.for("react.element"), Z1 = Symbol.for("react.fragment"), J1 = Object.prototype.hasOwnProperty, eC = q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, tC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fh(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t) J1.call(t, r) && !tC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Q1, type: e, key: i, ref: a, props: o, _owner: eC.current };
}
_s.Fragment = Z1;
_s.jsx = Fh;
_s.jsxs = Fh;
zh.exports = _s;
var l = zh.exports, Lh = { exports: {} }, vt = {}, Vh = { exports: {} }, Bh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(j, I) {
    var F = j.length;
    j.push(I);
    e: for (; 0 < F; ) {
      var ee = F - 1 >>> 1, N = j[ee];
      if (0 < o(N, I)) j[ee] = I, j[F] = N, F = ee;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var I = j[0], F = j.pop();
    if (F !== I) {
      j[0] = F;
      e: for (var ee = 0, N = j.length, H = N >>> 1; ee < H; ) {
        var X = 2 * (ee + 1) - 1, L = j[X], D = X + 1, Q = j[D];
        if (0 > o(L, F)) D < N && 0 > o(Q, L) ? (j[ee] = Q, j[D] = F, ee = D) : (j[ee] = L, j[X] = F, ee = X);
        else if (D < N && 0 > o(Q, F)) j[ee] = Q, j[D] = F, ee = D;
        else break e;
      }
    }
    return I;
  }
  function o(j, I) {
    var F = j.sortIndex - I.sortIndex;
    return F !== 0 ? F : j.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var c = [], u = [], m = 1, p = null, f = 3, h = !1, x = !1, v = !1, b = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(j) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= j) r(u), I.sortIndex = I.expirationTime, t(c, I);
      else break;
      I = n(u);
    }
  }
  function C(j) {
    if (v = !1, w(j), !x) if (n(c) !== null) x = !0, q(S);
    else {
      var I = n(u);
      I !== null && Y(C, I.startTime - j);
    }
  }
  function S(j, I) {
    x = !1, v && (v = !1, g(E), E = -1), h = !0;
    var F = f;
    try {
      for (w(I), p = n(c); p !== null && (!(p.expirationTime > I) || j && !O()); ) {
        var ee = p.callback;
        if (typeof ee == "function") {
          p.callback = null, f = p.priorityLevel;
          var N = ee(p.expirationTime <= I);
          I = e.unstable_now(), typeof N == "function" ? p.callback = N : p === n(c) && r(c), w(I);
        } else r(c);
        p = n(c);
      }
      if (p !== null) var H = !0;
      else {
        var X = n(u);
        X !== null && Y(C, X.startTime - I), H = !1;
      }
      return H;
    } finally {
      p = null, f = F, h = !1;
    }
  }
  var k = !1, P = null, E = -1, R = 5, T = -1;
  function O() {
    return !(e.unstable_now() - T < R);
  }
  function M() {
    if (P !== null) {
      var j = e.unstable_now();
      T = j;
      var I = !0;
      try {
        I = P(!0, j);
      } finally {
        I ? W() : (k = !1, P = null);
      }
    } else k = !1;
  }
  var W;
  if (typeof y == "function") W = function() {
    y(M);
  };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(), te = K.port2;
    K.port1.onmessage = M, W = function() {
      te.postMessage(null);
    };
  } else W = function() {
    b(M, 0);
  };
  function q(j) {
    P = j, k || (k = !0, W());
  }
  function Y(j, I) {
    E = b(function() {
      j(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    x || h || (x = !0, q(S));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(j) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = f;
    }
    var F = f;
    f = I;
    try {
      return j();
    } finally {
      f = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, I) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var F = f;
    f = j;
    try {
      return I();
    } finally {
      f = F;
    }
  }, e.unstable_scheduleCallback = function(j, I, F) {
    var ee = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ee + F : ee) : F = ee, j) {
      case 1:
        var N = -1;
        break;
      case 2:
        N = 250;
        break;
      case 5:
        N = 1073741823;
        break;
      case 4:
        N = 1e4;
        break;
      default:
        N = 5e3;
    }
    return N = F + N, j = { id: m++, callback: I, priorityLevel: j, startTime: F, expirationTime: N, sortIndex: -1 }, F > ee ? (j.sortIndex = F, t(u, j), n(c) === null && j === n(u) && (v ? (g(E), E = -1) : v = !0, Y(C, F - ee))) : (j.sortIndex = N, t(c, j), x || h || (x = !0, q(S))), j;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(j) {
    var I = f;
    return function() {
      var F = f;
      f = I;
      try {
        return j.apply(this, arguments);
      } finally {
        f = F;
      }
    };
  };
})(Bh);
Vh.exports = Bh;
var nC = Vh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rC = d, gt = nC;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Hh = /* @__PURE__ */ new Set(), gi = {};
function Er(e, t) {
  po(e, t), po(e + "Capture", t);
}
function po(e, t) {
  for (gi[e] = t, e = 0; e < t.length; e++) Hh.add(t[e]);
}
var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kc = Object.prototype.hasOwnProperty, oC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, mp = {}, hp = {};
function iC(e) {
  return kc.call(hp, e) ? !0 : kc.call(mp, e) ? !1 : oC.test(e) ? hp[e] = !0 : (mp[e] = !0, !1);
}
function aC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sC(e, t, n, r) {
  if (t === null || typeof t > "u" || aC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function tt(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ue[e] = new tt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ue[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ue[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ue[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ue[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ue[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ue[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ue[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ue[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ju = /[\-:]([a-z])/g;
function ed(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ju,
    ed
  );
  Ue[t] = new tt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ju, ed);
  Ue[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ju, ed);
  Ue[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ue[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ue[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function td(e, t, n, r) {
  var o = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sC(t, n, o, r) && (n = null), r || o === null ? iC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pn = rC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ma = Symbol.for("react.element"), Gr = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), nd = Symbol.for("react.strict_mode"), Pc = Symbol.for("react.profiler"), Uh = Symbol.for("react.provider"), Gh = Symbol.for("react.context"), rd = Symbol.for("react.forward_ref"), Ec = Symbol.for("react.suspense"), jc = Symbol.for("react.suspense_list"), od = Symbol.for("react.memo"), An = Symbol.for("react.lazy"), Wh = Symbol.for("react.offscreen"), gp = Symbol.iterator;
function Vo(e) {
  return e === null || typeof e != "object" ? null : (e = gp && e[gp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Se = Object.assign, Rl;
function ei(e) {
  if (Rl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Rl = t && t[1] || "";
  }
  return `
` + Rl + e;
}
var Ml = !1;
function _l(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; ) s--;
      for (; 1 <= a && 0 <= s; a--, s--) if (o[a] !== i[s]) {
        if (a !== 1 || s !== 1)
          do
            if (a--, s--, 0 > s || o[a] !== i[s]) {
              var c = `
` + o[a].replace(" at new ", " at ");
              return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
            }
          while (1 <= a && 0 <= s);
        break;
      }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ei(e) : "";
}
function lC(e) {
  switch (e.tag) {
    case 5:
      return ei(e.type);
    case 16:
      return ei("Lazy");
    case 13:
      return ei("Suspense");
    case 19:
      return ei("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _l(e.type, !1), e;
    case 11:
      return e = _l(e.type.render, !1), e;
    case 1:
      return e = _l(e.type, !0), e;
    default:
      return "";
  }
}
function Nc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wr:
      return "Fragment";
    case Gr:
      return "Portal";
    case Pc:
      return "Profiler";
    case nd:
      return "StrictMode";
    case Ec:
      return "Suspense";
    case jc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Gh:
      return (e.displayName || "Context") + ".Consumer";
    case Uh:
      return (e._context.displayName || "Context") + ".Provider";
    case rd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case od:
      return t = e.displayName || null, t !== null ? t : Nc(e.type) || "Memo";
    case An:
      t = e._payload, e = e._init;
      try {
        return Nc(e(t));
      } catch {
      }
  }
  return null;
}
function cC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Nc(t);
    case 8:
      return t === nd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Xn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function uC(e) {
  var t = Kh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ha(e) {
  e._valueTracker || (e._valueTracker = uC(e));
}
function Yh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Kh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function rs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Tc(e, t) {
  var n = t.checked;
  return Se({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function vp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Xn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Xh(e, t) {
  t = t.checked, t != null && td(e, "checked", t, !1);
}
function Rc(e, t) {
  Xh(e, t);
  var n = Xn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Mc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mc(e, t.type, Xn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function xp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Mc(e, t, n) {
  (t !== "number" || rs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ti = Array.isArray;
function ro(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _c(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Se({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function wp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (ti(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Xn(n) };
}
function qh(e, t) {
  var n = Xn(t.value), r = Xn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function yp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ic(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Qh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ga, Zh = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ga = ga || document.createElement("div"), ga.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ga.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function vi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ii = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, dC = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function(e) {
  dC.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ii[t] = ii[e];
  });
});
function Jh(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ii.hasOwnProperty(e) && ii[e] ? ("" + t).trim() : t + "px";
}
function eg(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Jh(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var fC = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ac(e, t) {
  if (t) {
    if (fC[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Dc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var Oc = null;
function id(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var $c = null, oo = null, io = null;
function bp(e) {
  if (e = Gi(e)) {
    if (typeof $c != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = $s(t), $c(e.stateNode, e.type, t));
  }
}
function tg(e) {
  oo ? io ? io.push(e) : io = [e] : oo = e;
}
function ng() {
  if (oo) {
    var e = oo, t = io;
    if (io = oo = null, bp(e), t) for (e = 0; e < t.length; e++) bp(t[e]);
  }
}
function rg(e, t) {
  return e(t);
}
function og() {
}
var Il = !1;
function ig(e, t, n) {
  if (Il) return e(t, n);
  Il = !0;
  try {
    return rg(e, t, n);
  } finally {
    Il = !1, (oo !== null || io !== null) && (og(), ng());
  }
}
function xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $s(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var zc = !1;
if (gn) try {
  var Bo = {};
  Object.defineProperty(Bo, "passive", { get: function() {
    zc = !0;
  } }), window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
} catch {
  zc = !1;
}
function pC(e, t, n, r, o, i, a, s, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var ai = !1, os = null, is = !1, Fc = null, mC = { onError: function(e) {
  ai = !0, os = e;
} };
function hC(e, t, n, r, o, i, a, s, c) {
  ai = !1, os = null, pC.apply(mC, arguments);
}
function gC(e, t, n, r, o, i, a, s, c) {
  if (hC.apply(this, arguments), ai) {
    if (ai) {
      var u = os;
      ai = !1, os = null;
    } else throw Error(A(198));
    is || (is = !0, Fc = u);
  }
}
function jr(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ag(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cp(e) {
  if (jr(e) !== e) throw Error(A(188));
}
function vC(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jr(e), t === null) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Cp(o), e;
        if (i === r) return Cp(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function sg(e) {
  return e = vC(e), e !== null ? lg(e) : null;
}
function lg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cg = gt.unstable_scheduleCallback, Sp = gt.unstable_cancelCallback, xC = gt.unstable_shouldYield, wC = gt.unstable_requestPaint, je = gt.unstable_now, yC = gt.unstable_getCurrentPriorityLevel, ad = gt.unstable_ImmediatePriority, ug = gt.unstable_UserBlockingPriority, as = gt.unstable_NormalPriority, bC = gt.unstable_LowPriority, dg = gt.unstable_IdlePriority, Is = null, Kt = null;
function CC(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
    Kt.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Dt = Math.clz32 ? Math.clz32 : PC, SC = Math.log, kC = Math.LN2;
function PC(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (SC(e) / kC | 0) | 0;
}
var va = 64, xa = 4194304;
function ni(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ss(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = ni(s) : (i &= a, i !== 0 && (r = ni(i)));
  } else a = n & ~o, a !== 0 ? r = ni(a) : i !== 0 && (r = ni(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Dt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function EC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jC(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - Dt(i), s = 1 << a, c = o[a];
    c === -1 ? (!(s & n) || s & r) && (o[a] = EC(s, t)) : c <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Lc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fg() {
  var e = va;
  return va <<= 1, !(va & 4194240) && (va = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = n;
}
function NC(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function sd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ue = 0;
function pg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var mg, ld, hg, gg, vg, Vc = !1, wa = [], Ln = null, Vn = null, Bn = null, wi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map(), On = [], TC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ln = null;
      break;
    case "dragenter":
    case "dragleave":
      Vn = null;
      break;
    case "mouseover":
    case "mouseout":
      Bn = null;
      break;
    case "pointerover":
    case "pointerout":
      wi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yi.delete(t.pointerId);
  }
}
function Ho(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Gi(t), t !== null && ld(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function RC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Ln = Ho(Ln, e, t, n, r, o), !0;
    case "dragenter":
      return Vn = Ho(Vn, e, t, n, r, o), !0;
    case "mouseover":
      return Bn = Ho(Bn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return wi.set(i, Ho(wi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, yi.set(i, Ho(yi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function xg(e) {
  var t = dr(e.target);
  if (t !== null) {
    var n = jr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ag(n), t !== null) {
          e.blockedOn = t, vg(e.priority, function() {
            hg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Va(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Oc = r, n.target.dispatchEvent(r), Oc = null;
    } else return t = Gi(n), t !== null && ld(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Pp(e, t, n) {
  Va(e) && n.delete(t);
}
function MC() {
  Vc = !1, Ln !== null && Va(Ln) && (Ln = null), Vn !== null && Va(Vn) && (Vn = null), Bn !== null && Va(Bn) && (Bn = null), wi.forEach(Pp), yi.forEach(Pp);
}
function Uo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Vc || (Vc = !0, gt.unstable_scheduleCallback(gt.unstable_NormalPriority, MC)));
}
function bi(e) {
  function t(o) {
    return Uo(o, e);
  }
  if (0 < wa.length) {
    Uo(wa[0], e);
    for (var n = 1; n < wa.length; n++) {
      var r = wa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ln !== null && Uo(Ln, e), Vn !== null && Uo(Vn, e), Bn !== null && Uo(Bn, e), wi.forEach(t), yi.forEach(t), n = 0; n < On.length; n++) r = On[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < On.length && (n = On[0], n.blockedOn === null); ) xg(n), n.blockedOn === null && On.shift();
}
var ao = Pn.ReactCurrentBatchConfig, ls = !0;
function _C(e, t, n, r) {
  var o = ue, i = ao.transition;
  ao.transition = null;
  try {
    ue = 1, cd(e, t, n, r);
  } finally {
    ue = o, ao.transition = i;
  }
}
function IC(e, t, n, r) {
  var o = ue, i = ao.transition;
  ao.transition = null;
  try {
    ue = 4, cd(e, t, n, r);
  } finally {
    ue = o, ao.transition = i;
  }
}
function cd(e, t, n, r) {
  if (ls) {
    var o = Bc(e, t, n, r);
    if (o === null) Ul(e, t, r, cs, n), kp(e, r);
    else if (RC(o, e, t, n, r)) r.stopPropagation();
    else if (kp(e, r), t & 4 && -1 < TC.indexOf(e)) {
      for (; o !== null; ) {
        var i = Gi(o);
        if (i !== null && mg(i), i = Bc(e, t, n, r), i === null && Ul(e, t, r, cs, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var cs = null;
function Bc(e, t, n, r) {
  if (cs = null, e = id(r), e = dr(e), e !== null) if (t = jr(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ag(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return cs = e, null;
}
function wg(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yC()) {
        case ad:
          return 1;
        case ug:
          return 4;
        case as:
        case bC:
          return 16;
        case dg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zn = null, ud = null, Ba = null;
function yg() {
  if (Ba) return Ba;
  var e, t = ud, n = t.length, r, o = "value" in zn ? zn.value : zn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++) ;
  return Ba = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ha(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ya() {
  return !0;
}
function Ep() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ya : Ep, this.isPropagationStopped = Ep, this;
  }
  return Se(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ya);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ya);
  }, persist: function() {
  }, isPersistent: ya }), t;
}
var Eo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, dd = xt(Eo), Ui = Se({}, Eo, { view: 0, detail: 0 }), AC = xt(Ui), Dl, Ol, Go, As = Se({}, Ui, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Go && (Go && e.type === "mousemove" ? (Dl = e.screenX - Go.screenX, Ol = e.screenY - Go.screenY) : Ol = Dl = 0, Go = e), Dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ol;
} }), jp = xt(As), DC = Se({}, As, { dataTransfer: 0 }), OC = xt(DC), $C = Se({}, Ui, { relatedTarget: 0 }), $l = xt($C), zC = Se({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), FC = xt(zC), LC = Se({}, Eo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), VC = xt(LC), BC = Se({}, Eo, { data: 0 }), Np = xt(BC), HC = {
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
}, UC = {
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
}, GC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function WC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = GC[e]) ? !!t[e] : !1;
}
function fd() {
  return WC;
}
var KC = Se({}, Ui, { key: function(e) {
  if (e.key) {
    var t = HC[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ha(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? UC[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fd, charCode: function(e) {
  return e.type === "keypress" ? Ha(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ha(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), YC = xt(KC), XC = Se({}, As, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tp = xt(XC), qC = Se({}, Ui, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fd }), QC = xt(qC), ZC = Se({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), JC = xt(ZC), eS = Se({}, As, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), tS = xt(eS), nS = [9, 13, 27, 32], pd = gn && "CompositionEvent" in window, si = null;
gn && "documentMode" in document && (si = document.documentMode);
var rS = gn && "TextEvent" in window && !si, bg = gn && (!pd || si && 8 < si && 11 >= si), Rp = " ", Mp = !1;
function Cg(e, t) {
  switch (e) {
    case "keyup":
      return nS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Kr = !1;
function oS(e, t) {
  switch (e) {
    case "compositionend":
      return Sg(t);
    case "keypress":
      return t.which !== 32 ? null : (Mp = !0, Rp);
    case "textInput":
      return e = t.data, e === Rp && Mp ? null : e;
    default:
      return null;
  }
}
function iS(e, t) {
  if (Kr) return e === "compositionend" || !pd && Cg(e, t) ? (e = yg(), Ba = ud = zn = null, Kr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var aS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _p(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!aS[e.type] : t === "textarea";
}
function kg(e, t, n, r) {
  tg(r), t = us(t, "onChange"), 0 < t.length && (n = new dd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var li = null, Ci = null;
function sS(e) {
  Dg(e, 0);
}
function Ds(e) {
  var t = qr(e);
  if (Yh(t)) return e;
}
function lS(e, t) {
  if (e === "change") return t;
}
var Pg = !1;
if (gn) {
  var zl;
  if (gn) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var Ip = document.createElement("div");
      Ip.setAttribute("oninput", "return;"), Fl = typeof Ip.oninput == "function";
    }
    zl = Fl;
  } else zl = !1;
  Pg = zl && (!document.documentMode || 9 < document.documentMode);
}
function Ap() {
  li && (li.detachEvent("onpropertychange", Eg), Ci = li = null);
}
function Eg(e) {
  if (e.propertyName === "value" && Ds(Ci)) {
    var t = [];
    kg(t, Ci, e, id(e)), ig(sS, t);
  }
}
function cS(e, t, n) {
  e === "focusin" ? (Ap(), li = t, Ci = n, li.attachEvent("onpropertychange", Eg)) : e === "focusout" && Ap();
}
function uS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ds(Ci);
}
function dS(e, t) {
  if (e === "click") return Ds(t);
}
function fS(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function pS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var $t = typeof Object.is == "function" ? Object.is : pS;
function Si(e, t) {
  if ($t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!kc.call(t, o) || !$t(e[o], t[o])) return !1;
  }
  return !0;
}
function Dp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Op(e, t) {
  var n = Dp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Dp(n);
  }
}
function jg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ng() {
  for (var e = window, t = rs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = rs(e.document);
  }
  return t;
}
function md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function mS(e) {
  var t = Ng(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && jg(n.ownerDocument.documentElement, n)) {
    if (r !== null && md(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Op(n, i);
        var a = Op(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var hS = gn && "documentMode" in document && 11 >= document.documentMode, Yr = null, Hc = null, ci = null, Uc = !1;
function $p(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Uc || Yr == null || Yr !== rs(r) || (r = Yr, "selectionStart" in r && md(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ci && Si(ci, r) || (ci = r, r = us(Hc, "onSelect"), 0 < r.length && (t = new dd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yr)));
}
function ba(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xr = { animationend: ba("Animation", "AnimationEnd"), animationiteration: ba("Animation", "AnimationIteration"), animationstart: ba("Animation", "AnimationStart"), transitionend: ba("Transition", "TransitionEnd") }, Ll = {}, Tg = {};
gn && (Tg = document.createElement("div").style, "AnimationEvent" in window || (delete Xr.animationend.animation, delete Xr.animationiteration.animation, delete Xr.animationstart.animation), "TransitionEvent" in window || delete Xr.transitionend.transition);
function Os(e) {
  if (Ll[e]) return Ll[e];
  if (!Xr[e]) return e;
  var t = Xr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tg) return Ll[e] = t[n];
  return e;
}
var Rg = Os("animationend"), Mg = Os("animationiteration"), _g = Os("animationstart"), Ig = Os("transitionend"), Ag = /* @__PURE__ */ new Map(), zp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function nr(e, t) {
  Ag.set(e, t), Er(t, [e]);
}
for (var Vl = 0; Vl < zp.length; Vl++) {
  var Bl = zp[Vl], gS = Bl.toLowerCase(), vS = Bl[0].toUpperCase() + Bl.slice(1);
  nr(gS, "on" + vS);
}
nr(Rg, "onAnimationEnd");
nr(Mg, "onAnimationIteration");
nr(_g, "onAnimationStart");
nr("dblclick", "onDoubleClick");
nr("focusin", "onFocus");
nr("focusout", "onBlur");
nr(Ig, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
Er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
function Fp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, gC(r, t, void 0, e), e.currentTarget = null;
}
function Dg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var a = r.length - 1; 0 <= a; a--) {
        var s = r[a], c = s.instance, u = s.currentTarget;
        if (s = s.listener, c !== i && o.isPropagationStopped()) break e;
        Fp(o, s, u), i = c;
      }
      else for (a = 0; a < r.length; a++) {
        if (s = r[a], c = s.instance, u = s.currentTarget, s = s.listener, c !== i && o.isPropagationStopped()) break e;
        Fp(o, s, u), i = c;
      }
    }
  }
  if (is) throw e = Fc, is = !1, Fc = null, e;
}
function ve(e, t) {
  var n = t[Xc];
  n === void 0 && (n = t[Xc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Og(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), Og(n, e, r, t);
}
var Ca = "_reactListening" + Math.random().toString(36).slice(2);
function ki(e) {
  if (!e[Ca]) {
    e[Ca] = !0, Hh.forEach(function(n) {
      n !== "selectionchange" && (xS.has(n) || Hl(n, !1, e), Hl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ca] || (t[Ca] = !0, Hl("selectionchange", !1, t));
  }
}
function Og(e, t, n, r) {
  switch (wg(t)) {
    case 1:
      var o = _C;
      break;
    case 4:
      o = IC;
      break;
    default:
      o = cd;
  }
  n = o.bind(null, t, n, e), o = void 0, !zc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var a = r.tag;
    if (a === 3 || a === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (a === 4) for (a = r.return; a !== null; ) {
        var c = a.tag;
        if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o)) return;
        a = a.return;
      }
      for (; s !== null; ) {
        if (a = dr(s), a === null) return;
        if (c = a.tag, c === 5 || c === 6) {
          r = i = a;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  ig(function() {
    var u = i, m = id(n), p = [];
    e: {
      var f = Ag.get(e);
      if (f !== void 0) {
        var h = dd, x = e;
        switch (e) {
          case "keypress":
            if (Ha(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = YC;
            break;
          case "focusin":
            x = "focus", h = $l;
            break;
          case "focusout":
            x = "blur", h = $l;
            break;
          case "beforeblur":
          case "afterblur":
            h = $l;
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
            h = jp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = OC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = QC;
            break;
          case Rg:
          case Mg:
          case _g:
            h = FC;
            break;
          case Ig:
            h = JC;
            break;
          case "scroll":
            h = AC;
            break;
          case "wheel":
            h = tS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = VC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Tp;
        }
        var v = (t & 4) !== 0, b = !v && e === "scroll", g = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var y = u, w; y !== null; ) {
          w = y;
          var C = w.stateNode;
          if (w.tag === 5 && C !== null && (w = C, g !== null && (C = xi(y, g), C != null && v.push(Pi(y, C, w)))), b) break;
          y = y.return;
        }
        0 < v.length && (f = new h(f, x, null, n, m), p.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== Oc && (x = n.relatedTarget || n.fromElement) && (dr(x) || x[vn])) break e;
        if ((h || f) && (f = m.window === m ? m : (f = m.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (x = n.relatedTarget || n.toElement, h = u, x = x ? dr(x) : null, x !== null && (b = jr(x), x !== b || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null, x = u), h !== x)) {
          if (v = jp, C = "onMouseLeave", g = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (v = Tp, C = "onPointerLeave", g = "onPointerEnter", y = "pointer"), b = h == null ? f : qr(h), w = x == null ? f : qr(x), f = new v(C, y + "leave", h, n, m), f.target = b, f.relatedTarget = w, C = null, dr(m) === u && (v = new v(g, y + "enter", x, n, m), v.target = w, v.relatedTarget = b, C = v), b = C, h && x) t: {
            for (v = h, g = x, y = 0, w = v; w; w = Dr(w)) y++;
            for (w = 0, C = g; C; C = Dr(C)) w++;
            for (; 0 < y - w; ) v = Dr(v), y--;
            for (; 0 < w - y; ) g = Dr(g), w--;
            for (; y--; ) {
              if (v === g || g !== null && v === g.alternate) break t;
              v = Dr(v), g = Dr(g);
            }
            v = null;
          }
          else v = null;
          h !== null && Lp(p, f, h, v, !1), x !== null && b !== null && Lp(p, b, x, v, !0);
        }
      }
      e: {
        if (f = u ? qr(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var S = lS;
        else if (_p(f)) if (Pg) S = fS;
        else {
          S = uS;
          var k = cS;
        }
        else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = dS);
        if (S && (S = S(e, u))) {
          kg(p, S, n, m);
          break e;
        }
        k && k(e, f, u), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Mc(f, "number", f.value);
      }
      switch (k = u ? qr(u) : window, e) {
        case "focusin":
          (_p(k) || k.contentEditable === "true") && (Yr = k, Hc = u, ci = null);
          break;
        case "focusout":
          ci = Hc = Yr = null;
          break;
        case "mousedown":
          Uc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Uc = !1, $p(p, n, m);
          break;
        case "selectionchange":
          if (hS) break;
        case "keydown":
        case "keyup":
          $p(p, n, m);
      }
      var P;
      if (pd) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else Kr ? Cg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (bg && n.locale !== "ko" && (Kr || E !== "onCompositionStart" ? E === "onCompositionEnd" && Kr && (P = yg()) : (zn = m, ud = "value" in zn ? zn.value : zn.textContent, Kr = !0)), k = us(u, E), 0 < k.length && (E = new Np(E, e, null, n, m), p.push({ event: E, listeners: k }), P ? E.data = P : (P = Sg(n), P !== null && (E.data = P)))), (P = rS ? oS(e, n) : iS(e, n)) && (u = us(u, "onBeforeInput"), 0 < u.length && (m = new Np("onBeforeInput", "beforeinput", null, n, m), p.push({ event: m, listeners: u }), m.data = P));
    }
    Dg(p, t);
  });
}
function Pi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = xi(e, n), i != null && r.unshift(Pi(e, i, o)), i = xi(e, t), i != null && r.push(Pi(e, i, o))), e = e.return;
  }
  return r;
}
function Dr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lp(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, c = s.alternate, u = s.stateNode;
    if (c !== null && c === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (c = xi(n, i), c != null && a.unshift(Pi(n, c, s))) : o || (c = xi(n, i), c != null && a.push(Pi(n, c, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var wS = /\r\n?/g, yS = /\u0000|\uFFFD/g;
function Vp(e) {
  return (typeof e == "string" ? e : "" + e).replace(wS, `
`).replace(yS, "");
}
function Sa(e, t, n) {
  if (t = Vp(t), Vp(e) !== t && n) throw Error(A(425));
}
function ds() {
}
var Gc = null, Wc = null;
function Kc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Yc = typeof setTimeout == "function" ? setTimeout : void 0, bS = typeof clearTimeout == "function" ? clearTimeout : void 0, Bp = typeof Promise == "function" ? Promise : void 0, CS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bp < "u" ? function(e) {
  return Bp.resolve(null).then(e).catch(SS);
} : Yc;
function SS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), bi(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  bi(t);
}
function Hn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jo = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + jo, Ei = "__reactProps$" + jo, vn = "__reactContainer$" + jo, Xc = "__reactEvents$" + jo, kS = "__reactListeners$" + jo, PS = "__reactHandles$" + jo;
function dr(e) {
  var t = e[Ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[vn] || n[Ht]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Hp(e); e !== null; ) {
        if (n = e[Ht]) return n;
        e = Hp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Gi(e) {
  return e = e[Ht] || e[vn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function $s(e) {
  return e[Ei] || null;
}
var qc = [], Qr = -1;
function rr(e) {
  return { current: e };
}
function xe(e) {
  0 > Qr || (e.current = qc[Qr], qc[Qr] = null, Qr--);
}
function me(e, t) {
  Qr++, qc[Qr] = e.current, e.current = t;
}
var qn = {}, Qe = rr(qn), it = rr(!1), gr = qn;
function mo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function at(e) {
  return e = e.childContextTypes, e != null;
}
function fs() {
  xe(it), xe(Qe);
}
function Up(e, t, n) {
  if (Qe.current !== qn) throw Error(A(168));
  me(Qe, t), me(it, n);
}
function $g(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, cC(e) || "Unknown", o));
  return Se({}, n, r);
}
function ps(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn, gr = Qe.current, me(Qe, e), me(it, it.current), !0;
}
function Gp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = $g(e, t, gr), r.__reactInternalMemoizedMergedChildContext = e, xe(it), xe(Qe), me(Qe, e)) : xe(it), me(it, n);
}
var ln = null, zs = !1, Wl = !1;
function zg(e) {
  ln === null ? ln = [e] : ln.push(e);
}
function ES(e) {
  zs = !0, zg(e);
}
function or() {
  if (!Wl && ln !== null) {
    Wl = !0;
    var e = 0, t = ue;
    try {
      var n = ln;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ln = null, zs = !1;
    } catch (o) {
      throw ln !== null && (ln = ln.slice(e + 1)), cg(ad, or), o;
    } finally {
      ue = t, Wl = !1;
    }
  }
  return null;
}
var Zr = [], Jr = 0, ms = null, hs = 0, bt = [], Ct = 0, vr = null, cn = 1, un = "";
function cr(e, t) {
  Zr[Jr++] = hs, Zr[Jr++] = ms, ms = e, hs = t;
}
function Fg(e, t, n) {
  bt[Ct++] = cn, bt[Ct++] = un, bt[Ct++] = vr, vr = e;
  var r = cn;
  e = un;
  var o = 32 - Dt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Dt(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, cn = 1 << 32 - Dt(t) + o | n << o | r, un = i + e;
  } else cn = 1 << i | n << o | r, un = e;
}
function hd(e) {
  e.return !== null && (cr(e, 1), Fg(e, 1, 0));
}
function gd(e) {
  for (; e === ms; ) ms = Zr[--Jr], Zr[Jr] = null, hs = Zr[--Jr], Zr[Jr] = null;
  for (; e === vr; ) vr = bt[--Ct], bt[Ct] = null, un = bt[--Ct], bt[Ct] = null, cn = bt[--Ct], bt[Ct] = null;
}
var mt = null, pt = null, ye = !1, It = null;
function Lg(e, t) {
  var n = kt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Wp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, mt = e, pt = Hn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, mt = e, pt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vr !== null ? { id: cn, overflow: un } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = kt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, mt = e, pt = null, !0) : !1;
    default:
      return !1;
  }
}
function Qc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zc(e) {
  if (ye) {
    var t = pt;
    if (t) {
      var n = t;
      if (!Wp(e, t)) {
        if (Qc(e)) throw Error(A(418));
        t = Hn(n.nextSibling);
        var r = mt;
        t && Wp(e, t) ? Lg(r, n) : (e.flags = e.flags & -4097 | 2, ye = !1, mt = e);
      }
    } else {
      if (Qc(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, ye = !1, mt = e;
    }
  }
}
function Kp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  mt = e;
}
function ka(e) {
  if (e !== mt) return !1;
  if (!ye) return Kp(e), ye = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Kc(e.type, e.memoizedProps)), t && (t = pt)) {
    if (Qc(e)) throw Vg(), Error(A(418));
    for (; t; ) Lg(e, t), t = Hn(t.nextSibling);
  }
  if (Kp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = Hn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = mt ? Hn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vg() {
  for (var e = pt; e; ) e = Hn(e.nextSibling);
}
function ho() {
  pt = mt = null, ye = !1;
}
function vd(e) {
  It === null ? It = [e] : It.push(e);
}
var jS = Pn.ReactCurrentBatchConfig;
function Wo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Pa(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Yp(e) {
  var t = e._init;
  return t(e._payload);
}
function Bg(e) {
  function t(g, y) {
    if (e) {
      var w = g.deletions;
      w === null ? (g.deletions = [y], g.flags |= 16) : w.push(y);
    }
  }
  function n(g, y) {
    if (!e) return null;
    for (; y !== null; ) t(g, y), y = y.sibling;
    return null;
  }
  function r(g, y) {
    for (g = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? g.set(y.key, y) : g.set(y.index, y), y = y.sibling;
    return g;
  }
  function o(g, y) {
    return g = Kn(g, y), g.index = 0, g.sibling = null, g;
  }
  function i(g, y, w) {
    return g.index = w, e ? (w = g.alternate, w !== null ? (w = w.index, w < y ? (g.flags |= 2, y) : w) : (g.flags |= 2, y)) : (g.flags |= 1048576, y);
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, y, w, C) {
    return y === null || y.tag !== 6 ? (y = Jl(w, g.mode, C), y.return = g, y) : (y = o(y, w), y.return = g, y);
  }
  function c(g, y, w, C) {
    var S = w.type;
    return S === Wr ? m(g, y, w.props.children, C, w.key) : y !== null && (y.elementType === S || typeof S == "object" && S !== null && S.$$typeof === An && Yp(S) === y.type) ? (C = o(y, w.props), C.ref = Wo(g, y, w), C.return = g, C) : (C = qa(w.type, w.key, w.props, null, g.mode, C), C.ref = Wo(g, y, w), C.return = g, C);
  }
  function u(g, y, w, C) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== w.containerInfo || y.stateNode.implementation !== w.implementation ? (y = ec(w, g.mode, C), y.return = g, y) : (y = o(y, w.children || []), y.return = g, y);
  }
  function m(g, y, w, C, S) {
    return y === null || y.tag !== 7 ? (y = hr(w, g.mode, C, S), y.return = g, y) : (y = o(y, w), y.return = g, y);
  }
  function p(g, y, w) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return y = Jl("" + y, g.mode, w), y.return = g, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ma:
          return w = qa(y.type, y.key, y.props, null, g.mode, w), w.ref = Wo(g, null, y), w.return = g, w;
        case Gr:
          return y = ec(y, g.mode, w), y.return = g, y;
        case An:
          var C = y._init;
          return p(g, C(y._payload), w);
      }
      if (ti(y) || Vo(y)) return y = hr(y, g.mode, w, null), y.return = g, y;
      Pa(g, y);
    }
    return null;
  }
  function f(g, y, w, C) {
    var S = y !== null ? y.key : null;
    if (typeof w == "string" && w !== "" || typeof w == "number") return S !== null ? null : s(g, y, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ma:
          return w.key === S ? c(g, y, w, C) : null;
        case Gr:
          return w.key === S ? u(g, y, w, C) : null;
        case An:
          return S = w._init, f(
            g,
            y,
            S(w._payload),
            C
          );
      }
      if (ti(w) || Vo(w)) return S !== null ? null : m(g, y, w, C, null);
      Pa(g, w);
    }
    return null;
  }
  function h(g, y, w, C, S) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return g = g.get(w) || null, s(y, g, "" + C, S);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ma:
          return g = g.get(C.key === null ? w : C.key) || null, c(y, g, C, S);
        case Gr:
          return g = g.get(C.key === null ? w : C.key) || null, u(y, g, C, S);
        case An:
          var k = C._init;
          return h(g, y, w, k(C._payload), S);
      }
      if (ti(C) || Vo(C)) return g = g.get(w) || null, m(y, g, C, S, null);
      Pa(y, C);
    }
    return null;
  }
  function x(g, y, w, C) {
    for (var S = null, k = null, P = y, E = y = 0, R = null; P !== null && E < w.length; E++) {
      P.index > E ? (R = P, P = null) : R = P.sibling;
      var T = f(g, P, w[E], C);
      if (T === null) {
        P === null && (P = R);
        break;
      }
      e && P && T.alternate === null && t(g, P), y = i(T, y, E), k === null ? S = T : k.sibling = T, k = T, P = R;
    }
    if (E === w.length) return n(g, P), ye && cr(g, E), S;
    if (P === null) {
      for (; E < w.length; E++) P = p(g, w[E], C), P !== null && (y = i(P, y, E), k === null ? S = P : k.sibling = P, k = P);
      return ye && cr(g, E), S;
    }
    for (P = r(g, P); E < w.length; E++) R = h(P, g, E, w[E], C), R !== null && (e && R.alternate !== null && P.delete(R.key === null ? E : R.key), y = i(R, y, E), k === null ? S = R : k.sibling = R, k = R);
    return e && P.forEach(function(O) {
      return t(g, O);
    }), ye && cr(g, E), S;
  }
  function v(g, y, w, C) {
    var S = Vo(w);
    if (typeof S != "function") throw Error(A(150));
    if (w = S.call(w), w == null) throw Error(A(151));
    for (var k = S = null, P = y, E = y = 0, R = null, T = w.next(); P !== null && !T.done; E++, T = w.next()) {
      P.index > E ? (R = P, P = null) : R = P.sibling;
      var O = f(g, P, T.value, C);
      if (O === null) {
        P === null && (P = R);
        break;
      }
      e && P && O.alternate === null && t(g, P), y = i(O, y, E), k === null ? S = O : k.sibling = O, k = O, P = R;
    }
    if (T.done) return n(
      g,
      P
    ), ye && cr(g, E), S;
    if (P === null) {
      for (; !T.done; E++, T = w.next()) T = p(g, T.value, C), T !== null && (y = i(T, y, E), k === null ? S = T : k.sibling = T, k = T);
      return ye && cr(g, E), S;
    }
    for (P = r(g, P); !T.done; E++, T = w.next()) T = h(P, g, E, T.value, C), T !== null && (e && T.alternate !== null && P.delete(T.key === null ? E : T.key), y = i(T, y, E), k === null ? S = T : k.sibling = T, k = T);
    return e && P.forEach(function(M) {
      return t(g, M);
    }), ye && cr(g, E), S;
  }
  function b(g, y, w, C) {
    if (typeof w == "object" && w !== null && w.type === Wr && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ma:
          e: {
            for (var S = w.key, k = y; k !== null; ) {
              if (k.key === S) {
                if (S = w.type, S === Wr) {
                  if (k.tag === 7) {
                    n(g, k.sibling), y = o(k, w.props.children), y.return = g, g = y;
                    break e;
                  }
                } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === An && Yp(S) === k.type) {
                  n(g, k.sibling), y = o(k, w.props), y.ref = Wo(g, k, w), y.return = g, g = y;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            w.type === Wr ? (y = hr(w.props.children, g.mode, C, w.key), y.return = g, g = y) : (C = qa(w.type, w.key, w.props, null, g.mode, C), C.ref = Wo(g, y, w), C.return = g, g = C);
          }
          return a(g);
        case Gr:
          e: {
            for (k = w.key; y !== null; ) {
              if (y.key === k) if (y.tag === 4 && y.stateNode.containerInfo === w.containerInfo && y.stateNode.implementation === w.implementation) {
                n(g, y.sibling), y = o(y, w.children || []), y.return = g, g = y;
                break e;
              } else {
                n(g, y);
                break;
              }
              else t(g, y);
              y = y.sibling;
            }
            y = ec(w, g.mode, C), y.return = g, g = y;
          }
          return a(g);
        case An:
          return k = w._init, b(g, y, k(w._payload), C);
      }
      if (ti(w)) return x(g, y, w, C);
      if (Vo(w)) return v(g, y, w, C);
      Pa(g, w);
    }
    return typeof w == "string" && w !== "" || typeof w == "number" ? (w = "" + w, y !== null && y.tag === 6 ? (n(g, y.sibling), y = o(y, w), y.return = g, g = y) : (n(g, y), y = Jl(w, g.mode, C), y.return = g, g = y), a(g)) : n(g, y);
  }
  return b;
}
var go = Bg(!0), Hg = Bg(!1), gs = rr(null), vs = null, eo = null, xd = null;
function wd() {
  xd = eo = vs = null;
}
function yd(e) {
  var t = gs.current;
  xe(gs), e._currentValue = t;
}
function Jc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function so(e, t) {
  vs = e, xd = eo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ot = !0), e.firstContext = null);
}
function Et(e) {
  var t = e._currentValue;
  if (xd !== e) if (e = { context: e, memoizedValue: t, next: null }, eo === null) {
    if (vs === null) throw Error(A(308));
    eo = e, vs.dependencies = { lanes: 0, firstContext: e };
  } else eo = eo.next = e;
  return t;
}
var fr = null;
function bd(e) {
  fr === null ? fr = [e] : fr.push(e);
}
function Ug(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, bd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, xn(e, r);
}
function xn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Dn = !1;
function Cd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Gg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, se & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, xn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, bd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, xn(e, n);
}
function Ua(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sd(e, n);
  }
}
function Xp(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function xs(e, t, n, r) {
  var o = e.updateQueue;
  Dn = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var c = s, u = c.next;
    c.next = null, a === null ? i = u : a.next = u, a = c;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== a && (s === null ? m.firstBaseUpdate = u : s.next = u, m.lastBaseUpdate = c));
  }
  if (i !== null) {
    var p = o.baseState;
    a = 0, m = u = c = null, s = i;
    do {
      var f = s.lane, h = s.eventTime;
      if ((r & f) === f) {
        m !== null && (m = m.next = {
          eventTime: h,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var x = e, v = s;
          switch (f = t, h = n, v.tag) {
            case 1:
              if (x = v.payload, typeof x == "function") {
                p = x.call(h, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = v.payload, f = typeof x == "function" ? x.call(h, p, f) : x, f == null) break e;
              p = Se({}, p, f);
              break e;
            case 2:
              Dn = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else h = { eventTime: h, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (u = m = h, c = p) : m = m.next = h, a |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (m === null && (c = p), o.baseState = c, o.firstBaseUpdate = u, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    wr |= a, e.lanes = a, e.memoizedState = p;
  }
}
function qp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var Wi = {}, Yt = rr(Wi), ji = rr(Wi), Ni = rr(Wi);
function pr(e) {
  if (e === Wi) throw Error(A(174));
  return e;
}
function Sd(e, t) {
  switch (me(Ni, t), me(ji, e), me(Yt, Wi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ic(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ic(t, e);
  }
  xe(Yt), me(Yt, t);
}
function vo() {
  xe(Yt), xe(ji), xe(Ni);
}
function Wg(e) {
  pr(Ni.current);
  var t = pr(Yt.current), n = Ic(t, e.type);
  t !== n && (me(ji, e), me(Yt, n));
}
function kd(e) {
  ji.current === e && (xe(Yt), xe(ji));
}
var be = rr(0);
function ws(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Kl = [];
function Pd() {
  for (var e = 0; e < Kl.length; e++) Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Ga = Pn.ReactCurrentDispatcher, Yl = Pn.ReactCurrentBatchConfig, xr = 0, Ce = null, Ie = null, Oe = null, ys = !1, ui = !1, Ti = 0, NS = 0;
function Ke() {
  throw Error(A(321));
}
function Ed(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!$t(e[n], t[n])) return !1;
  return !0;
}
function jd(e, t, n, r, o, i) {
  if (xr = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ga.current = e === null || e.memoizedState === null ? _S : IS, e = n(r, o), ui) {
    i = 0;
    do {
      if (ui = !1, Ti = 0, 25 <= i) throw Error(A(301));
      i += 1, Oe = Ie = null, t.updateQueue = null, Ga.current = AS, e = n(r, o);
    } while (ui);
  }
  if (Ga.current = bs, t = Ie !== null && Ie.next !== null, xr = 0, Oe = Ie = Ce = null, ys = !1, t) throw Error(A(300));
  return e;
}
function Nd() {
  var e = Ti !== 0;
  return Ti = 0, e;
}
function Bt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Oe === null ? Ce.memoizedState = Oe = e : Oe = Oe.next = e, Oe;
}
function jt() {
  if (Ie === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Oe === null ? Ce.memoizedState : Oe.next;
  if (t !== null) Oe = t, Ie = e;
  else {
    if (e === null) throw Error(A(310));
    Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Oe === null ? Ce.memoizedState = Oe = e : Oe = Oe.next = e;
  }
  return Oe;
}
function Ri(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = jt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Ie, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, c = null, u = i;
    do {
      var m = u.lane;
      if ((xr & m) === m) c !== null && (c = c.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        c === null ? (s = c = p, a = r) : c = c.next = p, Ce.lanes |= m, wr |= m;
      }
      u = u.next;
    } while (u !== null && u !== i);
    c === null ? a = r : c.next = s, $t(r, t.memoizedState) || (ot = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ce.lanes |= i, wr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
  var t = jt(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    $t(i, t.memoizedState) || (ot = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Kg() {
}
function Yg(e, t) {
  var n = Ce, r = jt(), o = t(), i = !$t(r.memoizedState, o);
  if (i && (r.memoizedState = o, ot = !0), r = r.queue, Td(Qg.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Oe !== null && Oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Mi(9, qg.bind(null, n, r, o, t), void 0, null), Fe === null) throw Error(A(349));
    xr & 30 || Xg(n, t, o);
  }
  return o;
}
function Xg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function qg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Zg(t) && Jg(e);
}
function Qg(e, t, n) {
  return n(function() {
    Zg(t) && Jg(e);
  });
}
function Zg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$t(e, n);
  } catch {
    return !0;
  }
}
function Jg(e) {
  var t = xn(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function Qp(e) {
  var t = Bt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ri, lastRenderedState: e }, t.queue = e, e = e.dispatch = MS.bind(null, Ce, e), [t.memoizedState, e];
}
function Mi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ev() {
  return jt().memoizedState;
}
function Wa(e, t, n, r) {
  var o = Bt();
  Ce.flags |= e, o.memoizedState = Mi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Fs(e, t, n, r) {
  var o = jt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ie !== null) {
    var a = Ie.memoizedState;
    if (i = a.destroy, r !== null && Ed(r, a.deps)) {
      o.memoizedState = Mi(t, n, i, r);
      return;
    }
  }
  Ce.flags |= e, o.memoizedState = Mi(1 | t, n, i, r);
}
function Zp(e, t) {
  return Wa(8390656, 8, e, t);
}
function Td(e, t) {
  return Fs(2048, 8, e, t);
}
function tv(e, t) {
  return Fs(4, 2, e, t);
}
function nv(e, t) {
  return Fs(4, 4, e, t);
}
function rv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ov(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fs(4, 4, rv.bind(null, t, e), n);
}
function Rd() {
}
function iv(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ed(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function av(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ed(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function sv(e, t, n) {
  return xr & 21 ? ($t(n, t) || (n = fg(), Ce.lanes |= n, wr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ot = !0), e.memoizedState = n);
}
function TS(e, t) {
  var n = ue;
  ue = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    ue = n, Yl.transition = r;
  }
}
function lv() {
  return jt().memoizedState;
}
function RS(e, t, n) {
  var r = Wn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cv(e)) uv(t, n);
  else if (n = Ug(e, t, n, r), n !== null) {
    var o = Je();
    Ot(n, e, r, o), dv(n, t, r);
  }
}
function MS(e, t, n) {
  var r = Wn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cv(e)) uv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var a = t.lastRenderedState, s = i(a, n);
      if (o.hasEagerState = !0, o.eagerState = s, $t(s, a)) {
        var c = t.interleaved;
        c === null ? (o.next = o, bd(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Ug(e, t, o, r), n !== null && (o = Je(), Ot(n, e, r, o), dv(n, t, r));
  }
}
function cv(e) {
  var t = e.alternate;
  return e === Ce || t !== null && t === Ce;
}
function uv(e, t) {
  ui = ys = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function dv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, sd(e, n);
  }
}
var bs = { readContext: Et, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, _S = { readContext: Et, useCallback: function(e, t) {
  return Bt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Et, useEffect: Zp, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wa(
    4194308,
    4,
    rv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Bt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Bt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = RS.bind(null, Ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Bt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qp, useDebugValue: Rd, useDeferredValue: function(e) {
  return Bt().memoizedState = e;
}, useTransition: function() {
  var e = Qp(!1), t = e[0];
  return e = TS.bind(null, e[1]), Bt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ce, o = Bt();
  if (ye) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), Fe === null) throw Error(A(349));
    xr & 30 || Xg(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Zp(Qg.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Mi(9, qg.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Bt(), t = Fe.identifierPrefix;
  if (ye) {
    var n = un, r = cn;
    n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ti++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = NS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, IS = {
  readContext: Et,
  useCallback: iv,
  useContext: Et,
  useEffect: Td,
  useImperativeHandle: ov,
  useInsertionEffect: tv,
  useLayoutEffect: nv,
  useMemo: av,
  useReducer: Xl,
  useRef: ev,
  useState: function() {
    return Xl(Ri);
  },
  useDebugValue: Rd,
  useDeferredValue: function(e) {
    var t = jt();
    return sv(t, Ie.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Ri)[0], t = jt().memoizedState;
    return [e, t];
  },
  useMutableSource: Kg,
  useSyncExternalStore: Yg,
  useId: lv,
  unstable_isNewReconciler: !1
}, AS = { readContext: Et, useCallback: iv, useContext: Et, useEffect: Td, useImperativeHandle: ov, useInsertionEffect: tv, useLayoutEffect: nv, useMemo: av, useReducer: ql, useRef: ev, useState: function() {
  return ql(Ri);
}, useDebugValue: Rd, useDeferredValue: function(e) {
  var t = jt();
  return Ie === null ? t.memoizedState = e : sv(t, Ie.memoizedState, e);
}, useTransition: function() {
  var e = ql(Ri)[0], t = jt().memoizedState;
  return [e, t];
}, useMutableSource: Kg, useSyncExternalStore: Yg, useId: lv, unstable_isNewReconciler: !1 };
function Mt(e, t) {
  if (e && e.defaultProps) {
    t = Se({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ls = { isMounted: function(e) {
  return (e = e._reactInternals) ? jr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Je(), o = Wn(e), i = dn(r, o);
  i.payload = t, n != null && (i.callback = n), t = Un(e, i, o), t !== null && (Ot(t, e, o, r), Ua(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Je(), o = Wn(e), i = dn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Un(e, i, o), t !== null && (Ot(t, e, o, r), Ua(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Je(), r = Wn(e), o = dn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Un(e, o, r), t !== null && (Ot(t, e, r, n), Ua(t, e, r));
} };
function Jp(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Si(n, r) || !Si(o, i) : !0;
}
function fv(e, t, n) {
  var r = !1, o = qn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Et(i) : (o = at(t) ? gr : Qe.current, r = t.contextTypes, i = (r = r != null) ? mo(e, o) : qn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ls, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function em(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ls.enqueueReplaceState(t, t.state, null);
}
function tu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Cd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Et(i) : (i = at(t) ? gr : Qe.current, o.context = mo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (eu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ls.enqueueReplaceState(o, o.state, null), xs(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function xo(e, t) {
  try {
    var n = "", r = t;
    do
      n += lC(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var DS = typeof WeakMap == "function" ? WeakMap : Map;
function pv(e, t, n) {
  n = dn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ss || (Ss = !0, fu = r), nu(e, t);
  }, n;
}
function mv(e, t, n) {
  n = dn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      nu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    nu(e, t), typeof r != "function" && (Gn === null ? Gn = /* @__PURE__ */ new Set([this]) : Gn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function tm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new DS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = XS.bind(null, e, t, n), t.then(e, e));
}
function nm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dn(-1, 1), t.tag = 2, Un(n, t, 1))), n.lanes |= 1), e);
}
var OS = Pn.ReactCurrentOwner, ot = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? Hg(t, null, n, r) : go(t, e.child, n, r);
}
function om(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return so(t, o), r = jd(e, t, n, r, i, o), n = Nd(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (ye && n && hd(t), t.flags |= 1, Ze(e, t, r, o), t.child);
}
function im(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !zd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, hv(e, t, i, r, o)) : (e = qa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Si, n(a, r) && e.ref === t.ref) return wn(e, t, o);
  }
  return t.flags |= 1, e = Kn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function hv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Si(i, r) && e.ref === t.ref) if (ot = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (ot = !0);
    else return t.lanes = e.lanes, wn(e, t, o);
  }
  return ru(e, t, n, r, o);
}
function gv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(no, dt), dt |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(no, dt), dt |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, me(no, dt), dt |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, me(no, dt), dt |= r;
  return Ze(e, t, o, n), t.child;
}
function vv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ru(e, t, n, r, o) {
  var i = at(n) ? gr : Qe.current;
  return i = mo(t, i), so(t, o), n = jd(e, t, n, r, i, o), r = Nd(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wn(e, t, o)) : (ye && r && hd(t), t.flags |= 1, Ze(e, t, n, o), t.child);
}
function am(e, t, n, r, o) {
  if (at(n)) {
    var i = !0;
    ps(t);
  } else i = !1;
  if (so(t, o), t.stateNode === null) Ka(e, t), fv(t, n, r), tu(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var c = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Et(u) : (u = at(n) ? gr : Qe.current, u = mo(t, u));
    var m = n.getDerivedStateFromProps, p = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || c !== u) && em(t, a, r, u), Dn = !1;
    var f = t.memoizedState;
    a.state = f, xs(t, r, a, o), c = t.memoizedState, s !== r || f !== c || it.current || Dn ? (typeof m == "function" && (eu(t, n, m, r), c = t.memoizedState), (s = Dn || Jp(t, n, s, r, f, c, u)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), a.props = r, a.state = c, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Gg(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Mt(t.type, s), a.props = u, p = t.pendingProps, f = a.context, c = n.contextType, typeof c == "object" && c !== null ? c = Et(c) : (c = at(n) ? gr : Qe.current, c = mo(t, c));
    var h = n.getDerivedStateFromProps;
    (m = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== p || f !== c) && em(t, a, r, c), Dn = !1, f = t.memoizedState, a.state = f, xs(t, r, a, o);
    var x = t.memoizedState;
    s !== p || f !== x || it.current || Dn ? (typeof h == "function" && (eu(t, n, h, r), x = t.memoizedState), (u = Dn || Jp(t, n, u, r, f, x, c) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, x, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, x, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), a.props = r, a.state = x, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ou(e, t, n, r, i, o);
}
function ou(e, t, n, r, o, i) {
  vv(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Gp(t, n, !1), wn(e, t, i);
  r = t.stateNode, OS.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = go(t, e.child, null, i), t.child = go(t, null, s, i)) : Ze(e, t, s, i), t.memoizedState = r.state, o && Gp(t, n, !0), t.child;
}
function xv(e) {
  var t = e.stateNode;
  t.pendingContext ? Up(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Up(e, t.context, !1), Sd(e, t.containerInfo);
}
function sm(e, t, n, r, o) {
  return ho(), vd(o), t.flags |= 256, Ze(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function au(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wv(e, t, n) {
  var r = t.pendingProps, o = be.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), me(be, o & 1), e === null)
    return Zc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Hs(a, r, 0, null), e = hr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = au(n), t.memoizedState = iu, e) : Md(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return $S(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Kn(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Kn(s, i) : (i = hr(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? au(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = iu, r;
  }
  return i = e.child, e = i.sibling, r = Kn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Md(e, t) {
  return t = Hs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ea(e, t, n, r) {
  return r !== null && vd(r), go(t, e.child, null, n), e = Md(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function $S(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ql(Error(A(422))), Ea(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Hs({ mode: "visible", children: r.children }, o, 0, null), i = hr(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && go(t, e.child, null, a), t.child.memoizedState = au(a), t.memoizedState = iu, i);
  if (!(t.mode & 1)) return Ea(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(A(419)), r = Ql(i, r, void 0), Ea(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, ot || s) {
    if (r = Fe, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, xn(e, o), Ot(r, e, o, -1));
    }
    return $d(), r = Ql(Error(A(421))), Ea(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, pt = Hn(o.nextSibling), mt = t, ye = !0, It = null, e !== null && (bt[Ct++] = cn, bt[Ct++] = un, bt[Ct++] = vr, cn = e.id, un = e.overflow, vr = t), t = Md(t, r.children), t.flags |= 4096, t);
}
function lm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jc(e.return, t, n);
}
function Zl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function yv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ze(e, t, r.children, n), r = be.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && lm(e, n, t);
      else if (e.tag === 19) lm(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (me(be, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ws(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Zl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ws(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Zl(t, !0, n, null, i);
      break;
    case "together":
      Zl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ka(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function wn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), wr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function zS(e, t, n) {
  switch (t.tag) {
    case 3:
      xv(t), ho();
      break;
    case 5:
      Wg(t);
      break;
    case 1:
      at(t.type) && ps(t);
      break;
    case 4:
      Sd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      me(gs, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (me(be, be.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? wv(e, t, n) : (me(be, be.current & 1), e = wn(e, t, n), e !== null ? e.sibling : null);
      me(be, be.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return yv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), me(be, be.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gv(e, t, n);
  }
  return wn(e, t, n);
}
var bv, su, Cv, Sv;
bv = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
su = function() {
};
Cv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, pr(Yt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Tc(e, o), r = Tc(e, r), i = [];
        break;
      case "select":
        o = Se({}, o, { value: void 0 }), r = Se({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = _c(e, o), r = _c(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ds);
    }
    Ac(n, r);
    var a;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (a in s) s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (gi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && c !== s && (c != null || s != null)) if (u === "style") if (s) {
        for (a in s) !s.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
        for (a in c) c.hasOwnProperty(a) && s[a] !== c[a] && (n || (n = {}), n[a] = c[a]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = c;
      else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, c != null && s !== c && (i = i || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (i = i || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (gi.hasOwnProperty(u) ? (c != null && u === "onScroll" && ve("scroll", e), i || s === c || (i = [])) : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Sv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ko(e, t) {
  if (!ye) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function FS(e, t, n) {
  var r = t.pendingProps;
  switch (gd(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ye(t), null;
    case 1:
      return at(t.type) && fs(), Ye(t), null;
    case 3:
      return r = t.stateNode, vo(), xe(it), xe(Qe), Pd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ka(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, It !== null && (hu(It), It = null))), su(e, t), Ye(t), null;
    case 5:
      kd(t);
      var o = pr(Ni.current);
      if (n = t.type, e !== null && t.stateNode != null) Cv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ye(t), null;
        }
        if (e = pr(Yt.current), ka(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ht] = t, r[Ei] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ri.length; o++) ve(ri[o], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              vp(r, i), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ve("invalid", r);
              break;
            case "textarea":
              wp(r, i), ve("invalid", r);
          }
          Ac(n, i), o = null;
          for (var a in i) if (i.hasOwnProperty(a)) {
            var s = i[a];
            a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Sa(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Sa(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : gi.hasOwnProperty(a) && s != null && a === "onScroll" && ve("scroll", r);
          }
          switch (n) {
            case "input":
              ha(r), xp(r, i, !0);
              break;
            case "textarea":
              ha(r), yp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ds);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Ht] = t, e[Ei] = r, bv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Dc(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ri.length; o++) ve(ri[o], e);
                o = r;
                break;
              case "source":
                ve("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), o = r;
                break;
              case "details":
                ve("toggle", e), o = r;
                break;
              case "input":
                vp(e, r), o = Tc(e, r), ve("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Se({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                wp(e, r), o = _c(e, r), ve("invalid", e);
                break;
              default:
                o = r;
            }
            Ac(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var c = s[i];
              i === "style" ? eg(e, c) : i === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Zh(e, c)) : i === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && vi(e, c) : typeof c == "number" && vi(e, "" + c) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (gi.hasOwnProperty(i) ? c != null && i === "onScroll" && ve("scroll", e) : c != null && td(e, i, c, a));
            }
            switch (n) {
              case "input":
                ha(e), xp(e, r, !1);
                break;
              case "textarea":
                ha(e), yp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ro(e, !!r.multiple, i, !1) : r.defaultValue != null && ro(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ds);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) Sv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = pr(Ni.current), pr(Yt.current), ka(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ht] = t, (i = r.nodeValue !== n) && (e = mt, e !== null)) switch (e.tag) {
            case 3:
              Sa(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sa(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ht] = t, t.stateNode = r;
      }
      return Ye(t), null;
    case 13:
      if (xe(be), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ye && pt !== null && t.mode & 1 && !(t.flags & 128)) Vg(), ho(), t.flags |= 98560, i = !1;
        else if (i = ka(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(A(317));
            i[Ht] = t;
          } else ho(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ye(t), i = !1;
        } else It !== null && (hu(It), It = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || be.current & 1 ? De === 0 && (De = 3) : $d())), t.updateQueue !== null && (t.flags |= 4), Ye(t), null);
    case 4:
      return vo(), su(e, t), e === null && ki(t.stateNode.containerInfo), Ye(t), null;
    case 10:
      return yd(t.type._context), Ye(t), null;
    case 17:
      return at(t.type) && fs(), Ye(t), null;
    case 19:
      if (xe(be), i = t.memoizedState, i === null) return Ye(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null) if (r) Ko(i, !1);
      else {
        if (De !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (a = ws(e), a !== null) {
            for (t.flags |= 128, Ko(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return me(be, be.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && je() > wo && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ws(a), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ye) return Ye(t), null;
        } else 2 * je() - i.renderingStartTime > wo && n !== 1073741824 && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = je(), t.sibling = null, n = be.current, me(be, r ? n & 1 | 2 : n & 1), t) : (Ye(t), null);
    case 22:
    case 23:
      return Od(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? dt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function LS(e, t) {
  switch (gd(t), t.tag) {
    case 1:
      return at(t.type) && fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return vo(), xe(it), xe(Qe), Pd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return kd(t), null;
    case 13:
      if (xe(be), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        ho();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(be), null;
    case 4:
      return vo(), null;
    case 10:
      return yd(t.type._context), null;
    case 22:
    case 23:
      return Od(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ja = !1, qe = !1, VS = typeof WeakSet == "function" ? WeakSet : Set, G = null;
function to(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Pe(e, t, r);
  }
  else n.current = null;
}
function lu(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var cm = !1;
function BS(e, t) {
  if (Gc = ls, e = Ng(), md(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var a = 0, s = -1, c = -1, u = 0, m = 0, p = e, f = null;
        t: for (; ; ) {
          for (var h; p !== n || o !== 0 && p.nodeType !== 3 || (s = a + o), p !== i || r !== 0 && p.nodeType !== 3 || (c = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (h = p.firstChild) !== null; )
            f = p, p = h;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === o && (s = a), f === i && ++m === r && (c = a), (h = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = h;
        }
        n = s === -1 || c === -1 ? null : { start: s, end: c };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wc = { focusedElem: e, selectionRange: n }, ls = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
  else for (; G !== null; ) {
    t = G;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var v = x.memoizedProps, b = x.memoizedState, g = t.stateNode, y = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Mt(t.type, v), b);
            g.__reactInternalSnapshotBeforeUpdate = y;
          }
          break;
        case 3:
          var w = t.stateNode.containerInfo;
          w.nodeType === 1 ? w.textContent = "" : w.nodeType === 9 && w.documentElement && w.removeChild(w.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(A(163));
      }
    } catch (C) {
      Pe(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, G = e;
      break;
    }
    G = t.return;
  }
  return x = cm, cm = !1, x;
}
function di(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && lu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Vs(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function kv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, kv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ht], delete t[Ei], delete t[Xc], delete t[kS], delete t[PS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function um(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ds));
  else if (r !== 4 && (e = e.child, e !== null)) for (uu(e, t, n), e = e.sibling; e !== null; ) uu(e, t, n), e = e.sibling;
}
function du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), e = e.sibling;
}
var Be = null, _t = !1;
function Mn(e, t, n) {
  for (n = n.child; n !== null; ) Ev(e, t, n), n = n.sibling;
}
function Ev(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
    Kt.onCommitFiberUnmount(Is, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      qe || to(n, t);
    case 6:
      var r = Be, o = _t;
      Be = null, Mn(e, t, n), Be = r, _t = o, Be !== null && (_t ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null && (_t ? (e = Be, n = n.stateNode, e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n), bi(e)) : Gl(Be, n.stateNode));
      break;
    case 4:
      r = Be, o = _t, Be = n.stateNode.containerInfo, _t = !0, Mn(e, t, n), Be = r, _t = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && lu(n, t, a), o = o.next;
        } while (o !== r);
      }
      Mn(e, t, n);
      break;
    case 1:
      if (!qe && (to(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Pe(n, t, s);
      }
      Mn(e, t, n);
      break;
    case 21:
      Mn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, Mn(e, t, n), qe = r) : Mn(e, t, n);
      break;
    default:
      Mn(e, t, n);
  }
}
function dm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new VS()), t.forEach(function(r) {
      var o = QS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, a = t, s = a;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            Be = s.stateNode, _t = !1;
            break e;
          case 3:
            Be = s.stateNode.containerInfo, _t = !0;
            break e;
          case 4:
            Be = s.stateNode.containerInfo, _t = !0;
            break e;
        }
        s = s.return;
      }
      if (Be === null) throw Error(A(160));
      Ev(i, a, o), Be = null, _t = !1;
      var c = o.alternate;
      c !== null && (c.return = null), o.return = null;
    } catch (u) {
      Pe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jv(t, e), t = t.sibling;
}
function jv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tt(t, e), Lt(e), r & 4) {
        try {
          di(3, e, e.return), Vs(3, e);
        } catch (v) {
          Pe(e, e.return, v);
        }
        try {
          di(5, e, e.return);
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      break;
    case 1:
      Tt(t, e), Lt(e), r & 512 && n !== null && to(n, n.return);
      break;
    case 5:
      if (Tt(t, e), Lt(e), r & 512 && n !== null && to(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          vi(o, "");
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Xh(o, i), Dc(s, a);
          var u = Dc(s, i);
          for (a = 0; a < c.length; a += 2) {
            var m = c[a], p = c[a + 1];
            m === "style" ? eg(o, p) : m === "dangerouslySetInnerHTML" ? Zh(o, p) : m === "children" ? vi(o, p) : td(o, m, p, u);
          }
          switch (s) {
            case "input":
              Rc(o, i);
              break;
            case "textarea":
              qh(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var h = i.value;
              h != null ? ro(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? ro(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ro(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ei] = i;
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Tt(t, e), Lt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Tt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        bi(t.containerInfo);
      } catch (v) {
        Pe(e, e.return, v);
      }
      break;
    case 4:
      Tt(t, e), Lt(e);
      break;
    case 13:
      Tt(t, e), Lt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Ad = je())), r & 4 && dm(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (u = qe) || m, Tt(t, e), qe = u) : Tt(t, e), Lt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !m && e.mode & 1) for (G = e, m = e.child; m !== null; ) {
          for (p = G = m; G !== null; ) {
            switch (f = G, h = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                di(4, f, f.return);
                break;
              case 1:
                to(f, f.return);
                var x = f.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (v) {
                    Pe(r, n, v);
                  }
                }
                break;
              case 5:
                to(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  pm(p);
                  continue;
                }
            }
            h !== null ? (h.return = f, G = h) : pm(p);
          }
          m = m.sibling;
        }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, c = p.memoizedProps.style, a = c != null && c.hasOwnProperty("display") ? c.display : null, s.style.display = Jh("display", a));
              } catch (v) {
                Pe(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (m === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (v) {
              Pe(e, e.return, v);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), p = p.return;
          }
          m === p && (m = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Tt(t, e), Lt(e), r & 4 && dm(e);
      break;
    case 21:
      break;
    default:
      Tt(
        t,
        e
      ), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (vi(o, ""), r.flags &= -33);
          var i = um(e);
          du(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = um(e);
          uu(e, s, a);
          break;
        default:
          throw Error(A(161));
      }
    } catch (c) {
      Pe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function HS(e, t, n) {
  G = e, Nv(e);
}
function Nv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ja;
      if (!a) {
        var s = o.alternate, c = s !== null && s.memoizedState !== null || qe;
        s = ja;
        var u = qe;
        if (ja = a, (qe = c) && !u) for (G = o; G !== null; ) a = G, c = a.child, a.tag === 22 && a.memoizedState !== null ? mm(o) : c !== null ? (c.return = a, G = c) : mm(o);
        for (; i !== null; ) G = i, Nv(i), i = i.sibling;
        G = o, ja = s, qe = u;
      }
      fm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, G = i) : fm(e);
  }
}
function fm(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            qe || Vs(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !qe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && qp(t, i, r);
            break;
          case 3:
            var a = t.updateQueue;
            if (a !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              qp(t, a, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var c = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c.autoFocus && n.focus();
                  break;
                case "img":
                  c.src && (n.src = c.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var m = u.memoizedState;
                if (m !== null) {
                  var p = m.dehydrated;
                  p !== null && bi(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(A(163));
        }
        qe || t.flags & 512 && cu(t);
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function pm(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, G = n;
      break;
    }
    G = t.return;
  }
}
function mm(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vs(4, t);
          } catch (c) {
            Pe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Pe(t, o, c);
            }
          }
          var i = t.return;
          try {
            cu(t);
          } catch (c) {
            Pe(t, i, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            cu(t);
          } catch (c) {
            Pe(t, a, c);
          }
      }
    } catch (c) {
      Pe(t, t.return, c);
    }
    if (t === e) {
      G = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, G = s;
      break;
    }
    G = t.return;
  }
}
var US = Math.ceil, Cs = Pn.ReactCurrentDispatcher, _d = Pn.ReactCurrentOwner, Pt = Pn.ReactCurrentBatchConfig, se = 0, Fe = null, Re = null, He = 0, dt = 0, no = rr(0), De = 0, _i = null, wr = 0, Bs = 0, Id = 0, fi = null, rt = null, Ad = 0, wo = 1 / 0, an = null, Ss = !1, fu = null, Gn = null, Na = !1, Fn = null, ks = 0, pi = 0, pu = null, Ya = -1, Xa = 0;
function Je() {
  return se & 6 ? je() : Ya !== -1 ? Ya : Ya = je();
}
function Wn(e) {
  return e.mode & 1 ? se & 2 && He !== 0 ? He & -He : jS.transition !== null ? (Xa === 0 && (Xa = fg()), Xa) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : wg(e.type)), e) : 1;
}
function Ot(e, t, n, r) {
  if (50 < pi) throw pi = 0, pu = null, Error(A(185));
  Hi(e, n, r), (!(se & 2) || e !== Fe) && (e === Fe && (!(se & 2) && (Bs |= n), De === 4 && $n(e, He)), st(e, r), n === 1 && se === 0 && !(t.mode & 1) && (wo = je() + 500, zs && or()));
}
function st(e, t) {
  var n = e.callbackNode;
  jC(e, t);
  var r = ss(e, e === Fe ? He : 0);
  if (r === 0) n !== null && Sp(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Sp(n), t === 1) e.tag === 0 ? ES(hm.bind(null, e)) : zg(hm.bind(null, e)), CS(function() {
      !(se & 6) && or();
    }), n = null;
    else {
      switch (pg(r)) {
        case 1:
          n = ad;
          break;
        case 4:
          n = ug;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = dg;
          break;
        default:
          n = as;
      }
      n = Ov(n, Tv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Tv(e, t) {
  if (Ya = -1, Xa = 0, se & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (lo() && e.callbackNode !== n) return null;
  var r = ss(e, e === Fe ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ps(e, r);
  else {
    t = r;
    var o = se;
    se |= 2;
    var i = Mv();
    (Fe !== e || He !== t) && (an = null, wo = je() + 500, mr(e, t));
    do
      try {
        KS();
        break;
      } catch (s) {
        Rv(e, s);
      }
    while (!0);
    wd(), Cs.current = i, se = o, Re !== null ? t = 0 : (Fe = null, He = 0, t = De);
  }
  if (t !== 0) {
    if (t === 2 && (o = Lc(e), o !== 0 && (r = o, t = mu(e, o))), t === 1) throw n = _i, mr(e, 0), $n(e, r), st(e, je()), n;
    if (t === 6) $n(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !GS(o) && (t = Ps(e, r), t === 2 && (i = Lc(e), i !== 0 && (r = i, t = mu(e, i))), t === 1)) throw n = _i, mr(e, 0), $n(e, r), st(e, je()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          ur(e, rt, an);
          break;
        case 3:
          if ($n(e, r), (r & 130023424) === r && (t = Ad + 500 - je(), 10 < t)) {
            if (ss(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Je(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Yc(ur.bind(null, e, rt, an), t);
            break;
          }
          ur(e, rt, an);
          break;
        case 4:
          if ($n(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Dt(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * US(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Yc(ur.bind(null, e, rt, an), r);
            break;
          }
          ur(e, rt, an);
          break;
        case 5:
          ur(e, rt, an);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return st(e, je()), e.callbackNode === n ? Tv.bind(null, e) : null;
}
function mu(e, t) {
  var n = fi;
  return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256), e = Ps(e, t), e !== 2 && (t = rt, rt = n, t !== null && hu(t)), e;
}
function hu(e) {
  rt === null ? rt = e : rt.push.apply(rt, e);
}
function GS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!$t(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function $n(e, t) {
  for (t &= ~Id, t &= ~Bs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function hm(e) {
  if (se & 6) throw Error(A(327));
  lo();
  var t = ss(e, 0);
  if (!(t & 1)) return st(e, je()), null;
  var n = Ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lc(e);
    r !== 0 && (t = r, n = mu(e, r));
  }
  if (n === 1) throw n = _i, mr(e, 0), $n(e, t), st(e, je()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ur(e, rt, an), st(e, je()), null;
}
function Dd(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    se = n, se === 0 && (wo = je() + 500, zs && or());
  }
}
function yr(e) {
  Fn !== null && Fn.tag === 0 && !(se & 6) && lo();
  var t = se;
  se |= 1;
  var n = Pt.transition, r = ue;
  try {
    if (Pt.transition = null, ue = 1, e) return e();
  } finally {
    ue = r, Pt.transition = n, se = t, !(se & 6) && or();
  }
}
function Od() {
  dt = no.current, xe(no);
}
function mr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, bS(n)), Re !== null) for (n = Re.return; n !== null; ) {
    var r = n;
    switch (gd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && fs();
        break;
      case 3:
        vo(), xe(it), xe(Qe), Pd();
        break;
      case 5:
        kd(r);
        break;
      case 4:
        vo();
        break;
      case 13:
        xe(be);
        break;
      case 19:
        xe(be);
        break;
      case 10:
        yd(r.type._context);
        break;
      case 22:
      case 23:
        Od();
    }
    n = n.return;
  }
  if (Fe = e, Re = e = Kn(e.current, null), He = dt = t, De = 0, _i = null, Id = Bs = wr = 0, rt = fi = null, fr !== null) {
    for (t = 0; t < fr.length; t++) if (n = fr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var a = i.next;
        i.next = o, r.next = a;
      }
      n.pending = r;
    }
    fr = null;
  }
  return e;
}
function Rv(e, t) {
  do {
    var n = Re;
    try {
      if (wd(), Ga.current = bs, ys) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ys = !1;
      }
      if (xr = 0, Oe = Ie = Ce = null, ui = !1, Ti = 0, _d.current = null, n === null || n.return === null) {
        De = 1, _i = t, Re = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, c = t;
        if (t = He, s.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var u = c, m = s, p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = m.alternate;
            f ? (m.updateQueue = f.updateQueue, m.memoizedState = f.memoizedState, m.lanes = f.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var h = nm(a);
          if (h !== null) {
            h.flags &= -257, rm(h, a, s, i, t), h.mode & 1 && tm(i, u, t), t = h, c = u;
            var x = t.updateQueue;
            if (x === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(c), t.updateQueue = v;
            } else x.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              tm(i, u, t), $d();
              break e;
            }
            c = Error(A(426));
          }
        } else if (ye && s.mode & 1) {
          var b = nm(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), rm(b, a, s, i, t), vd(xo(c, s));
            break e;
          }
        }
        i = c = xo(c, s), De !== 4 && (De = 2), fi === null ? fi = [i] : fi.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = pv(i, c, t);
              Xp(i, g);
              break e;
            case 1:
              s = c;
              var y = i.type, w = i.stateNode;
              if (!(i.flags & 128) && (typeof y.getDerivedStateFromError == "function" || w !== null && typeof w.componentDidCatch == "function" && (Gn === null || !Gn.has(w)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = mv(i, s, t);
                Xp(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Iv(n);
    } catch (S) {
      t = S, Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mv() {
  var e = Cs.current;
  return Cs.current = bs, e === null ? bs : e;
}
function $d() {
  (De === 0 || De === 3 || De === 2) && (De = 4), Fe === null || !(wr & 268435455) && !(Bs & 268435455) || $n(Fe, He);
}
function Ps(e, t) {
  var n = se;
  se |= 2;
  var r = Mv();
  (Fe !== e || He !== t) && (an = null, mr(e, t));
  do
    try {
      WS();
      break;
    } catch (o) {
      Rv(e, o);
    }
  while (!0);
  if (wd(), se = n, Cs.current = r, Re !== null) throw Error(A(261));
  return Fe = null, He = 0, De;
}
function WS() {
  for (; Re !== null; ) _v(Re);
}
function KS() {
  for (; Re !== null && !xC(); ) _v(Re);
}
function _v(e) {
  var t = Dv(e.alternate, e, dt);
  e.memoizedProps = e.pendingProps, t === null ? Iv(e) : Re = t, _d.current = null;
}
function Iv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = LS(n, t), n !== null) {
        n.flags &= 32767, Re = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        De = 6, Re = null;
        return;
      }
    } else if (n = FS(n, t, dt), n !== null) {
      Re = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function ur(e, t, n) {
  var r = ue, o = Pt.transition;
  try {
    Pt.transition = null, ue = 1, YS(e, t, n, r);
  } finally {
    Pt.transition = o, ue = r;
  }
  return null;
}
function YS(e, t, n, r) {
  do
    lo();
  while (Fn !== null);
  if (se & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (NC(e, i), e === Fe && (Re = Fe = null, He = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Na || (Na = !0, Ov(as, function() {
    return lo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Pt.transition, Pt.transition = null;
    var a = ue;
    ue = 1;
    var s = se;
    se |= 4, _d.current = null, BS(e, n), jv(n, e), mS(Wc), ls = !!Gc, Wc = Gc = null, e.current = n, HS(n), wC(), se = s, ue = a, Pt.transition = i;
  } else e.current = n;
  if (Na && (Na = !1, Fn = e, ks = o), i = e.pendingLanes, i === 0 && (Gn = null), CC(n.stateNode), st(e, je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ss) throw Ss = !1, e = fu, fu = null, e;
  return ks & 1 && e.tag !== 0 && lo(), i = e.pendingLanes, i & 1 ? e === pu ? pi++ : (pi = 0, pu = e) : pi = 0, or(), null;
}
function lo() {
  if (Fn !== null) {
    var e = pg(ks), t = Pt.transition, n = ue;
    try {
      if (Pt.transition = null, ue = 16 > e ? 16 : e, Fn === null) var r = !1;
      else {
        if (e = Fn, Fn = null, ks = 0, se & 6) throw Error(A(331));
        var o = se;
        for (se |= 4, G = e.current; G !== null; ) {
          var i = G, a = i.child;
          if (G.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var u = s[c];
                for (G = u; G !== null; ) {
                  var m = G;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      di(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) p.return = m, G = p;
                  else for (; G !== null; ) {
                    m = G;
                    var f = m.sibling, h = m.return;
                    if (kv(m), m === u) {
                      G = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = h, G = f;
                      break;
                    }
                    G = h;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var v = x.child;
                if (v !== null) {
                  x.child = null;
                  do {
                    var b = v.sibling;
                    v.sibling = null, v = b;
                  } while (v !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) a.return = i, G = a;
          else e: for (; G !== null; ) {
            if (i = G, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                di(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, G = g;
              break e;
            }
            G = i.return;
          }
        }
        var y = e.current;
        for (G = y; G !== null; ) {
          a = G;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) w.return = a, G = w;
          else e: for (a = y; G !== null; ) {
            if (s = G, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Vs(9, s);
              }
            } catch (S) {
              Pe(s, s.return, S);
            }
            if (s === a) {
              G = null;
              break e;
            }
            var C = s.sibling;
            if (C !== null) {
              C.return = s.return, G = C;
              break e;
            }
            G = s.return;
          }
        }
        if (se = o, or(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
          Kt.onPostCommitFiberRoot(Is, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ue = n, Pt.transition = t;
    }
  }
  return !1;
}
function gm(e, t, n) {
  t = xo(n, t), t = pv(e, t, 1), e = Un(e, t, 1), t = Je(), e !== null && (Hi(e, 1, t), st(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) gm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      gm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
        e = xo(n, e), e = mv(t, e, 1), t = Un(t, e, 1), e = Je(), t !== null && (Hi(t, 1, e), st(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function XS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Je(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (He & n) === n && (De === 4 || De === 3 && (He & 130023424) === He && 500 > je() - Ad ? mr(e, 0) : Id |= n), st(e, t);
}
function Av(e, t) {
  t === 0 && (e.mode & 1 ? (t = xa, xa <<= 1, !(xa & 130023424) && (xa = 4194304)) : t = 1);
  var n = Je();
  e = xn(e, t), e !== null && (Hi(e, t, n), st(e, n));
}
function qS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Av(e, n);
}
function QS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), Av(e, n);
}
var Dv;
Dv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || it.current) ot = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ot = !1, zS(e, t, n);
    ot = !!(e.flags & 131072);
  }
  else ot = !1, ye && t.flags & 1048576 && Fg(t, hs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ka(e, t), e = t.pendingProps;
      var o = mo(t, Qe.current);
      so(t, n), o = jd(null, t, r, e, o, n);
      var i = Nd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, at(r) ? (i = !0, ps(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Cd(t), o.updater = Ls, t.stateNode = o, o._reactInternals = t, tu(t, r, e, n), t = ou(null, t, r, !0, i, n)) : (t.tag = 0, ye && i && hd(t), Ze(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ka(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = JS(r), e = Mt(r, e), o) {
          case 0:
            t = ru(null, t, r, e, n);
            break e;
          case 1:
            t = am(null, t, r, e, n);
            break e;
          case 11:
            t = om(null, t, r, e, n);
            break e;
          case 14:
            t = im(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), ru(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), am(e, t, r, o, n);
    case 3:
      e: {
        if (xv(t), e === null) throw Error(A(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Gg(e, t), xs(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = xo(Error(A(423)), t), t = sm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = xo(Error(A(424)), t), t = sm(e, t, r, n, o);
          break e;
        } else for (pt = Hn(t.stateNode.containerInfo.firstChild), mt = t, ye = !0, It = null, n = Hg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ho(), r === o) {
            t = wn(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Wg(t), e === null && Zc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Kc(r, o) ? a = null : i !== null && Kc(r, i) && (t.flags |= 32), vv(e, t), Ze(e, t, a, n), t.child;
    case 6:
      return e === null && Zc(t), null;
    case 13:
      return wv(e, t, n);
    case 4:
      return Sd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = go(t, null, r, n) : Ze(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), om(e, t, r, o, n);
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, me(gs, r._currentValue), r._currentValue = a, i !== null) if ($t(i.value, a)) {
          if (i.children === o.children && !it.current) {
            t = wn(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            a = i.child;
            for (var c = s.firstContext; c !== null; ) {
              if (c.context === r) {
                if (i.tag === 1) {
                  c = dn(-1, n & -n), c.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var m = u.pending;
                    m === null ? c.next = c : (c.next = m.next, m.next = c), u.pending = c;
                  }
                }
                i.lanes |= n, c = i.alternate, c !== null && (c.lanes |= n), Jc(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              c = c.next;
            }
          } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (a = i.return, a === null) throw Error(A(341));
            a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Jc(a, n, t), a = i.sibling;
          } else a = i.child;
          if (a !== null) a.return = i;
          else for (a = i; a !== null; ) {
            if (a === t) {
              a = null;
              break;
            }
            if (i = a.sibling, i !== null) {
              i.return = a.return, a = i;
              break;
            }
            a = a.return;
          }
          i = a;
        }
        Ze(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, so(t, n), o = Et(o), r = r(o), t.flags |= 1, Ze(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Mt(r, t.pendingProps), o = Mt(r.type, o), im(e, t, r, o, n);
    case 15:
      return hv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Mt(r, o), Ka(e, t), t.tag = 1, at(r) ? (e = !0, ps(t)) : e = !1, so(t, n), fv(t, r, o), tu(t, r, o, n), ou(null, t, r, !0, e, n);
    case 19:
      return yv(e, t, n);
    case 22:
      return gv(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Ov(e, t) {
  return cg(e, t);
}
function ZS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function kt(e, t, n, r) {
  return new ZS(e, t, n, r);
}
function zd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function JS(e) {
  if (typeof e == "function") return zd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === rd) return 11;
    if (e === od) return 14;
  }
  return 2;
}
function Kn(e, t) {
  var n = e.alternate;
  return n === null ? (n = kt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qa(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function") zd(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else e: switch (e) {
    case Wr:
      return hr(n.children, o, i, t);
    case nd:
      a = 8, o |= 8;
      break;
    case Pc:
      return e = kt(12, n, t, o | 2), e.elementType = Pc, e.lanes = i, e;
    case Ec:
      return e = kt(13, n, t, o), e.elementType = Ec, e.lanes = i, e;
    case jc:
      return e = kt(19, n, t, o), e.elementType = jc, e.lanes = i, e;
    case Wh:
      return Hs(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Uh:
          a = 10;
          break e;
        case Gh:
          a = 9;
          break e;
        case rd:
          a = 11;
          break e;
        case od:
          a = 14;
          break e;
        case An:
          a = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = kt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function hr(e, t, n, r) {
  return e = kt(7, e, r, t), e.lanes = n, e;
}
function Hs(e, t, n, r) {
  return e = kt(22, e, r, t), e.elementType = Wh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, t, n) {
  return e = kt(6, e, null, t), e.lanes = n, e;
}
function ec(e, t, n) {
  return t = kt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ek(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Al(0), this.expirationTimes = Al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Fd(e, t, n, r, o, i, a, s, c) {
  return e = new ek(e, t, n, s, c), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = kt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cd(i), e;
}
function tk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Gr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function $v(e) {
  if (!e) return qn;
  e = e._reactInternals;
  e: {
    if (jr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (at(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (at(n)) return $g(e, n, t);
  }
  return t;
}
function zv(e, t, n, r, o, i, a, s, c) {
  return e = Fd(n, r, !0, e, o, i, a, s, c), e.context = $v(null), n = e.current, r = Je(), o = Wn(n), i = dn(r, o), i.callback = t ?? null, Un(n, i, o), e.current.lanes = o, Hi(e, o, r), st(e, r), e;
}
function Us(e, t, n, r) {
  var o = t.current, i = Je(), a = Wn(o);
  return n = $v(n), t.context === null ? t.context = n : t.pendingContext = n, t = dn(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Un(o, t, a), e !== null && (Ot(e, o, a, i), Ua(e, o, a)), a;
}
function Es(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ld(e, t) {
  vm(e, t), (e = e.alternate) && vm(e, t);
}
function nk() {
  return null;
}
var Fv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vd(e) {
  this._internalRoot = e;
}
Gs.prototype.render = Vd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Us(e, t, null, null);
};
Gs.prototype.unmount = Vd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yr(function() {
      Us(null, e, null, null);
    }), t[vn] = null;
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = gg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++) ;
    On.splice(n, 0, e), n === 0 && xg(e);
  }
};
function Bd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ws(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function xm() {
}
function rk(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Es(a);
        i.call(u);
      };
    }
    var a = zv(t, r, e, 0, null, !1, !1, "", xm);
    return e._reactRootContainer = a, e[vn] = a.current, ki(e.nodeType === 8 ? e.parentNode : e), yr(), a;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Es(c);
      s.call(u);
    };
  }
  var c = Fd(e, 0, !1, null, null, !1, !1, "", xm);
  return e._reactRootContainer = c, e[vn] = c.current, ki(e.nodeType === 8 ? e.parentNode : e), yr(function() {
    Us(t, c, n, r);
  }), c;
}
function Ks(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var c = Es(a);
        s.call(c);
      };
    }
    Us(t, a, e, o);
  } else a = rk(n, t, e, o, r);
  return Es(a);
}
mg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ni(t.pendingLanes);
        n !== 0 && (sd(t, n | 1), st(t, je()), !(se & 6) && (wo = je() + 500, or()));
      }
      break;
    case 13:
      yr(function() {
        var r = xn(e, 1);
        if (r !== null) {
          var o = Je();
          Ot(r, e, 1, o);
        }
      }), Ld(e, 1);
  }
};
ld = function(e) {
  if (e.tag === 13) {
    var t = xn(e, 134217728);
    if (t !== null) {
      var n = Je();
      Ot(t, e, 134217728, n);
    }
    Ld(e, 134217728);
  }
};
hg = function(e) {
  if (e.tag === 13) {
    var t = Wn(e), n = xn(e, t);
    if (n !== null) {
      var r = Je();
      Ot(n, e, t, r);
    }
    Ld(e, t);
  }
};
gg = function() {
  return ue;
};
vg = function(e, t) {
  var n = ue;
  try {
    return ue = e, t();
  } finally {
    ue = n;
  }
};
$c = function(e, t, n) {
  switch (t) {
    case "input":
      if (Rc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = $s(r);
            if (!o) throw Error(A(90));
            Yh(r), Rc(r, o);
          }
        }
      }
      break;
    case "textarea":
      qh(e, n);
      break;
    case "select":
      t = n.value, t != null && ro(e, !!n.multiple, t, !1);
  }
};
rg = Dd;
og = yr;
var ok = { usingClientEntryPoint: !1, Events: [Gi, qr, $s, tg, ng, Dd] }, Yo = { findFiberByHostInstance: dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ik = { bundleType: Yo.bundleType, version: Yo.version, rendererPackageName: Yo.rendererPackageName, rendererConfig: Yo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = sg(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yo.findFiberByHostInstance || nk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ta.isDisabled && Ta.supportsFiber) try {
    Is = Ta.inject(ik), Kt = Ta;
  } catch {
  }
}
vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ok;
vt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bd(t)) throw Error(A(200));
  return tk(e, t, null, n);
};
vt.createRoot = function(e, t) {
  if (!Bd(e)) throw Error(A(299));
  var n = !1, r = "", o = Fv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Fd(e, 1, !1, null, null, n, !1, r, o), e[vn] = t.current, ki(e.nodeType === 8 ? e.parentNode : e), new Vd(t);
};
vt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = sg(t), e = e === null ? null : e.stateNode, e;
};
vt.flushSync = function(e) {
  return yr(e);
};
vt.hydrate = function(e, t, n) {
  if (!Ws(t)) throw Error(A(200));
  return Ks(null, e, t, !0, n);
};
vt.hydrateRoot = function(e, t, n) {
  if (!Bd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Fv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = zv(t, null, e, 1, n ?? null, o, !1, i, a), e[vn] = t.current, ki(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Gs(t);
};
vt.render = function(e, t, n) {
  if (!Ws(t)) throw Error(A(200));
  return Ks(null, e, t, !1, n);
};
vt.unmountComponentAtNode = function(e) {
  if (!Ws(e)) throw Error(A(40));
  return e._reactRootContainer ? (yr(function() {
    Ks(null, null, e, !1, function() {
      e._reactRootContainer = null, e[vn] = null;
    });
  }), !0) : !1;
};
vt.unstable_batchedUpdates = Dd;
vt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ws(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ks(e, t, n, !1, r);
};
vt.version = "18.3.1-next-f1338f8080-20240426";
function Lv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv);
    } catch (e) {
      console.error(e);
    }
}
Lv(), Lh.exports = vt;
var No = Lh.exports, Hd, wm = No;
Hd = wm.createRoot, wm.hydrateRoot;
const ym = '*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-0\\.5{top:.125rem;right:.125rem;bottom:.125rem;left:.125rem}.inset-\\[-100\\%\\]{top:-100%;right:-100%;bottom:-100%;left:-100%}.inset-x-0{left:0;right:0}.inset-y-0{top:0;bottom:0}.inset-y-1{top:.25rem;bottom:.25rem}.-top-8{top:-2rem}.bottom-0{bottom:0}.bottom-4{bottom:1rem}.left-0{left:0}.left-1\\/2{left:50%}.right-0{right:0}.right-2{right:.5rem}.right-4{right:1rem}.top-0{top:0}.top-1\\/2{top:50%}.top-2{top:.5rem}.top-4{top:1rem}.top-full{top:100%}.isolate{isolation:isolate}.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.col-span-full{grid-column:1 / -1}.m-2{margin:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.mb-1{margin-bottom:.25rem}.mb-3{margin-bottom:.75rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.ml-6{margin-left:1.5rem}.mt-0\\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.table-row{display:table-row}.grid{display:grid}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.size-10{width:2.5rem;height:2.5rem}.size-12{width:3rem;height:3rem}.size-2{width:.5rem;height:.5rem}.size-4{width:1rem;height:1rem}.size-8{width:2rem;height:2rem}.size-9{width:2.25rem;height:2.25rem}.h-1{height:.25rem}.h-1\\.5{height:.375rem}.h-10{height:2.5rem}.h-2{height:.5rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[var\\(--sen-control-h\\)\\]{height:var(--sen-control-h)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-60{max-height:15rem}.max-h-64{max-height:16rem}.max-h-80{max-height:20rem}.max-h-\\[90vh\\]{max-height:90vh}.min-h-0{min-height:0px}.min-h-11{min-height:2.75rem}.min-h-24{min-height:6rem}.min-h-32{min-height:8rem}.min-h-48{min-height:12rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-24{width:6rem}.w-4{width:1rem}.w-64{width:16rem}.w-72{width:18rem}.w-9{width:2.25rem}.w-\\[360px\\]{width:360px}.w-\\[calc\\(100\\%-2rem\\)\\]{width:calc(100% - 2rem)}.w-\\[min\\(18rem\\,calc\\(100vw-2rem\\)\\)\\]{width:min(18rem,calc(100vw - 2rem))}.w-\\[min\\(24rem\\,calc\\(100vw-2rem\\)\\)\\]{width:min(24rem,calc(100vw - 2rem))}.w-\\[min\\(90vw\\,24rem\\)\\]{width:min(90vw,24rem)}.w-\\[var\\(--radix-popover-trigger-width\\)\\]{width:var(--radix-popover-trigger-width)}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-px{width:1px}.min-w-0{min-width:0px}.min-w-36{min-width:9rem}.min-w-9{min-width:2.25rem}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[85\\%\\]{max-width:85%}.max-w-\\[calc\\(100vw-32px\\)\\]{max-width:calc(100vw - 32px)}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.caption-bottom{caption-side:bottom}.border-collapse{border-collapse:collapse}.origin-center{transform-origin:center}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes sen-dot-blink{0%,46%,50%,to{transform:scaleY(1)}48%{transform:scaleY(.12)}}.animate-sen-dot-blink{animation:sen-dot-blink 4s ease-in-out infinite}@keyframes sen-in{0%{opacity:0;transform:translateY(6px) scale(.98)}to{opacity:1;transform:none}}.animate-sen-in{animation:sen-in .14s ease-out}@keyframes sen-list-in{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.animate-sen-list-in{animation:sen-list-in .32s cubic-bezier(.16,1,.3,1) both}@keyframes sen-marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-sen-marquee{animation:sen-marquee 28s linear infinite}@keyframes sen-orbit{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-sen-orbit{animation:sen-orbit 18s linear infinite}@keyframes sen-shine{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-sen-shine{animation:sen-shine 5s linear infinite}.animate-sen-surface-in{animation:sen-surface-in .14s ease-out}@keyframes sen-text-in{0%{opacity:0;transform:translateY(.5em)}to{opacity:1;transform:translateY(0)}}.animate-sen-text-in{animation:sen-text-in .42s cubic-bezier(.16,1,.3,1) both}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-col-resize{cursor:col-resize}.cursor-default{cursor:default}.cursor-grab{cursor:grab}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-row-resize{cursor:row-resize}.cursor-text{cursor:text}.touch-none{touch-action:none}.touch-pan-x{--tw-pan-x: pan-x;touch-action:var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)}.touch-pan-y{--tw-pan-y: pan-y;touch-action:var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.scroll-m-20{scroll-margin:5rem}.list-disc{list-style-type:disc}.auto-cols-max{grid-auto-columns:max-content}.grid-flow-col{grid-auto-flow:column}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\]{grid-template-columns:auto minmax(0,1fr) auto}.grid-rows-\\[auto_minmax\\(0\\,1fr\\)_auto\\]{grid-template-rows:auto minmax(0,1fr) auto}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.place-content-center{place-content:center}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-end{justify-items:end}.justify-items-center{justify-items:center}.gap-0\\.5{gap:.125rem}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.overscroll-contain{overscroll-behavior:contain}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[calc\\(var\\(--radius\\)-1px\\)\\]{border-radius:calc(var(--radius) - 1px)}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-l-md{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.rounded-r-md{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.rounded-t-md{border-top-left-radius:calc(var(--radius) - 2px);border-top-right-radius:calc(var(--radius) - 2px)}.rounded-t-xl{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.border{border-width:1px}.border-0{border-width:0px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-l-0{border-left-width:0px}.border-l-2{border-left-width:2px}.border-l-\\[3px\\]{border-left-width:3px}.border-r{border-right-width:1px}.border-r-0{border-right-width:0px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-amber-500\\/30{border-color:#f59e0b4d}.border-background{--tw-border-opacity: 1;border-color:rgb(var(--background) / var(--tw-border-opacity, 1))}.border-black\\/10{border-color:#0000001a}.border-blue-500\\/30{border-color:#3b82f64d}.border-border{--tw-border-opacity: 1;border-color:rgb(var(--border) / var(--tw-border-opacity, 1))}.border-border\\/70{border-color:rgb(var(--border) / .7)}.border-current{border-color:currentColor}.border-destructive\\/30{border-color:rgb(var(--destructive) / .3)}.border-destructive\\/50{border-color:rgb(var(--destructive) / .5)}.border-destructive\\/60{border-color:rgb(var(--destructive) / .6)}.border-destructive\\/70{border-color:rgb(var(--destructive) / .7)}.border-emerald-500\\/30{border-color:#10b9814d}.border-input{--tw-border-opacity: 1;border-color:rgb(var(--input) / var(--tw-border-opacity, 1))}.border-primary{--tw-border-opacity: 1;border-color:rgb(var(--primary) / var(--tw-border-opacity, 1))}.border-primary\\/50{border-color:rgb(var(--primary) / .5)}.border-ring{--tw-border-opacity: 1;border-color:rgb(var(--ring) / var(--tw-border-opacity, 1))}.border-transparent{border-color:transparent}.border-l-green-500{--tw-border-opacity: 1;border-left-color:rgb(34 197 94 / var(--tw-border-opacity, 1))}.border-r-transparent{border-right-color:transparent}.bg-accent{--tw-bg-opacity: 1;background-color:rgb(var(--accent) / var(--tw-bg-opacity, 1))}.bg-background{--tw-bg-opacity: 1;background-color:rgb(var(--background) / var(--tw-bg-opacity, 1))}.bg-background\\/90{background-color:rgb(var(--background) / .9)}.bg-black\\/80{background-color:#000c}.bg-border{--tw-bg-opacity: 1;background-color:rgb(var(--border) / var(--tw-bg-opacity, 1))}.bg-card{--tw-bg-opacity: 1;background-color:rgb(var(--card) / var(--tw-bg-opacity, 1))}.bg-destructive{--tw-bg-opacity: 1;background-color:rgb(var(--destructive) / var(--tw-bg-opacity, 1))}.bg-foreground{--tw-bg-opacity: 1;background-color:rgb(var(--foreground) / var(--tw-bg-opacity, 1))}.bg-muted{--tw-bg-opacity: 1;background-color:rgb(var(--muted) / var(--tw-bg-opacity, 1))}.bg-muted-foreground\\/40{background-color:rgb(var(--muted-foreground) / .4)}.bg-muted\\/50{background-color:rgb(var(--muted) / .5)}.bg-muted\\/60{background-color:rgb(var(--muted) / .6)}.bg-popover{--tw-bg-opacity: 1;background-color:rgb(var(--popover) / var(--tw-bg-opacity, 1))}.bg-primary{--tw-bg-opacity: 1;background-color:rgb(var(--primary) / var(--tw-bg-opacity, 1))}.bg-primary\\/20{background-color:rgb(var(--primary) / .2)}.bg-secondary{--tw-bg-opacity: 1;background-color:rgb(var(--secondary) / var(--tw-bg-opacity, 1))}.bg-transparent{background-color:transparent}.bg-\\[linear-gradient\\(45deg\\,\\#ddd_25\\%\\,transparent_25\\%\\)\\,linear-gradient\\(-45deg\\,\\#ddd_25\\%\\,transparent_25\\%\\)\\,linear-gradient\\(45deg\\,transparent_75\\%\\,\\#ddd_75\\%\\)\\,linear-gradient\\(-45deg\\,transparent_75\\%\\,\\#ddd_75\\%\\)\\]{background-image:linear-gradient(45deg,#ddd 25%,transparent 25%),linear-gradient(-45deg,#ddd 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ddd 75%),linear-gradient(-45deg,transparent 75%,#ddd 75%)}.bg-\\[length\\:8px_8px\\]{background-size:8px 8px}.bg-\\[position\\:0_0\\,0_4px\\,4px_-4px\\,-4px_0\\]{background-position:0 0,0 4px,4px -4px,-4px 0}.fill-muted-foreground{fill:rgb(var(--muted-foreground) / 1)}.fill-popover{fill:rgb(var(--popover) / 1)}.fill-primary{fill:rgb(var(--primary) / 1)}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-px{padding:1px}.px-0{padding-left:0;padding-right:0}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[var\\(--sen-control-px\\)\\]{padding-left:var(--sen-control-px);padding-right:var(--sen-control-px)}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-\\[0\\.2rem\\]{padding-top:.2rem;padding-bottom:.2rem}.pb-2{padding-bottom:.5rem}.pb-4{padding-bottom:1rem}.pl-2{padding-left:.5rem}.pl-6{padding-left:1.5rem}.pr-4{padding-right:1rem}.pr-8{padding-right:2rem}.pr-9{padding-right:2.25rem}.pt-0{padding-top:0}.pt-3{padding-top:.75rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.align-middle{vertical-align:middle}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[10px\\]{font-size:10px}.text-\\[length\\:var\\(--sen-control-fs\\)\\]{font-size:var(--sen-control-fs)}.text-\\[length\\:var\\(--sen-text-sm\\)\\]{font-size:var(--sen-text-sm)}.text-\\[length\\:var\\(--sen-text-xs\\)\\]{font-size:var(--sen-text-xs)}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.italic{font-style:italic}.tabular-nums{--tw-numeric-spacing: tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-6{line-height:1.5rem}.leading-7{line-height:1.75rem}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.tracking-tight{letter-spacing:-.025em}.text-accent-foreground{--tw-text-opacity: 1;color:rgb(var(--accent-foreground) / var(--tw-text-opacity, 1))}.text-amber-600{--tw-text-opacity: 1;color:rgb(217 119 6 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-border{--tw-text-opacity: 1;color:rgb(var(--border) / var(--tw-text-opacity, 1))}.text-card-foreground{--tw-text-opacity: 1;color:rgb(var(--foreground) / var(--tw-text-opacity, 1))}.text-current{color:currentColor}.text-destructive{--tw-text-opacity: 1;color:rgb(var(--destructive) / var(--tw-text-opacity, 1))}.text-destructive-foreground{--tw-text-opacity: 1;color:rgb(var(--destructive-foreground) / var(--tw-text-opacity, 1))}.text-emerald-600{--tw-text-opacity: 1;color:rgb(5 150 105 / var(--tw-text-opacity, 1))}.text-foreground{--tw-text-opacity: 1;color:rgb(var(--foreground) / var(--tw-text-opacity, 1))}.text-muted-foreground{--tw-text-opacity: 1;color:rgb(var(--muted-foreground) / var(--tw-text-opacity, 1))}.text-muted-foreground\\/45{color:rgb(var(--muted-foreground) / .45)}.text-muted-foreground\\/50{color:rgb(var(--muted-foreground) / .5)}.text-popover-foreground{--tw-text-opacity: 1;color:rgb(var(--foreground) / var(--tw-text-opacity, 1))}.text-primary{--tw-text-opacity: 1;color:rgb(var(--primary) / var(--tw-text-opacity, 1))}.text-primary-foreground{--tw-text-opacity: 1;color:rgb(var(--primary-foreground) / var(--tw-text-opacity, 1))}.text-secondary-foreground{--tw-text-opacity: 1;color:rgb(var(--secondary-foreground) / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.decoration-muted-foreground{text-decoration-color:rgb(var(--muted-foreground) / 1)}.underline-offset-4{text-underline-offset:4px}.accent-primary{accent-color:rgb(var(--primary) / 1)}.opacity-0{opacity:0}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.opacity-70{opacity:.7}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-inner{--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-0{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-2{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-ring{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--ring) / var(--tw-ring-opacity, 1))}.ring-offset-2{--tw-ring-offset-width: 2px}.ring-offset-background{--tw-ring-offset-color: rgb(var(--background) / 1)}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur: blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[width\\]{transition-property:width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.\\[backface-visibility\\:hidden\\]{backface-visibility:hidden}.\\[transform-style\\:preserve-3d\\]{transform-style:preserve-3d}.\\[transform\\:rotateY\\(180deg\\)\\]{transform:rotateY(180deg)}:host{all:initial;display:block}.sen-root{font-family:var(--sen-font-sans);font-size:var(--sen-font-base);line-height:1.5;color:rgb(var(--foreground));-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}.sen-surface{background:rgb(var(--background))}@media (prefers-reduced-motion: reduce){[data-sen-animation],.animate-accordion-down,.animate-accordion-up,.animate-sen-in,.animate-sen-overlay-in,.animate-sen-content-in,.animate-sen-surface-in,.animate-spin,.animate-sen-marquee,.animate-sen-list-in,.animate-sen-text-in,.animate-sen-orbit,.animate-sen-shine,.animate-sen-dot-blink{animation:none!important}}.sen-marquee-pause:hover .animate-sen-marquee,.sen-orbit-pause:hover .animate-sen-orbit,.sen-spinning-text-pause:hover .animate-sen-orbit{animation-play-state:paused}*,:before,:after{border-color:rgb(var(--border))}.placeholder\\:text-muted-foreground::-moz-placeholder{--tw-text-opacity: 1;color:rgb(var(--muted-foreground) / var(--tw-text-opacity, 1))}.placeholder\\:text-muted-foreground::placeholder{--tw-text-opacity: 1;color:rgb(var(--muted-foreground) / var(--tw-text-opacity, 1))}.focus-within\\:ring-2:focus-within{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-ring:focus-within{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--ring) / var(--tw-ring-opacity, 1))}.focus-within\\:ring-offset-2:focus-within{--tw-ring-offset-width: 2px}.focus-within\\:ring-offset-popover:focus-within{--tw-ring-offset-color: rgb(var(--popover) / 1)}.hover\\:h-1:hover{height:.25rem}.hover\\:w-1:hover{width:.25rem}.hover\\:-translate-y-1:hover{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-110:hover{--tw-scale-x: 1.1;--tw-scale-y: 1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-\\[1\\.03\\]:hover{--tw-scale-x: 1.03;--tw-scale-y: 1.03;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-border:hover{--tw-border-opacity: 1;border-color:rgb(var(--border) / var(--tw-border-opacity, 1))}.hover\\:bg-accent:hover{--tw-bg-opacity: 1;background-color:rgb(var(--accent) / var(--tw-bg-opacity, 1))}.hover\\:bg-accent\\/50:hover{background-color:rgb(var(--accent) / .5)}.hover\\:bg-destructive\\/90:hover{background-color:rgb(var(--destructive) / .9)}.hover\\:bg-muted:hover{--tw-bg-opacity: 1;background-color:rgb(var(--muted) / var(--tw-bg-opacity, 1))}.hover\\:bg-muted\\/50:hover{background-color:rgb(var(--muted) / .5)}.hover\\:bg-primary\\/90:hover{background-color:rgb(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:rgb(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{--tw-text-opacity: 1;color:rgb(var(--accent-foreground) / var(--tw-text-opacity, 1))}.hover\\:text-foreground:hover{--tw-text-opacity: 1;color:rgb(var(--foreground) / var(--tw-text-opacity, 1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{--tw-bg-opacity: 1;background-color:rgb(var(--accent) / var(--tw-bg-opacity, 1))}.focus\\:text-accent-foreground:focus{--tw-text-opacity: 1;color:rgb(var(--accent-foreground) / var(--tw-text-opacity, 1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--ring) / var(--tw-ring-opacity, 1))}.focus-visible\\:bg-accent\\/50:focus-visible{background-color:rgb(var(--accent) / .5)}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-0:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--ring) / var(--tw-ring-opacity, 1))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.focus-visible\\:ring-offset-background:focus-visible{--tw-ring-offset-color: rgb(var(--background) / 1)}.active\\:cursor-grabbing:active{cursor:grabbing}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-30:disabled{opacity:.3}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:opacity-100{opacity:1}.group:focus-visible .group-focus-visible\\:opacity-100{opacity:1}.aria-selected\\:bg-accent[aria-selected=true]{--tw-bg-opacity: 1;background-color:rgb(var(--accent) / var(--tw-bg-opacity, 1))}.aria-selected\\:text-accent-foreground[aria-selected=true]{--tw-text-opacity: 1;color:rgb(var(--accent-foreground) / var(--tw-text-opacity, 1))}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[orientation\\=vertical\\]\\:mt-0[data-orientation=vertical]{margin-top:0}.data-\\[orientation\\=horizontal\\]\\:flex[data-orientation=horizontal]{display:flex}.data-\\[orientation\\=vertical\\]\\:h-auto[data-orientation=vertical]{height:auto}.data-\\[orientation\\=vertical\\]\\:flex-1[data-orientation=vertical]{flex:1 1 0%}.data-\\[state\\=checked\\]\\:translate-x-4[data-state=checked]{--tw-translate-x: 1rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked]{--tw-translate-x: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes accordion-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state=closed]{animation:accordion-up .2s ease-out}.data-\\[state\\=delayed-open\\]\\:animate-sen-surface-in[data-state=delayed-open]{animation:sen-surface-in .14s ease-out}@keyframes accordion-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}.data-\\[state\\=open\\]\\:animate-accordion-down[data-state=open]{animation:accordion-down .2s ease-out}@keyframes sen-content-in{0%{opacity:0;transform:translate(-50%,-48%) scale(.98)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}.data-\\[state\\=open\\]\\:animate-sen-content-in[data-state=open]{animation:sen-content-in .15s cubic-bezier(.16,1,.3,1)}@keyframes sen-overlay-in{0%{opacity:0}to{opacity:1}}.data-\\[state\\=open\\]\\:animate-sen-overlay-in[data-state=open]{animation:sen-overlay-in .15s ease-out}@keyframes sen-surface-in{0%{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}.data-\\[state\\=open\\]\\:animate-sen-surface-in[data-state=open]{animation:sen-surface-in .14s ease-out}.data-\\[orientation\\=vertical\\]\\:flex-row[data-orientation=vertical]{flex-direction:row}.data-\\[orientation\\=vertical\\]\\:flex-col[data-orientation=vertical]{flex-direction:column}.data-\\[orientation\\=horizontal\\]\\:items-start[data-orientation=horizontal],.data-\\[orientation\\=vertical\\]\\:items-start[data-orientation=vertical]{align-items:flex-start}.data-\\[orientation\\=vertical\\]\\:gap-3[data-orientation=vertical]{gap:.75rem}.data-\\[orientation\\=horizontal\\]\\:border-b-0[data-orientation=horizontal]{border-bottom-width:0px}.data-\\[orientation\\=horizontal\\]\\:border-r[data-orientation=horizontal]{border-right-width:1px}.data-\\[state\\=active\\]\\:bg-background[data-state=active]{--tw-bg-opacity: 1;background-color:rgb(var(--background) / var(--tw-bg-opacity, 1))}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{--tw-bg-opacity: 1;background-color:rgb(var(--primary) / var(--tw-bg-opacity, 1))}.data-\\[state\\=on\\]\\:bg-accent[data-state=on],.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{--tw-bg-opacity: 1;background-color:rgb(var(--accent) / var(--tw-bg-opacity, 1))}.data-\\[state\\=unchecked\\]\\:bg-input[data-state=unchecked]{--tw-bg-opacity: 1;background-color:rgb(var(--input) / var(--tw-bg-opacity, 1))}.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{--tw-text-opacity: 1;color:rgb(var(--muted-foreground) / var(--tw-text-opacity, 1))}.data-\\[state\\=active\\]\\:text-foreground[data-state=active]{--tw-text-opacity: 1;color:rgb(var(--foreground) / var(--tw-text-opacity, 1))}.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked]{--tw-text-opacity: 1;color:rgb(var(--primary-foreground) / var(--tw-text-opacity, 1))}.data-\\[state\\=on\\]\\:text-accent-foreground[data-state=on]{--tw-text-opacity: 1;color:rgb(var(--accent-foreground) / var(--tw-text-opacity, 1))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=active\\]\\:shadow-sm[data-state=active]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}@media (prefers-reduced-motion: reduce){.motion-reduce\\:animate-none{animation:none}.motion-reduce\\:transition-none{transition-property:none}}@media (min-width: 640px){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 1024px){.lg\\:text-5xl{font-size:3rem;line-height:1}}@media (prefers-color-scheme: dark){.dark\\:border-white\\/10{border-color:#ffffff1a}.dark\\:bg-\\[linear-gradient\\(45deg\\,\\#333_25\\%\\,transparent_25\\%\\)\\,linear-gradient\\(-45deg\\,\\#333_25\\%\\,transparent_25\\%\\)\\,linear-gradient\\(45deg\\,transparent_75\\%\\,\\#333_75\\%\\)\\,linear-gradient\\(-45deg\\,transparent_75\\%\\,\\#333_75\\%\\)\\]{background-image:linear-gradient(45deg,#333 25%,transparent 25%),linear-gradient(-45deg,#333 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#333 75%),linear-gradient(-45deg,transparent 75%,#333 75%)}.dark\\:text-amber-400{--tw-text-opacity: 1;color:rgb(251 191 36 / var(--tw-text-opacity, 1))}.dark\\:text-blue-400{--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity, 1))}.dark\\:text-emerald-400{--tw-text-opacity: 1;color:rgb(52 211 153 / var(--tw-text-opacity, 1))}}.\\[\\&\\:not\\(\\:first-child\\)\\]\\:mt-6:not(:first-child){margin-top:1.5rem}.\\[\\&\\>\\*\\:not\\(\\:first-child\\)\\]\\:rounded-l-none>*:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.\\[\\&\\>\\*\\:not\\(\\:last-child\\)\\]\\:rounded-r-none>*:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.\\[\\&\\>\\*\\:not\\(\\:last-child\\)\\]\\:border-r-0>*:not(:last-child){border-right-width:0px}.\\[\\&\\>input\\:first-child\\]\\:rounded-l-md>input:first-child{border-top-left-radius:calc(var(--radius) - 2px);border-bottom-left-radius:calc(var(--radius) - 2px)}.\\[\\&\\>input\\:last-child\\]\\:rounded-r-md>input:last-child{border-top-right-radius:calc(var(--radius) - 2px);border-bottom-right-radius:calc(var(--radius) - 2px)}.\\[\\&\\>input\\]\\:min-w-0>input{min-width:0px}.\\[\\&\\>input\\]\\:flex-1>input{flex:1 1 0%}.\\[\\&\\>input\\]\\:rounded-none>input{border-radius:0}.\\[\\&\\>input\\]\\:shadow-none>input{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.\\[\\&\\>li\\]\\:mt-2>li{margin-top:.5rem}.\\[\\&\\>span\\]\\:truncate>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state=open]>svg{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}', Vv = d.createContext(null), wt = () => d.useContext(Vv), Ys = /* @__PURE__ */ new Map(), gu = /* @__PURE__ */ new Map();
function $(e, t) {
  gu.has(e) || gu.set(e, t), Ys.set(e, t);
}
function ak(e) {
  const t = Ys.get(e);
  if (!t) throw new Error(`[Sen] No renderer is registered for "${e}".`);
  return t;
}
function sk(e) {
  const t = gu.get(e);
  if (!t) throw new Error(`[Sen] No built-in renderer is registered for "${e}".`);
  return t;
}
const lk = (e) => Ys.has(e);
function Bv({ node: e }) {
  if (d.useSyncExternalStore(e.subscribe, e.getVersion, e.getVersion), e.destroyed || !e.visible) return null;
  const t = Ys.get(e.type);
  return t ? /* @__PURE__ */ l.jsx(t, { node: e }) : /* @__PURE__ */ l.jsxs("div", { role: "alert", children: [
    'Sen: no renderer registered for "',
    e.type,
    '".'
  ] });
}
function z(e, t) {
  const n = e.props, r = t.props, o = { ...r.style };
  Object.assign(o, n.style), n.animation && Object.assign(o, { animation: ck(n.animation) });
  const i = [r.className, n.className].filter(Boolean).join(" ");
  return d.cloneElement(t, {
    ...n.attributes,
    ...n.animation ? { "data-sen-animation": "" } : {},
    className: i || void 0,
    style: o
  });
}
function ck(e) {
  return [
    e.name,
    `${e.duration ?? 250}ms`,
    e.easing ?? "ease",
    `${e.delay ?? 0}ms`,
    e.iterations ?? 1,
    e.direction ?? "normal",
    e.fillMode ?? "both"
  ].join(" ");
}
function yn(e) {
  return e == null ? null : e instanceof Bi ? /* @__PURE__ */ l.jsx(Bv, { node: e.node }) : e;
}
function oe(e) {
  return e.map(
    (t, n) => t instanceof Bi ? /* @__PURE__ */ l.jsx(Bv, { node: t.node }, t.id) : /* @__PURE__ */ l.jsx(d.Fragment, { children: t }, `text-${n}`)
  );
}
const yo = (e) => `calc(var(--sen-space) * ${e})`;
var uk = Object.defineProperty, St = (e, t) => uk(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function dk(e, t) {
  const n = d.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ St((i) => {
    const { children: a, ...s } = i, c = d.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l.jsx(n.Provider, { value: c, children: a });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(i, a = {}) {
    const { optional: s = !1 } = a, c = d.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    if (!s)
      throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return St(o, "useContext"), [r, o];
}
St(dk, "createContext");
// @__NO_SIDE_EFFECTS__
function ke(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = d.createContext(a);
    s.displayName = i + "Context";
    const c = n.length;
    n = [...n, a];
    const u = /* @__PURE__ */ St((p) => {
      var g;
      const { scope: f, children: h, ...x } = p, v = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[c]) || s, b = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ l.jsx(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = i + "Provider";
    function m(p, f, h = {}) {
      var g;
      const { optional: x = !1 } = h, v = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[c]) || s, b = d.useContext(v);
      if (b) return b;
      if (a !== void 0) return a;
      if (!x)
        throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return St(m, "useContext"), [u, m];
  }
  St(r, "createContext");
  const o = /* @__PURE__ */ St(() => {
    const i = n.map((a) => d.createContext(a));
    return /* @__PURE__ */ St(function(s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Hv(o, ...t)];
}
St(ke, "createContextScope");
function Hv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ St(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ St(function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: u }) => {
        const p = c(i)[`__scope${u}`];
        return { ...s, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
St(Hv, "composeContextScopes");
var fk = Object.defineProperty, Ud = (e, t) => fk(e, "name", { value: t, configurable: !0 });
function vu(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ud(vu, "setRef");
function br(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = vu(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : vu(e[o], null);
        }
      };
  };
}
Ud(br, "composeRefs");
function J(...e) {
  return d.useCallback(br(...e), e);
}
Ud(J, "useComposedRefs");
var pk = Object.defineProperty, Nt = (e, t) => pk(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = d.forwardRef((n, r) => {
    let { children: o, ...i } = n, a = null, s = !1;
    const c = [];
    xu(o) && typeof Ra == "function" && (o = Ra(o._payload)), d.Children.forEach(o, (f) => {
      var h;
      if (Yv(f)) {
        s = !0;
        const x = f;
        let v = "child" in x.props ? x.props.child : x.props.children;
        xu(v) && typeof Ra == "function" && (v = Ra(v._payload)), a = mk(x, v), c.push((h = a == null ? void 0 : a.props) == null ? void 0 : h.children);
      } else
        c.push(f);
    }), a ? a = d.cloneElement(a, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !s && d.Children.count(o) === 1 && d.isValidElement(o) && (a = o)
    );
    const u = a ? Kv(a) : void 0, m = J(r, u);
    if (!a) {
      if (o || o === 0)
        throw new Error(
          s ? vk(e) : gk(e)
        );
      return o;
    }
    const p = Wv(i, a.props ?? {});
    return a.type !== d.Fragment && (p.ref = r ? m : u), d.cloneElement(a, p);
  });
  return t.displayName = `${e}.Slot`, t;
}
Nt(qt, "createSlot");
var Uv = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Gv(e) {
  const t = /* @__PURE__ */ Nt((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Uv, t;
}
Nt(Gv, "createSlottable");
var mk = /* @__PURE__ */ Nt((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return d.isValidElement(n) ? d.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return d.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Wv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      const c = i(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" ? n[r] = [o, i].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = qv(i, o));
  }
  return { ...e, ...n };
}
Nt(Wv, "mergeProps");
function Kv(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Nt(Kv, "getElementRef");
function Yv(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Uv;
}
Nt(Yv, "isSlottable");
var hk = Symbol.for("react.lazy");
function xu(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === hk && "_payload" in e && Xv(e._payload);
}
Nt(xu, "isLazyComponent");
function Xv(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Nt(Xv, "isPromiseLike");
function qv(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Nt(qv, "concatAriaDescribedby");
var gk = /* @__PURE__ */ Nt((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), vk = /* @__PURE__ */ Nt((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ra = Po[" use ".trim().toString()], xk = Object.defineProperty, ze = (e, t) => xk(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function En(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ ke(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = /* @__PURE__ */ ze((v) => {
    const { scope: b, children: g } = v, y = d.useRef(null), w = d.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: b, itemMap: w, collectionRef: y, children: g });
  }, "CollectionProvider");
  a.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ qt(s), u = d.forwardRef(
    (v, b) => {
      const { scope: g, children: y } = v, w = i(s, g), C = J(b, w.collectionRef);
      return /* @__PURE__ */ l.jsx(c, { ref: C, children: y });
    }
  );
  u.displayName = s;
  const m = e + "CollectionItemSlot", p = "data-radix-collection-item", f = /* @__PURE__ */ qt(m), h = d.forwardRef(
    (v, b) => {
      const { scope: g, children: y, ...w } = v, C = d.useRef(null), S = J(b, C), k = i(m, g);
      return d.useEffect(() => (k.itemMap.set(C, { ref: C, ...w }), () => void k.itemMap.delete(C))), /* @__PURE__ */ l.jsx(f, { [p]: "", ref: S, children: y });
    }
  );
  h.displayName = m;
  function x(v) {
    const b = i(e + "CollectionConsumer", v);
    return d.useCallback(() => {
      const y = b.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${p}]`));
      return Array.from(b.itemMap.values()).sort(
        (k, P) => w.indexOf(k.ref.current) - w.indexOf(P.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return ze(x, "useCollection"), [
    { Provider: a, Slot: u, ItemSlot: h },
    x,
    r
  ];
}
ze(En, "createCollection");
var bm = /* @__PURE__ */ new WeakMap(), Te, ft, tc = (ft = class extends Map {
  constructor(n) {
    super(n);
    ip(this, Te);
    Nl(this, Te, [...super.keys()]), bm.set(this, !0);
  }
  set(n, r) {
    return bm.get(this) && (this.has(n) ? We(this, Te)[We(this, Te).indexOf(n)] = n : We(this, Te).push(n)), super.set(n, r), this;
  }
  insert(n, r, o) {
    const i = this.has(r), a = We(this, Te).length, s = Gd(n);
    let c = s >= 0 ? s : a + s;
    const u = c < 0 || c >= a ? -1 : c;
    if (u === this.size || i && u === this.size - 1 || u === -1)
      return this.set(r, o), this;
    const m = this.size + (i ? 0 : 1);
    s < 0 && c++;
    const p = [...We(this, Te)];
    let f, h = !1;
    for (let x = c; x < m; x++)
      if (c === x) {
        let v = p[x];
        p[x] === r && (v = p[x + 1]), i && this.delete(r), f = this.get(v), this.set(r, o);
      } else {
        !h && p[x - 1] === r && (h = !0);
        const v = p[h ? x : x - 1], b = f;
        f = this.get(v), this.delete(v), this.set(v, b);
      }
    return this;
  }
  with(n, r, o) {
    const i = new ft(this);
    return i.insert(n, r, o), i;
  }
  before(n) {
    const r = We(this, Te).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const i = We(this, Te).indexOf(n);
    return i === -1 ? this : this.insert(i, r, o);
  }
  after(n) {
    let r = We(this, Te).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const i = We(this, Te).indexOf(n);
    return i === -1 ? this : this.insert(i + 1, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return Nl(this, Te, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && We(this, Te).splice(We(this, Te).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = Qa(We(this, Te), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = Qa(We(this, Te), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return We(this, Te).indexOf(n);
  }
  keyAt(n) {
    return Qa(We(this, Te), n);
  }
  from(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let i = o + r;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.at(i);
  }
  keyFrom(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let i = o + r;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.keyAt(i);
  }
  find(n, r) {
    let o = 0;
    for (const i of this) {
      if (Reflect.apply(n, r, [i, o, this]))
        return i;
      o++;
    }
  }
  findIndex(n, r) {
    let o = 0;
    for (const i of this) {
      if (Reflect.apply(n, r, [i, o, this]))
        return o;
      o++;
    }
    return -1;
  }
  filter(n, r) {
    const o = [];
    let i = 0;
    for (const a of this)
      Reflect.apply(n, r, [a, i, this]) && o.push(a), i++;
    return new ft(o);
  }
  map(n, r) {
    const o = [];
    let i = 0;
    for (const a of this)
      o.push([a[0], Reflect.apply(n, r, [a, i, this])]), i++;
    return new ft(o);
  }
  reduce(...n) {
    const [r, o] = n;
    let i = 0, a = o ?? this.at(0);
    for (const s of this)
      i === 0 && n.length === 1 ? a = s : a = Reflect.apply(r, this, [a, s, i, this]), i++;
    return a;
  }
  reduceRight(...n) {
    const [r, o] = n;
    let i = o ?? this.at(-1);
    for (let a = this.size - 1; a >= 0; a--) {
      const s = this.at(a);
      a === this.size - 1 && n.length === 1 ? i = s : i = Reflect.apply(r, this, [i, s, a, this]);
    }
    return i;
  }
  toSorted(n) {
    const r = [...this.entries()].sort(n);
    return new ft(r);
  }
  toReversed() {
    const n = new ft();
    for (let r = this.size - 1; r >= 0; r--) {
      const o = this.keyAt(r), i = this.get(o);
      n.set(o, i);
    }
    return n;
  }
  toSpliced(...n) {
    const r = [...this.entries()];
    return r.splice(...n), new ft(r);
  }
  slice(n, r) {
    const o = new ft();
    let i = this.size - 1;
    if (n === void 0)
      return o;
    n < 0 && (n = n + this.size), r !== void 0 && r > 0 && (i = r - 1);
    for (let a = n; a <= i; a++) {
      const s = this.keyAt(a), c = this.get(s);
      o.set(s, c);
    }
    return o;
  }
  every(n, r) {
    let o = 0;
    for (const i of this) {
      if (!Reflect.apply(n, r, [i, o, this]))
        return !1;
      o++;
    }
    return !0;
  }
  some(n, r) {
    let o = 0;
    for (const i of this) {
      if (Reflect.apply(n, r, [i, o, this]))
        return !0;
      o++;
    }
    return !1;
  }
}, Te = new WeakMap(), ze(ft, "OrderedDict"), ft);
function Qa(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Qv(e, t);
  return n === -1 ? void 0 : e[n];
}
ze(Qa, "at");
function Qv(e, t) {
  const n = e.length, r = Gd(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
ze(Qv, "toSafeIndex");
function Gd(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ze(Gd, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function wk(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ ke(t), [o, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new tc(),
      setItemMap: /* @__PURE__ */ ze(() => {
      }, "setItemMap")
    }
  ), a = /* @__PURE__ */ ze(({ state: w, ...C }) => w ? /* @__PURE__ */ l.jsx(c, { ...C, state: w }) : /* @__PURE__ */ l.jsx(s, { ...C }), "CollectionProvider");
  a.displayName = t;
  const s = /* @__PURE__ */ ze((w) => {
    const C = b();
    return /* @__PURE__ */ l.jsx(c, { ...w, state: C });
  }, "CollectionInit");
  s.displayName = t + "Init";
  const c = /* @__PURE__ */ ze((w) => {
    const { scope: C, children: S, state: k } = w, P = d.useRef(null), [E, R] = d.useState(
      null
    ), T = J(P, R), [O, M] = k;
    return d.useEffect(() => {
      if (!E) return;
      const W = ex(() => {
      });
      return W.observe(E, {
        childList: !0,
        subtree: !0
      }), () => {
        W.disconnect();
      };
    }, [E]), /* @__PURE__ */ l.jsx(
      o,
      {
        scope: C,
        itemMap: O,
        setItemMap: M,
        collectionRef: T,
        collectionRefObject: P,
        collectionElement: E,
        children: S
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = t + "Impl";
  const u = e + "CollectionSlot", m = /* @__PURE__ */ qt(u), p = d.forwardRef(
    (w, C) => {
      const { scope: S, children: k } = w, P = i(u, S), E = J(C, P.collectionRef);
      return /* @__PURE__ */ l.jsx(m, { ref: E, children: k });
    }
  );
  p.displayName = u;
  const f = e + "CollectionItemSlot", h = "data-radix-collection-item", x = /* @__PURE__ */ qt(f), v = d.forwardRef(
    (w, C) => {
      const { scope: S, children: k, ...P } = w, E = d.useRef(null), [R, T] = d.useState(null), O = J(C, E, T), M = i(f, S), { setItemMap: W } = M, K = d.useRef(P);
      Zv(K.current, P) || (K.current = P);
      const te = K.current;
      return d.useEffect(() => {
        const q = te;
        return W((Y) => R ? Y.has(R) ? Y.set(R, { ...q, element: R }).toSorted(wu) : (Y.set(R, { ...q, element: R }), Y.toSorted(wu)) : Y), () => {
          W((Y) => !R || !Y.has(R) ? Y : (Y.delete(R), new tc(Y)));
        };
      }, [R, te, W]), /* @__PURE__ */ l.jsx(x, { [h]: "", ref: O, children: k });
    }
  );
  v.displayName = f;
  function b() {
    return d.useState(new tc());
  }
  ze(b, "useInitCollection");
  function g(w) {
    const { itemMap: C } = i(e + "CollectionConsumer", w);
    return C;
  }
  return ze(g, "useCollection"), [
    { Provider: a, Slot: p, ItemSlot: v },
    {
      createCollectionScope: r,
      useCollection: g,
      useInitCollection: b
    }
  ];
}
ze(wk, "createCollection");
function Zv(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
ze(Zv, "shallowEqual");
function Jv(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ze(Jv, "isElementPreceding");
function wu(e, t) {
  return !e[1].element || !t[1].element ? 0 : Jv(e[1].element, t[1].element) ? -1 : 1;
}
ze(wu, "sortByDocumentPosition");
function ex(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
ze(ex, "getChildListObserver");
var yk = Object.defineProperty, To = (e, t) => yk(e, "name", { value: t, configurable: !0 }), tx = !!(typeof window < "u" && window.document && window.document.createElement);
function _(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ To(function(o) {
    if (e == null || e(o), n === !1 || !o || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  }, "handleEvent");
}
To(_, "composeEventHandlers");
function bk(e) {
  var t;
  if (!tx)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
To(bk, "getOwnerWindow");
function yu(e) {
  if (!tx)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
To(yu, "getOwnerDocument");
function nx(e, t = !1) {
  const { activeElement: n } = yu(e);
  if (!(n != null && n.nodeName))
    return null;
  if (rx(n) && n.contentDocument)
    return nx(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = yu(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
To(nx, "getActiveElement");
function rx(e) {
  return e.tagName === "IFRAME";
}
To(rx, "isFrame");
var Ne = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, Ck = Object.defineProperty, Sk = (e, t) => Ck(e, "name", { value: t, configurable: !0 }), Cm = Po[" useEffectEvent ".trim().toString()], Sm = Po[" useInsertionEffect ".trim().toString()];
function ox(e) {
  if (typeof Cm == "function")
    return Cm(e);
  const t = d.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Sm == "function" ? Sm(() => {
    t.current = e;
  }) : Ne(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
Sk(ox, "useEffectEvent");
var kk = Object.defineProperty, Ki = (e, t) => kk(e, "name", { value: t, configurable: !0 }), Pk = Po[" useInsertionEffect ".trim().toString()] || Ne;
function Ee({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Ki(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, i, a] = ix({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, c = s ? e : o, u = d.useCallback(
    (m) => {
      var p;
      if (s) {
        const f = ax(m) ? m(e) : m;
        f !== e && ((p = a.current) == null || p.call(a, f));
      } else
        i(m);
    },
    [s, e, i, a]
  );
  return [c, u];
}
Ki(Ee, "useControllableState");
function ix({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), i = d.useRef(t);
  return Pk(() => {
    i.current = t;
  }, [t]), d.useEffect(() => {
    var a;
    o.current !== n && ((a = i.current) == null || a.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
Ki(ix, "useUncontrolledState");
function ax(e) {
  return typeof e == "function";
}
Ki(ax, "isFunction");
var km = Symbol("RADIX:SYNC_STATE");
function Ek(e, t, n, r) {
  const { prop: o, defaultProp: i, onChange: a, caller: s } = t, c = o !== void 0, u = ox(a), m = [{ ...n, state: i }];
  r && m.push(r);
  const [p, f] = d.useReducer(
    (b, g) => {
      if (g.type === km)
        return { ...b, state: g.state };
      const y = e(b, g);
      return c && !Object.is(y.state, b.state) && u(y.state), y;
    },
    ...m
  ), h = p.state, x = d.useRef(h);
  d.useEffect(() => {
    x.current !== h && (x.current = h, c || u(h));
  }, [h, x, c]);
  const v = d.useMemo(() => o !== void 0 ? { ...p, state: o } : p, [p, o]);
  return d.useEffect(() => {
    c && !Object.is(o, p.state) && f({ type: km, state: o });
  }, [o, p.state, c]), [v, f];
}
Ki(Ek, "useControllableStateReducer");
var jk = Object.defineProperty, Nk = (e, t) => jk(e, "name", { value: t, configurable: !0 }), Tk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], B = Tk.reduce((e, t) => {
  const n = /* @__PURE__ */ qt(`Primitive.${t}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ii(e, t) {
  e && No.flushSync(() => e.dispatchEvent(t));
}
Nk(Ii, "dispatchDiscreteCustomEvent");
var Rk = Object.defineProperty, bn = (e, t) => Rk(e, "name", { value: t, configurable: !0 });
function sx(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
bn(sx, "useStateMachine");
var nt = /* @__PURE__ */ bn((e) => {
  const { present: t, children: n } = e, r = lx(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), i = cx(r.ref, ux(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
}, "Presence");
function lx(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), a = d.useRef(void 0), s = e ? "mounted" : "unmounted", [c, u] = sx(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    c === "mounted" ? (i.current = a.current ?? Lr(r.current), a.current = void 0) : i.current = "none";
  }, [c]), Ne(() => {
    const m = r.current, p = o.current;
    if (p !== e) {
      const h = i.current, x = Lr(m);
      e ? (a.current = x, u("MOUNT")) : x === "none" || (m == null ? void 0 : m.display) === "none" ? u("UNMOUNT") : u(p && h !== x ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), Ne(() => {
    if (t) {
      let m;
      const p = t.ownerDocument.defaultView ?? window, f = /* @__PURE__ */ bn((x) => {
        const b = Lr(r.current).includes(CSS.escape(x.animationName));
        if (x.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ bn((x) => {
        x.target === t && (i.current = Lr(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        p.clearTimeout(m), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: d.useCallback((m) => {
      if (m) {
        const p = getComputedStyle(m);
        r.current = p, a.current = Lr(p);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
bn(lx, "usePresence");
function bu(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
bn(bu, "setRef");
function cx(...e) {
  const t = d.useRef(e);
  return t.current = e, d.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const i = r.map((a) => {
      const s = bu(a, n);
      return !o && typeof s == "function" && (o = !0), s;
    });
    if (o)
      return () => {
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          typeof s == "function" ? s() : bu(r[a], null);
        }
      };
  }, []);
}
bn(cx, "useStableComposedRefs");
function Lr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
bn(Lr, "getAnimationName");
function ux(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
bn(ux, "getElementRef");
var Mk = Object.defineProperty, _k = (e, t) => Mk(e, "name", { value: t, configurable: !0 }), Ik = Po[" useId ".trim().toString()] || (() => {
}), Ak = 0;
function pe(e) {
  const [t, n] = d.useState(Ik());
  return Ne(() => {
    e || n((r) => r ?? String(Ak++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
_k(pe, "useId");
var Dk = Object.defineProperty, Yi = (e, t) => Dk(e, "name", { value: t, configurable: !0 }), Wd = "Collapsible", [Ok, dx] = /* @__PURE__ */ ke(Wd), [$k, Kd] = Ok(Wd), fx = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Yi(function(t, n) {
    const {
      __scopeCollapsible: r,
      open: o,
      defaultOpen: i,
      disabled: a,
      onOpenChange: s,
      ...c
    } = t, [u, m] = Ee({
      prop: o,
      defaultProp: i ?? !1,
      onChange: s,
      caller: Wd
    });
    return /* @__PURE__ */ l.jsx(
      $k,
      {
        scope: r,
        disabled: a,
        contentId: pe(),
        open: u,
        onOpenToggle: d.useCallback(() => m((p) => !p), [m]),
        children: /* @__PURE__ */ l.jsx(
          B.div,
          {
            "data-state": Xs(u),
            "data-disabled": a ? "" : void 0,
            ...c,
            ref: n
          }
        )
      }
    );
  }, "Collapsible")
), zk = "CollapsibleTrigger", px = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Yi(function(t, n) {
    const { __scopeCollapsible: r, ...o } = t, i = Kd(zk, r);
    return /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        "aria-controls": i.open ? i.contentId : void 0,
        "aria-expanded": i.open || !1,
        "data-state": Xs(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        ...o,
        ref: n,
        onClick: _(t.onClick, i.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
), mx = "CollapsibleContent", hx = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Yi(function(t, n) {
    const { forceMount: r, ...o } = t, i = Kd(mx, t.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(nt, { present: r || i.open, children: ({ present: a }) => /* @__PURE__ */ l.jsx(Fk, { ...o, ref: n, present: a }) });
  }, "CollapsibleContent")
), Fk = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ Yi(function(t, n) {
  const { __scopeCollapsible: r, present: o, children: i, ...a } = t, s = Kd(mx, r), [c, u] = d.useState(o), m = d.useRef(null), p = J(n, m), f = d.useRef(0), h = f.current, x = d.useRef(0), v = x.current, b = s.open || c, g = d.useRef(b), y = d.useRef(void 0);
  return d.useEffect(() => {
    const w = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Ne(() => {
    const w = m.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const C = w.getBoundingClientRect();
      f.current = C.height, x.current = C.width, g.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), u(o);
    }
  }, [s.open, o]), /* @__PURE__ */ l.jsx(
    B.div,
    {
      "data-state": Xs(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !b,
      ...a,
      ref: p,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...t.style
      },
      children: b && i
    }
  );
}, "CollapsibleContentImpl"));
function Xs(e) {
  return e ? "open" : "closed";
}
Yi(Xs, "getState");
var Lk = Object.defineProperty, Vk = (e, t) => Lk(e, "name", { value: t, configurable: !0 }), Bk = {
  LTR: "ltr"
}, Hk = d.createContext(void 0);
function Jt(e) {
  const t = d.useContext(Hk);
  return e || t || Bk.LTR;
}
Vk(Jt, "useDirection");
var Uk = Object.defineProperty, ht = (e, t) => Uk(e, "name", { value: t, configurable: !0 }), Gk = {
  Multiple: "multiple"
}, Xo = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, Wk = {
  LTR: "ltr"
}, en = "Accordion", Kk = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Yd, Yk, Xk] = /* @__PURE__ */ En(en), [qs, IA] = /* @__PURE__ */ ke(en, [
  Xk,
  dx
]), Xd = dx(), qk = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ht(function(t, n) {
    const { type: r, ...o } = t, i = o, a = o;
    return /* @__PURE__ */ l.jsx(Yd.Provider, { scope: t.__scopeAccordion, children: r === Gk.Multiple ? /* @__PURE__ */ l.jsx(eP, { ...a, ref: n }) : /* @__PURE__ */ l.jsx(Jk, { ...i, ref: n }) });
  }, "Accordion")
), [gx, Qk] = qs(en), [vx, Zk] = qs(
  en,
  { collapsible: !1 }
), Jk = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ht(function(t, n) {
    const {
      value: r,
      defaultValue: o,
      onValueChange: i = /* @__PURE__ */ ht(() => {
      }, "onValueChange"),
      collapsible: a = !1,
      ...s
    } = t, [c, u] = Ee({
      prop: r,
      defaultProp: o ?? "",
      onChange: i,
      caller: en
    });
    return /* @__PURE__ */ l.jsx(
      gx,
      {
        scope: t.__scopeAccordion,
        value: d.useMemo(() => c ? [c] : [], [c]),
        onItemOpen: u,
        onItemClose: d.useCallback(() => a && u(""), [a, u]),
        children: /* @__PURE__ */ l.jsx(vx, { scope: t.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ l.jsx(xx, { ...s, ref: n }) })
      }
    );
  }, "AccordionImplSingle")
), eP = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ ht(function(t, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: i = /* @__PURE__ */ ht(() => {
    }, "onValueChange"),
    ...a
  } = t, [s, c] = Ee({
    prop: r,
    defaultProp: o ?? [],
    onChange: i,
    caller: en
  }), u = d.useCallback(
    (p) => c((f = []) => [...f, p]),
    [c]
  ), m = d.useCallback(
    (p) => c((f = []) => f.filter((h) => h !== p)),
    [c]
  );
  return /* @__PURE__ */ l.jsx(
    gx,
    {
      scope: t.__scopeAccordion,
      value: s,
      onItemOpen: u,
      onItemClose: m,
      children: /* @__PURE__ */ l.jsx(vx, { scope: t.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(xx, { ...a, ref: n }) })
    }
  );
}, "AccordionImplMultiple")), [tP, Qs] = qs(en), xx = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ht(function(t, n) {
    const {
      __scopeAccordion: r,
      disabled: o,
      dir: i,
      orientation: a = Xo.Vertical,
      ...s
    } = t, c = d.useRef(null), u = J(c, n), m = Yk(r), f = Jt(i) === Wk.LTR, h = _(t.onKeyDown, (x) => {
      var R;
      if (!Kk.includes(x.key)) return;
      const v = x.target, b = m().filter((T) => {
        var O;
        return !((O = T.ref.current) != null && O.disabled);
      }), g = b.findIndex((T) => T.ref.current === v), y = b.length;
      if (g === -1) return;
      x.preventDefault();
      let w = g;
      const C = 0, S = y - 1, k = /* @__PURE__ */ ht(() => {
        w = g + 1, w > S && (w = C);
      }, "moveNext"), P = /* @__PURE__ */ ht(() => {
        w = g - 1, w < C && (w = S);
      }, "movePrev");
      switch (x.key) {
        case "Home":
          w = C;
          break;
        case "End":
          w = S;
          break;
        case "ArrowRight":
          a === Xo.Horizontal && (f ? k() : P());
          break;
        case "ArrowDown":
          a === Xo.Vertical && k();
          break;
        case "ArrowLeft":
          a === Xo.Horizontal && (f ? P() : k());
          break;
        case "ArrowUp":
          a === Xo.Vertical && P();
          break;
      }
      const E = w % y;
      (R = b[E].ref.current) == null || R.focus();
    });
    return /* @__PURE__ */ l.jsx(
      tP,
      {
        scope: r,
        disabled: o,
        direction: i,
        orientation: a,
        children: /* @__PURE__ */ l.jsx(Yd.Slot, { scope: r, children: /* @__PURE__ */ l.jsx(
          B.div,
          {
            ...s,
            "data-orientation": a,
            ref: u,
            onKeyDown: o ? void 0 : h
          }
        ) })
      }
    );
  }, "AccordionImpl")
), Cu = "AccordionItem", [nP, qd] = qs(Cu), rP = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ht(function(t, n) {
    const { __scopeAccordion: r, value: o, ...i } = t, a = Qs(Cu, r), s = Qk(Cu, r), c = Xd(r), u = pe(), m = o && s.value.includes(o) || !1, p = a.disabled || t.disabled;
    return /* @__PURE__ */ l.jsx(
      nP,
      {
        scope: r,
        open: m,
        disabled: p,
        triggerId: u,
        children: /* @__PURE__ */ l.jsx(
          fx,
          {
            "data-orientation": a.orientation,
            "data-state": Qd(m),
            ...c,
            ...i,
            ref: n,
            disabled: p,
            open: m,
            onOpenChange: (f) => {
              f ? s.onItemOpen(o) : s.onItemClose(o);
            }
          }
        )
      }
    );
  }, "AccordionItem")
), oP = "AccordionHeader", iP = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ht(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, i = Qs(en, r), a = qd(oP, r);
    return /* @__PURE__ */ l.jsx(
      B.h3,
      {
        "data-orientation": i.orientation,
        "data-state": Qd(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "AccordionHeader")
), Pm = "AccordionTrigger", aP = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ht(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, i = Qs(en, r), a = qd(Pm, r), s = Zk(Pm, r), c = Xd(r);
    return /* @__PURE__ */ l.jsx(Yd.ItemSlot, { scope: r, children: /* @__PURE__ */ l.jsx(
      px,
      {
        "aria-disabled": a.open && !s.collapsible || void 0,
        "data-orientation": i.orientation,
        id: a.triggerId,
        ...c,
        ...o,
        ref: n
      }
    ) });
  }, "AccordionTrigger")
), sP = "AccordionContent", lP = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ht(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, i = Qs(en, r), a = qd(sP, r), s = Xd(r);
    return /* @__PURE__ */ l.jsx(
      hx,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": i.orientation,
        ...s,
        ...o,
        ref: n,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...t.style
        }
      }
    );
  }, "AccordionContent")
);
function Qd(e) {
  return e ? "open" : "closed";
}
ht(Qd, "getState");
const Zd = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": !0
}, wx = (e) => /* @__PURE__ */ l.jsx("svg", { ...Zd, ...e, children: /* @__PURE__ */ l.jsx("path", { d: "M20 6 9 17l-5-5" }) }), yx = (e) => /* @__PURE__ */ l.jsx("svg", { ...Zd, ...e, children: /* @__PURE__ */ l.jsx("path", { d: "m6 9 6 6 6-6" }) }), cP = (e) => /* @__PURE__ */ l.jsx("svg", { ...Zd, ...e, children: /* @__PURE__ */ l.jsx("path", { d: "M18 6 6 18M6 6l12 12" }) });
function bx(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = bx(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Cx() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = bx(e)) && (r && (r += " "), r += t);
  return r;
}
const Jd = "-", uP = (e) => {
  const t = fP(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Jd);
      return s[0] === "" && s.length !== 1 && s.shift(), Sx(s, t) || dP(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = n[a] || [];
      return s && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, Sx = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Sx(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Jd);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, Em = /^\[(.+)\]$/, dP = (e) => {
  if (Em.test(e)) {
    const t = Em.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, fP = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return mP(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    Su(a, r, i, t);
  }), r;
}, Su = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : jm(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (pP(o)) {
        Su(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Su(a, jm(t, i), n, r);
    });
  });
}, jm = (e, t) => {
  let n = e;
  return t.split(Jd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, pP = (e) => e.isThemeGetter, mP = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [n, o];
}) : e, hP = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}, kx = "!", gP = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const c = [];
    let u = 0, m = 0, p;
    for (let b = 0; b < s.length; b++) {
      let g = s[b];
      if (u === 0) {
        if (g === o && (r || s.slice(b, b + i) === t)) {
          c.push(s.slice(m, b)), m = b + i;
          continue;
        }
        if (g === "/") {
          p = b;
          continue;
        }
      }
      g === "[" ? u++ : g === "]" && u--;
    }
    const f = c.length === 0 ? s : s.substring(m), h = f.startsWith(kx), x = h ? f.substring(1) : f, v = p && p > m ? p - m : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: a
  }) : a;
}, vP = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, xP = (e) => ({
  cache: hP(e.cacheSize),
  parseClassName: gP(e),
  ...uP(e)
}), wP = /\s+/, yP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(wP);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: h
    } = n(u);
    let x = !!h, v = r(x ? f.substring(0, h) : f);
    if (!v) {
      if (!x) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = r(f), !v) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      x = !1;
    }
    const b = vP(m).join(":"), g = p ? b + kx : b, y = g + v;
    if (i.includes(y))
      continue;
    i.push(y);
    const w = o(v, x);
    for (let C = 0; C < w.length; ++C) {
      const S = w[C];
      i.push(g + S);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function bP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Px(t)) && (r && (r += " "), r += n);
  return r;
}
const Px = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Px(e[r])) && (n && (n += " "), n += t);
  return n;
};
function CP(e, ...t) {
  let n, r, o, i = a;
  function a(c) {
    const u = t.reduce((m, p) => p(m), e());
    return n = xP(u), r = n.cache.get, o = n.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = r(c);
    if (u)
      return u;
    const m = yP(c, n);
    return o(c, m), m;
  }
  return function() {
    return i(bP.apply(null, arguments));
  };
}
const ge = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ex = /^\[(?:([a-z-]+):)?(.+)\]$/i, SP = /^\d+\/\d+$/, kP = /* @__PURE__ */ new Set(["px", "full", "screen"]), PP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, EP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, NP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, TP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, on = (e) => co(e) || kP.has(e) || SP.test(e), _n = (e) => Ro(e, "length", $P), co = (e) => !!e && !Number.isNaN(Number(e)), nc = (e) => Ro(e, "number", co), qo = (e) => !!e && Number.isInteger(Number(e)), RP = (e) => e.endsWith("%") && co(e.slice(0, -1)), ne = (e) => Ex.test(e), In = (e) => PP.test(e), MP = /* @__PURE__ */ new Set(["length", "size", "percentage"]), _P = (e) => Ro(e, MP, jx), IP = (e) => Ro(e, "position", jx), AP = /* @__PURE__ */ new Set(["image", "url"]), DP = (e) => Ro(e, AP, FP), OP = (e) => Ro(e, "", zP), Qo = () => !0, Ro = (e, t, n) => {
  const r = Ex.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, $P = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  EP.test(e) && !jP.test(e)
), jx = () => !1, zP = (e) => NP.test(e), FP = (e) => TP.test(e), LP = () => {
  const e = ge("colors"), t = ge("spacing"), n = ge("blur"), r = ge("brightness"), o = ge("borderColor"), i = ge("borderRadius"), a = ge("borderSpacing"), s = ge("borderWidth"), c = ge("contrast"), u = ge("grayscale"), m = ge("hueRotate"), p = ge("invert"), f = ge("gap"), h = ge("gradientColorStops"), x = ge("gradientColorStopPositions"), v = ge("inset"), b = ge("margin"), g = ge("opacity"), y = ge("padding"), w = ge("saturate"), C = ge("scale"), S = ge("sepia"), k = ge("skew"), P = ge("space"), E = ge("translate"), R = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", ne, t], M = () => [ne, t], W = () => ["", on, _n], K = () => ["auto", co, ne], te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", ne], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [co, ne];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Qo],
      spacing: [on, _n],
      blur: ["none", "", In, ne],
      brightness: ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", In, ne],
      borderSpacing: M(),
      borderWidth: W(),
      contrast: ee(),
      grayscale: I(),
      hueRotate: ee(),
      invert: I(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [RP, _n],
      inset: O(),
      margin: O(),
      opacity: ee(),
      padding: M(),
      saturate: ee(),
      scale: ee(),
      sepia: I(),
      skew: ee(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ne]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [In]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...te(), ne]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", qo, ne]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ne]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: I()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: I()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", qo, ne]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Qo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qo, ne]
        }, ne]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Qo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qo, ne]
        }, ne]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ne]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ne]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...j()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...j(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [P]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ne, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ne, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ne, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [In]
        }, In]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ne, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ne, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", In, _n]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", nc]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ne]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", co, nc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", on, ne]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ne]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ne]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [g]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", on, _n]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", on, ne]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ne]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [g]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...te(), IP]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", _P]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, DP]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: q()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [on, ne]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [on, _n]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: W()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [on, _n]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", In, OP]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Qo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", In, ne]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ne]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ne]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ne]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [qo, ne]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ne]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ne]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [on, _n, nc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, VP = /* @__PURE__ */ CP(LP);
function we(...e) {
  return VP(Cx(e));
}
const Nm = qk, Nx = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  rP,
  {
    ref: n,
    className: we("border-b border-border data-[orientation=horizontal]:border-b-0 data-[orientation=horizontal]:border-r", e),
    ...t
  }
));
Nx.displayName = "AccordionItem";
const Tx = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(iP, { className: "flex", children: /* @__PURE__ */ l.jsxs(
  aP,
  {
    ref: r,
    className: we(
      "flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(yx, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Tx.displayName = "AccordionTrigger";
const Rx = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  lP,
  {
    ref: r,
    className: we(
      "overflow-hidden text-sm data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      e
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
Rx.displayName = "AccordionContent";
function BP({ node: e }) {
  const t = e.props, n = t.items.map((r, o) => /* @__PURE__ */ l.jsxs(
    Nx,
    {
      value: r.value,
      disabled: r.disabled,
      className: t.orientation === "horizontal" && o === t.items.length - 1 ? "border-r-0" : void 0,
      children: [
        /* @__PURE__ */ l.jsx(Tx, { children: r.title }),
        /* @__PURE__ */ l.jsx(Rx, { children: yn(r.content) })
      ]
    },
    r.value
  ));
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { className: "w-full", children: t.type === "single" ? /* @__PURE__ */ l.jsx(
      Nm,
      {
        type: "single",
        value: typeof t.value == "string" ? t.value : "",
        collapsible: t.collapsible,
        orientation: t.orientation,
        dir: t.dir,
        onValueChange: (r) => e.setValue(r),
        className: "w-full data-[orientation=horizontal]:flex data-[orientation=horizontal]:items-start",
        children: n
      }
    ) : /* @__PURE__ */ l.jsx(
      Nm,
      {
        type: "multiple",
        value: Array.isArray(t.value) ? t.value : [],
        orientation: t.orientation,
        dir: t.dir,
        onValueChange: (r) => e.setValue(r),
        className: "w-full data-[orientation=horizontal]:flex data-[orientation=horizontal]:items-start",
        children: n
      }
    ) })
  );
}
function HP({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        role: t.variant === "destructive" ? "alert" : "status",
        className: `relative w-full rounded-lg border p-4 ${t.variant === "destructive" ? "border-destructive/50 text-destructive" : "bg-background text-foreground"}`,
        children: [
          t.title && /* @__PURE__ */ l.jsx("h5", { className: "mb-1 font-medium leading-none tracking-tight", children: t.title }),
          t.description && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-muted-foreground", children: t.description }),
          t.content.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "mt-3 grid gap-2", children: oe(t.content) })
        ]
      }
    )
  );
}
var UP = Object.defineProperty, GP = (e, t) => UP(e, "name", { value: t, configurable: !0 });
function Ae(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
GP(Ae, "useCallbackRef");
var WP = Object.defineProperty, $e = (e, t) => WP(e, "name", { value: t, configurable: !0 }), ku = "dismissableLayer.update", KP = "dismissableLayer.pointerDownOutside", YP = "dismissableLayer.focusOutside", Tm, Mx = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Mo = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $e(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      onFocusOutside: s,
      onInteractOutside: c,
      onDismiss: u,
      ...m
    } = t, p = d.useContext(Mx), [f, h] = d.useState(null), x = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = d.useState({}), b = J(n, h), g = Array.from(p.layers), [y] = [
      ...p.layersWithOutsidePointerEventsDisabled
    ].slice(-1), w = y ? g.indexOf(y) : -1, C = f ? g.indexOf(f) : -1, S = p.layersWithOutsidePointerEventsDisabled.size > 0, k = C >= w, P = d.useRef(!1), E = Ix(
      (M) => {
        a == null || a(M), c == null || c(M), M.defaultPrevented || u == null || u();
      },
      {
        ownerDocument: x,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: P,
        dismissableSurfaces: p.dismissableSurfaces,
        shouldHandlePointerDownOutside: d.useCallback(
          (M) => {
            if (!(M instanceof Node))
              return !1;
            const W = [...p.branches].some(
              (K) => K.contains(M)
            );
            return k && !W;
          },
          [p.branches, k]
        )
      }
    ), R = Ax((M) => {
      if (o && P.current)
        return;
      const W = M.target;
      [...p.branches].some((te) => te.contains(W)) || (s == null || s(M), c == null || c(M), M.defaultPrevented || u == null || u());
    }, x), T = f ? C === g.length - 1 : !1, O = Ae((M) => {
      M.key === "Escape" && (i == null || i(M), !M.defaultPrevented && u && (M.preventDefault(), u()));
    });
    return d.useEffect(() => {
      if (T)
        return x.addEventListener("keydown", O, { capture: !0 }), () => x.removeEventListener("keydown", O, { capture: !0 });
    }, [x, T, O]), d.useEffect(() => {
      if (f)
        return r && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Tm = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(f)), p.layers.add(f), Pu(), () => {
          r && (p.layersWithOutsidePointerEventsDisabled.delete(f), p.layersWithOutsidePointerEventsDisabled.size === 0 && (x.body.style.pointerEvents = Tm));
        };
    }, [f, x, r, p]), d.useEffect(() => () => {
      f && (p.layers.delete(f), p.layersWithOutsidePointerEventsDisabled.delete(f), Pu());
    }, [f, p]), d.useEffect(() => {
      const M = /* @__PURE__ */ $e(() => v({}), "handleUpdate");
      return document.addEventListener(ku, M), () => document.removeEventListener(ku, M);
    }, []), /* @__PURE__ */ l.jsx(
      B.div,
      {
        ...m,
        ref: b,
        style: {
          pointerEvents: S ? k ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: _(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: _(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: _(
          t.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function _x() {
  const e = d.useContext(Mx), [t, n] = d.useState(null);
  return d.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
$e(_x, "useDismissableLayerSurface");
var XP = /* @__PURE__ */ $e(() => !0, "IS_TRUE");
function Ix(e, t) {
  const {
    ownerDocument: n = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: a = XP
  } = t, s = Ae(e), c = d.useRef(!1), u = d.useRef(!1), m = d.useRef(/* @__PURE__ */ new Map()), p = d.useRef(() => {
  });
  return d.useEffect(() => {
    function f() {
      u.current = !1, o.current = !1, m.current.clear();
    }
    $e(f, "resetOutsideInteraction");
    function h() {
      return Array.from(m.current.values()).some(Boolean);
    }
    $e(h, "isOutsideInteractionIntercepted");
    function x(w) {
      if (!u.current)
        return;
      const C = w.target;
      C instanceof Node && [...i].some((k) => k.contains(C)) || m.current.set(w.type, !0), w.type === "click" && window.setTimeout(() => {
        u.current && p.current();
      }, 0);
    }
    $e(x, "handleInteractionCapture");
    function v(w) {
      u.current && m.current.set(w.type, !1);
    }
    $e(v, "handleInteractionBubble");
    const b = /* @__PURE__ */ $e((w) => {
      if (w.target && !c.current) {
        let C = function() {
          n.removeEventListener("click", p.current);
          const k = h();
          f(), k || ef(
            KP,
            s,
            S,
            { discrete: !0 }
          );
        };
        if ($e(C, "handleAndDispatchPointerDownOutsideEvent"), !a(w.target)) {
          n.removeEventListener("click", p.current), f(), c.current = !1;
          return;
        }
        const S = { originalEvent: w };
        u.current = !0, o.current = r && w.button === 0, m.current.clear(), !r || w.button !== 0 ? C() : (n.removeEventListener("click", p.current), p.current = C, n.addEventListener("click", p.current, { once: !0 }));
      } else
        n.removeEventListener("click", p.current), f();
      c.current = !1;
    }, "handlePointerDown"), g = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const w of g)
      n.addEventListener(w, x, !0), n.addEventListener(w, v);
    const y = window.setTimeout(() => {
      n.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(y), n.removeEventListener("pointerdown", b), n.removeEventListener("click", p.current);
      for (const w of g)
        n.removeEventListener(w, x, !0), n.removeEventListener(w, v);
    };
  }, [
    n,
    s,
    r,
    o,
    i,
    a
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ $e(() => c.current = !0, "onPointerDownCapture")
  };
}
$e(Ix, "usePointerDownOutside");
function Ax(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ae(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = /* @__PURE__ */ $e((i) => {
      i.target && !r.current && ef(YP, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ $e(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ $e(() => r.current = !1, "onBlurCapture")
  };
}
$e(Ax, "useFocusOutside");
function Pu() {
  const e = new CustomEvent(ku);
  document.dispatchEvent(e);
}
$e(Pu, "dispatchUpdate");
function ef(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ii(o, i) : o.dispatchEvent(i);
}
$e(ef, "handleAndDispatchCustomEvent");
var qP = Object.defineProperty, Me = (e, t) => qP(e, "name", { value: t, configurable: !0 }), rc = "focusScope.autoFocusOnMount", oc = "focusScope.autoFocusOnUnmount", Rm = { bubbles: !1, cancelable: !0 }, Zs = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Me(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      branches: i,
      onMountAutoFocus: a,
      onUnmountAutoFocus: s,
      ...c
    } = t, [u, m] = d.useState(null), p = Ae(a), f = Ae(s), h = d.useRef(null), x = J(n, m), v = d.useRef(i);
    d.useEffect(() => {
      v.current = i;
    });
    const b = d.useCallback(
      (w) => {
        var C;
        return w ? u != null && u.contains(w) ? !0 : !!((C = v.current) != null && C.some((S) => S.contains(w))) : !1;
      },
      [u]
    ), g = d.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    d.useEffect(() => {
      if (o) {
        let w = function(P) {
          if (g.paused || !u) return;
          const E = P.target;
          b(E) ? h.current = E : sn(h.current, { select: !0 });
        }, C = function(P) {
          if (g.paused || !u) return;
          const E = P.relatedTarget;
          E !== null && (b(E) || sn(h.current, { select: !0 }));
        }, S = function(P) {
          if (document.activeElement === document.body)
            for (const R of P)
              R.removedNodes.length > 0 && sn(u);
        };
        Me(w, "handleFocusIn"), Me(C, "handleFocusOut"), Me(S, "handleMutations"), document.addEventListener("focusin", w), document.addEventListener("focusout", C);
        const k = new MutationObserver(S);
        return u && k.observe(u, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", w), document.removeEventListener("focusout", C), k.disconnect();
        };
      }
    }, [o, u, g.paused, b]), d.useEffect(() => {
      if (u) {
        Mm.add(g);
        const w = document.activeElement;
        if (!u.contains(w)) {
          const S = new CustomEvent(rc, Rm);
          u.addEventListener(rc, p), u.dispatchEvent(S), S.defaultPrevented || (Ox(Vx(tf(u)), { select: !0 }), document.activeElement === w && sn(u));
        }
        return () => {
          u.removeEventListener(rc, p), setTimeout(() => {
            const S = new CustomEvent(oc, Rm);
            u.addEventListener(oc, f), u.dispatchEvent(S), S.defaultPrevented || sn(w ?? document.body, { select: !0 }), u.removeEventListener(oc, f), Mm.remove(g);
          }, 0);
        };
      }
    }, [u, p, f, g]);
    const y = d.useCallback(
      (w) => {
        if (!r && !o || g.paused) return;
        const C = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, S = document.activeElement;
        if (C && S) {
          const k = w.currentTarget, [P, E] = $x(k);
          P && E ? !w.shiftKey && S === E ? (w.preventDefault(), r && sn(P, { select: !0 })) : w.shiftKey && S === P && (w.preventDefault(), r && sn(E, { select: !0 })) : S === k && w.preventDefault();
        }
      },
      [r, o, g.paused]
    );
    return /* @__PURE__ */ l.jsx(B.div, { tabIndex: -1, ...c, ref: x, onKeyDown: y });
  }, "FocusScope")
), Dx = d.createContext(null);
function Js({ registry: e, children: t }) {
  return e ? /* @__PURE__ */ l.jsx(Dx.Provider, { value: e, children: t }) : t;
}
Me(Js, "FocusScopeBranchProvider");
function el() {
  const [e, t] = d.useState([]), n = d.useMemo(
    () => ({
      add: /* @__PURE__ */ Me((r) => t((o) => o.includes(r) ? o : [...o, r]), "add"),
      remove: /* @__PURE__ */ Me((r) => t((o) => o.filter((i) => i !== r)), "remove")
    }),
    []
  );
  return { nodes: e, registry: n };
}
Me(el, "useFocusScopeBranchRegistry");
function tl(e) {
  const t = d.useContext(Dx);
  d.useEffect(() => {
    if (!(!e || !t))
      return t.add(e), () => t.remove(e);
  }, [e, t]);
}
Me(tl, "useFocusScopeBranch");
function Ox(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (sn(r, { select: t }), document.activeElement !== n) return;
}
Me(Ox, "focusFirst");
function $x(e) {
  const t = tf(e), n = Eu(t, e), r = Eu(t.reverse(), e);
  return [n, r];
}
Me($x, "getTabbableEdges");
function tf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Me((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
Me(tf, "getTabbableCandidates");
function Eu(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : zx(r, { upTo: t })))
      return r;
}
Me(Eu, "findVisible");
function zx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
Me(zx, "isHidden");
function Fx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
Me(Fx, "isSelectableInput");
function sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Fx(e) && t && e.select();
  }
}
Me(sn, "focus");
var Mm = Lx();
function Lx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ju(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ju(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
Me(Lx, "createFocusScopesStack");
function ju(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
Me(ju, "arrayRemove");
function Vx(e) {
  return e.filter((t) => t.tagName !== "A");
}
Me(Vx, "removeLinks");
var QP = Object.defineProperty, ZP = (e, t) => QP(e, "name", { value: t, configurable: !0 }), _o = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ZP(function(t, n) {
    var c;
    const { container: r, ...o } = t, [i, a] = d.useState(!1);
    Ne(() => a(!0), []);
    const s = r || i && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
    return s ? No.createPortal(/* @__PURE__ */ l.jsx(B.div, { ...o, ref: n }), s) : null;
  }, "Portal")
), JP = Object.defineProperty, nf = (e, t) => JP(e, "name", { value: t, configurable: !0 }), Ma = 0, Vt = null;
function eE(e) {
  return Io(), e.children;
}
nf(eE, "FocusGuards");
function Io() {
  d.useEffect(() => {
    Vt || (Vt = { start: Nu(), end: Nu() });
    const { start: e, end: t } = Vt;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Ma++, () => {
      Ma === 1 && (Vt == null || Vt.start.remove(), Vt == null || Vt.end.remove(), Vt = null), Ma = Math.max(0, Ma - 1);
    };
  }, []);
}
nf(Io, "useFocusGuards");
function Nu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
nf(Nu, "createFocusGuard");
var Ut = function() {
  return Ut = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ut.apply(this, arguments);
};
function Bx(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function tE(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Za = "right-scroll-bar-position", Ja = "width-before-scroll-bar", nE = "with-scroll-bars-hidden", rE = "--removed-body-scroll-bar-size";
function ic(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function oE(e, t) {
  var n = d.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var iE = typeof window < "u" ? d.useLayoutEffect : d.useEffect, _m = /* @__PURE__ */ new WeakMap();
function aE(e, t) {
  var n = oE(null, function(r) {
    return e.forEach(function(o) {
      return ic(o, r);
    });
  });
  return iE(function() {
    var r = _m.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || ic(s, null);
      }), i.forEach(function(s) {
        o.has(s) || ic(s, a);
      });
    }
    _m.set(n, e);
  }, [e]), n;
}
function sE(e) {
  return e;
}
function lE(e, t) {
  t === void 0 && (t = sE);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var c = function() {
        var m = a;
        a = [], m.forEach(i);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(m) {
          a.push(m), u();
        },
        filter: function(m) {
          return a = a.filter(m), n;
        }
      };
    }
  };
  return o;
}
function cE(e) {
  e === void 0 && (e = {});
  var t = lE(null);
  return t.options = Ut({ async: !0, ssr: !1 }, e), t;
}
var Hx = function(e) {
  var t = e.sideCar, n = Bx(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, Ut({}, n));
};
Hx.isSideCarExport = !0;
function uE(e, t) {
  return e.useMedium(t), Hx;
}
var Ux = cE(), ac = function() {
}, nl = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: ac,
    onWheelCapture: ac,
    onTouchMoveCapture: ac
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, m = e.enabled, p = e.shards, f = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, b = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, w = e.gapMode, C = Bx(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = f, k = aE([n, t]), P = Ut(Ut({}, C), o);
  return d.createElement(
    d.Fragment,
    null,
    m && d.createElement(S, { sideCar: Ux, removeScrollBar: u, shards: p, noRelative: h, noIsolation: x, inert: v, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: w }),
    a ? d.cloneElement(d.Children.only(s), Ut(Ut({}, P), { ref: k })) : d.createElement(y, Ut({}, P, { className: c, ref: k }), s)
  );
});
nl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nl.classNames = {
  fullWidth: Ja,
  zeroRight: Za
};
var dE = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function fE() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = dE();
  return t && e.setAttribute("nonce", t), e;
}
function pE(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function mE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var hE = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = fE()) && (pE(t, n), mE(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, gE = function() {
  var e = hE();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Gx = function() {
  var e = gE(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, vE = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sc = function(e) {
  return parseInt(e || "", 10) || 0;
}, xE = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [sc(n), sc(r), sc(o)];
}, wE = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vE;
  var t = xE(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yE = Gx(), uo = "data-scroll-locked", bE = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(nE, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(uo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Za, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ja, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Za, " .").concat(Za, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ja, " .").concat(Ja, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(uo, `] {
    `).concat(rE, ": ").concat(s, `px;
  }
`);
}, Im = function() {
  var e = parseInt(document.body.getAttribute(uo) || "0", 10);
  return isFinite(e) ? e : 0;
}, CE = function() {
  d.useEffect(function() {
    return document.body.setAttribute(uo, (Im() + 1).toString()), function() {
      var e = Im() - 1;
      e <= 0 ? document.body.removeAttribute(uo) : document.body.setAttribute(uo, e.toString());
    };
  }, []);
}, SE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  CE();
  var i = d.useMemo(function() {
    return wE(o);
  }, [o]);
  return d.createElement(yE, { styles: bE(i, !t, o, n ? "" : "!important") });
}, Tu = !1;
if (typeof window < "u")
  try {
    var _a = Object.defineProperty({}, "passive", {
      get: function() {
        return Tu = !0, !0;
      }
    });
    window.addEventListener("test", _a, _a), window.removeEventListener("test", _a, _a);
  } catch {
    Tu = !1;
  }
var Or = Tu ? { passive: !1 } : !1, kE = function(e) {
  return e.tagName === "TEXTAREA";
}, Wx = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !kE(e) && n[t] === "visible")
  );
}, PE = function(e) {
  return Wx(e, "overflowY");
}, EE = function(e) {
  return Wx(e, "overflowX");
}, Am = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Kx(e, r);
    if (o) {
      var i = Yx(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, jE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, NE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Kx = function(e, t) {
  return e === "v" ? PE(t) : EE(t);
}, Yx = function(e, t) {
  return e === "v" ? jE(t) : NE(t);
}, TE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, RE = function(e, t, n, r, o) {
  var i = TE(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), u = !1, m = a > 0, p = 0, f = 0;
  do {
    if (!s)
      break;
    var h = Yx(e, s), x = h[0], v = h[1], b = h[2], g = v - b - i * x;
    (x || g) && Kx(e, s) && (p += g, f += x);
    var y = s.parentNode;
    s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (m && Math.abs(p) < 1 || !m && Math.abs(f) < 1) && (u = !0), u;
}, Ia = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Dm = function(e) {
  return [e.deltaX, e.deltaY];
}, Om = function(e) {
  return e && "current" in e ? e.current : e;
}, ME = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _E = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, IE = 0, $r = [];
function AE(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(IE++)[0], i = d.useState(Gx)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = tE([e.lockRef.current], (e.shards || []).map(Om), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = d.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !a.current.allowPinchZoom;
    var g = Ia(v), y = n.current, w = "deltaX" in v ? v.deltaX : y[0] - g[0], C = "deltaY" in v ? v.deltaY : y[1] - g[1], S, k = v.target, P = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && P === "h" && k.type === "range")
      return !1;
    var E = window.getSelection(), R = E && E.anchorNode, T = R ? R === k || R.contains(k) : !1;
    if (T)
      return !1;
    var O = Am(P, k);
    if (!O)
      return !0;
    if (O ? S = P : (S = P === "v" ? "h" : "v", O = Am(P, k)), !O)
      return !1;
    if (!r.current && "changedTouches" in v && (w || C) && (r.current = S), !S)
      return !0;
    var M = r.current || S;
    return RE(M, b, v, M === "h" ? w : C);
  }, []), c = d.useCallback(function(v) {
    var b = v;
    if (!(!$r.length || $r[$r.length - 1] !== i)) {
      var g = "deltaY" in b ? Dm(b) : Ia(b), y = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && ME(S.delta, g);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var w = (a.current.shards || []).map(Om).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), C = w.length > 0 ? s(b, w[0]) : !a.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = d.useCallback(function(v, b, g, y) {
    var w = { name: v, delta: b, target: g, should: y, shadowParent: DE(g) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), m = d.useCallback(function(v) {
    n.current = Ia(v), r.current = void 0;
  }, []), p = d.useCallback(function(v) {
    u(v.type, Dm(v), v.target, s(v, e.lockRef.current));
  }, []), f = d.useCallback(function(v) {
    u(v.type, Ia(v), v.target, s(v, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return $r.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Or), document.addEventListener("touchmove", c, Or), document.addEventListener("touchstart", m, Or), function() {
      $r = $r.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, Or), document.removeEventListener("touchmove", c, Or), document.removeEventListener("touchstart", m, Or);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(i, { styles: _E(o) }) : null,
    h ? d.createElement(SE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function DE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const OE = uE(Ux, AE);
var Xi = d.forwardRef(function(e, t) {
  return d.createElement(nl, Ut({}, e, { ref: t, sideCar: OE }));
});
Xi.classNames = nl.classNames;
var $E = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, zr = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Da = {}, lc = 0, Xx = function(e) {
  return e && (e.host || Xx(e.parentNode));
}, zE = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Xx(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, FE = function(e, t, n, r) {
  var o = zE(t, Array.isArray(e) ? e : [e]);
  Da[n] || (Da[n] = /* @__PURE__ */ new WeakMap());
  var i = Da[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(p) {
    !p || s.has(p) || (s.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var m = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (s.has(f))
        m(f);
      else
        try {
          var h = f.getAttribute(r), x = h !== null && h !== "false", v = (zr.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
          zr.set(f, v), i.set(f, b), a.push(f), v === 1 && x && Aa.set(f, !0), b === 1 && f.setAttribute(n, "true"), x || f.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", f, g);
        }
    });
  };
  return m(t), s.clear(), lc++, function() {
    a.forEach(function(p) {
      var f = zr.get(p) - 1, h = i.get(p) - 1;
      zr.set(p, f), i.set(p, h), f || (Aa.has(p) || p.removeAttribute(r), Aa.delete(p)), h || p.removeAttribute(n);
    }), lc--, lc || (zr = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, rl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = $E(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), FE(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, LE = Object.defineProperty, ct = (e, t) => LE(e, "name", { value: t, configurable: !0 }), rf = "Dialog", [qx, Qx] = /* @__PURE__ */ ke(rf), [VE, Ft] = qx(rf), qi = /* @__PURE__ */ ct((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = d.useRef(null), c = d.useRef(null), { nodes: u, registry: m } = el(), [p, f] = Ee({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: rf
  }), [h, x] = d.useState(0), [v, b] = d.useState(0);
  return /* @__PURE__ */ l.jsx(
    VE,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: pe(),
      titleId: pe(),
      descriptionId: pe(),
      titlePresent: h > 0,
      descriptionPresent: v > 0,
      setTitleCount: x,
      setDescriptionCount: b,
      open: p,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((g) => !g), [f]),
      modal: a,
      branchNodes: u,
      branchRegistry: m,
      children: n
    }
  );
}, "Dialog"), BE = "DialogTrigger", HE = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ct(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = Ft(BE, r), a = J(n, i.triggerRef);
    return /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": al(i.open),
        ...o,
        ref: a,
        onClick: _(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Zx = "DialogPortal", [UE, Jx] = qx(Zx, {
  forceMount: void 0
}), Qi = /* @__PURE__ */ ct((e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Ft(Zx, t);
  return /* @__PURE__ */ l.jsx(UE, { scope: t, forceMount: n, children: d.Children.map(r, (a) => /* @__PURE__ */ l.jsx(nt, { present: n || i.open, children: /* @__PURE__ */ l.jsx(_o, { asChild: !0, container: o, children: a }) })) });
}, "DialogPortal"), Ru = "DialogOverlay", Zi = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ct(function(t, n) {
    const r = Jx(Ru, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, a = Ft(Ru, t.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l.jsx(nt, { present: o || a.open, children: /* @__PURE__ */ l.jsx(WE, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), GE = /* @__PURE__ */ qt("DialogOverlay.RemoveScroll"), WE = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ct(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = Ft(Ru, r), a = _x(), s = J(n, a);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside
      // `RemoveScroll` (eg. when `Overlay` and `Content` are siblings). Nested
      // layers are registered as branches and added as shards so they remain
      // scrollable too. See https://github.com/radix-ui/primitives/issues/3423
      /* @__PURE__ */ l.jsx(
        Xi,
        {
          as: GE,
          allowPinchZoom: !0,
          shards: d.useMemo(
            () => [i.contentRef, ...i.branchNodes.map((c) => ({ current: c }))],
            [i.contentRef, i.branchNodes]
          ),
          children: /* @__PURE__ */ l.jsx(
            B.div,
            {
              "data-state": al(i.open),
              ...o,
              ref: s,
              style: { pointerEvents: "auto", ...o.style }
            }
          )
        }
      )
    );
  }, "DialogOverlayImpl")
), Ai = "DialogContent", Ji = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ct(function(t, n) {
    const r = Jx(Ai, t.__scopeDialog), { forceMount: o = r.forceMount, ...i } = t, a = Ft(Ai, t.__scopeDialog);
    return /* @__PURE__ */ l.jsx(nt, { present: o || a.open, children: a.modal ? /* @__PURE__ */ l.jsx(KE, { ...i, ref: n }) : /* @__PURE__ */ l.jsx(YE, { ...i, ref: n }) });
  }, "DialogContent")
), KE = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ct(function(t, n) {
    const r = Ft(Ai, t.__scopeDialog), o = d.useRef(null), i = J(n, r.contentRef, o);
    return d.useEffect(() => {
      const a = o.current;
      if (a) return rl(a);
    }, []), /* @__PURE__ */ l.jsx(
      ew,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: _(t.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = r.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: _(t.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || c) && a.preventDefault();
        }),
        onFocusOutside: _(
          t.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), YE = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ct(function(t, n) {
    const r = Ft(Ai, t.__scopeDialog), o = d.useRef(!1), i = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      ew,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, c;
          (s = t.onCloseAutoFocus) == null || s.call(t, a), a.defaultPrevented || (o.current || (c = r.triggerRef.current) == null || c.focus(), a.preventDefault()), o.current = !1, i.current = !1;
        },
        onInteractOutside: (a) => {
          var u, m;
          (u = t.onInteractOutside) == null || u.call(t, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const s = a.target;
          ((m = r.triggerRef.current) == null ? void 0 : m.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), ew = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ct(function(t, n) {
    const {
      __scopeDialog: r,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      "aria-describedby": s,
      children: c,
      ...u
    } = t, m = Ft(Ai, r);
    return Io(), /* @__PURE__ */ l.jsx(Js, { registry: m.branchRegistry, children: /* @__PURE__ */ l.jsx(
      Zs,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        branches: m.branchNodes,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ l.jsx(
          Mo,
          {
            role: "dialog",
            id: m.contentId,
            "aria-labelledby": m.titlePresent ? m.titleId : void 0,
            "aria-describedby": m.descriptionPresent ? tw(s, m.descriptionId) : s,
            "data-state": al(m.open),
            ...u,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => m.onOpenChange(!1),
            children: c
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), ol = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ct(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = Ft("DialogTitle", r), { setTitleCount: a } = i;
    return Ne(() => (a((s) => s + 1), () => a((s) => s - 1)), [a]), /* @__PURE__ */ l.jsx(B.h2, { id: i.titleId, ...o, ref: n });
  }, "DialogTitle")
), il = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ct(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = Ft("DialogDescription", r), { setDescriptionCount: a } = i;
    return Ne(() => (a((s) => s + 1), () => a((s) => s - 1)), [a]), /* @__PURE__ */ l.jsx(B.p, { id: i.descriptionId, ...o, ref: n });
  }, "DialogDescription")
), XE = "DialogClose", ea = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ ct(function(t, n) {
    const { __scopeDialog: r, ...o } = t, i = Ft(XE, r);
    return /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: _(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function tw(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
ct(tw, "concatAriaDescribedby");
function al(e) {
  return e ? "open" : "closed";
}
ct(al, "getState");
var qE = Object.defineProperty, jn = (e, t) => qE(e, "name", { value: t, configurable: !0 }), QE = "AlertDialog", [ZE, AA] = /* @__PURE__ */ ke(QE, [
  Qx
]), Nn = Qx(), JE = /* @__PURE__ */ jn((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Nn(t);
  return /* @__PURE__ */ l.jsx(qi, { ...r, ...n, modal: !0 });
}, "AlertDialog");
d.forwardRef(
  /* @__PURE__ */ jn(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = Nn(r);
    return /* @__PURE__ */ l.jsx(HE, { ...i, ...o, ref: n });
  }, "AlertDialogTrigger")
);
var ej = /* @__PURE__ */ jn((e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Nn(t);
  return /* @__PURE__ */ l.jsx(Qi, { ...r, ...n });
}, "AlertDialogPortal"), tj = d.forwardRef(
  /* @__PURE__ */ jn(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = Nn(r);
    return /* @__PURE__ */ l.jsx(Zi, { ...i, ...o, ref: n });
  }, "AlertDialogOverlay")
), nj = "AlertDialogContent", [rj, oj] = ZE(nj), ij = d.forwardRef(
  /* @__PURE__ */ jn(function(t, n) {
    const { __scopeAlertDialog: r, children: o, ...i } = t, a = Nn(r), s = d.useRef(null), c = J(n, s), u = d.useRef(null);
    return /* @__PURE__ */ l.jsx(rj, { scope: r, cancelRef: u, children: /* @__PURE__ */ l.jsx(
      Ji,
      {
        role: "alertdialog",
        ...a,
        ...i,
        ref: c,
        onOpenAutoFocus: _(i.onOpenAutoFocus, (m) => {
          var p;
          m.preventDefault(), (p = u.current) == null || p.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (m) => m.preventDefault(),
        onInteractOutside: (m) => m.preventDefault(),
        children: o
      }
    ) });
  }, "AlertDialogContent")
), aj = d.forwardRef(
  /* @__PURE__ */ jn(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = Nn(r);
    return /* @__PURE__ */ l.jsx(ol, { ...i, ...o, ref: n });
  }, "AlertDialogTitle")
), sj = d.forwardRef(/* @__PURE__ */ jn(function(t, n) {
  const { __scopeAlertDialog: r, ...o } = t, i = Nn(r);
  return /* @__PURE__ */ l.jsx(il, { ...i, ...o, ref: n });
}, "AlertDialogDescription")), lj = d.forwardRef(
  /* @__PURE__ */ jn(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, i = Nn(r);
    return /* @__PURE__ */ l.jsx(ea, { ...i, ...o, ref: n });
  }, "AlertDialogAction")
), cj = "AlertDialogCancel", uj = d.forwardRef(
  /* @__PURE__ */ jn(function(t, n) {
    const { __scopeAlertDialog: r, ...o } = t, { cancelRef: i } = oj(cj, r), a = Nn(r), s = J(n, i);
    return /* @__PURE__ */ l.jsx(ea, { ...a, ...o, ref: s });
  }, "AlertDialogCancel")
);
function dj({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsx(JE, { open: t.open, onOpenChange: (r) => e.setValue(r), children: /* @__PURE__ */ l.jsxs(ej, { container: n ?? void 0, children: [
    /* @__PURE__ */ l.jsx(tj, { className: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-sen-overlay-in" }),
    z(
      e,
      /* @__PURE__ */ l.jsxs(ij, { className: "fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 text-foreground shadow-lg outline-none data-[state=open]:animate-sen-content-in", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ l.jsx(aj, { className: "text-lg font-semibold leading-none tracking-tight", children: t.title }),
          t.description ? /* @__PURE__ */ l.jsx(sj, { className: "text-sm text-muted-foreground", children: t.description }) : null
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "grid gap-4", children: oe(t.content) }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ l.jsx(uj, { className: "inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium hover:bg-accent", children: t.cancelText }),
          /* @__PURE__ */ l.jsx(
            lj,
            {
              className: "inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90",
              onClick: () => e.emit("Confirmed"),
              children: t.actionText
            }
          )
        ] })
      ] })
    )
  ] }) });
}
function fj({ node: e }) {
  const t = e.props, n = t.ordered ? "ol" : "ul";
  return z(
    e,
    /* @__PURE__ */ l.jsx(n, { className: "grid gap-2", children: t.children.map((r, o) => /* @__PURE__ */ l.jsx(
      "li",
      {
        className: "animate-sen-list-in motion-reduce:animate-none",
        style: {
          animationDelay: `${Math.max(0, t.startDelay + o * t.stagger)}ms`,
          animationDuration: `${Math.max(1, t.duration)}ms`
        },
        children: yn(r)
      },
      o
    )) })
  );
}
function pj({ node: e }) {
  const t = e.props, n = t.as, r = t.split === "characters" ? [...t.text] : t.split === "words" ? t.text.split(/(\s+)/) : [t.text], o = (i) => ({
    animationDelay: `${Math.max(0, t.delay + i * t.stagger)}ms`,
    animationDuration: `${Math.max(1, t.duration)}ms`
  });
  return z(
    e,
    /* @__PURE__ */ l.jsxs(n, { "aria-label": t.label || t.text, children: [
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: t.text }),
      /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: t.split === "none" ? /* @__PURE__ */ l.jsx("span", { className: "inline-block animate-sen-text-in motion-reduce:animate-none", style: o(0), children: t.text }) : r.map((i, a) => i.trim() ? /* @__PURE__ */ l.jsx("span", { className: "inline-block animate-sen-text-in motion-reduce:animate-none", style: o(a), children: i }, a) : /* @__PURE__ */ l.jsx("span", { children: i }, a)) })
    ] })
  );
}
function mj({ node: e }) {
  const t = e.props, [n, r] = d.useState({ x: 0, y: 0 }), o = (s) => {
    if (t.disabled || s.pointerType === "touch") return;
    const c = s.currentTarget.getBoundingClientRect();
    r({
      x: ((s.clientY - c.top) / c.height - 0.5) * -10,
      y: ((s.clientX - c.left) / c.width - 0.5) * 10
    });
  }, i = () => {
    t.disabled || e.setValue(!t.flipped);
  }, a = (s) => {
    (s.key === "Enter" || s.key === " ") && (s.preventDefault(), i());
  };
  return z(
    e,
    /* @__PURE__ */ l.jsx(
      "div",
      {
        role: "button",
        tabIndex: t.disabled ? -1 : 0,
        "aria-label": t.label,
        "aria-pressed": t.flipped,
        "aria-disabled": t.disabled || void 0,
        onClick: i,
        onKeyDown: a,
        onPointerMove: o,
        onPointerLeave: () => r({ x: 0, y: 0 }),
        className: `relative min-h-32 cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${t.disabled ? "cursor-not-allowed opacity-50" : ""}`,
        style: { perspective: 900 },
        children: /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: "relative min-h-32 transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none",
            style: { transform: `rotateX(${n.x}deg) rotateY(${n.y + (t.flipped ? 180 : 0)}deg)` },
            children: [
              /* @__PURE__ */ l.jsx("div", { className: "absolute inset-0 grid min-h-32 place-items-center rounded-xl border bg-card p-5 text-card-foreground shadow-sm [backface-visibility:hidden]", children: oe(t.front) }),
              /* @__PURE__ */ l.jsx("div", { className: "absolute inset-0 grid min-h-32 place-items-center rounded-xl border bg-accent p-5 text-accent-foreground shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]", "aria-hidden": !t.flipped, children: oe(t.back) })
            ]
          }
        )
      }
    )
  );
}
function hj({ node: e }) {
  const t = e.props, n = t.orientation === "horizontal", r = (o, i) => {
    var c, u;
    const a = t.items.length - 1;
    let s;
    (n && o.key === "ArrowRight" || !n && o.key === "ArrowDown") && (s = (i + 1) % t.items.length), (n && o.key === "ArrowLeft" || !n && o.key === "ArrowUp") && (s = (i - 1 + t.items.length) % t.items.length), o.key === "Home" && (s = 0), o.key === "End" && (s = a), s !== void 0 && t.items.length && (o.preventDefault(), (u = (c = o.currentTarget.parentElement) == null ? void 0 : c.querySelectorAll("button")[s]) == null || u.focus());
  };
  return z(
    e,
    /* @__PURE__ */ l.jsx("nav", { "aria-label": t.label, className: `mx-auto flex w-fit max-w-full items-end gap-2 rounded-2xl border bg-background/90 p-2 shadow-lg backdrop-blur ${n ? "flex-row" : "flex-col"}`, children: t.items.map((o, i) => /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        disabled: o.disabled,
        "aria-label": o.label,
        "aria-current": t.value === o.value ? "page" : void 0,
        title: o.label,
        onClick: () => e.setValue(o.value),
        onKeyDown: (a) => r(a, i),
        className: `group relative grid size-12 shrink-0 place-items-center rounded-xl border border-transparent text-foreground transition duration-200 hover:-translate-y-1 hover:scale-110 hover:border-border hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40 ${t.value === o.value ? "border-border bg-accent" : ""}`,
        children: [
          oe(o.icon),
          /* @__PURE__ */ l.jsx("span", { className: "pointer-events-none absolute -top-8 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100", children: o.label })
        ]
      },
      o.value
    )) })
  );
}
function gj({ node: e }) {
  const t = Number.isFinite(e.props.ratio) && e.props.ratio > 0 ? e.props.ratio : 1.7777777777777777;
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { className: "relative w-full overflow-hidden", style: { aspectRatio: t }, children: oe(e.props.children) })
  );
}
function vj({ node: e }) {
  const t = e.props, n = t.status === "uploading" ? `Uploading · ${Math.min(100, Math.max(0, t.progress))}%` : t.status === "error" ? "Upload failed" : t.mediaType || "File";
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-3 rounded-lg border bg-card p-3", children: [
      t.previewUrl ? /* @__PURE__ */ l.jsx("img", { src: t.previewUrl, alt: "", className: "size-10 rounded object-cover" }) : /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "grid size-10 shrink-0 place-items-center rounded-md bg-muted text-xs font-semibold", children: "FILE" }),
      /* @__PURE__ */ l.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ l.jsx("p", { className: "truncate text-sm font-medium", children: t.name }),
        /* @__PURE__ */ l.jsx("p", { className: t.status === "error" ? "text-xs text-destructive" : "text-xs text-muted-foreground", children: [t.fileSize, n].filter(Boolean).join(" · ") }),
        t.status === "uploading" && /* @__PURE__ */ l.jsx("div", { className: "mt-2 h-1 overflow-hidden rounded-full bg-muted", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.min(100, Math.max(0, t.progress)), children: /* @__PURE__ */ l.jsx("div", { className: "h-full bg-primary transition-[width] duration-300", style: { width: `${Math.min(100, Math.max(0, t.progress))}%` } }) })
      ] }),
      t.removable && /* @__PURE__ */ l.jsx("button", { type: "button", className: "rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground", "aria-label": `Remove ${t.name}`, onClick: () => e.emit("Removed"), children: "Remove" })
    ] })
  );
}
const sl = d.forwardRef(
  ({ className: e, type: t = "text", ...n }, r) => /* @__PURE__ */ l.jsx(
    "input",
    {
      ref: r,
      type: t,
      className: we(
        "flex h-[var(--sen-control-h)] w-full rounded-md border border-input bg-transparent px-3 text-[length:var(--sen-control-fs)] shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...n
    }
  )
);
sl.displayName = "Input";
function yt({ label: e, description: t, htmlFor: n, right: r, children: o, className: i, style: a, attributes: s, animation: c }) {
  const u = !!e || r != null;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...s,
      ...c ? { "data-sen-animation": "" } : {},
      className: ["grid gap-1.5", i].filter(Boolean).join(" "),
      style: { ...a, ...c ? { animation: Mu(c) } : {} },
      children: [
        u && /* @__PURE__ */ l.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
          e ? /* @__PURE__ */ l.jsx("label", { htmlFor: n, className: "font-medium leading-none", children: e }) : /* @__PURE__ */ l.jsx("span", {}),
          r != null && /* @__PURE__ */ l.jsx("span", { className: "tabular-nums text-muted-foreground", children: r })
        ] }),
        o,
        t && /* @__PURE__ */ l.jsx("p", { className: "text-[length:var(--sen-text-sm)] text-muted-foreground", children: t })
      ]
    }
  );
}
function xj({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: "grid gap-1.5", children: [
      (t.label || t.required) && /* @__PURE__ */ l.jsxs("label", { htmlFor: t.htmlFor || void 0, className: "font-medium leading-none", children: [
        t.label,
        t.required && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "ml-1 text-destructive", children: "*" })
      ] }),
      oe(t.children),
      t.error ? /* @__PURE__ */ l.jsx("p", { className: "text-[length:var(--sen-text-sm)] text-destructive", role: "alert", children: t.error }) : t.description ? /* @__PURE__ */ l.jsx("p", { className: "text-[length:var(--sen-text-sm)] text-muted-foreground", children: t.description }) : null
    ] })
  );
}
function nw({ label: e, description: t, htmlFor: n, controlFirst: r, children: o, className: i, style: a, attributes: s, animation: c }) {
  const u = (e || t) && /* @__PURE__ */ l.jsxs("div", { className: "grid gap-0.5", children: [
    e && /* @__PURE__ */ l.jsx("label", { htmlFor: n, className: "cursor-pointer font-medium leading-none", children: e }),
    t && /* @__PURE__ */ l.jsx("p", { className: "text-[length:var(--sen-text-sm)] text-muted-foreground", children: t })
  ] });
  return r ? /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...s,
      ...c ? { "data-sen-animation": "" } : {},
      className: ["flex items-start gap-3", i].filter(Boolean).join(" "),
      style: { ...a, ...c ? { animation: Mu(c) } : {} },
      children: [
        o,
        u
      ]
    }
  ) : /* @__PURE__ */ l.jsxs(
    "div",
    {
      ...s,
      ...c ? { "data-sen-animation": "" } : {},
      className: ["flex items-center justify-between gap-4", i].filter(Boolean).join(" "),
      style: { ...a, ...c ? { animation: Mu(c) } : {} },
      children: [
        u,
        o
      ]
    }
  );
}
function Mu(e) {
  return [
    e.name,
    `${e.duration ?? 250}ms`,
    e.easing ?? "ease",
    `${e.delay ?? 0}ms`,
    e.iterations ?? 1,
    e.direction ?? "normal",
    e.fillMode ?? "both"
  ].join(" ");
}
const wj = (e) => typeof e == "string" ? { label: e, value: e } : e;
function yj({ node: e }) {
  const t = e.props, n = d.useId(), r = `${n}-options`, [o, i] = d.useState(!1), [a, s] = d.useState(-1), c = t.options.map(wj).filter((p) => p.label.toLowerCase().includes(t.value.toLowerCase())), u = (p) => {
    e.setValue(p), e.emit("Selected", p), i(!1), s(-1);
  }, m = (p) => {
    p.key === "ArrowDown" ? (p.preventDefault(), i(!0), s((f) => Math.min(f + 1, c.length - 1))) : p.key === "ArrowUp" ? (p.preventDefault(), i(!0), s((f) => Math.max(f - 1, 0))) : p.key === "Enter" && o && c[a] ? (p.preventDefault(), u(c[a].value)) : p.key === "Escape" && (i(!1), s(-1));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, children: /* @__PURE__ */ l.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ l.jsx(
        sl,
        {
          id: n,
          role: "combobox",
          "aria-autocomplete": "list",
          "aria-expanded": o,
          "aria-controls": r,
          "aria-activedescendant": o && c[a] ? `${r}-${a}` : void 0,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          onFocus: () => i(!0),
          onChange: (p) => {
            e.setValue(p.currentTarget.value), i(!0), s(-1);
          },
          onKeyDown: m,
          onBlur: (p) => {
            var h;
            const f = p.relatedTarget;
            (!(f instanceof Node) || !((h = p.currentTarget.parentElement) != null && h.contains(f))) && i(!1);
          }
        }
      ),
      o && !t.disabled && /* @__PURE__ */ l.jsx("ul", { id: r, role: "listbox", className: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md", children: c.length ? c.map((p, f) => /* @__PURE__ */ l.jsx(
        "li",
        {
          id: `${r}-${f}`,
          role: "option",
          "aria-selected": f === a,
          onMouseDown: (h) => h.preventDefault(),
          onMouseEnter: () => s(f),
          onClick: () => u(p.value),
          className: `cursor-pointer rounded-sm px-2 py-1.5 text-sm ${f === a ? "bg-accent text-accent-foreground" : ""}`,
          children: p.label
        },
        p.value
      )) : /* @__PURE__ */ l.jsx("li", { className: "px-2 py-1.5 text-sm text-muted-foreground", children: t.emptyText }) })
    ] }) })
  );
}
function bj({ node: e }) {
  const t = e.props, [n, r] = d.useState(""), o = t.src && n !== t.src;
  return z(
    e,
    /* @__PURE__ */ l.jsx("span", { className: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted", children: o ? /* @__PURE__ */ l.jsx(
      "img",
      {
        src: t.src,
        alt: t.alt,
        className: "aspect-square h-full w-full object-cover",
        onError: () => r(t.src)
      }
    ) : /* @__PURE__ */ l.jsx(
      "span",
      {
        "aria-label": t.alt || void 0,
        className: "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground",
        children: t.fallback || t.alt.slice(0, 2).toUpperCase() || "?"
      }
    ) })
  );
}
const $m = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zm = Cx, rw = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return zm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((u) => {
    const m = n == null ? void 0 : n[u], p = i == null ? void 0 : i[u];
    if (m === null) return null;
    const f = $m(m) || $m(p);
    return o[u][f];
  }), s = n && Object.entries(n).reduce((u, m) => {
    let [p, f] = m;
    return f === void 0 || (u[p] = f), u;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, m) => {
    let { class: p, className: f, ...h } = m;
    return Object.entries(h).every((x) => {
      let [v, b] = x;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...s
      }[v]) : {
        ...i,
        ...s
      }[v] === b;
    }) ? [
      ...u,
      p,
      f
    ] : u;
  }, []);
  return zm(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Cj = rw(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[length:var(--sen-text-xs)] font-semibold transition-colors",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-primary text-primary-foreground shadow",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow",
        outline: "text-foreground"
      }
    },
    defaultVariants: { variant: "primary" }
  }
);
function Sj({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: we(Cj({ variant: t }), e), ...n });
}
function kj({ node: e }) {
  return z(e, /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(Sj, { variant: e.props.variant, children: e.props.text }) }));
}
function Fm(e) {
  return e && !/^\s*(?:javascript|data|vbscript):/i.test(e) ? e : void 0;
}
function Pj({ node: e }) {
  const t = e.props, n = t.items.length - 1;
  return z(
    e,
    /* @__PURE__ */ l.jsx("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ l.jsx("ol", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: t.items.map((r, o) => /* @__PURE__ */ l.jsxs("li", { className: "flex items-center gap-2", children: [
      o > 0 && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: t.separator }),
      o === n ? /* @__PURE__ */ l.jsx("span", { "aria-current": "page", className: "font-normal text-foreground", children: r.label }) : Fm(r.href) ? /* @__PURE__ */ l.jsx("a", { href: Fm(r.href), className: "transition-colors hover:text-foreground", children: r.label }) : /* @__PURE__ */ l.jsx("span", { children: r.label })
    ] }, `${r.label}-${o}`)) }) })
  );
}
function Ej({ node: e }) {
  const t = e.props, n = {
    default: "bg-primary text-primary-foreground",
    muted: "bg-muted text-foreground",
    outline: "border bg-background text-foreground"
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: `flex flex-col gap-2 ${t.align === "end" ? "items-end" : "items-start"}`, children: [
      /* @__PURE__ */ l.jsx("div", { className: `max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${n[t.variant]} ${t.grouped ? "rounded-t-md" : ""}`, children: oe(t.children) }),
      t.reactions.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap gap-1", children: t.reactions.map((r) => /* @__PURE__ */ l.jsx("button", { type: "button", className: "rounded-full border bg-background px-2 py-0.5 text-xs hover:bg-accent", onClick: () => e.emit("Reacted", r), children: r }, r)) })
    ] })
  );
}
const jj = rw(
  "inline-flex h-[var(--sen-control-h)] items-center justify-center gap-2 whitespace-nowrap rounded-md px-[var(--sen-control-px)] text-[length:var(--sen-control-fs)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        link: "h-auto px-0 text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: { variant: "primary" }
  }
), bo = d.forwardRef(
  ({ className: e, variant: t, type: n = "button", ...r }, o) => /* @__PURE__ */ l.jsx("button", { ref: o, type: n, className: we(jj({ variant: t }), e), ...r })
);
bo.displayName = "Button";
function ll(e) {
  const t = {};
  return Object.assign(
    t,
    typeof e == "number" ? { "--sen-control-h": `${e}px` } : {
      "--sen-control-h": `var(--sen-h-${e})`,
      "--sen-control-px": `var(--sen-px-${e})`,
      "--sen-control-fs": `var(--sen-fs-${e})`
    }
  ), t;
}
function Nj({ node: e }) {
  const t = e.props;
  return z(e, /* @__PURE__ */ l.jsx(
    bo,
    {
      variant: t.variant,
      disabled: t.disabled,
      className: t.fullWidth ? "w-full" : void 0,
      style: t.size === "inherit" ? void 0 : ll(t.size),
      onClick: () => e.emit("Pressed"),
      onPointerUp: () => e.emit("Released"),
      onMouseEnter: () => e.emit("Hovered", !0),
      onMouseLeave: () => e.emit("Hovered", !1),
      children: t.text
    }
  ));
}
function Tj({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { role: "group", className: `inline-flex ${t.orientation === "vertical" ? "flex-col" : "flex-row"} [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:last-child)]:border-r-0`, children: oe(t.children) })
  );
}
const Lm = (e) => String(e).padStart(2, "0"), Rj = (e) => `${e.getFullYear()}-${Lm(e.getMonth() + 1)}-${Lm(e.getDate())}`, Mj = (e) => {
  const [t, n] = e.split("-").map(Number);
  return t && n ? new Date(t, n - 1, 1, 12) : new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1, 12);
};
function ow({ value: e, month: t, minDate: n, maxDate: r, weekStartsOn: o, onSelect: i }) {
  const [a, s] = d.useState(() => Mj(t || e.slice(0, 7))), u = (a.getDay() - Math.max(0, Math.min(6, Math.floor(o))) + 7) % 7, m = new Date(a.getFullYear(), a.getMonth(), 1 - u, 12), p = Array.from({ length: 42 }, (x, v) => new Date(m.getFullYear(), m.getMonth(), m.getDate() + v, 12)), f = Array.from({ length: 7 }, (x, v) => new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(
    new Date(2024, 0, 7 + (v + Math.max(0, Math.min(6, Math.floor(o)))) % 7, 12)
  )), h = (x) => s((v) => new Date(v.getFullYear(), v.getMonth() + x, 1, 12));
  return /* @__PURE__ */ l.jsxs("div", { className: "w-72 p-3", role: "application", "aria-label": "Calendar", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": "Previous month", onClick: () => h(-1), className: "grid size-8 place-items-center rounded-md hover:bg-accent", children: "‹" }),
      /* @__PURE__ */ l.jsx("h3", { className: "text-sm font-medium", children: new Intl.DateTimeFormat(void 0, { month: "long", year: "numeric" }).format(a) }),
      /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": "Next month", onClick: () => h(1), className: "grid size-8 place-items-center rounded-md hover:bg-accent", children: "›" })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { role: "grid", "aria-label": new Intl.DateTimeFormat(void 0, { month: "long", year: "numeric" }).format(a), className: "grid grid-cols-7 gap-1", children: [
      f.map((x, v) => /* @__PURE__ */ l.jsx("span", { role: "columnheader", className: "py-1 text-center text-xs text-muted-foreground", children: x }, `${x}-${v}`)),
      p.map((x) => {
        const v = Rj(x), b = x.getMonth() === a.getMonth(), g = n && v < n || r && v > r;
        return /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            role: "gridcell",
            "aria-label": new Intl.DateTimeFormat(void 0, { dateStyle: "full" }).format(x),
            "aria-pressed": e === v,
            disabled: !!g,
            onClick: () => i(v),
            className: `grid size-9 place-items-center rounded-md text-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 ${e === v ? "bg-primary text-primary-foreground" : ""} ${b ? "" : "text-muted-foreground/50"}`,
            children: x.getDate()
          },
          v
        );
      })
    ] })
  ] });
}
function _j({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(ow, { value: t.value, month: t.month, minDate: t.minDate, maxDate: t.maxDate, weekStartsOn: t.weekStartsOn, onSelect: (n) => e.setValue(n) }) })
  );
}
const iw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: we("flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
iw.displayName = "Card";
const Ij = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx("div", { className: we("grid gap-1", e), ...t }), Aj = ({ className: e, style: t, ...n }) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: we("font-semibold leading-none tracking-tight", e),
    style: { fontSize: "var(--sen-text-lg)", ...t },
    ...n
  }
), Dj = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx("div", { className: we("text-[length:var(--sen-text-sm)] text-muted-foreground", e), ...t });
function Oj({ node: e }) {
  const t = e.props, n = yo(t.padding);
  return z(e, /* @__PURE__ */ l.jsxs(iw, { style: { padding: n, gap: `calc(${n} * 0.75)` }, children: [
    (t.title || t.description) && /* @__PURE__ */ l.jsxs(Ij, { children: [
      t.title && /* @__PURE__ */ l.jsx(Aj, { children: t.title }),
      t.description && /* @__PURE__ */ l.jsx(Dj, { children: t.description })
    ] }),
    t.children.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex flex-col", style: { gap: yo(3) }, children: oe(t.children) }),
    t.footer && /* @__PURE__ */ l.jsx("div", { className: "flex items-center", children: yn(t.footer) })
  ] }));
}
function $j({ node: e }) {
  const t = e.props, n = d.useRef(null), r = t.items.length, o = r ? Math.min(Math.max(0, t.index), r - 1) : 0, i = (u) => {
    if (!r) return;
    const m = t.loop ? (u + r) % r : Math.min(r - 1, Math.max(0, u));
    e.setValue(m);
  }, a = (u) => {
    u.isPrimary && (n.current = { x: u.clientX, y: u.clientY }, u.currentTarget.setPointerCapture(u.pointerId));
  }, s = (u) => {
    const m = n.current;
    if (n.current = null, u.currentTarget.hasPointerCapture(u.pointerId) && u.currentTarget.releasePointerCapture(u.pointerId), !m) return;
    const p = t.orientation === "horizontal" ? m.x - u.clientX : m.y - u.clientY;
    Math.abs(p) > 40 && i(o + (p > 0 ? 1 : -1));
  }, c = (u) => {
    const m = t.orientation === "horizontal" ? u.key === "ArrowRight" : u.key === "ArrowDown", p = t.orientation === "horizontal" ? u.key === "ArrowLeft" : u.key === "ArrowUp";
    !m && !p || (u.preventDefault(), i(o + (m ? 1 : -1)));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "section",
      {
        "aria-roledescription": "carousel",
        "aria-label": t.label,
        tabIndex: 0,
        onKeyDown: c,
        className: `grid gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring ${t.orientation === "vertical" ? "grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] justify-items-center" : "grid-cols-[auto_minmax(0,1fr)_auto] items-center"}`,
        children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": "Previous slide", disabled: !t.loop && o === 0, onClick: () => i(o - 1), className: "grid size-9 place-items-center rounded-md border hover:bg-accent disabled:opacity-40", children: "‹" }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              "aria-live": "polite",
              onPointerDown: a,
              onPointerUp: s,
              onPointerCancel: () => {
                n.current = null;
              },
              className: `min-w-0 overflow-hidden ${t.orientation === "horizontal" ? "touch-pan-y" : "touch-pan-x"}`,
              children: /* @__PURE__ */ l.jsx("div", { "aria-roledescription": "slide", "aria-label": `${o + 1} of ${r}`, className: "min-h-24 animate-sen-in", children: r ? yn(t.items[o]) : /* @__PURE__ */ l.jsx("p", { className: "p-4 text-sm text-muted-foreground", children: "No slides." }) }, o)
            }
          ),
          /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": "Next slide", disabled: !t.loop && o === r - 1, onClick: () => i(o + 1), className: "grid size-9 place-items-center rounded-md border hover:bg-accent disabled:opacity-40", children: "›" }),
          r > 1 && /* @__PURE__ */ l.jsx("div", { className: "col-span-full flex justify-center gap-1.5", children: t.items.map((u, m) => /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": `Go to slide ${m + 1}`, "aria-current": o === m, onClick: () => i(m), className: `size-2 rounded-full ${o === m ? "bg-foreground" : "bg-muted-foreground/40"}` }, m)) })
        ]
      }
    )
  );
}
function zj({ node: e }) {
  const t = e.props, n = d.useId(), r = t.data, o = Math.max(1, ...r.map((h) => h.value)), i = 400, a = Math.max(120, t.height), s = { top: 12, right: 12, bottom: 34, left: 12 }, c = a - s.top - s.bottom, u = i - s.left - s.right, m = (h) => s.left + (r.length < 2 ? u / 2 : h * u / (r.length - 1)), p = (h) => s.top + c - Math.max(0, h) / o * c, f = r.map((h, x) => `${m(x)},${p(h.value)}`).join(" ");
  return z(
    e,
    /* @__PURE__ */ l.jsxs("figure", { className: "w-full", children: [
      /* @__PURE__ */ l.jsx("figcaption", { id: n, className: "mb-3 text-sm font-medium", children: t.title }),
      /* @__PURE__ */ l.jsxs("svg", { role: "img", "aria-labelledby": n, viewBox: `0 0 ${i} ${a}`, className: "w-full overflow-visible", style: { height: `${a}px` }, children: [
        /* @__PURE__ */ l.jsx("line", { x1: s.left, y1: a - s.bottom, x2: i - s.right, y2: a - s.bottom, stroke: "currentColor", className: "text-border" }),
        t.type === "line" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          r.length > 1 && /* @__PURE__ */ l.jsx("polyline", { points: f, fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round", className: "text-foreground" }),
          r.map((h, x) => /* @__PURE__ */ l.jsx("circle", { cx: m(x), cy: p(h.value), r: "3.5", fill: "currentColor", className: "text-foreground", children: /* @__PURE__ */ l.jsx("title", { children: `${h.label}: ${h.value}` }) }, `${h.label}-${x}`))
        ] }) : r.map((h, x) => {
          const v = u / Math.max(r.length, 1), b = Math.min(36, v * 0.6), g = p(h.value);
          return /* @__PURE__ */ l.jsxs("g", { children: [
            /* @__PURE__ */ l.jsx("rect", { x: m(x) - b / 2, y: g, width: b, height: Math.max(0, a - s.bottom - g), rx: "3", fill: "currentColor", className: "text-foreground" }),
            /* @__PURE__ */ l.jsx("title", { children: `${h.label}: ${h.value}` })
          ] }, `${h.label}-${x}`);
        }),
        r.map((h, x) => /* @__PURE__ */ l.jsx("text", { x: m(x), y: a - 10, textAnchor: "middle", className: "fill-muted-foreground text-[10px]", children: h.label }, `${h.label}-label`))
      ] })
    ] })
  );
}
var Fj = Object.defineProperty, Lj = (e, t) => Fj(e, "name", { value: t, configurable: !0 });
function ta(e) {
  const [t, n] = d.useState(void 0);
  return Ne(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      let r = 0;
      const o = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
          let s, c;
          if ("borderBoxSize" in a) {
            const u = a.borderBoxSize, m = Array.isArray(u) ? u[0] : u;
            s = m.inlineSize, c = m.blockSize;
          } else
            s = e.offsetWidth, c = e.offsetHeight;
          n({ width: s, height: c });
        });
      });
      return o.observe(e, { box: "border-box" }), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    } else
      n(void 0);
  }, [e]), t;
}
Lj(ta, "useSize");
var Vj = Object.defineProperty, Cn = (e, t) => Vj(e, "name", { value: t, configurable: !0 }), of = "Checkbox", [Bj, DA] = /* @__PURE__ */ ke(of), [Hj, af] = Bj(of);
function aw(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: i,
    form: a,
    name: s,
    onCheckedChange: c,
    required: u,
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [f, h] = Ee({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: of
  }), [x, v] = d.useState(null), [b, g] = d.useState(null), y = d.useRef(!1), [w, C] = d.useReducer(
    (P) => P + 1,
    0
  ), S = x ? !!a || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: f,
    disabled: i,
    setChecked: h,
    control: x,
    setControl: v,
    name: s,
    form: a,
    value: m,
    hasConsumerStoppedPropagationRef: y,
    userInteractionCount: w,
    onUserInteraction: C,
    required: u,
    defaultChecked: fn(o) ? !1 : o,
    isFormControl: S,
    bubbleInput: b,
    setBubbleInput: g
  };
  return /* @__PURE__ */ l.jsx(
    Hj,
    {
      scope: t,
      ...k,
      children: sw(p) ? p(k) : r
    }
  );
}
Cn(aw, "CheckboxProvider");
var Uj = "CheckboxTrigger", Gj = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Cn(function({ __scopeCheckbox: t, onKeyDown: n, onClick: r, ...o }, i) {
    const {
      control: a,
      value: s,
      disabled: c,
      checked: u,
      required: m,
      setControl: p,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      onUserInteraction: x,
      isFormControl: v,
      bubbleInput: b
    } = af(Uj, t), g = J(i, p), y = d.useRef(u);
    return d.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const C = /* @__PURE__ */ Cn(() => f(y.current), "reset");
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [a, f]), /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": fn(u) ? "mixed" : u,
        "aria-required": m,
        "data-state": sf(u),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: s,
        ...o,
        ref: g,
        onKeyDown: _(n, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: _(r, (w) => {
          x(), f((C) => fn(C) ? !0 : !C), b && v && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Wj = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Cn(function(t, n) {
    const {
      __scopeCheckbox: r,
      name: o,
      checked: i,
      defaultChecked: a,
      required: s,
      disabled: c,
      value: u,
      onCheckedChange: m,
      form: p,
      ...f
    } = t;
    return /* @__PURE__ */ l.jsx(
      aw,
      {
        __scopeCheckbox: r,
        checked: i,
        defaultChecked: a,
        disabled: c,
        required: s,
        onCheckedChange: m,
        name: o,
        form: p,
        value: u,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Gj,
            {
              ...f,
              ref: n,
              __scopeCheckbox: r
            }
          ),
          h && /* @__PURE__ */ l.jsx(
            qj,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), Kj = "CheckboxIndicator", Yj = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Cn(function(t, n) {
    const { __scopeCheckbox: r, forceMount: o, ...i } = t, a = af(Kj, r);
    return /* @__PURE__ */ l.jsx(
      nt,
      {
        present: o || fn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          B.span,
          {
            "data-state": sf(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...i,
            ref: n,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), Xj = "CheckboxBubbleInput", qj = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Cn(function({ __scopeCheckbox: t, onClick: n, ...r }, o) {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: a,
      userInteractionCount: s,
      checked: c,
      defaultChecked: u,
      required: m,
      disabled: p,
      name: f,
      value: h,
      form: x,
      bubbleInput: v,
      setBubbleInput: b
    } = af(Xj, t), g = J(o, b), y = ta(i), w = d.useRef(!1), C = d.useRef(c), S = d.useRef(s);
    d.useEffect(() => {
      const P = v;
      if (!P) return;
      const E = window.HTMLInputElement.prototype, T = Object.getOwnPropertyDescriptor(
        E,
        "checked"
      ).set, O = s !== S.current;
      S.current = s;
      const M = C.current !== c;
      C.current = c;
      const W = !(O && a.current);
      if (M && T) {
        w.current = !O;
        const K = new Event("click", { bubbles: W });
        P.indeterminate = fn(c), T.call(P, fn(c) ? !1 : c), P.dispatchEvent(K), w.current = !1;
      }
    }, [v, c, a, s]);
    const k = d.useRef(fn(c) ? !1 : c);
    return /* @__PURE__ */ l.jsx(
      B.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? k.current,
        required: m,
        disabled: p,
        name: f,
        value: h,
        form: x,
        ...r,
        tabIndex: -1,
        ref: g,
        onClick: _(n, (P) => {
          w.current && P.stopPropagation();
        }),
        style: {
          ...r.style,
          ...y,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "CheckboxBubbleInput")
);
function sw(e) {
  return typeof e == "function";
}
Cn(sw, "isFunction");
function fn(e) {
  return e === "indeterminate";
}
Cn(fn, "isIndeterminate");
function sf(e) {
  return fn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Cn(sf, "getState");
const lw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Wj,
  {
    ref: n,
    className: we(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(Yj, { className: "flex items-center justify-center text-current", children: /* @__PURE__ */ l.jsx(wx, { width: 12, height: 12, strokeWidth: 3 }) })
  }
));
lw.displayName = "Checkbox";
function Qj({ node: e }) {
  const t = e.props, n = d.useId();
  return /* @__PURE__ */ l.jsx(
    nw,
    {
      label: t.label,
      description: t.description,
      htmlFor: n,
      controlFirst: !0,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsx(
        lw,
        {
          id: n,
          className: "mt-0.5",
          checked: t.value,
          disabled: t.disabled,
          onCheckedChange: (r) => e.setValue(r === !0)
        }
      )
    }
  );
}
function Zj({ node: e }) {
  const t = e.props, [n, r] = d.useState(!1), o = t.code.split(`
`), i = () => {
    var a;
    if (!((a = navigator.clipboard) != null && a.writeText)) {
      e.emit("CopyFailed", "Clipboard access is unavailable in this browser context.");
      return;
    }
    navigator.clipboard.writeText(t.code).then(
      () => {
        e.emit("Copied"), r(!0), window.setTimeout(() => r(!1), 1500);
      },
      (s) => e.emit("CopyFailed", s instanceof Error ? s.message : String(s))
    );
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs("section", { className: "overflow-hidden rounded-lg border bg-card text-card-foreground", children: [
      /* @__PURE__ */ l.jsxs("header", { className: "flex min-h-11 items-center justify-between gap-3 border-b px-3 py-2", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-center gap-2 text-xs text-muted-foreground", children: [
          t.filename && /* @__PURE__ */ l.jsx("span", { className: "truncate font-medium text-foreground", children: t.filename }),
          /* @__PURE__ */ l.jsx("span", { children: t.language })
        ] }),
        /* @__PURE__ */ l.jsx(bo, { type: "button", variant: "ghost", onClick: i, children: n ? "Copied" : t.copyText })
      ] }),
      /* @__PURE__ */ l.jsx("pre", { className: "overflow-x-auto p-4 text-sm leading-6", children: /* @__PURE__ */ l.jsx("code", { className: `language-${t.language}`, children: o.map((a, s) => /* @__PURE__ */ l.jsxs("span", { className: "table-row", children: [
        t.showLineNumbers && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "table-cell select-none pr-4 text-right text-muted-foreground", children: s + 1 }),
        /* @__PURE__ */ l.jsx("span", { className: "table-cell", children: a || " " }),
        `
`
      ] }, s)) }) })
    ] })
  );
}
function Jj({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs(fx, { open: t.open, disabled: t.disabled, onOpenChange: (n) => e.setValue(n), children: [
      /* @__PURE__ */ l.jsxs(px, { className: "flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50", children: [
        t.trigger,
        /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "text-muted-foreground", children: t.open ? "−" : "+" })
      ] }),
      /* @__PURE__ */ l.jsx(hx, { className: "overflow-hidden pt-3 text-sm data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up", children: oe(t.content) })
    ] })
  );
}
function es(e) {
  const t = e.trim().replace(/^#/, "");
  return /^[\da-f]{3}$/i.test(t) ? `#${t.split("").map((n) => n + n).join("")}`.toLowerCase() : /^[\da-f]{6}$/i.test(t) ? `#${t}`.toLowerCase() : null;
}
function eN(e) {
  const t = es(e) ?? "#000000", n = parseInt(t.slice(1, 3), 16) / 255, r = parseInt(t.slice(3, 5), 16) / 255, o = parseInt(t.slice(5, 7), 16) / 255, i = Math.max(n, r, o), a = Math.min(n, r, o), s = i - a;
  let c = 0;
  return s && (i === n ? c = 60 * ((r - o) / s % 6) : i === r ? c = 60 * ((o - n) / s + 2) : c = 60 * ((n - r) / s + 4)), {
    hue: (c + 360) % 360,
    saturation: i === 0 ? 0 : s / i * 100,
    value: i * 100
  };
}
function Vm({ hue: e, saturation: t, value: n }) {
  const r = Math.min(100, Math.max(0, t)) / 100, o = Math.min(100, Math.max(0, n)) / 100, i = o * r, a = (e % 360 + 360) % 360 / 60, s = i * (1 - Math.abs(a % 2 - 1)), c = o - i, [u, m, p] = a < 1 ? [i, s, 0] : a < 2 ? [s, i, 0] : a < 3 ? [0, i, s] : a < 4 ? [0, s, i] : a < 5 ? [s, 0, i] : [i, 0, s], f = (h) => Math.round((h + c) * 255).toString(16).padStart(2, "0");
  return `#${f(u)}${f(m)}${f(p)}`;
}
function tN({ node: e }) {
  const t = e.props, n = d.useId(), [r, o] = d.useState(t.value), [i, a] = d.useState(!1), s = d.useRef(null), c = eN(t.value), u = `hsl(${c.hue} 100% 50%)`, m = Vm({ ...c, saturation: 100, value: 100 }), p = (f) => e.setValue(Vm({ ...c, ...f }));
  return d.useEffect(() => o(t.value), [t.value]), d.useEffect(() => {
    if (!i) return;
    const f = (x) => {
      var v;
      x.target instanceof Node && !((v = s.current) != null && v.contains(x.target)) && a(!1);
    }, h = (x) => {
      x.key === "Escape" && a(!1);
    };
    return document.addEventListener("pointerdown", f), document.addEventListener("keydown", h), () => {
      document.removeEventListener("pointerdown", f), document.removeEventListener("keydown", h);
    };
  }, [i]), z(
    e,
    /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, className: "color-picker-field", children: /* @__PURE__ */ l.jsxs("div", { ref: s, className: "relative w-fit max-w-full", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "flex max-w-full items-center gap-2 rounded-md border border-input bg-background p-1 shadow-sm transition-colors focus-within:ring-2 focus-within:ring-ring", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            id: n,
            disabled: t.disabled,
            "aria-label": t.label ? `Open ${t.label.toLowerCase()} picker` : "Open color picker",
            "aria-haspopup": "dialog",
            "aria-expanded": i,
            onClick: () => a((f) => !f),
            className: "relative grid size-8 shrink-0 place-items-center overflow-hidden rounded border border-input bg-[linear-gradient(45deg,#ddd_25%,transparent_25%),linear-gradient(-45deg,#ddd_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#ddd_75%),linear-gradient(-45deg,transparent_75%,#ddd_75%)] bg-[length:8px_8px] bg-[position:0_0,0_4px,4px_-4px,-4px_0] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[linear-gradient(45deg,#333_25%,transparent_25%),linear-gradient(-45deg,#333_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#333_75%),linear-gradient(-45deg,transparent_75%,#333_75%)]",
            children: /* @__PURE__ */ l.jsx("span", { className: "absolute inset-0.5 rounded-sm border border-black/10 dark:border-white/10", style: { backgroundColor: t.value } })
          }
        ),
        t.showValue && /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            value: r,
            disabled: t.disabled,
            "aria-label": t.label ? `${t.label} hex value` : "Hex color value",
            "aria-invalid": !es(r) || void 0,
            placeholder: t.placeholder,
            spellCheck: !1,
            autoCapitalize: "off",
            autoComplete: "off",
            maxLength: 7,
            onChange: (f) => {
              const h = f.currentTarget.value;
              o(h);
              const x = es(h);
              x && e.setValue(x);
            },
            onBlur: () => {
              const f = es(r);
              o(f ?? t.value), f && e.setValue(f);
            },
            onKeyDown: (f) => {
              f.key === "Enter" && f.currentTarget.blur(), f.key === "Escape" && (o(t.value), f.currentTarget.blur());
            },
            className: "h-8 w-24 min-w-0 rounded border-0 bg-transparent px-2 font-mono text-xs uppercase text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
          }
        )
      ] }),
      i && !t.disabled && /* @__PURE__ */ l.jsxs(
        "section",
        {
          role: "dialog",
          "aria-label": t.label ? `${t.label} color picker` : "Color picker",
          className: "absolute left-0 top-full z-50 mt-2 grid w-[min(18rem,calc(100vw-2rem))] gap-4 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-xl",
          children: [
            /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ l.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: "Choose a color" }),
              /* @__PURE__ */ l.jsx("span", { className: "rounded border border-border bg-background px-2 py-1 font-mono text-xs uppercase", children: t.value })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ l.jsxs("label", { className: "grid gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ l.jsxs("span", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l.jsx("span", { children: "Hue" }),
                  /* @__PURE__ */ l.jsxs("span", { children: [
                    Math.round(c.hue),
                    "°"
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  cc,
                  {
                    ariaLabel: "Hue",
                    min: "0",
                    max: "360",
                    value: Math.round(c.hue),
                    background: "linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)",
                    onChange: (f) => p({ hue: f })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("label", { className: "grid gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ l.jsxs("span", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l.jsx("span", { children: "Saturation" }),
                  /* @__PURE__ */ l.jsxs("span", { children: [
                    Math.round(c.saturation),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  cc,
                  {
                    ariaLabel: "Saturation",
                    min: "0",
                    max: "100",
                    value: Math.round(c.saturation),
                    background: `linear-gradient(to right, #fff, ${u})`,
                    onChange: (f) => p({ saturation: f })
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs("label", { className: "grid gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ l.jsxs("span", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l.jsx("span", { children: "Brightness" }),
                  /* @__PURE__ */ l.jsxs("span", { children: [
                    Math.round(c.value),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx(
                  cc,
                  {
                    ariaLabel: "Brightness",
                    min: "0",
                    max: "100",
                    value: Math.round(c.value),
                    background: `linear-gradient(to right, #000, ${m})`,
                    onChange: (f) => p({ value: f })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2 border-t border-border pt-3", children: [
              /* @__PURE__ */ l.jsx("span", { className: "size-8 shrink-0 rounded-md border border-border shadow-inner", style: { backgroundColor: t.value }, "aria-hidden": "true" }),
              /* @__PURE__ */ l.jsx("p", { className: "text-xs leading-relaxed text-muted-foreground", children: "Enter a hex value or adjust hue, saturation, and brightness." })
            ] })
          ]
        }
      )
    ] }) })
  );
}
function cc({
  ariaLabel: e,
  min: t,
  max: n,
  value: r,
  background: o,
  onChange: i
}) {
  const a = Math.min(100, Math.max(0, (r - Number(t)) / (Number(n) - Number(t)) * 100));
  return /* @__PURE__ */ l.jsxs("div", { className: "relative h-4 rounded-full outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-popover", children: [
    /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "absolute inset-y-1 inset-x-0 rounded-full border border-border", style: { background: o } }),
    /* @__PURE__ */ l.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-foreground shadow",
        style: { left: `${a}%` }
      }
    ),
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "range",
        min: t,
        max: n,
        step: "1",
        value: r,
        "aria-label": e,
        onChange: (s) => i(Number(s.currentTarget.value)),
        className: "absolute inset-0 h-full w-full cursor-pointer opacity-0"
      }
    )
  ] });
}
const nN = ["top", "right", "bottom", "left"], Qn = Math.min, pn = Math.max, js = Math.round, Oa = Math.floor, mn = (e) => ({
  x: e,
  y: e
}), rN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function cw(e, t, n) {
  return pn(e, Qn(t, n));
}
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zn(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function lf(e) {
  return e === "x" ? "y" : "x";
}
function cf(e) {
  return e === "y" ? "height" : "width";
}
function Wt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function uf(e) {
  return lf(Wt(e));
}
function oN(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = uf(e), i = cf(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ns(a)), [a, Ns(a)];
}
function iN(e) {
  const t = Ns(e);
  return [_u(e), t, _u(t)];
}
function _u(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Bm = ["left", "right"], Hm = ["right", "left"], aN = ["top", "bottom"], sN = ["bottom", "top"];
function lN(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Hm : Bm : t ? Bm : Hm;
    case "left":
    case "right":
      return t ? aN : sN;
    default:
      return [];
  }
}
function cN(e, t, n, r) {
  const o = Ao(e);
  let i = lN(Zn(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(_u)))), i;
}
function Ns(e) {
  const t = Zn(e);
  return rN[t] + e.slice(t.length);
}
function uN(e) {
  var t, n, r, o;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (r = e.bottom) != null ? r : 0,
    left: (o = e.left) != null ? o : 0
  };
}
function uw(e) {
  return typeof e != "number" ? uN(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ts(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Um(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Wt(t), a = uf(t), s = cf(a), c = Zn(t), u = i === "y", m = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  const x = Ao(t);
  return x && (h[a] += f * (x === "end" ? 1 : -1) * (n && u ? -1 : 1)), h;
}
async function dN(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Sn(t, e), x = uw(h), b = s[f ? p === "floating" ? "reference" : "floating" : p], g = Ts(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: m,
    strategy: c
  })), y = p === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(w)) && await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  }, S = Ts(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: w,
    strategy: c
  }) : y);
  return {
    top: (g.top - S.top + x.top) / C.y,
    bottom: (S.bottom - g.bottom + x.bottom) / C.y,
    left: (g.left - S.left + x.left) / C.x,
    right: (S.right - g.right + x.right) / C.x
  };
}
const fN = 50, pN = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = a.detectOverflow ? a : {
    ...a,
    detectOverflow: dN
  }, c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: p
  } = Um(u, r, c), f = r, h = 0;
  const x = {};
  for (let v = 0; v < i.length; v++) {
    const b = i[v];
    if (!b)
      continue;
    const {
      name: g,
      fn: y
    } = b, {
      x: w,
      y: C,
      data: S,
      reset: k
    } = await y({
      x: m,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: x,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = w ?? m, p = C ?? p, x[g] = {
      ...x[g],
      ...S
    }, k && h < fN && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: m,
      y: p
    } = Um(u, f, c)), v = -1);
  }
  return {
    x: m,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: x
  };
}, mN = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = t, {
      element: u,
      padding: m = 0
    } = Sn(e, t) || {};
    if (u == null)
      return {};
    const p = uw(m), f = {
      x: n,
      y: r
    }, h = uf(o), x = cf(h), v = await a.getDimensions(u), b = h === "y", g = b ? "top" : "left", y = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", C = i.reference[x] + i.reference[h] - f[h] - i.floating[x], S = f[h] - i.reference[h], k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = k ? k[w] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(k))) && (P = s.floating[w] || i.floating[x]);
    const E = C / 2 - S / 2, R = P / 2 - v[x] / 2 - 1, T = Qn(p[g], R), O = Qn(p[y], R), M = P - v[x] - O, W = P / 2 - v[x] / 2 + E, K = cw(T, W, M), te = !c.arrow && Ao(o) != null && W !== K && i.reference[x] / 2 - (W < T ? T : O) - v[x] / 2 < 0, q = te ? W < T ? W - T : W - M : 0;
    return {
      [h]: f[h] + q,
      data: {
        [h]: K,
        centerOffset: W - K - q,
        ...te && {
          alignmentOffset: q
        }
      },
      reset: te
    };
  }
}), hN = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: u
      } = t, {
        mainAxis: m = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: v = !0,
        ...b
      } = Sn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = Zn(o), y = Wt(s), w = Zn(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), S = f || (w || !v ? [Ns(s)] : iN(s)), k = x !== "none";
      !f && k && S.push(...cN(s, v, x, C));
      const P = [s, ...S], E = await c.detectOverflow(t, b), R = [];
      let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (m && R.push(E[g]), p) {
        const K = oN(o, a, C);
        R.push(E[K[0]], E[K[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: R
      }], !R.every((K) => K <= 0)) {
        var O, M;
        const K = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, te = P[K];
        if (te && (!(p === "alignment" ? y !== Wt(te) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((j) => Wt(j.placement) === y ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: K,
              overflows: T
            },
            reset: {
              placement: te
            }
          };
        let q = (M = T.filter((Y) => Y.overflows[0] <= 0).sort((Y, j) => Y.overflows[1] - j.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!q)
          switch (h) {
            case "bestFit": {
              var W;
              const Y = (W = T.filter((j) => {
                if (k) {
                  const I = Wt(j.placement);
                  return I === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((I) => I > 0).reduce((I, F) => I + F, 0)]).sort((j, I) => j[1] - I[1])[0]) == null ? void 0 : W[0];
              Y && (q = Y);
              break;
            }
            case "initialPlacement":
              q = s;
              break;
          }
        if (o !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function Gm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Wm(e) {
  return nN.some((t) => e[t] >= 0);
}
const gN = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = Sn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), s = Gm(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Wm(s)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), s = Gm(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Wm(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, dw = /* @__PURE__ */ new Set(["left", "top"]);
async function vN(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Zn(n), s = Ao(n), c = Wt(n) === "y", u = dw.has(a) ? -1 : 1, m = i && c ? -1 : 1, p = Sn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof x == "number" && (h = s === "end" ? x * -1 : x), c ? {
    x: h * m,
    y: f * u
  } : {
    x: f * u,
    y: h * m
  };
}
const xN = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, c = await vN(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, wN = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: w,
              y: C
            } = y;
            return {
              x: w,
              y: C
            };
          }
        },
        ...u
      } = Sn(e, t), m = {
        x: n,
        y: r
      }, p = await i.detectOverflow(t, u), f = Wt(o), h = lf(f);
      let x = m[h], v = m[f];
      const b = (y, w) => cw(w + p[y === "y" ? "top" : "left"], w, w - p[y === "y" ? "bottom" : "right"]);
      a && (x = b(h, x)), s && (v = b(f, v));
      const g = c.fn({
        ...t,
        [h]: x,
        [f]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [h]: a,
            [f]: s
          }
        }
      };
    }
  };
}, yN = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        rects: s,
        middlewareData: c
      } = t, {
        offset: u = 0,
        mainAxis: m = !0,
        crossAxis: p = !0
      } = Sn(e, t), f = {
        x: o,
        y: i
      }, h = Wt(a), x = lf(h);
      let v = f[x], b = f[h];
      const g = Sn(u, t), y = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: (n = g.mainAxis) != null ? n : 0,
        crossAxis: (r = g.crossAxis) != null ? r : 0
      };
      if (m) {
        const S = x === "y" ? "height" : "width", k = s.reference[x] - s.floating[S] + y.mainAxis, P = s.reference[x] + s.reference[S] - y.mainAxis;
        v < k ? v = k : v > P && (v = P);
      }
      if (p) {
        var w, C;
        const S = x === "y" ? "width" : "height", k = dw.has(Zn(a)), P = s.reference[h] - s.floating[S] + (k && ((w = c.offset) == null ? void 0 : w[h]) || 0) + (k ? 0 : y.crossAxis), E = s.reference[h] + s.reference[S] + (k ? 0 : ((C = c.offset) == null ? void 0 : C[h]) || 0) - (k ? y.crossAxis : 0);
        b < P ? b = P : b > E && (b = E);
      }
      return {
        [x]: v,
        [h]: b
      };
    }
  };
}, bN = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: a = () => {
        },
        ...s
      } = Sn(e, t), c = await o.detectOverflow(t, s), u = Zn(n), m = Ao(n), p = Wt(n) === "y", {
        width: f,
        height: h
      } = r.floating;
      let x, v;
      u === "top" || u === "bottom" ? (x = u, v = m === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = u, x = m === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, g = f - c.left - c.right, y = Qn(h - c[x], b), w = Qn(f - c[v], g), C = t.middlewareData.shift, S = !C;
      let k = y, P = w;
      C != null && C.enabled.x && (P = g), C != null && C.enabled.y && (k = b), S && !m && (p ? P = f - 2 * pn(c.left, c.right) : k = h - 2 * pn(c.top, c.bottom)), await a({
        ...t,
        availableWidth: P,
        availableHeight: k
      });
      const E = await o.getDimensions(i.floating);
      return f !== E.width || h !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function cl() {
  return typeof window < "u";
}
function Do(e) {
  return fw(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function lt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tn(e) {
  var t;
  return (t = (fw(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fw(e) {
  return cl() ? e instanceof Node || e instanceof lt(e).Node : !1;
}
function Qt(e) {
  return cl() ? e instanceof Element || e instanceof lt(e).Element : !1;
}
function ir(e) {
  return cl() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1;
}
function Km(e) {
  return !cl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot;
}
function ul(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function CN(e) {
  return /^(table|td|th)$/.test(Do(e));
}
function dl(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const SN = /transform|translate|scale|rotate|perspective|filter/, kN = /paint|layout|strict|content/, lr = (e) => !!e && e !== "none";
let uc;
function df(e) {
  const t = Qt(e) ? Zt(e) : e;
  return lr(t.transform) || lr(t.translate) || lr(t.scale) || lr(t.rotate) || lr(t.perspective) || !ff() && (lr(t.backdropFilter) || lr(t.filter)) || SN.test(t.willChange || "") || kN.test(t.contain || "");
}
function PN(e) {
  let t = Cr(e);
  for (; ir(t) && !Di(t); ) {
    if (df(t))
      return t;
    if (dl(t))
      return null;
    t = Cr(t);
  }
  return null;
}
function ff() {
  return uc == null && (uc = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), uc;
}
function Di(e) {
  return /^(html|body|#document)$/.test(Do(e));
}
function Zt(e) {
  return lt(e).getComputedStyle(e);
}
function fl(e) {
  return Qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Cr(e) {
  if (Do(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Km(e) && e.host || // Fallback.
    Tn(e)
  );
  return Km(t) ? t.host : t;
}
function pw(e) {
  const t = Cr(e);
  return Di(t) ? (e.ownerDocument || e).body : ir(t) && ul(t) ? t : pw(t);
}
function Oi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = pw(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = lt(o);
  if (i) {
    const s = Iu(a);
    return t.concat(a, a.visualViewport || [], ul(o) ? o : [], s && n ? Oi(s) : []);
  } else
    return t.concat(o, Oi(o, [], n));
}
function Iu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function mw(e) {
  const t = Zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ir(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = js(n) !== i || js(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function pf(e) {
  return Qt(e) ? e : e.contextElement;
}
function fo(e) {
  const t = pf(e);
  if (!ir(t))
    return mn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = mw(t);
  let a = (i ? js(n.width) : n.width) / r, s = (i ? js(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const EN = /* @__PURE__ */ mn(0);
function hw(e) {
  const t = lt(e);
  return !ff() || !t.visualViewport ? EN : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function jN(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === lt(e);
}
function Sr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = pf(e);
  let a = mn(1);
  t && (r ? Qt(r) && (a = fo(r)) : a = fo(e));
  const s = jN(i, n, r) ? hw(i) : mn(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, m = o.width / a.x, p = o.height / a.y;
  if (i && r) {
    const f = lt(i), h = Qt(r) ? lt(r) : r;
    let x = f, v = Iu(x);
    for (; v && h !== x; ) {
      const b = fo(v), g = v.getBoundingClientRect(), y = Zt(v), w = g.left + (v.clientLeft + parseFloat(y.paddingLeft)) * b.x, C = g.top + (v.clientTop + parseFloat(y.paddingTop)) * b.y;
      c *= b.x, u *= b.y, m *= b.x, p *= b.y, c += w, u += C, x = lt(v), v = Iu(x);
    }
  }
  return Ts({
    width: m,
    height: p,
    x: c,
    y: u
  });
}
function pl(e, t) {
  const n = fl(e).scrollLeft;
  return t ? t.left + n : Sr(Tn(e)).left + n;
}
function gw(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - pl(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function NN(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Tn(r), s = t ? dl(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = mn(1);
  const m = mn(0), p = ir(r);
  if ((p || !i) && ((Do(r) !== "body" || ul(a)) && (c = fl(r)), p)) {
    const h = Sr(r);
    u = fo(r), m.x = h.x + r.clientLeft, m.y = h.y + r.clientTop;
  }
  const f = a && !p && !i ? gw(a, c) : mn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + m.x + f.x,
    y: n.y * u.y - c.scrollTop * u.y + m.y + f.y
  };
}
function TN(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function RN(e) {
  const t = fl(e), n = e.ownerDocument.body, r = pn(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), o = pn(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + pl(e);
  const a = -t.scrollTop;
  return Zt(n).direction === "rtl" && (i += pn(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: i,
    y: a
  };
}
const MN = 25;
function _N(e, t, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = lt(e), i = Tn(e), a = o.visualViewport;
  let s = i.clientWidth, c = i.clientHeight, u = 0, m = 0;
  if (a) {
    const f = !ff() || t === "fixed";
    r ? f || (u = -a.offsetLeft, m = -a.offsetTop) : (s = a.width, c = a.height, f && (u = a.offsetLeft, m = a.offsetTop));
  }
  if (pl(i) <= 0) {
    const f = i.ownerDocument, h = f.body, x = getComputedStyle(h), v = f.compatMode === "CSS1Compat" && parseFloat(x.marginLeft) + parseFloat(x.marginRight) || 0, b = Math.abs(i.clientWidth - h.clientWidth - v), g = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? b / 2 : b;
    g <= MN && (s -= g);
  }
  return {
    width: s,
    height: c,
    x: u,
    y: m
  };
}
function IN(e, t) {
  const n = Sr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = fo(e), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function Ym(e, t, n) {
  let r;
  if (t === "viewport" || t === "layoutViewport")
    r = _N(e, n, t);
  else if (t === "document")
    r = RN(Tn(e));
  else if (Qt(t))
    r = IN(t, n);
  else {
    const o = hw(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ts(r);
}
function AN(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Oi(e, [], !1).filter((s) => Qt(s) && Do(s) !== "body"), o = null;
  const i = Zt(e).position === "fixed";
  let a = i ? Cr(e) : e;
  for (; Qt(a) && !Di(a); ) {
    const s = Zt(a), c = df(a), u = o ? o.position : i ? "fixed" : "";
    !c && (u === "fixed" || u === "absolute" && s.position === "static") ? r = r.filter((p) => p !== a) : o = s, a = Cr(a);
  }
  return t.set(e, r), r;
}
function DN(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? dl(t) ? [] : AN(t, this._c) : [].concat(n), r], s = Ym(t, a[0], o);
  let c = s.top, u = s.right, m = s.bottom, p = s.left;
  for (let f = 1; f < a.length; f++) {
    const h = Ym(t, a[f], o);
    c = pn(h.top, c), u = Qn(h.right, u), m = Qn(h.bottom, m), p = pn(h.left, p);
  }
  return {
    width: u - p,
    height: m - c,
    x: p,
    y: c
  };
}
function ON(e) {
  const {
    width: t,
    height: n
  } = mw(e);
  return {
    width: t,
    height: n
  };
}
function $N(e, t, n) {
  const r = ir(t), o = Tn(t), i = n === "fixed", a = Sr(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = mn(0);
  if ((r || !i) && ((Do(t) !== "body" || ul(o)) && (s = fl(t)), r)) {
    const f = Sr(t, !0, i, t);
    c.x = f.x + t.clientLeft, c.y = f.y + t.clientTop;
  }
  !r && o && (c.x = pl(o));
  const u = o && !r && !i ? gw(o, s) : mn(0), m = a.left + s.scrollLeft - c.x - u.x, p = a.top + s.scrollTop - c.y - u.y;
  return {
    x: m,
    y: p,
    width: a.width,
    height: a.height
  };
}
function dc(e) {
  return Zt(e).position === "static";
}
function Xm(e, t) {
  if (!ir(e) || Zt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Tn(e) === n && (n = n.ownerDocument.body), n;
}
function vw(e, t) {
  const n = lt(e);
  if (dl(e))
    return n;
  if (!ir(e)) {
    let o = Cr(e);
    for (; o && !Di(o); ) {
      if (Qt(o) && !dc(o))
        return o;
      o = Cr(o);
    }
    return n;
  }
  let r = Xm(e, t);
  for (; r && CN(r) && dc(r); )
    r = Xm(r, t);
  return r && Di(r) && dc(r) && !df(r) ? n : r || PN(e) || n;
}
const zN = async function(e) {
  const t = this.getOffsetParent || vw, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: $N(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function FN(e) {
  return Zt(e).direction === "rtl";
}
const LN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NN,
  getDocumentElement: Tn,
  getClippingRect: DN,
  getOffsetParent: vw,
  getElementRects: zN,
  getClientRects: TN,
  getDimensions: ON,
  getScale: fo,
  isElement: Qt,
  isRTL: FN
};
function xw(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function VN(e, t, n) {
  let r = null, o;
  const i = Tn(e);
  function a() {
    var m;
    clearTimeout(o), (m = r) == null || m.disconnect(), r = null;
  }
  function s(m, p) {
    m === void 0 && (m = !1), p === void 0 && (p = 1), a();
    const f = e.getBoundingClientRect(), {
      left: h,
      top: x,
      width: v,
      height: b
    } = f;
    if (m || t(), !v || !b)
      return;
    const g = Oa(x), y = Oa(i.clientWidth - (h + v)), w = Oa(i.clientHeight - (x + b)), C = Oa(h), k = {
      rootMargin: -g + "px " + -y + "px " + -w + "px " + -C + "px",
      threshold: pn(0, Qn(1, p)) || 1
    };
    let P = !0;
    function E(R) {
      const T = R[0].intersectionRatio;
      if (!xw(f, e.getBoundingClientRect()))
        return s();
      if (T !== p) {
        if (!P)
          return s();
        T ? s(!1, T) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...k,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, k);
    }
    r.observe(e);
  }
  const c = lt(e), u = () => s(n);
  return c.addEventListener("resize", u), s(!0), () => {
    c.removeEventListener("resize", u), a();
  };
}
function BN(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = pf(e), m = o || i ? [...u ? Oi(u) : [], ...t ? Oi(t) : []] : [];
  m.forEach((g) => {
    o && g.addEventListener("scroll", n), i && g.addEventListener("resize", n);
  });
  const p = u && s ? VN(u, n, i) : null;
  let f = -1, h = null;
  a && (h = new ResizeObserver((g) => {
    let [y] = g;
    y && y.target === u && h && t && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), u && !c && h.observe(u), t && h.observe(t));
  let x, v = c ? Sr(e) : null;
  c && b();
  function b() {
    const g = Sr(e);
    v && !xw(v, g) && n(), v = g, x = requestAnimationFrame(b);
  }
  return n(), () => {
    var g;
    m.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), p == null || p(), (g = h) == null || g.disconnect(), h = null, c && cancelAnimationFrame(x);
  };
}
const HN = xN, UN = wN, GN = hN, WN = bN, KN = gN, qm = mN, YN = yN, XN = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, i = {
    ...LN,
    ...o.platform,
    _c: r
  };
  return pN(e, t, {
    ...o,
    platform: i
  });
};
var qN = typeof document < "u", QN = function() {
}, ts = qN ? d.useLayoutEffect : QN;
function Rs(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Rs(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Rs(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ww(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qm(e, t) {
  const n = ww(e);
  return Math.round(t * n) / n;
}
function fc(e) {
  const t = d.useRef(e);
  return ts(() => {
    t.current = e;
  }), t;
}
function ZN(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: u
  } = e, [m, p] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = d.useState(r);
  Rs(f, r) || h(r);
  const [x, v] = d.useState(null), [b, g] = d.useState(null), y = d.useCallback((j) => {
    j !== k.current && (k.current = j, v(j));
  }, []), w = d.useCallback((j) => {
    j !== P.current && (P.current = j, g(j));
  }, []), C = i || x, S = a || b, k = d.useRef(null), P = d.useRef(null), E = d.useRef(m), R = c != null, T = fc(c), O = fc(o), M = fc(u), W = d.useCallback(() => {
    if (!k.current || !P.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: f
    };
    O.current && (j.platform = O.current), XN(k.current, P.current, j).then((I) => {
      const F = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== !1
      };
      K.current && !Rs(E.current, F) && (E.current = F, No.flushSync(() => {
        p(F);
      }));
    });
  }, [f, t, n, O, M]);
  ts(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [u]);
  const K = d.useRef(!1);
  ts(() => (K.current = !0, () => {
    K.current = !1;
  }), []), ts(() => {
    if (C && (k.current = C), S && (P.current = S), C && S) {
      if (T.current)
        return T.current(C, S, W);
      W();
    }
  }, [C, S, W, T, R]);
  const te = d.useMemo(() => ({
    reference: k,
    floating: P,
    setReference: y,
    setFloating: w
  }), [y, w]), q = d.useMemo(() => ({
    reference: C,
    floating: S
  }), [C, S]), Y = d.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return j;
    const I = Qm(q.floating, m.x), F = Qm(q.floating, m.y);
    return s ? {
      ...j,
      transform: "translate(" + I + "px, " + F + "px)",
      ...ww(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: F
    };
  }, [n, s, q.floating, m.x, m.y]);
  return d.useMemo(() => ({
    ...m,
    update: W,
    refs: te,
    elements: q,
    floatingStyles: Y
  }), [m, W, te, q, Y]);
}
const JN = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? qm({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? qm({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, e2 = (e, t) => {
  const n = HN(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, t2 = (e, t) => {
  const n = UN(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, n2 = (e, t) => ({
  fn: YN(e).fn,
  options: [e, t]
}), r2 = (e, t) => {
  const n = GN(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, o2 = (e, t) => {
  const n = WN(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, i2 = (e, t) => {
  const n = KN(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, a2 = (e, t) => {
  const n = JN(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var s2 = Object.defineProperty, l2 = (e, t) => s2(e, "name", { value: t, configurable: !0 }), c2 = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ l2(function(t, n) {
    const { children: r, width: o = 10, height: i = 5, ...a } = t;
    return /* @__PURE__ */ l.jsx(
      B.svg,
      {
        ...a,
        ref: n,
        width: o,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? r : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), u2 = Object.defineProperty, hn = (e, t) => u2(e, "name", { value: t, configurable: !0 }), Zm = {
  Partial: "partial"
}, Jm = {
  Optimized: "optimized",
  Always: "always"
}, yw = "Popper", [bw, tn] = /* @__PURE__ */ ke(yw), [d2, Cw] = bw(yw), na = /* @__PURE__ */ hn((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null), [i, a] = d.useState(void 0);
  return /* @__PURE__ */ l.jsx(
    d2,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: i,
      setPlacementState: a,
      children: n
    }
  );
}, "Popper"), f2 = "PopperAnchor", ra = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...i } = t, a = Cw(f2, r), s = d.useRef(null), c = a.onAnchorChange, u = d.useCallback(
      (v) => {
        s.current = v, v && c(v);
      },
      [c]
    ), m = J(n, u), p = d.useRef(null);
    d.useEffect(() => {
      if (!o)
        return;
      const v = p.current;
      p.current = o.current, v !== p.current && c(p.current);
    });
    const f = a.placementState && ml(a.placementState), h = f == null ? void 0 : f[0], x = f == null ? void 0 : f[1];
    return o ? null : /* @__PURE__ */ l.jsx(
      B.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": x,
        ...i,
        ref: m
      }
    );
  }, "PopperAnchor")
), Sw = "PopperContent", [p2, m2] = bw(Sw), oa = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ hn(function(t, n) {
    var Z, he, ce, ie, ae, Le, ut;
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: u = !0,
      collisionBoundary: m = [],
      collisionPadding: p = 0,
      sticky: f = Zm.Partial,
      hideWhenDetached: h = !1,
      updatePositionStrategy: x = Jm.Optimized,
      onPlaced: v,
      ...b
    } = t, g = Cw(Sw, r), [y, w] = d.useState(null), C = J(n, w), [S, k] = d.useState(null), P = ta(S), E = (P == null ? void 0 : P.width) ?? 0, R = (P == null ? void 0 : P.height) ?? 0, T = o + (a !== "center" ? "-" + a : ""), O = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, M = Array.isArray(m) ? m : [m], W = M.length > 0, K = {
      padding: O,
      boundary: M.filter(Pw),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: te, floatingStyles: q, placement: Y, isPositioned: j, middlewareData: I } = ZN({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: /* @__PURE__ */ hn((...Ve) => BN(...Ve, {
        animationFrame: x === Jm.Always
      }), "whileElementsMounted"),
      elements: {
        reference: g.anchor
      },
      middleware: [
        e2({ mainAxis: i + R, alignmentAxis: s }),
        u && t2({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === Zm.Partial ? n2() : void 0,
          ...K
        }),
        u && r2({ ...K }),
        o2({
          ...K,
          apply: /* @__PURE__ */ hn(({ elements: Ve, rects: rn, availableWidth: Lo, availableHeight: vb }) => {
            const { width: xb, height: wb } = rn.reference, fa = Ve.floating.style;
            fa.setProperty("--radix-popper-available-width", `${Lo}px`), fa.setProperty("--radix-popper-available-height", `${vb}px`), fa.setProperty("--radix-popper-anchor-width", `${xb}px`), fa.setProperty("--radix-popper-anchor-height", `${wb}px`);
          }, "apply")
        }),
        S && a2({ element: S, padding: c }),
        v2({ arrowWidth: E, arrowHeight: R }),
        h && i2({
          strategy: "referenceHidden",
          ...K,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: W ? K.boundary : void 0
        })
      ]
    }), F = g.setPlacementState;
    Ne(() => (F(Y), () => {
      F(void 0);
    }), [Y, F]);
    const [ee, N] = ml(Y), H = Ae(v);
    Ne(() => {
      j && (H == null || H());
    }, [j, H]);
    const X = (Z = I.arrow) == null ? void 0 : Z.x, L = (he = I.arrow) == null ? void 0 : he.y, D = ((ce = I.arrow) == null ? void 0 : ce.centerOffset) !== 0, [Q, U] = d.useState();
    return Ne(() => {
      y && U(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: te.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: j ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Q,
          "--radix-popper-transform-origin": [
            (ie = I.transformOrigin) == null ? void 0 : ie.x,
            (ae = I.transformOrigin) == null ? void 0 : ae.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Le = I.hide) == null ? void 0 : Le.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ l.jsx(
          p2,
          {
            scope: r,
            placedSide: ee,
            placedAlign: N,
            onArrowChange: k,
            arrowX: X,
            arrowY: L,
            shouldHideArrow: D,
            children: /* @__PURE__ */ l.jsx(
              B.div,
              {
                "data-side": ee,
                "data-align": N,
                ...b,
                ref: C,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: j ? (ut = b.style) == null ? void 0 : ut.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), h2 = "PopperArrow", g2 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, kw = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopePopper: r, ...o } = t, i = m2(h2, r), a = g2[i.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ l.jsx(
        "span",
        {
          ref: i.onArrowChange,
          style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [a]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[i.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ l.jsx(
            c2,
            {
              ...o,
              ref: n,
              style: {
                ...o.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  }, "PopperArrow")
);
function Pw(e) {
  return e !== null;
}
hn(Pw, "isNotNull");
var v2 = /* @__PURE__ */ hn((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, g, y;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [u, m] = ml(n), p = { start: "0%", center: "50%", end: "100%" }[m], f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + s / 2, h = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let x = "", v = "";
    return u === "bottom" ? (x = a ? p : `${f}px`, v = `${-c}px`) : u === "top" ? (x = a ? p : `${f}px`, v = `${r.floating.height + c}px`) : u === "right" ? (x = `${-c}px`, v = a ? p : `${h}px`) : u === "left" && (x = `${r.floating.width + c}px`, v = a ? p : `${h}px`), { data: { x, y: v } };
  }
}), "transformOrigin");
function ml(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
hn(ml, "getSideAndAlignFromPlacement");
var x2 = Object.defineProperty, nn = (e, t) => x2(e, "name", { value: t, configurable: !0 }), mf = "Popover", [Ew, OA] = /* @__PURE__ */ ke(mf, [
  tn
]), hl = tn(), [w2, Oo] = Ew(mf), hf = /* @__PURE__ */ nn((e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !1
  } = e, s = hl(t), c = d.useRef(null), [u, m] = d.useState(!1), [p, f] = d.useState(0), [h, x] = d.useState(0), [v, b] = Ee({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: mf
  });
  return /* @__PURE__ */ l.jsx(na, { ...s, children: /* @__PURE__ */ l.jsx(
    w2,
    {
      scope: t,
      contentId: pe(),
      titleId: pe(),
      descriptionId: pe(),
      titlePresent: p > 0,
      descriptionPresent: h > 0,
      setTitleCount: f,
      setDescriptionCount: x,
      triggerRef: c,
      open: v,
      onOpenChange: b,
      onOpenToggle: d.useCallback(() => b((g) => !g), [b]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: d.useCallback(() => m(!0), []),
      onCustomAnchorRemove: d.useCallback(() => m(!1), []),
      modal: a,
      children: n
    }
  ) });
}, "Popover"), y2 = "PopoverTrigger", gf = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ nn(function(t, n) {
    const { __scopePopover: r, ...o } = t, i = Oo(y2, r), a = hl(r), s = J(n, i.triggerRef), c = /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": wf(i.open),
        ...o,
        ref: s,
        onClick: _(t.onClick, i.onOpenToggle)
      }
    );
    return i.hasCustomAnchor ? c : /* @__PURE__ */ l.jsx(ra, { asChild: !0, ...a, children: c });
  }, "PopoverTrigger")
), jw = "PopoverPortal", [b2, C2] = Ew(jw, {
  forceMount: void 0
}), vf = /* @__PURE__ */ nn((e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Oo(jw, t);
  return /* @__PURE__ */ l.jsx(b2, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(nt, { present: n || i.open, children: /* @__PURE__ */ l.jsx(_o, { asChild: !0, container: o, children: r }) }) });
}, "PopoverPortal"), $i = "PopoverContent", xf = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nn(function(t, n) {
    const r = C2($i, t.__scopePopover), { forceMount: o = r.forceMount, ...i } = t, a = Oo($i, t.__scopePopover);
    return /* @__PURE__ */ l.jsx(nt, { present: o || a.open, children: a.modal ? /* @__PURE__ */ l.jsx(k2, { ...i, ref: n }) : /* @__PURE__ */ l.jsx(P2, { ...i, ref: n }) });
  }, "PopoverContent")
), S2 = /* @__PURE__ */ qt("PopoverContent.RemoveScroll"), k2 = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nn(function(t, n) {
    const r = Oo($i, t.__scopePopover), o = d.useRef(null), i = J(n, o), a = d.useRef(!1), { nodes: s, registry: c } = el();
    return d.useEffect(() => {
      const u = o.current;
      if (u) return rl(u);
    }, []), /* @__PURE__ */ l.jsx(
      Xi,
      {
        as: S2,
        allowPinchZoom: !0,
        shards: d.useMemo(
          () => [o, ...s.map((u) => ({ current: u }))],
          [o, s]
        ),
        children: /* @__PURE__ */ l.jsx(
          Nw,
          {
            ...t,
            ref: i,
            branchNodes: s,
            branchRegistry: c,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: _(t.onCloseAutoFocus, (u) => {
              var m;
              u.preventDefault(), a.current || (m = r.triggerRef.current) == null || m.focus();
            }),
            onPointerDownOutside: _(
              t.onPointerDownOutside,
              (u) => {
                const m = u.detail.originalEvent, p = m.button === 0 && m.ctrlKey === !0, f = m.button === 2 || p;
                a.current = f;
              },
              { checkForDefaultPrevented: !1 }
            ),
            onFocusOutside: _(
              t.onFocusOutside,
              (u) => u.preventDefault(),
              { checkForDefaultPrevented: !1 }
            )
          }
        )
      }
    );
  }, "PopoverContentModal")
), P2 = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nn(function(t, n) {
    const r = Oo($i, t.__scopePopover), o = d.useRef(!1), i = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Nw,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, c;
          (s = t.onCloseAutoFocus) == null || s.call(t, a), a.defaultPrevented || (o.current || (c = r.triggerRef.current) == null || c.focus(), a.preventDefault()), o.current = !1, i.current = !1;
        },
        onInteractOutside: (a) => {
          var u, m;
          (u = t.onInteractOutside) == null || u.call(t, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const s = a.target;
          ((m = r.triggerRef.current) == null ? void 0 : m.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
        }
      }
    );
  }, "PopoverContentNonModal")
), Nw = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ nn(function(t, n) {
    const {
      __scopePopover: r,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: m,
      onInteractOutside: p,
      "aria-describedby": f,
      branchNodes: h,
      branchRegistry: x,
      ...v
    } = t, b = Oo($i, r), g = hl(r), [y, w] = d.useState(null), C = J(n, w);
    return tl(y), Io(), /* @__PURE__ */ l.jsx(Js, { registry: x, children: /* @__PURE__ */ l.jsx(
      Zs,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        branches: h,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ l.jsx(
          Mo,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: p,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: m,
            onDismiss: () => b.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ l.jsx(
              oa,
              {
                "data-state": wf(b.open),
                role: "dialog",
                id: b.contentId,
                "aria-labelledby": b.titlePresent ? b.titleId : void 0,
                "aria-describedby": b.descriptionPresent ? Tw(f, b.descriptionId) : f,
                ...g,
                ...v,
                ref: C,
                style: {
                  ...v.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    ) });
  }, "PopoverContentImpl")
), E2 = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ nn(function(t, n) {
    const { __scopePopover: r, ...o } = t, i = hl(r);
    return /* @__PURE__ */ l.jsx(kw, { ...i, ...o, ref: n });
  }, "PopoverArrow")
);
function wf(e) {
  return e ? "open" : "closed";
}
nn(wf, "getState");
function Tw(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
nn(Tw, "concatAriaDescribedby");
var eh = 1, j2 = 0.9, N2 = 0.8, T2 = 0.17, pc = 0.1, mc = 0.999, R2 = 0.9999, M2 = 0.99, _2 = /[\\\/_+.#"@\[\(\{&]/, I2 = /[\\\/_+.#"@\[\(\{&]/g, A2 = /[\s-]/, Rw = /[\s-]/g;
function Au(e, t, n, r, o, i, a) {
  if (i === t.length) return o === e.length ? eh : M2;
  var s = `${o},${i}`;
  if (a[s] !== void 0) return a[s];
  for (var c = r.charAt(i), u = n.indexOf(c, o), m = 0, p, f, h, x; u >= 0; ) p = Au(e, t, n, r, u + 1, i + 1, a), p > m && (u === o ? p *= eh : _2.test(e.charAt(u - 1)) ? (p *= N2, h = e.slice(o, u - 1).match(I2), h && o > 0 && (p *= Math.pow(mc, h.length))) : A2.test(e.charAt(u - 1)) ? (p *= j2, x = e.slice(o, u - 1).match(Rw), x && o > 0 && (p *= Math.pow(mc, x.length))) : (p *= T2, o > 0 && (p *= Math.pow(mc, u - o))), e.charAt(u) !== t.charAt(i) && (p *= R2)), (p < pc && n.charAt(u - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(u - 1) !== r.charAt(i)) && (f = Au(e, t, n, r, u + 1, i + 2, a), f * pc > p && (p = f * pc)), p > m && (m = p), u = n.indexOf(c, u + 1);
  return a[s] = m, m;
}
function th(e) {
  return e.toLowerCase().replace(Rw, " ");
}
function D2(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Au(e, t, th(e), th(t), 0, 0, {});
}
var Zo = '[cmdk-group=""]', hc = '[cmdk-group-items=""]', O2 = '[cmdk-group-heading=""]', Mw = '[cmdk-item=""]', nh = `${Mw}:not([aria-disabled="true"])`, Du = "cmdk-item-select", Vr = "data-value", $2 = (e, t, n) => D2(e, t, n), _w = d.createContext(void 0), ia = () => d.useContext(_w), Iw = d.createContext(void 0), yf = () => d.useContext(Iw), Aw = d.createContext(void 0), Dw = d.forwardRef((e, t) => {
  let n = Br(() => {
    var N, H;
    return { search: "", value: (H = (N = e.value) != null ? N : e.defaultValue) != null ? H : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Br(() => /* @__PURE__ */ new Set()), o = Br(() => /* @__PURE__ */ new Map()), i = Br(() => /* @__PURE__ */ new Map()), a = Br(() => /* @__PURE__ */ new Set()), s = Ow(e), { label: c, children: u, value: m, onValueChange: p, filter: f, shouldFilter: h, loop: x, disablePointerSelection: v = !1, vimBindings: b = !0, ...g } = e, y = pe(), w = pe(), C = pe(), S = d.useRef(null), k = Y2();
  kr(() => {
    if (m !== void 0) {
      let N = m.trim();
      n.current.value = N, P.emit();
    }
  }, [m]), kr(() => {
    k(6, W);
  }, []);
  let P = d.useMemo(() => ({ subscribe: (N) => (a.current.add(N), () => a.current.delete(N)), snapshot: () => n.current, setState: (N, H, X) => {
    var L, D, Q, U;
    if (!Object.is(n.current[N], H)) {
      if (n.current[N] = H, N === "search") M(), T(), k(1, O);
      else if (N === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Z = document.getElementById(C);
          Z ? Z.focus() : (L = document.getElementById(y)) == null || L.focus();
        }
        if (k(7, () => {
          var Z;
          n.current.selectedItemId = (Z = K()) == null ? void 0 : Z.id, P.emit();
        }), X || k(5, W), ((D = s.current) == null ? void 0 : D.value) !== void 0) {
          let Z = H ?? "";
          (U = (Q = s.current).onValueChange) == null || U.call(Q, Z);
          return;
        }
      }
      P.emit();
    }
  }, emit: () => {
    a.current.forEach((N) => N());
  } }), []), E = d.useMemo(() => ({ value: (N, H, X) => {
    var L;
    H !== ((L = i.current.get(N)) == null ? void 0 : L.value) && (i.current.set(N, { value: H, keywords: X }), n.current.filtered.items.set(N, R(H, X)), k(2, () => {
      T(), P.emit();
    }));
  }, item: (N, H) => (r.current.add(N), H && (o.current.has(H) ? o.current.get(H).add(N) : o.current.set(H, /* @__PURE__ */ new Set([N]))), k(3, () => {
    M(), T(), n.current.value || O(), P.emit();
  }), () => {
    i.current.delete(N), r.current.delete(N), n.current.filtered.items.delete(N);
    let X = K();
    k(4, () => {
      M(), (X == null ? void 0 : X.getAttribute("id")) === N && O(), P.emit();
    });
  }), group: (N) => (o.current.has(N) || o.current.set(N, /* @__PURE__ */ new Set()), () => {
    i.current.delete(N), o.current.delete(N);
  }), filter: () => s.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: y, inputId: C, labelId: w, listInnerRef: S }), []);
  function R(N, H) {
    var X, L;
    let D = (L = (X = s.current) == null ? void 0 : X.filter) != null ? L : $2;
    return N ? D(N, n.current.search, H) : 0;
  }
  function T() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let N = n.current.filtered.items, H = [];
    n.current.filtered.groups.forEach((L) => {
      let D = o.current.get(L), Q = 0;
      D.forEach((U) => {
        let Z = N.get(U);
        Q = Math.max(Z, Q);
      }), H.push([L, Q]);
    });
    let X = S.current;
    te().sort((L, D) => {
      var Q, U;
      let Z = L.getAttribute("id"), he = D.getAttribute("id");
      return ((Q = N.get(he)) != null ? Q : 0) - ((U = N.get(Z)) != null ? U : 0);
    }).forEach((L) => {
      let D = L.closest(hc);
      D ? D.appendChild(L.parentElement === D ? L : L.closest(`${hc} > *`)) : X.appendChild(L.parentElement === X ? L : L.closest(`${hc} > *`));
    }), H.sort((L, D) => D[1] - L[1]).forEach((L) => {
      var D;
      let Q = (D = S.current) == null ? void 0 : D.querySelector(`${Zo}[${Vr}="${encodeURIComponent(L[0])}"]`);
      Q == null || Q.parentElement.appendChild(Q);
    });
  }
  function O() {
    let N = te().find((X) => X.getAttribute("aria-disabled") !== "true"), H = N == null ? void 0 : N.getAttribute(Vr);
    P.setState("value", H || void 0);
  }
  function M() {
    var N, H, X, L;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let D = 0;
    for (let Q of r.current) {
      let U = (H = (N = i.current.get(Q)) == null ? void 0 : N.value) != null ? H : "", Z = (L = (X = i.current.get(Q)) == null ? void 0 : X.keywords) != null ? L : [], he = R(U, Z);
      n.current.filtered.items.set(Q, he), he > 0 && D++;
    }
    for (let [Q, U] of o.current) for (let Z of U) if (n.current.filtered.items.get(Z) > 0) {
      n.current.filtered.groups.add(Q);
      break;
    }
    n.current.filtered.count = D;
  }
  function W() {
    var N, H, X;
    let L = K();
    L && (((N = L.parentElement) == null ? void 0 : N.firstChild) === L && ((X = (H = L.closest(Zo)) == null ? void 0 : H.querySelector(O2)) == null || X.scrollIntoView({ block: "nearest" })), L.scrollIntoView({ block: "nearest" }));
  }
  function K() {
    var N;
    return (N = S.current) == null ? void 0 : N.querySelector(`${Mw}[aria-selected="true"]`);
  }
  function te() {
    var N;
    return Array.from(((N = S.current) == null ? void 0 : N.querySelectorAll(nh)) || []);
  }
  function q(N) {
    let H = te()[N];
    H && P.setState("value", H.getAttribute(Vr));
  }
  function Y(N) {
    var H;
    let X = K(), L = te(), D = L.findIndex((U) => U === X), Q = L[D + N];
    (H = s.current) != null && H.loop && (Q = D + N < 0 ? L[L.length - 1] : D + N === L.length ? L[0] : L[D + N]), Q && P.setState("value", Q.getAttribute(Vr));
  }
  function j(N) {
    let H = K(), X = H == null ? void 0 : H.closest(Zo), L;
    for (; X && !L; ) X = N > 0 ? W2(X, Zo) : K2(X, Zo), L = X == null ? void 0 : X.querySelector(nh);
    L ? P.setState("value", L.getAttribute(Vr)) : Y(N);
  }
  let I = () => q(te().length - 1), F = (N) => {
    N.preventDefault(), N.metaKey ? I() : N.altKey ? j(1) : Y(1);
  }, ee = (N) => {
    N.preventDefault(), N.metaKey ? q(0) : N.altKey ? j(-1) : Y(-1);
  };
  return d.createElement(B.div, { ref: t, tabIndex: -1, ...g, "cmdk-root": "", onKeyDown: (N) => {
    var H;
    (H = g.onKeyDown) == null || H.call(g, N);
    let X = N.nativeEvent.isComposing || N.keyCode === 229;
    if (!(N.defaultPrevented || X)) switch (N.key) {
      case "n":
      case "j": {
        b && N.ctrlKey && F(N);
        break;
      }
      case "ArrowDown": {
        F(N);
        break;
      }
      case "p":
      case "k": {
        b && N.ctrlKey && ee(N);
        break;
      }
      case "ArrowUp": {
        ee(N);
        break;
      }
      case "Home": {
        N.preventDefault(), q(0);
        break;
      }
      case "End": {
        N.preventDefault(), I();
        break;
      }
      case "Enter": {
        N.preventDefault();
        let L = K();
        if (L) {
          let D = new Event(Du);
          L.dispatchEvent(D);
        }
      }
    }
  } }, d.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: q2 }, c), gl(e, (N) => d.createElement(Iw.Provider, { value: P }, d.createElement(_w.Provider, { value: E }, N))));
}), z2 = d.forwardRef((e, t) => {
  var n, r;
  let o = pe(), i = d.useRef(null), a = d.useContext(Aw), s = ia(), c = Ow(e), u = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a == null ? void 0 : a.forceMount;
  kr(() => {
    if (!u) return s.item(o, a == null ? void 0 : a.id);
  }, [u]);
  let m = $w(o, i, [e.value, e.children, i], e.keywords), p = yf(), f = Jn((k) => k.value && k.value === m.current), h = Jn((k) => u || s.filter() === !1 ? !0 : k.search ? k.filtered.items.get(o) > 0 : !0);
  d.useEffect(() => {
    let k = i.current;
    if (!(!k || e.disabled)) return k.addEventListener(Du, x), () => k.removeEventListener(Du, x);
  }, [h, e.onSelect, e.disabled]);
  function x() {
    var k, P;
    v(), (P = (k = c.current).onSelect) == null || P.call(k, m.current);
  }
  function v() {
    p.setState("value", m.current, !0);
  }
  if (!h) return null;
  let { disabled: b, value: g, onSelect: y, forceMount: w, keywords: C, ...S } = e;
  return d.createElement(B.div, { ref: br(i, t), ...S, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!f, "data-disabled": !!b, "data-selected": !!f, onPointerMove: b || s.getDisablePointerSelection() ? void 0 : v, onClick: b ? void 0 : x }, e.children);
}), F2 = d.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...i } = e, a = pe(), s = d.useRef(null), c = d.useRef(null), u = pe(), m = ia(), p = Jn((h) => o || m.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(a) : !0);
  kr(() => m.group(a), []), $w(a, s, [e.value, e.heading, c]);
  let f = d.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return d.createElement(B.div, { ref: br(s, t), ...i, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, n && d.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), gl(e, (h) => d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, d.createElement(Aw.Provider, { value: f }, h))));
}), L2 = d.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = d.useRef(null), i = Jn((a) => !a.search);
  return !n && !i ? null : d.createElement(B.div, { ref: br(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), V2 = d.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, i = yf(), a = Jn((u) => u.search), s = Jn((u) => u.selectedItemId), c = ia();
  return d.useEffect(() => {
    e.value != null && i.setState("search", e.value);
  }, [e.value]), d.createElement(B.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": s, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (u) => {
    o || i.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), B2 = d.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, i = d.useRef(null), a = d.useRef(null), s = Jn((u) => u.selectedItemId), c = ia();
  return d.useEffect(() => {
    if (a.current && i.current) {
      let u = a.current, m = i.current, p, f = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let h = u.offsetHeight;
          m.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return f.observe(u), () => {
        cancelAnimationFrame(p), f.unobserve(u);
      };
    }
  }, []), d.createElement(B.div, { ref: br(i, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: c.listId }, gl(e, (u) => d.createElement("div", { ref: br(a, c.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), H2 = d.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: i, container: a, ...s } = e;
  return d.createElement(qi, { open: n, onOpenChange: r }, d.createElement(Qi, { container: a }, d.createElement(Zi, { "cmdk-overlay": "", className: o }), d.createElement(Ji, { "aria-label": e.label, "cmdk-dialog": "", className: i }, d.createElement(Dw, { ref: t, ...s }))));
}), U2 = d.forwardRef((e, t) => Jn((n) => n.filtered.count === 0) ? d.createElement(B.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), G2 = d.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...i } = e;
  return d.createElement(B.div, { ref: t, ...i, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, gl(e, (a) => d.createElement("div", { "aria-hidden": !0 }, a)));
}), Gt = Object.assign(Dw, { List: B2, Item: z2, Input: V2, Group: F2, Separator: L2, Dialog: H2, Empty: U2, Loading: G2 });
function W2(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function K2(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Ow(e) {
  let t = d.useRef(e);
  return kr(() => {
    t.current = e;
  }), t;
}
var kr = typeof window > "u" ? d.useEffect : d.useLayoutEffect;
function Br(e) {
  let t = d.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Jn(e) {
  let t = yf(), n = () => e(t.snapshot());
  return d.useSyncExternalStore(t.subscribe, n, n);
}
function $w(e, t, n, r = []) {
  let o = d.useRef(), i = ia();
  return kr(() => {
    var a;
    let s = (() => {
      var u;
      for (let m of n) {
        if (typeof m == "string") return m.trim();
        if (typeof m == "object" && "current" in m) return m.current ? (u = m.current.textContent) == null ? void 0 : u.trim() : o.current;
      }
    })(), c = r.map((u) => u.trim());
    i.value(e, s, c), (a = t.current) == null || a.setAttribute(Vr, s), o.current = s;
  }), o;
}
var Y2 = () => {
  let [e, t] = d.useState(), n = Br(() => /* @__PURE__ */ new Map());
  return kr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function X2(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function gl({ asChild: e, children: t }, n) {
  return e && d.isValidElement(t) ? d.cloneElement(X2(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var q2 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Q2 = (e) => typeof e == "string" ? { label: e, value: e } : e;
function Z2({ node: e }) {
  const t = e.props, n = d.useId(), r = wt(), [o, i] = d.useState(!1), a = t.options.map(Q2), s = a.find((c) => c.value === t.value);
  return z(
    e,
    /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, children: /* @__PURE__ */ l.jsxs(hf, { open: o, onOpenChange: i, children: [
      /* @__PURE__ */ l.jsxs(
        gf,
        {
          id: n,
          role: "combobox",
          "aria-expanded": o,
          "aria-required": t.required || void 0,
          disabled: t.disabled,
          className: "flex h-[var(--sen-control-h)] w-full items-center justify-between rounded-md border border-input bg-background px-3 text-left text-[length:var(--sen-control-fs)] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          children: [
            /* @__PURE__ */ l.jsx("span", { className: s ? "" : "text-muted-foreground", children: (s == null ? void 0 : s.label) ?? t.placeholder }),
            /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "ml-2 text-muted-foreground", children: "⌄" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(vf, { container: r ?? void 0, children: /* @__PURE__ */ l.jsx(xf, { align: "start", sideOffset: 4, className: "z-50 w-[var(--radix-popover-trigger-width)] rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in", children: /* @__PURE__ */ l.jsxs(Gt, { children: [
        /* @__PURE__ */ l.jsx(Gt.Input, { autoFocus: !0, placeholder: t.searchPlaceholder, className: "h-10 w-full border-b bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground" }),
        /* @__PURE__ */ l.jsxs(Gt.List, { className: "max-h-60 overflow-y-auto p-1", children: [
          /* @__PURE__ */ l.jsx(Gt.Empty, { className: "py-6 text-center text-sm text-muted-foreground", children: t.emptyText }),
          a.map((c) => /* @__PURE__ */ l.jsxs(
            Gt.Item,
            {
              value: `${c.label} ${c.value}`,
              onSelect: () => {
                e.setValue(c.value), i(!1);
              },
              className: "flex cursor-default items-center justify-between rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent",
              children: [
                c.label,
                t.value === c.value && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "✓" })
              ]
            },
            c.value
          ))
        ] })
      ] }) }) })
    ] }) })
  );
}
function J2({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs(Gt, { label: t.label, className: "overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-md", children: [
      /* @__PURE__ */ l.jsx(Gt.Input, { placeholder: t.placeholder, className: "h-10 w-full border-b bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground" }),
      /* @__PURE__ */ l.jsxs(Gt.List, { className: "max-h-64 overflow-y-auto p-1", children: [
        /* @__PURE__ */ l.jsx(Gt.Empty, { className: "py-6 text-center text-sm text-muted-foreground", children: t.emptyText }),
        t.items.map((n) => /* @__PURE__ */ l.jsxs(
          Gt.Item,
          {
            value: n.value,
            keywords: n.keywords,
            disabled: n.disabled,
            onSelect: () => e.emit("Selected", n.value),
            className: "flex cursor-default flex-col gap-0.5 rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            children: [
              /* @__PURE__ */ l.jsx("span", { children: n.label }),
              n.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: n.description })
            ]
          },
          n.value
        ))
      ] })
    ] })
  );
}
var eT = Object.defineProperty, bf = (e, t) => eT(e, "name", { value: t, configurable: !0 }), gc = !1;
function zw() {
  const [e, t] = d.useState(gc);
  return d.useEffect(() => {
    gc || (gc = !0, t(!0));
  }, []), e;
}
bf(zw, "useIsHydrated");
var Fw = Po[" useSyncExternalStore ".trim().toString()];
function Lw() {
  return () => {
  };
}
bf(Lw, "subscribe");
function Vw() {
  return Fw(
    Lw,
    () => !0,
    () => !1
  );
}
bf(Vw, "useIsHydratedModern");
var tT = typeof Fw == "function" ? Vw : zw, nT = Object.defineProperty, Nr = (e, t) => nT(e, "name", { value: t, configurable: !0 }), vc = "rovingFocusGroup.onEntryFocus", rT = { bubbles: !1, cancelable: !0 }, vl = "RovingFocusGroup", [Ou, Bw, oT] = /* @__PURE__ */ En(vl), [iT, ar] = /* @__PURE__ */ ke(
  vl,
  [oT]
), rh = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, aT = {
  RTL: "rtl"
}, [sT, lT] = iT(vl), xl = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Nr(function(t, n) {
    return /* @__PURE__ */ l.jsx(Ou.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(Ou.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(cT, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), cT = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ Nr(function(t, n) {
  const {
    __scopeRovingFocusGroup: r,
    orientation: o,
    loop: i = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: u,
    onEntryFocus: m,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = t, h = d.useRef(null), x = J(n, h), v = Jt(a), [b, g] = Ee({
    prop: s,
    defaultProp: c ?? null,
    onChange: u,
    caller: vl
  }), [y, w] = d.useState(!1), C = Ae(m), S = Bw(r), k = d.useRef(!1), [P, E] = d.useState(0);
  return d.useEffect(() => {
    const R = h.current;
    if (R)
      return R.addEventListener(vc, C), () => R.removeEventListener(vc, C);
  }, [C]), /* @__PURE__ */ l.jsx(
    sT,
    {
      scope: r,
      orientation: o,
      dir: v,
      loop: i,
      currentTabStopId: b,
      onItemFocus: d.useCallback(
        (R) => g(R),
        [g]
      ),
      onItemShiftTab: d.useCallback(() => w(!0), []),
      onFocusableItemAdd: d.useCallback(
        () => E((R) => R + 1),
        []
      ),
      onFocusableItemRemove: d.useCallback(
        () => E((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        B.div,
        {
          tabIndex: y || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: x,
          style: { outline: "none", ...t.style },
          onMouseDown: _(t.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: _(t.onFocus, (R) => {
            const T = !k.current;
            if (R.target === R.currentTarget && T && !y) {
              const O = new CustomEvent(vc, rT);
              if (R.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const M = S().filter((Y) => Y.focusable), W = M.find((Y) => Y.active), K = M.find((Y) => Y.id === b), q = [W, K, ...M].filter(
                  Boolean
                ).map((Y) => Y.ref.current);
                Cf(q, p);
              }
            }
            k.current = !1;
          }),
          onBlur: _(t.onBlur, () => w(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), uT = "RovingFocusGroupItem", wl = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Nr(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: i = !1,
      tabStopId: a,
      children: s,
      ...c
    } = t, u = pe(), m = a || u, p = lT(uT, r), f = p.currentTabStopId === m, h = Bw(r), { onFocusableItemAdd: x, onFocusableItemRemove: v, currentTabStopId: b } = p, g = tT();
    return Ne(() => {
      if (!(!g || !o))
        return x(), () => v();
    }, [g, o, x, v]), d.useEffect(() => {
      if (!(g || !o))
        return x(), () => v();
    }, [g, o, x, v]), /* @__PURE__ */ l.jsx(
      Ou.ItemSlot,
      {
        scope: r,
        id: m,
        focusable: o,
        active: i,
        children: /* @__PURE__ */ l.jsx(
          B.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...c,
            ref: n,
            onMouseDown: _(t.onMouseDown, (y) => {
              o ? p.onItemFocus(m) : y.preventDefault();
            }),
            onFocus: _(t.onFocus, () => p.onItemFocus(m)),
            onKeyDown: _(t.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = Uw(y, p.orientation, p.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let S = h().filter((k) => k.focusable).map((k) => k.ref.current);
                if (w === "last") S.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && S.reverse();
                  const k = S.indexOf(y.currentTarget);
                  S = p.loop ? Gw(S, k + 1) : S.slice(k + 1);
                }
                setTimeout(() => Cf(S));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: b != null }) : s
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), dT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Hw(e, t) {
  return t !== aT.RTL ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
Nr(Hw, "getDirectionAwareKey");
function Uw(e, t, n) {
  const r = Hw(e.key, n);
  if (!(t === rh.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === rh.Horizontal && ["ArrowUp", "ArrowDown"].includes(r)))
    return dT[r];
}
Nr(Uw, "getFocusIntent");
function Cf(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
Nr(Cf, "focusFirst");
function Gw(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
Nr(Gw, "wrapArray");
var fT = Object.defineProperty, fe = (e, t) => fT(e, "name", { value: t, configurable: !0 }), pT = ["Enter", " "], mT = ["ArrowDown", "PageUp", "Home"], Ww = ["ArrowUp", "PageDown", "End"], hT = [...mT, ...Ww], yl = "Menu", [$u, gT, vT] = /* @__PURE__ */ En(yl), [Tr, aa] = /* @__PURE__ */ ke(yl, [
  vT,
  tn,
  ar
]), Sf = tn(), Kw = ar(), [xT, sa] = Tr(yl), [wT, kf] = Tr(yl), Pf = /* @__PURE__ */ fe((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = Sf(t), [c, u] = d.useState(null), m = d.useRef(!1), p = Ae(i), f = Jt(o);
  return d.useEffect(() => {
    const h = /* @__PURE__ */ fe(() => {
      m.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, "handleKeyDown"), x = /* @__PURE__ */ fe(() => m.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), d.useEffect(() => {
    if (!n)
      return;
    const h = /* @__PURE__ */ fe(() => p(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, p]), /* @__PURE__ */ l.jsx(na, { ...s, children: /* @__PURE__ */ l.jsx(
    xT,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ l.jsx(
        wT,
        {
          scope: t,
          onClose: d.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: m,
          dir: f,
          modal: a,
          children: r
        }
      )
    }
  ) });
}, "Menu"), Ef = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeMenu: r, ...o } = t, i = Sf(r);
    return /* @__PURE__ */ l.jsx(ra, { ...i, ...o, ref: n });
  }, "MenuAnchor")
), Yw = "MenuPortal", [yT, bT] = Tr(Yw, {
  forceMount: void 0
}), jf = /* @__PURE__ */ fe((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = sa(Yw, t);
  return /* @__PURE__ */ l.jsx(yT, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(nt, { present: n || i.open, children: /* @__PURE__ */ l.jsx(_o, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), Yn = "MenuContent", [CT, Xw] = Tr(Yn), Nf = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ fe(function(t, n) {
    const r = bT(Yn, t.__scopeMenu), { forceMount: o = r.forceMount, ...i } = t, a = sa(Yn, t.__scopeMenu), s = kf(Yn, t.__scopeMenu);
    return /* @__PURE__ */ l.jsx($u.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ l.jsx(nt, { present: o || a.open, children: /* @__PURE__ */ l.jsx($u.Slot, { scope: t.__scopeMenu, children: s.modal ? /* @__PURE__ */ l.jsx(ST, { ...i, ref: n }) : /* @__PURE__ */ l.jsx(kT, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), ST = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const r = sa(Yn, t.__scopeMenu), o = d.useRef(null), i = J(n, o);
    return d.useEffect(() => {
      const a = o.current;
      if (a) return rl(a);
    }, []), /* @__PURE__ */ l.jsx(
      qw,
      {
        ...t,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: _(
          t.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), kT = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const r = sa(Yn, t.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    qw,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), PT = /* @__PURE__ */ qt("MenuContent.ScrollLock"), qw = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const {
      __scopeMenu: r,
      loop: o = !1,
      trapFocus: i,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: c,
      onEntryFocus: u,
      onEscapeKeyDown: m,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: x,
      disableOutsideScroll: v,
      ...b
    } = t, g = sa(Yn, r), y = kf(Yn, r), w = Sf(r), C = Kw(r), S = gT(r), [k, P] = d.useState(null), E = d.useRef(null), [R, T] = d.useState(null);
    tl(R);
    const { nodes: O, registry: M } = el(), W = !!(i || v), K = J(
      n,
      E,
      g.onContentChange,
      T
    ), te = d.useRef(0), q = d.useRef(""), Y = d.useRef(0), j = d.useRef(null), I = d.useRef("right"), F = d.useRef(0), ee = d.useMemo(
      () => v ? [E, ...O.map((D) => ({ current: D }))] : [],
      [E, O, v]
    ), N = v ? Xi : d.Fragment, H = v ? {
      as: PT,
      allowPinchZoom: !0,
      shards: ee
    } : void 0, X = /* @__PURE__ */ fe((D) => {
      var Le, ut;
      const Q = q.current + D, U = S().filter((Ve) => !Ve.disabled), Z = document.activeElement, he = (Le = U.find((Ve) => Ve.ref.current === Z)) == null ? void 0 : Le.textValue, ce = U.map((Ve) => Ve.textValue), ie = ty(ce, Q, he), ae = (ut = U.find((Ve) => Ve.textValue === ie)) == null ? void 0 : ut.ref.current;
      (/* @__PURE__ */ fe(function Ve(rn) {
        q.current = rn, window.clearTimeout(te.current), rn !== "" && (te.current = window.setTimeout(() => Ve(""), 1e3));
      }, "updateSearch"))(Q), ae && setTimeout(() => ae.focus());
    }, "handleTypeaheadSearch");
    d.useEffect(() => () => window.clearTimeout(te.current), []), Io();
    const L = d.useCallback((D) => {
      var U, Z;
      return I.current === ((U = j.current) == null ? void 0 : U.side) && ry(D, (Z = j.current) == null ? void 0 : Z.area);
    }, []);
    return /* @__PURE__ */ l.jsx(
      CT,
      {
        scope: r,
        searchRef: q,
        onItemEnter: d.useCallback(
          (D) => {
            L(D) && D.preventDefault();
          },
          [L]
        ),
        onItemLeave: d.useCallback(
          (D) => {
            var Q;
            L(D) || ((Q = E.current) == null || Q.focus(), P(null));
          },
          [L]
        ),
        onTriggerLeave: d.useCallback(
          (D) => {
            L(D) && D.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: Y,
        onPointerGraceIntentChange: d.useCallback((D) => {
          j.current = D;
        }, []),
        children: /* @__PURE__ */ l.jsx(Js, { registry: W ? M : null, children: /* @__PURE__ */ l.jsx(N, { ...H, children: /* @__PURE__ */ l.jsx(
          Zs,
          {
            asChild: !0,
            trapped: i,
            branches: O,
            onMountAutoFocus: _(a, (D) => {
              var Q;
              D.preventDefault(), (Q = E.current) == null || Q.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ l.jsx(
              Mo,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: m,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: x,
                children: /* @__PURE__ */ l.jsx(
                  xl,
                  {
                    asChild: !0,
                    ...C,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: k,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: _(u, (D) => {
                      y.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      oa,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Qw(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...b,
                        ref: K,
                        style: { outline: "none", ...b.style },
                        onKeyDown: _(b.onKeyDown, (D) => {
                          const U = D.target.closest("[data-radix-menu-content]") === D.currentTarget, Z = D.ctrlKey || D.altKey || D.metaKey, he = D.key.length === 1;
                          U && (D.key === "Tab" && D.preventDefault(), !Z && he && X(D.key));
                          const ce = E.current;
                          if (D.target !== ce || !hT.includes(D.key)) return;
                          D.preventDefault();
                          const ae = S().filter((Le) => !Le.disabled).map((Le) => Le.ref.current);
                          Ww.includes(D.key) && ae.reverse(), Jw(ae);
                        }),
                        onBlur: _(t.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(te.current), q.current = "");
                        }),
                        onPointerMove: _(
                          t.onPointerMove,
                          Ms((D) => {
                            const Q = D.target, U = F.current !== D.clientX;
                            if (D.currentTarget.contains(Q) && U) {
                              const Z = D.clientX > F.current ? "right" : "left";
                              I.current = Z, F.current = D.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) }) })
      }
    );
  }, "MenuContentImpl")
), Tf = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ l.jsx(B.div, { ...o, ref: n });
  }, "MenuLabel")
), zu = "MenuItem", oh = "menu.itemSelect", Rf = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...i } = t, a = d.useRef(null), s = kf(zu, t.__scopeMenu), c = Xw(zu, t.__scopeMenu), u = J(n, a), m = d.useRef(!1), p = /* @__PURE__ */ fe(() => {
      const f = a.current;
      if (!r && f) {
        const h = new CustomEvent(oh, { bubbles: !0, cancelable: !0 });
        f.addEventListener(oh, (x) => o == null ? void 0 : o(x), { once: !0 }), Ii(f, h), h.defaultPrevented ? m.current = !1 : s.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ l.jsx(
      ET,
      {
        ...i,
        ref: u,
        disabled: r,
        onClick: _(t.onClick, p),
        onPointerDown: (f) => {
          var h;
          (h = t.onPointerDown) == null || h.call(t, f), m.current = !0;
        },
        onPointerUp: _(t.onPointerUp, (f) => {
          var h;
          m.current || (h = f.currentTarget) == null || h.click();
        }),
        onKeyDown: _(t.onKeyDown, (f) => {
          r || f.target !== f.currentTarget || c.searchRef.current !== "" && f.key === " " || pT.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }, "MenuItem")
), ET = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: i, ...a } = t, s = Xw(zu, r), c = Kw(r), u = d.useRef(null), m = J(n, u), [p, f] = d.useState(!1), [h, x] = d.useState("");
    return d.useEffect(() => {
      const v = u.current;
      v && x((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ l.jsx(
      $u.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: i ?? h,
        children: /* @__PURE__ */ l.jsx(wl, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ l.jsx(
          B.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: m,
            onPointerMove: _(
              t.onPointerMove,
              Ms((v) => {
                o ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: _(
              t.onPointerLeave,
              Ms((v) => s.onItemLeave(v))
            ),
            onFocus: _(t.onFocus, () => f(!0)),
            onBlur: _(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), jT = "MenuRadioGroup", [$A, zA] = Tr(
  jT,
  { value: void 0, onValueChange: /* @__PURE__ */ fe(() => {
  }, "onValueChange") }
), NT = "MenuItemIndicator", [FA, LA] = Tr(
  NT,
  { checked: !1 }
), Mf = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ l.jsx(
      B.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), TT = "MenuSub", [VA, BA] = Tr(TT);
function Qw(e) {
  return e ? "open" : "closed";
}
fe(Qw, "getOpenState");
function Zw(e) {
  return e === "indeterminate";
}
fe(Zw, "isIndeterminate");
function RT(e) {
  return Zw(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
fe(RT, "getCheckedState");
function Jw(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
fe(Jw, "focusFirst");
function ey(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
fe(ey, "wrapArray");
function ty(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = ey(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
fe(ty, "getNextMatch");
function ny(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], c = t[a], u = s.x, m = s.y, p = c.x, f = c.y;
    m > r != f > r && n < (p - u) * (r - m) / (f - m) + u && (o = !o);
  }
  return o;
}
fe(ny, "isPointInPolygon");
function ry(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ny(n, t);
}
fe(ry, "isPointerInGraceArea");
function Ms(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
fe(Ms, "whenMouse");
var MT = Object.defineProperty, Xt = (e, t) => MT(e, "name", { value: t, configurable: !0 }), _f = "ContextMenu", [_T, HA] = /* @__PURE__ */ ke(_f, [
  aa
]), Rr = aa(), [IT, oy] = _T(_f), AT = /* @__PURE__ */ Xt((e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, dir: i, modal: a = !0 } = e, s = d.useRef(!1), [c, u] = Ee({
    prop: o,
    defaultProp: !1,
    onChange: r,
    caller: _f
  }), m = Rr(t);
  return /* @__PURE__ */ l.jsx(
    IT,
    {
      scope: t,
      open: c,
      onOpenChange: u,
      modal: a,
      hasInteractedRef: s,
      children: /* @__PURE__ */ l.jsx(Pf, { ...m, dir: i, open: c, onOpenChange: u, modal: a, children: n })
    }
  );
}, "ContextMenu"), DT = "ContextMenuTrigger", OT = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xt(function(t, n) {
    const { __scopeContextMenu: r, disabled: o = !1, ...i } = t, a = oy(DT, r), s = Rr(r), [c, u] = d.useState({ x: 0, y: 0 }), m = d.useMemo(
      () => ({
        current: {
          getBoundingClientRect: /* @__PURE__ */ Xt(() => DOMRect.fromRect({ width: 0, height: 0, ...c }), "getBoundingClientRect")
        }
      }),
      [c]
    ), p = d.useRef(0), f = d.useCallback(
      () => window.clearTimeout(p.current),
      []
    ), h = /* @__PURE__ */ Xt((x) => {
      a.hasInteractedRef.current = !0, u({ x: x.clientX, y: x.clientY }), a.onOpenChange(!0);
    }, "handleOpen");
    return d.useEffect(() => f, [f]), d.useEffect(() => void (o && f()), [o, f]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(Ef, { ...s, virtualRef: m }),
      /* @__PURE__ */ l.jsx(
        B.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": o ? "" : void 0,
          ...i,
          ref: n,
          style: { WebkitTouchCallout: "none", ...t.style },
          onContextMenu: o ? t.onContextMenu : _(t.onContextMenu, (x) => {
            f(), h(x), x.preventDefault();
          }),
          onPointerDown: o ? t.onPointerDown : _(
            t.onPointerDown,
            oi((x) => {
              f(), a.open && a.onOpenChange(!1), p.current = window.setTimeout(() => h(x), 700);
            })
          ),
          onPointerMove: o ? t.onPointerMove : _(t.onPointerMove, oi(f)),
          onPointerCancel: o ? t.onPointerCancel : _(t.onPointerCancel, oi(f)),
          onPointerUp: o ? t.onPointerUp : _(t.onPointerUp, oi(f))
        }
      )
    ] });
  }, "ContextMenuTrigger")
), $T = /* @__PURE__ */ Xt((e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Rr(t);
  return /* @__PURE__ */ l.jsx(jf, { ...r, ...n });
}, "ContextMenuPortal"), zT = "ContextMenuContent", FT = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xt(function(t, n) {
    const { __scopeContextMenu: r, ...o } = t, i = oy(zT, r), a = Rr(r), s = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Nf,
      {
        ...a,
        ...o,
        ref: n,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (c) => {
          var u;
          (u = t.onCloseAutoFocus) == null || u.call(t, c), !c.defaultPrevented && s.current && c.preventDefault(), s.current = !1;
        },
        onInteractOutside: (c) => {
          var u;
          (u = t.onInteractOutside) == null || u.call(t, c), !c.defaultPrevented && !i.modal && (s.current = !0);
        },
        style: {
          ...t.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "ContextMenuContent")
), LT = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xt(function(t, n) {
    const { __scopeContextMenu: r, ...o } = t, i = Rr(r);
    return /* @__PURE__ */ l.jsx(Tf, { ...i, ...o, ref: n });
  }, "ContextMenuLabel")
), VT = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Xt(function(t, n) {
    const { __scopeContextMenu: r, ...o } = t, i = Rr(r);
    return /* @__PURE__ */ l.jsx(Rf, { ...i, ...o, ref: n });
  }, "ContextMenuItem")
), BT = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ Xt(function(t, n) {
  const { __scopeContextMenu: r, ...o } = t, i = Rr(r);
  return /* @__PURE__ */ l.jsx(Mf, { ...i, ...o, ref: n });
}, "ContextMenuSeparator"));
function oi(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
Xt(oi, "whenTouchOrPen");
function HT({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsxs(AT, { open: t.open, onOpenChange: (r) => e.setValue(r), modal: !1, children: [
    /* @__PURE__ */ l.jsx(OT, { className: "block w-full rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring", children: oe(t.children) }),
    /* @__PURE__ */ l.jsx($T, { container: n ?? void 0, children: z(e, /* @__PURE__ */ l.jsx(FT, { className: "z-50 min-w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in", children: t.items.map((r, o) => r.type === "separator" ? /* @__PURE__ */ l.jsx(BT, { className: "my-1 h-px bg-border" }, `separator-${o}`) : r.type === "label" ? /* @__PURE__ */ l.jsx(LT, { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground", children: r.label }, `label-${o}`) : /* @__PURE__ */ l.jsxs(
      VT,
      {
        disabled: r.disabled,
        onSelect: () => e.emit("Selected", r.value ?? r.label),
        className: `flex cursor-default select-none items-center justify-between gap-4 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${r.destructive ? "text-destructive" : ""}`,
        children: [
          r.label,
          r.shortcut && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: r.shortcut })
        ]
      },
      r.value ?? r.label
    )) })) })
  ] });
}
function UT({ node: e }) {
  const t = e.props, [n, r] = d.useState(""), [o, i] = d.useState(null), [a, s] = d.useState(0), c = d.useMemo(() => {
    const h = t.rows.filter((x) => !n || Object.values(x).some((v) => String(v ?? "").toLowerCase().includes(n.toLowerCase())));
    return o ? [...h].sort((x, v) => {
      const b = x[o.key] ?? "", g = v[o.key] ?? "", y = typeof b == "number" && typeof g == "number" ? b - g : String(b).localeCompare(String(g));
      return o.direction === "asc" ? y : -y;
    }) : h;
  }, [t.rows, n, o]), u = Math.max(1, Math.floor(t.pageSize)), m = Math.max(1, Math.ceil(c.length / u)), p = c.slice(Math.min(a, m - 1) * u, (Math.min(a, m - 1) + 1) * u), f = (h) => {
    h.sortable && i((x) => (x == null ? void 0 : x.key) === h.key ? { key: h.key, direction: x.direction === "asc" ? "desc" : "asc" } : { key: h.key, direction: "asc" });
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: "grid gap-3", children: [
      t.searchable && /* @__PURE__ */ l.jsx("input", { "aria-label": "Filter rows", value: n, onChange: (h) => {
        r(h.currentTarget.value), s(0);
      }, placeholder: "Filter rows…", className: "h-9 w-full rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" }),
      /* @__PURE__ */ l.jsx("div", { className: "overflow-x-auto rounded-md border", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full text-sm", children: [
        t.caption && /* @__PURE__ */ l.jsx("caption", { className: "sr-only", children: t.caption }),
        /* @__PURE__ */ l.jsx("thead", { className: "bg-muted/50 text-left", children: /* @__PURE__ */ l.jsx("tr", { children: t.columns.map((h) => /* @__PURE__ */ l.jsx("th", { scope: "col", "aria-sort": (o == null ? void 0 : o.key) === h.key ? o.direction === "asc" ? "ascending" : "descending" : "none", className: "px-3 py-2 font-medium", children: h.sortable ? /* @__PURE__ */ l.jsxs("button", { type: "button", onClick: () => f(h), children: [
          h.label,
          (o == null ? void 0 : o.key) === h.key ? o.direction === "asc" ? " ↑" : " ↓" : ""
        ] }) : h.label }, h.key)) }) }),
        /* @__PURE__ */ l.jsxs("tbody", { children: [
          p.map((h, x) => /* @__PURE__ */ l.jsx("tr", { tabIndex: 0, onClick: () => e.emit("RowSelected", h), onKeyDown: (v) => {
            (v.key === "Enter" || v.key === " ") && (v.preventDefault(), e.emit("RowSelected", h));
          }, className: "border-t outline-none hover:bg-accent/50 focus-visible:bg-accent/50", children: t.columns.map((v) => /* @__PURE__ */ l.jsx("td", { className: "px-3 py-2", children: String(h[v.key] ?? "") }, v.key)) }, x)),
          p.length === 0 && /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: Math.max(1, t.columns.length), className: "px-3 py-8 text-center text-muted-foreground", children: "No results." }) })
        ] })
      ] }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          c.length,
          " ",
          c.length === 1 ? "row" : "rows"
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l.jsx("button", { type: "button", disabled: a <= 0, onClick: () => s((h) => Math.max(0, h - 1)), className: "rounded border px-2 py-1 disabled:opacity-40", children: "Previous" }),
          /* @__PURE__ */ l.jsxs("span", { children: [
            "Page ",
            Math.min(a + 1, m),
            " of ",
            m
          ] }),
          /* @__PURE__ */ l.jsx("button", { type: "button", disabled: a >= m - 1, onClick: () => s((h) => Math.min(m - 1, h + 1)), className: "rounded border px-2 py-1 disabled:opacity-40", children: "Next" })
        ] })
      ] })
    ] })
  );
}
const GT = (e) => {
  if (!e) return "";
  const t = /* @__PURE__ */ new Date(`${e}T12:00:00`);
  return Number.isNaN(t.getTime()) ? "" : new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(t);
};
function WT({ node: e }) {
  const t = e.props, n = d.useId(), r = wt(), [o, i] = d.useState(!1);
  return z(
    e,
    /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, children: /* @__PURE__ */ l.jsxs(hf, { open: o, onOpenChange: i, children: [
      /* @__PURE__ */ l.jsxs(
        gf,
        {
          id: n,
          type: "button",
          disabled: t.disabled,
          "aria-required": t.required || void 0,
          className: "flex h-[var(--sen-control-h)] w-full items-center justify-between rounded-md border border-input bg-background px-3 text-left text-[length:var(--sen-control-fs)] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
          children: [
            /* @__PURE__ */ l.jsx("span", { className: t.value ? "" : "text-muted-foreground", children: GT(t.value) || t.placeholder }),
            /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "text-muted-foreground", children: "▦" })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(vf, { container: r ?? void 0, children: /* @__PURE__ */ l.jsx(xf, { align: "start", sideOffset: 4, className: "z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in", children: /* @__PURE__ */ l.jsx(
        ow,
        {
          value: t.value,
          month: t.value.slice(0, 7),
          minDate: t.minDate,
          maxDate: t.maxDate,
          weekStartsOn: t.weekStartsOn,
          onSelect: (a) => {
            e.setValue(a), i(!1);
          }
        }
      ) }) })
    ] }) })
  );
}
function KT({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsx(qi, { open: t.open, onOpenChange: (r) => e.setValue(r), children: /* @__PURE__ */ l.jsxs(Qi, { container: n ?? void 0, children: [
    /* @__PURE__ */ l.jsx(Zi, { className: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-sen-overlay-in" }),
    z(
      e,
      /* @__PURE__ */ l.jsxs(Ji, { className: "fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 text-foreground shadow-lg outline-none data-[state=open]:animate-sen-content-in", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ l.jsx(ol, { className: "text-lg font-semibold leading-none tracking-tight", children: t.title }),
          t.description ? /* @__PURE__ */ l.jsx(il, { className: "text-sm text-muted-foreground", children: t.description }) : null
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "grid gap-4", children: oe(t.content) }),
        /* @__PURE__ */ l.jsxs(ea, { className: "absolute right-4 top-4 rounded-sm text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: [
          /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "×" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: t.closeText })
        ] })
      ] })
    )
  ] }) });
}
function YT({ node: e }) {
  return z(e, /* @__PURE__ */ l.jsx("div", { dir: e.props.dir, children: oe(e.props.children) }));
}
const XT = {
  circle: "M50 4a46 46 0 1 0 0 92a46 46 0 1 0 0-92",
  square: "M23 5h54a18 18 0 0 1 18 18v54a18 18 0 0 1-18 18H23A18 18 0 0 1 5 77V23A18 18 0 0 1 23 5",
  diamond: "M50 3 97 50 50 97 3 50Z",
  triangle: "M50 5 97 91H3Z",
  flower: "M50 6C62 6 68 16 68 32C84 16 96 22 96 34C96 46 84 50 68 50C84 50 96 54 96 66C96 78 84 84 68 68C68 84 62 94 50 94C38 94 32 84 32 68C16 84 4 78 4 66C4 54 16 50 32 50C16 50 4 46 4 34C4 22 16 16 32 32C32 16 38 6 50 6Z",
  teardrop: "M50 3C39 22 8 51 8 69a42 42 0 1 0 84 0C92 51 61 22 50 3Z"
};
function qT({ node: e }) {
  const t = e.props, [n, r] = d.useState({ x: 0, y: 0 }), o = Math.max(16, Math.min(256, t.size)), i = (a) => {
    if (!t.followCursor) return;
    const s = a.currentTarget.getBoundingClientRect();
    r({
      x: Math.max(-4, Math.min(4, ((a.clientX - s.left) / s.width - 0.5) * 8)),
      y: Math.max(-4, Math.min(4, ((a.clientY - s.top) / s.height - 0.5) * 8))
    });
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "svg",
      {
        viewBox: "0 0 100 100",
        width: o,
        height: o,
        role: "img",
        "aria-label": t.label,
        onPointerMove: i,
        onPointerLeave: () => r({ x: 0, y: 0 }),
        className: "overflow-visible",
        style: { color: t.color },
        children: [
          /* @__PURE__ */ l.jsx("path", { d: XT[t.shape], fill: "currentColor" }),
          /* @__PURE__ */ l.jsx("g", { className: "origin-center animate-sen-dot-blink motion-reduce:animate-none", children: [34, 66].map((a) => /* @__PURE__ */ l.jsxs("g", { transform: `translate(${n.x} ${n.y})`, children: [
            /* @__PURE__ */ l.jsx("circle", { cx: a, cy: "48", r: "11", fill: "rgb(var(--background))" }),
            /* @__PURE__ */ l.jsx("circle", { cx: a, cy: "48", r: "5", fill: "rgb(var(--foreground))" })
          ] }, a)) })
        ]
      }
    )
  );
}
function QT({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsx(qi, { open: t.open, onOpenChange: (r) => e.setValue(r), children: /* @__PURE__ */ l.jsxs(Qi, { container: n ?? void 0, children: [
    /* @__PURE__ */ l.jsx(Zi, { className: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-sen-overlay-in" }),
    z(e, /* @__PURE__ */ l.jsxs(Ji, { className: "fixed inset-x-0 bottom-0 z-50 mx-auto grid max-h-[90vh] w-full max-w-xl gap-4 overflow-y-auto rounded-t-xl border bg-background p-6 text-foreground shadow-lg outline-none data-[state=open]:animate-sen-surface-in", children: [
      /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", className: "mx-auto h-1.5 w-12 rounded-full bg-muted" }),
      /* @__PURE__ */ l.jsxs("header", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ l.jsx(ol, { className: "text-lg font-semibold", children: t.title }),
        t.description && /* @__PURE__ */ l.jsx(il, { className: "text-sm text-muted-foreground", children: t.description })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "grid gap-4", children: oe(t.content) }),
      /* @__PURE__ */ l.jsx(ea, { "aria-label": t.closeText, className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground", children: "×" })
    ] }))
  ] }) });
}
var ZT = Object.defineProperty, Mr = (e, t) => ZT(e, "name", { value: t, configurable: !0 }), If = "DropdownMenu", [JT, UA] = /* @__PURE__ */ ke(
  If,
  [aa]
), _r = aa(), [eR, iy] = JT(If), tR = /* @__PURE__ */ Mr((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = _r(t), u = d.useRef(null), [m, p] = Ee({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: If
  });
  return /* @__PURE__ */ l.jsx(
    eR,
    {
      scope: t,
      triggerId: pe(),
      triggerRef: u,
      contentId: pe(),
      open: m,
      onOpenChange: p,
      onOpenToggle: d.useCallback(() => p((f) => !f), [p]),
      modal: s,
      children: /* @__PURE__ */ l.jsx(Pf, { ...c, open: m, onOpenChange: p, dir: r, modal: s, children: n })
    }
  );
}, "DropdownMenu"), nR = "DropdownMenuTrigger", rR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Mr(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...i } = t, a = iy(nR, r), s = _r(r), c = J(n, a.triggerRef);
    return /* @__PURE__ */ l.jsx(Ef, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...i,
        ref: c,
        onPointerDown: _(t.onPointerDown, (u) => {
          !o && u.button === 0 && u.ctrlKey === !1 && (a.onOpenToggle(), a.open || u.preventDefault());
        }),
        onKeyDown: _(t.onKeyDown, (u) => {
          o || (["Enter", " "].includes(u.key) && a.onOpenToggle(), u.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), oR = /* @__PURE__ */ Mr((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = _r(t);
  return /* @__PURE__ */ l.jsx(jf, { ...r, ...n });
}, "DropdownMenuPortal"), iR = "DropdownMenuContent", aR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Mr(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = iy(iR, r), a = _r(r), s = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Nf,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...a,
        ...o,
        ref: n,
        onCloseAutoFocus: _(t.onCloseAutoFocus, (c) => {
          var u;
          s.current || (u = i.triggerRef.current) == null || u.focus(), s.current = !1, c.preventDefault();
        }),
        onInteractOutside: _(t.onInteractOutside, (c) => {
          const u = c.detail.originalEvent, m = u.button === 0 && u.ctrlKey === !0, p = u.button === 2 || m;
          (!i.modal || p) && (s.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), sR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Mr(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = _r(r);
    return /* @__PURE__ */ l.jsx(Tf, { ...i, ...o, ref: n });
  }, "DropdownMenuLabel")
), lR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Mr(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, i = _r(r);
    return /* @__PURE__ */ l.jsx(Rf, { ...i, ...o, ref: n });
  }, "DropdownMenuItem")
), cR = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ Mr(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, i = _r(r);
  return /* @__PURE__ */ l.jsx(Mf, { ...i, ...o, ref: n });
}, "DropdownMenuSeparator"));
function uR({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsxs(tR, { open: t.open, onOpenChange: (r) => e.setValue(r), children: [
    /* @__PURE__ */ l.jsx(rR, { className: "inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium shadow-sm hover:bg-accent", children: t.trigger }),
    /* @__PURE__ */ l.jsx(oR, { container: n ?? void 0, children: z(e, /* @__PURE__ */ l.jsx(aR, { side: t.side, sideOffset: 4, className: "z-50 min-w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in", children: t.items.map((r, o) => r.type === "separator" ? /* @__PURE__ */ l.jsx(cR, { className: "my-1 h-px bg-border" }, `separator-${o}`) : r.type === "label" ? /* @__PURE__ */ l.jsx(sR, { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground", children: r.label }, `label-${o}`) : /* @__PURE__ */ l.jsxs(
      lR,
      {
        disabled: r.disabled,
        onSelect: () => e.emit("Selected", r.value ?? r.label),
        className: `flex cursor-default select-none items-center justify-between gap-4 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${r.destructive ? "text-destructive" : ""}`,
        children: [
          r.label,
          r.shortcut && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: r.shortcut })
        ]
      },
      r.value ?? r.label
    )) })) })
  ] });
}
function dR({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("section", { className: "flex min-h-48 w-full flex-col items-center justify-center rounded-lg border border-dashed bg-card p-8 text-center", children: [
      t.icon ? /* @__PURE__ */ l.jsx("div", { className: "mb-3 text-muted-foreground", children: yn(t.icon) }) : null,
      /* @__PURE__ */ l.jsx("h3", { className: "text-base font-medium", children: t.title }),
      t.description ? /* @__PURE__ */ l.jsx("p", { className: "mt-1 max-w-sm text-sm text-muted-foreground", children: t.description }) : null,
      t.children.length ? /* @__PURE__ */ l.jsx("div", { className: "mt-4 flex flex-col items-center gap-2", children: oe(t.children) }) : null,
      t.action ? /* @__PURE__ */ l.jsx("div", { className: "mt-4", children: yn(t.action) }) : null
    ] })
  );
}
function fR(e, t) {
  return t.trim() ? t.split(",").map((r) => r.trim().toLowerCase()).filter(Boolean).some((r) => r.startsWith(".") ? e.name.toLowerCase().endsWith(r) : r.endsWith("/*") ? e.type.toLowerCase().startsWith(r.slice(0, -1)) : e.type.toLowerCase() === r) : !0;
}
function pR(e) {
  return { name: e.name, size: e.size, type: e.type, lastModified: e.lastModified };
}
function mR({ node: e }) {
  const t = e.props, n = d.useId(), r = d.useRef(null), [o, i] = d.useState([]), [a, s] = d.useState(!1), c = (u) => {
    const m = [], p = Math.max(1, Math.floor(t.maxFiles || 1)), f = Array.from(u).slice(0, t.multiple ? p : 1);
    if (u.length > f.length)
      for (const h of Array.from(u).slice(f.length)) e.emit("Rejected", h.name, `Only ${p} file${p === 1 ? "" : "s"} may be uploaded.`);
    for (const h of f)
      fR(h, t.accept) ? t.maxSize > 0 && h.size > t.maxSize ? e.emit("Rejected", h.name, `File exceeds the ${t.maxSize}-byte size limit.`) : m.push(h) : e.emit("Rejected", h.name, "This file type is not accepted.");
    m.length && (i(m.map(pR)), e.emit("Selected", m));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs(yt, { label: t.label, description: t.description, htmlFor: n, children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          ref: r,
          id: n,
          type: "file",
          className: "sr-only",
          accept: t.accept || void 0,
          multiple: t.multiple,
          disabled: t.disabled,
          onChange: (u) => {
            u.currentTarget.files && c(u.currentTarget.files), u.currentTarget.value = "";
          }
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "button",
        {
          type: "button",
          disabled: t.disabled,
          onClick: () => {
            var u;
            return (u = r.current) == null ? void 0 : u.click();
          },
          onDragEnter: (u) => {
            u.preventDefault(), s(!0);
          },
          onDragOver: (u) => {
            u.preventDefault(), s(!0);
          },
          onDragLeave: (u) => {
            const m = u.relatedTarget;
            (!(m instanceof Node) || !u.currentTarget.contains(m)) && s(!1);
          },
          onDrop: (u) => {
            u.preventDefault(), s(!1), c(u.dataTransfer.files);
          },
          className: `grid min-h-32 w-full place-content-center justify-items-center gap-2 rounded-md border border-dashed px-4 py-6 text-center transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${a ? "border-primary bg-accent" : "border-input hover:bg-accent/50"}`,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium", children: a ? "Drop files to upload" : "Choose files or drag them here" }),
            /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: t.accept ? `Accepted: ${t.accept}` : "All file types accepted" })
          ]
        }
      ),
      o.length > 0 && /* @__PURE__ */ l.jsx("ul", { className: "grid gap-1 text-sm", "aria-live": "polite", children: o.map((u) => /* @__PURE__ */ l.jsxs("li", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ l.jsx("span", { className: "truncate", children: u.name }),
        /* @__PURE__ */ l.jsx("span", { className: "shrink-0 text-xs text-muted-foreground", children: hR(u.size) })
      ] }, `${u.name}-${u.lastModified}`)) })
    ] })
  );
}
function hR(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function gR({ node: e }) {
  const t = e.props;
  return z(e, /* @__PURE__ */ l.jsx(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${Math.max(1, Math.floor(t.columns))}, minmax(0, 1fr))`,
        gap: yo(t.gap),
        padding: yo(t.padding),
        minWidth: 0
      },
      children: oe(t.children)
    }
  ));
}
var vR = Object.defineProperty, kn = (e, t) => vR(e, "name", { value: t, configurable: !0 }), xc, Af = "HoverCard", [ay, GA] = /* @__PURE__ */ ke(Af, [
  tn
]), Df = tn(), [xR, bl] = ay(Af), wR = /* @__PURE__ */ kn((e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    openDelay: a = 700,
    closeDelay: s = 300
  } = e, c = Df(t), u = d.useRef(0), m = d.useRef(0), p = d.useRef(!1), f = d.useRef(!1), [h, x] = Ee({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Af
  }), v = d.useCallback(() => {
    clearTimeout(m.current), u.current = window.setTimeout(() => x(!0), a);
  }, [a, x]), b = d.useCallback(() => {
    clearTimeout(u.current), !p.current && !f.current && (m.current = window.setTimeout(() => x(!1), s));
  }, [s, x]), g = d.useCallback(() => x(!1), [x]);
  return d.useEffect(() => () => {
    clearTimeout(u.current), clearTimeout(m.current);
  }, []), /* @__PURE__ */ l.jsx(
    xR,
    {
      scope: t,
      open: h,
      onOpenChange: x,
      onOpen: v,
      onClose: b,
      onDismiss: g,
      hasSelectionRef: p,
      isPointerDownOnContentRef: f,
      children: /* @__PURE__ */ l.jsx(na, { ...c, children: n })
    }
  );
}, "HoverCard"), yR = "HoverCardTrigger", bR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ kn(function(t, n) {
    const { __scopeHoverCard: r, ...o } = t, i = bl(yR, r), a = Df(r);
    return /* @__PURE__ */ l.jsx(ra, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      B.a,
      {
        "data-state": i.open ? "open" : "closed",
        ...o,
        ref: n,
        onPointerEnter: _(t.onPointerEnter, zi(i.onOpen)),
        onPointerLeave: _(t.onPointerLeave, zi(i.onClose)),
        onFocus: _(t.onFocus, i.onOpen),
        onBlur: _(t.onBlur, i.onClose),
        onTouchStart: _(t.onTouchStart, (s) => s.preventDefault())
      }
    ) });
  }, "HoverCardTrigger")
), sy = "HoverCardPortal", [CR, SR] = ay(sy, {
  forceMount: void 0
}), kR = /* @__PURE__ */ kn((e) => {
  const { __scopeHoverCard: t, forceMount: n, children: r, container: o } = e, i = bl(sy, t);
  return /* @__PURE__ */ l.jsx(CR, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(nt, { present: n || i.open, children: /* @__PURE__ */ l.jsx(_o, { asChild: !0, container: o, children: r }) }) });
}, "HoverCardPortal"), Fu = "HoverCardContent", PR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ kn(function(t, n) {
    const r = SR(Fu, t.__scopeHoverCard), { forceMount: o = r.forceMount, ...i } = t, a = bl(Fu, t.__scopeHoverCard);
    return /* @__PURE__ */ l.jsx(nt, { present: o || a.open, children: /* @__PURE__ */ l.jsx(
      ER,
      {
        "data-state": a.open ? "open" : "closed",
        ...i,
        onPointerEnter: _(t.onPointerEnter, zi(a.onOpen)),
        onPointerLeave: _(t.onPointerLeave, zi(a.onClose)),
        ref: n
      }
    ) });
  }, "HoverCardContent")
), ER = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ kn(function(t, n) {
  const {
    __scopeHoverCard: r,
    onEscapeKeyDown: o,
    onPointerDownOutside: i,
    onFocusOutside: a,
    onInteractOutside: s,
    ...c
  } = t, u = bl(Fu, r), m = Df(r), p = d.useRef(null), [f, h] = d.useState(null), x = J(n, p, h);
  tl(f);
  const [v, b] = d.useState(!1);
  return d.useEffect(() => {
    if (v) {
      const g = document.body;
      return xc = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", () => {
        g.style.userSelect = xc, g.style.webkitUserSelect = xc;
      };
    }
  }, [v]), d.useEffect(() => {
    if (p.current) {
      const g = /* @__PURE__ */ kn(() => {
        b(!1), u.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var w;
          ((w = document.getSelection()) == null ? void 0 : w.toString()) !== "" && (u.hasSelectionRef.current = !0);
        });
      }, "handlePointerUp");
      return document.addEventListener("pointerup", g), () => {
        document.removeEventListener("pointerup", g), u.hasSelectionRef.current = !1, u.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [u.isPointerDownOnContentRef, u.hasSelectionRef]), d.useEffect(() => {
    p.current && ly(p.current).forEach((y) => y.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ l.jsx(
    Mo,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: s,
      onEscapeKeyDown: o,
      onPointerDownOutside: i,
      onFocusOutside: _(a, (g) => {
        g.preventDefault();
      }),
      onDismiss: u.onDismiss,
      children: /* @__PURE__ */ l.jsx(
        oa,
        {
          ...m,
          ...c,
          onPointerDown: _(c.onPointerDown, (g) => {
            g.currentTarget.contains(g.target) && b(!0), u.hasSelectionRef.current = !1, u.isPointerDownOnContentRef.current = !0;
          }),
          ref: x,
          style: {
            ...c.style,
            userSelect: v ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: v ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}, "HoverCardContentImpl"));
function zi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
kn(zi, "excludeTouch");
function ly(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ kn((r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
kn(ly, "getTabbableNodes");
function jR({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsxs(
    wR,
    {
      open: t.open,
      onOpenChange: (r) => e.setValue(r),
      openDelay: Math.max(0, t.openDelay),
      closeDelay: Math.max(0, t.closeDelay),
      children: [
        /* @__PURE__ */ l.jsx(bR, { className: "text-sm underline underline-offset-4 decoration-muted-foreground", children: t.trigger }),
        /* @__PURE__ */ l.jsx(kR, { container: n ?? void 0, children: z(e, /* @__PURE__ */ l.jsx(PR, { side: t.side, sideOffset: 6, className: "z-50 w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in", children: oe(t.content) })) })
      ]
    }
  );
}
function NR({ node: e }) {
  const t = e.props, n = d.useId();
  return /* @__PURE__ */ l.jsx(
    yt,
    {
      label: t.label,
      description: t.description,
      htmlFor: n,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsx(
        sl,
        {
          id: n,
          type: t.type,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          style: t.size === "inherit" ? void 0 : ll(t.size),
          onChange: (r) => e.setValue(r.target.value),
          onKeyDown: (r) => {
            r.key === "Enter" && e.emit("Submitted", e.props.value);
          },
          onFocus: () => e.emit("Focused", !0),
          onBlur: () => e.emit("Focused", !1)
        }
      )
    }
  );
}
function TR({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: "flex min-w-0 items-stretch [&>input]:min-w-0 [&>input]:flex-1 [&>input]:rounded-none [&>input]:shadow-none [&>input:first-child]:rounded-l-md [&>input:last-child]:rounded-r-md", children: [
      t.prefix && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground", children: t.prefix }),
      oe(t.children),
      t.suffix && /* @__PURE__ */ l.jsx("span", { className: "inline-flex items-center rounded-r-md border border-l-0 bg-muted px-3 text-sm text-muted-foreground", children: t.suffix })
    ] })
  );
}
function ih(e, t) {
  return t === "numeric" ? /\d/.test(e) : t === "alphanumeric" ? /[a-z\d]/i.test(e) : e.length > 0;
}
function ah(e, t, n) {
  if (!t) return e;
  let r = 0, o = "";
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (a === "#") {
      for (; r < e.length && !ih(e[r], n); ) r++;
      if (r >= e.length) break;
      o += e[r++];
      continue;
    }
    const s = [...e.slice(r)].some((c) => ih(c, n));
    (e[r] === a || s) && (e[r] === a && r++, o += a);
  }
  return o;
}
function RR({ node: e }) {
  const t = e.props, n = d.useId();
  return /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, className: t.className, style: t.style, attributes: t.attributes, animation: t.animation, children: /* @__PURE__ */ l.jsx(
    sl,
    {
      id: n,
      value: t.mask ? ah(t.value, t.mask, t.kind) : t.value,
      placeholder: t.placeholder || t.mask,
      disabled: t.disabled,
      required: t.required,
      inputMode: t.kind === "numeric" ? "numeric" : "text",
      maxLength: t.mask ? t.mask.length : void 0,
      onChange: (r) => e.setValue(ah(r.currentTarget.value, t.mask, t.kind)),
      onKeyDown: (r) => {
        r.key === "Enter" && e.emit("Submitted", t.value);
      }
    }
  ) });
}
function MR({ node: e }) {
  const t = e.props, n = d.useRef(null), r = Math.max(1, Math.min(12, Math.floor(t.length))), o = Math.max(1, Math.floor(t.groupSize)), [i, a] = d.useState(!1), [s, c] = d.useState(Math.min(t.value.length, r - 1)), u = (p) => (t.numeric ? p.replace(/\D/g, "") : p.replace(/[^a-z\d]/gi, "")).slice(0, r), m = () => {
    var f;
    const p = ((f = n.current) == null ? void 0 : f.selectionStart) ?? t.value.length;
    c(Math.min(p, r - 1));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        role: "group",
        "aria-label": t.label,
        "data-invalid": t.invalid || void 0,
        className: `inline-flex items-center gap-2 ${t.invalid ? "text-destructive" : ""}`,
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "relative isolate inline-flex items-center gap-2", children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: n,
                type: "text",
                value: t.value,
                maxLength: r,
                autoComplete: "one-time-code",
                autoFocus: t.autoFocus,
                inputMode: t.numeric ? "numeric" : "text",
                pattern: t.numeric ? "[0-9]*" : void 0,
                "aria-label": t.label,
                "aria-invalid": t.invalid || void 0,
                disabled: t.disabled,
                onChange: (p) => {
                  const f = u(p.currentTarget.value);
                  e.setValue(f), c(Math.min(p.currentTarget.selectionStart ?? f.length, r - 1)), f.length === r && f !== t.value && e.emit("Completed", f);
                },
                onFocus: () => {
                  a(!0), m();
                },
                onBlur: () => a(!1),
                onClick: m,
                onKeyUp: m,
                className: "absolute inset-0 z-10 h-full w-full cursor-text rounded-md opacity-0 disabled:cursor-not-allowed"
              }
            ),
            /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", className: "pointer-events-none relative z-0 flex items-center gap-2", children: Array.from({ length: r }, (p, f) => /* @__PURE__ */ l.jsxs(
              "span",
              {
                className: `relative grid size-10 place-items-center rounded-md border bg-background font-mono text-lg text-foreground shadow-sm transition-colors ${i && s === f ? "border-ring ring-2 ring-ring ring-offset-2 ring-offset-background" : t.invalid ? "border-destructive/70" : "border-input"}`,
                children: [
                  t.value[f] ?? "",
                  i && s === f && !t.disabled && /* @__PURE__ */ l.jsx("span", { className: "absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 animate-pulse bg-foreground" })
                ]
              },
              f
            )).flatMap((p, f) => {
              const h = f < r - 1 && (f + 1) % o === 0 ? [/* @__PURE__ */ l.jsx("span", { className: "text-muted-foreground", children: "–" }, `separator-${f}`)] : [];
              return [p, ...h];
            }) })
          ] }),
          t.invalid && /* @__PURE__ */ l.jsxs("span", { className: "sr-only", role: "alert", children: [
            "Invalid ",
            t.label.toLowerCase(),
            "."
          ] })
        ]
      }
    )
  );
}
function _R({ node: e }) {
  const t = e.props, n = t.variant === "outline" ? "border bg-card" : t.variant === "muted" ? "bg-muted/60" : "";
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: `flex min-w-0 items-center gap-3 rounded-md px-3 py-2.5 ${n}`, children: [
      t.media && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "grid size-8 shrink-0 place-items-center rounded-md bg-muted text-xs font-medium", children: t.media }),
      /* @__PURE__ */ l.jsxs("div", { className: "min-w-0 flex-1", children: [
        t.title && /* @__PURE__ */ l.jsx("p", { className: "truncate text-sm font-medium", children: t.title }),
        t.description && /* @__PURE__ */ l.jsx("p", { className: "truncate text-xs text-muted-foreground", children: t.description })
      ] }),
      t.children.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex shrink-0 items-center gap-2", children: oe(t.children) })
    ] })
  );
}
function IR({ node: e }) {
  const t = e.props.keys.length ? e.props.keys : e.props.value.split("+").filter(Boolean);
  return z(
    e,
    /* @__PURE__ */ l.jsx("kbd", { className: "inline-flex items-center gap-1 font-mono text-xs text-muted-foreground", children: t.map((n, r) => /* @__PURE__ */ l.jsx("span", { className: "rounded border bg-muted px-1.5 py-0.5 shadow-sm", children: n.trim() }, `${n}-${r}`)) })
  );
}
function cy(e) {
  return e === " " ? "Space" : e.length === 1 ? e.toUpperCase() : e.toLowerCase() === "esc" ? "Escape" : e;
}
function sh(e) {
  return ["Control", "Alt", "Shift", "Meta"].includes(e.key) ? null : [
    e.ctrlKey && "Ctrl",
    e.altKey && "Alt",
    e.shiftKey && "Shift",
    e.metaKey && "Meta",
    cy(e.key)
  ].filter(Boolean).join("+");
}
function lh(e) {
  const t = e.split("+").map((a) => a.trim()), n = (a) => {
    if (/^(ctrl|control)$/i.test(a)) return "Ctrl";
    if (/^alt$/i.test(a)) return "Alt";
    if (/^shift$/i.test(a)) return "Shift";
    if (/^(meta|cmd|command)$/i.test(a)) return "Meta";
  }, r = new Set(t.map(n).filter((a) => a !== void 0)), o = t.map((a) => n(a) ? "" : a).filter(Boolean), i = o[o.length - 1];
  return [...["Ctrl", "Alt", "Shift", "Meta"].filter((a) => r.has(a)), ...i ? [cy(i)] : []].join("+");
}
function AR(e) {
  return e.composedPath().some(
    (t) => t instanceof HTMLElement && (t.isContentEditable || !!t.closest("input, textarea, select, [contenteditable='true']"))
  );
}
function DR({ node: e }) {
  const t = e.props, [n, r] = d.useState(!1);
  return d.useEffect(() => {
    if (t.disabled) {
      r(!1);
      return;
    }
    const o = (i) => {
      if (n) {
        if (i.key === "Escape") {
          i.preventDefault(), r(!1);
          return;
        }
        const a = sh(i);
        if (!a) return;
        i.preventDefault(), i.stopPropagation(), e.setValue(a), r(!1);
        return;
      }
      i.repeat || AR(i) || !t.value || lh(sh(i) ?? "") === lh(t.value) && (t.preventDefault && i.preventDefault(), e.emit("Pressed"));
    };
    return window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o);
  }, [n, e, t.disabled, t.preventDefault, t.value]), /* @__PURE__ */ l.jsx(
    yt,
    {
      label: t.label,
      description: t.description,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsx(
        bo,
        {
          variant: "outline",
          disabled: t.disabled,
          "aria-label": t.label ? `${t.label} keyboard shortcut` : "Keyboard shortcut",
          "aria-pressed": n,
          onClick: () => r(!0),
          children: n ? "Press a key..." : t.value || "Set shortcut"
        }
      )
    }
  );
}
function OR({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("label", { htmlFor: t.htmlFor || void 0, className: "text-sm font-medium leading-none", children: [
      t.text,
      t.required && /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "ml-1 text-destructive", children: "*" })
    ] })
  );
}
const $R = {
  default: "border-border text-muted-foreground",
  info: "border-blue-500/30 text-blue-600 dark:text-blue-400",
  success: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
  warning: "border-amber-500/30 text-amber-600 dark:text-amber-400",
  destructive: "border-destructive/30 text-destructive"
};
function zR({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: `flex items-center gap-3 text-xs ${t.align === "center" ? "justify-center" : t.align === "right" ? "justify-end" : ""}`, children: [
      /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "h-px flex-1 border-t" }),
      /* @__PURE__ */ l.jsx("span", { className: `shrink-0 rounded-full border px-2 py-0.5 ${$R[t.variant]}`, children: t.text }),
      /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "h-px flex-1 border-t" })
    ] })
  );
}
function FR({ node: e }) {
  const t = e.props, n = Math.max(5, t.duration), r = `calc(var(--sen-space) * ${Math.max(0, t.gap)})`;
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        role: "region",
        "aria-label": t.label,
        className: `sen-marquee relative overflow-hidden ${t.pauseOnHover ? "sen-marquee-pause" : ""}`,
        style: { "--sen-marquee-duration": `${n}s` },
        children: [
          /* @__PURE__ */ l.jsx("div", { "aria-hidden": "true", children: /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "flex w-max animate-sen-marquee motion-reduce:animate-none",
              style: { gap: r, animationDuration: `${n}s`, animationDirection: t.direction === "right" ? "reverse" : "normal" },
              children: [0, 1].map((o) => /* @__PURE__ */ l.jsx("div", { className: "flex shrink-0 items-center", style: { gap: r }, children: oe(t.children) }, o))
            }
          ) }),
          /* @__PURE__ */ l.jsx("div", { className: "sr-only", children: oe(t.children) })
        ]
      }
    )
  );
}
var LR = Object.defineProperty, Rn = (e, t) => LR(e, "name", { value: t, configurable: !0 }), VR = {
  RTL: "rtl"
}, Cl = "Menubar", [Lu, BR, HR] = /* @__PURE__ */ En(Cl), [uy, WA] = /* @__PURE__ */ ke(Cl, [
  HR,
  ar
]), Ir = aa(), dy = ar(), [UR, Of] = uy(Cl), GR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Rn(function(t, n) {
    const {
      __scopeMenubar: r,
      value: o,
      onValueChange: i,
      defaultValue: a,
      loop: s = !0,
      dir: c,
      ...u
    } = t, m = Jt(c), p = dy(r), [f, h] = Ee({
      prop: o,
      onChange: i,
      defaultProp: a ?? "",
      caller: Cl
    }), [x, v] = d.useState(null);
    return /* @__PURE__ */ l.jsx(
      UR,
      {
        scope: r,
        value: f,
        onMenuOpen: d.useCallback(
          (b) => {
            h(b), v(b);
          },
          [h]
        ),
        onMenuClose: d.useCallback(() => h(""), [h]),
        onMenuToggle: d.useCallback(
          (b) => {
            h((g) => g ? "" : b), v(b);
          },
          [h]
        ),
        dir: m,
        loop: s,
        children: /* @__PURE__ */ l.jsx(Lu.Provider, { scope: r, children: /* @__PURE__ */ l.jsx(Lu.Slot, { scope: r, children: /* @__PURE__ */ l.jsx(
          xl,
          {
            asChild: !0,
            ...p,
            orientation: "horizontal",
            loop: s,
            dir: m,
            currentTabStopId: x,
            onCurrentTabStopIdChange: v,
            children: /* @__PURE__ */ l.jsx(B.div, { role: "menubar", ...u, ref: n })
          }
        ) }) })
      }
    );
  }, "Menubar")
), fy = "MenubarMenu", [WR, py] = uy(fy), KR = /* @__PURE__ */ Rn((e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = pe(), i = n || o || "LEGACY_REACT_AUTO_VALUE", a = Of(fy, t), s = Ir(t), c = d.useRef(null), u = d.useRef(!1), m = a.value === i;
  return d.useEffect(() => {
    m || (u.current = !1);
  }, [m]), /* @__PURE__ */ l.jsx(
    WR,
    {
      scope: t,
      value: i,
      triggerId: pe(),
      triggerRef: c,
      contentId: pe(),
      wasKeyboardTriggerOpenRef: u,
      children: /* @__PURE__ */ l.jsx(
        Pf,
        {
          ...s,
          open: m,
          onOpenChange: (p) => {
            p || a.onMenuClose();
          },
          modal: !1,
          dir: a.dir,
          ...r
        }
      )
    }
  );
}, "MenubarMenu"), ch = "MenubarTrigger", YR = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Rn(function(t, n) {
    const { __scopeMenubar: r, disabled: o = !1, ...i } = t, a = dy(r), s = Ir(r), c = Of(ch, r), u = py(ch, r), m = d.useRef(null), p = J(n, m, u.triggerRef), [f, h] = d.useState(!1), x = c.value === u.value;
    return /* @__PURE__ */ l.jsx(Lu.ItemSlot, { scope: r, value: u.value, disabled: o, children: /* @__PURE__ */ l.jsx(
      wl,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        tabStopId: u.value,
        children: /* @__PURE__ */ l.jsx(Ef, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
          B.button,
          {
            type: "button",
            role: "menuitem",
            id: u.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": x,
            "aria-controls": x ? u.contentId : void 0,
            "data-highlighted": f ? "" : void 0,
            "data-state": x ? "open" : "closed",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            ...i,
            ref: p,
            onPointerDown: _(t.onPointerDown, (v) => {
              !o && v.button === 0 && v.ctrlKey === !1 && (c.onMenuOpen(u.value), x || v.preventDefault());
            }),
            onPointerEnter: _(t.onPointerEnter, () => {
              var b;
              !!c.value && !x && (c.onMenuOpen(u.value), (b = m.current) == null || b.focus());
            }),
            onKeyDown: _(t.onKeyDown, (v) => {
              o || (["Enter", " "].includes(v.key) && c.onMenuToggle(u.value), v.key === "ArrowDown" && c.onMenuOpen(u.value), ["Enter", " ", "ArrowDown"].includes(v.key) && (u.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
            }),
            onFocus: _(t.onFocus, () => h(!0)),
            onBlur: _(t.onBlur, () => h(!1))
          }
        ) })
      }
    ) });
  }, "MenubarTrigger")
), XR = /* @__PURE__ */ Rn((e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ir(t);
  return /* @__PURE__ */ l.jsx(jf, { ...r, ...n });
}, "MenubarPortal"), uh = "MenubarContent", qR = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Rn(function(t, n) {
    const { __scopeMenubar: r, align: o = "start", ...i } = t, a = Ir(r), s = Of(uh, r), c = py(uh, r), u = BR(r), m = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Nf,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...i,
        ref: n,
        align: o,
        onCloseAutoFocus: _(t.onCloseAutoFocus, (p) => {
          var h;
          !!!s.value && !m.current && ((h = c.triggerRef.current) == null || h.focus()), m.current = !1, p.preventDefault();
        }),
        onFocusOutside: _(t.onFocusOutside, (p) => {
          const f = p.target;
          u().some((x) => {
            var v;
            return (v = x.ref.current) == null ? void 0 : v.contains(f);
          }) && p.preventDefault();
        }),
        onInteractOutside: _(t.onInteractOutside, () => {
          m.current = !0;
        }),
        onEntryFocus: (p) => {
          c.wasKeyboardTriggerOpenRef.current || p.preventDefault();
        },
        onKeyDown: _(
          t.onKeyDown,
          (p) => {
            if (["ArrowRight", "ArrowLeft"].includes(p.key)) {
              const f = p.target, h = f.hasAttribute("data-radix-menubar-subtrigger"), x = f.closest("[data-radix-menubar-content]") !== p.currentTarget, b = (s.dir === VR.RTL ? "ArrowRight" : "ArrowLeft") === p.key;
              if (!b && h || x && b) return;
              let w = u().filter((k) => !k.disabled).map((k) => k.value);
              b && w.reverse();
              const C = w.indexOf(c.value);
              w = s.loop ? my(w, C + 1) : w.slice(C + 1);
              const [S] = w;
              S && s.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...t.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "MenubarContent")
), QR = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Rn(function(t, n) {
    const { __scopeMenubar: r, ...o } = t, i = Ir(r);
    return /* @__PURE__ */ l.jsx(Tf, { ...i, ...o, ref: n });
  }, "MenubarLabel")
), ZR = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Rn(function(t, n) {
    const { __scopeMenubar: r, ...o } = t, i = Ir(r);
    return /* @__PURE__ */ l.jsx(Rf, { ...i, ...o, ref: n });
  }, "MenubarItem")
), JR = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Rn(function(t, n) {
    const { __scopeMenubar: r, ...o } = t, i = Ir(r);
    return /* @__PURE__ */ l.jsx(Mf, { ...i, ...o, ref: n });
  }, "MenubarSeparator")
);
function my(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
Rn(my, "wrapArray");
function eM({ node: e }) {
  const t = e.props, n = wt();
  return z(
    e,
    /* @__PURE__ */ l.jsx(GR, { className: "flex h-9 items-center gap-1 rounded-md border bg-background p-1", children: t.groups.map((r) => /* @__PURE__ */ l.jsxs(KR, { children: [
      /* @__PURE__ */ l.jsx(YR, { className: "rounded-sm px-3 py-1 text-sm outline-none hover:bg-accent focus:bg-accent data-[state=open]:bg-accent", children: r.label }),
      /* @__PURE__ */ l.jsx(XR, { container: n ?? void 0, children: /* @__PURE__ */ l.jsx(qR, { align: "start", sideOffset: 5, className: "z-50 min-w-36 rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in", children: r.items.map((o, i) => o.type === "separator" ? /* @__PURE__ */ l.jsx(JR, { className: "my-1 h-px bg-border" }, `separator-${i}`) : o.type === "label" ? /* @__PURE__ */ l.jsx(QR, { className: "px-2 py-1.5 text-xs font-medium text-muted-foreground", children: o.label }, `label-${i}`) : /* @__PURE__ */ l.jsxs(
        ZR,
        {
          disabled: o.disabled,
          onSelect: () => e.emit("Selected", o.value ?? o.label),
          className: `flex cursor-default select-none items-center justify-between gap-4 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${o.destructive ? "text-destructive" : ""}`,
          children: [
            o.label,
            o.shortcut && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: o.shortcut })
          ]
        },
        o.value ?? o.label
      )) }) })
    ] }, r.label)) })
  );
}
function tM({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("article", { className: `flex gap-3 ${t.align === "end" ? "flex-row-reverse text-right" : ""}`, children: [
      t.avatar ? /* @__PURE__ */ l.jsx("img", { src: t.avatar, alt: "", className: "size-8 shrink-0 rounded-full object-cover" }) : /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", className: "grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs font-medium", children: t.author.slice(0, 1).toUpperCase() }),
      /* @__PURE__ */ l.jsxs("div", { className: `grid min-w-0 max-w-[80%] gap-1 ${t.align === "end" ? "justify-items-end" : ""}`, children: [
        (t.author || t.timestamp) && /* @__PURE__ */ l.jsxs("header", { className: "flex items-center gap-2 text-xs", children: [
          t.author && /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: t.author }),
          t.timestamp && /* @__PURE__ */ l.jsx("time", { className: "text-muted-foreground", children: t.timestamp })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "grid gap-2 text-sm", children: oe(t.children) })
      ] })
    ] })
  );
}
function nM({ node: e }) {
  const t = e.props, n = d.useRef(null), r = d.useRef(!0);
  return d.useEffect(() => {
    t.autoScroll && r.current && n.current && (n.current.scrollTop = n.current.scrollHeight);
  }, [t.autoScroll, t.children]), z(
    e,
    /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: n,
        role: "log",
        "aria-label": t.label,
        "aria-live": "polite",
        onScroll: (o) => {
          const i = o.currentTarget;
          r.current = i.scrollHeight - i.scrollTop - i.clientHeight < 48;
        },
        className: "flex flex-col gap-4 overflow-y-auto overscroll-contain p-3",
        style: { maxHeight: `${Math.max(80, t.maxHeight)}px` },
        children: oe(t.children)
      }
    )
  );
}
const rM = (e) => typeof e == "string" ? { label: e, value: e } : e;
function oM({ node: e }) {
  const t = e.props, n = d.useId();
  return z(
    e,
    /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, children: /* @__PURE__ */ l.jsxs(
      "select",
      {
        id: n,
        value: t.value,
        disabled: t.disabled,
        required: t.required,
        onChange: (r) => e.setValue(r.target.value),
        className: "flex h-[var(--sen-control-h)] w-full items-center rounded-md border border-input bg-background px-3 text-[length:var(--sen-control-fs)] shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        style: t.size === "inherit" ? void 0 : ll(t.size),
        children: [
          /* @__PURE__ */ l.jsx("option", { value: "", children: t.placeholder }),
          t.options.map(rM).map((r) => /* @__PURE__ */ l.jsx("option", { value: r.value, children: r.label }, r.value))
        ]
      }
    ) })
  );
}
var iM = Object.defineProperty, aM = (e, t) => iM(e, "name", { value: t, configurable: !0 });
function Sl(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
aM(Sl, "usePrevious");
var sM = Object.defineProperty, lM = (e, t) => sM(e, "name", { value: t, configurable: !0 }), hy = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), cM = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ lM(function(t, n) {
    return /* @__PURE__ */ l.jsx(
      B.span,
      {
        ...t,
        ref: n,
        style: { ...hy, ...t.style }
      }
    );
  }, "VisuallyHidden")
), uM = Object.defineProperty, Ge = (e, t) => uM(e, "name", { value: t, configurable: !0 }), Jo = {
  Automatic: "automatic"
}, dM = {
  Horizontal: "horizontal"
}, fM = {
  RTL: "rtl"
}, $o = "NavigationMenu", [gy, KA, pM] = /* @__PURE__ */ En($o), [Vu, mM, hM] = /* @__PURE__ */ En($o), [$f, YA] = /* @__PURE__ */ ke(
  $o,
  [pM, hM]
), [gM, zf] = $f($o), [vM, XA] = $f($o), xM = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const {
      __scopeNavigationMenu: r,
      value: o,
      onValueChange: i,
      defaultValue: a,
      delayDuration: s = 200,
      skipDelayDuration: c = 300,
      orientation: u = dM.Horizontal,
      dir: m,
      activationMode: p = Jo.Automatic,
      ...f
    } = t, [h, x] = d.useState(null), v = J(n, x), b = Jt(m), g = d.useRef(0), y = d.useRef(0), w = d.useRef(0), [C, S] = d.useState(!0), [k, P] = Ee({
      prop: o,
      onChange: /* @__PURE__ */ Ge((O) => {
        const M = O !== "", W = c > 0;
        M ? (window.clearTimeout(w.current), W && S(!1)) : (window.clearTimeout(w.current), w.current = window.setTimeout(
          () => S(!0),
          c
        )), i == null || i(O);
      }, "onChange"),
      defaultProp: a ?? "",
      caller: $o
    }), E = d.useCallback(() => {
      window.clearTimeout(y.current), y.current = window.setTimeout(() => P(""), 150);
    }, [P]), R = d.useCallback(
      (O) => {
        window.clearTimeout(y.current), P(O);
      },
      [P]
    ), T = d.useCallback(
      (O) => {
        k === O ? window.clearTimeout(y.current) : g.current = window.setTimeout(() => {
          window.clearTimeout(y.current), P(O);
        }, s);
      },
      [k, P, s]
    );
    return d.useEffect(() => () => {
      window.clearTimeout(g.current), window.clearTimeout(y.current), window.clearTimeout(w.current);
    }, []), /* @__PURE__ */ l.jsx(
      wM,
      {
        scope: r,
        isRootMenu: !0,
        value: k,
        dir: b,
        orientation: u,
        activationMode: p,
        rootNavigationMenu: h,
        onTriggerEnter: (O) => {
          p === Jo.Automatic && (window.clearTimeout(g.current), C ? T(O) : R(O));
        },
        onTriggerLeave: () => {
          p === Jo.Automatic && (window.clearTimeout(g.current), E());
        },
        onContentEnter: () => {
          p === Jo.Automatic && window.clearTimeout(y.current);
        },
        onContentLeave: () => {
          p === Jo.Automatic && E();
        },
        onItemSelect: (O) => {
          P((M) => M === O ? "" : O);
        },
        onItemDismiss: () => P(""),
        children: /* @__PURE__ */ l.jsx(
          B.nav,
          {
            "aria-label": "Main",
            "data-orientation": u,
            dir: b,
            ...f,
            ref: v
          }
        )
      }
    );
  }, "NavigationMenu")
), wM = /* @__PURE__ */ Ge((e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    activationMode: a,
    children: s,
    value: c,
    onItemSelect: u,
    onItemDismiss: m,
    onTriggerEnter: p,
    onTriggerLeave: f,
    onContentEnter: h,
    onContentLeave: x
  } = e, [v, b] = d.useState(null), [g, y] = d.useState(/* @__PURE__ */ new Map()), [w, C] = d.useState(null);
  return /* @__PURE__ */ l.jsx(
    gM,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: c,
      previousValue: Sl(c),
      baseId: pe(),
      dir: o,
      orientation: i,
      activationMode: a,
      viewport: v,
      onViewportChange: b,
      indicatorTrack: w,
      onIndicatorTrackChange: C,
      onTriggerEnter: Ae(p),
      onTriggerLeave: Ae(f),
      onContentEnter: Ae(h),
      onContentLeave: Ae(x),
      onItemSelect: Ae(u),
      onItemDismiss: Ae(m),
      onViewportContentChange: d.useCallback((S, k) => {
        y((P) => (P.set(S, k), new Map(P)));
      }, []),
      onViewportContentRemove: d.useCallback((S) => {
        y((k) => k.has(S) ? (k.delete(S), new Map(k)) : k);
      }, []),
      children: /* @__PURE__ */ l.jsx(gy.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(vM, { scope: t, items: g, children: s }) })
    }
  );
}, "NavigationMenuProvider"), yM = "NavigationMenuList", bM = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopeNavigationMenu: r, ...o } = t, i = zf(yM, r), a = /* @__PURE__ */ l.jsx(B.ul, { "data-orientation": i.orientation, ...o, ref: n });
    return /* @__PURE__ */ l.jsx(B.div, { style: { position: "relative" }, ref: i.onIndicatorTrackChange, children: /* @__PURE__ */ l.jsx(gy.Slot, { scope: r, children: i.isRootMenu ? /* @__PURE__ */ l.jsx(NM, { asChild: !0, children: a }) : a }) });
  }, "NavigationMenuList")
), CM = "NavigationMenuItem", [SM, qA] = $f(CM), kM = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopeNavigationMenu: r, value: o, ...i } = t, a = pe(), s = o || a || "LEGACY_REACT_AUTO_VALUE", c = d.useRef(null), u = d.useRef(null), m = d.useRef(null), p = d.useRef(() => {
    }), f = d.useRef(!1), h = d.useCallback((v = "start") => {
      if (c.current) {
        p.current();
        const b = Bu(c.current);
        b.length && Ff(v === "start" ? b : b.reverse());
      }
    }, []), x = d.useCallback(() => {
      if (c.current) {
        const v = Bu(c.current);
        v.length && (p.current = vy(v));
      }
    }, []);
    return /* @__PURE__ */ l.jsx(
      SM,
      {
        scope: r,
        value: s,
        triggerRef: u,
        contentRef: c,
        focusProxyRef: m,
        wasEscapeCloseRef: f,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: x,
        onContentFocusOutside: x,
        children: /* @__PURE__ */ l.jsx(B.li, { ...i, ref: n })
      }
    );
  }, "NavigationMenuItem")
), dh = "navigationMenu.linkSelect", PM = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopeNavigationMenu: r, active: o, onSelect: i, ...a } = t;
    return /* @__PURE__ */ l.jsx(RM, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      B.a,
      {
        "data-active": o ? "" : void 0,
        "aria-current": o ? "page" : void 0,
        ...a,
        ref: n,
        onClick: _(
          t.onClick,
          (s) => {
            const c = s.target, u = new CustomEvent(dh, {
              bubbles: !0,
              cancelable: !0
            });
            if (c.addEventListener(dh, (m) => i == null ? void 0 : i(m), { once: !0 }), Ii(c, u), !u.defaultPrevented && !s.metaKey) {
              const m = new CustomEvent(EM, {
                bubbles: !0,
                cancelable: !0
              });
              Ii(c, m);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "NavigationMenuLink")
), EM = "navigationMenu.rootContentDismiss", jM = "FocusGroup", NM = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopeNavigationMenu: r, ...o } = t, i = zf(jM, r);
    return /* @__PURE__ */ l.jsx(Vu.Provider, { scope: r, children: /* @__PURE__ */ l.jsx(Vu.Slot, { scope: r, children: /* @__PURE__ */ l.jsx(B.div, { dir: i.dir, ...o, ref: n }) }) });
  }, "FocusGroup")
), fh = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], TM = "FocusGroupItem", RM = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopeNavigationMenu: r, ...o } = t, i = mM(r), a = zf(TM, r);
    return /* @__PURE__ */ l.jsx(Vu.ItemSlot, { scope: r, children: /* @__PURE__ */ l.jsx(
      B.button,
      {
        ...o,
        ref: n,
        onKeyDown: _(t.onKeyDown, (s) => {
          if (["Home", "End", ...fh].includes(s.key)) {
            let u = i().map((f) => f.ref.current);
            if ([a.dir === fM.RTL ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && u.reverse(), fh.includes(s.key)) {
              const f = u.indexOf(s.currentTarget);
              u = u.slice(f + 1);
            }
            setTimeout(() => Ff(u)), s.preventDefault();
          }
        })
      }
    ) });
  }, "FocusGroupItem")
);
function Bu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Ge((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
Ge(Bu, "getTabbableCandidates");
function Ff(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
Ge(Ff, "focusFirst");
function vy(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
Ge(vy, "removeFromTabOrder");
function MM(e, t) {
  const n = Ae(t);
  Ne(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
Ge(MM, "useResizeObserver");
function _M(e) {
  return e ? "open" : "closed";
}
Ge(_M, "getOpenState");
function IM(e, t) {
  return `${e}-trigger-${t}`;
}
Ge(IM, "makeTriggerId");
function AM(e, t) {
  return `${e}-content-${t}`;
}
Ge(AM, "makeContentId");
function DM(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
Ge(DM, "whenMouse");
function OM({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx(xM, { children: /* @__PURE__ */ l.jsx(bM, { className: "flex flex-wrap items-center gap-1", children: t.items.map((n) => /* @__PURE__ */ l.jsx(kM, { children: /* @__PURE__ */ l.jsxs(PM, { href: n.href || "#", className: "block rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent", children: [
      /* @__PURE__ */ l.jsx("span", { className: "font-medium", children: n.label }),
      n.description && /* @__PURE__ */ l.jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: n.description })
    ] }) }, `${n.label}-${n.href}`)) }) })
  );
}
function $M({ node: e }) {
  const t = e.props, n = d.useRef(null), [r, o] = d.useState(t.from), i = d.useRef(null), a = Math.max(0, Math.min(20, Math.floor(t.decimals))), s = d.useMemo(() => {
    try {
      return new Intl.NumberFormat(t.locale, { minimumFractionDigits: a, maximumFractionDigits: a });
    } catch (c) {
      return console.warn(`[Sen] NumberTicker locale "${t.locale}" is invalid; using the default locale.`, c), new Intl.NumberFormat(void 0, { minimumFractionDigits: a, maximumFractionDigits: a });
    }
  }, [t.locale, a]);
  return d.useEffect(() => {
    let c = 0, u, m, p = !1;
    const f = Number.isFinite(t.duration) ? Math.max(0, t.duration) : 1200, h = (v) => {
      if (p) return;
      u ?? (u = v);
      const b = f === 0 ? 1 : Math.min(1, (v - u) / f), g = 1 - (1 - b) ** 3, y = t.from + (t.value - t.from) * g;
      o(y), b < 1 ? c = requestAnimationFrame(h) : i.current !== t.value && (i.current = t.value, e.emit("Completed", t.value));
    }, x = () => {
      c && cancelAnimationFrame(c), u = void 0, c = requestAnimationFrame(h);
    };
    return t.animateOnView && typeof IntersectionObserver < "u" && n.current ? (m = new IntersectionObserver((v) => {
      v.some((b) => b.isIntersecting) && (x(), m == null || m.disconnect());
    }, { threshold: 0.1 }), m.observe(n.current)) : x(), () => {
      p = !0, cancelAnimationFrame(c), m == null || m.disconnect();
    };
  }, [t.animateOnView, t.duration, t.from, t.value, e]), z(
    e,
    /* @__PURE__ */ l.jsxs("span", { ref: n, "aria-label": `${t.prefix}${s.format(t.value)}${t.suffix}`, className: "tabular-nums", children: [
      t.prefix,
      s.format(r),
      t.suffix
    ] })
  );
}
function zM({ node: e }) {
  const t = e.props, n = Math.max(16, t.radius), r = Math.max(16, t.size), o = n * 2 + r;
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        role: "img",
        "aria-label": t.label,
        className: `sen-orbit relative mx-auto ${t.pauseOnHover ? "sen-orbit-pause" : ""}`,
        style: { width: o, height: o },
        children: [
          /* @__PURE__ */ l.jsx("div", { className: "absolute inset-0 grid place-items-center rounded-full border border-dashed border-border/70", children: /* @__PURE__ */ l.jsx("div", { className: "grid place-items-center", children: oe(t.center) }) }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 animate-sen-orbit motion-reduce:animate-none",
              style: { animationDuration: `${Math.max(1, t.duration)}s`, animationDirection: t.reverse ? "reverse" : "normal" },
              children: t.children.map((i, a) => {
                const s = 360 * a / Math.max(1, t.children.length), c = {
                  width: r,
                  height: r,
                  left: "50%",
                  top: "50%",
                  marginLeft: -r / 2,
                  marginTop: -r / 2,
                  transform: `rotate(${s}deg) translateX(${n}px) rotate(-${s}deg)`
                };
                return /* @__PURE__ */ l.jsx("div", { className: "absolute grid place-items-center rounded-full border bg-background shadow-sm", style: c, children: oe([i]) }, a);
              })
            }
          )
        ]
      }
    )
  );
}
function FM({ node: e }) {
  const t = e.props, n = Math.max(1, Math.floor(t.pageCount)), r = Math.min(n, Math.max(1, Math.floor(t.page))), o = Math.min(4, Math.max(0, Math.floor(t.siblingCount))), i = Math.max(1, r - o), a = Math.min(n, r + o), s = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border text-sm transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40";
  return z(
    e,
    /* @__PURE__ */ l.jsxs("nav", { "aria-label": "Pagination", className: "flex flex-wrap items-center gap-1", children: [
      /* @__PURE__ */ l.jsx("button", { type: "button", className: `${s} min-w-9 whitespace-nowrap px-3`, style: { width: "auto" }, disabled: r <= 1, onClick: () => e.setValue(r - 1), children: "Previous" }),
      i > 1 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(wc, { page: 1, current: r, className: s, onSelect: (c) => e.setValue(c) }),
        i > 2 && /* @__PURE__ */ l.jsx("span", { className: "px-1 text-muted-foreground", "aria-hidden": "true", children: "…" })
      ] }),
      Array.from({ length: a - i + 1 }, (c, u) => i + u).map((c) => /* @__PURE__ */ l.jsx(wc, { page: c, current: r, className: s, onSelect: (u) => e.setValue(u) }, c)),
      a < n && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        a < n - 1 && /* @__PURE__ */ l.jsx("span", { className: "px-1 text-muted-foreground", "aria-hidden": "true", children: "…" }),
        /* @__PURE__ */ l.jsx(wc, { page: n, current: r, className: s, onSelect: (c) => e.setValue(c) })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", className: `${s} min-w-9 whitespace-nowrap px-3`, style: { width: "auto" }, disabled: r >= n, onClick: () => e.setValue(r + 1), children: "Next" })
    ] })
  );
}
function wc({ page: e, current: t, className: n, onSelect: r }) {
  return /* @__PURE__ */ l.jsx("button", { type: "button", className: `${n} ${e === t ? "bg-primary text-primary-foreground" : ""}`, "aria-current": e === t ? "page" : void 0, "aria-label": `Page ${e}`, onClick: () => r(e), children: e });
}
function LM({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsxs(hf, { open: t.open, onOpenChange: (r) => e.setValue(r), modal: t.modal, children: [
    /* @__PURE__ */ l.jsx(gf, { className: "inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium text-foreground shadow-sm hover:bg-accent", children: t.trigger }),
    /* @__PURE__ */ l.jsx(vf, { container: n ?? void 0, children: z(
      e,
      /* @__PURE__ */ l.jsxs(
        xf,
        {
          side: t.side,
          align: t.align,
          sideOffset: t.sideOffset,
          alignOffset: t.alignOffset,
          className: "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-sen-surface-in",
          children: [
            oe(t.content),
            /* @__PURE__ */ l.jsx(E2, { className: "fill-popover" })
          ]
        }
      )
    ) })
  ] });
}
function VM({ node: e }) {
  const t = e.props;
  return /* @__PURE__ */ l.jsx(
    yt,
    {
      label: t.label,
      right: t.showValue ? `${Math.round(t.value)}%` : void 0,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          role: "progressbar",
          "aria-label": t.label || "Progress",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": t.value,
          className: "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
          children: /* @__PURE__ */ l.jsx("div", { className: "h-full bg-primary transition-[width] duration-200", style: { width: `${t.value}%` } })
        }
      )
    }
  );
}
function BM({ node: e }) {
  var m;
  const t = e.props, [n, r] = d.useState({}), o = t.questions[t.step];
  if (!o) return z(e, /* @__PURE__ */ l.jsx("div", { role: "status", className: "rounded-lg border p-4 text-sm text-muted-foreground", children: "No questions to display." }));
  const i = n[o.id] ?? (o.type === "multiple" ? [] : ""), a = Array.isArray(i) ? i.length > 0 : !!i.trim(), s = a || !o.required || o.skippable, c = (p) => {
    r((f) => ({ ...f, [o.id]: p })), e.emit("Answered", o.id, p);
  }, u = () => {
    s && (t.step === t.questions.length - 1 ? e.emit("Completed", n) : e.setValue(t.step + 1));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsxs("section", { className: "grid gap-5 rounded-lg border bg-card p-5", children: [
      /* @__PURE__ */ l.jsxs("header", { className: "grid gap-2", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ l.jsx("h3", { className: "text-base font-semibold", children: t.title }),
          /* @__PURE__ */ l.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            t.step + 1,
            " / ",
            t.questions.length
          ] })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: "h-1 overflow-hidden rounded-full bg-muted", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": t.questions.length, "aria-valuenow": t.step + 1, children: /* @__PURE__ */ l.jsx("div", { className: "h-full bg-primary transition-[width] duration-300", style: { width: `${(t.step + 1) / t.questions.length * 100}%` } }) }),
        /* @__PURE__ */ l.jsx("p", { className: "font-medium", children: o.prompt }),
        o.description && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-muted-foreground", children: o.description })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "grid gap-2", children: o.type === "freeform" ? /* @__PURE__ */ l.jsx(
        "textarea",
        {
          "aria-label": o.prompt,
          placeholder: o.placeholder ?? "Type your answer…",
          value: typeof i == "string" ? i : "",
          onChange: (p) => c(p.currentTarget.value),
          className: "min-h-24 rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        }
      ) : (m = o.options) == null ? void 0 : m.map((p) => {
        const f = Array.isArray(i) ? i.includes(p.value) : i === p.value;
        return /* @__PURE__ */ l.jsxs("label", { className: "flex cursor-pointer items-center gap-2 rounded-md border p-3 text-sm hover:bg-accent", children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: o.type === "multiple" ? "checkbox" : "radio",
              name: `${o.id}-${t.step}`,
              checked: f,
              onChange: () => {
                if (o.type === "multiple") {
                  const h = Array.isArray(i) ? i : [];
                  c(f ? h.filter((x) => x !== p.value) : [...h, p.value]);
                } else c(p.value);
              },
              className: "accent-primary"
            }
          ),
          p.label
        ] }, p.value);
      }) }),
      /* @__PURE__ */ l.jsxs("footer", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ l.jsx("button", { type: "button", disabled: t.step === 0, onClick: () => e.setValue(t.step - 1), className: "rounded-md border px-3 py-2 text-sm disabled:opacity-40", children: "Back" }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex gap-2", children: [
          o.skippable && !a && /* @__PURE__ */ l.jsx("button", { type: "button", onClick: () => t.step < t.questions.length - 1 ? e.setValue(t.step + 1) : e.emit("Completed", n), className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent", children: "Skip" }),
          /* @__PURE__ */ l.jsx("button", { type: "button", disabled: !s, onClick: u, className: "rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground disabled:opacity-40", children: t.step === t.questions.length - 1 ? t.submitText : "Continue" })
        ] })
      ] })
    ] })
  );
}
function HM({ node: e }) {
  const t = e.props, n = d.useId();
  return z(
    e,
    /* @__PURE__ */ l.jsxs("fieldset", { disabled: t.disabled, className: "grid gap-3", children: [
      t.label && /* @__PURE__ */ l.jsx("legend", { className: "text-sm font-medium", children: t.label }),
      /* @__PURE__ */ l.jsx("div", { role: "radiogroup", "aria-label": t.label || void 0, "aria-required": t.required || void 0, className: `grid gap-3 ${t.orientation === "horizontal" ? "grid-flow-col auto-cols-max" : ""}`, children: t.items.map((r, o) => {
        const i = `${n}-${o}`;
        return /* @__PURE__ */ l.jsxs("label", { htmlFor: i, className: `flex items-start gap-2.5 ${r.disabled || t.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`, children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              id: i,
              type: "radio",
              name: n,
              value: r.value,
              checked: t.value === r.value,
              disabled: t.disabled || r.disabled,
              required: t.required && o === 0,
              onChange: () => e.setValue(r.value),
              className: "mt-0.5 size-4 accent-primary"
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { className: "grid gap-0.5", children: [
            /* @__PURE__ */ l.jsx("span", { className: "text-sm font-medium leading-none", children: r.label }),
            r.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: r.description })
          ] })
        ] }, r.value);
      }) }),
      t.description && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-muted-foreground", children: t.description })
    ] })
  );
}
function UM({ node: e }) {
  const t = e.props, n = Math.max(1, Math.min(20, Math.floor(t.max || 5))), r = t.step === 0.5 ? 0.5 : 1, o = Math.min(n, Math.max(0, t.value)), i = (c) => {
    t.disabled || t.readOnly || e.setValue(t.allowClear && c === o ? 0 : c);
  }, a = (c) => {
    let u;
    (c.key === "ArrowRight" || c.key === "ArrowUp") && (u = o + r), (c.key === "ArrowLeft" || c.key === "ArrowDown") && (u = o - r), c.key === "Home" && (u = 0), c.key === "End" && (u = n), u !== void 0 && (c.preventDefault(), !t.disabled && !t.readOnly && e.setValue(Math.min(n, Math.max(0, u))));
  }, s = (c) => {
    const u = c.target.closest("[data-rating-index]");
    if (!u) return;
    const m = Number(u.dataset.ratingIndex), p = u.getBoundingClientRect(), f = t.step === 0.5 && c.clientX - p.left < p.width / 2;
    i(m + (f ? 0.5 : 1));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsx(
      "div",
      {
        role: "slider",
        tabIndex: t.disabled ? -1 : 0,
        "aria-label": t.label,
        "aria-valuemin": 0,
        "aria-valuemax": n,
        "aria-valuenow": o,
        "aria-valuetext": `${o} out of ${n}`,
        "aria-disabled": t.disabled || void 0,
        "aria-readonly": t.readOnly || void 0,
        onKeyDown: a,
        onClick: s,
        className: `inline-flex w-fit items-center gap-0.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${t.disabled ? "opacity-50" : t.readOnly ? "cursor-default" : "cursor-pointer"}`,
        children: Array.from({ length: n }, (c, u) => {
          const m = Math.round(Math.max(0, Math.min(1, o - u)) * 100);
          return /* @__PURE__ */ l.jsxs(
            "span",
            {
              "data-rating-index": u,
              "aria-hidden": "true",
              className: "relative text-xl leading-none text-muted-foreground/45",
              children: [
                /* @__PURE__ */ l.jsx("span", { children: "★" }),
                /* @__PURE__ */ l.jsx("span", { className: "absolute inset-y-0 left-0 overflow-hidden text-foreground", style: { width: `${m}%` }, children: "★" })
              ]
            },
            u
          );
        })
      }
    )
  );
}
function GM(e, t) {
  if (!e) return [];
  const n = Array.from({ length: e }, (o, i) => Math.max(1, t[i] ?? 100 / e)), r = n.reduce((o, i) => o + i, 0);
  return n.map((o) => o / r * 100);
}
function WM({ node: e }) {
  const t = e.props, n = t.children, [r, o] = d.useState(() => GM(n.length, t.defaultSizes)), i = d.useRef(null), a = t.direction === "horizontal", s = Math.max(5, Math.min(45, t.minSize)), c = (p, f) => {
    const h = p.currentTarget.parentElement;
    if (!h) return;
    const x = h.getBoundingClientRect();
    i.current = {
      index: f,
      start: a ? p.clientX : p.clientY,
      sizes: [...r],
      extent: a ? x.width : x.height
    }, p.currentTarget.setPointerCapture(p.pointerId);
  }, u = (p) => {
    const f = i.current;
    if (!f || f.extent <= 0) return;
    const x = ((a ? p.clientX : p.clientY) - f.start) / f.extent * 100, v = f.sizes[f.index] + x, b = f.sizes[f.index + 1] - x;
    v < s || b < s || o((g) => g.map((y, w) => w === f.index ? v : w === f.index + 1 ? b : y));
  }, m = (p) => {
    i.current = null, p.currentTarget.hasPointerCapture(p.pointerId) && p.currentTarget.releasePointerCapture(p.pointerId);
  };
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { className: `flex min-h-24 min-w-0 ${a ? "flex-row" : "flex-col"}`, children: n.map((p, f) => /* @__PURE__ */ l.jsx("div", { className: `min-h-0 min-w-0 overflow-auto ${a ? "h-full" : "w-full"}`, style: { flexBasis: `${r[f] ?? 100 / Math.max(1, n.length)}%`, flexGrow: 0, flexShrink: 0 }, children: oe([p]) }, f)).flatMap((p, f) => f === n.length - 1 ? [p] : [
      p,
      /* @__PURE__ */ l.jsx(
        "div",
        {
          role: "separator",
          tabIndex: 0,
          "aria-orientation": a ? "vertical" : "horizontal",
          "aria-label": `Resize panel ${f + 1}`,
          onPointerDown: (h) => c(h, f),
          onPointerMove: u,
          onPointerUp: m,
          onPointerCancel: m,
          onKeyDown: (h) => {
            const x = a ? h.key === "ArrowRight" : h.key === "ArrowDown", v = a ? h.key === "ArrowLeft" : h.key === "ArrowUp";
            if (!x && !v) return;
            h.preventDefault();
            const b = x ? 2 : -2;
            o((g) => {
              const y = [...g];
              return (y[f] ?? 0) + b < s || (y[f + 1] ?? 0) - b < s ? g : (y[f] += b, y[f + 1] -= b, y);
            });
          },
          className: `touch-none shrink-0 bg-border outline-none focus-visible:ring-2 focus-visible:ring-ring ${a ? "w-px cursor-col-resize hover:w-1" : "h-px cursor-row-resize hover:h-1"}`
        },
        `separator-${f}`
      )
    ]) })
  );
}
function KM({ node: e }) {
  const t = e.props, n = t.axis === "both" ? "overflow-auto" : t.axis === "horizontal" ? "overflow-x-auto overflow-y-hidden" : "overflow-y-auto";
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { role: "region", "aria-label": t.label, tabIndex: 0, className: `${n} overscroll-contain`, style: { maxHeight: `${Math.max(80, t.maxHeight)}px` }, children: oe(t.children) })
  );
}
var YM = Object.defineProperty, XM = (e, t) => YM(e, "name", { value: t, configurable: !0 });
function Co(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
XM(Co, "clamp");
var qM = Object.defineProperty, de = (e, t) => qM(e, "name", { value: t, configurable: !0 }), ph = {
  ItemAligned: "item-aligned",
  Popper: "popper"
}, QM = {
  RTL: "rtl"
}, ZM = [" ", "Enter", "ArrowUp", "ArrowDown"], JM = [" ", "Enter"], So = "Select", [kl, Lf, e_] = /* @__PURE__ */ En(So), [Ar, QA] = /* @__PURE__ */ ke(So, [
  e_,
  tn
]), Vf = tn(), [t_, sr] = Ar(So), [n_, r_] = Ar(So);
function xy(e) {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: u,
    name: m,
    autoComplete: p,
    disabled: f,
    required: h,
    form: x,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: v
  } = e, b = Vf(t), [g, y] = d.useState(null), [w, C] = d.useState(null), [S, k] = d.useState(!1), P = Jt(u), [E, R] = Ee({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: So
  }), [T, O] = Ee({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: So
  }), M = d.useRef(null), W = d.useRef(T);
  d.useEffect(() => {
    const N = x ? g == null ? void 0 : g.ownerDocument.getElementById(x) : g == null ? void 0 : g.form;
    if (N instanceof HTMLFormElement) {
      const H = /* @__PURE__ */ de(() => O(W.current), "reset");
      return N.addEventListener("reset", H), () => N.removeEventListener("reset", H);
    }
  }, [x, g, O]);
  const K = g ? !!x || !!g.closest("form") : !0, [te, q] = d.useState(/* @__PURE__ */ new Set()), Y = pe(), j = Array.from(te).map((N) => N.props.value).join(";"), I = d.useCallback((N) => {
    q((H) => new Set(H).add(N));
  }, []), F = d.useCallback((N) => {
    q((H) => {
      const X = new Set(H);
      return X.delete(N), X;
    });
  }, []), ee = {
    required: h,
    trigger: g,
    onTriggerChange: y,
    valueNode: w,
    onValueNodeChange: C,
    valueNodeHasChildren: S,
    onValueNodeHasChildrenChange: k,
    contentId: Y,
    value: T,
    onValueChange: O,
    open: E,
    onOpenChange: R,
    dir: P,
    triggerPointerDownPosRef: M,
    disabled: f,
    name: m,
    autoComplete: p,
    form: x,
    nativeOptions: te,
    nativeSelectKey: j,
    isFormControl: K
  };
  return /* @__PURE__ */ l.jsx(na, { ...b, children: /* @__PURE__ */ l.jsx(t_, { scope: t, ...ee, children: /* @__PURE__ */ l.jsx(kl.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
    n_,
    {
      scope: t,
      onNativeOptionAdd: I,
      onNativeOptionRemove: F,
      children: by(v) ? v(ee) : n
    }
  ) }) }) });
}
de(xy, "SelectProvider");
var o_ = /* @__PURE__ */ de((e) => {
  const { __scopeSelect: t, children: n, ...r } = e;
  return /* @__PURE__ */ l.jsx(
    xy,
    {
      __scopeSelect: t,
      ...r,
      internal_do_not_use_render: ({ isFormControl: o }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        n,
        o ? /* @__PURE__ */ l.jsx(
          T_,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), i_ = "SelectTrigger", a_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r, disabled: o = !1, ...i } = t, a = Vf(r), s = sr(i_, r), c = s.disabled || o, u = J(n, s.onTriggerChange), m = Lf(r), p = d.useRef("touch"), [f, h, x] = Bf((b) => {
      const g = m().filter((C) => !C.disabled), y = g.find((C) => C.value === s.value), w = Hf(g, b, y);
      w !== void 0 && s.onValueChange(w.value);
    }), v = /* @__PURE__ */ de((b) => {
      c || (s.onOpenChange(!0), x()), b && (s.triggerPointerDownPosRef.current = {
        x: Math.round(b.pageX),
        y: Math.round(b.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ l.jsx(ra, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": la(s.value) ? "" : void 0,
        ...i,
        ref: u,
        onClick: _(i.onClick, (b) => {
          b.currentTarget.focus(), p.current !== "mouse" && v(b);
        }),
        onPointerDown: _(i.onPointerDown, (b) => {
          p.current = b.pointerType;
          const g = b.target;
          g.hasPointerCapture(b.pointerId) && g.releasePointerCapture(b.pointerId), b.button === 0 && b.ctrlKey === !1 && b.pointerType === "mouse" && (v(b), b.preventDefault());
        }),
        onKeyDown: _(i.onKeyDown, (b) => {
          const g = f.current !== "";
          !(b.ctrlKey || b.altKey || b.metaKey) && b.key.length === 1 && h(b.key), !(g && b.key === " ") && ZM.includes(b.key) && (v(), b.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), s_ = "SelectValue", l_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r, className: o, style: i, children: a, placeholder: s = "", ...c } = t, u = sr(s_, r), { onValueNodeHasChildrenChange: m } = u, p = a !== void 0, f = J(n, u.onValueNodeChange);
    Ne(() => {
      m(p);
    }, [m, p]);
    const h = la(u.value);
    return /* @__PURE__ */ l.jsx(
      B.span,
      {
        ...c,
        asChild: h ? !1 : c.asChild,
        ref: f,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ l.jsx(d.Fragment, { children: h ? s : a }, h ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), c_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r, children: o, ...i } = t;
    return /* @__PURE__ */ l.jsx(B.span, { "aria-hidden": !0, ...i, ref: n, children: o || "▼" });
  }, "SelectIcon")
), u_ = "SelectPortal", [d_, f_] = Ar(u_, {
  forceMount: void 0
}), p_ = /* @__PURE__ */ de((e) => {
  const { __scopeSelect: t, forceMount: n, ...r } = e;
  return /* @__PURE__ */ l.jsx(d_, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ l.jsx(_o, { asChild: !0, ...r }) });
}, "SelectPortal"), Pr = "SelectContent", m_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const r = f_(Pr, t.__scopeSelect), { forceMount: o = r.forceMount, ...i } = t, a = sr(Pr, t.__scopeSelect), [s, c] = d.useState();
    return Ne(() => {
      c(new DocumentFragment());
    }, []), /* @__PURE__ */ l.jsx(nt, { present: o || a.open, children: ({ present: u }) => u ? /* @__PURE__ */ l.jsx(v_, { ...i, ref: n }) : /* @__PURE__ */ l.jsx(h_, { ...i, fragment: s }) });
  }, "SelectContent")
), h_ = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ de(function(t, n) {
  const { __scopeSelect: r, children: o, fragment: i } = t;
  return i ? No.createPortal(
    /* @__PURE__ */ l.jsx(wy, { scope: r, children: /* @__PURE__ */ l.jsx(kl.Slot, { scope: r, children: /* @__PURE__ */ l.jsx("div", { ref: n, children: o }) }) }),
    i
  ) : null;
}, "SelectContentFragment")), Rt = 10, [wy, Pl] = Ar(Pr), g_ = /* @__PURE__ */ qt("SelectContent.RemoveScroll"), v_ = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r } = t, {
      position: o = ph.ItemAligned,
      onCloseAutoFocus: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: c,
      sideOffset: u,
      align: m,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: x,
      sticky: v,
      hideWhenDetached: b,
      avoidCollisions: g,
      //
      ...y
    } = t, w = sr(Pr, r), [C, S] = d.useState(null), [k, P] = d.useState(null), E = J(n, S), [R, T] = d.useState(null), [O, M] = d.useState(
      null
    ), W = Lf(r), [K, te] = d.useState(!1), q = d.useRef(!1);
    d.useEffect(() => {
      if (C) return rl(C);
    }, [C]), Io();
    const Y = d.useCallback(
      (U) => {
        const [Z, ...he] = W().map((ae) => ae.ref.current), [ce] = he.slice(-1), ie = document.activeElement;
        for (const ae of U)
          if (ae === ie || (ae == null || ae.scrollIntoView({ block: "nearest" }), ae === Z && k && (k.scrollTop = 0), ae === ce && k && (k.scrollTop = k.scrollHeight), ae == null || ae.focus(), document.activeElement !== ie)) return;
      },
      [W, k]
    ), j = d.useCallback(
      () => Y([R, C]),
      [Y, R, C]
    );
    d.useEffect(() => {
      K && j();
    }, [K, j]);
    const { onOpenChange: I, triggerPointerDownPosRef: F } = w;
    d.useEffect(() => {
      if (C) {
        let U = { x: 0, y: 0 };
        const Z = /* @__PURE__ */ de((ce) => {
          var ie, ae;
          U = {
            x: Math.abs(Math.round(ce.pageX) - (((ie = F.current) == null ? void 0 : ie.x) ?? 0)),
            y: Math.abs(Math.round(ce.pageY) - (((ae = F.current) == null ? void 0 : ae.y) ?? 0))
          };
        }, "handlePointerMove"), he = /* @__PURE__ */ de((ce) => {
          U.x <= 10 && U.y <= 10 ? ce.preventDefault() : ce.composedPath().includes(C) || I(!1), document.removeEventListener("pointermove", Z), F.current = null;
        }, "handlePointerUp");
        return F.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", he, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", he, { capture: !0 });
        };
      }
    }, [C, I, F]), d.useEffect(() => {
      const U = /* @__PURE__ */ de(() => I(!1), "close");
      return window.addEventListener("blur", U), window.addEventListener("resize", U), () => {
        window.removeEventListener("blur", U), window.removeEventListener("resize", U);
      };
    }, [I]);
    const [ee, N] = Bf((U) => {
      const Z = W().filter((ie) => !ie.disabled), he = Z.find((ie) => ie.ref.current === document.activeElement), ce = Hf(Z, U, he);
      ce && setTimeout(() => {
        var ie;
        return (ie = ce.ref.current) == null ? void 0 : ie.focus();
      });
    }), H = d.useCallback(
      (U, Z, he) => {
        const ce = !q.current && !he;
        (w.value !== void 0 && w.value === Z || ce) && (T(U), ce && (q.current = !0));
      },
      [w.value]
    ), X = d.useCallback(() => C == null ? void 0 : C.focus(), [C]), L = d.useCallback(
      (U, Z, he) => {
        const ce = !q.current && !he;
        (w.value !== void 0 && w.value === Z || ce) && M(U);
      },
      [w.value]
    ), D = o === ph.Popper ? mh : x_, Q = D === mh ? {
      side: c,
      sideOffset: u,
      align: m,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: x,
      sticky: v,
      hideWhenDetached: b,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ l.jsx(
      wy,
      {
        scope: r,
        content: C,
        viewport: k,
        onViewportChange: P,
        itemRefCallback: H,
        selectedItem: R,
        onItemLeave: X,
        itemTextRefCallback: L,
        focusSelectedItem: j,
        selectedItemText: O,
        position: o,
        isPositioned: K,
        searchRef: ee,
        children: /* @__PURE__ */ l.jsx(Xi, { as: g_, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          Zs,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (U) => {
              U.preventDefault();
            },
            onUnmountAutoFocus: _(i, (U) => {
              var Z;
              (Z = w.trigger) == null || Z.focus({ preventScroll: !0 }), U.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              Mo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (U) => U.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  D,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (U) => U.preventDefault(),
                    ...y,
                    ...Q,
                    onPlaced: () => te(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: _(y.onKeyDown, (U) => {
                      const Z = U.ctrlKey || U.altKey || U.metaKey;
                      if (U.key === "Tab" && U.preventDefault(), !Z && U.key.length === 1 && N(U.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key)) {
                        let ce = W().filter((ie) => !ie.disabled).map((ie) => ie.ref.current);
                        if (["ArrowUp", "End"].includes(U.key) && (ce = ce.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(U.key)) {
                          const ie = U.target, ae = ce.indexOf(ie);
                          ce = ce.slice(ae + 1);
                        }
                        setTimeout(() => Y(ce)), U.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
), x_ = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ de(function(t, n) {
  const { __scopeSelect: r, onPlaced: o, ...i } = t, a = sr(Pr, r), s = Pl(Pr, r), [c, u] = d.useState(null), [m, p] = d.useState(null), f = J(n, p), h = Lf(r), x = d.useRef(!1), v = d.useRef(!0), { viewport: b, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = s, C = d.useCallback(() => {
    if (a.trigger && a.valueNode && c && m && b && g && y) {
      const E = a.trigger.getBoundingClientRect(), R = m.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), O = y.getBoundingClientRect();
      if (a.dir !== QM.RTL) {
        const ie = O.left - R.left, ae = T.left - ie, Le = E.left - ae, ut = E.width + Le, Ve = Math.max(ut, R.width), rn = window.innerWidth - Rt, Lo = Co(ae, [
          Rt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Rt, rn - Ve)
        ]);
        c.style.minWidth = ut + "px", c.style.left = Lo + "px";
      } else {
        const ie = R.right - O.right, ae = window.innerWidth - T.right - ie, Le = window.innerWidth - E.right - ae, ut = E.width + Le, Ve = Math.max(ut, R.width), rn = window.innerWidth - Rt, Lo = Co(ae, [
          Rt,
          Math.max(Rt, rn - Ve)
        ]);
        c.style.minWidth = ut + "px", c.style.right = Lo + "px";
      }
      const M = h(), W = window.innerHeight - Rt * 2, K = b.scrollHeight, te = window.getComputedStyle(m), q = parseInt(te.borderTopWidth, 10), Y = parseInt(te.paddingTop, 10), j = parseInt(te.borderBottomWidth, 10), I = parseInt(te.paddingBottom, 10), F = q + Y + K + I + j, ee = Math.min(g.offsetHeight * 5, F), N = window.getComputedStyle(b), H = parseInt(N.paddingTop, 10), X = parseInt(N.paddingBottom, 10), L = E.top + E.height / 2 - Rt, D = W - L, Q = g.offsetHeight / 2, U = g.offsetTop + Q, Z = q + Y + U, he = F - Z;
      if (Z <= L) {
        const ie = M.length > 0 && g === M[M.length - 1].ref.current;
        c.style.bottom = "0px";
        const ae = m.clientHeight - b.offsetTop - b.offsetHeight, Le = Math.max(
          D,
          Q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ie ? X : 0) + ae + j
        ), ut = Z + Le;
        c.style.height = ut + "px";
      } else {
        const ie = M.length > 0 && g === M[0].ref.current;
        c.style.top = "0px";
        const Le = Math.max(
          L,
          q + b.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ie ? H : 0) + Q
        ) + he;
        c.style.height = Le + "px", b.scrollTop = Z - L + b.offsetTop;
      }
      c.style.margin = `${Rt}px 0`, c.style.minHeight = ee + "px", c.style.maxHeight = W + "px", o == null || o(), requestAnimationFrame(() => x.current = !0);
    }
  }, [
    h,
    a.trigger,
    a.valueNode,
    c,
    m,
    b,
    g,
    y,
    a.dir,
    o
  ]);
  Ne(() => C(), [C]);
  const [S, k] = d.useState();
  Ne(() => {
    m && k(window.getComputedStyle(m).zIndex);
  }, [m]);
  const P = d.useCallback(
    (E) => {
      E && v.current === !0 && (C(), w == null || w(), v.current = !1);
    },
    [C, w]
  );
  return /* @__PURE__ */ l.jsx(
    w_,
    {
      scope: r,
      contentWrapper: c,
      shouldExpandOnScrollRef: x,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ l.jsx(
            B.div,
            {
              ...i,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...i.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), mh = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ de(function(t, n) {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: i = Rt,
    ...a
  } = t, s = Vf(r);
  return /* @__PURE__ */ l.jsx(
    oa,
    {
      ...s,
      ...a,
      ref: n,
      align: o,
      collisionPadding: i,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [w_, y_] = Ar(Pr, {}), hh = "SelectViewport", b_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r, nonce: o, ...i } = t, a = Pl(hh, r), s = y_(hh, r), c = J(n, a.onViewportChange), u = d.useRef(0);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ l.jsx(kl.Slot, { scope: r, children: /* @__PURE__ */ l.jsx(
        B.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...i,
          ref: c,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...i.style
          },
          onScroll: _(i.onScroll, (m) => {
            const p = m.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && f) {
              const x = Math.abs(u.current - p.scrollTop);
              if (x > 0) {
                const v = window.innerHeight - Rt * 2, b = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), y = Math.max(b, g);
                if (y < v) {
                  const w = y + x, C = Math.min(v, w), S = w - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), C_ = "SelectGroup", [ZA, JA] = Ar(C_), Hu = "SelectItem", [S_, yy] = Ar(Hu), k_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const {
      __scopeSelect: r,
      value: o,
      disabled: i = !1,
      textValue: a,
      ...s
    } = t, c = sr(Hu, r), u = Pl(Hu, r), m = c.value === o, [p, f] = d.useState(a ?? ""), [h, x] = d.useState(!1), v = Ae(
      (C) => {
        var S;
        return (S = u.itemRefCallback) == null ? void 0 : S.call(u, C, o, i);
      }
    ), b = J(n, v), g = pe(), y = d.useRef("touch"), w = /* @__PURE__ */ de(() => {
      c.onValueChange(o), c.onOpenChange(!1);
    }, "handleSelect");
    return /* @__PURE__ */ l.jsx(
      S_,
      {
        scope: r,
        value: o,
        disabled: i,
        textId: g,
        isSelected: m,
        onItemTextChange: d.useCallback((C) => {
          f((S) => S || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          kl.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: i,
            textValue: p,
            children: /* @__PURE__ */ l.jsx(
              B.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": m && h,
                "data-state": m ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...s,
                ref: b,
                onFocus: _(s.onFocus, () => x(!0)),
                onBlur: _(s.onBlur, () => x(!1)),
                onClick: _(s.onClick, () => {
                  i || y.current !== "mouse" && w();
                }),
                onPointerUp: _(s.onPointerUp, () => {
                  i || y.current === "mouse" && w();
                }),
                onPointerDown: _(s.onPointerDown, (C) => {
                  y.current = C.pointerType;
                }),
                onPointerMove: _(s.onPointerMove, (C) => {
                  var S;
                  y.current = C.pointerType, i ? (S = u.onItemLeave) == null || S.call(u) : y.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: _(s.onPointerLeave, (C) => {
                  var S;
                  C.currentTarget === document.activeElement && ((S = u.onItemLeave) == null || S.call(u));
                }),
                onKeyDown: _(s.onKeyDown, (C) => {
                  var k;
                  i || C.target !== C.currentTarget || ((k = u.searchRef) == null ? void 0 : k.current) !== "" && C.key === " " || (JM.includes(C.key) && w(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), $a = "SelectItemText", P_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r, className: o, style: i, ...a } = t, s = sr($a, r), c = Pl($a, r), u = yy($a, r), m = r_($a, r), [p, f] = d.useState(null), h = Ae(
      (w) => {
        var C;
        return (C = c.itemTextRefCallback) == null ? void 0 : C.call(c, w, u.value, u.disabled);
      }
    ), x = J(
      n,
      f,
      u.onItemTextChange,
      h
    ), v = p == null ? void 0 : p.textContent, b = d.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: u.value, disabled: u.disabled, children: v }, u.value),
      [u.disabled, u.value, v]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: y } = m;
    return Ne(() => (g(b), () => y(b)), [g, y, b]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(B.span, { id: u.textId, ...a, ref: x }),
      u.isSelected && s.valueNode && !s.valueNodeHasChildren && !la(s.value) ? No.createPortal(a.children, s.valueNode) : null
    ] });
  }, "SelectItemText")
), E_ = "SelectItemIndicator", j_ = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ de(function(t, n) {
    const { __scopeSelect: r, ...o } = t;
    return yy(E_, r).isSelected ? /* @__PURE__ */ l.jsx(B.span, { "aria-hidden": !0, ...o, ref: n }) : null;
  }, "SelectItemIndicator")
), N_ = "SelectBubbleInput", T_ = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ de(function({ __scopeSelect: t, ...n }, r) {
    const o = sr(N_, t), { value: i, onValueChange: a, required: s, disabled: c, name: u, autoComplete: m, form: p } = o, { nativeOptions: f, nativeSelectKey: h } = o, x = d.useRef(null), v = J(r, x), b = i ?? "", g = Sl(b), y = Array.from(f).some(
      (w) => (w.props.value ?? "") === ""
    );
    return d.useEffect(() => {
      const w = x.current;
      if (!w) return;
      const C = window.HTMLSelectElement.prototype, k = Object.getOwnPropertyDescriptor(
        C,
        "value"
      ).set;
      if (g !== b && k) {
        const P = new Event("change", { bubbles: !0 });
        k.call(w, b), w.dispatchEvent(P);
      }
    }, [g, b]), /* @__PURE__ */ l.jsxs(
      B.select,
      {
        "aria-hidden": !0,
        required: s,
        tabIndex: -1,
        name: u,
        autoComplete: m,
        disabled: c,
        form: p,
        onChange: (w) => a(w.target.value),
        ...n,
        style: { ...hy, ...n.style },
        ref: v,
        defaultValue: b,
        children: [
          la(i) && !y ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
          Array.from(f)
        ]
      },
      h
    );
  }, "SelectBubbleInput")
);
function by(e) {
  return typeof e == "function";
}
de(by, "isFunction");
function la(e) {
  return e === "" || e === void 0;
}
de(la, "shouldShowPlaceholder");
function Bf(e) {
  const t = Ae(e), n = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (a) => {
      const s = n.current + a;
      t(s), (/* @__PURE__ */ de(function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }, "updateSearch"))(s);
    },
    [t]
  ), i = d.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
de(Bf, "useTypeaheadSearch");
function Hf(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = Cy(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
de(Hf, "findNextItem");
function Cy(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
de(Cy, "wrapArray");
const R_ = o_, M_ = l_, Sy = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  a_,
  {
    ref: r,
    className: we(
      "flex h-[var(--sen-control-h)] w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 text-[length:var(--sen-control-fs)] shadow-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:truncate",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(c_, { asChild: !0, children: /* @__PURE__ */ l.jsx(yx, { className: "shrink-0 opacity-50" }) })
    ]
  }
));
Sy.displayName = "SelectTrigger";
const ky = d.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => {
  const i = wt();
  return /* @__PURE__ */ l.jsx(p_, { container: i, children: /* @__PURE__ */ l.jsx(
    m_,
    {
      ref: o,
      position: n,
      sideOffset: 4,
      className: we(
        "relative z-50 max-h-80 min-w-[8rem] animate-sen-in overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        e
      ),
      ...r,
      children: /* @__PURE__ */ l.jsx(b_, { className: "w-full min-w-[var(--radix-select-trigger-width)] p-1", children: t })
    }
  ) });
});
ky.displayName = "SelectContent";
const Py = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  k_,
  {
    ref: r,
    className: we(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-[length:var(--sen-control-fs)] outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute right-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ l.jsx(j_, { children: /* @__PURE__ */ l.jsx(wx, {}) }) }),
      /* @__PURE__ */ l.jsx(P_, { children: t })
    ]
  }
));
Py.displayName = "SelectItem";
const __ = (e) => typeof e == "string" ? { label: e, value: e } : e;
function I_({ node: e }) {
  const t = e.props, n = d.useId();
  return /* @__PURE__ */ l.jsx(
    yt,
    {
      label: t.label,
      description: t.description,
      htmlFor: n,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsxs(R_, { value: t.value, disabled: t.disabled, onValueChange: (r) => e.setValue(r), children: [
        /* @__PURE__ */ l.jsx(Sy, { id: n, style: t.size === "inherit" ? void 0 : ll(t.size), children: /* @__PURE__ */ l.jsx(M_, { placeholder: t.placeholder }) }),
        /* @__PURE__ */ l.jsx(ky, { children: t.options.map(__).map((r) => /* @__PURE__ */ l.jsx(Py, { value: r.value, children: r.label }, r.value)) })
      ] })
    }
  );
}
var A_ = Object.defineProperty, Ey = (e, t) => A_(e, "name", { value: t, configurable: !0 }), Uf = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, gh = Uf.Horizontal, D_ = Object.values(Uf), O_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ Ey(function(t, n) {
    const { decorative: r, orientation: o = gh, ...i } = t, a = jy(o) ? o : gh, s = a === Uf.Vertical ? a : void 0, c = r ? { role: "none" } : { "aria-orientation": s, role: "separator" };
    return /* @__PURE__ */ l.jsx(
      B.div,
      {
        "data-orientation": a,
        ...c,
        ...i,
        ref: n
      }
    );
  }, "Separator")
);
function jy(e) {
  return D_.includes(e);
}
Ey(jy, "isValidOrientation");
const Ny = d.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l.jsx(
  O_,
  {
    ref: o,
    decorative: n,
    orientation: t,
    className: we(
      "shrink-0 bg-border",
      t === "horizontal" ? "h-px w-full" : "h-full w-px",
      e
    ),
    ...r
  }
));
Ny.displayName = "Separator";
function $_({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx(
      Ny,
      {
        orientation: t.orientation,
        decorative: t.decorative,
        "aria-orientation": t.decorative ? void 0 : t.orientation
      }
    )
  );
}
const z_ = {
  top: "inset-x-0 top-0 border-b",
  right: "inset-y-0 right-0 h-full w-[min(90vw,24rem)] border-l",
  bottom: "inset-x-0 bottom-0 border-t",
  left: "inset-y-0 left-0 h-full w-[min(90vw,24rem)] border-r"
};
function F_({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsx(qi, { open: t.open, onOpenChange: (r) => e.setValue(r), children: /* @__PURE__ */ l.jsxs(Qi, { container: n ?? void 0, children: [
    /* @__PURE__ */ l.jsx(Zi, { className: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-sen-overlay-in" }),
    z(e, /* @__PURE__ */ l.jsxs(Ji, { className: `fixed z-50 grid max-h-[90vh] gap-4 overflow-y-auto bg-background p-6 text-foreground shadow-lg outline-none data-[state=open]:animate-sen-surface-in ${z_[t.side]}`, children: [
      /* @__PURE__ */ l.jsxs("header", { className: "grid gap-1.5", children: [
        /* @__PURE__ */ l.jsx(ol, { className: "text-lg font-semibold", children: t.title }),
        t.description && /* @__PURE__ */ l.jsx(il, { className: "text-sm text-muted-foreground", children: t.description })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "grid gap-4", children: oe(t.content) }),
      /* @__PURE__ */ l.jsx(ea, { "aria-label": t.closeText, className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground", children: "×" })
    ] }))
  ] }) });
}
function L_({ node: e }) {
  const t = e.props, n = Math.max(1, Math.min(8, t.borderWidth));
  return z(
    e,
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: "relative isolate overflow-hidden rounded-xl p-px",
        style: { padding: n, backgroundColor: "rgb(var(--border))" },
        children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-[-100%] animate-sen-shine motion-reduce:animate-none",
              style: {
                background: `conic-gradient(from 0deg, transparent 0deg, transparent 285deg, ${t.color} 320deg, transparent 355deg)`,
                animationDuration: `${Math.max(1, t.duration)}s`
              }
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "relative z-10 rounded-[calc(var(--radius)-1px)] bg-card text-card-foreground", children: oe(t.children) })
        ]
      }
    )
  );
}
function V_({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("aside", { "aria-label": t.label, className: `flex h-full min-h-0 flex-col border-r bg-background transition-[width] duration-200 ${t.collapsed ? "w-14" : "w-64"}`, children: [
      t.collapsible && /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": t.collapsed ? "Expand sidebar" : "Collapse sidebar", "aria-expanded": !t.collapsed, onClick: () => e.setValue(!t.collapsed), className: "m-2 rounded-md border px-2 py-1 text-xs hover:bg-accent", children: t.collapsed ? "→" : "Collapse" }),
      /* @__PURE__ */ l.jsx("div", { className: `min-h-0 flex-1 overflow-y-auto ${t.collapsed ? "invisible" : "p-2"}`, children: oe(t.children) })
    ] })
  );
}
function B_({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx(
      "span",
      {
        "aria-hidden": "true",
        className: `block animate-pulse bg-muted ${t.circle ? "rounded-full" : "rounded-md"}`,
        style: { width: t.width, height: t.height }
      }
    )
  );
}
var H_ = Object.defineProperty, le = (e, t) => H_(e, "name", { value: t, configurable: !0 }), vh = {
  Horizontal: "horizontal"
}, U_ = {
  LTR: "ltr"
}, Ty = ["PageUp", "PageDown"], Ry = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], My = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, ca = "Slider", [Uu, G_, W_] = /* @__PURE__ */ En(ca), [Gf, eD] = /* @__PURE__ */ ke(ca, [
  W_
]), [K_, ua] = Gf(ca), Y_ = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ le(function(t, n) {
    const {
      name: r,
      min: o = 0,
      max: i = 100,
      step: a = 1,
      orientation: s = vh.Horizontal,
      disabled: c = !1,
      minStepsBetweenThumbs: u = 0,
      preserveThumbOrder: m = !1,
      defaultValue: p = [o],
      value: f,
      onValueChange: h = /* @__PURE__ */ le(() => {
      }, "onValueChange"),
      onValueCommit: x = /* @__PURE__ */ le(() => {
      }, "onValueCommit"),
      inverted: v = !1,
      form: b,
      ...g
    } = t, y = d.useRef(/* @__PURE__ */ new Set()), w = d.useRef(0), C = d.useRef(!1), k = s === vh.Horizontal ? X_ : q_, [P, E] = d.useState(null), R = J(n, E), [T = [], O] = Ee({
      prop: f,
      defaultProp: p,
      onChange: /* @__PURE__ */ le((j) => {
        var F;
        (F = [...y.current][w.current]) == null || F.focus({
          preventScroll: !0,
          focusVisible: C.current
        }), C.current = !1, h(j);
      }, "onChange")
    }), M = d.useRef(T), W = d.useRef(T);
    d.useEffect(() => {
      const j = b ? P == null ? void 0 : P.ownerDocument.getElementById(b) : P == null ? void 0 : P.closest("form");
      if (j instanceof HTMLFormElement) {
        const I = /* @__PURE__ */ le(() => O(W.current), "reset");
        return j.addEventListener("reset", I), () => j.removeEventListener("reset", I);
      }
    }, [P, b, O]);
    function K(j) {
      const I = Fy(T, j);
      Y(j, I);
    }
    le(K, "handleSlideStart");
    function te(j) {
      Y(j, w.current);
    }
    le(te, "handleSlideMove");
    function q() {
      String(T) !== String(M.current) && x(T);
    }
    le(q, "handleSlideEnd");
    function Y(j, I, { commit: F } = { commit: !1 }) {
      const ee = Kf(a), N = mi(Math.round((j - o) / a) * a + o, ee), H = Co(N, [o, i]);
      O((X = []) => {
        const L = u * a, D = m ? Co(H, [
          X[I - 1] === void 0 ? o : X[I - 1] + L,
          X[I + 1] === void 0 ? i : X[I + 1] - L
        ]) : H, Q = $y(X, D, I);
        if (By(Q, L)) {
          w.current = m ? I : Q.indexOf(D);
          const U = String(Q) !== String(X);
          return U && F && x(Q), U ? Q : X;
        } else
          return X;
      });
    }
    return le(Y, "updateValues"), /* @__PURE__ */ l.jsx(
      K_,
      {
        scope: t.__scopeSlider,
        name: r,
        disabled: c,
        min: o,
        max: i,
        valueIndexToChangeRef: w,
        thumbs: y.current,
        values: T,
        orientation: s,
        form: b,
        children: /* @__PURE__ */ l.jsx(Uu.Provider, { scope: t.__scopeSlider, children: /* @__PURE__ */ l.jsx(Uu.Slot, { scope: t.__scopeSlider, children: /* @__PURE__ */ l.jsx(
          k,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...g,
            ref: R,
            onPointerDown: _(g.onPointerDown, () => {
              c || (M.current = T, C.current = !1);
            }),
            min: o,
            max: i,
            inverted: v,
            onSlideStart: c ? void 0 : K,
            onSlideMove: c ? void 0 : te,
            onSlideEnd: c ? void 0 : q,
            onHomeKeyDown: () => {
              c || (C.current = !0, Y(o, 0, { commit: !0 }));
            },
            onEndKeyDown: () => {
              c || (C.current = !0, Y(i, T.length - 1, { commit: !0 }));
            },
            onStepKeyDown: ({ event: j, direction: I }) => {
              if (!c) {
                C.current = !0;
                const N = Ty.includes(j.key) || j.shiftKey && Ry.includes(j.key) ? 10 : 1, H = w.current, X = T[H], L = Hy(X, {
                  min: o,
                  step: a,
                  direction: I,
                  multiplier: N
                });
                Y(L, H, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }, "Slider")
), [_y, Iy] = Gf(ca, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), X_ = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ le(function(t, n) {
    const {
      min: r,
      max: o,
      dir: i,
      inverted: a,
      onSlideStart: s,
      onSlideMove: c,
      onSlideEnd: u,
      onStepKeyDown: m,
      ...p
    } = t, [f, h] = d.useState(null), x = J(n, h), v = d.useRef(void 0), b = Jt(i), g = b === U_.LTR, y = g && !a || !g && a;
    function w(C) {
      const S = v.current || f.getBoundingClientRect(), k = [0, S.width], E = El(k, y ? [r, o] : [o, r]);
      return v.current = S, E(C - S.left);
    }
    return le(w, "getValueFromPointer"), /* @__PURE__ */ l.jsx(
      _y,
      {
        scope: t.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ l.jsx(
          Ay,
          {
            dir: b,
            "data-orientation": "horizontal",
            ...p,
            ref: x,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (C) => {
              const S = w(C.clientX);
              s == null || s(S);
            },
            onSlideMove: (C) => {
              const S = w(C.clientX);
              c == null || c(S);
            },
            onSlideEnd: () => {
              v.current = void 0, u == null || u();
            },
            onStepKeyDown: (C) => {
              const k = My[y ? "from-left" : "from-right"].includes(C.key);
              m == null || m({ event: C, direction: k ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderHorizontal")
), q_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ le(function(t, n) {
    const {
      min: r,
      max: o,
      inverted: i,
      onSlideStart: a,
      onSlideMove: s,
      onSlideEnd: c,
      onStepKeyDown: u,
      ...m
    } = t, p = d.useRef(null), f = J(n, p), h = d.useRef(void 0), x = !i;
    function v(b) {
      const g = h.current || p.current.getBoundingClientRect(), y = [0, g.height], C = El(y, x ? [o, r] : [r, o]);
      return h.current = g, C(b - g.top);
    }
    return le(v, "getValueFromPointer"), /* @__PURE__ */ l.jsx(
      _y,
      {
        scope: t.__scopeSlider,
        startEdge: x ? "bottom" : "top",
        endEdge: x ? "top" : "bottom",
        size: "height",
        direction: x ? 1 : -1,
        children: /* @__PURE__ */ l.jsx(
          Ay,
          {
            "data-orientation": "vertical",
            ...m,
            ref: f,
            style: {
              ...m.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (b) => {
              const g = v(b.clientY);
              a == null || a(g);
            },
            onSlideMove: (b) => {
              const g = v(b.clientY);
              s == null || s(g);
            },
            onSlideEnd: () => {
              h.current = void 0, c == null || c();
            },
            onStepKeyDown: (b) => {
              const y = My[x ? "from-bottom" : "from-top"].includes(b.key);
              u == null || u({ event: b, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }, "SliderVertical")
), Ay = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ le(function(t, n) {
    const {
      __scopeSlider: r,
      onSlideStart: o,
      onSlideMove: i,
      onSlideEnd: a,
      onHomeKeyDown: s,
      onEndKeyDown: c,
      onStepKeyDown: u,
      ...m
    } = t, p = ua(ca, r);
    return /* @__PURE__ */ l.jsx(
      B.span,
      {
        ...m,
        ref: n,
        onKeyDown: _(t.onKeyDown, (f) => {
          f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (c(f), f.preventDefault()) : Ty.concat(Ry).includes(f.key) && (u(f), f.preventDefault());
        }),
        onPointerDown: _(t.onPointerDown, (f) => {
          const h = f.target;
          h.setPointerCapture(f.pointerId), f.preventDefault(), p.thumbs.has(h) ? h.focus({ preventScroll: !0, focusVisible: !1 }) : o(f);
        }),
        onPointerMove: _(t.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && i(f);
        }),
        onPointerUp: _(t.onPointerUp, (f) => {
          const h = f.target;
          h.hasPointerCapture(f.pointerId) && (h.releasePointerCapture(f.pointerId), a(f));
        })
      }
    );
  }, "SliderImpl")
), Q_ = "SliderTrack", Z_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ le(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = ua(Q_, r);
    return /* @__PURE__ */ l.jsx(
      B.span,
      {
        "data-disabled": i.disabled ? "" : void 0,
        "data-orientation": i.orientation,
        ...o,
        ref: n
      }
    );
  }, "SliderTrack")
), xh = "SliderRange", J_ = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ le(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = ua(xh, r), a = Iy(xh, r), s = d.useRef(null), c = J(n, s), u = i.values.length, m = i.values.map(
      (h) => Wf(h, i.min, i.max)
    ), p = u > 1 ? Math.min(...m) : 0, f = 100 - Math.max(...m);
    return /* @__PURE__ */ l.jsx(
      B.span,
      {
        "data-orientation": i.orientation,
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: c,
        style: {
          ...t.style,
          [a.startEdge]: p + "%",
          [a.endEdge]: f + "%"
        }
      }
    );
  }, "SliderRange")
), eI = "SliderThumb", [tI, Dy] = Gf(eI), nI = "SliderThumbProvider";
function Oy(e) {
  const {
    __scopeSlider: t,
    name: n,
    children: r,
    // @ts-expect-error internal render prop
    internal_do_not_use_render: o
  } = e, i = ua(nI, t), a = G_(t), [s, c] = d.useState(null), u = d.useMemo(
    () => s ? a().findIndex((b) => b.ref.current === s) : -1,
    [a, s]
  ), m = ta(s), p = s ? !!i.form || !!s.closest("form") : !0, f = i.values[u], h = n ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0), x = f === void 0 ? 0 : Wf(f, i.min, i.max);
  d.useEffect(() => {
    if (s)
      return i.thumbs.add(s), () => {
        i.thumbs.delete(s);
      };
  }, [s, i.thumbs]);
  const v = {
    value: f,
    name: h,
    form: i.form,
    isFormControl: p,
    index: u,
    thumb: s,
    onThumbChange: c,
    percent: x,
    size: m
  };
  return /* @__PURE__ */ l.jsx(tI, { scope: t, ...v, children: Uy(o) ? o(v) : r });
}
le(Oy, "SliderThumbProvider");
var yc = "SliderThumbTrigger", rI = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ le(function(t, n) {
    const { __scopeSlider: r, ...o } = t, i = ua(yc, r), a = Iy(yc, r), { index: s, value: c, percent: u, size: m, onThumbChange: p } = Dy(
      yc,
      r
    ), f = J(n, p), h = zy(s, i.values.length), x = m == null ? void 0 : m[a.size], v = x ? Ly(x, u, a.direction) : 0;
    return /* @__PURE__ */ l.jsx(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${u}% + ${v}px)`
        },
        children: /* @__PURE__ */ l.jsx(Uu.ItemSlot, { scope: r, children: /* @__PURE__ */ l.jsx(
          B.span,
          {
            role: "slider",
            "aria-label": t["aria-label"] || h,
            "aria-valuemin": i.min,
            "aria-valuenow": c,
            "aria-valuemax": i.max,
            "aria-orientation": i.orientation,
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? "" : void 0,
            tabIndex: i.disabled ? void 0 : 0,
            ...o,
            ref: f,
            style: c === void 0 ? { display: "none" } : t.style,
            onFocus: _(t.onFocus, () => {
              i.valueIndexToChangeRef.current = s;
            })
          }
        ) })
      }
    );
  }, "SliderThumbTrigger")
), oI = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ le(function(t, n) {
    const { __scopeSlider: r, name: o, ...i } = t;
    return /* @__PURE__ */ l.jsx(
      Oy,
      {
        __scopeSlider: r,
        name: o,
        internal_do_not_use_render: ({ index: a, isFormControl: s }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            rI,
            {
              ...i,
              ref: n,
              __scopeSlider: r
            }
          ),
          s ? /* @__PURE__ */ l.jsx(
            aI,
            {
              __scopeSlider: r
            },
            a
          ) : null
        ] })
      }
    );
  }, "SliderThumb")
), iI = "SliderBubbleInput", aI = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ le(function({ __scopeSlider: t, ...n }, r) {
    const { value: o, name: i, form: a } = Dy(iI, t), s = d.useRef(null), c = J(s, r), u = Sl(o);
    return d.useEffect(() => {
      const m = s.current;
      if (!m) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(p, "value").set;
      if (u !== o && h) {
        const x = new Event("input", { bubbles: !0 });
        h.call(m, o), m.dispatchEvent(x);
      }
    }, [u, o]), /* @__PURE__ */ l.jsx(
      B.input,
      {
        style: { display: "none" },
        name: i,
        form: a,
        ...n,
        ref: c,
        defaultValue: o
      }
    );
  }, "SliderBubbleInput")
);
function $y(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, i) => o - i);
}
le($y, "getNextSortedValues");
function Wf(e, t, n) {
  const i = 100 / (n - t) * (e - t);
  return Co(i, [0, 100]);
}
le(Wf, "convertValueToPercentage");
function zy(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
le(zy, "getLabel");
function Fy(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
le(Fy, "getClosestValueIndex");
function Ly(e, t, n) {
  const r = e / 2, i = El([0, 50], [0, r]);
  return (r - i(t) * n) * n;
}
le(Ly, "getThumbInBoundsOffset");
function Vy(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
le(Vy, "getStepsBetweenValues");
function By(e, t) {
  if (t > 0) {
    const n = Vy(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
le(By, "hasMinStepsBetweenValues");
function El(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
le(El, "linearScale");
function Kf(e) {
  if (!Number.isFinite(e)) return 0;
  const t = e.toString();
  if (t.includes("e")) {
    const [r, o] = t.split("e"), i = r.split(".")[1] || "", a = Number(o);
    return Math.max(0, i.length - a);
  }
  const n = t.split(".")[1];
  return n ? n.length : 0;
}
le(Kf, "getDecimalCount");
function mi(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
le(mi, "roundValue");
function Hy(e, {
  min: t,
  step: n,
  direction: r,
  multiplier: o
}) {
  const i = Kf(n), a = (e - t) / n, s = Math.round(a), c = mi(s * n + t, i) === mi(e, i);
  let u;
  return c ? u = s + o * r : r > 0 ? u = Math.ceil(a) : u = Math.floor(a), mi(u * n + t, i);
}
le(Hy, "getNextStepValue");
function Uy(e) {
  return typeof e == "function";
}
le(Uy, "isFunction");
const Gy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(
  Y_,
  {
    ref: n,
    className: we("relative flex h-5 w-full touch-none select-none items-center", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(Z_, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ l.jsx(J_, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ l.jsx(oI, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Gy.displayName = "Slider";
function sI({ node: e }) {
  const t = e.props, n = d.useId();
  return /* @__PURE__ */ l.jsx(
    yt,
    {
      label: t.label,
      description: t.description,
      htmlFor: n,
      right: t.showValue ? t.value : void 0,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsx(
        Gy,
        {
          id: n,
          min: t.min,
          max: t.max,
          step: t.step,
          value: [t.value],
          disabled: t.disabled,
          onValueChange: ([r]) => e.setValue(r),
          onValueCommit: ([r]) => e.emit("Committed", r)
        }
      )
    }
  );
}
function lI(e, t, n) {
  if (t === n || t < 0 || n < 0 || t >= e.length || n >= e.length) return e;
  const r = [...e], [o] = r.splice(t, 1);
  return r.splice(n, 0, o), r;
}
function cI({ node: e }) {
  const t = e.props, [n, r] = d.useState(t.items), [o, i] = d.useState(null), a = d.useRef(null);
  d.useEffect(() => r(t.items), [t.items]);
  const s = (f, h) => {
    const x = lI(n, f, h);
    x !== n && (r(x), e.emit("Changed", x));
  }, c = (f, h) => {
    const x = t.orientation === "horizontal" ? "ArrowLeft" : "ArrowUp", v = t.orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (f.key !== x && f.key !== v) return;
    f.preventDefault();
    const b = f.currentTarget.closest("ul"), g = f.key === x ? -1 : 1, y = Math.min(n.length - 1, Math.max(0, h + g));
    y !== h && (s(h, y), requestAnimationFrame(() => {
      var w;
      return (w = b == null ? void 0 : b.querySelectorAll("[data-sort-handle]")[y]) == null ? void 0 : w.focus();
    }));
  }, u = (f, h) => {
    f.button === 0 && (f.preventDefault(), f.currentTarget.setPointerCapture(f.pointerId), a.current = { pointerId: f.pointerId, itemId: h }, i(h));
  }, m = (f) => {
    var g;
    const h = a.current;
    if (!h || h.pointerId !== f.pointerId) return;
    const x = (g = document.elementFromPoint(f.clientX, f.clientY)) == null ? void 0 : g.closest("[data-sort-index]"), v = Number(x == null ? void 0 : x.dataset.sortIndex), b = n.findIndex((y) => y.id === h.itemId);
    x && Number.isInteger(v) && b !== v && s(b, v);
  }, p = (f) => {
    var h;
    ((h = a.current) == null ? void 0 : h.pointerId) === f.pointerId && (a.current = null, i(null));
  };
  return z(
    e,
    /* @__PURE__ */ l.jsx("ul", { "aria-label": t.label, className: `grid gap-2 ${t.orientation === "horizontal" ? "grid-flow-col auto-cols-max" : ""}`, children: n.map((f, h) => {
      var x;
      return /* @__PURE__ */ l.jsxs(
        "li",
        {
          "data-sort-index": h,
          draggable: !f.disabled,
          onDragStart: (v) => {
            i(f.id), v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", f.id);
          },
          onDragOver: (v) => v.preventDefault(),
          onDrop: (v) => {
            v.preventDefault();
            const b = v.dataTransfer.getData("text/plain") || o;
            s(n.findIndex((g) => g.id === b), h), i(null);
          },
          onDragEnd: () => i(null),
          className: `flex min-w-0 items-center gap-3 rounded-md border bg-card p-3 transition-opacity ${o === f.id ? "opacity-40" : ""}`,
          children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                type: "button",
                "data-sort-handle": !0,
                disabled: f.disabled,
                "aria-label": `Reorder ${f.label}`,
                onKeyDown: (v) => c(v, h),
                onPointerDown: (v) => u(v, f.id),
                onPointerMove: m,
                onPointerUp: p,
                onPointerCancel: p,
                className: "cursor-grab touch-none rounded px-1 text-muted-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:cursor-grabbing disabled:cursor-not-allowed",
                children: /* @__PURE__ */ l.jsx("span", { "aria-hidden": "true", children: "⠿" })
              }
            ),
            /* @__PURE__ */ l.jsx("div", { className: "min-w-0 flex-1", children: (x = f.content) != null && x.length ? oe(f.content) : f.label })
          ]
        },
        f.id
      );
    }) })
  );
}
function uI({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("span", { role: "status", className: "inline-flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ l.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: "inline-block animate-spin rounded-full border-2 border-current border-r-transparent",
          style: { width: t.size, height: t.size }
        }
      ),
      t.label ? /* @__PURE__ */ l.jsx("span", { children: t.label }) : null
    ] })
  );
}
function dI({ node: e }) {
  const t = e.props, n = `sen-spinning-text-${d.useId().replace(/[^a-zA-Z0-9_-]/g, "")}`, r = Math.max(16, t.radius), o = r * 2 + 24, i = `${t.text}  •  ${t.text}  •  `, a = 2 * Math.PI * r;
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { className: `sen-spinning-text relative mx-auto aspect-square ${t.pauseOnHover ? "sen-spinning-text-pause" : ""}`, style: { width: o, height: o }, children: /* @__PURE__ */ l.jsxs("svg", { viewBox: `0 0 ${o} ${o}`, role: "img", "aria-label": t.label, className: "h-full w-full", children: [
      /* @__PURE__ */ l.jsx("defs", { children: /* @__PURE__ */ l.jsx("path", { id: n, d: `M ${o / 2},${o / 2} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0` }) }),
      /* @__PURE__ */ l.jsx("g", { className: "origin-center animate-sen-orbit motion-reduce:animate-none", style: { animationDuration: `${Math.max(1, t.duration)}s`, animationDirection: t.reverse ? "reverse" : "normal" }, children: /* @__PURE__ */ l.jsx("text", { fill: "currentColor", fontSize: "11", letterSpacing: "1.5", className: "font-medium uppercase", children: /* @__PURE__ */ l.jsx("textPath", { href: `#${n}`, startOffset: "0", textLength: a, lengthAdjust: "spacing", children: i }) }) })
    ] }) })
  );
}
const fI = { start: "flex-start", center: "center", end: "flex-end", stretch: "stretch" }, pI = { start: "flex-start", center: "center", end: "flex-end", between: "space-between" };
function mI({ node: e }) {
  const t = e.props;
  return z(e, /* @__PURE__ */ l.jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: t.direction,
        flexWrap: t.wrap ? "wrap" : "nowrap",
        alignItems: fI[t.align],
        justifyContent: pI[t.justify],
        gap: yo(t.gap),
        padding: yo(t.padding),
        minWidth: 0
      },
      children: oe(t.children)
    }
  ));
}
function hI({ node: e }) {
  var a;
  const t = e.props, n = t.steps, r = Math.min(Math.max(0, t.value), Math.max(0, n.length - 1)), o = n[r], i = r === n.length - 1;
  return z(
    e,
    /* @__PURE__ */ l.jsxs("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ l.jsx("ol", { className: `grid gap-4 ${t.orientation === "horizontal" ? "sm:grid-cols-3" : ""}`, "aria-label": "Progress", children: n.map((s, c) => {
        const u = c === r, m = c < r, p = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("span", { className: `grid size-8 shrink-0 place-items-center rounded-full border text-sm font-medium ${u || m ? "border-primary bg-primary text-primary-foreground" : "border-input text-muted-foreground"}`, children: m ? "✓" : c + 1 }),
          /* @__PURE__ */ l.jsxs("span", { className: "grid gap-1 text-left", children: [
            /* @__PURE__ */ l.jsx("span", { className: `text-sm font-medium ${u ? "text-foreground" : "text-muted-foreground"}`, children: s.title }),
            s.description && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground", children: s.description })
          ] })
        ] });
        return /* @__PURE__ */ l.jsx("li", { "aria-current": u ? "step" : void 0, children: t.allowJump ? /* @__PURE__ */ l.jsx("button", { type: "button", className: "flex items-start gap-3 text-left", onClick: () => e.setValue(c), "aria-label": `Go to ${s.title}`, children: p }) : /* @__PURE__ */ l.jsx("div", { className: "flex items-start gap-3", children: p }) }, s.id);
      }) }),
      o && /* @__PURE__ */ l.jsxs("section", { "aria-live": "polite", "aria-labelledby": `${o.id}-title`, className: "grid gap-3", children: [
        /* @__PURE__ */ l.jsx("h3", { id: `${o.id}-title`, className: "font-medium", children: o.title }),
        (a = o.content) != null && a.length ? /* @__PURE__ */ l.jsx("div", { children: oe(o.content) }) : null
      ] }),
      /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between gap-3 border-t pt-4", children: [
        /* @__PURE__ */ l.jsx(bo, { variant: "outline", disabled: r === 0, onClick: () => e.setValue(r - 1), children: t.backText }),
        /* @__PURE__ */ l.jsx(
          bo,
          {
            disabled: !n.length,
            onClick: () => {
              i ? e.emit("Completed") : e.setValue(r + 1);
            },
            children: i ? t.finishText : t.nextText
          }
        )
      ] })
    ] })
  );
}
var gI = Object.defineProperty, er = (e, t) => gI(e, "name", { value: t, configurable: !0 }), Yf = "Switch", [vI, tD] = /* @__PURE__ */ ke(Yf), [xI, Xf] = vI(Yf);
function Wy(e) {
  const {
    __scopeSwitch: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: i,
    form: a,
    name: s,
    onCheckedChange: c,
    required: u,
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [f, h] = Ee({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Yf
  }), [x, v] = d.useState(null), [b, g] = d.useState(null), y = d.useRef(!1), [w, C] = d.useReducer(
    (P) => P + 1,
    0
  ), S = x ? !!a || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: f,
    setChecked: h,
    disabled: i,
    control: x,
    setControl: v,
    name: s,
    form: a,
    value: m,
    hasConsumerStoppedPropagationRef: y,
    userInteractionCount: w,
    onUserInteraction: C,
    required: u,
    defaultChecked: o,
    isFormControl: S,
    bubbleInput: b,
    setBubbleInput: g
  };
  return /* @__PURE__ */ l.jsx(xI, { scope: t, ...k, children: Ky(p) ? p(k) : r });
}
er(Wy, "SwitchProvider");
var wI = "SwitchTrigger", yI = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ er(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
    const {
      control: i,
      form: a,
      value: s,
      disabled: c,
      checked: u,
      required: m,
      setControl: p,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      onUserInteraction: x,
      isFormControl: v,
      bubbleInput: b
    } = Xf(wI, t), g = J(o, p), y = d.useRef(u);
    return d.useEffect(() => {
      const w = a ? i == null ? void 0 : i.ownerDocument.getElementById(a) : i == null ? void 0 : i.form;
      if (w instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ er(() => f(y.current), "reset");
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [i, a, f]), /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-required": m,
        "data-state": qf(u),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: s,
        ...r,
        ref: g,
        onClick: _(n, (w) => {
          x(), f((C) => !C), b && v && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), bI = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ er(function(t, n) {
    const {
      __scopeSwitch: r,
      name: o,
      checked: i,
      defaultChecked: a,
      required: s,
      disabled: c,
      value: u,
      onCheckedChange: m,
      form: p,
      ...f
    } = t;
    return /* @__PURE__ */ l.jsx(
      Wy,
      {
        __scopeSwitch: r,
        checked: i,
        defaultChecked: a,
        disabled: c,
        required: s,
        onCheckedChange: m,
        name: o,
        form: p,
        value: u,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            yI,
            {
              ...f,
              ref: n,
              __scopeSwitch: r
            }
          ),
          h && /* @__PURE__ */ l.jsx(
            PI,
            {
              __scopeSwitch: r
            }
          )
        ] })
      }
    );
  }, "Switch")
), CI = "SwitchThumb", SI = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ er(function(t, n) {
    const { __scopeSwitch: r, ...o } = t, i = Xf(CI, r);
    return /* @__PURE__ */ l.jsx(
      B.span,
      {
        "data-state": qf(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "SwitchThumb")
), kI = "SwitchBubbleInput", PI = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ er(function({ __scopeSwitch: t, onClick: n, ...r }, o) {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: a,
      userInteractionCount: s,
      checked: c,
      defaultChecked: u,
      required: m,
      disabled: p,
      name: f,
      value: h,
      form: x,
      bubbleInput: v,
      setBubbleInput: b
    } = Xf(kI, t), g = J(o, b), y = ta(i), w = d.useRef(!1), C = d.useRef(c), S = d.useRef(s);
    d.useEffect(() => {
      const P = v;
      if (!P) return;
      const E = window.HTMLInputElement.prototype, T = Object.getOwnPropertyDescriptor(
        E,
        "checked"
      ).set, O = s !== S.current;
      S.current = s;
      const M = C.current !== c;
      C.current = c;
      const W = !(O && a.current);
      if (M && T) {
        w.current = !O;
        const K = new Event("click", { bubbles: W });
        T.call(P, c), P.dispatchEvent(K), w.current = !1;
      }
    }, [v, c, a, s]);
    const k = d.useRef(c);
    return /* @__PURE__ */ l.jsx(
      B.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? k.current,
        required: m,
        disabled: p,
        name: f,
        value: h,
        form: x,
        ...r,
        tabIndex: -1,
        ref: g,
        onClick: _(n, (P) => {
          w.current && P.stopPropagation();
        }),
        style: {
          ...r.style,
          ...y,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }, "SwitchBubbleInput")
);
function Ky(e) {
  return typeof e == "function";
}
er(Ky, "isFunction");
function qf(e) {
  return e ? "checked" : "unchecked";
}
er(qf, "getState");
const Yy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  bI,
  {
    ref: n,
    className: we(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(SI, { className: "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" })
  }
));
Yy.displayName = "Switch";
function EI({ node: e }) {
  const t = e.props, n = d.useId();
  return /* @__PURE__ */ l.jsx(
    nw,
    {
      label: t.label,
      description: t.description,
      htmlFor: n,
      className: t.className,
      style: t.style,
      attributes: t.attributes,
      animation: t.animation,
      children: /* @__PURE__ */ l.jsx(Yy, { id: n, checked: t.value, disabled: t.disabled, onCheckedChange: (r) => e.setValue(r) })
    }
  );
}
function jI({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ l.jsxs("table", { className: "w-full caption-bottom border-collapse text-sm", children: [
      t.caption && /* @__PURE__ */ l.jsx("caption", { className: "mt-4 text-sm text-muted-foreground", children: t.caption }),
      t.headers.length > 0 && /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { className: "border-b", children: t.headers.map((n, r) => /* @__PURE__ */ l.jsx("th", { scope: "col", className: "h-10 px-3 text-left align-middle font-medium text-muted-foreground", children: n }, `${n}-${r}`)) }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: t.rows.map((n, r) => /* @__PURE__ */ l.jsx("tr", { className: "border-b transition-colors hover:bg-muted/50", children: n.map((o, i) => /* @__PURE__ */ l.jsx("td", { className: "p-3 align-middle", children: yn(o) }, i)) }, r)) })
    ] }) })
  );
}
var NI = Object.defineProperty, zo = (e, t) => NI(e, "name", { value: t, configurable: !0 }), Xy = {
  Automatic: "automatic",
  Manual: "manual"
}, Qf = "Tabs", [TI, nD] = /* @__PURE__ */ ke(Qf, [
  ar
]), qy = ar(), [RI, Zf] = TI(Qf), MI = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ zo(function(t, n) {
    const {
      __scopeTabs: r,
      value: o,
      onValueChange: i,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: c,
      activationMode: u = Xy.Automatic,
      ...m
    } = t, p = Jt(c), [f, h] = Ee({
      prop: o,
      onChange: i,
      defaultProp: a ?? "",
      caller: Qf
    });
    return /* @__PURE__ */ l.jsx(
      RI,
      {
        scope: r,
        baseId: pe(),
        value: f,
        onValueChange: h,
        orientation: s,
        dir: p,
        activationMode: u,
        children: /* @__PURE__ */ l.jsx(
          B.div,
          {
            dir: p,
            "data-orientation": s,
            ...m,
            ref: n
          }
        )
      }
    );
  }, "Tabs")
), _I = "TabsList", II = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ zo(function(t, n) {
    const { __scopeTabs: r, loop: o = !0, ...i } = t, a = Zf(_I, r), s = qy(r);
    return /* @__PURE__ */ l.jsx(
      xl,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: /* @__PURE__ */ l.jsx(
          B.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...i,
            ref: n
          }
        )
      }
    );
  }, "TabsList")
), AI = "TabsTrigger", DI = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ zo(function(t, n) {
    const { __scopeTabs: r, value: o, disabled: i = !1, ...a } = t, s = Zf(AI, r), c = qy(r), u = Jf(s.baseId, o), m = ep(s.baseId, o), p = o === s.value;
    return /* @__PURE__ */ l.jsx(
      wl,
      {
        asChild: !0,
        ...c,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ l.jsx(
          B.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": p,
            "aria-controls": m,
            "data-state": p ? "active" : "inactive",
            "data-disabled": i ? "" : void 0,
            disabled: i,
            id: u,
            ...a,
            ref: n,
            onMouseDown: _(t.onMouseDown, (f) => {
              !i && f.button === 0 && f.ctrlKey === !1 ? (f.currentTarget.focus(), s.onValueChange(o)) : f.preventDefault();
            }),
            onKeyDown: _(t.onKeyDown, (f) => {
              i || f.target !== f.currentTarget || [" ", "Enter"].includes(f.key) && s.onValueChange(o);
            }),
            onFocus: _(t.onFocus, () => {
              const f = s.activationMode !== Xy.Manual;
              !p && !i && f && s.onValueChange(o);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), OI = "TabsContent", $I = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ zo(function(t, n) {
    const { __scopeTabs: r, value: o, forceMount: i, children: a, ...s } = t, c = Zf(OI, r), u = Jf(c.baseId, o), m = ep(c.baseId, o), p = o === c.value, f = d.useRef(p);
    return d.useEffect(() => {
      const h = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ l.jsx(nt, { present: i || p, children: ({ present: h }) => /* @__PURE__ */ l.jsx(
      B.div,
      {
        "data-state": p ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": u,
        hidden: !h,
        id: m,
        tabIndex: 0,
        ...s,
        ref: n,
        style: {
          ...t.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: h && a
      }
    ) });
  }, "TabsContent")
);
function Jf(e, t) {
  return `${e}-trigger-${t}`;
}
zo(Jf, "makeTriggerId");
function ep(e, t) {
  return `${e}-content-${t}`;
}
zo(ep, "makeContentId");
const zI = MI, Qy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  II,
  {
    ref: n,
    className: we(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col",
      e
    ),
    ...t
  }
));
Qy.displayName = "TabsList";
const Zy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  DI,
  {
    ref: n,
    className: we(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Zy.displayName = "TabsTrigger";
const Jy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  $I,
  {
    ref: n,
    className: we(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[orientation=vertical]:mt-0 data-[orientation=vertical]:flex-1",
      e
    ),
    ...t
  }
));
Jy.displayName = "TabsContent";
function FI({ node: e }) {
  var r;
  const t = e.props, n = t.items.some((o) => o.value === t.value && !o.disabled) ? t.value : ((r = t.items.find((o) => !o.disabled)) == null ? void 0 : r.value) ?? "";
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ l.jsxs(
      zI,
      {
        value: n,
        orientation: t.orientation,
        activationMode: t.activationMode,
        dir: t.dir,
        onValueChange: (o) => e.setValue(o),
        className: "flex w-full flex-col data-[orientation=vertical]:flex-row data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-3",
        children: [
          /* @__PURE__ */ l.jsx(Qy, { "aria-label": t.label || "Tabs", children: t.items.map((o) => /* @__PURE__ */ l.jsx(Zy, { value: o.value, disabled: o.disabled, children: o.label }, o.value)) }),
          t.items.map((o) => /* @__PURE__ */ l.jsx(Jy, { value: o.value, children: yn(o.content) }, o.value))
        ]
      }
    ) })
  );
}
const LI = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  destructive: "text-destructive"
}, VI = { normal: "font-normal", medium: "font-medium", bold: "font-bold" }, BI = { left: "text-left", center: "text-center", right: "text-right" };
function HI({ node: e }) {
  const t = e.props;
  return z(e, /* @__PURE__ */ l.jsx(
    "p",
    {
      className: we("whitespace-pre-wrap", LI[t.color], VI[t.weight], BI[t.align]),
      style: {
        fontSize: `var(--sen-text-${t.size})`,
        fontFamily: t.font === "mono" ? "var(--sen-font-mono)" : void 0
      },
      children: t.text
    }
  ));
}
function UI({ node: e }) {
  const t = e.props, n = d.useId();
  return z(
    e,
    /* @__PURE__ */ l.jsx(yt, { label: t.label, description: t.description, htmlFor: n, children: /* @__PURE__ */ l.jsx(
      "textarea",
      {
        id: n,
        value: t.value,
        placeholder: t.placeholder,
        rows: t.rows,
        disabled: t.disabled,
        required: t.required,
        className: "flex w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        onChange: (r) => e.setValue(r.currentTarget.value),
        onBlur: () => e.emit("Focused", !1),
        onFocus: () => e.emit("Focused", !0)
      }
    ) })
  );
}
function GI({ node: e }) {
  const t = e.props;
  return d.useEffect(() => {
    if (!t.open || t.duration <= 0) return;
    const n = setTimeout(() => {
      e.setValue(!1), e.emit("Dismissed");
    }, t.duration);
    return () => clearTimeout(n);
  }, [e, t.open, t.duration]), t.open ? z(
    e,
    /* @__PURE__ */ l.jsx("div", { role: t.variant === "destructive" ? "alert" : "status", className: `fixed bottom-4 right-4 z-[100] w-[min(24rem,calc(100vw-2rem))] rounded-lg border bg-background p-4 shadow-lg animate-sen-surface-in ${t.variant === "destructive" ? "border-destructive/50" : ""}`, children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "grid gap-1", children: [
        t.title && /* @__PURE__ */ l.jsx("p", { className: "text-sm font-semibold", children: t.title }),
        t.description && /* @__PURE__ */ l.jsx("p", { className: "text-sm text-muted-foreground", children: t.description })
      ] }),
      /* @__PURE__ */ l.jsx("button", { type: "button", "aria-label": "Dismiss notification", onClick: () => {
        e.setValue(!1), e.emit("Dismissed");
      }, className: "text-muted-foreground hover:text-foreground", children: "×" })
    ] }) })
  ) : null;
}
var WI = Object.defineProperty, KI = (e, t) => WI(e, "name", { value: t, configurable: !0 }), YI = "Toggle", eb = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ KI(function(t, n) {
    const { pressed: r, defaultPressed: o, onPressedChange: i, ...a } = t, [s, c] = Ee({
      prop: r,
      onChange: i,
      defaultProp: o ?? !1,
      caller: YI
    });
    return /* @__PURE__ */ l.jsx(
      B.button,
      {
        type: "button",
        "aria-pressed": s,
        "data-state": s ? "on" : "off",
        "data-disabled": t.disabled ? "" : void 0,
        ...a,
        ref: n,
        onClick: _(t.onClick, () => {
          t.disabled || c(!s);
        })
      }
    );
  }, "Toggle")
);
const XI = { sm: "h-8 px-2", default: "h-9 px-3", lg: "h-10 px-4" };
function qI({ node: e }) {
  const t = e.props;
  return z(
    e,
    /* @__PURE__ */ l.jsx(
      eb,
      {
        pressed: t.pressed,
        disabled: t.disabled,
        onPressedChange: (n) => e.setValue(n),
        className: we(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
          t.variant === "outline" && "border border-input bg-transparent shadow-sm",
          XI[t.size]
        ),
        children: t.text
      }
    )
  );
}
var QI = Object.defineProperty, tr = (e, t) => QI(e, "name", { value: t, configurable: !0 }), Fo = "ToggleGroup", Fi = {
  Single: "single",
  Multiple: "multiple"
}, [tb, rD] = /* @__PURE__ */ ke(Fo, [
  ar
]), nb = ar(), wh = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ tr(function(t, n) {
  const { type: r, ...o } = t;
  if (r === Fi.Single) {
    const i = o;
    return /* @__PURE__ */ l.jsx(ZI, { role: "radiogroup", ...i, ref: n });
  }
  if (r === Fi.Multiple) {
    const i = o;
    return /* @__PURE__ */ l.jsx(JI, { role: "toolbar", ...i, ref: n });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Fo}\``);
}, "ToggleGroup")), [rb, ob] = tb(Fo), ZI = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ tr(function(t, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: i = /* @__PURE__ */ tr(() => {
    }, "onValueChange"),
    ...a
  } = t, [s, c] = Ee({
    prop: r,
    defaultProp: o ?? "",
    onChange: i,
    caller: Fo
  });
  return /* @__PURE__ */ l.jsx(
    rb,
    {
      scope: t.__scopeToggleGroup,
      type: Fi.Single,
      value: d.useMemo(() => s ? [s] : [], [s]),
      onItemActivate: c,
      onItemDeactivate: d.useCallback(() => c(""), [c]),
      children: /* @__PURE__ */ l.jsx(ib, { ...a, ref: n })
    }
  );
}, "ToggleGroupImplSingle")), JI = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ tr(function(t, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: i = /* @__PURE__ */ tr(() => {
    }, "onValueChange"),
    ...a
  } = t, [s, c] = Ee({
    prop: r,
    defaultProp: o ?? [],
    onChange: i,
    caller: Fo
  }), u = d.useCallback(
    (p) => c((f = []) => [...f, p]),
    [c]
  ), m = d.useCallback(
    (p) => c((f = []) => f.filter((h) => h !== p)),
    [c]
  );
  return /* @__PURE__ */ l.jsx(
    rb,
    {
      scope: t.__scopeToggleGroup,
      type: Fi.Multiple,
      value: s,
      onItemActivate: u,
      onItemDeactivate: m,
      children: /* @__PURE__ */ l.jsx(ib, { ...a, ref: n })
    }
  );
}, "ToggleGroupImplMultiple")), [eA, tA] = tb(Fo), ib = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tr(function(t, n) {
    const {
      __scopeToggleGroup: r,
      disabled: o = !1,
      rovingFocus: i = !0,
      orientation: a,
      dir: s,
      loop: c = !0,
      ...u
    } = t, m = nb(r), p = Jt(s), f = { dir: p, ...u };
    return /* @__PURE__ */ l.jsx(eA, { scope: r, rovingFocus: i, disabled: o, children: i ? /* @__PURE__ */ l.jsx(
      xl,
      {
        asChild: !0,
        ...m,
        orientation: a,
        dir: p,
        loop: c,
        children: /* @__PURE__ */ l.jsx(B.div, { ...f, ref: n })
      }
    ) : /* @__PURE__ */ l.jsx(B.div, { ...f, ref: n }) });
  }, "ToggleGroupImpl")
), Gu = "ToggleGroupItem", yh = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tr(function(t, n) {
    const r = ob(Gu, t.__scopeToggleGroup), o = tA(Gu, t.__scopeToggleGroup), i = nb(t.__scopeToggleGroup), a = r.value.includes(t.value), s = o.disabled || t.disabled, c = { ...t, pressed: a, disabled: s }, u = d.useRef(null);
    return o.rovingFocus ? /* @__PURE__ */ l.jsx(
      wl,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: a,
        ref: u,
        children: /* @__PURE__ */ l.jsx(bh, { ...c, ref: n })
      }
    ) : /* @__PURE__ */ l.jsx(bh, { ...c, ref: n });
  }, "ToggleGroupItem")
), bh = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tr(function(t, n) {
    const { __scopeToggleGroup: r, value: o, ...i } = t, a = ob(Gu, r), s = { role: "radio", "aria-checked": t.pressed, "aria-pressed": void 0 }, c = a.type === Fi.Single ? s : void 0;
    return /* @__PURE__ */ l.jsx(
      eb,
      {
        ...c,
        ...i,
        ref: n,
        onPressedChange: (u) => {
          u ? a.onItemActivate(o) : a.onItemDeactivate(o);
        }
      }
    );
  }, "ToggleGroupItemImpl")
);
const nA = { sm: "h-8 px-2", default: "h-9 px-3", lg: "h-10 px-4" };
function rA({ node: e }) {
  const t = e.props, n = we(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    t.variant === "outline" && "border border-input bg-transparent shadow-sm",
    nA[t.size]
  );
  return z(
    e,
    /* @__PURE__ */ l.jsx("div", { children: t.type === "single" ? /* @__PURE__ */ l.jsx(
      wh,
      {
        type: "single",
        value: typeof t.value == "string" ? t.value : "",
        disabled: t.disabled,
        orientation: t.orientation,
        rovingFocus: t.rovingFocus,
        onValueChange: (r) => e.setValue(r),
        className: "inline-flex items-center justify-center",
        children: t.items.map((r) => /* @__PURE__ */ l.jsx(yh, { value: r.value, disabled: r.disabled, className: n, children: r.label }, r.value))
      }
    ) : /* @__PURE__ */ l.jsx(
      wh,
      {
        type: "multiple",
        value: Array.isArray(t.value) ? t.value : [],
        disabled: t.disabled,
        orientation: t.orientation,
        rovingFocus: t.rovingFocus,
        onValueChange: (r) => e.setValue(r),
        className: "inline-flex items-center justify-center",
        children: t.items.map((r) => /* @__PURE__ */ l.jsx(yh, { value: r.value, disabled: r.disabled, className: n, children: r.label }, r.value))
      }
    ) })
  );
}
var oA = Object.defineProperty, _e = (e, t) => oA(e, "name", { value: t, configurable: !0 }), [tp, oD] = /* @__PURE__ */ ke("Tooltip", [
  tn
]), jl = tn(), iA = "TooltipProvider", aA = 700, Wu = "tooltip.open", [sA, np] = tp(iA), lA = /* @__PURE__ */ _e((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = aA,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = d.useRef(!0), s = d.useRef(!1), c = d.useRef(0);
  return d.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ l.jsx(
    sA,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: d.useCallback(() => {
        r <= 0 || (window.clearTimeout(c.current), a.current = !1);
      }, [r]),
      onClose: d.useCallback(() => {
        r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          r
        ));
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: d.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
}, "TooltipProvider"), Ku = "Tooltip", [cA, da] = tp(Ku), uA = /* @__PURE__ */ _e((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: s
  } = e, c = np(Ku, e.__scopeTooltip), u = jl(t), [m, p] = d.useState(null), [f, h] = d.useState(void 0), x = pe(), v = d.useRef(0), b = a ?? c.disableHoverableContent, g = s ?? c.delayDuration, y = d.useRef(!1), [w, C] = Ee({
    prop: r,
    defaultProp: o ?? !1,
    onChange: /* @__PURE__ */ _e((T) => {
      T ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Wu))) : c.onClose(), i == null || i(T);
    }, "onChange"),
    caller: Ku
  }), S = d.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), k = d.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, y.current = !1, C(!0);
  }, [C]), P = d.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, C(!1);
  }, [C]), E = d.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      y.current = !0, C(!0), v.current = 0;
    }, g);
  }, [g, C]);
  d.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []);
  const R = f ?? x;
  return /* @__PURE__ */ l.jsx(na, { ...u, children: /* @__PURE__ */ l.jsx(
    cA,
    {
      scope: t,
      contentId: R,
      setContentId: h,
      open: w,
      stateAttribute: S,
      trigger: m,
      onTriggerChange: p,
      onTriggerEnter: d.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : k();
      }, [c.isOpenDelayedRef, E, k]),
      onTriggerLeave: d.useCallback(() => {
        b ? P() : (window.clearTimeout(v.current), v.current = 0);
      }, [P, b]),
      onOpen: k,
      onClose: P,
      disableHoverableContent: b,
      children: n
    }
  ) });
}, "Tooltip"), Ch = "TooltipTrigger", dA = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ _e(function(t, n) {
    const { __scopeTooltip: r, "aria-describedby": o, ...i } = t, a = da(Ch, r), s = np(Ch, r), c = jl(r), u = d.useRef(null), m = J(n, u, a.onTriggerChange), p = d.useRef(!1), f = d.useRef(!1), h = d.useCallback(() => p.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ l.jsx(ra, { asChild: !0, ...c, children: /* @__PURE__ */ l.jsx(
      B.button,
      {
        "aria-describedby": a.open ? mb(o, a.contentId) : o,
        "data-state": a.stateAttribute,
        ...i,
        ref: m,
        onPointerMove: _(t.onPointerMove, (x) => {
          x.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (a.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: _(t.onPointerLeave, () => {
          a.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: _(t.onPointerDown, () => {
          a.open && a.onClose(), p.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: _(t.onFocus, () => {
          p.current || a.onOpen();
        }),
        onBlur: _(t.onBlur, a.onClose),
        onClick: _(t.onClick, a.onClose)
      }
    ) });
  }, "TooltipTrigger")
), ab = "TooltipPortal", [fA, pA] = tp(ab, {
  forceMount: void 0
}), mA = /* @__PURE__ */ _e((e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, i = da(ab, t);
  return /* @__PURE__ */ l.jsx(fA, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(nt, { present: n || i.open, children: /* @__PURE__ */ l.jsx(_o, { asChild: !0, container: o, children: r }) }) });
}, "TooltipPortal"), Li = "TooltipContent", hA = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ _e(function(t, n) {
    const r = pA(Li, t.__scopeTooltip), { forceMount: o = r.forceMount, side: i = "top", ...a } = t, s = da(Li, t.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(nt, { present: o || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ l.jsx(sb, { side: i, ...a, ref: n }) : /* @__PURE__ */ l.jsx(gA, { side: i, ...a, ref: n }) });
  }, "TooltipContent")
), gA = /* @__PURE__ */ d.forwardRef(/* @__PURE__ */ _e(function(t, n) {
  const r = da(Li, t.__scopeTooltip), o = np(Li, t.__scopeTooltip), i = d.useRef(null), a = J(n, i), [s, c] = d.useState(null), { trigger: u, onClose: m } = r, p = i.current, { onPointerInTransitChange: f } = o, h = d.useCallback(() => {
    c(null), f(!1);
  }, [f]), x = d.useCallback(
    (v, b) => {
      const g = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = lb(y, g.getBoundingClientRect()), C = cb(y, w), S = ub(b.getBoundingClientRect()), k = fb([...C, ...S]);
      c(k), f(!0);
    },
    [f]
  );
  return d.useEffect(() => () => h(), [h]), d.useEffect(() => {
    if (u && p) {
      const v = /* @__PURE__ */ _e((g) => x(g, p), "handleTriggerLeave"), b = /* @__PURE__ */ _e((g) => x(g, u), "handleContentLeave");
      return u.addEventListener("pointerleave", v), p.addEventListener("pointerleave", b), () => {
        u.removeEventListener("pointerleave", v), p.removeEventListener("pointerleave", b);
      };
    }
  }, [u, p, x, h]), d.useEffect(() => {
    if (s) {
      const v = /* @__PURE__ */ _e((b) => {
        const g = b.target, y = { x: b.clientX, y: b.clientY }, w = (u == null ? void 0 : u.contains(g)) || (p == null ? void 0 : p.contains(g)), C = !db(y, s);
        w ? h() : C && (h(), m());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [u, p, s, m, h]), /* @__PURE__ */ l.jsx(sb, { ...t, ref: a });
}, "TooltipContentHoverable")), vA = /* @__PURE__ */ Gv("TooltipContent"), sb = /* @__PURE__ */ d.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ _e(function(t, n) {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": i,
      id: a,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      ...u
    } = t, m = da(Li, r), p = jl(r), { onClose: f } = m;
    d.useEffect(() => (document.addEventListener(Wu, f), () => document.removeEventListener(Wu, f)), [f]), d.useEffect(() => {
      if (m.trigger) {
        const x = /* @__PURE__ */ _e((v) => {
          v.target instanceof Node && v.target.contains(m.trigger) && f();
        }, "handleScroll");
        return window.addEventListener("scroll", x, { capture: !0 }), () => window.removeEventListener("scroll", x, { capture: !0 });
      }
    }, [m.trigger, f]);
    const { setContentId: h } = m;
    return Ne(() => (h(a), () => {
      h(void 0);
    }), [a, h]), /* @__PURE__ */ l.jsx(
      Mo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: c,
        onFocusOutside: (x) => x.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ l.jsxs(
          oa,
          {
            "data-state": m.stateAttribute,
            role: i ? void 0 : "tooltip",
            id: i ? void 0 : m.contentId,
            ...p,
            ...u,
            ref: n,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ l.jsx(vA, { children: o }),
              i ? /* @__PURE__ */ l.jsx(cM, { id: m.contentId, role: "tooltip", children: i }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), xA = /* @__PURE__ */ d.forwardRef(
  /* @__PURE__ */ _e(function(t, n) {
    const { __scopeTooltip: r, ...o } = t, i = jl(r);
    return /* @__PURE__ */ l.jsx(kw, { ...i, ...o, ref: n });
  }, "TooltipArrow")
);
function lb(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
_e(lb, "getExitSideFromRect");
function cb(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
_e(cb, "getPaddedExitPoints");
function ub(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
_e(ub, "getPointsFromRect");
function db(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i], c = t[a], u = s.x, m = s.y, p = c.x, f = c.y;
    m > r != f > r && n < (p - u) * (r - m) / (f - m) + u && (o = !o);
  }
  return o;
}
_e(db, "isPointInPolygon");
function fb(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), pb(t);
}
_e(fb, "getHull");
function pb(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], a = n[n.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
_e(pb, "getHullPresorted");
function mb(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
_e(mb, "concatAriaDescribedby");
function wA({ node: e }) {
  const t = e.props, n = wt();
  return /* @__PURE__ */ l.jsx(lA, { children: /* @__PURE__ */ l.jsxs(
    uA,
    {
      open: t.open,
      onOpenChange: (r) => e.setValue(r),
      delayDuration: t.delayDuration,
      children: [
        /* @__PURE__ */ l.jsx(dA, { className: "inline-flex h-9 items-center justify-center rounded-md border bg-background px-3 text-sm font-medium text-foreground shadow-sm hover:bg-accent", children: t.trigger }),
        /* @__PURE__ */ l.jsx(mA, { container: n ?? void 0, children: z(
          e,
          /* @__PURE__ */ l.jsxs(
            hA,
            {
              side: t.side,
              align: t.align,
              sideOffset: t.sideOffset,
              className: "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-md data-[state=delayed-open]:animate-sen-surface-in",
              children: [
                yn(t.content),
                /* @__PURE__ */ l.jsx(xA, { className: "fill-primary" })
              ]
            }
          )
        ) })
      ]
    }
  ) });
}
const yA = {
  h1: { tag: "h1", className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" },
  h2: { tag: "h2", className: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight" },
  h3: { tag: "h3", className: "scroll-m-20 text-2xl font-semibold tracking-tight" },
  h4: { tag: "h4", className: "scroll-m-20 text-xl font-semibold tracking-tight" },
  p: { tag: "p", className: "leading-7 [&:not(:first-child)]:mt-6" },
  blockquote: { tag: "blockquote", className: "mt-6 border-l-2 pl-6 italic" },
  lead: { tag: "p", className: "text-xl text-muted-foreground" },
  large: { tag: "p", className: "text-lg font-semibold" },
  small: { tag: "small", className: "text-sm font-medium leading-none" },
  muted: { tag: "p", className: "text-sm text-muted-foreground" },
  inlineCode: { tag: "code", className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" },
  list: { tag: "ul", className: "my-6 ml-6 list-disc [&>li]:mt-2" }
};
function bA({ node: e }) {
  const { tag: t, className: n } = yA[e.props.variant];
  return z(
    e,
    /* @__PURE__ */ l.jsx(t, { className: we(n), children: e.props.variant === "list" ? /* @__PURE__ */ l.jsx("li", { children: e.props.text }) : e.props.text })
  );
}
$("Accordion", BP);
$("Alert", HP);
$("AlertDialog", dj);
$("AnimatedList", fj);
$("AnimatedText", pj);
$("Animation", mj);
$("AppleDock", hj);
$("AspectRatio", gj);
$("Attachment", vj);
$("Autocomplete", yj);
$("Avatar", bj);
$("Badge", kj);
$("Breadcrumb", Pj);
$("Bubble", Ej);
$("Button", Nj);
$("ButtonGroup", Tj);
$("Calendar", _j);
$("Card", Oj);
$("Carousel", $j);
$("Chart", zj);
$("Checkbox", Qj);
$("CodeBlock", Zj);
$("Collapsible", Jj);
$("ColorPicker", tN);
$("Combobox", Z2);
$("Command", J2);
$("ContextMenu", HT);
$("DataTable", UT);
$("DatePicker", WT);
$("Dialog", KT);
$("Direction", YT);
$("Dots", qT);
$("Drawer", QT);
$("DropdownMenu", uR);
$("Empty", dR);
$("Field", xj);
$("FileUpload", mR);
$("Grid", gR);
$("HoverCard", jR);
$("Input", NR);
$("InputGroup", TR);
$("InputMask", RR);
$("InputOTP", MR);
$("Item", _R);
$("Kbd", IR);
$("Keybind", DR);
$("Label", OR);
$("Marker", zR);
$("Marquee", FR);
$("Menubar", eM);
$("Message", tM);
$("MessageScroller", nM);
$("NativeSelect", oM);
$("NavigationMenu", OM);
$("NumberTicker", $M);
$("OrbitingCircles", zM);
$("Pagination", FM);
$("Popover", LM);
$("Progress", VM);
$("Questionnaire", BM);
$("RadioGroup", HM);
$("Rating", UM);
$("Resizable", WM);
$("ScrollArea", KM);
$("Select", I_);
$("Separator", $_);
$("Sheet", F_);
$("ShineBorder", L_);
$("Sidebar", V_);
$("Skeleton", B_);
$("Slider", sI);
$("Sortable", cI);
$("Spinner", uI);
$("SpinningText", dI);
$("Stack", mI);
$("Stepper", hI);
$("Switch", EI);
$("Table", jI);
$("Tabs", FI);
$("Text", HI);
$("Textarea", UI);
$("Toast", GI);
$("Toggle", qI);
$("ToggleGroup", rA);
$("Tooltip", wA);
$("Typography", bA);
for (const e of d0())
  lk(e) || console.error(`[Sen] Component "${e}" is registered but has no renderer adapter.`);
const CA = {
  default: "",
  success: "border-l-[3px] border-l-green-500",
  destructive: "border-destructive/60"
};
function SA() {
  const e = d.useSyncExternalStore(Ur.subscribe, Ur.getSnapshot, Ur.getSnapshot);
  return /* @__PURE__ */ l.jsx("div", { className: "flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-2", style: { pointerEvents: "auto" }, children: e.map((t) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      role: "status",
      className: we(
        "relative animate-sen-in rounded-lg border bg-popover p-4 pr-9 text-popover-foreground shadow-lg",
        CA[t.variant]
      ),
      children: [
        t.title && /* @__PURE__ */ l.jsx("div", { className: "font-semibold leading-snug", children: t.title }),
        t.content && /* @__PURE__ */ l.jsx("div", { className: "text-muted-foreground", children: t.content }),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: () => Ur.dismiss(t.id),
            className: "absolute right-2 top-2 rounded-sm p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            children: /* @__PURE__ */ l.jsx(cP, { width: 14, height: 14 })
          }
        )
      ]
    },
    t.id
  )) });
}
let Fr;
function kA(e) {
  if (Fr === void 0)
    try {
      Fr = new CSSStyleSheet(), Fr.replaceSync(ym);
    } catch {
      Fr = null;
    }
  if (Fr && "adoptedStyleSheets" in e) {
    e.adoptedStyleSheets = [Fr];
    return;
  }
  const t = document.createElement("style");
  t.textContent = ym, e.appendChild(t);
}
function PA(e, t) {
  const n = document.createElement("style");
  n.textContent = t, e.appendChild(n);
}
function hb(e, t) {
  const n = document.createElement("div");
  n.setAttribute("data-sen", "");
  const r = n.attachShadow({ mode: "open" });
  if (kA(r), t)
    if ("adoptedStyleSheets" in r) {
      const a = new CSSStyleSheet();
      a.replaceSync(t), r.adoptedStyleSheets = [...r.adoptedStyleSheets, a];
    } else
      PA(r, t);
  const o = document.createElement("div");
  o.className = e ? "sen-root sen-surface" : "sen-root", r.appendChild(o);
  const i = o0(n);
  return { host: n, container: o, unregister: i };
}
function EA(e) {
  if (typeof document > "u") throw new Error("[Sen] Sen.Mount needs a browser: `document` is not defined.");
  if (e === void 0) return document.body ?? document.documentElement;
  if (typeof e != "string") return e;
  const t = document.querySelector(e);
  if (!t) throw new Error(`[Sen] Sen.Mount: nothing matches "${e}".`);
  return t;
}
function jA(e, t, n = {}) {
  const r = EA(t), { host: o, container: i, unregister: a } = hb(n.surface ?? !0, n.styles);
  r.appendChild(o);
  const s = Hd(i);
  return s.render(/* @__PURE__ */ l.jsx(Vv.Provider, { value: i, children: oe(Array.isArray(e) ? e : [e]) })), {
    host: o,
    Unmount() {
      s.unmount(), a(), o.remove();
    }
  };
}
let za = null;
function NA() {
  if (typeof document > "u" || za != null && za.isConnected) return;
  const { host: e, container: t } = hb(!1);
  Object.assign(e.style, {
    position: "fixed",
    right: "16px",
    bottom: "16px",
    zIndex: "2147483647",
    pointerEvents: "none"
  }), (document.body ?? document.documentElement).appendChild(e), Hd(t).render(/* @__PURE__ */ l.jsx(SA, {})), za = e;
}
const TA = "0.1.0";
function RA(e) {
  return NA(), s0(typeof e == "string" ? { content: e } : e);
}
function gb(...e) {
  console.log(...e);
}
function MA() {
  Object.defineProperty(globalThis, "print", { value: gb, configurable: !0, writable: !0 });
}
const iD = {
  version: TA,
  // setup
  Theme: i0,
  Mount: jA,
  Notify: RA,
  RegisterRenderer: $,
  GetRenderer: ak,
  GetDefaultRenderer: sk,
  CreateView: d.createElement,
  // values
  Flags: Lb,
  SaveConfig: Gb,
  LoadConfig: Wb,
  SetStorage: Ub,
  // COMPONENTS_START
  // layout
  Accordion: p0,
  AppleDock: w0,
  AspectRatio: y0,
  Breadcrumb: P0,
  Card: R0,
  Carousel: M0,
  Collapsible: D0,
  Direction: U0,
  Grid: Q0,
  Menubar: u1,
  MessageScroller: f1,
  NavigationMenu: m1,
  Pagination: v1,
  Resizable: S1,
  ScrollArea: k1,
  Sidebar: T1,
  Sortable: I1,
  Stack: O1,
  Stepper: $1,
  Tabs: V1,
  // inputs
  Autocomplete: C0,
  Button: j0,
  ButtonGroup: N0,
  Calendar: T0,
  Checkbox: I0,
  ColorPicker: $0,
  Combobox: z0,
  DatePicker: B0,
  Field: X0,
  FileUpload: q0,
  Input: J0,
  InputGroup: e1,
  InputMask: t1,
  InputOTP: n1,
  Keybind: a1,
  NativeSelect: p1,
  Questionnaire: y1,
  RadioGroup: b1,
  Rating: C1,
  Select: P1,
  Slider: _1,
  Switch: z1,
  Textarea: H1,
  Toggle: G1,
  ToggleGroup: K1,
  // display
  Alert: m0,
  AnimatedList: g0,
  AnimatedText: v0,
  Animation: x0,
  Attachment: b0,
  Avatar: S0,
  Badge: k0,
  Bubble: E0,
  Chart: _0,
  CodeBlock: A0,
  DataTable: V0,
  Dots: G0,
  Empty: Y0,
  Item: r1,
  Kbd: o1,
  Label: s1,
  Marker: l1,
  Marquee: c1,
  Message: d1,
  NumberTicker: h1,
  OrbitingCircles: g1,
  Progress: w1,
  Separator: E1,
  ShineBorder: N1,
  Skeleton: R1,
  Spinner: A1,
  SpinningText: D1,
  Table: F1,
  Text: B1,
  Typography: X1,
  // overlays
  AlertDialog: h0,
  Command: F0,
  ContextMenu: L0,
  Dialog: H0,
  Drawer: W0,
  DropdownMenu: K0,
  HoverCard: Z0,
  Popover: x1,
  Sheet: j1,
  Toast: U1,
  Tooltip: Y1,
  // COMPONENTS_END
  // helpers
  print: gb,
  InstallGlobals: MA
}, aD = d.createElement;
export {
  p0 as Accordion,
  m0 as Alert,
  h0 as AlertDialog,
  g0 as AnimatedList,
  v0 as AnimatedText,
  x0 as Animation,
  w0 as AppleDock,
  y0 as AspectRatio,
  b0 as Attachment,
  C0 as Autocomplete,
  S0 as Avatar,
  k0 as Badge,
  P0 as Breadcrumb,
  E0 as Bubble,
  j0 as Button,
  N0 as ButtonGroup,
  T0 as Calendar,
  R0 as Card,
  M0 as Carousel,
  _0 as Chart,
  I0 as Checkbox,
  A0 as CodeBlock,
  D0 as Collapsible,
  $0 as ColorPicker,
  z0 as Combobox,
  F0 as Command,
  L0 as ContextMenu,
  aD as CreateView,
  V0 as DataTable,
  B0 as DatePicker,
  H0 as Dialog,
  U0 as Direction,
  G0 as Dots,
  W0 as Drawer,
  K0 as DropdownMenu,
  Y0 as Empty,
  X0 as Field,
  q0 as FileUpload,
  sk as GetDefaultRenderer,
  ak as GetRenderer,
  Q0 as Grid,
  Z0 as HoverCard,
  J0 as Input,
  e1 as InputGroup,
  t1 as InputMask,
  n1 as InputOTP,
  r1 as Item,
  o1 as Kbd,
  a1 as Keybind,
  s1 as Label,
  l1 as Marker,
  c1 as Marquee,
  u1 as Menubar,
  d1 as Message,
  f1 as MessageScroller,
  p1 as NativeSelect,
  m1 as NavigationMenu,
  h1 as NumberTicker,
  g1 as OrbitingCircles,
  v1 as Pagination,
  x1 as Popover,
  w1 as Progress,
  y1 as Questionnaire,
  b1 as RadioGroup,
  C1 as Rating,
  $ as RegisterRenderer,
  S1 as Resizable,
  k1 as ScrollArea,
  P1 as Select,
  iD as Sen,
  E1 as Separator,
  j1 as Sheet,
  N1 as ShineBorder,
  T1 as Sidebar,
  R1 as Skeleton,
  _1 as Slider,
  I1 as Sortable,
  A1 as Spinner,
  D1 as SpinningText,
  O1 as Stack,
  $1 as Stepper,
  z1 as Switch,
  F1 as Table,
  V1 as Tabs,
  B1 as Text,
  H1 as Textarea,
  U1 as Toast,
  G1 as Toggle,
  K1 as ToggleGroup,
  Y1 as Tooltip,
  X1 as Typography,
  TA as VERSION,
  iD as default
};
