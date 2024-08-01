// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white border-b border-gray-300">
      <input type="text" placeholder="Search..." className="p-2 border rounded w-1/3" />
      <div className="flex items-center">
        <div className="relative mr-4">
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">36</span>
          <img src="bell-icon.png" alt="Notifications" className="w-6 h-6" />
        </div>
        <button className="mr-2 bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
        <button className="bg-gray-200 py-2 px-4 rounded">Cancel</button>
      </div>
    </div>
  );
};

export default Header;
