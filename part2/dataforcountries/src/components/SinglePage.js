import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SinglePage = ({country}) => {
    const [weather, setWeather] = useState([])

    const api_key = process.env.REACT_APP_API_KEY
    let query = "http://api.weatherstack.com/current?access_key="+api_key+"&query="+country.capital

    useEffect(() => {
        axios
            .get(query)
            .then(response => {
                console.log("weather api running");
                setWeather(response.data.current)
                console.log("weather api finished");
            })
    }, [])

    return(
        <div>
            <h1>{country.name}</h1>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(each => (<li key={each.name}>{each.name}</li>))}
            </ul>
            <img src={country.flag} alt="Flag" height="120" width="200"/>

            <h2>Weather in {country.capital}</h2>
            <p>temperature: {weather.temperature} Celcius</p>
            <img src={weather.weather_icons} alt="description" height="80" width="80" />
            <p>wind: {weather.wind_degree} mph direction {weather.wind_dir}</p>
        </div>
    )
}

export default SinglePage