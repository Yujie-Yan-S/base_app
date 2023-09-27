import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  programListFromSearch: [],
  totalPage: 16,
  status: 'loading',
  error: null
}

export const fetchProgramBySearch = createAsyncThunk('courses/fetchProgramBySearch', async query => {
  const response = await axios.get(`http://api.airobotoedu.com/api/program/get_program_list_by_search?${query}`)

  return response.data
})

const programSearchSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProgramBySearch.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProgramBySearch.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.programListFromSearch = action.payload.data.content
        state.totalPage = action.payload.data.totalPages
      })
      .addCase(fetchProgramBySearch.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default programSearchSlice.reducer
