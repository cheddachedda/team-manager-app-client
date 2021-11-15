import { Component } from 'react';

class Users extends Component {
  render() {
    const user = this.props.currentUser;
    if (user.id > 0) {
      return (
        <div>
          <h1>Player Profile</h1>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Fines: {user.fines}</p>
          <p>Balance: {user.balance}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Please Sign In to continue </h1>
        </div>
      )
    };
  }
}

export default Users;
