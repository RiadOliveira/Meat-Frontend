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

    #new-member {
      width: 400px;
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
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
        font-size: 24px;

        img {
          width: 64px;
          height: 64px;
        }
      }
    }
  }
`;

export const MembersLine = styled.section`
  height: 55px;
  border-bottom: 1px solid ${palette.blueHigh};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 30px;

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

  #producer {
    background-color: ${palette.beige};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }

  @media (max-width: 600px) {
    width: 90%;
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
