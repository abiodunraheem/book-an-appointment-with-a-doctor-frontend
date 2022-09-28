/* It's setting the API URL. */
/* It's importing the axios library. */
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/reservations';
/* It's setting the initial state of the store. */
const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
const ADD_RESERVATION = 'ADD_RESERVATION';
const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

/* It's setting the initial state of the store. */
const initialState = {
  reservations: [],
};

/**
 * It returns an object with a type of FETCH_RESERVATIONS and a payload of the reservations array
 * @returns An object with a type and a payload.
 */
export const fetchReservationsAsync = (reservations) => ({
  type: FETCH_RESERVATIONS,
  payload: reservations,
});

/**
 * It returns an object with a type property and a payload property. The type property is a string that describes the
 * action, and the payload property is the data that is being sent to the reducer
 * @param reservation - This is the reservation object that we want to add to the state.
 * @returns An object with a type and a payload.
 */
export const addReservation = (reservation) => ({
  type: ADD_RESERVATION,
  payload: reservation,
});

/**
 * It returns an object with a type of FETCH_RESERVATIONS_SUCCESS and a payload of reservations
 * @param reservations - an array of reservation objects
 * @returns An object with a type and a payload.
 */
export const fetchReservationsSuccess = (reservations) => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  payload: reservations,
});

/**
 * It returns an object with a type of FETCH_RESERVATIONS_FAILURE and a payload of the error
 * @param error - The error message that was returned from the API.
 * @returns An object with a type and a payload.
 */
export const fetchReservationsFailure = (error) => ({
  type: FETCH_RESERVATIONS_FAILURE,
  payload: error,
});

/**
 * We're using the axios library to make a GET request to our API, and then dispatching the fetchReservations action with
 * the response data
 * @returns An object with a type of FETCH_RESERVATIONS and a payload of the data from the API.
 */
/**
 * It's an asynchronous function that returns a promise
 */
export const fetchReservations = () => (dispatch) => {
  dispatch(fetchReservationsAsync());
  axios.get(API_URL)
    .then((response) => {
      const reservations = response.data;
      dispatch(fetchReservationsSuccess(reservations));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchReservationsFailure(errorMsg));
    });
};

/**
 * It takes a reservation object as an argument, and then dispatches an action to add the reservation to the store
 * @param reservation - This is the reservation object that we want to add to the database.
 */
export const addReservations = (reservation) => (dispatch) => {
  axios.post(API_URL, reservation)
    .then((response) => {
      const reservation = response.data;
      dispatch(addReservation(reservation));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchReservationsFailure(errorMsg));
    });
};

/**
 * It takes in the current state and an action, and returns the next state
 * @param [state] - This is the current state of the store.
 * @param action - This is the action that was dispatched.
 * @returns The state is being returned.
 */

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
      };
    case ADD_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case FETCH_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: action.payload,
      };
    case FETCH_RESERVATIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
