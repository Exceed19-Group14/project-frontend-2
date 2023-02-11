import React, { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import SubmitButton from "./components/SubmitButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBoard = () => {
  const [boardID, setBoardID] = useState("");
  const navigate = useNavigate();
  const clickEvent = async () => {
    try {
      await axios.post("/board", {
        board_id: boardID,
      });

      navigate("/home");
    } catch (e) {
      console.error("Can't create board", e);
    }
  };

  return (
    <div>
      <h1>Add New Board</h1>
      <p>Board ID</p>
      <TextBox
        inside="Board ID (specific to your board)"
        onChange={(e) => setBoardID(e.target.value)}
        type="number"
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
