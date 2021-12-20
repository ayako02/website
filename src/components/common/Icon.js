import PropTypes from 'prop-types';

const Icon = ({ href, title, className, isSvg, svgPath, icon }) => (
  <a href={href} title={title} target="_blank" className={`${className}`} rel="noreferrer">
    {isSvg ? (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
      >
        {svgPath}
      </svg>
    ) : (
      icon
    )}
  </a>
);

Icon.defaultProps = {
  href: '#',
  className: '',
  svgPath: null,
  isSvg: false,
  icon: null,
  title: 'initial',
};

Icon.propTypes = {
  icon: PropTypes.node,
  isSvg: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
  svgPath: PropTypes.node,
  className: PropTypes.string,
};

export default Icon;
