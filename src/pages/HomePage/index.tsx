import { Container, Section } from './styles';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';
import { Footer } from 'components/Footer';
import { useHistory } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';
import { Header } from 'components/Header';
import { useCallback, useState } from 'react';

import * as yup from 'yup';
import { useInputStates } from 'utils/useInputStates';
import { Input } from 'components/Input';
import { InputStyles } from 'components/Input/styles';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { useFormError } from 'errors/useFormError';
import { createUserSession } from 'services/userServices';
import { CreateUserSessionData } from 'types/entities/operations/user/CreateUserSessionData';
import { useAuth } from 'hooks/auth';
import { AxiosError } from 'axios';

export const HomePage: React.FC = () => {
  const history = useHistory();

  const { setUserLocalData } = useAuth();
  const { handleFormError } = useFormError();

  const [searchCode, setSearchCode] = useState('');
  const emailStates = useInputStates('email');
  const passwordStates = useInputStates('password');

  const handleSubmitLogin = useCallback(async () => {
    const formStates = [emailStates, passwordStates];
    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Campo obrigatório')
        .email('Formato de e-mail inválido'),
      password: yup.string().required('Campo obrigatório'),
    });
    const formObject = generateFormObjectFromStates(formStates);

    try {
      await schema.validate(formObject, { abortEarly: false });
      const userData = await createUserSession(
        formObject as unknown as CreateUserSessionData,
      );
      setUserLocalData(userData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        handleFormError(error as Error | yup.ValidationError, formStates);
        return;
      }

      if (error instanceof AxiosError && error.response?.status === 400) {
        alert('Email e/ou senha incorretos!');
        return;
      }

      alert('Problema inesperado!');
    }
  }, [emailStates, handleFormError, passwordStates, setUserLocalData]);

  return (
    <Container>
      <Header />

      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Rastreie o que você está CONSUMINDO!</h2>

          <InputStyles
            value={searchCode}
            placeholder="Digite seu código"
            onChange={({ target: { value } }) => setSearchCode(value)}
          />
          <Button
            type="button"
            onClick={() => history.push(`/exposeBatch/${searchCode}`)}
          >
            Buscar
          </Button>
        </Section>

        <Section backgroundColor={palette.beige}>
          <h2>Faça seu login</h2>

          <Input states={emailStates} type="email" placeholder="Email" />
          <Input states={passwordStates} type="password" placeholder="Senha" />
          <Button
            id="sign-up"
            type="button"
            onClick={() => history.push(routesAddresses.signUp)}
          >
            Cadastre-se
          </Button>

          <Button
            type="button"
            backgroundColor={palette.pink}
            onClick={handleSubmitLogin}
          >
            Entrar
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
