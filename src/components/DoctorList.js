import React from 'react'
import PropTypes from 'prop-types';
// import Avatar from '@mui/material/Avatar';
import avatar from '../assets/images/medium.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DoctorList = ({name, email, location }) => {
  return (
    <>
<section className="doctor-list">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={avatar}
        alt="{name}"
        sx={{
          borderRadius: 50,
          
        }}
      />
      <CardContent
        sx={{
          width: 200,
          border: "none"
        }}>
        <Typography gutterBottom variant="h5" component="div"
              sx={{
                textAlign: "center"
              }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{
            textAlign: "center"
          }}>
         {email}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{
            textAlign: "center"
          }}>
         {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
          sx={{
            margin: "auto"
          }}>View Doctor</Button>
      </CardActions>
    </Card>
    </section>
    </>
  )
}

DoctorList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default DoctorList