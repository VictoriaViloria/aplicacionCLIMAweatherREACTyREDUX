import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {  SUN,WINDY, RAIN } from './../../constants/weathers';

const location = "Buenos Aires,ar"
const api_key = "6e97b9fb27bc58c542bab28134b35fe5"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
//agregar al ultimo &units=metric
const data = {
  temperature : 47,
  weatherState: SUN,
  humidity: 32.5,
  wind: '77 m/s'
}
// const data2 = {
//   temperature : 123,
//   weatherState: RAIN,
//   humidity: 273.15,
//   wind: '325 m/s'
// }

class WeatherLocation extends Component {

constructor() {
  super();
  this.state = {
    city: 'BuenosAires',
    data: data,
  }
}
getTemp = ( ( kelvin) => {
  return Number(convert(kelvin).from("K").to("C").toFixed(2));
})
getWeatherState = ( (weather_data) => {
  return SUN;
})

getData = ( (weather_data) => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = this.getWeatherState(weather_data);
  const temperature = this.getTemp(temp);

  const data = {
    humidity,
    temperature: temperature,
    weatherState,
    wind : `${speed} m/s`
  }
  return data;
});

  // handleUpdateClick = () => {
  //   //fetch(api_weather);
  //   fetch(api_weather).then( (resolve) => {
  //     console.log(resolve);
  //     debugger;
  //     return resolve.json();  //retorna una nueva PROMESA
  //   });

    handleUpdateClick = () => {
      fetch(api_weather).then( (resolve) => {
        return resolve.json();  //retorna una nueva PROMESA
      }).then( (data) => {

        const newWeather = this.getData(data);
        console.log(newWeather);
        debugger;
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

  render() {
    const {city, data } = this.state;
    return (
      <div className="weatherLocatioCont">
        <Location city={city} pais={'mexico lindo y querido'}></Location>
        <WeatherData data = {data}></WeatherData>
        <button onClick={ this.handleUpdateClick }>Actualizar</button>
      </div>
  )};
};

export default WeatherLocation;
