import { Box, Divider } from '@mui/material';
import { CurrentUrlDisplay } from '../../feature/ShowCurrentUrl/CurrentUrlDisplay';

export const HomeScreen = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" rowGap={6}>
      <Box p={4} pb={0}>
        <CurrentUrlDisplay />
      </Box>
      <Divider />
      <Box px={4}>Hello world!</Box>
    </Box>
  );
};
