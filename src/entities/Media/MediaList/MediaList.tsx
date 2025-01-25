import { Box, Typography } from '@mui/material';
import { MediaItem } from './MediaItem';
import { MediaType } from '../MediaType/MediaType';
import { FC } from 'react';
import { match } from 'ts-pattern';

export type MediaListProps = {
  label: string;
  type: MediaType;
  items: string[];
  onClickMedia: (type: MediaType, url: string) => void;
};

export const MediaList: FC<MediaListProps> = ({
  label,
  type,
  items,
  onClickMedia,
}) => {
  return (
    <Box display="flex" flexDirection="column" rowGap={4} width="100%">
      <Typography variant="body1" fontWeight="bold">
        {label}
      </Typography>
      <Box display="flex" columnGap={8} overflow="auto">
        {match(items)
          .with([], () => (
            <Box width="100%" py={2}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                No items
              </Typography>
            </Box>
          ))
          .otherwise(() =>
            items.map((item) => (
              <MediaItem
                key={item}
                type={type}
                url={item}
                onClick={onClickMedia}
              />
            )),
          )}
      </Box>
    </Box>
  );
};
