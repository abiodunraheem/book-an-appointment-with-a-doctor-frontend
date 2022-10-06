import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';
import { reservationReducer } from './reservation/ReservationListReducer';
import { reservationFormReducer } from './reserve/ReservationFormReducer';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    reservations: reservationReducer,
    reserve: reservationFormReducer,
  },
});

export default store;
