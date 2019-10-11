import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
// import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weathers';
import './styles.css';

// const WeatherData = ({ data }) => {
//   const {temperature, weatherState, humidity, wind} = data;
//   return (<div className="weatherDataCont" >
//       <WeatherTemperature
//        // temperature={20}
//        //{ /*weatherState={'rain'} */}
//        // weatherState={SUN}
//        temperature={temperature}
//        weatherState={weatherState}
//       />
//        { /* <WeatherExtraInfo humidity={80} wind={"10 m/s"}/> */}
//         <WeatherExtraInfo humidity={humidity} wind={wind}/>
//   </div>);
// };

//OTRA MANERA
const WeatherData = ({ data: {temperature, weatherState, humidity, wind} }) => (
    <div className="weatherDataCont" >
      <WeatherTemperature
       // temperature={20}
       //{ /*weatherState={'rain'} */}
       // weatherState={SUN}
       temperature={temperature}
       weatherState={weatherState}
      />
       { /* <WeatherExtraInfo humidity={80} wind={"10 m/s"}/> */}
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);

WeatherData.propTypes ={
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherData: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};
export default WeatherData;
