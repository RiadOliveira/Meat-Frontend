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
    /* 
    @media (max-width: 600px) {
      flex-direction: column;
    } */
  }
`;

export const CardsBatch = styled.section`
  button {
    width: 400px;
    min-height: 200px;
    background-color: ${palette.white};
    border-radius: 12px;
    border: 0;
    outline: 0;

    #title {
      font-size: 22px;
      font-weight: 700;
      color: ${palette.pink};
    }

    #subtitle {
      font-size: 20px;
      color: ${palette.grey};
    }
    #data {
      font-size: 20px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
`;

export const BatchData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const BatchHeader = styled.div`
  display: flex;
  gap: 16px;
`;

export const BatchTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BatchSpacingTextLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BatchSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BatchTextLine = styled.div`
  display: flex;
`;
export const BatchModification = styled.div``;

export const BatchStatus = styled.div``;
