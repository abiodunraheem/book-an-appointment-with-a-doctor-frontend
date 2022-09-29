// import React, { useState } from 'react';
// import { MdClose, MdMenu } from 'react-icons/md';
import Box from '@mui/material/Box';
import FooterNavlinks from './FooterNavlinks';
import SideLinks from './SideLinks';
import logo from '../assets/images/doc.png';
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
        <div className="logo-div">
          <Box
            component="img"
            sx={{
              height: 120,
              width: 120,
              marginTop: 10,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={logo}
          />
          <SideLinks />
        </div>
        <FooterNavlinks />
      </section>
      <section className="Sidemenu">
        <button className="humbergur" type="button">
          {navbarOpen ? <MdMenu onClick={() => hundleNavbarToggle()} />
          : <MdClose className="close" onClick={() => hundleNavbarToggle()} />}
        </button>
        <div>
          { !navbarOpen && <SideBarMenu isMobile closeMobile={closeMobile} /> }
        </div> 
      </section>
    </>
  );
}

export default SideBar;
