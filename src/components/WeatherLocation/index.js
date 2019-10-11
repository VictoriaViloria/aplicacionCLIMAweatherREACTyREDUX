import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import  getUrlWeatherByCity  from './../../services/getUrlWeatherByCity';
import { PropTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
//import { api_weather} from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
//import {  SUN} from './../../constants/weathers';

// const location = "Buenos Aires,ar"
// const api_key = "6e97b9fb27bc58c542bab28134b35fe5"
// const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"
//
// const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
// //agregar al ultimo &units=

// const data = {
//   temperature : 47,
//   weatherState: SUN,
//   humidity: 32.5,
//   wind: '77 m/s'
// }

// const data2 = {
//   temperature : 123,
//   weatherState: RAIN,
//   humidity: 273.15,
//   wind: '325 m/s'
// }

class WeatherLocation extends Component {

// constructor() {
//   super();
constructor(props) {
  super(props);
  const { city } = props;
  this.state = {
    // city: 'BuenosAires',
    city: city,
    // data: data,
    data: null,
  };
  console.log("constructor");
}

componentDidMount(){
  console.log("componentDidMount");
  this.handleUpdateClick();
}
componentDidUpdate(prevProps, prevState){
  console.log("componenDidUpdate");
}

// componentWillMount() {
//   console.log("UNSAFE componentWillMount");
// }
//
// componentWillUpdate(nextProps, nextState) {
//   console.log("UNSAFE componentWillUpdate");
// }

// getTemp = ( ( kelvin) => {
//   return Number(convert(kelvin).from("K").to("C").toFixed(2));
// })
// getWeatherState = ( (weather_data) => {
//   return SUN;
// })
//
// getData = ( (weather_data) => {
//   const { humidity, temp } = weather_data.main;
//   const { speed } = weather_data.wind;
//   const weatherState = this.getWeatherState(weather_data);
//   const temperature = this.getTemp(temp);
//
//   const data = {
//     humidity,
//     temperature: temperature,
//     weatherState,
//     wind : `${speed} m/s`
//   }
//   return data;
// });

  // handleUpdateClick = () => {
  //   //fetch(api_weather);
  //   fetch(api_weather).then( (resolve) => {
  //     console.log(resolve);
  //     debugger;
  //     return resolve.json();  //retorna una nueva PROMESA
  //   });

    handleUpdateClick = () => {
      const api_weather = getUrlWeatherByCity( this.state.city);
      fetch(api_weather).then( (resolve) => {
        return resolve.json();  //retorna una nueva PROMESA
      }).then( (data) => {

        // const newWeather = this.getData(data);
        const newWeather = transformWeather(data);
        console.log(newWeather);
        //debugger;
        this.setState ({
          //data: data2,
          data: newWeather
        });
        //console.log(data);
        //debugger;
      })

    //console.log("actualizado");
    // this.state = {

    // this.setState ({
    //   city: 'matamoros querido',
    //   data: data2,
    // });

  }
//aqui epa
  render() {
    console.log("render");
    const { onWeatherLocationClick } = this.props; // 66
    const {city, data } = this.state;
    return (
      // <div className="weatherLocatioCont">
      <div className="weatherLocationCont" onClick={ onWeatherLocationClick} > { /* 66 */ }
        <Location city={city}></Location>
        {data ?
          <WeatherData data = {data} /> :
          //{ /* "Cargando..." */ }
          <CircularProgress size={60} thickness={7}/>
        }
         {/* <button onClick={ this.handleUpdateClick }>Actualizar</button> */}
      </div>);
  };
}
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,  //66
}
export default WeatherLocation;
