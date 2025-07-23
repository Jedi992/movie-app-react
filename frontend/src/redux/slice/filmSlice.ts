import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShows = createAsyncThunk(
  'films/fetchFilmsStatus',
  async ({params, typeFilm}: {params: string, typeFilm: string}) => {
    const res = await axios.get(`https://api.themoviedb.org/3/${typeFilm}/${params}?include_adult=false&include_video=false&language=ru-RU&page=1&sort_by=popularity.desc`  , {
            method: 'GET',
        headers: {
         accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGU5MjI4M2Q3MTcwNmZmMGVlOWJiYTc3ZmFiNzAxNCIsIm5iZiI6MTczNzM4MzMwMS4wMTQwMDAyLCJzdWIiOiI2NzhlNWQ4NTFjMzQxYzg4OTk2ZGU5MzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._utqoxXpygapUoeCSr8GlEdn3OBOA0sYzFQ-DOZQVS4'
      }
          })
          return {data:res.data, type: params}
        
  },
)

interface InitialState {
  film: null;
  tvshows: null;
  status: "idle" | "Loading" | "success" | "Error",
}

const initialState: InitialState = {
  film: null,
  tvshows: null,
  status: 'idle',
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
    } else {
      state.tvshows = data
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