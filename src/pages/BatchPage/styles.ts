import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${palette.blueLow};
  font-size: 10px;

  main {
    display: flex;
    justify-content: center;
    min-height: 85vh;

    Button {
      width: 400px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      font-size: 32px;

      margin: 24px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;
