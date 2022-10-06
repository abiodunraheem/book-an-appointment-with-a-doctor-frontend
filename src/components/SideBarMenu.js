import React from 'react';
import Box from '@mui/material/Box';
import FooterNavlinks from './FooterNavlinks';
import SideLinks from './SideLinks';
import logo from '../assets/images/doc.png';
import { SideBarStyle } from './Styles';

function SideBarMenu() {
  return (
    <>
      <section style={SideBarStyle.imgdiv} id="fixed" className="p-0">
        <div className="logo-div w-full bg-slate-100 placeholder: md:w-3/12 fixed h-full">
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
              marginTop: 10,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src={logo}
          />
          <SideLinks />
          <FooterNavlinks />
        </div>
      </section>
    </>
  );
}

export default SideBarMenu;
