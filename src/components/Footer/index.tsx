import { Container } from './styles';
import logoGlobo from '../../assets/img/logoGlobo.svg';
import nameMeat from '../../assets/img/nameMeat.svg';
import github from '../../assets/img/github.svg';

export const Footer: React.FC = () => {
  return (
    <Container>
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
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
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
