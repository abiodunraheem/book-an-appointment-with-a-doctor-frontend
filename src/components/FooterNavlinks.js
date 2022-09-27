import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaVimeo, FaPinterest } from 'react-icons/fa';

const FooterNavlinks = () => {
const FooterLinks = [
    { icon: <FaTwitter/>, id: '1', url :"#"},
    { icon: <FaFacebook/>, id: '2', url :"#" },
    { icon: <FaGoogle/>, id: '3', url :"#" },
    { icon: <FaVimeo/>, id: '4',  url :"#"},
    { icon: <FaPinterest/>, id: '5',url :"#" },
  ];
  return (
    <>
    <footer className="footer-sec">
     <div className="div-social-icons">
        <ul className="ul-icons">
            {
                FooterLinks.map((icon)=> <li className="li-social-icon" key={icon.id}>
                    <a href={icon.url}>{icon.icon}</a>
                </li>)
            }
        </ul>
     </div>
    </footer>
    </>
  )
}

export default FooterNavlinks