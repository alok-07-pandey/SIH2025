import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/dummy-dashboard');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/home" className="navbar-logo">
            PMIR
          </Link>
          
          <div className="navbar-menu">
            <Link 
              to="/home" 
              className={`navbar-link ${location.pathname === '/home' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/find-internship" 
              className={`navbar-link ${location.pathname === '/find-internship' ? 'active' : ''}`}
            >
              Find Internship
            </Link>
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/eligibility" 
              className={`navbar-link ${location.pathname === '/eligibility' ? 'active' : ''}`}
            >
              Eligibility
            </Link>
          </div>

          <div className="navbar-profile">
            <div 
              className="profile-icon" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user?.profilePhoto ? (
                <img src={user.profilePhoto} alt="Profile" />
              ) : (
                <div className="profile-initial">
                  {user?.fullName?.charAt(0) || 'U'}
                </div>
              )}
            </div>
            
            {dropdownOpen && (
              <div className="profile-dropdown">
                <Link 
                  to="/profile" 
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <button 
                  className="dropdown-item logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;