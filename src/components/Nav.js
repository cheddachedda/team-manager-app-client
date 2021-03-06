import React from 'react';
import '../css/Nav.css';
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
      <div className="nav-container">
        <Link to='/'>Team Manager</Link>
        { props.currentUser.id && <Link to='/user'>User</Link>}
        <Link to='/ladder'>Ladder</Link>
        <Link to='/games'>Games</Link>
        <div className="divider" />
        { props.currentUser.admin && <Link to='/admin'>Admin</Link>}
        { renderAuthenticationLink() }
      </div>
    </nav>
  );
}

export default Nav;
