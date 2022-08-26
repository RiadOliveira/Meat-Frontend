import styled from 'styled-components';
import { palette } from '../../assets/colors/palette';

interface ButtonProps {
  backgroundColor?: string;
  hoverColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 132px;
  height: 48px;

  color: ${palette.white};
  font-size: 24px;
  font-weight: 700;

  background: ${({ backgroundColor }) => backgroundColor || palette.greenLow};
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || palette.greenHigh};
  }
`;
