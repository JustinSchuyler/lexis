chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'add',
        title: 'Add \'%s\' to Lexis',
        type: 'normal',
        contexts: [ 'selection' ]
    });
});

chrome.contextMenus.onClicked.addListener((item) => {
    chrome.tabs.query({ active: true , currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'add' });
    });
});

chrome.runtime.onMessage.addListener(({ action }) => {
    if (action === 'navigate') {
        chrome.tabs.create({ url: chrome.runtime.getURL('landing.html') });
    }
});

chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL('landing.html') });
});
