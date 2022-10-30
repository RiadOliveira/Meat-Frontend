import { Container, Section } from './styles';
import { palette } from 'assets/colors/palette';
import { Footer } from 'components/Footer';
import { Input } from 'components/Input/styles';
import { Button } from 'components/Button/styles';
import { Header } from 'components/Header';

export const SignUpPage: React.FC = () => {
  return (
    <Container>
      <Header hasArrow />
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Cadastre o Responsável</h2>

          <Input placeholder="Nome"></Input>
          <Input placeholder="Email"></Input>
          <Input type="password" placeholder="Senha"></Input>
          <Input type="password" placeholder="Confirme a senha"></Input>
        </Section>

        <Section id="company" backgroundColor={palette.beige}>
          <h2>Cadastre a Empresa</h2>

          <Input placeholder="Nome"></Input>
          <Input placeholder="CNPJ"></Input>
          <Button type="button" backgroundColor={palette.pink}>
            Cadastrar
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
