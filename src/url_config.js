export const BASE_URL = 'https://.herokuapp.com';
export const USER_LOGIN = `${BASE_URL}/login`;
export const USER_DOCTORS_URL = (userId) => `${BASE_URL}api/v1/users/${userId}/doctors`;
export const DELETE_USER_DOCTORS_URL = (userId, doctorId) => `${BASE_URL}api/v1/users/${userId}/doctors/${doctorId}`;
export const DOCTORS_URL = `${BASE_URL}/v1/doctors/`;
export const CREATE_DOCTOR_URL = (userId) => `${BASE_URL}api/v1/users/${userId}/doctors`;
