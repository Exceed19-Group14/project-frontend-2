import React from "react";
import "../styles/TextBox.css";

function TextBox({ inside, onChange }) {
  return (
    <input
      className="TextBox"
      type="text"
      placeholder={inside}
      onChange={onChange}
    ></input>
  );
}

export default TextBox;
