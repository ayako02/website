import PropTypes from 'prop-types';

import { Tooltip } from '@arco-design/web-react';

import './style.scss';

const TooltipIcon = ({ className, isSvg, svgPath, icon, tooltipLabel }) => (
  <Tooltip mini content={tooltipLabel} className="">
    <div className={`common icon--tooltip shadow-4 ${className}`}>
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
    </div>
  </Tooltip>
);

TooltipIcon.defaultProps = { className: '', svgPath: null, isSvg: false, icon: null, tooltipLabel: '' };

TooltipIcon.propTypes = {
  icon: PropTypes.node,
  isSvg: PropTypes.bool,
  svgPath: PropTypes.node,
  className: PropTypes.string,
  tooltipLabel: PropTypes.string,
};

export default TooltipIcon;
