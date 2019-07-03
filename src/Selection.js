import React from 'react';

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            context: ''
        };

        // eslint-disable-next-line no-undef
        chrome.storage.sync.get(['selection'], ({ selection }) => {
            this.setState({
                word: selection.word,
                context: selection.context
            });
        });
    }

    render() {
        return (
            <div id="selection">
                <h1>{this.state.word}</h1>
                <h3>{this.state.context}</h3>
            </div>
        );
    }
}

export default Selection;
