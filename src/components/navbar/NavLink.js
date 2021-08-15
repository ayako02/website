import get from 'lodash.get';
import PropTypes from 'prop-types';

import { Link, useLocation } from '@reach/router';

const NavLink = ({ to, label, className }) => {
  const location = useLocation();
  const currentPath = get(location, 'pathname', '');
  const activeLink = currentPath === to ? 'b' : '';

  return (
    <Link to={to} className={`${activeLink} ${className}`}>
      {label}
    </Link>
  );
};

NavLink.defaultProps = { className: '', to: '/', label: '' };

NavLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default NavLink;
