import { AnimalType } from 'types/AnimalType';
import { IEntity } from './IEntity';

export interface IBatch extends IEntity {
  name: string;
  city: string;
  state: string;
  race: string;
  animal: AnimalType;
  idOfUserThatMadeLastChange: string;
  companyId: string;
  creationDate: string;
  endingDate?: string;
}
