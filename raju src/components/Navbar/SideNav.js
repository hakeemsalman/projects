import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const SideNavContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '20%',
  height: '100%',
  backgroundColor: theme.palette.grey[400],
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(0),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  margin: theme.spacing(1, 0),
  textAlign: 'left',
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: '#000000',
  },
}));

function SideNav() {
  return (
    <SideNavContainer>
     <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h5" color='primary' gutterBottom sx={{fontWeight: 600, padding: '10px 0px', fontFamily:' cursive',}}>
        Visit locations
      </Typography>
    </Box>
      <NavButton component={NavLink} to="/" exact>Home</NavButton>
      <NavButton component={NavLink} to="/added-locations">Added locations</NavButton>
      <NavButton>Total locations</NavButton>
    </SideNavContainer>
  );
}

export default SideNav;
