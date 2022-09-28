import {CREATE_DOCTOR_URL, DOCTORS_URL} from '../../url_config';
import {loadStorage} from "../../storage/storage";

const initialState = [];
const DOCTOR_LIST = 'MeetDoctorFrontEnd/doctors/DOCTOR_LIST';
const CREATE_DOCTOR = 'MeetDoctorFrontEnd/doctors/DOCTOR_CREATE';

const user = loadStorage()

export const doctorsList = (doctors) => ({
  type: DOCTOR_LIST,
  payload: doctors,
});

export const createDoctor = (doctor) => ({
  type: CREATE_DOCTOR,
  payload: doctor,
})

export const getDoctors = () => async (dispatch) => {
  const url = DOCTORS_URL;
  const doctors = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
  dispatch(doctorsList(doctors));
};

export const postDoctor = (doctor) => async () => {
  const url = CREATE_DOCTOR_URL(user.id)
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: doctor.name,
      speciality: doctor.speciality,
      bill: doctor.cost,
      image: doctor.image,
      location: doctor.location,
      email: doctor.email,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
}

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTOR_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default doctorReducer;
