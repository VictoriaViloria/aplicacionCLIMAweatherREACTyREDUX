import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../constants/weathers';


const WeatherData = () => (
  <div>Weather Data contiene a
      <WeatherTemperature
       temperature={20}
       //{ /*weatherState={'rain'} */}
       weatherState={SUN}

      />
      <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
  </div>
);

export default WeatherData;
