console.log('from app.js');

import * as d3 from 'd3'

const square = d3.selectAll("rect");
square.style("fill", "orange");