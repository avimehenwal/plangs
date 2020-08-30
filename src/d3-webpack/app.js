import * as d3 from 'd3'

console.log('from app.js');
// #keys in d3 object
// console.log(Object.keys(d3).length);    // 528

/**
 * 1. select all SVG rectangle
 * 2. then make them orange
 */
const square = d3.selectAll("rect");
square.style("fill", "orange");

/**
 * Render numbers
 */
function d3Numbers() {
  d3.select('#num')
    .selectAll('p')
    .data([1, 2, 3])
    .enter()
    .append('p')
    .text(data => data);
}

function d32(data) {
  d3.select('#txt')
    .selectAll('p')
    .data(data)
    .enter()
    .append('p')
    .text(data => data.region);
}

/**
 * Render a bar chart inside a div
 */
function d3Bar(data) {
  d3.select('#graph')
    .classed('container', true)
    .style('border', '2px solid red')
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', data => (data.value * 15) + 'px')
}


// MAIN
const DUMMY_DATA = [
  { id: 1, value: 12, region: 'USA' },
  { id: 2, value: 10, region: 'Germany' },
  { id: 3, value: 4, region: 'India' },
  { id: 3, value: 8, region: 'China' },
]
d3Numbers()
d32(DUMMY_DATA)
d3Bar(DUMMY_DATA)