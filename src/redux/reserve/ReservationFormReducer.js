/* This is importing the axios library and setting the API_URL to the reservations endpoint. */
import axios from 'axios';

// Add a local Api url to add a reservation
const currentUser = localStorage.getItem('user') || '';
const json = JSON.parse(currentUser);
const user = (json);

const API_URL = `https://fast-atoll-38389.herokuapp.com/api/v1/reservations/${user.user.id}`;
const ADD_RESERVATIONS = 'ADD_RESERVATIONS';
const ADD_RESERVATIONS_SUCCESS = 'ADD_RESERVATIONS_SUCCESS';
const ADD_RESERVATIONS_FAILURE = 'ADD_RESERVATIONS_FAILURE';

export const addReservationsAsync = (reservations) => ({
  type: ADD_RESERVATIONS,
  payload: reservations,
});

export const addReservationsSuccess = (reservations) => ({
  type: ADD_RESERVATIONS_SUCCESS,
  payload: reservations,
});

export const addReservationsFailure = (error) => ({
  type: ADD_RESERVATIONS_FAILURE,
  payload: error,
});

export const addReservations = (reservation) => (dispatch) => {
  dispatch(addReservationsAsync());
  axios.post(API_URL, reservation)
    .then((response) => {
      const reservations = response.data;
      dispatch(addReservationsSuccess(reservations));
    })
    .catch((error) => {
      dispatch(addReservationsFailure(error.message));
    });
};

export const reservationFormReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RESERVATIONS:
      return {
        ...state,
        loading: true,
      };
    case ADD_RESERVATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };
    case ADD_RESERVATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
