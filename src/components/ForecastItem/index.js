import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

// const data = {
//   temperature: 10,
//   himidity: 10,
//   weatherState: 'normal',
//   wind: 'normal',
// }

const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
     {/* <div>{weekDay} Hora: {10} hs</div> */}
     <h2>{weekDay} - {hour} hs</h2>
     <WeatherData data={data}></WeatherData>
  </div>
)

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherData: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default ForecastItem;
