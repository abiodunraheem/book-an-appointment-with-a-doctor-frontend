/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addReservations } from '../redux/reserve/ReservationFormReducer';
import { fetchDoctors } from '../redux/doctor/DoctorListReducer';

function Reserve() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);
  const navigate = useNavigate();

  const onSubmit = (doctors) => {
    dispatch(addReservations(doctors));
    navigate('/reservations');
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="container-fluid flex w-full">
      <div className="container-fluid w-full h-screen flex flex-col items-center p-8">
        <h1 className="text-3xl md:text-4xl sm:text-md font-bold text-lime-600 md:mt-56 mt-24 mb-6">Add Reservation</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="card w-full md:w-8/12 p-8 rounded-lg bg-mySpend-blueDoctorLight shadow-md">
          <div className="card-body w-full  md:flex gap-1 ">
            <div className="flex flex-col md:w-4/12">
              <label htmlFor="name" className="block text-grayDark text-bold text-lg md:text-center mt-2 md:mb-2">
                Date
              </label>
              <input type="date" name="date" {...register('datetime', { required: true })} />
            </div>
            <div className="flex flex-col md:w-4/12">
              <label htmlFor="name" className="block text-grayDark text-lg md:text-center mt-2 md:mb-2">
                Location
              </label>
              <input type="text" name="city" placeholder="Add City" {...register('city', { required: true })} />
            </div>
            <div className="flex flex-col md:w-4/12">
              <label htmlFor="name" className="block text-grayDark text-lg md:text-center mt-2 md:mb-2">
                Select Doctor
              </label>
              <select name="doctor" placeholder="Choose a doctor" {...register('doctor_id')}>
                {
                  doctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>{doc.name}</option>
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

export default Reserve;
