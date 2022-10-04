import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Reserve from './components/Reserve';
import './App.css';
import SideBar from './components/SideBar';

function App() {
  const data = useSelector((state) => state.doctors);
  console.log(data);
  return (
    <div className="App pb-4">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reserve" element={<Reserve data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
