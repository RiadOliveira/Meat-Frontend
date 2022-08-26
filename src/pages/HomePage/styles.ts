import { Button } from '../../components/Button/styles';
import { palette } from '../../assets/colors/palette';
import styled from 'styled-components';

interface SectionProps {
  backgroundColor: string;
}

export const Container = styled.div`
  font-size: 10px;

  main {
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 15vh;

  background: ${palette.pinkLow};
  text-align: center;
  position: relative;
  z-index: 1;

  img {
    margin-top: 0.5%;
  }
`;

export const Section = styled.section<SectionProps>`
  width: 50%;
  height: 60vh;

  background: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  h2 {
    width: 100%;
    text-align: center;
    font-size: 24px;
    max-width: 75%;
    margin-top: -20px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 280px;
  }

  //Exemplo
  /* ${Button} {
    height: 500px;
  } */
`;

export const Footer = styled.footer`
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

    color: ${palette.white};
    font-size: 16px;
    text-decoration: none;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
