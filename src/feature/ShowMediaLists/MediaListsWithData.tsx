import { Box } from '@mui/material';
import { MediaList } from '../../entities/Media/MediaList/MediaList';
import { useState } from 'react';
import { MediaFiles } from '../../content/Media.content';
import { MEDIA_TYPE } from '../../entities/Media/MediaType/MediaType.constant';
import { MediaType } from '../../entities/Media/MediaType/MediaType';

export const MediaListsWithData = () => {
  const [media, setMedia] = useState<MediaFiles>();

  chrome.runtime.sendMessage({ action: 'getMedia' }, (request) => {
    if (request) {
      setMedia(request);
    }
  });

  const handleClickImage = (type: MediaType, url: string) => {
    if (type === MEDIA_TYPE.IMAGE) {
      chrome.runtime.sendMessage({
        action: 'download',
        url,
      });
    }
  };

  const handleClickAllDownload = (urls: string[]) => {
    urls.forEach((url) => {
      chrome.runtime.sendMessage({
        action: 'download',
        url,
      });
    });
  };

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      {media?.audio && (
        <MediaList
          label="Audio"
          items={media.audio}
          type={MEDIA_TYPE.SOUND}
          onClickMedia={() => {}}
          onClickAllDownload={handleClickAllDownload}
        />
      )}
      {media?.images && (
        <MediaList
          label="Images"
          items={media.images}
          type={MEDIA_TYPE.IMAGE}
          onClickMedia={handleClickImage}
          onClickAllDownload={handleClickAllDownload}
        />
      )}
      {media?.video && (
        <MediaList
          label="Video"
          items={media.video}
          type={MEDIA_TYPE.VIDEO}
          onClickMedia={() => {}}
          onClickAllDownload={handleClickAllDownload}
        />
      )}
    </Box>
  );
};
