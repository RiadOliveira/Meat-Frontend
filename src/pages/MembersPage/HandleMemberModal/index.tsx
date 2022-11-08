import newMember from 'assets/img/newMember.svg';
import iconUser from 'assets/img/iconUser.svg';
import * as yup from 'yup';

import { Container } from './styles';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { FormSelect } from 'components/FormField/FormSelect/styles';
import { CloseButton } from 'components/CloseButton';
import { useInputStates } from 'utils/useInputStates';
import { AccountType } from 'types/AccountType';
import { getBrazilianAccountType } from 'utils/getBrazilianAccountType';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';
import { useCallback, useEffect, useState } from 'react';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { useFormError } from 'errors/useFormError';
import { IUser } from 'types/entities/IUser';
import { UpdateMemberData } from 'types/entities/operations/company/UpdateMemberData';

interface HandleMemberModalProps {
  handleCreateMember: (memberData: IUser) => Promise<void>;
  handleUpdateMember: (memberData: UpdateMemberData) => Promise<void>;
  handleCloseModal: () => void;
  memberToChange?: UserWithoutPassword;
}

export const HandleMemberModal: React.FC<HandleMemberModalProps> = ({
  memberToChange,
  handleCreateMember,
  handleUpdateMember,
  handleCloseModal,
}) => {
  const { handleFormError } = useFormError();
  const isUpdateModal = !!memberToChange;

  const nameStates = useInputStates('name');
  const emailStates = useInputStates('email');
  const passwordStates = useInputStates('password');
  const confirmPasswordStates = useInputStates('confirmPassword');

  const [selectedAccountType, setSelectedAccountType] = useState<AccountType>(
    memberToChange ? memberToChange.accountType : AccountType.VETERINARIAN,
  );

  useEffect(() => {
    nameStates.mainState.setFunction(memberToChange?.name ?? '');
    emailStates.mainState.setFunction(memberToChange?.email ?? '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberToChange]);

  const handleSubmit = useCallback(async () => {
    const schema = yup.object().shape({
      name: yupRequiredStringField,
      email: yupRequiredStringField.email('Formato de e-mail inválido'),
      password: !isUpdateModal
        ? yupRequiredStringField.min(8, 'Mínimo de 8 dígitos')
        : yup.string(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas inseridas não são iguais'),
    });

    const formStates = [
      nameStates,
      emailStates,
      passwordStates,
      confirmPasswordStates,
    ];
    const formObject = {
      ...generateFormObjectFromStates(formStates),
      accountType: selectedAccountType,
    } as unknown;

    try {
      await schema.validate(formObject, { abortEarly: false });

      if (!memberToChange) await handleCreateMember(formObject as IUser);
      else {
        await handleUpdateMember({
          ...(formObject as UpdateMemberData),
          memberId: memberToChange.id,
        });
      }

      formStates.forEach(({ mainState: { setFunction } }) => setFunction(''));
    } catch (error) {
      handleFormError(error as Error | yup.ValidationError, formStates);
    }
  }, [
    confirmPasswordStates,
    emailStates,
    handleCreateMember,
    handleFormError,
    handleUpdateMember,
    isUpdateModal,
    memberToChange,
    nameStates,
    passwordStates,
    selectedAccountType,
  ]);

  return (
    <Container>
      <CloseButton handleClose={handleCloseModal} />
      <div id="header">
        <img
          src={memberToChange ? iconUser : newMember}
          alt="Ícone novo membro"
        />
        <span id="title">
          {memberToChange ? 'Atualizar membro' : 'Cadastre um novo membro'}
        </span>
      </div>

      <form>
        <FormField states={nameStates} label="Nome" />
        <FormField type="email" states={emailStates} label="Email" />
        <FormSelect>
          <select
            value={selectedAccountType}
            onChange={({ target: { value } }) =>
              setSelectedAccountType(Number(value))
            }
          >
            {Object.keys(AccountType).map(
              accountType =>
                !!Number(accountType) && (
                  <option key={accountType} value={accountType}>
                    {getBrazilianAccountType(Number(accountType))}
                  </option>
                ),
            )}
          </select>
          <label>Cargo</label>
        </FormSelect>

        <FormField
          type="password"
          states={passwordStates}
          label={isUpdateModal ? 'Nova senha' : 'Senha'}
        />
        <FormField
          type="password"
          states={confirmPasswordStates}
          label="Confirmar senha"
        />
      </form>
      <Button type="button" onClick={handleSubmit}>
        {memberToChange ? 'Atualizar' : 'Cadastrar'}
      </Button>
    </Container>
  );
};
