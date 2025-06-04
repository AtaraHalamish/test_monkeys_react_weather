import React from 'react'

export default function WeatherInfo(props) {

  let info = props.info; // Destructure the info prop to get the weather data.

  return (
    <div className='container text-center mt-3'>
      <h2 className='display-4'>Weather of {info.name}</h2>
      {<img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="weather icon" width="150" />}

      <h3>Condition: {info.weather[0].main}</h3>
      <h3>Temperature: {info.main.temp}°C</h3>
      <h3>Wind: {info.wind.speed}km/h</h3>
      <h3>Humidity: {info.main.humidity}%</h3>
    </div>
  )
}
