import get from 'lodash.get';

import { ProjectKyatto } from 'components/project';
import { ProjectNavbar } from 'components/navigation';

import KyattoBanner from 'assets/images/kyatto-banner.png';

import './style.scss';

const ProjectPage = props => {
  const designID = get(props, 'designID', '');

  const banner = designID === 'kyatto' && KyattoBanner;
  const projectTitle = designID === 'kyatto' && 'kyatto';

  return (
    <div className="project-page">
      <ProjectNavbar title={projectTitle} />
      <ProjectKyatto banner={banner} title={projectTitle} />
    </div>
  );
};

export default ProjectPage;
