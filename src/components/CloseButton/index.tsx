import closeIcon from 'assets/img/close.svg';

interface CloseButtonProps {
  handleClose: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ handleClose }) => {
  return (
    <button type="button" id="closeButton" onClick={handleClose}>
      <img src={closeIcon} alt="Ícone fechar" />
    </button>
  );
};
