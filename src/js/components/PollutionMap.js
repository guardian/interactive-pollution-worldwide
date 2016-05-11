import topojson from 'topojson';

import d3 from 'd3';

import {
	REGIONS,
	REGION_COUNTRY
} from '../lib/data';

//require("d3-geo-projection")(d3);


import { requestAnimationFrame, cancelAnimationFrame } from '../lib/raf';

export default function PollutionMap(data,options) {

	var π = Math.PI;
	function kavrayskiy7(λ, φ) {
	  return [
	    3 * λ / (2 * π) * Math.sqrt(π * π / 3 - φ * φ),
	    φ
	  ];
	}

	kavrayskiy7.invert = function(x, y) {
	  return [
	    2 / 3 * π * x / Math.sqrt(π * π / 3 - y * y),
	    y
	  ];
	};

	d3.geo.kavrayskiy7 = function() { return d3.geo.projection(kavrayskiy7); };

	//d3.geo.kavrayskiy7()

	console.log(topojson)

	var width = 960,
    	height = 570;

	// var projection = d3.geo.azimuthalEquidistant()
	//     .scale(560)
	//     .translate([width / 2, height / 2])
	//     //.clipAngle(180 - 1e-4)
 //    	//.clipExtent([[0, 0], [width, height]])
	//     .precision(.1)
	//     .center([0,0])
	//     .rotate([-96.75,-29.04])

	var projection = d3.geo.mercator()
	    .scale(700)
	    .translate([width / 2, height / 2])
	    //.clipAngle(180 - 1e-4)
    	//.clipExtent([[0, 0], [width, height]])
	    .precision(.1)
	    .center([0,51])
	    //.rotate([-75,-30])

	var path = d3.geo.path()
	    .projection(projection);

	//var graticule = d3.geo.graticule();

	var svg = d3.select(options.container)
		.append("div")
			.attr("class","world")
				.append("svg")
			    .attr("width", width)
			    .attr("height", height);

	svg.append("defs").append("path")
	    .datum({type: "Sphere"})
	    .attr("id", "sphere")
	    .attr("d", path);

	  svg.insert("path", ".graticule")
	      .datum(topojson.feature(options.world, options.world.objects.land))
	      .attr("class", "land")
	      .attr("d", path);

	  svg.insert("path", ".graticule")
	      .datum(topojson.mesh(options.world, options.world.objects.countries, function(a, b) { return a !== b; }))
	      .attr("class", "boundary")
	      .attr("d", path);

	let place=svg
			.append("g")
				.attr("id","places")
					.selectAll(".place")
			    	.data(data)
				  	.enter()
				  	.append("g")
					    .attr("class", d=>{
					    	if(!REGION_COUNTRY[d.Country]) {
					    		console.log(d.Country)
					    	}
					    	return "place "+REGION_COUNTRY[d.Country]+" "+d.City+":"+d[options.indicator]
					    })
					    .attr("transform", function(d) { return "translate(" + projection([d.lon,d.lat]) + ")"; })
	let extents={};
	setExtents();
	let radius=d3.scale.sqrt().domain(extents[options.indicator]).range([0.5,7])

	place.append("circle")
		.classed("only-stroke",d=>(radius(d[options.indicator])>1))
		.attr("cx",0)
		.attr("cy",0)
		.attr("r",d=>radius(d[options.indicator]))

	d3.select(self.frameElement).style("height", height + "px");

	function setExtents() {

		extents={
			pm10:d3.extent(data,d=>d.pm10),
			pm25:d3.extent(data,d=>d.pm25),
			lon:d3.extent(data,d=>d.lon),
			lat:d3.extent(data,d=>d.lat),
			index:d3.extent(data,d=>d.index)
		}

	}


}