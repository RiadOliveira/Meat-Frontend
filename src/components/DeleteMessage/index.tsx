import { Container } from './styles';
import iconDelete from 'assets/img/iconDelete.svg';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';

interface DeleteMessageProps {
  handleCancel: () => void;
}

export const DeleteMessage: React.FC<DeleteMessageProps> = ({
  handleCancel,
}) => {
  return (
    <Container>
      <main>
        <div>
          <img src={iconDelete} alt="Icone Deletar"></img>
          <span>Tem certeza que deseja excluir?</span>
        </div>
        <div>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button backgroundColor={palette.pink}>Excluir</Button>
        </div>
      </main>
    </Container>
  );
};
