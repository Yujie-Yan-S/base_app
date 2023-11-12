import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  programListFromSearch: [],
  totalPage: 16,
  status: 'loading',
  error: null
}

export const fetchProgramBySearch = createAsyncThunk('courses/fetchProgramBySearch', async query => {
  // if(query===undefined){
  const keyword1=query.keyWord?query.keyWord:''
  const pageNum1=query.pageNum?query.pageNum:0
  const pageSize1=query.pageSize?query.pageSize:12
  console.log(query)
    const response = await axios.get(`//api.airobotoedu.com/api/program/get_program_list_by_search?keyWord=${keyword1}&pageNum=${pageNum1}&pageSize=${pageSize1}`)

  // }
  // else{
  //   const response = await axios.get(`http://api.airobotoedu.com/api/program/get_program_list_by_search?keyWord=${query}&pageNum=0&pageSize=12`)
  //
  // }


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
