import { Container, OptionButton, UserOptionsHeader } from './styles';
import iconUser from 'assets/img/iconUser.svg';

interface UserOptionsProps {
  handleCancel: () => void;
}

export const UserOptions: React.FC<UserOptionsProps> = ({ handleCancel }) => {
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
