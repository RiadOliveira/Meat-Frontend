import { IEntity } from './IEntity';

export interface ISlaughter extends IEntity {
  method: string;
  description: string;
  batchId: string;
}
