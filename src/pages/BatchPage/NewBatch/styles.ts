import { palette } from 'assets/colors/palette';
import styled from 'styled-components';

export const Container = styled.section`
  width: 400px;
  min-height: 400px;
  background: ${palette.white};
  border-radius: 12px;
  padding: 36px 0px 36px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  #in-line {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 320;
  }
`;
