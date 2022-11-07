import { HomePage } from 'pages/HomePage';
import { SignUpPage } from 'pages/SignUpPage';
import { BatchesPage } from 'pages/BatchesPage';
import { BatchDetails } from 'pages/BatchDetails';
import { MembersPage } from 'pages/MembersPage';
import { ExposeBatch } from 'pages/ExposeBatch';
import { QRCodePage } from 'pages/QRCodePage';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { MissingRoute } from './MissingRoute';
import { routesAddresses } from './routesAddresses';
import { Route } from './Route';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routesAddresses.homePage} exact component={HomePage} />
        <Route path={routesAddresses.signUp} exact component={SignUpPage} />
        <Route path={routesAddresses.qrCodePage} exact component={QRCodePage} />
        <Route
          exact
          isPrivate
          path={routesAddresses.batch}
          component={BatchesPage}
        />
        <Route
          exact
          isPrivate
          path={routesAddresses.batchDetails}
          component={BatchDetails}
        />
        <Route
          exact
          isPrivate
          path={routesAddresses.members}
          component={MembersPage}
        />
        <Route
          path={routesAddresses.exposeBatch}
          exact
          component={ExposeBatch}
        />
        <Route path="*" exact component={MissingRoute} />
      </Switch>
    </BrowserRouter>
  );
};
