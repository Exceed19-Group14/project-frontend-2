// import "./App.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import SubmitButton from "./components/SubmitButton";

const Edit = () => {
  const { id } = useParams();

  const [temperature, setTemperature] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [water, setWater] = useState(0);
  const [plant, setPlant] = useState({});

  const clickEvent = async () => {
    const data = {
      targeted_temperature: +temperature,
      targeted_moisture: +moisture,
      watering_time: +water * 1000,
    };
    try {
      await axios.put(`/plant/${id}`, data);
      nav(`/detail/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    axios.get(`/plant/${id}`).then(({ data }) => {
      setPlant(data);
      setTemperature(data.targeted_temperature);
      setMoisture(data.targeted_moisture);
      setWater(data.watering_time / 1000);
    });
  }, []);

  const nav = useNavigate();

  return (
    <div>
      <h1 className="headline">Edit tree : {id}</h1>
      <div className="Input">
        <div id="rectangle"></div>
        <div>
          <div>
            <p>Targeted Temperature</p>
            <TextBox
              inside="Temperature"
              onChange={(e) => setTemperature(e.target.value)}
              value={temperature}
            />
          </div>
          <div>
            <p>Targeted Moisture</p>
            <TextBox
              inside="Moisture"
              onChange={(e) => setMoisture(e.target.value)}
              value={moisture}
            />
          </div>
          <div>
            <p>Watering time (in secs)</p>
            <TextBox
              inside="Water"
              onChange={(e) => setWater(e.target.value)}
              value={water}
            />
          </div>
        </div>
      </div>
      <p className="Line">
        {" "}
        _______________________________________________________________________________________
      </p>
      <SubmitButton onClick={clickEvent} />
    </div>
  );
};

export default Edit;
