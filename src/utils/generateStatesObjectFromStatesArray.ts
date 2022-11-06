import { ReactInputState } from 'types/ReactInputState';

interface GenericObject {
  [key: string]: ReactInputState;
}

export const generateStatesObjectFromStatesArray = (
  states: ReactInputState[],
): GenericObject => {
  const statesObject: GenericObject = {} as GenericObject;

  states.forEach(state => {
    statesObject[state.name] = state;
  });

  return statesObject;
};
