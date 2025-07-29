import { configureStore } from '@reduxjs/toolkit'
import film from '../slice/filmSlice'
import search from "../slice/searchSlice"
import tmdbId from "../slice/tmdbIdSlice"

export const store = configureStore({
  reducer: {
    film,
    search,
    tmdbId,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch