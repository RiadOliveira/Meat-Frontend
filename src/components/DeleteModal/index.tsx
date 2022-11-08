import { Container } from './styles';
import iconDelete from 'assets/img/iconDelete.svg';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';

interface DeleteModalProps {
  handleDelete: () => Promise<void>;
  handleCloseModal: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  handleDelete,
  handleCloseModal,
}) => {
  return (
    <Container>
      <div>
        <img src={iconDelete} alt="Ícone Deletar"></img>
        <span>Tem certeza que deseja excluir?</span>
      </div>
      <div>
        <Button type="button" onClick={handleCloseModal}>
          Cancelar
        </Button>
        <Button
          type="button"
          backgroundColor={palette.pink}
          onClick={handleDelete}
        >
          Excluir
        </Button>
      </div>
    </Container>
  );
};
