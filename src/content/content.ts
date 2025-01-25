function extractMedia() {
  const mediaFiles = {
    images: [] as string[],
    audio: [] as string[],
    video: [] as string[]
  };

  // 이미지 추출
  document.querySelectorAll('img').forEach(img => {
    if (typeof img.src === 'string') {
      mediaFiles.images.push(img.src);
    }
  });

  // 오디오 추출
  document.querySelectorAll('audio').forEach(audio => {
    if (typeof audio.src === 'string') {
      mediaFiles.audio.push(audio.src);
    }
  });

  // 비디오 추출
  document.querySelectorAll('video').forEach(video => {
    if (typeof video.src === 'string') {
      mediaFiles.video.push(video.src);
    }
  });

  // 추가적으로 source 태그 확인
  document.querySelectorAll('source').forEach(source => {
    const type = source.type;
    if (type.startsWith('audio/')) {
      if (typeof source.src === 'string') {
        mediaFiles.audio.push(source.src);
      }
    } else if (type.startsWith('video/')) {
      if (typeof source.src === 'string') {
        mediaFiles.video.push(source.src);
      }
    }
  });

  return mediaFiles;
}

// 결과를 background 스크립트로 전송
chrome.runtime.sendMessage({action: "getMedia", media: extractMedia()});