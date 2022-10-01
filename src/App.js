import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AddDoctor from './components/AddDoctor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
