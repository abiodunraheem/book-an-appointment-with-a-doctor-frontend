import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/reservation/ReservationListReducer';

export default function Reservations() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <div className="container-fluid p-0 flex w-full">
      <div className="container-fluid flex flex-col w-full h-screen items-center px-4 md:px-0 sm:px-4">
        <h1 className="text-3xl md:text-4xl sm:text-md font-bold text-lime-600 md:mt-16 mt-24 mb-6">List of reservations</h1>
        <table className="table table-striped md:w-8/12 w-full mx-2 bg-lime-600 mt-6">
          <thead className="text-white font-normal">
            <tr>
              <th>Doctor(s)</th>
              <th>City</th>
              <th>Bill</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="bg-slate-300">
            {
              data.reservations?.map((reservation) => (
                <tr key={reservation.id} className="border-b bg-slate-100 border-slate-300 ">
                  <td>{reservation.doctor.name}</td>
                  <td>{reservation.city}</td>
                  <td>
                    $
                    {' '}
                    {reservation.doctor.bill}
                  </td>
                  <td>{reservation.datetime}</td>
                </tr>
              )) ?? <tr><td colSpan="12">No reservations</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
