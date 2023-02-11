import Card from "./components/card";
import Radio from "./components/radio-button";
import pic from "./components/water-b.png";
import "./App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();

  const [plant, setPlant] = useState({});
  const modeState = useState(0);

  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  const changeState = async ({ target: { value } }) => {
    console.log(value, "555");
    modeState[1](value);
    try {
      await axios.patch(`/plant/${id}/mode`, {
        mode: modeState[0],
      });
    } catch (e) {
      setErr("Update mode failed");
      modeState[1](1 - modeState[0]);
    }
  };

  useEffect(() => {
    axios.get(`/plant/${id}`).then(({ data }) => {
      setPlant(data);
      modeState[1](data.mode);
    });
  }, []);

  return (
    <div>
      <Radio state={modeState} onClick={changeState} />
      {err ? <div className="alert alert-danger">{err}</div> : null}
      <button
        type="button"
        className="btn btn-danger-1 "
        disabled={modeState[0] === 1}
        onClick={async () => {
          try {
            await axios.patch(`/plant/${id}/water`, {
              status: 1,
            });
            setMsg("Watering send request success");
          } catch (e) {
            setErr("Watering send request failed");
          }
        }}
      >
        <img src={pic} className="water" />
      </button>
      <h1>Tree name: {plant.name}</h1>
      <Card img={"https://cdn-icons-png.flaticon.com/512/1752/1752941.png"} />
      <div className="detail">
        <h4>Temperature: {plant.temperature ?? "N/A"}</h4>
      </div>
      <div className="detail">
        <h4>Moisture: {plant.moisture ?? "N/A"} </h4>
      </div>
      <div className="detail">
        <h4>Light: {plant.light ?? "N/A"}</h4>
      </div>
      <button type="button" className="btn btn-danger-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Detail;
