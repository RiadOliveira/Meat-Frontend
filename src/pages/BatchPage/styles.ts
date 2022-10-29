import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${palette.blueLow};
  width: 100%;
  font-size: 10px;
  color: ${palette.blueHigh};

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85vh;

    #new-batch {
      width: 400px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* color: ${palette.white}; */
      gap: 50px;
      font-size: 32px;
      margin: 24px;

      img {
        width: 72px;
        height: 72px;
      }

      @media (min-width: 960px) {
        width: 340px;
        height: 64px;
        margin: 20px;
        font-size: 30px;

        img {
          width: 64px;
          height: 64px;
        }
      }
    }
  }
`;

interface TitleProps {
  fontColor?: string;
}

export const CardsBatch = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 960px) {
    min-width: 880px;
    width: 880px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (min-width: 1320px) {
    width: 1240px;
  }

  button {
    width: 400px;
    min-height: 200px;
    max-height: 200px;
    background-color: ${palette.white};
    border-radius: 12px;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px;

    #image {
      width: 72px;
      height: 72px;
    }

    #subtitle {
      font-size: 20px;
      color: ${palette.grey};
    }

    #data {
      font-size: 20px;
    }

    @media (min-width: 960px) {
      width: 340px;
      min-height: 170px;
      max-height: 170px;
      margin: 20px;
      #image {
        width: 64px;
        height: 64px;
      }
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
  }
`;

export const Title = styled.span<TitleProps>`
  font-size: 22px;
  font-weight: 700;
  color: ${({ fontColor }) => fontColor || palette.pink};
`;

export const BatchData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 90%;
`;

export const BatchCardsHeader = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
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
