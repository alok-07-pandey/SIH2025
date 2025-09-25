import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About PM Internship Recommender</h1>
            <p>Empowering India's youth through meaningful internship opportunities</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <section className="intro-section">
            <div className="content-grid">
              <div className="text-content">
                <h2>What is PMIR?</h2>
                <p>
                  The PM Internship Recommender (PMIR) is a revolutionary platform designed to bridge the gap between 
                  talented individuals and meaningful internship opportunities across India's top companies. 
                  As part of the Government of India's initiative to boost employment and skill development, 
                  PMIR connects eligible candidates with 12-month internship programs that provide real-world experience 
                  and financial support.
                </p>
                <p>
                  Our platform uses advanced recommendation algorithms to match candidates with internships that 
                  align with their skills, interests, and career aspirations, ensuring the best possible fit for 
                  both interns and companies.
                </p>
              </div>
              <div className="image-content">
                <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" alt="Team collaboration" />
              </div>
            </div>
          </section>

          <section className="mission-section">
            <h2>Our Mission</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h3>Skill Development</h3>
                <p>Enhance practical skills through hands-on experience in real-world projects</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🤝</div>
                <h3>Industry Connection</h3>
                <p>Bridge the gap between academic learning and industry requirements</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">💡</div>
                <h3>Innovation</h3>
                <p>Foster innovation and creativity among India's young talent</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">📈</div>
                <h3>Career Growth</h3>
                <p>Provide a strong foundation for long-term career success</p>
              </div>
            </div>
          </section>

          <section className="features-section">
            <h2>Key Features</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <div className="feature-content">
                  <h3>Smart Matching</h3>
                  <p>AI-powered recommendation system that matches your skills and interests with the perfect internship opportunities</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📋</div>
                <div className="feature-content">
                  <h3>Comprehensive Profiles</h3>
                  <p>Create detailed profiles showcasing your skills, education, and career preferences for better matching</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏢</div>
                <div className="feature-content">
                  <h3>Top Companies</h3>
                  <p>Access to internships with India's leading companies across various sectors and industries</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <div className="feature-content">
                  <h3>Financial Support</h3>
                  <p>Monthly stipend of ₹5000 plus one-time grant of ₹6000 supported by the Government of India</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h3>Progress Tracking</h3>
                  <p>Monitor your internship progress and achievements throughout the 12-month program</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎓</div>
                <div className="feature-content">
                  <h3>Certification</h3>
                  <p>Receive industry-recognized certificates upon successful completion of your internship</p>
                </div>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Program Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>For Interns</h3>
                <ul>
                  <li>12 months of real-world experience</li>
                  <li>Monthly financial assistance of ₹5000</li>
                  <li>One-time grant of ₹6000 for incidentals</li>
                  <li>Skill development and training</li>
                  <li>Industry networking opportunities</li>
                  <li>Career guidance and mentorship</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>
              <div className="benefit-card">
                <h3>For Companies</h3>
                <ul>
                  <li>Access to fresh, talented individuals</li>
                  <li>Government support for intern stipends</li>
                  <li>Opportunity to train future employees</li>
                  <li>Contribution to skill development initiatives</li>
                  <li>Enhanced corporate social responsibility</li>
                  <li>Innovation and fresh perspectives</li>
                  <li>Support from government initiatives</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="sectors-section">
            <h2>Available Sectors</h2>
            <div className="sectors-grid">
              <div className="sector-item">
                <div className="sector-icon">🤖</div>
                <span>Artificial Intelligence & Machine Learning</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🔒</div>
                <span>Cybersecurity</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">💰</div>
                <span>Finance & FinTech</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">💻</div>
                <span>Software Development</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">📊</div>
                <span>Data Analytics</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🎨</div>
                <span>Digital Marketing</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🏥</div>
                <span>Healthcare</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🎓</div>
                <span>Education</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🛒</div>
                <span>E-commerce</span>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🏭</div>
                <span>Manufacturing</span>
              </div>
            </div>
          </section>

          <section className="government-section">
            <div className="government-content">
              <div className="gov-text">
                <h2>Government of India Initiative</h2>
                <p>
                  The PM Internship Scheme is a flagship program launched by the Government of India 
                  to address unemployment and skill gaps among the country's youth. This initiative 
                  is part of the larger vision to make India a global hub for skilled talent and innovation.
                </p>
                <p>
                  The program provides comprehensive support including financial assistance, training, 
                  and career guidance to ensure that every intern gains meaningful experience and 
                  develops industry-relevant skills.
                </p>
              </div>
              <div className="gov-image">
                <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" alt="Government initiative" />
              </div>
            </div>
          </section>

          <section className="stats-section">
            <h2>Impact Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Successful Interns</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Partner Companies</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Cities Covered</p>
              </div>
              <div className="stat-item">
                <h3>85%</h3>
                <p>Job Placement Rate</p>
              </div>
            </div>
          </section>

          <section className="call-to-action">
            <div className="cta-content">
              <h2>Ready to Start Your Journey?</h2>
              <p>Join thousands of successful interns who have launched their careers through the PM Internship program.</p>
              <div className="cta-buttons">
                <a href="/find-internship" className="btn btn-primary">Find Internships</a>
                <a href="/eligibility" className="btn btn-outline">Check Eligibility</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;