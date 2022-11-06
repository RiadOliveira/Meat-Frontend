import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { useInputStates } from 'utils/useInputStates';
import { Container } from './styles';

interface ChangePasswordModalProps {
  handleCancel: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  handleCancel,
}) => {
  const passwordStates = useInputStates('password');
  const confirmPasswordStates = useInputStates('confirmPassword');

  return (
    <Container>
      <span>Insira sua nova senha</span>
      <span id="subtitle">(Deve conter no mínimo 8 dígitos)</span>
      <form>
        <FormField states={passwordStates} type="password" label="Nova Senha" />
        <FormField
          states={confirmPasswordStates}
          type="password"
          label="Confirme a Senha"
        />
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
