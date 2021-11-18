import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';

const SERVER_URL_DIV1 = "http://localhost:3000/ladder/mon_mixed.json"

class Ladder extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      teams: []
    }
  }

  componentDidMount() {
    const fetchLadder = () => {
      axios(SERVER_URL_DIV1).then((response) => {
        this.setState({
          loading: false,
          teams: response.data
        });
      })
    }
    fetchLadder();
  }

  renderLadder() {
    return this.state.teams.map((team, index) => {
      const {name, id, wins, losses, games_played, points_for, points_against, points_percentage, draws} = team
      return (
        <tr key={id}>
          <td><Link to={`/teams/${id}`}>{name}</Link></td>
          <td>{games_played}</td>
          <td>{wins}</td>
          <td>{draws}</td>
          <td>{losses}</td>
          <td>{points_for}</td>
          <td>{points_against}</td>
          <td>{points_percentage}</td>
        </tr>
      )
    })
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <div className="body">
          <h2>Ladder</h2>
          <table>
            <th>Team</th>
            <th>Games</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Losses</th>
            <th>For</th>
            <th>Against</th>
            <th>F/A %</th>
            <tbody>
              {this.renderLadder()}
            </tbody>
          </table>
        </div>
      );
    }
  }
}


export default Ladder;
