import { Component } from 'react';
import axios from 'axios';

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
      const {name, id} = team
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Ladder</h2>
        <table>
          <tbody>
            {this.renderLadder()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ladder;
