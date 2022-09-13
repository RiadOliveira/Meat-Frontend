import { Header } from 'components/Header';
import { HomePage } from 'pages/HomePage';
import { SignUpPage } from 'pages/SignUpPage';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { MissingRoute } from './MissingRoute';
import { routesAddresses } from './routesAddresses';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path={routesAddresses.homePage} exact component={HomePage} />
        <Route path={routesAddresses.signUp} exact component={SignUpPage} />
        <Route path="*" exact component={MissingRoute} />
      </Switch>
    </BrowserRouter>
  );
};
