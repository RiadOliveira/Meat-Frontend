import styled from 'styled-components';
import { palette } from '../../assets/colors/palette';

interface ButtonProps {
  backgroundColor?: string;
  hoverColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 148px;
  height: 48px;

  color: ${palette.white};
  font-size: 20px;
  font-weight: 700;

  background: ${({ backgroundColor }) => backgroundColor || palette.greenLow};
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  transition: 0.2s;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || palette.greenHigh};
  }

  @media (max-width: 800px) {
    width: 132;
    height: 40px;

    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 148px;
    height: 48px;

    font-size: 24px;
  }
`;
