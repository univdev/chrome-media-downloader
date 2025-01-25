chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === 'getMedia') {
    console.log('Extracted media:', request.media);
    // 여기서 추출된 미디어 파일들을 처리할 수 있습니다.
    sendResponse(request.media);
  }
});
