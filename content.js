chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === 'send-url') {
      const selectedUrl = info.linkUrl;
      chrome.runtime.sendMessage({ url: selectedUrl });
    }
  });
  