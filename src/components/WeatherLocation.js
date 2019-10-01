import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  // <div>** WeatherLocation ** contiene a
  <div>
  <Location city={'Barcelona'} pais={'mexico lindo y querido'}></Location>
  <WeatherData></WeatherData>
  </div>

);
export default WeatherLocation;
