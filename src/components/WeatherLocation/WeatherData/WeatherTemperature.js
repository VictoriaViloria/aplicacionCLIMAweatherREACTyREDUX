import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,SUN,RAIN,SNOW, THUNDER, DRIZZLE} from './../../../constants/weathers';
import './styles.css';
const icons = {
  // fog: "day-fog",
  // cloud: "cloud",
  // cloudy: "cloudy",
  // sun: "day-sunny",
  // rain: "rain",
  // snow: "snow",
  // windy: "windy"
  [CLOUD]: "cloud",
  //[CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  //[WINDY]: "windy"
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers",
};
//////
const getWeatherIcon = (weatherState) => {
  console.log('weatherState');
  const icon = icons[weatherState];

  const sizeIcon ="3x";
  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
  }else
  return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
}

/////
const WeatherTemperature = ({ temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    {/*<WeatherIcons name="day-sunny" size="2x" /> */}
    {
      getWeatherIcon(weatherState)
    }
    <span className="temperature">{`${temperature}`}</span>
    <span className="temparatureType">{ `oC`}</span>
  </div>
);
WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;
