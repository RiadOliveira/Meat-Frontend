import { IEntity } from './IEntity';

export interface ICompany extends IEntity {
  name: string;
  cnpj: string;
  city: string;
  state: string;
  producerId: string;
}
