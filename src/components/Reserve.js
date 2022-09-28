import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addReservationAsync } from '../redux/reservation/ReservationListReducer';
import SideBar from './SideBar';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservations);
  const onSubmit = (reservation) => (dispatch(addReservationAsync(reservation)) ? Navigate('/reservations') : null);

  return (
    <div className="container">
      <SideBar />
      <div className="container form">
        <h1 className="text-4xl font-bold text-lime-600 mt-24">Add Reservation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="doctor" className="text-lime-600 text-xl font-bold">
              Date
              <label htmlFor="doctor" className="text-lime-600 text-xl font-bold">
                City
              </label>
              <label htmlFor="doctor" className="text-lime-600 text-xl font-bold">
                Select doctor
              </label>
            </label>
            <input type="date" name="date" {...register('date', { required: true })} />
            <input type="text" name="city" {...register('city', { required: true })} />
            <select name="doctor" {...register('doctor_id')}>
              {
                reservation.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                ))
              }
            </select>
            <button type="submit" className="bg-lime-600 text-white text-xl font-bold p-2 rounded-md mt-4">Add Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
