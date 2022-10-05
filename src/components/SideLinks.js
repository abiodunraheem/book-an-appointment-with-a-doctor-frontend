import React from 'react';
import Link from '@mui/material/Link';
import { SideBarStyle } from './Styles';

const SideLinks = () => {
  const navLinks = [
    { url: '/doctor', name: 'Add Doctor', id: 1 },
    { url: '/reserve', name: 'Add Reservation', id: 2 },
    { url: '/reservations', name: 'My Reservations', id: 3 },
    { url: '/delete', name: 'Delete Doctor', id: 4 },
    { url: '/exit', name: 'Sign Out', id: 5 },
  ];

  return (
    <>
      <ul style={SideBarStyle.linkDiv} className="md:-mt-52 -mt-36">
        {
          navLinks.map((nav) => (
            <li style={SideBarStyle.liItem} key={nav.id}>
              <Link
                href={nav.url}
                underline="none"
                sx={SideBarStyle.linkItem}
              >
                {nav.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default SideLinks;
