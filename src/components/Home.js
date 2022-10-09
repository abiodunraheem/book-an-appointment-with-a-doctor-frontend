import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '@mui/material/CardActions';
import Carousel from "react-elastic-carousel";
import Link from '@mui/material/Link';
import DoctorList from './DoctorList';
import { fetchDoctors } from '../redux/doctor/DoctorListReducer';
import '../App.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <section className="h-full w-full flex flex-col justify-center items-center m-0 px-8 md:p-0">
      <div className="pt-16 mb-8 text-blueSecond text-md md:text-4xl md:mb-12">
        <h1 className="text-2xl text-center md:text-3xl">Hello Welcome to your Dashboard</h1>
      </div>
      <div className="w-full m-auto flex flex-wrap whitespace-nowrap justify-center items-center gap-10">
      <Carousel breakPoints={breakPoints}>
        {
            doctors.map((doc) => (
              <div key={doc.id} className="">
                <DoctorList
                  name={doc.name}
                  avatar={doc.avatar}
                  location={doc.location}
                  email={doc.email}
                />
                <CardActions
                  className="flex flex-col justify-center items-center"
                >
                  <Link
                    href={`/user/doctors/${doc.id}`}
                    underline="none"
                    className="btn px-4 py-2 bg-lime-500 hover:bg-lime-600 rounded-md"
                  >
                    <span className="text-white">View Doctor</span>
                  </Link>
                </CardActions>
              </div>
            ))
          }
           </Carousel>
      </div>
    </section>
  );
};

export default Home;
