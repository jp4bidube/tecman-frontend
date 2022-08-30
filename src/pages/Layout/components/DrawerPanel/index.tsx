import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material/';
import Drawer from '@mui/material/Drawer';
import { DrawerHeader } from '../../styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CollapseMenu } from './CollapseMenu';
import { useNavigate } from 'react-router-dom';
import { MenuItem, menuList } from './sideMenu';
import logo from '../../../../assets/logo.svg';

type DrawerPanelProps = { open: boolean; handleDrawerClose: () => void };

export const DrawerPanel = ({ open, handleDrawerClose }: DrawerPanelProps) => {
  const navigate = useNavigate();
  const drawerWidth = 248;
  const theme = useTheme();

  const handleClick = (item: MenuItem) => {
    navigate(item.path);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderTopRightRadius: '1rem',
          backgroundColor: theme.palette.background.paper,
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader style={{ justifyContent: 'space-between' }}>
        <Box display="flex" gap="2" alignItems="center">
          <img src={`${logo}`} width="100%" height="50" />
        </Box>

        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuList.map((item, index) => {
          return item.subMenu ? (
            <CollapseMenu
              key={index}
              index={index}
              item={item}
              subItems={item.subMenuItems}
            />
          ) : (
            <ListItem key={index}>
              <ListItemButton
                sx={{
                  justifyContent: 'space-between',
                  borderRadius: '8px',
                  ':hover': {
                    backgroundColor: theme.palette.grey[200],
                  },
                }}
                onClick={() => handleClick(item)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">{item.title}</Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
