import { IEntity } from './IEntity';

export interface ISlaughter extends IEntity {
  method: string;
  description: string;
  slaughterDate: Date;
  batchId: string;
}
