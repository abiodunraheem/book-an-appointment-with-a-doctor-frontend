import React from 'react'
import { SideBarStyle } from './Styles';

const SideLinks = () => {
  
const navLinks = [
    { url: '/models', name: 'Add Doctors', id: 1 },
    { url: '/life_style', name: 'Add Reservations', id: 2 },
    { url: '/shop', name: 'My Reservations', id: 3 },
    { url: '/test_drive', name: 'Delete Doctor', id: 4 },
    { url: '/test_drive', name: 'Sign Out', id: 5 }
  ];

  
  return (
    <>
    <div >
      <ul style={SideBarStyle.linkDiv}>
        {
            navLinks.map((nav) => <li style={SideBarStyle.liItem} key={nav.id}>
               <a href={nav.url} style={ SideBarStyle.linkItem}>{nav.name}</a>
            </li>)
        }
      </ul>
    </div>
    </>
  )
}

export default SideLinks