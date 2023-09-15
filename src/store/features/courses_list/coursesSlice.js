import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  courses: [],
  status: 'loading',
  error: null,
  coursedetails:null
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async ({id, page, num}) => {
  const response = await axios.get(`http://api.airobotoedu.com/api/course/getCourseListByProgramId?id=${id}&pageNum=${page}&pageSize=${num}`); // Replace with your API endpoint

  return response.data;
});


export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (id) => {
  const response = await axios.get(`http://api.airobotoedu.com/api/course/get_course_detail?id=${id}`); // Replace with your API endpoint

  return response.data;
});

const coursesSlice=createSlice({
  name: 'courses',
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coursedetails = action.payload;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.status = 'loading';
      })
  },
})

export default coursesSlice.reducer;
