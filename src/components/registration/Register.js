import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registeration } from '../../redux/user/RegisterLoginSlice';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && username) {
      dispatch(registeration({ email, username }));
      setLoading(true);
    }
  };

  if (user.logged_in) {
    return <Navigate replace to="/" />;
  }

  return (
    <div
      className="container-reg">
      <h2 className="register-title">Sign Up</h2>
      <form onSubmit={formSubmit} className="reg-form">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        {loading ? (
          <button type="button" className="btn btn-primary disabled mb-3">
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className="btn btn-primary mb-3">
            Sign up
          </button>
        )}
      </form>
      <NavLink to="/login">
        <span>Log in</span>
      </NavLink>
    </div>
  );
};

export default Register;