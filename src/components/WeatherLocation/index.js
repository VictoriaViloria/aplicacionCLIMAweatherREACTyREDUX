import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {  SUN,WINDY, RAIN } from './../../constants/weathers';

const data = {
  temperature : 47,
  weatherState: SUN,
  humidity: 32.5,
  wind: '77 m/s'
}


const WeatherLocation = () => (
  // <div>** WeatherLocation ** contiene a
  <div className="weatherLocatioCont">
  <Location city={'Barcelona'} pais={'mexico lindo y querido'}></Location>
  <WeatherData data = {data}></WeatherData>
  </div>
);

export default WeatherLocation;
