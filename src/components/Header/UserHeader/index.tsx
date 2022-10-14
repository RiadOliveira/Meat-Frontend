import { Container, HeaderBar, HeaderToolsBar } from './styles';
import logoMeat from 'assets/img/logoMeat.svg';
import returnArrow from 'assets/img/returnArrow.svg';
import iconUser from 'assets/img/iconUser.svg';
import { routesAddresses } from 'routes/routesAddresses';
import { useHistory } from 'react-router-dom';

export const UserHeader: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <button
        id="return-arrow"
        type="button"
        onClick={() => history.push(routesAddresses.homePage)}
      >
        <img src={returnArrow} alt="Voltar" />
      </button>

      <HeaderBar>
        <div id="logo">
          <img id="logo-meat" src={logoMeat} alt="Logo Meat" />
        </div>
        <HeaderToolsBar>
          <button id="user-options-button" type="button">
            <img src={iconUser} alt="Icone do usuario"></img>
            <div>
              <span id="user-name">Mari Fernandes</span>

              <h2 id="user-role">Responsável</h2>
            </div>
          </button>
          <div id="tools-button">
            <button
              id="batch-button"
              onClick={() => history.push(routesAddresses.batch)}
            >
              Lotes
            </button>
            <button
              id="member-button"
              onClick={() => history.push(routesAddresses.batch)}
            >
              Membros
            </button>
          </div>
        </HeaderToolsBar>
      </HeaderBar>
    </Container>
  );
};
