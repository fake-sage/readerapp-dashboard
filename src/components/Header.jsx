import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div>
        <h2 className="text-xl font-semibold">Settings</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring"
        />
        <div className="relative">
          <span className="absolute top-0 right-0 bg-gray-700 text-white rounded-full px-2 py-0.5 text-xs">
            36
          </span>
          <button className="text-gray-700 hover:text-black">
            🔔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
