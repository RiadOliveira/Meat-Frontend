import { Container, Section, SearchInput } from './styles';
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
          <div>
            <button></button>
          </div>
          <h2>Rastreie o que você está CONSUMINDO!</h2>
          <SearchInput>
            <Input placeholder="Digite seu código"></Input>
            <Button type="submit">Buscar</Button>
          </SearchInput>
        </Section>

        <Section backgroundColor={palette.beige}>
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
