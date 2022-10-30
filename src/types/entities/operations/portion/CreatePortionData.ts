import { IPortion } from 'types/entities/IPortion';
import { OmitDefaultEntityProperties } from 'types/OmitDefaultEntityProperties';

export interface CreatePortionData
  extends OmitDefaultEntityProperties<IPortion> {
  userId: string;
}
