// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import { fetchDoctors } from '../redux/doctor/DoctorListReducer';
// import '../App.css';

// const DoctorDetails = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchDoctors());
//   }, [dispatch]);
//   const doctor = useParams();
//   const doctorList = useSelector((state) => state.doctors.doctor);
//   const doctors = Array.from(doctorList);
//   const doctorDetails = doctors.filter((item) => +item.id === +doctor.id);
//   console.log(doctors);

//   return (
//     <div className="container my-5
//      "
//     >
//       {doctorDetails.doctor?.map((item) => (
//         <div className="details-container" key={item.id}>
//           <div className="avatar-container">
//             <img src={item.avatar} alt={item.name} />
//           </div>
//           <div className="contents p-5">
//             <div className="p-3">
//               <p>Name: </p>
//               <h3>{item.name}</h3>
//             </div>

//             <div className="p-3 my-2">
//               <p>Speciality: </p>
//               {' '}
//               <h4>{item.speciality}</h4>
//             </div>
//             <div className="p-3 my-2">
//               <p>Bill: $</p>
//               {' '}
//               <h4>{item.bill}</h4>
//             </div>
//             <div className="p-3 my-2">
//               <p>Location: </p>
//               {' '}
//               <h4>{item.location}</h4>
//             </div>
//             <div className="p-3 my-2">
//               <p>Email: </p>
//               {' '}
//               <h4>{item.email}</h4>
//             </div>
//             <Link className="btn reserve-btn my-2" to={`/reserve/${item.id}`}>Reserve Now</Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DoctorDetails;
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/v1/doctors/${id}`)
      .then((response) => setDoctor(response.data.doctor));
  }, []);
  return (
    <div className="container my-5
     "
    >
      <div className="contents p-5">
        <div className="p-3">
          <p>Name: </p>
          <h3>{doctor.name}</h3>
        </div>
        <div className="p-3 my-2">
          <p>Speciality: </p>
          {' '}
          <h4>{doctor.speciality}</h4>
        </div>
        <div className="p-3 my-2">
          <p>Bill: $</p>
          {' '}
          <h4>{doctor.bill}</h4>
        </div>
        <div className="p-3 my-2">
          <p>Location: </p>
          {' '}
          <h4>{doctor.location}</h4>
        </div>
        <div className="p-3 my-2">
          <p>Email: </p>
          {' '}
          <h4>{doctor.email}</h4>
        </div>
        <NavLink className="btn reserve-btn my-2" to={`/reservationForm/${doctor.id}`}>Reserve doctor</NavLink>
      </div>
    </div>
  );
};
export default DoctorDetails;
