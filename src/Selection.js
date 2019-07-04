import React from 'react';

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: []
        };

        // eslint-disable-next-line no-undef
        chrome.storage.sync.get('selections', ({ selections }) => {
            if (selections) {
                this.setState({ selections });
            }
        });
    }

    render() {
        const selections = this.state.selections;

        return (
            <div id="selections">
                <ul>
                    {selections.map((selection) =>
                        <li>
                            <h1>{selection.word}</h1>
                            <h3>{selection.context}</h3>
                        </li>
                    )}
                </ul>
                {selections.length === 0 &&
                    <h1>There are no selections</h1>
                }
            </div>
        );
    }
}

export default Selection;
