import { Header } from 'components/Header';
import { Routes } from 'routes';
import './styles/styles.css';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};
