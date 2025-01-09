import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.25,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    };

    return(
        <div>
            <h2>WeatherWise</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}