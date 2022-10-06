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

  const user = useSelector((state) => state.user);
  console.log(user);

  // to get Active logged in current user's id

  // const currentUser = localStorage.getItem('user') || '';
  // const json = JSON.parse(currentUser);
  // const CurrentActive = (json.user.id);

  return (
    <>
      <section className="h-full w-full flex flex-col justify-center items-center m-0">
        <div className="home-top-content pt-12 text-blueSecond text-md md:text-4xl md:mb-12">
          <h1>Hello Welcome to your Dashboard</h1>
        </div>
        <div className="w-full m-auto flex flex-wrap whitespace-nowrap justify-center items-center gap-10">
          {
            doctors.map((doc) => (
              <div key={doc.id} className="w-11/12 md:w-3/12">
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
    </>
  );
}

export default Home;
