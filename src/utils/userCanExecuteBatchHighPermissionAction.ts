import { AccountType } from 'types/AccountType';
import { IUser } from 'types/entities/IUser';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';

export const userCanExecuteBatchHighPermissionAction = ({
  accountType,
}: IUser | UserWithoutPassword) => {
  const userIsProducer = accountType === AccountType.PRODUCER;
  const userIsZootechnologist = accountType === AccountType.ZOOTECHNOLOGIST;

  return userIsProducer || userIsZootechnologist;
};
