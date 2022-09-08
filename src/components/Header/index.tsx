import { Container } from './styles';
import logoMeat from 'assets/img/logoMeat.svg';
import { useHistory } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';

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
