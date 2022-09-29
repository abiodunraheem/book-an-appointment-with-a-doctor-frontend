const CREATE_DOCTOR = 'BOOK-AN-APPOINTMENT-WITH-A-DOCTOR/CREATE_DOCTOR';

export const createDoctor = (data) => ({
  type: CREATE_DOCTOR,
  data,
});

export const postDoctor = (payload) => async (dispatch) => {
  fetch('http://127.0.0.1:3000/api/v1/doctors', payload)
    .then((res) => {
      dispatch(createDoctor(res));
    });
};

const initialState = [];

const addDoctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DOCTOR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addDoctorReducer;
