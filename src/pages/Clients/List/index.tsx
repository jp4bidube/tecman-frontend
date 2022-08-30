import { useEffect } from 'react';

import { Box, Grid, Paper, useTheme } from '@mui/material/';
import useStore from '@/store';
import { clientResource } from '@/Utils/breacrumbResources';
import { useNavigate } from 'react-router-dom';

export const Clients = () => {
  const store = useStore();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    store.setNewBreadcrumbs({
      name: clientResource.title,
      path: clientResource.path,
      icon: clientResource.icon,
    });
  }, []);

  return (
    <Box flexDirection="column" width="90%">
      <Paper
        variant="outlined"
        sx={{
          minHeight: 80,
          backgroundColor: theme.palette.background.neutral,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      ></Paper>
      <Paper
        variant="outlined"
        sx={{
          minHeight: 80,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
        }}
      >
        <Grid item>
          <h1 onClick={() => navigate('joyce/overview')}>client table</h1>
        </Grid>
      </Paper>
    </Box>
  );
};
