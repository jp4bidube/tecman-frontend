import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material/';
import { DrawerHeader, Main } from './styles';
import { Outlet } from 'react-router-dom';
import { NavTopBar } from './components/AppBar';
import { DrawerPanel } from './components/DrawerPanel';

export const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavTopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerPanel open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>
        <DrawerHeader />
        <Box display="flex" justifyContent="center">
          <Outlet />
        </Box>
      </Main>
    </Box>
  );
};
