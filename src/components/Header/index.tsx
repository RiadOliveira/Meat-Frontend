import { Container } from './styles';
import logoMeat from 'assets/img/logoMeat.svg';
import setaVoltar from 'assets/img/setaVoltar.svg';
import { routesAddresses } from 'routes/routesAddresses';
import { useHistory } from 'react-router-dom';

interface HeaderProps {
  hasArrow?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ hasArrow }) => {
  const history = useHistory();

  return (
    <Container>
      {hasArrow && (
        <button
          id="return-arrow"
          type="button"
          onClick={() => history.push(routesAddresses.homePage)}
        >
          <img src={setaVoltar} alt="Voltar" />
        </button>
      )}

      <img src={logoMeat} alt="Logo Meat" />
    </Container>
  );
};