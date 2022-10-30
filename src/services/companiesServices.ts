import { ICompany } from 'types/entities/ICompany';
import { CreateCompanyData } from 'types/entities/operations/company/CreateCompanyData';
import { CreateEmployeeData } from 'types/entities/operations/company/CreateEmployeeData';
import { UpdateCompanyData } from 'types/entities/operations/company/UpdateCompanyData';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';
import { api } from './api';

const servicesPrefix = '/company';

export const createCompany = async (
  createCompanyData: CreateCompanyData,
): Promise<ICompany> => {
  const { data } = await api.post<ICompany>(servicesPrefix, createCompanyData);
  return data;
};

export const createEmployee = async (
  createEmployeeData: CreateEmployeeData,
): Promise<UserWithoutPassword> => {
  const { data } = await api.post<UserWithoutPassword>(
    `${servicesPrefix}/create-employee`,
    createEmployeeData,
  );

  return data;
};

export const findCompanyById = async (companyId: string): Promise<ICompany> => {
  const { data } = await api.get<ICompany>(`${servicesPrefix}/${companyId}`);
  return data;
};

export const listEmployeesFromCompany = async (
  companyId: string,
): Promise<UserWithoutPassword[]> => {
  const { data } = await api.get<UserWithoutPassword[]>(
    `${servicesPrefix}/list-employees/${companyId}`,
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

export const deleteEmployee = async (
  employeeId: string,
  producerId: string,
): Promise<void> => {
  await api.delete(`${servicesPrefix}/delete-employee/${employeeId}`, {
    data: { producerId },
  });
};

export const deleteCompany = async (companyId: string): Promise<void> => {
  await api.delete(`${servicesPrefix}/${companyId}`);
};
