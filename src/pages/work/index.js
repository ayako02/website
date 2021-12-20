import { useState } from 'react';

import { routes } from 'router/routes';
import { DesignContainer } from 'containers/design';
import { SubMenu, Navbar } from 'components/navigation';

import './style.scss';

const DEFAULT_SECTION_NAME = 'Design';

const WorkPage = () => {
  const [sectionName, setSectionName] = useState(DEFAULT_SECTION_NAME);

  const onMenuItemClick = string => setSectionName(string);

  return (
    <div className="work-container">
      <div className="navbar">
        <Navbar currentPath={routes.work} />
      </div>

      <div className="content">
        <SubMenu onClick={onMenuItemClick} />
        <div className="w-100 pa5">{sectionName === DEFAULT_SECTION_NAME ? <DesignContainer /> : <h4>Work in progress...</h4>}</div>
      </div>
    </div>
  );
};

export default WorkPage;
