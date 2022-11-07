import { palette } from 'assets/colors/palette';
import styled, { css, withTheme } from 'styled-components';

export const Container = styled.section`
  width: 400px;
  min-height: 400px;
  background: ${palette.white};
  border-radius: 12px;
  padding: 36px 0px 36px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

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
    gap: 20px;
  }
  #header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #title {
    font-weight: 700;
    font-size: 24px;
  }
  #close-button {
    position: absolute;
    background-color: transparent;
    outline: none;
    border: 0;

    margin-left: 302px;

    &:hover {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  #separator {
    height: 18px;
  }
  #in-line {
    display: flex;
    align-items: center;
    gap: 28px;
    max-width: 320;
  }
`;
