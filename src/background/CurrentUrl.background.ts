export const initializeCurrentUrl = () => {
  let currentUrl = '';

  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'sendCurrentUrl') {
      currentUrl = request.currentUrl;
    }
  });

  chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.action === 'getCurrentUrl') {
      sendResponse(currentUrl);
    }
  });
};
