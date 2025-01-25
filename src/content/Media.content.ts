export type MediaFiles = {
  images: string[];
  audio: string[];
  video: string[];
};

export function sendMedia() {
  function extractMedia(): MediaFiles {
    const mediaFiles: MediaFiles = {
      images: [] as string[],
      audio: [] as string[],
      video: [] as string[],
    };

    document.querySelectorAll('*').forEach((element) => {
      const background = element.getAttribute('background-image');
      if (background) {
        mediaFiles.images.push(background.replace('url(', '').replace(')', ''));
      }
    });

    // 이미지 추출
    document.querySelectorAll('img').forEach((img) => {
      if (typeof img.src === 'string') {
        mediaFiles.images.push(img.src);
      }
    });

    // 오디오 추출
    document.querySelectorAll('audio').forEach((audio) => {
      if (typeof audio.src === 'string') {
        mediaFiles.audio.push(audio.src);
      }
    });

    // 비디오 추출
    document.querySelectorAll('video').forEach((video) => {
      if (typeof video.src === 'string') {
        mediaFiles.video.push(video.src);
      }
    });

    // 추가적으로 source 태그 확인
    document.querySelectorAll('source').forEach((source) => {
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

  chrome.runtime.sendMessage({ action: 'sendMedia', media: extractMedia() });
}
