import axios from 'axios'
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const iconUrl = "https://openweathermap.org/img/wn/"
//https://openweathermap.org/img/wn/10d@2x.png
const apiKey = import.meta.env.VITE_SOME_KEY

const getWeather = (city) => {
    const request = axios.get(`${weatherUrl}${city}&appid=${apiKey}`)
    return request.then(response => response.data)
}

const getIconUrl = (code) => {
    //console.log(`${iconUrl}${code}@2x.png`)
    return `${iconUrl}${code}@2x.png`
}
export default {getWeather, getIconUrl}