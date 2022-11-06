import { IUser } from 'types/entities/IUser';
import { OmitDefaultEntityProperties } from 'types/entities/OmitDefaultEntityProperties';

type MemberData = Omit<OmitDefaultEntityProperties<IUser>, 'companyId'>;

export interface CreateMemberData extends MemberData {
  producerId: string;
}
