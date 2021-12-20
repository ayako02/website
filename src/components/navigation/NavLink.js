import get from 'lodash.get';
import PropTypes from 'prop-types';

import { Link, useLocation } from '@reach/router';

const NavLink = ({ route, label, className }) => {
  const location = useLocation();
  const currentPath = get(location, 'pathname', '');
  const activeLink = currentPath === route ? 'active' : 'dim';

  return (
    <Link to={route} className={`${activeLink} ${className}`}>
      {label}
    </Link>
  );
};

NavLink.defaultProps = { className: '', route: '/', label: '' };

NavLink.propTypes = { route: PropTypes.string, label: PropTypes.string, className: PropTypes.string };

export default NavLink;
