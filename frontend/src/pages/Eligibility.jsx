import React from 'react';
import './Eligibility.css';

const Eligibility = () => {
  return (
    <div className="eligibility">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>PM Internship Eligibility</h1>
            <p>Check if you meet the criteria for the PM Internship Scheme</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="eligibility-content">
          <section className="criteria-section">
            <h2>Are you Eligible?</h2>
            <div className="criteria-grid">
              <div className="criteria-card">
                <div className="criteria-icon">🎂</div>
                <h3>Age</h3>
                <div className="requirement">
                  <span className="label">Required:</span>
                  <span className="value">21-24 Years</span>
                </div>
                <p>You must be between 21 and 24 years old to be eligible for the PM Internship program.</p>
              </div>

              <div className="criteria-card">
                <div className="criteria-icon">💼</div>
                <h3>Job Status</h3>
                <div className="requirement">
                  <span className="label">Required:</span>
                  <span className="value">Not Employed Full Time</span>
                </div>
                <p>You should not be currently employed in a full-time position to participate in this program.</p>
              </div>

              <div className="criteria-card">
                <div className="criteria-icon">🎓</div>
                <h3>Education</h3>
                <div className="requirement">
                  <span className="label">Required:</span>
                  <span className="value">Not Enrolled Full Time</span>
                </div>
                <p>You should not be currently enrolled in a full-time educational program.</p>
              </div>

              <div className="criteria-card">
                <div className="criteria-icon">💰</div>
                <h3>Family Income</h3>
                <div className="requirement">
                  <span className="label">Required:</span>
                  <span className="value">Below ₹8 Lakhs PA</span>
                </div>
                <p>No one in your family (Self/Spouse/Parents) should be earning more than ₹8 Lakhs per annum.</p>
              </div>

              <div className="criteria-card">
                <div className="criteria-icon">🏛️</div>
                <h3>Government Job</h3>
                <div className="requirement">
                  <span className="label">Required:</span>
                  <span className="value">No Member has a Govt. Job</span>
                </div>
                <p>No family member should have a government job to maintain eligibility for this program.</p>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <h2>Core Benefits for PM Internship Scheme</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" alt="Experience" />
                </div>
                <h3>12 months real-life experience</h3>
                <p>Gain valuable hands-on experience in India's top companies across various sectors and industries.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg" alt="Financial Support" />
                </div>
                <h3>Monthly assistance of ₹4500 + ₹500</h3>
                <p>Receive ₹4500 monthly from Government of India and ₹500 from industry partner companies.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg" alt="Grant" />
                </div>
                <h3>One-time Grant of ₹6000</h3>
                <p>Get a one-time grant of ₹6000 for incidental expenses to support your internship journey.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Companies" />
                </div>
                <h3>Top Companies of India</h3>
                <p>Select from various sectors and work with leading companies across different industries in India.</p>
              </div>
            </div>
          </section>

          <section className="sectors-section">
            <h2>Available Sectors</h2>
            <div className="sectors-showcase">
              <div className="sector-item">
                <div className="sector-icon">🤖</div>
                <h4>AI & Machine Learning</h4>
                <p>Work on cutting-edge artificial intelligence and machine learning projects</p>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🔒</div>
                <h4>Cybersecurity</h4>
                <p>Protect digital assets and learn advanced security practices</p>
              </div>
              <div className="sector-item">
                <div className="sector-icon">💰</div>
                <h4>Finance & FinTech</h4>
                <p>Explore financial technologies and modern banking solutions</p>
              </div>
              <div className="sector-item">
                <div className="sector-icon">💻</div>
                <h4>Software Development</h4>
                <p>Build applications and contribute to innovative software projects</p>
              </div>
              <div className="sector-item">
                <div className="sector-icon">📊</div>
                <h4>Data Analytics</h4>
                <p>Analyze complex data and generate insights for business decisions</p>
              </div>
              <div className="sector-item">
                <div className="sector-icon">🎨</div>
                <h4>Digital Marketing</h4>
                <p>Create compelling campaigns and engaging digital experiences</p>
              </div>
            </div>
          </section>

          <section className="additional-info">
            <div className="info-grid">
              <div className="info-card">
                <h3>Program Duration</h3>
                <p>The PM Internship program runs for 12 consecutive months, providing comprehensive exposure to real-world work environments and professional practices.</p>
              </div>
              <div className="info-card">
                <h3>Certification</h3>
                <p>Upon successful completion, you'll receive an industry-recognized certificate that validates your skills and experience gained during the internship.</p>
              </div>
              <div className="info-card">
                <h3>Mentorship</h3>
                <p>Get guidance from experienced professionals and industry experts who will help you navigate your career path and professional development.</p>
              </div>
              <div className="info-card">
                <h3>Skill Development</h3>
                <p>Access to training programs, workshops, and skill development sessions to enhance your technical and soft skills throughout the program.</p>
              </div>
            </div>
          </section>

          <section className="next-steps">
            <div className="next-steps-content">
              <h2>Ready to Apply?</h2>
              <p>If you meet all the eligibility criteria, you can proceed to find and apply for internships that match your skills and interests.</p>
              <div className="cta-buttons">
                <a href="/find-internship" className="btn btn-primary">Find Internships</a>
                <a href="/signup" className="btn btn-outline">Create Account</a>
              </div>
            </div>
          </section>

          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h4>Can I apply if I'm currently studying part-time?</h4>
                <p>Yes, as long as you're not enrolled full-time in any educational program, you can apply for the PM Internship.</p>
              </div>
              <div className="faq-item">
                <h4>What if my family income is exactly ₹8 Lakhs per annum?</h4>
                <p>The requirement is that family income should be below ₹8 Lakhs PA, so exactly ₹8 Lakhs would not meet the eligibility criteria.</p>
              </div>
              <div className="faq-item">
                <h4>Can I work part-time while doing the internship?</h4>
                <p>The internship is designed to be a full-time commitment. However, specific guidelines may vary by company and role.</p>
              </div>
              <div className="faq-item">
                <h4>What documents do I need to prove eligibility?</h4>
                <p>You'll need age proof, income certificates, employment status documents, and educational qualification certificates.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;