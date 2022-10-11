import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 15vh;
  max-height: 15vh;

  background: ${palette.pinkLow};
  text-align: center;
  position: relative;
  z-index: 1;

  #return-arrow {
    position: absolute;
    left: 15px;
    top: 10px;

    img {
      width: 28px;
      height: 28px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
  }

  img {
    margin-top: 0.5%;
  }
`;
