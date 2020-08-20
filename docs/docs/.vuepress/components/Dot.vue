<template>
  <div>
    <script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js" type="javascript/worker" />
    <div>
      <div id="graph" />
      <label>choose rendering algorithm</label>
      <select v-model="selectedEngine">
        <option v-for="item in renderingEngines" :key="item">{{ item }}</option>
      </select>
      <button @click="addEdge" type="button">Add Edge</button>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import "d3-graphviz";

export default {
  props: {
    code: {
      type: String,
      default: "digraph {a -> b}",
    },
  },
  data: () => ({
    graphviz: "",
    width: "100%",
    selectedEngine: "dot",
    renderingEngines: [
      "circo",
      "dot",
      "fdp",
      "neato",
      "osage",
      "patchwork",
      "twopi",
    ],
  }),
  mounted() {
    this.renderGraphviz();
    this.addListenerOnSVG()
  },
  methods: {
    renderGraphviz() {
      var t = d3.transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .style("opacity", "100%");

      this.graphviz = d3
        .select("#graph")
        .graphviz()
        .transition(t)
        .engine(this.selectedEngine)
        .width(this.width)
        .fade(true)
        // .attributer(function(d) {
        //   if (d.tag == "ellipse") {
        //       d3.select(this)
        //           .attr("fill", "yellow");
        //       d.attributes.fill = "red";
        //   }
        // })
        .dot(this.code)
        .render()
        .on("end", this.interactive);
    }
  },
  watch: {
    selectedEngine: function (val) {
      console.log("ENGINE " + val + "selected");
      this.renderGraphviz();
    },
  },
};
</script>

<style scoped>
@keyframes example {
  0%   {}
  50%  {transform: scale(2);}
  100% {transform: scale(1);}
}

.bump {
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: 2;
  animation-timing-function: ease;
}
</style>