import { Container, Section } from './styles';
import { palette } from 'assets/colors/palette';
import { Footer } from 'components/Footer';
import { Input } from 'components/Input/styles';
import { Button } from 'components/Button/styles';

export const SignUpPage: React.FC = () => {
  return (
    <Container>
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Faça seu login</h2>

          <Input placeholder="Email"></Input>
          <Input type="password" placeholder="Senha"></Input>
          <Button type="submit">Entrar</Button>
        </Section>

        <Section id="sign-up" backgroundColor={palette.background}>
          <h2>Cadastre-se</h2>

          <Input placeholder="Nome"></Input>
          <Input placeholder="Email"></Input>
          <Input type="password" placeholder="Senha"></Input>
          <Input type="password" placeholder="Confirme a senha"></Input>

          <Button
            type="button"
            backgroundColor={palette.pinkLow}
            hoverColor={palette.pinkHigh}
          >
            Cadastrar
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
