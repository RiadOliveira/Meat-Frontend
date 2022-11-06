import { palette } from 'assets/colors/palette';
import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  backgroundColor?: string;
}

export const Container = styled.section<ButtonProps>`
  #closeButton {
    height: 24px;
    width: 24px;
    border: none;
    background-color: transparent;
    margin: 0px 0px 0px 300px;

    img {
      height: 24px;
      width: 24px;
    }
  }
  width: 400px;
  min-height: 120px;
  background: ${palette.white};
  border-radius: 12px;
  padding: 36px 0px 36px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16pt;
  gap: 10px;

  input {
    width: 288px;
  }

  form {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  Button {
    font-size: 20pt;
    margin-top: 15px;
    width: 320px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  #deleteMemberConfirm {
    background-color: ${palette.pink};
    &:hover {
      background-color: ${({ backgroundColor }) =>
        shade(0.1, backgroundColor || palette.pinkHigh)};
    }
  }
`;
