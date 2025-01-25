import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

export type AppContainerProps = {
  children: ReactNode;
};

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={480}
      height={600}
      overflow="auto"
      sx={{ backgroundColor: 'background.paper' }}
    >
      {children}
    </Box>
  );
};
