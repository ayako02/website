import { Children } from 'react';
import get from 'lodash.get';

import { Icon } from 'components/common';
import { HOME_PAGE_ICONS } from 'settings/constants/icons';

const HomeContent = () => (
  <div className="content mh3 ph3 ph4-l pv2 pv3-l">
    <h1 className="mb0 f3 f2-l tracked ttu">Ayako</h1>
    <h4 className="f5 f4-l ph3 ph0-l tc">Front End Developer | UX Designer</h4>
    <p className="f7 f6-m f5-l ph3 ph0-l tc">I am passionates on coding, designing, reading & writing.</p>

    <div className="icon--container mv4">
      {Children.toArray(
        HOME_PAGE_ICONS.map(icon => {
          const href = get(icon, 'href', '');
          const title = get(icon, 'title', '');
          const isSvg = get(icon, 'isSvg', false);
          const linkIcon = get(icon, 'icon', null);
          const svgPath = get(icon, 'svgPath', null);

          return <Icon isSvg={isSvg} title={title} href={href} svgPath={svgPath} icon={linkIcon} className="icon" />;
        })
      )}
    </div>
  </div>
);

export default HomeContent;
