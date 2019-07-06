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

    render() {
        const context = (this.state.open) ? this.props.selection.context : this.props.selection.sentence;

        return (
            <li className="selection" onClick={this.handleClick}>
                <h2><a href={this.props.selection.url} target="_blank" rel="noopener noreferrer">{this.props.selection.word}</a></h2>
                <div><i className="material-icons">keyboard_arrow_right</i>{context}</div>
            </li>
        );
    }
}

export default Selection;
