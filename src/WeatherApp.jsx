import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({ city :"Indore",
    temp : 34 ,
    temp_min : 26 ,
    temp_max : 40,
    humidity : 47 ,
    feels_like : 36 ,
    weather : "haze" ,});

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }

    return <>
    <div style={{textAlign : "center"}}><h2>Weater App by prakash</h2></div>
    <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </>
}