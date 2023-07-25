import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './features/home_page_card/cardSlice'
import programReducer from './features/program_page_list/programSlice'

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    programs: programReducer
  }
})
