chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'add',
        title: 'Add \'%s\' to Lexis',
        type: 'normal',
        contexts: [ 'selection' ]
    });
});

chrome.contextMenus.onClicked.addListener((item) => {
    chrome.tabs.create({ url: chrome.runtime.getURL('landing.html#' + item.selectionText) }); 
})

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL('landing.html') });
});
