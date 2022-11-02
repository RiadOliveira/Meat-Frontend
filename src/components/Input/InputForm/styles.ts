import styled from 'styled-components';
import { palette } from 'assets/colors/palette';

export const InputForm = styled.div`
  position: relative;
  input {
    border: 0;
    border-bottom: solid 2.5px ${palette.blueHigh};
    background: transparent;
    padding: 1rem;
    font-size: 1rem;
    color: ${palette.blue};
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  label {
    font-size: 1rem;
    position: absolute;
    left: 16px;
    color: ${palette.blue};
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  input:focus {
    outline: none;
    border-bottom: solid 2.5px ${palette.pinkHigh};
  }
  input:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: transparent;
    padding: 0 0.2em;
    color: ${palette.blueHigh};
  }
  select {
    outline: none;
    border: 0;
    border-bottom: solid 2.5px ${palette.blueHigh};
    background: transparent;
    padding: 1rem;
    font-size: 1rem;
    color: ${palette.blue};
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  select:focus {
    outline: none;
    border-bottom: solid 2.5px ${palette.pinkHigh};
  }
  select:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    padding: 0 0.2em;
    color: ${palette.blueHigh};
  }
`;
