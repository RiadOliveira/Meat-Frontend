import x from 'assets/img/x.svg';

export const CloseButton: React.FC = () => {
  return(
    <button id="closeButton">
        <img src={x} alt="closeIcon" />
      </button>
  );
}