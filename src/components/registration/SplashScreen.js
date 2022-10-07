import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/doc.png';

const SplashScreen = () => (
  <>
    <section className="splash-sec">
      <div className="overlay" />
      <div className="top">
        <div className="logo-div1">
          <img src={logo} alt="name" className="logo1" />
        </div>
        
        <NavLink to="/login" className="login-btn btn-login">
          <span>Login</span>
        </NavLink>
      </div>
      

    </section>
  </>
);

export default SplashScreen;
