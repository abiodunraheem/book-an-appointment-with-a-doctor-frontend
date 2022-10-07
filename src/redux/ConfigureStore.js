import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';
import register from './user/RegisterLoginSlice';
import { reservationReducer } from './reservation/ReservationListReducer';
import { reservationFormReducer } from './reserve/ReservationFormReducer';

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem('store', serializedStore);
  } catch (e) {
    const error = new Error('Error saving to local storage');
    throw error;
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem('store');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    const error = new Error('Error loading from local storage');
    throw error;
  }
}

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    user: register,
    reservations: reservationReducer,
    reserve: reservationFormReducer,
  },
  persistedState,
});
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
