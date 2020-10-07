import React from "react";
import Slider from "react-slick";

const Forecast = ({ forecast }) => {
  const settings = {
    dots: true,
    infinite: false,
    vertical: true,
    // verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    },
    slidesToShow: 12,
    slidesToScroll: 1
  };

  const imgURL = "https://openweathermap.org/img/w/";

  return (
    <div className="forecast-section">
      <h1 className="forecast-title">
        Evolution of the weather in {forecast.city.name} (3 hours forecast)
      </h1>
      <Slider {...settings}>
        {forecast &&
          forecast.list.map(hour => (
            <div className="forecast-box" key={hour.id}>
              <div className="day-forecast">
                <div className="date">{hour.dt_txt}</div>
                <div className="temp">{Math.round(hour.main.temp)}ºC</div>
                <div>
                  <img
                    src={`${imgURL}${hour.weather[0].icon}.png`}
                    alt="weather-icon"
                    className="weather-icon"
                  />
                  <div className="weather">{hour.weather[0].main}</div>
                </div>
                <div className="forecast-details-box">
                  <p className="description">
                    <strong>Cloudiness:</strong> {hour.clouds.all}%
                  </p>
                  <p className="description">
                    <strong>Humidity:</strong> {hour.main.humidity}%
                  </p>
                  <p className="description">
                    <strong>Pressure:</strong> {hour.main.pressure} hPa
                  </p>
                  <p className="description">
                    <strong>Wind speed:</strong> {hour.wind.speed} meter/sec
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Forecast;
