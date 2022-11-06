import { AuthContext } from 'hooks/auth';
import { Routes } from 'routes';
import './styles/styles.css';

export const App: React.FC = () => {
  return (
    <AuthContext>
      <Routes />
    </AuthContext>
  );
};
