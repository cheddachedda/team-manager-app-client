import { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.inputField = this.inputField.bind(this);
  }

  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // TODO: Create user
  _handleSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  inputField(label) {
    return (
      <label key={ label }>
        { label }
        <input
          onChange={ this._handleChange }
          name={ label }
          required
          type={ label === 'name' ? 'text' : label }
          // value={ this.state[label] }
        />
      </label>
    );
  }

  render() {
    const fields = Object.keys(this.state); // this.state's keys as an array
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={ this._handleSubmit } >
          { fields.map(this.inputField) }
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default SignUp;
