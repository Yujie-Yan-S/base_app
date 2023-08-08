import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
  images:[],
  status: 'idle',
  error:null,
}



export const fetchImages=createAsyncThunk(
  'images/fetchImages',
  async ()=>{
    const response = await axios.get('http://207.246.101.155/api/images/get_homepage_slides');

return response.data;
  }
);

const imagesSlice = createSlice(
  {
    name: 'images',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
      builder.addCase(fetchImages.pending,state => {
        state.status = 'loading';
      })
        .addCase(fetchImages.fulfilled,(state,action)=>{
          state.status = 'succeeded';
          state.images = action.payload;
        })
        .addCase(fetchImages.rejected, (state,action)=>{
          state.status = 'failed';
          state.error = action.error.message;
        })
    }
  }
)

export default imagesSlice.reducer;
