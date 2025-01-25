import { MediaFiles } from '../content/Media.content';

export const initializeMedia = () => {
  let mediaFiles: MediaFiles = {
    images: [],
    audio: [],
    video: [],
  };

  chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'sendMedia') {
      mediaFiles = request.media as MediaFiles;
    }
  });

  chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.action === 'getMedia') {
      sendResponse(mediaFiles);
    }
  });
};
