import HomeIcon from '@mui/icons-material/Home';
import { BreadcrumbsType } from '../types/breadcrumbs';
import create from 'zustand';

type Store = {
  breadcrumbs: BreadcrumbsType[];
  setNewBreadcrumbs: (breadcrumbs: BreadcrumbsType) => void;
  concatBreadcrumbs: (breadcrumbs: BreadcrumbsType) => void;
};

const useStore = create<Store>((set) => ({
  breadcrumbs: [{ name: 'Home', path: '/', icon: <HomeIcon /> }],
  setNewBreadcrumbs(breadcrumbs) {
    set((state) => ({
      ...state,
      breadcrumbs: [breadcrumbs],
    }));
  },
  concatBreadcrumbs(breadcrumb) {
    set((state) => ({
      ...state,
      breadcrumbs: [...state.breadcrumbs, breadcrumb],
    }));
  },
}));

export default useStore;
