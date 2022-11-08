import iconSlaughter from 'assets/img/iconSlaughter.svg';
import close from 'assets/img/close.svg';

import * as yup from 'yup';
import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import { useInputStates } from 'utils/useInputStates';
import { SlaughterForFindType } from 'types/entities/operations/slaughter/SlaughterForFindType';
import { CreateSlaughterData } from 'types/entities/operations/slaughter/CreateSlaughterData';
import { UpdateSlaughterData } from 'types/entities/operations/slaughter/UpdateSlaughterData';
import { useCallback, useEffect } from 'react';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { useFormError } from 'errors/useFormError';

interface HandleSlaughterModalProps {
  slaughter?: SlaughterForFindType;
  handleCreateSlaughter: (
    slaughter: Omit<CreateSlaughterData, 'userId' | 'batchId'>,
  ) => Promise<void>;
  handleUpdateSlaughter: (
    slaughterId: string,
    slaughter: Omit<UpdateSlaughterData, 'userId'>,
  ) => Promise<void>;
  handleCloseModal: () => void;
}

export const HandleSlaughterModal: React.FC<HandleSlaughterModalProps> = ({
  slaughter,
  handleCreateSlaughter,
  handleUpdateSlaughter,
  handleCloseModal,
}) => {
  const { handleFormError } = useFormError();
  const isUpdateModal = !!slaughter;

  const slaughterDateStates = useInputStates('slaughterDate');
  const methodStates = useInputStates('method');
  const descriptionStates = useInputStates('description');

  useEffect(() => {
    let parsedSlaughterDate = '';
    if (slaughter?.slaughterDate) {
      const [day, month, year] = slaughter.slaughterDate.split('/');
      parsedSlaughterDate = `${year}-${month}-${day}`;
    }

    slaughterDateStates.mainState.setFunction(parsedSlaughterDate);
    methodStates.mainState.setFunction(slaughter?.method ?? '');
    descriptionStates.mainState.setFunction(slaughter?.description ?? '');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slaughter]);

  const handleSubmit = useCallback(async () => {
    const formStates = [slaughterDateStates, methodStates, descriptionStates];
    const formObject = generateFormObjectFromStates(
      formStates,
    ) as unknown as UpdateSlaughterData;

    const schema = yup.object().shape({
      slaughterDate: yup
        .date()
        .typeError('Campo obrigatório')
        .required('Campo obrigatório'),
      method: yupRequiredStringField,
      description: yupRequiredStringField,
    });

    try {
      await schema.validate(formObject, { abortEarly: false });

      if (isUpdateModal) {
        await handleUpdateSlaughter(slaughter.id, {
          ...slaughter,
          ...formObject,
        });
      } else await handleCreateSlaughter(formObject);

      handleCloseModal();
      formStates.forEach(({ mainState: { setFunction } }) => setFunction(''));
    } catch (error) {
      handleFormError(error as yup.ValidationError, formStates);
    }
  }, [
    descriptionStates,
    handleCloseModal,
    handleCreateSlaughter,
    handleFormError,
    handleUpdateSlaughter,
    isUpdateModal,
    methodStates,
    slaughter,
    slaughterDateStates,
  ]);

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>
      <div id="header">
        <img id="image" src={iconSlaughter} alt="Ícone Forma de Abate" />
        <span id="title">
          {isUpdateModal ? 'Editar' : 'Adicionar'} Forma de Abate
        </span>
      </div>
      <form>
        <FormField
          states={slaughterDateStates}
          type="date"
          label="Data do Abate"
        />
        <FormField states={methodStates} label="Forma de Abate" />
        <FormField states={descriptionStates} label="Descrição" />
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
