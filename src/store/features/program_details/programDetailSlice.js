import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  programDetail: {},
  //   name: '',
  //   description: '',
  //   tag: [],
  //   projectList: [],
  //   courseList: [],
  status: 'loding',
  error: null
}

export const fetchProgramDetail = createAsyncThunk('programs_detail', async id => {
  const response = await axios.get(`http://api.airobotoedu.com/api/program/get_program_detail?id=${id}`) //

  return response.data.data
})

const programDetailSlice = createSlice({
  name: 'programs_detail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProgramDetail.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProgramDetail.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.programDetail = action.payload
      })
      .addCase(fetchProgramDetail.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default programDetailSlice.reducer
