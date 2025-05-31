import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Summary({ selectedSidebarTab }) {
  return (
    <Box component="main" role="main" aria-labelledby="Summary" tabIndex={0}>
      <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: '1.125rem', fontFamily: 'Work Sans, sans-serif' }}>
        {selectedSidebarTab}
      </Typography>
      <Box sx={{ minHeight: 400, height: 400, width: 725, overflowY: 'auto',  borderRadius: 1 }}>
        <Typography aria-labelledby="Summary content yet to Receive" variant="subtitle1" component="div">[Summary content Yet to Receive.]</Typography>
      </Box>
    </Box>
  );
}
