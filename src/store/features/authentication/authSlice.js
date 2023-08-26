import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const generateOTP = createAsyncThunk('auth/generateOTP', async (phoneNumber) => {
  const response = await axios.get(`http://api.airobotoedu.com/api/phoneNumber/generateOTP?phoneNumber=${phoneNumber}`);

  return response.data;
});


export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  try {
    console.log(userData)
    const response = await axios.post('http://api.airobotoedu.com/api/register', userData);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {message:'',
    status: 'idle',
    error:null,
  },
  reducers: {
    clearMessage: (state) => {
      state.message = '';
    },
    clearError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateOTP.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(generateOTP.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(generateOTP.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.message = "Sign Up Success."
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

export const {clearMessage , clearError} = authSlice.actions;
