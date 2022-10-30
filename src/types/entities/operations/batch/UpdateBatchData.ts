import { CreateBatchData } from './CreateBatchData';

export interface UpdateBatchData extends CreateBatchData {
  endingDate?: Date;
}
