import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Star, Eye, EyeOff, ArrowRight, User, Building } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('owner');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleGoogleLogin = async () => {
    // Show loading state
    const button = document.querySelector('.social-btn.google');
    if (button) {
      button.disabled = true;
      button.innerHTML = '<span class="spinner"></span> Connecting...';
    }

    // Simulate OAuth flow delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock Google OAuth - in production, this would use actual Google OAuth
    const googleUserData = {
      id: `google_${Date.now()}`,
      email: formData.email || `user${Math.floor(Math.random() * 1000)}@gmail.com`,
      name: formData.email ? formData.email.split('@')[0] : 'Google User',
      avatar: `https://picsum.photos/seed/${formData.email || 'google'}/40/40.jpg`,
      provider: 'google',
      userType: userType,
      verified: true
    };
    
    localStorage.setItem('user', JSON.stringify(googleUserData));
    localStorage.setItem('token', `google-oauth-${googleUserData.id}`);
    localStorage.setItem('authProvider', 'google');
    
    // Show success message
    if (button) {
      button.innerHTML = '✓ Success!';
      button.style.background = '#10b981';
    }

    // Redirect after brief delay
    setTimeout(() => {
      if (userType === 'owner') {
        navigate('/owner-dashboard');
      } else if (userType === 'admin') {
        navigate('/dashboard/revenue');
      } else {
        navigate('/home');
      }
    }, 1000);
  };

  const handleMicrosoftLogin = async () => {
    // Show loading state
    const button = document.querySelector('.social-btn.microsoft');
    if (button) {
      button.disabled = true;
      button.innerHTML = '<span class="spinner"></span> Connecting...';
    }

    // Simulate OAuth flow delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock Microsoft OAuth
    const microsoftUserData = {
      id: `ms_${Date.now()}`,
      email: formData.email || `user${Math.floor(Math.random() * 1000)}@outlook.com`,
      name: formData.email ? formData.email.split('@')[0] : 'Microsoft User',
      avatar: `https://picsum.photos/seed/${formData.email || 'microsoft'}/40/40.jpg`,
      provider: 'microsoft',
      userType: userType,
      verified: true
    };
    
    localStorage.setItem('user', JSON.stringify(microsoftUserData));
    localStorage.setItem('token', `ms-oauth-${microsoftUserData.id}`);
    localStorage.setItem('authProvider', 'microsoft');
    
    // Show success message
    if (button) {
      button.innerHTML = '✓ Success!';
      button.style.background = '#10b981';
    }

    // Redirect after brief delay
    setTimeout(() => {
      if (userType === 'owner') {
        navigate('/owner-dashboard');
      } else if (userType === 'admin') {
        navigate('/dashboard/revenue');
      } else {
        navigate('/home');
      }
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // For demo purposes - allow any credentials
    if (!formData.email || !formData.password) {
      alert('Please enter email and password');
      return;
    }

    // Show loading state on submit button
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Signing In...';
    }
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          userType: userType
        })
      });

      const data = await response.json();

      if (data.success) {
        // Store user info and token in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        
        // Show success
        if (submitBtn) {
          submitBtn.innerHTML = '✓ Success!';
          submitBtn.style.background = '#10b981';
        }
        
        // Redirect after brief delay
        setTimeout(() => {
          if (userType === 'owner') {
            navigate('/owner-dashboard');
          } else if (userType === 'admin') {
            navigate('/dashboard/revenue');
          } else {
            navigate('/home');
          }
        }, 1000);
      } else {
        // Fallback to dummy login for demo
        const dummyUser = {
          id: userType === 'owner' ? '1' : '2',
          email: formData.email,
          userType: userType,
          name: userType === 'owner' ? 'Property Owner' : 'Admin User',
          provider: 'email'
        };
        
        localStorage.setItem('user', JSON.stringify(dummyUser));
        localStorage.setItem('token', 'demo-token-' + dummyUser.id);
        
        if (submitBtn) {
          submitBtn.innerHTML = '✓ Success!';
          submitBtn.style.background = '#10b981';
        }
        
        setTimeout(() => {
          if (userType === 'owner') {
            navigate('/owner-dashboard');
          } else if (userType === 'admin') {
            navigate('/dashboard/revenue');
          } else {
            navigate('/home');
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Login error:', error);
      
      // Fallback to dummy login even if API fails
      const dummyUser = {
        id: userType === 'owner' ? '1' : '2',
        email: formData.email,
        userType: userType,
        name: userType === 'owner' ? 'Property Owner' : 'Admin User',
        provider: 'email'
      };
      
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('token', 'demo-token-' + dummyUser.id);
      
      if (submitBtn) {
        submitBtn.innerHTML = '✓ Success!';
        submitBtn.style.background = '#10b981';
      }
      
      setTimeout(() => {
        if (userType === 'owner') {
          navigate('/owner-dashboard');
        } else if (userType === 'admin') {
          navigate('/dashboard/revenue');
        } else {
          navigate('/home');
        }
      }, 1000);
    }
  };

  return (
    <div className="login-page">
      {/* Animated Background */}
      <div className="login-background">
        <div className="animated-shape shape-1"></div>
        <div className="animated-shape shape-2"></div>
        <div className="animated-shape shape-3"></div>
        <div className="animated-shape shape-4"></div>
        <div className="animated-shape shape-5"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="login-container">
        {/* Left Side - Branding */}
        <div className="login-left">
          <Link to="/home" className="login-logo">
            <Star className="logo-icon" size={48} />
            <span className="logo-text">Arabian Nights</span>
          </Link>
          
          <div className="login-hero">
            <h1 className="login-hero-title">
              Welcome Back to Your
              <span className="gradient-text"> Property Empire</span>
            </h1>
            <p className="login-hero-subtitle">
              Manage your rental business with ease. Track revenue, bookings, and grow your portfolio.
            </p>
          </div>

          <div className="login-features">
            <div className="login-feature">
              <div className="feature-icon-wrapper">
                <User size={20} />
              </div>
              <div>
                <h3>Property Owners</h3>
                <p>Track your earnings and bookings</p>
              </div>
            </div>
            <div className="login-feature">
              <div className="feature-icon-wrapper">
                <Building size={20} />
              </div>
              <div>
                <h3>Management Team</h3>
                <p>Full dashboard access for teams</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-right">
          <div className="login-form-container">
            <div className="form-header">
              <h2 className="form-title">Sign In</h2>
              <p className="form-subtitle">Enter your credentials to access your dashboard</p>
            </div>

            {/* User Type Selection */}
            <div className="user-type-selector">
              <button
                type="button"
                className={`type-btn ${userType === 'owner' ? 'active' : ''}`}
                onClick={() => setUserType('owner')}
              >
                <User size={18} />
                Property Owner
              </button>
              <button
                type="button"
                className={`type-btn ${userType === 'admin' ? 'active' : ''}`}
                onClick={() => setUserType('admin')}
              >
                <Building size={18} />
                Admin Team
              </button>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    title=""
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    title=""
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkbox-text">Remember me</span>
                </label>
                <a href="#forgot" className="forgot-link">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-btn">
                <span>Sign In</span>
                <ArrowRight size={20} />
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span>or continue with</span>
            </div>

            {/* Social Login */}
            <div className="social-login">
              <button className="social-btn google" onClick={handleGoogleLogin}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="social-btn microsoft" onClick={handleMicrosoftLogin}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#f25022" d="M1 1h10v10H1z"/>
                  <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                  <path fill="#7fba00" d="M1 13h10v10H1z"/>
                  <path fill="#ffb900" d="M13 13h10v10H13z"/>
                </svg>
                Microsoft
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="signup-link">
              Don't have an account? 
              <Link to="/hosting-check"> Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
