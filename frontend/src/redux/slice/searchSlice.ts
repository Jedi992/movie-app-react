import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSearch = createAsyncThunk(
  'search/fetch',
  async ({params}: {params: string}) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${params}&include_adult=false&language=ru-RU&page=1`  , {
            method: 'GET',
        headers: {
         accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_KEY
      }
          })
          return res.data

  },
)

interface InitialState {
    status: "idle" | "loading" | "success" | "error",
    keywords:string
    resultsSearch: null
}

const initialState: InitialState = {
    status:"idle" ,
    keywords:"",
    resultsSearch:null,
}

export const searchSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => builder
  .addCase(fetchSearch.pending, (state, action) => {
    state.status = 'loading'
  })
  .addCase(fetchSearch.fulfilled, (state, action) => {
    state.resultsSearch = action.payload
    state.status = 'success'
  })
  .addCase(fetchSearch.rejected, (state, action) => {
    state.status = 'error';
  })
})

export const { } = searchSlice.actions

export default searchSlice.reducer