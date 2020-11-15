import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../constants/routes';
import NavContainer from './Navigation.styled';

const Navigation = () => (
  <NavContainer>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="right">
        <li>
          <NavLink to={routes.HOME} exact>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.CREATE_USER}>Create User</NavLink>
        </li>
      </ul>
    </div>
  </NavContainer>
);

export default Navigation;
