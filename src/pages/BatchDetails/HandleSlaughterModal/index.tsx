import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import iconSlaughter from 'assets/img/iconSlaughter.svg';
import close from 'assets/img/close.svg';
import { useInputStates } from 'utils/useInputStates';

interface HandleSlaughterModalProps {
  handleCloseModal: () => void;
}

export const HandleSlaughterModal: React.FC<HandleSlaughterModalProps> = ({
  handleCloseModal,
}) => {
  const slaughterDateStates = useInputStates('slaughterDate');
  const methodStates = useInputStates('method');
  const descriptionStates = useInputStates('description');

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>
      <div id="header">
        <img id="image" src={iconSlaughter} alt="Ícone Forma de Abate" />
        <span id="title">Editar Forma de Abate</span>
      </div>
      <form>
        <FormField
          states={slaughterDateStates}
          type="date"
          label="Data do Abate"
        />
        <FormField states={methodStates} label="Forma de Abate" />
        <FormField states={descriptionStates} label="Descrição" />
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
