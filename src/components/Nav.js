import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function pageRefresh() {
  window.location.reload(false);
  localStorage.clear();
};

const Nav = (props) => {
  return (
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
<<<<<<< HEAD
        <Link to='/game'>
          <li>Game</li>
=======
        <Link to='/catgame'>
          <li>Meow-Meow-Meow</li>
>>>>>>> 980a52971f0686ebbcdc70346014dcb77349a189
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
