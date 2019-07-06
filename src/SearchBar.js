import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
        const searchValue = event.target.value;
        this.setState({ searchValue });
        this.props.onSearchChange(searchValue);
    }

    handleClear() {
        const searchValue = '';
        this.setState({ searchValue });
        this.props.onSearchChange(searchValue);
    }

    render() {
        return (
            <header className="search-bar">
                <div>
                    <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
                    <button type="button" onClick={this.handleClear}>Clear</button>
                </div>
                <span>Showing {this.props.countShown} of {this.props.countTotal}</span>
            </header>
        );
    }
}

export default SearchBar;
