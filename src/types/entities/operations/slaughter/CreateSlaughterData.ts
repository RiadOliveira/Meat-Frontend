import { ISlaughter } from 'types/entities/ISlaughter';
import { OmitDefaultEntityProperties } from 'types/OmitDefaultEntityProperties';

export interface CreateSlaughterData
  extends OmitDefaultEntityProperties<ISlaughter> {
  userId: string;
}
