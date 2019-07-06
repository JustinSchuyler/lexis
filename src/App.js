import React from 'react';
import data from './test-data';
import SearchBar from './SearchBar';
import Selections from './Selections';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selections: data
    };

    // eslint-disable-next-line no-undef
    // chrome.storage.sync.get('selections', ({ selections }) => {
    //     if (selections) {
    //         this.setState({ selections });
    //     }
    // });

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(searchValue) {
    this.setState({ searchValue });
  }

  filter(selections, searchValue) {
    return selections.filter((selection) => {
      const lowerCaseWord = selection.word.toLowerCase();
      return !searchValue || lowerCaseWord.indexOf(searchValue) > -1;
    });
  }

  render() {
    const selections = this.filter(this.state.selections, this.state.searchValue);

    return (
      <div className="App">
        <SearchBar
          onSearchChange={this.handleSearchChange}
          countShown={selections.length}
          countTotal={this.state.selections.length}
        />
        <Selections selections={selections} />
      </div>
    );
  }
}

export default App;
