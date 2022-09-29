import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';
import addDoctorReducer from './doctor/AddDoctorReducer';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    doctor: addDoctorReducer,
  },
});

export default store;
