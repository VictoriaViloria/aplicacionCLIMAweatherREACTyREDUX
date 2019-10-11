import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';
// const LocationList = ( ( { cities } ) => (
//   <div>
//   <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
//   <WeatherLocation city="Bogota,col"></WeatherLocation>
//   <WeatherLocation city="Mexico,mex"></WeatherLocation>
//   <WeatherLocation city="Washington,us"></WeatherLocation>
//   <WeatherLocation city="Barcelona,es"></WeatherLocation>
//   <WeatherLocation city="Moscu,urrs"></WeatherLocation>
//   </div>
// ) );

// const LocationList = ( ( { cities } ) => {
//   console.log(cities);
//   return (
//   <div>
//   <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
//   <WeatherLocation city="Bogota,col"></WeatherLocation>
//   <WeatherLocation city="Ciudad de México,mex"></WeatherLocation>
//   <WeatherLocation city="Washington,us"></WeatherLocation>
//   <WeatherLocation city="Barcelona,es"></WeatherLocation>
//   <WeatherLocation city="Moscu,urrs"></WeatherLocation>
//   </div> );
//  }
// );
// const strToComponents = ( ( cities) =>
//   //cities.map( (city, index ) => <WeatherLocation key={ index } city={city}/>)
//   cities.map( (city ) => <WeatherLocation key={ city } city={city}/>)
// );

// const LocationList = ( ( { cities } ) => {
//   //console.log(cities);
//   return (
//   <div>
//     { strToComponents(cities) }
//   </div> );
//  }
// );

const LocationList =  ( { cities, onSelectedLocation } ) => {
  //console.log(cities
  const handleWeatherLocationClick =  city  => {
    console.log("aqui en handleWeatherLocationClick");
    onSelectedLocation(city);
  };
  const strToComponents =  ( cities) => (
    //cities.map( (city, index ) => <WeatherLocation key={ index } city={city}/>)
    cities.map( (city ) =>
      (
        <WeatherLocation
           key={ city }
           city={city}
           onWeatherLocationClick={ () => handleWeatherLocationClick( city ) }/>))
  );

return (
  <div className="locationList">
    { strToComponents(cities) }
  </div> );
};



LocationList.propTypes = {
  // cities: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}
export default LocationList;
