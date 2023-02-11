import React, { useState } from "react";
import Card1 from "./components/card_home";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles/Home.css"

const Home = () => {
  const [plant, setPlant] = useState([]);
  useEffect(() => {
    axios.get("/plant").then(({ data }) => {
      setPlant(data);
    });
  }, []);

  return (
    <div>
      <div className="home">
        <div className="head">
          Let's Water the Plants
          <img
            src="https://cdn.discordapp.com/attachments/942709647641550870/1073424235034316871/drops.png"
            alt="home"
            width="20"
          />
        </div>
        <div>
          <a
            href="create"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Create
          </a>
        </div>
        <div className="plantlist">
          {plant.map((plant, index) => (
            <div className="plantlist">
              <Card1
                key={index}
                name={plant.name}
                id={plant._id}
                date={plant.plant_date}
                moist={plant.moisture ?? "N/A"}
                temp={plant.temperature ?? "N/A"}
                light={plant.light ?? "N/A"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
