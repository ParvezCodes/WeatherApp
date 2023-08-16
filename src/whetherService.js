const API_KEY = 'bed36e6e0d5e57536767dabe0196e1ff';
const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;


const getWeatherData = async (city,unit = 'metric')=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;
    const getData = await fetch(URL);
    var Data = await getData.json();
    
    const { weather,
            main:{feels_like,humidity,temp,temp_max,temp_min,pressure},
            wind:{speed},
            sys :{country},
            name,
    } = Data;

    const {description,icon} = weather[0];

    return {
        description,
        iconURL: makeIconUrl(icon),
        feels_like,
        humidity,
        temp,
        temp_max,
        temp_min,
        pressure,
        speed,
        country,
        name
    };
}

export {getWeatherData};