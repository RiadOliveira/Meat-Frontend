import { palette } from 'assets/colors/palette';
import { InputHTMLAttributes, useCallback } from 'react';
import { ReactInputState } from 'types/ReactInputState';
import { InputErrorMessageStyle, InputStyles } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  states: ReactInputState;
  notHasError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  states: {
    mainState: { setFunction: mainFunction, value: mainValue },
    errorMessageState: { setFunction: errorFunction, value: errorValue },
  },
  notHasError = false,
  disabled,
  style,
  ...props
}) => {
  const handleOnChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      mainFunction(value);
      if (errorValue) errorFunction('');
    },
    [errorFunction, errorValue, mainFunction],
  );

  return (
    <div style={style}>
      {!notHasError && (
        <InputErrorMessageStyle>{errorValue}</InputErrorMessageStyle>
      )}

      <InputStyles
        borderColor={errorValue ? palette.pinkHigh : 'transparent'}
        autoComplete="off"
        onChange={handleOnChange}
        value={mainValue}
        disabled={disabled}
        style={style}
        {...props}
      />
    </div>
  );
};
