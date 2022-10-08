import React from 'react';
import { useSelector } from 'react-redux';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import DoctorList from './DoctorList';
import '../App.css';

const Home = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDoctors());
  // }, []);
  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);

  return (
    <section className="h-full w-full flex flex-col justify-center items-center m-0 px-8 md:p-0">
      <div className="pt-16 mb-8 text-blueSecond text-md md:text-4xl md:mb-12">
        <h1 className="text-2xl text-center md:text-4xl">Hello Welcome to your Dashboard</h1>
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
      </div>
    </section>
  );
};

export default Home;
