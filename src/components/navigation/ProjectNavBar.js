import PropTypes from 'prop-types';

import { Link } from '@reach/router';
import { Grid } from '@arco-design/web-react';
import { IconArrowLeft } from '@arco-design/web-react/icon';

import { routes } from 'router/routes';

import MyLogo from 'assets/logo/logo.jpg';

import './style.scss';

const { Row, Col } = Grid;
const { home, work } = routes;

const ProjectNavbar = ({ title }) => (
  <div className="navbar--project">
    <Row>
      <Col flex="100px">
        <Link to={work}>
          <IconArrowLeft />
        </Link>
      </Col>
      <Col flex="auto" className="f4 fw6 tc ttu tracked helvetica">
        <div>{title}</div>
      </Col>
      <Col flex="100px" className="tr">
        <Link to={home} className="v-mid mid-gray link dim">
          <img src={MyLogo} className="dib w2 h2 br-100" alt="Ayako's site" />
        </Link>
      </Col>
    </Row>
  </div>
);

ProjectNavbar.defaultProps = { title: '' };

ProjectNavbar.propTypes = { title: PropTypes.string };

export default ProjectNavbar;
