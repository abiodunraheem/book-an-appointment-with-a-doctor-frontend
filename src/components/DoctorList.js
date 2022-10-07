import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import avatar from '../assets/images/doctor1.jpg';
import { dotStyle, materialImage, materialName } from './Styles';

function DoctorList({ name, email, location }) {
  return (
    <>
      <section className="mt-10">
        <Card sx={{
          minWidth: 208,
          height: 'auto',
          paddingTop: 2,
          boxShadow: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <CardMedia
            className="border-2 border-blueSecond rounded-full"
            component="img"
            image={avatar}
            alt="{name}"
            sx={materialImage}
          />
          <CardContent
            sx={{
              border: 'none',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={materialName}
            >
              {name}
            </Typography>
            <div style={dotStyle}>.......................</div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: 'center',
              }}
            >
              {email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: 'center',
              }}
            >
              {location}
            </Typography>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

DoctorList.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DoctorList;
