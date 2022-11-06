import { Container, Section } from './styles';
import { palette } from 'assets/colors/palette';
import { Footer } from 'components/Footer';
import { Button } from 'components/Button/styles';
import { Header } from 'components/Header';
import { InputStyles } from 'components/Input/styles';

export const SignUpPage: React.FC = () => {
  return (
    <Container>
      <Header hasArrow />
      <main>
        <Section backgroundColor={palette.blueLow}>
          <h2>Cadastre o Responsável</h2>

          <InputStyles placeholder="Nome" />
          <InputStyles placeholder="Email" />
          <InputStyles type="password" placeholder="Senha" />
          <InputStyles type="password" placeholder="Confirme a senha" />
        </Section>

        <Section id="company" backgroundColor={palette.beige}>
          <h2>Cadastre a Empresa</h2>

          <InputStyles placeholder="Nome" />
          <InputStyles placeholder="CNPJ" />
          <Button type="button" backgroundColor={palette.pink}>
            Cadastrar
          </Button>
        </Section>
      </main>

      <Footer />
    </Container>
  );
};
