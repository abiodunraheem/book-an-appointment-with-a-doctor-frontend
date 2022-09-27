import React from 'react'
import PropTypes from 'prop-types';

const DoctorList = ({name, email, location, avatar }) => {
  return (
    <>
    <section className="doctor-list">
      <div className="doc-div">
        <div className="avatar-div">
        <img src={avatar} alt="avatar"/>
        </div>
        <div className="doc-infor">
          <h2 className="doc-name">{name}</h2>
          <span className="doc-email">{email}</span>
          <span className="doc-location">{location}</span>
        </div>
        <a href="#" className="View-btn">View Doctor</a> 
      </div>
    </section>
    </>
  )
}

DoctorList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DoctorList