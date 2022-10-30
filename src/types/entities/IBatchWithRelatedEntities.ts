import { IBatch } from './IBatch';
import { IPortion } from './IPortion';
import { ISlaughter } from './ISlaughter';
import { IVaccination } from './IVaccination';

export interface IBatchWithRelatedEntities extends IBatch {
  userThatMadeLastChange: { name: string };
  vaccinations: IVaccination[];
  portions: IPortion[];
  slaughter: ISlaughter | null;
}
