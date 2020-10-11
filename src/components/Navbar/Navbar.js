import React from 'react';
import { Link } from '@reach/router';

import './Navbar.scss';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      let className = props.className || '';
      className = `navbar-item ${className} ${
        isCurrent ? 'navbar-item--active' : ''
      }`;
      return {
        className
      };
    }}
  />
);

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-item navbar-item__header" to="/">
        Martiuh
      </Link>
      <span className="navbar-menu">
        <NavLink to="/projects">Projects</NavLink>
        {/* <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dynamic">Dynamic</NavLink> */}
      </span>
    </nav>
  );
}
