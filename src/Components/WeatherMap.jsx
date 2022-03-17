import React, { useEffect, useState } from "react";
import "./weather.css";
import WeatherShow from "./WeatherShow";

const WeatherMap = () => {
  const [searchVal, setSearchVal] = useState("karachi");
  const [tempInfo, setTempInfo] = useState({});
  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=b40c0162d3742f9614d45c49998a84a5`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const weatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };

      setTempInfo(weatherInfo);
      // console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      <div className="container weatherDiv text-center">
        <div className="row">
          <div className="col-sm col-lg-6 m-auto ">
            <div className="mainDiv">
              <div className="  d-flex mt-2 mb-2 justify-content-center">
                <input
                  type="search"
                  className="form-control w-75"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                />
                <button className="btn btn-primary mx-2" onClick={getWeather}>
                  Search
                </button>
              </div>
              <WeatherShow tempInfo={tempInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherMap;
