import React from 'react';

const MiniSidebar = () => {
  return (
    <div className="w-32 h-full bg-white flex flex-col items-center justify-around border-r p-4">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl">⚙️</span>
          <span className="text-sm">Preferences</span>
        </div>
        <div className="flex flex-col items-center space-y-2 text-black font-bold">
          <span className="text-2xl">🛡️</span>
          <span className="text-sm">Security</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl">🔔</span>
          <span className="text-sm">Notifications</span>
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;
