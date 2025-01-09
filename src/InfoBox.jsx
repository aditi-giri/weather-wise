import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=is&k=20&c=DJLFJx9p-nbIctnbojqRq20Ykb8OoAiysD23LxbaXLk=";
    const HOT_URL = "https://img.freepik.com/free-photo/low-angle-shot-green-leafed-tree-bright-sky_181624-19264.jpg?t=st=1736392016~exp=1736395616~hmac=afd889b02d1762027e127f4c97931472dda112b969be684212cb8b0d7209f758&w=900";
    const COLD_URL="https://img.freepik.com/free-photo/horizontal-view-winter-mountain-landscape_268835-1043.jpg?t=st=1736392266~exp=1736395866~hmac=1604cd59bae0f930a366bee3f950790f980190a9defe950e7ba437e80a9500b7&w=900";
    const RAIN_URL = "https://img.freepik.com/free-photo/high-angle-closeup-shot-isolated-green-leaf-puddle-rainy-day_181624-12619.jpg?t=st=1736392684~exp=1736396284~hmac=17b81d3f934db999af85238b4e484f554f4a10d7d1bcc15e519fb476162312e5&w=900";
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? RAIN_URL
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity > 80 
                        ? <ThunderstormIcon/>
                        : info.temp > 15
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp = {info.tempMin}&deg;C </p>
                        <p>Max Temp = {info.tempMax}&deg;C </p>
                        <p>The Weather is described as "{info.weather}" and feels like = {info.feelsLike}&deg;C </p>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}