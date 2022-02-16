import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ latlng, capital }) => {

    const [weatherData, changeWeather] = useState({
        main: {
            temp:null
        },
        wind: {
            speed:null
        },
        weather:[
            {icon: null}
        ]
    })

    const [icon, changeIcon] = useState()
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}&units=metric`)
            .then(response => {
                changeWeather(response.data)
            })
    }, [])

    return (
        <div>
            <h2>Weather in {capital}</h2>

            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>

            <p><b>temperature </b>: {weatherData.main.temp}°C</p>
            <p><b>wind </b>: {weatherData.wind.speed}</p>
        </div>
    )
}

export default Weather