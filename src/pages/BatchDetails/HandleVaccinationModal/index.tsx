import iconVaccination from 'assets/img/iconVaccination.svg';
import close from 'assets/img/close.svg';

import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import { useInputStates } from 'utils/useInputStates';

interface HandleVaccinationModalProps {
  handleCloseModal: () => void;
}

export const HandleVaccinationModal: React.FC<HandleVaccinationModalProps> = ({
  handleCloseModal,
}) => {
  const nameStates = useInputStates('name');
  const vaccinationBatchStates = useInputStates('vaccinationBatch');

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="Botão de fechar" />
      </button>

      <div id="header">
        <img id="image" src={iconVaccination} alt="Ícone Vacinações" />
        <span id="title">Adicionar Vacinação</span>
      </div>

      <form>
        <FormField states={nameStates} label="Nome" />
        <FormField states={vaccinationBatchStates} label="Lote Vacinação" />
        <div id="separator" />
        <div id="in-line">
          <Button
            type="button"
            backgroundColor={palette.pink}
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </Container>
  );
};
