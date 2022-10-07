import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './App.css';

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
          <div className="avatar-container">
            <img src={item.avatar} alt={item.name} />
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default DoctorDetails;
