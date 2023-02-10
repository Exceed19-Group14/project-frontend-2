import React from "react";
import '../styles/TextBox.css';

function TextBox({inside}) {
    return (
        <input className='TextBox' type='text' placeholder={inside}></input>
    )
}

export default TextBox