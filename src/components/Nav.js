import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function pageRefresh() {
  window.location.reload(false);
  localStorage.clear()
}

function Nav() {
  return (
    <div className="Header">
      <Link to='/'>
      <h1>Team Manager</h1>
      </Link>
      <nav>
        <ul className='nav-links'>
          <Link to='/user'>
            <li>User</li>
          </Link>
          <Link to='/signin'>
            <li>Sign In</li>
          </Link>
          <Link to={'/'}
            onClick={pageRefresh}>
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
