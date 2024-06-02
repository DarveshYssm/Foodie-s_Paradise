import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [registered, setRegistered] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === formData.email);

    if (userExists) {
      setMessage('User with this email already exists.');
    } else {
      existingUsers.push(formData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      setMessage('Registration successful!');
      setRegistered(true);
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register-container">
      <h1>Register</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
