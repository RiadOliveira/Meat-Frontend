import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.blueHigh};
  background: ${palette.blueLow};

  main {
    min-height: calc(100% - 269px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
    margin-bottom: 56px;
  }
`;

export const CardBatch = styled.div`
  width: 400px;
  height: 960px;
  margin-top: 48px;

  background-color: ${palette.white};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid ${palette.white};

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

interface TitleProps {
  fontColor?: string;
}

export const Title = styled.span<TitleProps>`
  font-size: 22px;
  font-weight: 700;
  color: ${({ fontColor }) => fontColor || palette.pink};
`;

export const BatchDetailsHeader = styled.section`
  width: 100%;
  height: 200px;

  border-radius: 12px 12px 0px 0px;

  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (min-width: 960px) {
    min-width: 80vw;
    height: 180px;

    #desktopAdjustment {
      display: flex;
      justify-content: space-between;
    }
  }

  #card-code-title {
    width: 100%;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    #card-code {
      color: ${palette.white};
      font-size: 24px;
      font-weight: 700;

      @media (max-width: 960px) {
        font-size: 18px;
      }
    }
  }
`;

export const BatchData = styled.section`
  min-width: 95%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 960px) {
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
  flex: 1;
`;

export const BatchSpacingTextLine = styled.div`
  display: flex;
  justify-content: space-between;

  #desktopAdjustment {
    @media (min-width: 960px) {
      flex-direction: column;
      justify-content: space-between;
    }
  }
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

export const BatchStatus = styled.div`
  margin-bottom: 8px;
`;

export const BatchAtributeTable = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface BatchTableProps {
  backgroundcolor?: string;
}

export const TitleBatchTable = styled.div<BatchTableProps>`
  height: 64px;
  min-height: 48px;
  background: ${({ backgroundcolor }) => backgroundcolor || palette.yellow};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-left: 32px;

  text-align: center;
  img {
    width: 48px;
    height: 48px;
  }
  #card-code-title #title {
    color: ${palette.blueHigh};
    font-size: 24px;
    font-weight: 500;
  }
`;

export const LineBatchTable = styled.div`
  height: 47px;
  border-bottom: 1px solid ${palette.blueHigh};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 36px;
  padding-right: 32px;

  span {
    color: ${palette.blue};
  }

  div {
    width: 64px;

    display: flex;
    align-items: center;
    gap: 8px;
    justify-items: space-between;
  }

  button {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;

    background-color: transparent;
    border: 0;
    outline: 0;

    &:hover {
      img {
        width: 30px;
        height: 30px;
      }
    }

    img {
      width: 28px;
      height: 28px;

      transition: 0.2s;
    }
  }
`;

export const SlaughterData = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 8px;
  margin-bottom: 16px;

  span {
    color: ${palette.blue};
    word-wrap: break-word;
    white-space: pre-line;
  }

  #slaughter-data {
    min-height: 32px;
  }

  #topic {
    color: ${palette.blueHigh};
    font-weight: 500;
  }
`;
