import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDoctor } from '../redux/doctors/doctor';

function AddDoctor() {
  const dispatch = useDispatch();
  const [imageBase64, setImageBase64] = useState('');
  const [inputValues, setInputValues] = useState({
    name: '',
    speciality: '',
    cost: '',
    location: '',
    email: '',
    image: imageBase64,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const submitLogin = (e) => {
    e.preventDefault();
    setInputValues({
      ...inputValues,
      image: imageBase64,
    });
    if (inputValues.image === '') {
      return;
    }
    console.log(inputValues);
    dispatch(postDoctor(inputValues));
    setImageBase64('');
    setInputValues({
      name: '',
      speciality: '',
      cost: '',
      location: '',
      email: '',
      image: imageBase64,
    });
    setSelectedImage('');
  };

  const getBase64 = (file, cb) => {
    const reader = new FileReader();
    console.log(file);
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  const updateInput = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="form-ctn">
        {selectedImage && (
          <div className="img-select-ctn">
            <img
              id="doc-image"
              className="doc-image"
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button className="remove-img" type="button" onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />
        <input
          className="add-img"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
            getBase64(event.target.files[0], (result) => {
              console.log(result);
              setImageBase64(result);
            });
          }}
        />
        <form onSubmit={(e) => submitLogin(e)}>
          <label htmlFor="name">
            Name:
            <input
              className="username_field"
              id="username"
              required
              placeholder="Name"
              name="name"
              value={inputValues.name}
              onChange={updateInput}
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
              value={inputValues.email}
              name="email"
              onChange={updateInput}
            />
          </label>
          <label htmlFor="speciality">
            Speciality:
            <input
              className="username_field"
              id="username"
              required
              placeholder="Speciality"
              value={inputValues.speciality}
              name="speciality"
              onChange={updateInput}
            />
          </label>
          <label htmlFor="cost">
            Cost:
            <input
              className="username_field"
              type="number"
              id="username"
              required
              placeholder="Cost/h"
              value={inputValues.cost}
              name="cost"
              onChange={updateInput}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              className="username_field"
              id="username"
              required
              placeholder="Location"
              value={inputValues.location}
              name="location"
              onChange={updateInput}
            />
          </label>
          <input className="create-button" type="submit" value="Create doctor" />
        </form>
      </div>
    </>
  );
}

export default AddDoctor;
