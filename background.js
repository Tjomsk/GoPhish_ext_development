chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'url') {
      const selectedUrl = message.url;
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.create({ url: 'popup.html', active: true, tabId: tabs[0].id });
      });
    }
  });
  