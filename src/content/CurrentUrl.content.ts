export function sendCurrentUrl() {
  chrome.runtime.sendMessage({
    action: 'sendCurrentUrl',
    media: window.location.href,
  });
}
