import { Router, Redirect } from '@reach/router';

import HomePage from 'pages/home';
import WorkPage from 'pages/work';

import { routes } from './routes';

const { home, work } = routes;

export const MainRoute = () => (
  <Router>
    <HomePage path={home} />
    <WorkPage path={work} />
    <Redirect from={home} to={home} default noThrow />
  </Router>
);
