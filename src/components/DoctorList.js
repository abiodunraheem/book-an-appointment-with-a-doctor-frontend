import React from 'react'
import PropTypes from 'prop-types';
import avatar from '../assets/images/medium.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const DoctorList = ({name, email, location }) => {
  return (
    <>
<section className="doctor-list">
<Card sx={{ maxWidth: 209,
            marginTop: 5,
            boxShadow: "none"
          }}>
      <CardMedia
        component="img"
        height="140"
        image={avatar}
        alt="{name}"
        sx={{
          borderRadius: 50,
          width: 200,
          margin: "auto",
        }}
      />
      <CardContent
        sx={{
          width: 200,
          border: "none",
          margin: "auto"
        }}>
        <Typography gutterBottom variant="h5" component="div"
              sx={{
                textAlign: "center",
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
      <Link href="#" underline="none"
       sx={{
        margin: "auto",
        color: "#fff",
        border: "1px solid none",
        background: "#91bf13",
        padding: 1,
        borderRadius: 5
      }}>
        {"View Doctor"}
      </Link>
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