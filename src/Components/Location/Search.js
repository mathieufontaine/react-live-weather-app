import React, { useState, useEffect } from "react";

const API_KEY_WEATHER = process.env.REACT_APP_API_KEY_WEATHER;
const url = "https://api.openweathermap.org/data/2.5/";

const Search = ({ setWeather, setForecast, setIsLoading }) => {
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   search(query);
  // }, [query]);

  const search = query => {
    if (query !== "") {
      try {
        fetch(`${url}weather?q=${query}&units=metric&appid=${API_KEY_WEATHER}`)
          .then(response => response.json())
          .then(data => {
            setWeather(data);
          });
      } catch (err) {
        console.log(err);
      }

      fetch(`${url}forecast?q=${query}&units=metric&appid=${API_KEY_WEATHER}`)
        .then(response => response.json())
        .then(data => {
          setForecast(data);
        })
        .then(setIsLoading(false));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    search(query);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a city"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {/* <i
        className="fas fa-times clear-btn"
        onClick={() => {
          setQuery("");
        }}
      ></i> */}
      <button className="btn btn-search" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
