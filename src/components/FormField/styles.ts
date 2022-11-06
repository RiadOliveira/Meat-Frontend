import styled from 'styled-components';
import { palette } from 'assets/colors/palette';
import { InputErrorMessageStyle } from 'components/Input/styles';

interface LabelProps {
  labelOnTop: boolean;
  isErrored: boolean;
}

export const Container = styled.div<LabelProps>`
  position: relative;

  ${InputErrorMessageStyle} {
    text-align: start;
    padding-left: 8px;
  }

  input {
    border: 0;
    border-bottom: solid 2.5px
      ${({ isErrored }) => (isErrored ? palette.pinkHigh : palette.blueHigh)};
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
    transform: ${({ labelOnTop }) =>
      labelOnTop ? 'translateY(-50%) scale(0.8)' : 'translateY(1rem)'};
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  input:focus {
    outline: none;
    border-bottom: solid 2.5px ${palette.pink};
  }

  input:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: transparent;
    padding: 0 0.2em;
    color: ${palette.blueHigh};
  }
`;
