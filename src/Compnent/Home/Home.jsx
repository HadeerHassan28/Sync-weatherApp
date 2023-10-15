import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
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
        console.log(weatherData.name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetshData();
  }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className="d-flex justify-content-center align-items-center">
  //         <i className="fas fa-spinner fa-spin fa-3x text-main" />
  //       </div>
  //     </>
  //   );
  // }
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
            />

            <label htmlFor="country" className="form-label">
              <strong>Country:</strong>
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-control mb-3"
            />

            <button className="btn btn-primary bg-main" onClick={fetshData}>
              <i className="fa-solid fa-magnifying-glass fa-lg m-2 "></i> Search
            </button>

            {weatherData && !isLoading ? (
              <div className="card mt-4">
                <h2 className="card-title">
                  Weather in {weatherData.name}, {weatherData.sys.country}
                </h2>
                <p className="card-text">
                  Temperature: {weatherData.main.temp}°C
                </p>
                <p className="card-text">
                  Weather: {weatherData.weather[0].description}
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
