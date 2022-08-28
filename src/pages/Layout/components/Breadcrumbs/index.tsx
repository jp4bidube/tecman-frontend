import Link, { LinkProps } from '@mui/material/Link';
import {
  Box,
  Breadcrumbs as MUiBreadcrumbs,
  Chip,
  Typography,
} from '@mui/material';
import useStore from '../../../../store';
import { BreadcrumbItem } from './styles';
interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

export const Breadcrumbs = () => {
  const store = useStore();

  return (
    <MUiBreadcrumbs aria-label="breadcrumb">
      {store.breadcrumbs.map((item, index) => (
        <BreadcrumbItem key={index}>
          {item.icon && item.icon}
          <Typography variant="subtitle1">{item.name}</Typography>
        </BreadcrumbItem>
      ))}
    </MUiBreadcrumbs>
  );
};
