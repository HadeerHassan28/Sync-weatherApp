import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Humidity from "../../assets/images/humidity.png";
import sunrise from "../../assets/images/sunrise.png";
import sunset from "../../assets/images/sunset.png";
const Home = () => {
  const API_KEY = "a6b35769404f7161fd0258995d43abd8";
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setweatherData] = useState(null);
  const fetshData = () => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network Erorr");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setweatherData(data);
        setIsLoading(false);
        sunriseTime = new Date(weatherData.sys.sunrise).toLocaleTimeString(
          "en-US"
        );
        console.log(sunriseTime);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetshData();
  }, []);

  return (
    <>
      <div className="container mt-1">
        <div className="row justify-content-center align-items-center bg-weather p-2">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              <strong>City:</strong>
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control mb-3"
              placeholder="Please Enter a City Name"
            />

            <label htmlFor="country" className="form-label">
              <strong>Country:</strong>
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-control mb-3"
              placeholder="Please Enter a Country Name"
            />

            <button
              className="btn btn-primary bg-main w-100"
              onClick={fetshData}
            >
              <i className="fa-solid fa-magnifying-glass fa-lg m-2 "></i> Search
            </button>

            {weatherData && !isLoading ? (
              <div className="card mt-4 p-5 border">
                <h2 className="card-title text-danger">
                  Weather in {weatherData.name}, {weatherData.sys.country}
                </h2>
                <p className="card-text mt-3">
                  <label className="text-bold">
                    <strong>
                      <i className="fa-solid fa-temperature-three-quarters fa-lg"></i>{" "}
                      Temperature:
                    </strong>
                  </label>
                  <span className="info">
                    {" "}
                    {(weatherData.main.temp - 273.15).toFixed(2)}°C
                  </span>
                </p>
                <p className="card-text">
                  <label className="text-bold">
                    <strong>
                      <i className="fa-solid fa-temperature-three-quarters fa-lg"></i>{" "}
                      Feels Like:
                    </strong>
                  </label>
                  <span className="info">
                    {" "}
                    {(weatherData.main.feels_like - 273.15).toFixed(2)}°C
                  </span>
                </p>
                <p className="card-text">
                  <label>
                    <strong>
                      <i className="fa-solid fa-cloud fa-lg"></i> Weather:{" "}
                    </strong>
                  </label>
                  <span className="info">
                    {" "}
                    {weatherData.weather[0].description}
                  </span>
                </p>
                <p className="card-text">
                  <label>
                    <strong>
                      <img
                        src={Humidity}
                        type="icom"
                        alt="Humidity"
                        height="20px"
                        width="20px"
                      />{" "}
                      Humidity:{" "}
                    </strong>
                  </label>
                  <span className="info"> {weatherData.main.humidity}</span>
                </p>
                {/* sunrise */}
                <p className="card-text">
                  <label>
                    <strong>
                      <img
                        src={sunrise}
                        alt="sunrise"
                        height="20px"
                        width="20px"
                      />
                    </strong>{" "}
                    Sunrise:{" "}
                  </label>
                  <span className="info">
                    {" "}
                    {new Date(
                      weatherData.sys.sunrise * 1000
                    ).toLocaleTimeString("en-US")}
                  </span>
                </p>
                {/* sunset */}
                <p className="card-text">
                  <label>
                    <strong>
                      <img
                        src={sunset}
                        type="icom"
                        alt="sunset"
                        height="20px"
                        width="20px"
                      />
                    </strong>{" "}
                    Sunset:
                  </label>
                  <span className="info">
                    {" "}
                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                      "en-US"
                    )}
                  </span>
                </p>
              </div>
            ) : (
              <div className="mt-4">
                <span className="h3">
                  <strong>Please Select a City...</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
