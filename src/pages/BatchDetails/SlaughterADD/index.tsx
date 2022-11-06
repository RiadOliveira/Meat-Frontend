import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import iconSlaughter from 'assets/img/iconSlaughter.svg';
import close from 'assets/img/close.svg';

interface SlaughterADDProps {
  handleCancel: () => void;
}

export const SlaughterADD: React.FC<SlaughterADDProps> = ({ handleCancel }) => {
  return (
    <Container>
      <button onClick={handleCancel} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>
      <div id="header">
        <img id="image" src={iconSlaughter} alt="Ícone Forma de Abate" />
        <span id="title">Editar Forma de Abate</span>
      </div>
      <form>
        <FormField type="date" label="Data do Abate" />
        <FormField label="Forma de Abate" />
        <FormField label="Descrição" />
        <div id="separator" />
        <div id="in-line">
          <Button
            type="button"
            backgroundColor={palette.pink}
            onClick={handleCancel}
          >
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </Container>
  );
};
