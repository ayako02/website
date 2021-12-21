import get from 'lodash.get';

import { Divider, Grid } from '@arco-design/web-react';
import { IconClockCircle, IconUser, IconApps } from '@arco-design/web-react/icon';

import { ProjectNavbar } from 'components/navigation';

import KyattoBanner from 'assets/images/kyatto-banner.png';

import './style.scss';

const { Row, Col } = Grid;

const ProjectPage = props => {
  const designID = get(props, 'designID', '');

  const banner = designID === 'kyatto' && KyattoBanner;
  const projectTitle = designID === 'kyatto' && 'kyatto';

  return (
    <div className="project-page">
      <ProjectNavbar title={projectTitle} />

      <div className="content">
        <img alt={projectTitle} src={banner} />

        <div>
          <Row className="ph5 mt4">
            <Col span={8}>
              <div className="flex flex-row items-center helvetica justify-center">
                <IconUser className="mr3 f4" />
                <span>UX Designer</span>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex flex-row items-center justify-center helvetica">
                <IconClockCircle className="mr3 f4" />
                <span>September 2021 - December 2021</span>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex flex-row items-center justify-center helvetica">
                <IconApps className="mr3 f4" />
                <span>Figma</span>
              </div>
            </Col>
          </Row>
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
