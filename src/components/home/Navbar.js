/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink } from 'react-router-dom';

import { routes } from 'router/routes';

const Navbar = () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <NavLink exact to={routes.about} className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l">
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Ayako's site" />
    </NavLink>

    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <NavLink to={routes.about} activeClassName="b" className="link dim white f6 f5-l mr3 dib">
        About
      </NavLink>

      <b className="interpunct">·</b>

      <NavLink to={routes.work} activeClassName="b" className="link dim white f6 f5-l dib ml3">
        Work
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
