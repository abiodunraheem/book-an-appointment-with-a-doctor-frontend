import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservation/ReservationListReducer';
import SideBar from './SideBar';

export default function Reservation() {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      doctor: e.target.doctor.value,
      city: e.target.city.value,
      bill: e.target.bill.value,
      date: e.target.date.value,
    };
    dispatch(addReservation(reservation));
  };

  return (
    <div className="container-fluid p-0 flex ">
      <SideBar />
      <div className="container-fluid flex flex-col w-full h-screen items-center bg-slate-100">
        <h1 className="mt-24 text-lime-600 text-4xl font-bold">Create a reservation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-8/12 mt-6">
          <label htmlFor="doctor" className="text-white text-xl font-bold">Doctor</label>
          <select name="doctor" id="doctor" className="bg-slate-300 text-white">
            {
                doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                ))
                }
          </select>
          <label htmlFor="city" className="text-white text-xl font-bold">City</label>
          <input type="text" name="city" id="city" className="bg-slate-300 text-white" />
          <label htmlFor="bill" className="text-white text-xl font-bold">Bill</label>
          <input type="number" name="bill" id="bill" className="bg-slate-300 text-white" />
          <label htmlFor="date" className="text-white text-xl font-bold">Date</label>
          <input type="date" name="date" id="date" className="bg-slate-300 text-white" />
          <button
            type="submit"
            className="bg-lime-500
            text-white text-xl font-bold mt-4"
          >
            Create reservation
          </button>
        </form>
      </div>
    </div>
  );
}
