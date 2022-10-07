import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DoctorDetails = () => {
 
  const params = useParams();

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
