import { Container } from './styles';
import { HTMLAttributes, useCallback } from 'react';
import { ReactInputState } from 'types/ReactInputState';
import { InputErrorMessageStyle } from 'components/Input/styles';

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  states: ReactInputState;
  label?: string;
  type?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  states: {
    mainState: { setFunction: mainFunction, value: mainValue },
    errorMessageState: { setFunction: errorFunction, value: errorValue },
  },
  label,
  type,
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
    <Container
      isErrored={!!errorValue}
      labelOnTop={type === 'date' || mainValue.length > 0}
    >
      <input
        type={type}
        value={mainValue}
        onChange={handleOnChange}
        {...props}
      />
      <label>{label}</label>

      <InputErrorMessageStyle>{errorValue}</InputErrorMessageStyle>
    </Container>
  );
};
