import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Team Manager</h3>
      <ul className='nav-links'>
        <Link to='/user'>
          <li>User</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
