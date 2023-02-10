import React from 'react'
import '../styles/radio-button.css'

const Radio = () => {
    return (
        <>
            <div className='radio'>
                <div  >
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Auto
                    </label>
                </div>
                <div>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Manual
                    </label>
                </div>
            </div>
        </>
    )
}

export default Radio