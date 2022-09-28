/* This is importing the axios library and setting the API_URL to the reservations endpoint. */
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/reservations';

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

export const addReservationAsync = (reservation) => async (dispatch) => {
  const response = await axios.post(API_URL, reservation);
  dispatch(addReservation(response.data));
};

const initialState = [
  {
    id: 1,
    date: '2021-10-10',
    city: 'New York',
    doctor_id: 1,
  },
];

export default function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    default:
      return state;
  }
}
