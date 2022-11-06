import styled, { css } from 'styled-components';
import { palette } from 'assets/colors/palette';

interface InputStyleProps {
  borderColor?: string;
}

export const InputStyles = styled.input<InputStyleProps>`
  width: 360px;
  height: 44px;

  background: ${palette.white};
  border-radius: 12px;
  outline: none;
  text-align: center;
  font-size: 20px;
  display: inline-block;
  transition: 0.3s;

  ${({ borderColor }) => {
    const borderStyle = `border: 2px solid ${borderColor || 'transparent'};`;

    return css`
      ${borderStyle}

      &:hover {
        border: 2px solid ${palette.pink};
      }
    `;
  }}

  &::placeholder {
    color: ${palette.blueHigh};
  }

  @media (max-width: 840px) {
    width: 80%;
    height: 36px;

    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 44px;

    font-size: 20px;
  }
`;

export const InputErrorMessageStyle = styled.p`
  text-align: center;
  color: ${palette.pinkHigh};
  font-size: 12px;
`;
