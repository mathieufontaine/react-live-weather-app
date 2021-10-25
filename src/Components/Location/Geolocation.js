import React, { useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY_WEATHER;
const url = "https://api.openweathermap.org/data/2.5/";

const Geolocation = ({ setWeather, setForecast, setIsLoading }) => {
  // const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    currentCoordinates();
  }, []);

  const currentCoordinates = () => {
    if (navigator.geolocation) {
      // const options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(data => {
        fetchWeatherByCoordinates({
          lat: data.coords.latitude,
          lon: data.coords.longitude
        });
      });
    } else {
      alert("Sorry, your browser does not support geolocation!");
    }
  };

  const fetchWeatherByCoordinates = coordinates => {
    fetch(
      `${url}weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      });
    fetch(
      `${url}forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        setForecast(data);
      })
      .then(setIsLoading(false));
  };

  return (
    <button className="btn geolocation" onClick={currentCoordinates}>
      Use Current Location
    </button>
  );
};

export default Geolocation;
