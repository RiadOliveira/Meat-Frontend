import logoMeat from 'assets/img/logoMeat.svg';
import returnArrow from 'assets/img/returnArrow.svg';
import iconUser from 'assets/img/iconUser.svg';

import { palette } from 'assets/colors/palette';
import { routesAddresses } from 'routes/routesAddresses';
import { useHistory } from 'react-router-dom';
import {
  Container,
  HeaderBar,
  HeaderToolsBar,
  UserButton,
  ToolsBarButton,
  UserOptions,
} from './styles';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { ChangePasswordModal } from './ChangePasswordModal';
import { useAuth } from 'hooks/auth';
import { getBrazilianAccountType } from 'utils/getBrazilianAccountType';

interface PageBatch {
  pageBatch?: boolean;
}

export const UserHeader: React.FC<PageBatch> = ({ pageBatch }) => {
  const history = useHistory();
  const { userData, signOut } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Container>
      <Modal isVisible={isModalVisible}>
        <ChangePasswordModal handleCancel={() => setIsModalVisible(false)} />
      </Modal>

      <button id="return-arrow" type="button" onClick={history.goBack}>
        <img src={returnArrow} alt="Voltar" />
      </button>

      <HeaderBar>
        <div id="logo">
          <img id="logo-meat" src={logoMeat} alt="Logo Meat" />
        </div>
        <HeaderToolsBar>
          <div>
            <UserButton
              type="button"
              onClick={() => setIsVisible(isVisible => !isVisible)}
            >
              <img src={iconUser} alt="Ícone do usuario"></img>
              <div>
                <span id="user-name">{userData!.name}</span>
                <h2 id="user-role">
                  {getBrazilianAccountType(userData!.accountType)}
                </h2>
              </div>
            </UserButton>
            <UserOptions isVisible={isVisible}>
              <button onClick={() => setIsModalVisible(true)}>
                Trocar Senha
              </button>

              <button id="logout" onClick={signOut}>
                Sair
              </button>
            </UserOptions>
          </div>

          <div id="tools-button">
            {pageBatch ? (
              <ToolsBarButton
                id="batch-button"
                backgroundColor={palette.pinkLow}
                onClick={() => history.push(routesAddresses.batch)}
              >
                Lotes
              </ToolsBarButton>
            ) : (
              <ToolsBarButton
                id="batch-button"
                onClick={() => history.push(routesAddresses.batch)}
              >
                Lotes
              </ToolsBarButton>
            )}
            {pageBatch ? (
              <ToolsBarButton
                id="member-button"
                onClick={() => history.push(routesAddresses.members)}
              >
                Membros
              </ToolsBarButton>
            ) : (
              <ToolsBarButton
                id="member-button"
                backgroundColor={palette.pinkLow}
                onClick={() => history.push(routesAddresses.members)}
              >
                Membros
              </ToolsBarButton>
            )}
          </div>
        </HeaderToolsBar>
      </HeaderBar>
    </Container>
  );
};
