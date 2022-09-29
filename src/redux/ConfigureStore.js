import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postDoctorReducer from './doctors/doctor';

const reducer = combineReducers({
  doctor: postDoctorReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
