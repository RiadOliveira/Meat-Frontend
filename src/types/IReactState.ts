export interface IReactState<T> {
  value: T;
  setFunction: React.Dispatch<React.SetStateAction<T>>;
}
