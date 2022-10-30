import { CreateVaccinationData } from './CreateVaccinationData';

export type UpdateVaccinationData = Omit<CreateVaccinationData, 'batchId'>;
