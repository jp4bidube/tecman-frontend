import { useFormik } from 'formik';

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, values, ...action } = formik;

  return <h1>login</h1>;
};
