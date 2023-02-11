import React, { useEffect, useState } from "react";
import SubmitButton from "./components/SubmitButton";
import TextBox from "./components/TextBox";

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
  const [waterDuration, setWaterDuration] = useState(1000);

  const [plantDate, setPlantDate] = useState(new Date());
  const navigate = useNavigate();

  const clickEvent = async () => {
    console.log(board);
    const data = {
      board: +board,
      name,
      plant_date: plantDate,
      plant_image: 1,
      targeted_temperature: +temp,
      targeted_moisture: +moist,
      targeted_light: +light,
    };

    console.log(data);

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
      setBoards([{ board_id: 0 }, ...data.data]);
    });
  }, []);

  useEffect(() => {}, [name, temp, moist, light, board]);

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
            <p>Targeted Temperature</p>
            <TextBox
              inside="Temperature"
              onChange={(e) => setTemp(e.target.value)}
            />
          </div>
          <div>
            <p>Targeted Moisture</p>
            <TextBox
              inside="Moisture"
              onChange={(e) => setMoist(e.target.value)}
            />
          </div>
          <div className="row">
          <div>
              <p>Board</p>
              <select
                aria-label="Default select example"
                className="SelectBox"
                defaultValue={boards[0]?.board_id}
                onChange={(e) => setBoard(e.target.value)}
              >
                {boards.map((item, index) => (
                  <option value={item.board_id} key={index}>
                    {item.board_id}
                  </option>
                ))}
              </select>
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
              <p>Time (in sec)</p>
              <select
                aria-label="Default select example"
                className="SelectBox"
                defaultValue={boards[0]?.board_id}
                onChange={(e) => setBoard(e.target.value)}
              >
                {boards.map((item, index) => (
                  <option value={item.board_id} key={index}>
                    {item.board_id}
                  </option>
                ))}
              </select>
            </div>
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
