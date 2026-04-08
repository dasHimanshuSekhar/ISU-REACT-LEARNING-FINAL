import React from 'react';
import './Header.css';

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">IDBI</div>
        <span className="brand-name">Merchant Portal</span>
      </div>
      <div className="header-right">
        <div className="user-menu">
          <span className="user-name">Welcome, User</span>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;