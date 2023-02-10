import React from "react";
import "../styles/radio-button.css";

const Radio = ({ state }) => {
  return (
    <>
      <div className="radio">
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={state[0] == 1}
            onChange={() => state[1](1)}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Auto
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={state[0] == 0}
            onChange={() => state[1](0)}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Manual
          </label>
        </div>
      </div>
    </>
  );
};

export default Radio;
