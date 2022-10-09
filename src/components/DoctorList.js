import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function DoctorList({
  name, email, location, avatar,
}) {
  return (
    <>
      <section className="pt-10">
        <div className="container flex flex-col justify-center items-center">
          <img src={avatar} alt="avatar" className="border-2 border-blueSecond rounded-full w-32 h-32 md:w-44 md:h-44" />
          <CardContent
            className="flex flex-col justify-center items-center"
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center text-mySpend-Text m-auto"
            >
              {name}
            </Typography>
            <span className="mb-2">..................................</span>
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
        </div>
      </section>
    </>
  );
}

DoctorList.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DoctorList;
