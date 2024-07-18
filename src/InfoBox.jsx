import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const INIT_IMG_HOT="https://media.istockphoto.com/id/1280464607/photo/hot-weather-in-india.jpg?s=612x612&w=0&k=20&c=VTxZCoKfQaZBgzpKstXnful3zRdGME_ZZwRBeuy5eqg=";
    const INIT_IMG_RAIN="https://media.istockphoto.com/id/1304173109/photo/how-i-love-rainy-days.jpg?s=612x612&w=0&k=20&c=bn2mopsyvs4c4Sd_Qo7VuH8KYFxJz-SR5I9gjKXN1no="
    const INIT_IMG_COLD="https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1512902133099-2XMQSHGCCH1254QC4058/Verbier-10-20170306.jpg?format=1500w"
    return <>
    <div className='InfoBox'>
    <div className='infocard'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? INIT_IMG_RAIN : info.temp>15 ? INIT_IMG_HOT : INIT_IMG_COLD}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ?  <WbSunnyIcon/> : <AcUnitIcon/>}
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