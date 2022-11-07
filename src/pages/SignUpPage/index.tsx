import * as yup from 'yup';

import { mask } from 'remask';
import { Container, Section } from './styles';
import { palette } from 'assets/colors/palette';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button/styles';
import { Header } from 'components/Header';
import { useInputStates } from 'utils/useInputStates';
import { Input } from 'components/Input';
import { useCallback } from 'react';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { useFormError } from 'errors/useFormError';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { createCompany } from 'services/companiesServices';
import {
  CompanyCreationData,
  ProducerCreationData,
} from 'types/entities/operations/company/CreateCompanyData';
import { useHistory } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';

export const SignUpPage: React.FC = () => {
  const history = useHistory();
  const { handleFormError } = useFormError();

  const producerNameStates = useInputStates('name');
  const emailStates = useInputStates('email');
  const passwordStates = useInputStates('password');
  const confirmPasswordStates = useInputStates('confirmPassword');

  const companyNameStates = useInputStates('name');
  const cnpjStates = useInputStates('cnpj');

  const getProducerData = useCallback(async () => {
    const producerStates = [
      producerNameStates,
      emailStates,
      passwordStates,
      confirmPasswordStates,
    ];
    const producerObject = generateFormObjectFromStates(
      producerStates,
    ) as ProducerCreationData;

    const producerSchema = yup.object().shape({
      name: yupRequiredStringField,
      email: yupRequiredStringField.email('Formato de e-mail inválido'),
      password: yupRequiredStringField.min(8, 'Mínimo de 8 dígitos'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas inseridas não são iguais'),
    });

    try {
      await producerSchema.validate(producerObject, { abortEarly: false });
      return producerObject;
    } catch (error) {
      handleFormError(error as yup.ValidationError, producerStates);
      return null;
    }
  }, [
    confirmPasswordStates,
    emailStates,
    handleFormError,
    passwordStates,
    producerNameStates,
  ]);

  const getCompanyData = useCallback(async () => {
    const companyStates = [companyNameStates, cnpjStates];
    const companyObject = {
      ...generateFormObjectFromStates(companyStates),
      state: 'RN',
      city: 'Areia Branca',
    } as CompanyCreationData;

    const companySchema = yup.object().shape({
      name: yupRequiredStringField,
      cnpj: yupRequiredStringField.length(18, 'Formato de CNPJ inválido'),
      city: yupRequiredStringField,
      state: yupRequiredStringField,
    });

    try {
      await companySchema.validate(companyObject, { abortEarly: false });
      return companyObject;
    } catch (error) {
      handleFormError(error as yup.ValidationError, companyStates);
      return null;
    }
  }, [cnpjStates, companyNameStates, handleFormError]);

  const handleSubmit = useCallback(async () => {
    const producerData = await getProducerData();
    const companyData = await getCompanyData();
    if (producerData === null || companyData === null) return;

    try {
      await createCompany({ ...companyData, producer: producerData });
      history.push(routesAddresses.homePage);

      alert('Agora só basta fazer seu login para acessar o Meat!');
    } catch (error) {
      alert('Ocorreu um erro ao criar sua conta.');
    }
  }, [getCompanyData, getProducerData, history]);

  return (
    <Container>
      <Header hasArrow />
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Cadastre o Responsável</h2>

          <Input states={producerNameStates} placeholder="Nome" />
          <Input states={emailStates} placeholder="Email" />
          <Input states={passwordStates} type="password" placeholder="Senha" />
          <Input
            states={confirmPasswordStates}
            type="password"
            placeholder="Confirme a senha"
          />
        </Section>

        <Section id="company" backgroundColor={palette.beige}>
          <h2>Cadastre a Empresa</h2>

          <Input states={companyNameStates} placeholder="Nome" />
          <Input
            states={cnpjStates}
            minLength={18}
            maxLength={18}
            onChange={({ target: { value } }) =>
              cnpjStates.mainState.setFunction(
                mask(value, ['99.999.999/9999-99']),
              )
            }
            placeholder="CNPJ"
          />
          <Button
            type="button"
            backgroundColor={palette.pink}
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
