import { Component } from 'react';

class Users extends Component {
  render() {
    const user = this.props.currentUser;
    return (
      <div>
        <h1>Player Profile</h1>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Fines: {user.fines}</p>
        <p>Balance: {user.balance}</p>
      </div>
    )
  }
}

export default Users;
