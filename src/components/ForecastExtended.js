import React, { Component}  from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';

import './styles.css';

/* const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

const data = {
  temperature: 10,
  himidity: 10,
  weatherState: 'normal',
  wind: 'normal',
}
*/

const api_key = "6e97b9fb27bc58c542bab28134b35fe5"
const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {
  constructor(){
    super();
    this.state = { forecastData: null}
  }

  componentDidMount(){
// fetch por axios
  const url_forecast =`${url_base_weather}?q=${this.props.city}&appid=${api_key}`;

   fetch(url_forecast).then(
     data => (data.json())
   ).then(
     weather_data => {
       console.log(weather_data);
       const forecastData = transformForecast(weather_data);
       console.log("aqui dentro del filtrado");
       console.log(forecastData);
       this.setState({forecastData: forecastData})
     }
   );
  }

  //renderForecastItemDays() {
    renderForecastItemDays(forecastData) {
    //return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
    //return (<ForecastItem weekDay={'Lunes'}></ForecastItem>);
    //return (<h1>"Render Items"</h1>);
    return forecastData.map( forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}>
      </ForecastItem>));
  }

  renderProgress = () => {
    return <h3>Cargando pronóstico extendido...."</h3>
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
  return (<div>
           <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
          { /*  this.renderForecastItemDay() */ }
            {forecastData ?
            // this.renderForecastItemDays() :
            this.renderForecastItemDays(forecastData) :
            this.renderProgress()  }
           {/* <ForecastItem weekDay={'Lunes'}></ForecastItem> */}
          </div>)
   }
}

ForecastExtended.propTypes  = {
city: PropTypes.string.isRequired,
}
export default ForecastExtended;
