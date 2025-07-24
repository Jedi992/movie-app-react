import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShows = createAsyncThunk(
  'films/fetchFilmsStatus',
  async ({params, typeFilm,pageNum}: {params: string, typeFilm: string, pageNum: Number}) => {
    const res = await axios.get(`https://api.themoviedb.org/3/${typeFilm}/${params}?include_adult=false&include_video=false&language=ru-RU&page=${pageNum}&sort_by=popularity.desc`  , {
            method: 'GET',
        headers: {
         accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_KEY
      }
          })
          return {data:res.data, type: params, page: pageNum}
        
  },
)

interface InitialState {
  film: null;
  tvshows: null;
  status: "idle" | "loading" | "success" | "Error",
  statusFilm:"idle" | "loading" | "success" | "Error",
  statusTvShows: "idle" | "loading" | "success" | "Error",
}

const initialState: InitialState = {
  film: null,
  tvshows: null,
  status: "idle",
  statusFilm: "idle",
  statusTvShows: "idle"
}

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => builder
  .addCase(fetchShows.pending, (state, action) => {
    state.status = 'Loading'
  })
  .addCase(fetchShows.fulfilled, (state, action) => {
    const { data, type} = action.payload
    if(type === "movie") {
      state.film = data
      state.statusFilm = "success"
    } else {
      state.tvshows = data
      state.statusTvShows = "success"
    } 
    if(state.film && state.tvshows != null) {
      state.status = 'success'
    }
  })
  .addCase(fetchShows.rejected, (state, action) => {
    state.status = 'Error';
  })
})

export const { } = filmSlice.actions

export default filmSlice.reducer