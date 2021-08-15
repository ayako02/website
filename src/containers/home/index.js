import { Suspense, lazy } from 'react';

import './style.scss';

const Navbar = lazy(() => import('components/navbar'));
const HomeContent = lazy(() => import('components/home'));

const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="home-container">
      <Navbar />

      <HomeContent />

      <footer className="footer white">Design & Created by Ayako © 2021</footer>
    </div>
  </Suspense>
);

export default HomePage;
