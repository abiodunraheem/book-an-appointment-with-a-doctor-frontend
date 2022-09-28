import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import doctorReducer from './doctors/doctor';
import doctorFetchReducer from './doctors/DoctorList';

const reducer = combineReducers({
  MostRecent: doctorFetchReducer,
  doctor: doctorReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
