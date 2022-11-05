import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { Container } from './styles';

interface ChangePasswordModalProps {
  handleCancel: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  handleCancel,
}) => {
  return (
    <Container>
      <span>Insira sua nova senha</span>
      <span id="subtitle">(Deve conter no minimo 8 digitos)</span>
      <form>
        <FormField type="password" label="Nova Senha" />
        <FormField type="password" label="Confirme a Senha" />
        <div id="buttons">
          <Button
            type="button"
            onClick={handleCancel}
            backgroundColor={palette.pink}
          >
            Cancelar
          </Button>
          <Button type="submit">Trocar Senha</Button>
        </div>
      </form>
    </Container>
  );
};
