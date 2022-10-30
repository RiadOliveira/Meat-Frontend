import { AccountType } from 'types/AccountType';
import { IEntity } from './IEntity';

export interface IUser extends IEntity {
  name: string;
  email: string;
  password: string;
  accountType: AccountType;
  companyId: string;
}
