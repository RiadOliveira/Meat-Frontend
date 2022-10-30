import { CreatePortionData } from './CreatePortionData';

export type UpdatePortionData = Omit<CreatePortionData, 'batchId'>;
