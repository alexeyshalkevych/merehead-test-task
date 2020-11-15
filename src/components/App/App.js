import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import routes from '../../constants/routes';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const AsyncHomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);

const AsyncCreateUserPage = lazy(() =>
  import(
    '../../pages/CreateUserPage' /* webpackChunkName: "create-user-page" */
  ),
);

const AsyncEditUserPage = lazy(() =>
  import('../../pages/EditUserPage' /* webpackChunkName: "edit-user-page" */),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <div className="progress">
            <div className="indeterminate" />
          </div>
        }
      >
        <Switch>
          <Route path={routes.HOME} exact component={AsyncHomePage} />
          <Route path={routes.CREATE_USER} component={AsyncCreateUserPage} />
          <Route path={routes.EDIT_USER} component={AsyncEditUserPage} />
          <Redirect to={routes.HOME} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
