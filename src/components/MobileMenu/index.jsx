import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../images/logo_inverted.png';
import './styles.css';

const MobileMenu = ({ setMobileMenuOpen }) => (
  <div className="mobile-menu">
    <Link className="logo-icon" to="/" onClick={() => setMobileMenuOpen(false)}>
      <img src={logoIcon} alt="logo_icon"/>
    </Link>

    <ul>
      <li>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Jogs</Link>
      </li>
      <li>
        <Link to="/info" onClick={() => setMobileMenuOpen(false)}>Info</Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
      </li>
      <li>
        <Link className="logout-icon" to="/login" />
      </li>
    </ul>

    <span className="cross-btn" onClick={() => setMobileMenuOpen(false)}>X</span>
  </div>
);

export default MobileMenu;
