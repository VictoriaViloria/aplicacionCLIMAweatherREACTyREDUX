import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
//import logo from './logo.svg';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mex',
  'Madrid,es',
  'Lima,pe',
  'Barcelona,es',
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`aqui handleSelectedLocation ${ city }`);
  }
  render() {
  return (
    <div className="App">
    <LocationList cities={cities}
    onSelectedLocation={this.handleSelectedLocation}></LocationList>
       { /* <WeatherLocation city="Buenos Aires,ar"></WeatherLocation> */ }
    </div>
  );
}
}
export default App;
