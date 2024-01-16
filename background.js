chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === 'send-url') {
      const selectedUrl = info.linkUrl;
      chrome.runtime.sendMessage({ url: selectedUrl });
    }
  });
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'url') {
      const selectedUrl = message.url;
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.create({ url: 'GoPhish.html', active: true, tabId: tabs[0].id });
      });
    }
  });
  