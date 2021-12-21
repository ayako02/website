import { Suspense, lazy } from 'react';

import './style.scss';

const Content = lazy(() => import('components/home'));
const Navbar = lazy(() => import('components/navigation/Navbar'));

const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="home-container">
      <Navbar className="navbar--transparent" />
      <Content />
      <footer className="footer white">Design & Create by Ayako © 2021</footer>
    </div>
  </Suspense>
);

export default HomePage;
