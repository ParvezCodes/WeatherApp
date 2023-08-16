import coldBg from "./assets/cold.jpg";
import hotBg from "./assets/hot.jpg";
import normalBg from "./assets/medium.jpg";
import { useState } from "react";
import "./App.css";
import Description from "./Component/Description";
import { useEffect } from "react";
import { getWeatherData } from "./whetherService";
import Footer from "./Component/Footer";

function App() {
  const [city, setCity] = useState("maharastra");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [Bg, setBg] = useState(coldBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const Data = await getWeatherData(city, unit);
      setWeather(Data);

      //dynamic background
      const tempForBg = unit === "metric" ? 20 : 60;

        if (Data.temp <= tempForBg) 
        {
          setBg(coldBg);
        } 
        else if (Data.temp > tempForBg && Data.temp < 34)
        {
          setBg(normalBg);
        } 
        else
        {
          setBg(hotBg);
        }
    };

    fetchWeatherData();
  }, [unit, city]);

  const handleUnitClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnit(isCelcius ? "metric" : "imperial");
  };

  const getCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const style1 = {
    backgroundImage: `url( ${Bg} )`,
  };

  return (
    <>
    <div className="app" style={style1}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__input">
              <input
                onKeyDown={getCity}
                type="text"
                name="city"
                placeholder="Enter city name"
              />
              <button onClick={(e) => handleUnitClick(e)}><b>°F</b></button>
            </div>

            <div className="section section__temp">
              <div className="city__container">
                <h3>{`${weather.name} , ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="Weather Icon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  unit === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            <Description weather={weather} unit={unit} />
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
