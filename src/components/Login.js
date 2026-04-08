import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>IDBI Merchant</h1>
          <p>Banking Solutions</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email / User ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <div className="login-footer">
          <a href="#forgot">Forgot Password?</a>
          <a href="#signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;