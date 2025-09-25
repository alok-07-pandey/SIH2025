import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user with matching email
      const user = users.find(u => 
        u.email.toLowerCase() === formData.email.toLowerCase()
      );

      if (!user) {
        setErrors({ 
          email: 'User not found. Please check your email or sign up.' 
        });
        setLoading(false);
        return;
      }

      // In a real app, you would verify the password against a hashed version
      // For this demo, we'll simulate successful login
      
      // Generate a simple auth token
      const authToken = `token_${user.id}_${Date.now()}`;
      
      // Call the login callback with user data and token
      onLogin(user, authToken);
      
      navigate('/home');

    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <Link to="/dummy-dashboard" className="logo">PMIR</Link>
            <h1>Welcome Back</h1>
            <p>Login to access your PM Internship Recommender account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email address"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary login-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading"></span>
                  Signing In...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>Don't have an account?</p>
            <Link to="/signup" className="signup-link">Sign up here</Link>
          </div>
        </div>

        <div className="login-image">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" alt="Professional workspace" />
          <div className="image-overlay">
            <h2>Continue Your Journey</h2>
            <p>Access personalized internship recommendations and take the next step in your career</p>
            <div className="stats">
              <div className="stat">
                <strong>10,000+</strong>
                <span>Successful Placements</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Partner Companies</span>
              </div>
              <div className="stat">
                <strong>₹5,000</strong>
                <span>Monthly Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;