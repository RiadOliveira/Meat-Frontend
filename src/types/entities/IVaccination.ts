import { IEntity } from './IEntity';

export interface IVaccination extends IEntity {
  name: string;
  vaccinationBatch: string;
  batchId: string;
}
