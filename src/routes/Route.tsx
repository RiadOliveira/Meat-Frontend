import { useAuth } from 'hooks/auth';
import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  Redirect,
} from 'react-router-dom';
import { routesAddresses } from './routesAddresses';

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

export const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...props
}) => {
  const { userData } = useAuth();
  const userIsValid = userData !== null;

  return (
    <ReactRoute
      {...props}
      render={({ location }) => {
        if (userIsValid === isPrivate) return <Component />;

        return (
          <Redirect
            to={{
              pathname: isPrivate
                ? routesAddresses.homePage
                : routesAddresses.batch,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
