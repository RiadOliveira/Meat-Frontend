import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { useCallback } from 'react';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { useInputStates } from 'utils/useInputStates';
import { Container } from './styles';

import * as yup from 'yup';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { useFormError } from 'errors/useFormError';
import { useAuth } from 'hooks/auth';
import { updateUser } from 'services/userServices';

interface ChangePasswordModalProps {
  handleCloseModal: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  handleCloseModal,
}) => {
  const { userData } = useAuth();
  const { handleFormError } = useFormError();

  const oldPasswordStates = useInputStates('oldPassword');
  const passwordStates = useInputStates('password');
  const confirmPasswordStates = useInputStates('confirmPassword');

  const handleChangePassword = useCallback(async () => {
    const formStates = [
      oldPasswordStates,
      passwordStates,
      confirmPasswordStates,
    ];

    const schema = yup.object().shape({
      oldPassword: yupRequiredStringField,
      password: yupRequiredStringField.min(8, 'Mínimo de 8 dígitos'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas inseridas não são iguais'),
    });
    const formObject = generateFormObjectFromStates(formStates);

    try {
      await schema.validate(formObject, { abortEarly: false });
      await updateUser(userData!.id, { ...userData!, ...formObject });

      handleCloseModal();
      formStates.forEach(({ mainState: { setFunction } }) => setFunction(''));
    } catch (error) {
      handleFormError(error as Error | yup.ValidationError, formStates);
    }
  }, [
    confirmPasswordStates,
    handleCloseModal,
    handleFormError,
    oldPasswordStates,
    passwordStates,
    userData,
  ]);

  return (
    <Container>
      <span>Insira sua nova senha</span>
      <span id="subtitle">(Deve conter no mínimo 8 dígitos)</span>
      <form>
        <FormField
          states={oldPasswordStates}
          type="password"
          label="Senha antiga"
        />
        <FormField states={passwordStates} type="password" label="Nova Senha" />
        <FormField
          states={confirmPasswordStates}
          type="password"
          label="Confirme a Senha"
        />
        <div id="buttons">
          <Button
            type="button"
            onClick={handleCloseModal}
            backgroundColor={palette.pink}
          >
            Cancelar
          </Button>
          <Button type="button" onClick={handleChangePassword}>
            Trocar Senha
          </Button>
        </div>
      </form>
    </Container>
  );
};
