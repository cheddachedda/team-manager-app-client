import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  // Renders either a login or logout link depending on whether a currentUser exists
  const renderAuthenticationLink = () => {
    if (props.currentUser.id) {
      return (
        <Link to={ '/' } onClick={ logOut }>
          Log out
        </Link>
      );
    } else {
      return (
        <Link to={ '/signin' }>Sign in</Link>
      );
    }
  };

  const logOut = () => {
    window.location.reload(false); // Ignores window reload and redirects to Home
    localStorage.clear(); // Clears the user token from local storage
  };

  return (
    <nav>
      <Link to='/'>Team Manager</Link>
      { props.currentUser.id && <Link to='/user'>User</Link>}
      <Link to='/ladder'>Ladder</Link>
      <Link to='/games'>Games</Link>
      { renderAuthenticationLink() }
    </nav>
  );
}

export default Nav;
