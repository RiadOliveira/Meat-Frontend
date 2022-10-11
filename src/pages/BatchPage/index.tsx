import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button/styles';
import iconBatch from 'assets/img/iconBatch.svg';

export const BatchPage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <main>
        <Button>
          <img src={iconBatch} alt="Icone Lote" />
          Novo Lote
        </Button>
      </main>
    </Container>
  );
};
