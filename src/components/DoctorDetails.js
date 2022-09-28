import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const DoctorDetails = (props) => {
  const navigate = useNavigate();
  const { doctor } = props;
  const docDetails = JSON.parse(doctor);

  const openReserve = () => {
    navigate('/reserve');
  };

  return (
    <>
      {
        docDetails
        && (
          <div className="doc-info-ctn">
            <div className="img-ctn">
              {
                docDetails.image === '' && <div className="img-bg" />
              }
              {
                docDetails.image !== '' && <img className="doc-img" src={docDetails.image} alt="doctor" />
              }
            </div>
            <h5 className="doc-name">{docDetails.name}</h5>
            <div className="doc-info-tbl">
              <div className="doc-info-row">
                <h5>Speciality </h5>
                <h5>{docDetails.speciality}</h5>
              </div>
              <div className="doc-info-row white">
                <h5>Cost </h5>
                <h5>
                  {docDetails.bill}
                  {' '}
                  $/h
                </h5>
              </div>
              <div className="doc-info-row">
                <h5>Location </h5>
                <h5>{docDetails.location}</h5>
              </div>
              <div className="doc-info-row white">
                <h5>Email </h5>
                <h5>{docDetails.email}</h5>
              </div>
            </div>
            <button className="reserve-btn" type="button" onClick={openReserve}>Reserve</button>
          </div>
        )
      }

    </>
  );
};

DoctorDetails.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    speciality: PropTypes.string,
    bill: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default DoctorDetails;
