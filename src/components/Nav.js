import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

function pageRefresh() {
  window.location.reload(false);
  localStorage.clear();
};

const Nav = (props) => {
  return (
    <div className="Header">
      <Link to='/'>
      <h1>Team Manager</h1>
      </Link>
      <nav>
        <ul className='nav-links'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/user'>
          <li>User</li>
        </Link>
        <Link to='/signin'>
          <li>Sign In</li>
        </Link>
        <Link to='/signup'>
          <li>Sign Up</li>
        </Link>
        <Link to='/ladder'>
          <li>Ladder</li>
        </Link>
        <Link to='/games'>
          <li>Games</li>
        </Link>
        <Link to='/catgame'>
          <li>Meow</li>
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
