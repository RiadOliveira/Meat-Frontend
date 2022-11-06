import { IErrors } from 'types/IErrors';
import { ReactInputState } from 'types/ReactInputState';
import { generateStatesObjectFromStatesArray } from 'utils/generateStatesObjectFromStatesArray';
import { ValidationError } from 'yup';
import { getValidationErrors } from './getValidationErrors';

type HandleFormErrorFunction = (
  error: Error | ValidationError | IErrors,
  formStates: ReactInputState[],
) => void;

const getParsedError = (error: ValidationError | IErrors): IErrors => {
  if (error instanceof ValidationError) return getValidationErrors(error);
  return error;
};

const handleFormError = (
  error: Error | ValidationError | IErrors,
  formStates: ReactInputState[],
): void => {
  if (error instanceof Error && !(error instanceof ValidationError)) {
    alert('Problema inesperado!');
    return;
  }

  const parsedErrors = getParsedError(error);
  const statesObject = generateStatesObjectFromStatesArray(formStates);

  Object.keys(parsedErrors).forEach(key => {
    const [parsedKey] = key.split('.');
    statesObject[parsedKey].errorMessageState.setFunction(parsedErrors[key]);
  });
};

export const useFormError = (): {
  handleFormError: HandleFormErrorFunction;
} => {
  const parsedHandleFormError = (
    error: Error | ValidationError | IErrors,
    formStates: ReactInputState[],
  ) => handleFormError(error, formStates);

  return {
    handleFormError: parsedHandleFormError,
  };
};
