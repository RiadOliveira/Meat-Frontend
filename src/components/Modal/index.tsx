import { HTMLAttributes } from 'react';
import { Container } from './styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  ...props
}) => {
  return (
    <Container isVisible={isVisible} tabIndex={0} {...props}>
      {children}
    </Container>
  );
};
