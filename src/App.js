import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid,Row, Col} from 'react-flexbox-grid';
//import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
//import logo from './logo.svg';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mex',
  // 'Madrid,es',
  // 'Lima,pe',
  // 'Barcelona,es',
]

// class App extends Component {
//   handleSelectedLocation = city => {
//     console.log(`aqui handleSelectedLocation ${ city }`);
//   }
//   render() {
//   return (
//     <div className="App">
//     <LocationList cities={cities}
//     onSelectedLocation={this.handleSelectedLocation}></LocationList>
//        { /* <WeatherLocation city="Buenos Aires,ar"></WeatherLocation> */ }
//     </div>
//   );
// }
// }
//USO de react-flexbox-grid
class App extends Component {
constructor() {
  super();
  this.state = { city: null};
}

  handleSelectedLocation = city => {
    this.setState({ city: city });
    console.log(`aqui handleSelectedLocation ${ city }`);
  }
  render() {
    const { city } = this.state;
  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detail">
                { /* <ForecastExtended city={this.state.city}></ForecastExtended> */ }
                {
                  //city === null ?
                  //<h1>No se seleccionó ciudad</h1> :
                  //<ForecastExtended city={city}></ForecastExtended>
                  city &&
                  <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
       { /* <WeatherLocation city="Buenos Aires,ar"></WeatherLocation> */ }
    </Grid>
  );
 }
}
export default App;
