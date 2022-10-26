import styled from 'styled-components';
import { palette } from 'assets/colors/palette';

export const Input = styled.input`
  width: 360px;
  height: 44px;

  background: ${palette.white};
  border: 2px solid transparent;
  border-radius: 12px;
  outline: none;
  text-align: center;
  font-size: 20px;
  display: inline-block;

  transition: 0.3s;
  &:hover {
    border: 2px solid ${palette.pink};
  }

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
