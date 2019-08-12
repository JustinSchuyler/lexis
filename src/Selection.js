import React, { useState } from 'react';
import './Selection.css';

function Selection(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const emphasizeWord = (word, context) => {
        const index = context.indexOf(word);

        return (
            <span>
                {context.substr(0, index)}
                <b>{context.substr(index, word.length)}</b>
                {context.substr(index + word.length)}
            </span>
        );
    };

    const context = (open) ? props.selection.context : props.selection.sentence;
    const formattedContext = emphasizeWord(props.selection.word, context);
    const liClasses = (open) ? 'selection open' : 'selection';
    const title = (open) ? 'Collapse context' : 'Click for context';

    return (
        <li className={liClasses} onClick={handleClick} title={title}>
            <h2>
                <a href={props.selection.url} target="_blank" rel="noopener noreferrer">{props.selection.word}</a>
                <a className="sub-link" href={'https://google.com/search?q=' + props.selection.word} target="_blank" rel="noopener noreferrer"><i className="material-icons">link</i> Google</a>
            </h2>
            <div>
                <i className="material-icons">keyboard_arrow_right</i>
                <span>{formattedContext}</span>
            </div>
        </li>
    );
}

export default Selection;
