import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
  },
});

export default store;
