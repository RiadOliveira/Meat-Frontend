import { Container } from './styles';
import { palette } from 'assets/colors/palette';
import { FormField } from 'components/FormField';
import { Button } from 'components/Button/styles';
import iconPortion from 'assets/img/iconPortion.svg';
import close from 'assets/img/close.svg';

interface PortionADDProps {
  handleCancel: () => void;
}

export const PortionADD: React.FC<PortionADDProps> = ({ handleCancel }) => {
  return (
    <Container>
      <button onClick={handleCancel} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>
      <div id="header">
        <img id="image" src={iconPortion} alt="Icone Rações" />
        <span id="title">Adicionar Rações</span>
      </div>
      <form>
        <FormField label="Nome" />
        <FormField label="Lote Ração" />
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
