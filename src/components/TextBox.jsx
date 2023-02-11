import React from "react";
import "../styles/TextBox.css";

function TextBox({ inside, onChange, type = "text", value = "" }) {
  return (
    <input
      className="TextBox"
      type={type}
      placeholder={inside}
      onChange={onChange}
      value={value}
    ></input>
  );
}

export default TextBox;
