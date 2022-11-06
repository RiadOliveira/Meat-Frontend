import closeIcon from 'assets/img/close.svg';

export const CloseButton: React.FC = () => {
  return (
    <button id="closeButton">
      <img src={closeIcon} alt="Ícone fechar" />
    </button>
  );
};
