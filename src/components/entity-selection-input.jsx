import React from 'react';
import "./entity-selection-input.css"

function EntitySelectionInput({ options, selectedOption, id, onChangeFunction }) {

    const optionsList = options.map((option, index) =>
        <li key={index} className={option === selectedOption ? 'selected' : ''} onClick={(e) => { onChangeFunction(e, option) }}>{option}</li>
    )

    return (
        <div className='entity-selection-input'>
            <label>Entity</label>
            <ul id={id}>
                {optionsList}
            </ul>
        </div>
    );
}

export default EntitySelectionInput;