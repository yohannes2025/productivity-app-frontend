import React, { useState, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: user.email,
    password: "",
    profileData: user.profileData,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    updateProfile(formData);
  };

  return (
    <div className="profile-page">
      <div className="profile-info">
        <img src={user.profilePicture} alt="Profile" />
        <h2>{user.username}</h2>
      </div>
      <div className="edit-profile-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profileData">Profile Data:</label>
          <textarea
            id="profileData"
            name="profileData"
            value={formData.profileData}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    </div>
  );
};

export default ProfilePage;
