import React from "react";
import "../styles/card_home.css";
import pic from "../components/pic02.png";
import { useNavigate } from "react-router-dom";

const Card1 = ({ name, date, moist, temp, light,id }) => {
  const navigate = useNavigate();
  return (
    <div className="card1" onClick={() => navigate(`/detail/${id}`)}>
      <h1>{name}</h1>
      <img
        src={pic}
        alt="plant"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <div className="det">id: {id}</div>
      <div className="det">Date: {new Date(date).toLocaleDateString()}</div>
      <div className="det">Time: {new Date(date).toLocaleTimeString()}</div>
      <div className="det">Moisture: {moist}</div>
      <div className="det">Temperature: {temp}</div>
      <div className="det">Light: {light}</div>
    </div>
  );
};

export default Card1;
