import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Reserve from './components/Reserve';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App pb-4">
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
