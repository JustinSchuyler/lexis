import React from 'react';
import './Selection.css';

class Selection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    emphasizeWord(word, context) {
        const index = context.indexOf(word);

        return (
            <span>
                {context.substr(0, index)}
                <b>{context.substr(index, word.length)}</b>
                {context.substr(index + word.length)}
            </span>
        );
    }

    render() {
        const context = (this.state.open) ? this.props.selection.context : this.props.selection.sentence;
        const formattedContext = this.emphasizeWord(this.props.selection.word, context);
        const liClasses = (this.state.open) ? 'selection open' : 'selection';
        const title = (this.state.open) ? 'Collapse context' : 'Click for context';

        return (
            <li className={liClasses} onClick={this.handleClick} title={title}>
                <h2>
                    <a href={this.props.selection.url} target="_blank" rel="noopener noreferrer">{this.props.selection.word}</a>
                    <a className="sub-link" href={'https://google.com/search?q=' + this.props.selection.word} target="_blank" rel="noopener noreferrer"><i className="material-icons">link</i> Google</a>
                </h2>
                <div>
                    <i className="material-icons">keyboard_arrow_right</i>
                    <span>{formattedContext}</span>
                </div>
            </li>
        );
    }
}

export default Selection;
