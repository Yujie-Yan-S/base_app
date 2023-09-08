import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './features/home_page_card/cardSlice'
import programReducer from './features/program_page_list/programSlice'
import imageReducer from './features/carousel_pic_list/carouselImagesSlice'
import programDetailReducer from './features/program_details/programDetailSlice'
import courseReducer from './features/courses_list/coursesSlice'
import projectsSlice from './features/project_list/projectSlice'
import courseSearchSlice from './features/course_by_search/CourseSearchSlice'

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    programs: programReducer,
    images: imageReducer,
    programDetail: programDetailReducer,
    courses: courseReducer,
    projects: projectsSlice,
    courseBySearch: courseSearchSlice
  }
})
