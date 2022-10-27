import { Container } from './styles';
import { UserHeader } from 'components/Header/UserHeader';
import { Button } from 'components/Button/styles';
import iconMember from 'assets/img/iconMember.svg';
import { useHistory } from 'react-router-dom';

export const MembersPage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <UserHeader/>
      <main>
        <Button id="new-member">
          <img src={iconMember} alt="Icone Membro"/>
          Novo Membro
        </Button>
      </main>
    </Container>
  );
};
