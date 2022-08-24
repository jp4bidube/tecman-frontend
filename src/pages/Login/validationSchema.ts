import * as yup from 'yup';

export const validationSchema = yup.object({
  username: yup.string().required('Usuário é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve conter ao menos 8 caracteres')
    .required('A senha é obrigatória'),
});
