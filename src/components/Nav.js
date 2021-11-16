import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  // Put new links in here:
  const links = [
    { path: '/', label: 'Home' },
    { path: '/user', label: 'User' },
    { path: '/signin', label: 'Sign In' },
    { path: '/signup', label: 'Sign Up' },
    { path: '/ladder', label: 'Ladder' },
    { path: '/games', label: 'Games' },
    { path: '/catgame', label: 'Meow-Meow-Meow' },
  ];

  const logOut = () => {
    window.location.reload(false);
    localStorage.clear();
  };

  return (
    <nav>
      { links.map((link) => <Link to={ link.path }>{ link.label }</Link>) }

      <Link to={ '/' } onClick={ logOut }>
        Log out
      </Link>
    </nav>
  );
}

export default Nav;
