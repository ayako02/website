import PropTypes from 'prop-types';

import { Link } from '@reach/router';

import { routes } from 'router/routes';

const { home, work } = routes;

const Navbar = () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <Link to={home} className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l">
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Ayako's site" />
    </Link>

    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <Link to={home} className="black link dim f6 f5-l mr3 dib">
        About
      </Link>

      <b className="interpunct">·</b>

      <Link to={work} className="black link dim f6 f5-l dib ml3">
        Work
      </Link>
    </div>
  </nav>
);

Navbar.defaultProps = {};

Navbar.propTypes = {};

export default Navbar;
