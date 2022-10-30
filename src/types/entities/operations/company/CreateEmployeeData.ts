import { IUser } from 'types/entities/IUser';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

type EmployeeData = Omit<OmitDefaultEntityProperties<IUser>, 'companyId'>;

export interface CreateEmployeeData extends EmployeeData {
  producerId: string;
}
