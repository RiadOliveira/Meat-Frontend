import { palette } from 'assets/colors/palette';
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

export const Section = styled.section<SectionProps>`
  width: 50%;
  height: 57.2vh;

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
    height: 340px;

    &[id='sign-up'] {
      height: 540px;
    }
  }
`;
