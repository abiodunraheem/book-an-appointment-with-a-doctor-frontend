import React from 'react';
import FooterNavlinks from './FooterNavlinks';
import SideLinks from './SideLinks';

function SideBar() {
  return (
    <>
    <section className="sidebar">
      <div className="logo-div"></div>
      <SideLinks/>
      <FooterNavlinks/>
    </section>
    </>
  )
}

export default SideBar