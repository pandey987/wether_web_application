import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css"
export default function SearchBox({updateInfo}) {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "7d3d52c235216c333799e95ab267b668";

  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
let getwheaterinfo = async () =>{
    try
    {let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonres = await res.json();
    console.log(jsonres);
    
    let result = {
        city : city,
        temp : jsonres.main.temp ,
        temp_min : jsonres.main.temp_min ,
        temp_max : jsonres.main.temp_max ,
        humidity : jsonres.main.humidity ,
        feels_like : jsonres.main.feels_like ,
        weather : jsonres.weather[0].description ,
    }
    console.log(result);
    updateInfo(result);
     }
    catch(err){
        setError(true);
    }
}
  let changeHandler = (event) => {
    setCity(event.target.value);
  };
  let submitHandler = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
   await getwheaterinfo(city);
  };

  return (
    <>
    <div className="SearchBox">
      <h2>Search for Weather</h2>
      <form onSubmit={submitHandler}>
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          value={city}
          onChange={changeHandler}
          required
        />
        <br /> <br />
        <Button style={{marginBottom :"22px"}} type="submit" variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
        {error && <p style={{color :"red"}}>No Such City Exist!</p>}
      </form>
      </div>
    </>
  );
}
