import { Router, Redirect } from '@reach/router';

import HomePage from 'containers/home';
import WorkPage from 'containers/work';

import { routes } from './routes';

const { home, work } = routes;

export const MainRoute = () => (
  <Router>
    <HomePage path={home} />
    <WorkPage path={work} />
    <Redirect from={home} to={home} default noThrow />
  </Router>
);
