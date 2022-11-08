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

  #generateQR {
    width: 240px;
    height: 60px;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 17pt;
    color: ${palette.white};
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #modalQRCode {
    width: 400px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: ${palette.white};
    border-radius: 12px;

    #header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #closeButton {
      height: 24px;
      width: 24px;
      border: none;
      background-color: transparent;
      position: absolute;
      margin: -420px 0px 0px 340px;

      img {
        height: 18px;
        width: 18px;
      }
      :hover {
        img {
          height: 24px;
          width: 24px;
        }
      }

      h2 {
        color: ${palette.blueHigh};
      }
    }

    Button {
      width: 250px;
      margin-top: 20px;
    }
  }

  main {
    min-height: calc(100% - 269px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;

    #finish-batch {
      width: 400px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 36px;
      font-size: 32px;
      margin-top: 24px;

      img {
        width: 72px;
        height: 72px;
      }

      @media (min-width: 960px) {
        width: 340px;
        height: 64px;
        margin-top: 20px;
        font-size: 24px;

        img {
          width: 64px;
          height: 64px;
        }
      }
    }
  }
`;

export const CardBatch = styled.div`
  width: 400px;
  min-height: 800px;

  background-color: ${palette.white};
  border-radius: 12px;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (min-width: 960px) {
    margin-top: 20px;
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
  width: 400px;
  height: 200px;

  border-radius: 12px 12px 0px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) {
    min-width: 80vw;
    height: 180px;

    #desktopAdjustment {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const BatchData = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 960px) {
    min-width: 95%;
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

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 28px;
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

export const BatchOperationButtons = styled.div`
  display: flex;
  gap: 8px;
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
  @media (min-width: 960px) {
    width: 50%;
  }
`;

export const BatchTableAttribute = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface BatchTableProps {
  backgroundcolor?: string;
}

export const TitleBatchTable = styled.div<BatchTableProps>`
  height: 64px;
  background: ${({ backgroundcolor }) => backgroundcolor || palette.yellow};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-left: 32px;

  img {
    width: 48px;
    height: 48px;
  }

  #title {
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

export const ButtonAdd = styled.div`
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 360px;
    height: 40px;
    border: 0;
    outline: 0;

    color: ${palette.blue};
  }
`;

export const SlaughterData = styled.div`
  padding: 8px 32px 24px 32px;
  span {
    color: ${palette.blue};
    text-align: center;
  }

  #slaughter-data {
    min-height: 32px;
  }

  #topic {
    color: ${palette.blueHigh};
    font-weight: 500;
  }

  #separate {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    width: 28px;
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
