import React from "react";
import "../styles/radio-button.css";

const Radio = () => {
  return (
    <>
      <div className="radio">
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
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
