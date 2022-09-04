import { HomePage } from 'pages/HomePage';
import { SignInPage } from 'pages/SignInPage';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { MissingRoute } from './MissingRoute';
import { routesAddresses } from './routesAddresses';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routesAddresses.homePage} exact component={HomePage} />
        <Route path={routesAddresses.signIn} exact component={SignInPage} />
        <Route path="*" exact component={MissingRoute} />
      </Switch>
    </BrowserRouter>
  );
};
