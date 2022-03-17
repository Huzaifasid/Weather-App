import React, { useEffect, useState } from "react";

const WeatherShow = ({ tempInfo }) => {
  const [weatherCont, setWeatherCont] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    country,
    sunset,
    speed,
  } = tempInfo;
  let sec = sunset;
  let date = new Date(sec * 1000);
  let time = `${date.getHours()}:${date.getMinutes()}`;
//   console.log(time);

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherCont("wi-day-cloudy");

          break;
        case "Haze":
          setWeatherCont("wi-fog");

          break;
        case "Smoke":
          setWeatherCont("wi-smog");

          break;
        case "Clear":
          setWeatherCont("wi-day-sunny");

          break;
        case "Storm":
          setWeatherCont("wi-day-sleet-storm");

          break;
        case "Mist":
          setWeatherCont("wi-dust");

          break;
        case "Snow":
          setWeatherCont("wi-day-snow");

          break;

        default:
          setWeatherCont("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
  return (
    <>
      <div>
        <article>
          <div>
            <div className="text-center fontSize">
              <i className={`wi ${weatherCont}`}></i>
            </div>
            <div className="container temp">
              <div className="row ">
                <div className="col pt-3">
                  <p>{temp}&deg;</p>
                </div>
                <div className="col  pt-2">
                  <p>
                    {weathermood}
                    <small className="myFont d-block">
                      {name},{country}
                    </small>
                  </p>
                </div>
                <div className="col pt-1 ">
                  <small className="myFont2">
                    {new Date().toLocaleString()}
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="container temp2">
            <div className="row">
              <div className="col pt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="wi wi-solar-eclipse"></i>
                  <p>
                    {humidity} <br />
                    humidity
                  </p>
                </div>
              </div>
              <div className="col pt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="wi wi-sunset"></i>
                  <p>{time}PM sunset</p>
                </div>
              </div>
              <div className="col  pt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="wi wi-day-hail"></i>
                  <p>
                    {pressure} <br />
                    pressure
                  </p>
                </div>
              </div>
              <div className="col pt-3 ">
                <div className="d-flex align-items-center justify-content-center ">
                  <i className="wi wi-strong-wind"></i>
                  <p>
                    {speed} <br />
                    speed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default WeatherShow;
