/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteDoctor = ({
  id, avatar, speciality, name, doctors, setDoctors,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const removeDoctor = (id) => {
    axios
      .delete(`http://127.0.0.1:3000/api/v1/doctor/${id}`)
      .then(() => {
        let filteredDoctors = [];
        filteredDoctors = doctors.filter((doctor) => doctor.id !== id);
        setDoctors(filteredDoctors);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p >{errorMessage}</p>
      <section  key={id}>
        <div>
          <img src={avatar} alt={name} />
        </div>
        <div className="model-detail d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 mt-3">{name}</h3>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
            <h5 className="h6 pt-1">{speciality}</h5>
          </div>
        </div>
        <button
          type="button"
          onClick={() => removeDoctor(id)}
          className="btn btn-danger mb-3"
        >
          Delete
        </button>
      </section>
    </>
  );
};

DeleteCarUi.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  doctors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  setDoctors: PropTypes.func.isRequired,
};

export default DeleteDoctor;