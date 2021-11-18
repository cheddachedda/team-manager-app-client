import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = "https://obscure-chamber-58161.herokuapp.com//teams.json"

class Fixture extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    const fetchFixture = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({teams: response.data});
      })
    }
    fetchFixture();
  }

  renderFixture() {
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
      <div className="body">
        <h2>Fixture</h2>
        <table>
          <tbody>
            {this.renderFixture()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Fixture;
