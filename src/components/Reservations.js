import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservation/ReservationListReducer';
import SideBar from './SideBar';

export default function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  console.log(reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <div className="container-fluid p-0 flex ">
      <SideBar />
      <div className="container-fluid flex flex-col w-full h-screen items-center bg-slate-100">
        <h1 className="mt-24 text-lime-600 text-4xl font-bold">List of reservations</h1>
        <table className="table table-striped w-8/12 bg-lime-500 mt-6">
          <thead className="text-white">
            <tr>
              <th>Doctor(s)</th>
              <th>City</th>
              <th>Bill</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-center bg-slate-300">
            {
            reservations.length > 0 ? (
              reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.doctor.name}</td>
                  <td>{reservation.city}</td>
                  <td>{reservation.bill}</td>
                  <td>{reservation.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No reservations</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}
