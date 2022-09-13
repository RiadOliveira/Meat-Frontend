import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 15vh;

  background: ${palette.pinkLow};
  text-align: center;
  position: relative;
  z-index: 1;

  button {
    margin-top: 0.5%;
    background-color: transparent;
    border: 0;
    outline: 0;
  }

  img {
  }
`;
