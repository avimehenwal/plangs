(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{619:function(t,s,e){"use strict";e.r(s);var a=e(7),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"clojure-syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clojure-syntax"}},[t._v("#")]),t._v(" Clojure Syntax")]),t._v(" "),e("TagLinks"),t._v(" "),e("blockquote",[e("p",[t._v("What is "),e("code",[t._v("::")]),t._v(" notation in clojure?")])]),t._v(" "),e("p",[t._v("Shorthand to use current namespace. "),e("code",[t._v(":app.client/person")]),t._v(" --\x3e "),e("code",[t._v("::person")]),t._v(" Localized name")]),t._v(" "),e("blockquote",[e("p",[t._v("How to define/declare global variables with in namespaces?")])]),t._v(" "),e("p",[e("code",[t._v("def")]),t._v(" block is like Assignment operator "),e("code",[t._v("=")]),t._v(" in other languages")]),t._v(" "),e("blockquote",[e("p",[t._v("What is the difference b/w "),e("code",[t._v("let")]),t._v(" and "),e("code",[t._v("def")]),t._v("?")])]),t._v(" "),e("p",[t._v("The syntax for them is different, even if the meanings are related.")]),t._v(" "),e("p",[e("code",[t._v("let")]),t._v(" takes a "),e("strong",[t._v("list of bindings")]),t._v(' (name value pairs) followed by expressions to evaluate in the context of those binding. let binds symbols to values in a "lexical scope"')]),t._v(" "),e("p",[e("code",[t._v("def")]),t._v(" just takes one binding, not a list, and adds it to the global context.")]),t._v(" "),e("blockquote",[e("p",[t._v("How to use docs on REPL?")])]),t._v(" "),e("div",{staticClass:"language-lisp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-lisp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.repl "),e("span",{pre:!0,attrs:{class:"token lisp-property property"}},[t._v(":refer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token lisp-property property"}},[t._v(":all")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("code",[t._v("doc")]),t._v(", "),e("code",[t._v("find-doc")]),t._v(", "),e("code",[t._v("apropos")]),t._v(", "),e("code",[t._v("source")]),t._v(", and "),e("code",[t._v("dir")])]),t._v(" "),e("blockquote",[e("p",[t._v("What is underscore in reframe?")])]),t._v(" "),e("p",[t._v("The underscore is the universal ignore symbol. Its a valid symbol indentifier")]),t._v(" "),e("div",{staticClass:"language-lisp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-lisp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_ 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token car"}},[t._v("println")]),t._v(" _"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("How to add dependency? to manipulate DOM via google closure library?")])]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"Google Closure Library"}},[e("div",{staticClass:"language-clojure extra-class"},[e("pre",{pre:!0,attrs:{class:"language-clojure"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" so-doc.events\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("goog.dom "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" dom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("goog.events "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" handle-click "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v(";an event object is passed to all events")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("js/alert "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button pressed"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events/listen\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom/getElement "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; This is the dom element the event comes from")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".-CLICK events/EventType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; This is a string or array of strings with the event names.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v(";;All event names can be found in the EventType enum")]),t._v("\nhandle-click "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v(";function that should handle the event")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"js Interop"}},[e("div",{staticClass:"language-clojure extra-class"},[e("pre",{pre:!0,attrs:{class:"language-clojure"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" so-doc.events"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enable-console-print!"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" click-event "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Button clicked"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" load-event "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Page loaded!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".addEventListener "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".getElementById js/document "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),t._v(" click-event "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".addEventListener js/window "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),t._v(" load-event "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),e("blockquote",[e("p",[t._v("What is the difference between "),e("code",[t._v(":refer")]),t._v(" and "),e("code",[t._v(":as")]),t._v(" in cljs declerations?")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://stuartsierra.com/2016/clojure-how-to-ns.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to namespce in clojure?"),e("OutboundLink")],1)]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("keyword")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v(":as")])]),t._v(" "),e("td",[t._v("as an namespace Alias")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v(":refer")])]),t._v(" "),e("td",[t._v("makes it look like a local function")])])])]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"AS"}},[e("div",{staticClass:"language-clojure extra-class"},[e("pre",{pre:!0,attrs:{class:"language-clojure"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" demo.core\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.string "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"there"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])]),t._v(" "),e("code-block",{attrs:{title:"REFER"}},[e("div",{staticClass:"language-clojure extra-class"},[e("pre",{pre:!0,attrs:{class:"language-clojure"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" demo.core\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.string "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":refer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"there"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),e("blockquote",[e("p",[t._v("What are these clojure keywords?")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("macros")]),t._v(" "),e("th",[t._v("what does it do?")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v(":require")])]),t._v(" "),e("td",[t._v("loads a library, function, external code")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v(":namespaces")])]),t._v(" "),e("td",[t._v("mappings from symbols to vars, are first-class and dynamic. Can query ns "),e("code",[t._v("all-ns")]),t._v(". aka "),e("strong",[t._v("Modules")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://8thlight.com/blog/aaron-lahey/2016/07/20/relationship-between-clojure-functions-symbols-vars-namespaces.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SYmbols"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("Symbols in Clojure are just pieces of data, Clojure uses them as identifiers for various values and references. aka "),e("strong",[t._v("Identifiers")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("(defn ^:export init [] (...))")])]),t._v(" "),e("td",[t._v("kick off app when HTML is loaded, same as "),e("code",[t._v("window.load(callback)")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("How to view/list app-db in js console?")])]),t._v(" "),e("p",[e("code",[t._v("app-name.db")]),t._v(" in js console. Eg: "),e("code",[t._v("conduit.db")])]),t._v(" "),e("blockquote",[e("p",[t._v("How to convert js arrays and objects to clojurescript data structures?")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cljs.github.io/api/cljs.core/js-GTclj",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cljs.github.io/api/cljs.core/js-GTclj"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("what is "),e("code",[t._v(".-")]),t._v(" in js interop?")])]),t._v(" "),e("p",[e("code",[t._v(".-")]),t._v(" is used to signify field access in Clojure interop, just "),e("code",[t._v(".")]),t._v(" is calling a method.")]),t._v(" "),e("blockquote",[e("p",[t._v("How to reference and use js "),e("code",[t._v("this")]),t._v(" in "),e("code",[t._v("cljs")]),t._v("?")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://clojureverse.org/t/reagent-adding-event-listener-to-a-component/5896",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://clojureverse.org/t/reagent-adding-event-listener-to-a-component/5896"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"http://cljs.github.io/api/cljs.core/#this-as",target:"_blank",rel:"noopener noreferrer"}},[t._v("cljs api"),e("OutboundLink")],1)]),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);s.default=n.exports}}]);