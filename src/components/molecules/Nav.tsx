import React, { useEffect, useState } from 'react';
import { stack as Menu } from 'react-burger-menu'
// common
import CommonStyle from './../../common/CommonStyle';
// atoms
import NavItem, { NavItemThemes } from '../atoms/NavItem';
import Image from '../atoms/Image';
import { RouteName } from '../../common/Const';
import { Link } from 'react-router-dom';

interface NavProps {
  query: string;
  onClick: any;
}
const items = ['About', 'Works', 'History', 'Contact', 'Top'];

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    disabled: 'disabled'
  }
}

var linkStyle ={
  display: 'block',
  padding: '16px 8px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold' as 'bold'
}

const Nav: React.FC<NavProps> = ({ query, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className="list-wrapper pc">
        {items.map((item: string) => {
          return (
              <NavItem
                theme={query === item.toLowerCase() ? [NavItemThemes.SELECTED] : []}
                onClick={item === 'Top' ? () => window.location.href = RouteName.ROOT : () => onClick(item.toLowerCase())}
                key={item}
              >
                {item}
              </NavItem>
            )
        })}
      </ul>
      <div className="middle">
        <Menu
          styles={styles}
          right
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          {items.map((item: string) => {
            return (
                <Link
                  to="#"
                  style={linkStyle}
                  onClick={item === 'Top' ? () => window.location.href = RouteName.ROOT : 
                  () => {
                    setIsOpen(false);
                    onClick(item.toLowerCase());
                  }}
                  key={item}
                  className="link-style"
                >
                  {item}
                </Link>
              )
          })}
        </Menu>
      </div>
      <style jsx>{`
        .list-wrapper {
          position: fixed;
          float: left;
          left: 0;
        }

        .link-style {

        }
      `}</style>
    </>
  );
}

export default Nav;