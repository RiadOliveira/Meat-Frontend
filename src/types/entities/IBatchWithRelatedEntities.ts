import { IBatch } from './IBatch';
import { IPortion } from './IPortion';
import { IVaccination } from './IVaccination';
import { SlaughterForFindType } from './operations/slaughter/SlaughterForFindType';

export interface IBatchWithRelatedEntities extends IBatch {
  userThatMadeLastChange: { name: string };
  vaccinations: IVaccination[];
  portions: IPortion[];
  slaughter: SlaughterForFindType | null;
}
