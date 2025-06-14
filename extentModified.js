/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) {
 "use strict";
 "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
  if (!a.document) throw new Error("jQuery requires a window with a document");
  return b(a)
 } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
 "use strict";
 var c = [],
  d = a.document,
  e = Object.getPrototypeOf,
  f = c.slice,
  g = c.concat,
  h = c.push,
  i = c.indexOf,
  j = {},
  k = j.toString,
  l = j.hasOwnProperty,
  m = l.toString,
  n = m.call(Object),
  o = {};

 function p(a, b) {
  b = b || d;
  var c = b.createElement("script");
  c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
 }
 var q = "3.2.1",
  r = function(a, b) {
   return new r.fn.init(a, b)
  },
  s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  t = /^-ms-/,
  u = /-([a-z])/g,
  v = function(a, b) {
   return b.toUpperCase()
  };
 r.fn = r.prototype = {
  jquery: q,
  constructor: r,
  length: 0,
  toArray: function() {
   return f.call(this)
  },
  get: function(a) {
   return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
  },
  pushStack: function(a) {
   var b = r.merge(this.constructor(), a);
   return b.prevObject = this, b
  },
  each: function(a) {
   return r.each(this, a)
  },
  map: function(a) {
   return this.pushStack(r.map(this, function(b, c) {
    return a.call(b, c, b)
   }))
  },
  slice: function() {
   return this.pushStack(f.apply(this, arguments))
  },
  first: function() {
   return this.eq(0)
  },
  last: function() {
   return this.eq(-1)
  },
  eq: function(a) {
   var b = this.length,
    c = +a + (a < 0 ? b : 0);
   return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
  },
  end: function() {
   return this.prevObject || this.constructor()
  },
  push: h,
  sort: c.sort,
  splice: c.splice
 }, r.extend = r.fn.extend = function() {
  var a, b, c, d, e, f, g = arguments[0] || {},
   h = 1,
   i = arguments.length,
   j = !1;
  for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
   if (null != (a = arguments[h]))
    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
  return g
 }, r.extend({
  expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function(a) {
   throw new Error(a)
  },
  noop: function() {},
  isFunction: function(a) {
   return "function" === r.type(a)
  },
  isWindow: function(a) {
   return null != a && a === a.window
  },
  isNumeric: function(a) {
   var b = r.type(a);
   return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
  },
  isPlainObject: function(a) {
   var b, c;
   return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
  },
  isEmptyObject: function(a) {
   var b;
   for (b in a) return !1;
   return !0
  },
  type: function(a) {
   return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
  },
  globalEval: function(a) {
   p(a)
  },
  camelCase: function(a) {
   return a.replace(t, "ms-").replace(u, v)
  },
  each: function(a, b) {
   var c, d = 0;
   if (w(a)) {
    for (c = a.length; d < c; d++)
     if (b.call(a[d], d, a[d]) === !1) break
   } else
    for (d in a)
     if (b.call(a[d], d, a[d]) === !1) break;
   return a
  },
  trim: function(a) {
   return null == a ? "" : (a + "").replace(s, "")
  },
  makeArray: function(a, b) {
   var c = b || [];
   return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
  },
  inArray: function(a, b, c) {
   return null == b ? -1 : i.call(b, a, c)
  },
  merge: function(a, b) {
   for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
   return a.length = e, a
  },
  grep: function(a, b, c) {
   for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
   return e
  },
  map: function(a, b, c) {
   var d, e, f = 0,
    h = [];
   if (w(a))
    for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
   else
    for (f in a) e = b(a[f], f, c), null != e && h.push(e);
   return g.apply([], h)
  },
  guid: 1,
  proxy: function(a, b) {
   var c, d, e;
   if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
    return a.apply(b || this, d.concat(f.call(arguments)))
   }, e.guid = a.guid = a.guid || r.guid++, e
  },
  now: Date.now,
  support: o
 }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
  j["[object " + b + "]"] = b.toLowerCase()
 });

 function w(a) {
  var b = !!a && "length" in a && a.length,
   c = r.type(a);
  return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
 }
 var x = function(a) {
  var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
   v = a.document,
   w = 0,
   x = 0,
   y = ha(),
   z = ha(),
   A = ha(),
   B = function(a, b) {
    return a === b && (l = !0), 0
   },
   C = {}.hasOwnProperty,
   D = [],
   E = D.pop,
   F = D.push,
   G = D.push,
   H = D.slice,
   I = function(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
     if (a[c] === b) return c;
    return -1
   },
   J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
   K = "[\\x20\\t\\r\\n\\f]",
   L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
   M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
   N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
   O = new RegExp(K + "+", "g"),
   P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
   Q = new RegExp("^" + K + "*," + K + "*"),
   R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
   S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
   T = new RegExp(N),
   U = new RegExp("^" + L + "$"),
   V = {
    ID: new RegExp("^#(" + L + ")"),
    CLASS: new RegExp("^\\.(" + L + ")"),
    TAG: new RegExp("^(" + L + "|[*])"),
    ATTR: new RegExp("^" + M),
    PSEUDO: new RegExp("^" + N),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + J + ")$", "i"),
    needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
   },
   W = /^(?:input|select|textarea|button)$/i,
   X = /^h\d$/i,
   Y = /^[^{]+\{\s*\[native \w/,
   Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
   $ = /[+~]/,
   _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
   aa = function(a, b, c) {
    var d = "0x" + b - 65536;
    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
   },
   ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
   ca = function(a, b) {
    return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
   },
   da = function() {
    m()
   },
   ea = ta(function(a) {
    return a.disabled === !0 && ("form" in a || "label" in a)
   }, {
    dir: "parentNode",
    next: "legend"
   });
  try {
   G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
  } catch (fa) {
   G = {
    apply: D.length ? function(a, b) {
     F.apply(a, H.call(b))
    } : function(a, b) {
     var c = a.length,
      d = 0;
     while (a[c++] = b[d++]);
     a.length = c - 1
    }
   }
  }

  function ga(a, b, d, e) {
   var f, h, j, k, l, o, r, s = b && b.ownerDocument,
    w = b ? b.nodeType : 9;
   if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
   if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
    if (11 !== w && (l = Z.exec(a)))
     if (f = l[1]) {
      if (9 === w) {
       if (!(j = b.getElementById(f))) return d;
       if (j.id === f) return d.push(j), d
      } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
     } else {
      if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
      if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
     } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
     if (1 !== w) s = b, r = a;
     else if ("object" !== b.nodeName.toLowerCase()) {
      (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
      while (h--) o[h] = "#" + k + " " + sa(o[h]);
      r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
     }
     if (r) try {
      return G.apply(d, s.querySelectorAll(r)), d
     } catch (x) {} finally {
      k === u && b.removeAttribute("id")
     }
    }
   }
   return i(a.replace(P, "$1"), b, d, e)
  }

  function ha() {
   var a = [];

   function b(c, e) {
    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
   }
   return b
  }

  function ia(a) {
   return a[u] = !0, a
  }

  function ja(a) {
   var b = n.createElement("fieldset");
   try {
    return !!a(b)
   } catch (c) {
    return !1
   } finally {
    b.parentNode && b.parentNode.removeChild(b), b = null
   }
  }

  function ka(a, b) {
   var c = a.split("|"),
    e = c.length;
   while (e--) d.attrHandle[c[e]] = b
  }

  function la(a, b) {
   var c = b && a,
    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
   if (d) return d;
   if (c)
    while (c = c.nextSibling)
     if (c === b) return -1;
   return a ? 1 : -1
  }

  function ma(a) {
   return function(b) {
    var c = b.nodeName.toLowerCase();
    return "input" === c && b.type === a
   }
  }

  function na(a) {
   return function(b) {
    var c = b.nodeName.toLowerCase();
    return ("input" === c || "button" === c) && b.type === a
   }
  }

  function oa(a) {
   return function(b) {
    return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
   }
  }

  function pa(a) {
   return ia(function(b) {
    return b = +b, ia(function(c, d) {
     var e, f = a([], c.length, b),
      g = f.length;
     while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
    })
   })
  }

  function qa(a) {
   return a && "undefined" != typeof a.getElementsByTagName && a
  }
  c = ga.support = {}, f = ga.isXML = function(a) {
   var b = a && (a.ownerDocument || a).documentElement;
   return !!b && "HTML" !== b.nodeName
  }, m = ga.setDocument = function(a) {
   var b, e, g = a ? a.ownerDocument || a : v;
   return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
    return a.className = "i", !a.getAttribute("className")
   }), c.getElementsByTagName = ja(function(a) {
    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
   }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
   }), c.getById ? (d.filter.ID = function(a) {
    var b = a.replace(_, aa);
    return function(a) {
     return a.getAttribute("id") === b
    }
   }, d.find.ID = function(a, b) {
    if ("undefined" != typeof b.getElementById && p) {
     var c = b.getElementById(a);
     return c ? [c] : []
    }
   }) : (d.filter.ID = function(a) {
    var b = a.replace(_, aa);
    return function(a) {
     var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
     return c && c.value === b
    }
   }, d.find.ID = function(a, b) {
    if ("undefined" != typeof b.getElementById && p) {
     var c, d, e, f = b.getElementById(a);
     if (f) {
      if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
      e = b.getElementsByName(a), d = 0;
      while (f = e[d++])
       if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
     }
     return []
    }
   }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
   } : function(a, b) {
    var c, d = [],
     e = 0,
     f = b.getElementsByTagName(a);
    if ("*" === a) {
     while (c = f[e++]) 1 === c.nodeType && d.push(c);
     return d
    }
    return f
   }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
    if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
   }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
   }), ja(function(a) {
    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
    var b = n.createElement("input");
    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
   })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
    c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
   }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
    var c = 9 === a.nodeType ? a.documentElement : a,
     d = b && b.parentNode;
    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
   } : function(a, b) {
    if (b)
     while (b = b.parentNode)
      if (b === a) return !0;
    return !1
   }, B = b ? function(a, b) {
    if (a === b) return l = !0, 0;
    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
   } : function(a, b) {
    if (a === b) return l = !0, 0;
    var c, d = 0,
     e = a.parentNode,
     f = b.parentNode,
     g = [a],
     h = [b];
    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
    if (e === f) return la(a, b);
    c = a;
    while (c = c.parentNode) g.unshift(c);
    c = b;
    while (c = c.parentNode) h.unshift(c);
    while (g[d] === h[d]) d++;
    return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
   }, n) : n
  }, ga.matches = function(a, b) {
   return ga(a, null, null, b)
  }, ga.matchesSelector = function(a, b) {
   if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
    var d = s.call(a, b);
    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
   } catch (e) {}
   return ga(b, n, null, [a]).length > 0
  }, ga.contains = function(a, b) {
   return (a.ownerDocument || a) !== n && m(a), t(a, b)
  }, ga.attr = function(a, b) {
   (a.ownerDocument || a) !== n && m(a);
   var e = d.attrHandle[b.toLowerCase()],
    f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
   return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
  }, ga.escape = function(a) {
   return (a + "").replace(ba, ca)
  }, ga.error = function(a) {
   throw new Error("Syntax error, unrecognized expression: " + a)
  }, ga.uniqueSort = function(a) {
   var b, d = [],
    e = 0,
    f = 0;
   if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
    while (b = a[f++]) b === a[f] && (e = d.push(f));
    while (e--) a.splice(d[e], 1)
   }
   return k = null, a
  }, e = ga.getText = function(a) {
   var b, c = "",
    d = 0,
    f = a.nodeType;
   if (f) {
    if (1 === f || 9 === f || 11 === f) {
     if ("string" == typeof a.textContent) return a.textContent;
     for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
    } else if (3 === f || 4 === f) return a.nodeValue
   } else
    while (b = a[d++]) c += e(b);
   return c
  }, d = ga.selectors = {
   cacheLength: 50,
   createPseudo: ia,
   match: V,
   attrHandle: {},
   find: {},
   relative: {
    ">": {
     dir: "parentNode",
     first: !0
    },
    " ": {
     dir: "parentNode"
    },
    "+": {
     dir: "previousSibling",
     first: !0
    },
    "~": {
     dir: "previousSibling"
    }
   },
   preFilter: {
    ATTR: function(a) {
     return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
    },
    CHILD: function(a) {
     return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
    },
    PSEUDO: function(a) {
     var b, c = !a[6] && a[2];
     return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
    }
   },
   filter: {
    TAG: function(a) {
     var b = a.replace(_, aa).toLowerCase();
     return "*" === a ? function() {
      return !0
     } : function(a) {
      return a.nodeName && a.nodeName.toLowerCase() === b
     }
    },
    CLASS: function(a) {
     var b = y[a + " "];
     return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
      return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
     })
    },
    ATTR: function(a, b, c) {
     return function(d) {
      var e = ga.attr(d, a);
      return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
     }
    },
    CHILD: function(a, b, c, d, e) {
     var f = "nth" !== a.slice(0, 3),
      g = "last" !== a.slice(-4),
      h = "of-type" === b;
     return 1 === d && 0 === e ? function(a) {
      return !!a.parentNode
     } : function(b, c, i) {
      var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
       q = b.parentNode,
       r = h && b.nodeName.toLowerCase(),
       s = !i && !h,
       t = !1;
      if (q) {
       if (f) {
        while (p) {
         m = b;
         while (m = m[p])
          if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
         o = p = "only" === a && !o && "nextSibling"
        }
        return !0
       }
       if (o = [g ? q.firstChild : q.lastChild], g && s) {
        m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
         if (1 === m.nodeType && ++t && m === b) {
          k[a] = [w, n, t];
          break
         }
       } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
         if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
       return t -= e, t === d || t % d === 0 && t / d >= 0
      }
     }
    },
    PSEUDO: function(a, b) {
     var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
     return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
      var d, f = e(a, b),
       g = f.length;
      while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
     }) : function(a) {
      return e(a, 0, c)
     }) : e
    }
   },
   pseudos: {
    not: ia(function(a) {
     var b = [],
      c = [],
      d = h(a.replace(P, "$1"));
     return d[u] ? ia(function(a, b, c, e) {
      var f, g = d(a, null, e, []),
       h = a.length;
      while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
     }) : function(a, e, f) {
      return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
     }
    }),
    has: ia(function(a) {
     return function(b) {
      return ga(a, b).length > 0
     }
    }),
    contains: ia(function(a) {
     return a = a.replace(_, aa),
      function(b) {
       return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
      }
    }),
    lang: ia(function(a) {
     return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
      function(b) {
       var c;
       do
        if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
       return !1
      }
    }),
    target: function(b) {
     var c = a.location && a.location.hash;
     return c && c.slice(1) === b.id
    },
    root: function(a) {
     return a === o
    },
    focus: function(a) {
     return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
    },
    enabled: oa(!1),
    disabled: oa(!0),
    checked: function(a) {
     var b = a.nodeName.toLowerCase();
     return "input" === b && !!a.checked || "option" === b && !!a.selected
    },
    selected: function(a) {
     return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
    },
    empty: function(a) {
     for (a = a.firstChild; a; a = a.nextSibling)
      if (a.nodeType < 6) return !1;
     return !0
    },
    parent: function(a) {
     return !d.pseudos.empty(a)
    },
    header: function(a) {
     return X.test(a.nodeName)
    },
    input: function(a) {
     return W.test(a.nodeName)
    },
    button: function(a) {
     var b = a.nodeName.toLowerCase();
     return "input" === b && "button" === a.type || "button" === b
    },
    text: function(a) {
     var b;
     return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
    },
    first: pa(function() {
     return [0]
    }),
    last: pa(function(a, b) {
     return [b - 1]
    }),
    eq: pa(function(a, b, c) {
     return [c < 0 ? c + b : c]
    }),
    even: pa(function(a, b) {
     for (var c = 0; c < b; c += 2) a.push(c);
     return a
    }),
    odd: pa(function(a, b) {
     for (var c = 1; c < b; c += 2) a.push(c);
     return a
    }),
    lt: pa(function(a, b, c) {
     for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
     return a
    }),
    gt: pa(function(a, b, c) {
     for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
     return a
    })
   }
  }, d.pseudos.nth = d.pseudos.eq;
  for (b in {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
   }) d.pseudos[b] = ma(b);
  for (b in {
    submit: !0,
    reset: !0
   }) d.pseudos[b] = na(b);

  function ra() {}
  ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
   var c, e, f, g, h, i, j, k = z[a + " "];
   if (k) return b ? 0 : k.slice(0);
   h = a, i = [], j = d.preFilter;
   while (h) {
    c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
     value: c,
     type: e[0].replace(P, " ")
    }), h = h.slice(c.length));
    for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
     value: c,
     type: g,
     matches: e
    }), h = h.slice(c.length));
    if (!c) break
   }
   return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
  };

  function sa(a) {
   for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
   return d
  }

  function ta(a, b, c) {
   var d = b.dir,
    e = b.next,
    f = e || d,
    g = c && "parentNode" === f,
    h = x++;
   return b.first ? function(b, c, e) {
    while (b = b[d])
     if (1 === b.nodeType || g) return a(b, c, e);
    return !1
   } : function(b, c, i) {
    var j, k, l, m = [w, h];
    if (i) {
     while (b = b[d])
      if ((1 === b.nodeType || g) && a(b, c, i)) return !0
    } else
     while (b = b[d])
      if (1 === b.nodeType || g)
       if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
       else {
        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
        if (k[f] = m, m[2] = a(b, c, i)) return !0
       } return !1
   }
  }

  function ua(a) {
   return a.length > 1 ? function(b, c, d) {
    var e = a.length;
    while (e--)
     if (!a[e](b, c, d)) return !1;
    return !0
   } : a[0]
  }

  function va(a, b, c) {
   for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
   return c
  }

  function wa(a, b, c, d, e) {
   for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
   return g
  }

  function xa(a, b, c, d, e, f) {
   return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
    var j, k, l, m = [],
     n = [],
     o = g.length,
     p = f || va(b || "*", h.nodeType ? [h] : h, []),
     q = !a || !f && b ? p : wa(p, m, a, h, i),
     r = c ? e || (f ? a : o || d) ? [] : g : q;
    if (c && c(q, r, h, i), d) {
     j = wa(r, n), d(j, [], h, i), k = j.length;
     while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
    }
    if (f) {
     if (e || a) {
      if (e) {
       j = [], k = r.length;
       while (k--)(l = r[k]) && j.push(q[k] = l);
       e(null, r = [], j, i)
      }
      k = r.length;
      while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
     }
    } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
   })
  }

  function ya(a) {
   for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
     return a === b
    }, h, !0), l = ta(function(a) {
     return I(b, a) > -1
    }, h, !0), m = [function(a, c, d) {
     var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
     return b = null, e
    }]; i < f; i++)
    if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
    else {
     if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
      for (e = ++i; e < f; e++)
       if (d.relative[a[e].type]) break;
      return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
       value: " " === a[i - 2].type ? "*" : ""
      })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
     }
     m.push(c)
    } return ua(m)
  }

  function za(a, b) {
   var c = b.length > 0,
    e = a.length > 0,
    f = function(f, g, h, i, k) {
     var l, o, q, r = 0,
      s = "0",
      t = f && [],
      u = [],
      v = j,
      x = f || e && d.find.TAG("*", k),
      y = w += null == v ? 1 : Math.random() || .1,
      z = x.length;
     for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
      if (e && l) {
       o = 0, g || l.ownerDocument === n || (m(l), h = !p);
       while (q = a[o++])
        if (q(l, g || n, h)) {
         i.push(l);
         break
        } k && (w = y)
      }
      c && ((l = !q && l) && r--, f && t.push(l))
     }
     if (r += s, c && s !== r) {
      o = 0;
      while (q = b[o++]) q(t, u, g, h);
      if (f) {
       if (r > 0)
        while (s--) t[s] || u[s] || (u[s] = E.call(i));
       u = wa(u)
      }
      G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
     }
     return k && (w = y, j = v), t
    };
   return c ? ia(f) : f
  }
  return h = ga.compile = function(a, b) {
   var c, d = [],
    e = [],
    f = A[a + " "];
   if (!f) {
    b || (b = g(a)), c = b.length;
    while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
    f = A(a, za(e, d)), f.selector = a
   }
   return f
  }, i = ga.select = function(a, b, c, e) {
   var f, i, j, k, l, m = "function" == typeof a && a,
    n = !e && g(a = m.selector || a);
   if (c = c || [], 1 === n.length) {
    if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
     if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
     m && (b = b.parentNode), a = a.slice(i.shift().value.length)
    }
    f = V.needsContext.test(a) ? 0 : i.length;
    while (f--) {
     if (j = i[f], d.relative[k = j.type]) break;
     if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
      if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
      break
     }
    }
   }
   return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
  }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
   return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
  }), ja(function(a) {
   return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
  }) || ka("type|href|height|width", function(a, b, c) {
   if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
  }), c.attributes && ja(function(a) {
   return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
  }) || ka("value", function(a, b, c) {
   if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
  }), ja(function(a) {
   return null == a.getAttribute("disabled")
  }) || ka(J, function(a, b, c) {
   var d;
   if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
  }), ga
 }(a);
 r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
 var y = function(a, b, c) {
   var d = [],
    e = void 0 !== c;
   while ((a = a[b]) && 9 !== a.nodeType)
    if (1 === a.nodeType) {
     if (e && r(a).is(c)) break;
     d.push(a)
    } return d
  },
  z = function(a, b) {
   for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
   return c
  },
  A = r.expr.match.needsContext;

 function B(a, b) {
  return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
 }
 var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
  D = /^.[^:#\[\.,]*$/;

 function E(a, b, c) {
  return r.isFunction(b) ? r.grep(a, function(a, d) {
   return !!b.call(a, d, a) !== c
  }) : b.nodeType ? r.grep(a, function(a) {
   return a === b !== c
  }) : "string" != typeof b ? r.grep(a, function(a) {
   return i.call(b, a) > -1 !== c
  }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
   return i.call(b, a) > -1 !== c && 1 === a.nodeType
  }))
 }
 r.filter = function(a, b, c) {
  var d = b[0];
  return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
   return 1 === a.nodeType
  }))
 }, r.fn.extend({
  find: function(a) {
   var b, c, d = this.length,
    e = this;
   if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
    for (b = 0; b < d; b++)
     if (r.contains(e[b], this)) return !0
   }));
   for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
   return d > 1 ? r.uniqueSort(c) : c
  },
  filter: function(a) {
   return this.pushStack(E(this, a || [], !1))
  },
  not: function(a) {
   return this.pushStack(E(this, a || [], !0))
  },
  is: function(a) {
   return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
  }
 });
 var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  H = r.fn.init = function(a, b, c) {
   var e, f;
   if (!a) return this;
   if (c = c || F, "string" == typeof a) {
    if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
    if (e[1]) {
     if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
      for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
     return this
    }
    return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
   }
   return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
  };
 H.prototype = r.fn, F = r(d);
 var I = /^(?:parents|prev(?:Until|All))/,
  J = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };
 r.fn.extend({
  has: function(a) {
   var b = r(a, this),
    c = b.length;
   return this.filter(function() {
    for (var a = 0; a < c; a++)
     if (r.contains(this, b[a])) return !0
   })
  },
  closest: function(a, b) {
   var c, d = 0,
    e = this.length,
    f = [],
    g = "string" != typeof a && r(a);
   if (!A.test(a))
    for (; d < e; d++)
     for (c = this[d]; c && c !== b; c = c.parentNode)
      if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
       f.push(c);
       break
      } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
  },
  index: function(a) {
   return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  },
  add: function(a, b) {
   return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
  },
  addBack: function(a) {
   return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }
 });

 function K(a, b) {
  while ((a = a[b]) && 1 !== a.nodeType);
  return a
 }
 r.each({
  parent: function(a) {
   var b = a.parentNode;
   return b && 11 !== b.nodeType ? b : null
  },
  parents: function(a) {
   return y(a, "parentNode")
  },
  parentsUntil: function(a, b, c) {
   return y(a, "parentNode", c)
  },
  next: function(a) {
   return K(a, "nextSibling")
  },
  prev: function(a) {
   return K(a, "previousSibling")
  },
  nextAll: function(a) {
   return y(a, "nextSibling")
  },
  prevAll: function(a) {
   return y(a, "previousSibling")
  },
  nextUntil: function(a, b, c) {
   return y(a, "nextSibling", c)
  },
  prevUntil: function(a, b, c) {
   return y(a, "previousSibling", c)
  },
  siblings: function(a) {
   return z((a.parentNode || {}).firstChild, a)
  },
  children: function(a) {
   return z(a.firstChild)
  },
  contents: function(a) {
   return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes))
  }
 }, function(a, b) {
  r.fn[a] = function(c, d) {
   var e = r.map(this, b, c);
   return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e)
  }
 });
 var L = /[^\x20\t\r\n\f]+/g;

 function M(a) {
  var b = {};
  return r.each(a.match(L) || [], function(a, c) {
   b[c] = !0
  }), b
 }
 r.Callbacks = function(a) {
  a = "string" == typeof a ? M(a) : r.extend({}, a);
  var b, c, d, e, f = [],
   g = [],
   h = -1,
   i = function() {
    for (e = e || a.once, d = b = !0; g.length; h = -1) {
     c = g.shift();
     while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
    }
    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
   },
   j = {
    add: function() {
     return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
      r.each(b, function(b, c) {
       r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
      })
     }(arguments), c && !b && i()), this
    },
    remove: function() {
     return r.each(arguments, function(a, b) {
      var c;
      while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
     }), this
    },
    has: function(a) {
     return a ? r.inArray(a, f) > -1 : f.length > 0
    },
    empty: function() {
     return f && (f = []), this
    },
    disable: function() {
     return e = g = [], f = c = "", this
    },
    disabled: function() {
     return !f
    },
    lock: function() {
     return e = g = [], c || b || (f = c = ""), this
    },
    locked: function() {
     return !!e
    },
    fireWith: function(a, c) {
     return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
    },
    fire: function() {
     return j.fireWith(this, arguments), this
    },
    fired: function() {
     return !!d
    }
   };
  return j
 };

 function N(a) {
  return a
 }

 function O(a) {
  throw a
 }

 function P(a, b, c, d) {
  var e;
  try {
   a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
  } catch (a) {
   c.apply(void 0, [a])
  }
 }
 r.extend({
  Deferred: function(b) {
   var c = [
     ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
     ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
     ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
    ],
    d = "pending",
    e = {
     state: function() {
      return d
     },
     always: function() {
      return f.done(arguments).fail(arguments), this
     },
     "catch": function(a) {
      return e.then(null, a)
     },
     pipe: function() {
      var a = arguments;
      return r.Deferred(function(b) {
       r.each(c, function(c, d) {
        var e = r.isFunction(a[d[4]]) && a[d[4]];
        f[d[1]](function() {
         var a = e && e.apply(this, arguments);
         a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
        })
       }), a = null
      }).promise()
     },
     then: function(b, d, e) {
      var f = 0;

      function g(b, c, d, e) {
       return function() {
        var h = this,
         i = arguments,
         j = function() {
          var a, j;
          if (!(b < f)) {
           if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
           j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
          }
         },
         k = e ? j : function() {
          try {
           j()
          } catch (a) {
           r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i))
          }
         };
        b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
       }
      }
      return r.Deferred(function(a) {
       c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
      }).promise()
     },
     promise: function(a) {
      return null != a ? r.extend(a, e) : e
     }
    },
    f = {};
   return r.each(c, function(a, b) {
    var g = b[2],
     h = b[5];
    e[b[1]] = g.add, h && g.add(function() {
     d = h
    }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
     return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
    }, f[b[0] + "With"] = g.fireWith
   }), e.promise(f), b && b.call(f, f), f
  },
  when: function(a) {
   var b = arguments.length,
    c = b,
    d = Array(c),
    e = f.call(arguments),
    g = r.Deferred(),
    h = function(a) {
     return function(c) {
      d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
     }
    };
   if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
   while (c--) P(e[c], h(c), g.reject);
   return g.promise()
  }
 });
 var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
 r.Deferred.exceptionHook = function(b, c) {
  a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
 }, r.readyException = function(b) {
  a.setTimeout(function() {
   throw b
  })
 };
 var R = r.Deferred();
 r.fn.ready = function(a) {
  return R.then(a)["catch"](function(a) {
   r.readyException(a)
  }), this
 }, r.extend({
  isReady: !1,
  readyWait: 1,
  ready: function(a) {
   (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
  }
 }), r.ready.then = R.then;

 function S() {
  d.removeEventListener("DOMContentLoaded", S),
   a.removeEventListener("load", S), r.ready()
 }
 "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
 var T = function(a, b, c, d, e, f, g) {
   var h = 0,
    i = a.length,
    j = null == c;
   if ("object" === r.type(c)) {
    e = !0;
    for (h in c) T(a, b, h, c[h], !0, f, g)
   } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
     return j.call(r(a), c)
    })), b))
    for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
   return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  },
  U = function(a) {
   return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };

 function V() {
  this.expando = r.expando + V.uid++
 }
 V.uid = 1, V.prototype = {
  cache: function(a) {
   var b = a[this.expando];
   return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
    value: b,
    configurable: !0
   }))), b
  },
  set: function(a, b, c) {
   var d, e = this.cache(a);
   if ("string" == typeof b) e[r.camelCase(b)] = c;
   else
    for (d in b) e[r.camelCase(d)] = b[d];
   return e
  },
  get: function(a, b) {
   return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
  },
  access: function(a, b, c) {
   return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
  },
  remove: function(a, b) {
   var c, d = a[this.expando];
   if (void 0 !== d) {
    if (void 0 !== b) {
     Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;
     while (c--) delete d[b[c]]
    }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
   }
  },
  hasData: function(a) {
   var b = a[this.expando];
   return void 0 !== b && !r.isEmptyObject(b)
  }
 };
 var W = new V,
  X = new V,
  Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  Z = /[A-Z]/g;

 function $(a) {
  return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
 }

 function _(a, b, c) {
  var d;
  if (void 0 === c && 1 === a.nodeType)
   if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
    try {
     c = $(c)
    } catch (e) {}
    X.set(a, b, c)
   } else c = void 0;
  return c
 }
 r.extend({
  hasData: function(a) {
   return X.hasData(a) || W.hasData(a)
  },
  data: function(a, b, c) {
   return X.access(a, b, c)
  },
  removeData: function(a, b) {
   X.remove(a, b)
  },
  _data: function(a, b, c) {
   return W.access(a, b, c)
  },
  _removeData: function(a, b) {
   W.remove(a, b)
  }
 }), r.fn.extend({
  data: function(a, b) {
   var c, d, e, f = this[0],
    g = f && f.attributes;
   if (void 0 === a) {
    if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
     c = g.length;
     while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
     W.set(f, "hasDataAttrs", !0)
    }
    return e
   }
   return "object" == typeof a ? this.each(function() {
    X.set(this, a)
   }) : T(this, function(b) {
    var c;
    if (f && void 0 === b) {
     if (c = X.get(f, a), void 0 !== c) return c;
     if (c = _(f, a), void 0 !== c) return c
    } else this.each(function() {
     X.set(this, a, b)
    })
   }, null, b, arguments.length > 1, null, !0)
  },
  removeData: function(a) {
   return this.each(function() {
    X.remove(this, a)
   })
  }
 }), r.extend({
  queue: function(a, b, c) {
   var d;
   if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || []
  },
  dequeue: function(a, b) {
   b = b || "fx";
   var c = r.queue(a, b),
    d = c.length,
    e = c.shift(),
    f = r._queueHooks(a, b),
    g = function() {
     r.dequeue(a, b)
    };
   "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
  },
  _queueHooks: function(a, b) {
   var c = b + "queueHooks";
   return W.get(a, c) || W.access(a, c, {
    empty: r.Callbacks("once memory").add(function() {
     W.remove(a, [b + "queue", c])
    })
   })
  }
 }), r.fn.extend({
  queue: function(a, b) {
   var c = 2;
   return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
    var c = r.queue(this, a, b);
    r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
   })
  },
  dequeue: function(a) {
   return this.each(function() {
    r.dequeue(this, a)
   })
  },
  clearQueue: function(a) {
   return this.queue(a || "fx", [])
  },
  promise: function(a, b) {
   var c, d = 1,
    e = r.Deferred(),
    f = this,
    g = this.length,
    h = function() {
     --d || e.resolveWith(f, [f])
    };
   "string" != typeof a && (b = a, a = void 0), a = a || "fx";
   while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
   return h(), e.promise(b)
  }
 });
 var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
  ca = ["Top", "Right", "Bottom", "Left"],
  da = function(a, b) {
   return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
  },
  ea = function(a, b, c, d) {
   var e, f, g = {};
   for (f in b) g[f] = a.style[f], a.style[f] = b[f];
   e = c.apply(a, d || []);
   for (f in b) a.style[f] = g[f];
   return e
  };

 function fa(a, b, c, d) {
  var e, f = 1,
   g = 20,
   h = d ? function() {
    return d.cur()
   } : function() {
    return r.css(a, b, "")
   },
   i = h(),
   j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
   k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
  if (k && k[3] !== j) {
   j = j || k[3], c = c || [], k = +i || 1;
   do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
  }
  return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
 }
 var ga = {};

 function ha(a) {
  var b, c = a.ownerDocument,
   d = a.nodeName,
   e = ga[d];
  return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
 }

 function ia(a, b) {
  for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
  for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
  return a
 }
 r.fn.extend({
  show: function() {
   return ia(this, !0)
  },
  hide: function() {
   return ia(this)
  },
  toggle: function(a) {
   return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
    da(this) ? r(this).show() : r(this).hide()
   })
  }
 });
 var ja = /^(?:checkbox|radio)$/i,
  ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
  la = /^$|\/(?:java|ecma)script/i,
  ma = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   thead: [1, "<table>", "</table>"],
   col: [2, "<table><colgroup>", "</colgroup></table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: [0, "", ""]
  };
 ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

 function na(a, b) {
  var c;
  return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c
 }

 function oa(a, b) {
  for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
 }
 var pa = /<|&#?\w+;/;

 function qa(a, b, c, d, e) {
  for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
   if (f = a[n], f || 0 === f)
    if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
    else if (pa.test(f)) {
   g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
   while (k--) g = g.lastChild;
   r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
  } else m.push(b.createTextNode(f));
  l.textContent = "", n = 0;
  while (f = m[n++])
   if (d && r.inArray(f, d) > -1) e && e.push(f);
   else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
   k = 0;
   while (f = g[k++]) la.test(f.type || "") && c.push(f)
  }
  return l
 }! function() {
  var a = d.createDocumentFragment(),
   b = a.appendChild(d.createElement("div")),
   c = d.createElement("input");
  c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
 }();
 var ra = d.documentElement,
  sa = /^key/,
  ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  ua = /^([^.]*)(?:\.(.+)|)/;

 function va() {
  return !0
 }

 function wa() {
  return !1
 }

 function xa() {
  try {
   return d.activeElement
  } catch (a) {}
 }

 function ya(a, b, c, d, e, f) {
  var g, h;
  if ("object" == typeof b) {
   "string" != typeof c && (d = d || c, c = void 0);
   for (h in b) ya(a, h, c, d, b[h], f);
   return a
  }
  if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
  else if (!e) return a;
  return 1 === f && (g = e, e = function(a) {
   return r().off(a), g.apply(this, arguments)
  }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
   r.event.add(this, b, e, d, c)
  })
 }
 r.event = {
  global: {},
  add: function(a, b, c, d, e) {
   var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
   if (q) {
    c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
     return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
    }), b = (b || "").match(L) || [""], j = b.length;
    while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
     type: n,
     origType: p,
     data: d,
     handler: c,
     guid: c.guid,
     selector: e,
     needsContext: e && r.expr.match.needsContext.test(e),
     namespace: o.join(".")
    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
   }
  },
  remove: function(a, b, c, d, e) {
   var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
   if (q && (i = q.events)) {
    b = (b || "").match(L) || [""], j = b.length;
    while (j--)
     if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
      l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
      while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
      g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
     } else
      for (n in i) r.event.remove(a, n + b[j], c, d, !0);
    r.isEmptyObject(i) && W.remove(a, "handle events")
   }
  },
  dispatch: function(a) {
   var b = r.event.fix(a),
    c, d, e, f, g, h, i = new Array(arguments.length),
    j = (W.get(this, "events") || {})[b.type] || [],
    k = r.event.special[b.type] || {};
   for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
   if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
    h = r.event.handlers.call(this, b, j), c = 0;
    while ((f = h[c++]) && !b.isPropagationStopped()) {
     b.currentTarget = f.elem, d = 0;
     while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
    }
    return k.postDispatch && k.postDispatch.call(this, b), b.result
   }
  },
  handlers: function(a, b) {
   var c, d, e, f, g, h = [],
    i = b.delegateCount,
    j = a.target;
   if (i && j.nodeType && !("click" === a.type && a.button >= 1))
    for (; j !== this; j = j.parentNode || this)
     if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
      for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
      f.length && h.push({
       elem: j,
       handlers: f
      })
     } return j = this, i < b.length && h.push({
    elem: j,
    handlers: b.slice(i)
   }), h
  },
  addProp: function(a, b) {
   Object.defineProperty(r.Event.prototype, a, {
    enumerable: !0,
    configurable: !0,
    get: r.isFunction(b) ? function() {
     if (this.originalEvent) return b(this.originalEvent)
    } : function() {
     if (this.originalEvent) return this.originalEvent[a]
    },
    set: function(b) {
     Object.defineProperty(this, a, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: b
     })
    }
   })
  },
  fix: function(a) {
   return a[r.expando] ? a : new r.Event(a)
  },
  special: {
   load: {
    noBubble: !0
   },
   focus: {
    trigger: function() {
     if (this !== xa() && this.focus) return this.focus(), !1
    },
    delegateType: "focusin"
   },
   blur: {
    trigger: function() {
     if (this === xa() && this.blur) return this.blur(), !1
    },
    delegateType: "focusout"
   },
   click: {
    trigger: function() {
     if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1
    },
    _default: function(a) {
     return B(a.target, "a")
    }
   },
   beforeunload: {
    postDispatch: function(a) {
     void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
    }
   }
  }
 }, r.removeEvent = function(a, b, c) {
  a.removeEventListener && a.removeEventListener(b, c)
 }, r.Event = function(a, b) {
  return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
 }, r.Event.prototype = {
  constructor: r.Event,
  isDefaultPrevented: wa,
  isPropagationStopped: wa,
  isImmediatePropagationStopped: wa,
  isSimulated: !1,
  preventDefault: function() {
   var a = this.originalEvent;
   this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
  },
  stopPropagation: function() {
   var a = this.originalEvent;
   this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
  },
  stopImmediatePropagation: function() {
   var a = this.originalEvent;
   this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
  }
 }, r.each({
  altKey: !0,
  bubbles: !0,
  cancelable: !0,
  changedTouches: !0,
  ctrlKey: !0,
  detail: !0,
  eventPhase: !0,
  metaKey: !0,
  pageX: !0,
  pageY: !0,
  shiftKey: !0,
  view: !0,
  "char": !0,
  charCode: !0,
  key: !0,
  keyCode: !0,
  button: !0,
  buttons: !0,
  clientX: !0,
  clientY: !0,
  offsetX: !0,
  offsetY: !0,
  pointerId: !0,
  pointerType: !0,
  screenX: !0,
  screenY: !0,
  targetTouches: !0,
  toElement: !0,
  touches: !0,
  which: function(a) {
   var b = a.button;
   return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
  }
 }, r.event.addProp), r.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, function(a, b) {
  r.event.special[a] = {
   delegateType: b,
   bindType: b,
   handle: function(a) {
    var c, d = this,
     e = a.relatedTarget,
     f = a.handleObj;
    return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
   }
  }
 }), r.fn.extend({
  on: function(a, b, c, d) {
   return ya(this, a, b, c, d)
  },
  one: function(a, b, c, d) {
   return ya(this, a, b, c, d, 1)
  },
  off: function(a, b, c) {
   var d, e;
   if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
   if ("object" == typeof a) {
    for (e in a) this.off(e, b, a[e]);
    return this
   }
   return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() {
    r.event.remove(this, a, c, b)
   })
  }
 });
 var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  Aa = /<script|<style|<link/i,
  Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
  Ca = /^true\/(.*)/,
  Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

 function Ea(a, b) {
  return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
 }

 function Fa(a) {
  return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
 }

 function Ga(a) {
  var b = Ca.exec(a.type);
  return b ? a.type = b[1] : a.removeAttribute("type"), a
 }

 function Ha(a, b) {
  var c, d, e, f, g, h, i, j;
  if (1 === b.nodeType) {
   if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
    delete g.handle, g.events = {};
    for (e in j)
     for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
   }
   X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
  }
 }

 function Ia(a, b) {
  var c = b.nodeName.toLowerCase();
  "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
 }

 function Ja(a, b, c, d) {
  b = g.apply([], b);
  var e, f, h, i, j, k, l = 0,
   m = a.length,
   n = m - 1,
   q = b[0],
   s = r.isFunction(q);
  if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
   var f = a.eq(e);
   s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
  });
  if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
   for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
   if (i)
    for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
  }
  return a
 }

 function Ka(a, b, c) {
  for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
  return a
 }
 r.extend({
  htmlPrefilter: function(a) {
   return a.replace(za, "<$1></$2>")
  },
  clone: function(a, b, c) {
   var d, e, f, g, h = a.cloneNode(!0),
    i = r.contains(a.ownerDocument, a);
   if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
    for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
   if (b)
    if (c)
     for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
    else Ha(a, h);
   return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
  },
  cleanData: function(a) {
   for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
    if (U(c)) {
     if (b = c[W.expando]) {
      if (b.events)
       for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
      c[W.expando] = void 0
     }
     c[X.expando] && (c[X.expando] = void 0)
    }
  }
 }), r.fn.extend({
  detach: function(a) {
   return Ka(this, a, !0)
  },
  remove: function(a) {
   return Ka(this, a)
  },
  text: function(a) {
   return T(this, function(a) {
    return void 0 === a ? r.text(this) : this.empty().each(function() {
     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
    })
   }, null, a, arguments.length)
  },
  append: function() {
   return Ja(this, arguments, function(a) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var b = Ea(this, a);
     b.appendChild(a)
    }
   })
  },
  prepend: function() {
   return Ja(this, arguments, function(a) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var b = Ea(this, a);
     b.insertBefore(a, b.firstChild)
    }
   })
  },
  before: function() {
   return Ja(this, arguments, function(a) {
    this.parentNode && this.parentNode.insertBefore(a, this)
   })
  },
  after: function() {
   return Ja(this, arguments, function(a) {
    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
   })
  },
  empty: function() {
   for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
   return this
  },
  clone: function(a, b) {
   return a = null != a && a, b = null == b ? a : b, this.map(function() {
    return r.clone(this, a, b)
   })
  },
  html: function(a) {
   return T(this, function(a) {
    var b = this[0] || {},
     c = 0,
     d = this.length;
    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
    if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
     a = r.htmlPrefilter(a);
     try {
      for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
      b = 0
     } catch (e) {}
    }
    b && this.empty().append(a)
   }, null, a, arguments.length)
  },
  replaceWith: function() {
   var a = [];
   return Ja(this, arguments, function(b) {
    var c = this.parentNode;
    r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
   }, a)
  }
 }), r.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, function(a, b) {
  r.fn[a] = function(a) {
   for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
   return this.pushStack(d)
  }
 });
 var La = /^margin/,
  Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
  Na = function(b) {
   var c = b.ownerDocument.defaultView;
   return c && c.opener || (c = a), c.getComputedStyle(b)
  };
 ! function() {
  function b() {
   if (i) {
    i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
    var b = a.getComputedStyle(i);
    c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
   }
  }
  var c, e, f, g, h = d.createElement("div"),
   i = d.createElement("div");
  i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
   pixelPosition: function() {
    return b(), c
   },
   boxSizingReliable: function() {
    return b(), e
   },
   pixelMarginRight: function() {
    return b(), f
   },
   reliableMarginLeft: function() {
    return b(), g
   }
  }))
 }();

 function Oa(a, b, c) {
  var d, e, f, g, h = a.style;
  return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
 }

 function Pa(a, b) {
  return {
   get: function() {
    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
   }
  }
 }
 var Qa = /^(none|table(?!-c[ea]).+)/,
  Ra = /^--/,
  Sa = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  Ta = {
   letterSpacing: "0",
   fontWeight: "400"
  },
  Ua = ["Webkit", "Moz", "ms"],
  Va = d.createElement("div").style;

 function Wa(a) {
  if (a in Va) return a;
  var b = a[0].toUpperCase() + a.slice(1),
   c = Ua.length;
  while (c--)
   if (a = Ua[c] + b, a in Va) return a
 }

 function Xa(a) {
  var b = r.cssProps[a];
  return b || (b = r.cssProps[a] = Wa(a) || a), b
 }

 function Ya(a, b, c) {
  var d = ba.exec(b);
  return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
 }

 function Za(a, b, c, d, e) {
  var f, g = 0;
  for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
  return g
 }

 function $a(a, b, c) {
  var d, e = Na(a),
   f = Oa(a, b, e),
   g = "border-box" === r.css(a, "boxSizing", !1, e);
  return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
 }
 r.extend({
  cssHooks: {
   opacity: {
    get: function(a, b) {
     if (b) {
      var c = Oa(a, "opacity");
      return "" === c ? "1" : c
     }
    }
   }
  },
  cssNumber: {
   animationIterationCount: !0,
   columnCount: !0,
   fillOpacity: !0,
   flexGrow: !0,
   flexShrink: !0,
   fontWeight: !0,
   lineHeight: !0,
   opacity: !0,
   order: !0,
   orphans: !0,
   widows: !0,
   zIndex: !0,
   zoom: !0
  },
  cssProps: {
   "float": "cssFloat"
  },
  style: function(a, b, c, d) {
   if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
    var e, f, g, h = r.camelCase(b),
     i = Ra.test(b),
     j = a.style;
    return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
   }
  },
  css: function(a, b, c, d) {
   var e, f, g, h = r.camelCase(b),
    i = Ra.test(b);
   return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
  }
 }), r.each(["height", "width"], function(a, b) {
  r.cssHooks[b] = {
   get: function(a, c, d) {
    if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() {
     return $a(a, b, d)
    })
   },
   set: function(a, c, d) {
    var e, f = d && Na(a),
     g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
    return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
   }
  }
 }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
  if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
   marginLeft: 0
  }, function() {
   return a.getBoundingClientRect().left
  })) + "px"
 }), r.each({
  margin: "",
  padding: "",
  border: "Width"
 }, function(a, b) {
  r.cssHooks[a + b] = {
   expand: function(c) {
    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
    return e
   }
  }, La.test(a) || (r.cssHooks[a + b].set = Ya)
 }), r.fn.extend({
  css: function(a, b) {
   return T(this, function(a, b, c) {
    var d, e, f = {},
     g = 0;
    if (Array.isArray(b)) {
     for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
     return f
    }
    return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
   }, a, b, arguments.length > 1)
  }
 });

 function _a(a, b, c, d, e) {
  return new _a.prototype.init(a, b, c, d, e)
 }
 r.Tween = _a, _a.prototype = {
  constructor: _a,
  init: function(a, b, c, d, e, f) {
   this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
  },
  cur: function() {
   var a = _a.propHooks[this.prop];
   return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
  },
  run: function(a) {
   var b, c = _a.propHooks[this.prop];
   return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this
  }
 }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
  _default: {
   get: function(a) {
    var b;
    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
   },
   set: function(a) {
    r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
   }
  }
 }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
  set: function(a) {
   a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
  }
 }, r.easing = {
  linear: function(a) {
   return a
  },
  swing: function(a) {
   return .5 - Math.cos(a * Math.PI) / 2
  },
  _default: "swing"
 }, r.fx = _a.prototype.init, r.fx.step = {};
 var ab, bb, cb = /^(?:toggle|show|hide)$/,
  db = /queueHooks$/;

 function eb() {
  bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick())
 }

 function fb() {
  return a.setTimeout(function() {
   ab = void 0
  }), ab = r.now()
 }

 function gb(a, b) {
  var c, d = 0,
   e = {
    height: a
   };
  for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
  return b && (e.opacity = e.width = a), e
 }

 function hb(a, b, c) {
  for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
   if (d = e[f].call(c, b, a)) return d
 }

 function ib(a, b, c) {
  var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
   m = this,
   n = {},
   o = a.style,
   p = a.nodeType && da(a),
   q = W.get(a, "fxshow");
  c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
   g.unqueued || h()
  }), g.unqueued++, m.always(function() {
   m.always(function() {
    g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
   })
  }));
  for (d in b)
   if (e = b[d], cb.test(e)) {
    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
     if ("show" !== e || !q || void 0 === q[d]) continue;
     p = !0
    }
    n[d] = q && q[d] || r.style(a, d)
   } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
   l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
    o.display = j
   }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
    o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
   })), i = !1;
   for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
    display: j
   }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() {
    p || ia([a]), W.remove(a, "fxshow");
    for (d in n) r.style(a, d, n[d])
   })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
  }
 }

 function jb(a, b) {
  var c, d, e, f, g;
  for (c in a)
   if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
    f = g.expand(f), delete a[d];
    for (c in f) c in a || (a[c] = f[c], b[c] = e)
   } else b[d] = e
 }

 function kb(a, b, c) {
  var d, e, f = 0,
   g = kb.prefilters.length,
   h = r.Deferred().always(function() {
    delete i.elem
   }),
   i = function() {
    if (e) return !1;
    for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
    return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
   },
   j = h.promise({
    elem: a,
    props: r.extend({}, b),
    opts: r.extend(!0, {
     specialEasing: {},
     easing: r.easing._default
    }, c),
    originalProperties: b,
    originalOptions: c,
    startTime: ab || fb(),
    duration: c.duration,
    tweens: [],
    createTween: function(b, c) {
     var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
     return j.tweens.push(d), d
    },
    stop: function(b) {
     var c = 0,
      d = b ? j.tweens.length : 0;
     if (e) return this;
     for (e = !0; c < d; c++) j.tweens[c].run(1);
     return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
    }
   }),
   k = j.props;
  for (jb(k, j.opts.specialEasing); f < g; f++)
   if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
  return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
   elem: a,
   anim: j,
   queue: j.opts.queue
  })), j
 }
 r.Animation = r.extend(kb, {
   tweeners: {
    "*": [function(a, b) {
     var c = this.createTween(a, b);
     return fa(c.elem, a, ba.exec(b), c), c
    }]
   },
   tweener: function(a, b) {
    r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);
    for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b)
   },
   prefilters: [ib],
   prefilter: function(a, b) {
    b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
   }
  }), r.speed = function(a, b, c) {
   var d = a && "object" == typeof a ? r.extend({}, a) : {
    complete: c || !c && b || r.isFunction(a) && a,
    duration: a,
    easing: c && b || b && !r.isFunction(b) && b
   };
   return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
    r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue)
   }, d
  }, r.fn.extend({
   fadeTo: function(a, b, c, d) {
    return this.filter(da).css("opacity", 0).show().end().animate({
     opacity: b
    }, a, c, d)
   },
   animate: function(a, b, c, d) {
    var e = r.isEmptyObject(a),
     f = r.speed(b, c, d),
     g = function() {
      var b = kb(this, r.extend({}, a), f);
      (e || W.get(this, "finish")) && b.stop(!0)
     };
    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
   },
   stop: function(a, b, c) {
    var d = function(a) {
     var b = a.stop;
     delete a.stop, b(c)
    };
    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
     var b = !0,
      e = null != a && a + "queueHooks",
      f = r.timers,
      g = W.get(this);
     if (e) g[e] && g[e].stop && d(g[e]);
     else
      for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
     for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
     !b && c || r.dequeue(this, a)
    })
   },
   finish: function(a) {
    return a !== !1 && (a = a || "fx"), this.each(function() {
     var b, c = W.get(this),
      d = c[a + "queue"],
      e = c[a + "queueHooks"],
      f = r.timers,
      g = d ? d.length : 0;
     for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
     for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
     delete c.finish
    })
   }
  }), r.each(["toggle", "show", "hide"], function(a, b) {
   var c = r.fn[b];
   r.fn[b] = function(a, d, e) {
    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
   }
  }), r.each({
   slideDown: gb("show"),
   slideUp: gb("hide"),
   slideToggle: gb("toggle"),
   fadeIn: {
    opacity: "show"
   },
   fadeOut: {
    opacity: "hide"
   },
   fadeToggle: {
    opacity: "toggle"
   }
  }, function(a, b) {
   r.fn[a] = function(a, c, d) {
    return this.animate(b, a, c, d)
   }
  }), r.timers = [], r.fx.tick = function() {
   var a, b = 0,
    c = r.timers;
   for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
   c.length || r.fx.stop(), ab = void 0
  }, r.fx.timer = function(a) {
   r.timers.push(a), r.fx.start()
  }, r.fx.interval = 13, r.fx.start = function() {
   bb || (bb = !0, eb())
  }, r.fx.stop = function() {
   bb = null
  }, r.fx.speeds = {
   slow: 600,
   fast: 200,
   _default: 400
  }, r.fn.delay = function(b, c) {
   return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
    var e = a.setTimeout(c, b);
    d.stop = function() {
     a.clearTimeout(e)
    }
   })
  },
  function() {
   var a = d.createElement("input"),
    b = d.createElement("select"),
    c = b.appendChild(d.createElement("option"));
   a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
  }();
 var lb, mb = r.expr.attrHandle;
 r.fn.extend({
  attr: function(a, b) {
   return T(this, r.attr, a, b, arguments.length > 1)
  },
  removeAttr: function(a) {
   return this.each(function() {
    r.removeAttr(this, a)
   })
  }
 }), r.extend({
  attr: function(a, b, c) {
   var d, e, f = a.nodeType;
   if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
    null == d ? void 0 : d))
  },
  attrHooks: {
   type: {
    set: function(a, b) {
     if (!o.radioValue && "radio" === b && B(a, "input")) {
      var c = a.value;
      return a.setAttribute("type", b), c && (a.value = c), b
     }
    }
   }
  },
  removeAttr: function(a, b) {
   var c, d = 0,
    e = b && b.match(L);
   if (e && 1 === a.nodeType)
    while (c = e[d++]) a.removeAttribute(c)
  }
 }), lb = {
  set: function(a, b, c) {
   return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
  }
 }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
  var c = mb[b] || r.find.attr;
  mb[b] = function(a, b, d) {
   var e, f, g = b.toLowerCase();
   return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e
  }
 });
 var nb = /^(?:input|select|textarea|button)$/i,
  ob = /^(?:a|area)$/i;
 r.fn.extend({
  prop: function(a, b) {
   return T(this, r.prop, a, b, arguments.length > 1)
  },
  removeProp: function(a) {
   return this.each(function() {
    delete this[r.propFix[a] || a]
   })
  }
 }), r.extend({
  prop: function(a, b, c) {
   var d, e, f = a.nodeType;
   if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
  },
  propHooks: {
   tabIndex: {
    get: function(a) {
     var b = r.find.attr(a, "tabindex");
     return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
    }
   }
  },
  propFix: {
   "for": "htmlFor",
   "class": "className"
  }
 }), o.optSelected || (r.propHooks.selected = {
  get: function(a) {
   var b = a.parentNode;
   return b && b.parentNode && b.parentNode.selectedIndex, null
  },
  set: function(a) {
   var b = a.parentNode;
   b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
  }
 }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
  r.propFix[this.toLowerCase()] = this
 });

 function pb(a) {
  var b = a.match(L) || [];
  return b.join(" ")
 }

 function qb(a) {
  return a.getAttribute && a.getAttribute("class") || ""
 }
 r.fn.extend({
  addClass: function(a) {
   var b, c, d, e, f, g, h, i = 0;
   if (r.isFunction(a)) return this.each(function(b) {
    r(this).addClass(a.call(this, b, qb(this)))
   });
   if ("string" == typeof a && a) {
    b = a.match(L) || [];
    while (c = this[i++])
     if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
      g = 0;
      while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
      h = pb(d), e !== h && c.setAttribute("class", h)
     }
   }
   return this
  },
  removeClass: function(a) {
   var b, c, d, e, f, g, h, i = 0;
   if (r.isFunction(a)) return this.each(function(b) {
    r(this).removeClass(a.call(this, b, qb(this)))
   });
   if (!arguments.length) return this.attr("class", "");
   if ("string" == typeof a && a) {
    b = a.match(L) || [];
    while (c = this[i++])
     if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
      g = 0;
      while (f = b[g++])
       while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
      h = pb(d), e !== h && c.setAttribute("class", h)
     }
   }
   return this
  },
  toggleClass: function(a, b) {
   var c = typeof a;
   return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
    r(this).toggleClass(a.call(this, c, qb(this), b), b)
   }) : this.each(function() {
    var b, d, e, f;
    if ("string" === c) {
     d = 0, e = r(this), f = a.match(L) || [];
     while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
    } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
   })
  },
  hasClass: function(a) {
   var b, c, d = 0;
   b = " " + a + " ";
   while (c = this[d++])
    if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
   return !1
  }
 });
 var rb = /\r/g;
 r.fn.extend({
  val: function(a) {
   var b, c, d, e = this[0]; {
    if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
     var e;
     1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) {
      return null == a ? "" : a + ""
     })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
    });
    if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
   }
  }
 }), r.extend({
  valHooks: {
   option: {
    get: function(a) {
     var b = r.find.attr(a, "value");
     return null != b ? b : pb(r.text(a))
    }
   },
   select: {
    get: function(a) {
     var b, c, d, e = a.options,
      f = a.selectedIndex,
      g = "select-one" === a.type,
      h = g ? null : [],
      i = g ? f + 1 : e.length;
     for (d = f < 0 ? i : g ? f : 0; d < i; d++)
      if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
       if (b = r(c).val(), g) return b;
       h.push(b)
      } return h
    },
    set: function(a, b) {
     var c, d, e = a.options,
      f = r.makeArray(b),
      g = e.length;
     while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
     return c || (a.selectedIndex = -1), f
    }
   }
  }
 }), r.each(["radio", "checkbox"], function() {
  r.valHooks[this] = {
   set: function(a, b) {
    if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
   }
  }, o.checkOn || (r.valHooks[this].get = function(a) {
   return null === a.getAttribute("value") ? "on" : a.value
  })
 });
 var sb = /^(?:focusinfocus|focusoutblur)$/;
 r.extend(r.event, {
  trigger: function(b, c, e, f) {
   var g, h, i, j, k, m, n, o = [e || d],
    p = l.call(b, "type") ? b.type : b,
    q = l.call(b, "namespace") ? b.namespace.split(".") : [];
   if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
    if (!f && !n.noBubble && !r.isWindow(e)) {
     for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
     i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
    }
    g = 0;
    while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
    return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
   }
  },
  simulate: function(a, b, c) {
   var d = r.extend(new r.Event, c, {
    type: a,
    isSimulated: !0
   });
   r.event.trigger(d, null, b)
  }
 }), r.fn.extend({
  trigger: function(a, b) {
   return this.each(function() {
    r.event.trigger(a, b, this)
   })
  },
  triggerHandler: function(a, b) {
   var c = this[0];
   if (c) return r.event.trigger(a, b, c, !0)
  }
 }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
  r.fn[b] = function(a, c) {
   return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
  }
 }), r.fn.extend({
  hover: function(a, b) {
   return this.mouseenter(a).mouseleave(b || a)
  }
 }), o.focusin = "onfocusin" in a, o.focusin || r.each({
  focus: "focusin",
  blur: "focusout"
 }, function(a, b) {
  var c = function(a) {
   r.event.simulate(b, a.target, r.event.fix(a))
  };
  r.event.special[b] = {
   setup: function() {
    var d = this.ownerDocument || this,
     e = W.access(d, b);
    e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
   },
   teardown: function() {
    var d = this.ownerDocument || this,
     e = W.access(d, b) - 1;
    e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
   }
  }
 });
 var tb = a.location,
  ub = r.now(),
  vb = /\?/;
 r.parseXML = function(b) {
  var c;
  if (!b || "string" != typeof b) return null;
  try {
   c = (new a.DOMParser).parseFromString(b, "text/xml")
  } catch (d) {
   c = void 0
  }
  return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
 };
 var wb = /\[\]$/,
  xb = /\r?\n/g,
  yb = /^(?:submit|button|image|reset|file)$/i,
  zb = /^(?:input|select|textarea|keygen)/i;

 function Ab(a, b, c, d) {
  var e;
  if (Array.isArray(b)) r.each(b, function(b, e) {
   c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
  });
  else if (c || "object" !== r.type(b)) d(a, b);
  else
   for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
 }
 r.param = function(a, b) {
  var c, d = [],
   e = function(a, b) {
    var c = r.isFunction(b) ? b() : b;
    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
   };
  if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
   e(this.name, this.value)
  });
  else
   for (c in a) Ab(c, a[c], b, e);
  return d.join("&")
 }, r.fn.extend({
  serialize: function() {
   return r.param(this.serializeArray())
  },
  serializeArray: function() {
   return this.map(function() {
    var a = r.prop(this, "elements");
    return a ? r.makeArray(a) : this
   }).filter(function() {
    var a = this.type;
    return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
   }).map(function(a, b) {
    var c = r(this).val();
    return null == c ? null : Array.isArray(c) ? r.map(c, function(a) {
     return {
      name: b.name,
      value: a.replace(xb, "\r\n")
     }
    }) : {
     name: b.name,
     value: c.replace(xb, "\r\n")
    }
   }).get()
  }
 });
 var Bb = /%20/g,
  Cb = /#.*$/,
  Db = /([?&])_=[^&]*/,
  Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Gb = /^(?:GET|HEAD)$/,
  Hb = /^\/\//,
  Ib = {},
  Jb = {},
  Kb = "*/".concat("*"),
  Lb = d.createElement("a");
 Lb.href = tb.href;

 function Mb(a) {
  return function(b, c) {
   "string" != typeof b && (c = b, b = "*");
   var d, e = 0,
    f = b.toLowerCase().match(L) || [];
   if (r.isFunction(c))
    while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
  }
 }

 function Nb(a, b, c, d) {
  var e = {},
   f = a === Jb;

  function g(h) {
   var i;
   return e[h] = !0, r.each(a[h] || [], function(a, h) {
    var j = h(b, c, d);
    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
   }), i
  }
  return g(b.dataTypes[0]) || !e["*"] && g("*")
 }

 function Ob(a, b) {
  var c, d, e = r.ajaxSettings.flatOptions || {};
  for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
  return d && r.extend(!0, a, d), a
 }

 function Pb(a, b, c) {
  var d, e, f, g, h = a.contents,
   i = a.dataTypes;
  while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
  if (d)
   for (e in h)
    if (h[e] && h[e].test(d)) {
     i.unshift(e);
     break
    } if (i[0] in c) f = i[0];
  else {
   for (e in c) {
    if (!i[0] || a.converters[e + " " + i[0]]) {
     f = e;
     break
    }
    g || (g = e)
   }
   f = f || g
  }
  if (f) return f !== i[0] && i.unshift(f), c[f]
 }

 function Qb(a, b, c, d) {
  var e, f, g, h, i, j = {},
   k = a.dataTypes.slice();
  if (k[1])
   for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
  f = k.shift();
  while (f)
   if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
    if ("*" === f) f = i;
    else if ("*" !== i && i !== f) {
   if (g = j[i + " " + f] || j["* " + f], !g)
    for (e in j)
     if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
      g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
      break
     } if (g !== !0)
    if (g && a["throws"]) b = g(b);
    else try {
     b = g(b)
    } catch (l) {
     return {
      state: "parsererror",
      error: g ? l : "No conversion from " + i + " to " + f
     }
    }
  }
  return {
   state: "success",
   data: b
  }
 }
 r.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: tb.href,
   type: "GET",
   isLocal: Fb.test(tb.protocol),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": Kb,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
   },
   contents: {
    xml: /\bxml\b/,
    html: /\bhtml/,
    json: /\bjson\b/
   },
   responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
   },
   converters: {
    "* text": String,
    "text html": !0,
    "text json": JSON.parse,
    "text xml": r.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(a, b) {
   return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
  },
  ajaxPrefilter: Mb(Ib),
  ajaxTransport: Mb(Jb),
  ajax: function(b, c) {
   "object" == typeof b && (c = b, b = void 0), c = c || {};
   var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
    p = o.context || o,
    q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
    s = r.Deferred(),
    t = r.Callbacks("once memory"),
    u = o.statusCode || {},
    v = {},
    w = {},
    x = "canceled",
    y = {
     readyState: 0,
     getResponseHeader: function(a) {
      var b;
      if (k) {
       if (!h) {
        h = {};
        while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2]
       }
       b = h[a.toLowerCase()]
      }
      return null == b ? null : b
     },
     getAllResponseHeaders: function() {
      return k ? g : null
     },
     setRequestHeader: function(a, b) {
      return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
     },
     overrideMimeType: function(a) {
      return null == k && (o.mimeType = a), this
     },
     statusCode: function(a) {
      var b;
      if (a)
       if (k) y.always(a[y.status]);
       else
        for (b in a) u[b] = [u[b], a[b]];
      return this
     },
     abort: function(a) {
      var b = a || x;
      return e && e.abort(b), A(0, b), this
     }
    };
   if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
    j = d.createElement("a");
    try {
     j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
    } catch (z) {
     o.crossDomain = !0
    }
   }
   if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
   l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
   for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
   if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
   if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
    if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
    o.async && o.timeout > 0 && (i = a.setTimeout(function() {
     y.abort("timeout")
    }, o.timeout));
    try {
     k = !1, e.send(v, A)
    } catch (z) {
     if (k) throw z;
     A(-1, z)
    }
   } else A(-1, "No Transport");

   function A(b, c, d, h) {
    var j, m, n, v, w, x = c;
    k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
   }
   return y
  },
  getJSON: function(a, b, c) {
   return r.get(a, b, c, "json")
  },
  getScript: function(a, b) {
   return r.get(a, void 0, b, "script")
  }
 }), r.each(["get", "post"], function(a, b) {
  r[b] = function(a, c, d, e) {
   return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
    url: a,
    type: b,
    dataType: e,
    data: c,
    success: d
   }, r.isPlainObject(a) && a))
  }
 }), r._evalUrl = function(a) {
  return r.ajax({
   url: a,
   type: "GET",
   dataType: "script",
   cache: !0,
   async: !1,
   global: !1,
   "throws": !0
  })
 }, r.fn.extend({
  wrapAll: function(a) {
   var b;
   return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
    var a = this;
    while (a.firstElementChild) a = a.firstElementChild;
    return a
   }).append(this)), this
  },
  wrapInner: function(a) {
   return r.isFunction(a) ? this.each(function(b) {
    r(this).wrapInner(a.call(this, b))
   }) : this.each(function() {
    var b = r(this),
     c = b.contents();
    c.length ? c.wrapAll(a) : b.append(a)
   })
  },
  wrap: function(a) {
   var b = r.isFunction(a);
   return this.each(function(c) {
    r(this).wrapAll(b ? a.call(this, c) : a)
   })
  },
  unwrap: function(a) {
   return this.parent(a).not("body").each(function() {
    r(this).replaceWith(this.childNodes)
   }), this
  }
 }), r.expr.pseudos.hidden = function(a) {
  return !r.expr.pseudos.visible(a)
 }, r.expr.pseudos.visible = function(a) {
  return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
 }, r.ajaxSettings.xhr = function() {
  try {
   return new a.XMLHttpRequest
  } catch (b) {}
 };
 var Rb = {
   0: 200,
   1223: 204
  },
  Sb = r.ajaxSettings.xhr();
 o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
  var c, d;
  if (o.cors || Sb && !b.crossDomain) return {
   send: function(e, f) {
    var g, h = b.xhr();
    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
     for (g in b.xhrFields) h[g] = b.xhrFields[g];
    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
    for (g in e) h.setRequestHeader(g, e[g]);
    c = function(a) {
     return function() {
      c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
       binary: h.response
      } : {
       text: h.responseText
      }, h.getAllResponseHeaders()))
     }
    }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
     4 === h.readyState && a.setTimeout(function() {
      c && d()
     })
    }, c = c("abort");
    try {
     h.send(b.hasContent && b.data || null)
    } catch (i) {
     if (c) throw i
    }
   },
   abort: function() {
    c && c()
   }
  }
 }), r.ajaxPrefilter(function(a) {
  a.crossDomain && (a.contents.script = !1)
 }), r.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function(a) {
    return r.globalEval(a), a
   }
  }
 }), r.ajaxPrefilter("script", function(a) {
  void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
 }), r.ajaxTransport("script", function(a) {
  if (a.crossDomain) {
   var b, c;
   return {
    send: function(e, f) {
     b = r("<script>").prop({
      charset: a.scriptCharset,
      src: a.url
     }).on("load error", c = function(a) {
      b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
     }), d.head.appendChild(b[0])
    },
    abort: function() {
     c && c()
    }
   }
  }
 });
 var Tb = [],
  Ub = /(=)\?(?=&|$)|\?\?/;
 r.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var a = Tb.pop() || r.expando + "_" + ub++;
   return this[a] = !0, a
  }
 }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
  var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
  if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
   return g || r.error(e + " was not called"), g[0]
  }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
   g = arguments
  }, d.always(function() {
   void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
  }), "script"
 }), o.createHTMLDocument = function() {
  var a = d.implementation.createHTMLDocument("").body;
  return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
 }(), r.parseHTML = function(a, b, c) {
  if ("string" != typeof a) return [];
  "boolean" == typeof b && (c = b, b = !1);
  var e, f, g;
  return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
 }, r.fn.load = function(a, b, c) {
  var d, e, f, g = this,
   h = a.indexOf(" ");
  return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
   url: a,
   type: e || "GET",
   dataType: "html",
   data: b
  }).done(function(a) {
   f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
  }).always(c && function(a, b) {
   g.each(function() {
    c.apply(this, f || [a.responseText, b, a])
   })
  }), this
 }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
  r.fn[b] = function(a) {
   return this.on(b, a)
  }
 }), r.expr.pseudos.animated = function(a) {
  return r.grep(r.timers, function(b) {
   return a === b.elem
  }).length
 }, r.offset = {
  setOffset: function(a, b, c) {
   var d, e, f, g, h, i, j, k = r.css(a, "position"),
    l = r(a),
    m = {};
   "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
  }
 }, r.fn.extend({
  offset: function(a) {
   if (arguments.length) return void 0 === a ? this : this.each(function(b) {
    r.offset.setOffset(this, a, b)
   });
   var b, c, d, e, f = this[0];
   if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
    top: d.top + e.pageYOffset - c.clientTop,
    left: d.left + e.pageXOffset - c.clientLeft
   }) : {
    top: 0,
    left: 0
   }
  },
  position: function() {
   if (this[0]) {
    var a, b, c = this[0],
     d = {
      top: 0,
      left: 0
     };
    return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
     top: d.top + r.css(a[0], "borderTopWidth", !0),
     left: d.left + r.css(a[0], "borderLeftWidth", !0)
    }), {
     top: b.top - d.top - r.css(c, "marginTop", !0),
     left: b.left - d.left - r.css(c, "marginLeft", !0)
    }
   }
  },
  offsetParent: function() {
   return this.map(function() {
    var a = this.offsetParent;
    while (a && "static" === r.css(a, "position")) a = a.offsetParent;
    return a || ra
   })
  }
 }), r.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, function(a, b) {
  var c = "pageYOffset" === b;
  r.fn[a] = function(d) {
   return T(this, function(a, d, e) {
    var f;
    return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
   }, a, d, arguments.length)
  }
 }), r.each(["top", "left"], function(a, b) {
  r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
   if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c
  })
 }), r.each({
  Height: "height",
  Width: "width"
 }, function(a, b) {
  r.each({
   padding: "inner" + a,
   content: b,
   "": "outer" + a
  }, function(c, d) {
   r.fn[d] = function(e, f) {
    var g = arguments.length && (c || "boolean" != typeof e),
     h = c || (e === !0 || f === !0 ? "margin" : "border");
    return T(this, function(b, c, e) {
     var f;
     return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
    }, b, g ? e : void 0, g)
   }
  })
 }), r.fn.extend({
  bind: function(a, b, c) {
   return this.on(a, null, b, c)
  },
  unbind: function(a, b) {
   return this.off(a, null, b)
  },
  delegate: function(a, b, c, d) {
   return this.on(b, a, c, d)
  },
  undelegate: function(a, b, c) {
   return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
  }
 }), r.holdReady = function(a) {
  a ? r.readyWait++ : r.ready(!0)
 }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
  return r
 });
 var Vb = a.jQuery,
  Wb = a.$;
 return r.noConflict = function(b) {
  return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
 }, b || (a.jQuery = a.$ = r), r
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
 'use strict';

 function e(e) {
  return e && '[object Function]' === {}.toString.call(e)
 }

 function t(e, t) {
  if (1 !== e.nodeType) return [];
  var o = e.ownerDocument.defaultView,
   n = o.getComputedStyle(e, null);
  return t ? n[t] : n
 }

 function o(e) {
  return 'HTML' === e.nodeName ? e : e.parentNode || e.host
 }

 function n(e) {
  if (!e) return document.body;
  switch (e.nodeName) {
   case 'HTML':
   case 'BODY':
    return e.ownerDocument.body;
   case '#document':
    return e.body;
  }
  var i = t(e),
   r = i.overflow,
   p = i.overflowX,
   s = i.overflowY;
  return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
 }

 function r(e) {
  return 11 === e ? pe : 10 === e ? se : pe || se
 }

 function p(e) {
  if (!e) return document.documentElement;
  for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
  var i = n && n.nodeName;
  return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
 }

 function s(e) {
  var t = e.nodeName;
  return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
 }

 function d(e) {
  return null === e.parentNode ? e : d(e.parentNode)
 }

 function a(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
  var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
   n = o ? e : t,
   i = o ? t : e,
   r = document.createRange();
  r.setStart(n, 0), r.setEnd(i, 0);
  var l = r.commonAncestorContainer;
  if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
  var f = d(e);
  return f.host ? a(f.host, t) : a(e, d(t).host)
 }

 function l(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
   o = 'top' === t ? 'scrollTop' : 'scrollLeft',
   n = e.nodeName;
  if ('BODY' === n || 'HTML' === n) {
   var i = e.ownerDocument.documentElement,
    r = e.ownerDocument.scrollingElement || i;
   return r[o]
  }
  return e[o]
 }

 function f(e, t) {
  var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
   n = l(t, 'top'),
   i = l(t, 'left'),
   r = o ? -1 : 1;
  return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
 }

 function m(e, t) {
  var o = 'x' === t ? 'Left' : 'Top',
   n = 'Left' == o ? 'Right' : 'Bottom';
  return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
 }

 function h(e, t, o, n) {
  return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
 }

 function c(e) {
  var t = e.body,
   o = e.documentElement,
   n = r(10) && getComputedStyle(o);
  return {
   height: h('Height', t, o, n),
   width: h('Width', t, o, n)
  }
 }

 function g(e) {
  return fe({}, e, {
   right: e.left + e.width,
   bottom: e.top + e.height
  })
 }

 function u(e) {
  var o = {};
  try {
   if (r(10)) {
    o = e.getBoundingClientRect();
    var n = l(e, 'top'),
     i = l(e, 'left');
    o.top += n, o.left += i, o.bottom += n, o.right += i
   } else o = e.getBoundingClientRect()
  } catch (t) {}
  var p = {
    left: o.left,
    top: o.top,
    width: o.right - o.left,
    height: o.bottom - o.top
   },
   s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
   d = s.width || e.clientWidth || p.right - p.left,
   a = s.height || e.clientHeight || p.bottom - p.top,
   f = e.offsetWidth - d,
   h = e.offsetHeight - a;
  if (f || h) {
   var u = t(e);
   f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
  }
  return g(p)
 }

 function b(e, o) {
  var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
   p = r(10),
   s = 'HTML' === o.nodeName,
   d = u(e),
   a = u(o),
   l = n(e),
   m = t(o),
   h = parseFloat(m.borderTopWidth, 10),
   c = parseFloat(m.borderLeftWidth, 10);
  i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
  var b = g({
   top: d.top - a.top - h,
   left: d.left - a.left - c,
   width: d.width,
   height: d.height
  });
  if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
   var w = parseFloat(m.marginTop, 10),
    y = parseFloat(m.marginLeft, 10);
   b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
  }
  return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
 }

 function w(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
   o = e.ownerDocument.documentElement,
   n = b(e, o),
   i = ee(o.clientWidth, window.innerWidth || 0),
   r = ee(o.clientHeight, window.innerHeight || 0),
   p = t ? 0 : l(o),
   s = t ? 0 : l(o, 'left'),
   d = {
    top: p - n.top + n.marginTop,
    left: s - n.left + n.marginLeft,
    width: i,
    height: r
   };
  return g(d)
 }

 function y(e) {
  var n = e.nodeName;
  return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e))
 }

 function E(e) {
  if (!e || !e.parentElement || r()) return document.documentElement;
  for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
  return o || document.documentElement
 }

 function v(e, t, i, r) {
  var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
   s = {
    top: 0,
    left: 0
   },
   d = p ? E(e) : a(e, t);
  if ('viewport' === r) s = w(d, p);
  else {
   var l;
   'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
   var f = b(l, d, p);
   if ('HTML' === l.nodeName && !y(d)) {
    var m = c(e.ownerDocument),
     h = m.height,
     g = m.width;
    s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
   } else s = f
  }
  i = i || 0;
  var u = 'number' == typeof i;
  return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s
 }

 function x(e) {
  var t = e.width,
   o = e.height;
  return t * o
 }

 function O(e, t, o, n, i) {
  var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
  if (-1 === e.indexOf('auto')) return e;
  var p = v(o, n, r, i),
   s = {
    top: {
     width: p.width,
     height: t.top - p.top
    },
    right: {
     width: p.right - t.right,
     height: p.height
    },
    bottom: {
     width: p.width,
     height: p.bottom - t.bottom
    },
    left: {
     width: t.left - p.left,
     height: p.height
    }
   },
   d = Object.keys(s).map(function(e) {
    return fe({
     key: e
    }, s[e], {
     area: x(s[e])
    })
   }).sort(function(e, t) {
    return t.area - e.area
   }),
   a = d.filter(function(e) {
    var t = e.width,
     n = e.height;
    return t >= o.clientWidth && n >= o.clientHeight
   }),
   l = 0 < a.length ? a[0].key : d[0].key,
   f = e.split('-')[1];
  return l + (f ? '-' + f : '')
 }

 function L(e, t, o) {
  var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
   i = n ? E(t) : a(t, o);
  return b(o, i, n)
 }

 function S(e) {
  var t = e.ownerDocument.defaultView,
   o = t.getComputedStyle(e),
   n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
   i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
   r = {
    width: e.offsetWidth + i,
    height: e.offsetHeight + n
   };
  return r
 }

 function T(e) {
  var t = {
   left: 'right',
   right: 'left',
   bottom: 'top',
   top: 'bottom'
  };
  return e.replace(/left|right|bottom|top/g, function(e) {
   return t[e]
  })
 }

 function D(e, t, o) {
  o = o.split('-')[0];
  var n = S(e),
   i = {
    width: n.width,
    height: n.height
   },
   r = -1 !== ['right', 'left'].indexOf(o),
   p = r ? 'top' : 'left',
   s = r ? 'left' : 'top',
   d = r ? 'height' : 'width',
   a = r ? 'width' : 'height';
  return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
 }

 function C(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0]
 }

 function N(e, t, o) {
  if (Array.prototype.findIndex) return e.findIndex(function(e) {
   return e[t] === o
  });
  var n = C(e, function(e) {
   return e[t] === o
  });
  return e.indexOf(n)
 }

 function P(t, o, n) {
  var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
  return i.forEach(function(t) {
   t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
   var n = t['function'] || t.fn;
   t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
  }), o
 }

 function k() {
  if (!this.state.isDestroyed) {
   var e = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: !1,
    offsets: {}
   };
   e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
  }
 }

 function W(e, t) {
  return e.some(function(e) {
   var o = e.name,
    n = e.enabled;
   return n && o === t
  })
 }

 function H(e) {
  for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
   var i = t[n],
    r = i ? '' + i + o : e;
   if ('undefined' != typeof document.body.style[r]) return r
  }
  return null
 }

 function B() {
  return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
 }

 function A(e) {
  var t = e.ownerDocument;
  return t ? t.defaultView : window
 }

 function M(e, t, o, i) {
  var r = 'BODY' === e.nodeName,
   p = r ? e.ownerDocument.defaultView : e;
  p.addEventListener(t, o, {
   passive: !0
  }), r || M(n(p.parentNode), t, o, i), i.push(p)
 }

 function F(e, t, o, i) {
  o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
   passive: !0
  });
  var r = n(e);
  return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
 }

 function I() {
  this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
 }

 function R(e, t) {
  return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
   e.removeEventListener('scroll', t.updateBound)
  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
 }

 function U() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
 }

 function Y(e) {
  return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
 }

 function j(e, t) {
  Object.keys(t).forEach(function(o) {
   var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
  })
 }

 function V(e, t) {
  Object.keys(t).forEach(function(o) {
   var n = t[o];
   !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
  })
 }

 function q(e, t) {
  var o = e.offsets,
   n = o.popper,
   i = o.reference,
   r = -1 !== ['left', 'right'].indexOf(e.placement),
   p = -1 !== e.placement.indexOf('-'),
   s = i.width % 2 == n.width % 2,
   d = 1 == i.width % 2 && 1 == n.width % 2,
   a = function(e) {
    return e
   },
   l = t ? r || p || s ? $ : Z : a,
   f = t ? $ : a;
  return {
   left: l(d && !p && t ? n.left - 1 : n.left),
   top: f(n.top),
   bottom: f(n.bottom),
   right: l(n.right)
  }
 }

 function K(e, t, o) {
  var n = C(e, function(e) {
    var o = e.name;
    return o === t
   }),
   i = !!n && e.some(function(e) {
    return e.name === o && e.enabled && e.order < n.order
   });
  if (!i) {
   var r = '`' + t + '`';
   console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
  }
  return i
 }

 function z(e) {
  return 'end' === e ? 'start' : 'start' === e ? 'end' : e
 }

 function G(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
   o = ce.indexOf(e),
   n = ce.slice(o + 1).concat(ce.slice(0, o));
  return t ? n.reverse() : n
 }

 function _(e, t, o, n) {
  var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
   r = +i[1],
   p = i[2];
  if (!r) return e;
  if (0 === p.indexOf('%')) {
   var s;
   switch (p) {
    case '%p':
     s = o;
     break;
    case '%':
    case '%r':
    default:
     s = n;
   }
   var d = g(s);
   return d[t] / 100 * r
  }
  if ('vh' === p || 'vw' === p) {
   var a;
   return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
  }
  return r
 }

 function X(e, t, o, n) {
  var i = [0, 0],
   r = -1 !== ['right', 'left'].indexOf(n),
   p = e.split(/(\+|\-)/).map(function(e) {
    return e.trim()
   }),
   s = p.indexOf(C(p, function(e) {
    return -1 !== e.search(/,|\s/)
   }));
  p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  var d = /\s*,\s*|\s+/,
   a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
  return a = a.map(function(e, n) {
   var i = (1 === n ? !r : r) ? 'height' : 'width',
    p = !1;
   return e.reduce(function(e, t) {
    return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
   }, []).map(function(e) {
    return _(e, i, t, o)
   })
  }), a.forEach(function(e, t) {
   e.forEach(function(o, n) {
    Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
   })
  }), i
 }

 function J(e, t) {
  var o, n = t.offset,
   i = e.placement,
   r = e.offsets,
   p = r.popper,
   s = r.reference,
   d = i.split('-')[0];
  return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
 }
 for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1)
  if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
   ne = 1;
   break
  } var i = te && window.Promise,
  re = i ? function(e) {
   var t = !1;
   return function() {
    t || (t = !0, window.Promise.resolve().then(function() {
     t = !1, e()
    }))
   }
  } : function(e) {
   var t = !1;
   return function() {
    t || (t = !0, setTimeout(function() {
     t = !1, e()
    }, ne))
   }
  },
  pe = te && !!(window.MSInputMethodContext && document.documentMode),
  se = te && /MSIE 10/.test(navigator.userAgent),
  de = function(e, t) {
   if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  },
  ae = function() {
   function e(e, t) {
    for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
   }
   return function(t, o, n) {
    return o && e(t.prototype, o), n && e(t, n), t
   }
  }(),
  le = function(e, t, o) {
   return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
   }) : e[t] = o, e
  },
  fe = Object.assign || function(e) {
   for (var t, o = 1; o < arguments.length; o++)
    for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
   return e
  },
  me = te && /Firefox/i.test(navigator.userAgent),
  he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
  ce = he.slice(3),
  ge = {
   FLIP: 'flip',
   CLOCKWISE: 'clockwise',
   COUNTERCLOCKWISE: 'counterclockwise'
  },
  ue = function() {
   function t(o, n) {
    var i = this,
     r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    de(this, t), this.scheduleUpdate = function() {
     return requestAnimationFrame(i.update)
    }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = {
     isDestroyed: !1,
     isCreated: !1,
     scrollParents: []
    }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
     i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
     return fe({
      name: e
     }, i.options.modifiers[e])
    }).sort(function(e, t) {
     return e.order - t.order
    }), this.modifiers.forEach(function(t) {
     t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
    }), this.update();
    var p = this.options.eventsEnabled;
    p && this.enableEventListeners(), this.state.eventsEnabled = p
   }
   return ae(t, [{
    key: 'update',
    value: function() {
     return k.call(this)
    }
   }, {
    key: 'destroy',
    value: function() {
     return B.call(this)
    }
   }, {
    key: 'enableEventListeners',
    value: function() {
     return I.call(this)
    }
   }, {
    key: 'disableEventListeners',
    value: function() {
     return U.call(this)
    }
   }]), t
  }();
 return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = {
  placement: 'bottom',
  positionFixed: !1,
  eventsEnabled: !0,
  removeOnDestroy: !1,
  onCreate: function() {},
  onUpdate: function() {},
  modifiers: {
   shift: {
    order: 100,
    enabled: !0,
    fn: function(e) {
     var t = e.placement,
      o = t.split('-')[0],
      n = t.split('-')[1];
     if (n) {
      var i = e.offsets,
       r = i.reference,
       p = i.popper,
       s = -1 !== ['bottom', 'top'].indexOf(o),
       d = s ? 'left' : 'top',
       a = s ? 'width' : 'height',
       l = {
        start: le({}, d, r[d]),
        end: le({}, d, r[d] + r[a] - p[a])
       };
      e.offsets.popper = fe({}, p, l[n])
     }
     return e
    }
   },
   offset: {
    order: 200,
    enabled: !0,
    fn: J,
    offset: 0
   },
   preventOverflow: {
    order: 300,
    enabled: !0,
    fn: function(e, t) {
     var o = t.boundariesElement || p(e.instance.popper);
     e.instance.reference === o && (o = p(o));
     var n = H('transform'),
      i = e.instance.popper.style,
      r = i.top,
      s = i.left,
      d = i[n];
     i.top = '', i.left = '', i[n] = '';
     var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
     i.top = r, i.left = s, i[n] = d, t.boundaries = a;
     var l = t.priority,
      f = e.offsets.popper,
      m = {
       primary: function(e) {
        var o = f[e];
        return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o)
       },
       secondary: function(e) {
        var o = 'right' === e ? 'left' : 'top',
         n = f[o];
        return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n)
       }
      };
     return l.forEach(function(e) {
      var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
      f = fe({}, f, m[t](e))
     }), e.offsets.popper = f, e
    },
    priority: ['left', 'right', 'top', 'bottom'],
    padding: 5,
    boundariesElement: 'scrollParent'
   },
   keepTogether: {
    order: 400,
    enabled: !0,
    fn: function(e) {
     var t = e.offsets,
      o = t.popper,
      n = t.reference,
      i = e.placement.split('-')[0],
      r = Z,
      p = -1 !== ['top', 'bottom'].indexOf(i),
      s = p ? 'right' : 'bottom',
      d = p ? 'left' : 'top',
      a = p ? 'width' : 'height';
     return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
    }
   },
   arrow: {
    order: 500,
    enabled: !0,
    fn: function(e, o) {
     var n;
     if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
     var i = o.element;
     if ('string' == typeof i) {
      if (i = e.instance.popper.querySelector(i), !i) return e;
     } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
     var r = e.placement.split('-')[0],
      p = e.offsets,
      s = p.popper,
      d = p.reference,
      a = -1 !== ['left', 'right'].indexOf(r),
      l = a ? 'height' : 'width',
      f = a ? 'Top' : 'Left',
      m = f.toLowerCase(),
      h = a ? 'left' : 'top',
      c = a ? 'bottom' : 'right',
      u = S(i)[l];
     d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
     var b = d[m] + d[l] / 2 - u / 2,
      w = t(e.instance.popper),
      y = parseFloat(w['margin' + f], 10),
      E = parseFloat(w['border' + f + 'Width'], 10),
      v = b - e.offsets.popper[m] - y - E;
     return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e
    },
    element: '[x-arrow]'
   },
   flip: {
    order: 600,
    enabled: !0,
    fn: function(e, t) {
     if (W(e.instance.modifiers, 'inner')) return e;
     if (e.flipped && e.placement === e.originalPlacement) return e;
     var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
      n = e.placement.split('-')[0],
      i = T(n),
      r = e.placement.split('-')[1] || '',
      p = [];
     switch (t.behavior) {
      case ge.FLIP:
       p = [n, i];
       break;
      case ge.CLOCKWISE:
       p = G(n);
       break;
      case ge.COUNTERCLOCKWISE:
       p = G(n, !0);
       break;
      default:
       p = t.behavior;
     }
     return p.forEach(function(s, d) {
      if (n !== s || p.length === d + 1) return e;
      n = e.placement.split('-')[0], i = T(n);
      var a = e.offsets.popper,
       l = e.offsets.reference,
       f = Z,
       m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
       h = f(a.left) < f(o.left),
       c = f(a.right) > f(o.right),
       g = f(a.top) < f(o.top),
       u = f(a.bottom) > f(o.bottom),
       b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
       w = -1 !== ['top', 'bottom'].indexOf(n),
       y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
      (m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
     }), e
    },
    behavior: 'flip',
    padding: 5,
    boundariesElement: 'viewport'
   },
   inner: {
    order: 700,
    enabled: !1,
    fn: function(e) {
     var t = e.placement,
      o = t.split('-')[0],
      n = e.offsets,
      i = n.popper,
      r = n.reference,
      p = -1 !== ['left', 'right'].indexOf(o),
      s = -1 === ['top', 'left'].indexOf(o);
     return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
    }
   },
   hide: {
    order: 800,
    enabled: !0,
    fn: function(e) {
     if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
     var t = e.offsets.reference,
      o = C(e.instance.modifiers, function(e) {
       return 'preventOverflow' === e.name
      }).boundaries;
     if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
      if (!0 === e.hide) return e;
      e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
     } else {
      if (!1 === e.hide) return e;
      e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
     }
     return e
    }
   },
   computeStyle: {
    order: 850,
    enabled: !0,
    fn: function(e, t) {
     var o = t.x,
      n = t.y,
      i = e.offsets.popper,
      r = C(e.instance.modifiers, function(e) {
       return 'applyStyle' === e.name
      }).gpuAcceleration;
     void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
     var s, d, a = void 0 === r ? t.gpuAcceleration : r,
      l = p(e.instance.popper),
      f = u(l),
      m = {
       position: i.position
      },
      h = q(e, 2 > window.devicePixelRatio || !me),
      c = 'bottom' === o ? 'top' : 'bottom',
      g = 'right' === n ? 'left' : 'right',
      b = H('transform');
     if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
     else {
      var w = 'bottom' == c ? -1 : 1,
       y = 'right' == g ? -1 : 1;
      m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
     }
     var E = {
      "x-placement": e.placement
     };
     return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e
    },
    gpuAcceleration: !0,
    x: 'bottom',
    y: 'right'
   },
   applyStyle: {
    order: 900,
    enabled: !0,
    fn: function(e) {
     return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
    },
    onLoad: function(e, t, o, n, i) {
     var r = L(i, t, e, o.positionFixed),
      p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
     return t.setAttribute('x-placement', p), j(t, {
      position: o.positionFixed ? 'fixed' : 'absolute'
     }), o
    },
    gpuAcceleration: void 0
   }
  }
 }, ue
});
//# sourceMappingURL=popper.min.js.map
/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
 "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
 "use strict";

 function i(t, e) {
  for (var n = 0; n < e.length; n++) {
   var i = e[n];
   i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
  }
 }

 function s(t, e, n) {
  return e && i(t.prototype, e), n && i(t, n), t
 }

 function r() {
  return (r = Object.assign || function(t) {
   for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
   }
   return t
  }).apply(this, arguments)
 }
 e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
 var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function(t) {
   var e = !1;

   function n(e) {
    var n = this,
     s = !1;
    return t(this).one(i.TRANSITION_END, function() {
     s = !0
    }), setTimeout(function() {
     s || i.triggerTransitionEnd(n)
    }, e), this
   }
   var i = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function(t) {
     do {
      t += ~~(1e6 * Math.random())
     } while (document.getElementById(t));
     return t
    },
    getSelectorFromElement: function(e) {
     var n, i = e.getAttribute("data-target");
     i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
     try {
      return t(document).find(i).length > 0 ? i : null
     } catch (t) {
      return null
     }
    },
    reflow: function(t) {
     return t.offsetHeight
    },
    triggerTransitionEnd: function(n) {
     t(n).trigger(e.end)
    },
    supportsTransitionEnd: function() {
     return Boolean(e)
    },
    isElement: function(t) {
     return (t[0] || t).nodeType
    },
    typeCheckConfig: function(t, e, n) {
     for (var s in n)
      if (Object.prototype.hasOwnProperty.call(n, s)) {
       var r = n[s],
        o = e[s],
        a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
       if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
      } var l
    }
   };
   return e = ("undefined" == typeof window || !window.QUnit) && {
    end: "transitionend"
   }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
    bindType: e.end,
    delegateType: e.end,
    handle: function(e) {
     if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
    }
   }), i
  }(e),
  L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
   CLOSE: "close" + h,
   CLOSED: "closed" + h,
   CLICK_DATA_API: "click" + h + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function() {
   function t(t) {
    this._element = t
   }
   var e = t.prototype;
   return e.close = function(t) {
    t = t || this._element;
    var e = this._getRootElement(t);
    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
   }, e.dispose = function() {
    o.removeData(this._element, l), this._element = null
   }, e._getRootElement = function(t) {
    var e = P.getSelectorFromElement(t),
     n = !1;
    return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
   }, e._triggerCloseEvent = function(t) {
    var e = o.Event(u.CLOSE);
    return o(t).trigger(e), e
   }, e._removeElement = function(t) {
    var e = this;
    o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function(n) {
     return e._destroyElement(t, n)
    }).emulateTransitionEnd(150) : this._destroyElement(t)
   }, e._destroyElement = function(t) {
    o(t).detach().trigger(u.CLOSED).remove()
   }, t._jQueryInterface = function(e) {
    return this.each(function() {
     var n = o(this),
      i = n.data(l);
     i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
    })
   }, t._handleDismiss = function(t) {
    return function(e) {
     e && e.preventDefault(), t.close(this)
    }
   }, s(t, null, [{
    key: "VERSION",
    get: function() {
     return "4.0.0"
    }
   }]), t
  }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function() {
   return o.fn[a] = c, g._jQueryInterface
  }, g),
  R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
   CLICK_DATA_API: "click" + E + T,
   FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
  }, k = function() {
   function t(t) {
    this._element = t
   }
   var e = t.prototype;
   return e.toggle = function() {
    var t = !0,
     e = !0,
     n = p(this._element).closest(D)[0];
    if (n) {
     var i = p(this._element).find(S)[0];
     if (i) {
      if ("radio" === i.type)
       if (i.checked && p(this._element).hasClass(C)) t = !1;
       else {
        var s = p(n).find(w)[0];
        s && p(s).removeClass(C)
       } if (t) {
       if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
       i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
      }
      i.focus(), e = !1
     }
    }
    e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
   }, e.dispose = function() {
    p.removeData(this._element, v), this._element = null
   }, t._jQueryInterface = function(e) {
    return this.each(function() {
     var n = p(this).data(v);
     n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
    })
   }, s(t, null, [{
    key: "VERSION",
    get: function() {
     return "4.0.0"
    }
   }]), t
  }(), p(document).on(O.CLICK_DATA_API, b, function(t) {
   t.preventDefault();
   var e = t.target;
   p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
  }).on(O.FOCUS_BLUR_DATA_API, b, function(t) {
   var e = p(t.target).closest(N)[0];
   p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
  }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function() {
   return p.fn[m] = y, k._jQueryInterface
  }, k),
  j = function(t) {
   var e = "carousel",
    n = "bs.carousel",
    i = "." + n,
    o = t.fn[e],
    a = {
     interval: 5e3,
     keyboard: !0,
     slide: !1,
     pause: "hover",
     wrap: !0
    },
    l = {
     interval: "(number|boolean)",
     keyboard: "boolean",
     slide: "(boolean|string)",
     pause: "(string|boolean)",
     wrap: "boolean"
    },
    h = "next",
    c = "prev",
    u = "left",
    f = "right",
    d = {
     SLIDE: "slide" + i,
     SLID: "slid" + i,
     KEYDOWN: "keydown" + i,
     MOUSEENTER: "mouseenter" + i,
     MOUSELEAVE: "mouseleave" + i,
     TOUCHEND: "touchend" + i,
     LOAD_DATA_API: "load" + i + ".data-api",
     CLICK_DATA_API: "click" + i + ".data-api"
    },
    _ = "carousel",
    g = "active",
    p = "slide",
    m = "carousel-item-right",
    v = "carousel-item-left",
    E = "carousel-item-next",
    T = "carousel-item-prev",
    y = {
     ACTIVE: ".active",
     ACTIVE_ITEM: ".active.carousel-item",
     ITEM: ".carousel-item",
     NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
     INDICATORS: ".carousel-indicators",
     DATA_SLIDE: "[data-slide], [data-slide-to]",
     DATA_RIDE: '[data-ride="carousel"]'
    },
    C = function() {
     function o(e, n) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
     }
     var C = o.prototype;
     return C.next = function() {
      this._isSliding || this._slide(h)
     }, C.nextWhenVisible = function() {
      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
     }, C.prev = function() {
      this._isSliding || this._slide(c)
     }, C.pause = function(e) {
      e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
     }, C.cycle = function(t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
     }, C.to = function(e) {
      var n = this;
      this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
      var i = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1 || e < 0))
       if (this._isSliding) t(this._element).one(d.SLID, function() {
        return n.to(e)
       });
       else {
        if (i === e) return this.pause(), void this.cycle();
        var s = e > i ? h : c;
        this._slide(s, this._items[e])
       }
     }, C.dispose = function() {
      t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
     }, C._getConfig = function(t) {
      return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
     }, C._addEventListeners = function() {
      var e = this;
      this._config.keyboard && t(this._element).on(d.KEYDOWN, function(t) {
       return e._keydown(t)
      }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function(t) {
       return e.pause(t)
      }).on(d.MOUSELEAVE, function(t) {
       return e.cycle(t)
      }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function() {
       e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
        return e.cycle(t)
       }, 500 + e._config.interval)
      }))
     }, C._keydown = function(t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
       case 37:
        t.preventDefault(), this.prev();
        break;
       case 39:
        t.preventDefault(), this.next()
      }
     }, C._getItemIndex = function(e) {
      return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
     }, C._getItemByDirection = function(t, e) {
      var n = t === h,
       i = t === c,
       s = this._getItemIndex(e),
       r = this._items.length - 1;
      if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
      var o = (s + (t === c ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o]
     }, C._triggerSlideEvent = function(e, n) {
      var i = this._getItemIndex(e),
       s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
       r = t.Event(d.SLIDE, {
        relatedTarget: e,
        direction: n,
        from: s,
        to: i
       });
      return t(this._element).trigger(r), r
     }, C._setActiveIndicatorElement = function(e) {
      if (this._indicatorsElement) {
       t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
       var n = this._indicatorsElement.children[this._getItemIndex(e)];
       n && t(n).addClass(g)
      }
     }, C._slide = function(e, n) {
      var i, s, r, o = this,
       a = t(this._element).find(y.ACTIVE_ITEM)[0],
       l = this._getItemIndex(a),
       c = n || a && this._getItemByDirection(e, a),
       _ = this._getItemIndex(c),
       C = Boolean(this._interval);
      if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;
      else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
       this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
       var I = t.Event(d.SLID, {
        relatedTarget: c,
        direction: r,
        from: l,
        to: _
       });
       P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function() {
        t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function() {
         return t(o._element).trigger(I)
        }, 0)
       }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle()
      }
     }, o._jQueryInterface = function(e) {
      return this.each(function() {
       var i = t(this).data(n),
        s = r({}, a, t(this).data());
       "object" == typeof e && (s = r({}, s, e));
       var l = "string" == typeof e ? e : s.slide;
       if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
       else if ("string" == typeof l) {
        if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
        i[l]()
       } else s.interval && (i.pause(), i.cycle())
      })
     }, o._dataApiClickHandler = function(e) {
      var i = P.getSelectorFromElement(this);
      if (i) {
       var s = t(i)[0];
       if (s && t(s).hasClass(_)) {
        var a = r({}, t(s).data(), t(this).data()),
         l = this.getAttribute("data-slide-to");
        l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
       }
      }
     }, s(o, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), o
    }();
   return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function() {
    t(y.DATA_RIDE).each(function() {
     var e = t(this);
     C._jQueryInterface.call(e, e.data())
    })
   }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function() {
    return t.fn[e] = o, C._jQueryInterface
   }, C
  }(e),
  H = function(t) {
   var e = "collapse",
    n = "bs.collapse",
    i = "." + n,
    o = t.fn[e],
    a = {
     toggle: !0,
     parent: ""
    },
    l = {
     toggle: "boolean",
     parent: "(string|element)"
    },
    h = {
     SHOW: "show" + i,
     SHOWN: "shown" + i,
     HIDE: "hide" + i,
     HIDDEN: "hidden" + i,
     CLICK_DATA_API: "click" + i + ".data-api"
    },
    c = "show",
    u = "collapse",
    f = "collapsing",
    d = "collapsed",
    _ = "width",
    g = "height",
    p = {
     ACTIVES: ".show, .collapsing",
     DATA_TOGGLE: '[data-toggle="collapse"]'
    },
    m = function() {
     function i(e, n) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
      for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
       var r = i[s],
        o = P.getSelectorFromElement(r);
       null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
     }
     var o = i.prototype;
     return o.toggle = function() {
      t(this._element).hasClass(c) ? this.hide() : this.show()
     }, o.show = function() {
      var e, s, r = this;
      if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
       var o = t.Event(h.SHOW);
       if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
        var a = this._getDimension();
        t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
        var l = function() {
         t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
        };
        if (P.supportsTransitionEnd()) {
         var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
         t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px"
        } else l()
       }
      }
     }, o.hide = function() {
      var e = this;
      if (!this._isTransitioning && t(this._element).hasClass(c)) {
       var n = t.Event(h.HIDE);
       if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
        var i = this._getDimension();
        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
         for (var s = 0; s < this._triggerArray.length; s++) {
          var r = this._triggerArray[s],
           o = P.getSelectorFromElement(r);
          if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
         }
        this.setTransitioning(!0);
        var a = function() {
         e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
        };
        this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
       }
      }
     }, o.setTransitioning = function(t) {
      this._isTransitioning = t
     }, o.dispose = function() {
      t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
     }, o._getConfig = function(t) {
      return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
     }, o._getDimension = function() {
      return t(this._element).hasClass(_) ? _ : g
     }, o._getParent = function() {
      var e = this,
       n = null;
      P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
      var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return t(n).find(s).each(function(t, n) {
       e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
      }), n
     }, o._addAriaAndCollapsedClass = function(e, n) {
      if (e) {
       var i = t(e).hasClass(c);
       n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
      }
     }, i._getTargetFromElement = function(e) {
      var n = P.getSelectorFromElement(e);
      return n ? t(n)[0] : null
     }, i._jQueryInterface = function(e) {
      return this.each(function() {
       var s = t(this),
        o = s.data(n),
        l = r({}, a, s.data(), "object" == typeof e && e);
       if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
        o[e]()
       }
      })
     }, s(i, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), i
    }();
   return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var i = t(this),
     s = P.getSelectorFromElement(this);
    t(s).each(function() {
     var e = t(this),
      s = e.data(n) ? "toggle" : i.data();
     m._jQueryInterface.call(e, s)
    })
   }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
    return t.fn[e] = o, m._jQueryInterface
   }, m
  }(e),
  W = function(t) {
   var e = "dropdown",
    i = "bs.dropdown",
    o = "." + i,
    a = ".data-api",
    l = t.fn[e],
    h = new RegExp("38|40|27"),
    c = {
     HIDE: "hide" + o,
     HIDDEN: "hidden" + o,
     SHOW: "show" + o,
     SHOWN: "shown" + o,
     CLICK: "click" + o,
     CLICK_DATA_API: "click" + o + a,
     KEYDOWN_DATA_API: "keydown" + o + a,
     KEYUP_DATA_API: "keyup" + o + a
    },
    u = "disabled",
    f = "show",
    d = "dropup",
    _ = "dropright",
    g = "dropleft",
    p = "dropdown-menu-right",
    m = "dropdown-menu-left",
    v = "position-static",
    E = '[data-toggle="dropdown"]',
    T = ".dropdown form",
    y = ".dropdown-menu",
    C = ".navbar-nav",
    I = ".dropdown-menu .dropdown-item:not(.disabled)",
    A = "top-start",
    b = "top-end",
    D = "bottom-start",
    S = "bottom-end",
    w = "right-start",
    N = "left-start",
    O = {
     offset: 0,
     flip: !0,
     boundary: "scrollParent"
    },
    k = {
     offset: "(number|string|function)",
     flip: "boolean",
     boundary: "(string|element)"
    },
    L = function() {
     function a(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
     }
     var l = a.prototype;
     return l.toggle = function() {
      if (!this._element.disabled && !t(this._element).hasClass(u)) {
       var e = a._getParentFromElement(this._element),
        i = t(this._menu).hasClass(f);
       if (a._clearMenus(), !i) {
        var s = {
          relatedTarget: this._element
         },
         r = t.Event(c.SHOW, s);
        if (t(e).trigger(r), !r.isDefaultPrevented()) {
         if (!this._inNavbar) {
          if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
          var o = this._element;
          t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
         }
         "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
        }
       }
      }
     }, l.dispose = function() {
      t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
     }, l.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
     }, l._addEventListeners = function() {
      var e = this;
      t(this._element).on(c.CLICK, function(t) {
       t.preventDefault(), t.stopPropagation(), e.toggle()
      })
     }, l._getConfig = function(n) {
      return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
     }, l._getMenuElement = function() {
      if (!this._menu) {
       var e = a._getParentFromElement(this._element);
       this._menu = t(e).find(y)[0]
      }
      return this._menu
     }, l._getPlacement = function() {
      var e = t(this._element).parent(),
       n = D;
      return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
     }, l._detectNavbar = function() {
      return t(this._element).closest(".navbar").length > 0
     }, l._getPopperConfig = function() {
      var t = this,
       e = {};
      return "function" == typeof this._config.offset ? e.fn = function(e) {
       return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
      } : e.offset = this._config.offset, {
       placement: this._getPlacement(),
       modifiers: {
        offset: e,
        flip: {
         enabled: this._config.flip
        },
        preventOverflow: {
         boundariesElement: this._config.boundary
        }
       }
      }
     }, a._jQueryInterface = function(e) {
      return this.each(function() {
       var n = t(this).data(i);
       if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
        n[e]()
       }
      })
     }, a._clearMenus = function(e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
       for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
        var r = a._getParentFromElement(n[s]),
         o = t(n[s]).data(i),
         l = {
          relatedTarget: n[s]
         };
        if (o) {
         var h = o._menu;
         if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
          var u = t.Event(c.HIDE, l);
          t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
         }
        }
       }
     }, a._getParentFromElement = function(e) {
      var n, i = P.getSelectorFromElement(e);
      return i && (n = t(i)[0]), n || e.parentNode
     }, a._dataApiKeydownHandler = function(e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
       var n = a._getParentFromElement(this),
        i = t(n).hasClass(f);
       if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
        var s = t(n).find(I).get();
        if (0 !== s.length) {
         var r = s.indexOf(e.target);
         38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
        }
       } else {
        if (27 === e.which) {
         var o = t(n).find(E)[0];
         t(o).trigger("focus")
        }
        t(this).trigger("click")
       }
      }
     }, s(a, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return O
      }
     }, {
      key: "DefaultType",
      get: function() {
       return k
      }
     }]), a
    }();
   return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function(e) {
    e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
   }).on(c.CLICK_DATA_API, T, function(t) {
    t.stopPropagation()
   }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function() {
    return t.fn[e] = l, L._jQueryInterface
   }, L
  }(e),
  M = function(t) {
   var e = "modal",
    n = "bs.modal",
    i = "." + n,
    o = t.fn.modal,
    a = {
     backdrop: !0,
     keyboard: !0,
     focus: !0,
     show: !0
    },
    l = {
     backdrop: "(boolean|string)",
     keyboard: "boolean",
     focus: "boolean",
     show: "boolean"
    },
    h = {
     HIDE: "hide" + i,
     HIDDEN: "hidden" + i,
     SHOW: "show" + i,
     SHOWN: "shown" + i,
     FOCUSIN: "focusin" + i,
     RESIZE: "resize" + i,
     CLICK_DISMISS: "click.dismiss" + i,
     KEYDOWN_DISMISS: "keydown.dismiss" + i,
     MOUSEUP_DISMISS: "mouseup.dismiss" + i,
     MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
     CLICK_DATA_API: "click" + i + ".data-api"
    },
    c = "modal-scrollbar-measure",
    u = "modal-backdrop",
    f = "modal-open",
    d = "fade",
    _ = "show",
    g = {
     DIALOG: ".modal-dialog",
     DATA_TOGGLE: '[data-toggle="modal"]',
     DATA_DISMISS: '[data-dismiss="modal"]',
     FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
     STICKY_CONTENT: ".sticky-top",
     NAVBAR_TOGGLER: ".navbar-toggler"
    },
    p = function() {
     function o(e, n) {
      this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
     }
     var p = o.prototype;
     return p.toggle = function(t) {
      return this._isShown ? this.hide() : this.show(t)
     }, p.show = function(e) {
      var n = this;
      if (!this._isTransitioning && !this._isShown) {
       P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
       var i = t.Event(h.SHOW, {
        relatedTarget: e
       });
       t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function(t) {
        return n.hide(t)
       }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function() {
        t(n._element).one(h.MOUSEUP_DISMISS, function(e) {
         t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
        })
       }), this._showBackdrop(function() {
        return n._showElement(e)
       }))
      }
     }, p.hide = function(e) {
      var n = this;
      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
       var i = t.Event(h.HIDE);
       if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
        this._isShown = !1;
        var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
        s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function(t) {
         return n._hideModal(t)
        }).emulateTransitionEnd(300) : this._hideModal()
       }
      }
     }, p.dispose = function() {
      t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
     }, p.handleUpdate = function() {
      this._adjustDialog()
     }, p._getConfig = function(t) {
      return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
     }, p._showElement = function(e) {
      var n = this,
       i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
      var s = t.Event(h.SHOWN, {
        relatedTarget: e
       }),
       r = function() {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
       };
      i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
     }, p._enforceFocus = function() {
      var e = this;
      t(document).off(h.FOCUSIN).on(h.FOCUSIN, function(n) {
       document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
      })
     }, p._setEscapeEvent = function() {
      var e = this;
      this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function(t) {
       27 === t.which && (t.preventDefault(), e.hide())
      }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
     }, p._setResizeEvent = function() {
      var e = this;
      this._isShown ? t(window).on(h.RESIZE, function(t) {
       return e.handleUpdate(t)
      }) : t(window).off(h.RESIZE)
     }, p._hideModal = function() {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
       t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
      })
     }, p._removeBackdrop = function() {
      this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
     }, p._showBackdrop = function(e) {
      var n = this,
       i = t(this._element).hasClass(d) ? d : "";
      if (this._isShown && this._config.backdrop) {
       var s = P.supportsTransitionEnd() && i;
       if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function(t) {
         n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
        }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
       if (!s) return void e();
       t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
      } else if (!this._isShown && this._backdrop) {
       t(this._backdrop).removeClass(_);
       var r = function() {
        n._removeBackdrop(), e && e()
       };
       P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
      } else e && e()
     }, p._adjustDialog = function() {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
     }, p._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
     }, p._checkScrollbar = function() {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
     }, p._setScrollbar = function() {
      var e = this;
      if (this._isBodyOverflowing) {
       t(g.FIXED_CONTENT).each(function(n, i) {
        var s = t(i)[0].style.paddingRight,
         r = t(i).css("padding-right");
        t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
       }), t(g.STICKY_CONTENT).each(function(n, i) {
        var s = t(i)[0].style.marginRight,
         r = t(i).css("margin-right");
        t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
       }), t(g.NAVBAR_TOGGLER).each(function(n, i) {
        var s = t(i)[0].style.marginRight,
         r = t(i).css("margin-right");
        t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
       });
       var n = document.body.style.paddingRight,
        i = t("body").css("padding-right");
       t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
      }
     }, p._resetScrollbar = function() {
      t(g.FIXED_CONTENT).each(function(e, n) {
       var i = t(n).data("padding-right");
       "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
      }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function(e, n) {
       var i = t(n).data("margin-right");
       "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
      });
      var e = t("body").data("padding-right");
      "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
     }, p._getScrollbarWidth = function() {
      var t = document.createElement("div");
      t.className = c, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e
     }, o._jQueryInterface = function(e, i) {
      return this.each(function() {
       var s = t(this).data(n),
        a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
       if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
        if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
        s[e](i)
       } else a.show && s.show(i)
      })
     }, s(o, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), o
    }();
   return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
    var i, s = this,
     o = P.getSelectorFromElement(this);
    o && (i = t(o)[0]);
    var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var l = t(i).one(h.SHOW, function(e) {
     e.isDefaultPrevented() || l.one(h.HIDDEN, function() {
      t(s).is(":visible") && s.focus()
     })
    });
    p._jQueryInterface.call(t(i), a, this)
   }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function() {
    return t.fn.modal = o, p._jQueryInterface
   }, p
  }(e),
  U = function(t) {
   var e = "tooltip",
    i = "bs.tooltip",
    o = "." + i,
    a = t.fn[e],
    l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    h = {
     animation: "boolean",
     template: "string",
     title: "(string|element|function)",
     trigger: "string",
     delay: "(number|object)",
     html: "boolean",
     selector: "(string|boolean)",
     placement: "(string|function)",
     offset: "(number|string)",
     container: "(string|element|boolean)",
     fallbackPlacement: "(string|array)",
     boundary: "(string|element)"
    },
    c = {
     AUTO: "auto",
     TOP: "top",
     RIGHT: "right",
     BOTTOM: "bottom",
     LEFT: "left"
    },
    u = {
     animation: !0,
     template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
     trigger: "hover focus",
     title: "",
     delay: 0,
     html: !1,
     selector: !1,
     placement: "top",
     offset: 0,
     container: !1,
     fallbackPlacement: "flip",
     boundary: "scrollParent"
    },
    f = "show",
    d = "out",
    _ = {
     HIDE: "hide" + o,
     HIDDEN: "hidden" + o,
     SHOW: "show" + o,
     SHOWN: "shown" + o,
     INSERTED: "inserted" + o,
     CLICK: "click" + o,
     FOCUSIN: "focusin" + o,
     FOCUSOUT: "focusout" + o,
     MOUSEENTER: "mouseenter" + o,
     MOUSELEAVE: "mouseleave" + o
    },
    g = "fade",
    p = "show",
    m = ".tooltip-inner",
    v = ".arrow",
    E = "hover",
    T = "focus",
    y = "click",
    C = "manual",
    I = function() {
     function a(t, e) {
      if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
     }
     var I = a.prototype;
     return I.enable = function() {
      this._isEnabled = !0
     }, I.disable = function() {
      this._isEnabled = !1
     }, I.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled
     }, I.toggle = function(e) {
      if (this._isEnabled)
       if (e) {
        var n = this.constructor.DATA_KEY,
         i = t(e.currentTarget).data(n);
        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
       } else {
        if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
        this._enter(null, this)
       }
     }, I.dispose = function() {
      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
     }, I.show = function() {
      var e = this;
      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
      var i = t.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
       t(this.element).trigger(i);
       var s = t.contains(this.element.ownerDocument.documentElement, this.element);
       if (i.isDefaultPrevented() || !s) return;
       var r = this.getTipElement(),
        o = P.getUID(this.constructor.NAME);
       r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
       var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
        h = this._getAttachment(l);
       this.addAttachmentClass(h);
       var c = !1 === this.config.container ? document.body : t(this.config.container);
       t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
        placement: h,
        modifiers: {
         offset: {
          offset: this.config.offset
         },
         flip: {
          behavior: this.config.fallbackPlacement
         },
         arrow: {
          element: v
         },
         preventOverflow: {
          boundariesElement: this.config.boundary
         }
        },
        onCreate: function(t) {
         t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
        },
        onUpdate: function(t) {
         e._handlePopperPlacementChange(t)
        }
       }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
       var u = function() {
        e.config.animation && e._fixTransition();
        var n = e._hoverState;
        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
       };
       P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
      }
     }, I.hide = function(e) {
      var n = this,
       i = this.getTipElement(),
       s = t.Event(this.constructor.Event.HIDE),
       r = function() {
        n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
       };
      t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
     }, I.update = function() {
      null !== this._popper && this._popper.scheduleUpdate()
     }, I.isWithContent = function() {
      return Boolean(this.getTitle())
     }, I.addAttachmentClass = function(e) {
      t(this.getTipElement()).addClass("bs-tooltip-" + e)
     }, I.getTipElement = function() {
      return this.tip = this.tip || t(this.config.template)[0], this.tip
     }, I.setContent = function() {
      var e = t(this.getTipElement());
      this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
     }, I.setElementContent = function(e, n) {
      var i = this.config.html;
      "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
     }, I.getTitle = function() {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
     }, I._getAttachment = function(t) {
      return c[t.toUpperCase()]
     }, I._setListeners = function() {
      var e = this;
      this.config.trigger.split(" ").forEach(function(n) {
       if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
        return e.toggle(t)
       });
       else if (n !== C) {
        var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
         s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
        t(e.element).on(i, e.config.selector, function(t) {
         return e._enter(t)
        }).on(s, e.config.selector, function(t) {
         return e._leave(t)
        })
       }
       t(e.element).closest(".modal").on("hide.bs.modal", function() {
        return e.hide()
       })
      }), this.config.selector ? this.config = r({}, this.config, {
       trigger: "manual",
       selector: ""
      }) : this._fixTitle()
     }, I._fixTitle = function() {
      var t = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
     }, I._enter = function(e, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
       n._hoverState === f && n.show()
      }, n.config.delay.show) : n.show())
     }, I._leave = function(e, n) {
      var i = this.constructor.DATA_KEY;
      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
       n._hoverState === d && n.hide()
      }, n.config.delay.hide) : n.hide())
     }, I._isWithActiveTrigger = function() {
      for (var t in this._activeTrigger)
       if (this._activeTrigger[t]) return !0;
      return !1
     }, I._getConfig = function(n) {
      return "number" == typeof(n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
       show: n.delay,
       hide: n.delay
      }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
     }, I._getDelegateConfig = function() {
      var t = {};
      if (this.config)
       for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      return t
     }, I._cleanTipClass = function() {
      var e = t(this.getTipElement()),
       n = e.attr("class").match(l);
      null !== n && n.length > 0 && e.removeClass(n.join(""))
     }, I._handlePopperPlacementChange = function(t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
     }, I._fixTransition = function() {
      var e = this.getTipElement(),
       n = this.config.animation;
      null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
     }, a._jQueryInterface = function(e) {
      return this.each(function() {
       var n = t(this).data(i),
        s = "object" == typeof e && e;
       if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
        n[e]()
       }
      })
     }, s(a, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return u
      }
     }, {
      key: "NAME",
      get: function() {
       return e
      }
     }, {
      key: "DATA_KEY",
      get: function() {
       return i
      }
     }, {
      key: "Event",
      get: function() {
       return _
      }
     }, {
      key: "EVENT_KEY",
      get: function() {
       return o
      }
     }, {
      key: "DefaultType",
      get: function() {
       return h
      }
     }]), a
    }();
   return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
    return t.fn[e] = a, I._jQueryInterface
   }, I
  }(e),
  x = function(t) {
   var e = "popover",
    n = "bs.popover",
    i = "." + n,
    o = t.fn[e],
    a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    l = r({}, U.Default, {
     placement: "right",
     trigger: "click",
     content: "",
     template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    h = r({}, U.DefaultType, {
     content: "(string|element|function)"
    }),
    c = "fade",
    u = "show",
    f = ".popover-header",
    d = ".popover-body",
    _ = {
     HIDE: "hide" + i,
     HIDDEN: "hidden" + i,
     SHOW: "show" + i,
     SHOWN: "shown" + i,
     INSERTED: "inserted" + i,
     CLICK: "click" + i,
     FOCUSIN: "focusin" + i,
     FOCUSOUT: "focusout" + i,
     MOUSEENTER: "mouseenter" + i,
     MOUSELEAVE: "mouseleave" + i
    },
    g = function(r) {
     var o, g;

     function p() {
      return r.apply(this, arguments) || this
     }
     g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
     var m = p.prototype;
     return m.isWithContent = function() {
      return this.getTitle() || this._getContent()
     }, m.addAttachmentClass = function(e) {
      t(this.getTipElement()).addClass("bs-popover-" + e)
     }, m.getTipElement = function() {
      return this.tip = this.tip || t(this.config.template)[0], this.tip
     }, m.setContent = function() {
      var e = t(this.getTipElement());
      this.setElementContent(e.find(f), this.getTitle());
      var n = this._getContent();
      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
     }, m._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content
     }, m._cleanTipClass = function() {
      var e = t(this.getTipElement()),
       n = e.attr("class").match(a);
      null !== n && n.length > 0 && e.removeClass(n.join(""))
     }, p._jQueryInterface = function(e) {
      return this.each(function() {
       var i = t(this).data(n),
        s = "object" == typeof e ? e : null;
       if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
        i[e]()
       }
      })
     }, s(p, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return l
      }
     }, {
      key: "NAME",
      get: function() {
       return e
      }
     }, {
      key: "DATA_KEY",
      get: function() {
       return n
      }
     }, {
      key: "Event",
      get: function() {
       return _
      }
     }, {
      key: "EVENT_KEY",
      get: function() {
       return i
      }
     }, {
      key: "DefaultType",
      get: function() {
       return h
      }
     }]), p
    }(U);
   return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
    return t.fn[e] = o, g._jQueryInterface
   }, g
  }(e),
  K = function(t) {
   var e = "scrollspy",
    n = "bs.scrollspy",
    i = "." + n,
    o = t.fn[e],
    a = {
     offset: 10,
     method: "auto",
     target: ""
    },
    l = {
     offset: "number",
     method: "string",
     target: "(string|element)"
    },
    h = {
     ACTIVATE: "activate" + i,
     SCROLL: "scroll" + i,
     LOAD_DATA_API: "load" + i + ".data-api"
    },
    c = "dropdown-item",
    u = "active",
    f = {
     DATA_SPY: '[data-spy="scroll"]',
     ACTIVE: ".active",
     NAV_LIST_GROUP: ".nav, .list-group",
     NAV_LINKS: ".nav-link",
     NAV_ITEMS: ".nav-item",
     LIST_ITEMS: ".list-group-item",
     DROPDOWN: ".dropdown",
     DROPDOWN_ITEMS: ".dropdown-item",
     DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
    d = "offset",
    _ = "position",
    g = function() {
     function o(e, n) {
      var i = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function(t) {
       return i._process(t)
      }), this.refresh(), this._process()
     }
     var g = o.prototype;
     return g.refresh = function() {
      var e = this,
       n = this._scrollElement === this._scrollElement.window ? d : _,
       i = "auto" === this._config.method ? n : this._config.method,
       s = i === _ ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
       var n, r = P.getSelectorFromElement(e);
       if (r && (n = t(r)[0]), n) {
        var o = n.getBoundingClientRect();
        if (o.width || o.height) return [t(n)[i]().top + s, r]
       }
       return null
      }).filter(function(t) {
       return t
      }).sort(function(t, e) {
       return t[0] - e[0]
      }).forEach(function(t) {
       e._offsets.push(t[0]), e._targets.push(t[1])
      })
     }, g.dispose = function() {
      t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
     }, g._getConfig = function(n) {
      if ("string" != typeof(n = r({}, a, n)).target) {
       var i = t(n.target).attr("id");
       i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
      }
      return P.typeCheckConfig(e, n, l), n
     }, g._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
     }, g._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
     }, g._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
     }, g._process = function() {
      var t = this._getScrollTop() + this._config.offset,
       e = this._getScrollHeight(),
       n = this._config.offset + e - this._getOffsetHeight();
      if (this._scrollHeight !== e && this.refresh(), t >= n) {
       var i = this._targets[this._targets.length - 1];
       this._activeTarget !== i && this._activate(i)
      } else {
       if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
       for (var s = this._offsets.length; s--;) {
        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
       }
      }
     }, g._activate = function(e) {
      this._activeTarget = e, this._clear();
      var n = this._selector.split(",");
      n = n.map(function(t) {
       return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
      });
      var i = t(n.join(","));
      i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
       relatedTarget: e
      })
     }, g._clear = function() {
      t(this._selector).filter(f.ACTIVE).removeClass(u)
     }, o._jQueryInterface = function(e) {
      return this.each(function() {
       var i = t(this).data(n);
       if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
        i[e]()
       }
      })
     }, s(o, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }, {
      key: "Default",
      get: function() {
       return a
      }
     }]), o
    }();
   return t(window).on(h.LOAD_DATA_API, function() {
    for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
     var i = t(e[n]);
     g._jQueryInterface.call(i, i.data())
    }
   }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
    return t.fn[e] = o, g._jQueryInterface
   }, g
  }(e),
  V = function(t) {
   var e = "bs.tab",
    n = "." + e,
    i = t.fn.tab,
    r = {
     HIDE: "hide" + n,
     HIDDEN: "hidden" + n,
     SHOW: "show" + n,
     SHOWN: "shown" + n,
     CLICK_DATA_API: "click.bs.tab.data-api"
    },
    o = "dropdown-menu",
    a = "active",
    l = "disabled",
    h = "fade",
    c = "show",
    u = ".dropdown",
    f = ".nav, .list-group",
    d = ".active",
    _ = "> li > .active",
    g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    p = ".dropdown-toggle",
    m = "> .dropdown-menu .active",
    v = function() {
     function n(t) {
      this._element = t
     }
     var i = n.prototype;
     return i.show = function() {
      var e = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
       var n, i, s = t(this._element).closest(f)[0],
        o = P.getSelectorFromElement(this._element);
       if (s) {
        var h = "UL" === s.nodeName ? _ : d;
        i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
       }
       var c = t.Event(r.HIDE, {
         relatedTarget: this._element
        }),
        u = t.Event(r.SHOW, {
         relatedTarget: i
        });
       if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
        o && (n = t(o)[0]), this._activate(this._element, s);
        var g = function() {
         var n = t.Event(r.HIDDEN, {
           relatedTarget: e._element
          }),
          s = t.Event(r.SHOWN, {
           relatedTarget: i
          });
         t(i).trigger(n), t(e._element).trigger(s)
        };
        n ? this._activate(n, n.parentNode, g) : g()
       }
      }
     }, i.dispose = function() {
      t.removeData(this._element, e), this._element = null
     }, i._activate = function(e, n, i) {
      var s = this,
       r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
       o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
       a = function() {
        return s._transitionComplete(e, r, i)
       };
      r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
     }, i._transitionComplete = function(e, n, i) {
      if (n) {
       t(n).removeClass(c + " " + a);
       var s = t(n.parentNode).find(m)[0];
       s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
      }
      if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
       var r = t(e).closest(u)[0];
       r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
      }
      i && i()
     }, n._jQueryInterface = function(i) {
      return this.each(function() {
       var s = t(this),
        r = s.data(e);
       if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
        r[i]()
       }
      })
     }, s(n, null, [{
      key: "VERSION",
      get: function() {
       return "4.0.0"
      }
     }]), n
    }();
   return t(document).on(r.CLICK_DATA_API, g, function(e) {
    e.preventDefault(), v._jQueryInterface.call(t(this), "show")
   }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function() {
    return t.fn.tab = i, v._jQueryInterface
   }, v
  }(e);
 ! function(t) {
  if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
 }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
  value: !0
 })
});
//# sourceMappingURL=bootstrap.min.js.map
/* perfect-scrollbar v0.6.16 */
! function t(e, n, r) {
 function o(i, s) {
  if (!n[i]) {
   if (!e[i]) {
    var a = "function" == typeof require && require;
    if (!s && a) return a(i, !0);
    if (l) return l(i, !0);
    var c = new Error("Cannot find module '" + i + "'");
    throw c.code = "MODULE_NOT_FOUND", c
   }
   var u = n[i] = {
    exports: {}
   };
   e[i][0].call(u.exports, function(t) {
    var n = e[i][1][t];
    return o(n ? n : t)
   }, u, u.exports, t, e, n, r)
  }
  return n[i].exports
 }
 for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
 return o
}({
 1: [function(t, e, n) {
  "use strict";

  function r(t) {
   t.fn.perfectScrollbar = function(t) {
    return this.each(function() {
     if ("object" == typeof t || "undefined" == typeof t) {
      var e = t;
      l.get(this) || o.initialize(this, e)
     } else {
      var n = t;
      "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
     }
    })
   }
  }
  var o = t("../main"),
   l = t("../plugin/instances");
  if ("function" == typeof define && define.amd) define(["jquery"], r);
  else {
   var i = window.jQuery ? window.jQuery : window.$;
   "undefined" != typeof i && r(i)
  }
  e.exports = r
 }, {
  "../main": 7,
  "../plugin/instances": 18
 }],
 2: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   var n = t.className.split(" ");
   n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
  }

  function o(t, e) {
   var n = t.className.split(" "),
    r = n.indexOf(e);
   r >= 0 && n.splice(r, 1), t.className = n.join(" ")
  }
  n.add = function(t, e) {
   t.classList ? t.classList.add(e) : r(t, e)
  }, n.remove = function(t, e) {
   t.classList ? t.classList.remove(e) : o(t, e)
  }, n.list = function(t) {
   return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
  }
 }, {}],
 3: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   return window.getComputedStyle(t)[e]
  }

  function o(t, e, n) {
   return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
  }

  function l(t, e) {
   for (var n in e) {
    var r = e[n];
    "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
   }
   return t
  }
  var i = {};
  i.e = function(t, e) {
   var n = document.createElement(t);
   return n.className = e, n
  }, i.appendTo = function(t, e) {
   return e.appendChild(t), t
  }, i.css = function(t, e, n) {
   return "object" == typeof e ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
  }, i.matches = function(t, e) {
   return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
  }, i.remove = function(t) {
   "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
  }, i.queryChildren = function(t, e) {
   return Array.prototype.filter.call(t.childNodes, function(t) {
    return i.matches(t, e)
   })
  }, e.exports = i
 }, {}],
 4: [function(t, e, n) {
  "use strict";
  var r = function(t) {
   this.element = t, this.events = {}
  };
  r.prototype.bind = function(t, e) {
   "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
  }, r.prototype.unbind = function(t, e) {
   var n = "undefined" != typeof e;
   this.events[t] = this.events[t].filter(function(r) {
    return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1)
   }, this)
  }, r.prototype.unbindAll = function() {
   for (var t in this.events) this.unbind(t)
  };
  var o = function() {
   this.eventElements = []
  };
  o.prototype.eventElement = function(t) {
   var e = this.eventElements.filter(function(e) {
    return e.element === t
   })[0];
   return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
  }, o.prototype.bind = function(t, e, n) {
   this.eventElement(t).bind(e, n)
  }, o.prototype.unbind = function(t, e, n) {
   this.eventElement(t).unbind(e, n)
  }, o.prototype.unbindAll = function() {
   for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
  }, o.prototype.once = function(t, e, n) {
   var r = this.eventElement(t),
    o = function(t) {
     r.unbind(e, o), n(t)
    };
   r.bind(e, o)
  }, e.exports = o
 }, {}],
 5: [function(t, e, n) {
  "use strict";
  e.exports = function() {
   function t() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
   }
   return function() {
    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
   }
  }()
 }, {}],
 6: [function(t, e, n) {
  "use strict";
  var r = t("./class"),
   o = t("./dom"),
   l = n.toInt = function(t) {
    return parseInt(t, 10) || 0
   },
   i = n.clone = function(t) {
    if (t) {
     if (t.constructor === Array) return t.map(i);
     if ("object" == typeof t) {
      var e = {};
      for (var n in t) e[n] = i(t[n]);
      return e
     }
     return t
    }
    return null
   };
  n.extend = function(t, e) {
   var n = i(t);
   for (var r in e) n[r] = i(e[r]);
   return n
  }, n.isEditable = function(t) {
   return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
  }, n.removePsClasses = function(t) {
   for (var e = r.list(t), n = 0; n < e.length; n++) {
    var o = e[n];
    0 === o.indexOf("ps-") && r.remove(t, o)
   }
  }, n.outerWidth = function(t) {
   return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"))
  }, n.startScrolling = function(t, e) {
   r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
  }, n.stopScrolling = function(t, e) {
   r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
  }, n.env = {
   isWebKit: "WebkitAppearance" in document.documentElement.style,
   supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
   supportsIePointer: null !== window.navigator.msMaxTouchPoints
  }
 }, {
  "./class": 2,
  "./dom": 3
 }],
 7: [function(t, e, n) {
  "use strict";
  var r = t("./plugin/destroy"),
   o = t("./plugin/initialize"),
   l = t("./plugin/update");
  e.exports = {
   initialize: o,
   update: l,
   destroy: r
  }
 }, {
  "./plugin/destroy": 9,
  "./plugin/initialize": 17,
  "./plugin/update": 21
 }],
 8: [function(t, e, n) {
  "use strict";
  e.exports = {
   handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
   maxScrollbarLength: null,
   minScrollbarLength: null,
   scrollXMarginOffset: 0,
   scrollYMarginOffset: 0,
   suppressScrollX: !1,
   suppressScrollY: !1,
   swipePropagation: !0,
   useBothWheelAxes: !1,
   wheelPropagation: !1,
   wheelSpeed: 1,
   theme: "default"
  }
 }, {}],
 9: [function(t, e, n) {
  "use strict";
  var r = t("../lib/helper"),
   o = t("../lib/dom"),
   l = t("./instances");
  e.exports = function(t) {
   var e = l.get(t);
   e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t))
  }
 }, {
  "../lib/dom": 3,
  "../lib/helper": 6,
  "./instances": 18
 }],
 10: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   function n(t) {
    return t.getBoundingClientRect()
   }
   var r = function(t) {
    t.stopPropagation()
   };
   e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r) {
    var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
     s = o > e.scrollbarYTop ? 1 : -1;
    i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation()
   }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r) {
    var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
     s = o > e.scrollbarXLeft ? 1 : -1;
    i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation()
   })
  }
  var o = t("../instances"),
   l = t("../update-geometry"),
   i = t("../update-scroll");
  e.exports = function(t) {
   var e = o.get(t);
   r(t, e)
  }
 }, {
  "../instances": 18,
  "../update-geometry": 19,
  "../update-scroll": 20
 }],
 11: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   function n(n) {
    var o = r + n * e.railXRatio,
     i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
    o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
    var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
    c(t, "left", s)
   }
   var r = null,
    o = null,
    s = function(e) {
     n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
    },
    u = function() {
     l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
    };
   e.event.bind(e.scrollbarX, "mousedown", function(n) {
    o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
   })
  }

  function o(t, e) {
   function n(n) {
    var o = r + n * e.railYRatio,
     i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
    o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
    var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
    c(t, "top", s)
   }
   var r = null,
    o = null,
    s = function(e) {
     n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
    },
    u = function() {
     l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
    };
   e.event.bind(e.scrollbarY, "mousedown", function(n) {
    o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
   })
  }
  var l = t("../../lib/helper"),
   i = t("../../lib/dom"),
   s = t("../instances"),
   a = t("../update-geometry"),
   c = t("../update-scroll");
  e.exports = function(t) {
   var e = s.get(t);
   r(t, e), o(t, e)
  }
 }, {
  "../../lib/dom": 3,
  "../../lib/helper": 6,
  "../instances": 18,
  "../update-geometry": 19,
  "../update-scroll": 20
 }],
 12: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   function n(n, r) {
    var o = t.scrollTop;
    if (0 === n) {
     if (!e.scrollbarYActive) return !1;
     if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
    }
    var l = t.scrollLeft;
    if (0 === r) {
     if (!e.scrollbarXActive) return !1;
     if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
    }
    return !0
   }
   var r = !1;
   e.event.bind(t, "mouseenter", function() {
    r = !0
   }), e.event.bind(t, "mouseleave", function() {
    r = !1
   });
   var i = !1;
   e.event.bind(e.ownerDocument, "keydown", function(c) {
    if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
     var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");
     if (r || u) {
      var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
      if (d) {
       if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
       else
        for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
       if (o.isEditable(d)) return
      }
      var p = 0,
       f = 0;
      switch (c.which) {
       case 37:
        p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
        break;
       case 38:
        f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
        break;
       case 39:
        p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
        break;
       case 40:
        f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
        break;
       case 33:
        f = 90;
        break;
       case 32:
        f = c.shiftKey ? 90 : -90;
        break;
       case 34:
        f = -90;
        break;
       case 35:
        f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
        break;
       case 36:
        f = c.ctrlKey ? t.scrollTop : e.containerHeight;
        break;
       default:
        return
      }
      a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault()
     }
    }
   })
  }
  var o = t("../../lib/helper"),
   l = t("../../lib/dom"),
   i = t("../instances"),
   s = t("../update-geometry"),
   a = t("../update-scroll");
  e.exports = function(t) {
   var e = i.get(t);
   r(t, e)
  }
 }, {
  "../../lib/dom": 3,
  "../../lib/helper": 6,
  "../instances": 18,
  "../update-geometry": 19,
  "../update-scroll": 20
 }],
 13: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   function n(n, r) {
    var o = t.scrollTop;
    if (0 === n) {
     if (!e.scrollbarYActive) return !1;
     if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
    }
    var l = t.scrollLeft;
    if (0 === r) {
     if (!e.scrollbarXActive) return !1;
     if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
    }
    return !0
   }

   function r(t) {
    var e = t.deltaX,
     n = -1 * t.deltaY;
    return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
   }

   function o(e, n) {
    var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
    if (r) {
     if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;
     var o = r.scrollHeight - r.clientHeight;
     if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && n < 0)) return !0;
     var l = r.scrollLeft - r.clientWidth;
     if (l > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === l && e > 0)) return !0
    }
    return !1
   }

   function s(s) {
    var c = r(s),
     u = c[0],
     d = c[1];
    o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
   }
   var a = !1;
   "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
  }
  var o = t("../instances"),
   l = t("../update-geometry"),
   i = t("../update-scroll");
  e.exports = function(t) {
   var e = o.get(t);
   r(t, e)
  }
 }, {
  "../instances": 18,
  "../update-geometry": 19,
  "../update-scroll": 20
 }],
 14: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   e.event.bind(t, "scroll", function() {
    l(t)
   })
  }
  var o = t("../instances"),
   l = t("../update-geometry");
  e.exports = function(t) {
   var e = o.get(t);
   r(t, e)
  }
 }, {
  "../instances": 18,
  "../update-geometry": 19
 }],
 15: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   function n() {
    var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
    return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
   }

   function r() {
    c || (c = setInterval(function() {
     return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c)
    }, 50))
   }

   function a() {
    c && (clearInterval(c), c = null), o.stopScrolling(t)
   }
   var c = null,
    u = {
     top: 0,
     left: 0
    },
    d = !1;
   e.event.bind(e.ownerDocument, "selectionchange", function() {
    t.contains(n()) ? d = !0 : (d = !1, a())
   }), e.event.bind(window, "mouseup", function() {
    d && (d = !1, a())
   }), e.event.bind(window, "keyup", function() {
    d && (d = !1, a())
   }), e.event.bind(window, "mousemove", function(e) {
    if (d) {
     var n = {
       x: e.pageX,
       y: e.pageY
      },
      l = {
       left: t.offsetLeft,
       right: t.offsetLeft + t.offsetWidth,
       top: t.offsetTop,
       bottom: t.offsetTop + t.offsetHeight
      };
     n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
    }
   })
  }
  var o = t("../../lib/helper"),
   l = t("../instances"),
   i = t("../update-geometry"),
   s = t("../update-scroll");
  e.exports = function(t) {
   var e = l.get(t);
   r(t, e)
  }
 }, {
  "../../lib/helper": 6,
  "../instances": 18,
  "../update-geometry": 19,
  "../update-scroll": 20
 }],
 16: [function(t, e, n) {
  "use strict";

  function r(t, e, n, r) {
   function o(n, r) {
    var o = t.scrollTop,
     l = t.scrollLeft,
     i = Math.abs(n),
     s = Math.abs(r);
    if (s > i) {
     if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
    } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;
    return !0
   }

   function a(e, n) {
    s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t)
   }

   function c() {
    w = !0
   }

   function u() {
    w = !1
   }

   function d(t) {
    return t.targetTouches ? t.targetTouches[0] : t
   }

   function p(t) {
    return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
   }

   function f(t) {
    if (p(t)) {
     Y = !0;
     var e = d(t);
     g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
    }
   }

   function h(t) {
    if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
     var n = d(t),
      r = {
       pageX: n.pageX,
       pageY: n.pageY
      },
      l = r.pageX - g.pageX,
      i = r.pageY - g.pageY;
     a(l, i), g = r;
     var s = (new Date).getTime(),
      c = s - v;
     c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault())
    }
   }

   function b() {
    !w && Y && (Y = !1, clearInterval(y), y = setInterval(function() {
     return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
    }, 10))
   }
   var g = {},
    v = 0,
    m = {},
    y = null,
    w = !1,
    Y = !1;
   n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
  }
  var o = t("../../lib/helper"),
   l = t("../instances"),
   i = t("../update-geometry"),
   s = t("../update-scroll");
  e.exports = function(t) {
   if (o.env.supportsTouch || o.env.supportsIePointer) {
    var e = l.get(t);
    r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
   }
  }
 }, {
  "../../lib/helper": 6,
  "../instances": 18,
  "../update-geometry": 19,
  "../update-scroll": 20
 }],
 17: [function(t, e, n) {
  "use strict";
  var r = t("../lib/helper"),
   o = t("../lib/class"),
   l = t("./instances"),
   i = t("./update-geometry"),
   s = {
    "click-rail": t("./handler/click-rail"),
    "drag-scrollbar": t("./handler/drag-scrollbar"),
    keyboard: t("./handler/keyboard"),
    wheel: t("./handler/mouse-wheel"),
    touch: t("./handler/touch"),
    selection: t("./handler/selection")
   },
   a = t("./handler/native-scroll");
  e.exports = function(t, e) {
   e = "object" == typeof e ? e : {}, o.add(t, "ps-container");
   var n = l.add(t);
   n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function(e) {
    s[e](t)
   }), a(t), i(t)
  }
 }, {
  "../lib/class": 2,
  "../lib/helper": 6,
  "./handler/click-rail": 10,
  "./handler/drag-scrollbar": 11,
  "./handler/keyboard": 12,
  "./handler/mouse-wheel": 13,
  "./handler/native-scroll": 14,
  "./handler/selection": 15,
  "./handler/touch": 16,
  "./instances": 18,
  "./update-geometry": 19
 }],
 18: [function(t, e, n) {
  "use strict";

  function r(t) {
   function e() {
    a.add(t, "ps-focus")
   }

   function n() {
    a.remove(t, "ps-focus")
   }
   var r = this;
   r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function() {
    var e = t.scrollLeft,
     n = null;
    return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
   }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
  }

  function o(t) {
   return t.getAttribute("data-ps-id")
  }

  function l(t, e) {
   t.setAttribute("data-ps-id", e)
  }

  function i(t) {
   t.removeAttribute("data-ps-id")
  }
  var s = t("../lib/helper"),
   a = t("../lib/class"),
   c = t("./default-setting"),
   u = t("../lib/dom"),
   d = t("../lib/event-manager"),
   p = t("../lib/guid"),
   f = {};
  n.add = function(t) {
   var e = p();
   return l(t, e), f[e] = new r(t), f[e]
  }, n.remove = function(t) {
   delete f[o(t)], i(t)
  }, n.get = function(t) {
   return f[o(t)]
  }
 }, {
  "../lib/class": 2,
  "../lib/dom": 3,
  "../lib/event-manager": 4,
  "../lib/guid": 5,
  "../lib/helper": 6,
  "./default-setting": 8
 }],
 19: [function(t, e, n) {
  "use strict";

  function r(t, e) {
   return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
  }

  function o(t, e) {
   var n = {
    width: e.railXWidth
   };
   e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
   var r = {
    top: t.scrollTop,
    height: e.railYHeight
   };
   e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, {
    left: e.scrollbarXLeft,
    width: e.scrollbarXWidth - e.railBorderXWidth
   }), s.css(e.scrollbarY, {
    top: e.scrollbarYTop,
    height: e.scrollbarYHeight - e.railBorderYWidth
   })
  }
  var l = t("../lib/helper"),
   i = t("../lib/class"),
   s = t("../lib/dom"),
   a = t("./instances"),
   c = t("./update-scroll");
  e.exports = function(t) {
   var e = a.get(t);
   e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
   var n;
   t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
    s.remove(t)
   }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
    s.remove(t)
   }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
  }
 }, {
  "../lib/class": 2,
  "../lib/dom": 3,
  "../lib/helper": 6,
  "./instances": 18,
  "./update-scroll": 20
 }],
 20: [function(t, e, n) {
  "use strict";
  var r, o, l = t("./instances"),
   i = function(t) {
    var e = document.createEvent("Event");
    return e.initEvent(t, !0, !0), e
   };
  e.exports = function(t, e, n) {
   if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
   if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
   if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
   "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(i("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(i("ps-x-reach-start")));
   var s = l.get(t);
   "top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(i("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(i("ps-x-reach-end"))), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < r && t.dispatchEvent(i("ps-scroll-up")), "top" === e && n > r && t.dispatchEvent(i("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(i("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(i("ps-scroll-right")), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(i("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(i("ps-scroll-x")))
  }
 }, {
  "./instances": 18
 }],
 21: [function(t, e, n) {
  "use strict";
  var r = t("../lib/helper"),
   o = t("../lib/dom"),
   l = t("./instances"),
   i = t("./update-geometry"),
   s = t("./update-scroll");
  e.exports = function(t) {
   var e = l.get(t);
   e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
  }
 }, {
  "../lib/dom": 3,
  "../lib/helper": 6,
  "./instances": 18,
  "./update-geometry": 19,
  "./update-scroll": 20
 }]
}, {}, [1]);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
! function(t) {
 if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
 else if ("function" == typeof define && define.amd) define([], t);
 else {
  ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
 }
}(function() {
 return function t(e, i, n) {
  function a(r, s) {
   if (!i[r]) {
    if (!e[r]) {
     var l = "function" == typeof require && require;
     if (!s && l) return l(r, !0);
     if (o) return o(r, !0);
     var u = new Error("Cannot find module '" + r + "'");
     throw u.code = "MODULE_NOT_FOUND", u
    }
    var d = i[r] = {
     exports: {}
    };
    e[r][0].call(d.exports, function(t) {
     var i = e[r][1][t];
     return a(i || t)
    }, d, d.exports, t, e, i, n)
   }
   return i[r].exports
  }
  for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) a(n[r]);
  return a
 }({
  1: [function(t, e, i) {}, {}],
  2: [function(t, e, i) {
   var n = t(6);

   function a(t) {
    if (t) {
     var e = [0, 0, 0],
      i = 1,
      a = t.match(/^#([a-fA-F0-9]{3})$/i);
     if (a) {
      a = a[1];
      for (var o = 0; o < e.length; o++) e[o] = parseInt(a[o] + a[o], 16)
     } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
      a = a[1];
      for (o = 0; o < e.length; o++) e[o] = parseInt(a.slice(2 * o, 2 * o + 2), 16)
     } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
      for (o = 0; o < e.length; o++) e[o] = parseInt(a[o + 1]);
      i = parseFloat(a[4])
     } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
      for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(a[o + 1]));
      i = parseFloat(a[4])
     } else if (a = t.match(/(\w+)/)) {
      if ("transparent" == a[1]) return [0, 0, 0, 0];
      if (!(e = n[a[1]])) return
     }
     for (o = 0; o < e.length; o++) e[o] = d(e[o], 0, 255);
     return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
    }
   }

   function o(t) {
    if (t) {
     var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
     if (e) {
      var i = parseFloat(e[4]);
      return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
     }
    }
   }

   function r(t) {
    if (t) {
     var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
     if (e) {
      var i = parseFloat(e[4]);
      return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
     }
    }
   }

   function s(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
   }

   function l(t, e) {
    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
   }

   function u(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
   }

   function d(t, e, i) {
    return Math.min(Math.max(e, t), i)
   }

   function c(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e
   }
   e.exports = {
    getRgba: a,
    getHsla: o,
    getRgb: function(t) {
     var e = a(t);
     return e && e.slice(0, 3)
    },
    getHsl: function(t) {
     var e = o(t);
     return e && e.slice(0, 3)
    },
    getHwb: r,
    getAlpha: function(t) {
     var e = a(t); {
      if (e) return e[3];
      if (e = o(t)) return e[3];
      if (e = r(t)) return e[3]
     }
    },
    hexString: function(t) {
     return "#" + c(t[0]) + c(t[1]) + c(t[2])
    },
    rgbString: function(t, e) {
     if (e < 1 || t[3] && t[3] < 1) return s(t, e);
     return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    },
    rgbaString: s,
    percentString: function(t, e) {
     if (e < 1 || t[3] && t[3] < 1) return l(t, e);
     var i = Math.round(t[0] / 255 * 100),
      n = Math.round(t[1] / 255 * 100),
      a = Math.round(t[2] / 255 * 100);
     return "rgb(" + i + "%, " + n + "%, " + a + "%)"
    },
    percentaString: l,
    hslString: function(t, e) {
     if (e < 1 || t[3] && t[3] < 1) return u(t, e);
     return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
    },
    hslaString: u,
    hwbString: function(t, e) {
     void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
     return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
    },
    keyword: function(t) {
     return h[t.slice(0, 3)]
    }
   };
   var h = {};
   for (var f in n) h[n[f]] = f
  }, {
   6: 6
  }],
  3: [function(t, e, i) {
   var n = t(5),
    a = t(2),
    o = function(t) {
     return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1
     }, void("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t);
     var e
    };
   o.prototype = {
    isValid: function() {
     return this.valid
    },
    rgb: function() {
     return this.setSpace("rgb", arguments)
    },
    hsl: function() {
     return this.setSpace("hsl", arguments)
    },
    hsv: function() {
     return this.setSpace("hsv", arguments)
    },
    hwb: function() {
     return this.setSpace("hwb", arguments)
    },
    cmyk: function() {
     return this.setSpace("cmyk", arguments)
    },
    rgbArray: function() {
     return this.values.rgb
    },
    hslArray: function() {
     return this.values.hsl
    },
    hsvArray: function() {
     return this.values.hsv
    },
    hwbArray: function() {
     var t = this.values;
     return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
    },
    cmykArray: function() {
     return this.values.cmyk
    },
    rgbaArray: function() {
     var t = this.values;
     return t.rgb.concat([t.alpha])
    },
    hslaArray: function() {
     var t = this.values;
     return t.hsl.concat([t.alpha])
    },
    alpha: function(t) {
     return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
    },
    red: function(t) {
     return this.setChannel("rgb", 0, t)
    },
    green: function(t) {
     return this.setChannel("rgb", 1, t)
    },
    blue: function(t) {
     return this.setChannel("rgb", 2, t)
    },
    hue: function(t) {
     return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
    },
    saturation: function(t) {
     return this.setChannel("hsl", 1, t)
    },
    lightness: function(t) {
     return this.setChannel("hsl", 2, t)
    },
    saturationv: function(t) {
     return this.setChannel("hsv", 1, t)
    },
    whiteness: function(t) {
     return this.setChannel("hwb", 1, t)
    },
    blackness: function(t) {
     return this.setChannel("hwb", 2, t)
    },
    value: function(t) {
     return this.setChannel("hsv", 2, t)
    },
    cyan: function(t) {
     return this.setChannel("cmyk", 0, t)
    },
    magenta: function(t) {
     return this.setChannel("cmyk", 1, t)
    },
    yellow: function(t) {
     return this.setChannel("cmyk", 2, t)
    },
    black: function(t) {
     return this.setChannel("cmyk", 3, t)
    },
    hexString: function() {
     return a.hexString(this.values.rgb)
    },
    rgbString: function() {
     return a.rgbString(this.values.rgb, this.values.alpha)
    },
    rgbaString: function() {
     return a.rgbaString(this.values.rgb, this.values.alpha)
    },
    percentString: function() {
     return a.percentString(this.values.rgb, this.values.alpha)
    },
    hslString: function() {
     return a.hslString(this.values.hsl, this.values.alpha)
    },
    hslaString: function() {
     return a.hslaString(this.values.hsl, this.values.alpha)
    },
    hwbString: function() {
     return a.hwbString(this.values.hwb, this.values.alpha)
    },
    keyword: function() {
     return a.keyword(this.values.rgb, this.values.alpha)
    },
    rgbNumber: function() {
     var t = this.values.rgb;
     return t[0] << 16 | t[1] << 8 | t[2]
    },
    luminosity: function() {
     for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
      var n = t[i] / 255;
      e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
     }
     return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
    },
    contrast: function(t) {
     var e = this.luminosity(),
      i = t.luminosity();
     return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
    },
    level: function(t) {
     var e = this.contrast(t);
     return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
    },
    dark: function() {
     var t = this.values.rgb;
     return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
    },
    light: function() {
     return !this.dark()
    },
    negate: function() {
     for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
     return this.setValues("rgb", t), this
    },
    lighten: function(t) {
     var e = this.values.hsl;
     return e[2] += e[2] * t, this.setValues("hsl", e), this
    },
    darken: function(t) {
     var e = this.values.hsl;
     return e[2] -= e[2] * t, this.setValues("hsl", e), this
    },
    saturate: function(t) {
     var e = this.values.hsl;
     return e[1] += e[1] * t, this.setValues("hsl", e), this
    },
    desaturate: function(t) {
     var e = this.values.hsl;
     return e[1] -= e[1] * t, this.setValues("hsl", e), this
    },
    whiten: function(t) {
     var e = this.values.hwb;
     return e[1] += e[1] * t, this.setValues("hwb", e), this
    },
    blacken: function(t) {
     var e = this.values.hwb;
     return e[2] += e[2] * t, this.setValues("hwb", e), this
    },
    greyscale: function() {
     var t = this.values.rgb,
      e = .3 * t[0] + .59 * t[1] + .11 * t[2];
     return this.setValues("rgb", [e, e, e]), this
    },
    clearer: function(t) {
     var e = this.values.alpha;
     return this.setValues("alpha", e - e * t), this
    },
    opaquer: function(t) {
     var e = this.values.alpha;
     return this.setValues("alpha", e + e * t), this
    },
    rotate: function(t) {
     var e = this.values.hsl,
      i = (e[0] + t) % 360;
     return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
    },
    mix: function(t, e) {
     var i = this,
      n = t,
      a = void 0 === e ? .5 : e,
      o = 2 * a - 1,
      r = i.alpha() - n.alpha(),
      s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
      l = 1 - s;
     return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a))
    },
    toJSON: function() {
     return this.rgb()
    },
    clone: function() {
     var t, e, i = new o,
      n = this.values,
      a = i.values;
     for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
     return i
    }
   }, o.prototype.spaces = {
    rgb: ["red", "green", "blue"],
    hsl: ["hue", "saturation", "lightness"],
    hsv: ["hue", "saturation", "value"],
    hwb: ["hue", "whiteness", "blackness"],
    cmyk: ["cyan", "magenta", "yellow", "black"]
   }, o.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100]
   }, o.prototype.getValues = function(t) {
    for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
    return 1 !== e.alpha && (i.a = e.alpha), i
   }, o.prototype.setValues = function(t, e) {
    var i, a, o = this.values,
     r = this.spaces,
     s = this.maxes,
     l = 1;
    if (this.valid = !0, "alpha" === t) l = e;
    else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];
    else if (void 0 !== e[t.charAt(0)]) {
     for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
     l = e.a
    } else if (void 0 !== e[r[t][0]]) {
     var u = r[t];
     for (i = 0; i < t.length; i++) o[t][i] = e[u[i]];
     l = e.alpha
    }
    if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;
    for (i = 0; i < t.length; i++) a = Math.max(0, Math.min(s[t][i], o[t][i])), o[t][i] = Math.round(a);
    for (var d in r) d !== t && (o[d] = n[t][d](o[t]));
    return !0
   }, o.prototype.setSpace = function(t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
   }, o.prototype.setChannel = function(t, e, i) {
    var n = this.values[t];
    return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
   }, "undefined" != typeof window && (window.Color = o), e.exports = o
  }, {
   2: 2,
   5: 5
  }],
  4: [function(t, e, i) {
   function n(t) {
    var e, i, n = t[0] / 255,
     a = t[1] / 255,
     o = t[2] / 255,
     r = Math.min(n, a, o),
     s = Math.max(n, a, o),
     l = s - r;
    return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
   }

   function a(t) {
    var e, i, n = t[0],
     a = t[1],
     o = t[2],
     r = Math.min(n, a, o),
     s = Math.max(n, a, o),
     l = s - r;
    return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
   }

   function o(t) {
    var e = t[0],
     i = t[1],
     a = t[2];
    return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))]
   }

   function s(t) {
    var e, i = t[0] / 255,
     n = t[1] / 255,
     a = t[2] / 255;
    return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
   }

   function l(t) {
    return C[JSON.stringify(t)]
   }

   function u(t) {
    var e = t[0] / 255,
     i = t[1] / 255,
     n = t[2] / 255;
    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
   }

   function d(t) {
    var e = u(t),
     i = e[0],
     n = e[1],
     a = e[2];
    return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
   }

   function c(t) {
    var e, i, n, a, o, r = t[0] / 360,
     s = t[1] / 100,
     l = t[2] / 100;
    if (0 == s) return [o = 255 * l, o, o];
    e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
    for (var u = 0; u < 3; u++)(n = r + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
    return a
   }

   function h(t) {
    var e = t[0] / 60,
     i = t[1] / 100,
     n = t[2] / 100,
     a = Math.floor(e) % 6,
     o = e - Math.floor(e),
     r = 255 * n * (1 - i),
     s = 255 * n * (1 - i * o),
     l = 255 * n * (1 - i * (1 - o));
    n *= 255;
    switch (a) {
     case 0:
      return [n, l, r];
     case 1:
      return [s, n, r];
     case 2:
      return [r, n, l];
     case 3:
      return [r, s, n];
     case 4:
      return [l, r, n];
     case 5:
      return [n, r, s]
    }
   }

   function f(t) {
    var e, i, n, a, o = t[0] / 360,
     s = t[1] / 100,
     l = t[2] / 100,
     u = s + l;
    switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
     default:
     case 6:
     case 0:
      r = i, g = a, b = s;
      break;
     case 1:
      r = a, g = i, b = s;
      break;
     case 2:
      r = s, g = i, b = a;
      break;
     case 3:
      r = s, g = a, b = i;
      break;
     case 4:
      r = a, g = s, b = i;
      break;
     case 5:
      r = i, g = s, b = a
    }
    return [255 * r, 255 * g, 255 * b]
   }

   function p(t) {
    var e = t[0] / 100,
     i = t[1] / 100,
     n = t[2] / 100,
     a = t[3] / 100;
    return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
   }

   function m(t) {
    var e, i, n, a = t[0] / 100,
     o = t[1] / 100,
     r = t[2] / 100;
    return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
   }

   function v(t) {
    var e = t[0],
     i = t[1],
     n = t[2];
    return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
   }

   function x(t) {
    var e, i, n, a, o = t[0],
     r = t[1],
     s = t[2];
    return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
   }

   function y(t) {
    var e, i = t[0],
     n = t[1],
     a = t[2];
    return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
   }

   function k(t) {
    return m(x(t))
   }

   function M(t) {
    var e, i = t[0],
     n = t[1];
    return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
   }

   function w(t) {
    return S[t]
   }
   e.exports = {
    rgb2hsl: n,
    rgb2hsv: a,
    rgb2hwb: o,
    rgb2cmyk: s,
    rgb2keyword: l,
    rgb2xyz: u,
    rgb2lab: d,
    rgb2lch: function(t) {
     return y(d(t))
    },
    hsl2rgb: c,
    hsl2hsv: function(t) {
     var e = t[0],
      i = t[1] / 100,
      n = t[2] / 100;
     if (0 === n) return [0, 0, 0];
     return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
    },
    hsl2hwb: function(t) {
     return o(c(t))
    },
    hsl2cmyk: function(t) {
     return s(c(t))
    },
    hsl2keyword: function(t) {
     return l(c(t))
    },
    hsv2rgb: h,
    hsv2hsl: function(t) {
     var e, i, n = t[0],
      a = t[1] / 100,
      o = t[2] / 100;
     return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
    },
    hsv2hwb: function(t) {
     return o(h(t))
    },
    hsv2cmyk: function(t) {
     return s(h(t))
    },
    hsv2keyword: function(t) {
     return l(h(t))
    },
    hwb2rgb: f,
    hwb2hsl: function(t) {
     return n(f(t))
    },
    hwb2hsv: function(t) {
     return a(f(t))
    },
    hwb2cmyk: function(t) {
     return s(f(t))
    },
    hwb2keyword: function(t) {
     return l(f(t))
    },
    cmyk2rgb: p,
    cmyk2hsl: function(t) {
     return n(p(t))
    },
    cmyk2hsv: function(t) {
     return a(p(t))
    },
    cmyk2hwb: function(t) {
     return o(p(t))
    },
    cmyk2keyword: function(t) {
     return l(p(t))
    },
    keyword2rgb: w,
    keyword2hsl: function(t) {
     return n(w(t))
    },
    keyword2hsv: function(t) {
     return a(w(t))
    },
    keyword2hwb: function(t) {
     return o(w(t))
    },
    keyword2cmyk: function(t) {
     return s(w(t))
    },
    keyword2lab: function(t) {
     return d(w(t))
    },
    keyword2xyz: function(t) {
     return u(w(t))
    },
    xyz2rgb: m,
    xyz2lab: v,
    xyz2lch: function(t) {
     return y(v(t))
    },
    lab2xyz: x,
    lab2rgb: k,
    lab2lch: y,
    lch2lab: M,
    lch2xyz: function(t) {
     return x(M(t))
    },
    lch2rgb: function(t) {
     return k(M(t))
    }
   };
   var S = {
     aliceblue: [240, 248, 255],
     antiquewhite: [250, 235, 215],
     aqua: [0, 255, 255],
     aquamarine: [127, 255, 212],
     azure: [240, 255, 255],
     beige: [245, 245, 220],
     bisque: [255, 228, 196],
     black: [0, 0, 0],
     blanchedalmond: [255, 235, 205],
     blue: [0, 0, 255],
     blueviolet: [138, 43, 226],
     brown: [165, 42, 42],
     burlywood: [222, 184, 135],
     cadetblue: [95, 158, 160],
     chartreuse: [127, 255, 0],
     chocolate: [210, 105, 30],
     coral: [255, 127, 80],
     cornflowerblue: [100, 149, 237],
     cornsilk: [255, 248, 220],
     crimson: [220, 20, 60],
     cyan: [0, 255, 255],
     darkblue: [0, 0, 139],
     darkcyan: [0, 139, 139],
     darkgoldenrod: [184, 134, 11],
     darkgray: [169, 169, 169],
     darkgreen: [0, 100, 0],
     darkgrey: [169, 169, 169],
     darkkhaki: [189, 183, 107],
     darkmagenta: [139, 0, 139],
     darkolivegreen: [85, 107, 47],
     darkorange: [255, 140, 0],
     darkorchid: [153, 50, 204],
     darkred: [139, 0, 0],
     darksalmon: [233, 150, 122],
     darkseagreen: [143, 188, 143],
     darkslateblue: [72, 61, 139],
     darkslategray: [47, 79, 79],
     darkslategrey: [47, 79, 79],
     darkturquoise: [0, 206, 209],
     darkviolet: [148, 0, 211],
     deeppink: [255, 20, 147],
     deepskyblue: [0, 191, 255],
     dimgray: [105, 105, 105],
     dimgrey: [105, 105, 105],
     dodgerblue: [30, 144, 255],
     firebrick: [178, 34, 34],
     floralwhite: [255, 250, 240],
     forestgreen: [34, 139, 34],
     fuchsia: [255, 0, 255],
     gainsboro: [220, 220, 220],
     ghostwhite: [248, 248, 255],
     gold: [255, 215, 0],
     goldenrod: [218, 165, 32],
     gray: [128, 128, 128],
     green: [0, 128, 0],
     greenyellow: [173, 255, 47],
     grey: [128, 128, 128],
     honeydew: [240, 255, 240],
     hotpink: [255, 105, 180],
     indianred: [205, 92, 92],
     indigo: [75, 0, 130],
     ivory: [255, 255, 240],
     khaki: [240, 230, 140],
     lavender: [230, 230, 250],
     lavenderblush: [255, 240, 245],
     lawngreen: [124, 252, 0],
     lemonchiffon: [255, 250, 205],
     lightblue: [173, 216, 230],
     lightcoral: [240, 128, 128],
     lightcyan: [224, 255, 255],
     lightgoldenrodyellow: [250, 250, 210],
     lightgray: [211, 211, 211],
     lightgreen: [144, 238, 144],
     lightgrey: [211, 211, 211],
     lightpink: [255, 182, 193],
     lightsalmon: [255, 160, 122],
     lightseagreen: [32, 178, 170],
     lightskyblue: [135, 206, 250],
     lightslategray: [119, 136, 153],
     lightslategrey: [119, 136, 153],
     lightsteelblue: [176, 196, 222],
     lightyellow: [255, 255, 224],
     lime: [0, 255, 0],
     limegreen: [50, 205, 50],
     linen: [250, 240, 230],
     magenta: [255, 0, 255],
     maroon: [128, 0, 0],
     mediumaquamarine: [102, 205, 170],
     mediumblue: [0, 0, 205],
     mediumorchid: [186, 85, 211],
     mediumpurple: [147, 112, 219],
     mediumseagreen: [60, 179, 113],
     mediumslateblue: [123, 104, 238],
     mediumspringgreen: [0, 250, 154],
     mediumturquoise: [72, 209, 204],
     mediumvioletred: [199, 21, 133],
     midnightblue: [25, 25, 112],
     mintcream: [245, 255, 250],
     mistyrose: [255, 228, 225],
     moccasin: [255, 228, 181],
     navajowhite: [255, 222, 173],
     navy: [0, 0, 128],
     oldlace: [253, 245, 230],
     olive: [128, 128, 0],
     olivedrab: [107, 142, 35],
     orange: [255, 165, 0],
     orangered: [255, 69, 0],
     orchid: [218, 112, 214],
     palegoldenrod: [238, 232, 170],
     palegreen: [152, 251, 152],
     paleturquoise: [175, 238, 238],
     palevioletred: [219, 112, 147],
     papayawhip: [255, 239, 213],
     peachpuff: [255, 218, 185],
     peru: [205, 133, 63],
     pink: [255, 192, 203],
     plum: [221, 160, 221],
     powderblue: [176, 224, 230],
     purple: [128, 0, 128],
     rebeccapurple: [102, 51, 153],
     red: [255, 0, 0],
     rosybrown: [188, 143, 143],
     royalblue: [65, 105, 225],
     saddlebrown: [139, 69, 19],
     salmon: [250, 128, 114],
     sandybrown: [244, 164, 96],
     seagreen: [46, 139, 87],
     seashell: [255, 245, 238],
     sienna: [160, 82, 45],
     silver: [192, 192, 192],
     skyblue: [135, 206, 235],
     slateblue: [106, 90, 205],
     slategray: [112, 128, 144],
     slategrey: [112, 128, 144],
     snow: [255, 250, 250],
     springgreen: [0, 255, 127],
     steelblue: [70, 130, 180],
     tan: [210, 180, 140],
     teal: [0, 128, 128],
     thistle: [216, 191, 216],
     tomato: [255, 99, 71],
     turquoise: [64, 224, 208],
     violet: [238, 130, 238],
     wheat: [245, 222, 179],
     white: [255, 255, 255],
     whitesmoke: [245, 245, 245],
     yellow: [255, 255, 0],
     yellowgreen: [154, 205, 50]
    },
    C = {};
   for (var _ in S) C[JSON.stringify(S[_])] = _
  }, {}],
  5: [function(t, e, i) {
   var n = t(4),
    a = function() {
     return new u
    };
   for (var o in n) {
    a[o + "Raw"] = function(t) {
     return function(e) {
      return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
     }
    }(o);
    var r = /(\w+)2(\w+)/.exec(o),
     s = r[1],
     l = r[2];
    (a[s] = a[s] || {})[l] = a[o] = function(t) {
     return function(e) {
      "number" == typeof e && (e = Array.prototype.slice.call(arguments));
      var i = n[t](e);
      if ("string" == typeof i || void 0 === i) return i;
      for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]);
      return i
     }
    }(o)
   }
   var u = function() {
    this.convs = {}
   };
   u.prototype.routeSpace = function(t, e) {
    var i = e[0];
    return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
   }, u.prototype.setValues = function(t, e) {
    return this.space = t, this.convs = {}, this.convs[t] = e, this
   }, u.prototype.getValues = function(t) {
    var e = this.convs[t];
    if (!e) {
     var i = this.space,
      n = this.convs[i];
     e = a[i][t](n), this.convs[t] = e
    }
    return e
   }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
    u.prototype[t] = function(e) {
     return this.routeSpace(t, arguments)
    }
   }), e.exports = a
  }, {
   4: 4
  }],
  6: [function(t, e, i) {
   "use strict";
   e.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
   }
  }, {}],
  7: [function(t, e, i) {
   var n = t(29)();
   n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
   var a = t(49);
   for (var o in a) a.hasOwnProperty(o) && n.plugins.register(a[o]);
   n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
  }, {
   10: 10,
   11: 11,
   12: 12,
   13: 13,
   14: 14,
   15: 15,
   16: 16,
   17: 17,
   18: 18,
   19: 19,
   20: 20,
   21: 21,
   22: 22,
   23: 23,
   24: 24,
   25: 25,
   26: 26,
   27: 27,
   28: 28,
   29: 29,
   30: 30,
   31: 31,
   32: 32,
   33: 33,
   34: 34,
   35: 35,
   40: 40,
   45: 45,
   48: 48,
   49: 49,
   53: 53,
   54: 54,
   55: 55,
   56: 56,
   57: 57,
   58: 58,
   8: 8,
   9: 9
  }],
  8: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.Bar = function(e, i) {
     return i.type = "bar", new t(e, i)
    }
   }
  }, {}],
  9: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.Bubble = function(e, i) {
     return i.type = "bubble", new t(e, i)
    }
   }
  }, {}],
  10: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.Doughnut = function(e, i) {
     return i.type = "doughnut", new t(e, i)
    }
   }
  }, {}],
  11: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.Line = function(e, i) {
     return i.type = "line", new t(e, i)
    }
   }
  }, {}],
  12: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.PolarArea = function(e, i) {
     return i.type = "polarArea", new t(e, i)
    }
   }
  }, {}],
  13: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.Radar = function(e, i) {
     return i.type = "radar", new t(e, i)
    }
   }
  }, {}],
  14: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    t.Scatter = function(e, i) {
     return i.type = "scatter", new t(e, i)
    }
   }
  }, {}],
  15: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("bar", {
    hover: {
     mode: "label"
    },
    scales: {
     xAxes: [{
      type: "category",
      categoryPercentage: .8,
      barPercentage: .9,
      offset: !0,
      gridLines: {
       offsetGridLines: !0
      }
     }],
     yAxes: [{
      type: "linear"
     }]
    }
   }), n._set("horizontalBar", {
    hover: {
     mode: "index",
     axis: "y"
    },
    scales: {
     xAxes: [{
      type: "linear",
      position: "bottom"
     }],
     yAxes: [{
      position: "left",
      type: "category",
      categoryPercentage: .8,
      barPercentage: .9,
      offset: !0,
      gridLines: {
       offsetGridLines: !0
      }
     }]
    },
    elements: {
     rectangle: {
      borderSkipped: "left"
     }
    },
    tooltips: {
     callbacks: {
      title: function(t, e) {
       var i = "";
       return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
      },
      label: function(t, e) {
       return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
      }
     },
     mode: "index",
     axis: "y"
    }
   }), e.exports = function(t) {
    t.controllers.bar = t.DatasetController.extend({
     dataElementType: a.Rectangle,
     initialize: function() {
      var e;
      t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
     },
     update: function(t) {
      var e, i, n = this.getMeta().data;
      for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
     },
     updateElement: function(t, e, i) {
      var n = this,
       a = n.chart,
       r = n.getMeta(),
       s = n.getDataset(),
       l = t.custom || {},
       u = a.options.elements.rectangle;
      t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
       datasetLabel: s.label,
       label: a.data.labels[e],
       borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
       backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
       borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
       borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
      }, n.updateElementGeometry(t, e, i), t.pivot()
     },
     updateElementGeometry: function(t, e, i) {
      var n = this,
       a = t._model,
       o = n.getValueScale(),
       r = o.getBasePixel(),
       s = o.isHorizontal(),
       l = n._ruler || n.getRuler(),
       u = n.calculateBarValuePixels(n.index, e),
       d = n.calculateBarIndexPixels(n.index, e, l);
      a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size
     },
     getValueScaleId: function() {
      return this.getMeta().yAxisID
     },
     getIndexScaleId: function() {
      return this.getMeta().xAxisID
     },
     getValueScale: function() {
      return this.getScaleForId(this.getValueScaleId())
     },
     getIndexScale: function() {
      return this.getScaleForId(this.getIndexScaleId())
     },
     _getStacks: function(t) {
      var e, i, n = this.chart,
       a = this.getIndexScale().options.stacked,
       o = void 0 === t ? n.data.datasets.length : t + 1,
       r = [];
      for (e = 0; e < o; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
      return r
     },
     getStackCount: function() {
      return this._getStacks().length
     },
     getStackIndex: function(t, e) {
      var i = this._getStacks(t),
       n = void 0 !== e ? i.indexOf(e) : -1;
      return -1 === n ? i.length - 1 : n
     },
     getRuler: function() {
      var t, e, i = this.getIndexScale(),
       n = this.getStackCount(),
       a = this.index,
       r = i.isHorizontal(),
       s = r ? i.left : i.top,
       l = s + (r ? i.width : i.height),
       u = [];
      for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(i.getPixelForValue(null, t, a));
      return {
       min: o.isNullOrUndef(i.options.barThickness) ? function(t, e) {
        var i, n, a, o, r = t.isHorizontal() ? t.width : t.height,
         s = t.getTicks();
        for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, e[a] - e[a - 1]);
        for (a = 0, o = s.length; a < o; ++a) n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;
        return r
       }(i, u) : -1,
       pixels: u,
       start: s,
       end: l,
       stackCount: n,
       scale: i
      }
     },
     calculateBarValuePixels: function(t, e) {
      var i, n, a, o, r, s, l = this.chart,
       u = this.getMeta(),
       d = this.getValueScale(),
       c = l.data.datasets,
       h = d.getRightValue(c[t].data[e]),
       f = d.options.stacked,
       g = u.stack,
       p = 0;
      if (f || void 0 === f && void 0 !== g)
       for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (p += a));
      return o = d.getPixelForValue(p), {
       size: s = ((r = d.getPixelForValue(p + h)) - o) / 2,
       base: o,
       head: r,
       center: r + s / 2
      }
     },
     calculateBarIndexPixels: function(t, e, i) {
      var n, a, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k = i.scale.options,
       M = "flex" === k.barThickness ? (h = e, g = k, m = (f = i).pixels, v = m[h], b = h > 0 ? m[h - 1] : null, x = h < m.length - 1 ? m[h + 1] : null, y = g.categoryPercentage, null === b && (b = v - (null === x ? f.end - v : x - v)), null === x && (x = v + v - b), p = v - (v - b) / 2 * y, {
        chunk: (x - b) / 2 * y / f.stackCount,
        ratio: g.barPercentage,
        start: p
       }) : (n = e, a = i, u = (r = k).barThickness, d = a.stackCount, c = a.pixels[n], o.isNullOrUndef(u) ? (s = a.min * r.categoryPercentage, l = r.barPercentage) : (s = u * d, l = 1), {
        chunk: s / d,
        ratio: l,
        start: c - s / 2
       }),
       w = this.getStackIndex(t, this.getMeta().stack),
       S = M.start + M.chunk * w + M.chunk / 2,
       C = Math.min(o.valueOrDefault(k.maxBarThickness, 1 / 0), M.chunk * M.ratio);
      return {
       base: S - C / 2,
       head: S + C / 2,
       center: S,
       size: C
      }
     },
     draw: function() {
      var t = this.chart,
       e = this.getValueScale(),
       i = this.getMeta().data,
       n = this.getDataset(),
       a = i.length,
       r = 0;
      for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
      o.canvas.unclipArea(t.ctx)
     },
     setHoverStyle: function(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
       i = t._index,
       n = t.custom || {},
       a = t._model;
      a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth)
     },
     removeHoverStyle: function(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
       i = t._index,
       n = t.custom || {},
       a = t._model,
       r = this.chart.options.elements.rectangle;
      a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth)
     }
    }), t.controllers.horizontalBar = t.controllers.bar.extend({
     getValueScaleId: function() {
      return this.getMeta().xAxisID
     },
     getIndexScaleId: function() {
      return this.getMeta().yAxisID
     }
    })
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  16: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("bubble", {
    hover: {
     mode: "single"
    },
    scales: {
     xAxes: [{
      type: "linear",
      position: "bottom",
      id: "x-axis-0"
     }],
     yAxes: [{
      type: "linear",
      position: "left",
      id: "y-axis-0"
     }]
    },
    tooltips: {
     callbacks: {
      title: function() {
       return ""
      },
      label: function(t, e) {
       var i = e.datasets[t.datasetIndex].label || "",
        n = e.datasets[t.datasetIndex].data[t.index];
       return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
      }
     }
    }
   }), e.exports = function(t) {
    t.controllers.bubble = t.DatasetController.extend({
     dataElementType: a.Point,
     update: function(t) {
      var e = this,
       i = e.getMeta().data;
      o.each(i, function(i, n) {
       e.updateElement(i, n, t)
      })
     },
     updateElement: function(t, e, i) {
      var n = this,
       a = n.getMeta(),
       o = t.custom || {},
       r = n.getScaleForId(a.xAxisID),
       s = n.getScaleForId(a.yAxisID),
       l = n._resolveElementOptions(t, e),
       u = n.getDataset().data[e],
       d = n.index,
       c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
       h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
      t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
       backgroundColor: l.backgroundColor,
       borderColor: l.borderColor,
       borderWidth: l.borderWidth,
       hitRadius: l.hitRadius,
       pointStyle: l.pointStyle,
       radius: i ? 0 : l.radius,
       skip: o.skip || isNaN(c) || isNaN(h),
       x: c,
       y: h
      }, t.pivot()
     },
     setHoverStyle: function(t) {
      var e = t._model,
       i = t._options;
      e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor)), e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor)), e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
     },
     removeHoverStyle: function(t) {
      var e = t._model,
       i = t._options;
      e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius
     },
     _resolveElementOptions: function(t, e) {
      var i, n, a, r = this.chart,
       s = r.data.datasets[this.index],
       l = t.custom || {},
       u = r.options.elements.point,
       d = o.options.resolve,
       c = s.data[e],
       h = {},
       f = {
        chart: r,
        dataIndex: e,
        dataset: s,
        datasetIndex: this.index
       },
       g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
      for (i = 0, n = g.length; i < n; ++i) h[a = g[i]] = d([l[a], s[a], u[a]], f, e);
      return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h
     }
    })
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  17: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("doughnut", {
    animation: {
     animateRotate: !0,
     animateScale: !1
    },
    hover: {
     mode: "single"
    },
    legendCallback: function(t) {
     var e = [];
     e.push('<ul class="' + t.id + '-legend">');
     var i = t.data,
      n = i.datasets,
      a = i.labels;
     if (n.length)
      for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
     return e.push("</ul>"), e.join("")
    },
    legend: {
     labels: {
      generateLabels: function(t) {
       var e = t.data;
       return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
        var a = t.getDatasetMeta(0),
         r = e.datasets[0],
         s = a.data[n],
         l = s && s.custom || {},
         u = o.valueAtIndexOrDefault,
         d = t.options.elements.arc;
        return {
         text: i,
         fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
         strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
         lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth),
         hidden: isNaN(r.data[n]) || a.data[n].hidden,
         index: n
        }
       }) : []
      }
     },
     onClick: function(t, e) {
      var i, n, a, o = e.index,
       r = this.chart;
      for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
      r.update()
     }
    },
    cutoutPercentage: 50,
    rotation: -.5 * Math.PI,
    circumference: 2 * Math.PI,
    tooltips: {
     callbacks: {
      title: function() {
       return ""
      },
      label: function(t, e) {
       var i = e.labels[t.index],
        n = ": " + e.datasets[t.datasetIndex].data[t.index];
       return o.isArray(i) ? (i = i.slice())[0] += n : i += n, i
      }
     }
    }
   }), n._set("pie", o.clone(n.doughnut)), n._set("pie", {
    cutoutPercentage: 0
   }), e.exports = function(t) {
    t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
     dataElementType: a.Arc,
     linkScales: o.noop,
     getRingIndex: function(t) {
      for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
      return e
     },
     update: function(t) {
      var e = this,
       i = e.chart,
       n = i.chartArea,
       a = i.options,
       r = a.elements.arc,
       s = n.right - n.left - r.borderWidth,
       l = n.bottom - n.top - r.borderWidth,
       u = Math.min(s, l),
       d = {
        x: 0,
        y: 0
       },
       c = e.getMeta(),
       h = a.cutoutPercentage,
       f = a.circumference;
      if (f < 2 * Math.PI) {
       var g = a.rotation % (2 * Math.PI),
        p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
        m = Math.cos(g),
        v = Math.sin(g),
        b = Math.cos(p),
        x = Math.sin(p),
        y = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
        k = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
        M = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
        w = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
        S = h / 100,
        C = M ? -1 : Math.min(m * (m < 0 ? 1 : S), b * (b < 0 ? 1 : S)),
        _ = w ? -1 : Math.min(v * (v < 0 ? 1 : S), x * (x < 0 ? 1 : S)),
        D = y ? 1 : Math.max(m * (m > 0 ? 1 : S), b * (b > 0 ? 1 : S)),
        I = k ? 1 : Math.max(v * (v > 0 ? 1 : S), x * (x > 0 ? 1 : S)),
        P = .5 * (D - C),
        A = .5 * (I - _);
       u = Math.min(s / P, l / A), d = {
        x: -.5 * (D + C),
        y: -.5 * (I + _)
       }
      }
      i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), o.each(c.data, function(i, n) {
       e.updateElement(i, n, t)
      })
     },
     updateElement: function(t, e, i) {
      var n = this,
       a = n.chart,
       r = a.chartArea,
       s = a.options,
       l = s.animation,
       u = (r.left + r.right) / 2,
       d = (r.top + r.bottom) / 2,
       c = s.rotation,
       h = s.rotation,
       f = n.getDataset(),
       g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
       p = i && l.animateScale ? 0 : n.innerRadius,
       m = i && l.animateScale ? 0 : n.outerRadius,
       v = o.valueAtIndexOrDefault;
      o.extend(t, {
       _datasetIndex: n.index,
       _index: e,
       _model: {
        x: u + a.offsetX,
        y: d + a.offsetY,
        startAngle: c,
        endAngle: h,
        circumference: g,
        outerRadius: m,
        innerRadius: p,
        label: v(f.label, e, a.data.labels[e])
       }
      });
      var b = t._model;
      this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
     },
     removeHoverStyle: function(e) {
      t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
     },
     calculateTotal: function() {
      var t, e = this.getDataset(),
       i = this.getMeta(),
       n = 0;
      return o.each(i.data, function(i, a) {
       t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t))
      }), n
     },
     calculateCircumference: function(t) {
      var e = this.getMeta().total;
      return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
     },
     getMaxBorderWidth: function(t) {
      for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
      return n
     }
    })
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  18: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("line", {
    showLines: !0,
    spanGaps: !1,
    hover: {
     mode: "label"
    },
    scales: {
     xAxes: [{
      type: "category",
      id: "x-axis-0"
     }],
     yAxes: [{
      type: "linear",
      id: "y-axis-0"
     }]
    }
   }), e.exports = function(t) {
    function e(t, e) {
     return o.valueOrDefault(t.showLine, e.showLines)
    }
    t.controllers.line = t.DatasetController.extend({
     datasetElementType: a.Line,
     dataElementType: a.Point,
     update: function(t) {
      var i, n, a, r = this,
       s = r.getMeta(),
       l = s.dataset,
       u = s.data || [],
       d = r.chart.options,
       c = d.elements.line,
       h = r.getScaleForId(s.yAxisID),
       f = r.getDataset(),
       g = e(f, d);
      for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = {
        spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
        tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
        backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
        borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
        borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
        borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
        borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
        borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
        borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
        fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
        steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
        cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
       }, l.pivot()), i = 0, n = u.length; i < n; ++i) r.updateElement(u[i], i, t);
      for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) u[i].pivot()
     },
     getPointBackgroundColor: function(t, e) {
      var i = this.chart.options.elements.point.backgroundColor,
       n = this.getDataset(),
       a = t.custom || {};
      return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
     },
     getPointBorderColor: function(t, e) {
      var i = this.chart.options.elements.point.borderColor,
       n = this.getDataset(),
       a = t.custom || {};
      return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
     },
     getPointBorderWidth: function(t, e) {
      var i = this.chart.options.elements.point.borderWidth,
       n = this.getDataset(),
       a = t.custom || {};
      return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth) ? i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i
     },
     updateElement: function(t, e, i) {
      var n, a, r = this,
       s = r.getMeta(),
       l = t.custom || {},
       u = r.getDataset(),
       d = r.index,
       c = u.data[e],
       h = r.getScaleForId(s.yAxisID),
       f = r.getScaleForId(s.xAxisID),
       g = r.chart.options.elements.point;
      void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == typeof c ? c : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
       x: n,
       y: a,
       skip: l.skip || isNaN(n) || isNaN(a),
       radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
       pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
       backgroundColor: r.getPointBackgroundColor(t, e),
       borderColor: r.getPointBorderColor(t, e),
       borderWidth: r.getPointBorderWidth(t, e),
       tension: s.dataset._model ? s.dataset._model.tension : 0,
       steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
       hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
      }
     },
     calculatePointY: function(t, e, i) {
      var n, a, o, r = this.chart,
       s = this.getMeta(),
       l = this.getScaleForId(s.yAxisID),
       u = 0,
       d = 0;
      if (l.options.stacked) {
       for (n = 0; n < i; n++)
        if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
         var c = Number(l.getRightValue(a.data[e]));
         c < 0 ? d += c || 0 : u += c || 0
        } var h = Number(l.getRightValue(t));
       return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h)
      }
      return l.getPixelForValue(t)
     },
     updateBezierControlPoints: function() {
      var t, e, i, n, a = this.getMeta(),
       r = this.chart.chartArea,
       s = a.data || [];

      function l(t, e, i) {
       return Math.max(Math.min(t, i), e)
      }
      if (a.dataset._model.spanGaps && (s = s.filter(function(t) {
        return !t._model.skip
       })), "monotone" === a.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s);
      else
       for (t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = o.splineCurve(o.previousItem(s, t)._model, i, o.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
      if (this.chart.options.elements.line.capBezierPoints)
       for (t = 0, e = s.length; t < e; ++t)(i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom)
     },
     draw: function() {
      var t = this.chart,
       i = this.getMeta(),
       n = i.data || [],
       a = t.chartArea,
       r = n.length,
       s = 0;
      for (o.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), o.canvas.unclipArea(t.ctx); s < r; ++s) n[s].draw(a)
     },
     setHoverStyle: function(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
       i = t._index,
       n = t.custom || {},
       a = t._model;
      a.radius = n.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
     },
     removeHoverStyle: function(t) {
      var e = this,
       i = e.chart.data.datasets[t._datasetIndex],
       n = t._index,
       a = t.custom || {},
       r = t._model;
      void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n)
     }
    })
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  19: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("polarArea", {
    scale: {
     type: "radialLinear",
     angleLines: {
      display: !1
     },
     gridLines: {
      circular: !0
     },
     pointLabels: {
      display: !1
     },
     ticks: {
      beginAtZero: !0
     }
    },
    animation: {
     animateRotate: !0,
     animateScale: !0
    },
    startAngle: -.5 * Math.PI,
    legendCallback: function(t) {
     var e = [];
     e.push('<ul class="' + t.id + '-legend">');
     var i = t.data,
      n = i.datasets,
      a = i.labels;
     if (n.length)
      for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
     return e.push("</ul>"), e.join("")
    },
    legend: {
     labels: {
      generateLabels: function(t) {
       var e = t.data;
       return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
        var a = t.getDatasetMeta(0),
         r = e.datasets[0],
         s = a.data[n].custom || {},
         l = o.valueAtIndexOrDefault,
         u = t.options.elements.arc;
        return {
         text: i,
         fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor),
         strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor),
         lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth),
         hidden: isNaN(r.data[n]) || a.data[n].hidden,
         index: n
        }
       }) : []
      }
     },
     onClick: function(t, e) {
      var i, n, a, o = e.index,
       r = this.chart;
      for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
      r.update()
     }
    },
    tooltips: {
     callbacks: {
      title: function() {
       return ""
      },
      label: function(t, e) {
       return e.labels[t.index] + ": " + t.yLabel
      }
     }
    }
   }), e.exports = function(t) {
    t.controllers.polarArea = t.DatasetController.extend({
     dataElementType: a.Arc,
     linkScales: o.noop,
     update: function(t) {
      var e = this,
       i = e.chart,
       n = i.chartArea,
       a = e.getMeta(),
       r = i.options,
       s = r.elements.arc,
       l = Math.min(n.right - n.left, n.bottom - n.top);
      i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function(i, n) {
       e.updateElement(i, n, t)
      })
     },
     updateElement: function(t, e, i) {
      for (var n = this, a = n.chart, r = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = n.getMeta(), m = 0; m < e; ++m) isNaN(r.data[m]) || p.data[m].hidden || ++g;
      var v = s.startAngle,
       b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
       x = v + c * g,
       y = x + (t.hidden ? 0 : c),
       k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
      o.extend(t, {
       _datasetIndex: n.index,
       _index: e,
       _scale: u,
       _model: {
        x: h,
        y: f,
        innerRadius: 0,
        outerRadius: i ? k : b,
        startAngle: i && l.animateRotate ? v : x,
        endAngle: i && l.animateRotate ? v : y,
        label: o.valueAtIndexOrDefault(d, e, d[e])
       }
      }), n.removeHoverStyle(t), t.pivot()
     },
     removeHoverStyle: function(e) {
      t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
     },
     countVisibleElements: function() {
      var t = this.getDataset(),
       e = this.getMeta(),
       i = 0;
      return o.each(e.data, function(e, n) {
       isNaN(t.data[n]) || e.hidden || i++
      }), i
     },
     calculateCircumference: function(t) {
      var e = this.getMeta().count;
      return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
     }
    })
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  20: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("radar", {
    scale: {
     type: "radialLinear"
    },
    elements: {
     line: {
      tension: 0
     }
    }
   }), e.exports = function(t) {
    t.controllers.radar = t.DatasetController.extend({
     datasetElementType: a.Line,
     dataElementType: a.Point,
     linkScales: o.noop,
     update: function(t) {
      var e = this,
       i = e.getMeta(),
       n = i.dataset,
       a = i.data,
       r = n.custom || {},
       s = e.getDataset(),
       l = e.chart.options.elements.line,
       u = e.chart.scale;
      void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(i.dataset, {
       _datasetIndex: e.index,
       _scale: u,
       _children: a,
       _loop: !0,
       _model: {
        tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
        backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
        borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
        borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
        fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
        borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
        borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
        borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
        borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
       }
      }), i.dataset.pivot(), o.each(a, function(i, n) {
       e.updateElement(i, n, t)
      }, e), e.updateBezierControlPoints()
     },
     updateElement: function(t, e, i) {
      var n = this,
       a = t.custom || {},
       r = n.getDataset(),
       s = n.chart.scale,
       l = n.chart.options.elements.point,
       u = s.getPointPositionForValue(e, r.data[e]);
      void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
       _datasetIndex: n.index,
       _index: e,
       _scale: s,
       _model: {
        x: i ? s.xCenter : u.x,
        y: i ? s.yCenter : u.y,
        tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
        radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
        backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
        borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
        borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
        pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
        hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
       }
      }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
     },
     updateBezierControlPoints: function() {
      var t = this.chart.chartArea,
       e = this.getMeta();
      o.each(e.data, function(i, n) {
       var a = i._model,
        r = o.splineCurve(o.previousItem(e.data, n, !0)._model, a, o.nextItem(e.data, n, !0)._model, a.tension);
       a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
      })
     },
     setHoverStyle: function(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
       i = t.custom || {},
       n = t._index,
       a = t._model;
      a.radius = i.hoverRadius ? i.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth)
     },
     removeHoverStyle: function(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
       i = t.custom || {},
       n = t._index,
       a = t._model,
       r = this.chart.options.elements.point;
      a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth)
     }
    })
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  21: [function(t, e, i) {
   "use strict";
   t(25)._set("scatter", {
    hover: {
     mode: "single"
    },
    scales: {
     xAxes: [{
      id: "x-axis-1",
      type: "linear",
      position: "bottom"
     }],
     yAxes: [{
      id: "y-axis-1",
      type: "linear",
      position: "left"
     }]
    },
    showLines: !1,
    tooltips: {
     callbacks: {
      title: function() {
       return ""
      },
      label: function(t) {
       return "(" + t.xLabel + ", " + t.yLabel + ")"
      }
     }
    }
   }), e.exports = function(t) {
    t.controllers.scatter = t.controllers.line
   }
  }, {
   25: 25
  }],
  22: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45);
   n._set("global", {
    animation: {
     duration: 1e3,
     easing: "easeOutQuart",
     onProgress: o.noop,
     onComplete: o.noop
    }
   }), e.exports = function(t) {
    t.Animation = a.extend({
     chart: null,
     currentStep: 0,
     numSteps: 60,
     easing: "",
     render: null,
     onAnimationProgress: null,
     onAnimationComplete: null
    }), t.animationService = {
     frameDuration: 17,
     animations: [],
     dropFrames: 0,
     request: null,
     addAnimation: function(t, e, i, n) {
      var a, o, r = this.animations;
      for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
       if (r[a].chart === t) return void(r[a] = e);
      r.push(e), 1 === r.length && this.requestAnimationFrame()
     },
     cancelAnimation: function(t) {
      var e = o.findIndex(this.animations, function(e) {
       return e.chart === t
      }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
     },
     requestAnimationFrame: function() {
      var t = this;
      null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
       t.request = null, t.startDigest()
      }))
     },
     startDigest: function() {
      var t = this,
       e = Date.now(),
       i = 0;
      t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
      var n = Date.now();
      t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
     },
     advance: function(t) {
      for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
     }
    }, Object.defineProperty(t.Animation.prototype, "animationObject", {
     get: function() {
      return this
     }
    }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
     get: function() {
      return this.chart
     },
     set: function(t) {
      this.chart = t
     }
    })
   }
  }, {
   25: 25,
   26: 26,
   45: 45
  }],
  23: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(45),
    o = t(28),
    r = t(30),
    s = t(48),
    l = t(31);
   e.exports = function(t) {
    function e(t) {
     return "top" === t || "bottom" === t
    }
    t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
     construct: function(e, i) {
      var o, r, l = this;
      (r = (o = (o = i) || {}).data = o.data || {}).datasets = r.datasets || [], r.labels = r.labels || [], o.options = a.configMerge(n.global, n[o.type], o.options || {}), i = o;
      var u = s.acquireContext(e, i),
       d = u && u.canvas,
       c = d && d.height,
       h = d && d.width;
      l.id = a.uid(), l.ctx = u, l.canvas = d, l.config = i, l.width = h, l.height = c, l.aspectRatio = c ? h / c : null, l.options = i.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", {
       get: function() {
        return l.config.data
       },
       set: function(t) {
        l.config.data = t
       }
      }), u && d ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item")
     },
     initialize: function() {
      var t = this;
      return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t
     },
     clear: function() {
      return a.canvas.clear(this), this
     },
     stop: function() {
      return t.animationService.cancelAnimation(this), this
     },
     resize: function(t) {
      var e = this,
       i = e.options,
       n = e.canvas,
       o = i.maintainAspectRatio && e.aspectRatio || null,
       r = Math.max(0, Math.floor(a.getMaximumWidth(n))),
       s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(n)));
      if ((e.width !== r || e.height !== s) && (n.width = e.width = r, n.height = e.height = s, n.style.width = r + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) {
       var u = {
        width: r,
        height: s
       };
       l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration)
      }
     },
     ensureScalesHaveIDs: function() {
      var t = this.options,
       e = t.scales || {},
       i = t.scale;
      a.each(e.xAxes, function(t, e) {
       t.id = t.id || "x-axis-" + e
      }), a.each(e.yAxes, function(t, e) {
       t.id = t.id || "y-axis-" + e
      }), i && (i.id = i.id || "scale")
     },
     buildOrUpdateScales: function() {
      var i = this,
       n = i.options,
       o = i.scales || {},
       r = [],
       s = Object.keys(o).reduce(function(t, e) {
        return t[e] = !1, t
       }, {});
      n.scales && (r = r.concat((n.scales.xAxes || []).map(function(t) {
       return {
        options: t,
        dtype: "category",
        dposition: "bottom"
       }
      }), (n.scales.yAxes || []).map(function(t) {
       return {
        options: t,
        dtype: "linear",
        dposition: "left"
       }
      }))), n.scale && r.push({
       options: n.scale,
       dtype: "radialLinear",
       isDefault: !0,
       dposition: "chartArea"
      }), a.each(r, function(n) {
       var r = n.options,
        l = r.id,
        u = a.valueOrDefault(r.type, n.dtype);
       e(r.position) !== e(n.dposition) && (r.position = n.dposition), s[l] = !0;
       var d = null;
       if (l in o && o[l].type === u)(d = o[l]).options = r, d.ctx = i.ctx, d.chart = i;
       else {
        var c = t.scaleService.getScaleConstructor(u);
        if (!c) return;
        d = new c({
         id: l,
         type: u,
         options: r,
         ctx: i.ctx,
         chart: i
        }), o[d.id] = d
       }
       d.mergeTicksOptions(), n.isDefault && (i.scale = d)
      }), a.each(s, function(t, e) {
       t || delete o[e]
      }), i.scales = o, t.scaleService.addScalesToLayout(this)
     },
     buildOrUpdateControllers: function() {
      var e = this,
       i = [],
       n = [];
      return a.each(e.data.datasets, function(a, o) {
       var r = e.getDatasetMeta(o),
        s = a.type || e.config.type;
       if (r.type && r.type !== s && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(o), r.controller.linkScales();
       else {
        var l = t.controllers[r.type];
        if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
        r.controller = new l(e, o), n.push(r.controller)
       }
      }, e), n
     },
     resetElements: function() {
      var t = this;
      a.each(t.data.datasets, function(e, i) {
       t.getDatasetMeta(i).controller.reset()
      }, t)
     },
     reset: function() {
      this.resetElements(), this.tooltip.initialize()
     },
     update: function(e) {
      var i, n, o = this;
      if (e && "object" == typeof e || (e = {
        duration: e,
        lazy: arguments[1]
       }), n = (i = o).options, a.each(i.scales, function(t) {
        r.removeBox(i, t)
       }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(o), !1 !== l.notify(o, "beforeUpdate")) {
       o.tooltip._data = o.data;
       var s = o.buildOrUpdateControllers();
       a.each(o.data.datasets, function(t, e) {
        o.getDatasetMeta(e).controller.buildOrUpdateElements()
       }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(s, function(t) {
        t.reset()
       }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], l.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
        duration: e.duration,
        easing: e.easing,
        lazy: e.lazy
       } : o.render(e)
      }
     },
     updateLayout: function() {
      !1 !== l.notify(this, "beforeLayout") && (r.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
     },
     updateDatasets: function() {
      if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
       for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
       l.notify(this, "afterDatasetsUpdate")
      }
     },
     updateDataset: function(t) {
      var e = this.getDatasetMeta(t),
       i = {
        meta: e,
        index: t
       };
      !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]))
     },
     render: function(e) {
      var i = this;
      e && "object" == typeof e || (e = {
       duration: e,
       lazy: arguments[1]
      });
      var n = e.duration,
       o = e.lazy;
      if (!1 !== l.notify(i, "beforeRender")) {
       var r = i.options.animation,
        s = function(t) {
         l.notify(i, "afterRender"), a.callback(r && r.onComplete, [t], i)
        };
       if (r && (void 0 !== n && 0 !== n || void 0 === n && 0 !== r.duration)) {
        var u = new t.Animation({
         numSteps: (n || r.duration) / 16.66,
         easing: e.easing || r.easing,
         render: function(t, e) {
          var i = a.easing.effects[e.easing],
           n = e.currentStep,
           o = n / e.numSteps;
          t.draw(i(o), o, n)
         },
         onAnimationProgress: r.onProgress,
         onAnimationComplete: s
        });
        t.animationService.addAnimation(i, u, n, o)
       } else i.draw(), s(new t.Animation({
        numSteps: 0,
        chart: i
       }));
       return i
      }
     },
     draw: function(t) {
      var e = this;
      e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function(t) {
       t.draw(e.chartArea)
      }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]))
     },
     transition: function(t) {
      for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
      this.tooltip.transition(t)
     },
     drawDatasets: function(t) {
      var e = this;
      if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
       for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
       l.notify(e, "afterDatasetsDraw", [t])
      }
     },
     drawDataset: function(t, e) {
      var i = this.getDatasetMeta(t),
       n = {
        meta: i,
        index: t,
        easingValue: e
       };
      !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]))
     },
     _drawTooltip: function(t) {
      var e = this.tooltip,
       i = {
        tooltip: e,
        easingValue: t
       };
      !1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]))
     },
     getElementAtEvent: function(t) {
      return o.modes.single(this, t)
     },
     getElementsAtEvent: function(t) {
      return o.modes.label(this, t, {
       intersect: !0
      })
     },
     getElementsAtXAxis: function(t) {
      return o.modes["x-axis"](this, t, {
       intersect: !0
      })
     },
     getElementsAtEventForMode: function(t, e, i) {
      var n = o.modes[e];
      return "function" == typeof n ? n(this, t, i) : []
     },
     getDatasetAtEvent: function(t) {
      return o.modes.dataset(this, t, {
       intersect: !0
      })
     },
     getDatasetMeta: function(t) {
      var e = this.data.datasets[t];
      e._meta || (e._meta = {});
      var i = e._meta[this.id];
      return i || (i = e._meta[this.id] = {
       type: null,
       data: [],
       dataset: null,
       controller: null,
       hidden: null,
       xAxisID: null,
       yAxisID: null
      }), i
     },
     getVisibleDatasetCount: function() {
      for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
      return t
     },
     isDatasetVisible: function(t) {
      var e = this.getDatasetMeta(t);
      return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
     },
     generateLegend: function() {
      return this.options.legendCallback(this)
     },
     destroyDatasetMeta: function(t) {
      var e = this.id,
       i = this.data.datasets[t],
       n = i._meta && i._meta[e];
      n && (n.controller.destroy(), delete i._meta[e])
     },
     destroy: function() {
      var e, i, n = this,
       o = n.canvas;
      for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
      o && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id]
     },
     toBase64Image: function() {
      return this.canvas.toDataURL.apply(this.canvas, arguments)
     },
     initToolTip: function() {
      var e = this;
      e.tooltip = new t.Tooltip({
       _chart: e,
       _chartInstance: e,
       _data: e.data,
       _options: e.options.tooltips
      }, e)
     },
     bindEvents: function() {
      var t = this,
       e = t._listeners = {},
       i = function() {
        t.eventHandler.apply(t, arguments)
       };
      a.each(t.options.events, function(n) {
       s.addEventListener(t, n, i), e[n] = i
      }), t.options.responsive && (i = function() {
       t.resize()
      }, s.addEventListener(t, "resize", i), e.resize = i)
     },
     unbindEvents: function() {
      var t = this,
       e = t._listeners;
      e && (delete t._listeners, a.each(e, function(e, i) {
       s.removeEventListener(t, i, e)
      }))
     },
     updateHoverStyle: function(t, e, i) {
      var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
      for (a = 0, o = t.length; a < o; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
     },
     eventHandler: function(t) {
      var e = this,
       i = e.tooltip;
      if (!1 !== l.notify(e, "beforeEvent", [t])) {
       e._bufferedRender = !0, e._bufferedRequest = null;
       var n = e.handleEvent(t);
       i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]);
       var a = e._bufferedRequest;
       return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
      }
     },
     handleEvent: function(t) {
      var e, i = this,
       n = i.options || {},
       o = n.hover;
      return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), a.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
     }
    }), t.Controller = t
   }
  }, {
   25: 25,
   28: 28,
   30: 30,
   31: 31,
   45: 45,
   48: 48
  }],
  24: [function(t, e, i) {
   "use strict";
   var n = t(45);
   e.exports = function(t) {
    var e = ["push", "pop", "shift", "splice", "unshift"];

    function i(t, i) {
     var n = t._chartjs;
     if (n) {
      var a = n.listeners,
       o = a.indexOf(i); - 1 !== o && a.splice(o, 1), a.length > 0 || (e.forEach(function(e) {
       delete t[e]
      }), delete t._chartjs)
     }
    }
    t.DatasetController = function(t, e) {
     this.initialize(t, e)
    }, n.extend(t.DatasetController.prototype, {
     datasetElementType: null,
     dataElementType: null,
     initialize: function(t, e) {
      this.chart = t, this.index = e, this.linkScales(), this.addElements()
     },
     updateIndex: function(t) {
      this.index = t
     },
     linkScales: function() {
      var t = this,
       e = t.getMeta(),
       i = t.getDataset();
      null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
     },
     getDataset: function() {
      return this.chart.data.datasets[this.index]
     },
     getMeta: function() {
      return this.chart.getDatasetMeta(this.index)
     },
     getScaleForId: function(t) {
      return this.chart.scales[t]
     },
     reset: function() {
      this.update(!0)
     },
     destroy: function() {
      this._data && i(this._data, this)
     },
     createMetaDataset: function() {
      var t = this.datasetElementType;
      return t && new t({
       _chart: this.chart,
       _datasetIndex: this.index
      })
     },
     createMetaData: function(t) {
      var e = this.dataElementType;
      return e && new e({
       _chart: this.chart,
       _datasetIndex: this.index,
       _index: t
      })
     },
     addElements: function() {
      var t, e, i = this.getMeta(),
       n = this.getDataset().data || [],
       a = i.data;
      for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
      i.dataset = i.dataset || this.createMetaDataset()
     },
     addElementAndReset: function(t) {
      var e = this.createMetaData(t);
      this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
     },
     buildOrUpdateElements: function() {
      var t, a, o = this,
       r = o.getDataset(),
       s = r.data || (r.data = []);
      o._data !== s && (o._data && i(o._data, o), a = o, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
       configurable: !0,
       enumerable: !1,
       value: {
        listeners: [a]
       }
      }), e.forEach(function(e) {
       var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
        a = t[e];
       Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value: function() {
         var e = Array.prototype.slice.call(arguments),
          o = a.apply(this, e);
         return n.each(t._chartjs.listeners, function(t) {
          "function" == typeof t[i] && t[i].apply(t, e)
         }), o
        }
       })
      })), o._data = s), o.resyncElements()
     },
     update: n.noop,
     transition: function(t) {
      for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
      e.dataset && e.dataset.transition(t)
     },
     draw: function() {
      var t = this.getMeta(),
       e = t.data || [],
       i = e.length,
       n = 0;
      for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
     },
     removeHoverStyle: function(t, e) {
      var i = this.chart.data.datasets[t._datasetIndex],
       a = t._index,
       o = t.custom || {},
       r = n.valueAtIndexOrDefault,
       s = t._model;
      s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth)
     },
     setHoverStyle: function(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
       i = t._index,
       a = t.custom || {},
       o = n.valueAtIndexOrDefault,
       r = n.getHoverColor,
       s = t._model;
      s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth)
     },
     resyncElements: function() {
      var t = this.getMeta(),
       e = this.getDataset().data,
       i = t.data.length,
       n = e.length;
      n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
     },
     insertElements: function(t, e) {
      for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
     },
     onDataPush: function() {
      this.insertElements(this.getDataset().data.length - 1, arguments.length)
     },
     onDataPop: function() {
      this.getMeta().data.pop()
     },
     onDataShift: function() {
      this.getMeta().data.shift()
     },
     onDataSplice: function(t, e) {
      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
     },
     onDataUnshift: function() {
      this.insertElements(0, arguments.length)
     }
    }), t.DatasetController.extend = n.inherits
   }
  }, {
   45: 45
  }],
  25: [function(t, e, i) {
   "use strict";
   var n = t(45);
   e.exports = {
    _set: function(t, e) {
     return n.merge(this[t] || (this[t] = {}), e)
    }
   }
  }, {
   45: 45
  }],
  26: [function(t, e, i) {
   "use strict";
   var n = t(3),
    a = t(45);
   var o = function(t) {
    a.extend(this, t), this.initialize.apply(this, arguments)
   };
   a.extend(o.prototype, {
    initialize: function() {
     this.hidden = !1
    },
    pivot: function() {
     var t = this;
     return t._view || (t._view = a.clone(t._model)), t._start = {}, t
    },
    transition: function(t) {
     var e = this,
      i = e._model,
      a = e._start,
      o = e._view;
     return i && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), function(t, e, i, a) {
      var o, r, s, l, u, d, c, h, f, g = Object.keys(i);
      for (o = 0, r = g.length; o < r; ++o)
       if (d = i[s = g[o]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
        if (t.hasOwnProperty(s) || (t[s] = l), (c = typeof d) == typeof(u = t[s]))
         if ("string" === c) {
          if ((h = n(u)).valid && (f = n(d)).valid) {
           e[s] = f.mix(h, a).rgbString();
           continue
          }
         } else if ("number" === c && isFinite(u) && isFinite(d)) {
         e[s] = u + (d - u) * a;
         continue
        }
        e[s] = d
       }
     }(a, o, i, t), e) : (e._view = i, e._start = null, e)
    },
    tooltipPosition: function() {
     return {
      x: this._model.x,
      y: this._model.y
     }
    },
    hasValue: function() {
     return a.isNumber(this._model.x) && a.isNumber(this._model.y)
    }
   }), o.extend = a.inherits, e.exports = o
  }, {
   3: 3,
   45: 45
  }],
  27: [function(t, e, i) {
   "use strict";
   var n = t(3),
    a = t(25),
    o = t(45);
   e.exports = function(t) {
    function e(t, e, i) {
     var n;
     return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
    }

    function i(t) {
     return null != t && "none" !== t
    }

    function r(t, n, a) {
     var o = document.defaultView,
      r = t.parentNode,
      s = o.getComputedStyle(t)[n],
      l = o.getComputedStyle(r)[n],
      u = i(s),
      d = i(l),
      c = Number.POSITIVE_INFINITY;
     return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : "none"
    }
    o.configMerge = function() {
     return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
      merger: function(e, i, n, a) {
       var r = i[e] || {},
        s = n[e];
       "scales" === e ? i[e] = o.scaleMerge(r, s) : "scale" === e ? i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, i, n, a)
      }
     })
    }, o.scaleMerge = function() {
     return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
      merger: function(e, i, n, a) {
       if ("xAxes" === e || "yAxes" === e) {
        var r, s, l, u = n[e].length;
        for (i[e] || (i[e] = []), r = 0; r < u; ++r) l = n[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= i[e].length && i[e].push({}), !i[e][r].type || l.type && l.type !== i[e][r].type ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(i[e][r], l)
       } else o._merger(e, i, n, a)
      }
     })
    }, o.where = function(t, e) {
     if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
     var i = [];
     return o.each(t, function(t) {
      e(t) && i.push(t)
     }), i
    }, o.findIndex = Array.prototype.findIndex ? function(t, e, i) {
     return t.findIndex(e, i)
    } : function(t, e, i) {
     i = void 0 === i ? t : i;
     for (var n = 0, a = t.length; n < a; ++n)
      if (e.call(i, t[n], n, t)) return n;
     return -1
    }, o.findNextWhere = function(t, e, i) {
     o.isNullOrUndef(i) && (i = -1);
     for (var n = i + 1; n < t.length; n++) {
      var a = t[n];
      if (e(a)) return a
     }
    }, o.findPreviousWhere = function(t, e, i) {
     o.isNullOrUndef(i) && (i = t.length);
     for (var n = i - 1; n >= 0; n--) {
      var a = t[n];
      if (e(a)) return a
     }
    }, o.isNumber = function(t) {
     return !isNaN(parseFloat(t)) && isFinite(t)
    }, o.almostEquals = function(t, e, i) {
     return Math.abs(t - e) < i
    }, o.almostWhole = function(t, e) {
     var i = Math.round(t);
     return i - e < t && i + e > t
    }, o.max = function(t) {
     return t.reduce(function(t, e) {
      return isNaN(e) ? t : Math.max(t, e)
     }, Number.NEGATIVE_INFINITY)
    }, o.min = function(t) {
     return t.reduce(function(t, e) {
      return isNaN(e) ? t : Math.min(t, e)
     }, Number.POSITIVE_INFINITY)
    }, o.sign = Math.sign ? function(t) {
     return Math.sign(t)
    } : function(t) {
     return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
    }, o.log10 = Math.log10 ? function(t) {
     return Math.log10(t)
    } : function(t) {
     var e = Math.log(t) * Math.LOG10E,
      i = Math.round(e);
     return t === Math.pow(10, i) ? i : e
    }, o.toRadians = function(t) {
     return t * (Math.PI / 180)
    }, o.toDegrees = function(t) {
     return t * (180 / Math.PI)
    }, o.getAngleFromPoint = function(t, e) {
     var i = e.x - t.x,
      n = e.y - t.y,
      a = Math.sqrt(i * i + n * n),
      o = Math.atan2(n, i);
     return o < -.5 * Math.PI && (o += 2 * Math.PI), {
      angle: o,
      distance: a
     }
    }, o.distanceBetweenPoints = function(t, e) {
     return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }, o.aliasPixel = function(t) {
     return t % 2 == 0 ? 0 : .5
    }, o.splineCurve = function(t, e, i, n) {
     var a = t.skip ? e : t,
      o = e,
      r = i.skip ? e : i,
      s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
      l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
      u = s / (s + l),
      d = l / (s + l),
      c = n * (u = isNaN(u) ? 0 : u),
      h = n * (d = isNaN(d) ? 0 : d);
     return {
      previous: {
       x: o.x - c * (r.x - a.x),
       y: o.y - c * (r.y - a.y)
      },
      next: {
       x: o.x + h * (r.x - a.x),
       y: o.y + h * (r.y - a.y)
      }
     }
    }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
     var e, i, n, a, r, s, l, u, d, c = (t || []).map(function(t) {
       return {
        model: t._model,
        deltaK: 0,
        mK: 0
       }
      }),
      h = c.length;
     for (e = 0; e < h; ++e)
      if (!(n = c[e]).model.skip) {
       if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) {
        var f = a.model.x - n.model.x;
        n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0
       }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
      } for (e = 0; e < h - 1; ++e) n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (o.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = r * l * n.deltaK, a.mK = s * l * n.deltaK)));
     for (e = 0; e < h; ++e)(n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK))
    }, o.nextItem = function(t, e, i) {
     return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
    }, o.previousItem = function(t, e, i) {
     return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
    }, o.niceNum = function(t, e) {
     var i = Math.floor(o.log10(t)),
      n = t / Math.pow(10, i);
     return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
    }, o.requestAnimFrame = "undefined" == typeof window ? function(t) {
     t()
    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
     return window.setTimeout(t, 1e3 / 60)
    }, o.getRelativePosition = function(t, e) {
     var i, n, a = t.originalEvent || t,
      r = t.currentTarget || t.srcElement,
      s = r.getBoundingClientRect(),
      l = a.touches;
     l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
     var u = parseFloat(o.getStyle(r, "padding-left")),
      d = parseFloat(o.getStyle(r, "padding-top")),
      c = parseFloat(o.getStyle(r, "padding-right")),
      h = parseFloat(o.getStyle(r, "padding-bottom")),
      f = s.right - s.left - u - c,
      g = s.bottom - s.top - d - h;
     return {
      x: i = Math.round((i - s.left - u) / f * r.width / e.currentDevicePixelRatio),
      y: n = Math.round((n - s.top - d) / g * r.height / e.currentDevicePixelRatio)
     }
    }, o.getConstraintWidth = function(t) {
     return r(t, "max-width", "clientWidth")
    }, o.getConstraintHeight = function(t) {
     return r(t, "max-height", "clientHeight")
    }, o.getMaximumWidth = function(t) {
     var e = t.parentNode;
     if (!e) return t.clientWidth;
     var i = parseInt(o.getStyle(e, "padding-left"), 10),
      n = parseInt(o.getStyle(e, "padding-right"), 10),
      a = e.clientWidth - i - n,
      r = o.getConstraintWidth(t);
     return isNaN(r) ? a : Math.min(a, r)
    }, o.getMaximumHeight = function(t) {
     var e = t.parentNode;
     if (!e) return t.clientHeight;
     var i = parseInt(o.getStyle(e, "padding-top"), 10),
      n = parseInt(o.getStyle(e, "padding-bottom"), 10),
      a = e.clientHeight - i - n,
      r = o.getConstraintHeight(t);
     return isNaN(r) ? a : Math.min(a, r)
    }, o.getStyle = function(t, e) {
     return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
    }, o.retinaScale = function(t, e) {
     var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
     if (1 !== i) {
      var n = t.canvas,
       a = t.height,
       o = t.width;
      n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px")
     }
    }, o.fontString = function(t, e, i) {
     return e + " " + t + "px " + i
    }, o.longestText = function(t, e, i, n) {
     var a = (n = n || {}).data = n.data || {},
      r = n.garbageCollect = n.garbageCollect || [];
     n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
     var s = 0;
     o.each(i, function(e) {
      null != e && !0 !== o.isArray(e) ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function(e) {
       null == e || o.isArray(e) || (s = o.measureText(t, a, r, s, e))
      })
     });
     var l = r.length / 2;
     if (l > i.length) {
      for (var u = 0; u < l; u++) delete a[r[u]];
      r.splice(0, l)
     }
     return s
    }, o.measureText = function(t, e, i, n, a) {
     var o = e[a];
     return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n
    }, o.numberOfLabelLines = function(t) {
     var e = 1;
     return o.each(t, function(t) {
      o.isArray(t) && t.length > e && (e = t.length)
     }), e
    }, o.color = n ? function(t) {
     return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t)
    } : function(t) {
     return console.error("Color.js not found!"), t
    }, o.getHoverColor = function(t) {
     return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
    }
   }
  }, {
   25: 25,
   3: 3,
   45: 45
  }],
  28: [function(t, e, i) {
   "use strict";
   var n = t(45);

   function a(t, e) {
    return t.native ? {
     x: t.x,
     y: t.y
    } : n.getRelativePosition(t, e)
   }

   function o(t, e) {
    var i, n, a, o, r;
    for (n = 0, o = t.data.datasets.length; n < o; ++n)
     if (t.isDatasetVisible(n))
      for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
       var s = i.data[a];
       s._view.skip || e(s)
      }
   }

   function r(t, e) {
    var i = [];
    return o(t, function(t) {
     t.inRange(e.x, e.y) && i.push(t)
    }), i
   }

   function s(t, e, i, n) {
    var a = Number.POSITIVE_INFINITY,
     r = [];
    return o(t, function(t) {
     if (!i || t.inRange(e.x, e.y)) {
      var o = t.getCenterPoint(),
       s = n(e, o);
      s < a ? (r = [t], a = s) : s === a && r.push(t)
     }
    }), r
   }

   function l(t) {
    var e = -1 !== t.indexOf("x"),
     i = -1 !== t.indexOf("y");
    return function(t, n) {
     var a = e ? Math.abs(t.x - n.x) : 0,
      o = i ? Math.abs(t.y - n.y) : 0;
     return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2))
    }
   }

   function u(t, e, i) {
    var n = a(e, t);
    i.axis = i.axis || "x";
    var o = l(i.axis),
     u = i.intersect ? r(t, n) : s(t, n, !1, o),
     d = [];
    return u.length ? (t.data.datasets.forEach(function(e, i) {
     if (t.isDatasetVisible(i)) {
      var n = t.getDatasetMeta(i).data[u[0]._index];
      n && !n._view.skip && d.push(n)
     }
    }), d) : []
   }
   e.exports = {
    modes: {
     single: function(t, e) {
      var i = a(e, t),
       n = [];
      return o(t, function(t) {
       if (t.inRange(i.x, i.y)) return n.push(t), n
      }), n.slice(0, 1)
     },
     label: u,
     index: u,
     dataset: function(t, e, i) {
      var n = a(e, t);
      i.axis = i.axis || "xy";
      var o = l(i.axis),
       u = i.intersect ? r(t, n) : s(t, n, !1, o);
      return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
     },
     "x-axis": function(t, e) {
      return u(t, e, {
       intersect: !1
      })
     },
     point: function(t, e) {
      return r(t, a(e, t))
     },
     nearest: function(t, e, i) {
      var n = a(e, t);
      i.axis = i.axis || "xy";
      var o = l(i.axis),
       r = s(t, n, i.intersect, o);
      return r.length > 1 && r.sort(function(t, e) {
       var i = t.getArea() - e.getArea();
       return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
      }), r.slice(0, 1)
     },
     x: function(t, e, i) {
      var n = a(e, t),
       r = [],
       s = !1;
      return o(t, function(t) {
       t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
      }), i.intersect && !s && (r = []), r
     },
     y: function(t, e, i) {
      var n = a(e, t),
       r = [],
       s = !1;
      return o(t, function(t) {
       t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
      }), i.intersect && !s && (r = []), r
     }
    }
   }
  }, {
   45: 45
  }],
  29: [function(t, e, i) {
   "use strict";
   t(25)._set("global", {
    responsive: !0,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: !0,
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
     onHover: null,
     mode: "nearest",
     intersect: !0,
     animationDuration: 400
    },
    onClick: null,
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    showLines: !0,
    elements: {},
    layout: {
     padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
     }
    }
   }), e.exports = function() {
    var t = function(t, e) {
     return this.construct(t, e), this
    };
    return t.Chart = t, t
   }
  }, {
   25: 25
  }],
  30: [function(t, e, i) {
   "use strict";
   var n = t(45);

   function a(t, e) {
    return n.where(t, function(t) {
     return t.position === e
    })
   }

   function o(t, e) {
    t.forEach(function(t, e) {
     return t._tmpIndex_ = e, t
    }), t.sort(function(t, i) {
     var n = e ? i : t,
      a = e ? t : i;
     return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight
    }), t.forEach(function(t) {
     delete t._tmpIndex_
    })
   }
   e.exports = {
    defaults: {},
    addBox: function(t, e) {
     t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
    },
    removeBox: function(t, e) {
     var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
    },
    configure: function(t, e, i) {
     for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n])
    },
    update: function(t, e, i) {
     if (t) {
      var r = t.options.layout || {},
       s = n.options.toPadding(r.padding),
       l = s.left,
       u = s.right,
       d = s.top,
       c = s.bottom,
       h = a(t.boxes, "left"),
       f = a(t.boxes, "right"),
       g = a(t.boxes, "top"),
       p = a(t.boxes, "bottom"),
       m = a(t.boxes, "chartArea");
      o(h, !0), o(f, !1), o(g, !0), o(p, !1);
      var v = e - l - u,
       b = i - d - c,
       x = b / 2,
       y = (e - v / 2) / (h.length + f.length),
       k = (i - x) / (g.length + p.length),
       M = v,
       w = b,
       S = [];
      n.each(h.concat(f, g, p), function(t) {
       var e, i = t.isHorizontal();
       i ? (e = t.update(t.fullWidth ? v : M, k), w -= e.height) : (e = t.update(y, w), M -= e.width), S.push({
        horizontal: i,
        minSize: e,
        box: t
       })
      });
      var C = 0,
       _ = 0,
       D = 0,
       I = 0;
      n.each(g.concat(p), function(t) {
       if (t.getPadding) {
        var e = t.getPadding();
        C = Math.max(C, e.left), _ = Math.max(_, e.right)
       }
      }), n.each(h.concat(f), function(t) {
       if (t.getPadding) {
        var e = t.getPadding();
        D = Math.max(D, e.top), I = Math.max(I, e.bottom)
       }
      });
      var P = l,
       A = u,
       T = d,
       F = c;
      n.each(h.concat(f), N), n.each(h, function(t) {
       P += t.width
      }), n.each(f, function(t) {
       A += t.width
      }), n.each(g.concat(p), N), n.each(g, function(t) {
       T += t.height
      }), n.each(p, function(t) {
       F += t.height
      }), n.each(h.concat(f), function(t) {
       var e = n.findNextWhere(S, function(e) {
         return e.box === t
        }),
        i = {
         left: 0,
         right: 0,
         top: T,
         bottom: F
        };
       e && t.update(e.minSize.width, w, i)
      }), P = l, A = u, T = d, F = c, n.each(h, function(t) {
       P += t.width
      }), n.each(f, function(t) {
       A += t.width
      }), n.each(g, function(t) {
       T += t.height
      }), n.each(p, function(t) {
       F += t.height
      });
      var O = Math.max(C - P, 0);
      P += O, A += Math.max(_ - A, 0);
      var R = Math.max(D - T, 0);
      T += R, F += Math.max(I - F, 0);
      var L = i - T - F,
       z = e - P - A;
      z === M && L === w || (n.each(h, function(t) {
       t.height = L
      }), n.each(f, function(t) {
       t.height = L
      }), n.each(g, function(t) {
       t.fullWidth || (t.width = z)
      }), n.each(p, function(t) {
       t.fullWidth || (t.width = z)
      }), w = L, M = z);
      var B = l + O,
       W = d + R;
      n.each(h.concat(g), V), B += M, W += w, n.each(f, V), n.each(p, V), t.chartArea = {
       left: P,
       top: T,
       right: P + M,
       bottom: T + w
      }, n.each(m, function(e) {
       e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(M, w)
      })
     }

     function N(t) {
      var e = n.findNextWhere(S, function(e) {
       return e.box === t
      });
      if (e)
       if (t.isHorizontal()) {
        var i = {
         left: Math.max(P, C),
         right: Math.max(A, _),
         top: 0,
         bottom: 0
        };
        t.update(t.fullWidth ? v : M, b / 2, i)
       } else t.update(e.minSize.width, w)
     }

     function V(t) {
      t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? e - u : P + M, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = B, t.right = B + t.width, t.top = T, t.bottom = T + w, B = t.right)
     }
    }
   }
  }, {
   45: 45
  }],
  31: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(45);
   n._set("global", {
    plugins: {}
   }), e.exports = {
    _plugins: [],
    _cacheId: 0,
    register: function(t) {
     var e = this._plugins;
     [].concat(t).forEach(function(t) {
      -1 === e.indexOf(t) && e.push(t)
     }), this._cacheId++
    },
    unregister: function(t) {
     var e = this._plugins;
     [].concat(t).forEach(function(t) {
      var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
     }), this._cacheId++
    },
    clear: function() {
     this._plugins = [], this._cacheId++
    },
    count: function() {
     return this._plugins.length
    },
    getAll: function() {
     return this._plugins
    },
    notify: function(t, e, i) {
     var n, a, o, r, s, l = this.descriptors(t),
      u = l.length;
     for (n = 0; n < u; ++n)
      if ("function" == typeof(s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
     return !0
    },
    descriptors: function(t) {
     var e = t.$plugins || (t.$plugins = {});
     if (e.id === this._cacheId) return e.descriptors;
     var i = [],
      o = [],
      r = t && t.config || {},
      s = r.options && r.options.plugins || {};
     return this._plugins.concat(r.plugins || []).forEach(function(t) {
      if (-1 === i.indexOf(t)) {
       var e = t.id,
        r = s[e];
       !1 !== r && (!0 === r && (r = a.clone(n.global.plugins[e])), i.push(t), o.push({
        plugin: t,
        options: r || {}
       }))
      }
     }), e.descriptors = o, e.id = this._cacheId, o
    },
    _invalidate: function(t) {
     delete t.$plugins
    }
   }
  }, {
   25: 25,
   45: 45
  }],
  32: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45),
    r = t(34);

   function s(t) {
    var e, i, n = [];
    for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
    return n
   }

   function l(t, e, i) {
    var n = t.getPixelForTick(e);
    return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
   }
   n._set("scale", {
    display: !0,
    position: "left",
    offset: !1,
    gridLines: {
     display: !0,
     color: "rgba(0, 0, 0, 0.1)",
     lineWidth: 1,
     drawBorder: !0,
     drawOnChartArea: !0,
     drawTicks: !0,
     tickMarkLength: 10,
     zeroLineWidth: 1,
     zeroLineColor: "rgba(0,0,0,0.25)",
     zeroLineBorderDash: [],
     zeroLineBorderDashOffset: 0,
     offsetGridLines: !1,
     borderDash: [],
     borderDashOffset: 0
    },
    scaleLabel: {
     display: !1,
     labelString: "",
     lineHeight: 1.2,
     padding: {
      top: 4,
      bottom: 4
     }
    },
    ticks: {
     beginAtZero: !1,
     minRotation: 0,
     maxRotation: 50,
     mirror: !1,
     padding: 0,
     reverse: !1,
     display: !0,
     autoSkip: !0,
     autoSkipPadding: 0,
     labelOffset: 0,
     callback: r.formatters.values,
     minor: {},
     major: {}
    }
   }), e.exports = function(t) {
    function e(t, e, i) {
     return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width
    }

    function i(t) {
     var e = o.valueOrDefault,
      i = n.global,
      a = e(t.fontSize, i.defaultFontSize),
      r = e(t.fontStyle, i.defaultFontStyle),
      s = e(t.fontFamily, i.defaultFontFamily);
     return {
      size: a,
      style: r,
      family: s,
      font: o.fontString(a, r, s)
     }
    }

    function r(t) {
     return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, n.global.defaultFontSize))
    }
    t.Scale = a.extend({
     getPadding: function() {
      return {
       left: this.paddingLeft || 0,
       top: this.paddingTop || 0,
       right: this.paddingRight || 0,
       bottom: this.paddingBottom || 0
      }
     },
     getTicks: function() {
      return this._ticks
     },
     mergeTicksOptions: function() {
      var t = this.options.ticks;
      for (var e in !1 === t.minor && (t.minor = {
        display: !1
       }), !1 === t.major && (t.major = {
        display: !1
       }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
     },
     beforeUpdate: function() {
      o.callback(this.options.beforeUpdate, [this])
     },
     update: function(t, e, i) {
      var n, a, r, s, l, u, d = this;
      for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = o.extend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
       }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = r, n = 0, a = r.length; n < a; ++n) s = r[n], (u = l[n]) ? u.label = s : l.push(u = {
       label: s,
       major: !1
      });
      return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
     },
     afterUpdate: function() {
      o.callback(this.options.afterUpdate, [this])
     },
     beforeSetDimensions: function() {
      o.callback(this.options.beforeSetDimensions, [this])
     },
     setDimensions: function() {
      var t = this;
      t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
     },
     afterSetDimensions: function() {
      o.callback(this.options.afterSetDimensions, [this])
     },
     beforeDataLimits: function() {
      o.callback(this.options.beforeDataLimits, [this])
     },
     determineDataLimits: o.noop,
     afterDataLimits: function() {
      o.callback(this.options.afterDataLimits, [this])
     },
     beforeBuildTicks: function() {
      o.callback(this.options.beforeBuildTicks, [this])
     },
     buildTicks: o.noop,
     afterBuildTicks: function() {
      o.callback(this.options.afterBuildTicks, [this])
     },
     beforeTickToLabelConversion: function() {
      o.callback(this.options.beforeTickToLabelConversion, [this])
     },
     convertTicksToLabels: function() {
      var t = this.options.ticks;
      this.ticks = this.ticks.map(t.userCallback || t.callback, this)
     },
     afterTickToLabelConversion: function() {
      o.callback(this.options.afterTickToLabelConversion, [this])
     },
     beforeCalculateTickRotation: function() {
      o.callback(this.options.beforeCalculateTickRotation, [this])
     },
     calculateTickRotation: function() {
      var t = this,
       e = t.ctx,
       n = t.options.ticks,
       a = s(t._ticks),
       r = i(n);
      e.font = r.font;
      var l = n.minRotation || 0;
      if (a.length && t.options.display && t.isHorizontal())
       for (var u, d = o.longestText(e, r.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) {
        var f = o.toRadians(l);
        if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
         l--;
         break
        }
        l++, c = u * d
       }
      t.labelRotation = l
     },
     afterCalculateTickRotation: function() {
      o.callback(this.options.afterCalculateTickRotation, [this])
     },
     beforeFit: function() {
      o.callback(this.options.beforeFit, [this])
     },
     fit: function() {
      var t = this,
       n = t.minSize = {
        width: 0,
        height: 0
       },
       a = s(t._ticks),
       l = t.options,
       u = l.ticks,
       d = l.scaleLabel,
       c = l.gridLines,
       h = l.display,
       f = t.isHorizontal(),
       g = i(u),
       p = l.gridLines.tickMarkLength;
      if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, n.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) {
       var m = r(d) + o.options.toPadding(d.padding).height;
       f ? n.height += m : n.width += m
      }
      if (u.display && h) {
       var v = o.longestText(t.ctx, g.font, a, t.longestTextCache),
        b = o.numberOfLabelLines(a),
        x = .5 * g.size,
        y = t.options.ticks.padding;
       if (f) {
        t.longestLabelWidth = v;
        var k = o.toRadians(t.labelRotation),
         M = Math.cos(k),
         w = Math.sin(k) * v + g.size * b + x * (b - 1) + x;
        n.height = Math.min(t.maxHeight, n.height + w + y), t.ctx.font = g.font;
        var S = e(t.ctx, a[0], g.font),
         C = e(t.ctx, a[a.length - 1], g.font);
        0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? M * S + 3 : M * x + 3, t.paddingRight = "bottom" === l.position ? M * x + 3 : M * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3)
       } else u.mirror ? v = 0 : v += y + x, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2
      }
      t.handleMargins(), t.width = n.width, t.height = n.height
     },
     handleMargins: function() {
      var t = this;
      t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
     },
     afterFit: function() {
      o.callback(this.options.afterFit, [this])
     },
     isHorizontal: function() {
      return "top" === this.options.position || "bottom" === this.options.position
     },
     isFullWidth: function() {
      return this.options.fullWidth
     },
     getRightValue: function(t) {
      if (o.isNullOrUndef(t)) return NaN;
      if ("number" == typeof t && !isFinite(t)) return NaN;
      if (t)
       if (this.isHorizontal()) {
        if (void 0 !== t.x) return this.getRightValue(t.x)
       } else if (void 0 !== t.y) return this.getRightValue(t.y);
      return t
     },
     getLabelForIndex: o.noop,
     getPixelForValue: o.noop,
     getValueForPixel: o.noop,
     getPixelForTick: function(t) {
      var e = this,
       i = e.options.offset;
      if (e.isHorizontal()) {
       var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
        a = n * t + e.paddingLeft;
       i && (a += n / 2);
       var o = e.left + Math.round(a);
       return o += e.isFullWidth() ? e.margins.left : 0
      }
      var r = e.height - (e.paddingTop + e.paddingBottom);
      return e.top + t * (r / (e._ticks.length - 1))
     },
     getPixelForDecimal: function(t) {
      var e = this;
      if (e.isHorizontal()) {
       var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
        n = e.left + Math.round(i);
       return n += e.isFullWidth() ? e.margins.left : 0
      }
      return e.top + t * e.height
     },
     getBasePixel: function() {
      return this.getPixelForValue(this.getBaseValue())
     },
     getBaseValue: function() {
      var t = this.min,
       e = this.max;
      return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
     },
     _autoSkip: function(t) {
      var e, i, n, a, r = this,
       s = r.isHorizontal(),
       l = r.options.ticks.minor,
       u = t.length,
       d = o.toRadians(r.labelRotation),
       c = Math.cos(d),
       h = r.longestLabelWidth * c,
       f = [];
      for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (r.width - (r.paddingLeft + r.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
      return f
     },
     draw: function(t) {
      var e = this,
       a = e.options;
      if (a.display) {
       var s = e.ctx,
        u = n.global,
        d = a.ticks.minor,
        c = a.ticks.major || d,
        h = a.gridLines,
        f = a.scaleLabel,
        g = 0 !== e.labelRotation,
        p = e.isHorizontal(),
        m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
        v = o.valueOrDefault(d.fontColor, u.defaultFontColor),
        b = i(d),
        x = o.valueOrDefault(c.fontColor, u.defaultFontColor),
        y = i(c),
        k = h.drawTicks ? h.tickMarkLength : 0,
        M = o.valueOrDefault(f.fontColor, u.defaultFontColor),
        w = i(f),
        S = o.options.toPadding(f.padding),
        C = o.toRadians(e.labelRotation),
        _ = [],
        D = e.options.gridLines.lineWidth,
        I = "right" === a.position ? e.right : e.right - D - k,
        P = "right" === a.position ? e.right + k : e.right,
        A = "bottom" === a.position ? e.top + D : e.bottom - k - D,
        T = "bottom" === a.position ? e.top + D + k : e.bottom + D;
       if (o.each(m, function(i, n) {
         if (!o.isNullOrUndef(i.label)) {
          var r, s, c, f, v, b, x, y, M, w, S, F, O, R, L = i.label;
          n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = o.valueAtIndexOrDefault(h.lineWidth, n), s = o.valueAtIndexOrDefault(h.color, n), c = o.valueOrDefault(h.borderDash, u.borderDash), f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
          var z = "middle",
           B = "middle",
           W = d.padding;
          if (p) {
           var N = k + W;
           "bottom" === a.position ? (B = g ? "middle" : "top", z = g ? "right" : "center", R = e.top + N) : (B = g ? "middle" : "bottom", z = g ? "left" : "center", R = e.bottom - N);
           var V = l(e, n, h.offsetGridLines && m.length > 1);
           V < e.left && (s = "rgba(0,0,0,0)"), V += o.aliasPixel(r), O = e.getPixelForTick(n) + d.labelOffset, v = x = M = S = V, b = A, y = T, w = t.top, F = t.bottom + D
          } else {
           var E, H = "left" === a.position;
           d.mirror ? (z = H ? "left" : "right", E = W) : (z = H ? "right" : "left", E = k + W), O = H ? e.right - E : e.left + E;
           var j = l(e, n, h.offsetGridLines && m.length > 1);
           j < e.top && (s = "rgba(0,0,0,0)"), j += o.aliasPixel(r), R = e.getPixelForTick(n) + d.labelOffset, v = I, x = P, M = t.left, S = t.right + D, b = y = w = F = j
          }
          _.push({
           tx1: v,
           ty1: b,
           tx2: x,
           ty2: y,
           x1: M,
           y1: w,
           x2: S,
           y2: F,
           labelX: O,
           labelY: R,
           glWidth: r,
           glColor: s,
           glBorderDash: c,
           glBorderDashOffset: f,
           rotation: -1 * C,
           label: L,
           major: i.major,
           textBaseline: B,
           textAlign: z
          })
         }
        }), o.each(_, function(t) {
         if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
          s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? y.font : b.font, s.fillStyle = t.major ? x : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
          var i = t.label;
          if (o.isArray(i))
           for (var n = i.length, a = 1.5 * b.size, r = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) s.fillText("" + i[l], 0, r), r += a;
          else s.fillText(i, 0, 0);
          s.restore()
         }
        }), f.display) {
        var F, O, R = 0,
         L = r(f) / 2;
        if (p) F = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - L - S.bottom : e.top + L + S.top;
        else {
         var z = "left" === a.position;
         F = z ? e.left + L + S.top : e.right - L - S.top, O = e.top + (e.bottom - e.top) / 2, R = z ? -.5 * Math.PI : .5 * Math.PI
        }
        s.save(), s.translate(F, O), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = M, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore()
       }
       if (h.drawBorder) {
        s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
        var B = e.left,
         W = e.right + D,
         N = e.top,
         V = e.bottom + D,
         E = o.aliasPixel(s.lineWidth);
        p ? (N = V = "top" === a.position ? e.bottom : e.top, N += E, V += E) : (B = W = "left" === a.position ? e.right : e.left, B += E, W += E), s.beginPath(), s.moveTo(B, N), s.lineTo(W, V), s.stroke()
       }
      }
     }
    })
   }
  }, {
   25: 25,
   26: 26,
   34: 34,
   45: 45
  }],
  33: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(45),
    o = t(30);
   e.exports = function(t) {
    t.scaleService = {
     constructors: {},
     defaults: {},
     registerScaleType: function(t, e, i) {
      this.constructors[t] = e, this.defaults[t] = a.clone(i)
     },
     getScaleConstructor: function(t) {
      return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
     },
     getScaleDefaults: function(t) {
      return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {}
     },
     updateScaleDefaults: function(t, e) {
      this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e))
     },
     addScalesToLayout: function(t) {
      a.each(t.scales, function(e) {
       e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
      })
     }
    }
   }
  }, {
   25: 25,
   30: 30,
   45: 45
  }],
  34: [function(t, e, i) {
   "use strict";
   var n = t(45);
   e.exports = {
    formatters: {
     values: function(t) {
      return n.isArray(t) ? t : "" + t
     },
     linear: function(t, e, i) {
      var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
      Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
      var o = n.log10(Math.abs(a)),
       r = "";
      if (0 !== t) {
       var s = -1 * Math.floor(o);
       s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
      } else r = "0";
      return r
     },
     logarithmic: function(t, e, i) {
      var a = t / Math.pow(10, Math.floor(n.log10(t)));
      return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : ""
     }
    }
   }
  }, {
   45: 45
  }],
  35: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45);
   n._set("global", {
    tooltips: {
     enabled: !0,
     custom: null,
     mode: "nearest",
     position: "average",
     intersect: !0,
     backgroundColor: "rgba(0,0,0,0.8)",
     titleFontStyle: "bold",
     titleSpacing: 2,
     titleMarginBottom: 6,
     titleFontColor: "#fff",
     titleAlign: "left",
     bodySpacing: 2,
     bodyFontColor: "#fff",
     bodyAlign: "left",
     footerFontStyle: "bold",
     footerSpacing: 2,
     footerMarginTop: 6,
     footerFontColor: "#fff",
     footerAlign: "left",
     yPadding: 6,
     xPadding: 6,
     caretPadding: 2,
     caretSize: 5,
     cornerRadius: 6,
     multiKeyBackground: "#fff",
     displayColors: !0,
     borderColor: "rgba(0,0,0,0)",
     borderWidth: 0,
     callbacks: {
      beforeTitle: o.noop,
      title: function(t, e) {
       var i = "",
        n = e.labels,
        a = n ? n.length : 0;
       if (t.length > 0) {
        var o = t[0];
        o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index])
       }
       return i
      },
      afterTitle: o.noop,
      beforeBody: o.noop,
      beforeLabel: o.noop,
      label: function(t, e) {
       var i = e.datasets[t.datasetIndex].label || "";
       return i && (i += ": "), i += t.yLabel
      },
      labelColor: function(t, e) {
       var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
       return {
        borderColor: i.borderColor,
        backgroundColor: i.backgroundColor
       }
      },
      labelTextColor: function() {
       return this._options.bodyFontColor
      },
      afterLabel: o.noop,
      afterBody: o.noop,
      beforeFooter: o.noop,
      footer: o.noop,
      afterFooter: o.noop
     }
    }
   }), e.exports = function(t) {
    function e(t, e) {
     var i = o.color(t);
     return i.alpha(e * i.alpha()).rgbaString()
    }

    function i(t, e) {
     return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function r(t) {
     var e = n.global,
      i = o.valueOrDefault;
     return {
      xPadding: t.xPadding,
      yPadding: t.yPadding,
      xAlign: t.xAlign,
      yAlign: t.yAlign,
      bodyFontColor: t.bodyFontColor,
      _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
      _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
      _bodyAlign: t.bodyAlign,
      bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
      bodySpacing: t.bodySpacing,
      titleFontColor: t.titleFontColor,
      _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
      _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
      titleFontSize: i(t.titleFontSize, e.defaultFontSize),
      _titleAlign: t.titleAlign,
      titleSpacing: t.titleSpacing,
      titleMarginBottom: t.titleMarginBottom,
      footerFontColor: t.footerFontColor,
      _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
      _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
      footerFontSize: i(t.footerFontSize, e.defaultFontSize),
      _footerAlign: t.footerAlign,
      footerSpacing: t.footerSpacing,
      footerMarginTop: t.footerMarginTop,
      caretSize: t.caretSize,
      cornerRadius: t.cornerRadius,
      backgroundColor: t.backgroundColor,
      opacity: 0,
      legendColorBackground: t.multiKeyBackground,
      displayColors: t.displayColors,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth
     }
    }
    t.Tooltip = a.extend({
     initialize: function() {
      this._model = r(this._options), this._lastActive = []
     },
     getTitle: function() {
      var t = this._options.callbacks,
       e = t.beforeTitle.apply(this, arguments),
       n = t.title.apply(this, arguments),
       a = t.afterTitle.apply(this, arguments),
       o = [];
      return o = i(o = i(o = i(o, e), n), a)
     },
     getBeforeBody: function() {
      var t = this._options.callbacks.beforeBody.apply(this, arguments);
      return o.isArray(t) ? t : void 0 !== t ? [t] : []
     },
     getBody: function(t, e) {
      var n = this,
       a = n._options.callbacks,
       r = [];
      return o.each(t, function(t) {
       var o = {
        before: [],
        lines: [],
        after: []
       };
       i(o.before, a.beforeLabel.call(n, t, e)), i(o.lines, a.label.call(n, t, e)), i(o.after, a.afterLabel.call(n, t, e)), r.push(o)
      }), r
     },
     getAfterBody: function() {
      var t = this._options.callbacks.afterBody.apply(this, arguments);
      return o.isArray(t) ? t : void 0 !== t ? [t] : []
     },
     getFooter: function() {
      var t = this._options.callbacks,
       e = t.beforeFooter.apply(this, arguments),
       n = t.footer.apply(this, arguments),
       a = t.afterFooter.apply(this, arguments),
       o = [];
      return o = i(o = i(o = i(o, e), n), a)
     },
     update: function(e) {
      var i, n, a, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k, M, w, S = this,
       C = S._options,
       _ = S._model,
       D = S._model = r(C),
       I = S._active,
       P = S._data,
       A = {
        xAlign: _.xAlign,
        yAlign: _.yAlign
       },
       T = {
        x: _.x,
        y: _.y
       },
       F = {
        width: _.width,
        height: _.height
       },
       O = {
        x: _.caretX,
        y: _.caretY
       };
      if (I.length) {
       D.opacity = 1;
       var R = [],
        L = [];
       O = t.Tooltip.positioners[C.position].call(S, I, S._eventPosition);
       var z = [];
       for (i = 0, n = I.length; i < n; ++i) z.push((x = I[i], y = void 0, k = void 0, void 0, void 0, y = x._xScale, k = x._yScale || x._scale, M = x._index, w = x._datasetIndex, {
        xLabel: y ? y.getLabelForIndex(M, w) : "",
        yLabel: k ? k.getLabelForIndex(M, w) : "",
        index: M,
        datasetIndex: w,
        x: x._model.x,
        y: x._model.y
       }));
       C.filter && (z = z.filter(function(t) {
        return C.filter(t, P)
       })), C.itemSort && (z = z.sort(function(t, e) {
        return C.itemSort(t, e, P)
       })), o.each(z, function(t) {
        R.push(C.callbacks.labelColor.call(S, t, S._chart)), L.push(C.callbacks.labelTextColor.call(S, t, S._chart))
       }), D.title = S.getTitle(z, P), D.beforeBody = S.getBeforeBody(z, P), D.body = S.getBody(z, P), D.afterBody = S.getAfterBody(z, P), D.footer = S.getFooter(z, P), D.x = Math.round(O.x), D.y = Math.round(O.y), D.caretPadding = C.caretPadding, D.labelColors = R, D.labelTextColors = L, D.dataPoints = z, A = function(t, e) {
        var i, n, a, o, r, s = t._model,
         l = t._chart,
         u = t._chart.chartArea,
         d = "center",
         c = "center";
        s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
        var h = (u.left + u.right) / 2,
         f = (u.top + u.bottom) / 2;
        "center" === c ? (i = function(t) {
         return t <= h
        }, n = function(t) {
         return t > h
        }) : (i = function(t) {
         return t <= e.width / 2
        }, n = function(t) {
         return t >= l.width - e.width / 2
        }), a = function(t) {
         return t + e.width + s.caretSize + s.caretPadding > l.width
        }, o = function(t) {
         return t - e.width - s.caretSize - s.caretPadding < 0
        }, r = function(t) {
         return t <= f ? "top" : "bottom"
        }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
        var g = t._options;
        return {
         xAlign: g.xAlign ? g.xAlign : d,
         yAlign: g.yAlign ? g.yAlign : c
        }
       }(this, F = function(t, e) {
        var i = t._chart.ctx,
         n = 2 * e.yPadding,
         a = 0,
         r = e.body,
         s = r.reduce(function(t, e) {
          return t + e.before.length + e.lines.length + e.after.length
         }, 0);
        s += e.beforeBody.length + e.afterBody.length;
        var l = e.title.length,
         u = e.footer.length,
         d = e.titleFontSize,
         c = e.bodyFontSize,
         h = e.footerFontSize;
        n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0;
        var f = 0,
         g = function(t) {
          a = Math.max(a, i.measureText(t).width + f)
         };
        return i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function(t) {
         o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g)
        }), f = 0, i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), {
         width: a += 2 * e.xPadding,
         height: n
        }
       }(this, D)), a = D, s = F, l = A, u = S._chart, d = a.x, c = a.y, h = a.caretSize, f = a.caretPadding, g = a.cornerRadius, p = l.xAlign, m = l.yAlign, v = h + f, b = g + f, "right" === p ? d -= s.width : "center" === p && ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)), "top" === m ? c += v : c -= "bottom" === m ? s.height + v : s.height / 2, "center" === m ? "left" === p ? d += v : "right" === p && (d -= v) : "left" === p ? d -= b : "right" === p && (d += b), T = {
        x: d,
        y: c
       }
      } else D.opacity = 0;
      return D.xAlign = A.xAlign, D.yAlign = A.yAlign, D.x = T.x, D.y = T.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, S._model = D, e && C.custom && C.custom.call(S, D), S
     },
     drawCaret: function(t, e) {
      var i = this._chart.ctx,
       n = this._view,
       a = this.getCaretPosition(t, e, n);
      i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
     },
     getCaretPosition: function(t, e, i) {
      var n, a, o, r, s, l, u = i.caretSize,
       d = i.cornerRadius,
       c = i.xAlign,
       h = i.yAlign,
       f = t.x,
       g = t.y,
       p = e.width,
       m = e.height;
      if ("center" === h) s = g + m / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u);
      else if ("left" === c ? (n = (a = f + d + u) - u, o = a + u) : "right" === c ? (n = (a = f + p - d - u) - u, o = a + u) : (n = (a = i.caretX) - u, o = a + u), "top" === h) s = (r = g) - u, l = r;
      else {
       s = (r = g + m) + u, l = r;
       var v = o;
       o = n, n = v
      }
      return {
       x1: n,
       x2: a,
       x3: o,
       y1: r,
       y2: s,
       y3: l
      }
     },
     drawTitle: function(t, i, n, a) {
      var r = i.title;
      if (r.length) {
       n.textAlign = i._titleAlign, n.textBaseline = "top";
       var s, l, u = i.titleFontSize,
        d = i.titleSpacing;
       for (n.fillStyle = e(i.titleFontColor, a), n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = r.length; s < l; ++s) n.fillText(r[s], t.x, t.y), t.y += u + d, s + 1 === r.length && (t.y += i.titleMarginBottom - d)
      }
     },
     drawBody: function(t, i, n, a) {
      var r = i.bodyFontSize,
       s = i.bodySpacing,
       l = i.body;
      n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily);
      var u = 0,
       d = function(e) {
        n.fillText(e, t.x + u, t.y), t.y += r + s
       };
      n.fillStyle = e(i.bodyFontColor, a), o.each(i.beforeBody, d);
      var c = i.displayColors;
      u = c ? r + 2 : 0, o.each(l, function(s, l) {
       var u = e(i.labelTextColors[l], a);
       n.fillStyle = u, o.each(s.before, d), o.each(s.lines, function(o) {
        c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), d(o)
       }), o.each(s.after, d)
      }), u = 0, o.each(i.afterBody, d), t.y -= s
     },
     drawFooter: function(t, i, n, a) {
      var r = i.footer;
      r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), o.each(r, function(e) {
       n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing
      }))
     },
     drawBackground: function(t, i, n, a, o) {
      n.fillStyle = e(i.backgroundColor, o), n.strokeStyle = e(i.borderColor, o), n.lineWidth = i.borderWidth;
      var r = i.xAlign,
       s = i.yAlign,
       l = t.x,
       u = t.y,
       d = a.width,
       c = a.height,
       h = i.cornerRadius;
      n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === r && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === r && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke()
     },
     draw: function() {
      var t = this._chart.ctx,
       e = this._view;
      if (0 !== e.opacity) {
       var i = {
         width: e.width,
         height: e.height
        },
        n = {
         x: e.x,
         y: e.y
        },
        a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
        o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
       this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a))
      }
     },
     handleEvent: function(t) {
      var e, i = this,
       n = i._options;
      return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !o.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
       x: t.x,
       y: t.y
      }, i.update(!0), i.pivot())), e
     }
    }), t.Tooltip.positioners = {
     average: function(t) {
      if (!t.length) return !1;
      var e, i, n = 0,
       a = 0,
       o = 0;
      for (e = 0, i = t.length; e < i; ++e) {
       var r = t[e];
       if (r && r.hasValue()) {
        var s = r.tooltipPosition();
        n += s.x, a += s.y, ++o
       }
      }
      return {
       x: Math.round(n / o),
       y: Math.round(a / o)
      }
     },
     nearest: function(t, e) {
      var i, n, a, r = e.x,
       s = e.y,
       l = Number.POSITIVE_INFINITY;
      for (i = 0, n = t.length; i < n; ++i) {
       var u = t[i];
       if (u && u.hasValue()) {
        var d = u.getCenterPoint(),
         c = o.distanceBetweenPoints(e, d);
        c < l && (l = c, a = u)
       }
      }
      if (a) {
       var h = a.tooltipPosition();
       r = h.x, s = h.y
      }
      return {
       x: r,
       y: s
      }
     }
    }
   }
  }, {
   25: 25,
   26: 26,
   45: 45
  }],
  36: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45);
   n._set("global", {
    elements: {
     arc: {
      backgroundColor: n.global.defaultColor,
      borderColor: "#fff",
      borderWidth: 2
     }
    }
   }), e.exports = a.extend({
    inLabelRange: function(t) {
     var e = this._view;
     return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
    },
    inRange: function(t, e) {
     var i = this._view;
     if (i) {
      for (var n = o.getAngleFromPoint(i, {
        x: t,
        y: e
       }), a = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
      for (; a > l;) a -= 2 * Math.PI;
      for (; a < s;) a += 2 * Math.PI;
      var u = a >= s && a <= l,
       d = r >= i.innerRadius && r <= i.outerRadius;
      return u && d
     }
     return !1
    },
    getCenterPoint: function() {
     var t = this._view,
      e = (t.startAngle + t.endAngle) / 2,
      i = (t.innerRadius + t.outerRadius) / 2;
     return {
      x: t.x + Math.cos(e) * i,
      y: t.y + Math.sin(e) * i
     }
    },
    getArea: function() {
     var t = this._view;
     return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
    },
    tooltipPosition: function() {
     var t = this._view,
      e = t.startAngle + (t.endAngle - t.startAngle) / 2,
      i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
     return {
      x: t.x + Math.cos(e) * i,
      y: t.y + Math.sin(e) * i
     }
    },
    draw: function() {
     var t = this._chart.ctx,
      e = this._view,
      i = e.startAngle,
      n = e.endAngle;
     t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
    }
   })
  }, {
   25: 25,
   26: 26,
   45: 45
  }],
  37: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45),
    r = n.global;
   n._set("global", {
    elements: {
     line: {
      tension: .4,
      backgroundColor: r.defaultColor,
      borderWidth: 3,
      borderColor: r.defaultColor,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      capBezierPoints: !0,
      fill: !0
     }
    }
   }), e.exports = a.extend({
    draw: function() {
     var t, e, i, n, a = this._view,
      s = this._chart.ctx,
      l = a.spanGaps,
      u = this._children.slice(),
      d = r.elements.line,
      c = -1;
     for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || r.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) e = u[t], i = o.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view), c = t));
     s.stroke(), s.restore()
    }
   })
  }, {
   25: 25,
   26: 26,
   45: 45
  }],
  38: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45),
    r = n.global.defaultColor;

   function s(t) {
    var e = this._view;
    return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
   }
   n._set("global", {
    elements: {
     point: {
      radius: 3,
      pointStyle: "circle",
      backgroundColor: r,
      borderColor: r,
      borderWidth: 1,
      hitRadius: 1,
      hoverRadius: 4,
      hoverBorderWidth: 1
     }
    }
   }), e.exports = a.extend({
    inRange: function(t, e) {
     var i = this._view;
     return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
    },
    inLabelRange: s,
    inXRange: s,
    inYRange: function(t) {
     var e = this._view;
     return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
    },
    getCenterPoint: function() {
     var t = this._view;
     return {
      x: t.x,
      y: t.y
     }
    },
    getArea: function() {
     return Math.PI * Math.pow(this._view.radius, 2)
    },
    tooltipPosition: function() {
     var t = this._view;
     return {
      x: t.x,
      y: t.y,
      padding: t.radius + t.borderWidth
     }
    },
    draw: function(t) {
     var e = this._view,
      i = this._model,
      a = this._chart.ctx,
      s = e.pointStyle,
      l = e.radius,
      u = e.x,
      d = e.y,
      c = o.color,
      h = 0;
     e.skip || (a.strokeStyle = e.borderColor || r, a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || r, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(a, s, l, u, d))
    }
   })
  }, {
   25: 25,
   26: 26,
   45: 45
  }],
  39: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26);

   function o(t) {
    return void 0 !== t._view.width
   }

   function r(t) {
    var e, i, n, a, r = t._view;
    if (o(t)) {
     var s = r.width / 2;
     e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), a = Math.max(r.y, r.base)
    } else {
     var l = r.height / 2;
     e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, a = r.y + l
    }
    return {
     left: e,
     top: n,
     right: i,
     bottom: a
    }
   }
   n._set("global", {
    elements: {
     rectangle: {
      backgroundColor: n.global.defaultColor,
      borderColor: n.global.defaultColor,
      borderSkipped: "bottom",
      borderWidth: 0
     }
    }
   }), e.exports = a.extend({
    draw: function() {
     var t, e, i, n, a, o, r, s = this._chart.ctx,
      l = this._view,
      u = l.borderWidth;
     if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, o = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), u) {
      var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
       c = (u = u > d ? d : u) / 2,
       h = t + ("left" !== r ? c * a : 0),
       f = e + ("right" !== r ? -c * a : 0),
       g = i + ("top" !== r ? c * o : 0),
       p = n + ("bottom" !== r ? -c * o : 0);
      h !== f && (i = g, n = p), g !== p && (t = h, e = f)
     }
     s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
     var m = [
       [t, n],
       [t, i],
       [e, i],
       [e, n]
      ],
      v = ["bottom", "left", "top", "right"].indexOf(r, 0);

     function b(t) {
      return m[(v + t) % 4]
     } - 1 === v && (v = 0);
     var x = b(0);
     s.moveTo(x[0], x[1]);
     for (var y = 1; y < 4; y++) x = b(y), s.lineTo(x[0], x[1]);
     s.fill(), u && s.stroke()
    },
    height: function() {
     var t = this._view;
     return t.base - t.y
    },
    inRange: function(t, e) {
     var i = !1;
     if (this._view) {
      var n = r(this);
      i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
     }
     return i
    },
    inLabelRange: function(t, e) {
     if (!this._view) return !1;
     var i = r(this);
     return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
    },
    inXRange: function(t) {
     var e = r(this);
     return t >= e.left && t <= e.right
    },
    inYRange: function(t) {
     var e = r(this);
     return t >= e.top && t <= e.bottom
    },
    getCenterPoint: function() {
     var t, e, i = this._view;
     return o(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
      x: t,
      y: e
     }
    },
    getArea: function() {
     var t = this._view;
     return t.width * Math.abs(t.y - t.base)
    },
    tooltipPosition: function() {
     var t = this._view;
     return {
      x: t.x,
      y: t.y
     }
    }
   })
  }, {
   25: 25,
   26: 26
  }],
  40: [function(t, e, i) {
   "use strict";
   e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
  }, {
   36: 36,
   37: 37,
   38: 38,
   39: 39
  }],
  41: [function(t, e, i) {
   "use strict";
   var n = t(42);
   i = e.exports = {
    clear: function(t) {
     t.ctx.clearRect(0, 0, t.width, t.height)
    },
    roundedRect: function(t, e, i, n, a, o) {
     if (o) {
      var r = Math.min(o, n / 2),
       s = Math.min(o, a / 2);
      t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i)
     } else t.rect(e, i, n, a)
    },
    drawPoint: function(t, e, i, n, a) {
     var o, r, s, l, u, d;
     if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
      if (!(isNaN(i) || i <= 0)) {
       switch (e) {
        default:
         t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
         break;
        case "triangle":
         t.beginPath(), u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + u / 3), t.lineTo(n + r / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();
         break;
        case "rect":
         d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);
         break;
        case "rectRounded":
         var c = i / Math.SQRT2,
          h = n - c,
          f = a - c,
          g = Math.SQRT2 * i;
         t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill();
         break;
        case "rectRot":
         d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();
         break;
        case "cross":
         t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
         break;
        case "crossRot":
         t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
         break;
        case "star":
         t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
         break;
        case "line":
         t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
         break;
        case "dash":
         t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath()
       }
       t.stroke()
      }
     } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
    },
    clipArea: function(t, e) {
     t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
    },
    unclipArea: function(t) {
     t.restore()
    },
    lineTo: function(t, e, i, n) {
     if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
     i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
    }
   };
   n.clear = i.clear, n.drawRoundedRectangle = function(t) {
    t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath()
   }
  }, {
   42: 42
  }],
  42: [function(t, e, i) {
   "use strict";
   var n, a = {
    noop: function() {},
    uid: (n = 0, function() {
     return n++
    }),
    isNullOrUndef: function(t) {
     return null == t
    },
    isArray: Array.isArray ? Array.isArray : function(t) {
     return "[object Array]" === Object.prototype.toString.call(t)
    },
    isObject: function(t) {
     return null !== t && "[object Object]" === Object.prototype.toString.call(t)
    },
    valueOrDefault: function(t, e) {
     return void 0 === t ? e : t
    },
    valueAtIndexOrDefault: function(t, e, i) {
     return a.valueOrDefault(a.isArray(t) ? t[e] : t, i)
    },
    callback: function(t, e, i) {
     if (t && "function" == typeof t.call) return t.apply(i, e)
    },
    each: function(t, e, i, n) {
     var o, r, s;
     if (a.isArray(t))
      if (r = t.length, n)
       for (o = r - 1; o >= 0; o--) e.call(i, t[o], o);
      else
       for (o = 0; o < r; o++) e.call(i, t[o], o);
     else if (a.isObject(t))
      for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) e.call(i, t[s[o]], s[o])
    },
    arrayEquals: function(t, e) {
     var i, n, o, r;
     if (!t || !e || t.length !== e.length) return !1;
     for (i = 0, n = t.length; i < n; ++i)
      if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
       if (!a.arrayEquals(o, r)) return !1
      } else if (o !== r) return !1;
     return !0
    },
    clone: function(t) {
     if (a.isArray(t)) return t.map(a.clone);
     if (a.isObject(t)) {
      for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = a.clone(t[i[o]]);
      return e
     }
     return t
    },
    _merger: function(t, e, i, n) {
     var o = e[t],
      r = i[t];
     a.isObject(o) && a.isObject(r) ? a.merge(o, r, n) : e[t] = a.clone(r)
    },
    _mergerIf: function(t, e, i) {
     var n = e[t],
      o = i[t];
     a.isObject(n) && a.isObject(o) ? a.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = a.clone(o))
    },
    merge: function(t, e, i) {
     var n, o, r, s, l, u = a.isArray(e) ? e : [e],
      d = u.length;
     if (!a.isObject(t)) return t;
     for (n = (i = i || {}).merger || a._merger, o = 0; o < d; ++o)
      if (e = u[o], a.isObject(e))
       for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) n(r[l], t, e, i);
     return t
    },
    mergeIf: function(t, e) {
     return a.merge(t, e, {
      merger: a._mergerIf
     })
    },
    extend: function(t) {
     for (var e = function(e, i) {
       t[i] = e
      }, i = 1, n = arguments.length; i < n; ++i) a.each(arguments[i], e);
     return t
    },
    inherits: function(t) {
     var e = this,
      i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
       return e.apply(this, arguments)
      },
      n = function() {
       this.constructor = i
      };
     return n.prototype = e.prototype, i.prototype = new n, i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i
    }
   };
   e.exports = a, a.callCallback = a.callback, a.indexOf = function(t, e, i) {
    return Array.prototype.indexOf.call(t, e, i)
   }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault
  }, {}],
  43: [function(t, e, i) {
   "use strict";
   var n = t(42),
    a = {
     linear: function(t) {
      return t
     },
     easeInQuad: function(t) {
      return t * t
     },
     easeOutQuad: function(t) {
      return -t * (t - 2)
     },
     easeInOutQuad: function(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
     },
     easeInCubic: function(t) {
      return t * t * t
     },
     easeOutCubic: function(t) {
      return (t -= 1) * t * t + 1
     },
     easeInOutCubic: function(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
     },
     easeInQuart: function(t) {
      return t * t * t * t
     },
     easeOutQuart: function(t) {
      return -((t -= 1) * t * t * t - 1)
     },
     easeInOutQuart: function(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
     },
     easeInQuint: function(t) {
      return t * t * t * t * t
     },
     easeOutQuint: function(t) {
      return (t -= 1) * t * t * t * t + 1
     },
     easeInOutQuint: function(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
     },
     easeInSine: function(t) {
      return 1 - Math.cos(t * (Math.PI / 2))
     },
     easeOutSine: function(t) {
      return Math.sin(t * (Math.PI / 2))
     },
     easeInOutSine: function(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1)
     },
     easeInExpo: function(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
     },
     easeOutExpo: function(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
     },
     easeInOutExpo: function(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
     },
     easeInCirc: function(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
     },
     easeOutCirc: function(t) {
      return Math.sqrt(1 - (t -= 1) * t)
     },
     easeInOutCirc: function(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
     },
     easeInElastic: function(t) {
      var e = 1.70158,
       i = 0,
       n = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
     },
     easeOutElastic: function(t) {
      var e = 1.70158,
       i = 0,
       n = 1;
      return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
     },
     easeInOutElastic: function(t) {
      var e = 1.70158,
       i = 0,
       n = 1;
      return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
     },
     easeInBack: function(t) {
      return t * t * (2.70158 * t - 1.70158)
     },
     easeOutBack: function(t) {
      return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
     },
     easeInOutBack: function(t) {
      var e = 1.70158;
      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
     },
     easeInBounce: function(t) {
      return 1 - a.easeOutBounce(1 - t)
     },
     easeOutBounce: function(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
     },
     easeInOutBounce: function(t) {
      return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
     }
    };
   e.exports = {
    effects: a
   }, n.easingEffects = a
  }, {
   42: 42
  }],
  44: [function(t, e, i) {
   "use strict";
   var n = t(42);
   e.exports = {
    toLineHeight: function(t, e) {
     var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
     if (!i || "normal" === i[1]) return 1.2 * e;
     switch (t = +i[2], i[3]) {
      case "px":
       return t;
      case "%":
       t /= 100
     }
     return e * t
    },
    toPadding: function(t) {
     var e, i, a, o;
     return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = i = a = o = +t || 0, {
      top: e,
      right: i,
      bottom: a,
      left: o,
      height: e + a,
      width: o + i
     }
    },
    resolve: function(t, e, i) {
     var a, o, r;
     for (a = 0, o = t.length; a < o; ++a)
      if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r
    }
   }
  }, {
   42: 42
  }],
  45: [function(t, e, i) {
   "use strict";
   e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
  }, {
   41: 41,
   42: 42,
   43: 43,
   44: 44
  }],
  46: [function(t, e, i) {
   e.exports = {
    acquireContext: function(t) {
     return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
    }
   }
  }, {}],
  47: [function(t, e, i) {
   "use strict";
   var n = t(45),
    a = "$chartjs",
    o = "chartjs-",
    r = o + "render-monitor",
    s = o + "render-animation",
    l = ["animationstart", "webkitAnimationStart"],
    u = {
     touchstart: "mousedown",
     touchmove: "mousemove",
     touchend: "mouseup",
     pointerenter: "mouseenter",
     pointerdown: "mousedown",
     pointermove: "mousemove",
     pointerup: "mouseup",
     pointerleave: "mouseout",
     pointerout: "mouseout"
    };

   function d(t, e) {
    var i = n.getStyle(t, e),
     a = i && i.match(/^(\d+)(\.\d+)?px$/);
    return a ? Number(a[1]) : void 0
   }
   var c = !! function() {
    var t = !1;
    try {
     var e = Object.defineProperty({}, "passive", {
      get: function() {
       t = !0
      }
     });
     window.addEventListener("e", null, e)
    } catch (t) {}
    return t
   }() && {
    passive: !0
   };

   function h(t, e, i) {
    t.addEventListener(e, i, c)
   }

   function f(t, e, i) {
    t.removeEventListener(e, i, c)
   }

   function g(t, e, i, n, a) {
    return {
     type: t,
     chart: e,
     native: a || null,
     x: void 0 !== i ? i : null,
     y: void 0 !== n ? n : null
    }
   }

   function p(t, e, i) {
    var u, d, c, f, p, m, v, b, x = t[a] || (t[a] = {}),
     y = x.resizer = function(t) {
      var e = document.createElement("div"),
       i = o + "size-monitor",
       n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
      e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
      var a = e.childNodes[0],
       r = e.childNodes[1];
      e._reset = function() {
       a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
      };
      var s = function() {
       e._reset(), t()
      };
      return h(a, "scroll", s.bind(a, "expand")), h(r, "scroll", s.bind(r, "shrink")), e
     }((u = function() {
      if (x.resizer) return e(g("resize", i))
     }, c = !1, f = [], function() {
      f = Array.prototype.slice.call(arguments), d = d || this, c || (c = !0, n.requestAnimFrame.call(window, function() {
       c = !1, u.apply(d, f)
      }))
     }));
    m = function() {
     if (x.resizer) {
      var e = t.parentNode;
      e && e !== y.parentNode && e.insertBefore(y, e.firstChild), y._reset()
     }
    }, v = (p = t)[a] || (p[a] = {}), b = v.renderProxy = function(t) {
     t.animationName === s && m()
    }, n.each(l, function(t) {
     h(p, t, b)
    }), v.reflow = !!p.offsetParent, p.classList.add(r)
   }

   function m(t) {
    var e, i, o, s = t[a] || {},
     u = s.resizer;
    delete s.resizer, i = (e = t)[a] || {}, (o = i.renderProxy) && (n.each(l, function(t) {
     f(e, t, o)
    }), delete i.renderProxy), e.classList.remove(r), u && u.parentNode && u.parentNode.removeChild(u)
   }
   e.exports = {
    _enabled: "undefined" != typeof window && "undefined" != typeof document,
    initialize: function() {
     var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
     e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
    },
    acquireContext: function(t, e) {
     "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
     var i = t && t.getContext && t.getContext("2d");
     return i && i.canvas === t ? (function(t, e) {
      var i = t.style,
       n = t.getAttribute("height"),
       o = t.getAttribute("width");
      if (t[a] = {
        initial: {
         height: n,
         width: o,
         style: {
          display: i.display,
          height: i.height,
          width: i.width
         }
        }
       }, i.display = i.display || "block", null === o || "" === o) {
       var r = d(t, "width");
       void 0 !== r && (t.width = r)
      }
      if (null === n || "" === n)
       if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
       else {
        var s = d(t, "height");
        void 0 !== r && (t.height = s)
       }
     }(t, e), i) : null
    },
    releaseContext: function(t) {
     var e = t.canvas;
     if (e[a]) {
      var i = e[a].initial;
      ["height", "width"].forEach(function(t) {
       var a = i[t];
       n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
      }), n.each(i.style || {}, function(t, i) {
       e.style[i] = t
      }), e.width = e.width, delete e[a]
     }
    },
    addEventListener: function(t, e, i) {
     var o = t.canvas;
     if ("resize" !== e) {
      var r = i[a] || (i[a] = {});
      h(o, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function(e) {
       var a, o, r, s;
       i((o = t, r = u[(a = e).type] || a.type, s = n.getRelativePosition(a, o), g(r, o, s.x, s.y, a)))
      })
     } else p(o, i, t)
    },
    removeEventListener: function(t, e, i) {
     var n = t.canvas;
     if ("resize" !== e) {
      var o = ((i[a] || {}).proxies || {})[t.id + "_" + e];
      o && f(n, e, o)
     } else m(n)
    }
   }, n.addEvent = h, n.removeEvent = f
  }, {
   45: 45
  }],
  48: [function(t, e, i) {
   "use strict";
   var n = t(45),
    a = t(46),
    o = t(47),
    r = o._enabled ? o : a;
   e.exports = n.extend({
    initialize: function() {},
    acquireContext: function() {},
    releaseContext: function() {},
    addEventListener: function() {},
    removeEventListener: function() {}
   }, r)
  }, {
   45: 45,
   46: 46,
   47: 47
  }],
  49: [function(t, e, i) {
   "use strict";
   e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52)
  }, {
   50: 50,
   51: 51,
   52: 52
  }],
  50: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(40),
    o = t(45);
   n._set("global", {
    plugins: {
     filler: {
      propagate: !0
     }
    }
   });
   var r = {
    dataset: function(t) {
     var e = t.fill,
      i = t.chart,
      n = i.getDatasetMeta(e),
      a = n && i.isDatasetVisible(e) && n.dataset._children || [],
      o = a.length || 0;
     return o ? function(t, e) {
      return e < o && a[e]._view || null
     } : null
    },
    boundary: function(t) {
     var e = t.boundary,
      i = e ? e.x : null,
      n = e ? e.y : null;
     return function(t) {
      return {
       x: null === i ? t.x : i,
       y: null === n ? t.y : n
      }
     }
    }
   };

   function s(t, e, i) {
    var n, a = t._model || {},
     o = a.fill;
    if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
    if (!0 === o) return "origin";
    if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
    switch (o) {
     case "bottom":
      return "start";
     case "top":
      return "end";
     case "zero":
      return "origin";
     case "origin":
     case "start":
     case "end":
      return o;
     default:
      return !1
    }
   }

   function l(t) {
    var e, i = t.el._model || {},
     n = t.el._scale || {},
     a = t.fill,
     o = null;
    if (isFinite(a)) return null;
    if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
     if (void 0 !== o.x && void 0 !== o.y) return o;
     if ("number" == typeof o && isFinite(o)) return {
      x: (e = n.isHorizontal()) ? o : null,
      y: e ? null : o
     }
    }
    return null
   }

   function u(t, e, i) {
    var n, a = t[e].fill,
     o = [e];
    if (!i) return a;
    for (; !1 !== a && -1 === o.indexOf(a);) {
     if (!isFinite(a)) return a;
     if (!(n = t[a])) return !1;
     if (n.visible) return a;
     o.push(a), a = n.fill
    }
    return !1
   }

   function d(t) {
    return t && !t.skip
   }

   function c(t, e, i, n, a) {
    var r;
    if (n && a) {
     for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) o.canvas.lineTo(t, e[r - 1], e[r]);
     for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) o.canvas.lineTo(t, i[r], i[r - 1], !0)
    }
   }
   e.exports = {
    id: "filler",
    afterDatasetsUpdate: function(t, e) {
     var i, n, o, d, c, h, f, g = (t.data.datasets || []).length,
      p = e.propagate,
      m = [];
     for (n = 0; n < g; ++n) d = null, (o = (i = t.getDatasetMeta(n)).dataset) && o._model && o instanceof a.Line && (d = {
      visible: t.isDatasetVisible(n),
      fill: s(o, n, g),
      chart: t,
      el: o
     }), i.$filler = d, m.push(d);
     for (n = 0; n < g; ++n)(d = m[n]) && (d.fill = u(m, n, p), d.boundary = l(d), d.mapper = (void 0, f = void 0, h = (c = d).fill, f = "dataset", !1 === h ? null : (isFinite(h) || (f = "boundary"), r[f](c))))
    },
    beforeDatasetDraw: function(t, e) {
     var i = e.meta.$filler;
     if (i) {
      var a = t.ctx,
       r = i.el,
       s = r._view,
       l = r._children || [],
       u = i.mapper,
       h = s.backgroundColor || n.global.defaultColor;
      u && h && l.length && (o.canvas.clipArea(a, t.chartArea), function(t, e, i, n, a, o) {
       var r, s, l, u, h, f, g, p = e.length,
        m = n.spanGaps,
        v = [],
        b = [],
        x = 0,
        y = 0;
       for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r) h = i(u = e[l = r % p]._view, l, n), f = d(u), g = d(h), f && g ? (x = v.push(u), y = b.push(h)) : x && y && (m ? (f && v.push(u), g && b.push(h)) : (c(t, v, b, x, y), x = y = 0, v = [], b = []));
       c(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill()
      }(a, l, u, s, h, r._loop), o.canvas.unclipArea(a))
     }
    }
   }
  }, {
   25: 25,
   40: 40,
   45: 45
  }],
  51: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45),
    r = t(30),
    s = o.noop;

   function l(t, e) {
    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
   }
   n._set("global", {
    legend: {
     display: !0,
     position: "top",
     fullWidth: !0,
     reverse: !1,
     weight: 1e3,
     onClick: function(t, e) {
      var i = e.datasetIndex,
       n = this.chart,
       a = n.getDatasetMeta(i);
      a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
     },
     onHover: null,
     labels: {
      boxWidth: 40,
      padding: 10,
      generateLabels: function(t) {
       var e = t.data;
       return o.isArray(e.datasets) ? e.datasets.map(function(e, i) {
        return {
         text: e.label,
         fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
         hidden: !t.isDatasetVisible(i),
         lineCap: e.borderCapStyle,
         lineDash: e.borderDash,
         lineDashOffset: e.borderDashOffset,
         lineJoin: e.borderJoinStyle,
         lineWidth: e.borderWidth,
         strokeStyle: e.borderColor,
         pointStyle: e.pointStyle,
         datasetIndex: i
        }
       }, this) : []
      }
     }
    },
    legendCallback: function(t) {
     var e = [];
     e.push('<ul class="' + t.id + '-legend">');
     for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
     return e.push("</ul>"), e.join("")
    }
   });
   var u = a.extend({
    initialize: function(t) {
     o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
    },
    beforeUpdate: s,
    update: function(t, e, i) {
     var n = this;
     return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
    },
    afterUpdate: s,
    beforeSetDimensions: s,
    setDimensions: function() {
     var t = this;
     t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
      width: 0,
      height: 0
     }
    },
    afterSetDimensions: s,
    beforeBuildLabels: s,
    buildLabels: function() {
     var t = this,
      e = t.options.labels || {},
      i = o.callback(e.generateLabels, [t.chart], t) || [];
     e.filter && (i = i.filter(function(i) {
      return e.filter(i, t.chart.data)
     })), t.options.reverse && i.reverse(), t.legendItems = i
    },
    afterBuildLabels: s,
    beforeFit: s,
    fit: function() {
     var t = this,
      e = t.options,
      i = e.labels,
      a = e.display,
      r = t.ctx,
      s = n.global,
      u = o.valueOrDefault,
      d = u(i.fontSize, s.defaultFontSize),
      c = u(i.fontStyle, s.defaultFontStyle),
      h = u(i.fontFamily, s.defaultFontFamily),
      f = o.fontString(d, c, h),
      g = t.legendHitBoxes = [],
      p = t.minSize,
      m = t.isHorizontal();
     if (m ? (p.width = t.maxWidth, p.height = a ? 10 : 0) : (p.width = a ? 10 : 0, p.height = t.maxHeight), a)
      if (r.font = f, m) {
       var v = t.lineWidths = [0],
        b = t.legendItems.length ? d + i.padding : 0;
       r.textAlign = "left", r.textBaseline = "top", o.each(t.legendItems, function(e, n) {
        var a = l(i, d) + d / 2 + r.measureText(e.text).width;
        v[v.length - 1] + a + i.padding >= t.width && (b += d + i.padding, v[v.length] = t.left), g[n] = {
         left: 0,
         top: 0,
         width: a,
         height: d
        }, v[v.length - 1] += a + i.padding
       }), p.height += b
      } else {
       var x = i.padding,
        y = t.columnWidths = [],
        k = i.padding,
        M = 0,
        w = 0,
        S = d + x;
       o.each(t.legendItems, function(t, e) {
        var n = l(i, d) + d / 2 + r.measureText(t.text).width;
        w + S > p.height && (k += M + i.padding, y.push(M), M = 0, w = 0), M = Math.max(M, n), w += S, g[e] = {
         left: 0,
         top: 0,
         width: n,
         height: d
        }
       }), k += M, y.push(M), p.width += k
      } t.width = p.width, t.height = p.height
    },
    afterFit: s,
    isHorizontal: function() {
     return "top" === this.options.position || "bottom" === this.options.position
    },
    draw: function() {
     var t = this,
      e = t.options,
      i = e.labels,
      a = n.global,
      r = a.elements.line,
      s = t.width,
      u = t.lineWidths;
     if (e.display) {
      var d, c = t.ctx,
       h = o.valueOrDefault,
       f = h(i.fontColor, a.defaultFontColor),
       g = h(i.fontSize, a.defaultFontSize),
       p = h(i.fontStyle, a.defaultFontStyle),
       m = h(i.fontFamily, a.defaultFontFamily),
       v = o.fontString(g, p, m);
      c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
      var b = l(i, g),
       x = t.legendHitBoxes,
       y = t.isHorizontal();
      d = y ? {
       x: t.left + (s - u[0]) / 2,
       y: t.top + i.padding,
       line: 0
      } : {
       x: t.left + i.padding,
       y: t.top + i.padding,
       line: 0
      };
      var k = g + i.padding;
      o.each(t.legendItems, function(n, l) {
       var f, p, m, v, M, w = c.measureText(n.text).width,
        S = b + g / 2 + w,
        C = d.x,
        _ = d.y;
       y ? C + S >= s && (_ = d.y += k, d.line++, C = d.x = t.left + (s - u[d.line]) / 2) : _ + k > t.bottom && (C = d.x = C + t.columnWidths[d.line] + i.padding, _ = d.y = t.top + i.padding, d.line++),
        function(t, i, n) {
         if (!(isNaN(b) || b <= 0)) {
          c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, r.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset), c.lineJoin = h(n.lineJoin, r.borderJoinStyle), c.lineWidth = h(n.lineWidth, r.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor);
          var s = 0 === h(n.lineWidth, r.borderWidth);
          if (c.setLineDash && c.setLineDash(h(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
           var l = g * Math.SQRT2 / 2,
            u = l / Math.SQRT2,
            d = t + u,
            f = i + u;
           o.canvas.drawPoint(c, n.pointStyle, l, d, f)
          } else s || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);
          c.restore()
         }
        }(C, _, n), x[l].left = C, x[l].top = _, f = n, p = w, v = b + (m = g / 2) + C, M = _ + m, c.fillText(f.text, v, M), f.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v, M), c.lineTo(v + p, M), c.stroke()), y ? d.x += S + i.padding : d.y += k
      })
     }
    },
    handleEvent: function(t) {
     var e = this,
      i = e.options,
      n = "mouseup" === t.type ? "click" : t.type,
      a = !1;
     if ("mousemove" === n) {
      if (!i.onHover) return
     } else {
      if ("click" !== n) return;
      if (!i.onClick) return
     }
     var o = t.x,
      r = t.y;
     if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
      for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
       var u = s[l];
       if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
        if ("click" === n) {
         i.onClick.call(e, t.native, e.legendItems[l]), a = !0;
         break
        }
        if ("mousemove" === n) {
         i.onHover.call(e, t.native, e.legendItems[l]), a = !0;
         break
        }
       }
      }
     return a
    }
   });

   function d(t, e) {
    var i = new u({
     ctx: t.ctx,
     options: e,
     chart: t
    });
    r.configure(t, i, e), r.addBox(t, i), t.legend = i
   }
   e.exports = {
    id: "legend",
    _element: u,
    beforeInit: function(t) {
     var e = t.options.legend;
     e && d(t, e)
    },
    beforeUpdate: function(t) {
     var e = t.options.legend,
      i = t.legend;
     e ? (o.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : d(t, e)) : i && (r.removeBox(t, i), delete t.legend)
    },
    afterEvent: function(t, e) {
     var i = t.legend;
     i && i.handleEvent(e)
    }
   }
  }, {
   25: 25,
   26: 26,
   30: 30,
   45: 45
  }],
  52: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(26),
    o = t(45),
    r = t(30),
    s = o.noop;
   n._set("global", {
    title: {
     display: !1,
     fontStyle: "bold",
     fullWidth: !0,
     lineHeight: 1.2,
     padding: 10,
     position: "top",
     text: "",
     weight: 2e3
    }
   });
   var l = a.extend({
    initialize: function(t) {
     o.extend(this, t), this.legendHitBoxes = []
    },
    beforeUpdate: s,
    update: function(t, e, i) {
     var n = this;
     return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
    },
    afterUpdate: s,
    beforeSetDimensions: s,
    setDimensions: function() {
     var t = this;
     t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
      width: 0,
      height: 0
     }
    },
    afterSetDimensions: s,
    beforeBuildLabels: s,
    buildLabels: s,
    afterBuildLabels: s,
    beforeFit: s,
    fit: function() {
     var t = this,
      e = o.valueOrDefault,
      i = t.options,
      a = i.display,
      r = e(i.fontSize, n.global.defaultFontSize),
      s = t.minSize,
      l = o.isArray(i.text) ? i.text.length : 1,
      u = o.options.toLineHeight(i.lineHeight, r),
      d = a ? l * u + 2 * i.padding : 0;
     t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height
    },
    afterFit: s,
    isHorizontal: function() {
     var t = this.options.position;
     return "top" === t || "bottom" === t
    },
    draw: function() {
     var t = this,
      e = t.ctx,
      i = o.valueOrDefault,
      a = t.options,
      r = n.global;
     if (a.display) {
      var s, l, u, d = i(a.fontSize, r.defaultFontSize),
       c = i(a.fontStyle, r.defaultFontStyle),
       h = i(a.fontFamily, r.defaultFontFamily),
       f = o.fontString(d, c, h),
       g = o.options.toLineHeight(a.lineHeight, d),
       p = g / 2 + a.padding,
       m = 0,
       v = t.top,
       b = t.left,
       x = t.bottom,
       y = t.right;
      e.fillStyle = i(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (y - b) / 2, u = v + p, s = y - b) : (l = "left" === a.position ? b + p : y - p, u = v + (x - v) / 2, s = x - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
      var k = a.text;
      if (o.isArray(k))
       for (var M = 0, w = 0; w < k.length; ++w) e.fillText(k[w], 0, M, s), M += g;
      else e.fillText(k, 0, 0, s);
      e.restore()
     }
    }
   });

   function u(t, e) {
    var i = new l({
     ctx: t.ctx,
     options: e,
     chart: t
    });
    r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i
   }
   e.exports = {
    id: "title",
    _element: l,
    beforeInit: function(t) {
     var e = t.options.title;
     e && u(t, e)
    },
    beforeUpdate: function(t) {
     var e = t.options.title,
      i = t.titleBlock;
     e ? (o.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock)
    }
   }
  }, {
   25: 25,
   26: 26,
   30: 30,
   45: 45
  }],
  53: [function(t, e, i) {
   "use strict";
   e.exports = function(t) {
    var e = t.Scale.extend({
     getLabels: function() {
      var t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
     },
     determineDataLimits: function() {
      var t, e = this,
       i = e.getLabels();
      e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
     },
     buildTicks: function() {
      var t = this,
       e = t.getLabels();
      t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
     },
     getLabelForIndex: function(t, e) {
      var i = this,
       n = i.chart.data,
       a = i.isHorizontal();
      return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
     },
     getPixelForValue: function(t, e) {
      var i, n = this,
       a = n.options.offset,
       o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
      if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
       t = i || t;
       var r = n.getLabels().indexOf(t);
       e = -1 !== r ? r : e
      }
      if (n.isHorizontal()) {
       var s = n.width / o,
        l = s * (e - n.minIndex);
       return a && (l += s / 2), n.left + Math.round(l)
      }
      var u = n.height / o,
       d = u * (e - n.minIndex);
      return a && (d += u / 2), n.top + Math.round(d)
     },
     getPixelForTick: function(t) {
      return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
     },
     getValueForPixel: function(t) {
      var e = this,
       i = e.options.offset,
       n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
       a = e.isHorizontal(),
       o = (a ? e.width : e.height) / n;
      return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
     },
     getBasePixel: function() {
      return this.bottom
     }
    });
    t.scaleService.registerScaleType("category", e, {
     position: "bottom"
    })
   }
  }, {}],
  54: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(45),
    o = t(34);
   e.exports = function(t) {
    var e = {
      position: "left",
      ticks: {
       callback: o.formatters.linear
      }
     },
     i = t.LinearScaleBase.extend({
      determineDataLimits: function() {
       var t = this,
        e = t.options,
        i = t.chart,
        n = i.data.datasets,
        o = t.isHorizontal();

       function r(e) {
        return o ? e.xAxisID === t.id : e.yAxisID === t.id
       }
       t.min = null, t.max = null;
       var s = e.stacked;
       if (void 0 === s && a.each(n, function(t, e) {
         if (!s) {
          var n = i.getDatasetMeta(e);
          i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
         }
        }), e.stacked || s) {
        var l = {};
        a.each(n, function(n, o) {
         var s = i.getDatasetMeta(o),
          u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
         void 0 === l[u] && (l[u] = {
          positiveValues: [],
          negativeValues: []
         });
         var d = l[u].positiveValues,
          c = l[u].negativeValues;
         i.isDatasetVisible(o) && r(s) && a.each(n.data, function(i, n) {
          var a = +t.getRightValue(i);
          isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a)
         })
        }), a.each(l, function(e) {
         var i = e.positiveValues.concat(e.negativeValues),
          n = a.min(i),
          o = a.max(i);
         t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o)
        })
       } else a.each(n, function(e, n) {
        var o = i.getDatasetMeta(n);
        i.isDatasetVisible(n) && r(o) && a.each(e.data, function(e, i) {
         var n = +t.getRightValue(e);
         isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
        })
       });
       t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
      },
      getTickLimit: function() {
       var t, e = this.options.ticks;
       if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
       else {
        var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
        t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
       }
       return t
      },
      handleDirectionalChanges: function() {
       this.isHorizontal() || this.ticks.reverse()
      },
      getLabelForIndex: function(t, e) {
       return +this.getRightValue(this.chart.data.datasets[e].data[t])
      },
      getPixelForValue: function(t) {
       var e = this,
        i = e.start,
        n = +e.getRightValue(t),
        a = e.end - i;
       return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i)
      },
      getValueForPixel: function(t) {
       var e = this,
        i = e.isHorizontal(),
        n = i ? e.width : e.height,
        a = (i ? t - e.left : e.bottom - t) / n;
       return e.start + (e.end - e.start) * a
      },
      getPixelForTick: function(t) {
       return this.getPixelForValue(this.ticksAsNumbers[t])
      }
     });
    t.scaleService.registerScaleType("linear", i, e)
   }
  }, {
   25: 25,
   34: 34,
   45: 45
  }],
  55: [function(t, e, i) {
   "use strict";
   var n = t(45);
   e.exports = function(t) {
    var e = n.noop;
    t.LinearScaleBase = t.Scale.extend({
     getRightValue: function(e) {
      return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
     },
     handleTickRangeOptions: function() {
      var t = this,
       e = t.options.ticks;
      if (e.beginAtZero) {
       var i = n.sign(t.min),
        a = n.sign(t.max);
       i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0)
      }
      var o = void 0 !== e.min || void 0 !== e.suggestedMin,
       r = void 0 !== e.max || void 0 !== e.suggestedMax;
      void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
     },
     getTickLimit: e,
     handleDirectionalChanges: e,
     buildTicks: function() {
      var t = this,
       e = t.options.ticks,
       i = t.getTickLimit(),
       a = {
        maxTicks: i = Math.max(2, i),
        min: e.min,
        max: e.max,
        stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
       },
       o = t.ticks = function(t, e) {
        var i, a = [];
        if (t.stepSize && t.stepSize > 0) i = t.stepSize;
        else {
         var o = n.niceNum(e.max - e.min, !1);
         i = n.niceNum(o / (t.maxTicks - 1), !0)
        }
        var r = Math.floor(e.min / i) * i,
         s = Math.ceil(e.max / i) * i;
        t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);
        var l = (s - r) / i;
        l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);
        var u = 1;
        i < 1 && (u = Math.pow(10, i.toString().length - 2), r = Math.round(r * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : r);
        for (var d = 1; d < l; ++d) a.push(Math.round((r + d * i) * u) / u);
        return a.push(void 0 !== t.max ? t.max : s), a
       }(a, t);
      t.handleDirectionalChanges(), t.max = n.max(o), t.min = n.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
     },
     convertTicksToLabels: function() {
      var e = this;
      e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
     }
    })
   }
  }, {
   45: 45
  }],
  56: [function(t, e, i) {
   "use strict";
   var n = t(45),
    a = t(34);
   e.exports = function(t) {
    var e = {
      position: "left",
      ticks: {
       callback: a.formatters.logarithmic
      }
     },
     i = t.Scale.extend({
      determineDataLimits: function() {
       var t = this,
        e = t.options,
        i = t.chart,
        a = i.data.datasets,
        o = t.isHorizontal();

       function r(e) {
        return o ? e.xAxisID === t.id : e.yAxisID === t.id
       }
       t.min = null, t.max = null, t.minNotZero = null;
       var s = e.stacked;
       if (void 0 === s && n.each(a, function(t, e) {
         if (!s) {
          var n = i.getDatasetMeta(e);
          i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
         }
        }), e.stacked || s) {
        var l = {};
        n.each(a, function(a, o) {
         var s = i.getDatasetMeta(o),
          u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
         i.isDatasetVisible(o) && r(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function(e, i) {
          var n = l[u],
           a = +t.getRightValue(e);
          isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a)
         }))
        }), n.each(l, function(e) {
         if (e.length > 0) {
          var i = n.min(e),
           a = n.max(e);
          t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a)
         }
        })
       } else n.each(a, function(e, a) {
        var o = i.getDatasetMeta(a);
        i.isDatasetVisible(a) && r(o) && n.each(e.data, function(e, i) {
         var n = +t.getRightValue(e);
         isNaN(n) || o.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
        })
       });
       this.handleTickRangeOptions()
      },
      handleTickRangeOptions: function() {
       var t = this,
        e = t.options.ticks,
        i = n.valueOrDefault;
       t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1)
      },
      buildTicks: function() {
       var t = this,
        e = t.options.ticks,
        i = !t.isHorizontal(),
        a = {
         min: e.min,
         max: e.max
        },
        o = t.ticks = function(t, e) {
         var i, a, o = [],
          r = n.valueOrDefault,
          s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
          l = Math.floor(n.log10(e.max)),
          u = Math.ceil(e.max / Math.pow(10, l));
         0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));
         for (var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1; o.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d, i < l || i === l && a < u;);
         var c = r(t.max, s);
         return o.push(c), o
        }(a, t);
       t.max = n.max(o), t.min = n.min(o), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && o.reverse()
      },
      convertTicksToLabels: function() {
       this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
      },
      getLabelForIndex: function(t, e) {
       return +this.getRightValue(this.chart.data.datasets[e].data[t])
      },
      getPixelForTick: function(t) {
       return this.getPixelForValue(this.tickValues[t])
      },
      _getFirstTickValue: function(t) {
       var e = Math.floor(n.log10(t));
       return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
      },
      getPixelForValue: function(e) {
       var i, a, o, r, s, l = this,
        u = l.options.ticks.reverse,
        d = n.log10,
        c = l._getFirstTickValue(l.minNotZero),
        h = 0;
       return e = +l.getRightValue(e), u ? (o = l.end, r = l.start, s = -1) : (o = l.start, r = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== o && (0 === o && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = c), 0 !== e && (h += i / (d(r) - d(o)) * (d(e) - d(o))), a += s * h), a
      },
      getValueForPixel: function(e) {
       var i, a, o, r, s = this,
        l = s.options.ticks.reverse,
        u = n.log10,
        d = s._getFirstTickValue(s.minNotZero);
       if (l ? (a = s.end, o = s.start) : (a = s.start, o = s.end), s.isHorizontal() ? (i = s.width, r = l ? s.right - e : e - s.left) : (i = s.height, r = l ? e - s.top : s.bottom - e), r !== a) {
        if (0 === a) {
         var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
         r -= c, i -= c, a = d
        }
        r *= u(o) - u(a), r /= i, r = Math.pow(10, u(a) + r)
       }
       return r
      }
     });
    t.scaleService.registerScaleType("logarithmic", i, e)
   }
  }, {
   34: 34,
   45: 45
  }],
  57: [function(t, e, i) {
   "use strict";
   var n = t(25),
    a = t(45),
    o = t(34);
   e.exports = function(t) {
    var e = n.global,
     i = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
       display: !0,
       color: "rgba(0, 0, 0, 0.1)",
       lineWidth: 1
      },
      gridLines: {
       circular: !1
      },
      ticks: {
       showLabelBackdrop: !0,
       backdropColor: "rgba(255,255,255,0.75)",
       backdropPaddingY: 2,
       backdropPaddingX: 2,
       callback: o.formatters.linear
      },
      pointLabels: {
       display: !0,
       fontSize: 10,
       callback: function(t) {
        return t
       }
      }
     };

    function r(t) {
     var e = t.options;
     return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
    }

    function s(t) {
     var i = t.options.pointLabels,
      n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
      o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
      r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
     return {
      size: n,
      style: o,
      family: r,
      font: a.fontString(n, o, r)
     }
    }

    function l(t, e, i, n, a) {
     return t === n || t === a ? {
      start: e - i / 2,
      end: e + i / 2
     } : t < n || t > a ? {
      start: e - i - 5,
      end: e
     } : {
      start: e,
      end: e + i + 5
     }
    }

    function u(t, e, i, n) {
     if (a.isArray(e))
      for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, o), o += r;
     else t.fillText(e, i.x, i.y)
    }

    function d(t) {
     return a.isNumber(t) ? t : 0
    }
    var c = t.LinearScaleBase.extend({
     setDimensions: function() {
      var t = this,
       i = t.options,
       n = i.ticks;
      t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
      var o = a.min([t.height, t.width]),
       r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
      t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2
     },
     determineDataLimits: function() {
      var t = this,
       e = t.chart,
       i = Number.POSITIVE_INFINITY,
       n = Number.NEGATIVE_INFINITY;
      a.each(e.data.datasets, function(o, r) {
       if (e.isDatasetVisible(r)) {
        var s = e.getDatasetMeta(r);
        a.each(o.data, function(e, a) {
         var o = +t.getRightValue(e);
         isNaN(o) || s.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n))
        })
       }
      }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
     },
     getTickLimit: function() {
      var t = this.options.ticks,
       i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
      return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
     },
     convertTicksToLabels: function() {
      var e = this;
      t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
     },
     getLabelForIndex: function(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t])
     },
     fit: function() {
      var t, e;
      this.options.pointLabels.display ? function(t) {
       var e, i, n, o = s(t),
        u = Math.min(t.height / 2, t.width / 2),
        d = {
         r: t.width,
         l: 0,
         t: t.height,
         b: 0
        },
        c = {};
       t.ctx.font = o.font, t._pointLabelSizes = [];
       var h, f, g, p = r(t);
       for (e = 0; e < p; e++) {
        n = t.getPointPosition(e, u), h = t.ctx, f = o.size, g = t.pointLabels[e] || "", i = a.isArray(g) ? {
         w: a.longestText(h, h.font, g),
         h: g.length * f + 1.5 * (g.length - 1) * f
        } : {
         w: h.measureText(g).width,
         h: f
        }, t._pointLabelSizes[e] = i;
        var m = t.getIndexAngle(e),
         v = a.toDegrees(m) % 360,
         b = l(v, n.x, i.w, 0, 180),
         x = l(v, n.y, i.h, 90, 270);
        b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), x.start < d.t && (d.t = x.start, c.t = m), x.end > d.b && (d.b = x.end, c.b = m)
       }
       t.setReductions(u, d, c)
      }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
     },
     setReductions: function(t, e, i) {
      var n = e.l / Math.sin(i.l),
       a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
       o = -e.t / Math.cos(i.t),
       r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
      n = d(n), a = d(a), o = d(o), r = d(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r)
     },
     setCenterPoint: function(t, e, i, n) {
      var a = this,
       o = a.width - e - a.drawingArea,
       r = t + a.drawingArea,
       s = i + a.drawingArea,
       l = a.height - n - a.drawingArea;
      a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
     },
     getIndexAngle: function(t) {
      return t * (2 * Math.PI / r(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
     },
     getDistanceFromCenterForValue: function(t) {
      var e = this;
      if (null === t) return 0;
      var i = e.drawingArea / (e.max - e.min);
      return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
     },
     getPointPosition: function(t, e) {
      var i = this.getIndexAngle(t) - Math.PI / 2;
      return {
       x: Math.round(Math.cos(i) * e) + this.xCenter,
       y: Math.round(Math.sin(i) * e) + this.yCenter
      }
     },
     getPointPositionForValue: function(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
     },
     getBasePosition: function() {
      var t = this.min,
       e = this.max;
      return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
     },
     draw: function() {
      var t = this,
       i = t.options,
       n = i.gridLines,
       o = i.ticks,
       l = a.valueOrDefault;
      if (i.display) {
       var d = t.ctx,
        c = this.getIndexAngle(0),
        h = l(o.fontSize, e.defaultFontSize),
        f = l(o.fontStyle, e.defaultFontStyle),
        g = l(o.fontFamily, e.defaultFontFamily),
        p = a.fontString(h, f, g);
       a.each(t.ticks, function(i, s) {
        if (s > 0 || o.reverse) {
         var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
         if (n.display && 0 !== s && function(t, e, i, n) {
           var o = t.ctx;
           if (o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();
           else {
            var s = r(t);
            if (0 === s) return;
            o.beginPath();
            var l = t.getPointPosition(0, i);
            o.moveTo(l.x, l.y);
            for (var u = 1; u < s; u++) l = t.getPointPosition(u, i), o.lineTo(l.x, l.y);
            o.closePath(), o.stroke()
           }
          }(t, n, u, s), o.display) {
          var f = l(o.fontColor, e.defaultFontColor);
          if (d.font = p, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(c), o.showLabelBackdrop) {
           var g = d.measureText(i).width;
           d.fillStyle = o.backdropColor, d.fillRect(-g / 2 - o.backdropPaddingX, -u - h / 2 - o.backdropPaddingY, g + 2 * o.backdropPaddingX, h + 2 * o.backdropPaddingY)
          }
          d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore()
         }
        }
       }), (i.angleLines.display || i.pointLabels.display) && function(t) {
        var i = t.ctx,
         n = t.options,
         o = n.angleLines,
         l = n.pointLabels;
        i.lineWidth = o.lineWidth, i.strokeStyle = o.color;
        var d, c, h, f, g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
         p = s(t);
        i.textBaseline = "top";
        for (var m = r(t) - 1; m >= 0; m--) {
         if (o.display) {
          var v = t.getPointPosition(m, g);
          i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath()
         }
         if (l.display) {
          var b = t.getPointPosition(m, g + 5),
           x = a.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
          i.font = p.font, i.fillStyle = x;
          var y = t.getIndexAngle(m),
           k = a.toDegrees(y);
          i.textAlign = 0 === (f = k) || 180 === f ? "center" : f < 180 ? "left" : "right", d = k, c = t._pointLabelSizes[m], h = b, 90 === d || 270 === d ? h.y -= c.h / 2 : (d > 270 || d < 90) && (h.y -= c.h), u(i, t.pointLabels[m] || "", b, p.size)
         }
        }
       }(t)
      }
     }
    });
    t.scaleService.registerScaleType("radialLinear", c, i)
   }
  }, {
   25: 25,
   34: 34,
   45: 45
  }],
  58: [function(t, e, i) {
   "use strict";
   var n = t(1);
   n = "function" == typeof n ? n : window.moment;
   var a = t(25),
    o = t(45),
    r = Number.MIN_SAFE_INTEGER || -9007199254740991,
    s = Number.MAX_SAFE_INTEGER || 9007199254740991,
    l = {
     millisecond: {
      common: !0,
      size: 1,
      steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
     },
     second: {
      common: !0,
      size: 1e3,
      steps: [1, 2, 5, 10, 30]
     },
     minute: {
      common: !0,
      size: 6e4,
      steps: [1, 2, 5, 10, 30]
     },
     hour: {
      common: !0,
      size: 36e5,
      steps: [1, 2, 3, 6, 12]
     },
     day: {
      common: !0,
      size: 864e5,
      steps: [1, 2, 5]
     },
     week: {
      common: !1,
      size: 6048e5,
      steps: [1, 2, 3, 4]
     },
     month: {
      common: !0,
      size: 2628e6,
      steps: [1, 2, 3]
     },
     quarter: {
      common: !1,
      size: 7884e6,
      steps: [1, 2, 3, 4]
     },
     year: {
      common: !0,
      size: 3154e7
     }
    },
    u = Object.keys(l);

   function d(t, e) {
    return t - e
   }

   function c(t) {
    var e, i, n, a = {},
     o = [];
    for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));
    return o
   }

   function h(t, e, i, n) {
    var a = function(t, e, i) {
      for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
       if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
        lo: null,
        hi: o
       };
       if (o[e] < i) r = n + 1;
       else {
        if (!(a[e] > i)) return {
         lo: a,
         hi: o
        };
        s = n - 1
       }
      }
      return {
       lo: o,
       hi: null
      }
     }(t, e, i),
     o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
     r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
     s = r[e] - o[e],
     l = s ? (i - o[e]) / s : 0,
     u = (r[n] - o[n]) * l;
    return o[n] + u
   }

   function f(t, e) {
    var i = e.parser,
     a = e.parser || e.format;
    return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t)
   }

   function g(t, e) {
    if (o.isNullOrUndef(t)) return null;
    var i = e.options.time,
     n = f(e.getRightValue(t), i);
    return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
   }

   function p(t) {
    for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e)
     if (l[u[e]].common) return u[e]
   }

   function m(t, e, i, a) {
    var r, d = a.time,
     c = d.unit || function(t, e, i, n) {
      var a, o, r, d = u.length;
      for (a = u.indexOf(t); a < d - 1; ++a)
       if (r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return u[a];
      return u[d - 1]
     }(d.minUnit, t, e, i),
     h = p(c),
     f = o.valueOrDefault(d.stepSize, d.unitStepSize),
     g = "week" === c && d.isoWeekday,
     m = a.ticks.major.enabled,
     v = l[c],
     b = n(t),
     x = n(e),
     y = [];
    for (f || (f = function(t, e, i, n) {
      var a, o, r, s = e - t,
       u = l[i],
       d = u.size,
       c = u.steps;
      if (!c) return Math.ceil(s / (n * d));
      for (a = 0, o = c.length; a < o && (r = c[a], !(Math.ceil(s / (d * r)) <= n)); ++a);
      return r
     }(t, e, c, i)), g && (b = b.isoWeekday(g), x = x.isoWeekday(g)), b = b.startOf(g ? "day" : c), (x = x.startOf(g ? "day" : c)) < e && x.add(1, c), r = n(b), m && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (v.size * f)) * f, c)); r < x; r.add(f, c)) y.push(+r);
    return y.push(+r), y
   }
   e.exports = function(t) {
    var e = t.Scale.extend({
     initialize: function() {
      if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
      this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
     },
     update: function() {
      var e = this.options;
      return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments)
     },
     getRightValue: function(e) {
      return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
     },
     determineDataLimits: function() {
      var t, e, i, a, l, u, h = this,
       f = h.chart,
       p = h.options.time,
       m = p.unit || "day",
       v = s,
       b = r,
       x = [],
       y = [],
       k = [];
      for (t = 0, i = f.data.labels.length; t < i; ++t) k.push(g(f.data.labels[t], h));
      for (t = 0, i = (f.data.datasets || []).length; t < i; ++t)
       if (f.isDatasetVisible(t))
        if (l = f.data.datasets[t].data, o.isObject(l[0]))
         for (y[t] = [], e = 0, a = l.length; e < a; ++e) u = g(l[e], h), x.push(u), y[t][e] = u;
        else x.push.apply(x, k), y[t] = k.slice(0);
      else y[t] = [];
      k.length && (k = c(k).sort(d), v = Math.min(v, k[0]), b = Math.max(b, k[k.length - 1])), x.length && (x = c(x).sort(d), v = Math.min(v, x[0]), b = Math.max(b, x[x.length - 1])), v = g(p.min, h) || v, b = g(p.max, h) || b, v = v === s ? +n().startOf(m) : v, b = b === r ? +n().endOf(m) + 1 : b, h.min = Math.min(v, b), h.max = Math.max(v + 1, b), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
       data: x,
       datasets: y,
       labels: k
      }
     },
     buildTicks: function() {
      var t, e, i, a, o, r, s, d, c, v, b, x, y = this,
       k = y.min,
       M = y.max,
       w = y.options,
       S = w.time,
       C = [],
       _ = [];
      switch (w.ticks.source) {
       case "data":
        C = y._timestamps.data;
        break;
       case "labels":
        C = y._timestamps.labels;
        break;
       case "auto":
       default:
        C = m(k, M, y.getLabelCapacity(k), w)
      }
      for ("ticks" === w.bounds && C.length && (k = C[0], M = C[C.length - 1]), k = g(S.min, y) || k, M = g(S.max, y) || M, t = 0, e = C.length; t < e; ++t)(i = C[t]) >= k && i <= M && _.push(i);
      return y.min = k, y.max = M, y._unit = S.unit || function(t, e, i, a) {
        var o, r, s = n.duration(n(a).diff(n(i)));
        for (o = u.length - 1; o >= u.indexOf(e); o--)
         if (r = u[o], l[r].common && s.as(r) >= t.length) return r;
        return u[e ? u.indexOf(e) : 0]
       }(_, S.minUnit, y.min, y.max), y._majorUnit = p(y._unit), y._table = function(t, e, i, n) {
        if ("linear" === n || !t.length) return [{
         time: e,
         pos: 0
        }, {
         time: i,
         pos: 1
        }];
        var a, o, r, s, l, u = [],
         d = [e];
        for (a = 0, o = t.length; a < o; ++a)(s = t[a]) > e && s < i && d.push(s);
        for (d.push(i), a = 0, o = d.length; a < o; ++a) l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
         time: s,
         pos: a / (o - 1)
        });
        return u
       }(y._timestamps.data, k, M, w.distribution), y._offsets = (a = y._table, o = _, r = k, s = M, b = 0, x = 0, (d = w).offset && o.length && (d.time.min || (c = o.length > 1 ? o[1] : s, v = o[0], b = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2), d.time.max || (c = o[o.length - 1], v = o.length > 1 ? o[o.length - 2] : r, x = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2)), {
        left: b,
        right: x
       }), y._labelFormat = function(t, e) {
        var i, n, a, o = t.length;
        for (i = 0; i < o; i++) {
         if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
         0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0)
        }
        return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
       }(y._timestamps.data, S),
       function(t, e) {
        var i, a, o, r, s = [];
        for (i = 0, a = t.length; i < a; ++i) o = t[i], r = !!e && o === +n(o).startOf(e), s.push({
         value: o,
         major: r
        });
        return s
       }(_, y._majorUnit)
     },
     getLabelForIndex: function(t, e) {
      var i = this.chart.data,
       n = this.options.time,
       a = i.labels && t < i.labels.length ? i.labels[t] : "",
       r = i.datasets[e].data[t];
      return o.isObject(r) && (a = this.getRightValue(r)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat)
     },
     tickFormatFunction: function(t, e, i, n) {
      var a = this.options,
       r = t.valueOf(),
       s = a.time.displayFormats,
       l = s[this._unit],
       u = this._majorUnit,
       d = s[u],
       c = t.clone().startOf(u).valueOf(),
       h = a.ticks.major,
       f = h.enabled && u && d && r === c,
       g = t.format(n || (f ? d : l)),
       p = f ? h : a.ticks.minor,
       m = o.valueOrDefault(p.callback, p.userCallback);
      return m ? m(g, e, i) : g
     },
     convertTicksToLabels: function(t) {
      var e, i, a = [];
      for (e = 0, i = t.length; e < i; ++e) a.push(this.tickFormatFunction(n(t[e].value), e, t));
      return a
     },
     getPixelForOffset: function(t) {
      var e = this,
       i = e._horizontal ? e.width : e.height,
       n = e._horizontal ? e.left : e.top,
       a = h(e._table, "time", t, "pos");
      return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right)
     },
     getPixelForValue: function(t, e, i) {
      var n = null;
      if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n)
     },
     getPixelForTick: function(t) {
      var e = this.getTicks();
      return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
     },
     getValueForPixel: function(t) {
      var e = this,
       i = e._horizontal ? e.width : e.height,
       a = e._horizontal ? e.left : e.top,
       o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
       r = h(e._table, "pos", o, "time");
      return n(r)
     },
     getLabelWidth: function(t) {
      var e = this.options.ticks,
       i = this.ctx.measureText(t).width,
       n = o.toRadians(e.maxRotation),
       r = Math.cos(n),
       s = Math.sin(n);
      return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s
     },
     getLabelCapacity: function(t) {
      var e = this,
       i = e.options.time.displayFormats.millisecond,
       a = e.tickFormatFunction(n(t), 0, [], i),
       o = e.getLabelWidth(a),
       r = e.isHorizontal() ? e.width : e.height,
       s = Math.floor(r / o);
      return s > 0 ? s : 1
     }
    });
    t.scaleService.registerScaleType("time", e, {
     position: "bottom",
     distribution: "linear",
     bounds: "data",
     time: {
      parser: !1,
      format: !1,
      unit: !1,
      round: !1,
      displayFormat: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {
       millisecond: "h:mm:ss.SSS a",
       second: "h:mm:ss a",
       minute: "h:mm a",
       hour: "hA",
       day: "MMM D",
       week: "ll",
       month: "MMM YYYY",
       quarter: "[Q]Q - YYYY",
       year: "YYYY"
      }
     },
     ticks: {
      autoSkip: !1,
      source: "auto",
      major: {
       enabled: !1
      }
     }
    })
   }
  }, {
   1: 1,
   25: 25,
   45: 45
  }]
 }, {}, [7])(7)
});
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.5.0 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2016, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
 **/
! function(a) {
 "use strict";

 function b(a, c) {
  if (!(this instanceof b)) {
   var d = new b(a, c);
   return d.open(), d
  }
  this.id = b.id++, this.setup(a, c), this.chainCallbacks(b._callbackChain)
 }
 if ("undefined" == typeof a) return void("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
 var c = [],
  d = function(b) {
   return c = a.grep(c, function(a) {
    return a !== b && a.$instance.closest("body").length > 0
   })
  },
  e = function(a, b) {
   var c = {},
    d = new RegExp("^" + b + "([A-Z])(.*)");
   for (var e in a) {
    var f = e.match(d);
    if (f) {
     var g = (f[1] + f[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
     c[g] = a[e]
    }
   }
   return c
  },
  f = {
   keyup: "onKeyUp",
   resize: "onResize"
  },
  g = function(c) {
   a.each(b.opened().reverse(), function() {
    return c.isDefaultPrevented() || !1 !== this[f[c.type]](c) ? void 0 : (c.preventDefault(), c.stopPropagation(), !1)
   })
  },
  h = function(c) {
   if (c !== b._globalHandlerInstalled) {
    b._globalHandlerInstalled = c;
    var d = a.map(f, function(a, c) {
     return c + "." + b.prototype.namespace
    }).join(" ");
    a(window)[c ? "on" : "off"](d, g)
   }
  };
 b.prototype = {
  constructor: b,
  namespace: "featherlight",
  targetAttr: "data-featherlight",
  variant: null,
  resetCss: !1,
  background: null,
  openTrigger: "click",
  closeTrigger: "click",
  filter: null,
  root: "body",
  openSpeed: 250,
  closeSpeed: 250,
  closeOnClick: "background",
  closeOnEsc: !0,
  closeIcon: "&#10005;",
  loading: "",
  persist: !1,
  otherClose: null,
  beforeOpen: a.noop,
  beforeContent: a.noop,
  beforeClose: a.noop,
  afterOpen: a.noop,
  afterContent: a.noop,
  afterClose: a.noop,
  onKeyUp: a.noop,
  onResize: a.noop,
  type: null,
  contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
  setup: function(b, c) {
   "object" != typeof b || b instanceof a != !1 || c || (c = b, b = void 0);
   var d = a.extend(this, c, {
     target: b
    }),
    e = d.resetCss ? d.namespace + "-reset" : d.namespace,
    f = a(d.background || ['<div class="' + e + "-loading " + e + '">', '<div class="' + e + '-content">', '<span class="' + e + "-close-icon " + d.namespace + '-close">', d.closeIcon, "</span>", '<div class="' + d.namespace + '-inner">' + d.loading + "</div>", "</div>", "</div>"].join("")),
    g = "." + d.namespace + "-close" + (d.otherClose ? "," + d.otherClose : "");
   return d.$instance = f.clone().addClass(d.variant), d.$instance.on(d.closeTrigger + "." + d.namespace, function(b) {
    var c = a(b.target);
    ("background" === d.closeOnClick && c.is("." + d.namespace) || "anywhere" === d.closeOnClick || c.closest(g).length) && (d.close(b), b.preventDefault())
   }), this
  },
  getContent: function() {
   if (this.persist !== !1 && this.$content) return this.$content;
   var b = this,
    c = this.constructor.contentFilters,
    d = function(a) {
     return b.$currentTarget && b.$currentTarget.attr(a)
    },
    e = d(b.targetAttr),
    f = b.target || e || "",
    g = c[b.type];
   if (!g && f in c && (g = c[f], f = b.target && e), f = f || d("href") || "", !g)
    for (var h in c) b[h] && (g = c[h], f = b[h]);
   if (!g) {
    var i = f;
    if (f = null, a.each(b.contentFilters, function() {
      return g = c[this], g.test && (f = g.test(i)), !f && g.regex && i.match && i.match(g.regex) && (f = i), !f
     }), !f) return "console" in window && window.console.error("Featherlight: no content filter found " + (i ? ' for "' + i + '"' : " (no target specified)")), !1
   }
   return g.process.call(b, f)
  },
  setContent: function(b) {
   var c = this;
   return (b.is("iframe") || a("iframe", b).length > 0) && c.$instance.addClass(c.namespace + "-iframe"), c.$instance.removeClass(c.namespace + "-loading"), c.$instance.find("." + c.namespace + "-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0], b[0]) ? "" : b), c.$content = b.addClass(c.namespace + "-inner"), c
  },
  open: function(b) {
   var d = this;
   if (d.$instance.hide().appendTo(d.root), !(b && b.isDefaultPrevented() || d.beforeOpen(b) === !1)) {
    b && b.preventDefault();
    var e = d.getContent();
    if (e) return c.push(d), h(!0), d.$instance.fadeIn(d.openSpeed), d.beforeContent(b), a.when(e).always(function(a) {
     d.setContent(a), d.afterContent(b)
    }).then(d.$instance.promise()).done(function() {
     d.afterOpen(b)
    })
   }
   return d.$instance.detach(), a.Deferred().reject().promise()
  },
  close: function(b) {
   var c = this,
    e = a.Deferred();
   return c.beforeClose(b) === !1 ? e.reject() : (0 === d(c).length && h(!1), c.$instance.fadeOut(c.closeSpeed, function() {
    c.$instance.detach(), c.afterClose(b), e.resolve()
   })), e.promise()
  },
  resize: function(a, b) {
   if (a && b) {
    this.$content.css("width", "").css("height", "");
    var c = Math.max(a / (parseInt(this.$content.parent().css("width"), 10) - 1), b / (parseInt(this.$content.parent().css("height"), 10) - 1));
    c > 1 && (c = b / Math.floor(b / c), this.$content.css("width", "" + a / c + "px").css("height", "" + b / c + "px"))
   }
  },
  chainCallbacks: function(b) {
   for (var c in b) this[c] = a.proxy(b[c], this, a.proxy(this[c], this))
  }
 }, a.extend(b, {
  id: 0,
  autoBind: "[data-featherlight]",
  defaults: b.prototype,
  contentFilters: {
   jquery: {
    regex: /^[#.]\w/,
    test: function(b) {
     return b instanceof a && b
    },
    process: function(b) {
     return this.persist !== !1 ? a(b) : a(b).clone(!0)
    }
   },
   image: {
    regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
    process: function(b) {
     var c = this,
      d = a.Deferred(),
      e = new Image,
      f = a('<img src="' + b + '" alt="" class="' + c.namespace + '-image" />');
     return e.onload = function() {
      f.naturalWidth = e.width, f.naturalHeight = e.height, d.resolve(f)
     }, e.onerror = function() {
      d.reject(f)
     }, e.src = b, d.promise()
    }
   },
   html: {
    regex: /^\s*<[\w!][^<]*>/,
    process: function(b) {
     return a(b)
    }
   },
   ajax: {
    regex: /./,
    process: function(b) {
     var c = a.Deferred(),
      d = a("<div></div>").load(b, function(a, b) {
       "error" !== b && c.resolve(d.contents()), c.fail()
      });
     return c.promise()
    }
   },
   iframe: {
    process: function(b) {
     var c = new a.Deferred,
      d = a("<iframe/>").hide().attr("src", b).css(e(this, "iframe")).on("load", function() {
       c.resolve(d.show())
      }).appendTo(this.$instance.find("." + this.namespace + "-content"));
     return c.promise()
    }
   },
   text: {
    process: function(b) {
     return a("<div>", {
      text: b
     })
    }
   }
  },
  functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
  readElementConfig: function(b, c) {
   var d = this,
    e = new RegExp("^data-" + c + "-(.*)"),
    f = {};
   return b && b.attributes && a.each(b.attributes, function() {
    var b = this.name.match(e);
    if (b) {
     var c = this.value,
      g = a.camelCase(b[1]);
     if (a.inArray(g, d.functionAttributes) >= 0) c = new Function(c);
     else try {
      c = a.parseJSON(c)
     } catch (h) {}
     f[g] = c
    }
   }), f
  },
  extend: function(b, c) {
   var d = function() {
    this.constructor = b
   };
   return d.prototype = this.prototype, b.prototype = new d, b.__super__ = this.prototype, a.extend(b, this, c), b.defaults = b.prototype, b
  },
  attach: function(b, c, d) {
   var e = this;
   "object" != typeof c || c instanceof a != !1 || d || (d = c, c = void 0), d = a.extend({}, d);
   var f, g = d.namespace || e.defaults.namespace,
    h = a.extend({}, e.defaults, e.readElementConfig(b[0], g), d);
   return b.on(h.openTrigger + "." + h.namespace, h.filter, function(g) {
    var i = a.extend({
      $source: b,
      $currentTarget: a(this)
     }, e.readElementConfig(b[0], h.namespace), e.readElementConfig(this, h.namespace), d),
     j = f || a(this).data("featherlight-persisted") || new e(c, i);
    "shared" === j.persist ? f = j : j.persist !== !1 && a(this).data("featherlight-persisted", j), i.$currentTarget.blur(), j.open(g)
   }), b
  },
  current: function() {
   var a = this.opened();
   return a[a.length - 1] || null
  },
  opened: function() {
   var b = this;
   return d(), a.grep(c, function(a) {
    return a instanceof b
   })
  },
  close: function(a) {
   var b = this.current();
   return b ? b.close(a) : void 0
  },
  _onReady: function() {
   var b = this;
   b.autoBind && (a(b.autoBind).each(function() {
    b.attach(a(this))
   }), a(document).on("click", b.autoBind, function(c) {
    c.isDefaultPrevented() || "featherlight" === c.namespace || (c.preventDefault(), b.attach(a(c.currentTarget)), a(c.target).trigger("click.featherlight"))
   }))
  },
  _callbackChain: {
   onKeyUp: function(b, c) {
    return 27 === c.keyCode ? (this.closeOnEsc && a.featherlight.close(c), !1) : b(c)
   },
   onResize: function(a, b) {
    return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), a(b)
   },
   afterContent: function(a, b) {
    var c = a(b);
    return this.onResize(b), c
   }
  }
 }), a.featherlight = b, a.fn.featherlight = function(a, c) {
  return b.attach(this, a, c)
 }, a(document).ready(function() {
  b._onReady()
 })
}(jQuery);
"use strict";
jQuery, window.app = {
  name: "",
  author: "",
  breakpoint: {
   mobile: 576,
   tablet: 767,
   laptop: 992,
   desktop: 1440
  },
  colors: {
   primary: "#6569df",
   success: "#24d5d8",
   info: "#04a1f4",
   warning: "#fecd2f",
   danger: "#fd3259",
   primaryOpacity: "rgba(101, 105, 223, 0.1)",
   successOpacity: "rgba(36, 213, 216, 0.1)",
   infoOpacity: "rgba(4, 161, 244, 0.1)",
   warningOpacity: "rgba(254, 205, 47, 0.1)",
   dangerOpacity: "rgba(253, 50, 89, 0.1)",
   transparent: "rgba(255, 255, 255, 0)",
   gray: "#fafafa",
   white: "#fff",
   dark: "#515365",
   textColor: "#8a8a8a",
   borderColor: "#e9e9e9",
   gradientPrimaryStart: "#b603c1",
   gradientSuccessStart: "#1dccdf",
   gradientInfoStart: "#6a4ee1",
   gradientWarningStart: "#f6d365",
   gradientDangerStart: "#f3301a",
   gradientPrimaryStop: "#7a38e0",
   gradientSuccessStop: "#1de4bd",
   gradientInfoStop: "#05bdd7",
   gradientWarningStop: "#fda085",
   gradientDangerStop: "#f37138",
   gradientPrimary: "url(#gradient-primary)",
   gradientSuccess: "url(#gradient-success)",
   gradientInfo: "url(#gradient-info)",
   gradientWarning: "url(#gradient-warning)",
   gradientDanger: "url(#gradient-danger)"
  }
 },
 function(e, n) {
  var i = {
   init: function() {
    e(".side-nav .side-nav-menu li a").on("click", function(n) {
     e(this).parent().hasClass("open") ? e(this).parent().children(".dropdown-menu").slideUp(200, function() {
      e(this).parent().removeClass("open")
     }) : (e(this).parent().parent().children("li.open").children(".dropdown-menu").slideUp(200), e(this).parent().parent().children("li.open").children("a").removeClass("open"), e(this).parent().parent().children("li.open").removeClass("open"), e(this).parent().children(".dropdown-menu").slideDown(200, function() {
      e(this).parent().addClass("open")
     }))
    }), e(".sidenav-fold-toggler").on("click", function(n) {
     e(".app").toggleClass("side-nav-folded"), n.preventDefault()
    }), e(".sidenav-expand-toggler").on("click", function(n) {
     if (e(".side-nav-backdrop").length) e(".side-nav-backdrop").remove();
     else {
      e(".app").append('<div class="side-nav-backdrop"></div>')
     }
     e(".app").toggleClass("side-nav-expand"), n.stopPropagation(), e(".side-nav-backdrop").on("click", function(n) {
      e(".app").removeClass("side-nav-expand"), e(this).remove()
     })
    })
   }
  };
  window.sideNav = i
 }(jQuery),
 function(e, n) {
  var i = {
   init: function() {
    e(".quick-view-toggler").on("click", function(n) {
     if (e(".quick-view-backdrop").length) e(".quick-view-backdrop").remove();
     else {
      e(".app").append('<div class="quick-view-backdrop"></div>')
     }
     e(".app").toggleClass("quick-view-expand"), n.stopPropagation(), e(".quick-view-backdrop").on("click", function(n) {
      e(".app").removeClass("quick-view-expand"), e(this).remove()
     })
    }), e(".conversation-toggler").on("click", function(n) {
     e(".quick-view-chat").toggleClass("conversation-expand")
    })
   }
  };
  window.quickView = i
 }(jQuery),
 function(e, n) {
  var i = {
   init: function() {
    e(".aside-toggle").on("click", function(n) {
     e(".aside").toggleClass("open")
    })
   }
  };
  window.aside = i
 }(jQuery),
 function(e, n) {
  var i = {
   init: function() {
    e(".search-toggle").on("click", function(n) {
     e(".search-box, .search-input").toggleClass("active"), e(".search-input input").focus(), n.preventDefault()
    }), e(".search-input input").on("keyup", function() {
     e(this).val().length > 0 ? e(".search-predict").addClass("active") : e(".search-predict").removeClass("active"), e(".serach-text-bind").html(e(this).val())
    })
   }
  };
  window.header = i
 }(jQuery),
 function(e, n) {
  var i = {
   init: function() {
    e("[data-toggle=card-collapse]").on("click", function(n) {
     e(this).toggleClass("active").parents(".card").find(".card-collapsible").slideToggle()
    }), e("[data-toggle=card-refresh]").on("click", function(i) {
     var t = e(this).parents(".card");
     t.addClass("card-refresh"), n.setTimeout(function() {
      t.removeClass("card-refresh")
     }, 2e3), i.preventDefault(), i.stopPropagation()
    }), e("[data-toggle=card-delete]").on("click", function(n) {
     var i = e(this).parents(".card");
     i.addClass("animated zoomOut"), i.bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
      i.remove()
     }), n.preventDefault(), n.stopPropagation()
    })
   }
  };
  n.cards = i
 }(jQuery, window),
 function(e, n) {
  var i = {
   init: function() {
    e(".checkAll").on("click", function() {
     e(this).closest("table").find("tbody :checkbox").prop("checked", this.checked).closest("tr").toggleClass("selected", this.checked)
    }), e("tbody :checkbox").on("click", function() {
     e(this).closest("tr").toggleClass("selected", this.checked), e(this).closest("table").find(".checkAll").prop("checked", e(this).closest("table").find("tbody :checkbox:checked").length == e(this).closest("table").find("tbody :checkbox").length)
    })
   }
  };
  window.tables = i
 }(jQuery),
 function(e, n) {
  var i = {
   init: function() {
    e(".scrollable").perfectScrollbar(), e('[data-toggle="popover"]').popover(), e('[data-toggle="tooltip"]').tooltip()
   }
  };
  window.misc = i
 }(jQuery), jQuery, sideNav.init(), quickView.init(), aside.init(), header.init(), cards.init(), tables.init(), misc.init(),
 function(e, n) {
  var i = {
   init: function() {
    e(".test-item, .back-to-test").on("click", function(n) {
     e(".test-content").toggleClass("open"), n.preventDefault()
    })
   }
  };
  window.email = i
 }(jQuery), jQuery, email.init();
/**
 * Extent Framework, Version 4, Spark, HtmlReporter
 * AventStack
 * Licender under Apache 2.0
 **/
/* -- [ test ] -- */
$(".test-item").click(function() {
 $(".test-item").removeClass("active");
 var content = $(this).addClass("active").find(".test-contents").clone();
 $(".test-content-detail .detail-body").empty().append(content.removeClass("d-none"));
 var loc = window.location.href;
 if (loc.indexOf("test-name") > 0) {
  var name = loc.match(/test-name.*/)[0].replace("test-name=", "");
  name = name.replace(/%22/g, "").replace(/%20/, " ");
  $(".test-detail .name").filter(function() {
   return $(this).text() == name;
  }).closest(".test-item").click();
 }
});
$(document).ready(function() {
 if ($(".test-item").length) {
	$(".test-item").get(0).click();		
 }
 // SPA only: hide all views except test on document load
 $(".spa .dashboard-view,.spa .tag-view,.spa .exception-view").addClass("d-none");
 // remove links for spa page
 // this prevents invalid navigation to external html files
 $(".spa .side-nav .nav-item>a").attr("href", "#");	
	toggleView('dashboard-view');	
});
$(".test-content").click(function(evt) {
 var target = $(evt.target);
 if (target.is(".card-header")) {
  target.next().toggleClass("collapse")
 }
 if (target.is(".node,.collapsed,.card-title")) {
  target.closest(".card-header").next().toggleClass("collapse");
 }
 if (target.is("textarea") && !target.hasClass("maxxed")) {
  target.addClass("maxxed").height((target.prop("scrollHeight")) + "px");
 }
 /* -- [ category view, status filters ] -- */
 if (target.is(".attributes-view .info > span")) {
  var status = target.attr("status");
  $(".test-content .tag-test-status").addClass("d-none");
  $(".test-content .tag-test-status[status=" + status + "]").removeClass("d-none");
 }
 /* -- [ attributes-view to test-view navigation ] -- */
 if (target.is(".linked>a")) {
  var id = target.parent().attr("root-id");
  $("#nav-test").click();
  $(".test-item[test-id='" + id + "']").click();
 }

 if (target.is("a.linked")) {
  var id = target.attr("id");
  $("#nav-test").click();
  $(".test-item[test-id='" + id + "']").click();
 }

});



$(".table-overflow").click(function(evt) {
 var target = $(evt.target); 
 /* -- [ dashboard-view to attributes-view navigation ] -- */
 if (target.is(".linked>a")) {
  var id = target.parent().attr("root-id");
  $("#nav-tag").click();
  $(".test-item[tag-id='" + id + "']").click();
 }
});

$(".col-md-4.category-container").click(function(evt) {
  var target = $(evt.target); 
  if (target.is(".linked > a")) {
    var id = target.parent().attr("id");
    $("#nav-category").click();
    $(".test-item[tag-id='" + id + "']").click();
  }
});


$(document).on("click", ".fa-fast-forward", function () {
  console.log("Fast forward clicked"); // Confirm it logs

  const failedCards = $(".card").filter(function () {
    return $(this).find(".badge.fail-bg").length > 0;
  });

  if (failedCards.length === 0) return;

  const currentScroll = $(window).scrollTop();
  let nextFailedCard = null;

  for (let i = 0; i < failedCards.length; i++) {
    const card = $(failedCards[i]);
    const top = card.offset().top;
    if (top > currentScroll + 5) {
      nextFailedCard = card;
      break;
    }
  }

  if (!nextFailedCard) {
    nextFailedCard = $(failedCards[0]);
  }

  $("html, body").animate({
    scrollTop: nextFailedCard.offset().top - 100
  }, 500);

  // Highlight (optional)
  nextFailedCard.addClass("highlight");
  setTimeout(() => nextFailedCard.removeClass("highlight"), 1000);
});

$(document).on('click', '.et', function () {
  const accordion = $(this).closest('.test-content-detail').find('.accordion');
  accordion.find('.card .card-body').slideDown();
  accordion.find('.card .collapse').addClass('show');
});

$(document).on('click', '.ct', function () {
  const accordion = $(this).closest('.test-content-detail').find('.accordion');
  accordion.find('.card .card-body').slideUp();
  accordion.find('.card .collapse').removeClass('show');
});



$(".test-content-detail").click(function(evt) {
 var target = $(evt.target);
 /* -- [ dashboard-view to attributes-view navigation ] -- */
 if (target.is(".tag-view .test-content .badge-danger")) {	 
	$(".attributes-view .test-content tbody tr").css("display","");
	var trNodes = $(".attributes-view .test-content tbody tr").length;
	for(var i=1; i<=trNodes; i++){	
		var statusval= $(".attributes-view .test-content tbody tr:nth-child("+ i +") td>div").attr("class");
		if (statusval.includes("pass")) {
			$(".attributes-view .test-content tbody tr:nth-child("+ i +")").css("display","none");
		}
	}  
  }
});

$(".attributes-view .test-list-item").click(function(evt) {
 var target = $(evt.target);
 /* -- [ dashboard-view to attributes-view navigation ] -- */
 if (target.is(".tag-view .test-detail .badge-danger")) {	 
	$(".attributes-view .test-content tbody tr").css("display","");
	var trNodes = $(".attributes-view .test-content tbody tr").length;
	for(var i=1; i<=trNodes; i++){	
		var statusval= $(".attributes-view .test-content tbody tr:nth-child("+ i +") td>div").attr("class");
		if (statusval.includes("pass")) {
			$(".attributes-view .test-content tbody tr:nth-child("+ i +")").css("display","none");
		}
	}  
  }
});

$(".attributes-view .test-list-item").click(function(evt) {
  var target = $(evt.target);

  // If clicked element is the "fail" badge
  if (target.is(".badge-danger")) {

    // Reset all rows to be visible first
    $(".attributes-view .test-content tbody tr").show();

    // Loop through each row and hide the ones with "pass" status
    $(".attributes-view .test-content tbody tr").each(function () {
      if ($(this).attr("status") === "pass") {
        $(this).hide();
      }
    });
  }
});

$(".attributes-view .test-list-item").click(function(evt) {
  var target = $(evt.target);

  // If clicked element is the "fail" badge
  if (target.is(".pass-bg")) {

    // Reset all rows to be visible first
    $(".attributes-view .test-content tbody tr").show();

    // Loop through each row and hide the ones with "pass" status
    $(".attributes-view .test-content tbody tr").each(function () {
      if ($(this).attr("status") === "fail") {
        $(this).hide();
      }
    });
  }
});



$(".test-content-detail").click(function(evt) {
 var target = $(evt.target);
 /* -- [ dashboard-view to attributes-view navigation ] -- */
 if (target.is(".tag-view .test-content .badge-success")) {	 
	$(".attributes-view .test-content tbody tr").css("display","");
	var trNodes = $(".attributes-view .test-content tbody tr").length;
	for(var i=1; i<=trNodes; i++){	
		var statusval= $(".attributes-view .test-content tbody tr:nth-child("+ i +") td>div").attr("class");
		if (statusval.includes("fail")) {
			$(".attributes-view .test-content tbody tr:nth-child("+ i +")").css("display","none");
		}
	}  
  }
});

$(".attributes-view .test-list-item").click(function(evt) {
 var target = $(evt.target);
 /* -- [ dashboard-view to attributes-view navigation ] -- */
 if (target.is(".tag-view .test-detail .badge-success")) {	 
	$(".attributes-view .test-content tbody tr").css("display","");
	var trNodes = $(".attributes-view .test-content tbody tr").length;
	for(var i=1; i<=trNodes; i++){	
		var statusval= $(".attributes-view .test-content tbody tr:nth-child("+ i +") td>div").attr("class");
		if (statusval.includes("fail")) {
			$(".attributes-view .test-content tbody tr:nth-child("+ i +")").css("display","none");
		}
	}  
  }
});

/* ------------------------------------ */
/* filters */
/* ------------------------------------ */
/* -- [ status filters ] -- */
function toggleByStatus(status) {
 $(".test-item").removeClass("d-none");
 if (status != "clear") {
  $(".test-item[status!='" + status + "']").addClass("d-none");
 }
 $(".tag-view .test-item").removeClass("d-none");
 selectFirst();
}

function selectFirst() {
 $(".test-item:not(.d-none)").first().click();
}
$("#status-toggle>a").click(function() {
 var status = $(this).attr("status");
 toggleByStatus(status);
});
/* -- [ attribute filters ] -- */
function attrToggle(attr, value) {
 $(".test-item").addClass("d-none");
 $(".test-item[" + attr + "*='" + value + "']").removeClass("d-none");
 selectFirst();
}
$("#author-toggle>a").click(function() {
 attrToggle("author", $(this).text());
});
$("#device-toggle>a").click(function() {
 attrToggle("device", $(this).text());
});
$("#tag-toggle>a").click(function() {
 attrToggle("tag", $(this).text());
});
/* ------------------------------------ */
/* SPA side-nav */
/* ------------------------------------ */
var currentView = 'tests-view';


function toggleView(v) {
 if ($(".spa").length && v !== currentView) {
  $(".main-content>*").addClass("d-none");
  $("." + v).removeClass("d-none");
  $("." + v + " .test-item:not(.d-none)").first().click();
 }
 currentView = v;
}
/* ------------------------------------ */
/* search */
/* ------------------------------------ */
/* -- [ filter tests by text in test and categories view ] -- */
$(document).ready(function() {
 $('.test-list-item .test-item').dynamicTestSearch('#search-tests');
});

$.fn.dynamicTestSearch = function(id) {
 var target = $(this);
 var searchBox = $(id);
 searchBox.off('keyup').on('keyup', function() {
  var val = searchBox.val().toLowerCase();
  if (val == '') {
   target.removeClass('d-none');
  } else {
   target.addClass('d-none').each(function() {
    var t = $(this);
    if (t.html().toLowerCase().indexOf(val) >= 0) {
     t.removeClass('d-none');
    }
   });
  }
 });
 return target;
}
/* ------------------------------------ */
/* keyboard events */
/* ------------------------------------ */
$(window).keydown(function(e) {
 var target = null,
  sibling = null;
 if ($('input').is(':focus') || $('.featherlight').length > 0) {} else {
  function goToView(view) {
   var href = $("#" + view).attr("href");
   window.location.href = href;
  }
  if (!e.ctrlKey && !e.altKey && !e.shiftKey && e.which !== 91 && e.which !== 93 && e.which !== 224) {
   (e.which === 67) && goToView('nav-tag');
   (e.which === 68) && goToView('nav-dashboard');
   (e.which === 88) && goToView('nav-ex');
   (e.which === 84) && goToView('nav-test');
   (e.which === 76) && $("body").toggleClass("dark");
   (e.which === 27) && toggleByStatus('clear');
   (e.which === 69) && toggleByStatus('error');
   (e.which === 70) && toggleByStatus('fail');
   (e.which === 80) && toggleByStatus('pass');
   (e.which === 83) && toggleByStatus('skip');
   (e.which === 87) && toggleByStatus('warning');
  }
 }
});
$(".lightsout").click(function() {
 $("body").toggleClass("dark");
});
/* -- [ chart options ] -- */
var options = {
 responsive: true,
 maintainAspectRatio: false,
 legend: {
  position: "right",
  labels: {
   boxWidth: 10,
   fontSize: 11,
   lineHeight: 1,
   fontFamily: ["Source Sans Pro", "Segoe UI", "Arial"],
   padding: 1
  }
 },
 cutoutPercentage: 65
};

function drawChart(ctx, config) {
 ctx.width = 100;
 ctx.height = 80;
 new Chart(ctx, config);
}
/* -- [ parent chart ] -- */
(function drawParentChart() {
 if (typeof statusGroup !== "undefined") {
  var config = {
   type: 'doughnut',
   data: {
    datasets: [{
     borderColor: 'transparent',
     data: [
      statusGroup.passParent, statusGroup.failParent, statusGroup.fatalParent, statusGroup.errorParent, statusGroup.warningParent, statusGroup.skipParent
     ],
     backgroundColor: [
      "#00af00", "#F7464A", "#8b0000", "#ff6347", "#FDB45C", "#1e90ff"
     ]
    }],
    labels: ["Pass", "Fail", "Fatal", "Error", "Warning", "Skip"]
   },
   options: options
  };
  var ctx = document.getElementById("parent-analysis").getContext('2d');
  drawChart(ctx, config);
 }
})();
/* -- [ children chart ] -- */
(function drawChildChart() {
 if (typeof statusGroup !== "undefined" && statusGroup.childCount > 0) {
  var config = {
   type: 'doughnut',
   data: {
    datasets: [{
     borderColor: 'transparent',
     data: [
      statusGroup.passChild, statusGroup.failChild, statusGroup.fatalChild, statusGroup.errorChild, statusGroup.warningChild, statusGroup.skipChild, statusGroup.infoChild
     ],
     backgroundColor: [
      "#00af00", "#F7464A", "#8b0000", "#ff6347", "#FDB45C", "#1e90ff", "#46BFBD"
     ]
    }],
    labels: ["Pass", "Fail", "Fatal", "Error", "Warning", "Skip", "Info"]
   },
   options: options
  };
  var ctx = document.getElementById("child-analysis").getContext('2d');
  drawChart(ctx, config);
 }
})();
/* -- [ grand-children chart ] -- */
(function drawGrandChildChart() {
 if ($('#grandchild-analysis').length > 0 && typeof statusGroup !== "undefined" && statusGroup.grandChildCount > 0) {
  var config = {
   type: 'doughnut',
   data: {
    datasets: [{
     borderColor: 'transparent',
     data: [
      statusGroup.passGrandChild, statusGroup.failGrandChild, statusGroup.fatalGrandChild, statusGroup.errorGrandChild, statusGroup.warningGrandChild, statusGroup.skipGrandChild, statusGroup.infoGrandChild
     ],
     backgroundColor: [
      "#00af00", "#F7464A", "#8b0000", "#ff6347", "#FDB45C", "#1e90ff", "#46BFBD"
     ]
    }],
    labels: ["Pass", "Fail", "Fatal", "Error", "Warning", "Skip", "Info"]
   },
   options: options
  };
  var ctx = document.getElementById("grandchild-analysis").getContext('2d');
  drawChart(ctx, config);
 }
})();
/* -- [ events chart ] -- */
(function drawEventsChart() {
 if ($('#events-analysis').length > 0 && typeof statusGroup !== "undefined" && statusGroup.eventsCount > 0) {
  var config = {
   type: 'doughnut',
   data: {
    datasets: [{
     borderColor: 'transparent',
     data: [
      statusGroup.passEvents, statusGroup.failEvents, statusGroup.fatalEvents, statusGroup.errorEvents, statusGroup.warningEvents, statusGroup.skipEvents, statusGroup.infoEvents
     ],
     backgroundColor: [
      "#00af00", "#F7464A", "#8b0000", "#ff6347", "#FDB45C", "#1e90ff", "#46BFBD"
     ]
    }],
    labels: ["Pass", "Fail", "Fatal", "Error", "Warning", "Skip", "Info"]
   },
   options: options
  };
  var ctx = document.getElementById("events-analysis").getContext('2d');
  drawChart(ctx, config);
 }
})();
/* -- [ timeline ] -- */
function getRandomColor() {
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
(function drawTimelineChart() {
 if (typeof timeline !== "undefined") {
  var datasets = [];
  for (var key in timeline) {
   datasets.push({
    label: key,
    data: [timeline[key]],
    backgroundColor: getRandomColor(),
    borderWidth: 1
   });
  }
  var ctx = document.getElementById('timeline').getContext('2d');
  new Chart(ctx, {
   type: 'horizontalBar',
   data: {
    datasets: datasets
   },
   options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
     mode: 'point'
    },
    scales: {
     xAxes: [{
      stacked: true,
      gridLines: false
     }],
     yAxes: [{
      stacked: true,
      gridLines: false,
      barThickness: 25
     }]
    },
    legend: {
     display: false
    }
   }
  });
 }
})();