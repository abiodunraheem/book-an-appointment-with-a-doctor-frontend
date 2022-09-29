import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import Menu from './Menu';

function SideBar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const hundleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  };

  const closeMobile = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  };

  return (
    <>
        <button className="humbergur" type="button">
          {navbarOpen ? <MdMenu onClick={() => hundleNavbarToggle()} /> : <MdClose className="close" onClick={() => hundleNavbarToggle()} />}
        </button>
        <div>
          { !navbarOpen && <Menu isMobile closeMobile={closeMobile} /> }
        </div>
    </>
  );
}

export default SideBar;
