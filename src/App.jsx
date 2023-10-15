import { useState } from "react";

import "./App.css";
import NavBar from "./Compnent/NavBar/NavBar";
import Home from "./Compnent/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <div className="container ">
        <Home />
      </div>
    </>
  );
}

export default App;
