import { Router, Redirect } from '@reach/router';

import HomePage from 'pages/home';
import WorkPage from 'pages/work';
import ProjectPage from 'pages/project';

import { routes } from './routes';

const { home, work, design } = routes;

export const MainRoute = () => (
  <Router>
    <HomePage path={home} />
    <WorkPage path={work} />
    <ProjectPage path={design} />
    <Redirect from={home} to={home} default noThrow />
  </Router>
);
