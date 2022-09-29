import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDoctors } from '../redux/doctors/doctor';

function AddDoctor() {
  

  return (
    <>
      <div className="form-ctn">
        
        <form onSubmit={(e) => submitForm(e)}>
          <label htmlFor="name">
            Name:
            <input
              className="username_field"
              id="username"
              required
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          
        </form>
      </div>
    </>
  );
}

export default AddDoctor;
