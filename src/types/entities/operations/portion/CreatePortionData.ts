import { IPortion } from 'types/entities/IPortion';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

export interface CreatePortionData
  extends OmitDefaultEntityProperties<IPortion> {
  userId: string;
}
