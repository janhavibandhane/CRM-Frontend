import React, { useState } from "react";

function ProfilePage({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate saving data
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-blue-500 text-white lg:h-auto h-auto m-10 p-8 rounded-lg ">
      {/* User Info or Edit Form */}
      <div className="lg:text-xl text-lg mt-8 lg:mt-0 lg:space-y-5 space-y-5 lg:ml-10">
        {!isEditing ? (
          <>
            {/* Profile Image */}
            <div className=" flex flex-col lg:flex-row lg:justify-evenly lg:items-center items-center justify-center ">
              <div>
                <div className="avatar">
                  <div className="lg:w-52 w-40 rounded-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
              <div className=" space-y-3">
                <div>
                  <span className="font-bold">Full Name: janhavi bandhane</span>
                </div>
                <div>
                  <span className="font-bold">Username:janhavib</span>
                </div>
                <div>
                  <span className="font-bold">Contact Number:9322560897</span>
                </div>
                <div>
                  <span className="font-bold">Email:janhavibandhane@gmail.com</span>
                </div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="font-bold">Full Name: </label>
              <input
                type="text"
                name="fullName"
                value=""
                onChange={handleChange}
                className="text-black rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="font-bold">Username: </label>
              <input
                type="text"
                name="userName"
                value=""
                onChange={handleChange}
                className="text-black rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="font-bold">Contact Number: </label>
              <input
                type="text"
                name="contactNumber"
                value=""
                onChange={handleChange}
                className="text-black rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="font-bold">Email: </label>
              <input
                type="email"
                name="email"
                value=""
                onChange={handleChange}
                className="text-black rounded px-2 py-1"
              />
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
              onClick={handleSave}
            >
              Save Changes
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded ml-2"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
