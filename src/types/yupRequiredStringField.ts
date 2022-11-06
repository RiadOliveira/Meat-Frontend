import * as yup from 'yup';

export const yupRequiredStringField = yup
  .string()
  .required('Campo obrigatório');
