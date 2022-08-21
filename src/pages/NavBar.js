import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <div className="navbar-wrap">
      <h1>Math Magicians</h1>
      <div className="navbar">
        {links.map((link) => (
          <li className="navlink" key={link.id}>
            <NavLink to={link.path} className="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
