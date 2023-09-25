import React from 'react';
import "./sort-input.css"

function SortInput({ options, selectedOption, id, onChangeFunction }) {

    const optionsList = options.map((option, index) =>
        <li key={index} className={option === selectedOption ? 'selected' : ''} onClick={(e) => { onChangeFunction(e, option) }}>{option}</li>
    )

    return (
        <div className='sort-input'>
            <label>Sort</label>
            <ul id={id}>
                {optionsList}
            </ul>
        </div>
    );
}

export default SortInput;