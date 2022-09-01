import { Container } from './styles';
import logoMeat from '../../assets/img/logoMeat.svg';

export const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoMeat} alt="Logo Meat" />
    </Container>
  );
};
