window.onload = function() {

var width = 600,
    height = 300;

var svg = d3.select("#first-viz").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "path-style");


d3.json("data/prova1.topojson", function(error, prova1) {
  if (error) return console.error(error);
  var subunits = topojson.feature(prova1, prova1.objects.prova1);
  var projection = d3.geoMercator()
    .center([9.90,53.49])
    .scale(100000)
    .translate([width / 2, height]);
  var path = d3.geoPath()
      .projection(projection);

  svg.append("path")
      .datum(subunits)
      .attr("d", path);
});

};
