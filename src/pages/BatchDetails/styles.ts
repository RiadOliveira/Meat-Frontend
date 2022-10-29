import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.blueHigh};

  main {
    min-height: calc(100% - 269px);
    display: flex;

    margin: 24px;
  }

  background: ${palette.blueLow};
`;

export const CardBatch = styled.div`
  width: 400px;
  min-height: 800px;
  height: 800px;

  background-color: ${palette.white};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (min-width: 960px) {
    min-width: 80vw;
  }

  #image {
    width: 72px;
    height: 72px;
  }

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

  @media (min-width: 960px) {
    #title {
      font-size: 18px;
    }

    #subtitle {
      font-size: 16px;
    }

    #data {
      font-size: 16px;
    }
  }
`;

export const BatchDetailsHeader = styled.div`
  width: 400px;
  height: 200px;

  border-radius: 12px 12px 0px 0px;
  background-color: ${palette.backgroundLow};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) {
    min-width: 80vw;
  }
`;

export const BatchData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 960px) {
    min-width: 70vw;
    gap: 8px;
    #header-title {
      flex: 1;
    }
  }
`;

export const BatchCardsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @media (min-width: 960px) {
    gap: 32px;
  }
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
