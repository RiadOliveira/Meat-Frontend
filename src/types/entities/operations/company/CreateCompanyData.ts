import { ICompany } from 'types/entities/ICompany';
import { IUser } from 'types/entities/IUser';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

export type CompanyCreationData = Omit<
  OmitDefaultEntityProperties<ICompany>,
  'producerId'
>;

export type ProducerCreationData = Omit<
  OmitDefaultEntityProperties<IUser>,
  'companyId' | 'accountType'
>;

export interface CreateCompanyData extends CompanyCreationData {
  producer: ProducerCreationData;
}
