import { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const user = this.props.currentUser;

    if (user.id > 0) {
      return (
        <div className="user">
          <h2>Player Profile</h2>
          <h3>{ user.name }</h3>
          <p>Email: { user.email }</p>
          <p>Fines: { user.fines }</p>
          <p>Balance: { user.balance }</p>
        </div>
      );

    } else {

      return (
        <div>
          <h2> Please Sign In to continue </h2>
        </div>
      )
    };
  }
}



export default Users;
