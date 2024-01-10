import axios from 'axios'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/"

const getCountryData = (name) => {
    const request = axios.get(`${baseUrl}api/name/${name}`)
    return request.then(response => response.data)
}

const getCountries = () => {
    const request = axios.get(`${baseUrl}api/all`)
    console.log("inside get Countries", request)
    return request.then(response => response.data)
}

export default {getCountryData, getCountries}