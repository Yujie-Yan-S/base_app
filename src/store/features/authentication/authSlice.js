import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const generateOTP = createAsyncThunk('auth/generateOTP', async (payload) => {
  const response = await axios.post(`//api.airobotoedu.com/api/phoneNumber/generateOTP/signup`, payload);

  return response.data;
});


export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {

    console.log(userData)
    const response = await axios.post('//api.airobotoedu.com/api/register', userData);

    if (response.data.code!=200){
      throw response.data.msg;
    }
    console.log('this is response ', response)

return response.data;

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
    changeErrorMsg:(state,action) =>{
      state.error =action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateOTP.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(generateOTP.fulfilled, (state, action) => {
        console.log(action.payload)

        state.message = action.payload.msg;
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
        console.log('failed')

        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

export const {changeErrorMsg ,clearMessage , clearError} = authSlice.actions;
