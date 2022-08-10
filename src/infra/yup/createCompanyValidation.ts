import * as Yup from 'yup';

export const createCompanySchema = Yup.object().shape({
  name: Yup.string().required().min(3),
  cnpj: Yup.string().required(),
});
