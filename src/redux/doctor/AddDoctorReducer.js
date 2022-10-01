import axios from 'axios';

export const addDoctor = (doctorObj) => (dispatch) => {
  axios.post('http://127.0.0.1:3000/api/v1/doctors', {
    doctorObj,
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'ADD_DOCTOR',
        payload: response.data,
      })
        .catch((error) => {
          console.log(error);
        });
    });
};

const initialState = [];

const addDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DOCTOR':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addDoctorReducer;
