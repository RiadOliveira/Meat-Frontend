import { Container, Section } from './styles';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';
import { Input } from 'components/Input/styles';
import { Footer } from 'components/Footer';
import { useHistory } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';
import { Header } from 'components/Header';

export const HomePage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Rastreie o que você está CONSUMINDO!</h2>

          <Input placeholder="Digite seu código"></Input>
          <Button type="submit">Buscar</Button>
        </Section>

        <Section backgroundColor={palette.background}>
          <h2>Faça seu login</h2>

          <Input placeholder="Email"></Input>
          <Input type="password" placeholder="Senha"></Input>
          <Button
            id="sign-up"
            type="button"
            onClick={() => history.push(routesAddresses.signUp)}
          >
            Cadastre-se
          </Button>

          <Button
            type="submit"
            backgroundColor={palette.pink}
            hoverColor={palette.pinkHigh}
            onClick={() => history.push(routesAddresses.batch)}
          >
            Entrar
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
