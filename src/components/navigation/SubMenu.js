import PropTypes from 'prop-types';

import { Menu } from '@arco-design/web-react';

import { DEFAULT_SUB_MENU_KEYS, SUB_MENU_ITEMS } from 'settings/constants/navigation';

import './style.scss';

const MenuItem = Menu.Item;

const SubMenu = ({ onClick }) => (
  <div className="sub-menu center">
    <Menu mode="horizontal" defaultSelectedKeys={DEFAULT_SUB_MENU_KEYS} onClickMenuItem={string => onClick(string)}>
      {SUB_MENU_ITEMS.map(item => {
        const { key, label } = item;
        return <MenuItem key={key}>{label}</MenuItem>;
      })}
    </Menu>
  </div>
);

SubMenu.propTypes = { onClick: PropTypes.func.isRequired };

export default SubMenu;
