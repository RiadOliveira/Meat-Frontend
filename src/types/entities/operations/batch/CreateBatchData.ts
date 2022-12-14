import { IBatch } from 'types/entities/IBatch';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

type BatchData = Omit<
  OmitDefaultEntityProperties<IBatch>,
  'endingDate' | 'idOfUserThatMadeLastChange' | 'companyId'
>;

export interface CreateBatchData extends Omit<BatchData, 'creationDate'> {
  userId: string;
  creationDate: Date;
}
