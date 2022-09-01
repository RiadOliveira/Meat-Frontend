import { palette } from '../../assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  min-height: 24.5vh;

  background: ${palette.greenLow};
  border-top: 4px solid ${palette.yellow};

  section {
    display: flex;

    img {
      width: 200px;
      height: 200px;

      margin-top: -48px;
      margin-left: 2vw;

      position: relative;
      z-index: 1;

      @media (max-width: 600px) {
        margin-left: -56px;
      }
    }
  }

  div {
    margin-left: -8px;

    img {
      width: 140px;
      height: 64px;

      margin-top: 0;
      margin-left: 0;
      z-index: 0;
    }

    h3 {
      color: ${palette.white};

      font-size: 12px;
      max-width: 90%;
      font-weight: 400;

      margin-top: -8px;
      margin-left: 8px;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;

    font-size: 16px;
    text-decoration: none;

    p {
      color: ${palette.white};
    }

    img {
      width: 20px;
      height: 20px;

      filter: invert(1);
    }
  }
`;
