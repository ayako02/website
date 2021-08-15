import { Children } from 'react';
import get from 'lodash.get';

import Icon from 'components/common/Icon';

import { HOME_PAGE_ICONS } from 'settings/constants/icons';

const HomeContent = () => (
  <div className="content">
    <h1 className="mb0">Ayako</h1>
    <h4 className="f5 f4-l ph3 ph0-l tc">Front End Developer | UX Designer</h4>
    <p className="f7 f6-m f5-l ph3 ph0-l tc">Someone who is passionate on coding, designing, reading & writing.</p>

    <div className="flex flex-row items-center mv4">
      {Children.toArray(
        HOME_PAGE_ICONS.map(icon => {
          const isSvg = get(icon, 'isSvg', false);
          const title = get(icon, 'title', '');
          const href = get(icon, 'href', '');
          const linkIcon = get(icon, 'icon', null);
          const svgPath = get(icon, 'svgPath', null);
          return <Icon isSvg={isSvg} title={title} href={href} svgPath={svgPath} icon={linkIcon} className="icon dim" />;
        })
      )}
    </div>
  </div>
);

export default HomeContent;
