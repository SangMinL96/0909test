import React, { useState } from "react";

function Calc() {
  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score"></div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac">AC</div>
          <div className="calc__keyboard__number">
            <div className="calc__keyboard__number__line">
              <div className="button button--blue">1</div>
              <div className="button button--blue">2</div>
              <div className="button button--blue">3</div>
              <div className="button button--blue">4</div>
              <div className="button button--blue">5</div>
              <div className="button button--blue">6</div>
              <div className="button button--blue">7</div>
              <div className="button button--blue">8</div>
              <div className="button button--blue">8</div>
            </div>
          </div>
          <div className="button button--blue--big">0</div>
        </div>
        <div className="calc__keyboard__operator">
          <div className="button button--deepblue">+</div>
          <div className="button button--deepblue">−</div>
          <div className="button button--deepblue">×</div>
          <div className="button button--deepblue">÷</div>
          <div className="button button--pink">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
