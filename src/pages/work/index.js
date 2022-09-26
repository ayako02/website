import { useState } from 'react';

import { routes } from 'router/routes';
import { ThemeContainer } from 'containers/theme';
import { DesignContainer } from 'containers/design';
import { SubMenu, Navbar } from 'components/navigation';

import './style.scss';

const THEME_SECTION = 'Themes';
const DEV_SECTION = 'Development';
const DEFAULT_SECTION_NAME = 'Design';

const WorkPage = () => {
  const [sectionName, setSectionName] = useState(DEFAULT_SECTION_NAME);

  const onMenuItemClick = string => setSectionName(string);

  return (
    <div className="work-container">
      <Navbar currentPath={routes.work} className="navbar--fixed" />

      <div className="content">
        <SubMenu onClick={onMenuItemClick} />
        <div className="w-100">
          {sectionName === THEME_SECTION && <ThemeContainer />}
          {sectionName === DEFAULT_SECTION_NAME && <DesignContainer />}
          {sectionName === DEV_SECTION && <h4 className="tc">Work in progress...</h4>}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
