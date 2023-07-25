import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  programs: [],
  status: 'idle',
  error: null
}

export const fetchPrograms = createAsyncThunk('programs/fetchPrograms', async () => {
  const response = await axios.get('/api/programs') // Replace with your API endpoint

  return response.data
})

const programSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPrograms.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchPrograms.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.programs = action.payload
      })
      .addCase(fetchPrograms.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default programSlice.reducer
