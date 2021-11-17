import { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {
  render() {
    return (
      <div>

      <h1>Admin Page</h1>

      <h2>View All Teams</h2>
      <Link to={ '/AdminGames' }>Games List</Link>

      <h2>Create A New Game</h2>
      <Link to={ '/CreateGame' }>Create Game</Link>

      </div>
    )
  }
}

export default Admin;
