import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-height: 15vh;

  background: ${palette.pink};
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
    height: 100px;
  }

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
    width: 200px;
    height: 100px;
    margin-top: 2vh;

    @media (max-width: 600px) {
      width: 180px;
      height: 90px;
    }
  }
`;
