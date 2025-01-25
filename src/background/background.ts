import { initializeCurrentUrl } from './CurrentUrl.background';
import { initializeDownload } from './Download.background';
import { initializeMedia } from './Media.background';

initializeMedia();
initializeCurrentUrl();
initializeDownload();

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ['content.js'],
  });
});
