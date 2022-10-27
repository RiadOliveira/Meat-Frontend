import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${palette.blueLow};
  width: 100%;
  font-size: 10px;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85vh;

    #new-member {
      width: 400px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-size: 32px;
      margin: 24px;

      img {
        width: 72px;
        height: 72px;
      }

      @media (min-width: 960px) {
        width: 340px;
        height: 64px;
        margin: 20px;
        font-size: 30px;

        img {
          width: 64px;
          height: 64px;
        }
      }
    }
  }
`;
