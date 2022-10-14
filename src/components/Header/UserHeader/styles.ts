import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 269px;
  max-height: 269px;

  background: ${palette.pink};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  #return-arrow {
    position: absolute;
    left: 15px;
    top: 10px;
    background-color: transparent;
    border: 0;
    outline: 0;

    img {
      width: 28px;
      height: 28px;
    }
  }

  #logo-meat {
    height: 120px;
    width: 243px;
    margin-top: 0.5%;
  }

  #user-options-button {
    width: 320px;
    height: 72px;
    background-color: ${palette.white};
    border-radius: 12px;
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    margin-top: 24px;

    div {
      flex: 1;
    }

    #role {
      color: ${palette.blue};
      font-size: 18px;
      font-weight: 500;
    }

    img {
      width: 48px;
      height: 48px;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  #tools-button {
    margin-top: 8px;
    button {
      width: 160px;
      height: 36px;

      background-color: ${palette.pink};
      border-radius: 12px;
      border: 0;
      outline: 0;

      color: ${palette.white};
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
