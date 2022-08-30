import { useState } from 'react';
import useStore from '@/store';
import { useParams } from 'react-router-dom';
import { useEffectSuspension } from '@/Hooks/useEffectSuspension';
import { clientResource } from '@/Utils/breacrumbResources';
import {
  Typography,
  Box,
  useTheme,
  Paper,
  Tabs,
  Tab,
  Grid,
  TextField,
} from '@mui/material/';
import { TabPanel } from '@/Components/TabPanel';

export const UserOverview = () => {
  const store = useStore();
  const theme = useTheme();
  const params = useParams();

  useEffectSuspension(() => {
    store.setNewBreadcrumbs({
      name: clientResource.title,
      path: clientResource.path,
      icon: clientResource.icon,
      subhead: `Visão geral - ${params.id}`,
    });
  }, []);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box flexDirection="column" width="90%">
      <Paper variant="outlined" sx={{ marginBottom: '3rem', padding: '2rem' }}>
        <Grid container spacing="10">
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
        </Grid>
        <Grid container spacing="10" mt={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
        </Grid>
        <Grid container spacing="10" mt={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
        </Grid>
        <Grid container spacing="10" mt={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="username"
              name="username"
              label="Usuário"
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper
        variant="outlined"
        sx={{
          minHeight: 65,
          backgroundColor: theme.palette.background.neutral,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Endereço" />
          <Tab label="Perfil" />
        </Tabs>
      </Paper>
      <Paper
        variant="outlined"
        sx={{
          minHeight: 80,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
        }}
      >
        <TabPanel value={value} index={0}>
          Endereço
        </TabPanel>
        <TabPanel value={value} index={1}>
          Perfil
        </TabPanel>
      </Paper>
    </Box>
  );
};
