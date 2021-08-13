import React, { Suspense, lazy } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { routes } from './routes';

const HomePage = lazy(() => import('containers/home'));
const WorkPage = lazy(() => import('containers/work'));

const history = createBrowserHistory();

export const MainRoute = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={withRouter(HomePage)} />
          <Route path={routes.about} component={HomePage} />
          <Route path={routes.work} component={WorkPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};
