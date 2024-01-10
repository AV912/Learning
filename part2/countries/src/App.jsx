import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CountryDisplay from '../components/CountryDisplay'
import CountryService from '../services/CountryService'


function App() {
  const [newCountry, setNewCountry] = useState("")
  const Finland = {
    name: {
      common: "Finland",
      official: "Republic of Finland",
      nativeName: {
      fin: {
      official: "Suomen tasavalta",
      common: "Suomi"
      },
      swe: {
      official: "Republiken Finland",
      common: "Finland"
      }
      }
    },
    capital: [
      "Helsinki"
    ],
    area: 338424,
    languages: {
      fin: "Finnish",
      swe: "Swedish"
    },
    flags: {
      png: "https://flagcdn.com/w320/fi.png",
      svg: "https://flagcdn.com/fi.svg",
      alt: "The flag of Finland has a white field with a large blue cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side."
    }
  }
  const [countries, setCountries] = useState([])
  
  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setNewCountry(event.target.value)
    //console.log(countries)
    //setCountries(countryList)
   // console.log(countries)
  }

  const handleShowCountry = (name) => {
    setNewCountry(name)
  }


  useEffect(() => {
    CountryService.getCountries().then(returnedCountries => {
      setCountries(returnedCountries.filter(country => country.name.common.toLowerCase().includes(newCountry.toLowerCase())))
    })
  }, [newCountry])

  
  
  return (
    <div>
      <SearchBar value={newCountry} changeHandler={handleCountryChange}/>
      <CountryDisplay countries={countries} showHandler={handleShowCountry}/>
    </div>
  )
}

export default App
