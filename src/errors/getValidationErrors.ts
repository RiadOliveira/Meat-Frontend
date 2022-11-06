import { IErrors } from 'types/IErrors';
import { ValidationError } from 'yup';

export function getValidationErrors<T extends IErrors>(
  error: ValidationError,
): T {
  const errors: T = {} as T;

  error.inner.forEach(err => {
    if (err.path) errors[err.path as keyof T] = err.message as T[string];
  });

  return errors;
}
