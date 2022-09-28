import React from 'react';
import SideBar from './SideBar';

export default function Reservations() {
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
            <tr className="hover:bg-white">
              {

              }
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
