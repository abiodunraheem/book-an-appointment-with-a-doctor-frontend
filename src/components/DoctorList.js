import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import avatar from '../assets/images/doctor1.jpg';
import { dotStyle, materialImage, materialName } from './Styles';

const DoctorList = ({ name, email, location }) => (
  <>
    <section className="doctor-list">

      
    </section>
  </>
);

DoctorList.propTypes = {
  // avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DoctorList;
