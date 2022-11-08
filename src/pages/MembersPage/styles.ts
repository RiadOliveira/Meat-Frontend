import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

interface MembersLineProps {
  isProducer: boolean;
}

export const Container = styled.div`
  background-color: ${palette.blueLow};
  width: 100%;
  font-size: 10px;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 85vh;

    #new-member {
      width: 400px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
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

export const MembersLine = styled.section<MembersLineProps>`
  height: 55px;
  border-bottom: 1px solid ${palette.blueHigh};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 30px;

  background-color: ${({ isProducer }) =>
    isProducer ? palette.beige : palette.white};

  span {
    color: ${palette.blue};
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;
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

  #name {
    color: ${palette.blueHigh};
    font-size: 24px;
    font-weight: 500;
  }

  #accountType {
    color: ${palette.blue};
    font-size: 16px;
  }
`;

export const MembersLineText = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MembersTable = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 10px;
  background-color: ${palette.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding-bottom: 12px;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 90%;
    margin-top: 24px;
  }
`;

export const MembersHeader = styled.section`
  height: 64px;
  background: ${palette.beige};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  gap: 16px;
  padding-left: 32px;
  border-bottom: 1px solid ${palette.blueHigh};

  #companyName {
    font-size: 24px;
    font-weight: 700;
    color: ${palette.blueHigh};
  }
`;
