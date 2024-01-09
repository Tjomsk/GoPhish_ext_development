const selectedUrlElement = document.getElementById('selectedUrl');
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'url') {
    selectedUrlElement.textContent = message.url;
  }
});
