chrome.storage.sync.get(['selection'], ({ selection }) => {
    console.log('result:', selection);
    let title = document.querySelector('#title');
    title.textContent = selection.word;
    let context = document.querySelector('#context');
    context.textContent = selection.context;
});
