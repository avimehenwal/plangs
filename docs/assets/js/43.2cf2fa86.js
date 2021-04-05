(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{603:function(t,s,n){"use strict";n.r(s);var a=n(7),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"clojure-syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clojure-syntax"}},[t._v("#")]),t._v(" Clojure Syntax")]),t._v(" "),n("TagLinks"),t._v(" "),n("blockquote",[n("p",[t._v("What is "),n("code",[t._v("::")]),t._v(" notation in clojure?")])]),t._v(" "),n("p",[t._v("Shorthand to use current namespace. "),n("code",[t._v(":app.client/person")]),t._v(" --\x3e "),n("code",[t._v("::person")]),t._v(" Localized name")]),t._v(" "),n("blockquote",[n("p",[t._v("How to define/declare global variables with in namespaces?")])]),t._v(" "),n("p",[n("code",[t._v("def")]),t._v(" block is like Assignment operator "),n("code",[t._v("=")]),t._v(" in other languages")]),t._v(" "),n("blockquote",[n("p",[t._v("What is the difference b/w "),n("code",[t._v("let")]),t._v(" and "),n("code",[t._v("def")]),t._v("?")])]),t._v(" "),n("p",[t._v("The syntax for them is different, even if the meanings are related.")]),t._v(" "),n("p",[n("code",[t._v("let")]),t._v(" takes a "),n("strong",[t._v("list of bindings")]),t._v(' (name value pairs) followed by expressions to evaluate in the context of those binding. let binds symbols to values in a "lexical scope"')]),t._v(" "),n("p",[n("code",[t._v("def")]),t._v(" just takes one binding, not a list, and adds it to the global context.")]),t._v(" "),n("blockquote",[n("p",[t._v("How to use docs on REPL?")])]),t._v(" "),n("div",{staticClass:"language-lisp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-lisp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" '"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.repl "),n("span",{pre:!0,attrs:{class:"token lisp-property property"}},[t._v(":refer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token lisp-property property"}},[t._v(":all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("doc")]),t._v(", "),n("code",[t._v("find-doc")]),t._v(", "),n("code",[t._v("apropos")]),t._v(", "),n("code",[t._v("source")]),t._v(", and "),n("code",[t._v("dir")])]),t._v(" "),n("blockquote",[n("p",[t._v("What is underscore in reframe?")])]),t._v(" "),n("p",[t._v("The underscore is the universal ignore symbol. Its a valid symbol indentifier")]),t._v(" "),n("div",{staticClass:"language-lisp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-lisp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_ 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token car"}},[t._v("println")]),t._v(" _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("How to add dependency? to manipulate DOM via google closure library?")])]),t._v(" "),n("code-group",[n("code-block",{attrs:{title:"Google Closure Library"}},[n("div",{staticClass:"language-clojure extra-class"},[n("pre",{pre:!0,attrs:{class:"language-clojure"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" so-doc.events\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("goog.dom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" dom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("goog.events "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" handle-click "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v(";an event object is passed to all events")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("js/alert "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button pressed"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events/listen\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom/getElement "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; This is the dom element the event comes from")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".-CLICK events/EventType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; This is a string or array of strings with the event names.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v(";;All event names can be found in the EventType enum")]),t._v("\nhandle-click "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v(";function that should handle the event")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])]),t._v(" "),n("code-block",{attrs:{title:"js Interop"}},[n("div",{staticClass:"language-clojure extra-class"},[n("pre",{pre:!0,attrs:{class:"language-clojure"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" so-doc.events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enable-console-print!"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" click-event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Button clicked"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" load-event "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Page loaded!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".addEventListener "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".getElementById js/document "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),t._v(" click-event "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".addEventListener js/window "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),t._v(" load-event "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);s.default=e.exports}}]);