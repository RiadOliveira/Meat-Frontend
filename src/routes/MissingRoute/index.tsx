import React from 'react';
import { Redirect } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';

export const MissingRoute: React.FC = () => {
  return <Redirect to={{ pathname: routesAddresses.homePage }} />;
};
