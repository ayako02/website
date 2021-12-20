import { Link } from '@reach/router';
import { Divider } from '@arco-design/web-react';

import { routes } from 'router/routes';

import MyLogo from 'assets/logo/logo.jpg';

import NavLink from './NavLink';

const { home, work } = routes;

const Navbar = () => (
  <nav className="flex flex-row items-center justify-between w-100 border-box ph5 pv3">
    <Link to={home} className="v-mid mid-gray link dim">
      <img src={MyLogo} className="dib w2 h2 br-100" alt="Ayako's site" />
    </Link>

    <div>
      <NavLink label="About" route={home} className="black ttu tracked link f5 mr3 dib" />
      <Divider type="vertical" />
      <NavLink label="Work" route={work} className="black ttu tracked link f5 ml3 dib" />
    </div>
  </nav>
);

export default Navbar;
