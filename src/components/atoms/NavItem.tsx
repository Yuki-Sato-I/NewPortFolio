import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface NavItemProps {
  theme?: NavItemThemes[];
  children?: React.ReactNode;
  propStyle?: {};
  onClick?: any;
}

export enum NavItemThemes {
  INIT     = 'INIT',
  SELECTED = 'SELECTED'
}

enum ModifierClassNames {
  INIT     = 'item-init',
  SELECTED = 'item-selected'
}

const NavItem: React.FC<NavItemProps> = ({theme = [NavItemThemes.INIT], children, propStyle = {}, onClick}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <li className={["item", modifierClasses].join(' ')} style={propStyle} onClick={onClick}>
      <hr />
      <span style={{verticalAlign: 'middle'}}>{children}</span>
      <style jsx>
        {`
          .item {
            color: ${CommonStyle.TextColor};
            font-size: ${CommonStyle.TextSize};
            font-weight: bold;
            padding: 2rem 0 2rem 0;
            cursor: pointer;
          }

          hr {
            width: 30px;
            border-width: 3px;
            border-style: solid;
            border-color: ${CommonStyle.TextColor};
            display: inline-block;
            margin-right: 16px;
            vertical-align: middle;
          }

          .item-init {
          }

          .item-selected hr {
            width: 60px;
            border-color: ${CommonStyle.AccentColor};
          }

          .item-selected span {
            color: ${CommonStyle.AccentColor};
            font-size: 24px;
          }

        `}
      </style>
    </li>
  );
}

export default NavItem;