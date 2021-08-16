import { Link } from '@reach/router';

import { routes } from 'router/routes';

import MyLogo from 'assets/logo/logo.jpg';

import NavLink from './NavLink';

const { home, work } = routes;

const Navbar = () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <Link to={home} className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l">
      <img src={MyLogo} className="dib w2 h2 br-100" alt="Ayako's site" />
    </Link>

    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <NavLink label="About" to={home} className="black link f5 mr3 dib" />

      <b className="interpunct">·</b>

      <NavLink label="Work" to={work} className="black link f5 dib ml3" />
    </div>
  </nav>
);

export default Navbar;
