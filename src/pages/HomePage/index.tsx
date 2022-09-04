import { Container, Section } from './styles';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';
import { Input } from 'components/Input/styles';
import { Footer } from 'components/Footer';
import { useHistory } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';

export const HomePage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Rastreie o que você esta CONSUMINDO!</h2>

          <Input placeholder="Digite seu código"></Input>
          <Button type="submit">Buscar</Button>
        </Section>

        <Section backgroundColor={palette.background}>
          <h2>Faça seu Login</h2>
          <h2>ou cadastre-se</h2>

          <Button
            type="button"
            backgroundColor={palette.pinkLow}
            hoverColor={palette.pinkHigh}
            onClick={() => history.push(routesAddresses.signIn)}
          >
            Login
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
