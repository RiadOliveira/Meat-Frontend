import { ISlaughter } from 'types/entities/ISlaughter';
import { CreateSlaughterData } from 'types/entities/operations/slaughter/CreateSlaughterData';
import { UpdateSlaughterData } from 'types/entities/operations/slaughter/UpdateSlaughterData';
import { api } from './api';

const servicesPrefix = '/slaughter';

export const createSlaughter = async (
  createSlaughterData: CreateSlaughterData,
): Promise<ISlaughter> => {
  const { data } = await api.post<ISlaughter>(
    servicesPrefix,
    createSlaughterData,
  );

  return data;
};

export const updateSlaughter = async (
  slaughterId: string,
  updateSlaughterData: UpdateSlaughterData,
): Promise<ISlaughter> => {
  const { data } = await api.put<ISlaughter>(
    `${servicesPrefix}/${slaughterId}`,
    updateSlaughterData,
  );

  return data;
};

export const deleteSlaughter = async (
  slaughterId: string,
  userId: string,
): Promise<void> => {
  await api.delete(`${servicesPrefix}/${slaughterId}`, { data: { userId } });
};
