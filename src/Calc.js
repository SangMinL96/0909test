import React, { useState, useEffect } from "react";

function Calc({ setHistories }) {
  const [beforeData, setBeforeData] = useState("0");
  const [afterData, setAfterData] = useState("0");
  const [state, setState] = useState(true);
  const [cal, setCal] = useState(null);

  const onNumberClick = (value) => {
    if (state === true) {
      setBeforeData(() => {
        if (beforeData !== "0") {
          return beforeData + value;
        } else {
          return value;
        }
      });
    } else {
      setAfterData((props) => {
        if (props !== "0") {
          return props + value;
        }
        return value;
      });
    }
  };
  const calculation = (item) => {
    if (beforeData === "0") {
      alert("첫번째 값을 입력하세요");
    } else {
      setState(!state);
    }
    setCal(item);
  };
  const onResult = () => {
    let results;
    switch (cal) {
      case "+":
        results = Number(beforeData) + Number(afterData);
        break;
      case "−":
        results = Number(beforeData) - Number(afterData);
        break;
      case "×":
        results = Number(beforeData) * Number(afterData);
        break;
      case "÷":
        results = Number(beforeData) / Number(afterData);
        break;
      default:
        break;
    }

    setHistories([beforeData, cal, afterData, "=", results]);
  };
  const onAc = () => {
    setBeforeData("0");
    setAfterData("0");
    setState(true);
    setCal(null);
  };

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">
        {state ? <span>{beforeData}</span> : <span>{afterData}</span>}
      </div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac" onClick={onAc}>
            AC
          </div>
          <div className="calc__keyboard__number">
            <div className="calc__keyboard__number__line">
              <div
                className="button button--blue"
                onClick={() => onNumberClick("1")}
              >
                1
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("2")}
              >
                2
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("3")}
              >
                3
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("4")}
              >
                4
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("5")}
              >
                5
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("6")}
              >
                6
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("7")}
              >
                7
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("8")}
              >
                8
              </div>
              <div
                className="button button--blue"
                onClick={() => onNumberClick("9")}
              >
                9
              </div>
            </div>
          </div>
          <div className="button button--blue--big">0</div>
        </div>
        <div className="calc__keyboard__operator">
          <div
            className="button button--deepblue"
            onClick={() => calculation("+")}
          >
            +
          </div>
          <div
            className="button button--deepblue"
            onClick={() => calculation("−")}
          >
            −
          </div>
          <div
            className="button button--deepblue"
            onClick={() => calculation("×")}
          >
            ×
          </div>
          <div
            className="button button--deepblue"
            onClick={() => calculation("÷")}
          >
            ÷
          </div>
          <div className="button button--pink" onClick={onResult}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
