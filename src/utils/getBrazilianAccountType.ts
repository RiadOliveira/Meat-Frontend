import { AccountType } from 'types/AccountType';

export const getBrazilianAccountType = (accountType: AccountType) => {
  switch (accountType) {
    case AccountType.PRODUCER:
      return 'Responsável';
    case AccountType.NUTRITIONIST:
      return 'Nutricionista';
    case AccountType.VETERINARIAN:
      return 'Veterinário';
    case AccountType.ZOOTECHNOLOGIST:
      return 'Zootecnólogo';
    default:
      return 'Responsável';
  }
};
