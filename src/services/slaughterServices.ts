import { CreateSlaughterData } from 'types/entities/operations/slaughter/CreateSlaughterData';
import { SlaughterForFindType } from 'types/entities/operations/slaughter/SlaughterForFindType';
import { UpdateSlaughterData } from 'types/entities/operations/slaughter/UpdateSlaughterData';
import { api } from './api';

const servicesPrefix = '/slaughter';

export const createSlaughter = async (
  createSlaughterData: CreateSlaughterData,
): Promise<SlaughterForFindType> => {
  const { data } = await api.post<SlaughterForFindType>(
    servicesPrefix,
    createSlaughterData,
  );

  return data;
};

export const updateSlaughter = async (
  slaughterId: string,
  updateSlaughterData: UpdateSlaughterData,
): Promise<SlaughterForFindType> => {
  const { data } = await api.put<SlaughterForFindType>(
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
