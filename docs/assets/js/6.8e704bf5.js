(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{456:function(t,n,r){},534:function(t,n){var r=/^\[object .+?Constructor\]$/,e="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,a=e||o||Function("return this")();function i(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function u(t,n){return!!(t?t.length:0)&&function(t,n,r){if(n!=n)return function(t,n,r,e){var o=t.length,a=r+(e?1:-1);for(;e?a--:++a<o;)if(n(t[a],a,t))return a;return-1}(t,l,r);var e=r-1,o=t.length;for(;++e<o;)if(t[e]===n)return e;return-1}(t,n,0)>-1}function c(t,n,r){for(var e=-1,o=t?t.length:0;++e<o;)if(r(n,t[e]))return!0;return!1}function s(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t}function l(t){return t!=t}function f(t,n){return t.has(n)}function _(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r}var h,p=Array.prototype,v=Function.prototype,d=Object.prototype,g=a["__core-js_shared__"],y=(h=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"",b=v.toString,m=d.hasOwnProperty,w=d.toString,j=RegExp("^"+b.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=a.Symbol,O=d.propertyIsEnumerable,$=p.splice,S=C?C.isConcatSpreadable:void 0,k=Math.max,A=G(a,"Map"),E=G(a,"Set"),x=G(Object,"create");function T(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function M(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function P(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function F(t){var n=-1,r=t?t.length:0;for(this.__data__=new P;++n<r;)this.add(t[n])}function I(t,n){for(var r,e,o=t.length;o--;)if((r=t[o][0])===(e=n)||r!=r&&e!=e)return o;return-1}function J(t){return!(!Q(t)||(n=t,y&&y in n))&&(L(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?j:r).test(function(t){if(null!=t){try{return b.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var n}T.prototype.clear=function(){this.__data__=x?x(null):{}},T.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},T.prototype.get=function(t){var n=this.__data__;if(x){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return m.call(n,t)?n[t]:void 0},T.prototype.has=function(t){var n=this.__data__;return x?void 0!==n[t]:m.call(n,t)},T.prototype.set=function(t,n){return this.__data__[t]=x&&void 0===n?"__lodash_hash_undefined__":n,this},M.prototype.clear=function(){this.__data__=[]},M.prototype.delete=function(t){var n=this.__data__,r=I(n,t);return!(r<0)&&(r==n.length-1?n.pop():$.call(n,r,1),!0)},M.prototype.get=function(t){var n=this.__data__,r=I(n,t);return r<0?void 0:n[r][1]},M.prototype.has=function(t){return I(this.__data__,t)>-1},M.prototype.set=function(t,n){var r=this.__data__,e=I(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},P.prototype.clear=function(){this.__data__={hash:new T,map:new(A||M),string:new T}},P.prototype.delete=function(t){return z(this,t).delete(t)},P.prototype.get=function(t){return z(this,t).get(t)},P.prototype.has=function(t){return z(this,t).has(t)},P.prototype.set=function(t,n){return z(this,t).set(t,n),this},F.prototype.add=F.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},F.prototype.has=function(t){return this.__data__.has(t)};var R=E&&1/_(new E([,-0]))[1]==1/0?function(t){return new E(t)}:function(){};function z(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function G(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return J(r)?r:void 0}function N(t){return D(t)||function(t){return K(t)&&m.call(t,"callee")&&(!O.call(t,"callee")||"[object Arguments]"==w.call(t))}(t)||!!(S&&t&&t[S])}var V,q,B=(V=function(t){return function(t,n,r){var e=-1,o=u,a=t.length,i=!0,s=[],l=s;if(r)i=!1,o=c;else if(a>=200){var h=n?null:R(t);if(h)return _(h);i=!1,o=f,l=new F}else l=n?[]:s;t:for(;++e<a;){var p=t[e],v=n?n(p):p;if(p=r||0!==p?p:0,i&&v==v){for(var d=l.length;d--;)if(l[d]===v)continue t;n&&l.push(v),s.push(p)}else o(l,v,r)||(l!==s&&l.push(v),s.push(p))}return s}(function t(n,r,e,o,a){var i=-1,u=n.length;for(e||(e=N),a||(a=[]);++i<u;){var c=n[i];r>0&&e(c)?r>1?t(c,r-1,e,o,a):s(a,c):o||(a[a.length]=c)}return a}(t,1,K,!0))},q=k(void 0===q?V.length-1:q,0),function(){for(var t=arguments,n=-1,r=k(t.length-q,0),e=Array(r);++n<r;)e[n]=t[q+n];n=-1;for(var o=Array(q+1);++n<q;)o[n]=t[n];return o[q]=e,i(V,this,o)});var D=Array.isArray;function H(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!L(t)}function K(t){return function(t){return!!t&&"object"==typeof t}(t)&&H(t)}function L(t){var n=Q(t)?w.call(t):"";return"[object Function]"==n||"[object GeneratorFunction]"==n}function Q(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}t.exports=B},535:function(t,n,r){"use strict";var e=r(456);r.n(e).a},551:function(t,n,r){"use strict";r.r(n);r(37),r(59),r(8),r(84),r(38);var e=r(534),o=r.n(e),a={data:function(){return{mycolor:"#"+(16777215*Math.random()<<0).toString(16)}},mounted:function(){},methods:{newColor:function(){this.mycolor="#"+(16777215*Math.random()<<0).toString(16)}},computed:{allPageCount:function(){return this.$site.pages.length},allTags:function(){var t=[];return this.$site.pages.forEach((function(n){"tags"in n.frontmatter&&(console.log(n.frontmatter.tags),t=o()(t,n.frontmatter.tags))})),t},allTagsCount:function(){return this.allTags.length}}},i=(r(535),r(7)),u=Object(i.a)(a,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("section",[r("button",{on:{click:t.newColor}},[t._v("New Color")]),t._v(" "),r("ul",{staticClass:"flex-container"},t._l(t.allTags,(function(n){return r("li",{key:n,style:{background:t.mycolor}},[t._v("\n      "+t._s(n)+"\n    ")])})),0),t._v(" "),r("h3",[t._v("website statistics")]),t._v(" "),r("table",{staticClass:"center"},[t._m(0),t._v(" "),r("tr",[r("td",[t._v("total #pages on site")]),t._v(" "),r("td",[t._v(t._s(t.allPageCount))])]),t._v(" "),r("tr",[r("td",[t._v("total #tags on site")]),t._v(" "),r("td",[t._v(t._s(t.allTagsCount))])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("th",[this._v("Metrics")]),this._v(" "),n("th",[this._v("Value")])])}],!1,null,"68e102dc",null);n.default=u.exports}}]);