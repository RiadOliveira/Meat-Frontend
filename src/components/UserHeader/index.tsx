//import { Container, HeaderBar, HeaderToolsBar, ToolsBarButton, UserOptionsButton } from './styles';
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

interface PageBatch {
  pageBatch?: boolean;
}

export const UserHeader: React.FC<PageBatch> = ({ pageBatch }) => {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      {/* <Modal isVisible={isModalVisible}>
        <UserOptions handleCancel={() => setIsModalVisible(false)} />
      </Modal> */}
      <button id="return-arrow" type="button" onClick={history.goBack}>
        <img src={returnArrow} alt="Voltar" />
      </button>

      <HeaderBar>
        <div id="logo">
          <img id="logo-meat" src={logoMeat} alt="Logo Meat" />
        </div>
        <HeaderToolsBar>
          <UserButton
            type="button"
            onClick={() => setIsVisible(isVisible => !isVisible)}
          >
            <img src={iconUser} alt="Icone do usuario"></img>
            <div>
              <span id="user-name">Mari Fernandez</span>

              <h2 id="user-role">Responsável</h2>
            </div>
            <UserOptions isVisible={isVisible}>
              <button>Trocar Senha</button>
              <button id="logout">Sair</button>
            </UserOptions>
          </UserButton>

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
