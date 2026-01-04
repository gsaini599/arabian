import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('owner');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would call backend
    if (userType === 'owner') {
      navigate('/owner-dashboard');
    } else if (userType === 'staff') {
      // Default to revenue dashboard for staff
      navigate('/dashboard/revenue');
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <div className="logo-icon">🌙</div>
              <span className="logo-text">Arabian Nights</span>
            </div>
            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>
          </div>

          <div className="user-type-selector">
            <button
              className={`type-btn ${userType === 'owner' ? 'active' : ''}`}
              onClick={() => setUserType('owner')}
            >
              <User size={20} />
              Property Owner
            </button>
            <button
              className={`type-btn ${userType === 'staff' ? 'active' : ''}`}
              onClick={() => setUserType('staff')}
            >
              <User size={20} />
              Staff/Team
            </button>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">
                <Mail size={18} /> Email Address
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@example.com"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Lock size={18} /> Password
              </label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="••••••••"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            {userType === 'owner' && (
              <p>
                Don't have an account?{' '}
                <button onClick={() => navigate('/hosting-check')} className="link-btn">
                  Get Started
                </button>
              </p>
            )}
          </div>
        </div>

        <div className="login-info">
          <h3>Manage Your Rental Business</h3>
          <ul>
            <li>✓ Track earnings and bookings in real-time</li>
            <li>✓ Access to trusted vendor network</li>
            <li>✓ Automated guest management</li>
            <li>✓ Multi-platform listing synchronization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

