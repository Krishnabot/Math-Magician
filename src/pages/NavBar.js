import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <div className={styles.navbarwrap}>
      <div className={styles.navbar}>
        {links.map((link) => (
          <li className={styles.navlink} key={link.id}>
            <NavLink to={link.path} className={styles.activelink}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
