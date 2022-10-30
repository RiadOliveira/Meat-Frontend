import { IVaccination } from 'types/entities/IVaccination';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

export interface CreateVaccinationData
  extends OmitDefaultEntityProperties<IVaccination> {
  userId: string;
}
