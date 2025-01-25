import { Box } from '@mui/material';
import { MediaType } from '../MediaType/MediaType';
import { match } from 'ts-pattern';
import { MEDIA_TYPE } from '../MediaType/MediaType.constant';

export type MediaItemProps = {
  type: MediaType;
  url: string;
  onClick: (type: MediaType, url: string) => void;
};

export const MediaItem = ({ type, url, onClick }: MediaItemProps) => {
  return (
    <Box
      role="button"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        backgroundColor: (theme) => theme.palette.grey[100],
        minWidth: 120,
        height: 64,
        cursor: 'pointer',
        overflow: 'hidden',
        boxShadow: 4,
      }}
      tabIndex={0}
      onClick={() => onClick(type, url)}
    >
      {match(type)
        .with(MEDIA_TYPE.VIDEO, () => (
          <video src={url} style={{ width: '100%', height: '100%' }} />
        ))
        .with(MEDIA_TYPE.IMAGE, () => (
          <img src={url} style={{ width: 'auto', height: '100%' }} />
        ))
        .with(MEDIA_TYPE.SOUND, () => (
          <audio src={url} style={{ width: '100%', height: '100%' }} />
        ))
        .exhaustive()}
    </Box>
  );
};
