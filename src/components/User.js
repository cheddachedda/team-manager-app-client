import { Component } from 'react';

class Users extends Component {
  render() {
    const user = this.props.currentUser;
    return (
      <div className="user">
        <h2>Player Profile</h2>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Fines: {user.fines}</p>
        <p>Balance: {user.balance}</p>
      </div>
    )
  }
}

export default Users;
