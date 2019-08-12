import React, { useState } from 'react';
import data from './test-data';
import SearchBar from './SearchBar';
import Selections from './Selections';

function App() {
  const [selections] = useState(data);
  const [filteredSelections, setFilteredSelections] = useState(data);

  // eslint-disable-next-line no-undef
  // chrome.storage.sync.get('selections', ({ selections }) => {
  //     if (selections) {
  //         this.setState({ selections });
  //     }
  // });

  const handleSearchChange = (searchValue) => {
    setFilteredSelections(selections.filter((selection) => {
      const lowerCaseWord = selection.word.toLowerCase();
      return !searchValue || lowerCaseWord.includes(searchValue);
    }));
  }

  return (
    <div className="App">
      <SearchBar
        onSearchChange={handleSearchChange}
        countShown={filteredSelections.length}
        countTotal={selections.length}
      />
      <Selections selections={filteredSelections} />
    </div>
  );
}

export default App;
