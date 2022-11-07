import { CreateBatchData } from './CreateBatchData';

export interface UpdateBatchData extends Omit<CreateBatchData, 'creationDate'> {
  endingDate?: Date;
}
