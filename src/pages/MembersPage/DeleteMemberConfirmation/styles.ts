import { palette } from 'assets/colors/palette';
import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  backgroundColor?: string;
}

export const Container = styled.section<ButtonProps>`
  width: 400px;
  min-height: 120px;
  background: ${palette.white};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16pt;

  button {
    font-size: 20px;
  }
  input {
    width: 288px;
  }
  form {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #labelInfo {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 30px 30px 30px 30px;

    img {
      height: 70px;
      padding-right: 20px;
    }
  }

  #buttons {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    padding-bottom: 30px;

    #deleteMemberConfirm {
      background-color: ${palette.pink};
      &:hover {
        background-color: ${({ backgroundColor }) =>
          shade(0.1, backgroundColor || palette.pinkHigh)};
      }
    }
  }
`;
