import WeatherService from "../services/WeatherService";
import { useState } from "react";

const WeatherDisplay = ({name}) => {
    const [weatherData, setWeather] = useState(null)
    WeatherService.getWeather(name).then(returnedData => {
        setWeather(returnedData)
    })
    //console.log(weather)
    
    if (weatherData !== null) {
        // console.log(weatherData.weather[0].icon)
        return (
            <div>
                <h2>Weather in {name}</h2>
                <div>temperature {weatherData.main.temp - 273} Celcius</div>
                <img src={WeatherService.getIconUrl(weatherData.weather[0].icon)}></img>
                <div>wind {weatherData.wind.speed} m/s</div>
            </div>
        )
    } else {
        
    }
    
    
}


export default WeatherDisplay