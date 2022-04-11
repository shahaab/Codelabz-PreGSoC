import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box component="span" sx={{ p: 4, border: '1px solid grey', borderRadius: '10px' }}>
      <Button variant="contained" sx={{ width: '60%' }}>Save Profile Information</Button>
    </Box>
  );
}
