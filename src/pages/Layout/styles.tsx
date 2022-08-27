import { Theme } from '@mui/material/styles';
import styled from 'styled-components';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

type AppBarProps = {
  open: boolean;
  theme: Theme;
};
const drawerWidth = 248;

export const AppBar = styled(MuiAppBar)<AppBarProps>`
  box-shadow: none;
  transition: ${({ theme, open }) =>
    theme.transitions.create(['margin', 'width'], {
      easing: open
        ? theme.transitions.easing.sharp
        : theme.transitions.easing.easeOut,
      duration: open
        ? theme.transitions.duration.leavingScreen
        : theme.transitions.duration.enteringScreen,
    })};
  width: ${({ open }) => (open ? 'calc(100% - 240px)' : '100% ')};
  margin-left: ${({ open }) => (open ? '240px' : '0px')};
`;
export const Main = styled('main')<AppBarProps>`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)};
  margin-left: ${({ open }) => (open ? '0px' : '-' + drawerWidth + 'px')};
  transition: ${({ theme, open }) =>
    theme.transitions.create('margin', {
      easing: open
        ? theme.transitions.easing.sharp
        : theme.transitions.easing.easeOu,
      duration: open
        ? theme.transitions.duration.leavingScreen
        : theme.transitions.duration.enteringScreen,
    })};
`;
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
