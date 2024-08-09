import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r">
      <div className="p-6">
        <h1 className="text-lg font-bold mb-10">Logo</h1>
        <ul className="space-y-8">
          <li className="flex items-center space-x-3 text-gray-500 hover:text-black">
            <span>🏠</span>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-black">
            <span>📊</span>
            <span>Analytics</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-black">
            <span>👥</span>
            <span>Customer Management</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-black">
            <span>🙍</span>
            <span>Profile</span>
          </li>
          <hr className="my-4"/>
          <li className="flex items-center space-x-3 text-black font-bold">
            <span>⚙️</span>
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-black">
            <span>❓</span>
            <span>Support</span>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 w-full p-6">
        <button className="text-gray-500 flex items-center space-x-3 hover:text-black">
          <span>🔓</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
