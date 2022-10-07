import { Routes, Route, Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Reserve from './components/Reserve';
import SideBar from './components/SideBar';
import Register from './components/registration/Register';
import SplashScreen from './components/registration/SplashScreen';
import Login from './components/registration/Login';
import DoctorDetails from './components/DoctorDetails';
import DoctorList from './components/DoctorList';
import { fetchDoctors } from './redux/doctor/DoctorListReducer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const doctors = useSelector((state) => state.doctors.doctor);
  const SidebarLayout = () => (
    <>
      <SideBar />
      <Outlet />
    </>
  );
  return (
    <div className="App pb-4">
      <Routes>
        <Route exact path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path="/user/dashboard" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/user/doctors/" element={<DoctorList />} />
          <Route path="/user/doctors/:id" element={<DoctorDetails doctors={doctors} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
