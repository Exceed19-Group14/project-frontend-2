import React from 'react';
import SubmitButton from './components/SubmitButton';
import TextBox from './components/TextBox';

const Create = () => {
    return (
     <div>
        <h1 className='headline'>Add New Tree</h1>
        <div className='Input'>
            <div id='rectangle'></div>
            <div >
            <p>Name</p>
            <div className='idk'>
            <TextBox inside='Your Plant Name'/>
            </div>
            <div>
            <p>Temperature</p>
            <TextBox inside='Temperature'/>
            </div>
            <div>
            <p>Moisture</p>
            <TextBox inside='Moisture'/>
            </div>
            <p>Light</p>
            <TextBox inside='Light'/>
            </div>
        </div>
        <p className="Line"> _______________________________________________________________________________________</p>
        <SubmitButton/>
     </div>
    )
}

export default Create