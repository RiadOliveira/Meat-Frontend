import { IBatch } from 'types/entities/IBatch';

export interface BatchDataListedFromCompany extends IBatch {
  userThatMadeLastChange: { name: string };
}
