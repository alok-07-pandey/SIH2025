import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to PM Internship Recommender</h1>
              <p>Discover meaningful internship opportunities with India's top companies and gain real-world experience while earning financial support from the Government of India.</p>
              <div className="hero-buttons">
                <a href="/find-internship" className="btn btn-primary">Find Internships</a>
                <a href="/about" className="btn btn-outline">Learn More</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Students collaborating" />
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>₹5,000</h3>
              <p>Monthly Assistance</p>
              <span>Government Support</span>
            </div>
            <div className="stat-card">
              <h3>12 Months</h3>
              <p>Internship Duration</p>
              <span>Real Experience</span>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Partner Companies</p>
              <span>Top Organizations</span>
            </div>
            <div className="stat-card">
              <h3>₹6,000</h3>
              <p>One-time Grant</p>
              <span>Additional Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sectors-section">
        <div className="container">
          <h2>Available Sectors</h2>
          <div className="sectors-grid">
            <div className="sector-card">
              <div className="sector-icon">🤖</div>
              <h4>AI & Machine Learning</h4>
              <p>Work on cutting-edge AI projects and machine learning algorithms</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">🔒</div>
              <h4>Cybersecurity</h4>
              <p>Protect digital assets and learn security best practices</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">💰</div>
              <h4>Finance & FinTech</h4>
              <p>Explore financial technologies and banking solutions</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">💻</div>
              <h4>Software Development</h4>
              <p>Build applications and contribute to software projects</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">📊</div>
              <h4>Data Analytics</h4>
              <p>Analyze data and generate insights for business decisions</p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">🎨</div>
              <h4>Digital Marketing</h4>
              <p>Create compelling campaigns and digital experiences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="process-section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Check Eligibility</h4>
              <p>Verify your eligibility based on age, employment status, and family income</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Complete Profile</h4>
              <p>Fill out your profile with skills, education, and preferences</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Get Recommendations</h4>
              <p>Receive personalized internship recommendations based on your profile</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Apply & Start</h4>
              <p>Apply to selected internships and begin your 12-month journey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The PM Internship program gave me real-world experience and financial support. I'm now working full-time at a leading tech company!"</p>
              <div className="testimonial-author">
                <strong>Priya Sharma</strong>
                <span>Software Developer</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"This program bridged the gap between my education and career. The mentorship and experience were invaluable."</p>
              <div className="testimonial-author">
                <strong>Rahul Kumar</strong>
                <span>Data Analyst</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The financial assistance helped me focus completely on learning and growing. Highly recommend this program!"</p>
              <div className="testimonial-author">
                <strong>Anita Singh</strong>
                <span>Digital Marketing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;