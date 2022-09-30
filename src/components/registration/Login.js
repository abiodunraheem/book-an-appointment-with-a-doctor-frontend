import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/RegisterLoginSlice';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(login(username));
      setLoading(true);
    }
  };

  if (user.logged_in) {
    return <Navigate replace to="/user/dashboard" />;
  }

  return (
    <div
      className="login-sec"
    >
      <h2 className="l-title">Log in</h2>
      <form onSubmit={formSubmit} className="l-form">
        <div className="login-form-inputs">
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
            Log in
          </button>
        )}
      </form>
      <NavLink to="/register">
        <span>Sign up</span>
      </NavLink>
    </div>
  );
};

export default Login;
