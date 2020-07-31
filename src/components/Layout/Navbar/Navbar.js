import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => (
  <div className="header">
    <nav>
      <div className="menu">
        <ul className="nav_links">
          <li>
            <NavLink activeClassName="active-link" exact to="/">
              <i className="fas fa-home" style={{ marginRight: '3px' }}></i>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" exact to="/shops">
              Shops
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" exact to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" exact to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" exact to="/landing">
              Landing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
export default Navbar;
