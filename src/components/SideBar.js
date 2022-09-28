import React from 'react';
import FooterNavlinks from './FooterNavlinks';
import SideLinks from './SideLinks';
import { SideBarStyle } from './Styles';

function SideBar() {
  return (
    <>
    <section style={SideBarStyle.imgdiv}>
      <div className="logo-div"></div>
      <SideLinks/>
      <FooterNavlinks/>
    </section>
    </>
  )
}

export default SideBar