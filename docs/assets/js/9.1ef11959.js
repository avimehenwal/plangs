(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{491:function(e,t,n){},562:function(e,t,n){"use strict";n(491)},589:function(e,t,n){"use strict";n.r(t);var i=n(570),r=(n(560),{props:{code:{type:String,default:"digraph {a -> b}"}},data:function(){return{graphviz:"",width:"100%",selectedEngine:"dot",time:2e3,renderingEngines:["circo","dot","fdp","neato","osage","patchwork","twopi"]}},mounted:function(){this.renderGraphviz()},methods:{renderGraphviz:function(){var e=i.c().duration(this.time).ease(i.a);this.graphviz=i.b(".graph").graphviz().transition(e).engine(this.selectedEngine).width(this.width).fit(!0).fade(!0).dot(this.code).render().on("end",this.interactive)}},watch:{selectedEngine:function(e){console.log("ENGINE "+e+"selected"),this.renderGraphviz()}}}),s=(n(562),n(7)),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("script",{attrs:{src:"https://unpkg.com/@hpcc-js/wasm/dist/index.min.js",type:"javascript/worker"}}),e._v(" "),n("div",{staticClass:"graph"}),e._v(" "),n("div",{staticClass:"controls"},[n("label",[e._v("drawn using "+e._s(e.selectedEngine)+" Placement Algorithm")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedEngine,expression:"selectedEngine"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedEngine=t.target.multiple?n:n[0]}}},e._l(e.renderingEngines,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0)])])}),[],!1,null,"5c0bc08c",null);t.default=a.exports}}]);