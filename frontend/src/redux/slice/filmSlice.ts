import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShows = createAsyncThunk(
  'films/fetchFilmsStatus',
  async (params: string) => {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/${params}?include_adult=false&include_video=false&language=ru-RU&page=1&sort_by=popularity.desc`  , {
            method: 'GET',
        headers: {
         accept: 'application/json',
        Authorization: ''
      }
          })
          return res.data
        
  },
)

interface InitialState {
  film: [];
  tvshows: [];
  status: "idle" | "Загрузка" | "Успешно" | "Ошибка загрузки",
}

const initialState: InitialState = {
  film: [],
  tvshows: [],
  status: 'idle',
}

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => builder
  .addCase(fetchShows.pending, (state, action) => {
    state.status = 'Загрузка'
  })
  .addCase(fetchShows.fulfilled, (state, action) => {
    
    state.film = action.payload
    state.status = 'Успешно'
  })
  .addCase(fetchShows.rejected, (state, action) => {
    state.status = 'Ошибка загрузки';
  })
})

export const { } = filmSlice.actions

export default filmSlice.reducer
