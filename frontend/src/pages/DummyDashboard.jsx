import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DummyDashboard.css';

const DummyDashboard = () => {
  const navigate = useNavigate();

  const handleAnyClick = () => {
    navigate('/signup');
  };

  return (
    <div className="dummy-dashboard" onClick={handleAnyClick}>
      <div className="dummy-header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">PMIR</h1>
            <nav className="nav-links">
              <span>Home</span>
              <span>Find Internship</span>
              <span>About</span>
              <span>Eligibility</span>
              <span>Profile</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2>PM Internship Recommender</h2>
              <p>Connecting talented individuals with meaningful internship opportunities across India's top companies</p>
              <div className="hero-stats">
                <div className="stat">
                  <h3>₹5,000</h3>
                  <p>Monthly Assistance</p>
                </div>
                <div className="stat">
                  <h3>12 Months</h3>
                  <p>Experience</p>
                </div>
                <div className="stat">
                  <h3>500+</h3>
                  <p>Top Companies</p>
                </div>
              </div>
              <div className="cta-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" alt="Students working" />
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h3>Why Choose PM Internship?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h4>Real Experience</h4>
              <p>Gain 12 months of real-life experience in India's top companies</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Financial Support</h4>
              <p>Monthly assistance of ₹5000 plus one-time grant of ₹6000</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h4>Top Companies</h4>
              <p>Internship opportunities with India's leading organizations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Multiple Sectors</h4>
              <p>Choose from various sectors including AI/ML, Finance, and more</p>
            </div>
          </div>
        </div>
      </div>

      <div className="click-overlay">
        <div className="click-message">
          <h3>🔒 Authentication Required</h3>
          <p>Click anywhere to signup and access the full platform</p>
        </div>
      </div>
    </div>
  );
};

export default DummyDashboard;