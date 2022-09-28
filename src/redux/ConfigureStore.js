import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';
import { reservationReducer } from './reservation/ReservationListReducer';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    reservations: reservationReducer,
  },
});

export default store;
