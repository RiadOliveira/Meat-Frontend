import { IReactState } from './IReactState';

export interface ReactInputState {
  name: string;
  mainState: IReactState<string>;
  errorMessageState: IReactState<string>;
}
