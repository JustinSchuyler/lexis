import React from 'react';
import data from './test-data';

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selections: data,
            searchValue: null
        };

        // eslint-disable-next-line no-undef
        // chrome.storage.sync.get('selections', ({ selections }) => {
        //     if (selections) {
        //         this.setState({ selections });
        //     }
        // });
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    handleClearSearch() {
        this.setState({ searchValue: '' });
    }

    render() {
        const selections = this.state.selections.filter((selection) => {
            const lowerCaseWord = selection.word.toLowerCase();
            const searchValue = this.state.searchValue;

            return !searchValue || lowerCaseWord.indexOf(searchValue) > -1;
        });

        return (
            <div id="selections">
                <header>
                    <div>
                        <input type="text" value={this.state.searchValue} onChange={this.handleSearchChange} />
                        <button type="button" onClick={this.handleClearSearch}>Clear</button>
                    </div>
                    <span>Showing {selections.length} of {this.state.selections.length}</span>
                </header>
                <ul>
                    {selections.map((selection) =>
                        <li>
                            <h1>{selection.word}</h1>
                            <h3><i class="material-icons">keyboard_arrow_right</i>{selection.sentence}</h3>
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
