import { IUser } from './IUser';

export type UserWithoutPassword = Omit<IUser, 'password'>;
