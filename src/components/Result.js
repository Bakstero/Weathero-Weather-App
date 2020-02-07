import React from 'react';
import './Result.css'

const Result = (props) => {

  let content = null;
  const { date, city, country, sunrise, sunset, temp, pressure, wind, minTemp, maxTemp, icon, error} = props.information

  //Search Results ... City
  if(!error && city) {

    const sunriseTime = new Date(sunrise *1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    //const weatherIcon = `http://openweathermap.org/img/w/${icon}.png`; //Orginal icons 

    content = (
    <div>
        <img alt="Weather Icon" src={`${icon}.png`}/>
        <h2>Date: {date}</h2>
        <h2>City: {city}</h2>
        <h2>Country: {country}</h2>
        <h2>Sunrise: {sunriseTime}</h2>
        <h2>Sunset: {sunsetTime}</h2>
        <h2>Temperature: {temp} &#176;C</h2>
        <h2>Min temperature:{minTemp} &#176;C</h2>
        <h2>Max temperature : {maxTemp} &#176;C</h2>
        <h2>Pressure: {pressure} hPa</h2>
        <h2>Wind: {wind} m/s</h2>
    </div>
    )
  }

  return (
  <div className="result">
    {error ?`There was a problem to search ${city}` : content}
  </div>
  );
}

export default Result;

//&#176; 