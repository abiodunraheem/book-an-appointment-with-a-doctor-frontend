/* It's setting the API URL. */
const API_URL = 'http://localhost:3000/api/v1/reservations';
/* It's importing the axios library. */
import axios from 'axios';
/* It's setting the initial state of the store. */
const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';

/* It's setting the initial state of the store. */
const initialState = {
  reservations: [
    {
      id: 1,
      datetime: '2020-12-12 12:00:00',
      city: 'New York',
      doctor: {
        id: 1,
        name: 'Dr. John Doe',
      },
    },
  ],
  loading: false,
  error: false,
};

/**
 * It returns an object with a type of FETCH_RESERVATIONS and a payload of the reservations array
 * @returns An object with a type and a payload.
 */
export const fetchReservations = () => {
    return {
        type: FETCH_RESERVATIONS,
        payload: reservations
    };
}

/**
 * We're using the axios library to make a GET request to our API, and then dispatching the fetchReservations action with
 * the response data
 * @returns An object with a type of FETCH_RESERVATIONS and a payload of the data from the API.
 */
/**
 * It's an asynchronous function that returns a promise
 */
export const fetchReservationsAxios = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API_URL);
            dispatch(fetchReservations(response.data));
        } catch (error) {
            console.log(error);
        }
    };
}

/**
 * It takes in the current state and an action, and returns a new state
 * @param [state] - This is the current state of the store.
 * @param action - This is the action that was dispatched.
 * @returns The state is being returned.
 */
export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};
