import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function pageRefresh() {
  window.location.reload(false);
  localStorage.clear()
}

function Nav() {
  return (
    <nav>
      <h3>Team Manager</h3>
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
  );
}

export default Nav;
