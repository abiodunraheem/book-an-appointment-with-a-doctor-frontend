import React from 'react'
import PropTypes from 'prop-types';

const DoctorList = ({name, email, location, avatar }) => {
  return (
    <>
    <section className="doctor-list">
        <p>{name}</p>
        <p>{email}</p>
        <p>{location}</p>
        <img src={avatar} alt="avatar"/>
    </section>
    </>
  )
}

DoctorList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DoctorList