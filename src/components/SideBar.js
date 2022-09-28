import React from 'react';
import FooterNavlinks from './FooterNavlinks';
import SideLinks from './SideLinks';
import { SideBarStyle } from './Styles';
import  Box  from '@mui/material/Box';
import logo from '../assets/images/doc.png';



function SideBar() {
  return (
    <>
    <section style={SideBarStyle.imgdiv}>
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
      <SideLinks/>
      </div>
      <FooterNavlinks/>
    </section>
    </>
  )
}

export default SideBar