import {
  AdminPanelSettings,
  Grading,
  ListAlt,
  People,
} from '@mui/icons-material';
import { ReactElement } from 'react';

export type MenuItem = {
  title: string;
  icon: ReactElement;
  path: string;
  subMenu?: boolean;
  subMenuItems?: Array<{ title: string; path: string }>;
};

export const menuList: MenuItem[] = [
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
];
