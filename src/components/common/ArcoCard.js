import PropTypes from 'prop-types';

import { Card } from '@arco-design/web-react';

import './style.scss';

const ArcoCard = ({ title, description }) => (
  <Card className="card-custom-hover-style common arco-card shadow-4" title={title} hoverable>
    {description}
  </Card>
);

ArcoCard.propTypes = { title: PropTypes.string.isRequired, description: PropTypes.string.isRequired };

export default ArcoCard;
