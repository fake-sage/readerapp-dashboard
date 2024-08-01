// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 p-6">
      <div className="text-2xl font-bold mb-6">READERAPP</div>
      <ul className="space-y-4">
        <li className="cursor-pointer">Dashboard</li>
        <li className="cursor-pointer">Analytics</li>
        <li className="cursor-pointer">Customer Management</li>
        <li className="cursor-pointer">Profile</li>
        <li className="cursor-pointer">Settings</li>
        <li className="cursor-pointer">Support</li>
      </ul>
      <button className="mt-6 bg-transparent border border-gray-400 py-2 px-4 cursor-pointer">Logout</button>
    </div>
  );
};

export default Sidebar;
