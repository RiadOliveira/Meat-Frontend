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

  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #title {
    font-weight: 700;
    font-size: 24px;
    color: ${palette.blueHigh};
  }
  img {
    height: 72px;
  }

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
    gap: 16px;
  }

  select {
    width: 320px;
  }

  #closeButton {
    height: 24px;
    width: 24px;
    border: none;
    background-color: transparent;
    position: absolute;
    margin: -16px 0px 0px 340px;

    img {
      height: 18px;
      width: 18px;
    }
    :hover {
      img {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
