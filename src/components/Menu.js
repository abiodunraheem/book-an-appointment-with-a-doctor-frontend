import React from 'react';
import Box from '@mui/material/Box';
import FooterNavlinks from './FooterNavlinks';
import SideLinks from './SideLinks';
import logo from '../assets/images/doc.png';

const Menu = () => (
  <>
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
  </>
);

export default Menu;
