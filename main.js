

var width = 960,
    height = 500;

var projection = d3.geo.mercator()
    .scale(36000)
    .translate([width, height]);

var center = projection([10.180, 53.392]);

var path = d3.geo.path().projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class","map");

var vector = svg;

d3.json("data/map.topojson", function(error, us) {

  var plane = topojson.feature(us, us.objects.collection);

  var b, s, t;
 projection.scale(1).translate([0, 0]);
var b = path.bounds(plane);
console.log(b);
 var s = .9 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
 var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
  projection.scale(s).translate(t);

    vector = svg.selectAll("path")
        .data(plane.features)
        .enter()
        .append("path")
        .attr("class", "county")
        .attr("d", path);


});

d3.csv("data/hamburg_public_transport.csv", function(d){
  console.log(d);
  var c10 = d3.scale.category10();
  vector = svg.selectAll("path")
         .data(d.avg_total_time)
         .attr("class","prova")
         //.style("fill", function(d){ return c10(d.One)});

});
