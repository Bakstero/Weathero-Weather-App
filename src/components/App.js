import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

class App extends Component {
  
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    minTemp: '',
    maxTemp: '',
    error: false,
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    } );
  }

  handleCity = (e) => {
    e.preventDefault()
    const APIKEY = '8d1606e5c702f35c0c88770118effd74';
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`;
    
    fetch(API)
    .then(response =>{
      if(response.ok) {
        return response
      }
      throw Error("Not found")
    })
    .then(response => response.json())

    .then(data => {
      const date = new Date().toLocaleString();
      this.setState( state => ({
        error: false,
        date: date,
        city: state.value,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
      }))
    })
    
    .catch(error => {
      this.setState( prevState => ({
        error: true,
        city: prevState.value
      }))
    })

  }
  
  render() {
    return (
      <div className="App">
        <h1>Weathero</h1>
        <Form 
        value={this.state.value}
        change={this.handleInputChange}
        submit={this.handleCity}
        />
        <Result information={this.state}/>
      </div>
    );
  }
}

export default App;
