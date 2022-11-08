import iconVaccination from 'assets/img/iconVaccination.svg';
import close from 'assets/img/close.svg';

import * as yup from 'yup';
import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import { useInputStates } from 'utils/useInputStates';
import { useCallback, useEffect } from 'react';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { generateFormObjectFromStates } from 'utils/generateFormObjectFromStates';
import { useFormError } from 'errors/useFormError';
import { IVaccination } from 'types/entities/IVaccination';
import { CreateVaccinationData } from 'types/entities/operations/vaccination/CreateVaccinationData';
import { UpdateVaccinationData } from 'types/entities/operations/vaccination/UpdateVaccinationData';

interface HandleVaccinationModalProps {
  vaccinationToChange?: IVaccination;
  handleCreateVaccination: (
    vaccination: Omit<CreateVaccinationData, 'userId' | 'batchId'>,
  ) => Promise<void>;
  handleUpdateVaccination: (
    vaccinationId: string,
    vaccination: Omit<UpdateVaccinationData, 'userId'>,
  ) => Promise<void>;
  handleCloseModal: () => void;
}

export const HandleVaccinationModal: React.FC<HandleVaccinationModalProps> = ({
  vaccinationToChange,
  handleCreateVaccination,
  handleUpdateVaccination,
  handleCloseModal,
}) => {
  const { handleFormError } = useFormError();
  const isUpdateModal = !!vaccinationToChange;

  const nameStates = useInputStates('name');
  const vaccinationBatchStates = useInputStates('vaccinationBatch');

  useEffect(() => {
    nameStates.mainState.setFunction(vaccinationToChange?.name ?? '');
    vaccinationBatchStates.mainState.setFunction(
      vaccinationToChange?.vaccinationBatch ?? '',
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vaccinationToChange]);

  const handleSubmit = useCallback(async () => {
    const formStates = [nameStates, vaccinationBatchStates];
    const formObject = generateFormObjectFromStates(
      formStates,
    ) as unknown as UpdateVaccinationData;

    const schema = yup.object().shape({
      name: yupRequiredStringField,
      vaccinationBatch: yupRequiredStringField,
    });

    try {
      await schema.validate(formObject, { abortEarly: false });

      if (isUpdateModal) {
        await handleUpdateVaccination(vaccinationToChange.id, {
          ...vaccinationToChange,
          ...formObject,
        });
      } else await handleCreateVaccination(formObject);

      handleCloseModal();
      formStates.forEach(({ mainState: { setFunction } }) => setFunction(''));
    } catch (error) {
      handleFormError(error as yup.ValidationError, formStates);
    }
  }, [
    nameStates,
    vaccinationBatchStates,
    isUpdateModal,
    handleCloseModal,
    handleUpdateVaccination,
    vaccinationToChange,
    handleCreateVaccination,
    handleFormError,
  ]);

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>

      <div id="header">
        <img id="image" src={iconVaccination} alt="Ícone Vacinação" />
        <span id="title">
          {isUpdateModal ? 'Editar' : 'Adicionar'} Vacinação
        </span>
      </div>

      <form>
        <FormField states={nameStates} label="Nome" />
        <FormField states={vaccinationBatchStates} label="Lote Vacinação" />
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
