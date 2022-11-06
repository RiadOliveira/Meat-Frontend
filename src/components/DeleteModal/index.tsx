import { Container } from './styles';
import iconDelete from 'assets/img/iconDelete.svg';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';

interface DeleteModalProps {
  handleCloseModal: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  handleCloseModal,
}) => {
  return (
    <Container>
      <main>
        <div>
          <img src={iconDelete} alt="Ícone Deletar"></img>
          <span>Tem certeza que deseja excluir?</span>
        </div>
        <div>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button backgroundColor={palette.pink}>Excluir</Button>
        </div>
      </main>
    </Container>
  );
};
