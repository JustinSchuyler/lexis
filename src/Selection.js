import React from 'react';

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: [],
            searchValue: null
        };

        // eslint-disable-next-line no-undef
        chrome.storage.sync.get('selections', ({ selections }) => {
            if (selections) {
                this.setState({ selections });
            }
        });
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        const selections = this.state.selections.filter((selection) => {
            const lowerCaseWord = selection.word.toLowerCase();
            const searchValue = this.state.searchValue;

            return !searchValue || lowerCaseWord.indexOf(searchValue) > -1;
        });

        return (
            <div id="selections">
                <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
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
