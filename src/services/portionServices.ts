import { IPortion } from 'types/entities/IPortion';
import { CreatePortionData } from 'types/entities/operations/portion/CreatePortionData';
import { UpdatePortionData } from 'types/entities/operations/portion/UpdatePortionData';
import { api } from './api';

const servicesPrefix = '/portion';

export const createPortion = async (
  createPortionData: CreatePortionData,
): Promise<IPortion> => {
  const { data } = await api.post<IPortion>(servicesPrefix, createPortionData);
  return data;
};

export const updatePortion = async (
  portionId: string,
  updatePortionData: UpdatePortionData,
): Promise<IPortion> => {
  const { data } = await api.put<IPortion>(
    `${servicesPrefix}/${portionId}`,
    updatePortionData,
  );

  return data;
};

export const deletePortion = async (
  portionId: string,
  userId: string,
): Promise<void> => {
  await api.delete(`${servicesPrefix}/${portionId}`, { data: { userId } });
};
