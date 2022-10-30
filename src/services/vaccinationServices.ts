import { IVaccination } from 'types/entities/IVaccination';
import { CreateVaccinationData } from 'types/entities/operations/vaccination/CreateVaccinationData';
import { UpdateVaccinationData } from 'types/entities/operations/vaccination/UpdateVaccinationData';
import { api } from './api';

const servicesPrefix = '/vaccination';

export const createVaccination = async (
  createVaccinationData: CreateVaccinationData,
): Promise<IVaccination> => {
  const { data } = await api.post<IVaccination>(
    servicesPrefix,
    createVaccinationData,
  );

  return data;
};

export const updateVaccination = async (
  vaccinationId: string,
  updateVaccinationData: UpdateVaccinationData,
): Promise<IVaccination> => {
  const { data } = await api.put<IVaccination>(
    `${servicesPrefix}/${vaccinationId}`,
    updateVaccinationData,
  );

  return data;
};

export const deleteVaccination = async (
  vaccinationId: string,
  userId: string,
): Promise<void> => {
  await api.delete(`${servicesPrefix}/${vaccinationId}`, { data: { userId } });
};
