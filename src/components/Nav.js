import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const logOut = () => {
    window.location.reload(false);
    localStorage.clear();
  };

  return (
    <nav>
      { props.links.map((link) => <Link to={ link.path }>{ link.label }</Link>) }

      <Link to={ '/' } onClick={ logOut }>
        Log out
      </Link>
    </nav>
  );
}

export default Nav;
