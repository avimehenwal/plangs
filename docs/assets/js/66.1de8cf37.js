(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{638:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"asynchronous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous"}},[t._v("#")]),t._v(" Asynchronous")]),t._v(" "),s("TagLinks"),t._v(" "),s("ul",[s("li",[t._v("Single thread (by default) "),s("strong",[t._v("MUTATOR THREAD")]),t._v(" aka "),s("mark",[t._v("main Isolate")])]),t._v(" "),s("li",[t._v("Asynchronous programming is implemented using "),s("strong",[t._v("task event queue")]),t._v(", just like JS")]),t._v(" "),s("li",[s("mark",[t._v("Isolate")]),t._v(" are seperate memories for asynchronous tasks in VM memory")]),t._v(" "),s("li",[t._v("Dart execution is single threaded, but language has other threads running\n"),s("ul",[s("li",[t._v("like "),s("strong",[t._v("HELPER THREAD")]),t._v(" for cleanup garbagge collection")])])])]),t._v(" "),s("h2",{attrs:{id:"isolates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isolates"}},[t._v("#")]),t._v(" Isolates")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Isolates are EXPENSIVE")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("150")]),t._v(" isolates takes up "),s("strong",[t._v("850 MB of RAM")])]),t._v(" "),s("li",[s("strong",[t._v("1000")]),t._v(" isolates can take upto "),s("mark",[t._v("4.5 GB of RAM")]),t._v(", which is a lot for a mobile phone")])])]),t._v(" "),s("h2",{attrs:{id:"futures-and-streams-and-microtasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#futures-and-streams-and-microtasks"}},[t._v("#")]),t._v(" Futures and Streams and Microtasks")]),t._v(" "),s("p",[t._v("In dart, Futures can have 4 states")]),t._v(" "),s("ol",[s("li",[t._v("unprocessed")]),t._v(" "),s("li",[t._v("uncompleted")]),t._v(" "),s("li",[t._v("completed")]),t._v(" "),s("li",[t._v("completed with error")])]),t._v(" "),s("p",[t._v("Future API have multiple constructors")]),t._v(" "),s("ol",[s("li",[t._v("delayed")]),t._v(" "),s("li",[t._v("value")]),t._v(" "),s("li",[t._v("sync")]),t._v(" "),s("li",[t._v("microtask - short tasks which are not events (like click, hover)")])]),t._v(" "),s("p",[t._v("Microtaks have priority over events tasks")]),t._v(" "),s("p",[t._v("Streams == multiple * Futures === "),s("strong",[t._v("Asynchrnous Lazy Iterables")])]),t._v(" "),s("blockquote",[s("p",[t._v("Dont loose the forest from the trees")])]),t._v(" "),s("h3",{attrs:{id:"streamcontroller-and-streamsubscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streamcontroller-and-streamsubscription"}},[t._v("#")]),t._v(" Streamcontroller and streamSubscription")]),t._v(" "),s("ul",[s("li",[t._v("To implement polling, long-polling scenarious of data-fetching")]),t._v(" "),s("li",[t._v("streams needs to be manually cancelled to stop listening")])]),t._v(" "),s("h2",{attrs:{id:"asynchronous-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-generator"}},[t._v("#")]),t._v(" Asynchronous Generator")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("Stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" asyncGenerator "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("RxStream "),s("a",{attrs:{href:"https://pub.dev/packages/rxdart",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pub.dev/packages/rxdart"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/55397023/whats-the-difference-between-async-and-async-in-dart",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's the difference between async and async* in Dart?"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Marking a function as async or async* allows it to use the async/await for a Future.")]),t._v(" "),s("p",[t._v("The difference between both is that async* will always return a Stream and offer some syntactical sugar to emit a value through the yield keyword.")]),t._v(" "),s("p",[t._v("We can therefore do the following:")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("Stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("int"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Future"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delayed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("Footer")],1)}),[],!1,null,null,null);a.default=n.exports}}]);