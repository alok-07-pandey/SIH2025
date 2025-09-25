import React, { useState, useRef } from 'react';
import './Profile.css';

const Profile = ({ user, setUser }) => {
  const [bio, setBio] = useState(user?.bio || '');
  const [profilePhoto, setProfilePhoto] = useState(user?.profilePhoto || '');
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file (JPEG, PNG, JPG)');
    }
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      bio: bio,
      profilePhoto: profilePhoto
    };
    
    // Update user in parent component
    setUser(updatedUser);
    
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(updatedUser));
    
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setBio(user?.bio || '');
    setProfilePhoto(user?.profilePhoto || '');
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your personal information and preferences</p>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-photo-section">
              <div className="photo-container">
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile" className="profile-photo" />
                ) : (
                  <div className="photo-placeholder">
                    <span>{user?.fullName?.charAt(0) || 'U'}</span>
                  </div>
                )}
                <div className="photo-overlay">
                  <button 
                    className="upload-btn"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    📷 Upload Photo
                  </button>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/jpeg,image/png,image/jpg"
                style={{ display: 'none' }}
              />
            </div>

            <div className="profile-info">
              <div className="info-section">
                <h2>Personal Information</h2>
                
                <div className="info-grid">
                  <div className="info-item">
                    <label>Full Name</label>
                    <div className="info-value">{user?.fullName || 'Not provided'}</div>
                  </div>

                  <div className="info-item">
                    <label>Email Address</label>
                    <div className="info-value">{user?.email || 'Not provided'}</div>
                  </div>

                  <div className="info-item">
                    <label>Mobile Number</label>
                    <div className="info-value">{user?.mobile || 'Not provided'}</div>
                  </div>

                  <div className="info-item">
                    <label>Member Since</label>
                    <div className="info-value">
                      {user?.joinDate ? new Date(user.joinDate).toLocaleDateString() : new Date().toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bio-section">
                <div className="section-header">
                  <h3>Bio</h3>
                  {!isEditing && (
                    <button 
                      className="edit-btn"
                      onClick={() => setIsEditing(true)}
                    >
                      ✏️ Edit
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <div className="bio-edit">
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself, your skills, interests, and career goals..."
                      className="bio-textarea"
                      rows={6}
                    />
                    <div className="edit-actions">
                      <button className="btn btn-primary" onClick={handleSave}>
                        Save Changes
                      </button>
                      <button className="btn btn-outline" onClick={handleCancel}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bio-display">
                    {bio ? (
                      <p>{bio}</p>
                    ) : (
                      <p className="bio-placeholder">
                        Add a bio to tell others about yourself, your skills, interests, and career goals.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="profile-stats">
            <h3>Profile Statistics</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👤</div>
                <h4>Profile Completion</h4>
                <div className="stat-value">
                  {(() => {
                    let completion = 0;
                    if (user?.fullName) completion += 25;
                    if (user?.email) completion += 25;
                    if (user?.mobile) completion += 25;
                    if (bio) completion += 15;
                    if (profilePhoto) completion += 10;
                    return `${completion}%`;
                  })()}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">📋</div>
                <h4>Applications</h4>
                <div className="stat-value">0</div>
                <p>Internship applications submitted</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <h4>Profile Views</h4>
                <div className="stat-value">--</div>
                <p>Times your profile was viewed</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <h4>Matches</h4>
                <div className="stat-value">--</div>
                <p>Internship recommendations</p>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <h3>Account Actions</h3>
            <div className="actions-grid">
              <div className="action-card">
                <h4>Find Internships</h4>
                <p>Discover new internship opportunities that match your profile</p>
                <a href="/find-internship" className="btn btn-primary">Explore Internships</a>
              </div>

              <div className="action-card">
                <h4>Check Eligibility</h4>
                <p>Verify your eligibility for the PM Internship program</p>
                <a href="/eligibility" className="btn btn-outline">Check Now</a>
              </div>

              <div className="action-card">
                <h4>Update Preferences</h4>
                <p>Modify your location and sector preferences for better matches</p>
                <button className="btn btn-secondary" onClick={() => alert('Feature coming soon!')}>
                  Update Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;