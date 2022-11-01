export type OmitDefaultEntityProperties<T> = Pick<
  T,
  Exclude<keyof T, 'id' | 'createdAt' | 'updatedAt'>
>;
