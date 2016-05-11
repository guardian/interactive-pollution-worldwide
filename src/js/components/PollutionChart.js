import {
    select as d3_select
} from 'd3-selection';

import {
	max as d3_max,
	sum as d3_sum,
	extent as d3_extent
} from 'd3-array'

import {
	scalePoint,
    scaleLinear,
    scaleWarm
} from 'd3-scale';

import {
	REGIONS,
	REGION_COUNTRY
} from '../lib/data';

import { requestAnimationFrame, cancelAnimationFrame } from '../lib/raf';

export default function PollutionChart(data,options) {

	let extents=options.extents || setExtents();
	
	console.log(extents)

	extents.index=d3_extent(data,d=>d.index)

	let xscale=scaleLinear(),
		yscale=scaleLinear(),
		colorscale=scaleLinear();

	let margins = options.margins || {
        top: 15,
        bottom: 0,
        left: 0,
        right: 0
    };

    let padding = options.padding || {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

	buildVisual();

	function buildVisual() {

		let pollution=d3_select(options.container)
						.append("div")
							.attr("class","pollution")
							.style("width",(data.length/options.total_length*100)+"%")

		let box = pollution.node().getBoundingClientRect();
    	let WIDTH = options.width || box.width,
        	HEIGHT = options.height || box.height;

        if(data.length<WIDTH) {
        	//WIDTH=data.length;
        }

        let svg=pollution.append("svg")
        			.attr("width",WIDTH)
        			.attr("height",HEIGHT);

		console.log(WIDTH,HEIGHT);

		xscale.domain(extents.index).range([0,WIDTH - ( margins.left + padding.left + margins.right  + padding.right)]);
		yscale.domain(extents[options.indicator]).range([HEIGHT - (margins.bottom + padding.bottom + margins.top+padding.top),0])
		colorscale.domain([0,extents[options.indicator][1]]).range([1,0]);


		let city=svg.append("g")
					.attr("id","cities")
					.attr("transform",`translate(${(margins.left + padding.left)},${margins.top+padding.top})`)
					.selectAll("g.city")
					.data(data)
					.enter()
					.append("g")
						.attr("class",d=>{
							return "city "+REGION_COUNTRY[d.Country];
						})
						.attr("rel",d=>{
							return d.City+"/"+d.Country+" "+REGION_COUNTRY[d.Country]
						})
						.attr("transform",d=>{
							let x=xscale(d.index),
								y=yscale(d[options.indicator]);
							return `translate(${x},${y})`
						})
						

		// city.append("circle")
		// 		.attr("cx",0)
		// 		.attr("cy",0)
		// 		.attr("r",2)

		city.append("rect")
				.attr("x",-0.5)
				.attr("y",0)
				.attr("width",1)
				.attr("height",d=>{
					return yscale.range()[0] - yscale(d[options.indicator]);
				})

		city.append("text")
				.classed("right",d=>{
					return xscale(d.index) > xscale.range()[1]/2;
				})
				.attr("x",0)
				.attr("y",-3)
				.text(d=>(d.City+" "+d.Country))

	}

	function updateVisual() {

	}

	function setExtents() {

		return {
			pm10:d3_extent(data,d=>d.pm10),
			pm25:d3_extent(data,d=>d.pm25),
			lon:d3_extent(data,d=>d.lon),
			lat:d3_extent(data,d=>d.lat),
			index:d3_extent(data,d=>d.index)
		}

	}

}