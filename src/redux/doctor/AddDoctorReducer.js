/* This is importing the axios library and setting the API_URL to the reservations endpoint. */
import axios from 'axios';

// Add a local Api url to add a reservation
const API_URL = 'http://localhost:3000/api/v1/doctors/';
const ADD_DOCTOR = 'ADD_DOCTOR';

export const addDoctor = (doctor) => ({
  type: ADD_DOCTOR,
  payload: doctor,
});

export const addDoctors = () => (dispatch) => {
  axios.post(API_URL)
    .then((response) => {
      const doctor = response.data;
      dispatch(addDoctor(doctor));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(addDoctor(errorMsg));
    });
};

const initialState = [];

const addDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addDoctorReducer;

// import axios from 'axios';

// const CREATE_DOCTOR_ACTION = 'BOOK-AN-APPOINTMENT-WITH-A-DOCTOR/CREATE_DOCTOR_ACTION';

// const createDoctor = (postData) => axios.post('http://127.0.0.1:3000/api/v1/doctors',
//   postData);

// export const createDoctorAction = (postData) => (dispatch) => {
//   createDoctor(postData).then((response) => {
//     console.log(response.data);
//     dispatch(response.data);
//   });
// };

// const initialState = [];

// const addDoctorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_DOCTOR_ACTION:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default addDoctorReducer;

// import axios from 'axios';

// export const addDoctor = (doctorObj) => (dispatch) => {
//   axios.post('http://127.0.0.1:3000/api/v1/doctors', {
//     doctorObj,
//   })
//     .then((response) => {
//       console.log(response);
//       dispatch({
//         type: 'ADD_DOCTOR',
//         payload: response.data,
//       })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
// };

// const initialState = [];

// const addDoctorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_DOCTOR':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default addDoctorReducer;

// import NotificationManager from 'react-notifications';

// const CREATE_DOCTOR = 'BOOK-AN-APPOINTMENT-WITH-A-DOCTOR/CREATE_DOCTOR';

// export const createDoctor = (data) => ({
//   type: CREATE_DOCTOR,
//   data,
// });

// export const postDoctor = (payload) => async (dispatch) => {
//   fetch('http://127.0.0.1:3000/api/v1/doctors', payload)
//     .then((res) => {
//       dispatch(createDoctor(res.data));
//       NotificationManager.success(
//         'You have added a new Doctor!',
//         'Successful!',
//         2000,
//       );
//     })
//     .catch((error) => {
//       dispatch(createDoctor(error.response.data));
//       NotificationManager.error(
//         'Error while creating new book!',
//         'Error!',
//       );
//     });
// };

// const initialState = [];

// const addDoctorReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_DOCTOR:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default addDoctorReducer;
