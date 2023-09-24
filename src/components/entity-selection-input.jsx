import React from 'react';
import "./entity-selection-input.css"

function EntitySelectionInput({ options, selectedOption, id, onChangeFunction }) {

    const optionsList = options.map((option, index) =>
        <li key={index} className={option === selectedOption ? 'selected' : ''} onClick={(e)=>{onChangeFunction(e, option)}}>{option}</li>
    )

    return (
        <ul id={id} className='entity-selection-input'>
            {optionsList}
        </ul>
    );
}

export default EntitySelectionInput;