import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.section`
  width: 336px;
  min-height: 220px;
  background: ${palette.white};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  gap: 24px;
  padding: 32px;

  span {
    text-align: center;

    font-weight: 500;
    font-size: 20px;
  }
  #subtitle {
    text-align: center;

    font-weight: 500;
    font-size: 16px;
    margin-top: -24px;
  }

  input {
    width: 288px;
  }
  form {
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  #buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  button {
    @media (max-width: 600px) {
      width: 132;
      height: 40px;

      font-size: 16px;
    }
  }
`;
