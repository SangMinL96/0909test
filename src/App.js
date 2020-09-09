import React, { useState } from "react";
import "./calculate.scss";
import Calc from "./Calc";
import History from "./History";

function App() {
  const [histories, setHistories] = useState([]);
  console.log(histories);
  return (
    <div className="App">
      <div className="Container">
        <Calc setHistories={setHistories} />
        <History histories={histories} />
      </div>
    </div>
  );
}

export default App;
