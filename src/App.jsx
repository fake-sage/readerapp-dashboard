import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Security from './components/Settings/Security';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-50 min-h-screen">
          <Security />
        </main>
      </div>
    </div>
  );
}

export default App;
