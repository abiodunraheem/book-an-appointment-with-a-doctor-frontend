/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addReservationAsync } from '../redux/reserve/ReservationFormReducer';
import SideBar from './SideBar';

export default function Reserve() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const onSubmit = (reservation) => (dispatch(addReservationAsync(reservation)) ? Navigate('/reservations') : null);
  const { register, handleSubmit } = useForm();

  return (
    <div className="container-fluid flex">
      <SideBar />
      <div className="container-fluid w-full flex flex-col items-center mt-52">
        <h1 className="text-4xl font-bold text-lime-600 mb-3">Add Reservation</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="card w-6/12 p-8 rounded-lg bg-lime-100">
          <div className="card-body w-full">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <input type="date" name="date" className="w-4/12" {...register('date', { required: true })} />
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Add Location
            </label>
            <input type="text" name="city" className="w-4/12" placeholder="Add City" {...register('city', { required: true })} />
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Add a doctor
            </label>
            <select name="doctor" className="w-4/12" placeholder="Choose a doctor" {...register('doctor_id')}>
              {
                reservations.doctors?.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))
              }
            </select>
          </div>
          <button type="submit" className="bg-lime-600 text-white text-xl font-bold p-2 rounded-md mt-4">Add Reservation</button>
        </form>
      </div>
    </div>
  );
}
