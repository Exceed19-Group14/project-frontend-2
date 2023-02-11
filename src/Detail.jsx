import Card from "./components/card";
import Radio from "./components/radio-button";
import pic from "./components/water-b.png";
import "./App.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import pic2 from "./components/pic02.png";
import Form from "react-bootstrap/Form";

function Detail() {
  const { id } = useParams();

  const [plant, setPlant] = useState({});
  const [mode, setMode] = useState(0);

  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  const changeState = async (e) => {
    setMode(e.target.value);
    try {
      await axios.patch(`/plant/${id}/mode`, {
        mode,
      });
    } catch (e) {
      setErr("Update mode failed");
      setMode(prev);
    }
  };
  const nav = useNavigate();

  const unpairHanble = async () => {
    try {
      await axios.put(`/plant/${id}/unregister`);

      nav("/home");
    } catch (error) {}
  };

  useEffect(() => {
    axios.get(`/plant/${id}`).then(({ data }) => {
      setPlant(data);
      setMode(data.mode);
    });
  }, []);

  return (
    <div>
      {err ? <div className="alert alert-danger">{err}</div> : null}
      {msg ? <div className="alert alert-success">{msg}</div> : null}
      <button
        type="button"
        className="btn btn-danger-1 "
        disabled={mode === 1}
        onClick={async () => {
          try {
            await axios.patch(`/plant/${id}/water`, {
              mode: 1,
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
      <Card img={pic2} />
      <div className="detail">
        <h4>Temperature: {plant.temperature ?? "N/A"}</h4>
      </div>
      <div className="detail">
        <h4>Moisture: {plant.moisture ?? "N/A"} </h4>
      </div>
      <div className="detail">
        <h4>Light: {plant.light ?? "N/A"}</h4>
      </div>
      <Form.Select
        size="sm"
        style={{
          marginBottom: "10px",
        }}
        onChange={changeState}
        value={mode}
      >
        <option value={1}>Auto</option>
        <option value={0}>Manual</option>
      </Form.Select>
      <button type="button" className="btn btn-danger-2" onClick={unpairHanble}>
        {/* <svg
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
        </svg> */}
        Unpair
      </button>
    </div>
  );
}

export default Detail;
