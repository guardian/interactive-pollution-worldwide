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
	REGIONS
} from '../lib/data';

import { requestAnimationFrame, cancelAnimationFrame } from '../lib/raf';

export default function PollutionChart(data,options) {

	let extents;
	setExtents();
	console.log(extents)

	let xscale=scaleLinear(),
		yscale=scaleLinear(),
		colorscale=scaleLinear();

	let margins = options.margins || {
        top: 0,
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

		let box = pollution.node().getBoundingClientRect();
    	let WIDTH = options.width || box.width,
        	HEIGHT = options.height || box.height;

		console.log(WIDTH,HEIGHT);

		xscale.domain(extents.index).range([margins.left + padding.left,WIDTH - ( margins.right  + padding.right)]);
		yscale.domain(extents.pm10).range([HEIGHT - (margins.bottom + padding.bottom),margins.top+padding.top])
		colorscale.domain([0,extents.pm10[1]]).range([1,0]);


		let city=pollution.selectAll("div.city")
					.data(data)
					.enter()
					.append("div")
						.attr("class","city")
						.attr("rel",d=>{
							return d.City+"/"+d.Country+" "+REGIONS[d.Region]
						})
						.style("left",d=>xscale(d.index)+"px")
						.style("top",d=>yscale(d.pm10)+"px")

		city.append("div")
				.attr("class",d=>{
					return "dot "+REGIONS[d.Region];
				})
				// .style("background-color",d=>{
				// 	//console.log(d.pm10,colorscale(d.pm10),scaleWarm)
				// 	return scaleWarm()(colorscale(d.pm10))
				// })

		city.append("span")
				.text(d=>d.City)

		city.filter(d=>d.City==="Jaipur")
			.each(d=>{
				console.log(d)
			})

	}

	function updateVisual() {

	}

	function setExtents() {

		extents={
			pm10:d3_extent(data,d=>d.pm10),
			pm25:d3_extent(data,d=>d.pm25),
			lon:d3_extent(data,d=>d.lon),
			lat:d3_extent(data,d=>d.lat),
			index:d3_extent(data,d=>d.index)
		}

	}

}