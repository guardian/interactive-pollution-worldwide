import mainHTML from './text/main.html!text'
import { requestAnimationFrame, cancelAnimationFrame } from './lib/raf';
import {csv as d3_csv,json as d3_json} from 'd3-request';
import PollutionChart from './components/PollutionChart';
import PollutionMap from './components/PollutionMap';

import {
    extent as d3_extent
} from 'd3-array'
import {
    nest
} from 'd3-collection'

import {
    REGIONS,
    REGION_NAMES,
    REGION_COUNTRY
} from './lib/data';

export function init(el, context, config, mediator) {
    el.innerHTML = mainHTML.replace(/%assetPath%/g, config.assetPath);



   let frameRequest = requestAnimationFrame(function checkInnerHTML(time) {
        //console.log(time)
        
        if(el && el.getBoundingClientRect().height) {
            cancelAnimationFrame(checkInnerHTML);

            d3_csv(config.assetPath+"/assets/data/pollution_geolocated.csv",(d)=>{

                d.pm10=+d.pm10;
                d.pm25=+d.pm25;

                d.lon=+d.lon;
                d.lat=(+d.lat);

                return d;
            },(__data)=>{

                __data=__data.filter(d=>(d.lon && d.lat))

                let length=__data.length;

                let nested_data=nest()
                                    .key(d=>REGION_COUNTRY[d.Country])
                                    .rollup(leaves=>{
                                        return {
                                            l:leaves.length
                                        }
                                    })
                                    .entries(__data)

                //console.log(nested_data)

                let extents={
                    pm10:d3_extent(__data,d=>d.pm10),
                    pm25:d3_extent(__data,d=>d.pm25),
                    lon:d3_extent(__data,d=>d.lon),
                    lat:d3_extent(__data,d=>d.lat),
                    index:d3_extent(__data,d=>d.index)
                }

                let indicator="pm10"

                REGION_NAMES.forEach(r=>{

                    let seen=[];

                    let data=__data
                        .filter(d=>{
                            return REGION_COUNTRY[d.Country]===r;
                        })
                        .filter(d=>{
                            return 1;
                            if(seen.indexOf(d[indicator])===-1){
                                seen.push(d[indicator]);
                                return true;
                            }
                            return false;
                        })

                    new PollutionChart(data
                        .sort((a,b)=>{
                            return a[indicator] - b[indicator];
                        }).map((d,i)=>{
                            d.index=i;
                            return d;
                        }),{
                            container:el.querySelector(".interactive-container"),
                            config:config,
                            extents:extents,
                            indicator:indicator,
                            total_length:length
                        }); 
                })
                 
                
                // d3_json(config.assetPath+"/assets/data/world-50m.json",function(error,world){

                //     console.log(world)

                //     new PollutionMap(__data.filter(d=>{
                //                 //return d.pm25>25;
                //                 //return 1;
                //                 return d.Country==="United Kingdom";
                //                 return REGION_COUNTRY[d.Country]==="asia";
                //          }).sort((a,b)=>{
                //             return a[indicator]-b[indicator]
                //          }),{
                //             world:world,
                //             container:el.querySelector(".interactive-container"),
                //             config:config,
                //             indicator:indicator
                //     })

                // })

                

                

            })

            
            return; 
        }
        frameRequest = requestAnimationFrame(checkInnerHTML);
    });

    
}
