import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DoctorDetails = () => {
  const params = useParams();

  const currentDoctors = localStorage.getItem('store') || '';
  const json = JSON.parse(currentDoctors);
  const { doctor } = json.doctors;
  const filterdDoctor = doctor.filter((doctor) => doctor.id === Number(params.id));

  return (
    <div className="container w-full h-screen py-16 px-0 flex flex-col items-center">
      <img src={filterdDoctor[0].avatar} alt={filterdDoctor[0].name} className="w-22 h-22 rounded-full md:w-12 md:h-12" />
      <div className="contents p-5">
        <div className="p-3">
          <p>Name: </p>
          <h3>{filterdDoctor[0].name}</h3>
        </div>

        <div className="p-3 my-2">
          <p>Speciality: </p>
          {' '}
          <h4>{filterdDoctor[0].speciality}</h4>
        </div>
        <div className="p-3 my-2">
          <p>Bill: $</p>
          {' '}
          <h4>{filterdDoctor[0].bill}</h4>
        </div>
        <div className="p-3 my-2">
          <p>Location: </p>
          {' '}
          <h4>{filterdDoctor[0].location}</h4>
        </div>
        <div className="p-3 my-2">
          <p>Email: </p>
          {' '}
          <h4>{filterdDoctor[0].email}</h4>
        </div>
        <Link className="btn reserve-btn my-2" to={`/reserve/${filterdDoctor[0].id}`}>Reserve Now</Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
