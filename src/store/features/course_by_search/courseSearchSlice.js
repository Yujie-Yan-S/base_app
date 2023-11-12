import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  courseListFromSearch: [],
  totalPage: 16,
  status: 'loading',
  error: null
}

export const fetchCourseBySearch = createAsyncThunk('courses/fetchCourseBySearch', async query => {
  const response = await axios.get(`//api.airobotoedu.com/api/course/get_course_list_by_search?${query}`)

  return response.data
})

const courseSearchSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCourseBySearch.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchCourseBySearch.fulfilled, (state, action) => {
        state.status = 'succeeded'

        state.courseListFromSearch = action.payload.data.content
        state.totalPage = action.payload.data.totalPages
      })
      .addCase(fetchCourseBySearch.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default courseSearchSlice.reducer
