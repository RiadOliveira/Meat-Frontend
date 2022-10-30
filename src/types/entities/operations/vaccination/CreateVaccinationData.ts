import { IVaccination } from 'types/entities/IVaccination';
import { OmitDefaultEntityProperties } from 'types/OmitDefaultEntityProperties';

export interface CreateVaccinationData
  extends OmitDefaultEntityProperties<IVaccination> {
  userId: string;
}
