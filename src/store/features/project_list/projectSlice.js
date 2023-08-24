import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  projects: [],
  status: 'idle',
  error: null
}

export const fetchProjects = createAsyncThunk('project/fetchProject', async ({ id, page, num }) => {
  const response = await axios.get(
    `http://api.airobotoedu.com/api/project/getProjectListByProgramId?id=${id}&pageNum=${page}&pageSize=${num}`
  ) // Replace with your API endpoint

  return response.data
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log('action is', action.payload.data)
        state.projects = action.payload.data
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default projectsSlice.reducer
