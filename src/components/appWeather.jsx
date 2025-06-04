import React from 'react'
import WeatherForm from './weatherForm'
import WeatherInfo from './weatherInfo'


export default function AppWeather() {
    return (
        <React.Fragment>{/* invisible wrapper, dummy xhtml root. */}
            {/* <div className='container'> */}
                <WeatherForm />
                <WeatherInfo />
            {/* </div> */}
        </React.Fragment>
    )
}
