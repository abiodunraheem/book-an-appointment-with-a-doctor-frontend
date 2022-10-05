import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import DoctorList from './DoctorList';
import { fetchDoctors } from '../redux/doctor/DoctorListReducer';
import { carousels } from './Styles';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);

  // const user = useSelector((state) => state.user);
  console.log(doctors);

  return (
    <>
      <main className="main-home">
        <section className="home">
          <div className="home-top-content">
            <h1>Hello Welcome to your Dashboard</h1>
            <p>List of Doctors!</p>
          </div>
          {/* <div className="grd"> */}
          <Carousel style={carousels} focusOnSelect itemsToShow={3}>
            {
              doctors.map((doc) => (
                <DoctorList
                  key={doc.id}
                  name={doc.name}
                  avatar={doc.avatar}
                  location={doc.location}
                  email={doc.email}
                />
              ))
            }
          </Carousel>
          {/* </div> */}
        </section>
      </main>
    </>
  );
}

export default Home;
