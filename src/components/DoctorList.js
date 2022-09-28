import React from 'react'
import PropTypes from 'prop-types';
import avatar from '../assets/images/doctor1.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { dotStyle, materialImage } from './Styles';
import { materialName } from './Styles';

const DoctorList = ({name, email, location }) => {

  return (
    <>
<section className="doctor-list">

<Card sx={{ minWidth: 239,
            height: "auto",
            marginTop: 5,
            paddingTop: 1,
            boxShadow: 0
            
          }}>
      <CardMedia
        component="img"
        image={avatar}
        alt="{name}"
        sx={materialImage}
      />
      <CardContent
        sx={{
          width: 200,
          border: "none",
        }}>
        <Typography gutterBottom variant="h5" component="div"
              sx={materialName}>
          {name}
        </Typography>
        <div style={dotStyle}>.......................</div>
        <Typography variant="body2" color="text.secondary"
          sx={{
            textAlign: "center",
            marginLeft: "-15px"
          }}>
         {email}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{
            textAlign: "center",
            marginLeft: "-15px"
          }}>
         {location}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href="#" underline="none"
       sx={{
        margin: "auto",
        width: "130px",
        display: "flex",
        justifyContent: "center",
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