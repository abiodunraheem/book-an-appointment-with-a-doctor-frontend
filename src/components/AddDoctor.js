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
          </label>
          <label htmlFor="email">
            Email:
            <input
              className="username_field"
              type="email"
              id="username"
              required
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="speciality">
            Speciality:
            <input
              className="username_field"
              id="username"
              required
              placeholder="Speciality"
              value={speciality}
              name="speciality"
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </label>
          <label htmlFor="bill">
            Bill:
            <input
              className="username_field"
              type="number"
              id="username"
              required
              placeholder="Cost/h"
              value={bill}
              name="bill"
              onChange={(e) => setBill(e.target.value)}
            />
          </label>
          
          <input className="create-button" type="submit" value="Create doctor" />
        </form>
      </div>
    </>
  );
}

export default AddDoctor;
