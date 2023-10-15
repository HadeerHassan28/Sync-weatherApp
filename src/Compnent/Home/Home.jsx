import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
const Home = () => {
  const API_KEY = "a6b35769404f7161fd0258995d43abd8";
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weathrData, setweatherData] = useState(null);

  const fetshData = () => {
    setIsLoading(true);
    fetch(
      `http://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API_ key}`
    )
      .then((response) => {
        setweatherData(response.data);
        //console.log(response);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    fetshData();
  }, []);
  return (
    <>
      <div className="my-5 d-flex align-items-start bg-weather p-3 ">
        <label htmlFor="city" name="city" id="city" className="me-2 ">
          <strong className="text fa-lg"> City:</strong>
        </label>

        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="form-control me-2"
        />

        <label htmlFor="country" name="country" id="country" className="me-2">
          <strong className="text fa-lg"> Country:</strong>
        </label>

        <input
          type="text"
          value={country}
          onChange={(e) => {
            setCountry(e.target.contry);
          }}
          className="form-control me-2"
        />
        <button className="btn btn-hover">
          <i className="fa-solid fa-magnifying-glass fa-lg m-2"></i>
        </button>
      </div>
    </>
  );
};

export default Home;
