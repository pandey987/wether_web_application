import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function ForecastInfo({info}){
    const INIT_IMG="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg";
    
    return <>
    <div className='InfoBox'>
    <div className='infocard'>
    <Card sx={{ maxWidth: 345, marginBottom : "20px"}}>
    <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div> Temperature_Max = {info.temp_max}&deg;C</div>
          <div> Temperature_Min = {info.temp_min}&deg;C</div>
          <div> Weater can be described as <i>{info.weather}</i></div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
}