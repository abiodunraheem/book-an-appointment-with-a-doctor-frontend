import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
