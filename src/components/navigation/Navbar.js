import PropTypes from 'prop-types';

import { Link } from '@reach/router';
import { Divider } from '@arco-design/web-react';

import { routes } from 'router/routes';

import MyLogo from 'assets/logo/logo.jpg';

import NavLink from './NavLink';

import './style.scss';

const { home, work } = routes;

const Navbar = ({ isCustomPath, currentPath, className }) => (
  <div className={className}>
    <nav className="border-box ph5 pv3">
      <Link to={home} className="v-mid mid-gray link dim">
        <img src={MyLogo} className="dib w2 h2 br-100" alt="Ayako's site" />
      </Link>

      <div className="links">
        <NavLink label="About" currentPath={currentPath} route={home} className="black ttu tracked link f5 mr3 dib" />
        <Divider type="vertical" />
        <NavLink
          label="Work"
          route={work}
          currentPath={currentPath}
          isCustomPath={isCustomPath}
          className="black ttu tracked link f5 ml3 dib"
        />
      </div>
    </nav>
  </div>
);

Navbar.defaultProps = { currentPath: '', className: '', isCustomPath: false };

Navbar.propTypes = { currentPath: PropTypes.string, className: PropTypes.string, isCustomPath: PropTypes.bool };

export default Navbar;
