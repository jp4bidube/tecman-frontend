import { useEffect } from 'react';
import useStore from '../../store';
import PersonIcon from '@mui/icons-material/Person';

export const ServiceOrders: React.FC = () => {
  const store = useStore();
  useEffect(() => {
    store.setNewBreadcrumbs({
      name: 'Users',
      path: '/users',
      icon: <PersonIcon />,
    });
  }, []);
  return <h1>Ordens de serviço</h1>;
};
