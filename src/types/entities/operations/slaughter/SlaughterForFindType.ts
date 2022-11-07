import { ISlaughter } from 'types/entities/ISlaughter';

export type SlaughterForFindType = Omit<ISlaughter, 'slaughterDate'> & {
  slaughterDate: string;
};
