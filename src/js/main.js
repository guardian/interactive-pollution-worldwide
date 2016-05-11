import mainHTML from './text/main.html!text'
import { requestAnimationFrame, cancelAnimationFrame } from './lib/raf';
import {csv as d3_csv} from 'd3-request';
import PollutionChart from './components/PollutionChart';

import {
    REGIONS
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

                
                console.log(__data)
                
                new PollutionChart(__data
                    .filter(d=>{
                        return REGIONS[d.Region]==="europe";
                    })
                    .sort((a,b)=>{
                        return a.pm10 - b.pm10;
                    }).map((d,i)=>{
                        d.index=i;
                        return d;
                    }),{
                        container:el.querySelector(".interactive-container"),
                        config:config
                    });  

            })

            
            return; 
        }
        frameRequest = requestAnimationFrame(checkInnerHTML);
    });
}
