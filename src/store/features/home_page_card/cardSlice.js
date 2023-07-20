import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  cards: [],
  status: 'idle',
  error: null,
};

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const response = await axios.get('/api/cards'); // Replace with your API endpoint

  return response.data;
});

const cardSlice=createSlice({
  name: 'cards',
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export default cardSlice.reducer;
