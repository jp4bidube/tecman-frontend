import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import { AppBar } from '../../styles';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material/';
import { AccountCircle, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs';
type AppBarProps = {
  open: boolean;
  handleDrawerOpen: () => void;
};

export const NavTopBar = ({ open, handleDrawerOpen }: AppBarProps) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" open={open} color="default" enableColorOnDark>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Breadcrumbs />
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h6" noWrap component="div">
            Joyce
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Joyce" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <Typography textAlign="center" variant="body1" color="subtitle1">
                Perfil
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate('/login')}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <Typography textAlign="center" variant="body1" color="subtitle1">
                Sair
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
