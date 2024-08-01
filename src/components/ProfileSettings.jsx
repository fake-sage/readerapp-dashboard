// src/components/ProfileSettings.jsx
import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="p-6 bg-white flex-1">
      <h2 className="text-3xl font-semibold mb-6">Settings</h2>
      <div className="flex items-center mb-6">
        <img src="profile-picture-placeholder.png" alt="Profile" className="w-24 h-24 rounded-full mr-6" />
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Upload New Photo</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Delete</button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="p-2 border rounded" />
          <input type="text" placeholder="Phone Number" className="p-2 border rounded" />
          <input type="text" placeholder="Fax" className="p-2 border rounded" />
          <input type="text" placeholder="Country" className="p-2 border rounded" />
          <input type="text" placeholder="City" className="p-2 border rounded" />
          <input type="text" placeholder="Postcode" className="p-2 border rounded" />
          <input type="text" placeholder="State" className="p-2 border rounded" />
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
