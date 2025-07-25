import { configureStore } from '@reduxjs/toolkit'
import favorite from '../slice/favoriteSlice'
import film from '../slice/filmSlice'
import search from "../slice/searchSlice"

export const store = configureStore({
  reducer: {
    favorite,
    film,
    search,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch