import { AccountType } from 'types/AccountType';

export interface UpdateUserData {
  name: string;
  email: string;
  accountType: AccountType;
  oldPassword?: string;
  password?: string;
}
