import React, { useState, useEffect } from "react";

const API_KEY_WEATHER = process.env.REACT_APP_API_KEY_WEATHER;
const url = "https://api.openweathermap.org/data/2.5/";

const Search = ({ setWeather, setForecast }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    search(query);
  }, [query]);

  const search = query => {
    if (query !== "") {
      try {
        fetch(`${url}weather?q=${query}&units=metric&appid=${API_KEY_WEATHER}`)
          .then(response => response.json())
          .then(data => {
            setWeather(data);
            console.log(data);
            // setQuery('');
          });
      } catch (err) {
        console.log(err);
      }

      fetch(`${url}forecast?q=${query}&units=metric&appid=${API_KEY_WEATHER}`)
        .then(response => response.json())
        .then(data => {
          setForecast(data);
          console.log(data);
        });
    }
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search for a city"
      onChange={e => setQuery(e.target.value)}
      value={query}
      //   onKeyUp={e => search(e.target.value)}
    />
  );
};

export default Search;
