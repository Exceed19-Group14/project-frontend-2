import React, { useEffect, useState } from "react";
import SubmitButton from "./components/SubmitButton";
import TextBox from "./components/TextBox";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { Alert } from "react-bootstrap";

const Create = () => {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [moist, setMoist] = useState("");
  const [board, setBoard] = useState("");
  const [boards, setBoards] = useState([]);
  const [time, setTime] = useState("");
  const [err, setErr] = useState(null);

  const [plantDate, setPlantDate] = useState(new Date());
  const nav = useNavigate();

  const clickEvent = async () => {
    console.log(board);
    const data = {
      board: +board,
      name,
      plant_date: plantDate,
      plant_image: 1,
      targeted_temperature: +temp,
      targeted_moisture: +moist,
      targeted_light: 0,
    };

    try {
      await axios.post("/plant", data);
      nav("/home");
    } catch (e) {
      setErr(
        e?.response?.data?.detail ?? `Unknown error: ${JSON.stringify(e)}`
      );
    }
  };

  useEffect(() => {
    axios.get("/board").then((data) => {
      setBoards([{ board_id: 0 }, ...data.data]);
    });
  }, []);

  useEffect(() => {}, [name, temp, moist, board, time]);

  return (
    <div>
      <h1 className="headline">Add New Tree</h1>
      {err ? <Alert variant="danger">{err}</Alert> : null}
      <div className="Input">
        <div id="rectangle"></div>
        <div>
          <p>Name</p>
          <div className="idk">
            <TextBox
              inside="Your Plant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>Targeted Temperature</p>
            <TextBox
              inside="Temperature"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
          </div>
          <div>
            <p>Targeted Moisture</p>
            <TextBox
              inside="Moisture"
              value={moist}
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
          </div>
          <div>
            <p>Time (in sec)</p>
            {/* <select
                aria-label="Default select example"
                className="TextBox"
                
                defaultValue={boards[0]?.board_id}
                onChange={(e) => setTime(e.target.value)}
              >
                {boards.map((item, index) => (
                  <option value={item.board_id} key={index}>
                    {item.board_id}
                  </option>
                ))}
              </select> */}
            <TextBox
              inside="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
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
