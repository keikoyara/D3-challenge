// @TODO: YOUR CODE HERE!
// set svg size & margin
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    botton: 60,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// create svg wrapper
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    attr("transform", `translate(${margin.left}, ${margin.top})`);
