import iconPortion from 'assets/img/iconPortion.svg';
import close from 'assets/img/close.svg';

import * as yup from 'yup';
import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import { useInputStates } from 'utils/useInputStates';
import { useCallback, useEffect } from 'react';
import { CreatePortionData } from 'types/entities/operations/portion/CreatePortionData';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { useFormError } from 'errors/useFormError';
import { UpdatePortionData } from 'types/entities/operations/portion/UpdatePortionData';
import { IPortion } from 'types/entities/IPortion';

interface HandlePortionModalProps {
  portionToChange?: IPortion;
  handleCreatePortion: (
    portion: Omit<CreatePortionData, 'userId' | 'batchId'>,
  ) => Promise<void>;
  handleUpdatePortion: (
    portionId: string,
    portion: Omit<UpdatePortionData, 'userId'>,
  ) => Promise<void>;
  handleCloseModal: () => void;
}

export const HandlePortionModal: React.FC<HandlePortionModalProps> = ({
  portionToChange,
  handleCreatePortion,
  handleUpdatePortion,
  handleCloseModal,
}) => {
  const { handleFormError } = useFormError();
  const isUpdateModal = !!portionToChange;

  const nameStates = useInputStates('name');
  const portionBatchStates = useInputStates('portionBatch');

  useEffect(() => {
    nameStates.mainState.setFunction(portionToChange?.name ?? '');
    portionBatchStates.mainState.setFunction(
      portionToChange?.portionBatch ?? '',
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portionToChange]);

  const handleSubmit = useCallback(async () => {
    const formStates = [nameStates, portionBatchStates];
    const formObject = generateFormObjectFromStates(
      formStates,
    ) as unknown as UpdatePortionData;

    const schema = yup.object().shape({
      name: yupRequiredStringField,
      portionBatch: yupRequiredStringField,
    });

    try {
      await schema.validate(formObject, { abortEarly: false });

      if (isUpdateModal) {
        await handleUpdatePortion(portionToChange.id, {
          ...portionToChange,
          ...formObject,
        });
      } else await handleCreatePortion(formObject);

      handleCloseModal();
      formStates.forEach(({ mainState: { setFunction } }) => setFunction(''));
    } catch (error) {
      handleFormError(error as yup.ValidationError, formStates);
    }
  }, [
    handleCloseModal,
    handleCreatePortion,
    handleFormError,
    handleUpdatePortion,
    isUpdateModal,
    nameStates,
    portionBatchStates,
    portionToChange,
  ]);

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>

      <div id="header">
        <img id="image" src={iconPortion} alt="Ícone Ração" />
        <span id="title">{isUpdateModal ? 'Editar' : 'Adicionar'} Ração</span>
      </div>

      <form>
        <FormField states={nameStates} label="Nome" />
        <FormField states={portionBatchStates} label="Lote Ração" />
        <div id="in-line">
          <Button
            type="button"
            backgroundColor={palette.pink}
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button type="button" onClick={handleSubmit}>
            {isUpdateModal ? 'Atualizar' : 'Adicionar'}
          </Button>
        </div>
      </form>
    </Container>
  );
};
