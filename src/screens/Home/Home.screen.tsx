import { Box, Divider } from '@mui/material';
import { CurrentUrlDisplay } from '../../feature/ShowCurrentUrl/CurrentUrlDisplay';
import { MediaListsWithData } from '../../feature/ShowMediaLists/MediaListsWithData';

export const HomeScreen = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" rowGap={6}>
      <Box p={4} pb={0}>
        <CurrentUrlDisplay />
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" rowGap={4} width="100%" px={4}>
        <MediaListsWithData />
      </Box>
    </Box>
  );
};
