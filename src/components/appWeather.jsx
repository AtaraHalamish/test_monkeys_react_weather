import React, { useEffect, useState } from 'react'
import WeatherForm from './weatherForm'
import WeatherInfo from './weatherInfo'
import axios from 'axios'


export default function AppWeather() {

    // This component serves as the main entry point for the weather application.
    
    let [info, setInfo] = useState({}); // State to hold weather data.


    useEffect(() => {
        // This effect runs once when the component mounts.
        doApi("jerusalem")
    }, [])
    // The useEffect hook is used to perform side effects in function components.

    const doApi = async(_town) => {
        // This function is called when the component mounts.
        // It can be used to fetch initial data or perform setup tasks.
        // console.log("AppWeather mounted, doApi called");
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=XXXYYYZZZ&units=metric`;
    
        let resp = await axios.get(url);
        // The axios library is used to make HTTP requests.
        // The response is stored in the resp variable.

        console.log(resp.data);
        setInfo(resp.data); // The response data is stored in the info state variable.
        // The setInfo function is used to update the state variable info.
    }

    return (
        <React.Fragment>{/* invisible wrapper, dummy xhtml root. */}
            {/* <div className='container'> */}
                <WeatherForm doApi={doApi} />
                {info.name && <WeatherInfo info={info} />}
            {/* </div> */}
        </React.Fragment>
    )
}
