import styled from 'styled-components';
import { palette } from 'assets/colors/palette';

export const Input = styled.input`
  width: 360px;
  height: 48px;

  background: ${palette.white};
  border: 2px solid transparent;
  border-radius: 12px;
  outline: none;
  text-align: center;
  font-size: 20px;
  display: inline-block;

  transition: 0.3s;
  &:hover {
    border: 2px solid ${palette.pinkLow};
  }

  &::placeholder {
    color: rgba(13, 47, 89, 0.7);
  }

  @media (max-width: 800px) {
    width: 80%;
    height: 40px;

    font-size: 16px;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 48px;

    font-size: 20px;
  }
`;
