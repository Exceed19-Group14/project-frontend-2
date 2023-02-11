import React from "react";
import "../styles/TextBox.css";

function TextBox({ inside, onChange, type = "text" }) {
  return (
    <input
      className="TextBox"
      type={type}
      placeholder={inside}
      onChange={onChange}
    ></input>
  );
}

export default TextBox;
