import React from 'react';
import Link from '@mui/material/Link';
import { SideBarStyle } from './Styles';

const SideLinks = () => {
  const navLinks = [
    { url: '/user/add_doctor', name: 'Add Doctor', id: 1 },
    { url: '/reserve', name: 'Add Reservation', id: 2 },
    { url: '/reservations', name: 'My Reservations', id: 3 },
    { url: '/doctors/:id', name: 'Delete Doctor', id: 4 },
  ];

  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <>
      <ul
        className="-mt-32 md:mt-26 w-full pl-8 flex flex-col list-none gap-2 md:gap-3"
      >
        {
          navLinks.map((nav) => (
            <li
              style={SideBarStyle.liItem}
              key={nav.id}
              className="text-white uppercase text-center"
            >
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
        <button
          type="button"
          className="logout"
          onClick={() => logout()}
        >
          <i className="fa-solid fa-arrow-right-from-bracket me-2" />
          Logout
        </button>
      </ul>
    </>
  );
};

export default SideLinks;
