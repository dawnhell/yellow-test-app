import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authUtil';

import logoIcon from '../../images/logo_icon.png';
import './styles.css';

const Home = ({ children }) => (
  <div>
    <header>
      <Link className="logo-icon" to="/">
        <img src={logoIcon} alt="logo_icon"/>
      </Link>

      {isAuthenticated() && (
        <nav className="nav-list">
          <ul>
            <li>
              <Link to="/">Jogs</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link className="logout-icon" to="/login" />
            </li>
          </ul>
        </nav>
      )}
    </header>

    {children}
  </div>
);

export default Home;
