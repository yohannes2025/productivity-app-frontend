// //src/components/ProfilePage.js
// import React, { useState, useContext } from "react";
// import { useAuth } from "../contexts/AuthContext";

// const ProfilePage = () => {
//   const { user, updateProfile } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     email: user.email,
//     password: "",
//     profileData: user.profileData,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdateProfile = () => {
//     updateProfile(formData);
//   };

//   return (
//     <div className="profile-page">
//       <div className="profile-info">
//         <img src={user.profilePicture} alt="Profile" />
//         <h2>{user.username}</h2>
//       </div>
//       <div className="edit-profile-form">
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="profileData">Profile Data:</label>
//           <textarea
//             id="profileData"
//             name="profileData"
//             value={formData.profileData}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button onClick={handleUpdateProfile}>Update Profile</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// src/components/ProfilePage.js
// import React, { useState } from "react";
// import { useAuthContext } from "../contexts/AuthContext"; // Corrected import

// const ProfilePage = () => {
//   const { user, updateProfile } = useAuthContext(); // Using the correct hook
//   const [formData, setFormData] = useState({
//     email: user.email,
//     password: "",
//     profileData: user.profileData,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdateProfile = () => {
//     updateProfile(formData); // Ensure this function is correctly defined in your context
//   };

//   return (
//     <div className="profile-page">
//       <div className="profile-info">
//         <img src={user.profilePicture} alt="Profile" />
//         <h2>{user.username}</h2>
//       </div>
//       <div className="edit-profile-form">
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="profileData">Profile Data:</label>
//           <textarea
//             id="profileData"
//             name="profileData"
//             value={formData.profileData}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button onClick={handleUpdateProfile}>Update Profile</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../contexts/AuthContext";

// const ProfilePage = () => {
//   const { user, updateProfile } = useAuthContext();

//   // Guard clause: if user is null, render loading or some default state
//   if (!user) {
//     return <div>Loading...</div>; // Or render a custom loading component
//   }

//   const [formData, setFormData] = useState({
//     email: user.email || "", // Safe fallback if user is not available yet
//     password: "",
//     profileData: user.profileData || "",
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         email: user.email,
//         password: "",
//         profileData: user.profileData,
//       });
//     }
//   }, [user]); // Only update formData when user changes

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdateProfile = () => {
//     updateProfile(formData);
//   };

//   return (
//     <div className="profile-page">
//       <div className="profile-info">
//         <img src={user.profilePicture} alt="Profile" />
//         <h2>{user.username}</h2>
//       </div>
//       <div className="edit-profile-form">
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="profileData">Profile Data:</label>
//           <textarea
//             id="profileData"
//             name="profileData"
//             value={formData.profileData}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button onClick={handleUpdateProfile}>Update Profile</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../contexts/AuthContext";

// const ProfilePage = () => {
//   const { user, updateProfile } = useAuthContext();

//   // Early return for loading state (before calling hooks)
//   if (!user) {
//     return <div>Loading...</div>; // Or a custom loading component
//   }

//   // Now that we know user is not null, we can safely call the hooks
//   const [formData, setFormData] = useState({
//     email: user.email || "", // Default empty string if user is not available yet
//     password: "",
//     profileData: user.profileData || "",
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         email: user.email,
//         password: "",
//         profileData: user.profileData,
//       });
//     }
//   }, [user]); // Only update formData when user changes

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleUpdateProfile = () => {
//     updateProfile(formData);
//   };

//   return (
//     <div className="profile-page">
//       <div className="profile-info">
//         <img src={user.profilePicture} alt="Profile" />
//         <h2>{user.username}</h2>
//       </div>
//       <div className="edit-profile-form">
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="profileData">Profile Data:</label>
//           <textarea
//             id="profileData"
//             name="profileData"
//             value={formData.profileData}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <button onClick={handleUpdateProfile}>Update Profile</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState, useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { user, updateProfile } = useAuthContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    profileData: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        password: "",
        profileData: user.profileData || "",
      });
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

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
