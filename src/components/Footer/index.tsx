import { Container } from './styles';
import logoGlobe from 'assets/img/logoGlobe.svg';
import nameMeat from 'assets/img/nameMeat.svg';
import github from 'assets/img/github.svg';

export const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <img src={logoGlobe} alt="Logo Meat Globo" />
        <div>
          <img src={nameMeat} alt="Nome MEAT" />
          <h3>
            Em um mundo que busca mais qualidade de vida, começa-se por meio de
            uma melhor alimentação, e para isso busca-se cada vez mais uma
            melhor qualidade em alimentos comprados. Esta plataforma se
            apresenta como uma alternativa de transparência para ser verificado
            a qualidade dos produtos de proveniência animal, por meio de um
            código toda a vida animal de que este produto derivou é apresentada,
            permitindo que o consumidor final possa ter uma melhor clareza e
            escolha o produto que mais lhe agrade.
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
    </Container>
  );
};
