import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchDoctors = createAsyncThunk('fetchDoctors', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/doctors');
  const doctors = await response.json();
  return doctors;
});

