
import React, { useState } from 'react';
import '../css/Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#7f9e7f', borderColor: '#7f9e7f' }}>Submit</button>
          </div>
        </form>
      ) : (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us! We will get back to you as soon as possible.<br/>
          <Link to={`/`} className="btn btn-outline-success">Back to Home page→</Link>
        </div>
        
      )}
    </div>
  );
}

export default Contact;