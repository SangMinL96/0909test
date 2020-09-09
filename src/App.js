import React, { useState } from "react";
import "./calculate.scss";
import Calc from "./Calc";
import History from "./History";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Calc />
        <History />
      </div>
    </div>
  );
}

export default App;
