
import WeatherDisplay from "./WeatherDisplay"

const CountryDisplay = ({countries, showHandler}) => {
    console.log(countries)
    if (countries  !== null) {
        if (countries.length >= 10) {
            return (
                <div>Too many matches, specify another filter</div>
            )
        }
        else if (countries.length > 1) {
            return (
                countries.map(country => <div>{country.name.common} <button onClick={() => {showHandler(country.name.common)}}>show</button></div>)
            )
        }
        else if (countries.length == 1) {
            const country = countries[0]
            
            const languages = country.languages
            return (
                <div>
                    <h1>{country.name.common}</h1>
                    <br></br>
                    <div>capital {country.capital[0]}</div>
                    <div>area {country.area}</div>
                    <br></br>
                    <h2>languages: </h2>
                    <ul>
                        {Object.values(languages).map(language => <li key={language}>{language}</li>)}
                    </ul>
                    <img src={country.flags.png} ></img>
                    <WeatherDisplay name={country.capital[0]}/>
                </div>
            )
        }
    }
}

export default CountryDisplay