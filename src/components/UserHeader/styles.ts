import { palette } from 'assets/colors/palette';
import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
}

export const Container = styled.header`
  width: 100%;
  height: 269px;
  max-height: 269px;

  background: ${palette.pink};

  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 1064px) {
    max-height: 15vh;
  }

  #return-arrow {
    position: absolute;
    left: 15px;
    top: 10px;
    background-color: transparent;
    border: 0;
    outline: 0;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1064px) {
    margin-left: 10vw;
    margin-right: 10vw;
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }

  #logo-meat {
    width: 200px;
    height: 100px;
    margin-top: 2vh;
  }

  #logo {
    @media (min-width: 1064px) {
      min-width: calc(50% - 170px);
    }
  }
`;

export const HeaderToolsBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1064px) {
    width: calc(50% + 170px);
    min-width: 640px;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: -16px;
  }

  #tools-button {
    width: 340px;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
`;

export const UserButton = styled.button`
  width: 320px;
  height: 72px;
  background-color: ${palette.white};
  border-radius: 12px;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  margin-top: 24px;

  @media (min-width: 1064px) {
    width: 200px;
    height: 54px;
    margin-top: 0;
  }
  &:hover {
    background-color: ${shade(0.1, palette.white)};
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
interface UserOptionsProps {
  isVisible: boolean;
}

export const UserOptions = styled.div<UserOptionsProps>`
  width: 320px;
  position: absolute;
  background: ${palette.white};
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8px;
  margin-top: 170px;

  @media (min-width: 1064px) {
    width: 200px;
    margin-top: 54px;
  }

  #logout {
    color: ${palette.pinkHigh};
    &:hover {
      background-color: ${palette.pinkHigh};
      color: ${palette.white};
    }
  }

  button {
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
  }

  transition: 0.5s;
  ${({ isVisible }) =>
    isVisible
      ? css`
          visibility: visible;
          opacity: 1;
          margin-top: 170px;
          @media (min-width: 1064px) {
            margin-top: 170px;
          }
        `
      : css`
          visibility: hidden;
          opacity: 0;
          margin-top: 150px;

          & > * {
            max-height: 100vh;
            overflow-y: hidden;
          }
        `}
`;

export const ToolsBarButton = styled.button<ButtonProps>`
  width: 160px;
  height: 36px;

  border-radius: 12px;
  border: 0;
  outline: 0;

  color: ${palette.white};
  font-size: 20px;
  font-weight: 500;

  background: ${({ backgroundColor }) => backgroundColor || palette.pink};

  transition: 0.2s;
  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor || palette.pinkHigh};
  }
  @media (min-width: 1064px) {
    width: 160px;
    height: 32px;
    font-size: 16px;
  }
`;
