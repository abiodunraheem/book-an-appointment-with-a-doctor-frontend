import { createSlice } from '@reduxjs/toolkit';

const bodyContent = JSON.stringify({
  name: '',
  speciality: '',
  bill: '',
  location: '',
  email: '',
  avatar: '',
});

export const postDoctors = await fetch('http://127.0.0.1:3000/api/v1/doctors', {
  method: 'POST',
  body: bodyContent,
  headers: {
    'Content-Type': 'application/json',
  },
});
const data = await postDoctors.text();

// export const postDoctors = createAsyncThunk('postDoctors', async () => {
//   const response = await fetch('http://127.0.0.1:3000/api/v1/doctors');
//   const doctors = await response.json();
//   return doctors;
// });

export const postDoctorSlice = createSlice({
  name: 'postDoctors',
  initialState: {
    postDoctor: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [postDoctors.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        postDoctor: action.payload,
      };
      return newState;
    },
  },
});

export default postDoctorSlice.reducer;
