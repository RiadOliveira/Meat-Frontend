import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

interface SectionProps {
  backgroundColor: string;
}

export const Container = styled.div`
  background-color: ${palette.greenLow};
  font-size: 10px;

  main {
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const Section = styled.section<SectionProps>`
  width: 50%;
  height: calc(60vh - 16px);
  max-height: 60vh;
  padding-top: 16px;

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

  #sign-up {
    margin-top: -20px;
    background-color: transparent;
    color: ${palette.greenHigh};
    box-shadow: 0px 0px 0px;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 320px;
  }
`;
