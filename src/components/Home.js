import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DoctorList from './DoctorList';
import { fetchDoctors } from '../redux/doctor/DoctorListReducer';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);

  return (
    <>
      <main className="main-home">
        <section className="home">
          <div className="home-top-content">
            <h1>Hello Welcome to your Dashboard</h1>
            <p>List of Doctors!</p>
          </div>
          <div className="grd">
            {
              doctors.map((doc) => (
                <div key={doc.id}>
                  <DoctorList
                    name={doc.name}
                    avatar={doc.avatar}
                    location={doc.location}
                    email={doc.email}
                  />
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
