import { palette } from 'assets/colors/palette';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 400px;
  min-height: 400px;
  background: ${palette.white};
  border-radius: 12px;
  padding: 36px 0px 36px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  button {
    font-size: 20px;
  }
  input {
    width: 288px;
  }

  #close-button {
    position: absolute;
    background-color: transparent;
    outline: none;
    border: 0;

    margin-left: 302px;

    &:hover {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  #separator {
    height: 18px;
  }

  #in-line {
    display: flex;
    align-items: center;
    gap: 28px;
    max-width: 320;
    #city {
      select {
        width: 196px;
      }
    }
    #state {
      select {
        width: 96px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ImgSelect = styled.section`
  width: 96px;
  height: 96px;
  background-color: transparent;
  border-radius: 72px;
  margin-bottom: 24px;
  border: 8px solid ${palette.beige};

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 96px;
    height: 96px;
  }
  #OpenOptionButton {
    width: 36px;
    height: 36px;

    position: absolute;
    margin-top: 80px;
    margin-left: 88px;

    outline: none;
    border-radius: 32px;
    border-color: transparent;
    background-color: ${palette.beige};
    transition: 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 16px;
      height: 16px;
    }
    &:hover {
      background-color: ${shade(0.1, palette.beige)};
      img {
        width: 18px;
        height: 18px;
        transition: 0.2s;
      }
    }
  }
`;

interface SelectOptionsProps {
  isVisibleOptions: boolean;
}

export const ImgSelectOptions = styled.div<SelectOptionsProps>`
  width: 300px;
  height: 200px;
  background: ${palette.white};
  position: absolute;
  z-index: 1;

  border: 1px solid ${palette.grey};
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 72px;
    height: 72px;
    /* filter: brightness(0%); */
  }

  #optionButton {
    width: 88px;
    height: 88px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: transparent;

    outline: 0;
    border: 0;
    &:hover {
      background-color: ${palette.beige};
    }
  }

  transition: 0.5s;
  z-index: 10;

  ${({ isVisibleOptions }) =>
    isVisibleOptions
      ? css`
          visibility: visible;
          opacity: 1;
          margin-top: 320px;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          margin-top: 300px;
          & > * {
            max-height: 100vh;
            overflow-y: hidden;
          }
        `}
`;
