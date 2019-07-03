let panel = document.createElement('div');
panel.id = 'lexis-panel';

let title = document.createElement('span');
title.id = 'title';
title.innerHTML = '&quot;<strong></strong>&quot; added.'

let dismissButton = document.createElement('button');
dismissButton.type = 'button';
dismissButton.innerText = 'Dismiss';
dismissButton.onclick = () => {
    panel.className = '';
};

let dictionaryButton = document.createElement('button');
dictionaryButton.className = 'primary';
dictionaryButton.type = 'button';
dictionaryButton.innerText = 'Go to Dictionary';
dictionaryButton.onclick = () => {
    chrome.runtime.sendMessage({ action: 'navigate' });
};

panel.appendChild(title);
panel.appendChild(dismissButton);
panel.appendChild(dictionaryButton);

document.body.appendChild(panel);
