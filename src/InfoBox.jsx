import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_IMG="https://media.istockphoto.com/id/1280464607/photo/hot-weather-in-india.jpg?s=612x612&w=0&k=20&c=VTxZCoKfQaZBgzpKstXnful3zRdGME_ZZwRBeuy5eqg=";
    
    return <>
    <div className='InfoBox'>
    <div className='infocard'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div> Temperature = {info.temp}&deg;C</div>
          <div> Temperature_Max = {info.temp_max}&deg;C</div>
          <div> Temperature_Min = {info.temp_min}&deg;C</div>
          <div> Humidity = {info.humidity}</div>
          <div> Weater can be described as <i>{info.weather}</i> and feelslike {info.feels_like}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
}