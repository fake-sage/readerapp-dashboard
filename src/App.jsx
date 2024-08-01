// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ProfileSettings />
      </div>
    </div>
  );
}

export default App;
