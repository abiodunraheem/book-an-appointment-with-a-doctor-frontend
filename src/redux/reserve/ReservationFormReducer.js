/* This is importing the axios library and setting the API_URL to the reservations endpoint. */
import axios from 'axios';

// Add a local Api url to add a reservation
const API_URL = 'http://localhost:3000/api/v1/user_id/reservations/';
const ADD_RESERVATION = 'ADD_RESERVATION';

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
 * It takes a reservation object, sends it to the API, and then dispatches an action with the response from the API
 * @param reservation - This is the reservation object that we want to add to the database.
 */
export const addReservations = () => (dispatch) => {
  axios.post(API_URL)
    .then((response) => {
      const reservation = response.data;
      dispatch(addReservation(reservation));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(addReservation(errorMsg));
    });
};

/* Setting the initial state of the reservationFormReducer to an array with one reservation object. */
const initialState = [];

/**
 * It takes in the current state and an action, and returns a new state
 * @param [state] - This is the current state of the reducer.
 * @param action - This is the action that is being dispatched.
 * @returns An array of objects.
 */
export const reservationFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    default:
      return state;
  }
};
