import React, { useState } from "react";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import "./Weatherstyle.css";

function Weatherapp() {
  const API_key = "c00e2fc86dbb14a1c6308490991c3200";
  const [icon, seticon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityinput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-loc");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " Km/h";
    temp[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      seticon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      seticon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      seticon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      seticon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      seticon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      seticon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      seticon(snow_icon);
    } else {
      seticon(clear_icon);
    }
  };
  return (
    <>
      <div className="container">
        <div className="top-bar flex justify-center gap-4 pt-5">
          <input
            type="text"
            className="cityinput"
            placeholder="Name of Place"
          ></input>
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={search_icon} alt=""></img>
          </div>
        </div>
        <div className="weather-img  justify-center flex h-25 mt-5">
          <img src={icon} alt=""></img>
        </div>
        <div className="weather-temp flex justify-center text-3xl font-extrabold text-blue-600">
          24°C
        </div>
        <div className="weather-loc flex justify-center text-3xl font-extrabold">
          Delhi
        </div>
        <div className="weather-data flex justify-center text-white-600 mt-10">
          <div className="element flex items-start m-auto gap-10">
            <img src={humidity_icon} alt="" className="icon"></img>
            <div className="data">
              <div className="humidity-percent">65%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element flex items-start m-auto gap-10">
            <img src={wind_icon} alt="" className="icon"></img>
            <div className="data">
              <div className="wind-speed">10 Km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weatherapp;
