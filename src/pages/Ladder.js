import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = "http://localhost:3000/teams.json"

class Ladder extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    const fetchLadder = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({teams: response.data});
      })
    }
    fetchLadder();
  }

  renderLadder() {
    return this.state.teams.map((team, index) => {
      const {name, id, wins, losses, games_played} = team
      return (
        <tr key={id}>
          <td><Link to={`/teams/${id}`}>{name}</Link></td>
          <td>{games_played}</td>
          <td>{wins}</td>
          <td>{losses}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Ladder</h2>
        <table>
          <th>Team</th>
          <th>Games</th>
          <th>Wins</th>
          <th>Losses</th>
          <tbody>
            {this.renderLadder()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ladder;
