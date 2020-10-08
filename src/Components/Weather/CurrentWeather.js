import React from "react";
import LocalDate from "../Layout/LocalDate";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="section current-weather-section">
      <div className="flex location-box">
        {weather.name}, {weather.sys.country}
      </div>

      <LocalDate weather={weather} />

      <div className="flex info-box">
        <div className="info-temp-box">
          <h2>Temperature</h2>
          <div className="temp-box">
            <p className="temp">{Math.round(weather.main.temp)}ºC</p>
            <p className="feels-like">
              Feels like: {Math.round(weather.main.feels_like)}ºC
            </p>
          </div>
          <div className="temp-variation">
            <p>Min: {Math.round(weather.main.temp_min)}ºC</p>
            <p>Max: {Math.round(weather.main.temp_max)}ºC</p>
          </div>
        </div>
        <div className="info-main-box">
          {weather.weather[0].main === "Clouds" ||
          "Clear" ||
          "Rain" ||
          "Foggy" ||
          "Snow" ||
          "Thunderstorm" ? (
            <img
              src={require(`../../assets/img/gifs/${weather.weather[0].main}.gif`)}
              alt="weather-gif"
              className="weather-gif"
            />
          ) : (
            ""
          )}
          <div className="current-weather">{weather.weather[0].main}</div>
          <p className="description">
            <strong>{weather.weather[0].description}</strong>
          </p>
        </div>
        <div className="info-details-box">
          <h2>Details</h2>
          <div>
            <p className="description">
              <strong>Cloudiness:</strong> {weather.clouds.all}%
            </p>
            <p className="description">
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
            <p className="description">
              <strong>Pressure:</strong> {weather.main.pressure} hPa
            </p>
            <p className="description">
              <strong>Wind speed:</strong> {weather.wind.speed} meter/sec
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
