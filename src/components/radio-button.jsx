import React from "react";
import "../styles/radio-button.css";

const Radio = ({ state, onClick }) => {
  return (
    <>
      <div className="radio">
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value={1}
            id="flexRadioDefault1"
            checked={state[0] === 1 ? "checked" : null}
            onClick={onClick}
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
            value={0}
            checked={state[0] === 0 ? "checked" : null}
            onClick={onClick}
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
