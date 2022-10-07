import React from 'react';
// import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import { fetchDoctors } from '../redux/doctor/DoctorListReducer';

const DoctorDetails = () => {
  // const doctorList = useSelector((state) => state.doctors.doctor);
  // const doctors = Array.from(doctorList);
  const params = useParams();
  // const doctor = doctors.filter((doctor) => doctor.id === Number(params.id));
  // const selectedDoctor = doctor[0];

  // const user = useSelector((state) => state.user);
  // console.log(user);

  // to get Active logged in current user's id

  const currentDoctors = localStorage.getItem('store') || '';
  const json = JSON.parse(currentDoctors);
  const { doctor } = json.doctors;
  const filterdDoctor = doctor.filter((doctor) => doctor.id === Number(params.id));
  console.log(filterdDoctor);
  console.log(params);

  return (
    <div id="RouterNavLink" className="doctor-container">
      <div className="image-container">
        <img src={filterdDoctor[0].avatar} alt="Profile of doctor" className="single-image" />
      </div>
      <div className="details">
        <h4 className="detail-name">{filterdDoctor[0].name}</h4>
        <table>
          <tr className="col">
            <th>Speciality</th>
            <td>{filterdDoctor[0].speciality}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{filterdDoctor[0].email}</td>
          </tr>
          <tr className="col">
            <th>Bill</th>
            <td>{filterdDoctor[0].bill}</td>
          </tr>
        </table>
        <Link to="/new_appointment" className="btn-details btn mt-4 text-center">Book Appointment</Link>
      </div>
    </div>
  );
};
// DoctorDetails.propTypes = {
//   doctors: PropTypes.array.isRequired,
// };

export default DoctorDetails;
