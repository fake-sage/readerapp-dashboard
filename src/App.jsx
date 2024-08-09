import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MiniSidebar from './components/MiniSidebar'; // Import MiniSidebar
import Header from './components/Header';
import Security from './components/Settings/Security';
import SecondScreen from './components/Settings/SecondScreen';
import ThirdScreen from './components/Settings/ThirdScreen';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <div className="flex flex-grow">
            <MiniSidebar /> {/* Add MiniSidebar */}
            <div className="flex-grow p-8">
              <Routes>
                <Route path="/" element={<Security />} />
                <Route path="/second" element={<SecondScreen />} />
                <Route path="/third" element={<ThirdScreen />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
