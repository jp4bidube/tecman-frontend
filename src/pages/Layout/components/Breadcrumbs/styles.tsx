import { Box } from '@mui/material/';
import { emphasize } from '@mui/material/styles';
import styled from 'styled-components';

export const BreadcrumbItem = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.text.primary};

  & svg {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-right: 0.6rem;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: ${({ theme }) =>
      emphasize(theme.palette.grey[100], 0.06)};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.shadows[1]};
    background-color: ${({ theme }) =>
      emphasize(theme.palette.grey[100], 0.12)};
  }
`;
