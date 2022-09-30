import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';
import register from './user/RegisterLoginSlice';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    user: register,
  },
});

export default store;
