import React from 'react';
import './Selections.css'
import Selection from './Selection';

function Selections(props) {
    const selections = props.selections.map((selection, index) => {
        return <Selection key={index} selection={selection} />;
    });

    return (
        <div className="selections">
            <ul>{selections}</ul>
            {props.selections.length === 0 &&
                <h2>There are no selections</h2>
            }
        </div>
    );
}

export default Selections;
