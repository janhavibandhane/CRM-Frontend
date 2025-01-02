// Install dependencies: react, vite, tailwindcss, daisyui
// In your terminal, run the following commands to set up the project:
// npm create vite@latest my-profile-page --template react
// cd my-profile-page
// npm install tailwindcss postcss autoprefixer daisyui
// npx tailwindcss init
// Add DaisyUI plugin to the tailwind.config.js file

// src/App.jsx
import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: 'john_doe',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    profilePhoto: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center">
      <div className="card w-96 bg-white shadow-xl p-6 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-sky-500 ring-offset-base-100 ring-offset-2">
              <img src={formData.profilePhoto} alt="Profile" />
            </div>
          </div>
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="file-input file-input-bordered w-full mb-4"
            />
          )}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            ) : (
              user.fullName
            )}
          </h2>
          <p className="text-gray-600 mb-2">
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            ) : (
              user.email
            )}
          </p>
          <p className="text-gray-500 mb-4">
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            ) : (
              `@${user.username}`
            )}
          </p>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  className="btn bg-blue-400 btn-sm"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="btn bg-blue-400 btn-sm"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


