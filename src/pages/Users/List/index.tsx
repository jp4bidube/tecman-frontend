import { useEffect } from 'react';

import { Box, Grid, Paper, useTheme } from '@mui/material/';
import useStore from '@/store';
import { userResource } from '@/Utils/breacrumbResources';

export const Users = () => {
  const store = useStore();
  const theme = useTheme();

  useEffect(() => {
    store.setNewBreadcrumbs({
      name: userResource.title,
      path: userResource.path,
      icon: userResource.icon,
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
        <Grid item bgcolor={theme.palette.grey[100]}>
          <h1>user</h1>
        </Grid>
      </Paper>
    </Box>
  );
};
