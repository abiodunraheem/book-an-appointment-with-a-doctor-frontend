import React from 'react';
import { NavLink } from 'react-router-dom';

const SplashScreen = () => (
  <>
    <section className="splash-sec">
      <div className="top">
        <div className="logo-div">
          <img src="" alt />
        </div>
        <div className="welcome-text">
          <h1 className="text">Welcome Back</h1>
          <p className="text-two">Login to your Account</p>
        </div>
        <div className="login-btn">
        <NavLink to="/login">
        <span>Login</span>
      </NavLink>
        </div>
      </div>

    </section>
  </>
);

export default SplashScreen;
