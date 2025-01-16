import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/cartSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})