import { CreateSlaughterData } from './CreateSlaughterData';

export type UpdateSlaughterData = Omit<CreateSlaughterData, 'batchId'>;
