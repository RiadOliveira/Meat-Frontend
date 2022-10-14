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

    @media (max-width: 840px) {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 340px;

    padding-top: 25px;
    padding-bottom: 20px;

    &[id='company'] {
      height: 300px;
      padding-top: 20px;
    }
  }
`;
