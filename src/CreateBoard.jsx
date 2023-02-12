import React, { useState } from "react";
import TextBox from "./components/TextBox";
import { Alert } from "react-bootstrap";
import SubmitButton from "./components/SubmitButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBoard = () => {
  const [boardID, setBoardID] = useState("");
  const [err, setErr] = useState(null);
  const nav = useNavigate();
  const clickEvent = async () => {
    try {
      await axios.post("/board", {
        board_id: boardID,
      });
      nav("/home");
    } catch (e) {
      setErr(e.response.data.detail);
    }
  };

  return (
    <div>
      <h1>Add New Board</h1>
      {err ? <Alert variant="danger">{err}</Alert> : null}
      <p>Board ID</p>
      <TextBox
        inside="Board ID (specific to your board)"
        onChange={(e) => setBoardID(e.target.value)}
        value={boardID}
      />
      <p className="Line">
        {" "}
        _______________________________________________________________________________________
      </p>
      <SubmitButton onClick={clickEvent} />
    </div>
  );
};

export default CreateBoard;
