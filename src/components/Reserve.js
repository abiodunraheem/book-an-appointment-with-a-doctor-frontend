/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addReservations } from '../redux/reserve/ReservationFormReducer';

export default function Reserve() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reserve);
  const onSubmit = (reservation) => (dispatch(addReservations(reservation)) ? Navigate('/reservations') : null);
  const { register, handleSubmit } = useForm();
  const doctors = useSelector((state) => state.doctors);

  return (
    <div className="container-fluid flex w-full">
      <div className="container-fluid w-full h-screen flex flex-col items-center bg-slate-100">
        <h1 className="text-4xl font-bold text-lime-600 mt-24 mb-6">Add Reservation</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="card w-8/12 p-8 rounded-lg bg-mySpend-blueDoctorLight shadow-md">
          <div className="card-body w-full flex gap-1">
            <div className="flex flex-col w-4/12">
              <label htmlFor="name" className="block text-grayDark text-bold text-lg text-center mb-2">
                Date
              </label>
              <input type="date" name="date" {...register('datetime', { required: true })} />
            </div>
            <div className="flex flex-col w-4/12">
              <label htmlFor="name" className="block text-grayDark text-lg text-center mb-2">
                Location
              </label>
              <input type="text" name="city" placeholder="Add City" {...register('city', { required: true })} />
            </div>
            <div className="flex flex-col w-4/12">
              <label htmlFor="name" className="block text-grayDark text-lg text-center mb-2">
                Add Doctor
              </label>
              <select name="doctor" placeholder="Choose a doctor" {...register('doctor_id')}>
                {
                  data.doctors?.map((doctor) => (
                    <option key={doctors.doctor.id} value={doctors.doctor.id}>
                      { doctor.id }
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
          <button type="submit" className="bg-lime-600 text-white text-xl hover:bg-lime-700 font-semi-bold px-4 py-2 rounded-sm mt-6">Add Reservation</button>
        </form>
      </div>
    </div>
  );
}
