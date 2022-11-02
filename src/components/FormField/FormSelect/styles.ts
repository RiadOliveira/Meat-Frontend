import styled from 'styled-components';
import { palette } from 'assets/colors/palette';

export const FormSelect = styled.div`
  position: relative;

  select {
    width: 64px;
    outline: none;
    border: transparent;
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
    pointer-events: none;
    transform: translateY(-50%) scale(0.8);
    background-color: transparent;
    padding: 0 0.2em;
    color: ${palette.blueHigh};
  }
  select:focus {
    outline: none;
    border-bottom: solid 2.5px ${palette.pinkHigh};
  }
  .select-selected:after {
    border-color: ${palette.yellow};
  }
`;
