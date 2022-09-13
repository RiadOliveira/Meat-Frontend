import { Container } from './styles';
import logoMeat from 'assets/img/logoMeat.svg';
import { routesAddresses } from 'routes/routesAddresses';
import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <button
        type="button"
        onClick={() => history.push(routesAddresses.homePage)}
      >
        <img src={logoMeat} alt="Logo Meat" />
      </button>
    </Container>
  );
};
