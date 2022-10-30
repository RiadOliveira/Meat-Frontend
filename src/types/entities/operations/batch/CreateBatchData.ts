import { IBatch } from 'types/entities/IBatch';
import { OmitDefaultEntityProperties } from 'types/OmitDefaultEntityProperties';

type BatchData = Omit<
  OmitDefaultEntityProperties<IBatch>,
  'endingDate' | 'idOfUserThatMadeLastChange' | 'companyId'
>;

export interface CreateBatchData extends BatchData {
  userId: string;
}
