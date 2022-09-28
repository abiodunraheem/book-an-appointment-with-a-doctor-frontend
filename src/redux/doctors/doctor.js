import { CREATE_DOCTOR_URL } from '../../url_config';
import { loadStorage } from '../../storage/storage';

const initialState = [];
const DOCTOR_LIST = 'BookDoctorAppointmentFrontEnd/doctors/DOCTOR_LIST';
const CREATE_DOCTOR = 'BookDoctorAppointmentFrontEnd/doctors/DOCTOR_CREATE';

const user = loadStorage();

export const doctorsList = (doctors) => ({
  type: DOCTOR_LIST,
  payload: doctors,
});

export const createDoctor = (doctor) => ({
  type: CREATE_DOCTOR,
  payload: doctor,
});

export const postDoctor = (doctor) => async () => {
  const url = CREATE_DOCTOR_URL(user.id);
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
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTOR_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default doctorReducer;
