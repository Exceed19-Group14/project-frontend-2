import React, { useEffect, useState } from "react";
import SubmitButton from "./components/SubmitButton";
import TextBox from "./components/TextBox";
import Select from "./components/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

const Create = () => {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [moist, setMoist] = useState("");
  const [light, setLight] = useState("");
  const [board, setBoard] = useState("");
  const [boards, setBoards] = useState([]);

  const [plantDate, setPlantDate] = useState(new Date());
  const navigate = useNavigate();

  const clickEvent = async () => {
    const data = {
      board: +board,
      name,
      plant_date: plantDate,
      plant_image: 1,
      targeted_temperature: +temp,
      targeted_moisture: +moist,
      targeted_light: +light,
    };

    const response = await axios.post("/plant", data);
    if (response.status != 201) {
      // TODO: Popup error
      console.error("Errors");
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    axios.get("/board").then((data) => {
      console.log("DATA", data.data);
      setBoards([{ board_id: 0 }, ...data.data]);
    });
  }, []);

  useEffect(() => {
    console.log({ name, temp, moist, light, board });
  }, [name, temp, moist, light, board]);

  return (
    <div>
      <h1 className="headline">Add New Tree</h1>
      <div className="Input">
        <div id="rectangle"></div>
        <div>
          <p>Name</p>
          <div className="idk">
            <TextBox
              inside="Your Plant Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Temperature</p>
            <TextBox
              inside="Temperature"
              onChange={(e) => setTemp(e.target.value)}
            />
          </div>
          <div>
            <p>Moisture</p>
            <TextBox
              inside="Moisture"
              onChange={(e) => setMoist(e.target.value)}
            />
          </div>
          <div>
            <p>Light</p>
            <TextBox
              inside="Light"
              onChange={(e) => setLight(e.target.value)}
            />
          </div>
          <div>
            <p>Plant Date</p>
            <DateTimePicker
              value={plantDate}
              onChange={(d) => setPlantDate(d)}
              disableClock={true}
            />
          </div>
          <div>
            <p>Board</p>
            <Select
              arr={boards}
              k="board_id"
              onChange={(e) => setBoard(e.target.value)}
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

export default Create;
