import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

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
  #in-line {
    display: flex;
    align-items: center;
    gap: 28px;
    max-width: 320;
    #city {
      width: 164px;
    }
    #state {
      width: 64px;
    }
  }
`;

export const ImgSelect = styled.section`
  width: 112px;
  height: 112px;
  background-color: ${palette.beige};
  border-radius: 72px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 96px;
    height: 96px;
  }
  button {
    width: 36px;
    height: 36px;

    position: absolute;
    margin-top: 80px;
    margin-left: 88px;

    outline: none;
    border-radius: 32px;
    border-color: transparent;
    background-color: ${palette.beige};

    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 16px;
      height: 16px;
    }
  }
`;
