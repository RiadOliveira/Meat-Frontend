import { ICompany } from 'types/entities/ICompany';
import { IUser } from 'types/entities/IUser';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

type CreationCompany = Omit<
  OmitDefaultEntityProperties<ICompany>,
  'producerId'
>;

type CreationProducer = Omit<
  OmitDefaultEntityProperties<IUser>,
  'companyId' | 'accountType'
>;

export interface CreateCompanyData extends CreationCompany {
  producer: CreationProducer;
}
