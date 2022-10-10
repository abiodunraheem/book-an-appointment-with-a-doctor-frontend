import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoctor } from '../redux/doctor/AddDoctorReducer';
import '../App.css';

function AddDoctor() {
  const currentUser = localStorage.getItem('user') || '';
  const json = JSON.parse(currentUser);
  const user = (json);
  const history = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [bill, setBill] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const doctorsName = document.getElementById('username');
  const doctorsEmail = document.getElementById('doctor-email');
  const doctorsSpeciality = document.getElementById('speciality');
  const doctorsLocation = document.getElementById('location');
  const doctorsBill = document.getElementById('docbill');
  const doctorsImage = document.getElementById('image');
  const submitForm = (e) => {
    e.preventDefault();
    const newDoctor = {
      user_id: user.user.id,
      name,
      speciality,
      bill,
      location,
      email,
      avatar,
    };
    dispatch(addDoctor(newDoctor));
    doctorsName.value = '';
    doctorsEmail.value = '';
    doctorsSpeciality.value = '';
    doctorsLocation.value = '';
    doctorsBill.value = '';
    doctorsImage.value = '';
  };

  return (
    <div className="form-container">
      <div className="form-control">
        <Form className="form-add" onSubmit={submitForm}>
          <Form.Group className="mb-3">
            <Form.Label>Image Url:</Form.Label>
            <Form.Control
              type="text"
              id="image"
              className="img-input"
              placeholder="Enter Image Url"
              name="Image"
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              className="username_field"
              id="username"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              className="username_field"
              id="doctor-email"
              required
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              className="username_field"
              id="location"
              required
              placeholder="Location"
              value={location}
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bill</Form.Label>
            <Form.Control
              type="text"
              className="username_field"
              id="docbill"
              required
              placeholder="Cost/h"
              value={bill}
              name="bill"
              onChange={(e) => setBill(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>speciality</Form.Label>
            <Form.Control
              type="text"
              className="username_field"
              id="speciality"
              required
              placeholder="Speciality"
              value={speciality}
              name="speciality"
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </Form.Group>
          <div className="btn-flex">
            <Button className="primary-btn" type="button" onClick={() => history('/user/dashboard')}>
              Back
            </Button>
            <Button className="primary-btn" type="submit">
              Submit
            </Button>

          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddDoctor;
