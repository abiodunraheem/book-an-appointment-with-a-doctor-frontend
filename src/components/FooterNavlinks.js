import React from 'react';
import {
  FaFacebook, FaTwitter, FaGoogle, FaVimeo, FaPinterest,
} from 'react-icons/fa';
import Link from '@mui/material/Link';
import { FooterStyle } from './Styles';

const FooterNavlinks = () => {
  const FooterLinks = [
    { icon: <FaTwitter />, id: '1', url: '#' },
    { icon: <FaFacebook />, id: '2', url: '#' },
    { icon: <FaGoogle />, id: '3', url: '#' },
    { icon: <FaVimeo />, id: '4', url: '#' },
    { icon: <FaPinterest />, id: '5', url: '#' },
  ];
  return (
    <>
      <footer style={FooterStyle.footerSec}>
        <div className="div-social-icons">
          <ul style={FooterStyle.ulIcons}>
            {
              FooterLinks.map((icon) => (
                <li className="li-social-icon" key={icon.id}>
                  {/* <a href={icon.url} style={FooterStyle.liIcon}>{icon.icon}</a> */}
                  <Link
                    href={icon.url}
                    underline="none"
                    sx={FooterStyle.liIcon}
                  >
                    {icon.icon}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div style={FooterStyle.copyrightDiv}>
          <p style={FooterStyle.copyright}>© 2022 BOOK AN APPOINTMENT</p>
        </div>
      </footer>
    </>
  );
};

export default FooterNavlinks;
