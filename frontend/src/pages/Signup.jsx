import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
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

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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

      // Store user data in localStorage (simulate database storage)
      const userData = {
        id: Date.now(),
        fullName: formData.fullName.trim(),
        email: formData.email.toLowerCase(),
        mobile: formData.mobile,
        joinDate: new Date().toISOString(),
        bio: '',
        profilePhoto: ''
      };

      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.some(user => 
        user.email === userData.email || user.mobile === userData.mobile
      );

      if (userExists) {
        setErrors({ 
          email: 'User with this email or mobile already exists' 
        });
        setLoading(false);
        return;
      }

      // Add new user to users array
      existingUsers.push(userData);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Account created successfully! Please login to continue.');
      navigate('/login');

    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-content">
          <div className="signup-header">
            <Link to="/dummy-dashboard" className="logo">PMIR</Link>
            <h1>Create Your Account</h1>
            <p>Join the PM Internship Recommender platform and discover amazing opportunities</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <div className="error-message">{errors.fullName}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
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
              <label className="form-label">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`form-input ${errors.mobile ? 'error' : ''}`}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
              />
              {errors.mobile && <div className="error-message">{errors.mobile}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Create a password (min. 6 characters)"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            </div>

            <button 
              type="submit" 
              className="btn btn-primary signup-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading"></span>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="signup-footer">
            <p>Already have an account?</p>
            <Link to="/login" className="login-link">Login here</Link>
          </div>

          <div className="features-preview">
            <h3>What you'll get:</h3>
            <div className="features-list">
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <span>Personalized internship recommendations</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💰</span>
                <span>₹5000 monthly stipend + ₹6000 grant</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🏢</span>
                <span>Access to India's top companies</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📈</span>
                <span>12 months real-world experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="signup-image">
          <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" alt="Students working together" />
          <div className="image-overlay">
            <h2>Start Your Career Journey</h2>
            <p>Join thousands of successful interns who have launched their careers through the PM Internship program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;