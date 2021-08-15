import { Children } from 'react';
import get from 'lodash.get';

import Icon from 'components/common/Icon';

import { HOME_PAGE_ICONS } from 'settings/constants/icons';

const IconSection = () => (
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
);

export default IconSection;
