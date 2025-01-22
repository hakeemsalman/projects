import React from 'react';
import { AppBar, Toolbar, Box, TextField, Button } from '@mui/material';

function MyHeader() {
  return (
    <AppBar position="sticky" color="primary" sx={{ width: '80%', ml: '20%' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <TextField 
            variant="outlined" 
            size="small" 
            placeholder="Search..." 
            sx={{ 
              backgroundColor: 'white', 
              borderRadius: 1, 
              width: '80%', 
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: 'transparent' },
                '&.Mui-focused fieldset': { borderColor: 'transparent' }
              }
            }} 
          />
        </Box>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#ccc', 
            '&:hover': { backgroundColor: '#e64a19' },
            width: '20%',
            height: 'auto'
          }}
        >
          Add Item
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default MyHeader;
