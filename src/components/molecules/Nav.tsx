import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';
// atoms
import NavItem, { NavItemThemes } from '../atoms/NavItem';
import Image from '../atoms/Image';
import { RouteName } from '../../common/Const';

interface NavProps {
  query: string;
  onClick: any;
}
const items = ['About', 'Works', 'History', 'Contact', 'Top'];

const Nav: React.FC<NavProps> = ({ query, onClick }) => {

  return (
    <ul className="list-wrapper">
      {items.map((item: string) => {
        return (<NavItem theme={query === item.toLowerCase() ? [NavItemThemes.SELECTED] : []} onClick={item === 'Top' ? () => window.location.href = RouteName.ROOT : () => onClick(item.toLowerCase())}>{item}</NavItem>)
      })}
      <style jsx>{`
        .list-wrapper {
          position: fixed;
          float: left;
          left: 0;
        }
      `}</style>
    </ul>
  );
}

export default Nav;