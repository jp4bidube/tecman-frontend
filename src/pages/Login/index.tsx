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
  CardContent,
  useTheme,
} from '@mui/material';
import { AccountCircle, LockOpen } from '@mui/icons-material';
import logo from '../../assets/logo.svg';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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
            <Grid item xs={11} sm={9} md={7} lg={4} xl={3}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  borderTop: '1px solid rgba(145,158,171,0.24)',
                  borderTopRightRadius: '8px',
                  borderTopLeftRadius: '8px',
                  position: 'relative',
                  top: '8px',
                  zIndex: '0',
                }}
                padding={2}
              >
                <Grid item xs={9}>
                  <img src={`${logo}`} width="100%" height="90" />
                </Grid>
              </Grid>
              <Card
                variant="outlined"
                sx={{ zIndex: '10', position: 'relative' }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item xs={10} mt={3}>
                      <TextField
                        fullWidth
                        size="small"
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
                        size="small"
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
