import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Forecast from "./Forecast/Forecast";
import Search from "./Location/Search";
import CurrentWeather from "./Weather/CurrentWeather";
import Geolocation from "./Location/Geolocation";
import WebcamsList from "./Webcams/WebcamsList";

const Content = () => {
  const [weather, setWeather] = useState("");
  const [forecast, setForecast] = useState([]);
  const [webcams, setWebcams] = useState([]);

  const updateBackground = weather => {
    switch (weather) {
      case "Clouds":
        return `clouds${Math.floor(Math.random() * 6) + 1}`;
      case "Clear":
        return `clear${Math.floor(Math.random() * 4) + 1}`;
      case "Rain":
        return `rain${Math.floor(Math.random() * 6) + 1}`;
      case "Fog":
        return `fog${Math.floor(Math.random() * 2) + 1}`;
      case "Thunderstorm":
        return `thunderstorm${Math.floor(Math.random() * 3) + 1}`;
      case "Snow":
        return "app snow";
      default:
        return "app;";
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? `content ${updateBackground(weather.weather[0].main)}`
          : "content"
      }
    >
      <div className="container">
        <div className="search-box">
          <Search setWeather={setWeather} setForecast={setForecast} />
          <Geolocation setWeather={setWeather} setForecast={setForecast} />
        </div>

        {typeof weather.main != "undefined" ? (
          <CurrentWeather weather={weather} />
        ) : (
          ""
        )}

        {typeof weather.main != "undefined" ? (
          <WebcamsList
            weather={weather}
            webcams={webcams}
            setWebcams={setWebcams}
          />
        ) : (
          ""
        )}

        {typeof forecast.list != "undefined" ? (
          <Forecast forecast={forecast} />
        ) : weather !== "" ? (
          <div className="error-message">
            <h2>Sorry but we could not find any weather forecast.</h2>
            <h3>Please try again with another location</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Content;
