let us = [], Ta = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < s.length; e++)
    (e % 2 ? Ta : us).push(t = t + s[e]);
})();
function aO(s) {
  if (s < 768) return !1;
  for (let e = 0, t = us.length; ; ) {
    let i = e + t >> 1;
    if (s < us[i]) t = i;
    else if (s >= Ta[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function Ln(s) {
  return s >= 127462 && s <= 127487;
}
const En = 8205;
function oO(s, e, t = !0, i = !0) {
  return (t ? Za : hO)(s, e, i);
}
function Za(s, e, t) {
  if (e == s.length) return e;
  e && Xa(s.charCodeAt(e)) && Ca(s.charCodeAt(e - 1)) && e--;
  let i = _r(s, e);
  for (e += qn(i); e < s.length; ) {
    let r = _r(s, e);
    if (i == En || r == En || t && aO(r))
      e += qn(r), i = r;
    else if (Ln(r)) {
      let n = 0, l = e - 2;
      for (; l >= 0 && Ln(_r(s, l)); )
        n++, l -= 2;
      if (n % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function hO(s, e, t) {
  for (; e > 0; ) {
    let i = Za(s, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function _r(s, e) {
  let t = s.charCodeAt(e);
  if (!Ca(t) || e + 1 == s.length) return t;
  let i = s.charCodeAt(e + 1);
  return Xa(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Xa(s) {
  return s >= 56320 && s < 57344;
}
function Ca(s) {
  return s >= 55296 && s < 56320;
}
function qn(s) {
  return s < 65536 ? 1 : 2;
}
class Y {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = Tt(this, e, t);
    let r = [];
    return this.decompose(
      0,
      e,
      r,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      r,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      r,
      1
      /* Open.From */
    ), Me.from(r, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = Tt(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Me.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), r = new ii(this), n = new ii(e);
    for (let l = t, a = t; ; ) {
      if (r.next(l), n.next(l), l = 0, r.lineBreak != n.lineBreak || r.done != n.done || r.value != n.value)
        return !1;
      if (a += r.value.length, r.done || a >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new ii(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Aa(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      i = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new Ra(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? Y.empty : e.length <= 32 ? new F(e) : Me.from(F.split(e, []));
  }
}
class F extends Y {
  constructor(e, t = OO(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, r) {
    for (let n = 0; ; n++) {
      let l = this.text[n], a = r + l.length;
      if ((t ? i : a) >= e)
        return new cO(r, a, i, l);
      r = a + 1, i++;
    }
  }
  decompose(e, t, i, r) {
    let n = e <= 0 && t >= this.length ? this : new F(Vn(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let l = i.pop(), a = Fi(n.text, l.text.slice(), 0, n.length);
      if (a.length <= 32)
        i.push(new F(a, l.length + n.length));
      else {
        let o = a.length >> 1;
        i.push(new F(a.slice(0, o)), new F(a.slice(o)));
      }
    } else
      i.push(n);
  }
  replace(e, t, i) {
    if (!(i instanceof F))
      return super.replace(e, t, i);
    [e, t] = Tt(this, e, t);
    let r = Fi(this.text, Fi(i.text, Vn(this.text, 0, e)), t), n = this.length + i.length - (t - e);
    return r.length <= 32 ? new F(r, n) : Me.from(F.split(r, []), n);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Tt(this, e, t);
    let r = "";
    for (let n = 0, l = 0; n <= t && l < this.text.length; l++) {
      let a = this.text[l], o = n + a.length;
      n > e && l && (r += i), e < o && t > n && (r += a.slice(Math.max(0, e - n), t - n)), n = o + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], r = -1;
    for (let n of e)
      i.push(n), r += n.length + 1, i.length == 32 && (t.push(new F(i, r)), i = [], r = -1);
    return r > -1 && t.push(new F(i, r)), t;
  }
}
class Me extends Y {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, r) {
    for (let n = 0; ; n++) {
      let l = this.children[n], a = r + l.length, o = i + l.lines - 1;
      if ((t ? o : a) >= e)
        return l.lineInner(e, t, i, r);
      r = a + 1, i = o + 1;
    }
  }
  decompose(e, t, i, r) {
    for (let n = 0, l = 0; l <= t && n < this.children.length; n++) {
      let a = this.children[n], o = l + a.length;
      if (e <= o && t >= l) {
        let h = r & ((l <= e ? 1 : 0) | (o >= t ? 2 : 0));
        l >= e && o <= t && !h ? i.push(a) : a.decompose(e - l, t - l, i, h);
      }
      l = o + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Tt(this, e, t), i.lines < this.lines)
      for (let r = 0, n = 0; r < this.children.length; r++) {
        let l = this.children[r], a = n + l.length;
        if (e >= n && t <= a) {
          let o = l.replace(e - n, t - n, i), h = this.lines - l.lines + o.lines;
          if (o.lines < h >> 4 && o.lines > h >> 6) {
            let O = this.children.slice();
            return O[r] = o, new Me(O, this.length - (t - e) + i.length);
          }
          return super.replace(n, a, o);
        }
        n = a + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Tt(this, e, t);
    let r = "";
    for (let n = 0, l = 0; n < this.children.length && l <= t; n++) {
      let a = this.children[n], o = l + a.length;
      l > e && n && (r += i), e < o && t > l && (r += a.sliceString(e - l, t - l, i)), l = o + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Me))
      return 0;
    let i = 0, [r, n, l, a] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, n += t) {
      if (r == l || n == a)
        return i;
      let o = this.children[r], h = e.children[n];
      if (o != h)
        return i + o.scanIdentical(h, t);
      i += o.length + 1;
    }
  }
  static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
    let i = 0;
    for (let u of e)
      i += u.lines;
    if (i < 32) {
      let u = [];
      for (let d of e)
        d.flatten(u);
      return new F(u, t);
    }
    let r = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), n = r << 1, l = r >> 1, a = [], o = 0, h = -1, O = [];
    function c(u) {
      let d;
      if (u.lines > n && u instanceof Me)
        for (let p of u.children)
          c(p);
      else u.lines > l && (o > l || !o) ? (f(), a.push(u)) : u instanceof F && o && (d = O[O.length - 1]) instanceof F && u.lines + d.lines <= 32 ? (o += u.lines, h += u.length + 1, O[O.length - 1] = new F(d.text.concat(u.text), d.length + 1 + u.length)) : (o + u.lines > r && f(), o += u.lines, h += u.length + 1, O.push(u));
    }
    function f() {
      o != 0 && (a.push(O.length == 1 ? O[0] : Me.from(O, h)), h = -1, o = O.length = 0);
    }
    for (let u of e)
      c(u);
    return f(), a.length == 1 ? a[0] : new Me(a, t);
  }
}
Y.empty = /* @__PURE__ */ new F([""], 0);
function OO(s) {
  let e = -1;
  for (let t of s)
    e += t.length + 1;
  return e;
}
function Fi(s, e, t = 0, i = 1e9) {
  for (let r = 0, n = 0, l = !0; n < s.length && r <= i; n++) {
    let a = s[n], o = r + a.length;
    o >= t && (o > i && (a = a.slice(0, i - r)), r < t && (a = a.slice(t - r)), l ? (e[e.length - 1] += a, l = !1) : e.push(a)), r = o + 1;
  }
  return e;
}
function Vn(s, e, t) {
  return Fi(s, [""], e, t);
}
class ii {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof F ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, r = this.nodes[i], n = this.offsets[i], l = n >> 1, a = r instanceof F ? r.text.length : r.children.length;
      if (l == (t > 0 ? a : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((n & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof F) {
        let o = r.text[l + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, o.length > Math.max(0, e))
          return this.value = e == 0 ? o : t > 0 ? o.slice(e) : o.slice(0, o.length - e), this;
        e -= o.length;
      } else {
        let o = r.children[l + (t < 0 ? -1 : 0)];
        e > o.length ? (e -= o.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(o), this.offsets.push(t > 0 ? 1 : (o instanceof F ? o.text.length : o.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Aa {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new ii(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Ra {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: r } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (Y.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ii.prototype[Symbol.iterator] = Aa.prototype[Symbol.iterator] = Ra.prototype[Symbol.iterator] = function() {
  return this;
});
let cO = class {
  /**
  @internal
  */
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.number = i, this.text = r;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
};
function Tt(s, e, t) {
  return e = Math.max(0, Math.min(s.length, e)), [e, Math.max(e, Math.min(s.length, t))];
}
function be(s, e, t = !0, i = !0) {
  return oO(s, e, t, i);
}
function fO(s) {
  return s >= 56320 && s < 57344;
}
function uO(s) {
  return s >= 55296 && s < 56320;
}
function dO(s, e) {
  let t = s.charCodeAt(e);
  if (!uO(t) || e + 1 == s.length)
    return t;
  let i = s.charCodeAt(e + 1);
  return fO(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function pO(s) {
  return s < 65536 ? 1 : 2;
}
const ds = /\r\n?|\n/;
var he = /* @__PURE__ */ function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
}(he || (he = {}));
class De {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
      let n = this.sections[t++], l = this.sections[t++];
      l < 0 ? (e(i, r, n), r += n) : r += l, i += n;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    ps(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(i, r) : e.push(r, i);
    }
    return new De(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : za(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : gs(this, e, t);
  }
  mapPos(e, t = -1, i = he.Simple) {
    let r = 0, n = 0;
    for (let l = 0; l < this.sections.length; ) {
      let a = this.sections[l++], o = this.sections[l++], h = r + a;
      if (o < 0) {
        if (h > e)
          return n + (e - r);
        n += a;
      } else {
        if (i != he.Simple && h >= e && (i == he.TrackDel && r < e && h > e || i == he.TrackBefore && r < e || i == he.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !a)
          return e == r || t < 0 ? n : n + o;
        n += o;
      }
      r = h;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return n;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
      let n = this.sections[i++], l = this.sections[i++], a = r + n;
      if (l >= 0 && r <= t && a >= e)
        return r < e && a > t ? "cover" : !0;
      r = a;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + i + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new De(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new De(e);
  }
}
class ee extends De {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return ps(this, (t, i, r, n, l) => e = e.replace(r, r + (i - t), l), !1), e;
  }
  mapDesc(e, t = !1) {
    return gs(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let r = 0, n = 0; r < t.length; r += 2) {
      let l = t[r], a = t[r + 1];
      if (a >= 0) {
        t[r] = a, t[r + 1] = l;
        let o = r >> 1;
        for (; i.length < o; )
          i.push(Y.empty);
        i.push(l ? e.slice(n, n + l) : Y.empty);
      }
      n += l;
    }
    return new ee(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : za(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : gs(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    ps(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return De.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], r = [], n = new oi(this);
    e: for (let l = 0, a = 0; ; ) {
      let o = l == e.length ? 1e9 : e[l++];
      for (; a < o || a == o && n.len == 0; ) {
        if (n.done)
          break e;
        let O = Math.min(n.len, o - a);
        ne(r, O, -1);
        let c = n.ins == -1 ? -1 : n.off == 0 ? n.ins : 0;
        ne(t, O, c), c > 0 && et(i, t, n.text), n.forward(O), a += O;
      }
      let h = e[l++];
      for (; a < h; ) {
        if (n.done)
          break e;
        let O = Math.min(n.len, h - a);
        ne(t, O, -1), ne(r, O, n.ins == -1 ? -1 : n.off == 0 ? n.ins : 0), n.forward(O), a += O;
      }
    }
    return {
      changes: new ee(t, i),
      filtered: De.create(r)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let r = [], n = [], l = 0, a = null;
    function o(O = !1) {
      if (!O && !r.length)
        return;
      l < t && ne(r, t - l, -1);
      let c = new ee(r, n);
      a = a ? a.compose(c.map(a)) : c, r = [], n = [], l = 0;
    }
    function h(O) {
      if (Array.isArray(O))
        for (let c of O)
          h(c);
      else if (O instanceof ee) {
        if (O.length != t)
          throw new RangeError(`Mismatched change set length (got ${O.length}, expected ${t})`);
        o(), a = a ? a.compose(O.map(a)) : O;
      } else {
        let { from: c, to: f = c, insert: u } = O;
        if (c > f || c < 0 || f > t)
          throw new RangeError(`Invalid change range ${c} to ${f} (in doc of length ${t})`);
        let d = u ? typeof u == "string" ? Y.of(u.split(i || ds)) : u : Y.empty, p = d.length;
        if (c == f && p == 0)
          return;
        c < l && o(), c > l && ne(r, c - l, -1), ne(r, f - c, p), et(n, r, d), l = f;
      }
    }
    return h(e), o(!a), a;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new ee(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      if (typeof n == "number")
        t.push(n, -1);
      else {
        if (!Array.isArray(n) || typeof n[0] != "number" || n.some((l, a) => a && typeof l != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (n.length == 1)
          t.push(n[0], 0);
        else {
          for (; i.length < r; )
            i.push(Y.empty);
          i[r] = Y.of(n.slice(1)), t.push(n[0], i[r].length);
        }
      }
    }
    return new ee(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new ee(e, t);
  }
}
function ne(s, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let r = s.length - 2;
  r >= 0 && t <= 0 && t == s[r + 1] ? s[r] += e : r >= 0 && e == 0 && s[r] == 0 ? s[r + 1] += t : i ? (s[r] += e, s[r + 1] += t) : s.push(e, t);
}
function et(s, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(t);
  else {
    for (; s.length < i; )
      s.push(Y.empty);
    s.push(t);
  }
}
function ps(s, e, t) {
  let i = s.inserted;
  for (let r = 0, n = 0, l = 0; l < s.sections.length; ) {
    let a = s.sections[l++], o = s.sections[l++];
    if (o < 0)
      r += a, n += a;
    else {
      let h = r, O = n, c = Y.empty;
      for (; h += a, O += o, o && i && (c = c.append(i[l - 2 >> 1])), !(t || l == s.sections.length || s.sections[l + 1] < 0); )
        a = s.sections[l++], o = s.sections[l++];
      e(r, h, n, O, c), r = h, n = O;
    }
  }
}
function gs(s, e, t, i = !1) {
  let r = [], n = i ? [] : null, l = new oi(s), a = new oi(e);
  for (let o = -1; ; ) {
    if (l.done && a.len || a.done && l.len)
      throw new Error("Mismatched change set lengths");
    if (l.ins == -1 && a.ins == -1) {
      let h = Math.min(l.len, a.len);
      ne(r, h, -1), l.forward(h), a.forward(h);
    } else if (a.ins >= 0 && (l.ins < 0 || o == l.i || l.off == 0 && (a.len < l.len || a.len == l.len && !t))) {
      let h = a.len;
      for (ne(r, a.ins, -1); h; ) {
        let O = Math.min(l.len, h);
        l.ins >= 0 && o < l.i && l.len <= O && (ne(r, 0, l.ins), n && et(n, r, l.text), o = l.i), l.forward(O), h -= O;
      }
      a.next();
    } else if (l.ins >= 0) {
      let h = 0, O = l.len;
      for (; O; )
        if (a.ins == -1) {
          let c = Math.min(O, a.len);
          h += c, O -= c, a.forward(c);
        } else if (a.ins == 0 && a.len < O)
          O -= a.len, a.next();
        else
          break;
      ne(r, h, o < l.i ? l.ins : 0), n && o < l.i && et(n, r, l.text), o = l.i, l.forward(l.len - O);
    } else {
      if (l.done && a.done)
        return n ? ee.createSet(r, n) : De.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function za(s, e, t = !1) {
  let i = [], r = t ? [] : null, n = new oi(s), l = new oi(e);
  for (let a = !1; ; ) {
    if (n.done && l.done)
      return r ? ee.createSet(i, r) : De.create(i);
    if (n.ins == 0)
      ne(i, n.len, 0, a), n.next();
    else if (l.len == 0 && !l.done)
      ne(i, 0, l.ins, a), r && et(r, i, l.text), l.next();
    else {
      if (n.done || l.done)
        throw new Error("Mismatched change set lengths");
      {
        let o = Math.min(n.len2, l.len), h = i.length;
        if (n.ins == -1) {
          let O = l.ins == -1 ? -1 : l.off ? 0 : l.ins;
          ne(i, o, O, a), r && O && et(r, i, l.text);
        } else l.ins == -1 ? (ne(i, n.off ? 0 : n.len, o, a), r && et(r, i, n.textBit(o))) : (ne(i, n.off ? 0 : n.len, l.off ? 0 : l.ins, a), r && !l.off && et(r, i, l.text));
        a = (n.ins > o || l.ins >= 0 && l.len > o) && (a || i.length > h), n.forward2(o), l.forward(o);
      }
    }
  }
}
class oi {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? Y.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? Y.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class ut {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, r;
    return this.empty ? i = r = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), i == this.from && r == this.to ? this : new ut(i, r, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return x.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return x.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return x.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ut(e, t, i);
  }
}
class x {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : x.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new x([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return x.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, x.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new x(e.ranges.map((t) => ut.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new x([x.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, r = 0; r < e.length; r++) {
      let n = e[r];
      if (n.empty ? n.from <= i : n.from < i)
        return x.normalized(e.slice(), t);
      i = n.to;
    }
    return new x(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, r) {
    return ut.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (r ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, r) {
    let n = (i ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return t < e ? ut.create(t, e, 48 | n) : ut.create(e, t, (t > e ? 8 : 0) | n);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((r, n) => r.from - n.from), t = e.indexOf(i);
    for (let r = 1; r < e.length; r++) {
      let n = e[r], l = e[r - 1];
      if (n.empty ? n.from <= l.to : n.from < l.to) {
        let a = l.from, o = Math.max(n.to, l.to);
        r <= t && t--, e.splice(--r, 2, n.anchor > n.head ? x.range(o, a) : x.range(a, o));
      }
    }
    return new x(e, t);
  }
}
function Ma(s, e) {
  for (let t of s.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let tn = 0;
class Z {
  constructor(e, t, i, r, n) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = r, this.id = tn++, this.default = e([]), this.extensions = typeof n == "function" ? n(this) : n;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new Z(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : rn), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new Hi([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Hi(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new Hi(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function rn(s, e) {
  return s == e || s.length == e.length && s.every((t, i) => t === e[i]);
}
class Hi {
  constructor(e, t, i, r) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = r, this.id = tn++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, r = this.facet.compareInput, n = this.id, l = e[n] >> 1, a = this.type == 2, o = !1, h = !1, O = [];
    for (let c of this.dependencies)
      c == "doc" ? o = !0 : c == "selection" ? h = !0 : ((t = e[c.id]) !== null && t !== void 0 ? t : 1) & 1 || O.push(e[c.id]);
    return {
      create(c) {
        return c.values[l] = i(c), 1;
      },
      update(c, f) {
        if (o && f.docChanged || h && (f.docChanged || f.selection) || ms(c, O)) {
          let u = i(c);
          if (a ? !Wn(u, c.values[l], r) : !r(u, c.values[l]))
            return c.values[l] = u, 1;
        }
        return 0;
      },
      reconfigure: (c, f) => {
        let u, d = f.config.address[n];
        if (d != null) {
          let p = ar(f, d);
          if (this.dependencies.every((m) => m instanceof Z ? f.facet(m) === c.facet(m) : m instanceof lt ? f.field(m, !1) == c.field(m, !1) : !0) || (a ? Wn(u = i(c), p, r) : r(u = i(c), p)))
            return c.values[l] = p, 0;
        } else
          u = i(c);
        return c.values[l] = u, 1;
      }
    };
  }
}
function Wn(s, e, t) {
  if (s.length != e.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!t(s[i], e[i]))
      return !1;
  return !0;
}
function ms(s, e) {
  let t = !1;
  for (let i of e)
    ri(s, i) & 1 && (t = !0);
  return t;
}
function gO(s, e, t) {
  let i = t.map((o) => s[o.id]), r = t.map((o) => o.type), n = i.filter((o) => !(o & 1)), l = s[e.id] >> 1;
  function a(o) {
    let h = [];
    for (let O = 0; O < i.length; O++) {
      let c = ar(o, i[O]);
      if (r[O] == 2)
        for (let f of c)
          h.push(f);
      else
        h.push(c);
    }
    return e.combine(h);
  }
  return {
    create(o) {
      for (let h of i)
        ri(o, h);
      return o.values[l] = a(o), 1;
    },
    update(o, h) {
      if (!ms(o, n))
        return 0;
      let O = a(o);
      return e.compare(O, o.values[l]) ? 0 : (o.values[l] = O, 1);
    },
    reconfigure(o, h) {
      let O = ms(o, i), c = h.config.facets[e.id], f = h.facet(e);
      if (c && !O && rn(t, c))
        return o.values[l] = f, 0;
      let u = a(o);
      return e.compare(u, f) ? (o.values[l] = f, 0) : (o.values[l] = u, 1);
    }
  };
}
const Ri = /* @__PURE__ */ Z.define({ static: !0 });
class lt {
  constructor(e, t, i, r, n) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = r, this.spec = n, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new lt(tn++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Ri).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => (i.values[t] = this.create(i), 1),
      update: (i, r) => {
        let n = i.values[t], l = this.updateF(n, r);
        return this.compareF(n, l) ? 0 : (i.values[t] = l, 1);
      },
      reconfigure: (i, r) => {
        let n = i.facet(Ri), l = r.facet(Ri), a;
        return (a = n.find((o) => o.field == this)) && a != l.find((o) => o.field == this) ? (i.values[t] = a.create(i), 1) : r.config.address[this.id] != null ? (i.values[t] = r.field(this), 0) : (i.values[t] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, Ri.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const ct = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Bt(s) {
  return (e) => new Ya(e, s);
}
const Zr = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Bt(ct.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Bt(ct.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Bt(ct.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Bt(ct.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Bt(ct.lowest)
};
class Ya {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Xr {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Qs(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Xr.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Qs {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class lr {
  constructor(e, t, i, r, n, l) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = r, this.staticValues = n, this.facets = l, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let r = [], n = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ new Map();
    for (let f of mO(e, t, l))
      f instanceof lt ? r.push(f) : (n[f.facet.id] || (n[f.facet.id] = [])).push(f);
    let a = /* @__PURE__ */ Object.create(null), o = [], h = [];
    for (let f of r)
      a[f.id] = h.length << 1, h.push((u) => f.slot(u));
    let O = i == null ? void 0 : i.config.facets;
    for (let f in n) {
      let u = n[f], d = u[0].facet, p = O && O[f] || [];
      if (u.every(
        (m) => m.type == 0
        /* Provider.Static */
      ))
        if (a[d.id] = o.length << 1 | 1, rn(p, u))
          o.push(i.facet(d));
        else {
          let m = d.combine(u.map((Q) => Q.value));
          o.push(i && d.compare(m, i.facet(d)) ? i.facet(d) : m);
        }
      else {
        for (let m of u)
          m.type == 0 ? (a[m.id] = o.length << 1 | 1, o.push(m.value)) : (a[m.id] = h.length << 1, h.push((Q) => m.dynamicSlot(Q)));
        a[d.id] = h.length << 1, h.push((m) => gO(m, d, u));
      }
    }
    let c = h.map((f) => f(a));
    return new lr(e, l, c, a, o, n);
  }
}
function mO(s, e, t) {
  let i = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function n(l, a) {
    let o = r.get(l);
    if (o != null) {
      if (o <= a)
        return;
      let h = i[o].indexOf(l);
      h > -1 && i[o].splice(h, 1), l instanceof Qs && t.delete(l.compartment);
    }
    if (r.set(l, a), Array.isArray(l))
      for (let h of l)
        n(h, a);
    else if (l instanceof Qs) {
      if (t.has(l.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(l.compartment) || l.inner;
      t.set(l.compartment, h), n(h, a);
    } else if (l instanceof Ya)
      n(l.inner, l.prec);
    else if (l instanceof lt)
      i[a].push(l), l.provides && n(l.provides, a);
    else if (l instanceof Hi)
      i[a].push(l), l.facet.extensions && n(l.facet.extensions, ct.default);
    else {
      let h = l.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${l}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      n(h, a);
    }
  }
  return n(s, ct.default), i.reduce((l, a) => l.concat(a));
}
function ri(s, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = s.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[t] = 4;
  let r = s.computeSlot(s, s.config.dynamicSlots[t]);
  return s.status[t] = 2 | r;
}
function ar(s, e) {
  return e & 1 ? s.config.staticValues[e >> 1] : s.values[e >> 1];
}
const _a = /* @__PURE__ */ Z.define(), Ss = /* @__PURE__ */ Z.define({
  combine: (s) => s.some((e) => e),
  static: !0
}), La = /* @__PURE__ */ Z.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), Ea = /* @__PURE__ */ Z.define(), qa = /* @__PURE__ */ Z.define(), Va = /* @__PURE__ */ Z.define(), Wa = /* @__PURE__ */ Z.define({
  combine: (s) => s.length ? s[0] : !1
});
class Qt {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new QO();
  }
}
class QO {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Qt(this, e);
  }
}
class SO {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new U(this, e);
  }
}
class U {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new U(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new SO(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let r of e) {
      let n = r.map(t);
      n && i.push(n);
    }
    return i;
  }
}
U.reconfigure = /* @__PURE__ */ U.define();
U.appendConfig = /* @__PURE__ */ U.define();
class se {
  constructor(e, t, i, r, n, l) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = r, this.annotations = n, this.scrollIntoView = l, this._doc = null, this._state = null, i && Ma(i, t.newLength), n.some((a) => a.type == se.time) || (this.annotations = n.concat(se.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, r, n, l) {
    return new se(e, t, i, r, n, l);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(se.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
se.time = /* @__PURE__ */ Qt.define();
se.userEvent = /* @__PURE__ */ Qt.define();
se.addToHistory = /* @__PURE__ */ Qt.define();
se.remote = /* @__PURE__ */ Qt.define();
function bO(s, e) {
  let t = [];
  for (let i = 0, r = 0; ; ) {
    let n, l;
    if (i < s.length && (r == e.length || e[r] >= s[i]))
      n = s[i++], l = s[i++];
    else if (r < e.length)
      n = e[r++], l = e[r++];
    else
      return t;
    !t.length || t[t.length - 1] < n ? t.push(n, l) : t[t.length - 1] < l && (t[t.length - 1] = l);
  }
}
function ja(s, e, t) {
  var i;
  let r, n, l;
  return t ? (r = e.changes, n = ee.empty(e.changes.length), l = s.changes.compose(e.changes)) : (r = e.changes.map(s.changes), n = s.changes.mapDesc(e.changes, !0), l = s.changes.compose(r)), {
    changes: l,
    selection: e.selection ? e.selection.map(n) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(r),
    effects: U.mapEffects(s.effects, r).concat(U.mapEffects(e.effects, n)),
    annotations: s.annotations.length ? s.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: s.scrollIntoView || e.scrollIntoView
  };
}
function bs(s, e, t) {
  let i = e.selection, r = xt(e.annotations);
  return e.userEvent && (r = r.concat(se.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof ee ? e.changes : ee.of(e.changes || [], t, s.facet(La)),
    selection: i && (i instanceof x ? i : x.single(i.anchor, i.head)),
    effects: xt(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function Ia(s, e, t) {
  let i = bs(s, e.length ? e[0] : {}, s.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let n = 1; n < e.length; n++) {
    e[n].filter === !1 && (t = !1);
    let l = !!e[n].sequential;
    i = ja(i, bs(s, e[n], l ? i.changes.newLength : s.doc.length), l);
  }
  let r = se.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return xO(t ? kO(r) : r);
}
function kO(s) {
  let e = s.startState, t = !0;
  for (let r of e.facet(Ea)) {
    let n = r(s);
    if (n === !1) {
      t = !1;
      break;
    }
    Array.isArray(n) && (t = t === !0 ? n : bO(t, n));
  }
  if (t !== !0) {
    let r, n;
    if (t === !1)
      n = s.changes.invertedDesc, r = ee.empty(e.doc.length);
    else {
      let l = s.changes.filter(t);
      r = l.changes, n = l.filtered.mapDesc(l.changes).invertedDesc;
    }
    s = se.create(e, r, s.selection && s.selection.map(n), U.mapEffects(s.effects, n), s.annotations, s.scrollIntoView);
  }
  let i = e.facet(qa);
  for (let r = i.length - 1; r >= 0; r--) {
    let n = i[r](s);
    n instanceof se ? s = n : Array.isArray(n) && n.length == 1 && n[0] instanceof se ? s = n[0] : s = Ia(e, xt(n), !1);
  }
  return s;
}
function xO(s) {
  let e = s.startState, t = e.facet(Va), i = s;
  for (let r = t.length - 1; r >= 0; r--) {
    let n = t[r](s);
    n && Object.keys(n).length && (i = ja(i, bs(e, n, s.changes.newLength), !0));
  }
  return i == s ? s : se.create(e, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const wO = [];
function xt(s) {
  return s == null ? wO : Array.isArray(s) ? s : [s];
}
var Ie = /* @__PURE__ */ function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
}(Ie || (Ie = {}));
const yO = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let ks;
try {
  ks = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function $O(s) {
  if (ks)
    return ks.test(s);
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || yO.test(t)))
      return !0;
  }
  return !1;
}
function PO(s) {
  return (e) => {
    if (!/\S/.test(e))
      return Ie.Space;
    if ($O(e))
      return Ie.Word;
    for (let t = 0; t < s.length; t++)
      if (e.indexOf(s[t]) > -1)
        return Ie.Word;
    return Ie.Other;
  };
}
class L {
  constructor(e, t, i, r, n, l) {
    this.config = e, this.doc = t, this.selection = i, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = n, l && (l._state = this);
    for (let a = 0; a < this.config.dynamicSlots.length; a++)
      ri(this, a << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ri(this, i), ar(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return Ia(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: r } = t;
    for (let a of e.effects)
      a.is(Xr.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((o, h) => r.set(h, o)), t = null), r.set(a.value.compartment, a.value.extension)) : a.is(U.reconfigure) ? (t = null, i = a.value) : a.is(U.appendConfig) && (t = null, i = xt(i).concat(a.value));
    let n;
    t ? n = e.startState.values.slice() : (t = lr.resolve(i, r, this), n = new L(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (o, h) => h.reconfigure(o, this), null).values);
    let l = e.startState.facet(Ss) ? e.newSelection : e.newSelection.asSingle();
    new L(t, e.newDoc, l, n, (a, o) => o.update(a, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: x.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), r = this.changes(i.changes), n = [i.range], l = xt(i.effects);
    for (let a = 1; a < t.ranges.length; a++) {
      let o = e(t.ranges[a]), h = this.changes(o.changes), O = h.map(r);
      for (let f = 0; f < a; f++)
        n[f] = n[f].map(O);
      let c = r.mapDesc(h, !0);
      n.push(o.range.map(c)), r = r.compose(O), l = U.mapEffects(l, O).concat(U.mapEffects(xt(o.effects), c));
    }
    return {
      changes: r,
      selection: x.create(n, t.mainIndex),
      effects: l
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof ee ? e : ee.of(e, this.doc.length, this.facet(L.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return Y.of(e.split(this.facet(L.lineSeparator) || ds));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (ri(this, t), ar(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let r = e[i];
        r instanceof lt && this.config.address[r.id] != null && (t[i] = r.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (i) {
      for (let n in i)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          let l = i[n], a = e[n];
          r.push(l.init((o) => l.spec.fromJSON(a, o)));
        }
    }
    return L.create({
      doc: e.doc,
      selection: x.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = lr.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Y ? e.doc : Y.of((e.doc || "").split(t.staticFacet(L.lineSeparator) || ds)), r = e.selection ? e.selection instanceof x ? e.selection : x.single(e.selection.anchor, e.selection.head) : x.single(0);
    return Ma(r, i.length), t.staticFacet(Ss) || (r = r.asSingle()), new L(t, i, r, t.dynamicSlots.map(() => null), (n, l) => l.create(n), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(L.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(L.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Wa);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(L.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, r) => {
      if (r == "$")
        return "$";
      let n = +(r || 1);
      return !n || n > t.length ? i : t[n - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let r = [];
    for (let n of this.facet(_a))
      for (let l of n(this, t, i))
        Object.prototype.hasOwnProperty.call(l, e) && r.push(l[e]);
    return r;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return PO(t.length ? t[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: r } = this.doc.lineAt(e), n = this.charCategorizer(e), l = e - i, a = e - i;
    for (; l > 0; ) {
      let o = be(t, l, !1);
      if (n(t.slice(o, l)) != Ie.Word)
        break;
      l = o;
    }
    for (; a < r; ) {
      let o = be(t, a);
      if (n(t.slice(a, o)) != Ie.Word)
        break;
      a = o;
    }
    return l == a ? null : x.range(l + i, a + i);
  }
}
L.allowMultipleSelections = Ss;
L.tabSize = /* @__PURE__ */ Z.define({
  combine: (s) => s.length ? s[0] : 4
});
L.lineSeparator = La;
L.readOnly = Wa;
L.phrases = /* @__PURE__ */ Z.define({
  compare(s, e) {
    let t = Object.keys(s), i = Object.keys(e);
    return t.length == i.length && t.every((r) => s[r] == e[r]);
  }
});
L.languageData = _a;
L.changeFilter = Ea;
L.transactionFilter = qa;
L.transactionExtender = Va;
Xr.reconfigure = /* @__PURE__ */ U.define();
class it {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return xs.create(e, t, this);
  }
}
it.prototype.startSide = it.prototype.endSide = 0;
it.prototype.point = !1;
it.prototype.mapMode = he.TrackDel;
function sn(s, e) {
  return s == e || s.constructor == e.constructor && s.eq(e);
}
let xs = class Ba {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Ba(e, t, i);
  }
};
function ws(s, e) {
  return s.from - e.from || s.value.startSide - e.value.startSide;
}
class nn {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, r = 0) {
    let n = i ? this.to : this.from;
    for (let l = r, a = n.length; ; ) {
      if (l == a)
        return l;
      let o = l + a >> 1, h = n[o] - e || (i ? this.value[o].endSide : this.value[o].startSide) - t;
      if (o == l)
        return h >= 0 ? l : a;
      h >= 0 ? a = o : l = o + 1;
    }
  }
  between(e, t, i, r) {
    for (let n = this.findIndex(t, -1e9, !0), l = this.findIndex(i, 1e9, !1, n); n < l; n++)
      if (r(this.from[n] + e, this.to[n] + e, this.value[n]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], r = [], n = [], l = -1, a = -1;
    for (let o = 0; o < this.value.length; o++) {
      let h = this.value[o], O = this.from[o] + e, c = this.to[o] + e, f, u;
      if (O == c) {
        let d = t.mapPos(O, h.startSide, h.mapMode);
        if (d == null || (f = u = d, h.startSide != h.endSide && (u = t.mapPos(O, h.endSide), u < f)))
          continue;
      } else if (f = t.mapPos(O, h.startSide), u = t.mapPos(c, h.endSide), f > u || f == u && h.startSide > 0 && h.endSide <= 0)
        continue;
      (u - f || h.endSide - h.startSide) < 0 || (l < 0 && (l = f), h.point && (a = Math.max(a, u - f)), i.push(h), r.push(f - l), n.push(u - l));
    }
    return { mapped: i.length ? new nn(r, n, i, a) : null, pos: l };
  }
}
class V {
  constructor(e, t, i, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = r;
  }
  /**
  @internal
  */
  static create(e, t, i, r) {
    return new V(e, t, i, r);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: r = 0, filterTo: n = this.length } = e, l = e.filter;
    if (t.length == 0 && !l)
      return this;
    if (i && (t = t.slice().sort(ws)), this.isEmpty)
      return t.length ? V.of(t) : this;
    let a = new Da(this, null, -1).goto(0), o = 0, h = [], O = new or();
    for (; a.value || o < t.length; )
      if (o < t.length && (a.from - t[o].from || a.startSide - t[o].value.startSide) >= 0) {
        let c = t[o++];
        O.addInner(c.from, c.to, c.value) || h.push(c);
      } else a.rangeIndex == 1 && a.chunkIndex < this.chunk.length && (o == t.length || this.chunkEnd(a.chunkIndex) < t[o].from) && (!l || r > this.chunkEnd(a.chunkIndex) || n < this.chunkPos[a.chunkIndex]) && O.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex]) ? a.nextChunk() : ((!l || r > a.to || n < a.from || l(a.from, a.to, a.value)) && (O.addInner(a.from, a.to, a.value) || h.push(xs.create(a.from, a.to, a.value))), a.next());
    return O.finishInner(this.nextLayer.isEmpty && !h.length ? V.empty : this.nextLayer.update({ add: h, filter: l, filterFrom: r, filterTo: n }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], r = -1;
    for (let l = 0; l < this.chunk.length; l++) {
      let a = this.chunkPos[l], o = this.chunk[l], h = e.touchesRange(a, a + o.length);
      if (h === !1)
        r = Math.max(r, o.maxPoint), t.push(o), i.push(e.mapPos(a));
      else if (h === !0) {
        let { mapped: O, pos: c } = o.map(a, e);
        O && (r = Math.max(r, O.maxPoint), t.push(O), i.push(c));
      }
    }
    let n = this.nextLayer.map(e);
    return t.length == 0 ? n : new V(i, t, n || V.empty, r);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let n = this.chunkPos[r], l = this.chunk[r];
        if (t >= n && e <= n + l.length && l.between(n, e - n, t - n, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return hi.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return hi.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, r, n = -1) {
    let l = e.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= n), a = t.filter((c) => c.maxPoint > 0 || !c.isEmpty && c.maxPoint >= n), o = jn(l, a, i), h = new Dt(l, o, n), O = new Dt(a, o, n);
    i.iterGaps((c, f, u) => In(h, c, O, f, u, r)), i.empty && i.length == 0 && In(h, 0, O, 0, 0, r);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, r) {
    r == null && (r = 999999999);
    let n = e.filter((O) => !O.isEmpty && t.indexOf(O) < 0), l = t.filter((O) => !O.isEmpty && e.indexOf(O) < 0);
    if (n.length != l.length)
      return !1;
    if (!n.length)
      return !0;
    let a = jn(n, l), o = new Dt(n, a, 0).goto(i), h = new Dt(l, a, 0).goto(i);
    for (; ; ) {
      if (o.to != h.to || !ys(o.active, h.active) || o.point && (!h.point || !sn(o.point, h.point)))
        return !1;
      if (o.to > r)
        return !0;
      o.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, r, n = -1) {
    let l = new Dt(e, null, n).goto(t), a = t, o = l.openStart;
    for (; ; ) {
      let h = Math.min(l.to, i);
      if (l.point) {
        let O = l.activeForPoint(l.to), c = l.pointFrom < t ? O.length + 1 : l.point.startSide < 0 ? O.length : Math.min(O.length, o);
        r.point(a, h, l.point, O, c, l.pointRank), o = Math.min(l.openEnd(h), O.length);
      } else h > a && (r.span(a, h, l.active, o), o = l.openEnd(h));
      if (l.to > i)
        return o + (l.point && l.to > i ? 1 : 0);
      a = l.to, l.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new or();
    for (let r of e instanceof xs ? [e] : t ? vO(e) : e)
      i.add(r.from, r.to, r.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return V.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let r = e[i]; r != V.empty; r = r.nextLayer)
        t = new V(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
V.empty = /* @__PURE__ */ new V([], [], null, -1);
function vO(s) {
  if (s.length > 1)
    for (let e = s[0], t = 1; t < s.length; t++) {
      let i = s[t];
      if (ws(e, i) > 0)
        return s.slice().sort(ws);
      e = i;
    }
  return s;
}
V.empty.nextLayer = V.empty;
class or {
  finishChunk(e) {
    this.chunks.push(new nn(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new or())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(V.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = V.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function jn(s, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let n of s)
    for (let l = 0; l < n.chunk.length; l++)
      n.chunk[l].maxPoint <= 0 && i.set(n.chunk[l], n.chunkPos[l]);
  let r = /* @__PURE__ */ new Set();
  for (let n of e)
    for (let l = 0; l < n.chunk.length; l++) {
      let a = i.get(n.chunk[l]);
      a != null && (t ? t.mapPos(a) : a) == n.chunkPos[l] && !(t != null && t.touchesRange(a, a + n.chunk[l].length)) && r.add(n.chunk[l]);
    }
  return r;
}
class Da {
  constructor(e, t, i, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class hi {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let r = [];
    for (let n = 0; n < e.length; n++)
      for (let l = e[n]; !l.isEmpty; l = l.nextLayer)
        l.maxPoint >= i && r.push(new Da(l, t, i, n));
    return r.length == 1 ? r[0] : new hi(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Lr(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Lr(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Lr(this.heap, 0);
    }
  }
}
function Lr(s, e) {
  for (let t = s[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= s.length)
      break;
    let r = s[i];
    if (i + 1 < s.length && r.compare(s[i + 1]) >= 0 && (r = s[i + 1], i++), t.compare(r) < 0)
      break;
    s[i] = t, s[e] = r, e = i;
  }
}
class Dt {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = hi.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    zi(this.active, e), zi(this.activeTo, e), zi(this.activeRank, e), this.minActive = Bn(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: r, rank: n } = this.cursor;
    for (; t < this.activeRank.length && (n - this.activeRank[t] || r - this.activeTo[t]) > 0; )
      t++;
    Mi(this.active, t, i), Mi(this.activeTo, t, r), Mi(this.activeRank, t, n), e && Mi(e, t, this.cursor.from), this.minActive = Bn(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), i && zi(i, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let n = this.cursor.value;
          if (!n.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = n, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = n.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let r = i.length - 1; r >= 0 && i[r] < e; r--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function In(s, e, t, i, r, n) {
  s.goto(e), t.goto(i);
  let l = i + r, a = i, o = i - e, h = !!n.boundChange;
  for (let O = !1; ; ) {
    let c = s.to + o - t.to, f = c || s.endSide - t.endSide, u = f < 0 ? s.to + o : t.to, d = Math.min(u, l);
    if (s.point || t.point ? (s.point && t.point && sn(s.point, t.point) && ys(s.activeForPoint(s.to), t.activeForPoint(t.to)) || n.comparePoint(a, d, s.point, t.point), O = !1) : (O && n.boundChange(a), d > a && !ys(s.active, t.active) && n.compareRange(a, d, s.active, t.active), h && d < l && (c || s.openEnd(u) != t.openEnd(u)) && (O = !0)), u > l)
      break;
    a = u, f <= 0 && s.next(), f >= 0 && t.next();
  }
}
function ys(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++)
    if (s[t] != e[t] && !sn(s[t], e[t]))
      return !1;
  return !0;
}
function zi(s, e) {
  for (let t = e, i = s.length - 1; t < i; t++)
    s[t] = s[t + 1];
  s.pop();
}
function Mi(s, e, t) {
  for (let i = s.length - 1; i >= e; i--)
    s[i + 1] = s[i];
  s[e] = t;
}
function Bn(s, e) {
  let t = -1, i = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - i || s[r].endSide - s[t].endSide) < 0 && (t = r, i = e[r]);
  return t;
}
function Oi(s, e, t = s.length) {
  let i = 0;
  for (let r = 0; r < t && r < s.length; )
    s.charCodeAt(r) == 9 ? (i += e - i % e, r++) : (i++, r = be(s, r));
  return i;
}
function TO(s, e, t, i) {
  for (let r = 0, n = 0; ; ) {
    if (n >= e)
      return r;
    if (r == s.length)
      break;
    n += s.charCodeAt(r) == 9 ? t - n % t : 1, r = be(s, r);
  }
  return s.length;
}
const $s = "ͼ", Dn = typeof Symbol > "u" ? "__" + $s : Symbol.for($s), Ps = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Zt {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function r(l) {
      return /^@/.test(l) ? [l] : l.split(/,\s*/);
    }
    function n(l, a, o, h) {
      let O = [], c = /^@(\w+)\b/.exec(l[0]), f = c && c[1] == "keyframes";
      if (c && a == null) return o.push(l[0] + ";");
      for (let u in a) {
        let d = a[u];
        if (/&/.test(u))
          n(
            u.split(/,\s*/).map((p) => l.map((m) => p.replace(/&/, m))).reduce((p, m) => p.concat(m)),
            d,
            o
          );
        else if (d && typeof d == "object") {
          if (!c) throw new RangeError("The value of a property (" + u + ") should be a primitive value.");
          n(r(u), d, O, f);
        } else d != null && O.push(u.replace(/_.*/, "").replace(/[A-Z]/g, (p) => "-" + p.toLowerCase()) + ": " + d + ";");
      }
      (O.length || f) && o.push((i && !c && !h ? l.map(i) : l).join(", ") + " {" + O.join(" ") + "}");
    }
    for (let l in e) n(r(l), e[l], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = Gn[Dn] || 1;
    return Gn[Dn] = e + 1, $s + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let r = e[Ps], n = i && i.nonce;
    r ? n && r.setNonce(n) : r = new ZO(e, n), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Nn = /* @__PURE__ */ new Map();
class ZO {
  constructor(e, t) {
    let i = e.ownerDocument || e, r = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let n = Nn.get(i);
      if (n) return e[Ps] = n;
      this.sheet = new r.CSSStyleSheet(), Nn.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Ps] = this;
  }
  mount(e, t) {
    let i = this.sheet, r = 0, n = 0;
    for (let l = 0; l < e.length; l++) {
      let a = e[l], o = this.modules.indexOf(a);
      if (o < n && o > -1 && (this.modules.splice(o, 1), n--, o = -1), o == -1) {
        if (this.modules.splice(n++, 0, a), i) for (let h = 0; h < a.rules.length; h++)
          i.insertRule(a.rules[h], r++);
      } else {
        for (; n < o; ) r += this.modules[n++].rules.length;
        r += a.rules.length, n++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let l = "";
      for (let o = 0; o < this.modules.length; o++)
        l += this.modules[o].getRules() + `
`;
      this.styleTag.textContent = l;
      let a = t.head || t;
      this.styleTag.parentNode != a && a.insertBefore(this.styleTag, a.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var rt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
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
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ci = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, XO = typeof navigator < "u" && /Mac/.test(navigator.platform), CO = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var re = 0; re < 10; re++) rt[48 + re] = rt[96 + re] = String(re);
for (var re = 1; re <= 24; re++) rt[re + 111] = "F" + re;
for (var re = 65; re <= 90; re++)
  rt[re] = String.fromCharCode(re + 32), ci[re] = String.fromCharCode(re);
for (var Er in rt) ci.hasOwnProperty(Er) || (ci[Er] = rt[Er]);
function AO(s) {
  var e = XO && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || CO && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", t = !e && s.key || (s.shiftKey ? ci : rt)[s.keyCode] || s.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
let oe = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, vs = typeof document < "u" ? document : { documentElement: { style: {} } };
const Ts = /* @__PURE__ */ /Edge\/(\d+)/.exec(oe.userAgent), Ga = /* @__PURE__ */ /MSIE \d/.test(oe.userAgent), Zs = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(oe.userAgent), Cr = !!(Ga || Zs || Ts), Un = !Cr && /* @__PURE__ */ /gecko\/(\d+)/i.test(oe.userAgent), qr = !Cr && /* @__PURE__ */ /Chrome\/(\d+)/.exec(oe.userAgent), RO = "webkitFontSmoothing" in vs.documentElement.style, Xs = !Cr && /* @__PURE__ */ /Apple Computer/.test(oe.vendor), Fn = Xs && (/* @__PURE__ */ /Mobile\/\w+/.test(oe.userAgent) || oe.maxTouchPoints > 2);
var y = {
  mac: Fn || /* @__PURE__ */ /Mac/.test(oe.platform),
  windows: /* @__PURE__ */ /Win/.test(oe.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(oe.platform),
  ie: Cr,
  ie_version: Ga ? vs.documentMode || 6 : Zs ? +Zs[1] : Ts ? +Ts[1] : 0,
  gecko: Un,
  gecko_version: Un ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(oe.userAgent) || [0, 0])[1] : 0,
  chrome: !!qr,
  chrome_version: qr ? +qr[1] : 0,
  ios: Fn,
  android: /* @__PURE__ */ /Android\b/.test(oe.userAgent),
  webkit_version: RO ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(oe.userAgent) || [0, 0])[1] : 0,
  safari: Xs,
  safari_version: Xs ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(oe.userAgent) || [0, 0])[1] : 0,
  tabSize: vs.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function ln(s, e) {
  for (let t in s)
    t == "class" && e.class ? e.class += " " + s.class : t == "style" && e.style ? e.style += ";" + s.style : e[t] = s[t];
  return e;
}
const hr = /* @__PURE__ */ Object.create(null);
function an(s, e, t) {
  if (s == e)
    return !0;
  s || (s = hr), e || (e = hr);
  let i = Object.keys(s), r = Object.keys(e);
  if (i.length - 0 != r.length - 0)
    return !1;
  for (let n of i)
    if (n != t && (r.indexOf(n) == -1 || s[n] !== e[n]))
      return !1;
  return !0;
}
function zO(s, e) {
  for (let t = s.attributes.length - 1; t >= 0; t--) {
    let i = s.attributes[t].name;
    e[i] == null && s.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? s.style.cssText = i : s.getAttribute(t) != i && s.setAttribute(t, i);
  }
}
function Hn(s, e, t) {
  let i = !1;
  if (e)
    for (let r in e)
      t && r in t || (i = !0, r == "style" ? s.style.cssText = "" : s.removeAttribute(r));
  if (t)
    for (let r in t)
      e && e[r] == t[r] || (i = !0, r == "style" ? s.style.cssText = t[r] : s.setAttribute(r, t[r]));
  return i;
}
function MO(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < s.attributes.length; t++) {
    let i = s.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class yi {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
}
var we = /* @__PURE__ */ function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
}(we || (we = {}));
class E extends it {
  constructor(e, t, i, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = r;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new $i(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new pt(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, r;
    if (e.isBlockGap)
      i = -5e8, r = 4e8;
    else {
      let { start: n, end: l } = Na(e, t);
      i = (n ? t ? -3e8 : -1 : 5e8) - 1, r = (l ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new pt(e, i, r, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Pi(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return V.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
E.none = V.empty;
class $i extends E {
  constructor(e) {
    let { start: t, end: i } = Na(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? ln(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || hr;
  }
  eq(e) {
    return this == e || e instanceof $i && this.tagName == e.tagName && an(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
$i.prototype.point = !1;
class Pi extends E {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Pi && this.spec.class == e.spec.class && an(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Pi.prototype.mapMode = he.TrackBefore;
Pi.prototype.point = !0;
class pt extends E {
  constructor(e, t, i, r, n, l) {
    super(t, i, n, e), this.block = r, this.isReplace = l, this.mapMode = r ? t <= 0 ? he.TrackBefore : he.TrackAfter : he.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? we.WidgetRange : this.startSide <= 0 ? we.WidgetBefore : we.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof pt && YO(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
pt.prototype.point = !0;
function Na(s, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = s;
  return t == null && (t = s.inclusive), i == null && (i = s.inclusive), { start: t ?? e, end: i ?? e };
}
function YO(s, e) {
  return s == e || !!(s && e && s.compare(e));
}
function wt(s, e, t, i = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + i >= s ? t[r] = Math.max(t[r], e) : t.push(s, e);
}
class fi extends it {
  constructor(e, t) {
    super(), this.tagName = e, this.attributes = t;
  }
  eq(e) {
    return e == this || e instanceof fi && this.tagName == e.tagName && an(this.attributes, e.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(e) {
    return new fi(e.tagName, e.attributes || hr);
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(e, t = !1) {
    return V.of(e, t);
  }
}
fi.prototype.startSide = fi.prototype.endSide = -1;
function ui(s) {
  let e;
  return s.nodeType == 11 ? e = s.getSelection ? s : s.ownerDocument : e = s, e.getSelection();
}
function Cs(s, e) {
  return e ? s == e || s.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Ki(s, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Cs(s, e.anchorNode);
  } catch {
    return !1;
  }
}
function Ji(s) {
  return s.nodeType == 3 ? di(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function si(s, e, t, i) {
  return t ? Kn(s, e, t, i, -1) || Kn(s, e, t, i, 1) : !1;
}
function st(s) {
  for (var e = 0; ; e++)
    if (s = s.previousSibling, !s)
      return e;
}
function Or(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function Kn(s, e, t, i, r) {
  for (; ; ) {
    if (s == t && e == i)
      return !0;
    if (e == (r < 0 ? 0 : Ne(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let n = s.parentNode;
      if (!n || n.nodeType != 1)
        return !1;
      e = st(s) + (r < 0 ? 0 : 1), s = n;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[e + (r < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      e = r < 0 ? Ne(s) : 0;
    } else
      return !1;
  }
}
function Ne(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function cr(s, e) {
  let t = e ? s.left : s.right;
  return { left: t, right: t, top: s.top, bottom: s.bottom };
}
function _O(s) {
  let e = s.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function Ua(s, e) {
  let t = e.width / s.offsetWidth, i = e.height / s.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - s.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - s.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function LO(s, e, t, i, r, n, l, a) {
  let o = s.ownerDocument, h = o.defaultView || window;
  for (let O = s, c = !1; O && !c; )
    if (O.nodeType == 1) {
      let f, u = O == o.body, d = 1, p = 1;
      if (u)
        f = _O(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(O).position) && (c = !0), O.scrollHeight <= O.clientHeight && O.scrollWidth <= O.clientWidth) {
          O = O.assignedSlot || O.parentNode;
          continue;
        }
        let k = O.getBoundingClientRect();
        ({ scaleX: d, scaleY: p } = Ua(O, k)), f = {
          left: k.left,
          right: k.left + O.clientWidth * d,
          top: k.top,
          bottom: k.top + O.clientHeight * p
        };
      }
      let m = 0, Q = 0;
      if (r == "nearest")
        e.top < f.top ? (Q = e.top - (f.top + l), t > 0 && e.bottom > f.bottom + Q && (Q = e.bottom - f.bottom + l)) : e.bottom > f.bottom && (Q = e.bottom - f.bottom + l, t < 0 && e.top - Q < f.top && (Q = e.top - (f.top + l)));
      else {
        let k = e.bottom - e.top, w = f.bottom - f.top;
        Q = (r == "center" && k <= w ? e.top + k / 2 - w / 2 : r == "start" || r == "center" && t < 0 ? e.top - l : e.bottom - w + l) - f.top;
      }
      if (i == "nearest" ? e.left < f.left ? (m = e.left - (f.left + n), t > 0 && e.right > f.right + m && (m = e.right - f.right + n)) : e.right > f.right && (m = e.right - f.right + n, t < 0 && e.left < f.left + m && (m = e.left - (f.left + n))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2 : i == "start" == a ? e.left - n : e.right - (f.right - f.left) + n) - f.left, m || Q)
        if (u)
          h.scrollBy(m, Q);
        else {
          let k = 0, w = 0;
          if (Q) {
            let A = O.scrollTop;
            O.scrollTop += Q / p, w = (O.scrollTop - A) * p;
          }
          if (m) {
            let A = O.scrollLeft;
            O.scrollLeft += m / d, k = (O.scrollLeft - A) * d;
          }
          e = {
            left: e.left - k,
            top: e.top - w,
            right: e.right - k,
            bottom: e.bottom - w
          }, k && Math.abs(k - m) < 1 && (i = "nearest"), w && Math.abs(w - Q) < 1 && (r = "nearest");
        }
      if (u)
        break;
      (e.top < f.top || e.bottom > f.bottom || e.left < f.left || e.right > f.right) && (e = {
        left: Math.max(e.left, f.left),
        right: Math.min(e.right, f.right),
        top: Math.max(e.top, f.top),
        bottom: Math.min(e.bottom, f.bottom)
      }), O = O.assignedSlot || O.parentNode;
    } else if (O.nodeType == 11)
      O = O.host;
    else
      break;
}
function EO(s) {
  let e = s.ownerDocument, t, i;
  for (let r = s.parentNode; r && !(r == e.body || t && i); )
    if (r.nodeType == 1)
      !i && r.scrollHeight > r.clientHeight && (i = r), !t && r.scrollWidth > r.clientWidth && (t = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: t, y: i };
}
class qO {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? Ne(t) : 0), i, Math.min(e.focusOffset, i ? Ne(i) : 0));
  }
  set(e, t, i, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = r;
  }
}
let Ot = null;
y.safari && y.safari_version >= 26 && (Ot = !1);
function Fa(s) {
  if (s.setActive)
    return s.setActive();
  if (Ot)
    return s.focus(Ot);
  let e = [];
  for (let t = s; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (s.focus(Ot == null ? {
    get preventScroll() {
      return Ot = { preventScroll: !0 }, !0;
    }
  } : void 0), !Ot) {
    Ot = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], r = e[t++], n = e[t++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != n && (i.scrollLeft = n);
    }
  }
}
let Jn;
function di(s, e, t = e) {
  let i = Jn || (Jn = document.createRange());
  return i.setEnd(s, t), i.setStart(s, e), i;
}
function yt(s, e, t, i) {
  let r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i);
  let n = new KeyboardEvent("keydown", r);
  n.synthetic = !0, s.dispatchEvent(n);
  let l = new KeyboardEvent("keyup", r);
  return l.synthetic = !0, s.dispatchEvent(l), n.defaultPrevented || l.defaultPrevented;
}
function VO(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function WO(s, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, Ne(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let r = t.childNodes[i - 1];
      r.contentEditable == "false" ? i-- : (t = r, i = Ne(t));
    } else {
      if (t == s)
        return !0;
      i = st(t), t = t.parentNode;
    }
}
function Ha(s) {
  return s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function Ka(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = Ne(t);
    } else if (t.parentNode && !Or(t))
      i = st(t), t = t.parentNode;
    else
      return null;
  }
}
function Ja(s, e) {
  for (let t = s, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !Or(t))
      i = st(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class ve {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new ve(e.parentNode, st(e), t);
  }
  static after(e, t) {
    return new ve(e.parentNode, st(e) + 1, t);
  }
}
var K = /* @__PURE__ */ function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
}(K || (K = {}));
const gt = K.LTR, on = K.RTL;
function eo(s) {
  let e = [];
  for (let t = 0; t < s.length; t++)
    e.push(1 << +s[t]);
  return e;
}
const jO = /* @__PURE__ */ eo("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), IO = /* @__PURE__ */ eo("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), As = /* @__PURE__ */ Object.create(null), Ce = [];
for (let s of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ s.charCodeAt(0), t = /* @__PURE__ */ s.charCodeAt(1);
  As[e] = t, As[t] = -e;
}
function to(s) {
  return s <= 247 ? jO[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? IO[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const BO = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Be {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? on : gt;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, r) {
    let n = -1;
    for (let l = 0; l < e.length; l++) {
      let a = e[l];
      if (a.from <= t && a.to >= t) {
        if (a.level == i)
          return l;
        (n < 0 || (r != 0 ? r < 0 ? a.from < t : a.to > t : e[n].level > a.level)) && (n = l);
      }
    }
    if (n < 0)
      throw new RangeError("Index out of range");
    return n;
  }
}
function io(s, e) {
  if (s.length != e.length)
    return !1;
  for (let t = 0; t < s.length; t++) {
    let i = s[t], r = e[t];
    if (i.from != r.from || i.to != r.to || i.direction != r.direction || !io(i.inner, r.inner))
      return !1;
  }
  return !0;
}
const W = [];
function DO(s, e, t, i, r) {
  for (let n = 0; n <= i.length; n++) {
    let l = n ? i[n - 1].to : e, a = n < i.length ? i[n].from : t, o = n ? 256 : r;
    for (let h = l, O = o, c = o; h < a; h++) {
      let f = to(s.charCodeAt(h));
      f == 512 ? f = O : f == 8 && c == 4 && (f = 16), W[h] = f == 4 ? 2 : f, f & 7 && (c = f), O = f;
    }
    for (let h = l, O = o, c = o; h < a; h++) {
      let f = W[h];
      if (f == 128)
        h < a - 1 && O == W[h + 1] && O & 24 ? f = W[h] = O : W[h] = 256;
      else if (f == 64) {
        let u = h + 1;
        for (; u < a && W[u] == 64; )
          u++;
        let d = h && O == 8 || u < t && W[u] == 8 ? c == 1 ? 1 : 8 : 256;
        for (let p = h; p < u; p++)
          W[p] = d;
        h = u - 1;
      } else f == 8 && c == 1 && (W[h] = 1);
      O = f, f & 7 && (c = f);
    }
  }
}
function GO(s, e, t, i, r) {
  let n = r == 1 ? 2 : 1;
  for (let l = 0, a = 0, o = 0; l <= i.length; l++) {
    let h = l ? i[l - 1].to : e, O = l < i.length ? i[l].from : t;
    for (let c = h, f, u, d; c < O; c++)
      if (u = As[f = s.charCodeAt(c)])
        if (u < 0) {
          for (let p = a - 3; p >= 0; p -= 3)
            if (Ce[p + 1] == -u) {
              let m = Ce[p + 2], Q = m & 2 ? r : m & 4 ? m & 1 ? n : r : 0;
              Q && (W[c] = W[Ce[p]] = Q), a = p;
              break;
            }
        } else {
          if (Ce.length == 189)
            break;
          Ce[a++] = c, Ce[a++] = f, Ce[a++] = o;
        }
      else if ((d = W[c]) == 2 || d == 1) {
        let p = d == r;
        o = p ? 0 : 1;
        for (let m = a - 3; m >= 0; m -= 3) {
          let Q = Ce[m + 2];
          if (Q & 2)
            break;
          if (p)
            Ce[m + 2] |= 2;
          else {
            if (Q & 4)
              break;
            Ce[m + 2] |= 4;
          }
        }
      }
  }
}
function NO(s, e, t, i) {
  for (let r = 0, n = i; r <= t.length; r++) {
    let l = r ? t[r - 1].to : s, a = r < t.length ? t[r].from : e;
    for (let o = l; o < a; ) {
      let h = W[o];
      if (h == 256) {
        let O = o + 1;
        for (; ; )
          if (O == a) {
            if (r == t.length)
              break;
            O = t[r++].to, a = r < t.length ? t[r].from : e;
          } else if (W[O] == 256)
            O++;
          else
            break;
        let c = n == 1, f = (O < e ? W[O] : i) == 1, u = c == f ? c ? 1 : 2 : i;
        for (let d = O, p = r, m = p ? t[p - 1].to : s; d > o; )
          d == m && (d = t[--p].from, m = p ? t[p - 1].to : s), W[--d] = u;
        o = O;
      } else
        n = h, o++;
    }
  }
}
function Rs(s, e, t, i, r, n, l) {
  let a = i % 2 ? 2 : 1;
  if (i % 2 == r % 2)
    for (let o = e, h = 0; o < t; ) {
      let O = !0, c = !1;
      if (h == n.length || o < n[h].from) {
        let p = W[o];
        p != a && (O = !1, c = p == 16);
      }
      let f = !O && a == 1 ? [] : null, u = O ? i : i + 1, d = o;
      e: for (; ; )
        if (h < n.length && d == n[h].from) {
          if (c)
            break e;
          let p = n[h];
          if (!O)
            for (let m = p.to, Q = h + 1; ; ) {
              if (m == t)
                break e;
              if (Q < n.length && n[Q].from == m)
                m = n[Q++].to;
              else {
                if (W[m] == a)
                  break e;
                break;
              }
            }
          if (h++, f)
            f.push(p);
          else {
            p.from > o && l.push(new Be(o, p.from, u));
            let m = p.direction == gt != !(u % 2);
            zs(s, m ? i + 1 : i, r, p.inner, p.from, p.to, l), o = p.to;
          }
          d = p.to;
        } else {
          if (d == t || (O ? W[d] != a : W[d] == a))
            break;
          d++;
        }
      f ? Rs(s, o, d, i + 1, r, f, l) : o < d && l.push(new Be(o, d, u)), o = d;
    }
  else
    for (let o = t, h = n.length; o > e; ) {
      let O = !0, c = !1;
      if (!h || o > n[h - 1].to) {
        let p = W[o - 1];
        p != a && (O = !1, c = p == 16);
      }
      let f = !O && a == 1 ? [] : null, u = O ? i : i + 1, d = o;
      e: for (; ; )
        if (h && d == n[h - 1].to) {
          if (c)
            break e;
          let p = n[--h];
          if (!O)
            for (let m = p.from, Q = h; ; ) {
              if (m == e)
                break e;
              if (Q && n[Q - 1].to == m)
                m = n[--Q].from;
              else {
                if (W[m - 1] == a)
                  break e;
                break;
              }
            }
          if (f)
            f.push(p);
          else {
            p.to < o && l.push(new Be(p.to, o, u));
            let m = p.direction == gt != !(u % 2);
            zs(s, m ? i + 1 : i, r, p.inner, p.from, p.to, l), o = p.from;
          }
          d = p.from;
        } else {
          if (d == e || (O ? W[d - 1] != a : W[d - 1] == a))
            break;
          d--;
        }
      f ? Rs(s, d, o, i + 1, r, f, l) : d < o && l.push(new Be(d, o, u)), o = d;
    }
}
function zs(s, e, t, i, r, n, l) {
  let a = e % 2 ? 2 : 1;
  DO(s, r, n, i, a), GO(s, r, n, i, a), NO(r, n, i, a), Rs(s, r, n, e, t, i, l);
}
function UO(s, e, t) {
  if (!s)
    return [new Be(0, 0, e == on ? 1 : 0)];
  if (e == gt && !t.length && !BO.test(s))
    return ro(s.length);
  if (t.length)
    for (; s.length > W.length; )
      W[W.length] = 256;
  let i = [], r = e == gt ? 0 : 1;
  return zs(s, r, r, t, 0, s.length, i), i;
}
function ro(s) {
  return [new Be(0, s, 0)];
}
let so = "";
function FO(s, e, t, i, r) {
  var n;
  let l = i.head - s.from, a = Be.find(e, l, (n = i.bidiLevel) !== null && n !== void 0 ? n : -1, i.assoc), o = e[a], h = o.side(r, t);
  if (l == h) {
    let f = a += r ? 1 : -1;
    if (f < 0 || f >= e.length)
      return null;
    o = e[a = f], l = o.side(!r, t), h = o.side(r, t);
  }
  let O = be(s.text, l, o.forward(r, t));
  (O < o.from || O > o.to) && (O = h), so = s.text.slice(Math.min(l, O), Math.max(l, O));
  let c = a == (r ? e.length - 1 : 0) ? null : e[a + (r ? 1 : -1)];
  return c && O == h && c.level + (r ? 0 : 1) < o.level ? x.cursor(c.side(!r, t) + s.from, c.forward(r, t) ? 1 : -1, c.level) : x.cursor(O + s.from, o.forward(r, t) ? -1 : 1, o.level);
}
function HO(s, e, t) {
  for (let i = e; i < t; i++) {
    let r = to(s.charCodeAt(i));
    if (r == 1)
      return gt;
    if (r == 2 || r == 4)
      return on;
  }
  return gt;
}
const no = /* @__PURE__ */ Z.define(), lo = /* @__PURE__ */ Z.define(), ao = /* @__PURE__ */ Z.define(), oo = /* @__PURE__ */ Z.define(), Ms = /* @__PURE__ */ Z.define(), ho = /* @__PURE__ */ Z.define(), Oo = /* @__PURE__ */ Z.define(), hn = /* @__PURE__ */ Z.define(), On = /* @__PURE__ */ Z.define(), co = /* @__PURE__ */ Z.define({
  combine: (s) => s.some((e) => e)
}), KO = /* @__PURE__ */ Z.define({
  combine: (s) => s.some((e) => e)
}), fo = /* @__PURE__ */ Z.define();
class $t {
  constructor(e, t = "nearest", i = "nearest", r = 5, n = 5, l = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = r, this.xMargin = n, this.isSnapshot = l;
  }
  map(e) {
    return e.empty ? this : new $t(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new $t(x.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Yi = /* @__PURE__ */ U.define({ map: (s, e) => s.map(e) }), uo = /* @__PURE__ */ U.define();
function _e(s, e, t) {
  let i = s.facet(oo);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const je = /* @__PURE__ */ Z.define({ combine: (s) => s.length ? s[0] : !0 });
let JO = 0;
const bt = /* @__PURE__ */ Z.define({
  combine(s) {
    return s.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (s[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
});
class mt {
  constructor(e, t, i, r, n) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = r, this.baseExtensions = n(this), this.extension = this.baseExtensions.concat(bt.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(bt.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: r, provide: n, decorations: l } = t || {};
    return new mt(JO++, e, i, r, (a) => {
      let o = [];
      return l && o.push(pi.of((h) => {
        let O = h.plugin(a);
        return O ? l(O) : E.none;
      })), n && o.push(n(a)), o;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return mt.define((i, r) => new e(i, r), t);
  }
}
class Vr {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (_e(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        _e(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        _e(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const po = /* @__PURE__ */ Z.define(), cn = /* @__PURE__ */ Z.define(), pi = /* @__PURE__ */ Z.define(), go = /* @__PURE__ */ Z.define(), mo = /* @__PURE__ */ Z.define(), vi = /* @__PURE__ */ Z.define(), Qo = /* @__PURE__ */ Z.define();
function el(s, e) {
  let t = s.state.facet(Qo);
  if (!t.length)
    return t;
  let i = t.map((n) => n instanceof Function ? n(s) : n), r = [];
  return V.spans(i, e.from, e.to, {
    point() {
    },
    span(n, l, a, o) {
      let h = n - e.from, O = l - e.from, c = r;
      for (let f = a.length - 1; f >= 0; f--, o--) {
        let u = a[f].spec.bidiIsolate, d;
        if (u == null && (u = HO(e.text, h, O)), o > 0 && c.length && (d = c[c.length - 1]).to == h && d.direction == u)
          d.to = O, c = d.inner;
        else {
          let p = { from: h, to: O, direction: u, inner: [] };
          c.push(p), c = p.inner;
        }
      }
    }
  }), r;
}
const So = /* @__PURE__ */ Z.define();
function bo(s) {
  let e = 0, t = 0, i = 0, r = 0;
  for (let n of s.state.facet(So)) {
    let l = n(s);
    l && (l.left != null && (e = Math.max(e, l.left)), l.right != null && (t = Math.max(t, l.right)), l.top != null && (i = Math.max(i, l.top)), l.bottom != null && (r = Math.max(r, l.bottom)));
  }
  return { left: e, right: t, top: i, bottom: r };
}
const Kt = /* @__PURE__ */ Z.define();
class ke {
  constructor(e, t, i, r) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = r;
  }
  join(e) {
    return new ke(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > i.toA)) {
        if (r.toA < i.fromA)
          break;
        i = i.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let r = 0, n = 0, l = 0; ; ) {
      let a = r < e.length ? e[r].fromB : 1e9, o = n < t.length ? t[n] : 1e9, h = Math.min(a, o);
      if (h == 1e9)
        break;
      let O = h + l, c = h, f = O;
      for (; ; )
        if (n < t.length && t[n] <= c) {
          let u = t[n + 1];
          n += 2, c = Math.max(c, u);
          for (let d = r; d < e.length && e[d].fromB <= c; d++)
            l = e[d].toA - e[d].toB;
          f = Math.max(f, u + l);
        } else if (r < e.length && e[r].fromB <= c) {
          let u = e[r++];
          c = Math.max(c, u.toB), f = Math.max(f, u.toA), l = u.toA - u.toB;
        } else
          break;
      i.push(new ke(O, f, h, c));
    }
    return i;
  }
}
class fr {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = ee.empty(this.startState.doc.length);
    for (let n of i)
      this.changes = this.changes.compose(n.changes);
    let r = [];
    this.changes.iterChangedRanges((n, l, a, o) => r.push(new ke(n, l, a, o))), this.changedRanges = r;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new fr(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const ec = [];
class H {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return ec;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && zO(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let r of this.children) {
      if (r == e)
        return i;
      i += r.length + r.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return !0;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let i = st(this.dom), r = this.length ? e > 0 : t > 0;
    return new ve(this.parent.dom, i + (r ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent)
      if (e instanceof Rr)
        return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class Ar extends H {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2)
      return;
    super.sync(e);
    let t = this.dom, i = null, r, n = (e == null ? void 0 : e.node) == t ? e : null, l = 0;
    for (let a of this.children) {
      if (a.sync(e), l += a.length + a.breakAfter, r = i ? i.nextSibling : t.firstChild, n && r != a.dom && (n.written = !0), a.dom.parentNode == t)
        for (; r && r != a.dom; )
          r = tl(r);
      else
        t.insertBefore(a.dom, r);
      i = a.dom;
    }
    for (r = i ? i.nextSibling : t.firstChild, n && r && (n.written = !0); r; )
      r = tl(r);
    this.length = l;
  }
}
function tl(s) {
  let e = s.nextSibling;
  return s.parentNode.removeChild(s), e;
}
class Rr extends Ar {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent)
      if (e == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(e) {
    for (; ; ) {
      if (!e)
        return null;
      let t = H.get(e);
      if (t && this.owns(t))
        return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, r = 0, n = 0; ; )
      if (r == i.children.length) {
        if (!t.length)
          return;
        i = i.parent, i.breakAfter && n++, r = t.pop();
      } else {
        let l = i.children[r++];
        if (l instanceof tt)
          t.push(r), i = l, r = 0;
        else {
          let a = n + l.length, o = e(l, n);
          if (o !== void 0)
            return o;
          n = a + l.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(e, t) {
    let i, r = -1, n, l = -1;
    if (this.blockTiles((a, o) => {
      let h = o + a.length;
      if (e >= o && e <= h) {
        if (a.isWidget() && t >= -1 && t <= 1) {
          if (a.flags & 32)
            return !0;
          a.flags & 16 && (i = void 0);
        }
        (o < e || e == h && (t < -1 ? a.length : a.covers(1))) && (!i || !a.isWidget() && i.isWidget()) && (i = a, r = e - o), (h > e || e == o && (t > 1 ? a.length : a.covers(-1))) && (!n || !a.isWidget() && n.isWidget()) && (n = a, l = e - o);
      }
    }), !i && !n)
      throw new Error("No tile at position " + e);
    return i && t < 0 || !n ? { tile: i, offset: r } : { tile: n, offset: l };
  }
}
class tt extends Ar {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return !0;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new tt(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Xt extends Ar {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return !0;
  }
  static start(e, t, i) {
    let r = new Xt(t || document.createElement("div"), e);
    return (!t || !i) && (r.flags |= 4), r;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(e, t, i) {
    let r = null, n = -1, l = null, a = -1;
    function o(O, c) {
      for (let f = 0, u = 0; f < O.children.length && u <= c; f++) {
        let d = O.children[f], p = u + d.length;
        p >= c && (d.isComposite() ? o(d, c - u) : (!l || l.isHidden && (t > 0 || i && ic(l, d))) && (p > c || d.flags & 32) ? (l = d, a = c - u) : (u < c || d.flags & 16 && !d.isHidden) && (r = d, n = c - u)), u = p;
      }
    }
    o(this, e);
    let h = (t < 0 ? r : l) || r || l;
    return h ? { tile: h, offset: h == r ? n : a } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : tc(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: r, offset: n } = i;
      if (this.dom.contains(r.dom))
        return r.isText() ? new ve(r.dom, Math.min(r.dom.nodeValue.length, n)) : r.domPosFor(n, r.flags & 16 ? 1 : r.flags & 32 ? -1 : t);
      let l = i.tile.parent, a = !1;
      for (let o of l.children) {
        if (a)
          return new ve(o.dom, 0);
        o == i.tile && (a = !0);
      }
    }
    return new ve(this.dom, 0);
  }
}
function tc(s) {
  let e = s.dom.lastChild;
  if (!e)
    return s.dom.getBoundingClientRect();
  let t = Ji(e);
  return t[t.length - 1] || null;
}
function ic(s, e) {
  let t = s.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class fe extends Ar {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new fe(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class dt extends H {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let i = this.dom.nodeValue.length;
    e > i && (e = i);
    let r = e, n = e, l = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? y.chrome || y.gecko || (e ? (r--, l = 1) : n < i && (n++, l = -1)) : t < 0 ? r-- : n < i && n++;
    let a = di(this.dom, r, n).getClientRects();
    if (!a.length)
      return null;
    let o = a[(l ? l < 0 : t >= 0) ? 0 : a.length - 1];
    return y.safari && !l && o.width == 0 && (o = Array.prototype.find.call(a, (h) => h.width) || o), l ? cr(o, l < 0) : o || null;
  }
  static of(e, t) {
    let i = new dt(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class Ct extends H {
  constructor(e, t, i, r) {
    super(e, t, r), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, !1);
  }
  coordsInWidget(e, t, i) {
    let r = this.widget.coordsAt(this.dom, e, t);
    if (r)
      return r;
    if (i)
      return cr(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let n = this.dom.getClientRects(), l = null;
      if (!n.length)
        return null;
      let a = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
      for (let o = a ? n.length - 1 : 0; l = n[o], !(e > 0 ? o == 0 : o == n.length - 1 || l.top < l.bottom); o += a ? -1 : 1)
        ;
      return cr(l, !a);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return Y.empty;
    let { root: e } = this;
    if (!e)
      return Y.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, r, n) {
    return n || (n = e.toDOM(t), e.editable || (n.contentEditable = "false")), new Ct(n, i, e, r);
  }
}
class ur extends H {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return !1;
  }
  get overrideDOMText() {
    return Y.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class rc {
  constructor(e) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(e, t, i) {
    let { tile: r, index: n, beforeBreak: l, parents: a } = this;
    for (; e || t > 0; )
      if (r.isComposite())
        if (l) {
          if (!e)
            break;
          i && i.break(), e--, l = !1;
        } else if (n == r.children.length) {
          if (!e && !a.length)
            break;
          i && i.leave(r), l = !!r.breakAfter, { tile: r, index: n } = a.pop(), n++;
        } else {
          let o = r.children[n], h = o.breakAfter;
          (t > 0 ? o.length <= e : o.length < e) && (!i || i.skip(o, 0, o.length) !== !1 || !o.isComposite) ? (l = !!h, n++, e -= o.length) : (a.push({ tile: r, index: n }), r = o, n = 0, i && o.isComposite() && i.enter(o));
        }
      else if (n == r.length)
        l = !!r.breakAfter, { tile: r, index: n } = a.pop(), n++;
      else if (e) {
        let o = Math.min(e, r.length - n);
        i && i.skip(r, n, n + o), e -= o, n += o;
      } else
        break;
    return this.tile = r, this.index = n, this.beforeBreak = l, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class sc {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = r;
  }
}
class nc {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, r) {
    var n;
    this.flushBuffer();
    let l = this.ensureMarks(t, i), a = l.lastChild;
    if (a && a.isText() && !(a.flags & 8)) {
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
      let o = l.children[l.children.length - 1] = new dt(a.dom, a.text + e);
      o.parent = l;
    } else
      l.append(r || dt.of(e, (n = this.cache.find(dt)) === null || n === void 0 ? void 0 : n.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? Wr(t.line.dom) : t.line.dom), this.cache.reused.set(
      t.line,
      2
      /* Reused.DOM */
    ));
    let r = i;
    for (let a = t.marks.length - 1; a >= 0; a--) {
      let o = t.marks[a], h = r.lastChild;
      if (h instanceof fe && h.mark.eq(o.mark))
        h.dom != o.dom && h.setDOM(Wr(o.dom)), r = h;
      else {
        if (this.cache.reused.get(o)) {
          let c = H.get(o.dom);
          c && c.setDOM(Wr(o.dom));
        }
        let O = fe.of(o.mark, o.dom);
        r.append(O), r = O;
      }
      this.cache.reused.set(
        o,
        2
        /* Reused.DOM */
      );
    }
    let n = H.get(e.text);
    n && this.cache.reused.set(
      n,
      2
      /* Reused.DOM */
    );
    let l = new dt(e.text, e.text.nodeValue);
    l.flags |= 8, r.append(l);
  }
  addInlineWidget(e, t, i) {
    let r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    r || this.flushBuffer();
    let n = this.ensureMarks(t, i);
    !r && !(e.flags & 16) && n.append(this.getBuffer(1)), n.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer(), this.ensureMarks(t, i).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var i;
    e || (e = ko);
    let r = Xt.start(e, t || ((i = this.cache.find(Xt)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = r);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var i;
    let r = this.curLine;
    for (let n = e.length - 1; n >= 0; n--) {
      let l = e[n], a;
      if (t > 0 && (a = r.lastChild) && a instanceof fe && a.mark.eq(l))
        r = a, t--;
      else {
        let o = fe.of(l, (i = this.cache.find(fe, (h) => h.mark.eq(l))) === null || i === void 0 ? void 0 : i.dom);
        r.append(o), r = o, t = 0;
      }
    }
    return r;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !il(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(y.ios && il(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        jr,
        0,
        32
        /* TileFlag.After */
      ) || new Ct(
        jr.toDOM(),
        0,
        jr,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--)
      this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next())
      if (e.to >= this.pos) {
        let t = new sc(e.from, e.to, e.value, e.rank), i = this.wrappers.length;
        for (; i > 0 && (this.wrappers[i - 1].rank - t.rank || this.wrappers[i - 1].to - t.to) < 0; )
          i--;
        this.wrappers.splice(i, 0, t);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let r = t.lastChild;
      if (i.from < this.pos && r instanceof tt && r.wrapper.eq(i.wrapper))
        t = r;
      else {
        let n = tt.of(i.wrapper, (e = this.cache.find(tt, (l) => l.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(n), t = n;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), i = this.cache.find(
      ur,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = t), i || new ur(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class lc {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: r, lineBreak: n, done: l } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, l)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = r;
      let a = this.textOff = Math.min(e, r.length);
      return n ? null : r.slice(0, a);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const dr = [Ct, Xt, dt, fe, ur, tt, Rr];
for (let s = 0; s < dr.length; s++)
  dr[s].bucket = s;
class ac {
  constructor(e) {
    this.view = e, this.buckets = dr.map(() => []), this.index = dr.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(e) {
    let t = e.constructor.bucket, i = this.buckets[t];
    i.length < 6 ? i.push(e) : i[
      this.index[t] = (this.index[t] + 1) % 6
      /* C.Bucket */
    ] = e;
  }
  find(e, t, i = 2) {
    let r = e.bucket, n = this.buckets[r], l = this.index[r];
    for (let a = n.length - 1; a >= 0; a--) {
      let o = (a + l) % n.length, h = n[o];
      if ((!t || t(h)) && !this.reused.has(h))
        return n.splice(o, 1), o < l && this.index[r]--, this.reused.set(h, i), h;
    }
    return null;
  }
  findWidget(e, t, i) {
    let r = this.buckets[0];
    if (r.length)
      for (let n = 0, l = 0; ; n++) {
        if (n == r.length) {
          if (l)
            return null;
          l = 1, n = 0;
        }
        let a = r[n];
        if (!this.reused.has(a) && (l == 0 ? a.widget.compare(e) : a.widget.constructor == e.constructor && e.updateDOM(a.dom, this.view)))
          return r.splice(n, 1), n < this.index[0] && this.index[0]--, this.reused.set(
            a,
            1
            /* Reused.Full */
          ), a.length = t, a.flags = a.flags & -498 | i, a;
      }
  }
  reuse(e) {
    return this.reused.set(
      e,
      1
      /* Reused.Full */
    ), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e))
      return this.reused.set(e, t), e.dom;
  }
}
class oc {
  constructor(e, t, i, r, n) {
    this.view = e, this.decorations = r, this.disallowBlockEffectsFor = n, this.openWidget = !1, this.openMarks = 0, this.cache = new ac(e), this.text = new lc(e.state.doc), this.builder = new nc(this.cache, new Rr(e, e.contentDOM), V.iter(i)), this.cache.reused.set(
      t,
      2
      /* Reused.DOM */
    ), this.old = new rc(t), this.reuseWalker = {
      skip: (l, a, o) => {
        if (this.cache.add(l), l.isComposite())
          return !1;
      },
      enter: (l) => this.cache.add(l),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let r = 0, n = 0, l = 0; ; ) {
      let a = l < e.length ? e[l++] : null, o = a ? a.fromA : this.old.root.length;
      if (o > r) {
        let h = o - r;
        this.preserve(h, !l, !a), r = o, n += h;
      }
      if (!a)
        break;
      this.forward(a.fromA, a.toA), t && a.fromA <= t.range.fromA && a.toA >= t.range.toA ? (this.emit(n, t.range.fromB), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.emit(t.range.toB, a.toB)) : this.emit(n, a.toB), n = a.toB, r = a.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let r = cc(this.old), n = this.openMarks;
    this.old.advance(e, i ? 1 : -1, {
      skip: (l, a, o) => {
        if (l.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(o - a);
          else {
            let h = o > 0 || a < l.length ? Ct.of(l.widget, this.view, o - a, l.flags & 496, this.cache.maybeReuse(l)) : this.cache.reuse(l);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, r, n), n = r.length);
          }
        else if (l.isText())
          this.builder.ensureLine(null), !a && o == l.length ? this.builder.addText(l.text, r, n, this.cache.reuse(l)) : (this.cache.add(l), this.builder.addText(l.text.slice(a, o), r, n)), n = r.length;
        else if (l.isLine())
          l.flags &= -2, this.cache.reused.set(
            l,
            1
            /* Reused.Full */
          ), this.builder.addLine(l);
        else if (l instanceof ur)
          this.cache.add(l);
        else if (l instanceof fe)
          this.builder.ensureLine(null), this.builder.addMark(l, r, n), this.cache.reused.set(
            l,
            1
            /* Reused.Full */
          ), n = r.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (l) => {
        l.isLine() ? this.builder.addLineStart(l.attrs, this.cache.maybeReuse(l)) : (this.cache.add(l), l instanceof fe && r.unshift(l.mark)), this.openWidget = !1;
      },
      leave: (l) => {
        l.isLine() ? r.length && (r.length = n = 0) : l instanceof fe && (r.shift(), n = Math.min(n, r.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, r = this.builder, n = 0, l = V.spans(this.decorations, e, t, {
      point: (a, o, h, O, c, f) => {
        if (h instanceof pt) {
          if (this.disallowBlockEffectsFor[f]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (o > this.view.state.doc.lineAt(a).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (n = O.length, c > O.length)
            r.continueWidget(o - a);
          else {
            let u = h.widget || (h.block ? At.block : At.inline), d = hc(h), p = this.cache.findWidget(u, o - a, d) || Ct.of(u, this.view, o - a, d);
            h.block ? (h.startSide > 0 && r.addLineStartIfNotCovered(i), r.addBlockWidget(p)) : (r.ensureLine(i), r.addInlineWidget(p, O, c));
          }
          i = null;
        } else
          i = Oc(i, h);
        o > a && this.text.skip(o - a);
      },
      span: (a, o, h, O) => {
        for (let c = a; c < o; ) {
          let f = this.text.next(Math.min(512, o - c));
          f == null ? (r.addLineStartIfNotCovered(i), r.addBreak(), c++) : (r.ensureLine(i), r.addText(f, h, O), c += f.length), i = null;
        }
      }
    });
    r.addLineStartIfNotCovered(i), this.openWidget = l > n, this.openMarks = l;
  }
  forward(e, t) {
    t - e <= 10 ? this.old.advance(t - e, 1, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, 1, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let r = e.parentNode; ; r = r.parentNode) {
      let n = H.get(r);
      if (r == this.view.contentDOM)
        break;
      n instanceof fe ? t.push(n) : n != null && n.isLine() ? i = n : r.nodeName == "DIV" && !i && r != this.view.contentDOM ? i = new Xt(r, ko) : t.push(fe.of(new $i({ tagName: r.nodeName.toLowerCase(), attributes: MO(r) }), r));
    }
    return { line: i, marks: t };
  }
}
function il(s, e) {
  let t = (i) => {
    for (let r of i.children)
      if ((e ? r.isText() : r.length) || t(r))
        return !0;
    return !1;
  };
  return t(s);
}
function hc(s) {
  let e = s.isReplace ? (s.startSide < 0 ? 64 : 0) | (s.endSide > 0 ? 128 : 0) : s.startSide > 0 ? 32 : 16;
  return s.block && (e |= 256), e;
}
const ko = { class: "cm-line" };
function Oc(s, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (s || (s = { class: "cm-line" }), t && ln(t, s), i && (s.class += " " + i)), s;
}
function cc(s) {
  let e = [];
  for (let t = s.parents.length; t > 1; t--) {
    let i = t == s.parents.length ? s.tile : s.parents[t].tile;
    i instanceof fe && e.push(i.mark);
  }
  return e;
}
function Wr(s) {
  let e = H.get(s);
  return e && e.setDOM(s.cloneNode()), s;
}
class At extends yi {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
At.inline = /* @__PURE__ */ new At("span");
At.block = /* @__PURE__ */ new At("div");
const jr = /* @__PURE__ */ new class extends yi {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class rl {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = E.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Rr(e, e.contentDOM), this.updateInner([new ke(0, 0, 0, e.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: O, toA: c }) => c < this.minWidthFrom || O > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? r = this.domChanged.newSel.head : !bc(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let n = r > -1 ? uc(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: O, to: c } = this.hasComposition;
      i = new ke(O, c, e.changes.mapPos(O, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = n ? { from: n.range.fromB, to: n.range.toB } : null, (y.ie || y.chrome) && !n && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let l = this.decorations, a = this.blockWrappers;
    this.updateDeco();
    let o = gc(l, this.decorations, e.changes);
    o.length && (i = ke.extendWithRanges(i, o));
    let h = Qc(a, this.blockWrappers, e.changes);
    return h.length && (i = ke.extendWithRanges(i, h)), n && !i.some((O) => O.fromA <= n.range.fromA && O.toA >= n.range.toA) && (i = n.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, n), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let l = this.tile, a = new oc(this.view, l, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        this.tile = a.run(e, t), Ys(l, a.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let n = y.chrome || y.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(n), n && (n.written || i.selectionRange.focusNode != n.node || !this.tile.dom.contains(n.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let n of this.tile.children)
        n.isWidget() && n.widget instanceof Ir && r.push(n.dom);
    i.updateGaps(r);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(uo) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, r = this.view.root.activeElement, n = r == i, l = !n && !(this.view.state.facet(je) || i.tabIndex > -1) && Ki(i, this.view.observer.selectionRange) && !(r && i.contains(r));
    if (!(n || t || l))
      return;
    let a = this.forceSelection;
    this.forceSelection = !1;
    let o = this.view.state.selection.main, h, O;
    if (o.empty ? O = h = this.inlineDOMNearPos(o.anchor, o.assoc || 1) : (O = this.inlineDOMNearPos(o.head, o.head == o.from ? 1 : -1), h = this.inlineDOMNearPos(o.anchor, o.anchor == o.from ? 1 : -1)), y.gecko && o.empty && !this.hasComposition && fc(h)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(f, h.node.childNodes[h.offset] || null)), h = O = new ve(f, 0), a = !0;
    }
    let c = this.view.observer.selectionRange;
    (a || !c.focusNode || (!si(h.node, h.offset, c.anchorNode, c.anchorOffset) || !si(O.node, O.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, o)) && (this.view.observer.ignore(() => {
      y.android && y.chrome && i.contains(c.focusNode) && Sc(c.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let f = ui(this.view.root);
      if (f) if (o.empty) {
        if (y.gecko) {
          let u = dc(h.node, h.offset);
          if (u && u != 3) {
            let d = (u == 1 ? Ka : Ja)(h.node, h.offset);
            d && (h = new ve(d.node, d.offset));
          }
        }
        f.collapse(h.node, h.offset), o.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = o.bidiLevel);
      } else if (f.extend) {
        f.collapse(h.node, h.offset);
        try {
          f.extend(O.node, O.offset);
        } catch {
        }
      } else {
        let u = document.createRange();
        o.anchor > o.head && ([h, O] = [O, h]), u.setEnd(O.node, O.offset), u.setStart(h.node, h.offset), f.removeAllRanges(), f.addRange(u);
      }
      l && this.view.root.activeElement == i && (i.blur(), r && r.focus());
    }), this.view.observer.setSelectionRange(h, O)), this.impreciseAnchor = h.precise ? null : new ve(c.anchorNode, c.anchorOffset), this.impreciseHead = O.precise ? null : new ve(c.focusNode, c.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && si(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = ui(e.root), { anchorNode: r, anchorOffset: n } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let l = this.lineAt(t.head, t.assoc);
    if (!l)
      return;
    let a = l.posAtStart;
    if (t.head == a || t.head == a + l.length)
      return;
    let o = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!o || !h || o.bottom > h.top)
      return;
    let O = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(O.node, O.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let c = e.observer.selectionRange;
    e.docView.posFromDOM(c.anchorNode, c.anchorOffset) != t.from && i.collapse(r, n);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i)
      return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let r = i.posAtStart;
    if (i.isComposite()) {
      let n;
      if (e == i.dom)
        n = i.dom.childNodes[t];
      else {
        let l = Ne(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let a = e.parentNode;
          if (a == i.dom)
            break;
          l == 0 && a.firstChild != a.lastChild && (e == a.firstChild ? l = -1 : l = 1), e = a;
        }
        l < 0 ? n = e : n = e.nextSibling;
      }
      if (n == i.dom.firstChild)
        return r;
      for (; n && !H.get(n); )
        n = n.nextSibling;
      if (!n)
        return r + i.length;
      for (let l = 0, a = r; ; l++) {
        let o = i.children[l];
        if (o.dom == n)
          return a;
        a += o.length + o.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? r + t : r + (t ? i.length : 0) : r;
  }
  domAtPos(e, t) {
    let { tile: i, offset: r } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(r, t);
  }
  inlineDOMNearPos(e, t) {
    let i, r = -1, n = !1, l, a = -1, o = !1;
    return this.tile.blockTiles((h, O) => {
      if (h.isWidget()) {
        if (h.flags & 32 && O >= e)
          return !0;
        h.flags & 16 && (n = !0);
      } else {
        let c = O + h.length;
        if (O <= e && (i = h, r = e - O, n = c < e), c >= e && !l && (l = h, a = e - O, o = O > e), O > e && l)
          return !0;
      }
    }), !i && !l ? this.domAtPos(e, t) : (n && l ? i = null : o && i && (l = null), i && t < 0 || !l ? i.domIn(r, t) : l.domIn(a, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: r } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof Ir ? null : i.coordsInWidget(r, t, !0) : i.coordsIn(r, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine())
      return null;
    function r(n, l) {
      if (n.isComposite())
        for (let a of n.children) {
          if (a.length >= l) {
            let o = r(a, l);
            if (o)
              return o;
          }
          if (l -= a.length, l < 0)
            break;
        }
      else if (n.isText() && l < n.length) {
        let a = be(n.text, l);
        if (a == l)
          return null;
        let o = di(n.dom, l, a).getClientRects();
        for (let h = 0; h < o.length; h++) {
          let O = o[h];
          if (h == o.length - 1 || O.top < O.bottom && O.left < O.right)
            return O;
        }
      }
      return null;
    }
    return r(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: r } = e, n = this.view.contentDOM.clientWidth, l = n > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, a = -1, o = this.view.textDirection == K.LTR, h = 0, O = (c, f, u) => {
      for (let d = 0; d < c.children.length && !(f > r); d++) {
        let p = c.children[d], m = f + p.length, Q = p.dom.getBoundingClientRect(), { height: k } = Q;
        if (u && !d && (h += Q.top - u.top), p instanceof tt)
          m > i && O(p, f, Q);
        else if (f >= i && (h > 0 && t.push(-h), t.push(k + h), h = 0, l)) {
          let w = p.dom.lastChild, A = w ? Ji(w) : [];
          if (A.length) {
            let v = A[A.length - 1], T = o ? v.right - Q.left : Q.right - v.left;
            T > a && (a = T, this.minWidth = n, this.minWidthFrom = f, this.minWidthTo = m);
          }
        }
        u && d == c.children.length - 1 && (h += u.bottom - Q.bottom), f = m + p.breakAfter;
      }
    };
    return O(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? K.RTL : K.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((l) => {
      if (l.isLine() && l.children.length && l.length <= 20) {
        let a = 0, o;
        for (let h of l.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let O = Ji(h.dom);
          if (O.length != 1)
            return;
          a += O[0].width, o = O[0].height;
        }
        if (a)
          return {
            lineHeight: l.dom.getBoundingClientRect().height,
            charWidth: a / l.length,
            textHeight: o
          };
      }
    });
    if (e)
      return e;
    let t = document.createElement("div"), i, r, n;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let l = Ji(t.firstChild)[0];
      i = t.getBoundingClientRect().height, r = l && l.width ? l.width / 27 : 7, n = l && l.height ? l.height : i, t.remove();
    }), { lineHeight: i, charWidth: r, textHeight: n };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let n = r == t.viewports.length ? null : t.viewports[r], l = n ? n.from - 1 : this.view.state.doc.length;
      if (l > i) {
        let a = (t.lineBlockAt(l).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(E.replace({
          widget: new Ir(a),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, l));
      }
      if (!n)
        break;
      i = n.to + 1;
    }
    return E.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(pi).map((n) => (this.dynamicDecorationMap[e++] = typeof n == "function") ? n(this.view) : n), i = !1, r = this.view.state.facet(mo).map((n, l) => {
      let a = typeof n == "function";
      return a && (i = !0), a ? n(this.view) : n;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = i, t.push(V.join(r))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    this.blockWrappers = this.view.state.facet(go).map((n) => typeof n == "function" ? n(this.view) : n);
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(fo))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (O) {
        _e(this.view.state, O, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!i)
      return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, r.left),
      top: Math.min(i.top, r.top),
      right: Math.max(i.right, r.right),
      bottom: Math.max(i.bottom, r.bottom)
    });
    let n = bo(this.view), l = {
      left: i.left - n.left,
      top: i.top - n.top,
      right: i.right + n.right,
      bottom: i.bottom + n.bottom
    }, { offsetWidth: a, offsetHeight: o } = this.view.scrollDOM;
    LO(this.view.scrollDOM, l, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, a), -a), Math.max(Math.min(e.yMargin, o), -o), this.view.textDirection == K.LTR);
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    Ys(this.tile);
  }
}
function Ys(s, e) {
  let t = e == null ? void 0 : e.get(s);
  if (t != 1) {
    t == null && s.destroy();
    for (let i of s.children)
      Ys(i, e);
  }
}
function fc(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function xo(s, e) {
  let t = s.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = Ka(t.focusNode, t.focusOffset), r = Ja(t.focusNode, t.focusOffset), n = i || r;
  if (r && i && r.node != i.node) {
    let a = H.get(r.node);
    if (!a || a.isText() && a.text != r.node.nodeValue)
      n = r;
    else if (s.docView.lastCompositionAfterCursor) {
      let o = H.get(i.node);
      !o || o.isText() && o.text != i.node.nodeValue || (n = r);
    }
  }
  if (s.docView.lastCompositionAfterCursor = n != i, !n)
    return null;
  let l = e - n.offset;
  return { from: l, to: l + n.node.nodeValue.length, node: n.node };
}
function uc(s, e, t) {
  let i = xo(s, t);
  if (!i)
    return null;
  let { node: r, from: n, to: l } = i, a = r.nodeValue;
  if (/[\n\r]/.test(a) || s.state.doc.sliceString(i.from, i.to) != a)
    return null;
  let o = e.invertedDesc;
  return { range: new ke(o.mapPos(n), o.mapPos(l), n, l), text: r };
}
function dc(s, e) {
  return s.nodeType != 1 ? 0 : (e && s.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < s.childNodes.length && s.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let pc = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    wt(e, t, this.changes);
  }
  comparePoint(e, t) {
    wt(e, t, this.changes);
  }
  boundChange(e) {
    wt(e, e, this.changes);
  }
};
function gc(s, e, t) {
  let i = new pc();
  return V.compare(s, e, t, i), i.changes;
}
class mc {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    wt(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    wt(e, e, this.changes);
  }
}
function Qc(s, e, t) {
  let i = new mc();
  return V.compare(s, e, t, i), i.changes;
}
function Sc(s, e) {
  for (let t = s; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
function bc(s, e) {
  let t = !1;
  return e && s.iterChangedRanges((i, r) => {
    i < e.to && r > e.from && (t = !0);
  }), t;
}
class Ir extends yi {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function kc(s, e, t = 1) {
  let i = s.charCategorizer(e), r = s.doc.lineAt(e), n = e - r.from;
  if (r.length == 0)
    return x.cursor(e);
  n == 0 ? t = 1 : n == r.length && (t = -1);
  let l = n, a = n;
  t < 0 ? l = be(r.text, n, !1) : a = be(r.text, n);
  let o = i(r.text.slice(l, a));
  for (; l > 0; ) {
    let h = be(r.text, l, !1);
    if (i(r.text.slice(h, l)) != o)
      break;
    l = h;
  }
  for (; a < r.length; ) {
    let h = be(r.text, a);
    if (i(r.text.slice(a, h)) != o)
      break;
    a = h;
  }
  return x.range(l + r.from, a + r.from);
}
function xc(s, e, t, i, r) {
  let n = Math.round((i - e.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && t.height > s.defaultLineHeight * 1.5) {
    let a = s.viewState.heightOracle.textHeight, o = Math.floor((r - t.top - (s.defaultLineHeight - a) * 0.5) / a);
    n += o * s.viewState.heightOracle.lineLength;
  }
  let l = s.state.sliceDoc(t.from, t.to);
  return t.from + TO(l, n, s.state.tabSize);
}
function wc(s, e, t) {
  let i = s.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let r;
    for (let n of i.type) {
      if (n.from > e)
        break;
      if (!(n.to < e)) {
        if (n.from < e && n.to > e)
          return n;
        (!r || n.type == we.Text && (r.type != n.type || (t < 0 ? n.from < e : n.to > e))) && (r = n);
      }
    }
    return r || i;
  }
  return i;
}
function yc(s, e, t, i) {
  let r = wc(s, e.head, e.assoc || -1), n = !i || r.type != we.Text || !(s.lineWrapping || r.widgetLineBreaks) ? null : s.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (n) {
    let l = s.dom.getBoundingClientRect(), a = s.textDirectionAt(r.from), o = s.posAtCoords({
      x: t == (a == K.LTR) ? l.right - 1 : l.left + 1,
      y: (n.top + n.bottom) / 2
    });
    if (o != null)
      return x.cursor(o, t ? -1 : 1);
  }
  return x.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function sl(s, e, t, i) {
  let r = s.state.doc.lineAt(e.head), n = s.bidiSpans(r), l = s.textDirectionAt(r.from);
  for (let a = e, o = null; ; ) {
    let h = FO(r, n, l, a, t), O = so;
    if (!h) {
      if (r.number == (t ? s.state.doc.lines : 1))
        return a;
      O = `
`, r = s.state.doc.line(r.number + (t ? 1 : -1)), n = s.bidiSpans(r), h = s.visualLineSide(r, !t);
    }
    if (o) {
      if (!o(O))
        return a;
    } else {
      if (!i)
        return h;
      o = i(O);
    }
    a = h;
  }
}
function $c(s, e, t) {
  let i = s.state.charCategorizer(e), r = i(t);
  return (n) => {
    let l = i(n);
    return r == Ie.Space && (r = l), r == l;
  };
}
function Pc(s, e, t, i) {
  let r = e.head, n = t ? 1 : -1;
  if (r == (t ? s.state.doc.length : 0))
    return x.cursor(r, e.assoc);
  let l = e.goalColumn, a, o = s.contentDOM.getBoundingClientRect(), h = s.coordsAtPos(r, e.assoc || -1), O = s.documentTop;
  if (h)
    l == null && (l = h.left - o.left), a = n < 0 ? h.top : h.bottom;
  else {
    let u = s.viewState.lineBlockAt(r);
    l == null && (l = Math.min(o.right - o.left, s.defaultCharacterWidth * (r - u.from))), a = (n < 0 ? u.top : u.bottom) + O;
  }
  let c = o.left + l, f = i ?? s.viewState.heightOracle.textHeight >> 1;
  for (let u = 0; ; u += 10) {
    let d = a + (f + u) * n, p = _s(s, { x: c, y: d }, !1, n);
    return x.cursor(p.pos, p.assoc, void 0, l);
  }
}
function ni(s, e, t) {
  for (; ; ) {
    let i = 0;
    for (let r of s)
      r.between(e - 1, e + 1, (n, l, a) => {
        if (e > n && e < l) {
          let o = i || t || (e - n < l - e ? -1 : 1);
          e = o < 0 ? n : l, i = o;
        }
      });
    if (!i)
      return e;
  }
}
function wo(s, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let r = e.ranges[i], n = null;
    if (r.empty) {
      let l = ni(s, r.from, 0);
      l != r.from && (n = x.cursor(l, -1));
    } else {
      let l = ni(s, r.from, -1), a = ni(s, r.to, 1);
      (l != r.from || a != r.to) && (n = x.range(r.from == r.anchor ? l : a, r.from == r.head ? l : a));
    }
    n && (t || (t = e.ranges.slice()), t[i] = n);
  }
  return t ? x.create(t, e.mainIndex) : e;
}
function Br(s, e, t) {
  let i = ni(s.state.facet(vi).map((r) => r(s)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : x.cursor(i, i < t.from ? 1 : -1);
}
class Ye {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function _s(s, e, t, i) {
  let r = s.contentDOM.getBoundingClientRect(), n = r.top + s.viewState.paddingTop, { x: l, y: a } = e, o = a - n, h;
  for (; ; ) {
    if (o < 0)
      return new Ye(0, 1);
    if (o > s.viewState.docHeight)
      return new Ye(s.state.doc.length, -1);
    if (h = s.elementAtHeight(o), i == null)
      break;
    if (h.type == we.Text) {
      let f = s.docView.coordsAt(i < 0 ? h.from : h.to, i);
      if (f && (i < 0 ? f.top <= o + n : f.bottom >= o + n))
        break;
    }
    let c = s.viewState.heightOracle.textHeight / 2;
    o = i > 0 ? h.bottom + c : h.top - c;
  }
  if (s.viewport.from >= h.to || s.viewport.to <= h.from) {
    if (t)
      return null;
    if (h.type == we.Text) {
      let c = xc(s, r, h, l, a);
      return new Ye(c, c == h.from ? 1 : -1);
    }
  }
  if (h.type != we.Text)
    return o < (h.top + h.bottom) / 2 ? new Ye(h.from, 1) : new Ye(h.to, -1);
  let O = s.docView.lineAt(h.from, 2);
  return (!O || O.length != h.length) && (O = s.docView.lineAt(h.from, -2)), yo(s, O, h.from, l, a);
}
function yo(s, e, t, i, r) {
  let n = -1, l = null, a = 1e9, o = 1e9, h = r, O = r, c = (f, u) => {
    for (let d = 0; d < f.length; d++) {
      let p = f[d];
      if (p.top == p.bottom)
        continue;
      let m = p.left > i ? p.left - i : p.right < i ? i - p.right : 0, Q = p.top > r ? p.top - r : p.bottom < r ? r - p.bottom : 0;
      p.top <= O && p.bottom >= h && (h = Math.min(p.top, h), O = Math.max(p.bottom, O), Q = 0), (n < 0 || (Q - o || m - a) < 0) && (n >= 0 && o && a < m && l.top <= O - 2 && l.bottom >= h + 2 ? o = 0 : (n = u, a = m, o = Q, l = p));
    }
  };
  if (e.isText()) {
    for (let u = 0; u < e.length; ) {
      let d = be(e.text, u);
      if (c(di(e.dom, u, d).getClientRects(), u), !a && !o)
        break;
      u = d;
    }
    return i > (l.left + l.right) / 2 == (nl(s, n + t) == K.LTR) ? new Ye(t + be(e.text, n), -1) : new Ye(t + n, 1);
  } else {
    if (!e.length)
      return new Ye(t, 1);
    for (let p = 0; p < e.children.length; p++) {
      let m = e.children[p];
      if (m.flags & 48)
        continue;
      let Q = (m.dom.nodeType == 1 ? m.dom : di(m.dom, 0, m.length)).getClientRects();
      if (c(Q, p), !a && !o)
        break;
    }
    let f = e.children[n], u = e.posBefore(f, t);
    return f.isComposite() || f.isText() ? yo(s, f, u, Math.max(l.left, Math.min(l.right, i)), r) : i > (l.left + l.right) / 2 == (nl(s, n + t) == K.LTR) ? new Ye(u + f.length, -1) : new Ye(u, 1);
  }
}
function nl(s, e) {
  let t = s.state.doc.lineAt(e);
  return s.bidiSpans(t)[Be.find(s.bidiSpans(t), e - t.from, -1, 1)].dir;
}
const Jt = "￿";
class vc {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(L.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Jt;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let n = this.text.length;
      this.readNode(r);
      let l = H.get(r), a = r.nextSibling;
      if (a == t) {
        l != null && l.breakAfter && !a && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let o = H.get(a);
      (l && o ? l.breakAfter : (l ? l.breakAfter : Or(r)) || Or(a) && (r.nodeName != "BR" || l != null && l.isWidget()) && this.text.length > n) && !Zc(a, t) && this.lineBreak(), r = a;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let n = -1, l = 1, a;
      if (this.lineSeparator ? (n = t.indexOf(this.lineSeparator, i), l = this.lineSeparator.length) : (a = r.exec(t)) && (n = a.index, l = a[0].length), this.append(t.slice(i, n < 0 ? t.length : n)), n < 0)
        break;
      if (this.lineBreak(), l > 1)
        for (let o of this.points)
          o.node == e && o.pos > this.text.length && (o.pos -= l - 1);
      i = n + l;
    }
  }
  readNode(e) {
    let t = H.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Tc(e, i.node, i.offset) ? t : 0));
  }
}
function Tc(s, e, t) {
  for (; ; ) {
    if (!e || t < Ne(e))
      return !1;
    if (e == s)
      return !0;
    t = st(e) + 1, e = e.parentNode;
  }
}
function Zc(s, e) {
  let t;
  for (; !(s == e || !s); s = s.nextSibling) {
    let i = H.get(s);
    if (!(i != null && i.isWidget()))
      return !1;
    i && (t || (t = [])).push(i);
  }
  if (t)
    for (let i of t) {
      let r = i.overrideDOMText;
      if (r != null && r.length)
        return !1;
    }
  return !0;
}
class ll {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Xc {
  constructor(e, t, i, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: n, impreciseAnchor: l } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = $o(e.docView.tile, t, i, 0))) {
      let a = n || l ? [] : Ac(e), o = new vc(a, e);
      o.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = o.text, this.newSel = Rc(a, this.bounds.from);
    } else {
      let a = e.observer.selectionRange, o = n && n.node == a.focusNode && n.offset == a.focusOffset || !Cs(e.contentDOM, a.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(a.focusNode, a.focusOffset), h = l && l.node == a.anchorNode && l.offset == a.anchorOffset || !Cs(e.contentDOM, a.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(a.anchorNode, a.anchorOffset), O = e.viewport;
      if ((y.ios || y.chrome) && e.state.selection.main.empty && o != h && (O.from > 0 || O.to < e.state.doc.length)) {
        let c = Math.min(o, h), f = Math.max(o, h), u = O.from - c, d = O.to - f;
        (u == 0 || u == 1 || c == 0) && (d == 0 || d == -1 || f == e.state.doc.length) && (o = 0, h = e.state.doc.length);
      }
      e.inputState.composing > -1 && e.state.selection.ranges.length > 1 ? this.newSel = e.state.selection.replaceRange(x.range(h, o)) : this.newSel = x.single(h, o);
    }
  }
}
function $o(s, e, t, i) {
  if (s.isComposite()) {
    let r = -1, n = -1, l = -1, a = -1;
    for (let o = 0, h = i, O = i; o < s.children.length; o++) {
      let c = s.children[o], f = h + c.length;
      if (h < e && f > t)
        return $o(c, e, t, h);
      if (f >= e && r == -1 && (r = o, n = h), h > t && c.dom.parentNode == s.dom) {
        l = o, a = O;
        break;
      }
      O = f, h = f + c.breakAfter;
    }
    return {
      from: n,
      to: a < 0 ? i + s.length : a,
      startDOM: (r ? s.children[r - 1].dom.nextSibling : null) || s.dom.firstChild,
      endDOM: l < s.children.length && l >= 0 ? s.children[l].dom : null
    };
  } else return s.isText() ? { from: i, to: i + s.length, startDOM: s.dom, endDOM: s.dom.nextSibling } : null;
}
function Po(s, e) {
  let t, { newSel: i } = e, r = s.state.selection.main, n = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: l, to: a } = e.bounds, o = r.from, h = null;
    (n === 8 || y.android && e.text.length < a - l) && (o = r.to, h = "end");
    let O = vo(s.state.doc.sliceString(l, a, Jt), e.text, o - l, h);
    O && (y.chrome && n == 13 && O.toB == O.from + 2 && e.text.slice(O.from, O.toB) == Jt + Jt && O.toB--, t = {
      from: l + O.from,
      to: l + O.toA,
      insert: Y.of(e.text.slice(O.from, O.toB).split(Jt))
    });
  } else i && (!s.hasFocus && s.state.facet(je) || i.main.eq(r)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !r.empty && i && i.main.empty ? t = { from: r.from, to: r.to, insert: s.state.doc.slice(r.from, r.to) } : (y.mac || y.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = x.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: Y.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = {
    from: r.from,
    to: r.to,
    insert: s.state.doc.slice(r.from, t.from).append(t.insert).append(s.state.doc.slice(t.to, r.to))
  } : s.state.doc.lineAt(r.from).to < r.to && s.docView.lineHasWidget(r.to) && s.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: r.from,
    to: r.to,
    insert: s.state.toText(s.inputState.insertingText)
  } : y.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && s.lineWrapping && (i && (i = x.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: Y.of([" "]) }), t)
    return fn(s, t, i, n);
  if (i && !i.main.eq(r)) {
    let l = !1, a = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (l = !0), a = s.inputState.lastSelectionOrigin, a == "select.pointer" && (i = wo(s.state.facet(vi).map((o) => o(s)), i))), s.dispatch({ selection: i, scrollIntoView: l, userEvent: a }), !0;
  } else
    return !1;
}
function fn(s, e, t, i = -1) {
  if (y.ios && s.inputState.flushIOSKey(e))
    return !0;
  let r = s.state.selection.main;
  if (y.android && (e.to == r.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == r.from || e.from == r.from - 1 && s.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && yt(s.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > r.head) && yt(s.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && yt(s.contentDOM, "Delete", 46)))
    return !0;
  let n = e.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let l, a = () => l || (l = Cc(s, e, t));
  return s.state.facet(ho).some((o) => o(s, e.from, e.to, n, a)) || s.dispatch(a()), !0;
}
function Cc(s, e, t) {
  let i, r = s.state, n = r.selection.main, l = -1;
  if (e.from == e.to && e.from < n.from || e.from > n.to) {
    let o = e.from < n.from ? -1 : 1, h = o < 0 ? n.from : n.to, O = ni(r.facet(vi).map((c) => c(s)), h, o);
    e.from == O && (l = O);
  }
  if (l > -1)
    i = {
      changes: e,
      selection: x.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= n.from && e.to <= n.to && e.to - e.from >= (n.to - n.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && s.inputState.composing < 0) {
    let o = n.from < e.from ? r.sliceDoc(n.from, e.from) : "", h = n.to > e.to ? r.sliceDoc(e.to, n.to) : "";
    i = r.replaceSelection(s.state.toText(o + e.insert.sliceString(0, void 0, s.state.lineBreak) + h));
  } else {
    let o = r.changes(e), h = t && t.main.to <= o.newLength ? t.main : void 0;
    if (r.selection.ranges.length > 1 && (s.inputState.composing >= 0 || s.inputState.compositionPendingChange) && e.to <= n.to + 10 && e.to >= n.to - 10) {
      let O = s.state.sliceDoc(e.from, e.to), c, f = t && xo(s, t.main.head);
      if (f) {
        let d = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - d };
      } else
        c = s.state.doc.lineAt(n.head);
      let u = n.to - e.to;
      i = r.changeByRange((d) => {
        if (d.from == n.from && d.to == n.to)
          return { changes: o, range: h || d.map(o) };
        let p = d.to - u, m = p - O.length;
        if (s.state.sliceDoc(m, p) != O || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p >= c.from && m <= c.to)
          return { range: d };
        let Q = r.changes({ from: m, to: p, insert: e.insert }), k = d.to - n.to;
        return {
          changes: Q,
          range: h ? x.range(Math.max(0, h.anchor + k), Math.max(0, h.head + k)) : d.map(Q)
        };
      });
    } else
      i = {
        changes: o,
        selection: h && r.selection.replaceRange(h)
      };
  }
  let a = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, a += ".compose", s.inputState.compositionFirstChange && (a += ".start", s.inputState.compositionFirstChange = !1)), r.update(i, { userEvent: a, scrollIntoView: !0 });
}
function vo(s, e, t, i) {
  let r = Math.min(s.length, e.length), n = 0;
  for (; n < r && s.charCodeAt(n) == e.charCodeAt(n); )
    n++;
  if (n == r && s.length == e.length)
    return null;
  let l = s.length, a = e.length;
  for (; l > 0 && a > 0 && s.charCodeAt(l - 1) == e.charCodeAt(a - 1); )
    l--, a--;
  if (i == "end") {
    let o = Math.max(0, n - Math.min(l, a));
    t -= l + o - n;
  }
  if (l < n && s.length < e.length) {
    let o = t <= n && t >= l ? n - t : 0;
    n -= o, a = n + (a - l), l = n;
  } else if (a < n) {
    let o = t <= n && t >= a ? n - t : 0;
    n -= o, l = n + (l - a), a = n;
  }
  return { from: n, toA: l, toB: a };
}
function Ac(s) {
  let e = [];
  if (s.root.activeElement != s.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: n } = s.observer.selectionRange;
  return t && (e.push(new ll(t, i)), (r != t || n != i) && e.push(new ll(r, n))), e;
}
function Rc(s, e) {
  if (s.length == 0)
    return null;
  let t = s[0].pos, i = s.length == 2 ? s[1].pos : t;
  return t > -1 && i > -1 ? x.single(t + e, i + e) : null;
}
class zc {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, y.safari && e.contentDOM.addEventListener("input", () => null), y.gecko && Uc(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Wc(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let r of i.observers)
        r(this.view, t);
      for (let r of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (r(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Mc(e), i = this.handlers, r = this.view.contentDOM;
    for (let n in t)
      if (n != "scroll") {
        let l = !t[n].handlers.length, a = i[n];
        a && l != !a.handlers.length && (r.removeEventListener(n, this.handleEvent), a = null), a || r.addEventListener(n, this.handleEvent, { passive: l });
      }
    for (let n in i)
      n != "scroll" && !t[n] && r.removeEventListener(n, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Zo.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), y.android && y.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return y.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = To.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Yc.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, yt(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : y.safari && !y.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function al(s, e) {
  return (t, i) => {
    try {
      return e.call(s, i, t);
    } catch (r) {
      _e(t.state, r);
    }
  };
}
function Mc(s) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let r = i.spec, n = r && r.plugin.domEventHandlers, l = r && r.plugin.domEventObservers;
    if (n)
      for (let a in n) {
        let o = n[a];
        o && t(a).handlers.push(al(i.value, o));
      }
    if (l)
      for (let a in l) {
        let o = l[a];
        o && t(a).observers.push(al(i.value, o));
      }
  }
  for (let i in Ze)
    t(i).handlers.push(Ze[i]);
  for (let i in ye)
    t(i).observers.push(ye[i]);
  return e;
}
const To = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], Yc = "dthko", Zo = [16, 17, 18, 20, 91, 92, 224, 225], _i = 6;
function Li(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function _c(s, e) {
  return Math.max(Math.abs(s.clientX - e.clientX), Math.abs(s.clientY - e.clientY));
}
class Lc {
  constructor(e, t, i, r) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = EO(e.contentDOM), this.atoms = e.state.facet(vi).map((l) => l(e));
    let n = e.contentDOM.ownerDocument;
    n.addEventListener("mousemove", this.move = this.move.bind(this)), n.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(L.allowMultipleSelections) && Ec(e, t), this.dragging = Vc(e, t) && Ao(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && _c(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, r = 0, n = 0, l = this.view.win.innerWidth, a = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: l } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: n, bottom: a } = this.scrollParents.y.getBoundingClientRect());
    let o = bo(this.view);
    e.clientX - o.left <= r + _i ? t = -Li(r - e.clientX) : e.clientX + o.right >= l - _i && (t = Li(e.clientX - l)), e.clientY - o.top <= n + _i ? i = -Li(n - e.clientY) : e.clientY + o.bottom >= a - _i && (i = Li(e.clientY - a)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = wo(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Ec(s, e) {
  let t = s.state.facet(no);
  return t.length ? t[0](e) : y.mac ? e.metaKey : e.ctrlKey;
}
function qc(s, e) {
  let t = s.state.facet(lo);
  return t.length ? t[0](e) : y.mac ? !e.altKey : !e.ctrlKey;
}
function Vc(s, e) {
  let { main: t } = s.state.selection;
  if (t.empty)
    return !1;
  let i = ui(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let r = i.getRangeAt(0).getClientRects();
  for (let n = 0; n < r.length; n++) {
    let l = r[n];
    if (l.left <= e.clientX && l.right >= e.clientX && l.top <= e.clientY && l.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function Wc(s, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != s.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = H.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e))
      return !1;
  return !0;
}
const Ze = /* @__PURE__ */ Object.create(null), ye = /* @__PURE__ */ Object.create(null), Xo = y.ie && y.ie_version < 15 || y.ios && y.webkit_version < 604;
function jc(s) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    s.focus(), t.remove(), Co(s, t.value);
  }, 50);
}
function zr(s, e, t) {
  for (let i of s.facet(e))
    t = i(t, s);
  return t;
}
function Co(s, e) {
  e = zr(s.state, hn, e);
  let { state: t } = s, i, r = 1, n = t.toText(e), l = n.lines == t.selection.ranges.length;
  if (Ls != null && t.selection.ranges.every((o) => o.empty) && Ls == n.toString()) {
    let o = -1;
    i = t.changeByRange((h) => {
      let O = t.doc.lineAt(h.from);
      if (O.from == o)
        return { range: h };
      o = O.from;
      let c = t.toText((l ? n.line(r++).text : e) + t.lineBreak);
      return {
        changes: { from: O.from, insert: c },
        range: x.cursor(h.from + c.length)
      };
    });
  } else l ? i = t.changeByRange((o) => {
    let h = n.line(r++);
    return {
      changes: { from: o.from, to: o.to, insert: h.text },
      range: x.cursor(o.from + h.length)
    };
  }) : i = t.replaceSelection(n);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
ye.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
Ze.keydown = (s, e) => (s.inputState.setSelectionOrigin("select"), e.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
ye.touchstart = (s, e) => {
  s.inputState.lastTouchTime = Date.now(), s.inputState.setSelectionOrigin("select.pointer");
};
ye.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
Ze.mousedown = (s, e) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of s.state.facet(ao))
    if (t = i(s, e), t)
      break;
  if (!t && e.button == 0 && (t = Bc(s, e)), t) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new Lc(s, e, t, i)), i && s.observer.ignore(() => {
      Fa(s.contentDOM);
      let n = s.root.activeElement;
      n && !n.contains(s.contentDOM) && n.blur();
    });
    let r = s.inputState.mouseSelection;
    if (r)
      return r.start(e), r.dragging === !1;
  } else
    s.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function ol(s, e, t, i) {
  if (i == 1)
    return x.cursor(e, t);
  if (i == 2)
    return kc(s.state, e, t);
  {
    let r = s.docView.lineAt(e, t), n = s.state.doc.lineAt(r ? r.posAtEnd : e), l = r ? r.posAtStart : n.from, a = r ? r.posAtEnd : n.to;
    return a < s.state.doc.length && a == n.to && a++, x.range(l, a);
  }
}
const Ic = y.ie && y.ie_version <= 11;
let hl = null, Ol = 0, cl = 0;
function Ao(s) {
  if (!Ic)
    return s.detail;
  let e = hl, t = cl;
  return hl = s, cl = Date.now(), Ol = !e || t > Date.now() - 400 && Math.abs(e.clientX - s.clientX) < 2 && Math.abs(e.clientY - s.clientY) < 2 ? (Ol + 1) % 3 : 1;
}
function Bc(s, e) {
  let t = s.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, !1), i = Ao(e), r = s.state.selection;
  return {
    update(n) {
      n.docChanged && (t.pos = n.changes.mapPos(t.pos), r = r.map(n.changes));
    },
    get(n, l, a) {
      let o = s.posAndSideAtCoords({ x: n.clientX, y: n.clientY }, !1), h, O = ol(s, o.pos, o.assoc, i);
      if (t.pos != o.pos && !l) {
        let c = ol(s, t.pos, t.assoc, i), f = Math.min(c.from, O.from), u = Math.max(c.to, O.to);
        O = f < O.from ? x.range(f, u) : x.range(u, f);
      }
      return l ? r.replaceRange(r.main.extend(O.from, O.to)) : a && i == 1 && r.ranges.length > 1 && (h = Dc(r, o.pos)) ? h : a ? r.addRange(O) : x.create([O]);
    }
  };
}
function Dc(s, e) {
  for (let t = 0; t < s.ranges.length; t++) {
    let { from: i, to: r } = s.ranges[t];
    if (i <= e && r >= e)
      return x.create(s.ranges.slice(0, t).concat(s.ranges.slice(t + 1)), s.mainIndex == t ? 0 : s.mainIndex - (s.mainIndex > t ? 1 : 0));
  }
  return null;
}
Ze.dragstart = (s, e) => {
  let { selection: { main: t } } = s.state;
  if (e.target.draggable) {
    let r = s.docView.tile.nearest(e.target);
    if (r && r.isWidget()) {
      let n = r.posAtStart, l = n + r.length;
      (n >= t.to || l <= t.from) && (t = x.range(n, l));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", zr(s.state, On, s.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
Ze.dragend = (s) => (s.inputState.draggedContent = null, !1);
function fl(s, e, t, i) {
  if (t = zr(s.state, hn, t), !t)
    return;
  let r = s.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: n } = s.inputState, l = i && n && qc(s, e) ? { from: n.from, to: n.to } : null, a = { from: r, insert: t }, o = s.state.changes(l ? [l, a] : a);
  s.focus(), s.dispatch({
    changes: o,
    selection: { anchor: o.mapPos(r, -1), head: o.mapPos(r, 1) },
    userEvent: l ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
Ze.drop = (s, e) => {
  if (!e.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), r = 0, n = () => {
      ++r == t.length && fl(s, e, i.filter((l) => l != null).join(s.state.lineBreak), !1);
    };
    for (let l = 0; l < t.length; l++) {
      let a = new FileReader();
      a.onerror = n, a.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(a.result) || (i[l] = a.result), n();
      }, a.readAsText(t[l]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return fl(s, e, i, !0), !0;
  }
  return !1;
};
Ze.paste = (s, e) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let t = Xo ? null : e.clipboardData;
  return t ? (Co(s, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (jc(s), !1);
};
function Gc(s, e) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function Nc(s) {
  let e = [], t = [], i = !1;
  for (let r of s.selection.ranges)
    r.empty || (e.push(s.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: n } of s.selection.ranges) {
      let l = s.doc.lineAt(n);
      l.number > r && (e.push(l.text), t.push({ from: l.from, to: Math.min(s.doc.length, l.to + 1) })), r = l.number;
    }
    i = !0;
  }
  return { text: zr(s, On, e.join(s.lineBreak)), ranges: t, linewise: i };
}
let Ls = null;
Ze.copy = Ze.cut = (s, e) => {
  let { text: t, ranges: i, linewise: r } = Nc(s.state);
  if (!t && !r)
    return !1;
  Ls = r ? t : null, e.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let n = Xo ? null : e.clipboardData;
  return n ? (n.clearData(), n.setData("text/plain", t), !0) : (Gc(s, t), !1);
};
const Ro = /* @__PURE__ */ Qt.define();
function zo(s, e) {
  let t = [];
  for (let i of s.facet(Oo)) {
    let r = i(s, e);
    r && t.push(r);
  }
  return t.length ? s.update({ effects: t, annotations: Ro.of(!0) }) : null;
}
function Mo(s) {
  setTimeout(() => {
    let e = s.hasFocus;
    if (e != s.inputState.notifiedFocused) {
      let t = zo(s.state, e);
      t ? s.dispatch(t) : s.update([]);
    }
  }, 10);
}
ye.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), Mo(s);
};
ye.blur = (s) => {
  s.observer.clearSelectionRange(), Mo(s);
};
ye.compositionstart = ye.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
ye.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, y.chrome && y.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
ye.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
Ze.beforeinput = (s, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (s.inputState.insertingText = e.data, s.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && s.observer.editContext) {
    let n = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), l = e.getTargetRanges();
    if (n && l.length) {
      let a = l[0], o = s.posAtDOM(a.startContainer, a.startOffset), h = s.posAtDOM(a.endContainer, a.endOffset);
      return fn(s, { from: o, to: h, insert: s.state.toText(n) }, null), !0;
    }
  }
  let r;
  if (y.chrome && y.android && (r = To.find((n) => n.inputType == e.inputType)) && (s.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let n = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var l;
      (((l = window.visualViewport) === null || l === void 0 ? void 0 : l.height) || 0) > n + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return y.ios && e.inputType == "deleteContentForward" && s.observer.flushSoon(), y.safari && e.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => ye.compositionend(s, e), 20), !1;
};
const ul = /* @__PURE__ */ new Set();
function Uc(s) {
  ul.has(s) || (ul.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const dl = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Rt = !1;
function pl() {
  Rt = !1;
}
class Fc {
  constructor(e) {
    this.lineWrapping = e, this.doc = Y.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return dl.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      r < 0 ? i++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, r, n, l) {
    let a = dl.indexOf(e) > -1, o = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != a;
    if (this.lineWrapping = a, this.lineHeight = t, this.charWidth = i, this.textHeight = r, this.lineLength = n, o) {
      this.heightSamples = {};
      for (let h = 0; h < l.length; h++) {
        let O = l[h];
        O < 0 ? h++ : this.heightSamples[Math.floor(O * 10)] = !0;
      }
    }
    return o;
  }
}
class Hc {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Pe {
  /**
  @internal
  */
  constructor(e, t, i, r, n) {
    this.from = e, this.length = t, this.top = i, this.height = r, this._content = n;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? we.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof pt ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new Pe(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var I = /* @__PURE__ */ function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
}(I || (I = {}));
const er = 1e-3;
class Oe {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > er && (Rt = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return Oe.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, r) {
    let n = this, l = i.doc;
    for (let a = r.length - 1; a >= 0; a--) {
      let { fromA: o, toA: h, fromB: O, toB: c } = r[a], f = n.lineAt(o, I.ByPosNoHeight, i.setDoc(t), 0, 0), u = f.to >= h ? f : n.lineAt(h, I.ByPosNoHeight, i, 0, 0);
      for (c += u.to - h, h = u.to; a > 0 && f.from <= r[a - 1].toA; )
        o = r[a - 1].fromA, O = r[a - 1].fromB, a--, o < f.from && (f = n.lineAt(o, I.ByPosNoHeight, i, 0, 0));
      O += f.from - o, o = f.from;
      let d = un.build(i.setDoc(l), e, O, c);
      n = pr(n, n.replace(o, h, d));
    }
    return n.updateHeight(i, 0);
  }
  static empty() {
    return new pe(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, r = 0, n = 0;
    for (; ; )
      if (t == i)
        if (r > n * 2) {
          let a = e[t - 1];
          a.break ? e.splice(--t, 1, a.left, null, a.right) : e.splice(--t, 1, a.left, a.right), i += 1 + a.break, r -= a.size;
        } else if (n > r * 2) {
          let a = e[i];
          a.break ? e.splice(i, 1, a.left, null, a.right) : e.splice(i, 1, a.left, a.right), i += 2 + a.break, n -= a.size;
        } else
          break;
      else if (r < n) {
        let a = e[t++];
        a && (r += a.size);
      } else {
        let a = e[--i];
        a && (n += a.size);
      }
    let l = 0;
    return e[t - 1] == null ? (l = 1, t--) : e[t] == null && (l = 1, i++), new Jc(Oe.of(e.slice(0, t)), l, Oe.of(e.slice(i)));
  }
}
function pr(s, e) {
  return s == e ? s : (s.constructor != e.constructor && (Rt = !0), e);
}
Oe.prototype.size = 1;
const Kc = /* @__PURE__ */ E.replace({});
class Yo extends Oe {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new Pe(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, r) {
    return this.spaceAbove && e < i + this.spaceAbove ? new Pe(r, 0, i, this.spaceAbove, Kc) : this.mainBlock(i, r);
  }
  lineAt(e, t, i, r, n) {
    let l = this.mainBlock(r, n);
    return this.spaceAbove ? this.blockAt(0, i, r, n).join(l) : l;
  }
  forEachLine(e, t, i, r, n, l) {
    e <= n + this.length && t >= n && l(this.lineAt(0, I.ByPos, i, r, n));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = !1, r) {
    return r && r.from <= t && r.more && this.setMeasuredHeight(r), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class pe extends Yo {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new Pe(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let r = i[0];
    return i.length == 1 && (r instanceof pe || r instanceof ie && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof ie ? r = new pe(r.length, this.height, this.spaceAbove) : r.height = this.height, this.outdated || (r.outdated = !1), r) : Oe.of(i);
  }
  updateHeight(e, t = 0, i = !1, r) {
    return r && r.from <= t && r.more ? this.setMeasuredHeight(r) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ie extends Oe {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, n = r - i + 1, l, a = 0;
    if (e.lineWrapping) {
      let o = Math.min(this.height, e.lineHeight * n);
      l = o / n, this.length > n + 1 && (a = (this.height - o) / (this.length - n - 1));
    } else
      l = this.height / n;
    return { firstLine: i, lastLine: r, perLine: l, perChar: a };
  }
  blockAt(e, t, i, r) {
    let { firstLine: n, lastLine: l, perLine: a, perChar: o } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let h = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), O = t.doc.lineAt(h), c = a + O.length * o, f = Math.max(i, e - c / 2);
      return new Pe(O.from, O.length, f, c, 0);
    } else {
      let h = Math.max(0, Math.min(l - n, Math.floor((e - i) / a))), { from: O, length: c } = t.doc.line(n + h);
      return new Pe(O, c, i + a * h, a, 0);
    }
  }
  lineAt(e, t, i, r, n) {
    if (t == I.ByHeight)
      return this.blockAt(e, i, r, n);
    if (t == I.ByPosNoHeight) {
      let { from: u, to: d } = i.doc.lineAt(e);
      return new Pe(u, d - u, 0, 0, 0);
    }
    let { firstLine: l, perLine: a, perChar: o } = this.heightMetrics(i, n), h = i.doc.lineAt(e), O = a + h.length * o, c = h.number - l, f = r + a * c + o * (h.from - n - c);
    return new Pe(h.from, h.length, Math.max(r, Math.min(f, r + this.height - O)), O, 0);
  }
  forEachLine(e, t, i, r, n, l) {
    e = Math.max(e, n), t = Math.min(t, n + this.length);
    let { firstLine: a, perLine: o, perChar: h } = this.heightMetrics(i, n);
    for (let O = e, c = r; O <= t; ) {
      let f = i.doc.lineAt(O);
      if (O == e) {
        let d = f.number - a;
        c += o * d + h * (e - n - d);
      }
      let u = o + h * f.length;
      l(new Pe(f.from, f.length, c, u, 0)), c += u, O = f.to + 1;
    }
  }
  replace(e, t, i) {
    let r = this.length - t;
    if (r > 0) {
      let n = i[i.length - 1];
      n instanceof ie ? i[i.length - 1] = new ie(n.length + r) : i.push(null, new ie(r - 1));
    }
    if (e > 0) {
      let n = i[0];
      n instanceof ie ? i[0] = new ie(e + n.length) : i.unshift(new ie(e - 1), null);
    }
    return Oe.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ie(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ie(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, r) {
    let n = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let l = [], a = Math.max(t, r.from), o = -1;
      for (r.from > t && l.push(new ie(r.from - t - 1).updateHeight(e, t)); a <= n && r.more; ) {
        let O = e.doc.lineAt(a).length;
        l.length && l.push(null);
        let c = r.heights[r.index++], f = 0;
        c < 0 && (f = -c, c = r.heights[r.index++]), o == -1 ? o = c : Math.abs(c - o) >= er && (o = -2);
        let u = new pe(O, c, f);
        u.outdated = !1, l.push(u), a += O + 1;
      }
      a <= n && l.push(null, new ie(n - a).updateHeight(e, a));
      let h = Oe.of(l);
      return (o < 0 || Math.abs(h.height - this.height) >= er || Math.abs(o - this.heightMetrics(e, t).perLine) >= er) && (Rt = !0), pr(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Jc extends Oe {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, r) {
    let n = i + this.left.height;
    return e < n ? this.left.blockAt(e, t, i, r) : this.right.blockAt(e, t, n, r + this.left.length + this.break);
  }
  lineAt(e, t, i, r, n) {
    let l = r + this.left.height, a = n + this.left.length + this.break, o = t == I.ByHeight ? e < l : e < a, h = o ? this.left.lineAt(e, t, i, r, n) : this.right.lineAt(e, t, i, l, a);
    if (this.break || (o ? h.to < a : h.from > a))
      return h;
    let O = t == I.ByPosNoHeight ? I.ByPosNoHeight : I.ByPos;
    return o ? h.join(this.right.lineAt(a, O, i, l, a)) : this.left.lineAt(a, O, i, r, n).join(h);
  }
  forEachLine(e, t, i, r, n, l) {
    let a = r + this.left.height, o = n + this.left.length + this.break;
    if (this.break)
      e < o && this.left.forEachLine(e, t, i, r, n, l), t >= o && this.right.forEachLine(e, t, i, a, o, l);
    else {
      let h = this.lineAt(o, I.ByPos, i, r, n);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, r, n, l), h.to >= e && h.from <= t && l(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, a, o, l);
    }
  }
  replace(e, t, i) {
    let r = this.left.length + this.break;
    if (t < r)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, t - r, i));
    let n = [];
    e > 0 && this.decomposeLeft(e, n);
    let l = n.length;
    for (let a of i)
      n.push(a);
    if (e > 0 && gl(n, l - 1), t < this.length) {
      let a = n.length;
      this.decomposeRight(t, n), gl(n, a);
    }
    return Oe.of(n);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, r = i + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Oe.of(this.break ? [e, null, t] : [e, t]) : (this.left = pr(this.left, e), this.right = pr(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, r) {
    let { left: n, right: l } = this, a = t + n.length + this.break, o = null;
    return r && r.from <= t + n.length && r.more ? o = n = n.updateHeight(e, t, i, r) : n.updateHeight(e, t, i), r && r.from <= a + l.length && r.more ? o = l = l.updateHeight(e, a, i, r) : l.updateHeight(e, a, i), o ? this.balanced(n, l) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function gl(s, e) {
  let t, i;
  s[e] == null && (t = s[e - 1]) instanceof ie && (i = s[e + 1]) instanceof ie && s.splice(e - 1, 3, new ie(t.length + 1 + i.length));
}
const ef = 5;
class un {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof pe ? r.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new pe(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0, n = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let l = t - e;
      i.block ? this.addBlock(new Yo(l, r, i)) : (l || n || r >= ef) && this.addLineDeco(r, n, l);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new pe(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ie(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof pe)
      return e;
    let t = new pe(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let r = this.ensureLine();
    r.length += i, r.collapsed += i, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof pe) && !this.isCovered ? this.nodes.push(new pe(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes)
      r instanceof pe && r.updateHeight(this.oracle, i), i += r ? r.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, r) {
    let n = new un(i, e);
    return V.spans(t, i, r, n, 0), n.finish(i);
  }
}
function tf(s, e, t) {
  let i = new rf();
  return V.compare(s, e, t, i, 0), i.changes;
}
class rf {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, r) {
    (e < t || i && i.heightRelevant || r && r.heightRelevant) && wt(e, t, this.changes, 5);
  }
}
function sf(s, e) {
  let t = s.getBoundingClientRect(), i = s.ownerDocument, r = i.defaultView || window, n = Math.max(0, t.left), l = Math.min(r.innerWidth, t.right), a = Math.max(0, t.top), o = Math.min(r.innerHeight, t.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let O = h, c = window.getComputedStyle(O);
      if ((O.scrollHeight > O.clientHeight || O.scrollWidth > O.clientWidth) && c.overflow != "visible") {
        let f = O.getBoundingClientRect();
        n = Math.max(n, f.left), l = Math.min(l, f.right), a = Math.max(a, f.top), o = Math.min(h == s.parentNode ? r.innerHeight : o, f.bottom);
      }
      h = c.position == "absolute" || c.position == "fixed" ? O.offsetParent : O.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: n - t.left,
    right: Math.max(n, l) - t.left,
    top: a - (t.top + e),
    bottom: Math.max(a, o) - (t.top + e)
  };
}
function nf(s) {
  let e = s.getBoundingClientRect(), t = s.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function lf(s, e) {
  let t = s.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
class Dr {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.size = i, this.displaySize = r;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i], n = t[i];
      if (r.from != n.from || r.to != n.to || r.size != n.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return E.replace({
      widget: new af(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
}
class af extends yi {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class ml {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Ql, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = K.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(cn).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Fc(t), this.stateDeco = e.facet(pi).filter((i) => typeof i != "function"), this.heightMap = Oe.empty().applyChanges(this.stateDeco, Y.empty, this.heightOracle.setDoc(e.doc), [new ke(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = E.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? t.head : t.anchor;
      if (!e.some(({ from: n, to: l }) => r >= n && r <= l)) {
        let { from: n, to: l } = this.lineBlockAt(r);
        e.push(new Ei(n, l));
      }
    }
    return this.viewports = e.sort((i, r) => i.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Ql : new dn(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(ei(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(pi).filter((O) => typeof O != "function");
    let r = e.changedRanges, n = ke.extendWithRanges(r, tf(i, this.stateDeco, e ? e.changes : ee.empty(this.state.doc.length))), l = this.heightMap.height, a = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    pl(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), n), (this.heightMap.height != l || Rt) && (e.flags |= 2), a ? (this.scrollAnchorPos = e.changes.mapPos(a.from, -1), this.scrollAnchorHeight = a.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = l);
    let o = n.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < o.from || t.range.head > o.to) || !this.viewportIsAppropriate(o)) && (o = this.getViewport(0, t));
    let h = o.from != this.viewport.from || o.to != this.viewport.to;
    this.viewport = o, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(KO) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), r = this.heightOracle, n = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? K.RTL : K.LTR;
    let l = this.heightOracle.mustRefreshForWrapping(n), a = t.getBoundingClientRect(), o = l || this.mustMeasureContent || this.contentDOMHeight != a.height;
    this.contentDOMHeight = a.height, this.mustMeasureContent = !1;
    let h = 0, O = 0;
    if (a.width && a.height) {
      let { scaleX: A, scaleY: v } = Ua(t, a);
      (A > 5e-3 && Math.abs(this.scaleX - A) > 5e-3 || v > 5e-3 && Math.abs(this.scaleY - v) > 5e-3) && (this.scaleX = A, this.scaleY = v, h |= 16, l = o = !0);
    }
    let c = (parseInt(i.paddingTop) || 0) * this.scaleY, f = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != c || this.paddingBottom != f) && (this.paddingTop = c, this.paddingBottom = f, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (o = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let u = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != u && (this.scrollAnchorHeight = -1, this.scrollTop = u), this.scrolledToBottom = Ha(e.scrollDOM);
    let d = (this.printing ? lf : sf)(t, this.paddingTop), p = d.top - this.pixelViewport.top, m = d.bottom - this.pixelViewport.bottom;
    this.pixelViewport = d;
    let Q = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (Q != this.inView && (this.inView = Q, Q && (o = !0)), !this.inView && !this.scrollTarget && !nf(e.dom))
      return 0;
    let k = a.width;
    if ((this.contentDOMWidth != k || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = a.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), o) {
      let A = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(A) && (l = !0), l || r.lineWrapping && Math.abs(k - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: v, charWidth: T, textHeight: P } = e.docView.measureTextSize();
        l = v > 0 && r.refresh(n, v, T, P, Math.max(5, k / T), A), l && (e.docView.minWidth = 0, h |= 16);
      }
      p > 0 && m > 0 ? O = Math.max(p, m) : p < 0 && m < 0 && (O = Math.min(p, m)), pl();
      for (let v of this.viewports) {
        let T = v.from == this.viewport.from ? A : e.docView.measureVisibleLineHeights(v);
        this.heightMap = (l ? Oe.empty().applyChanges(this.stateDeco, Y.empty, this.heightOracle, [new ke(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, l, new Hc(v.from, T));
      }
      Rt && (h |= 2);
    }
    let w = !this.viewportIsAppropriate(this.viewport, O) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return w && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(O, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || w) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(l ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, n = this.heightOracle, { visibleTop: l, visibleBottom: a } = this, o = new Ei(r.lineAt(l - i * 1e3, I.ByHeight, n, 0, 0).from, r.lineAt(a + (1 - i) * 1e3, I.ByHeight, n, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < o.from || h > o.to) {
        let O = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), c = r.lineAt(h, I.ByPos, n, 0, 0), f;
        t.y == "center" ? f = (c.top + c.bottom) / 2 - O / 2 : t.y == "start" || t.y == "nearest" && h < o.from ? f = c.top : f = c.bottom - O, o = new Ei(r.lineAt(f - 1e3 / 2, I.ByHeight, n, 0, 0).from, r.lineAt(f + O + 1e3 / 2, I.ByHeight, n, 0, 0).to);
      }
    }
    return o;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Ei(this.heightMap.lineAt(i, I.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, I.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), { bottom: n } = this.heightMap.lineAt(t, I.ByPos, this.heightOracle, 0, 0), { visibleTop: l, visibleBottom: a } = this;
    return (e == 0 || r <= l - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || n >= a + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && r > l - 2 * 1e3 && n < a + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) || i.push(new Dr(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, r = i ? 1e4 : 2e3, n = r >> 1, l = r << 1;
    if (this.defaultTextDirection != K.LTR && !i)
      return [];
    let a = [], o = (O, c, f, u) => {
      if (c - O < n)
        return;
      let d = this.state.selection.main, p = [d.from];
      d.empty || p.push(d.to);
      for (let Q of p)
        if (Q > O && Q < c) {
          o(O, Q - 10, f, u), o(Q + 10, c, f, u);
          return;
        }
      let m = hf(e, (Q) => Q.from >= f.from && Q.to <= f.to && Math.abs(Q.from - O) < n && Math.abs(Q.to - c) < n && !p.some((k) => Q.from < k && Q.to > k));
      if (!m) {
        if (c < f.to && t && i && t.visibleRanges.some((w) => w.from <= c && w.to >= c)) {
          let w = t.moveToLineBoundary(x.cursor(c), !1, !0).head;
          w > O && (c = w);
        }
        let Q = this.gapSize(f, O, c, u), k = i || Q < 2e6 ? Q : 2e6;
        m = new Dr(O, c, Q, k);
      }
      a.push(m);
    }, h = (O) => {
      if (O.length < l || O.type != we.Text)
        return;
      let c = of(O.from, O.to, this.stateDeco);
      if (c.total < l)
        return;
      let f = this.scrollTarget ? this.scrollTarget.range.head : null, u, d;
      if (i) {
        let p = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, Q;
        if (f != null) {
          let k = Vi(c, f), w = ((this.visibleBottom - this.visibleTop) / 2 + p) / O.height;
          m = k - w, Q = k + w;
        } else
          m = (this.visibleTop - O.top - p) / O.height, Q = (this.visibleBottom - O.top + p) / O.height;
        u = qi(c, m), d = qi(c, Q);
      } else {
        let p = c.total * this.heightOracle.charWidth, m = r * this.heightOracle.charWidth, Q = 0;
        if (p > 2e6)
          for (let T of e)
            T.from >= O.from && T.from < O.to && T.size != T.displaySize && T.from * this.heightOracle.charWidth + Q < this.pixelViewport.left && (Q = T.size - T.displaySize);
        let k = this.pixelViewport.left + Q, w = this.pixelViewport.right + Q, A, v;
        if (f != null) {
          let T = Vi(c, f), P = ((w - k) / 2 + m) / p;
          A = T - P, v = T + P;
        } else
          A = (k - m) / p, v = (w + m) / p;
        u = qi(c, A), d = qi(c, v);
      }
      u > O.from && o(O.from, u, O, c), d < O.to && o(d, O.to, O, c);
    };
    for (let O of this.viewportLines)
      Array.isArray(O.type) ? O.type.forEach(h) : h(O);
    return a;
  }
  gapSize(e, t, i, r) {
    let n = Vi(r, i) - Vi(r, t);
    return this.heightOracle.lineWrapping ? e.height * n : r.total * this.heightOracle.charWidth * n;
  }
  updateLineGaps(e) {
    Dr.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = E.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    V.spans(t, this.viewport.from, this.viewport.to, {
      span(n, l) {
        i.push({ from: n, to: l });
      },
      point() {
      }
    }, 20);
    let r = 0;
    if (i.length != this.visibleRanges.length)
      r = 12;
    else
      for (let n = 0; n < i.length && !(r & 8); n++) {
        let l = this.visibleRanges[n], a = i[n];
        (l.from != a.from || l.to != a.to) && (r |= 4, e && e.mapPos(l.from, -1) == a.from && e.mapPos(l.to, 1) == a.to || (r |= 8));
      }
    return this.visibleRanges = i, r;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || ei(this.heightMap.lineAt(e, I.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || ei(this.heightMap.lineAt(this.scaler.fromDOM(e), I.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return ei(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ei {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function of(s, e, t) {
  let i = [], r = s, n = 0;
  return V.spans(t, s, e, {
    span() {
    },
    point(l, a) {
      l > r && (i.push({ from: r, to: l }), n += l - r), r = a;
    }
  }, 20), r < e && (i.push({ from: r, to: e }), n += e - r), { total: n, ranges: i };
}
function qi({ total: s, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(s * t);
  for (let r = 0; ; r++) {
    let { from: n, to: l } = e[r], a = l - n;
    if (i <= a)
      return n + i;
    i -= a;
  }
}
function Vi(s, e) {
  let t = 0;
  for (let { from: i, to: r } of s.ranges) {
    if (e <= r) {
      t += e - i;
      break;
    }
    t += r - i;
  }
  return t / s.total;
}
function hf(s, e) {
  for (let t of s)
    if (e(t))
      return t;
}
const Ql = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
class dn {
  constructor(e, t, i) {
    let r = 0, n = 0, l = 0;
    this.viewports = i.map(({ from: a, to: o }) => {
      let h = t.lineAt(a, I.ByPos, e, 0, 0).top, O = t.lineAt(o, I.ByPos, e, 0, 0).bottom;
      return r += O - h, { from: a, to: o, top: h, bottom: O, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let a of this.viewports)
      a.domTop = l + (a.top - n) * this.scale, l = a.domBottom = a.domTop + (a.bottom - a.top), n = a.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let n = t < this.viewports.length ? this.viewports[t] : null;
      if (!n || e < n.top)
        return r + (e - i) * this.scale;
      if (e <= n.bottom)
        return n.domTop + (e - n.top);
      i = n.bottom, r = n.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let n = t < this.viewports.length ? this.viewports[t] : null;
      if (!n || e < n.domTop)
        return i + (e - r) / this.scale;
      if (e <= n.domBottom)
        return n.top + (e - n.domTop);
      i = n.bottom, r = n.domBottom;
    }
  }
  eq(e) {
    return e instanceof dn ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
}
function ei(s, e) {
  if (e.scale == 1)
    return s;
  let t = e.toDOM(s.top), i = e.toDOM(s.bottom);
  return new Pe(s.from, s.length, t, i - t, Array.isArray(s._content) ? s._content.map((r) => ei(r, e)) : s._content);
}
const Wi = /* @__PURE__ */ Z.define({ combine: (s) => s.join(" ") }), Es = /* @__PURE__ */ Z.define({ combine: (s) => s.indexOf(!0) > -1 }), qs = /* @__PURE__ */ Zt.newName(), _o = /* @__PURE__ */ Zt.newName(), Lo = /* @__PURE__ */ Zt.newName(), Eo = { "&light": "." + _o, "&dark": "." + Lo };
function Vs(s, e, t) {
  return new Zt(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (r) => {
        if (r == "&")
          return s;
        if (!t || !t[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return t[r];
      }) : s + " " + i;
    }
  });
}
const Of = /* @__PURE__ */ Vs("." + qs, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Eo), cf = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Gr = y.ie && y.ie_version <= 11;
class ff {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new qO(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (y.ie && y.ie_version <= 11 || y.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && y.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(y.chrome && y.chrome_version < 126) && (this.editContext = new df(e), e.state.facet(je) && (e.contentDOM.editContext = this.editContext.editContext)), Gr && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, r = this.selectionRange;
    if (i.state.facet(je) ? i.root.activeElement != this.dom : !Ki(this.dom, r))
      return;
    let n = r.anchorNode && i.docView.tile.nearest(r.anchorNode);
    if (n && n.isWidget() && n.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (y.ie && y.ie_version <= 11 || y.android && y.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    r.focusNode && si(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = ui(e.root);
    if (!t)
      return !1;
    let i = y.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && uf(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let r = Ki(this.dom, i);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && WO(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), r && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, cf), Gr && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Gr && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let n = this.delayedAndroidKey;
        n && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = n.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && n.force && yt(this.dom, n.key, n.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, r = !1;
    for (let n of e) {
      let l = this.readMutation(n);
      l && (l.typeOver && (r = !0), t == -1 ? { from: t, to: i } = l : (t = Math.min(l.from, t), i = Math.max(l.to, i)));
    }
    return { from: t, to: i, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), r = this.selectionChanged && Ki(this.dom, this.selectionRange);
    if (e < 0 && !r)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let n = new Xc(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: n.newSel ? n.newSel.main : null }, n;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, r = Po(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget())
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = Sl(t, e.previousSibling || e.target.previousSibling, -1), r = Sl(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(je) != e.state.facet(je) && (e.view.contentDOM.editContext = e.state.facet(je) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Sl(s, e, t) {
  for (; e; ) {
    let i = H.get(e);
    if (i && i.parent == s)
      return i;
    let r = e.parentNode;
    e = r != s.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function bl(s, e) {
  let t = e.startContainer, i = e.startOffset, r = e.endContainer, n = e.endOffset, l = s.docView.domAtPos(s.state.selection.main.anchor, 1);
  return si(l.node, l.offset, r, n) && ([t, i, r, n] = [r, n, t, i]), { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: n };
}
function uf(s, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(s.root)[0];
    if (r)
      return bl(s, r);
  }
  let t = null;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), t ? bl(s, t) : null;
}
class df {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let r = e.state.selection.main, { anchor: n, head: l } = r, a = this.toEditorPos(i.updateRangeStart), o = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: a, drifted: !1 });
      let h = o - a > i.text.length;
      a == this.from && n < this.from ? a = n : o == this.to && n > this.to && (o = n);
      let O = vo(e.state.sliceDoc(a, o), i.text, (h ? r.from : r.to) - a, h ? "end" : null);
      if (!O) {
        let f = x.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        f.main.eq(r) || e.dispatch({ selection: f, userEvent: "select" });
        return;
      }
      let c = {
        from: O.from + a,
        to: O.toA + a,
        insert: Y.of(i.text.slice(O.from, O.toB).split(`
`))
      };
      if ((y.mac || y.android) && c.from == l - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (c = { from: a, to: o, insert: Y.of([i.text.replace(".", " ")]) }), this.pendingContextChange = c, !e.state.readOnly) {
        let f = this.to - this.from + (c.to - c.from + c.insert.length);
        fn(e, c, x.single(this.toEditorPos(i.selectionStart, f), this.toEditorPos(i.selectionEnd, f)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), c.from < c.to && !c.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let r = [], n = null;
      for (let l = this.toEditorPos(i.rangeStart), a = this.toEditorPos(i.rangeEnd); l < a; l++) {
        let o = e.coordsForChar(l);
        n = o && new DOMRect(o.left, o.top, o.right - o.left, o.bottom - o.top) || n || new DOMRect(), r.push(n);
      }
      t.updateCharacterBounds(i.rangeStart, r);
    }, this.handlers.textformatupdate = (i) => {
      let r = [];
      for (let n of i.getTextFormats()) {
        let l = n.underlineStyle, a = n.underlineThickness;
        if (!/none/i.test(l) && !/none/i.test(a)) {
          let o = this.toEditorPos(n.rangeStart), h = this.toEditorPos(n.rangeEnd);
          if (o < h) {
            let O = `text-decoration: underline ${/^[a-z]/.test(l) ? l + " " : l == "Dashed" ? "dashed " : l == "Squiggle" ? "wavy " : ""}${/thin/i.test(a) ? 1 : 2}px`;
            r.push(E.mark({ attributes: { style: O } }).range(o, h));
          }
        }
      }
      e.dispatch({ effects: uo.of(E.set(r)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let r = ui(i.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = !1, r = this.pendingContextChange;
    return e.changes.iterChanges((n, l, a, o, h) => {
      if (i)
        return;
      let O = h.length - (l - n);
      if (r && l >= r.to)
        if (r.from == n && r.to == l && r.insert.eq(h)) {
          r = this.pendingContextChange = null, t += O, this.to += O;
          return;
        } else
          r = null, this.revertPending(e.state);
      if (n += t, l += t, l <= this.from)
        this.from += O, this.to += O;
      else if (n < this.to) {
        if (n < this.from || l > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(n), this.toContextPos(l), h.toString()), this.to += O;
      }
      t += O;
    }), r && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((r) => !r.isUserEvent("input.type") && r.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != r) && this.editContext.updateSelection(i, r);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class C {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((r) => r.forEach((n) => i(n, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || VO(e.parent) || document, this.viewState = new ml(e.state || L.create(e)), e.scrollTo && e.scrollTo.is(Yi) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(bt).map((r) => new Vr(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new ff(this), this.inputState = new zc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new rl(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof se ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, r, n = this.state;
    for (let f of e) {
      if (f.startState != n)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      n = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = n;
      return;
    }
    let l = this.hasFocus, a = 0, o = null;
    e.some((f) => f.annotation(Ro)) ? (this.inputState.notifiedFocused = l, a = 1) : l != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = l, o = zo(n, l), o || (a = 1));
    let h = this.observer.delayedAndroidKey, O = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), O = this.observer.readChange(), (O && !this.state.doc.eq(n.doc) || !this.state.selection.eq(n.selection)) && (O = null)) : this.observer.clear(), n.facet(L.phrases) != this.state.facet(L.phrases))
      return this.setState(n);
    r = fr.create(this, n, e), r.flags |= a;
    let c = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if (c && (c = c.map(f.changes)), f.scrollIntoView) {
          let { main: u } = f.state.selection;
          c = new $t(u.empty ? u : x.cursor(u.head, u.head > u.anchor ? -1 : 1));
        }
        for (let u of f.effects)
          u.is(Yi) && (c = u.value.clip(this.state));
      }
      this.viewState.update(r, c), this.bidiCache = gr.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(Kt) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((f) => f.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Wi) != r.state.facet(Wi) && (this.viewState.mustMeasureContent = !0), (t || i || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !r.empty)
      for (let f of this.state.facet(Ms))
        try {
          f(r);
        } catch (u) {
          _e(this.state, u, "update listener");
        }
    (o || O) && Promise.resolve().then(() => {
      o && this.state == o.startState && this.dispatch(o), O && !Po(this, O) && h.force && yt(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new ml(e), this.plugins = e.facet(bt).map((i) => new Vr(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new rl(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(bt), i = e.state.facet(bt);
    if (t != i) {
      let r = [];
      for (let n of i) {
        let l = t.indexOf(n);
        if (l < 0)
          r.push(new Vr(n));
        else {
          let a = this.plugins[l];
          a.mustUpdate = e, r.push(a);
        }
      }
      for (let n of this.plugins)
        n.mustUpdate != e && n.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          _e(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, r = i.scrollTop * this.scaleY, { scrollAnchorPos: n, scrollAnchorHeight: l } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (l = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let a = 0; ; a++) {
        if (l < 0)
          if (Ha(i))
            n = -1, l = this.viewState.heightMap.height;
          else {
            let u = this.viewState.scrollAnchorAt(r);
            n = u.from, l = u.top;
          }
        this.updateState = 1;
        let o = this.viewState.measure(this);
        if (!o && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (a > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        o & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let O = h.map((u) => {
          try {
            return u.read(this);
          } catch (d) {
            return _e(this.state, d), kl;
          }
        }), c = fr.create(this, this.state, []), f = !1;
        c.flags |= o, t ? t.flags |= o : t = c, this.updateState = 2, c.empty || (this.updatePlugins(c), this.inputState.update(c), this.updateAttrs(), f = this.docView.update(c), f && this.docViewUpdate());
        for (let u = 0; u < h.length; u++)
          if (O[u] != kl)
            try {
              let d = h[u];
              d.write && d.write(O[u], this);
            } catch (d) {
              _e(this.state, d);
            }
        if (f && this.docView.updateSelection(!0), !c.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, l = -1;
              continue;
            } else {
              let d = (n < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(n).top) - l;
              if (d > 1 || d < -1) {
                r = r + d, i.scrollTop = r / this.scaleY, l = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let a of this.state.facet(Ms))
        a(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return qs + " " + (this.state.facet(Es) ? Lo : _o) + " " + this.state.facet(Wi);
  }
  updateAttrs() {
    let e = xl(this, po, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(je) ? "true" : "false",
      class: "cm-content",
      style: `${y.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), xl(this, cn, t);
    let i = this.observer.ignore(() => {
      let r = Hn(this.contentDOM, this.contentAttrs, t), n = Hn(this.dom, this.editorAttrs, e);
      return r || n;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let r of i.effects)
        if (r.is(C.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let n = this.announceDOM.appendChild(document.createElement("div"));
          n.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Kt);
    let e = this.state.facet(C.cspNonce);
    Zt.mount(this.root, this.styleModules.concat(Of).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return Br(this, e, sl(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Br(this, e, sl(this, e, t, (i) => $c(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), r = this.textDirectionAt(e.from), n = i[t ? i.length - 1 : 0];
    return x.cursor(n.side(t, r) + e.from, n.forward(!t, r) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return yc(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return Br(this, e, Pc(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    this.readMeasured();
    let i = _s(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = !0) {
    return this.readMeasured(), _s(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let r = this.state.doc.lineAt(e), n = this.bidiSpans(r), l = n[Be.find(n, e - r.from, -1, t)];
    return cr(i, l.dir == K.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(co) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > pf)
      return ro(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let n of this.bidiCache)
      if (n.from == e.from && n.dir == t && (n.fresh || io(n.isolates, i = el(this, e))))
        return n.order;
    i || (i = el(this, e));
    let r = UO(e.text, t, i);
    return this.bidiCache.push(new gr(e.from, e.to, t, i, !0, r)), r;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || y.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Fa(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return Yi.of(new $t(typeof e == "number" ? x.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Yi.of(new $t(x.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return mt.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return mt.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = Zt.newName(), r = [Wi.of(i), Kt.of(Vs(`.${i}`, e))];
    return t && t.dark && r.push(Es.of(!0)), r;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Zr.lowest(Kt.of(Vs("." + qs, e, Eo)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), r = i && H.get(i) || H.get(e);
    return ((t = r == null ? void 0 : r.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
C.styleModule = Kt;
C.inputHandler = ho;
C.clipboardInputFilter = hn;
C.clipboardOutputFilter = On;
C.scrollHandler = fo;
C.focusChangeEffect = Oo;
C.perLineTextDirection = co;
C.exceptionSink = oo;
C.updateListener = Ms;
C.editable = je;
C.mouseSelectionStyle = ao;
C.dragMovesSelection = lo;
C.clickAddsSelectionRange = no;
C.decorations = pi;
C.blockWrappers = go;
C.outerDecorations = mo;
C.atomicRanges = vi;
C.bidiIsolatedRanges = Qo;
C.scrollMargins = So;
C.darkTheme = Es;
C.cspNonce = /* @__PURE__ */ Z.define({ combine: (s) => s.length ? s[0] : "" });
C.contentAttributes = cn;
C.editorAttributes = po;
C.lineWrapping = /* @__PURE__ */ C.contentAttributes.of({ class: "cm-lineWrapping" });
C.announce = /* @__PURE__ */ U.define();
const pf = 4096, kl = {};
class gr {
  constructor(e, t, i, r, n, l) {
    this.from = e, this.to = t, this.dir = i, this.isolates = r, this.fresh = n, this.order = l;
  }
  static update(e, t) {
    if (t.empty && !e.some((n) => n.fresh))
      return e;
    let i = [], r = e.length ? e[e.length - 1].dir : K.LTR;
    for (let n = Math.max(0, e.length - 10); n < e.length; n++) {
      let l = e[n];
      l.dir == r && !t.touchesRange(l.from, l.to) && i.push(new gr(t.mapPos(l.from, 1), t.mapPos(l.to, -1), l.dir, l.isolates, !1, l.order));
    }
    return i;
  }
}
function xl(s, e, t) {
  for (let i = s.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let n = i[r], l = typeof n == "function" ? n(s) : n;
    l && ln(l, t);
  }
  return t;
}
const gf = y.mac ? "mac" : y.windows ? "win" : y.linux ? "linux" : "key";
function mf(s, e) {
  const t = s.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let r, n, l, a;
  for (let o = 0; o < t.length - 1; ++o) {
    const h = t[o];
    if (/^(cmd|meta|m)$/i.test(h))
      a = !0;
    else if (/^a(lt)?$/i.test(h))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      n = !0;
    else if (/^s(hift)?$/i.test(h))
      l = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? a = !0 : n = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return r && (i = "Alt-" + i), n && (i = "Ctrl-" + i), a && (i = "Meta-" + i), l && (i = "Shift-" + i), i;
}
function ji(s, e, t) {
  return e.altKey && (s = "Alt-" + s), e.ctrlKey && (s = "Ctrl-" + s), e.metaKey && (s = "Meta-" + s), t !== !1 && e.shiftKey && (s = "Shift-" + s), s;
}
const Qf = /* @__PURE__ */ Zr.default(/* @__PURE__ */ C.domEventHandlers({
  keydown(s, e) {
    return xf(Sf(e.state), s, e, "editor");
  }
})), pn = /* @__PURE__ */ Z.define({ enables: Qf }), wl = /* @__PURE__ */ new WeakMap();
function Sf(s) {
  let e = s.facet(pn), t = wl.get(e);
  return t || wl.set(e, t = kf(e.reduce((i, r) => i.concat(r), []))), t;
}
let Je = null;
const bf = 4e3;
function kf(s, e = gf) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = (l, a) => {
    let o = i[l];
    if (o == null)
      i[l] = a;
    else if (o != a)
      throw new Error("Key binding " + l + " is used both as a regular binding and as a multi-stroke prefix");
  }, n = (l, a, o, h, O) => {
    var c, f;
    let u = t[l] || (t[l] = /* @__PURE__ */ Object.create(null)), d = a.split(/ (?!$)/).map((Q) => mf(Q, e));
    for (let Q = 1; Q < d.length; Q++) {
      let k = d.slice(0, Q).join(" ");
      r(k, !0), u[k] || (u[k] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(w) => {
          let A = Je = { view: w, prefix: k, scope: l };
          return setTimeout(() => {
            Je == A && (Je = null);
          }, bf), !0;
        }]
      });
    }
    let p = d.join(" ");
    r(p, !1);
    let m = u[p] || (u[p] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((f = (c = u._any) === null || c === void 0 ? void 0 : c.run) === null || f === void 0 ? void 0 : f.slice()) || []
    });
    o && m.run.push(o), h && (m.preventDefault = !0), O && (m.stopPropagation = !0);
  };
  for (let l of s) {
    let a = l.scope ? l.scope.split(" ") : ["editor"];
    if (l.any)
      for (let h of a) {
        let O = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        O._any || (O._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: c } = l;
        for (let f in O)
          O[f].run.push((u) => c(u, Ws));
      }
    let o = l[e] || l.key;
    if (o)
      for (let h of a)
        n(h, o, l.run, l.preventDefault, l.stopPropagation), l.shift && n(h, "Shift-" + o, l.shift, l.preventDefault, l.stopPropagation);
  }
  return t;
}
let Ws = null;
function xf(s, e, t, i) {
  Ws = e;
  let r = AO(e), n = dO(r, 0), l = pO(n) == r.length && r != " ", a = "", o = !1, h = !1, O = !1;
  Je && Je.view == t && Je.scope == i && (a = Je.prefix + " ", Zo.indexOf(e.keyCode) < 0 && (h = !0, Je = null));
  let c = /* @__PURE__ */ new Set(), f = (m) => {
    if (m) {
      for (let Q of m.run)
        if (!c.has(Q) && (c.add(Q), Q(t)))
          return m.stopPropagation && (O = !0), !0;
      m.preventDefault && (m.stopPropagation && (O = !0), h = !0);
    }
    return !1;
  }, u = s[i], d, p;
  return u && (f(u[a + ji(r, e, !l)]) ? o = !0 : l && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(y.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(y.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (d = rt[e.keyCode]) && d != r ? (f(u[a + ji(d, e, !0)]) || e.shiftKey && (p = ci[e.keyCode]) != r && p != d && f(u[a + ji(p, e, !1)])) && (o = !0) : l && e.shiftKey && f(u[a + ji(r, e, !0)]) && (o = !0), !o && f(u._any) && (o = !0)), h && (o = !0), o && O && e.stopPropagation(), Ws = null, o;
}
class zt extends it {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
}
zt.prototype.elementClass = "";
zt.prototype.toDOM = void 0;
zt.prototype.mapMode = he.TrackBefore;
zt.prototype.startSide = zt.prototype.endSide = -1;
zt.prototype.point = !0;
const qo = 1024;
let wf = 0;
class xe {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class R {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = wf++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = J.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
R.closedBy = new R({ deserialize: (s) => s.split(" ") });
R.openedBy = new R({ deserialize: (s) => s.split(" ") });
R.group = new R({ deserialize: (s) => s.split(" ") });
R.isolate = new R({ deserialize: (s) => {
  if (s && s != "rtl" && s != "ltr" && s != "auto")
    throw new RangeError("Invalid value for isolate: " + s);
  return s || "auto";
} });
R.contextHash = new R({ perNode: !0 });
R.lookAhead = new R({ perNode: !0 });
R.mounted = new R({ perNode: !0 });
class Pt {
  constructor(e, t, i, r = !1) {
    this.tree = e, this.overlay = t, this.parser = i, this.bracketed = r;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[R.mounted.id];
  }
}
const yf = /* @__PURE__ */ Object.create(null);
class J {
  /**
  @internal
  */
  constructor(e, t, i, r = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = r;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : yf, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new J(e.name || "", t, e.id, i);
    if (e.props) {
      for (let n of e.props)
        if (Array.isArray(n) || (n = n(r)), n) {
          if (n[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[n[0].id] = n[1];
        }
    }
    return r;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(R.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let r of i.split(" "))
        t[r] = e[i];
    return (i) => {
      for (let r = i.prop(R.group), n = -1; n < (r ? r.length : 0); n++) {
        let l = t[n < 0 ? i.name : r[n]];
        if (l)
          return l;
      }
    };
  }
}
J.none = new J(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Ti {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let r = null;
      for (let n of e) {
        let l = n(i);
        if (l) {
          r || (r = Object.assign({}, i.props));
          let a = l[1], o = l[0];
          o.combine && o.id in r && (a = o.combine(r[o.id], a)), r[o.id] = a;
        }
      }
      t.push(r ? new J(i.name, r, i.id, i.flags) : i);
    }
    return new Ti(t);
  }
}
const Ii = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap();
var q;
(function(s) {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays", s[s.EnterBracketed = 16] = "EnterBracketed";
})(q || (q = {}));
class _ {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, i, r, n) {
    if (this.type = e, this.children = t, this.positions = i, this.length = r, this.props = null, n && n.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [l, a] of n)
        this.props[typeof l == "number" ? l : l.id] = a;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = Pt.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new mr(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let r = Ii.get(this) || this.topNode, n = new mr(r);
    return n.moveTo(e, t), Ii.set(this, n._tree), n;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new le(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let i = gi(Ii.get(this) || this.topNode, e, t, !1);
    return Ii.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = gi(yl.get(this) || this.topNode, e, t, !0);
    return yl.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return vf(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: r = 0, to: n = this.length } = e, l = e.mode || 0, a = (l & q.IncludeAnonymous) > 0;
    for (let o = this.cursor(l | q.IncludeAnonymous); ; ) {
      let h = !1;
      if (o.from <= n && o.to >= r && (!a && o.type.isAnonymous || t(o) !== !1)) {
        if (o.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (a || !o.type.isAnonymous) && i(o), !o.nextSibling(); ) {
        if (!o.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : Qn(J.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, r) => new _(this.type, t, i, r, this.propValues), e.makeTree || ((t, i, r) => new _(J.none, t, i, r)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return Tf(e);
  }
}
_.empty = new _(J.none, [], [], 0);
class gn {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new gn(this.buffer, this.index);
  }
}
class nt {
  /**
  Create a tree buffer.
  */
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return J.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], r = this.set.types[t], n = r.name;
    if (/\W/.test(n) && !r.isError && (n = JSON.stringify(n)), e += 4, i == e)
      return n;
    let l = [];
    for (; e < i; )
      l.push(this.childString(e)), e = this.buffer[e + 3];
    return n + "(" + l.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, i, r, n) {
    let { buffer: l } = this, a = -1;
    for (let o = e; o != t && !(Vo(n, r, l[o + 1], l[o + 2]) && (a = o, i > 0)); o = l[o + 3])
      ;
    return a;
  }
  /**
  @internal
  */
  slice(e, t, i) {
    let r = this.buffer, n = new Uint16Array(t - e), l = 0;
    for (let a = e, o = 0; a < t; ) {
      n[o++] = r[a++], n[o++] = r[a++] - i;
      let h = n[o++] = r[a++] - i;
      n[o++] = r[a++] - e, l = Math.max(l, h);
    }
    return new nt(n, l, this.set);
  }
}
function Vo(s, e, t, i) {
  switch (s) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function gi(s, e, t, i) {
  for (var r; s.from == s.to || (t < 1 ? s.from >= e : s.from > e) || (t > -1 ? s.to <= e : s.to < e); ) {
    let l = !i && s instanceof le && s.index < 0 ? null : s.parent;
    if (!l)
      return s;
    s = l;
  }
  let n = i ? 0 : q.IgnoreOverlays;
  if (i)
    for (let l = s, a = l.parent; a; l = a, a = l.parent)
      l instanceof le && l.index < 0 && ((r = a.enter(e, t, n)) === null || r === void 0 ? void 0 : r.from) != l.from && (s = a);
  for (; ; ) {
    let l = s.enter(e, t, n);
    if (!l)
      return s;
    s = l;
  }
}
class Wo {
  cursor(e = 0) {
    return new mr(this, e);
  }
  getChild(e, t = null, i = null) {
    let r = $l(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return $l(this, e, t, i);
  }
  resolve(e, t = 0) {
    return gi(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return gi(this, e, t, !0);
  }
  matchContext(e) {
    return js(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let r = t.lastChild;
      if (!r || r.to != t.to)
        break;
      r.type.isError && r.from == r.to ? (i = t, t = r.prevSibling) : t = r;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class le extends Wo {
  constructor(e, t, i, r) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = r;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, r, n = 0) {
    var l;
    for (let a = this; ; ) {
      for (let { children: o, positions: h } = a._tree, O = t > 0 ? o.length : -1; e != O; e += t) {
        let c = o[e], f = h[e] + a.from;
        if (!(!(n & q.EnterBracketed && c instanceof _ && ((l = Pt.get(c)) === null || l === void 0 ? void 0 : l.overlay) === null && (f >= i || f + c.length <= i)) && !Vo(r, i, f, f + c.length))) {
          if (c instanceof nt) {
            if (n & q.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, r);
            if (u > -1)
              return new Le(new $f(a, c, e, f), null, u);
          } else if (n & q.IncludeAnonymous || !c.type.isAnonymous || mn(c)) {
            let u;
            if (!(n & q.IgnoreMounts) && (u = Pt.get(c)) && !u.overlay)
              return new le(u.tree, f, e, a);
            let d = new le(c, f, e, a);
            return n & q.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, r, n);
          }
        }
      }
      if (n & q.IncludeAnonymous || !a.type.isAnonymous || (a.index >= 0 ? e = a.index + t : e = t < 0 ? -1 : a._parent._tree.children.length, a = a._parent, !a))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, i = 0) {
    let r;
    if (!(i & q.IgnoreOverlays) && (r = Pt.get(this._tree)) && r.overlay) {
      let n = e - this.from, l = i & q.EnterBracketed && r.bracketed;
      for (let { from: a, to: o } of r.overlay)
        if ((t > 0 || l ? a <= n : a < n) && (t < 0 || l ? o >= n : o > n))
          return new le(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function $l(s, e, t, i) {
  let r = s.cursor(), n = [];
  if (!r.firstChild())
    return n;
  if (t != null) {
    for (let l = !1; !l; )
      if (l = r.type.is(t), !r.nextSibling())
        return n;
  }
  for (; ; ) {
    if (i != null && r.type.is(i))
      return n;
    if (r.type.is(e) && n.push(r.node), !r.nextSibling())
      return i == null ? n : [];
  }
}
function js(s, e, t = e.length - 1) {
  for (let i = s; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
class $f {
  constructor(e, t, i, r) {
    this.parent = e, this.buffer = t, this.index = i, this.start = r;
  }
}
class Le extends Wo {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: r } = this.context, n = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i);
    return n < 0 ? null : new Le(this.context, this, n);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, i = 0) {
    if (i & q.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, n = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return n < 0 ? null : new Le(this.context, this, n);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Le(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Le(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, r = this.index + 4, n = i.buffer[this.index + 3];
    if (n > r) {
      let l = i.buffer[this.index + 1];
      e.push(i.slice(r, n, l)), t.push(0);
    }
    return new _(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function jo(s) {
  if (!s.length)
    return null;
  let e = 0, t = s[0];
  for (let n = 1; n < s.length; n++) {
    let l = s[n];
    (l.from > t.from || l.to < t.to) && (t = l, e = n);
  }
  let i = t instanceof le && t.index < 0 ? null : t.parent, r = s.slice();
  return i ? r[e] = i : r.splice(e, 1), new Pf(r, t);
}
class Pf {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return jo(this.heads);
  }
}
function vf(s, e, t) {
  let i = s.resolveInner(e, t), r = null;
  for (let n = i instanceof le ? i : i.context.parent; n; n = n.parent)
    if (n.index < 0) {
      let l = n.parent;
      (r || (r = [i])).push(l.resolve(e, t)), n = l;
    } else {
      let l = Pt.get(n.tree);
      if (l && l.overlay && l.overlay[0].from <= e && l.overlay[l.overlay.length - 1].to >= e) {
        let a = new le(l.tree, l.overlay[0].from + n.from, -1, n);
        (r || (r = [i])).push(gi(a, e, t, !1));
      }
    }
  return r ? jo(r) : i;
}
class mr {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~q.EnterBracketed, e instanceof le)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = i + r.buffer[e + 1], this.to = i + r.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof le ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: r } = this.buffer, n = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i);
    return n < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(n));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, i = this.mode) {
    return this.buffer ? i & q.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & q.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & q.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let r = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != r)
        return this.yieldBuf(t.findChild(
          r,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(r);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let n = 0; n < this.index; n++)
          if (r.buffer.buffer[n + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = r);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let n = t + e, l = e < 0 ? -1 : i._tree.children.length; n != l; n += e) {
          let a = i._tree.children[n];
          if (this.mode & q.IncludeAnonymous || a instanceof nt || !a.type.isAnonymous || mn(a))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e: for (let r = this.index, n = this.stack.length; n >= 0; ) {
        for (let l = e; l; l = l._parent)
          if (l.index == r) {
            if (r == this.index)
              return l;
            t = l, i = n + 1;
            break e;
          }
        r = this.stack[--n];
      }
    for (let r = i; r < this.stack.length; r++)
      t = new Le(this.buffer, t, this.stack[r]);
    return this.bufferNode = new Le(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let i = 0; ; ) {
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; ; ) {
        if (r && t && t(this), r = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, r = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return js(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let r = e.length - 1, n = this.stack.length - 1; r >= 0; n--) {
      if (n < 0)
        return js(this._tree, e, r);
      let l = i[t.buffer[this.stack[n]]];
      if (!l.isAnonymous) {
        if (e[r] && e[r] != l.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function mn(s) {
  return s.children.some((e) => e instanceof nt || !e.type.isAnonymous || mn(e));
}
function Tf(s) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: r = qo, reused: n = [], minRepeatType: l = i.types.length } = s, a = Array.isArray(t) ? new gn(t, t.length) : t, o = i.types, h = 0, O = 0;
  function c(v, T, P, G, j, N) {
    let { id: z, start: X, end: B, size: D } = a, te = O, Ue = h;
    if (D < 0)
      if (a.next(), D == -1) {
        let qe = n[z];
        P.push(qe), G.push(X - v);
        return;
      } else if (D == -3) {
        h = z;
        return;
      } else if (D == -4) {
        O = z;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${D}`);
    let It = o[z], Ci, at, Yn = X - v;
    if (B - X <= r && (at = m(a.pos - T, j))) {
      let qe = new Uint16Array(at.size - at.skip), Se = a.pos - at.size, Xe = qe.length;
      for (; a.pos > Se; )
        Xe = Q(at.start, qe, Xe);
      Ci = new nt(qe, B - at.start, i), Yn = at.start - v;
    } else {
      let qe = a.pos - D;
      a.next();
      let Se = [], Xe = [], ot = z >= l ? z : -1, St = 0, Ai = B;
      for (; a.pos > qe; )
        ot >= 0 && a.id == ot && a.size >= 0 ? (a.end <= Ai - r && (d(Se, Xe, X, St, a.end, Ai, ot, te, Ue), St = Se.length, Ai = a.end), a.next()) : N > 2500 ? f(X, qe, Se, Xe) : c(X, qe, Se, Xe, ot, N + 1);
      if (ot >= 0 && St > 0 && St < Se.length && d(Se, Xe, X, St, X, Ai, ot, te, Ue), Se.reverse(), Xe.reverse(), ot > -1 && St > 0) {
        let _n = u(It, Ue);
        Ci = Qn(It, Se, Xe, 0, Se.length, 0, B - X, _n, _n);
      } else
        Ci = p(It, Se, Xe, B - X, te - B, Ue);
    }
    P.push(Ci), G.push(Yn);
  }
  function f(v, T, P, G) {
    let j = [], N = 0, z = -1;
    for (; a.pos > T; ) {
      let { id: X, start: B, end: D, size: te } = a;
      if (te > 4)
        a.next();
      else {
        if (z > -1 && B < z)
          break;
        z < 0 && (z = D - r), j.push(X, B, D), N++, a.next();
      }
    }
    if (N) {
      let X = new Uint16Array(N * 4), B = j[j.length - 2];
      for (let D = j.length - 3, te = 0; D >= 0; D -= 3)
        X[te++] = j[D], X[te++] = j[D + 1] - B, X[te++] = j[D + 2] - B, X[te++] = te;
      P.push(new nt(X, j[2] - B, i)), G.push(B - v);
    }
  }
  function u(v, T) {
    return (P, G, j) => {
      let N = 0, z = P.length - 1, X, B;
      if (z >= 0 && (X = P[z]) instanceof _) {
        if (!z && X.type == v && X.length == j)
          return X;
        (B = X.prop(R.lookAhead)) && (N = G[z] + X.length + B);
      }
      return p(v, P, G, j, N, T);
    };
  }
  function d(v, T, P, G, j, N, z, X, B) {
    let D = [], te = [];
    for (; v.length > G; )
      D.push(v.pop()), te.push(T.pop() + P - j);
    v.push(p(i.types[z], D, te, N - j, X - N, B)), T.push(j - P);
  }
  function p(v, T, P, G, j, N, z) {
    if (N) {
      let X = [R.contextHash, N];
      z = z ? [X].concat(z) : [X];
    }
    if (j > 25) {
      let X = [R.lookAhead, j];
      z = z ? [X].concat(z) : [X];
    }
    return new _(v, T, P, G, z);
  }
  function m(v, T) {
    let P = a.fork(), G = 0, j = 0, N = 0, z = P.end - r, X = { size: 0, start: 0, skip: 0 };
    e: for (let B = P.pos - v; P.pos > B; ) {
      let D = P.size;
      if (P.id == T && D >= 0) {
        X.size = G, X.start = j, X.skip = N, N += 4, G += 4, P.next();
        continue;
      }
      let te = P.pos - D;
      if (D < 0 || te < B || P.start < z)
        break;
      let Ue = P.id >= l ? 4 : 0, It = P.start;
      for (P.next(); P.pos > te; ) {
        if (P.size < 0)
          if (P.size == -3 || P.size == -4)
            Ue += 4;
          else
            break e;
        else P.id >= l && (Ue += 4);
        P.next();
      }
      j = It, G += D, N += Ue;
    }
    return (T < 0 || G == v) && (X.size = G, X.start = j, X.skip = N), X.size > 4 ? X : void 0;
  }
  function Q(v, T, P) {
    let { id: G, start: j, end: N, size: z } = a;
    if (a.next(), z >= 0 && G < l) {
      let X = P;
      if (z > 4) {
        let B = a.pos - (z - 4);
        for (; a.pos > B; )
          P = Q(v, T, P);
      }
      T[--P] = X, T[--P] = N - v, T[--P] = j - v, T[--P] = G;
    } else z == -3 ? h = G : z == -4 && (O = G);
    return P;
  }
  let k = [], w = [];
  for (; a.pos > 0; )
    c(s.start || 0, s.bufferStart || 0, k, w, -1, 0);
  let A = (e = s.length) !== null && e !== void 0 ? e : k.length ? w[0] + k[0].length : 0;
  return new _(o[s.topID], k.reverse(), w.reverse(), A);
}
const Pl = /* @__PURE__ */ new WeakMap();
function tr(s, e) {
  if (!s.isAnonymous || e instanceof nt || e.type != s)
    return 1;
  let t = Pl.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != s || !(i instanceof _)) {
        t = 1;
        break;
      }
      t += tr(s, i);
    }
    Pl.set(e, t);
  }
  return t;
}
function Qn(s, e, t, i, r, n, l, a, o) {
  let h = 0;
  for (let d = i; d < r; d++)
    h += tr(s, e[d]);
  let O = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), c = [], f = [];
  function u(d, p, m, Q, k) {
    for (let w = m; w < Q; ) {
      let A = w, v = p[w], T = tr(s, d[w]);
      for (w++; w < Q; w++) {
        let P = tr(s, d[w]);
        if (T + P >= O)
          break;
        T += P;
      }
      if (w == A + 1) {
        if (T > O) {
          let P = d[A];
          u(P.children, P.positions, 0, P.children.length, p[A] + k);
          continue;
        }
        c.push(d[A]);
      } else {
        let P = p[w - 1] + d[w - 1].length - v;
        c.push(Qn(s, d, p, A, w, v, P, null, o));
      }
      f.push(v + k - n);
    }
  }
  return u(e, t, i, r, 0), (a || o)(c, f, l);
}
class Io {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, i) {
    let r = this.map.get(e);
    r || this.map.set(e, r = /* @__PURE__ */ new Map()), r.set(t, i);
  }
  getBuffer(e, t) {
    let i = this.map.get(e);
    return i && i.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof Le ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof le && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof Le ? this.getBuffer(e.context.buffer, e.index) : e instanceof le ? this.map.get(e.tree) : void 0;
  }
  /**
  Set the value for the node that a cursor currently points to.
  */
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /**
  Retrieve the value for the node that a cursor currently points
  to.
  */
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
}
class Ge {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, i, r, n = !1, l = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = r, this.open = (n ? 1 : 0) | (l ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], i = !1) {
    let r = [new Ge(0, e.length, e, 0, !1, i)];
    for (let n of t)
      n.to > e.length && r.push(n);
    return r;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let r = [], n = 1, l = e.length ? e[0] : null;
    for (let a = 0, o = 0, h = 0; ; a++) {
      let O = a < t.length ? t[a] : null, c = O ? O.fromA : 1e9;
      if (c - o >= i)
        for (; l && l.from < c; ) {
          let f = l;
          if (o >= f.from || c <= f.to || h) {
            let u = Math.max(f.from, o) - h, d = Math.min(f.to, c) - h;
            f = u >= d ? null : new Ge(u, d, f.tree, f.offset + h, a > 0, !!O);
          }
          if (f && r.push(f), l.to > c)
            break;
          l = n < e.length ? e[n++] : null;
        }
      if (!O)
        break;
      o = O.toA, h = O.toA - O.toB;
    }
    return r;
  }
}
class Sn {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, i) {
    return typeof e == "string" && (e = new Zf(e)), i = i ? i.length ? i.map((r) => new xe(r.from, r.to)) : [new xe(0, 0)] : [new xe(0, e.length)], this.createParse(e, t || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, i) {
    let r = this.startParse(e, t, i);
    for (; ; ) {
      let n = r.advance();
      if (n)
        return n;
    }
  }
}
class Zf {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
function Bo(s) {
  return (e, t, i, r) => new Cf(e, s, t, i, r);
}
class vl {
  constructor(e, t, i, r, n, l) {
    this.parser = e, this.parse = t, this.overlay = i, this.bracketed = r, this.target = n, this.from = l;
  }
}
function Tl(s) {
  if (!s.length || s.some((e) => e.from >= e.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(s));
}
class Xf {
  constructor(e, t, i, r, n, l, a, o) {
    this.parser = e, this.predicate = t, this.mounts = i, this.index = r, this.start = n, this.bracketed = l, this.target = a, this.prev = o, this.depth = 0, this.ranges = [];
  }
}
const Is = new R({ perNode: !0 });
class Cf {
  constructor(e, t, i, r, n) {
    this.nest = t, this.input = i, this.fragments = r, this.ranges = n, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let i = this.baseParse.advance();
      if (!i)
        return null;
      if (this.baseParse = null, this.baseTree = i, this.startInner(), this.stoppedAt != null)
        for (let r of this.inner)
          r.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let i = this.baseTree;
      return this.stoppedAt != null && (i = new _(i.type, i.children, i.positions, i.length, i.propValues.concat([[Is, this.stoppedAt]]))), i;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let i = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      i[R.mounted.id] = new Pt(t, e.overlay, e.parser, e.bracketed), e.target.props = i;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let e = this.input.length;
    for (let t = this.innerDone; t < this.inner.length; t++)
      this.inner[t].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (this.stoppedAt = e, this.baseParse)
      this.baseParse.stopAt(e);
    else
      for (let t = this.innerDone; t < this.inner.length; t++)
        this.inner[t].parse.stopAt(e);
  }
  startInner() {
    let e = new zf(this.fragments), t = null, i = null, r = new mr(new le(this.baseTree, this.ranges[0].from, 0, null), q.IncludeAnonymous | q.IgnoreMounts);
    e: for (let n, l; ; ) {
      let a = !0, o;
      if (this.stoppedAt != null && r.from >= this.stoppedAt)
        a = !1;
      else if (e.hasNode(r)) {
        if (t) {
          let h = t.mounts.find((O) => O.frag.from <= r.from && O.frag.to >= r.to && O.mount.overlay);
          if (h)
            for (let O of h.mount.overlay) {
              let c = O.from + h.pos, f = O.to + h.pos;
              c >= r.from && f <= r.to && !t.ranges.some((u) => u.from < f && u.to > c) && t.ranges.push({ from: c, to: f });
            }
        }
        a = !1;
      } else if (i && (l = Af(i.ranges, r.from, r.to)))
        a = l != 2;
      else if (!r.type.isAnonymous && (n = this.nest(r, this.input)) && (r.from < r.to || !n.overlay)) {
        r.tree || (Rf(r), t && t.depth++, i && i.depth++);
        let h = e.findMounts(r.from, n.parser);
        if (typeof n.overlay == "function")
          t = new Xf(n.parser, n.overlay, h, this.inner.length, r.from, !!n.bracketed, r.tree, t);
        else {
          let O = Cl(this.ranges, n.overlay || (r.from < r.to ? [new xe(r.from, r.to)] : []));
          O.length && Tl(O), (O.length || !n.overlay) && this.inner.push(new vl(n.parser, O.length ? n.parser.startParse(this.input, Al(h, O), O) : n.parser.startParse(""), n.overlay ? n.overlay.map((c) => new xe(c.from - r.from, c.to - r.from)) : null, !!n.bracketed, r.tree, O.length ? O[0].from : r.from)), n.overlay ? O.length && (i = { ranges: O, depth: 0, prev: i }) : a = !1;
        }
      } else if (t && (o = t.predicate(r)) && (o === !0 && (o = new xe(r.from, r.to)), o.from < o.to)) {
        let h = t.ranges.length - 1;
        h >= 0 && t.ranges[h].to == o.from ? t.ranges[h] = { from: t.ranges[h].from, to: o.to } : t.ranges.push(o);
      }
      if (a && r.firstChild())
        t && t.depth++, i && i.depth++;
      else
        for (; !r.nextSibling(); ) {
          if (!r.parent())
            break e;
          if (t && !--t.depth) {
            let h = Cl(this.ranges, t.ranges);
            h.length && (Tl(h), this.inner.splice(t.index, 0, new vl(t.parser, t.parser.startParse(this.input, Al(t.mounts, h), h), t.ranges.map((O) => new xe(O.from - t.start, O.to - t.start)), t.bracketed, t.target, h[0].from))), t = t.prev;
          }
          i && !--i.depth && (i = i.prev);
        }
    }
  }
}
function Af(s, e, t) {
  for (let i of s) {
    if (i.from >= t)
      break;
    if (i.to > e)
      return i.from <= e && i.to >= t ? 2 : 1;
  }
  return 0;
}
function Zl(s, e, t, i, r, n) {
  if (e < t) {
    let l = s.buffer[e + 1];
    i.push(s.slice(e, t, l)), r.push(l - n);
  }
}
function Rf(s) {
  let { node: e } = s, t = [], i = e.context.buffer;
  do
    t.push(s.index), s.parent();
  while (!s.tree);
  let r = s.tree, n = r.children.indexOf(i), l = r.children[n], a = l.buffer, o = [n];
  function h(O, c, f, u, d, p) {
    let m = t[p], Q = [], k = [];
    Zl(l, O, m, Q, k, u);
    let w = a[m + 1], A = a[m + 2];
    o.push(Q.length);
    let v = p ? h(m + 4, a[m + 3], l.set.types[a[m]], w, A - w, p - 1) : e.toTree();
    return Q.push(v), k.push(w - u), Zl(l, a[m + 3], c, Q, k, u), new _(f, Q, k, d);
  }
  r.children[n] = h(0, a.length, J.none, 0, l.length, t.length - 1);
  for (let O of o) {
    let c = s.tree.children[O], f = s.tree.positions[O];
    s.yield(new le(c, f + s.from, O, s._tree));
  }
}
class Xl {
  constructor(e, t) {
    this.offset = t, this.done = !1, this.cursor = e.cursor(q.IncludeAnonymous | q.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(e) {
    let { cursor: t } = this, i = e - this.offset;
    for (; !this.done && t.from < i; )
      t.to >= e && t.enter(i, 1, q.IgnoreOverlays | q.ExcludeBuffers) || t.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree)
      for (let t = this.cursor.tree; ; ) {
        if (t == e.tree)
          return !0;
        if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof _)
          t = t.children[0];
        else
          break;
      }
    return !1;
  }
}
let zf = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let i = this.curFrag = e[0];
      this.curTo = (t = i.tree.prop(Is)) !== null && t !== void 0 ? t : i.to, this.inner = new Xl(i.tree, -i.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
  }
  nextFrag() {
    var e;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let t = this.curFrag = this.fragments[this.fragI];
      this.curTo = (e = t.tree.prop(Is)) !== null && e !== void 0 ? e : t.to, this.inner = new Xl(t.tree, -t.offset);
    }
  }
  findMounts(e, t) {
    var i;
    let r = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let n = this.inner.cursor.node; n; n = n.parent) {
        let l = (i = n.tree) === null || i === void 0 ? void 0 : i.prop(R.mounted);
        if (l && l.parser == t)
          for (let a = this.fragI; a < this.fragments.length; a++) {
            let o = this.fragments[a];
            if (o.from >= n.to)
              break;
            o.tree == this.curFrag.tree && r.push({
              frag: o,
              pos: n.from - o.offset,
              mount: l
            });
          }
      }
    }
    return r;
  }
};
function Cl(s, e) {
  let t = null, i = e;
  for (let r = 1, n = 0; r < s.length; r++) {
    let l = s[r - 1].to, a = s[r].from;
    for (; n < i.length; n++) {
      let o = i[n];
      if (o.from >= a)
        break;
      o.to <= l || (t || (i = t = e.slice()), o.from < l ? (t[n] = new xe(o.from, l), o.to > a && t.splice(n + 1, 0, new xe(a, o.to))) : o.to > a ? t[n--] = new xe(a, o.to) : t.splice(n--, 1));
    }
  }
  return i;
}
function Mf(s, e, t, i) {
  let r = 0, n = 0, l = !1, a = !1, o = -1e9, h = [];
  for (; ; ) {
    let O = r == s.length ? 1e9 : l ? s[r].to : s[r].from, c = n == e.length ? 1e9 : a ? e[n].to : e[n].from;
    if (l != a) {
      let f = Math.max(o, t), u = Math.min(O, c, i);
      f < u && h.push(new xe(f, u));
    }
    if (o = Math.min(O, c), o == 1e9)
      break;
    O == o && (l ? (l = !1, r++) : l = !0), c == o && (a ? (a = !1, n++) : a = !0);
  }
  return h;
}
function Al(s, e) {
  let t = [];
  for (let { pos: i, mount: r, frag: n } of s) {
    let l = i + (r.overlay ? r.overlay[0].from : 0), a = l + r.tree.length, o = Math.max(n.from, l), h = Math.min(n.to, a);
    if (r.overlay) {
      let O = r.overlay.map((f) => new xe(f.from + i, f.to + i)), c = Mf(e, O, o, h);
      for (let f = 0, u = o; ; f++) {
        let d = f == c.length, p = d ? h : c[f].from;
        if (p > u && t.push(new Ge(u, p, r.tree, -l, n.from >= u || n.openStart, n.to <= p || n.openEnd)), d)
          break;
        u = c[f].to;
      }
    } else
      t.push(new Ge(o, h, r.tree, -l, n.from >= l || n.openStart, n.to <= a || n.openEnd));
  }
  return t;
}
let Yf = 0;
class me {
  /**
  @internal
  */
  constructor(e, t, i, r) {
    this.name = e, this.set = t, this.base = i, this.modified = r, this.id = Yf++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof me && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let r = new me(i, [], null, []);
    if (r.set.push(r), t)
      for (let n of t.set)
        r.set.push(n);
    return r;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new Qr(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : Qr.get(i.base || i, i.modified.concat(t).sort((r, n) => r.id - n.id));
  }
}
let _f = 0;
class Qr {
  constructor(e) {
    this.name = e, this.instances = [], this.id = _f++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((a) => a.base == e && Lf(t, a.modified));
    if (i)
      return i;
    let r = [], n = new me(e.name, r, e, t);
    for (let a of t)
      a.instances.push(n);
    let l = Ef(t);
    for (let a of e.set)
      if (!a.modified.length)
        for (let o of l)
          r.push(Qr.get(a, o));
    return n;
  }
}
function Lf(s, e) {
  return s.length == e.length && s.every((t, i) => t == e[i]);
}
function Ef(s) {
  let e = [[]];
  for (let t = 0; t < s.length; t++)
    for (let i = 0, r = e.length; i < r; i++)
      e.push(e[i].concat(s[t]));
  return e.sort((t, i) => i.length - t.length);
}
function Wt(s) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in s) {
    let i = s[t];
    Array.isArray(i) || (i = [i]);
    for (let r of t.split(" "))
      if (r) {
        let n = [], l = 2, a = r;
        for (let c = 0; ; ) {
          if (a == "..." && c > 0 && c + 3 == r.length) {
            l = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);
          if (!f)
            throw new RangeError("Invalid path: " + r);
          if (n.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]), c += f[0].length, c == r.length)
            break;
          let u = r[c++];
          if (c == r.length && u == "!") {
            l = 0;
            break;
          }
          if (u != "/")
            throw new RangeError("Invalid path: " + r);
          a = r.slice(c);
        }
        let o = n.length - 1, h = n[o];
        if (!h)
          throw new RangeError("Invalid path: " + r);
        let O = new Sr(i, l, o > 0 ? n.slice(0, o) : null);
        e[h] = O.sort(e[h]);
      }
  }
  return qf.add(e);
}
const qf = new R({
  combine(s, e) {
    let t, i, r;
    for (; s || e; ) {
      if (!s || e && s.depth >= e.depth ? (r = e, e = e.next) : (r = s, s = s.next), t && t.mode == r.mode && !r.context && !t.context)
        continue;
      let n = new Sr(r.tags, r.mode, r.context);
      t ? t.next = n : i = n, t = n;
    }
    return i;
  }
});
class Sr {
  constructor(e, t, i, r) {
    this.tags = e, this.mode = t, this.context = i, this.next = r;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Sr.empty = new Sr([], 2, null);
function Vf(s, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n of s)
    if (!Array.isArray(n.tag))
      t[n.tag.id] = n.class;
    else
      for (let l of n.tag)
        t[l.id] = n.class;
  let { scope: i, all: r = null } = {};
  return {
    style: (n) => {
      let l = r;
      for (let a of n)
        for (let o of a.set) {
          let h = t[o.id];
          if (h) {
            l = l ? l + " " + h : h;
            break;
          }
        }
      return l;
    },
    scope: i
  };
}
const b = me.define, Bi = b(), He = b(), Rl = b(He), zl = b(He), Ke = b(), Di = b(Ke), Nr = b(Ke), ze = b(), ht = b(ze), Ae = b(), Re = b(), Bs = b(), Gt = b(Bs), Gi = b(), g = {
  /**
  A comment.
  */
  comment: Bi,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: b(Bi),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: b(Bi),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: b(Bi),
  /**
  Any kind of identifier.
  */
  name: He,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: b(He),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Rl,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: b(Rl),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: zl,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: b(zl),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: b(He),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: b(He),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: b(He),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: b(He),
  /**
  A literal value.
  */
  literal: Ke,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: Di,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: b(Di),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: b(Di),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: b(Di),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Nr,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: b(Nr),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: b(Nr),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: b(Ke),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: b(Ke),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: b(Ke),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: b(Ke),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: b(Ke),
  /**
  A language keyword.
  */
  keyword: Ae,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: b(Ae),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: b(Ae),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: b(Ae),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: b(Ae),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: b(Ae),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: b(Ae),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: b(Ae),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: b(Ae),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: b(Ae),
  /**
  An operator.
  */
  operator: Re,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: b(Re),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: b(Re),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: b(Re),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: b(Re),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: b(Re),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: b(Re),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: b(Re),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: b(Re),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: b(Re),
  /**
  Program or markup punctuation.
  */
  punctuation: Bs,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: b(Bs),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: Gt,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: b(Gt),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: b(Gt),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: b(Gt),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: b(Gt),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: ze,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: ht,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: b(ht),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: b(ht),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: b(ht),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: b(ht),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: b(ht),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: b(ht),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: b(ze),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: b(ze),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: b(ze),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: b(ze),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: b(ze),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: b(ze),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: b(ze),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: b(ze),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: b(),
  /**
  Deleted text.
  */
  deleted: b(),
  /**
  Changed text.
  */
  changed: b(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: b(),
  /**
  Metadata or meta-instruction.
  */
  meta: Gi,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: b(Gi),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: b(Gi),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: b(Gi),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: me.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: me.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: me.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: me.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: me.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: me.defineModifier("special")
};
for (let s in g) {
  let e = g[s];
  e instanceof me && (e.name = s);
}
Vf([
  { tag: g.link, class: "tok-link" },
  { tag: g.heading, class: "tok-heading" },
  { tag: g.emphasis, class: "tok-emphasis" },
  { tag: g.strong, class: "tok-strong" },
  { tag: g.keyword, class: "tok-keyword" },
  { tag: g.atom, class: "tok-atom" },
  { tag: g.bool, class: "tok-bool" },
  { tag: g.url, class: "tok-url" },
  { tag: g.labelName, class: "tok-labelName" },
  { tag: g.inserted, class: "tok-inserted" },
  { tag: g.deleted, class: "tok-deleted" },
  { tag: g.literal, class: "tok-literal" },
  { tag: g.string, class: "tok-string" },
  { tag: g.number, class: "tok-number" },
  { tag: [g.regexp, g.escape, g.special(g.string)], class: "tok-string2" },
  { tag: g.variableName, class: "tok-variableName" },
  { tag: g.local(g.variableName), class: "tok-variableName tok-local" },
  { tag: g.definition(g.variableName), class: "tok-variableName tok-definition" },
  { tag: g.special(g.variableName), class: "tok-variableName2" },
  { tag: g.definition(g.propertyName), class: "tok-propertyName tok-definition" },
  { tag: g.typeName, class: "tok-typeName" },
  { tag: g.namespace, class: "tok-namespace" },
  { tag: g.className, class: "tok-className" },
  { tag: g.macroName, class: "tok-macroName" },
  { tag: g.propertyName, class: "tok-propertyName" },
  { tag: g.operator, class: "tok-operator" },
  { tag: g.comment, class: "tok-comment" },
  { tag: g.meta, class: "tok-meta" },
  { tag: g.invalid, class: "tok-invalid" },
  { tag: g.punctuation, class: "tok-punctuation" }
]);
var Ur;
const kt = /* @__PURE__ */ new R();
function bn(s) {
  return Z.define({
    combine: s ? (e) => e.concat(s) : void 0
  });
}
const kn = /* @__PURE__ */ new R();
class Te {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], r = "") {
    this.data = e, this.name = r, L.prototype.hasOwnProperty("tree") || Object.defineProperty(L.prototype, "tree", { get() {
      return ae(this);
    } }), this.parser = t, this.extension = [
      _t.of(this),
      L.languageData.of((n, l, a) => {
        let o = Ml(n, l, a), h = o.type.prop(kt);
        if (!h)
          return [];
        let O = n.facet(h), c = o.type.prop(kn);
        if (c) {
          let f = o.resolve(l - o.from, a);
          for (let u of c)
            if (u.test(f, n)) {
              let d = n.facet(u.facet);
              return u.type == "replace" ? d : d.concat(O);
            }
        }
        return O;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, i = -1) {
    return Ml(e, t, i).type.prop(kt) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(_t);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], r = (n, l) => {
      if (n.prop(kt) == this.data) {
        i.push({ from: l, to: l + n.length });
        return;
      }
      let a = n.prop(R.mounted);
      if (a) {
        if (a.tree.prop(kt) == this.data) {
          if (a.overlay)
            for (let o of a.overlay)
              i.push({ from: o.from + l, to: o.to + l });
          else
            i.push({ from: l, to: l + n.length });
          return;
        } else if (a.overlay) {
          let o = i.length;
          if (r(a.tree, a.overlay[0].from + l), i.length > o)
            return;
        }
      }
      for (let o = 0; o < n.children.length; o++) {
        let h = n.children[o];
        h instanceof _ && r(h, n.positions[o] + l);
      }
    };
    return r(ae(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
Te.setState = /* @__PURE__ */ U.define();
function Ml(s, e, t) {
  let i = s.facet(_t), r = ae(s).topNode;
  if (!i || i.allowsNesting)
    for (let n = r; n; n = n.enter(e, t, q.ExcludeBuffers | q.EnterBracketed))
      n.type.isTop && (r = n);
  return r;
}
class Mt extends Te {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = bn(e.languageData);
    return new Mt(t, e.parser.configure({
      props: [kt.add((i) => i.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new Mt(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function ae(s) {
  let e = s.field(Te.state, !1);
  return e ? e.tree : _.empty;
}
class Wf {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let Nt = null;
class mi {
  constructor(e, t, i = [], r, n, l, a, o) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = r, this.treeLen = n, this.viewport = l, this.skipped = a, this.scheduleOn = o, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new mi(e, t, [], _.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Wf(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != _.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(Ge.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Ge.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = Nt;
    Nt = this;
    try {
      return e();
    } finally {
      Nt = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Yl(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: r, treeLen: n, viewport: l, skipped: a } = this;
    if (this.takeTree(), !e.empty) {
      let o = [];
      if (e.iterChangedRanges((h, O, c, f) => o.push({ fromA: h, toA: O, fromB: c, toB: f })), i = Ge.applyChanges(i, o), r = _.empty, n = 0, l = { from: e.mapPos(l.from, -1), to: e.mapPos(l.to, 1) }, this.skipped.length) {
        a = [];
        for (let h of this.skipped) {
          let O = e.mapPos(h.from, 1), c = e.mapPos(h.to, -1);
          O < c && a.push({ from: O, to: c });
        }
      }
    }
    return new mi(this.parser, t, i, r, n, l, a, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: r, to: n } = this.skipped[i];
      r < e.to && n > e.from && (this.fragments = Yl(this.fragments, r, n), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends Sn {
      createParse(t, i, r) {
        let n = r[0].from, l = r[r.length - 1].to;
        return {
          parsedPos: n,
          advance() {
            let o = Nt;
            if (o) {
              for (let h of r)
                o.tempSkipped.push(h);
              e && (o.scheduleOn = o.scheduleOn ? Promise.all([o.scheduleOn, e]) : e);
            }
            return this.parsedPos = l, new _(J.none, [], [], l - n);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return Nt;
  }
}
function Yl(s, e, t) {
  return Ge.applyChanges(s, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Yt {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Yt(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = mi.create(e.facet(_t).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Yt(i);
  }
}
Te.state = /* @__PURE__ */ lt.define({
  create: Yt.init,
  update(s, e) {
    for (let t of e.effects)
      if (t.is(Te.setState))
        return t.value;
    return e.startState.facet(_t) != e.state.facet(_t) ? Yt.init(e.state) : s.apply(e);
  }
});
let Do = (s) => {
  let e = setTimeout(
    () => s(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Do = (s) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(s, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const Fr = typeof navigator < "u" && (!((Ur = navigator.scheduling) === null || Ur === void 0) && Ur.isInputPending) ? () => navigator.scheduling.isInputPending() : null, jf = /* @__PURE__ */ mt.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Te.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(Te.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Do(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: r } } = this.view, n = i.field(Te.state);
    if (n.tree == n.context.tree && n.context.isDone(
      r + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let l = Date.now() + Math.min(this.chunkBudget, 100, e && !Fr ? Math.max(25, e.timeRemaining() - 5) : 1e9), a = n.context.treeLen < r && i.doc.length > r + 1e3, o = n.context.work(() => Fr && Fr() || Date.now() > l, r + (a ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (o || this.chunkBudget <= 0) && (n.context.takeTree(), this.view.dispatch({ effects: Te.setState.of(new Yt(n.context)) })), this.chunkBudget > 0 && !(o && !a) && this.scheduleWork(), this.checkAsyncSchedule(n.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => _e(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), _t = /* @__PURE__ */ Z.define({
  combine(s) {
    return s.length ? s[0] : null;
  },
  enables: (s) => [
    Te.state,
    jf,
    C.contentAttributes.compute([s], (e) => {
      let t = e.facet(s);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ]
});
class Qi {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
}
class br {
  constructor(e, t, i, r, n, l = void 0) {
    this.name = e, this.alias = t, this.extensions = i, this.filename = r, this.loadFunc = n, this.support = l, this.loading = null;
  }
  /**
  Start loading the the language. Will return a promise that
  resolves to a [`LanguageSupport`](https://codemirror.net/6/docs/ref/#language.LanguageSupport)
  object when the language successfully loads.
  */
  load() {
    return this.loading || (this.loading = this.loadFunc().then((e) => this.support = e, (e) => {
      throw this.loading = null, e;
    }));
  }
  /**
  Create a language description.
  */
  static of(e) {
    let { load: t, support: i } = e;
    if (!t) {
      if (!i)
        throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
      t = () => Promise.resolve(i);
    }
    return new br(e.name, (e.alias || []).concat(e.name).map((r) => r.toLowerCase()), e.extensions || [], e.filename, t, i);
  }
  /**
  Look for a language in the given array of descriptions that
  matches the filename. Will first match
  [`filename`](https://codemirror.net/6/docs/ref/#language.LanguageDescription.filename) patterns,
  and then [extensions](https://codemirror.net/6/docs/ref/#language.LanguageDescription.extensions),
  and return the first language that matches.
  */
  static matchFilename(e, t) {
    for (let r of e)
      if (r.filename && r.filename.test(t))
        return r;
    let i = /\.([^.]+)$/.exec(t);
    if (i) {
      for (let r of e)
        if (r.extensions.indexOf(i[1]) > -1)
          return r;
    }
    return null;
  }
  /**
  Look for a language whose name or alias matches the the given
  name (case-insensitively). If `fuzzy` is true, and no direct
  matchs is found, this'll also search for a language whose name
  or alias occurs in the string (for names shorter than three
  characters, only when surrounded by non-word characters).
  */
  static matchLanguageName(e, t, i = !0) {
    t = t.toLowerCase();
    for (let r of e)
      if (r.alias.some((n) => n == t))
        return r;
    if (i)
      for (let r of e)
        for (let n of r.alias) {
          let l = t.indexOf(n);
          if (l > -1 && (n.length > 2 || !/\w/.test(t[l - 1]) && !/\w/.test(t[l + n.length])))
            return r;
        }
    return null;
  }
}
const Go = /* @__PURE__ */ Z.define({
  combine: (s) => {
    if (!s.length)
      return "  ";
    let e = s[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
    return e;
  }
}), Mr = /* @__PURE__ */ new R();
function If(s) {
  let e = s.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let r = s.options.simulateBreak, n = s.state.doc.lineAt(t.from), l = r == null || r <= n.from ? n.to : Math.min(n.to, r);
  for (let a = t.to; ; ) {
    let o = e.childAfter(a);
    if (!o || o == i)
      return null;
    if (!o.type.isSkipped) {
      if (o.from >= l)
        return null;
      let h = /^ */.exec(n.text.slice(t.to - n.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    a = o.to;
  }
}
function Bf({ closing: s, align: e = !0, units: t = 1 }) {
  return (i) => Df(i, e, t, s);
}
function Df(s, e, t, i, r) {
  let n = s.textAfter, l = n.match(/^\s*/)[0].length, a = i && n.slice(l, l + i.length) == i || r == s.pos + l, o = e ? If(s) : null;
  return o ? a ? s.column(o.from) : s.column(o.to) : s.baseIndent + (a ? 0 : s.unit * t);
}
const Gf = (s) => s.baseIndent;
function ir({ except: s, units: e = 1 } = {}) {
  return (t) => {
    let i = s && s.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
const Nf = /* @__PURE__ */ Z.define(), Zi = /* @__PURE__ */ new R();
function No(s) {
  let e = s.firstChild, t = s.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? s.to : t.from } : null;
}
const Uf = /* @__PURE__ */ new R(), Ff = /* @__PURE__ */ Object.create(null), _l = [J.none], Ll = [], El = /* @__PURE__ */ Object.create(null), Hf = /* @__PURE__ */ Object.create(null);
for (let [s, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  Hf[s] = /* @__PURE__ */ Kf(Ff, e);
function Hr(s, e) {
  Ll.indexOf(s) > -1 || (Ll.push(s), console.warn(e));
}
function Kf(s, e) {
  let t = [];
  for (let a of e.split(" ")) {
    let o = [];
    for (let h of a.split(".")) {
      let O = s[h] || g[h];
      O ? typeof O == "function" ? o.length ? o = o.map(O) : Hr(h, `Modifier ${h} used at start of tag`) : o.length ? Hr(h, `Tag ${h} used as modifier`) : o = Array.isArray(O) ? O : [O] : Hr(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of o)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), r = i + " " + t.map((a) => a.id), n = El[r];
  if (n)
    return n.id;
  let l = El[r] = J.define({
    id: _l.length,
    name: i,
    props: [Wt({ [i]: t })]
  });
  return _l.push(l), l.id;
}
K.RTL, K.LTR;
class Jf {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, i, r) {
    this.state = e, this.pos = t, this.explicit = i, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = ae(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), r = t.text.slice(i - t.from, this.pos - t.from), n = r.search(ru(e));
    return n < 0 ? null : { from: i + n, to: this.pos, text: r.slice(n) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function ql(s) {
  let e = Object.keys(s).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function eu(s) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of s) {
    e[r[0]] = !0;
    for (let n = 1; n < r.length; n++)
      t[r[n]] = !0;
  }
  let i = ql(e) + ql(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function tu(s) {
  let e = s.map((r) => typeof r == "string" ? { label: r } : r), [t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : eu(e);
  return (r) => {
    let n = r.matchBefore(i);
    return n || r.explicit ? { from: n ? n.from : r.pos, options: e, validFor: t } : null;
  };
}
function iu(s, e) {
  return (t) => {
    for (let i = ae(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (s.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
function ru(s, e) {
  var t;
  let { source: i } = s, r = i[i.length - 1] != "$";
  return r ? new RegExp(`(?:${i})${r ? "$" : ""}`, (t = s.flags) !== null && t !== void 0 ? t : s.ignoreCase ? "i" : "") : s;
}
const su = /* @__PURE__ */ Qt.define(), nu = /* @__PURE__ */ C.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
});
class lu {
  constructor(e, t, i, r) {
    this.field = e, this.line = t, this.from = i, this.to = r;
  }
}
class xn {
  constructor(e, t, i) {
    this.field = e, this.from = t, this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, he.TrackDel), i = e.mapPos(this.to, 1, he.TrackDel);
    return t == null || i == null ? null : new xn(this.field, t, i);
  }
}
class wn {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [], r = [t], n = e.doc.lineAt(t), l = /^\s*/.exec(n.text)[0];
    for (let o of this.lines) {
      if (i.length) {
        let h = l, O = /^\t*/.exec(o)[0].length;
        for (let c = 0; c < O; c++)
          h += e.facet(Go);
        r.push(t + h.length - O), o = h + o.slice(O);
      }
      i.push(o), t += o.length + 1;
    }
    let a = this.fieldPositions.map((o) => new xn(o.field, r[o.line] + o.from, r[o.line] + o.to));
    return { text: i, ranges: a };
  }
  static parse(e) {
    let t = [], i = [], r = [], n;
    for (let l of e.split(/\r\n?|\n/)) {
      for (; n = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(l); ) {
        let a = n[1] ? +n[1] : null, o = n[2] || n[3] || "", h = -1, O = o.replace(/\\[{}]/g, (c) => c[1]);
        for (let c = 0; c < t.length; c++)
          (a != null ? t[c].seq == a : O && t[c].name == O) && (h = c);
        if (h < 0) {
          let c = 0;
          for (; c < t.length && (a == null || t[c].seq != null && t[c].seq < a); )
            c++;
          t.splice(c, 0, { seq: a, name: O }), h = c;
          for (let f of r)
            f.field >= h && f.field++;
        }
        for (let c of r)
          if (c.line == i.length && c.from > n.index) {
            let f = n[2] ? 3 + (n[1] || "").length : 2;
            c.from -= f, c.to -= f;
          }
        r.push(new lu(h, i.length, n.index, n.index + O.length)), l = l.slice(0, n.index) + o + l.slice(n.index + n[0].length);
      }
      l = l.replace(/\\([{}])/g, (a, o, h) => {
        for (let O of r)
          O.line == i.length && O.from > h && (O.from--, O.to--);
        return o;
      }), i.push(l);
    }
    return new wn(i, r);
  }
}
let au = /* @__PURE__ */ E.widget({ widget: /* @__PURE__ */ new class extends yi {
  toDOM() {
    let s = document.createElement("span");
    return s.className = "cm-snippetFieldPosition", s;
  }
  ignoreEvent() {
    return !1;
  }
}() }), ou = /* @__PURE__ */ E.mark({ class: "cm-snippetField" });
class jt {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = E.set(e.map((i) => (i.from == i.to ? au : ou).range(i.from, i.to)), !0);
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let r = i.map(e);
      if (!r)
        return null;
      t.push(r);
    }
    return new jt(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
}
const Xi = /* @__PURE__ */ U.define({
  map(s, e) {
    return s && s.map(e);
  }
}), hu = /* @__PURE__ */ U.define(), Si = /* @__PURE__ */ lt.define({
  create() {
    return null;
  },
  update(s, e) {
    for (let t of e.effects) {
      if (t.is(Xi))
        return t.value;
      if (t.is(hu) && s)
        return new jt(s.ranges, t.value);
    }
    return s && e.docChanged && (s = s.map(e.changes)), s && e.selection && !s.selectionInsideField(e.selection) && (s = null), s;
  },
  provide: (s) => C.decorations.from(s, (e) => e ? e.deco : E.none)
});
function yn(s, e) {
  return x.create(s.filter((t) => t.field == e).map((t) => x.range(t.from, t.to)));
}
function Ou(s) {
  let e = wn.parse(s);
  return (t, i, r, n) => {
    let { text: l, ranges: a } = e.instantiate(t.state, r), { main: o } = t.state.selection, h = {
      changes: { from: r, to: n == o.from ? o.to : n, insert: Y.of(l) },
      scrollIntoView: !0,
      annotations: i ? [su.of(i), se.userEvent.of("input.complete")] : void 0
    };
    if (a.length && (h.selection = yn(a, 0)), a.some((O) => O.field > 0)) {
      let O = new jt(a, 0), c = h.effects = [Xi.of(O)];
      t.state.field(Si, !1) === void 0 && c.push(U.appendConfig.of([Si, pu, gu, nu]));
    }
    t.dispatch(t.state.update(h));
  };
}
function Uo(s) {
  return ({ state: e, dispatch: t }) => {
    let i = e.field(Si, !1);
    if (!i || s < 0 && i.active == 0)
      return !1;
    let r = i.active + s, n = s > 0 && !i.ranges.some((l) => l.field == r + s);
    return t(e.update({
      selection: yn(i.ranges, r),
      effects: Xi.of(n ? null : new jt(i.ranges, r)),
      scrollIntoView: !0
    })), !0;
  };
}
const cu = ({ state: s, dispatch: e }) => s.field(Si, !1) ? (e(s.update({ effects: Xi.of(null) })), !0) : !1, fu = /* @__PURE__ */ Uo(1), uu = /* @__PURE__ */ Uo(-1), du = [
  { key: "Tab", run: fu, shift: uu },
  { key: "Escape", run: cu }
], Vl = /* @__PURE__ */ Z.define({
  combine(s) {
    return s.length ? s[0] : du;
  }
}), pu = /* @__PURE__ */ Zr.highest(/* @__PURE__ */ pn.compute([Vl], (s) => s.facet(Vl)));
function ce(s, e) {
  return { ...e, apply: Ou(s) };
}
const gu = /* @__PURE__ */ C.domEventHandlers({
  mousedown(s, e) {
    let t = e.state.field(Si, !1), i;
    if (!t || (i = e.posAtCoords({ x: s.clientX, y: s.clientY })) == null)
      return !1;
    let r = t.ranges.find((n) => n.from <= i && n.to >= i);
    return !r || r.field == t.active ? !1 : (e.dispatch({
      selection: yn(t.ranges, r.field),
      effects: Xi.of(t.ranges.some((n) => n.field > r.field) ? new jt(t.ranges, r.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), Fo = /* @__PURE__ */ new class extends it {
}();
Fo.startSide = 1;
Fo.endSide = -1;
class kr {
  static create(e, t, i, r, n) {
    let l = r + (r << 8) + e + (t << 4) | 0;
    return new kr(e, t, i, l, n, [], []);
  }
  constructor(e, t, i, r, n, l, a) {
    this.type = e, this.value = t, this.from = i, this.hash = r, this.end = n, this.children = l, this.positions = a, this.hashProp = [[R.contextHash, r]];
  }
  addChild(e, t) {
    e.prop(R.contextHash) != this.hash && (e = new _(e.type, e.children, e.positions, e.length, this.hashProp)), this.children.push(e), this.positions.push(t);
  }
  toTree(e, t = this.end) {
    let i = this.children.length - 1;
    return i >= 0 && (t = Math.max(t, this.positions[i] + this.children[i].length + this.from)), new _(e.types[this.type], this.children, this.positions, t - this.from).balance({
      makeTree: (r, n, l) => new _(J.none, r, n, l, this.hashProp)
    });
  }
}
var S;
(function(s) {
  s[s.Document = 1] = "Document", s[s.CodeBlock = 2] = "CodeBlock", s[s.FencedCode = 3] = "FencedCode", s[s.Blockquote = 4] = "Blockquote", s[s.HorizontalRule = 5] = "HorizontalRule", s[s.BulletList = 6] = "BulletList", s[s.OrderedList = 7] = "OrderedList", s[s.ListItem = 8] = "ListItem", s[s.ATXHeading1 = 9] = "ATXHeading1", s[s.ATXHeading2 = 10] = "ATXHeading2", s[s.ATXHeading3 = 11] = "ATXHeading3", s[s.ATXHeading4 = 12] = "ATXHeading4", s[s.ATXHeading5 = 13] = "ATXHeading5", s[s.ATXHeading6 = 14] = "ATXHeading6", s[s.SetextHeading1 = 15] = "SetextHeading1", s[s.SetextHeading2 = 16] = "SetextHeading2", s[s.HTMLBlock = 17] = "HTMLBlock", s[s.LinkReference = 18] = "LinkReference", s[s.Paragraph = 19] = "Paragraph", s[s.CommentBlock = 20] = "CommentBlock", s[s.ProcessingInstructionBlock = 21] = "ProcessingInstructionBlock", s[s.Escape = 22] = "Escape", s[s.Entity = 23] = "Entity", s[s.HardBreak = 24] = "HardBreak", s[s.Emphasis = 25] = "Emphasis", s[s.StrongEmphasis = 26] = "StrongEmphasis", s[s.Link = 27] = "Link", s[s.Image = 28] = "Image", s[s.InlineCode = 29] = "InlineCode", s[s.HTMLTag = 30] = "HTMLTag", s[s.Comment = 31] = "Comment", s[s.ProcessingInstruction = 32] = "ProcessingInstruction", s[s.Autolink = 33] = "Autolink", s[s.HeaderMark = 34] = "HeaderMark", s[s.QuoteMark = 35] = "QuoteMark", s[s.ListMark = 36] = "ListMark", s[s.LinkMark = 37] = "LinkMark", s[s.EmphasisMark = 38] = "EmphasisMark", s[s.CodeMark = 39] = "CodeMark", s[s.CodeText = 40] = "CodeText", s[s.CodeInfo = 41] = "CodeInfo", s[s.LinkTitle = 42] = "LinkTitle", s[s.LinkLabel = 43] = "LinkLabel", s[s.URL = 44] = "URL";
})(S || (S = {}));
class mu {
  /**
  @internal
  */
  constructor(e, t) {
    this.start = e, this.content = t, this.marks = [], this.parsers = [];
  }
}
class Qu {
  constructor() {
    this.text = "", this.baseIndent = 0, this.basePos = 0, this.depth = 0, this.markers = [], this.pos = 0, this.indent = 0, this.next = -1;
  }
  /**
  @internal
  */
  forward() {
    this.basePos > this.pos && this.forwardInner();
  }
  /**
  @internal
  */
  forwardInner() {
    let e = this.skipSpace(this.basePos);
    this.indent = this.countIndent(e, this.pos, this.indent), this.pos = e, this.next = e == this.text.length ? -1 : this.text.charCodeAt(e);
  }
  /**
  Skip whitespace after the given position, return the position of
  the next non-space character or the end of the line if there's
  only space after `from`.
  */
  skipSpace(e) {
    return li(this.text, e);
  }
  /**
  @internal
  */
  reset(e) {
    for (this.text = e, this.baseIndent = this.basePos = this.pos = this.indent = 0, this.forwardInner(), this.depth = 1; this.markers.length; )
      this.markers.pop();
  }
  /**
  Move the line's base position forward to the given position.
  This should only be called by composite [block
  parsers](#BlockParser.parse) or [markup skipping
  functions](#NodeSpec.composite).
  */
  moveBase(e) {
    this.basePos = e, this.baseIndent = this.countIndent(e, this.pos, this.indent);
  }
  /**
  Move the line's base position forward to the given _column_.
  */
  moveBaseColumn(e) {
    this.baseIndent = e, this.basePos = this.findColumn(e);
  }
  /**
  Store a composite-block-level marker. Should be called from
  [markup skipping functions](#NodeSpec.composite) when they
  consume any non-whitespace characters.
  */
  addMarker(e) {
    this.markers.push(e);
  }
  /**
  Find the column position at `to`, optionally starting at a given
  position and column.
  */
  countIndent(e, t = 0, i = 0) {
    for (let r = t; r < e; r++)
      i += this.text.charCodeAt(r) == 9 ? 4 - i % 4 : 1;
    return i;
  }
  /**
  Find the position corresponding to the given column.
  */
  findColumn(e) {
    let t = 0;
    for (let i = 0; t < this.text.length && i < e; t++)
      i += this.text.charCodeAt(t) == 9 ? 4 - i % 4 : 1;
    return t;
  }
  /**
  @internal
  */
  scrub() {
    if (!this.baseIndent)
      return this.text;
    let e = "";
    for (let t = 0; t < this.basePos; t++)
      e += " ";
    return e + this.text.slice(this.basePos);
  }
}
function Wl(s, e, t) {
  if (t.pos == t.text.length || s != e.block && t.indent >= e.stack[t.depth + 1].value + t.baseIndent)
    return !0;
  if (t.indent >= t.baseIndent + 4)
    return !1;
  let i = (s.type == S.OrderedList ? vn : Pn)(t, e, !1);
  return i > 0 && (s.type != S.BulletList || $n(t, e, !1) < 0) && t.text.charCodeAt(t.pos + i - 1) == s.value;
}
const Ho = {
  [S.Blockquote](s, e, t) {
    return t.next != 62 ? !1 : (t.markers.push(M(S.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1)), t.moveBase(t.pos + ($e(t.text.charCodeAt(t.pos + 1)) ? 2 : 1)), s.end = e.lineStart + t.text.length, !0);
  },
  [S.ListItem](s, e, t) {
    return t.indent < t.baseIndent + s.value && t.next > -1 ? !1 : (t.moveBaseColumn(t.baseIndent + s.value), !0);
  },
  [S.OrderedList]: Wl,
  [S.BulletList]: Wl,
  [S.Document]() {
    return !0;
  }
};
function $e(s) {
  return s == 32 || s == 9 || s == 10 || s == 13;
}
function li(s, e = 0) {
  for (; e < s.length && $e(s.charCodeAt(e)); )
    e++;
  return e;
}
function jl(s, e, t) {
  for (; e > t && $e(s.charCodeAt(e - 1)); )
    e--;
  return e;
}
function Ko(s) {
  if (s.next != 96 && s.next != 126)
    return -1;
  let e = s.pos + 1;
  for (; e < s.text.length && s.text.charCodeAt(e) == s.next; )
    e++;
  if (e < s.pos + 3)
    return -1;
  if (s.next == 96) {
    for (let t = e; t < s.text.length; t++)
      if (s.text.charCodeAt(t) == 96)
        return -1;
  }
  return e;
}
function Jo(s) {
  return s.next != 62 ? -1 : s.text.charCodeAt(s.pos + 1) == 32 ? 2 : 1;
}
function $n(s, e, t) {
  if (s.next != 42 && s.next != 45 && s.next != 95)
    return -1;
  let i = 1;
  for (let r = s.pos + 1; r < s.text.length; r++) {
    let n = s.text.charCodeAt(r);
    if (n == s.next)
      i++;
    else if (!$e(n))
      return -1;
  }
  return t && s.next == 45 && ih(s) > -1 && s.depth == e.stack.length && e.parser.leafBlockParsers.indexOf(lh.SetextHeading) > -1 || i < 3 ? -1 : 1;
}
function eh(s, e) {
  for (let t = s.stack.length - 1; t >= 0; t--)
    if (s.stack[t].type == e)
      return !0;
  return !1;
}
function Pn(s, e, t) {
  return (s.next == 45 || s.next == 43 || s.next == 42) && (s.pos == s.text.length - 1 || $e(s.text.charCodeAt(s.pos + 1))) && (!t || eh(e, S.BulletList) || s.skipSpace(s.pos + 2) < s.text.length) ? 1 : -1;
}
function vn(s, e, t) {
  let i = s.pos, r = s.next;
  for (; r >= 48 && r <= 57; ) {
    i++;
    if (i == s.text.length)
      return -1;
    r = s.text.charCodeAt(i);
  }
  return i == s.pos || i > s.pos + 9 || r != 46 && r != 41 || i < s.text.length - 1 && !$e(s.text.charCodeAt(i + 1)) || t && !eh(e, S.OrderedList) && (s.skipSpace(i + 1) == s.text.length || i > s.pos + 1 || s.next != 49) ? -1 : i + 1 - s.pos;
}
function th(s) {
  if (s.next != 35)
    return -1;
  let e = s.pos + 1;
  for (; e < s.text.length && s.text.charCodeAt(e) == 35; )
    e++;
  if (e < s.text.length && s.text.charCodeAt(e) != 32)
    return -1;
  let t = e - s.pos;
  return t > 6 ? -1 : t;
}
function ih(s) {
  if (s.next != 45 && s.next != 61 || s.indent >= s.baseIndent + 4)
    return -1;
  let e = s.pos + 1;
  for (; e < s.text.length && s.text.charCodeAt(e) == s.next; )
    e++;
  let t = e;
  for (; e < s.text.length && $e(s.text.charCodeAt(e)); )
    e++;
  return e == s.text.length ? t : -1;
}
const Ds = /^[ \t]*$/, rh = /-->/, sh = /\?>/, Gs = [
  [/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i],
  [/^\s*<!--/, rh],
  [/^\s*<\?/, sh],
  [/^\s*<![A-Z]/, />/],
  [/^\s*<!\[CDATA\[/, /\]\]>/],
  [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, Ds],
  [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, Ds]
];
function nh(s, e, t) {
  if (s.next != 60)
    return -1;
  let i = s.text.slice(s.pos);
  for (let r = 0, n = Gs.length - (t ? 1 : 0); r < n; r++)
    if (Gs[r][0].test(i))
      return r;
  return -1;
}
function Il(s, e) {
  let t = s.countIndent(e, s.pos, s.indent), i = s.countIndent(s.skipSpace(e), e, t);
  return i >= t + 5 ? t + 1 : i;
}
function Fe(s, e, t) {
  let i = s.length - 1;
  i >= 0 && s[i].to == e && s[i].type == S.CodeText ? s[i].to = t : s.push(M(S.CodeText, e, t));
}
const Ni = {
  LinkReference: void 0,
  IndentedCode(s, e) {
    let t = e.baseIndent + 4;
    if (e.indent < t)
      return !1;
    let i = e.findColumn(t), r = s.lineStart + i, n = s.lineStart + e.text.length, l = [], a = [];
    for (Fe(l, r, n); s.nextLine() && e.depth >= s.stack.length; )
      if (e.pos == e.text.length) {
        Fe(a, s.lineStart - 1, s.lineStart);
        for (let o of e.markers)
          a.push(o);
      } else {
        if (e.indent < t)
          break;
        {
          if (a.length) {
            for (let h of a)
              h.type == S.CodeText ? Fe(l, h.from, h.to) : l.push(h);
            a = [];
          }
          Fe(l, s.lineStart - 1, s.lineStart);
          for (let h of e.markers)
            l.push(h);
          n = s.lineStart + e.text.length;
          let o = s.lineStart + e.findColumn(e.baseIndent + 4);
          o < n && Fe(l, o, n);
        }
      }
    return a.length && (a = a.filter((o) => o.type != S.CodeText), a.length && (e.markers = a.concat(e.markers))), s.addNode(s.buffer.writeElements(l, -r).finish(S.CodeBlock, n - r), r), !0;
  },
  FencedCode(s, e) {
    let t = Ko(e);
    if (t < 0)
      return !1;
    let i = s.lineStart + e.pos, r = e.next, n = t - e.pos, l = e.skipSpace(t), a = jl(e.text, e.text.length, l), o = [M(S.CodeMark, i, i + n)];
    l < a && o.push(M(S.CodeInfo, s.lineStart + l, s.lineStart + a));
    for (let h = !0, O = !0, c = !1; s.nextLine() && e.depth >= s.stack.length; h = !1) {
      let f = e.pos;
      if (e.indent - e.baseIndent < 4)
        for (; f < e.text.length && e.text.charCodeAt(f) == r; )
          f++;
      if (f - e.pos >= n && e.skipSpace(f) == e.text.length) {
        for (let u of e.markers)
          o.push(u);
        O && c && Fe(o, s.lineStart - 1, s.lineStart), o.push(M(S.CodeMark, s.lineStart + e.pos, s.lineStart + f)), s.nextLine();
        break;
      } else {
        c = !0, h || (Fe(o, s.lineStart - 1, s.lineStart), O = !1);
        for (let p of e.markers)
          o.push(p);
        let u = s.lineStart + e.basePos, d = s.lineStart + e.text.length;
        u < d && (Fe(o, u, d), O = !1);
      }
    }
    return s.addNode(s.buffer.writeElements(o, -i).finish(S.FencedCode, s.prevLineEnd() - i), i), !0;
  },
  Blockquote(s, e) {
    let t = Jo(e);
    return t < 0 ? !1 : (s.startContext(S.Blockquote, e.pos), s.addNode(S.QuoteMark, s.lineStart + e.pos, s.lineStart + e.pos + 1), e.moveBase(e.pos + t), null);
  },
  HorizontalRule(s, e) {
    if ($n(e, s, !1) < 0)
      return !1;
    let t = s.lineStart + e.pos;
    return s.nextLine(), s.addNode(S.HorizontalRule, t), !0;
  },
  BulletList(s, e) {
    let t = Pn(e, s, !1);
    if (t < 0)
      return !1;
    s.block.type != S.BulletList && s.startContext(S.BulletList, e.basePos, e.next);
    let i = Il(e, e.pos + 1);
    return s.startContext(S.ListItem, e.basePos, i - e.baseIndent), s.addNode(S.ListMark, s.lineStart + e.pos, s.lineStart + e.pos + t), e.moveBaseColumn(i), null;
  },
  OrderedList(s, e) {
    let t = vn(e, s, !1);
    if (t < 0)
      return !1;
    s.block.type != S.OrderedList && s.startContext(S.OrderedList, e.basePos, e.text.charCodeAt(e.pos + t - 1));
    let i = Il(e, e.pos + t);
    return s.startContext(S.ListItem, e.basePos, i - e.baseIndent), s.addNode(S.ListMark, s.lineStart + e.pos, s.lineStart + e.pos + t), e.moveBaseColumn(i), null;
  },
  ATXHeading(s, e) {
    let t = th(e);
    if (t < 0)
      return !1;
    let i = e.pos, r = s.lineStart + i, n = jl(e.text, e.text.length, i), l = n;
    for (; l > i && e.text.charCodeAt(l - 1) == e.next; )
      l--;
    (l == n || l == i || !$e(e.text.charCodeAt(l - 1))) && (l = e.text.length);
    let a = s.buffer.write(S.HeaderMark, 0, t).writeElements(s.parser.parseInline(e.text.slice(i + t + 1, l), r + t + 1), -r);
    l < e.text.length && a.write(S.HeaderMark, l - i, n - i);
    let o = a.finish(S.ATXHeading1 - 1 + t, e.text.length - i);
    return s.nextLine(), s.addNode(o, r), !0;
  },
  HTMLBlock(s, e) {
    let t = nh(e, s, !1);
    if (t < 0)
      return !1;
    let i = s.lineStart + e.pos, r = Gs[t][1], n = [], l = r != Ds;
    for (; !r.test(e.text) && s.nextLine(); ) {
      if (e.depth < s.stack.length) {
        l = !1;
        break;
      }
      for (let h of e.markers)
        n.push(h);
    }
    l && s.nextLine();
    let a = r == rh ? S.CommentBlock : r == sh ? S.ProcessingInstructionBlock : S.HTMLBlock, o = s.prevLineEnd();
    return s.addNode(s.buffer.writeElements(n, -i).finish(a, o - i), i), !0;
  },
  SetextHeading: void 0
  // Specifies relative precedence for block-continue function
};
class Su {
  constructor(e) {
    this.stage = 0, this.elts = [], this.pos = 0, this.start = e.start, this.advance(e.content);
  }
  nextLine(e, t, i) {
    if (this.stage == -1)
      return !1;
    let r = i.content + `
` + t.scrub(), n = this.advance(r);
    return n > -1 && n < r.length ? this.complete(e, i, n) : !1;
  }
  finish(e, t) {
    return (this.stage == 2 || this.stage == 3) && li(t.content, this.pos) == t.content.length ? this.complete(e, t, t.content.length) : !1;
  }
  complete(e, t, i) {
    return e.addLeafElement(t, M(S.LinkReference, this.start, this.start + i, this.elts)), !0;
  }
  nextStage(e) {
    return e ? (this.pos = e.to - this.start, this.elts.push(e), this.stage++, !0) : (e === !1 && (this.stage = -1), !1);
  }
  advance(e) {
    for (; ; ) {
      if (this.stage == -1)
        return -1;
      if (this.stage == 0) {
        if (!this.nextStage(ph(e, this.pos, this.start, !0)))
          return -1;
        if (e.charCodeAt(this.pos) != 58)
          return this.stage = -1;
        this.elts.push(M(S.LinkMark, this.pos + this.start, this.pos + this.start + 1)), this.pos++;
      } else if (this.stage == 1) {
        if (!this.nextStage(uh(e, li(e, this.pos), this.start)))
          return -1;
      } else if (this.stage == 2) {
        let t = li(e, this.pos), i = 0;
        if (t > this.pos) {
          let r = dh(e, t, this.start);
          if (r) {
            let n = Kr(e, r.to - this.start);
            n > 0 && (this.nextStage(r), i = n);
          }
        }
        return i || (i = Kr(e, this.pos)), i > 0 && i < e.length ? i : -1;
      } else
        return Kr(e, this.pos);
    }
  }
}
function Kr(s, e) {
  for (; e < s.length; e++) {
    let t = s.charCodeAt(e);
    if (t == 10)
      break;
    if (!$e(t))
      return -1;
  }
  return e;
}
class bu {
  nextLine(e, t, i) {
    let r = t.depth < e.stack.length ? -1 : ih(t), n = t.next;
    if (r < 0)
      return !1;
    let l = M(S.HeaderMark, e.lineStart + t.pos, e.lineStart + r);
    return e.nextLine(), e.addLeafElement(i, M(n == 61 ? S.SetextHeading1 : S.SetextHeading2, i.start, e.prevLineEnd(), [
      ...e.parser.parseInline(i.content, i.start),
      l
    ])), !0;
  }
  finish() {
    return !1;
  }
}
const lh = {
  LinkReference(s, e) {
    return e.content.charCodeAt(0) == 91 ? new Su(e) : null;
  },
  SetextHeading() {
    return new bu();
  }
}, ku = [
  (s, e) => th(e) >= 0,
  (s, e) => Ko(e) >= 0,
  (s, e) => Jo(e) >= 0,
  (s, e) => Pn(e, s, !0) >= 0,
  (s, e) => vn(e, s, !0) >= 0,
  (s, e) => $n(e, s, !0) >= 0,
  (s, e) => nh(e, s, !0) >= 0
], xu = { text: "", end: 0 };
class wu {
  /**
  @internal
  */
  constructor(e, t, i, r) {
    this.parser = e, this.input = t, this.ranges = r, this.line = new Qu(), this.atEnd = !1, this.reusePlaceholders = /* @__PURE__ */ new Map(), this.stoppedAt = null, this.rangeI = 0, this.to = r[r.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = r[0].from, this.block = kr.create(S.Document, 0, this.lineStart, 0, 0), this.stack = [this.block], this.fragments = i.length ? new Pu(i, t) : null, this.readLine();
  }
  get parsedPos() {
    return this.absoluteLineStart;
  }
  advance() {
    if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt)
      return this.finish();
    let { line: e } = this;
    for (; ; ) {
      for (let i = 0; ; ) {
        let r = e.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
        for (; i < e.markers.length && (!r || e.markers[i].from < r.end); ) {
          let n = e.markers[i++];
          this.addNode(n.type, n.from, n.to);
        }
        if (!r)
          break;
        this.finishContext();
      }
      if (e.pos < e.text.length)
        break;
      if (!this.nextLine())
        return this.finish();
    }
    if (this.fragments && this.reuseFragment(e.basePos))
      return null;
    e: for (; ; ) {
      for (let i of this.parser.blockParsers)
        if (i) {
          let r = i(this, e);
          if (r != !1) {
            if (r == !0)
              return null;
            e.forward();
            continue e;
          }
        }
      break;
    }
    let t = new mu(this.lineStart + e.pos, e.text.slice(e.pos));
    for (let i of this.parser.leafBlockParsers)
      if (i) {
        let r = i(this, t);
        r && t.parsers.push(r);
      }
    e: for (; this.nextLine() && e.pos != e.text.length; ) {
      if (e.indent < e.baseIndent + 4) {
        for (let i of this.parser.endLeafBlock)
          if (i(this, e, t))
            break e;
      }
      for (let i of t.parsers)
        if (i.nextLine(this, e, t))
          return null;
      t.content += `
` + e.scrub();
      for (let i of e.markers)
        t.marks.push(i);
    }
    return this.finishLeaf(t), null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  reuseFragment(e) {
    if (!this.fragments.moveTo(this.absoluteLineStart + e, this.absoluteLineStart) || !this.fragments.matches(this.block.hash))
      return !1;
    let t = this.fragments.takeNodes(this);
    return t ? (this.absoluteLineStart += t, this.lineStart = gh(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++, this.readLine()) : (this.atEnd = !0, this.readLine()), !0) : !1;
  }
  /**
  The number of parent blocks surrounding the current block.
  */
  get depth() {
    return this.stack.length;
  }
  /**
  Get the type of the parent block at the given depth. When no
  depth is passed, return the type of the innermost parent.
  */
  parentType(e = this.depth - 1) {
    return this.parser.nodeSet.types[this.stack[e].type];
  }
  /**
  Move to the next input line. This should only be called by
  (non-composite) [block parsers](#BlockParser.parse) that consume
  the line directly, or leaf block parser
  [`nextLine`](#LeafBlockParser.nextLine) methods when they
  consume the current line (and return true).
  */
  nextLine() {
    return this.lineStart += this.line.text.length, this.absoluteLineEnd >= this.to ? (this.absoluteLineStart = this.absoluteLineEnd, this.atEnd = !0, this.readLine(), !1) : (this.lineStart++, this.absoluteLineStart = this.absoluteLineEnd + 1, this.moveRangeI(), this.readLine(), !0);
  }
  /**
  Retrieve the text of the line after the current one, without
  actually moving the context's current line forward.
  */
  peekLine() {
    return this.scanLine(this.absoluteLineEnd + 1).text;
  }
  moveRangeI() {
    for (; this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to; )
      this.rangeI++, this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
  }
  /**
  @internal
  Collect the text for the next line.
  */
  scanLine(e) {
    let t = xu;
    if (t.end = e, e >= this.to)
      t.text = "";
    else if (t.text = this.lineChunkAt(e), t.end += t.text.length, this.ranges.length > 1) {
      let i = this.absoluteLineStart, r = this.rangeI;
      for (; this.ranges[r].to < t.end; ) {
        r++;
        let n = this.ranges[r].from, l = this.lineChunkAt(n);
        t.end = n + l.length, t.text = t.text.slice(0, this.ranges[r - 1].to - i) + l, i = t.end - t.text.length;
      }
    }
    return t;
  }
  /**
  @internal
  Populate this.line with the content of the next line. Skip
  leading characters covered by composite blocks.
  */
  readLine() {
    let { line: e } = this, { text: t, end: i } = this.scanLine(this.absoluteLineStart);
    for (this.absoluteLineEnd = i, e.reset(t); e.depth < this.stack.length; e.depth++) {
      let r = this.stack[e.depth], n = this.parser.skipContextMarkup[r.type];
      if (!n)
        throw new Error("Unhandled block context " + S[r.type]);
      let l = this.line.markers.length;
      if (!n(r, this, e)) {
        this.line.markers.length > l && (r.end = this.line.markers[this.line.markers.length - 1].to), e.forward();
        break;
      }
      e.forward();
    }
  }
  lineChunkAt(e) {
    let t = this.input.chunk(e), i;
    if (this.input.lineChunks)
      i = t == `
` ? "" : t;
    else {
      let r = t.indexOf(`
`);
      i = r < 0 ? t : t.slice(0, r);
    }
    return e + i.length > this.to ? i.slice(0, this.to - e) : i;
  }
  /**
  The end position of the previous line.
  */
  prevLineEnd() {
    return this.atEnd ? this.lineStart : this.lineStart - 1;
  }
  /**
  @internal
  */
  startContext(e, t, i = 0) {
    this.block = kr.create(e, i, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length), this.stack.push(this.block);
  }
  /**
  Start a composite block. Should only be called from [block
  parser functions](#BlockParser.parse) that return null.
  */
  startComposite(e, t, i = 0) {
    this.startContext(this.parser.getNodeType(e), t, i);
  }
  /**
  @internal
  */
  addNode(e, t, i) {
    typeof e == "number" && (e = new _(this.parser.nodeSet.types[e], Lt, Lt, (i ?? this.prevLineEnd()) - t)), this.block.addChild(e, t - this.block.from);
  }
  /**
  Add a block element. Can be called by [block
  parsers](#BlockParser.parse).
  */
  addElement(e) {
    this.block.addChild(e.toTree(this.parser.nodeSet), e.from - this.block.from);
  }
  /**
  Add a block element from a [leaf parser](#LeafBlockParser). This
  makes sure any extra composite block markup (such as blockquote
  markers) inside the block are also added to the syntax tree.
  */
  addLeafElement(e, t) {
    this.addNode(this.buffer.writeElements(Us(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
  }
  /**
  @internal
  */
  finishContext() {
    let e = this.stack.pop(), t = this.stack[this.stack.length - 1];
    t.addChild(e.toTree(this.parser.nodeSet), e.from - t.from), this.block = t;
  }
  finish() {
    for (; this.stack.length > 1; )
      this.finishContext();
    return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
  }
  addGaps(e) {
    return this.ranges.length > 1 ? ah(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders) : e;
  }
  /**
  @internal
  */
  finishLeaf(e) {
    for (let i of e.parsers)
      if (i.finish(this, e))
        return;
    let t = Us(this.parser.parseInline(e.content, e.start), e.marks);
    this.addNode(this.buffer.writeElements(t, -e.start).finish(S.Paragraph, e.content.length), e.start);
  }
  elt(e, t, i, r) {
    return typeof e == "string" ? M(this.parser.getNodeType(e), t, i, r) : new Oh(e, t);
  }
  /**
  @internal
  */
  get buffer() {
    return new hh(this.parser.nodeSet);
  }
}
function ah(s, e, t, i, r) {
  let n = s[e].to, l = [], a = [], o = t.from + i;
  function h(O, c) {
    for (; c ? O >= n : O > n; ) {
      let f = s[e + 1].from - n;
      i += f, O += f, e++, n = s[e].to;
    }
  }
  for (let O = t.firstChild; O; O = O.nextSibling) {
    h(O.from + i, !0);
    let c = O.from + i, f, u = r.get(O.tree);
    u ? f = u : O.to + i > n ? (f = ah(s, e, O, i, r), h(O.to + i, !1)) : f = O.toTree(), l.push(f), a.push(c - o);
  }
  return h(t.to + i, !1), new _(t.type, l, a, t.to + i - o, t.tree ? t.tree.propValues : void 0);
}
class Yr extends Sn {
  /**
  @internal
  */
  constructor(e, t, i, r, n, l, a, o, h) {
    super(), this.nodeSet = e, this.blockParsers = t, this.leafBlockParsers = i, this.blockNames = r, this.endLeafBlock = n, this.skipContextMarkup = l, this.inlineParsers = a, this.inlineNames = o, this.wrappers = h, this.nodeTypes = /* @__PURE__ */ Object.create(null);
    for (let O of e.types)
      this.nodeTypes[O.name] = O.id;
  }
  createParse(e, t, i) {
    let r = new wu(this, e, t, i);
    for (let n of this.wrappers)
      r = n(r, e, t, i);
    return r;
  }
  /**
  Reconfigure the parser.
  */
  configure(e) {
    let t = Ns(e);
    if (!t)
      return this;
    let { nodeSet: i, skipContextMarkup: r } = this, n = this.blockParsers.slice(), l = this.leafBlockParsers.slice(), a = this.blockNames.slice(), o = this.inlineParsers.slice(), h = this.inlineNames.slice(), O = this.endLeafBlock.slice(), c = this.wrappers;
    if (Ut(t.defineNodes)) {
      r = Object.assign({}, r);
      let f = i.types.slice(), u;
      for (let d of t.defineNodes) {
        let { name: p, block: m, composite: Q, style: k } = typeof d == "string" ? { name: d } : d;
        if (f.some((v) => v.name == p))
          continue;
        Q && (r[f.length] = (v, T, P) => Q(T, P, v.value));
        let w = f.length, A = Q ? ["Block", "BlockContext"] : m ? w >= S.ATXHeading1 && w <= S.SetextHeading2 ? ["Block", "LeafBlock", "Heading"] : ["Block", "LeafBlock"] : void 0;
        f.push(J.define({
          id: w,
          name: p,
          props: A && [[R.group, A]]
        })), k && (u || (u = {}), Array.isArray(k) || k instanceof me ? u[p] = k : Object.assign(u, k));
      }
      i = new Ti(f), u && (i = i.extend(Wt(u)));
    }
    if (Ut(t.props) && (i = i.extend(...t.props)), Ut(t.remove))
      for (let f of t.remove) {
        let u = this.blockNames.indexOf(f), d = this.inlineNames.indexOf(f);
        u > -1 && (n[u] = l[u] = void 0), d > -1 && (o[d] = void 0);
      }
    if (Ut(t.parseBlock))
      for (let f of t.parseBlock) {
        let u = a.indexOf(f.name);
        if (u > -1)
          n[u] = f.parse, l[u] = f.leaf;
        else {
          let d = f.before ? Ui(a, f.before) : f.after ? Ui(a, f.after) + 1 : a.length - 1;
          n.splice(d, 0, f.parse), l.splice(d, 0, f.leaf), a.splice(d, 0, f.name);
        }
        f.endLeaf && O.push(f.endLeaf);
      }
    if (Ut(t.parseInline))
      for (let f of t.parseInline) {
        let u = h.indexOf(f.name);
        if (u > -1)
          o[u] = f.parse;
        else {
          let d = f.before ? Ui(h, f.before) : f.after ? Ui(h, f.after) + 1 : h.length - 1;
          o.splice(d, 0, f.parse), h.splice(d, 0, f.name);
        }
      }
    return t.wrap && (c = c.concat(t.wrap)), new Yr(i, n, l, a, O, r, o, h, c);
  }
  /**
  @internal
  */
  getNodeType(e) {
    let t = this.nodeTypes[e];
    if (t == null)
      throw new RangeError(`Unknown node type '${e}'`);
    return t;
  }
  /**
  Parse the given piece of inline text at the given offset,
  returning an array of [`Element`](#Element) objects representing
  the inline content.
  */
  parseInline(e, t) {
    let i = new Tn(this, e, t);
    e: for (let r = t; r < i.end; ) {
      let n = i.char(r);
      for (let l of this.inlineParsers)
        if (l) {
          let a = l(i, n, r);
          if (a >= 0) {
            r = a;
            continue e;
          }
        }
      r++;
    }
    return i.resolveMarkers(0);
  }
}
function Ut(s) {
  return s != null && s.length > 0;
}
function Ns(s) {
  if (!Array.isArray(s))
    return s;
  if (s.length == 0)
    return null;
  let e = Ns(s[0]);
  if (s.length == 1)
    return e;
  let t = Ns(s.slice(1));
  if (!t || !e)
    return e || t;
  let i = (l, a) => (l || Lt).concat(a || Lt), r = e.wrap, n = t.wrap;
  return {
    props: i(e.props, t.props),
    defineNodes: i(e.defineNodes, t.defineNodes),
    parseBlock: i(e.parseBlock, t.parseBlock),
    parseInline: i(e.parseInline, t.parseInline),
    remove: i(e.remove, t.remove),
    wrap: r ? n ? (l, a, o, h) => r(n(l, a, o, h), a, o, h) : r : n
  };
}
function Ui(s, e) {
  let t = s.indexOf(e);
  if (t < 0)
    throw new RangeError(`Position specified relative to unknown parser ${e}`);
  return t;
}
let oh = [J.none];
for (let s = 1, e; e = S[s]; s++)
  oh[s] = J.define({
    id: s,
    name: e,
    props: s >= S.Escape ? [] : [[R.group, s in Ho ? ["Block", "BlockContext"] : ["Block", "LeafBlock"]]],
    top: e == "Document"
  });
const Lt = [];
class hh {
  constructor(e) {
    this.nodeSet = e, this.content = [], this.nodes = [];
  }
  write(e, t, i, r = 0) {
    return this.content.push(e, t, i, 4 + r * 4), this;
  }
  writeElements(e, t = 0) {
    for (let i of e)
      i.writeTo(this, t);
    return this;
  }
  finish(e, t) {
    return _.build({
      buffer: this.content,
      nodeSet: this.nodeSet,
      reused: this.nodes,
      topID: e,
      length: t
    });
  }
}
let bi = class {
  /**
  @internal
  */
  constructor(e, t, i, r = Lt) {
    this.type = e, this.from = t, this.to = i, this.children = r;
  }
  /**
  @internal
  */
  writeTo(e, t) {
    let i = e.content.length;
    e.writeElements(this.children, t), e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - i);
  }
  /**
  @internal
  */
  toTree(e) {
    return new hh(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
  }
};
class Oh {
  constructor(e, t) {
    this.tree = e, this.from = t;
  }
  get to() {
    return this.from + this.tree.length;
  }
  get type() {
    return this.tree.type.id;
  }
  get children() {
    return Lt;
  }
  writeTo(e, t) {
    e.nodes.push(this.tree), e.content.push(e.nodes.length - 1, this.from + t, this.to + t, -1);
  }
  toTree() {
    return this.tree;
  }
}
function M(s, e, t, i) {
  return new bi(s, e, t, i);
}
const ch = { resolve: "Emphasis", mark: "EmphasisMark" }, fh = { resolve: "Emphasis", mark: "EmphasisMark" }, ft = {}, xr = {};
class ge {
  constructor(e, t, i, r) {
    this.type = e, this.from = t, this.to = i, this.side = r;
  }
}
const Bl = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let ki = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
try {
  ki = new RegExp("[\\p{S}|\\p{P}]", "u");
} catch {
}
const Jr = {
  Escape(s, e, t) {
    if (e != 92 || t == s.end - 1)
      return -1;
    let i = s.char(t + 1);
    for (let r = 0; r < Bl.length; r++)
      if (Bl.charCodeAt(r) == i)
        return s.append(M(S.Escape, t, t + 2));
    return -1;
  },
  Entity(s, e, t) {
    if (e != 38)
      return -1;
    let i = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(s.slice(t + 1, t + 31));
    return i ? s.append(M(S.Entity, t, t + 1 + i[0].length)) : -1;
  },
  InlineCode(s, e, t) {
    if (e != 96 || t && s.char(t - 1) == 96)
      return -1;
    let i = t + 1;
    for (; i < s.end && s.char(i) == 96; )
      i++;
    let r = i - t, n = 0;
    for (; i < s.end; i++)
      if (s.char(i) == 96) {
        if (n++, n == r && s.char(i + 1) != 96)
          return s.append(M(S.InlineCode, t, i + 1, [
            M(S.CodeMark, t, t + r),
            M(S.CodeMark, i + 1 - r, i + 1)
          ]));
      } else
        n = 0;
    return -1;
  },
  HTMLTag(s, e, t) {
    if (e != 60 || t == s.end - 1)
      return -1;
    let i = s.slice(t + 1, s.end), r = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(i);
    if (r)
      return s.append(M(S.Autolink, t, t + 1 + r[0].length, [
        M(S.LinkMark, t, t + 1),
        // url[0] includes the closing bracket, so exclude it from this slice
        M(S.URL, t + 1, t + r[0].length),
        M(S.LinkMark, t + r[0].length, t + 1 + r[0].length)
      ]));
    let n = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(i);
    if (n)
      return s.append(M(S.Comment, t, t + 1 + n[0].length));
    let l = /^\?[^]*?\?>/.exec(i);
    if (l)
      return s.append(M(S.ProcessingInstruction, t, t + 1 + l[0].length));
    let a = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(i);
    return a ? s.append(M(S.HTMLTag, t, t + 1 + a[0].length)) : -1;
  },
  Emphasis(s, e, t) {
    if (e != 95 && e != 42)
      return -1;
    let i = t + 1;
    for (; s.char(i) == e; )
      i++;
    let r = s.slice(t - 1, t), n = s.slice(i, i + 1), l = ki.test(r), a = ki.test(n), o = /\s|^$/.test(r), h = /\s|^$/.test(n), O = !h && (!a || o || l), c = !o && (!l || h || a), f = O && (e == 42 || !c || l), u = c && (e == 42 || !O || a);
    return s.append(new ge(e == 95 ? ch : fh, t, i, (f ? 1 : 0) | (u ? 2 : 0)));
  },
  HardBreak(s, e, t) {
    if (e == 92 && s.char(t + 1) == 10)
      return s.append(M(S.HardBreak, t, t + 2));
    if (e == 32) {
      let i = t + 1;
      for (; s.char(i) == 32; )
        i++;
      if (s.char(i) == 10 && i >= t + 2)
        return s.append(M(S.HardBreak, t, i + 1));
    }
    return -1;
  },
  Link(s, e, t) {
    return e == 91 ? s.append(new ge(
      ft,
      t,
      t + 1,
      1
      /* Mark.Open */
    )) : -1;
  },
  Image(s, e, t) {
    return e == 33 && s.char(t + 1) == 91 ? s.append(new ge(
      xr,
      t,
      t + 2,
      1
      /* Mark.Open */
    )) : -1;
  },
  LinkEnd(s, e, t) {
    if (e != 93)
      return -1;
    for (let i = s.parts.length - 1; i >= 0; i--) {
      let r = s.parts[i];
      if (r instanceof ge && (r.type == ft || r.type == xr)) {
        if (!r.side || s.skipSpace(r.to) == t && !/[(\[]/.test(s.slice(t + 1, t + 2)))
          return s.parts[i] = null, -1;
        let n = s.takeContent(i), l = s.parts[i] = yu(s, n, r.type == ft ? S.Link : S.Image, r.from, t + 1);
        if (r.type == ft)
          for (let a = 0; a < i; a++) {
            let o = s.parts[a];
            o instanceof ge && o.type == ft && (o.side = 0);
          }
        return l.to;
      }
    }
    return -1;
  }
};
function yu(s, e, t, i, r) {
  let { text: n } = s, l = s.char(r), a = r;
  if (e.unshift(M(S.LinkMark, i, i + (t == S.Image ? 2 : 1))), e.push(M(S.LinkMark, r - 1, r)), l == 40) {
    let o = s.skipSpace(r + 1), h = uh(n, o - s.offset, s.offset), O;
    h && (o = s.skipSpace(h.to), o != h.to && (O = dh(n, o - s.offset, s.offset), O && (o = s.skipSpace(O.to)))), s.char(o) == 41 && (e.push(M(S.LinkMark, r, r + 1)), a = o + 1, h && e.push(h), O && e.push(O), e.push(M(S.LinkMark, o, a)));
  } else if (l == 91) {
    let o = ph(n, r - s.offset, s.offset, !1);
    o && (e.push(o), a = o.to);
  }
  return M(t, i, a, e);
}
function uh(s, e, t) {
  if (s.charCodeAt(e) == 60) {
    for (let r = e + 1; r < s.length; r++) {
      let n = s.charCodeAt(r);
      if (n == 62)
        return M(S.URL, e + t, r + 1 + t);
      if (n == 60 || n == 10)
        return !1;
    }
    return null;
  } else {
    let r = 0, n = e;
    for (let l = !1; n < s.length; n++) {
      let a = s.charCodeAt(n);
      if ($e(a))
        break;
      if (l)
        l = !1;
      else if (a == 40)
        r++;
      else if (a == 41) {
        if (!r)
          break;
        r--;
      } else a == 92 && (l = !0);
    }
    return n > e ? M(S.URL, e + t, n + t) : n == s.length ? null : !1;
  }
}
function dh(s, e, t) {
  let i = s.charCodeAt(e);
  if (i != 39 && i != 34 && i != 40)
    return !1;
  let r = i == 40 ? 41 : i;
  for (let n = e + 1, l = !1; n < s.length; n++) {
    let a = s.charCodeAt(n);
    if (l)
      l = !1;
    else {
      if (a == r)
        return M(S.LinkTitle, e + t, n + 1 + t);
      a == 92 && (l = !0);
    }
  }
  return null;
}
function ph(s, e, t, i) {
  for (let r = !1, n = e + 1, l = Math.min(s.length, n + 999); n < l; n++) {
    let a = s.charCodeAt(n);
    if (r)
      r = !1;
    else {
      if (a == 93)
        return i ? !1 : M(S.LinkLabel, e + t, n + 1 + t);
      if (i && !$e(a) && (i = !1), a == 91)
        return !1;
      a == 92 && (r = !0);
    }
  }
  return null;
}
class Tn {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.parser = e, this.text = t, this.offset = i, this.parts = [];
  }
  /**
  Get the character code at the given (document-relative)
  position.
  */
  char(e) {
    return e >= this.end ? -1 : this.text.charCodeAt(e - this.offset);
  }
  /**
  The position of the end of this inline section.
  */
  get end() {
    return this.offset + this.text.length;
  }
  /**
  Get a substring of this inline section. Again uses
  document-relative positions.
  */
  slice(e, t) {
    return this.text.slice(e - this.offset, t - this.offset);
  }
  /**
  @internal
  */
  append(e) {
    return this.parts.push(e), e.to;
  }
  /**
  Add a [delimiter](#DelimiterType) at this given position. `open`
  and `close` indicate whether this delimiter is opening, closing,
  or both. Returns the end of the delimiter, for convenient
  returning from [parse functions](#InlineParser.parse).
  */
  addDelimiter(e, t, i, r, n) {
    return this.append(new ge(e, t, i, (r ? 1 : 0) | (n ? 2 : 0)));
  }
  /**
  Returns true when there is an unmatched link or image opening
  token before the current position.
  */
  get hasOpenLink() {
    for (let e = this.parts.length - 1; e >= 0; e--) {
      let t = this.parts[e];
      if (t instanceof ge && (t.type == ft || t.type == xr))
        return !0;
    }
    return !1;
  }
  /**
  Add an inline element. Returns the end of the element.
  */
  addElement(e) {
    return this.append(e);
  }
  /**
  Resolve markers between this.parts.length and from, wrapping matched markers in the
  appropriate node and updating the content of this.parts. @internal
  */
  resolveMarkers(e) {
    for (let i = e; i < this.parts.length; i++) {
      let r = this.parts[i];
      if (!(r instanceof ge && r.type.resolve && r.side & 2))
        continue;
      let n = r.type == ch || r.type == fh, l = r.to - r.from, a, o = i - 1;
      for (; o >= e; o--) {
        let p = this.parts[o];
        if (p instanceof ge && p.side & 1 && p.type == r.type && // Ignore emphasis delimiters where the character count doesn't match
        !(n && (r.side & 1 || p.side & 2) && (p.to - p.from + l) % 3 == 0 && ((p.to - p.from) % 3 || l % 3))) {
          a = p;
          break;
        }
      }
      if (!a)
        continue;
      let h = r.type.resolve, O = [], c = a.from, f = r.to;
      if (n) {
        let p = Math.min(2, a.to - a.from, l);
        c = a.to - p, f = r.from + p, h = p == 1 ? "Emphasis" : "StrongEmphasis";
      }
      a.type.mark && O.push(this.elt(a.type.mark, c, a.to));
      for (let p = o + 1; p < i; p++)
        this.parts[p] instanceof bi && O.push(this.parts[p]), this.parts[p] = null;
      r.type.mark && O.push(this.elt(r.type.mark, r.from, f));
      let u = this.elt(h, c, f, O);
      this.parts[o] = n && a.from != c ? new ge(a.type, a.from, c, a.side) : null, (this.parts[i] = n && r.to != f ? new ge(r.type, f, r.to, r.side) : null) ? this.parts.splice(i, 0, u) : this.parts[i] = u;
    }
    let t = [];
    for (let i = e; i < this.parts.length; i++) {
      let r = this.parts[i];
      r instanceof bi && t.push(r);
    }
    return t;
  }
  /**
  Find an opening delimiter of the given type. Returns `null` if
  no delimiter is found, or an index that can be passed to
  [`takeContent`](#InlineContext.takeContent) otherwise.
  */
  findOpeningDelimiter(e) {
    for (let t = this.parts.length - 1; t >= 0; t--) {
      let i = this.parts[t];
      if (i instanceof ge && i.type == e && i.side & 1)
        return t;
    }
    return null;
  }
  /**
  Remove all inline elements and delimiters starting from the
  given index (which you should get from
  [`findOpeningDelimiter`](#InlineContext.findOpeningDelimiter),
  resolve delimiters inside of them, and return them as an array
  of elements.
  */
  takeContent(e) {
    let t = this.resolveMarkers(e);
    return this.parts.length = e, t;
  }
  /**
  Return the delimiter at the given index. Mostly useful to get
  additional info out of a delimiter index returned by
  [`findOpeningDelimiter`](#InlineContext.findOpeningDelimiter).
  Returns null if there is no delimiter at this index.
  */
  getDelimiterAt(e) {
    let t = this.parts[e];
    return t instanceof ge ? t : null;
  }
  /**
  Skip space after the given (document) position, returning either
  the position of the next non-space character or the end of the
  section.
  */
  skipSpace(e) {
    return li(this.text, e - this.offset) + this.offset;
  }
  elt(e, t, i, r) {
    return typeof e == "string" ? M(this.parser.getNodeType(e), t, i, r) : new Oh(e, t);
  }
}
Tn.linkStart = ft;
Tn.imageStart = xr;
function Us(s, e) {
  if (!e.length)
    return s;
  if (!s.length)
    return e;
  let t = s.slice(), i = 0;
  for (let r of e) {
    for (; i < t.length && t[i].to < r.to; )
      i++;
    if (i < t.length && t[i].from < r.from) {
      let n = t[i];
      n instanceof bi && (t[i] = new bi(n.type, n.from, n.to, Us(n.children, [r])));
    } else
      t.splice(i++, 0, r);
  }
  return t;
}
const $u = [S.CodeBlock, S.ListItem, S.OrderedList, S.BulletList];
let Pu = class {
  constructor(e, t) {
    this.fragments = e, this.input = t, this.i = 0, this.fragment = null, this.fragmentEnd = -1, this.cursor = null, e.length && (this.fragment = e[this.i++]);
  }
  nextFragment() {
    this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null, this.cursor = null, this.fragmentEnd = -1;
  }
  moveTo(e, t) {
    for (; this.fragment && this.fragment.to <= e; )
      this.nextFragment();
    if (!this.fragment || this.fragment.from > (e ? e - 1 : 0))
      return !1;
    if (this.fragmentEnd < 0) {
      let n = this.fragment.to;
      for (; n > 0 && this.input.read(n - 1, n) != `
`; )
        n--;
      this.fragmentEnd = n ? n - 1 : 0;
    }
    let i = this.cursor;
    i || (i = this.cursor = this.fragment.tree.cursor(), i.firstChild());
    let r = e + this.fragment.offset;
    for (; i.to <= r; )
      if (!i.parent())
        return !1;
    for (; ; ) {
      if (i.from >= r)
        return this.fragment.from <= t;
      if (!i.childAfter(r))
        return !1;
    }
  }
  matches(e) {
    let t = this.cursor.tree;
    return t && t.prop(R.contextHash) == e;
  }
  takeNodes(e) {
    let t = this.cursor, i = this.fragment.offset, r = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0), n = e.absoluteLineStart, l = n, a = e.block.children.length, o = l, h = a;
    for (; ; ) {
      if (t.to - i > r) {
        if (t.type.isAnonymous && t.firstChild())
          continue;
        break;
      }
      let O = gh(t.from - i, e.ranges);
      if (t.to - i <= e.ranges[e.rangeI].to)
        e.addNode(t.tree, O);
      else {
        let c = new _(e.parser.nodeSet.types[S.Paragraph], [], [], 0, e.block.hashProp);
        e.reusePlaceholders.set(c, t.tree), e.addNode(c, O);
      }
      if (t.type.is("Block") && ($u.indexOf(t.type.id) < 0 ? (l = t.to - i, a = e.block.children.length) : (l = o, a = h, o = t.to - i, h = e.block.children.length)), !t.nextSibling())
        break;
    }
    for (; e.block.children.length > a; )
      e.block.children.pop(), e.block.positions.pop();
    return l - n;
  }
};
function gh(s, e) {
  let t = s;
  for (let i = 1; i < e.length; i++) {
    let r = e[i - 1].to, n = e[i].from;
    r < s && (t -= n - r);
  }
  return t;
}
const vu = Wt({
  "Blockquote/...": g.quote,
  HorizontalRule: g.contentSeparator,
  "ATXHeading1/... SetextHeading1/...": g.heading1,
  "ATXHeading2/... SetextHeading2/...": g.heading2,
  "ATXHeading3/...": g.heading3,
  "ATXHeading4/...": g.heading4,
  "ATXHeading5/...": g.heading5,
  "ATXHeading6/...": g.heading6,
  "Comment CommentBlock": g.comment,
  Escape: g.escape,
  Entity: g.character,
  "Emphasis/...": g.emphasis,
  "StrongEmphasis/...": g.strong,
  "Link/... Image/...": g.link,
  "OrderedList/... BulletList/...": g.list,
  "BlockQuote/...": g.quote,
  "InlineCode CodeText": g.monospace,
  "URL Autolink": g.url,
  "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": g.processingInstruction,
  "CodeInfo LinkLabel": g.labelName,
  LinkTitle: g.string,
  Paragraph: g.content
}), Tu = new Yr(new Ti(oh).extend(vu), Object.keys(Ni).map((s) => Ni[s]), Object.keys(Ni).map((s) => lh[s]), Object.keys(Ni), ku, Ho, Object.keys(Jr).map((s) => Jr[s]), Object.keys(Jr), []);
function Zu(s, e, t) {
  let i = [];
  for (let r = s.firstChild, n = e; ; r = r.nextSibling) {
    let l = r ? r.from : t;
    if (l > n && i.push({ from: n, to: l }), !r)
      break;
    n = r.to;
  }
  return i;
}
function Xu(s) {
  let { codeParser: e, htmlParser: t } = s;
  return { wrap: Bo((r, n) => {
    let l = r.type.id;
    if (e && (l == S.CodeBlock || l == S.FencedCode)) {
      let a = "";
      if (l == S.FencedCode) {
        let h = r.node.getChild(S.CodeInfo);
        h && (a = n.read(h.from, h.to));
      }
      let o = e(a);
      if (o)
        return { parser: o, overlay: (h) => h.type.id == S.CodeText, bracketed: l == S.FencedCode };
    } else if (t && (l == S.HTMLBlock || l == S.HTMLTag || l == S.CommentBlock))
      return { parser: t, overlay: Zu(r.node, r.from, r.to) };
    return null;
  }) };
}
const Cu = { resolve: "Strikethrough", mark: "StrikethroughMark" }, Au = {
  defineNodes: [{
    name: "Strikethrough",
    style: { "Strikethrough/...": g.strikethrough }
  }, {
    name: "StrikethroughMark",
    style: g.processingInstruction
  }],
  parseInline: [{
    name: "Strikethrough",
    parse(s, e, t) {
      if (e != 126 || s.char(t + 1) != 126 || s.char(t + 2) == 126)
        return -1;
      let i = s.slice(t - 1, t), r = s.slice(t + 2, t + 3), n = /\s|^$/.test(i), l = /\s|^$/.test(r), a = ki.test(i), o = ki.test(r);
      return s.addDelimiter(Cu, t, t + 2, !l && (!o || n || a), !n && (!a || l || o));
    },
    after: "Emphasis"
  }]
};
function ai(s, e, t = 0, i, r = 0) {
  let n = 0, l = !0, a = -1, o = -1, h = !1, O = () => {
    i.push(s.elt("TableCell", r + a, r + o, s.parser.parseInline(e.slice(a, o), r + a)));
  };
  for (let c = t; c < e.length; c++) {
    let f = e.charCodeAt(c);
    f == 124 && !h ? ((!l || a > -1) && n++, l = !1, i && (a > -1 && O(), i.push(s.elt("TableDelimiter", c + r, c + r + 1))), a = o = -1) : (h || f != 32 && f != 9) && (a < 0 && (a = c), o = c + 1), h = !h && f == 92;
  }
  return a > -1 && (n++, i && O()), n;
}
function Dl(s, e) {
  for (let t = e; t < s.length; t++) {
    let i = s.charCodeAt(t);
    if (i == 124)
      return !0;
    i == 92 && t++;
  }
  return !1;
}
const mh = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
class Gl {
  constructor() {
    this.rows = null;
  }
  nextLine(e, t, i) {
    if (this.rows == null) {
      this.rows = !1;
      let r;
      if ((t.next == 45 || t.next == 58 || t.next == 124) && mh.test(r = t.text.slice(t.pos))) {
        let n = [];
        ai(e, i.content, 0, n, i.start) == ai(e, r, t.pos) && (this.rows = [
          e.elt("TableHeader", i.start, i.start + i.content.length, n),
          e.elt("TableDelimiter", e.lineStart + t.pos, e.lineStart + t.text.length)
        ]);
      }
    } else if (this.rows) {
      let r = [];
      ai(e, t.text, t.pos, r, e.lineStart), this.rows.push(e.elt("TableRow", e.lineStart + t.pos, e.lineStart + t.text.length, r));
    }
    return !1;
  }
  finish(e, t) {
    return this.rows ? (e.addLeafElement(t, e.elt("Table", t.start, t.start + t.content.length, this.rows)), !0) : !1;
  }
}
const Ru = {
  defineNodes: [
    { name: "Table", block: !0 },
    { name: "TableHeader", style: { "TableHeader/...": g.heading } },
    "TableRow",
    { name: "TableCell", style: g.content },
    { name: "TableDelimiter", style: g.processingInstruction }
  ],
  parseBlock: [{
    name: "Table",
    leaf(s, e) {
      return Dl(e.content, 0) ? new Gl() : null;
    },
    endLeaf(s, e, t) {
      if (t.parsers.some((r) => r instanceof Gl) || !Dl(e.text, e.basePos))
        return !1;
      let i = s.peekLine();
      return mh.test(i) && ai(s, e.text, e.basePos) == ai(s, i, e.basePos);
    },
    before: "SetextHeading"
  }]
};
class zu {
  nextLine() {
    return !1;
  }
  finish(e, t) {
    return e.addLeafElement(t, e.elt("Task", t.start, t.start + t.content.length, [
      e.elt("TaskMarker", t.start, t.start + 3),
      ...e.parser.parseInline(t.content.slice(3), t.start + 3)
    ])), !0;
  }
}
const Mu = {
  defineNodes: [
    { name: "Task", block: !0, style: g.list },
    { name: "TaskMarker", style: g.atom }
  ],
  parseBlock: [{
    name: "TaskList",
    leaf(s, e) {
      return /^\[[ xX]\][ \t]/.test(e.content) && s.parentType().name == "ListItem" ? new zu() : null;
    },
    after: "SetextHeading"
  }]
}, Nl = /(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy, Ul = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy, Yu = /[\w-]+\.[\w-]+($|\/)/, Fl = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy, Hl = /\/[a-zA-Z\d@.]+/gy;
function Kl(s, e, t, i) {
  let r = 0;
  for (let n = e; n < t; n++)
    s[n] == i && r++;
  return r;
}
function _u(s, e) {
  Ul.lastIndex = e;
  let t = Ul.exec(s);
  if (!t || Yu.exec(t[0])[0].indexOf("_") > -1)
    return -1;
  let i = e + t[0].length;
  for (; ; ) {
    let r = s[i - 1], n;
    if (/[?!.,:*_~]/.test(r) || r == ")" && Kl(s, e, i, ")") > Kl(s, e, i, "("))
      i--;
    else if (r == ";" && (n = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(s.slice(e, i))))
      i = e + n.index;
    else
      break;
  }
  return i;
}
function Jl(s, e) {
  Fl.lastIndex = e;
  let t = Fl.exec(s);
  if (!t)
    return -1;
  let i = t[0][t[0].length - 1];
  return i == "_" || i == "-" ? -1 : e + t[0].length - (i == "." ? 1 : 0);
}
const Lu = {
  parseInline: [{
    name: "Autolink",
    parse(s, e, t) {
      let i = t - s.offset;
      if (i && /\w/.test(s.text[i - 1]))
        return -1;
      Nl.lastIndex = i;
      let r = Nl.exec(s.text), n = -1;
      if (!r)
        return -1;
      if (r[1] || r[2]) {
        if (n = _u(s.text, i + r[0].length), n > -1 && s.hasOpenLink) {
          let l = /([^\[\]]|\[[^\]]*\])*/.exec(s.text.slice(i, n));
          n = i + l[0].length;
        }
      } else r[3] ? n = Jl(s.text, i) : (n = Jl(s.text, i + r[0].length), n > -1 && r[0] == "xmpp:" && (Hl.lastIndex = n, r = Hl.exec(s.text), r && (n = r.index + r[0].length)));
      return n < 0 ? -1 : (s.addElement(s.elt("URL", t, n + s.offset)), n + s.offset);
    }
  }]
}, Eu = [Ru, Mu, Au, Lu];
function Qh(s, e, t) {
  return (i, r, n) => {
    if (r != s || i.char(n + 1) == s)
      return -1;
    let l = [i.elt(t, n, n + 1)];
    for (let a = n + 1; a < i.end; a++) {
      let o = i.char(a);
      if (o == s)
        return i.addElement(i.elt(e, n, a + 1, l.concat(i.elt(t, a, a + 1))));
      if (o == 92 && l.push(i.elt("Escape", a, a++ + 2)), $e(o))
        break;
    }
    return -1;
  };
}
const qu = {
  defineNodes: [
    { name: "Superscript", style: g.special(g.content) },
    { name: "SuperscriptMark", style: g.processingInstruction }
  ],
  parseInline: [{
    name: "Superscript",
    parse: Qh(94, "Superscript", "SuperscriptMark")
  }]
}, Vu = {
  defineNodes: [
    { name: "Subscript", style: g.special(g.content) },
    { name: "SubscriptMark", style: g.processingInstruction }
  ],
  parseInline: [{
    name: "Subscript",
    parse: Qh(126, "Subscript", "SubscriptMark")
  }]
}, Wu = {
  defineNodes: [{ name: "Emoji", style: g.character }],
  parseInline: [{
    name: "Emoji",
    parse(s, e, t) {
      let i;
      return e != 58 || !(i = /^[a-zA-Z_0-9]+:/.exec(s.slice(t + 1, s.end))) ? -1 : s.addElement(s.elt("Emoji", t, t + 1 + i[0].length));
    }
  }]
};
class wr {
  /**
  @internal
  */
  constructor(e, t, i, r, n, l, a, o, h, O = 0, c) {
    this.p = e, this.stack = t, this.state = i, this.reducePos = r, this.pos = n, this.score = l, this.buffer = a, this.bufferBase = o, this.curContext = h, this.lookAhead = O, this.parent = c;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, i = 0) {
    let r = e.parser.context;
    return new wr(e, [], t, i, i, 0, [], 0, r ? new ea(r, r.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let i = e >> 19, r = e & 65535, { parser: n } = this.p, l = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), a = n.dynamicPrecedence(r);
    if (a && (this.score += a), i == 0) {
      this.pushState(n.getGoto(this.state, r, !0), this.reducePos), r < n.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, l ? 8 : 4, !0), this.reduceContext(r, this.reducePos);
      return;
    }
    let o = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0), h = o ? this.stack[o - 2] : this.p.ranges[0].from, O = this.reducePos - h;
    O >= 2e3 && !(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = O) : this.p.lastBigReductionSize < O && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = O));
    let c = o ? this.stack[o - 1] : 0, f = this.bufferBase + this.buffer.length - c;
    if (r < n.minRepeatTerm || e & 131072) {
      let u = n.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(r, h, u, f + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[o];
    else {
      let u = this.stack[o - 3];
      this.state = n.getGoto(u, r, !0);
    }
    for (; this.stack.length > o; )
      this.stack.pop();
    this.reduceContext(r, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, i, r = 4, n = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let l = this, a = this.buffer.length;
      if (a == 0 && l.parent && (a = l.bufferBase - l.parent.bufferBase, l = l.parent), a > 0 && l.buffer[a - 4] == 0 && l.buffer[a - 1] > -1) {
        if (t == i)
          return;
        if (l.buffer[a - 2] >= t) {
          l.buffer[a - 2] = i;
          return;
        }
      }
    }
    if (!n || this.pos == i)
      this.buffer.push(e, t, i, r);
    else {
      let l = this.buffer.length;
      if (l > 0 && (this.buffer[l - 4] != 0 || this.buffer[l - 1] < 0)) {
        let a = !1;
        for (let o = l; o > 0 && this.buffer[o - 2] > i; o -= 4)
          if (this.buffer[o - 1] >= 0) {
            a = !0;
            break;
          }
        if (a)
          for (; l > 0 && this.buffer[l - 2] > i; )
            this.buffer[l] = this.buffer[l - 4], this.buffer[l + 1] = this.buffer[l - 3], this.buffer[l + 2] = this.buffer[l - 2], this.buffer[l + 3] = this.buffer[l - 1], l -= 4, r > 4 && (r -= 4);
      }
      this.buffer[l] = e, this.buffer[l + 1] = t, this.buffer[l + 2] = i, this.buffer[l + 3] = r;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, i, r) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      this.pos = r, this.shiftContext(t, i), t <= this.p.parser.maxNode && this.buffer.push(t, i, r, 4);
    else {
      let n = e, { parser: l } = this.p;
      (r > this.pos || t <= l.maxNode) && (this.pos = r, l.stateFlag(
        n,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = r)), this.pushState(n, i), this.shiftContext(t, i), t <= l.maxNode && this.buffer.push(t, i, r, 4);
    }
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, i, r) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, i, r);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
    let r = this.pos;
    this.reducePos = this.pos = r + e.length, this.pushState(t, r), this.buffer.push(
      i,
      r,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let i = e.buffer.slice(t), r = e.bufferBase + t;
    for (; e && r == e.bufferBase; )
      e = e.parent;
    return new wr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, r, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    i && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, i ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new ju(this); ; ) {
      let i = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (i == 0)
        return !1;
      if (!(i & 65536))
        return !0;
      t.reduce(i);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let r = [];
      for (let n = 0, l; n < t.length; n += 2)
        (l = t[n + 1]) != this.state && this.p.parser.hasAction(l, e) && r.push(t[n], l);
      if (this.stack.length < 120)
        for (let n = 0; r.length < 8 && n < t.length; n += 2) {
          let l = t[n + 1];
          r.some((a, o) => o & 1 && a == l) || r.push(t[n], l);
        }
      t = r;
    }
    let i = [];
    for (let r = 0; r < t.length && i.length < 4; r += 2) {
      let n = t[r + 1];
      if (n == this.state)
        continue;
      let l = this.split();
      l.pushState(n, this.pos), l.storeNode(0, l.pos, l.pos, 4, !0), l.shiftContext(t[r], this.pos), l.reducePos = this.pos, l.score -= 200, i.push(l);
    }
    return i;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if (!(t & 65536))
      return !1;
    if (!e.validAction(this.state, t)) {
      let i = t >> 19, r = t & 65535, n = this.stack.length - i * 3;
      if (n < 0 || e.getGoto(this.stack[n], r, !1) < 0) {
        let l = this.findForcedReduction();
        if (l == null)
          return !1;
        t = l;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], i = (r, n) => {
      if (!t.includes(r))
        return t.push(r), e.allActions(r, (l) => {
          if (!(l & 393216)) if (l & 65536) {
            let a = (l >> 19) - n;
            if (a > 1) {
              let o = l & 65535, h = this.stack.length - a * 3;
              if (h >= 0 && e.getGoto(this.stack[h], o, !1) >= 0)
                return a << 19 | 65536 | o;
            }
          } else {
            let a = i(l, n + 1);
            if (a != null)
              return a;
          }
        });
    };
    return i(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new ea(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    return e <= this.lookAhead ? !1 : (this.emitLookAhead(), this.lookAhead = e, !0);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ea {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
}
class ju {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, i = e >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = r;
  }
}
class yr {
  constructor(e, t, i) {
    this.stack = e, this.pos = t, this.index = i, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new yr(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new yr(this.stack, this.pos, this.index);
  }
}
function ti(s, e = Uint16Array) {
  if (typeof s != "string")
    return s;
  let t = null;
  for (let i = 0, r = 0; i < s.length; ) {
    let n = 0;
    for (; ; ) {
      let l = s.charCodeAt(i++), a = !1;
      if (l == 126) {
        n = 65535;
        break;
      }
      l >= 92 && l--, l >= 34 && l--;
      let o = l - 32;
      if (o >= 46 && (o -= 46, a = !0), n += o, a)
        break;
      n *= 46;
    }
    t ? t[r++] = n : t = new e(n);
  }
  return t;
}
class rr {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const ta = new rr();
class Iu {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = ta, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let i = this.range, r = this.rangeIndex, n = this.pos + e;
    for (; n < i.from; ) {
      if (!r)
        return null;
      let l = this.ranges[--r];
      n -= i.from - l.to, i = l;
    }
    for (; t < 0 ? n > i.to : n >= i.to; ) {
      if (r == this.ranges.length - 1)
        return null;
      let l = this.ranges[++r];
      n += l.from - i.to, i = l;
    }
    return n;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, i, r;
    if (t >= 0 && t < this.chunk.length)
      i = this.pos + e, r = this.chunk.charCodeAt(t);
    else {
      let n = this.resolveOffset(e, 1);
      if (n == null)
        return -1;
      if (i = n, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        r = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let l = this.rangeIndex, a = this.range;
        for (; a.to <= i; )
          a = this.ranges[++l];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > a.to && (this.chunk2 = this.chunk2.slice(0, a.to - i)), r = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), r;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = i;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = ta, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let i = "";
    for (let r of this.ranges) {
      if (r.from >= t)
        break;
      r.to > e && (i += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
    }
    return i;
  }
}
class vt {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: i } = t.p;
    Sh(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
}
vt.prototype.contextual = vt.prototype.fallback = vt.prototype.extend = !1;
class $r {
  constructor(e, t, i) {
    this.precTable = t, this.elseToken = i, this.data = typeof e == "string" ? ti(e) : e;
  }
  token(e, t) {
    let i = e.pos, r = 0;
    for (; ; ) {
      let n = e.next < 0, l = e.resolveOffset(1, 1);
      if (Sh(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (n || r++, l == null)
        break;
      e.reset(l, e.token);
    }
    r && (e.reset(i, e.token), e.acceptToken(this.elseToken, r));
  }
}
$r.prototype.contextual = vt.prototype.fallback = vt.prototype.extend = !1;
class Qe {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
}
function Sh(s, e, t, i, r, n) {
  let l = 0, a = 1 << i, { dialect: o } = t.p.parser;
  e: for (; a & s[l]; ) {
    let h = s[l + 1];
    for (let u = l + 3; u < h; u += 2)
      if ((s[u + 1] & a) > 0) {
        let d = s[u];
        if (o.allows(d) && (e.token.value == -1 || e.token.value == d || Bu(d, e.token.value, r, n))) {
          e.acceptToken(d);
          break;
        }
      }
    let O = e.next, c = 0, f = s[l + 2];
    if (e.next < 0 && f > c && s[h + f * 3 - 3] == 65535) {
      l = s[h + f * 3 - 1];
      continue e;
    }
    for (; c < f; ) {
      let u = c + f >> 1, d = h + u + (u << 1), p = s[d], m = s[d + 1] || 65536;
      if (O < p)
        f = u;
      else if (O >= m)
        c = u + 1;
      else {
        l = s[d + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
function ia(s, e, t) {
  for (let i = e, r; (r = s[i]) != 65535; i++)
    if (r == t)
      return i - e;
  return -1;
}
function Bu(s, e, t, i) {
  let r = ia(t, i, e);
  return r < 0 || ia(t, i, s) < r;
}
const ue = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let es = null;
function ra(s, e, t) {
  let i = s.cursor(q.IncludeAnonymous);
  for (i.moveTo(e); ; )
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            i.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(s.length, Math.max(
            i.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return t < 0 ? 0 : s.length;
      }
}
class Du {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? ra(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? ra(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let i = this.trees[t], r = this.index[t];
      if (r == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let n = i.children[r], l = this.start[t] + i.positions[r];
      if (l > e)
        return this.nextStart = l, null;
      if (n instanceof _) {
        if (l == e) {
          if (l < this.safeFrom)
            return null;
          let a = l + n.length;
          if (a <= this.safeTo) {
            let o = n.prop(R.lookAhead);
            if (!o || a + o < this.fragment.to)
              return n;
          }
        }
        this.index[t]++, l + n.length >= Math.max(this.safeFrom, e) && (this.trees.push(n), this.start.push(l), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = l + n.length;
    }
  }
}
class Gu {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((i) => new rr());
  }
  getActions(e) {
    let t = 0, i = null, { parser: r } = e.p, { tokenizers: n } = r, l = r.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), a = e.curContext ? e.curContext.hash : 0, o = 0;
    for (let h = 0; h < n.length; h++) {
      if (!(1 << h & l))
        continue;
      let O = n[h], c = this.tokens[h];
      if (!(i && !O.fallback) && ((O.contextual || c.start != e.pos || c.mask != l || c.context != a) && (this.updateCachedToken(c, O, e), c.mask = l, c.context = a), c.lookAhead > c.end + 25 && (o = Math.max(c.lookAhead, o)), c.value != 0)) {
        let f = t;
        if (c.extended > -1 && (t = this.addActions(e, c.extended, c.end, t)), t = this.addActions(e, c.value, c.end, t), !O.extend && (i = c, t > f))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return o && e.setLookAhead(o), !i && e.pos == this.stream.end && (i = new rr(), i.value = e.p.parser.eofTerm, i.start = i.end = e.pos, t = this.addActions(e, i.value, i.end, t)), this.mainToken = i, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new rr(), { pos: i, p: r } = e;
    return t.start = i, t.end = Math.min(i + 1, r.stream.end), t.value = i == r.stream.end ? r.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, i) {
    let r = this.stream.clipPos(i.pos);
    if (t.token(this.stream.reset(r, e), i), e.value > -1) {
      let { parser: n } = i.p;
      for (let l = 0; l < n.specialized.length; l++)
        if (n.specialized[l] == e.value) {
          let a = n.specializers[l](this.stream.read(e.start, e.end), i);
          if (a >= 0 && i.p.parser.dialect.allows(a >> 1)) {
            a & 1 ? e.extended = a >> 1 : e.value = a >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(r + 1);
  }
  putAction(e, t, i, r) {
    for (let n = 0; n < r; n += 3)
      if (this.actions[n] == e)
        return r;
    return this.actions[r++] = e, this.actions[r++] = t, this.actions[r++] = i, r;
  }
  addActions(e, t, i, r) {
    let { state: n } = e, { parser: l } = e.p, { data: a } = l;
    for (let o = 0; o < 2; o++)
      for (let h = l.stateSlot(
        n,
        o ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (a[h] == 65535)
          if (a[h + 1] == 1)
            h = We(a, h + 2);
          else {
            r == 0 && a[h + 1] == 2 && (r = this.putAction(We(a, h + 2), t, i, r));
            break;
          }
        a[h] == t && (r = this.putAction(We(a, h + 1), t, i, r));
      }
    return r;
  }
}
class Nu {
  constructor(e, t, i, r) {
    this.parser = e, this.input = t, this.ranges = r, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Iu(t, r), this.tokens = new Gu(e, this.stream), this.topTerm = e.top[1];
    let { from: n } = r[0];
    this.stacks = [wr.start(this, e.top[0], n)], this.fragments = i.length && this.stream.end - n > e.bufferLength * 4 ? new Du(i, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, i = this.stacks = [], r, n;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [l] = e;
      for (; l.forceReduce() && l.stack.length && l.stack[l.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let l = 0; l < e.length; l++) {
      let a = e[l];
      for (; ; ) {
        if (this.tokens.mainToken = null, a.pos > t)
          i.push(a);
        else {
          if (this.advanceStack(a, i, e))
            continue;
          {
            r || (r = [], n = []), r.push(a);
            let o = this.tokens.getMainToken(a);
            n.push(o.value, o.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let l = r && Fu(r);
      if (l)
        return ue && console.log("Finish with " + this.stackID(l)), this.stackToTree(l);
      if (this.parser.strict)
        throw ue && r && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r) {
      let l = this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, n, i);
      if (l)
        return ue && console.log("Force-finish " + this.stackID(l)), this.stackToTree(l.forceAll());
    }
    if (this.recovering) {
      let l = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > l)
        for (i.sort((a, o) => o.score - a.score); i.length > l; )
          i.pop();
      i.some((a) => a.reducePos > t) && this.recovering--;
    } else if (i.length > 1) {
      e: for (let l = 0; l < i.length - 1; l++) {
        let a = i[l];
        for (let o = l + 1; o < i.length; o++) {
          let h = i[o];
          if (a.sameState(h) || a.buffer.length > 500 && h.buffer.length > 500)
            if ((a.score - h.score || a.buffer.length - h.buffer.length) > 0)
              i.splice(o--, 1);
            else {
              i.splice(l--, 1);
              continue e;
            }
        }
      }
      i.length > 12 && (i.sort((l, a) => a.score - l.score), i.splice(
        12,
        i.length - 12
        /* Rec.MaxStackCount */
      ));
    }
    this.minStackPos = i[0].pos;
    for (let l = 1; l < i.length; l++)
      i[l].pos < this.minStackPos && (this.minStackPos = i[l].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, i) {
    let r = e.pos, { parser: n } = this, l = ue ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && r > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict, O = h ? e.curContext.hash : 0;
      for (let c = this.fragments.nodeAt(r); c; ) {
        let f = this.parser.nodeSet.types[c.type.id] == c.type ? n.getGoto(e.state, c.type.id) : -1;
        if (f > -1 && c.length && (!h || (c.prop(R.contextHash) || 0) == O))
          return e.useNode(c, f), ue && console.log(l + this.stackID(e) + ` (via reuse of ${n.getName(c.type.id)})`), !0;
        if (!(c instanceof _) || c.children.length == 0 || c.positions[0] > 0)
          break;
        let u = c.children[0];
        if (u instanceof _ && c.positions[0] == 0)
          c = u;
        else
          break;
      }
    }
    let a = n.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (a > 0)
      return e.reduce(a), ue && console.log(l + this.stackID(e) + ` (via always-reduce ${n.getName(
        a & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let o = this.tokens.getActions(e);
    for (let h = 0; h < o.length; ) {
      let O = o[h++], c = o[h++], f = o[h++], u = h == o.length || !i, d = u ? e : e.split(), p = this.tokens.mainToken;
      if (d.apply(O, c, p ? p.start : d.pos, f), ue && console.log(l + this.stackID(d) + ` (via ${O & 65536 ? `reduce of ${n.getName(
        O & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${n.getName(c)} @ ${r}${d == e ? "" : ", split"})`), u)
        return !0;
      d.pos > r ? t.push(d) : i.push(d);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let i = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > i)
        return sa(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let r = null, n = !1;
    for (let l = 0; l < e.length; l++) {
      let a = e[l], o = t[l << 1], h = t[(l << 1) + 1], O = ue ? this.stackID(a) + " -> " : "";
      if (a.deadEnd && (n || (n = !0, a.restart(), ue && console.log(O + this.stackID(a) + " (restarted)"), this.advanceFully(a, i))))
        continue;
      let c = a.split(), f = O;
      for (let u = 0; u < 10 && c.forceReduce() && (ue && console.log(f + this.stackID(c) + " (via force-reduce)"), !this.advanceFully(c, i)); u++)
        ue && (f = this.stackID(c) + " -> ");
      for (let u of a.recoverByInsert(o))
        ue && console.log(O + this.stackID(u) + " (via recover-insert)"), this.advanceFully(u, i);
      this.stream.end > a.pos ? (h == a.pos && (h++, o = 0), a.recoverByDelete(o, h), ue && console.log(O + this.stackID(a) + ` (via recover-delete ${this.parser.getName(o)})`), sa(a, i)) : (!r || r.score < a.score) && (r = a);
    }
    return r;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), _.build({
      buffer: yr.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (es || (es = /* @__PURE__ */ new WeakMap())).get(e);
    return t || es.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
}
function sa(s, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == s.pos && i.sameState(s)) {
      e[t].score < s.score && (e[t] = s);
      return;
    }
  }
  e.push(s);
}
class Uu {
  constructor(e, t, i) {
    this.source = e, this.flags = t, this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const ts = (s) => s;
class bh {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || ts, this.reduce = e.reduce || ts, this.reuse = e.reuse || ts, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
}
class Et extends Sn {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let a = 0; a < e.repeatNodeCount; a++)
      t.push("");
    let i = Object.keys(e.topRules).map((a) => e.topRules[a][1]), r = [];
    for (let a = 0; a < t.length; a++)
      r.push([]);
    function n(a, o, h) {
      r[a].push([o, o.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let a of e.nodeProps) {
        let o = a[0];
        typeof o == "string" && (o = R[o]);
        for (let h = 1; h < a.length; ) {
          let O = a[h++];
          if (O >= 0)
            n(O, o, a[h++]);
          else {
            let c = a[h + -O];
            for (let f = -O; f > 0; f--)
              n(a[h++], o, c);
            h++;
          }
        }
      }
    this.nodeSet = new Ti(t.map((a, o) => J.define({
      name: o >= this.minRepeatTerm ? void 0 : a,
      id: o,
      props: r[o],
      top: i.indexOf(o) > -1,
      error: o == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(o) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = qo;
    let l = ti(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let a = 0; a < this.specializerSpecs.length; a++)
      this.specialized[a] = this.specializerSpecs[a].term;
    this.specializers = this.specializerSpecs.map(na), this.states = ti(e.states, Uint32Array), this.data = ti(e.stateData), this.goto = ti(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((a) => typeof a == "number" ? new vt(l, a) : a), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let r = new Nu(this, e, t, i);
    for (let n of this.wrappers)
      r = n(r, e, t, i);
    return r;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, i = !1) {
    let r = this.goto;
    if (t >= r[0])
      return -1;
    for (let n = r[t + 1]; ; ) {
      let l = r[n++], a = l & 1, o = r[n++];
      if (a && i)
        return o;
      for (let h = n + (l >> 1); n < h; n++)
        if (r[n] == e)
          return o;
      if (a)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let i = this.data;
    for (let r = 0; r < 2; r++)
      for (let n = this.stateSlot(
        e,
        r ? 2 : 1
        /* ParseState.Actions */
      ), l; ; n += 3) {
        if ((l = i[n]) == 65535)
          if (i[n + 1] == 1)
            l = i[n = We(i, n + 2)];
          else {
            if (i[n + 1] == 2)
              return We(i, n + 2);
            break;
          }
        if (l == t || l == 0)
          return We(i, n + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (i) => i == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let i = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), r = i ? t(i) : void 0;
    for (let n = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); r == null; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1)
          n = We(this.data, n + 2);
        else
          break;
      r = t(We(this.data, n + 1));
    }
    return r;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = We(this.data, i + 2);
        else
          break;
      if (!(this.data[i + 2] & 1)) {
        let r = this.data[i + 1];
        t.some((n, l) => l & 1 && n == r) || t.push(this.data[i], r);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(Et.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let i = this.topRules[e.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = i;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((i) => {
      let r = e.tokenizers.find((n) => n.from == i);
      return r ? r.to : i;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((i, r) => {
      let n = e.specializers.find((a) => a.from == i.external);
      if (!n)
        return i;
      let l = Object.assign(Object.assign({}, i), { external: n.to });
      return t.specializers[r] = na(l), l;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), i = t.map(() => !1);
    if (e)
      for (let n of e.split(" ")) {
        let l = t.indexOf(n);
        l >= 0 && (i[l] = !0);
      }
    let r = null;
    for (let n = 0; n < t.length; n++)
      if (!i[n])
        for (let l = this.dialects[t[n]], a; (a = this.data[l++]) != 65535; )
          (r || (r = new Uint8Array(this.maxTerm + 1)))[a] = 1;
    return new Uu(e, i, r);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new Et(e);
  }
}
function We(s, e) {
  return s[e] | s[e + 1] << 16;
}
function Fu(s) {
  let e = null;
  for (let t of s) {
    let i = t.p.stoppedAt;
    (t.pos == t.p.stream.end || i != null && t.pos > i) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
function na(s) {
  if (s.external) {
    let e = s.extend ? 1 : 0;
    return (t, i) => s.external(t, i) << 1 | e;
  }
  return s.get;
}
const Hu = 55, Ku = 1, Ju = 56, ed = 2, td = 57, id = 3, la = 4, rd = 5, Zn = 6, kh = 7, xh = 8, wh = 9, yh = 10, sd = 11, nd = 12, ld = 13, is = 58, ad = 14, od = 15, aa = 59, $h = 21, hd = 23, Ph = 24, Od = 25, Fs = 27, vh = 28, cd = 29, fd = 32, ud = 35, dd = 37, pd = 38, gd = 0, md = 1, Qd = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  frame: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
}, Sd = {
  dd: !0,
  li: !0,
  optgroup: !0,
  option: !0,
  p: !0,
  rp: !0,
  rt: !0,
  tbody: !0,
  td: !0,
  tfoot: !0,
  th: !0,
  tr: !0
}, oa = {
  dd: { dd: !0, dt: !0 },
  dt: { dd: !0, dt: !0 },
  li: { li: !0 },
  option: { option: !0, optgroup: !0 },
  optgroup: { optgroup: !0 },
  p: {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    dir: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    menu: !0,
    nav: !0,
    ol: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    ul: !0
  },
  rp: { rp: !0, rt: !0 },
  rt: { rp: !0, rt: !0 },
  tbody: { tbody: !0, tfoot: !0 },
  td: { td: !0, th: !0 },
  tfoot: { tbody: !0 },
  th: { td: !0, th: !0 },
  thead: { tbody: !0, tfoot: !0 },
  tr: { tr: !0 }
};
function bd(s) {
  return s == 45 || s == 46 || s == 58 || s >= 65 && s <= 90 || s == 95 || s >= 97 && s <= 122 || s >= 161;
}
let ha = null, Oa = null, ca = 0;
function Hs(s, e) {
  let t = s.pos + e;
  if (ca == t && Oa == s) return ha;
  let i = s.peek(e), r = "";
  for (; bd(i); )
    r += String.fromCharCode(i), i = s.peek(++e);
  return Oa = s, ca = t, ha = r ? r.toLowerCase() : i == kd || i == xd ? void 0 : null;
}
const Th = 60, Pr = 62, Xn = 47, kd = 63, xd = 33, wd = 45;
function fa(s, e) {
  this.name = s, this.parent = e;
}
const yd = [Zn, yh, kh, xh, wh], $d = new bh({
  start: null,
  shift(s, e, t, i) {
    return yd.indexOf(e) > -1 ? new fa(Hs(i, 1) || "", s) : s;
  },
  reduce(s, e) {
    return e == $h && s ? s.parent : s;
  },
  reuse(s, e, t, i) {
    let r = e.type.id;
    return r == Zn || r == dd ? new fa(Hs(i, 1) || "", s) : s;
  },
  strict: !1
}), Pd = new Qe((s, e) => {
  if (s.next != Th) {
    s.next < 0 && e.context && s.acceptToken(is);
    return;
  }
  s.advance();
  let t = s.next == Xn;
  t && s.advance();
  let i = Hs(s, 0);
  if (i === void 0) return;
  if (!i) return s.acceptToken(t ? od : ad);
  let r = e.context ? e.context.name : null;
  if (t) {
    if (i == r) return s.acceptToken(sd);
    if (r && Sd[r]) return s.acceptToken(is, -2);
    if (e.dialectEnabled(gd)) return s.acceptToken(nd);
    for (let n = e.context; n; n = n.parent) if (n.name == i) return;
    s.acceptToken(ld);
  } else {
    if (i == "script") return s.acceptToken(kh);
    if (i == "style") return s.acceptToken(xh);
    if (i == "textarea") return s.acceptToken(wh);
    if (Qd.hasOwnProperty(i)) return s.acceptToken(yh);
    r && oa[r] && oa[r][i] ? s.acceptToken(is, -1) : s.acceptToken(Zn);
  }
}, { contextual: !0 }), vd = new Qe((s) => {
  for (let e = 0, t = 0; ; t++) {
    if (s.next < 0) {
      t && s.acceptToken(aa);
      break;
    }
    if (s.next == wd)
      e++;
    else if (s.next == Pr && e >= 2) {
      t >= 3 && s.acceptToken(aa, -2);
      break;
    } else
      e = 0;
    s.advance();
  }
});
function Td(s) {
  for (; s; s = s.parent)
    if (s.name == "svg" || s.name == "math") return !0;
  return !1;
}
const Zd = new Qe((s, e) => {
  if (s.next == Xn && s.peek(1) == Pr) {
    let t = e.dialectEnabled(md) || Td(e.context);
    s.acceptToken(t ? rd : la, 2);
  } else s.next == Pr && s.acceptToken(la, 1);
});
function Cn(s, e, t) {
  let i = 2 + s.length;
  return new Qe((r) => {
    for (let n = 0, l = 0, a = 0; ; a++) {
      if (r.next < 0) {
        a && r.acceptToken(e);
        break;
      }
      if (n == 0 && r.next == Th || n == 1 && r.next == Xn || n >= 2 && n < i && r.next == s.charCodeAt(n - 2))
        n++, l++;
      else if (n == i && r.next == Pr) {
        a > l ? r.acceptToken(e, -l) : r.acceptToken(t, -(l - 2));
        break;
      } else if ((r.next == 10 || r.next == 13) && a) {
        r.acceptToken(e, 1);
        break;
      } else
        n = l = 0;
      r.advance();
    }
  });
}
const Xd = Cn("script", Hu, Ku), Cd = Cn("style", Ju, ed), Ad = Cn("textarea", td, id), Rd = Wt({
  "Text RawText IncompleteTag IncompleteCloseTag": g.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": g.angleBracket,
  TagName: g.tagName,
  "MismatchedCloseTag/TagName": [g.tagName, g.invalid],
  AttributeName: g.attributeName,
  "AttributeValue UnquotedAttributeValue": g.attributeValue,
  Is: g.definitionOperator,
  "EntityReference CharacterReference": g.character,
  Comment: g.blockComment,
  ProcessingInst: g.processingInstruction,
  DoctypeDecl: g.documentMeta
}), zd = Et.deserialize({
  version: 14,
  states: ",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",
  stateData: ",c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~",
  goto: "%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 68,
  context: $d,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 22, 31, 34, 37, "CloseTag"],
    ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 30, 33, 36, 38, "OpenTag"],
    ["group", -10, 14, 15, 18, 19, 20, 21, 40, 41, 42, 43, "Entity", 17, "Entity TextContent", -3, 29, 32, 35, "TextContent Entity"],
    ["isolate", -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, "ltr", -3, 27, 28, 40, ""]
  ],
  propSources: [Rd],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [Xd, Cd, Ad, Zd, Pd, vd, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 16] },
  dialects: { noMatch: 0, selfClosing: 515 },
  tokenPrec: 517
});
function Zh(s, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let i of s.getChildren(Ph)) {
    let r = i.getChild(Od), n = i.getChild(Fs) || i.getChild(vh);
    r && (t[e.read(r.from, r.to)] = n ? n.type.id == Fs ? e.read(n.from + 1, n.to - 1) : e.read(n.from, n.to) : "");
  }
  return t;
}
function ua(s, e) {
  let t = s.getChild(hd);
  return t ? e.read(t.from, t.to) : " ";
}
function rs(s, e, t) {
  let i;
  for (let r of t)
    if (!r.attrs || r.attrs(i || (i = Zh(s.node.parent.firstChild, e))))
      return { parser: r.parser, bracketed: !0 };
  return null;
}
function Xh(s = [], e = []) {
  let t = [], i = [], r = [], n = [];
  for (let a of s)
    (a.tag == "script" ? t : a.tag == "style" ? i : a.tag == "textarea" ? r : n).push(a);
  let l = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let a of e) (l[a.name] || (l[a.name] = [])).push(a);
  return Bo((a, o) => {
    let h = a.type.id;
    if (h == cd) return rs(a, o, t);
    if (h == fd) return rs(a, o, i);
    if (h == ud) return rs(a, o, r);
    if (h == $h && n.length) {
      let O = a.node, c = O.firstChild, f = c && ua(c, o), u;
      if (f) {
        for (let d of n)
          if (d.tag == f && (!d.attrs || d.attrs(u || (u = Zh(c, o))))) {
            let p = O.lastChild, m = p.type.id == pd ? p.from : O.to;
            if (m > c.to)
              return { parser: d.parser, overlay: [{ from: c.to, to: m }] };
          }
      }
    }
    if (l && h == Ph) {
      let O = a.node, c;
      if (c = O.firstChild) {
        let f = l[o.read(c.from, c.to)];
        if (f) for (let u of f) {
          if (u.tagName && u.tagName != ua(O.parent, o)) continue;
          let d = O.lastChild;
          if (d.type.id == Fs) {
            let p = d.from + 1, m = d.lastChild, Q = d.to - (m && m.isError ? 0 : 1);
            if (Q > p) return { parser: u.parser, overlay: [{ from: p, to: Q }], bracketed: !0 };
          } else if (d.type.id == vh)
            return { parser: u.parser, overlay: [{ from: d.from, to: d.to }] };
        }
      }
    }
    return null;
  });
}
const Md = 122, da = 1, Yd = 123, _d = 124, Ch = 2, Ld = 125, Ed = 3, qd = 4, Ah = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], Vd = 58, Wd = 40, Rh = 95, jd = 91, sr = 45, Id = 46, Bd = 35, Dd = 37, Gd = 38, Nd = 92, Ud = 10, Fd = 42;
function xi(s) {
  return s >= 65 && s <= 90 || s >= 97 && s <= 122 || s >= 161;
}
function An(s) {
  return s >= 48 && s <= 57;
}
function pa(s) {
  return An(s) || s >= 97 && s <= 102 || s >= 65 && s <= 70;
}
const zh = (s, e, t) => (i, r) => {
  for (let n = !1, l = 0, a = 0; ; a++) {
    let { next: o } = i;
    if (xi(o) || o == sr || o == Rh || n && An(o))
      !n && (o != sr || a > 0) && (n = !0), l === a && o == sr && l++, i.advance();
    else if (o == Nd && i.peek(1) != Ud) {
      if (i.advance(), pa(i.next)) {
        do
          i.advance();
        while (pa(i.next));
        i.next == 32 && i.advance();
      } else i.next > -1 && i.advance();
      n = !0;
    } else {
      n && i.acceptToken(
        l == 2 && r.canShift(Ch) ? e : o == Wd ? t : s
      );
      break;
    }
  }
}, Hd = new Qe(
  zh(Yd, Ch, _d)
), Kd = new Qe(
  zh(Ld, Ed, qd)
), Jd = new Qe((s) => {
  if (Ah.includes(s.peek(-1))) {
    let { next: e } = s;
    (xi(e) || e == Rh || e == Bd || e == Id || e == Fd || e == jd || e == Vd && xi(s.peek(1)) || e == sr || e == Gd) && s.acceptToken(Md);
  }
}), ep = new Qe((s) => {
  if (!Ah.includes(s.peek(-1))) {
    let { next: e } = s;
    if (e == Dd && (s.advance(), s.acceptToken(da)), xi(e)) {
      do
        s.advance();
      while (xi(s.next) || An(s.next));
      s.acceptToken(da);
    }
  }
}), tp = Wt({
  "AtKeyword import charset namespace keyframes media supports": g.definitionKeyword,
  "from to selector": g.keyword,
  NamespaceName: g.namespace,
  KeyframeName: g.labelName,
  KeyframeRangeName: g.operatorKeyword,
  TagName: g.tagName,
  ClassName: g.className,
  PseudoClassName: g.constant(g.className),
  IdName: g.labelName,
  "FeatureName PropertyName": g.propertyName,
  AttributeName: g.attributeName,
  NumberLiteral: g.number,
  KeywordQuery: g.keyword,
  UnaryQueryOp: g.operatorKeyword,
  "CallTag ValueName": g.atom,
  VariableName: g.variableName,
  Callee: g.operatorKeyword,
  Unit: g.unit,
  "UniversalSelector NestingSelector": g.definitionOperator,
  "MatchOp CompareOp": g.compareOperator,
  "ChildOp SiblingOp, LogicOp": g.logicOperator,
  BinOp: g.arithmeticOperator,
  Important: g.modifier,
  Comment: g.blockComment,
  ColorLiteral: g.color,
  "ParenthesizedContent StringLiteral": g.string,
  ":": g.punctuation,
  "PseudoOp #": g.derefOperator,
  "; ,": g.separator,
  "( )": g.paren,
  "[ ]": g.squareBracket,
  "{ }": g.brace
}), ip = { __proto__: null, lang: 38, "nth-child": 38, "nth-last-child": 38, "nth-of-type": 38, "nth-last-of-type": 38, dir: 38, "host-context": 38, if: 84, url: 124, "url-prefix": 124, domain: 124, regexp: 124 }, rp = { __proto__: null, or: 98, and: 98, not: 106, only: 106, layer: 170 }, sp = { __proto__: null, selector: 112, layer: 166 }, np = { __proto__: null, "@import": 162, "@media": 174, "@charset": 178, "@namespace": 182, "@keyframes": 188, "@supports": 200, "@scope": 204 }, lp = { __proto__: null, to: 207 }, ap = Et.deserialize({
  version: 14,
  states: "EbQYQdOOO#qQdOOP#xO`OOOOQP'#Cf'#CfOOQP'#Ce'#CeO#}QdO'#ChO$nQaO'#CcO$xQdO'#CkO%TQdO'#DpO%YQdO'#DrO%_QdO'#DuO%_QdO'#DxOOQP'#FV'#FVO&eQhO'#EhOOQS'#FU'#FUOOQS'#Ek'#EkQYQdOOO&lQdO'#EOO&PQhO'#EUO&lQdO'#EWO'aQdO'#EYO'lQdO'#E]O'tQhO'#EcO(VQdO'#EeO(bQaO'#CfO)VQ`O'#D{O)[Q`O'#F`O)gQdO'#F`QOQ`OOP)qO&jO'#CaPOOO)C@t)C@tOOQP'#Cj'#CjOOQP,59S,59SO#}QdO,59SO)|QdO,59VO%TQdO,5:[O%YQdO,5:^O%_QdO,5:aO%_QdO,5:cO%_QdO,5:dO%_QdO'#ErO*XQ`O,58}O*aQdO'#DzOOQS,58},58}OOQP'#Cn'#CnOOQO'#Dn'#DnOOQP,59V,59VO*hQ`O,59VO*mQ`O,59VOOQP'#Dq'#DqOOQP,5:[,5:[OOQO'#Ds'#DsO*rQpO,5:^O+]QaO,5:aO+sQaO,5:dOOQW'#DZ'#DZO,ZQhO'#DdO,xQhO'#FaO'tQhO'#DbO-WQ`O'#DhOOQW'#F['#F[O-]Q`O,5;SO-eQ`O'#DeOOQS-E8i-E8iOOQ['#Cs'#CsO-jQdO'#CtO.QQdO'#CzO.hQdO'#C}O/OQ!pO'#DPO1RQ!jO,5:jOOQO'#DU'#DUO*mQ`O'#DTO1cQ!nO'#FXO3`Q`O'#DVO3eQ`O'#DkOOQ['#FX'#FXO-`Q`O,5:pO3jQ!bO,5:rOOQS'#E['#E[O3rQ`O,5:tO3wQdO,5:tOOQO'#E_'#E_O4PQ`O,5:wO4UQhO,5:}O%_QdO'#DgOOQS,5;P,5;PO-eQ`O,5;PO4^QdO,5;PO4fQdO,5:gO4vQdO'#EtO5TQ`O,5;zO5TQ`O,5;zPOOO'#Ej'#EjP5`O&jO,58{POOO,58{,58{OOQP1G.n1G.nOOQP1G.q1G.qO*hQ`O1G.qO*mQ`O1G.qOOQP1G/v1G/vO5kQpO1G/xO5sQaO1G/{O6ZQaO1G/}O6qQaO1G0OO7XQaO,5;^OOQO-E8p-E8pOOQS1G.i1G.iO7cQ`O,5:fO7hQdO'#DoO7oQdO'#CrOOQP1G/x1G/xO&lQdO1G/xO7vQ!jO'#DZO8UQ!bO,59vO8^QhO,5:OOOQO'#F]'#F]O8XQ!bO,59zO'tQhO,59xO8fQhO'#EvO8sQ`O,5;{O9OQhO,59|O9uQhO'#DiOOQW,5:S,5:SOOQS1G0n1G0nOOQW,5:P,5:PO9|Q!fO'#FYOOQS'#FY'#FYOOQS'#Em'#EmO;^QdO,59`OOQ[,59`,59`O;tQdO,59fOOQ[,59f,59fO<[QdO,59iOOQ[,59i,59iOOQ[,59k,59kO&lQdO,59mO<rQhO'#EQOOQW'#EQ'#EQO=WQ`O1G0UO1[QhO1G0UOOQ[,59o,59oO'tQhO'#DXOOQ[,59q,59qO=]Q#tO,5:VOOQS1G0[1G0[OOQS1G0^1G0^OOQS1G0`1G0`O=hQ`O1G0`O=mQdO'#E`OOQS1G0c1G0cOOQS1G0i1G0iO=xQaO,5:RO-`Q`O1G0kOOQS1G0k1G0kO-eQ`O1G0kO>PQ!fO1G0ROOQO1G0R1G0ROOQO,5;`,5;`O>gQdO,5;`OOQO-E8r-E8rO>tQ`O1G1fPOOO-E8h-E8hPOOO1G.g1G.gOOQP7+$]7+$]OOQP7+%d7+%dO&lQdO7+%dOOQS1G0Q1G0QO?PQaO'#F_O?ZQ`O,5:ZO?`Q!fO'#ElO@^QdO'#FWO@hQ`O,59^O@mQ!bO7+%dO&lQdO1G/bO@uQhO1G/fOOQW1G/j1G/jOOQW1G/d1G/dOAWQhO,5;bOOQO-E8t-E8tOAfQhO'#DZOAtQhO'#F^OBPQ`O'#F^OBUQ`O,5:TOOQS-E8k-E8kOOQ[1G.z1G.zOOQ[1G/Q1G/QOOQ[1G/T1G/TOOQ[1G/X1G/XOBZQdO,5:lOOQS7+%p7+%pOB`Q`O7+%pOBeQhO'#DYOBmQ`O,59sO'tQhO,59sOOQ[1G/q1G/qOBuQ`O1G/qOOQS7+%z7+%zOBzQbO'#DPOOQO'#Eb'#EbOCYQ`O'#EaOOQO'#Ea'#EaOCeQ`O'#EwOCmQdO,5:zOOQS,5:z,5:zOOQ[1G/m1G/mOOQS7+&V7+&VO-`Q`O7+&VOCxQ!fO'#EsO&lQdO'#EsOEPQdO7+%mOOQO7+%m7+%mOOQO1G0z1G0zOEdQ!bO<<IOOElQdO'#EqOEvQ`O,5;yOOQP1G/u1G/uOOQS-E8j-E8jOFOQdO'#EpOFYQ`O,5;rOOQ]1G.x1G.xOOQP<<IO<<IOOFbQdO7+$|OOQO'#D]'#D]OFiQ!bO7+%QOFqQhO'#EoOF{Q`O,5;xO&lQdO,5;xOOQW1G/o1G/oOOQO'#ES'#ESOGTQ`O1G0WOOQS<<I[<<I[O&lQdO,59tOGnQhO1G/_OOQ[1G/_1G/_OGuQ`O1G/_OOQW-E8l-E8lOOQ[7+%]7+%]OOQO,5:{,5:{O=pQdO'#ExOCeQ`O,5;cOOQS,5;c,5;cOOQS-E8u-E8uOOQS1G0f1G0fOOQS<<Iq<<IqOG}Q!fO,5;_OOQS-E8q-E8qOOQO<<IX<<IXOOQPAN>jAN>jOIUQaO,5;]OOQO-E8o-E8oOI`QdO,5;[OOQO-E8n-E8nOOQW<<Hh<<HhOOQW<<Hl<<HlOIjQhO<<HlOI{QhO,5;ZOJWQ`O,5;ZOOQO-E8m-E8mOJ]QdO1G1dOBZQdO'#EuOJgQ`O7+%rOOQW7+%r7+%rOJoQ!bO1G/`OOQ[7+$y7+$yOJzQhO7+$yPKRQ`O'#EnOOQO,5;d,5;dOOQO-E8v-E8vOOQS1G0}1G0}OKWQ`OAN>WO&lQdO1G0uOK]Q`O7+'OOOQO,5;a,5;aOOQO-E8s-E8sOOQW<<I^<<I^OOQ[<<He<<HePOQW,5;Y,5;YOOQWG23rG23rOKeQdO7+&a",
  stateData: "Kx~O#sOS#tQQ~OW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#oRO~OQiOW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#ohO~O#m$SP~P!dO#tmO~O#ooO~O]qO`rOarOjsOmtO!juO!mwO#nvO~OpzO!^xO~P$SOc!QO#o|O#p}O~O#o!RO~O#o!TO~OW[OZ[O]TO`VOaVOjWOmXO!jYO!mZO#oRO~OS!]Oe!YO!V![O!Y!`O#q!XOp$TP~Ok$TP~P&POQ!jOe!cOm!dOp!eOr!mOt!mOz!kO!`!lO#o!bO#p!hO#}!fO~Ot!qO!`!lO#o!pO~Ot!sO#o!sO~OS!]Oe!YO!V![O!Y!`O#q!XO~Oe!vOpzO#Z!xO~O]YX`YX`!pXaYXjYXmYXpYX!^YX!jYX!mYX#nYX~O`!zO~Ok!{O#m$SXo$SX~O#m$SXo$SX~P!dO#u#OO#v#OO#w#QO~Oc#UO#o|O#p}O~OpzO!^xO~Oo$SP~P!dOe#`O~Oe#aO~Ol#bO!h#cO~O]qO`rOarOjsOmtO~Op!ia!^!ia!j!ia!m!ia#n!iad!ia~P*zOp!la!^!la!j!la!m!la#n!lad!la~P*zOR#gOS!]Oe!YOr#gOt#gO!V![O!Y!`O#q#dO#}!fO~O!R#iO!^#jOk$TXp$TX~Oe#mO~Ok#oOpzO~Oe!vO~O]#rO`#rOd#uOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl#wO~P&lO]#rO`#rOi#rOj#rOk#rOo#yO~P&lOP#zOSsXesXksXvsX!VsX!YsX!usX!wsX#qsX!TsXQsX]sX`sXdsXisXjsXmsXpsXrsXtsXzsX!`sX#osX#psX#}sXlsXosX!^sX!qsX#msX~Ov#{O!u#|O!w#}Ok$TP~P'tOe#aOS#{Xk#{Xv#{X!V#{X!Y#{X!u#{X!w#{X#q#{XQ#{X]#{X`#{Xd#{Xi#{Xj#{Xm#{Xp#{Xr#{Xt#{Xz#{X!`#{X#o#{X#p#{X#}#{Xl#{Xo#{X!^#{X!q#{X#m#{X~Oe$RO~Oe$TO~Ok$VOv#{O~Ok$WO~Ot$XO!`!lO~Op$YO~OpzO!R#iO~OpzO#Z$`O~O!q$bOk!oa#m!oao!oa~P&lOk#hX#m#hXo#hX~P!dOk!{O#m$Sao$Sa~O#u#OO#v#OO#w$hO~Ol$jO!h$kO~Op!ii!^!ii!j!ii!m!ii#n!iid!ii~P*zOp!ki!^!ki!j!ki!m!ki#n!kid!ki~P*zOp!li!^!li!j!li!m!li#n!lid!li~P*zOp#fa!^#fa~P$SOo$lO~Od$RP~P%_Od#zP~P&lO`!PXd}X!R}X!T!PX~O`$sO!T$tO~Od$uO!R#iO~Ok#jXp#jX!^#jX~P'tO!^#jOk$Tap$Ta~O!R#iOk!Uap!Ua!^!Uad!Ua`!Ua~OS!]Oe!YO!V![O!Y!`O#q$yO~Od$QP~P9dOv#{OQ#|X]#|X`#|Xd#|Xe#|Xi#|Xj#|Xk#|Xm#|Xp#|Xr#|Xt#|Xz#|X!`#|X#o#|X#p#|X#}#|Xl#|Xo#|X~O]#rO`#rOd%OOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl%PO~P&lO]#rO`#rOi#rOj#rOk#rOo%QO~P&lOe%SOS!tXk!tX!V!tX!Y!tX#q!tX~Ok%TO~Od%YOt%ZO!a%ZO~Ok%[O~Oo%cO#o%^O#}%]O~Od%dO~P$SOv#{O!^%hO!q%jOk!oi#m!oio!oi~P&lOk#ha#m#hao#ha~P!dOk!{O#m$Sio$Si~O!^%mOd$RX~P$SOd%oO~Ov#{OQ#`Xd#`Xe#`Xm#`Xp#`Xr#`Xt#`Xz#`X!^#`X!`#`X#o#`X#p#`X#}#`X~O!^%qOd#zX~P&lOd%sO~Ol%tOv#{O~OR#gOr#gOt#gO#q%vO#}!fO~O!R#iOk#jap#ja!^#ja~O`!PXd}X!R}X!^}X~O!R#iO!^%xOd$QX~O`%zO~Od%{O~O#o%|O~Ok&OO~O`&PO!R#iO~Od&ROk&QO~Od&UO~OP#zOpsX!^sXdsX~O#}%]Op#TX!^#TX~OpzO!^&WO~Oo&[O#o%^O#}%]O~Ov#{OQ#gXe#gXk#gXm#gXp#gXr#gXt#gXz#gX!^#gX!`#gX!q#gX#m#gX#o#gX#p#gX#}#gXo#gX~O!^%hO!q&`Ok!oq#m!oqo!oq~P&lOl&aOv#{O~Od#eX!^#eX~P%_O!^%mOd$Ra~Od#dX!^#dX~P&lO!^%qOd#za~Od&fO~P&lOd&gO!T&hO~Od#cX!^#cX~P9dO!^%xOd$Qa~O]&mOd&oO~OS#bae#ba!V#ba!Y#ba#q#ba~Od&qO~PG]Od&qOk&rO~Ov#{OQ#gae#gak#gam#gap#gar#gat#gaz#ga!^#ga!`#ga!q#ga#m#ga#o#ga#p#ga#}#gao#ga~Od#ea!^#ea~P$SOd#da!^#da~P&lOR#gOr#gOt#gO#q%vO#}%]O~O!R#iOd#ca!^#ca~O`&xO~O!^%xOd$Qi~P&lO]&mOd&|O~Ov#{Od|ik|i~Od&}O~PG]Ok'OO~Od'PO~O!^%xOd$Qq~Od#cq!^#cq~P&lO#s!a#t#}]#}v!m~",
  goto: "2h$UPPPPP$VP$YP$c$uP$cP%X$cPP%_PPP%e%o%oPPPPP%oPP%oP&]P%oP%o'W%oP't'w'}'}(^'}P'}P'}P'}'}P(m'}(yP(|PP)p)v$c)|$c*SP$cP$c$cP*Y*{+YP$YP+aP+dP$YP$YP$YP+j$YP+m+p+s+z$YP$YPP$YP,P,V,f,|-[-b-l-r-x.O.U.`.f.l.rPPPPPPPPPPP.x/R/w/z0|P1U1u2O2R2U2[RnQ_^OP`kz!{$dq[OPYZ`kuvwxz!v!{#`$d%mqSOPYZ`kuvwxz!v!{#`$d%mQpTR#RqQ!OVR#SrQ#S!QS$Q!i!jR$i#U!V!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'Q!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QU#g!Y$t&hU%`$Y%b&WR&V%_!V!iac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QR$S!kQ%W$RR&S%Xk!^]bf!Y![!g#i#j#m$P$R%X%xQ#e!YQ${#mQ%w$tQ&j%xR&w&hQ!ygQ#p!`Q$^!xR%f$`R#n!]!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QQ!qdR$X!rQ!PVR#TrQ#S!PR$i#TQ!SWR#VsQ!UXR#WtQ{UQ!wgQ#^yQ#o!_Q$U!nQ$[!uQ$_!yQ%e$^Q&Y%aQ&]%fR&v&XSjPzQ!}kQ$c!{R%k$dZiPkz!{$dR$P!gQ%}%SR&z&mR!rdR!teR$Z!tS%a$Y%bR&t&WV%_$Y%b&WQ#PmR$g#PQ`OSkPzU!a`k$dR$d!{Q$p#aY%p$p%u&d&l'QQ%u$sQ&d%qQ&l%zR'Q&xQ#t!cQ#v!dQ#x!eV$}#t#v#xQ%X$RR&T%XQ%y$zS&k%y&yR&y&lQ%r$pR&e%rQ%n$mR&c%nQyUR#]yQ%i$aR&_%iQ!|jS$e!|$fR$f!}Q&n%}R&{&nQ#k!ZR$x#kQ%b$YR&Z%bQ&X%aR&u&X__OP`kz!{$d^UOP`kz!{$dQ!VYQ!WZQ#XuQ#YvQ#ZwQ#[xQ$]!vQ$m#`R&b%mR$q#aQ!gaQ!oc[#q!c!d!e#t#v#xQ$a!zd$o#a$p$s%q%u%z&d&l&x'QQ$r#cQ%R#{S%g$a%iQ%l$kQ&^%hR&p&P]#s!c!d!e#t#v#xW!Z]b!g$PQ!ufQ#f!YQ#l![Q$v#iQ$w#jQ$z#mS%V$R%XR&i%xQ#h!YQ%w$tR&w&hR$|#mR$n#`QlPR#_zQ!_]Q!nbQ$O!gR%U$P",
  nodeNames: "⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector CallQuery ArgList , CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to AtRule Styles",
  maxTerm: 143,
  nodeProps: [
    ["isolate", -2, 5, 36, ""],
    ["openedBy", 20, "(", 28, "[", 31, "{"],
    ["closedBy", 21, ")", 29, "]", 32, "}"]
  ],
  propSources: [tp],
  skippedNodes: [0, 5, 106],
  repeatNodeCount: 15,
  tokenData: "JQ~R!YOX$qX^%i^p$qpq%iqr({rs-ust/itu6Wuv$qvw7Qwx7cxy9Qyz9cz{9h{|:R|}>t}!O?V!O!P?t!P!Q@]!Q![AU![!]BP!]!^B{!^!_C^!_!`DY!`!aDm!a!b$q!b!cEn!c!}$q!}#OG{#O#P$q#P#QH^#Q#R6W#R#o$q#o#pHo#p#q6W#q#rIQ#r#sIc#s#y$q#y#z%i#z$f$q$f$g%i$g#BY$q#BY#BZ%i#BZ$IS$q$IS$I_%i$I_$I|$q$I|$JO%i$JO$JT$q$JT$JU%i$JU$KV$q$KV$KW%i$KW&FU$q&FU&FV%i&FV;'S$q;'S;=`Iz<%lO$q`$tSOy%Qz;'S%Q;'S;=`%c<%lO%Q`%VS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q`%fP;=`<%l%Q~%nh#s~OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Q~'ah#s~!a`OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Qj)OUOy%Qz#]%Q#]#^)b#^;'S%Q;'S;=`%c<%lO%Qj)gU!a`Oy%Qz#a%Q#a#b)y#b;'S%Q;'S;=`%c<%lO%Qj*OU!a`Oy%Qz#d%Q#d#e*b#e;'S%Q;'S;=`%c<%lO%Qj*gU!a`Oy%Qz#c%Q#c#d*y#d;'S%Q;'S;=`%c<%lO%Qj+OU!a`Oy%Qz#f%Q#f#g+b#g;'S%Q;'S;=`%c<%lO%Qj+gU!a`Oy%Qz#h%Q#h#i+y#i;'S%Q;'S;=`%c<%lO%Qj,OU!a`Oy%Qz#T%Q#T#U,b#U;'S%Q;'S;=`%c<%lO%Qj,gU!a`Oy%Qz#b%Q#b#c,y#c;'S%Q;'S;=`%c<%lO%Qj-OU!a`Oy%Qz#h%Q#h#i-b#i;'S%Q;'S;=`%c<%lO%Qj-iS!qY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q~-xWOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c<%lO-u~.gOt~~.jRO;'S-u;'S;=`.s;=`O-u~.vXOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c;=`<%l-u<%lO-u~/fP;=`<%l-uj/nYjYOy%Qz!Q%Q!Q![0^![!c%Q!c!i0^!i#T%Q#T#Z0^#Z;'S%Q;'S;=`%c<%lO%Qj0cY!a`Oy%Qz!Q%Q!Q![1R![!c%Q!c!i1R!i#T%Q#T#Z1R#Z;'S%Q;'S;=`%c<%lO%Qj1WY!a`Oy%Qz!Q%Q!Q![1v![!c%Q!c!i1v!i#T%Q#T#Z1v#Z;'S%Q;'S;=`%c<%lO%Qj1}YrY!a`Oy%Qz!Q%Q!Q![2m![!c%Q!c!i2m!i#T%Q#T#Z2m#Z;'S%Q;'S;=`%c<%lO%Qj2tYrY!a`Oy%Qz!Q%Q!Q![3d![!c%Q!c!i3d!i#T%Q#T#Z3d#Z;'S%Q;'S;=`%c<%lO%Qj3iY!a`Oy%Qz!Q%Q!Q![4X![!c%Q!c!i4X!i#T%Q#T#Z4X#Z;'S%Q;'S;=`%c<%lO%Qj4`YrY!a`Oy%Qz!Q%Q!Q![5O![!c%Q!c!i5O!i#T%Q#T#Z5O#Z;'S%Q;'S;=`%c<%lO%Qj5TY!a`Oy%Qz!Q%Q!Q![5s![!c%Q!c!i5s!i#T%Q#T#Z5s#Z;'S%Q;'S;=`%c<%lO%Qj5zSrY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qd6ZUOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qd6tS!hS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qb7VSZQOy%Qz;'S%Q;'S;=`%c<%lO%Q~7fWOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z<%lO7c~8RRO;'S7c;'S;=`8[;=`O7c~8_XOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z;=`<%l7c<%lO7c~8}P;=`<%l7cj9VSeYOy%Qz;'S%Q;'S;=`%c<%lO%Q~9hOd~n9oUWQvWOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qj:YWvW!mQOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj:wU!a`Oy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Qj;bY!a`#}YOy%Qz!Q%Q!Q![;Z![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj<VY!a`Oy%Qz{%Q{|<u|}%Q}!O<u!O!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj<zU!a`Oy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj=eU!a`#}YOy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj>O[!a`#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj>yS!^YOy%Qz;'S%Q;'S;=`%c<%lO%Qj?[WvWOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj?yU]YOy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Q~@bTvWOy%Qz{@q{;'S%Q;'S;=`%c<%lO%Q~@xS!a`#t~Oy%Qz;'S%Q;'S;=`%c<%lO%QjAZ[#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%QjBUU`YOy%Qz![%Q![!]Bh!];'S%Q;'S;=`%c<%lO%QbBoSaQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjCQSkYOy%Qz;'S%Q;'S;=`%c<%lO%QhCcU!TWOy%Qz!_%Q!_!`Cu!`;'S%Q;'S;=`%c<%lO%QhC|S!TW!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QlDaS!TW!hSOy%Qz;'S%Q;'S;=`%c<%lO%QjDtV!jQ!TWOy%Qz!_%Q!_!`Cu!`!aEZ!a;'S%Q;'S;=`%c<%lO%QbEbS!jQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjEqYOy%Qz}%Q}!OFa!O!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjFfW!a`Oy%Qz!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjGV[iY!a`Oy%Qz}%Q}!OGO!O!Q%Q!Q![GO![!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjHQSmYOy%Qz;'S%Q;'S;=`%c<%lO%QnHcSl^Oy%Qz;'S%Q;'S;=`%c<%lO%QjHtSpYOy%Qz;'S%Q;'S;=`%c<%lO%QjIVSoYOy%Qz;'S%Q;'S;=`%c<%lO%QfIhU!mQOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Q`I}P;=`<%l$q",
  tokenizers: [Jd, ep, Hd, Kd, 1, 2, 3, 4, new $r("m~RRYZ[z{a~~g~aO#v~~dP!P!Qg~lO#w~~", 28, 129)],
  topRules: { StyleSheet: [0, 6], Styles: [1, 105] },
  specialized: [{ term: 124, get: (s) => ip[s] || -1 }, { term: 125, get: (s) => rp[s] || -1 }, { term: 4, get: (s) => sp[s] || -1 }, { term: 25, get: (s) => np[s] || -1 }, { term: 123, get: (s) => lp[s] || -1 }],
  tokenPrec: 1963
});
let ss = null;
function ns() {
  if (!ss && typeof document == "object" && document.body) {
    let { style: s } = document.body, e = [], t = /* @__PURE__ */ new Set();
    for (let i in s)
      i != "cssText" && i != "cssFloat" && typeof s[i] == "string" && (/[A-Z]/.test(i) && (i = i.replace(/[A-Z]/g, (r) => "-" + r.toLowerCase())), t.has(i) || (e.push(i), t.add(i)));
    ss = e.sort().map((i) => ({ type: "property", label: i, apply: i + ": " }));
  }
  return ss || [];
}
const ga = /* @__PURE__ */ [
  "active",
  "after",
  "any-link",
  "autofill",
  "backdrop",
  "before",
  "checked",
  "cue",
  "default",
  "defined",
  "disabled",
  "empty",
  "enabled",
  "file-selector-button",
  "first",
  "first-child",
  "first-letter",
  "first-line",
  "first-of-type",
  "focus",
  "focus-visible",
  "focus-within",
  "fullscreen",
  "has",
  "host",
  "host-context",
  "hover",
  "in-range",
  "indeterminate",
  "invalid",
  "is",
  "lang",
  "last-child",
  "last-of-type",
  "left",
  "link",
  "marker",
  "modal",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "part",
  "placeholder",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "selection",
  "slotted",
  "target",
  "target-text",
  "valid",
  "visited",
  "where"
].map((s) => ({ type: "class", label: s })), ma = /* @__PURE__ */ [
  "above",
  "absolute",
  "activeborder",
  "additive",
  "activecaption",
  "after-white-space",
  "ahead",
  "alias",
  "all",
  "all-scroll",
  "alphabetic",
  "alternate",
  "always",
  "antialiased",
  "appworkspace",
  "asterisks",
  "attr",
  "auto",
  "auto-flow",
  "avoid",
  "avoid-column",
  "avoid-page",
  "avoid-region",
  "axis-pan",
  "background",
  "backwards",
  "baseline",
  "below",
  "bidi-override",
  "blink",
  "block",
  "block-axis",
  "bold",
  "bolder",
  "border",
  "border-box",
  "both",
  "bottom",
  "break",
  "break-all",
  "break-word",
  "bullets",
  "button",
  "button-bevel",
  "buttonface",
  "buttonhighlight",
  "buttonshadow",
  "buttontext",
  "calc",
  "capitalize",
  "caps-lock-indicator",
  "caption",
  "captiontext",
  "caret",
  "cell",
  "center",
  "checkbox",
  "circle",
  "cjk-decimal",
  "clear",
  "clip",
  "close-quote",
  "col-resize",
  "collapse",
  "color",
  "color-burn",
  "color-dodge",
  "column",
  "column-reverse",
  "compact",
  "condensed",
  "contain",
  "content",
  "contents",
  "content-box",
  "context-menu",
  "continuous",
  "copy",
  "counter",
  "counters",
  "cover",
  "crop",
  "cross",
  "crosshair",
  "currentcolor",
  "cursive",
  "cyclic",
  "darken",
  "dashed",
  "decimal",
  "decimal-leading-zero",
  "default",
  "default-button",
  "dense",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "disc",
  "discard",
  "disclosure-closed",
  "disclosure-open",
  "document",
  "dot-dash",
  "dot-dot-dash",
  "dotted",
  "double",
  "down",
  "e-resize",
  "ease",
  "ease-in",
  "ease-in-out",
  "ease-out",
  "element",
  "ellipse",
  "ellipsis",
  "embed",
  "end",
  "ethiopic-abegede-gez",
  "ethiopic-halehame-aa-er",
  "ethiopic-halehame-gez",
  "ew-resize",
  "exclusion",
  "expanded",
  "extends",
  "extra-condensed",
  "extra-expanded",
  "fantasy",
  "fast",
  "fill",
  "fill-box",
  "fixed",
  "flat",
  "flex",
  "flex-end",
  "flex-start",
  "footnotes",
  "forwards",
  "from",
  "geometricPrecision",
  "graytext",
  "grid",
  "groove",
  "hand",
  "hard-light",
  "help",
  "hidden",
  "hide",
  "higher",
  "highlight",
  "highlighttext",
  "horizontal",
  "hsl",
  "hsla",
  "hue",
  "icon",
  "ignore",
  "inactiveborder",
  "inactivecaption",
  "inactivecaptiontext",
  "infinite",
  "infobackground",
  "infotext",
  "inherit",
  "initial",
  "inline",
  "inline-axis",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "inset",
  "inside",
  "intrinsic",
  "invert",
  "italic",
  "justify",
  "keep-all",
  "landscape",
  "large",
  "larger",
  "left",
  "level",
  "lighter",
  "lighten",
  "line-through",
  "linear",
  "linear-gradient",
  "lines",
  "list-item",
  "listbox",
  "listitem",
  "local",
  "logical",
  "loud",
  "lower",
  "lower-hexadecimal",
  "lower-latin",
  "lower-norwegian",
  "lowercase",
  "ltr",
  "luminosity",
  "manipulation",
  "match",
  "matrix",
  "matrix3d",
  "medium",
  "menu",
  "menutext",
  "message-box",
  "middle",
  "min-intrinsic",
  "mix",
  "monospace",
  "move",
  "multiple",
  "multiple_mask_images",
  "multiply",
  "n-resize",
  "narrower",
  "ne-resize",
  "nesw-resize",
  "no-close-quote",
  "no-drop",
  "no-open-quote",
  "no-repeat",
  "none",
  "normal",
  "not-allowed",
  "nowrap",
  "ns-resize",
  "numbers",
  "numeric",
  "nw-resize",
  "nwse-resize",
  "oblique",
  "opacity",
  "open-quote",
  "optimizeLegibility",
  "optimizeSpeed",
  "outset",
  "outside",
  "outside-shape",
  "overlay",
  "overline",
  "padding",
  "padding-box",
  "painted",
  "page",
  "paused",
  "perspective",
  "pinch-zoom",
  "plus-darker",
  "plus-lighter",
  "pointer",
  "polygon",
  "portrait",
  "pre",
  "pre-line",
  "pre-wrap",
  "preserve-3d",
  "progress",
  "push-button",
  "radial-gradient",
  "radio",
  "read-only",
  "read-write",
  "read-write-plaintext-only",
  "rectangle",
  "region",
  "relative",
  "repeat",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "repeat-x",
  "repeat-y",
  "reset",
  "reverse",
  "rgb",
  "rgba",
  "ridge",
  "right",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "round",
  "row",
  "row-resize",
  "row-reverse",
  "rtl",
  "run-in",
  "running",
  "s-resize",
  "sans-serif",
  "saturation",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "screen",
  "scroll",
  "scrollbar",
  "scroll-position",
  "se-resize",
  "self-start",
  "self-end",
  "semi-condensed",
  "semi-expanded",
  "separate",
  "serif",
  "show",
  "single",
  "skew",
  "skewX",
  "skewY",
  "skip-white-space",
  "slide",
  "slider-horizontal",
  "slider-vertical",
  "sliderthumb-horizontal",
  "sliderthumb-vertical",
  "slow",
  "small",
  "small-caps",
  "small-caption",
  "smaller",
  "soft-light",
  "solid",
  "source-atop",
  "source-in",
  "source-out",
  "source-over",
  "space",
  "space-around",
  "space-between",
  "space-evenly",
  "spell-out",
  "square",
  "start",
  "static",
  "status-bar",
  "stretch",
  "stroke",
  "stroke-box",
  "sub",
  "subpixel-antialiased",
  "svg_masks",
  "super",
  "sw-resize",
  "symbolic",
  "symbols",
  "system-ui",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "text",
  "text-bottom",
  "text-top",
  "textarea",
  "textfield",
  "thick",
  "thin",
  "threeddarkshadow",
  "threedface",
  "threedhighlight",
  "threedlightshadow",
  "threedshadow",
  "to",
  "top",
  "transform",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ",
  "transparent",
  "ultra-condensed",
  "ultra-expanded",
  "underline",
  "unidirectional-pan",
  "unset",
  "up",
  "upper-latin",
  "uppercase",
  "url",
  "var",
  "vertical",
  "vertical-text",
  "view-box",
  "visible",
  "visibleFill",
  "visiblePainted",
  "visibleStroke",
  "visual",
  "w-resize",
  "wait",
  "wave",
  "wider",
  "window",
  "windowframe",
  "windowtext",
  "words",
  "wrap",
  "wrap-reverse",
  "x-large",
  "x-small",
  "xor",
  "xx-large",
  "xx-small"
].map((s) => ({ type: "keyword", label: s })).concat(/* @__PURE__ */ [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
].map((s) => ({ type: "constant", label: s }))), op = /* @__PURE__ */ [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "footer",
  "form",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "meter",
  "nav",
  "ol",
  "output",
  "p",
  "pre",
  "ruby",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul"
].map((s) => ({ type: "type", label: s })), hp = /* @__PURE__ */ [
  "@charset",
  "@color-profile",
  "@container",
  "@counter-style",
  "@font-face",
  "@font-feature-values",
  "@font-palette-values",
  "@import",
  "@keyframes",
  "@layer",
  "@media",
  "@namespace",
  "@page",
  "@position-try",
  "@property",
  "@scope",
  "@starting-style",
  "@supports",
  "@view-transition"
].map((s) => ({ type: "keyword", label: s })), Ve = /^(\w[\w-]*|-\w[\w-]*|)$/, Op = /^-(-[\w-]*)?$/;
function cp(s, e) {
  var t;
  if ((s.name == "(" || s.type.isError) && (s = s.parent || s), s.name != "ArgList")
    return !1;
  let i = (t = s.parent) === null || t === void 0 ? void 0 : t.firstChild;
  return (i == null ? void 0 : i.name) != "Callee" ? !1 : e.sliceString(i.from, i.to) == "var";
}
const Qa = /* @__PURE__ */ new Io(), fp = ["Declaration"];
function up(s) {
  for (let e = s; ; ) {
    if (e.type.isTop)
      return e;
    if (!(e = e.parent))
      return s;
  }
}
function Mh(s, e, t) {
  if (e.to - e.from > 4096) {
    let i = Qa.get(e);
    if (i)
      return i;
    let r = [], n = /* @__PURE__ */ new Set(), l = e.cursor(q.IncludeAnonymous);
    if (l.firstChild())
      do
        for (let a of Mh(s, l.node, t))
          n.has(a.label) || (n.add(a.label), r.push(a));
      while (l.nextSibling());
    return Qa.set(e, r), r;
  } else {
    let i = [], r = /* @__PURE__ */ new Set();
    return e.cursor().iterate((n) => {
      var l;
      if (t(n) && n.matchContext(fp) && ((l = n.node.nextSibling) === null || l === void 0 ? void 0 : l.name) == ":") {
        let a = s.sliceString(n.from, n.to);
        r.has(a) || (r.add(a), i.push({ label: a, type: "variable" }));
      }
    }), i;
  }
}
const dp = (s) => (e) => {
  let { state: t, pos: i } = e, r = ae(t).resolveInner(i, -1), n = r.type.isError && r.from == r.to - 1 && t.doc.sliceString(r.from, r.to) == "-";
  if (r.name == "PropertyName" || (n || r.name == "TagName") && /^(Block|Styles)$/.test(r.resolve(r.to).name))
    return { from: r.from, options: ns(), validFor: Ve };
  if (r.name == "ValueName")
    return { from: r.from, options: ma, validFor: Ve };
  if (r.name == "PseudoClassName")
    return { from: r.from, options: ga, validFor: Ve };
  if (s(r) || (e.explicit || n) && cp(r, t.doc))
    return {
      from: s(r) || n ? r.from : i,
      options: Mh(t.doc, up(r), s),
      validFor: Op
    };
  if (r.name == "TagName") {
    for (let { parent: o } = r; o; o = o.parent)
      if (o.name == "Block")
        return { from: r.from, options: ns(), validFor: Ve };
    return { from: r.from, options: op, validFor: Ve };
  }
  if (r.name == "AtKeyword")
    return { from: r.from, options: hp, validFor: Ve };
  if (!e.explicit)
    return null;
  let l = r.resolve(i), a = l.childBefore(i);
  return a && a.name == ":" && l.name == "PseudoClassSelector" ? { from: i, options: ga, validFor: Ve } : a && a.name == ":" && l.name == "Declaration" || l.name == "ArgList" ? { from: i, options: ma, validFor: Ve } : l.name == "Block" || l.name == "Styles" ? { from: i, options: ns(), validFor: Ve } : null;
}, pp = /* @__PURE__ */ dp((s) => s.name == "VariableName"), vr = /* @__PURE__ */ Mt.define({
  name: "css",
  parser: /* @__PURE__ */ ap.configure({
    props: [
      /* @__PURE__ */ Mr.add({
        Declaration: /* @__PURE__ */ ir()
      }),
      /* @__PURE__ */ Zi.add({
        "Block KeyframeList": No
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*\}$/,
    wordChars: "-"
  }
});
function gp() {
  return new Qi(vr, vr.data.of({ autocomplete: pp }));
}
const mp = 316, Qp = 317, Sa = 1, Sp = 2, bp = 3, kp = 4, xp = 318, wp = 320, yp = 321, $p = 5, Pp = 6, vp = 0, Ks = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], Yh = 125, Tp = 59, Js = 47, Zp = 42, Xp = 43, Cp = 45, Ap = 60, Rp = 44, zp = 63, Mp = 46, Yp = 91, _p = new bh({
  start: !1,
  shift(s, e) {
    return e == $p || e == Pp || e == wp ? s : e == yp;
  },
  strict: !1
}), Lp = new Qe((s, e) => {
  let { next: t } = s;
  (t == Yh || t == -1 || e.context) && s.acceptToken(xp);
}, { contextual: !0, fallback: !0 }), Ep = new Qe((s, e) => {
  let { next: t } = s, i;
  Ks.indexOf(t) > -1 || t == Js && ((i = s.peek(1)) == Js || i == Zp) || t != Yh && t != Tp && t != -1 && !e.context && s.acceptToken(mp);
}, { contextual: !0 }), qp = new Qe((s, e) => {
  s.next == Yp && !e.context && s.acceptToken(Qp);
}, { contextual: !0 }), Vp = new Qe((s, e) => {
  let { next: t } = s;
  if (t == Xp || t == Cp) {
    if (s.advance(), t == s.next) {
      s.advance();
      let i = !e.context && e.canShift(Sa);
      s.acceptToken(i ? Sa : Sp);
    }
  } else t == zp && s.peek(1) == Mp && (s.advance(), s.advance(), (s.next < 48 || s.next > 57) && s.acceptToken(bp));
}, { contextual: !0 });
function ls(s, e) {
  return s >= 65 && s <= 90 || s >= 97 && s <= 122 || s == 95 || s >= 192 || !e && s >= 48 && s <= 57;
}
const Wp = new Qe((s, e) => {
  if (s.next != Ap || !e.dialectEnabled(vp) || (s.advance(), s.next == Js)) return;
  let t = 0;
  for (; Ks.indexOf(s.next) > -1; )
    s.advance(), t++;
  if (ls(s.next, !0)) {
    for (s.advance(), t++; ls(s.next, !1); )
      s.advance(), t++;
    for (; Ks.indexOf(s.next) > -1; )
      s.advance(), t++;
    if (s.next == Rp) return;
    for (let i = 0; ; i++) {
      if (i == 7) {
        if (!ls(s.next, !0)) return;
        break;
      }
      if (s.next != "extends".charCodeAt(i)) break;
      s.advance(), t++;
    }
  }
  s.acceptToken(kp, -t);
}), jp = Wt({
  "get set async static": g.modifier,
  "for while do if else switch try catch finally return throw break continue default case defer": g.controlKeyword,
  "in of await yield void typeof delete instanceof as satisfies": g.operatorKeyword,
  "let var const using function class extends": g.definitionKeyword,
  "import export from": g.moduleKeyword,
  "with debugger new": g.keyword,
  TemplateString: g.special(g.string),
  super: g.atom,
  BooleanLiteral: g.bool,
  this: g.self,
  null: g.null,
  Star: g.modifier,
  VariableName: g.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": g.function(g.variableName),
  VariableDefinition: g.definition(g.variableName),
  Label: g.labelName,
  PropertyName: g.propertyName,
  PrivatePropertyName: g.special(g.propertyName),
  "CallExpression/MemberExpression/PropertyName": g.function(g.propertyName),
  "FunctionDeclaration/VariableDefinition": g.function(g.definition(g.variableName)),
  "ClassDeclaration/VariableDefinition": g.definition(g.className),
  "NewExpression/VariableName": g.className,
  PropertyDefinition: g.definition(g.propertyName),
  PrivatePropertyDefinition: g.definition(g.special(g.propertyName)),
  UpdateOp: g.updateOperator,
  "LineComment Hashbang": g.lineComment,
  BlockComment: g.blockComment,
  Number: g.number,
  String: g.string,
  Escape: g.escape,
  ArithOp: g.arithmeticOperator,
  LogicOp: g.logicOperator,
  BitOp: g.bitwiseOperator,
  CompareOp: g.compareOperator,
  RegExp: g.regexp,
  Equals: g.definitionOperator,
  Arrow: g.function(g.punctuation),
  ": Spread": g.punctuation,
  "( )": g.paren,
  "[ ]": g.squareBracket,
  "{ }": g.brace,
  "InterpolationStart InterpolationEnd": g.special(g.brace),
  ".": g.derefOperator,
  ", ;": g.separator,
  "@": g.meta,
  TypeName: g.typeName,
  TypeDefinition: g.definition(g.typeName),
  "type enum interface implements namespace module declare": g.definitionKeyword,
  "abstract global Privacy readonly override": g.modifier,
  "is keyof unique infer asserts": g.operatorKeyword,
  JSXAttributeValue: g.attributeValue,
  JSXText: g.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": g.angleBracket,
  "JSXIdentifier JSXNameSpacedName": g.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": g.attributeName,
  "JSXBuiltin/JSXIdentifier": g.standard(g.tagName)
}), Ip = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, in: 52, out: 55, const: 56, extends: 60, this: 64, true: 72, false: 72, null: 84, void: 88, typeof: 92, super: 108, new: 142, delete: 154, yield: 163, await: 167, class: 172, public: 235, private: 235, protected: 235, readonly: 237, instanceof: 256, satisfies: 259, import: 292, keyof: 349, unique: 353, infer: 359, asserts: 395, is: 397, abstract: 417, implements: 419, type: 421, let: 424, var: 426, using: 429, interface: 435, enum: 439, namespace: 445, module: 447, declare: 451, global: 455, defer: 471, for: 476, of: 485, while: 488, with: 492, do: 496, if: 500, else: 502, switch: 506, case: 512, try: 518, catch: 522, finally: 526, return: 530, throw: 534, break: 538, continue: 542, debugger: 546 }, Bp = { __proto__: null, async: 129, get: 131, set: 133, declare: 195, public: 197, private: 197, protected: 197, static: 199, abstract: 201, override: 203, readonly: 209, accessor: 211, new: 401 }, Dp = { __proto__: null, "<": 193 }, Gp = Et.deserialize({
  version: 14,
  states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
  stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
  goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 380,
  context: _p,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
    ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
    ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
  ],
  propSources: [jp],
  skippedNodes: [0, 5, 6, 278],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [Ep, qp, Vp, Wp, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, Lp, new $r("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new $r("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
  topRules: { Script: [0, 7], SingleExpression: [1, 276], SingleClassItem: [2, 277] },
  dialects: { jsx: 0, ts: 15175 },
  dynamicPrecedences: { 80: 1, 82: 1, 94: 1, 169: 1, 199: 1 },
  specialized: [{ term: 327, get: (s) => Ip[s] || -1 }, { term: 343, get: (s) => Bp[s] || -1 }, { term: 95, get: (s) => Dp[s] || -1 }],
  tokenPrec: 15201
}), _h = [
  /* @__PURE__ */ ce("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ce(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ ce(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ ce(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ce('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ ce('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], Np = /* @__PURE__ */ _h.concat([
  /* @__PURE__ */ ce("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ce("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), ba = /* @__PURE__ */ new Io(), Lh = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function Ft(s) {
  return (e, t) => {
    let i = e.node.getChild("VariableDefinition");
    return i && t(i, s), !0;
  };
}
const Up = ["FunctionDeclaration"], Fp = {
  FunctionDeclaration: /* @__PURE__ */ Ft("function"),
  ClassDeclaration: /* @__PURE__ */ Ft("class"),
  ClassExpression: () => !0,
  EnumDeclaration: /* @__PURE__ */ Ft("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ Ft("type"),
  NamespaceDeclaration: /* @__PURE__ */ Ft("namespace"),
  VariableDefinition(s, e) {
    s.matchContext(Up) || e(s, "variable");
  },
  TypeDefinition(s, e) {
    e(s, "type");
  },
  __proto__: null
};
function Eh(s, e) {
  let t = ba.get(e);
  if (t)
    return t;
  let i = [], r = !0;
  function n(l, a) {
    let o = s.sliceString(l.from, l.to);
    i.push({ label: o, type: a });
  }
  return e.cursor(q.IncludeAnonymous).iterate((l) => {
    if (r)
      r = !1;
    else if (l.name) {
      let a = Fp[l.name];
      if (a && a(l, n) || Lh.has(l.name))
        return !1;
    } else if (l.to - l.from > 8192) {
      for (let a of Eh(s, l.node))
        i.push(a);
      return !1;
    }
  }), ba.set(e, i), i;
}
const ka = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, qh = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName",
  "JSXText",
  "JSXAttributeValue",
  "JSXOpenTag",
  "JSXCloseTag",
  "JSXSelfClosingTag",
  ".",
  "?."
];
function Hp(s) {
  let e = ae(s.state).resolveInner(s.pos, -1);
  if (qh.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && ka.test(s.state.sliceDoc(e.from, e.to));
  if (!t && !s.explicit)
    return null;
  let i = [];
  for (let r = e; r; r = r.parent)
    Lh.has(r.name) && (i = i.concat(Eh(s.state.doc, r)));
  return {
    options: i,
    from: t ? e.from : s.pos,
    validFor: ka
  };
}
const Ee = /* @__PURE__ */ Mt.define({
  name: "javascript",
  parser: /* @__PURE__ */ Gp.configure({
    props: [
      /* @__PURE__ */ Mr.add({
        IfStatement: /* @__PURE__ */ ir({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ ir({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: Gf,
        SwitchBody: (s) => {
          let e = s.textAfter, t = /^\s*\}/.test(e), i = /^\s*(case|default)\b/.test(e);
          return s.baseIndent + (t ? 0 : i ? 1 : 2) * s.unit;
        },
        Block: /* @__PURE__ */ Bf({ closing: "}" }),
        ArrowFunction: (s) => s.baseIndent + s.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": /* @__PURE__ */ ir({ except: /^\s*{/ }),
        JSXElement(s) {
          let e = /^\s*<\//.test(s.textAfter);
          return s.lineIndent(s.node.from) + (e ? 0 : s.unit);
        },
        JSXEscape(s) {
          let e = /\s*\}/.test(s.textAfter);
          return s.lineIndent(s.node.from) + (e ? 0 : s.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(s) {
          return s.column(s.node.from) + s.unit;
        }
      }),
      /* @__PURE__ */ Zi.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": No,
        BlockComment(s) {
          return { from: s.from + 2, to: s.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), Vh = {
  test: (s) => /^JSX/.test(s.name),
  facet: /* @__PURE__ */ bn({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, Wh = /* @__PURE__ */ Ee.configure({ dialect: "ts" }, "typescript"), jh = /* @__PURE__ */ Ee.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ kn.add((s) => s.isTop ? [Vh] : void 0)]
}), Ih = /* @__PURE__ */ Ee.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ kn.add((s) => s.isTop ? [Vh] : void 0)]
}, "typescript");
let Bh = (s) => ({ label: s, type: "keyword" });
const Dh = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Bh), Kp = /* @__PURE__ */ Dh.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(Bh));
function Jp(s = {}) {
  let e = s.jsx ? s.typescript ? Ih : jh : s.typescript ? Wh : Ee, t = s.typescript ? Np.concat(Kp) : _h.concat(Dh);
  return new Qi(e, [
    Ee.data.of({
      autocomplete: iu(qh, tu(t))
    }),
    Ee.data.of({
      autocomplete: Hp
    }),
    s.jsx ? ig : []
  ]);
}
function eg(s) {
  for (; ; ) {
    if (s.name == "JSXOpenTag" || s.name == "JSXSelfClosingTag" || s.name == "JSXFragmentTag")
      return s;
    if (s.name == "JSXEscape" || !s.parent)
      return null;
    s = s.parent;
  }
}
function xa(s, e, t = s.length) {
  for (let i = e == null ? void 0 : e.firstChild; i; i = i.nextSibling)
    if (i.name == "JSXIdentifier" || i.name == "JSXBuiltin" || i.name == "JSXNamespacedName" || i.name == "JSXMemberExpression")
      return s.sliceString(i.from, Math.min(i.to, t));
  return "";
}
const tg = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), ig = /* @__PURE__ */ C.inputHandler.of((s, e, t, i, r) => {
  if ((tg ? s.composing : s.compositionStarted) || s.state.readOnly || e != t || i != ">" && i != "/" || !Ee.isActiveAt(s.state, e, -1))
    return !1;
  let n = r(), { state: l } = n, a = l.changeByRange((o) => {
    var h;
    let { head: O } = o, c = ae(l).resolveInner(O - 1, -1), f;
    if (c.name == "JSXStartTag" && (c = c.parent), !(l.doc.sliceString(O - 1, O) != i || c.name == "JSXAttributeValue" && c.to > O)) {
      if (i == ">" && c.name == "JSXFragmentTag")
        return { range: o, changes: { from: O, insert: "</>" } };
      if (i == "/" && c.name == "JSXStartCloseTag") {
        let u = c.parent, d = u.parent;
        if (d && u.from == O - 2 && ((f = xa(l.doc, d.firstChild, O)) || ((h = d.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let p = `${f}>`;
          return { range: x.cursor(O + p.length, -1), changes: { from: O, insert: p } };
        }
      } else if (i == ">") {
        let u = eg(c);
        if (u && u.name == "JSXOpenTag" && !/^\/?>|^<\//.test(l.doc.sliceString(O, O + 2)) && (f = xa(l.doc, u, O)))
          return { range: o, changes: { from: O, insert: `</${f}>` } };
      }
    }
    return { range: o };
  });
  return a.changes.empty ? !1 : (s.dispatch([
    n,
    l.update(a, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
}), Ht = ["_blank", "_self", "_top", "_parent"], as = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], os = ["get", "post", "put", "delete"], hs = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], de = ["true", "false"], $ = {}, rg = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: Ht,
      hreflang: null
    }
  },
  abbr: $,
  address: $,
  area: {
    attrs: {
      alt: null,
      coords: null,
      href: null,
      target: null,
      ping: null,
      media: null,
      hreflang: null,
      type: null,
      shape: ["default", "rect", "circle", "poly"]
    }
  },
  article: $,
  aside: $,
  audio: {
    attrs: {
      src: null,
      mediagroup: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["none", "metadata", "auto"],
      autoplay: ["autoplay"],
      loop: ["loop"],
      controls: ["controls"]
    }
  },
  b: $,
  base: { attrs: { href: null, target: Ht } },
  bdi: $,
  bdo: $,
  blockquote: { attrs: { cite: null } },
  body: $,
  br: $,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: hs,
      formmethod: os,
      formnovalidate: ["novalidate"],
      formtarget: Ht,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: { attrs: { width: null, height: null } },
  caption: $,
  center: $,
  cite: $,
  code: $,
  col: { attrs: { span: null } },
  colgroup: { attrs: { span: null } },
  command: {
    attrs: {
      type: ["command", "checkbox", "radio"],
      label: null,
      icon: null,
      radiogroup: null,
      command: null,
      title: null,
      disabled: ["disabled"],
      checked: ["checked"]
    }
  },
  data: { attrs: { value: null } },
  datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
  datalist: { attrs: { data: null } },
  dd: $,
  del: { attrs: { cite: null, datetime: null } },
  details: { attrs: { open: ["open"] } },
  dfn: $,
  div: $,
  dl: $,
  dt: $,
  em: $,
  embed: { attrs: { src: null, type: null, width: null, height: null } },
  eventsource: { attrs: { src: null } },
  fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
  figcaption: $,
  figure: $,
  footer: $,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": as,
      autocomplete: ["on", "off"],
      enctype: hs,
      method: os,
      novalidate: ["novalidate"],
      target: Ht
    }
  },
  h1: $,
  h2: $,
  h3: $,
  h4: $,
  h5: $,
  h6: $,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: $,
  hgroup: $,
  hr: $,
  html: {
    attrs: { manifest: null }
  },
  i: $,
  iframe: {
    attrs: {
      src: null,
      srcdoc: null,
      name: null,
      width: null,
      height: null,
      sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
      seamless: ["seamless"]
    }
  },
  img: {
    attrs: {
      alt: null,
      src: null,
      ismap: null,
      usemap: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"]
    }
  },
  input: {
    attrs: {
      alt: null,
      dirname: null,
      form: null,
      formaction: null,
      height: null,
      list: null,
      max: null,
      maxlength: null,
      min: null,
      name: null,
      pattern: null,
      placeholder: null,
      size: null,
      src: null,
      step: null,
      value: null,
      width: null,
      accept: ["audio/*", "video/*", "image/*"],
      autocomplete: ["on", "off"],
      autofocus: ["autofocus"],
      checked: ["checked"],
      disabled: ["disabled"],
      formenctype: hs,
      formmethod: os,
      formnovalidate: ["novalidate"],
      formtarget: Ht,
      multiple: ["multiple"],
      readonly: ["readonly"],
      required: ["required"],
      type: [
        "hidden",
        "text",
        "search",
        "tel",
        "url",
        "email",
        "password",
        "datetime",
        "date",
        "month",
        "week",
        "time",
        "datetime-local",
        "number",
        "range",
        "color",
        "checkbox",
        "radio",
        "file",
        "submit",
        "image",
        "reset",
        "button"
      ]
    }
  },
  ins: { attrs: { cite: null, datetime: null } },
  kbd: $,
  keygen: {
    attrs: {
      challenge: null,
      form: null,
      name: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      keytype: ["RSA"]
    }
  },
  label: { attrs: { for: null, form: null } },
  legend: $,
  li: { attrs: { value: null } },
  link: {
    attrs: {
      href: null,
      type: null,
      hreflang: null,
      media: null,
      sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
    }
  },
  map: { attrs: { name: null } },
  mark: $,
  menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
  meta: {
    attrs: {
      content: null,
      charset: as,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
  nav: $,
  noscript: $,
  object: {
    attrs: {
      data: null,
      type: null,
      name: null,
      usemap: null,
      form: null,
      width: null,
      height: null,
      typemustmatch: ["typemustmatch"]
    }
  },
  ol: {
    attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] },
    children: ["li", "script", "template", "ul", "ol"]
  },
  optgroup: { attrs: { disabled: ["disabled"], label: null } },
  option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
  output: { attrs: { for: null, form: null, name: null } },
  p: $,
  param: { attrs: { name: null, value: null } },
  pre: $,
  progress: { attrs: { value: null, max: null } },
  q: { attrs: { cite: null } },
  rp: $,
  rt: $,
  ruby: $,
  samp: $,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: as
    }
  },
  section: $,
  select: {
    attrs: {
      form: null,
      name: null,
      size: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  slot: { attrs: { name: null } },
  small: $,
  source: { attrs: { src: null, type: null, media: null } },
  span: $,
  strong: $,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: $,
  summary: $,
  sup: $,
  table: $,
  tbody: $,
  td: { attrs: { colspan: null, rowspan: null, headers: null } },
  template: $,
  textarea: {
    attrs: {
      dirname: null,
      form: null,
      maxlength: null,
      name: null,
      placeholder: null,
      rows: null,
      cols: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      readonly: ["readonly"],
      required: ["required"],
      wrap: ["soft", "hard"]
    }
  },
  tfoot: $,
  th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
  thead: $,
  time: { attrs: { datetime: null } },
  title: $,
  tr: $,
  track: {
    attrs: {
      src: null,
      label: null,
      default: null,
      kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
      srclang: null
    }
  },
  ul: { children: ["li", "script", "template", "ul", "ol"] },
  var: $,
  video: {
    attrs: {
      src: null,
      poster: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["auto", "metadata", "none"],
      autoplay: ["autoplay"],
      mediagroup: ["movie"],
      muted: ["muted"],
      controls: ["controls"]
    }
  },
  wbr: $
}, Gh = {
  accesskey: null,
  class: null,
  contenteditable: de,
  contextmenu: null,
  dir: ["ltr", "rtl", "auto"],
  draggable: ["true", "false", "auto"],
  dropzone: ["copy", "move", "link", "string:", "file:"],
  hidden: ["hidden"],
  id: null,
  inert: ["inert"],
  itemid: null,
  itemprop: null,
  itemref: null,
  itemscope: ["itemscope"],
  itemtype: null,
  lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
  spellcheck: de,
  autocorrect: de,
  autocapitalize: de,
  style: null,
  tabindex: null,
  title: null,
  translate: ["yes", "no"],
  rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
  role: /* @__PURE__ */ "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
  "aria-activedescendant": null,
  "aria-atomic": de,
  "aria-autocomplete": ["inline", "list", "both", "none"],
  "aria-busy": de,
  "aria-checked": ["true", "false", "mixed", "undefined"],
  "aria-controls": null,
  "aria-describedby": null,
  "aria-disabled": de,
  "aria-dropeffect": null,
  "aria-expanded": ["true", "false", "undefined"],
  "aria-flowto": null,
  "aria-grabbed": ["true", "false", "undefined"],
  "aria-haspopup": de,
  "aria-hidden": de,
  "aria-invalid": ["true", "false", "grammar", "spelling"],
  "aria-label": null,
  "aria-labelledby": null,
  "aria-level": null,
  "aria-live": ["off", "polite", "assertive"],
  "aria-multiline": de,
  "aria-multiselectable": de,
  "aria-owns": null,
  "aria-posinset": null,
  "aria-pressed": ["true", "false", "mixed", "undefined"],
  "aria-readonly": de,
  "aria-relevant": null,
  "aria-required": de,
  "aria-selected": ["true", "false", "undefined"],
  "aria-setsize": null,
  "aria-sort": ["ascending", "descending", "none", "other"],
  "aria-valuemax": null,
  "aria-valuemin": null,
  "aria-valuenow": null,
  "aria-valuetext": null
}, Nh = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((s) => "on" + s);
for (let s of Nh)
  Gh[s] = null;
class wi {
  constructor(e, t) {
    this.tags = { ...rg, ...e }, this.globalAttrs = { ...Gh, ...t }, this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
}
wi.default = /* @__PURE__ */ new wi();
function qt(s, e, t = s.length) {
  if (!e)
    return "";
  let i = e.firstChild, r = i && i.getChild("TagName");
  return r ? s.sliceString(r.from, Math.min(r.to, t)) : "";
}
function Vt(s, e = !1) {
  for (; s; s = s.parent)
    if (s.name == "Element")
      if (e)
        e = !1;
      else
        return s;
  return null;
}
function Uh(s, e, t) {
  let i = t.tags[qt(s, Vt(e))];
  return (i == null ? void 0 : i.children) || t.allTags;
}
function Rn(s, e) {
  let t = [];
  for (let i = Vt(e); i && !i.type.isTop; i = Vt(i.parent)) {
    let r = qt(s, i);
    if (r && i.lastChild.name == "CloseTag")
      break;
    r && t.indexOf(r) < 0 && (e.name == "EndTag" || e.from >= i.firstChild.to) && t.push(r);
  }
  return t;
}
const Fh = /^[:\-\.\w\u00b7-\uffff]*$/;
function wa(s, e, t, i, r) {
  let n = /\s*>/.test(s.sliceDoc(r, r + 5)) ? "" : ">", l = Vt(t, t.name == "StartTag" || t.name == "TagName");
  return {
    from: i,
    to: r,
    options: Uh(s.doc, l, e).map((a) => ({ label: a, type: "type" })).concat(Rn(s.doc, t).map((a, o) => ({
      label: "/" + a,
      apply: "/" + a + n,
      type: "type",
      boost: 99 - o
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function ya(s, e, t, i) {
  let r = /\s*>/.test(s.sliceDoc(i, i + 5)) ? "" : ">";
  return {
    from: t,
    to: i,
    options: Rn(s.doc, e).map((n, l) => ({ label: n, apply: n + r, type: "type", boost: 99 - l })),
    validFor: Fh
  };
}
function sg(s, e, t, i) {
  let r = [], n = 0;
  for (let l of Uh(s.doc, t, e))
    r.push({ label: "<" + l, type: "type" });
  for (let l of Rn(s.doc, t))
    r.push({ label: "</" + l + ">", type: "type", boost: 99 - n++ });
  return { from: i, to: i, options: r, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
function ng(s, e, t, i, r) {
  let n = Vt(t), l = n ? e.tags[qt(s.doc, n)] : null, a = l && l.attrs ? Object.keys(l.attrs) : [], o = l && l.globalAttrs === !1 ? a : a.length ? a.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: i,
    to: r,
    options: o.map((h) => ({ label: h, type: "property" })),
    validFor: Fh
  };
}
function lg(s, e, t, i, r) {
  var n;
  let l = (n = t.parent) === null || n === void 0 ? void 0 : n.getChild("AttributeName"), a = [], o;
  if (l) {
    let h = s.sliceDoc(l.from, l.to), O = e.globalAttrs[h];
    if (!O) {
      let c = Vt(t), f = c ? e.tags[qt(s.doc, c)] : null;
      O = (f == null ? void 0 : f.attrs) && f.attrs[h];
    }
    if (O) {
      let c = s.sliceDoc(i, r).toLowerCase(), f = '"', u = '"';
      /^['"]/.test(c) ? (o = c[0] == '"' ? /^[^"]*$/ : /^[^']*$/, f = "", u = s.sliceDoc(r, r + 1) == c[0] ? "" : c[0], c = c.slice(1), i++) : o = /^[^\s<>='"]*$/;
      for (let d of O)
        a.push({ label: d, apply: f + d + u, type: "constant" });
    }
  }
  return { from: i, to: r, options: a, validFor: o };
}
function Hh(s, e) {
  let { state: t, pos: i } = e, r = ae(t).resolveInner(i, -1), n = r.resolve(i);
  for (let l = i, a; n == r && (a = r.childBefore(l)); ) {
    let o = a.lastChild;
    if (!o || !o.type.isError || o.from < o.to)
      break;
    n = r = a, l = o.from;
  }
  return r.name == "TagName" ? r.parent && /CloseTag$/.test(r.parent.name) ? ya(t, r, r.from, i) : wa(t, s, r, r.from, i) : r.name == "StartTag" || r.name == "IncompleteTag" ? wa(t, s, r, i, i) : r.name == "StartCloseTag" || r.name == "IncompleteCloseTag" ? ya(t, r, i, i) : r.name == "OpenTag" || r.name == "SelfClosingTag" || r.name == "AttributeName" ? ng(t, s, r, r.name == "AttributeName" ? r.from : i, i) : r.name == "Is" || r.name == "AttributeValue" || r.name == "UnquotedAttributeValue" ? lg(t, s, r, r.name == "Is" ? i : r.from, i) : e.explicit && (n.name == "Element" || n.name == "Text" || n.name == "Document") ? sg(t, s, r, i) : null;
}
function ag(s) {
  return Hh(wi.default, s);
}
function og(s) {
  let { extraTags: e, extraGlobalAttributes: t } = s, i = t || e ? new wi(e, t) : wi.default;
  return (r) => Hh(i, r);
}
const hg = /* @__PURE__ */ Ee.parser.configure({ top: "SingleExpression" }), Kh = [
  {
    tag: "script",
    attrs: (s) => s.type == "text/typescript" || s.lang == "ts",
    parser: Wh.parser
  },
  {
    tag: "script",
    attrs: (s) => s.type == "text/babel" || s.type == "text/jsx",
    parser: jh.parser
  },
  {
    tag: "script",
    attrs: (s) => s.type == "text/typescript-jsx",
    parser: Ih.parser
  },
  {
    tag: "script",
    attrs(s) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(s.type);
    },
    parser: hg
  },
  {
    tag: "script",
    attrs(s) {
      return !s.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(s.type);
    },
    parser: Ee.parser
  },
  {
    tag: "style",
    attrs(s) {
      return (!s.lang || s.lang == "css") && (!s.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(s.type));
    },
    parser: vr.parser
  }
], Jh = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ vr.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ Nh.map((s) => ({ name: s, parser: Ee.parser }))), eO = /* @__PURE__ */ Mt.define({
  name: "html",
  parser: /* @__PURE__ */ zd.configure({
    props: [
      /* @__PURE__ */ Mr.add({
        Element(s) {
          let e = /^(\s*)(<\/)?/.exec(s.textAfter);
          return s.node.to <= s.pos + e[0].length ? s.continue() : s.lineIndent(s.node.from) + (e[2] ? 0 : s.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(s) {
          return s.column(s.node.from) + s.unit;
        },
        Document(s) {
          if (s.pos + /\s*/.exec(s.textAfter)[0].length < s.node.to)
            return s.continue();
          let e = null, t;
          for (let i = s.node; ; ) {
            let r = i.lastChild;
            if (!r || r.name != "Element" || r.to != i.to)
              break;
            e = i = r;
          }
          return e && !((t = e.lastChild) && (t.name == "CloseTag" || t.name == "SelfClosingTag")) ? s.lineIndent(e.from) + s.unit : null;
        }
      }),
      /* @__PURE__ */ Zi.add({
        Element(s) {
          let e = s.firstChild, t = s.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : s.to };
        }
      }),
      /* @__PURE__ */ Uf.add({
        "OpenTag CloseTag": (s) => s.getChild("TagName")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-_"
  }
}), nr = /* @__PURE__ */ eO.configure({
  wrap: /* @__PURE__ */ Xh(Kh, Jh)
});
function Og(s = {}) {
  let e = "", t;
  s.matchClosingTags === !1 && (e = "noMatch"), s.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (s.nestedLanguages && s.nestedLanguages.length || s.nestedAttributes && s.nestedAttributes.length) && (t = Xh((s.nestedLanguages || []).concat(Kh), (s.nestedAttributes || []).concat(Jh)));
  let i = t ? eO.configure({ wrap: t, dialect: e }) : e ? nr.configure({ dialect: e }) : nr;
  return new Qi(i, [
    nr.data.of({ autocomplete: og(s) }),
    s.autoCloseTags !== !1 ? cg : [],
    Jp().support,
    gp().support
  ]);
}
const $a = /* @__PURE__ */ new Set(/* @__PURE__ */ "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), cg = /* @__PURE__ */ C.inputHandler.of((s, e, t, i, r) => {
  if (s.composing || s.state.readOnly || e != t || i != ">" && i != "/" || !nr.isActiveAt(s.state, e, -1))
    return !1;
  let n = r(), { state: l } = n, a = l.changeByRange((o) => {
    var h, O, c;
    let f = l.doc.sliceString(o.from - 1, o.to) == i, { head: u } = o, d = ae(l).resolveInner(u, -1), p;
    if (f && i == ">" && d.name == "EndTag") {
      let m = d.parent;
      if (((O = (h = m.parent) === null || h === void 0 ? void 0 : h.lastChild) === null || O === void 0 ? void 0 : O.name) != "CloseTag" && (p = qt(l.doc, m.parent, u)) && !$a.has(p)) {
        let Q = u + (l.doc.sliceString(u, u + 1) === ">" ? 1 : 0), k = `</${p}>`;
        return { range: o, changes: { from: u, to: Q, insert: k } };
      }
    } else if (f && i == "/" && d.name == "IncompleteCloseTag") {
      let m = d.parent;
      if (d.from == u - 2 && ((c = m.lastChild) === null || c === void 0 ? void 0 : c.name) != "CloseTag" && (p = qt(l.doc, m, u)) && !$a.has(p)) {
        let Q = u + (l.doc.sliceString(u, u + 1) === ">" ? 1 : 0), k = `${p}>`;
        return {
          range: x.cursor(u + k.length, -1),
          changes: { from: u, to: Q, insert: k }
        };
      }
    }
    return { range: o };
  });
  return a.changes.empty ? !1 : (s.dispatch([
    n,
    l.update(a, {
      userEvent: "input.complete",
      scrollIntoView: !0
    })
  ]), !0);
}), tO = /* @__PURE__ */ bn({ commentTokens: { block: { open: "<!--", close: "-->" } } }), iO = /* @__PURE__ */ new R(), rO = /* @__PURE__ */ Tu.configure({
  props: [
    /* @__PURE__ */ Zi.add((s) => !s.is("Block") || s.is("Document") || en(s) != null || fg(s) ? void 0 : (e, t) => ({ from: t.doc.lineAt(e.from).to, to: e.to })),
    /* @__PURE__ */ iO.add(en),
    /* @__PURE__ */ Mr.add({
      Document: () => null
    }),
    /* @__PURE__ */ kt.add({
      Document: tO
    })
  ]
});
function en(s) {
  let e = /^(?:ATX|Setext)Heading(\d)$/.exec(s.name);
  return e ? +e[1] : void 0;
}
function fg(s) {
  return s.name == "OrderedList" || s.name == "BulletList";
}
function ug(s, e) {
  let t = s;
  for (; ; ) {
    let i = t.nextSibling, r;
    if (!i || (r = en(i.type)) != null && r <= e)
      break;
    t = i;
  }
  return t.to;
}
const dg = /* @__PURE__ */ Nf.of((s, e, t) => {
  for (let i = ae(s).resolveInner(t, -1); i && !(i.from < e); i = i.parent) {
    let r = i.type.prop(iO);
    if (r == null)
      continue;
    let n = ug(i, r);
    if (n > t)
      return { from: t, to: n };
  }
  return null;
});
function zn(s) {
  return new Te(tO, s, [], "markdown");
}
const pg = /* @__PURE__ */ zn(rO), gg = /* @__PURE__ */ rO.configure([Eu, Vu, qu, Wu, {
  props: [
    /* @__PURE__ */ Zi.add({
      Table: (s, e) => ({ from: e.doc.lineAt(s.from).to, to: s.to })
    })
  ]
}]), Tr = /* @__PURE__ */ zn(gg);
function mg(s, e) {
  return (t) => {
    if (t && s) {
      let i = null;
      if (t = /\S*/.exec(t)[0], typeof s == "function" ? i = s(t) : i = br.matchLanguageName(s, t, !0), i instanceof br)
        return i.support ? i.support.language.parser : mi.getSkippingParser(i.load());
      if (i)
        return i.parser;
    }
    return e ? e.parser : null;
  };
}
class Os {
  constructor(e, t, i, r, n, l, a) {
    this.node = e, this.from = t, this.to = i, this.spaceBefore = r, this.spaceAfter = n, this.type = l, this.item = a;
  }
  blank(e, t = !0) {
    let i = this.spaceBefore + (this.node.name == "Blockquote" ? ">" : "");
    if (e != null) {
      for (; i.length < e; )
        i += " ";
      return i;
    } else {
      for (let r = this.to - this.from - i.length - this.spaceAfter.length; r > 0; r--)
        i += " ";
      return i + (t ? this.spaceAfter : "");
    }
  }
  marker(e, t) {
    let i = this.node.name == "OrderedList" ? String(+nO(this.item, e)[2] + t) : "";
    return this.spaceBefore + i + this.type + this.spaceAfter;
  }
}
function sO(s, e) {
  let t = [], i = [];
  for (let r = s; r; r = r.parent) {
    if (r.name == "FencedCode")
      return i;
    (r.name == "ListItem" || r.name == "Blockquote") && t.push(r);
  }
  for (let r = t.length - 1; r >= 0; r--) {
    let n = t[r], l, a = e.lineAt(n.from), o = n.from - a.from;
    if (n.name == "Blockquote" && (l = /^ *>( ?)/.exec(a.text.slice(o))))
      i.push(new Os(n, o, o + l[0].length, "", l[1], ">", null));
    else if (n.name == "ListItem" && n.parent.name == "OrderedList" && (l = /^( *)\d+([.)])( *)/.exec(a.text.slice(o)))) {
      let h = l[3], O = l[0].length;
      h.length >= 4 && (h = h.slice(0, h.length - 4), O -= 4), i.push(new Os(n.parent, o, o + O, l[1], h, l[2], n));
    } else if (n.name == "ListItem" && n.parent.name == "BulletList" && (l = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(a.text.slice(o)))) {
      let h = l[4], O = l[0].length;
      h.length > 4 && (h = h.slice(0, h.length - 4), O -= 4);
      let c = l[2];
      l[3] && (c += l[3].replace(/[xX]/, " ")), i.push(new Os(n.parent, o, o + O, l[1], h, c, n));
    }
  }
  return i;
}
function nO(s, e) {
  return /^(\s*)(\d+)(?=[.)])/.exec(e.sliceString(s.from, s.from + 10));
}
function cs(s, e, t, i = 0) {
  for (let r = -1, n = s; ; ) {
    if (n.name == "ListItem") {
      let a = nO(n, e), o = +a[2];
      if (r >= 0) {
        if (o != r + 1)
          return;
        t.push({ from: n.from + a[1].length, to: n.from + a[0].length, insert: String(r + 2 + i) });
      }
      r = o;
    }
    let l = n.nextSibling;
    if (!l)
      break;
    n = l;
  }
}
function Mn(s, e) {
  let t = /^[ \t]*/.exec(s)[0].length;
  if (!t || e.facet(Go) != "	")
    return s;
  let i = Oi(s, 4, t), r = "";
  for (let n = i; n > 0; )
    n >= 4 ? (r += "	", n -= 4) : (r += " ", n--);
  return r + s.slice(t);
}
const Qg = (s = {}) => ({ state: e, dispatch: t }) => {
  let i = ae(e), { doc: r } = e, n = null, l = e.changeByRange((a) => {
    if (!a.empty || !Tr.isActiveAt(e, a.from, -1) && !Tr.isActiveAt(e, a.from, 1))
      return n = { range: a };
    let o = a.from, h = r.lineAt(o), O = sO(i.resolveInner(o, -1), r);
    for (; O.length && O[O.length - 1].from > o - h.from; )
      O.pop();
    if (!O.length)
      return n = { range: a };
    let c = O[O.length - 1];
    if (c.to - c.spaceAfter.length > o - h.from)
      return n = { range: a };
    let f = o >= c.to - c.spaceAfter.length && !/\S/.test(h.text.slice(c.to));
    if (c.item && f) {
      let Q = c.node.firstChild, k = c.node.getChild("ListItem", "ListItem");
      if (Q.to >= o || k && k.to < o || h.from > 0 && !/[^\s>]/.test(r.lineAt(h.from - 1).text) || s.nonTightLists === !1) {
        let w = O.length > 1 ? O[O.length - 2] : null, A, v = "";
        w && w.item ? (A = h.from + w.from, v = w.marker(r, 1)) : A = h.from + (w ? w.to : 0);
        let T = [{ from: A, to: o, insert: v }];
        return c.node.name == "OrderedList" && cs(c.item, r, T, -2), w && w.node.name == "OrderedList" && cs(w.item, r, T), { range: x.cursor(A + v.length), changes: T };
      } else {
        let w = va(O, e, h);
        return {
          range: x.cursor(o + w.length + 1),
          changes: { from: h.from, insert: w + e.lineBreak }
        };
      }
    }
    if (c.node.name == "Blockquote" && f && h.from) {
      let Q = r.lineAt(h.from - 1), k = />\s*$/.exec(Q.text);
      if (k && k.index == c.from) {
        let w = e.changes([
          { from: Q.from + k.index, to: Q.to },
          { from: h.from + c.from, to: h.to }
        ]);
        return { range: a.map(w), changes: w };
      }
    }
    let u = [];
    c.node.name == "OrderedList" && cs(c.item, r, u);
    let d = c.item && c.item.from < h.from, p = "";
    if (!d || /^[\s\d.)\-+*>]*/.exec(h.text)[0].length >= c.to)
      for (let Q = 0, k = O.length - 1; Q <= k; Q++)
        p += Q == k && !d ? O[Q].marker(r, 1) : O[Q].blank(Q < k ? Oi(h.text, 4, O[Q + 1].from) - p.length : null);
    let m = o;
    for (; m > h.from && /\s/.test(h.text.charAt(m - h.from - 1)); )
      m--;
    return p = Mn(p, e), bg(c.node, e.doc) && (p = va(O, e, h) + e.lineBreak + p), u.push({ from: m, to: o, insert: e.lineBreak + p }), { range: x.cursor(m + p.length + 1), changes: u };
  });
  return n ? !1 : (t(e.update(l, { scrollIntoView: !0, userEvent: "input" })), !0);
}, Sg = /* @__PURE__ */ Qg();
function Pa(s) {
  return s.name == "QuoteMark" || s.name == "ListMark";
}
function bg(s, e) {
  if (s.name != "OrderedList" && s.name != "BulletList")
    return !1;
  let t = s.firstChild, i = s.getChild("ListItem", "ListItem");
  if (!i)
    return !1;
  let r = e.lineAt(t.to), n = e.lineAt(i.from), l = /^[\s>]*$/.test(r.text);
  return r.number + (l ? 0 : 1) < n.number;
}
function va(s, e, t) {
  let i = "";
  for (let r = 0, n = s.length - 2; r <= n; r++)
    i += s[r].blank(r < n ? Oi(t.text, 4, s[r + 1].from) - i.length : null, r < n);
  return Mn(i, e);
}
function kg(s, e) {
  let t = s.resolveInner(e, -1), i = e;
  Pa(t) && (i = t.from, t = t.parent);
  for (let r; r = t.childBefore(i); )
    if (Pa(r))
      i = r.from;
    else if (r.name == "OrderedList" || r.name == "BulletList")
      t = r.lastChild, i = t.to;
    else
      break;
  return t;
}
const xg = ({ state: s, dispatch: e }) => {
  let t = ae(s), i = null, r = s.changeByRange((n) => {
    let l = n.from, { doc: a } = s;
    if (n.empty && Tr.isActiveAt(s, n.from)) {
      let o = a.lineAt(l), h = sO(kg(t, l), a);
      if (h.length) {
        let O = h[h.length - 1], c = O.to - O.spaceAfter.length + (O.spaceAfter ? 1 : 0);
        if (l - o.from > c && !/\S/.test(o.text.slice(c, l - o.from)))
          return {
            range: x.cursor(o.from + c),
            changes: { from: o.from + c, to: l }
          };
        if (l - o.from == c && // Only apply this if we're on the line that has the
        // construct's syntax, or there's only indentation in the
        // target range
        (!O.item || o.from <= O.item.from || !/\S/.test(o.text.slice(0, O.to)))) {
          let f = o.from + O.from;
          if (O.item && O.node.from < O.item.from && /\S/.test(o.text.slice(O.from, O.to))) {
            let u = O.blank(Oi(o.text, 4, O.to) - Oi(o.text, 4, O.from));
            return f == o.from && (u = Mn(u, s)), {
              range: x.cursor(f + u.length),
              changes: { from: f, to: o.from + O.to, insert: u }
            };
          }
          if (f < l)
            return { range: x.cursor(f), changes: { from: f, to: l } };
        }
      }
    }
    return i = { range: n };
  });
  return i ? !1 : (e(s.update(r, { scrollIntoView: !0, userEvent: "delete" })), !0);
}, wg = [
  { key: "Enter", run: Sg },
  { key: "Backspace", run: xg }
], lO = /* @__PURE__ */ Og({ matchClosingTags: !1 });
function yg(s = {}) {
  let { codeLanguages: e, defaultCodeLanguage: t, addKeymap: i = !0, base: { parser: r } = pg, completeHTMLTags: n = !0, pasteURLAsLink: l = !0, htmlTagLanguage: a = lO } = s;
  if (!(r instanceof Yr))
    throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
  let o = s.extensions ? [s.extensions] : [], h = [a.support, dg], O;
  l && h.push(Tg), t instanceof Qi ? (h.push(t.support), O = t.language) : t && (O = t);
  let c = e || O ? mg(e, O) : void 0;
  o.push(Xu({ codeParser: c, htmlParser: a.language.parser })), i && h.push(Zr.high(pn.of(wg)));
  let f = zn(r.configure(o));
  return n && h.push(f.data.of({ autocomplete: $g })), new Qi(f, h);
}
function $g(s) {
  let { state: e, pos: t } = s, i = /<[:\-\.\w\u00b7-\uffff]*$/.exec(e.sliceDoc(t - 25, t));
  if (!i)
    return null;
  let r = ae(e).resolveInner(t, -1);
  for (; r && !r.type.isTop; ) {
    if (r.name == "CodeBlock" || r.name == "FencedCode" || r.name == "ProcessingInstructionBlock" || r.name == "CommentBlock" || r.name == "Link" || r.name == "Image")
      return null;
    r = r.parent;
  }
  return {
    from: t - i[0].length,
    to: t,
    options: Pg(),
    validFor: /^<[:\-\.\w\u00b7-\uffff]*$/
  };
}
let fs = null;
function Pg() {
  if (fs)
    return fs;
  let s = ag(new Jf(L.create({ extensions: lO }), 0, !0));
  return fs = s ? s.options : [];
}
const vg = /code|horizontalrule|html|link|comment|processing|escape|entity|image|mark|url/i, Tg = /* @__PURE__ */ C.domEventHandlers({
  paste: (s, e) => {
    var t;
    let { main: i } = e.state.selection;
    if (i.empty)
      return !1;
    let r = (t = s.clipboardData) === null || t === void 0 ? void 0 : t.getData("text/plain");
    if (!r || !/^(https?:\/\/|mailto:|xmpp:|www\.)/.test(r) || (/^www\./.test(r) && (r = "https://" + r), !Tr.isActiveAt(e.state, i.from, 1)))
      return !1;
    let n = ae(e.state), l = !1;
    return n.iterate({
      from: i.from,
      to: i.to,
      enter: (a) => {
        (a.from > i.from || vg.test(a.name)) && (l = !0);
      },
      leave: (a) => {
        a.to < i.to && (l = !0);
      }
    }), l ? !1 : (e.dispatch({
      changes: [{ from: i.from, insert: "[" }, { from: i.to, insert: `](${r})` }],
      userEvent: "input.paste",
      scrollIntoView: !0
    }), !0);
  }
});
function Zg(s, e, t) {
  if (!t)
    return !1;
  const i = s.doc.lineAt(s.selection.main.head).number, r = s.doc.lineAt(e).number;
  return i === r;
}
const Xg = mt.fromClass(class {
  constructor(s) {
    this.isFocused = s.hasFocus, this.decorations = this.buildDecorations(s);
  }
  update(s) {
    s.focusChanged && (this.isFocused = s.view.hasFocus), (s.docChanged || s.selectionSet || s.viewportChanged || s.focusChanged) && (this.decorations = this.buildDecorations(s.view));
  }
  buildDecorations(s) {
    const e = [], { state: t } = s;
    for (let { from: i, to: r } of s.visibleRanges)
      ae(t).iterate({
        from: i,
        to: r,
        enter: (n) => {
          const { from: l, to: a, type: o } = n;
          if (!Zg(t, l, this.isFocused)) {
            if (o.name === "HeaderMark" && e.push(
              E.mark({ class: "cm-hide-token" }).range(l, a)
            ), o.name === "EmphasisMark" && e.push(
              E.mark({ class: "cm-hide-token" }).range(l, a)
            ), o.name === "CodeMark" && e.push(
              E.mark({ class: "cm-hide-token" }).range(l, a)
            ), (o.name === "LinkMark" || o.name === "URL") && e.push(
              E.mark({ class: "cm-hide-token" }).range(l, a)
            ), o.name.match(/^ATXHeading\d/)) {
              const h = o.name.replace("ATXHeading", "");
              e.push(
                E.mark({ class: `cm-heading cm-heading${h}` }).range(l, a)
              );
            }
            o.name === "StrongEmphasis" && e.push(
              E.mark({ class: "cm-strong" }).range(l, a)
            ), o.name === "Emphasis" && e.push(
              E.mark({ class: "cm-em" }).range(l, a)
            ), o.name === "InlineCode" && e.push(
              E.mark({ class: "cm-inline-code" }).range(l, a)
            ), o.name === "Link" && e.push(
              E.mark({ class: "cm-link" }).range(l, a)
            );
          }
        }
      });
    return E.set(e, !0);
  }
}, {
  decorations: (s) => s.decorations
}), Cg = C.theme({
  "&": {
    fontSize: "16px",
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
  },
  ".cm-content": {
    padding: "1rem",
    minHeight: "384px",
    fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif"
  },
  ".cm-line": {
    fontFamily: "inherit"
  },
  // Hide markdown tokens
  ".cm-hide-token": {
    display: "none"
  },
  // Heading styles
  ".cm-heading": {
    fontWeight: "700",
    lineHeight: "1.2"
  },
  ".cm-heading1": {
    fontSize: "2em",
    color: "#1f2937"
  },
  ".cm-heading2": {
    fontSize: "1.5em",
    color: "#374151"
  },
  ".cm-heading3": {
    fontSize: "1.25em",
    color: "#4b5563"
  },
  ".cm-heading4": {
    fontSize: "1.125em",
    color: "#4b5563"
  },
  ".cm-heading5": {
    fontSize: "1em",
    color: "#6b7280",
    fontWeight: "600"
  },
  ".cm-heading6": {
    fontSize: "0.875em",
    color: "#6b7280",
    fontWeight: "600"
  },
  // Bold and italic
  ".cm-strong": {
    fontWeight: "700"
  },
  ".cm-em": {
    fontStyle: "italic"
  },
  // Inline code
  ".cm-inline-code": {
    backgroundColor: "#f3f4f6",
    padding: "0.125rem 0.25rem",
    borderRadius: "0.25rem",
    fontFamily: "ui-monospace, monospace",
    fontSize: "0.875em",
    color: "#1f2937"
  },
  // Links
  ".cm-link": {
    color: "#2563eb",
    textDecoration: "underline",
    cursor: "pointer"
  }
});
class Ag {
  constructor(e) {
    this.textarea = e, this.editor = null, this.textarea.style.display = "none", this.editorContainer = document.createElement("div"), this.editorContainer.className = "codemirror6-editor-container", this.textarea.parentNode.insertBefore(this.editorContainer, this.textarea), this.initializeEditor();
  }
  initializeEditor() {
    const e = L.create({
      doc: this.textarea.value,
      extensions: [
        yg(),
        Xg,
        Cg,
        C.lineWrapping,
        // Update handler to sync with textarea
        C.updateListener.of((t) => {
          t.docChanged && (this.textarea.value = t.state.doc.toString());
        })
      ]
    });
    this.editor = new C({
      state: e,
      parent: this.editorContainer
    });
  }
  destroy() {
    this.editor && this.editor.destroy();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const s = document.querySelector('textarea[name="content"]');
  if (s) {
    window.markdownEditor = new Ag(s);
    const e = s.closest("form");
    e && e.addEventListener("submit", () => {
      s.value = window.markdownEditor.editor.state.doc.toString();
    });
  }
});
