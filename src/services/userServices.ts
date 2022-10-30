import { CreateUserSessionData } from 'types/entities/operations/user/CreateUserSessionData';
import { UpdateUserData } from 'types/entities/operations/user/UpdateUserData';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';
import { api } from './api';

const servicesPrefix = '/user';

export const createUserSession = async (
  createSessionData: CreateUserSessionData,
): Promise<UserWithoutPassword> => {
  const { data } = await api.post<UserWithoutPassword>(
    `${servicesPrefix}/sessions`,
    createSessionData,
  );

  return data;
};

export const findUserById = async (
  userId: string,
): Promise<UserWithoutPassword> => {
  const { data } = await api.get<UserWithoutPassword>(
    `${servicesPrefix}/${userId}`,
  );

  return data;
};

export const updateUser = async (
  userId: string,
  updateUserData: UpdateUserData,
): Promise<UserWithoutPassword> => {
  const { data } = await api.put<UserWithoutPassword>(
    `${servicesPrefix}/${userId}`,
    updateUserData,
  );

  return data;
};

export const deleteUser = async (userId: string): Promise<void> => {
  await api.delete(`${servicesPrefix}/${userId}`);
};
