import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.section`
  main {
    width: 336px;
    min-height: 220px;
    height: 220px;
    background: ${palette.white};
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    gap: 24px;
    padding: 0px 32px 0px 32px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  img {
    width: 72px;
    height: 72px;
  }

  span {
    text-align: center;

    font-weight: 500;
    font-size: 20px;
  }
`;
