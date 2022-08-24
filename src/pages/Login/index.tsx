import {
  Card,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { AccountCircle, LockOpen } from '@mui/icons-material';
import logo from '../../assets/logo.svg';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remenber: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/');
    },
  });
  const { values, errors, touched, ...action } = formik;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <form onSubmit={action.handleSubmit}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={11} md={7} lg={5} xl={3}>
              <Card variant="outlined">
                <Grid
                  container
                  spacing={5}
                  alignItems="center"
                  justifyContent="center"
                  paddingY={5}
                >
                  <Grid item xs={10} marginBottom={5}>
                    <img src={`${logo}`} width="100%" />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      id="username"
                      name="username"
                      label="Usuário"
                      value={values.username}
                      onChange={action.handleChange}
                      error={touched.username && Boolean(errors.username)}
                      helperText={touched.username && errors.username}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      id="password"
                      name="password"
                      type="password"
                      label="Senha"
                      onChange={action.handleChange}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOpen />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={10} marginTop={-4}>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="baseline"
                    >
                      <Grid item>
                        <FormControlLabel
                          id="remenber"
                          name="remenber"
                          onChange={action.handleChange}
                          control={<Checkbox checked={values.remenber} />}
                          label="Lembrar-me"
                        />
                      </Grid>
                      <Grid item>
                        <Typography>Esqueceu a senha?</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={10}>
                    <Box marginBottom={3}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="medium"
                      >
                        Entrar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
