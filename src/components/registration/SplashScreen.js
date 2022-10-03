import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/doc.png';

const SplashScreen = () => (
  <>
    <section className="splash-sec">
      <div className="overlay" />
      <div className="top">
        <div className="logo-div">
          <img src={logo} alt="name" className="logo" />
        </div>
        <div className="welcome-text">
          <h1 className="text">Welcome Back</h1>
          <p className="text-two">Login to your Account</p>
        </div>
        <div className="login-btn">
          <NavLink to="/login" className="btn-login">
            <span>Login</span>
          </NavLink>
        </div>
      </div>
      <div className="bottom">
        <p className="register-link">
          Don&apos;t have an account?
          {' '}
          <NavLink to="/register">Register</NavLink>
        </p>
      </div>

    </section>
  </>
);

export default SplashScreen;
