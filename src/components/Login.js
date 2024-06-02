import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      loggedIn: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
      this.setState({ message: 'Login successful!', loggedIn: true });
    } else {
      this.setState({ message: 'Invalid email or password.' });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/home" />;
    }

    return (
      <div className="login-container">
        <h1>Login</h1>
        {this.state.message && <p className="message">{this.state.message}</p>}
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
