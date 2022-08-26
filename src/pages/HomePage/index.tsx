import { Container, Footer, Header, Section } from './styles';
import { Button } from '../../components/Button/styles';
import { palette } from '../../assets/colors/palette';
import { Input } from '../../components/Input/styles';

import logoMeat from '../../assets/img/logoMeat.svg';
import logoGlobo from '../../assets/img/logoGlobo.svg';
import nameMeat from '../../assets/img/nameMeat.svg';
import github from '../../assets/img/github.svg';

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoMeat} alt="Logo Meat" />
      </Header>
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Rastreie o que você esta CONSUMINDO!</h2>
          <Input type="text" placeholder="Digite seu código"></Input>
          <Button type="submit">Buscar</Button>
        </Section>
        <Section backgroundColor={palette.background}>
          <h2>Faça seu Login</h2>
          <h2>ou cadastre-se</h2>
          <Button
            type="button"
            backgroundColor={palette.pinkLow}
            hoverColor={palette.pinkHigh}
          >
            Login
          </Button>
        </Section>
      </main>
      <Footer>
        <section>
          <img src={logoGlobo} alt="Logo Meat Globo" />
          <div>
            <img src={nameMeat} alt="Nome MEAT" />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </div>
        </section>
        <a
          href="https://github.com/RiadOliveira/Meat-Frontend.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Link para repositório" />
          <p>GitHub</p>
        </a>
      </Footer>
    </Container>
  );
};
