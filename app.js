chrome.runtime.onMessage.addListener(({ action }) => {
  if (action === 'add') {
    const selection = processSelection();
    console.log('selection:', selection);

    const panel = document.querySelector('#lexis-panel');
    panel.className = 'open';
    const word = panel.querySelector('#title strong');
    word.innerHTML = selection.word;
  }
});
