import React from "react";
import "../styles/card_home.css";
import pic from "../components/pic02.png";

const Card1 = ({ id, date, moist, temp, light }) => {
  return (
    <div className="card1">
      <h1>ID: {id}</h1>
      <img
        src={pic}
        alt="plant"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <div className="det">Date: {new Date(date).toLocaleDateString()}</div>
      <div className="det">Time: {new Date(date).toLocaleTimeString()}</div>
      <div className="det">Moisture: {moist}</div>
      <div className="det">Temperature: {temp}</div>
      <div className="det">Light: {light}</div>
    </div>
  );
};

export default Card1;
