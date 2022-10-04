import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
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

  // State to programmatically set active child
  // const [activeChild, setActiveChild] = useState(0);

  // // Basically items = [1, 2, 3, 4]
  // const items = useMemo(() => [1, 2, 3, 4], []);

  // // The Keypress Event Handler
  // const changeChild = useCallback(

  //     if (e.key === "ArrowLeft") {
  //       // If supposed previous child is < 0 set it to last child
  //       setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
  //     } else if (e.key === "ArrowRight") {
  //       // If supposed next child is > length -1 set it to first child
  //       setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
  //     }
  //   [items]
  // );

  // // Set and cleanup the event listener
  // useEffect(() => {
  //   document.addEventListener("keydown", changeChild);

  //   return function cleanup() {
  //     document.removeEventListener("keydown", changeChild);
  //   };
  // });

  // to get Active logged in current user's id

  // const currentUser = localStorage.getItem('user') || '';
  // const json = JSON.parse(currentUser);
  // const CurrentActive = (json.user.id);

  return (
    <>
      <main className="main-home">
        <section className="home">
          <div className="home-top-content">
            <h1>Hello Welcome to your Dashboard</h1>
            <p>List of Doctors!</p>
          </div>
          <div className="grd">
            <Carousel
              // index={activeChild} // <-- This controls the activeChild
              autoPlay={false} // <-- You probaly want to disable this for our purposes
              navButtonsAlwaysVisible
            >
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
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
