import { Container } from './styles';
import { Button } from 'components/Button/styles';
import iconThrash from 'assets/img/thrash.svg';

export const DeleteMemberConfirmation: React.FC = () => {
  return (
    <Container>
      <div id="labelInfo">
        <img src={iconThrash} alt="Ícone lixeira" />
        <label>Tem certeza que deseja excluir essa conta?</label>
      </div>
      <form>
        <div id="buttons">
          <Button type="submit">Cancelar</Button>
          <Button type="submit" id="deleteMemberConfirm">
            Excluir
          </Button>
        </div>
      </form>
    </Container>
  );
};
