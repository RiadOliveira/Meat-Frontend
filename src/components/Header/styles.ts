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
    outline: 0;
    border: none;

    background-color: transparent;
    margin-top: 0.5%;
  }
`;
