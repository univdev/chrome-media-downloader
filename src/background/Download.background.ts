export function initializeDownload() {
  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'download') {
      chrome.downloads.download({
        url: request.url,
        filename: request.filename,
      });
    }
  });
}
