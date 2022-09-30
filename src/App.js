import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import SideBar from './components/SideBar';
import Register from './components/registration/Register';

function App() {
  const SidebarLayout = () => (
    <>
      <SideBar />
      <Outlet />
    </>
  );
  return (
    <div className="App">

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path="/user/dashboard" element={<Home />} />
          <Route path="/user/reservation" element={<Home />} />
          <Route path="/user/reservation/:id" element={<Home />} />
          <Route path="/user/doctors/:id" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
