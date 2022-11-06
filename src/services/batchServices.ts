import { IBatch } from 'types/entities/IBatch';
import { IBatchWithRelatedEntities } from 'types/entities/IBatchWithRelatedEntities';
import { BatchDataListedFromCompany } from 'types/entities/operations/batch/BatchDataListedFromCompany';
import { CreateBatchData } from 'types/entities/operations/batch/CreateBatchData';
import { UpdateBatchData } from 'types/entities/operations/batch/UpdateBatchData';
import { api } from './api';

const servicesPrefix = '/batch';

export const createBatch = async (
  createBatchData: CreateBatchData,
): Promise<BatchDataListedFromCompany> => {
  const { data } = await api.post<BatchDataListedFromCompany>(
    servicesPrefix,
    createBatchData,
  );

  return data;
};

export const findBatchById = async (
  batchId: string,
): Promise<IBatchWithRelatedEntities> => {
  const { data } = await api.get<IBatchWithRelatedEntities>(
    `${servicesPrefix}/${batchId}`,
  );

  return data;
};

export const listBatchesFromCompany = async (
  companyId: string,
): Promise<BatchDataListedFromCompany[]> => {
  const { data } = await api.get<BatchDataListedFromCompany[]>(
    `${servicesPrefix}/list-from-company/${companyId}`,
  );

  return data;
};

export const updateBatch = async (
  batchId: string,
  updateBatchData: UpdateBatchData,
): Promise<IBatch> => {
  const { data } = await api.put<IBatch>(
    `${servicesPrefix}/${batchId}`,
    updateBatchData,
  );

  return data;
};

export const deleteBatch = async (
  batchId: string,
  userId: string,
): Promise<void> => {
  await api.delete(`${servicesPrefix}/${batchId}`, { data: { userId } });
};
