import React from "react";
import "../styles/SubmitButton.css";

function SubmitButton({ onClick }) {
  return (
    <button className="button" type="Button" onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
