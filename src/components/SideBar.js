import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import Menu from './Menu';
import { SideBarStyle } from './Styles';

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
      <section style={SideBarStyle.imgdiv} className="side">
        <button className="humbergur" type="button">
          {navbarOpen ? <MdMenu onClick={() => hundleNavbarToggle()} /> : <MdClose className="close" onClick={() => hundleNavbarToggle()} />}
        </button>
        <div>
          { !navbarOpen && <Menu isMobile closeMobile={closeMobile} /> }
        </div>
      </section>
    </>
  );
}

export default SideBar;
