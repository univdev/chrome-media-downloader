import Download from '@mui/icons-material/Download';
import { Box, Button, TextField } from '@mui/material';

export type UrlDisplayProps = {
  currentUrl: string;
  onDownload: () => void;
};

export const UrlDisplay = ({ currentUrl, onDownload }: UrlDisplayProps) => {
  return (
    <Box display="flex" alignItems="center" columnGap={4}>
      <TextField
        value={currentUrl}
        disabled
        fullWidth
        size="medium"
        label="Current URL"
      />
      <Button
        type="button"
        size="large"
        variant="contained"
        sx={{ height: 56 }}
        onClick={onDownload}
      >
        <Download />
      </Button>
    </Box>
  );
};
