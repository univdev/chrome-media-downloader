export function sendCurrentUrl() {
  function getCurrentUrl() {
    return window.location.href;
  }

  chrome.runtime.sendMessage({
    action: 'sendCurrentUrl',
    media: getCurrentUrl(),
  });
}
