import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as MUiBreadcrumbs, Typography } from '@mui/material';
import useStore from '../../../../store';
import { BreadcrumbItem } from './styles';
import { useNavigate } from 'react-router-dom';

export const Breadcrumbs = () => {
  const store = useStore();
  const navigate = useNavigate();

  const { name, path, icon, subhead } = store.breadcrumb;

  return (
    <MUiBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <BreadcrumbItem onClick={() => navigate(path ? path : '/')}>
        {icon && icon}
        <Typography variant="h6">{name}</Typography>
      </BreadcrumbItem>
      {subhead && (
        <BreadcrumbItem>
          <Typography variant="subtitle2">{subhead}</Typography>
        </BreadcrumbItem>
      )}
    </MUiBreadcrumbs>
  );
};
