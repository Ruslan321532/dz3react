import { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=145b5e7ac02aff1869014850dc5444a9&q=${city},`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => console.log(err));
  };

  const searchHandler = (e) => {
    setCity(e.target.value);
  };

  const convertWeather = (temp) => {
    const convertedTemp = temp - 273;
    return convertedTemp;
  };

  return (
    <div>
      <input type="text" onChange={searchHandler} />
      <button onClick={fetchWeather}>get weather</button>
      <p>City: {weather?.name}</p>
      <p>country:{weather?.sys.country}</p>
      <p>sunrise:{weather?.sys.sunrise}</p>
      <p>sunset:{weather?.sys.sunset}</p>
      <p>lon:{weather?.coord.lon}</p>
      <p>tempMax:{weather?.main.temp_max}</p>
      <p>tempMin:{weather?.main.temp_min}</p>
      <p>lat:{weather?.coord.lat}</p>
      

      {weather ? (
        <div>
          <span>
            {convertWeather(weather.main.temp)} <sup>o</sup>C
          </span>
        </div>
      ) : null}
       {/* {weather ? (
        <div>
          <span>
            {(weather.sys.country)} 
          </span>
        </div>
      ) : null} */}
      {/* {weather ? (
        <div>
          <span>
            {(weather.sys.sunrise)} 
          </span>
        </div>
      ) : null} */}
      
      {/* {weather ? (
        <div>
          <span>
            {(weather.sys.sunset)} 
          </span>
        </div>
      ) : null} */}
      

        {/* {weather ? (
        <div>
          <span>
            {(weather.coord.lat)} 
          </span>
        </div>
      ) : null} */}
       {/* {weather ? (
        <div>
          <span>
            {(weather.coord.lon)} 
          </span>
        </div>
      ) : null} */}
        {/* {weather ? (
        <div>
          <span>
            {(weather.main.temp_max)} 
          </span>
        </div>
      ) : null}
        {weather ? (
        <div>
          <span>
            {(weather.main.temp_min)} 
          </span>
        </div>
      ) : null} */}
    </div>
    
  );
}

export default App;