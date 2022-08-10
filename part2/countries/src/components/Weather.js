import Image from './Image.js'
const Weather = ({entries, weather}) =>{
  if(entries.length === 1 && Object.entries(weather).length > 0){
		return(
			<div>
			<h3>Waether</h3>
			temperature: {weather.main.temp-273} °C <br/>
			<Image uri={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> <br/>
		  wind: {weather.wind.speed*3.6} km/h
			</div>
		)
	}

}

export default Weather
