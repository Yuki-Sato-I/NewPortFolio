import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { stack as Menu } from 'react-burger-menu'
import { Link, useHistory, useLocation } from 'react-router-dom';
// atoms
import NavItem, { NavItemThemes } from '../atoms/NavItem';
import { capitalize } from '../../common/Function';

interface NavProps {
  onClick?: any;
}

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

const pages = ['about', 'works', 'history', 'contact'];

const Nav: React.FC<NavProps> = () => {
  const location = useLocation();
  const history = useHistory();
  const qs = queryString.parse(location.search);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(qs.page ? (pages.includes(qs.page!.toString()) ? qs.page : 'about') : 'works');

  const onClick = (newQuery: string) => {
    setQuery(newQuery);
    history.push({
      pathname: '/home',
      search: `?page=${newQuery}`
    })
  }

  // smart phone でうまくいかなかったので追加
  useEffect(()=> {
    if(location.pathname === '/home') {
      history.push({
        pathname: '/home',
        search: `?page=${query}`
      })
    }
  }, [query]);

  return (
    <>
      <ul className="list-wrapper pc">
        {pages.map((item: string) => {
          return (
              <NavItem
                theme={query === item.toLowerCase() ? [NavItemThemes.SELECTED] : []}
                onClick={() => onClick(item)}
                key={item}
              >
                {capitalize(item)}
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
          {pages.map((item: string) => {
            return (
                <Link
                  to="#"
                  style={linkStyle}
                  onClick={() => {
                    setIsOpen(false);
                    onClick(item);
                  }}
                  key={item}
                  className="link-style"
                >
                  {capitalize(item)}
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
      `}</style>
    </>
  );
}

export default Nav;