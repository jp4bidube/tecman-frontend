import {
  AdminPanelSettings,
  Build,
  Grading,
  ListAlt,
  People,
} from '@mui/icons-material';
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

type DrawerPanelProps = { open: boolean; handleDrawerClose: () => void };

export const DrawerPanel = ({ open, handleDrawerClose }: DrawerPanelProps) => {
  const navigate = useNavigate();
  const drawerWidth = 248;
  const theme = useTheme();
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
        {[
          { title: 'Clientes', icon: <People />, path: '/clients' },
          {
            title: 'Ordens de Serviço',
            icon: <Grading />,
            path: '/service-orders',
          },
          { title: 'Garantias', icon: <ListAlt />, path: '/guarantees' },
          {
            title: 'Administração',
            icon: <AdminPanelSettings />,
            path: '/',
            subMenu: true,
            subMenuItems: [
              { title: 'Usuários', path: '/users' },
              { title: 'Técnicos', path: '/employees' },
            ],
          },
        ].map((item, index) => {
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
                onClick={() => navigate(item.path)}
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
