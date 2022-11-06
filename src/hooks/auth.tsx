import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';

interface Props {
  children: React.ReactNode;
}

interface IAuthContext {
  userData: UserWithoutPassword | null;
  setUserLocalData(updatedUserLocalData: UserWithoutPassword): void;
  signOut(): void;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);
const LOCAL_STORAGE_USER_KEY = '@Meat-User';

const AuthContext: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserWithoutPassword | null>(null);

  const signOut = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    setUserData(null);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (!user) return;

    const parsedUser = JSON.parse(user) as UserWithoutPassword;
    setUserData(parsedUser);
  }, []);

  const setUserLocalData = useCallback(
    (updatedUserLocalData: UserWithoutPassword) => {
      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify(updatedUserLocalData),
      );
      setUserData(updatedUserLocalData);
    },
    [],
  );

  return (
    <authContext.Provider
      value={{
        userData,
        setUserLocalData,
        signOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = (): IAuthContext => useContext(authContext);

export { AuthContext, useAuth };
