import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const DoctorDetails = () => {
  const doctor = useParams();
  const dataList = useSelector((state) => state.doctors.doctors.data);
  const doctorDetails = dataList.filter((doctorList) => +doctorList.id === +doctor.id);

  return (
    <div className="container my-5
     "
    >
      {doctorDetails.map((item) => (
        <div className="details-container" key={item.id}>
          <div className="img-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="contents p-5">
            <div className="p-3">
              <p>Name: </p>
              <h3>{item.name}</h3>
            </div>

            <div className="p-3 my-2">
              <p>Speciality: $</p>
              {' '}
              <h4>{item.speciality}</h4>
            </div>
            <Link className="btn book-btn my-2" to={`/reservationForm/${item.id}`}>Reserve Now</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorDetails;
