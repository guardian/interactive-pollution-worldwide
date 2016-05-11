export const AQI = {
	"good":{
		aqi:[0,50],
		color:"#009966"
	},
	"moderate":{
		aqi:[51,100],
		color:"#FFDE33"
	},
	"unhealthy for sensitive groups":{
		aqi:[101,150],
		color:"#FF9933"
	},
	"unhealthy":{
		aqi:[151,200],
		color:"#CC0033"
	},
	"very unhealthy":{
		aqi:[201,300],
		color:"#660099"
	},
	"hazardous":{
		aqi:[300,1000],
		color:"#7E0023"
	}
}

export const REGIONS = {

	"Eur HI":"europe",
	"Eur LMI":"europe",
	"Wpr LMI":"asia",
	"Afr":"africa",
	"Sear":"asia",
	"Wpr HI":"oceania",
	"Amr LMI":"samerica",
	"Amr HI":"namerica",
	//"Amr LMI":"americas",
	//"Amr HI":"americas",
	"Emr HI":"middle_east",
	"Emr LMI":"asia"

}