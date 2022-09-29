import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import AddDoctor from './components/AddDoctor';

function App() {
  return (
    <div className="App">
      <AddDoctor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
