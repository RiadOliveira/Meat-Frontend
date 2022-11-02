import { Container } from './styles';
import iconDelete from 'assets/img/iconDelete.svg';
import { Button } from 'components/Button/styles';
import { palette } from 'assets/colors/palette';

export const DeleteMesage: React.FC = () => {
  return (
    <Container>
      <main>
        <div>
          <img src={iconDelete} alt="Icone Deletar"></img>
          <span>Tem certeza que deseja excluir?</span>
        </div>
        <div>
          <Button>Cancelar</Button>
          <Button backgroundColor={palette.pink}>Excluir</Button>
        </div>
      </main>
    </Container>
  );
};
