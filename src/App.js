import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
