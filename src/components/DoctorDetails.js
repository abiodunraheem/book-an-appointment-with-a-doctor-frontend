import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const doctor = useParams();
  const doctorList = useSelector((state) => state.doctors.doctors.data);
  const doctorDetails = doctorList.filter((item) => +item.id === +doctor.id);

  return (
    <div className="container my-5
     "
    >
      {doctorDetails.map((item) => (
        <div className="details-container" key={item.id}>
          <div className="img-container">
            <img src={item.avatar} alt={item.name} />
          </div>
          <div className="contents p-5">
            <div className="p-3">
              <p>Name: </p>
              <h3>{item.name}</h3>
            </div>

            <div className="p-3 my-2">
              <p>Speciality: </p>
              {' '}
              <h4>{item.speciality}</h4>
            </div>
            <div className="p-3 my-2">
              <p>Bill: $</p>
              {' '}
              <h4>{item.bill}</h4>
            </div>
            <div className="p-3 my-2">
              <p>Location: </p>
              {' '}
              <h4>{item.location}</h4>
            </div>
            <div className="p-3 my-2">
              <p>Email: </p>
              {' '}
              <h4>{item.email}</h4>
            </div>
            <Link className="btn reserve-btn my-2" to={`/reservationForm/${item.id}`}>Reserve Now</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorDetails;
