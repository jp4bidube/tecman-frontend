import HomeIcon from '@mui/icons-material/Home';
import { BreadcrumbsType } from '../types/breadcrumbs';
import create from 'zustand';

type Store = {
  breadcrumb: BreadcrumbsType;
  setNewBreadcrumbs: (breadcrumbs: BreadcrumbsType) => void;
};

const useStore = create<Store>((set) => ({
  breadcrumb: { name: 'Home', path: '/', icon: <HomeIcon /> },
  setNewBreadcrumbs(breadcrumb) {
    set((state) => ({
      ...state,
      breadcrumb,
    }));
  },
}));

export default useStore;
