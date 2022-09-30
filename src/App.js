import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import SideBar from './components/SideBar';
import Register from './components/registration/Register';

function App() {
  return (
    <div className="App">
      <Register />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
