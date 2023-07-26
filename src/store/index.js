import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './features/home_page_card/cardSlice'
import programReducer from './features/program_page_list/programSlice'
import imageReducer from './features/carousel_pic_list/carouselImagesSlice'


export const store = configureStore({
  reducer: {
    cards: cardReducer,
    programs: programReducer,
    images: imageReducer
  }
})
