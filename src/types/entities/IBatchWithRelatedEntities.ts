import { IBatch } from './IBatch';
import { IPortion } from './IPortion';
import { ISlaughter } from './ISlaughter';
import { IVaccination } from './IVaccination';

type SlaughterForFindType = Omit<ISlaughter, 'slaughterDate'> & {
  slaughterDate: string;
};

export interface IBatchWithRelatedEntities extends IBatch {
  userThatMadeLastChange: { name: string };
  vaccinations: IVaccination[];
  portions: IPortion[];
  slaughter: SlaughterForFindType | null;
}
