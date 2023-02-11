import React from "react";
import TextBox from "./components/TextBox";
import SubmitButton from "./components/SubmitButton";


const CreateBoard = () => {
    return (
     <div>
        <h1>Add New Board</h1>
        <p>Board ID</p>
        <TextBox inside='Board ID'/>
        <p className="Line"> _______________________________________________________________________________________</p>
        <SubmitButton/>
     </div>
    )
}

export default CreateBoard
