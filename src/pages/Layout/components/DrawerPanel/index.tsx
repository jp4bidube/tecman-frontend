import { Build } from '@mui/icons-material';
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
import useStore from '../../../../store';

type DrawerPanelProps = { open: boolean; handleDrawerClose: () => void };

export const DrawerPanel = ({ open, handleDrawerClose }: DrawerPanelProps) => {
  const store = useStore();
  const navigate = useNavigate();
  const drawerWidth = 248;
  const theme = useTheme();

  const handleClick = (item: MenuItem) => {
    store.setNewBreadcrumbs({
      name: item.title,
      path: item.path,
      icon: item.icon,
    });
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
          <Build
            color="primary"
            fontSize="large"
            sx={{ transform: 'rotate(90deg)' }}
          />
          <Typography variant="h4" color="primary" ml={1}>
            TEC MAN
          </Typography>
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
