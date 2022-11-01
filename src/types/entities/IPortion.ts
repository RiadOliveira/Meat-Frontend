import { IEntity } from './IEntity';

export interface IPortion extends IEntity {
  name: string;
  portionBatch: string;
  batchId: string;
}
