import { HomePage } from 'pages/HomePage';
import { SignUpPage } from 'pages/SignUpPage';
import { BatchPage } from 'pages/BatchPage';
import { BatchDetails } from 'pages/BatchDetails';

import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { MissingRoute } from './MissingRoute';
import { routesAddresses } from './routesAddresses';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routesAddresses.homePage} exact component={HomePage} />
        <Route path={routesAddresses.signUp} exact component={SignUpPage} />
        <Route path={routesAddresses.batch} exact component={BatchPage} />
        <Route
          path={routesAddresses.batchDetails}
          exact
          component={BatchDetails}
        />

        <Route path="*" exact component={MissingRoute} />
      </Switch>
    </BrowserRouter>
  );
};
