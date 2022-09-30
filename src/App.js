import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import SideBar from './components/SideBar';
import Register from './components/registration/Register';

function App() {
  return (
    <div className="App">
      <Register />
      <Routes>
      <Route element={<SideBar />}>
        <Route path="/" element={<Home />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
