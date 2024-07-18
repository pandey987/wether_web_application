import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import ForecastInfo from "./ForecastInfo";
import BackgroundImage from "./BackgroundImage";
import "./WeatherApp.css";
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({ city :"Indore",
    temp : 34 ,
    temp_min : 26 ,
    temp_max : 40,
    humidity : 47 ,
    feels_like : 36 ,
    weather : "haze" ,});
    let [forecastInfo1, setForecastInfo1] = useState({ date : "2024-16-7",
        temp_min : 26 ,
        temp_max : 40,
        weather : "haze"});
    let [forecastInfo2, setForecastInfo2] = useState({ date : "2024-16-7",
        temp_min : 26 ,
        temp_max : 40,
        weather : "haze"});
    let [forecastInfo3, setForecastInfo3] = useState({ date : "2024-16-7",
        temp_min : 26 ,
        temp_max : 40,
        weather : "haze"});
    let [forecastInfo4, setForecastInfo4] = useState({ date : "2024-16-7",
        temp_min : 26 ,
        temp_max : 40,
        weather : "haze"});

    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }
    let fun = (newinfo,i) =>{
        console.log(newinfo[i].main);
        let str = newinfo[i].dt_txt.substr(0,10);
        let data = {
            date : str,
            temp_min : newinfo[i].main.temp_min,
            temp_max : newinfo[i].main.temp_max,
            weather : newinfo[i].weather[0].description
        }
        for(let j=i; j<(i+8) && j<newinfo.length; j++){
            if(newinfo[j].main.temp_min < data.temp_min){
                data.temp_min = newinfo[j].main.temp_min;
            }
            if(newinfo[j].main.temp_max > data.temp_max){
                data.temp_max = newinfo[j].main.temp_max;
            }
        }
        return data;
    }
    let updateWeatherInfo = (newinfo) =>{
        console.log(newinfo);
        for(let i=4; i<newinfo.length;){
            let data = fun(newinfo,i);
            if(i==4){
                setForecastInfo1(data);
            }
            if(i==12){
                setForecastInfo2(data);
            }
            if(i==20){
                setForecastInfo3(data);
            }
            if(i==28){
                setForecastInfo4(data);
            }
            i+=8;
        }
    }

    return <>
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackgroundImage /> {/* Add the BackgroundImage component */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2>Weather App by Prakash</h2>
      </div>
      <SearchBox updateInfo={updateInfo} updateWeatherInfo={updateWeatherInfo} />
      <div style={{ marginBottom: "20px" }}>
        <InfoBox info={weatherInfo} />
      </div>
      <div className="forecast-container">
        <ForecastInfo info={forecastInfo1} />
        <ForecastInfo info={forecastInfo2} />
        <ForecastInfo info={forecastInfo3} />
        <ForecastInfo info={forecastInfo4} />
      </div>
    </div>
    </>
}