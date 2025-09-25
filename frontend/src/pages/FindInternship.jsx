import React, { useState } from 'react';
import './FindInternship.css';

const FindInternship = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    education: '',
    location: '',
    sector: '',
    age: '',
    jobStatus: '',
    educationStatus: '',
    familyIncome: '',
    govJob: ''
  });
  
  const [cvFile, setCvFile] = useState(null);
  const [isEligible, setIsEligible] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 
    'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur',
    'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad'
  ];

  const sectors = [
    'AI/ML', 'Cybersecurity', 'Finance', 'Software Development',
    'Data Analytics', 'Digital Marketing', 'Healthcare', 'Education',
    'E-commerce', 'Manufacturing', 'Agriculture', 'Tourism'
  ];

  const mockInternships = [
    {
      id: 1,
      company: 'Tech Innovators Pvt Ltd',
      title: 'AI/ML Intern',
      location: 'Bangalore',
      duration: '12 months',
      stipend: '₹5000/month',
      description: 'Work on machine learning models and AI applications'
    },
    {
      id: 2,
      company: 'Digital Solutions Corp',
      title: 'Software Development Intern',
      location: 'Mumbai',
      duration: '12 months',
      stipend: '₹5000/month',
      description: 'Develop web applications using modern technologies'
    },
    {
      id: 3,
      company: 'FinTech Hub',
      title: 'Finance Analyst Intern',
      location: 'Delhi',
      duration: '12 months',
      stipend: '₹5000/month',
      description: 'Analyze financial data and create investment strategies'
    },
    {
      id: 4,
      company: 'CyberSafe Systems',
      title: 'Cybersecurity Intern',
      location: 'Hyderabad',
      duration: '12 months',
      stipend: '₹5000/month',
      description: 'Implement security measures and conduct penetration testing'
    },
    {
      id: 5,
      company: 'Data Insights Ltd',
      title: 'Data Analytics Intern',
      location: 'Pune',
      duration: '12 months',
      stipend: '₹5000/month',
      description: 'Extract insights from large datasets using statistical methods'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
    } else {
      alert('Please upload a PDF file only');
    }
  };

  const checkEligibility = () => {
    const { age, jobStatus, educationStatus, familyIncome, govJob } = formData;
    
    if (!age || !jobStatus || !educationStatus || !familyIncome || !govJob) {
      alert('Please fill all eligibility fields');
      return;
    }

    const eligible = 
      age === '21-24' &&
      jobStatus === 'not-employed' &&
      educationStatus === 'not-enrolled' &&
      familyIncome === 'below-8-lakhs' &&
      govJob === 'no-gov-job';

    setIsEligible(eligible);
    return eligible;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.skills || !formData.education || !formData.location || !formData.sector) {
      alert('Please fill all required fields');
      return;
    }

    const eligible = checkEligibility();
    
    if (eligible) {
      setShowRecommendations(true);
    }
  };

  const handleApply = (internship) => {
    alert(`Application submitted for ${internship.title} at ${internship.company}!`);
  };

  return (
    <div className="find-internship">
      <div className="container">
        <div className="page-header">
          <h1>Find Your Perfect Internship</h1>
          <p>Fill out the form below to get personalized internship recommendations</p>
        </div>

        {!showRecommendations ? (
          <div className="form-section">
            <form onSubmit={handleSubmit} className="internship-form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Skills *</label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., JavaScript, Python, React, Data Analysis"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Education/Qualification *</label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., B.Tech Computer Science, BCA, MCA"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Location Preference *</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select City</option>
                    {indianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Sector Interest *</label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Sector</option>
                    {sectors.map(sector => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group cv-upload">
                  <label className="form-label">Upload CV (PDF)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="form-input"
                  />
                  {cvFile && <p className="file-name">Selected: {cvFile.name}</p>}
                </div>
              </div>

              <div className="eligibility-section">
                <h3>Eligibility Check</h3>
                <div className="eligibility-grid">
                  <div className="form-group">
                    <label className="form-label">Age</label>
                    <select
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Age Range</option>
                      <option value="21-24">21-24 Years</option>
                      <option value="below-21">Below 21 Years</option>
                      <option value="above-24">Above 24 Years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Job Status</label>
                    <select
                      name="jobStatus"
                      value={formData.jobStatus}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="not-employed">Not Employed Full Time</option>
                      <option value="employed">Employed Full Time</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Education Status</label>
                    <select
                      name="educationStatus"
                      value={formData.educationStatus}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="not-enrolled">Not Enrolled Full Time</option>
                      <option value="enrolled">Enrolled Full Time</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Family Income</label>
                    <select
                      name="familyIncome"
                      value={formData.familyIncome}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Income Range</option>
                      <option value="below-8-lakhs">Below ₹8 Lakhs PA</option>
                      <option value="above-8-lakhs">Above ₹8 Lakhs PA</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Government Job in Family</label>
                    <select
                      name="govJob"
                      value={formData.govJob}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="no-gov-job">No Member has Govt. Job</option>
                      <option value="has-gov-job">Someone has Govt. Job</option>
                    </select>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Get Internship Recommendations
              </button>
            </form>
          </div>
        ) : (
          <div className="results-section">
            {isEligible ? (
              <div className="recommendations">
                <div className="success-message">
                  <h3>🎉 Congratulations! You are eligible for PM Internship</h3>
                  <p>Here are your personalized internship recommendations:</p>
                </div>
                
                <div className="internships-grid">
                  {mockInternships.map(internship => (
                    <div key={internship.id} className="internship-card">
                      <h4>{internship.title}</h4>
                      <h5>{internship.company}</h5>
                      <div className="internship-details">
                        <p><strong>📍 Location:</strong> {internship.location}</p>
                        <p><strong>⏱️ Duration:</strong> {internship.duration}</p>
                        <p><strong>💰 Stipend:</strong> {internship.stipend}</p>
                        <p><strong>📝 Description:</strong> {internship.description}</p>
                      </div>
                      <button 
                        onClick={() => handleApply(internship)}
                        className="btn btn-primary apply-btn"
                      >
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="not-eligible">
                <div className="error-message">
                  <h3>❌ You are not eligible for PM Internship</h3>
                  <p>Unfortunately, you don't meet the current eligibility criteria:</p>
                  <ul>
                    <li>Age: 21-24 Years</li>
                    <li>Job Status: Not Employed Full Time</li>
                    <li>Education: Not Enrolled Full Time</li>
                    <li>Family Income: Below ₹8 Lakhs PA</li>
                    <li>Government Job: No Member has a Govt. Job</li>
                  </ul>
                  <p>Please check your eligibility criteria and try again.</p>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => {
                setShowRecommendations(false);
                setIsEligible(null);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  skills: '',
                  education: '',
                  location: '',
                  sector: '',
                  age: '',
                  jobStatus: '',
                  educationStatus: '',
                  familyIncome: '',
                  govJob: ''
                });
                setCvFile(null);
              }}
              className="btn btn-outline back-btn"
            >
              Start New Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindInternship;