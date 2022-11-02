import {
  Container,
  MembersHeader,
  MembersLine,
  MembersLineText,
  MembersTable,
} from './styles';
import { UserHeader } from 'components/UserHeader';
import { Button } from 'components/Button/styles';
import Modal from 'react-modal';
import iconMember from 'assets/img/iconMember.svg';
import iconEdit from 'assets/img/iconEdit.svg';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import iconUser from 'assets/img/iconUser.svg';

Modal.setAppElement('#root');

const HeaderInfo = {
  companyName: 'Carne Boa',
  producer: 'Zé Vaqueiro',
  producerAccountType: 'Responsável',
};

const Members = [
  {
    id: 1,
    name: 'Tarcisio',
    accountType: 'Veterinário',
  },
  {
    id: 2,
    name: 'Gustavo Lima',
    accountType: 'Nutricionista',
  },
  {
    id: 3,
    name: 'João Gomes',
    accountType: 'Veterinário',
  },
];

export const MembersPage: React.FC = () => {
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <UserHeader />
      <main>
        <Button id="new-member">
          <img src={iconMember} alt="Icone Membro" />
          Novo Membro
        </Button>
        <MembersTable>
          <MembersHeader>
            <span id="companyName">{HeaderInfo.companyName}</span>
          </MembersHeader>
          <MembersLine id="producer">
            <img src={iconUser} alt="Icone do usuario"></img>
            <MembersLineText>
              <span id="name">{HeaderInfo.producer}</span>
              <span id="accountType">{HeaderInfo.producerAccountType}</span>
            </MembersLineText>
          </MembersLine>
          {Members.map(({ id, name, accountType }) => (
            <MembersLine key={id}>
              <div id="member">
                <img src={iconUser} alt="Icone do usuario"></img>
                <MembersLineText>
                  <span id="name">{name}</span>
                  <span id="accountType">{accountType}</span>
                </MembersLineText>
              </div>
              <button>
                <img src={iconEdit} alt="Icone Editar" />
              </button>
            </MembersLine>
          ))}
        </MembersTable>
      </main>
    </Container>
  );
};
