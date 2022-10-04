import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TbMenu } from 'react-icons/tb';
// import Box from '@mui/material/Box';
// import FooterNavlinks from './FooterNavlinks';
// import SideLinks from './SideLinks';
// import logo from '../assets/images/doc.png';
// import { SideBarStyle } from './Styles';
import SideBarMenu from './SideBarMenu';

function SideBar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleNavbarToggle = () => {
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
      <section className="Sidemenu">
        <button className="humbergur mt-3 ml-3 bg-transparent" type="button">
          {navbarOpen ? <TbMenu className="open" onClick={() => handleNavbarToggle()} />
            : <MdClose className="close" onClick={() => handleNavbarToggle()} />}
        </button>
        <div>
          { !navbarOpen && <SideBarMenu closeMobile={closeMobile} /> }
        </div>
      </section>
      <div className="desk">
        <SideBarMenu />
      </div>
    </>
  );
}

export default SideBar;
