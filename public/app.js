const initialState = { selections: [] };
chrome.storage.sync.set(initialState);

chrome.runtime.onMessage.addListener(({ action }) => {
  if (action === 'add') {
    const selection = processSelection();
    console.log('selection:', selection);

    chrome.storage.sync.get('selections', ({ selections }) => {
      if (selections) {
        const newState = [selection, ...selections];
        chrome.storage.sync.set({ selections: newState });
      }
    });

    const panel = document.querySelector('#lexis-panel');
    panel.className = 'open';
    const word = panel.querySelector('#title strong');
    word.innerHTML = selection.word;
  }
});
