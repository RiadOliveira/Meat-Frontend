import { AccountType } from 'types/AccountType';

export interface UpdateMemberData {
  memberId: string;
  name: string;
  email: string;
  accountType: AccountType;
  password?: string;
}
