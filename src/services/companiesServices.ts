import { ICompany } from 'types/entities/ICompany';
import { CreateCompanyData } from 'types/entities/operations/company/CreateCompanyData';
import { CreateMemberData } from 'types/entities/operations/company/CreateMemberData';
import { UpdateCompanyData } from 'types/entities/operations/company/UpdateCompanyData';
import { UpdateMemberData } from 'types/entities/operations/company/UpdateMemberData';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';
import { api } from './api';

const servicesPrefix = '/company';

export const createCompany = async (
  createCompanyData: CreateCompanyData,
): Promise<ICompany> => {
  const { data } = await api.post<ICompany>(servicesPrefix, createCompanyData);
  return data;
};

export const createMember = async (
  createMemberData: CreateMemberData,
): Promise<UserWithoutPassword> => {
  const { data } = await api.post<UserWithoutPassword>(
    `${servicesPrefix}/create-member`,
    createMemberData,
  );

  return data;
};

export const findCompanyById = async (companyId: string): Promise<ICompany> => {
  const { data } = await api.get<ICompany>(`${servicesPrefix}/${companyId}`);
  return data;
};

export const listMembersFromCompany = async (
  companyId: string,
): Promise<UserWithoutPassword[]> => {
  const { data } = await api.get<UserWithoutPassword[]>(
    `${servicesPrefix}/list-members/${companyId}`,
  );
  return data;
};

export const updateMember = async (
  producerId: string,
  { memberId, ...updateMemberData }: UpdateMemberData,
): Promise<UserWithoutPassword> => {
  const { data } = await api.put<UserWithoutPassword>(
    `${servicesPrefix}/update-member/${memberId}`,
    { ...updateMemberData, producerId },
  );

  return data;
};

export const updateCompany = async (
  companyId: string,
  updateCompanyData: UpdateCompanyData,
): Promise<ICompany> => {
  const { data } = await api.put<ICompany>(
    `${servicesPrefix}/${companyId}`,
    updateCompanyData,
  );

  return data;
};

export const deleteMember = async (
  MemberId: string,
  producerId: string,
): Promise<void> => {
  await api.delete(`${servicesPrefix}/delete-member/${MemberId}`, {
    data: { producerId },
  });
};

export const deleteCompany = async (companyId: string): Promise<void> => {
  await api.delete(`${servicesPrefix}/${companyId}`);
};
