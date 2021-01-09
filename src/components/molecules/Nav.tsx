import React, { useContext, useState } from 'react';
import { stack as Menu } from 'react-burger-menu'
import { Link, useHistory } from 'react-router-dom';
// atoms
import NavItem, { NavItemThemes } from '../atoms/NavItem';
import { capitalize } from '../../common/Function';
import { QueryContext } from '../../provider/Provider';

const styles = {
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

const linkStyle ={
  display: 'block',
  padding: '16px 8px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold' as 'bold'
}

const pages = ['about', 'works', 'history', 'contact'];

const Nav: React.FC = () => {
  const queryContext = useContext(QueryContext);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (newQuery: string) => {
    queryContext.setQuery(newQuery);
  }

  return (
    <>
      <ul className="list-wrapper pc">
        {pages.map((item: string) => {
          return (
              <NavItem
                theme={queryContext.query === item.toLowerCase() ? [NavItemThemes.SELECTED] : []}
                onClick={() => {
                  onClick(item);
                }}
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
                    history.push({
                      pathname: '/home',
                      search: `?page=${item}`
                    })
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