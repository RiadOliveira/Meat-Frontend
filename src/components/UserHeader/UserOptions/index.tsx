import { Container, OptionButton, UserOptionsHeader } from './styles';
import iconUser from 'assets/img/iconUser.svg';

export const UserOptions: React.FC = () => {
  return (
    <Container>
      <main>
        <UserOptionsHeader>
          <img src={iconUser} alt="Icone do usuario"></img>
          <div>
            <span id="user-name">Mari Fernandez</span>

            <h2 id="user-role">Responsável</h2>
          </div>
        </UserOptionsHeader>
        <OptionButton>Trocar Senha</OptionButton>
        <OptionButton id="logout">Sair</OptionButton>
      </main>
    </Container>
  );
};
