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
    <section className="section forecast-section">
      <div className="title">
        <h2>
          Weather Forecast for the next hours in{" "}
          <strong>{forecast.city.name}</strong>
        </h2>
        <h3>(3 hours forecast)</h3>
      </div>
      <Slider {...settings}>
        {forecast &&
          forecast.list.map(hour => (
            <div className="forecast-box" key={hour.id}>
              {/* <div className="day-forecast"> */}
              <div className="date">{hour.dt_txt}</div>
              <div className="temp-box">{Math.round(hour.main.temp)}ºC</div>
              <div>
                <img
                  src={`${imgURL}${hour.weather[0].icon}.png`}
                  alt="weather-icon"
                  className="icon"
                />
                <div className="text">{hour.weather[0].main}</div>
              </div>
              <div className="forecast-box-details">
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
                {/* </div> */}
              </div>
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default Forecast;
