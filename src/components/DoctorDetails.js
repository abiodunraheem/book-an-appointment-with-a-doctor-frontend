/* eslint-disable radix */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import fetchDoctors from '../redux/doctors/doctors';

const DoctorDetails = () => {
  const params = useParams();

  const currentDoctors = localStorage.getItem('store') || '';
  const json = JSON.parse(currentDoctors);
  const { doctor } = json.doctors;
  const doctors = doctor.filter((doc) => doc.id === parseInt(params.id));

  return (
    <div className="container w-full h-auto py-16 px-4 flex flex-col items-center">
      <div className="card flex flex-col w-96 min-w-96 shadow-md p-4 gap-3">
        <div className="w-full h-44 min-h-44 rounded-md bg-slate-400 mb-3">
          <img src={doctors[0].avatar} alt={doctors[0].name} className="w-22 h-22 rounded-full md:w-32 md:h-32" />
        </div>
        <span className="">
          <h2 className="font-bold text-xl">
            Name:
            {' '}
            <span className="font-normal text-grayDark">{doctors[0].name}</span>
          </h2>
        </span>
        <span className="">
          <h2 className="font-bold text-xl">
            Speciality:
            {' '}
            <span className="font-normal text-grayDark">{doctors[0].speciality}</span>
          </h2>
        </span>
        <div className="">
          <h2 className="font-bold text-xl">
            Bill:
            {' '}
            <span className="font-normal text-grayDark">
              $
              {doctors[0].bill}
            </span>
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">
            Location:
            {' '}
            <span className="font-normal text-grayDark">{doctors[0].location}</span>
          </h2>
        </div>
        <div className="mb-6">
          <h2 className="font-bold text-xl">
            Email:
            {' '}
            <span className="font-normal text-grayDark">{doctors[0].email}</span>
          </h2>
        </div>
        <Link className="mt-2 py-2 bg-lime-500 px-4 rounded-sm text-center" to="/reserve/"><span className="font-normal text-xl text-white">Reserve Now</span></Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
