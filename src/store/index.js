import {configureStore} from "@reduxjs/toolkit";
import cardReducer from './features/home_page_card/cardSlice'

export const store=configureStore({
  reducer:{
    cards: cardReducer,

  }
})
