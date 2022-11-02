import { palette } from 'assets/colors/palette';
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 320px;
  height: 170px;
  background: ${palette.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8px;

  @media (min-width: 1064px) {
    width: 200px;
  }

  #logout {
    color: ${palette.pinkHigh};
    &:hover {
      background-color: ${palette.pinkHigh};
      color: ${palette.white};
    }
  }
`;

export const UserOptionsHeader = styled.div`
  width: 320px;
  height: 71px;
  background-color: ${palette.white};
  border-radius: 12px 12px 0px 0px;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${palette.blueHigh};

  @media (min-width: 1064px) {
    width: 200px;
    height: 54px;
    margin-top: 0;
  }

  div {
    flex: 1;
  }

  #user-name {
    color: ${palette.blueHigh};
    font-size: 20px;
    font-weight: 700;
    @media (min-width: 1064px) {
      font-size: 16px;
    }
  }

  #user-role {
    color: ${palette.blue};
    font-size: 18px;
    font-weight: 500;
    @media (min-width: 1064px) {
      font-size: 12px;
    }
  }

  img {
    width: 48px;
    height: 48px;
    margin-left: 16px;
    margin-right: 16px;
    @media (min-width: 1064px) {
      width: 32px;
      height: 32px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;

export const OptionButton = styled.button`
  width: 100%;
  height: 55px;
  outline: 0;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid ${palette.blueHigh};
  transition: 0.2s;
  &:hover {
    background-color: ${shade(0.1, palette.white)};
  }

  font-size: 18px;
  font-weight: 500;
  color: ${palette.blueHigh};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 32px;
`;
