import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

interface SectionProps {
  backgroundColor: string;
}

export const Container = styled.div`
  background-color: ${palette.green};
  font-size: 10px;
  color: ${palette.blueHigh};

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
    color: ${palette.green};
    box-shadow: 0px 0px 0px;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 320px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  input {
    width: 75%;
    border-radius: 12px 0px 0px 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    border-radius: 0px 12px 12px 0px;
  }
`;
