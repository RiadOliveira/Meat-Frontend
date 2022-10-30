import styled from 'styled-components';
import { palette } from 'assets/colors/palette';
import { shade } from 'polished';

interface ButtonProps {
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 148px;
  height: 48px;

  color: ${palette.white};
  font-size: 20px;
  font-weight: 700;

  background: ${({ backgroundColor }) => backgroundColor || palette.green};
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  transition: 0.2s;
  &:hover {
    background-color: ${({ backgroundColor }) =>
      shade(0.1, backgroundColor || palette.green)};
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
