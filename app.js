chrome.runtime.onMessage.addListener(({ action }) => {
  if (action === 'add') {
    const selection = processSelection();
    console.log('selection:', selection);
  }
});
